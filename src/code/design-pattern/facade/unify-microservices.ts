export {};

// 假设有几个微服务，每个服务都有自己的接口

// 用户服务
class UserService {
    getUser(userId: string): string {
        return `User info for ${userId}`;
    }
}

// 订单服务
class OrderService {
    getOrder(orderId: string): string {
        return `Order details for ${orderId}`;
    }
}

// 支付服务
class PaymentService {
    processPayment(amount: number): string {
        return `Processed payment of $${amount}`;
    }
}

// 创建一个外观类来封装对微服务的访问
class ServicesFacade {
    private userService: UserService;
    private orderService: OrderService;
    private paymentService: PaymentService;

    constructor() {
        this.userService = new UserService();
        this.orderService = new OrderService();
        this.paymentService = new PaymentService();
    }

    getUserInfo(userId: string): string {
        return this.userService.getUser(userId);
    }

    getOrderDetails(orderId: string): string {
        return this.orderService.getOrder(orderId);
    }

    makePayment(amount: number): string {
        return this.paymentService.processPayment(amount);
    }
}


const servicesFacade = new ServicesFacade();

// 客户端现在可以通过外观接口来访问服务，而无需直接与每个服务交互
console.log(servicesFacade.getUserInfo("user123"));
console.log(servicesFacade.getOrderDetails("order456"));
console.log(servicesFacade.makePayment(100));
