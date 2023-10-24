# 责任链模式

::: playground#ts 责任链模式交互演示

@file index.ts

```ts
interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): string | null;
}

abstract class AbstractHandler implements Handler {

    private nextHandler: Handler | null = null;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handle(request: string): string | null {
        if (this.nextHandler != null) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}

class FirstHandler extends AbstractHandler {
    handle(request: string): string | null {
        if (request === "First") {
            return "Handled By First";
        }
        return super.handle(request);
    }
}

class SecondHandler extends AbstractHandler {
    handle(request: string): string | null {
        if (request === "Second") {
            return "Handled By Second";
        }
        return super.handle(request);
    }
}

const firstHandler = new FirstHandler();
const secondHandler = new SecondHandler();

firstHandler.setNext(secondHandler);

const resultFirst = firstHandler.handle("First");
console.log(resultFirst);

const resultSecond = firstHandler.handle("Second");
console.log(resultSecond);
```

:::