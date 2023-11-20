# 外观模式

## 核心思想

外观模式提供了一个统一的接口来访问子系统中的一组接口。

## 典型用例

### 整合微服务接口

在微服务架构中，外观模式可以用来提供一个统一的接口来整合多个微服务，使得客户端不需要与每个服务单独交互。

在这个例子中，外观服务类提供了一个统一的接口来访问多个微服务接口。客户端代码通过与外观类来交互，而不是直接与每个微服务交互。

```ts
// npm run code src/code/design-pattern/facade/unify-microservices.ts

<!-- @include: @src/code/design-pattern/facade/unify-microservices.ts -->
```