export {};

interface GUIComponent {
    accept(visitor: GUIVisitor): void;
}

class Button implements GUIComponent {
    accept(visitor: GUIVisitor): void {
        visitor.visitButton(this);
    }

    // Button 特有的方法
    click(): void {
        console.log("Button clicked");
    }
}

class TextBox implements GUIComponent {
    accept(visitor: GUIVisitor): void {
        visitor.visitTextBox(this);
    }

    // TextBox 特有的方法
    setText(text: string): void {
        console.log(`Text set in TextBox: ${text}`);
    }
}

interface GUIVisitor {
    visitButton(button: Button): void;
    visitTextBox(textBox: TextBox): void;
}

class LayoutVisitor implements GUIVisitor {
    visitButton(button: Button): void {
        console.log("Laying out button");
    }

    visitTextBox(textBox: TextBox): void {
        console.log("Laying out text box");
    }
}

class RenderVisitor implements GUIVisitor {
    visitButton(button: Button): void {
        console.log("Rendering button");
    }

    visitTextBox(textBox: TextBox): void {
        console.log("Rendering text box");
    }
}

class EventHandlingVisitor implements GUIVisitor {
    visitButton(button: Button): void {
        button.click();
        console.log("Handling button click event");
    }

    visitTextBox(textBox: TextBox): void {
        textBox.setText("Hello");
        console.log("Handling text box text change event");
    }
}

const button = new Button();
const textBox = new TextBox();

const layoutVisitor = new LayoutVisitor();
const renderVisitor = new RenderVisitor();
const eventHandlingVisitor = new EventHandlingVisitor();

button.accept(layoutVisitor);
button.accept(renderVisitor);
button.accept(eventHandlingVisitor);

textBox.accept(layoutVisitor);
textBox.accept(renderVisitor);
textBox.accept(eventHandlingVisitor);