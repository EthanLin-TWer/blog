---
layout: post
title: 从项目上一个模块疑惑说开去
---

## JavaScirpt也有模块化？
起因是这样的，今天发现项目上的每个js文件基本都是这样的写法：

```javascript
module("module.name.bainianlaodian", (function() {
   function isValidRequest() {
      // implementation;
   }
   return {
      isValidRequest: isValidRequest
   }
}()))
```

然后在外部引用的时候只需要使用`module.name.bainianlaodian.isValidRequest()`就可以调用模块内的函数了。