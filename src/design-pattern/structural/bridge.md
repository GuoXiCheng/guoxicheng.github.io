# 桥接模式

## 核心思想

桥接模式用于将抽象部分与实现部分分离，使它们都可以独立地变化。

## 典型用例

### 数据库抽象访问

在需要支持多种数据库的应用中，桥接模式可以用于将业务逻辑（抽象部分）与数据库访问层（实现部分）分离，使得更换数据库时不需要修改业务逻辑。

在这个例子中，DataService及其子类表示抽象部分，负责定义高层的业务逻辑。Database接口及其实现表示实现部分，负责具体的数据库操作。这使得更换数据库变得简单，因为业务逻辑层不需要知道具体使用的是哪种数据库。

```ts
// npm run code src/code/design-pattern/bridge/database-access.ts

<!-- @include:@src/code/design-pattern/bridge/database-access.ts -->
```