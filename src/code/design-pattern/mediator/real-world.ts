export {};

interface Mediator {
    notify(sender: object, event: string): void;
}

class TaoBaoMediator implements Mediator {

    constructor(private seller: Seller, private buyer: Buyer) {
        this.seller = seller;
        this.seller.setMediator(this);
        this.buyer = buyer;
        this.buyer.setMediator(this);
    }

    notify(sender: object, event: string): void {
        if (event === "已下单") {
            this.seller.dispatch();
        } else if (event === "已发货") {
            this.buyer.receive();
        } else if (event === "已收货") {
            this.seller.collectMoney();
        }
    }
}

class Base {
    protected mediator!: Mediator;

    setMediator(mediator: Mediator) {
        this.mediator = mediator;
    }
}

// 卖家负责发货
class Seller extends Base {
    dispatch() {
        console.log("卖家发货");
        this.mediator.notify(this, "已发货");
    }
    
    collectMoney() {
        console.log("卖家收钱，交易完成");
    }
}

// 买家负责收货
class Buyer extends Base {

    placeOrder() {
        console.log("买家下单");
        this.mediator.notify(this, "已下单");
    }

    receive() {
        console.log("买家收货");
        this.mediator.notify(this, "已收货");
    }
}

const seller = new Seller();
const buyer = new Buyer();

const taobao = new TaoBaoMediator(seller, buyer);

buyer.placeOrder();