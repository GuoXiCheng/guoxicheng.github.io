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