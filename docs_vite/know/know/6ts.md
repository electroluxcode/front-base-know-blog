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





### 2.1.3  联合类型( | ) | 交叉类型(&)  | 类型扩展 | extends（继承）|  implements（实现）| 

```js
// 1.联合类型  | ：为了保证安全 可以 if(type of xx){xxxxx} = 宽容度高 进行合并
// 同类项

type param1 = {id: number,inform: string}
type param2 = {id: never}
// 这里同时声明了两个ID但是互相冲突也可以兼容，因为完全满足了一个
type aw = param1 | param2  
let anawer: aw = {id: 2,inform: "d"}
// 2.交叉类型 & = 宽容度低 进行合并
常用实例1:
type param1 = {id: string;inform: string}
type param2 = {id: never}
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


// 3.
--1.extends（继承）:
一个新的interface或者class,可以重写 interface 或者 class
--2.implements（实现）:
一个新的interface或者class,必须拥有所有 父类的值

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



### 2.1.12.映射类型 | in

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







### 2.1.19 方法 的类型

```ts
// 描述 方法
type fn = (x:number)=> void
interface fn {(x:number):void}
```







### 2.2.20 构造签名 | 构造函数类型







### 2.1.21 extends 

```ts
// extends 有点难度，泛型的时候会比较好用 | a 可以 给 b 分配 是 true
/**
 * @des 有三种含义 child extend parent
 * @des1 变量中直接用表示约束
 * @des2 变量外用表示扩展
 * @des3 条件类型： 继承xxx。不是可以代替的继承就是false。?可选链 也可以发挥作用。三元表达式 type A2 = 'x' | 'y' extends 'x' ? string : number; // number
 * @des3 分配条件类型：child 是一个泛型 + 联合类型 。会用分配率然后进行 合并 类型 type myexclude<all,item> =   all extends item ? never : all  // 防止条件判断中的分配 可以用 [ ] 框起来 type P<T> = [T] extends ['x'] ? string : number;
 */


type MyExclude<t,u> = t extends u ? never : t
type MyExcludeDemo = MyExclude<MyParam,"id">
```





其实在 一个 `怎么根据你的数据获取他的指定类型`这里，你就可以大概了解一点 extends 的知识

看本文章前，最好先把 extends 的分配律 和 一般类型 了解 一下。

我这里简单说明一下 extends 的作用 ，这个参数在类型体操大致有两种情况

- 第一种情况就是 普通的 情况。给一个代码示例 

  ```ts
  // number
  type A2 = 'x' | 'y' extends 'x' ? string : number; 
  // string
  type A2 = 'x' extends  'x' | 'y' ? string : number; 
  
  ```

  就是说 extends 后面的类型 需要 整个包住 第一个类型 那么 才是 true

- 第二种情况是这样 extends 前面的 类型 是  `泛型` + `联合类型 ` 的时候，那么 会用分配率然后进行 合并 类型.这里也简单举一个例子

  ```ts
  // type A3 = string | number
  type A2<t> = t extends 'x' ? string : number;
  type A3 = A2<'x' | 'y'>
  ```

  看到这个例子你就应该知道是什么情况了





### 2.1.22 装饰器

- target: any = 
- key: any
- descriptor: descriptor.value 可以获得 代理的方法

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



### 2.1.23  infer



#### 2.1.23.1 实现pop

- 除掉最后一个 元素 数组

  ```ts
  type MyPop<props> = props extends [...infer a,infer b ] ? a : never
  type getRefTest = MyPop<["id" , "test" , "name"]>
  ```

  

- 这里的数组转成联合类型。在后面添加 `[number]` 就可以了

  ```ts
  type MyPop<props> = props extends [...infer a,infer b ] ? a : never
  type getRefTest = MyPop<["id" , "test" , "name"]>[number]
  ```

  

原本就是联合类型的放弃了，什么人间疾苦







#### 2.1.23.2 实现trim

```ts
type MyTrim<t extends any> = t extends `' '${infer Back}`
? MyTrim<Back> : t;
```









#### 2.1.23.2

infer 

- 协变位置构建联合类型
- 逆变位置构建交叉类型

```ts
// 给object 加上
type MySetter<t> = {
    [k in keyof t as `M-${string & k}`]:any
}
// 给联合类型 加上
type MySetterUnion<t> = t extends any 
? `M-${string & t}` 
: any

type MySetterTest = "one" | "two" | "three"

let ba :DeepShowType<MySetter<MySetterTest  & {}>>
let bb :DeepShowType<MySetterUnion<MySetterTest  & {}>>


// 解绑infer 注意必须要在 extends 的 后面 
type revertData<t> = t extends `M-${infer res}` 
? res
: any

type revertType = DeepShowType<MySetter<MySetterTest  & {}>>
```



```ts
/**
 * @des 通过模式匹配的方式匹配
 * @think 为什么不用其他
 * 
 */
type getRef<props> =
    `refs` extends keyof props
    ? props extends { refs: infer Value | undefined }
        ? Value
        : never
    : never

type getRefTest = getRef<{
    id: 3,
    refs: "23"
}>


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

namespace 跟 module 是一个东西



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
```





### 2.2.4 {id:1;name:{xx:23}} 怎么声明

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





### 2.2.6 window |  sdk 声明

```js
利用的是 interface 类型的合并特性

// 2.Window 类似的 像一些 sdk和引入的包 我们也可以这样用。
// 这里需要在 index.d.ts中  declare interface Window {a:any}
// 或者  declare namespace Window {a:any}
// window.a = 3
```



### 2.2.5 写插件的一些思路 | 单例



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

















## 2.5 ts中易混淆的点



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







## 2.2 项目中怎么引入第三方模块 和 扩展类型

### 2.2.1 引入.d.ts

```html
<reference path = "index.d.ts" />
```



### 2.2.2 引入不同格式文件

```ts
declare module '*.png';
//import A from "1.png"
```



### 2.2.3 引用第三方包

例如阿里有一个ali-oss

```ts
declare module ali-oss {
  export function a(p:string):void
  export let id:number;
}
```





### 2.2.4 扩展 window | array | class | PromiseConstructor



- 扩展window对象

  ```ts
  declare global {
    const __APP_INFO__: string;
  }
  或者
  declare interface Window {
      a:any
  }
  ```

  

- 扩展 array 之类的类型

  ```ts
  interface Array(){  quickSort(arr:Array<number>):Array<number>
  }
  ```

  

- 扩展类

  ```ts
  class g {
      id?:number
  }
  interface ExtendedgData extends g {
      name:string
  }
  let u :ExtendedgData = {
      id:4,
      name:""
  }
  ```

- 扩展 Promise

  ```ts
  interface PromiseConstructor {
   
  }
  ```

  



## 2.3 怎么根据你的数据获取他的指定类型





















## 2.7 重要 | 实用工具类



### 2.7.3 替换某一个字符串

知识点

- infer

  

```ts
type MyReplace<origintext extends string,beforestr extends string,afterstr extends string> = 
    origintext extends `${infer first}${beforestr}${infer second}` ? 
    `${first}${afterstr}${second}` : 
origintext
```





### 2.7.4  如何封装一个函数实现 取出 指定的格式

```ts
type PropType<t, path extends string> =
path extends keyof t ? t[path] :
    path extends `${infer first}.${infer second}` ?
        first extends keyof t ?
        PropType<t[first], second> :
    unknown :
unknown 


let obj = {
    a:{
        b:{
            c:"ddd",
            d:5
        }
    },
    d:{
        e:""
    }
}
type getprop<t,p extends string> = PropType<t,p>
type test2 = getprop<typeof obj,"a.b">
```





### 2.7.5 怎么把你数据 所有 value合并成 联合类型

```ts
const test = {
	a:'1',
    d:{
        id:"3"
    }
} as const

type DeepValueSwitchType<t> = {
    [k in keyof t] :  t[k] extends object ? DeepValueSwitchType<t[k]> : t[k]
}[keyof t]

type e = DeepValueSwitchType<typeof test> 
```





### 2.7.6 把所有key 合并成联合 类型

```ts
const test = {
	a:'1',
    d:{
        id:"3"
    }
}

type DeepKeySwitchType<t> = {
    [k in keyof t] : t[k] extends object ? DeepKeySwitchType<t[k]> : k
}[keyof t]

type e = DeepKeySwitchType<typeof test> 
```



### 2.7.7  怎么把你数据里面递归的 添加/删掉 关于 可写/可选的属性

这一道题其实对应着四道道题目。但是只要理解了如何增加和删除其他的也就很容易弄懂了

- 怎么批量添加可写属性
- 怎么批量删掉可选属性
- 怎么批量添加可写属性
- 怎么批量删掉可选属性



我们可以先简单实现一个 单体去除 

```ts
type WriteOptionAble<t> = {
    [p in keyof t] ?: t[p]
    // [p in keyof t] -?: t[p]
    // -readonly [p in keyof t] : t[p]
    // -readonly [p in keyof t] : t[p]
}

```

然后我们 可以 判断当前的 数据 是不是 object ，如果是 object 我们就 进行递归

```ts
type WriteOptionAble<t> = {
    [p in keyof t] ?: t[p] extends object ? WriteOptionAble<t[p]> : t[p]
}
interface a {
    id:{
        name:number
    }
    name:number
}
type b =  WriteOptionAble<a>
```



### 2.7.8 符号连接

```ts
let obj = {
    a:{
        b:{
            c:"",
            d:""
        }
    },
    d:{
        e:""
    }
}


type Flatten<t,u extends any> = {
    [k in keyof t] : 
    t[k] extends object ?
        (
            u extends "" ? Flatten<t[k],`${string & k}`>
            : Flatten<t[k],`${string & u}.${string & k}`>
        ) :
    `${string & u}.${string & k}`
}[keyof t]

type flatcase = DeepShowType<Flatten<typeof obj,""> & {}>
let cd :flatcase= "a.b.c"
```





### 2.7.9 把可选类型 提取出来

```ts
type DeepShowType<t> = {
    [k in keyof t] : DeepShowType<t[k]>
} & {}
interface a {
    obj?:{
        id?:number;
        sex:boolean
    },
    name:string
}

type DeepOptionAble<t>= {
    [k in keyof t] : (t[k] | undefined) extends t[k] ? k : never
}[keyof t]
// type b = "obj" 
type b =  DeepShowType<DeepOptionAble<a>>
```





### 2.7.10 infer | 提取复原

这里的知识点是字面量类型。可以实现的功能是给我们的 object 自定义的加上前缀

简单举一个例子

```ts
type base = "left" | "right"
type union = `margin-${base}`

// type union = "margin-left" | "margin-right"
```



然后来实现我们的工具类

- 针对于object

  ```ts
  type GetterAble<t,str>={
      [k in  keyof t as `${string & str}${string & k}`] : t[k]
  }
  interface te{
      id:string
  }
  let ca :GetterAble<te,"getter-">
  ```

- 针对于interface

  ```ts
  type v= "id" | "test"
  
  type GetterAble<t extends string> = t extends any 
  ?  `m-${t}` : any
  
  type case4 = GetterAble<v>
  ```

  



提取

```ts
// fetch 出 getter
type test3 = "idddddd-getter"
type GetterFetchAble<t extends string,word extends string> =
t extends `${infer result}${word}` ? result : unknown

type test5 = GetterFetchAble<test3,"-getter">
```



















## 2.8 重要 | ts优化代码 





### 2.8.1 减少重复代码 | interface扩展

例如下面代码

```ts
interface Person {
  firstName: string;
  lastName: string;
}
```

我们有一个需求是要 合并interface 代码

- 可以用extends

- 也可以用 交叉运算符 &

  ```ts
  interface person{
      id:string;
  }
  type personEx = person & {
      name?:string
  }
  type DeepShowType<t> = {
      [k in keyof t] : t[k] extends object ? DeepShowType<t[k]> : t[k]
  } & {}
  
  let er :DeepShowType<personEx> = {
      id:"d"
  }
  
  ```

  







### 2.8.2   减少重复代码 | typeof快速匹配形状 + 更加准确的类型



```ts
let data = {
    id:1,
    name:{
        sex:"boy",
        date:new Date("1991-11-31")
    }
}
type personEx = typeof data
type DeepShowType<t> = {
    [k in keyof t] : t[k] extends object ? DeepShowType<t[k]> : t[k]
} & {}

let ez : DeepShowType<personEx>
let ea :DeepShowType<personEx["id"]>
```





### 2.8.3 智能提示优化 | 不同场景



```ts
interface RequestPending {
    state: "pending";
}

interface RequestSuccess {
    state: "ok";
    pageContent: string;
}

type RequestState = RequestPending | RequestSuccess;

interface State {
    currentPage: string;
    requests: { [page: string]: RequestState };
}
```



### 2.8.4 函数重载

```ts
function double(x: number): number;
function double(x: string): string;
function double(x: any) {
  return x + x;
}
```





### 2.8.5 状态定义





```ts
一开始类似于这种
enum offConfigStatus {
  "未开始" = 1 ,
   "下架申请中",
}

```































































