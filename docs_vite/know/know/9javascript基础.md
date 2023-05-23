# 1.js基础





## 1.1 文件



## 1.2.js上传最终版



### 1.2.1 基本的dom结构

简单的说就是input 中设置 type="file" 和 multiple 

```html
<input type="file" name="" id="file" value="上传文件" multiple></input>



上面是最基本的，如果我们要让他漂亮一点。我们可以考虑用下面的dom结构.简单地说就是把多加一个父元素input藏起来并且把样式变大
 <div id="preview">
     <!-- 这里我们隐藏起来 长款跟div一样-->
     <input type="file" name="" id="file" value="上传文件" multiple></input>
	<div id="img-style">选择图片上传</div>
</div>
<style>
input {
    /* width: 100%; */
    height: 100%;
    width: 100%;
    opacity: 0;
    position: absolute;
}
    
#img-style{
	
}
    
</style>
```



### 1.2.2 校验封装(cvte)

```ts
const Config = {
    appIcon: {
        accept: ['image/jpg', 'image/png', 'image/jpeg'],
        maxCount: 1,
        formatTitle: '',
        // 传入的 file 具有 size | type | width | length | name。可以做四种校验-大小-类型-宽度-长度
        limit: (e) => {
            const file = e;
            // const maxFileSize = 100 * 1024; // 100kb
            const maxFileSize = 1024 * 1024 * 10; // 10m
            // 1 * 1024 * 1024 * 1024; // 1G
            const fileSize = file.size || 0;
            const fileType = file.type || '';
            const img = new Image();
            img.src = window.URL.createObjectURL(file);
            return new Promise((resolve) => {
                img.onload = () => {
                    if (fileSize > maxFileSize) {
                        resolve(`图标大小不能超过10m`);
                    } else if (!Config.appIcon.accept.includes(fileType)) {
                        resolve(`图标格式不支持`);
                    } else if (img.width < 192 || img.height < 192) {
                        resolve(`图标尺寸不能小于192*192PX`);
                    }
                    // else if (img?.height <= img?.width) {
                    //     resolve(`上传图片仅支持竖图`);
                    //   } 
                    else if (fileSize > maxFileSize) {
                        resolve(`上传图片不能超过10张`);
                    } else {
                        resolve('');
                    }
                };
                img.onerror = () => {
                    resolve(`读取失败`);
                };
            });
        },
    },

};



使用起来
// 这个element 是 <input type="file" name="" id="file" value="上传文件" multiple></input>
var file = document.getElementById("file");  
file.onchange = async function (e) {
    let test = await Config["appIcon"].limit(e.target.files[0])
    if(test){
        // dosomething
    }
}












// ------------------全部----------------------------
export const Config: ConfigType = {
  appIcon: {
    accept: ['image/jpg', 'image/png', 'image/jpeg'],
    maxCount: 1,
    formatTitle:
      '请上传jpg/png格式、圆角不超过15px、尺寸不小于192*192px、大小100kb内的图标；',
    limit: (e) => {
      const file = e as unknown as File;
      const maxFileSize = 100 * 1024; // 100kb
      const fileSize = file.size || 0;
      const fileType = file.type || '';
      const fileName = file.name;
      const img = new Image();
      img.src = window.URL.createObjectURL(file);
      return new Promise((resolve) => {
        img.onload = () => {
          if (fileSize > maxFileSize) {
            resolve(`图标 "${fileName}" 大小不能超过100KB`);
          } else if (!Config.appIcon.accept.includes(fileType)) {
            resolve(`图标 "${fileName}" 格式不支持`);
          } else if (img.width < 192 || img.height < 192) {
            resolve(`图标 "${fileName}" 尺寸不能小于192*192px`);
          } else {
            resolve(0);
          }
        };
        img.onerror = () => {
          resolve(`读取 "${fileName}" 失败`);
        };
      });
    },
  },
  appScreenShots: {
    accept: ['image/jpg', 'image/png', 'image/jpeg'],
    maxCount: 5,
    formatTitle:
      '请上传jpg/png格式、圆角不超过15px、尺寸不小于192*192px、大小1M内的图标；',
    limit: (e) => {
      const file = e as unknown as File;
      const maxFileSize = 1 * 1024 * 1024; // 1M
      const fileSize = file.size;
      const fileType = file.type;
      const fileName = file.name;
      const img = new Image();
      img.src = window.URL.createObjectURL(file);
      return new Promise((resolve) => {
        img.onload = () => {
          if (fileSize > maxFileSize) {
            resolve(`图标 "${fileName}" 大小不能超过1M`);
          } else if (!Config.appIcon.accept.includes(fileType)) {
            resolve(`图标 "${fileName}" 格式不支持`);
          } else if (img.height < 1600) {
            resolve(`图标 "${fileName}" 尺寸高度不能小于1600px`);
          } else {
            resolve('');
          }
        };
        img.onerror = () => {
          resolve(`读取 "${fileName}" 失败`);
        };
      });
    },
  },
  copyrightCertificates: {
    accept: ['image/jpg', 'image/png', 'image/jpeg'],
    maxCount: 10,
    formatTitle:
      '请上传jpg/png格式、圆角不超过15px、尺寸不小于192*192px、大小100kb内的图标；',
    limit: (e) => {
      const file = e as unknown as File;
      const maxFileSize = 10 * 1024 * 1024; // 10M
      const fileSize = file.size;
      const fileType = file.type;
      const fileName = file.name;
      const img = new Image();
      img.src = window.URL.createObjectURL(file);
      return new Promise((resolve) => {
        img.onload = () => {
          if (fileSize > maxFileSize) {
            resolve(`图标 "${fileName}" 大小不能超过10`);
          } else if (!Config.appIcon.accept.includes(fileType)) {
            resolve(`图标 "${fileName}" 格式不支持`);
          } else {
            resolve('');
          }
        };
        img.onerror = () => {
          resolve(`读取 "${fileName}" 失败`);
        };
      });
    },
  },
  uploadMultipart: {
    accept: ['application/vnd.android.package-archive'],
    maxCount: 1,
    formatTitle: '请上传1GB内的包体',
    limit: (e) => {
      const file = e as unknown as File;
      const maxFileSize = 1 * 1024 * 1024 * 1024; // 1G
      const fileSize = file.size;
      const fileName = file.name;
      const fileType = file.type;

      return new Promise((r) => {
        if (fileSize > maxFileSize) {
          r(`文件"${fileName}" 大小不能超过1G`);
        } else if (!Config.uploadMultipart.accept.includes(fileType)) {
          r(`图标 "${fileName}" 格式不支持`);
        } else {
          r('');
        }
      });
    },
  },
};





```





### 1.2.3 js 预览效果

```js
// 当我们上传文件的时候 。我们可以监听这个 dom 元素的 onchange 事件
// 注意一下。srcElement 是 快过时的版本 我们 可以用 target 进行替代
var file = document.getElementById("file");

// 获取base64 字符串 。 放到 img 的 src 下面就可以直接用
const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}

file.onchange = function (e) {
      /* 文件读取对象读取文件 */
    var fileReader = new FileReader();
    let img_src = await getBase64(e.target.files[0])
    img.src = img_src;
    img.style.width = "300px";
    console.log(img,img_src)
    preview.appendChild(img);
};



```



### 1.2.4 初始变量 | 项目开始

```js
 const data = {
     fileKey: response.fileKey || '',
     taskUid: response.taskUid || '',
 }
```





### 1.2.5  数据类型定义

```ts
export interface Repo<T> {
  code: number | string;
  data: T;
  body?: T;
  message: string;
}
export interface UploadPolicy {
  bodyPackageType: string;
  filePartFieldNameInFormFiled: string;
  filePartFieldTypeInFormFiled: string;
  formFields: string;
  headerFields: string[];
  httpMethod: string;
  keyInfoFields: string[];
  magicKey: string;
  needCallServer: string;
  needExtractHeaderNames: string;
  serviceProviderType: string;
  uploadUrl: string;
}
```









### 1.2.6  upload 组件 | handleBeforeUpload 方法 | 校验 + 上传地址获取 | 加密规则

这里面首先对图片大小，格式，大小进行校验

接着请求 cstore的  上传地址，这里不需要任何参数。只用到写在配置里面的内容就可以了

```js
antd 的 upload 组件中 有一个 
  <Upload
	//  accept: ['image/jpg', 'image/png', 'image/jpeg'] 变成  'image/jpg,image/png,image/jpeg'
    accept={configInfo.accept.join(',')}
    maxCount={configInfo.maxCount}
	//	这里用 usestate 做存储 ，在 beforeUpload 的时候 进行了数据请求后 setUploadUrl(policyRes.data.uploadUrl)
    action={uploadUrl}
	//	这里用 usestate 做存储 ，在 beforeUpload 的时候 进行了数据请求后 setUploadUrl(policyRes.data.uploadUrl)
    data={uploadData}
	//内建样式不用管他
    listType="picture-card"
    fileList={fileList}
    onPreview={handlePreview}
    onChange={handleChange}
    beforeUpload={handleBeforeUpload}
    onRemove={handleOnRemove}
>
import type { UploadFile } from 'antd/es/upload/interface';
const handleBeforeUpload = async (e: UploadFile): Promise<boolean> => {
    // step1：这里做对应检查。尺寸大小，高度，后缀。如果返回值是空，那么说明校验成功，返回值都是错误的信息
    const res = await configInfo.limit(e)
    // step2:如果有错误，那么直接返回 
    if (res) {
        e['status'] = 'error'
        if (onUploadError) {
            onUploadError(res)
        }
        return false
    }
    // step3:获取cstore的  策略。这就是这次上传的 密文 和 密钥 
    const policyRes = await getCStoreUploadPolicyApi().catch(() => null)
    if (policyRes && policyRes.code === 0) {
        const policy = getFeedIPolicyDecryption(policyRes.data.formFields, policyRes.data.magicKey)
        const uploadPolicy = {
            ...policy,
        }
        return new Promise((r) => {
            setUploadUrl(policyRes.data.uploadUrl)
            setUploadData(uploadPolicy)
            setTimeout(() => {
                r(true)
            }, 1);
        })
    } else {
        e['status'] = 'error'
        if (onUploadError) {
            onUploadError('上传图片失败')
        }
        return false
    }
}

// step1:首先是 设置header x-appKey 也就是 公钥
// step2:接着设置 header 的 x-requestId 用 utf 编码 secret。然后用AES/ECB/Pkcs7加密data (这里的data是uuid + 时间)
// step3:然后设置 header 的 x-authorization。用 x-requestId ，和公钥 拼接再用HmacSHA1加密拼接的字符串及逆行base64编码。
// step4:然后设置 header 的 x-token，这部分在上传前就设置好了，就是用户的cookie
// step5:在上传之前 （antd upload组件有一个beforeUpload方法）.beforeUpload方法中，不传参数只用头部进行数据请求，每一次都会返回不同的加密信息
// step6：用step5 中返回的密文和密钥进行解密 。在一个类似于getFeedIPolicyDecryption(密文, 密钥)的方法中。将上传地址和策略分配给界面的元素
// 真正上传的时候用
```



### 1.2.7  upload 组件 | prewiew 预览

简单来说，就是点击图片预览的时候会打开一个modal

```ts
const [previewImage, setPreviewImage] = useState('');
const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj as RcFile);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
};


 <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
     <img alt="example" style={{ width: '100%' }} src={previewImage} />
 </Modal>
```



### 1.2.8 upload 组件 | handleChange

每一次点击handleChange

```ts
const handleChange: UploadProps['onChange'] = ({ file, fileList: newFileList }) => {
    setFileList(newFileList);
    if (file?.status === 'done' && file?.xhr?.response) {
            try {
        		// 每一次都会上传
                const response = JSON.parse(file.xhr.response)?.data
                const data = response[uploadType]
                onChange?.([...(value || []), data])
            } catch (error) {
                console.log(error);
            }
    } else if (file?.status === 'error' && onUploadError) {
               onUploadError('上传图片失败')
    }
}
```





### 1.2.9 upload组件 | 删除图片

```js
const handleOnRemove = (file: UploadFile): Promise<boolean> => {
        return new Promise((r, j) => {
            Modal.confirm({
                icon: <ExclamationCircleOutlined />,
                title: '确定要删除图片吗',
                okText: '删除',
                cancelText: '取消',
                onCancel() {
                    r(false)
                },
                onOk() {
                    if (file?.status === 'done' && file?.response) {
                        const response = file.response?.data
                        const data = response[uploadType]
                        if (typeof value === 'string' && value === data) {
                            onChange?.([])
                        } else if (Array.isArray(value)) {
                            const key = value.indexOf(data)
                            if (key !== -1) {
                                const res = value.filter((_, i) => (i !== key))
                                onChange?.(res)
                            }
                        }
                    }
                    r(true)
                },
            });
        })
    }
```











## 1.4 xx && yy 和 xx ||  yy 和 ??

 ```js
在 xx && yy  表达式中，只有当 xx 是真值时，yy 才会被执行，否则不会执行 yy 并且该表达式的结果为 串联
在 xx || yy 表达式中，只有当 xx 是假值时，yy 才会被执行，否则不会执行 yy 并且该表达式的结果为 并联

实例：
console.log("" && 'str1');  // 输出 "" 
console.log("" || 'str1');  // 输出第二个。这个做空值表达式不错,可以用 不是正值的默认情况，比如后端返回 '' 的时候。玩不了一点
注意 ?? 不能用来随便来做 空值表达式 因为 ?? 只对 undefined 和 null 生效 像是 0 '' 是不会生效的  // 可以用来做一个变量的默认值
 ```









## 1.3. encodeURIComponent | decodeURIComponent

```ts

encodeURIComponent 和 decodeURIComponent 方法主要用于处理 URI 字符串中的特殊字符，比如 %、+ 等。这些特殊字符在传输中需要进行转义，否则会造成意想不到的错误，而这些方法的作用就是对这些特殊字符进行编码和解码。

例如，当我们想要传输如下的URI查询字符串时：

foo=hello&bar=world!
如果直接将这个查询字符串作为URI传输，服务器就会将!解析成分隔符，导致查询参数读取错误。此时，我们需要对查询字符串进行编码操作，将其中的特殊字符转义为URI安全的字符，才能正确地传输和解析查询参数。使用 encodeURIComponent 方法可以将以上查询字符串编码为：

foo=hello&bar=world%21
其中，!被编码为 %21，以确保它不会被服务器解析成分隔符。在URL传输过程中，这些字符的编码和解码是非常重要的，否则可能会导致数据传输的错误或安全问题。




```







## 1.11 cryto.js加解密

加密：utf 编码 secret 。然后 AES编码data 
 解码：utf 编码 secret 。然后 AES解码data 

### 1.11.1 引包名 | 初始化变量

```js
import * as CryptoJS from "crypto-js";
let cryptoJS = CryptoJS.default;

const randomUUid = () => {
  // 转成 36 进制接着 截取后8位置
  return Math.random().toString(36).slice(-8);
};

let eventSecret = "我是secret";

const time = String(new Date().getTime());
let data = randomUUid().replace(/-/g, "") + time;

```



### 1.11.2 加密

```js
/**
 * @description :总的来说，其实就是两点,第一点是 utf 编码 secret 第二点就是 AES + hex 解密
 * @param {*} data :需要加密的数据
 * @param {*} timeStr
 * @param {*} secret :加上密钥
 * @returns
 */
function serectEncode(data, secret) {
  // const data = randomUUid().replace(/-/g, "") + timeStr;
  const key = cryptoJS.enc.Utf8.parse(secret);
  const res = cryptoJS.AES.encrypt(data, key, {
    mode: cryptoJS.mode.ECB,
    // ECB 不需要 偏移量 IV 
    padding: cryptoJS.pad.Pkcs7,
    // 在 AES 标准中，一个字由 32 位（4 字节）组成，因此密钥长度也要以 32 位为步长来确定，不能随意变动。
    keySize: 256 / 32,
  });
  //  返回的数据是这样格式的 {words:[12,23],sigBytes} .这玩意叫密文
  //  utf8 格式就是 你有多少length，parse 的 word 列表中 就一样 。Utf8
  //  也就是 对应字符串的 16 进制编码格式

  let result = cryptoJS.enc.Hex.parse(res.ciphertext.toString());
  console.log(res.ciphertext.toString(), cryptoJS.enc.Hex.stringify(result));
  // toString默认是Hex,所以 cryptoJS.enc.Hex.parse(res.ciphertext.toString(cryptoJS.enc.Hex)); ==  res.ciphertext 。 感觉这里直接返回res.ciphertext就可以了。
  // 因为是encrypt返回回来的，似乎这里直接用  res.ciphertext 也可以？ 
  return cryptoJS.enc.Hex.parse(res.ciphertext.toString());
}
```





### 1.11.3 解密

```js
function serectDecode(encrypted, secret) {
  const key = cryptoJS.enc.Utf8.parse(secret);
  const ciphertext = encrypted;
  const decrypted = cryptoJS.AES.decrypt(
    // cryptoJS.enc.Hex.stringify(ciphertext)
    {
      ciphertext: ciphertext,
    },
    key,
    {
      mode: cryptoJS.mode.ECB,
      padding: cryptoJS.pad.Pkcs7,
      keySize: 256 / 32,
    }
  );
  return decrypted.toString(cryptoJS.enc.Utf8);
}
console.log("解密：", serectDecode(encodeSecret, eventSecret));
```



### 1.11.4 完整

```js
import * as CryptoJS from "crypto-js";

/**
 1.基础知识
 stringify 用于编码  | 传参传入{words:[12,23],sigBytes} | 
 parse 用于解码 | 传参传入 字符串 | 返回值是 {words:[12,23],sigBytes}
 一般来说是先parse，在进行其他操作

 */

let eventSecret = "我是secret";

let cryptoJS = CryptoJS.default;

let randomUUid = () => {
  return "p9rvas0j";
  // return Math.random().toString(36).slice(-8)
};

/**
 * @description :总的来说，其实就是两点,第一点是 utf 编码 secret 第二点就是 AES + hex 解密
 * 模拟加密,将 secret 用 utf8 解码成word数组，
 * 用 AES 对 data 使用 刚刚解码的进行加密
 * 最后返回 用 hex 编码的格式
 * @param {*} data :需要加密的数据
 * @param {*} timeStr
 * @param {*} secret :加上密钥
 * @returns

 */
function serectEncode(data, secret) {
  // const data = randomUUid().replace(/-/g, "") + timeStr;
  const key = cryptoJS.enc.Utf8.parse(secret);
  const res = cryptoJS.AES.encrypt(data, key, {
    // 指定加密模式为ECB
    mode: cryptoJS.mode.ECB,
    // 填充方式，使用ECB 不需要 偏移量 IV
    padding: cryptoJS.pad.Pkcs7,
    // 其中 256 代表密钥的位数，32 代表密钥由多少个 32 位的字（word）组成）。由8个32位置的密钥组成.
    // 后面的 32位置
    // 在 AES 标准中，一个字由 32 位（4 字节）组成，因此密钥长度也要以 32 位为步长来确定，不能随意变动。
    keySize: 256 / 32,
  });
  //  返回的数据是这样格式的 {words:[12,23],sigBytes} .这玩意叫密文
  //  utf8 格式就是 你有多少length，parse 的 word 列表中 就一样 。Utf8
  //  也就是 对应字符串的 16 进制编码格式

  let result = cryptoJS.enc.Hex.parse(res.ciphertext.toString());
  console.log(res.ciphertext.toString(), cryptoJS.enc.Hex.stringify(result));
  // toString默认是Hex,所以 cryptoJS.enc.Hex.parse(res.ciphertext.toString(cryptoJS.enc.Hex)); ==  res.ciphertext 。 感觉这里直接返回res.ciphertext就可以了。
  // 因为是encrypt返回回来的，似乎这里直接用  res.ciphertext 也可以？
  return cryptoJS.enc.Hex.parse(res.ciphertext.toString());
}

const time = String(new Date().getTime());
let data = randomUUid().replace(/-/g, "") + time;
let encodeSecret = serectEncode(data, eventSecret);
console.log("加密数据:", data);

function serectDecode(encrypted, secret) {
  const key = cryptoJS.enc.Utf8.parse(secret);
  const ciphertext = encrypted;
  const decrypted = cryptoJS.AES.decrypt(
    // cryptoJS.enc.Hex.stringify(ciphertext)
    {
      ciphertext: ciphertext,
    },
    key,
    {
      mode: cryptoJS.mode.ECB,
      padding: cryptoJS.pad.Pkcs7,
      keySize: 256 / 32,
    }
  );
  return decrypted.toString(cryptoJS.enc.Utf8);
}
console.log("解密：", serectDecode(encodeSecret, eventSecret));

```



### 1.11.5 项目策略

 加密：utf 编码 secret 。然后 AES编码data 
 解码：utf 编码 secret 。然后 AES解码data 

```js
// step1:首先是 设置header x-appKey 也就是 公钥
// step2:接着设置 header 的 x-requestId 用 utf 编码 secret。然后用AES/ECB/Pkcs7加密data (这里的data是uuid + 时间)
// step3:然后设置 header 的 x-authorization。用 x-requestId ，和公钥 拼接再用HmacSHA1加密拼接的字符串及逆行base64编码。
// step4:然后设置 header 的 x-token，这部分在上传前就设置好了，就是用户的cookie
// step5:在上传之前 （antd upload组件有一个beforeUpload方法）.beforeUpload方法中，不传参数只用头部进行数据请求，每一次都会返回不同的加密信息
// step6：用step5 中返回的密文和密钥进行解密 。在一个类似于getFeedIPolicyDecryption(密文, 密钥)的方法中。将上传地址和策略分配给界面的元素
真正上传的时候用
```







## 

