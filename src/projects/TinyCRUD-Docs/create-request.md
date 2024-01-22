---
index: true
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

    issueNumber: "Your Issue Number",
});
```

## 验证授权

```ts
this.githubRequest.authenticate().then((res) => {
    console.log(res);
});
```

## 使用加密

当 useEncrypt 字段为 true 时，TinyCRUD 将会对数据进行加密，然后再存储到 Issue 中，当从 Issue 中读取数据时，TinyCRUD 将会对数据进行解密。

因此，当 useEncrypt 字段为 true 时，你必须实现加密函数 encryptFn 和解密函数 decryptFn，TinyCRUD 将会使用这两个函数对数据进行加解密。

例如使用 crypto-js 进行加解密，可以使用如下代码：

```ts
import CryptoJS from "crypto-js";

const githubRequest = createRequest({
    httpLib: "axios",
    httpClient: axios,
    accessToken: "Your Personal Access Token",

    platform: "github",
    owner: "Your Owner",
    repo: "Your Repo",

    useEncrypt: true,
    encryptFn: (data: string) => {
        return CryptoJS.AES.encrypt(data, "Your Secret Key").toString();
    },
    decryptFn: (data: string) => {
        return CryptoJS.AES.decrypt(data, "Your Secret Key").toString(
            CryptoJS.enc.Utf8
        );
    },
});
```

> [!tip]
> 安装 crypto-js 用于加解密
>
> ```bash
> npm i crypto-js
> ```

当 useEncrypt 字段为 false 时，加解密函数 encryptFn 和 decryptFn 将会被忽略。

因此，你可以根据不同的环境，选择使用加密或者不使用，例如：

```ts
const githubRequest = createRequest({
    httpLib: "axios",
    httpClient: axios,
    accessToken: "Your Personal Access Token",

    platform: "github",
    owner: "Your Owner",
    repo: "Your Repo",

    useEncrypt: process.env.NODE_ENV === "production",
    encryptFn: (data: string) => {
        return CryptoJS.AES.encrypt(data, "Your Secret Key").toString();
    },
    decryptFn: (data: string) => {
        return CryptoJS.AES.decrypt(data, "Your Secret Key").toString(
            CryptoJS.enc.Utf8
        );
    },
});
```