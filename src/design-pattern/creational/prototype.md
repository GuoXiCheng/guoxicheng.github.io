---
order: 4
---
# 原型模式

## 真实世界类比

在制作面点时，会使用各种模具来让面点有更多花样。面点的模具可以看作是“模型”，使用模具来复制相同的大小和形状，这样每个面点都基于原始模具进行“克隆”，保证了一致性。

```ts
<!-- @include: @src/code/design-pattern/prototype/real-world.ts  -->
```

## 开发场景类比

在创建对象后，可能会修改对象的状态，如果想要保存对象的副本，使得可以独立地修改这个副本，而不影响原始对象，可以使用原型模式。

```ts
<!-- @include: @src/code/design-pattern/prototype/development.ts  -->
```