---
title: Babel与TypeScript
category: JavaScript
---

# Babel v.s. TypeScript

* [Basically, what can output the same code with either one of the tool](https://blog.logrocket.com/babel-vs-typescript)
* Babel is a transpiler and has features like syntax transformation, poly-filling, code transformation etc., to transpile code written in latest ECMAScript version to ES3-ES5 code that all modern browsers can execute by default
  * cons: Babel ignores any type checks 
  * pros: Babel is more flexible in code transformation
  * pros: Babel offers much richer ecosystem support like style-components/@emotion babel plugins
  * pros: Babel build optimized bundles for legacy browsers and modern browsers via the `@babel/preset-env`
  * migrations: you can add TS support incrementally on existing Babel projects or pure JS projects
  * differences: Babel compiles decorators differently than TypeScript. `@babel/plugin-proposal-decorators` with `legacy: true` needs to be set
  * performance are similar/identical
* TypeScript is a programming language built on top of JavaScript who has its own compiler. It works as a linting layer on top of JS and enforces types to help developers minimize common errors 
* right now in our project, we use TypeScript + Babel to transpile code that runs in browser and jest environments
* How Babel process your code: `code string written in ESx + TS + JSX --(@babel/preset-typescript)--> ESx + JSX code with type information erased --(@babel/preset-react)--> ESx + JavaScript code --(@babel/preset-env)--> ES5 code`
* How TypeScript process your code: `code string written in ESx + TS + JSX --(tsc compiler)--> ES5 code`
* if you're using both, better have Babel only for transformation and TypeScript only for type checking

## Transpiling v.s. Polyfill-ing 

* transpiling is a process to transform a piece of code (usually written in newer syntax/operators supported in higher ECMAScript specifications) to another piece of code (usually written in older syntax constructs like ES5 or even ES3 that older browsers can understand)
* polyfill-ing usually involves new functions in existing global objects instead of new syntax/constructs, so there is no transpilations needed, but some scripts is needed to fill in the gap (to add/update the new functions) 

## References

* [Is Babel still relevant for TypeScript projects?](https://dev.to/mbeaudru/is-babel-still-relevant-for-typescript-projects-36a7)
* [Babel config options](https://babeljs.io/docs/en/options)
* [TypeScript config options](https://typescriptlang.org/tsconfig)

babel presets:

* [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)
* [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react)
* [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript)
