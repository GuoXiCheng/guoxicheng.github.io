# 享元模式

## 典型用例

### 网络连接池

在需要大量建立相似的网络连接（如数据库连接）的情况下，通过共享连接对象来减少创建和销毁连接的开销。

```ts
// npm run code src/code/design-pattern/flyweight/connection-pool.ts

<!-- @include: @src/code/design-pattern/flyweight/connection-pool.ts -->
```