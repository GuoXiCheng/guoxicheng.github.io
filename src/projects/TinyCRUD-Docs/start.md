---
index: false
---

# 创建请求

## 安装 TinyCRUD

```bash
npm install tiny-crud
```

## 创建 Issue

登入你的 Gitee/Github/Gitlab，选择一个合适的项目，创建一个 Issue，用于存放数据。

## 创建请求

### 准备个人访问令牌

<table>
  <tr>
    <th>平台</th>
    <th></th>
  </tr>
  <tr>
    <td>Github</td>
    <td><a href="http://www.baidu.com/s?wd=Gitee个人访问令牌">如何取得个人访问令牌</a></td>
  </tr>
  <tr>
    <td>Gitlab</td>
    <td><a href="http://www.baidu.com/s?wd=Gitee个人访问令牌">如何取得个人访问令牌</a></td>
  </tr>
  <tr>
    <td>Gitee</td>
    <td><a href="http://www.baidu.com/s?wd=Gitee个人访问令牌">如何取得个人访问令牌</a></td>
  </tr>
</table>

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
| Github | `https://api.github.com` |
| Gitlab | `https://gitlab.com`     |
| Gitee  | `https://gitee.com`      |

你可以为该请求对象提供一个 Issue 编号，这样 TinyCRUD 将会使用该 Issue 存储数据：

```ts {11}
const githubRequest = createRequest({
    httpLib: "axios",
    httpClient: axios,
    accessToken: "Your Personal Access Token",

    platform: "github",
    owner: "Your Owner",
    repo: "Your Repo",
    baseURL: "https://your-github-api.com",

    issueNumber: "Your Issue Number"
});
```

## 验证授权

```ts
this.githubRequest.authenticate().then((res) => {
    console.log(res);
});
```
