export {};

abstract class DataProcessor {
    // 模板方法
    public processData(): void {
        const data = this.readData();
        const parsedData = this.parseData(data);
        const processedData = this.processDataStep(parsedData);
        this.outputData(processedData);
    }

    // 声明抽象步骤
    protected abstract readData(): string;
    protected abstract parseData(data: string): any;
    protected abstract processDataStep(data: any): any;
    protected abstract outputData(data: any): void;
}

class JSONDataProcessor extends DataProcessor {
    protected readData(): string {
        // 读取 JSON 数据
        return '{"name": "John", "age": 30}';
    }

    protected parseData(data: string): any {
        // 解析 JSON 数据
        return JSON.parse(data);
    }

    protected processDataStep(data: any): any {
        // 处理数据
        data.processed = true;
        return data;
    }

    protected outputData(data: any): void {
        // 输出数据
        console.log('JSON Data:', data);
    }
}

class XMLDataProcessor extends DataProcessor {
    protected readData(): string {
        // 读取 XML 数据
        return '<user><name>John</name><age>30</age></user>';
    }

    protected parseData(data: string): any {
        // 解析 XML 数据
        // 实现省略...
        return { name: 'John', age: 30 }; // 示例返回值
    }

    protected processDataStep(data: any): any {
        // 处理数据
        data.processed = true;
        return data;
    }

    protected outputData(data: any): void {
        // 输出数据
        console.log('XML Data:', data);
    }
}

const jsonDataProcessor = new JSONDataProcessor();
jsonDataProcessor.processData(); // 将按照 JSON 数据处理流程执行

const xmlDataProcessor = new XMLDataProcessor();
xmlDataProcessor.processData(); // 将按照 XML 数据处理流程执行
