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

### 替换依赖关系

抽象工厂模式允许产生一系列相关或依赖对象，而无需指定具体的类。

在这个例子中，创建了一个抽象工厂来处理不同的数据库访问和消息传递。这样，当需要更换整个产品族时（数据库访问和消息传递），只需要更换工厂实现即可，而无需修改客户端代码。

```ts
// npm run code src/code/design-pattern/abstract-factory/substitution-dependency.ts

<!-- @include: @src/code/design-pattern/abstract-factory/substitution-dependency.ts -->
```

### 跨平台组件

抽象工厂模式可以用来根据不同的操作系统创建适应其风格的UI组件，同时保持客户端代码的一致性。

```ts
// npm run code src/code/design-pattern/abstract-factory/cross-platform.ts

<!-- @include: @src/code/design-pattern/abstract-factory/cross-platform.ts -->
```

### 创建产品族

抽象工厂模式可以用来创建不同风格的UI产品族。

在这个例子中，每种风格将包含不同的按钮、滚动条和菜单组件。抽象工厂模式允许根据不同风格创建一系列可以一起工作的 UI 组件，可客户端代码不需要了解具体的组件实现。

如果需要添加新的风格系列，只需实现一个新的具体工厂和一系列具体产品即可。客户端代码只需要更换使用的工厂，无需进行其他修改，就能创建新风格的 UI 组件。这样，抽象工厂模式有效地支持了产品族的创建和易于扩展。

```ts
// npm run code src/code/design-pattern/abstract-factory/product-family.ts

<!-- @include: @src/code/design-pattern/abstract-factory/product-family.ts -->
```

### 配置产品组合

抽象工厂模式允许根据不同的配置或环境条件创建与之相匹配的对象组合，如不同语言的文本显示和消息处理。

在这个例子中，如果需要支持新的语言环境，只需添加一个新的具体工厂和相应的具体产品即可。客户端代码根据配置或环境条件选择相应的工厂，从而轻松实现多语言支持，而无需修改现有代码。这样，抽象工厂模式有效地支持了根据不同配置创建产品组合的需求。

```ts
// npm run code src/code/design-pattern/abstract-factory/configuration-portfolio.ts

<!-- @include: @src/code/design-pattern/abstract-factory/configuration-portfolio.ts -->
```