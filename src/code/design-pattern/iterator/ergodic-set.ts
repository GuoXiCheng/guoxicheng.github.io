export {};

interface MyIterator<T> {
    next(): T;
    hasNext(): boolean;
}

interface IterableCollection<T> {
    createIterator(): MyIterator<T>;
}

class ConcreteCollection<T> implements IterableCollection<T> {
    private items: T[] = [];

    constructor(items: T[]) {
        this.items = items;
    }

    createIterator(): MyIterator<T> {
        return new ConcreteIterator<T>(this);
    }

    get length(): number {
        return this.items.length;
    }

    get(index: number): T {
        return this.items[index];
    }
}

class ConcreteIterator<T> implements MyIterator<T> {
    private collection: ConcreteCollection<T>;
    private position: number = 0;

    constructor(collection: ConcreteCollection<T>) {
        this.collection = collection;
    }

    next(): T {
        // 返回集合中的当前元素，并将位置移至下一个元素
        return this.collection.get(this.position++);
    }

    hasNext(): boolean {
        return this.position < this.collection.length;
    }
}

const collection = new ConcreteCollection<number>([1, 2, 3, 4, 5]);
const iterator = collection.createIterator();

while (iterator.hasNext()) {
    console.log(iterator.next());
}
