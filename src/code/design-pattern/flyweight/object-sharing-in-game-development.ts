export {};

class GraphicFlyweight {
    private readonly type: string;

    constructor(type: string) {
        this.type = type;
    }

    public render(x: number, y: number): string {
        return `Rendering a ${this.type} at (${x}, ${y}).`;
    }
}

class FlyweightFactory {
    private graphics: {[key: string]: GraphicFlyweight} = {};

    public getGraphic(type: string): GraphicFlyweight {
        if (!this.graphics[type]) {
            this.graphics[type] = new GraphicFlyweight(type);
        }
        return this.graphics[type];
    }
}

class Scene {
    private graphics: { graphic: GraphicFlyweight; x: number; y: number; }[] = [];
    private factory: FlyweightFactory = new FlyweightFactory();

    public addGraphic(type: string, x: number, y: number): void {
        const graphic = this.factory.getGraphic(type);
        this.graphics.push({ graphic, x, y });
    }

    public render(): void {
        for (const { graphic, x, y } of this.graphics) {
            console.log(graphic.render(x, y));
        }
    }
}

const scene = new Scene();

// 添加图形对象
scene.addGraphic("Tree", 1, 2);
scene.addGraphic("Cloud", 5, 3);
scene.addGraphic("Grass", 3, 4);
scene.addGraphic("Tree", 2, 6); // 会重用之前创建的 'Tree' 对象

// 渲染场景
scene.render();
