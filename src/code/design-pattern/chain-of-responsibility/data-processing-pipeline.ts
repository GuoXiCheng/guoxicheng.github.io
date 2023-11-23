export {};

// 数据接口定义
interface Data {
    // 可以定义多种属性，根据实际需求
    value: any;
  }
  
  // 处理器接口
  interface Handler {
    setNext(handler: Handler): Handler;
    handle(data: Data): Data;
  }
  
  // 抽象处理器
  abstract class AbstractHandler implements Handler {
    private nextHandler!: Handler;
  
    public setNext(handler: Handler): Handler {
      this.nextHandler = handler;
      return handler;
    }
  
    public handle(data: Data): Data {
      if (this.nextHandler) {
        return this.nextHandler.handle(data);
      }
      return data;
    }
  }
  
  // 具体处理器：过滤
  class FilterHandler extends AbstractHandler {
    public handle(data: Data): Data {
      // 过滤逻辑
      console.log('Filtering data');
      data.value = data.value.filter((x: any) => x % 2 === 0); // 举例：过滤奇数
      return super.handle(data);
    }
  }
  
  // 具体处理器：转换
  class TransformHandler extends AbstractHandler {
    public handle(data: Data): Data {
      // 转换逻辑
      console.log('Transforming data');
      data.value = data.value.map((x: any) => x * 2); // 举例：每个元素乘以2
      return super.handle(data);
    }
  }
  
  // 具体处理器：验证
  class ValidateHandler extends AbstractHandler {
    public handle(data: Data): Data {
      // 验证逻辑
      console.log('Validating data');
      // 举例：验证操作，这里简单通过所有数据
      return super.handle(data);
    }
  }
  
  // 使用责任链处理数据
  let rawData: Data = { value: [1, 2, 3, 4, 5] };
  
  let filter = new FilterHandler();
  let transform = new TransformHandler();
  let validate = new ValidateHandler();
  
  filter.setNext(transform).setNext(validate);
  
  // 处理数据
  let processedData = filter.handle(rawData);
  console.log('Processed Data:', processedData);
  