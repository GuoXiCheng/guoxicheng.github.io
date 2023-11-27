export {};

class Service {
    performTask(): void {
        console.log("Performing a task");
        // ... 任务相关的代码 ...
    }
}

abstract class ServiceDecorator implements Service {
    protected wrapped: Service;

    constructor(service: Service) {
        this.wrapped = service;
    }

    performTask(): void {
        this.wrapped.performTask();
    }
}

class LoggingDecorator extends ServiceDecorator {
    performTask(): void {
        console.log("Logging: Task is starting");
        super.performTask();
        console.log("Logging: Task has finished");
    }
}

class MonitoringDecorator extends ServiceDecorator {
    performTask(): void {
        const startTime = new Date();
        super.performTask();
        const endTime = new Date();
        console.log(`Monitoring: Task took ${endTime.getTime() - startTime.getTime()} milliseconds`);
    }
}

let service = new Service();
service = new LoggingDecorator(service);
service = new MonitoringDecorator(service);

service.performTask(); 
// 这将输出：
// Logging: Task is starting
// Performing a task
// Logging: Task has finished
// Monitoring: Task took [执行时间] milliseconds
