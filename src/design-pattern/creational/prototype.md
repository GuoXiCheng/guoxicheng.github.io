---
order: 4
---
# 原型模式


::: playground#ts 原型模式交互演示

@file index.ts

```ts
interface MyPrototype {
    clone(): MyPrototype;
    toString(): string;
}

class ConcretePrototype implements MyPrototype {

    private field: number;

    constructor(field: number) {
        this.field = field;
    }

    clone(): MyPrototype {
        return new ConcretePrototype(this.field);
    }

    toString(): string {
        return `Field: ${this.field}`;
    }
}

const myPrototype = new ConcretePrototype(1001);
const cloneMyPrototype = myPrototype.clone();
const result = cloneMyPrototype.toString(); 
console.log(result);
```

:::