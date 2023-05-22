import{_ as n,o as a,c as s,R as l}from"./chunks/framework.408c4d71.js";const v=JSON.parse('{"title":"12.nvm  | nrm | rimraf","description":"","frontmatter":{},"headers":[],"relativePath":"supper/工具基础/12nvm.md","filePath":"supper/工具基础/12nvm.md","lastUpdated":1684758476000}'),e={name:"supper/工具基础/12nvm.md"},p=l(`<h1 id="_12-nvm-nrm-rimraf" tabindex="-1">12.nvm | nrm | rimraf <a class="header-anchor" href="#_12-nvm-nrm-rimraf" aria-label="Permalink to &quot;12.nvm  | nrm | rimraf&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#_12-1-nvm">12.1 nvm</a><ul><li><a href="#_12-1-1-nvm下载">12.1.1 nvm下载</a></li><li><a href="#_12-1-2-nvm配置和基础使用">12.1.2 nvm配置和基础使用</a></li></ul></li><li><a href="#_12-2-nrm">12.2 nrm</a><ul><li><a href="#_12-2-1-nrm-下载">12.2.1 nrm 下载</a></li></ul></li><li><a href="#_12-3-rimraf">12.3 rimraf</a></li></ul></nav><h2 id="_12-1-nvm" tabindex="-1">12.1 nvm <a class="header-anchor" href="#_12-1-nvm" aria-label="Permalink to &quot;12.1 nvm&quot;">​</a></h2><h3 id="_12-1-1-nvm下载" tabindex="-1">12.1.1 nvm下载 <a class="header-anchor" href="#_12-1-1-nvm下载" aria-label="Permalink to &quot;12.1.1 nvm下载&quot;">​</a></h3><p><a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noreferrer">https://github.com/coreybutler/nvm-windows/releases</a> 里面去下载 nvm-setup.exe</p><h3 id="_12-1-2-nvm配置和基础使用" tabindex="-1">12.1.2 nvm配置和基础使用 <a class="header-anchor" href="#_12-1-2-nvm配置和基础使用" aria-label="Permalink to &quot;12.1.2 nvm配置和基础使用&quot;">​</a></h3><p>如果是不是安装到c盘的话，那么要搞一下环境变量</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nvm ls              </span><span style="color:#676E95;font-style:italic;">// 看安装的所有node.js的版本</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">nvm list available  </span><span style="color:#676E95;font-style:italic;">// 查显示可以安装的所有node.js的版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">nvm </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">v 查看当前版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">nvm </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">config </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">nvm list 查看已安装node版本列表</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">nvm install 版本号 下载对应node版本（如：nvm install </span><span style="color:#F78C6C;">16.13</span><span style="color:#A6ACCD;">）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">nvm use 版本号 切换node版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">nvm on 开启nvm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">nvm off 关闭nvm</span></span></code></pre></div><h2 id="_12-2-nrm" tabindex="-1">12.2 nrm <a class="header-anchor" href="#_12-2-nrm" aria-label="Permalink to &quot;12.2 nrm&quot;">​</a></h2><h3 id="_12-2-1-nrm-下载" tabindex="-1">12.2.1 nrm 下载 <a class="header-anchor" href="#_12-2-1-nrm-下载" aria-label="Permalink to &quot;12.2.1 nrm 下载&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install nrm </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">g</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">nrm </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">version 查看 nrm 版本号</span></span>
<span class="line"><span style="color:#A6ACCD;">nrm ls 查看当前可用的镜像源列表</span></span>
<span class="line"><span style="color:#A6ACCD;">nrm test 测试镜像地址的速度</span></span>
<span class="line"><span style="color:#A6ACCD;">nrm use [镜像名称] 切换 npm 的下载地址</span></span></code></pre></div><h2 id="_12-3-rimraf" tabindex="-1">12.3 rimraf <a class="header-anchor" href="#_12-3-rimraf" aria-label="Permalink to &quot;12.3  rimraf&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i rimraf </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">进入需要清理的项目中，执行</span></span>
<span class="line"><span style="color:#A6ACCD;">rimraf node_modules</span></span></code></pre></div>`,13),r=[p];function o(t,i,c,m,h,d){return a(),s("div",null,r)}const A=n(e,[["render",o]]);export{v as __pageData,A as default};
