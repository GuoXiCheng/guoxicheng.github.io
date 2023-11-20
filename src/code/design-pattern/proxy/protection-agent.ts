export {};

// 定义真实对象和代理的共同接口
interface SensitiveOperation {
    performOperation(): void;
}

// 创建真实对象类
class SensitiveObject implements SensitiveOperation {
    performOperation(): void {
        console.log("Performing a sensitive operation.");
    }
}

// 创建保护代理类
class ProtectedProxy implements SensitiveOperation {
    private sensitiveObject: SensitiveObject;
    private hasAccess: boolean;

    constructor(userRole: string) {
        this.sensitiveObject = new SensitiveObject();
        this.hasAccess = userRole === "admin"; // 假设只有管理员有权限
    }

    performOperation(): void {
        if (this.hasAccess) {
            this.sensitiveObject.performOperation();
        } else {
            console.log("Access denied. You do not have permission to perform this operation.");
        }
    }
}

const adminProxy = new ProtectedProxy("admin");
adminProxy.performOperation(); // 输出: Performing a sensitive operation.

const userProxy = new ProtectedProxy("user");
userProxy.performOperation(); // 输出: Access denied. You do not have permission to perform this operation.
