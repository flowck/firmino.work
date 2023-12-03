---
title: Inline conversion of anything to a pointer - GoLang
date: 2023-12-03T17:06:00.000Z
metatags: golang
description: On this post I talk about the use of generics to perform an inline conversion of anything to a pointer without declaring a temporary variable that often ends up not being used anywhere.
cover: posts/go.png
isPublished: true
isArchive: false
---

In Go, unless one is initialising a `struct`, one cannot outright create a pointer out of something without first initialising it to a variable:

```go
package main

type User struct {
    lastUpdatedAt *time.Time
}

func main() {
    lastUpdatedAt := time.Now()
    user := User{
        lastUpdatedAt: &lastUpdatedAt
    }
}
```

Even though the approach displayed above works just fine it still ends up requiring the initialisation of a variable that potentially won't be used anywhere, and perhaps for the use-case above one would be better off by performing an inline conversion of the intended value to a pointer.

What I do and rather often, is to write a function that will receive **anything** and return that same **thing** as a pointer, here is how I express it in code:

```go
package main

func ToPtr[T any](value T) *T {
	return &value
}

```

Here is the initial example rewritten with such a function:

```go
package main

type User struct {
    lastUpdatedAt *time.Time
}

func main() {
    user := User{
        lastUpdatedAt: ToPtr(time.Now())
    }
}
```

And that's all, thanks for passing by.
