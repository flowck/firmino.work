---
title: Resolving Typescript paths using Jest, and ts-jest
date: 2021-02-25 21:09:57
metatags: typescript, jest
description: Learn how to resolve Typescript paths using Jest and ts-jest
cover: posts/jest-failing-to-resolve-paths.png
---

Today I ran into a problem while trying to write tests for modules written in Typescript which used paths configured in <code>tsconfig.json</code> and resolved during compile with <code>tsconfig-paths</code>:

![resolving typescript paths](/posts/jest-failing-to-resolve-paths.png)

Jest was not able to resolve the dependencies imported by the module I wanted to test, and I was able to make it work by mapping again the paths I had mapped in <code>tsconfig.json</code>.

Here are the three folders mapped in <code>tsconfig.json</code>:

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "domain/*": ["./domain/*"],
      "application/*": ["./application/*"],
      "infrastructure/*": ["./infrastructure/*"]
    }
  }
}
```

And here is how I mapped the same folders in jest.config.js:

```javascript
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "./",
  moduleNameMapper: {
    "domain/(.*)$": "&lt;rootDir&gt;/src/domain/$1",
    "application/(.*)$": "&lt;rootDir&gt;/src/application/$1",
    "infrastructure/(.*)$": "&lt;rootDir&gt;/src/infrastructure/$1",
  },
};
```

Here is the output of Jest:

![resolving typescript paths](/posts/jest-resolving-typescript-paths.png)

Simple config, and yet a life saviour for Typescript based projects.

Thanks!

## References

- [https://jestjs.io/docs/en/configuration.html#modulenamemapper-objectstring-string--arraystring](https://jestjs.io/docs/en/configuration.html#modulenamemapper-objectstring-string--arraystring)
