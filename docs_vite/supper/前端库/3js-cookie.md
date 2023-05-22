

# 3.js-cookie
[[toc]]
## 3.1 js-cookie的基础使用

npm install js-cookie

 js-cookie是一个简单的，轻量级的处理cookies的js  这玩意我一般和vuex一起用。commit给一个mutation，然后命名空间直接读数据就可以了

**创建**

```javascript
import Cookies from 'js-cookie'
//创建简单的cookie
Cookies.set('name', 'value');
//创建有效期为7天的cookie
Cookies.set('name', 'value', { expires: 7 });
//为当前页创建有效期7天的cookie
Cookies.set('name', 'value', { expires: 7, path: '' });
123456
```

**取值**

```javascript
Cookies.get('name'); // => 'value'
Cookies.get('nothing'); // => undefined
//获取所有cookie
Cookies.get(); // => { name: 'value' }
1234
```

**删除值**

```javascript
Cookies.remove('name');

//如果值设置了路径，那么不能用简单的delete方法删除值，需要在delete时指定路径
Cookies.set('name', 'value', { path: '' });
Cookies.remove('name'); // 删除失败
Cookies.remove('name', { path: '' }); // 删除成功
//注意，删除不存在的cookie不会报错也不会有返回
1234567
```

**命名空间**
可用noConflict方法定义一个新的cookie。

```javascript
var Cookies2 = Cookies.noConflict();
Cookies2.set('name', 'value');
12
```

***set方法支持的属性(expires)***

```javascript
//定义有效期。如果传入Number，那么单位为天，你也可以传入一个Date对象，表示有效期至Date指定时间。默认情况下cookie有效期截止至用户退出浏览器。
Cookies.set('name', 'value', { expires: 7 }); 
// 7 天后失效
//官方文档只要设置天数，没有时分秒，这样我们想设置更小单位的时候无法下手，其实也可以设置时间戳来处理时间的，下面这种方式可以设置任意单位的有效期：
let seconds = 10;
let expires = new Date(new Date() * 1 + seconds * 1000);
Cookies.set('username', 'tanggaowei', { expires: expires }); // 10 秒后失效
1234567
```

**cookie.set()更多参数**
语法：
cookies.set（名称，[值]，[options]）
更多options的参数配置：

maxAge：一个数字，表示自Date.now()到期起的毫秒数

expires：一个Date对象，指示cookie的过期日期（默认在会话结束时过期）。默认：天

path：一个字符串，指示cookie的路径（/默认情况下）。

domain：一个字符串，指示cookie的域（无默认值）。

secure：一个布尔值，指示cookie是否仅通过HTTPS发送（false默认情况下，对于HTTP，true默认情况下，对于HTTPS）。在下面阅读有关此选项的更多信息。
httpOnly：一个布尔值，指示cookie是否仅通过HTTP（S）发送，并且不提供给客户端JavaScript（true默认情况下）。

sameSite：布尔值或字符串，指示cookie是“相同站点” cookie（false默认情况下）。可以将其设置为’strict’，‘lax’或true（映射到’strict’）。

signed：一个布尔值，指示是否要对cookie进行签名（false默认情况下）。如果为真，.sig则还将发送另一个具有后缀的同名Cookie，其27字节的url安全base64 SHA1值表示针对第一个Keygrip密钥的cookie-name = cookie-value的哈希值。此签名密钥用于检测下次接收cookie时的篡改。

overwrite：一个布尔值，指示是否覆盖以前设置的同名Cookie（false默认情况下）。如果是这样，则在设置此Cookie时，将从相同名称的同一个请求中设置的所有Cookie（无论路径或域如何）都从Set-Cookie标头中过滤掉。



删除所有cookies

```js
function clearCookie() {
    var keys = document.cookie.match(/[^ =;]+(?=)/g);
    if (keys) {
      for (var i = keys.length; i--;) {
        document.cookie = keys[i] + '=0;path=/;expires=' + new Date(0).toUTCString();//清除当前域名下的,例如：m.kevis.com
        document.cookie = keys[i] + '=0;path=/;domain=' + document.domain + ';expires=' + new Date(0).toUTCString();//清除当前域名下的，例如 .m.kevis.com
        document.cookie = keys[i] + '=0;path=/;domain=kevis.com;expires=' + new Date(0).toUTCString();//清除一级域名下的或指定的，例如 .kevis.com
      }
    }
    console.log('已清除');
  }
  clearCookie()
```







## 3.2 实际使用vuex示例

store/modules/xxx.js中

```js
import Cookies from 'js-cookie'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop',
  isCollapse: Cookies.get('collapse') 
}

const mutations = {
  
  collapseMenutest: () => {
    Cookies.set("collapse",'vuex里面设置的方法',{ expires: 7 }) 
    console.log("这是vuex的方法")
  }
}



export default {
  namespaced: true,
  state,
  mutations,
}

```



