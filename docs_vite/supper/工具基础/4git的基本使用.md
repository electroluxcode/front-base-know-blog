# 4.git的基本使用

[[toc]]

## 4.1  基础知识

下载去到下面下载

```
https://git-scm.com/downloads
```

git中有三类文件

```
1 被追踪的（tracked）:已经加入文档库
2不被追踪的(untracked):没有加入文档库
3忽略的(ignored):忽略那些不需要管理的文件夹或文件
```

安装后指定你的邮箱和用户名

```js
git config --global user.email "3451613934@qq.com" //指定你的 
git config --global user.name "electrolux" //指定你的
git config --global -l //打印出你的config
```



查看状态

```js
git config -e //查看当前git配置
git remote -v //查看源
```



当你第一次push的时候 可能会有凭证让你输入。gitee和github的凭证各不相同

```
上传的时候如果有报错的话提示账号密码错误的话，在上传的时候有一个弹窗，那个是输入你的码云的账号密码，输错了的话打开控制面板，用户，windows凭据，普通凭据里面删除码云和GitHub的账号密码再重新git上传重新弹窗再输入就好了，新手上路被坑了
```









## 4.2 基本使用(工作常用)



.gitignore 里面是不被提交的文件,格式类似于

```
node_modules/
public/
```





### 从0搭建

```js
git clone
git pull //命令的作用是:取回远程主机某个分支的更新，再与本地的指定分支合并.有冲突就解决冲突
git add .
git commit -m "你的提交信息"
git push origin master

```

### clone别人的

```js
git clone 你的git地址
//如果leader 要你切换分支 git switch 或者git branch xx
git switch dev
git pull //命令的作用是:取回远程主机某个分支的更新，再与本地的指定分支合并.有冲突就解决冲突
git add .
git commit -m "你的提交信息"
git push origin dev

```







## 4.3 删除仓库

```js
git remote remove test //删除其中一个仓库
git remote rm origin //删除掉远程仓库
```



## 4.4 版本控制

```js
git log --pretty=format:'%h: %s'	//加参。简洁查看推荐这种。感觉跟reflog差不多。但是各有各的好处
git reset --hard 60a1fded33ad035cc323ca5de6e3da4ffb80c8db	//回退版本


git reflog	//查看除了提交还有删除记录什么的
git reset --hard HEAD@{0}   //执行这个操作就可以回退版本

git status	//（看一下是不是有文件没提交）


```









## 4.5 提交树美化

建议在sourcetree这种地方看提交树



```js
1e8e76b2d2d8ed1fa89996b0a90eacb151422379  17：37 //第一行的origin/master直接删掉就可以了
d14a3d1e3c5033840c78b58a5b1cae1af22e00ac 17:26
f52fecd7f8b665c018d6c244dd924272cfaccfbf 404图片的提交2
5c7d0df162896912ffcc38e6118e45b7f8b953d2 (tag: 0.0.1) 404的提交
60a1fded33ad035cc323ca5de6e3da4ffb80c8db 404图片的提交
```

合并中间几个记录实操：

```js
git log  //查看提交记录
//这里我们调用的是合并id的前 3    ctrl+x快速切换
git rebase -i "60a1fded33ad035cc323ca5de6e3da4ffb80c8db"  
//这里我们进入了一个vim界面
//esc按下之后，我们  :w 表示保存退出  :wq!表示强制保存退出   :q!强制退出不保存
//越下面的是提交越晚的。和git log顺序相反

//我们要合并我们就要把pick 变成 s（squash）这两个东西都可以。这段的意思是把中间两个合并到 404的提交 这里面去    

pick 5c7d0df 404的提交
squash f52fecd 404图片的提交2
squash d14a3d1 17:26
pick 1e8e76b 17：37

//esc +  :wq保存并退出
//接下来会弹出第二个页面, 分别展示三个commit的提交信息，我们要选中一个提交信息
//按d 删除   我第一次不小心 没有commit信息 
//git rebase --abort恢复

//d(drop那里)。或许这种方法更加痛快    s（squash）这个玩意就不用了


```





## 4.6 合并代码

merge 合并别人的

```js
git checkout master //切换分支
git merge main
```



## 4.7 标签管理

```js
git tag v1.0	//打标签
git tag -a v0.1 -m "version 0.1 released" 1094adb //指定标签名和说明文字和commit id
git tag	//查看所有标签
//若是忘记打，则查找历史提交commit id ，再打上
git log --pretty=oneline --abbrev-commit
git tag v0.9 f52c633
git show v0.9		//查看标签详细信息
git tag -d v0.1	//删除标签
git push origin v1.0	//推送标签到远程
git push origin –tags	//一次性推送全部本地标签
//删除标签，（若已推送到远程，先从本地删除，从远程删除）
git tag -d v0.9
git push origin :refs/tags/v0.9
//打标签如下  v0.9 后面是commit id
git tag -d v0.9
git tag v0.9 f52c633

```

```js
//实操
git add .
git commit -m "tag标签"
git tag -d 0.0.2
git tag -a 0.0.2 -m "提交"
git tag	//查看所有标签 
git show 0.0.2 //查看一下状态
git push origin 0.0.2
```



## 4.8 合并冲突

在我们直接下载并且进行提交的时候，有时候啊会报错

```
fatal: refusing to merge unrelated histories解决
```



这个时候我们应该

```
git pull origin master --allow-unrelated-histories
```



然后冲突我们可以在冲突编辑区下面进行修改

```
左边是一开始的，右边是已经更改的
下面是最终提交的
```





## 4.9 项目常用



### 4.9.1  当开发的时候主分支有新东西要合并进来

我当前开发的分支再zp_dev,leader的主分支在dev。主分支有新东西要合并进来

```shell
git pull origin dev 有问题 显示 Please commit your changes or stash them before you merge.然后

git stash 
git checkout dev
git pull origin dev # 拉到现在的dev分支
git checkout zp_dev
git stash pop
git stash # 安全
git rebase dev # 接着本地解决冲突，accept 更改，拉取共有的东西
```



### 4.9.2 dev 没有 pull  到最新 然后进行开发

```shell
# 本地的有冲突
git checkout dev
git branch -d dev 
git pull origin dev   
git reset xx 或者 git checkout zp_dev
git rebase dev  # 解决冲突 此时 Git 会将 zp_dev 分支下最新提交的代码提取出来，将 dev 分支最新的代码应用到这个提交上，然后将结果提交到 zp_dev 分支上。如果有冲突需要解决，解决冲突后再使用 git add 命令添加修改，使用 git rebase --continue 命令继续执行合并操作。如果合并过程中发生问题导致代码出现错误，可以使用 git rebase --abort 命令撤销合并操作，并恢复到合并前的状态。

# 5.当合并完成后，将合并结果推送到远程仓库：

git push origin zp_dev

```











## 常见bug

### error: remote origin already exists

```js
--1.如果你clone下来一个别人的仓库，在此基础上完成你的代码，推送到自己的仓库可能遇到这问题。error: remote origin already exists.表示远程仓库已存在。
因此你要进行以下操作：
--1.1、先输入git remote rm origin 删除关联的origin的远程库
--1.2、关联自己的仓库 git remote add origin https://gitee.com/xxxxxx.git
--1.3、最后git push origin master，这样就推送到自己的仓库了。

--2.git克隆下来只有master分支 看不见 也无法切换 其他分支
git branch -a
git checkout -t origin/website_shibo_1.0.0 就可以了


```

