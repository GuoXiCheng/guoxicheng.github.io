export {};

interface Subject {
    performAction(): void;
}

class RealSubject implements Subject {
    performAction(): void {
        console.log("RealSubject: Performing action");
    }
}

class SmartReferenceProxy implements Subject {
    private realSubject: RealSubject;
    private accessCount: number = 0;

    constructor(realSubject: RealSubject) {
        this.realSubject = realSubject;
    }

    performAction(): void {
        this.accessCount++;
        console.log(`SmartReferenceProxy: Access count is ${this.accessCount}`);
        
        // 在调用真实对象之前可以执行一些额外的操作
        console.log("SmartReferenceProxy: Additional actions before calling RealSubject");
        
        this.realSubject.performAction();

        // 在调用真实对象之后也可以执行一些额外的操作
        console.log("SmartReferenceProxy: Additional actions after calling RealSubject");
    }
}

function clientCode(subject: Subject) {
    subject.performAction();
}

const realSubject = new RealSubject();
const proxy = new SmartReferenceProxy(realSubject);
clientCode(proxy); // 第一次调用
clientCode(proxy); // 第二次调用
