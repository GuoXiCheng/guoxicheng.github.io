
// npm run code output/design-pattern/abstract-factory/real-world.js

export {}
interface VIPCard {
    createLifeService(): AbstractLifeService;

    createShoppingService(): AbstractShoppingService;
}

class LifeCardVIP implements VIPCard {
    createLifeService() {
        return new LifeService();
    }
    createShoppingService() {
        return new NoShoppingService();
    }
}

class ShoppingCardVIP implements VIPCard {
    createLifeService() {
        return new NoLifeService();
    }
    createShoppingService() {
        return new ShoppingService();
    }
}

class AllInOneCardVIP implements VIPCard {
    createLifeService() {
        return new LifeService();
    }
    createShoppingService() {
        return new ShoppingService();
    }
}

interface AbstractLifeService {
    useLifeService(): string;
}

interface AbstractShoppingService {
    useLifeService(): string;
}

class LifeService implements AbstractLifeService {
    useLifeService(): string {
        return "享有视频会员服务权益";
    }
}

class NoLifeService implements AbstractLifeService {
    useLifeService(): string {
        return "没有享有生活服务权益";
    }
}

class ShoppingService implements AbstractShoppingService {
    useLifeService(): string {
        return "享有天天红包服务权益";
    }
}

class NoShoppingService implements AbstractShoppingService {
    useLifeService(): string {
        return "没有享有购物服务权益";
    }
}

function clientNode(vip: VIPCard) {
    const life = vip.createLifeService();
    console.log(life.useLifeService());

    const shopping = vip.createShoppingService();
    console.log(shopping.useLifeService());
}

console.log("如果我选择生活卡");
clientNode(new LifeCardVIP());

console.log("如果我选择购物卡");
clientNode(new ShoppingCardVIP());

console.log("如果我选择全能卡");
clientNode(new AllInOneCardVIP());