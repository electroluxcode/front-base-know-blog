

# 4.docker 部署实操

[[toc]]


## 4.1 初始化（nginx，node）

```js
//dockerfile文件通过nginx启动vue
docker pull nginx// 获取nginx镜像
docker build -t vuenginxcontainer .     
```

在项目根目录下创建`nginx`文件夹，该文件夹下新建文件`default.conf`

写入

```nginx
server {
    listen       3001;
    server_name  localhost;

    #charset koi8-r;
    access_log  /var/log/nginx/host.access.log  main;
    error_log  /var/log/nginx/error.log  error;

    location / {
           root   /usr/share/nginx/html;
           try_files $uri $uri/ /index.html;
        }
		#如果要是https://bcfaf400-630a-4598-9617-c0d6337c9a9b.bspapp.com会找不到的，注意
        location /api {
            proxy_pass https://bcfaf400-630a-4598-9617-c0d6337c9a9b.bspapp.com/;
        }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}



该配置文件定义了首页的指向为 /usr/share/nginx/html/index.html, 所以我们可以一会把构建出来的index.html文件和相关的静态资源放到/usr/share/nginx/html目录下
```



## 4.2 dockfile配置（多行命令）

systemctl enable docker   //设置开机启动

根目录下新建Dockerfile文件

```dockerfile
FROM nginx
COPY dist/ /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
-------------------------------------------------------------
FROM nginx 命令的意思该镜像是基于 nginx:latest 镜像而构建的。
COPY dist/ /usr/share/nginx/html/ 命令的意思是将项目根目录下dist文件夹下的所有文件复制到镜像中 /usr/share/nginx/html/ 目录下。
COPY nginx/default.conf /etc/nginx/conf.d/default.conf 命令的意思是将nginx目录下的default.conf 复制到 etc/nginx/conf.d/default.conf，用本地的 default.conf 配置来替换nginx镜像里的默认配置。
```



构建镜像

```shell
docker build -t vuenginxcontainer .
docker run -p 3001:3001 -d --name vueApp vuenginxcontainer
#-t 是给镜像命名 . 是基于当前目录的Dockerfile来构建镜像  docker image ls  查看镜像
# 3000:80   3000 本地  80 容器端口
```



## 4.3 vue的一些关键的地方



其实也没有什么关键的地方，你要知道的是devserver的proxy里面的东西是一点点用都没有的。因此我们才需要nginx，axios文件夹下面，我们

```js
let request = axios.create({
    baseURL: "/api",
    timeout: 5000,
    withCredentials: false,// 跨域请求时是否需要访问凭证
    
})

----------------------------

import axios from "./request";
export const testget=()=>{
  
    return axios.get(
        '/login?name=ruibo&password=123456'
    )
}

```



## 4.4 dockerfile 启动（一行命令）

在根目录

```sh
docker build -t vuenginxcontainer .
docker stop $(docker ps -q)
docker rm $(docker ps -aq)
docker run -p 3001:3001 -d --name vueApp vuenginxcontainer
# docker-compose up 容器启动的另一个方法


-------------------------------

最终
docker stop $(docker ps -q)
docker rm $(docker ps -aq)
for i in `docker images | grep  "vuenginxcontainer" | awk '{print $3}'` ##提取出镜像id， 输出每行中（以空格或制表符分隔）的第三个字段
do
{
echo $i
docker rmi --force $i ##删除镜像
echo "docekr delete $i complete"
} &
done
wait
echo -e "\e[1;31mdelete complete \e[0m"
docker build -t vuenginxcontainer .
docker run -p 3002:3001 -d --name vueApp vuenginxcontainer
# docker-compose up 容器启动的另一个方法
```



## 4.5 docker-compose up 启动

```sh
version: "3"
# 服务 里面包含了多个容器
services:
# 单个service（容器的配置）
  web111app:

    container_name: composev1  #自定义容器名字
    image: composev1 # 镜像名
    build: .
    # 共享内存的大小
    shm_size: 1gb
    ports:
      - 3001:3001
    #卷挂载 双向数据自动同步
    volumes:
      - /var/www/test
    # 最大文件限制数，主要是程序崩溃后会生成可调试文件core.2131 会占用内存，不启用即可
    ulimits:
      core: 0
      nofile:
        soft: 1024
        hard: 1024
# docker-compose up 容器启动的另一个方法 就可以启动了
```



## 4.6 nginx优化

这玩意自己实操起来很容易

### step1： helloworld



nginx.org 下载就可以了

nginx.exe根目录

bat命令

```bat
@echo off
rem 如果启动前已经启动nginx并记录下pid文件，会kill指定进程
nginx.exe -s stop

rem 测试配置文件语法正确性
nginx.exe -t -c conf/nginx.conf

rem 显示版本信息
nginx.exe -v

rem 按照指定配置去启动nginx
nginx.exe -c conf/nginx.conf

@REM  重启命令：nginx -s reload 
@REM nginx -s quit   平稳关闭Nginx，保存相关信息，有安排的结束web服务

@REM nginx -s stop 快速关闭
@REM nginx -s quit 等待工作进程处理完成后关闭

```



关键是一个conf目录和html目录

html目录把你的dists文件扔进去在nginx.conf配置一下就可以了。conf目录里面有nginx.conf.

这跟我们docker的位置不一样（nginx/conf.d/default.conf）



重要：接口转发时要把 最后的网址封口类似于 www.bai.com/

### step2:优化示例

```nginx
upstream backend {
        server 127.0.0.1:3000 backup; #备用
        server 127.0.0.1:3001;
}  
server {
    listen       3001;
    server_name  localhost;

    # 知识点1：开启gzip 压缩
    # gzip on;
    # # 设置gzip所需的http协议最低版本 （HTTP/1.1, HTTP/1.0）
    # gzip_http_version 1.1;
    # # 设置压缩级别，压缩级别越高压缩时间越长  （1-9）
    # gzip_comp_level 4;
    # # 设置压缩的最小字节数， 页面Content-Length获取
    # gzip_min_length 1000;
    # # 设置压缩文件的类型  （text/html)
    # gzip_types text/plain application/javascript text/css;

    #charset koi8-r;
    access_log  /var/log/nginx/host.access.log  main;
    error_log  /var/log/nginx/error.log  error;

    location / {
        # 查找资源路径
        root   /usr/share/nginx/html;
        try_files $uri $uri/ /index.html;
    }
    # 知识点2：反向代理解决跨域
    location /api {
        # 请求host传给后端
        # proxy_set_header Host $http_host;
        # # 请求ip 传给后端
        # proxy_set_header X-Real-IP $remote_addr;
        # # 请求协议传给后端
        # proxy_set_header X-Scheme $scheme;
        proxy_pass https://bcfaf400-630a-4598-9617-c0d6337c9a9b.bspapp.com/;
    }

    # 知识点3：.不缓存任何东西 告知浏览器禁用缓存，每次都从服务器获取 效果如下：
    # location ~* \.(js|css|png|jpg|gif)$ {
    #     add_header Cache-Control no-store;
    # }

    #error_page  404              /404.html;
    # redirect server error pages to the static page /50x.html
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}



```



