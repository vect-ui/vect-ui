#! /bin/bash

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm run build:docs

# 进入生成的文件夹
cd docs/src/.vitepress/dist

git init
git add .
git commit -m 'deply'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:haihaixhj/haihaixhj.github.io.git master

cd ../ && rm -rf dist