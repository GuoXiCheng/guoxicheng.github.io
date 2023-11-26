export {};

// 观察者接口
interface Observer {
    update: (data: any) => void;
}

// 主题类
class Subject {
    private observers: Observer[] = [];

    // 订阅
    public subscribe(observer: Observer): void {
        this.observers.push(observer);
    }

    // 取消订阅
    public unsubscribe(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    // 通知所有观察者
    protected notify(data: any): void {
        this.observers.forEach(observer => observer.update(data));
    }
}

// 股票市场或游戏状态类
class Market extends Subject {
    private state: any;

    // 设置状态并通知观察者
    public setState(newState: any): void {
        this.state = newState;
        this.notify(this.state);
    }

    // 获取状态
    public getState(): any {
        return this.state;
    }
}

// 具体的观察者：用户
class User implements Observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(data: any): void {
        console.log(`${this.name} received update: ${JSON.stringify(data)}`);
    }
}

// 使用示例
const stockMarket = new Market();
const user1 = new User("Alice");
const user2 = new User("Bob");

// 用户订阅股票市场更新
stockMarket.subscribe(user1);
stockMarket.subscribe(user2);

// 股票市场状态变化
stockMarket.setState({ stock: "AAPL", price: 150 });
stockMarket.setState({ stock: "MSFT", price: 250 });
