export {};

interface SalesRecord {
    accept(visitor: Visitor): void;
    getAmount(): number;
}

class ConcreteSalesRecord implements SalesRecord {
    constructor(private amount: number) {}

    accept(visitor: Visitor): void {
        visitor.visitSalesRecord(this);
    }

    getAmount(): number {
        return this.amount;
    }
}

interface Visitor {
    visitSalesRecord(record: SalesRecord): void;
}

class TotalSalesVisitor implements Visitor {
    private total = 0;

    visitSalesRecord(record: SalesRecord): void {
        this.total += record.getAmount();
    }

    getTotal(): number {
        return this.total;
    }
}

class AverageSalesVisitor implements Visitor {
    private total = 0;
    private count = 0;

    visitSalesRecord(record: SalesRecord): void {
        this.total += record.getAmount();
        this.count++;
    }

    getAverage(): number {
        return this.count === 0 ? 0 : this.total / this.count;
    }
}

const records = [
    new ConcreteSalesRecord(100),
    new ConcreteSalesRecord(200),
    new ConcreteSalesRecord(300),
];

const totalSalesVisitor = new TotalSalesVisitor();
const averageSalesVisitor = new AverageSalesVisitor();

records.forEach(record => {
    record.accept(totalSalesVisitor);
    record.accept(averageSalesVisitor);
});

console.log("Total Sales: " + totalSalesVisitor.getTotal());
console.log("Average Sales: " + averageSalesVisitor.getAverage());
