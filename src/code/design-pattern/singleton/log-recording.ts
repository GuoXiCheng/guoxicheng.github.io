export {};

class Logger {
    private static instance: Logger;

    // 私有构造函数确保不会外部创建多个实例
    private constructor() {}

    // 公共静态方法提供全局访问点以获取日志记录器实例
    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    // 日志记录方法
    public log(message: string): void {
        console.log(`${new Date().toISOString()}: ${message}`);
    }

    // 其他可能的方法，如错误记录、警告记录等
    public error(message: string): void {
        console.error(`${new Date().toISOString()}: ERROR: ${message}`);
    }

    public warn(message: string): void {
        console.warn(`${new Date().toISOString()}: WARNING: ${message}`);
    }
}

// 使用日志记录器
const logger = Logger.getInstance();
logger.log("这是一个日志消息。");
logger.error("这是一个错误消息。");
logger.warn("这是一个警告消息。");
