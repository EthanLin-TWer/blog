---
title: React系列（二）：单元测试最佳实践
tags: react unit-test tdd frontend-tdd rtl react-testing-library jest design-system
---

实践证明，在前端以细粒度的UI组件为单元做测试不能很好地支撑重构和需求变化。本文将介绍一种更能支撑前端TDD、能更好地支撑重构和开发的单元测试方案。 

这套经验曾支撑笔者经历的一个年交易流水十亿美元级、历时五年+的金融系统的成功运营和维护演进。

> 评论请暂时移步[Github Issues#230](https://github.com/EthanLin-TWer/ethanlin-twer.github.io/issues/230)。本博客留言功能还未糊。
>
> 包含**示例故事卡完整代码和测试实现**的代码仓库请见：https://github.com/EthanLin-TWer/react-testing-strategy
> 
> 仅含**架构和UT测试最佳实践**的代码仓库请见：https://github.com/EthanLin-TWer/react-starter
> 
> 本文尝试覆盖的东西有点多，阅读体验可能较为艰涩。欢迎向作者提出反馈意见！

## 太长不读——本文中心观点及大纲

* 有效的自动化测试是企业级应用的必选项。过度依赖手工测试会拖慢系统演进速度、增加组织成本。
* 在前端（React）领域，你所做的自动化测试不一定是有效的。
* 有效的自动化测试就是能够有效支撑重构的测试。
* 测试策略来源于软件架构。本文介绍了一种常见且有效的React应用架构。
* 有效的测试策略，只应该mock API（层），而不应该mock组件常见内部实现，如React hooks、Redux、React组件等。
* 介绍了在静态页面渲染、用户交互、API交互等场景下如何进行有效的自动化测试
* 测试本身也有分层。本文介绍了一种推荐的分层实践：API DSL、business tester、component tester。
* 为了实现有效支撑重构这个根本目标，测试引入的分层会带来一些额外的（一次性及短期）成本。
* 承担这个成本是值得的。一切都是为了让你的测试能够真正支撑重构、有效留存业务上下文，真正助力研发效能。

## 目录

* 为什么有效的自动化测试很重要
* 有效的自动化测试 v.s 无效的自动化测试
* React应用典型架构
* React组件单元测试最佳实践
* 测试架构与代码落地
  * 场景（一）：静态页面测试
  * 场景（二）：用户交互
  * 场景（三）：路由跳转
  * 场景（四）：Mock API返回
* 总结：好处与挑战
* Q & A
  * 本文与上一版的[《React单元测试策略及落地》][react-unit-testing-best-practices]相比有何变化？
  * 这个组件测试策略覆盖的层如此之多，是否还能叫“单元测试”？
  * 为什么不用类似MVVM的架构、然后只测是VM不测View(UI)呢？
  * 推荐以什么组件作为入口编写单元测试？
  * 跨页面或路由的功能应该如何测试？
  * 单个测试文件内按业务功能组织还是按技术模块组织？
* 参考

## 为什么有效的自动化测试很重要

正如我在5年前的[React单元测试策略及落地][react-unit-testing-best-practices]中所说，自动化测试，而且是**有效的自动化测试**，**对于任何一个企业级项目来说都是必选项而不是可选项**。这是由企业项目的两个特点决定的：**人员流动不可避免**、**应用演进不可避免**。这两点不因人的主观意志为转移。应用演进，意味着新的、遗留的业务和代码会越来越多；人员流动，意味着物理上不可能会有一个人能长期、完全地掌握单个应用的所有上下文。因此，希望通过手工测试（开发者自测或者单独的QA团队手测）的方式来保障质量，首先既是低效的，长期来看也是不可能的。

那么，有了自动化测试就可以了吗？答案也不是。我见过许多无效的自动化测试，最痛的莫过于花费许多精力写了测试，却发现测试无法支撑重构：许多简单的重构——比如React组件重命名、将数据从State搬移到Context等——都会导致许多测试失败，直接对开发效能起负作用。其次，测试缺乏有表达力、有意义的断言，或者测试的描述与断言与真实业务场景脱节——比如测试断言的是页面上有没有“￥400”，关联的业务场景却是报价能否成功——等等，也都是常见的无效测试模式。这样的无效测试，都不能帮助你留存业务知识、支撑随时随地进行的技术重构，也无法真正助力软件质量和研发效能的提升，久而久之只会让测试变成一场表演，变成不得不应付而又弃之可惜的鸡肋。

你需要的是真正**有效的自动化测试**。

如果你是企业的中层技术管理者（Tech Lead或者Technical Principle等），那么这是你应该关注的问题；如果你是正在努力成为技术骨干的开发者，这篇文章也正是为你准备的。

接下来，我会介绍什么是有效的自动化测试，然后以一个React应用为背景，介绍一个常见且有效的测试策略是什么、作为关键部分的单元测试应该怎么架构、怎么编写，我会给出十分充足的代码样例帮助你和你的团队去落地。最后，我还会介绍这部分关键的单元测试方式有什么挑战，帮助你对这项技术知己知彼。

这套经验是我在过去三年、两个项目上的实践和总结。它成功地帮助我们能够在一个支撑行内年十亿美元级交易数额的应用上，历时5年+、还没上TS的情况下仍能自信地修改和重构代码；它也成功地帮助了我们当前的项目从0到1搭建起有效的测试策略，如今一个具有复杂逻辑的页面已经有4000行测试代码的有效覆盖。这篇文章是实践中诞生的经验和总结。

## 有效的自动化测试 v.s 无效的自动化测试

正如上节所讲，写了自动化测试不意味着团队有效应对业务演进和技术重构的效能提升了。只有**有效的**自动化测试才能真正让测试成为团队和开发者的助力。

那么，什么是有效的自动化测试呢？无非两点：**支撑重构**、**表达力强**。支撑重构，持续改进才不是一句空话；表达力强，才能有效地在测试里留存业务上下文，方便每一个现在、将来需要维护代码库的成员。通常来说，能够支撑重构的测试，表达力强也是其不可或缺的一部分，因此我认为**能够支撑重构的测试，就是有效的自动化测试**。这个重要性怎么强调都不为过，是实施自动化测试关键中的关键。

更具体的例子，因为篇幅可能过长，我打算放在另一篇[React系列（三）：什么是好的自动化测试][series-3-what-makes-a-good-automation-test]里写。请将其作为本篇的补充读物，里面的一些观点跟接下来要阐述的React单元测试实践是互相交织、一脉相承的。在这里，我打算给出一个典型的、集“大成”于一体的无效自动化测试，读者不妨看看，它都有哪些“无效”的地方、你的项目又是否正在经历这些无效测试的折磨。

> 🚧这部分草稿在另一台电脑上。

```tsx
WIP
```

简而言之，无效的自动化测试可能包含以上的一个或多个特征：

* WIP

## React应用典型架构

[软件架构是测试策略的前提要件][clear-architecture-is-a-prior-input-for-testing-strategy]。没有清晰的软件架构和分层定义，就难以制定有效的测试策略并加以实施。因此，在谈论React应用的测试策略之前，有必要定义一个常见的React应用架构作为参考。

[分层是应用架构的常见手段][why-layering-is-important-method-of-architecting]。分层的目的在于隔离变化传播，为上层调用提供透明且简便的功能接入和封装。在React 16引入React Hooks之后，一个常见但不严谨的分层架构往往是这样的：

```mermaid
flowchart TB
  components(fa:fa-building <b>Components</b> layer)
  hooks(fa:fa-network-wired <b>Hooks</b> <i>layer</i>)
  api_adaptor(<b>API adaptor</b> layer)
  api(fa:fa-wifi <b>API</b> layer)
  
  style api_adaptor stroke-dasharray: 6 6
  style components fill:#A5EA88
  style hooks fill:#F1CFFE
  style api fill:#FCD6B6
  
  components --> hooks
  hooks --> api_adaptor
  api_adaptor -. ResponseDTO .-> hooks 
  
  api_adaptor -- Request --> api
  api -. Response .-> api_adaptor

```

在这个架构里，组件层（Component Layer）是确定的，它负责处理的是把从下层得到的数据渲染成View，隔离的是渲染目标HTML的变化（借助JSX和React的V-DOM技术）。同时，API层也是确定的，它负责处理与三方系统交互的API调用，隔离的是通信协议（HTTP、GraphQL等）的变化。

API适配层的作用是，将API层得到的`Response`转换成前端应用可以使用的`ResponseDTO`结构，隔离的是后端数据结构变化对前端（Hooks、View等）的传播。这个隔离非常重要，但是这一层不一定是必须的：如果这一层非常薄、没有任何逻辑，那么直接让API层转换一层、返回`ResponseDTO`同样可达到隔离后端数据结构变化的目的；如果你使用了类似React Query之类的工具，那么这一层可以合并到Hooks的大“分层”里头。

Hooks严格来说不是一个“层”。一个架构意义上的分层，必须有明确的职责、明确的输入接口与输出接口。这些限制React Hooks本身是不提供的，有赖于开发者去定义它。关于什么是React Hooks的最佳实践和架构，我会放在这篇文章[React系列（四）：Hooks最佳实践与面向对象][series-4-react-hooks-best-practices]中去讨论。这里，我直接把一个我推荐的结果拿过来用，再细化一下，这样我们就得到了一个分层合适的React应用架构：

```mermaid
flowchart TB
  %% definition: components layer
  route_components("<b>⑥ Route / Page Components</b><br/><br/>Next.js app/, React Router, ..")
  business_components("<b>⑦ Business Components</b><br/><br/>components/<br/>index.tsx<br/>hooks.ts<br/>styles.ts<br/>types.ts<br/>...")
  ui_components("<b>② fa:fa-palatte UI Components</b><br/><br/>MUI, Antd, Semantic UI, Tailwind, ...")
        
  %% definition: hooks layer
  shared_hooks("<b>⑧ Domain logics / shared effects</b>")
  dom_hooks(<b>DOM APIs</b>)
  analytics_hooks(<b>Analytics</b>)
  global_store("⑩ <b>Global store</b><br/>(Accessible anywheres in <b>Hooks</b> layer)<br/><br/>React Context, redux, mobx, ..")
  api_hooks("⑨ <b>API Hooks</b><br/><br/>React Query, SWR, RTK Query, ..")
  etc_hooks(<b>........</b>)

  %% definition: api layer
  api_client(<b>API Client</b><br/><br/>axios, fetch, superagent, ..)
  
  %% definition: shared layer
  utils(<b>Utils</b>)
  constants(<b>Constants</b>)
  
  %% definition: outside of boundaries
  bff("⑪ fa:fa-server <b>Application Bff / Backend</b><br/><br/>Java, Kotlin, NodeJS, ..")
  deps_dom_apis(<b>Dependency: DOM APIs</b><br/><br/>window events, etc.)
  deps_analytics(<b>Dependency: Analytics Scripts</b><br/><br/>Sentry, Adobe Analytics, ..)

  %% styles - #D8FAC8 #A5EA88 #F1CFFE #B3E5FA #FCD6B6
  style route_components stroke-dasharray: 6 6,stroke: #333
  style app fill:#FFF,stroke: #333,stroke-dasharray: 20 20,stroke-width:4
  style business_components fill:#A5EA88,stroke: #333
  style route_components fill:#A5EA88,stroke: #333
  style ui_components fill:#D8FAC8,stroke: #333
  
  style shared_hooks fill:#F1CFFE,stroke: #333
  style api_hooks fill:#F1CFFE,stroke: #333
  style dom_hooks fill:#F1CFFE,stroke: #333
  style analytics_hooks fill:#F1CFFE,stroke: #333
  style global_store fill:#F1CFFE,stroke: #333
  style etc_hooks fill:#F1CFFE,stroke: #333
  style api_client fill:#FCD6B6,stroke: #333
  style utils fill:#B3E5FA,stroke: #333
  style constants fill:#B3E5FA,stroke: #333

  style stateful_components fill:#FFF,stroke: #333
  style hooks_layer fill:#FFF,stroke: #333
  style shared_layer fill:#FFF,stroke: #333
  style api_layer fill:#FFF,stroke: #333
  style boundaries fill:#FFF,stroke: #333,stroke-width:2
  style bff fill:#FFF,stroke: #333
  style deps_dom_apis fill:#FFF,stroke: #333
  style deps_analytics fill:#FFF,stroke: #333
  style deps_others fill:#FFF,stroke: #333
  
  %% start: components & connections
  subgraph app ["React Application (Frontend)"];
    direction TB

    subgraph stateful_components ["① fa:fa-building <b>Stateful Components</b>"]
      route_components
      business_components
    end
    ui_components
    
    route_components --> business_components
    business_components --> ui_components
    route_components -.-> ui_components
 
    subgraph hooks_layer ["③ fa:fa-network-wired <b>Hooks</b> layer"];
      direction TB
      global_store
      api_hooks
      shared_hooks
      analytics_hooks
      dom_hooks
      etc_hooks

      shared_hooks --> api_hooks
      shared_hooks -.-> dom_hooks
      shared_hooks -.-> analytics_hooks
      shared_hooks -.-> etc_hooks
      %% mermaid will mess up the whole chart when uncommenting following, but it's required
      %% api_hooks -. ResponseDTO .-> shared_hooks
    end
    stateful_components ----> shared_hooks

    subgraph shared_layer ["⑤ fa:fa-wrench <b>Shared</b> layer (Accessible by all layers)"];
      direction TB
      utils
      constants
    end

    subgraph api_layer ["④ fa:fa-wifi <b>API</b> layer"];
      api_client
    end
    api_hooks --> api_layer
    %% api_client -. "Response" .-> api_hooks

  end
  
  subgraph boundaries ["Boundaries"];
    bff
    deps_dom_apis
    deps_analytics
    deps_others(........)
  end
  
  api_layer -. "HTTP" .-> bff
  dom_hooks -.-> deps_dom_apis
  analytics_hooks -.-> deps_analytics 
  etc_hooks -.-> deps_others
```

与一些[更早版本的React架构][react-unit-testing-best-practices]相比，React 16之后的Hooks基本上接管了所有副作用以及逻辑处理的代码，包括原来的状态管理（[Redux action/reducer][redux]那一套）、副作用（[redux-thunk][]、[redux-saga][]等）等。除此之外，上面这版架构里有一些变化值得强调：

* 不强求对业务组件⑦中再细拆“容器组件”与“展示型组件”¹。除了UI组件②之外的React组件（⑦以及可能有的⑥），统一归为①中的“有状态组件”。
* UI组件②这里特指通用型的UI组件，如[MUI][]、[Ant Design][antd]等或者项目自己封装的UI组件库，而不包含有业务含义的“展示型组件”（指不调用React Hooks、纯纯接受props并渲染UI的组件）。
* 由于本文采用的例子应用了React Query，它本身是个hooks的形式，因此上面的“API适配层”在此图中体现为⑨的API Hooks组件，归并在③的“Hooks层”中，返回一个包装后的`ResponseDTO`（未在上图中体现出~~因为mermaid画图的限制~~）。DTO中可能承载一些领域、对象逻辑。

整个应用间的测试策略、乃至于整个架构（进程间）的测试策略（上图中与Boundaries交互的部分），我放到这篇文章[React系列（五）：React整体测试策略][series-6-react-testing-strategy-best-practice]来阐述。本篇的后续部分，我们重点来谈谈“如何测试UI组件”这部分的最佳实践。

## React组件单元测试最佳实践

[有些观点][react-unit-testing-best-practices]（没错，就是我上一版推荐的React测试策略）认为对于React组件（也就是上图中的⑦业务组件和②UI组件）的测试，应该是尽可能拆分出有状态组件（容器组件）和无状态组件（展示型组件），保持接缝简单，然后分而治之：对于无状态组件可以测测它的分支渲染逻辑、甚至断言一些DOM文本等；对于有状态组件则建议不做测试，因为较为麻烦。

这个思路不能说是毫无道理，但是实践下来会遇到一些问题和痛点：

* **不太支撑更大范围的重构**。比如在进行提炼组件（Extract Component）、提炼Hooks（Extract Hooks）等常见的重构时，组件往往由于接口（props）变化而使得单元测试失败，哪怕实际业务功能并未变化。
* **实际保护作用有限**。实践中的接缝很难如设想的“尽量保持简单”，很多逻辑会溜进去——尤其是React Hooks面世之后——不测试这部分逻辑常常导致测试带来的信心不足、不敢重构。
* **对于遗留项目补测试不友好**。遗留项目往往意味着组件设计也不良好，会有很多的props和依赖，对单一的组件做单元测试难以入手、需要很多精力去mock不必要的内部依赖。

为了解决这些痛点，在这版新的测试策略中，我们的新建议是：**不要隔离Hooks层（③）对组件层（⑦或②）中的单一组件做单元测试。应该从一个相对顶层的业务组件入手（建议是⑥的路由/页面组件，如有），仅mock掉与HTTP/API交互的部分（④或⑪），将其他内部实现（③的Hooks层、⑤的共享层等）纳入测试范围**。这意味着，涉及领域逻辑的Hooks（③/⑧）、全局数据管理的Hooks⑩，甚至业务组件⑦中的逻辑都会被视为内部实现，不对其进行mock处理。

**也即是说，对组件的单元测试，从顶层的业务组件⑥或⑦开始，然后覆盖整个应用进程内所有的层级和组件——也即是上图虚线框中的部分²**。

## 测试架构、代码落地

接下来我们将用一个简化的例子来展示组件的单元测试怎么来写。假设以下是我们拿到的一个新的故事卡（Story，敏捷中常用的需求管理方式），它有如下的AC（验收条件，即要做的需求）需要开发。

> LOTEL-1
> 
> **作为**用户，**我希望**能搜索城市所在地的酒店信息，**以便**我有效地根据旅游行程安排我的住宿。
>
> **In Scope（需要做的需求）**
> * 搜索主页：支持通过热门城市搜索酒店
> * 显示酒店搜索列表及信息
> 
> **Out of Scope（不需要做的需求）**
> * 酒店详情页 - 故事卡LOTEL-2会做
> * 酒店预订下单 - 故事卡LOTEL-3做
> * 根据热门景点/商圈快速搜索酒店 - 故事卡LOTEL-4做
> * 高级筛选 - MVP之后做
> 
> **Acceptance Criteria（验收标准）**
> 
> AC1. **当**用户访问系统主页时，**应该**能看到一个搜索框，支持按照目的地城市、入住时间段和入住人数搜索可入住酒店
> * **当**用户点击目的地城市时，**应该**能看到目前仅支持的可选城市为：北京、上海、广州、深圳、成都、重庆、杭州、武汉。
> * **当**用户首次访问主页时，**应该**能看到各字段的默认值（以便他们能快速进入AC3的搜索流程）：目的地城市：北京。入住时间段：当天-明天。入住人数：1。
>
> AC2. **当**用访问系统主页时，**应该**能修改入住信息
> * **当**用户修改入住时间时，**应该**能看到系统帮用户自动提示入住天数。例子：2024-01-01 - 2024-01-03将显示“2晚”
>
> AC3. **基于**AC1或AC2，**当**用户点击“搜索”按钮时，**应该**能在查询成功后看到符合条件的可选酒店列表。
> * 酒店列表应该包含如下信息：酒店名、地址、图片、距离、所有房型最低价、点评数、用户评分、星级等。
> * 点评数小于100时统一显示“≤100条评论”。
> * 点评数大于1000时应显示千分位分隔符（逗号），如“1,478条评论”。

<p align="center" >
  <img 
    src="https://cdn.jsdelivr.net/gh/EthanLin-TWer/blog@gh-pages/_images/2023-12-10-demo.gif" 
    width="940"
  />
</p>

让我们一个一个AC来看看它们对应的实现以及最主要的测试代码。

### 场景（一）：静态页面测试

AC1是最简单的，就是实现一个静态的表单。考虑到“目的地城市”信息在未来大概会扩展并从后端获取（以及本文展开需要😂），我们把它放到一个hooks中，将来接入API时可以只替换hook这部分的逻辑。最后的成品代码应该大致如下所示：

```text
.
├── business-components
│   └── hotel-search/HotelSearchComponent.tsx
├── ui-components
│   ├── Counter/Counter.tsx
│   ├── DateRangePicker/DateRangePicker.tsx
│   └── SearchDropdown/SearchDropdown.tsx
├── hooks
│   └── api
│       ├── dto
│       │   └── city.dto.ts
│       └── useHotels.ts
├── api-client
│   ├── hotels
│   │   └── response.types.ts
│   └── index.ts
├── routes
│   ├── __tests__
│   └── HotelSearch.tsx
└── app-routes.tsx
```

*business-components/hotel-search/HotelSearchComponent.tsx*
```tsx
export const HotelSearchComponent = () => {
  const recommendationCities = useRecommendationCities()

  return (
    <div>
      <SearchDropdown label="目的地/酒店名称" options={recommendationCities} testId="destination" />

      <DateRangePicker startLabel="入住时间" endLabel="退房时间" testId="checkin-period" />
      <Counter label="入住人数" min={1} defaultValue={1} testId="occupancy" />
      <Button variant="contained" data-testid="search">
        Search
      </Button>
    </div>
  )
}
```

Hooks和DTO的转换，目前还没什么逻辑，我们暂时不深入细看。按照我们在“React UI组件测试最佳实践”一节中介绍的测试策略，我们的测试从作为路由入口的`HotelSearch`开始。整个成品测试最后会长这个样子：

*routes/\_\_tests\_\_/HotelSearch.spec.tsx*
```tsx
...
import { getDestinationField, ... } from './business-testers/hotel-search.tester'
import { SearchDropdownTester } from './component-testers/search-dropdown.tester'

describe('search hotels - entry', () => {
  it('should render a search box that supports searching available hotels by destination, check-in period and number of occupancy', async () => {
    renderRouteComponent(<HotelSearch />)
    const destinationField: SearchDropdownTester = getDestinationField()

    expect(destinationField.getLabel()).toBe('目的地/酒店名称')
    expect(await destinationField.getOptions()).toEqual([
      '北京', '上海', '广州', '深圳', '成都', '重庆', '杭州', '武汉'
    ])

    expect(getCheckinPeriodField().getStartLabel()).toBe('入住时间')
    expect(getCheckinPeriodField().getEndLabel()).toBe('退房时间')

    expect(getOccupancyField().getLabel()).toBe('入住人数')
    expect(getSearchButton().getValue()).toBe('Search')
  })
})
```

怎么样，第一感有没有觉得这个测试相当可读、基本就是需求（AC1）和UI的代码化表达？这是我想表达的好测试的重要一点：**表达力强**。这个强表达力，一方面在于充分利用好describe/it描述等文本工具，一方面也在于我们精心分层并封装的business tester / component tester极富表达力，使我们得以尽量按照需求和UI的描述方式来进行断言。

`renderRouteComponent()`方法中封装了一些Provider，负责把react-router、React Hooks以及redux等设施，没啥重要的逻辑，这里就不细展开了。感兴趣的读者可以前往[代码仓库][github-code-examples]一睹源码。

下面让我们展开business tester和component tester这部分的代码细节，来看看在上面这个测试中被封装的部分。**Business tester**很简单，其实就是对component tester的简单封装。

*routes/\_\_tests\_\_/business-testers/hotel-search.tester.ts*
```ts
import { CounterTester, findCounter } from '../component-testers/counter.tester'
...

export const getDestinationField = (): SearchDropdownTester => {
  return findSearchDropdown('destination')
}

export const getCheckinPeriodField = (): DateRangePickerTester => {
  return findDateRangePicker('checkin-period')
}

export const getOccupancyField = (): CounterTester => {
  return findCounter('occupancy')
}

export const getSearchButton = () => {
  return findButton('search')
}
```

这一层的主要作用是为上层测试提供一个业务视角的API，并屏蔽test id、tester等细节，提升上层测试的抽象层次以及可读性。同时，这一层的存在也使得编写上层测试变得更加轻松了：你只需要将待测试的业务点“翻译”成英文，然后一路通过TypeScript的类型提示自动输入到底就行，极大提升了开发者体验。

<p align="center" >
  <img 
    src="https://cdn.jsdelivr.net/gh/EthanLin-TWer/blog@gh-pages/_images/2023-12-10-dx.gif" 
    width="928"
  />
</p>

**Component Tester**，顾名思义封装的就是一个UI组件（component）。注意我们这里说的UI组件是指通用组件库或设计系统（比如MUI、AntD等）的UI组件，而不是业务上的“纯UI”组件，因为通用的UI组件库才可能提供足够通用的`Tester`接口。下面以上面business tester中用到的`SearchDropdownTester`为例子来看看这层的代码。

*routes/\_\_tests\_\_/component-testers/search-dropdown.tester.ts*
```ts
...
import { findFirstChildren } from './_base.tester'

export interface SearchDropdownTester {
  getLabel(): string
  getOptions(): Promise<string[]>
}

export const findSearchDropdown = (testId: string): SearchDropdownTester => {
  // implementation details
  const getElement = () => screen.getByTestId(testId)
  const getDropdownWrapperElement = () => findFirstChildren(getElement(), 'div')!
  const clickDropdown = async () => {
    await userEvent.click(getDropdownWrapperElement())
  }

  // public interfaces
  const getLabel = () => screen.getByTestId(`${testId}-label`).textContent!
  const getOptions = async (): Promise<string[]> => {
    await clickDropdown() // to open the dropdown so the options would appear in DOM
    const options = screen.getAllByRole('option').map(option => option.textContent || '')
    await clickDropdown() // to close the dropdown and resume dropdown to original state
    return options
  }
  
  return { getLabel, getOptions }
}
```

从上面的代码不难看出，这一层封装了许多操作UI的细节（比如上图的`getLabel()`方法实现、以及我们是通过RTL这样的库来操作DOM等），然后对外暴露一个非常通用的接口以查询组件的状态（比如获取该搜索下拉框的label值、所有可选值等），而非暴露许多实现细节（比如读者可能留意到了`getElement()`这样的方法并没有被作为Tester接口暴露出去），这也是设计原则中“接口优于实现”的体现。这样做可以让上层的调用变得非常简单、且无需关注过多的无关的细节（对比一下“无效的自动化测试”一节中的样例），进而让编写测试的心智负担大大降低，并大幅度地提升开发体验。

这一层主要有两个作用。

首先，它同样地为上层提供一个UI视角的API。比如，相比于直接在测试中操作React testing library去找到下拉框的wrapper并点击、选中所有role是option的元素并抽取文本……等等操作，上层测试得以用`.getOptions()`这样简单的API就可以拿到测试需要的数据，既大大提升了测试可读性，也使得这些行为很容易可以在测试之间被复用（再次对比一下“无效的自动化测试”一节中的样例）。

其次，这一层还天然地隔离了UI库和selector库的变化：如果未来应用更换了设计系统或UI组件库，那么只有这一层的tester需要更新，测试的其他层次并不会受到影响。同样地，如果未来的某一天出现了RTL更好的selector工具，那么相关的变化也只会被限制在这一层，大大提升了测试架构的稳定性和扩展性。真实的事迹，就发生在笔者过去的金融项目上：当时我们封装的这一层component tester是2019年之前，RTL尚未面世，项目上这一层是使用jQuery实现的。而在2023年的今天，这一层的存在就能让我们以更小的代价迁移到更好的RTL上。

至此，一个简单的组件测试雏形就出来了。麻雀虽小，但是五脏聚全，我们能看到它遵循的分层架构符合下图：

```mermaid
flowchart TB
  page_tests("<b>fa:fa-file-alt Page Tests</b><br/>API mocks + fixture")
  business_testers("<b>fa:fa-cogs Business Testers</b>") 
  component_testers("<b>fa:fa-cog Component Testers</b>")
        
  page_tests --> business_testers --> component_testers
  
  style page_tests fill:#B3E5FA
  style business_testers fill:#F1CFFE
  style component_testers fill:#FCD6B6
```

[完整的代码变更可以参考Github这几个提交](https://github.com/EthanLin-TWer/react-testing-strategy/compare/fd5ce087...7cb3d327)

#### 新增测试

同样，表单字段默认值的功能也很容易添加测试。我们在原来的测试上新增一个`it()`块即可——business tester无需改动、component tester需要新增几个拿组件值的方法。

*routes/\_\_tests\_\_/HotelSearch.spec.tsx*
```tsx
describe('search hotels - entry', () => {
  it('should render a search box ...', async () => { ... });
  
  it('searching fields should have default values (so we give user an example, allowing them to navigate to the search result page asap)', async () => {
    renderRouteComponent(<HotelSearch />)

    expect(getDestinationField().getValue()).toBe('北京')
    expect(getCheckinPeriodField().getDisplayText()).toBe('2024/01/15 -- 1晚 -- 2024/01/16')
    expect(getOccupancyField().getValue()).toBe(1)
  })
})
```

*routes/\_\_tests\_\_/component-testers/search-dropdown.tester.ts*
```ts
...

export interface SearchDropdownTester {
  ...
  getValue(): string
}

export const findSearchDropdown = (testId: string): SearchDropdownTester => {
  ...
  // public interfaces
  ...
  const getValue = () => screen.getByTestId(`${testId}-input`).getAttribute('value')!
  
  return { ..., getValue }
}
```

这里，也希望读者留意一下测试的粒度。上面两个场景，我们把它们放到一个测试里面也不是不行，但是通过把测试的粒度拆小，我们既能让测试描述更好地描述业务场景、留存业务上下文，也能让单个测试的重点突出、避免过长的测试，从而提高可读性和可维护性。这样当测试失败时，你就能马上知道被影响的业务场景是什么。

### 场景（二）：用户交互

AC1只是一个简单的静态页面，并不困难，接下来我们来看一个更常用的场景：用户与UI交互并产生一些修改。也就是AC2中，用户编辑入住信息的场景。

在真实的业务场景中，我们往往需要存储一些中间状态——也就是这里的用户入住查询信息。在这个例子中，我们将暂时使用state来存储用户的修改。先从“用户可以编辑目的地”开始，最终，我们会改动到的主要实现将如下所示（[完整的代码变更可以参考Github这个提交](https://github.com/EthanLin-TWer/react-testing-strategy/commit/3c303f7be7edd46af12f651f703421363410039e)）：

```text
.
├── business-components
│   └── hotel-search/HotelSearchComponent.tsx
├── ui-components
│   └── SearchDropdown/SearchDropdown.tsx
├── hooks
│   └── api
│       ├── dto
│       │   └── city.dto.ts
│       └── useHotels.ts
├── routes
│   └── __tests__/HotelSearch.spec.tsx
└── app-routes.tsx
```

*business-components/hotel-search/HotelSearchComponent.tsx*
```tsx
export const HotelSearchComponent = () => {
  const recommendationCities = useRecommendationCities()
  
  const defaultedAsChinaCapital = recommendationCities.findByName('北京')!
  const [city, setCity] = useState(defaultedAsChinaCapital)
  const onDestinationChanged = (cityName: string) => {
    const cityFound = recommendationCities.findByName(cityName)
    if (cityFound) {
      setCity(cityFound!)
    }
  }

  return (
    ...
      <SearchDropdown
        label="目的地/酒店名称"
        options={recommendationCities.getNames()}
        defaultValue={defaultedAsChinaCapital.name}
        onChange={onDestinationChanged}
        testId="destination"
      />
    ...
  )
}
```

DTO这层做的事情，一是将API层返回的`Response`包装一下成为前端可用的`DTO`对象，二是可以将一些逻辑（这也得益于前面做的这层转换）。这些逻辑难以说是不是“领域逻辑”，有时候就是一些“普通”的逻辑（比如下面的从列表中根据名字找到`city`），但反正从面向对象的角度看非常适合放到这里。这一层我理解其实也是[Modularizing React Applications with Established UI Patterns这篇文章][Modularizing React Applications with Established UI Patterns]中提到的Domain层。

这层其实也挺有意思的，但是限于篇幅及不是重点，这里暂且不进一步展开了。直接看代码：

*hooks/api/dto/city.dto.ts*
```ts
import { CityResponse } from '../response/hotels.response'

export interface CityDTO {
  id: string
  name: string
}

export interface CitiesDTO {
  data: CityDTO[]
  getNames(): string[]
  findByName(name: string): CityDTO | undefined
}

// for entity DTO, spread the data (to support direct access) and add behaviors here
const toCityDTO = (city: CityResponse): CityDTO => {
  return { ...city }
}

// for collections DTO, expose `data` props for the collection DTO, and add behaviors here
export const toCitiesDTO = (cities: CityResponse[]): CitiesDTO => {
  const data: CityDTO[] = cities.map(toCityDTO)
  const getNames = () => cities.map((city) => city.name)
  const findByName = (name: string) => data.find((city) => city.name === name)

  return { data, getNames, findByName }
}
```

*hooks/api/useHotel.ts*
```ts
export const useRecommendationCities = (): CitiesDTO => {
  const hardcodedCityForNow: CityResponse[] = [{ id: 'BJ', name: '北京' }, ...]
  return toCitiesDTO(hardcodedCityForNow)
}
```

测试代码也非常简单，基本就是抄抄抄：business tester已经有了，不用新增；component tester层，`SearchDropdownTester`的`select()`方法似乎还未实现，需要实现一下。除此之外，就是“翻译”一下AC，直接抄一个`it()`块稍微修改，得到最终的测试（你也可以让ChatGPT来帮忙）：

*routes/\_\_tests\_\_/component-testers/search-dropdown.tester.ts*
```typescript
...
import { findFirstChildren, parseText, parseValue } from './_base.tester'

export interface SearchDropdownTester {
  ...
  select(value: string): Promise<void>
}

export const findSearchDropdown = (testId: string): SearchDropdownTester => {
  ...
  // public interfaces
  const getLabel = () => parseText(findFirstChildren(getElement(), 'label')!)
  const getValue = () => parseValue(getDropdownWrapperElement())
  const getOptions = async (): Promise<string[]> => {
    ...
    const options = optionElements.map(parseText)
    ...
  }

  const select = async (value: string) => {
    await userEvent.click(getDropdownWrapperElement())
    await userEvent.click(screen.getByRole('option', { name: value }))
  }

  return { ..., select }
}
```

细心的读者也许可以注意到，在这次修改里我们发现了一些重复的代码和模式，因此我们抽取了一些`parseText()`/`parseValue()`的方法来简化一下代码和操作。

同时，相比前两个测试，我们新增第三个测试的时候并不需要重新编写许多的代码。通常来说，business tester这层只要编写过一遍就可以一直复用，而component tester这一层随着项目的沉淀也应该越来越完善，为不同的组件编写测试的时候应该会发现组件基本的API和操作都已经可以直接复用了。

最后是最终的测试：

*routes/\_\_tests\_\_/HotelSearch.spec.tsx*
```tsx
describe('search hotels', () => {
  it('should render a search box ...', async () => { ... });

  it('searching fields should have default values ...', async () => { ... });

  describe('editing', () => {
    it('user should be able to edit searching destination', async () => {
      renderRouteComponent(<HotelSearch />)
      await getDestinationField().select('杭州')

      expect(getDestinationField().getValue()).toBe('杭州')
    })
  })
})
```

易如反掌！

在实际项目中，状态存储往往更加复杂、更加精密。组件内部的状态往往用state就可以解决，随着项目的发展，某些数据往往因为需要更广的可见性而需要搬移到[Context][react-context]、全局状态管理（如[Redux][redux]、[Mobx][mobx]等解决方案）上，某些数据也可能需要通过表单方案（如[React Hook Form][react-hook-form]等）来管理。重要的是，使用了什么数据方案对测试来说并不重要——读者可以看见React `useState`的实现并没有体现在以上的测试中——因为它仅仅是对应功能/业务的一种*实现手段*。实现手段是可以随时间变化的，而它的变化不应该成为测试失败的理由，或者至少其影响应该被局限在一个非常小的层内。

以上就是笔者在本文想提倡的，真正能够**支撑重构**的测试。我故意把所有的状态逻辑都堆积在`HomeSearchComponent`里，让它看起来很混乱——感兴趣的读者可以尝试用其他更接近于实际项目的数据方案（比如引入表单、提炼custom hooks）来重构这块“用户编辑”的功能，看看这种测试是不是能很好地支撑重构，有效保护核心的功能点。

编辑入住时间与入住人数的实现与测试大同小异，此处不再赘述，读者可以尝试自己实现一下哦。不管底下封装的许多分层和细节，最后出来的测试用例是非常赏心悦目的，基本就是AC的代码化描述，简明且有效。我还是不得不贴一下。

*routes/\_\_tests\_\_/HotelSearch.spec.tsx*
```tsx
describe('search hotels', () => {
  it('should render a search box ...', async () => { ... });

  it('searching fields should have default values ...', async () => { ... });

  describe('editing', () => {
    it('user should be able to edit searching destination', async () => { ... })

    it('user should be able to extend reservation time and see how many days of money they need to pay', async () => {
      renderRouteComponent(<HotelSearch />)

      await getCheckinPeriodField().selectStartDate('2024-01-18')
      await getCheckinPeriodField().selectEndDate('2024-01-23')

      expect(getCheckinPeriodField().getDisplayText()).toBe('2024/01/18 -- 5晚 -- 2024/01/23')
    })

    it('user should be able to increase no. of occupancies', async () => {
      renderRouteComponent(<HotelSearch />)

      await getOccupancyField().clickToIncrement()
      expect(getOccupancyField().getValue()).toBe(2)
    })

    it('user should be able to decrease no. of occupancies', async () => {
      renderRouteComponent(<HotelSearch />)
      
      await getOccupancyField().clickToIncrement()
      await getOccupancyField().clickToIncrement()
      await getOccupancyField().clickToDecrement()
      
      expect(getOccupancyField().getValue()).toBe(2)
    })
  })
})
```

### 场景（三）：路由跳转

接下来，让我们看看AC3的实现。这是个支撑用户进行搜索的功能：用户点击搜索时，系统将立即修改url参数并跳转到搜索页，同时发起后端的API请求并在完成后渲染结果。这其中，我们先来看看路由跳转的部分。实现和测试代码都相对直观：

*business-components/hotel-search/HotelSearchComponent.tsx*
```tsx
export const HotelSearchComponent = () => {
  const navigate = useNavigate()
  ...

  const onSearch = () => {
    const checkinDateString: string = format(checkinDate, 'yyyy-MM-dd')
    const checkoutDateString: string = format(checkoutDate, 'yyyy-MM-dd')

    navigate(
      `/hotels/list?city=${city.id}&checkinDate=${checkinDateString}&checkoutDate=${checkoutDateString}&noOfOccupancies=${noOfOccupancies}`
    )
  }

  return (
    ...
      <Button {...} onClick={onSearch}>
        Search
      </Button>
    ...
  )
}
```

*routes/\_\_tests\_\_/HotelSearch.spec.tsx*
```tsx
describe('search hotels', () => {
  it('should render a search box ...', async () => { ... });

  it('searching fields should have default values ...', async () => { ... });

  describe('editing', () => {})

  it('should navigate to hotel list page with searching criteria', async () => {
    renderRouteComponent(<HotelSearch />)

    await getDestinationField().select('杭州')
    await getCheckinPeriodField().selectStartDate('2024-01-20')
    await getCheckinPeriodField().selectEndDate('2024-01-28')
    await getOccupancyField().clickToIncrement()
    await getSearchButton().click()

    expect(window.location.pathname).toBe('/hotels/list')
    expect(window.location.search).toBe('?city=HZ&checkinDate=2024-01-20&checkoutDate=2024-01-28&noOfOccupancies=2')
  })
})
```

对于`HotelSearch`这个页面来说，它的边界就是处理好用户输入（比如根据城市找到城市id、转化日期格式等）并交给另一个页面去处理。因此上面的测试里，断言的是用户输入被正确地处理然后触发了路由跳转，这个测试就到此为止了。[完整的代码变更可以参考Github这个提交](https://github.com/EthanLin-TWer/react-testing-strategy/commit/d542305750d055596b359d9e2056b3c4d2c6b6f8)

下面，让我们来看看下一个页面——酒店列表`HotelList`——发生的事情。

### 场景（四）：Mock API返回

根据AC3的需求，用户通过query params跳转到酒店列表页后，我们应该首先发起一个API请求去加载满足条件的酒店列表，然后展示一些关键信息在页面上。这其中API是比较重要的部分，它位于前端架构的边界点，是测试策略需要处理的内容。

先来看一下功能实现部分：按照架构设计，我们使用`useSearchHotels()` hooks来完成API发送（例子里这一层使用了[React Query][react-query]），它封装了对API层（例子里这一层使用了[axios][]）的调用，并将API层返回的`Response`转换成为`DTO`。拿到结果后，系统会展示一个结果列表。

```text
.
├── __mocks__/axios.ts
├── api-client
│   ├── hotels
│   │   ├── hotels.ts
│   │   ├── request.types.ts
│   │   └── response.types.ts
│   └── index.ts
├── business-components
│   └── hotel-list/HotelListComponent.tsx
├── hooks
│   └── api
│       ├── dto/hotel.dto.ts
│       └── useHotels.ts
├── routes
│   ├── HotelList.tsx
│   └── __tests__
│       ├── HotelList.spec.tsx
│       ├── api-mocks/
│       ├── business-testers/
│       └── fixtures/
├── app-routes.tsx
└── index.tsx
```

> 🚧这里的<h3>需要更新下最终版。

*business-components/hotel-list/HotelListComponent.tsx*
```tsx
...
export const HotelListComponent: FC = () => {
  const [params] = useSearchParams()
  
  const { hotels, isLoading } = useSearchHotels({
    city: params.get('city')!,
    checkinDate: params.get('checkinDate')!,
    checkoutDate: params.get('checkoutDate')!,
    noOfOccupancies: Number(params.get('noOfOccupancies')!),
  })
  
  return (
    <div>
      <h3>Hotel List</h3>
      {hotels.map((hotel: HotelDTO) => (
        <HotelItem key={hotel.id} hotel={hotel} />
      ))}
    </div>
  )
}
```

*hooks/api/useHotels.ts*
```ts
...
export const useSearchHotels = (criteria: SearchCriteria) => {
  const query = useQuery<HotelResponse>({
    queryKey: ['hotels'],
    queryFn: () => getHotels(criteria),
  })
  const { data, isLoading } = query
  
  const hotels = data?.data?.map(toHotelDto) || []
  return { hotels, isLoading }
}
...
```

API层里头则是直接的转调API client。它的存在是为了将Http请求隔离出来，让这一层容易被替换、被mock。具体代码没啥特别的。

*api-client/hotels/hotels.ts*
```ts
import ApiClient from '../index'
import { SearchCriteria } from './request.types'
import { HotelResponse } from './response.types'

const apiClient = new ApiClient()
export const getHotels = (hotelSearchCriteria: SearchCriteria): Promise<HotelResponse> => {
  return apiClient.get('/hotels', hotelSearchCriteria)
}
```

实现代码的主体就是以上这些。而在我们进入具体的测试代码之前，先让我们来想一想涉及API的测试应该怎么编写：**是否应该真实地发起Http请求调用API**？如果不是，**单元测试的边界应该mock到哪里**？**测试应该测一些什么内容**？

首先来看第一个问题。回答很显然，我们不应该在单元测试中真实地发起Http请求调用。原因是进程外的Bff服务部分是不稳定的，它的响应response可能会变、影响测试结果和稳定性，而真实的网络请求也会拖慢测试的速度。对于API请求我们应该将其mock掉。

第二个问题是关于mock的边界。在笔者的两个真实项目上（以及这个例子中），我们选择mock掉的是架构图中的组件⑪、也即是Bff这一层。这既可以像本例子那样通过mock Http Client——这里是[axios][]——实现，也可以通过一些工具（如[nock]、[msw]等）直接拦截HTTP请求实现。

当然，这里选择mock到架构图中的组件④、也即是API层，我认为也是没问题的。因为理论上讲API layer也应该是非常薄的一层，从测试可读性、有效性和所需工时等方面应该差别都不大。对于笔者所在项目来说，由于应用一开始的架构分层并不是很清晰，因此测试直接也把④的API层拉通覆盖了，较为简单，利于遗留项目起步。但是在实践中，mock的边界我认为是可以在④和⑪之间视情况移动的。

最后的一个问题是关于测试应该断言一些什么内容。当我们把Http请求作为一个边界的时候，我们就只关于我们与边界的交互，而不关心边界外（Bff服务）自身的行为。因此，正确的测试策略应该是：

1. 断言我们调用了正确的API（这可以以确保接口处的交互从前端这一侧是正确的），并且：
2. 断言在mock的服务端返回结果下，前端应该发生正确的行为（在这里指应该正确地渲染酒店搜索结果）。

我们先来看第一个场景：API应该被正确的参数调用。这部分的测试是这样的：

*routes/\_\_tests\_\_/HotelList.spec.tsx*
```tsx
import axios from 'axios'

describe('hotels list', () => {
  describe('search result', () => {
    it('should call search endpoint with correct parameters: city id, check dates in yyyy-MM-dd, and no. of occupancies', () => {
      renderHotelList(
        <HotelList />,
        '/hotels/list?city=HZ&checkinDate=2024-01-20&checkoutDate=2024-01-28&noOfOccupancies=2'
      )

      expect(axios.get).toHaveBeenCalledWith('/hotels', {
        params: {
          checkinDate: '2024-01-20',
          checkoutDate: '2024-01-28',
          city: 'HZ',
          noOfOccupancies: 2,
        },
      })
    })
  })
})
```

这个测试的结构相当直观。值得注意的是断言的部分：大家可以看到，测试的就是axios有没有按照我们的期望，拿正确的参数去调用`GET /hotels`API。[具体的mock方法可以在这个提交里看到]()，不过这些细节不是测试的重点，我们就先隐去了。

#### API Mock DSL

接下来看看第二个场景：mock服务器返回，并断言前端应该正确地渲染酒店搜索结果。

*routes/\_\_tests\_\_/HotelList.spec.tsx*
```tsx
...
import { hotelMocks } from '../../mocks/responses/hotel.mock'
import { getHotelList } from './business-testers/hotel-list.tester'
import { HotelListPageDSL } from './api-mocks/hotel-list.dsl'
import { exampleTwoHotels, createHotel } from './fixtures/hotel.fixtures'

describe('hotels list', () => {
  let hotelListPageDSL: HotelListPageDSL
  
  describe('search result', () => {
    beforeEach(() => {
      // given
      hotelListPageDSL = new HotelListPageDSL()
      hotelListPageDSL.mockGetHotelListOnce(exampleTwoHotels)
    })

    afterEach(() => {
      hotelListPageDSL.reset()
    })

    it('should call search endpoint with correct parameters ...', () => { ... })

    it('should render available hotels once loaded with correct information:' +
      'hotel name, address, stars, user rating, number of user ratings and lowest price', () => {
      renderHotelList(
        <HotelList />,
        '/hotels/list?city=HZ&checkinDate=2024-01-20&checkoutDate=2024-01-28&noOfOccupancies=2'
      )

      expect(getHotelList()).toEqual([
        ['杭州栖湖轻奢酒店', '西湖湖滨商圈', '4星级', '用户评分：4.2', '930条点评', '￥198起'],
        ['杭州中山西子湖酒店', '西湖湖滨商圈', '5星级', '用户评分：4.7', '317条点评', '￥498起'],
      ])
    })
  })
})
```

断言部分是不是赏心悦目！仍然是遵循需求和AC的测试描述，并且准确地测试到了“API数据能够被正确地渲染到页面上”这个业务结果，没有令人费解的各种HTML、RTL、testid细节。正如我在这篇文章前后一直强调的，这种不关心实现细节的测试正是我们想要的能够支撑重构的测试。

同时，相比前面的测试，这个测试用例引入了几个新的元素，一个是`HotelListPageDSL`，一个是用于组织测试数据的fixture。fixture我们会在下一个场景里看到它的用处，这里读者暂时理解它就是把mock用的API数据从测试文件中抽走即可。我们先来看一下`HotelListPageDSL`：

*routes/\_\_tests\_\_/api-mocks/hotel-list.dsl.ts*
```tsx
import axios from 'axios'

import { HotelResponse } from '../../../api-client/hotels/response.types'
import { JestBasedDSL } from './base.dsl'

export class HotelListPageDSL extends JestBasedDSL {
  mockGetHotelListOnce(hotels: HotelResponse[]): HotelListPageDSL {
    axios.get = this.mockSuccessPagedResponseOnce(hotels, { itemsPerPage: 15 })
    return this;
  }
}
```

*routes/\_\_tests\_\_/api-mocks/base.dsl.ts*
```ts
interface BaseDSL {
  mockSuccessPagedResponseOnce<T>(pagedData: T[], config: { itemsPerPage: number }): any
  reset(): void
}

export class JestBasedDSL implements BaseDSL {
  reset() {
    jest.clearAllMocks()
  }

  mockSuccessPagedResponseOnce<T>(arrayOfData: T[], config: { itemsPerPage: number }) {
    return jest.fn().mockImplementationOnce(async () => ({
      data: {
        data: arrayOfData,
        totalPages: Math.ceil(arrayOfData.length / config.itemsPerPage),
        totalCounts: arrayOfData.length,
      },
    }))
  }
}
```

这套DSL的本质目的仍然是封装一些细节，让上层仍然能通过“翻译+点点点”的方式简单地编写（和抄）测试。在这个例子里可能感受不是特别明显，但在页面API调用较多的情况下，这样的写法能大大提升测试的清晰度。

当然，这套DSL的写法还是有点瑕疵的，这里我就不细展开了，如果读者有所发现请私信我。

#### 组织测试数据：fixture

让我们来看看最后的一两个需求点：“点评数小于100时统一显示“≤100条评论”。实现代码过于简单，我们就直奔测试了：

*routes/\_\_tests\_\_/HotelList.spec.tsx*
```tsx
...
import { hotelMocks } from '../../mocks/responses/hotel.mock'
import { ..., createHotel } from './fixtures/hotel.fixtures'

describe('hotels list', () => {
  let hotelListPageDSL: HotelListPageDSL
  
  describe('search result', () => {
    beforeEach(() => {
      hotelListPageDSL = new HotelListPageDSL()
      ...
    })

    afterEach(() => { ... })

    it('should call search endpoint with correct parameters ...', () => { ... })

    it('should render available hotels once loaded with correct information ...', () => { ... })

    it('should show "≤100 comments" when no. of user ratings are less than 100', async () => {
      hotelListPageDSL.mockGetHotelListOnce([
        createHotel(hotelMocks[9], { name: '杭州华辰国际饭店', noOfUserRatings: 96 }),
      ])

      renderHotelList(
        <HotelList />,
        '/hotels/list?city=HZ&checkinDate=2024-01-20&checkoutDate=2024-01-28&noOfOccupancies=2'
      )

      await waitFor(() => {
        expect(getHotelList()).toEqual([
          ['杭州华辰国际饭店', '西湖湖滨商圈', '4星级', '用户评分：4.5', '≤100条点评', '￥357起'],
        ])
      })
    })
  })
})
```

断言一如既往地优美。不过更重要的是，在这个测试中，我们就能看到fixture的作用了：那就是能让我们在测试中方便地定制测试数据——比如这里的`noOfUserRatings`。有朋友可能会好奇了：为什么要多此一举，而不是直接把`noOfUserRatings=96`直接改到`hotelsMocks[9]`里头呢？

原因主要是两个：
* 可以更好地突出对这个测试用例有关键影响的测试数据，有利于增强可读性，服务于留存业务上下文这个大目标
* 测试中借用的`.mock.ts`文件是服务于本地开发，而测试中的fixture需要对测试数据进行更灵活的修改。本质上它们是服务于不同的目的，变化频率不同，从架构上分开更加清晰。这也是我们要独立维护`mocks/**/*.mock.ts`和`fixtures/*.fixture.ts`的目的

随着测试的增加和演进，我们前面提到的测试架构可能会演进、细化成下图的样子：

```mermaid
flowchart TB
  %% definitions
  subgraph page_tests ["<b>fa:fa-file-alt Page Tests</b>"];
    hotel_search_page_test("hotel-search.spec.tsx")
    other_page_tests("[future-feature].spec.tsx")
    hotel_list_page_test("hotel-list.spec.tsx")
  end

  subgraph mocks_and_fixtures ["<b>fa:fa-tools DSL & Fixture</b>"];
    subgraph hotel_list_mocks_and_fixture ["hotel-list"]
      direction TB
      hotel_list_dsl_mock("hotel-list.dsl.ts")
      hotel_list_dsl_fixture("hotel-list.fixture.ts")
    end
  
    subgraph other_mocks_and_fixture ["[future-feature]"]
      direction TB
      other_dsl_mock("[future-feature].dsl.ts")
      other_fixture("[future-feature].fixture.ts")
    end
  end

  subgraph business_testers ["<b>fa:fa-cogs Business Testers</b>"];
    hotel_search_business_testers("hotel-search.tester.ts")
    hotel_list_business_testers("hotel-list.tester.ts")
    other_business_testers("[future-feature].tester.ts")
  end
        
  subgraph component_testers ["<b>fa:fa-cog Component Testers</b>"];
    direction TB
    text_input_tester("text-input.tester.ts")
    text_search_dropdown_tester("search-dropdown.tester.ts")
    text_date_picker_tester("date-range-picker.tester.ts")
    text_button_tester("button.tester.ts")
    text_x_tester("[future-component].tester.ts")
  end

  %% start: components & connections
  hotel_search_page_test ---> hotel_search_business_testers --> component_testers
  hotel_list_page_test --> hotel_list_business_testers --> component_testers
  hotel_list_page_test --> hotel_list_mocks_and_fixture
  other_page_tests -.-> other_business_testers --> component_testers
  other_page_tests -.-> hotel_list_mocks_and_fixture
  other_page_tests -.-> other_mocks_and_fixture
  hotel_list_dsl_mock --> hotel_list_dsl_fixture
  other_dsl_mock --> other_fixture

  %% styles - #D8FAC8 #A5EA88 #F1CFFE #B3E5FA #FCD6B6
  style page_tests fill:#FFF,stroke:#333
  style mocks_and_fixtures fill:#FFF,stroke:#333
  style hotel_list_mocks_and_fixture fill:#FFF,stroke:#333
  style other_mocks_and_fixture fill:#FFF,stroke:#333
  style business_testers fill:#FFF,stroke:#333
  style component_testers fill:#FFF,stroke:#333

  style hotel_search_page_test fill:#B3E5FA
  style hotel_list_page_test fill:#B3E5FA
  style other_page_tests fill:#B3E5FA

  style hotel_list_dsl_mock fill:#A5EA88
  style other_dsl_mock fill:#A5EA88

  style hotel_list_dsl_fixture fill:#D8FAC8
  style other_fixture fill:#D8FAC8

  style hotel_search_business_testers fill:#F1CFFE
  style hotel_list_business_testers fill:#F1CFFE
  style other_business_testers fill:#F1CFFE

  style text_input_tester fill:#FCD6B6
  style text_search_dropdown_tester fill:#FCD6B6
  style text_date_picker_tester fill:#FCD6B6
  style text_button_tester fill:#FCD6B6
  style text_x_tester fill:#FCD6B6
```

至此，我们就用一个具体的需求为例，介绍了这个单元测试策略的所有组成部分了。在实际的开发中，这个故事卡还有许多边界场景需要覆盖，比如“没有符合条件的搜索结果”、“API出错”等等。有了这套测试架子，对这些场景进行完整测试并不困难。随着项目测试架子沉淀和团队成员熟悉程度提升，在前端多数领域实施TDD也是完全可行的。这也回到了我对企业级软件开发的提倡：

**没有失败的测试不写代码。有需求则必有有效的自动化测试覆盖**。

最后的最后，让我们看一下应用了这套测试策略的demo项目最终的100%测试覆盖率报告和测试描述，印证一下我们搭建这套测试架子的目标：支撑重构、留存业务上下文。

![](https://cdn.jsdelivr.net/gh/EthanLin-TWer/blog@gh-pages/_images/2023-12-20-100-percent-coverage.gif)

![](https://cdn.jsdelivr.net/gh/EthanLin-TWer/blog@gh-pages/_images/2023-12-20-test-suites.gif)

赏心悦目！**100%有效的测试覆盖率**！

## 总结：好处与挑战

最后，让我们来回顾一下本文推荐的测试策略及其内容。

对于一个常见的React应用架构，我们提倡React组件应该通过贯穿整个应用的单元测试来进行测试（架构图中的虚线框部分²），除了位于应用边界的后端或Bff（组件⑪或组件④）、DOM API等三方依赖之外，不应该mock其他内部实现细节。诸如Redux、单独的React Component、React Hooks这类技术实现，我们都视为实现细节，它们都不应该被mock。这样做，是为了服务**自动化测试应能有效支撑日常重构**的根本目的。

这样做能带来如下的好处：

* **有效支撑重构**。这也是我们整这套测试策略的根本目的：让日常的代码清理和重构成为可能。当我们重构内部实现时，测试能有效保障行为一致，不需要额外的改动和维护成本。搬移组件时再也不需要同时改动测试的props了，将组件内部数据和行为重构到React Hooks时也不需要再改变测试的mock了。
* **留存业务上下文**。在每个可能的细节里——比如测试描述、business tester API、声明式断言等——我们都在留存业务攸关的Why，而不仅仅是How和What。
* **维护成本低**。随着项目沉淀积累，后续的测试编写应该越来越顺手，有效降低了测试代码的开发成本。
* **开发体验好**。有了business层和TypeScript的加持，基于已有的测试新增测试或修改非常直观，可以最大限度地依赖IDE的类型提示和自动补全。
* **对遗留项目友好**。这套测试策略只关注mock外部依赖的部分，而不关注内部实现——不管是架构、分层、遗留代码实现等等——这使得它在遗留项目上的导入成为可能。

同时，为了达到支撑重构的根本目标，我们也不可避免地在一般的“单元测试”上引入了许多元素和分层，这些要素也带来了新的挑战：

* **（一次性投入的）开发成本**。从零开始落地这套测试策略需要编写不少的代码（mock API、编写component tester等等），需要进行一些选型，还可能需要踩一些坑（未在本文体现😈欢迎电询作者），以让这套工具更加稳定可用。这是选型时需要考虑的因素。
* **调试难度增加**。尽管RTL已经有许多工具（如[`prettyDOM`][pretty-dom] [等][rtl-debugging]）来帮助调试Virtual DOM，但因为本策略覆盖了更多的组件，测试失败时需要排查的范围不一定仅限于组件层，因此这也从客观上增加了调试的成本。这对于项目新人来说可能尤其不那么友好，需要项目老人带一段时间。
* **定位问题的速度和能力有所降低**。这其实是上一点的引申结果，因为测试覆盖到的组件多了，因此相比mock掉React hooks、仅测UI层结果的测试而言定位问题的能力有所减弱。
* 其他。请见Q&A部分。

即便有这些挑战，我们仍然提倡通过这种方式来编写单元测试，是因为看重它**能有效支撑重构**的重要价值，而这一点在我经历过的前端项目和测试中尤其重要。这一点在本文中已经强调过很多次，希望读者在取用时能理解这个出发点及其取舍。

## Q & A

#### 本文与上一版的[《React单元测试策略及落地》][react-unit-testing-best-practices]相比有何变化？

[《React单元测试策略及落地》][react-unit-testing-best-practices]是我2018年在React Native项目上总结的测试策略，彼时React Hooks、RTL等都还未面世，软件架构和副作用管理仍在百家争鸣。以今天观点来看，本篇相比上一篇中的扬弃和修改如下：

首先上一篇讲的是整个React应用的测试策略，而这一篇笔墨着重在React前端的单元测试（组件测试）。限于本篇篇幅，完整的新测试策略会放到另外一篇文章[React系列（五）：React整体测试策略][series-6-react-testing-strategy-best-practice]里详述。

其次，两版单元测试策略最重要的区别在于对React组件的测试策略发生了变化。上一篇轻UI层的“单元”测试策略符合分层理论，但是在前端实践中感觉对重构不友好、未能有效保护功能和增强团队信心。我想这是因为“数据”、“副作用”本身并不构成一个前端应用足够稳定的“分层”，它跟UI关联比较深厚，而UI本身是易变的，这就导致组件和数据的频繁修改是不可避免的，对它们分开做单元测试就会导致测试的频繁不必要修改，从而破坏“有效支撑重构”的目的。因此，这也是本篇尝试从“支撑重构”的根本目的出发，强化对UI层的内容测试的出发点。

最后，作为我们对“有效支撑重构”这个根本目标的强调、以及这种组件单元测试实践落地的结果，上一篇中认为的测试应该“不包含逻辑”这一点需要做出相对的妥协——所谓相对，是因为我们同时尝试对测试分层、稳定化component tester这层的API来降低这些逻辑对测试稳定性带来的影响。

#### 这个组件测试策略覆盖的层如此之多，是否还能叫“单元测试”？

正如Thoughtworks的CTO徐昊在内部的开发者培训项目中所提及的，测试主要有两个用途，一个是负责发现问题，一个是负责定位问题。

发现问题的测试更多是从业务的角度出发，比如用户能不能将商品添加到购物车等，从形式上讲可能更多地体现为端到端测试、UI测试等。它的失败可以明确地反映某个业务场景不工作了，但往往不能很精确地汇报可能出问题的技术组件/分层所在。

定位问题的测试更多是从技术的角度出发，通过对系统进行合适的分层，对问题进行更好的隔离和测试，从形式上讲可能更多地体现为单元测试、集成测试等。它的失败可以帮助团队快速地定位是哪个层级除了问题，但往往不能很精确地与其可能引起失败的业务场景关联起来。

从定位问题的角度上看，本篇使用的测试策略确实不止覆盖了一个“单元”：从最上层的页面组件出发，它至少跨越了组件和Hooks两个层，从这个角度讲，它测试的确实不是一个很小很独立的单元。

但从依赖隔离的角度上看，这部分组件测试对外部依赖的定义是清晰的，就是React外的东西，比如网络请求、DOM API等，它又不像一般的端到端测试或UI测试一样会启动真实的浏览器环境，所以它的测试边界也并没有无限扩大。

最后从运行速度上看，这种测试虽然达不到单元测试毫秒级的极致速度，但也相差不大，在秒级的范围内，以笔者看并没有偏离作为单元测试可接受的速度范围——这有赖于RTL是基于JSDOM（虚拟DOM）的测试，并没有启动真实的浏览器。但最重要的是，我们通过把React Hooks包含到测试范围里来，获得了能够有效支撑重构的测试——这也是我们做自动化测试的一个重要（如果不是首要的）出发点。

总结来说，从形式上来讲，这种测试在依赖隔离和运行速度上讲仍然属于单元测试的范畴内，而从因为测试范围扩大而导致的定位问题有所减弱这方面讲，它又不那么像一个单元测试。但有趣的是，以往过于注重以组件为“单元”的测试，反而没有起到有效的支撑重构的效果。因此，笔者认为这种测试是不是称为单元测试并不是重点。重点是，我们以少量的运行速度为代价，收获了一个原本应该由少量（缓慢的）端到端测试才能提供的效果：支撑大范围的重构、更好地留存业务上下文、提升测试表达力。

#### 为什么不用类似MVVM的架构、然后只测是VM不测View(UI)呢？

这也涉及到软件架构的问题。我将在[React系列（五）：React应用软件架构][series-5-react-application-architecture]这篇文章里进行更深入的讨论。但这里简答一下，

简答一下就是，

#### 推荐以什么组件作为入口编写单元测试？

建议是路由/页面组件⑥。如果没有，从顶层的业务组件⑦开始也可以。

#### 跨页面或路由的功能应该如何测试？

简单的情况下，两个页面是通过url交互的，这种场景下就像本文所展示的那样，前一个页面就测试到路由发生变化为止，后一个页面就以url作为参数输入开始后续测试（如API加载等）。

更复杂的情况笔者当前项目上还没遇到，欢迎大家实践后来交流。

#### 单个测试文件内按业务功能组织还是按技术功能组织？

这个问题的难点是两种组织方式都有优点也都有缺点。

如果按照业务功能组织，写一个技术点的时候可能会跨好几个`describe`/文件，新增测试比较难以精确发现应该在哪一个或哪几个`describe`中新增测试，可能增加维护难度，也可能编写出一些重复的测试。好处是组织得好的话可读性会非常强，出错时挂的啥业务功能点也非常明确。

如果按照以技术功能点组织——技术功能点，就是比如表单validation是一个功能点、submit是一个功能点之类的——则容易很分散，看不出业务逻辑。好处是单一技术功能点应该在哪里新增`describe`似乎比较明确。

在上一个项目中，我们是按照业务功能来组织的，“不知道在哪里新增测试”的问题是靠团队经验硬趟的（单个测试文件有4000+行代码），但是问题还是存在的。目前笔者也没啥好答案。期待读者有更多思考，欢迎来讨论。

<details>
  <summary>另外还有一些不打算回答的问题……</summary>
  > 问题：为什么“组合逻辑”这部分不是放到Bff、而是让前端来自己处理这部分转换？<br/>（简答就是，似乎没有例子可以进行更深入讨论。另外前端完全没有逻辑也不符合经验。）
  >
  > 问题：从投入成本的角度考虑，[测试金字塔][testing-pyramid]建议我们是通过少量的端到端测试（发现问题的测试）搭配大量的单元和集成测试（定位问题的测试），来构建一个性价比最高的自动化测试体系。本篇推荐的测试策略是不是反其道而行之？<br/>（简答就是，有效优于成本。）
</details>

好了！这下真的结束了！撒花💐🌼🌸🌺🌹🌻🌷！感谢各位耐心阅读！

## 参考

* [Modularizing React Applications with Established UI Patterns][]
* [Presentational and Container Components][]
* [Vue应用单元测试策略与实践][jimmy-vue-unit-testing-best-practice]
* [An example of LLM prompting for programming][]

延伸阅读（全是现挖的坑还没填）：

* [React系列（三）：什么是好的自动化测试][series-3-what-makes-a-good-automation-test]
* [React系列（四）：Hooks最佳实践与面向对象][series-4-react-hooks-best-practices]
* [React系列（五）：React应用软件架构][series-5-react-application-architecture]
* [React系列（六）：React整体测试策略][series-6-react-testing-strategy-best-practice]

<details>
  <summary>🚧最后的最后还有些todolist，暂时干不动了……</summary>

* 🚧 添加一下“无效测试”的例子。还可以从`FFF.test.tsx`里找找例子
* 🚧 最后润色一下文章总体
  * 通读一遍
  * 缩小一下几个gif的大小不？一个动图5M有点夸张
  * 确保所有link都能访问
* 🚧 搞个TW特供版（有些内部有共识的内容可以简化）然后投稿博客大赛和洞见
* 🚧 润色一下React应用架构图：这颜色还得再精心调配下…… -- 征集下意见
* 🚧 把以下参考文章读一遍
  * Maintainable React: Refactoring to Clean Code
  * [testing pyramid](https://testingjavascript.com/)
  * [React Testing Guide](https://components.guide/react+typescript/testing)
  * [Kent's blog](https://kentcdodds.com)
* 🚧[Modularizing React Applications with Established UI Patterns][]说的一些内容待讨论：
  * view-model-data三层架构中，model和data有啥区别？model和view model有啥区别？
  * Domain是怎么抽出来的？怎么辨别domain逻辑？往DTO上放逻辑？
  * 实践中真能贯彻View Model的架构方式吗？
* 🚧问问邱大师：MF博客中代码片段高亮的部分是怎么做到的？
</details>

¹：React Hooks的出现使得这种较早时期的人为划分变得不必要了。详见[Presentational and Container Components][]。

²：正如“Mock API返回”一节所述，也可以不包含API层④。

[react-unit-testing-best-practices]: https://ethan.thoughtworkers.me/#/post/2018-07-13-react-unit-testing-strategy
[series-3-what-makes-a-good-automation-test]: https://ethan.thoughtworkers.me/#/post/2023-12-24-what-makes-a-good-automation-test
[series-4-react-hooks-best-practices]: https://ethan.thoughtworkers.me/#/post/2023-12-09-react-hooks-best-practices
[series-5-react-application-architecture]: https://ethan.thoughtworkers.me/#/post/2024-01-17-react-application-architecture
[series-6-react-testing-strategy-best-practice]: https://ethan.thoughtworkers.me/#/post/2023-12-25-react-testing-strategy-and-best-practices

[github-code-examples]: https://github.com/EthanLin-TWer/react-testing-strategy

[Modularizing React Applications with Established UI Patterns]: https://martinfowler.com/articles/modularizing-react-apps.html
[An example of LLM prompting for programming]: https://martinfowler.com/articles/2023-chatgpt-xu-hao.html
[Presentational and Container Components]: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
[testing-pyramid]: https://martinfowler.com/bliki/TestPyramid.html 
[jimmy-vue-unit-testing-best-practice]: https://blog.jimmylv.info/2018-09-19-vue-application-unit-test-strategy-and-practice-01-introduction

[react-context]: https://react.dev/learn/passing-data-deeply-with-context
[redux]: https://redux.js.org/
[redux-thunk]: https://github.com/reduxjs/redux-thunk
[redux-saga]: https://redux-saga.js.org/
[mobx]: https://mobx.js.org/README.html
[react-hook-form]: https://react-hook-form.com/
[react-query]: https://tanstack.com/query/v3/docs/react/overview
[axios]: https://axios-http.com/docs/intro
[nock]: https://github.com/nock/nock
[msw]: https://mswjs.io
[mui]: https://mui.com/
[antd]: https://ant.design/
[pretty-dom]: https://testing-library.com/docs/dom-testing-library/api-debugging/#prettydom
[rtl-debugging]: https://testing-library.com/docs/dom-testing-library/api-debugging/

[clear-architecture-is-a-prior-input-for-testing-strategy]: https://zhuanlan.zhihu.com/p/560276012
[why-layering-is-important-method-of-architecting]: https://w.i.p.com
