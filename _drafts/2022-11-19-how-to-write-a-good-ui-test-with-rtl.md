---
title: 如何正确地使用react-testing-library编写测试？
category: JavaScript
---

- [x] should I use `await waitFor(() => {}, { timeout: 3000 })`?
  - `waitFor` returns a promise, so you should always `await`
- [x] what is `act()`? when should I use `act()`? 
  - most functions RTL provides are already in `act()`: `render` / `fireEvent` / `userEvent`, so most of the time you don't need to manually write `act()`
  - you need to do this when you: 1) trigger multiple calls in an action; 2) there are other async actions happened outside of React's stack, like `setTimeout`, `jest.mockTimer`, etc
  - you could also use `await screen.findByXXX` to allow some waiting for simple scenarios
  - you will then need `await waitForElementToBeRemoved()` to wait for some loading / modal / etc.. disappearing
  - [all async methods are listed here](https://testing-library.com/docs/dom-testing-library/api-async/)
- [x] why should we use `await` for `screen.(get/find/query)By` function?
  - only `screen.findByXXX()` returns a promise that waits for the element to show up in 1s by default
- [x] difference of `getBy`, `queryBy` and `findBy`? when should I use which one?
  - `query(All)By` is the only one that doesn't throw exceptions on 0 matches, so it's good for query absent elements
  - `find(All)By` is the only one that returns a Promise, so it's good to use it to wait for an element to show up after some synchronous update / state change, it comes with a default time out of 1000ms
  - `get(All)By` throws exception and is synchronous, so it's good to use it to get something you know it's definitely going to exist
- [x] how to write good tests? 
  - reiterates on the grounding principles: expressive, one assertion per test, short
  - run tests synchronously with `--runInBand` and `--maxWorkers=1` so you can write multiple `test()`s, one assertion each
  - only use `data-testid` to make tests stable: won't fail when you adjust dom structure, move elements/components around 
  - encapsulate RTL calls with another layer of helpers to make it expressive
  - customize jest testers/matchers? 
  - testing strategy: what to mock? hook or API calls? 
- [?] examples? 
  - simplest: CURD rendering: with mocking
  - simple: with design system like MUI: encapsulate selectors
  - medium: with one API call in rendering + clicking event: handled by `act()` by default, only `await screen.find` needed
  - complexer: triggers multiple API calls: explicit `act()` and/or `waitFor` `waitForElementToBeRemoved` needed
  - complexest: with complex interaction like form / submit / validation 
- how `waitFor()` know when should it stop to wait if there are multiple mixed `screen.get` and `expect` calls inside?
- how about `act(() => {})`, `act(async () => { await })`, `await act(()) => {})` and `await act(async () => { await })`
- how `waitFor()` ... what?

## Referencing 

* [React Testing Library - Query APIs](https://testing-library.com/docs/queries/about)
* [Appearance and Disappearance](https://testing-library.com/docs/guide-disappearance/)
* [React Testing Library and the “not wrapped in act” Errors](https://davidwcai.medium.com/react-testing-library-and-the-not-wrapped-in-act-errors-491a5629193b)
* [You Probably Don't Need act() in Your React Tests](https://plainenglish.io/blog/you-probably-dont-need-act-in-your-react-tests-2a0bcd2ad65c)
