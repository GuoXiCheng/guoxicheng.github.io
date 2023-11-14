// npm run code output/design-pattern/singleton/real-world-hungry.js

export {};

class WaterHeater {
    private static instance = new WaterHeater();

    private constructor() {}

    public static getHotWater() {
        return this.instance;
    }
}