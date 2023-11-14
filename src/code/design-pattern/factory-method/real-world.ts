// npm run code output/design-pattern/factory-method/real-world.js

export {};

interface ExpressService {
    delivery(): string;
}

class JDExpress implements ExpressService {
    delivery(): string {
        return "京东快递";
    }

}

class SFExpress implements ExpressService {
    delivery(): string {
        return "顺丰快递";
    }

}

class ZTExpress implements ExpressService {
    delivery(): string {
        return "中通快递";
    }

}

abstract class CainiaoYizhanExpressService {
    public abstract createExpress(): ExpressService;

    public expressDelivery() {
        const express = this.createExpress();
        console.log(`我要寄出: ${express.delivery()}`);
    }
}

class JDExpressService extends CainiaoYizhanExpressService {
    public createExpress(): ExpressService {
        return new JDExpress();
    }
}

class SFExpressService extends CainiaoYizhanExpressService {
    public createExpress(): ExpressService {
        return new SFExpress();
    }
}

class ZTExpressService extends CainiaoYizhanExpressService {
    public createExpress(): ExpressService {
        return new ZTExpress();
    }
}

function clientNode(express: "京东" | "顺丰" | "中通") {
    let expressService: CainiaoYizhanExpressService;
    switch(express) {
        case "京东":
            expressService = new JDExpressService();
            break;
        case "顺丰":
            expressService = new SFExpressService();
            break;
        case "中通":
            expressService = new ZTExpressService();
            break;
        default:
            throw new Error();
    }
    expressService.expressDelivery();
}

clientNode("京东");