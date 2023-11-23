export {};

interface MyIterator<T> {
    next(): T;
    hasNext(): boolean;
}

interface IterableCollection<T> {
    createIterator(): MyIterator<T>;
}

class ArrayIterator<T> implements MyIterator<T> {
    private currentIndex = 0;

    constructor(private collection: T[]) {}

    next(): T {
        if (!this.hasNext()) {
            throw new Error("No more elements");
        }
        return this.collection[this.currentIndex++];
    }

    hasNext(): boolean {
        return this.currentIndex < this.collection.length;
    }
}

class ArrayCollection<T> implements IterableCollection<T> {
    constructor(private items: T[]) {}

    createIterator(): MyIterator<T> {
        return new ArrayIterator<T>(this.items);
    }
}

// Example usage
const collection = new ArrayCollection([1, 2, 3, 4, 5]);

const iterator1 = collection.createIterator();
const iterator2 = collection.createIterator();

console.log("Iterator 1:", iterator1.next()); // Outputs 1
console.log("Iterator 2:", iterator2.next()); // Outputs 1

console.log("Iterator 1:", iterator1.next()); // Outputs 2
console.log("Iterator 1:", iterator1.next()); // Outputs 3

console.log("Iterator 2:", iterator2.next()); // Outputs 2