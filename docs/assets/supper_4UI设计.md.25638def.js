import{_ as s,o as a,c as n,R as p}from"./chunks/framework.408c4d71.js";const l="/front-base-know-blog/assets/深色模式示例.8262228d.png",e="/front-base-know-blog/assets/3d风格.3c6df13f.png",o="/front-base-know-blog/assets/拟态示例.0531d7a8.png",t="/front-base-know-blog/assets/内嵌按钮.7a198d6c.png",b=JSON.parse('{"title":"6.UI设计模式","description":"","frontmatter":{},"headers":[],"relativePath":"supper/4UI设计.md","filePath":"supper/4UI设计.md","lastUpdated":null}'),c={name:"supper/4UI设计.md"},r=p('<h1 id="_6-ui设计模式" tabindex="-1">6.UI设计模式 <a class="header-anchor" href="#_6-ui设计模式" aria-label="Permalink to &quot;6.UI设计模式&quot;">​</a></h1><h2 id="_6-素材-资源" tabindex="-1">6.素材 资源 <a class="header-anchor" href="#_6-素材-资源" aria-label="Permalink to &quot;6.素材 资源&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">http</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//navnav.co/checkbox-radio   //优秀的东西。是codepen的代码片段  右下角可以share出去</span></span></code></pre></div><p>更多的样式可以看到我的css库：<a href="https://gitee.com/Electrolux/front-css-package%E9%87%8C%E9%9D%A2%E5%8E%BB" target="_blank" rel="noreferrer">https://gitee.com/Electrolux/front-css-package里面去</a></p><h2 id="_6-1-深色模式" tabindex="-1">6.1 深色模式 <a class="header-anchor" href="#_6-1-深色模式" aria-label="Permalink to &quot;6.1 深色模式&quot;">​</a></h2><p>高对比度。暗色 黑白灰</p><img src="'+l+'"><h2 id="_6-3-3d立体风格" tabindex="-1">6.3 3D立体风格 <a class="header-anchor" href="#_6-3-3d立体风格" aria-label="Permalink to &quot;6.3 3D立体风格&quot;">​</a></h2><p>没有实操过，感觉不错。首页用，有一种破框关系</p><img src="'+e+`"><h2 id="_6-2-新拟态" tabindex="-1">6.2 新拟态 <a class="header-anchor" href="#_6-2-新拟态" aria-label="Permalink to &quot;6.2 新拟态&quot;">​</a></h2><p>代码：<a href="https://gitee.com/Electrolux/front-css-package/blob/master/%E6%95%88%E6%9E%9C/7.%E6%8B%9F%E6%80%81UI%E7%A4%BA%E4%BE%8B/index.html" target="_blank" rel="noreferrer">https://gitee.com/Electrolux/front-css-package/blob/master/效果/7.拟态UI示例/index.html</a></p><p>1.扁平 2. 投影 3.新拟态</p><p>类似于一种浮雕的效果</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//玻璃拟态：有一种悬浮感和玻璃感</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//新拟态：有高光立面和暗部立面</span></span></code></pre></div><p>示例：</p><img src="`+o+`"><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">基础示例</span></span>
<span class="line"><span style="color:#FFCB6B;">box-shadow</span><span style="color:#A6ACCD;">: X轴阴影的位移（正是向右） Y轴阴影的位移（正是向下） 阴影大小   阴影颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">代码示例</span></span>
<span class="line"><span style="color:#A6ACCD;">大背景我们设置 </span><span style="color:#FFCB6B;">background-color</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ebecf0;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">小背景我们设置</span></span>
<span class="line"><span style="color:#A6ACCD;">width: 371px;</span></span>
<span class="line"><span style="color:#A6ACCD;">height: 94px;</span></span>
<span class="line"><span style="color:#FFCB6B;">border-radius</span><span style="color:#A6ACCD;">: 47px;</span></span>
<span class="line"><span style="color:#FFCB6B;">box-shadow</span><span style="color:#A6ACCD;">:10px 10px 20px  </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">a6abbd; 我们设置这个就是外阴影  这是暗面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">效果一：凸起来</span></span>
<span class="line"><span style="color:#A6ACCD;">width: 371px;</span></span>
<span class="line"><span style="color:#A6ACCD;">height: 94px;</span></span>
<span class="line"><span style="color:#FFCB6B;">border-radius</span><span style="color:#A6ACCD;">: 17px;</span></span>
<span class="line"><span style="color:#FFCB6B;">box-shadow</span><span style="color:#A6ACCD;">: 6px 6px 12px </span><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">bec3c9</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> -6px -6px 12px </span><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">fff</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">效果二：凸起来（渐变）</span></span>
<span class="line"><span style="color:#A6ACCD;">width: 371px;</span></span>
<span class="line"><span style="color:#A6ACCD;">height: 94px;</span></span>
<span class="line"><span style="color:#FFCB6B;">border-radius</span><span style="color:#A6ACCD;">: 17px;</span></span>
<span class="line"><span style="color:#A6ACCD;">background: linear-gradient(145deg</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">caced5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">f0f5fe</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#FFCB6B;">box-shadow</span><span style="color:#A6ACCD;">: 6px 6px 12px </span><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">bec3c9</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> -6px -6px 12px </span><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">fff</span></span></code></pre></div><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">效果三：凹下去</span></span>
<span class="line"><span style="color:#FFCB6B;">box-shadow</span><span style="color:#A6ACCD;">:inset 5px 5px 10px </span><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">bec3c9</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">inset -5px -5px 10px </span><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">fff</span></span></code></pre></div><img src="`+t+'"><h2 id="_6-4-极简留白" tabindex="-1">6.4 极简留白 <a class="header-anchor" href="#_6-4-极简留白" aria-label="Permalink to &quot;6.4 极简留白&quot;">​</a></h2><h2 id="_6-5-玻璃拟化风格" tabindex="-1">6.5 玻璃拟化风格 <a class="header-anchor" href="#_6-5-玻璃拟化风格" aria-label="Permalink to &quot;6.5 玻璃拟化风格&quot;">​</a></h2><p>玻璃拟化是毛玻璃效果的新材质应用，在多个层级下，透过磨砂玻璃的通透，呈现出一种“虚实结合”的美感，为画面添加更多细节的层次。</p>',23),i=[r];function C(d,y,h,A,D,F){return a(),n("div",null,i)}const x=s(c,[["render",C]]);export{b as __pageData,x as default};
