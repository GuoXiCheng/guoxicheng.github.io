# 状态模式


::: playground#ts 状态模式交互演示

@file index.ts

```ts
interface State {
    handle(context: Context): void;
}

class OnState implements State {
    handle(context: Context): void {
        console.log("Turning On");
        context.setState(new OffState());
    }
}

class OffState implements State {
    handle(context: Context): void {
        console.log("Turning Off");
        context.setState(new OnState());
    }
}

class Context {
    private state: State;

    constructor(state: State) {
        this.state = state;
    }

    setState(state: State) {
        this.state = state;
    }

    handle(): void {
        this.state.handle(this);
    }
}

const light = new Context(new OnState());

light.handle();

light.handle();
```

:::