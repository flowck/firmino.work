---
title: Handling missing dependencies in Go
date: 2022-11-14 18:24:00
metatags: vuejs
description: Handling missing dependencies on a Go project
cover: "posts/organisation.jpg"
---

Today I've just learnt about `go mod tidy`, which helps to solve the issue of missing dependencies on a Go project after installing a new package:

```
go mod tidy
```
