export {};

interface MyIterator<T> {
    next(): T;
    hasNext(): boolean;
}

interface IterableCollection<T> {
    createIterator(type: 'depth-first' | 'breadth-first'): MyIterator<T>;
}

class TreeNode<T> {
    constructor(public value: T, public children: TreeNode<T>[] = []) {}
}

class DepthFirstIterator<T> implements MyIterator<T> {
    private stack: TreeNode<T>[];

    constructor(root: TreeNode<T>) {
        this.stack = [root];
    }

    next(): T {
        const node = this.stack.pop();
        if (node) {
            for (let i = node.children.length - 1; i >= 0; i--) {
                this.stack.push(node.children[i]);
            }
            return node.value;
        }
        throw new Error("No more elements");
    }

    hasNext(): boolean {
        return this.stack.length > 0;
    }
}

class BreadthFirstIterator<T> implements MyIterator<T> {
    private queue: TreeNode<T>[];

    constructor(root: TreeNode<T>) {
        this.queue = [root];
    }

    next(): T {
        const node = this.queue.shift();
        if (node) {
            this.queue.push(...node.children);
            return node.value;
        }
        throw new Error("No more elements");
    }

    hasNext(): boolean {
        return this.queue.length > 0;
    }
}

class Tree<T> implements IterableCollection<T> {
    constructor(public root: TreeNode<T>) {}

    createIterator(type: 'depth-first' | 'breadth-first'): MyIterator<T> {
        if (type === 'depth-first') {
            return new DepthFirstIterator<T>(this.root);
        } else {
            return new BreadthFirstIterator<T>(this.root);
        }
    }
}

// Example usage
const tree = new Tree(new TreeNode(1, [
    new TreeNode(2, [new TreeNode(4), new TreeNode(5)]),
    new TreeNode(3, [new TreeNode(6), new TreeNode(7)])
]));

const depthFirstIterator = tree.createIterator('depth-first');
while (depthFirstIterator.hasNext()) {
    console.log(depthFirstIterator.next());
}

const breadthFirstIterator = tree.createIterator('breadth-first');
while (breadthFirstIterator.hasNext()) {
    console.log(breadthFirstIterator.next());
}
