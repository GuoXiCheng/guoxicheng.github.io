---
date: 2024-02-28
---

# docker 常用命令

## docker 常用命令

| 命令                                                                     | 说明                   |
| ------------------------------------------------------------------------ | ---------------------- |
| docker version                                                           | 查看 docker 版本信息   |
| docker info                                                              | 查看 docker 系统信息   |
| docker images                                                            | 查看本地镜像列表       |
| docker ps                                                                | 查看运行中的容器列表   |
| docker ps -a                                                             | 查看所有容器列表       |
| docker pull                                                              | 拉取镜像               |
| docker run --name=[image-name] -p [主机端口]:[容器端口] -d [image]:[tag] | 运行容器               |
| docker stop [image-id]                                                   | 停止容器               |
| docker start [image-id]                                                  | 启动容器               |
| docker rm [image-id]                                                     | 删除容器               |
| docker rmi [image-id]                                                    | 删除镜像               |
| docker logs                                                              | 查看容器日志           |
| docker cp                                                                | 从容器中拷贝文件到本地 |
| docker commit                                                            | 提交容器副本           |
| docker build                                                             | 构建镜像               |
| docker push                                                              | 推送镜像               |
| docker login                                                             | 登录 docker            |
| docker logout                                                            | 退出 docker            |
| docker tag                                                               | 给镜像打标签           |
| docker top                                                               | 查看容器中运行的进程   |
| docker stats                                                             | 查看容器资源使用情况   |
| docker exec -it [image-id] /bin/bash                                     | 在容器中执行命令       |
| docker history                                                           | 查看镜像历史           |
| docker pause                                                             | 暂停容器               |
| docker unpause                                                           | 恢复容器               |
