---
title: Go's pointers
date: 2022-06-10T18:58:00.000Z
metatags: golang
description: Go's pointers
cover: posts/artem-beliaikin-aE4LRTRnQOU-unsplash.webp
isPublished: true
isArchive: true
---

A pointer holds a variable's address in the computer's memory. One can say that once a pointer is created, its value is just an address that lead you to where in the computer's memory the program will store the actual data.

## Example

```go
package main

import "fmt"

func main() {

	// Creating a pointer
	var fullNamePtr *string = new(string)
	fmt.Println(fullNamePtr) // Prints the address: 0x14000110230

	// Storing value in the pointer's address by dereferencing it
	*fullNamePtr = "John Doe"
	fmt.Println(fullNamePtr, *fullNamePtr)

	// Getting the pointer of an existing variable
	country := "Brazil"
	fmt.Println(&country)
}
```

## When to use pointers

Since I come from the Javascript world, despite learning the syntax to create a pointer, learning when to use them wasn't that obvious.

For instance, in Javascript, it is possible to mutate a property from literal object inside a function by just updating the argument passed:

```javascript
const person = {
  name: "John Doe",
};

function updateName(person, name) {
  person.name = name;
}

updateName(person, "Jane Smith");

console.log(person); // { name: "Jane Smith" }
```

In Go, such operation wouldn't mutate the struct passed as argument, unless the function `updateName` was declared with an interface ready to receive a pointer, rather than an actual value.

```go
package main

import (
	"fmt"
)

type Person struct {
	Name string
}

func updatePersonName(person *Person, name string) {
	person.Name = name
}

func main() {
	fmt.Println("Go fundamentals")

	person := Person{Name: "John Doe"}

	fmt.Println(person) // {John Doe}

	updatePersonName(&person, "Jane Smith")

	fmt.Println(person) // {Jane Smith}
}

```
