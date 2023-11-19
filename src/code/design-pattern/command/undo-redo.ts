export {};

interface Command {
    execute(): void;
    undo(): void;
}

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
