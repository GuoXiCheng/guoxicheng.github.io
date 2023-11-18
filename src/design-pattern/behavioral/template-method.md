# 模板方法模式

## 典型用例

### 数据处理

在处理数据的应用中，通常有一个固定的流程（如读取、解析、处理、输出数据），但是每个步骤的具体实现可能根据数据的不同格式而变化。模板方法可以定义处理流程的骨架，而具体步骤的实现则留给子类。

```ts
// npm run code src/code/design-pattern/template-method/data-processing.ts

<!-- @include:@src/code/design-pattern/template-method/data-processing.ts -->
```