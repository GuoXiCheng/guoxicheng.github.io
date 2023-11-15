---
order: 2
---
# 抽象工厂模式

## 真实世界类比

假设你要去开通88VIP服务，有生活卡、购物卡和全能卡三种套餐供你选择，生活卡包含视频会员权益，购物卡包含天天红包权益，全能卡包含生活卡和购物卡的所有权益。


```ts
// npm run code src/code/design-pattern/abstract-factory/real-world.ts

<!-- @include: @src/code/design-pattern/abstract-factory/real-world.ts  -->
```

## 开发场景类比

假设你在开发中要整合微信小程序、抖音小程序和百度小程序各自所自带的网络请求方式，未来还有可能添加别的平台的小程序，因此你会想要使用统一的工厂接口，来屏蔽不同平台的差异。

```ts
// npm run code src/code/design-pattern/abstract-factory/development.ts

<!-- @include: @src/code/design-pattern/abstract-factory/development.ts  -->
```