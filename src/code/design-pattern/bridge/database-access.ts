export {};

// 数据库访问接口
interface Database {
    connect(): void;
    query(sql: string): any;
    disconnect(): void;
}

// 具体数据库实现
class MySqlDatabase implements Database {
    connect(): void {
        console.log('Connecting to MySQL database.');
    }

    query(sql: string): any {
        console.log(`Querying: ${sql}`);
        // 实现查询逻辑...
    }

    disconnect(): void {
        console.log('Disconnecting from MySQL database.');
    }
}

class PostgreSqlDatabase implements Database {
    connect(): void {
        console.log('Connecting to PostgreSQL database.');
    }

    query(sql: string): any {
        console.log(`Querying: ${sql}`);
        // 实现查询逻辑...
    }

    disconnect(): void {
        console.log('Disconnecting from PostgreSQL database.');
    }
}

// 创建一个抽象类持有数据库访问接口的引用，并定义与数据库操作相关的业务逻辑
abstract class DataService {
    protected database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    abstract processData(): void;
}

class UserDataService extends DataService {
    processData(): void {
        this.database.connect();
        // 业务逻辑，例如查询用户数据
        this.database.query("SELECT * FROM users");
        this.database.disconnect();
    }
}

class ProductDataService extends DataService {
    processData(): void {
        this.database.connect();
        // 业务逻辑，例如查询产品数据
        this.database.query("SELECT * FROM products");
        this.database.disconnect();
    }
}

const mysqlDatabase = new MySqlDatabase();
const postgresDatabase = new PostgreSqlDatabase();

const userService = new UserDataService(mysqlDatabase);
userService.processData(); // 使用 MySQL 数据库处理用户数据

const productService = new ProductDataService(postgresDatabase);
productService.processData(); // 使用 PostgreSQL 数据库处理产品数据
