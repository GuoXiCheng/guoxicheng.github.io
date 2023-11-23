export {};

// 命令接口
interface Command {
    execute(): void;
    undo(): void;
}

// 具体命令类
class ConcreteCommand implements Command {
    private state: any;

    constructor(private receiver: any, private action: string) {
        this.state = receiver.state;
    }

    execute(): void {
        console.log(`Executing action: ${this.action}`);
        // 保存当前状态，然后执行操作
        this.state = this.receiver.state;
        this.receiver.performAction(this.action);
    }

    undo(): void {
        console.log(`Undoing action: ${this.action}`);
        // 撤销操作，恢复到之前的状态
        this.receiver.state = this.state;
    }
}

// 接收者类
class Receiver {
    state: any;

    performAction(action: string) {
        this.state = action;  // 举例修改状态
    }
}

// 命令管理类
class CommandManager {
    private history: Command[] = [];

    executeCommand(command: Command) {
        command.execute();
        this.history.push(command);
    }

    undo() {
        const command = this.history.pop();
        if (command) {
            command.undo();
        }
    }
}

// 客户端
class Client {
    private commandManager: CommandManager;
    private receiver: Receiver;

    constructor() {
        this.commandManager = new CommandManager();
        this.receiver = new Receiver();
    }

    run() {
        const command1 = new ConcreteCommand(this.receiver, "Action 1");
        const command2 = new ConcreteCommand(this.receiver, "Action 2");

        this.commandManager.executeCommand(command1);
        this.commandManager.executeCommand(command2);

        // 撤销最后一个操作
        this.commandManager.undo();
    }
}

// 使用示例
const client = new Client();
client.run();
