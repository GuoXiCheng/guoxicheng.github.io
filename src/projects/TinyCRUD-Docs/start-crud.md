---
index: false
---
# 开始增删改查

## 创建数据模型

我们以一个简单的用户模型为例，创建一个 `User` 模型，用户有姓名、年龄和性别：

```ts
import { BaseModel } from "tiny-crud";

export interface UserModel extends BaseModel {
    name: string;
    age: number;
    gender: string;
}
```

## 创建数据存储库

创建一个`UserRepository`继承自`GithubRepository`，传入的泛型参数为上面定义的`UserModel`。如果要使用`Gitee API`，则需继承自`GiteeRepository`，如果要使用`Gitlab API`，则需继承自 `GitlabRepository`。

```ts
import { GithubRepository } from "tiny-crud";

export class UserRepository extends GithubRepository<UserModel> {
    constructor() {
        super(GithubRequest);
    }
}
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
        return users.filter(user => user.name === name);
    }
}
```

