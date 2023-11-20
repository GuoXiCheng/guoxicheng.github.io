export {};

// 定义命令接口
interface Command {
    execute(): void;
    undo(): void;
}

// 创建接收者执行与请求相关操作
class TextEditor {
    private content: string = '';

    append(text: string): void {
        this.content += text;
    }

    delete(): void {
        this.content = this.content.slice(0, -1);
    }

    getContent(): string {
        return this.content;
    }
}

// 创建具体命令类，每个命令类将执行一个操作并保存其状态以便撤销。
class AppendCommand implements Command {
    private editor: TextEditor;
    private text: string;

    constructor(editor: TextEditor, text: string) {
        this.editor = editor;
        this.text = text;
    }

    execute(): void {
        this.editor.append(this.text);
    }

    undo(): void {
        for (let i = 0; i < this.text.length; i++) {
            this.editor.delete();
        }
    }
}

class DeleteCommand implements Command {
    private editor: TextEditor;
    private deleted: string = '';

    constructor(editor: TextEditor) {
        this.editor = editor;
    }

    execute(): void {
        this.deleted = this.editor.getContent().slice(-1);
        this.editor.delete();
    }

    undo(): void {
        this.editor.append(this.deleted);
    }
}

// 创建一个调用者类，用于执行命令。
// 并创建历史记录用于管理撤销和重做操作。
class CommandInvoker {
    private history: Command[] = [];
    private undoneCommands: Command[] = [];

    executeCommand(command: Command): void {
        command.execute();
        this.history.push(command);
        this.undoneCommands = []; // 清空撤销历史
    }

    undo(): void {
        const command = this.history.pop();
        if (command) {
            command.undo();
            this.undoneCommands.push(command);
        }
    }

    redo(): void {
        const command = this.undoneCommands.pop();
        if (command) {
            command.execute();
            this.history.push(command);
        }
    }
}

const editor = new TextEditor();
const invoker = new CommandInvoker();

// 执行一些操作
invoker.executeCommand(new AppendCommand(editor, 'Hello'));
invoker.executeCommand(new AppendCommand(editor, ' World'));
console.log(editor.getContent()); // 输出: Hello World

// 撤销操作
invoker.undo();
console.log(editor.getContent()); // 输出: Hello

// 重做操作
invoker.redo();
console.log(editor.getContent()); // 输出: Hello World
