export {};

// 观察者接口
interface Observer {
    update: (eventData: string) => void;
}

// 主题类
class Subject {
    private observers: Observer[] = [];

    // 订阅
    public subscribe(observer: Observer): void {
        this.observers.push(observer);
    }

    // 取消订阅
    public unsubscribe(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    // 通知所有观察者
    protected notify(eventData: string): void {
        this.observers.forEach(observer => observer.update(eventData));
    }

    // 触发事件
    public triggerEvent(eventData: string): void {
        this.notify(eventData);
    }
}

// 具体的观察者：按钮点击监听器
class ButtonClickListener implements Observer {
    update(eventData: string) {
        console.log(`Button Click Event: ${eventData}`);
    }
}

// 具体的观察者：鼠标移动监听器
class MouseMoveListener implements Observer {
    update(eventData: string) {
        console.log(`Mouse Move Event: ${eventData}`);
    }
}

// 具体的观察者：键盘事件监听器
class KeyboardEventListener implements Observer {
    update(eventData: string) {
        console.log(`Keyboard Event: ${eventData}`);
    }
}

// 创建 Subject 实例
const guiEventSubject = new Subject();

// 创建观察者实例
const buttonClickListener = new ButtonClickListener();
const mouseMoveListener = new MouseMoveListener();
const keyboardEventListener = new KeyboardEventListener();

// 订阅事件
guiEventSubject.subscribe(buttonClickListener);
guiEventSubject.subscribe(mouseMoveListener);
guiEventSubject.subscribe(keyboardEventListener);

// 模拟事件触发
guiEventSubject.triggerEvent('Button A clicked');
guiEventSubject.triggerEvent('Mouse moved to position (100, 200)');
guiEventSubject.triggerEvent('Key pressed: Enter');
