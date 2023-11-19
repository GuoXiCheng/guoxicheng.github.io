# 命令模式

## 典型用例

### 撤销重做

命令模式可以用于实现撤销重做功能，每个执行的操作都是一个命令对象，可以被存储和恢复。

```ts
// npm run code src/code/design-pattern/command/undo-redo.ts

<!-- @include: @src/code/design-pattern/command/undo-redo.ts -->
```