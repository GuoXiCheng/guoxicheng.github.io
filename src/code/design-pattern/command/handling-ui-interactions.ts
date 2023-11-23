export {};

// 命令接口
interface Command {
    execute(): void;
}

// 接收者类
class Receiver {
    performAction(action: string) {
        console.log(`Executing action: ${action}`);
    }
}

// 具体命令类
class ConcreteCommand implements Command {
    private receiver: Receiver;
    private action: string;

    constructor(receiver: Receiver, action: string) {
        this.receiver = receiver;
        this.action = action;
    }

    execute(): void {
        this.receiver.performAction(this.action);
    }
}

// 调用者类
class Invoker {
    private command!: Command;

    setCommand(command: Command) {
        this.command = command;
    }

    runCommand() {
        this.command.execute();
    }
}

// 客户端
class Client {
    private invoker: Invoker;
    private receiver: Receiver;

    constructor() {
        this.receiver = new Receiver();
        this.invoker = new Invoker();
    }

    run() {
        const command = new ConcreteCommand(this.receiver, "Save");
        this.invoker.setCommand(command);
        this.invoker.runCommand();
    }
}

// 使用示例
const client = new Client();
client.run();
