# 2.9 JavaScript代码输出题

[[toc]]

## 2.9 后续



### 2.9.1 闭包

```js
能访问上级函数作用域中的变量（哪怕上级函数上下文已经销毁）

//1.闭包缓存了变量
var data = [];
for(var i = 0; i < 3; i ++) {
	data[i] = (function(i) {
		return function() {
			console.log(i);
		}
	}(i))
}
data[0]();
data[1]();
data[2]();

//2.立刻执行+报错  。
//去掉 data[2](); 不报错，输出 0 1 2
var data = [];
for(var i = 0; i < 3; i ++) {
	data[i] = (function(i) {
			console.log(i);	
	}(i))
}
data[2](); 

//3. 已经执行完了 
//输出 3 3 3
//注意：能访问上级函数作用域中的变量（哪怕上级函数上下文已经销毁）
//改成let 的话 就输出0 1 2  因为生成了块级作用域
var data = [];
for(var i = 0; i < 3; i ++) {
	data[i] = function() {
			console.log(i);	
	}
}
data[0](); 
data[1](); 
data[2](); 

//4.settimetout 和 执行
//第一次执行function(i)得时候，就清除了最后一个计时器，最后一个计时器根本没有执行
 function fn1() {
     for(var i = 0; i < 4; i ++) {
         console.log(i)
         var tc=setTimeout(
             function(i){
                 console.log(i);
                 clearTimeout(tc)
             }, 10 ,i);

     }
 }
fn1();  //输出 0 1 2 3
```







### 2.9.2 半curry

```js
return 的 闭包第一次不会调用
let x = 3;
function fn(x) {
    return function(y) {
        console.log(y + (++x));
    }
}
//fn(4) 不会调用 ++x
let f = fn(4)(5);
console.log(x);  //输出 10 3
```









### 2.9.3作用域链 | 闭包 | 对象 | function | 难 |  闭包一个箭头函数

对象里面箭头函数指向上一个作用域



对象里面返回箭头函数指向当前作用域

对象里面返回function 指向 默认作用域

```js
--1.对象里面的function 也是指向当前对象.可以绑定bind和call.但是
--2.严格模式(use strict)下，函数里面的闭包没有this，用call可以改变this
--3.




let name = 'window'

var person1 = {
  name: 'person1',
  show1: function () {
    console.log(this.name)
  },
  show2: () => console.log(this.name),
  show3: function () {
    return function () {
      console.log(this)
      console.log(this.name)
    }
  },
    show4: function () {
        return () => {console.log(this.name)}
    }
}
var person2 = { name: 'person2' }

//这里是this的引用，非常简单 
//person1.show1()  // 输出person1
//person1.show1.call(person2) //输出person2

//这里是 默认的this，绑定到全局去了。如果是let 的话，就会什么都不输出。var的话就会输出 window
person1.show2() // 输出window
person1.show2.call(person2) // 输出window

// 这里执行默认绑定
//person1.show3()()  //输出window
//person1.show3().call(person2) // 输出person2

//person1.show3.call(person2)()  // 输出：window。因为call 是给person1绑定上了

//person1.show4()()   // person1。因为
//person1.show4().call(person2)   // person1
//person1.show4.call(person2)()   // person2
```



```js
"use strict"
let name = 'window'
console.log(this)
var person1 = {
  name: 'person1',
  show1: function () {
    console.log(this.name)
  },
  show2: () => {console.log(this.name)},
  show3: function () {
    return function () {
      console.log(this)
      console.log(this.name)
    }
  },
    show4: function () {
        return () => {console.log(this.name)}
    }
}
var person2 = { name: 'person2' }


person1.show3()() // 输出window
person1.show3.call(person2) // 输出window

console.log(this)
```





### 2.9.5 作用域链 | function  | 难



函数里面箭头函数指向全局

函数里面的function 也是指向全局

函数里面返回箭头函数指向全局

函数里面返回function 指向全局

函数里面的对象 还是指向对象自身

```js
"use strict"
//如果加上这个直接报错
var a = 1
 
function foo () {
  var a = "first"
  console.log(this,this.a,"第一层")
  function inner () {
    //往上面的 foo 的函数作用域找
    // foo 内有 a，但是 foo 是 window 调用的
    // 因此function的this
    a = "second"
      console.log(this,this.a,"第二层")
      function inn(){
          a = "third"
          console.log(this,this.a,"第三层")
    	  let i=()=>{
              console.log(this,this.a,"第四层")
          } 
          i()
      }
      inn()
  }
  inner()
}
//let a = {
    //a:foo
//}
foo() //输出1,这个方法里面所有的this都是window绑定
//a["a"] // 被a 绑定了 ，因此会输出 一个function
```





### 2.9.6 作用域链 |  赋值

```js
无任何调用前缀的情景,默认绑定时this指向全局对象（非严格模式） | 严格模式环境中，默认绑定的this指向undefined

赋值fun是默认绑定


function han(){  console.log(this)}
var obj1 = {
            name:'obj1',
            han:han
        }
var obj2 = {
            name:'obj2'
        }
obj1.han();  // 输出：obj1 对象
(obj2.han = obj1.han)();// 输出window （默认绑定）
```

### 2.9.7 作用域链 |  验证

当函数作为对象的方法被调用时，this指向该对象

```js
var a =2

    function getName(){
        var a =6 
        return function(){
            var a =6 
            function c(){
                
                var a =6 
                function d(){
                    console.log(this.a)
                }
                d()
            }
            c()
        }
    }


getName()(); // 2




//------------------------
var a =3
var obj = {
    a: 'yuguang',
    getName: function(){
        return function(){
            function c(){
                function d(){
                    console.log(this.a)
                }
                d()
            }
            c()
        }
    }
};

obj.getName()(); // 3


//-----

var a =3
function obj() {
    let b ={
        c:function (){
            console.log(this.a)
        },
        a:8
    }
    b.c()
}

obj(); // 8


//-----------------
var a =3
function obj() {
    let b ={
        c:function (){
            function e(){
                console.log(this.a)
            }
            e()
        },
        a:8
    }
    b.c()
}

obj(); // 3


//-----------------
var a =3
var c =3
function obj() {
    function d(){
        var c ="dsa"
        let b =()=>{
       		console.log(this.c)
    	}
        b()
    }
    
    d()
}

obj(); // 3

//-----------------
var a =3
var c =3
function obj() {
    var c =5
    return b =()=>{
       		console.log(this.c)
   }
}

obj()(); // 3
```

