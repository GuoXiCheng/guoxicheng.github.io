export {};

// 产品接口
interface UIElement {
    render(): void;
}

// 具体产品类
class WindowsButton implements UIElement {
    render(): void {
        console.log("Rendering a Windows style button");
    }
}

class MacOSButton implements UIElement {
    render(): void {
        console.log("Rendering a MacOS style button");
    }
}

class LinuxButton implements UIElement {
    render(): void {
        console.log("Rendering a Linux style button");
    }
}

// 工厂接口
abstract class UIFactory {
    abstract createButton(): UIElement;
}

// 具体工厂类
class WindowsFactory extends UIFactory {
    createButton(): UIElement {
        return new WindowsButton();
    }
}

class MacOSFactory extends UIFactory {
    createButton(): UIElement {
        return new MacOSButton();
    }
}

class LinuxFactory extends UIFactory {
    createButton(): UIElement {
        return new LinuxButton();
    }
}

// 使用工厂方法
function clientCode(factory: UIFactory) {
    const button = factory.createButton();
    button.render();
}

// 根据不同的操作系统创建不同的UI元素
clientCode(new WindowsFactory());
clientCode(new MacOSFactory());
clientCode(new LinuxFactory());
