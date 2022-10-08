---
title: Babel与TypeScript
category: JavaScript
---

# Babel v.s. TypeScript

* [Basically, what can output the same code with either one of the tool](https://blog.logrocket.com/babel-vs-typescript)
* right now in our project, we use TypeScript + Babel to transpile code that runs in browser and jest environments
* How Babel process your code: `code string written in ESx + TS + JSX --(@babel/preset-typescript)--> ESx + JSX code with type information erased --(@babel/preset-react)--> ESx + JavaScript code --(@babel/preset-env)--> ES5 code`
* How TypeScript process your code: `code string written in ESx + TS + JSX --(tsc compiler)--> ES5 code`
