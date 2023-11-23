---
order: 4
---
# 原型模式

## 核心思想

原型模式允许通过复制已有实例来生成新实例，而无需依赖其所属的类。

## 典型用例


### 状态复制

使用原型模式可以有效地进行状态复制，尤其是在实现撤销/重做功能或需要保存和恢复对象状态的场景中。通过原型模式，可以轻松地保存对象的当前状态，并在需要时恢复这些状态。

通过使用克隆方法，可以在任何时候保存对象的当前状态，并在以后需要时恢复这些状态。

通过原型模式，可以避免直接与对象的内部状态交互，而是通过克隆和恢复状态来管理这些状态，这样做更安全且更易于维护。

```ts
// npm run code src/code/design-pattern/prototype/state-replication.ts

<!-- @include: @src/code/design-pattern/prototype/state-replication.ts -->
```

### 复制复杂对象

当创建一个对象的成本比较高时，例如：复杂的计算或数据库查询，可以通过复制一个已经创建的对象来提高效率。

在这个例子中，通过一个 clone 方法可以创建一个新实例，而无需再次经历昂贵的创建过程。这种方式在需要大量类似对象，且每个对象的创建成本都很高时非常有用。

```ts
// npm run code src/code/design-pattern/prototype/copy-object.ts

<!-- @include: @src/code/design-pattern/prototype/copy-object.ts -->
```

### 避免子类过多

当系统中对象的类别太多，导致类的数量过多时，可以使用原型模式来避免子类的膨胀。 

原型模式可以在原型接口中定义一个克隆方法，由具体的类实现对象的拷贝，而无需再创建新的子类。

```ts
// npm run code src/code/design-pattern/prototype/avoid-subclassing.ts

<!-- @include: @src/code/design-pattern/prototype/avoid-subclassing.ts -->
```

### 动态加载或生成对象

使用原型模式进行动态加载或生成对象，可以有效地减少系统对具体类的依赖，从而提高系统的灵活性和可扩展性。原型模式通过复制现有对象来创建新对象，而不是通过调用构造函数。这样可以在运行时动态地生成对象，而不需要知道对象的具体类型。

在这个例子中，原型注册类用于管理原型实例。可以在系统初始化时注册一些原型，然后在运行时根据需要从注册表中检索并克隆这些原型。这种方法避免了直接依赖具体的类，提高了代码的灵活性和可维护性。

```ts
// npm run code src/code/design-pattern/prototype/dynamically-generate-objects.ts

<!-- @include: @src/code/design-pattern/prototype/dynamically-generate-objects.ts -->
```

### 初始化复杂对象

原型模式可以非常有效地用于复制初始化过程复杂的对象。当对象的构造过程涉及多个步骤并且相对成本较高时，使用原型模式可以简化这个过程。可以先创建并初始化一个原型对象，然后每次需要新实例时，只需复制这个已初始化的原型，而不是重新走完整的构造过程。

```ts
// npm run code src/code/design-pattern/prototype/initial-complex-objects.ts

<!-- @include: @src/code/design-pattern/prototype/initial-complex-objects.ts -->
```