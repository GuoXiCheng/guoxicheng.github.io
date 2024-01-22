---
index: true
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
