export {};

class GlobalConfig {
    private static instance: GlobalConfig;
    private config: Record<string, any>;

    // 构造函数设为私有，防止外部使用 new 关键字创建实例
    private constructor() {
        this.config = {
            // 默认的配置项
            databaseConnection: 'DefaultConnection',
            applicationSetting: 'DefaultSetting',
            // 其他配置项...
        };
    }

    // 提供一个静态方法用于获取类的实例
    public static getInstance(): GlobalConfig {
        if (!GlobalConfig.instance) {
            GlobalConfig.instance = new GlobalConfig();
        }
        return GlobalConfig.instance;
    }

    // 获取配置项的方法
    public getConfig(key: string): any {
        return this.config[key];
    }

    // 设置配置项的方法
    public setConfig(key: string, value: any): void {
        this.config[key] = value;
    }
}

// 使用单例
const config = GlobalConfig.getInstance();
console.log(config.getConfig('databaseConnection')); // 输出默认的数据库连接配置

// 更改配置项
config.setConfig('databaseConnection', 'NewDatabaseConnection');
console.log(config.getConfig('databaseConnection')); // 输出新的数据库连接配置
