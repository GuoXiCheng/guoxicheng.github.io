# 责任链模式

## 现实世界类比

在击鼓传花的游戏中，数个玩家可以围成一圈，在鼓声响起时，花（或小物件）在所有人手中依次传递，当鼓声停止时，花在谁的手里谁就要表演节目。

```ts
<!-- @include: @src/code/design-pattern/chain-of-responsibility/real-world.ts  -->
```

## 开发场景类比

在开发中一个常见的情景是处理前端的请求，在处理业务逻辑之前可能会需要对用户请求的内容进行验证，例如：数据验证、用户身份验证、用户权限验证等。在所有验证通过之后，才会处理业务逻辑。

```ts
<!-- @include: @src/code/design-pattern/chain-of-responsibility/development.ts  -->
```