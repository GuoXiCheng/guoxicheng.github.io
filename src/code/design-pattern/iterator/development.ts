// npm run code output/design-pattern/iterator/development.js

export {};

interface MyIterator<T> {
    next(): T;
    hasNext(): boolean;
}

interface Aggregator<T> {
    createIterator(): MyIterator<T>;
}

class ConcreteIterator implements MyIterator<string> {

    private collection: string[];
    private position = 0;

    constructor(collection: string[]) {
        this.collection = collection;
    }

    next(): string {
        // 返回集合的下个元素，并将指针后移
        return this.collection[this.position++];
    }
    hasNext(): boolean {
        return this.position < this.collection.length;
    }
}

class ConcreteAggregator implements Aggregator<string> {

    private items: string[] = [];

    public add(item: string): void {
        this.items.push(item);
    }

    createIterator(): MyIterator<string> {
        return new ConcreteIterator(this.items);
    }
}

const concreteAggregator = new ConcreteAggregator();
concreteAggregator.add("Item A");
concreteAggregator.add("Item B");
concreteAggregator.add("Item C");

const iterator = concreteAggregator.createIterator();

while(iterator.hasNext()) {
    console.log(iterator.next());
}
