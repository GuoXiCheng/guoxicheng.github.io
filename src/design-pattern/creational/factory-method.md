---
order: 1
---

# 工厂方法模式

## 真实世界类比

假设你要去菜鸟驿站寄快递，你可以选择京东快递、顺丰快递、中通快递等，并且这个菜鸟驿站后续可能还会有其他快递公司入驻。

```ts
interface ExpressService {
    delivery(): string;
}

class JDExpress implements ExpressService {
    delivery(): string {
        return "京东快递";
    }

}

class SFExpress implements ExpressService {
    delivery(): string {
        return "顺丰快递";
    }

}

class ZTExpress implements ExpressService {
    delivery(): string {
        return "中通快递";
    }

}

abstract class CainiaoYizhanExpressService {
    public abstract createExpress(): ExpressService;

    public expressDelivery() {
        const express = this.createExpress();
        console.log(`我要寄出: ${express.delivery()}`);
    }
}

class JDExpressService extends CainiaoYizhanExpressService {
    public createExpress(): ExpressService {
        return new JDExpress();
    }
}

class SFExpressService extends CainiaoYizhanExpressService {
    public createExpress(): ExpressService {
        return new SFExpress();
    }
}

class ZTExpressService extends CainiaoYizhanExpressService {
    public createExpress(): ExpressService {
        return new ZTExpress();
    }
}

function clientNode(express: "京东" | "顺丰" | "中通") {
    let expressService: CainiaoYizhanExpressService;
    switch(express) {
        case "京东":
            expressService = new JDExpressService();
            break;
        case "顺丰":
            expressService = new SFExpressService();
            break;
        case "中通":
            expressService = new ZTExpressService();
            break;
        default:
            throw new Error();
    }
    expressService.expressDelivery();
}

clientNode("京东");
```


## 业务场景类比

在使用ORM框架开发时，可能会创建多种数据库连接，例如：使用sqlite运行测试，在开发中使用mysql运行，在生产环境为了更好的性能而选择oracle。

```ts
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
```