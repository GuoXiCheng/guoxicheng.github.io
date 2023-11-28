export {};

class ParticleFlyweight {
    private readonly type: string;

    constructor(type: string) {
        this.type = type;
    }

    public animate(x: number, y: number): string {
        return `Animating a ${this.type} particle at (${x}, ${y}).`;
    }
}

class FlyweightFactory {
    private particles: {[key: string]: ParticleFlyweight} = {};

    public getParticle(type: string): ParticleFlyweight {
        if (!this.particles[type]) {
            this.particles[type] = new ParticleFlyweight(type);
        }
        return this.particles[type];
    }
}

class ParticleSystem {
    private particles: { particle: ParticleFlyweight; x: number; y: number; }[] = [];
    private factory: FlyweightFactory = new FlyweightFactory();

    public addParticle(type: string, x: number, y: number): void {
        const particle = this.factory.getParticle(type);
        this.particles.push({ particle, x, y });
    }

    public animate(): void {
        for (const { particle, x, y } of this.particles) {
            console.log(particle.animate(x, y));
        }
    }
}

const particleSystem = new ParticleSystem();

// 添加粒子
particleSystem.addParticle("Smoke", 1, 1);
particleSystem.addParticle("Rain", 2, 3);
particleSystem.addParticle("Spark", 4, 5);
particleSystem.addParticle("Smoke", 3, 2); // 会重用之前创建的 'Smoke' 粒子

// 动画粒子系统
particleSystem.animate();
