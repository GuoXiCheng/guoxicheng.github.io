---
order: 1
---

# 工厂方法模式

## 核心思想

工厂方法模式提供一个接口，让这个接口的实现来决定实例化哪个类。

## 典型用例

### 依赖注入

当一个类需要创建依赖对象，而又不应该知道具体的类时，可以使用工厂方法模式。例如：在使用日志记录器时，客户端无需知道具体使用哪种日志记录器，而只需与日志工厂接口交互。

这种方式支持依赖倒置原则，使得高级模块（客户端）不会依赖于低级模块（具体的日志记录器），而是依赖于抽象（日志记录器接口）。

```ts
// npm run code src/code/design-pattern/factory-method/dependency-injection.ts

<!-- @include: @src/code/design-pattern/factory-method/dependency-injection.ts  -->
```

### 创建不同类型对象

在工厂方法模式中，对象的创建是通过调用一个工厂方法来完成的，而不是直接通过调用构造函数。这个模式特别适用于情况，当你有一组类似的对象，但它们在一些细节上有所不同，或者你需要根据不同的情境来创建不同的对象实例。

在这个例子中，开发跨平台应用时可能需要根据不同的操作系统创建不同的UI元素，具体工厂用以返回特定操作系统的UI元素，客户端代码接收一个工厂对象并使用它来创建UI元素，这样，UI元素的创建就与特定的类实现解耦了，使得添加新的UI元素或支持新的操作系统变得更容易。

```ts
// npm run code src/code/design-pattern/factory-method/create-different-type-objects.ts

<!-- @include: @src/code/design-pattern/factory-method/create-different-type-objects.ts -->
```

### 扩展类库或框架

当设计一个框架或库时，可以使用工厂方法来允许用户扩展或修改其标准组件。用户可以创建扩展了工厂方法的子类来生成自定义的对象。 

在这个例子中，先创建了一个基本的日志类库，用户可以通过继承并重写工厂方法来创建自定义的日志记录器。

```ts
// npm run code src/code/design-pattern/factory-method/extend-framework.ts

<!-- @include: @src/code/design-pattern/factory-method/extend-framework.ts -->
```

### 替代子类化

工厂方法模式是一种在不产生大量子类的情况下实现对象的灵活创建的设计模式。在某些情况下，如果每种不同的行为或变化都通过子类来实现，可能会导致子类数量急剧增加。工厂方法允许子类通过覆盖一个方法来改变创建对象的类型，这样可以避免产生过多的子类。

假设开发一个游戏应用，其中的角色（如战士、法师、弓箭手）具有不同的武器。如果为每种角色和武器组合创建一个子类，子类的数量会非常多。因此可以创建不同类型的角色，并且每个角色可以使用相应的武器，而不需要为每种角色和武器组合创建单独的子类。这种方法减少了子类的数量，并提高了代码的灵活性和可维护性。

```ts
// npm run code src/code/design-pattern/factory-method/alternative-subclassing.ts

<!-- @include: @src/code/design-pattern/factory-method/alternative-subclassing.ts -->
```

### 解耦代码

工厂方法模式通过定义一个用于创建对象的接口，但让子类决定实例化哪一个类，从而实现解耦。这种模式允许代码在不知道具体类的情况下实例化对象，这样就可以降低类之间的耦合度。

在这个例子中，程序需要根据不同的配置或环境条件创建不同类型的数据库连接。如果直接在代码中实例化特定类型的数据库连接，那么代码就会与特定的数据库类紧密耦合。使用工厂方法模式，就可以避免这种耦合。

```ts
// npm run code src/code/design-pattern/factory-method/decoupled-code.ts

<!-- @include: @src/code/design-pattern/factory-method/decoupled-code.ts -->
```