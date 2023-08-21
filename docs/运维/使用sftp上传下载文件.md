## 建立连接

```bash
sftp [用户名]@[服务器IP]

# 例如：sftp ubuntu@192.168.1.100
```

## 下载文件

```bash
get [远程文件名] [本地目录]

# 例如：get test.txt d:/
```

## 下载文件夹

```bash
get -r [远程目录] [本地目录]

# 例如：get -r temp/test/. d:/
```

## 上传文件

```bash
put [本地文件路径] [远程文件名称]

# 例如：put d:/test.txt test.txt
```

## 上传文件夹

```bash
put [本地目录] [远程目录]

# 例如：put d:/temp/test/. temp/test
```