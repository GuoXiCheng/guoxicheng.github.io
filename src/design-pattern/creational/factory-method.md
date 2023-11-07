---
order: 1
---
# 工厂方法模式

## 真实世界类比

假设有一物流公司，一开始只做陆地运输，后来随着业务的发展，开始做空运、海运等运输方式。

::: playground#ts 工厂方法模式交互演示

@file index.ts

```ts
interface Transport {
    deliver(): string;
}

class LandTransport implements Transport {
    deliver(): string {
        return "陆地运输";
    }
}

class SeaTransport implements Transport {
    deliver(): string {
        return "海上运输";
    }
}

class AirTransport implements Transport {
    deliver(): string {
        return "航空运输";
    }
}

abstract class LogisticsFactory {
    public abstract createTransport(): Transport;

    public planDelivery() {
        const transport = this.createTransport();
        return transport.deliver(); 
    }
}

class LandFactory extends LogisticsFactory {
    public createTransport(): Transport {
        return new LandTransport();
    }
}

class SeaFactory extends LogisticsFactory {
    public createTransport(): Transport {
        return new SeaTransport();
    }
}

class AirFactory extends LogisticsFactory {
    public createTransport(): Transport {
        return new AirTransport();
    }
}

function clientNode(transportMode: "陆运" | "海运" | "空运") {
    let transport;
    switch(transportMode) {
        case "陆运":
            transport = new LandFactory();
            break;
        case "海运":
            transport = new SeaFactory();
            break;
        case "空运":
            transport = new AirFactory();
            break;
        default:
            throw new Error();
    }
    const result = transport.planDelivery();
    console.log(result);
}

clientNode("陆运");
clientNode("海运");
clientNode("空运");
```

:::