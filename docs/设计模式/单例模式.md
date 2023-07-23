# 单例模式

## TypeScript

=== "懒汉式"

    ```typescript
    class Singleton {
        private static instance: Singleton;

        private constructor() {
            // 私有化构造函数，防止外部实例化
        }

        public static getInstance(): Singleton {
            if (!Singleton.instance) {
                Singleton.instance = new Singleton();
            }
            return Singleton.instance;
        }

        public someMethod(): void {
            console.log("Executing some method...");
        }
    }
    ```

=== "饿汉式"

    ```typescript
    class Singleton {
        private static instance: Singleton = new Singleton();

        private constructor() {
            // 私有化构造函数，防止外部实例化
        }

        public static getInstance(): Singleton {
            return Singleton.instance;
        }

        public someMethod(): void {
            console.log("Executing some method...");
        }
    }
    ```


