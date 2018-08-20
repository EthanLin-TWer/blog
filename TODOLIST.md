# TODOLIST

作为读者&作者，我希望看到首页有最新的文章列表，不然还是个什么博客啊。每篇文章应该有如下信息：

* 标题
* 写作日期
* 标签？（不能人眼筛选么？）
* 简介？（避免标题跪）

目录部分见 #214，专题部分见 #215，草稿部分见 #216。

* [x] 标题这个信息文章里面有
* [ ] 简介这个信息文章里面不一定有
  * [ ] 原则上后续新加文章一定要有简介
  * [ ] 没有的话，是否可以取正文前 xx 个字符
* [x] 写作日期 https://learn.cloudcannon.com/jekyll/date-formatting/
* [?] 修改日期，这个可以由 Git 提交修改日期提取完成。不过这个可以统计一下修改了多少次嘛
* [ ] + 可点击。点击后跳转到详情页面
* [ ] + add `favicon.ico`
* [ ] + learn webpack https://webpack.js.org/
* [ ] + 样式   
* [x] + 本地 jekyll 会 serve 两份 blog 数据出来，一份来自 `dist`？哪儿来的？ - 来自缓存。开个隐身模式就好了
* [x] + 弄得生产环境比开发环境还完美。本地数据好像有 cache，新加 front matter 字段出不来，两个问题解决一下 - 来自缓存。开个隐身模式就好了
* [x] 搭建本地测试环境
  * [x] 首页 API 可访问
  * [x] 做到在本地只要一键就可使整站的 API 都能在本地访问 - 因为都是用 jekyll API，所以本地能起 jekyll 服务器就可以连接轻量级的真实测试数据了。这部分再通过 `npm start` 封装起来，就感知不到细节了 
* [x] + jekyll rebuild 太慢
* [x] + travis deploy to github pages to work
* [x] + make gh-pages to work
* [x] + 怎么测试 `posts.json`？里面有些日期转换逻辑 - 手动测

数据获取的问题，主要要解决三个问题：

* 部署在 Github 上后能正常获取到 API
* 在本地能够不连接生产环境进行开发（比如不适用 Github API 次数等）
* 本地数据与生产环境足够一致

| 方案 | 本地 | 远端 | 备注 | 
| :--- | :---: | :---: | :--- |   
| 使用 [Github API](https://developer.github.com/v3/) | ❌ | ✅ | 本地相当于连生产环境直接测试，不可行 | 
| 自己转换并部署 API | ✅ | ✅ | 成本较高，需要维护API。如果仓库只有自己用那没问题；如果还有念想要配置式地分享博客搭建，那就增加使用者的负担了 | 
| 使用 Jekyll 转换的 API | ✅ | ❔ | 两端都支持，首页可行，但详情页不知道是不是可行 | 

那么现在暂定的方案是：本地用 jekyll 并且可以起 local server 进行开发；Github 上使用真实的 API。

引用：

* https://github.com/sorrycc/blog/issues/62

Pomo: 4
