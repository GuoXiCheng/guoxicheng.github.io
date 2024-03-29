export {};

// 定义处理者接口，声明处理请求的方法
interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: MyRequest): void;
}

class MyRequest {
    constructor(public type: string, public amount: number) {}
}

// 创建具体处理者，每个处理者决定是否处理请求或将其传递给下一个处理者
class AbstractHandler implements Handler {
    private nextHandler!: Handler;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: MyRequest): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    }
}

class Manager extends AbstractHandler {
    public handle(request: MyRequest): void {
        if (request.type === 'Leave' && request.amount <= 10) {
            console.log(`Manager will approve ${request.amount} day(s) leave`);
        } else {
            super.handle(request);
        }
    }
}

class Director extends AbstractHandler {
    public handle(request: MyRequest): void {
        if (request.type === 'Leave' && request.amount <= 20) {
            console.log(`Director will approve ${request.amount} day(s) leave`);
        } else {
            super.handle(request);
        }
    }
}

class CEO extends AbstractHandler {
    public handle(request: MyRequest): void {
        // CEO can approve any amount of leave
        console.log(`CEO will approve ${request.amount} day(s) leave`);
    }
}

const manager = new Manager();
const director = new Director();
const ceo = new CEO();

manager.setNext(director).setNext(ceo);

const request = new MyRequest('Leave', 15);
manager.handle(request); // 输出: Director will approve 15 day(s) leave
