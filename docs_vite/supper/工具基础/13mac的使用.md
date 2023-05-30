# 苹果



## 1.1 快捷键

```js
1. command  比较万能.
2. command+space 可以调出控制行
3. ctrl + control + q 快速锁屏
```



## 1.2 环境变量





```js
1.首先看你是什么shell 工具，我这里是 zsh

a. /etc/profile 
b. /etc/paths 
c. ~/.bash_profile 
d. ~/.bash_login 
e. ~/.profile 
f. ~/.bashrc

我们首先要知道 a b 是系统级别的，系统启动就会加载





2.
vim ~/.zshrc  # 其实open 更加好用

点i 进入编辑模式

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm

粘贴进去 esc+wq!退出


```











## 1.3 ssh

```shell
open /Users/electrolux/.ssh/id_ed25519

ssh-keygen -t ed25519 -C "3451613934@qq.com" 

Finder
```





别的操作好像差不多s







## 1.4 nginx

```shell
# 安装目录
open /usr/local/etc/nginx/
# 真正被安装的地方
open /usr/local/Cellar/nginx

brew services start nginx

open /usr/local/etc/nginx/nginx.conf
# 其实它是指向的就是 /usr/local/var/wwww



三、总结nginx常见的配置
nginx的配置文件路径：/usr/local/etc/nginx/nginx.conf
nginx的服务器默认路径：/usr/local/var/www
nginx的安装路径：/usr/local/Cellar/nginx/1.15.5

1、nginx启动：
1.1、在终端输入 ps -ef|grep nginx 命令看是否有启动，如下：
1.2 重启 cd /usr/local/Cellar/nginx/1.15.5/bin/， 然后再执行：./nginx -s reload

```



## 1.5 快速打开命令行



拖动文件夹进去就好了



```shell
command + option + p
就可以右键了
```



## 1.6 adb

```sh
brew install android-platform-tools
```







## 1.7 环境变量总结



```shell
open /usr/local    # 大部分被安装的地方，比如说我现在是 /usr/local/mysql-8.0.33-macos13-x86_64/bin 我要把这个安装过去

#首先我应该command + shift + p 然后在下方复制。这里的 open ~/Download/的意思是 ~是当前用户的 根目录


open ~/.zshrc   # 环境变量
export PATH=$PATH:/usr/local/mysql/bin
```



## 1.8 缩放



```shell
control + + : 放大
```







## 1.9 anaconda



```js
下载 xx.pkg
```





## 1.10 右键助手

```js
超级好用，能把很多操作弄进去。比如右键打开vscode
```

