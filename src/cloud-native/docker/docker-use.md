---
date: 2024-03-01
---

# docker 的基本用法

docker 的基本用法涵盖 docker 的登入登出、操作镜像、操作容器的方法。在安装 docker 之后，掌握这些基本用法有助于你快速上手 docker。

## 登入登出

```bash
# 登录Docker Hub
docker login -u username -p password

# 登录私有仓库
docker login -u username -p password registry.example.com

# 登出
docker logout
```

## 操作镜像

docker 镜像是一个轻量级、不可变、可执行的软件包，它包含运行应用程序所需的一切内容。

镜像是容器运行的蓝图或模板，你可以从镜像启动一个或多个容器，镜像在这个过程中保持不变。

### 拉取镜像

```bash
# 从 Docker Hub 拉取 nginx 镜像
docker pull nginx:latest
```

### 列出本地镜像

```bash
docker images
```

### 删除镜像

```bash
docker rmi nginx:latest
```

## 操作容器

容器是镜像的运行时实例。

当你从镜像启动一个容器时，docker 会在镜像顶部添加一个可写层（容器层），容器内的所有更改都发生在这个可写层上。

### 运行容器

```bash
docker run --name my-nginx -p 8080:80 -d nginx
```

:::tip
`--name` 指定容器名称

`-p` 指定端口映射（宿主机端口:容器端口）

`-d` 后台运行
:::

### 进入容器

```bash
docker exec -it my-nginx /bin/bash
```

### 列出容器

```bash
# 列出运行中的容器
docker ps

# 列出所有容器
docker ps -a
```

### 启停容器

```bash
# 停止容器
docker stop my-nginx

# 启动容器
docker start my-nginx

# 重启容器
docker restart my-nginx
```

### 删除容器

```bash
docker rm my-nginx
```