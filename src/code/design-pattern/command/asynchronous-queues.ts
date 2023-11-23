export {};

// 命令接口
interface Command {
    execute(): Promise<void>;
}

// 具体命令类
class ConcreteCommand implements Command {
    private payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }

    async execute(): Promise<void> {
        console.log(`Executing command with payload: ${this.payload}`);
        // 模拟异步操作
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Command with payload ${this.payload} executed`);
    }
}

// 命令队列类
class CommandQueue {
    private queue: Command[] = [];

    addCommand(command: Command) {
        this.queue.push(command);
    }

    async run(): Promise<void> {
        while (this.queue.length > 0) {
            const command = this.queue.shift();
            if (command) {
                await command.execute();
            }
        }
    }
}

// 客户端
class Client {
    private commandQueue: CommandQueue;

    constructor() {
        this.commandQueue = new CommandQueue();
    }

    addTask(payload: string) {
        const command = new ConcreteCommand(payload);
        this.commandQueue.addCommand(command);
    }

    runTasks() {
        this.commandQueue.run();
    }
}

// 使用示例
const client = new Client();
client.addTask("Task 1");
client.addTask("Task 2");
client.addTask("Task 3");
client.runTasks();
