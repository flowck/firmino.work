---
title: Comparing MongoDB ObjectIds
date: 2020-01-27 13:15:53
tags: mongodb
description: On this blog post I explain how I came out with the idea of building a shortening service
cover: "blog-images/comparing-objectids.jpg"
---

In MongoDB, the ObjectId is a data type and also a method used to generate unique strings. These strings are usually used as the value of the property `_id` of each document inside of a collection.

> TL;DR
>
> ObjectIds can be effectively compared using the `ObjectId().equals()` method.

**Here is an example**

<script src="https://gist.github.com/flowck/79bfe0cd7be2ebfc4a59dbf0ad0a3ce7.js"></script>

The string `5e2ed1b83f98e15f9799bfd2` is an ObjectId, even though its represented as a regular string. Any attempt of a comparison between two ObjectIds would return false.

<script src="https://gist.github.com/flowck/5aa176a5ed11373ffc3686ac91b6f0b3.js"></script>

**What's happening in the code above?**

Two ids are being created with the same string that obeys the ObjectId format `5e2ed3bb8f6ee86b8d4d21b7`. In the lines bellow, both constants holding the ObjectId values are printed. If you execute the script above, you will see that the terminal will print the same string twice:

<script src="https://gist.github.com/flowck/a9ea4c4c1ec73fc0f60f3302a350fcf3.js"></script>

And then, in the next line, when a comparison between the two ObjectId is made, the terminal prints `false`.

If you pay attention more closely, you will see that a comparison between the two ObjectIds would not be possible, because both constants are holding an `Object`, despite the fact they print a string when logged.

## The proper way to compare ObjectId's

Each ObjectId object has a method called `.equals()`, this method receives another ObjectId object as an argument and then compares its value to the value of the ObjectId where the `.equals()` has been called.

**Example**

<script src="https://gist.github.com/flowck/fa672aba33a81a37737026e4d4faa312.js"></script>

## References

- [ObjectId](https://docs.mongodb.com/manual/reference/method/ObjectId/)
- [Post cover by Trust "Tru" Katsande](https://unsplash.com/photos/xcneHTn8DUI)
