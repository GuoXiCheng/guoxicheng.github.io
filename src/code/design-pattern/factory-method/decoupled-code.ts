export {};

// 数据库连接接口
interface DatabaseConnection {
    connect(): void;
}

// 具体数据库连接类
class MySQLConnection implements DatabaseConnection {
    connect(): void {
        console.log("Connecting to MySQL database");
    }
}

class SQLiteConnection implements DatabaseConnection {
    connect(): void {
        console.log("Connecting to SQLite database");
    }
}

class PostgreSQLConnection implements DatabaseConnection {
    connect(): void {
        console.log("Connecting to PostgreSQL database");
    }
}

// 数据库连接工厂
abstract class ConnectionFactory {
    // 工厂方法
    abstract createConnection(): DatabaseConnection;
}

// 具体工厂子类
class MySQLConnectionFactory extends ConnectionFactory {
    createConnection(): DatabaseConnection {
        return new MySQLConnection();
    }
}

class SQLiteConnectionFactory extends ConnectionFactory {
    createConnection(): DatabaseConnection {
        return new SQLiteConnection();
    }
}

class PostgreSQLConnectionFactory extends ConnectionFactory {
    createConnection(): DatabaseConnection {
        return new PostgreSQLConnection();
    }
}

// 客户端代码
function clientCode(factory: ConnectionFactory) {
    const connection = factory.createConnection();
    connection.connect();
}

// 根据需要创建不同类型的数据库连接
clientCode(new MySQLConnectionFactory());
clientCode(new SQLiteConnectionFactory());
clientCode(new PostgreSQLConnectionFactory());
