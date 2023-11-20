export {};

// 定义一个原型接口，包含一个克隆方法
interface Prototype {
    clone(): Prototype;
}

// 具体原型类
class ComplexObject implements Prototype {
    private data: number[];

    constructor(data?: number[]) {
        if (data) {
            // 通过克隆创建对象时，直接使用提供的数据
            console.log("Cheap clone process");
            this.data = data;
        } else {
            // 首次创建对象时，执行高成本操作
            console.log("Expensive creation process");
            this.data = this.expensiveInitialization();
        }
    }

    private expensiveInitialization(): number[] {
        // 这里模拟一些成本高昂的操作
        return [1, 2, 3]; // 模拟复杂数据
    }

    clone(): Prototype {
        // 使用现有数据创建一个新对象，避免重复高成本操作
        return new ComplexObject([...this.data]);
    }
}

const original = new ComplexObject(); // 创建一个原型实例
const clone = original.clone(); // 克隆原型实例，避免重复高成本的初始化

console.log("Original:", original);
console.log("Clone:", clone);