export {};

interface MyIterator<T> {
    next(): T;
    hasNext(): boolean;
}

class ChannelIterator implements MyIterator<string> {

    private collection: string[] = [];
    private position = 0;

    constructor(collection: string[]) {
        this.collection = collection;
    }

    next(): string {
        return this.collection[this.position++];
    }
    hasNext(): boolean {
        return this.position < this.collection.length;
    }
}

interface MyAggregator<T> {
    createIterator(): MyIterator<T>
}

class TelevisionAggregator implements MyAggregator<string> {

    private channels: string[] = [];

    addChannel(channel: string) {
        this.channels.push(channel);
    }

    createIterator(): MyIterator<string> {
        return new ChannelIterator(this.channels);
    }
}

const tv = new TelevisionAggregator();
tv.addChannel("CCTV1");
tv.addChannel("CCTV6");
tv.addChannel("CCTV10");

const iterator = tv.createIterator();
while(iterator.hasNext()) {
    console.log(iterator.next());
}