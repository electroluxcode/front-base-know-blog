

# 5.组件库构建 | 脚手架建设

[[toc]]




这里是我们的一个打包示例，通过npm install + npm run build可以打包代码

https://gitee.com/Electrolux/front-zip-ts-package

```
npm install -D terser-webpack-plugin@4.2.3
这个东西可以进行压缩js代码，示例看config下面的配置还是比较齐全的

```



## 11.1.打包js函数

看 https://gitee.com/Electrolux/front-zip-package 和 

https://gitee.com/Electrolux/front-zip-ts-package



## 11.2.打包css

### 11.2.1 安装

```shell
npm install style-loader@0.23.1
npm install css-loader@2.0.2   
npm install mini-css-extract-plugin@0.5.0
```



### 11.2.2 webpack.prod.js

```js
 webpack.prod.js中还需要 mini-css-extract-plugin
 
 /*
* webpack 配置
*/
var webpack = require("webpack");
var path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var fileVersion = new Date().getTime();
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {   
    mode : 'production',
    entry:{
        ts:['./src/ts.ts'],
        // css:['./src/css.css']
    },
    output: {
        publicPath:"",
        path: path.resolve(__dirname, '../dist'), //打包后的文件存放的地方
        filename: '[name].min.js', //打包后输出文件的文件名
        chunkFilename: "[name].min.js",
        library:"monitorjs",  //类库名称
        libraryTarget:"umd",  //指定输出格式 ejs commonjs umd amd
        umdNamedDefine:true //会对UMD的构建过程中的AMD模块进行命名，否则就使用匿名的define
    },
    resolve: {
        extensions: ['.ts','tsx','.js','css']
    },
    module: {        
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015','stage-0'],
                        plugins: ['transform-runtime']
                    }
                },
                exclude: /node_modules/
            },
            {
                test:/\.ts?$/,
                use:'ts-loader',
                exclude: /node_modules/
            },
            {  

                test: /\.css$/,  
                use: ['style-loader', MiniCssExtractPlugin.loader,'css-loader']

            } 
        ]
    },

    plugins: [

        // new CleanWebpackPlugin(),
        
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV':  JSON.stringify(process.env.NODE_ENV),
            },
            fileVersion:fileVersion //文件版本
        }),
        
        //压缩配置  用Terser代替
        new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: false,
          }),
          new webpack.ProvidePlugin({
            ab: [path.resolve(__dirname,"src/index.ts"), 'default'],
        }),
        new MiniCssExtractPlugin({
            filename: "../dist/[name]-buddle.css"
         })
    ]   

}

```







### 11.2.3 通过css和js来实现组件

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
    body {
        background-color: #ebecf0;
    }

    ev-button[type=primary] {
        display: block;
        width: 100px;
        height: 50px;
        /* color: white; */
        /* background-color: red; */
        text-align: center;
        line-height: 50px;
        box-shadow: 6px 6px 12px #bec3c9, -6px -6px 12px #fff;
        font-size: 18px;
        font-weight: 200;
        color: #6D7587;

    }

    ev-button[type=other] {
        display: block;
        width: 100px;
        height: 50px;

        text-align: center;
        line-height: 50px;
        box-shadow: inset 5px 5px 10px #bec3c9, inset -5px -5px 10px #fff;
        font-size: 18px;
        font-weight: 200;
        color: #6d7587;
    }
</style>

<body>
    1
    <div>1</div>
    <ev-button type="primary">按钮点击</ev-button>
    <script>
        document.querySelector("ev-button").addEventListener("click", () => {
            document.querySelector("ev-button").style.cssText = "color:red"
        })
    </script>
</body>

</html>
```



### 11.2.4 ts.ts

mini-css-extract-plugin 会自动对这玩意进行解析

```js
import dataChart from "./dataChart"

// export { dataChart }

(window as any).dataChart =dataChart
import './css/button/button.css'
export { dataChart }

```





## 11.3.组件库规范



### 11.3.1.monorepo（代码文件结构）

三个独立的子项目可以共有request

有点像一种思想

```
第一种方式，每一个组件都是一个单独仓库，虽然有利于组件开发，但是组件维护起来比较麻烦。组件越多，需要维护的仓库也就越多，当其中部分组件依赖的如lodash需要升级时，我们需要一个个进行升级，比较麻烦。

第二种方式，将所有的组件作为一个包发布，虽然维护比较方便，但是发布后，别人只想使用其中的一个组件时，会需要把整个组件库引入，如果不提供按需加载，那么会造成项目中引入很多不必要的代码。

第三种方式可参考下文。

目录结构类似于
packages
├── compiler-core
    ├──_tests_ #单元测试
    ├──src #源文件目录
    ├──package.json
├── compiler-dom
    ├──_tests_ #单元测试
    ├──src #源文件目录
    ├──package.json
package.json
指在一个仓库中管理多个模块/包。
```



### 11.3.2.verdaccio（代码安全）

```
step1:服务器上安装verdaccio  npm install -g verdaccio
step2:执行verdaccio，启动服务 启动成功后，直接在浏览器输入服务器的ip地址 + 最后一行打印出的端口号
step:3:https://hostingcanada.org/htpasswd-generator/中生成账号密码 然后添加到htpasswd文件中去
```

## 11.4.编写文档

主要用到的是vuepress这个库

具体的用法可以看到https://gitee.com/Electrolux/front-base-know-blog。主要是打包的时候替换base的路径还有一些patch-package的设置

简单讲一下怎么把组件展示到界面中去

首先我们需要在.vuepress下面新建一个components文件夹

下面是这个文件下面的ev-button.vue示例

注意一下命名，不然会报递归的错误

```vue
<template>
  <div>
    <ev-button type="primary">按钮点击</ev-button>
    <ev-button type="other">按钮点击</ev-button>
  </div>
</template>

<script>
export default {
  name: "ev-Button",
  mounted() {
    document.querySelector("ev-button").addEventListener("click", () => {
      document.querySelector("ev-button").style.cssText = "color:red";
    });
  },
};
</script>

<style scoped>
body {
  background-color: #ebecf0 !important;
}
ev-button[type="primary"] {
  display: inline-block;
  width: 100px;
  height: 50px;

  text-align: center;
  line-height: 50px;
  box-shadow: 6px 6px 12px #bec3c9, -6px -6px 12px #fff;
  font-size: 16px;
  font-weight: 200;
  color: #6d7587;
  /* background-color: aqua; */
}

ev-button[type="other"] {
  display: inline-block;
  width: 100px;
  height: 50px;
  margin: 30px;
  text-align: center;
  line-height: 50px;
  box-shadow: inset 5px 5px 10px #bec3c9, inset -5px -5px 10px #fff;
  font-size: 16px;
  font-weight: 200;
  color: #6d7587;
}
</style>

```

调用就直接
```
<ev-Button></ev-Button>
```

## 11.5.浅聊编译设计

在一个框架设计之初，通常有三种选择：纯运行时的、纯编译时的或运行时+编译时的。如Svelte框架就是纯编译时的，而Vue.js则被设计为运行时+编译时



### 11.5.1  纯运行

```js
--1.这类东西提供给你一个函数。你只要按照他的设计和与他的约定传值进去就可以了
--2.有点像命令式编程.例如
const obj = {
    tag:'div',
    children:[{tag:'div',children:'hello'}]
}
然后传入一个类似render函数的东西就可以了
```



### 11.5.2 纯编译

```js
--1.在程序代码编译时期，编译器会将用户输入的模板字符串编译转换为命令式的代码，例如：
我们输入 <div></div>  
会变成
const div = document.createElement('div')
```



### 11.5.3  运行+编译

```
可以通过不同的方式进行传入
```





















## 11.6 全局脚手架  | npm 包



```js
参考一下别人的设计：husky 原理就是加上了 hooksPath = .husky。然后里面就可以加上。uninstall 复原.git 和 install 操作 .git 的操作

npm run script执行脚本的时候都会创建一个shell，然后在shell中执行指定的脚本

----------------------------------

'&' 并行执行顺序，同时执行
"dev":"node test.js & webpack"

'&&'继发顺序，执行前面之后才可以执行后面
"dev":"node test.js && webpack"


前后加上pre 和post 
```

### 11.6.1 关于bin

```js
// bin 字段 会在 会建立 node_module/.bin 中命令的映射，当我们 输入一个包的名字的时候，我们就会执行 node 映射的方法.js

// 直接在 package.json 写三方依赖的命令可以被 npm 成功识别并调用的原理就是 去到了 bin 字段 


注意一下 在这个地方的 文件头部需要加上
#!/usr/bin/env node
```



### 11.6.2 npm link

```shell
频繁的发包 贼麻烦
使用 在 你 包的 根目录 添加 
npm link  #命令 就可以添加 软链
npm unlink 你的包名# 添加上你的包名 
npm ls --global --depth 0 # 查看所有创建的全局链接名称

注意 在 npm link 之后 ，你的 package.json 里面的 package name 就是 你的 包名。

这个时候 添加的 bin 也会同步 更新






```



### 11.6.3 完整

```js
1.修改 package.json 的 bin 文件 
2.修改 package.json 的 name 字段
3.添加 父级文件的 script 的 prepare 类似于 

"dev": "frontengineerplugin"
```



 



## 11.7 个人 ui  | npm 包 | snippet



跟上面的主要区别是 个人 ui  npm 包 对于 初始化 的 snippet 更加敏感。因此我们需要在 npm install 的 生命周期做文章。需要注意一下。这里的 process.cwd() 本来我以为 会 指向跟路径 但是 由于 执行得到 问题。 实际上 __dirname 和  process.cwd() 的 位置结果一样



不同于 husky 的 源码，因为husky的源码实际上是在另一个地方执行。因此我们 如果 需要 找到 我们的 跟 路径 可以 向上 找到 package这个文件

这是我做的最小示例





### install.js

这里的原理是 找到 package.json 的位置然后进行写入

```js
#!/usr/bin/env node

const fs = require("fs");
const execSync = require("child_process").execSync;
const path = require("path");

// execSync(`npm install eslint@7 -D`);

function search(pathVar, num) {
	if (num > 5) {
		console.log("找不到package.json");
		throw new Error("找不到package.json")
	}
	
	let currentPath = path.resolve(pathVar);
	console.error(`${currentPath}`)
	// throw new Error("找不到package.json")
	if (fs.existsSync(path.resolve(currentPath,"package.json"))) {
		operate(currentPath)
	} else {
		search(path.resolve(currentPath,".."), ++num);
	}
}


/**
 * @des 搜索到 package.json 判断有没有vscode
 * @param {*} currentPath 
 * @returns 
 */
function operate(currentPath) {
	console.log(currentPath)
	if (fs.existsSync(path.resolve(currentPath, ".vscode"))) {
		console.log(`.vscode存在 | 现在 进行写入`);
		let originPath = path.resolve(__dirname, ".vscode", "ts.code-snippets");
		// 这里 更改你的 文件名
		let targetPath = path.resolve(
			currentPath,
			".vscode",
			"你的项目.code-snippets"
		);
		fs.cp(originPath, targetPath, (err) => {
			if (err) {
				throw new Error(`${err}`);
			}
		});
	} else {
		console.log(`.vscode不存在 | 现在 进行写入`);
		let originPath = path.resolve(__dirname, ".vscode");
		let targetPath = path.resolve(currentPath,".vscode");
		fs.cp(originPath, targetPath, { recursive: true }, (err) => {
			if (err) {
				throw new Error(`${err}`);
			}
		});
	}
	return 
}
search(path.resolve(".."),0)

```





### package.json



这里面的 bin 字段改成 install.js 就可以了。然后 install 这个包的时候就会有智能提示









### vscode







## 11.8 个人 | npm | ts 智能提示

ts json 添加上这些就可以了。"declaration":true, 可以 把 .d.ts 分离出来。然后 命令行 输入 tsc 就可以了  

```json
{
  "compilerOptions": {
    "target": "es2022",
    "module": "esnext", /* Specify what module code is generated. */
    // "rootDir": "./",                                  /* Specify the root folder within your source files. */
    // "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */
    // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
    /* Interop Constraints */
    // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
    // "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
    "esModuleInterop": true, /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
    "forceConsistentCasingInFileNames": true, /* Ensure that casing is correct in imports. */
    "moduleResolution": "node",
    /* Type Checking */
    "strict": true, /* Enable all strict type-checking options. */
    "noImplicitAny": true, /* Enable error reporting for expressions and declarations with an implied 'any' type. */
    // "suppressImplicitAnyIndexErrors":true,
    "noImplicitThis": false,
    "skipLibCheck": true, /* Skip type checking all .d.ts files. */
    "declaration":true,
    // "declarationDir": "dist",
    "typeRoots": ["./types"]
  }
}
```



## 11.9 智能提示 html | vscode 插件



### 11.9.1 安装

```shell
npm install -g yo generator-code
```



### 11.9.2 安装插件 

```shell

首先访问 login.live.com/ 登录你的Microsoft账号，没有的先注册一个，然后访问： https://dev.azure.com/，如果你从来没有使用过Azure，那么就要先创建一个Azure DevOps 组织，默认会创建一个以邮箱前缀为名的组织

然后在 个人设置里面 点击 personal access token 

注意里面的 organization 设置成 all ，然后 scopes 给一个 full access


复制 key 下来 y5vwuqqfmipi37lrqf477px4qnh4ko73lcxif5xmcrv3jhr6wbua
```



### 11.9.3 package.json 里面 

```shell
{
	"name": "webzen-ui-vscode",
	"displayName": "webzen-ui-vscode",
	"description": "webzen-ui 的 vscode snippet",
	"version": "0.0.9",
	"icon": "asset/icon.jpg",
	"engines": {
		"vscode": "^1.66.0"
	},
	"repository": {
		"type": "git",
		"url": "",
		"directory": "src"
	},
	"categories": [
		"Other"
	],
	"publisher": "Electrolux",
	"activationEvents": [
    "onLanguage:vue",
    "onLanguage:javascript",
    "onLanguage:typescript",
    "onLanguage:javascriptreact",
    "onLanguage:typescriptreact"
  ],
	"main": "./dist/extension.js",
	"contributes": {
		"commands": []
	},
	"scripts": {
		"build": "webpack --mode production --devtool hidden-source-map",
		"package": "yarn gen && yarn build && vsce package",
		"publish": "vsce publish",
		"unpublish": "vsce unpublish nutui.nutui-vscode-extension",
		"gen": "node ./scripts/createComponentMap.js",
		"plugin":"vsce package",
		"reinstall": "npm run build && vsce package"
	},
	"devDependencies": {
		"@types/glob": "^7.2.0",
		"@types/mocha": "^9.0.0",
		"@types/vscode": "^1.66.0",
		"@typescript-eslint/eslint-plugin": "^5.9.1",
		"@typescript-eslint/parser": "^5.9.1",
		"@vscode/test-electron": "^2.0.3",
		"eslint": "^8.6.0",
		"glob": "^7.2.0",
		"mocha": "^9.1.3",
		"ts-loader": "^9.4.2",
		"webpack": "^5.84.0",
		"webpack-cli": "^5.1.1",
		"@vscode/vsce": "^2.7.0"
	}
}

```



### 19.9.4 componentMap type 文件



```ts
export interface componentMapPropsType{
  name:string,
  snippet:string,
  reg:RegExp
  key:string[]
}

export interface componentMapBasicType {
  name: string;
  site?: string;
  props:Array<componentMapPropsType> | null;
  snippetStr:string[]
}
export type componentMapType = Array<componentMapBasicType>
export const componentMap: componentMapType = [{
  name: "button",
  site: '/zh-CN/component/address',
  props: [{
    name:"className",
    snippet:"className=\"${1|solid,light|}\" ",
    reg:/clas.*/g,
    key:["big","small","medium"]
  }],
  snippetStr: ["<wz-button type=\"${1|solid,light|}\" value =\"$2\"/> ",
    "</wz-button name =\"$3\" >"
  ],

},
{
  name: "title",
  site: '/zh-CN/component/address',
  props: null,
  snippetStr: ["<var name =\"$1\" value =\"$2\"/>",
    "<var name =\"$3\" >"
  ],
  
}


];

```





### 11.9.5 extension.ts 文件

```ts
import * as vscode from 'vscode';
import { kebabCase, bigCamelize } from './utils';
import { componentMap } from './componentMap';
import {componentMapPropsType} from "./componentMap"
const H5DOC = 'https://yilaikesi.github.io/webzen-ui/components/icon';


const LINK_REG = /(?<=<wz-)([\w-]+)/g;
const BIG_LINK_REG = /(?<=<WZ-)([\w-])+/g;
const files = ['vue', 'typescript', 'javascript', 'javascriptreact', 'typescriptreact'];

// 覆盖上去 显示的 东西
const provideHover = (document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken) => {
 
  const line = document.lineAt(position);
  const componentLink = line.text.match(LINK_REG) ?? [];
  const componentBigLink = line.text.match(BIG_LINK_REG) ?? [];
  const components = [...new Set([...componentLink, ...componentBigLink.map(kebabCase)])];

  if (components.length) {
    const text = new vscode.MarkdownString(
      `webzenUI -> ${bigCamelize("测试一下")} 组件文档 [[H5]](${H5DOC}) \n`
    )

    return new vscode.Hover(text);
  }
};


const provideCompletionItems = (document: vscode.TextDocument, position: vscode.Position) => {
  console.log("被互踩")
  const start: vscode.Position = new vscode.Position(position.line, 0);
  const range: vscode.Range = new vscode.Range(start, position);
  const text: string = document.getText(range);

  
  const completionItems: vscode.CompletionItem[] = [];
  console.log(start,range,text)
  // 检查正在输入的字符是否匹配特殊符号
  
  // 重要1：最简单的 string 替换
  for (let i in componentMap) {
    let temp = new vscode.CompletionItem(
      {
        label: `wz-${componentMap[i].name}`,
        description: "我的插件"
      }
    )
    temp.insertText = `<wz-${componentMap[i].name}></wz-${componentMap[i].name}}>`
    completionItems.push(temp)
  }

  // 重要2： 模板字符串
  for (let i in componentMap) {
    let temp = new vscode.CompletionItem(
      {
        label: `wa-${componentMap[i].name}`,
        description: "我的模板字符串"
      }
    )
    let snippetStr = '';
    componentMap[i].snippetStr.forEach((str: string, idx: number) => {
      snippetStr += str
      if (idx >= componentMap[i].snippetStr.length - 1) return
      snippetStr += '\n'
    })
    temp.insertText = new vscode.SnippetString(snippetStr)
    completionItems.push(temp)
  }

  // 重要三:属性赋值 正则
  for(let i in componentMap){
    if(componentMap[i].props){

      SearchFn(componentMap[i].props,text,completionItems)
    }
  }



  return new vscode.CompletionList(completionItems,false);
};


// className
// classNameTwice
const SearchFn = (props:Array<componentMapPropsType> | null, text: string,completionItems:any) => {
  if(props){
    props.forEach((v: componentMapPropsType) => {
      const rawClasses = v.reg.test(text)
      if (!rawClasses) {
        // return [];
      } else {
        let arr = v.key
        for (let i in arr) {
          let temp = new vscode.CompletionItem(
            {
              label: `className-${arr[i]}`,
              description: "我的正则字符串"
            }
          )
          temp.insertText = new vscode.SnippetString(v["snippet"])
          completionItems.push(temp)
        }
      }
  
    })
  }
}


// resolveCompletionItem用于定义光标选中当前自动补全item时触发动作，一般情况下无需处理
const resolveCompletionItem = (item: vscode.CompletionItem): any => {
  console.log("item:",item)
  return item;
};

const moveCursor = (characterDelta: number) => {
  const active = vscode.window.activeTextEditor!.selection.active!;
  const position = active.translate({ characterDelta });
  vscode.window.activeTextEditor!.selection = new vscode.Selection(position, position);
};

export function activate(context: vscode.ExtensionContext) {
  // command shift p 可以暴露命令出去
  // vscode.commands.registerCommand 的 方法 默认不会执行。
  // 只有 "contributes"之中的 "commands"  和 "activationEvents" 的 值存在，那么才行
  console.log("我的插件激活了")
  vscode.commands.registerCommand('nutui-move-cursor', moveCursor);
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(files, {
      provideHover
    }),
    vscode.languages.registerCompletionItemProvider(files, {
      provideCompletionItems,
      resolveCompletionItem
      // char
    })
  );
}

// export function deactivate() {}
// import { ExtensionContext, languages, CompletionItem, CompletionItemKind, TextDocument, Position, Range } from 'vscode';

// // 定义一个简单的元素属性提示示例
// const attributeValues: Record<string, string[]> = {
//   class: ['classA', 'classB', 'classC'],
//   id: ['myId', 'yourId', 'theirId'],
//   lang: ['en', 'fr', 'de']
// };

// function provideAttributeCompletion(document: TextDocument, position: Position) {
//   const lineText = document.lineAt(position).text;
//   const tagStart = lineText.lastIndexOf('<', position.character);
//   const tagEnd = lineText.indexOf('>', position.character);

//   // 确保当前光标位置在标签内部
//   if (tagStart === -1 || tagEnd === -1 || tagStart > tagEnd) {
//     return undefined;
//   }

//   const tagName = lineText.slice(tagStart + 1, tagEnd).trim();
//   const attributeNameRange = new Range(position.line, tagStart + 1, position.line, position.character);
//   const attributeNameMatch = lineText.substring(tagStart, position.character).match(/\s(\w+)=["']?$/);

//   if (!attributeNameMatch) {
//     return undefined;
//   }

//   const attributeName = attributeNameMatch[1];

//   // 根据标签名和属性名获取可能的属性值
//   const attributeValueSuggestions = attributeValues[attributeName] || [];

//   // 生成补全建议列表
//   const completionItems: CompletionItem[] = attributeValueSuggestions.map(value => {
//     const item = new CompletionItem(value, CompletionItemKind.Value);
//     item.detail = `Attribute value for "${attributeName}" in "${tagName}"`;
//     item.textEdit = { range: attributeNameRange, newText: `${attributeName}="${value}"` };
//     return item;
//   });

//   return completionItems;
// }

// export function activate(context: ExtensionContext) {
//   // 注册补全提供程序
//   context.subscriptions.push(
//     vscode.languages.registerHoverProvider(files, {
//       provideHover
//     }),
//     vscode.languages.registerCompletionItemProvider(files, {
//       provideCompletionItems(document, position) {
//         return provideAttributeCompletion(document, position);
//       }
//     })
//   );
// }


```





### 11.9.6 npm build 和 npm run publish 













## 11.10 package.json



### 11.10.1 依赖冲突的时候

- 作为使用者 可以用 package.json 的 resolution 属性进行隔离
- 作为开发者需要指定 peerdepend



### 11.10.2 bin

```shell
// bin 字段 会在 会建立 node_module/.bin 中命令的映射，当我们 输入一个包的名字的时候，我们就会执行 node 映射的方法.js

// 直接在 package.json 写三方依赖的命令可以被 npm 成功识别并调用的原理就是 去到了 bin 字段 


注意一下 在这个地方的 文件头部需要加上
#!/usr/bin/env node
```





## 11.11 npm 





### 11.1.1 npm 不同版本安装的区别

- npm2 是 全量 安装
- npm3 是 多个版本的包`只能有一个`被提升上来，其余版本的包会嵌套安装到**各自的依赖当中**





### 11.1.2 幽灵依赖

**Phantom dependencies** 被称之为**幽灵依赖**或**幻影依赖**，解释起来很简单，即某个包没有在`package.json` 被依赖，但是用户却能够引用到这个包







