export {};

// 抽象产品：窗口
interface MyWindow {
    render(): void;
}

// 抽象产品：按钮
interface Button {
    render(): void;
}

// 抽象产品：文本框
interface TextBox {
    render(): void;
}

// Windows风格的具体产品
class WindowsWindow implements MyWindow {
    render() {
        console.log("Rendering Windows style window.");
    }
}

class WindowsButton implements Button {
    render() {
        console.log("Rendering Windows style button.");
    }
}

class WindowsTextBox implements TextBox {
    render() {
        console.log("Rendering Windows style text box.");
    }
}

// MacOS风格的具体产品
class MacOSWindow implements MyWindow {
    render() {
    console.log("Rendering MacOS style window.");
    }
}

class MacOSButton implements Button {
    render() {
        console.log("Rendering MacOS style button.");
    }
}

class MacOSTextBox implements TextBox {
    render() {
        console.log("Rendering MacOS style text box.");
    }
}

// 抽象工厂
interface UIFactory {
    createWindow(): MyWindow;
    createButton(): Button;
    createTextBox(): TextBox;
}

// 具体工厂：创建Windows风格的UI组件
class WindowsFactory implements UIFactory {
    createWindow(): MyWindow {
        return new WindowsWindow();
    }
    createButton(): Button {
        return new WindowsButton();
    }
    createTextBox(): TextBox {
        return new WindowsTextBox();
    }
}

// 具体工厂：创建MacOS风格的UI组件
class MacOSFactory implements UIFactory {
    createWindow(): MyWindow {
        return new MacOSWindow();
    }
    createButton(): Button {
        return new MacOSButton();
    }
    createTextBox(): TextBox {
        return new MacOSTextBox();
    }
}

function clientCode(factory: UIFactory) {
    const window = factory.createWindow();
    const button = factory.createButton();
    const textBox = factory.createTextBox();

    window.render();
    button.render();
    textBox.render();
}

// 使用Windows风格的UI工厂
clientCode(new WindowsFactory());

// 使用MacOS风格的UI工厂
clientCode(new MacOSFactory());
