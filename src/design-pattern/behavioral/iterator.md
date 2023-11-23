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

### 支持多种遍历方式

迭代器模式允许定义一个迭代器接口和一个具体的迭代器类，用于遍历特定的数据结构。例如，对于一个树结构，我们可以实现两种迭代器：深度优先遍历和广度优先遍历。

```ts
// npm run code src/code/design-pattern/iterator/multiple-traversal-methods.ts

<!-- @include: @src/code/design-pattern/iterator/multiple-traversal-methods.ts -->
```

### 隐藏复杂结构的遍历细节

迭代器模式可以用于隐藏复杂数据结构的遍历细节。可以创建一个复杂的数据结构（树或者图结构），并为其实现一个迭代器，这样客户端代码就可以通过迭代器接口简单地遍历这个结构，而不需要关心其内部复杂性。

```ts
// npm run code src/code/design-pattern/iterator/hide-traversal-details.ts

<!-- @include: @src/code/design-pattern/iterator/hide-traversal-details.ts -->
```

### 同时多个遍历

迭代器模式可以同时进行多个遍历。在这个例子中，创建一个集合类，并为其实现迭代器，使得可以同时创建多个独立的迭代器，每个迭代器都维护自己的遍历状态，不会相互影响。

```ts
// npm run code src/code/design-pattern/iterator/multiple-traversals-meanwhile.ts

<!-- @include: @src/code/design-pattern/iterator/multiple-traversals-meanwhile.ts -->
```

### 分离集合对象的业务逻辑

迭代器模式可以将业务逻辑从集合对象分离出来。在这个例子中，首先创建了一个集合类，然后为其实现一个迭代器。这样，集合类专注于元素的管理，而迭代器负责遍历逻辑，从而实现关注点的分离。

```ts
// npm run code src/code/design-pattern/iterator/separate-business-logic.ts

<!-- @include: @src/code/design-pattern/iterator/separate-business-logic.ts -->
```

### 间接访问集合元素

迭代器模式允许客户端通过迭代器接口遍历集合，而不是直接操作集合内部数据结构。

```ts
// npm run code src/code/design-pattern/iterator/indirect-access-set.ts

<!-- @include: @src/code/design-pattern/iterator/indirect-access-set.ts -->
```