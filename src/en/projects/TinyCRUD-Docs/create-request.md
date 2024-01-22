---
index: true
---

# Create Request

## Intall TinyCRUD

```bash
npm install tiny-crud
```

## Create Issue

Login your Gitee/Github/Gitlab, choose a suitable project, create an issue to store data.

## Create Request

### Prepare Personal Access Token

<table>
  <tr>
    <th>Platform</th>
    <th></th>
  </tr>
  <tr>
    <td>Github</td>
    <td><a href="https://www.google.com/search?q=Gitlab+Person+Access+Token">How to Get Personal Access Token</a></td>
  </tr>
  <tr>
    <td>Gitlab</td>
    <td><a href="https://www.google.com/search?q=Github+Person+Access+Token">How to Get Personal Access Token</a></td>
  </tr>
  <tr>
    <td>Gitee</td>
    <td><a href="https://www.google.com/search?q=Gitee+Person+Access+Token">How to Get Personal Access Token</a></td>
  </tr>
</table>

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
| Github   | `https://api.github.com` |
| Gitlab   | `https://gitlab.com`     |
| Gitee    | `https://gitee.com`      |

You can afford a issue number to the request instance, so that TinyCRUD will use this issue to store data:

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

## Verify Authorization

```ts
this.githubRequest.authenticate().then((res) => {
    console.log(res);
});
```
