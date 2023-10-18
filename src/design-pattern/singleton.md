# 单例模式

::: code-tabs

@tab 懒汉式

```ts
class Singleton {
    private static instance: Singleton;

    private constructor() {
        // 私有化构造函数，防止外部实例化
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public someMethod(): void {
        console.log("Executing some method...");
    }
}
```

@tab 饿汉式

```ts
class Singleton {
    private static instance: Singleton = new Singleton();

    private constructor() {
        // 私有化构造函数，防止外部实例化
    }

    public static getInstance(): Singleton {
        return Singleton.instance;
    }

    public someMethod(): void {
        console.log("Executing some method...");
    }
}
```

:::