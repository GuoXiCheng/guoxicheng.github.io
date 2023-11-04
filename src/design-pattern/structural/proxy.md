# 代理模式


::: playground#ts 代理模式交互演示

@file index.ts

```ts
interface Subject {
    request(): void;
}

class RealSubject implements Subject {
    request(): void {
        console.log("RealSubject handled Request");
    }
}

class MyProxy implements Subject {
    private realSubject: RealSubject;

    constructor(realSubject: RealSubject) {
        this.realSubject = realSubject;
    }

    request(): void {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }

    private checkAccess() {
        return Math.round((Math.random()*10)) % 2 === 0;
    }

    private logAccess() {
        console.log("Logging");
    }
}

const realSubject = new RealSubject();
const myProxy = new MyProxy(realSubject);

myProxy.request();
```

:::