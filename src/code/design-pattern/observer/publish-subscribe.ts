export {};

// 定义观察者接口
interface Observer {
    update(message: string): void;
}

// 定义主题接口
interface Subject {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(message: string): void;
}

// 创建一个具体的主题类。这个类将维护一个观察者列表，并实现订阅、退订和通知方法
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

// 创建一个或多个具体的观察者类
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
