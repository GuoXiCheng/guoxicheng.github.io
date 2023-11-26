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
    private mementos: Memento[] = [];

    addMemento(memento: Memento) {
        this.mementos.push(memento);
    }

    getMemento(index: number): Memento | null {
        if (index >= 0 && index < this.mementos.length) {
            return this.mementos[index];
        }
        return null;
    }
}

let originator = new Originator();
let caretaker = new Caretaker();

// 设置并保存第一个状态
originator.setState({ data: 'State 1' });
caretaker.addMemento(originator.saveStateToMemento());

// 设置并保存第二个状态
originator.setState({ data: 'State 2' });
caretaker.addMemento(originator.saveStateToMemento());

// 检索和打印保存的状态
let savedState1 = caretaker.getMemento(0)?.getState();
console.log("Saved State 1:", savedState1);

let savedState2 = caretaker.getMemento(1)?.getState();
console.log("Saved State 2:", savedState2);
