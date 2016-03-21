---
layout: post
title: 说开去——项目的JavaScript模块化实践（下篇）
---

> 为保护商业机密，本博客中出现的所有代码与文字均已隐去所有与客户相关的信息。若仍有泄露请第一时间联系博主我：linesh.simpcity@gmail.com。

## 再次出发

在这个说开去系列的[上篇](a-module-require-confusion)中，我们已经回答了项目自带的模块化的实现，同时也带出了更多的问题，总结起来有以下这些。它们是本篇视图回答的问题：

* `module.js`是如何被打包到`laodian-basic.js`中去？
* 我们找到的这个js是在什么地方被include到页面上的？
* 什么时候被include进来的？
* 发布前又被做了什么操作（发生了文件名的改变）？为什么要做这些操作？
* 项目上用了什么方式来复用include这个js的那段代码？

### 如何打包？
上面我们还留下了一条线索：`laodian-basic.js`。既然`module.js`没有被引用的地方，那么就搜索下`laodian-basic.js`的引用点。这里我看到了两个引用点：

1. ```jawr.js.bundle.laodian.id=/bundles/laodian-basic.js```
2. ```<laodian:script bundle="/bundles/laodian-basic.js" useVersionNumber="true" />```

看来似乎是配置了一些东西，然后直接在前端jsp(咦前端jsp怎么听起来怪怪的)通过`jsp tag`来引用。其中，第一个文件位于一个`jawr.properties`文件下，第二个文件的目录结构如下图所示。

![brand-specific-jsp-directory-structure](http://7xqu8w.com1.z0.glb.clouddn.com/a82b64e24b984d2a92c0c39397481825.png)

百年老店的项目有一个特点，就是支持多品牌，同一套代码需要服务不同地区的用户。我们挑了一个服务于大英地区的文件`british.jsp`，`Alt+F7`之，不能找到它的引用点。如我们第4点所要探索的问题所指出，由于要支持多品牌多页面，这个文件可能最终是通过这样的形式来被使用的：`<%@ include file="${brand}.jsp" %>`（手动反射）。这个目前还没有太多线索，那么先看看第一条线索，Google一下[jawr](https://jawr.java.net/index.html)：它是一个可配置的、支持共用开发与发布代码的JS/CSS文件压缩与打包工具。配置简单：

```java
jawr.js.budnle.laodian-basic.id=/bundle/laodian-basic.js
jawr.js.budnle.laodian-basic.child.names=laodian-pages
jawr.js.budnle.laodian-pages.mappings=/js/laodian-pages/**/*.js
```

看到上面这段代码就很清楚了，jawr会把`/js/laodian-pages/`文件夹下的所有js文件打包到`laodian-basic.js`文件中。JAWR其实还有一个`JawrServlet`，它会去读取`jawr.properties`(在`web.xml`文件的`init-param`配置`configLocation`)中的配置，并且拦截所有匹配`/js/*`的路径。


### js是如何被引用到页面上的？——SiteMesh
从上面搜搜到的这段代码已经可以看出，`laodian-basic.js`这个文件是在`british.jsp`中被引用的，后者引入了大量的CSS/JS/FAVICON等文件，似乎是一个入口文件，但它却没有再被其他文件引用：

```html
<head>
  <script type="text/javascript" src="laodian/common/js/laodian-libraries.generated.js"></script>
  <script type="text/javascript" src="laodian/common/js/bootstrap.generated.js"></script>
  <home:script bundle="/bundles/laodian-basic.js" useVersionNumber="true" />

  <link rel="stylesheet" type="text/css" href="laodian/british/css/british-specific.less" />
</head>

<body id="${activePage}" class="${activePage}">
  <decorator:usePage id="specific-page" />
  <div class="page">
    <header class="Header">...</header>
    <main id="main-wrapper">
      <decorator:body />
    </main>
    <footer class="Footer">...</footer>
  </div>
</body>
```

笔者眼尖，看到了`<decorator>`这个标签。它是SiteMesh框架定义的一个标签，sitemesh
