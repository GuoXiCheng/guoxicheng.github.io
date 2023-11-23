export {};

// 命令接口
interface Command {
    execute(): void;
  }
  
  // 具体命令：打开命令
  class OpenCommand implements Command {
    execute(): void {
      console.log("Open command executed");
    }
  }
  
  // 具体命令：关闭命令
  class CloseCommand implements Command {
    execute(): void {
      console.log("Close command executed");
    }
  }
  
  // 处理者接口
  interface Handler {
    setNext(handler: Handler): Handler;
    handle(command: Command): void;
  }
  
  // 抽象处理者
  abstract class AbstractHandler implements Handler {
    private nextHandler!: Handler;
  
    public setNext(handler: Handler): Handler {
      this.nextHandler = handler;
      return handler;
    }
  
    public handle(command: Command): void {
      if (this.nextHandler) {
        this.nextHandler.handle(command);
      }
    }
  }
  
  // 具体处理者：处理打开命令
  class OpenCommandHandler extends AbstractHandler {
    public handle(command: Command): void {
      if (command instanceof OpenCommand) {
        command.execute();
      } else {
        super.handle(command);
      }
    }
  }
  
  // 具体处理者：处理关闭命令
  class CloseCommandHandler extends AbstractHandler {
    public handle(command: Command): void {
      if (command instanceof CloseCommand) {
        command.execute();
      } else {
        super.handle(command);
      }
    }
  }
  
  // 使用责任链
  let openCommand = new OpenCommand();
  let closeCommand = new CloseCommand();
  
  let openHandler = new OpenCommandHandler();
  let closeHandler = new CloseCommandHandler();
  
  openHandler.setNext(closeHandler);
  
  // 处理命令
  openHandler.handle(openCommand);
  openHandler.handle(closeCommand);
  