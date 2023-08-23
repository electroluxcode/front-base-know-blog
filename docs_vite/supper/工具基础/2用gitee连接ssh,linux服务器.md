# 2. 用gitee连接ssh

[[toc]]



## 2.1 gitee | github

**暂存区域(Stage)**:用于临时存放你的改动,事实上它只是一个文件，保存即将提交的文件列表信息。

**Git 仓库(Repository)** 就是安全存放数据的位置，这里边有你提交的所有版本的数据。其中，HEAD 指向最新放入仓库的版本。

只有仓库成员才可以通过http的方式连接. 凭证的修改可以通过 https://www.yj521.com/article/144.html来进行实现

### step1：c/Users/Admin/.ssh文件夹中  ed25519 是加密算法

```
ssh-keygen -t ed25519 -C "3451613934@qq.com" 
Enter passphrase  // 那么到时登陆的时候就不用密码了,用户名输了就出大事了
```

生成 .ssh文件夹

下面有id_ed25519 (私钥)文件 和 id_ed25519.pub（公钥）文件

获取到你的 public key

查看id_ed25519.pub,获取到你的 public key

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIB7KlSu10TM2o47bbPXJdX9EquLeHgpzHndj+gGw6f9D 3451613934@qq.com

```



### step2：然后去到公钥

部署公钥配置后的机器，只支持clone与pull等只读操作。如果您想要对仓库进行写操作

在https://gitee.com/profile/sshkeys添加公钥。Git的Remote要使用SSH地址,  当我们push的时候，他会默认去找到 id_ras

```

ssh-keygen -t rsa -C "zp.work@foxmail.com"

ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC/K4FCP5okQiQD5YdQwvCCORSv9ZppsBcIA7qU/IX85krAYPLpV93QHcOL965TYot6bcfOYYfEgfAUWgsZLMMILN0V8fpdR6MShqPoGvAmVWYes9zgEdKGFr6VZMuZBNFpZu9vZhSe1N80DuKlOVuZt3xVd/OTlIyhHG/Jl1idirmkSq/hJF91P5JXAhwpITmos3PHupiQ7VIlr2uJWraxaR3wGCsuFCB73pzYvPEW15waLtwQ3XnRieC3QlH+GYBw8vEWe6AXmUqBnaw8OJXBVx+0hvTZHD9MBOGff8Vi3Pjmp8Dyl9V0w/vOs/ezfh6i1HwVElQ5QOlVwfxIGAxkm0/WBzRKI7m4tlsRXk9aBEdMSaeeSLlJJGKGj0gOkNGPEFV1sB0WdYreZ7QeMQI7VhmD0ZPB9y91KQPgcOEeFA7EDwTC8/iQfvBuvPw9T8BYH2gDoqtq7gH/y57ipsGCHcroaGfIfcC2VADq0FGEkq2+iteclKMQJv2H+PEvX2E= zp.work@foxmail.com

```



## 2.2 免密码登录linux 服务器 





```shell
服务器上面：
ssh-keygen -t rsa 
# 名字 不能输入别的 然后 密码 不设置密码。我真的服了，不能输入其他的东西

然后本地上面

ssh-copy-id  -p 222 root@10.21.2.47
ssh root@10.21.2.47 -p 222

接下来去到服务器

chmod 700 /home/root

chmod 700 ~/.ssh/

chmod 600 ~/.ssh/authorized_keys
```





## 2.3  gitlab CI/CD



### 自己安装服务器 版本

```shell

1.购买阿里云服务器
1.1安全组里面配置
8000/8100
3389
-1 -1 
22
80 端口
---
2.在服务器上安装gitlab-ce--完成（将本地的代码推送到远程仓库）
---
3.在服务器上安装gitlab-runner--完成




# 1. linux 环境 
yum -y install policycoreutils openssh-server openssh-clients postfix

yum install  policycoreutils-python

systemctl enable sshd && sudo systemctl start sshd

systemctl enable postfix && systemctl start postfix

# 2. 关闭防火墙
systemctl stop firewalld.service

# 3.安装gitlab-ce，这个安装包有问题：
wget https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el6/gitlab-ce-13.6.7-ce.0.el6.x86_64.rpm

# 安装gitlab-ce，我用了这个安装地址， 这里 要下载很久 1G左右
wget --content-disposition https://packages.gitlab.com/gitlab/gitlab-ce/packages/el/7/gitlab-ce-15.2.2-ce.0.el7.x86_64.rpm/download.rpm

# 4.直接安装即可 
yum install -y gitlab-ce-15.2.2-ce.0.el7.x86_64.rpm

# 5. 查看gitlab的配置文件
cd /etc/gitlab

vi gitlab.rb

# 6.在文件中修改 external_url和nginx['listen_port']的key对应的内容
#6.1.命令模式（默认） 可以搜索   / 加上 内容 就是 搜索 的 意思 
#6.2.插入模式：按i键，可以修改内容（-- INSERT --提示） 按左上角esc按钮，可以切换模式 在命令模式中退出并保存的指令:wq 不需要修改，直接退出:q

external_url 'http://114.96.82.2:80'
nginx['listen_port'] = 80

# 7 重启
gitlab-ctl reconfigure
gitlab-ctl restart

# 8. 我们去到 http://114.96.82.2:80 登录  |  查看初始密码：/etc/gitlab/initial_root_password文件

# 9. code runner | https://juejin.cn/post/6844903798796730375

curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.rpm.sh | sudo bash

 # 安装：
sudo yum install gitlab-ci-multi-runner


#----------------------------------------------------------


#10 .gitlab-runner 注册 |  os ： 其实 前面的似乎没有什么必要  就看这一步就好了
获取gitlab-ci的Token: 项目主页 -> Settings -> CI/CD -> Runners Expand(runner 展开)  
GR1348941z77bDbxDQMny5anUqnaF
GR1348941xyYJD16x1KJt2MV3Q-78
# 服务器中 输入指令： 输入 实例路径  ，token 和 shell（构建的软件） 和 tag:CITest  | https://docs.gitlab.com/runner/install/windows.html 
gitlab-runner register

#ssh root@10.21.2.47
yum install sshpass
#sshpass -p 666666 scp ./重新命名目录名 root@10.21.2.47:/root/project/


# 把 前者带给后者
scp -r test root@10.21.2.47:/root/project  //上传目录

```







### 托管到gitlab中的 版本

```shell


#10 .gitlab-runner 注册 |  os ： 其实 前面的似乎没有什么必要  就看这一步就好了
获取gitlab-ci的Token: 项目主页 -> Settings -> CI/CD -> Runners Expand(runner 展开)  
GR1348941z77bDbxDQMny5anUqnaF
GR1348941xyYJD16x1KJt2MV3Q-78
# 服务器中 输入指令： 输入 实例路径  ，token 和 shell（构建的软件） 和 tag:CITest  | https://docs.gitlab.com/runner/install/windows.html 
gitlab-runner register

#ssh root@10.21.2.47
yum install sshpass
#sshpass -p 666666 scp ./重新命名目录名 root@10.21.2.47:/root/project/

ssh root@10.21.2.47 
# 把 前者带给后者
scp -r test root@10.21.2.47:/root/project  # 上传目录

```



