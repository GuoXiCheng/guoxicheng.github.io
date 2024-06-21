---
date: 2024-03-02
order: 5
---

# docker 镜像构建

## 镜像构建指令

```bash
docker build -t example-image:1.0 .
```
:::tip
`-t` 指定镜像仓库名和标签（可选），格式为`<仓库名/镜像名>:<标签>`，如果不指定标签，默认为`latest`。

`.` 指定构建上下文的路径为当前目录。如果Dockerfile文件不在当前目录，可以使用`-f`参数指定Dockerfile文件的路径：`docker build -t example-image:1.0 -f /path/to/Dockerfile .`。
:::

## Dockerfile可用指令

Dockerfile 文件可以包含一系列的指令和参数，用于定义如何自动构建一个镜像。

### WORKDIR 

WORKDIR 指令用于设置工作目录，后续的指令将会在指定的目录下执行。

### COPY 和 ADD

COPY 指令用于将文件从构建上下文复制到镜像中，语义清晰，仅支持复制文件和目录。

ADD 指令功能更加丰富，除了支持COPY指令的所有功能外，还支持解压tar文件、从URL中下载文件复制到镜像中。

### VOLUME

VOLUME 指令用于声明容器内的一个或多个挂载点。

在容器运行时，所有写入容器中的数据都会在容器删除时丢失，通过使用VOLUME声明挂载点，数据可以持久化到宿主机上，即使容器被删除，数据也不会丢失。

通过将相同的卷挂载到多个容器中，可以实现容器间的数据共享。

### CMD 和 ENTRYPOINT

CMD 指令提供容器启动时执行的默认命令，可以被`docker run`命令行参数覆盖。如果有多个CMD指令，只有最后一个CMD指令会生效。

ENTRYPOINT 指令提供容器启动时执行的基础命令，CMD 中的参数将附加到这里，如果在`docker run`时提供了额外的参数，这些参数会覆盖CMD中的参数。

## Dockerfile文件示例

```dockerfile
# 使用官方Python运行时作为父镜像
FROM python:3.8-slim

# 设置环境变量，确保Python输出直接打印到终端，不会被缓存
ENV PYTHONUNBUFFERED=1

# 设置工作目录为/app
WORKDIR /app

# 将当前目录下的requirements.txt文件复制到容器中的/app
COPY requirements.txt /app/

# 使用pip安装requirements.txt中指定的所需包
RUN pip install --no-cache-dir -r requirements.txt

# 将当前目录下的所有文件添加到容器中的/app
ADD . /app

# 创建一个挂载点，可以从本地主机或其他容器挂载卷到这里
VOLUME ["/app/data"]

# 使容器监听8080端口，这是我们应用的运行端口
EXPOSE 8080

# 设置环境变量，用于示例应用程序
ENV APP_NAME=ExampleApp

# 容器启动时执行的命令，这里用来启动一个Python应用
CMD ["python", "app.py"]

# 容器启动时执行的入口点，设置基础命令，CMD 中的参数将附加到这里
ENTRYPOINT ["python"]

# 注意：CMD 和 ENTRYPOINT 的组合使用意味着 ENTRYPOINT 设置了执行的命令，
# 而 CMD 提供了该命令的默认参数。在这个例子中，如果没有提供任何运行时参数，
# 容器将执行 "python app.py"。如果运行时提供了参数，比如 "docker run example-image myscript.py"，
# 那么 CMD 的 "app.py" 将被忽略，容器将执行 "python myscript.py"。
```

