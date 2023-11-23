export {};

interface Prototype {
    clone(): Prototype;
}

class ConcretePrototype implements Prototype {
    public field: string;

    constructor(field: string) {
        this.field = field;
    }

    clone(): this {
        // 创建当前对象的浅拷贝。对于更复杂的情况，可能需要深拷贝。
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
}

function main() {
    const prototype = new ConcretePrototype("value1");
    const clonedPrototype = prototype.clone();

    console.log(prototype.field); // 输出: value1
    console.log(clonedPrototype.field); // 输出: value1
    console.log(prototype === clonedPrototype); // 输出: false，因为它们是不同的实例
}

main();
