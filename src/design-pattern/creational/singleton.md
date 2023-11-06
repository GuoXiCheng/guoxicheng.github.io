---
order: 5
---
# 单例模式

## 懒汉式

::: playground#ts 单例模式之懒汉式交互演示

@file index.ts

```ts
class Singleton {
    private static instance: Singleton;

    private constructor() {
        // 构造函数私有化，防止外部实例化
    }

    public static getInstance() {
        if (!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    }

    public someMethod() {
        console.log("execute some method...")
    }
}

const singleton = Singleton.getInstance()
singleton.someMethod()
```

:::

## 饿汉式


::: playground#ts 单例模式之饿汉式交互演示

@file index.ts

```ts
class Singleton {
    private static instance: Singleton = new Singleton();

    public static getInstance() {
        return this.instance;
    }

    public someMethod() {
        console.log("execute some method...");
    }
}

const singleton = new Singleton();
singleton.someMethod();
```

:::