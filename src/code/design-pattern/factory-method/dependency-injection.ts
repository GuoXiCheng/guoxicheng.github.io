export {};

interface Logger {
    log(message: string): void;
}


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

interface LoggerFactory {
    createLogger(): Logger;
}

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
