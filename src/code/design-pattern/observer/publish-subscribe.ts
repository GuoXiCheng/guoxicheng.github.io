export {};

interface Observer {
    update(message: string): void;
}

interface Subject {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(message: string): void;
}

class ConcreteSubject implements Subject {
    private observers: Observer[] = [];

    subscribe(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index === -1) {
            this.observers.push(observer);
        }
    }

    unsubscribe(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notify(message: string): void {
        for (const observer of this.observers) {
            observer.update(message);
        }
    }
}

class ConcreteObserver implements Observer {
    constructor(private name: string) {}

    update(message: string): void {
        console.log(`${this.name} received message: ${message}`);
    }
}

const subject = new ConcreteSubject();

const observer1 = new ConcreteObserver("Observer 1");
const observer2 = new ConcreteObserver("Observer 2");
const observer3 = new ConcreteObserver("Observer 3");

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);

subject.notify("Hello World!"); // 所有订阅者接收到消息

subject.unsubscribe(observer2);

subject.notify("Another message"); // Observer 2 不会接收到这个消息
