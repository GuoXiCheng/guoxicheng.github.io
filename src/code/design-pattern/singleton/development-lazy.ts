// npm run code src/code/design-pattern/singleton/development-lazy.ts

export {};

class Logger {
    private static instance: Logger;

    private constructor() {}

    public static getLogger() {
        if (!this.instance) {
            return new Logger();
        }
        return this.instance;
    }

    public error(msg: string) {
        console.error(msg);
    }
}