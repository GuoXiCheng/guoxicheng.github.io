---
date: 2024-02-25
---

# docker 初始化

## docker 介绍

docker 是一个开源的应用容器引擎，基于 go 语言并遵从 Apache2.0 协议开源。

docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。

容器是完全使用沙箱机制，相互之间不会有任何接口。几乎没有性能开销，可以很容易地在机器和数据中心中运行。最重要的是，他们不依赖于任何语言、框架或包装系统。

## docker 安装

### 下载安装脚本

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
```

### 执行安装脚本

```bash
sh get-docker.sh --mirror Aliyun
```

### 启动 docker 服务

```bash
systemctl daemon-reload
systemctl restart docker
```

### 验证 docker 是否安装成功

```bash
sudo docker --version
```

## 添加当前用户到 docker 用户组

如果不想每次执行 docker 命令都需要加上 sudo，可以将当前用户添加到 docker 用户组。

### 创建 docker 用户组

```bash
sudo groupadd docker
```

### 将当前用户添加到 docker 用户组

```bash
sudo usermod -aG docker $USER
```
然后退出当前终端，重新登录即可。

### 检查是否添加成功

```bash
docker version
```

## 批量清理无 tag 镜像

```bash
docker images | grep none | awk '{print $3}' | xargs docker rmi
```
