---
title: JavaScript 异步编程之精髓：callback / Promise / async(await)
---

## 目录

## ...

```javascript
function* run(generator) {
  let result = null
  let value = null

  do {
    result = generator.next(value)
    value = result.value

    if (typeof value === 'function') {
      value(function(error, data) {
        if (error) {
          return generator.throw(error)
        }

        result = generator.next(data)
        value = result.value
      })
    }
  } while (!result.done)
}

function readFile(filename) {
  return function(callback) {
    fs.readFile(filename, callback)
  }
}

run(function*() {
  let content = yield readFile('package.json')
  console.log(content)
})
```

这个方案比较完美地解决了异步变同步的问题，也能解决嵌套回调的问题。不过它是通过契约这么做的，有一定的毛病：最主要一个是，你要改造所有返回异步的函数，包装一下将后续流程包装在 `callback` 里面。这个东西可以通过 `thunkify` 轻松做到，但是，从调用端来看，是没有任何「契约」的。我既不知道你那边返回的是啥，你重构了以后也很难想象所有调用点都会收到影响，没有运行时的提示。
