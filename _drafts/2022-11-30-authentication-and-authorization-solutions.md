---
title: 认证方案与授权方案
category: authentication, authorization
---

## OAuth2 - 是一种标准

先定义名词：
1. third-party application：三方应用，希望获取user在resource provider中存储数据的人
2. resource provider：用户真实数据的维护地，比如微信、百度等平台。在服务时序图中这个人一般也叫resource service
3. identify provider / identify service：在服务时序图中这个人一般也叫authorization server。Auth0即是一个identity service。在一般实践中，identity provider是独立的服务，而resource provider一般也是大型应用或公司提供的平台，这样让互联网世界的数据集中在少数大公司手中，并通过独立的授权层来获得数据。每个平台可以自己实现自己的identity provider，也可以用公开的服务来做
4. user：数据的拥有者，一般即是resource provider的用户，也是third-party application的用户
5. oauth：特指OAuth 2.0协议，它和OAuth 1.0完全不兼容

这个步骤里头：
1. client server需要注册什么信息？app_id, client_id, client_secret?
2. resource provider如何校验client server传过来的token？应该还是要跟identity server去集成。OAuth是否指定了API或实现方案？
3. [x] identify server / authorization provider是不是同一个人？- 是
4. [resource provider（一般也是一个支持多种登录方式的platform，比如微信百度等）需要跟authorization provider做多少集成？对于一般的应用来说，我要支持让别人访问我的数据，难道我还得做个OAuth？这就是Platform能提供的功能了。](https://zq99299.github.io/note-book/oath2/01/05.html#%E6%9C%8D%E5%8A%A1%E5%B8%82%E5%9C%BA%E4%B8%AD%E7%9A%84%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BA%94%E7%94%A8%E8%BD%AF%E4%BB%B6)
    1. 需要在identity service注册，一般包括name, client_id, authorization callback url
    2. 需要实现authorization callback url：input是一个code，output是带上这个code+client_id去identity server请求一个token
    3. 需要实现get token API：接收前端的code，加上后端的client_id和client_secret，一起去identity service换一个token给前端
    4. 需要实现授权切面，支持：1）调用identity service验证token；2）从access token中获取授权信息，即用户权限信息
    5. identity service一般用买的，像Auth0。只不过Auth0除此以外还提供了用户信息管理等东西
5. [-] access token有什么约定俗成的format嘛？权限信息如何在access token中携带？
    * 一般可以是JWT token，也可以不是。只要#4.4.2中能获得授权信息即可。
    * 如何携带？[根据这里](https://zq99299.github.io/note-book/oath2/01/02.html#%E6%8B%93%E5%B1%95%E9%98%85%E8%AF%BB)，token中带的信息一般是`app_id+user_id`，可以通过解析（是否需要identity service参与？）拿到`user_id`，然后再进一步查询权限数据
      * scope是OAuth的东西吗？要identity service支持配置吗？是不是通过这个东西来看权限？那API权限都放到这个scope里？
6. client/server如何让access token和登录用户绑定？

highlight：

1. 用户未获得授权时，跳转的授权页面一定得是authorization provider服务提供的，不然不造假么
2. 用户在#1中授权后时，一般在这个页面会配置一个redirection url到client server，带一个code，这个code一般时效很短，10分钟左右过期；client server凭借这个code和提前申请的app_id，client_id等信息向identify server再申请一个access token/refresh token
3. 一般identify service会有类似Auth0这样的工具，你的服务要集成OAuth，就必须向它申请一个client_id之类的。但当然，你resource provider也可以实现自己的authorization server，只要你实现几个接口。
4. 现在看来，Serai的认证方案就是OpenID Connect，我们是拿id_token（一个JWT token）获取用户信息
5. 一些OAuth参数：
  * grant_type: AUTHORIZATION_CODE 表示使用授权码模式。
  * code: <授权码本身> 表示使用授权码模式。
  * client_id: <> resource provider提前在identify provider那里注册的id。一般每个服务都需要向identity service申请
  * client_secret: <授权码本身> 表示使用授权码模式。

## 授权方案：RBAC


## 问题

* [x] SAML和OAuth什么关系？答：SAML是10-15年前基于cookie的登录和SSO方案；OAuth是SPA和多客户端出来后用户认证和SSO的基础协议；（多客户端不支持浏览器cookie）另外还有类似Kerberos的方案，也比OAuth2复杂。
* [x] JWKS和OAuth什么关系？答：JWKS是OpenID Connect的实现方式，OIDC是OAuth的扩充协议
* [x] OIDC和OAuth什么关系？答：OAuth用于授权Authorization，OIDC用于认证Authentication。但OAuth是OIDC的底层协议，OIDC没法脱离OAuth存在。OIDC --> OAuth2 --> HTTPS
* 在OAuth2里，如果access token不能为前端所拿到，那么前端拿什么去调后端？client server如何校验access token？还是得通过identity server吧？
* Access token是否必须是JWT格式？答：OAuth协议未做强制，但建议用JWT。理由是：结构化数据、计算预先存入数据以节省多余的远程调用、无状态（缺点是不可撤回）
  * Serai的实现是拿到一个access token是JWT，前端只用到了里头的expiry字段来做refresh。然后后端会通过这个token拿到
* 做SSO有哪些方案？OIDC / OAuth / SAML / CAS

## Referencing 

* [](https://zq99299.github.io/note-book/oath2/01/)
* [](https://juejin.cn/post/7010636081305485319)
* [](https://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html)
* [](https://zhuanlan.zhihu.com/p/380561372)
* [](https://developer.okta.com/blog/2017/06/21/what-the-heck-is-oauth)
* [OAuth](https://oauth.net/articles/authentication/)
* [OAuth RFC](https://www.rfc-editor.org/rfc/rfc6749)
* SSO:
  * [](https://juejin.cn/post/6844904099926786061)
  * [](https://juejin.cn/post/6844903677447110663)

## To Read

* [](https://auth0.com/docs/secure/tokens/access-tokens/validate-access-tokens#learn-more)
* [](https://auth0.com/docs/secure/tokens/json-web-tokens/validate-json-web-tokens#third-party-libraries)
