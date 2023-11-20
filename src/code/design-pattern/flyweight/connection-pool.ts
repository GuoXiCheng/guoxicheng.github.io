export {};

// 网络连接接口
interface NetworkConnection {
    open(): void;
    close(): void;
}

// 网络连接的具体实现
class DatabaseConnection implements NetworkConnection {
    open(): void {
        console.log('Database Connection opened.');
    }

    close(): void {
        console.log('Database Connection closed.');
    }
}

// 创建一个连接池负责管理连接的对象
class ConnectionPool {
    private availableConnections: NetworkConnection[] = [];
    private inUseConnections: NetworkConnection[] = [];

    constructor(private poolSize: number) {
        for (let i = 0; i < this.poolSize; i++) {
            this.availableConnections.push(new DatabaseConnection());
        }
    }

    getConnection(): NetworkConnection {
        if (this.availableConnections.length === 0) {
            throw new Error('No available connections');
        }

        const connection = this.availableConnections.pop()!;
        this.inUseConnections.push(connection);
        connection.open();
        return connection;
    }

    releaseConnection(connection: NetworkConnection): void {
        const connectionIndex = this.inUseConnections.indexOf(connection);
        if (connectionIndex !== -1) {
            this.inUseConnections.splice(connectionIndex, 1);
            this.availableConnections.push(connection);
            connection.close();
        }
    }
}

const pool = new ConnectionPool(2); // 创建一个有两个连接的连接池

try {
    const connection1 = pool.getConnection(); // 获取连接
    // 使用连接...
    pool.releaseConnection(connection1); // 释放连接

    const connection2 = pool.getConnection(); // 再次获取连接
    // 使用连接...
    pool.releaseConnection(connection2); // 释放连接
} catch (error) {
    console.error(error);
}
