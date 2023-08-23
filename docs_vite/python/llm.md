# 4.LLM 大语言模型





## 4.1.RMKV

```
Receptance Weighted Key Value (RWKV)

其中 R, K, V 都由输入的线性变换生成，而 W 是参数。

模型由交替的 Time-mix 和 Channel-mix 层组成：

两者均拥有统一的 RWKV 形式

简而言之，RWKV 模型将 SA 拆分为 R(target) * W(src, target) * K(src)，因此可将 R 称为 receptance，而 sigmoid 表明它处于 0~1 区间。

```



### 4.1.1 初始化安装



>快速安装


```
https://github.com/josStorer/RWKV-Runner
```



>模型下载

```python
# 这一步可以不做，等rwkv安装好的时候一起做就可以了
https://huggingface.co/BlinkDL
```





### 4.1.2 使用



```js
全部下载好之后，就可以启动

接口文档在 ：http://localhost:8000/docs#/

官网在：https://www.rwkv.com/
```













