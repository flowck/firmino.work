---
title: Building URLFY - The idea
date: 2020-01-02 12:21:08
tags: urlfy, shortening, idea, projects
description: On this blog post I explain how I came out with the idea of building a shortening service
cover: "blog-images/urlfy.xyz.png"
---

I was studying system design during the Christmas holidays of 2019, and while reading a blog [post](https://hackernoon.com/top-10-system-design-interview-questions-for-software-engineers-8561290f0444), I found a challenge that quickly caught my attention: 

>Given a (typically) long URL, how would you design service that would generate a shorter and unique alias for it?

That sounded like a very simple web application, but then, in the same blog post, a few questions where also made:

>How to generate a unique ID for each URL?
>How would you generate unique IDs at scale (thousands of URL shortening >requests coming every second)?
>How would your service handle redirects?
>How would you support custom short URLs?
>How to delete expired URLs etc?
>How to track click stats?

After reading the questions above, I got excited, because it sounded reasonable enough to be built in a short period, but also very important questions were raised.

![Urlfy](/blog/blog-images/urlfy.xyz.png)

Long story short, I ended building something which a call [Ulrfy.xyz](https://app.urlfy.xyz), a URL shortening service. Some of the questions above are yet to implemented in the project, and the Trello [board](https://trello.com/b/YZDrArI2/urlfyxyz) where I manage my backlog is open for the public.

This was a quick post to explain how and where I got this idea, in the next posts I will explain the implementation technical details.