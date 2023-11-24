export {};

interface Mediator {
    notify(sender: object, event: string): void;
}

class Button {
    constructor(private mediator: Mediator) {}

    click(): void {
        console.log('Button clicked');
        this.mediator.notify(this, 'click');
    }

    disable(): void {
        console.log('Button disabled');
        // 实际的禁用逻辑
    }
}

class TextBox {
    constructor(private mediator: Mediator) {}

    textChanged(): void {
        console.log('TextBox text changed');
        this.mediator.notify(this, 'textChanged');
    }

    setText(text: string): void {
        console.log(`TextBox text set to: ${text}`);
        // 实际的设置文本逻辑
    }
}

class List {
    constructor(private mediator: Mediator) {}

    selectionChanged(): void {
        console.log('List selection changed');
        this.mediator.notify(this, 'selectionChanged');
    }

    getSelectedValue(): string {
        // 实际获取选中值的逻辑
        return 'Selected Value';
    }
}

class ConcreteMediator implements Mediator {
    private button: Button;
    private textBox: TextBox;
    private list: List;

    constructor() {
        this.button = new Button(this);
        this.textBox = new TextBox(this);
        this.list = new List(this);
    }

    notify(sender: object, event: string): void {
        if (event === 'click') {
            // 处理按钮点击事件
        } else if (event === 'textChanged') {
            // 当文本框文本更改时，可能的逻辑
            this.list.selectionChanged(); // 例如更新列表
        } else if (event === 'selectionChanged') {
            // 当列表选择更改时，可能的逻辑
            this.textBox.setText(this.list.getSelectedValue()); // 例如更新文本框
        }
    }
}

const mediator = new ConcreteMediator();
// 使用mediator来协调按钮、文本框和列表的交互

// 模拟用户交互
mediator.notify(mediator, 'textChanged');
mediator.notify(mediator, 'selectionChanged');
