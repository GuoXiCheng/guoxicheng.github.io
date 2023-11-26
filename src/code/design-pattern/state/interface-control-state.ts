export {};

// 状态接口
interface ButtonState {
    click(buttonContext: ButtonContext): void;
    hover(buttonContext: ButtonContext): void;
    leave(buttonContext: ButtonContext): void;
}

// 按钮上下文
class ButtonContext {
    private state: ButtonState;

    constructor(state: ButtonState) {
        this.state = state;
    }

    setState(state: ButtonState): void {
        this.state = state;
        console.log(`按钮状态变为：${state.constructor.name}`);
    }

    click(): void {
        this.state.click(this);
    }

    hover(): void {
        this.state.hover(this);
    }

    leave(): void {
        this.state.leave(this);
    }
}

// 具体状态：普通
class NormalState implements ButtonState {
    click(buttonContext: ButtonContext): void {
        console.log('按钮被点击');
        // 可以根据需要切换到其他状态
    }

    hover(buttonContext: ButtonContext): void {
        buttonContext.setState(new HoverState());
    }

    leave(buttonContext: ButtonContext): void {
        // 通常情况下，普通状态下离开不会有特殊行为
    }
}

// 具体状态：悬浮
class HoverState implements ButtonState {
    click(buttonContext: ButtonContext): void {
        console.log('按钮被点击（悬浮状态）');
        // 可以根据需要切换到其他状态
    }

    hover(buttonContext: ButtonContext): void {
        // 悬浮状态下继续悬浮通常不会有特殊行为
    }

    leave(buttonContext: ButtonContext): void {
        buttonContext.setState(new NormalState());
    }
}


const button = new ButtonContext(new NormalState());

button.hover(); // 输出: 按钮状态变为：HoverState
button.click(); // 输出: 按钮被点击（悬浮状态）
button.leave(); // 输出: 按钮状态变为：NormalState
