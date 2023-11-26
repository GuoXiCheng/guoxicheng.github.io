export {};

// 状态接口
interface ConnectionState {
    connect(connectionContext: ConnectionContext): void;
    disconnect(connectionContext: ConnectionContext): void;
    fail(connectionContext: ConnectionContext): void;
}

// 连接上下文
class ConnectionContext {
    private state: ConnectionState;

    constructor(state: ConnectionState) {
        this.state = state;
    }

    setState(state: ConnectionState): void {
        this.state = state;
        console.log(`连接状态变为：${state.constructor.name}`);
    }

    connect(): void {
        this.state.connect(this);
    }

    disconnect(): void {
        this.state.disconnect(this);
    }

    fail(): void {
        this.state.fail(this);
    }
}

// 具体状态：连接
class ConnectedState implements ConnectionState {
    connect(connectionContext: ConnectionContext): void {
        console.log('已经连接，无需再次连接');
    }

    disconnect(connectionContext: ConnectionContext): void {
        console.log('断开连接');
        connectionContext.setState(new DisconnectedState());
    }

    fail(connectionContext: ConnectionContext): void {
        console.log('连接时发生错误');
        connectionContext.setState(new FailedState());
    }
}

// 具体状态：断开
class DisconnectedState implements ConnectionState {
    connect(connectionContext: ConnectionContext): void {
        console.log('正在连接...');
        connectionContext.setState(new ConnectingState());
    }

    disconnect(connectionContext: ConnectionContext): void {
        console.log('已经断开，无需再次断开');
    }

    fail(connectionContext: ConnectionContext): void {
        console.log('连接失败');
        connectionContext.setState(new FailedState());
    }
}

// 具体状态：正在连接
class ConnectingState implements ConnectionState {
    connect(connectionContext: ConnectionContext): void {
        console.log('已经在连接中...');
    }

    disconnect(connectionContext: ConnectionContext): void {
        console.log('连接尚未完成，无法断开');
    }

    fail(connectionContext: ConnectionContext): void {
        console.log('连接失败');
        connectionContext.setState(new FailedState());
    }
}

// 具体状态：连接失败
class FailedState implements ConnectionState {
    connect(connectionContext: ConnectionContext): void {
        console.log('尝试重新连接...');
        connectionContext.setState(new ConnectingState());
    }

    disconnect(connectionContext: ConnectionContext): void {
        console.log('已经断开');
        connectionContext.setState(new DisconnectedState());
    }

    fail(connectionContext: ConnectionContext): void {
        console.log('连接失败');
    }
}

const connection = new ConnectionContext(new DisconnectedState());

connection.connect(); // 输出: 正在连接...
// 假设连接成功
connection.setState(new ConnectedState());

connection.disconnect(); // 输出: 断开连接
