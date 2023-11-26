export {};

// 数据处理策略接口
interface DataStrategy {
    processData(data: string): string;
}

// 压缩策略
class CompressionStrategy implements DataStrategy {
    processData(data: string): string {
        // 这里只是一个示意，实际压缩逻辑会更复杂
        return `Compressed data: ${data}`;
    }
}

// 加密策略
class EncryptionStrategy implements DataStrategy {
    processData(data: string): string {
        // 这里只是一个示意，实际加密逻辑会更复杂
        return `Encrypted data: ${data}`;
    }
}

// 数据处理上下文类
class DataContext {
    private strategy: DataStrategy;

    constructor(strategy: DataStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: DataStrategy) {
        this.strategy = strategy;
    }

    process(data: string): string {
        return this.strategy.processData(data);
    }
}

// 示例使用
const dataContext = new DataContext(new CompressionStrategy());
console.log(dataContext.process("Example data"));

// 更改策略为加密
dataContext.setStrategy(new EncryptionStrategy());
console.log(dataContext.process("Example data"));