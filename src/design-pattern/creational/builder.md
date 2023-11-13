---
order: 3
---
# 建造者模式

## 真实世界类比

小学连词造句题目，要求学生把“我 吃 喜欢 水果”这四个词语连成一个语义通顺的句子。

```ts
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
```

## 开发场景类比

构建HTML中的表格。

```ts
interface Builder {
    addColumn(columns: string[]): void;
    addRow(rows: string[][]): void;
}

class HtmlTableBuilder implements Builder {
    private htmlTable!: HtmlTable;

    constructor() {
        this.reset();
    }

    reset() {
        this.htmlTable = new HtmlTable();
    }

    addColumn(columns: string[]): void {
        this.htmlTable.table.push("<tr>");
        for (const column of columns) {
            this.htmlTable.table.push(`<th>${column}</th>`);
        }
        this.htmlTable.table.push("</tr>");
    }

    addRow(rows: string[][]): void {
        for (const row of rows) {
            this.htmlTable.table.push("<tr>");
            for (const cell of row) {
                this.htmlTable.table.push(`<td>${cell}</td>`);
            }
            this.htmlTable.table.push("</tr>");
        }
    }

    getTable() {
        const table = this.htmlTable;
        this.reset();
        table.table.unshift("<table>");
        table.table.push("</table>");
        return table;
    }
}

class HtmlTable {
    public table: string[] = [];

    public output() {
        console.log(this.table.join(""));
    }
}

class Director {
    private builder!: Builder;

    setBuilder(builder: Builder) {
        this.builder = builder;
    }

    buildHtmlTable(columns: string[], rows: string[][]) {
        this.builder.addColumn(columns);
        this.builder.addRow(rows);
    }
}

function clientNode(director: Director) {
    const builder = new HtmlTableBuilder();

    director.setBuilder(builder);
    director.buildHtmlTable(["标题A", "标题B"], [["A1", "B1"], ["A2", "B2"]]);
    builder.getTable().output();
}

const director = new Director();
clientNode(director);
```