export {};

class Memento {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    getState(): string {
        return this.state;
    }
}

class Originator {
    private state!: string;

    setState(state: string) {
        this.state = state;
    }

    getState(): string {
        return this.state;
    }

    saveStateToMemento(): Memento {
        return new Memento(this.state);
    }

    getStateFromMemento(memento: Memento) {
        this.state = memento.getState();
    }
}

class Caretaker {
    private mementoList: Memento[] = [];
    private current: number = -1;

    add(state: Memento) {
        this.mementoList.push(state);
        this.current++;
        this.mementoList.splice(this.current + 1);
    }

    undo(): Memento | undefined {
        if (this.current > 0) {
            this.current--;
            return this.mementoList[this.current];
        }
        return undefined;
    }

    redo(): Memento | undefined {
        if (this.current < this.mementoList.length - 1) {
            this.current++;
            return this.mementoList[this.current];
        }
        return undefined;
    }
}

let originator = new Originator();
let caretaker = new Caretaker();

originator.setState('State #1');
caretaker.add(originator.saveStateToMemento());

originator.setState('State #2');
caretaker.add(originator.saveStateToMemento());

// 撤销到上一状态
let undoMemento = caretaker.undo();
if (undoMemento) originator.getStateFromMemento(undoMemento);

console.log("Current State: " + originator.getState());

// 重做到下一状态
let redoMemento = caretaker.redo();
if (redoMemento) originator.getStateFromMemento(redoMemento);

console.log("Current State: " + originator.getState());
