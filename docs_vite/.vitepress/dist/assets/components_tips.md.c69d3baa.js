import"./chunks/index.4ed993c7.js";import{p as i,H as C,D as c,o as d,c as A,z as t,G as s,B as a,R as o,a as l}from"./chunks/framework.d604cd98.js";const u=o(`<h1 id="tips" tabindex="-1">tips <a class="header-anchor" href="#tips" aria-label="Permalink to &quot;tips&quot;">​</a></h1><p>文字提示气泡框。类似于元素属性<code>title</code>。</p><h2 id="使用方式" tabindex="-1">使用方式 <a class="header-anchor" href="#使用方式" aria-label="Permalink to &quot;使用方式&quot;">​</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 引入 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../components/tips/index.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 使用 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-tips</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tips</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">this is a tip</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">button</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xy-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xy-tips</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>xy-tips</code>标签不包含任何样式，也不会影响页面布局，你可以当做这层标签不存在</p></div><h2 id="提示tips" tabindex="-1">提示<code>tips</code> <a class="header-anchor" href="#提示tips" aria-label="Permalink to &quot;提示\`tips\`&quot;">​</a></h2><p>提示文字。如果不设置则不显示提示。</p>`,7),_={class:"wrap"},g=t("span",null,"鼠标放上来试试~",-1),h=o(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-tips</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tips</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">this is a tip</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">鼠标放上来试试~</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xy-tips</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>JavaScript操作<code>get</code>、<code>set</code></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">tips</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tips</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">tips</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tips </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">some tips</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//原生属性操作</span></span>
<span class="line"><span style="color:#A6ACCD;">tips</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tips</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">tips</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tips</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">some tips</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="方向dir" tabindex="-1">方向<code>dir</code> <a class="header-anchor" href="#方向dir" aria-label="Permalink to &quot;方向\`dir\`&quot;">​</a></h2><p>通过<code>dir</code>可以设置气泡框方向，默认为<code>top</code>，可以取值<code>top</code>、<code>right</code>、<code>bottom</code>、<code>left</code>、<code>TL</code>、<code>TR</code>、<code>RT</code>、<code>RB</code>、<code>BL</code>、<code>BR</code>、<code>LT</code>、<code>LB</code>。</p>`,5),m={class:"dir-wrap"},b=o('<div class="a"></div><div class="b"></div><div class="c"></div><div class="d"></div><div class="x"></div>',5),E=o(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-tips</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">dir</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">top</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tips</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">some tips</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">top</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xy-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xy-tips</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>JavaScript操作<code>get</code>、<code>set</code></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">tips</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">tips</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dir </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">right</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//原生属性操作</span></span>
<span class="line"><span style="color:#A6ACCD;">tips</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dir</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">tips</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dir</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">right</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>除了上述 12 个方位外，还可以设置两个值，以逗号分隔，比如<code>top,bottom</code>，可以自动根据位置来选择一个合适的方向。</p>`,4),f=o('<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-tips</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tips</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">some tips</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">dir</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">top,bottom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">top,bottom</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xy-button</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xy-tips</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="类型type" tabindex="-1">类型<code>type</code> <a class="header-anchor" href="#类型type" aria-label="Permalink to &quot;类型`type`&quot;">​</a></h2><p>可以通过<code>type</code>设置提示框的颜色，有三种类型<code>success</code>、<code>error</code>、<code>warning</code></p>',3),T={class:"wrap"},x=o(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-tips</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tips</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success tips</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">success</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xy-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xy-tips</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-tips</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tips</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warning tips</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warning</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">warning</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xy-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xy-tips</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-tips</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tips</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error tips</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">error</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xy-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xy-tips</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>JavaScript操作<code>get</code>、<code>set</code></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">tips</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">type</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">tips</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">type </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//原生属性操作</span></span>
<span class="line"><span style="color:#A6ACCD;">tips</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">tips</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="颜色color" tabindex="-1">颜色<code>color</code> <a class="header-anchor" href="#颜色color" aria-label="Permalink to &quot;颜色\`color\`&quot;">​</a></h2><p>通过<code>color</code>可以设置提示框为任意颜色，优先级高于<code>type</code>。</p>`,5),v=o(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-tips</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tips</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">some tips</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">royalblue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">custom color</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xy-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xy-tips</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>JavaScript操作<code>get</code>、<code>set</code></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">tips</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">tips</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">color </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//原生属性操作</span></span>
<span class="line"><span style="color:#A6ACCD;">tips</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">color</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">tips</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">color</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="触发方式trigger" tabindex="-1">触发方式<code>trigger</code> <a class="header-anchor" href="#触发方式trigger" aria-label="Permalink to &quot;触发方式\`trigger\`&quot;">​</a></h2><p>还可以通过<code>trigger</code>属性定义触发方式，默认为<code>hover,focus</code>，还可以设置为<code>click</code>，也可任意组合</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>仅用于初始化，后续修改无效。</p></div>`,6),q={class:"wrap"},k=o(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-tips</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tips</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">some tips</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">trigger</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hover</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">hover</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xy-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xy-tips</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-tips</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tips</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">some tips</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">trigger</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">focus</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">focus</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xy-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xy-tips</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-tips</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tips</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">some tips</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">trigger</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">click</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xy-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xy-tips</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="显示open" tabindex="-1">显示<code>open</code> <a class="header-anchor" href="#显示open" aria-label="Permalink to &quot;显示\`open\`&quot;">​</a></h2><p>可以设置触发方式<code>trigger</code>为<code>none</code>，或者<code>open</code>默认存在，可以通过<code>open</code>属性可以主动控制提示框的出现时机，不再跟随<code>hover,focus</code></p><p>适用于表单错误信息描述。</p>`,4),S={class:"wrap"},P=o(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-tips</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tips</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">some tips</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">trigger</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">none</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">open</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">tips is open</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xy-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xy-tips</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>JavaScript操作<code>set</code></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">tips</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">open </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">tips</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">open </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//原生属性操作</span></span>
<span class="line"><span style="color:#A6ACCD;">tips</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">open</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="命令式静态方法tips-init" tabindex="-1">命令式静态方法<code>tips.init()</code> <a class="header-anchor" href="#命令式静态方法tips-init" aria-label="Permalink to &quot;命令式静态方法\`tips.init()\`&quot;">​</a></h2><p>除了使用<code>&lt;xy-tips&gt;&lt;/xy-tips&gt;</code>标签外，还可以通过命令式方式进行初始化，参数和前面保持一致</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> tips </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../components/tips/index.js</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> tip </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> tips</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">init</span><span style="color:#A6ACCD;">(el</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">tips </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">提示</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 提示文字</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">dir </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">top,bottom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 方向</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">trigger </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hover</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 触发方式</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>适用于更加灵活的业务场景（原生环境）。例如，点击一个按钮，让其他元素出现<code>tips</code></p>`,7),V={class:"wrap"},R=t("span",{id:"newTips"},"这是一段文本",-1),w=o(`<p>使用<code>tips.init</code>创建，然后通过<code>open</code>属性控制显示</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> tip </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> tips</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">init</span><span style="color:#A6ACCD;">(el</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">tips </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">这是通过new Tip生成的提示</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">trigger</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">none</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">open</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">button</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onclick</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">tip</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">open</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">tip</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">open</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,2),J=JSON.parse('{"title":"tips","description":"","frontmatter":{},"headers":[],"relativePath":"components/tips.md","filePath":"components/tips.md","lastUpdated":null}'),I={name:"components/tips.md"},O=Object.assign(I,{setup(j){let D=null;i(()=>{}),C({value:!0});let e=null;const F=r=>{e?e.open=!e.open:e=D.init(newTips,{tips:"这是通过new Tip生成的提示",type:"error",open:!0}),r.target.textContent=e.open?"再次点击我隐藏 tips~":"点击我出现 tips~"};return(r,B)=>{const p=c("xy-tips"),n=c("xy-button"),y=c("xy-switch");return d(),A("div",null,[u,t("div",_,[s(p,{tips:"this is a tip"},{default:a(()=>[g]),_:1}),s(n,{type:"primary",onclick:"this.previousElementSibling.tips='this is a new tip!'"},{default:a(()=>[l("改变tips")]),_:1})]),h,t("div",m,[b,s(p,{dir:"TL",tips:"some tips"},{default:a(()=>[s(n,null,{default:a(()=>[l("TL")]),_:1})]),_:1}),s(p,{dir:"top",tips:"some tips"},{default:a(()=>[s(n,null,{default:a(()=>[l("top")]),_:1})]),_:1}),s(p,{dir:"TR",tips:"some tips"},{default:a(()=>[s(n,null,{default:a(()=>[l("TR")]),_:1})]),_:1}),s(p,{dir:"LT",tips:"some tips"},{default:a(()=>[s(n,null,{default:a(()=>[l("LT")]),_:1})]),_:1}),s(p,{dir:"RT",tips:"some tips"},{default:a(()=>[s(n,null,{default:a(()=>[l("RT")]),_:1})]),_:1}),s(p,{dir:"left",tips:"some tips"},{default:a(()=>[s(n,null,{default:a(()=>[l("left")]),_:1})]),_:1}),s(p,{dir:"right",tips:"some tips"},{default:a(()=>[s(n,null,{default:a(()=>[l("right")]),_:1})]),_:1}),s(p,{dir:"LB",tips:"some tips"},{default:a(()=>[s(n,null,{default:a(()=>[l("LB")]),_:1})]),_:1}),s(p,{dir:"RB",tips:"some tips"},{default:a(()=>[s(n,null,{default:a(()=>[l("RB")]),_:1})]),_:1}),s(p,{dir:"BL",tips:"some tips"},{default:a(()=>[s(n,null,{default:a(()=>[l("BL")]),_:1})]),_:1}),s(p,{dir:"bottom",tips:"some tips"},{default:a(()=>[s(n,null,{default:a(()=>[l("bottom")]),_:1})]),_:1}),s(p,{dir:"BR",tips:"some tips"},{default:a(()=>[s(n,null,{default:a(()=>[l("BR")]),_:1})]),_:1})]),E,s(p,{tips:"some tips",dir:"top,bottom"},{default:a(()=>[s(n,null,{default:a(()=>[l("top,bottom")]),_:1})]),_:1}),f,t("div",T,[s(p,{tips:"success tips",type:"success"},{default:a(()=>[s(n,null,{default:a(()=>[l("success")]),_:1})]),_:1}),s(p,{tips:"warning tips",type:"warning"},{default:a(()=>[s(n,null,{default:a(()=>[l("warning")]),_:1})]),_:1}),s(p,{tips:"error tips",type:"error"},{default:a(()=>[s(n,null,{default:a(()=>[l("error")]),_:1})]),_:1})]),x,s(p,{tips:"some tips",color:"royalblue"},{default:a(()=>[s(n,null,{default:a(()=>[l("custom color")]),_:1})]),_:1}),v,t("div",q,[s(p,{tips:"some tips",trigger:"hover"},{default:a(()=>[s(n,null,{default:a(()=>[l("hover")]),_:1})]),_:1}),s(p,{tips:"some tips",trigger:"focus"},{default:a(()=>[s(n,null,{default:a(()=>[l("focus")]),_:1})]),_:1}),s(p,{tips:"some tips",trigger:"click"},{default:a(()=>[s(n,null,{default:a(()=>[l("click")]),_:1})]),_:1})]),k,t("div",S,[s(p,{tips:"some tips",trigger:"none",open:""},{default:a(()=>[s(n,null,{default:a(()=>[l("tips is show")]),_:1})]),_:1}),s(y,{checked:"",onchange:"this.previousElementSibling.open = this.checked;"})]),P,t("div",V,[R,s(n,{type:"primary",onClick:F},{default:a(()=>[l("点击我出现 tips~")]),_:1})]),w])}}});export{J as __pageData,O as default};