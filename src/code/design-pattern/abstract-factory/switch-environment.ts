export {};

// 定义一些“产品”接口
interface DatabaseConnection {
    query(sql: string): any;
}

interface Logger {
    log(message: string): void;
}

// 创建具体的产品实现类
// 生产环境的实现
class ProductionDatabaseConnection implements DatabaseConnection {
    query(sql: string): any {
        // 实现数据库查询逻辑
        console.log(`Executing SQL on production database: ${sql}`);
    }
}

class ProductionLogger implements Logger {
    log(message: string): void {
        // 实现日志记录逻辑
        console.log(`Logging in production: ${message}`);
    }
}

// 测试环境的实现（模拟对象）
class MockDatabaseConnection implements DatabaseConnection {
    query(sql: string): any {
        console.log(`Mock query executed: ${sql}`);
    }
}

class MockLogger implements Logger {
    log(message: string): void {
        console.log(`Mock log: ${message}`);
    }
}

// 定义一个抽象工厂接口，它包含创建所有不同类型产品的方法
interface AbstractFactory {
    createDatabaseConnection(): DatabaseConnection;
    createLogger(): Logger;
}

// 创建具体的工厂类
class ProductionEnvironmentFactory implements AbstractFactory {
    createDatabaseConnection(): DatabaseConnection {
        return new ProductionDatabaseConnection();
    }

    createLogger(): Logger {
        return new ProductionLogger();
    }
}

class TestEnvironmentFactory implements AbstractFactory {
    createDatabaseConnection(): DatabaseConnection {
        return new MockDatabaseConnection();
    }

    createLogger(): Logger {
        return new MockLogger();
    }
}

function clientCode(factory: AbstractFactory): void {
    const dbConnection = factory.createDatabaseConnection();
    const logger = factory.createLogger();

    dbConnection.query("SELECT * FROM users");
    logger.log("Query executed.");
}

// 生产环境
const productionFactory = new ProductionEnvironmentFactory();
clientCode(productionFactory);

// 测试环境
const testFactory = new TestEnvironmentFactory();
clientCode(testFactory);
