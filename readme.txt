# git

## 加入缓冲区

git add --all

## 提交

git commit -m "clarifications"

## 推送

git push origin master

# 云服务器

## 远程连接

- cmd
ssh root@120.27.224.20

## 本地压缩文件

tar -czvf DS.tar.gz DS

## 上传文件到云服务器

- 到该压缩文件目录下
scp DS.tar.gz root@120.27.224.20:/data/www/default/

## 解压文件

tar -xzvf DS.tar.gz   