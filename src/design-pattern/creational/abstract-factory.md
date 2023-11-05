# 抽象工厂模式


::: playground#ts 抽象工厂模式交互演示

@file index.ts

```ts
interface AbstractFactory {
    createProductA(): AbstractProductA;

    createProductB(): AbstractProductB;
}

class ConcreteFactory1 implements AbstractFactory {
    createProductA() {
        return new ConcreteProductA1();
    }
    createProductB() {
        return new ConcreteProductB1();
    }
}

class ConcreteFactory2 implements AbstractFactory {
    createProductA() {
        return new ConcreteProductA2();
    }
    createProductB() {
        return new ConcreteProductB2();
    }

}

interface AbstractProductA {
    usefulFunctionA(): string;
}

class ConcreteProductA1 implements AbstractProductA {
    usefulFunctionA(): string {
        return "useful result of product A1";
    }
}

class ConcreteProductA2 implements AbstractProductA {
    usefulFunctionA(): string {
        return "useful result of product A2";
    }
}

interface AbstractProductB {
    usefulFunctionB(): string;

    anthorUsefulFunctionB(collaborator: AbstractProductA): string;
}

class ConcreteProductB1 implements AbstractProductB {
    usefulFunctionB(): string {
        return "useful result of product B1";
    }
    anthorUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `product B1 collaborator with ${result}`;
    }
}

class ConcreteProductB2 implements AbstractProductB {
    usefulFunctionB(): string {
        return "useful result of product B2";
    }
    anthorUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `product B2 collaborator with ${result}`;
    }
}

function clientNode(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();
    console.log(productB.usefulFunctionB());
    console.log(productB.anthorUsefulFunctionB(productA));
}

clientNode(new ConcreteFactory1());

clientNode(new ConcreteFactory2());
```

:::