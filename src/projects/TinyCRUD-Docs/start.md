---
index: false
---

# 起步

## 安装 TinyCRUD

```bash
npm install tiny-crud
```

## 创建 Issue

登入 Gitee/Github/Gitlab，选择一个合适的项目，创建一个 Issue，用于存放数据。

## 创建请求

### 准备访问令牌

[Gitee 个人访问令牌](http://www.baidu.com/s?wd=Gitee个人访问令牌)

[Github 个人访问令牌](http://www.baidu.com/s?wd=Github个人访问令牌)

[Gitlab 个人访问令牌](http://www.baidu.com/s?wd=Gitlab个人访问令牌)

### 创建请求对象

如果是在 Node/Web 环境下，可以使用如下代码创建请求：

::: code-tabs

@tab github

```ts
import axios from "axios";
import { createRequest } from "tiny-crud";

const GithubRequest = createRequest({
    httpLib: "axios",
    httpClient: axios,
    accessToken: "Your Personal Access Token",

    platform: "github",
    owner: "Your Owner",
    repo: "Your Repo",
});
```

@tab gitee

```ts
import axios from "axios";
import { createRequest } from "tiny-crud";

const giteeRequest = createRequest({
    httpLib: "axios",
    httpClient: axios,
    accessToken: "Your Personal Access Token",

    platform: "gitee",
    owner: "Your Owner",
    repo: "Your Repo",
});
```

@tab gitlab

```ts
import axios from "axios";
import { createRequest } from "tiny-crud";

const gitlabRequest = createRequest({
    httpLib: "axios",
    httpClient: axios,
    accessToken: "Your Personal Access Token",

    platform: "gitlab",
    projectId: "Your Project ID",
});
```

:::

> [!tip]
> 安装 Axios 用于 Web/Node 环境下创建请求
>
> ```bash
> npm i axios
> ```

如果是在微信小程序环境下，可以使用如下代码创建请求：

```ts
import { createRequest } from "tiny-crud";

const githubRequest = createRequest({
    httpLib: "wx",
    httpClient: wx,
    accessToken: "Your Personal Access Token",

    platform: "github",
    owner: "Your Owner",
    repo: "Your Repo",
});
```

默认情况下会使用官方的 API 地址，如果你需要将数据存储在私有的代码托管服务器上，可以使用 baseURL 字段指定 URL 地址：

```ts {9}
const githubRequest = createRequest({
    httpLib: "axios",
    httpClient: axios,
    accessToken: "Your Personal Access Token",

    platform: "github",
    owner: "Your Owner",
    repo: "Your Repo",
    baseURL: "https://your-github-api.com",
});
```

TinyCRUD 中使用的官方 API 地址参考如下：

| 平台   | API 地址                 |
| ------ | ------------------------ |
| Gitee  | `https://gitee.com`      |
| Gitlab | `https://gitlab.com`     |
| Github | `https://api.github.com` |

## 验证授权

```ts
this.githubRequest.authenticate().then((res) => {
    console.log(res);
});
```
