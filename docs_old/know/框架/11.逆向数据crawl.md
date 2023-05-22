# 11. 逆向 | 数据crawl

[[toc]]

## 11.1 逆向



### 11.1.1 逆向基础

```js
// document.cookie



// --1.函数hook

// js hook 的原理是”重新定义函数，通过调用位置中间走我们当前的函数，改变执行流程。
// 1.1.我们可以输出分析日志(用一个变量保存函数 . 写一个方法 覆盖前面的方法，然后用变量去console 调用的参数和结果)
// 1.2.定位关键点:(加上debug)
// 1.3.改变返回结果(比如 无限debug的情况)
// 我们hook的位置是在function 定义 和 调用函数 的中间

// 类似于
function add(a,b){
    return a+b
}
add = (a,b) =>{
    return a *b
}

// 这样就成功hook了


// --2.对象属性hook 的原理跟function差不多,在定义对象 和 调用位置 中间 进行 hook


// 类似于
let user = {
    name:"小明"
}
let _user = user.name
Object.defineProperties(user,"name",{
    get(){
        // 获取属性值执行  log
        return user
    },
    set(value){
        // 设置属性值执行  =
        _user = value
    }
})

// 这里可以监听document 上面的值


// --3.浏览器环境 hook . 可以在页面加载之前加载
_atob = atob
atob = function (str){
    console.log("正在执行atob方法",str)
    let result = _atob(str)
    return result
}

// --4.hook 检测点 和保护
// 有的会使用toString和原型链 方法来进行 访问和检测
// console.log(atob.toString()==xxx)
// Function.prototype.tostring.call(atob) === 'function atob() { [native code] } '
// 我们从原型链上hook他一下.注意 toString 和 原型链上面 hook 的有问题


Function.prototype.tostring = function (){
    return `function ${this.name}() { [native code] }`
}

// --4.包装成 native 方法
// globalThis 在node 是 global .在浏览器 是 window 都是全局变量
// 这里可以写  globalThis.set_native
function set_native(func) {
    func.toString = function () { return `function ${func.name}(){ [native code] }` }
    func.prototype.toString = toString
    return func
}

function add(){
    console.log("add")
}

//直接把自己函数自身native吧
console.log(set_native(add).toString())


// --5. symbol ,定义了之后就再也拿不到了，类似于私有属性
let obj = {}
let key = Symbol()
obj[ key] = 1

Object.defineProperty(obj,key,{
    enumerable:false
})


// --6. 函数重命名 每一个函数都有一个name 属性
function renameFn(fn,name){
    Object.defineProperty(fn,"name",{
        configurable:true,
        enumerable:false,
        writable:false,
        value:name
    })
}
Object.getOwnPropertyDescriptor(Document.prototype,"cookie").get.name



// hook 函数 封装

function hook({fn:fn,fnInfo:fnInfo,isDebug,})



// 登录：
// ctrl + shift +f
// 猜测＋断点 ，之后可以把上面的 变量名 输出一下。 这里输出的是空间，然后我们需要拿到数据那么我们就可以用val来进行
//  找到加密解密的过程，然后想aes需要16位的key 和 内容

// 可以写一个 crypto 的通用hook



// --------------例子------------------
// --1.监听cookie
let cookieTemp = ''
Object.defineProperties(document,'cookie',{
    set:function(val){
        // cookie加密就打断点
        if(val.indexOf("BIDUPSID") != -1){
            debugger;
        }
        console.log("cookies值:",val )
    },
    get:function(){
        return cookieTemp
    }
})




```





### 11.1.2 检测

```js
// ==UserScript==
// @name         Hook Crypto
// @namespace    42
// @version      0.1
// @description  Hook Crypto
// @match        https://*/*
// @match        http://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==


const Hook_ = {}
/**
 * onload: 定时器是否在页面加载完后自动清除
 * debug: debug是否开启
 * prohibit_arr: 不希望被打印的方法
 */
Hook_.onload = true;
Hook_.debug = false;
Hook_.prohibit_arr = ["enc.Latin1.parse", "enc.Utf8.parse", "getRandomValues"];


//  控制debug是否触发
(function () {
    if (window.debug_ === undefined) {
        window.debug_ = Hook_.debug;
    }
})();

//  控制代码只运行一次
let arr__ = [];

function for_once(text) {
    if (arr__.indexOf(text) === 0) {
    } else if (arr__.indexOf(text) === -1) {
        eval(text)
        arr__.push(text)
    }
}

//  打印
let debug_log = (function () {


    //  打印颜色
    let blue = "padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: #1475b2;";
    let green = "padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: #32CD32;"
    let grey = "padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060;";
    let red = "padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #FF4500;";
    let yellow = "padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #BFA100;";

    function if_colour(value) {
        if (value === "crypto" || value === "Crypto") {
            return blue
        }
        if (value === "CryptoJS") {
            return red
        }
        if (value === "BigInteger" || value === "JSEncrypt") {
            return yellow
        }
        if (value === "biToHex") {
            return green
        } else {
            return grey
        }
    }

    //  不希望被打印的方法[value]
    let prohibit_arr = Hook_.prohibit_arr;

    return function (key, value, data) {
        /**
         * 控制 输出 过滤
         */

        if (prohibit_arr.indexOf(value.replace(/ /g, "")) !== -1) {
            return
        }
        ;

        let colour = if_colour(key);
        // let colour = "padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #BFA100;";
        console.log(`%c ${key} %c ${value} `, colour, grey, data);
        if (window.debug_) {
            debugger;
        }
    }
})();

/**
 * 浏览器api Hook
 * Crypto web-api Hook
 * [因为是浏览器api, 所以不需要开定时器去检测]
 */

(function () {
    if (window.crypto !== undefined) {
        //  crypto.randomUUID
        window.crypto.randomUUID_ = window.crypto.randomUUID;
        window.crypto.randomUUID = function () {
            randomUUID__ = crypto.randomUUID_()
            debug_log("crypto", "randomUUID", {randomUUID__})
            return randomUUID__
        }

        //  getRandomValues Hook
        window.crypto.getRandomValues_ = window.crypto.getRandomValues;
        window.crypto.getRandomValues = function (ArrayBufferView) {
            debug_log("crypto", "getRandomValues", {ArrayBufferView})
            return this.getRandomValues_(ArrayBufferView);
        }
    }
    if (window.SubtleCrypto !== undefined) {
        //  encrypt Hook
        window.SubtleCrypto.prototype.encrypt_ = window.SubtleCrypto.prototype.encrypt;
        window.SubtleCrypto.prototype.encrypt = function (algorithm, key, data) {
            debug_log("Crypto", "encrypt", {algorithm, key, data})
            return this.encrypt_(algorithm, key, data)
        }
        //  importKey Hook
        window.SubtleCrypto.prototype.importKey_ = window.SubtleCrypto.prototype.importKey;
        window.SubtleCrypto.prototype.importKey = function (format, keyData, algorithm, extractable, keyUsages) {

            debug_log("Crypto", "importKey", {format, keyData, algorithm, extractable, keyUsages})
            return this.importKey_(format, keyData, algorithm, extractable, keyUsages);
        }
        //  decrypt Hook
        window.SubtleCrypto.prototype.decrypt_ = window.SubtleCrypto.prototype.decrypt;
        window.SubtleCrypto.prototype.decrypt = function (algorithm, key, data) {
            debug_log("Crypto", "decrypt", {algorithm, key, data})
            return this.decrypt_(algorithm, key, data)
        }
        //  sign Hook
        window.SubtleCrypto.prototype.sign_ = window.SubtleCrypto.prototype.sign;
        window.SubtleCrypto.prototype.sign = function (algorithm, key, data) {
            debug_log("Crypto", "sign", {algorithm, key, data})
            return this.sign_(algorithm, key, data)
        }
        //
        window.SubtleCrypto.prototype.verify_ = window.SubtleCrypto.prototype.verify;
        window.SubtleCrypto.prototype.verify = function (algorithm, key, signature, data) {
            debug_log("Crypto", "verify", {algorithm, key, signature, data})
            return this.verify_(algorithm, key, signature, data)
        }
        //  digest Hook
        window.SubtleCrypto.prototype.digest_ = window.SubtleCrypto.prototype.digest;
        window.SubtleCrypto.prototype.digest = function (algorithm, data) {
            debug_log("Crypto", "digest", {algorithm, data})
            return this.digest_(algorithm, data)

        }
        //  generateKey Hook
        window.SubtleCrypto.prototype.generateKey_ = window.SubtleCrypto.prototype.generateKey;
        window.SubtleCrypto.prototype.generateKey = function (algorithm, extractable, keyUsages) {
            debug_log("Crypto", "generateKey", {algorithm, extractable, keyUsages})
            return this.generateKey_(algorithm, extractable, keyUsages)
        }
        //  deriveKey Hook
        window.SubtleCrypto.prototype.deriveKey_ = window.SubtleCrypto.prototype.deriveKey;
        window.SubtleCrypto.prototype.deriveKey = function (algorithm, baseKey, derivedKeyType, extractable, keyUsages) {
            debug_log("Crypto", "deriveKey ", {
                algorithm,
                baseKey,
                derivedKeyType,
                extractable,
                keyUsages
            })
            return this.deriveKey_(algorithm, baseKey, derivedKeyType, extractable, keyUsages)
        }
        //  deriveBits Hook
        window.SubtleCrypto.prototype.deriveBits_ = window.SubtleCrypto.prototype.deriveBits;
        window.SubtleCrypto.prototype.deriveBits = function (algorithm, baseKey, length) {
            debug_log("Crypto", "deriveBits ", {algorithm, baseKey, length})
            return this.deriveBits_(algorithm, baseKey, length)
        }
        //  exportKey Hook
        window.SubtleCrypto.prototype.exportKey_ = window.SubtleCrypto.prototype.exportKey;
        window.SubtleCrypto.prototype.exportKey = function (format, key) {
            debug_log("Crypto", "exportKey", {format, key})
            return this.exportKey_(format, key)
        }
        //  wrapKey Hook
        window.SubtleCrypto.prototype.wrapKey_ = window.SubtleCrypto.prototype.wrapKey;
        window.SubtleCrypto.prototype.wrapKey = function (format, key, wrappingKey, wrapAlgorithm) {
            debug_log("Crypto", "wrapKey", {format, key, wrappingKey, wrapAlgorithm})
            return this.wrapKey_(format, key, wrappingKey, wrapAlgorithm)
        }
        //  unwrapKey Hook
        window.SubtleCrypto.prototype.unwrapKey_ = window.SubtleCrypto.prototype.unwrapKey;
        window.SubtleCrypto.prototype.unwrapKey = function (format, wrappedKey, unwrappingKey, unwrapAlgorithm, unwrappedKeyAlgorithm, extractable, keyUsages) {
            debug_log("Crypto", "unwrapKey", {
                format,
                wrappedKey,
                unwrappingKey,
                unwrapAlgorithm,
                unwrappedKeyAlgorithm,
                extractable,
                keyUsages
            })
            return this.unwrapKey_(format, wrappedKey, unwrappingKey, unwrapAlgorithm, unwrappedKeyAlgorithm, extractable, keyUsages)
        }
    }
    if (window.Crypto !== undefined) {
        //HmacMD5   Hook
        for_once("window.Crypto.HmacMD5_ = window.Crypto.HmacMD5;")
        if (window.Crypto.HmacMD5 !== undefined) {
            window.CryptoJS.HmacMD5 = function () {
                debug_log("Crypto", "HmacMD5", {Data: arguments[0], HmacKey: arguments[1]})
                return window.Crypto.HmacMD5_(arguments[0], arguments[1]);
            }
        }
        //  HmacSHA1    Hook
        for_once("window.Crypto.HmacSHA1_ = window.Crypto.HmacSHA1;")
        if (window.Crypto.HmacSHA1 !== undefined) {
            window.CryptoJS.HmacSHA1 = function () {
                debug_log("Crypto", "HmacSHA1", {Data: arguments[0], HmacKey: arguments[1]})
                return window.Crypto.HmacSHA1_(arguments[0], arguments[1]);
            }
        }
        //  window.Crypto.HmacSHA256
        for_once("window.Crypto.HmacSHA256 = window.Crypto.HmacSHA256;")
        if (window.Crypto.HmacSHA256 !== undefined) {
            window.CryptoJS.HmacSHA256 = function () {
                debug_log("Crypto", "HmacSHA256", {Data: arguments[0], HmacKey: arguments[1]})
                return window.Crypto.HmacSHA256_(arguments[0], arguments[1]);
            }
        }
        //  window.Crypto.HmacSHA384 Hook
        for_once("window.Crypto.HmacSHA384 = window.Crypto.HmacSHA384;")
        if (window.Crypto.HmacSHA384 !== undefined) {
            window.CryptoJS.HmacSHA384 = function () {
                debug_log("Crypto", "HmacSHA384", {Data: arguments[0], HmacKey: arguments[1]})
                return window.Crypto.HmacSHA384(arguments[0], arguments[1]);
            }
        }
        //  HacSHA512   Hook
        for_once("window.Crypto.HmacSHA512_ = window.Crypto.HmacSHA512;")
        if (window.Crypto.HmacSHA512 !== undefined) {
            window.CryptoJS.HmacSHA512 = function () {
                debug_log("Crypto", "HmacSHA512", {Data: arguments[0], HmacKey: arguments[1]})
                return window.Crypto.HmacSHA512_(arguments[0], arguments[1]);
            }
        }

        //Rabbit加解密
        if (window.Crypto.Rabbit !== undefined) {
            for_once("Rabbitencrypt = window.Crypto.Rabbit.encrypt;")
            window.CryptoJS.Rabbit.encrypt = function () {
                debug_log("Crypto", "Rabbit.encrypt ", {Data: arguments[0], HmacKey: arguments[1]})
                return Rabbitencrypt(arguments[0], arguments[1])
            }

            for_once("Rabbitdecrypt = window.Crypto.Rabbit.decrypt;")
            window.CryptoJS.Rabbit.decrypt = function () {
                debug_log("Crypto", "Rabbit.decrypt ", {Data: arguments[0], HmacKey: arguments[1]})
                return Rabbitdecrypt(arguments[0], arguments[1])
            }
        }
        //PBKDF2加解密
        if (window.Crypto.PBKDF2 !== undefined) {
            for_once("PBKDF2encrypt = window.Crypto.PBKDF2;")
            window.CryptoJS.PBKDF2 = function () {
                debug_log("Crypto", "PBKDF2", {
                    EnData: arguments[0],
                    Salt: arguments[1],
                    KeySize: arguments[2]['keySize'],
                    iterations: arguments[2]['iterations']
                })
                return PBKDF2encrypt(arguments[0], arguments[1], arguments[2])
            }
        }
        //PBKDF2加解密
        if (window.Crypto.EvpKDF !== undefined) {
            for_once("EvpKDFencrypt = window.Crypto.EvpKDF;")
            window.CryptoJS.EvpKDF = function () {
                debug_log("Crypto", "EvpKDF", {
                    EnData: arguments[0],
                    Salt: arguments[1],
                    KeySize: arguments[2]['keySize'],
                    iterations: arguments[2]['iterations']
                })
                return EvpKDFencrypt(arguments[0], arguments[1], arguments[2])
            }
        }
        //Md5加密
        if (window.Crypto.MD5 !== undefined) {
            for_once("MD5encrypt = window.Crypto.MD5;")
            window.CryptoJS.MD5 = function () {
                debug_log("Crypto", "MD5", {Data: arguments[0]})
                return MD5encrypt(arguments[0])
            }
        }
        //SHA1加密
        if (window.Crypto.SHA1 !== undefined) {
            for_once("SHA1encrypt = window.Crypto.SHA1;")
            window.CryptoJS.SHA1 = function () {
                debug_log("Crypto", "SHA1", {Data: arguments[0]})
                return SHA1encrypt(arguments[0])
            }
        }
        //SHA3加密
        if (window.Crypto.SHA3 !== undefined) {
            for_once("SHA3encrypt = window.Crypto.SHA3;")
            window.CryptoJS.SHA3 = function () {
                debug_log("Crypto", "SHA3", {Data: arguments[0]})
                return SHA3encrypt(arguments[0])
            }
        }
        //SHA224加密
        if (window.Crypto.SHA224 !== undefined) {
            for_once("SHA224encrypt = window.Crypto.SHA224;")
            window.CryptoJS.SHA224 = function () {
                debug_log("Crypto", "SHA224", {Data: arguments[0]})
                return SHA224encrypt(arguments[0])
            }
        }
        //SHA256加密
        if (window.Crypto.SHA256 !== undefined) {
            for_once("SHA256encrypt = window.Crypto.SHA256;")
            window.CryptoJS.SHA256 = function () {
                debug_log("Crypto", "HmacMD5", {Data: arguments[0]})
                return SHA256encrypt(arguments[0])
            }
        }
        //SHA384加密
        if (window.Crypto.SHA384 !== undefined) {
            for_once("SHA384encrypt = window.Crypto.SHA384;")
            window.CryptoJS.SHA384 = function () {
                debug_log("Crypto", "SHA384", {Data: arguments[0]})
                return SHA384encrypt(arguments[0])
            }
        }
        //SHA512加密
        if (window.Crypto.SHA512 !== undefined) {
            for_once("SHA512encrypt = window.Crypto.SHA512;")
            window.CryptoJS.SHA512 = function () {
                debug_log("Crypto", "SHA512", {Data: arguments[0]})
                return SHA512encrypt(arguments[0])
            }
        }
        //RIPEMD160加密
        if (window.Crypto.RIPEMD160encrypt !== undefined) {
            for_once("RIPEMD160encrypt = window.Crypto.RIPEMD160;")
            window.CryptoJS.RIPEMD160 = function () {
                debug_log("Crypto", "RIPEMD160", {Data: arguments[0]})
                return RIPEMD160encrypt(arguments[0])
            }
        }
    }
})();


/**
 * 第三方常见加密库
 * CryptoJS Hook
 * JSEncrypt Hook
 * biToHex Hook
 * BigInteger Hook
 */

//  CryptoJS
window.Hook_CryptoJS__ = function () {
    // 判断有无CryptoJS库
    if (window.CryptoJS !== undefined) {
        //  AES Hook
        if (window.CryptoJS.AES !== undefined) {
            // AES.encrypt Hook
            for_once("window.CryptoJS.AES.encrypt_ = window.CryptoJS.AES.encrypt;")
            window.CryptoJS.AES.encrypt = function (message, key, cfg) {
                debug_log("CryptoJS", "AES.encrypt ", {message, key, cfg})
                try {
                    console.log("\t%c Data ", grey, {Data: window.CryptoJS.enc.Utf8.stringify(message)})
                    console.log("\t%c Key ", grey, {Key: window.CryptoJS.enc.Utf8.stringify(key)})
                    console.log("\t%c Iv ", grey, {Iv: window.CryptoJS.enc.Utf8.stringify(cfg["iv"])})
                } catch (e) {
                }

                return this.encrypt_(message, key, cfg)
            }
            // AES.decrypt Hook
            for_once("window.CryptoJS.AES.decrypt_ = window.CryptoJS.AES.decrypt;")
            window.CryptoJS.AES.decrypt = function (ciphertext, key, cfg) {
                debug_log("CryptoJS", "AES.decrypt", {ciphertext, key, cfg})
                return this.decrypt_(ciphertext, key, cfg)
            }
        }
        //  enc Hook
        if (window.CryptoJS.enc !== undefined) {
            //  enc.Latin1.parse Hook
            for_once("window.CryptoJS.enc.Latin1.parse_ = window.CryptoJS.enc.Latin1.parse;")
            window.CryptoJS.enc.Latin1.parse = function (e) {
                debug_log("CryptoJS", "enc.Latin1.parse ", {e})
                return window.CryptoJS.enc.Latin1.parse_(e)
            }
            //  enc.Base64.parse Hook
            for_once("window.CryptoJS.enc.Base64.parse_ = window.CryptoJS.enc.Base64.parse;")
            window.CryptoJS.enc.Base64.parse = function (e) {
                debug_log("CryptoJS", "enc.Base64.parse", {e})
                return window.CryptoJS.enc.Base64.parse_(e)
            }
            //  enc.Base64.stringify Hook;
            for_once("window.CryptoJS.enc.Base64.stringify_ = window.CryptoJS.enc.Base64.stringify;")
            window.CryptoJS.enc.Base64.stringify = function (e) {
                debug_log("CryptoJS", "enc.Base64.stringify ", {e})
                return window.CryptoJS.enc.Base64.stringify_(e)
            }
            //  enc.Hex.parse Hook;
            for_once("window.CryptoJS.enc.Hex.parse_ = window.CryptoJS.enc.Hex.parse;")
            window.CryptoJS.enc.Hex.parse = function (e) {
                debug_log("CryptoJS", "enc.Hex.parse ", {e})
                return window.CryptoJS.enc.Hex.parse_(e)
            }
            // enc.Hex.stringify   Hook;
            for_once("window.CryptoJS.enc.Hex.stringify_ = window.CryptoJS.enc.Hex.stringify;")
            window.CryptoJS.enc.Hex.stringify = function (e) {
                debug_log("CryptoJS", "enc.Hex.stringify ", {e})
                return window.CryptoJS.enc.Hex.stringify_(e)
            }
            // CryptoJS.enc.Utf8.parse("𔭢");
            for_once("window.CryptoJS.enc.Utf8.parse_ = window.CryptoJS.enc.Utf8.parse;")
            window.CryptoJS.enc.Utf8.parse = function (e) {
                debug_log("CryptoJS", "enc.Utf8.parse", {e})
                return window.CryptoJS.enc.Utf8.parse_(e)
            }
            // //  enc.Utf8.stringify Hook
            // for_once("window.CryptoJS.enc.Utf8.stringify_ = window.CryptoJS.enc.Utf8.stringify;")
            // window.CryptoJS.enc.Latin1.stringify = function (e) {
            //     console.log("%c CryptoJS %c enc.Utf8.stringify ", red, grey, {e})
            //     // console.log("CryptoJS [enc.Utf8.stringify]", {e})
            //     if (window.debug_) {
            //         debugger;
            //     }
            //     return window.CryptoJS.enc.Utf8.stringify_(e)
            // }
            //  enc.Utf16.parse Hook;
            for_once("window.CryptoJS.enc.Utf16.parse_ = window.CryptoJS.enc.Utf16.parse;")
            window.CryptoJS.enc.Utf16.parse = function (e) {
                debug_log("CryptoJS", "enc.Utf16.parse ", {e})
                return window.CryptoJS.enc.Utf16.parse_(e)
            }
            // enc.Utf16.stringify Hook;
            for_once("window.CryptoJS.enc.Utf16.stringify_ = window.CryptoJS.enc.Utf16.stringify;")
            window.CryptoJS.enc.Utf16.stringify = function (e) {
                if (window.debug_) {
                    debugger;
                }
                debug_log("CryptoJS", "enc.Utf16.stringify ", {e})
                return window.CryptoJS.enc.Utf16.stringify_(e)
            }
            //  enc.Utf16LE.parse Hook;
            for_once("window.CryptoJS.enc.Utf16LE.parse_ = window.CryptoJS.enc.Utf16LE.parse;")
            window.CryptoJS.enc.Utf16LE.parse = function (e) {
                debug_log("CryptoJS", "enc.Utf16LE.parse ", {e})
                return window.CryptoJS.enc.Utf16LE.parse_(e)
            }
            // enc.Utf16LE.stringify Hook;
            for_once("window.CryptoJS.enc.Utf16LE.stringify_ = window.CryptoJS.enc.Utf16LE.stringify;")
            window.CryptoJS.enc.Utf16LE.stringify = function (e) {
                debug_log("CryptoJS", "enc.Utf16LE.stringify", {e})
                return window.CryptoJS.enc.Utf16LE.stringify_(e)
            }
        }
        //  DES Hook
        if (window.CryptoJS.DES !== undefined) {
            // DES.encrypt Hook
            for_once("window.CryptoJS.DES.encrypt_ = window.CryptoJS.DES.encrypt;")
            window.CryptoJS.DES.encrypt = function (message, key, cfg) {
                debug_log("CryptoJS", "DES.encrypt", {message, key, cfg})
                try {
                    console.log("\t%c Data ", grey, {Data: window.CryptoJS.enc.Utf8.stringify(message)})
                    console.log("\t%c Key ", grey, {Key: window.CryptoJS.enc.Utf8.stringify(key)})
                    console.log("\t%c Iv ", grey, {Iv: window.CryptoJS.enc.Utf8.stringify(cfg["iv"])})
                } catch (e) {
                }

                return this.encrypt_(message, key, cfg)
            }
            // DES.decrypt Hook
            for_once("window.CryptoJS.DES.decrypt_ = window.CryptoJS.DES.decrypt;")
            window.CryptoJS.DES.decrypt = function (ciphertext, key, cfg) {
                debug_log("CryptoJS", "DES.decrypt", {ciphertext, key, cfg})
                return this.decrypt_(ciphertext, key, cfg)
            }
        }
        //  TripleDES Hook
        if (window.CryptoJS.TripleDES !== undefined) {
            // DES.encrypt Hook
            for_once("window.CryptoJS.TripleDES.encrypt_ = window.CryptoJS.TripleDES.encrypt;")
            window.CryptoJS.TripleDES.encrypt = function (message, key, cfg) {
                if (window.debug_) {
                    debugger;
                }
                debug_log("CryptoJS", "TripleDES.encrypt", {message, key, cfg})
                try {
                    console.log("\t%c Data ", grey, {Data: window.CryptoJS.enc.Utf8.stringify(message)})
                    console.log("\t%c Key ", grey, {Key: window.CryptoJS.enc.Utf8.stringify(key)})
                    console.log("\t%c Iv ", grey, {Iv: window.CryptoJS.enc.Utf8.stringify(cfg["iv"])})
                } catch (e) {
                }

                return this.encrypt_(message, key, cfg)
            }
            // DES.decrypt Hook
            for_once("window.CryptoJS.TripleDES.decrypt_ = window.CryptoJS.TripleDES.decrypt;")
            window.CryptoJS.TripleDES.decrypt = function (ciphertext, key, cfg) {
                debug_log("CryptoJS", "TripleDES", {ciphertext, key, cfg})
                return this.decrypt_(ciphertext, key, cfg)
            }
        }
    }

};

//  BigInteger
window.Hook_BigInteger__ = function () {
    // 判断有无 BigInteger
    if (window.BigInteger !== undefined) {

        for_once(
            "window.BigInteger_ = window.BigInteger;" +
            "window.BigInteger_.prototype = window.BigInteger.prototype;"
        )
        window.BigInteger = function (e, d, f) {

            /**
             * 选这里Hook 是因为特征. 往上追几个栈就能跟到加密点
             */

            debug_log("BigInteger", "new BigInteger", {e, d, f})
            return new window.BigInteger_(e, d, f)
        }
        for (let key in window.BigInteger_) {
            window.BigInteger[key] = window.BigInteger_[key];
        }
    }
}

/**
 * 以下代码来源为： https://www.bilibili.com/video/BV1eY41187y5/
 * 不想边看文档边写 太浪费时间 直接抄过来改得了 时间要紧
 */
window.Hook_biToHex__ = function () {
    if (window.biToHex !== undefined) {
        for_once("window.biToHex_ = window.biToHex;")
        window.biToHex = function (x){
            /**
             * 往上追几个栈就是加密点
             */
            debug_log("biToHex", "biToHex", {x})
            return window.biToHex_(x)
        }

        for_once("ToHex = window.biToHex;")
        if (window.encryptedString !== undefined) {
            for_once("RsaEncrypt = window.encryptedString;")
            window.encryptedString = function () {
                var KeyPair = arguments[0];
                //取右边6位就是公钥了
                var Modulu = "00" + ToHex(KeyPair.m);
                //前面补俩个0
                debug_log("biToHex", "encryptedString", {
                    EnData: arguments[1],
                    PublicKey: ToHex(KeyPair.e).substr(2),
                    Modulus: Modulu
                })
                return RsaEncrypt(KeyPair, arguments[1])
            }
        }
        if (window.decryptedString !== undefined) {
            for_once("RsaDecrypt = window.decryptedString;")
            window.decryptedString = function () {
                var KeyPair = arguments[0];
                //取右边6位就是公钥了
                var Modulu = "00" + ToHex(KeyPair.m);
                //前面补俩个0
                debug_log("biToHex", "encryptedString", {
                    EnData: arguments[1],
                    PublicKey: ToHex(KeyPair.e).substr(2),
                    Modulus: Modulu
                })
                return RsaDecrypt(KeyPair, arguments[1])
            }
        }
    }
};

window.Hook_JSEncrypt__ = function () {
    function hex2b64(h) {
        var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var i;
        var c;
        var ret = "";
        for (i = 0; i + 3 <= h.length; i += 3) {
            c = parseInt(h.substring(i, i + 3), 16);
            ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
        }
        if (i + 1 == h.length) {
            c = parseInt(h.substring(i, i + 1), 16);
            ret += b64map.charAt(c << 2);
        } else if (i + 2 == h.length) {
            c = parseInt(h.substring(i, i + 2), 16);
            ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
        }
        while ((ret.length & 3) > 0)
            ret += "=";
        return ret;
    }

    if (window.JSEncrypt !== undefined) {
        // for_once("window.RSA = window.JSEncrypt.prototype;")
        if (window.JSEncrypt.prototype.encrypt !== undefined) {
            for_once("window.JSEncrypt.prototype.encrypt_ = window.JSEncrypt.prototype.encrypt;")
            window.JSEncrypt.prototype.encrypt = function () {
                debug_log("JSEncrypt", "encrypt", {EnData: arguments[0]})
                return hex2b64(window.JSEncrypt.prototype.encrypt_(arguments[0]))
            }
        }
        if (window.JSEncrypt.prototype.decrypt !== undefined) {
            for_once("window.JSEncrypt.prototype.decrypt_ = window.JSEncrypt.prototype.decrypt;")
            window.JSEncrypt.prototype.decrypt = function () {
                debug_log("JSEncrypt", "decrypt", {EnData: arguments[0]})
                return hex2b64(window.JSEncrypt.prototype.decrypt_(arguments[0]))
            }
        }
        if (window.JSEncrypt.prototype.setPublicKey !== undefined) {
            for_once("window.JSEncrypt.prototype.setPublicKey_ = window.JSEncrypt.prototype.setPublicKey;")
            // var
            window.JSEncrypt.prototype.setPublicKey = function () {
                var Data = arguments[0]
                debug_log("JSEncrypt", "setPublicKey", {PublicKey: Data})
                return window.JSEncrypt.prototype.setPublicKey_(Data)
            }
        }
        if (window.JSEncrypt.prototype.setPrivateKey !== undefined) {
            for_once("window.JSEncrypt.prototype.setPrivateKey_ = window.JSEncrypt.prototype.setPrivateKey;")
            window.JSEncrypt.prototype.setPrivateKey = function () {
                var Data = arguments[0]
                debug_log("JSEncrypt", "setPrivateKey", {PrivateKey: Data})
                return window.JSEncrypt.prototype.setPrivateKey_(Data)
            }
        }

    }
};

let Names = ["BigInteger", "biToHex", "CryptoJS", "JSEncrypt"];

//  Object.defineProperty 监控变量. 更迅速
for (let Id of Names) {
    (function (Id) {
        var value_ = undefined;
        Object.defineProperty(window, Id, {
            get: function () {
                return value_;
            },
            set: function (val) {
                // console.log(Id, "Hook-set")
                value_ = val
                eval(`window.Hook_${Id}__()`)
                return val;
            }
        });
    })(Id);
}
/**
 *  End
 */

//  定时器 应对各种加载情况 做的通杀方案
for (let Id of Names) {
    eval(`window.${Id}id__ = setInterval(function () {if (window.${Id} !== undefined) {window.Hook_${Id}__()};}, 10);`);
}

(function () {
    if (Hook_.onload) {
        //  页面加载完清空结束定时器
        window.onload = function () {

            !(async function () {

                function sleep(time) {
                    return new Promise((resolve) => setTimeout(resolve, time));
                }

                // 这里只所以使用sleep等待 主要是因为有些站js加载太慢 页面加载完了它js也还没加载好 给2秒(2000)等待一下
                await sleep(2000);
                for (let Id of Names) {
                    `clearInterval(window.${Id}id__);`
                }

            })()

            !(function () {
                let Valid_arr = []
                // debugger;
                if (window.BigInteger !== undefined) {
                    Valid_arr.push('BigInteger')
                }
                if (window.biToHex !== undefined) {
                    Valid_arr.push('biToHex')
                }
                if (window.JSEncrypt !== undefined) {
                    Valid_arr.push('JSEncrypt')
                }
                if (window.CryptoJS !== undefined) {
                    Valid_arr.push('CryptoJS')
                }
                if (window.crypto !== undefined) {
                    Valid_arr.push("Crypto")
                }
                // if (window.webpackJsonp !== undefined){}

                if (Valid_arr !== []) {
                    let Str = Valid_arr.join("|")
                    console.log(`%c ${location.href} %c ${Str} `, "padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: #1475b2;", "padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060;", "捕获Hook")
                }
            })()

        }
    }
})();
```







## 11.2 数据crawl



### 11.2.1 基础方法(存储)

```js
function arrayToExcel() {
    let jsonData = JSON.parse(localStorage.getItem("cache"));
    let str = "标题,货号,颜色,价格,日期\\n";
    for (let i = 0; i < jsonData.length; i++) {
        for (const key in jsonData[i]) {
            str += jsonData[i][key] + "\t,";
        }
        str += "\n";
    }
    const uri = "data:text/csv;charset=utf-8,\ufeff" + encodeURIComponent(str);
    const link = document.createElement("a");
    link.href = uri;
    link.download = "stock数据表.csv";
    link.click();
}
```







































