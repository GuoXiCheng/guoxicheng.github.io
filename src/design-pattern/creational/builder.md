---
order: 3
---
# 生成器模式


::: playground#ts 生成器模式交互演示

@file index.ts

```ts
interface Builder {
    productPartA(): void;
    productPartB(): void;
    productPartC(): void;
}

class ConcreteBuilderA implements Builder {
    private product!: Product1;

    constructor() {
        this.reset();
    }

    private reset() {
        this.product = new Product1();
    }

    productPartA(): void {
        this.product.parts.push("Part A");
    }

    productPartB(): void {
        this.product.parts.push("Part B");
    }

    productPartC(): void {
        this.product.parts.push("Part C");
    }

    public getProduct(): Product1 {
        const result = this.product;
        this.reset();
        return result;
    }

}

class Product1 {
    public parts: string[] = [];

    public listParts(): void {
        console.log(`Product Parts: ${this.parts.join(" ")}`);
    }
}

class Director {
    private builder!: Builder;

    public setBuilder(builder: Builder):void {
        this.builder = builder;
    }

    public buildMinimalProduct() {
        this.builder.productPartA();
    }

    public buildFullFeatureProduct() {
        this.builder.productPartA();
        this.builder.productPartB();
        this.builder.productPartC();
    }
}

function clientNode(director: Director) {
    const builder = new ConcreteBuilderA();

    director.setBuilder(builder);

    director.buildMinimalProduct();
    builder.getProduct().listParts();

    director.buildFullFeatureProduct();
    builder.getProduct().listParts();

    builder.productPartA();
    builder.productPartC();
    builder.getProduct().listParts();
}

const director = new Director();
clientNode(director);
```

:::