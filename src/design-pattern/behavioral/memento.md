# 备忘录模式

## 真实世界类比

通过拍照可以捕捉人物或风景固定时刻的状态。
照相机用来捕捉图像，相册用来存储和回复图像，每一张照片都是一个状态的备忘录，相册则是用来保存这些备忘录的地方。

```ts
// npm run code src/code/design-pattern/memento/real-world.ts

<!-- @include:@src/code/design-pattern/memento/real-world.ts -->
```

## 开发场景类比

在表单数据自动保存的开发场景中，可以使用备忘录模式来捕获并保存表单的状态，以便在需要时恢复到之前的状态。

```ts
// npm run code src/code/design-pattern/memento/development.ts

<!-- @include:@src/code/design-pattern/memento/development.ts -->
```