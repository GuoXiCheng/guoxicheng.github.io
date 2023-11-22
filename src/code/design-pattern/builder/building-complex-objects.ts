export {};

// 产品类
class MyDocument {
    private parts: string[] = [];

    addPart(part: string): void {
        this.parts.push(part);
    }

    show(): void {
        console.log("Document Parts: ", this.parts.join(", "));
    }
}

// 建造者接口
interface DocumentBuilder {
    buildHeader(): void;
    buildBody(): void;
    buildFooter(): void;
    getDocument(): MyDocument;
}

// 具体建造者
class MyDocumentBuilder implements DocumentBuilder {
    private document: MyDocument = new MyDocument();

    buildHeader(): void {
        this.document.addPart("Header");
    }

    buildBody(): void {
        this.document.addPart("Body");
    }

    buildFooter(): void {
        this.document.addPart("Footer");
    }

    getDocument(): MyDocument {
        return this.document;
    }
}

// 指挥者
class Director {
    construct(builder: DocumentBuilder): void {
        builder.buildHeader();
        builder.buildBody();
        builder.buildFooter();
    }
}

// 使用
const director = new Director();
const builder = new MyDocumentBuilder();
director.construct(builder);
const doc = builder.getDocument();
doc.show();
