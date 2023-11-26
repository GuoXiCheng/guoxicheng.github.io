export {};

interface SmartHomeMediator {
    notify(event: string): void;
}

abstract class SmartDevice {
    constructor(protected mediator: SmartHomeMediator) {}

    abstract triggerEvent(event: string): void;
}

class Lights extends SmartDevice {
    triggerEvent(event: string): void {
        console.log(`Lights received event: ${event}`);
        this.mediator.notify(event);
    }

    turnOn(): void {
        console.log('Lights turned on');
    }

    turnOff(): void {
        console.log('Lights turned off');
    }
}

class AirConditioner extends SmartDevice {
    triggerEvent(event: string): void {
        console.log(`AirConditioner received event: ${event}`);
        this.mediator.notify(event);
    }

    setTemperature(temperature: number): void {
        console.log(`AirConditioner temperature set to ${temperature} degrees`);
    }
}

class SecuritySystem extends SmartDevice {
    triggerEvent(event: string): void {
        console.log(`SecuritySystem received event: ${event}`);
        this.mediator.notify(event);
    }

    activate(): void {
        console.log('Security system activated');
    }

    deactivate(): void {
        console.log('Security system deactivated');
    }
}

class SmartHome implements SmartHomeMediator {
    private lights: Lights = new Lights(this);
    private airConditioner: AirConditioner = new AirConditioner(this);
    private securitySystem: SecuritySystem = new SecuritySystem(this);

    notify(event: string): void {
        console.log(`Mediator notified of event: ${event}`);
        switch (event) {
            case 'ArrivedHome':
                this.lights.turnOn();
                this.airConditioner.setTemperature(22);
                this.securitySystem.deactivate();
                break;
            case 'LeftHome':
                this.lights.turnOff();
                this.securitySystem.activate();
                break;
            // 可以添加更多事件类型和逻辑
        }
    }

    // 方法来模拟事件触发
    simulateArrival(): void {
        this.lights.triggerEvent('ArrivedHome');
    }

    simulateDeparture(): void {
        this.securitySystem.triggerEvent('LeftHome');
    }
}

const smartHome = new SmartHome();

// 模拟家庭成员到家的情况
smartHome.simulateArrival();

// 模拟家庭成员离家的情况
smartHome.simulateDeparture();
