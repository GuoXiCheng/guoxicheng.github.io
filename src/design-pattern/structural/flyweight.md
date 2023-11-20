# 享元模式

## 核心思想

享元模式允许共享多个对象的相同状态，来在有限的内存中载入更多的对象。

## 典型用例

### 网络连接池

在需要大量建立相似的网络连接（如数据库连接）的情况下，通过共享连接对象来减少创建和销毁连接的开销。

在这个例子中，连接池管理着一组预先创建的数据库连接对象。当需要一个连接时，从池中获取一个可用的连接；当完成使用时，将连接返回给池。这种方式可以显著减少频繁创建和销毁连接的性能开销。

```ts
// npm run code src/code/design-pattern/flyweight/connection-pool.ts

<!-- @include: @src/code/design-pattern/flyweight/connection-pool.ts -->
```