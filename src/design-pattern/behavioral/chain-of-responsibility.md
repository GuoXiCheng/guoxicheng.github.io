# 责任链模式

## 现实世界类比

### 审批流程

在审批业务流程中，每个审批者可以决定批准、拒绝或将审批传递给更高级别的管理者。

```ts
// npm run code src/code/design-pattern/chain-of-responsibility/approval-process.ts

<!-- @include: @src/code/design-pattern/chain-of-responsibility/approval-process.ts -->
```