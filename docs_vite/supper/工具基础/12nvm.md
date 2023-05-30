# 12.nvm  | nrm | rimraf 

[[toc]]

## 12.1 nvm

### 12.1.1 nvm下载 



https://github.com/coreybutler/nvm-windows/releases 里面去下载 nvm-setup.exe





### 12.1.2 nvm配置和基础使用

如果是不是安装到c盘的话，那么要搞一下环境变量

```js
nvm ls              // 看安装的所有node.js的版本
 
nvm list available  // 查显示可以安装的所有node.js的版本

nvm -v 查看当前版本

nvm --config 

nvm list 查看已安装node版本列表

nvm install 版本号 下载对应node版本（如：nvm install 16.13）

nvm use 版本号 切换node版本

nvm on 开启nvm

nvm off 关闭nvm

nvm alias default 16.18.0 // 设置默认版本号

```





## 12.2 nrm

### 12.2.1 nrm 下载

```js

npm install nrm -g



nrm --version 查看 nrm 版本号
nrm ls 查看当前可用的镜像源列表
nrm test 测试镜像地址的速度
nrm use [镜像名称] 切换 npm 的下载地址
```



## 12.3  rimraf

```js
npm i rimraf -g

进入需要清理的项目中，执行
rimraf node_modules
```

