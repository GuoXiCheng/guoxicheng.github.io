export {};

class CharacterFlyweight {
    private readonly character: string;

    constructor(character: string) {
        this.character = character;
    }

    public print(): string {
        return this.character;
    }
}

class FlyweightFactory {
    private characters: {[key: string]: CharacterFlyweight} = {};

    public getCharacter(char: string): CharacterFlyweight {
        if (!this.characters[char]) {
            this.characters[char] = new CharacterFlyweight(char);
        }
        return this.characters[char];
    }
}

class MyDocument {
    private characters: CharacterFlyweight[] = [];
    private factory: FlyweightFactory = new FlyweightFactory();

    public addCharacter(char: string): void {
        this.characters.push(this.factory.getCharacter(char));
    }

    public print(): string {
        return this.characters.map(char => char.print()).join('');
    }
}

const myDocument = new MyDocument();
const text = "Hello, flyweight pattern!";

for (const char of text) {
    myDocument.addCharacter(char);
}

console.log(myDocument.print());
