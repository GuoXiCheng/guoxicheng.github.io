---
index: false
---

# start

## Intall TinyCRUD

```bash
npm install tiny-crud
```

## Create Issue

Login Gitee/Github/Gitlab, choose a suitable project, create an issue to store data.

## Create Request

### Prepare Access Token

[Gitee Person Access Token](https://www.google.com/search?q=Gitee+Person+Access+Token)

[Github Person Access Token](https://www.google.com/search?q=Github+Person+Access+Token)

[Gitlab Person Access Token](https://www.google.com/search?q=Gitlab+Person+Access+Token)

### Create Request Instance

If you are in Node/Web environment, you can use the following code to create a request:

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
> Install Axios to create request in Web/Node environment
>
> ```bash
> npm i axios
> ```

If you are in Wechat Mini Program environment, you can use the following code to create a request:

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

By default, the request instance will use official API to peform CRUD operations. If you want to use your own API, you can use the following code to create a request:

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

TinyCRUD will use the following API to perform CRUD operations:

| Platform | API                      |
| -------- | ------------------------ |
| Gitee    | `https://gitee.com`      |
| Gitlab   | `https://gitlab.com`     |
| Github   | `https://api.github.com` |

## Verify Authorization

```ts
this.githubRequest.authenticate().then((res) => {
    console.log(res);
});
```