---
index: true
---

# 开始使用

## 创建数据模型

我们以一个简单的用户模型为例，创建一个 User 模型，用户有姓名、年龄和性别：

```ts
import { BaseModel } from "tiny-crud";

export interface UserModel extends BaseModel {
    name: string;
    age: number;
    gender: string;
}
```

## 创建数据存储库

创建一个 UserRepository 继承自 GithubRepository，传入的泛型参数为上面定义的 UserModel。

::: code-tabs

@tab github

```ts
import { GithubRepository } from "tiny-crud";
import { githubRequest } from "./github-request";

export class UserRepository extends GithubRepository<UserModel> {
    constructor() {
        super(githubRequest, "Your Issue Number");
    }
}
```

@tab gitee

```ts
import { GiteeRepository } from "tiny-crud";
import { githubRequest } from "./github-request";

export class UserRepository extends GiteeRepository<UserModel> {
    constructor() {
        super(githubRequest, "Your Issue Number");
    }
}
```

@tab gitlab

```ts
import { GitlabRepository } from "tiny-crud";

export class UserRepository extends GitlabRepository<UserModel> {
    constructor() {
        super(GithubRequest, "Your Issue Number");
    }
}
```

:::

> [!tip]
> UserRepository 构造器的第二个参数表示你当前存储库所对应的 issue 编号，如果你不传入这个参数，那么默认会使用你传入的第一个参数对象所携带的 issue 编号。

你可以使用常规的创建对象的手法来创建一个存储库对象，像这样：

```ts
const userRepository = new UserRepository();
```

你也可以使用 SingletonFactory 来创建一个单例对象：

```ts
import { SingletonFactory } from "tiny-crud";

const userRepository = SingletonFactory.createInstance(UserRepository);
```

数据存储库提供了一些基本的增删改查方法，当然你也可以自己进一步扩展，例如：

```ts
import { GithubRepository } from "tiny-crud";

export class UserRepository extends GithubRepository<UserModel> {
    constructor() {
        super(GithubRequest);
    }

    async findByName(name: string): Promise<UserModel[]> {
        const users = await this.find();
        return users.filter((user) => user.name === name);
    }
}
```

## 增删改查方法

### create

创建一笔数据

```ts
userRepository.create({
    name: "John",
    age: 30,
    gender: "male",
});
```

### createAll

创建多笔数据

```ts
userRepository.createAll([
    {
        name: "John",
        age: 30,
        gender: "male",
    },
    {
        name: "Mary",
        age: 25,
        gender: "female",
    },
]);
```

### find

查询所有数据

```ts
userRepository.find().then((res) => console.log(res));
```

### findById

根据 id 查询一笔数据

```ts
userRepository.findById(1).then((res) => console.log(res));
```

### updateById

根据 id 更新一笔数据

```ts
userRepository.updateById(1, {
    name: "Mary",
    age: 25,
    gender: "female",
});
```

### deleteById

根据 id 删除一笔数据

```ts
userRepository.deleteById(1);
```

### deleteAll

> [!caution]
> deleteAll 方法会删除当前存储库中所有数据，此操作不可逆，请谨慎使用。

```ts
userRepository.deleteAll();
```
