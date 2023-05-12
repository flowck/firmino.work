---
title: Searching inside of an array of objects - Javascript
date: 2020-02-10T17:57:20.000Z
metatags: javascript
description: Searching inside of an array of objects using .filter() and
  .search() methods in Javascript.
cover: posts/searching-inside-of-an-array-of-objects.jpg
isPublished: true
isArchive: true
---

One of my favorite methods from the `Arrays` object, is the `.filter()` method. It allows javascript programs to search for an element inside of an array. What I like the most about this method, is that developers have the flexibility of searching an item inside of an array of any data structure.

On this blog post, I will focus on:

- Searching/filtering items inside of an array of objects
- Write a wrapper function that allows javascript programs to search/filter items inside of an of array of objects

## The syntax of filter()

The `.filter()` method receives a function as a callback or argument. This function has one mandatory argument which represents each item in the array. The callback function needs to return either `true` or `false` by testing the existence or non-existence of each array's element.

### Searching/filtering an element of type Number

```javascript
const x = [0, 1, 20, 4, 5];

console.log(x.filter((item) => item === 4));

// 4
```

## Searching for objects

To search for an object inside of an array, it's important to know the object structure and then write a callback function that fits that.

### Example:

```javascript
const listOfNames = [
  {
    name: "Firmino",
    age: 23,
  },
  {
    name: "Gonçalves",
    age: 19,
  },
  {
    name: "Changani",
    age: 8,
  },
  {
    name: "Nelson",
    age: 67,
  },
  {
    name: "Mandela",
    age: 34,
  },
];

const result = listOfNames.filter((item) => {
  return item.name.search(new RegExp("MANDELA", "i")) >= 0;
});

console.log(result);
```

The code above is little bit more complex than the first example, but the essence is exactly the same:

- An array `listOfNames` that contains several objects, each with two properties: `name` and `age`
- The result of the filter operation will be assigned to the `result` constant
- Inside the callback function, I am using the `.search()` method on `item.name` to search for the string `MANDELA`. `.search()` is case sensitive, it tries to look for the exact same string. To go around this, I am passing a regular expression with the option `i` for case insensitive, instead of plain string
- `.search` will return `-1` if it couldn't match the string, or it will return a positive integer starting from `O` if the string was matched

## A general solution

The code above works, but I decided to work on a general approach that would also allow programs to set the object property to be used as a search parameter, and also support filtering/searching on properties with `Number` as data type.

```javascript
/*
 * search: It return an array of elements that match
 * the search condition
 * @param {Array} arr
 * @param {String} prop
 * @param {String/Number} param
 * @returns {Array}
 */
function search(arr = [], prop, param) {
  const searchParam = new RegExp(param, "i");
  return arr.filter((item) => {
    return new String(item[prop]).search(searchParam) >= 0;
  });
}
```

- The search function receives 3 arguments: `arr` an Array of objects, `prop` the property to be used as search/filter parameter, and `param` which represents the actual value we expect the `.search()` to match
- To improve the readability, I assigned the regular expression declaration to the `searchParam` constant
- And to support the `Number` data type, I decided to wrap `item[prop]` inside of `new String()`. This means that each property value would be converted to a `String`
- And last, since the function doesn't know which object property would be used as a search parameter, I decided to access the property by using a square brackets and pass the `prop` value like this`item[prop]`

This function could be improved, with things like parameter validation, support for nested objects and so on, but for the sake of simplicity, I decided to leave it just like it is right now.

## References

- [String.prototype.search()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)
- [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Post cover by Aurelien Romain](https://unsplash.com/photos/ge2mkvxvS_Q)
