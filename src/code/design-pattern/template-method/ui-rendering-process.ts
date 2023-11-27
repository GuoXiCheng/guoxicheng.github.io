export {};

abstract class UIComponent {
    // 这是模板方法，定义了UI组件的渲染流程
    public render(): void {
        this.initialize();
        this.layout();
        this.draw();
    }

    // 这些是在子类中可能被覆盖的抽象方法
    protected abstract initialize(): void;
    protected abstract layout(): void;
    protected abstract draw(): void;
}

// Button控件的具体实现
class Button extends UIComponent {
    protected initialize(): void {
        console.log('Initializing Button...');
    }

    protected layout(): void {
        console.log('Laying out Button...');
    }

    protected draw(): void {
        console.log('Drawing Button...');
    }
}

// TextBox控件的具体实现
class TextBox extends UIComponent {
    protected initialize(): void {
        console.log('Initializing TextBox...');
    }

    protected layout(): void {
        console.log('Laying out TextBox...');
    }

    protected draw(): void {
        console.log('Drawing TextBox...');
    }
}

// 使用
const button = new Button();
button.render();

const textBox = new TextBox();
textBox.render();
