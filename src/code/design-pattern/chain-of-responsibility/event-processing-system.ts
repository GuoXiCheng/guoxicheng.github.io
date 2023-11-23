export {};

// 定义一个事件类
class Event {
    constructor(public type: string) {}
  }
  
  // 定义一个抽象处理者类
  abstract class Handler {
    protected successor: Handler | null = null;
  
    setSuccessor(successor: Handler) {
      this.successor = successor;
    }
  
    abstract handleEvent(event: Event): void;
  }
  
  // 具体的事件处理者类
  class MouseClickHandler extends Handler {
    handleEvent(event: Event) {
      if (event.type === 'mouseClick') {
        console.log('处理鼠标点击事件');
      } else if (this.successor) {
        this.successor.handleEvent(event);
      }
    }
  }
  
  class KeyPressHandler extends Handler {
    handleEvent(event: Event) {
      if (event.type === 'keyPress') {
        console.log('处理键盘按键事件');
      } else if (this.successor) {
        this.successor.handleEvent(event);
      }
    }
  }
  
  class TouchHandler extends Handler {
    handleEvent(event: Event) {
      if (event.type === 'touch') {
        console.log('处理触摸事件');
      } else if (this.successor) {
        this.successor.handleEvent(event);
      }
    }
  }
  
  // 创建事件处理链
  const mouseClickHandler = new MouseClickHandler();
  const keyPressHandler = new KeyPressHandler();
  const touchHandler = new TouchHandler();
  
  mouseClickHandler.setSuccessor(keyPressHandler);
  keyPressHandler.setSuccessor(touchHandler);
  
  // 模拟事件触发
  const clickEvent = new Event('mouseClick');
  const keyEvent = new Event('keyPress');
  const touchEvent = new Event('touch');
  
  mouseClickHandler.handleEvent(clickEvent);
  mouseClickHandler.handleEvent(keyEvent);
  mouseClickHandler.handleEvent(touchEvent);
  