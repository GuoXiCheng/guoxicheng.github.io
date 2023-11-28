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

#### 简化复杂子系统的访问

当子系统变得复杂或者当需要简化子系统的一组接口时，外观模式可以用于提供一个简单的接口给外部客户端。这在涉及到复杂库、框架或API集合的情况下尤其有用。

```ts
// npm run code src/code/design-pattern/facade/simplify-access-to-complex-subsystems.ts

<!-- @include: @src/code/design-pattern/facade/simplify-access-to-complex-subsystems.ts -->
```

### 封装客户端和子系统的交互

在需要将客户端与子系统的直接交互隔离开时，外观可以作为一个中间层来保护子系统不受客户端的影响，同时也简化客户端对子系统的使用。 

```ts
// npm run code src/code/design-pattern/facade/encapsulate-client-and-subsystem-interactions.ts

<!-- @include: @src/code/design-pattern/facade/encapsulate-client-and-subsystem-interactions.ts -->
```

### 提供子系统的抽象层

当子系统的实现和客户端代码可能经常变化时，外观模式可以用来为子系统提供一个稳定的接口，隔离了子系统的实现细节和客户端的直接交互，从而减少系统的耦合度。 

```ts
// npm run code src/code/design-pattern/facade/provides-abstraction-layer-for-subsystem.ts

<!-- @include: @src/code/design-pattern/facade/provides-abstraction-layer-for-subsystem.ts -->
```

### 分层结构中的接口

在多层架构的应用程序中，外观模式可以用于定义系统中每一层的入口点，使得层与层之间的通信更加清晰和有序。

```ts
// npm run code src/code/design-pattern/facade/interfaces-in-hierarchical-structure.ts

<!-- @include: @src/code/design-pattern/facade/interfaces-in-hierarchical-structure.ts -->
```