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

## Use Encrypt

If useEncrypt is true, TinyCRUD will encrypt the data before storing it in the issue, and decrypt it when reading it.

So, you must implement the encrypt/decrypt function when the useEncrypt is true.TinyCRUD will use the encrypt/decrypt function to encrypt/decrypt the data.

For example, you can use the following code to encrypt/decrypt data with crypto-js:

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
> Install crypto-js to encrypt/decrypt data
>
> ```bash
> npm i crypto-js
>

The encrypt/decrypt function will be ignored when useEncrypt is false.

So, you can choose whether to use encryption or not, depending on your environment.

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