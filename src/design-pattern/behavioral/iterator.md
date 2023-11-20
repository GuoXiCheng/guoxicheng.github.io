# 迭代器模式

## 核心思想

迭代器模式提供了一种方法来顺序访问一个聚合对象中的各个元素，而不需要暴露其底层细节。

## 典型用例

### 遍历集合

当需要遍历不同类型的集合对象（如数组、列表、树结构、图）时，迭代器模式提供了一种统一的方法来访问它们的元素，无需了解集合的内部表示。

```ts
// npm run code src/code/design-pattern/iterator/ergodic-set.ts

<!-- @include:@src/code/design-pattern/iterator/ergodic-set.ts -->
```