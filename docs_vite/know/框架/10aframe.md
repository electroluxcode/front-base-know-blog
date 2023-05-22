# 10.aframe









## 10.1 视频播放器



### 10.1.1 快速开始

```html
<script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>

<script src="https://unpkg.com/super-hands@^3.0.3/dist/super-hands.min.js"></script>
```



### 10.1.2 super hand

文档:https://github.com/c-frame/aframe-super-hands-component#readme

```html
  <a-entity super-hands sphere-collider="objects:#box"  d ="rightHand" hand-controls="hand:right;handModelStyle:lowPoly;color:rgb(60,60,60)"></a-entity>
```

基本示例如上，我们可以在cdn引入后 通过 super-hands 属性 启用他，

```js
controls="hand:right;handModelStyle:lowPoly;color:rgb(60,60,60)"
```

关于control属性，我们可以通过hand:right 指定使用右手进行事件的触发。然后handModelStyle 有 低模，高模之类的选择。具体的可以看他的文档

```js
sphere-collider="objects:#box" 
```

最后，我们可以可以定义碰撞刚体 。这样我们就能和 a-scene场景中 id 是 box的 物体有交互事件了。而关于交互事件怎么定义，我们等一下会提到





### 10.1.3 aframe(标签)



- a-scene : aframe 的 场景载体，放在html 结构的 最外层

- a-assets：aframe 的 资产 。 一些需要加载的模型 | 图片 | 视频 资源之类的都可以放进来

- a-plane：aframe 的 地板

- a-sky：aframe 的 天空

- a-box | a-circle | a-sphere |  ：aframe 的基本图形单位，分别对应着正方形盒子，没有宽度的圆，有宽度的圆

- a-entity：aframe 的 实体类，类似于unity的空节点。也类似前端里面的代理。一般我们可以在里面添加一个相机或者挂载模型和光源

- a-camera：aframe 的 相机。注意 vr 模式下面初始 位置 是 [0 ,0 ,0] 。desktop 模式下面 位置 是[ 0 ,1.6 ,0]。

- a-video：aframe 的 视频播放标签。通过src属性可以指定视频源，可以通过play 和 pause事件 控制 播放和暂停。a-videosphere 标签 是可以把a-video变成宽荧幕的标签

  

  

### 10.1.4 aframe(事件)

我们在引入了 

```html
<script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
```

之后，全局就被注册了一个 叫做 AFRAME 的变量

我们定义事件的方式一般是在AFRAME中注册 一个 component 。最基本的示例如下

html结构中

```html
 <a-scene cursor="rayOrigin :mouse">
      <a-box id="object" position="2 2 -5" color-toggle></a-box>
      <a-camera>
            <a-entity id="camera"  position="0 0 -1 "    raycaster="objects:#object" cursor-listener >
            </a-entity>
        </a-camera>
</a-scene>
```



js结构中

```js
AFRAME.registerComponent("color-toggle", {
    init: function () {     
        // 通过 this.el 能够拿到组件状态
        this.el.addEventListener("click", (e) => {
            alert("click")
            e.target.setAttribute("material", "color:rgb(0,0,0)")
        })
    },
    
})
```



我们看到如上例子，在 我们点击 a-box 的 时候 组件 应该就会被设置上颜色并且 弹出 "click"

特别说明的是registerComponent 里面定义了 init | remove | update | tick等生命周期 。 这里我只用了一个，其他的生命周期同样重要，更多的信息请看文档



### 10.1.5 视频播放器

有了如上的知识储备，我们很容易就可以做出一个视频播放器了

首先我们引入基本的元素

```html
<a-scene cursor="rayOrigin :mouse">
    	 <a-box id="box" color="rgb(255,255,10)" position="-3 1.5 -3" depth="0.5" width="0.5" height="0.5" color-toggle></a-box>
    <!-- 关于super-hand的的引入 我们可以 参考npm 上面的说明 -->
      <a-entity super-hands sphere-collider="objects:#box"  d ="rightHand" hand-controls="hand:right;handModelStyle:lowPoly;color:rgb(60,60,60)"></a-entity>
     <a-videosphere src="#video" rotation="0 90 0" width="8" height="5" position="0 2 -6"></a-videosphere>
 </a-scene>
```



如你所见，一个手部的控制器，和一个a-videosphere的标签，和一个a-box。就是页面最基本的元素

这里的a-box我们用来充当播放和暂停键。

那么我们来在来定义一下aframe里面的事件吧,我们只需要在我们点击a-box的时候能够切换视频的播放和暂停

```ts
AFRAME.registerComponent("color-toggle", {
    init: function () {
        let el = this.el

        this.el.addEventListener("click", (e) => {
            let control = document.querySelector("#video")
            if(control.paused){
                control.play()
            }else{
                control.pause()
            }
        })
    },

})
```



就跟我们写 html 一样，轻松简单就实现了



### 10.1.6 debug工具

最后推荐