export {};

// Observer interface
interface Observer {
    update(subject: Subject): void;
}

// ConcreteObserver
class SocialMediaUser implements Observer {
    constructor(private name: string) {}

    update(subject: Subject): void {
        console.log(`${this.name} received an update: ${subject.getState()}`);
    }
}

// Subject interface
interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
    getState(): string;
}

// ConcreteSubject
class SocialMediaTopic implements Subject {
    private observers: Observer[] = [];
    private state: string = '';

    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    setState(state: string): void {
        this.state = state;
        this.notifyObservers();
    }

    getState(): string {
        return this.state;
    }
}

// 使用示例
const topic = new SocialMediaTopic();

const user1 = new SocialMediaUser("Alice");
const user2 = new SocialMediaUser("Bob");

topic.registerObserver(user1);
topic.registerObserver(user2);

topic.setState("New post about TypeScript!");
