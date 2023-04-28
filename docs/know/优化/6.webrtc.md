# 6.webrtc



[[toc]]

## 6.0 概念 | 缺点


```js
0.webrtc 是 用户通过 nat，stun，turn经过信令服务器交换STUN和TURN来进行和其他人所建立p2p连接
1.SDP：Session Description Protocol ：一个对话协议。能大概的看到一些你的内网 IP 信息，外网 IP 信息，以及一些媒体流然后webrtc通过sdp来交换端与端的网络和媒体
2.ICE：Interactive Connectivity Establishment，交互式连接建立协议
3.NAT:Network Address Translation 网络地址转化
4.ICE候选者的种类：host：本机候选者（内网） | srflx：P2P服务(stun) | relay：relay候选者（turn）

5.STUN：(Session Traversal Utilities for NAT)： NAT 会话穿越应用程序。
NAT 的进化版，遍历服务器进行查询操作

6.TURN:(Traversal Using Relays around NAT):使用Relays 来穿透 NAT（兜底）
7.信令是WebRTC 想要直接通过 P2P 连接进行通信，需要一个传输过程确定通信协议和信息，这就称之为信令。


1.可能会泄露私人信息ip之类的(WebRTC 通过交互式连接建立 (ICE)协议通过stun和turn来进行发现 IP)
```







## 6.1 证书安装

```js
--1.
https://chocolatey.org/install
选择个人然后 注意在下面有一个
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))。。。。。。。。。这个要在powershell 也要进行 用管理员身份打开的方式进行运行
--2. 管理员身份
choco install mkcert

3、ipconfig 查看你的ipv4地址然后
mkcert zp_cert "*.example.com" 172.18.91.192   localhost 127.0.0.1 ::1


4.接下来可以在
生成的目录中找到证书，然后我们能够在vscode 的 live server 配置 pem 和 key pem 并且开启https，然后我们重新打开vscode就可以正常访问https了



```



## 6.2 功能

### 6.2.1 canvas撤销功能

```
1.新建全局变量 step 和 array变量 allStep
2.allStep中推入canvas.todataurl ，step++
3.设置一个函数 undo()  里面 首先 step-- 然后清屏，接下来我们去到数组里面的值 赋予给new image() 然后canvas.drawImage()
```



### 6.2.2 配置 | 摄像头获取 | 直播加滤镜

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    #localVideo {
        width: 700px;
        height: 500px;
    }
</style>

<body>

    <video id="localVideo" autoplay playsinline muted></video>

    <canvas id="fliter"></canvas>
    <script>

        // 调用摄像头
        // 切换摄像头。可以切换成虚拟摄像头

        //第一步，获取到本地媒体,getUserMedia  调用摄像头
        // 注意兼容性 
        function cameraStart() {
            let isFront = false;

            let config = {
                audio: false, video: true, video: {
                    width: 700,
                    height: 500,
                    // 前后置摄像头
                    facingMode: isFront ? "user" : "environment",
                    // 帧率设置. 字面意思，一个是理想的状态下面，一个是最大的帧率
                    frameRate: { ideal: 30, max: 30 }
                },
            };
            let video = document.querySelector("video");
            function successCallback(stream) {
                // 将返回的流提供给控制台进行检查
                window.stream = stream;
                console.log(stream)
                video.srcObject = stream;
                // 播放
                video.play();
            }
            function errorCallback(error) {
                console.log("navigator.getUserMedia error: ", error);
            }
            // 传入3个参数，第一个是配置，第二个是成功的回调
            // 这个更加规范了，多加了一个mediaDevices。window.navigator.getUserMedia(config, successCallback, errorCallback);
            navigator.mediaDevices.getUserMedia(config)
                .then(function (stream) {
                    successCallback(stream)
                })
                .catch(function (err) {
                    errorCallback(err)
                });

        }
        // 调用
        cameraStart()

    </script>

    <script>
        // 给直播加滤镜
        var canvas = document.getElementById("fliter");
        var context = canvas.getContext("2d");

        var video = document.getElementById("localVideo");

        // 开始播放时候执行
        video.oncanplay = function () {
            video.play();
            switchToCanvas();
        }

        function switchToCanvas() {
            const filterList = [
                'blur(5px)', // 模糊
                'brightness(0.5)', // 亮度
                'contrast(200%)', // 对比度
                'grayscale(100%)', // 灰度
                'hue-rotate(90deg)', // 色相旋转
                'invert(100%)', // 反色
                'opacity(90%)', // 透明度
                'saturate(200%)', // 饱和度
                'saturate(20%)', // 饱和度
                'sepia(100%)', // 褐色
                'drop-shadow(4px 4px 8px blue)', // 阴影
            ]
            if (video.ended) {
                return;
            }
            context.filter = filterList[4]
            // 将video上的图片的每一帧以图片的形式绘制的canvas上
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            window.requestAnimationFrame(switchToCanvas);
        }
    </script>



    <img src="" id="img" alt="">
    <button onclick="photo()">点击拍照</button>

    <script>
        // 拍照功能
        /*
            1.初始化canvas 标签可以将媒体流createElement("canvas") 和 getContext('2d')
            2.drawImage 绘制 
            3.也可以通过 toDataURL 方法将 canvas 转换为 base64 图片然后转化到src
        */
        const filterList = [
            'blur(5px)', // 模糊
            'brightness(0.5)', // 亮度
            'contrast(200%)', // 对比度
            'grayscale(100%)', // 灰度
            'hue-rotate(90deg)', // 色相旋转
            'invert(100%)', // 反色
            'opacity(90%)', // 透明度
            'saturate(200%)', // 饱和度
            'saturate(20%)', // 饱和度
            'sepia(100%)', // 褐色
            'drop-shadow(4px 4px 8px blue)', // 阴影
        ]


        function photo() {
            const video = document.querySelector('#localVideo')
            const canvas = document.createElement('canvas')
            canvas.width = 200
            canvas.height = 200
            const ctx = canvas.getContext('2d')
            ctx.filter = filterList[2]
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
            document.querySelector("#img").src = canvas.toDataURL('image/png')
        }

    </script>




    <script>
        // 公共模块
        // 1.获取到所有的设备，然后筛选出 videoinput 类型的设备，最后通过不同的设备 id 来实现切换摄像头。
        // 作用：切换摄像头。可以切换成虚拟摄像头
        async function getDevices() {
            const devices = await navigator.mediaDevices.enumerateDevices()
            console.log('devicesList:', devices)
            let videoDevices = devices.filter((device) => device.kind === 'videoinput')
            // 获取可用的id
            console.log('videoDevices:', videoDevices[0].deviceId)
            //然后有什么用呢，哦我们可以在基础设置config的video的deviceId的exact 里面塞id
            /*
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: false,
                    video: {
                    deviceId: { exact: deviceId },
                    },
                })
            */
        }
        getDevices()

    </script>
</body>

</html>
```

### 6.2.3 屏幕录制共享

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    #localVideo {
        width: 700px;
        height: 500px;
    }
</style>

<body>
    <video id="localVideo" autoplay playsinline muted></video>
    <script>
        // 2.屏幕共享
        function startScreem() {
            let isFront = false;
            let config = {
                audio: false, video: true, video: {
                    width: 700,
                    height: 500,
                    // 前后置摄像头
                    facingMode: isFront ? "user" : "environment",
                    // 帧率设置. 字面意思，一个是理想的状态下面，一个是最大的帧率
                    frameRate: { ideal: 30, max: 30 }
                },
            };
            let video = document.querySelector("video");
            function successCallback(stream) {
                // 将返回的流提供给控制台进行检查
                window.stream = stream;
                console.log(stream)
                if (window.URL) {
                    // Chrome浏览器
                    video.srcObject = stream;
                }
                // 播放
                video.play();
            }
            function errorCallback(error) {
                console.log("navigator.getUserMedia error: ", error);
            }
            // 传入3个参数，第一个是配置，第二个是成功的回调
            // navigator.mediaDevices.getDisplayMedia(config, successCallback, errorCallback);
            navigator.mediaDevices.getDisplayMedia(config)
                .then(function (stream) {
                    successCallback(stream)
                })
                .catch(function (err) {
                    errorCallback(err)
                });

        }
        // startScreem()
    </script>

    <script>
        // 屏幕录制和下载视频，结束时才能下载

        // 录制媒体流
        async function startRecord() {
            const kbps = 1024
            const Mbps = kbps * kbps
            let localStream = await navigator.mediaDevices.getDisplayMedia({
                audio: true,
                video: true,
            })
            let options = {
                audio: false, video: true, video: {
                    width: 700,
                    height: 500,
                    frameRate: { ideal: 30, max: 30 }
                },
            };
            const mediaRecorder = new MediaRecorder(localStream, options)
            mediaRecorder.start()
            mediaRecorder.onError = (e) => {
                console.log("报错原因："+e)
            }
            mediaRecorder.ondataavailable = (e) => {
                // 将录制的数据合并成一个 Blob 对象
                // 直接改成 mp4
                const blob = new Blob([e.data], { type: 'video/mp4' })
                window.blob = blob
            }

            // 该事件会在媒体录制结束时触发
            mediaRecorder.onstop = (e) => {
                // 停止录制
            }
        }

        // 下载 Blob
        function downloadBlob(blob) {
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = `${new Date().getTime()}.${blob.type.split('/')[1]}`
            a.click()
            // 释放 URL 地址
            URL.revokeObjectURL(url)
        }
        function downloadBlobButton() {
            blob =window.blob
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = `${new Date().getTime()}.${blob.type.split('/')[1]}`
            a.click()
            // 释放 URL 地址
            URL.revokeObjectURL(url)
        }

    </script>

    <button onclick="startRecord()">开始录制</button>
    <button onclick="downloadBlobButton()">下载blob</button>
</body>

</html>
```



### 6.2.4 摄像头录制视频

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button onclick="startRecord()">开始录制</button>
    <button onclick="downloadBlobButton()">下载blob</button>
    <video id="localVideo" autoplay playsinline muted></video>
    <script>
        // 录制媒体流
        async function startRecord() {
            const kbps = 1024
            const Mbps = kbps * kbps
            let video = document.querySelector("video");
            function successCallback(stream) {
                // 将返回的流提供给控制台进行检查
                window.stream = stream;
                console.log(stream)
                video.srcObject = stream;
                // 播放
                video.play();
            }
            navigator.mediaDevices.getUserMedia({
                audio: true,
                video: true,
            }).then(function (localStream) {
                let video = document.querySelector("video");
                video.srcObject = localStream
                video.play()
                let options = {
                    audio: false, video: true, video: {
                        width: 700,
                        height: 500,
                        frameRate: { ideal: 30, max: 30 }
                    },
                };

                window.localStream = localStream
                const mediaRecorder = new MediaRecorder(localStream, options)
                mediaRecorder.start()
                mediaRecorder.onError = (e) => {
                    console.log("报错原因：" + e)
                }
                mediaRecorder.ondataavailable = (e) => {
                    const blob = new Blob([e.data], { type: 'video/mp4' })
                    window.blob = blob
                }

                // 该事件会在媒体录制结束时触发
                mediaRecorder.onstop = (e) => {
                    // 停止录制
                }
            })
                .catch(function (err) {
                    console.log(err)
                });


        }

        // 下载 Blob
        function downloadBlob(blob) {
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = `${new Date().getTime()}.${blob.type.split('/')[1]}`
            a.click()
            // 释放 URL 地址
            URL.revokeObjectURL(url)
        }
        function downloadBlobButton() {
            window.localStream.getTracks().forEach(element => {
                element.stop()
            });
            setTimeout(() => {
                blob = window.blob
                const url = URL.createObjectURL(blob)
                const a = document.createElement('a')
                a.href = url
                a.download = `${new Date().getTime()}.${blob.type.split('/')[1]}`
                a.click()
                // 释放 URL 地址
                URL.revokeObjectURL(url)
            }, 0)
        }


    </script>

</body>

</html>
```



### 6.2.5 虚拟背景的实现

```html
<!DOCTYPE html>
<html lang="en">
   
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .background-processing-container {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 50px;


        }

        .source {
            display: flex;
            justify-content: space-around;
            gap: 50px;
            align-items: center;
            text-align: center;
        }


        video,
        canvas {
            width: 480px;
            height: 300px;
            border: 4px solid #374685;
        }
    </style>
</head>

<body>
    <!-- 
        主要原理是通过 canvas 将视频中的每一帧画到画布上，然后将画布中的像素逐个与设定的背景色（默认是绿色，你可以更换为任意符合你背景的颜色）进行计算，比较后的差值达到设定的阈值时，对其进行处理，将其更换为预先准备好的背景图的图像数据，最后将处理后的图像数据再画到虚拟背景画布上，通过虚拟背景画布拿到媒体流后给到 video 标签播放， 这样就实现了视频的虚拟背景效果。
        下面我们来看看具体的实现。
        为保持大小一致，这里我们统一设置画布和视频的宽高为 480*300
    -->
    <div class="background-processing-container">
        <canvas id="backgroundImg" width="480" height="300" class="background-img"></canvas>
    
        <video id="real-video" width="480" height="300" autoplay muted></video>
        <video id="virtual-video" width="480" height="300" autoplay muted></video>

        <div class="control">
            你的背景色：
            <input id="color" type="color" />
            容差值：
            <!-- <el-input-number v-model="allowance" :step="1" step-strictly /> -->
            <!-- <el-slider v-model="allowance" :max="300" :step="1" /> -->
        </div>
    </div>


    <script>
        // import backgroundImg from '@/assets/background2.png'
       
        const WIDTH = 480
        const HEIGHT = 300

        // 原本的视频
        let realVideo
        let realVideoCanvas
        let realVideoCtx
        let realVideoImageData

        // 虚拟的视频
        let virtualVideo
        let virtualVideoCanvas
        let virtualVideoCtx
        
        document.querySelector('#color').onchange=function(e){
            // console.log(hexToRgb(e.target.value))
            backgroundColor = hexToRgb(e.target.value)?hexToRgb(e.target.value):"#000000"
        }
        
        // 重要：第一步，获取背景图的信息
        let backgroundImageData
        // 获取背景图像数据
        function getBackgroundImageData() {
            return new Promise((resolve) => {
                const backgroundCanvas = document.querySelector('#backgroundImg')
                const backgroundCtx = backgroundCanvas.getContext('2d')
                const img = new Image()
                // img.src = backgroundImg
                img.src = 'https://img2.baidu.com/it/u=1926879275,2141590185&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=282'
                img.setAttribute('crossOrigin', '')
                img.onload = () => {
                    backgroundCtx.drawImage(
                        img,
                        0,
                        0,
                        backgroundCanvas.width,
                        backgroundCanvas.height,
                    )
                    //  用于合成事件
                    backgroundImageData = backgroundCtx.getImageData(
                        0,
                        0,
                        backgroundCanvas.width,
                        backgroundCanvas.height,
                    )
                    resolve(0)
                }
            })
        }

        // 获取摄像机流
        async function getLocalStream(options) {
            const stream = await navigator.mediaDevices.getUserMedia(options)
            return stream
        }

        // 播放摄像机流
        function playRealVideo(stream) {
            realVideo = document.querySelector('#real-video')
            realVideo.srcObject = stream
        }

        // 合成视频
        function drawVideoToCanvas(realVideo) {
            // realVideo 是 设想
            // 摄像头的canvas
            realVideoCanvas = document.createElement('canvas')
            

            realVideoCtx = realVideoCanvas.getContext('2d')

            virtualVideoCanvas = document.createElement('canvas')
            virtualVideoCtx = virtualVideoCanvas.getContext('2d')
            
            realVideoCanvas.width = virtualVideoCanvas.width = WIDTH
            realVideoCanvas.height = virtualVideoCanvas.height = HEIGHT
            
            // 每隔 100ms 将真实的视频写到 canvas 中，并获取视频的图像数据
            setInterval(() => {
                realVideoCtx.drawImage(
                    realVideo,
                    0,
                    0,
                    realVideoCanvas.width,
                    realVideoCanvas.height,
                )
                // 渲染图片
                realVideoImageData = realVideoCtx.getImageData(
                    0,
                    0,
                    realVideoCanvas.width,
                    realVideoCanvas.height,
                )
                // 处理真实视频的图像数据，将其写到虚拟视频的 canvas 中
                processFrameDrawToVirtualVideo()
            }, 50)
            // 从 VirtualVideoCanvas 中获取视频流并在 virtualVideo 中播放
            getStreamFromVirtualVideoCanvas()
        }

        // 从 VirtualVideoCanvas 中获取视频流并在 virtualVideo 中播放
        function getStreamFromVirtualVideoCanvas() {
            virtualVideo = document.querySelector('#virtual-video')
            const stream = virtualVideoCanvas.captureStream(30)
            // 重要，从这里canvas 变成最终的流
            virtualVideo.srcObject = stream
        }

        // ！！！重要：合成：处理真实视频的图像数据，将其写到虚拟视频的 canvas 中
        function processFrameDrawToVirtualVideo() {
            // 逐像素计算与要处理的目标颜色的差值，如果差值小于阈值，则将该像素设置为背景图片中的对应像素
            for (let i = 0; i < realVideoImageData.data.length; i += 4) {
                const r = realVideoImageData.data[i]
                const g = realVideoImageData.data[i + 1]
                const b = realVideoImageData.data[i + 2]
                const a = realVideoImageData.data[i + 3]
                const bgR = backgroundImageData.data[i]
                const bgG = backgroundImageData.data[i + 1]
                const bgB = backgroundImageData.data[i + 2]
                const bgA = backgroundImageData.data[i + 3]

                // 计算与背景色的差值
                const diff = colorDiff([r, g, b], backgroundColor)
                // 当差值小于设定的阈值，则将该像素设置为背景图片中的对应像素
                if (diff < allowance) {
                    realVideoImageData.data[i] = bgR
                    realVideoImageData.data[i + 1] = bgG
                    realVideoImageData.data[i + 2] = bgB
                    realVideoImageData.data[i + 3] = bgA
                }
            }
            // 将处理后的图像数据写到虚拟视频的 canvas 中
            virtualVideoCtx.putImageData(realVideoImageData, 0, 0)
        }

        // 计算颜色差异
        function colorDiff(rgba1, rgba2) {
            let d = 0
            for (let i = 0; i < rgba1.length; i++) {
                d += (rgba1[i] - rgba2[i]) ** 2
            }
            return Math.sqrt(d)
        }

        // 十六进制转 rgb
        function hexToRgb(hex) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
            console.log("hexToRgb:"+hex)
            return result
                ? [
                    parseInt(result[1], 16),
                    parseInt(result[2], 16),
                    parseInt(result[3], 16),
                ]
                : null
        }
        // 初始的背景色
        let color = '#000000'
        // let temp = rgba(100,200,100)
        // setTimeout(()=>{
        //     color ='#00000'
        // },1000)
        // 重要：设置 diff 阈值
        const allowance = 162
        let backgroundColor 

        // 重要：需要扣除的背景色
        backgroundColor = hexToRgb(color)
        // watch(
        //     () => color.value,
        //     (newVal) => {
        //         // 十六进制转 rgb
        //         backgroundColor = hexToRgb(newVal)
        //     },
        //     {
        //         immediate: true,
        //     },
        // )
        // 开始
        async function start() {
            // 重要第一步：在canvas绘制图像，显示出来
            await getBackgroundImageData()
            // 重要第二步：显示出来没有经过变化的原始摄像头，其实是没有什么意义的
            const stream = await getLocalStream({
                video: {
                    width: WIDTH,
                    height: HEIGHT,
                },
                audio: false,
            })
            playRealVideo(stream)
            // 重要第三步：这个是主要逻辑方法
            drawVideoToCanvas(realVideo)
        }
        start()
        // start()

    </script>

</body>

</html>
```

### 6.2.6 音视频通话



#### 6.2.6.0 

```js
1.client connect事件先emit 一下join传入data.id和data.room

2.server   join事件 判断房间是否存在，人数满了，自身是不是已经在房间。不合规emit一个error事件。合规的to 这个房间的client emit 一个createoffer

3.client createoffer事件 判断peerConnection.localDescription有没有。有就向3.1.server emit 一个offer事件。
3.2.没有就createOffer和setLocalDescription之后监听候选人onicecandidate的offer。如果peerConnection.localDescription存在就向server emit一个createAnswer

4.server createAnswer 事件 向房间client的所有人emit一个createAnswer事件

5.client createAnswer事件 功能 创造answer
通过 
connect.setRemoteDescription(offer)之后
answer =connect.createAnswer()之后connect.setLocalDescription(answer)
向sever端emit一个answer事件传入userid，roomid和connect.localDescription

6.server answer事件 (两人）
to roomid向client 端 emit 一个 answer  data

7.client answer 事件 设置远处sdp(两人)
connect.setRemoteDescription(answer)

注意io.to是向房间里的所有人发消息，socket(这个是监听方法的第一个参数).to是对出了自己的人发东西
```







#### 6.2.6.1 前端  

用socket.io实现，因为他的跨平台性和房间的概念

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.socket.io/4.4.1/socket.io.min.js"></script>
</head>
<style>
    .main-video {
        flex: 1;
        height: 300px;
    }
    video {
        width: 100%;
        height: 400px;
    }
    .video-title {
        margin: 10px;
        width: 40%;
        background-color: #000000b3;
        color: #fff;
        text-align: center;
        box-sizing: border-box;
        border: 1px solid #048ff2 ;
    }
    .video-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .video-item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
        width: 100%; 
        margin: 10px auto;
    }
    .button_link{
        margin-top: 40px;
        font-size: 1.5rem;
        background: #5bc1c9;
        height: 80px;
        color: white;
        /* width: 100px; */
        border-radius: 10px;
        border: none;
        width: 40%;
    }
</style>

<body>
    <div class="signaling-p2p-container">
        <div class="video-container">
            <div  class="video-item">  
                <video id="local" autoplay playsinline></video>
                <div class="video-title">我</div>
            </div>
            <div class="video-item">
                <video id="remote-video" class="remote-video" autoplay playsinline></video>
                <div class="video-title">远程视频</div>
            </div>
            
            <button class="button_link" onclick="initConnect()"> 点我开始连接</button>
        </div>
        <div class="operation">
            <!-- 房间号：
            <input v-model="roomId" style="width: 150px; margin-right: 20px" placeholder="要加入的房间号" clearable
                @keyup.enter="initConnect"></input>
            <button type="primary" @click="initConnect">加入</button>
            <button onclick="handleCamera()">点我</button>
            <button type="danger" @click="handleLeave">离开</button> -->
            <!-- <button :type="cameraOpen ? 'warning' : 'primary'" @click="handleMic">
            {{ cameraOpen ? '关闭' : '打开' }}麦克风
          </button> -->
            <!--   <button type="primary" @click="createAnswer(offerSdp)">
            创建answer
          </button>
          <button type="primary" @click="addAnswer">添加answer</button> -->
        </div>
    </div>
    <script>
        // 创造对象
        const peerConnection = new RTCPeerConnection({
            // iceServers: [
            //     {
            //         urls: 'stun:stun.voipbuster.com ',
            //     },
            // ],
        })
        const userId = Math.random().toString(36).substring(2)
        console.log(userId)

        // const roomId = ref('3333')
        let roomId = '332'
        let socket
        let localStream
        let remoteStream
        let offerSdp = ''

        // 第一步：初始化连接
        // 定义监听事件
        window.addEventListener('error',(e)=>{
            
        })
        function initConnect() {
            
            if (!roomId) {
                // ElMessage.error('请输入房间号')
                alert("请输入房间号")
                return
            }
            // socket = io('https://47.95.239.198:3000')
            try{socket = io('https://172.18.91.192:3000')}catch{
alert("出错")
            }
            
            // socket = io('https://signaling.fedtop.com')
            // 连接成功时触发
            socket.on('connect', () => {
                handleConnect()
            })
            // 断开连接时触发
            socket.on('disconnect', (reason) => {
                if (reason === 'io server disconnect') {
                    // 断线是由服务器发起的，重新连接。
                    socket.connect()
                }
                console.log("你已断开连接")
                // ElMessage.warning('您已断开连接')
            })
            // 服务端发送报错信息
            socket.on('error', (data) => {
                console.log("error", data)
                alert(e)
            })
            // 当有用户加入房间时触发
            socket.on('welcome', (data) => {
                console.log("welcome", data)
                
                console.log(`🦄${data.userId}加入房间`)
                // alert(`🦄${data.userId}加入房间`)
                // ElMessage.success(data.userId === userId ? '🦄成功加入房间' : )
            })
            // 当有用户离开房间时触发
            socket.on('leave', (data) => {
               
                console.log(`🦄${data.userId}离开房间`)
                // ElMessage.warning(data.userId === userId ? '🦄成功离开房间' : `🦄${data.userId}离开房间`)
            })
            // 当有用户发送消息时触发
            socket.on('message', (data) => { })
            // 创建offer,发送给远端
            socket.on('createOffer', (data) => {
                // 发送 offer
                if (offerSdp) {
                    socket.emit('createAnswer', {
                        userId,
                        roomId: roomId,
                        sdp: offerSdp,
                    })
                    return
                }
                createOffer()
            })
            // 收到offer,创建answer
            socket.on('createAnswer', (data) => {
                createAnswer(data.sdp)
            })
            // 收到answer,设置远端sdp
            socket.on('answer', (data) => {
                addAnswer(data.sdp)
            })
        }


        // initConnect()
        

        // 连接成功 发送xx加入了
        function handleConnect() {
            // 重要全局
            socket.emit('join', { userId, roomId: roomId })
        }
        const init = async () => {
            const localVideo = document.getElementById('local')
            const remoteVideo = document.getElementById('remote-video')
            localStream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false,
            })
            remoteStream = new MediaStream()
            localVideo.srcObject = localStream
            remoteVideo.srcObject = remoteStream
            localStream.getTracks().forEach((track) => {
                peerConnection.addTrack(track, localStream)
            })
            peerConnection.ontrack = (event) => {
                event.streams[0].getTracks().forEach((track) => {
                    remoteStream.addTrack(track)
                })
            }
        }
        // 创建 offer
        async function createOffer() {
            // 当一个新的offer ICE候选人被创建时触发事件
            peerConnection.onicecandidate = async (event) => {
                if (event.candidate) {
                    offerSdp = JSON.stringify(peerConnection.localDescription)
                    // 发送 offer
                    if (offerSdp) {
                        socket.emit('createAnswer', {
                            userId,
                            roomId: roomId,
                            sdp: offerSdp,
                        })
                    }
                }
            }
            const offer = await peerConnection.createOffer()
            await peerConnection.setLocalDescription(offer)
        }
        // 创建 answer
        async function createAnswer(val) {
            const offer = JSON.parse(val)
            peerConnection.onicecandidate = async (event) => {
                // 当一个新的 answer ICE candidate 被创建时
                if (event.candidate) {
                    socket.emit('answer', {
                        userId,
                        roomId: roomId,
                        sdp: JSON.stringify(peerConnection.localDescription),
                    })
                }
            }
            await peerConnection.setRemoteDescription(offer)
            const answer = await peerConnection.createAnswer()
            await peerConnection.setLocalDescription(answer)
        }
        // 添加 answer
        async function addAnswer(answerSdp) {
            const answer = JSON.parse(answerSdp)
            if (!peerConnection.currentRemoteDescription) {
                peerConnection.setRemoteDescription(answer)
            }
        }
        // 摄像头 
        const cameraOpen = true
        function handleCamera() {
            //   cameraOpen.value = !cameraOpen.value
            localStream.getVideoTracks().forEach((track) => {
                track.enabled = true
            })
        }
        // // 开关麦克风
        // const isAudioOpen = ref(true)
        // function handleMic() {
        //   localStream.getAudioTracks().forEach((track) => {
        //     track.stop()
        //   })
        //   isAudioOpen.value = !isAudioOpen.value
        // }
        // 离开房间
        function handleLeave() {
            // 关闭对等连接
            peerConnection.close()
            // 发送离开的消息
            socket.emit('leave', { userId, roomId: roomId })
            // 关闭socket连接
            socket.disconnect()
        }
        init()
    </script>
</body>

</html>
```




```js

client
onicecandidate 事件在内网连接的时候会返回一个ipv4和一个ipv6地址。如果是在外网连接会返回一个ipv4和ipv6

传数据的格式 {userId:xx;rommId:xx,sdp:xx}

关键实现：

1. 拉流推流
1.1 初始化 htmlElement元素并且localStream接入localVideo

const localVideo = document.getElementById('local')
localStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
})
localVideo.srcObject = localStream
//拉取/添加 本地流
localStream.getTracks().forEach((track) => {
    peerConnection.addTrack(track, localStream) //添加媒体流
})

1.2 remoteStream接入remoteVideo 推流
const remoteVideo = document.getElementById('remote-video')
remoteStream = new MediaStream()
remoteVideo.srcObject = remoteStream
//监听远端流
peerConnection.ontrack = (event) => {
    event.streams[0].getTracks().forEach((track) => {
        remoteStream.addTrack(track)
    })
}


2.建立连接
// 免费 STUN 服务器，内网是不需要stun服务器的，这时把urls删掉就可以了
const peerConnection = new RTCPeerConnection({
    iceServers:[{urls:"stun:stun.voipbuster.com "}] 
}) 
// 创建本地的 SDP 描述
const offer = await peerConnection.createOffer()
// 设置当前的SDP描述
await peerConnection.setLocalDescription(offer)
// 监听ICE，发送给socket
peerConnection.onicecandidate = async (event) => {
    if (event.candidate) {
        offerSdp = JSON.stringify(peerConnection.localDescription)
        // 发送 offer
        if (offerSdp) {
            socket.emit('offer', {
                userId,
                roomId: roomId,
                sdp: offerSdp,
            })
            /*
            	这里的后端是要
            	socket.on('offer', (data) => {
                  socket.to(data.roomId).emit('offer', data)
                })
            */
        }
    }
}


3.



2.采集媒体流 userDevices.getUserMedia   
--2.1 <video id="local" autoplay playsinline muted></video> 本地设置mute静音
--2.2 let localStream=await navigator.mediaDevices.getUserMedia({video:true.audio:true})
--2.3  采集完后，我们就可以通过addTrack来添加媒体流，s


3.
document.getElementById('local').srcObject = localStream
localStream.getTracks().forEach((track) => {
    pc.addTrack(track, localStream)
})
ontrack来 接受流




4.初始化房间号 本地流 用户名。初始化连接 
```







```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.socket.io/4.4.1/socket.io.min.js"></script>
</head>
<style>
    .main-video {
        flex: 1;
        height: 300px;
    }
    video {
        width: 100%;
        height: 400px;
    }
    .video-title {
        margin: 10px;
        width: 40%;
        background-color: #000000b3;
        color: #fff;
        text-align: center;
        box-sizing: border-box;
        border: 1px solid #048ff2 ;
    }
    .video-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .video-item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
        width: 100%; 
        margin: 10px auto;
    }
    .button_link{
        margin-top: 40px;
        font-size: 1.5rem;
        background: #5bc1c9;
        height: 80px;
        color: white;
        /* width: 100px; */
        border-radius: 10px;
        border: none;
        width: 40%;
    }
</style>

<body>
    <div class="signaling-p2p-container">
        <div class="video-container">
            <div  class="video-item">  
                <video id="local" autoplay playsinline></video>
                <div class="video-title">我</div>
            </div>
            <div class="video-item">
                <video id="remote-video" class="remote-video" autoplay playsinline></video>
                <div class="video-title">远程视频</div>
            </div>
            
            <button class="button_link" onclick="initConnect()"> 点我开始连接</button>
        </div>
        <div class="operation">
            <!-- 房间号：
            <input v-model="roomId" style="width: 150px; margin-right: 20px" placeholder="要加入的房间号" clearable
                @keyup.enter="initConnect"></input>
            <button type="primary" @click="initConnect">加入</button>
            <button onclick="handleCamera()">点我</button>
            <button type="danger" @click="handleLeave">离开</button> -->
            <!-- <button :type="cameraOpen ? 'warning' : 'primary'" @click="handleMic">
            {{ cameraOpen ? '关闭' : '打开' }}麦克风
          </button> -->
            <!--   <button type="primary" @click="createAnswer(offerSdp)">
            创建answer
          </button>
          <button type="primary" @click="addAnswer">添加answer</button> -->
        </div>
    </div>
    <script>
        // import VConsole from 'vconsole'
        // const vConsole = new VConsole()
        const peerConnection = new RTCPeerConnection({
            iceServers: [
                {
                    urls: 'stun:stun.voipbuster.com ',
                },
            ],
        })
        const userId = Math.random().toString(36).substring(2)
        console.log(userId)

        // const roomId = ref('3333')
        let roomId = '3323'
        let socket
        let localStream
        let remoteStream
        let offerSdp = ''

        // 第一步：初始化连接
        // 定义监听事件
        function initConnect() {
            if (!roomId) {
                alert("请输入房间号")
                return
            }
            // socket = io('https://47.95.239.198:3000')
            socket = io('https://signaling.fedtop.com')
            // socket = io('https://192.168.1.126:12345')
            // 连接成功时触发
            socket.on('connect', () => {
                handleConnect()
            })
            // 断开连接时触发
            socket.on('disconnect', (reason) => {
                if (reason === 'io server disconnect') {
                    // 断线是由服务器发起的，重新连接。
                    socket.connect()
                }
                console.log("你已断开连接")
                // ElMessage.warning('您已断开连接')
            })
            // 服务端发送报错信息
            socket.on('error', (data) => {
                console.log("error", data)
            })
            // 当有用户加入房间时触发
            socket.on('welcome', (data) => {
                console.log("welcome", data)
                
                console.log(`🦄${data.userId}加入房间`)
                // alert(`🦄${data.userId}加入房间`)
                // ElMessage.success(data.userId === userId ? '🦄成功加入房间' : )
            })
            // 当有用户离开房间时触发
            socket.on('leave', (data) => {
               
                console.log(`🦄${data.userId}离开房间`)
                // ElMessage.warning(data.userId === userId ? '🦄成功离开房间' : `🦄${data.userId}离开房间`)
            })
            // 当有用户发送消息时触发
            socket.on('message', (data) => { })
            // 创建offer,发送给远端
            socket.on('createOffer', (data) => {
                // 发送 offer
                if (offerSdp) {
                    socket.emit('offer', {
                        userId,
                        roomId: roomId,
                        sdp: offerSdp,
                    })
                    return
                }
                createOffer()
            })
            // 收到offer,创建answer
            socket.on('offer', (data) => {
                createAnswer(data.sdp)
            })
            // 收到answer,设置远端sdp
            socket.on('answer', (data) => {
                addAnswer(data.sdp)
            })
        }


        // initConnect()
        

        // 连接成功 发送xx加入了
        function handleConnect() {
            // 重要全局
            socket.emit('join', { userId, roomId: roomId })
        }
        const init = async () => {
            const localVideo = document.getElementById('local')
            const remoteVideo = document.getElementById('remote-video')
            localStream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false,
            })
            remoteStream = new MediaStream()
            localVideo.srcObject = localStream
            remoteVideo.srcObject = remoteStream
            localStream.getTracks().forEach((track) => {
                peerConnection.addTrack(track, localStream)
            })
            peerConnection.ontrack = (event) => {
                event.streams[0].getTracks().forEach((track) => {
                    remoteStream.addTrack(track)
                })
            }
        }
        // 创建 offer
        async function createOffer() {
            // 当一个新的offer ICE候选人被创建时触发事件
            peerConnection.onicecandidate = async (event) => {
                if (event.candidate) {
                    offerSdp = JSON.stringify(peerConnection.localDescription)
                    // 发送 offer
                    if (offerSdp) {
                        socket.emit('offer', {
                            userId,
                            roomId: roomId,
                            sdp: offerSdp,
                        })
                    }
                }
            }
            const offer = await peerConnection.createOffer()
            await peerConnection.setLocalDescription(offer)
        }
        // 创建 answer
        async function createAnswer(val) {
            const offer = JSON.parse(val)
            peerConnection.onicecandidate = async (event) => {
                // 当一个新的 answer ICE candidate 被创建时
                if (event.candidate) {
                    socket.emit('answer', {
                        userId,
                        roomId: roomId,
                        sdp: JSON.stringify(peerConnection.localDescription),
                    })
                }
            }
            await peerConnection.setRemoteDescription(offer)
            const answer = await peerConnection.createAnswer()
            await peerConnection.setLocalDescription(answer)
        }
        // 添加 answer
        async function addAnswer(answerSdp) {
            const answer = JSON.parse(answerSdp)
            if (!peerConnection.currentRemoteDescription) {
                peerConnection.setRemoteDescription(answer)
            }
        }
        // 打关摄像头  重要全局
        const cameraOpen = true
        function handleCamera() {
            //   cameraOpen.value = !cameraOpen.value
            localStream.getVideoTracks().forEach((track) => {
                track.enabled = true
            })
        }
        // // 开关麦克风
        // const isAudioOpen = ref(true)
        // function handleMic() {
        //   localStream.getAudioTracks().forEach((track) => {
        //     track.stop()
        //   })
        //   isAudioOpen.value = !isAudioOpen.value
        // }
        // 离开房间
        function handleLeave() {
            // 关闭对等连接
            peerConnection.close()
            // 发送离开的消息
            socket.emit('leave', { userId, roomId: roomId })
            // 关闭socket连接
            socket.disconnect()
        }
        init()
    </script>
</body>

</html>



```

#### 6.2.6.2 后端

```js
import { Server } from "socket.io";
import express from "express";
import https from "https";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import cors from "cors";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//https证书
const options = {
  key: fs.readFileSync(path.join(__dirname, "./localhost+3-key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "./localhost+3.pem")),
};

const app = express();
app.use(express.static(path.join(__dirname, "./")));

// 解决了所有请求头和方式设置的繁琐问题,要携带cookie时，这种方式不适合
app.use(cors());

// 随便写一个接口测试一下
app.get('/api/test', (req, res) => {
  res.type('application/json');
  res.end(JSON.stringify({ status: 0, message: '测试成功~' }, 'utf8'));
});


const httpsServer = https.createServer(options, app);

httpsServer.listen(3000, "0.0.0.0", () => {
  console.log("Https server up and running...");
});

// 创建信令服务器
const io = new Server(httpsServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: "*",
    credentials: true,
  },
  allowEIO3: true,
  transport: ['websocket']
});

// 房间信息
const ROOM_LIST = [];
// 每个房间最多容纳的人数
const MAX_USER_COUNT = 4;

io.on("connection", (socket) => {
  console.log("connection~");
  // 用户加入房间
  socket.on("join", (data) => {
    console.log("join~", data);
    handleUserJoin(socket, data);
  });
  // 用户离开房间
  socket.on("leave", (data) => {
    console.log("leave", data);
    // handleUserLeave(data);
    handleUserDisconnect(socket);
  });
  // 监听连接断开
  socket.on("disconnect", () => {
    console.log("disconnect~");
    handleUserDisconnect(socket);
  });
  //=============================
  socket.on("createAnswer", (data) => {
    console.log("createAnswer", data);
    socket.to(data.roomId).emit("createAnswer", data);
  });
  socket.on("answer", (data) => {
    console.log("answer", data);
    socket.to(data.roomId).emit("answer", data);
  });
  socket.on("candidate", (data) => {
    console.log("candidate", data);
  });
  socket.on("message", (data) => {
    console.log("offer", data);
  });
});

function handleUserJoin(socket, data) {
  console.log("🚀🚀🚀 / handleUserJoin", handleUserJoin);
  const filterRoom = ROOM_LIST.filter((item) => item.roomId === data.roomId)[0];
  let room = { roomId: data.roomId, userList: [] };

  // 判断房间是否存在
  if (filterRoom) {
    room = filterRoom;
  } else {
    ROOM_LIST.push(room);
  }

  // 每个房间人数不超过预设的人数
  if (room.userList.length > MAX_USER_COUNT) {
    socket.emit("error", "房间人数已满，请稍后再试");
    return;
  }

  // 当房间里的人数为0且管理员还没有设置，设置管理员
  if (room.userList.length === 0) {
    room.admin = data.userId;
    // // 通知自己创建 offer
    // socket.emit("createOffer", data);
  }

  // 判断用户是否已经在房间里
  const filterUser = room.userList.filter(
    (item) => item.userId === data.userId
  )[0];
  if (filterUser) {
    socket.emit("error", "用户已在房间里");
  } else {
    room.userList.push(data);
    console.log(data, "加入房间");
    // 通知房间内的其他用户
  }
  socket.userId = data.userId;
  socket.roomId = data.roomId;

  // 将用户加入房间
  socket.join(data.roomId);
  // 通知自己加入房间成功
  socket.emit("joined", data);
  // 通知房间内的其他用户
  socket.to(data.roomId).emit("welcome", data);
  // 通知房间内的其他用户创建 offer
  socket.to(data.roomId).emit("createOffer", data);
  console.log("🚀🚀🚀room.userList", room.userList);
}

// 用户断开连接或离开房间，清除房间内的用户信息，关闭房间，通知房间内的其他用户
function handleUserDisconnect(socket) {
  console.log("🚀🚀🚀 / handleUserDisconnect", socket.userId, socket.roomId);
  const roomId = socket.roomId;
  const userId = socket.userId;
  const room = ROOM_LIST.filter((item) => item.roomId === roomId)[0];
  if (room) {
    const userList = room.userList;
    const filterUser = userList.filter((item) => item.userId === userId)[0];
    if (filterUser) {
      // 通知房间内的其他用户
      socket.to(roomId).emit("leave", filterUser);
      console.log(userId, "离开房间");
      // 清除房间内的用户信息
      room.userList = userList.filter((item) => item.userId !== userId);
      // 关闭房间
      if (room.userList.length === 0) {
        ROOM_LIST.splice(ROOM_LIST.indexOf(room), 1);
      }
    }
  }
}

// io.listen(3001);
```



```js
import http from 'http'
import { Server } from 'socket.io'
import express from 'express'
// import cors from 'cors'

const port = 3000
const app = express()
const httpServer = http.createServer(app)
// 创建信令服务器
const io = new Server(httpServer, {
  cors: {
    origin: '*', // 允许跨域
    methods: ['GET', 'POST'], // 允许的请求方式
    allowedHeaders: '*', // 允许的请求头
    credentials: true, // 允许携带cookie
  },
  allowEIO3: true, // 是否启用与Socket.IO v2客户端的兼容性
  transport: ['websocket'], // 仅允许websocket,["polling", "websocket"]
})

// 解决了所有请求头和方式设置的繁琐问题,要携带cookie时，这种方式不适合
// app.use(cors());
// =======
//设置跨域访问
app.all('*', (req, res, next) => {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', '*')
  //允许的header类型
  res.header('Access-Control-Allow-Headers', 'content-type')
  //跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS')
  //让options尝试请求快速结束
  if (req.method.toLowerCase() == 'options') res.send(200)
  else next()
})

// 随便写一个接口测试一下
app.get('/', (req, res) => {
  res.type('application/json')
  res.end(JSON.stringify({ status: 0, message: '测试成功~🌸' }, 'utf8'))
})

// 在指定端口启动服务器
httpServer.listen(port, '0.0.0.0', () => {
  console.log('\n Http server up and running at => http://%s:%s', httpServer.address().address, httpServer.address().port)
})

// 房间信息
const ROOM_LIST = []
// 每个房间最多容纳的人数
const MAX_USER_COUNT = 4

// 用户连接
io.on('connection', (socket) => {
  console.log('connection~')
  // 用户加入房间
  socket.on('join', (data) => {
    console.log('join~', data)
    handleUserJoin(socket, data)
    /*
    
    */
  })
  // 用户离开房间
  socket.on('leave', (data) => {
    console.log('leave', data)
    handleUserDisconnect(socket)
  })
  // 监听连接断开
  socket.on('disconnect', () => {
    console.log('disconnect~')
    handleUserDisconnect(socket)
  })
  //=============================
  socket.on('offer', (data) => {
    // console.log('offer', data)
    socket.to(data.roomId).emit('offer', data)
  })
  socket.on('answer', (data) => {
    // console.log('answer', data)
    socket.to(data.roomId).emit('answer', data)
  })
  socket.on('candidate', (data) => {
    console.log('candidate', data)
  })
  socket.on('message', (data) => {
    // console.log('offer', data)
  })
})

// 用户连接触发
function handleUserConnection(socket, data) {}

// 用户加入房间
function handleUserJoin(socket, data) {
  const filterRoom = ROOM_LIST.filter((item) => item.roomId === data.roomId)[0]
  let room = { roomId: data.roomId, userList: [] }

  // 判断房间是否存在
  if (filterRoom) {
    room = filterRoom
  } else {
    ROOM_LIST.push(room)
  }

  // 每个房间人数不超过预设的人数
  if (room.userList.length >= MAX_USER_COUNT) {
    socket.emit('error', '房间人数已满，请稍后再试')
    return
  }

  // 当房间里的人数为0且管理员还没有设置，设置管理员
  if (room.userList.length === 0) {
    room.admin = data.userId
    // 通知自己创建 offer
    // socket.emit('createOffer', data)
  }

  // 判断用户是否已经在房间里
  const filterUser = room.userList.some((item) => item.userId === data.userId)
  if (filterUser) {
    socket.emit('error', '用户已在房间里')
    return
  }

  // 将用户信息保存到 socket 对象中
  socket.userId = data.userId
  socket.roomId = data.roomId

  // 将用户保存到 room 中
  room.userList.push(data)
  console.log(data.userId, '加入房间')
  // 将用户加入房间
  socket.join(data.roomId)
  // 通知房间内的所有人
  io.to(data.roomId).emit('welcome', data)
  // 通知房间内的其他用户创建 offer
  socket.to(data.roomId).emit('createOffer', data)

  console.log(
    '🚀🚀🚀userList',
    room.userList.map((item) => item.userId),
  )
}

// 用户断开连接或离开房间，清除房间内的用户信息，关闭房间，通知房间内的其他用户
function handleUserDisconnect(socket) {
  console.log('🚀🚀🚀 / handleUserDisconnect', socket.userId, socket.roomId)
  const roomId = socket.roomId
  const userId = socket.userId
  const room = ROOM_LIST.filter((item) => item.roomId === roomId)[0]
  if (room) {
    const userList = room.userList
    const filterUser = userList.filter((item) => item.userId === userId)[0]
    if (filterUser) {
      // 通知房间内的其他用户
      socket.to(roomId).emit('leave', filterUser)
      console.log(userId, '离开房间')
      // 清除房间内的用户信息
      room.userList = userList.filter((item) => item.userId !== userId)
      // 关闭房间
      if (room.userList.length === 0) {
        ROOM_LIST.splice(ROOM_LIST.indexOf(room), 1)
      }
    }
  }
}

//socket.io中文文档：  https://socket.io/zh-CN/docs/v4/server-api/
```

### 6.2.7  video转canvas 

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    #video1 {
        display: none;
    }

    #canvas1 {
        box-shadow: 3px 3px 10px black;
    }
</style>

<body>
    <canvas id="canvas1" width="500" height="500"></canvas>
    <video id="video1" controls=""
        src="https://blz-videos.nosdn.127.net/1/OverWatch/OVR_D.VA_SHOOTING_STAR_zhCN_YT_PC_3.mp4"
        type="video/mp4">浏览器不支持</video>

    <script>
        var canvas = document.getElementById("canvas1");
        var context = canvas.getContext("2d");

        var video = document.getElementById("video1");

        // 开始播放时候执行
        video.oncanplay = function () {
            video.play();
            switchToCanvas();
        }

        function switchToCanvas() {
            const filterList = [
                'blur(5px)', // 模糊
                'brightness(0.5)', // 亮度
                'contrast(200%)', // 对比度
                'grayscale(100%)', // 灰度
                'hue-rotate(90deg)', // 色相旋转
                'invert(100%)', // 反色
                'opacity(90%)', // 透明度
                'saturate(200%)', // 饱和度
                'saturate(20%)', // 饱和度
                'sepia(100%)', // 褐色
                'drop-shadow(4px 4px 8px blue)', // 阴影
            ]
            if (video.ended) {
                return;
            }
            context.filter = filterList[3]
            // 将video上的图片的每一帧以图片的形式绘制的canvas上
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            window.requestAnimationFrame(switchToCanvas);
        }
    </script>

    
</body>

</html>
```

