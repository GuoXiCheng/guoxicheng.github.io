export {};

// 旧版本 API 的接口
interface IOldAPI {
    requestOld(): string;
}

// 新版本 API 的接口
interface INewAPI {
    requestNew(): string;
}

// 新版本 API 的实现
class NewAPI implements INewAPI {
    requestNew(): string {
        return "Response from New API";
    }
}

// 适配器类
class APIAdapter implements IOldAPI {
    private newApi: INewAPI;

    constructor(newApi: INewAPI) {
        this.newApi = newApi;
    }

    requestOld(): string {
        // 将旧 API 的调用适配为新 API 的调用
        return `Adapter: ${this.newApi.requestNew()}`;
    }
}

// 使用示例
const newApi = new NewAPI();
const adapter = new APIAdapter(newApi);

console.log(adapter.requestOld()); // 通过适配器使用新 API
