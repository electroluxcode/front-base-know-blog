# 4.git的基本使用

[[toc]]

## 4.1  基础知识

下载去到下面下载

```
https://git-scm.com/downloads
git pull 拉取远程仓库
git add . 跟踪所有改动的文件
git commit -m "" 提交改动到本地仓库
git push 推送到远程仓库
git checkout <branch> 切换分支
git clone/init 初始化
git log 查看历史
git revert <commit> 撤销指定提交





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















### 4.1.1 删除仓库

```js
git remote remove test //删除其中一个仓库
git remote rm origin //删除掉远程仓库
```



### 4.1.4 版本控制

```js
git log --pretty=format:'%h: %s'	//加参。简洁查看推荐这种。感觉跟reflog差不多。但是各有各的好处
git reset --hard 60a1fded33ad035cc323ca5de6e3da4ffb80c8db	//回退版本


git reflog	//查看除了提交还有删除记录什么的
git reset --hard HEAD@{0}   //执行这个操作就可以回退版本

git status	//（看一下是不是有文件没提交）


```









### 4.1.5 提交树美化

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





### 4.1.6 合并代码

merge 合并别人的

```js
git checkout master //切换分支
git merge main
```



### 4.1.7 标签管理

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



### 4.1.8 合并冲突

```js
git pull 和 git fetch + git merge 但是git fetch可以看到更新情况，也就更安全
```



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





### 4.1.9 github 提 issue 

首先 fork 一下，然后 git clone fork 的 仓库。然后 切换分支 提交 分支到自己的地方 。就可以去他的项目提 pr了



### 4.1.10 cherry-pick

把指定的[commit](https://so.csdn.net/so/search?q=commit&spm=1001.2101.3001.7020)，拉到一个当前的分支上。

```js
 git cherry-pick commitID
```





## 4.2 git hook | husky

```js
githook是原理是.git文件夹里面有hooks里面有很多hook，我们只需要写bash脚本，特定的时间就会做特定的事情
husty会自定义目录执行特定时间脚本（主要是precommit)

为了代码的规范有必要进行 log 规范化检查。而检查的入口可以从 git hook 切入，而 git hook 

钩子都被存储在 Git 目录下的 hooks 子目录中。 也即绝大部分项目中的 `.git/hooks`，默认存在的都是示例，其名字都是以 `.sample` 结尾，如果你想启用它们，得先移除这个后缀。把一个正确命名且可执行的文件放入 Git 目录下的 hooks 子目录中，即可激活该钩子脚本。 这样一来，它就能被 Git 调用。

你可以用来检查消息、检查代码，可以用来触发任意流程，譬如自动规范检查等等
```



```ts
有两种类型的hook

一种是服务端的hook，  receive之类的
一种是客户端的hook。precommiit之类的

有几种钩子的情况
msg(应用程序消息)
pre(应用前批处理)
post(应用程序批处理后)

hook，这其实是计算机领域中一个很常见的概念，hook 翻译过来的意思是钩子或者勾住，而在计算机领域中则要分为两种解释:

拦截消息，在消息到达目标前，提前对消息进行处理
对特定的事件进行监听，当某个事件或动作被触发时也会同时触发对应的 hook
也就是说 hook 本身也是一段程序，只是它会在特定的时机被触发。

在提交的规范中我们一般有以下的规范
feat：新功能（feature）
fix：修补bug
docs：文档（documentation）
style： 格式（不影响代码运行的变动）
refactor：重构（即不是新增功能，也不是修改bug的代码变动）
test：增加测试
chore：构建过程或辅助工具的变动


```



### 4.2.1 husky 初始化



husky的原理是在.git/config文件的[core]中添加 hooksPath = .husky就是原理了



step1:初始化

```js
命令行中
npm install husky@8 -D
package.json中添加
"scripts": {	
    "prepare": "husky install",
},
        
```

npm run prepare，构建一般目录 ~的这个目录直接删掉就好了



### 4.2.2  添加钩子

我们还可以在husky文件夹下面新建precommit，我们写入

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint
是一样的效果
```



校验名字-这玩意我写的贼牛皮-.husk//commit-msg

```python
#!/usr/bin/env python
# coding=utf-8
#
# commit msg check
import sys
import re
import io
import os
if hasattr(sys.stdout, 'buffer'):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

TIPS_INFO = '''
不符合commit规范,提交失败!

commit规范:
类型 详细消息-具体请看readme

规范样例：
feat:类型是feat表示在代码库中新增了一个功能 git commit -m "feat: 增加了xxx功能"

！！！！提交失败！！！！
'''

def check_commit_line1_format(msg):
    print(msg)
    # regOther = r'\S{5,} (.){10,100}' ^fix:|^feat: ((修复了)|(增加了))(.){2,100}功能
    regOther = r'^fix|^feat|^docs|^style|^refactor|^test|^chore (.){1,100}'
    matchObj = re.match(regOther, msg)
    return matchObj

if __name__=="__main__":
    # print("进行lint扫描")
    # os.system("npm run lint")
    # print("进行audit扫描")
    # os.system("npm audit")
    print("--------husky校验中--------")
    # print(sys)
    with open(sys.argv[1], 'r',encoding="utf-8") as f:
        for line in f:
            if (check_commit_line1_format(line)):
                sys.exit(0)
            else:
                print(TIPS_INFO)
                sys.exit(1)

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





## 4.10 设置github 的 代理

### http 

v2ray 找到可以用的节点。然后 设置 =》 参数设置，然后



```shell
git config --global http.https://github.com.proxy socks5://127.0.0.1:10808

# 取消 代理
git config --global --unset http.proxy
git config --global --unset    http.https://github.com.proxy
```



### 设置ssh代理（终极解决方案）


https代理存在一个局限，那就是没有办法做身份验证，每次拉取私库或者推送代码时，都需要输入github的账号和密码，非常痛苦。
设置ssh代理前，请确保你已经设置ssh key。可以参考[在 github 上添加 SSH key](https://link.zhihu.com/?target=https%3A//tjfish.github.io/posts/%E5%9C%A8github%E4%B8%8A%E6%B7%BB%E5%8A%A0SSH-key/) 完成设置
更进一步是设置ssh代理。只需要配置一个config就可以了。

```bash
# Linux、MacOS
vi ~/.ssh/config
# Windows 
到C:\Users\your_user_name\.ssh目录下，新建一个config文件（无后缀名）
```


将下面内容加到config文件中即可

对于windows用户，代理会用到connect.exe，你如果安装了Git都会自带connect.exe，如我的路径为C:\APP\Git\mingw64\bin\connect

```text
#Windows用户，注意替换你的端口号和connect.exe的路径
ProxyCommand "C:\APP\Git\mingw64\bin\connect" -S 127.0.0.1:51837 -a none %h %p

#MacOS用户用下方这条命令，注意替换你的端口号
#ProxyCommand nc -v -x 127.0.0.1:51837 %h %p

Host github.com
  User git
  Port 22
  Hostname github.com
  # 注意修改路径为你的路径
  IdentityFile "C:\Users\Your_User_Name\.ssh\id_rsa"
  TCPKeepAlive yes

Host ssh.github.com
  User git
  Port 443
  Hostname ssh.github.com
  # 注意修改路径为你的路径
  IdentityFile "C:\Users\Your_User_Name\.ssh\id_rsa"
  TCPKeepAlive yes
```


保存后文件后测试方法如下，返回successful之类的就成功了。

```text
# 测试是否设置成功
ssh -T git@github.com
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





## 规范 

目前行业最为广泛规范是 Conventional Commits[1] 很多项目包括 Auglar 也在使用。

可以根据以上规范制定适合自己团队的规范，例如：

JIRA-1234 feat: support for async execution

^-------^ ^--^: ^-------------------------^
|         |     |
|         |     +--> Summary in present tense.
|         |
|         +--> Type: feat, fix, docs, style, refactor, perf, test or chore.
|
+--> Jira ticket number

Type 类型必须是下面之一，并且为小写:

    feat: 修改/增加新功能
    fix: 修改bug的变更
    docs: 文档相关变更
    style: 不影响代码含义的变更(空白、格式、缺少符号等)
    refactor: 代码重构变更
    perf: 改进性能的变更
    test: 添加/修改现有的测试
    chore: Build, .gitignore或辅助工具、库(如文档生成)等变更
