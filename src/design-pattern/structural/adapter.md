# 适配器模式


::: playground#ts 适配器模式交互演示

@file index.ts

```ts
class OldSystem {
    public request(): string {
        return "Old System";
    }
}

interface NewInterface {
    request(): string;
}

class Adapter implements NewInterface {

    private oldSystem: OldSystem;

    constructor (oldSystem: OldSystem) {
        this.oldSystem = oldSystem;
    }

    request(): string {
        const oldRequest = this.oldSystem.request();
        return oldRequest.replace("Old", "New");
    }
}

const oldSystem = new OldSystem();
const adapter = new Adapter(oldSystem);
const result = adapter.request();
console.log(result);
```

:::