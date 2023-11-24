# 备忘录模式

## 核心思想

备忘录模式允许在不暴露对象实现细节的情况下保存和恢复对象之前的状态。

## 典型用例

### 存档和加载

在游戏开发中，备忘录模式可以用于保存游戏的当前状态（如角色位置、分数、物品等），并在需要时加载这些状态。

```ts
// npm run code src/code/design-pattern/memento/archive-load.ts

<!-- @include: @src/code/design-pattern/memento/archive-load.ts -->
```

### 撤销和重做

备忘录模式可以用于实现撤销和重做功能，通过保存对象的状态，可以在需要时恢复到之前的状态。

```ts
// npm run code src/code/design-pattern/memento/undo-and-redo.ts

<!-- @include: @src/code/design-pattern/memento/undo-and-redo.ts -->
```

### 事务回滚

在数据库事务处理或业务流程中，如果操作失败或需要回滚，可以使用备忘录模式来恢复到事务开始之前的状态。

```ts
// npm run code src/code/design-pattern/memento/transaction-rollback.ts

<!-- @include: @src/code/design-pattern/memento/transaction-rollback.ts -->
```

### 对象状态的快照

在监控或审计系统中，备忘录模式可以用来记录系统的关键状态，以便将来进行分析或回溯。

```ts
// npm run code src/code/design-pattern/memento/object-snapshot.ts

<!-- @include: @src/code/design-pattern/memento/object-snapshot.ts -->
```