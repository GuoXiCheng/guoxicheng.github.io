export {};

// UI渲染策略接口
interface UIRenderStrategy {
    render(): string;
}

// 简洁版UI策略
class SimpleUIRenderStrategy implements UIRenderStrategy {
    render(): string {
        return "Rendering Simple UI";
    }
}

// 高互动版UI策略
class InteractiveUIRenderStrategy implements UIRenderStrategy {
    render(): string {
        return "Rendering Interactive UI";
    }
}

// UI上下文类
class UIContext {
    private strategy: UIRenderStrategy;

    constructor(strategy: UIRenderStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: UIRenderStrategy) {
        this.strategy = strategy;
    }

    renderUI(): string {
        return this.strategy.render();
    }
}

// 示例使用
const userPreference = 'interactive'; // 假设这是从用户配置中获得的

const uiContext = new UIContext(
    userPreference === 'interactive' ? new InteractiveUIRenderStrategy() : new SimpleUIRenderStrategy()
);

console.log(uiContext.renderUI());
