---
layout: post
category: 翻译
tags: JUnit 5, unit test
title:「译」 JUnit 5 系列：条件测试
---

> 原文地址：[http://blog.codefx.org/libraries/junit-5-conditions/](http://blog.codefx.org/libraries/junit-5-conditions/)
> 原文日期：, 2016  
> 译文首发：[ Linesh 的博客：「译」JUnit 5 系列：条件测试](http://blog.linesh.tw/#/posts/2016-09-17-junit5-conditions)  
> 我的 Github：[http://github.com/linesh-simplicity](http://github.com/linesh-simplicity)

We recently learned about JUnit’s new [extension model]() and how it allows us to inject customized behavior into the test engine. I left you with the promise to look at conditions. Let’s do that now!

Conditions allow us to define flexible criteria when tests should or shouldn’t be executed. Their official name is [Conditional Test Execution]().

## 概述

* [环境搭建][JUnit 5: Setup]
* [基础入门][JUnit 5: Basics]
* [架构体系][JUnit 5: Architecture]
* [扩展模型（Extension Model)][JUnit 5: Extension Model]
* [条件断言][JUnit 5: Conditions]
* 注入
* [动态测试][JUnit 5: Dynamic Tests]
* ...

（如果不喜欢看文章，你可以[戳这里看我的演讲](http://blog.codefx.org/past-talks/)，或者[看一下最近的 vJUG 讲座](https://www.youtube.com/watch?v=ct9sIsrnE9Y)，或者[我在 DevoxxPL 上的 PPT](https://www.youtube.com/watch?v=oG80XZUN1lQ)。

本系列文章都基于 Junit 5发布的先行版 [Milestone 2][User guide: M2]。它可能会有变化。如果有新的里程碑（milestone）版本发布，或者试用版正式发行时，我会再来更新这篇文章。

这里要介绍的多数知识你都可以在 [JUnit 5 用户指南][User guide: M2] 中找到（这个链接指向的是先行版 Milestone 2，想看的最新版本文档的话请戳[这里][User guide: Current]），并且指南还有更多的内容等待你发掘。下面的所有代码都可以在 [我的 Github](https://github.com/CodeFX-org/demo-junit-5) 上找到。

## 目录

* 条件测试关心的扩展点
* @Disabled 注解
* @DisabledOnOs
    * Simple Solution
    * Less Ceremony
    * Polishing
* @DisabledIfTestFails
    * Collect Exceptions
    * Disable
    * Putting It Together
* Summary
* Share & Follow

## 条件测试关心的扩展点

还记得 [拓展点][JUnit 5: Extension Model] 一节讲的内容吗？不记得了？好吧，简单来说，JUnit 5 中定义了许多扩展点，每个扩展点都对应一个接口。你自己的扩展可以实现其中的某些接口，然后通过 `@ExtendWith` 注解注册给 JUnit 即可。JUnit 会在特定的时间点调用你的接口实现。

要实现条件测试，你需要关注其中的两个扩展点： `ContainerExecutionCondition` 和 `TestExecutionCondition` 。

```java
public interface ContainerExecutionCondition extends Extension {
 
	/**
	 * Evaluate this condition for the supplied ContainerExtensionContext.
	 *
	 * An enabled result indicates that the container should be executed;
	 * whereas, a disabled result indicates that the container should not
	 * be executed.
	 *
	 * @param context the current ContainerExtensionContext; never null
	 * @return the result of evaluating this condition; never null
	 */
	ConditionEvaluationResult evaluate(ContainerExtensionContext context);
 
}
 
public interface TestExecutionCondition extends Extension {
 
	/**
	 * Evaluate this condition for the supplied TestExtensionContext.
	 *
	 * An enabled result indicates that the test should be executed;
	 * whereas, a disabled result indicates that the test should not
	 * be executed.
	 *
	 * @param context the current TestExtensionContext; never null
	 * @return the result of evaluating this condition; never null
	 */
	ConditionEvaluationResult evaluate(TestExtensionContext context);
 
}
```

`ContainerExecutionCondition`「译者注：容器执行条件」接口决定了容器中的测试是否会被执行。通常情况下，你使用 `@Test` 注解来标记测试，这种场景下测试所在的类就是容器。此时，单独的测试方法是否执行则是由 `TestExecutionCondition` 「译者注：测试执行条件」接口决定的。

（这里，我说的是“通常情况下”，因为其他 [测试引擎]() 可以自己对容器和测试有截然不同的定义。最常见的情形下，类就是容器，方法是测试。）

嗯，这就是条件测试的基本所有知识了。想实现条件测试，至少需要实现以上两个接口中的一个，并实现接口中的 `evalute` 方法，在里面执行自己的检查。

## @Disabled 注解

The easiest condition is one that is not even evaluated: We simply always disable the test if our hand-crafted annotation is present.

让我们来写一个 `@Disabled` 注解：

```java
@Target({ ElementType.TYPE, ElementType.METHOD })
@Retention(RetentionPolicy.RUNTIME)
@ExtendWith(@DisabledCondition.class)
public @interface Disabled { }
```

对应的扩展如下：

```java
public class DisabledCondition
		implements ContainerExecutionCondition, TestExecutionCondition {
 
	private static final ConditionEvaluationResult ENABLED =
			ConditionEvaluationResult.enabled("@Disabled is not present");
 
	@Override
	public ConditionEvaluationResult evaluate(
			ContainerExtensionContext context) {
		return evaluateIfAnnotated(context.getElement());
	}
 
	@Override
	public ConditionEvaluationResult evaluate(
			TestExtensionContext context) {
		return evaluateIfAnnotated(context.getElement());
	}
 
	private ConditionEvaluationResult evaluateIfAnnotated(
			Optional<AnnotatedElement> element) {
		Optional<Disabled> disabled = AnnotationUtils
				.findAnnotation(element, Disabled.class);
 
		if (disabled.isPresent())
			return ConditionEvaluationResult
					.disabled(element + " is @Disabled");
 
		return ENABLED;
	}

}
```

小菜一碟吧？在 JUnit [真实的产品代码]()中，`@Disabled` 也是这么[实现的]()，除了两个地方有一些细微的差别：

* The official annotation does not need to carry its own extension with it because it is registered by default.
* 官方注解可以接收一个参数，解释测试被忽略的理由。它会在测试被忽略时被记录下来

Small caveat (of course there’s one, what did you think?)： `AnnotationUtils` 是个内部API，but it is likely that its functionality will be [officially available soon]()。

接下来让我们写点更有意思的东西吧。

### @DisabledOnOs

也许有些测试我们只想在特定的操作系统上面运行。

#### 一种简单的方式

当然，我们还是从注解开始咯：

```java
@Target({ ElementType.TYPE, ElementType.METHOD })
@Retention(RetentionPolicy.RUNTIME)
@ExtendWith(OsCondition.class)
public @interface DisabledOnOs {
 
	OS[] value() default {};
 
}
```

这回注解需要接收一个或多个参数值了，你需要告诉它哪些操作系统是你想禁用测试的。 `OS` 是个枚举类，定义了每个操作系统的名字。同时，它还提供了一个静态的 `static OS determine()` 方法，你可能已经从名字猜到了，它会推断并返回你当前所用的操作系统。

现在我们可以着手实现 `OsCondition` 扩展类了。它必须检查两点：注解是否存在，以及当前操作系统是否存在于注解提供的禁用列表中。

```java
public class OsCondition 
		implements ContainerExecutionCondition, TestExecutionCondition {
 
	// both `evaluate` methods forward to `evaluateIfAnnotated` as above
 
	private ConditionEvaluationResult evaluateIfAnnotated(
			Optional<AnnotatedElement> element) {
		Optional<DisabledOnOs> disabled = AnnotationUtils
				.findAnnotation(element, DisabledOnOs.class);
 
		if (disabled.isPresent())
			return disabledIfOn(disabled.get().value());
 
		return ENABLED;
	}
 
	private ConditionEvaluationResult disabledIfOn(OS[] disabledOnOs) {
		OS os = OS.determine();
		if (Arrays.asList(disabledOnOs).contains(os))
			return ConditionEvaluationResult
					.disabled("Test is disabled on " + os + ".");
		else
			return ConditionEvaluationResult
					.enabled("Test is not disabled on " + os + ".");
	}

}
``` 

然后，使用的时候，只需要这样使用：

```java
@Test
@DisabledOnOs(OS.WINDOWS)
void doesNotRunOnWindows() {
    assertTrue(false);
}
```

棒。

### Less ceremony

但代码还可以写得更好！[JUnit 的注解是可组合的]()，基于这个前提我们可以让这个条件注解更易用：

```java
@TestExceptOnOs(OS.WINDOWS)
void doesNotRunOnWindowsEither() {
	assertTrue(false);
}
```

而实现 `@TestExceptionOnOs`  注解，如果能这样做就很好了：

```java
@Retention(RetentionPolicy.RUNTIME)
@Test
@DisabledOnOs(/* 通过某种方式取得注解下的 `value` 值 */)
public @interface TestExceptOnOs {
 
	OS[] value() default {};
 
}
```

测试实际运行时， `OsCondition::evaluateIfAnnotated` 方法中会扫描 `@DisabledOnOs` 注解的存在，然后我们的代码会进一步发现它又是对 `@TestExceptOnOs` 的注解。our logic would Just Work™。但我不知道如何在 `@DisabledOnOs` 注解中获取 `@TestExceptOnOs` 中提供的禁用操作系统列表值。:(（你能做到吗？）

次佳的选择是，简单地在 `@TestExceptOnOs` 注解上直接声明应用的扩展就可以了：

```java
@Retention(RetentionPolicy.RUNTIME)
@ExtendWith(OsCondition.class)
@Test
public @interface TestExceptOnOs {
 
	OS[] value() default {};
 
}
```

然后直接把 `OsCondition:evaluateIfAnnotated` 方法拉过来改改就是了：

```java
private ConditionEvaluationResult evaluateIfAnnotated(
        Optional<Annotatedelement> element) {
    Optional<DisabledOnOs> disabled = AnnotationUtils
        .findAnnotation(element, DisabledOnOs.class);
    if (disabled.isPresent()) 
        return disabledIfOn(disabled.get().value());
        
    Optional<TestExceptOnOs> testExcept = AnnotationUtils
        .findAnnotation(element, TestExceptOnOs.class);
    if (testExcept.isPresent()) 
        return disabledIfOn(testExcept.get().value());
            
    return ConditionEvaluationResult.enabled("");
}
```

收工。现在我们可以如期使用这个注解了。

### 润色代码

我们还需要创建一个意义刚好相反的注解（即现在变为，当前操作系统不在提供列表时，才禁用测试），工作是类似的，但是我们注解名会更表意，再加入静态导入后，我们的代码最终可以整理成这样：

```java
@TestOn(WINDOWS)
void doesNotRunOnWindoesEither() {
    assertTrue(false);
}
```

还挺好看的，是不？

![](http://7xqu8w.com1.z0.glb.clouddn.com/junit-5-conditions.jpg)

## `@DisabledIfTestFails` 

我们再考虑一种场景——我保证这次可以接触更有意思的东西！假设现在有许多（集成）测试，我们希望，如果其中的一个抛出了特定的异常并且失败了的话，其他测试也会一起挂掉。为了节省时间，我们希望这种情况下其他测试会直接被禁用掉。

那么我们需要做些什么工作呢？首先第一反应不难想到，我们 必须先能捕获测试执行过程抛出的异常。这肯定需要在一个测试类的生命周期中进行处理，否则就可能因为其他测试类中抛出的异常而影响到了本测试类的运行。其次，我们需要一个实现一个条件：它会检查某个特定的异常是否已被抛出过，若是，禁用当前测试。

### 异常收集

翻阅一下文档中提供的 [扩展点列表]()，不难发现有一项“异常处理”。看起来就是我们想要的东西：

```java
/**
 * TestExecutionExceptionHandler defines the API for Extensions that wish to react to thrown exceptions in tests.
 * 
 * [ ... ]
 */
public interface TestExecutionExceptionHandler extends ExtensionPoint { 
    /**
     * Handle the supplied throwable.
     * 
     * Implementors must perform one of the following.
     * 
     * - Swallow the supplied throwable, thereby preventing propagation
     * - Rethrow the incoming throwable as is 
     * - Throw a new exception, potenially wrapping the supplied throwable 
     *  
     * [ ... ]
     */
    void handleTestExecutionException(
        TestExtensionContext context, Throwable throwable) 
        throws Throwable;    
}
```

读完发现，我们的任务就是实现 `handleException` 方法，接收并重新抛出异常。

你可能还记得我提过的关于扩展点和无状态的一些结论：

> 引擎对扩展实例的初始化时间、实例的生存时间未作出任何规约和保证，因此，扩展必须是无状态的。如果一个扩展需要维持任何状态信息，那么它必须使用 JUnit 提供的一个仓库（store）来进行信息读取和写入。

看来我们是必须使用这个 store 了。store 其实就是存放我们希望保存的一些东西，一个带索引的资源集合。它可以在扩展上下文对象中取得，后者会被传给大多数扩展点接口方法作为参数。不过需要注意的是，每个不同的上下文对象都有自己一个独立的 store，所以我们还必须决定使用哪个 store。

我们有一个测试方法级的上下文对象（`TestExtensionContext`） 和一个测试类级别的上下文对象（`ContainerExtensionContext`）。还记得我们的需求吗？保存一个测试类中任何测试方法所抛出的异常，仅此而已。也即，我们不会保存其他测试类中抛出的异常。这样一来，容器级别的上下文 `ContainerExtensionContext` 其实刚好就是我们需要的了。

接下来，我们就可以使用这个容器上下文，通过它来存储所有测试过程抛出的异常了：

```java
private static final Namespece NAMESPACE = Namespace
    .of("org", "codefx", "CollectExceptions");
private static final String THROWN_EXCEPTIONS_KEY = "THROWN_EXCEPTION_KEY";

@SuppressWarnings("unchecked")
private static Set<Exception> getThrown(ExtensionContext context) {
    ExtensionContext containerContext = getAncestorContainerContext(context)
        .orElseThrow(IllegalStateException::new);
    retrun (Set<Exception>) containerContext
        .getStore(NAMESPACE)
        .getOrComputeIfAbsent(
            THROWN_EXCEPTIONS_KEY,
            ignoredKey -> new HashSet<>());
}

private static Optional<ExtensionContext> getAncestorContainerContext(
        ExtensionContext context) {
    Optional<ExtensionContext> containerContext = Optional.of(context);
    while (containerContext.isPresent()) 
            && !(containerContext.get() instanceof ContainerExtenstionContext)) 
        containerContext = containerContext.get().getParent();
    return containerContext;
}
```




---

[User guide: M2]: http://junit.org/junit5/docs/5.0.0-M2/user-guide/
[User guide: Current]: http://junit.org/junit5/docs/current/user-guide/
[JUnit 5: Setup]: http://blog.linesh.tw/#/posts/2016-09-17-junit5-setup
[JUnit 5: Basics]: http://blog.linesh.tw/#/posts/2016-09-17-junit5-basics
[JUnit 5: Architecture]: http://blog.linesh.tw/#/posts/2016-09-17-junit5-architecture
[JUnit 5: Extension Model]: http://blog.linesh.tw/#/posts/2016-09-17-junit5-extension-model
[JUnit 5: Conditions]: http://blog.linesh.tw/#/posts/2016-09-17-junit5-conditions
[JUnit 5: Injection]: http://blog.linesh.tw/#/posts/2016-09-17-junit5-injection
[JUnit 5: Dynamic Tests]: http://blog.linesh.tw/#/posts/2016-09-17-junit5-dynamic-tests
