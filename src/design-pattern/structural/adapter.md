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

### 集成第三方库或旧系统

适配器模式可以用于集成第三方库或旧系统。例如：有一个第三方库或旧系统，它提供了一个特定的接口，但这个接口与当前系统的接口不兼容，可以创建一个适配器来解决这个问题。

```ts
// npm run code src/code/design-pattern/adapter/integrating-legacy-interface.ts

<!-- @include: @src/code/design-pattern/adapter/integrating-legacy-interface.ts -->
```

### 替换系统组件

适配器模式可以用于替换系统组件，例如：需要替换系统的一个组件，但新组件的接口与旧组件的接口不同。适配器模式可以用于使新组件与现有系统兼容。

```ts
// npm run code src/code/design-pattern/adapter/replacement-system-component.ts

<!-- @include: @src/code/design-pattern/adapter/replacement-system-component.ts -->
```

### 向旧代码增加新功能

适配器模式可以在不更改旧代码的基础上，向系统添加新功能。适配器模式可以用来封装新功能，确保它们与旧系统的接口保持一致。

```ts
// npm run code src/code/design-pattern/adapter/add-new-functionality-to-old-code.ts

<!-- @include: @src/code/design-pattern/adapter/add-new-functionality-to-old-code.ts -->
```

### API接口适配

适配器模式可以在不同版本的API之间进行适配。例如：一个老旧系统需要与新版本API对接，适配器模式可以用于兼容新旧接口。

```ts
// npm run code src/code/design-pattern/adapter/api-interface-adaptation.ts

<!-- @include: @src/code/design-pattern/adapter/api-interface-adaptation.ts -->
```