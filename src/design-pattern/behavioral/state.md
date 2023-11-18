# 状态模式

## 典型用例

### 订单管理

在订单管理系统中，订单会有不同的状态: 新订单、已支付、已发货、已完成、已取消。每个状态会有不同的处理逻辑。

```ts
// npm run code src/code/design-pattern/state/order.ts

<!-- @include:@src/code/design-pattern/state/order.ts -->
```