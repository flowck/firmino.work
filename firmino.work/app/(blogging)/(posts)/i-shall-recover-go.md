---
title: I shall recover - Go
date: 2023-07-05T18:17:00.000Z
metatags: go
description: Using the built-in function recover to handle panics.
cover: posts/go.png
isPublished: true
isArchive: false
---

In this blog post, I intend to demonstrate the usage of Go's built-in function `recover()` used to gracefully handle panics.

The example I prepared is effectively a function that takes another function as an argument and repeatedly executes it based on the time interval passed in the first parameter.

```go
package main

import "time"

func main() {
	runOnInterval(time.Millisecond*500, func(ranAt time.Time) {
		iWillPanic()
	})
}

func iWillPanic() {
	panic("something went wrong")
}
```

The implementation of `runOnInterval()` is rather simple, it makes use of a for/loop that blocks on every iteration based in the time interval provided.

```go
func runOnInterval(interval time.Duration, handler func(ranAt time.Time)) {
	ticker := time.NewTicker(interval)

	for {
		handler(time.Now())
		<-ticker.C
	}
}
```

Such a small program panics every time it's ran, and it outputs the following information on the terminal:

```bash
panic: something went wrong

goroutine 1 [running]:
main.iWillPanic(...)
```

## A naive assumption...

What if the function passed in `runOnInterval()` is not meant to panic? And that perhaps if something unexpected were to happen `runOnInterval()` should at least retry it three times before stopping the execution altogether. That's when the `recover()` function enters the conversation, and its basic syntax can be defined as such:

```go
package main

func iWillPanic() {
	panic("Yeah, I refuse to run")
}

func main() {
	defer func() {
		if r := recover(); r != nil {
			log.Println("Oops, something went wrong: ", r)
		}
	}()
	iWillPanic()
}
```

> `recover` must be called within a deferred function. When the enclosing function panics, the defer will activate and a recover call within it will catch the panic. - [Go by Example: Recover](https://gobyexample.com/recover)

## Now let's recover

```go
package main

import (
	"time"
	"log"
)

func runOnInterval(interval time.Duration, handler func(ranAt time.Time)) {
	ticker := time.NewTicker(interval)
	for {
		func () {
			defer func() {
				if r := recover(); r != nil {
					log.Printf("The handler has panicked: %v", r)
				}
			}()
			handler(time.Now())
		}()
		<-ticker.C
	}
}
```

The use of `defer` inside a loop is discouraged, but `runOnInterval` still needs to check whether the `handler` has panicked and to do that I wrapped both the `recover` and the handler inside an anonymous function that is going check whether the `handler` has panicked or not. Here are the logs shown in the terminal after the change made above:

```
2023/07/05 08:25:39 The handler has panicked: something went wrong
2023/07/05 08:25:40 The handler has panicked: something went wrong
2023/07/05 08:25:40 The handler has panicked: something went wrong
2023/07/05 08:25:41 The handler has panicked: something went wrong
2023/07/05 08:25:41 The handler has panicked: something went wrong
2023/07/05 08:25:42 The handler has panicked: something went wrong
2023/07/05 08:25:42 The handler has panicked: something went wrong
2023/07/05 08:25:43 The handler has panicked: something went wrong
2023/07/05 08:25:43 The handler has panicked: something went wrong
```

It works, but the implementation is rather incomplete because `runOnInterval` will attempt to recover forever, which is not ideal because there is no guarantee that whatever is making the `handler` panic will ever change. As a countermeasure, a counter - no pun intended - comes in quite handy:

```go
package main

import (
	"time",
	"log"
)

func runOnInterval(interval time.Duration, handler func(ranAt time.Time)) {
	panicCounter := 0
	ticker := time.NewTicker(interval)

	for {
		if panicCounter == 3 {
			log.Printf("The handler has panicked %d times. Ending execution", panicCounter)
			break
		}

		func() {
			defer func() {
				if r := recover(); r != nil {
					panicCounts++
					log.Printf("The handler has panicked. Panic count: %d", panicCounter)
				}
			}()
			handler(time.Now())
		}()

		<-ticker.C
	}
}

func main() {
	runOnInterval(time.Millisecond*500, func(ranAt time.Time) {
		iWillPanic()
	})
}

func iWillPanic() {
	panic("something went wrong")
}
```

Here are the logs that the program outputs with the introduction of the counter:

```
2023/07/05 08:29:33 The handler has panicked. Panic count: 1
2023/07/05 08:29:34 The handler has panicked. Panic count: 2
2023/07/05 08:29:34 The handler has panicked. Panic count: 3
2023/07/05 08:29:35 The handler has panicked 3 times. Ending execution
```

That's it for this blog post, and thank you for passing by.
