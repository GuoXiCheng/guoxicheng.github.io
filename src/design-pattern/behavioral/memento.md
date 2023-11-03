# 备忘录模式


::: playground#ts 备忘录模式交互演示

@file index.ts

```ts
class Originator {
    private state: string;

    constructor(state: string) {
        this.state = state;
        console.log(`Originator initial state: ${state}`);
    }

    public doSomething() {
        this.state = Math.random() * 100 + "";
        console.log(`Originator state change to ${this.state}`);
    }

    public save(): Memento {
        return new ConcreteMemento(this.state);
    }

    public restore(memento: Memento): void {
        this.state = memento.getState();
        console.log(`Originator state restore to ${this.state}`);
    }
}

interface Memento {
    getState(): string;
    getName(): string;
    getDate(): string;
}

class ConcreteMemento implements Memento {
    private state: string;
    private date: string;

    constructor(state: string) {
        this.state = state;
        this.date = new Date().toISOString();
    }

    getState(): string {
        return this.state;
    }
    getName(): string {
        return `${this.date} / ${this.state}`;
    }
    getDate(): string {
        return this.date;
    }

}

class Caretaker {
    private mementos: Memento[] = [];
    private originator: Originator;

    constructor(originator: Originator) {
        this.originator = originator;
    }

    public backup() {
        this.mementos.push(this.originator.save());
    }

    public undo() {
        if (this.mementos.length === 0) return;

        const memento = this.mementos.pop();
        if (memento) this.originator.restore(memento);
    }

    public showHistory() {
        console.log("show history");
        for (const memento of this.mementos) {
            console.log(memento.getName());
        }
    }
}

const originator = new Originator("super");

const caretaker = new Caretaker(originator);

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

caretaker.showHistory();

console.log("undo");

caretaker.undo();

caretaker.undo();
```

:::