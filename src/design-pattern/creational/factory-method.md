---
order: 1
---

# 工厂方法模式

## 真实世界类比

假设你要去菜鸟驿站寄快递，你可以选择京东快递、顺丰快递、中通快递等，并且这个菜鸟驿站后续可能还会有其他快递公司入驻。

```ts
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
```


## 业务场景类比

使用工厂方法模式开发跨平台的UI组件，同时避免客户端代码与具体UI类之间的耦合。

```ts
interface Button {
    render(): string;
    onClick(): string;
}

class WindowsButton implements Button {
    render(): string {
        return "render windows button";
    }

    onClick(): string {
        return "click windows button";
    }
}

class MacButton implements Button {
    render(): string {
        return "render mac button";
    }

    onClick(): string {
        return "click mac button";
    }
}

abstract class Dialog {
    public abstract createButton(): Button;

    public renderButton() {
        const button = this.createButton();
        const renderResult = button.render();
        console.log(renderResult);

        const clickedResult = button.onClick();
        console.log(clickedResult);
    }
}

class WindowsDialog extends Dialog {
    public createButton(): Button {
        return new WindowsButton();
    }
}

class MacDialog extends Dialog {
    public createButton(): Button {
        return new MacButton();
    }
}

function clientNode(os: "win" | "mac") {
    let dialog;
    switch(os) {
        case "win":
            dialog = new WindowsDialog();
            break;
        case "mac":
            dialog = new MacDialog();
            break;
        default:
            throw new Error();
    }
    dialog.renderButton();
}

clientNode("win");

clientNode("mac");
```