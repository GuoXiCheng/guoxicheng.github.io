export {};

// 定义一个策略接口，用于所有具体策略的共同行为
interface DiscountStrategy {
    calculateDiscount(amount: number): number;
}

// 为不同类型的用户创建具体的策略类，每个类都实现抽象的策略接口
class RegularUserDiscount implements DiscountStrategy {
    calculateDiscount(amount: number): number {
        // 普通用户可能没有折扣
        return amount;
    }
}

class MemberUserDiscount implements DiscountStrategy {
    calculateDiscount(amount: number): number {
        // 会员用户享受一定的折扣
        return amount * 0.9; // 假设会员用户享有10%的折扣
    }
}

class PremiumMemberDiscount implements DiscountStrategy {
    calculateDiscount(amount: number): number {
        // 高级会员用户享受更高的折扣
        return amount * 0.8; // 假设高级会员享有20%的折扣
    }
}

// 创建一个上下文，用于管理策略，并根据策略计算出折扣价
class ShoppingCart {
    private strategy: DiscountStrategy;

    constructor(strategy: DiscountStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: DiscountStrategy): void {
        this.strategy = strategy;
    }

    calculateDiscountedTotal(amount: number): number {
        return this.strategy.calculateDiscount(amount);
    }
}

const regularCart = new ShoppingCart(new RegularUserDiscount());
console.log(regularCart.calculateDiscountedTotal(100)); // 输出 100

const memberCart = new ShoppingCart(new MemberUserDiscount());
console.log(memberCart.calculateDiscountedTotal(100)); // 输出 90

const premiumCart = new ShoppingCart(new PremiumMemberDiscount());
console.log(premiumCart.calculateDiscountedTotal(100)); // 输出 80
