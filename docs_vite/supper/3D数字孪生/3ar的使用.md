# 3.ar的使用

[[toc]]

## 3.1 ar.js helloworld







 ### 3.1.1 训练我们的图像识别符



```
跟踪图像中的特征点并使用它们，它用于估计摄像机的位置。这些特征点(也称为“图像描述符”)通过NFT Marker Creator创建，这是一个用于创建NFT标记的工具


node.js版本的
https://github.com/Carnaux/NFT-Marker-Creator

step1：
npm install后
node app.js -i black.png // 这里的black是我们的目标文件


按y生成根目录的/output文件夹图像描述符

“图像描述符”文件共3个，分别是.fset、.fset3和.iset文件。 这三个不同类型的文件的主文件名是一样的。主文件名就是”图像描述符”的名字，它将在AR.js web应用中被引用。 例如：由trex.fset、trex.fset3和trex.iset组成的“图像描述符”，它的名字叫trex。







```



### 3.1.2 3d模型下载（gltf版本）

去到https://sketchfab.com/



### 3.1.3 引入aframe

```html
<!-- import aframe and then ar.js with image tracking / location based features -->
<script src="aframe-master.min.js"></script>
<script src="aframe-ar-nft.js"></script>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>

<!-- style for the loader -->
<style>
  .arjs-loader {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .arjs-loader div {
    text-align: center;
    font-size: 1.25em;
    color: white;
  }
</style>

<body style="margin : 0px; overflow: hidden;">
  <!-- minimal loader shown until image descriptors are loaded. Loading may take a while according to the device computational power -->
  <div class="arjs-loader">
    <div>正在加载AR模型，请稍候...</div>
  </div>

  <!-- a-frame scene -->
  <a-scene
    vr-mode-ui="enabled: false;"
    renderer="logarithmicDepthBuffer: true;"
    embedded
    arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
  >
    <!-- a-nft is the anchor that defines an Image Tracking entity -->
    <!-- on 'url' use the path to the Image Descriptors created before. -->
    <!-- 路径不带文件拓展名！【注意】以网站的域名为相对路径 -->
    <a-nft
      type="nft"
      url="./descriptors/test/test"
      smooth="true"
      smoothCount="1000"
      smoothTolerance=".01"
      smoothThreshold="5"
    >
        <!-- as a child of the a-nft entity, you can define the content to show. here's a GLTF model entity 
        positition 对应xyz 000   
        向前倒下的一个角度 -->
        <a-entity
            gltf-model="model/cat_girl/scene.gltf"
            scale="10000 1000 1000"
            position="150 50 10"
			rotation="-15 0 0"
        >
        </a-entity>
    </a-nft>
    <!-- static camera that moves according to the device movemenents -->
    <a-entity camera="fov: 190"></a-entity>
  </a-scene>
</body>
```



### 3.1.4  找到图像触发的操作



markerhandler

```html
<script src="https://cdn.jsdelivr.net/gh/aframevr/aframe@1c2407b26c61958baa93967b5412487cd94b290b/dist/aframe-master.min.js"></script>
<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>

<style>
  .arjs-loader {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .arjs-loader div {
    text-align: center;
    font-size: 1.25em;
    color: white;
  }
</style>
<script>
  AFRAME.registerComponent('markerhandler', {
    init: function () {
      this.el.sceneEl.addEventListener('markerFound', () => {
        // redirect to custom URL
        window.location = 'https://github.com/AR-js-org/AR.js';
      });
  });
  },
</script>

<body style="margin : 0px; overflow: hidden;">
  <!-- minimal loader shown until image descriptors are loaded -->
  <div class="arjs-loader">
    <div>Loading, please wait...</div>
  </div>
  <a-scene
    vr-mode-ui="enabled: false;"
    renderer="logarithmicDepthBuffer: true;"
    embedded
    arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
  >
    <!-- we use cors proxy to avoid cross-origin problems -->
    <!-- we use the trex image shown on the homepage of the docs -->
    <a-nft
      markerhandler
      type="nft"
      url="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/trex-image/trex"
    >
    </a-nft>
    <a-entity camera></a-entity>
  </a-scene>
</body>
```





