export {};

// 第一个接口和类
interface OldInterface {
    specificRequest(): string;
}

class OldClass implements OldInterface {
    specificRequest(): string {
        return 'Response from OldClass';
    }
}

// 第二个接口和类
interface NewInterface {
    request(): string;
}

class NewClass implements NewInterface {
    request(): string {
        return 'Response from NewClass';
    }
}

// 创建适配器，将旧的接口适配到新的接口
class Adapter implements NewInterface {
    private oldInstance: OldInterface;

    constructor(oldInstance: OldInterface) {
        this.oldInstance = oldInstance;
    }

    request(): string {
        // 调用 OldInterface 的方法，并可能进行一些其他操作
        return this.oldInstance.specificRequest();
    }
}

const oldClassInstance = new OldClass();
const adapter = new Adapter(oldClassInstance);

console.log(adapter.request()); // 将输出 "Response from OldClass"
