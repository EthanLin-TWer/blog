---
layout: post
tags: react unit-test tdd enzyme jest
title: React 单元测试策略及落地
---

# React 单元测试策略及落地

续 https://github.com/linesh-simplicity/linesh-simplicity.github.io/issues/122#issuecomment-340631650

之所以想写这个文章，一方面是因为项目上实践已久，渐感时机合适；一方面是作为一个入行时受整洁代码、测试驱动开发、重构、设计模式等技术深深感染的后端，在日渐壮大的前端群体中却一直感觉缺乏相应的语境，因此，前端的单元测试一直是我想要诉说的实践；再另一方面，是看了程墨的《深入浅出 React & Redux》里面讲单元测试的一章，讲到「单元测试应该是让开发者的工作更轻松更高效，而不是成为开发过程中的包袱」这个观点，让我有所感触。

这是个听上去似乎很客观也很主流的观点，但它把这个包袱甩给了单元测试。这我是不能认同的。我认为，好的单元测试可以让开发更高效，并且是有规律、有特征、可学习的。写不好，应该是开发者的能力问题，而不是单元测试的问题。单元测试是一定要写、要有策略地写的，而不是可写可不写的。因此，这篇文章将与读者分享一些观点：我们为什么要写单元测试、如何写出好的单元测试，以及一个 React 应用的测试策略和落地是什么样。最后，我们会讨论一下单元测试的局限。

## 目录

1. 为什么要做单元测试
   1. 单元测试的上下文：敏捷、快、质量好
   2. 质量的保障：测试、架构、和其他
   3. 单元测试的依据：测试金字塔
2. 如何做单元测试
   1. 什么是好的单元测试？它有什么特征？
   2. 一个 React 应用的单元测试策略是什么？
   3. 如何在一个 React 应用中落地上述测试策略？
3. 单元测试的局限
   1. 为了达到「持续改进」的目标，应该与自动化测试体系结合起来。单一的单元测试对质量保障的效果有限
   2. 需要其他类型工具的配合，如 TypeScript、IDE 重构快捷键等

## 单元测试的上下文

我上面批评程墨在书中「只是站在测试的角度来谈测试」，是因为我认为，谈任何东西都一定要有个上下文。你的论述不能是「因为单元测试有这些好处，所以我们要做单元测试」，而应该是「不做单元测试我们会遇到什么问题」，这样才能回答「为什么要写单元测试」的问题。那么我们谈论单元测试的上下文是什么呢？不做单元测试我们会遇到什么问题呢？

![image](https://user-images.githubusercontent.com/11895199/40921421-fb13c2cc-6841-11e8-9880-b7f72182ae7f.png)

![image](https://user-images.githubusercontent.com/11895199/40921436-03152e66-6842-11e8-9c24-920ba5d8dd27.png)

看上两图。**我认为单元测试的上下文存在于「敏捷」中**。敏捷为的是更快地交付有价值的可工作的软件。为此，它有一个指标来度量这个「更快」，那就是 lead time，它度量的是一个 idea 从提出被验证，到最终上生产环境面对用户的时间。显然，这个时间越短，软件获得反馈的时间就越短，对价值的验证就越快发生。这个结论对我们写不写单元测试有什么影响呢？答案是，不写单元测试，你就快不起来。为啥呢？因为每次发布，你都要投入人力来进行手工测试；因为没有测试，你倾向于不敢随意重构，这又导致代码逐渐腐化，复杂度使得你的开发速度降低。

那么在这个上下文中来谈要不要单元测试，我们就可以很有根据了，而不是开发爽了就用，不爽就不用这样含糊的答案：

* 如果你说我的业务部门不需要频繁上线，并且我有足够的人力来覆盖手工测试，那你可以不用单元测试
* 如果你说我不在意代码腐化，并且我也不做重构，那你可以不用单元测试
* 如果你说我不在意代码质量，好几个没有测试保护的 `if-else` 裸奔也不在话下，脑不好还做什么程序员，那你可以不用单元测试
* 如果你说我确有快速部署的需求，但我们不 care 质量问题，出回归问题就修，那你可以不用单元测试

除此之外，你就需要写单元测试。如果你想随时整理重构代码，那么你需要写单元测试；如果你想有自动化的测试套件来帮你快速验证提交的完整性，那么你需要写单元测试。综上，我用以谈单元测试的「透镜」是什么呢？一言以蔽之，两点：**反馈速度**和**自动化**。

**自动化**回答的是**要不要自动化的单元测试**这个问题。测试是重构的唯一保障，也就是说，没有测试，基本上就没法重构代码（重构指的是 [不改变软件可观测行为的前提下改善代码内部设计或实现](https://www.martinfowler.com/bliki/DefinitionOfRefactoring.html) ），基本上就只能看着代码腐化。那么，基本上只要你的系统需要持续发展，你就需要单元测试。

**反馈速度**回答的是**要不要 TDD、测试先行还是后补**这个问题。我认为，要 TDD，最好先行，因为[可以提高反馈速度](https://github.com/linesh-simplicity/linesh-simplicity.github.io/issues/197)。

至此回答了「为什么我们需要写单元测试」的问题。下面谈谈如何写好 React 的单元测试。

## 测试策略

其实，上面的讨论中，从质量问题到单元测试的这个映射过程中，为了简化问题我有意地省略了一些中间步骤，那就是**测试策略**。简单来说，问这么两个问题：

* 保证质量，一定要通过测试吗？
* 如果需要测试，一定要是单元测试吗？

关于第一个问题，其实程墨在单元测试一章中也提到**可测试性**这个概念。他提到，「…可以看出来 React 和 Redux 的单元测试往往非常直观，几乎可以认为是多余的。的确，重要的不是代码容易测试，而是程序的结构非常简单，简单到单元测试都显得没有必要的地步。」这里我理解核心观点是，一个好的架构和分层可以让应用结构趋于简单，这可以让应用的某些层级非常简单直观，以至于有毛病时，依赖架构一眼就可以定位出，而不需要多余的测试。我完全同意这个观点，架构对于应用的可维护性至关重要。虽然，「结构简单到单元测试都显得没有必要」，肯定是乐观了。不管如何，结论是，还有其他的手段可以保证质量，比如架构就是重要的一个方面。它们与测试的关系不是互斥的，而是互相受益的。

第二个问题，当然不是。我们的系统中有各种各样的假设，可能需要使用不同的测试来覆盖它们。有的测试编写维护成本高，运行时间长、速度慢（如端到端测试、集成测试、UI 测试等）；有的测试编写成本低，运行时间短、速度快（如单元测试、契约测试等）。视你的项目痛点不同，资源不同（人多或时间充裕），你可以决定使用不同比例的测试组合，它本质是个按收益-成本进行的决策，因此我们也叫测试策略。经典的测试策略是测试金字塔（看下图），说白了，结论是：你应该拥有更多接近底层次的测试，因为它们成本低速度快。而这个底层次的测试就是单元测试。这是我们需要单元测试的原因，因为它们编写成本最低，反馈速度最快，因而保护价值相对最大。

![image](https://user-images.githubusercontent.com/11895199/40923670-fcd8d010-6847-11e8-931e-5831bc4db2da.png)

综上，我完成了 质量保证 -> 单元测试 的这个逻辑解释，主要的依据是测试金字塔。好，那么一个典型的 React 应用，我们的架构一般是什么样子的呢？一般的单元测试策略又是什么样？

![image](https://user-images.githubusercontent.com/11895199/40923699-11235b76-6848-11e8-9f15-a498b3d646b1.png)

我们项目上的 React-redux 应用架构如上所述。这个架构中包含了几个层级，分别有不同的特点，因此也有不同的测试策略：

| 架构层级 | 测试内容 | 测试策略 | 解释 |
| :---: | :--- | :--- | :---|
| action(creator) 层 | 是否正确创建 action 对象 | 一般不需要测试，视信心而定 | 这个层级非常简单，基础设施搭好以后一般不可能出错，属于架构带来的简单性 |
| reducer 层 | 是否正确完成计算 | 对于有逻辑的 reducer 需要100%覆盖率 | 这个层级 input -> output 明确，又有业务逻辑的计算在内，天然属于单元测试宠爱的对象 |
| selector 层 | 是否正确完成计算 | 对于有复杂逻辑的 selector 需要100%覆盖率 | 这个层级 input -> output 明确，又有复杂的业务逻辑计算，天然属于单元测试宠爱的对象 |
| saga(副作用) 层 | 是否获取了正确的参数去调用 API，并使用正确的数据存取回 redux 中 | 对于是否获取了正确参数、是否调用正确的 API、是否使用了正确的返回值保存数据、业务分支逻辑、异常分支需要100%覆盖 | 这个层级也有业务逻辑，对前面所述的5大方面进行测试很有重构价值 |
| component(组件接入) 层 | 是否渲染了正确的组件 | <ul></ul><ul><li>组件的分支渲染逻辑要求100%覆盖</li><li>交互事件的调用参数一般要求100%覆盖</li><li>被 redux connect 过的组件不测</li><li>纯 UI 不测</li><li>CSS 不测</li></ul> | 这个层级最为复杂，测试策略还是以「代价最低，收益最高」为原则进行 |
| UI 层 | 样式是否正确 | 目前不测 | 这个事情关键目前我理解在于，能不能提供可视化的快照对比，哪怕是成本高一些 |

这里做一些补充。一是不测 redux connect 过的组件这个策略。理由是成本远高于收益：要牺牲开发体验（搞起来没那么快了），要配置依赖（配置 store、 `<Provider />`，在大型或遗留系统中补测试还很可能遇到 `@connect` 组件里套 `@connect` 组件的场景）；然后收益也只是可能覆盖到了几个极少数出现的场景。得不偿失，果断不测。

另外，UI 测试这块，团队之前尝试过 snapshot 测试，然而在「保证 UI 不受非预期改变」这点上收益不大，成本也偏高。所以我个人持非常保留的态度，不推荐。


## 好测试的特征

好的单元测试应该遵循这三点大的原则。如果在落地测试策略的过程中，发现测试很难维护、价值不大，请回过头来看这三条原则，并思考你的单元测试是否有改进空间、你的测试工具是否有改进空间。

* 快、稳定（比如，单元测试中不应该掉真实的 API、IndexDB 等）
* 仅对输入输出敏感（比如，不应该对执行次序敏感）
* 不关注（或极少关注）内部实现（只要输入输出没变，测试就不应该挂，从而保证重构进行）

遵循好这三条基本原则，可以很大程度提高测试的稳定性、降低维护成本，让其能为项目后续的重构和持续改进保驾护航，能作为活文档让所有团队成员阅读理解。

## reducer 测试

最为简单的 reducer 测试，仅一一对应保存数据切片。此种 reducer 可以不需要测试覆盖，因为基本由架构简单和逻辑简单保证，不需要靠读测试用例来理解。

```js
import reducers from './reducers'
import actions from './actions'

test('should save loading start indicator when action isLoadingProducts is dispatched given is loading is true', () => {
  const state = { isLoadingProducts: false }
  const expected = { isLoadingProducts: true }

  const result = reducers(state, actions.isLoadingProducts(true))

  expect(result).toEqual(expected)
})
```

一个较为复杂、具备测试价值的 reducer 可能如下，它在保存数据的同时，还进行了合并、去重的操作：

```js
export default createReducers((on) => {
  on(actions.saveUserComments, (state, action) => {
    return state.merge({
      comments: uniqBy(state.comments.concat(action.payload.comments), 'id')
    })
  })
})
```

```js
import reducers from './reducers'
import actions from './actions'

test('should merge user comments within the same day and remove duplications when action saveUserComments is dispatched with new fetched comments', () => {
  const state = {
    comments: {
      '2017-08-21': [{ id: 1, title: 'comments-1' }],
    },
  }
  const comments = {
    '2017-08-21': [
      { id: 1, title: 'comments-1' },
      { id: 2, title: 'comments-2' },
    ],
  }
  const expected = {
    comments: {
      '2017-08-21': [
        { id: 1, title: 'comments-1' },
        { id: 2, title: 'comments-2' },
      ],
    },
  }

  const result = reducers(state, actions.saveUserComments(comments))

  expect(result).toEqual(expected)
})
```

### 错误姿势

上面这个 reducer 测试形态应该是最轻量级的了，直接 import 进来待测的单元（reducer），按照 `newState = reducer(previousState, action)` 的 API 扔给它当前 reducer 的 state 状态和待处理的 action，准备数据也十分方便，然后直接断言返回的结果。相反，之前项目采取过这样的测试姿势，虽然区别不大，但仍然可以看出差距：

```js
import configureStore from './store'
import actions from './actions'

test('should save loading start indicator when action isLoadingProducts is dispatched given is loading is true', () => {
  const state = {
    products: {
      isLoadingProducts: false,
    },
  }
  const expected = {
    isLoadingProducts: true,
  }

  const store = configureStore(state)
  store.dispatch(actions.isLoadingProducts(true))

  expect(store.getState().products).toMatchObject(expected)
})
```

代码看起来也不长，但感觉就是太重了！毛病在哪里呢？就先不讲这个 store 其实是用的真实的 store，也不讲 `dispatch`/`getStore` 这两个代码与 redux 实现方式耦合，这段测试代码还有两点其他的坏味道：

* 准备测试 reducer 的 state 时，还必须知道它注册在 `products` 这个 key 下，一方面这与实际的产品代码是耦合，另一方面为了测试一个单元你需要知道额外的信息，重一
* `store.getState().products` 拿回来的是整个 reducer 切片，里面除了你要断言的 `isLoadingProducts` 字段，还可能有其他的字段（如果你不是 mock 的话，用的就是真实的 reducer `initState`），这导致你没法做 `toEqual` 的精确对比。当然可以有其他的解决方案（比如 `getState().products.isLoadingProducts` 或使用 `toMatchObject` 断言），但「测试受到其他部分影响」这个事实，也造成你需要了解额外的知识才能把测试写对，重二

一开始介绍的 reducer 测试就不存在这两种问题。纯正的纯函数测试。

## actions 测试

这一层太过简单，基本都可以不用测试，获益于架构的简单性。

```js
export default createActions({
  saveUserComments: (comments) => ({ comments }),
})
```

```js
test('should dispatch saveUserComments action with fetched user comments', () => {
  const comments = []
  const expected = {
    type: 'saveUserComments',
    payload: {
      comments,
    },
  }

  expect(actions.saveUserComments(comments)).toEqual(expected)
})
```

## selector 测试

selector 是重逻辑的地方，并且它也是一个纯函数，与 reducer 测试享受同样待遇：纯净的输入输出，简易的测试准备。下面给一个先看一个稍微简单点的 selector 测试用例：

```js
import { createSelector } from 'reselect'

const transformSelectedLabelArrayToObjectForPerformance = (labels) => {
  return labels
    .map((label) => ({
      [label.name]: label.active,
    }))
    .reduce((a, b) => ({ ...a, ...b }), {})
}

export const selectedProductLabels = createSelector(
  [(store, ownProps) => store.products[ownProps.id].labels],
  transformSelectedLabelArrayToObjectForPerformance
)
```

```js
test('should map array of product labels to object for performant component access', () => {
  const store = {
    products: {
      10085: {
        labels: [
          { code: 'canvas', name: '帆布鞋', active: false },
          { code: 'casual', name: '休闲鞋', active: false },
          { code: 'oxford', name: '牛津鞋', active: false },
          { code: 'bullock', name: '布洛克', active: true },
          { code: 'ankle', name: '高帮鞋', active: true },
        ],
      },
    },
  }
  const expected = {
    canvas: false,
    casual: false,
    oxford: false,
    bullock: true,
    ankle: false,
  }

  const productLabels = selectedProductLabels(store, { id: 10085 })

  expect(productLabels).toEqual(expected)
})
```

可以看到，调 selector 如调普通函数，无需特别准备，另外数据的准备也是非常简单的，不需要复杂的 mock 技巧。

## saga 测试

saga 是负责调用 API、处理副作用的一层。这一层副作用怎么测试呢，首先为了保证单元测试的速度和稳定性，像 API 调用这种不确定性的依赖我们一定是要 mock 掉的。在实际的项目上有可能副作用是通过其他的中间层进行处理，比如 redux-thunk、redux-promise 等，但主要的思想是一样的。这一层经过总结，我认为主要的测试内容包括：

* 是否使用正确的参数（通常是从 action payload 或 redux 中来），调用了正确的 API
* 对于 mock 的 API 返回，是否保存了正确的数据（通常是通过 action 保存到 redux 中去）
* 主要的业务逻辑（比如仅当用户满足某些权限时才调用 API 等）
* 异常逻辑

### 不完美的姿势

redux-saga 官方提供了一个 [util: `CloneableGenerator`](https://github.com/redux-saga/redux-saga/blob/master/docs/advanced/Testing.md#branching-saga) 用以帮我们写 saga 的测试。这是我们项目使用的第一种测法，大概会写出来的测试如下：

```js
export function* fetchDataOnProductDetail({ payload: { productId, userId } }) {
  const { userRole } = yield select((store) => store.credentails)

  yield put(actions.fetchProductDetailSaga(productId))
  yield put(actions.fetchProductComments(productId))
  yield put(actions.fetchUserUnreadComments(productId, userId))
  yield put(actions.fetchProductPromotions(productId))

  if (userRole !== UserRole.VIP_USER) {
    yield put(actions.fetchAdsSaga())
  }
}
```

```js
import { cloneableGenerator } from 'redux-saga/utils'

test('should execute loginHookSaga actions in correct order', () => {
  const action = { payload: { productId: 10085, userId: 28071562837 } }
  const credentials = { userRole: UserRole.NOT_VIP_USER }
  const generator = cloneableGenerator(fetchDataOnProductDetail)(action)

  generator.next() // cannot take the same selector as the implementation did
  expect(generator.next(credentials).value).toEqual(put(actions.fetchProductDetailSaga(10085)))
  expect(generator.next().value).toEqual(put(actions.fetchProductComments(10085)))
  expect(generator.next().value).toEqual(put(actions.fetchUserUnreadComments(10085, 28071562837)))
  expect(generator.next().value).toEqual(put(actions.fetchProductPromotions(10085)))
  expect(generator.next().value).toEqual(put(actions.fetchAdsSaga()))
})
```

这个方案写多了，大家开始感受到了痛点，读者是否也能感受得到：

1. 测试分明就是把实现抄了一遍。这违反上述所说「仅对输入输出敏感」的原则
2. 当在实现中某个部分加入新的语句时，该语句后续所有的测试都会挂掉，并且出错信息非常难以描述原因，导致常常要陷入「调试测试」的境地，这种场景下我们说维护测试确实是成本
3. 测试没有重点，随便改点什么都会挂测试，无法很好支持「重构」这种改变内部实现但不改变业务行为的代码清理行为


### 正确姿势

于是，针对以上痛点，我们想出了可能的解决方案：是否可以通过将 saga 全部执行一遍，搜集所有 dispatch 出去的 action，然后由开发者自由断言某个 action 是否被正确 dispatch？这样的话，可以只测试你真正关心的、与业务逻辑相关的部分，并且可以做到**与次序解耦**、**重构改动了代码而不挂测试**，从而大大提升测试效率和开发体验。恰好，redux-saga 官方就有这么一个跑测试的工具：[`runSaga`](https://redux-saga.js.org/docs/api/#runsagaoptions-saga-args)。于是，我们推出了我们的第二版 saga 测试方案：**`runSaga` + 自定义拓展 jest 的 `expect` 断言**。最终，使用这个工具写出来的 saga 测试，看起来是这样子的：

```js
import { call } from 'redux-saga/effects'

export function* fetchUserUnreadComments({ payload: { productId, userId } }) {
  try {
    const { data: { comments, newCommentsSinceLastReply } } = yield call(
      Api.get,
      `products/${productId}/comments?userId=${userId}`
    )

    const hasUnreadComments = newCommentsSinceLastReply > 0
    yield put(actions.saveProductComments(productId, comments))
    yield put(actions.hasUnreadCommentsSinceLastReply(hasUnreadComments))

    if (hasUnreadComments) {
      yield put(actions.saveNotification(`有${newCommentsSinceLastReply}条新回复，快去看看吧`))
    }
  } catch (error) {}
}
```

```js
test('should fetch user unread comments and show notifications if there are any', async () => {
  const action = {
    payload: {
      productId: 10085,
      userId: 28071562837,
    },
  }
  const comments = [
    { id: 283992, author: '男***8', comment: '价廉物美，相信奥康旗舰店' },
    { id: 283993, author: '雨***成', comment: '因为工作穿皮鞋时间较多，所以一双合脚的鞋子...' },
    { id: 283994, author: '叶***亮', comment: '不错，很软，我买了大一码，因为脚宽些，是真皮的，划算萌东上...' },
    { id: 283995, author: '替***崽', comment: '磕到了，脚踝疼得不好穿，要不你们试试' },
  ]
  const response = {
    data: {
      comments: comments,
      newCommentsSinceLastReply: 2,
    },
  }
  Api.get = jest.fn().mockImplementation(() => createResponse(response))

  await testSaga(fetchUserUnreadComments, action)

  expect(Api.get).toHaveBeenCalledWith('products/10085/comments?userId=28071562837')

  expect(actions.saveProductComments).toHaveBeenDispatchedWith(10085, comments)
  expect(actions.saveNotification).toHaveBeenDispatchedWith('有2条新回复，快去看看吧')
})
```

这个测试略长，但写习惯就好。总之，它的优点在于：

* 非常容易准备数据：store、mock API response
* 覆盖了一个业务场景（获取编号 10085 产品的评论列表，如果在用户上次访问之后有2条未读回复，那么提醒用户「有2条新回复」），当这个业务场景（也就是准备的测试数据）不变时，无论你怎么修改优化内部实现，这个测试都不会挂，真正做到了测试支持重构的作用
* 可以仅断言你关心的点，不断言中间某些东西也不会有次序问题导致测试挂掉（比如上例中，我们就没有断言 `actions.hasUnreadCommentsSinceLastReply` 是否真正被 dispatch 出去）
* 自定义的 `expect(action).toHaveBeenDispatchedWith(payload)` matcher 很有表达力，且出错信息友好

这个自定义的 matcher 是通过 jest 的 `expect.extend` 扩展实现的：

```js
expect.extend({
  toHaveBeenDispatched(action) { ... },
  toHaveBeenDispatchedWith(action, payload) { ... },
})
```

上面是我们认为比较好的副作用测试工具、测试策略和测试方案。使用时紧紧抓住一开始提到的4点主要的业务价值来测试即可。

## component 测试

组件测试其实是实践最多，争论也最多的地方。React 组件是一个高度自治的单元，从分类上来看，它大概有这么几类：

* 展示型业务组件
* 容器型业务组件
* 通用 UI 组件
* 功能型组件

先把这个分类放在这里，待会回过头来谈。对于 React 组件测什么不测什么，我有一些思考，它是以「好的单元测试标准」作为原则出发考虑的：输入输出确定、不依赖于内部实现。先说结论：两测两不测。**组件分支渲染逻辑必须测，事件调用和参数传递一般要测；纯 UI 不测，连接 redux 的高阶组件不测**；其他的一般不测（比如 CSS，官方文档有反例）。具体怎么得出这个结论的呢，分析如下：

* 纯 UI 不测：因为 UI 既不好 TDD，断言起期望结果来也不如直接看来得直观。所谓快照测试有意义的前提在于，对比方式必须是视觉级别的，像 snapshot 这种 UI 测试跟提交的时候看 Git 我觉得没差别，价值不大，还打乱工作流。因此，我认为 UI 测试诉诸手工，在中等规模的项目上看起来还是可行的
* 连接 redux 的高阶组件不测。理由如下详述
* 组件分支渲染逻辑必须测：这种东西**相对**还是好断言的，并且分支逻辑往往具有业务意义，测试顺便能做为文档使用
* 事件调用和参数传递一般要测：函数调用作为组件的一个「行为」，往往也有业务意义，这部分测试在重构的时候也能提供相当的保护价值

`connect` 过的组件从测试的角度看无非四个点：

* 是否从 `mapStateToProps` 中取得了正确的参数
* 是否从 `mapDispatchToProps` 中取得正确的参数
* 是否正确地被传递给了组件
* redux 对应的数据切片更新时是否会触发组件进行一次 props 更新

这四个点，`react-redux` [已经都帮你测过了](https://github.com/reduxjs/react-redux/blob/master/test/components/connect.spec.js)，[已经证明 work 了](https://github.com/reduxjs/react-redux/issues/325#issuecomment-199449298)，为啥要重复测试自寻烦恼呢？当然，不测这个东西的话，是有可能你 export 的纯组件测试都是过的，但是代码实际运行出错。穷尽下来主要可能是这几种问题：

* 你在 `mapStateToProps` 中打错了字或打错了变量名
* 你写了 `mapStateToProps` 但没有 connect 上去
* 你在 `mapStateToProps` 中取的路径是错的，在 redux 中已经被改过

第一、二种可能，无视。测试不是万能药，不能预防人主动犯错，这种场景如果是小步提交发现起来是很快的，如果不小步提交那什么测试都帮不了你的；如果发生得很频繁，解决方案大概有二：如果因为某段数据获取的逻辑多处重复，则可能应该被抽取到 selector 进行单独测试；如果某段数据获取就是经常敲错，那么可以专门 export 这段代码进行测试固定。

第三种可能，确实是问题，但发生频率目前看来较低。为啥呢，因为没有类型系统我们不会也不敢随意改 redux 的数据结构啊…（这侵入性重的框架哟）

综上，`@connect` 组件不测，因为框架本身已做了大部分测试，剩下的场景出 bug 频率不高，而施加测试的话提高成本（准备依赖和数据），降低开发体验，模糊测试场景，性价比不大，所以强烈建议省了这份心。不测 `@connect` 过的组件，其实也是 [官方文档](https://redux.js.org/recipes/writing-tests#connected-components) 推荐的做法。

然后，基于上面第1、2个结论，映射回四类组件的结构当中去，我们可以得到下面的表格，然后发现…每种组件都要测**渲染分支**和**事件调用**，跟组件类型根本没必然的关联…不过，功能型组件有可能会涉及一些其他的模式，因此又大致分出一小节来谈。

| 组件类型 / 测试内容 | 分支渲染逻辑 | 事件调用 | `@connect` | 纯 UI |
| :---: | :---: | :---: | :---: | :---: |
| 展示型组件 | ✅ | ✅ | - | ✖️ |
| 容器型组件 | ✅ | ✅ | ✖️ | ✖️ |
| 通用 UI 组件 | ✅ | ✅ | - | ✖️ |
| 功能型组件 | ✅ | ✅ | ✖️ | ✖️ |

### 一般的业务型组件

```js
const ProductDetailPage = ({ name, introduction, details, comments }) => (
  <>
    <Title name={name} />
    <Introduction introduction={introduction} />
    <ProductDetail content={details} />
    {comments.length > 0 && <Comments comments={comments} />}
  </>
)
```

对应的测试如下，测试的是不同的分支渲染逻辑：该产品条目是否应渲染一个评论组件。

```js
test('should not render a comments section when product has no comments', () => {
  const component = shallow(<ProductDetailPage comments={[]} />)

  const commentsSection = component.find(Comments)

  expect(commentsSection).toHaveLength(0)
})

test('should render a comments section when product has comments', () => {
  const comments = [
    { id: 283992, author: '男***8', comment: '价廉物美，相信奥康旗舰店' },
    { id: 283993, author: '雨***成', comment: '因为工作穿皮鞋时间较多，所以一双合脚的鞋子...' },
  ]
  const component = shallow(<ProductDetailPage comments={comments} />)

  const commentsSection = component.find(Comments)

  expect(commentsSection).toHaveLength(1)
})
```

测试事件的一个场景如下：当某条产品被点击时，应该将产品相关的信息发送给埋点系统进行埋点。

```js
const ProductItem = ({ id, productName, introduction, trackPressEvent }) => (
  <TouchableWithoutFeedback onPress={() => trackPressEvent(id, productName)}>
    <View>
      <Title name={productName} />
      <Introduction introduction={introduction} />
    </View>
  </TouchableWithoutFeedback>
)
```
```js
test('should send product id and name to analytics system when user press the product item', () => {
  const trackPressEvent = jest.fn()
  const component = shallow(
    <ProductItem id={100832} introduction="iMac Pro - Power to the pro." trackPressEvent={trackPressEvent} />
  )

  component.find(TouchableWithoutFeedback).simulate('press')

  expect(trackPressEvent).toHaveBeenCalledWith(100832, 'iMac Pro - Power to the pro.')
})
```

简单得很吧。这里的几个测试，在你改动了样式相关的东西时，不会挂掉；但是如果你改动了分支逻辑或函数调用的内容时，它就会挂掉了。而分支逻辑或函数调用，恰好是我觉得接近业务的地方，所以它们对保护代码逻辑、保护重构是有价值的。当然，它们多少还是依赖了组件内部的实现细节，比如说 `find(TouchableWithoutFeedback)`、`expect().toHaveLength(1)`，都分别做了「组件内部使用了 `TouchableWithoutFeedback`」、「该组件最多只应该渲染一个 `VideoPlayer` 组件」这样的假设，而这些假设很可能是会变的。这对于组件测试来说，是不够完美的地方。也正因此，我认为从架构上正确地拆分组件树才如此重要，如果你的每个组件都十分清晰直观、逻辑分明，那么像上面这样的组件测起来也就很轻松，一般就遵循 `shallow` -> `find(Component)` -> 断言的三段式，哪怕是了解了一些组件的内部细节，通常也在可控的范围内，维护起来成本并不高。这是目前我觉得平衡了表达力、重构意义和测试成本的最佳实践

### 功能型组件

功能型组件，指的是跟业务无关的另一类组件：它是功能型的，更像是底层支撑着业务组件运作的基础组件，比如路由组件、分页组件等。这些组件可能会偏重逻辑多一点，但本质测法跟业务组件是一致的：都是测分支渲染和事件调用。但由于它偏功能型的特性，使得它在设计上常会出现一些业务型组件不常出现的设计模式，如高阶组件、以函数为子组件等。下面分别针对这几种进行分述。

#### `children` 型组件

```js
export const FeatureToggle = ({ features, featureName, children }) => {
  if (!features[featureName]) return null

  return children
}
```

```js
import React from 'react'
import { shallow } from 'enzyme'
import { View } from 'react-native'

import FeatureToggles from './featureToggleStatus'
import { FeatureToggle } from './index'

const SomeComponent = () => <View />

test('should not render children component when remote toggle is empty', () => {
  const component = shallow(
    <FeatureToggle features={{}} featureName="promotion618">
      <SomeComponent />
    </FeatureToggle>
  )

  expect(component.find(SomeComponent)).toHaveLength(0)
})

test('should render children component when remote toggle object is present given promotion618 feature is on', () => {
  const features = {
    promotion618: FeatureToggles.on,
  }

  const component = shallow(
    <FeatureToggle features={features} featureName="promotion618">
      <SomeComponent />
    </FeatureToggle>
  )

  expect(component.find(SomeComponent)).toHaveLength(1)
})

test('should not render children component when remote toggle object is present given promotion618 feature is off', () => {
  const features = {
    promotion618: FeatureToggles.off,
  }

  const component = shallow(
    <FeatureToggle features={features} featureName="promotion618">
      <SomeComponent />
    </FeatureToggle>
  )

  expect(component.find(SomeComponent)).toHaveLength(0)
})
```

#### 以函数为子组件类组件

既然是侧重逻辑的功能型组件，它的设计模式就比较多样一些，其中经常会出现「以函数为子组件」的这种设计模式。至于为什么会用到这种模式，它的利弊如何呢，可以看看程墨书中关于高阶组件的这部分，讲的很到位，这里不再细补充。还是以代码为例子：

```js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View } from 'react-native'

import { Indicator } from '../Indicator'
import styles from './styles'

export default class Readable extends PureComponent {
  static propTypes = {
    children: PropTypes.func,
    initialStatus: PropTypes.bool,
  }

  state = {
    pressed: false,
  }

  get readStatus() {
    return this.state.pressed || this.props.initialStatus
  }

  onPress = () => this.setState({ pressed: true })

  render() {
    return (
      <View style={styles.container}>
        <Indicator status={this.readStatus} />

        <TouchableOpacity activeOpacity={0.8} onPress={this.onPress}>
          {this.props.children(this.readStatus)}
        </TouchableOpacity>
      </View>
    )
  }
}
```

这个组件，顾名思义，是负责管理「已读未读」的组件：它接受一个 children，负责记录它是否已被点击（阅读）过的状态，并将此状态作为参数，调用 children 时传递给它。再来看使用它的地方：

```js
const ProductItem = ({ isRead, productName, comments }) => (
  <Readable initialStatus={isRead}>
    {(isRead) => (
      <>
        <ItemContent title={productName} style={[styles.normal, isRead && styles.readStyle]} />
        {comments.length > 0 && <Comments comments={comments} />}
      </>
    )}
  </Readable>
)
```

好，现在比如你要测 `ProductItem` 里面的这段「是否渲染评论组件」的逻辑，你要怎么测呢？一般的 `shallow(<ProductItem />)`，里面这段以函数作为子组件的函数可不会被调用哟？

目前我们项目解决方案是，手动拿到 children 这个函数，再手动 `shallow` 渲染一下，然后再测。再次地，这非常有侵入性，对实现了解比上面的例子更多。这是我所能接受的差不多一个平衡点了，就是如果准备再复杂一些，我就会开始觉得麻烦了。

```js
test('should render a Comment component when comment is not empty', () => {
  const componant = shallow(
    <ProductItem
      isRead={false}
      productName="iMac Pro"
      comments={['awesome products', 'I will buy 10 for my friends', 'I would love to have such a friend!']}
    />
  )
  const productItem = shallow(component.find(Readable).props().children())

  const commentsSection = productItem.find(Comments)

  expect(commentsSection).toHaveLength(1)
})
```

## 参数化测试

严格来说，参数化测试是一种方法，可以应用在任何层级的测试中。它非常适用于数据驱动类型的测试中，可以提升数据准备效率，同时兼顾用例信息、错误提示灯优点。话不多说，直接上例子。

![image](https://user-images.githubusercontent.com/11895199/41195038-a0a747b2-6c58-11e8-9ba0-f1c7916850d8.png)

## 总结

好，总结下来，本文主要的内容如下：

* 单元测试对于 React 项目（及其他任何项目）来说都是必须的
* 在必须有测试的上下文中，推荐练习并使用 TDD 这种测试先行的方法获得快速反馈
* 之所以优先选择单元测试，是依据测试金字塔的成本收益比原则确定得到的
* 好的单元测试具备三大特征：**仅对输入输出敏感**、**不依赖于内部实现**、**快且稳定**
* 测试也有测试策略：在 React 的典型架构下，一个测试体系大概分为五层：组件、action、reducer、selector、副作用层。它们分别的测试策略为：
  * reducer、selector 的重逻辑代码要求100%覆盖
  * 副作用层主要测试：**是否拿到了正确的参数**、**是否调用了正确的 API**、**是否保存了正确的数据**、**业务逻辑**、**异常逻辑** 五个层面
  * 组件层两测两不测：**分支渲染逻辑** 和 **事件、交互调用** 必测；纯 UI、`@connect` 过的高阶组件不测
  * action 层选择性覆盖：可不测
* 其他高级技巧：定制测试工具（`jest.extend`）、参数化测试（`test.each()`）等


## 施工中🚧 - 待补充 & 待修改

* [x] 代码进一步脱敏
* [ ] 补充个「简介」section，可以拿来上前端期刊。期刊的话，还有些文章级别的东西要整理，批评《浅出》的言论就不要上了；调调更积极一些，尽量对人有信心，不要随意喷能力问题。要强调测试是难的，需要练习的，测试作为二等公民所以有学习成本的观点是错的，测试是一等公民；要（吗）帮忙指出入门路径，使初学者的入门感觉愉悦而非痛苦。要强调作为个人学习是必要的，作为 Leader 合适地考虑学习成本、能力路径、从易到难并由此设计测试策略是必要的；对外发布的话，需要对「快照测试」的部分做更客观的评价，「强烈不推荐」这个结论可能不是很经得住实践考验
* 走查一下项目，主要关注几个方面：
  * 有哪些可以测的东西没有写测试的？有哪些因为设计不好写的太复杂而没有写测试的？
  * 积累测试素材：
    * `TagsContainer/index.test.js` 有个也还不错的测试
    * `ImproveUserInfo` 上有许多不错的测试用例，可惜设计和耦合比较深，难以剥离出来
    * `Login` 里面也有些「验证登录按钮可不可点」的逻辑，非常适合做单元测试，但写的还是有点依赖于实现
    * `ProductDetail` 里面好像也有很多逻辑，然而没写好
    * `Register` 里关于测试六个字段的部分，也有点意思，它可能违反了最佳实践，但它是从 tasking 列表来的；
    * `Register` 关于 `GetValidationCode` 的部分，也有点问题，是个通用问题：大多数情况下，你不应该直接去操作内部字段，而是应该通过「界面行为」去表达场景，让内部自己处理，然后你最后得到断言结果
    * `Reservations` 里也有有趣的实践
    * `DevFeatures` 里提供了一个实例，如何在一个测试中需要多次用到一个 mock，并且返回不同的值
    * 测不测组件类上的实例方法呢？大部分时间不测，它们就像 private 方法，一般是你重构出来的，你有这个疑惑，很可能说明没有好好 tasking，没有 TDD；有小部分场景，是因为 simulate 事件不好测，那么这种场景下你可以做假设、直接调实例方法。
* [ ] `{ comments.length > 0 && <Comments comments={comments} />` feature envy 例子重构，找个更合适的例子
* [ ] saga 章节统一下例子
* [ ] 那种根据代码条件逻辑而有不同样式的代码，怎么测？`Visible` 这样的组件，可读性提升了，consumer 端怎么测试？如果只测传给 `Visible` 的参数，显然就变成测试实现了
* [ ] 是否可以把所有「不好的姿势」的内容抽成独立的章节？
* [ ] 关于 AT 的常见看法「编写和维护成本高」可能不正确，需要进一步润色用词
* [ ] 所涉及的测试，皆用 fixture 突出关键信息，隐去无关信息的准备
* [ ] 以「函数为子组件」的模式，是不是都可以写个专门的 helper 来屏蔽掉这些细节？
* [ ] 更细致的组件测试的例子：如 mock、更接近「实现」更违背「不应关注实现」但具有业务价值的例子、如何 mock 系统级别的依赖，如 `moment()` `Date.now` 等
* [ ] 谷歌或百度一下，前端 React 单元测试相关的文章；看下别人写过的东西，取长补短

---

<details>
  <summary>附录：快照测试成本与实践落地剖析</summary>

## snapshot testing 测试实践

之前我对快照测试是很有看法的，觉得外界对它「多快好省」的希冀其实真实的价值并没有那么大，反而有很多副作用。就像 TDD 的狂热者一样，大家对快照测试狂热不已。为了描述这种坏味道，我有三点主要的质疑：

* 快照测试是反 TDD 的
* 快照测试会阻碍团队的重构
* 快照测试会损伤开发者体验

这些质疑都有其道理，却也不是不能解决。先来看看其道理所在：反 TDD 很明显，它是写完再打快照，那在你开始写到写完这个过程，你没有办法通过测试获得反馈；阻碍重构，是指我重构组件的过程中就算逻辑没有动，但因为字符串的改变组件仍然会挂（这点非真）；损伤开发者体验，主要是说如果我频繁运行测试，并且正在修改组件，那我不得不重复「比对差异 - 更新快照」这个事情以使快照测试通过，否则我就得忍受经常红掉的测试。

先说反 TDD 这个事情，它确实和 TDD 不是一路的玩法。和祁兮沟通了一下，他觉得快照测试更接近 ATDD 这样高层级的测试，只不过它是针对于 UI 的测试。那可能就是你先写着，但在你的故事卡完成之前它一直会是挂的。那么你是不是可以选择在做卡的时候不去运行快照测试，只有结卡的时候再去把它固化下来？这点看起来很吸引，但仍然有一个问题，且看后面。但关键点是说，它确实不是与 TDD 兼容的测试方式，但同时它也是更高层级的测试，你不需要经常运行，需要 TDD 的时候依然可以采用其他的测试工具。

阻碍团队重构，是我了解不足所导致。我原本以为，只有改了任意字符串，快照测试就会挂，哪怕你没有改动功能，那这样就不满足我们对「不改变软件可观测行为的前提下进行重构」的标准。但事实证明，快照测试并不只是简单比较字符串，而且比较对于给定的 props 输入，输出是不是一致。因此，里面的可执行代码（逻辑）变化了，只要最终可观测的输出没有变化，那么快照测试也不会挂球。所以这点感受非真。

损伤开发者体验，这个问题比较关键。因为快照测试是检测「变化」，而非「结果」，所以当你改动了 UI 时，快照测试必然会挂。这个测试的挂就是给你传达这样一个信息：「现在我挂了，说明你改了代码。至于你改对了没有，那我咋个晓得呢，你确定你真的要修改吗？」因此，你要做的无非两个事情：比对差异、做出回应（更新快照或回滚修改）。这个对开发者体验可能的影响点是在，它是凭空地在你的红绿循环中间加了这么一道，当你频繁运行测试时，你可能必须频繁重复这两个事情：比对差异、做出回应。那么，你要么别频繁运行测试，要么能快速地完成这两个事情。

别频繁运行测试肯定是不能接受的，那么问题就转化成了：如何快速地完成这两个事情，以及这个过程带来的价值真的比开发者体验过程牺牲的反馈时间性价比更高吗？

**价值**。我们把组件的观测点分为两类：纯 UI 和逻辑。逻辑方面，用 Enzyme 来覆盖更加能保留业务场景；UI 方面，用 Enzyme 来覆盖必然要面临脆弱测试的问题，此时用 snapshot 测试则更有价值。因此我们讨论的结果是 **snapshot 测试主要的价值就是在固化 UI 上**，这其中也包括样式。祁兮说，如果把 UI 当成与业务代码一样对待，那么保证每个提交都没有破坏业务功能和 UI，显示是有其价值的。

**如何快速地完成 比对差异 和 做出回应** 这两个事情：

### 比对差异

对于 UI 组件的更新，一般可以分为四类操作：

* 改字、改样式。这个差异比对体验完美 - 不就是自己开个 Git 比对一样的效果么？
* 增加或删除 UI 组件
* 改变组件结构，比如包一层，去一层之类的
* 可观测 UI 行为不变，重构逻辑。这个 snapshot 或单元测试都能覆盖，推荐后者，更清晰、轻量

后两个在纯 React/HTML/JSX 中体验过，也跟纯文本对比一样，所以基本来说可以达到没什么成本。尽管说，这样而言就跟 Git 比对没什么两样，为啥还要测试这个流程？优点还是有一个，可以自动化，以及防止人为对 UI 的疏忽导致改出来 bug。问题是，在 RN 中，增删组件、包一层减一层组件（一般是包 `View`），jest 会默认把 View 的内部实现展开出来，变成冗长的字符串，这会导致差异没法比对，大大增加比对成本。解决方案是把它 mock 掉。

因此，差异比对这一块，如果没有特别的坑，可以做到比较低的成本；比对方式，仍然遵照 Git 进行文本比对的方式即可。

### 更新快照 

* 可以通过命令行的方式 `jest --updateSnapshot`，但执行太耗时，并且要它执行完以后你才可以 commit，需要等待，打断节奏；
* 可以通过 `jest --watch` 的方式，在快照更新并确认要更新后按个 `w` 去更新，但我用的是 WebStorm 的测试面板，它通常被我放在副屏，不在主屏，这样我要么需要通过 `cmd + 4` 或鼠标移动的方式切换到测试面板去执行这个「按 `w` 更新快照」的操作，然后再通过两下 `escape` 或鼠标移动点击的方式回主面板。当我核心注意力在红绿循环中的时候，这无疑需要额外的注意力来切换屏幕、进行鼠标操作，乃是大忌，频繁执行测试下，对工作流和节奏的打乱更要命
* 可以通过 `precommit` 脚本自动执行 `jest --updateSnapshot`。这是我目前想到相对最好的解决方案，在你比对了差异并确认需要更新后，还是通过 WS 的 Git 插件 `cmd + k` 进行 commit，然后 hook 脚本就会在后台执行，既不需要切换，也不需要打断当前思路和流程

至此，如果没有其他的坑，差异比对和更新快照的问题都得到了妥善解决。去除了这层成本对开发者体验的影响，我依然可以 TDD，于是能尝试去使用快照测试，看看具体的关节实践起来是否真如我们期望。

还有另外一个问题，就是快照测试什么时候运行并提交的问题。有三种粒度：

* commit 粒度。即每个 commit 都需要保证快照测试通过，它是把 UI 当成与逻辑同样的一等公民来对待。这个粒度能保证每次对快照的更新都比较少，使得差异比较能 focus 在一个点上；它还能保证每个提交都是「原子提交」，即随便切一个 commit 都是可发布的状态，它们都通过 lint、通过 UI 测试、通过单元测试；这个是我们所期望的状态，**挑战在于它需要 UI 部分跟 UT 一样要频繁进行「比对差异、更新快照」这两个事情**，只有按照前面描述的实践，把这两个事情的时间成本降到最低，才能保证工作流畅，不然光研究差异就得花去半天时间，哪里还有心情写代码
* push 粒度。就是说我 push 的时候必须保证快照测试通过。缺点是，中间的提交不能保证原子性，即是我没法保证每个 commit 都可发布；同时 review 的时候变化可能比较多，如果因为其他原因可读性不够好，基本就 review 不下去了，那也只能强行 `jest --updateSnapshot` 了，可能会增加比对差异的成本；
* pr 粒度。通过配合本地 skip 掉快照测试的方式，这种粒度对开发者体验的侵入性是最小的。但缺点是 commit 原子性无法保证，比对差异可能更难进行，过高的比对成本可能导致人在这个环节偷懒犯错，从而失去快照测试的本意和意义

综上，快照测试的价值是对 UI 进行覆盖，把 UI 当成与逻辑同等地位的代码来看待。同时，[快照测试不能完全取代单元测试](https://facebook.github.io/jest/docs/en/snapshot-testing.html#does-snapshot-testing-substitute-unit-testing)，有逻辑的部分建议使用 Enzyme 进行 TDD 和覆盖。快照测试的粒度，建议是 commit 的粒度，以便每次提交都能保持「原子性」（即 lint、UT、快照测试都通过）。为此，依然需要频繁运行测试，并需要解决这个过程频繁的「差异比对」和「更新快照」可能带来的过高的成本，防止开发者体验因此降低。在价值、定位、粒度、具体操作都明确的基础上，不妨进行尝试，看它是否能带来预期的收益。

https://benmccormick.org/2016/09/19/testing-with-jest-snapshots-first-impressions 。这里将 ST 的优缺点和利弊权衡都讲得好。
</details>
