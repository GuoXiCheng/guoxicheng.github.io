export {};

interface Mould {
    clone(): Mould;
    make(): string;
}

class MooncakeMould implements Mould {

    private shape: string

    constructor(shape: string) {
        this.shape = shape;
    }

    clone(): Mould {
        return new MooncakeMould(this.shape);
    }
    make(): string {
        return `${this.shape} mooncake`;
    }
}

const roundMooncakeMould = new MooncakeMould("round");
console.log(roundMooncakeMould.clone().make());