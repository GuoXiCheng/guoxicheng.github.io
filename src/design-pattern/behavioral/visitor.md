# 访问者模式


::: playground#ts 访问者模式交互演示

@file index.ts

```ts
interface Component {
    accept(visitor: Visitor): void;
}

class ConcreteComponentA implements Component {
    accept(visitor: Visitor): void {
        visitor.visitConcreteComponentA(this);
    }

    public exclusiveMethodOfConcreteComponentA(): string {
        return "A";
    }

}

class ConcreteComponentB implements Component {
    accept(visitor: Visitor): void {
        visitor.visitConcreteComponentB(this);
    }

    public exclusiveMethodOfConcreteComponentB(): string {
        return "B";
    }
}

interface Visitor {
    visitConcreteComponentA(element: ConcreteComponentA): void;
    visitConcreteComponentB(element: ConcreteComponentB): void;
}

class ConcreteVisitor1 implements Visitor {
    visitConcreteComponentA(element: ConcreteComponentA): void {
        console.log(`${element.exclusiveMethodOfConcreteComponentA()} ConcreteVisitor1`);
    }
    visitConcreteComponentB(element: ConcreteComponentB): void {
        console.log(`${element.exclusiveMethodOfConcreteComponentB()} ConcreteVisitor1`);
    }
}

class ConcreteVisitor2 implements Visitor {
    visitConcreteComponentA(element: ConcreteComponentA): void {
        console.log(`${element.exclusiveMethodOfConcreteComponentA()} ConcreteVisitor2`);
    }
    visitConcreteComponentB(element: ConcreteComponentB): void {
        console.log(`${element.exclusiveMethodOfConcreteComponentB()} ConcreteVisitor2`);
    }
}

function clientNode(components: Component[], visitor: Visitor) {
    for (const component of components) {
        component.accept(visitor);
    }
}

const components = [new ConcreteComponentA(), new ConcreteComponentB()];
const visitor1 = new ConcreteVisitor1();

clientNode(components, visitor1);

const visitor2 = new ConcreteVisitor2();

clientNode(components, visitor2);
```

:::