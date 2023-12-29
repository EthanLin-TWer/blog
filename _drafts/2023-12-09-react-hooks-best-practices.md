---
title: React Hooks最佳实践
tags: react react-hooks object-oriented best-practice
---

大纲先列一下。

本质上就是把面向对象那套东西搬到前端来治理复杂度，只不过在前端对象的形式不是类，而可以是更简单的函数而已（用类也是可以的，本质就是个原型继承的语法糖，但是函数作为JS一等公民还是更方便一些，可以闭包）。

* 最基本规则：`use`开头、不能动态调用（条件或循环下使用等）、依赖列表决定触发时机（为了配合React浅对比机制，麻烦）
* 复杂度治理：
  * 使用custom hook作为封装单元暴露功能。数据可以是直接传递给custom hook作为内闭包，也可以hooks自己从其他全局store（如redux、React Context等）中获取
  * 暴露行为，而非属性。这是OO最基本的封装要求。一个浅显的要求是，在React组件中只允许出现直接取值或`map`操作。
  * 出现了更复杂的行为`reduce`、`filter`、检查、交叉操作时，封装custom hooks
  * 使用React Query作为全局状态管理，避免了长组件函数列表 React props drilling

## React Hooks不是一个架构分层

我见到很多文章，一搜React Architecture，出来的就是组件层-hooks层-…，然后介绍项目底下应该有什么目录（组件）、说包含数据管理和副作用管理等等，但并没有更加仔细地讨论各个层的职责和接口。这就是一个非常常见的误解了：React Hooks不是一个架构意义上的分层。一个架构意义上的“层”，它必须有它的职责，有它所专注隔离的一些因素，这样当这些因素变化的时候，修改只会局限在这个层中，而不会传播到其他的层。避免层间的变化传播，我理解是分层的一个很重要的考虑。因此，一个正经的层，必须有输入输出的接口，用以表达该层的职责、隔离变化传播。而这正是React Hooks所缺少的一个特征：React Hooks只是一个特殊的函数，它的函数输入与输出没有任何限制。这些特征导致它只是一个收容逻辑的地方，而远不是一个架构意义上的分层。如果用好React Hooks，是做好React软件架构的一个重要因素。

架构上的另一个问题：展示型组件和容器组件是否区分。对于展示型组件（只接受props作为入参，本身不接入任何状态）本文的建议是，其实就是包含一个组件库（比如MUI、AntD这种开源或者自己封装的）。对于业务型组件，不强求一定也要拆到纯展示，可以接入`useState()`/`useHooks`这样的东西。理由是：
* 在测试策略中，我们并不会对这个组件进行单元测试——就算你单独拆出来——因为它可变，不稳定，props是它的API改动频率高
* 强求把状态交由其他组件来做，有可能会造成props drilling的问题。

fetcher应该是独立出来的一层，至于它是用axios、React Query这是我们不在意的。只要它有架构意义上的接口就行。
* 但是问题是，这一层是直接返回API数据，还是包一层返回个领域对象？能不能在里头写`onSuccess`之类的UI代码？
* 这一层抽出来了有什么用？是测试的时候容易mock掉？还是将来API这一层的东西可以独立替换掉？


# placeholder

## Docs
* https://overreacted.io/a-complete-guide-to-useeffect/
* https://react.dev/reference/react/useEffect
* https://github.com/alibaba/hooks/blob/master/packages/hooks/src/useUnmount/index.ts
* https://react.dev/learn#using-hooks
* https://react.dev/learn/thinking-in-react


## What is react hooks 
* reusable code logics compared to class components 
* difference with utils/tools: can only be used in React components, and the data will be initialized on each hook call in a component, which means: 
* if you want different hook calls from different components to share states, then we need to rely on useContext() or a global store

## 初级practice - baseline

* 命名+lint rules（为啥React规定了要以use开头？）
* 只能在functional components里用，只能在React组件里用
* 只能静态声明，不能在条件或者循环里用（跟实现机制有关系）
* dependency list
  * 只调一次的你就不要指定依赖数组 []
  * 有函数依赖的怎么指定？都写上去吗？函数还怎么可能改变呢？直接在组件里定义的函数咯。
* 常用hook
  * useState, useContext, useRef - difference? 
  * cache: useMemo() useCallback()
  * useEffect, useLayoutEffect?
    * https://react-hooks-cheatsheet.com/uselayoutEffect
    * https://blog.logrocket.com/react-useeffect-vs-uselayouteffect-hooks-examples/
  * useDeferredValue? useId? useTransition? useReducer? 
  * https://blog.logrocket.com/react-hooks-cheat-sheet-solutions-common-problems/
* custom hooks
  * 

## 高级practice

* 纯函数的操作，面向对象包一下，把行为弄出来
  * Separate Concerns with Multiple Hooks: Split your logic into multiple custom hooks to separate concerns and make your code more modular and reusable. Each custom hook should have a single responsibility. - 单一职责了。那么什么是职责？
* Large Components 
* Long hooks: 
  * separate hooks 
  * 组件里有find filter是坏味道
* Inline hooks 
* single v.s. multiple values when using setState()
* avoid props drilling with useContext()

saveAndNext
* 同一个hooks有不同行为，拆分开逻辑。

useExtraPremium
* 这个经验是，有针对数据操作的行为给它封装起来。函数+闭包+暴露行为方法(findXXX)一般就够用。

### To-Read

* https://tech.ipalfish.com/blog/2020/03/30/react-hooks/
[React 最佳实践--如何写出更好的 React 代码（2022 年版）](https://www.freecodecamp.org/chinese/news/best-practices-for-react/)
* https://github.com/ychow/Blog/issues/20
* https://zhuanlan.zhihu.com/p/266566442
* https://juejin.cn/post/7137655467697766436
* https://www.infoq.cn/article/ry4icky5crb1pokvi0ql
* https://react.dev/learn/reusing-logic-with-custom-hooks
* https://www.google.com/search?q=%E9%87%8D%E6%9E%84%E5%A4%8D%E6%9D%82%E7%9A%84react+hooks