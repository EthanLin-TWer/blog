# TASK-3 博客可用性

我自己使用过程中发现的一些问题：

* 考虑一下手机浏览器、微信H5访问的适应性：首页布局应该有所改变，title和summary变成上下的形式
* 进入博客详情页后把meta里头也加上summary，以便微信分享的时候能直接显示summary，加强可读性
* 博客加个loading吧
* `ErrorBoundary`加一个，这样GG的时候可以显示一个优雅一些的页面
* [x] 扩大一下width，能显示更多的内容咯，注意加一下max-width
