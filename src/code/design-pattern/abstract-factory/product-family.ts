export {};

// 抽象产品接口
interface Button {
    render(): void;
}

interface ScrollBar {
    render(): void;
}

interface Menu {
    render(): void;
}

// 现代风格的具体组件
class ModernButton implements Button {
    render() {
        console.log("Rendering a modern button.");
    }
}

class ModernScrollBar implements ScrollBar {
    render() {
        console.log("Rendering a modern scroll bar.");
    }
}

class ModernMenu implements Menu {
    render() {
        console.log("Rendering a modern menu.");
    }
}

// 经典风格的具体组件
class ClassicButton implements Button {
    render() {
        console.log("Rendering a classic button.");
    }
}

class ClassicScrollBar implements ScrollBar {
    render() {
        console.log("Rendering a classic scroll bar.");
    }
}

class ClassicMenu implements Menu {
    render() {
        console.log("Rendering a classic menu.");
    }
}

// 抽象工厂
interface UIFactory {
    createButton(): Button;
    createScrollBar(): ScrollBar;
    createMenu(): Menu;
}

// 现代风格的工厂
class ModernUIFactory implements UIFactory {
    createButton(): Button {
        return new ModernButton();
    }
    createScrollBar(): ScrollBar {
        return new ModernScrollBar();
    }
    createMenu(): Menu {
        return new ModernMenu();
    }
}

// 经典风格的工厂
class ClassicUIFactory implements UIFactory {
    createButton(): Button {
        return new ClassicButton();
    }
    createScrollBar(): ScrollBar {
        return new ClassicScrollBar();
    }
    createMenu(): Menu {
        return new ClassicMenu();
    }
}

function clientCode(factory: UIFactory) {
    const button = factory.createButton();
    const scrollBar = factory.createScrollBar();
    const menu = factory.createMenu();

    button.render();
    scrollBar.render();
    menu.render();
}

// 使用现代风格的UI工厂
clientCode(new ModernUIFactory());

// 使用经典风格的UI工厂
clientCode(new ClassicUIFactory());
