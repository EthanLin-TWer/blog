# TASK-3 Upgrade React toolchain 

* [x] pnpm
* [x] react 18
* [x] react router dom + examples
* [x] eslint + typescript parser
* [x] prettier (separate config)
* [x] husky
  * [x] commit-msg: validate commit message
  * [x] pre-commit: run lint & test
  * [x] pre-push: runs deployment - no need to change  
* [x] React Query，state managements won't be needed any more for a blog site - overkill for this project
* [x] TypeScript - already in place
  * ES2023 while writing code
* UI - MUI + examples
  * Add Loading component when loading blog list
  * Add Loading component when loading blog detail
  * Add NoContent component when network failed in loading blog detail
  * Add Error component when component rendering goes wrong
* webpack
* [x] dev server with hot reload - already there
* [x] folder structure
* [x] styling - styled-components + examples - overkill for such project
  * [x] https://stylus.bootcss.com/docs/operators.html - I feel css modules works better
* [x] jest + RTL + examples: component level testing - overkill for content-driven sites like this
* [x] mock server with msw - not necessary
* [x] redux + @reduxjs/toolkit + examples - currently not used
* [x] README
* [x] environment variables
* [x] rewrite some code with hooks
