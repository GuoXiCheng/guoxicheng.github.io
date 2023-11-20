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