export {};

abstract class BuildAndTestProcess {
    // 这是模板方法
    public execute(): void {
        this.build();
        this.test();
        this.cleanup();
    }

    // 这些是在子类中可能被覆盖的步骤
    protected abstract build(): void;
    protected abstract test(): void;

    // 这是一个通用方法，可以被覆盖，也可以不被覆盖
    protected cleanup(): void {
        console.log('Cleaning up resources...');
    }
}

// 项目A的具体实现
class ProjectA extends BuildAndTestProcess {
    protected build(): void {
        console.log('Building Project A...');
    }

    protected test(): void {
        console.log('Testing Project A...');
    }
}

// 项目B的具体实现
class ProjectB extends BuildAndTestProcess {
    protected build(): void {
        console.log('Building Project B...');
    }

    protected test(): void {
        console.log('Testing Project B...');
    }

    // 重写cleanup方法
    protected cleanup(): void {
        console.log('Custom cleanup for Project B...');
    }
}

// 使用
const projectA = new ProjectA();
projectA.execute();

const projectB = new ProjectB();
projectB.execute();
