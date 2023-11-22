export {};

// 武器接口
interface Weapon {
    useWeapon(): void;
}

// 具体武器类
class Sword implements Weapon {
    useWeapon(): void {
        console.log("Swinging a sword");
    }
}

class Bow implements Weapon {
    useWeapon(): void {
        console.log("Shooting an arrow");
    }
}

class Staff implements Weapon {
    useWeapon(): void {
        console.log("Casting a spell");
    }
}

// 角色类，包含工厂方法
abstract class Character {
    // 工厂方法
    abstract createWeapon(): Weapon;

    fight(): void {
        const weapon = this.createWeapon();
        weapon.useWeapon();
    }
}

// 具体角色子类
class Warrior extends Character {
    createWeapon(): Weapon {
        return new Sword();
    }
}

class Archer extends Character {
    createWeapon(): Weapon {
        return new Bow();
    }
}

class Mage extends Character {
    createWeapon(): Weapon {
        return new Staff();
    }
}

// 客户端代码
function clientCode(character: Character) {
    character.fight();
}

// 创建不同的角色，并使用它们的武器
clientCode(new Warrior());
clientCode(new Archer());
clientCode(new Mage());
