export {};

// UIComponent 接口
interface UIComponent {
    render(): void;
    add?(component: UIComponent): void;
}

// 按钮类
class Button implements UIComponent {
    render(): void {
        console.log("Render a button");
    }
}

// 文本框类
class TextBox implements UIComponent {
    render(): void {
        console.log("Render a text box");
    }
}

// 面板类，可以包含其他组件
class Panel implements UIComponent {
    private components: UIComponent[] = [];

    add(component: UIComponent): void {
        this.components.push(component);
    }

    render(): void {
        console.log("Render a panel with its components:");
        for (const component of this.components) {
            component.render();
        }
    }
}

// 窗口类，作为顶层容器
class MyWindow implements UIComponent {
    private components: UIComponent[] = [];

    add(component: UIComponent): void {
        this.components.push(component);
    }

    render(): void {
        console.log("Render a window with its components:");
        for (const component of this.components) {
            component.render();
        }
    }
}

// 使用示例
const myWindow = new MyWindow();
const panel = new Panel();
const button = new Button();
const textBox = new TextBox();

panel.add(button);
panel.add(textBox);
myWindow.add(panel);

myWindow.render();
