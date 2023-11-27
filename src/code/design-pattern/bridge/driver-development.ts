export {};

// 硬件接口
interface HardwareInterface {
    sendCommand(command: string): void;
    receiveData(): string;
}

// 具体的硬件类
class KeyboardHardware implements HardwareInterface {
    sendCommand(command: string): void {
        console.log(`Sending '${command}' to Keyboard`);
    }

    receiveData(): string {
        return 'Keyboard data';
    }
}

class MouseHardware implements HardwareInterface {
    sendCommand(command: string): void {
        console.log(`Sending '${command}' to Mouse`);
    }

    receiveData(): string {
        return 'Mouse data';
    }
}

// 驱动程序抽象类
abstract class Driver {
    protected hardware: HardwareInterface;

    constructor(hardware: HardwareInterface) {
        this.hardware = hardware;
    }

    abstract execute(): void;
}

// 具体的驱动程序类
class KeyboardDriver extends Driver {
    execute(): void {
        console.log('Executing Keyboard driver logic');
        this.hardware.sendCommand('keyboard-init');
        console.log(`Received: ${this.hardware.receiveData()}`);
    }
}

class MouseDriver extends Driver {
    execute(): void {
        console.log('Executing Mouse driver logic');
        this.hardware.sendCommand('mouse-init');
        console.log(`Received: ${this.hardware.receiveData()}`);
    }
}

// 使用示例
const keyboardHardware = new KeyboardHardware();
const keyboardDriver = new KeyboardDriver(keyboardHardware);
keyboardDriver.execute();

const mouseHardware = new MouseHardware();
const mouseDriver = new MouseDriver(mouseHardware);
mouseDriver.execute();
