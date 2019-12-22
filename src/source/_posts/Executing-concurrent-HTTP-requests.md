---
title: Executing concurrent HTTP requests
date: 2019-12-22 21:09:57
tags: javascript, nodejs, asynchronous, programming, promises, concurrency 
---

What is concurrency anyway? You've probably known or heard this term somewhere, so before going into specific implementation details, let me explain or refresh you about the concurrent part using Wikipedia:

>In [computer science](https://en.wikipedia.org/wiki/Computer_science), **concurrency** is the ability of different parts or units of a program, algorithm, or problem to be executed out-of-order or in the partial order, without affecting the outcome. This allows for parallel execution of the concurrent units, which can significantly improve the overall speed of the execution in multi-processor and multi-core systems.


With this in mind, let's go straight to a use case where we need to write an application that executes multiple HTTP GET requests to an endpoint, stores each result in an array, and then logs the result into the terminal.

## Helper function

In the script below, I implement a small helper function that uses [axios](https://www.npmjs.com/package/axios) to execute HTTP requests, at the same time these functions also logs in the terminal the time spent executing the HTTP request.



<script src="https://gist.github.com/flowck/9e422fe9ac958f42bfbaeee65dbcdc77.js"></script>



## Non-concurrent requests

In the script below, where I manage to implement a function that takes n as a parameter, representing the number of requests to be executed. 

The get function returns a promise object, so I am using the await keyword inside on an async. On this same function, I am also logging the overall execution time using the [hrtime()](https://nodejs.org/api/process.html#process_process_hrtime_time) method from the process package.



<script src="https://gist.github.com/flowck/6dcedb5e2fc5bc2153752c8fa6b46403.js"></script>



Due to the get function being called straight with the [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) keyword, the for statement only iterates next when the promise is resolved. In the image, bellow can see that each request is executed one after another.



![Non concurrent](/blog/blog-images/non-concurrent.gif)



## Concurrent requests

Since none of the results depend on each other, we can simply execute all the requests at once. 

With just a few changes in the script above, it was possible to achieve a good level of concurrency and reduce the overall request's execution time from 10s to 3s.

In the script below, I wrap all the unfulfilled request promises in an array and then I use Promise.all all of the 50 promises. 



<script src="https://gist.github.com/flowck/fd04fb17ef771a808baa662044c17e1b.js"></script>



In the result bellow you can that the script took 3s seconds to execute 50 requests instead of 10 seconds as in the first script.



![Concurrent requests](/blog/blog-images/concurrent.gif)



The Promise.all(results) method, returns a single promise when all the promises stored on results are fulfilled.

 

## References

* [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
* [Concurrency vs. Parallelism, Lokesh Gupta](https://howtodoinjava.com/java/multi-threading/concurrency-vs-parallelism/)
* [Concurrency model and the event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)