export {};

// 旧组件的接口
interface IOldComponent {
    oldRequest(): string;
}

// 新组件的接口
interface INewComponent {
    newRequest(): string;
}

// 旧组件的实现（将被替换）
class OldComponent implements IOldComponent {
    oldRequest(): string {
        return "Response from Old Component";
    }
}

// 新组件的实现
class NewComponent implements INewComponent {
    newRequest(): string {
        return "Response from New Component";
    }
}

// 适配器类
class ComponentAdapter implements IOldComponent {
    private newComponent: INewComponent;

    constructor(newComponent: INewComponent) {
        this.newComponent = newComponent;
    }

    oldRequest(): string {
        // 将旧组件的调用转换为新组件的调用
        const result = this.newComponent.newRequest();
        return `Adapter: (ADAPTED) ${result}`;
    }
}

// 使用示例
const newComponent = new NewComponent();
const adapter = new ComponentAdapter(newComponent);

console.log(adapter.oldRequest()); // 通过适配器，新组件与旧接口兼容
