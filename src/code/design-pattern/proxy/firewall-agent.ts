export {};

interface INetworkService {
    fetchData(request: string): Promise<string>;
}

class NetworkService implements INetworkService {
    async fetchData(request: string): Promise<string> {
        console.log(`NetworkService: Fetching data for request: ${request}`);
        // 模拟网络请求
        await new Promise(resolve => setTimeout(resolve, 1000));
        return `Data for ${request}`;
    }
}

class FirewallProxy implements INetworkService {
    private networkService: NetworkService;
    private bannedRequests: Set<string>;

    constructor(networkService: NetworkService) {
        this.networkService = networkService;
        this.bannedRequests = new Set(["badRequest", "unauthorizedRequest"]);
    }

    async fetchData(request: string): Promise<string> {
        if (this.bannedRequests.has(request)) {
            console.log(`FirewallProxy: Access denied for request: ${request}`);
            throw new Error("Request blocked by firewall");
        }

        return await this.networkService.fetchData(request);
    }
}

async function clientCode(service: INetworkService) {
    try {
        console.log(await service.fetchData("goodRequest"));
        console.log(await service.fetchData("badRequest"));
    } catch (error) {
        console.error(`Error: ${(error as Error).message}`);
    }
}

const service = new NetworkService();
const firewallProxy = new FirewallProxy(service);
clientCode(firewallProxy);
