---
date: 2024-02-28
---

# docker 的架构

![](/assets/image/cloud-native/docker-architecture.webp)

## docker 基本架构

docker 采用了客户端-服务器架构。

## docker 客户端

docker 客户端是用户与 docker 交互的界面。

用户可以通过执行`docker run`、`docker build`、`docker pull`等 docker 命令与 docker 服务器交互来管理容器和镜像。

## docker 服务器

docker 服务器运行在物理机或虚拟机上，docker 服务器中的 docker daemon 是一个长时间运行的守护进程，负责构建、运行和分发 docker 容器，管理 docker 容器的生命周期。

docker 客户端和服务器可以运行在同一系统中，也可以运行在不同系统中通过 socket 或者 RESTful API 进行远程通信。

## docker 注册中心

docker 注册中心是存储 docker 镜像的地方。

用户可以通过`docker pull`命令从注册中心拉取镜像，也可以通过`docker push`命令将镜像推送到注册中心。