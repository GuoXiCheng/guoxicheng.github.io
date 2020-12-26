## Git
## 初次安装Git客户端
```bash
$ git config --global user.name "Your Name"
$ git config --global user.email "email@example.com"
```
## Git基本使用流程
```bash
# 1. git初始化
$ git init

# 2. 创建开发分支
$ git branch dev

# 3. 切换到开发分支
$ git checkout dev

# 4. 代码修改......

# 5. 查看修改过的文件
$ git status

# 6. 添加所有文件
$ git add .

# 7. 提交到本地仓库
$ git commit -m "备注信息"

# 8. 切换到master分支
$ git checkout master

# 9. 拉取master最新代码
$ git pull

# 10. 切换到开发分支
$ git checkout dev

# 11. 将master分支最新代码合并到dev分支
$ git merge master

# 12. 若有冲突解决冲突

# 13. 推送到远程仓库
$ git push
```
## Github配置SSH Key
### 1.检查是否存在 SSH Key
```bash
$ cd ~/.ssh
$ ls

# 看是否存在 id_rsa 和 id_rsa.pub 文件，如果存在，则说明已有SSH Key
$ ll
```
### 2.如果没有则生成 SSH Key
```bash
$ ssh-keygen -t rsa -C "你的邮箱账号@qq.com"
```
### 3.获取 SSH Key
```bash
# 拷贝秘钥 ssh-rsa 开头
$ cat id_rsa.pub
```
### 4.Github添加SSH Key
在Github中点击用户头像，选择settings，新建一个SSH Key，将秘钥复制进去
### 5.测试是否配置成功
```bash
$ ssh -T git@github.com

# 运行结果出现类似如下
#Hi xxx! You've successfully authenticated, but GitHub does not provide shell access.

# 如果已经是HTTP连接，修改.git(隐藏的)文件夹下的config文件
```

## git进阶
### git查看远程分支，并切换到远程分支
1. 查看所有远程分支
    ```bash
    git branch -a
    ```
2. 切换到远程分支
    ```bash
    git checkout -b 本地新建的分支名 origin/远程分支名
    ```

### git删除远程分支和本地分支
1. 查看所有远程分支
   ```bash
   git branch -a
   ```
2. 删除远程分支：remotes/origin/远程分支名
   ```bash
   git push origin --delete 远程分支名
   ```
3. 删除本地分支（在主分支中）
   ```bash
   git branch -d 本地分支名 
   ```

## 添加 .gitignore 文件
[Create useful .gitignore files for your project](https://www.gitignore.io/)
### 生成 .gitignore 文件
```bash
# 在项目根目录打开git bash输入
touch .gitignore
```
### 添加要过滤文件
```bash
# 过滤文件夹
/filename/

# 过滤文件
*.suffix

# 将指定文件添加到版本库
!*.txt
!/file/*.txt
```

