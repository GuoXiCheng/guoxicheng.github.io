---
order: 5
---
# 单例模式

## 核心思想

单例模式可以确保一个类只有一个实例，并提供一个访问该实例的全局节点。

## 典型用例

### 全局缓存

单例模式提供了一个全局访问点，以便所有代码共同使用一个缓存实例，从而允许不同组件共享和操作相同的数据。

在这个例子中，缓存类包含一个私有的构造函数，以防止外部直接创建实例。这样，无论在应用程序的哪个部分获取缓存实例，都是同一个实例，从而确保了缓存数据的一致性和共享性。这对于管理全局状态、缓存、配置设置等场景非常有用。

```ts
// npm run code src/code/design-pattern/singleton/global-cache.ts

<!-- @include: @src/code/design-pattern/singleton/global-cache.ts -->
```

### 全局配置管理

单例模式可以用来管理全局状态或配置信息。例如：使用单例模式来管理应用程序的全局配置信息，比如数据库连接设置或其他配置参数。

```ts
// src/code/design-pattern/singleton/global-configuration-management.ts

<!-- @include: @src/code/design-pattern/singleton/global-configuration-management.ts -->
```

### 日志记录

单例模式可以确保整个应用程序中使用一个统一的日志记录器实例，这样可以提高日志管理的一致性和效率。

```ts
// npm run code src/code/design-pattern/singleton/log-recording.ts

<!-- @include: @src/code/design-pattern/singleton/log-recording.ts -->
```

### 数据库连接池

单例模式可以用于确保整个应用程序只创建一次数据库连接池，从而统一管理数据库连接并优化资源利用率。

```ts
// npm run code src/code/design-pattern/singleton/database-connection-pool.ts

<!-- @include: @src/code/design-pattern/singleton/database-connection-pool.ts -->
```

### 访问硬件接口

单例模式适合用来控制对硬件接口的访问，例如：确保整个应用中只有一个实例来管理对打印机或文件系统的访问。这不仅保证了资源访问的一致性，还有助于防止资源冲突和数据不一致的问题。

```ts
// npm run code src/code/design-pattern/singleton/access-hardware-interface.ts

<!-- @include: @src/code/design-pattern/singleton/access-hardware-interface.ts -->
```

### 服务提供者

单例模式适用于需要确保整个应用程序中服务的一致访问和状态管理的场景，例如：网络服务、业务逻辑服务等。

```ts
// npm run code src/code/design-pattern/singleton/service-provider.ts

<!-- @include: @src/code/design-pattern/singleton/service-provider.ts -->
```