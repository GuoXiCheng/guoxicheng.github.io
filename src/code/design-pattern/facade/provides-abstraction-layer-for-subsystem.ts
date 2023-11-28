export {};

// 子系统类
class SubsystemOne {
    complexOperationOne(): string {
        return 'SubsystemOne: Complex operation';
    }
}

class SubsystemTwo {
    complexOperationTwo(): string {
        return 'SubsystemTwo: Complex operation';
    }
}

// 外观类
class Facade {
    private subsystemOne: SubsystemOne;
    private subsystemTwo: SubsystemTwo;

    constructor(subsystemOne: SubsystemOne, subsystemTwo: SubsystemTwo) {
        this.subsystemOne = subsystemOne || new SubsystemOne();
        this.subsystemTwo = subsystemTwo || new SubsystemTwo();
    }

    // 外观类提供的稳定接口
    operation(): string {
        const resultOne = this.subsystemOne.complexOperationOne();
        const resultTwo = this.subsystemTwo.complexOperationTwo();

        return `Facade coordinates operations: \n${resultOne}\n${resultTwo}`;
    }
}

// 客户端代码
const facade = new Facade(new SubsystemOne(), new SubsystemTwo());
console.log(facade.operation());
