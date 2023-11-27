export {};

// SyntaxNode 接口
interface SyntaxNode {
    print(): void;
    add?(node: SyntaxNode): void;
}

// Expression 类
class Expression implements SyntaxNode {
    constructor(private expression: string) {}

    print(): void {
        console.log(`Expression: ${this.expression}`);
    }
}

// Loop 类
class Loop implements SyntaxNode {
    private nodes: SyntaxNode[] = [];

    add(node: SyntaxNode): void {
        this.nodes.push(node);
    }

    print(): void {
        console.log("Loop:");
        for (const node of this.nodes) {
            node.print();
        }
    }
}

// Conditional 类
class Conditional implements SyntaxNode {
    private nodes: SyntaxNode[] = [];

    add(node: SyntaxNode): void {
        this.nodes.push(node);
    }

    print(): void {
        console.log("Conditional:");
        for (const node of this.nodes) {
            node.print();
        }
    }
}

// 使用示例
const rootNode = new Loop();
const expr1 = new Expression("x > 0");
const conditional = new Conditional();
const expr2 = new Expression("x = x - 1");

conditional.add(expr2);
rootNode.add(expr1);
rootNode.add(conditional);

rootNode.print();
