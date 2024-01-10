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