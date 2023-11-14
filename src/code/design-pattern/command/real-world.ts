// npm run code output/design-pattern/command/real-world.js

export {};

interface Command {
    execute(order: string): void;
}

class Bulb {
    private isLight = false;

    on() {
        this.isLight = true;
        console.log("Bulb is turned on");
    }

    off() {
        this.isLight = false;
        console.log("Bulb is turned off");
    }

    getBulbStatus() {
        return this.isLight ? "on" : "off";
    }
}

class LightCommand implements Command {
    constructor(private receiver: Bulb) {}

    execute(order: string) {
        if (order === "打开灯光") {
            this.receiver.on();
        } else if (order === "关闭灯光") {
            this.receiver.off();
        }
    }
}

const bulb = new Bulb();
const lightCommand = new LightCommand(bulb);

lightCommand.execute("打开灯光");
console.log(`Bulb is: ${bulb.getBulbStatus()}`);

lightCommand.execute("关闭灯光");
console.log(`Bulb is: ${bulb.getBulbStatus()}`);
