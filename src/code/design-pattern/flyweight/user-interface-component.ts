export {};

class ComponentFlyweight {
    private readonly type: string;

    constructor(type: string) {
        this.type = type;
    }

    public render(position: string): string {
        return `Rendering a ${this.type} at ${position}.`;
    }
}

class FlyweightFactory {
    private components: {[key: string]: ComponentFlyweight} = {};

    public getComponent(type: string): ComponentFlyweight {
        if (!this.components[type]) {
            this.components[type] = new ComponentFlyweight(type);
        }
        return this.components[type];
    }
}

class UI {
    private components: { component: ComponentFlyweight; position: string; }[] = [];
    private factory: FlyweightFactory = new FlyweightFactory();

    public addComponent(type: string, position: string): void {
        const component = this.factory.getComponent(type);
        this.components.push({ component, position });
    }

    public render(): void {
        for (const { component, position } of this.components) {
            console.log(component.render(position));
        }
    }
}

const ui = new UI();

// 添加组件
ui.addComponent("Button", "top-left");
ui.addComponent("Icon", "top-right");
ui.addComponent("Button", "bottom-left"); // 会重用之前创建的 'Button' 对象
ui.addComponent("Icon", "bottom-right"); // 会重用之前创建的 'Icon' 对象

// 渲染用户界面
ui.render();
