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

### GUI事件监听

观察者模式可以用来处理图形用户界面的事件监听，例如按钮点击、鼠标移动或键盘事件，当事件发生时，相关的监听器会被通知。

```ts
// npm run code src/code/design-pattern/observer/gui-event-listening.ts

<!-- @include: @src/code/design-pattern/observer/gui-event-listening.ts -->
```

### 更新数据模型

在MVC架构中，可以使用观察者模式，在模型数据改变时，通知所有订阅的视图，以便视图可以根据模型的最新状态更新自己。

```ts
// npm run code src/code/design-pattern/observer/model-view-controller.ts

<!-- @include: @src/code/design-pattern/observer/model-view-controller.ts -->
```

### 股票价格或游戏状态更新

观察者模式可以用来处理股票市场价格或在线游戏状态更新，这种模式特别适用于需要实时通知订阅者关于某种状态变化的场景。

```ts
// npm run code src/code/design-pattern/observer/price-or-status-update.ts

<!-- @include: @src/code/design-pattern/observer/price-or-status-update.ts -->
```

### 社交媒体更新

在社交媒体应用中，当用户的状态或关注的话题有更新时，可以使用观察者模式通知所有订阅的用户。

```ts
// npm run code src/code/design-pattern/observer/social-media-updates.ts

<!-- @include: @src/code/design-pattern/observer/social-media-updates.ts -->
```

### 处理传感器数据

在物联网（IoT）或智能家居系统中，传感器检测到的数据变化可以通知到依赖这些数据的系统或组件。 

```ts
// npm run code src/code/design-pattern/observer/sensor-data-processing.ts

<!-- @include: @src/code/design-pattern/observer/sensor-data-processing.ts -->
```