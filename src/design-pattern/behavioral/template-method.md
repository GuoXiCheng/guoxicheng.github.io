# 模板方法模式


::: playground#ts 模板方法模式交互演示

@file index.ts

```ts
abstract class AbstractClass {
    // 这是模板方法
    templateMethod(): void {
        this.getData();
        this.processData();
        this.saveData();
    }

    protected abstract getData(): void;

    protected abstract processData(): void;

    protected abstract saveData(): void;
}

class HtmlReport extends AbstractClass {
    protected getData(): void {
        console.log("get html data");
    }
    protected processData(): void {
        console.log("process html data");
    }
    protected saveData(): void {
        console.log("save html data");
    }
}

class PdfReport extends AbstractClass {
    protected getData(): void {
        console.log("get pdf data");
    }
    protected processData(): void {
        console.log("process pdf data");
    }
    protected saveData(): void {
        console.log("save pdf data");
    }
}

const htmlReport = new HtmlReport();
htmlReport.templateMethod();

const pdfReport = new PdfReport();
pdfReport.templateMethod();
```

:::