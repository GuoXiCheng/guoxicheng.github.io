---
date: 2024-02-19
order: 2
---

# Git 基本操作

## 初始化仓库

```bash title="创建新的git仓库"
git init
```

OR

```bash title="克隆现有的git仓库"
git clone <repository-url>
```

## 基本的本地操作

```bash title="查看文件状态"
git status
```

```bash title="添加文件到暂存区"
git add <file>
```

```bash title="添加所有文件到暂存区"
git add .
```

```bash title="提交文件到仓库"
git commit -m "commit message"
```

```bash title="查看提交日志"
git log
```

```bash title="删除文件"
git rm <file>
```

```bash title="删除文件夹"
git rm -r <folder>
```

## 分支管理

```bash title="列出所有分支"
git branch
```

```bash title="创建新分支"
git branch <branch-name>
```

```bash title="切换分支"
git checkout <branch-name>
```

```bash title="创建新分支并切换"
git checkout -b <branch-name>
```

```bash title="合并分支"
git merge <branch-name>
```

```bash title="删除分支"
git branch -d <branch-name>
```

## 远程操作

```bash title="查看远程仓库"
git remote -v
```

```bash title="添加远程仓库"
git remote add origin <repository-url>
```

```bash title="推送到远程仓库"
git push origin <branch-name>
```

```bash title="从远程仓库拉取"
git pull origin <branch-name>
```

