export {};

interface IRemoteService {
    fetchData(): Promise<string>;
}

class RemoteService implements IRemoteService {
    async fetchData(): Promise<string> {
        // 模拟网络延迟
        await new Promise(resolve => setTimeout(resolve, 1000));
        return "Data from remote service";
    }
}

class RemoteServiceProxy implements IRemoteService {
    private service: RemoteService;

    constructor() {
        this.service = new RemoteService();
    }

    async fetchData(): Promise<string> {
        console.log("Proxy: Delegating fetching data to remote service...");
        const data = await this.service.fetchData();
        console.log("Proxy: Data fetched from remote service.");
        return data;
    }
}

async function clientCode(service: IRemoteService) {
    const data = await service.fetchData();
    console.log(`Client: Received data: ${data}`);
}

const proxy = new RemoteServiceProxy();
clientCode(proxy);
