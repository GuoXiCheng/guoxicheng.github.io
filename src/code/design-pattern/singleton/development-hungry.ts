// npm run code output/design-pattern/singleton/development-hungry.js

export {};

class Logger {
    private static instance = new Logger();

    private constructor() {}

    private static getLogger() {
        return this.instance;
    }

    public error(msg: string) {
        console.error(msg);
    }
}