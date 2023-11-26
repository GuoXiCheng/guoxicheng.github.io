export {};

// 状态接口
interface State {
    handle(context: CharacterContext): void;
}

// 角色上下文
class CharacterContext {
    private state: State;

    constructor(state: State) {
        this.state = state;
    }

    setState(state: State): void {
        this.state = state;
    }

    request(): void {
        this.state.handle(this);
    }
}

// 具体状态：运行
class RunningState implements State {
    handle(context: CharacterContext): void {
        console.log('角色正在跑步');
        // 可以根据需要切换到其他状态
        // context.setState(new AnotherState());
    }
}

// 具体状态：跳跃
class JumpingState implements State {
    handle(context: CharacterContext): void {
        console.log('角色正在跳跃');
    }
}

// 具体状态：攻击
class AttackingState implements State {
    handle(context: CharacterContext): void {
        console.log('角色正在攻击');
    }
}

const character = new CharacterContext(new RunningState());
character.request(); // 输出: 角色正在跑步

character.setState(new JumpingState());
character.request(); // 输出: 角色正在跳跃

character.setState(new AttackingState());
character.request(); // 输出: 角色正在攻击
