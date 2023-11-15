export {};

class WaterHeater {
    private static instance = new WaterHeater();

    private constructor() {}

    public static getHotWater() {
        return this.instance;
    }
}