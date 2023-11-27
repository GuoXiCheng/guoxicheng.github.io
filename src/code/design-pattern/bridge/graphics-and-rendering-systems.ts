export {};

// 渲染API接口
interface RenderAPI {
    renderShape(shape: string): void;
}

// 具体的渲染API类
class OpenGLAPI implements RenderAPI {
    renderShape(shape: string): void {
        console.log(`Rendering ${shape} with OpenGL`);
    }
}

class DirectXAPI implements RenderAPI {
    renderShape(shape: string): void {
        console.log(`Rendering ${shape} with DirectX`);
    }
}

// 图形抽象类
abstract class Shape {
    protected api: RenderAPI;

    constructor(api: RenderAPI) {
        this.api = api;
    }

    abstract draw(): void;
}

// 具体的图形类
class Circle extends Shape {
    draw(): void {
        this.api.renderShape('Circle');
    }
}

class Rectangle extends Shape {
    draw(): void {
        this.api.renderShape('Rectangle');
    }
}

// 使用示例
const openGL = new OpenGLAPI();
const circle = new Circle(openGL);
circle.draw();

const directX = new DirectXAPI();
const rectangle = new Rectangle(directX);
rectangle.draw();
