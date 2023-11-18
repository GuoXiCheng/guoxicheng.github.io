# 组合模式

## 典型用例

### 文件和目录结构

在文件系统中，可以用相同的方式来处理文件和目录。目录可以包含文件和其他目录，而文件是目录的一部分。这种模式允许客户端代码以统一的方式来处理复杂的树状结构。

```ts
// npm run code src/code/design-pattern/composite/directory-structure.ts

<!-- @include:@src/code/design-pattern/composite/directory-structure.ts -->
```