export {};

interface MyIterator<T> {
    next(): T;
    hasNext(): boolean;
}

interface IterableCollection<T> {
    createIterator(): MyIterator<T>;
}

class GraphNode<T> {
    constructor(public value: T, public neighbors: GraphNode<T>[] = []) {}
}

class GraphIterator<T> implements MyIterator<T> {
    private visited = new Set<GraphNode<T>>();
    private stack: GraphNode<T>[];

    constructor(private root: GraphNode<T>) {
        this.stack = [root];
    }

    next(): T {
        while (this.stack.length > 0) {
            const node = this.stack.pop();
            if (node && !this.visited.has(node)) {
                this.visited.add(node);
                for (const neighbor of node.neighbors) {
                    this.stack.push(neighbor);
                }
                return node.value;
            }
        }
        throw new Error("No more elements");
    }

    hasNext(): boolean {
        return this.stack.length > 0;
    }
}

class Graph<T> implements IterableCollection<T> {
    constructor(private nodes: GraphNode<T>[]) {}

    createIterator(): MyIterator<T> {
        return new GraphIterator<T>(this.nodes[0]);
    }
}

// Example usage
const node1 = new GraphNode(1);
const node2 = new GraphNode(2);
const node3 = new GraphNode(3);
const node4 = new GraphNode(4);

node1.neighbors.push(node2, node3);
node2.neighbors.push(node4);
node3.neighbors.push(node4);

const graph = new Graph([node1, node2, node3, node4]);

const iterator = graph.createIterator();
while (iterator.hasNext()) {
    console.log(iterator.next());
}
