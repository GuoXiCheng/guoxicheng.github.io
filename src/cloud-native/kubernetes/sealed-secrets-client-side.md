# Sealed Secrets - Client Side

## 引言

在使用GitOps的持续交付模型中，我们使用Git仓库作为系统状态的唯一来源，但是像数据库密码、API密钥等敏感信息不适合直接存储在Git仓库中，因此我们需要一种更安全的方式来存储这些敏感信息。

Sealed Secrets的Client Side：`kubeseal` 使用非对称加密来加密只有控制器才能解密的敏感信息，经过加密的信息才可以安全地存储在Git仓库中。

## 安装kubeseal

下载安装kubeseal：[kubeseal](https://github.com/bitnami-labs/sealed-secrets/releases)

::: tip
以下演示使用的是Window系统，因此你可能需要下载darwin并解压后得到exe文件。
:::

## 添加环境变量

将kubeseal所在的目录添加到环境变量中，以便在任何地方都可以使用kubeseal。

如果你不想添加环境变量，你需要确保在`kubeseal.exe`所在的目录下执行命令。

## 加密敏感信息

例如，你有这样一份`secret.yaml`文件，其中的敏感信息字段仅使用base64编码：

```yaml
apiVersion: v1
data:
  password: c2VjcmV0
  username: YWRtaW4=
kind: Secret
metadata:
  name: example-secret-2
  namespace: mynamespace
type: Opaque
```

使用`kubeseal`命令对`secret.yaml`文件进行加密：

```bash
kubeseal -o yaml < secret.yaml > newsecret.yaml
```

这条命令将读取当前目录下的`secret.yaml`文件，将加密后的信息写入`newsecret.yaml`文件中。

```yaml
apiVersion: bitnami.com/v1alpha1
kind: SealedSecret
metadata:
  creationTimestamp: null
  name: example-secret-2
  namespace: mynamespace
spec:
  encryptedData:
    password: AgBd5pG60gKTMe5VVsnx1CzYwNQtF4lOfn9FTFSXF12Sg/AtYtEb75Jwk86c149iYblKwIMlTPrEtH3NPQoS7wc8bU5mV6UF2VPAVufrMJErtbneJXDebk2jEaznHUMVWj3WbnnV1zRRLwr9YcZvngC2I1bb9pZgZZuGrDnQiYd2qywriXDNDAb1eJceNVM2xCY3akD9OVO+gXfeF7Whu9LkysrR6gWiARV248JJ6qbqYodZ9zof1Fcv84JPMV/uLbkhdNzP8anC8pWIpvl7YJ7rf8IWZcLhqPwWLYBWn6gT9bZiRw7879DiwmLUrk+4QwlNFCr+uxTZ9SibrRVj/AhOAGSADlkeXkIowpqVWG1iFg4K7Z0ld8y5rndiCeWSyW6Ir7o3I+J/vRfAESBWBZSw86XeH2h9dYNTvoI6cw1aqxBKpHXORzo404SJr02VxOdWxSDBxkfgT9PZrFkJm6yrhXJ4emj1WXm1i2ucF9uFdk9eWEFvKkl8G9wbdFK1Edg3HWexSCPfQvJHjBjOAT27Y/DCDsWkWyGhl/BflwgIoRdQy4S2wW3o3QGmjsIfwZN3dVIgjqkpYLTmeQ1oQ1zkue7mWOJ6dZBBHu7Opg4SEtOa2SHNQ+E/u6AOQJg4ZIUIhgtzL/0Mg4KzqqbonJleu97zG0Ddwx2TDy9GdS8ARiYy6nkCAY/8rStlk8UZf9K65FZky9s=
    username: AgCaA/r5WNC9BqmwzxF7Fj0Xj9rzh9sSnwr8huD6pDHWtMgi5X43r/gMSs6UZrl2k6BylBuYDf2fmgtvqYaThtvV9ozhvIfvIfbRiQtxel5p8+SGD8MWYR1ii2zFdkmGW4hewsQ5LL5ul3G60kQmUh6gWXqtyuAOXykIYioGkeiXQyq6I20DHPXDZyMk15tKMvyNCcYtp8rtAqla1+zNEXj/B46bsAciqCJyOvQmzhIILErJSyo1VIxUulEbZFVbxLIHWTrPruugI7YU6hYKXwerqc94S65+vpKThF9GkHtHF7vIjFuLNODv17zJ6VzNJsZCvbErefwnqWxo+DPmsYMitHyCTPWgi8BK1h2jrlJnoB+EgcIIpHYmop0cfgdOX29+ET39RGQ1KPUPu5ykRHs9cuaQc0WnO5VmpmSNaJ9pBANdtwicHaBGwnX2kicbJCiz/Kq9FHia62hdVh+5YgukxloIsUpxNMOHPqdSb180zia2YEDfS6qxLA6ebhrZQqjKoYY7umYQmF1fM/V4QadQDW26suYMVOrHyOReZ/1JwZQyOwiEU/3macJR8U5OhsWsOS8RzhMXfZdZ0p8ykESDtP1lV5VdPZAR5aZFIu0B2xmSTjLpCDdlgV0z/EvvmMu6YWm/QYB+7bXqCyWPXyqn/oH4QFSIsn0Lxfd74BbYuZcWj1FNUbyUFvpl+/CNEmu5y5ZX4w==
  template:
    data: null
    metadata:
      creationTimestamp: null
      name: example-secret-2
      namespace: mynamespace
    type: Opaque
```

使用kubeseal加密后的内容是安全的，可以放心地提交到Git仓库中。