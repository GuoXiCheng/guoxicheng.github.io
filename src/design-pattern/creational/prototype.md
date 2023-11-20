---
order: 4
---
# 原型模式

## 核心思想

原型模式允许通过复制已有实例来生成新实例，而无需依赖其所属的类。

## 典型用例

### 复制复杂对象

当创建一个对象的成本比较高时，例如：复杂的计算或数据库查询，可以通过复制一个已经创建的对象来提高效率。

在这个例子中，通过一个 clone 方法可以创建一个新实例，而无需再次经历昂贵的创建过程。这种方式在需要大量类似对象，且每个对象的创建成本都很高时非常有用。

```ts
// npm run code src/code/design-pattern/prototype/copy-object.ts

<!-- @include: @src/code/design-pattern/prototype/copy-object.ts -->
```