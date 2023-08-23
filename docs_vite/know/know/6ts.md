# 2.2. ts

[[toc]]

https://www.typescriptlang.org/play?#code/FAAhQ

## 2.1 基本

### 2.1.0 安装

```shell
npm install typescript -g  #这一步之后就可以执行  tsc test.ts 命令了
npm i -g ts-node
node xxx.js
```



### 2.1.1  typeof

```ts
let lolo = {
    id:2,
    school:{
        name:"beijing"
    }
}
// 这方法真的是神器 | 直接的实例就是这样
let typeType = typeof lolo["school"]
```





### 2.1.2  array | enum

```js
enum Color {Red = 1, Green, Blue} Color.Green;

--1.数组集合
// let paramArray:string[] =["1","6"] 
let paramArray: Array<string> = ["1", "6"]

--2.枚举
enum Color {Red = 1, Green=2, Blue=3} 
console.log(Color.Red)


```





### 2.1.3  联合类型 | 交叉类型 | 类型扩展

```js
// 1.联合类型  | ：为了保证安全 可以 if(type of xx){xxxxx} = 宽容度高 进行合并

// 常用实例1：不同类型
type unionType1 = "GET" | "POST" // 
let begin= (param:unionType1)=>{
}
这样在输入 begin("")就有类型提示了

// 常用实例2：合并 类型

type param1 = {
    id: number
    inform: string
}
type param2 = {
    id: never
}
// 这里同时声明了两个ID但是互相冲突也可以兼容，因为完全满足了一个
type aw = param1 | param2  
let anawer: aw = {
    id: 2,
    inform: "d"
}


// 2.交叉类型 & = 宽容度低 进行合并

常用实例1:
type param1 = {
    id: string
    inform: string
}
type param2 = {
    id: never
}
// 融合了但是报错
type aw = param1 & param2

常用实例2：
// 这里就 是 3
type ParamType1 = number & 3 
// 这里就 是 any。。。。这个类型特殊，单独记 
type ParamType2 = number & any 
// 这是就是 never 
type paramType = number & string 
// 如果是 object 字面量类型 ("xxx"或者boolean类型) 那么 & 整个 类型 都会变成never 。注意区分跟上面的属性变成never不同

```



### 2.1.4   interface | 对象 类型扩展

```typescript
// 对象简单一点直接 :object也可以
// 类型断言/接口
interface IUser {
    id:number,
    // 5.1表示这个变量可有可无（可选属性），不加？如果不加上name会报错
    // 5.2或者 使用的变量 加上 as Iuser(类型断言)
    name?: string,
    // 5.3只读属性(字面意思)
    readonly age:number;
    // 5.3只读属性(字面意思)
    callback1?:(admin:string) => string
}
//5.5函数 类型 （形参）
interface Ifunction{
    (source: string): void;
}
let ceshiFunction:Ifunction=(testParam)=>{
    console.log(testParam)
    return "dd"
}
// 1212
ceshiFunction("函数断言")
// 5.6 如果interface里面 想加入你的属性 ，就要用类型断言
let b:IUser = {
    id: 45,
    age:8,
    name1:12,
    callback1:(test:string):string=>{
        return test
    }
} as IUser ;
b.id=5
b.callback1=(admin)=>{
    console.log(admin)
    return admin
}
b.callback1("断言45454545")
// b.age=5
// console.log(b)


```







### 2.1.6  as   |  !  |  ？|  !! |  ??  | 

```ts
--1.as 非常简单这里不讲

--2.! 感叹号
function aa(value?:string){
    //加上 ! 的意思是确保value一定是有值的
    console.log(value!.length);
}
aa('ppp')；

--3.? 可选链操作符 
如果不存在的时候会直接返回undefined。如果存在会继续执行
xx?.length
--4. !!  | ??
!! 80  //输出true
?? 空值判断 //左边是空值就输出右边   例如   let a = "test";ss??'你好'
```



### 2.1.7 class

```ts
--1. 基础
另外声明了static后我们才可以 xx.xxxx进行属性的选择
class Car { 
    // 字段 
    engine:string; 
 	
    // 构造函数 
    constructor(engine:string) { 
        this.engine = engine 
    }  
 
    // 方法 
    disp():void { 
        console.log("发动机为 :   "+this.engine) 
    } 
}

--2. 继承 | super | instanceof
子类只能继承一个父类
class miniCar extends Car {
    disp:void{
        console.log("miniCar:  "+ this.engine)
        super.disp()
    }
}
console.log(new miniCar() instanceof miniCar)
```



### 2.1.8 declare | export

```js
.d.ts 文件中的顶级声明必须以 "declare" 或 "export" 修饰符开头。

"declare" 和 "export" 不要混用，不然declare 就没有导出的功能了

注意，如果在普通文件中，declare 直接写 跟不写用处差不多。简单来说他是用于 .d.ts 之类的全局类型的

1. 声明变量
declare var wx:any
像是 math json 都已经搞好了

2.声明后缀
declare module "*.css"{
    const css:string;
    export default css
}
// 这样子可以扩展原来的类型
declare module "*.css"{
    interface xx{
        
    }
}

```





### 2.1.9  extends（继承）|  implements（实现）

```js
--1.extends（继承）:
一个新的接口或者类,从父类或者接口继承所有的属性和方法,不可以重写属性,但可以重写方法
--2.implements（实现）:
实现，一个新的类，从父类或者接口实现所有的属性和方法，同时可以重写属性和方法，包含一些新的功能

所以说。extends 一般是 类之间的继承（大） 。  implement一般是类属性之间的共性，然后提取出来。implement 自由很多
```



### 2.1.11 enum妙用 | 状态码 

```ts
// enum 可以 Status.200 调用也可以 Status.Success调用
// 注意枚举也能够进行合并 enum Day{sunday} enum Day {monday} 会自动合并


let Day = {}
等于Day[Day["SUNDAY"] = 0] = "SUNDAY";
console.log(Day)
// 转化成 js 就是 Day[Day["SUNDAY"] = 0] = "SUNDAY"; 我们可以跟keyof typeof
常用实例1：状态码

enum Status {
    Success = 200,
    NotFound = 404,
    Error = 500
}
Status.Success // 200
Status[200] //Success


常用实例2：typeof 和 keyof 对比
// keyof 一个 enum 得到的是 字符串string的 原型方法
// typeof 就是 得到 他的key value 对(object 了欸行)
enum Status1 {
    Success =2,
    NotFound ,
    Error 
}
let te1 : typeof Status1 ={
    Success: Status1.Success,
    NotFound: Status1.NotFound,
    Error: Status1.Error
}

let te2 :keyof Status1 ="toString"

```

### 2.1.12.泛型 | 用于return

```ts
在type/index.ts中
interface DefaultOptons {
    // 接口地址
    requestUrl: string | undefined,
    // dom事件追踪
    domTracker: boolean,
    // sdk版本
    sdkVersion: string | number,
    // js的报错 | promise 报错
    jsError:boolean
}

另一个文件中


import {DefaultOptons} from "../types/index"
return <DefaultOptons>{
      sdkVersion: "1.0",
      domTracker: false,
      jsError: false
}

// 
function test1<T>(value: T): T {
    return value
}
let tes2=<T>(param:T):void=>{
}





```

### 2.1.13 assign 后面的object会覆盖掉前面相同object

```ts
let temp1 = {
	name:"xiaoming",
	number:5
}

let temp2 = {
	name:"xiaohone"
}
console.log(Object.assign(temp1,temp2))

{ 
    "name": "xiaohone",
    "number": 5
}
```











### 2.1.14. 泛型 | 返回值 | 工具函数



```ts
--1.基本约束（[]）
// function id<T>(value: T): T {return value}
function id<T>(value: T[]): T[] {return value}
// 调用泛型函数
//const num = id<number>(10)
const num = id<number>([10])


--2.自定义约束(extends + 可选 &)
interface Length {length: number}
interface Width {width:number}
function id<T extends Length & Width>(v: T) {return v.length+v.width}

--3.keyof object的type展开变成成员类型

interface Width {width:number;id:number}
function id<T extends keyof Width >(v: T) {return v}
id("id")
```



### 2.1.15. keyof  | 数组 | 对象

这玩意是展开一个的key，可以这样确定object 中一定有这个key

```ts
function getProperty<T extends object, K extends keyof T>(
  obj: T, key: K
) {
  return obj[key];
}

// 类似object.key()  获得key。例如 type user {id:number;name:number};type userkeys = keyof user ; 

// 常用用例1：变成type
interface objType1 {
    id: number,
    name:string
}

const test:keyof objType1 = "id"

// 常用用例2：变成object 的 key
// 那么我们 得到 userkey = "id" | "name" 
// 例如我们在object 的 key 发生了索引 报错
interface objType1 {
    id: number
}
// objFn<T extends objType1 , K extends keyof T>(param:T,key:objType)
function objFn(param: objType1, key: keyof objType1) {
    return param[key]
}
```





### 2.1.16.Record | 接口返回值

```ts
Record<Keys,Type>  Record用来定义对象的键和值

interface PageInfo {
	title: string
}

type Page = "home" | "about" | "contact";

const nav : Record< "code" | "message" , PageInfo> = {
	code: {title, "about"},
	message: {title, "home"},
};
```

### 2.1.17.索引签名 | [key : string]

```ts
[key: string]来约束接口中出现的实现名称，这样obj中可以出现任意多个属性

interface a{[key:string]:string}

```



### 2.1.18.映射类型 | in

 {[P in K]:T}  前者是for in 后者 是类型，并且你可以在 前面夹readonly 和 ? 修饰符 

```ts
type use = {
	name:string,
	id:number
}

把原来的 类型 映射成新的类型。例如上面的type 我要 都加上 readonly

{[p in keyof t] :t} // 前面的 p in k 是遍历key类型 所有 类型 ，t是任意类型。
有以下类型

type myxx<t> =  {readonly [p in k] :t}  
// {readonly [p in k] :t}  
// {[p in k] ?:t}   
// 进行扩展


基本实例如下下
type user = {
    id: number,
    name: string,

}
type myxx<t> = { 
    readonly [p in keyof t]: t[p] 
}  
type user_new = myxx<user>
let  data:user_new = {
    id:2,
    name:"d"
}
data.id=3  // 因为是readonly 所以会报错

```







### 2.1.19 描述方法

```ts
// 描述 方法
type fn = (x:number)=> void
interface fn {(x:number):void}
```





### 2.2.20 泛型 + keyof 



```ts
function hander<t extends obj,k extends keyof obj>(key:k,value:t)()
```







## 2.2 工具类型

### type 实现 工具类型

```ts
type Partial<t> = {
    [p in keyof t]?:t[p]
}

type Required<t> = {
    [p in keyof t]-?:t[p]
}


type Pick<t,k extends keyof t> = {
	[p in  k]:t[p]
}

type Record<k extends keyof any,t> = {
	[p in  k]:t
}

type Exclude<t,u> =t extends u ?never:t
```





### pick

```ts
1. pick 中 用的 是 <> 尖括号.从类型中 第一个参数 无所谓是什么 ，第二个参数是 keyof 第一个参数

1.1
type user = {
    id:number,
    name:string
}

type user_ = Pick<user, "id">

let test1:user_ = {
    id:2
}

```



### record

```ts
const user :Record<string | "name",string> = {
    name : "electrolux"
}

const user :Record<"name" | "qname",string> = {
    name : "electrolux",
    qname:"d"
}
```





### partial

```ts
Partial<> 这句话的意思是DefaultOptons 都变成 可选链？。相当是子集
//这句话的意思是 继承了DefaultOptons的所有属性，但是requestUrl必须传入
export interface Options extends Partial<DefaultOptons> {
    requestUrl: string,
}
```







## 2.2 进阶





### 2.2.1 原理

```js
--1.一个class 从 ts 编译成 js
--1.1 class 会变成 var 变量，然后 {} 整体会变成一个 class{}名字所组成的一个函数.constructor 会 和之前的声明合并
--1.2 class {} 里面的方法会挂在到原型prototype上面
--1.3 private 和 public 对编译后的代码没有任何影响
--1.4 
```









```js
--1. 函数组件
React.FC<unknown> = () => {}


--2. 忽略报错
// @ts-nocheck
忽略整一个文件的报错

--3.TABLE 没用等一下删掉

--4.useState<boolean>(false);

--5. 例如我们要下载 react-router 包 。我们可以npm install @types/xxxxx包，用这种方式可以解决变量缺失的情况

--6.常用类型
--6.1 array 类型   
const names2: string[] = [] // 推荐

--6.2 object 对象
interface Base {
    // 路由路径
    path: string;
    // 路由组件
    component?: any;
}
难一点，对象里面还有一个对象
export interface IRoute extends Base {
  children?: IRoute[];
}

--6.3  




```



### 2.2.3 一些可能出现的bug

```
.d.ts


tsconfig.json 引入后才有效
```





### 2.2.4 {id:1;name:{xx:23}}

```ts
interface user {
    id: number,
    name: string,
    data: {
        [key: string]: string | string[]
    }
}
let ob: user = {
    id: 2,
    name: "d",
    data: {
        IdleDeadline: "2"
    }
}
```



### 2.2.5  [{},{},{}]

```ts
type roleType = Array<{
  value:string,
  label:string
}>
```



### 2.2.6 window |  sdk 声明

```js
利用的是 interface 类型的合并特性

// 2.Window 类似的 像一些 sdk和引入的包 我们也可以这样用。
// 这里需要在 index.d.ts中  declare interface Window {a:any}
// 或者  declare namespace Window {a:any}
// window.a = 3
```







### 2.2.4 项目常用

```ts



document.querySelector(".src").focus();
document.querySelector(".src").innerText="d23232sa"
document.querySelector(".red-button").click()



// 0 . 可以像右边一样引入 ///  <reference path = "index.d.ts" />
///  <reference path = "index.d.ts" />

// 1.复杂一点的变量

// 3. 不同格式文件
// 这里需要在 index.d.ts中  declare module '*.png';
import A from "1.png"

// 4.命名空间 declare namespace API 
/**
 declare namespace API {
    interface Result {code?:number;message?:string; data:object
    }
 }
 */
let Result : API.Result = {
    code:200,
    data:{
    }
}

// 5. 函数的写法 declare function getName(params:string) :void
// getName()

// 6.类的写法  declare class test {id:number;static name ="test";constructor(param:number){this.id=param}}
// new test(2)

// 7. 一些奇怪的对象 declare function $(param:string):void
function $(){}

// 8.模块   这玩意 不适合 弄变量 第三方模块用吧
/**
 declare module abcd {
  export function abcdF(param:string):void
  export let id:number;
}
 */
module abc {
    export let id:number;
}
abc.id = 3
// 引入模块

// temp()
// console.log(temp)

// 9.umd 就是可以通过全局变量访问到，也可以通过require的方式访问到 
// 其实就是按照全局的方式写d.ts（modules），写完后在最后加上declare namespace "xxx"的描述：

//10.扩展内置对象 的 某一个 方法  
/**
  interface Array(){
    quickSort(arr:Array<number>):Array<number>
  }
 */


// 11.
list

```





### 2.2.5 写插件的一些思路



```ts
1.解决key的一些问题
// 解决key
interface ob {
    [key: string]: any
}

用的话就是 Partial<ob>就可以了

2.声明class 只用 
class speechBot {
    public speechProgress
    constructor(param:speechBotType ) {
        this.speechProgress = window.speechSynthesis
    }
} 

export default new speechBot({
    text: "测试",
})
这样就可以了

3.然后可以给用户一些默认的属性（主类方法中）
class Tracker {
    public data: DefaultOptons;
    public constructor(options: Options) {
        this.data = Object.assign(this.init(), options)
        this.installTrack()
    }
    //初始化默认参数
    private init(): DefaultOptons {
        return <DefaultOptons>{ 
            userConfig: {useId:"测试用户",mode:"plugin"},
            sdkVersion: TrackerConfig.version,
        }
    }
    //根据用户的选择在这里开启
    private installTrack() {
        if (this.data) {
            console.log("data:", this.data)
        }
    }
}


```





### 2.2.6 ref 

```ts
const backgroundRef = useRef<HTMLImageElement | null >(null);

ref={backgroundRef }
```





### 2.2.7 装饰器

```ts
// 基本
const MethodDecorator = (param:any)=>{
    return function (t:any,n:string,des:PropertyDescriptor){
        const func = des.value;
        des.value = ()=>{
            console.log(func()+10+param)
        }
    }
}

class demo {
    @MethodDecorator("nihao")
    add(){
        let a = 10
        return a
    }
}
let an  = new demo()
an.add() // ts-node xx.ts 然后 输出 20nihao






/**
 * 
 * @param {*} msg 
 * @param {*} options 
 * @returns 
 */

function errorHandle(msg: string, options: any) {
    return function (target: any, key: any, descriptor: any) {
        let fn = descriptor.value;
        descriptor.value = function (...args: any[]) {
           try{
               fn()
           }
            catch{
                console.log(msg,options)
            }
        }
    }
}

class test{
    @errorHandle("errorGet方法报错",{url:"index.ts中25行报错"})
    public  errorGet(){
        throw("哈哈哈哈哈")
    }
}
new test().errorGet()
```





## 2.3公用的一些utils ts

测试可以：tsc xxx.ts

### 2.3.1 eventbus

```js
class eventBus {
    eventBus:{
        [key:string]:any
    }
    constructor() {
        this.eventBus = {
            // 保存类型与回调的容器
            event: {
            }
        }
    }
    // 绑定事件
    on = (name:string, event:Function) => {
        this.eventBus.event[name]=event
    };
    // 触发事件
    emit = (name:string, data:any) => {
        // 判断
        if (this.eventBus.event[name] ) {
            this.eventBus.event[name](data)
        }
    }

    // 事件解绑
    off = (eventName:string) => {
        // 若传入了 eventName
        if (this.eventBus.event.hasOwnProperty(eventName)) {
            // 只是删除对应的事件回调
            delete this.eventBus.event[eventName];
        } else {
            this.eventBus.event = {};
        }
    }
    say = ()=>{
        console.log(this.eventBus)
    }
}
let eventbus = new eventBus()
export {eventbus}

// 使用类似于
父文件中
eventbus.on("测试", (data: string) => {
    console.log("触发了该死的事件:" + data)
})

子文件中
import {eventbus} from "./eventBus"
eventbus.emit("测试",type)   

```





### 2.3.2  cache

工程化中最好是新建一个cache文件夹，然后里面放上自己的文件

```ts
class Cache {
    cacheData: {
        [key: string]: Array<object>
    }
    constructor() {
        this.cacheData = {
        }
    }
    set(name: string, item: any) {
        this.cacheData[name] = item
    }
    get(name: string) {
        const res = this.cacheData[name]
        return res
    }
    delete(name: string) {
        Reflect.deleteProperty(this.cacheData, name);
    }
    add(name: string, data: object) {
        if (this.cacheData[name]) {
            this.cacheData[name].push(data)
        }else{
            this.cacheData[name] = []
            this.cacheData[name].push(data)
        }
    }
}

export default new Cache()
```



### 2.3.3 error

```ts

import cache from "./cache"

interface baseConfig {
    logConfig: {
        isLog: boolean
    }
}
interface errMsgConfig {
    code: number
    msg: string
    data: object
    date:string
}
class errLog {
    public baseConfig : baseConfig
    constructor(param: baseConfig) {
        this.baseConfig = Object.assign(this.init(), param)
    }
    private init(): baseConfig {
        return <baseConfig>{
            logConfig: {
                isLog: true,
            }
        }
    }
    public errLogGet() {
        return cache.get("errorLog")
    }
    public errLogAdd(param: errMsgConfig) {
        param.date=""+""+new Date().getFullYear()+new Date().getMonth()+new Date().getDay()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()
        cache.add("errorLog",param)
        return cache.get("errorLog")
    }
   
}

export default new errLog({
    logConfig:{
        isLog:true, 
    }
}) 
```



### 2.3.4  speakbot

```ts
/**
 let ceshi = new speechBot({
    text: "测试",
    pitch: 1,
    rate: 1,
    volume: 20,
    lang: 'zh-CN'
})
ceshi.speak("ddddddddd33")
ceshi.cancel()
 */

interface speechBotType  {
    text:string,
    pitch:number,
    rate:number,
    volume:number,
    lang:string
}
class speechBot {
    public speechProgress
    public speechApi
    constructor(param:speechBotType ) {
        this.speechProgress = window.speechSynthesis
        this.speechApi = new SpeechSynthesisUtterance()
        this.speechApi.text = param.text ?? "没传入文本"
        this.speechApi.rate = param.rate ?? 1
        this.speechApi.volume = param.volume ?? 1
        this.speechApi.lang = param.lang ?? "zh-CN"
        this.speechApi.pitch = param.pitch ?? 1.5
 
    }
    speak = function (text:string) {
        // console.log(text,this.speechProgress)
        this.speechApi.text = text
        this.speechProgress.speak(this.speechApi)
    }
    pause = function () {
        this.speechProgress.pause()
    }
    resume = function () {
        // 暂停和非暂停切换
        this.speechProgress.resume()
    }
    cancel = function () {
        // 删除所有话语
        this.speechProgress.cancel()
    }
    configGet = function () {
        // console.log(this.speechProgress.getVoices())
    }
}

export default new speechBot({
    text: "测试",
    pitch: 1,
    rate: 1,
    volume: 20,
    lang: 'zh-CN'
})


```

### 2.3.5  listenerbot

```ts
class listener {
    constructor(param) {
        this.config = {
            beginText: "小圆",
            endText: "结束",
            aliveTime: 3
        }
        this.text = ""
        this.speechRecognition = new webkitSpeechRecognition({
            lang:"cmn-Hans-CN"
        })
        let that =this
        this.speechRecognition.onaudiostart = (event) => {
            console.log(`onsoundstart: `,event);

        };
        this.speechRecognition.onaudioend = (event) => {
            console.log(`onsoundend:`,event);
            setTimeout(()=>{
                that.start()
            },3500)
        };
        this.speechRecognition.onerror = (event) => {
            console.log(`报错信息: ${event.error}`);
            setTimeout(()=>{
                that.start()
            },3500)
        };
    }
    start() {
        console.log("begin");
        this.speechRecognition.start()
        this.speechRecognition.onresult = function (event) {
            let results = event.results
            console.log(results)
            if (results.length > 0) {
                for (var i = 0; i < results.length; i++) {
                    this.text = results[i][0].transcript
                    console.log(this.text)
                    if(this.text.includes("你好")){
                        let utterance1 = new SpeechSynthesisUtterance("你好")
                        window.speechSynthesis.speak(utterance1)
                    }
                    // document.querySelector("textarea").innerHTML = text
                }
            }
        }
        this.speechRecognition.continuous = true
        // this.speechRecognition.start()
    }
    end() {
        console.log("end");
        this.speechRecognition.stop()

    }
    alive() {
        console.log("alive")
    }
}
new listener().start()
```







### 2.3.6 tdk

```ts
interface baseParam {
    title: string
    description: string
    keywords: string
    [key: string]: any
}
class tdk {
    public config: baseParam
    constructor(param: baseParam) {
        this.config = {
            title: "",
            keywords: "",
            description: "",
        }
        this.config.title = param?.title
        this.config.keywords = param?.keywords
        this.config.description = param?.description
        this.main()
    }
    main() {
        let keywords = document.querySelector("meta[name=keywords]")
        let title = document.querySelector("title")
        let description = document.querySelector("meta[name=description]")
        this.service("keywords", keywords)
        this.service("title", title)
        this.service("description", description)
    }
    service(key: string, element: Element | null) {
        if (key == "title") {
            element.innerHTML = this.config?.title
            return
        }
        let keywords = element
        if (keywords) {
            keywords.setAttribute("content", this.config[key])
        } else {
            let temp = document.createElement("meta")
            temp.setAttribute("name", "keywords")
            temp.setAttribute("content", this.config.keywords)
        }
    }
}

// export  default tdk
/**
 new tdk({
    title:"你好",
    keywords:"",
    description:"",
 })
 */
```



### 2.3.7 ajax

```ts
interface AjaxRequest {
    method: 'GET' | 'get' | 'POST' | 'post'
    url: string
    data?: any // post
}

interface AjaxResponse {
    [prop: string]: any
}
//注意是async 引用的时候可以await
async function ajax(options: AjaxRequest): Promise<AjaxResponse> {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const method = options.method.toUpperCase();

        if (method === 'GET') {
            xhr.open(method, options.url, true);
        }

        if (method === 'POST') {
            xhr.open(method, options.url, true);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.send(JSON.stringify(options.data));
        } else {//GET
            xhr.send();
        }

        xhr.onreadystatechange = () => {
            // xhr.readyState == 4 请求已完成，且响应已就绪
            if (xhr.readyState !== 4 || xhr.status === 0) return;
            const responseData: AjaxResponse = JSON.parse(xhr.response);
            // 当 readyState 等于 4 且status为 200 时，表示响应已就绪：
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(responseData);
            } else {
                reject(`request failed with status code ${xhr.status}`);
            }
        };
    });
}
/**
const result = await ajax({
    method: 'GET',
    url: 'http:localhost:10088/get?id=2',
    data: {
        // redirectURI
    }
});

console.log(result)
 */


```



## 2.4  项目中常用



### 2.4.1 返回值泛型



```ts
首先是定义类型
export interface Repo<T> {
  code: number | string;
  data: T;
  body?: T;
  message: string;
}
export interface UploadPolicy {
  formFields: string;
  headerFields: string[];
}


调用起来
return request<Repo<UploadPolicy>>(encryptionUrl, {
    baseURL: cgwUrl,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...header,
    },
    data,
  });
```





### 2.4.2  数据状态定义

```ts
一开始类似于这种
enum offConfigStatus {
  "未开始" = 1 ,
   "下架申请中",
}

```



后来像这样

const.ts 里面

```ts
import {
  AppStatusType,
} from '@/types/manageCenter.d';


export type AppOnlineLocal = 'online' | 'notOnline';
export const AppStatus: AppStatusType = {
  notOnline: '未上线',
  online: '已上线',
};


```

@/types/manageCenter.d 里面

```ts
type EnumTransType<T, type> = {
  [K in T]: type;
};
export enum AppStatusEnum {
  notOnline = 1,
  online,
}
export type AppStatusType = EnumTransType<keyof typeof AppStatusEnum, string>;

```

使用起来

```ts
AppStatus[
    AppStatusEnum[
        item.appStatus ?? 'notOnline'
    ] as AppOnlineLocal
]
    
AppStatus["online"] // 已上线
AppStatusEnum[item.appStatus??'notOnline'] //"online"
```





### 2.4.3 record 正确用法

```js
import type { UploadFile } from 'antd/es/upload/interface';

export type ConfigCategoryType =
  | 'appIcon'
  | 'appScreenShots'
  | 'copyrightCertificates'
  | 'uploadMultipart';

interface CategoryUnitType {
  accept: string[];
  maxCount: number;
  formatTitle: string;
  limit: (file: UploadFile<File>) => Promise<string>;
}

type ConfigType = Record<ConfigCategoryType, CategoryUnitType>;

```



















前者一旦确定了类型后会进行校验。后者永不校验。都是 top level

。

```
我们可以在赋值的时候 as unknown as xxx
```

















































## 2.5 区别



### 2.5.1 record 和 索引签名的区别

```ts
索引签名不能是字面量 和 泛型的 类型
```



### 2.5.2 type 和 interface 的 区别

```ts
type 可以 给 类型进行编程

相同点：
1.都支持扩展
type 通过 & 进行 扩展 , interface 通过 extends 进行扩展

不同点:
1.type 可以给 基本类型进行 类型重命名
2.interface 同名能够自动合并(这一点可以做很多事情)，type 会报错

例子：
declare module '工具' {
    export interface proto{
        foo:string 
    }
}





```



### 2.5.3 unknown 和 any  的区别

```ts
前者 能校验后者永不校验。所以前者一般是 as unknown as string
```









## 2.6 别人没有 ts 的  npm 包 打包



一般我们就是 要用 tsc 进行 初始化，现在 我们来讲一下大概的配置.





### 2.6.1 tsc 配置

```shell
npm install typescript -g
# 这行代码能够生成 tsconfig.json 文件
tsc --init 
```



### 2.6.2 tsconfig配置

https://www.tslang.cn/docs/handbook/compiler-options.html

```ts
第一行是我认为要的
注意：下面都包含在 "compilerOptions" 这个 数组里面
--1."skipLibCheck":true    默认值是false 
改成 true 忽略所有的声明文件（ *.d.ts）的类型检查

--2."forceConsistentCasingInFileNames": true   默认值是false
改成 true 禁止对同一个文件的不一致的引用

--3."isolatedModules": false,    默认值是false。 
如果改成 true 就必须要在每一个文件都要导出了

--4."noImplicitAny":true      默认值是false。 
改成 true 就 在表达式和声明上有隐含的 any类型时报错。但是如果是自己做项目的话，设置成false也可以

--5."strict":false 
alwaysStrict : 每一行加上 "use strict"
noImplicitAny: 有any 就会报错
strictNullChecks ： 不能用null 来赋值

--6.suppressImplicitAnyIndexErrors:true   索引签名缺失可能会报错
这里的配置我们可以参考下面
interface user {
    id:number,
    name:string,
    data:{
        //这个写法似乎只能在对象中用
        [key : string] : string | string[]
    }
}
let ob :user =  {
    id : 2,
    name : "d",
    data:{
	
    }
}


然后接下来的是根目录中经常用的东西
//**表示任意目录   *表示任意文件
// 指定需要编译文件 否则默认当前目录下除了exclude之外的所有.ts, .d.ts,.tsx 文件
"include": ["./test.ts"],
// 指定需要编译文件 否则默认当前目录下除了exclude之外的所有.ts, .d.ts,.tsx 文件
"files": ["./src/**/*"],
// 不编译某些文件
"exclude": ["test.ts"],


```





```js
{
    // 指定要使用的默认库，值为"es3","es5","es2015"...
    "target": "es2015", 
    "compilerOptions": {
        // 在生成模块代码时指定模块系统
        "module": "commonjs", 
        "experimentalDecorators": true,
        "compilerOptions": {
            // TS编译器在第一次编译之后会生成一个存储编译信息的文件，第二次编译会在第一次的基础上进行增量编译，可以提高编译的速度
            "incremental": true, 
             // 增量编译文件的存储位置
            "tsBuildInfoFile": "./buildFile", 
                // 打印诊断信息 
            "diagnostics": true, 
                // 目标语言的版本
            "target": "ES5", 
                 // 生成代码的模板标准
            "module": "CommonJS",
                // 将多个相互依赖的文件生成一个文件，可以用在AMD模块中，即开启时应设置"module": "AMD",
            "outFile": "./app.js", 
                // TS需要引用的库，即声明文件，es5 默认引用dom、es5、scripthost,如需要使用es的高级版本特性，通常都需要配置，如es8的数组新特性需要引入"ES2019.Array",
            "lib": ["DOM", "ES2015", "ScriptHost", "ES2019.Array"], 
                // 允许编译器编译JS，JSX文件
            "allowJS": true, 
                // 允许在JS文件中报错，通常与allowJS一起使用
            "checkJs": true, 
                 // 指定输出目录
            "outDir": "./dist",
                // 指定输出文件目录(用于输出)，用于控制输出目录结构
            "rootDir": "./", 
                // 生成声明文件，开启后会自动生成声明文件
            "declaration": true, 
                // 指定生成声明文件存放目录
            "declarationDir": "./file", 
                 // 只生成声明文件，而不会生成js文件
            "emitDeclarationOnly": true,
                // 生成目标文件的sourceMap文件
            "sourceMap": true, 
                // 生成目标文件的inline SourceMap，inline SourceMap会包含在生成的js文件中
            "inlineSourceMap": true, 
                // 为声明文件生成sourceMap
            "declarationMap": true, 
                // 声明文件目录，默认时node_modules/@types
            "typeRoots": [], 
                // 加载的声明文件包
            "types": [], 
                 // 删除注释 
            "removeComments":true,
                // 不输出文件,即编译后不会生成任何js文件
            "noEmit": true, 
                // 发送错误时不输出任何文件
            "noEmitOnError": true, 
                // 不生成helper函数，减小体积，需要额外安装，常配合importHelpers一起使用
            "noEmitHelpers": true, 
                // 通过tslib引入helper函数，文件必须是模块
            "importHelpers": true, 
                // 降级遍历器实现，如果目标源是es3/5，那么遍历器会有降级的实现
            "downlevelIteration": true, 
            "strict": true, // 开启所有严格的类型检查
            "alwaysStrict": true, // 在代码中注入'use strict'
            "noImplicitAny": true, // 不允许隐式的any类型
            "strictNullChecks": true, // 不允许把null、undefined赋值给其他类型的变量
            "strictFunctionTypes": true, // 不允许函数参数双向协变
            "strictPropertyInitialization": true, // 类的实例属性必须初始化
            "strictBindCallApply": true, // 严格的bind/call/apply检查
            "noImplicitThis": true, // 不允许this有隐式的any类型
            "noUnusedLocals": true, // 检查只声明、未使用的局部变量(只提示不报错)
            "noUnusedParameters": true, // 检查未使用的函数参数(只提示不报错)
            "noFallthroughCasesInSwitch": true, // 防止switch语句贯穿(即如果没有break语句后面不会执行)
            "noImplicitReturns": true, //每个分支都会有返回值
            "esModuleInterop": true, // 允许export=导出，由import from 导入
            "allowUmdGlobalAccess": true, // 允许在模块中全局变量的方式访问umd模块
            "moduleResolution": "node", // 模块解析策略，ts默认用node的解析策略，即相对的方式导入
            "baseUrl": "./", // 解析非相对模块的基地址，默认是当前目录
            "paths": { // 路径映射，相对于baseUrl
              // 如使用jq时不想使用默认版本，而需要手动指定版本，可进行如下配置
              "jquery": ["node_modules/jquery/dist/jquery.min.js"]
            },
            "rootDirs": ["src","out"], // 将多个目录放在一个虚拟目录下，用于运行时，即编译后引入文件的位置可能发生变化，这也设置可以虚拟src和out在同一个目录下，不用再去改变路径也不会报错
            "listEmittedFiles": true, // 打印输出文件
            "listFiles": true// 打印编译的文件(包括引用的声明文件)
          }
     
    },
    "exclude": [ // 要排除的文件
        "node_modules",
        "**/node_modules/*"
    ],
    "checkJs": false, // 启用javascript文件的类型检查
    "baseUrl": "*", // 解析非相关模块名称的基础目录
    "paths": {
        "utils": [
            "src/utils/*"
        ] // 指定相对于baseUrl选项计算的路径映射，使用webpack别名，智能感知路径
    },
}
```





最终 tsconfig.json 

```js
{
  "include":["types.ts"],
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    
    "target": "ES2020",                                  /* Set the JavaScript language version for emitted 
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
  	
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}

```











### 2.6.3  .d.ts

```ts
declare class Web3 {
  constructor(provider: { } | string);
  version: string;
  utils: any; // 这里你可以使用 any 类型或者具体的类型声明，具体根据实际情况
  eth: {
    getBalance(address: string): Promise<string>;
  };
  personal: {
    sign(message: string, address: string): Promise<string>
  };
  static givenProvider: any;
}
declare namespace Web3 {
}

// 如果使用 ES6 模块，还需要声明模块
declare module "web3" {
  export = Web3;
}
```







