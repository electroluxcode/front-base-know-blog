

# 2.anime.js
[[toc]]
## 2.1 anime的引入

plugin下面

```js
import anime from 'animejs';


//挂载全局变量到animeJS
const VueAnime = {
  install (Vue, options) {
    Vue.prototype.$animeJS = anime;
    options
  }
}

export default VueAnime
```





main.js

```js
import VueAnime from '@/plugins/vue-anime';
Vue.use(VueAnime);
//使用的话我们this.$animeJS
```





## 2.2 使用

html时间轴

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Canvas测试</title>

</head>
<script type="text/javascript" src="https://cdn.bootcss.com/animejs/2.2.0/anime.min.js"></script>
<!-- <script type="text/javascript" src="index.js"></script> -->
<body>
   
    <img src="paking.png" class="paking">
    <div class="all">
        <img src="agv.png" class="agv">
        <img src="car.png" class="car">
    </div>
    
    <script>
        var agv = document.querySelector('.agv')
        console.log(agv)

        var t1 = anime.timeline({
            easing: 'easeOutExpo',
            duration: 750
        });
        var t2=t1.add({
            targets: [".agv"],
            translateY: "-190", //30rem
            //   rotate: 180,
            //   borderRadius: 8,
            easing: 'linear', // steps(5) 是类似定格动画分成5段
            // 匀速:linear,
            // 不匀速:easeIn/easeOut/easeInOut/easeOutIn + Quad(由快至慢)/Cubic(由快至慢，效果更强)/Quart(由快至慢，效果更强)/Quint(由快至慢，效果更强)/Sine(由快至慢，比Quad弱)/Expo(突然减速，效果较强)/Circ(突然减速，效果较弱)/Back(冲出终点后返回),例如 easeInOutSine
            // 三次贝塞尔:cubicBezier(.5, .05, .1, .3)
            // 弹簧:spring(1, 80, 10, 0)
            // 弹跳:easeInElastic,easeOutElastic,easeInOutElastic,
            // 台阶式:steps(10) //[1,+∞] 平均分成n份执行,有卡顿感
            // 自定义:function(el, i, total){return  function(time) {return Math.pow(Math.sin(time * (i + 1)), total);}}
            // elasticity: 400,//默认400,弹性大小,数值越大,弹性越大
            // autoplay: true,//默认true,是否自动执行动画
            duration: 1000, // 动画完成所需时间
            // loop: true, // 是否循环
            delay: 100, //延时，经过多长时间才开始动画
            direction: "normal",////默认'normal',执行动画的方向 'normal'(正方向), 'reverse'(反方向), 'alternate'(往返)
            // rotate: 0,//可以省略单位,会自动补上单位
        })
        .add({
            //右移
            targets:'.agv',
            translateY: "-190",
            translateX: "100",
            easing: 'linear', 
            duration: 1500
        })
        .add({
            //进入车底
            targets:'.agv',
            translateY: "-280",
            translateX: "100",
            easing: 'linear', 
            duration: 2500
        })
        t2.add({
            targets:'.all',
            translateY: "100",
            
            easing: 'linear', 
            duration: 2500
        }).add({
            targets:'.all',
            translateX: "-100",
            translateY: "100",
            easing: 'linear', 
            duration: 2500
        })
        // .add({
        //     //agv取车
        //     targets:['.agv'],
        //     translateY: "-50",
        //     translateX: "240",
        //     easing: 'linear', 
        //     duration: 3500
        // })
        // .add({
        //     //汽车出库
        //     targets:['.car'],
        //     translateY: "300",
        //     translateX: "240",
        //     easing: 'linear', 
        //     duration: 3500
        // },-3000)
       
        // console.log(agvRight,"agvRight")
  
    </script>

    
</body>
<style>
    .paking {
        width: 880px;

    }

    .agv {
        position: relative;
        width: 30px;
        right: -190px;
       
    }

    .car {
        position: relative;
        width: 40px;
        bottom: 290px;
        left: 250px;
    }
</style>

</html>
```





vue

```vue
<template>
  <div>
    vuetity的基础界面
    <article>
      <div class="blue">blue</div>
      <div class="green">green</div>
    </article>

    <div class="battery-log">1</div>
  </div>
</template>

<script>
export default {
  name: "index_ceshi",
  data() {
    return {};
  },
  mounted() {
    //第一个知识点
    // console.log(this.$animeJS, "this.$animeJS");

    this.$animeJS({
      targets: [".blue", ".green"],
      translateX: "270", //30rem
      //   rotate: 180,
      //   borderRadius: 8,
      easing:'cubicBezier(.15, .15, .15, .15)', // steps(5) 是类似定格动画分成5段
       // 匀速:linear,
      // 不匀速:easeIn/easeOut/easeInOut/easeOutIn + Quad(由快至慢)/Cubic(由快至慢，效果更强)/Quart(由快至慢，效果更强)/Quint(由快至慢，效果更强)/Sine(由快至慢，比Quad弱)/Expo(突然减速，效果较强)/Circ(突然减速，效果较弱)/Back(冲出终点后返回),例如 easeInOutSine
      // 三次贝塞尔:cubicBezier(.5, .05, .1, .3)
      // 弹簧:spring(1, 80, 10, 0)
      // 弹跳:easeInElastic,easeOutElastic,easeInOutElastic,
      // 台阶式:steps(10) //[1,+∞] 平均分成n份执行,有卡顿感
      // 自定义:function(el, i, total){return  function(time) {return Math.pow(Math.sin(time * (i + 1)), total);}}
      elasticity:400,//默认400,弹性大小,数值越大,弹性越大
      autoplay:true,//默认true,是否自动执行动画
      duration: 2000, // 动画完成所需时间
      loop: true, // 是否循环
      delay:100, //延时，经过多长时间才开始动画
      direction:"normal",////默认'normal',执行动画的方向 'normal'(正方向), 'reverse'(反方向), 'alternate'(往返)
      rotate: 0,//可以省略单位,会自动补上单位
    });

    //重要：赋值后可以通过js来控制动画的开始
    // document.querySelector('.play').onclick = myAnimation.play;//开始动画
    // document.querySelector('.pause').onclick = myAnimation.pause;//暂停动画
    // play()
    // 播放动画
    // pause()
    // 暂停动画
    // restart()
    // 重新开始动画
    // reverse()
    // 反向播放动画
    // seek()
    // 在指定时间播放或暂停，要传入时间作为参数

    //javascript对象
    var battery = {
      charged: "0%",
      cycles: 120,
    };

    //第二个知识点,查找dom节点元素,
    //begin: function(anim) {}
    // 动画开始时 

    //  update: function(anim) {}
    // 数值更新时 
    //  run: function(anim) {}
    // 动画进行时（跟update差不多，但有些动画有缓动，

    // 虽然数值已经更新完了，但动画还是在进行中的） 


    var logEl = document.querySelector(".battery-log");
    this.$animeJS({
      targets: battery,
      charged: "100%",
      cycles: 130,
      round: 1,//默认false,给数字添加动画时,显示小数点后几位,10表示一位,1000表三位 number/boolea
      easing: "linear",
      update: function () {
        // logEl.innerHTML = JSON.stringify(battery);
        logEl.innerHTML = battery.charged
      },
    });
    
    //第三个知识点：这是类似于继承属性的
    //可以连接多个动画，完结一个动画之后接着进行下一个动画
    //创建时间轴动画,add一个就执行一个,根据偏移量确定开始执行时间
    
    this.$animeJS.timeline({
      duration: 1500,
      delay: 1000,
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: true
    })//父时间轴实例中设置的参数将由所有子项继承,可继承下面5个:targets,duration,delay,endDelay,round
    .add({ targets: '.green',  background: '#FFF',translateX: 50 }, 0) //add第一个参数是对象(同上),第二个参数是偏移量(String/Number)
    // .add({ targets: '.normal',  background: '#00F',translateX: 100 }, 1500)//绝对偏移量
    // .add({ targets: '.em',  background: '#0F0',translateX: 100 }, '-=600')//相对偏移量
   


    //一个比较复杂的示例
    // var progressLogEl = document.querySelector('.promise-demo .progress-log');
    // var promiseEl = document.querySelector('.promise-demo .el');
    // var finishedLogEl = document.querySelector('.promise-demo .finished-log');
    // var demoPromiseResetTimeout;

    // function logFinished() {
    //   anime.set(finishedLogEl, {value: 'Promise resolved'});
    //   anime.set(promiseEl, {backgroundColor: '#18FF92'});
    // }

    // var animation = anime.timeline({
    //   targets: promiseEl,
    //   delay: 400,
    //   duration: 500,
    //   endDelay: 400,
    //   easing: 'easeInOutSine',
    //   update: function(anim) {
    //     progressLogEl.value = 'progress : '+Math.round(anim.progress)+'%';
    //   }
    // }).add({
    //   translateX: 250
    // }).add({
    //   scale: 2
    // }).add({
    //   translateX: 0
    // });

    // animation.finished.then(logFinished);


  },
};
</script>

<style lang="scss" scoped></style>

```







