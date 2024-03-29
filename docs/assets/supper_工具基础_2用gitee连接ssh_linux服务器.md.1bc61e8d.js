import{_ as s,o as a,c as n,R as l}from"./chunks/framework.408c4d71.js";const h=JSON.parse('{"title":"2. 用gitee连接ssh","description":"","frontmatter":{},"headers":[],"relativePath":"supper/工具基础/2用gitee连接ssh,linux服务器.md","filePath":"supper/工具基础/2用gitee连接ssh,linux服务器.md","lastUpdated":1692759868000}'),p={name:"supper/工具基础/2用gitee连接ssh,linux服务器.md"},o=l(`<h1 id="_2-用gitee连接ssh" tabindex="-1">2. 用gitee连接ssh <a class="header-anchor" href="#_2-用gitee连接ssh" aria-label="Permalink to &quot;2. 用gitee连接ssh&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#_2-1-gitee-github">2.1 gitee | github</a><ul><li><a href="#step1-c-users-admin-ssh文件夹中-ed25519-是加密算法">step1：c/Users/Admin/.ssh文件夹中 ed25519 是加密算法</a></li><li><a href="#step2-然后去到公钥">step2：然后去到公钥</a></li></ul></li><li><a href="#_2-2-免密码登录linux-服务器">2.2 免密码登录linux 服务器</a></li><li><a href="#_2-3-gitlab-ci-cd">2.3 gitlab CI/CD</a><ul><li><a href="#自己安装服务器-版本">自己安装服务器 版本</a></li><li><a href="#托管到gitlab中的-版本">托管到gitlab中的 版本</a></li></ul></li></ul></nav><h2 id="_2-1-gitee-github" tabindex="-1">2.1 gitee | github <a class="header-anchor" href="#_2-1-gitee-github" aria-label="Permalink to &quot;2.1 gitee | github&quot;">​</a></h2><p><strong>暂存区域(Stage)</strong>:用于临时存放你的改动,事实上它只是一个文件，保存即将提交的文件列表信息。</p><p><strong>Git 仓库(Repository)</strong> 就是安全存放数据的位置，这里边有你提交的所有版本的数据。其中，HEAD 指向最新放入仓库的版本。</p><p>只有仓库成员才可以通过http的方式连接. 凭证的修改可以通过 <a href="https://www.yj521.com/article/144.html%E6%9D%A5%E8%BF%9B%E8%A1%8C%E5%AE%9E%E7%8E%B0" target="_blank" rel="noreferrer">https://www.yj521.com/article/144.html来进行实现</a></p><h3 id="step1-c-users-admin-ssh文件夹中-ed25519-是加密算法" tabindex="-1">step1：c/Users/Admin/.ssh文件夹中 ed25519 是加密算法 <a class="header-anchor" href="#step1-c-users-admin-ssh文件夹中-ed25519-是加密算法" aria-label="Permalink to &quot;step1：c/Users/Admin/.ssh文件夹中  ed25519 是加密算法&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ssh-keygen -t ed25519 -C &quot;3451613934@qq.com&quot; </span></span>
<span class="line"><span style="color:#A6ACCD;">Enter passphrase  // 那么到时登陆的时候就不用密码了,用户名输了就出大事了</span></span></code></pre></div><p>生成 .ssh文件夹</p><p>下面有id_ed25519 (私钥)文件 和 id_ed25519.pub（公钥）文件</p><p>获取到你的 public key</p><p>查看id_ed25519.pub,获取到你的 public key</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIB7KlSu10TM2o47bbPXJdX9EquLeHgpzHndj+gGw6f9D 3451613934@qq.com</span></span></code></pre></div><h3 id="step2-然后去到公钥" tabindex="-1">step2：然后去到公钥 <a class="header-anchor" href="#step2-然后去到公钥" aria-label="Permalink to &quot;step2：然后去到公钥&quot;">​</a></h3><p>部署公钥配置后的机器，只支持clone与pull等只读操作。如果您想要对仓库进行写操作</p><p>在<a href="https://gitee.com/profile/sshkeys%E6%B7%BB%E5%8A%A0%E5%85%AC%E9%92%A5%E3%80%82Git%E7%9A%84Remote%E8%A6%81%E4%BD%BF%E7%94%A8SSH%E5%9C%B0%E5%9D%80" target="_blank" rel="noreferrer">https://gitee.com/profile/sshkeys添加公钥。Git的Remote要使用SSH地址</a>, 当我们push的时候，他会默认去找到 id_ras</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ssh-keygen -t rsa -C &quot;zp.work@foxmail.com&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC/K4FCP5okQiQD5YdQwvCCORSv9ZppsBcIA7qU/IX85krAYPLpV93QHcOL965TYot6bcfOYYfEgfAUWgsZLMMILN0V8fpdR6MShqPoGvAmVWYes9zgEdKGFr6VZMuZBNFpZu9vZhSe1N80DuKlOVuZt3xVd/OTlIyhHG/Jl1idirmkSq/hJF91P5JXAhwpITmos3PHupiQ7VIlr2uJWraxaR3wGCsuFCB73pzYvPEW15waLtwQ3XnRieC3QlH+GYBw8vEWe6AXmUqBnaw8OJXBVx+0hvTZHD9MBOGff8Vi3Pjmp8Dyl9V0w/vOs/ezfh6i1HwVElQ5QOlVwfxIGAxkm0/WBzRKI7m4tlsRXk9aBEdMSaeeSLlJJGKGj0gOkNGPEFV1sB0WdYreZ7QeMQI7VhmD0ZPB9y91KQPgcOEeFA7EDwTC8/iQfvBuvPw9T8BYH2gDoqtq7gH/y57ipsGCHcroaGfIfcC2VADq0FGEkq2+iteclKMQJv2H+PEvX2E= zp.work@foxmail.com</span></span></code></pre></div><h2 id="_2-2-免密码登录linux-服务器" tabindex="-1">2.2 免密码登录linux 服务器 <a class="header-anchor" href="#_2-2-免密码登录linux-服务器" aria-label="Permalink to &quot;2.2 免密码登录linux 服务器&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">服务器上面：</span></span>
<span class="line"><span style="color:#FFCB6B;">ssh-keygen</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rsa</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 名字 不能输入别的 然后 密码 不设置密码。我真的服了，不能输入其他的东西</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">然后本地上面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">ssh-copy-id</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">222</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root@10.21.2.47</span></span>
<span class="line"><span style="color:#FFCB6B;">ssh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root@10.21.2.47</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">222</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">接下来去到服务器</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">700</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/root</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">700</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.ssh/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">600</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.ssh/authorized_keys</span></span></code></pre></div><h2 id="_2-3-gitlab-ci-cd" tabindex="-1">2.3 gitlab CI/CD <a class="header-anchor" href="#_2-3-gitlab-ci-cd" aria-label="Permalink to &quot;2.3  gitlab CI/CD&quot;">​</a></h2><h3 id="自己安装服务器-版本" tabindex="-1">自己安装服务器 版本 <a class="header-anchor" href="#自己安装服务器-版本" aria-label="Permalink to &quot;自己安装服务器 版本&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">1.购买阿里云服务器</span></span>
<span class="line"><span style="color:#FFCB6B;">1.1安全组里面配置</span></span>
<span class="line"><span style="color:#FFCB6B;">8000/8100</span></span>
<span class="line"><span style="color:#FFCB6B;">3389</span></span>
<span class="line"><span style="color:#FFCB6B;">-1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-1</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">22</span></span>
<span class="line"><span style="color:#FFCB6B;">80</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">端口</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#FFCB6B;">2.在服务器上安装gitlab-ce--完成（将本地的代码推送到远程仓库）</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#FFCB6B;">3.在服务器上安装gitlab-runner--完成</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 1. linux 环境 </span></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">policycoreutils</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">openssh-server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">openssh-clients</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">postfix</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">policycoreutils-python</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sshd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sshd</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">postfix</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">postfix</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 2. 关闭防火墙</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">firewalld.service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 3.安装gitlab-ce，这个安装包有问题：</span></span>
<span class="line"><span style="color:#FFCB6B;">wget</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el6/gitlab-ce-13.6.7-ce.0.el6.x86_64.rpm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装gitlab-ce，我用了这个安装地址， 这里 要下载很久 1G左右</span></span>
<span class="line"><span style="color:#FFCB6B;">wget</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--content-disposition</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://packages.gitlab.com/gitlab/gitlab-ce/packages/el/7/gitlab-ce-15.2.2-ce.0.el7.x86_64.rpm/download.rpm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 4.直接安装即可 </span></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gitlab-ce-15.2.2-ce.0.el7.x86_64.rpm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 5. 查看gitlab的配置文件</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/gitlab</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">vi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gitlab.rb</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 6.在文件中修改 external_url和nginx[&#39;listen_port&#39;]的key对应的内容</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#6.1.命令模式（默认） 可以搜索   / 加上 内容 就是 搜索 的 意思 </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#6.2.插入模式：按i键，可以修改内容（-- INSERT --提示） 按左上角esc按钮，可以切换模式 在命令模式中退出并保存的指令:wq 不需要修改，直接退出:q</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">external_url</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://114.96.82.2:80</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">nginx[</span><span style="color:#FFCB6B;">&#39;listen_port&#39;</span><span style="color:#FFCB6B;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 7 重启</span></span>
<span class="line"><span style="color:#FFCB6B;">gitlab-ctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reconfigure</span></span>
<span class="line"><span style="color:#FFCB6B;">gitlab-ctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 8. 我们去到 http://114.96.82.2:80 登录  |  查看初始密码：/etc/gitlab/initial_root_password文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 9. code runner | https://juejin.cn/post/6844903798796730375</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.rpm.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 安装：</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gitlab-ci-multi-runner</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#----------------------------------------------------------</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#10 .gitlab-runner 注册 |  os ： 其实 前面的似乎没有什么必要  就看这一步就好了</span></span>
<span class="line"><span style="color:#FFCB6B;">获取gitlab-ci的Token:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">项目主页</span><span style="color:#A6ACCD;"> -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Settings</span><span style="color:#A6ACCD;"> -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CI/CD</span><span style="color:#A6ACCD;"> -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Runners</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Expand</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">runner</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">展开</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">GR1348941z77bDbxDQMny5anUqnaF</span></span>
<span class="line"><span style="color:#FFCB6B;">GR1348941xyYJD16x1KJt2MV3Q-78</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 服务器中 输入指令： 输入 实例路径  ，token 和 shell（构建的软件） 和 tag:CITest  | https://docs.gitlab.com/runner/install/windows.html </span></span>
<span class="line"><span style="color:#FFCB6B;">gitlab-runner</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">register</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#ssh root@10.21.2.47</span></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sshpass</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#sshpass -p 666666 scp ./重新命名目录名 root@10.21.2.47:/root/project/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 把 前者带给后者</span></span>
<span class="line"><span style="color:#FFCB6B;">scp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root@10.21.2.47:/root/project</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">//上传目录</span></span></code></pre></div><h3 id="托管到gitlab中的-版本" tabindex="-1">托管到gitlab中的 版本 <a class="header-anchor" href="#托管到gitlab中的-版本" aria-label="Permalink to &quot;托管到gitlab中的 版本&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#10 .gitlab-runner 注册 |  os ： 其实 前面的似乎没有什么必要  就看这一步就好了</span></span>
<span class="line"><span style="color:#FFCB6B;">获取gitlab-ci的Token:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">项目主页</span><span style="color:#A6ACCD;"> -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Settings</span><span style="color:#A6ACCD;"> -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CI/CD</span><span style="color:#A6ACCD;"> -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Runners</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Expand</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">runner</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">展开</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">GR1348941z77bDbxDQMny5anUqnaF</span></span>
<span class="line"><span style="color:#FFCB6B;">GR1348941xyYJD16x1KJt2MV3Q-78</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 服务器中 输入指令： 输入 实例路径  ，token 和 shell（构建的软件） 和 tag:CITest  | https://docs.gitlab.com/runner/install/windows.html </span></span>
<span class="line"><span style="color:#FFCB6B;">gitlab-runner</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">register</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#ssh root@10.21.2.47</span></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sshpass</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#sshpass -p 666666 scp ./重新命名目录名 root@10.21.2.47:/root/project/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">ssh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root@10.21.2.47</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 把 前者带给后者</span></span>
<span class="line"><span style="color:#FFCB6B;">scp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root@10.21.2.47:/root/project</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 上传目录</span></span></code></pre></div>`,24),e=[o];function t(c,r,i,C,y,A){return a(),n("div",null,e)}const F=s(p,[["render",t]]);export{h as __pageData,F as default};
