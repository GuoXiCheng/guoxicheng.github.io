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

### 图形绘制

组合模式允许将对象组合成树形结构以表示部分-整体的层次结构，因为它可以将简单的图形（如线条、矩形、圆形）组合成复杂的图形，所以非常适用于图形编辑器的场景。

```ts
// npm run code src/code/design-pattern/composite/graphic-rendering.ts

<!-- @include: @src/code/design-pattern/composite/graphic-rendering.ts -->
```

### 用户界面组件

在用户界面设计中，组合模式用于构建和管理复杂的 UI 组件树。例如，一个窗口（容器）可以包含面板、按钮和文本框，面板又可以包含其他组件。

```ts
// npm run code src/code/design-pattern/composite/user-interface-component.ts

<!-- @include: @src/code/design-pattern/composite/user-interface-component.ts -->
```

### 组织架构

在表示和管理组织架构时，如公司的部门和员工，一个部门可以包含子部门和员工，组合模式允许以统一的方式来处理部门和员工。

```ts
// npm run code src/code/design-pattern/composite/organizational-structure.ts

<!-- @include: @src/code/design-pattern/composite/organizational-structure.ts -->
```

### 语法树

在编译器设计中，组合模式可以用于构建和操作抽象语法树。在这个例子中，创建了一个简化的模型来表示不同类型的语法结构，如表达式、循环或判断语句。每个节点都可以是一个简单的表达式，也可以是一个更复杂的结构。

```ts
// npm run code src/code/design-pattern/composite/syntax-tree.ts

<!-- @include: @src/code/design-pattern/composite/syntax-tree.ts -->
```