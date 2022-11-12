---
title: "React: Creating a Heading component leveraging Typescript’s typing system"
date: 2021-12-25 21:41:00
metatags: React, Typescript
description: Implementing a Heading component using React.createElement() and Typescript.
cover: "posts/heading-component.jpg"
---

In this blog post, I intend to demonstrate how to implement a Heading component that given a prop value, renders a [heading element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements). To achieve just that I am going to use Typescript to enforce the component’s API, and `React.createElement`.

## The API

Nowadays it's common for React's styling libraries to provide a component that enables developers to define the exact kind of heading element they want the application to render, and on this post, I plan to achieve the same:

```html
<!-- H1 -->
<Heading as="h1">The HTML Section Heading elements</Heading>

<!-- H2 -->
<Heading as="h2">Examples</Heading>
```

## Component structure

```tsx
import React from "react";

interface Props extends Partial<Omit<HTMLHeadingElement, "children">> {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function Heading({ as = "h1", children, style }: Props) {
  return React.createElement(as, { ...style }, children);
}
```

Firstly, In order to move away from a switch statement with multiple declarations of heading elements, I have decided to use `React.createElement` API because it enables the developer to pass a string stating which tag should be created. 

Secondly, I have used Typescript’s [union type](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#unions) feature to enforce the component’s consumer to pass a valid heading element’s name.

![Component’s consumer using auto-complete to define the intended heading element.](/posts/heading-component-declaration.gif)

## Extends, Partial and Omit

```typescript
interface Props extends Partial<Omit<HTMLHeadingElement, "children">> {}
```

In case you wondered what is this block of code doing, here is the explanation: I needed to inherit all the attributes of heading elements, hence the `extends` statement. However, I did not want to make them explicitly mandatory, therefore I have used the `Partial` type to make all the properties defined in `HTMLHeadingElement` interface optional. I wanted one more thing, which was to override the `children` property from the interface aforementioned, therefore I have used the `Omit` type to achieve that.

## Conclusion

This was a rather simple implementation of a component leveraging `React.createElement()`, which is the API behind JSX, and Typescript to enforce an API that enable developers to choose the exact kind of heading element they intend to use. 


## Further reading

- [Typescript: Unions](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#unions)
- [Typescript: Partial](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)
- [Typescript: Omit](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)
- [React Without JSX](https://reactjs.org/docs/react-without-jsx.html)