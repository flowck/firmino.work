---
title: Using SASS variables inside vue components
date: 2020-01-22 22:06:00
tags: vuejs, sass
description: Learn how to use SASS variables inside vue components.
cover: "blog-images/using-sass-variables-inside-vue-components.png"
---

[SASS](https://sass-lang.com/) is one of the first CSS [preprocessors](https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor), it was developed in 2006 by Natalie Weizenbaum, Chris Eppstein, and Hampton Catlin. Not only SASS is one of the oldest CSS preprocessors, but it is, also the most popular among web developers.

One of SASS's coolest feature is the ability to assign values to [variables](https://sass-lang.com/documentation/variables) and then re-use it along with the project, the variables can live on a different file and be accessed by `@import './_file-were-variables-were-defined.scss'`. This also happens when you choose to use SASS on a [Vue](https://vuejs.org/) based project, but, as long as you access the variables on `.scss` or `.sass` files, if you try to access a variable that was defined in a file with these extensions inside a Vuejs component, [node-sass](https://www.npmjs.com/package/node-sass?activeTab=versions) will return an error like this:

<script src="https://gist.github.com/flowck/f2ca5389543dce8f23caa3c921bc0978.js"></script>

## Why does this happen?

- In the development execution time, Vuejs components do not have access to any features of SASS stylesheet.
- SASS variables are not CSS variables, which means that after `node-sass` processes SASS files, the variables will no longer exist in the output file because `node-sass` replaces it with the real values.

## How to fix this issue?

Under the hood of Vue's cli, there is webpack handling all the `.vue`, `.sass`, `.scss`, `.js` files. [Webpack](https://webpack.js.org/) with its [plugins](https://webpack.js.org/plugins/) does a series of transformations to generate plain `html`, `css` and `javascript`.

The plugin responsible to handle SASS files on webpack is [sass-loader](https://github.com/webpack-contrib/sass-loader), and on its options object it's possible to pass the `prependData` in order to share variables globally. It includes

- Other .sass or .scss files
- Style blocks defined inside Vuejs components.

To add the `prependData` option edit the `vue.config.js` file located in the root of your vuejs project generated with the Vue cli, if it doesn't exist you can create one. After that, edit or add the code below:

<script src="https://gist.github.com/flowck/916cfd399f5df826a1e4d2ccc3eaf9f6.js"></script>

In the code above are the configurations for the node-sass plugin running on webpack. The `prependData` property receives a string with a SASS declaration importing the `sass` files where I defined the global variables. After that, you should be able to reference variables inside of your `.vue` components.

## Acknowledgments

I've been using SASS for a while, and only got to know the creators when I started writing this article, their work was pretty impressive and I would like to acknowledge them on this article.

- [Natalie Weizenbaum](https://github.com/nex3)
- [Chris Eppstein](https://github.com/chriseppstein)
- [Hampton Catlin](https://github.com/hcatlin)
- [Open source contributors: node-sass](https://github.com/sass/node-sass/graphs/contributors)
- [Open source contributors: sass](https://github.com/sass/sass/graphs/contributors)

## References

- [sass-loader](https://webpack.js.org/loaders/sass-loader/)
- [Sharing Global Variables](https://vue-loader.vuejs.org/guide/pre-processors.html#sharing-global-variables)
- [Post cover by: XiaoXiao Sun](https://unsplash.com/photos/e8e4YY65sOk)
