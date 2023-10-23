# 装饰模式

::: playground#ts 装饰模式交互演示

@file index.ts

```ts
interface Coffee {
    getCoffee(): string;
}

// 要被装饰的类
class SimpleCoffee implements Coffee {
    getCoffee() {
        return "Simple Coffee";
    }
}

// 装饰器基类
class CoffeeDecorator implements Coffee {
    protected decoratedCoffee: Coffee;

    constructor(decoratedCoffee: Coffee) {
        this.decoratedCoffee = decoratedCoffee;
    }

    getCoffee() {
        return this.decoratedCoffee.getCoffee();
    }
}

// 具体装饰类
class CoffeeWithSugar extends CoffeeDecorator {
    getCoffee() {
        return "Coffee With Sugar";
    }
}

// 具体装饰类
class CoffeeWithMilk extends CoffeeDecorator {
    getCoffee() {
        return "Coffee With Milk";
    }
}

const simpleCoffee = new SimpleCoffee();
const simpleCoffeeResult = simpleCoffee.getCoffee();
console.log(simpleCoffeeResult);

const coffeeWithSugar = new CoffeeWithSugar(simpleCoffee);
const coffeeWithSugarResult = coffeeWithSugar.getCoffee();
console.log(coffeeWithSugarResult);

const coffeeWithMilk = new CoffeeWithMilk(simpleCoffee);
const coffeeWithMilkResult = coffeeWithMilk.getCoffee();
console.log(coffeeWithMilkResult);
```

:::