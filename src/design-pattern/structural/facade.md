# 外观模式


::: playground#ts 外观模式交互演示

@file index.ts

```ts
class SubSystemA {
    public operationA() {
        return "operate system A";
    }
}

class SubSystemB {
    public operationB() {
        return "operate system B";
    }
}

class Facade {
    private subsystemA: SubSystemA;
    private subsystemB: SubSystemB;

    constructor(subsystemA: SubSystemA | null = null, subsystemB: SubSystemB | null = null) {
        this.subsystemA = subsystemA || new SubSystemA();
        this.subsystemB = subsystemB || new SubSystemB();
    }

    public operation() {
        const operateReusltA = this.subsystemA.operationA();
        console.log(operateReusltA);

        const operateResultB = this.subsystemB.operationB();
        console.log(operateResultB);
    }
}

const subsystemA = new SubSystemA();
const subsystemB = new SubSystemB();

const facade = new Facade(subsystemA, subsystemB);
facade.operation();
```

:::