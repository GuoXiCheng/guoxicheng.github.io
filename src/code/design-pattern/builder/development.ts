// npm run code output/design-pattern/builder/development.js

export {};

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