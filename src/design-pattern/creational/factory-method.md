# 工厂方法模式

::: playground#ts 工厂方法模式交互演示

@file index.ts

```ts
interface Product {
    operation(): string;
}

class ConcreteProductA implements Product {
    operation(): string {
        return "Result of ConcreteProduct A";
    }
}

class ConcreteProductB implements Product {
    operation(): string {
        return "Result of ConcreteProduct B";
    }
}

abstract class Creator {

    public abstract factoryMethod(): Product;

    public someMethod(): string {
        const product = this.factoryMethod();

        return `Creator Work with ${product.operation()}`;
    }
}

class ConcreteCreatorA extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProductA();
    }
}

class ConcreteCreatorB extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProductB();
    }
}

function clientNode(create: Creator) {
    const result = create.someMethod();
    console.log(result);
}

clientNode(new ConcreteCreatorA());
clientNode(new ConcreteCreatorB());
```

:::