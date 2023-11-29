---
title: "Import svelte components using an alias: @"
date: 2020-02-18T21:59:48.000Z
metatags: rollup, svelte
description: Learn how to configure rollup to import Svelte components using an alias.
cover: posts/import-svelte-components-with-an-alias.jpg
isPublished: true
isArchive: true
---

If you just landed on Svelte's world coming from Vue.js, like me you probably miss the ability to import components or other source code files using the `@` symbol, just like this:

```javascript
import ChatInput from "@/components/ChatInput";
import "@/assets/main.css";

// Instead of

import ChatInput from "../../components/ChatInput";
import "../../assets/main.css";
```

A project generated with vue/cli uses webpack to resolve `@/` to `src/` folder. If you're using the base [template](https://github.com/sveltejs/template) from Svelte, you can have this feature too, with a few changes on [Rollup](https://rollupjs.org/guide/en/) configuration file.

## Updating rollup.config.js

Rollup by default doesn't support aliases, but it has an official plugin that enables it, which is called [@rollup/plugin-alias](https://github.com/rollup/plugins/tree/master/packages/alias). Let's install it then:

```bash
npm install --save-dev @rollup/plugin-alias
```

Inside `rollup.config.js` file located in project root, import the alias plugin and the [path](https://nodejs.org/api/path.html) module from Nodejs:

```javascript
import alias from "@rollup/plugin-alias";
import path from "path";
```

Rollup's configuration file exports an object. Look for the property `plugins` inside the exported object, and then add following declaration:

```javascript
alias({
  entries: [
    {
      find: "@",
      replacement: path.resolve(__dirname, "src/"),
    },
  ],
});
```

In the code above I am configuring a new alias, this plugin suports multitple alias, and the one I defined, will look for `@` symbol in any `import` declaration and then in compile time, will replace it by the full directory path to the `src` folder thanks to `path.resolve(__dirname, "src/")`.

That's it, after these small changes, you will be able to import components using `@` as an alias for the `src/` folder.

## References

- [Rollup alias docs](https://github.com/rollup/plugins/tree/master/packages/alias)
- [Cover by Wonderlane](https://unsplash.com/photos/6jA6eVsRJ6Q)
