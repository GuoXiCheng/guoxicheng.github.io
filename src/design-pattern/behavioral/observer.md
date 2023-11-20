# 观察者模式

## 核心思想

观察者模式允许一个对象将其状态的改变通知其他对象。

## 典型用例

### 发布订阅系统

在消息传递、事件总线或服务中，允许多个订阅者监听和响应由发布者发出的消息或事件。

在这个例子中，主题维护了一个观察者列表。观察者可以订阅主题并接收更新。当主题的 notify 方法被调用时，所有订阅的观察者都会收到消息。这种模式允许观察者和主题之间松耦合的交互，是实现事件处理和消息传递系统的有效方式。

```ts
// npm run code src/code/design-pattern/observer/publish-subscribe.ts

<!-- @include:@src/code/design-pattern/observer/publish-subscribe.ts -->
```