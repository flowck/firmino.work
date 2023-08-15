---
title: Shipping a Go service as a Docker container
date: 2023-08-15T16:17:00.000Z
metatags: go
description: Using the built-in function recover to handle panics.
cover: posts/go.png
isPublished: true
isArchive: false
---

At this day and age Docker has established itself as the de facto tool for containerisation, it is deserved given how well it abstract its complexity away from its users.
In the cloud it allows us to run containerised services as if the programming language those services have been written on don't really matter, and in fact it doesn't, provided that the service are exposed on a port.

On this blog post I will my preferred set up to Dockerize Go services.

## Binary, Binary, Binary

> Binary, Binary, Binary - [Steve Balmer](https://www.youtube.com/watch?v=Vhh_GeBPOhs&ab_channel=MrWueb007) 

The command `go build` generates a binary, and this is a relevant and non-trivial fact that is going to impact how I am going to set up the Dockerfile, but I am going to come back at this later, for now here is the code snippet:

```dockerfile
##
## Builder stage
##
FROM golang:1.20 AS builder

ARG VERSION

WORKDIR /usr/app
COPY . ./

ENV CGO_ENABLED=0
RUN go build -buildvcs=false -o bin/service -ldflags="-X main.Version=${VERSION}" ./

##
## Final stage
##

FROM alpine
WORKDIR /usr/app
COPY --from=builder /usr/app/bin/service ./service

ENTRYPOINT ["./service"]
```
[Source](https://github.com/flowck/blog_code_snippets/blob/cb7c95b57e2b5ace9574d094e4613968b3d54359/go_docker/Dockerfile#L1)

The Dockerfile above has two stages where the first stage is solely focused on building a binary from the [source code](https://github.com/flowck/blog_code_snippets/tree/cb7c95b57e2b5ace9574d094e4613968b3d54359/go_docker):

- It relies on the base image `golang:1.20` and it is aliased as `builder` because it's referenced further down
- Defines docker argument `VERSION`, which is used to specify the image's and the binary's version during build time
- It sets a workdir, and copy everything from the project root to the root of the working directory set as `/usr/app`
- CGO is disabled because the source code doesn't rely on any library written in `C`. [Read more here](https://stackoverflow.com/questions/61515186/when-using-cgo-enabled-is-must-and-what-happens)
- Builds the binary:
  - Omitting the version control metadata with `-buildvcs` set to false
  - Defines the output directory and binary filename to `bin/service`
  - Sets the docker argument `VERSION` to the [variable](https://github.com/flowck/blog_code_snippets/blob/cb7c95b57e2b5ace9574d094e4613968b3d54359/go_docker/main.go#L14) `Version` defined in `main.go`

After the binary gets built on the state named `builder`, Docker jumps into the second stage and does the following:

- It uses a very small Docker image based on Linux named [alpine](https://hub.docker.com/_/alpine), which is as big as ~5 MB in size, and that is possible because the newly built binary doesn't rely on an external runtime such as Node.js or JVM
- The working directory is set to `/usr/app`
- The binary generated in the previous stage gets copied thanks to ` COPY --from=builder `
- Finally, the entrypoint is a call to the binary `./service`, just like you would do if you were running it locally

## How to build it, and run it

To build a new Docker image versioned 0.0.1, run the following command:

```
docker build --build-arg VERSION=0.0.1 -t go-docker-demo:0.0.1 .
```

And to run the image newly built run the following command:

```
docker run -p 8080:8080 go-docker-demo:0.0.1
```

## Conclusion

That's the end of this post, and perhaps to I would like to conclude that the fact that Go generates a binary that can be executed without an external runtime helps to build Docker images based in lightweight images such as `alpine`, which makes the build faster, and very cheap to host it on an Images Registry provided by a Cloud vendor, which tend to [charge](https://aws.amazon.com/ecr/pricing/) by data transferred in and out.

Cheers,<br/>
Firmino