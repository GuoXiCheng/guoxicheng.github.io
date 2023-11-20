// 定义元素接口，用于接收访问者
interface MyElement {
    accept(visitor: Visitor): void;
}

// 访问者接口
interface Visitor {
    visitConcreteElementA(element: ConcreteElementA): void;
    visitConcreteElementB(element: ConcreteElementB): void;
    // 更多元素的访问方法可以在这里添加
}

// 创建具体元素
class ConcreteElementA implements MyElement {
    accept(visitor: Visitor): void {
        visitor.visitConcreteElementA(this);
    }

    operationA(): void {
        console.log('ConcreteElementA operation.');
    }
}

class ConcreteElementB implements MyElement {
    accept(visitor: Visitor): void {
        visitor.visitConcreteElementB(this);
    }

    operationB(): void {
        console.log('ConcreteElementB operation.');
    }
}

// 为不同操作创建具体访问者
class ConcreteVisitor1 implements Visitor {
    visitConcreteElementA(element: ConcreteElementA): void {
        console.log('ConcreteVisitor1 visiting ConcreteElementA.');
        element.operationA();
    }

    visitConcreteElementB(element: ConcreteElementB): void {
        console.log('ConcreteVisitor1 visiting ConcreteElementB.');
        element.operationB();
    }
}

class ConcreteVisitor2 implements Visitor {
    visitConcreteElementA(element: ConcreteElementA): void {
        console.log('ConcreteVisitor2 visiting ConcreteElementA.');
        element.operationA();
    }

    visitConcreteElementB(element: ConcreteElementB): void {
        console.log('ConcreteVisitor2 visiting ConcreteElementB.');
        element.operationB();
    }
}

const elements: MyElement[] = [
    new ConcreteElementA(),
    new ConcreteElementB()
];

const visitor1 = new ConcreteVisitor1();
const visitor2 = new ConcreteVisitor2();

elements.forEach(element => {
    element.accept(visitor1); // 每个元素接受 ConcreteVisitor1
});

elements.forEach(element => {
    element.accept(visitor2); // 每个元素接受 ConcreteVisitor2
});
