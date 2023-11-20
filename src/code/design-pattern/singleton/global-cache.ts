export {};

// 创建一个缓存类
class MyCache {
    private static instance: MyCache;
    private store: Record<string, any>;

    private constructor() {
        this.store = {};
    }

    public static getInstance(): MyCache {
        if (!MyCache.instance) {
            MyCache.instance = new MyCache();
        }
        return MyCache.instance;
    }

    set(key: string, value: any): void {
        this.store[key] = value;
    }

    get(key: string): any {
        return this.store[key];
    }
}

const cache1 = MyCache.getInstance();
cache1.set('key1', 'value1');

const cache2 = MyCache.getInstance();
console.log(cache2.get('key1')); // 输出: 'value1'

