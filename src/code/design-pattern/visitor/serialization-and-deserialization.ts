export {};

interface SerializableObject {
    accept(visitor: SerializationVisitor): void;
}

class Person implements SerializableObject {
    constructor(public name: string, public age: number) {}

    accept(visitor: SerializationVisitor): string {
        return visitor.visitPerson(this);
    }
}

class Address implements SerializableObject {
    constructor(public street: string, public city: string) {}

    accept(visitor: SerializationVisitor): string {
        return visitor.visitAddress(this);
    }
}

interface SerializationVisitor {
    visitPerson(person: Person): string;
    visitAddress(address: Address): string;
}

class JSONSerializationVisitor implements SerializationVisitor {
    visitPerson(person: Person): string {
        return JSON.stringify({name: person.name, age: person.age});
    }

    visitAddress(address: Address): string {
        return JSON.stringify({street: address.street, city: address.city});
    }
}

const person = new Person("Alice", 30);
const address = new Address("123 Main St", "Wonderland");

const jsonVisitor = new JSONSerializationVisitor();

const serializedPerson = person.accept(jsonVisitor);
const serializedAddress = address.accept(jsonVisitor);

console.log("Serialized Person: ", serializedPerson);
console.log("Serialized Address: ", serializedAddress);
