// npm run code output/design-pattern/builder/real-world.js

export {};

interface WordBuilder {
    firstWord(): void;
    secondWord(): void;
    thirdWord(): void;
    fourth(): void;
}

class WordBuilderPlay implements WordBuilder {

    private sentence!: Sentence;

    constructor() {
        this.reset();
    }

    private reset() {
        this.sentence = new Sentence();
    }

    firstWord(): void {
        this.sentence.words.push("我");
    }
    secondWord(): void {
        this.sentence.words.push("吃");
    }
    thirdWord(): void {
        this.sentence.words.push("喜欢");
    }
    fourth(): void {
        this.sentence.words.push("水果");
    }

    getSentence(): Sentence {
        const sentence = this.sentence;
        this.reset();
        return sentence;
    }
}

class Sentence {
    public words: string[] = [];

    public output(): void {
        console.log(this.words.join(""));
    }
}

class Player {
    private wordBuilder!: WordBuilder;

    public setBuilder(builder: WordBuilder) {
        this.wordBuilder = builder;
    }

    public firstAnswer() {
        this.wordBuilder.secondWord();
        this.wordBuilder.fourth();
    }

    public secondAnswer() {
        this.wordBuilder.firstWord();
        this.wordBuilder.thirdWord();
        this.wordBuilder.secondWord();
        this.wordBuilder.fourth();
    }
}

function clientNode(player: Player) {
    const builder = new WordBuilderPlay();

    player.setBuilder(builder);
    player.firstAnswer();
    builder.getSentence().output();

    player.secondAnswer();
    builder.getSentence().output();

    builder.firstWord();
    builder.secondWord();
    builder.fourth();
    builder.getSentence().output();
}

const player = new Player();
clientNode(player);