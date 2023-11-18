# 访问者模式

## 典型用例

### 保证兼容性和扩展性

为保证兼容性和扩展性，当需要对一组不同类型的对象执行操作，且这些对象经常添加新类型时，访问者模式允许在不修改现有类的情况下添加新操作。

```ts
<!-- @include:@src/code/design-pattern/visitor/compatibility.ts -->
```
