export {};

// 抽象产品：数据库连接
interface DatabaseConnection {
    connect(): void;
}

// 具体产品：MySQL连接
class MySQLConnection implements DatabaseConnection {
    connect() {
        console.log("Connected to MySQL database.");
    }
}

// 具体产品：PostgreSQL连接
class PostgreSQLConnection implements DatabaseConnection {
    connect() {
        console.log("Connected to PostgreSQL database.");
    }
}

// 抽象产品：消息传递
interface MessageService {
    sendMessage(message: string): void;
}

// 具体产品：邮件服务
class EmailService implements MessageService {
    sendMessage(message: string) {
        console.log(`Email: ${message}`);
    }
}

// 具体产品：SMS服务
class SMSService implements MessageService {
    sendMessage(message: string) {
        console.log(`SMS: ${message}`);
    }
}

// 抽象工厂
interface AbstractFactory {
    createDatabaseConnection(): DatabaseConnection;
    createMessageService(): MessageService;
}

// 具体工厂：生产MySQL和邮件服务的产品
class MySQLAndEmailFactory implements AbstractFactory {
    createDatabaseConnection(): DatabaseConnection {
        return new MySQLConnection();
    }
    createMessageService(): MessageService {
        return new EmailService();
    }
}

// 具体工厂：生产PostgreSQL和SMS服务的产品
class PostgreSQLAndSMSFactory implements AbstractFactory {
    createDatabaseConnection(): DatabaseConnection {
        return new PostgreSQLConnection();
    }
    createMessageService(): MessageService {
        return new SMSService();
    }
}

function clientCode(factory: AbstractFactory) {
    const dbConnection = factory.createDatabaseConnection();
    dbConnection.connect();

    const messageService = factory.createMessageService();
    messageService.sendMessage("Hello World");
}

// 使用MySQL和邮件服务的工厂
clientCode(new MySQLAndEmailFactory());

// 使用PostgreSQL和SMS服务的工厂
clientCode(new PostgreSQLAndSMSFactory());
