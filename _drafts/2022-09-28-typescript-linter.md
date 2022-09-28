---
title: ESLint + TypeScript的最佳实践
category: JavaScript
---

## ESLint & TypeScript best practices

TSLint [is deprecated in 2019](https://blog.palantir.com/tslint-in-2019-1a144c2317a9), since the direction for TSLint is to combine with ESLint that provides better user experience for JavaScript users. So they work with TypeScript (and ESLint?) team and made this decision.

typescript-eslint is a ESLint plugin/parser, and is the recommended way to have TypeScript linting capability with ESLint. In order to use ESLint with TypeScript, this is the minimum packages you should require: typescript, @typescript-eslint/eslint-plugin, @typescript-eslint/parser, where:

* typescript: is the actual package who does the TypeScript->AST compilation work, internally transitively depended by @typescript-eslint/parser

* @typescript-eslint/parser is a ESLint parser that provides capability to recognize TS code, which can't be done with ESLint's default parser since some it doesn't understand some typing information. Under the hood, it uses typescript as a devDependency (but maybe in its internal dependency on the @typescript-eslint/typescript-estree and/or @typescript-eslint/scope-manager packages)

* @typescript-eslint/eslint-plugin is a set of rules you can use for your projects. It depends on the @typescript-eslint/parser package to be installed since it's specified as a peerDependency in @typescript-eslint/eslint-plugin 's package.json. It exposes not only individual rules, but also set of rules enabled by specifying 'recommended', 'eslint-recommended', 'strict', 'recommended-requires-type-checking' in ESLint's 'extends' section.

## More questions:

* How does ESLint's "extends" keyword work? What is the interface between ESLint and plugin developer?
* Go over a list of rules in [ESLint:recommended](https://eslint.org/docs/latest/rules/), [plugin:@typescript-eslint/eslint-plugin:recommended](https://typescript-eslint.io/rules/) and [plugin:react-recommended](https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules)
