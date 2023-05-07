---
title: "React: Mocking react-router-dom’s useLocation with Jest"
date: 2022-01-30 21:12:00
metatags: react.js, testing, jest
description: Mocking react-router-dom's useLocation hook with Jest
cover: "posts/react-mocking-react-router-dom-s-use-location-with-jest.png"
isPublished: true
isArchive: false
---

Testing a component relying on `react-router-dom` requires some setup before starting the actual writing of assertions, especially because some of its core features rely on browser data, such as the `location` object.

In this blog post, I am going to demonstrate how to mock the `useLocation()` hook using Jest. The same technique can be applied to mock other functions exposed by `react-router-dom`.

## Intercepting `react-router-dom`

In order to mock a specific function of a module, it’s necessary to intercept the module in the first place by calling `jest.mock("module-name", callbackFunction)`. Here is an example:

```jsx
jest.mock("react-router-dom", () => {
  // Our own implementation of the library
  return {};
});
```

## Defining `useLocation`´s mock

Before defining the `useLocation` ’s mock, I would recommend logging the value returned by the hook to make sure that the mock contains the necessary properties to prevent breaking the application. You’d do that by calling `console.log()` inside the component calling the hook.

After having checked the hook’s data structure, the mock can be defined with an arrow function that shall return the intended value during test execution.

```jsx
jest.mock("react-router-dom", () => {
  return {
    useLocation: () => {
      return {
        pathname: "/my-custom-path/name/mocked/hey",
        search: "",
        hash: "",
        state: null,
        key: "default",
      };
    },
  };
});
```

## One last thing

The code above overrides all the other hooks and functions exported by `react-router-dom`, which is not what’s intended, so to make sure that only `useLocation` is overridden, it’s necessary to include all the elements exported by `react-router-dom`. To achieve that, it’s possible to leverage Jest once again by _destructuring_ the result of the invocation of the following function `jest.requireActual("react-router-dom")`. Here is an example:

```jsx
jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useLocation: () => {
      return {
        pathname: "/my-custom-path/name/mocked/hey",
        search: "",
        hash: "",
        state: null,
        key: "default",
      };
    },
  };
});
```

That will be all, thank you.
