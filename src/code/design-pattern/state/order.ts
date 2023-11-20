export {};

// 为所有具体状态定义一个共同的接口
interface OrderState {
    handleOrder(orderContext: OrderContext): void;
}

// 为每个可能的订单状态定义一个具体状态类，每个类都实现抽象的状态接口
class NewOrderState implements OrderState {
    handleOrder(orderContext: OrderContext): void {
        console.log("Handling new order");
        orderContext.setState(new PaidOrderState());
    }
}

class PaidOrderState implements OrderState {
    handleOrder(orderContext: OrderContext): void {
        console.log("Handling paid order");
        orderContext.setState(new ShippedOrderState());
    }
}

class ShippedOrderState implements OrderState {
    handleOrder(orderContext: OrderContext): void {
        console.log("Handling shipped order");
        orderContext.setState(new CompletedOrderState());
    }
}

class CompletedOrderState implements OrderState {
    handleOrder(orderContext: OrderContext): void {
        console.log("Order is completed");
    }
}

class CancelledOrderState implements OrderState {
    handleOrder(orderContext: OrderContext): void {
        console.log("Order has been cancelled");
    }
}

// 创建一个上下文类，它将维护当前状态，并允许状态切换
class OrderContext {
    private state: OrderState;

    constructor(state: OrderState) {
        this.state = state;
    }

    setState(state: OrderState): void {
        this.state = state;
    }

    handleOrder(): void {
        this.state.handleOrder(this);
    }
}

const order = new OrderContext(new NewOrderState());
order.handleOrder(); // 处理新建订单
order.handleOrder(); // 处理已支付订单
order.handleOrder(); // 处理已发货订单
