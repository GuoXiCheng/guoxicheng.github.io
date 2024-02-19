# Git 标签


## 检查当前标签

```bash title="列出所有标签"
git tag
```

## 创建标签

```bash title="创建轻量标签"
git tag v1.0.0
```

```bash title="创建附注标签"
git tag -a v1.0.0 -m "release version 1.0.0"
```

## 查看标签信息

```bash title="查看标签信息"
git show v1.0.0
```

## 推送标签

```bash title="推送单个标签"
git push origin v1.0.0
```

```bash title="推送所有标签"
git push origin --tags
```

## 删除标签

```bash title="删除本地标签"
git tag -d v1.0.0
```

要删除远程标签，需要先删除本地标签，然后再删除远程标签。

```bash title="删除远程标签"
git push --delete origin v1.0.0
```
