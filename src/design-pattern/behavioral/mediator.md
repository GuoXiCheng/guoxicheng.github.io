# 中介者模式

## 核心思想

中介者模式迫使对象通过中介者进行通信，而不是直接相互引用，从而使其松散耦合，而且可以独立地改变它们之间的交互。

## 典型用例

### 聊天室

在聊天应用中，中介者可以充当消息传递的中心，控制和协调不同用户之间的消息交流。

在这个例子中，聊天室类是中介者，它管理所有的用户。每个用户都知道如何与中介者通信，发送消息时会通过中介者来间接发送给其他用户。这样，用户之间不直接通信，而是通过聊天室来协调，从而简化了对象间的交互。

```ts
// npm run code src/code/design-pattern/mediator/chat-room.ts

<!-- @include:@src/code/design-pattern/mediator/chat-room.ts -->
```

### UI控件交互

中介者模式可以用来协调UI控件的交互，将控件的交互逻辑集中到一个中介者对象中，而不是让控件直接彼此通信。这样，控件只与中介者通信，中介者负责处理所有控件间的交互，这有助于降低复杂UI中控件的耦合度。

```ts
// npm run code src/code/design-pattern/mediator/ui-control-interaction.ts

<!-- @include: @src/code/design-pattern/mediator/ui-control-interaction.ts -->
```

### 系统组件间通信

中介者模式可以有效简化复杂系统中组件间的直接交互，多个组件（如服务、管理器、数据库）之间的通信可以通过中介者来协调，以降低系统各部分之间的耦合度。

```ts
// npm run code src/code/design-pattern/mediator/communication-between-system-components.ts

<!-- @include: @src/code/design-pattern/mediator/communication-between-system-components.ts -->
```

### 飞机航班控制

中介者模式可以用来协调多架飞机的路径和起降，每架飞机通过中介者来请求降落或通报位置，确保它们保持安全距离。

```ts
// npm run code src/code/design-pattern/mediator/aircraft-flight-control.ts

<!-- @include: @src/code/design-pattern/mediator/aircraft-flight-control.ts -->
```

### 智能家居系统

中介者模式应用于智能家居系统，可以有效地协调各种智能设备之间的交互。这样，各设备不需要直接相互通信，而是使用中介者进行交互，使得系统整体更加模块化和易于管理。

```ts
// npm run code src/code/design-pattern/mediator/smart-home-system.ts

<!-- @include: @src/code/design-pattern/mediator/smart-home-system.ts -->
```