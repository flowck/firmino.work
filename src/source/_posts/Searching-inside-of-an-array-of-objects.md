---
title: Searching inside of an array of objects - Javascript
date: 2020-02-10 17:57:20
metatags: javascript
description: Searching inside of an array of objects using .filter() and .search() methods in Javascript.
cover: "blog-images/searching-inside-of-an-array-of-objects.jpg"
---

One of my favorite methods from the `Arrays` object, is the `.filter()` method. it allows javascript programs to search for an element inside of an array. What I like the most about this method, is that the developer has the flexibility of writing an element inside of an array of any kind of elements. On this blog post, I will focus on:

* Searches inside of an array of objects
* Write a wrapper function that allows javascript programs to search any kind of array of objects



## The syntax

`.filter()` method receives a function as a callback or argument. This function has one mandatory parameter that represents each item of the array during the internal iteration of `.filter()`. Inside of the call back it's required a special either `true` or `false` as the result of the operation to assure the existence or non-existence of the element inside of the array.

### Searching/filtering an element of type Number

```javascript
const x = [0, 1, 20, 4, 5];

console.log(
	x.filter(item => item === 4)
);

// 4
```



## Searching for objects

To search for an object inside of an array, you as a developer will need to know the structure of the object and then write a callback function that fits that exact data structure.



### Example

```javascript
const listOfNames = [
  {
    name: "Firmino",
    age: 23
  },
  {
    name: "Gonçalves",
    age: 19
  },
  {
    name: "Changani",
    age: 8
  },
  {
    name: "Nelson",
    age: 67
  },
  {
    name: "Mandela",
    age: 34
  }
];

const result = listOfNames.filter(
  item => {
    return item.name.search(new RegExp("MANDELA", "i")) >= 0;
  }
);

console.log(result);
```

The code above is way more complex than the first example, but the essence is exactly the same:

* An array `listOfNames` was defined with several objects, each with two properties: `name` and `age`
* I am filtering `listOfNames` array and assigning the result to the `result` constant.
* Inside the callback function, I am calling the `.search()` method from `item.name` to search for the string `MANDELA`. Since `.search()` is case sensitive while searching, I am passing a regular expression with the option `i` for case insensitive, instead of plain string.
* `.search` either returns `-1` meaning not match, or it returns a positive integer starting from `O`. For this reason I defined a comparison to get `true` or `false` returned by the callback function.



## A general solution

The code above works, but I decided to work on a general approach that would also allow a program to set the object property to be used as a search parameter, and also support `Numbers`.

```javascript
/*
* search: It return an array of elements that match the search condition
* @param {Array} arr
* @param {String} prop
* @param {String/Number} param
* @returns {Array}
*/
function search(arr = [], prop, param) {
  const searchParam = new RegExp(param, "i");
  return arr.filter(
    item => {
      return new String(item[prop]).search(searchParam) >= 0;
    }
  );
}
```

* The search function receives 3 arguments: `arr` an Array of objects, `prop` the property to be used as search/filtering parameter, and `param` which represents the actual value we expect the `.search()` to match
* To improve the readability, I assigned the regular expression declaration to `searchParam` constant
* And to support `Number`, I decided to wrap `item[prop]` inside of `new String()`. This means that each property value would be converted to `String`.
* And last, since the function doesn't know which object property would be used as a search parameter, I decided to access the property by using square brackets `item[prop]`.



This function could be improved, with things like parameter validation, support for nested objects and so on, but for the sake of simplicity, I decided to leave it just like it is right now. 



## References

[String.prototype.search()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)

[Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

[Post cover by Aurelien Romain](https://unsplash.com/photos/ge2mkvxvS_Q)