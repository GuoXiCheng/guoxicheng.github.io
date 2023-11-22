export {};

// 产品类
class Car {
    public parts: string[] = [];

    addPart(part: string): void {
        this.parts.push(part);
    }

    listParts(): void {
        console.log(`Car parts: ${this.parts.join(', ')}\n`);
    }
}

// 建造者接口
interface CarBuilder {
    reset(): void;
    setSeats(number: number): void;
    setEngine(engine: string): void;
    setTripComputer(hasComputer: boolean): void;
    setGPS(hasGPS: boolean): void;
    getResult(): Car;
}

// 运动型汽车建造者
class SportsCarBuilder implements CarBuilder {
    private car = new Car();

    reset(): void {
        this.car = new Car();
    }

    setSeats(number: number): void {
        this.car.addPart(`${number} seats`);
    }

    setEngine(engine: string): void {
        this.car.addPart(`Engine: ${engine}`);
    }

    setTripComputer(hasComputer: boolean): void {
        if (hasComputer) {
            this.car.addPart("Trip Computer");
        }
    }

    setGPS(hasGPS: boolean): void {
        if (hasGPS) {
            this.car.addPart("GPS");
        }
    }

    getResult(): Car {
        return this.car;
    }
}

// 家用汽车建造者
class FamilyCarBuilder implements CarBuilder {
    private car = new Car();

    reset(): void {
        this.car = new Car();
    }

    setSeats(number: number): void {
        this.car.addPart(`${number} seats`);
    }

    setEngine(engine: string): void {
        this.car.addPart(`Engine: ${engine}`);
    }

    setTripComputer(hasComputer: boolean): void {
        if (hasComputer) {
            this.car.addPart("Trip Computer");
        }
    }

    setGPS(hasGPS: boolean): void {
        if (hasGPS) {
            this.car.addPart("GPS");
        }
    }

    getResult(): Car {
        return this.car;
    }
}

// 指挥者
class Director {
    constructSportsCar(builder: CarBuilder): void {
        builder.reset();
        builder.setSeats(2);
        builder.setEngine("V8");
        builder.setTripComputer(true);
        builder.setGPS(true);
    }

    constructFamilyCar(builder: CarBuilder): void {
        builder.reset();
        builder.setSeats(5);
        builder.setEngine("V6");
        builder.setTripComputer(false);
        builder.setGPS(true);
    }
}

// 使用
const director = new Director();

const sportsCarBuilder = new SportsCarBuilder();
director.constructSportsCar(sportsCarBuilder);
const sportsCar = sportsCarBuilder.getResult();
sportsCar.listParts();

const familyCarBuilder = new FamilyCarBuilder();
director.constructFamilyCar(familyCarBuilder);
const familyCar = familyCarBuilder.getResult();
familyCar.listParts();
