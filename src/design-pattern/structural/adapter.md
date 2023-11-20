# 适配器模式

## 核心思想

适配器模式负责在一个或多个类之间做接口转换，使得原本不兼容的接口能在一起工作。

## 典型用例

### 统一不同的接口

在处理多个具有不同接口的类时，适配器模式可以用来提供一个统一的接口，使得客户端代码可以以统一的方式与这些类交互。

在这个例子中，适配器实现了新的接口，但在内部使用了旧的接口实例，使得客户端代码可以通过新接口与旧的接口交互，而无需关心内部的具体实现。

```ts
// npm run code src/code/design-pattern/adapter/unify-interfaces.ts

<!-- @include:@src/code/design-pattern/adapter/unify-interfaces.ts -->
```