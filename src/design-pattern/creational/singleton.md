---
order: 5
---
# 单例模式

## 现实世界类比

假设你要为家里安装热水器，你可以选择储水式热水器或即热式热水器，但是只能选择其中一种。类似的，热水器提供了一个全局访问的节点，可供全家使用。


### 懒汉式

懒汉式就好比是即热式热水器，不需要提前加热，即用即热。

```ts
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
```

### 饿汉式

饿汉式就好比是储水式热水器，需要提前加热好热水，等待使用。

```ts
class WaterHeater {
    private static instance = new WaterHeater();

    private constructor() {}

    public static getHotWater() {
        return this.instance;
    }
}
```

## 开发场景类比

在开发中记录日志时，通常会使用一个全局的访问节点来处理日志信息。

### 懒汉式

```ts
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
```

### 饿汉式

```ts
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
```