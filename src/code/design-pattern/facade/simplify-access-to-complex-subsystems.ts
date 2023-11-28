export {};

// 定义复杂子系统的类
class SystemA {
    operationA(): string {
        return 'SystemA operation';
    }
}

class SystemB {
    operationB(): string {
        return 'SystemB operation';
    }
}

class SystemC {
    operationC(): string {
        return 'SystemC operation';
    }
}

// 创建外观类
class Facade {
    private systemA: SystemA;
    private systemB: SystemB;
    private systemC: SystemC;

    constructor() {
        this.systemA = new SystemA();
        this.systemB = new SystemB();
        this.systemC = new SystemC();
    }

    // 提供给外部的简化接口
    operate(): string {
        const resultA = this.systemA.operationA();
        const resultB = this.systemB.operationB();
        const resultC = this.systemC.operationC();

        // 组合子系统的操作
        return `${resultA} | ${resultB} | ${resultC}`;
    }
}

// 客户端代码
const facade = new Facade();
console.log(facade.operate());
