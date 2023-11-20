---
order: 2
---
# 抽象工厂模式

## 核心思想

抽象工厂模式提供一个创建一系列相关对象的接口，而无需指定具体的类。

## 典型用例

### 切换环境

抽象工厂模式可以用来切换不同的环境而无需修改客户端代码，例如：在测试环境中，使用模拟对象；而在生产环境中，使用实际对象。

```ts
// npm run code src/code/design-pattern/abstract-factory/switch-environment.ts

<!-- @include: @src/code/design-pattern/abstract-factory/switch-environment.ts -->
```