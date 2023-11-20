# 组合模式

## 核心思想

组合模式允许将对象组合成树状结构，并能像使用独立对象一样使用它们。

## 典型用例

### 文件和目录结构

在文件系统中，可以用相同的方式来处理文件和目录。目录可以包含文件和其他目录，而文件是目录的一部分。这种模式允许客户端代码以统一的方式来处理复杂的树状结构。

在这个例子中，目录和文件都继承自共同的抽象组件类，目录可以包含其他目录或文件对象，print方法可以递归的输出整个文件和目录结构，getSize方法可以计算整个目录的总大小。这样的设计使得对文件和目录的操作变得简单和统一。

```ts
// npm run code src/code/design-pattern/composite/directory-structure.ts

<!-- @include:@src/code/design-pattern/composite/directory-structure.ts -->
```