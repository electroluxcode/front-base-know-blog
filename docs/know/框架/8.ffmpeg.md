# 8.ffmpeg

[[toc]]

## 8.1 基础



```js
--1. 容器：视频流，字幕流（srt），音频流 （stream）
--2. 编码：h264，h265（hevc），MP3


一个MP4可以 有多个音轨 和 视频 流

--3. hello
--3.1 环境变量
下载 http://ffmpeg.org/download.html#build-windows 
下载gyan 的https://www.gyan.dev/ffmpeg/builds/ 的 ffmpeg.git.full.7z 就好了, 然后将解压的bin目录放到环境变量中去



```



## 8.2 实操



### 8.2.1 查看

```js
--1.查看简单指令
ffmpeg -i demo.mp4  // 在input 中可以看到一些流 Input 中是里面的MP4之类的东西。然后stream 里面是 具体的一些流
```



### 8.2.2 转码

```js
ffmpeg -i demo.mp4 demo.mkv
ffmpeg -i demo.mp4 demo.mp3
// 查看 h26 之后的东西 h26 | hevc
ffmpeg -codecs | grep h26


// 指定转码器 根据上文的输出 (encoders: libx264 )。然后 

// -c:v 这里是转化MP4 -c:v:0 xxx第几个流 用什么格式
fmpeg -i demo.mp4 -c:v  libx265 demo.mkv // libx264 之类的
ffmpeg -i demo.mp4 -c:v  copy demo.mkv // 直接拷贝

// -c:a 这里是转化音频
ffmpeg -i demo.mp4 -c:v libx265 -c:a libmp3lame demo.mkv // 直接拷贝

// -c:s 这里是转化字幕
ffmpeg -i demo.mp4 -c:v libx265 -c:a libmp3lame -c:s srt  demo.mkv // 直接拷贝


ffmpeg -i demo.mp4 demo.mkv // 默认情况 会保留第一个流.可以看到Stream mapping:  可以看stream 为video 后面的 第一个参数

ffmpeg -i demo.mp4  ^
-map 0:v:0 把input 的 第0个视频的第0个 video 映射 
-map 0:a:0 把input 的 第0个视频的第0个 audio 映射 
-map 0:s:0 把input 的 第0个视频的第0个 字幕 映射 
demo.mkv
```











### 8.2.3 分辨率

```js
// -s 指定 大小
// -r 指定 最大帧率
// -b:v 1M 最大比特率
ffmpeg -i demo.mp4 -c:v  copy -s 4096x2480 -r 60 -b:v 1M demo.mkv 
```

```shell
# 不保持纵宽比例
ffmpeg -i logo.png -vf scale=320:240 output_320x240.png
#  保持纵宽比例
ffmpeg -i logo.png -vf scale=3200:-1 output_320x240.png
```







### 8.2.3 时间截取

```js
// 从3秒开始 持续8秒钟
ffmpeg -i demo.mp4  -c:v  copy  -ss 00:00:03 -t 8  demo.mkv


// 从3秒开始 到8秒钟
ffmpeg -i demo.mp4  -c:v  copy  -ss 00:00:03 -to 00:00:08  demo.mkv 
```



### 8.2.4 合成视频 和 音频

```shell
# 下面这段代码是将 demo 的 mp3 和 oppo 的MP4 进行合成
ffmpeg -i demo.mp4 -i oppo.mp4 -map  0:a -map 1:v  output.mp4  
```



### 8.2.5 合成多个视频  | -y 不经过提示直接覆盖

```shell
ffmpeg -i demo.mp4 -s 720x480  -vf "setsar=sar=1/1,setdar=dar=1920/1080"   -c:v  libx264  -y demo_output.mp4
ffmpeg -i oppo.mp4 -s 720x480  -vf "setsar=sar=1/1,setdar=dar=1920/1080"  -c:v  libx264 -y oppo_output.mp4
# 大小必须一样
ffmpeg -i oppo_output.mp4   -i demo_output.mp4   -filter_complex '[0:0][0:1][1:0][1:1] concat=n=2:v=1:a=1 [v] [a]' -map '[v]' -map '[a]' -vsync 0 -y output.mp4


-vsync 0 可以避免 重复帧 的报错报 卡住的错误
```



### 8.2.6 截图

```shell
#截取第7秒第1帧的画面
ffmpeg -i demo.mp4 -ss 7 -vframes 1 video_image.jpg
```



### 8.2.7 水印

```shell
# 离左边20个像素，离上面80个像素 添加一个 logo.png的水印
ffmpeg -i demo.mp4 -i logo.png -filter_complex "overlay=20:80" video_watermark.mp4
```



### 8.2.8  输出gif

```shell
#基本是字面意思了，从7.5s 到 8.5 秒
ffmpeg -i demo.mp4 -ss 7.5 -to 8.5 -s 640x320 -r 15 video_gif.gif
```



### 8.2.9  录屏 | 直播（基本用不了）

```js
windows: ffmpeg -f gdigrab -i desktop rec.mp4
q：退出

ubuntu: sudo ffmpeg -f fbdev -framerate 10 -i /dev/fb0 rec.mp4

(2)直播
ffmpeg -re i rec.mp4 按照网站要求编码 -f flv "你的rtmp地址/你的直播码"
```









### 8.2.11  常用

```js
-an   [output.mp4]  //  输出前面加上这个可以静音
-vn   [output.mp4]  //  输出前面加上这个可以除掉视频
-map 0:a:3 // 可以获取到第0个视频第三个音频
-c copy  // 就是格式复制而已
```

















