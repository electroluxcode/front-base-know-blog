# 9.快速mock数据

[[toc]]

## 1.安装mock-server

```shell
npm i @shymean/mock-server -g
```



## 2._mock.js

新建一个文件_mock.js

然后写入

```js
// _mock.js
// 对应的rurl会被中间件拦截，并返回mock数据
//具体的实例可以看http://mockjs.com/examples.html#Number**

// ANY localhost:9999/

Mock.mock('/', {
    data: [],
    msg: "hello mock",
    "code|1-4": 1,

})

// 可以mock指定的请求方法
// POST localhost:9999/test
Mock.mock('/test', 'POST', {
    data: [],
    msg: "hello mock",
    "code|1-4": 1,
})

// 扩展rtype，支持jsonp形式，使用param传入对应的回调名

// GET JSONP localhost:9999/test

Mock.mock('/test', {
    type: 'jsonp',
    param: 'callbackName'
}, {
    code: 0,
    msg: 'hello from mock jsonp',
    data: {
        "id|1000-9999": 1,
    }
})

// 默认回调名称 callback
Mock.mock("/test2", "jsonp", {
    code: 0,
    msg: "hello from mock jsonp2",
    data: {
        "id|1000-9999": 1,
    }
});

// 默认回调名称 callback
Mock.mock("/test3", "jsonp", {
    code: 0,
    msg: "hello from mock jsonp2",
    data: {
        "object|2": {
            "310000": "上海市",
            "320000": "江苏省",
            "330000": "浙江省",
            "340000": "安徽省"
        },

    }

});

```







## 3.启动

```shell
mock -p 9999 -f ./_mock.js
```



