# 中介者模式

## 真实世界类比

淘宝作为交易平台中介协调买方和卖方，买方下单后，由淘宝通知卖方发货，买方收货后，由淘宝通知双方交易完成。

```ts
// npm run code src/code/design-pattern/mediator/real-world.ts

<!-- @include: @src/code/design-pattern/mediator/real-world.ts -->
```

## 开发场景类比

使用中介者模式实现类似MVC的控制流，Controller扮演中介者，协调View和Model之间的交互，避免了View和Model之间过于紧密的耦合。

```ts
// npm run code src/code/design-pattern/mediator/development.ts

<!-- @include: @src/code/design-pattern/mediator/development.ts -->
```