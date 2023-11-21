export {};

// 抽象产品：文本显示
interface TextDisplay {
    display(text: string): void;
}

// 抽象产品：消息处理
interface MessageHandler {
    handleMessage(message: string): void;
}

// 英语环境的具体产品
class EnglishTextDisplay implements TextDisplay {
    display(text: string) {
        console.log(`Displaying in English: ${text}`);
    }
}

class EnglishMessageHandler implements MessageHandler {
    handleMessage(message: string) {
        console.log(`Handling English message: ${message}`);
    }
}

// 中文环境的具体产品
class ChineseTextDisplay implements TextDisplay {
    display(text: string) {
        console.log(`显示中文: ${text}`);
    }
}

class ChineseMessageHandler implements MessageHandler {
    handleMessage(message: string) {
        console.log(`处理中文消息: ${message}`);
    }
}

// 抽象工厂
interface LocalizationFactory {
    createTextDisplay(): TextDisplay;
    createMessageHandler(): MessageHandler;
}

// 英语环境的工厂
class EnglishLocalizationFactory implements LocalizationFactory {
    createTextDisplay(): TextDisplay {
        return new EnglishTextDisplay();
    }
    createMessageHandler(): MessageHandler {
        return new EnglishMessageHandler();
    }
}

// 中文环境的工厂
class ChineseLocalizationFactory implements LocalizationFactory {
    createTextDisplay(): TextDisplay {
        return new ChineseTextDisplay();
    }
    createMessageHandler(): MessageHandler {
        return new ChineseMessageHandler();
    }
}

function clientCode(factory: LocalizationFactory) {
    const textDisplay = factory.createTextDisplay();
    const messageHandler = factory.createMessageHandler();

    textDisplay.display("Hello World");
    messageHandler.handleMessage("This is a test message");
}

// 使用英语环境的工厂
clientCode(new EnglishLocalizationFactory());

// 使用中文环境的工厂
clientCode(new ChineseLocalizationFactory());
