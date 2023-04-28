# 6.nginx 



## 6.1 基础

```js
--0.下载
http://nginx.org/en/download.html
解压之后直接按下面

查看nginx 安装目录. 
ps -ef | grep nginx. 
二、查看配置文件nginx.conf 路径. 
nginx -t.
--1.
nginx  //启动
nginx -s stop //关闭
nginx -v //版本查看
nginx -s reload //重新配置


--2. 
fastCGI : 快速公共网关接口协议;


注意在html下面新建 文件夹
location /test/ {
            root   html;
            index index1.html index.htm;
            try_files $uri $uri/ /index.html;
            proxy_pass https://nginx_boot/;
        }
```





## 6.2 转发端口



### 6.2.1 hosts文件中

C:\Windows\System32\drivers\etc\hosts 添加

```
127.0.0.1       a.b.com
```

然后我们就可以访问 http://a.b.com

注意这里的host 后面不能够加端口，不然访问失效。

注意如果你启动的服务有 ssl 也就是 https 服务 。 那么可以在前缀头加上s变成https://a.b.com





### 6.2.2 nginx.conf

```shell
#gzip  on;
    server {
    	# 自己的地址
        listen       8280;
        server_name  a.b.com;
        # error_page   405 =200 @405;
        location /api {
            add_header 'Access-Control-Allow-Origin' *;
            #允许带上cookie请求
            add_header 'Access-Control-Allow-Credentials' 'true';
            #允许请求的方法，比如 GET/POST/PUT/DELETE
            add_header 'Access-Control-Allow-Methods' *;
            #允许请求的header
            add_header 'Access-Control-Allow-Headers' *;
            # error_page 405 =200 http://$host$request_uri;
            #后端 的 地址
            proxy_pass http://localhost:8088;
            proxy_redirect off;
            proxy_set_header Host $host;
			proxy_set_header X-Forwarded-Proto $scheme;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header Upgrade $http_upgrade; 
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_connect_timeout 18000;
			proxy_send_timeout 18000;
			proxy_read_timeout 18000;
            # index  index.html index.htm index.jsp;
            
        }

    }
```



### 6.2.3 启动 | 重启 nginx 脚本

```shell
# reload.bat
nginx -s reload

# start.bat
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

```

### 6.2.4 测试js

```js
 let ajax1 = (data, url) => {
     //step1 : 设置请求头
     let xhr = new XMLHttpRequest();
     //step2：设置请求方式和请求头 //true表示异步
     xhr.open("POST", url, true);
     xhr.setRequestHeader("Content-type", "application/json");
     //step3：请求数据
     xhr.send();
     // step4：readyState是xhr的请求状态
     //状态4表示已发送请求，服务器已完成返回响应，浏览器已完成了下载响应内容。0-4都有值的
     xhr.onreadystatechange = function () {

         if (xhr.readyState === 4 && xhr.status === 200) {
             console.log(xhr.responseText);
         }
     };
 }
 let url = "/api/post"

 ajax1(url, url)
```





## 6.3 实操

```shell
user www-data;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;

events {
	worker_connections 768;
	# multi_accept on;
}

http {

	##
	# Basic Settings
	##
        client_max_body_size 100m;
	sendfile on;
	tcp_nopush on;
	types_hash_max_size 2048;
	# server_tokens off;

	# server_names_hash_bucket_size 64;
	# server_name_in_redirect off;

	include /etc/nginx/mime.types;
	default_type application/octet-stream;

	##
	# SSL Settings
	##

	ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3; # Dropping SSLv3, ref: POODLE
	ssl_prefer_server_ciphers on;

	##
	# Logging Settings
	##

	access_log /var/log/nginx/access.log;
	error_log /var/log/nginx/error.log;

	##
	# Gzip Settings
	##

	gzip on;



	include /etc/nginx/conf.d/*.conf;
	# 重要
	include /etc/nginx/sites-enabled/*;
}


#mail {
#	# See sample authentication script at:
#	# http://wiki.nginx.org/ImapAuthenticateWithApachePhpScript
#
#	# auth_http localhost/auth.php;
#	# pop3_capabilities "TOP" "USER";
#	# imap_capabilities "IMAP4rev1" "UIDPLUS";
#
#	server {
#		listen     localhost:110;
#		protocol   pop3;
#		proxy      on;
#	}
#
#	server {
#		listen     localhost:143;
#		protocol   imap;
#		proxy      on;
#	}
#}

```

/etc/nginx/sites-enabled/vh2d

```shell
#map $sent_http_content_type $expires {
#    default                    off;
    #text/html                  epoch; # 不缓存
#    text/css                   max; 
#    application/javascript     max;
#    ~image/                    max;  
#}
server {
    listen 80 default_server;
    server_name virtualhuman.cvte.com;
#    expires $expires;

    location /admin {
        alias /var/digitalHuman/virtualHumanAdmin/dist;
        index  index.html index.htm;
        try_files $uri $uri/ /admin/index.html;
            if ($request_filename ~* .*\.(?:htm|html)$){
        } 
        client_max_body_size    1000m;
   }
 
    location / {
        alias /var/digitalHuman/digitalHuman/dist/;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
        client_max_body_size    1000m;
        if ($request_filename ~* .*\.(?:htm|html)$){
        } 
    }

    location /api {
        proxy_pass http://localhost:8081;
        proxy_set_header X-forwarded-for $proxy_add_x_forwarded_for;
        proxy_set_header X-forwarded-proto https;
        proxy_set_header X-forwarded-host $host;
    }

    location /worker1 {
        proxy_pass http://localhost:8090;
    }

    location ~ ^/(resource|output)/ {
        proxy_pass http://localhost:9000;

	proxy_set_header Host $host;
    }
}


```

