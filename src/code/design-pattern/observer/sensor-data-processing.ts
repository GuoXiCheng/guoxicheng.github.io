export {};

// Observer interface
interface Observer {
    update(sensorData: string): void;
}

// ConcreteObserver
class SystemComponent implements Observer {
    constructor(private name: string) {}

    update(sensorData: string): void {
        console.log(`${this.name} received sensor data: ${sensorData}`);
    }
}

// Subject interface
interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

// ConcreteSubject
class Sensor implements Subject {
    private observers: Observer[] = [];
    private data: string = '';

    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.data);
        }
    }

    setData(newData: string): void {
        this.data = newData;
        this.notifyObservers();
    }
}

// 使用示例
const temperatureSensor = new Sensor();

const heatingSystem = new SystemComponent("HeatingSystem");
const coolingSystem = new SystemComponent("CoolingSystem");

temperatureSensor.registerObserver(heatingSystem);
temperatureSensor.registerObserver(coolingSystem);

temperatureSensor.setData("Temperature: 22°C");
