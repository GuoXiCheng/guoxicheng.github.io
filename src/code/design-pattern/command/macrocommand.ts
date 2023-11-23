export {};

// 命令接口
interface Command {
    execute(): void;
}

// 具体命令类
class ConcreteCommand implements Command {
    private payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }

    execute(): void {
        console.log(`Executing command: ${this.payload}`);
    }
}

// 宏命令类
class MacroCommand implements Command {
    private commands: Command[] = [];

    add(command: Command) {
        this.commands.push(command);
    }

    execute(): void {
        this.commands.forEach(command => command.execute());
    }
}

// 客户端
class Client {
    private macroCommand: MacroCommand;

    constructor() {
        this.macroCommand = new MacroCommand();
    }

    addCommand(command: Command) {
        this.macroCommand.add(command);
    }

    run() {
        this.macroCommand.execute();
    }
}

// 使用示例
const client = new Client();
client.addCommand(new ConcreteCommand("Action 1"));
client.addCommand(new ConcreteCommand("Action 2"));
client.addCommand(new ConcreteCommand("Action 3"));
client.run();
