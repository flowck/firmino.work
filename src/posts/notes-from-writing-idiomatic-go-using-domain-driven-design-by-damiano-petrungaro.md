---
title: Notes from - Writing idiomatic Go using Domain Driven Design, Damiano Petrungaro
date: 2022-07-07 12:16:00
metatags: golanng, ddd
description: My notes from Damiano Petrungaro's presentation about Golang and Domain-Driven Design
cover: "posts/engin-akyurt-2-eCuma3qO0-unsplash.jpg"
isPublished: true
isArchive: false
---

> Rough notes. Please watch the [original](https://www.youtube.com/watch?v=dp1cc6-QKY0) presentation.

- DDD usually requires two approaches: Strategic Design and Tactical Design
- Artifacts should be grouped by (business) context rather than by kind
- When packages of different contexts need to communicate with each other, an Anti-Corruption layer can be introduced.

![Packaging via bounded contexts](/posts/packaging-via-bounded-contexts.png)

## Tactical Design

- Value Type ([Value Object](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/implement-value-objects))
- [Repository Pattern](https://threedots.tech/post/repository-pattern-in-go/)
- A domain struct should not be created with invalid state, nor should it be allowed to have its state invalidated during runtime.

### Value-Type Pattern

A Value-Type is equivalent to the Value Object pattern in OOP languages.

### Repository Pattern

- Decouples the domain layer from the data layer. Should the data source change, the domain will not be impacted assuming it's using this pattern.
- Facilitates testing without the need of a real database / service.

## References

- [Writing idiomatic Go using Domain Driven Design, Damiano Petrungaro](https://www.youtube.com/watch?v=dp1cc6-QKY0)
