export {};

// 产品类
class Product {
    private name?: string;
    private price?: number;
    private description?: string;
    private category?: string;

    setName(name: string): void {
        this.name = name;
    }

    setPrice(price: number): void {
        this.price = price;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    setCategory(category: string): void {
        this.category = category;
    }

    getDescription(): string {
        return `
        Product: ${this.name}, Price: ${this.price}, 
        Description: ${this.description}, Category: ${this.category}
        `;
    }
}

// 建造者类
class ProductBuilder {
    private product: Product = new Product();

    setName(name: string): ProductBuilder {
        this.product.setName(name);
        return this;
    }

    setPrice(price: number): ProductBuilder {
        this.product.setPrice(price);
        return this;
    }

    setDescription(description: string): ProductBuilder {
        this.product.setDescription(description);
        return this;
    }

    setCategory(category: string): ProductBuilder {
        this.product.setCategory(category);
        return this;
    }

    build(): Product {
        return this.product;
    }
}

// 使用建造者
const productBuilder = new ProductBuilder();
const product = productBuilder
    .setName("Awesome Product")
    .setPrice(19.99)
    .setDescription("This is a great product")
    .build();

console.log(product.getDescription());
