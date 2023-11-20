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