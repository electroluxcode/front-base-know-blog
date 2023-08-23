# 9.webassembly

[toc]



[[toc]]



## 9.1.基础

### 9.1.1chrome如何运行Wasm



浏览器内置JIT引擎，V8使用了分层编译模式（Tiered）来编译和优化 WASM 代码。分层编译模式包括两个主要的编译器：

1. 基线编译器（Baseline compiler） Liftoff编译器
2. 优化编译器（Optimizing compiler） TurboFun编译器





### 9.1.2chrome 编译流程



1. **解码（Decoding）**：首先，将 WASM 模块解码为二进制可执行代码，并验证其是否符合 WASM 标准。
2. **基线编译（Baseline Compilation）**：接下来，使用 Liftoff 编译器进行快速编译。这一阶段生成的代码性能较低，但编译速度快。流式编译在这个阶段发挥作用，使得代码在下载过程中就能进行编译。
3. **热点分析（Hotspot Analysis）**：V8 引擎会持续监控 WASM 函数的调用频率，以识别 Hot Function。
4. **优化编译（Optimizing Compilation）**：对于被标记为热门函数的代码，使用 TurboFan 编译器进行优化编译。编译完成后，优化后的代码会替换原有的 Liftoff 代码。这一过程称为分层升级（Tier-up）。
5. **执行（Execution）**：在优化编译完成后，代码将在 V8 引擎中运行。





### 9.1.3流式调用 和 编译



WebAssembly 缓存仅针对流式 API 调用， compileStreaming 和 instantiateStreaming 这两个API，使用流式API拥有更好的性能。对于缓存的工作原理：

1. 当TurboFan完成编译后，如果.wasm资源足够大（128 kb），Chrome 会将编译后的代码写入 WebAssembly 代码缓存。
2. 当.wasm第二次请求资源时（hot run），Chrome.wasm从资源缓存中加载资源，同时查询代码缓存。如果缓存命中，编译后的module bytes将发送到渲染器进程并传递给 V8，V8将其进行反序列化，与编译相比，反序列化速度更快，占用的 CPU 更少。
3. 如果.wasm资源发生了变化或是 V8 发生了变化，缓存会失效，缓存的本地代码会从缓存中清除，编译会像步骤 1 一样继续进行。



## 9.2.emscript | c

官网：https://emscripten.org/

### 9.2.1  环境

```shell
# Get the emsdk repo
git clone https://github.com/emscripten-core/emsdk.git

# Enter that directory
cd emsdk

emsdk install latest
emsdk activate latest



# window
e:/emsdk/emsdk_env.bat  
# linux设置环境变量 source ./emsdk_env.sh.
# 开始编译
emcc math.c -Os -s WASM=1 -s SIDE_MODULE=1 -o math.wasm
```



### 9.2.2 c语言示例



```c++
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int square (int x) {
  return x * x;
}
```







### 9.2.3 加载工具

```js
function loadWebAssembly(filename, imports = {}) {
	return fetch(filename)
		.then((response) => response.arrayBuffer()) // 转成 ArrayBuffer
		.then((buffer) => {
			imports.env = imports.env || {};
			Object.assign(imports.env, {
        // 初始化内存空间
				memoryBase: 0,
         // 创建变量映射表
				tableBase: 0,
				__memory_base: 0,
				__table_base: 0,
				memory: new WebAssembly.Memory({ initial: 256, maximum: 256 }),
				table: new WebAssembly.Table({
					initial: 0,
					maximum: 0,
					element: "anyfunc",
				}),
			});
			return WebAssembly.instantiate(buffer, imports); // 编译 + 实例化
		})
		.then((result) => result.instance); // 提取生成都模块
}
```



### 9.2.4 js加载调用



```js
loadWebAssembly('./math.wasm').then(instance => {
    const { square } = instance.exports
    console.log('3^2 =', square(3))
    console.log('(2 + 5)^2 =', square(2 + 5))
})
```







## 9.3 emscript | c | 打包成外部dll





### 9.3.1 cpp文件

```c
#include "MyHeader.h"
#include "stdio.h"
int __stdcall init(int a, int b) {
    printf("%d %d", a, b);
    return 0;

}
//  int  hello(int a, int b);
```



### 9.3.2 .h 文件

```c
#pragma once
#ifndef MyHeader
#define MyHeader

// 定义当前宏
#define FETCH_API _declspec(dllexport)


// 宏替换
#ifdef __cplusplus

// 告诉编译器是c语言代码
extern "C" {
#endif
    // __stdcall 可以 让方法从左到右
    FETCH_API int __stdcall init(int a, int b);
   
#ifdef __cplusplus
}
#endif
#endif
```





## 9.4 Node-addon-api | c++



```shell
npm install -g node-gyp@9.4.0
npm install bindings@1.5.0
npm install node-addon-api@1.7.2


npm install --global --production windows-build-tools # 卡住不动 看这篇文章 vs 2017 2019 都可以 一开始的 https://blog.csdn.net/oqzuser1234asd/article/details/116169889 扩展包要选择 c++ 的 扩展


```



### 9.4.1 gyp | xx.cc

新建 binding.gyp

```json
{
     //重要1：每个 target 描述了一个 C++ 扩展
  "targets": [
    {
         //重要2：扩展名称
      "target_name": "hello1",
         //重要3：扩展源文件
      "sources": [
        "hello1.cc"
      ],
         //重要4：头文件路径
      "include_dirs": [
        "<!@(node -p \"require('node-addon-api').include\")",
         "<!@(node -p \"require('node-addon-api').include.node\")"
      ],
         //重要5：需要连接的库
    'dependencies': [
          "<!(node -p \"require('node-addon-api').gyp\")"
      ],
      'conditions': [
        ['OS=="win"', {
          "msvs_settings": {
            "VCCLCompilerTool": {
              "ExceptionHandling": 1
            }
          }
        }],
        ['OS=="mac"', {
          "xcode_settings": {
            "CLANG_CXX_LIBRARY": "libc++",
            'GCC_ENABLE_CPP_EXCEPTIONS': 'YES',
            #'MACOSX_DEPLOYMENT_TARGET': '10.7'
          }
        }]
      ]
    }
  ]
}

```







### 9.4.2  运行



```shell
# node-gyp configure  的 时候发现 下载一直有问题，然后我们下载到本地去。然后添加下面的参数
node-gyp configure --msvs_version=2019  --nodedir=E:\myProject\wasm-examples-master\node-addon\node-v16.14.0-headers\node-v16.14.0\include\node


node-gyp build --msvs_version=2019  --nodedir=E:\myProject\wasm-examples-master\node-addon\node-v16.14.0-headers\node-v16.14.0\include\node

## 然后报错找不到 node_api.h,这个时候把上面下载的header的对应文件放进node_modules
https://nodejs.org/dist/v16.14.0/win-x64/node.lib
https://nodejs.org/download/release/v16.14.0/node-v16.14.0-headers.tar.gz
```



### 9.4.3 调用

```js
const hello = require('./build/Release/hello1.node');

console.log(hello.hello(10,34));
```







