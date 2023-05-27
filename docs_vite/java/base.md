# 1.java基础





## 1.1springboot helloworld

### 1.1.1 环境

```shell
1.idea 下载社区版的。

https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html
jdk 下载 17 的
然后去到 https://start.spring.io/ 添加 java web 和 悬案则 maven后 点击add dependencies 后 genrate

2.导入到idea 后可能 load maven 会卡死，不过等一下就好了

导入的pom.xml 没有加下面一段 加上去 然后再
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>



```





### 1.1.2 写入

```js
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@RequestMapping("/")
	public String root() {
		return "hello spring boot";
	}

	@RequestMapping("/hello")
	public String hello() {
		return "hello spring boot \n 谢谢阅读!";
	}
}


右键启动
```







### 1.1.3 输出dump 文件

```shell
netstat -aon|findstr "8080"

输出的最后一位 是 pid  2216  
然后再 jdk文件夹下面 
jmap -dump:format=b,file=m.hprof 2216


获取 获取heap dump文件
jmap -dump:format=b,file=m.hprof 2216 
thread dump

获取thread dump文件
windows下执行：jstack 2216 > 1.txt
linux下执行：./jstack 2216 > 1.txt

jmap -heap 14168 > 2.txt
jstack 14168 > 2.txt
jmap -dump:live,format=b,file=heap-dump.bin 14168 > 2.txt 


jmap -dump:live,format=b,file=heap-dump.bin <pid>
```





