export {};

abstract class FileSystemComponent {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract getSize(): number;
    abstract print(indentation: string): void;
}

// 文件类（叶子节点）
class MyFile extends FileSystemComponent {
    private size: number;

    constructor(name: string, size: number) {
        super(name);
        this.size = size;
    }

    getSize(): number {
        return this.size;
    }

    print(indentation: string): void {
        console.log(`${indentation}File: ${this.name}, Size: ${this.size}`);
    }
}

// 目录类（复合节点）
class Directory extends FileSystemComponent {
    private components: FileSystemComponent[] = [];

    constructor(name: string) {
        super(name);
    }

    add(component: FileSystemComponent): void {
        this.components.push(component);
    }

    getSize(): number {
        return this.components.reduce((total, component) => total + component.getSize(), 0);
    }

    print(indentation: string): void {
        console.log(`${indentation}Directory: ${this.name}`);
        this.components.forEach(component => component.print(indentation + '  '));
    }
}

const rootDirectory = new Directory('root');
const file1 = new MyFile('file1.txt', 100);
const file2 = new MyFile('file2.txt', 200);
const subDirectory = new Directory('subdir');
const file3 = new MyFile('file3.txt', 300);

rootDirectory.add(file1);
rootDirectory.add(file2);
rootDirectory.add(subDirectory);
subDirectory.add(file3);

// 打印整个文件和目录结构
rootDirectory.print(''); 

// 获取并打印根目录的总大小
console.log(`Total size of root directory: ${rootDirectory.getSize()}`); 
