export {};

// 子系统类
class SubsystemOne {
    operationOne(): string {
        return 'SubsystemOne: Ready!';
    }

    operationN(): string {
        return 'SubsystemOne: Go!';
    }
}

class SubsystemTwo {
    operationOne(): string {
        return 'SubsystemTwo: Get ready!';
    }

    operationZ(): string {
        return 'SubsystemTwo: Fire!';
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

    // 外观类提供的简化接口
    operation(): string {
        let result = 'Facade initializes subsystems:\n';
        result += this.subsystemOne.operationOne();
        result += this.subsystemTwo.operationOne();
        result += 'Facade orders subsystems to perform the action:\n';
        result += this.subsystemOne.operationN();
        result += this.subsystemTwo.operationZ();
        return result;
    }
}

// 客户端代码
const subsystemOne = new SubsystemOne();
const subsystemTwo = new SubsystemTwo();
const facade = new Facade(subsystemOne, subsystemTwo);

// 客户端通过外观类与子系统交互
console.log(facade.operation());
