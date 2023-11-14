// npm run code output/design-pattern/chain-of-responsibility/development.js

export {};

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