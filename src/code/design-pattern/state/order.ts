export {};

interface OrderState {
    handleOrder(orderContext: OrderContext): void;
}

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
