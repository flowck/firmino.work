---
title: "Http in Go"
date: 2022-11-20 17:57:00
metatags: golang
description: Http in Go in-depth
cover: "posts/juan-pablo-mascanfroni-duMVAANgtQ4-unsplash-3.webp"
isPublished: false
isArchive: false
---

## Basic http server

### Port listening

Regardless of the programming language or web framework, at some point in the process of writing an HTTP server we are required to listen it to a port, that's just how network-based programs works, and Go follows the same process.

The `http` package comes with a function that eases for us the process of listening to a network port and binding the http server to it.

```go[class="line-numbers"][class="language-diff"]
package main

import (
    "http"
    "fmt"
)

func main() {
    http.ListenAndServe("localhost:4000", nil)
}
```

That's all needed to listen and bind a http server to a port, on this case the port in use is `4000`.

If no other program is listening to that port, the go program should keep running and if a request is made to the address the program is available, the output should be a message indicating that the page hasn't been found:

```bash
curl http://localhost:4000

> 404 page not found
```

The address passed onto `ListenAndServe`, can be written in other forms, such as passing the IP address of the host:

```go
func main() {
    http.ListenAndServe("127.0.0.1:4000", nil)
}
```

Unless the http server to be listened to is not on the same host where this code will be executed, the host from the address can be omitted in the following way:

```diff-go[class="line-numbers"][class="diff-highlight"]
 func main() {
-   http.ListenAndServe("127.0.0.1:4000", nil)
+   http.ListenAndServe(":4000", nil)
 }
```

Given that it's common for the port to be passed onto the program through an environment variable, the code above can be rewritten in the following way:

```diff-go[class="line-numbers"][class="language-diff-go"][class="diff-highlight"]
 // Assuming that the value came from os.Getenv()
 // and has been properly parsed into an integer

 var port := 4000
 func main() {
-   http.ListenAndServe("127.0.0.1:4000", nil)
-   http.ListenAndServe(":4000", nil)
+   http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
 }
```

### Route handlers

### Http methods

### Replying JSON

### Receiving JSON

### Replying with file(s)

### Receiving file(s)

## Production http server
