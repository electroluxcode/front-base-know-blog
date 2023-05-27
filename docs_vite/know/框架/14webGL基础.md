# 1.webGL知识

[[toc]]

## 1.1 canvas基础(看我gitee' chart demo)



canvas元素本身并没有绘制能力的，它仅仅是图形的容器，而getContext()方法返回一个对象，该对象提供了用于在画布上绘图的方法和属性





```js
//HTML部分 创造画布
<canvas id="mycanvas"></canvas>

const canvas = document.getElementById("mycanvas");
const context = canvas.getContext("2d");


//设置宽高，颜色

canvas.width = 500;
canvas.height = 300;

context.fillStyle = "rgb(93,111,194)";
//绘制“已填色”的矩形
context.fillRect(0,0,canvas.width,canvas.height);


context.beginPath() 表示开始一段新的路径，下次填充只会修改此段路径内容;
context.moveTo(x,y) 路径的起始点；
context.lineTo(x,y) 连接到(x,y)；
context.strokeStyle = gradient // 设置未闭合的路径颜色;
context.fill() // 填充当前的图像（路径）;
context.stroke() // 绘制已定义的路径，一般路径为线

context.translate(x,y)  // 画布平移
context.rotate(angle)  //画布旋转
context.scale(width,height)
//width：缩放当前绘图的宽度（1=100%，0.5=50%，2=200%，以此类推）
//height：缩放当前绘图的高度（1=100%，0.5=50%，2=200%，以此类推）
可以利用该功能实现镜像功能，
//沿x轴镜像：context.scale(1,-1)
//沿y轴镜像：context.scale(-1,1)
//沿原点镜像：context.scale(-1,-1)

```



```

```



