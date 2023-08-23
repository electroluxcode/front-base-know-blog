import{_ as s,o as n,c as a,R as p}from"./chunks/framework.408c4d71.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"python/base.md","filePath":"python/base.md","lastUpdated":null}'),l={name:"python/base.md"},o=p(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">去到这个网站然后下载，注意只为我安装就可以添加到环境变量</span></span>
<span class="line"><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//repo.anaconda.com/archive/</span></span>
<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">安装完后可以</span></span>
<span class="line"><span style="color:#A6ACCD;">conda create </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">n ai python</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">3.9</span></span>
<span class="line"><span style="color:#A6ACCD;">conda activate ai </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pip install </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">r requirements</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">或者</span></span>
<span class="line"><span style="color:#A6ACCD;">pip install pyperclip xlrd pillow pyautogui</span><span style="color:#89DDFF;">==</span><span style="color:#F78C6C;">0.9</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">50</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">pip install opencv</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">python </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">i </span><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//pypi.tuna.tsinghua.edu.cn/simple </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">python pcRPA</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">py   </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">conda info </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">envs # 查看所有环境</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">3</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">然后我们看到pcData</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json中</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">可以根据pcDataExample</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json里面的示例来定义自己想要的东西</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">4</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">关于开发者的小tips</span></span>
<span class="line"><span style="color:#A6ACCD;">pip install pipreqs</span></span>
<span class="line"><span style="color:#A6ACCD;">pipreqs </span><span style="color:#89DDFF;">./</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">encoding</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">utf8</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">删除环境</span></span>
<span class="line"><span style="color:#A6ACCD;">conda remove </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">n your_env_name</span></span>
<span class="line"><span style="color:#A6ACCD;"> conda deactivate</span></span></code></pre></div>`,1),e=[o];function t(c,r,D,y,C,i){return n(),a("div",null,e)}const d=s(l,[["render",t]]);export{F as __pageData,d as default};
