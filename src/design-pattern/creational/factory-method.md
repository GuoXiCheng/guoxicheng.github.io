---
order: 1
---

# 工厂方法模式

## 真实世界类比

假设你要去菜鸟驿站寄快递，你可以选择京东快递、顺丰快递、中通快递等，并且这个菜鸟驿站后续可能还会有其他快递公司入驻。

```ts
// npm run code src/code/design-pattern/factory-method/real-world.ts

<!-- @include: @src/code/design-pattern/factory-method/real-world.ts  -->
```


## 开发场景类比

在使用ORM框架开发时，可能会创建多种数据库连接，例如：使用sqlite运行测试，在开发中使用mysql运行，在生产环境为了更好的性能而选择oracle。

```ts
// npm run code src/code/design-pattern/factory-method/development.ts

<!-- @include: @src/code/design-pattern/factory-method/development.ts  -->
```