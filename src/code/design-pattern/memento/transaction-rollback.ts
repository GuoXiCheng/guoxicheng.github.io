export {};

class Memento {
    private state: any;

    constructor(state: any) {
        this.state = state;
    }

    getState(): any {
        return this.state;
    }
}

class Originator {
    private state: any;

    setState(state: any) {
        this.state = state;
    }

    getState(): any {
        return this.state;
    }

    saveStateToMemento(): Memento {
        return new Memento(this.state);
    }

    restoreStateFromMemento(memento: Memento) {
        this.state = memento.getState();
    }
}

class Caretaker {
    private memento: Memento | null = null;

    backupState(originator: Originator) {
        this.memento = originator.saveStateToMemento();
    }

    rollbackState(originator: Originator) {
        if (this.memento) {
            originator.restoreStateFromMemento(this.memento);
        }
    }
}

let originator = new Originator();
let caretaker = new Caretaker();

// 初始状态
originator.setState({ data: 'Initial State' });
console.log("Initial State:", originator.getState());

// 备份状态
caretaker.backupState(originator);

try {
    // 尝试更改状态
    originator.setState({ data: 'Changed State' });
    console.log("Changed State:", originator.getState());

    // 模拟操作失败，抛出错误
    throw new Error("Operation failed");

} catch (error: any) {
    console.log("Error occurred:", error.message);
    // 回滚到之前的状态
    caretaker.rollbackState(originator);
    console.log("State after rollback:", originator.getState());
}
