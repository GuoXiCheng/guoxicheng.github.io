// npm run code output/design-pattern/command/development.js

export {};

interface Command {
    execute(): void;
}

class Task implements Command {

    constructor(private name: string) {}

    execute(): void {
        console.log(`执行任务 ${this.name}`);
    }
}

class CommandScheduler {
    private commandQueue: Command[] = [];

    addCommand(command: Command) {
        this.commandQueue.push(command);
    }

    run() {
        while (this.commandQueue.length > 0) {
            const command = this.commandQueue.shift();
            command?.execute();
        }
    }
}

const scheduler = new CommandScheduler();
scheduler.addCommand(new Task("A"));
scheduler.addCommand(new Task("B"));

scheduler.run();