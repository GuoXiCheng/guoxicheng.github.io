# 策略模式

::: playground#ts 策略模式交互演示

@file index.ts

```ts
interface TaxStrategy {
    caculateTax(amount: number): number;
}

class USATaxStrategy implements TaxStrategy {
    caculateTax(amount: number) {
        return amount * 0.2;
    }
}

class ChinaTaxStrategy implements TaxStrategy {
    caculateTax(amount: number) {
        return amount * 0.1;
    }
}

class TaxCalculate {
    private strategy: TaxStrategy;

    constructor(taxStrategy: TaxStrategy) {
        this.strategy = taxStrategy;
    }

    calculate(amount: number): number {
        return this.strategy.caculateTax(amount);
    }
}

function calculateByCounty(country: "USA" | "China", amount: number) {
    let strategy: TaxStrategy;
    switch(country) {
        case "USA":
            strategy = new USATaxStrategy();
            break;
        case "China":
            strategy = new ChinaTaxStrategy();
            break;
        default:
            throw new Error("not found");
    }
    return new TaxCalculate(strategy).calculate(amount);
}

const calculateByUSA = calculateByCounty("USA", 10);
console.log(calculateByUSA);

const calculateByChina = calculateByCounty("China", 10);
console.log(calculateByChina);
```

:::