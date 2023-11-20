export {};

// 备忘录类
class Memento {
    constructor(private state: GameState) {}

    getState(): GameState {
        return this.state;
    }
}

// 发起人类
class GameOriginator {
    private state: GameState;

    constructor(state: GameState) {
        this.state = state;
    }

    save(): Memento {
        return new Memento(this.state);
    }

    restore(memento: Memento): void {
        this.state = memento.getState();
    }

    setState(state: GameState): void {
        this.state = state;
    }

    getState(): GameState {
        return this.state;
    }
}

// 游戏状态
interface GameState {
    level: number;
    score: number;
    // 可以添加更多的游戏相关状态
}

// 负责保存和恢复备忘录的状态管理者类
class GameStateManager {
    private mementos: Memento[] = [];

    addMemento(memento: Memento): void {
        this.mementos.push(memento);
    }

    getMemento(index: number): Memento {
        return this.mementos[index];
    }
}

const game = new GameOriginator({ level: 1, score: 100 });
const manager = new GameStateManager();

// 游戏进展，保存状态
game.setState({ level: 2, score: 200 });
manager.addMemento(game.save());

// 再次游戏进展，保存状态
game.setState({ level: 3, score: 300 });
manager.addMemento(game.save());

// 加载之前的游戏状态
game.restore(manager.getMemento(0));
console.log(game.getState()); // 输出: { level: 2, score: 200 }
