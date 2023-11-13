# 责任链模式

## 现实世界类比

在击鼓传花的游戏中，数个玩家可以围成一圈，在鼓声响起时，花（或小物件）在所有人手中依次传递，当鼓声停止时，花在谁的手里谁就要表演节目。

```ts
interface Player {
    setNext(player: Player): Player;
    handle(): string;
}

abstract class AbstractPlayer implements Player {

    private nextPlayer!: Player;

    private playerName: string;

    constructor(playerName: string) {
        this.playerName = playerName;
    }

    setNext(player: Player): Player {
        this.nextPlayer = player;
        return player;
    }
    handle(): string {
        if (Math.random() < 0.1) { // 10%概率拿到花
            return `${this.playerName} 拿到了花`;
        }
        return this.nextPlayer.handle();
    }
}

class GamePlayer extends AbstractPlayer {
    constructor(playerName: string) {
        super(playerName);
    }
}

const player1 = new GamePlayer("小明");
const player2 = new GamePlayer("小红");
const player3 = new GamePlayer("小李");

player1.setNext(player2).setNext(player3).setNext(player1);

const result = player1.handle();

console.log(result);
```

## 开发场景类比

在开发中一个常见的情景是处理前端的请求，在处理业务逻辑之前可能会需要对用户请求的内容进行验证，例如：数据验证、用户身份验证、用户权限验证等。在所有验证通过之后，才会处理业务逻辑。

```ts
interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): string;
}

abstract class AbstractHandler implements Handler {

    private nextHandler!: Handler;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }
    handle(request: string): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return "can not handle";
    }
}

class DataVerificationHandler extends AbstractHandler {
    handle(request: string): string {
        if (request === "数据验证") {
            return "数据验证通过";
        }
        return super.handle(request);
    }
}

class PermissionVerification extends AbstractHandler {
    handle(request: string): string {
        if (request === "权限验证") {
            return "权限验证通过";
        }
        return super.handle(request);
    }
}

const dataVerification = new DataVerificationHandler();
const permissionVerification = new PermissionVerification();

dataVerification.setNext(permissionVerification);

console.log(dataVerification.handle("数据验证"));
console.log(dataVerification.handle("权限验证"));
console.log(dataVerification.handle("其他"));
```