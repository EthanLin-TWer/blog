# TASK-3 博客可用性

我自己使用过程中发现的一些问题：

* [ ] 考虑一下手机浏览器、微信H5访问的适应性：
  * [x] 首页布局应该有所改变，title和summary变成上下的形式
  * [x] `document.title = {title}`的时候要干掉markdown的`#`heading头
  * [x] `meta.description = {summary}`也加上summary，以便微信分享的时候能直接显示summary，加强可读性
  * [ ] 上下模式下日期怎么显示？
* 博客加个loading吧
* `ErrorBoundary`加一个，这样GG的时候可以显示一个优雅一些的页面
* [x] 扩大一下width，能显示更多的内容咯，注意加一下max-width
