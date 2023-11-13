# 命令模式

在智能家居系统中，可以通过语音来控制家居设备，例如：通过向智能语言助手发出指令来打开或者关闭灯光。

```ts
<!-- @include: @src/code/design-pattern/command/real-world.ts -->
```

::: playground#ts 命令模式交互演示

@file index.ts

```ts
interface Command {
    execute(): void;
    unexecute(): void;
}

class TextEditor {
    private text = "";

    setText(newText: string) {
        this.text = newText;
    }

    getText() {
        return this.text;
    }
}

class AddTextCommand implements Command {

    private text: string;
    private previousText: string;

    constructor(private receiver: TextEditor, text: string) {
        this.text = text;
        this.previousText = receiver.getText();
    }

    execute(): void {
        this.receiver.setText(this.receiver.getText() + this.text);
    }

    unexecute(): void {
        this.receiver.setText(this.previousText);
    }
}

class CommandManager {
    private history: Command[] = [];

    executeCommand(command: Command) {
        this.history.push(command);
        command.execute();
    }

    undo() {
        const command = this.history.pop();
        if (command) {
            command.unexecute();
        }
    }
}

const editor = new TextEditor();
const commandManager = new CommandManager();

const addHelloCommand = new AddTextCommand(editor, "hello");
commandManager.executeCommand(addHelloCommand);

console.log(editor.getText());

const addWorldCommand = new AddTextCommand(editor, "world");
commandManager.executeCommand(addWorldCommand);

console.log(editor.getText());

commandManager.undo();

console.log(editor.getText());
```

:::