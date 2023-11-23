export {};

interface MyIterator<T> {
    next(): T;
    hasNext(): boolean;
}

interface IterableCollection<T> {
    createIterator(): MyIterator<T>;
}

class Book {
    constructor(public title: string, public author: string) {}
}

class BookIterator implements MyIterator<Book> {
    private currentIndex = 0;

    constructor(private collection: Book[]) {}

    next(): Book {
        if (!this.hasNext()) {
            throw new Error("No more elements");
        }
        return this.collection[this.currentIndex++];
    }

    hasNext(): boolean {
        return this.currentIndex < this.collection.length;
    }
}

class BookCollection implements IterableCollection<Book> {
    private books: Book[] = [];

    createIterator(): MyIterator<Book> {
        return new BookIterator(this.books);
    }

    addBook(book: Book): void {
        this.books.push(book);
    }
}

// Example usage
const bookCollection = new BookCollection();
bookCollection.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald"));
bookCollection.addBook(new Book("1984", "George Orwell"));

const iterator = bookCollection.createIterator();
while (iterator.hasNext()) {
    const book = iterator.next();
    console.log(`Book: ${book.title}, Author: ${book.author}`);
}
