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

### 远程代理

代理模式可以为远程对象提供一个本地的代理，以便可以像访问本地对象一样访问远程对象。例如，在分布式对象通信中，远程代理可以隐藏网络相关的复杂性。

```ts
// npm run code src/code/design-pattern/proxy/remote-agent.ts

<!-- @include: @src/code/design-pattern/proxy/remote-agent.ts -->
```

### 虚拟代理

使用虚拟代理可以用于延迟创建开销较大的对象。当对象的创建成本很高时，虚拟代理先代表真实对象存在，直到真正需要对象时才创建它。例如，在图像加载中，直到图像真正需要显示在屏幕上时才加载。

```ts
// npm run code src/code/design-pattern/proxy/virtual-agent.ts

<!-- @include: @src/code/design-pattern/proxy/virtual-agent.ts -->
```

### 智能引用代理

智能引用代理通常需要创建一个代理类，这个类在访问实际对象时执行额外的操作，这种代理可以用来跟踪对象的引用次数、预加载资源、进行权限检查，或者执行其他在直接访问对象之前需要的操作。

```ts
// npm run code src/code/design-pattern/proxy/intelligent-reference-agent.ts

<!-- @include: @src/code/design-pattern/proxy/intelligent-reference-agent.ts -->
```

### 缓存代理

当一个操作的结果被请求多次时，缓存代理可以直接从缓存中返回结果，而不是重新执行昂贵的操作。缓存代理可以为昂贵的操作结果提供临时存储，以便多个客户端可以共享这些结果，从而减少计算或网络延迟。

```ts
// npm run code src/code/design-pattern/proxy/cache-proxy.ts

<!-- @include: @src/code/design-pattern/proxy/cache-proxy.ts -->
```

### 日志记录代理

日志代理可以记录一个对象的所有操作。通过代理模式，可以在执行操作的同时，自动记录每次操作的详细信息，例如，记录对数据库的查询。

```ts
// npm run code src/code/design-pattern/proxy/logging-agent.ts

<!-- @include: @src/code/design-pattern/proxy/logging-agent.ts -->
```

### 防火墙代理

防火墙代理可以决定哪些网络请求是安全的，哪些应该被拒绝。防火墙代理充当客户端和资源之间的中介，可以基于预定义的规则允许或拒绝对资源的访问，防止不安全的或不受信任的请求访问关键资源。

```ts
// npm run code src/code/design-pattern/proxy/firewall-agent.ts

<!-- @include: @src/code/design-pattern/proxy/firewall-agent.ts -->
```