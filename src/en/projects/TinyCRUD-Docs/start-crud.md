---
index: false
---
# Start CRUD

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

Create a `UserRepository` that inherits from `GithubRepository` and pass the generic parameter as the `UserModel` defined above. If you want to use the `Gitee API`, you need to inherit from `GiteeRepository`, and if you want to use the `Gitlab API`, you need to inherit from `GitlabRepository`.

```ts
import { GithubRepository } from "tiny-crud";

export class UserRepository extends GithubRepository<UserModel> {
    constructor() {
        super(GithubRequest);
    }
}
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
        return users.filter(user => user.name === name);
    }
}
```