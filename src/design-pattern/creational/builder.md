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