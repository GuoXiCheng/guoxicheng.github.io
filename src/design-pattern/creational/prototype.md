---
order: 4
---
# 原型模式

## 真实世界类比

在制作面点时，会使用各种模具来让面点有更多花样。面点的模具可以看作是“模型”，使用模具来复制相同的大小和形状，这样每个面点都基于原始模具进行“克隆”，保证了一致性。

```ts
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
```

## 开发场景类比

在创建对象后，可能会修改对象的状态，如果想要保存对象的副本，使得可以独立地修改这个副本，而不影响原始对象，可以使用原型模式。

```ts
class User {

    constructor(private name: string, private age: number, private sex: string) {

    }

    clone() {
        return new User(this.name, this.age, this.sex);
    }

    setAge(age: number) {
        this.age = age;
    }
}

const user = new User("张三", 18, "男");
user.setAge(28);

const newUser = user.clone();
newUser.setAge(38);
```