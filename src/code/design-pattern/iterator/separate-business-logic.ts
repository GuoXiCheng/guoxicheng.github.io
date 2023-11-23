export {};

interface MyIterator<T> {
    next(): T;
    hasNext(): boolean;
}

interface IterableCollection<T> {
    createIterator(): MyIterator<T>;
}

class Product {
    constructor(public name: string, public price: number) {}
}

class ProductIterator implements MyIterator<Product> {
    private currentIndex = 0;

    constructor(private collection: Product[]) {}

    next(): Product {
        if (!this.hasNext()) {
            throw new Error("No more elements");
        }
        return this.collection[this.currentIndex++];
    }

    hasNext(): boolean {
        return this.currentIndex < this.collection.length;
    }
}

class ProductCollection implements IterableCollection<Product> {
    private products: Product[] = [];

    createIterator(): MyIterator<Product> {
        return new ProductIterator(this.products);
    }

    addProduct(product: Product): void {
        this.products.push(product);
    }

    removeProduct(product: Product): void {
        this.products = this.products.filter(p => p !== product);
    }
}

// Example usage
const collection = new ProductCollection();
collection.addProduct(new Product("Apple", 1.2));
collection.addProduct(new Product("Banana", 0.8));

const iterator = collection.createIterator();
while (iterator.hasNext()) {
    const product = iterator.next();
    console.log(`Product: ${product.name}, Price: ${product.price}`);
}
