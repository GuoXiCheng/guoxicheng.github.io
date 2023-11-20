export {};

// 定义一个“产品”接口
interface Logger {
    log(message: string): void;
}

// 创建具体的产品类
class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log(`ConsoleLogger: ${message}`);
    }
}

class FileLogger implements Logger {
    log(message: string): void {
        // 假设这里将消息写入文件
        console.log(`FileLogger: ${message}`);
    }
}

// 定义一个“工厂”接口，用于创建“产品”
interface LoggerFactory {
    createLogger(): Logger;
}

// 创建具体的工厂类
class ConsoleLoggerFactory implements LoggerFactory {
    createLogger(): Logger {
        return new ConsoleLogger();
    }
}

class FileLoggerFactory implements LoggerFactory {
    createLogger(): Logger {
        return new FileLogger();
    }
}

function clientCode(factory: LoggerFactory): void {
    const logger = factory.createLogger();
    logger.log("This is a message.");
}

const consoleFactory = new ConsoleLoggerFactory();
clientCode(consoleFactory); // 使用控制台记录器

const fileFactory = new FileLoggerFactory();
clientCode(fileFactory); // 使用文件记录器
