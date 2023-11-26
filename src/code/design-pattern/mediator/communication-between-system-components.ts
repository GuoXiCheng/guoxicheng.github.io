export {};

interface Mediator {
    notify(sender: object, event: string): void;
}

class Service {
    constructor(private mediator: Mediator) {}

    performAction(): void {
        console.log('Service performed an action');
        this.mediator.notify(this, 'ServiceAction');
    }
}

class Manager {
    constructor(private mediator: Mediator) {}

    handleEvent(): void {
        console.log('Manager handled an event');
        this.mediator.notify(this, 'ManagerEvent');
    }
}

class Database {
    constructor(private mediator: Mediator) {}

    dataChanged(): void {
        console.log('Database data changed');
        this.mediator.notify(this, 'DatabaseChange');
    }
}

class SystemMediator implements Mediator {
    private service: Service;
    private manager: Manager;
    private database: Database;

    constructor() {
        this.service = new Service(this);
        this.manager = new Manager(this);
        this.database = new Database(this);
    }

    notify(sender: object, event: string): void {
        if (event === 'ServiceAction') {
            console.log('Mediator reacts on ServiceAction and triggers following operations:');
            this.manager.handleEvent();
        } else if (event === 'ManagerEvent') {
            console.log('Mediator reacts on ManagerEvent and triggers following operations:');
            this.database.dataChanged();
        } else if (event === 'DatabaseChange') {
            console.log('Mediator reacts on DatabaseChange and can trigger additional operations');
            // 这里可以添加更多对数据库更改的响应逻辑
        }
    }
}

const mediator = new SystemMediator();
// 使用mediator来协调服务、管理器和数据库的交互

// 模拟一些操作
mediator.notify(mediator, 'ServiceAction');
