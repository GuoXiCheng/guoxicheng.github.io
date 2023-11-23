export {};

// 命令接口
interface Command {
    execute(): Promise<void>;
}

// 远程服务类
class RemoteService {
    async performAction(action: string): Promise<string> {
        // 模拟远程服务调用
        console.log(`Performing remote action: ${action}`);
        return new Promise(resolve => setTimeout(() => resolve(`Result of ${action}`), 1000));
    }
}

// 远程命令类
class RemoteCommand implements Command {
    constructor(private service: RemoteService, private action: string) {}

    async execute(): Promise<void> {
        // 调用远程服务
        const result = await this.service.performAction(this.action);
        console.log(`Received result: ${result}`);
    }
}

// 客户端
class Client {
    private command: Command;

    constructor(service: RemoteService, action: string) {
        this.command = new RemoteCommand(service, action);
    }

    run() {
        this.command.execute();
    }
}

// 使用示例
const remoteService = new RemoteService();
const client = new Client(remoteService, "Action 1");
client.run();
