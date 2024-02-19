# Git 初始化

## Git基本全局配置

```bash title="配置用户名"
git config --global user.name "Your Name"
```

```bash title="配置邮箱"
git config --global user.email "email@example.com"
```

## 配置Git存储库SSH密钥

右击桌面，选择 **Git Bash Here**，打开Git Bash命令行窗口执行以下命令

![](/assets/image/cloud-native/git-menu.png)

```bash title="进入ssh目录"
cd ~/.ssh
```

```bash title="列出ssh目录下的文件"
ls
```

确定是否存在`id_rsa`和`id_rsa.pub`文件

如果不存在

```bash title="创建SSH密钥"
ssh-keygen -t rsa -C "你的邮箱账号（例如：651648@qq.com）"
```

如果已经存在

```bash title="查看SSH密钥"
cat id_rsa.pub
```

```bash title="测试是否配置成功"
ssh -T git@github.com
```
