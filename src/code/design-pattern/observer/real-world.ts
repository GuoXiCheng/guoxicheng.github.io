interface Observer {
    update(news: string): void;
}

interface Subject {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notifyObservers(): void;
}

class NewspaperPublisher implements Subject {
    private observers: Observer[] = [];
    private latestNews: string = "";

    subscribe(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (!isExist) {
            this.observers.push(observer);
        }
    }

    unsubscribe(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    publishNews(news: string): void {
        this.latestNews = news;
        this.notifyObservers();
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.latestNews);
        }
    }
}

class Reader implements Observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(news: string): void {
        console.log(`${this.name} is reading news: ${news}`);
    }
}

// 创建出版社
const publisher = new NewspaperPublisher();

// 创建读者
const alice = new Reader("Alice");
const bob = new Reader("Bob");

// 读者订阅报纸
publisher.subscribe(alice);
publisher.subscribe(bob);

// 出版社发布新闻
publisher.publishNews("New edition of the newspaper is out!");

