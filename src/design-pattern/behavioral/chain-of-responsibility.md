# 责任链模式

## 核心思想

责任链模式允许将请求沿着一条链进行传递，直到有一个对象处理它为止。

## 典型用例

### 审批流程

在审批业务流程中，每个审批者可以决定批准、拒绝或将审批传递给更高级别的管理者。

在这个例子中，每个处理者都有自己的处理逻辑和批准权限。请求在责任链上逐级传递，直到找到合适的处理者。通过这种方式，可以灵活地增加、移除或重新排列处理者，而无需修改主要的业务逻辑。这样的设计使得审批流程更加灵活和可扩展。

```ts
// npm run code src/code/design-pattern/chain-of-responsibility/approval-process.ts

<!-- @include: @src/code/design-pattern/chain-of-responsibility/approval-process.ts -->
```

### 事件处理系统

在图形用户界面或游戏编程中，责任链模式常用于事件处理，例如：鼠标点击或键盘事件。

```ts
// npm run code src/code/design-pattern/chain-of-responsibility/event-processing-system.ts

<!-- @include: @src/code/design-pattern/chain-of-responsibility/event-processing-system.ts -->
```

### 日志记录

在日志记录系统中，可以根据日志的严重级别，将日志传递给不同的处理者。

```ts
// npm run code src/code/design-pattern/chain-of-responsibility/log-recording.ts

<!-- @include: @src/code/design-pattern/chain-of-responsibility/log-recording.ts -->
```

### 处理网络请求

在使用责任链模式处理网络请求时，会定义一个处理请求的接口，为每个处理阶段（如认证、缓存、数据处理）创建实现这个接口的类。每个处理者会决定是否要处理请求或将其传递给链上的下一个处理者。

```ts
// npm run code src/code/design-pattern/chain-of-responsibility/processing-network-requests.ts

<!-- @include: @src/code/design-pattern/chain-of-responsibility/processing-network-requests.ts -->
```

### 处理命令对象

责任链模式可以让命令对象在一系列处理者之间传递，每个处理者都会检查命令是否为其可以处理的类型，如果是，则处理该命令；如果不是，则将命令传递给链中的下一个处理者。

```ts
// npm run code src/code/design-pattern/chain-of-responsibility/process-command-object.ts

<!-- @include: @src/code/design-pattern/chain-of-responsibility/process-command-object.ts -->
```

### 数据处理管道

责任链模式可以创建一系列处理者，每个处理者负责数据流的一个特定阶段，如过滤、转换或验证。在这种模式下，数据被传递给第一个处理者，然后依次流经各个处理者，每个处理者对数据进行操作，然后将其传递给下一个处理者。

```ts
// npm run code src/code/design-pattern/chain-of-responsibility/data-processing-pipeline.ts

<!-- @include: @src/code/design-pattern/chain-of-responsibility/data-processing-pipeline.ts -->
```