---
title: Notes - Introduction to Software Testing in Go
date: 2022-06-10 21:30:00
metatags: golang
description: Notes on setting up a test suit in Go
cover: "posts/golang.png"
---

![Golang](/posts/golang.png)


## Testing Philosophy

Unlike other programming languages, Go's standard library doesn't come with methods to perform assertions, it relies on regular conditional statements and comparison operators to assert what's expected of an operation. INTERESTING. 

## Example

```go
// main_test.go

package main_test

import (
	"testing"
)

func TestAddition(t *testing.T) {
  got := 2 + 2
  expected := 4

  if got != expected {
    t.Errorf("Dir not get expected result. Got: '%v', wanted: '%v'", got, expected)
  }
}


```

## Types of tests in Go

- Test
  - Unit
  - Integration
  - End to End
- Benchmark
  - Performance
- Example
- Documentation

## Testing-related Packages

- testing
- testing/quick: Useful to simplify black-box testing
- testing/iotest: Useful to test functions that rely on I/O operations
- net/http/testing: Useful to test functions that perform network operations;

## Community Projects

- Testify
- Ginkgo
- GoConvey
- httpexpect
- gomock
- go-sqlmock

## Writing Tests

### Reporting Test Failures

There are two type of failures supported by Go's standard library

- Immediate failure
- Non-immediate failure