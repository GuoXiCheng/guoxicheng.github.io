export {};

interface GUIComponent {
    draw(): void;
}

class TextBox implements GUIComponent {
    draw(): void {
        console.log("Drawing a text box");
    }
}

class Button implements GUIComponent {
    draw(): void {
        console.log("Drawing a button");
    }
}

class GUIComponentDecorator implements GUIComponent {
    protected component: GUIComponent;

    constructor(component: GUIComponent) {
        this.component = component;
    }

    draw(): void {
        this.component.draw();
    }
}

class ScrollbarDecorator extends GUIComponentDecorator {
    draw(): void {
        super.draw();
        console.log("Adding a scrollbar");
    }
}

class BorderDecorator extends GUIComponentDecorator {
    draw(): void {
        super.draw();
        console.log("Adding a border");
    }
}

class ShadowDecorator extends GUIComponentDecorator {
    draw(): void {
        super.draw();
        console.log("Adding a shadow effect");
    }
}

let textBox: GUIComponent = new TextBox();
textBox = new BorderDecorator(textBox);
textBox = new ShadowDecorator(textBox);

textBox.draw(); // 这将绘制一个有边框和阴影的文本框

let button: GUIComponent = new Button();
button = new ScrollbarDecorator(button);

button.draw(); // 这将绘制一个有滚动条的按钮