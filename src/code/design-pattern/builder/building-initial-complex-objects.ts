// 产品类
class Computer {
    private cpu?: string;
    private ram?: number;
    private ssd?: number;
    private gpu?: string;

    setCPU(cpu: string): void {
        this.cpu = cpu;
    }

    setRAM(ram: number): void {
        this.ram = ram;
    }

    setSSD(ssd: number): void {
        this.ssd = ssd;
    }

    setGPU(gpu: string): void {
        this.gpu = gpu;
    }

    getSpecifications(): string {
        return `Computer Specifications: CPU = ${this.cpu}, RAM = ${this.ram}GB, SSD = ${this.ssd}GB, GPU = ${this.gpu}`;
    }
}

// 建造者接口
interface ComputerBuilder {
    setCPU(cpu: string): ComputerBuilder;
    setRAM(ram: number): ComputerBuilder;
    setSSD(ssd: number): ComputerBuilder;
    setGPU(gpu: string): ComputerBuilder;
    build(): Computer;
}

// 具体建造者
class MyComputerBuilder implements ComputerBuilder {
    private computer: Computer = new Computer();

    setCPU(cpu: string): ComputerBuilder {
        this.computer.setCPU(cpu);
        return this;
    }

    setRAM(ram: number): ComputerBuilder {
        this.computer.setRAM(ram);
        return this;
    }

    setSSD(ssd: number): ComputerBuilder {
        this.computer.setSSD(ssd);
        return this;
    }

    setGPU(gpu: string): ComputerBuilder {
        this.computer.setGPU(gpu);
        return this;
    }

    build(): Computer {
        return this.computer;
    }
}

// 使用建造者
const builder = new MyComputerBuilder();
const computer = builder
    .setCPU("Intel Core i7")
    .setRAM(16)
    .setSSD(512)
    .setGPU("NVIDIA RTX 3080")
    .build();

console.log(computer.getSpecifications());
