---
title: React系列（四）：Hooks最佳实践与面向对象
tags: tbd
---

大纲先列一下。

* 最基本规则：`use`开头、不能动态调用（条件或循环下使用等）、依赖列表决定触发时机（为了配合React浅对比机制，麻烦）
* 复杂度治理：
  * 使用custom hook作为封装单元暴露功能。数据可以是直接传递给custom hook作为内闭包，也可以hooks自己从其他全局store（如redux、React Context等）中获取
  * 暴露行为，而非属性。这是OO最基本的封装要求。一个浅显的要求是，在React组件中只允许出现直接取值或`map`操作。
  * 出现了更复杂的行为`reduce`、`filter`、检查、交叉操作时，封装custom hooks
  * 使用React Query作为全局状态管理，避免了长组件函数列表 React props drilling

## React Hooks不是一个架构分层

> 今天组里讨论，结论就是有了React Hooks加成之后，每个React组件自己都是一个View + View Model。React Hooks作为组装数据和逻辑的手段而存在，通常是多个hooks服务一个View Model（如果你要说有这个东西）的构建，而Hooks本身并没有一个规范的接口——即输入输出——想输入啥、返回啥都可以，因而缺乏设计的Hooks本身并不能被称为一个“层”。

我见到很多文章，一搜React Architecture，出来的就是组件层-hooks层-…，然后介绍项目底下应该有什么目录（组件）、说包含数据管理和副作用管理等等，但并没有更加仔细地讨论各个层的职责和接口。这就是一个非常常见的误解了：React Hooks不是一个架构意义上的分层。一个架构意义上的“层”，它必须有它的职责，有它所专注隔离的一些因素，这样当这些因素变化的时候，修改只会局限在这个层中，而不会传播到其他的层。避免层间的变化传播，我理解是分层的一个很重要的考虑。因此，一个正经的层，必须有输入输出的接口，用以表达该层的职责、隔离变化传播。而这正是React Hooks所缺少的一个特征：React Hooks只是一个特殊的函数，它的函数输入与输出没有任何限制。这些特征导致它只是一个收容逻辑的地方，而远不是一个架构意义上的分层。如果用好React Hooks，是做好React软件架构的一个重要因素。

架构上的另一个问题：展示型组件和容器组件是否区分。对于展示型组件（只接受props作为入参，本身不接入任何状态）本文的建议是，其实就是包含一个组件库（比如MUI、AntD这种开源或者自己封装的）。对于业务型组件，不强求一定也要拆到纯展示，可以接入`useState()`/`useHooks`这样的东西。理由是：
* 在测试策略中，我们并不会对这个组件进行单元测试——就算你单独拆出来——因为它可变，不稳定，props是它的API改动频率高
* 强求把状态交由其他组件来做，有可能会造成props drilling的问题。
* 以上论据，Dan也是这么说的，以前的展示组件容器组件拆分是人为的，是为了架构、测试和复用代码方便，但是React Hooks出来之后复用逻辑变得很方便了，所以以上这个拆分不再有它的意义所在。
* 分展示组件和容器组件，对测试和架构没有任何意义，唯一可见优点就是方便了未来替换React。相当于手动为每个组件维护一个view model层。可能的收益在未来，确定的成本在现在，这就是增加一个间接层的常见取舍。

fetcher应该是独立出来的一层，至于它是用axios、React Query这是我们不在意的。只要它有架构意义上的接口就行。
* 但是问题是，这一层是直接返回API数据，还是包一层返回个领域对象？能不能在里头写`onSuccess`之类的UI代码？
* 这一层抽出来了有什么用？是测试的时候容易mock掉？还是将来API这一层的东西可以独立替换掉？

## What is React hooks

* reusable code logics compared to class components 
* difference with utils/tools: can only be used in React components, and the data will be initialized on each hook call in a component, which means: 
* if you want different hook calls from different components to share states, then we need to rely on useContext() or a global store

## 解决的问题

1. 函数式组件无法拥有状态，而class增加了新手学习难度和优化难度
2. 在React组件间复用状态相关逻辑。之前必须用高阶组件或者renderProps
3. 解决了原先生命周期方法同样代码无法复用、相关逻辑无法聚集的缺陷
4. 跟一般函数的区别是，它可以接入React相关的功能（其他hooks），比如状态useState，生命周期useEffect，解决嵌套传递的useContext，useRef等。

## 初级practice - baseline

* 命名+lint rules（为啥React规定了要以use开头？）
* 只能在functional components里用，只能在React组件里用
* 只能静态声明，不能在条件或者循环里用（跟实现机制有关系）
* dependency list
  * 只调一次的你就不要指定依赖数组 []，或者自己封装一个`useMount`/`useUnmount()`
  * 有函数依赖的怎么指定？都写上去吗？函数还怎么可能改变呢？直接在组件里定义的函数咯。
* 常用hook
  * useState, useContext, useRef - difference? 
  * cache: useMemo() useCallback()
  * useEffect, useLayoutEffect?
    * https://react-hooks-cheatsheet.com/uselayoutEffect
    * https://blog.logrocket.com/react-useeffect-vs-uselayouteffect-hooks-examples/
  * useDeferredValue? useId? useTransition? useReducer? 
  * https://blog.logrocket.com/react-hooks-cheat-sheet-solutions-common-problems/
* custom hooks:
  * [React Hooks你真的用对了吗？](https://reeli.github.io/blog/framework_react-hooks-use.html)
  * [React Hooks原理剖析](https://reeli.github.io/blog/framework_react-hooks-principle.html)

## 高级practice

* ✅[Bad Smell: Overuse of `setXXX()`](#将usestate提炼成为custom-hooks并暴露出行为)。Custom hooks应该避免直接暴露`useState`给的`setXXX()`方法。正确的做法是，封装出具有业务含义的API并暴露出行为，而非暴露内部实现和数据。
  * `const [value, setValue] = useState()`就有点像一个只有一个getter/setter的对象，用一次还行，一个组件里有超过两个以上的`useState`就考虑把他们提炼到custom hook里，并暴露出行为
* [🚧常见的hooks操作，也要封装出custom hook，可以最大限度地减少细节暴露，让开发者只关注于行为。](#为常见的功能封装出一个声明式的api)
  * ✅feature toggle: `const { isFeatureEnabled } = useFeatureToggle()`
  * form: `const { reader, writer } = useInsuranceForm(getValues()); writer.fodrProduct().setX();`
* 🚧calculate total revenue的例子：从一个对象中取出多项数据，然后用utils进行计算，更好的做法是从这个对象中构建出Domain/DTO（如果本身就是API response），然后把计算逻辑搬移到domain/dto上。你要考虑的问题，就从我从哪里给这个函数搞来正确的参数传递过去，变成我怎么正确地构造出这个对象，然后调用（但是讲真有什么区别）。
* [🚧重复的逻辑：就应该抽到dto/custom hooks中去。](#提炼重复的逻辑)
* 🚧props传太深的问题(props drilling)可以通过`useContext()`或把数据弄到global store，然后通过hooks来使用
* 🚧面向对象基本功
* ✅架构上做DTO，把API回来的东西隔离一层。嵌套对象也要做dto。另外，除了api也可能有其他的时间点创建dto，比如back-fill
* 对象逻辑都归位之后，就是时序问题了：如何保证修改DTO数据时组件也能更新？如何保证能拿到最新或前某几次的数据？保证整个数据更新过程
* ✅同一个hooks有不同行为，拆分开逻辑。- 这个睿睿有文章讲，跳转过去即可。

### 将`useState()`提炼成为custom hooks并暴露出行为

before refactoring:

```tsx
// src/pages/product-page.tsx
import { useEffect } from 'react'

export const ProductPage = () => {
  const { shouldShowAlert, setShowAlert, message } = useProductPromotionAutoAdjust()
  return (
    ...
    {shouldShowAlert && (
      <Alert
        onClose={() => {
          setShowAlert(false)
        }}
        message={message}
      />
    )}
  )
}

// src/hooks/product-promotion.ts
export const useProductPromotionAutoAdjust = () => {
  const [shouldShowAlert, setShowAlert] = useState(false)
  const { response } = useProductPromotion()
...

  useEffect(() => {
    const shouldAutoAdjustPriceWhenUserEnjoysPromotion = calculateFrom(response)
    if (shouldAutoAdjustPriceWhenUserEnjoysPromotion) {
      setShowAlert(true)
      ...
    }
  }, [response])
  
  return { shouldShowAlert, setShowAlert }
}
```

这个hook的作用是：根据API的返回确定是否用户享受了折扣，若是，则自动调降用户的应付金额、并为用户展示一个提示信息（alert）。同时，该hook为用户提供了一个关闭提示信息的API。

很多同学在设计API的时候，很容易直接转手就把`useState()`给你的setter直接暴露出去，但这样做有一个缺点，就是破坏了数据封装。我们把setter `setShowAlert`暴露出去，这样任何代码块都可以通过这个API不加限制地将`shouldShowAlert`设置为`true`，这显然违背作者的本意以及真实的业务场景，也使得bug更容易出现、调试更费功夫。

更好的做法是，把`setShowAlert(false)`这个操作封装起来，暴露出一个单独的`closeAlert` API。这个小小的改动有两个好处：一是能更好地表达业务含义，现在调用者没有随意设置`shouldShowAlert`值的方法了，他们能清楚地知道这个hooks将控制提示信息的显示，而用户仅能决定是否关闭它；二是能更好地封装数据，现在数据值不会被意外修改了，甚至对它的修改都被重新限制在hooks之内。这让Hooks维护者的工作变得更轻松了：修改这个Hooks的逻辑时，不需要再排查每一个API的调用点，所有需要检查的逻辑都被封装在这个Hooks之内。

after refactoring: 

```ts

```

这是一个小小的修改，但却能大大增强你的Hooks API可读性、可理解性和可维护性，充分展示你对面向对象的数据封装的理解。

当我们设计hooks的时候，请记住：**应该尽量将所有对数据的操作（主要是增删改）封装成为有业务含义的API，以此将数据与对数据的修改都限制在单个hooks中，而非将修改数据的API/setter进一步对外暴露。这样做既方便了Hooks的维护者——TA修改Hooks的时候不需要进一步排查更多的调用点、逻辑一目了然，也方便了Hooks的使用者**。

### 为常见的功能封装出一个声明式的API

这点看似显而易见，但是在实践中却也常常被忽略，导致我们很容易写出涉及很多操作细节的代码，加重维护者的负担。最常见的就是我们经常从一些通用库中直接导入它们提供的hooks直接使用，而不加一层封装，导致细节到处泛滥。下面试举几例：

#### feature toggle

before refactoring:

```tsx
import { evaluateFlags } from '@unleash/nextjs'
import { FEATURE_A, FEATURE_B, FEATURE_H } from '../constants/feature-toggles'

const ProductDetailpage = () => {
  const toggles = evaluateFlags(...)
  const isFeatureAEnabled = toggles.find(toggle => toggle.name === FEATURE_A)?.enabled
  const isFeatureBEnabled = toggles.find(toggle => toggle.name === FEATURE_B)?.enabled
  const isFeatureHEnabled = toggles.find(toggle => toggle.name === FEATURE_H)?.enabled
  
  return (
    <>
      {isFeatureAEnabled && (...)}
      {isFeatureBEnabled && (...)}
      {isFeatureHEnabled && (...)}
    </>
  )
}

export default ProductDetailPage
```

上面这段代码并不算复杂——也正是因为不太复杂所以我们很容易通过复制粘贴写出这样的代码——但还是涉及了太多细节：使用者自己使用Unleash提供的API获取全量的toggle数据、手动获取每个toggle的名字、通过一段find逻辑查询出这个toggle是否启用。

更好的做法是将这些细节、源数据获取都封装到一个API——通常是利用custom hooks——背后，这样会让调用者的工作更加简单，也会让维护者的工作更加简单，他们不再需要维护多处重复的`find`逻辑了。

after refactoring:

```tsx
import useFeatureToggles from './hooks/useFeatureToggles'

const ProductDetailpage = () => {
  const toggleService = useFeatureToggles()

  return (
    <>
      {toggleService.isFeatureAEnabled() && (...)}
      {toggleService.isFeatureBEnabled() && (...)}
      {toggleService.isFeatureHEnabled() && (...)}
    </>
  )
}

export default ProductDetailPage
```

如果这个例子还算简单，没有太多的细节，那么下面我们可以看一个更繁复的例子，表单使用：

#### form

before refactoring:

```ts

```

after refactoring:

```ts

```

###

before refactoring:

```ts

```

after refactoring:

```ts

```

### 提炼重复的逻辑

#### `useSelection`

原来需要监听form变化、自己拿到源数据、自己做filter，同样的逻辑在多处重复。说明观点：声明over命令，封装是为了更好地使用。

before refactoring:

```tsx
import { useFormContext } from 'react-hook-form'
import { fieldNames } from '../constants/fieldNames'
import { useProductCategory } from './hooks/useProductCategory'

const ProductCategoryPage = () => {
  const { data } = useProductCategory()
  const { getValues, watch } = useFormContext()
  const selectedProductCategory = watch({ name: fieldNames.PRODUCT_CATEGORY })
  const selectedProductId = watch({ name: fieldNames.PRODUCT_ID })
  const [availableProducts, productDropdownOptions] = useMemo(() => {
    const products = selectedProductCategory 
      ? data?.categories?.find(category => category.id === selectedProductCategory)?.products
      : []
    const productDropdownOptions = mapToDropdownOptions(products)
    return [products, productDropdownOptions]
  }, [selectedProductCategory, data])
  
  const onProductChange = (event: Event) => {
    const selectedProductId = event.target.value;
    const selectedProduct = availableProducts.find(product => product.id === selectedProductId)
    if (selectedProduct) {
      ...
    }
  }
  
  return (
    ...
    <Dropdown label="products" options={productDropdownOptions} onChange={onProductChange} />
    <Dropdown label="product-quality" options={['STANDARD']} disabled={!selectedProductId} /> 
    ...
  )
}
```

after refactoring:

```ts

```

#### `getPremium` 

before refactoring:

```ts

```

after refactoring:

```ts

```

### 

before refactoring:

```ts

```

after refactoring:

```ts

```

## To tackle bad smells

* 纯函数的操作，面向对象包一下，把行为弄出来
  * Separate Concerns with Multiple Hooks: Split your logic into multiple custom hooks to separate concerns and make your code more modular and reusable. Each custom hook should have a single responsibility. - 单一职责了。那么什么是职责？
* Large Components 
* Long hooks: 
  * separate hooks
  * 组件里有find filter是坏味道
* Inline hooks 
* single v.s. multiple values when using setState()

### To-Read

* [Mark Erikson: Hooks, HOCS, and Tradeoffs (🌩) / React Boston 2019](https://www.youtube.com/watch?v=xiKMbmDv-Vw)
* https://tech.ipalfish.com/blog/2020/03/30/react-hooks/
* [React 最佳实践--如何写出更好的 React 代码（2022 年版）](https://www.freecodecamp.org/chinese/news/best-practices-for-react/)
* https://github.com/ychow/Blog/issues/20
* https://zhuanlan.zhihu.com/p/266566442
* https://juejin.cn/post/7137655467697766436
* https://www.infoq.cn/article/ry4icky5crb1pokvi0ql
* https://react.dev/learn/reusing-logic-with-custom-hooks
* https://www.google.com/search?q=%E9%87%8D%E6%9E%84%E5%A4%8D%E6%9D%82%E7%9A%84react+hooks
* https://overreacted.io/a-complete-guide-to-useeffect/
* https://react.dev/reference/react/useEffect
* https://github.com/alibaba/hooks/blob/master/packages/hooks/src/useUnmount/index.ts
* https://react.dev/learn#using-hooks
* https://react.dev/learn/thinking-in-react
* https://codesandbox.io/s/jvvkoo8pq3?file=/src/index.js:259-283
* https://legacy.reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables
* https://www.robinwieruch.de/react-hooks-fetch-data/
* https://legacy.reactjs.org/docs/testing-recipes.html
* https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889
* https://www.youtube.com/watch?v=J-g9ZJha8FE
* https://www.youtube.com/watch?v=dpw9EHDh2bM&t=2s
* [When to useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback)
* [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)
