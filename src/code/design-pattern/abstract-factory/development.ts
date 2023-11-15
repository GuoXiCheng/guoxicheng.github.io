export {}

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