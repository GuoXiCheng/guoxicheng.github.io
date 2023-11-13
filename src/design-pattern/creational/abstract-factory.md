---
order: 2
---
# 抽象工厂模式

## 真实世界类比

假设你要去开通88VIP服务，有生活卡、购物卡和全能卡三种套餐供你选择，生活卡包含视频会员权益，购物卡包含天天红包权益，全能卡包含生活卡和购物卡的所有权益。


```ts
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
```

## 开发场景类比

假设你在开发中要整合微信小程序、抖音小程序和百度小程序各自所自带的网络请求方式，未来还有可能添加别的平台的小程序，因此你会想要使用统一的工厂接口，来屏蔽不同平台的差异。

```ts
interface MyRequest {
    createGetMethod(): AbstractGet;
    createPostMethod(): AbstractPost;
}

class WeChatRequest implements MyRequest {
    createGetMethod() {
        return new WeChatGet();
    }
    createPostMethod() {
        return new WeChatPost();
    }
}

class BaiduRequest implements MyRequest {
    createGetMethod() {
        return new BaiduGet();
    }
    createPostMethod() {
        return new BaiduPost();
    }
}

class DouyinRequest implements MyRequest {
    createGetMethod(): AbstractGet {
        return new DouyinGet();
    }
    createPostMethod(): AbstractPost {
        return new DouyinPost();
    }
}

interface AbstractGet {
    executeGet(): string;
}

interface AbstractPost {
    executePost(): string;
}

class WeChatGet implements AbstractGet {
    executeGet(): string {
        return "wechat get executed";
    }
}

class WeChatPost implements AbstractPost {
    executePost(): string {
        return "wechat get executed";
    }
}

class BaiduGet implements AbstractGet {
    executeGet(): string {
        return "baidu get executed";
    }
}

class BaiduPost implements AbstractPost {
    executePost(): string {
        return "baidu post executed";
    }
}

class DouyinGet implements AbstractGet {
    executeGet(): string {
        return "douyin get executed";
    }
}

class DouyinPost implements AbstractPost {
    executePost(): string {
        return "douyin post executed";
    }
}

function clientNode(platform: "wechat" | "baidu" | "douyin") {
    let request: MyRequest;
    switch (platform) {
        case "wechat":
            request = new WeChatRequest();
            break;
        case "baidu":
            request = new BaiduRequest();
            break;
        case "douyin":
            request = new DouyinRequest();
            break;
        default:
            throw new Error();
    }
    const getResult = request.createGetMethod().executeGet();
    console.log(getResult);

    const postResult = request.createPostMethod().executePost();
    console.log(postResult);
}

clientNode("wechat");

clientNode("baidu");

clientNode("douyin");
```