import{_ as s,o as a,c as n,R as l}from"./chunks/framework.408c4d71.js";const A=JSON.parse('{"title":"7.性能优化和调试","description":"","frontmatter":{},"headers":[],"relativePath":"supper/工程化/7性能优化和调试.md","filePath":"supper/工程化/7性能优化和调试.md","lastUpdated":null}'),o={name:"supper/工程化/7性能优化和调试.md"},p=l(`<h1 id="_7-性能优化和调试" tabindex="-1">7.性能优化和调试 <a class="header-anchor" href="#_7-性能优化和调试" aria-label="Permalink to &quot;7.性能优化和调试&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#_7-1-chrome">7.1 chrome</a><ul><li><a href="#_7-1-1-element里面">7.1.1 Element里面</a></li><li><a href="#_7-1-2-network-里面">7.1.2 network 里面</a></li><li><a href="#_7-1-3-performance里面">7.1.3 performance里面</a></li><li><a href="#_7-1-4-application里面">7.1.4 application里面</a></li></ul></li><li><a href="#_7-2-indexeddb">7.2 indexedDB</a><ul><li><a href="#_7-2-1-创造数据库">7.2.1 创造数据库</a></li></ul></li></ul></nav><h2 id="_7-1-chrome" tabindex="-1">7.1 chrome <a class="header-anchor" href="#_7-1-chrome" aria-label="Permalink to &quot;7.1 chrome&quot;">​</a></h2><p>这里面可以干的事情太多了</p><h3 id="_7-1-1-element里面" tabindex="-1">7.1.1 Element里面 <a class="header-anchor" href="#_7-1-1-element里面" aria-label="Permalink to &quot;7.1.1  Element里面&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//1.styles 里面可以直接调整样式</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//2.compute里面可以看盒子模型。margin，border，padding</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//3.event listener里面可以看到事件</span></span></code></pre></div><h3 id="_7-1-2-network-里面" tabindex="-1">7.1.2 network 里面 <a class="header-anchor" href="#_7-1-2-network-里面" aria-label="Permalink to &quot;7.1.2 network 里面&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//network里面 选择xhr。然后我们看header和 payload（发出的请求）</span></span></code></pre></div><h3 id="_7-1-3-performance里面" tabindex="-1">7.1.3 performance里面 <a class="header-anchor" href="#_7-1-3-performance里面" aria-label="Permalink to &quot;7.1.3 performance里面&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//这里面刷新之后我们可以看到各个js的加载时间</span></span></code></pre></div><h3 id="_7-1-4-application里面" tabindex="-1">7.1.4 application里面 <a class="header-anchor" href="#_7-1-4-application里面" aria-label="Permalink to &quot;7.1.4 application里面&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//application里面我们可以看到localstorage和cookies</span></span></code></pre></div><h2 id="_7-2-indexeddb" tabindex="-1">7.2 indexedDB <a class="header-anchor" href="#_7-2-indexeddb" aria-label="Permalink to &quot;7.2 indexedDB&quot;">​</a></h2><p>浏览帖子的时候发现了一个这个玩意</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">基础的示例：https://blog.csdn.net/weixin_44531811/article/details/121991728</span></span>
<span class="line"><span style="color:#A6ACCD;">3d three的优化：https://blog.csdn.net/weixin_39423672/article/details/123634120</span></span></code></pre></div><h3 id="_7-2-1-创造数据库" tabindex="-1">7.2.1 创造数据库 <a class="header-anchor" href="#_7-2-1-创造数据库" aria-label="Permalink to &quot;7.2.1 创造数据库&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//用于存储数据库</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//打开数据表</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> request </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">indexedDB</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webDB</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onerror</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">数据库打开报错</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onsuccess</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">db</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//db = event.target.result; 也能拿到</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">数据库打开成功</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//查找是否已经缓存了模型，</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//若有直接从缓存中加载，否则去缓存模型</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#82AAFF;">testOwnModel</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//定义表结构</span></span>
<span class="line"><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onupgradeneeded</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">db</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">数据库升级成功</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">objectStore</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">objectStoreNames</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">contains</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">book</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">objectStore</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createObjectStore</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">book</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">keyPath</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 定义存储对象的数据项</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">objectStore</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createIndex</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">unique</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">objectStore</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createIndex</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">objectStore</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createIndex</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">model</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">model1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div>`,17),e=[p];function t(c,r,y,F,D,i){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};
