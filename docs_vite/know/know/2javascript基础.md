# 2.JavaScript基础

[[TOC]]



```ts
发现一个网站可以搭建简单的node服务，https://runkit.com/ 。去到里面注册账号后输入类似

export.endpoint =function(res,req){
	response.end("test")
}

exports.endpoint = function(request, response) {
    let result = [{
        id:1,
        name:"electrolux1"
    },{
        id:2,
        name:"electrolux2"
    }]
    response.end(JSON.stringify(result));
}
然后点击publish就可以生成node服务，接下来点击endpoint就可以访问网址。下面这个网址是我生成的结果https://hello-world-dpuj0ue0mv55.runkit.sh/ 
```





## 2.1基础知识



### 2.1.0 数据全解



#### 2.1.0.1 判断数据

调用 `Object.prototype.toString`

- map: '[object Map]'
- set:'[object Set]'
- object:'[object Object]'
- array:  '[object Array]'
- async:'[object AsyncFunction]'
- promise:判断.then 是不是一个funciton



#### 2.1.0.2 一些数据的特性



##### 2.1.0.2.1 for in / for of 

- map

  ```ts
  
  ```

  













### 2.1.0 canvas | video | image | blob

```js
--1.canvas 画板
querySelector 获取dom 元素 
然后getcontext
但后添加mousedown 和 mousemove 和mouseup事件
--2.canvas 撤销
todataurl 缓存住。然后就可以进行回退
--3.canvas变成base64
canvasElement.toDataURL();

--4.功能
--4.1 文字blob

let blobInit = new Blob(["helloworld"],{type:"text/plain"})
let blobHandle = blobInit.slice(0,5)
let res = new FileReader() //这里后面跟着res.onload(()=>{}) 也可以
res.readAsText(blobHandle)
// 输出
setTimeout(()=>{
    console.log(res.result)
},5)

--4.2 image 变成 canvas（ctx.drawImage） 和 base64数据(canvas.toDataURL)
// 上面的是图片跨域的错误，可以添加crossOrigin来进行避免
// 功能点2：图像输出.图片加载完，再draw 和 toDataURL
const canvas = document.createElement('canvas')
canvas.width = 200
canvas.height = 200
const ctx = canvas.getContext('2d')
let img = new Image()//创建新的图片对象
img.src = 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg';
img.setAttribute("crossOrigin",'Anonymous')
img.onload = function(){//
    ctx.drawImage(img, 0, 0)
    document.body.appendChild(canvas)
    console.log(canvas.toDataURL('image/png'))
};



--4.3 video 加 滤镜
直接document.querySelector("#video").style.filter = "contrast(200%)"

--4.4 video 截图
//step1:通过canvas 然后ctx.drawImage
//step2:然后通过todataurl就可以了

--4.5 下载
function downloadBlob(blob) {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${new Date().getTime()}.${blob.type.split('/')[1]}`
    a.click()
    // 释放 URL 地址
    URL.revokeObjectURL(url)
}



//-------------------------转化-------------------------

--5.file | blob 变成 dataurl 和 base64（这个阶段是最好用的，可以下载） a.href .download就可以了

5.1.file->base64（dataurl）：createObjectURL  
console.log("1：",URL.createObjectURL(file))

5.2.file->base64：FileReader readAsDataURL
const fr = new FileReader(file)
fr.readAsDataURL(file)
fr.onload = function () {
    console.log("2：",fr.result)
}

--6.img video变成 canvas
// img.onload(()=>{console.log(img)})  
// ctx.drawImage(video)


--7.canvas 变成 dataurl 和 base64
console.log("canvas->base64格式：",canvas.toDataURL('image/png'))
//2.canvas->base64格式：toBlob
canvas.toBlob((res)=>{
    console.log("canvas->blob格式：",res)
})


--8.下载
function downloadImg () {
    let aLink = document.createElement('a')
    // 文件名后缀需要和dataurl表示的相同，否则可能乱码
    aLink.download = 'fileName.png' 
    aLink.href = canvas.toDataURL('image/png')
    aLink.click()
    URL.revokeObjectURL(aLink)
}

```





### 2.1.1 blob | file | fileReader |  base64 | todataurl

```js
关系：
--1.blob:是一切的源头// 可以 new blob对象创造 text | blob 对象可以slice
--2.fileReader:可以 new 一个出来，然后可以用readAsText和readAsDataURL后面跟着blob或者文件对象 // 就可以reader.result拿到值  如果是图片就可以点进去
--3.file:是比blob多了一个lastmodify和name // 这是只能通过input是file对象拿到的
--4.base64:btoa('javascript') 和 atoa("xxxx")
--5.todataurl可以变成bases64的值


new FileReader().readAsDataURL(blob)  // new blob对象
createObjectURL(e.target.files[0]) 

--1.blob 对象
branary large object 二进制大数据，可以读取，不能修改。

像是分块上传分块我们可以用slice进行分块
let blobInit = new Blob(["helloworld"],{type:"text/plain"})
let blobHandle = blobInit.slice(0,5)
let res = new FileReader() //这里后面跟着res.onload(()=>{}) 也可以

res.readAsText(blobHandle)
res.result  //输出hello
console.log(new FileReader().readAsDataURL(blobHandle))

--2. file 对象
是一个特殊的blob.比blob多了一个lastmodify和name(上传文件的名字)。还有可能是fileList

<input type="file" id="type">
document.querySelector("#type").onChange((e)=>{
  console.log(e.target.files)
})

--3 fileReader 对象
readAsText/DataURL/ArrayBuffer/binaryString

let reader= new fileReader()
//四个方法
//3.1.reader.readAsText
let blob = new Blob("helloworld",{type:"text/plain"})
reader.readAsText(blob)
输出reader.result

//3.2.reader.readAsDataURL
<input type = “file”/>

//3.3 读成base64格式的字符串，后面读了之后我们要
let object = document.querySelector(“.test”).onChange((e)=>{
	let render = new fileReader()
	render.readAsDataURL(e.target.files[0])
	reader.onload((e)=>{
  		e.target.result
	})
})

使用方法。url中直接输入可以显示。但是可能会不全。最好是img标签中直接输入src，然后里面直接是这个src地址

//3.4 reader.readAsArrayBuffer
arrayBuffer也是一个黑盒对象，跟blob很像。然后有两种类型，一种是dataView，还有一个是typeBuffer(里面有9个内容)。前者有点像ts的record类型(里面可以混合一堆东西），后者是单一类型

用于对二进制文件进行操作。然后blob代表的是一个整体的文件，适合用来进行传输

let temp = ArrayBuffer(8). //8个字节
new Int8Array(temp) //然后这玩意是一个数组可以直接改

let test  = new ArrayBuffer(8)
new dataView(test)  //然后用set /get 来进行数组的添加和查询

//3.5 binaryString

--4.object Url
这是一种表示file object 和 blob object的url


<input type = “file”/>

//读成base64格式的字符串，后面读了之后我们要
let object = document.querySelector(“.test”).onChange((e)=>{
	let render = new fileReader()
	let temp = URL.createObjectURL(e.target.files[0]) 
	//输出的格式类似于 localhost：8080/9f9f9f9f
	
})


--5.base64
js中有两个函数用来加密和解密base64的数据。

btoa('javascript'). //加密：输出 amF2Yxxxx
atoa('amF2Yxxxx') //解密：输出javascript。
一般来说用来 将canvas 变成 base64的照片（canvas元素.toDataUrl() ） 或者是 把图片变成base64图片（readAsDataURL） 

```





### 2.1.2.var,let,const | 函数和变量变量提升 | vo ao 上下文

   var函数作用域，let块作用域，const也是块作用域，但定义后不可重新赋地址

```js

注意const比较特殊
var 变量提升。只有声明没有赋值 。 并且声明优先级，函数大于变量（即使变量处于后面的位置）。变量声明会被函数声明覆盖。越后的同名函数优先级越大

暂时性死区:let const没有声明变量却引入。实例化到被创造的过程。因为只要有let const就会优先实例化。根本原因:变量的生命先于使用。（块级作用域）

function test(arg) {
  console.log(arg);
  var arg = 10;
  function arg() {
    console.log('函数')
  }
  console.log(arg)
}
test('LinDaiDai');  // 输出 函数和 10


---------------------------------
上下文是一个执行环境。
1.我们的window就是一个答的执行上下文呢，
2.我们的函数就是一个小的执行上下文
3.eval函数也是一个上下文


vo：创建执行上下文的一个变量对象，不能访问
ao：进入到一个执行上下文时，此执行上下文的变量和函数都可以访问


全局上下文的执行
1. 全局上下文压入栈顶
2. 执行某一函数就为其创建一个EC，并压入栈顶
3. 栈顶的函数执行完之后它的EC就会从ECS中弹出，并且变量对象(VO  varity)随之销毁
4. 所有函数执行完之后ECS中只剩下全局上下文，在应用关闭时销毁

function foo(i) {  
    if(i  == 3) {  
        return;  //这里就弹出了
    }  
    foo(i+1);  
    console.log(i);  
}  
foo(0);  // 输出3 2 1



一个上下文（ec）的执行

function fn (a) {
  var b = 2;
  function c () {};
  b = 20
}
fn(1)


1.创建变量、参数、函数arguments对象; vo是更加之前一点的对象（初始化）
这里的ao是
AO = {
	arguments: {
		0: 1,
		length: 1
	},
	a: 1,
	b: undefined,
	c: reference to function c() {},
}

2.建立作用域链;
3.确定this
4.变量赋值，执行函数
执行后
AO = {
  arguments: {
  0: 1,
  length: 1
  },
  a: 1,
  b: 20,
  c: reference to function c() {},
}







var会变成window的值。
"use strict" 
var a=2

---------------------------
var num = 8;

var display = function () {
  console.log(num);
  var number = 20;
};

display();  //输出undefined

-----------------------------

const只保证变量名指向的地址不变，并不保证该地址的数据不变，所以将一个复合类型的变量声明为常量必须非常小心。
例如以下：
const arr = [];
// 报错，[1,2,3]与[]不是同一个地址
arr = [1,2,3];
const arr = [];
// 不报错，变量名arr指向的地址不变，只是数据改变
arr[0] = 1;

// 块级作用域的东西
var a = 20 ;
{
    console.log(a)  // 输出 function
    // 重要 块级作用域中 function 之后的就只能在这个块级作用域了，出不了外面
    a = 30
    function a(){
        console.log("aaaa")
    }
    console.log(a)  // 输出 30
    a = 40
    console.log(a)  // 输出 40
}
console.log(a)  // 输出30 。如果是 let a = 20 那么这里
//safari 是 40
//google 和 firefox 是 30


//---------------------------------------------
var a = 20 ;
{
    a = 30
    console.log(a)  // 输出30
    a = 40
    console.log(a)  // 输出40
}
console.log(a)  // 输出40



```



### 2.1.3.null | undefined  |  true | false | nan | 判空  | 易错

```js
布尔值都是false，都是基础类型，

undefined代表未定义的值，null表示被认为设置为空的值，例如释放一个对象的内存用null，或者获取一个不存在的dom对象。

{} 不是空对象

if 里面我以为只有false的才会跳，结果现在发现了undefined，null，false都会跳

1.nan是number的特殊类型。不等于任何值，即使nan==nan返回值也是一个false，判断是否nan要调用isnan（）原理是会尝试转化number类型，能转化的返回true，否则返回false

2.false的情况
let a ; if(a){console.log("true")}else{console.log("no")}  //输出false
let a = 0  ; if(a){console.log("true")}else{console.log("no")}  //输出false
let a = NaN  ; if(a){console.log("true")}else{console.log("no")}  //输出false
let a = null  ; if(a){console.log("true")}else{console.log("no")}  //输出false
let a = ''  ; if(a){console.log("true")}else{console.log("no")}  //输出false

3.true的情况

let a = []  ; if(a){console.log("true")}else{console.log("no")}  //输出true
let a = {}  ; if(a){console.log("true")}else{console.log("no")}  //输出true
let a = -30  ; if(a){console.log("true")}else{console.log("no")}  //输出true
let a = '0'  ; if(a){console.log("true")}else{console.log("no")}  //输出true

4.object判空
JSON.stringify({})=='{}' == false
JSON.stringify([])=='[]' == false

let a={};a.length // a.length 这个玩意输出是undefine 
let a=[];a.length  // a.length 这个的输出是0


```



### 2.1.4 setInterval | setTimeout | 误差 

```js
--1.出现原因：
setInterval、setTimeout实现都会出现误差，这源于js的单线程。
他们的回调函数并不是到时后立即执行，而是等系统计算资源空闲下来后才会执行。
setInterval、setTimeout都属于宏任务。

--2.解决方法：
在定时器开始前和运行时动态获取当前时间，用settimeout来替代setinterval


var start = new Date().getTime(), count = 0,interval = 1000;
var offset = 0;//误差时间
var nextTime = interval - offset;//原本间隔时间 - 误差时间
var timer = setTimeout(doFunc,nextTime);
function doFunc(){
    count++
    console.log(new Date().getTime() - (start + count * interval) + 'ms');
     offset = new Date().getTime() - (start + count * interval);
    nextTime = interval - offset;
    if (nextTime < 0) { nextTime = 0; }
  if(count < 10){
	    timer = setTimeout(doFunc,nextTime);
    }
}

```



### 2.1.5 响应头 | 请求头 | cookies |  加密  |  token  | cookies | session | oauth 

```js
1.1 cors
--1.1.1 请求头 
Content-Type（需要注意额外的限制）  : url-form之类的
method ：get post 
--1.1.2 响应头
Access-Control-Allow-Origin | Method | Headers | Credentials: *

1.2 websocket  `
    这个只能是http1.1可以用，
   
`
--1.2.1  请求头 
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: server-random-string

--1.2.2   响应头
代码101标识http协议即将更换

1.3 网络安全

--1.3.2  响应头
Content-Security-Policy：内容安全
HSTS：强制https
X-Frame-Options：禁止嵌入iframe
X-XSS-Protection ： 禁止xss攻击

--2  cookie | token（Json Web Token） |

document.cookie = "yummy_cookie=choco"; 可以一直这样赋值

cookie 是 服务端用来保持状态的。存储在客户端，可随意篡改，不安全（4kb）。二级域名共享cookie但是可以设置`domain`来进行sso（单点登录->一处登录，可以访问其他信任的系统）。之前chatGPT也常常用，不过现在不用了。会增加网络开销

jwt一般来说时签名算法(门禁卡).过期时间（7天）.我(用户信息)    Token并不能防止CSRF攻击，相反，更容易了。cookie好歹还能设个Httponly，token真是js随便用

--3.OAuth2


--4.非对称加密
非对称加密就是加密和解密使用的不是相同的密钥：只有同一个公钥-私钥对才能正常加解密。
```



### 2.1.6 WebSocket  |  EventSource(sse) | HTTP长连接

```js
--1.HTTP长连接和WebSocket长连接的区别?
    HTTP长连接本质上还是客户端主动发起-服务端应答的模式。依然是一问一答的模式，只是省略了每次的关闭和打开操作
	WebSocket  是类似 TCP 长连接的通讯模式，一旦 WebSocket 连接建立后，后续数据都以帧序列的形式传输。

--2.建立连接的过程



keep alive怎么实现
消除真实dom，然后缓存虚拟dom
` 
	http1.1 最大的好处就是多了pipeline | 管线。最大的坏处就是 每次都要重新建立连接。传输都是明文和 keep alive 
	需要Upgrade: websocket ; Connection: Upgrade Sec-WebSocket-Key

    http2对应的是websockets - rfc 8441
    websockets 不允许 101 和 upgrade  
    而要用新字段 protocol 还有用新字段 method：connect 和 sec-websocket-protocol 和
    http2 推荐用 spdy.spdy也是基于http1.1的东西
	
`
--1. 定义
websocket无限制的全双工通信，基于tcp连接，
EventSource是单向通信，基于http连接，需要跨域。使用起来就直接createreadstream('xx').pipe(res)
--2. 为什么WebSocket连接可以实现全双工通信而HTTP连接不行呢？

实际上HTTP协议是建立在`TCP`协议之上的，TCP协议本身就实现了全双工通信，但是HTTP协议的请求－应答机制限制了全双工通信。WebSocket连接建立以后，其实只是简单规定了一下：接下来，咱们通信就不使用HTTP协议了，直接互相发数据吧。

--3. ws 和 wss
ws 就是 http ，然后 wss 就是 https

--4.socketio3已经兼容了http1.1和http2
```













### 2.1.7.this | function里面  | "use strict" |











```js

1.默认绑定-(非严格模式下this指向window, 严格模式下this会绑定到undefined。这里的只是针对于function里面的东西)
1.1 函数里面的var 由于作用域的影响，因此遍历不会影响到全局
1.2 在外面的this.xx 永远绑定在 window对象上面
1.3 如果函数里面还有函数用this也都是默认绑定

2.隐式绑定-(当函数引用有上下文对象时, 如 obj.foo()的调用方式, foo内的this指向obj)
2.1谁最后调用函数，this指向就是谁
2.2 隐式丢失的问题
3.显示绑定-(通过call()或者apply()方法直接指定this的绑定对象, 如foo.call(obj))。`call，bind，apply 虽然可以改变指向，但是在settimeout中改变不了指向`
4.new绑定
5.箭头函数绑定(this的指向由外层作用域决定的)

this 永远指向最后调用它的那个对象
其中use strict 影响的是 call(null) 和 函数里面的this
----------------------------------

// 1.函数里面的this和直接的this 


普通状态下的this，定时器的


通过bind，call，apply来改变this

```

   全局作用域中指向window，箭头函数没有自己的this（所以不能用作构造函数）
   优先级：new绑定>显式绑定>隐式绑定。



this有四种

函数时默认绑定，函数里的函数也是默认绑定。对象里的函数是隐式绑定。对象里面return 一个 函数 是隐式绑定指向this

#### 第一种 默认绑定

```
运行在非严格模式的独立空间里面,this指向全局对象。
运行在严格模式下，this会绑定到undefined
```

#### 第二种：隐式绑定（租房子）

```js
就是函数引用 有 `上下文对象` 时。调用函数，函数内的 this 就指向谁（无论是普通对象、还是全局对象），this 永远指向最后调用它的那个对象（不考虑箭头函数）
var obj = {
  a: 1,
  foo: function () {
    console.log(this.a)
  }
}
var a = 2
obj.foo() //输出1 隐式绑定。如果是箭头函数那么指向上一个作用域


主要留意 隐式丢失问题
1.使用另一个变量来给函数赋值的时候会隐式丢失。则使用上一层 this 替代丢失的 this（可能是 window，可能是 obj）


function foo () {
  console.log(this.a)
};
var obj = { a: 1, foo };
var a = 2;
var foo2 = obj.foo;
var obj2 = { a: 3, foo2: obj.foo }
 
obj.foo(); // 1 隐式调用
foo2(); // 2
obj2.foo2(); // 3


2.把 一个函数 当成参数 传递到 另一个函数 中时，会发生 隐式丢失 的问题

在非严格模式下，隐式丢失后，会把函数的 this 绑定到 window 上；
在严格模式下，会把函数的 this 绑定到 undefined 上；

一是function传参，二是settimeout，把函数当作参数

```



#### 第三种:显式绑定（买房子）

```js
通过call(..) 或者 apply(..)方法。第一个参数是一个对象，在调用函数时将这个对象绑定到this。因为直接指定this的绑定对象，称之为显示绑定。除了 call apply bind  。。。。forEach、map、filter`函数的第二个参数也是能显式绑定`this的

function foo () {
  console.log(this.a)
}
var obj = { a: 1 }
var a = 2

foo().call(obj)
//2
//Uncaught TypeError: Cannot read property 'call' of undefined
```

#### 第四种：new绑定

```js
第一步:创造空对象    第二步：赋值__proto__   第三步：赋值this
注意function变成this的这种写法
var name = 'window'
function Person (name) {
  this.name = name
  this.foo = function () {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo.call(person2)()
person1.foo().call(person2)

就会变成

var person1 = {
	name: 'person1',
	foo: function () {
		console.log(this.name)
		return function () {
			console.log(this.name)
		}
	}
}

输出
'person2'
'window'
'person1'
'person2'
```



#### 注意匿名函数，箭头函数

```js
function foo(){
	return function (){
        console.log(23)
    }
}
只能这样用
并且foo()() //才能输出

function foo () {
  console.log(this.a)
  return function () {
    console.log(this.a)
  }
}
var obj = { a: 1 }
var a = 2

foo() // 2
foo.call(obj) // 1
foo().call(obj) // 2 1  最后一个是call改变了匿名函数的this
foo.call(obj)() // 1 2  最后一个匿名函数是window调用的






var obj = {
  name: 'obj',
  foo2: function () {
    console.log(this.name) // 输出obj
    return () => {
      console.log(this.name) // 输出 obj
    }
  }
}
var name = 'window'

obj.foo2()()

var obj2 = {
  name: 'obj2',
  foo: function () {
    console.log(this.name) //obj2
    return () => {
      console.log(this.name) //obj2
    }
  }
}
obj2.foo()()


var obj3 = {
  name: 'obj3',
  foo: () => {
    console.log(this.name) //window.name 未定义
    return function () {
      console.log(this.name) //window
    }
  }
}
obj3.foo()()
var obj4 = {
  name: 'obj4',
  foo: () => {
    console.log(this.name) //没定义
    return () => {
      console.log(this.name) //没定义
    }
  }
}







```







### 2.1.8.深浅拷贝

   解决深拷贝循环引用的方法可以是 new 一个map

```javascript

// 该方法简单但有bug，因为JSON.stringify会忽略值为undefined、symbol的属性
function deepClone2(obj) {
  return JSON.parse(JSON.stringify(obj))
}


```



### 2.1.9 无状态组件 | 受控组件 |  合成事件 | 父子组件渲染

```js
0.没有state是无状态组件，有state是有状态组件

1.不受控组件 | 受控组件
一个input输入框，有一个数据。input我们什么都不做，它内部有一套维护他自己状态的方法所以叫做不受控组件
一个input输入框，有一个数据。我们定义一个update方法来同步UI，我们定义一个proxy方法。使得外部变量和这个变量能够重合，这叫做受控组件

2.合成事件是react的方法，是对各个浏览器提供统一的api进行差异抹平的东西
3.父子组件渲染

--3.1 vue是先 父 create    最后父destory。但是由于子组件的mount 要比父的mount要快，因此会显得子组件渲染要比父组件快。react。

--3.2 react 基础跟vue是一样的 

--3.2.1 class组件中的是无论父组件 输入啥 子组件 都会让 子组件 更新 因此可以在 子组件的shouldComponentUpdate 中 取消渲染（return false就可以了）

--3.2.2 hook组件

case1：hook 是 函数中的 和 render（就是 return <div>{xxx}</div>）/ 里面的会先执行。  (这一部分 父子孙 组件 按照顺序执行)

case2：然后是 useEffect （这一部分是 孙组件 子组件 父组件的顺序）

case3：复杂一点的 例如 top父 left子  right 子 left孙。这样就是  
top父  left子   left孙 right 子 递归类似深度搜索一样的遍历他

```





### 2.1.10.原型 | 原型链

- 只有函数才有prototype原型属性
- prototype 是 没有开化，__proto 是 new 过之后才能用

```js
class A.prototype == new A().__proto__
原型是prototype`显式原型`（只能没有实例的时候用）、__proto__`隐式原型`与constructor（只能class）。原型链是把各个原型__proto__连接起来，一直到null

我们需要牢记两点：

--区别主要是 
new之前：prototype的属性会得到继承。__proto__的属性不会得到继承
new之后：prototype的属性设置不了（会报错）。__proto__的属性随便设置，设置的也是改变目前的prototype

// a.__proto__.__proto__.__proto__ 可能会报错 在报错的最后一次返回的是null
原型链的尽头是object的隐式原型null
//a.constructor.constructor.constructor 永远不报错。最后返回的是native code


```

   每个对象都有一个原型对象，当访问一个对象的属性时，会去该对象的原型上搜索。在我们new 对象的时候，第一步是创造内存空间，接下来是原型挂载。最后是

```javascript
function Person() {
    this.name = 'tom'
}
Person.prototype.name = 'Kevin';
var person = new Person();
person.name = 'Daisy';
console.log(person.name) // Daisy
delete person.name;
console.log(person.name) // Kevin

// 同样的基于原型链的属性查找还有constructor,funciotn原型对象Person是有constructor属性的，但是实例对象person没有，但是可以打印出person.constructor


```









### 2.1.11.继承

   一般基于原型链或者构造函数继承，用的最多的是综合前两者的组合继承，最优的是寄生组合继承

```js
--1.原型链继承（但无法多继承-prototype已经给别人了，也不能向构造函数传参）-将子类的原型对象指向父类的实例-Student.prototype = new People()
function People(name) {
    this.name = name || 'Annie'
   
}
function Student() {
}
Student.prototype = new People()
console.log(new Student().name)
--2.构造函数继承（父类原型链（xx.prototype.xx）上的参数和方法不能访问，但可以多继承，无法复用）
function Parent (name) {
  this.name = name
}
function Child () {
  this.sex = 'boy'
  Parent.call(this, 'child') //绑上去了
}
var child1 = new Child()
console.log(child1)

--3.组合继承（call/apply+prototype）-父类构造函数会被调用两次,会有覆盖。增加了不必要的内存
原型链继承+构造继承
// 原型链继承
Child.prototype = new Parent()
// 构造继承
function Child () {
  Parent.call(this, ...arguments)
}

--4.寄生组合继承
//会更加干净
Child.prototype = Object.create(Parent.prototype)
function Child () {
  Parent.call(this, ...arguments)
}
--5.寄生继承
//在原型式继承的基础上再封装一层，来增强对象，之后将这个对象返回。
function createAnother (original) {
    var clone = Object.create(original);; // 通过调用 Object.create() 函数创建一个新对象
    clone.fn = function () {}; // 以某种方式来增强对象
    return clone; // 返回这个对象
}




--3.ES6 class extends 继承

```


2.instanceof
   用法：object instanceof constructor

```js
function f(obj) {console.log(Object.prototype.toString.call(obj))}
// [object xxxxx]是string类型
f(1) 							// [object Number]
f('1') 						// [object String]
f(false) 					// [object Boolean]
f(undefined) 			// [object Undefined]
f(null) 					// [object Null]
f(Symbol()) 			// [object Symbol]
f({name: 'jack'}) // [object Object]
f([1,2,3]) 				// [object Array]
f(new Date()) 		// [object Date]
f(/a/) 						// [object RegExp]
```



```javascript

--1.概念
Map对一个对象是强引用
weakmap  是一个弱引用

--2.for in - for of
for in （可以枚举 enumerable）：string，array，object  （set map 不会报错） | 判断 object.getOwnPropertyDescriptors
for of （可迭代 iterable）：tring，array，set ，map  （注意这里object会报错）  | 判断 arr[Symbol.iterator]
for await ... of  类似于 promise.all（这个返回一个数据）

(
    async function(){
        for await (let res of list){
            console.log(res)
        }
    }
)()

--3.场景题：顺序promise的封装
(async function (){
    const data = [10, 20, 30 ]
    for(let val of data){
        await getPromise(val)
    }
})


```

### 2.1.13.new操作符 | 手写


```js
new用来创建一个给定构造函数的实例对象
   流程： 
   1.声明空对象 
   2.如果是数组，那么就挂载原型（将空对象的__proto__指向构造函数的prototype）。如果是方法，那么调用apply方法 
   3.赋值给this
function myNew(Funct, ...args) {
    let obj = {}
    obj.__proto__ = Funct.prototype
    let res = Funct.apply(obj, args)
    return res instanceof Object ? res : obj
}
```



### 2.1.14.编程思想 |  命令式 | 状态机 | 柯里化 | 优雅降级

```js
1.了解一下react是命令式编程就可以了
2.状态机就是 将不同的状态封装到一个函数里面去
3. 指一个函数接收函数A并且返回一个函数B，函数B来处理A的剩余参数。例如f(x,y)=x^y，固定x=2就得到f(y)=2^y这样的新的函数。具体的代码放在 4.javascript-手写题.md里面
4.优雅降级是从复杂的现状开始的。渐进增强从弱的开始
```





### 2.1.15 缓存 | 强制重新加载 | worker

```js
//1.通常浏览器缓存策略分为两种：强缓存和协商缓存
离线缓存 主要有 manifest缓存 和 service worker
1.根据请求头的expires和cache-control,判断是否命中强缓存（后者优先级高）
2.如果没有命中，那么会发送一个请求到服务器。通过last-modified和etag验证资源是否命中协商缓存。如果命中，服务器会将这个请求返回，（后者优先级高）
3.如果又没有命中，直接从服务器读取资源


//2.不建议随意授予 no-store，因为你失去了 HTTP 和浏览器所拥有的许多优势，包括浏览器的后退/前进缓存。

//3.重新加载 request
mdn上 给出的方法如下
1. Cache-Control: max-age=0
2. Pragma: no-cache
3. 添加版本号
不让他重新加载
Cache-Control: max-age=31536000, immutable（避免了发请求验证，可以看作是更加牛皮的优化）


//4.入口 html 文件是绝对不能强缓存的，不然就更新不了了。
`这种入口 html 文件设置 no-cache，其他资源文件设置 max-age` 的缓存方式算是最佳实践了，你随便找一个网站看看都是这种方式。业务资源文件名字里是有 hash 的，新的 html 引用不同 hash 的资源即可：

//5.command + shift + R 的原理 requret
`Cache-Control 变成了 no-cache`，也就是和服务端协商是否要更新本地缓存，这就是强制刷新的实现原理！
但你现在在 Chrome DevTools 里看到的依然是之前的 Cache-Control：
说明 Chrome DevTools 隐藏了这个行为，就像它隐藏了 sourcemap 文件的请求一样。
sourcemap 文件的请求和cache-control在 charles 里看到：
```





### 2.1.16.  Event Loop | 事件循环(4个概念) | setImmediate

setImmediate 

```js
event loop
1.同步任务进入主线程(`调用栈`),压入叫做frame直到函数返回被弹出 | 异步任务(宏任务 | 微任务),异步环境条件满足之后我们从宿主环境推送到`任务队列`.进入任务队列
2.主线程没东西 后 执行 异步 的 微任务
3.dom 渲染 和执行 异步 的 宏任务

```

**调用栈(call stack)、消息队列(Message Queue)和微任务队列(Microtask Queue)和宏任务队列**

**1.**Event Loop 开始时，从上到下，遇到函数调用时，会把函数压入调用栈中（被压入的函数叫做`帧(frame)`，当函数返回后，会从调用栈中弹出。直到被清空

**2. **微任务队列（Microtask Queue）：使用 Promise、Async/Await 创建的异步操作会入队到微任务队列中，

 **3. **   接下来就是尝试dom渲染和执行宏任务队列

4.调用栈被清空清空执行。异步操作进入消息队列（settimeout，setinterval）

```js


//2.异步任务分成宏任务和微任务。宏任务由宿主环境组成(浏览器，node)。微任务由js引擎组成。优先级：同步代码-》微任务promise.then，await，nexttick也是-》宏任务.

//3.我看的疑问：为什么宏任务微任务是微任务优先：其实上面的说法忽略了一个条件。所有的任务都是在一个大的script里面产生的

//4.promise本身是同步的但是里面的.then是异步的
new Promise(resolve => {
        console.log(1);
        resolve(console.log(4)); //下面代码不会被阻止。会调用.then函数，先进先出原则
    	console.log("我")
        Promise.resolve(console.log("是")).then(()=> {
            console.log(3);
            Promise.resolve(console.log("s")).then(()=> {
            	console.log("b");
            })
        })
    }).then(num => {
        console.log(num);
        setTimeout(()=>{console.log(5)},0);
});
console.log(2); // 1 我 是 2 （第一个同步）| 3（第一个异步，then先进先出）|  s（第二个同步）  | 4 （这里是由于resolve只能一个then，不继续惯着了）| b 5
//先同步，resolve中的也是同步（resolve作为参数不阻塞）。 
//先到then的


new Promise(resolve => {
        console.log(1);
        resolve(3); //下面代码不会被阻止。会调用.then函数，先进先出原则
        Promise.resolve().then(()=> console.log(4))
    }).then(num => {
        console.log(num);
        setTimeout(()=>{console.log(6)},0);
});
console.log(2); // 1 2 4 3 6  注意一下 1是最先执行的


var p = new Promise((resolve) => {
  console.log(4);
  resolve(5);
});

function func1() {
  console.log(1);
}

function func2() {
  setTimeout(() => {
    console.log(2);
  });
  func1();
  console.log(3);
  p.then((resolved) => console.log(resolved));
}
func2();  // 4 1 3 5 2 这里主要是 一开始的 p 是会执行的



//----------------------------------------------------------
// 最后加上await 总结一下,
step1:先是 
同步任务 | 
resolve | 
resolve 的任务同时执行例如 resolve(console.log(66))。如果说resolve(4),那么就先执行后面的如果后面是resolve().then(log(55)) 那么就先输出55，接下来执行resolve(4)的.then | 
await 的处理
v8引擎之前 执行 await 后，会把后面的代码注册到微任务队列。
v8引擎之后 执行await 后，直接跳出函数，在本轮循环的最后被执行 |
注意，这些一些遇到微任务直接丢进去 微任务队列。然后遵循 先进先出的 原则
step2: 异步的微任务 （先进先出）
step3：宏任务
```



### 2.1.17 && |  ||

```
&& 返回第二个有效值，|| 返回第一个有效值
```



### 2.1.18  bind  | apply |  call

bind是绑定（用于click）

call后面+单个

apply是+list（块）



### 2.1.19 类型判断 |  类型转化

```js
类型判断
let a=[1,5,6]
1.Object.prototype.toString.call(a)：装箱操作
会对非null 或 undefined的数据类型进行装箱操作（不然会直接报错），然后去找出对象【Symbol.toStringTag】 属性值，还有可能要遍历原型链，取到的值作为 tag, 然后返回 "【object " + tag + "】" 形式的字符串

2. instanceof
返回true

3.typeof
返回用来说明变量的数据类型（但是array，null等复杂对象一律返回object），但是null并不是object格式的

4.isArray

5.nan！=nan结果是true

类型转化
--1.boolean
布尔值转化-用boolean直接转换：这里注意一下如果object={}，那么这个object的给boolean判断的话是true的。真正的空对象会用null来表示。所以空对象返回的是true。

--2.toString
字符串转化:tostring，String直接转化。tostring不支持null和undefined（会报错），string这个构造函数可以直接返回null和undefined的字面量

注意 
145.toString()会报错
但是(145).toString不会报错

--3.number
数值转化：number这个构造函数也是宽容，原理是用valueof先试一下，得不到在调用tostring类型。parseint parsefloat就没有那么宽容了。如果失败会用nan兜底。一个奇怪的点是如果number（空对象）结果是nan

typeof typeof typeof null 的结果是什么
从右边到左边执行：typeof typeof typeof null 结果是 typeof null 先变成'object'然后再变成'string'.答案也是 'string'
```







### 2.1.20  class | super | 面向对象

```js
--1.super可以传参给父类的constructor 方法
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    
}

class Student extends Person {
    constructor(name,age,sex){
        super(name,age)
        this.sex = sex
    }
}
console.log(new Student("测试",12,1))



```



### 2.1.21  前端竟态问题 | AbortController | abort | promise的取消

```js
1. 如果是XMLHttpRequest我们new open send之后可以xhr.abort();
2. AbortController

const ac = new AbortController();
const { signal } = ac;
//得到signal，只要第二个参数传入了signal。我们就可以搞定了

fetch(resourceUrl, { signal }).then((res)=>{})
ac.abort({
  type: 'USER_ABORT_ACTION',
  msg: '用户终止了操作'
});

3.实现一个可以取消的promise
--3.1 eventbus可以解决
--3.2 abortcontroller也可以做到(好处是一次取消多个请求非常方便)

/**
 * 自定义的可以主动取消的 Promise
 */

function myCoolPromise ({ signal }) {
  return new Promise((resolve, reject) => {
    // 如果这个时候 signal 对象的状态是终止的，那么就会抛出一个异常
    signal?.throwIfAborted();

    // 异步的操作，这里使用 setTimeout 模拟
    //resolve('ok')

    // 添加 abort 事件监听，一旦 signal 状态改变就将 Promise 的状态改变为 rejected
    signal?.addEventListener('abort', () => reject(signal?.reason));
  });
}

/**
 * 使用自定义可取消的 Promise
 */

const ac = new AbortController();
const { signal } = ac;

myCoolPromise({ signal }).then((res) => console.log(res), err => console.warn(err));
ac.abort({
  type: 'USER_ABORT_ACTION',
  msg: '用户终止了操作'
});
```



### 2.1.22 栈 | 堆 | 队列 | 内存溢出解决方案

```js
1.栈 ：方法
它的存储分为访问地址和实际存放的地方; 访问地址是存储在栈中的, 当查询引用类型变量的时候, 会先从栈中读取内存地址(也就是访问地址), 然后再通过地址找到堆中的值.因此, 这种我们也把它叫为引用访问.


v8的堆有这两个：
新生代 就是临时分配的内存，存活时间短, 如临时变量、字符串等
from_space_：正在使用的放到to。然后对调，循环
to_space_：闲置的内存

老生代 是常驻内存，存活的时间长, 如主控制器、服务器对象等;
这就是标记清除了



4.内存溢出解决方案：node --max_old_space_size=8000 build/build.js
```



### 2.1.23.线程与进程(开销和内存空间) |  单线程好处

```js
线程=火车  进程=车厢
火车间很难共享    同一火车的不同车厢容易共享

为避免频繁操作DOM带来的同步问题，设计成单线程。后来为了利用多核CPU计算能力，HTML5提出Web Worker标准，允许js脚本创建多个线程，但是子线程由主线程控制且不得操作DOM，所以JS单线程的本质没有改变。
```



   



### 2.1.24 html元素 | Attribute

```js
document.getElementById('content_views').setAttribute('age', 25);
document.getElementById('content_views').getAttribute('class')
```

### 2.1.25  事件委托 | addEventListener

```js
事件委托主要用来1.减少内存消耗，2.动态绑定事件。减少重复工作
我们一般说的事件委托其实是addEventListener
第一个是我们的事件：比如click，mouseover
第二个是方法
第三个是模式。true是事件在捕获阶段执行。事件在冒泡阶段执行，默认是false,就是默认在冒泡的时候执行
//默认冒泡是 标签的onclick事件->document.onclick->addEventListener
//为true的时候 addEventListener->标签的onclick事件->document.onclick 　
```

 事件传播的三个阶段

```
1、捕获阶段：事件从window对象自上而下向目标节点传播的阶段；
2、目标阶段：真正的目标节点正在处理事件的阶段；
3、冒泡阶段：事件从目标节点自下而上向window对象传播的阶段。
```

示例

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
    <div onclick="parent()">
        <ul class="list" >
            <a href="www.baidu.com">百度</a>
            <a href="www.baidu.com">搜狐</a>
        </ul>
    </div>
    <script>
        function parent(){
            console.log("dsadas")
        }
        document.querySelector('.list').addEventListener('click',(e)=>{
            // alert((e || window).event.target.innerHTML)
            // 阻止冒泡方法  不让事件向documen上蔓延。
            // 只激活内部函数,顶部的onclick就不会执行力
            e.stopPropagation()
            // 阻止默认行为
            e.preventDefault()
        })

    </script>
</body>
</html>
```



事件大全

```js
--1.鼠标事件
click 当用户点击某个对象时调用的事件句柄。
contextmenu 在用户点击鼠标右键打开上下文菜单时触发
dblclick 当用户双击某个对象时调用的事件句柄。
mousedown 鼠标按钮被按下。
mouseenter 当鼠标指针移动到元素上时触发。
mouseleave 当鼠标指针移出元素时触发
mousemove 鼠标被移动。
mouseover 鼠标移到某元素之上。
mouseout 鼠标从某元素移开。
mouseup 鼠标按键被松开。

--2.键盘事件
属性 描述 DOM
keydown 某个键盘按键被按下。
keypress 某个键盘按键被按下并松开。
keyup 某个键盘按键被松开。

--3.键盘事件
框架/对象（Frame/Object）事件
abort 图像的加载被中断。 ( )
beforeunload 该事件在即将离开页面（刷新或关闭）时触发
error 在加载文档或图像时发生错误。 ( , 和 )
hashchange 该事件在当前 URL 的锚部分发生修改时触发。
load 一张页面或一幅图像完成加载。
pageshow 该事件在用户访问页面时触发
pagehide 该事件在用户离开当前网页跳转到另外一个页面时触发
resize 窗口或框架被重新调整大小。
scroll 当文档被滚动时发生的事件。
unload 用户退出页面。 ( 和 )

--4.表单事件
表单事件
blur 元素失去焦点时触发
change 该事件在表单元素的内容改变时触发( , , , 和 )
focus 元素获取焦点时触发
focusin 元素即将获取焦点是触发
focusout 元素即将失去焦点是触发
input 元素获取用户输入是触发
reset 表单重置时触发
search 用户向搜索域输入文本时触发 (

--5.剪贴板事件
剪贴板事件
copy 该事件在用户拷贝元素内容时触发
cut 该事件在用户剪切元素内容时触发
paste 该事件在用户粘贴元素内容时触发

--6.打印事件
打印事件
afterprint 该事件在页面已经开始打印，或者打印窗口已经关闭时触发
beforeprint 该事件在页面即将开始打印时触发

--7.拖动事件
拖动事件
drag 该事件在元素正在拖动时触发
dragend 该事件在用户完成元素的拖动时触发
dragenter 该事件在拖动的元素进入放置目标时触发
dragleave 该事件在拖动元素离开放置目标时触发
dragover 该事件在拖动元素在放置目标上时触发
dragstart 该事件在用户开始拖动元素时触发
drop 该事件在拖动元素放置在目标区域时触发


--8.拖动事件
动画事件
animationend 该事件在 CSS 动画结束播放时触发
animationiteration 该事件在 CSS 动画重复播放时触发
animationstart 该事件在 CSS 动画开始播放时触发


--9.拖动事件
message 该事件通过或者从对象(WebSocket, Web Worker, Event Source 或者子 frame 或父窗口)接收到消息时触发
online 该事件在浏览器开始在线工作时触发。
offline 该事件在浏览器开始离线工作时触发。
popstate 该事件在窗口的浏览历史（history 对象）发生改变时触发。 event occurs when the window’s history changes

--10.元素在上下文菜单显示时触发
storage 该事件在 Web Storage(HTML 5 Web 存储)更新时触发
toggle 该事件在用户打开或关闭 元素时触发
wheel 该事件在鼠标滚轮在元素上下滚动时触发
```



### 2.1.26.作用域链   | 执行上下文

```js
变量提升把变量或者是function的声明提升到开头的行为。所以我们会用 块级作用域，let 和 const来防止变量提升

原理是 预编译 和 执行
--1.作用域一共有三个 全局作用域、函数作用域，块级作用域。函数的 { }，才能形成作用域，比如
// 比如这个对象的 { } 就不是作用域
var xiaoming = { 
  name: 'xiao ming' // 对象中的属性，也不是局部变量
}
一些特殊例子
if (false) {
  var a = 10
}
console.log(a) // 会输出 undefined
{
  var b = 1
}
console.log(b) // 会输出 undefined

--2.块级作用域和{} 合并 示例
{
  let x = 0
}
console.log(x) // Uncaught ReferenceError: x is not defined

--2.作用域链：作用域链是如果在当前作用域下找不到该变量，那就去上层作用域去寻找，直到全局作用域，如果还找不到会报错

为什么在对象内部访问自己的属性不能直接用xxx，为什么 this 指向的不是 window
const xiaoming = {
  name: '小明',
  getName: function () {
    console.log(name)
  }
}
xiaoming.getName() // undefined

因为只有函数的大括号{}才能形成作用域，

--3 说明会先在内部找，接下来回到外部找
--3.1
let a = 56
function b(){
    console.log(a)
    //var a =12
}
b()  //输出56

--3.2
let a = 56
function b(){
    console.log(a)
    var a =12
}
b()  //输出 undefined
```



   作用域是变量和函数生效的区域，分为全局作用域、函数作用域和块级作用域
   ，如果在非严格模式下会在全局隐式地声明该变量









### 2.1.27 babel |  polyfill | core.js

```js
Babel 能为你做的事情：
1.语法转换
2.通过 Polyfill 方式在目标环境中添加缺失的特性 (通过 @babel/polyfill 模块)
那么他是咋做到的呢？这就不得不提大名鼎鼎的AST了-parsing(解析)、transforming（转化）、printing（生成）-黑海谈判。日本和美国谈判。但是只有荷兰翻译


polyfill(补丁/垫片) 的定义， 他就是把当前浏览器不支持的方法通过用支持的方法重写来获得支持。

core.js 和polyfill类似。每年会出现新的qpi，像：es6的Promise，Set或者es7数组新提供的方法includes，这些新加入的api，就引出一个词“”polyfill“”(垫片/补丁)，就是社区上提供的一段代码，让我们在不兼容某些新特性的浏览器上，使用该新特性。新功能转换为大部分现代浏览器都可以支持运行的api补丁包集合。


```





###   2.1.28 加密算法

```js
--1.非对称加密就是同一个公钥-私钥对才能正常加解密。(rsa) ，用快递员的密钥加密，然后把把快递给他，只有快递员的密钥才可以解密。

我通过RSA算法生成公钥私钥，快递员通过我的公钥加密数据，我通过自己的私钥解密

--2.对应的就是 对称加密算法（类似于zip的解压缩）
```







### 2.1.30 async | await | promise| 版本差异 | node 的事件循环比较

- async 返回一个promise
- .then 
  - 返回一个 promise，v8引擎中会用两层 queuetask 包裹
  - 返回function ，正常包裹一层queuetask
  - 返回的是一个数字 、 string 之类的
- await 1 等于 promise.resolve(1),然后把后面的代码包装到promise.then 中。假如promise.then(1) 这种那么没有传入function，会执行 resolve

用同步的方法实现异步操作（指的是.then）。async返回一个promise，await后面接promise那么就是等待返回结果。async只能和await合并使用。但是浏览器调试await可以单独使用

```js
--1.原理
async/await：原理是包裹一层生成器调用next方法+promise。
注意script中，async 和 defer都是异步加载，但是defer 是有顺序的。，而async 是乱序的，这个东西会阻塞 整个线程
--2.版本差异
v8引擎之前 执行 await 后，会把后面的代码注册到微任务队列。
v8引擎之后 执行await 后，直接跳出函数，在本轮循环的最后被执行。紧跟着await后面的语句相当于放到了new Promise中，下一行及之后的语句相当于放在Promise.then中(而且是比较后面的那一种，不会受到影响)

console.log('script start') // 1
async function async1() {
    await async2() //2
    console.log('async1 end')//7
}
async function async2() {
    console.log('async2 end') //2
    return Promise.resolve().then(()=>{
        console.log('async2 end1') //5
    })
}
async1()//2

setTimeout(function() {
    console.log('setTimeout') //8
}, 0)

new Promise(resolve => {
    console.log('Promise') //3
    resolve()
})
.then(function() {
    console.log('promise1') //6
})
console.log('script end') //4
// script start  (这里容易，就是普通输出)
// async2 end  (这里容易，就是普通await 的 值，这里promise.then是微任务跳过)
// Promise	（resolve 是同步任务执行）
// script end （同步任务的最后一步）
// async2 end1 （异步任务 的 第一个微任务）
// promise1 （异步任务 的 第二个微任务）
// async1 end （？？？ await 後面的会在本轮循环的最后进行执行，但是再慢也比settimeout快）
// setTimeout




加深理解的一题

async function async1 () {
  console.log('async1 start');
  await new Promise(resolve => {
    console.log('promise1')
  })
  console.log('async1 success'); //相当于.then 但是不会执行。因为上面的promise没有then
  return 'async1 end'
}
console.log('srcipt start')
async1().then(res => console.log(res))
console.log('script end')
// srcipt start
// async1 start
// promise1
// script end




```



```
两者最主要的区别在于浏览器中的微任务是在每个相应的宏任务中执行的，而nodejs中的微任务是在不同阶段之间执行的。
```





### 2.1.31 scolltop | clientheight | offsetheight  | IntersectionObserver |  clientx是可视坐标，pagex是绝对坐标

怪不得cvte 禁用 scale. scale 会让offsettop失去准度

layout 的尺寸

- clientxx: content + padding
- offsetxx可见尺寸：clientxx + 边框 + 滚动条 | 要是不是尺寸的话.受到 relative、absolute、fixed 的 影响
- scollxx :clientxx + 不可见 

draw 的 尺寸

- getBoundclientreact ，得到的是放大 | 旋转 经过了css 的 transform 渲染之后的 尺寸。这里设置了zoom可能会有bug，得到的是放大后的尺寸。但是top什么的会不准确。



```js
1.document.documentElement.clientHeight获取屏幕可视窗口高度。
2. ele.offsetTop  元素相对于文档顶部的距离  //document.querySelector('#user-content').offsetTop  
3.document.documentElement.scrollTop 滚动条滚动的距离  通过上面三个能够知道我们我们是否能够看到视图.但是这样子监听会照成回流。（判断元素位置我们可以通过3+1>2）
document.documentElement.clientHeight(可见区域高）+document.documentElement.scrollTop(用户滑动的距离)  > 观测元素.offsetTop(元素距离顶部的距离)

4.IntersectionObserver 



const io = new IntersectionObserver(ioes => {
  ioes.forEach(ioe => {
    const el = ioe.target;
    const intersectionRatio = ioe.intersectionRatio;
    if (intersectionRatio > 0 && intersectionRatio <= 1) {
      console.log("能看见元素")
    }else{
        console.log("看不见")
    }
    el.onload = el.onerror = () => io.unobserve(el);
  });
});
const imgs = Array.from(document.querySelectorAll('#user-content--getboundingclientrect'));
imgs.forEach(item => io.observe(item))


```



利用offsetTop和scrollTop和浏览器高度做比较
getBoundingClientRect返回相关位置属性



总结一共2个：scrollTop（字面意思） clientTop（局部正常基础少一点东西或者不正常，大局正常） offsetTop（正常）

```js
--1.固定（dom上常用属性）
clientWidth  //1.1屏幕（不固定）的宽高
width  //1.2屏幕（固定）宽高
scrollTop // 1.3滚动宽高

border-box下面，这三个一样， //1.3元素宽高
offsetHeight(元素本身的宽) | scrollHeight（元素高度-border*2+溢出来的元素高） | clientHeight（元素高度-border*2）

如果要是是content-box//1.3元素宽高
offsetHeight(元素+padding*2+border*2) | scrollHeight（元素高度+padding*2+溢出来的元素高-overflow-y: auto） | clientHeight（元素+padding*2）

//1.4元素距离顶部的距离
offsetTop（正常大全）
clientTop//顶部边框值
scrollTop:内部的滚动效果//document.querySelector(".box").scrollTop=100。（可以用来做页面滚动效果）

--2.事件：
clientX // 2.1以可见区域的左上角为原点
pageX // 2.2以页面本身的body为原点
offsetX（左内边框） | windowX （相对于屏幕）//2.3

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        .container {
            column-count: 2;
            margin-top: 800px;
        }

        .box {
            /* position: absolute; */
            top: 10px;
            margin: 10px;
            background: red;
            width: 100px;
            height: 100px;
            padding: 20px;
            box-sizing: border-box;
            word-wrap: break-word;
            border: 1px solid black;
            padding: 10px;
            overflow-y: auto;
        }

    </style>
    <div class="container">
        <div class="box"> aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>
        <div class="box"></div>
        <div class="box"></div>

        <div class="box"></div>

    </div>
    <script>

    </script>
</body>

</html>
```







```js
--0.基础知识

document.documentElement：可返回存在于 XML 以及 HTML 文档中的文档根节点（对应的是html标签）
document.body：提供了对 <body> 标签的直接访问（对应的是body标签）
在DTD已声明的情况下用documentElement，未声明的情况下用body



--1.可见区域宽高
document.documentElement.clientWidth;  //height + padding + 水平滚动条高度
window.screen.width//屏幕宽度（不受窗口resize事件影响）

document.documentElement.clientHeight;  //height + padding + 水平滚动条高度（doc为严格模式下面document.body失效，原因不明） | 考虑用document.documentElement.clientHeight
window.screen.height//屏幕高度（不受窗口resize事件影响）


2.滚动长度：
document.documentElement.scrollTop //严格模式下面用这个
document.body.scrollTop //兼容模式用这个

3.元素宽高
document.querySelector(".box").offsetWidth//获取元素的宽，这里需要注意我们的box-size:box还是content差距是很大的。

4.元素距离顶部距离
document.querySelector(".box").offsetTop//绝对数值

document.documentElement.scrollTop+document.documentElement.clientHeight,document.querySelector(".box").offsetTop
```









### 2.1.32 监听dom元素 | MutationObserver

```js
function callback(mutationList, observer) {
  mutationList.forEach((mutation) => {
    switch(mutation.type) {
      case 'childList':
        /* 从树上添加或移除一个或更多的子节点；参见 mutation.addedNodes 与
           mutation.removedNodes */
        break;
      case 'attributes':
        /* mutation.target 中某节点的一个属性值被更改；该属性名称在 mutation.attributeName 中，
           该属性之前的值为 mutation.oldValue */
        break;
    }
  });
}
var targetNode = document.querySelector("#someElement");
var observerOptions = {
  // 观察目标子节点的变化，是否有添加或者删除
  childList: true,  
  // 观察属性变动
  attributes: true, 
  // 观察后代节点，默认为 false
  subtree: true     
}

var observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);

```



### 2.1.33 arguments

```js
arguments默认获取剩下的参数

function fun(age, className) {
    console.log(`${this.name}的年龄是${age}岁，是${className}班学生`)
}

箭头函数没有arguements
```



### 2.1.35  postmessage

#### 子组件

```js
let data="data1111111111"
window.postMessage(data,"*")  //parent.postmessage vue里面
```



#### 父组件

```js
function parent(param){
	console.log("测试:",param)
}
window.addEventListener("message",parent)

```





### 2.1.37  innerText |  textContent |  nodeValue

```js
--1.innerText获取可以显示的文本:display:none的不会输出，opacticy为0就是可以被输出。

--2.textContent能够获取所有子节点的文本内容。包括html和script。注意注释获取不到

--3.nodeValue只能是作用于文本节点或者注释节点本点。不然会是null

--4.innertext作用于html element后两个作用于node。

--5.注意一下html中换行和和注释节点也被算做了一个子节点
```



### 2.1.38  geo | speech | api

```js
window.navigator.geolocation (http的定位可能会不准，因此最好是https-ios10)
//翻墙才能用
navigator.geolocation.getCurrentPosition(position => {
    console.log('当前位置信息：', position)
})

------------------------------
//定位数据获取成功响应  
function  onSuccess(position){  
      alert('纬度: '          + position.coords.latitude          + '\n' +  
      '经度: '         + position.coords.longitude         + '\n' +  
      '海拔: '          + position.coords.altitude          + '\n' +  
      '水平精度: '          + position.coords.accuracy          + '\n' +  
      '垂直精度: ' + position.coords.altitudeAccura)  
}  
//定位数据获取失败响应  
function onError(error) {  
  switch(error.code)  
  {  
    case error.PERMISSION_DENIED:  
    alert("您拒绝对获取地理位置的请求");  
    break;
    case error.POSITION_UNAVAILABLE:  
    alert("位置信息是不可用的");  
    break;
    case error.TIMEOUT:
    alert("请求您的地理位置超时");  
    break;
    case error.UNKNOWN_ERROR:  
    alert("未知错误");  
    break;
  }  
}  

if(navigator.geolocation){  
  navigator.geolocation.getCurrentPosition(onSuccess , onError);  
}else{  
  alert("您的浏览器不支持使用HTML 5来获取地理位置服务");  
}  
```



### 2.1.39  正则

```js
//(.)匹配任意一个 (？)匹配0-1个  *匹配1个以上 \d 匹配单个数字=[0-9]

//手机号 | 1开头+除了1之外的东西+中间9个结尾 
const reg = /^[1][3,4,5,6.7,8,9][0-9]{9}$/g;
const reg = /[1][3,4,5,6.7,8,9][0-9]{9}/g;
let text ="我的手机号是19120636253，因此xxxxx/但是他的手机号码是18928125079"
--1.match | 输出匹配的  这玩意和 replace是好用的 text.replace(reg,"替换的内容")
console.log(text.match(reg)) //['19120636253','18928125079']
--2.search | 返回第一个元素位置
console.log(text.match(reg)) //6
--3. test | 看一下有没有符合要求的元素..表单校验的时候可以用
console.log(reg.test(text)) // true
--4.零宽先行 断言 (?=p)  要求与p匹配	
//(?=a) 表示我们需要匹配某样东西的前面。  会带着?=一起输出出来，实操体验很差
//(?!a) 表示我们需要不匹配某样东西。
//(?<=a) 表示我们需要匹配某样东西的后面。
//(?<!a) 表示我们需要不匹配某样东西，与(?!a)方向相反。
var reg1 = /(?<=机号是)[0-9]{11}(?=,因)/g
let text ="我的手机号是19120636253,因此xxxxx但是他的手机号是18928125079,因但是,"
console.log(text.match(reg1))
console.log(reg1.exec(text))


var consoleName=["console","window.console"];
var consoleType= ["log", "info", "warn", "error" ,"assert" ,"count" ,"clear"];
//let rConsole = new RegExp("(" + consoleName.join("|") + ")" + ".(?:" + consoleType.join("|") + ")\\s{0,}\\([^;]*\\)(?!\\s*[;,]?\\s*\\/\\*\\s*NotClearConsole\\s*\\*\\/)\\s{0,};?", "gi");
let rConsole = /console.log\(.*?\)/g
let text ="console.log('ddddd');let a= 1;console.log('ddd')"
console.log(text.match(rConsole))
```



```js
	// 正则表达式
        function getQueryObject(url) {
            //假如不传值，默认也会有值
            url = url == null ? window.location.href : url
            //这一套组合技就是取到最后？后面的值
            // url.lastIndexOf('?')找到位置
            const search = url.substring(url.lastIndexOf('?') + 1)
            const obj = {}
            // 3.1 正则表达式 基本形式 /正则表达式主体/修饰符(可选)
            // i 大小不那啥  g 全局匹配 不会在匹配一个后就停止
            // JavaScript 中，正则表达式通常用于两个字符串方法 : 
            // search()-并返回子串的起始位置 和 replace()-替换 和 exec也常用
            const reg = /([^?&=]+)=/g       
// 先行断言 后行：后面的内容应匹配表达式 exp
        var reg1 = /(?=三).*(?=b)/
        console.log('123一二三abc'.match(reg1))
        // 返回三a

        console.log(reg1.exec(search))
        // reg.exec(search,(rs, $1, $2) => {
        //         console.log($1, "$1")
        //         console.log($2, "$2")
        //         console.log(rs, "rs")
        //         const name = decodeURIComponent($1)
        //         let val = decodeURIComponent($2)
        //         val = String(val)
        //         obj[name] = val
        //         return rs
        // })

        //这样子写可以得到第一个参数匹配的内容
        // replace的第一个参数是正则表达式，第二个参数有两种形式，第一种是string，那就是替换了
        // 第二种就是传入函数，rs是匹配的内容，$1是第一个括号匹配的内容，$2是第二个括号匹配的内容
        // 如果除了这两个参数外还有的话，那么就是offset（匹配到的索引）,str（原始字符串）
        // reg是正则表达式，传入
        search.replace(reg, (rs, $1, $2) => {
            console.log($1, "$1")
            console.log($2, "$2")

            const name = decodeURIComponent($1)
            let val = decodeURIComponent($2)
            val = String(val)
            obj[name] = val
            return rs
        })

        return obj
    }
	console.log("window.location", getQueryObject())
```

```js
2.1.40 正则中使用变量 
function count(str,all){
        let reg =new RegExp(`${str}`,"g")
        let temp = all.match(reg)
        return temp
    }
```



### 2.1.40 一些坑 | try catch  | settimeout | async |  赋值

```js
1.try catch的坑
1.1 setTimeout回调抛出的异常不能被try catch。 因为调用他的catch的settimeout入栈的时候，调用它的函数就是已经出栈了。简单地说setTimeout里的错误被异步抛出的

1.2 async函数里await发生的异常却可以try catch，

1.3 promise 第一层的错误不会冒泡出来，而是被 promise 吃掉了，只有通过 promise.catch 才可以捕获

然后在第二层也就是then里面可以
在第一层 return e 然后在第二层进行拿到值。根据这个东西我们可以解决 1.1的bug。包一层promise来捕获promise的错误

const p3 = () =>  new Promise((reslove, reject) => {
  setTimeout(() => {
    reject('async error');
  })
});

function main3() {
  p3().catch(e => console.log(e));
}
main3();

1.4 async 和 await 的捕获
这玩意能够直接直接捕获

2.从右到左
function display() {
  var a = b = 10;
}

display();  
/*
	function display() {
      a = 10  //严格模式下面会报错
      var a = 10 
    }
*/



```



### 2.1.41 json.stringify的三个参数

```js
第一个参数是 对象
第二个参数 的 要序列化的属性
第三个参数 是 缩进 字符数

删除对象属性最佳实践 |  delete 会让线性快属性变成慢属性的
let obj = {a:1,b:3,c:5}
let res = JSON.stringify(obj,(key,value)=>{
	if(key == 'b'){
		return undefined
	}
	return value
},2)
console.log(res)  // 这样子就是分两个格子输出

```





### 2.1.42 懒加载 (insertsectionobsserver)

```ts
：减少reflow

const io = new IntersectionObserver(ioes => {
  ioes.forEach(ioe => {
    const el = ioe.target;
    const intersectionRatio = ioe.intersectionRatio;
    if (intersectionRatio > 0 && intersectionRatio <= 1) {
      console.log("能看见元素")
    }else{
        console.log("看不见")
    }
    el.onload = el.onerror = () => io.unobserve(el);
  });
});
const imgs = Array.from(document.querySelectorAll('#user-content--getboundingclientrect'));
imgs.forEach(item => io.observe(item))

```



### 2.1.39 DOM0 | DOM2 | DOM3

```
DOM0 : 行内元素
DOM2 :addeventlistener 的 click事件
DOM3 : 滚动 鼠标 焦点事件 合成事件（这玩意是输入耶）之类的
```



### 2.1.40 lut 引入 | canvas 的学习

```js
--1.基本概念
lut 是 look up table 的缩写
canvas 是 用rgba 来进行描述 图像处理 的
因此 lut 其实 是一种 颜色的映射关系(255,255,255,100)

 一般会对[0,255]的取值进行采样, 得到一份采样之后的数据. 常见的采样一般是64 * 64 * 64或者33 * 33 * 33.cube 文件中就有一个size字段描述采样。里面的参数都从255 压缩到 1之内


// size  size 是 64，table 是 64 *64 *3 

 
// cube文件通过得到我们想要的数据（聚类，合成64 * 64 *3）
 gettable 得到 table先
 const [r, g, b] = lut3d([vr, vg, vb], table, size);
注意：在canvas drawImage 之后，canvas.data 就有了4个值分别是rgba，然后我们通过遍历canvas 的length 将r g a b 分离，然后执行工具方法
 
// lub3d 中 首先 找blue，然后是 red 最后是 green 的索引.这里是高位查表 用 最大索引值 * r/g/b ，分别用floor 和 min 来承载.最后的最后 低位插值，用下面的函数分别对r/g/b的最大 最小 进行处理

function mix(small,high,b){
   const ？ = b - Math.floor(b);
 	return Math.floor((small * (1 - ？) + high * ？) * 255); 
}

最后canvas.data[0] = r
canvas.data[1] = g
类似这样子就行了，替换成功
 
 
第一步：高位查表
首先根据blue 通道的颜色，确定我们需要的色值在哪一个方块
例如将某一个通道除以255得到一个0-1之间的数字。例如0.08*(size-1) 得出 大小拿到整数.拿到整数之后计算索引
Index = red + green * 65 + blue * 65 * 65。 跟我上面的构成table 其实是一样的，第一步查找blue 然后是green 最后是 red

第二步：低位插值
采用三线性插值的方法

// 这里的 x,y,z 都是最小点
var p1 = [x,y,z];
// a，b，c是最大点
var p2 = [a,b,c];

sama

 
2.pr 中可以 效果中查找lumetri 颜色 然后 导入 cube 文件
也可以在这里 不导入 调整好后 直接导出
```



```html
// 示例
<!DOCTYPE html>
<html>

<head>
    <title>LUT</title>
    <script type="text/javascript" src="https://cdn.bootcss.com/axios/0.18.0/axios.min.js"></script>
    <style type="text/css">
        canvas {
            width: 600px;
        }
    </style>
</head>

<body>
    <video src="" style="width:200px;height:200px"></video>
    <script>

// function cameraStart() {
//             let isFront = false;

//             let config = {
//                 audio: false, video: true, video: {
//                     width: 700,
//                     height: 500,
//                     // 前后置摄像头
//                     facingMode: isFront ? "user" : "environment",
//                     // 帧率设置. 字面意思，一个是理想的状态下面，一个是最大的帧率
//                     frameRate: { ideal: 30, max: 30 }
//                 },
//             };
//             let video = document.querySelector("video");
//             function successCallback(stream) {
//                 // 将返回的流提供给控制台进行检查
//                 window.stream = stream;
//                 console.log(stream)
//                 video.srcObject = stream;
//                 // 播放
//                 video.play();
//             }
//             function errorCallback(error) {
//                 console.log("navigator.getUserMedia error: ", error);
//             }
//             // 传入3个参数，第一个是配置，第二个是成功的回调
//             // 这个更加规范了，多加了一个mediaDevices。window.navigator.getUserMedia(config, successCallback, errorCallback);
//             navigator.mediaDevices.getUserMedia(config)
//                 .then(function (stream) {
//                     successCallback(stream)
//                 })
//                 .catch(function (err) {
//                     errorCallback(err)
//                 });

//         }
//         // 调用
//         cameraStart()

        function getTable(url) {
            return axios(url, {
                method: 'GET',
            })
                .then(res => {
                    const tableString = res.data;
                    // 按行分割字符串
                    const tempArr = tableString.split('\n');
                    let lut_3d_size = 0;
                    let start = -1;

                    const table = [], resTable = []

                    for (let i = 0; i < tempArr.length; i++) {
                        const str = tempArr[i];
                        // 获取采样数量
                        if (str.includes('LUT_3D_SIZE')) {
                            lut_3d_size = +str.replace('LUT_3D_SIZE', '');
                            continue;
                        }

                        // 将空节点与文件头过滤掉
                        if (!str || /[a-z]/i.test(str)) continue;

                        // 得到色彩数据开始的索引
                        if (start === -1) {
                            start = i;
                        }

                        // 计算色彩数据真实的索引  重要：这里难理解但是还好，就是说没有索引是注释的序号的
                        const idx = i - start;

                        // 分割rgb的值
                        const pixel = str.split(' ').map(s => Number(s)); //[ 3个值 ]
                        console.log("idx / lut_3d_size",idx , lut_3d_size) 
                        // 根据table的排列规律，创建二维数组(65 * 65 * 65),这里我们根据从文件中实际获取到的采样数来计算
                        if (!table[Math.floor(idx / lut_3d_size)]) table[Math.floor(idx / lut_3d_size)] = [];
                        // 重要：第一次拿到值
                        table[Math.floor(idx / lut_3d_size)].push(pixel);
                    }

                    for (let idx = 0; idx < table.length; idx++) {
                        const piece = table[idx]; // [ 65个值 ]
                        // console.log("piece",piece)
                        if (!resTable[Math.floor(idx / lut_3d_size)]) resTable[Math.floor(idx / lut_3d_size)] = [];
                        resTable[Math.floor(idx / lut_3d_size)].push(piece);
                    }
                    console.log("result:", {
                        table: resTable, //64 * 63 *3
                        size: lut_3d_size
                    })
                    return {
                        table: resTable,
                        size: lut_3d_size
                    }

                })
                .catch(err => {
                    console.error(err)
                })
        }



        function mix(x, y, b) {
  const a = b - Math.floor(b);
  return Math.floor((x * (1 - a) + y * a) * 255);
}
        



function lut3d(targetColor, table, lut3dSize) {
  const [r, g, b] = targetColor || [];

  const tr = r / 255;
  const tg = g / 255;
  const tb = b / 255;

  // 计算最大索引值
  const n = lut3dSize - 1;
  // 计算blue索引
  const b_index = tb * n;
  // 计算red索引
  const r_index = Math.floor(tr * n);
  // 计算green索引
  const g_index = Math.floor(tg * n);

  // 计算blue的离散索引
  const b_floor_idx = Math.floor(b_index);
  const b_ceil_idx = Math.ceil(b_index);

  // 找到blue所在的数据
  const b_ceil = table[b_ceil_idx];
  const b_floor = table[b_floor_idx];

  // 找到green所在的数据
  const g_ceil = b_ceil[g_index];
  const g_floor = b_floor[g_index];

  // 找到red所在的数据， red对应的点，为将要替换的rgb目标数据
  const r_ceil = g_ceil[r_index];
  const r_floor = g_floor[r_index];

  return [
    mix(r_ceil[0], r_floor[0], tb),
    mix(r_ceil[1], r_floor[1], tb),
    mix(r_ceil[2], r_floor[2], tb),
  ]
}




// 重要：上面的是工具方法，下面的才是主要逻辑

        const video_url = 'origin.mp4';

        const test_cube_file = 'Cinematic 04__OXYGENART.cube';


    getTable(test_cube_file).then((res) => {
      const { table, size } = res;
      console.log(res)
      const canvas = document.createElement("canvas");
      const video = document.createElement("video");
      const play_button = document.createElement("button");

      play_button.innerHTML = '播放';

      canvas.style.cssText = `
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-110%,-50%);
      border:1px solid #333;
      z-index:9999999;
    `;

      video.style.cssText = `
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(10%,-50%);
      border:1px solid #333;
      z-index:9999999;
    `
      play_button.style.cssText = `
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      border:1px solid #333;
      z-index:9999999;
    `
      const ctx = canvas.getContext("2d");

      video.crossOrigin = 'anonymous';
      video.src = video_url;
        // video.autoplay = true
      video.oncanplaythrough = () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        video.loop = true;

        checkVideo();
      }
      
      function checkVideo() {
        
        ctx?.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        const video_image_data = ctx?.getImageData(0, 0, canvas.width, canvas.height);
        const imageData = new ImageData(video_image_data.width, video_image_data.height)
        const video_pixel_data = video_image_data.data;

        for (let i = 0; i < imageData.data.length; i += 4) {
          // 基底素材的pixel
          const vr = video_pixel_data[i];
          const vg = video_pixel_data[i + 1];
          const vb = video_pixel_data[i + 2];
          const va = video_pixel_data[i + 3];

        //   当前
          const [r, g, b] = lut3d([vr, vg, vb], table, size);

          imageData.data[i] = r
          imageData.data[i + 1] = g
          imageData.data[i + 2] = b
          imageData.data[i + 3] = va;
        }

        ctx?.putImageData(imageData, 0, 0);
        window.requestAnimationFrame(checkVideo)
      }



      play_button.onclick = () => {
        video.play();
      }


      document.body.appendChild(canvas);
      document.body.appendChild(video);
      document.body.appendChild(play_button);

    });






    </script>
</body>

</html>
```





### 2.1.41 数组分块

```js
let chunk = (arr,count) =>{
    let res =[]
    while(arr.length){
        res.push(arr.splice(0,count))
    }
    return res
}

let test = [ 1,5,6,9,7,5,2]
console.log(chunk(test,2))
```



### 2.1.42 Beacon API(异步发送数据)

```js
过去，许多网站使用 unload 或 beforeunload 事件以在会话结束时发送统计数据。然而这是不可靠的，在许多情况下（尤其是移动设备）浏览器不会产生 unload、beforeunload 或 pagehide 事件

//数据埋点接收数据后端示例：https://gitee.com/Electrolux/mock-receive-server
--1.只能post请求
--2.最大  65536 字符。
let data ={id:1,name:"ceshi"}
//window.navigator.sendBeacon('http://localhost:8088/post', data);
document.addEventListener('visibilitychange', function logData() {
  if (document.visibilityState === 'hidden') {
    navigator.sendBeacon('http://localhost:8088/post', data);
  }
});
// 
var data = JSON.stringify({
  name: 'Berwin'
});

window.navigator.sendBeacon('http://localhost:8088/post',data);
```



```
let formData = new FormData();
formData.append('text', '测试');
navigator.sendBeacon("", formData);
```











### 2.1.46  esc  | 上下文  |  作用域链（scope），AO/VO，this 

this有**默认**，**隐式**，显式（bind，call），new

```js
--0.上下文和作用域链的主要区别是 
--0.1 作用域是静态的，上下文是js开始执行创造的（有栈的操作）
--0.2 上下文是作用域的有作用域的差别




--1.上下文：执行环境
--1.1 全局执行上下文 ： 不在任何函数中的代码都位于全局执行上下文中
--1.2 函数执行上下文
--1.3 eval
1.3 生命周期：
--1.3.1 创建阶段 （三件事）
创建变量对象：首先初始化函数的参数 arguments（VO的开始 value还没有赋值。 然后进入执行阶段会变成AO-活动对象），提升函数声明和变量声明
创造作用域链：找到最近变量就停止
确定this
--1.3.2 执行阶段（三件事）
 变量赋值
 函数引用
 执行代码
--1.3.3回收阶段
函数执行完毕后出栈，对应的执行上下文也出栈

1.4 注意：
--1.4.1 全局执行上下文在代码开始执行时就创建，有且只有一个，永远在执行上下文栈的栈底，浏览器窗口关闭时它才出栈
--1.4.2 函数调用的时候入栈出栈



--2.作用域：
--2.1 全局作用域
--2.2 函数作用域
--2.3 块级作用域


--3.VO过程
--3.1 创造arguments对象
--3.2 检查function
--3.3 检查 var ：如果 var 定义变量的时候发现已有同名函数定义则跳过变量定义

function a(){};function a(){}  这样不会报错，并且执行会执行最后一个
function a(){};let a = 56 会报错
function a(){}


“算了我以一个函数来说把，主要是创建和执行。假设有一个A函数，过程是这样的创建全局执行上下文、压入esc、全局上下文初始化、执行A函数、创建A函数执行上下文，压入esc，A函数上下文初始化，这个初始化过程是这样的：创建作用域链、emm我上面提漏了一个A函数被创建全局上下文被保存到scope中的过程，是复制scpoe创建作用域链,用arguments创建活动对象，初始化活动对于，将活动对象压入链顶，执行完毕，上下文弹出。”

“但是全局上下文一直在栈底，而VO和AO的确认，我感觉是取决是是否可访问的。”

“而闭包就是上下文链中上下文scope被销毁了，但因为保持了对scope中某个变量的引用，这应该就是你上面说的回收原理的根节点实现的这个东西把，导致没销毁干净，留存在了内存中，完成了闭包”


--4. 题目（vo声明，执行上下文）
注意：函数声明提升更加靠前
--4.1 let 不能变量提升
foo();
let foo = function foo() {
    console.log('foo1');
}
function foo() {
    console.log('foo2');
}
foo();  //直接报错

--4.2 如果 var 定义变量的时候发现已有同名函数定义则跳过变量定义，不做变量提升
foo();
var foo = function foo() {
    console.log('foo1');
}
function foo() {
    console.log('foo2');
}
foo();  //foo2 foo1


--4.3 跟上面一样
foo();
function foo() {
    console.log('foo2');
}
var foo = function foo() {
    console.log('foo1');
}

foo();  //foo2 foo1



--4.3  只有var 的变量提升
var foo2 = 10;
function foo() {
    console.log(foo2);
    var foo2 = 10;
    console.log(foo2);
}
foo() // undefine,10

--4.4  变量没有提升，这里是考察作用域
var foo = 1;
function bar () {
    console.log(foo);
    foo = 2;
}
bar();
console.log(foo);

```



### 2.1.46 递归 和 栈溢出优化 | 尾递归优化（淦）

```js
尾递归优化：防止全局上下文的爆栈，函数的最后一步是返回一个函数的运行结果

function recursion (num) {
 if (num === 0) return num;
 return recursion(num - 1) + num;
}   
优化后
function recursion (num, sum = 0) {
 if (num === 0) return sum;
 return recursion(num - 1, sum + num);
}  //也是报错
recursion(10000) // => 50005000

尾调用由于是函数的最后一步操作，所以不需要保留外层函数的相关信息，因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用记录，取代外层函数的调用记录就可以了，这样一来，运行尾递归函数时，执行栈永远只会新增一个上下文。

其实，尾递归优化这种东西，现在没有任何一个浏览器是支持的（据说 Safari 13 是支持的）
```





### 2.1.48 拖拽事件

```js
拖动的元素事件：(drag ， dragstart  ，和dragend)
拖动的目标事件（容器）：ondrop，ondropenter/over/leave/。

拖动元素的属性要用dataTransfer对象来获取值。


1.拖拽单文件事件
 <div draggable="true" id="box"></div> 
box.ondragend = function (e) {
    //拖拽到哪里就放到哪里
    box.style.cssText = 'top:' + (e.clientY) + 'px;left:' + (e.clientX) + 'px'
}

————————————————————————————
2.拖拽多文件事件
 <div draggable="true" id="box"></div> 
box.ondragend((e)=>{
	let dataFiles = e.dataTransfer.files
	dataFiles.forEach((file)=>{
		let fileR = new FileReader()
		fileR.readAsDataURL(file)
		fileR.onload((value)=>{
			//这里就可以自由发挥了
			console.log(value)
		})
		console.log()
	})
})

<input type="file" id="type">
document.querySelector("#type").onChange((e)=>{
  console.log(e.target.files) //e.files也是有可能的
})


————————————————————————

3. 拖拽div区域

<div id="type">
//经过，只有是设置了阻止默认事件才能够解锁松开鼠标ondrop
document.querySelector("#type").ondragover((e)=>{
  e.preventDefault()
})

//放下
document.querySelector("#type").ondrag((e)=>{
  e.preventDefault()
  console.log(e.dataTransfer.files)
})

//设定拖动影子的样式
e. dataTransfer.setDragImage(img,100,100)
```



### 2.1.49  chrome 

```
防护系统：一抓包就闪退+白屏+通过用户证书直接可以用

小黄鸟不可用的原因
用户证书（安卓7之前手机相信这个） ｜ 手机只相信系统证书（ca机构）。所以我们如果没有root，那么小黄鸟就不能抓包了

解决方法：套一层虚拟机，然后用小黄鸟去监听虚拟机
```



#### 2.1.49.1 网页工具



```js
1.2.0 element

element的event listener中 。勾上 ancestor all 就可以看到全局的事件，反之只能够看到当前的事件

1.2.1 network

大界面打开一个preserve 和 disable cache

preserve log （打开的：界面打开一个新界面不会清除调试输出）
disable cache（打开的：就不会执行304，全部会重新进行请求。返回的都会变成200）
逆向中全部勾上就可以了

里面的表头 initator 可以查看调用栈 ｜ 有的是浏览器自己开启的
里面表头 的waterfall 是可以查看 调用的顺序

1.2.2 source  

资源面板：右上角三个小点打开，有一个搜索界面，点击这个在下方能够添加别的一些界面（console 之类的）。中间下面会有一段小小的格式化，中间偏右 那里

1.2.2.1左边的小面板：


1.page：所有的资源文件都在里面-（平常我们不会去用它）

2.fileSystem：关联子目录

3.overrides：重写（可以对当前网站的js进行替换）。勾选上允许重写后（关联子目录后）。我们可以找到network的js里面，右键然后open in source panel 或者是 save for overrides-有的网站兼容模式下面运行，那么overrides就不会执行。所以我们会用到极速模式来进行执行

4.content script：上下文的脚本

5.snippets 
默认是都会执行的脚本（任何事件，任何网址）


1.2.2.2右边的小面板：

勾上最后一个的pause on caught exceptioj

第一个是 奔向下一个断点
第二个是 一个一个方法的进行执行 （可以找出其中方法逻辑）
第三个是 在这个语句里面一条条 代码块运行（）
第四个是 返回到这个方法调用的位置
第五个是 跟第三个一样的，只是会在文件的开头开始运行
第六个是 可以让所有断点都失效
最后一个 don‘t pause on excetion 变蓝。把pause on caught exception 勾上。这样就可以避免try catch 进入catch而会直接报错。（要勾上）
下面的watch 可以监听，类似于console这个变量

断点可以右键移除和添加

1.2.2.3 console面板

左上角可以show console sidebar：可以区分重要性
然后fliter输入框可以写正则。然后可以。用类似于url:www.Baird.com来进行过滤


勾上preserve log 和group similar 和 log xmlhttprequests
evaluate triggers users activation, autocomplete from history, eagar evalution

hide network ：隐藏404之类的东西
preserve log ： 是否清除缓存。（勾上就不清除缓存了）
group similar：分组（相同的会放在一起，不会展开）
eagar evalution：可以预览结果
autocomplete from history ：自动补全
evaluate triggers users activation ：一些api无法靠js触发。例如有声影片自动播放开启popup（弹窗），下载档案。这里我们之所以能够用window.open打开是因为这个选项打开从而保持user activation。如果我们延迟5s弹出，那么就会弹出user activation警告
log xmlhttpprerequest ： 打印http请求（promise例如 fetch(“xx”)）


1.2.3 application

这里面其实存储和缓存会比较多。简单
但是要注意这里我们说的清除缓存只是清除浏览器的缓存，但是变量的缓存是清除不掉的。例如 window.a 清除不掉


```





#### 2.1.49.2  网页工具断点

```js
本地进行js 请求，对js请求进行修改，能修改
批量监听
更智能的监听

1.3.1 断点

DOM 断点：什么时候渲染的数据（渲染页面改变出来某一个数据）-无法根据栈快速定位-我们可以通过element 的鼠标 右键 直接在 element上面 直接添加breakpoint

DOM事件断点：什么时候进行的事件（点击事件的断点）-跟上一个差不多。我们可以在element中 eventlistener 中不选择 ancestor all 然后就可以定位到代码的位置 然后就可以手动下断

XHR 断点 ： 进行事件请求的断点 （）- 距离加密（逆向的目标）函数比较近，可以直接看到栈调用-具体来说是我们从后往前复制公用的部分。然后我们在source中的xhr中 add url我们 添加  公用的部分就可以打断点了（数字广东的朋友问过我这个问题）

代码行断点 ：手动断点-代码前点一下就会变成绿色

代码断点 ：debugger

全局事件断点：浏览器事件断点（source的 最右边进行断点操作）

异常捕获断点：source的最右边点击蓝色 然后 pause on caught exception勾上。不想断的地方右键选择这个断点然后edit 填入false

debugger

1.3.2 方法栈 ｜ 跟值

这里是基于xhr ，我们在 source中 找到xhr 事件，然后我们找到request url，找到xhr

首先的跟值就是 点一下ctrl 我们就可以找到这个函数的结构（直到没有智能提示我们就可以确定这个是函数的开始）。找到xhr中的open函数


```



### 2.1.50 错误处理

```js
--1.throw Expressions (stage 2)
let x = throw new Error("Unsupported encoding");

--2.Promise.try  可以更加精确的捕获同步错误。
里面抛出的错误能够被捕获
function getUserNameById(id) {
    return Promise.try(function() {
        if (typeof id !== "number") {
            throw new Error("id must be a number");
        }
        return db.getUserById(id);
    }).then((user)=>{
        return user.name
});
}
--3.Error Cause

就是throw new Error('Upload job result failed', { cause: err });
然后 是使用 。相当于他会帮你自定义一个类型出来
try {
  await doJob();
} catch (e) {
  console.log(e);
  console.log('Caused by', e.cause);
}
// Error: Upload job result failed
// Caused by TypeError: Failed to fetch
```





### 2.1.51 keep alive 原理

不会生成真正的DOM节点，并且能够缓存组件

最简单就是使用display:none来将 这个dom隐藏。但是这种方法并没有做到dom真正的移除，又让组件没有被销毁

```js
要实现这个我们必须要依赖虚拟dom，也就是说我们要手写框架？

document.createElement 在内存中创建一个元素，然后再通过 React.createPoral 把 React 子节点渲染到这个元素上。如果不满足的我们会用ref来移除这个元素

在react中 我们可以用 portal 和ref 来进行控制，具体代码如下

export const Conditional = props => {
  const [targetElement] = useState(() => document.createElement('div'))
  const containerRef = useRef()
  useLayoutEffect(() => {
    if (props.active) {
      containerRef.current.appendChild(targetElement)
    } else {
      try {
        containerRef.current.removeChild(targetElement)
      } catch (e) {}
    }
  }, [props.active])
  return (
    <>
      <div ref={containerRef} />
      {ReactDOM.createPortal(props.children, targetElement)}
    </>
  )
}

<Conditional active={!shouldHide}>
  <Foo/>
</Conditional>

缺点：需要手动控制 active ，不能直接基于子组件销毁/创建的生命周期事件

缺少失活/激活的生命周期时间，子组件无法感知自己是不是被缓存起来了

依赖了 ReactDOM ，对 SSR 不够友好
```

### 2.1.52  并发 | idle

```js
js并发：
1.nginx里面合并前端请求 nginx-http-concat。或者阿里的tengine，它也能够合并前端请求
2.缓存 
3.请求数，资源供给，请求分流 
4.压缩传输 
5.读写分离
6.promise.all([两个或者三个请求],[两个或者三个请求])
7. createDocumentFragment | async 和 defer | temple
8. requestIdleCallback：
16ms之后requestIdleCallback 里注册的任务。
```

### 2.1.53 有DTD document.documentElement | 无document.body



### 2.1.54 栈(容器)  | 堆(房间) |  闭包原理 | 最大堆 | 最小堆

https://www.zhihu.com/question/482433315/answer/2083349992

```js
堆类似于树，最大堆就是顶点是最大的。最小堆就是顶点是最小的

--1.定义
v8默认的栈区大小为984KB
注意：在不同时期，不同操作系统中V8对于字符串大小的限制并不相同。大概有个范围是256MiB ～ 1GiB

栈像个容器，容量小速度快(基本类型)
堆像个房间，容量较大(引用类型),但是引用类型的引用（变量）还是存在栈内存中的

通过引用到堆中查找实际对象

--2.为什么 引用对象放在堆里面。基本数据类型放在栈里面？
栈是占用固定空间，先进后出。在变量使用完成后就可以将其释放，内存回收容易实现。
堆是动态分配内存。先进先出。只有引用他的变量不存在的时候才会被垃圾机制回收

--3.既然引用对象放在堆里面。基本数据类型放在栈里面？那么针对于太大的基本字符串，js引擎会怎么做？

在栈内存不下，只能存在字符串常量池中，如果是 let a = "78" 的形式.那么就是在栈中 的变量进行引用。如果是 let a =new String("78") 那么就会在堆中进行引用

注意一下特例：字符串的缓存：v8内部有一个名为stringTable的hashmap会缓存所有字符串。会根据其特征换算为一个hash值，通过hash的key比对来实现缓存。如果不存在我们才会存到长两次然后把地址付给变量。这也是V8中的字符串都是不可变的原因

字符串拼接做了哪些操作？
这里如果内容相同，地址就会不一样。这一点注意一下

--4.数字的分配和内存改变的机制：
42 会被当成Smi
数字在V8中分为 smi 和 heapNumber：heapNumber 类似字符串 不可变

--5.总结
数字： 小整数存在栈中，其他类型存在堆中。
字符串： 存在堆里，栈中为引用地址，如果存在相同字符串，则引用地址相同。
boolean 在栈中


js engine 是c 开发的。栈区（stack） 由编译器自动分配释放。堆区（heap）一般由程序员分配释放，使用 malloc 或 new 等。偏偏 不再经过 C/C++ 编译器编译，具体 JS 变量类型，也被拆分为具体实现 Engine 的Native Code 变量类型


```







```js
闭包原理
--1.外层函数作用于对象能保留下来是因为被内层函数对象的作用域引用者，无法释放。

--2.能访问上级函数作用域中的变量（哪怕上级函数上下文已经销毁）
```





















### 2.1.57 fragment

```js
可以把他当作一个虚拟dom。
const fragment = document.createDocumentFragment()
let temp  = document.createElement("div").innrtHTML = 56
fragment.appendChild(fragment)
document.body.append(fragment)

```



### 2.1.58 浏览器一帧内做了什么

```js
input events(click 之类的)
js
begin frame
RAF（RequestAnimationFrame）
layout
paint
RIC (RequestIdelCallback)：这一个只有一帧小于16ms 才会执行

```





### 2.1.59 settimeout 和 setinterval的第三个参数



```js
//第三个以后的参数是作为第一个func()的参数传进去。
for ( var i=1; i<=5; i++) {
	    setTimeout((j)=> {
	        console.log( j );
	    }, i*1000 ,i);
}

这样写就错了
```





### 2.1.60 锚点导航 | scrollIntoView



```js
document.querySelector("#comment > div > div.comment > div > div.comment-list > div:nth-child(2) > div.con > p").scrollIntoView({
    behavior:"smooth",// 平滑过渡
    block:"start", //垂直方向的对齐
    inline:"start"
})
```



### 2.1.61 控制光标位置 |  setSelectionRange

```js
<input type="text" name="" id="text" placeholder="请输入">
    <script>
        document.querySelector("#text").focus()
        document.querySelector("#text").setSelectionRange(0,0)
    </script>
```





### 2.1.62 画中画  |   PictureInPicture

```js
document.querySelector(".xx").addEventListener('enterpirtureinpirture',()=>{
    
})

document.querySelector(".xx").addEventListener('leavepirtureinpirture',()=>{
    
})

if(document.querySelector(".xx")!==pictureInPictureElement){
    await  document.querySelector(".xx").requestPictureInPicture((res)=>{})
}
```





### 2.1.63 xhr 发送 | new open send onreadystatechange

```js
let ajax = (data,url)=>{
    //step1 : 设置请求头
    let xhr = new XMLHttpRequest(); 
    //step2：设置请求方式和请求头 //true表示异步
	xhr.open("POST", url, true);   
    xhr.setRequestHeader("Content-type", "application/json");
    //step3：请求数据
    xhr.send(data);
     // step4：readyState是xhr的请求状态
     //状态4表示已发送请求，服务器已完成返回响应，浏览器已完成了下载响应内容。0-4都有值的
    xhr.onreadystatechange = function() {
     
      if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr.responseText);
      }
  };
}



```



### 2.1.64 prototype | 函数扩展 | 可以扩展字符串

```js
let arr = [ 9,3,11,6]
Array.prototype.max =function (param){
    console.log(this) //[ 9,3,11,6]
    return this.sort()[0]
}
arr.max()
```



### 2.1.65 数据埋点 | 用户 | 性能(白屏 渲染时间)

```js
--1.数据监控
--1.1 PV
--1.2 监听页面进入（load） 和 页面离开（pagehide 和 hashchange）。window.addEventListener('hashchange')
--1.3 用户行为

--2.性能监控
--2.1 首屏加载时间
--2.2 白屏时间
--2.3 页面渲染时间
--2.4 页面交互动画完成时间
--2.5 静态资源整体下载时间
--2.6 http 请求

--3.异常监控
--3.1 Javascript的异常监控
--3.2 样式丢失的异常监控
```

### 2.1.66 剪切板

```js
--1.
navigator.clipboard.writeText("dsa")
    .then(() => alert("复制成功！"));
    //如果我们想直接使用会报错
--2.
创造一个文本域
oInput.select();
    
    document.execCommand("Copy");
    //对选择对象的值进行复制到浏览器中
```







### 2.1.67 事件冒泡

指的是在设置了事件监听器时候，会顺着dom树的结构，向上执行

```html
<div id="div1">
  div1
  <div id="div2">
    div2
    <div id="div3">div3</div>
  </div>
</div>;

// javascript:
<body>
function handleClick(event) {
  console.log(event.currentTarget.id);
}
for (let i = 1; i <= 3; i++) {
  let div = document.getElementById(`div${i}`);
  div.addEventListener("click", handleClick);
}
</body>
    
<!-- 我们再点击在里面的div3的时候，会输出div3 div2 div1-->
 <!-- 如果说要避免这一个情况可以


function handleClick(event) {
  event.stopPropagation();
  console.log(event.currentTarget.id);
}

-->
event.stopPropagation(); 
```





### 2.1.69 length  | bug | 码元是小一点 | substring bug

```js
一些 emoji 的东西的length 可能会有一点不一样

原因在于 length 的 码点 和 码元

我们将一个16/32位的二进制编码 叫做一个码元，一个码点 可以是 一个码元 也可以是两个码元. length 属性 返回的是 码元（小）

正确的方式是Array.from("xx").length
```



### 2.1.70 class 内 | 私有字段 | 静态变量 | 类静态初始化

```js
--1.私有字段
以前是加一个_
_myName(){

}

现在可以命名成
#myName(){

}
在外面就不可以直接调用


--2.static 的 作用
class Person {
  /* 1.1、实例属性，直接定义的属性，要new实例后，实例去访问的*/
  name= "tom";
  /* 1.2、静态属性（类属性），通过static开头的属性，Person类可以访问,
    不需要创建实例，实例访问不到static */
  static height = 180;
  /* 1.3、只读属性，readonly开头的属性，只可读，不可改 ts才能用 */ 
  //readonly money= 1000;
  /* 1.4、方法，readonly开头的属性，只可读，不可改*/
  say(){
      console.log('hello world');    
  }
  static work(){
      console.log('我能挣钱');    
  }
}

console.log(new Person().height)
--3.类静态初始化

例如
class person {
    static age =1.2
}
可以变成
class person {
    static{
        this.age = 1.2
    }
}
```



### 2.1.71 worker | 优化

```js
worker.js中 
接收 worker 并且进行 事件逻辑处理

onmessage = function (e) {
    let sortData = e.data.sort((a,b)=>{
        return a-b
    })
    postMessage(sortData)
}

index.html 中
let worker = new Worker("worker.js")
let arr = [1,3,4,34,2]

worker.postMessage(arr)
worker.onmessage= function (e){
    console.log(e.data)
}


```





### 2.1.72 遍历 object | set | array | map 删除元素  | ,map 删除元素也是这样

边遍历 边删除元素

```ts
遍历Object | array | set | map 时删除元素,那么就直接删掉了
const myObject = { a: 1, b: 2, c: 3 };
for (const key in myObject) {
  if (myObject[key] === 2) {
    delete myObject["c"]; 
  }
  console.log(key, myObject[key]); 
}

// 输出 a 1 | b 2

const mySet = new Set([1, 2, 3, 4]);
for (const item of mySet) {
  if (item === 2) {
    mySet.delete(1); 
  }
  console.log(item); 
};
console.log(mySet) // 2 3 4
```



```ts
const a = [1,5,6,9]
let b =a.map((e,index)=>{
    delete a[index]
    return index
})
```



```ts
let ac =  [5,4,9];
for (const key in ac) {
  if (ac[key] === 4) {
    delete ac[0]; 
  }
  console.log(key, ac[key],ac); 
}
```



### 2.1.73 空数组用every或some会返回什么

```js
every 是 true // 所有元素满足
some 是 false // 有一个元素满足测试函数
```



### 2.1.74  for 和 foreach 的 异步处理

- 在forEach中，异步方法不会阻塞循环本身的执行，而是会在后台异步执行。用 return 可以实现 continue的效果
- 而在for循环中，异步方法如果使用await等待异步操作完成，会导致循环会等待每个异步任务完成后再继续执行下一次循环迭代

```js
总结：forEach循环和for循环对于异步方法的处理有一些区别。。所以，如果你需要保证异步方法按顺序执行，可以使用for循环，并在异步方法内使用await等待异步操作的完成。
```











### 2.1.76 路由原理

```ts
hashrouter中存放两个状态  一个是hash一个是push方法。push方法就是提供给其他组件进行调用。其实原理就是window..location.hash＝xxxx，然后监听hashchange状态，在状态改变的时候给状态赋值，然后内部给一个createcontext，里面是在路由文件中定义的组件  {{props.child}}。  用provider渲染


route 里面存放 路径，是否匹配 和路由文件三个。这里面其实是一个消费者

link 是一个其实调用了第一个的push方法。也是一个消费者，comsumer

而默认404路由是通过一个switchjs匹配不到其他的组件才会匹配一个默认的


history{
pathname
push 方法
}
queue数组
browerroute的区别在于 这是通过window.location.pushstate.然后多添加了一个queqe方法来做。window.addeventlistener  的popstate方法
```





### 2.1.77 异步数组循环 | 阻塞 



```js
刚刚发现了一个东西，map，reduce，forEach,map中用异步函数加上async await都不会阻塞，只有for，for...in,for...of加上async await能够阻塞

示例
async function asyncFunc(data:any) {
    return new Promise(async(resolve) => {
        setTimeout(() => {
            console.log(data)
            resolve(data);
        }, Math.random() * 1000);
    });
}
const array = [1, 2, 3];

// 这样子 不会按照顺序输出
// array.map(async (item) => {
// const result = await asyncFunc(item);
//     // console.log(result);
//     return result
// });

// for循环 获取.也不能按顺序输出，但是可以把集合 合起来
// console.log(await Promise.all(array.map(async(e,i)=>{
//     return await asyncFunc(i)
// })))

for(let i of array){
     await asyncFunc(i);
}

console.log("dssds")


```



### 2.1.78  短路运算符 和 ??

 ```js
一般来说，只会用 || 来进行默认值
像是 obj.a.b.c.d 比较危险 我们就可以 obj.a && obj.a.b && obj.a.b.c.可选链也可以

在 xx && yy  表达式中，只有当 xx 是真值时，yy 才会被执行，否则不会执行 yy 并且该表达式的结果为 串联
在 xx || yy 表达式中，只有当 xx 是假值时，yy 才会被执行，否则不会执行 yy 并且该表达式的结果为 并联

实例：
console.log("" && 'str1');  // 输出 "" 
console.log("" || 'str1');  // 输出第二个。这个做空值表达式不错,可以用 不是正值的默认情况，比如后端返回 '' 的时候。玩不了一点
注意 ?? 不能用来随便来做 空值表达式 因为 ?? 只对 undefined 和 null 生效 像是 0 '' 是不会生效的  // 可以用来做一个变量的默认值
 ```





### 2.1.80  encodeURIComponent | decodeURIComponent

```ts
encodeURIComponent 和 decodeURIComponent 方法主要用于处理 URI 字符串中的特殊字符，比如 %、+ 等。这些特殊字符在传输中需要进行转义，否则会造成意想不到的错误，而这些方法的作用就是对这些特殊字符进行编码和解码。

例如，当我们想要传输如下的URI查询字符串时：

foo=hello&bar=world!
如果直接将这个查询字符串作为URI传输，服务器就会将!解析成分隔符，导致查询参数读取错误。此时，我们需要对查询字符串进行编码操作，将其中的特殊字符转义为URI安全的字符，才能正确地传输和解析查询参数。使用 encodeURIComponent 方法可以将以上查询字符串编码为：

foo=hello&bar=world%21
其中，!被编码为 %21，以确保它不会被服务器解析成分隔符。在URL传输过程中，这些字符的编码和解码是非常重要的，否则可能会导致数据传输的错误或安全问题。
```





### 2.1.81   cjs、esm、umd的区别

- cjs：commonjs` 是 Node 中的模块规范，通过 `require` 及 `exports进行导入导出 (进一步延伸的话，`module.exports` 属于 `commonjs2`)。webpack 也对 `cjs` 模块得以解析，但不能在浏览器中*直接*使用。但如果你写前端项目在 webpack 中，也可以理解为它在浏览器和 Node 都支持。这就也是了很多时候我们cdn引入的时候报错的原因
- esm：`esm` 是 tc39 对于 ESMAScript 的模块话规范，正因是语言层规范，**因此在 Node 及 浏览器中均会支持**，使用 `import/export` 进行模块导入导出.。esm比cjs好很多的。esm 是编译时加载，输出的是值的引用 。cjs 模块是运行时加载，cjs 模块输出的是一个值的拷贝
- umd：兼容cjs和esm都可以





### 2.1.82 intl

- 目前来看 国际化复数不是很好用

- 他的时间格式化还可以

  ```TS
  const rtf1 = new Intl.RelativeTimeFormat('pinyun', { style: 'short' });
  console.log(rtf1.format(3, 'quarter'));
  console.log(rtf1.formatToParts(100, "day"));
  
  
  
  // const date = Date.UTC(2012, 11, 17, 3, 0, 42);
  // const date = new Date(2023, 09, 25).getTime()
  const date = new Date().getTime()
  const formatter = new Intl.DateTimeFormat("pinyin", {
    // 可能表示的值有2个 `long` 和 `short`.前者表现为 Thursday，后者表现为 Thu
    weekday: "long",
    // 可能表示的值有2个 `numeric `和 `2-digit`。 前者表现为 1，后者表现为 01
    year: "numeric",
     // 可能表示的值有5个 `numeric `和 `2-digit` 和 `long` 和 `short`  和 `narrow`， `narrow` 表示marth为 M
    month: "numeric",
     // 可能的值有2个 "numeric" 和  `2-digit`
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    fractionalSecondDigits: 3,
    hour12: true,
  });
  
  console.log(formatter.format(date))
  console.log(formatter.formatToParts(date))
  
  
  ```

  

- 字符串比较可以用

  ```ts
  const arr = ['武汉', '北京', '上海', '天津'];
  const resultArray = arr.sort((item1, item2) => {
      let flag = new Intl.Collator("pinyin",{ sensitivity: "base" }).compare(item1, item2)
      let TrueFlag =  item1.localeCompare(item2, "zh")
      console.log(flag,TrueFlag)
      return flag
  } );
  ```

- listFormat不太行，不是很清楚他的应用场景

- Intl.Segmenter：很奇怪，用不了一点







### 2.1.83  Error cause

这个属性好像不生效，浪费我时间。吐槽一下，好像好多的无障碍属性也是这样

```ts
throw new Error("Connecting to database failed.", { cause: "datestinrh" });
```



### 2.1.84 JSBridge做了些什么

Native端和Web端的双向通信。Web调用Native端主要有两种方式，第一种是url schema。我们可以自定义JSBridge通信的URL Schema（这种方式似乎在苹果有问题），比如：jsbridge://showToast?text=hello。如果符合我们自定义的URL Schema，对URL进行解析，拿到相关操作、操作，进而调用原生Native的方法。如果不符合我们自定义的URL Schema，我们直接转发，请求真正的服务











### 2.1.85 event.target 与 event.currentTarget 的区别

- event.target 是触发事件的元素
- event.currentTarget 是绑定事件的元素



### 2.1.86  stopPropagation VS stopImmediatePropagation



- stopPropagation 会阻止冒泡
- stopImmediatePropagation 不仅会阻止冒泡，还会阻止监听对目标元素的监听事件





### 2.1.87 node.js 原理

- 真正运行代码的是require里面的一个函数。函数里面有filename和dirname。这个函数可以用arguement
- 一开始的话。this.exports 等于this。等于exports。由于后来切分了，所以分开也可以







### 2.1.88 全屏

最佳实践:fullscreenchange` 事件和 `document.fullscreenElement

- 事件： fullscreenchange 和 fullscreenerror

  ```ts
  const isFullScreen = () => {
      return document.fullscreenEnabled
          || window.fullScreen
          || document.webkitIsFullScreen
          || document.msFullscreenEnabled;
  }
  
  ```

- 进入全屏

  ```ts
  /**
   * 全屏指定元素
   */
  function fullScreen(element) {
      const runfullScreen = element.requestFullscreen
          || element.mozRequestFullScreen
          || element.webkitRequestFullScreen
          || element.msRequestFullscreen;
  
      if (runfullScreen) runfullScreen.call(element);
      else {
          console.error('当前浏览器不支持部分全屏！');
      }
  }
  
  /**
   * 退出全屏
   */
  function exitFullScreen() {
      const runExit = document.exitFullscreen
          || document.mozCancelFullScreen
          || document.webkitExitFullscreen
          || document.msExitFullscreen;
  
      if (runExit) runExit.call(document);
      else {
          console.error('当前浏览器不支持退出全屏！');
      }
  }
  
  ```

  





#### 2.1.88.1 为什么有时候进入全屏了按 Ecs 会没用？

- 第一套就是我们刚才讲的，通过 web API 进入的全屏。此时 **可以通过 Esc 和 F11 退出全屏**，也可以通过 api 正常监听和退出全屏。
- 第二套则是浏览器级别的全屏，通过 F11（或右上角设置里的全屏按钮）进入的全屏。此时 **只能通过 F11 退出全屏。**

#### 2.1.88.2 全屏为什么黑屏

可能是下面的样式搞的鬼

```ts
:fullscreen
```

#### 2.1.88.3 弹出表单项被遮挡问题 

造成这个问题的原因是这些组件库实现弹出框的做法一般都是在 body 下创建对应的 dom 节点，而我们全屏了某个 body 下的 dom 元素后，这些弹出框的 dom 节点就被我们的全屏元素盖住了，自然就看不到了，那么怎么解决呢？

```ts
手动指定 全屏整个 Document，然后修改要展示的节点样式，让其覆盖住整个窗口：
```










## 2.2 数据结构





## 2.3 项目中js (工具)



### 2.3.1 js引入 css js

```js
//1.引入script
    const scriptInfo = document.createElement("script")
    scriptInfo.type = "text/javascript"
    // scriptInfo.setAttribute("data-callType","callScript")
    scriptInfo.src = "/js/1.js"
    document.head.appendChild(scriptInfo)

    //2.引入css
    setTimeout(() => {
        const cssInfo = document.createElement("link")
        cssInfo.rel = "stylesheet"
        cssInfo.type="text/css"
        cssInfo.href="/css/1.css"
        document.head.appendChild(cssInfo)
    }, 10);

    //删除
let callScript = document.querySelector("script[data-callType='callScript']")
document.head.removeChild(callScript)
```





### 2.3.2 禁止自动滑动

```js
 document.body.addEventListener('touchmove', function(e){
     e.preventDefault();
 }, { passive: false });  //passive 参数不能省略，用来兼容ios和android
```



### 2.3.3 canvas成图片

```js
//blob允许我们可以通过js直接操作二进制数据
      document.querySelector('.test').toBlob(function(blob) {
        var a = document.createElement("a");
        var body = document.getElementsByTagName("body");
        document.body.appendChild(a);
        a.download = "img" + ".jpg";
        a.href = window.URL.createObjectURL(blob);

        a.click();
        body.removeChild("a");
      });
```



### 2.3.4 iframe | postmessage

#### 2.3.4.1 利用iframe进行通讯



这里对src进行了一个参数的传参

```html
<h3>postmessage的协议测试：发送端</h3>
<iframe :src="'http://localhost:8082?getparam='+getparam" width="300px" height="300px" frameborder="0"></iframe>

```



```html
<h3>postmessage的协议测试：接收端</h3>
    {{receive}}
 this.receive=this.$route.query.getparam
```



#### 2.3.4.2 postMessage进行通讯



##### 子传父

例如子组件的按钮点击后传递给父组件

用vue用post有一个坑就是，他的webpack初始化的时候会先给自己发一个数据。导致data会是webpack报错。
如果说我们要实现postMessage只发一次，我们就要监听指定的窗口

子：

```js
//可以在method中，也可以在mount中
//最后一个是可以传过去的网址
parent.postMessage({msg:"这是发送过去的数据"}, '*')
```



父：

```js
//可以在method中，也可以在mount中
//http://localhost:8082是iframe的内容
// const publisher=window.open("http://localhost:8082/")
//父目前的情况
<iframe :src="'http://localhost:8082?getparam='+getparam" width="300px" height="300px" frameborder="0"></iframe>

//子传父的情况
window.addEventListener("message", (event)=>{
    var origin = event.origin;
    console.log(origin)
    // 通常，onmessage()事件处理程序应当首先检测其中的origin属性，忽略来自未知源的消息
    // 不然的话webpack会先给他发一个包
    if (origin !== "http://localhost:8082"){
       return;
    }
	console.log(event,"postmessage")
    //false就是冒泡事件，从里到外
}, false);

```







##### 父传子

父：

```js
 //html中的东西
<iframe
      :src="'http://localhost:8082?getparam=' + getparam"
      width="300px"
      height="300px"
      frameborder="0"
      id="iframeViewer"
    ></iframe>


const _iframe = document.getElementById("iframeViewer").contentWindow;
    const iframeViewer = document.getElementById("iframeViewer");
    let _obj = "父传子的数据";
    // _obj.type = "view";
    // _obj.currentProcessInstanceId =1;

    iframeViewer.onload = () => {
      console.log("iframeViewer已加载");
      _iframe.postMessage((_obj), "*");
    };



```



子：

```js
window.addEventListener("message", function (event) {
      if(event.origin=='http://localhost:8081'){
        console.log(event)
      }
});
```











## 2.4 webgl

### 2.4.1 webgl基础

```js
类型数据和array的联系:类型数组不等于array。类型数组提升了数组的性能。array的内部实现是链表，因此元素多的话性能会比较差(这里主要指的是访问)。类型数组是连续的内存实现的数据类型，通过加法可以实现访问，array则是一个个查找

类型数组:实现是缓冲(arraybuffer 内存中的二进制数据。可以简单地理解为数据)+视图(int8array u的意思是有符号的正数范围增大，没有负数 uint8array uint16array float32array将缓冲中的数据读取和访问出来，可以简单地理解为数据转化器)。缓存包括视图

类型数组常用方法:get(index) set(index，value) length 不支持push pop。唯一的创造方法是
let a=new int8array([1，1，1])
```



### 2.4.2 实操

总结起来四个步骤：

```js
1，initwebgl（初始化webgl） 
2，initshader(初始化着色器)
3，initbuffer（创造buffer对象）
4，draw
```



主要api：

webgl的移动主要是向量的知识
1，shadersource的第二个参数的字符串定义一下angle旋转角度
2，在initbuffer中对angle进行赋值。通过webgl.uniformif(angle，pi/180)

```js
1。初始化
第一步：查找元素
第二步:这个元素getcontext("canvas")，获取上下文 
第三步:初始化画布，xx.viewport(左上角的x坐标，y坐标，clientwidth，clientheight)


2.着色器(顶点着色器(计算坐标+一部分颜色)。片元着色器(最终颜色，纹理))
#创造shader
createshader
#链接shader。这里的第二个参数是void main开头的源码，还挺难的。有点像c的代码
shadersource
#编译shader
compileshader
#创造程序
createprogram
#shader绑定到程序里面
attachprogram
#webgl跟program链接
linkprogram
#使用program
useprogram




3，创造buffer(圈一块地)
#顶点数据
let a=new int8array([1，1，1])
然后这个画布.createbuffer()
#绑定缓冲区对象
这个画布.bindbuffer
#绑定缓冲区数据
这个画布.binddata
#允许传递，允许传递给shader(cpu渲染管线)。之后调用显卡
enableverrexattrbarray
#传递给位置变量 shader和js做通信
这个画布.vertexattribpointer


4，最后绘制就可以了
drawarray


```







接口：/wechat_api/auth/getOpenidStatus 

猜测原因：边界处理异常

```json
这个接口返回结果如下
let res = {
    WeiVi: "XJW ♥ ZJY 2021.10.27 - Forever.", 
 	code: 0, 
 	data: {}, 
 	msg: "尚未完善手机号注册"
}

前端在这个接口后面执行
if (res.code == 0){
        this.setData({
        openid: res.data.openid,
        newuser: true,
        token: res.data.token
	})
}

这导致后续/wechat_api/auth/openidRegister接口的openid和token参数传参为空。才报错参数有误后跳转回主界面

solution：
手机号注册没有完善的时候正常返回openid和token
或者
在openidRegister增加对于openid和token为空的处理
```





## 2.5 js工程化概述

```js
--1 工程化工具.js,rollup gulp
--2.模块化：es6 
--3.兼容：
--3.1 polyfill：
@babel/preset-env + corejs@3
--3.2 runtime：
@babel/preset-env + @babel/runtime-corejs3 + @babel/plugin-transform-runtime
```





## 2.7 tc39 会议

```js
--0.
ECMA：一个组织
TC39:ECMA下面的技术委员会
stage0（strawman）:任何TC39的成员都可以提交。
stage1（proposal），进入此阶段就意味着这一提案被认为是正式的了，需要对此提案的场景与API进行详尽的描述。
一共是0-4 . 5个阶段。 到达最后一个阶段就进行发布了
常用的 
--0.1 Top-level await（stage 4）：支持最顶层使用await
--0.2 Temporal（stage 3）：时间处理函数标准化 函数
--0.3（stage3） at ： 负索引
--0.4 Record & Tuple（stage2） ：Record类似于对象，Tuple类似于数组
--0.5 Decorators (stage 2)：装饰器
--0.6 Set Methods (stage 2)：基于交集/并集/差集创建新的Set的方法
--0.7 orient-error编程的一系列接口
--0.8 Pipeline Operator：管道操作符（|>） 如doubleNumber(number)会变为number |> doubleNumber的形式

1.作用域又叫做执行上下文，全局上下文就是window对象
2.6个基础数据类型:undefine number string boolean symbol  null。

2023/1
1.temporal时区的国际化支持
2.原型怎么用symbol防止污染
3.weakmap的key将支持用symbol表示
4.await置于顶层的推进，await将引入promise的一些特性方案的推进

2023/1之前

--0.1 Top-level await（stage 4）：支持最顶层使用await
--0.2 Temporal（stage 3）：时间处理函数标准化 函数
--0.3（stage3） at ： 负索引
--0.4 Record & Tuple（stage2） ：Record类似于对象，Tuple类似于数组
--0.5 Decorators (stage 2)：装饰器
--0.6 Set Methods (stage 2)：基于交集/并集/差集创建新的Set的方法
--0.7 orient-error编程的一系列接口
--0.8 Pipeline Operator：管道操作符（|>） 如doubleNumber(number)会变为number |> doubleNumber的形式

--0.9.throw Expressions (stage 2)
let x = throw new Error("Unsupported encoding");

--0.10.Promise.try  可以更加精确的捕获同步错误。
里面抛出的错误能够被捕获
function getUserNameById(id) {
    return Promise.try(function() {
        if (typeof id !== "number") {
            throw new Error("id must be a number");
        }
        return db.getUserById(id);
    }).then((user)=>{
        return user.name
});
}
--0.11.Error Cause

就是throw new Error('Upload job result failed', { cause: err });
然后 是使用 。相当于他会帮你自定义一个类型出来
try {
  await doJob();
} catch (e) {
  console.log(e);
  console.log('Caused by', e.cause);
}
// Error: Upload job result failed
// Caused by TypeError: Failed to fetch
```



