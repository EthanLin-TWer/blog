---
title: React系列（五）：React应用软件架构
tags: tbd
---

## React Hooks层

为什么软件架构放在Hooks最佳实践之后呢？因为Hooks最佳实践是React软件架构的重要一环。其他部分其实没啥争议和需要深入的地方。

本质上就是把面向对象那套东西搬到前端来治理复杂度，只不过在前端对象的形式不是类，而可以是更简单的函数而已（用类也是可以的，本质就是个原型继承的语法糖，但是函数作为JS一等公民还是更方便一些，可以闭包）。

## Component层

> 问题：为什么不把组件拆分成状态组件和纯业务组件，然后对进行纯业务组件进行单元测试呢？

这是从测试策略搬过来的问题，但这同时也是个架构问题。

* 不实际。有了Hooks以后，现代React组件其实就是个组合所有逻辑的地方，所有协调都在这里。
* 有额外成本。抽专门的VM之后，意味着抽组件等常见重构很可能就会挂掉VM，这阻碍了做有效测试策略的初心；其次，VM和View单独（但愿）测试，并不能说明VM上的东西被正确地放到了View上，这里的集成点测试是遗失的。如果说过去五年我在前端测试上有什么收获和经验，那就是在组件层拆定义很细的层并做单元测试不符合前端View频繁改变的现状，会带来许多不必要的测试、削弱测试有效性。


## API Layer层
