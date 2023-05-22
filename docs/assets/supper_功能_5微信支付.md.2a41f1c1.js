import{_ as s,o as a,c as n,R as p}from"./chunks/framework.408c4d71.js";const d=JSON.parse('{"title":"5.微信支付","description":"","frontmatter":{},"headers":[],"relativePath":"supper/功能/5微信支付.md","filePath":"supper/功能/5微信支付.md","lastUpdated":null}'),l={name:"supper/功能/5微信支付.md"},e=p(`<h1 id="_5-微信支付" tabindex="-1">5.微信支付 <a class="header-anchor" href="#_5-微信支付" aria-label="Permalink to &quot;5.微信支付&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#_5-1-小程序支付-jsapi">5.1 小程序支付（jsapi）</a></li><li><a href="#_5-2-网页支付">5.2 网页支付</a></li></ul></nav><p>微信h5支付：可以在手机网站内直接支付，为移动支付方式，简单快捷。</p><p>jsapi支付：仅可以在微信浏览器内发起支付，比如公众号内的网页和微信小程序，略微麻烦</p><p>最大的区别是jsapi要进行两次请求-唤起+监听</p><p>h5 url 要进行 1次请求-跳转+监听</p><h2 id="_5-1-小程序支付-jsapi" tabindex="-1">5.1 小程序支付（jsapi） <a class="header-anchor" href="#_5-1-小程序支付-jsapi" aria-label="Permalink to &quot;5.1 小程序支付（jsapi）&quot;">​</a></h2><p>携带参数(park_id，discount_id)请求后端（这时后端处于预支付的状态，然后后端会请求 <a href="https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_1#" target="_blank" rel="noreferrer">https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_1#</a> 这里会返回paysign ），后端会自动计算出金额(通过sdk计算出sign)并且请求接口。返回是否需要支付和下一个网络请求所需要的参数。在这个后端后面调用wx.requestPayment,在后端生成id，金额</p><p>app.wxRequest 传</p><p>timeStamp（时间）。</p><p>nonceStr（随机字符串）</p><p>signType(签名方式一定要与统一下单接口使用的一致)</p><p>package</p><p>paySign</p><p>success</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">一开始</span></span>
<span class="line"><span style="color:#A6ACCD;">0.《世泊停车服务完整协议-停车规范要求-计费标准(跟随车库)》</span></span>
<span class="line"><span style="color:#A6ACCD;">1.正在获取入口信息.判断入口状态.</span></span>
<span class="line"><span style="color:#A6ACCD;">2.判断账户状态异常.获取到你的车辆信息</span></span>
<span class="line"><span style="color:#A6ACCD;">3.车辆绑定</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">后来</span></span>
<span class="line"><span style="color:#A6ACCD;">1.发送id.判断是否需要支付</span></span>
<span class="line"><span style="color:#A6ACCD;">2.app.wxRequest(传入到自己的后端)   wx.requestPayment  第二个接口 传入</span></span>
<span class="line"><span style="color:#A6ACCD;">timeStamp: postdata.timeStamp,</span></span>
<span class="line"><span style="color:#A6ACCD;">nonceStr: postdata.nonceStr,</span></span>
<span class="line"><span style="color:#A6ACCD;">package: postdata.package,</span></span>
<span class="line"><span style="color:#A6ACCD;">signType: &#39;RSA&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">paySign: postdata.paySign,</span></span></code></pre></div><h2 id="_5-2-网页支付" tabindex="-1">5.2 网页支付 <a class="header-anchor" href="#_5-2-网页支付" aria-label="Permalink to &quot;5.2 网页支付&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">请求自己的后端接口，后端接口接受一个h5_url后跳转。操作后返回商户页面。这时候我们用定时器监听该订单号有没有支付成功</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//1.商户系统先调用该接口在微信支付服务后台生成预支付交易单，返回正确的预支付交易会话标识。</span></span>
<span class="line"><span style="color:#A6ACCD;">//传入 appid amount 订单金额</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">https://api.mch.weixin.qq.com/v3/pay/transactions/h5</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;mchid&quot;: &quot;1900006XXX&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;out_trade_no&quot;: &quot;1217752501201407033233368318&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;appid&quot;: &quot;wxdace645e0bc2cXXX&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;description&quot;: &quot;Image形象店-深圳腾大-QQ公仔&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;notify_url&quot;: &quot;https://www.weixin.qq.com/wxpay/pay.php&quot;,//异步接收微信支付结果通知的回调地址，通知url必须为外网可访问的url，不能携带参数。支付成功的参数对resource 进行解密 </span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;amount&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;total&quot;: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;currency&quot;: &quot;CNY&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	},</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;payer&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;openid&quot;: &quot;o4GgauInH_RCEdvrrNGrntXDuXXX&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//这里前端向后端发送一个id，后端存储订单信息到后端</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//2. 返回参数是一个跳转链接 </span></span>
<span class="line"><span style="color:#A6ACCD;">类似于</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;h5_url&quot;: &quot;https://wx.tenpay.com/cgi-bin/mmpayweb-bin/checkmweb?prepay_id=wx2916263004719461949c84457c735b0000&amp;package=2150917749&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span></span>
<span class="line"><span style="color:#A6ACCD;">//得到url后跳转</span></span></code></pre></div>`,18),t=[e];function o(c,i,r,C,A,u){return a(),n("div",null,t)}const q=s(l,[["render",o]]);export{d as __pageData,q as default};
