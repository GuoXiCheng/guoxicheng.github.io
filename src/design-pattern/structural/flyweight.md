# 享元模式


::: playground#ts 享元模式交互演示

@file index.ts

```ts
class Flyweight {
    private sharedState: any;

    constructor(sharedState: any) {
        this.sharedState = sharedState;
    }

    public operation(uniqueState: any) {
        const s = JSON.stringify(this.sharedState);
        const u = JSON.stringify(uniqueState);
        console.log(`Flyweight Display sharedState: ${s} and uniqueState: ${u}`);
    }
}

class FlyweightFactory {
    private flyweights: { [key: string]: Flyweight } = [] as any;

    constructor(initialFlyweights: string[][]) {
        for (const state of initialFlyweights) {
            this.flyweights[this.getKey(state)] = new Flyweight(state);
        }
    }

    private getKey(state: string[]): string {
        return state.join("_");
    }

    public getFlyweight(sharedState: string[]): Flyweight {
        const key = this.getKey(sharedState);

        if (!(key in this.flyweights)) {
            console.log("cannot find flyweight, create new");
            this.flyweights[key] = new Flyweight(sharedState);
        } else {
            console.log("reusing existing flyweight");
        }
        return this.flyweights[key];
    }

}

const factory = new FlyweightFactory([
    ['Chevrolet', 'Camaro2018', 'pink'],
    ['Mercedes Benz', 'C300', 'black'],
    ['Mercedes Benz', 'C500', 'red']
]);
factory.getFlyweight(['Chevrolet', 'Camaro2018', 'pink']).operation(['Amir', 'Drive', 'Tehran']);
factory.getFlyweight(['Mercedes Benz', 'C300', 'black']).operation(['Sara', 'Drive', 'Tehran']);
```

:::