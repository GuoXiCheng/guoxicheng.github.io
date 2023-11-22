---
order: 3
---
# 建造者模式

## 核心思想

建造者模式允许逐步构建复杂对象。

## 典型用例

### 文本构建

在需要动态构建复杂的SQL查询或其他任何形式的文本时，可以使用建造者模式来逐步构建文本的不同部分。

在这个例子中，建造者的实现类提供了一系列方法来构建 SQL 查询的不同部分。这些方法返回建造者对象本身，从而允许链式调用。通过这种方式，你可以清晰且灵活地构建出复杂的 SQL 查询或其他形式的文本。这种模式特别适用于构建那些根据不同条件和上下文变化的复杂对象。

```ts
// npm run code src/code/design-pattern/builder/text-construction.ts

<!-- @include: @src/code/design-pattern/builder/text-construction.ts -->
```

### 构建复杂对象

建造者模式是一种用于创建复杂对象的设计模式，它允许你将一个复杂对象的构造过程分解成更小的、更易管理的部分。这种模式在处理需要多个步骤来构造的对象时非常有用。

```ts
// npm run code src/code/design-pattern/builder/building-complex-objects.ts

<!-- @include: @src/code/design-pattern/builder/building-complex-objects.ts -->
```

### 处理可选参数

建造者模式适合处理具有多个可选参数的对象，这种模式允许逐步构建对象，而不是通过一个包含许多参数的构造函数，这样不仅使代码更易读和维护，还可以避免创建包含多个参数的复杂构造函数，特别是当很多参数是可选的时候。

```ts
// npm run code src/code/design-pattern/builder/process-optional-parameters.ts

<!-- @include: @src/code/design-pattern/builder/process-optional-parameters.ts -->
```

### 构建不同表现形式对象

建造者模式可以通过定义多个具体建造者来实现在相同的构建过程中创建具有不同表示或配置的对象，每个具体建造者负责构建具有特定属性和特征的对象。这种方式非常适合创建如汽车模型这样的复杂对象，其中每个模型可能有不同的配置和特性。

```ts
// npm run code src/code/design-pattern/builder/building-variations-objects.ts

<!-- @include: @src/code/design-pattern/builder/building-variations-objects.ts -->
```

### 构建初始过程复杂对象

它允许将一个复杂的创建过程分解成多个较小的、易于管理的部分。这种方式使得代码更加清晰和易于理解，特别是当对象构建需要多个步骤或配置时。

```ts
// npm run code src/code/design-pattern/builder/building-initial-complex-objects.ts

<!-- @include: @src/code/design-pattern/builder/building-initial-complex-objects.ts -->
```