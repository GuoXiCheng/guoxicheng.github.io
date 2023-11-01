# 组合模式


::: playground#ts 组合模式交互演示

@file index.ts

```ts
interface Component {
    operation(indent: string): string;
}

class Leaf implements Component {

    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    operation(indent: string): string {
        return `${indent}Leaf(${this.name})`;
    }
}

class Composite implements Component {

    private children: Component[] = [];

    add(component: Component): void {
        this.children.push(component);
    }

    remove(component: Component): void {
        const componentIndex = this.children.indexOf(component);
        if (componentIndex > -1) {
            this.children.splice(componentIndex, 1);
        }
    }

    operation(indent: string): string {
        return `\n${indent}Branch(\n${this.children.map(child => child.operation(indent+ " ")).join('\n')}\n${indent})`;
    }
}

const tree = new Composite();

const branchA = new Composite();
branchA.add(new Leaf("Leaf A1"));
branchA.add(new Leaf("Leaf A2"));

const branchB = new Composite();
branchB.add(new Leaf("Leaf B1"));
branchB.add(new Leaf("Leaf B2"));

tree.add(branchA);
tree.add(branchB);

console.log(tree.operation(""));
```

:::