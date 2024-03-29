# 4.JS手写题

[[toc]]

## 4.1.debounce | thorttle

```js
/**
 * 
 * @param {*} fn 
 * @param {*} time 
 * @example 两个的示例是一样的 function a(){console.log("data")};let b=new debounce(a,1000);b()
 */
// 最后一次 input输入 防抖
function debounce(fn,time){
    window.flag =null;
    return function(){
        clearTimeout(window.flag)
        window.flag=setTimeout(()=>{
            fn()
        },time)
    }
}

// 第一次 滚动 节流
/**
 * 
 * @param {*} fn  方法
 * @param {*} time  时间
 * @returns 节流用于下拉加载
 */
function thorttle(fn,time){
    window.flag =null;
    return function(){
        if(!window.flag){
            window.flag =true;
            fn();
            setTimeout(()=>{
                window.flag =false;
            },time)
        }
    }
}
```



## 4.2.flat

```js

function flatten(arr) {
    var rets = [];
    for(var i = 0; i < arr.length; i ++) {
        if (Array.isArray(arr[i])) {
            rets = rets.concat(flatten(arr[i]));
        } else {
            rets.push(arr[i]);
        }
    }
    return rets;
}


```

## 4.3.curry 

```js
//不固定参数的
const curryObject = (fn) => {
    window.arr = []
    return function recursive(arguments) {
        // 返回一个函数,用这个函数接受后面传递的新参数
        return (newArgs) => {
            // window.arr=fn(...arguments.concat(newArgs))  不这样做object要糟糕
            let output = arguments.concat(newArgs)
            console.log(output,"output")
            window.arr=fn(output)
            // return recursive(...arguments.concat(newArgs));
            return recursive(arguments.concat(newArgs));
        };
    };
};

//固定参数的
 const curryArray = (fn) => {
    window.arr = []
    return function recursive(...arguments) {
        // 返回一个函数,用这个函数接受后面传递的新参数
        return (...newArgs) => {
            window.arr=fn(...arguments.concat(newArgs))
            // return recursive(...arguments.concat(newArgs));
            return recursive(...arguments.concat(newArgs));
        };
    };
};



function curry(fn) {
  // curriedFn 为柯里化生产的新函数
  // 为什么不使用匿名函数？因为如果传入参数 args.length 小于 fn 函数的形参个数 fn.length，需要重新递归
  return function curriedFn(...args) {
    if (args.length < fn.length){
      return function() {
        // 之前传入的参数都储存在 args 中
        // 新函数参入参数在 arguments，因为 arguments 并非真正的数组需要 Array.from() 转换成数组
        // 递归执行，重复之前的过程
        return curriedFn(...args.concat(Array.from(arguments)))
      }
    }
    return fn(...args)
  }
}



```



## 4.4 instanceof

```js
function myInstanceOf(obj1,obj2){
    let tempProto = obj1.__proto__;
    // while return false 就可以退出循环，这个我之前居然不知道。
    while(true){
        if(tempProto === null){
            return false
        }
        if(tempProto === obj2.prototype){
            return true
        }
        tempProto = tempProto.__proto__
    }
}
console.log(myInstanceOf(1,String))
console.log(myInstanceOf([{id:1}],Object))


function test(){
    while(true){
        console.log("true")
    }
}
test()

```





## 4.5.eventsBus(发布订阅)

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







调用

```js
let test = new eventBus()
    test.on('login', data => {
     console.log(data + '用户已登录')
})
test.emit('login', "admin")
```

## 4.6.dropDuplicate

```js
/**
 * 去重
 * @param {*} object
 * @des 对象数组可以先string，然后set set 然后然后new set 就可以了
 */
function uniqueObject(arr){
    let temp = arr.map((value)=>{
        return JSON.stringify(value)
    })
    let tempSet = Array.from(new Set(temp))
    tempSet = tempSet.map((value)=>{
        return JSON.parse(value)
    })
    return tempSet
}
let arr=[
    {
        id:1
    },
    {
    	id:2
    },
    {
        id:1
    }
]

uniqueObject(arr)

/**
 * @param {Array} arr
 * @des set 方法
 */
function uniqueArr(arr) {
  return Array.from(new Set(arr))
}
```



## 4.7  手写new

```ts
function myNew(Fun, ...args) {
    let obj = {};
    obj.__proto__ = Fun.prototype;
    let res = Fun.apply(obj, args);
    if (res instanceof Object) {
        return res;
    } else {
        return obj;
    }
}

```





## 4.10.bind

考察对于this的理解

```js


//有点像是curry化。但是bind要对第一个object和this（function）做处理
Function.prototype.myBind = function() {
    // 1.拿到将来调用 myBind 方法的函数.因为是谁调用它就指向他的
    let fn = this 
    //2.arguments 会把参数组合起来
    let args = [...arguments]
    //3.分离this  object对象 和 参数
    const _this = args.shift()
    // 4.返回一个函数
    return function() { 
        //5....arguments是实例化后传入的参数3，
        //args是bind的时候传入的参数18,100,1000，并且已经去除了第一个
        //_this就相当于把object绑定上去了
        return fn.apply(_this,args)
    }
}

// 对应到 myBind 中的 ctx。也就是被改变后的 this
const obj = {
    name: '小明',
    age:"56"
}

function fun(age, className) {
    console.log(`${this.name}---是${age}，----是${className}学生`)
}
// bind 第一个传入 对象
const temp = fun.myBind(obj, "18岁","三班") 
temp("3") 
```

## 4.11.chunk 分块

loash里面的东西，可以把数组分块

```js
// 按照size把arr分隔成若干个数组
function chunk(arr, size) {
    let res = []
    while(arr.length) {
        res.push(arr.splice(0,size))
    }
    return res;
}
let arr = [1,5,6,9,8,7,4];
chunk(arr,2)

```





## 4.13.map

```js
// Array.map((value,index,array) => {}, thisArg)
// thisArg 是 第一个参数（函数）的this指针
Array.prototype.myMap = function(fn, thisArg) {
    let res = []
    for(let index = 0;index < this.length; index++) {
        res.push(fn.call(thisArg,this[index],index,this))
    }
    return res
}
Array.prototype.myMap = function(fn, thisArg) {
    return this.reduce((res,value,index) => {
        res.push(fn.call(thisArg,value,index,this))
        return res
    },[])
}
let arr = [1,2,3,4]
console.log(arr.myMap((value,index) => {
    return value + index
}))
```



## 4.15.手写快速排序

```js
/**
 * 
 * @param {*} data :array  
   let temp = [1,5,2,5,6,9]
   quickSort(temp)
 */
function quickSort(data){
    if(data.length<=1){
        return data
    }
    let left = []
    let right = []
    let temp = data[0]
    for(let i=1;i<data.length;i++){
        if(data[i]>=temp){
            right.push(data[i])
        }else{
            left.push(data[i])
        }
    }
    return quickSort(left).concat([temp],quickSort(right))
}

```





## 4.16.arrayToTree平面转化树形

```js
let data =[
    		{ id: 1, parentId: 1, name: "一级菜单A", rank: 1 },
            { id: 2, parentId: 1, name: "一级菜单B", rank: 1 },
            { id: 3, parentId: 1, name: "一级菜单C", rank: 1 },
            { id: 4, parentId: 0, name: "二级菜单A-A", rank: 2 },
            { id: 5, parentId: 4, name: "二级菜单A-A", rank: 2 },
            { id: 6, parentId: 5, name: "二级菜单A-A", rank: 2 },
            { id: 7, parentId: 6, name: "二级菜单A-A", rank: 2 },
    		{ id: 8, parentId: 6, name: "二级菜单A-A", rank: 2 }
]

--方法一：两层for循环
function flatToTree(arr){
    let result = [];
    arr.forEach((re)=>{
        re.child = arr.filter(res =>{
            return re.id  == res.parentId
        })
        if(re.parentId==0){
            result.push(re)
        }   
    })
	return result
}
flatToTree(data)


--方法二：hash表

let data =[
    		{ id: 1, parentId: 0, name: "一级菜单A", rank: 1 },
            { id: 2, parentId: 1, name: "一级菜单B", rank: 1 },
            { id: 3, parentId: 1, name: "一级菜单C", rank: 1 },
            { id: 4, parentId: 0, name: "二级菜单A-A", rank: 2 },
            { id: 5, parentId: 4, name: "二级菜单A-A", rank: 2 },
            { id: 6, parentId: 5, name: "二级菜单A-A", rank: 2 },
            { id: 7, parentId: 6, name: "二级菜单A-A", rank: 2 },
    		{ id: 8, parentId: 6, name: "二级菜单A-A", rank: 2 }
]
function arrayToTree(arr){
  const map = {};
    //初始化id
  for (let value of arr) {
    map[value['id']] = value;
  }
  for (let value of arr) {
    let key = value['parentId'];
    // 找到父节点，找不到就跳过（顶级节点是没有parent的）
    if (!(key in map)) continue;
    map[key].children = (map[key].children || []).concat(value);
  }
   //返回parentId为1的
  return map;
};
console.log(arrayToTree(data));

```

## 4.17.treeToArray 树形转化扁平array

```js
let output1 = [
    {
        "id": 1,
        "parentId": 0,
        "name": "一级菜单A",
        "children": [
            {
                "id": 2,
                "parentId": 1,
                "name": "二级菜单A-A",
                "children": [
                    {
                        "id": 3,
                        "parentId": 2,
                        "name": "二级菜单A-A",
                        "children": [
                            {
                                "id": 4,
                                "parentId": 3,
                                "name": "二级菜单A-A",
                                "children": [                     
                                    {
                                        "id": 5,
                                        "parentId": 4,
                                        "name": "二级菜单A-A",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

function treeToArray(arr){
    let result = []
    for(let i = 0 ; i<arr.length ; i++){
        if(JSON.stringify(arr[i].children)=='[]'){
            result.push(arr[i])
        }else{
            result.push(arr[i])
            result = result.concat(treeToArray(arr[i].children)) 
        }
    }
    return result
}
treeToArray(output1)
```



## 4.18 deepclone

```js
let obj = { name: 'toto' }
let arr = [ obj ]

obj = null

如果这么写的话，对象不会从内存中移除
```



```js
function deepClone(obj, hash = new WeakMap()) {
  if (obj == null) return obj; // 如果是null 或者undefined 直接返回
  // 正则表达式或者日期对象 直接返回
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (typeof obj !== 'object') return obj;
  // 如果hash中已经有obj了  直接返回
  if (hash.has(obj)) return hash.get(obj);
  // 剩下的认为是对象或者数组   new它的constructor  获得一个新的数组或对象
  let newObj = Array.isArray(obj) ? [] : {};
  // 把obj放到映射表中
  hash.set(obj, newObj);
  // 遍历老对象  并设置新对象的key为老对象key对应的值
  for (const key in obj) {
      newObj[key] = deepClone(obj[key], hash);
  }
  return newObj;
}

function deepclone( obj, hash = new WeakMap()){
    //1.判断例外情况，date，不是object之类的
    if(!obj){ return obj}
    if(obj instanceof Date){ return new Date(obj)}
    if(typeof obj !== 'object'){return obj}
    //2.判断hash,解决循环引用
    if(hash.has(obj)){return hash.get(obj)}
    //3.存入hash里面
    let newObj = Array.isArray(obj) ? [] : {}
    for(const key in obj){
        newObj[key] = deepclone(obj[key],hash)
    }
    return newObj;
}


const obj = {
    nan:NaN,
    infinityMax:1.7976931348623157E+10308,
    infinityMin:-1.7976931348623157E+10308,
    undef: undefined,
    fun: () => { console.log('叽里呱啦，阿巴阿巴') },
    date:new Date,
}

let res = deepclone(obj)



function flatArray(arr){
    let res = []
    for(let i = 0 ; i<arr.length;i++){
        if(Array.isArray(arr[i])){
            res = res.concat(flatArray(arr[i]))
        }else{
            res.push(arr[i])
        }
    }
    return res
}
let arr = [2,4,[244,[3,5,2]]]
console.log(flatArray(arr))


```







## 4.20.promise

Promise.resolve可以把参数变成promise的，这是为了代码的严谨性

### 4.20.1 手写promise

```js
/*	
	1.function 中   1大3小变量 2方法 
	status
	value
	error
	resolve
	reject
	执行
	2.然后定义then
*/




function myPromise(constuctor){
    let self = this;
    self.status = "pending";
    self.value = null;
    self.err = null
    
    function resolve(value){
        
        if(self.status == "pending"){
            self.status = "fullfilled"
            self.value = value
        }
    }
    function reject(value){
       if(self.status == "pending"){
           	self.status = "rejected"
            self.value = value
        }
    }
    try{
        constuctor(resolve,reject)
    }catch(e){
        reject(e)
    }
}
myPromise.prototype.then= function(onful,onfail){
    //console.log(onful,this.value,this.status)
    if(this.status == "fullfilled"){
        onful(this.value)
    }
}
new myPromise((resolve, reject) => {
    resolve(1)
}).then(x=>{
    console.log(x)
})




```





```

```





### 4.20.2 手写promise.all

```js
/*	全部正确返回所有变量
	1.初始化 count 和 arr |  判断是不是 都成功了。之所以不能用arr.length === promises.length是因为是异步任务，最后一步有可能最先完成.那么arr里面就会是空值
	2.return promise
	3.挨个resolve.then(()=>{}),arr[i] = res 赋值。如果length相等那么resolve数组
*/
Promise.myAll = function(promiseArray){
	let count = 0
	let arr= [] //大部分时间是空值
    return new Promise((resolve,reject)=>{
		promiseArray.forEach((promiseItem,index)=>{
            //这里的容易写错
            console.log(promiseItem)
            promiseItem.then((res)=>{
                count = count + 1
                arr[index] = res
                //这里的promiseArray.length容易写错
                if(count == promiseArray.length){resolve(arr)} 
            })
        })
    })
}

const p1 = Promise.resolve('p1')
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2 延时一秒')
  }, 1000)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3 延时两秒')
  }, 2000)
})

Promise.myAll([p1, p2, p3])
  .then(res => console.log(res))
```





### 4.20.3 手写 Promise.race

```js
/*	最快的直接输出
	1.这就很容易，遍历promise然后最快的值resolve就可以了
*/

Promise.myRace = function (promiseArray){
    return new Promise((resolve,reject)=>{
        promiseArray.forEach((promiseItem)=>{
            promiseItem.then((res)=>{
                resolve(res)
            })
        })
    })
}
const p1 = Promise.resolve('p1')
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2 延时一秒')
  }, 1000)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3 延时两秒')
  }, 2000)
})

Promise.myRace([p1, p2, p3])
  .then(res => console.log(res))
```

### 4.20.4 手写 Promise.any

```js
/*	
	任意一个有值就输出，都满了才reject
*/
Promise.myAny = function(promiseArray){
    let count = 0
    let arr = []
    return new Promise((resolve,reject)=>{
        promiseArray.forEach((promiseItem,index)=>{
            promiseItem.then((res)=>{
                resolve(res)
            }).catch((res)=>{
                count = count +1
                arr[index] = { status: 'rejected', val: res }
                if (count === promiseArray.length) {
                    reject(new Error('没有promise成功'))
                }
            })
        })
	})
    
}
const p1 = Promise.reject('p1')
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p2 延时一秒')
  }, 1000)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p3 延时两秒')
  }, 2000)
})

Promise.myAny([p1, p2, p3])
  .then(res => console.log(res))


```

### 4.20.5 手写 Promise.allSettle

```js
/*	
	所有值都有就输出
*/
Promise.myAllSettle = function(promiseArray){
    let count = 0
    let arr = []
    return new Promise((resolve,reject)=>{
        promiseArray.forEach((promiseItem,index)=>{
            promiseItem.then((res)=>{
                count = count +1
                arr[index] = res
                if (count === promiseArray.length) {
                    resolve(arr)
                } 
            }).catch((res)=>{
                count = count +1
                arr[index] = { status: 'rejected', val: res }
                if (count === promiseArray.length) {
                    resolve(arr)
                }
            })
        })
	})
    
}
const p1 = Promise.reject('p1')
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p2 延时一秒')
  }, 1000)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3 延时两秒')
  }, 2000)
})

Promise.myAllSettle([p1, p2, p3])
  .then(res => console.log(res))


```



### 4.20.6 用Promise.prototype.then实现一个Promise.prototype.catch

```
.catch就是一个特殊的.then把，第一个参数用null占位就实现了，promise硬背确实会这样
```





## 4.21 树



### 4.21.1前中后遍历

//应用场景：前序（跟左右）/中序（左跟右）/后序遍历（左右根）
一些tip：前序遍历，中序遍历，后序遍历的遍历顺序。前者是左边画点

```JS
let res = []
function treeFor(treeNode){
	//如果到达尽头直接return
	if(!treeNode){
		return
	}
	
	//前序遍历
    //res.push(treeNode.val)
	treeFor(treeNode.left)
	//中序遍历
    //res.push(treeNode.val)
	treeFor(treeNode.right)
	//后序遍历
    //res.push(treeNode.val)
}
treeFor(root)
return res

```



### 4.21.2 判断二叉树

```ts


function isSymmetric(root: TreeNode | null): boolean {
    function dfs(left:TreeNode,right:TreeNode){
        if(left == null && right == null){
            return true
        }
        if(left == null || right == null){
            return false
        }
        if(left.val!=right.val) {
			return false;
		}
        return dfs(left.left,right.right) && dfs(left.right,right.left);
    }
    if(!root){
        return true
    }
    return dfs(root.left,root.right);
};


```





## 4.22 算法

### 4.22.0 lru 

```js
链表
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}
/*
	思路：构建双向链表（时间顺序）+ hash（取值）
	1. 初始化 双向链表(key value next prev) 和 LRU(curSize capacity listNodeMap head tail)
	2. 定义get方法，用到的放到最前面去（）
	3. put方法，类似于没有就增加addToHead（直接手动添加到头，注意cursize加上去了，如果hash的数据满了，删掉最后一个节点），有就moveToHead（删除节点添加）
	
	像是删掉hash里面的东西特别简单就是Reflect.deleteProxxx(deleteNode,deleteNode.key)
*/

//双向链表
class ListNodeStruct{
    constructor(key,value){
        this.key = key 
        this.value = value
        this.next = null
        this.prev = null
    }
}

class LRUCache{
    constructor(capacity){
       this.capacity = capacity;
        //记录LRUCache 当前的length 
        this.curSize = 0;
        // 定义一个 hash 表
        this.listNodeMap = {}
        //为了方便我们一般来说，会定义一个头尾节点
        this.head = new ListNodeStruct(-1, -1)
        this.tail = new ListNodeStruct(-1, -1)
        //链表的头部指向尾部
        this.head.next = this.tail
        this.tail.prev = this.head 
    }
    print(){
        console.log(this.listNodeMap)
    }
    get(key){
        let node = this.listNodeMap[key]
        if(node){
            //移到前面去
            this.moveToHead(node)
            return node.value
        }else{
            return -1
        }
    }
    put(key,value){
       	let node = this.listNodeMap[key]
        if (node) {
            //如果存在，移到双向链表的前面并且重新赋值
            node.value = value
            this.moveToHead(node)
        } else {
            let listNode = new ListNodeStruct(key, value)
            //插入
            this.listNodeMap[key] = listNode;
            this.addToHead(listNode)
        }
    }
    moveToHead(node){
        //this.removeFromList(node)
    	//this.addToHead(node)
         //从现在的节点删除
        node.next.prev = node.prev
        node.prev.next = node.next
        //添加到头
        node.prev = this.head
        node.next = this.head.next
        this.head.next.prev = node;
        this.head.next = node
    }
    addToHead(node){
        this.curSize++;
        node.prev = this.head
        node.next = this.head.next
        this.head.next.prev = node;
        this.head.next = node
        //删除最后一个
        if (this.curSize > this.capacity) {
            //因为要key值，所以多写了几行
            //    this.tail.prev.prev.next = this.tail;
            //    this.tail.prev = this.tail.prev.prev
            let deleteNode = this.tail.prev;
            let deletePrevNode = this.tail.prev.prev;

            deletePrevNode.next = this.tail;
            this.tail.prev = deletePrevNode;
            this.curSize--;
            Reflect.deleteProperty(this.listNodeMap, deleteNode.key)
        }
    }
}

// 使用
let temp  =new LRUCache(5)
temp.put(1,"害1")
temp.put(2,"我2")
temp.put(3,"害3")
temp.print()




```



### 4.22.1 dfs

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
function dfs(res, path,data){
    if 满足结束条件(加起来=xx，size=xx):
        res.push(JSON.parse(JSON.stringify(path)))
        return
    
    for (let i  of data){
    	判断有没有资格进入path
    	把东西推进去path.push(i)
        backtrack(路径, 选择列表,初始数据)
        path.pop() 撤销选择
    }
        
}
 */
var permute = function(nums) {
    let length = nums.length
    if(nums.length==1){
        return [nums]
    }    
    function dfs(res,path,data){
        if(path.length==length){
            res.push(JSON.parse(JSON.stringify(path)))
            return
        }
        for(let i of data){
            
            if(!path.includes(i)){
                // console.log(i)
                path.push(i);
                dfs(res,path,nums);
                path.pop()
            }
        }
    }
    let res= []
    let path = []
    dfs(res,path,nums)
    return res
};



//--------------全排列2----------------
/**
 * @param {number[]} nums
 * @return {number[][]}
function dfs(res, path,data){
    if 满足结束条件(加起来=xx，size=xx):
        res.push(JSON.parse(JSON.stringify(path)))
        return
    
    for (let i  of data){
    	判断有没有资格进入path
    	把东西推进去path.push(i)
        backtrack(路径, 选择列表,初始数据)
        path.pop() 撤销选择
    }
        
}
 */

var permute = function(nums) {
    let length = nums.length
    if(nums.length==1){
        return [nums]
    }
    
    function dfs(res,path,data){
        if(path.length==length){
            res.push(JSON.parse(JSON.stringify(path)))
            return
        }
        for(let i of data){
            if(i>0 && data[i]==data[i-1] && i<length){
                continue
            }
            if(!path.includes(i)){
                // console.log(i)
                path.push(i);
                dfs(res,path,nums);
                path.pop()
            }
        }
    }
    let res= []
    let path = []
    dfs(res,path,nums.sort((a,b)=>{return a-b}))
    return res
};
```





### 4.22.2  滑动窗口

```js
窗口大小不固定的叫做**双指针**，窗口大小固定的叫做滑动窗口

--1.原理：在数组上通过双指针同向移动的东西。（应用场景：最长字串，子数组，子序列  还是连续的）。核心左右双指针


//--------求最大，最长-------------
--1.1 先动右指针，如果符合条件就接着动右指针，更新max(扩大窗口)
--1.2 直到右指针不符合条件时，左指针向右。直到满足要求，如果跟右指针同时仍然不满足要求。接着向右。(缩小窗口)
初始化 left，right，window，bestResult

// 因为tight是后面更新的，因此长度是 right-left+1
let left=0,right=0,window=0,bestResult=0
while(右指针没到结尾){
    窗口扩大，加入right，更新window//window = window + nums[right]
    
    while(window不满足){
        窗口缩小，left右移//if(right - left + 1 < result){更新状态}
        //window = window-nums[left]
    }
    更新bestResult
    right++
}
返回bestResult


//--------求最小，最短-------------
--1.1 先动右指针，符合条件 左指针向右。更新min（缩小）
--1.2 左指针不满足条件，向右扩大
while(右指针没到结尾){
    窗口扩大，加入right，更新window
    while(window不满足){
        窗口缩小，left右移
    }
    更新bestResult
    right++
}
返回bestResult


两个同时不符合条件。那么是动一次卡一次

//--------容易理解-------------
function easy(nums, k): number {
    let left = 0,right =0,window=1,result=0
    for(let i=0;i<nums.length;i++){
      left = i;
      right=i;
      while(right<nums.length){  
        window = window * nums[right]
        if(window<k){
          console.log(left,right)
          result = result+1
        }
        while(window>=k ){
          break
        }
        right++
      }
      window =1
    }
    return result 
};

//-----------------------题目----------------------
209. 长度最小的子数组
给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

input：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。


/**
    * @param {number} target
    * @param {number[]} nums
    * @return {number}
    */
    var minSubArrayLen = function (target, nums) {
        let left=0,right=0,window=0,result=0
        while(right<nums.length){
            window = window+nums[right]
            // console.log(window)
            while(window>=target){
                if(right-left+1<result || result==0){
                    result=right-left+1
                }
                window = window-nums[left]
                left++
            }
            right++

        }
        return result
    };



```





### 4.22.3 动态规划

```js
--1.方法总结
--1.1 初始化数组
二维数组：const dp = new Array(3).fill(0).map((v) => new Array(2).fill(0)); //初始化状态数组 竖3*横2
--1.2 初始化前几个数组
dp[0] = 1
--1.3 确定状态转化工具
dp[i]=dp[i-2]+dp[i-1]
--1.4 最后return 
return dp


--2.
var climbStairs = function(n) {
    let dp = new Array(n+1);
    dp[1]=1;
    dp[2]=2;
    dp[3]=3;
    for(let i = 3;i<=n;i++){
        dp[i]=dp[i-1]+dp[i-2]
    }
    
    return dp[n]
};

```





### 4.22.4  链表

```js

const log = console.log.bind(console);

/** * 链表节点 * @param {*} val
 * @param {ListNode} next
 */
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

/** * 将一个数组转为链表 * @param {array} a
 * @return {ListNode} */
const ArrayToList = (param) => {
        let temp = new ListNode()
        let pre = temp
        param.forEach((value) => {
            pre = pre.next = new ListNode(value)
        })
        return temp.next
}


/** * 将一个链表转为数组 * @param {ListNode} node
 * @return {array} */

const listToArray = (param) => {
    let temp = []
    while (param) {
        temp.push(param.val);
        param = param.next
    }
    return temp
}
    
let nowListNode = ArrayToList([1,6,5])
let result = listToArray(nowListNode)
log(result)


```



## 4.28.生成海报保存本地的实现 

用canvas将html转换为图片，使用a标签定义href和download属性并执行click函数



## 4.29.单例模式

```js
let Head = (function() {
    let HeadClass = function() {}
    let instance 
    return function() {
        if(instance) return instance
        instance = new HeadClass()
        return instance
    }
})()

let a = new Head()
let b = new Head()
console.log(a===b)
```



## 4.30.下划线命名法转换驼峰命名法（JS）

```js
let str = 'firstname'
function func(s) {
    let index = s.indexOf('_')
    if(index === -1) return s
    // 包前不包后 charAt(index+1)
    return s.slice(0,index)+s.charAt(index+1).toUpperCase()+s.slice(index+2,s.length)
}
console.log(func(str))
```

```ts


function deepClone(obj, hash = new WeakMap()) {
  if (obj == null) return obj; // 如果是null 或者undefined 直接返回
  // 正则表达式或者日期对象 直接返回
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (typeof obj !== 'object') return obj;
  // 如果hash中已经有obj了  直接返回
  if (hash.has(obj)) return hash.get(obj);
  // 剩下的认为是对象或者数组   new它的constructor  获得一个新的数组或对象
  let newObj = Array.isArray(obj) ? [] : {};
  // 把obj放到映射表中
  hash.set(obj, newObj);
  // 遍历老对象  并设置新对象的key为老对象key对应的值
  for (const key in obj) {
      newObj[key] = deepClone(obj[key], hash);
  }
  return newObj;
}

function deepclone( obj, hash = new WeakMap()){
    //1.判断例外情况，date，不是object之类的
    if(!obj){ return obj}
    if(obj instanceof Date){ return new Date(obj)}
    if(typeof obj !== 'object'){return obj}
    //2.判断hash,解决循环引用
    if(hash.has(obj)){return hash.get(obj)}
    //3.存入hash里面
    let newObj = Array.isArray(obj) ? [] : {}
    for(const key in obj){
        newObj[key] = deepclone(obj[key],hash)
    }
    return newObj;
}


const obj = {
    nan:NaN,
    infinityMax:1.7976931348623157E+10308,
    infinityMin:-1.7976931348623157E+10308,
    undef: undefined,
    fun: () => { console.log('叽里呱啦，阿巴阿巴') },
    date:new Date,
}

let res = deepclone(obj)
console.log(res)






```





## 4.31  算法





