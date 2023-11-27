export {};

// 当前系统的接口
interface ITarget {
    request(): string;
}

// 第三方库或旧系统的接口
interface IAdaptee {
    specificRequest(): string;
}

// 第三方库或旧系统的实现
class Adaptee implements IAdaptee {
    specificRequest(): string {
        return "Specific response from the Adaptee";
    }
}

// 适配器类
class Adapter implements ITarget {
    private adaptee: IAdaptee;

    constructor(adaptee: IAdaptee) {
        this.adaptee = adaptee;
    }

    request(): string {
        // 适配器将 ITarge 接口的调用转换为 IAdaptee 接口的调用
        const result = this.adaptee.specificRequest();
        return `Adapter: (TRANSLATED) ${result}`;
    }
}

// 使用示例
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);

console.log(adapter.request()); // 适配器使得原本不兼容的接口能够一起工作
