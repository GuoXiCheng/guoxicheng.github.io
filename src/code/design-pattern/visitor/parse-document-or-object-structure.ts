export {};

interface MyElement {
    accept(visitor: Visitor): void;
}

class XMLNode implements MyElement {
    accept(visitor: Visitor): void {
        visitor.visitXMLNode(this);
    }

    // XMLNode 特有的方法
    getTagName(): string {
        return "XML Tag";
    }
}

class JSONNode implements MyElement {
    accept(visitor: Visitor): void {
        visitor.visitJSONNode(this);
    }

    // JSONNode 特有的方法
    getKeyName(): string {
        return "JSON Key";
    }
}

interface Visitor {
    visitXMLNode(node: XMLNode): void;
    visitJSONNode(node: JSONNode): void;
}

class SyntaxChecker implements Visitor {
    visitXMLNode(node: XMLNode): void {
        console.log("Checking syntax for XMLNode with tag: " + node.getTagName());
    }

    visitJSONNode(node: JSONNode): void {
        console.log("Checking syntax for JSONNode with key: " + node.getKeyName());
    }
}

class Renderer implements Visitor {
    visitXMLNode(node: XMLNode): void {
        console.log("Rendering XMLNode with tag: " + node.getTagName());
    }

    visitJSONNode(node: JSONNode): void {
        console.log("Rendering JSONNode with key: " + node.getKeyName());
    }
}

const xmlNode = new XMLNode();
const jsonNode = new JSONNode();

const syntaxChecker = new SyntaxChecker();
const renderer = new Renderer();

xmlNode.accept(syntaxChecker);
jsonNode.accept(renderer);
