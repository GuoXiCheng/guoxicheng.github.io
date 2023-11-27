export {};

// 操作系统接口
interface OperatingSystem {
    getName(): string;
}

// 具体的操作系统类
class Windows implements OperatingSystem {
    getName(): string {
        return 'Windows';
    }
}

class MacOS implements OperatingSystem {
    getName(): string {
        return 'MacOS';
    }
}

class Linux implements OperatingSystem {
    getName(): string {
        return 'Linux';
    }
}

// 软件产品抽象类
abstract class SoftwareProduct {
    protected os: OperatingSystem;

    constructor(os: OperatingSystem) {
        this.os = os;
    }

    abstract getVersion(): string;
    abstract run(): void;
}

// 具体的软件产品类
class ProductA extends SoftwareProduct {
    getVersion(): string {
        return 'ProductA Version 1.0';
    }

    run(): void {
        console.log(`${this.getVersion()} running on ${this.os.getName()}`);
    }
}

class ProductB extends SoftwareProduct {
    getVersion(): string {
        return 'ProductB Version 2.0';
    }

    run(): void {
        console.log(`${this.getVersion()} running on ${this.os.getName()}`);
    }
}

// 使用示例
const windows = new Windows();
const productAOnWindows = new ProductA(windows);
productAOnWindows.run();

const linux = new Linux();
const productBOnLinux = new ProductB(linux);
productBOnLinux.run();
