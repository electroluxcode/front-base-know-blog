import{_ as s,o as n,c as a,R as l}from"./chunks/framework.408c4d71.js";const F=JSON.parse('{"title":"6.bug | 脚本工具","description":"","frontmatter":{},"headers":[],"relativePath":"know/know/8bug.md","filePath":"know/know/8bug.md","lastUpdated":1684848009000}'),p={name:"know/know/8bug.md"},o=l(`<h1 id="_6-bug-脚本工具" tabindex="-1">6.bug | 脚本工具 <a class="header-anchor" href="#_6-bug-脚本工具" aria-label="Permalink to &quot;6.bug | 脚本工具&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#_6-1-nginx">6.1 nginx</a><ul><li><a href="#_6-1-1-nginx-缓存的bug">6.1.1 nginx 缓存的bug</a></li></ul></li><li><a href="#_6-2-adb">6.2 adb</a><ul><li><a href="#_6-2-1-基本操作">6.2.1 基本操作</a></li><li><a href="#_6-2-2-捕获数组">6.2.2 捕获数组</a></li></ul></li></ul></nav><h2 id="_6-1-nginx" tabindex="-1">6.1 nginx <a class="header-anchor" href="#_6-1-nginx" aria-label="Permalink to &quot;6.1 nginx&quot;">​</a></h2><h3 id="_6-1-1-nginx-缓存的bug" tabindex="-1">6.1.1 nginx 缓存的bug <a class="header-anchor" href="#_6-1-1-nginx-缓存的bug" aria-label="Permalink to &quot;6.1.1 nginx 缓存的bug&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p：配置了</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">反向代理</span></span>
<span class="line"><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/api/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">proxy_pass</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://127.0.0.1:8080/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">proxy_set_header</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Host</span><span style="color:#A6ACCD;"> $host</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">但是请求图片的时候在</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx就返回了404（不命中）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">s：因为配置了</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">缓存</span></span>
<span class="line"><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">jpg</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">gif</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">expires</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#C3E88D;">d</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">我们可以</span></span>
<span class="line"><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^~</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/api/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">proxy_pass</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://127.0.0.1:8080/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">proxy_set_header</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Host</span><span style="color:#A6ACCD;"> $host</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#^~意思是在正则以前</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#~意思是正则匹配</span></span>
<span class="line"><span style="color:#FFCB6B;">这样优先级就比较高了</span></span></code></pre></div><h2 id="_6-2-adb" tabindex="-1">6.2 adb <a class="header-anchor" href="#_6-2-adb" aria-label="Permalink to &quot;6.2 adb&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">无线连接必须先有线连接</span></span>
<span class="line"><span style="color:#FFCB6B;">--1.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">手机上开发者选项和USB调试</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">模拟点击打开</span></span>
<span class="line"><span style="color:#FFCB6B;">--2.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">utils/脚本/adb.zip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">解压后，添加这个环境到环境变量</span></span>
<span class="line"><span style="color:#FFCB6B;">--3.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">有线连上后</span></span>
<span class="line"><span style="color:#FFCB6B;">--3.1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">devices</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">输出现在连接的设备，有限连接后</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">才有设备。这个时候</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">会输出</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxxxxx（反正不是空值）</span></span>
<span class="line"><span style="color:#FFCB6B;">--3.2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">手机上设置中状态信息</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">找到手机ipv4的地址</span></span>
<span class="line"><span style="color:#FFCB6B;">--3.3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tcpip</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6666</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">//电脑端开启新的端口，这个时候可以拔掉有线连接</span></span>
<span class="line"><span style="color:#FFCB6B;">--3.4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">connect</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">172.18</span><span style="color:#C3E88D;">.89.210:6666</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">//（手机网段</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">在步骤3.2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">找到的）</span></span>
<span class="line"><span style="color:#FFCB6B;">--3.5</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">这时候就可以写shell脚本了</span></span>
<span class="line"><span style="color:#FFCB6B;">--3.6</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">在git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">就可以</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">运行脚本</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxxxxxxxx.sh</span></span>
<span class="line"><span style="color:#FFCB6B;">我的shell</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">脚本如下</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">请输入你想沟通的人数</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#82AAFF;">read</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">n</span></span>
<span class="line"><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">do</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 点击沟通列表</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shell</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">input</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tap</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">460</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">450</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">sleep</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 点击最下面的立即沟通</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shell</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">input</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tap</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">530</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2200</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">sleep</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shell</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">input</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">keyevent</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">BACK</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">sleep</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shell</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">input</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">keyevent</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">BACK</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">sleep</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shell</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">input</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">swipe</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">960</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">950</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">960</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">600</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">当前沟通了: </span><span style="color:#A6ACCD;">$count</span><span style="color:#C3E88D;"> 人</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">++))</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">sleep</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">done</span></span></code></pre></div><h3 id="_6-2-1-基本操作" tabindex="-1">6.2.1 基本操作 <a class="header-anchor" href="#_6-2-1-基本操作" aria-label="Permalink to &quot;6.2.1 基本操作&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># https://developer.android.com/studio/command-line/adb?hl=zh-cn#notlisted</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># width=1080</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># height=2340</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># adb shell wm size 获取屏幕宽高   </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  172.18.89.179 </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># adb connect 172.18.89.179:6666</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">请输入你想沟通的人数</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#82AAFF;">read</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">n</span></span>
<span class="line"><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">do</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 点击沟通列表</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shell</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">input</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tap</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">460</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">450</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">sleep</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 点击最下面的立即沟通</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shell</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">input</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tap</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">530</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2200</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">sleep</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shell</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">input</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">keyevent</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">BACK</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">sleep</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shell</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">input</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">keyevent</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">BACK</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">sleep</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shell</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">input</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">swipe</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">960</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">950</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">960</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">600</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">当前沟通了: </span><span style="color:#A6ACCD;">$count</span><span style="color:#C3E88D;"> 人</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">++))</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">sleep</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">done</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 点击列表的一项</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># adb shell input tap 460 450</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># sleep 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># adb shell input tap 530 2200 </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># sleep 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># adb shell input keyevent BACK</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># sleep 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># adb shell input keyevent BACK</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># sleep 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># adb shell input swipe 960 950 960 600</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 指定设备控制：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># adb devices    // 172.18.89.179:6666      device</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># adb -s 172.18.89.179:6666 shell input keyevent BACK</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 输入</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># adb shell input text test123456</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 常按</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># adb shell input swipe 300 300 300 300 500</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 打开网页</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># adb shell am start -a android.intent.action.VIEW -d  http://google.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 输出 ui 树 </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># adb shell uiautomator dump sdcard/ui123.xml</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 输出 ui 树 去到 test 文件夹下面 test.下面的版本不加参数就是可以直接输出到bash的路径</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># adb pull sdcard/ui123.xml </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 确定</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 设置滑动时间 50 就是滑动时间</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># adb shell input swipe 960 950 960 600 50</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># adb shell uiautomator dump sdcard/ui123.xml</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># adb pull sdcard/ui123.xml </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># value=\`cat ui123.xml\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># echo &quot;$value&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 关联数组 declare -A ARRAY_NAME</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 索引数组 declare -a ARRAY_NAME</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># declare -a example_array=( &quot;Welcome&quot; &quot;To&quot; &quot;Yiibai&quot; )  </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 1.数组声明 名称=(元素 元素 元素) =左右赋值的时候不用加空格</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># &quot;&quot; 变成 变量 , &#39;&#39; 全部不是变量都是字符串</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ARRAY_NAME=(&quot;element_1st&quot; &quot;element_2nd&quot; &quot;element_3th&quot;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 2.打印元素</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 2.1 打印所有 元素</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># echo \${ARRAY_NAME[@]}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 2.2 打印单个元素</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># echo \${ARRAY_NAME[0]}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 2.3 循环打印</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># for i in &quot;\${ARRAY_NAME[@]}&quot;; do </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># echo &quot;$i&quot;; </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># done</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 2.4 数组长度</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># for i in &quot;\${!ARRAY_NAME[@]}&quot;; </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># do </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># echo &quot;\${ARRAY_NAME[i]},\${#ARRAY_NAME[@]}&quot;;  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># done</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 数组添加</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ARRAY_NAME+=(&quot;last&quot;)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># echo &quot;\${ARRAY_NAME[@]}==2&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 3. 比较</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># echo \${ARRAY_NAME[0]}==2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># echo $(($ARRAY_NAME[0]==element_1st))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 3.5 筛选文件 index 开头</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># str=\`ls  |egrep &quot;^index&quot;\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># echo &quot;$str&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 4.工具</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># grep 过滤行 </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># cat ui123.xml | grep &#39;&lt;node&#39;   | awk -F &quot;text=&quot; &#39;{print $2}&#39;  | awk -F &quot;resource-id=&quot; &#39;{print $1}&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 5.拆分数组 根据,来拆</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># str=&quot;aaa,bbb,ccc,ddd&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># readarray -d , -t strarr &lt;&lt;&lt; &quot;$str&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># echo   &quot;\${strarr[@]}&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># echo $result</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># resultVector=\`ls |egrep &quot;1&quot;\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># str= cat test.txt | egrep &quot;\\w&quot;  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># str= cat ui123.xml |sed &#39;s#&lt;node #^&lt;node #g&#39; | tr ^ &#39;\\n&#39; |grep &#39;&quot;确定“&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># echo $str</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># grep &quot;車&quot; index.txt | awk {&#39;print $2&quot; - &quot;$3&#39;} </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># test(){</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#     echo &quot;这是我的参数：$1&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#     ls &gt; ls.txt</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#     echo \`cat ls.txt\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#     return </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># test &quot;param&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># a=ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  awk 过滤列  像是$2就是第二个空格</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># cat ./ui123.xml | grep &#39;&lt;catalpaflat&gt;&#39; | awk -F &#39;&gt;&#39; &#39;{print $2}&#39; | awk -F &#39;&lt;&#39; &#39;{print $1}&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># getCoordinateByAttribution()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># #这里我们定义了一个instance，它的灵感是来自UiAutomator中的同名操作．意思是在当前页面下，有n个一模一样的属性，我们不好区分时，使用instance来指出我们需要点击的是第一个还是第n个属性．默认点击第一个．</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># instance=&quot;&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># instance=\${instance:=$2}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># instance=\${instance:=1}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># uiautomator dump</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># #这里借助了busybox工具，至于什么是busybox工具以及如何安装，此处暂不讲，读者可以先行百度，若有困难，再说．</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># #这里借助grep命令，来过滤出我们需要点击的属性，个人认为此方法比UiAutomator这个工具本身要方便一些．UiAutomator本身做了很多的区别，比如text，descrption，resourceId等等．</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># temp=\`cat /mnt/sdcard/window_dump.xml|busybox sed &#39;s/&gt;/\\n/g&#39;|busybox grep &quot;$1&quot;|busybox sed -n {$2}p\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># temp=\`echo \${temp%]\\&quot;*}\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># temp=\`echo $temp|busybox awk &#39;{print $NF}&#39;\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># #此处我们作一个判断，如果temp的值不等空串的话，我们认为找到了我们需要查找的属性，并作进一步的处理</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># if busybox test ! &quot;$temp&quot; == &quot;&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># then</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># temp=\`echo \${temp/bounds=/}\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># temp=\`echo $temp| busybox sed &#39;s/&quot;//g&#39;| busybox sed &#39;s/\\[//g&#39;| busybox sed &#39;s/\\]/\\n/g&#39;\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># p1=\`echo $temp|busybox awk &#39;{print $1}&#39;\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># p2=\`echo $temp|busybox awk &#39;{print $2}&#39;\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># #定义四个变量，用例存储找到的属性的四个坐标值</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># p1x=\`echo \${p1%,*}\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># p1y=\`echo \${p1#*,}\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># p2x=\`echo \${p2%,*}\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># p2y=\`echo \${p2#*,}\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># let centerX=$p1x/2+$p2x/2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># let centerY=$p1y/2+$p2y/2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># else</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># #这里是查找属性失败时的动作</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># echo \`date +%m-%d-%H-%M-%S\` getCoordinateByAttribution $1 failed &gt;&gt; /mnt/sdcard/log.txt</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># #screencap是android自带的可以抓图的命令，这里加上了时间而已</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># screencap -p /mnt/sdcard/&quot;\`date +%m-%d-%H-%M-%S\`&quot;.png</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># fi</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># cat ui123.xml | getCoordinateByAttribution &quot;text&quot; 1</span></span></code></pre></div><h3 id="_6-2-2-捕获数组" tabindex="-1">6.2.2 捕获数组 <a class="header-anchor" href="#_6-2-2-捕获数组" aria-label="Permalink to &quot;6.2.2  捕获数组&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># adb tcpip 6666</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># adb connect 172.18.90.47:6666</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 输出 ui 树 </span></span>
<span class="line"><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shell</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uiautomator</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/sdcard/ui123.xml</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 输出 ui 树 去到 test 文件夹下面 test.下面的版本不加参数就是可以直接输出到bash的路径</span></span>
<span class="line"><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sdcard/ui123.xml</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 格式化xml文件</span></span>
<span class="line"><span style="color:#FFCB6B;">xmllint</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--format</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--recover</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ui123.xml</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ui.xml</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># echo $phone</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">param</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">朋友圈</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">temp</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ui.xml</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> $param </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">awk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-F</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text=</span><span style="color:#A6ACCD;">$param</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{print $1}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">awk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-F</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bounds=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{print $2}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">awk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-F</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{print $1}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test.txt</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> $temp</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># # &quot;[918,60][941,91]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">param1</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">cat</span><span style="color:#C3E88D;"> test.txt </span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\\[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">readarray</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">strarr</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$param1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># echo \${strarr[1]}</span></span>
<span class="line"><span style="color:#A6ACCD;">param_x1</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">$(</span><span style="color:#82AAFF;">echo</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">strarr</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">]}</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">  </span><span style="color:#FFCB6B;">awk</span><span style="color:#C3E88D;"> -F </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{print $2}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">  </span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;"> </span><span style="color:#FFCB6B;">awk</span><span style="color:#C3E88D;"> -F </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{print $1}</span><span style="color:#89DDFF;">&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">param_y1</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">$(</span><span style="color:#82AAFF;">echo</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">strarr</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">]}</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;"> </span><span style="color:#FFCB6B;">awk</span><span style="color:#C3E88D;"> -F </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{print $2}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">param_x2</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">$(</span><span style="color:#82AAFF;">echo</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">strarr</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">]}</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;"> </span><span style="color:#FFCB6B;">awk</span><span style="color:#C3E88D;"> -F </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{print $2}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">  </span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;"> </span><span style="color:#FFCB6B;">awk</span><span style="color:#C3E88D;"> -F </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{print $1}</span><span style="color:#89DDFF;">&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">param_y2</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">$(</span><span style="color:#82AAFF;">echo</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">strarr</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">]}</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;"> </span><span style="color:#FFCB6B;">awk</span><span style="color:#C3E88D;"> -F </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{print $2}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">param_x</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">$((</span><span style="color:#A6ACCD;">$param_x2</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">$param_x1</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">param_y</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">$((</span><span style="color:#A6ACCD;">$param_y2</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">$param_y1</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shell</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">input</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tap</span><span style="color:#A6ACCD;"> $param_x $param_y</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> $param_x1</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> $param_y1</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> $param_x2</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> $param_y2</span></span></code></pre></div>`,11),t=[o];function e(c,r,y,C,i,D){return n(),a("div",null,t)}const E=s(p,[["render",e]]);export{F as __pageData,E as default};
