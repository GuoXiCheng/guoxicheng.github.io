export {};

// 路线规划策略接口
interface RouteStrategy {
    planRoute(startPoint: string, endPoint: string): string;
}

// 最短路线策略
class ShortestRouteStrategy implements RouteStrategy {
    planRoute(startPoint: string, endPoint: string): string {
        return `Planning the shortest route from ${startPoint} to ${endPoint}`;
    }
}

// 避开拥堵路线策略
class AvoidTrafficRouteStrategy implements RouteStrategy {
    planRoute(startPoint: string, endPoint: string): string {
        return `Planning a route from ${startPoint} to ${endPoint} that avoids traffic`;
    }
}

// 最节能路线策略
class EcoFriendlyRouteStrategy implements RouteStrategy {
    planRoute(startPoint: string, endPoint: string): string {
        return `Planning an eco-friendly route from ${startPoint} to ${endPoint}`;
    }
}

// 导航上下文类
class NavigationContext {
    private strategy: RouteStrategy;

    constructor(strategy: RouteStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: RouteStrategy) {
        this.strategy = strategy;
    }

    planRoute(startPoint: string, endPoint: string): string {
        return this.strategy.planRoute(startPoint, endPoint);
    }
}

// 示例使用
const navigation = new NavigationContext(new ShortestRouteStrategy());
console.log(navigation.planRoute("Home", "Office"));

// 更改策略为避开拥堵
navigation.setStrategy(new AvoidTrafficRouteStrategy());
console.log(navigation.planRoute("Home", "Office"));

// 更改策略为最节能
navigation.setStrategy(new EcoFriendlyRouteStrategy());
console.log(navigation.planRoute("Home", "Office"));
