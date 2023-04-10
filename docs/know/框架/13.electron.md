# 13.electron

[[toc]]

## 13.1 基础

```shell
git clone https://github.com/electron/electron-quick-start
cd electron-quick-start
npm install && npm start
```





### 13.1.1 生命周期

```
ready：app 初始化完成

dom-ready：一个窗口中的文本加载完成

did-finish-load：导航完成时触发

window-all-closed：所有窗口都被关闭时触发


```



### 13.1.2 打包

```shell
npm install --save-dev @electron-forge/cli # 这一步好像可以不要
npx electron-forge import 
```



### 13.1.3 bug

```js
The entry point to your application ("packageJSON.main") must be in a subfolder not in the top level directory
对于这种报错，我们可以把入口的js文件放进文件夹里面
```





## 13.2 原理 | 进阶

send on 

sendto 



### 13.2 .1 主进程 | 渲染进程

```
同时使用了 main(主进程) 和一个或者多个 rendere(渲染进程) 来运行多个程序。每个运行的进程包含一个 process对象

主进程只能有一个(main.js)，渲染进程可以有一堆东西(别的乱七八糟的)

切换黑夜模式官方推荐用ipc
```



### 13.2.2 BrowserView | BrowserWindow

```js
BrowserView 这玩意就是webview

app.whenReady().then(() => {
  const win = new BrowserWindow({ width: 800, height: 600 })

  const view = new BrowserView()
  win.setBrowserView(view)
  view.setBounds({ x: 0, y: 0, width: 300, height: 300 })
  view.webContents.loadURL('https://electronjs.org')
})
```



### 13.2.3 主进程 <->渲染进程 | 主进程 被动 监听 | 没返回值

```js
ipcMain 是 主进程
ipcRenderer 是 渲染进程

主进程 监听
ipcMain.on('messageSend',(event,data)=>{
    console.log(data)
    event.sender("你好",23)
})

子进程

const  {ipcRenderer} = require('electron')
ipcRenderer.send('messageSend',"发送信息")
ipcRenderer.on("你好",(e)=>{
	console.log("事件",e)
})
```





### 13.2.4 主进程->渲染进程 | 向窗口广播 | 没返回值

```js

主进程 
webContents.getAllWebContents().forEach((win)=>{
    win.send("你好",2333)
})

子进程

const  {ipcRenderer} = require('electron')

ipcRenderer.on("你好",(e)=>{
	console.log("事件",e)
})
```













### 13.2.5 主进程->渲染进程 | 向指定窗口发送 | 没返回值

```js


mainWindow = initWindow(__dirname,iconPath) // new BrowserWindow
sideWindow = initWindow(__dirname,iconPath)

windowName["main"] = mainWindow.webContents.id
windowName["side"] = sideWindow.id

webContents.fromId(windowName["main"]).send("你好",23323)
```





### 13.2.6 渲染进程 >渲染进程 | 向指定窗口发送 | 没返回值

```
ipc.sendTo(渲染进程的id,一个事件,数据)
```



### 13.2.7 渲染进程 >主进程  | 有返回值

```js
ipcMain.handle('echo',(event,data)=>{
    return data
})

ipcRenderer.invoke("echo",222).then((res)=>{
    console.log(res)
})

```

























