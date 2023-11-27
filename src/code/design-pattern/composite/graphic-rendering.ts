export {};

// Graphic 接口
interface Graphic {
    draw(): void;
}

// 线条类
class Line implements Graphic {
    draw(): void {
        console.log("Draw a line");
    }
}

// 矩形类
class Rectangle implements Graphic {
    draw(): void {
        console.log("Draw a rectangle");
    }
}

// 圆形类
class Circle implements Graphic {
    draw(): void {
        console.log("Draw a circle");
    }
}

// 组合图形类
class CompositeGraphic implements Graphic {
    private graphics: Graphic[] = [];

    add(graphic: Graphic) {
        this.graphics.push(graphic);
    }

    draw(): void {
        console.log("Composite Graphic:");
        for (let graphic of this.graphics) {
            graphic.draw();
        }
    }
}

// 使用示例
const line = new Line();
const rectangle = new Rectangle();
const circle = new Circle();

const composite = new CompositeGraphic();
composite.add(line);
composite.add(rectangle);
composite.add(circle);

composite.draw();
