# 2.2.3d监控多方法实操

[[toc]]

## 2.1 实操



讲一下我three.js的关于机器人监控的实现思路，相应的知识点列在下面，想实现可以去到threejs的官网： https://threejs.org/docs/index.html#manual/zh/introduction/Creating-a-scene 进行学习(qs：吐槽一下three的文档写的比unity的文档好多了，unity那是人可以读的？)



然后抽离了一份基于我们这个项目的demo，开源一份基于three.js，express，vue集合的示例代码。我管他叫大demo：  https://gitee.com/Electrolux/three-js-project



接着说一下我们的机器人监控的几个功能和对应的知识点：

1.第一人称，第三人称切换。第一人称可以操作第一人称进行移动，第三人称进行视图的自由移动  - 这里的知识点主要是PointerLockControls(指针选择器-第一人称)+OrbitControls(第三人称) 

示例代码可以参考： https://gitee.com/Electrolux/vue2packagethree/blob/projectv1.0/src/components/three/cube_curve_run_wsad.js。

双击屏幕就可以进行wsad和jump跳跃



2.agv追踪硬件数据进行入库出库操作 - 这里有两个核心方法

第一个是设置行进路线，第二个是进行运动

行进路线的核心方法是：

```js
//运动行驶的范围
var curve = new THREE.CatmullRomCurve3(
  [
    new THREE.Vector3(200, 20, -120),
    new THREE.Vector3(200, 20, -80),
    new THREE.Vector3(200, 20, -60),
    new THREE.Vector3(200, 20, 40),
    new THREE.Vector3(-100, 20, 40),
    new THREE.Vector3(-100, 20, -60),
    new THREE.Vector3(-100, 20, -130),
  ],
  true
);
const vertices = curve.getPoints(100);
var curvepath = new THREE.BufferGeometry().setFromPoints(vertices);
```

运动的核心方法是：

```js
function Move(curve, truck) {
  progress += move_rate;
  if (curve) {
    const point = curve.getPoint(progress);
    // 下一个要走的点的位置
    const point_next = curve.getPoint(progress + move_rate);
    if (point && point.x) {
      //   console.log(point)
      truck.position.set(point.x, point.y, point.z);
      // 向下一个要走的点方向看齐
      truck.lookAt(point_next.x, point_next.y, point_next.z);
      //重要：第一人称视角
      if (!truck) {
        camera.position.set(point.x, point.y + 45, point.z);
        camera.lookAt(point_next.x, point_next.y + 45, point_next.z);
      }
    }
  }
  // 重要：将标签跟随汽车移动显示
  if (dynamicSprite) {
    dynamicSprite.position.set(
      truck.position.x,
      truck.position.y,
      truck.position.z
    );
    dynamicSprite.translateY(100);
  }
}
```







3.停车时间标签跟随3d主体(精灵跟随)- 主要的知识点是 CSS2DRenderer+CSS2DObject+Sprite

小demo： https://gitee.com/Electrolux/vue2packagethree/blob/projectv1.0/src/components/three/cube_curve_run_csslabel.js   

4.管理员聊天功能（websocket）-  知识点就是发布者订阅者，相关代码可以看大demo

5.vr查看，基本信息查看。这里看大demo。知识点其实也是RGBELoader+OrbitControls

6.点击3d场景的时候，可以进行交互。知识点是Raycaster射线选择器（我在大demo中集成了一个clickpick方法）



好了，基本功能大概就那么多，因为篇幅原因写不了太多。代码和实现基本都在demo中： https://gitee.com/Electrolux/three-js-project







首先是第一个知识点：这里的知识点主要是用到普通透视摄像机（PerspectiveCamera），正常的场景



然后是第二个知识点





首先我们要知道web端的3d是基于webgl的知识点的。如果之前完全没有涉及这一方面的建议先把相关的教程或者是api文档大概浏览一遍。当然你如果不看webgl直接上手three也是没问题的，three把很多东西都给封装好了。好的，先来看看知识点

three.js有3个基本元素。

1.场景(scene)：这里面包括你的obj，fbx等3d模型和其对应的材质（material），PointLight（环境光），skybox（天空盒），controller(控制器-这玩意主要是控制你的视角)。这些构成了你three中的基本的主体。

2.相机(camera):这里面我们主要用 透视相机（PerspectiveCamera）。我们对它主要就是设置初始位置，和初始化视角

3.render(渲染器)：这里面没有什么知识点





## 2.2 常用公共方法

 

### 2.2.1 加载天空盒

```js
function initskyboxsun25deg() {
  const starUrls = [
    require("/public/static/images/skyboxsun25deg/px.jpg"), // right
    require("/public/static/images/skyboxsun25deg/nx.jpg"), // left
    require("/public/static/images/skyboxsun25deg/py.jpg"), // top
    require("/public/static/images/skyboxsun25deg/ny.jpg"), // bottom
    require("/public/static/images/skyboxsun25deg/pz.jpg"), // back
    require("/public/static/images/skyboxsun25deg/nz.jpg"), // front
  ];
  scene.background = new THREE.CubeTextureLoader().load(starUrls);
}
initskyboxsun25deg()
```



### 2.2.2 加载Gui

```js

//引入gui
var gui;
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min.js";


function initGui(status) {
  //1.设置基本属性
  gui = new GUI();
  gui.domElement.classList.add();
  gui.domElement.style.cssText = "position:absolute;top:0px;right:0px;";
  // 2.设置属性，以下面为例子。意思就是
  // mesh.position.x 这个数值在-3到3之间调节，间隔是0.01
  gui.add(mesh.position, 'x', -3, 3, 0.01).name('x的宽度')
  gui.add(mesh.position, 'y', -3, 3, 0.01).name('y的角度')
  gui.add(material, 'wireframe').name('设置线框')
  //gui.addColor
  gui.addColor(material, 'color').name('颜色')

  // gui.add(width, 'y').min(300).max(600).step(0.01).name('宽度')
}
initGui(1)

```



### 2.2.3   2d标签跟随移动（关键代码）



```js
import { CSS2DObject, CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer";


function addCssLabel() {
  if (css2dLabelArray.length > 0) {
    for (const label of css2dLabelArray) {
      label.parent.remove(label);
    }
    css2dLabelArray.splice(0);
  } else {
    const labelObj = scene.children.filter((item) =>
      // item.name.includes("cube")
      item.name.includes("cube")
    );
    labelObj.forEach((ele) => {
      const css2dLabel = document.createElement("div");
      css2dLabel.innerHTML = `<div style="text-align: center">名字</div><div class=".labelText">已停放23时</div>`;
      const label = new CSS2DObject(css2dLabel);
      // label.name = `${ele.name}csslabel`;
      label.name = `csslabel`;
      css2dLabel.classList.add("css2dLabel");
      css2dLabelArray.push(label);
      ele.add(label);

      // document.body.appendChild(css2dLabel);
      // i += 1;
    });
  }
}
addCssLabel();


//重要：2d标签的渲染，这里的宽高要一致
var labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(width, height);
labelRenderer.domElement.style.position = "absolute";
labelRenderer.domElement.style.top = "0px";
//重要：这一步让轨道控制器和css2d 控制器兼容
labelRenderer.domElement.style.pointerEvents = 'none';

document.body.appendChild(labelRenderer.domElement);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height); //设置渲染区域尺寸

function render() {
  Move(curve, mesh);
  labelRenderer.render(scene, camera);
  renderer.render(scene, camera); //执行渲染操作
  // mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
  requestAnimationFrame(render); //请求再次执行渲染函数render，渲染下一帧
}
render();


export {renderer}


调用的时候
import { renderer } from "./cube_curve_run_csslabel.js";
document.body.appendChild(renderer.domElement);
```









### 2.2.4 精灵（可以盯着摄像头）

可以避免一些观感上面的不适应：

```js
var param = {
  width: 200,
  height: 200,
  text: "10M/s",
  name: "dynamicLabel",
  x: 100,
  y: 90,
  z: 20,
};
var dynamicSprite;
function canvasMed(canvas, param, content) {
  const ctl = canvas
  
  ctl.fillStyle = "rgba(255, 255, 153, 1.0)";
  ctl.fillRect(0, 0, param.width, param.height);
  ctl.textAlign = "center";
  ctl.textBaseline = "middle";
  ctl.font = "bold 60px Arial";
  ctl.lineWidth = 60;
  ctl.fillStyle = "rgba(25, 25, 25, 1.0)";
  ctl.fillText(content, param.x, param.y);
}

canvas.height = param.height;
canvas.width = param.width;
canvasMed(panel, param, param.text);

const texture = new THREE.Texture(canvas);
texture.needsUpdate = true;
const spriteMaterial = new THREE.SpriteMaterial({
  map: texture,
});
dynamicSprite = new THREE.Sprite(spriteMaterial);
dynamicSprite.position.set(
  mesh.position.x + param.x,
  mesh.position.y + param.y,
  mesh.position.z + param.z
);
dynamicSprite.translateY(100);
dynamicSprite.name = param.name;
//重要：这里跳转这里调大小
dynamicSprite.scale.set(50, 50, 50);
//重要：精灵跟随模式
scene.add(dynamicSprite);

function Move(curve, truck) {
  progress += move_rate;

  if (curve) {
    const point = curve.getPoint(progress);
    // 下一个要走的点的位置
    const point_next = curve.getPoint(progress + move_rate);
    if (point && point.x) {
      //   console.log(point)
      truck.position.set(point.x, point.y, point.z);
      // 向下一个要走的点方向看齐
      truck.lookAt(point_next.x, point_next.y, point_next.z);
      //重要：第一人称视角
      if (!truck) {
        camera.position.set(point.x, point.y + 45, point.z);
        camera.lookAt(point_next.x, point_next.y + 45, point_next.z);
        // // controls.position0.set(point.x, point.y + 45, point.z);
        // // 将控制器看齐下一个点的位置(摆正车头的位置)
        // this.controls.target.set(point_next.x, point_next.y + 45, point_next.z);
      }
    }
  }
  // 重要：将标签跟随汽车移动显示
  if (dynamicSprite) {
    dynamicSprite.position.set(
      truck.position.x,
      truck.position.y,
      truck.position.z
    );
    dynamicSprite.translateY(100);
  }
}


```



### 2.2.5 添加光源

```js
/**
 * 光源设置
 */
//点光源 :把所有物体渲染成相同的颜色
// 白光
var pointLight = new THREE.PointLight(0xffffff); //创建一个白色的点光源
pointLight.position.set(0, 0, 150);
scene.add(pointLight);

// scene.add(point); //点光源添加到场景中
//环境光
var ambient = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambient);
```





### 2.2.6 交互示例

这里的知识点主要是Raycaster，也就是雷达选择器。特别要注意的是这里没有用到CSS2DRenderer这个渲染也可以达到类似的效果。但是CSS2DRenderer是在3d世界中标签。这里的是在vue的2d界面新建一个dom元素然后展现它

首先我们在父组件简单定义一个东西,由clickpick把数据传入到父组件去

```js

<el-card style="width: 300px" class="label">
        <div v-for="(info, index) in dataInfo" :key="index">
          <span>{{ info.key }}</span>
          <span style="display: inline-block; margin-left: 50px">{{ info.value }}</span>
          <el-divider />
        </div>
</el-card>

import { clickPick } from "/public/static/js/clickPick";
clickPick(this); 传进去就行了
```

clickpick.js中

```js

import * as THREE from "three";
// import { OutlineEffect } from 'three/examples/jsm/effects/OutlineEffect.js';
export const clickPick = (_this) => {
  const rayCaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  let x, y;
  const selectedObjects = [];
  const label = document.querySelector(".label");
  window.addEventListener("click", onMouseClick);
  window.addEventListener("dblclick", onMouseDbClick);
  // 点击卡片的显示位置
  // var that =this
  function showCard(element, x, y) {
    element.style.display = "block";
    element.style.position = "absolute";
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
    console.log(x, y)
  }

  function onMouseClick(e) {
    if (e.changedTouches) {
      x = e.changedTouches[0].pageX;
      y = e.changedTouches[0].pageY;
    } else {
      x = e.clientX;
      y = e.clientY;
    }
    const rect = _this.container.getBoundingClientRect(); // 拿到div相对屏幕坐标的偏移量
    /**
     * 当前场景并不是全屏渲染的 所以屏幕坐标转化为世界坐标的公式有所变化
     */
    console.log(rect.left, "左偏移量", rect.top, "上偏移量")
    console.log(this.container.clientWidth, "宽度", rect.top, "高度")
    // mouse.x = ((x - rect.left) / this.container.clientWidth) * 2 - 1;
    // mouse.y = -((y - rect.top) / this.container.clientHeight) * 2 + 1;
    mouse.x = ((x - rect.left) / 500) * 2 - 1;
    mouse.y = -((y - rect.top) / 500) * 2 + 1;
    // 通过摄像机和鼠标位置来更新射线
    rayCaster.setFromCamera(mouse, _this.camera);
    // 第二个参数表示是否检查他的后代
    const intersects = rayCaster.intersectObjects([_this.scene]);
    if (intersects.length > 0) {
      console.log("这是射线选择器选中的物体名称", intersects[0].object.name)
      const object_name = intersects[0].object.name;
      //重要：
      switch (object_name.substring(0, 3)) {
        case "mes":
           //重要：一次显示所有的标签，数据从父级去拿到
          // _this.trucklist.forEach((e) => {
          //   if (e.name === object_name) {
          //     _this.dataInfo = [
          //       { key: "车辆名称", value: e.name },
          //       { key: "行驶公里数", value: e.kilmeters },
          //     ];
          //   }
          // });
          for (let i = 0; i < intersects.length; i++) {
            intersects[i].object.material.color.set(0xff0000);
            _this.dataInfo = [
              { key: "车辆名称", value: intersects[i].object.name },
            ];
            showCard(label, mouse.x, mouse.y);
          }
          showCard(label, x, y);
          break;
        default:
          selectedObjects.pop();
          break;
      }
      if (object_name.includes("sprite")) {
        const parentDiv = document.createElement("div");
        parentDiv.className = "parentVideo";
        parentDiv.style.position = "absolute";
        parentDiv.style.display = "none";
        parentDiv.style.backgroundColor = "rgba(25, 25, 25, 0.5)";
        const titleDiv = document.createElement("div");
        titleDiv.style.cssText =
          "height: 24px;inline-height: 24px;float: left;color: #FFFFFF;font-size:20px;margin:10px 0 10px 20px";
        titleDiv.textContent = "监控录像";
        const closeDiv = document.createElement("div");
        closeDiv.className = "videoImg";
        titleDiv.addEventListener("click", () => {
          const videoDiv = document.querySelectorAll(".parentVideo");
          console.log(videoDiv)
          for (const e of videoDiv) {
            e.remove();
          }
        });
        parentDiv.appendChild(titleDiv);
        parentDiv.appendChild(closeDiv);
        const videoLabel = document.createElement("video");
        videoLabel.autoplay = true;
        videoLabel.muted = true;
        videoLabel.controls = true;
        videoLabel.loop = true;
        videoLabel.style.width = "80%";
        videoLabel.style.height = "350px";
        const videoSource = document.createElement("source");
        videoSource.src = "static/video/watch.mp4";
        videoSource.type = "video/mp4";
        videoLabel.appendChild(videoSource);
        parentDiv.appendChild(videoLabel);
        document.body.appendChild(parentDiv);
        showCard(parentDiv, x, y);
      } else {
        selectedObjects.pop();
        selectedObjects.push(intersects[0].object);
      }
      // _this.effectController.A = object_name;
    }
  }
  function onMouseDbClick(event) {
    if (event.changedTouches) {
      x = event.changedTouches[0].pageX;
      y = event.changedTouches[0].pageY;
    } else {
      x = event.clientX;
      y = event.clientY;
    }
    event.preventDefault();
    const vector = new THREE.Vector3(); //三维坐标对象
    vector.set(mouse.x, mouse.y, 0.5);
    vector.unproject(_this.camera);
    const rect = _this.container.getBoundingClientRect(); //拿到div相对屏幕坐标的偏移量
    //屏幕坐标转标准设备坐标(世界坐标系) x和y应在-1和1之间
    mouse.x = ((x - rect.left) / this.container.clientWidth) * 2 - 1;
    mouse.y = -((y - rect.top) / this.container.clientHeight) * 2 + 1;
    // 通过摄像机和鼠标位置更新射线 camera表示射线来源的摄像机
    rayCaster.setFromCamera(mouse, _this.camera);

    const intersects = rayCaster.intersectObjects([_this.scene], true);
    if (intersects[0]) {
      const soName = intersects[0].object.name;
      if (soName.substring(0, 3) === "xxxxxxxxxx") {
        _this.$router.push({
          path: "/xxxxxxxxxxxx",
          query: {
            name: soName,
          },
        });
      } else {
        // return;
      }
    }
  }
};

```





### 2.2.7 监听键盘事件

```js
window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);

//定义键盘事件
const onKeyDown = function (event) {
  // controls.unlock();
  console.log(event.code)
  switch (event.code) {

    case 'ArrowUp':
    case 'KeyW':
      moveForward = true;

      break;
    case 'ArrowLeft':
    case 'KeyA':
      moveLeft = true;
      break;
    case 'ArrowDown':
    case 'KeyS':
      moveBackward = true;
      break;
    case 'ArrowRight':
    case 'KeyD':
      moveRight = true;
      break;
    case 'Space':
      if (canJump === true) velocity.y += 350;
      canJump = false;
      break;
  }
};
const onKeyUp = function (event) {
  // controls.unlock();
  switch (event.code) {
    case 'ArrowUp':
    case 'KeyW':
      moveForward = false;
      break;
    case 'ArrowLeft':
    case 'KeyA':
      moveLeft = false;
      break;
    case 'ArrowDown':
    case 'KeyS':
      moveBackward = false;
      break;
    case 'ArrowRight':
    case 'KeyD':
      moveRight = false;
      break;
  }

};
```



### 2.2.8 控制物体运动

```js

//重要：创造运动轨道，运动路线
var curve = new THREE.CatmullRomCurve3(
  [
    new THREE.Vector3(200, 20, -120),
    new THREE.Vector3(200, 20, -80),
    new THREE.Vector3(200, 20, -60),
    new THREE.Vector3(200, 20, 40),
    new THREE.Vector3(-100, 20, 40),
    new THREE.Vector3(-100, 20, -60),
    new THREE.Vector3(-100, 20, -130),
  ],
  true
);
//分成100份
const vertices = curve.getPoints(100);
var curvepath = new THREE.BufferGeometry().setFromPoints(vertices);
const lineMaterial = new THREE.LineBasicMaterial({
  color: 0xffffff,
  transparent: 0,
  opacity: 1,
});
const curveMesh2 = new THREE.Line(curvepath, lineMaterial);
//场景中添加行驶路线，这里就显示一条白色的行驶路线
scene.add(curveMesh2);


function Move(curve, truck) {
  progress += move_rate;

  if (curve) {
    const point = curve.getPoint(progress);
    // 下一个要走的点的位置
    const point_next = curve.getPoint(progress + move_rate);
    if (point && point.x) {
      //   console.log(point)
      truck.position.set(point.x, point.y, point.z);
      // 向下一个要走的点方向看齐
      truck.lookAt(point_next.x, point_next.y, point_next.z);
      //重要：第一人称视角
      if (!truck) {
        camera.position.set(point.x, point.y + 45, point.z);
        camera.lookAt(point_next.x, point_next.y + 45, point_next.z);
        // // controls.position0.set(point.x, point.y + 45, point.z);
        // // 将控制器看齐下一个点的位置(摆正车头的位置)
        // this.controls.target.set(point_next.x, point_next.y + 45, point_next.z);
      }
    }
  }
  // 重要：将标签跟随汽车移动显示
  // if (dynamicSprite) {
  //   dynamicSprite.position.set(truck.position.x, truck.position.y, truck.position.z);
  //   dynamicSprite.translateY(100);
  // }
}


function render() {
  Move(curve, mesh);
  labelRenderer.render(scene, camera);
  renderer.render(scene, camera); //执行渲染操作
  // mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
  requestAnimationFrame(render); //请求再次执行渲染函数render，渲染下一帧
}
render();

```







### 2.2.9 加载模型



obj模型的加载

```js
// 初始化模型
function initModelMed(url) {
  return new Promise((resolve, reject) => {
    new MTLLoader().setPath("/static/obj/").load(`${url}.mtl`, (materials) => {
      materials.preload();
      new OBJLoader()
        .setMaterials(materials)
        .setPath("/static/obj/")
        .load(`${url}.obj`, (obj) => {
          if (obj) {
            // this.objList = obj;
            // this.loading = false;
            obj.children.forEach((child) => {
              child.geometry.computeBoundingBox();
              const centroid = new THREE.Vector3();
              centroid.addVectors(
                child.geometry.boundingBox.min,
                child.geometry.boundingBox.max
              );
              centroid.multiplyScalar(0.5);
              centroid.applyMatrix4(child.matrixWorld);
              child.geometry.center(centroid.x, centroid.y, centroid.z);
              child.position.set(centroid.x, centroid.y, centroid.z);
            });
            scene.add(obj);
            resolve(obj);
          } else {
            reject("error");
          }
        });
    });
  });
}
// initModelMed("city")
```



fbx模型的加载

```js
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
const loader = new FBXLoader();
      loader.load("/model/city.FBX", (object) => {
        // 模型缩放
        object.scale.set(0.001, 0.001, 0.001);
        scene.add(object);
        // clickObjects = object
        console.log(object);
});
```



### 2.2.10 第一人称第三人称的切换

知识点：这里要双击界面进行解锁。这段代码太长了，就放个链接

https://gitee.com/Electrolux/vue2packagethree/blob/projectv1.0/src/components/three/cube_curve_run_wsad.js

