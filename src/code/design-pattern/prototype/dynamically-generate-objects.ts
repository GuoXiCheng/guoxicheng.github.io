export {};

interface Prototype {
    clone(): Prototype;
}

class ConcretePrototypeA implements Prototype {
    clone(): this {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
}

class ConcretePrototypeB implements Prototype {
    clone(): this {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
}

class PrototypeRegistry {
    private prototypes = new Map<string, Prototype>();

    registerPrototype(name: string, prototype: Prototype): void {
        this.prototypes.set(name, prototype);
    }

    getPrototype(name: string): Prototype | undefined {
        const prototype = this.prototypes.get(name);
        return prototype ? prototype.clone() : undefined;
    }
}

function main() {
    const registry = new PrototypeRegistry();
    
    // 注册原型
    registry.registerPrototype("PrototypeA", new ConcretePrototypeA());
    registry.registerPrototype("PrototypeB", new ConcretePrototypeB());

    // 根据需要动态创建对象
    const prototypeA = registry.getPrototype("PrototypeA");
    const prototypeB = registry.getPrototype("PrototypeB");

    console.log(prototypeA instanceof ConcretePrototypeA); // 输出: true
    console.log(prototypeB instanceof ConcretePrototypeB); // 输出: true
}

main();
