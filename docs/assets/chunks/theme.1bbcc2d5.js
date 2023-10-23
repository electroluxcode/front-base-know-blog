import{d as b,o as l,c as p,r as h,a as Q,t as L,n as B,_ as P,u as at,g as ft,b as d,e as Un,f as an,h as qn,i as A,j as wt,w as Y,k as me,l as E,m as ln,p as ce,q as Yn,P as Wn,s as Se,v as Ae,x as xe,y as kt,z as u,F as z,A as x,B as _,C as $,T as Qe,D as ke,E as Ge,G as y,H as De,I as Ie,J as bt,K as Kn,L as cn,M as dn,N as Jn,O as qe,Q as ie,R as un,S as Qn,U as Zn,V as Xn,W as X,X as oe,Y as se,Z as pn,$ as Ee,a0 as eo,a1 as Ht,a2 as yt,a3 as to,a4 as Te,a5 as Mt,a6 as no,a7 as oo,a8 as so,a9 as ro,aa as ao,ab as io}from"./framework.408c4d71.js";const lo=b({__name:"VPBadge",props:{text:{},type:{}},setup(n){return(e,t)=>(l(),p("span",{class:B(["VPBadge",e.type??"tip"])},[h(e.$slots,"default",{},()=>[Q(L(e.text),1)],!0)],2))}});const co=P(lo,[["__scopeId","data-v-350d3852"]]),D=at;function mn(n){return ft()?(wt(n),!0):!1}function hn(n){return typeof n=="function"?n():d(n)}const uo=typeof window<"u",vn=()=>{};function po(...n){if(n.length!==1)return Un(...n);const e=n[0];return typeof e=="function"?an(qn(()=>({get:e,set:vn}))):A(e)}function mo(n){var e;const t=hn(n);return(e=t==null?void 0:t.$el)!=null?e:t}const $t=uo?window:void 0;function ho(...n){let e,t,o,s;if(typeof n[0]=="string"||Array.isArray(n[0])?([t,o,s]=n,e=$t):[e,t,o,s]=n,!e)return vn;Array.isArray(t)||(t=[t]),Array.isArray(o)||(o=[o]);const r=[],a=()=>{r.forEach(v=>v()),r.length=0},c=(v,f,k,M)=>(v.addEventListener(f,k,M),()=>v.removeEventListener(f,k,M)),i=Y(()=>[mo(e),hn(s)],([v,f])=>{a(),v&&r.push(...t.flatMap(k=>o.map(M=>c(v,k,M,f))))},{immediate:!0,flush:"post"}),m=()=>{i(),a()};return mn(m),m}function vo(){const n=A(!1);return ln()&&ce(()=>{n.value=!0}),n}function go(n){const e=vo();return E(()=>(e.value,!!n()))}function it(n,e={}){const{window:t=$t}=e,o=go(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let s;const r=A(!1),a=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",c):s.removeListener(c))},c=()=>{o.value&&(a(),s=t.matchMedia(po(n).value),r.value=!!(s!=null&&s.matches),s&&("addEventListener"in s?s.addEventListener("change",c):s.addListener(c)))};return me(c),mn(()=>a()),r}function _o({window:n=$t}={}){if(!n)return{x:A(0),y:A(0)};const e=A(n.scrollX),t=A(n.scrollY);return ho(n,"scroll",()=>{e.value=n.scrollX,t.value=n.scrollY},{capture:!1,passive:!0}),{x:e,y:t}}function fo(n,e){let t,o=!1;return()=>{t&&clearTimeout(t),o?t=setTimeout(n,e):(n(),o=!0,setTimeout(()=>{o=!1},e))}}function lt(n){return/^\//.test(n)?n:`/${n}`}function He(n){if(Yn(n))return n.replace(Wn,"");const{site:e}=D(),{pathname:t,search:o,hash:s}=new URL(n,"http://example.com"),r=t.endsWith("/")||t.endsWith(".html")?n:n.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,e.value.cleanUrls?"":".html")}${o}${s}`);return Se(r)}function gn(n,e){if(Array.isArray(n))return n;if(n==null)return[];e=lt(e);const t=Object.keys(n).sort((o,s)=>s.split("/").length-o.split("/").length).find(o=>e.startsWith(lt(o)));return t?n[t]:[]}function wo(n){const e=[];let t=0;for(const o in n){const s=n[o];if(s.items){t=e.push(s);continue}e[t]||e.push({items:[]}),e[t].items.push(s)}return e}function ko(n){const e=[];function t(o){for(const s of o)s.text&&s.link&&e.push({text:s.text,link:s.link}),s.items&&t(s.items)}return t(n),e}function ct(n,e){return Array.isArray(e)?e.some(t=>ct(n,t)):Ae(n,e.link)?!0:e.items?ct(n,e.items):!1}function de(){const n=xe(),{theme:e,frontmatter:t}=D(),o=it("(min-width: 960px)"),s=A(!1),r=E(()=>{const C=e.value.sidebar,w=n.data.relativePath;return C?gn(C,w):[]}),a=E(()=>t.value.sidebar!==!1&&r.value.length>0&&t.value.layout!=="home"),c=E(()=>i?t.value.aside==null?e.value.aside==="left":t.value.aside==="left":!1),i=E(()=>t.value.layout==="home"?!1:t.value.aside!=null?!!t.value.aside:e.value.aside!==!1),m=E(()=>a.value&&o.value),v=E(()=>a.value?wo(r.value):[]);function f(){s.value=!0}function k(){s.value=!1}function M(){s.value?k():f()}return{isOpen:s,sidebar:r,sidebarGroups:v,hasSidebar:a,hasAside:i,leftAside:c,isSidebarEnabled:m,open:f,close:k,toggle:M}}function bo(n,e){let t;me(()=>{t=n.value?document.activeElement:void 0}),ce(()=>{window.addEventListener("keyup",o)}),kt(()=>{window.removeEventListener("keyup",o)});function o(s){s.key==="Escape"&&n.value&&(e(),t==null||t.focus())}}function yo(n){const{page:e}=D(),t=A(!1),o=E(()=>n.value.collapsed!=null),s=E(()=>!!n.value.link),r=E(()=>Ae(e.value.relativePath,n.value.link)),a=E(()=>r.value?!0:n.value.items?ct(e.value.relativePath,n.value.items):!1),c=E(()=>!!(n.value.items&&n.value.items.length));me(()=>{t.value=!!(o.value&&n.value.collapsed)}),me(()=>{(r.value||a.value)&&(t.value=!1)});function i(){o.value&&(t.value=!t.value)}return{collapsed:t,collapsible:o,isLink:s,isActiveLink:r,hasActiveLink:a,hasChildren:c,toggle:i}}const Mo=b({__name:"VPSkipLink",setup(n){const e=xe(),t=A();Y(()=>e.path,()=>t.value.focus());function o({target:s}){const r=document.querySelector(decodeURIComponent(s.hash));if(r){const a=()=>{r.removeAttribute("tabindex"),r.removeEventListener("blur",a)};r.setAttribute("tabindex","-1"),r.addEventListener("blur",a),r.focus(),window.scrollTo(0,0)}}return(s,r)=>(l(),p(z,null,[u("span",{ref_key:"backToTop",ref:t,tabindex:"-1"},null,512),u("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:o}," Skip to content ")],64))}});const $o=P(Mo,[["__scopeId","data-v-c8616af1"]]),Po={key:0,class:"VPBackdrop"},So=b({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(n){return(e,t)=>(l(),x(Qe,{name:"fade"},{default:_(()=>[e.show?(l(),p("div",Po)):$("",!0)]),_:1}))}});const Eo=P(So,[["__scopeId","data-v-c79a1216"]]);function Vo(){const n=A(!1);function e(){n.value=!0,window.addEventListener("resize",s)}function t(){n.value=!1,window.removeEventListener("resize",s)}function o(){n.value?t():e()}function s(){window.outerWidth>=768&&t()}const r=xe();return Y(()=>r.path,t),{isScreenOpen:n,openScreen:e,closeScreen:t,toggleScreen:o}}function Oe({removeCurrent:n=!0,correspondingLink:e=!1}={}){const{site:t,localeIndex:o,page:s,theme:r}=D(),a=E(()=>{var i,m;return{label:(i=t.value.locales[o.value])==null?void 0:i.label,link:((m=t.value.locales[o.value])==null?void 0:m.link)||(o.value==="root"?"/":`/${o.value}/`)}});return{localeLinks:E(()=>Object.entries(t.value.locales).flatMap(([i,m])=>n&&a.value.label===m.label?[]:{text:m.label,link:Ao(m.link||(i==="root"?"/":`/${i}/`),r.value.i18nRouting!==!1&&e,s.value.relativePath.slice(a.value.link.length-1),!t.value.cleanUrls)})),currentLang:a}}function Ao(n,e,t,o){return e?n.replace(/\/$/,"")+lt(t.replace(/(^|\/)?index.md$/,"$1").replace(/\.md$/,o?".html":"")):n}const xo=["src","alt"],Co={inheritAttrs:!1},No=b({...Co,__name:"VPImage",props:{image:{},alt:{}},setup(n){return(e,t)=>{const o=ke("VPImage",!0);return e.image?(l(),p(z,{key:0},[typeof e.image=="string"||"src"in e.image?(l(),p("img",Ge({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:d(Se)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,xo)):(l(),p(z,{key:1},[y(o,Ge({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),y(o,Ge({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):$("",!0)}}});const Pt=P(No,[["__scopeId","data-v-6db2186b"]]),Lo=["href"],Io=b({__name:"VPNavBarTitle",setup(n){const{site:e,theme:t}=D(),{hasSidebar:o}=de(),{currentLang:s}=Oe();return(r,a)=>(l(),p("div",{class:B(["VPNavBarTitle",{"has-sidebar":d(o)}])},[u("a",{class:"title",href:d(He)(d(s).link)},[h(r.$slots,"nav-bar-title-before",{},void 0,!0),d(t).logo?(l(),x(Pt,{key:0,class:"logo",image:d(t).logo},null,8,["image"])):$("",!0),d(t).siteTitle?(l(),p(z,{key:1},[Q(L(d(t).siteTitle),1)],64)):d(t).siteTitle===void 0?(l(),p(z,{key:2},[Q(L(d(e).title),1)],64)):$("",!0),h(r.$slots,"nav-bar-title-after",{},void 0,!0)],8,Lo)],2))}});const jo=P(Io,[["__scopeId","data-v-4d981103"]]);var Ot;const _n=typeof window<"u",Ro=n=>typeof n=="string",Ue=()=>{};_n&&((Ot=window==null?void 0:window.navigator)!=null&&Ot.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function dt(n){return typeof n=="function"?n():d(n)}function Do(n,e){function t(...o){n(()=>e.apply(this,o),{fn:e,thisArg:this,args:o})}return t}function To(n,e={}){let t,o;return s=>{const r=dt(n),a=dt(e.maxWait);if(t&&clearTimeout(t),r<=0||a!==void 0&&a<=0)return o&&(clearTimeout(o),o=null),s();a&&!o&&(o=setTimeout(()=>{t&&clearTimeout(t),o=null,s()},a)),t=setTimeout(()=>{o&&clearTimeout(o),o=null,s()},r)}}function Ho(n){return n}function Oo(n){return ft()?(wt(n),!0):!1}function fn(n,e=200,t={}){return Do(To(e,t),n)}function nt(n,e=200,t={}){if(e<=0)return n;const o=A(n.value),s=fn(()=>{o.value=n.value},e,t);return Y(n,()=>s()),o}function wn(n,e,t){return Y(n,(o,s,r)=>{o&&e(o,s,r)},t)}function Bo(n){var e;const t=dt(n);return(e=t==null?void 0:t.$el)!=null?e:t}const kn=_n?window:void 0;function ze(...n){let e,t,o,s;if(Ro(n[0])?([t,o,s]=n,e=kn):[e,t,o,s]=n,!e)return Ue;let r=Ue;const a=Y(()=>Bo(e),i=>{r(),i&&(i.addEventListener(t,o,s),r=()=>{i.removeEventListener(t,o,s),r=Ue})},{immediate:!0,flush:"post"}),c=()=>{a(),r()};return Oo(c),c}const Bt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},zt="__vueuse_ssr_handlers__";Bt[zt]=Bt[zt]||{};const zo={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Fo(n={}){const{reactive:e=!1,target:t=kn,aliasMap:o=zo,passive:s=!0,onEventFired:r=Ue}=n,a=De(new Set),c={toJSON(){return{}},current:a},i=e?De(c):c,m=new Set,v=new Set;function f(w,g){w in i&&(e?i[w]=g:i[w].value=g)}function k(){for(const w of v)f(w,!1)}function M(w,g){var j,H;const R=(j=w.key)==null?void 0:j.toLowerCase(),G=[(H=w.code)==null?void 0:H.toLowerCase(),R].filter(Boolean);R&&(g?a.add(R):a.delete(R));for(const W of G)v.add(W),f(W,g);R==="meta"&&!g?(m.forEach(W=>{a.delete(W),f(W,!1)}),m.clear()):typeof w.getModifierState=="function"&&w.getModifierState("Meta")&&g&&[...a,...G].forEach(W=>m.add(W))}ze(t,"keydown",w=>(M(w,!0),r(w)),{passive:s}),ze(t,"keyup",w=>(M(w,!1),r(w)),{passive:s}),ze("blur",k,{passive:!0}),ze("focus",k,{passive:!0});const C=new Proxy(i,{get(w,g,j){if(typeof g!="string")return Reflect.get(w,g,j);if(g=g.toLowerCase(),g in o&&(g=o[g]),!(g in i))if(/[+_-]/.test(g)){const R=g.split(/[+_-]/g).map(G=>G.trim());i[g]=E(()=>R.every(G=>d(C[G])))}else i[g]=A(!1);const H=Reflect.get(w,g,j);return e?d(H):H}});return C}var Ft;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(Ft||(Ft={}));var Go=Object.defineProperty,Gt=Object.getOwnPropertySymbols,Uo=Object.prototype.hasOwnProperty,qo=Object.prototype.propertyIsEnumerable,Ut=(n,e,t)=>e in n?Go(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Yo=(n,e)=>{for(var t in e||(e={}))Uo.call(e,t)&&Ut(n,t,e[t]);if(Gt)for(var t of Gt(e))qo.call(e,t)&&Ut(n,t,e[t]);return n};const Wo={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Yo({linear:Ho},Wo);function le(n){return Array.isArray?Array.isArray(n):Mn(n)==="[object Array]"}const Ko=1/0;function Jo(n){if(typeof n=="string")return n;let e=n+"";return e=="0"&&1/n==-Ko?"-0":e}function Qo(n){return n==null?"":Jo(n)}function re(n){return typeof n=="string"}function bn(n){return typeof n=="number"}function Zo(n){return n===!0||n===!1||Xo(n)&&Mn(n)=="[object Boolean]"}function yn(n){return typeof n=="object"}function Xo(n){return yn(n)&&n!==null}function ne(n){return n!=null}function ot(n){return!n.trim().length}function Mn(n){return n==null?n===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(n)}const es="Incorrect 'index' type",ts=n=>`Invalid value for key ${n}`,ns=n=>`Pattern length exceeds max of ${n}.`,os=n=>`Missing ${n} property in key`,ss=n=>`Property 'weight' in key '${n}' must be a positive integer`,qt=Object.prototype.hasOwnProperty;class rs{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(o=>{let s=$n(o);t+=s.weight,this._keys.push(s),this._keyMap[s.id]=s,t+=s.weight}),this._keys.forEach(o=>{o.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function $n(n){let e=null,t=null,o=null,s=1,r=null;if(re(n)||le(n))o=n,e=Yt(n),t=ut(n);else{if(!qt.call(n,"name"))throw new Error(os("name"));const a=n.name;if(o=a,qt.call(n,"weight")&&(s=n.weight,s<=0))throw new Error(ss(a));e=Yt(a),t=ut(a),r=n.getFn}return{path:e,id:t,weight:s,src:o,getFn:r}}function Yt(n){return le(n)?n:n.split(".")}function ut(n){return le(n)?n.join("."):n}function as(n,e){let t=[],o=!1;const s=(r,a,c)=>{if(ne(r))if(!a[c])t.push(r);else{let i=a[c];const m=r[i];if(!ne(m))return;if(c===a.length-1&&(re(m)||bn(m)||Zo(m)))t.push(Qo(m));else if(le(m)){o=!0;for(let v=0,f=m.length;v<f;v+=1)s(m[v],a,c+1)}else a.length&&s(m,a,c+1)}};return s(n,re(e)?e.split("."):e,0),o?t:t[0]}const is={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},ls={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(n,e)=>n.score===e.score?n.idx<e.idx?-1:1:n.score<e.score?-1:1},cs={location:0,threshold:.6,distance:100},ds={useExtendedSearch:!1,getFn:as,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var N={...ls,...is,...cs,...ds};const us=/[^ ]+/g;function ps(n=1,e=3){const t=new Map,o=Math.pow(10,e);return{get(s){const r=s.match(us).length;if(t.has(r))return t.get(r);const a=1/Math.pow(r,.5*n),c=parseFloat(Math.round(a*o)/o);return t.set(r,c),c},clear(){t.clear()}}}class St{constructor({getFn:e=N.getFn,fieldNormWeight:t=N.fieldNormWeight}={}){this.norm=ps(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((t,o)=>{this._keysMap[t.id]=o})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,re(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}add(e){const t=this.size();re(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,o=this.size();t<o;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!ne(e)||ot(e))return;let o={v:e,i:t,n:this.norm.get(e)};this.records.push(o)}_addObject(e,t){let o={i:t,$:{}};this.keys.forEach((s,r)=>{let a=s.getFn?s.getFn(e):this.getFn(e,s.path);if(ne(a)){if(le(a)){let c=[];const i=[{nestedArrIndex:-1,value:a}];for(;i.length;){const{nestedArrIndex:m,value:v}=i.pop();if(ne(v))if(re(v)&&!ot(v)){let f={v,i:m,n:this.norm.get(v)};c.push(f)}else le(v)&&v.forEach((f,k)=>{i.push({nestedArrIndex:k,value:f})})}o.$[r]=c}else if(re(a)&&!ot(a)){let c={v:a,n:this.norm.get(a)};o.$[r]=c}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function Pn(n,e,{getFn:t=N.getFn,fieldNormWeight:o=N.fieldNormWeight}={}){const s=new St({getFn:t,fieldNormWeight:o});return s.setKeys(n.map($n)),s.setSources(e),s.create(),s}function ms(n,{getFn:e=N.getFn,fieldNormWeight:t=N.fieldNormWeight}={}){const{keys:o,records:s}=n,r=new St({getFn:e,fieldNormWeight:t});return r.setKeys(o),r.setIndexRecords(s),r}function Fe(n,{errors:e=0,currentLocation:t=0,expectedLocation:o=0,distance:s=N.distance,ignoreLocation:r=N.ignoreLocation}={}){const a=e/n.length;if(r)return a;const c=Math.abs(o-t);return s?a+c/s:c?1:a}function hs(n=[],e=N.minMatchCharLength){let t=[],o=-1,s=-1,r=0;for(let a=n.length;r<a;r+=1){let c=n[r];c&&o===-1?o=r:!c&&o!==-1&&(s=r-1,s-o+1>=e&&t.push([o,s]),o=-1)}return n[r-1]&&r-o>=e&&t.push([o,r-1]),t}const _e=32;function vs(n,e,t,{location:o=N.location,distance:s=N.distance,threshold:r=N.threshold,findAllMatches:a=N.findAllMatches,minMatchCharLength:c=N.minMatchCharLength,includeMatches:i=N.includeMatches,ignoreLocation:m=N.ignoreLocation}={}){if(e.length>_e)throw new Error(ns(_e));const v=e.length,f=n.length,k=Math.max(0,Math.min(o,f));let M=r,C=k;const w=c>1||i,g=w?Array(f):[];let j;for(;(j=n.indexOf(e,C))>-1;){let Z=Fe(e,{currentLocation:j,expectedLocation:k,distance:s,ignoreLocation:m});if(M=Math.min(Z,M),C=j+v,w){let te=0;for(;te<v;)g[j+te]=1,te+=1}}C=-1;let H=[],R=1,G=v+f;const W=1<<v-1;for(let Z=0;Z<v;Z+=1){let te=0,K=G;for(;te<K;)Fe(e,{errors:Z,currentLocation:k+K,expectedLocation:k,distance:s,ignoreLocation:m})<=M?te=K:G=K,K=Math.floor((G-te)/2+te);G=K;let be=Math.max(1,k-K+1),ae=a?f:Math.min(k+K,f)+v,V=Array(ae+2);V[ae+1]=(1<<Z)-1;for(let I=ae;I>=be;I-=1){let q=I-1,F=t[n.charAt(q)];if(w&&(g[q]=+!!F),V[I]=(V[I+1]<<1|1)&F,Z&&(V[I]|=(H[I+1]|H[I])<<1|1|H[I+1]),V[I]&W&&(R=Fe(e,{errors:Z,currentLocation:q,expectedLocation:k,distance:s,ignoreLocation:m}),R<=M)){if(M=R,C=q,C<=k)break;be=Math.max(1,2*k-C)}}if(Fe(e,{errors:Z+1,currentLocation:k,expectedLocation:k,distance:s,ignoreLocation:m})>M)break;H=V}const ee={isMatch:C>=0,score:Math.max(.001,R)};if(w){const Z=hs(g,c);Z.length?i&&(ee.indices=Z):ee.isMatch=!1}return ee}function gs(n){let e={};for(let t=0,o=n.length;t<o;t+=1){const s=n.charAt(t);e[s]=(e[s]||0)|1<<o-t-1}return e}class Sn{constructor(e,{location:t=N.location,threshold:o=N.threshold,distance:s=N.distance,includeMatches:r=N.includeMatches,findAllMatches:a=N.findAllMatches,minMatchCharLength:c=N.minMatchCharLength,isCaseSensitive:i=N.isCaseSensitive,ignoreLocation:m=N.ignoreLocation}={}){if(this.options={location:t,threshold:o,distance:s,includeMatches:r,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:i,ignoreLocation:m},this.pattern=i?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const v=(k,M)=>{this.chunks.push({pattern:k,alphabet:gs(k),startIndex:M})},f=this.pattern.length;if(f>_e){let k=0;const M=f%_e,C=f-M;for(;k<C;)v(this.pattern.substr(k,_e),k),k+=_e;if(M){const w=f-_e;v(this.pattern.substr(w),w)}}else v(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:o}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let C={isMatch:!0,score:0};return o&&(C.indices=[[0,e.length-1]]),C}const{location:s,distance:r,threshold:a,findAllMatches:c,minMatchCharLength:i,ignoreLocation:m}=this.options;let v=[],f=0,k=!1;this.chunks.forEach(({pattern:C,alphabet:w,startIndex:g})=>{const{isMatch:j,score:H,indices:R}=vs(e,C,w,{location:s+g,distance:r,threshold:a,findAllMatches:c,minMatchCharLength:i,includeMatches:o,ignoreLocation:m});j&&(k=!0),f+=H,j&&R&&(v=[...v,...R])});let M={isMatch:k,score:k?f/this.chunks.length:1};return k&&o&&(M.indices=v),M}}class he{constructor(e){this.pattern=e}static isMultiMatch(e){return Wt(e,this.multiRegex)}static isSingleMatch(e){return Wt(e,this.singleRegex)}search(){}}function Wt(n,e){const t=n.match(e);return t?t[1]:null}class _s extends he{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class fs extends he{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const t=e.indexOf(this.pattern)===-1;return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class ws extends he{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class ks extends he{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class bs extends he{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class ys extends he{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class En extends he{constructor(e,{location:t=N.location,threshold:o=N.threshold,distance:s=N.distance,includeMatches:r=N.includeMatches,findAllMatches:a=N.findAllMatches,minMatchCharLength:c=N.minMatchCharLength,isCaseSensitive:i=N.isCaseSensitive,ignoreLocation:m=N.ignoreLocation}={}){super(e),this._bitapSearch=new Sn(e,{location:t,threshold:o,distance:s,includeMatches:r,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:i,ignoreLocation:m})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Vn extends he{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t=0,o;const s=[],r=this.pattern.length;for(;(o=e.indexOf(this.pattern,t))>-1;)t=o+r,s.push([o,t-1]);const a=!!s.length;return{isMatch:a,score:a?0:1,indices:s}}}const pt=[_s,Vn,ws,ks,ys,bs,fs,En],Kt=pt.length,Ms=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,$s="|";function Ps(n,e={}){return n.split($s).map(t=>{let o=t.trim().split(Ms).filter(r=>r&&!!r.trim()),s=[];for(let r=0,a=o.length;r<a;r+=1){const c=o[r];let i=!1,m=-1;for(;!i&&++m<Kt;){const v=pt[m];let f=v.isMultiMatch(c);f&&(s.push(new v(f,e)),i=!0)}if(!i)for(m=-1;++m<Kt;){const v=pt[m];let f=v.isSingleMatch(c);if(f){s.push(new v(f,e));break}}}return s})}const Ss=new Set([En.type,Vn.type]);class Es{constructor(e,{isCaseSensitive:t=N.isCaseSensitive,includeMatches:o=N.includeMatches,minMatchCharLength:s=N.minMatchCharLength,ignoreLocation:r=N.ignoreLocation,findAllMatches:a=N.findAllMatches,location:c=N.location,threshold:i=N.threshold,distance:m=N.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:o,minMatchCharLength:s,findAllMatches:a,ignoreLocation:r,location:c,threshold:i,distance:m},this.pattern=t?e:e.toLowerCase(),this.query=Ps(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:o,isCaseSensitive:s}=this.options;e=s?e:e.toLowerCase();let r=0,a=[],c=0;for(let i=0,m=t.length;i<m;i+=1){const v=t[i];a.length=0,r=0;for(let f=0,k=v.length;f<k;f+=1){const M=v[f],{isMatch:C,indices:w,score:g}=M.search(e);if(C){if(r+=1,c+=g,o){const j=M.constructor.type;Ss.has(j)?a=[...a,...w]:a.push(w)}}else{c=0,r=0,a.length=0;break}}if(r){let f={isMatch:!0,score:c/r};return o&&(f.indices=a),f}}return{isMatch:!1,score:1}}}const mt=[];function Vs(...n){mt.push(...n)}function ht(n,e){for(let t=0,o=mt.length;t<o;t+=1){let s=mt[t];if(s.condition(n,e))return new s(n,e)}return new Sn(n,e)}const Ye={AND:"$and",OR:"$or"},vt={PATH:"$path",PATTERN:"$val"},gt=n=>!!(n[Ye.AND]||n[Ye.OR]),As=n=>!!n[vt.PATH],xs=n=>!le(n)&&yn(n)&&!gt(n),Jt=n=>({[Ye.AND]:Object.keys(n).map(e=>({[e]:n[e]}))});function An(n,e,{auto:t=!0}={}){const o=s=>{let r=Object.keys(s);const a=As(s);if(!a&&r.length>1&&!gt(s))return o(Jt(s));if(xs(s)){const i=a?s[vt.PATH]:r[0],m=a?s[vt.PATTERN]:s[i];if(!re(m))throw new Error(ts(i));const v={keyId:ut(i),pattern:m};return t&&(v.searcher=ht(m,e)),v}let c={children:[],operator:r[0]};return r.forEach(i=>{const m=s[i];le(m)&&m.forEach(v=>{c.children.push(o(v))})}),c};return gt(n)||(n=Jt(n)),o(n)}function Cs(n,{ignoreFieldNorm:e=N.ignoreFieldNorm}){n.forEach(t=>{let o=1;t.matches.forEach(({key:s,norm:r,score:a})=>{const c=s?s.weight:null;o*=Math.pow(a===0&&c?Number.EPSILON:a,(c||1)*(e?1:r))}),t.score=o})}function Ns(n,e){const t=n.matches;e.matches=[],ne(t)&&t.forEach(o=>{if(!ne(o.indices)||!o.indices.length)return;const{indices:s,value:r}=o;let a={indices:s,value:r};o.key&&(a.key=o.key.src),o.idx>-1&&(a.refIndex=o.idx),e.matches.push(a)})}function Ls(n,e){e.score=n.score}function Is(n,e,{includeMatches:t=N.includeMatches,includeScore:o=N.includeScore}={}){const s=[];return t&&s.push(Ns),o&&s.push(Ls),n.map(r=>{const{idx:a}=r,c={item:e[a],refIndex:a};return s.length&&s.forEach(i=>{i(r,c)}),c})}class we{constructor(e,t={},o){this.options={...N,...t},this.options.useExtendedSearch,this._keyStore=new rs(this.options.keys),this.setCollection(e,o)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof St))throw new Error(es);this._myIndex=t||Pn(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){!ne(e)||(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const t=[];for(let o=0,s=this._docs.length;o<s;o+=1){const r=this._docs[o];e(r,o)&&(this.removeAt(o),o-=1,s-=1,t.push(r))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:o,includeScore:s,shouldSort:r,sortFn:a,ignoreFieldNorm:c}=this.options;let i=re(e)?re(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Cs(i,{ignoreFieldNorm:c}),r&&i.sort(a),bn(t)&&t>-1&&(i=i.slice(0,t)),Is(i,this._docs,{includeMatches:o,includeScore:s})}_searchStringList(e){const t=ht(e,this.options),{records:o}=this._myIndex,s=[];return o.forEach(({v:r,i:a,n:c})=>{if(!ne(r))return;const{isMatch:i,score:m,indices:v}=t.searchIn(r);i&&s.push({item:r,idx:a,matches:[{score:m,value:r,norm:c,indices:v}]})}),s}_searchLogical(e){const t=An(e,this.options),o=(c,i,m)=>{if(!c.children){const{keyId:f,searcher:k}=c,M=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(i,f),searcher:k});return M&&M.length?[{idx:m,item:i,matches:M}]:[]}const v=[];for(let f=0,k=c.children.length;f<k;f+=1){const M=c.children[f],C=o(M,i,m);if(C.length)v.push(...C);else if(c.operator===Ye.AND)return[]}return v},s=this._myIndex.records,r={},a=[];return s.forEach(({$:c,i})=>{if(ne(c)){let m=o(t,c,i);m.length&&(r[i]||(r[i]={idx:i,item:c,matches:[]},a.push(r[i])),m.forEach(({matches:v})=>{r[i].matches.push(...v)}))}}),a}_searchObjectList(e){const t=ht(e,this.options),{keys:o,records:s}=this._myIndex,r=[];return s.forEach(({$:a,i:c})=>{if(!ne(a))return;let i=[];o.forEach((m,v)=>{i.push(...this._findMatches({key:m,value:a[v],searcher:t}))}),i.length&&r.push({idx:c,item:a,matches:i})}),r}_findMatches({key:e,value:t,searcher:o}){if(!ne(t))return[];let s=[];if(le(t))t.forEach(({v:r,i:a,n:c})=>{if(!ne(r))return;const{isMatch:i,score:m,indices:v}=o.searchIn(r);i&&s.push({score:m,key:e,value:r,idx:a,norm:c,indices:v})});else{const{v:r,n:a}=t,{isMatch:c,score:i,indices:m}=o.searchIn(r);c&&s.push({score:i,key:e,value:r,norm:a,indices:m})}return s}}we.version="6.6.2";we.createIndex=Pn;we.parseIndex=ms;we.config=N;we.parseQuery=An;Vs(Es);const Qt=De({selectedNode:"",selectedGroup:"",search:"",dataValue:"",filtered:{count:0,items:new Map,groups:new Set}}),Ce=()=>({isSearching:E(()=>Qt.search!==""),...Jn(Qt)});function js(n){return{all:n=n||new Map,on:function(e,t){var o=n.get(e);o?o.push(t):n.set(e,[t])},off:function(e,t){var o=n.get(e);o&&(t?o.splice(o.indexOf(t)>>>0,1):n.set(e,[]))},emit:function(e,t){var o=n.get(e);o&&o.slice().map(function(s){s(t)}),(o=n.get("*"))&&o.slice().map(function(s){s(e,t)})}}}const Rs=js(),Ze=()=>({emitter:Rs});function Ds(n,e){let t=n.nextElementSibling;for(;t;){if(t.matches(e))return t;t=t.nextElementSibling}}function Ts(n,e){let t=n.previousElementSibling;for(;t;){if(t.matches(e))return t;t=t.previousElementSibling}}const Hs=["command-theme"],Os={"command-root":""},Bs=b({name:"Command"}),zs=b({...Bs,props:{theme:{type:String,default:"default"},fuseOptions:{type:Object,default:()=>({threshold:.2,keys:["label"]})}},emits:["select-item"],setup(n,{emit:e}){const t=n,o='[command-item=""]',s="command-item-key",r='[command-group=""]',a="command-group-key",c='[command-group-heading=""]',i=`${o}:not([aria-disabled="true"])`,m=`${o}[aria-selected="true"]`,v="command-item-select",f="data-value";Ie("theme",t.theme||"default");const{selectedNode:k,search:M,dataValue:C,filtered:w}=Ce(),{emitter:g}=Ze(),j=A(),H=nt(A(new Map),333),R=nt(A(new Set),333),G=nt(A(new Map)),W=E(()=>{const S=[];for(const[O,T]of H.value.entries())S.push({key:O,label:T});return S}),ee=E(()=>{const S=we.createIndex(t.fuseOptions.keys,W.value);return new we(W.value,t.fuseOptions,S)}),Z=()=>{var S,O,T;const U=te();U&&(((S=U.parentElement)==null?void 0:S.firstElementChild)===U&&((T=(O=U.closest(r))==null?void 0:O.querySelector(c))==null||T.scrollIntoView({block:"nearest"})),U.scrollIntoView({block:"nearest"}))},te=()=>{var S;return(S=j.value)==null?void 0:S.querySelector(m)},K=(S=j.value)=>{const O=S==null?void 0:S.querySelectorAll(i);return O?Array.from(O):[]},be=()=>{var S;const O=(S=j.value)==null?void 0:S.querySelectorAll(r);return O?Array.from(O):[]},ae=()=>{const[S]=K();S&&S.getAttribute(s)&&(k.value=S.getAttribute(s)||"")},V=S=>{const O=K()[S];O&&(k.value=O.getAttribute(s)||"")},I=S=>{const O=te(),T=K(),U=T.findIndex(Be=>Be===O),pe=T[U+S];pe?k.value=pe.getAttribute(s)||"":S>0?V(0):V(T.length-1)},q=S=>{const O=te();let T=O==null?void 0:O.closest(r),U=null;for(;T&&!U;)T=S>0?Ds(T,r):Ts(T,r),U=T==null?void 0:T.querySelector(i);U?k.value=U.getAttribute(s)||"":I(S)},F=()=>V(0),ye=()=>V(K().length-1),Le=S=>{S.preventDefault(),S.metaKey?ye():S.altKey?q(1):I(1)},Me=S=>{S.preventDefault(),S.metaKey?F():S.altKey?q(-1):I(-1)},J=S=>{switch(S.key){case"n":case"j":{S.ctrlKey&&Le(S);break}case"ArrowDown":{Le(S);break}case"p":case"k":{S.ctrlKey&&Me(S);break}case"ArrowUp":{Me(S);break}case"Home":{F();break}case"End":{ye();break}case"Enter":{const O=te();if(O){const T=new Event(v);O.dispatchEvent(T)}}}},ue=()=>{if(!M.value){w.value.count=R.value.size;return}w.value.groups=new Set("");const S=new Map,O=ee.value.search(M.value).map(T=>T.item);for(const{key:T,label:U}of O)S.set(T,U);for(const[T,U]of G.value)for(const pe of U)S.get(pe)&&w.value.groups.add(T);ie(()=>{w.value.count=S.size,w.value.items=S})},ge=()=>{const S=K(),O=be();for(const T of S){const U=T.getAttribute(s)||"",pe=T.getAttribute(f)||"";R.value.add(U),H.value.set(U,pe),w.value.count=H.value.size}for(const T of O){const U=K(T),pe=T.getAttribute(a)||"",Be=new Set("");for(const Fn of U){const Gn=Fn.getAttribute(s)||"";Be.add(Gn)}G.value.set(pe,Be)}};Y(()=>k.value,S=>{S&&ie(Z)},{deep:!0}),Y(()=>M.value,S=>{ue(),ie(ae)}),g.on("selectItem",S=>{e("select-item",S)});const tt=fn(S=>{S&&(ge(),ie(ae))},100);return g.on("rerenderList",tt),ce(()=>{ge(),ae()}),(S,O)=>(l(),p("div",{class:B(n.theme),onKeydown:J,ref_key:"commandRef",ref:j,"command-theme":n.theme},[u("div",Os,[h(S.$slots,"default")])],42,Hs))}}),Ne=(n,e)=>{const t=n.__vccOpts||n;for(const[o,s]of e)t[o]=s;return t},_t=Ne(zs,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/Command.vue"]]),Fs={"command-dialog":""},Gs={"command-dialog-mask":""},Us={"command-dialog-wrapper":""},qs={"command-dialog-header":""},Ys={"command-dialog-body":""},Ws={key:0,"command-dialog-footer":""},Ks=b({name:"Command.Dialog"}),Js=b({...Ks,props:{visible:{type:Boolean,required:!0},theme:{type:String,required:!0}},emits:["select-item"],setup(n,{emit:e}){const t=n,{search:o,filtered:s}=Ce(),{emitter:r}=Ze(),a=A();r.on("selectItem",i=>{e("select-item",i)});const c=()=>{o.value="",s.value.count=0,s.value.items=new Map,s.value.groups=new Set};return wn(()=>t.visible,c),bt(c),(i,m)=>(l(),x(Kn,{to:"body",ref_key:"dialogRef",ref:a},[y(Qe,{name:"command-dialog",appear:""},{default:_(()=>[n.visible?(l(),x(_t,{key:0,theme:n.theme},{default:_(()=>[u("div",Fs,[u("div",Gs,[u("div",Us,[u("div",qs,[h(i.$slots,"header")]),u("div",Ys,[h(i.$slots,"body")]),i.$slots.footer?(l(),p("div",Ws,[h(i.$slots,"footer")])):$("v-if",!0)])])])]),_:3},8,["theme"])):$("v-if",!0)]),_:3})],512))}}),Qs=Ne(Js,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandDialog.vue"]]);let xn=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((e,t)=>(t&=63,t<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t>62?e+="-":e+="_",e),"");const Zs=["command-group-key","data-value"],Xs={key:0,"command-group-heading":""},er={"command-group-items":"",role:"group"},tr=b({name:"Command.Group"}),nr=b({...tr,props:{heading:{type:String,required:!0}},setup(n){const e=E(()=>`command-group-${xn()}`),{filtered:t,isSearching:o}=Ce(),s=E(()=>o.value?t.value.groups.has(e.value):!0);return(r,a)=>cn((l(),p("div",{"command-group":"",role:"presentation",key:d(e),"command-group-key":d(e),"data-value":n.heading},[n.heading?(l(),p("div",Xs,L(n.heading),1)):$("v-if",!0),u("div",er,[h(r.$slots,"default")])],8,Zs)),[[dn,d(s)]])}}),or=Ne(nr,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandGroup.vue"]]),sr=["placeholder","value"],rr=b({name:"Command.Input"}),ar=b({...rr,props:{placeholder:{type:String,required:!0},value:{type:String,required:!1}},emits:["input","update:value"],setup(n,{emit:e}){const t=A(null),{search:o}=Ce(),s=E(()=>o.value),r=a=>{const c=a,i=a.target;o.value=i==null?void 0:i.value,e("input",c),e("update:value",o.value)};return me(()=>{var a;(a=t.value)==null||a.focus()}),(a,c)=>(l(),p("input",{ref_key:"inputRef",ref:t,"command-input":"","auto-focus":"","auto-complete":"off","auto-correct":"off","spell-check":!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,placeholder:n.placeholder,value:d(s),onInput:r},null,40,sr))}}),ir=Ne(ar,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandInput.vue"]]),lr=["aria-selected","aria-disabled","command-item-key"],cr=b({name:"Command.Item"}),dr=b({...cr,props:{shortcut:{type:Array,required:!1},perform:{type:null,required:!1}},emits:["select"],setup(n,{emit:e}){const t=n,o="command-item-select",s="data-value",{current:r}=Fo(),{selectedNode:a,filtered:c,isSearching:i}=Ce(),{emitter:m}=Ze(),v=A(),f=E(()=>`command-item-${xn()}`),k=E(()=>{const w=c.value.items.get(f.value);return i.value?w!==void 0:!0}),M=E(()=>Array.from(r)),C=()=>{var w;const g={key:f.value,value:((w=v.value)==null?void 0:w.getAttribute(s))||""};e("select",g),m.emit("selectItem",g)};return wn(M,w=>{t.shortcut&&t.shortcut.length>0&&t.shortcut.every(g=>r.has(g.toLowerCase()))&&t.perform&&t.perform()}),me(()=>{var w;(w=v.value)==null||w.addEventListener(o,C)}),bt(()=>{var w;(w=v.value)==null||w.removeEventListener(o,C)}),(w,g)=>cn((l(),p("div",{ref_key:"itemRef",ref:v,"command-item":"",role:"option","aria-selected":d(a)===d(f),"aria-disabled":!d(k),key:d(f),"command-item-key":d(f),onClick:C},[h(w.$slots,"default")],8,lr)),[[dn,d(k)]])}}),ur=Ne(dr,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandItem.vue"]]),pr=b({name:"Command.List"}),mr=b({...pr,setup(n){const{emitter:e}=Ze(),t=A(),o=A();let s=null,r;return me(()=>{r=o.value;const a=t.value;r&&a&&(s=new ResizeObserver(c=>{ie(()=>{const i=r==null?void 0:r.offsetHeight;a==null||a.style.setProperty("--command-list-height",`${i==null?void 0:i.toFixed(1)}px`),e.emit("rerenderList",!0)})}),s.observe(r))}),bt(()=>{s!==null&&r&&s.unobserve(r)}),(a,c)=>(l(),p("div",{"command-list":"",role:"listbox","aria-label":"Suggestions",ref_key:"listRef",ref:t},[u("div",{"command-list-sizer":"",ref_key:"heightRef",ref:o},[h(a.$slots,"default")],512)],512))}}),hr=Ne(mr,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandList.vue"]]),vr=b({name:"Command.Empty",setup(n,{attrs:e,slots:t}){const{filtered:o}=Ce(),s=E(()=>o.value.count===0);return()=>s.value?qe("div",{"command-empty":"",role:"presentation",...e},t):qe("div",{"command-empty":"hidden",role:"presentation",style:{display:"none"},...e})}}),gr=b({name:"Command.Loading",setup(n,{attrs:e,slots:t}){return()=>qe("div",{"command-loading":"",role:"progressbar",...e},t)}}),_r=b({name:"Command.Separator",setup(n,{attrs:e,slots:t}){return()=>qe("div",{"command-separator":"",role:"separator",...e})}}),$e=Object.assign(_t,{Dialog:Qs,Empty:vr,Group:or,Input:ir,Item:ur,List:hr,Loading:gr,Separator:_r,Root:_t});var Zt;const Cn=typeof window<"u",fr=n=>typeof n=="string",Nn=()=>{};Cn&&((Zt=window==null?void 0:window.navigator)!=null&&Zt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Ln(n){return typeof n=="function"?n():d(n)}function wr(n){return n}function kr(n){return ft()?(wt(n),!0):!1}function br(n,e=!0){ln()?ce(n):e?n():ie(n)}function yr(n){var e;const t=Ln(n);return(e=t==null?void 0:t.$el)!=null?e:t}const Et=Cn?window:void 0;function Pe(...n){let e,t,o,s;if(fr(n[0])||Array.isArray(n[0])?([t,o,s]=n,e=Et):[e,t,o,s]=n,!e)return Nn;Array.isArray(t)||(t=[t]),Array.isArray(o)||(o=[o]);const r=[],a=()=>{r.forEach(v=>v()),r.length=0},c=(v,f,k,M)=>(v.addEventListener(f,k,M),()=>v.removeEventListener(f,k,M)),i=Y(()=>[yr(e),Ln(s)],([v,f])=>{a(),v&&r.push(...t.flatMap(k=>o.map(M=>c(v,k,M,f))))},{immediate:!0,flush:"post"}),m=()=>{i(),a()};return kr(m),m}const Xt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},en="__vueuse_ssr_handlers__";Xt[en]=Xt[en]||{};const Mr={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function $r(n={}){const{reactive:e=!1,target:t=Et,aliasMap:o=Mr,passive:s=!0,onEventFired:r=Nn}=n,a=De(new Set),c={toJSON(){return{}},current:a},i=e?De(c):c,m=new Set,v=new Set;function f(w,g){w in i&&(e?i[w]=g:i[w].value=g)}function k(){a.clear();for(const w of v)f(w,!1)}function M(w,g){var j,H;const R=(j=w.key)==null?void 0:j.toLowerCase(),W=[(H=w.code)==null?void 0:H.toLowerCase(),R].filter(Boolean);R&&(g?a.add(R):a.delete(R));for(const ee of W)v.add(ee),f(ee,g);R==="meta"&&!g?(m.forEach(ee=>{a.delete(ee),f(ee,!1)}),m.clear()):typeof w.getModifierState=="function"&&w.getModifierState("Meta")&&g&&[...a,...W].forEach(ee=>m.add(ee))}Pe(t,"keydown",w=>(M(w,!0),r(w)),{passive:s}),Pe(t,"keyup",w=>(M(w,!1),r(w)),{passive:s}),Pe("blur",k,{passive:!0}),Pe("focus",k,{passive:!0});const C=new Proxy(i,{get(w,g,j){if(typeof g!="string")return Reflect.get(w,g,j);if(g=g.toLowerCase(),g in o&&(g=o[g]),!(g in i))if(/[+_-]/.test(g)){const R=g.split(/[+_-]/g).map(G=>G.trim());i[g]=E(()=>R.every(G=>d(C[G])))}else i[g]=A(!1);const H=Reflect.get(w,g,j);return e?d(H):H}});return C}var tn;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(tn||(tn={}));var Pr=Object.defineProperty,nn=Object.getOwnPropertySymbols,Sr=Object.prototype.hasOwnProperty,Er=Object.prototype.propertyIsEnumerable,on=(n,e,t)=>e in n?Pr(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Vr=(n,e)=>{for(var t in e||(e={}))Sr.call(e,t)&&on(n,t,e[t]);if(nn)for(var t of nn(e))Er.call(e,t)&&on(n,t,e[t]);return n};const Ar={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Vr({linear:wr},Ar);function xr(n={}){const{window:e=Et,initialWidth:t=1/0,initialHeight:o=1/0,listenOrientation:s=!0,includeScrollbar:r=!0}=n,a=A(t),c=A(o),i=()=>{e&&(r?(a.value=e.innerWidth,c.value=e.innerHeight):(a.value=e.document.documentElement.clientWidth,c.value=e.document.documentElement.clientHeight))};return i(),br(i),Pe("resize",i,{passive:!0}),s&&Pe("orientationchange",i,{passive:!0}),{width:a,height:c}}const st=A([{route:"/guide/quick start",meta:{title:"快速开始",date:"2023-05-22 19:23:47",tag:[],description:`\r
\r
\r
 cdn 引入\r
\r
\`\`\`html\r
\r
<script type="module" src="https://cdn.jsdelivr.net/npm/webzen-ui@0.0.4/`,cover:""}},{route:"/java/base",meta:{title:"1.java基础",date:"2023-05-27 18:45:43",tag:[],description:`\r
\r
\r
\r
\r
 1.1springboot helloworld\r
\r
 1.1.1 环境\r
\r
\`\`\`shell\r
1.idea 下载社区版的。\r
\r
https://www.oracle.c`,cover:""}},{route:"/java/java",meta:{title:"jvm",date:"2023-05-27 18:45:43",tag:[],description:`\r
jvm 是一种 执行环境 | 翻译，有垃圾回收，内存管理之类的东西\r
\r
 \r
\r
\r
\r
 java8 虚拟机和之前的变化更新？\r
\r
\`\`\`js\r
1.Lambda 表达式引入：Java 8 `,cover:""}},{route:"/project/图表绘制",meta:{title:"1.图表",date:"2023-08-23 11:04:28",tag:[],description:`\r
\r
\r
[[toc]]\r
\r
 1.1  mermaid\r
\r
\r
\r
\r
\r
 1.1.1 甘特图(进度)\r
\r
\r
\r
\`\`\`mermaid\r
gantt\r
    title 平台开发流程\r`,cover:""}},{route:"/python/base",meta:{title:"",date:"2023-08-23 11:04:28",tag:[],cover:""}},{route:"/python/flask",meta:{title:"可以像pythonxx.pyaddxx调用，但是速度会非常满",date:"2023-05-27 18:45:43",tag:[],description:`\r
\r
\r
import sys\r
import pyautogui\r
 python index.py 2   能输出后面的值\r
type = sys.argv[1]\r
pyautogui.PAUS`,cover:""}},{route:"/python/llm",meta:{title:"4.LLM大语言模型",date:"2023-08-23 11:04:28",tag:[],description:`\r
\r
\r
\r
\r
 4.1.RMKV\r
\r
\`\`\`\r
Receptance Weighted Key Value (RWKV)\r
\r
其中 R, K, V 都由输入的线性变换生成，而 W 是参数。\r`,cover:""}},{route:"/know/know/10.项目具体代码优化",meta:{title:"10.项目具体代码优化",date:"2023-10-18 08:57:34",tag:[],description:`\r
\r
\r
\r
\r
 10.1 js 工具函数篇(function)\r
\r
\r
\r
 10.1.1 函数重载 | 复用\r
\r
\`\`\`js\r
/**\r
 * @des 函数重载原理 | 利用 map\r
`,cover:""}},{route:"/know/know/11.web3",meta:{title:"11.web3",date:"2023-08-23 11:04:28",tag:[],description:`\r
简介：Dapp。后端基本不需要，需要的是链端的知识 \r
\r
 11.1 基本概念\r
\r
- 用户可以通过数字密钥或钱包登录任何平台\r
- 前端与底层区块链网络交互，区块链协议和智能合约取代特定业务`,cover:""}},{route:"/know/know/12.运维",meta:{title:"12.运维",date:"2023-10-18 08:57:34",tag:[],description:`\r
[[toc]]\r
\r
\r
\r
\`\`\`shell\r
https://mirrors.tuna.tsinghua.edu.cn/ubuntu/\r
\`\`\`\r
\r
\r
\r
 12.1 docker\r
\r
`,cover:""}},{route:"/know/know/1html",meta:{title:"1.HTML（浏览器机制）",date:"2023-10-18 08:57:34",tag:[],description:`\r
[[toc]]\r
\r
 1.1基础知识\r
\r
 1.1.1 HTML5新属性\r
\r
聋人的3D后台拖拽存储\r
\r
\`\`\`js\r
1. 8个语义标签：header, section, footer,`,cover:""}},{route:"/know/know/2javascript基础",meta:{title:"2.JavaScript基础",date:"2023-10-18 08:57:34",tag:[],description:`\r
[[TOC]]\r
\r
\r
\r
\`\`\`ts\r
发现一个网站可以搭建简单的node服务，https://runkit.com/ 。去到里面注册账号后输入类似\r
\r
export.endpoint =f`,cover:""}},{route:"/know/know/3javascript基础",meta:{title:"2.1JavaScript基础|v8",date:"2023-10-18 08:57:34",tag:[],description:`\r
[[toc]]\r
\r
 2.1  v8\r
\r
 2.1.1   垃圾回收\r
\r
- 变量都在堆区上\r
- \r
\r
\`\`\`js\r
--1.简单说一下原理\r
首先js因为是单线程，垃圾回收会占用主线程`,cover:""}},{route:"/know/know/4javascript代码输出题",meta:{title:"2.9JavaScript代码输出题",date:"2023-05-23 21:20:09",tag:[],description:`\r
[[toc]]\r
\r
 2.9 后续\r
\r
\r
\r
 2.9.1 闭包\r
\r
\`\`\`js\r
能访问上级函数作用域中的变量（哪怕上级函数上下文已经销毁）\r
\r
//1.闭包缓存了变量\r
var da`,cover:""}},{route:"/know/know/4javascript手写题",meta:{title:"4.JS手写题",date:"2023-10-18 08:57:34",tag:[],description:`\r
[[toc]]\r
\r
 4.1.debounce | thorttle\r
\r
\`\`\`js\r
/**\r
 * \r
 * @param {*} fn \r
 * @param {*} time \r
 *`,cover:""}},{route:"/know/know/5javascript-es6",meta:{title:"3.JavaScript-es6",date:"2023-10-18 08:57:34",tag:[],description:`\r
[[toc]]\r
\r
 3.0 var  let const\r
\r
\`\`\`js\r
var 变量提升。只有声明没有赋值\r
\r
暂时性死区:let const没有声明变量却引入。实例化到被创造的过程。`,cover:""}},{route:"/know/know/6ts",meta:{title:"2.2.ts",date:"2023-10-18 08:57:34",tag:[],description:`\r
[[toc]]\r
\r
https://www.typescriptlang.org/play?code/FAAhQ\r
\r
 2.1 基本\r
\r
 2.1.0 安装\r
\r
\`\`\`shell\r
npm`,cover:""}},{route:"/know/know/7css",meta:{title:"5.CSS",date:"2023-08-23 11:04:28",tag:[],description:`\r
[[toc]]\r
\r
 5.1 基础\r
\r
 5.1.1 border-box |  content-box   \r
\r
\`\`\`js\r
--1.怪异盒子模型（ie盒子）：box-sizing: b`,cover:""}},{route:"/know/know/8adb",meta:{title:"6.脚本工具",date:"2023-10-18 08:57:34",tag:[],description:`\r
[[toc]]\r
\r
\r
\r
 6.2 adb\r
\r
\`\`\`sh\r
无线连接必须先有线连接\r
--1. 手机上开发者选项和USB调试 模拟点击打开\r
--2. utils/脚本/adb.zip 解`,cover:""}},{route:"/know/优化/11.webcomponent",meta:{title:"",date:"2023-08-23 11:04:28",tag:[],cover:""}},{route:"/know/优化/12.pwa",meta:{title:"",date:"2023-08-23 11:04:28",tag:[],cover:""}},{route:"/know/优化/1性能优化和安全",meta:{title:"1.性能优化与安全|授权安全加密",date:"2023-10-18 08:57:34",tag:[],description:`\r
[[toc]]\r
\r
 3.1.常见Web攻击\r
\r
\r
\r
 3.1.1 XSS\r
\r
跨站脚本攻击(solution:函数过滤+dom的过滤)\r
\r
将恶意script代码植入页面中，需要对输`,cover:""}},{route:"/know/优化/3算法",meta:{title:"3.实用算法|设计模式",date:"2023-08-23 11:04:28",tag:[],description:`\r
[[toc]]\r
\r
 7.1 时间复杂度\r
\r
<img src="https://cdn.jsdelivr.net/npm/frontimagepackage/blog/%E9%9D%A2%E`,cover:""}},{route:"/know/优化/5npm,组件库构造",meta:{title:"5.组件库构建|脚手架建设",date:"2023-08-23 11:04:28",tag:[],description:`\r
[[toc]]\r
\r
\r
\r
\r
这里是我们的一个打包示例，通过npm install + npm run build可以打包代码\r
\r
https://gitee.com/Electrolux/`,cover:""}},{route:"/know/优化/6webrtc",meta:{title:"6.webrtc",date:"2023-05-22 19:23:47",tag:[],description:`\r
\r
\r
[[toc]]\r
\r
 6.0 概念 | 缺点\r
\r
\r
\`\`\`js\r
0.webrtc 是 用户通过 nat，stun，turn经过信令服务器交换STUN和TURN来进行和其他人所建立p`,cover:""}},{route:"/know/优化/9wasm",meta:{title:"9.webassembly",date:"2023-08-23 11:04:28",tag:[],description:`\r
[toc]\r
\r
\r
\r
[[toc]]\r
\r
\r
\r
 9.1.基础\r
\r
 9.1.1chrome如何运行Wasm\r
\r
\r
\r
浏览器内置JIT引擎，V8使用了分层编译模式（Tiered）来`,cover:""}},{route:"/know/框架/10aframe",meta:{title:"10.aframe",date:"2023-05-27 18:45:43",tag:[],description:`\r
\r
\r
\r
\r
\r
\r
\r
\r
 10.1 视频播放器\r
\r
\r
\r
 10.1.1 快速开始\r
\r
\`\`\`html\r
<script src="https://aframe.io/release`,cover:""}},{route:"/know/框架/11逆向数据crawl",meta:{title:"11.逆向|数据crawl",date:"2023-05-22 19:23:47",tag:[],description:`\r
[[toc]]\r
\r
 11.1 逆向\r
\r
\r
\r
 11.1.1 逆向基础\r
\r
\`\`\`js\r
// document.cookie\r
\r
\r
\r
// --1.函数hook\r
\r
// js`,cover:""}},{route:"/know/框架/12threejs",meta:{title:"5.threejs的性能优化",date:"2023-05-27 18:45:43",tag:[],description:`\r
[[toc]]\r
\r
 5.1 基本的性能优化\r
\r
\`\`\`js\r
1.beforedestory的时候模型dispose\r
2.模型减顶点减面，使用法线贴图\r
3.将一个场景的渲染结果作为另一个`,cover:""}},{route:"/know/框架/13electron",meta:{title:"13.electron",date:"2023-05-22 19:23:47",tag:[],description:`\r
[[toc]]\r
\r
 13.1 基础\r
\r
\`\`\`shell\r
git clone https://github.com/electron/electron-quick-start\r
cd el`,cover:""}},{route:"/know/框架/14webGL基础",meta:{title:"1.webGL知识",date:"2023-05-27 18:45:43",tag:[],description:`\r
[[toc]]\r
\r
 1.1 canvas基础(看我gitee' chart demo)\r
\r
\r
\r
canvas元素本身并没有绘制能力的，它仅仅是图形的容器，而getContext()方法返`,cover:""}},{route:"/know/框架/15threejs",meta:{title:"5.threejs的性能优化",date:"2023-05-27 18:45:43",tag:[],description:`\r
[[toc]]\r
\r
 5.1 基本的性能优化\r
\r
\`\`\`js\r
1.beforedestory的时候模型dispose\r
2.模型减顶点减面，使用法线贴图\r
3.将一个场景的渲染结果作为另一个`,cover:""}},{route:"/know/框架/16.echart",meta:{title:"16.echart",date:"2023-08-23 11:04:28",tag:[],description:`\r
\r
\r
\r
\r
下面的 都是 object 里的第一层数据\r
\r
 16.1  设置位置\r
\r
\`\`\`js\r
grid: {\r
  top:"3%",\r
  left: '0%',\r
  righ`,cover:""}},{route:"/know/框架/17webpack",meta:{title:"17.webpack",date:"2023-10-18 08:57:34",tag:[],description:`\r
[[toc]]\r
\r
\r
\r
\r
\r
 17.0  基础知识\r
\r
\`\`\`ts\r
\r
\r
--5.webpack 和 webpack-cli的区别\r
webpack-cli 只是处理参数，且执行w`,cover:""}},{route:"/know/框架/1vue",meta:{title:"1.vue|主流方案对比",date:"2023-05-22 19:23:47",tag:[],description:`\r
[[toc]]\r
\r
\r
\r
 1.0 经典八股\r
\r
 1.0.1 nexttick原理\r
\r
\`\`\`\r
【1】nextTick 中其实就是封装了异步代码。（promise.then.resol`,cover:""}},{route:"/know/框架/2react",meta:{title:"2.react",date:"2023-10-18 08:57:34",tag:[],description:`\r
[[toc]]\r
\r
\r
\r
 react  安装 \r
\r
\`\`\`shell\r
 React的脚手架:create-react-app\r
npm i create-react-app -g\r
cr`,cover:""}},{route:"/know/框架/3ssr",meta:{title:"3.ssr",date:"2023-05-22 19:23:47",tag:[],description:`\r
[[toc]]\r
\r
项目示例：https://gitee.com/Electrolux/nuxt-vue-project\r
\r
 3.1 nuxt3\r
\r
node 14.18以上可以用\r
\r
`,cover:""}},{route:"/know/框架/4three数据大屏",meta:{title:"4.数据大屏自适应",date:"2023-05-27 18:45:43",tag:[],description:`\r
[[toc]]\r
\r
大屏等在不同尺寸下面的自适应的解决。百度大屏等，他们都采用了css3的缩放\`transform: scale(X)\`属性。相比较别的乱七八糟的方法。我们只要监听浏览器的窗口大`,cover:""}},{route:"/know/框架/4微前端",meta:{title:"4.微前端",date:"2023-05-22 19:23:47",tag:[],description:`\r
\r
\r
\`\`\`\r
主要针对于 ToB 的项目。 ToC的项目一般3-5变就没了。\r
去看看那些电信软件、银行软件，哪个不是 10 年+ 的寿命？企业软件的升级有多痛这个我就不多说了\r
\`\`\`\r
\r`,cover:""}},{route:"/know/框架/5vue3",meta:{title:"5.vue3",date:"2023-08-23 11:04:28",tag:[],description:`\r
[[toc]]\r
\r
https://cn.vuejs.org/guide/built-ins/teleport.html\r
\r
 5.？奇奇怪怪的报错\r
\r
\`\`\`js\r
\r
\r
--2.元素隐`,cover:""}},{route:"/know/框架/7python",meta:{title:"7.python",date:"2023-05-22 19:23:47",tag:[],description:`\r
\r
\r
 7.1 anconda \r
\r
\`\`\`js\r
--1.去到这个网站然后下载，注意只为我安装就可以添加到环境变量\r
https://repo.anaconda.com/archive/\r
`,cover:""}},{route:"/know/框架/7tensorFlow",meta:{title:"7.tensorFlow.js",date:"2023-08-23 11:04:28",tag:[],description:`\r
[[toc]]\r
\r
 7.1   tensorFlow.js | 基础\r
\r
\r
\r
 7.1.1 Tensors (张量)\r
\r
\`\`\`js\r
--1.Tensors (张量)：类似于js的数`,cover:""}},{route:"/know/框架/8ffmpeg",meta:{title:"8.ffmpeg",date:"2023-05-22 19:23:47",tag:[],description:`\r
[[toc]]\r
\r
 8.1 基础\r
\r
\r
\r
\`\`\`js\r
--1. 容器：视频流，字幕流（srt），音频流 （stream）\r
--2. 编码：h264，h265（hevc），MP3\r
\r`,cover:""}},{route:"/know/框架/8mediapipe",meta:{title:"mediapipe",date:"2023-08-23 11:04:28",tag:[],description:`\r
<img src="./img/hand-landmarks.png"/\r
\r
<img src="./img/body-landmarks.png"/>\r
\r
<img src="./img/f`,cover:""}},{route:"/know/计算机基础/1计算机网络",meta:{title:"1.计算机网络",date:"2023-05-22 19:23:47",tag:[],description:`\r
[[toc]]\r
\r
 1.1 常识\r
\r
 1.1.1 osi  |  tcp/ip\r
\r
\`\`\`js\r
--1.OSI七层协议物理层、数据链路层、网络层（IP）、传输层（TCP和UDP）、会话`,cover:""}},{route:"/python/flask/开始",meta:{title:"",date:"2023-05-22 20:27:56",tag:[],cover:""}},{route:"/supper/3D数字孪生/1webGL基础",meta:{title:"1.webGL知识",date:"2023-05-22 20:27:56",tag:[],description:`\r
[[toc]]\r
\r
 1.1 canvas基础(看我gitee' chart demo)\r
\r
\r
\r
canvas元素本身并没有绘制能力的，它仅仅是图形的容器，而getContext()方法返`,cover:""}},{route:"/supper/3D数字孪生/2three世泊大屏实操",meta:{title:"2.2.3d监控多方法实操",date:"2023-05-22 20:27:56",tag:[],description:`\r
[[toc]]\r
\r
 2.1 实操\r
\r
\r
\r
讲一下我three.js的关于机器人监控的实现思路，相应的知识点列在下面，想实现可以去到threejs的官网： https://threejs.`,cover:""}},{route:"/supper/3D数字孪生/3ar的使用",meta:{title:"3.ar的使用",date:"2023-05-22 20:27:56",tag:[],description:`\r
[[toc]]\r
\r
 3.1 ar.js helloworld\r
\r
\r
\r
\r
\r
\r
\r
  3.1.1 训练我们的图像识别符\r
\r
\r
\r
\`\`\`\r
跟踪图像中的特征点并使用它们，它用于估`,cover:""}},{route:"/supper/3D数字孪生/5threejs的性能优化",meta:{title:"5.threejs的性能优化",date:"2023-05-22 20:27:56",tag:[],description:`\r
[[toc]]\r
\r
 5.1 基本的性能优化\r
\r
\`\`\`js\r
1.beforedestory的时候模型dispose\r
2.模型减顶点减面，使用法线贴图\r
3.将一个场景的渲染结果作为另一个`,cover:""}},{route:"/supper/supper/1代码优化",meta:{title:"1.代码优化",date:"2023-05-23 21:20:09",tag:[],description:`[[toc]]\r
 1.0小知识：\r
\r
知识点1：78 && 56 && 2  返回值是 2\r
\r
56 || 45 返回值是56 \r
\r
\r
\r
知识点3：为一个类型，状态用1 2 3 来进行表示`,cover:""}},{route:"/supper/supper/2实用算法",meta:{title:"7.实用算法",date:"2023-05-23 21:20:09",tag:[],description:`\r
\r
\r
 7.1  快排\r
\r
\r
\r
\r
\r
 7.2 sku \r
\r
用来判断库存的东西，基础知识要知道。具体的可以看：https://gitee.com/Electrolux/front-u`,cover:""}},{route:"/supper/supper/3性能优化",meta:{title:"3.性能优化",date:"2023-05-23 21:20:09",tag:[],description:`\r
[[toc]]\r
\r
 3.0  性能监视器\r
\r
可以通过chrome的performance来进行性能的监测\r
\r
- 蓝色：网络通信和HTML解析\r
- 黄色：JavaScript执行\r
-`,cover:""}},{route:"/supper/supper/4UI设计",meta:{title:"6.UI设计模式",date:"2023-05-23 21:20:09",tag:[],description:`\r
\r
\r
 6.素材 资源\r
\r
\`\`\`js\r
http://navnav.co/checkbox-radio   //优秀的东西。是codepen的代码片段  右下角可以share出去\r
\`\`\`\r`,cover:""}},{route:"/supper/个人封装/1个人发包模板",meta:{title:"1.个人发包模板",date:"2023-05-22 20:27:56",tag:[],description:`\r
\r
[[toc]]\r
\r
\r
 1.1 CommonTableButtonFixed\r
\r
npm install frontelementpackage\r
\r
\`\`\`vue\r
右侧固定模板\r
n`,cover:""}},{route:"/supper/前端库/1vueify",meta:{title:"1.vueify",date:"2023-05-22 20:27:56",tag:[],description:`\r
[[toc]]\r
\r
 1.1 plugin下面新建\r
\r
\`\`\`js\r
import '@fortawesome/fontawesome-free/css/all.css'\r
import 'm`,cover:""}},{route:"/supper/前端库/2anime.js",meta:{title:"2.anime.js",date:"2023-05-22 20:27:56",tag:[],description:`[[toc]]\r
 2.1 anime的引入\r
\r
plugin下面\r
\r
\`\`\`js\r
import anime from 'animejs';\r
\r
\r
//挂载全局变量到animeJS\r
con`,cover:""}},{route:"/supper/前端库/3js-cookie",meta:{title:"3.js-cookie",date:"2023-05-22 20:27:56",tag:[],description:`[[toc]]\r
 3.1 js-cookie的基础使用\r
\r
npm install js-cookie\r
\r
 js-cookie是一个简单的，轻量级的处理cookies的js  这玩意我一般和v`,cover:""}},{route:"/supper/功能/10数据大屏自适应",meta:{title:"10.数据大屏自适应",date:"2023-08-23 11:04:28",tag:[],description:`\r
[[toc]]\r
\r
大屏等在不同尺寸下面的自适应的解决。百度大屏等，他们都采用了css3的缩放\`transform: scale(X)\`属性。相比较别的乱七八糟的方法。我们只要监听浏览器的窗口大`,cover:""}},{route:"/supper/功能/11拖拽元素",meta:{title:"11.拖拽元素的实现",date:"2023-05-22 20:27:56",tag:[],description:`\r
\r
\r
首先这个元素最好是float或者是绝对布局。然后\r
\r
 11.1  css中\r
\r
添加\r
\r
\`\`\`css\r
[draggable] {\r
      cursor: move;\r
}`,cover:""}},{route:"/supper/功能/12vue-element-admin",meta:{title:"5.vue-element-admin",date:"2023-05-22 20:27:56",tag:[],description:`\r
[[toc]]\r
\r
\`\`\`\r
一些知识：\r
@vue/cli 5.0.4\r
用ngrok的时设置在webpack.config.js设置\r
disableHostCheck: true,我们就可`,cover:""}},{route:"/supper/功能/1小功能汇总",meta:{title:"1.小功能汇总(1)",date:"2023-05-22 20:27:56",tag:[],description:`\r
[[toc]]\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
 1.5 样式穿透(弹窗)\r
\r
\r
\r
\`\`\`js\r
1.一般来说elementui的样式穿透的话，我们可以类似于下面\r
\r
::v`,cover:""}},{route:"/supper/功能/2小功能汇总",meta:{title:"2.小功能汇总(2)",date:"2023-05-22 20:27:56",tag:[],description:`[[toc]]\r
 2.1 左边固定，右边滚动\r
\r
\`\`\`\r
 position: fixed;  \r
    overflow: auto; \r
    float: left;\r
\`\`\`\r
\r
`,cover:""}},{route:"/supper/功能/3小功能汇总",meta:{title:"3.小功能汇总(3)",date:"2023-05-22 20:27:56",tag:[],description:`\r
\r
\r
[[toc]]\r
\r
\r
\r
\r
\r
 3.1 项目中base64图片\r
\r
可以使用base64进行图片的转化。一个文件会变得很臃肿。并且似乎不能减小项目体积。我用了之后500kb 。吐`,cover:""}},{route:"/supper/功能/4ffmpeg-rmtp监控",meta:{title:"4.ffmpeg-rmtp监控",date:"2023-05-22 20:27:56",tag:[],description:`[[toc]]\r
\r
\r
后端使用node.js，使用 rtsp-relay进行推流\r
\r
前端使用的是vue，需要引入jsmpeg.js，如果实在引入不成功，可以使用iframe+html网页的方式`,cover:""}},{route:"/supper/功能/5微信支付",meta:{title:"5.微信支付",date:"2023-05-22 20:27:56",tag:[],description:`[[toc]]\r
微信h5支付：可以在手机网站内直接支付，为移动支付方式，简单快捷。\r
\r
jsapi支付：仅可以在微信浏览器内发起支付，比如公众号内的网页和微信小程序，略微麻烦\r
\r
\r
\r
最大的`,cover:""}},{route:"/supper/功能/6v-model组件封装",meta:{title:"6.v-model组件封装",date:"2023-05-22 20:27:56",tag:[],description:`[[toc]]\r
 6.1 input封装\r
\r
父组件：正常使用\r
\r
\`\`\`vue\r
html中\r
 <inputComponent v-model="Vmodel"\r
\r
\r
import in`,cover:""}},{route:"/supper/功能/7深度学习实操",meta:{title:"7.深度学习实操",date:"2023-05-22 20:27:56",tag:[],description:`\r
[[toc]]\r
\r
请移步：https://gitee.com/Electrolux/tensorflow-vue 审核不过也是醉了\r`,cover:""}},{route:"/supper/功能/8前端上传下载",meta:{title:"8.前端上传下载",date:"2023-05-22 20:27:56",tag:[],description:`\r
[[toc]]\r
\r
有3种方法进行下载：\r
\r
第一种是 ：href-利用 链接（a标签之类的）-限制超级大-能解析的就解析，因此像是image之类的会直接打开-并且还有同源限制\r
\r
第二种：`,cover:""}},{route:"/supper/功能/9监控停留时间",meta:{title:"9.监控停留时间",date:"2023-05-22 20:27:56",tag:[],description:`\r
[[toc]]\r
\r
\`\`\`js\r
//见gitee 28.1 监控用户页面停留时间（监控load 和 pagehide pagechange | 太简单于是没有封装）\r
\r
// 28.2监控用`,cover:""}},{route:"/supper/工具基础/10脚手架",meta:{title:"10.脚手架实操",date:"2023-05-22 20:27:56",tag:[],description:`\r
\r
\r
两者混用\r
\r
\`\`\`\r
inquirer是一个控制台交互式js库\r
npm install inquirer@7\r
commander是一个完整的nodejs命令行解决方案 比 inqu`,cover:""}},{route:"/supper/工具基础/11figma",meta:{title:"11.figma",date:"2023-05-22 20:27:56",tag:[],description:`\r
[[toc]]\r
\r
\r
\r
https://www.figma.com/community\r
\r
 11.1 基本操作\r
\r
\`\`\`js\r
--0.\r
团队-项目-设计文件-页面（page）-f`,cover:""}},{route:"/supper/工具基础/12nvm",meta:{title:"12.nvm|nrm|rimraf",date:"2023-05-30 15:02:16",tag:[],description:`\r
[[toc]]\r
\r
 12.1 nvm\r
\r
 12.1.1 nvm下载 \r
\r
\r
\r
https://github.com/coreybutler/nvm-windows/releases `,cover:""}},{route:"/supper/工具基础/13mac的使用",meta:{title:"苹果",date:"2023-05-30 15:02:16",tag:[],description:`\r
\r
\r
 1.1 快捷键\r
\r
\`\`\`js\r
1. command  比较万能.\r
2. command+space 可以调出控制行\r
3. ctrl + control + q 快速锁屏\r
\`\``,cover:""}},{route:"/supper/工具基础/14.vscode",meta:{title:"14.vscode的snippet",date:"2023-08-23 11:04:28",tag:[],description:`\r
快速 生成 \r
\r
https://snippet-generator.app/\r
\r
 14.1 基本格式\r
\r
\`\`\`json\r
{\r
	"选择填入": {\r
		"prefix": "rea`,cover:""}},{route:"/supper/工具基础/16.代码高亮",meta:{title:"16.代码高亮",date:"2023-08-23 11:04:28",tag:[],description:`\r
\r
\r
需要注意的有代码高亮\r
\r
 16.1 代码示例\r
\r
\`\`\`html\r
\r
<!DOCTYPE html\r
<html lang="en">\r
\r
<head>\r
    <meta c`,cover:""}},{route:"/supper/工具基础/1Sourcetree的使用",meta:{title:"1.Sourcetree的使用",date:"2023-05-22 20:27:56",tag:[],description:`\r
[[toc]]\r
\r
Rescan’，则会扫描仓库的改变。\r
\r
‘Stage Changed’（stage，暂存区），将未缓存的改动加入缓存。   ==  git add\r
\r
当多人合作的时候`,cover:""}},{route:"/supper/工具基础/2用gitee连接ssh,linux服务器",meta:{title:"1.linux环境",date:"2023-08-23 11:04:28",tag:[],description:`yum -y install policycoreutils openssh-server openssh-clients postfix\r
\r
yum install  policycoreutil`,cover:""}},{route:"/supper/工具基础/3github图床",meta:{title:"3.github图床",date:"2023-05-22 20:27:56",tag:[],description:`\r
[[toc]]\r
\r
分享一下图床的使用方法\r
\r
 3.1 github 上推+分支\r
\r
\r
\r
\`\`\`\r
git add . \r
\r
git commit -m "图床的第一版"\r
\r
gi`,cover:"https://data.jsdelivr.com/v1/package/gh/yilaikesi/frontImgPackage/badge)](https://www.jsdelivr.com/package/gh/yilaikesi/frontImgPackage"}},{route:"/supper/工具基础/4git的基本使用",meta:{title:"4.git的基本使用",date:"2023-10-18 08:57:34",tag:[],description:`\r
[[toc]]\r
\r
 4.1  基础知识\r
\r
下载去到下面下载\r
\r
\`\`\`\r
https://git-scm.com/downloads\r
git pull 拉取远程仓库\r
git add `,cover:""}},{route:"/supper/工具基础/5ps切图",meta:{title:"5.ps|figma基操",date:"2023-05-22 20:27:56",tag:[],description:`\r
[[toc]]\r
\r
 5.1 ps切片\r
\r
\`\`\`\r
切图\r
前端切图就是ps中用切片工具把icon图标框出来，然后导出为web旧版格式，导出所有用户切片。\r
记得选一下预设。不然会导出gif`,cover:""}},{route:"/supper/工具基础/6codepen",meta:{title:"6.codepen",date:"2023-05-22 20:27:56",tag:[],description:`\r
[[toc]]\r
\r
https://codepen.io/\r
\r
\`\`\`js\r
//1.登陆注册之后。我们 先了解一些他的基本概念 \r
collection是类似于代码集合\r
pin类似于常用的`,cover:""}},{route:"/supper/工具基础/7Icon实操",meta:{title:"7.icon实操|svg原理",date:"2023-05-22 20:27:56",tag:[],description:`\r
\r
\r
\r
\r
[[toc]]\r
\r
注意一下，我们一般的流程是把我们的图标添加到购物车中，然后添加到项目去。接着去色（这一步是为了我们能够使用不同颜色的图标）\r
\r
\r
\r
 7.0 基础原理\r`,cover:""}},{route:"/supper/工具基础/8GraphQl",meta:{title:"8.GraphQl",date:"2023-05-22 20:27:56",tag:[],description:`\r
[[toc]]\r
\r
前端操作数据库\r
\r
 8.1 简介\r
\r
\`\`\`js\r
优点\r
1.可以指定想要的数据\r
2.GraphQL 更快\r
3.强类型\r
4.合并请求\r
缺点\r
1.http无法`,cover:""}},{route:"/supper/工具基础/9快速mock",meta:{title:"9.快速mock数据",date:"2023-05-22 20:27:56",tag:[],description:`\r
[[toc]]\r
\r
 1.安装mock-server\r
\r
\`\`\`shell\r
npm i @shymean/mock-server -g\r
\`\`\`\r
\r
\r
\r
 2._mock.js\r
\r
`,cover:""}},{route:"/supper/工程化/1工程化基础",meta:{title:"1.前端工程化基础",date:"2023-05-22 20:27:56",tag:[],description:`\r
[[toc]]\r
\r
 1.1 主要开源协议\r
\r
开源协议：MIT（谁都能用），\r
\r
GPL（linux，必须开源），\r
\r
apache（安卓，必须带一个商标声明）`,cover:""}},{route:"/supper/工程化/3关于一些自动化脚本",meta:{title:"3.关于一些自动化脚本(githook&&)",date:"2023-05-22 20:27:56",tag:[],description:`\r
[[toc]]\r
\r
 3.1 code.sh\r
\r
\`\`\`sh\r
 git 移动目录示例 这样子可以构建\r
 cp code.sh ./.workflow   mkdir 文件夹\r
npm ru`,cover:""}},{route:"/supper/工程化/4docker 部署实操",meta:{title:"4.docker部署实操",date:"2023-05-22 20:27:56",tag:[],description:`\r
[[toc]]\r
\r
\r
 4.1 初始化（nginx，node）\r
\r
\`\`\`js\r
//dockerfile文件通过nginx启动vue\r
docker pull nginx// 获取ngin`,cover:""}},{route:"/supper/工程化/5给包打补丁",meta:{title:"5.给npm包打补丁",date:"2023-05-22 20:27:56",tag:[],description:`\r
[[toc]]\r
\r
先安装依赖\r
\r
\`\`\`\r
npm install patch-package@6.4.7 --save-dev\r
\`\`\`\r
\r
然后我们修改文件并且运行下面命令\r
\r
\`\``,cover:""}},{route:"/supper/工程化/6gitee流水线",meta:{title:"6.giteego流水线",date:"2023-05-22 20:27:56",tag:[],description:`\r
\r
\r
重要：这玩意连接电脑或者打印日志不能通过设置ssh连接。必须要设置主机组。日志组的设置在linux上要sudo，在window上面要powershell\r
\r
https://gitee.`,cover:""}},{route:"/supper/工程化/7性能优化和调试",meta:{title:"7.性能优化和调试",date:"2023-05-22 20:27:56",tag:[],description:`\r
[[toc]]\r
\r
 7.1 chrome\r
\r
这里面可以干的事情太多了\r
\r
 7.1.1  Element里面\r
\r
\`\`\`js\r
//1.styles 里面可以直接调整样式\r
//2.c`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/accepts/HISTORY",meta:{title:"",date:"2023-10-23 20:50:09",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/accepts/README",meta:{title:"accepts",date:"2023-10-23 20:50:09",tag:[],description:`[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Nod`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/acorn/README",meta:{title:"Acorn",date:"2023-10-23 20:50:09",tag:[],description:`  
Author funding status: 
A tiny, fast JavaScript parser, written completely in JavaScript.
 Commun`,cover:"https://travis-ci.org/ternjs/acorn.svg?branch=master)](https://travis-ci.org/ternjs/acorn"}},{route:"/know/know/12.运维/behind/node_modules/acorn-globals/README",meta:{title:"acorn-globals",date:"2023-10-23 20:50:09",tag:[],description:`Detect global variables in JavaScript using acorn
 Installation
    npm install acorn-globals
 Usage`,cover:"https://img.shields.io/travis/ForbesLindesay/acorn-globals/master.svg)](https://travis-ci.org/ForbesLindesay/acorn-globals"}},{route:"/know/know/12.运维/behind/node_modules/align-text/README",meta:{title:"align-text[![NPMversion](https://badge.fury.io/js/align-text.svg)](http://badge.fury.io/js/align-text)[![BuildStatus](https://travis-ci.org/jonschlinkert/align-text.svg)](https://travis-ci.org/jonschlinkert/align-text)",date:"2023-10-23 20:50:09",tag:[],description:`
Examples
Align text values in an array:
\`\`\`js
align([1, 2, 3, 100]);
//=> ['  1', '  2', '  3', '10`,cover:"https://badge.fury.io/js/align-text.svg)](http://badge.fury.io/js/align-text)  [![Build Status](https://travis-ci.org/jonschlinkert/align-text.svg)](https://travis-ci.org/jonschlinkert/align-text"}},{route:"/know/know/12.运维/behind/node_modules/amdefine/README",meta:{title:"amdefine",date:"2023-10-23 20:50:09",tag:[],description:`A module that can be used to implement AMD's define() in Node. This allows you
to code to the AMD AP`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/append-field/README",meta:{title:"`append-field`",date:"2023-10-23 20:50:09",tag:[],description:`A W3C HTML JSON forms spec compliant
field appender (for lack of a better name). Useful for people i`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/array-flatten/README",meta:{title:"ArrayFlatten",date:"2023-10-23 20:50:09",tag:[],description:`[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build sta`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/asap/LICENSE",meta:{title:"",date:"2023-10-23 20:50:09",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/asap/README",meta:{title:"ASAP",date:"2023-10-23 20:50:09",tag:[],description:"This `asap` CommonJS package contains a single `asap` module that\nexports a single `asap` function t",cover:""}},{route:"/know/know/12.运维/behind/node_modules/basic-auth/HISTORY",meta:{title:"",date:"2023-10-23 20:50:09",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/basic-auth/README",meta:{title:"basic-auth",date:"2023-10-23 20:50:09",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js V`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/body-parser/HISTORY",meta:{title:"",date:"2023-10-23 20:50:10",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/body-parser/README",meta:{title:"body-parser",date:"2023-10-23 20:50:10",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Sta`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/body-parser/SECURITY",meta:{title:"SecurityPoliciesandProcedures",date:"2023-10-23 20:50:10",tag:[],description:` Reporting a Bug
The Express team and community take all security bugs seriously. Thank you
for impr`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/buffer-from/readme",meta:{title:"BufferFrom",date:"2023-10-23 20:50:10",tag:[],description:"A ponyfill for `Buffer.from`, uses native implementation if available.\n Installation\n```sh\nnpm insta",cover:""}},{route:"/know/know/12.运维/behind/node_modules/busboy/README",meta:{title:"Description",date:"2023-10-23 20:50:10",tag:[],description:`A node.js module for parsing incoming HTML form data.
Changes (breaking or otherwise) in v1.0.0 can `,cover:""}},{route:"/know/know/12.运维/behind/node_modules/bytes/History",meta:{title:"",date:"2023-10-23 20:50:10",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/bytes/Readme",meta:{title:"Bytesutility",date:"2023-10-23 20:50:10",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Sta`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/call-bind/CHANGELOG",meta:{title:"Changelog",date:"2023-10-23 20:50:10",tag:[],description:`All notable changes to this project will be documented in this file.
The format is based on Keep a C`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/call-bind/README",meta:{title:"call-bind",date:"2023-10-23 20:50:10",tag:[],description:"Robustly `.call.bind()` a function.",cover:""}},{route:"/know/know/12.运维/behind/node_modules/camelcase/readme",meta:{title:"camelcase[![BuildStatus](https://travis-ci.org/sindresorhus/camelcase.svg?branch=master)](https://travis-ci.org/sindresorhus/camelcase)",date:"2023-10-23 20:50:10",tag:[],description:"\n Install\n```sh\n$ npm install --save camelcase\n```\n Usage\n```js\nvar camelCase = require('camelcase')",cover:"https://travis-ci.org/sindresorhus/camelcase.svg?branch=master)](https://travis-ci.org/sindresorhus/camelcase"}},{route:"/know/know/12.运维/behind/node_modules/center-align/README",meta:{title:"center-align[![NPMversion](https://badge.fury.io/js/center-align.svg)](http://badge.fury.io/js/center-align)",date:"2023-10-23 20:50:10",tag:[],description:"\nInstall with npm\n```sh\n$ npm i center-align --save\n```\n Usage\n```js\nvar centerAlign = require('cent",cover:"https://badge.fury.io/js/center-align.svg)](http://badge.fury.io/js/center-align"}},{route:"/know/know/12.运维/behind/node_modules/character-parser/README",meta:{title:"character-parser",date:"2023-10-23 20:50:10",tag:[],description:`\r
Parse JavaScript one character at a time to look for snippets in Templates.  This is not a validat`,cover:"https://img.shields.io/travis/ForbesLindesay/character-parser/master.svg)](https://travis-ci.org/ForbesLindesay/character-parser"}},{route:"/know/know/12.运维/behind/node_modules/clean-css/History",meta:{title:"",date:"2023-10-23 20:50:10",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/clean-css/README",meta:{title:"",date:"2023-10-23 20:50:10",tag:[],cover:"https://img.shields.io/npm/v/clean-css.svg?style=flat)](https://www.npmjs.com/package/clean-css"}},{route:"/know/know/12.运维/behind/node_modules/cliui/README",meta:{title:"cliui",date:"2023-10-23 20:50:10",tag:[],description:"easily create complex multi-column command-line-interfaces.\n Example\n```js\nvar ui = require('cliui')",cover:"https://travis-ci.org/bcoe/cliui.png)](https://travis-ci.org/bcoe/cliui"}},{route:"/know/know/12.运维/behind/node_modules/co-body/History",meta:{title:"",date:"2023-10-23 20:50:10",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/co-body/Readme",meta:{title:"co-body",date:"2023-10-23 20:50:10",tag:[],description:`[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][c`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/commander/History",meta:{title:"",date:"2023-10-23 20:50:10",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/commander/Readme",meta:{title:"Commander.js",date:"2023-10-23 20:50:10",tag:[],description:` 
  The complete solution for node.js command-line interfaces, inspired by Ruby's commander.  
  API`,cover:"https://api.travis-ci.org/tj/commander.js.svg)](http://travis-ci.org/tj/commander.js"}},{route:"/know/know/12.运维/behind/node_modules/concat-stream/readme",meta:{title:"concat-stream",date:"2023-10-23 20:50:11",tag:[],description:"Writable stream that concatenates all the data from a stream and calls a callback with the result. U",cover:"https://travis-ci.org/maxogden/concat-stream.svg?branch=master)](https://travis-ci.org/maxogden/concat-stream"}},{route:"/know/know/12.运维/behind/node_modules/constantinople/README",meta:{title:"constantinople",date:"2023-10-23 20:50:11",tag:[],description:"Determine whether a JavaScript expression evaluates to a constant (using acorn).  Here it is assumed",cover:"https://img.shields.io/travis/ForbesLindesay/constantinople/master.svg)](https://travis-ci.org/ForbesLindesay/constantinople"}},{route:"/know/know/12.运维/behind/node_modules/content-disposition/HISTORY",meta:{title:"",date:"2023-10-23 20:50:11",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/content-disposition/README",meta:{title:"content-disposition",date:"2023-10-23 20:50:11",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js V`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/content-type/HISTORY",meta:{title:"",date:"2023-10-23 20:50:11",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/content-type/README",meta:{title:"content-type",date:"2023-10-23 20:50:11",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js V`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/cookie/HISTORY",meta:{title:"",date:"2023-10-23 20:50:11",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/cookie/README",meta:{title:"cookie",date:"2023-10-23 20:50:11",tag:[],description:`[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Nod`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/cookie-parser/HISTORY",meta:{title:"",date:"2023-10-23 20:50:11",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/cookie-parser/README",meta:{title:"cookie-parser",date:"2023-10-23 20:50:11",tag:[],description:`[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Bui`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/cookie-signature/History",meta:{title:"",date:"2023-10-23 20:50:11",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/cookie-signature/Readme",meta:{title:"cookie-signature",date:"2023-10-23 20:50:11",tag:[],description:`  Sign and unsign cookies.
 Example
\`\`\`js
var cookie = require('cookie-signature');
var val = cookie`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/core-util-is/README",meta:{title:"core-util-is",date:"2023-10-23 20:50:11",tag:[],description:"The `util.is*` functions introduced in Node v0.12.",cover:""}},{route:"/know/know/12.运维/behind/node_modules/css/History",meta:{title:"",date:"2023-10-23 20:50:11",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/css/Readme",meta:{title:"css",date:"2023-10-23 20:50:11",tag:[],description:`  CSS parser / stringifier using css-parse and css-stringify.
 Installation
    $ npm install css
 E`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/css-parse/History",meta:{title:"",date:"2023-10-23 20:50:11",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/css-parse/Readme",meta:{title:"css-parse",date:"2023-10-23 20:50:11",tag:[],description:`  CSS parser.
 Example
js:
\`\`\`js
var parse = require('css-parse')
parse('tobi { name: "tobi" }')
\`\`\``,cover:""}},{route:"/know/know/12.运维/behind/node_modules/css-stringify/History",meta:{title:"",date:"2023-10-23 20:50:11",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/css-stringify/Readme",meta:{title:"css-stringify",date:"2023-10-23 20:50:12",tag:[],description:`  CSS compiler using the AST provided by css-parse.
 Performance
  Formats 15,000 lines of CSS (2mb)`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/debug/CHANGELOG",meta:{title:"",date:"2023-10-23 20:50:12",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/debug/README",meta:{title:"debug",date:"2023-10-23 20:50:12",tag:[],description:`      
A tiny node.js debugging utility modelled after node core's debugging technique.
Discussion a`,cover:"https://travis-ci.org/visionmedia/debug.svg?branch=master)](https://travis-ci.org/visionmedia/debug)  [![Coverage Status](https://coveralls.io/repos/github/visionmedia/debug/badge.svg?branch=master)](https://coveralls.io/github/visionmedia/debug?branch=master)  [![Slack](https://visionmedia-community-slackin.now.sh/badge.svg)](https://visionmedia-community-slackin.now.sh/) [![OpenCollective](https://opencollective.com/debug/backers/badge.svg)](#backers"}},{route:"/know/know/12.运维/behind/node_modules/decamelize/readme",meta:{title:"decamelize[![BuildStatus](https://travis-ci.org/sindresorhus/decamelize.svg?branch=master)](https://travis-ci.org/sindresorhus/decamelize)",date:"2023-10-23 20:50:12",tag:[],description:"\n> Example: `unicornRainbow` → `unicorn_rainbow`\n Install\n```\n$ npm install --save decamelize\n```\n U",cover:"https://travis-ci.org/sindresorhus/decamelize.svg?branch=master)](https://travis-ci.org/sindresorhus/decamelize"}},{route:"/know/know/12.运维/behind/node_modules/depd/History",meta:{title:"",date:"2023-10-23 20:50:12",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/depd/Readme",meta:{title:"depd",date:"2023-10-23 20:50:12",tag:[],description:`[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Nod`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/destroy/README",meta:{title:"Destroy",date:"2023-10-23 20:50:12",tag:[],description:`[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][c`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/ee-first/README",meta:{title:"EEFirst",date:"2023-10-23 20:50:12",tag:[],description:`[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][c`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/encodeurl/HISTORY",meta:{title:"",date:"2023-10-23 20:50:12",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/encodeurl/README",meta:{title:"encodeurl",date:"2023-10-23 20:50:12",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js V`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/escape-html/Readme",meta:{title:"escape-html",date:"2023-10-23 20:50:12",tag:[],description:`  Escape string for use in HTML
 Example
\`\`\`js
var escape = require('escape-html');
var html = escap`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/etag/HISTORY",meta:{title:"",date:"2023-10-23 20:50:12",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/etag/README",meta:{title:"etag",date:"2023-10-23 20:50:12",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js V`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/express/History",meta:{title:"",date:"2023-10-23 20:50:12",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/express/Readme",meta:{title:"",date:"2023-10-23 20:50:12",tag:[],cover:"https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/"}},{route:"/know/know/12.运维/behind/node_modules/finalhandler/HISTORY",meta:{title:"",date:"2023-10-23 20:50:12",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/finalhandler/README",meta:{title:"finalhandler",date:"2023-10-23 20:50:12",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js V`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/forwarded/HISTORY",meta:{title:"",date:"2023-10-23 20:50:12",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/forwarded/README",meta:{title:"forwarded",date:"2023-10-23 20:50:13",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js V`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/fresh/HISTORY",meta:{title:"",date:"2023-10-23 20:50:13",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/fresh/README",meta:{title:"fresh",date:"2023-10-23 20:50:13",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js V`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/function-bind/README",meta:{title:"function-bind",date:"2023-10-23 20:50:13",tag:[],description:`<!--
    [![build status][travis-svg]][travis-url]
    [![NPM version][npm-badge-svg]][npm-url]
    `,cover:""}},{route:"/know/know/12.运维/behind/node_modules/get-intrinsic/CHANGELOG",meta:{title:"Changelog",date:"2023-10-23 20:50:13",tag:[],description:`All notable changes to this project will be documented in this file.
The format is based on Keep a C`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/get-intrinsic/README",meta:{title:"get-intrinsic<sup>[![VersionBadge][npm-version-svg]][package-url]</sup>",date:"2023-10-23 20:50:13",tag:[],description:`[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![depende`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/graceful-readlink/README",meta:{title:"graceful-readlink",date:"2023-10-23 20:50:13",tag:[],description:" Usage\n```js\nvar readlinkSync = require('graceful-readlink').readlinkSync;\nconsole.log(readlinkSync(",cover:"https://www.npmjs.org/package/graceful-readlink"}},{route:"/know/know/12.运维/behind/node_modules/has/README",meta:{title:"has",date:"2023-10-23 20:50:13",tag:[],description:"\n Installation\n```sh\nnpm install --save has\n```\n Usage\n```js\nvar has = require('has');\nhas({}, 'hasO",cover:""}},{route:"/know/know/12.运维/behind/node_modules/has-symbols/CHANGELOG",meta:{title:"Changelog",date:"2023-10-23 20:50:13",tag:[],description:`All notable changes to this project will be documented in this file.
The format is based on Keep a C`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/has-symbols/README",meta:{title:"has-symbols<sup>[![VersionBadge][2]][1]</sup>",date:"2023-10-23 20:50:13",tag:[],description:`[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![depende`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/http-errors/HISTORY",meta:{title:"",date:"2023-10-23 20:50:13",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/http-errors/README",meta:{title:"http-errors",date:"2023-10-23 20:50:13",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js V`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/iconv-lite/Changelog",meta:{title:"0.4.24/2018-08-22",date:"2023-10-23 20:50:13",tag:[],description:`  * Added MIK encoding (196, by @Ivan-Kalatchev)
 0.4.23 / 2018-05-07
  * Fix deprecation warning in`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/iconv-lite/README",meta:{title:"",date:"2023-10-23 20:50:13",tag:[],cover:"https://travis-ci.org/ashtuchkin/iconv-lite.svg?branch=master)](https://travis-ci.org/ashtuchkin/iconv-lite"}},{route:"/know/know/12.运维/behind/node_modules/inflation/HISTORY",meta:{title:"",date:"2023-10-23 20:50:13",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/inflation/README",meta:{title:"inflation",date:"2023-10-23 20:50:13",tag:[],description:"Automatically unzip an HTTP stream.\n API\n```js\nvar inflate = require('inflation')\n```\n inflate(strea",cover:"https://badge.fury.io/js/inflation.svg)](http://badge.fury.io/js/inflation"}},{route:"/know/know/12.运维/behind/node_modules/inherits/README",meta:{title:"",date:"2023-10-23 20:50:13",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/ipaddr.js/README",meta:{title:"ipaddr.js—anIPv6andIPv4addressmanipulationlibrary[![BuildStatus](https://travis-ci.org/whitequark/ipaddr.js.svg)](https://travis-ci.org/whitequark/ipaddr.js)",date:"2023-10-23 20:50:13",tag:[],description:`ipaddr.js is a small (1.9K minified and gzipped) library for manipulating
IP addresses in JavaScript`,cover:"https://travis-ci.org/whitequark/ipaddr.js.svg)](https://travis-ci.org/whitequark/ipaddr.js"}},{route:"/know/know/12.运维/behind/node_modules/is-buffer/README",meta:{title:"is-buffer[![travis][travis-image]][travis-url][![npm][npm-image]][npm-url][![downloads][downloads-image]][downloads-url][![javascriptstyleguide][standard-image]][standard-url]",date:"2023-10-23 20:50:13",tag:[],description:`[travis-image]: https://img.shields.io/travis/feross/is-buffer/master.svg
[travis-url]: https://trav`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/is-promise/readme",meta:{title:"is-promise",date:"2023-10-23 20:50:13",tag:[],description:`  Test whether an object looks like a promises-a+ promise
 
 
 
 Installation
    $ npm install is-p`,cover:"https://img.shields.io/travis/then/is-promise/master.svg)](https://travis-ci.org/then/is-promise"}},{route:"/know/know/12.运维/behind/node_modules/isarray/README",meta:{title:"isarray",date:"2023-10-23 20:50:14",tag:[],description:"`ArrayisArray` for older browsers.\n[\n](https://ci.testling.com/juliangruber/isarray)\n Usage\n```js\nva",cover:"https://secure.travis-ci.org/juliangruber/isarray.svg)](http://travis-ci.org/juliangruber/isarray"}},{route:"/know/know/12.运维/behind/node_modules/jade/History",meta:{title:"",date:"2023-10-23 20:50:14",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/jade/README",meta:{title:"[![Jade-NodeTemplateEngine](http://garthdb.com/img/jade_branding/jade-01.svg)](http://jade-lang.com/)",date:"2023-10-23 20:50:14",tag:[],description:` Jade is a high performance template engine heavily influenced by Haml
 and implemented with JavaScr`,cover:"https://img.shields.io/travis/jadejs/jade/master.svg?style=flat)](https://travis-ci.org/jadejs/jade"}},{route:"/know/know/12.运维/behind/node_modules/jade/Readme_zh-cn",meta:{title:"Jade-模板引擎",date:"2023-10-23 20:50:14",tag:[],description:`Jade 是一个高性能的模板引擎，它深受 Haml 影响，它是用 JavaScript 实现的, 并且可以供 Node 使用.
翻译: 草依山 等
 声明
从 Jade \`v0.31.0\` 开始放弃了`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/jstransformer/README",meta:{title:"",date:"2023-10-23 20:50:14",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/kind-of/README",meta:{title:"kind-of[![NPMversion](https://img.shields.io/npm/v/kind-of.svg?style=flat)](https://www.npmjs.com/package/kind-of)[![NPMmonthlydownloads](https://img.shields.io/npm/dm/kind-of.svg?style=flat)](https://npmjs.org/package/kind-of)[![NPMtotaldownloads](https://img.shields.io/npm/dt/kind-of.svg?style=flat)](https://npmjs.org/package/kind-of)[![LinuxBuildStatus](https://img.shields.io/travis/jonschlinkert/kind-of.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/kind-of)",date:"2023-10-23 20:50:14",tag:[],description:"\n Install\nInstall with npm:\n```sh\n$ npm install --save kind-of\n```\n Install\nInstall with bower\n```sh",cover:"https://img.shields.io/npm/v/kind-of.svg?style=flat)](https://www.npmjs.com/package/kind-of) [![NPM monthly downloads](https://img.shields.io/npm/dm/kind-of.svg?style=flat)](https://npmjs.org/package/kind-of) [![NPM total downloads](https://img.shields.io/npm/dt/kind-of.svg?style=flat)](https://npmjs.org/package/kind-of) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/kind-of.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/kind-of"}},{route:"/know/know/12.运维/behind/node_modules/lazy-cache/README",meta:{title:"lazy-cache[![NPMversion](https://img.shields.io/npm/v/lazy-cache.svg?style=flat)](https://www.npmjs.com/package/lazy-cache)[![NPMdownloads](https://img.shields.io/npm/dm/lazy-cache.svg?style=flat)](https://npmjs.org/package/lazy-cache)[![BuildStatus](https://img.shields.io/travis/jonschlinkert/lazy-cache.svg?style=flat)](https://travis-ci.org/jonschlinkert/lazy-cache)",date:"2023-10-23 20:50:14",tag:[],description:"\n Install\nInstall with npm:\n```sh\n$ npm install lazy-cache --save\n```\nIf you use webpack and are exp",cover:"https://img.shields.io/npm/v/lazy-cache.svg?style=flat)](https://www.npmjs.com/package/lazy-cache) [![NPM downloads](https://img.shields.io/npm/dm/lazy-cache.svg?style=flat)](https://npmjs.org/package/lazy-cache) [![Build Status](https://img.shields.io/travis/jonschlinkert/lazy-cache.svg?style=flat)](https://travis-ci.org/jonschlinkert/lazy-cache"}},{route:"/know/know/12.运维/behind/node_modules/longest/README",meta:{title:"longest[![NPMversion](https://badge.fury.io/js/longest.svg)](http://badge.fury.io/js/longest)[![BuildStatus](https://travis-ci.org/jonschlinkert/longest.svg)](https://travis-ci.org/jonschlinkert/longest)",date:"2023-10-23 20:50:14",tag:[],description:"\n Install with npm\n```bash\nnpm i longest --save\n```\n Install with bower\n```bash\nbower install longes",cover:"https://badge.fury.io/js/longest.svg)](http://badge.fury.io/js/longest)  [![Build Status](https://travis-ci.org/jonschlinkert/longest.svg)](https://travis-ci.org/jonschlinkert/longest"}},{route:"/know/know/12.运维/behind/node_modules/media-typer/HISTORY",meta:{title:"",date:"2023-10-23 20:50:14",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/media-typer/README",meta:{title:"media-typer",date:"2023-10-23 20:50:14",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js V`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/merge-descriptors/HISTORY",meta:{title:"",date:"2023-10-23 20:50:14",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/merge-descriptors/README",meta:{title:"MergeDescriptors",date:"2023-10-23 20:50:14",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Sta`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/methods/HISTORY",meta:{title:"",date:"2023-10-23 20:50:14",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/methods/README",meta:{title:"Methods",date:"2023-10-23 20:50:14",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js V`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/mime/README",meta:{title:"mime",date:"2023-10-23 20:50:14",tag:[],description:`Comprehensive MIME type mapping API based on mime-db module.
 Install
Install with npm:
    npm inst`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/mime-db/HISTORY",meta:{title:"",date:"2023-10-23 20:50:14",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/mime-db/README",meta:{title:"mime-db",date:"2023-10-23 20:50:14",tag:[],description:`[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Nod`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/mime-types/HISTORY",meta:{title:"",date:"2023-10-23 20:50:14",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/mime-types/README",meta:{title:"mime-types",date:"2023-10-23 20:50:15",tag:[],description:`[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Nod`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/minimist/CHANGELOG",meta:{title:"Changelog",date:"2023-10-23 20:50:15",tag:[],description:`All notable changes to this project will be documented in this file.
The format is based on Keep a C`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/minimist/README",meta:{title:"minimist<sup>[![VersionBadge][npm-version-svg]][package-url]</sup>",date:"2023-10-23 20:50:15",tag:[],description:`[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/morgan/HISTORY",meta:{title:"",date:"2023-10-23 20:50:15",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/morgan/README",meta:{title:"morgan",date:"2023-10-23 20:50:15",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Sta`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/ms/license",meta:{title:"",date:"2023-10-23 20:50:15",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/ms/readme",meta:{title:"ms",date:"2023-10-23 20:50:15",tag:[],description:"Use this package to easily convert various time formats to milliseconds.\n Examples\n```js\nms('2 days'",cover:"https://travis-ci.org/zeit/ms.svg?branch=master)](https://travis-ci.org/zeit/ms"}},{route:"/know/know/12.运维/behind/node_modules/multer/README",meta:{title:"Multer[![BuildStatus](https://travis-ci.org/expressjs/multer.svg?branch=master)](https://travis-ci.org/expressjs/multer)[![NPMversion](https://badge.fury.io/js/multer.svg)](https://badge.fury.io/js/multer)[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)",date:"2023-10-23 20:50:15",tag:[],description:"Multer is a node.js middleware for handling `multipart/form-data`, which is primarily used for uploa",cover:"https://travis-ci.org/expressjs/multer.svg?branch=master)](https://travis-ci.org/expressjs/multer) [![NPM version](https://badge.fury.io/js/multer.svg)](https://badge.fury.io/js/multer) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard"}},{route:"/know/know/12.运维/behind/node_modules/negotiator/HISTORY",meta:{title:"",date:"2023-10-23 20:50:15",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/negotiator/README",meta:{title:"negotiator",date:"2023-10-23 20:50:15",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js V`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/object-assign/readme",meta:{title:"object-assign[![BuildStatus](https://travis-ci.org/sindresorhus/object-assign.svg?branch=master)](https://travis-ci.org/sindresorhus/object-assign)",date:"2023-10-23 20:50:15",tag:[],description:`
 Use the built-in
Node.js 4 and up, as well as every evergreen browser (Chrome, Edge, Firefox, Oper`,cover:"https://travis-ci.org/sindresorhus/object-assign.svg?branch=master)](https://travis-ci.org/sindresorhus/object-assign"}},{route:"/know/know/12.运维/behind/node_modules/object-inspect/CHANGELOG",meta:{title:"Changelog",date:"2023-10-23 20:50:15",tag:[],description:`All notable changes to this project will be documented in this file.
The format is based on Keep a C`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/on-finished/HISTORY",meta:{title:"",date:"2023-10-23 20:50:15",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/on-finished/README",meta:{title:"on-finished",date:"2023-10-23 20:50:15",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js V`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/on-headers/HISTORY",meta:{title:"",date:"2023-10-23 20:50:15",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/on-headers/README",meta:{title:"on-headers",date:"2023-10-23 20:50:15",tag:[],description:`[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Nod`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/parseurl/HISTORY",meta:{title:"",date:"2023-10-23 20:50:15",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/parseurl/README",meta:{title:"parseurl",date:"2023-10-23 20:50:15",tag:[],description:`[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Nod`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/path-to-regexp/History",meta:{title:"",date:"2023-10-23 20:50:15",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/path-to-regexp/Readme",meta:{title:"Path-to-RegExp",date:"2023-10-23 20:50:15",tag:[],description:"Turn an Express-style path string such as `/user/:name` into a regular expression.\nNote: This is a l",cover:""}},{route:"/know/know/12.运维/behind/node_modules/process-nextick-args/license",meta:{title:"Copyright(c)2015CalvinMetcalf",date:"2023-10-23 20:50:15",tag:[],description:`Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and as`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/process-nextick-args/readme",meta:{title:"",date:"2023-10-23 20:50:15",tag:[],cover:"https://travis-ci.org/calvinmetcalf/process-nextick-args.svg?branch=master)](https://travis-ci.org/calvinmetcalf/process-nextick-args"}},{route:"/know/know/12.运维/behind/node_modules/promise/Readme",meta:{title:"promise",date:"2023-10-23 20:50:16",tag:[],description:"This is a simple implementation of Promises.  It is a super set of ES6 Promises designed to have rea",cover:"https://img.shields.io/travis/then/promise/master.svg)](https://travis-ci.org/then/promise"}},{route:"/know/know/12.运维/behind/node_modules/proxy-addr/HISTORY",meta:{title:"",date:"2023-10-23 20:50:16",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/proxy-addr/README",meta:{title:"proxy-addr",date:"2023-10-23 20:50:16",tag:[],description:`[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Nod`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/qs/CHANGELOG",meta:{title:"",date:"2023-10-23 20:50:16",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/qs/README",meta:{title:"qs<sup>[![VersionBadge][2]][1]</sup>",date:"2023-10-23 20:50:16",tag:[],description:`[![Build Status][3]][4]
[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][li`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/range-parser/HISTORY",meta:{title:"",date:"2023-10-23 20:50:16",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/range-parser/README",meta:{title:"range-parser",date:"2023-10-23 20:50:16",tag:[],description:`[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Nod`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/raw-body/HISTORY",meta:{title:"",date:"2023-10-23 20:50:16",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/raw-body/README",meta:{title:"raw-body",date:"2023-10-23 20:50:16",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js V`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/raw-body/SECURITY",meta:{title:"SecurityPoliciesandProcedures",date:"2023-10-23 20:50:16",tag:[],description:" Reporting a Bug\nThe `raw-body` team and community take all security bugs seriously. Thank you\nfor i",cover:""}},{route:"/know/know/12.运维/behind/node_modules/readable-stream/CONTRIBUTING",meta:{title:"Developer'sCertificateofOrigin1.1",date:"2023-10-23 20:50:16",tag:[],description:`By making a contribution to this project, I certify that:
* (a) The contribution was created in whol`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/readable-stream/GOVERNANCE",meta:{title:"",date:"2023-10-23 20:50:16",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/readable-stream/README",meta:{title:"readable-stream",date:"2023-10-23 20:50:16",tag:[],description:"*Node-core v8.11.1 streams for userland* \n```bash\nnpm install --save readable-stream\n```\n*Node-core ",cover:"https://travis-ci.org/nodejs/readable-stream.svg?branch=master)](https://travis-ci.org/nodejs/readable-stream"}},{route:"/know/know/12.运维/behind/node_modules/repeat-string/README",meta:{title:"repeat-string[![NPMversion](https://img.shields.io/npm/v/repeat-string.svg?style=flat)](https://www.npmjs.com/package/repeat-string)[![NPMmonthlydownloads](https://img.shields.io/npm/dm/repeat-string.svg?style=flat)](https://npmjs.org/package/repeat-string)[![NPMtotaldownloads](https://img.shields.io/npm/dt/repeat-string.svg?style=flat)](https://npmjs.org/package/repeat-string)[![LinuxBuildStatus](https://img.shields.io/travis/jonschlinkert/repeat-string.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/repeat-string)",date:"2023-10-23 20:50:16",tag:[],description:`
 Install
Install with npm:
\`\`\`sh
$ npm install --save repeat-string
\`\`\`
 Usage
 repeat
Repeat the g`,cover:"https://img.shields.io/npm/v/repeat-string.svg?style=flat)](https://www.npmjs.com/package/repeat-string) [![NPM monthly downloads](https://img.shields.io/npm/dm/repeat-string.svg?style=flat)](https://npmjs.org/package/repeat-string)  [![NPM total downloads](https://img.shields.io/npm/dt/repeat-string.svg?style=flat)](https://npmjs.org/package/repeat-string) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/repeat-string.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/repeat-string"}},{route:"/know/know/12.运维/behind/node_modules/right-align/README",meta:{title:"right-align[![NPMversion](https://badge.fury.io/js/right-align.svg)](http://badge.fury.io/js/right-align)",date:"2023-10-23 20:50:16",tag:[],description:"\nInstall with npm\n```sh\n$ npm i right-align --save\n```\n Usage\n```js\nvar rightAlign = require('right-",cover:"https://badge.fury.io/js/right-align.svg)](http://badge.fury.io/js/right-align"}},{route:"/know/know/12.运维/behind/node_modules/safe-buffer/README",meta:{title:"safe-buffer[![travis][travis-image]][travis-url][![npm][npm-image]][npm-url][![downloads][downloads-image]][downloads-url][![javascriptstyleguide][standard-image]][standard-url]",date:"2023-10-23 20:50:16",tag:[],description:`[travis-image]: https://img.shields.io/travis/feross/safe-buffer/master.svg
[travis-url]: https://tr`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/safer-buffer/Porting-Buffer",meta:{title:"PortingtotheBuffer.from/Buffer.allocAPI",date:"2023-10-23 20:50:16",tag:[],description:`<a id="overview"
 Overview
- Variant 1: Drop support for Node.js ≤ 4.4.x and 5.0.0 — 5.9.x. (*recomm`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/safer-buffer/Readme",meta:{title:"safer-buffer[![travis][travis-image]][travis-url][![npm][npm-image]][npm-url][![javascriptstyleguide][standard-image]][standard-url][![SecurityResponsibleDisclosure][secuirty-image]][secuirty-url]",date:"2023-10-23 20:50:16",tag:[],description:`[travis-image]: https://travis-ci.org/ChALkeR/safer-buffer.svg?branch=master
[travis-url]: https://t`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/send/HISTORY",meta:{title:"",date:"2023-10-23 20:50:16",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/send/README",meta:{title:"send",date:"2023-10-23 20:50:16",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Linux Bui`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/serve-static/HISTORY",meta:{title:"",date:"2023-10-23 20:50:16",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/serve-static/README",meta:{title:"serve-static",date:"2023-10-23 20:50:17",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Linux Bui`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/setprototypeof/README",meta:{title:"Polyfillfor`Object.setPrototypeOf`",date:"2023-10-23 20:50:17",tag:[],description:"A simple cross platform implementation to set the prototype of an instianted object.  Supports all m",cover:""}},{route:"/know/know/12.运维/behind/node_modules/side-channel/CHANGELOG",meta:{title:"Changelog",date:"2023-10-23 20:50:17",tag:[],description:`All notable changes to this project will be documented in this file.
The format is based on Keep a C`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/side-channel/README",meta:{title:"side-channel",date:"2023-10-23 20:50:17",tag:[],description:"Store information about any JS value in a side channel. Uses WeakMap if available.",cover:""}},{route:"/know/know/12.运维/behind/node_modules/source-map/README",meta:{title:"SourceMap",date:"2023-10-23 20:50:17",tag:[],description:`This is a library to generate and consume the source map format
[described here][format].
This libra`,cover:"https://travis-ci.org/mozilla/source-map.png?branch=master)](https://travis-ci.org/mozilla/source-map"}},{route:"/know/know/12.运维/behind/node_modules/statuses/HISTORY",meta:{title:"",date:"2023-10-23 20:50:17",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/statuses/README",meta:{title:"Statuses",date:"2023-10-23 20:50:17",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js V`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/streamsearch/README",meta:{title:"",date:"2023-10-23 20:50:17",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/string_decoder/README",meta:{title:"string_decoder",date:"2023-10-23 20:50:17",tag:[],description:"*Node-core v8.9.4 string_decoder for userland*\n```bash\nnpm install --save string_decoder\n```\n*Node-c",cover:"https://nodei.co/npm/string_decoder.png?downloads=true&downloadRank=true)](https://nodei.co/npm/string_decoder/"}},{route:"/know/know/12.运维/behind/node_modules/toidentifier/HISTORY",meta:{title:"",date:"2023-10-23 20:50:17",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/toidentifier/README",meta:{title:"toidentifier",date:"2023-10-23 20:50:17",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Sta`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/transformers/history",meta:{title:"",date:"2023-10-23 20:50:17",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/transformers/README",meta:{title:"transformers",date:"2023-10-23 20:50:17",tag:[],description:`\r
  String/Data transformations for use in templating libraries, static site generators and web fram`,cover:"https://travis-ci.org/ForbesLindesay/transformers.png?branch=master)](https://travis-ci.org/ForbesLindesay/transformers"}},{route:"/know/know/12.运维/behind/node_modules/type-is/HISTORY",meta:{title:"",date:"2023-10-23 20:50:17",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/type-is/README",meta:{title:"type-is",date:"2023-10-23 20:50:17",tag:[],description:`[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Nod`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/uglify-js/README",meta:{title:"",date:"2023-10-23 20:50:17",tag:[],cover:"https://travis-ci.org/mishoo/UglifyJS2.svg)](https://travis-ci.org/mishoo/UglifyJS2"}},{route:"/know/know/12.运维/behind/node_modules/uglify-to-browserify/README",meta:{title:"uglify-to-browserify",date:"2023-10-23 20:50:17",tag:[],description:`\r
A transform to make UglifyJS work in browserify.\r
\r
\r
\r
\r
\r
 Installation\r
\r
    npm install uglif`,cover:"https://travis-ci.org/ForbesLindesay/uglify-to-browserify.png?branch=master)](https://travis-ci.org/ForbesLindesay/uglify-to-browserify"}},{route:"/know/know/12.运维/behind/node_modules/unpipe/HISTORY",meta:{title:"",date:"2023-10-23 20:50:17",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/unpipe/README",meta:{title:"unpipe",date:"2023-10-23 20:50:17",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js V`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/util-deprecate/History",meta:{title:"",date:"2023-10-23 20:50:17",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/util-deprecate/README",meta:{title:"",date:"2023-10-23 20:50:17",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/utils-merge/README",meta:{title:"utils-merge",date:"2023-10-23 20:50:17",tag:[],description:"Merges the properties from a source object into a destination object.\n Install\n```bash\n$ npm install",cover:"https://img.shields.io/npm/v/utils-merge.svg?label=version)](https://www.npmjs.com/package/utils-merge"}},{route:"/know/know/12.运维/behind/node_modules/vary/HISTORY",meta:{title:"",date:"2023-10-23 20:50:17",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/vary/README",meta:{title:"vary",date:"2023-10-23 20:50:17",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js V`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/void-elements/README",meta:{title:"",date:"2023-10-23 20:50:18",tag:[],cover:"https://img.shields.io/travis/jadejs/void-elements/master.svg?style=flat)](https://travis-ci.org/jadejs/void-elements"}},{route:"/know/know/12.运维/behind/node_modules/window-size/README",meta:{title:"window-size[![NPMversion](https://badge.fury.io/js/window-size.png)](http://badge.fury.io/js/window-size)",date:"2023-10-23 20:50:18",tag:[],description:`\r
\r
\r
 Install\r
\r
 npm\r
\r
\`\`\`bash\r
npm i window-size --save\r
\`\`\`\r
\r
\`\`\`javascript\r
var size = requir`,cover:"https://badge.fury.io/js/window-size.png)](http://badge.fury.io/js/window-size"}},{route:"/know/know/12.运维/behind/node_modules/with/README",meta:{title:"with",date:"2023-10-23 20:50:18",tag:[],description:"Compile time `with` for strict mode JavaScript\n Installation\n    $ npm install with\n Usage\n```js\nvar",cover:"https://secure.travis-ci.org/ForbesLindesay/with.png)](http://travis-ci.org/ForbesLindesay/with"}},{route:"/know/know/12.运维/behind/node_modules/xtend/README",meta:{title:"xtend",date:"2023-10-23 20:50:18",tag:[],description:`[![browser support][3]][4]
Extend like a boss
xtend is a basic utility library which allows you to e`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/yargs/CHANGELOG",meta:{title:"",date:"2023-10-23 20:50:18",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/yargs/README",meta:{title:"",date:"2023-10-23 20:50:18",tag:[],cover:"https://travis-ci.org/bcoe/yargs.png)](https://travis-ci.org/bcoe/yargs"}},{route:"/know/know/12.运维/behind/node_modules/body-parser/node_modules/depd/History",meta:{title:"",date:"2023-10-23 20:50:18",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/body-parser/node_modules/depd/Readme",meta:{title:"depd",date:"2023-10-23 20:50:18",tag:[],description:`[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Nod`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/body-parser/node_modules/destroy/README",meta:{title:"destroy",date:"2023-10-23 20:50:18",tag:[],description:`[![NPM version][npm-image]][npm-url]
[![Build Status][github-actions-ci-image]][github-actions-ci-ur`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/body-parser/node_modules/http-errors/HISTORY",meta:{title:"",date:"2023-10-23 20:50:18",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/body-parser/node_modules/http-errors/README",meta:{title:"http-errors",date:"2023-10-23 20:50:18",tag:[],description:`[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][node-url]
[![No`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/body-parser/node_modules/inherits/README",meta:{title:"",date:"2023-10-23 20:50:18",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/body-parser/node_modules/on-finished/HISTORY",meta:{title:"",date:"2023-10-23 20:50:18",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/body-parser/node_modules/on-finished/README",meta:{title:"on-finished",date:"2023-10-23 20:50:18",tag:[],description:`[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Nod`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/body-parser/node_modules/qs/CHANGELOG",meta:{title:"",date:"2023-10-23 20:50:18",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/body-parser/node_modules/qs/LICENSE",meta:{title:"",date:"2023-10-23 20:50:18",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/body-parser/node_modules/qs/README",meta:{title:"qs<sup>[![VersionBadge][npm-version-svg]][package-url]</sup>",date:"2023-10-23 20:50:18",tag:[],description:`[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![depende`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/body-parser/node_modules/setprototypeof/README",meta:{title:"Polyfillfor`Object.setPrototypeOf`",date:"2023-10-23 20:50:18",tag:[],description:"A simple cross platform implementation to set the prototype of an instianted object.  Supports all m",cover:"https://img.shields.io/npm/v/setprototypeof.svg)](https://npmjs.org/package/setprototypeof"}},{route:"/know/know/12.运维/behind/node_modules/body-parser/node_modules/statuses/HISTORY",meta:{title:"",date:"2023-10-23 20:50:18",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/body-parser/node_modules/statuses/README",meta:{title:"statuses",date:"2023-10-23 20:50:18",tag:[],description:`[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Nod`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/clean-css/node_modules/commander/History",meta:{title:"",date:"2023-10-23 20:50:18",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/clean-css/node_modules/commander/Readme",meta:{title:"Commander.js",date:"2023-10-23 20:50:18",tag:[],description:`  The complete solution for node.js command-line interfaces, inspired by Ruby's commander.  
  API d`,cover:"https://api.travis-ci.org/tj/commander.js.svg)](http://travis-ci.org/tj/commander.js"}},{route:"/know/know/12.运维/behind/node_modules/express/node_modules/body-parser/HISTORY",meta:{title:"",date:"2023-10-23 20:50:19",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/express/node_modules/body-parser/README",meta:{title:"body-parser",date:"2023-10-23 20:50:19",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Sta`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/express/node_modules/bytes/History",meta:{title:"",date:"2023-10-23 20:50:19",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/express/node_modules/bytes/Readme",meta:{title:"Bytesutility",date:"2023-10-23 20:50:19",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Sta`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/express/node_modules/cookie/HISTORY",meta:{title:"",date:"2023-10-23 20:50:19",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/express/node_modules/cookie/README",meta:{title:"cookie",date:"2023-10-23 20:50:19",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js V`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/express/node_modules/iconv-lite/Changelog",meta:{title:"0.4.23/2018-05-07",date:"2023-10-23 20:50:19",tag:[],description:"  * Fix deprecation warning in Node v10 due to the last usage of `new Buffer` (185, by @felixbuenema",cover:""}},{route:"/know/know/12.运维/behind/node_modules/express/node_modules/iconv-lite/README",meta:{title:"",date:"2023-10-23 20:50:19",tag:[],cover:"https://travis-ci.org/ashtuchkin/iconv-lite.svg?branch=master)](https://travis-ci.org/ashtuchkin/iconv-lite"}},{route:"/know/know/12.运维/behind/node_modules/express/node_modules/raw-body/HISTORY",meta:{title:"",date:"2023-10-23 20:50:19",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/express/node_modules/raw-body/README",meta:{title:"raw-body",date:"2023-10-23 20:50:19",tag:[],description:`[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js V`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/raw-body/node_modules/depd/History",meta:{title:"",date:"2023-10-23 20:50:19",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/raw-body/node_modules/depd/Readme",meta:{title:"depd",date:"2023-10-23 20:50:19",tag:[],description:`[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Nod`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/raw-body/node_modules/http-errors/HISTORY",meta:{title:"",date:"2023-10-23 20:50:19",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/raw-body/node_modules/http-errors/README",meta:{title:"http-errors",date:"2023-10-23 20:50:19",tag:[],description:`[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][node-url]
[![No`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/raw-body/node_modules/inherits/README",meta:{title:"",date:"2023-10-23 20:50:19",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/raw-body/node_modules/setprototypeof/README",meta:{title:"Polyfillfor`Object.setPrototypeOf`",date:"2023-10-23 20:50:19",tag:[],description:"A simple cross platform implementation to set the prototype of an instianted object.  Supports all m",cover:"https://img.shields.io/npm/v/setprototypeof.svg)](https://npmjs.org/package/setprototypeof"}},{route:"/know/know/12.运维/behind/node_modules/raw-body/node_modules/statuses/HISTORY",meta:{title:"",date:"2023-10-23 20:50:19",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/raw-body/node_modules/statuses/README",meta:{title:"statuses",date:"2023-10-23 20:50:19",tag:[],description:`[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Nod`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/readable-stream/doc/wg-meetings/2015-01-30",meta:{title:"streamsWGMeeting2015-01-30",date:"2023-10-23 20:50:19",tag:[],description:` Links
* Google Hangouts Video: http://www.youtube.com/watch?v=I9nDOSGfwZg
* GitHub Issue: https://g`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/transformers/node_modules/is-promise/readme",meta:{title:"is-promise",date:"2023-10-23 20:50:19",tag:[],description:`\r
  Test whether an object looks like a promises-a+ promise\r
\r
 \r
 \r
 \r
\r
 Installation\r
\r
    $ npm`,cover:"https://img.shields.io/travis/then/is-promise/master.svg)](https://travis-ci.org/then/is-promise"}},{route:"/know/know/12.运维/behind/node_modules/transformers/node_modules/promise/Readme",meta:{title:"promise",date:"2023-10-23 20:50:19",tag:[],description:`\r
  This a bare bones Promises/A+ implementation.\r
\r
  It is designed to get the basics spot on corr`,cover:"https://travis-ci.org/then/promise.png)](https://travis-ci.org/then/promise"}},{route:"/know/know/12.运维/behind/node_modules/transformers/node_modules/source-map/CHANGELOG",meta:{title:"ChangeLog",date:"2023-10-23 20:50:20",tag:[],description:" 0.1.43\n* Performance improvements for `SourceMapGenerator` and `SourceNode`. See issue\n  148 for so",cover:""}},{route:"/know/know/12.运维/behind/node_modules/transformers/node_modules/source-map/README",meta:{title:"SourceMap",date:"2023-10-23 20:50:20",tag:[],description:`This is a library to generate and consume the source map format
[described here][format].
This libra`,cover:"https://travis-ci.org/mozilla/source-map.png?branch=master)](https://travis-ci.org/mozilla/source-map"}},{route:"/know/know/12.运维/behind/node_modules/transformers/node_modules/uglify-js/README",meta:{title:"",date:"2023-10-23 20:50:20",tag:[],cover:""}},{route:"/know/know/12.运维/behind/node_modules/uglify-js/node_modules/source-map/CHANGELOG",meta:{title:"ChangeLog",date:"2023-10-23 20:50:20",tag:[],description:` 0.5.6
* Fix for regression when people were using numbers as names in source maps. See
  236.
 0.5.`,cover:""}},{route:"/know/know/12.运维/behind/node_modules/uglify-js/node_modules/source-map/README",meta:{title:"SourceMap",date:"2023-10-23 20:50:20",tag:[],description:`This is a library to generate and consume the source map format
[described here][format].
[format]: `,cover:"https://travis-ci.org/mozilla/source-map.png?branch=master)](https://travis-ci.org/mozilla/source-map"}},{route:"/know/know/12.运维/behind/node_modules/with/node_modules/acorn/README",meta:{title:"Acorn",date:"2023-10-23 20:50:20",tag:[],description:`  
Author funding status: 
A tiny, fast JavaScript parser, written completely in JavaScript.
 Instal`,cover:"https://travis-ci.org/marijnh/acorn.svg?branch=master)](https://travis-ci.org/marijnh/acorn"}}]),Cr={customSearchQuery:function(e){return e.replace(/[\u4e00-\u9fa5]/g," $& ").replace(/\s+/g," ").trim()}};function Nr(n,e="yyyy-MM-dd hh:mm:ss"){n instanceof Date||(n=new Date(n));const t={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,`${n.getFullYear()}`.substr(4-RegExp.$1.length)));for(const o in t)new RegExp(`(${o})`).test(e)&&(e=e.replace(RegExp.$1,RegExp.$1.length===1?t[o]:`00${t[o]}`.substr(`${t[o]}`.length)));return e}const Lr={},Ir={width:"594",height:"112",viewBox:"0 0 594 112",fill:"none",xmlns:"http://www.w3.org/2000/svg"},jr=un('<path d="M147.8 111.2H164V77.5998H164.6C164.6 77.5998 170.6 87.1998 183.2 87.1998C197 87.1998 209.6 74.5998 209.6 56.5998C209.6 38.5998 197 25.9998 183.2 25.9998C170.6 25.9998 164.6 35.5998 164.6 35.5998H164V27.1998H147.8V111.2ZM178.4 72.1998C170 72.1998 163.4 65.5998 163.4 56.5998C163.4 47.5998 170 40.9998 178.4 40.9998C186.8 40.9998 193.4 47.5998 193.4 56.5998C193.4 65.5998 186.8 72.1998 178.4 72.1998Z" fill="black"></path><path d="M230.628 87.1998C242.028 87.1998 248.028 78.7998 248.028 78.7998H248.628V85.9998C252.228 85.9998 264.828 85.9998 264.828 85.9998V49.3998C264.828 36.1998 254.628 25.9998 239.628 25.9998C224.028 25.9998 215.628 37.3998 215.628 37.3998L225.228 46.9998C225.228 46.9998 230.028 40.3998 238.428 40.3998C244.428 40.3998 248.028 43.9998 248.628 48.1998L230.028 51.5598C219.228 53.4798 212.628 60.7998 212.628 70.3998C212.628 79.9998 219.828 87.1998 230.628 87.1998ZM236.028 73.9998C231.228 73.9998 228.828 71.5998 228.828 67.9998C228.828 64.9998 231.228 62.7198 235.428 61.9998L248.628 59.5998V60.7998C248.628 68.5998 243.228 73.9998 236.028 73.9998Z" fill="black"></path><path d="M299.033 111.2C317.633 111.2 330.833 97.9998 330.833 79.9998V27.1998H314.633V35.5998H314.033C314.033 35.5998 308.633 25.9998 296.033 25.9998C282.833 25.9998 270.833 37.9998 270.833 55.3998C270.833 72.7998 282.833 84.7998 296.033 84.7998C308.633 84.7998 314.033 75.1998 314.033 75.1998H314.633V79.9998C314.633 89.5998 308.033 96.1998 299.033 96.1998C289.433 96.1998 283.433 88.9998 283.433 88.9998L273.233 99.1998C273.233 99.1998 281.633 111.2 299.033 111.2ZM300.833 69.7998C293.033 69.7998 287.033 63.7998 287.033 55.3998C287.033 46.9998 293.033 40.9998 300.833 40.9998C308.633 40.9998 314.633 46.9998 314.633 55.3998C314.633 63.7998 308.633 69.7998 300.833 69.7998Z" fill="black"></path><path d="M367.986 87.1998C384.186 87.1998 393.186 77.5998 393.186 77.5998L384.786 66.1998C384.786 66.1998 379.386 72.7998 369.186 72.7998C360.186 72.7998 355.386 67.9998 353.586 62.5998H396.186C396.186 62.5998 396.786 59.5998 396.786 55.3998C396.786 39.1998 383.586 25.9998 367.386 25.9998C350.586 25.9998 336.786 39.7998 336.786 56.5998C336.786 73.3998 350.586 87.1998 367.986 87.1998ZM353.586 50.5998C355.386 45.1998 360.186 40.3998 366.786 40.3998C373.386 40.3998 378.186 45.1998 379.986 50.5998H353.586Z" fill="black"></path><path d="M406.423 85.9998H422.624V43.3998H444.224V85.9998H460.423V28.3998H422.624V24.7998C422.624 19.3998 425.624 16.3998 430.423 16.3998C433.423 16.3998 435.823 17.5998 435.823 17.5998V2.5998C435.823 2.5998 431.624 0.799805 426.224 0.799805C414.224 0.799805 406.423 8.59981 406.423 22.3998V28.3998H397.423V43.3998H406.423V85.9998ZM452.263 19.3998C457.423 19.3998 461.624 15.1998 461.624 10.3998C461.624 5.59981 457.424 1.3998 452.384 1.3998C447.224 1.3998 443.023 5.59981 443.023 10.3998C443.023 15.1998 447.223 19.3998 452.263 19.3998Z" fill="black"></path><path d="M470.652 85.9998H486.852V54.7998C486.852 46.9998 492.252 41.5998 499.452 41.5998C506.052 41.5998 510.252 45.7998 510.252 52.9998V85.9998H526.452V50.5998C526.452 35.5998 516.852 25.9998 504.852 25.9998C493.452 25.9998 487.452 35.5998 487.452 35.5998H486.852V27.1998H470.652V85.9998Z" fill="black"></path><path d="M557.819 87.1998C570.419 87.1998 576.419 77.5998 576.419 77.5998H577.019V85.9998H593.219V1.9998H577.019V35.5998H576.419C576.419 35.5998 570.419 25.9998 557.819 25.9998C544.019 25.9998 531.419 38.5998 531.419 56.5998C531.419 74.5998 544.019 87.1998 557.819 87.1998ZM562.619 72.1998C554.219 72.1998 547.619 65.5998 547.619 56.5998C547.619 47.5998 554.219 40.9998 562.619 40.9998C571.019 40.9998 577.619 47.5998 577.619 56.5998C577.619 65.5998 571.019 72.1998 562.619 72.1998Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M60 96.9999C93.1371 96.9999 120 81.8416 120 63.1428V50.8311H115.91C107.182 38.2198 85.4398 29.2856 60 29.2856C34.5602 29.2856 12.8183 38.2198 4.09026 50.8311H0V63.1428C0 81.8416 26.8629 96.9999 60 96.9999Z" fill="black"></path><path d="M116 52C116 59.317 110.727 66.7404 100.454 72.5615C90.3014 78.3149 76.0069 82 60 82C43.9931 82 29.6986 78.3149 19.5456 72.5615C9.2731 66.7404 4 59.317 4 52C4 44.6831 9.2731 37.2596 19.5456 31.4385C29.6986 25.6851 43.9931 22 60 22C76.0069 22 90.3014 25.6851 100.454 31.4385C110.727 37.2596 116 44.6831 116 52Z" fill="white" stroke="black" stroke-width="8"></path><path d="M57.8864 72.0605L87.2817 41.837C88.6253 40.4556 87.43 38.1599 85.5278 38.4684L26.0819 48.1083C23.9864 48.4481 23.794 51.3882 25.8273 51.9982L46.7151 58.2645C47.2181 58.4154 47.6415 58.7581 47.894 59.2185L54.6991 71.6277C55.3457 72.8069 56.9487 73.0246 57.8864 72.0605Z" fill="black"></path><ellipse cx="58" cy="53.5" rx="7" ry="4.5" fill="white"></ellipse>',11),Rr=[jr];function Dr(n,e){return l(),p("svg",Ir,Rr)}const Tr=P(Lr,[["render",Dr]]),Vt=n=>(oe("data-v-e09e7552"),n=n(),se(),n),Hr={class:"blog-search","data-pagefind-ignore":"all"},Or=Vt(()=>u("svg",{width:"14",height:"14",viewBox:"0 0 20 20"},[u("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),Br={key:0,class:"search-tip"},zr={key:1,class:"metaKey"},Fr={class:"search-dialog"},Gr={class:"link"},Ur={class:"title"},qr={key:0,class:"date"},Yr=["innerHTML"],Wr={class:"command-palette-logo"},Kr={href:"https://github.com/cloudcannon/pagefind",target:"_blank",rel:"noopener noreferrer"},Jr=Vt(()=>u("span",{class:"command-palette-Label"},"Search by",-1)),Qr=Vt(()=>u("ul",{class:"command-palette-commands"},[u("li",null,[u("kbd",{class:"command-palette-commands-key"},[u("svg",{width:"15",height:"15","aria-label":"Enter key",role:"img"},[u("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[u("path",{d:"M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"})])])]),u("span",{class:"command-palette-Label"},"to select")]),u("li",null,[u("kbd",{class:"command-palette-commands-key"},[u("svg",{width:"15",height:"15","aria-label":"Arrow down",role:"img"},[u("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[u("path",{d:"M7.5 3.5v8M10.5 8.5l-3 3-3-3"})])])]),u("kbd",{class:"command-palette-commands-key"},[u("svg",{width:"15",height:"15","aria-label":"Arrow up",role:"img"},[u("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[u("path",{d:"M7.5 11.5v-8M10.5 6.5l-3-3-3 3"})])])]),u("span",{class:"command-palette-Label"},"to navigate")]),u("li",null,[u("kbd",{class:"command-palette-commands-key"},[u("svg",{width:"15",height:"15","aria-label":"Escape key",role:"img"},[u("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[u("path",{d:"M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"})])])]),u("span",{class:"command-palette-Label"},"to close")])],-1)),Zr=b({__name:"Search",setup(n){Qn(V=>({dba016e0:c.value}));const e=Cr,{localeIndex:t}=at(),o=E(()=>{var V;return{...e,...((V=e==null?void 0:e.locales)==null?void 0:V[t.value])||{}}}),s=E(()=>{var V;return((V=o.value)==null?void 0:V.showDate)??!0}),r=xr(),a=E(()=>r.width.value<760),c=E(()=>a.value?0:1),i=E(()=>{var V;return(V=o.value)!=null&&V.heading?o.value.heading.replace(/\{\{searchResult\}\}/,g.value.length):`Total: ${g.value.length} search results.`}),m=A("");ce(()=>{m.value=/(Mac|iPhone|iPod|iPad)/i.test(navigator==null?void 0:navigator.platform)?"⌘":"Ctrl"});const v=A(!1),f=A(""),k=$r({passive:!1,onEventFired(V){V.ctrlKey&&V.key==="k"&&V.type==="keydown"&&V.preventDefault()}}),M=k["Meta+K"],C=k["Ctrl+K"],w=k.Escape;Y(M,V=>{V&&(v.value=!0)}),Y(C,V=>{V&&(v.value=!0)}),Y(w,V=>{V&&(v.value=!1)});const g=A([]),j=()=>{if(!f.value){g.value=[];return}g.value=st.value.filter(V=>`${V.meta.description}${V.meta.title}`.includes(f.value)).map(V=>{var I,q;return{...V,meta:{...V.meta,description:((q=(I=V.meta)==null?void 0:I.description)==null?void 0:q.replace(new RegExp(`(${f.value})`,"g"),"<mark>$1</mark>"))||""}}}),g.value.sort((V,I)=>+new Date(I.meta.date)-+new Date(V.meta.date))},H=E(()=>{var V;return((V=o.value)==null?void 0:V.resultOptimization)??!0});Y(()=>f.value,async()=>{var V,I,q;if(!((V=window==null?void 0:window.__pagefind__)!=null&&V.search))j();else{const F=typeof o.value.customSearchQuery=="function"?o.value.customSearchQuery(f.value):f.value;await((q=(I=window==null?void 0:window.__pagefind__)==null?void 0:I.search)==null?void 0:q.call(I,F).then(async ye=>{const Le=await Promise.all(ye.results.map(J=>J.data()));let Me=[];H.value?st.value.forEach(J=>{const ue=Le.find(ge=>ge.url.startsWith(Se(J.route)));ue&&Me.push({...J,meta:{...J.meta,description:ue.excerpt}})}):Me=Le.map(J=>{var ge;const ue=st.value.find(tt=>J.url.startsWith(Se(tt.route)));return ue?{...ue,route:J.url,meta:{...ue.meta,description:J.excerpt}}:{route:J.url,meta:{title:J.meta.title,description:J.excerpt,date:(ge=J==null?void 0:J.meta)==null?void 0:ge.date}}}),g.value=Me.filter(o.value.filter??(()=>!0))}))}ie(()=>{document.querySelectorAll('div[aria-disabled="true"]').forEach(F=>{F.setAttribute("aria-disabled","false")})})});const R=V=>{V.target===V.currentTarget&&(v.value=!1)};Y(()=>v.value,V=>{var I;V?ie(()=>{var q;(q=document.querySelector("div[command-dialog-mask]"))==null||q.addEventListener("click",R)}):(I=document.querySelector("div[command-dialog-mask]"))==null||I.removeEventListener("click",R)});const G=A(999),W=A(0),ee=E(()=>{const I=W.value%Math.ceil(g.value.length/G.value)*G.value;return g.value.slice(I,I+G.value)}),Z=Zn(),te=xe(),K=V=>{v.value=!1,te.path!==V.value&&Z.go(V.value)},{lang:be}=at(),ae=E(()=>o.value.langReload??!0);return Y(()=>be.value,()=>{ae.value&&window.location.reload()}),(V,I)=>{var q;return l(),p("div",Hr,[u("div",{class:"nav-search-btn-wait",onClick:I[0]||(I[0]=F=>v.value=!0)},[Or,a.value?$("",!0):(l(),p("span",Br,L(((q=o.value)==null?void 0:q.btnPlaceholder)||"Search"),1)),a.value?$("",!0):(l(),p("span",zr,L(m.value)+" K ",1))]),y(d($e).Dialog,{visible:v.value,theme:"algolia"},Xn({header:_(()=>{var F;return[y(d($e).Input,{value:f.value,"onUpdate:value":I[1]||(I[1]=ye=>f.value=ye),placeholder:((F=o.value)==null?void 0:F.placeholder)||"Search Docs"},null,8,["value","placeholder"])]}),body:_(()=>[u("div",Fr,[y(d($e).List,null,{default:_(()=>[g.value.length?(l(),x(d($e).Group,{key:1,heading:i.value},{default:_(()=>[(l(!0),p(z,null,X(ee.value,F=>(l(),x(d($e).Item,{"data-value":H.value?d(Se)(F.route):F.route,key:F.route,onSelect:K},{default:_(()=>[u("div",Gr,[u("div",Ur,[u("span",null,L(F.meta.title),1),s.value&&F.meta.date?(l(),p("span",qr,L(d(Nr)(F.meta.date,"yyyy-MM-dd")),1)):$("",!0)]),u("div",{class:"des",innerHTML:F.meta.description},null,8,Yr)])]),_:2},1032,["data-value"]))),128))]),_:1},8,["heading"])):(l(),x(d($e).Empty,{key:0},{default:_(()=>{var F;return[Q(L(((F=o.value)==null?void 0:F.emptyText)||"No results found."),1)]}),_:1}))]),_:1})])]),_:2},[g.value.length?{name:"footer",fn:_(()=>[u("div",Wr,[u("a",Kr,[Jr,y(Tr,{style:{width:"77px"}})])]),Qr]),key:"0"}:void 0]),1032,["visible"])])}}});const Xr=P(Zr,[["__scopeId","data-v-e09e7552"]]),ea={},ta={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",height:"24px",viewBox:"0 0 24 24",width:"24px"},na=u("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),oa=u("path",{d:"M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"},null,-1),sa=[na,oa];function ra(n,e){return l(),p("svg",ta,sa)}const aa=P(ea,[["render",ra]]),ia=b({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(n){const e=n,t=E(()=>e.tag??e.href?"a":"span"),o=E(()=>e.href&&pn.test(e.href));return(s,r)=>(l(),x(Ee(t.value),{class:B(["VPLink",{link:s.href}]),href:s.href?d(He)(s.href):void 0,target:s.target||(o.value?"_blank":void 0),rel:s.rel||(o.value?"noreferrer":void 0)},{default:_(()=>[h(s.$slots,"default",{},void 0,!0),o.value&&!s.noIcon?(l(),x(aa,{key:0,class:"icon"})):$("",!0)]),_:3},8,["class","href","target","rel"]))}});const ve=P(ia,[["__scopeId","data-v-8f4dc553"]]),la=b({__name:"VPNavBarMenuLink",props:{item:{}},setup(n){const{page:e}=D();return(t,o)=>(l(),x(ve,{class:B({VPNavBarMenuLink:!0,active:d(Ae)(d(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,tabindex:"0"},{default:_(()=>[Q(L(t.item.text),1)]),_:1},8,["class","href","target","rel"]))}});const ca=P(la,[["__scopeId","data-v-5e623618"]]),At=A();let In=!1,rt=0;function da(n){const e=A(!1);if(eo){!In&&ua(),rt++;const t=Y(At,o=>{var s,r,a;o===n.el.value||(s=n.el.value)!=null&&s.contains(o)?(e.value=!0,(r=n.onFocus)==null||r.call(n)):(e.value=!1,(a=n.onBlur)==null||a.call(n))});kt(()=>{t(),rt--,rt||pa()})}return an(e)}function ua(){document.addEventListener("focusin",jn),In=!0,At.value=document.activeElement}function pa(){document.removeEventListener("focusin",jn)}function jn(){At.value=document.activeElement}const ma={},ha={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},va=u("path",{d:"M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"},null,-1),ga=[va];function _a(n,e){return l(),p("svg",ha,ga)}const Rn=P(ma,[["render",_a]]),fa={},wa={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},ka=u("circle",{cx:"12",cy:"12",r:"2"},null,-1),ba=u("circle",{cx:"19",cy:"12",r:"2"},null,-1),ya=u("circle",{cx:"5",cy:"12",r:"2"},null,-1),Ma=[ka,ba,ya];function $a(n,e){return l(),p("svg",wa,Ma)}const Pa=P(fa,[["render",$a]]),Sa={class:"VPMenuLink"},Ea=b({__name:"VPMenuLink",props:{item:{}},setup(n){const{page:e}=D();return(t,o)=>(l(),p("div",Sa,[y(ve,{class:B({active:d(Ae)(d(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel},{default:_(()=>[Q(L(t.item.text),1)]),_:1},8,["class","href","target","rel"])]))}});const Xe=P(Ea,[["__scopeId","data-v-2f2cfafc"]]),Va={class:"VPMenuGroup"},Aa={key:0,class:"title"},xa=b({__name:"VPMenuGroup",props:{text:{},items:{}},setup(n){return(e,t)=>(l(),p("div",Va,[e.text?(l(),p("p",Aa,L(e.text),1)):$("",!0),(l(!0),p(z,null,X(e.items,o=>(l(),p(z,null,["link"in o?(l(),x(Xe,{key:0,item:o},null,8,["item"])):$("",!0)],64))),256))]))}});const Ca=P(xa,[["__scopeId","data-v-69e747b5"]]),Na={class:"VPMenu"},La={key:0,class:"items"},Ia=b({__name:"VPMenu",props:{items:{}},setup(n){return(e,t)=>(l(),p("div",Na,[e.items?(l(),p("div",La,[(l(!0),p(z,null,X(e.items,o=>(l(),p(z,{key:o.text},["link"in o?(l(),x(Xe,{key:0,item:o},null,8,["item"])):(l(),x(Ca,{key:1,text:o.text,items:o.items},null,8,["text","items"]))],64))),128))])):$("",!0),h(e.$slots,"default",{},void 0,!0)]))}});const ja=P(Ia,[["__scopeId","data-v-e7ea1737"]]),Ra=["aria-expanded","aria-label"],Da={key:0,class:"text"},Ta={class:"menu"},Ha=b({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(n){const e=A(!1),t=A();da({el:t,onBlur:o});function o(){e.value=!1}return(s,r)=>(l(),p("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:r[1]||(r[1]=a=>e.value=!0),onMouseleave:r[2]||(r[2]=a=>e.value=!1)},[u("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":s.label,onClick:r[0]||(r[0]=a=>e.value=!e.value)},[s.button||s.icon?(l(),p("span",Da,[s.icon?(l(),x(Ee(s.icon),{key:0,class:"option-icon"})):$("",!0),Q(" "+L(s.button)+" ",1),y(Rn,{class:"text-icon"})])):(l(),x(Pa,{key:1,class:"icon"}))],8,Ra),u("div",Ta,[y(ja,{items:s.items},{default:_(()=>[h(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}});const xt=P(Ha,[["__scopeId","data-v-764effdf"]]),Oa=b({__name:"VPNavBarMenuGroup",props:{item:{}},setup(n){const{page:e}=D();return(t,o)=>(l(),x(xt,{class:B({VPNavBarMenuGroup:!0,active:d(Ae)(d(e).relativePath,t.item.activeMatch,!!t.item.activeMatch)}),button:t.item.text,items:t.item.items},null,8,["class","button","items"]))}}),Ba=n=>(oe("data-v-7f418b0f"),n=n(),se(),n),za={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Fa=Ba(()=>u("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),Ga=b({__name:"VPNavBarMenu",setup(n){const{theme:e}=D();return(t,o)=>d(e).nav?(l(),p("nav",za,[Fa,(l(!0),p(z,null,X(d(e).nav,s=>(l(),p(z,{key:s.text},["link"in s?(l(),x(ca,{key:0,item:s},null,8,["item"])):(l(),x(Oa,{key:1,item:s},null,8,["item"]))],64))),128))])):$("",!0)}});const Ua=P(Ga,[["__scopeId","data-v-7f418b0f"]]),qa={},Ya={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Wa=u("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),Ka=u("path",{d:" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",class:"css-c4d79v"},null,-1),Ja=[Wa,Ka];function Qa(n,e){return l(),p("svg",Ya,Ja)}const Dn=P(qa,[["render",Qa]]),Za={class:"items"},Xa={class:"title"},ei=b({__name:"VPNavBarTranslations",setup(n){const{theme:e}=D(),{localeLinks:t,currentLang:o}=Oe({correspondingLink:!0});return(s,r)=>d(t).length&&d(o).label?(l(),x(xt,{key:0,class:"VPNavBarTranslations",icon:Dn,label:d(e).langMenuLabel||"Change language"},{default:_(()=>[u("div",Za,[u("p",Xa,L(d(o).label),1),(l(!0),p(z,null,X(d(t),a=>(l(),x(Xe,{key:a.link,item:a},null,8,["item"]))),128))])]),_:1},8,["label"])):$("",!0)}});const ti=P(ei,[["__scopeId","data-v-74abcbb9"]]);const ni={},oi={class:"VPSwitch",type:"button",role:"switch"},si={class:"check"},ri={key:0,class:"icon"};function ai(n,e){return l(),p("button",oi,[u("span",si,[n.$slots.default?(l(),p("span",ri,[h(n.$slots,"default",{},void 0,!0)])):$("",!0)])])}const ii=P(ni,[["render",ai],["__scopeId","data-v-f3c41672"]]),li={},ci={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},di=un('<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',9),ui=[di];function pi(n,e){return l(),p("svg",ci,ui)}const mi=P(li,[["render",pi]]),hi={},vi={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},gi=u("path",{d:"M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"},null,-1),_i=[gi];function fi(n,e){return l(),p("svg",vi,_i)}const wi=P(hi,[["render",fi]]),ki=b({__name:"VPSwitchAppearance",setup(n){const{site:e,isDark:t}=D(),o=A(!1),s=typeof localStorage<"u"?r():()=>{};ce(()=>{o.value=document.documentElement.classList.contains("dark")});function r(){const a=window.matchMedia("(prefers-color-scheme: dark)"),c=document.documentElement.classList;let i=localStorage.getItem(Ht),m=e.value.appearance==="dark"&&i==null||(i==="auto"||i==null?a.matches:i==="dark");a.onchange=k=>{i==="auto"&&f(m=k.matches)};function v(){f(m=!m),i=m?a.matches?"auto":"dark":a.matches?"light":"auto",localStorage.setItem(Ht,i)}function f(k){const M=document.createElement("style");M.type="text/css",M.appendChild(document.createTextNode(`:not(.VPSwitchAppearance):not(.VPSwitchAppearance *) {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}`)),document.head.appendChild(M),o.value=k,c[k?"add":"remove"]("dark"),window.getComputedStyle(M).opacity,document.head.removeChild(M)}return v}return Y(o,a=>{t.value=a}),(a,c)=>(l(),x(ii,{title:"toggle dark mode",class:"VPSwitchAppearance","aria-checked":o.value,onClick:d(s)},{default:_(()=>[y(mi,{class:"sun"}),y(wi,{class:"moon"})]),_:1},8,["aria-checked","onClick"]))}});const Ct=P(ki,[["__scopeId","data-v-87de0873"]]),bi={key:0,class:"VPNavBarAppearance"},yi=b({__name:"VPNavBarAppearance",setup(n){const{site:e}=D();return(t,o)=>d(e).appearance?(l(),p("div",bi,[y(Ct)])):$("",!0)}});const Mi=P(yi,[["__scopeId","data-v-f6a63727"]]),$i={discord:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',facebook:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',github:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',instagram:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',linkedin:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',mastodon:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',slack:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',twitter:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',youtube:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'},Pi=["href","aria-label","innerHTML"],Si=b({__name:"VPSocialLink",props:{icon:{},link:{}},setup(n){const e=n,t=E(()=>typeof e.icon=="object"?e.icon.svg:$i[e.icon]);return(o,s)=>(l(),p("a",{class:"VPSocialLink",href:o.link,"aria-label":typeof o.icon=="string"?o.icon:"",target:"_blank",rel:"noopener",innerHTML:t.value},null,8,Pi))}});const Ei=P(Si,[["__scopeId","data-v-c530cc0a"]]),Vi={class:"VPSocialLinks"},Ai=b({__name:"VPSocialLinks",props:{links:{}},setup(n){return(e,t)=>(l(),p("div",Vi,[(l(!0),p(z,null,X(e.links,({link:o,icon:s})=>(l(),x(Ei,{key:o,icon:s,link:o},null,8,["icon","link"]))),128))]))}});const Nt=P(Ai,[["__scopeId","data-v-d7a53887"]]),xi=b({__name:"VPNavBarSocialLinks",setup(n){const{theme:e}=D();return(t,o)=>d(e).socialLinks?(l(),x(Nt,{key:0,class:"VPNavBarSocialLinks",links:d(e).socialLinks},null,8,["links"])):$("",!0)}});const Ci=P(xi,[["__scopeId","data-v-0394ad82"]]),Ni={key:0,class:"group translations"},Li={class:"trans-title"},Ii={key:1,class:"group"},ji={class:"item appearance"},Ri={class:"label"},Di={class:"appearance-action"},Ti={key:2,class:"group"},Hi={class:"item social-links"},Oi=b({__name:"VPNavBarExtra",setup(n){const{site:e,theme:t}=D(),{localeLinks:o,currentLang:s}=Oe({correspondingLink:!0}),r=E(()=>o.value.length&&s.value.label||e.value.appearance||t.value.socialLinks);return(a,c)=>r.value?(l(),x(xt,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:_(()=>[d(o).length&&d(s).label?(l(),p("div",Ni,[u("p",Li,L(d(s).label),1),(l(!0),p(z,null,X(d(o),i=>(l(),x(Xe,{key:i.link,item:i},null,8,["item"]))),128))])):$("",!0),d(e).appearance?(l(),p("div",Ii,[u("div",ji,[u("p",Ri,L(d(t).darkModeSwitchLabel||"Appearance"),1),u("div",Di,[y(Ct)])])])):$("",!0),d(t).socialLinks?(l(),p("div",Ti,[u("div",Hi,[y(Nt,{class:"social-links-list",links:d(t).socialLinks},null,8,["links"])])])):$("",!0)]),_:1})):$("",!0)}});const Bi=P(Oi,[["__scopeId","data-v-40855f84"]]),zi=n=>(oe("data-v-e5dd9c1c"),n=n(),se(),n),Fi=["aria-expanded"],Gi=zi(()=>u("span",{class:"container"},[u("span",{class:"top"}),u("span",{class:"middle"}),u("span",{class:"bottom"})],-1)),Ui=[Gi],qi=b({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(n){return(e,t)=>(l(),p("button",{type:"button",class:B(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=o=>e.$emit("click"))},Ui,10,Fi))}});const Yi=P(qi,[["__scopeId","data-v-e5dd9c1c"]]),Wi=n=>(oe("data-v-7c10cd25"),n=n(),se(),n),Ki={class:"container"},Ji={class:"title"},Qi={class:"content"},Zi=Wi(()=>u("div",{class:"curtain"},null,-1)),Xi={class:"content-body"},el=b({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(n){const{y:e}=_o(),{hasSidebar:t}=de(),o=E(()=>({"has-sidebar":t.value,fill:e.value>0}));return(s,r)=>(l(),p("div",{class:B(["VPNavBar",o.value])},[u("div",Ki,[u("div",Ji,[y(jo,null,{"nav-bar-title-before":_(()=>[h(s.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":_(()=>[h(s.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),u("div",Qi,[Zi,u("div",Xi,[h(s.$slots,"nav-bar-content-before",{},void 0,!0),y(Xr,{class:"search"}),y(Ua,{class:"menu"}),y(ti,{class:"translations"}),y(Mi,{class:"appearance"}),y(Ci,{class:"social-links"}),y(Bi,{class:"extra"}),h(s.$slots,"nav-bar-content-after",{},void 0,!0),y(Yi,{class:"hamburger",active:s.isScreenOpen,onClick:r[0]||(r[0]=a=>s.$emit("toggle-screen"))},null,8,["active"])])])])],2))}});const tl=P(el,[["__scopeId","data-v-7c10cd25"]]);function nl(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}else return Array.from(n)}var Lt=!1;if(typeof window<"u"){var sn={get passive(){Lt=!0}};window.addEventListener("testPassive",null,sn),window.removeEventListener("testPassive",null,sn)}var We=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),Ve=[],Ke=!1,It=-1,je=void 0,fe=void 0,Re=void 0,Tn=function(e){return Ve.some(function(t){return!!(t.options.allowTouchMove&&t.options.allowTouchMove(e))})},Je=function(e){var t=e||window.event;return Tn(t.target)||t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)},ol=function(e){if(Re===void 0){var t=!!e&&e.reserveScrollBarGap===!0,o=window.innerWidth-document.documentElement.clientWidth;if(t&&o>0){var s=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);Re=document.body.style.paddingRight,document.body.style.paddingRight=s+o+"px"}}je===void 0&&(je=document.body.style.overflow,document.body.style.overflow="hidden")},sl=function(){Re!==void 0&&(document.body.style.paddingRight=Re,Re=void 0),je!==void 0&&(document.body.style.overflow=je,je=void 0)},rl=function(){return window.requestAnimationFrame(function(){if(fe===void 0){fe={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,o=e.scrollX,s=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-o,setTimeout(function(){return window.requestAnimationFrame(function(){var r=s-window.innerHeight;r&&t>=s&&(document.body.style.top=-(t+r))})},300)}})},al=function(){if(fe!==void 0){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=fe.position,document.body.style.top=fe.top,document.body.style.left=fe.left,window.scrollTo(t,e),fe=void 0}},il=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},ll=function(e,t){var o=e.targetTouches[0].clientY-It;return Tn(e.target)?!1:t&&t.scrollTop===0&&o>0||il(t)&&o<0?Je(e):(e.stopPropagation(),!0)},Hn=function(e,t){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!Ve.some(function(s){return s.targetElement===e})){var o={targetElement:e,options:t||{}};Ve=[].concat(nl(Ve),[o]),We?rl():ol(t),We&&(e.ontouchstart=function(s){s.targetTouches.length===1&&(It=s.targetTouches[0].clientY)},e.ontouchmove=function(s){s.targetTouches.length===1&&ll(s,e)},Ke||(document.addEventListener("touchmove",Je,Lt?{passive:!1}:void 0),Ke=!0))}},On=function(){We&&(Ve.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),Ke&&(document.removeEventListener("touchmove",Je,Lt?{passive:!1}:void 0),Ke=!1),It=-1),We?al():sl(),Ve=[]};const cl=b({__name:"VPNavScreenMenuLink",props:{text:{},link:{}},setup(n){const e=yt("close-screen");return(t,o)=>(l(),x(ve,{class:"VPNavScreenMenuLink",href:t.link,onClick:d(e)},{default:_(()=>[Q(L(t.text),1)]),_:1},8,["href","onClick"]))}});const dl=P(cl,[["__scopeId","data-v-c328f34f"]]),ul={},pl={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},ml=u("path",{d:"M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"},null,-1),hl=[ml];function vl(n,e){return l(),p("svg",pl,hl)}const gl=P(ul,[["render",vl]]),_l=b({__name:"VPNavScreenMenuGroupLink",props:{text:{},link:{}},setup(n){const e=yt("close-screen");return(t,o)=>(l(),x(ve,{class:"VPNavScreenMenuGroupLink",href:t.link,onClick:d(e)},{default:_(()=>[Q(L(t.text),1)]),_:1},8,["href","onClick"]))}});const Bn=P(_l,[["__scopeId","data-v-3d20956d"]]),fl={class:"VPNavScreenMenuGroupSection"},wl={key:0,class:"title"},kl=b({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(n){return(e,t)=>(l(),p("div",fl,[e.text?(l(),p("p",wl,L(e.text),1)):$("",!0),(l(!0),p(z,null,X(e.items,o=>(l(),x(Bn,{key:o.text,text:o.text,link:o.link},null,8,["text","link"]))),128))]))}});const bl=P(kl,[["__scopeId","data-v-7478538b"]]),yl=["aria-controls","aria-expanded"],Ml={class:"button-text"},$l=["id"],Pl={key:1,class:"group"},Sl=b({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(n){const e=n,t=A(!1),o=E(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function s(){t.value=!t.value}return(r,a)=>(l(),p("div",{class:B(["VPNavScreenMenuGroup",{open:t.value}])},[u("button",{class:"button","aria-controls":o.value,"aria-expanded":t.value,onClick:s},[u("span",Ml,L(r.text),1),y(gl,{class:"button-icon"})],8,yl),u("div",{id:o.value,class:"items"},[(l(!0),p(z,null,X(r.items,c=>(l(),p(z,{key:c.text},["link"in c?(l(),p("div",{key:c.text,class:"item"},[y(Bn,{text:c.text,link:c.link},null,8,["text","link"])])):(l(),p("div",Pl,[y(bl,{text:c.text,items:c.items},null,8,["text","items"])]))],64))),128))],8,$l)],2))}});const El=P(Sl,[["__scopeId","data-v-a9a19324"]]),Vl={key:0,class:"VPNavScreenMenu"},Al=b({__name:"VPNavScreenMenu",setup(n){const{theme:e}=D();return(t,o)=>d(e).nav?(l(),p("nav",Vl,[(l(!0),p(z,null,X(d(e).nav,s=>(l(),p(z,{key:s.text},["link"in s?(l(),x(dl,{key:0,text:s.text,link:s.link},null,8,["text","link"])):(l(),x(El,{key:1,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):$("",!0)}}),xl={key:0,class:"VPNavScreenAppearance"},Cl={class:"text"},Nl=b({__name:"VPNavScreenAppearance",setup(n){const{site:e,theme:t}=D();return(o,s)=>d(e).appearance?(l(),p("div",xl,[u("p",Cl,L(d(t).darkModeSwitchLabel||"Appearance"),1),y(Ct)])):$("",!0)}});const Ll=P(Nl,[["__scopeId","data-v-add8f686"]]),Il={class:"list"},jl=b({__name:"VPNavScreenTranslations",setup(n){const{localeLinks:e,currentLang:t}=Oe({correspondingLink:!0}),o=A(!1);function s(){o.value=!o.value}return(r,a)=>d(e).length&&d(t).label?(l(),p("div",{key:0,class:B(["VPNavScreenTranslations",{open:o.value}])},[u("button",{class:"title",onClick:s},[y(Dn,{class:"icon lang"}),Q(" "+L(d(t).label)+" ",1),y(Rn,{class:"icon chevron"})]),u("ul",Il,[(l(!0),p(z,null,X(d(e),c=>(l(),p("li",{key:c.link,class:"item"},[y(ve,{class:"link",href:c.link},{default:_(()=>[Q(L(c.text),1)]),_:2},1032,["href"])]))),128))])],2)):$("",!0)}});const Rl=P(jl,[["__scopeId","data-v-d72aa483"]]),Dl=b({__name:"VPNavScreenSocialLinks",setup(n){const{theme:e}=D();return(t,o)=>d(e).socialLinks?(l(),x(Nt,{key:0,class:"VPNavScreenSocialLinks",links:d(e).socialLinks},null,8,["links"])):$("",!0)}}),Tl={class:"container"},Hl=b({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(n){const e=A(null);function t(){Hn(e.value,{reserveScrollBarGap:!0})}function o(){On()}return(s,r)=>(l(),x(Qe,{name:"fade",onEnter:t,onAfterLeave:o},{default:_(()=>[s.open?(l(),p("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e},[u("div",Tl,[h(s.$slots,"nav-screen-content-before",{},void 0,!0),y(Al,{class:"menu"}),y(Rl,{class:"translations"}),y(Ll,{class:"appearance"}),y(Dl,{class:"social-links"}),h(s.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):$("",!0)]),_:3}))}});const Ol=P(Hl,[["__scopeId","data-v-724636ae"]]),Bl={class:"VPNav"},zl=b({__name:"VPNav",setup(n){const{isScreenOpen:e,closeScreen:t,toggleScreen:o}=Vo();return Ie("close-screen",t),(s,r)=>(l(),p("header",Bl,[y(tl,{"is-screen-open":d(e),onToggleScreen:d(o)},{"nav-bar-title-before":_(()=>[h(s.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":_(()=>[h(s.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":_(()=>[h(s.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":_(()=>[h(s.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),y(Ol,{open:d(e)},{"nav-screen-content-before":_(()=>[h(s.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":_(()=>[h(s.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])]))}});const Fl=P(zl,[["__scopeId","data-v-7e5bc4a5"]]),Gl={},Ul={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},ql=u("path",{d:"M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"},null,-1),Yl=u("path",{d:"M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"},null,-1),Wl=u("path",{d:"M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"},null,-1),Kl=u("path",{d:"M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"},null,-1),Jl=[ql,Yl,Wl,Kl];function Ql(n,e){return l(),p("svg",Ul,Jl)}const Zl=P(Gl,[["render",Ql]]);function Xl(){const{hasSidebar:n}=de(),e=it("(min-width: 960px)"),t=it("(min-width: 1280px)");return{isAsideEnabled:E(()=>!t.value&&!e.value?!1:n.value?t.value:e.value)}}const ec=71;function jt(n){return typeof n.outline=="object"&&!Array.isArray(n.outline)&&n.outline.label||n.outlineTitle||"On this page"}function Rt(n){const e=[...document.querySelectorAll(".VPDoc h2,h3,h4,h5,h6")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const o=Number(t.tagName[1]);return{title:tc(t),link:"#"+t.id,level:o}});return nc(e,n)}function tc(n){let e="";for(const t of n.childNodes)if(t.nodeType===1){if(t.classList.contains("VPBadge")||t.classList.contains("header-anchor"))continue;e+=t.textContent}else t.nodeType===3&&(e+=t.textContent);return e.trim()}function nc(n,e){if(e===!1)return[];const t=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[o,s]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;n=n.filter(a=>a.level>=o&&a.level<=s);const r=[];e:for(let a=0;a<n.length;a++){const c=n[a];if(a===0)r.push(c);else{for(let i=a-1;i>=0;i--){const m=n[i];if(m.level<c.level){(m.children||(m.children=[])).push(c);continue e}}r.push(c)}}return r}function oc(n,e){const{isAsideEnabled:t}=Xl(),o=fo(r,100);let s=null;ce(()=>{requestAnimationFrame(r),window.addEventListener("scroll",o)}),to(()=>{a(location.hash)}),kt(()=>{window.removeEventListener("scroll",o)});function r(){if(!t.value)return;const c=[].slice.call(n.value.querySelectorAll(".outline-link")),i=[].slice.call(document.querySelectorAll(".content .header-anchor")).filter(M=>c.some(C=>C.hash===M.hash&&M.offsetParent!==null)),m=window.scrollY,v=window.innerHeight,f=document.body.offsetHeight,k=Math.abs(m+v-f)<1;if(i.length&&k){a(i[i.length-1].hash);return}for(let M=0;M<i.length;M++){const C=i[M],w=i[M+1],[g,j]=sc(M,C,w);if(g){a(j);return}}}function a(c){s&&s.classList.remove("active"),c!==null&&(s=n.value.querySelector(`a[href="${decodeURIComponent(c)}"]`));const i=s;i?(i.classList.add("active"),e.value.style.top=i.offsetTop+33+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function rn(n){return n.parentElement.offsetTop-ec}function sc(n,e,t){const o=window.scrollY;return n===0&&o===0?[!0,null]:o<rn(e)?[!1,null]:!t||o<rn(t)?[!0,e.hash]:[!1,null]}const rc=["href","title"],ac=b({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(n){function e({target:t}){const o="#"+t.href.split("#")[1],s=document.querySelector(decodeURIComponent(o));s==null||s.focus()}return(t,o)=>{const s=ke("VPDocOutlineItem",!0);return l(),p("ul",{class:B(t.root?"root":"nested")},[(l(!0),p(z,null,X(t.headers,({children:r,link:a,title:c})=>(l(),p("li",null,[u("a",{class:"outline-link",href:a,onClick:e,title:c},L(c),9,rc),r!=null&&r.length?(l(),x(s,{key:0,headers:r},null,8,["headers"])):$("",!0)]))),256))],2)}}});const Dt=P(ac,[["__scopeId","data-v-9a431c33"]]),ic={},lc={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},cc=u("path",{d:"M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"},null,-1),dc=[cc];function uc(n,e){return l(),p("svg",lc,dc)}const Tt=P(ic,[["render",uc]]),pc=b({__name:"VPLocalNavOutlineDropdown",setup(n){const{frontmatter:e,theme:t}=D(),o=A(!1),s=A(0),r=A();Te(()=>{o.value=!1});function a(){o.value=!o.value,s.value=window.innerHeight+Math.min(window.scrollY-64,0)}function c(v){v.target.classList.contains("outline-link")&&(r.value&&(r.value.style.transition="none"),ie(()=>{o.value=!1}))}function i(){o.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}const m=Mt([]);return Te(()=>{m.value=Rt(e.value.outline??t.value.outline)}),(v,f)=>(l(),p("div",{class:"VPLocalNavOutlineDropdown",style:no({"--vp-vh":s.value+"px"})},[m.value.length>0?(l(),p("button",{key:0,onClick:a,class:B({open:o.value})},[Q(L(d(jt)(d(t)))+" ",1),y(Tt,{class:"icon"})],2)):(l(),p("button",{key:1,onClick:i},L(d(t).returnToTopLabel||"Return to top"),1)),y(Qe,{name:"flyout"},{default:_(()=>[o.value?(l(),p("div",{key:0,ref_key:"items",ref:r,class:"items",onClick:c},[u("a",{class:"top-link",href:"#",onClick:i},L(d(t).returnToTopLabel||"Return to top"),1),y(Dt,{headers:m.value},null,8,["headers"])],512)):$("",!0)]),_:1})],4))}});const mc=P(pc,[["__scopeId","data-v-079b16a8"]]),hc={key:0,class:"VPLocalNav"},vc=["aria-expanded"],gc={class:"menu-text"},_c=b({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(n){const{theme:e,frontmatter:t}=D(),{hasSidebar:o}=de();return(s,r)=>d(t).layout!=="home"?(l(),p("div",hc,[d(o)?(l(),p("button",{key:0,class:"menu","aria-expanded":s.open,"aria-controls":"VPSidebarNav",onClick:r[0]||(r[0]=a=>s.$emit("open-menu"))},[y(Zl,{class:"menu-icon"}),u("span",gc,L(d(e).sidebarMenuLabel||"Menu"),1)],8,vc)):$("",!0),y(mc)])):$("",!0)}});const fc=P(_c,[["__scopeId","data-v-392e1bf8"]]),wc=n=>(oe("data-v-c4656e6d"),n=n(),se(),n),kc=["role","tabindex"],bc=wc(()=>u("div",{class:"indicator"},null,-1)),yc=["onKeydown"],Mc={key:1,class:"items"},$c=b({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(n){const e=n,{collapsed:t,collapsible:o,isLink:s,isActiveLink:r,hasActiveLink:a,hasChildren:c,toggle:i}=yo(E(()=>e.item)),m=E(()=>c.value?"section":"div"),v=E(()=>s.value?"a":"div"),f=E(()=>c.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),k=E(()=>s.value?void 0:"button"),M=E(()=>[[`level-${e.depth}`],{collapsible:o.value},{collapsed:t.value},{"is-link":s.value},{"is-active":r.value},{"has-active":a.value}]);function C(g){"key"in g&&g.key!=="Enter"||!e.item.link&&i()}function w(){e.item.link&&i()}return(g,j)=>{const H=ke("VPSidebarItem",!0);return l(),x(Ee(m.value),{class:B(["VPSidebarItem",M.value])},{default:_(()=>[g.item.text?(l(),p("div",Ge({key:0,class:"item",role:k.value},oo(g.item.items?{click:C,keydown:C}:{},!0),{tabindex:g.item.items&&0}),[bc,g.item.link?(l(),x(ve,{key:0,tag:v.value,class:"link",href:g.item.link},{default:_(()=>[(l(),x(Ee(f.value),{class:"text",innerHTML:g.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href"])):(l(),x(Ee(f.value),{key:1,class:"text",innerHTML:g.item.text},null,8,["innerHTML"])),g.item.collapsed!=null?(l(),p("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:w,onKeydown:so(w,["enter"]),tabindex:"0"},[y(Tt,{class:"caret-icon"})],40,yc)):$("",!0)],16,kc)):$("",!0),g.item.items&&g.item.items.length?(l(),p("div",Mc,[g.depth<5?(l(!0),p(z,{key:0},X(g.item.items,R=>(l(),x(H,{key:R.text,item:R,depth:g.depth+1},null,8,["item","depth"]))),128)):$("",!0)])):$("",!0)]),_:1},8,["class"])}}});const Pc=P($c,[["__scopeId","data-v-c4656e6d"]]),zn=n=>(oe("data-v-af16598e"),n=n(),se(),n),Sc=zn(()=>u("div",{class:"curtain"},null,-1)),Ec={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Vc=zn(()=>u("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),Ac=b({__name:"VPSidebar",props:{open:{type:Boolean}},setup(n){const e=n,{sidebarGroups:t,hasSidebar:o}=de();let s=A(null);function r(){Hn(s.value,{reserveScrollBarGap:!0})}function a(){On()}return ro(async()=>{var c;e.open?(r(),(c=s.value)==null||c.focus()):a()}),(c,i)=>d(o)?(l(),p("aside",{key:0,class:B(["VPSidebar",{open:c.open}]),ref_key:"navEl",ref:s,onClick:i[0]||(i[0]=ao(()=>{},["stop"]))},[Sc,u("nav",Ec,[Vc,h(c.$slots,"sidebar-nav-before",{},void 0,!0),(l(!0),p(z,null,X(d(t),m=>(l(),p("div",{key:m.text,class:"group"},[y(Pc,{item:m,depth:0},null,8,["item"])]))),128)),h(c.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):$("",!0)}});const xc=P(Ac,[["__scopeId","data-v-af16598e"]]),Cc={},Nc={class:"VPPage"};function Lc(n,e){const t=ke("Content");return l(),p("div",Nc,[h(n.$slots,"page-top"),y(t),h(n.$slots,"page-bottom")])}const Ic=P(Cc,[["render",Lc]]),jc=b({__name:"VPButton",props:{tag:{},size:{},theme:{},text:{},href:{}},setup(n){const e=n,t=E(()=>[e.size??"medium",e.theme??"brand"]),o=E(()=>e.href&&pn.test(e.href)),s=E(()=>e.tag?e.tag:e.href?"a":"button");return(r,a)=>(l(),x(Ee(s.value),{class:B(["VPButton",t.value]),href:r.href?d(He)(r.href):void 0,target:o.value?"_blank":void 0,rel:o.value?"noreferrer":void 0},{default:_(()=>[Q(L(r.text),1)]),_:1},8,["class","href","target","rel"]))}});const Rc=P(jc,[["__scopeId","data-v-567ba664"]]),Dc=n=>(oe("data-v-fd2650d5"),n=n(),se(),n),Tc={class:"container"},Hc={class:"main"},Oc={key:0,class:"name"},Bc={class:"clip"},zc={key:1,class:"text"},Fc={key:2,class:"tagline"},Gc={key:0,class:"actions"},Uc={key:0,class:"image"},qc={class:"image-container"},Yc=Dc(()=>u("div",{class:"image-bg"},null,-1)),Wc=b({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(n){const e=yt("hero-image-slot-exists");return(t,o)=>(l(),p("div",{class:B(["VPHero",{"has-image":t.image||d(e)}])},[u("div",Tc,[u("div",Hc,[h(t.$slots,"home-hero-info",{},()=>[t.name?(l(),p("h1",Oc,[u("span",Bc,L(t.name),1)])):$("",!0),t.text?(l(),p("p",zc,L(t.text),1)):$("",!0),t.tagline?(l(),p("p",Fc,L(t.tagline),1)):$("",!0)],!0),t.actions?(l(),p("div",Gc,[(l(!0),p(z,null,X(t.actions,s=>(l(),p("div",{key:s.link,class:"action"},[y(Rc,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link},null,8,["theme","text","href"])]))),128))])):$("",!0)]),t.image||d(e)?(l(),p("div",Uc,[u("div",qc,[Yc,h(t.$slots,"home-hero-image",{},()=>[t.image?(l(),x(Pt,{key:0,class:"image-src",image:t.image},null,8,["image"])):$("",!0)],!0)])])):$("",!0)])],2))}});const Kc=P(Wc,[["__scopeId","data-v-fd2650d5"]]),Jc=b({__name:"VPHomeHero",setup(n){const{frontmatter:e}=D();return(t,o)=>d(e).hero?(l(),x(Kc,{key:0,class:"VPHomeHero",name:d(e).hero.name,text:d(e).hero.text,tagline:d(e).hero.tagline,image:d(e).hero.image,actions:d(e).hero.actions},{"home-hero-info":_(()=>[h(t.$slots,"home-hero-info")]),"home-hero-image":_(()=>[h(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):$("",!0)}}),Qc={},Zc={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Xc=u("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),ed=[Xc];function td(n,e){return l(),p("svg",Zc,ed)}const nd=P(Qc,[["render",td]]),od={class:"box"},sd=["innerHTML"],rd=["innerHTML"],ad=["innerHTML"],id={key:3,class:"link-text"},ld={class:"link-text-value"},cd=b({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{}},setup(n){return(e,t)=>(l(),x(ve,{class:"VPFeature",href:e.link,"no-icon":!0},{default:_(()=>[u("article",od,[typeof e.icon=="object"?(l(),x(Pt,{key:0,image:e.icon,alt:e.icon.alt,height:e.icon.height,width:e.icon.width},null,8,["image","alt","height","width"])):e.icon?(l(),p("div",{key:1,class:"icon",innerHTML:e.icon},null,8,sd)):$("",!0),u("h2",{class:"title",innerHTML:e.title},null,8,rd),e.details?(l(),p("p",{key:2,class:"details",innerHTML:e.details},null,8,ad)):$("",!0),e.linkText?(l(),p("div",id,[u("p",ld,[Q(L(e.linkText)+" ",1),y(nd,{class:"link-text-icon"})])])):$("",!0)])]),_:1},8,["href"]))}});const dd=P(cd,[["__scopeId","data-v-837f6cca"]]),ud={key:0,class:"VPFeatures"},pd={class:"container"},md={class:"items"},hd=b({__name:"VPFeatures",props:{features:{}},setup(n){const e=n,t=E(()=>{const o=e.features.length;if(o){if(o===2)return"grid-2";if(o===3)return"grid-3";if(o%3===0)return"grid-6";if(o%2===0)return"grid-4"}else return});return(o,s)=>o.features?(l(),p("div",ud,[u("div",pd,[u("div",md,[(l(!0),p(z,null,X(o.features,r=>(l(),p("div",{key:r.title,class:B(["item",[t.value]])},[y(dd,{icon:r.icon,title:r.title,details:r.details,link:r.link,"link-text":r.linkText},null,8,["icon","title","details","link","link-text"])],2))),128))])])])):$("",!0)}});const vd=P(hd,[["__scopeId","data-v-6816157f"]]),gd=b({__name:"VPHomeFeatures",setup(n){const{frontmatter:e}=D();return(t,o)=>d(e).features?(l(),x(vd,{key:0,class:"VPHomeFeatures",features:d(e).features},null,8,["features"])):$("",!0)}}),_d={class:"VPHome"},fd=b({__name:"VPHome",setup(n){return(e,t)=>{const o=ke("Content");return l(),p("div",_d,[h(e.$slots,"home-hero-before",{},void 0,!0),y(Jc,null,{"home-hero-info":_(()=>[h(e.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":_(()=>[h(e.$slots,"home-hero-image",{},void 0,!0)]),_:3}),h(e.$slots,"home-hero-after",{},void 0,!0),h(e.$slots,"home-features-before",{},void 0,!0),y(gd),h(e.$slots,"home-features-after",{},void 0,!0),y(o)])}}});const wd=P(fd,[["__scopeId","data-v-d82743a8"]]),kd=n=>(oe("data-v-ff0f39c8"),n=n(),se(),n),bd={class:"content"},yd={class:"outline-title"},Md={"aria-labelledby":"doc-outline-aria-label"},$d=kd(()=>u("span",{class:"visually-hidden",id:"doc-outline-aria-label"}," Table of Contents for current page ",-1)),Pd=b({__name:"VPDocAsideOutline",setup(n){const{frontmatter:e,theme:t}=D(),o=Mt([]);Te(()=>{o.value=Rt(e.value.outline??t.value.outline)});const s=A(),r=A();return oc(s,r),(a,c)=>(l(),p("div",{class:B(["VPDocAsideOutline",{"has-outline":o.value.length>0}]),ref_key:"container",ref:s},[u("div",bd,[u("div",{class:"outline-marker",ref_key:"marker",ref:r},null,512),u("div",yd,L(d(jt)(d(t))),1),u("nav",Md,[$d,y(Dt,{headers:o.value,root:!0},null,8,["headers"])])])],2))}});const Sd=P(Pd,[["__scopeId","data-v-ff0f39c8"]]),Ed={class:"VPDocAsideCarbonAds"},Vd=b({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(n){const e=()=>null;return(t,o)=>(l(),p("div",Ed,[y(d(e),{"carbon-ads":t.carbonAds},null,8,["carbon-ads"])]))}}),Ad=n=>(oe("data-v-3f215769"),n=n(),se(),n),xd={class:"VPDocAside"},Cd=Ad(()=>u("div",{class:"spacer"},null,-1)),Nd=b({__name:"VPDocAside",setup(n){const{theme:e}=D();return(t,o)=>(l(),p("div",xd,[h(t.$slots,"aside-top",{},void 0,!0),h(t.$slots,"aside-outline-before",{},void 0,!0),y(Sd),h(t.$slots,"aside-outline-after",{},void 0,!0),Cd,h(t.$slots,"aside-ads-before",{},void 0,!0),d(e).carbonAds?(l(),x(Vd,{key:0,"carbon-ads":d(e).carbonAds},null,8,["carbon-ads"])):$("",!0),h(t.$slots,"aside-ads-after",{},void 0,!0),h(t.$slots,"aside-bottom",{},void 0,!0)]))}});const Ld=P(Nd,[["__scopeId","data-v-3f215769"]]);function Id(){const{theme:n,page:e}=D();return E(()=>{const{text:t="Edit this page",pattern:o=""}=n.value.editLink||{};let s;return typeof o=="function"?s=o(e.value):s=o.replace(/:path/g,e.value.filePath),{url:s,text:t}})}function jd(){const{page:n,theme:e,frontmatter:t}=D();return E(()=>{var a,c,i,m;const o=gn(e.value.sidebar,n.value.relativePath),s=ko(o),r=s.findIndex(v=>Ae(n.value.relativePath,v.link));return{prev:t.value.prev===!1?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((a=s[r-1])==null?void 0:a.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((c=s[r-1])==null?void 0:c.link)},next:t.value.next===!1?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??((i=s[r+1])==null?void 0:i.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((m=s[r+1])==null?void 0:m.link)}}})}const Rd={},Dd={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Td=u("path",{d:"M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z"},null,-1),Hd=u("path",{d:"M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z"},null,-1),Od=[Td,Hd];function Bd(n,e){return l(),p("svg",Dd,Od)}const zd=P(Rd,[["render",Bd]]),Fd={class:"VPLastUpdated"},Gd=["datetime"],Ud=b({__name:"VPDocFooterLastUpdated",setup(n){const{theme:e,page:t,lang:o}=D(),s=E(()=>new Date(t.value.lastUpdated)),r=E(()=>s.value.toISOString()),a=A("");return ce(()=>{me(()=>{a.value=s.value.toLocaleString(o.value)})}),(c,i)=>(l(),p("p",Fd,[Q(L(d(e).lastUpdatedText||"Last updated")+": ",1),u("time",{datetime:r.value},L(a.value),9,Gd)]))}});const qd=P(Ud,[["__scopeId","data-v-7b3ebfe1"]]),Yd={key:0,class:"VPDocFooter"},Wd={key:0,class:"edit-info"},Kd={key:0,class:"edit-link"},Jd={key:1,class:"last-updated"},Qd={key:1,class:"prev-next"},Zd={class:"pager"},Xd=["href"],eu=["innerHTML"],tu=["innerHTML"],nu=["href"],ou=["innerHTML"],su=["innerHTML"],ru=b({__name:"VPDocFooter",setup(n){const{theme:e,page:t,frontmatter:o}=D(),s=Id(),r=jd(),a=E(()=>e.value.editLink&&o.value.editLink!==!1),c=E(()=>t.value.lastUpdated&&o.value.lastUpdated!==!1),i=E(()=>a.value||c.value||r.value.prev||r.value.next);return(m,v)=>{var f,k,M,C,w,g,j;return i.value?(l(),p("footer",Yd,[h(m.$slots,"doc-footer-before",{},void 0,!0),a.value||c.value?(l(),p("div",Wd,[a.value?(l(),p("div",Kd,[y(ve,{class:"edit-link-button",href:d(s).url,"no-icon":!0},{default:_(()=>[y(zd,{class:"edit-link-icon","aria-label":"edit icon"}),Q(" "+L(d(s).text),1)]),_:1},8,["href"])])):$("",!0),c.value?(l(),p("div",Jd,[y(qd)])):$("",!0)])):$("",!0),(f=d(r).prev)!=null&&f.link||(k=d(r).next)!=null&&k.link?(l(),p("div",Qd,[u("div",Zd,[(M=d(r).prev)!=null&&M.link?(l(),p("a",{key:0,class:"pager-link prev",href:d(He)(d(r).prev.link)},[u("span",{class:"desc",innerHTML:((C=d(e).docFooter)==null?void 0:C.prev)||"Previous page"},null,8,eu),u("span",{class:"title",innerHTML:d(r).prev.text},null,8,tu)],8,Xd)):$("",!0)]),u("div",{class:B(["pager",{"has-prev":(w=d(r).prev)==null?void 0:w.link}])},[(g=d(r).next)!=null&&g.link?(l(),p("a",{key:0,class:"pager-link next",href:d(He)(d(r).next.link)},[u("span",{class:"desc",innerHTML:((j=d(e).docFooter)==null?void 0:j.next)||"Next page"},null,8,ou),u("span",{class:"title",innerHTML:d(r).next.text},null,8,su)],8,nu)):$("",!0)],2)])):$("",!0)])):$("",!0)}}});const au=P(ru,[["__scopeId","data-v-face870a"]]),iu={key:0,class:"VPDocOutlineDropdown"},lu={key:0,class:"items"},cu=b({__name:"VPDocOutlineDropdown",setup(n){const{frontmatter:e,theme:t}=D(),o=A(!1);Te(()=>{o.value=!1});const s=Mt([]);return Te(()=>{s.value=Rt(e.value.outline??t.value.outline)}),(r,a)=>s.value.length>0?(l(),p("div",iu,[u("button",{onClick:a[0]||(a[0]=c=>o.value=!o.value),class:B({open:o.value})},[Q(L(d(jt)(d(t)))+" ",1),y(Tt,{class:"icon"})],2),o.value?(l(),p("div",lu,[y(Dt,{headers:s.value},null,8,["headers"])])):$("",!0)])):$("",!0)}});const du=P(cu,[["__scopeId","data-v-2edece88"]]),uu=n=>(oe("data-v-c4b0d3cf"),n=n(),se(),n),pu={class:"container"},mu=uu(()=>u("div",{class:"aside-curtain"},null,-1)),hu={class:"aside-container"},vu={class:"aside-content"},gu={class:"content"},_u={class:"content-container"},fu={class:"main"},wu=b({__name:"VPDoc",setup(n){const e=xe(),{hasSidebar:t,hasAside:o,leftAside:s}=de(),r=E(()=>e.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(a,c)=>{const i=ke("Content");return l(),p("div",{class:B(["VPDoc",{"has-sidebar":d(t),"has-aside":d(o)}])},[h(a.$slots,"doc-top",{},void 0,!0),u("div",pu,[d(o)?(l(),p("div",{key:0,class:B(["aside",{"left-aside":d(s)}])},[mu,u("div",hu,[u("div",vu,[y(Ld,null,{"aside-top":_(()=>[h(a.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":_(()=>[h(a.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":_(()=>[h(a.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":_(()=>[h(a.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":_(()=>[h(a.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":_(()=>[h(a.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):$("",!0),u("div",gu,[u("div",_u,[h(a.$slots,"doc-before",{},void 0,!0),y(du),u("main",fu,[y(i,{class:B(["vp-doc",r.value])},null,8,["class"])]),y(au,null,{"doc-footer-before":_(()=>[h(a.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),h(a.$slots,"doc-after",{},void 0,!0)])])]),h(a.$slots,"doc-bottom",{},void 0,!0)],2)}}});const ku=P(wu,[["__scopeId","data-v-c4b0d3cf"]]),et=n=>(oe("data-v-c70503b8"),n=n(),se(),n),bu={class:"NotFound"},yu=et(()=>u("p",{class:"code"},"404",-1)),Mu=et(()=>u("h1",{class:"title"},"PAGE NOT FOUND",-1)),$u=et(()=>u("div",{class:"divider"},null,-1)),Pu=et(()=>u("blockquote",{class:"quote"}," But if you don't change your direction, and if you keep looking, you may end up where you are heading. ",-1)),Su={class:"action"},Eu=["href"],Vu=b({__name:"NotFound",setup(n){const{site:e}=D(),{localeLinks:t}=Oe({removeCurrent:!1}),o=A("/");return ce(()=>{var r;const s=window.location.pathname.replace(e.value.base,"").replace(/(^.*?\/).*$/,"/$1");t.value.length&&(o.value=((r=t.value.find(({link:a})=>a.startsWith(s)))==null?void 0:r.link)||t.value[0].link)}),(s,r)=>(l(),p("div",bu,[yu,Mu,$u,Pu,u("div",Su,[u("a",{class:"link",href:d(Se)(o.value),"aria-label":"go to home"}," Take me home ",8,Eu)])]))}});const Au=P(Vu,[["__scopeId","data-v-c70503b8"]]),xu=b({__name:"VPContent",setup(n){const{page:e,frontmatter:t}=D(),{hasSidebar:o}=de();return(s,r)=>(l(),p("div",{class:B(["VPContent",{"has-sidebar":d(o),"is-home":d(t).layout==="home"}]),id:"VPContent"},[d(e).isNotFound?h(s.$slots,"not-found",{key:0},()=>[y(Au)],!0):d(t).layout==="page"?(l(),x(Ic,{key:1},{"page-top":_(()=>[h(s.$slots,"page-top",{},void 0,!0)]),"page-bottom":_(()=>[h(s.$slots,"page-bottom",{},void 0,!0)]),_:3})):d(t).layout==="home"?(l(),x(wd,{key:2},{"home-hero-before":_(()=>[h(s.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info":_(()=>[h(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":_(()=>[h(s.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":_(()=>[h(s.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":_(()=>[h(s.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":_(()=>[h(s.$slots,"home-features-after",{},void 0,!0)]),_:3})):(l(),x(ku,{key:3},{"doc-top":_(()=>[h(s.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":_(()=>[h(s.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":_(()=>[h(s.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":_(()=>[h(s.$slots,"doc-before",{},void 0,!0)]),"doc-after":_(()=>[h(s.$slots,"doc-after",{},void 0,!0)]),"aside-top":_(()=>[h(s.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":_(()=>[h(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":_(()=>[h(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":_(()=>[h(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":_(()=>[h(s.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":_(()=>[h(s.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}});const Cu=P(xu,[["__scopeId","data-v-a494bd1d"]]),Nu={class:"container"},Lu=["innerHTML"],Iu=["innerHTML"],ju=b({__name:"VPFooter",setup(n){const{theme:e}=D(),{hasSidebar:t}=de();return(o,s)=>d(e).footer?(l(),p("footer",{key:0,class:B(["VPFooter",{"has-sidebar":d(t)}])},[u("div",Nu,[d(e).footer.message?(l(),p("p",{key:0,class:"message",innerHTML:d(e).footer.message},null,8,Lu)):$("",!0),d(e).footer.copyright?(l(),p("p",{key:1,class:"copyright",innerHTML:d(e).footer.copyright},null,8,Iu)):$("",!0)])],2)):$("",!0)}});const Ru=P(ju,[["__scopeId","data-v-2f86ebd2"]]),Du={key:0,class:"Layout"},Tu=b({__name:"Layout",setup(n){const{isOpen:e,open:t,close:o}=de(),s=xe();Y(()=>s.path,o),bo(e,o),Ie("close-sidebar",o),Ie("is-sidebar-open",e);const{frontmatter:r}=D(),a=io(),c=E(()=>!!a["home-hero-image"]);return Ie("hero-image-slot-exists",c),(i,m)=>{const v=ke("Content");return d(r).layout!==!1?(l(),p("div",Du,[h(i.$slots,"layout-top",{},void 0,!0),y($o),y(Eo,{class:"backdrop",show:d(e),onClick:d(o)},null,8,["show","onClick"]),y(Fl,null,{"nav-bar-title-before":_(()=>[h(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":_(()=>[h(i.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":_(()=>[h(i.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":_(()=>[h(i.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":_(()=>[h(i.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":_(()=>[h(i.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),y(fc,{open:d(e),onOpenMenu:d(t)},null,8,["open","onOpenMenu"]),y(xc,{open:d(e)},{"sidebar-nav-before":_(()=>[h(i.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":_(()=>[h(i.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),y(Cu,{"data-pagefind-body":""},{"page-top":_(()=>[h(i.$slots,"page-top",{},void 0,!0)]),"page-bottom":_(()=>[h(i.$slots,"page-bottom",{},void 0,!0)]),"not-found":_(()=>[h(i.$slots,"not-found",{},void 0,!0)]),"home-hero-before":_(()=>[h(i.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info":_(()=>[h(i.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":_(()=>[h(i.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":_(()=>[h(i.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":_(()=>[h(i.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":_(()=>[h(i.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":_(()=>[h(i.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":_(()=>[h(i.$slots,"doc-before",{},void 0,!0)]),"doc-after":_(()=>[h(i.$slots,"doc-after",{},void 0,!0)]),"doc-top":_(()=>[h(i.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":_(()=>[h(i.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":_(()=>[h(i.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":_(()=>[h(i.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":_(()=>[h(i.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":_(()=>[h(i.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":_(()=>[h(i.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":_(()=>[h(i.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),y(Ru),h(i.$slots,"layout-bottom",{},void 0,!0)])):(l(),x(v,{key:1}))}}});const Hu=P(Tu,[["__scopeId","data-v-f0b011de"]]);const Bu={Layout:Hu,enhanceApp:({app:n})=>{n.component("Badge",co)}};export{Bu as t};
