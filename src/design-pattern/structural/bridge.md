# 桥接模式


::: playground#ts 桥接模式交互演示

@file index.ts

```ts
interface Color {
    applyColor(): string;
}

class Red implements Color {
    applyColor(): string {
        return "Red";
    }
}

class Blue implements Color {
    applyColor(): string {
        return "Blue";
    }
}

abstract class Shape {
    protected color: Color;

    constructor(color: Color) {
        this.color = color;
    }

    public abstract draw(): string;
}

class Circle extends Shape {
    public draw(): string {
        return `${this.color.applyColor()} Circle`;
    }
}

class Square extends Shape {
    public draw(): string {
        return `${this.color.applyColor()} Square`;
    }
}

const redColor = new Red();
const blueColor = new Blue();

const redCircle = new Circle(redColor);
const blueSquare = new Square(blueColor);

console.log(redCircle.draw());
console.log(blueSquare.draw());
```

:::