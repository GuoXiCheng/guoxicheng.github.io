export {};

class WaterHeater {
    private static instance: WaterHeater;

    private constructor() {}

    public static getHotWater() {
        if (!this.instance) {
            return new WaterHeater();
        }
        return this.instance;
    }
}