---
title: "LeetCode's Reverse String: in-place with O(1) extra memory."
date: 2021-10-14T23:04:19.000Z
metatags: algorithms
description: Write a function that reverses a string. The input string is given
  as an array of characters s.
cover: posts/algo.jpg
isPublished: true
isArchive: true
---

Write a function that reverses a string. The input string is given as an array of characters s.

Example 1:

```
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```

Example 2:

```
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```

Follow up: Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

## My implementation

```
// o - l - l - e - h
// h               a
// h - e -     l   o
// h - e - l - l - o
```

I've decided to use the [mirroring technique](https://rubikscubers.wordpress.com/2017/02/24/mirroring/) to implement the string reversal algorithm with the objective of obeying the constraint of using O(1) extra memory: No new array shall be created in runtime.

```javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    const tmp = s[l];
    s[l] = s[r];
    s[r] = tmp;
    l++;
    r--;
  }

  return s;
};
```

By using the mirroring technique the following operations are going to be performed on each iteration:

```
What is left will be right.
What is right will be left.
```

Source: https://rubikscubers.wordpress.com/2017/02/24/mirroring/

## References

- [344. Reverse String](https://leetcode.com/problems/reverse-string/)
