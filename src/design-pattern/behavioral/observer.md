# 观察者模式

::: playground#ts 观察者模式交互演示

@file index.ts

```ts
interface Observer {
    update(subject: Subject): void;
}

interface Subject {
    attach(observer: Observer): void;

    detach(observer: Observer): void;

    notify(): void;
}

// 具体被观察者
class ConcreteSubject implements Subject {

    public state!: number;

    private observers: Observer[] = [];

    attach(observer: Observer): void {
        const isExists = this.observers.includes(observer);
        if (isExists) {
            throw new Error("observer has been attached");
        }
        this.observers.push(observer);
    }

    detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            throw new Error("observer not exists");
        }
        this.observers.splice(observerIndex, 1);
    }

    notify(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    someMethod() {
        this.state = Math.floor(Math.random() * (10 + 1));
        this.notify();
    }
}

// 具体观察者A
class ConcreteObserverA implements Observer {
    update(subject: Subject): void {
        if (subject instanceof ConcreteSubject && subject.state < 3) {
            console.log("ConcreteObserverA Reacted to the event");
        }
    }
}

// 具体观察者B
class ConcreteObserverB implements Observer {
    update(subject: Subject): void {
        if (subject instanceof ConcreteSubject && subject.state >= 3) {
            console.log("ConcreteObserverB Reacted to the event");
        }
    }
}

const subject = new ConcreteSubject();

const observerA = new ConcreteObserverA();
const observerB = new ConcreteObserverB();

subject.attach(observerA);
subject.attach(observerB);

subject.someMethod();

subject.detach(observerB);

subject.someMethod();
```

:::