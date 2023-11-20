# 代理模式

## 核心思想

代理模式允许控制对另一对象的访问。

## 典型用例

### 保护代理

控制对原始对象的访问，用于不同权限的访问控制。保护代理根据访问者的权限决定是否允许访问真实对象。

在这个例子中，保护代理根据用户角色来决定是否允许访问。这样的设计可以用来在不同层级的应用程序中实现权限控制，而不必修改真实对象的代码。

```ts
// npm run code src/code/design-pattern/proxy/protection-agent.ts

<!-- @include: @src/code/design-pattern/proxy/protection-agent.ts -->
```