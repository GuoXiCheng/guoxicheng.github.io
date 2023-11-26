export {};

// 排序策略接口
interface SortStrategy {
    sort(data: number[]): number[];
}

// 插入排序策略
class InsertionSortStrategy implements SortStrategy {
    sort(data: number[]): number[] {
        // 插入排序的实现
        console.log("Using Insertion Sort");
        // ...排序逻辑
        return data;
    }
}

// 快速排序策略
class QuickSortStrategy implements SortStrategy {
    sort(data: number[]): number[] {
        // 快速排序的实现
        console.log("Using Quick Sort");
        // ...排序逻辑
        return data;
    }
}

// 上下文类
class SortContext {
    private strategy: SortStrategy;

    constructor(strategy: SortStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: SortStrategy) {
        this.strategy = strategy;
    }

    sortData(data: number[]): number[] {
        return this.strategy.sort(data);
    }
}

// 示例使用
const smallDataSet = [2, 3, 1];
const largeDataSet = [2, 3, 1, 5, 4, 7, 6, 9, 8];

const context = new SortContext(new InsertionSortStrategy());
console.log("Sorting small data set:");
context.sortData(smallDataSet);

// 更改策略用于大数据集
context.setStrategy(new QuickSortStrategy());
console.log("Sorting large data set:");
context.sortData(largeDataSet);
