export {};

// 日志记录器接口
interface Logger {
    log(message: string): void;
}

// 默认日志记录器实现
class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log(`[ConsoleLogger] ${message}`);
    }
}

// 包含工厂方法的类
class LoggerFactory {
    // 工厂方法
    createLogger(): Logger {
        return new ConsoleLogger();
    }
}

// 用户自定义日志记录器
class CustomLogger implements Logger {
    log(message: string): void {
        console.log(`[CustomLogger] ${message}`);
    }
}

// 用户扩展的工厂
class CustomLoggerFactory extends LoggerFactory {
    createLogger(): Logger {
        return new CustomLogger();
    }
}

// 客户端代码
function clientCode(factory: LoggerFactory) {
    const logger = factory.createLogger();
    logger.log("This is a log message.");
}

// 使用默认日志记录器
clientCode(new LoggerFactory());

// 使用自定义日志记录器
clientCode(new CustomLoggerFactory());
