export {};

class Printer {
    private static instance: Printer;

    // 私有构造函数确保外部不能直接实例化
    private constructor() {
        // 初始化打印机设置
    }

    // 提供静态方法获取类的实例
    public static getInstance(): Printer {
        if (!Printer.instance) {
            Printer.instance = new Printer();
        }
        return Printer.instance;
    }

    // 打印方法
    public print(document: string): void {
        console.log(`Printing: ${document}`);
        // 实际的打印逻辑
    }

    // 其他与打印机相关的方法
    // ...
}

// 使用单例打印机
const printer = Printer.getInstance();
printer.print("Hello, world!"); // 执行打印操作
