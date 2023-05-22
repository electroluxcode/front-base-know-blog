# 7.icon实操 | svg原理





[[toc]]

注意一下，我们一般的流程是把我们的图标添加到购物车中，然后添加到项目去。接着去色（这一步是为了我们能够使用不同颜色的图标）



## 7.0 基础原理

### 7.0.1重要的属性

```js
x,y,fill,stroke, stroke-width，stroke-opacity
transform：translate（-10，10）| scale（0.1，0.1） ，
transform-origin：center
transform-box：fill-box //使用对象边界框作为参考框，要是不设置这个属性可能会将最近的svg视口作为标准
```

### 7.0.2重要的标签

```
polyline.points | stroke(折线图)，polygon.points（乱七八糟的东西），text.x.y（文字），line（折线图）fill | stroke
```

### 7.0.3 基础示例

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
    .svgItem {
        background: aqua;
        width: 100px;
    }

    

    .animate {
        animation: move_right 1.1s cubic-bezier(0, 0,0,1) infinite;
        
    }

    @keyframes move_right {
        0% {
            opacity: 1;
            margin-left: -140px;
            position: absolute;

        }
        100% {
            opacity: 1;
            position: absolute;
            margin-left: -0px;
            z-index: 999;
        }
    }
</style>

<body>
    <!-- 第一步：定义：绘制时所占用的空间大小,0 0 表示x轴和y有的起始位置,即可视区View中哪个位置开始显示（可见） -->
    <!-- 后面100 100表示长和宽但是只是一个数量，不会有具体的长度.这里的100只是表示一个比例关系 -->
    <svg viewBox="0 0 100 100" class="svgItem animate">
        <!-- 第二步：绘制矩形,在y为1/10的时候进行绘制 -->
        <!-- <rect x="0" y="10" width="10" height="10"></rect> -->
        <!-- 第二步：绘制三角形 双数分别代表着x，y，单数则是不出现东西 -->
        <!-- <polygon points="0,10,10,10,0,0"></polygon> -->
        <!-- 第二步：绘制圆形 -->
        <circle cx="45" cy="45" r="5" class="animate"></circle>
        <!-- 第二步：绘制线段 -->
        <!-- <line stroke="black" x1="0" y1="0" x2="20" y2="0" stroke-width="10"></line> -->
        <!-- 第二步：绘制折线 -->
        <polyline points="0,0,10,10,15,20" fill="transparent" stroke="black" stroke-width="1"></polyline>
        <!-- 第二步：绘制文字 -->
        <!-- <text x="10" y="60" style="font-size: 24">hello </text> -->
        <!-- g标签可以加一个组 -->
    </svg>

</body>

</html>
```





## 7.1 常见的引入

### 7.1.1 unicode

直接添加多色图标会自动去色（因为是当作字体来用的）

 Unicode 书写不直观，语意不明确的问题。

```js
1.@font-face ，和.iconfont引入
2.在span标签中添加&#x33，class添加xxxx。
像<span class="iconfont">&#x33;</span> 引入
```





### 7.1.2 font class

本质上还是使用的字体，所以多色图标还是不支持的。

语意明确，书写更直观

```js
1.拷贝css代码 import .css
2.挑选图标并且获取类型，应用于页面<i class="iconfont icon-xxx"></i>
```



### 7.1.3 symbol

```js
原理：symbol元素用来定义一个图形模板对象，它可以用一个use元素实例化。

symbol元素对图形的作用是在同一文档中多次使用，只有use才能够实现
```



支持多色图标

支持像字体那样，通过`font-size`,`color`来调整样式。

注意一下，阿里iconfont的一些图表去色后（去色是为了）

```js
1.引入js代码 iconfont.js，别的都丢掉都可以
2.引入css代码
<style type="text/css">
    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>
3.类似于
    <svg class="icon svg-icon" aria-hidden="true">
        <use xlink:href="#icon-jijin"></use>
      </svg>
      <svg class="icon svg-icon" aria-hidden="true">
        <use xlink:href="#icon-cunkuan"></use>
      </svg>
```









