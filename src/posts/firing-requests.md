---
title: Firing http requests
date: 2022-11-25 22:03:00
metatags: go, golang, http
description: Read more about executing concurrent HTTP requests using Promises and async/await.
cover: "posts/austin-schmid-CHi0eieAaCQ-unsplash.webp"
isPublished: false
isArchive: false
---

## Motivation

Coming from Javascript firing http request has been part of the kind of instruction I have to write often because more often than not, the web application I work on, consumes data from an external source.

Very recently I decided to build a small system that uses an external API as its main source of data instead of a regular database, and to achieve that I decided to rely on Go's http package from the standard library. Performing simple GET requests was quite straightforward, but the challenges to me arose when I had to perform custom requests by passing request headers. Nevertheless, I eventually manage to learn how to do that, and as the disciplined learner that I am trying to be, I decided to formally document it here.

## Introduction

## A simple GET

An GET operation to fetch data can be easily performed with the method `http.Get(url)` from the package `http`, but there are extra steps needed in order to:

1. Handle request errors
2. Handle errors while parsing the response's body
3. Handle errors during the unmarshal of the response's content

```go[class="line-numbers"][class="language-diff"]
type Comment struct {
	PostId int    `json:"postId"`
	Id     int    `json:"Id"`
	Name   string `json:"name"`
	Body   string `json:"body"`
}

var url = "https://jsonplaceholder.typicode.com/comments"

func main() {
	req, err := http.Get(url)
	if err != nil {
		panic(err)
	}
	defer req.Body.Close()

	response, err := io.ReadAll(req.Body)
	if err != nil {
		panic(err)
	}

	var comments []Comment
	if err = json.Unmarshal(response, &comments); err != nil {
		panic(err)
	}

	fmt.Println(comments)
}

```

The code above is quite straightforward, and doesn't require too much explanation. The following section highlights how a POST request that carries a payload can be written.

## A simple POST

Making A POST call that carries a payload in JSON ins't that much different from making a GET request, except that the following things have now been taken in considation:

1. The creation of the payload, which can be a simple string, or a struct that is then marshalled
2. The `http.Post()` requires two additional arguments: a string that specifies the type of the content and the payload which a struct that implements the interface `io.Reader` such as `bytes.Buffer`

```go[class="line-numbers"][class="language-diff"]
func main() {
    data := Comment{
        Name: "Testing a POST request",
        Body: "Let's send more content",
    }

    payload, err := json.Marshal(data)
    if err != nil {
        panic(err)
    }

    req, err := http.Post(url, "application/json", bytes.NewBuffer(payload))
    if err != nil {
        panic(err)
    }
    defer req.Body.Close()

    response, err := io.ReadAll(req.Body)
    if err != nil {
        panic(err)
    }

    var comment Comment
    if err = json.Unmarshal(response, &comment); err != nil {
        panic(err)
    }
}
```

## Request headers

## Beyond the standard library

## Conclusion
