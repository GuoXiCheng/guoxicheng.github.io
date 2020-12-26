#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git add .
git commit -m store
git push git@github.com:GuoXiCheng/vuepress.git master

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m deploy

# 发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:GuoXiCheng/GuoXiCheng.gitbub.io.git master

cd -
