# 命令模式

## 核心思想

命令模式将请求封装为一个对象，将发出者和处理者解耦，并能延迟请求执行或放入队列中，实现可撤销操作。

## 典型用例

### 撤销重做

命令模式可以用于实现撤销重做功能，每个执行的操作都是一个命令对象，可以被存储和恢复。

在这个例子中，创建了一个简单的文本编辑器和一些命令来修改文本。CommandInvoker 类负责执行命令并维护历史记录，以便支持撤销和重做功能。这样可以灵活地添加新的命令类型，同时保持编辑器类的简洁性和命令的独立性。

```ts
// npm run code src/code/design-pattern/command/undo-redo.ts

<!-- @include: @src/code/design-pattern/command/undo-redo.ts -->
```

### 处理UI交互

在图形用户界面应用中，命令模式通常被用于处理如按钮点击、菜单选择等用户交互动作。通过将这些动作封装成命令对象，可以更灵活地处理用户输入，使代码更易于管理和扩展。

```ts
// npm run code src/code/design-pattern/command/handling-ui-interactions.ts

<!-- @include: @src/code/design-pattern/command/handling-ui-interactions.ts -->
```

### 异步任务和队列

命令模式可以用来管理异步任务和队列，非常适合用于处理多线程应用程序中的后台任务。可以通过封装任务为命令对象，并将它们放入一个队列中，然后在后台线程或异步操作中执行这些任务。

```ts
// npm run code src/code/design-pattern/command/asynchronous-queues.ts

<!-- @include: @src/code/design-pattern/command/asynchronous-queues.ts -->
```

### 日志和事务系统

命令模式可以用来记录每个操作的历史，适合用来实现日志和事务系统，并在需要时重放这些操作，对于实现撤销/重做功能、事务回滚功能特别有用。

```ts
// npm run code src/code/design-pattern/command/transaction-systems.ts

<!-- @include: @src/code/design-pattern/command/transaction-systems.ts -->
```

### 远程过程调用（RPC）

命令模式可以用于封装远程过程调用，使远程调用的细节对客户端透明。在这个例子中，命令对象充当了客户端和远程服务之间的中间层，它封装了远程调用的所有细节。

```ts
// npm run code src/code/design-pattern/command/remote-procedure-call.ts

<!-- @include: @src/code/design-pattern/command/remote-procedure-call.ts -->
```

### 宏命令

宏命令允许将多个命令封装成一个单一的命令，然后一次性执行这些命令。这在需要录制和重放一系列操作的场景（比如宏录制、批处理任务等）中非常有用。

```ts
// npm run code src/code/design-pattern/command/macrocommand.ts

<!-- @include: @src/code/design-pattern/command/macrocommand.ts -->
```