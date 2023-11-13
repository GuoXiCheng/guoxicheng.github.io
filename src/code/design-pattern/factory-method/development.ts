interface DBOption {
    getOption(): string;
}

class SqliteOption implements DBOption {
    getOption(): string {
        return "sqlite连线配置";
    }
}

class MysqlOption implements DBOption {
    getOption(): string {
        return "mysql连线配置";
    }
}

class OracleOption implements DBOption {
    getOption(): string {
        return "oracle连线配置";
    }
}

abstract class DBConnection {
    public abstract createOption(): DBOption;

    public createConnection() {
        const options = this.createOption();
        console.log(`使用${options.getOption()}连接数据库`);
    }
}

class SqliteConnection extends DBConnection {
    public createOption(): DBOption {
        return new SqliteOption();
    }
}

class MysqlConnection extends DBConnection {
    public createOption(): DBOption {
        return new MysqlOption();
    }
}

class OracleConnection extends DBConnection {
    public createOption(): DBOption {
        return new OracleOption();
    }
}

function clientNode(env: "DEV" | "QAS" | "PRD") {
    let connection: DBConnection;
    switch(env) {
        case "DEV":
            connection = new SqliteConnection();
            break;
        case "QAS":
            connection = new MysqlConnection();
            break;
        case "PRD":
            connection = new OracleConnection();
            break;
        default:
            throw new Error();
    }
    connection.createConnection();
}

clientNode("DEV");

clientNode("QAS");

clientNode("PRD");