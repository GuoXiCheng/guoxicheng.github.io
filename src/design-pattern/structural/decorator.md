# 装饰模式

## 核心思想

装饰模式允许动态的向一个对象添加额外的功能，而不改变其结构。

## 典型用例

### 数据流增强

在处理数据流时，如读写文件或网络数据流，装饰模式可以用来动态地添加额外的功能，例如数据压缩、加密、编码转换等。

在这个例子中，具体装饰者类分别添加了加密和压缩的功能，可以灵活的组合装饰者以提供不同的功能组合。

```ts
// npm run code src/code/design-pattern/decorator/data-enhancement.ts

<!-- @include: @src/code/design-pattern/decorator/data-enhancement.ts -->
```