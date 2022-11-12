---
title: "Generics functions | Typescript"
date: 2020-07-04 16:25:24
metatags: typescript
description: In this post I talk about Typescript's generic functions, I show tow practical examples replacing any with generics
cover: "posts/generic-functions-typescript.jpg"
---

I started learning Typescript at the beginning of 2020 and since I came from Javascript, I became quite comfortable with my skills in this language once I learned how to create interfaces because suddenly I didn't need to use **any** as a type of variables that would receive object literals. I knew Typescript was more powerful than that, and finally, I recently decided to learn more about its features and apply it daily.

I decided to start with Generics.

## What I do understand about Generics

I see generics as a flexible mechanism in Typescript that enables developers to create **reusable components** in the form of functions, classes, interfaces, and types. In this blog post, I will focus exclusively on generic functions.

**A trivial example**

```typescript
function log(content: any): any {
  return content;
}

log(3);
log("Hello hello");
log({ title: "Generics" });
```

This is a classic example, a function that receives anything and should return something.

As you can see in the code above, neither the developer nor the application has control over the data type that `log()` is expecting. But, with generics, it's possible to improve the typing situation of the function above by making just a few changes:

```typescript
function log<T>(content: T): T {
  return content;
}

log<number>(5);
// 5
log<string>(5);
// Argument of type '5' is not assignable to parameter of type 'string'.
log<string>("Log something about generics");
// Log something about generics
```

### Example #1

Let's suppose we have a function to sort an array of objects by prices in ascending order, before learning about generics I would most likely write it using the **any** data type:

```typescript
function sortASC(items: any[]): any[] {
  return [...items].sort((itemA: any, itemB: any) => {
    return a.price - b.price;
  });
}
```

With this approach, I wouldn't have too much control over the argument data type, and I would lose Typescript's type checking capabilities. With generics, however, it's possible to tackle that and make `sortASC` safer:

```typescript
function sortASC<T extends { price: number }>(items: T[]): T[] {
  return [...items].sort((itemA: T, itemB: T) => {
    return a.price - b.price;
  });
}
```

> By extending **T** from an interface like I am doing in the code above, I am defining a constraint on **T**, meaning that whatever the interface passed as type, it should obey the interface which **T** extends it's the initial definition.

Using generics, I am now able to set type when invoking the function. Here is a quick example calling `sortASC` using two different interfaces that follow the constraint `{ price: number; }`:

```typescript
interface Vehicle {
  price: number;
  cilyinders?: number;
}
interface Bike {
  price: number;
  strokes?: number;
}

// Sort an array of vehicles
sortASC<Vehicle>([{ price: 140000 }, { price: 21000 }]);

// Sort an array of bikes
sortASC<Bike>([{ price: 15000 }, { price: 12000 }]);
```

### Example 2

For the second example, I will create a function that merges/concatenates two arrays. This function should receive two arrays as arguments, and it should return a single array with the items of both arrays:

```typescript
function arrayMerger(arr1: any, arr2: any): any[] {
  return [...arr1, ...arr2];
}
```

Now, here's how I rewrite it using generics with two types:

```typescript
function arrayMerger<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
  return [...arr1, ...arr2];
}
```

As you can see, the approach is the same as in the first example, but now with the particularity of having to types **T** and **U** and now, `arrayMerger` expects to return the union type `(T | U)[]` . Here is an example of how I call `arrayMerger` as a generic function strictly passing the types of each array argument:

```typescript
arrayMerger<number, string>([2001, 2002, 2005], ["Generics", "Typescript"]);
// [2001, 2002, 2005], ['Generics', 'Typescript']
```

## My last thoughts

From my own experience, investing time learning the different ways to apply generics on functions, classes, interfaces, and types is helping me write better Typescript code, and the more I learn about it, the more I know where and how to replace the dirty **anys** on TS code.

## References

Please read the references I used on my personal studies:

- [Typescript Handbook: Generics](https://www.typescriptlang.org/docs/handbook/generics.html)
- [Typescript built-in generics](https://fettblog.eu/typescript-built-in-generics/)
- [Typescript generics tutorial - Ben Awad](https://www.youtube.com/watch?v=nViEqpgwxHE)
- [Busy TypeScript Developer’s Guide to Advanced TypeScript by Ted Neward](https://www.youtube.com/watch?v=wD5WGkOEJRs)

## Cover by

- [Cover by Miguel A. Amutio](https://unsplash.com/photos/V6SR_VvxAQ0)
