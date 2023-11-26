export {};

// 日志策略接口
interface LogStrategy {
    log(message: string): void;
}

// 文件日志策略
class FileLogStrategy implements LogStrategy {
    log(message: string): void {
        console.log(`Writing to file: ${message}`);
        // 实际文件写入逻辑
    }
}

// 数据库日志策略
class DatabaseLogStrategy implements LogStrategy {
    log(message: string): void {
        console.log(`Saving to database: ${message}`);
        // 实际数据库保存逻辑
    }
}

// 网络日志策略
class NetworkLogStrategy implements LogStrategy {
    log(message: string): void {
        console.log(`Sending over network: ${message}`);
        // 实际网络发送逻辑
    }
}

// 日志上下文类
class Logger {
    private strategy: LogStrategy;

    constructor(strategy: LogStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: LogStrategy) {
        this.strategy = strategy;
    }

    log(message: string): void {
        this.strategy.log(message);
    }
}

// 示例使用
const logger = new Logger(new FileLogStrategy());
logger.log("File log example");

// 更改策略为数据库日志
logger.setStrategy(new DatabaseLogStrategy());
logger.log("Database log example");

// 更改策略为网络日志
logger.setStrategy(new NetworkLogStrategy());
logger.log("Network log example");
