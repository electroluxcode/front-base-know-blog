# 9.shell | CICD

[[toc]]

## 9.1 基础

### 9.1.1 循环

```shell
echo "请输入你想沟通的人数"
read n
count=1
while ((count<=n))
do  
    # do something
    
    sleep 2
    echo "当前沟通了: $count 人"
    ((count++))
    sleep 2
done
```



### 9.1.2  数组

```shell
# 1.数组声明 名称=(元素 元素 元素) =左右赋值的时候不用加空格 

# "" 变成 变量 , '' 全部不是变量都是字符串
# ARRAY_NAME=("element_1st" "element_2nd" "element_3th")

# 2.打印元素
# 2.1 打印所有 元素
# echo ${ARRAY_NAME[@]}
# 2.2 打印单个元素
# echo ${ARRAY_NAME[0]}
# 2.3 循环打印
# for i in "${ARRAY_NAME[@]}"; do 
# echo "$i"; 
# done

ARRAY_NAME=()
ARRAY_NAME+=("文件 '%s'\n" *.sh)
echo ${ARRAY_NAME[@]}


```









## 9.2  实用

### 9.2.1 查找当前文件夹 的 文件 | 写入

```shell
ARRAY_NAME=()
ARRAY_NAME+=(*.sh)


count=1
echo ${ARRAY_NAME[0]} 

for i in "${ARRAY_NAME[@]}"; do 
    # > 是 强制覆写
    # >> 是 在尾部添加
    #  $(date +%Y%m%d%H%M%S) 对应着年 月 日 时分秒
    echo "$i $(date +%Y%m%d%H%M%S) $count " >> output.txt; 
    ((count++))
done
```





### 9.2.2 移动 复制 删除 重新命名

```shell
echo "hello world"
# 1.创造
touch 文件
mkdir 目录名
sleep 3
# 移动文件

# 2. 命名 和 移动 文件 mv 文件  D:/cicd-test/目录名
# 重新命名
mv 文件 重新命名文件
mv  目录名/ 重新命名目录名/
sleep 3
echo "6s after"
# rm 文件
# rmdir 目录名



```







### 9.2.3 查找文件

```shell
find /xx "xx.conf"
```





## 9.3 CICD

```SH
# window 的扩展 ： https://www.azimiao.com/8040.html

# step1 ： https://sourceforge.net/projects/gnuwin32/files/zip/3.0/ 
# step2 ： 找到 Git 文件夹下的usr/bin目录，将解压后bin里面的东西复制进去

# 提前 ssh 配置 一下

# ssh root@10.21.2.47 -p 222

# 第一个参数是 输出，第二个参数是输入
node test.js
zip  ./dist.zip ./build -r

scp  -P 222 -r dist.zip root@10.21.2.47:/root/project  # 上传目录
ssh root@10.21.2.47 -p 222 < easyUnzip.sh
```



easyUnzip.sh

```SH
# 解压进行覆盖
unzip -o /root/project/dist.zip -d /root/project/
```

