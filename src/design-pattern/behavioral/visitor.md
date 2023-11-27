# 访问者模式

## 核心思想

访问者模式允许将算法与对象结构分离，以便在不修改已有代码的情况下向现有类层次中添加新的行为。

## 典型用例

### 保证兼容性和扩展性

为保证兼容性和扩展性，当需要对一组不同类型的对象执行操作，且这些对象经常添加新类型时，访问者模式允许在不修改现有类的情况下添加新操作。

在这个例子中，有两种类型的元素和两种类型的访问者。每个访问者都以不同的方式处理不同类型的元素。如果需要添加新的元素类型或新的操作方式，只需添加新的元素类或新的访问者类，而无需修改现有的类。

```ts
// npm run code src/code/design-pattern/visitor/compatibility.ts

<!-- @include:@src/code/design-pattern/visitor/compatibility.ts -->
```

### 解析文档或对象结构

访问者模式适用于操作复杂对象结构，例如：XML文档或语法树。这种模式允许在不修改对象结构的情况下，向其添加新的操作。当需要为元素添加新的操作时，只需添加新的访问者类，而无需修改现有的元素类。这种模式特别适合于对象结构经常变化，但操作相对固定的场景。

```ts
// npm run code src/code/design-pattern/visitor/parse-document-or-object-structure.ts

<!-- @include: @src/code/design-pattern/visitor/parse-document-or-object-structure.ts -->
```

### 报告和统计

访问者模式允许在不改变对象的情况下添加新的报告功能，适用于需要从复杂对象集合中生成各种报告或统计信息。例如：不同的访问者可以用于计算总销售额、or平均值或其他统计数据。

```ts
// npm run code src/code/design-pattern/visitor/reporting-and-statistics.ts

<!-- @include: @src/code/design-pattern/visitor/reporting-and-statistics.ts -->
```

### 操作用户界面组件

访问者模式可以在用户界面组件上执行不同的操作，例如：布局、绘制和事件处理。这种模式允许在不修改组件类的情况下，为组件添加新的操作。

```ts
// npm run code src/code/design-pattern/visitor/user-interface-operation.ts

<!-- @include: @src/code/design-pattern/visitor/user-interface-operation.ts -->
```

### 序列化和反序列化

访问者模式允许将序列化和反序列化逻辑从对象本身分离，从而使对象类保持简洁且专注于其主要职责。

```ts
// npm run code src/code/design-pattern/visitor/serialization-and-deserialization.ts

<!-- @include: @src/code/design-pattern/visitor/serialization-and-deserialization.ts -->
```