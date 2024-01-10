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

