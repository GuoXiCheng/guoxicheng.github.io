# 中介者模式


::: playground#ts 中介者模式交互演示

@file index.ts

```ts
interface Mediator {
    notify(sender: object, event: string): void;
}

class ConcreteMediator implements Mediator {

    private component1: Component1;
    private component2: Component2;

    constructor(component1: Component1, component2: Component2) {
        this.component1 = component1;
        this.component1.setMediator(this);
        this.component2 = component2;
        this.component2.setMediator(this);
    }

    public notify(sender: object, event: string) {
        if (event === "A") {
            console.log("event A");
            this.component2.doC();
        }

        if (event === "D") {
            console.log("event D");
            this.component1.doB();
            this.component2.doC();
        }
    }
}

class BaseComponent {
    protected mediator!: Mediator;

    setMediator(mediator: Mediator) {
        this.mediator = mediator;
    }
}

class Component1 extends BaseComponent {
    public doA(): void {
        this.mediator.notify(this, "A");
        console.log("component1 doA");
    }

    public doB(): void {
        this.mediator.notify(this, "B");
        console.log("component1 doB");
    }
}

class Component2 extends BaseComponent {
    public doC(): void {
        this.mediator.notify(this, "C");
        console.log("component2 doC");
    }

    public doD(): void {
        this.mediator.notify(this, "D");
        console.log("component2 doD");
    }
}

const component1 = new Component1();
const component2 = new Component2();

const mediator = new ConcreteMediator(component1, component2);

component1.doA();

component2.doD();

```

:::