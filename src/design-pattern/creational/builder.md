---
order: 3
---
# 建造者模式

## 真实世界类比

小学连词造句题目，要求学生把“我 吃 喜欢 水果”这四个词语连成一个语义通顺的句子。

```ts
// npm run code src/code/design-pattern/builder/real-world.ts

<!-- @include: @src/code/design-pattern/builder/real-world.ts  -->
```

## 开发场景类比

一个常见的场景是在ORM框架中，使用建造者模式来组织SQL语句，以屏蔽底层数据库的差异。
例如：MySQL和Oracle在分页查询语句上的差异，可以通过建造者模式的链式构建来进行屏蔽。

```ts
// npm run code src/code/design-pattern/builder/development.ts

<!-- @include: @src/code/design-pattern/builder/development.ts  -->
```