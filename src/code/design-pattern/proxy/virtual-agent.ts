export {};

interface ExpensiveObject {
    performOperation(): void;
}

class ConcreteExpensiveObject implements ExpensiveObject {
    constructor() {
        console.log("ConcreteExpensiveObject: Initialized (heavy operation)");
    }

    performOperation(): void {
        console.log("ConcreteExpensiveObject: Performing operation");
    }
}

class VirtualProxyExpensiveObject implements ExpensiveObject {
    private expensiveObject: ConcreteExpensiveObject | null = null;

    performOperation(): void {
        if (!this.expensiveObject) {
            console.log("VirtualProxyExpensiveObject: Lazily initializing ConcreteExpensiveObject");
            this.expensiveObject = new ConcreteExpensiveObject();
        }
        this.expensiveObject.performOperation();
    }
}

function clientCode(expensiveObject: ExpensiveObject) {
    console.log("Client: Executing operation.");
    expensiveObject.performOperation();
}

const virtualProxy = new VirtualProxyExpensiveObject();
clientCode(virtualProxy); // 只有在这里调用时，ConcreteExpensiveObject 才会被创建
