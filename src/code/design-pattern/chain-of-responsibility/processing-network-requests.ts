export {};

// 请求接口定义
interface MyRequest {
    // 可以定义多种属性，如用户信息、请求数据等
    user: string;
    data: any;
  }
  
  // 处理者接口
  interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: MyRequest): void;
  }
  
  // 抽象处理者
  abstract class AbstractHandler implements Handler {
    private nextHandler!: Handler;
  
    public setNext(handler: Handler): Handler {
      this.nextHandler = handler;
      return handler;
    }
  
    public handle(request: MyRequest): void {
      if (this.nextHandler) {
        this.nextHandler.handle(request);
      }
    }
  }
  
  // 具体处理者：认证
  class AuthenticationHandler extends AbstractHandler {
    public handle(request: MyRequest): void {
      if (this.authenticate(request)) {
        console.log('Authentication successful');
        super.handle(request);
      } else {
        console.log('Authentication failed');
      }
    }
  
    private authenticate(request: MyRequest): boolean {
      // 认证逻辑
      return request.user === "authorized_user";
    }
  }
  
  // 具体处理者：缓存
  class CacheHandler extends AbstractHandler {
    public handle(request: MyRequest): void {
      if (this.isCached(request)) {
        console.log('Returned from cache');
      } else {
        console.log('Not in cache, processing further');
        super.handle(request);
      }
    }
  
    private isCached(request: MyRequest): boolean {
      // 缓存检查逻辑
      return false;
    }
  }
  
  // 具体处理者：数据处理
  class DataHandler extends AbstractHandler {
    public handle(request: MyRequest): void {
      console.log('Processing data');
      super.handle(request);
    }
  }
  
  // 使用责任链
  let request: MyRequest = { user: "authorized_user", data: {} };
  
  let auth = new AuthenticationHandler();
  let cache = new CacheHandler();
  let data = new DataHandler();
  
  auth.setNext(cache).setNext(data);
  
  // 开始处理请求
  auth.handle(request);  