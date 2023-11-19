---
order: 1
---

# 工厂方法模式

## 典型用例

### 依赖注入

当一个类需要创建依赖对象，而又不应该知道具体的类时，可以使用工厂方法模式。例如：在使用日志记录器时，客户端无需知道具体使用哪种日志记录器，而只需与日志工厂接口交互。

这种方式支持依赖倒置原则，使得高级模块（客户端）不会依赖于低级模块（具体的日志记录器），而是依赖于抽象（日志记录器接口）。

```ts
// npm run code src/code/design-pattern/factory-method/dependency-injection.ts

<!-- @include: @src/code/design-pattern/factory-method/dependency-injection.ts  -->
```