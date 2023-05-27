import{_ as s,o as a,c as n,R as l}from"./chunks/framework.408c4d71.js";const i=JSON.parse('{"title":"1.webGL知识","description":"","frontmatter":{},"headers":[],"relativePath":"know/框架/14webGL基础.md","filePath":"know/框架/14webGL基础.md","lastUpdated":null}'),o={name:"know/框架/14webGL基础.md"},p=l(`<h1 id="_1-webgl知识" tabindex="-1">1.webGL知识 <a class="header-anchor" href="#_1-webgl知识" aria-label="Permalink to &quot;1.webGL知识&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#_1-1-canvas基础-看我gitee-chart-demo">1.1 canvas基础(看我gitee&#39; chart demo)</a></li></ul></nav><h2 id="_1-1-canvas基础-看我gitee-chart-demo" tabindex="-1">1.1 canvas基础(看我gitee&#39; chart demo) <a class="header-anchor" href="#_1-1-canvas基础-看我gitee-chart-demo" aria-label="Permalink to &quot;1.1 canvas基础(看我gitee&#39; chart demo)&quot;">​</a></h2><p>canvas元素本身并没有绘制能力的，它仅仅是图形的容器，而getContext()方法返回一个对象，该对象提供了用于在画布上绘图的方法和属性</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//HTML部分 创造画布</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">canvas</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mycanvas</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">canvas</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> canvas </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mycanvas</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> context </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> canvas</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getContext</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2d</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//设置宽高，颜色</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">canvas</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">width </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">500</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">canvas</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">height </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fillStyle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rgb(93,111,194)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//绘制“已填色”的矩形</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fillRect</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">canvas</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">width</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">canvas</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">height)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">beginPath</span><span style="color:#A6ACCD;">() 表示开始一段新的路径，下次填充只会修改此段路径内容</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">moveTo</span><span style="color:#A6ACCD;">(x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">y) 路径的起始点；</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lineTo</span><span style="color:#A6ACCD;">(x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">y) </span><span style="color:#82AAFF;">连接到</span><span style="color:#A6ACCD;">(x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">y)；</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">strokeStyle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> gradient </span><span style="color:#676E95;font-style:italic;">// 设置未闭合的路径颜色;</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fill</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 填充当前的图像（路径）;</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stroke</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 绘制已定义的路径，一般路径为线</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">translate</span><span style="color:#A6ACCD;">(x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">y)  </span><span style="color:#676E95;font-style:italic;">// 画布平移</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">rotate</span><span style="color:#A6ACCD;">(angle)  </span><span style="color:#676E95;font-style:italic;">//画布旋转</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">scale</span><span style="color:#A6ACCD;">(width</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">height)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//width：缩放当前绘图的宽度（1=100%，0.5=50%，2=200%，以此类推）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//height：缩放当前绘图的高度（1=100%，0.5=50%，2=200%，以此类推）</span></span>
<span class="line"><span style="color:#A6ACCD;">可以利用该功能实现镜像功能，</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//沿x轴镜像：context.scale(1,-1)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//沿y轴镜像：context.scale(-1,1)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//沿原点镜像：context.scale(-1,-1)</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,6),e=[p];function t(c,r,y,D,F,A){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{i as __pageData,d as default};
