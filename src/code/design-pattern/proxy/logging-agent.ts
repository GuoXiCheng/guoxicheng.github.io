export {};

interface IService {
    performTask(action: string): void;
}

class Service implements IService {
    performTask(action: string): void {
        console.log(`Service: Performing task '${action}'`);
    }
}

class LoggingProxy implements IService {
    private service: Service;
    private log: string[] = [];

    constructor(service: Service) {
        this.service = service;
    }

    performTask(action: string): void {
        const logMessage = `LoggingProxy: Task '${action}' performed at ${new Date().toISOString()}`;
        this.log.push(logMessage);
        console.log(logMessage);

        this.service.performTask(action);
    }

    getLog(): string[] {
        return this.log;
    }
}

function clientCode(service: IService) {
    service.performTask("Task1");
    service.performTask("Task2");
}

const realService = new Service();
const proxy = new LoggingProxy(realService);
clientCode(proxy);

console.log("Logged Operations:");
console.log(proxy.getLog().join("\n"));
