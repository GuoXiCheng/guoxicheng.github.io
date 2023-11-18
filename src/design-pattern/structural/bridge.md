# 桥接模式

## 典型用例

### 数据库抽象访问

在需要支持多种数据库的应用中，桥接模式可以用于将业务逻辑（抽象部分）与数据库访问层（实现部分）分离，使得更换数据库时不需要修改业务逻辑。

```ts
// npm run code src/code/design-pattern/bridge/database-access.ts

<!-- @include:@src/code/design-pattern/bridge/database-access.ts -->
```