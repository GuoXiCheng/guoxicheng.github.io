export {};

// 定义一个数据流接口作为所有具体数据流和装饰者的共同接口
interface DataStream {
    read(): string;
    write(data: string): void;
}

// 创建具体的数据流类
class FileDataStream implements DataStream {
    read(): string {
        // 从文件读取数据
        return "data from file";
    }

    write(data: string): void {
        // 向文件写入数据
        console.log(`Writing ${data} to file`);
    }
}

// 创建装饰者基类
abstract class DataStreamDecorator implements DataStream {
    protected wrappedStream: DataStream;

    constructor(wrappedStream: DataStream) {
        this.wrappedStream = wrappedStream;
    }

    read(): string {
        return this.wrappedStream.read();
    }

    write(data: string): void {
        this.wrappedStream.write(data);
    }
}

// 创建具体的装饰者类
class EncryptionDecorator extends DataStreamDecorator {
    read(): string {
        const data = this.wrappedStream.read();
        // 解密数据
        return `decrypted(${data})`;
    }

    write(data: string): void {
        // 加密数据
        this.wrappedStream.write(`encrypted(${data})`);
    }
}

class CompressionDecorator extends DataStreamDecorator {
    read(): string {
        const data = this.wrappedStream.read();
        // 解压缩数据
        return `decompressed(${data})`;
    }

    write(data: string): void {
        // 压缩数据
        this.wrappedStream.write(`compressed(${data})`);
    }
}

const fileStream = new FileDataStream();
const encryptedStream = new EncryptionDecorator(fileStream);
const compressedAndEncryptedStream = new CompressionDecorator(encryptedStream);

// 压缩并加密数据，然后写入文件
compressedAndEncryptedStream.write("data"); 

// 从文件读取数据，解密并解压缩
console.log(compressedAndEncryptedStream.read()); 
