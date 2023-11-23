export {};

interface Prototype {
    clone(): Prototype;
}

class StatefulObject implements Prototype {
    private state: any;

    constructor(state?: any) {
        this.state = state;
    }

    setState(state: any): void {
        this.state = state;
    }

    getState(): any {
        return this.state;
    }

    clone(): this {
        // 提供深拷贝，以确保状态对象的复制
        const cloned = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        cloned.state = JSON.parse(JSON.stringify(this.state));
        return cloned;
    }
}

function main() {
    const original = new StatefulObject();
    original.setState({ x: 10, y: 20 });

    // 保存当前状态
    const savedState = original.clone();

    // 更改状态
    original.setState({ x: 15, y: 25 });

    console.log(original.getState()); // 输出: { x: 15, y: 25 }

    // 恢复之前的状态
    original.setState(savedState.getState());

    console.log(original.getState()); // 输出: { x: 10, y: 20 }
}

main();
