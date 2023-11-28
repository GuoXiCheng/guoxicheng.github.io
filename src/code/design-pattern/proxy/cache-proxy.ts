export {};

interface IService {
    fetchData(param: string): Promise<string>;
}

class Service implements IService {
    async fetchData(param: string): Promise<string> {
        console.log(`Service: Fetching data for ${param} (expensive operation)`);
        // 模拟网络请求或其他昂贵操作
        await new Promise(resolve => setTimeout(resolve, 1000));
        return `Data for ${param}`;
    }
}

class CachingProxy implements IService {
    private service: Service;
    private cache: Map<string, string>;

    constructor(service: Service) {
        this.service = service;
        this.cache = new Map();
    }

    async fetchData(param: string): Promise<string> {
        if (this.cache.has(param)) {
            console.log(`CachingProxy: Returning cached data for ${param}`);
            return this.cache.get(param)!;
        }

        const data = await this.service.fetchData(param);
        this.cache.set(param, data);
        console.log(`CachingProxy: Cache updated for ${param}`);
        return data;
    }
}

async function clientCode(service: IService) {
    console.log(await service.fetchData("param1"));
    // 第二次调用相同参数时，将从缓存中获取数据
    console.log(await service.fetchData("param1"));
}

const service = new Service();
const proxy = new CachingProxy(service);
clientCode(proxy);
