---
title: Linting工具生态
category: JavaScript
---

## ESLint & TypeScript best practices

TSLint [is deprecated in 2019](https://blog.palantir.com/tslint-in-2019-1a144c2317a9), since the direction for TSLint is to combine with ESLint that provides better user experience for JavaScript users. So they work with TypeScript (and ESLint?) team and made this decision.

typescript-eslint is a ESLint plugin/parser, and is the recommended way to have TypeScript linting capability with ESLint. In order to use ESLint with TypeScript, this is the minimum packages you should require: typescript, @typescript-eslint/eslint-plugin, @typescript-eslint/parser, where:

* typescript: is the actual package who does the TypeScript->AST compilation work, internally transitively depended by @typescript-eslint/parser

* @typescript-eslint/parser is a ESLint parser that provides capability to recognize TS code, which can't be done with ESLint's default parser since some it doesn't understand some typing information. Under the hood, it uses typescript as a devDependency (but maybe in its internal dependency on the @typescript-eslint/typescript-estree and/or @typescript-eslint/scope-manager packages)

* @typescript-eslint/eslint-plugin is a set of rules you can use for your projects. It depends on the @typescript-eslint/parser package to be installed since it's specified as a peerDependency in @typescript-eslint/eslint-plugin 's package.json. It exposes not only individual rules, but also set of rules enabled by specifying 'recommended', 'eslint-recommended', 'strict', 'recommended-requires-type-checking' in ESLint's 'extends' section.

## ESLint config- and plugin-

Any differences? [https://www.jianshu.com/p/a0d72a8c8d62](https://www.jianshu.com/p/a0d72a8c8d62)

* `eslint-plugin-*` is where all the actual *rule*'s JavaScript runnable code lay
* All rhe rules defined in `eslint-plugin-*` will need to be used by specifying their names in the `"rules"` section of the ESLint configuration file. Otherwise, the imported plugin won't take effect in itself. This can be done either: 
  * user import them directly, or:
  * extending an existing configuration file which already has a "rules" section (a.k.a. [shareable config](https://eslint.org/docs/latest/developer-guide/shareable-configs))
* `eslint-config-*` is usually such a shareable configuration file with a set of rules specified in the `"rules"` section in the configuration file. You can use it in your `"extends"` section in your ESLint configuration file
* `eslint-plugin-*` sometimes provides such shareable configuration files as well, e.g. `@typescript-eslint/eslint-plugin` provides extensible configurations like `plugin:@typescript-eslint/recommended`
* Right now, some famous `eslint-config-*` packages there are: 
  * `eslint-config-prettier`: it disables all rules in other packages that are known to be duplicated / conflicting with prettier
  * `eslint-config-`
* Right now, some plugins are usually used for Frontend / React projects:
  * `@typescript-eslint/eslint-plugin`: rules for TypeScript code
  * `eslint-plugin-import`: rules on how to organize the import files, with some auto-fixable rules
  * `eslint-plugin-react`: rules on React developments
  * `eslint-plugin-react-hooks`: rules on React Hooks features 
  * `eslint-plugin-jsx-a11y`: rules on Accessibility lintings on JSX

## ESLint && Prettier 

Generally speaking, while using prettier with ESLint is one option, where you can get the benefit of prettier without introducing another linting tool, there are [reasons why this is not encouraged if you are working on a new project](https://prettier.io/docs/en/integrating-with-linters.html#notes).

## More questions:

* How does ESLint's "extends" keyword work? What is the interface between ESLint and plugin developer?
* Go over a list of rules in [ESLint:recommended](https://eslint.org/docs/latest/rules/), [plugin:@typescript-eslint/eslint-plugin:recommended](https://typescript-eslint.io/rules/) and [plugin:react-recommended](https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules)
