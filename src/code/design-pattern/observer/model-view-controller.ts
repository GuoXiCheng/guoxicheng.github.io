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

// 模型类
class Model extends Subject {
    private data: any;

    // 设置数据并通知观察者
    public setData(newData: any): void {
        this.data = newData;
        this.notify(this.data);
    }

    // 获取数据
    public getData(): any {
        return this.data;
    }
}

// 视图类
class View implements Observer {
    private model: Model;

    constructor(model: Model) {
        this.model = model;
        this.model.subscribe(this);
    }

    update(data: any): void {
        console.log(`View updated with data: ${JSON.stringify(data)}`);
    }
}

// 使用示例
const model = new Model();
const view1 = new View(model);
const view2 = new View(model);

// 更新模型数据
model.setData({ message: "Hello, Observer Pattern!" });
