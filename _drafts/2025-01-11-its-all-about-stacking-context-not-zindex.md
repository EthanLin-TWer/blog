---
title: CSS（一）：层叠不是由z-index控制的
tags: css z-index stacking-context
---

> `z-index: 1000`也可能干不过`z-index: 2`。

CSS复杂的层叠关系，是由一个叫层叠上下文（Stacking Context，下文简称SC）的东西控制的。`z-index`只是其中与SC关系紧密的一个属性而已。

## 草稿大纲

* Two Common Mis-understandings
  * z-index不是全局对比的，1000的z-index不一定就能盖过1的z-index——CSS的层叠模型并不是一个单一的Z轴控制的。
  * z-index不是决定CSS层叠的基础元素——图层（Stacking Context）才是CSS真正的层叠模型。
* [x] ~~层叠从根本上讲是由Stacking Context(SC)控制的，而不是z-index；~~
* SC是由特定的css属性创建的，此外，每个`html`都会创建一个SC，因此HTML文档中所有SC最终都有一个根SC。这其中：
  * z-index就是其中一个能创建SC的css属性，不过它只有应用于非定位元素(un-positioned elements)上才有作用；
  * 非定位元素指的就是`position`值为`static`以外的所有元素，包括`relative`/`absolute`/`fixed`/`sticky`等；
* 由于SC是由HTML文档上的节点创建的，因此诸多SC最终形成的是一棵跟DOM树具有相同的相对父子关系的子树（不妨称SC树）。CSS层叠算法如下：
  * SC之间可以嵌套（即形成父子关系），每个SC都一定有一个父SC（没有直接父节点那就上溯到根SC）；
  * 子SC（有父SC的节点）的层叠效果限于父SC的范围内（举例：如果B1的父SC-B比其兄弟SC-C的层叠水平低，那么B1无论z-index多高都会在C下显示）；
  * 同级SC层叠水平算法如下：先按z-index比，值大者在上；z-index相同（或都没有）者，所有定位元素在所有非定位元素之上；在定位元素与非定位元素两个组中间，在DOM树声明顺序中后者在上。如此，整颗SC树的绝对层叠水平就可以算出。
  * 根SC的z-index为`auto`，在0以下、负值以上。
* 在一个SC内部的元素还可以有层叠，元素层叠规则与SC层叠规则极其相似（只是去掉了z-index值，因为z-index必然就会创建一个新SC）：
  * SC背景在最下；
  * 元素按照DOM树形成父子关系，子元素的层叠在父元素层叠水平下；
  * 同级元素中，所有定位元素在所有非定位元素之上；
  * 在同级的定位元素与非定位元素两个组中间，元素在DOM树声明顺序中后者在上。如此，单个SC内的相对层叠水平就可以算出。
* 总结来说，SC有点像PS或Figma中的“图层”——图层之间的层叠关系一旦确定好，那么下方图层的内容无论如何都不可能盖住上方图层。
* z-index和CSS中最终的层叠效果有什么关系？
  * 在各SC都没有嵌套关系（a.k.a. 父SC都是根SC）的场景下，z-index近似等同于最终的层叠效果（但本质上还是不同SC间的层叠在起作用）；
  * z-index是创建SC的一种非常常见的手段；
  * z-index能决定同级SC的层叠水平。但是z-index相同的同级SC以及同SC中的元素之间，仍需依赖其他规则（元素定位类型、DOM树中相对位置灯）来确定层叠水平；
* 为什么有了z-index还要搞SC？我理解是为了隔离。有父级层叠水平这层范围限定，你就可以创建层叠水平不被DOM树里其他层叠影响的组件。这对于三方库开发者尤其需要，因为你控制不了DOM内其他用户的代码和层叠设计。


## 什么是层叠上下文（Stacking Context）

## 但是`z-index`显然也可以控制层叠呀？！

下一个很自然的问题，那就是`z-index`跟SC究竟是什么关系？你说是SC在实质性地控制层叠，那为什么我每次`z-index: 1000`我的元素就能顺利地跑到最上面去了呢？

* 非定位元素上的`z-index`会直接创建一个新的SC。所谓非定位元素，就是`position`值为`static`（默认值）以外的元素，包括`fixed`/`absolute`等。
* 同个层级的SC之间的层叠关系，`z-index`是最优先的判断因素。

## 什么动作会创建SC

## Sc和dom flow有什么联系？

## 总结

## 术语的原文与翻译

坦白讲，我觉得Stacking Context翻译成“层叠上下文”丢失了一些技术信息，甚至有点莫名奇妙的感觉，因为首先上下文在中文语境中不是一个很常见的、用来做名词的词，尤其是放在这个语境下我们甚至很难搞清楚它是一个抽象概念还是一个什么实体东西。上下文在中文的语境里，更多就是指一些零散的信息之类的，我们很难联想到层叠还需要什么上下文或者背景信息才能发生作用。而在英文中，Context本身首先很明确是一个很常用的名词，其次在计算机术语中，Context兼而带有一些作用域（Scope）的语义：一般说一个东西形成了一个Context，也就是它底下包含的东西都处在这个它的范围中，一个Context自身就形成了一个作用域，z-index必须只是在这个作用域内起作用。那么相对来说，在英文中Stacking Context是负责层叠的实体（而非z-index）、具有作用域、相互之间可以嵌套这几个技术信息是非常明显地内嵌在它的命名中的。

> 一些边角的读原文时的想法。有时候直接看原文真的更有一些豁然开朗的感觉。一起写出来，可能也有利于读者去理解。

## Stacking Context在浏览器中怎么看

## 几个案例

* Header Sticky不住。居然被children盖过了。然后发现是children的children创建了`position: relative`，还不知道是什么创建了图层。但是看现象就是外层的sticky header被影响了。

## Reference

* https://www.joshwcomeau.com/css/stacking-contexts/
* https://www.rolique.io/news/how-learn-stacking-context
* https://www.diaconou.com/blog/css-z-index-a-guide/
* https://medium.com/@sableconfusion/z-index-not-working-in-css-6c63b5db4a8c
* https://favourcodes.com/writings/css-stacking-context
* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context
