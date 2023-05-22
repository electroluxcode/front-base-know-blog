# 3.github图床

[[toc]]

分享一下图床的使用方法

## 3.1 github 上推+分支



```
git add . 

git commit -m "图床的第一版"

git remote add origin 你的git地址

git push origin master -f
```



然后去到setting 的branches 里面。 然后把默认分支设置成master（跟gitee不一样，github的默认分支是main）



## 3.2  设置tag

基础

```shell
# 打印出所有标签
git tag
# 删除本地tag
git tag -d tag-name
#删除远程tag
git push origin :refs/tags/0.0.2
# 创建附注标签
git tag -a 0.0.2 -m "0.0.2版本" 
git push origin 0.0.2
```

release是可以把你的apk搞上去的东西。注意千万不要勾选 this is a pre-release。不然无法用api获取



## 3.3 访问

```
https://cdn.jsdelivr.net/gh/你的用户名/你的仓库名@发布的版本号/文件路径
https://www.jsdelivr.com/package/gh/yilaikesi/frontImgPackage/404/airplane-404page.jpg



[![](https://data.jsdelivr.com/v1/package/gh/yilaikesi/frontImgPackage/badge)](https://www.jsdelivr.com/package/gh/yilaikesi/frontImgPackage)
```



这玩意不稳定。服了

示例：

https://www.jsdelivr.com/package/gh/yilaikesi/frontImgPackage@master/

## 3.4 npm 发包

npm login + npm publish

https://cdn.jsdelivr.net/npm/frontsupperknowblog/docs/.vuepress/dist/know

https://cdn.jsdelivr.net/npm/frontimagepackage/404/airplane-404page.jpg

<img src="https://cdn.jsdelivr.net/npm/frontimagepackage/404/airplane-404page.jpg"/>