# sftp 使用指南

## 介绍

sftp（Secure File Transfer Protocol）是一种安全的文件传输协议，它在传输过程中加密数据，保证文件传输的安全性。

## 建立连接

```bash
sftp [用户名]@[服务器IP]

# 例如：sftp ubuntu@192.168.0.1
```

## 基本操作

### 下载文件

```bash
get [远程文件名] [本地目录]

# 例如：get test.txt d:/
```

### 下载文件夹

```bash
get -r [远程目录] [本地目录]

# 例如：get -r temp/test/. d:/
```

### 上传文件

```bash
put [本地文件路径] [远程文件名称]

# 例如：put d:/test.txt test.txt
```

### 上传文件夹

```bash
put [本地目录] [远程目录]

# 例如：put d:/temp/test/. temp/test
```

## 退出连接

```bash
exit
```

## 删除旧的公钥记录

当连接的服务器公钥发生变化时，尝试连接时会报错，需要删除旧的公钥记录。

```bash
ssh-keygen -R [hostname-or-IP-address]

# 例如：ssh-keygen -R 192.168.0.1
```