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
> [!tip]
> 继承自 BaseModel 的数据模型会自动拥有 id、created_at、updated_at 和 created_by 四个字段，这四个字段的内容会从存储的对应数据中自动带出。

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

### detail

查询当前存储库的详细信息

```ts
userRepository.detail().then((res) => console.log(res));
```

返回结果参考如下：

| 字段名       | 类型   | 描述           |
| ------------ | ------ | -------------- |
| id           | number | Issue Id       |
| issue_number | string | Issue 编号     |
| comments     | number | Issue 评论数   |
| created_at   | string | Issue 创建时间 |
| updated_at   | string | Issue 更新时间 |

> [!tip]
> 对于 Github 或 Gitlab，comments 字段显示的是实际数量，对于 Gitee，comments 字段显示的是累计的数量。
>
> 例如：新增 10 笔数据后再全部删除，对于 Github 或 Gitlab，comments 字段显示的是 0，对于 Gitee，comments 字段显示的是 10。

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

find 方法支持传入一个或多个查询参数，例如：

```ts
userRepository
    .find({
        since: "2021-01-01T00:00:00Z",
        per_page: 10,
        page: 1,
    })
    .then((res) => console.log(res));
```

find 方法支持的查询参数会依据不同的存储平台而有所不同：

::: tabs

@tab github

| 字段名   | 类型   | 描述                                                                            |
| -------- | ------ | ------------------------------------------------------------------------------- |
| since    | string | 只返回在给定时间之后更新的数据，时间格式为 ISO 8601 格式 `YYYY-MM-DDTHH:MM:SSZ` |
| page     | number | 返回第几页的数据，默认为 1                                                      |
| per_page | number | 每页返回的数据条数，默认为 30，最大为 100                                       |

@tab gitlab

| 字段名   | 类型   | 描述                                                              |
| -------- | ------ | ----------------------------------------------------------------- |
| sort     | string | 排序顺序:asc，desc（默认）                                        |
| order_by | string | 返回按 created_at 或 updated_at 字段排序的数据，默认为 created_at |

@tab gitee

| 字段名   | 类型   | 描述                                                                            |
| -------- | ------ | ------------------------------------------------------------------------------- |
| since    | string | 只返回在给定时间之后更新的数据，时间格式为 ISO 8601 格式 `YYYY-MM-DDTHH:MM:SSZ` |
| page     | number | 当前的页码                                                                      |
| per_page | number | 每页的数量，默认为 20，最大为 100                                               |
| order    | string | 排序顺序: asc（默认），desc                                                     |

:::

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
