---
layout: post
title: Mac优雅的工具集——Intellij快捷键
---

本篇是我Mac优雅工具集系列下其中的一篇文章，[原文全文](https://linesh.gitbooks.io/gitbook-elegant-mac-tools-system-closure/content/index.html)托管在Gitbook上，分享了Mac系统下一些使工作变得更高效的工具。

> 在线的精简cheatsheet备查表：[intellij.linesh.tw](http://intellij.linesh.tw)
> 
> Github项目：[intellij-mac-frequent-keymap](https://github.com/linesh-simplicity/intellij-mac-frequent-keymap)

# Intellij Cheatsheet：成吨提高Java编程开发效率

Intellij的快捷键多而繁杂，处女座的我这一年里，拉拉杂杂也阅读了大量的文档和资料，从[官方推荐的keymap](https://resources.jetbrains.com/assets/products/intellij-idea/IntelliJIDEA_ReferenceCard_mac.pdf)到市面能看到的大多数资料和总结。结合平时的工作和个人项目经验，我尝试整理并总结其中最精华的部分，并通过这个子集总结思考与提高效率相关的思维模式和理念。于是有了这篇博客。总的来说，它讲了两个内容：

* 快捷背后的理念与思维模式
* 一套精简的Intellij快捷键核心子集

产出的价值大概有这么几方面：

* 一个[在线的cheatsheet备查表](http://intellij.linesh.tw)
* 总结了高效快捷键的一个精简子集，节省了阅读其他杂而价值不高的快捷键的时间与精力
* 总结了快捷背后的两个思维模式的转变：**更高层级的抽象** 和 **声明式使用**

## 理念与思维模式

IDE与电脑作为工具，永远是高效完成特定工作的辅助。因此我们所谓的高效有了上下文：以完成工作为主，在这个过程工具的作用是辅助工作。那么，所谓高效也即是问，如何更专注于工作本身，更高效地完成工作呢？在一系列落地的快捷键背后，这个围绕快捷键所展开的工作系统，其实质性提高工作效率的理念和思维模式本身是什么呢？我的回答是：

* 更高层次的抽象
* 声明式使用

### 更高层次的抽象

更高层次的抽象，指的是从代码、从语言本身特性的层面思考编程，而非单纯的文本或者字符串。要把思维从“把这五行代码剪切并复制到一个新的方法里”等把代码当成无意义字符的低层面活动，转变到以作为语言核心的要素和特性为单位的思考，比如类、变量、方法、重命名、重构、if-else、循环、可循环元素等。

在这方面，IDE提供的 **Live Template**、**重构(Refactoring)**、部分后向声明等，都是这种思想的产物，允许你从更高的层级（语言特性、与Java高相关的重构）来思考代码，并尽量多地向上屏蔽细节。

### 声明式使用

声明式使用，指的是直接使用你完成工作所需要的元素（类、字段、方法等），让IDE为你自动补全缺少的声明或定义。这种思想同样贯穿这本工具集的始终，以更语义化（更高阶）的操作来使用工具。

在这方面，IDE提供的 **后向声明(Postfix Auto Completion)**、**自动补全(Auto Completion)** 等，都是这种思想的产物。你不需要关注操作所在的上下文，IDE会为你补全，你需要关注的是工作和操作本身。


## 快捷键精简子集

本节主要分七个部分展开总结：生产力大杀器、语言要素生成、编辑、导航、重构、搜索、运行时。版本控制的部分未录入，原因是我倾向于使用命令行提交，而非IDE内置VCS支持。见仁见智。最后一栏是该操作在IDEA中的操作名称，可以在keymap中检索对应的action/shortcut找到。
