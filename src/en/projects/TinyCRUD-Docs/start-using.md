---
index: true
order: 2
---

# Start Using

## Create Data Model

We are using a simple user model as an example to create a UserModel. A user has properties such as name, age, and gender.

```ts
import { BaseModel } from "tiny-crud";

export interface UserModel extends BaseModel {
    name: string;
    age: number;
    gender: string;
}
```

> [!tip]
> Data models that inherit from BaseModel will automatically have four fields: id, created_at, updated_at, and created_by. The content of these four fields will be automatically brought out from the corresponding data in the storage.

## Create Data Repository

Create a UserRepository that inherits from GithubRepository and pass the generic parameter as the UserModel defined above.

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
> The second parameter of the constructor is the issue number of the repository, which is used to specify the issue for storing data.If you don't pass in this parameter, the issue number carried by the object of the first parameter you passed in will be used by default.

You can use the usual way to create a repository object, like this:

```ts
const userRepository = new UserRepository();
```

You can also use SingletonFactory to create a singleton object:

```ts
import { SingletonFactory } from "tiny-crud";

const userRepository = SingletonFactory.createInstance(UserRepository);
```

The data repository provides some basic CRUD methods, of course, you can also extend it further, for example:

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

## CRUD Methods

### detail

Get the details of the data entry.

```ts
userRepository.detail().then((res) => console.log(res));
```

The return value is an object, which contains the following fields:

| field name   | type   | description        |
| ------------ | ------ | ------------------ |
| id           | number | Issue Id           |
| issue_number | string | Issue Number       |
| comments     | number | Issue Comments     |
| created_at   | string | Issue Created Time |
| updated_at   | string | Issue Updated Time |

> [!tip]
> For Github or Gitlab, the comments field displays the actual number, for Gitee, the comments field displays the cumulative number.
>
> For example: Add 10 data and then delete them all. For Github or Gitlab, the comments field displays 0, for Gitee, the comments field displays 10.

### create

Create a new data entry.

```ts
userRepository.create({
    name: "John",
    age: 30,
    gender: "male",
});
```

### createAll

Create multiple data entries.

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

Find all data entries.

```ts
userRepository.find().then((res) => console.log(res));
```

find method supports one or more parameters, you can pass in a parameter to filter the data, for example:

```ts
userRepository
    .find({
        since: "2021-01-01T00:00:00Z",
        per_page: 10,
        page: 1,
    })
    .then((res) => console.log(res));
```

The query parameters supported by the find method depending on the storage platform you are using:

::: tabs

@tab github

| field name | type   | description                                                                                 |
| ---------- | ------ | ------------------------------------------------------------------------------------------- |
| since      | string | Only data updated after a given time is returned，format is ISO 8601 `YYYY-MM-DDTHH:MM:SSZ` |
| page       | number | Returns the page of data，default 1                                                         |
| per_page   | number | The number of data items returned per page，default 30，max 100                             |

@tab gitlab

| field name | type   | description                                                                             |
| ---------- | ------ | --------------------------------------------------------------------------------------- |
| sort       | string | Sort order:asc，desc（default）                                                         |
| order_by   | string | Returns data sorted by the created_at or updated_at field, which defaults to created_at |

@tab gitee

| field name | type   | description                                                                                 |
| ---------- | ------ | ------------------------------------------------------------------------------------------- |
| since      | string | Only data updated after a given time is returned，format is ISO 8601 `YYYY-MM-DDTHH:MM:SSZ` |
| page       | number | Current page number                                                                         |
| per_page   | number | Number per page，default 20，max 100                                                        |
| order      | string | Sort order: asc（default），desc                                                            |

:::

### findById

Find a data entry by id.

```ts
userRepository.findById(1).then((res) => console.log(res));
```

### updateById

Update a data entry by id.

```ts
userRepository.updateById(1, {
    name: "Mary",
    age: 25,
    gender: "female",
});
```

### deleteById

Delete a data entry by id.

```ts
userRepository.deleteById(1);
```

### deleteAll

> [!caution]
> This method will delete all data entries in the issue and cannot be restored.please use with caution.

```ts
userRepository.deleteAll();
```
