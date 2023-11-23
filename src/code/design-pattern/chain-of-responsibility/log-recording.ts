export {};

// 定义一个日志消息类
class LogMessage {
    constructor(public level: string, public message: string) {}
  }
  
  // 定义一个抽象日志处理者类
  abstract class LogHandler {
    protected nextHandler: LogHandler | null = null;
  
    setNextHandler(handler: LogHandler) {
      this.nextHandler = handler;
    }
  
    abstract handleLogMessage(message: LogMessage): void;
  }
  
  // 具体的日志处理者类
  class ConsoleLogHandler extends LogHandler {
    handleLogMessage(message: LogMessage) {
      if (message.level === 'DEBUG' || message.level === 'INFO') {
        console.log(`[Console] ${message.level}: ${message.message}`);
      }
  
      if (this.nextHandler) {
        this.nextHandler.handleLogMessage(message);
      }
    }
  }
  
  class FileLogHandler extends LogHandler {
    handleLogMessage(message: LogMessage) {
      if (message.level === 'DEBUG' || message.level === 'INFO' || message.level === 'ERROR') {
        // 省略将日志写入文件的代码
        console.log(`[File] ${message.level}: ${message.message}`);
      }
  
      if (this.nextHandler) {
        this.nextHandler.handleLogMessage(message);
      }
    }
  }
  
  class RemoteLogHandler extends LogHandler {
    handleLogMessage(message: LogMessage) {
      // 姑且假设远程服务器可以处理所有级别的日志
      // 省略将日志发送到远程服务器的代码
      console.log(`[Remote] ${message.level}: ${message.message}`);
  
      if (this.nextHandler) {
        this.nextHandler.handleLogMessage(message);
      }
    }
  }
  
  // 创建日志处理链
  const consoleLogHandler = new ConsoleLogHandler();
  const fileLogHandler = new FileLogHandler();
  const remoteLogHandler = new RemoteLogHandler();
  
  consoleLogHandler.setNextHandler(fileLogHandler);
  fileLogHandler.setNextHandler(remoteLogHandler);
  
  // 模拟记录不同级别的日志消息
  const debugMessage = new LogMessage('DEBUG', 'This is a debug message');
  const infoMessage = new LogMessage('INFO', 'This is an info message');
  const errorMessage = new LogMessage('ERROR', 'This is an error message');
  
  consoleLogHandler.handleLogMessage(debugMessage);
  consoleLogHandler.handleLogMessage(infoMessage);
  consoleLogHandler.handleLogMessage(errorMessage);
  