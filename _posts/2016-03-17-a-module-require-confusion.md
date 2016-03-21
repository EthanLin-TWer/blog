---
layout: post
title: 从一个JavaScript模块化疑惑说开去
---

> 为保护商业机密，本博客中出现的所有代码与文字均已隐去所有与客户相关的信息。若仍有泄露请第一时间联系博主我：linesh.simpcity@gmail.com。

## 原生JavaScirpt也自带了模块化支持？
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

然后在外部引用的时候只需要使用`module.name.bainianlaodian.isValidRequest()`就可以调用模块内的函数了，而且可以引用任意路径下的js文件。我就有点好奇，什么时候JavaScript有模块了？一般都是通过[IIFE](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)和闭包结合的方式来人为地创建一个“模块”，但并未看过这种直接调用的写法。而且引用时的路径是在哪里指定的？虽然靠猜也可以大概猜到，这个只需要通过维护一个全局的map记录模块名和对应的函数即可做到，不过还是挺有兴趣看一下具体的实现。于是问了一下项目组的同事，大家也表示不太清楚这个`module`及用法。那就`Ctrl+B`一下，看一下`module`这个变量的定义点吧，Intellij给出的提示是：

```
module (externs.js, src/main/webapp/.../bower_components/xdate/build)
module (colors.js, node_modules/grunt/node_modules/colors)
module (cli.js, node_modules/grunt-contrib-jslint/node_modules/jslint/node_modules/cli)
module Window (qunit.js, src/main/webapp/.../bower_components/modernizr/test/qunit)
module Window (qunit.js, src/main/webapp/.../bower_components/underscore/test/vendor)
...
```

看着都不像，而且都是通过`npm`或者`bower`引进来的工具。我所期待的结果，应该是类似于nodejs或者类似的框架或环境所提供的变量和加载方式，类似于[这篇文章](http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434502419592fd80bbb0613a42118ccab9435af408fd000)讲到的模块加载的方式。嗯，既然蛮干无用，那就求助一下程序员的~~好基友~~良师益友Google吧：

### Google也解决不到的问题

* `javascript module`
* `jquery module`
* `javascript module("", function() {`
* `commonjs module`
* `nodejs module`
* `amd javascript module`
* `es5 javascript module`
* `es6 javascript module`

用以上的方式作为关键词，均没有找到什么有价值的线索。nodejs中虽然存在`module`这么一个变量，但是项目中的这些js代码没有在服务端执行的可能。Google了一下也没有发现是jQuery或者CommonJS规范里的内容，es6中有模块的概念，但使用的是`import`的关键词。这下可没有线索了，我更加怀疑这个`module`是项目里自己定义实现的了。但是从定义处入手并不能找到有价值的线索，那怎么办呢？既然IDE也无法给出有效的提示，那我就做一下人肉搜索咯，`Ctrl+Shift+F`全文搜索一下`module`这个关键词！过了两秒钟，IDE弹出一个对话框说"1,001 occurrences found so far. Are you sure you wish to continue?"额的神啊，看来这个刨根问底还真不容易，不过既然这是唯一的线索了，那果断还是要Continue的。于是我拍下了Continue，一共有7455处地方出现了`module`这个词。茫茫词海中，该如何捞到有价值的线索呢……？

### 谜底水落石出

有意思。由于搜索的名字太过宽泛，所以必然有很多不相关的结果，应该选择性忽略。比如`pom.xml`、`build.gradle`、`npm-debug.log`、test/`node_modules`/`bower_components`/java代码文件夹下的一切东西，最后发现了两个挺有可能相关的文件，一个在`bainianlaodian-libraries.generated.js`文件中，另一个在`js/common`文件夹下的一个`module.js`文件里。前者一看就是生成的代码，代码如下：

```javascript
  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }
```

看起来好像有点关系，其实并没有。这段代码是在做运行环境的检测，若是underscore是运行在服务端，就把`_`注册到`module.exports`变量中作为模块暴露出去；若是运行在浏览器端，则把`_`注册到全局对象`root`中去。这个`root`在某处其实也是被赋予全局变量`window`的值的。同时，这个文件也确实是打包生成的，打包是由`Gruntfile.js`中配置的`concat` task来完成的。真是又增长了知识。

好消息是，在`js/common/module.js`这个文件里，我们似乎找到了想要的答案：

```js
(function(global) {

  global.module = function registerModule(moduleName, moduleContent) {
    var root = global;

    if (moduleName.indexOf('.') == -1) {
      registerToContext(root, moduleName, moduleContent);
    } else {
      var contexts = _(moduleName.split('.'));
      var context = contexts.initial().reduce(function(memo, current) {
        if (!memo[current]) {
          memo[current] = emptyModuleObject();
        } 
        return memo[current];
      }, root); 
      // 这段代码会返回倒数第二个子模块，并为模块树中还不存在的子模块创建一个空的对象
      // 并注册到其父模块中。优雅简洁的函数式编程，mind-blasting... ["Mind Blasting"][1]

      registerToContext(context, contexts.last(), moduleContent);
    }
  };

  function registerToContext(parentContext, moduleName, moduleContent) {
    // 这个注册机制决定了新定义的模块不能覆盖已有的同名模块，而会直接被丢弃
    var module = parentContext[moduleName];   
    if (!module) parentContext[moduleName] = moduleContent;
  };
})(this); // this === window
```

**这套自定义的模块加载机制，它会将模块名解析成一个有包含关系的模块树，然后将所有模块及其之间的关系“注册”（其实就是加）到全局的`window`对象中。所有js代码对“模块”的引用其实都是在直接引用全局对象`window`下的变量，因此也无需配置具体的路径。**

看到这里，一开始关于“模块的注册和运行机制”的问题似乎就完全清楚了。在浏览器中实际调试了一把还发现，`bainianlaodian-libraries.generated.js`是在`module.js`之前运行的。但是这里我发现了一个细节：实际被发送到客户端的js文件并不叫`module.js`，而是叫`laodian-basic.js`。搜索了一下`module.js`，**竟没有被引用的地方！**这让我不仅又想探索一个问题：这个js究竟是在什么地方被include到页面上的？什么时候被include进来？发布前又被做了什么操作？作为一个基础设施型的js，应该是每个页面都需要的，那么项目上是采用什么方式来实现这个事情的？

## 再次出发：这个js如何被引用？

这次我们又有了四个问题：

* 我们找到的这个js是在什么地方被include到页面上的？
* 什么时候被include进来的？
* 发布前又被做了什么操作（发生了文件名的改变）？为什么要做这些操作？
* 项目上用了什么方式来复用include这个js的那段代码？

### js是什么时候被include进来的？
上面我们还留下了一条线索：`laodian-basic.js`。既然`module.js`没有被引用的地方，那么就搜索下`laodian-basic.js`的引用点。这里我看到了两个引用点：

1. ```jawr.js.bundle.laodian.id=/bundles/laodian-basic.js```
2. ```<laodian:script bundle="/bundles/laodian-basic.js" useVersionNumber="true" />```

看来似乎是配置了一些东西，然后直接在前端jsp(咦前端jsp怎么听起来怪怪的)通过`jsp tag`来引用。其中，第一个文件位于一个`jawr.properties`文件下，第二个文件的目录结构如下图所示。

![brand-specific-jsp-directory-structure](http://7xqu8w.com1.z0.glb.clouddn.com/a82b64e24b984d2a92c0c39397481825.png)

百年老店的项目有一个特点，就是支持多品牌，同一套代码需要服务不同地区的用户。我们挑了一个服务于大英地区的文件`british.jsp`，`Alt+F7`之，不能找到它的引用点。如我们第4点所要探索的问题所指出，由于要支持多品牌多页面，这个文件可能最终是通过这样的形式来被使用的：`<%@ include file="${brand}.jsp" %>`（手动反射）。这个目前还没有太多线索，那么先看看第一条线索，Google一下[jawr](https://jawr.java.net/index.html)：它是一个可配置的、支持共用开发与发布代码的JS/CSS文件压缩与打包工具。配置简单：

```java
jawr.js.budnle.laodian-basic.id=/bundle/laodian-basic.js
jawr.js.budnle.laodian-basic.child.names=laodian-pages
jawr.js.budnle.laodian-pages.mappings=/js/laodian-pages/* *
```




---

[1]： [https://www.youtube.com/watch?v=vtKdNT7o858](https://www.youtube.com/watch?v=vtKdNT7o858)        "Russell Peters: Mind-Blasting Joke"
