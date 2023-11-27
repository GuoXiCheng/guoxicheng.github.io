export {};

// 旧系统的接口
interface IOldInterface {
    performTask(): string;
}

// 旧系统的实现
class OldSystem implements IOldInterface {
    performTask(): string {
        return "Performing task in the old way.";
    }
}

// 新功能的类
class NewFeature {
    performNewTask(): string {
        return "Performing task using new feature.";
    }
}

// 适配器类
class NewFeatureAdapter implements IOldInterface {
    private newFeature: NewFeature;

    constructor(newFeature: NewFeature) {
        this.newFeature = newFeature;
    }

    performTask(): string {
        // 使用新功能来执行任务
        return this.newFeature.performNewTask();
    }
}

// 使用示例
const oldSystem = new OldSystem();
console.log(oldSystem.performTask()); // 使用旧系统

const newFeature = new NewFeature();
const adapter = new NewFeatureAdapter(newFeature);
console.log(adapter.performTask()); // 使用适配器来使用新功能
