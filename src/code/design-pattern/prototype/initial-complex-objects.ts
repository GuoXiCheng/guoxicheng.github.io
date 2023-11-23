export {};

interface Prototype {
    clone(): Prototype;
}

class ComplexObject implements Prototype {
    private partA: string;
    private partB: string;
    private partC: string;

    constructor() {
        // 初始化可能是一个复杂的过程
        this.partA = 'Initialization of Part A';
        this.partB = 'Initialization of Part B';
        this.partC = 'Initialization of Part C';
    }

    // 示例方法，用于显示状态
    showState(): void {
        console.log(`Part A: ${this.partA}, Part B: ${this.partB}, Part C: ${this.partC}`);
    }

    clone(): this {
        // 提供一个深拷贝
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
}

function main() {
    // 创建并初始化原型实例
    const prototype = new ComplexObject();
    prototype.showState(); // 显示初始状态

    // 使用原型复制来创建新实例，而不需要重新初始化
    const clone1 = prototype.clone();
    const clone2 = prototype.clone();

    // 显示克隆对象的状态，确认它们已经被正确初始化
    clone1.showState();
    clone2.showState();
}

main();
