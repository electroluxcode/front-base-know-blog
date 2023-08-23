import{d as b,o as c,c as p,r as v,a as J,t as E,n as R,_ as P,u as at,g as gt,b as u,e as Wn,f as an,h as Un,i as C,j as yt,w as q,k as he,l as V,m as cn,p as le,q as qn,P as Kn,s as Me,v as Ce,x as xe,y as kt,z as d,F as z,A as x,B as m,C as S,T as Je,D as ke,E as Ge,G as w,H as He,I as Te,J as bt,K as Qn,L as ln,M as un,N as Zn,O as Ue,Q as ie,R as dn,S as Jn,U as Yn,V as Xn,W as X,X as re,Y as oe,Z as pn,$ as Ve,a0 as er,a1 as Bt,a2 as wt,a3 as tr,a4 as je,a5 as $t,a6 as nr,a7 as rr,a8 as or,a9 as sr,aa as ar,ab as ir}from"./framework.408c4d71.js";const cr=b({__name:"VPBadge",props:{text:{},type:{}},setup(n){return(e,t)=>(c(),p("span",{class:R(["VPBadge",e.type??"tip"])},[v(e.$slots,"default",{},()=>[J(E(e.text),1)],!0)],2))}});const lr=P(cr,[["__scopeId","data-v-350d3852"]]),H=at;function hn(n){return gt()?(yt(n),!0):!1}function vn(n){return typeof n=="function"?n():u(n)}const ur=typeof window<"u",_n=()=>{};function dr(...n){if(n.length!==1)return Wn(...n);const e=n[0];return typeof e=="function"?an(Un(()=>({get:e,set:_n}))):C(e)}function pr(n){var e;const t=vn(n);return(e=t==null?void 0:t.$el)!=null?e:t}const St=ur?window:void 0;function hr(...n){let e,t,r,o;if(typeof n[0]=="string"||Array.isArray(n[0])?([t,r,o]=n,e=St):[e,t,r,o]=n,!e)return _n;Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]);const s=[],a=()=>{s.forEach(_=>_()),s.length=0},l=(_,g,k,$)=>(_.addEventListener(g,k,$),()=>_.removeEventListener(g,k,$)),i=q(()=>[pr(e),vn(o)],([_,g])=>{a(),_&&s.push(...t.flatMap(k=>r.map($=>l(_,k,$,g))))},{immediate:!0,flush:"post"}),h=()=>{i(),a()};return hn(h),h}function vr(){const n=C(!1);return cn()&&le(()=>{n.value=!0}),n}function _r(n){const e=vr();return V(()=>(e.value,!!n()))}function it(n,e={}){const{window:t=St}=e,r=_r(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let o;const s=C(!1),a=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",l):o.removeListener(l))},l=()=>{r.value&&(a(),o=t.matchMedia(dr(n).value),s.value=!!(o!=null&&o.matches),o&&("addEventListener"in o?o.addEventListener("change",l):o.addListener(l)))};return he(l),hn(()=>a()),s}function fr({window:n=St}={}){if(!n)return{x:C(0),y:C(0)};const e=C(n.scrollX),t=C(n.scrollY);return hr(n,"scroll",()=>{e.value=n.scrollX,t.value=n.scrollY},{capture:!1,passive:!0}),{x:e,y:t}}function mr(n,e){let t,r=!1;return()=>{t&&clearTimeout(t),r?t=setTimeout(n,e):(n(),r=!0,setTimeout(()=>{r=!1},e))}}function ct(n){return/^\//.test(n)?n:`/${n}`}function Be(n){if(qn(n))return n.replace(Kn,"");const{site:e}=H(),{pathname:t,search:r,hash:o}=new URL(n,"http://example.com"),s=t.endsWith("/")||t.endsWith(".html")?n:n.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,e.value.cleanUrls?"":".html")}${r}${o}`);return Me(s)}function fn(n,e){if(Array.isArray(n))return n;if(n==null)return[];e=ct(e);const t=Object.keys(n).sort((r,o)=>o.split("/").length-r.split("/").length).find(r=>e.startsWith(ct(r)));return t?n[t]:[]}function gr(n){const e=[];let t=0;for(const r in n){const o=n[r];if(o.items){t=e.push(o);continue}e[t]||e.push({items:[]}),e[t].items.push(o)}return e}function yr(n){const e=[];function t(r){for(const o of r)o.text&&o.link&&e.push({text:o.text,link:o.link}),o.items&&t(o.items)}return t(n),e}function lt(n,e){return Array.isArray(e)?e.some(t=>lt(n,t)):Ce(n,e.link)?!0:e.items?lt(n,e.items):!1}function ue(){const n=xe(),{theme:e,frontmatter:t}=H(),r=it("(min-width: 960px)"),o=C(!1),s=V(()=>{const I=e.value.sidebar,y=n.data.relativePath;return I?fn(I,y):[]}),a=V(()=>t.value.sidebar!==!1&&s.value.length>0&&t.value.layout!=="home"),l=V(()=>i?t.value.aside==null?e.value.aside==="left":t.value.aside==="left":!1),i=V(()=>t.value.layout==="home"?!1:t.value.aside!=null?!!t.value.aside:e.value.aside!==!1),h=V(()=>a.value&&r.value),_=V(()=>a.value?gr(s.value):[]);function g(){o.value=!0}function k(){o.value=!1}function $(){o.value?k():g()}return{isOpen:o,sidebar:s,sidebarGroups:_,hasSidebar:a,hasAside:i,leftAside:l,isSidebarEnabled:h,open:g,close:k,toggle:$}}function kr(n,e){let t;he(()=>{t=n.value?document.activeElement:void 0}),le(()=>{window.addEventListener("keyup",r)}),kt(()=>{window.removeEventListener("keyup",r)});function r(o){o.key==="Escape"&&n.value&&(e(),t==null||t.focus())}}function br(n){const{page:e}=H(),t=C(!1),r=V(()=>n.value.collapsed!=null),o=V(()=>!!n.value.link),s=V(()=>Ce(e.value.relativePath,n.value.link)),a=V(()=>s.value?!0:n.value.items?lt(e.value.relativePath,n.value.items):!1),l=V(()=>!!(n.value.items&&n.value.items.length));he(()=>{t.value=!!(r.value&&n.value.collapsed)}),he(()=>{(s.value||a.value)&&(t.value=!1)});function i(){r.value&&(t.value=!t.value)}return{collapsed:t,collapsible:r,isLink:o,isActiveLink:s,hasActiveLink:a,hasChildren:l,toggle:i}}const wr=b({__name:"VPSkipLink",setup(n){const e=xe(),t=C();q(()=>e.path,()=>t.value.focus());function r({target:o}){const s=document.querySelector(decodeURIComponent(o.hash));if(s){const a=()=>{s.removeAttribute("tabindex"),s.removeEventListener("blur",a)};s.setAttribute("tabindex","-1"),s.addEventListener("blur",a),s.focus(),window.scrollTo(0,0)}}return(o,s)=>(c(),p(z,null,[d("span",{ref_key:"backToTop",ref:t,tabindex:"-1"},null,512),d("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:r}," Skip to content ")],64))}});const $r=P(wr,[["__scopeId","data-v-c8616af1"]]),Sr={key:0,class:"VPBackdrop"},Pr=b({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(n){return(e,t)=>(c(),x(Je,{name:"fade"},{default:m(()=>[e.show?(c(),p("div",Sr)):S("",!0)]),_:1}))}});const Mr=P(Pr,[["__scopeId","data-v-c79a1216"]]);function Vr(){const n=C(!1);function e(){n.value=!0,window.addEventListener("resize",o)}function t(){n.value=!1,window.removeEventListener("resize",o)}function r(){n.value?t():e()}function o(){window.outerWidth>=768&&t()}const s=xe();return q(()=>s.path,t),{isScreenOpen:n,openScreen:e,closeScreen:t,toggleScreen:r}}function De({removeCurrent:n=!0,correspondingLink:e=!1}={}){const{site:t,localeIndex:r,page:o,theme:s}=H(),a=V(()=>{var i,h;return{label:(i=t.value.locales[r.value])==null?void 0:i.label,link:((h=t.value.locales[r.value])==null?void 0:h.link)||(r.value==="root"?"/":`/${r.value}/`)}});return{localeLinks:V(()=>Object.entries(t.value.locales).flatMap(([i,h])=>n&&a.value.label===h.label?[]:{text:h.label,link:Lr(h.link||(i==="root"?"/":`/${i}/`),s.value.i18nRouting!==!1&&e,o.value.relativePath.slice(a.value.link.length-1),!t.value.cleanUrls)})),currentLang:a}}function Lr(n,e,t,r){return e?n.replace(/\/$/,"")+ct(t.replace(/(^|\/)?index.md$/,"$1").replace(/\.md$/,r?".html":"")):n}const Cr=["src","alt"],xr={inheritAttrs:!1},Ir=b({...xr,__name:"VPImage",props:{image:{},alt:{}},setup(n){return(e,t)=>{const r=ke("VPImage",!0);return e.image?(c(),p(z,{key:0},[typeof e.image=="string"||"src"in e.image?(c(),p("img",Ge({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:u(Me)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,Cr)):(c(),p(z,{key:1},[w(r,Ge({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),w(r,Ge({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):S("",!0)}}});const Pt=P(Ir,[["__scopeId","data-v-6db2186b"]]),Ar=["href"],Er=b({__name:"VPNavBarTitle",setup(n){const{site:e,theme:t}=H(),{hasSidebar:r}=ue(),{currentLang:o}=De();return(s,a)=>(c(),p("div",{class:R(["VPNavBarTitle",{"has-sidebar":u(r)}])},[d("a",{class:"title",href:u(Be)(u(o).link)},[v(s.$slots,"nav-bar-title-before",{},void 0,!0),u(t).logo?(c(),x(Pt,{key:0,class:"logo",image:u(t).logo},null,8,["image"])):S("",!0),u(t).siteTitle?(c(),p(z,{key:1},[J(E(u(t).siteTitle),1)],64)):u(t).siteTitle===void 0?(c(),p(z,{key:2},[J(E(u(e).title),1)],64)):S("",!0),v(s.$slots,"nav-bar-title-after",{},void 0,!0)],8,Ar)],2))}});const Tr=P(Er,[["__scopeId","data-v-4d981103"]]);var Dt;const mn=typeof window<"u",Nr=n=>typeof n=="string",We=()=>{};mn&&((Dt=window==null?void 0:window.navigator)!=null&&Dt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ut(n){return typeof n=="function"?n():u(n)}function Or(n,e){function t(...r){n(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})}return t}function Hr(n,e={}){let t,r;return o=>{const s=ut(n),a=ut(e.maxWait);if(t&&clearTimeout(t),s<=0||a!==void 0&&a<=0)return r&&(clearTimeout(r),r=null),o();a&&!r&&(r=setTimeout(()=>{t&&clearTimeout(t),r=null,o()},a)),t=setTimeout(()=>{r&&clearTimeout(r),r=null,o()},s)}}function jr(n){return n}function Br(n){return gt()?(yt(n),!0):!1}function gn(n,e=200,t={}){return Or(Hr(e,t),n)}function nt(n,e=200,t={}){if(e<=0)return n;const r=C(n.value),o=gn(()=>{r.value=n.value},e,t);return q(n,()=>o()),r}function yn(n,e,t){return q(n,(r,o,s)=>{r&&e(r,o,s)},t)}function Dr(n){var e;const t=ut(n);return(e=t==null?void 0:t.$el)!=null?e:t}const kn=mn?window:void 0;function ze(...n){let e,t,r,o;if(Nr(n[0])?([t,r,o]=n,e=kn):[e,t,r,o]=n,!e)return We;let s=We;const a=q(()=>Dr(e),i=>{s(),i&&(i.addEventListener(t,r,o),s=()=>{i.removeEventListener(t,r,o),s=We})},{immediate:!0,flush:"post"}),l=()=>{a(),s()};return Br(l),l}const Rt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},zt="__vueuse_ssr_handlers__";Rt[zt]=Rt[zt]||{};const Rr={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function zr(n={}){const{reactive:e=!1,target:t=kn,aliasMap:r=Rr,passive:o=!0,onEventFired:s=We}=n,a=He(new Set),l={toJSON(){return{}},current:a},i=e?He(l):l,h=new Set,_=new Set;function g(y,f){y in i&&(e?i[y]=f:i[y].value=f)}function k(){for(const y of _)g(y,!1)}function $(y,f){var N,B;const O=(N=y.key)==null?void 0:N.toLowerCase(),G=[(B=y.code)==null?void 0:B.toLowerCase(),O].filter(Boolean);O&&(f?a.add(O):a.delete(O));for(const K of G)_.add(K),g(K,f);O==="meta"&&!f?(h.forEach(K=>{a.delete(K),g(K,!1)}),h.clear()):typeof y.getModifierState=="function"&&y.getModifierState("Meta")&&f&&[...a,...G].forEach(K=>h.add(K))}ze(t,"keydown",y=>($(y,!0),s(y)),{passive:o}),ze(t,"keyup",y=>($(y,!1),s(y)),{passive:o}),ze("blur",k,{passive:!0}),ze("focus",k,{passive:!0});const I=new Proxy(i,{get(y,f,N){if(typeof f!="string")return Reflect.get(y,f,N);if(f=f.toLowerCase(),f in r&&(f=r[f]),!(f in i))if(/[+_-]/.test(f)){const O=f.split(/[+_-]/g).map(G=>G.trim());i[f]=V(()=>O.every(G=>u(I[G])))}else i[f]=C(!1);const B=Reflect.get(y,f,N);return e?u(B):B}});return I}var Ft;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(Ft||(Ft={}));var Fr=Object.defineProperty,Gt=Object.getOwnPropertySymbols,Gr=Object.prototype.hasOwnProperty,Wr=Object.prototype.propertyIsEnumerable,Wt=(n,e,t)=>e in n?Fr(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ur=(n,e)=>{for(var t in e||(e={}))Gr.call(e,t)&&Wt(n,t,e[t]);if(Gt)for(var t of Gt(e))Wr.call(e,t)&&Wt(n,t,e[t]);return n};const qr={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Ur({linear:jr},qr);function ce(n){return Array.isArray?Array.isArray(n):$n(n)==="[object Array]"}const Kr=1/0;function Qr(n){if(typeof n=="string")return n;let e=n+"";return e=="0"&&1/n==-Kr?"-0":e}function Zr(n){return n==null?"":Qr(n)}function se(n){return typeof n=="string"}function bn(n){return typeof n=="number"}function Jr(n){return n===!0||n===!1||Yr(n)&&$n(n)=="[object Boolean]"}function wn(n){return typeof n=="object"}function Yr(n){return wn(n)&&n!==null}function ne(n){return n!=null}function rt(n){return!n.trim().length}function $n(n){return n==null?n===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(n)}const Xr="Incorrect 'index' type",eo=n=>`Invalid value for key ${n}`,to=n=>`Pattern length exceeds max of ${n}.`,no=n=>`Missing ${n} property in key`,ro=n=>`Property 'weight' in key '${n}' must be a positive integer`,Ut=Object.prototype.hasOwnProperty;class oo{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(r=>{let o=Sn(r);t+=o.weight,this._keys.push(o),this._keyMap[o.id]=o,t+=o.weight}),this._keys.forEach(r=>{r.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Sn(n){let e=null,t=null,r=null,o=1,s=null;if(se(n)||ce(n))r=n,e=qt(n),t=dt(n);else{if(!Ut.call(n,"name"))throw new Error(no("name"));const a=n.name;if(r=a,Ut.call(n,"weight")&&(o=n.weight,o<=0))throw new Error(ro(a));e=qt(a),t=dt(a),s=n.getFn}return{path:e,id:t,weight:o,src:r,getFn:s}}function qt(n){return ce(n)?n:n.split(".")}function dt(n){return ce(n)?n.join("."):n}function so(n,e){let t=[],r=!1;const o=(s,a,l)=>{if(ne(s))if(!a[l])t.push(s);else{let i=a[l];const h=s[i];if(!ne(h))return;if(l===a.length-1&&(se(h)||bn(h)||Jr(h)))t.push(Zr(h));else if(ce(h)){r=!0;for(let _=0,g=h.length;_<g;_+=1)o(h[_],a,l+1)}else a.length&&o(h,a,l+1)}};return o(n,se(e)?e.split("."):e,0),r?t:t[0]}const ao={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},io={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(n,e)=>n.score===e.score?n.idx<e.idx?-1:1:n.score<e.score?-1:1},co={location:0,threshold:.6,distance:100},lo={useExtendedSearch:!1,getFn:so,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var A={...io,...ao,...co,...lo};const uo=/[^ ]+/g;function po(n=1,e=3){const t=new Map,r=Math.pow(10,e);return{get(o){const s=o.match(uo).length;if(t.has(s))return t.get(s);const a=1/Math.pow(s,.5*n),l=parseFloat(Math.round(a*r)/r);return t.set(s,l),l},clear(){t.clear()}}}class Mt{constructor({getFn:e=A.getFn,fieldNormWeight:t=A.fieldNormWeight}={}){this.norm=po(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((t,r)=>{this._keysMap[t.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,se(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}add(e){const t=this.size();se(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,r=this.size();t<r;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!ne(e)||rt(e))return;let r={v:e,i:t,n:this.norm.get(e)};this.records.push(r)}_addObject(e,t){let r={i:t,$:{}};this.keys.forEach((o,s)=>{let a=o.getFn?o.getFn(e):this.getFn(e,o.path);if(ne(a)){if(ce(a)){let l=[];const i=[{nestedArrIndex:-1,value:a}];for(;i.length;){const{nestedArrIndex:h,value:_}=i.pop();if(ne(_))if(se(_)&&!rt(_)){let g={v:_,i:h,n:this.norm.get(_)};l.push(g)}else ce(_)&&_.forEach((g,k)=>{i.push({nestedArrIndex:k,value:g})})}r.$[s]=l}else if(se(a)&&!rt(a)){let l={v:a,n:this.norm.get(a)};r.$[s]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Pn(n,e,{getFn:t=A.getFn,fieldNormWeight:r=A.fieldNormWeight}={}){const o=new Mt({getFn:t,fieldNormWeight:r});return o.setKeys(n.map(Sn)),o.setSources(e),o.create(),o}function ho(n,{getFn:e=A.getFn,fieldNormWeight:t=A.fieldNormWeight}={}){const{keys:r,records:o}=n,s=new Mt({getFn:e,fieldNormWeight:t});return s.setKeys(r),s.setIndexRecords(o),s}function Fe(n,{errors:e=0,currentLocation:t=0,expectedLocation:r=0,distance:o=A.distance,ignoreLocation:s=A.ignoreLocation}={}){const a=e/n.length;if(s)return a;const l=Math.abs(r-t);return o?a+l/o:l?1:a}function vo(n=[],e=A.minMatchCharLength){let t=[],r=-1,o=-1,s=0;for(let a=n.length;s<a;s+=1){let l=n[s];l&&r===-1?r=s:!l&&r!==-1&&(o=s-1,o-r+1>=e&&t.push([r,o]),r=-1)}return n[s-1]&&s-r>=e&&t.push([r,s-1]),t}const me=32;function _o(n,e,t,{location:r=A.location,distance:o=A.distance,threshold:s=A.threshold,findAllMatches:a=A.findAllMatches,minMatchCharLength:l=A.minMatchCharLength,includeMatches:i=A.includeMatches,ignoreLocation:h=A.ignoreLocation}={}){if(e.length>me)throw new Error(to(me));const _=e.length,g=n.length,k=Math.max(0,Math.min(r,g));let $=s,I=k;const y=l>1||i,f=y?Array(g):[];let N;for(;(N=n.indexOf(e,I))>-1;){let Y=Fe(e,{currentLocation:N,expectedLocation:k,distance:o,ignoreLocation:h});if($=Math.min(Y,$),I=N+_,y){let te=0;for(;te<_;)f[N+te]=1,te+=1}}I=-1;let B=[],O=1,G=_+g;const K=1<<_-1;for(let Y=0;Y<_;Y+=1){let te=0,Q=G;for(;te<Q;)Fe(e,{errors:Y,currentLocation:k+Q,expectedLocation:k,distance:o,ignoreLocation:h})<=$?te=Q:G=Q,Q=Math.floor((G-te)/2+te);G=Q;let be=Math.max(1,k-Q+1),ae=a?g:Math.min(k+Q,g)+_,L=Array(ae+2);L[ae+1]=(1<<Y)-1;for(let T=ae;T>=be;T-=1){let U=T-1,F=t[n.charAt(U)];if(y&&(f[U]=+!!F),L[T]=(L[T+1]<<1|1)&F,Y&&(L[T]|=(B[T+1]|B[T])<<1|1|B[T+1]),L[T]&K&&(O=Fe(e,{errors:Y,currentLocation:U,expectedLocation:k,distance:o,ignoreLocation:h}),O<=$)){if($=O,I=U,I<=k)break;be=Math.max(1,2*k-I)}}if(Fe(e,{errors:Y+1,currentLocation:k,expectedLocation:k,distance:o,ignoreLocation:h})>$)break;B=L}const ee={isMatch:I>=0,score:Math.max(.001,O)};if(y){const Y=vo(f,l);Y.length?i&&(ee.indices=Y):ee.isMatch=!1}return ee}function fo(n){let e={};for(let t=0,r=n.length;t<r;t+=1){const o=n.charAt(t);e[o]=(e[o]||0)|1<<r-t-1}return e}class Mn{constructor(e,{location:t=A.location,threshold:r=A.threshold,distance:o=A.distance,includeMatches:s=A.includeMatches,findAllMatches:a=A.findAllMatches,minMatchCharLength:l=A.minMatchCharLength,isCaseSensitive:i=A.isCaseSensitive,ignoreLocation:h=A.ignoreLocation}={}){if(this.options={location:t,threshold:r,distance:o,includeMatches:s,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:i,ignoreLocation:h},this.pattern=i?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const _=(k,$)=>{this.chunks.push({pattern:k,alphabet:fo(k),startIndex:$})},g=this.pattern.length;if(g>me){let k=0;const $=g%me,I=g-$;for(;k<I;)_(this.pattern.substr(k,me),k),k+=me;if($){const y=g-me;_(this.pattern.substr(y),y)}}else _(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:r}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let I={isMatch:!0,score:0};return r&&(I.indices=[[0,e.length-1]]),I}const{location:o,distance:s,threshold:a,findAllMatches:l,minMatchCharLength:i,ignoreLocation:h}=this.options;let _=[],g=0,k=!1;this.chunks.forEach(({pattern:I,alphabet:y,startIndex:f})=>{const{isMatch:N,score:B,indices:O}=_o(e,I,y,{location:o+f,distance:s,threshold:a,findAllMatches:l,minMatchCharLength:i,includeMatches:r,ignoreLocation:h});N&&(k=!0),g+=B,N&&O&&(_=[..._,...O])});let $={isMatch:k,score:k?g/this.chunks.length:1};return k&&r&&($.indices=_),$}}class ve{constructor(e){this.pattern=e}static isMultiMatch(e){return Kt(e,this.multiRegex)}static isSingleMatch(e){return Kt(e,this.singleRegex)}search(){}}function Kt(n,e){const t=n.match(e);return t?t[1]:null}class mo extends ve{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class go extends ve{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const t=e.indexOf(this.pattern)===-1;return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class yo extends ve{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class ko extends ve{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class bo extends ve{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class wo extends ve{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class Vn extends ve{constructor(e,{location:t=A.location,threshold:r=A.threshold,distance:o=A.distance,includeMatches:s=A.includeMatches,findAllMatches:a=A.findAllMatches,minMatchCharLength:l=A.minMatchCharLength,isCaseSensitive:i=A.isCaseSensitive,ignoreLocation:h=A.ignoreLocation}={}){super(e),this._bitapSearch=new Mn(e,{location:t,threshold:r,distance:o,includeMatches:s,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:i,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Ln extends ve{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t=0,r;const o=[],s=this.pattern.length;for(;(r=e.indexOf(this.pattern,t))>-1;)t=r+s,o.push([r,t-1]);const a=!!o.length;return{isMatch:a,score:a?0:1,indices:o}}}const pt=[mo,Ln,yo,ko,wo,bo,go,Vn],Qt=pt.length,$o=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,So="|";function Po(n,e={}){return n.split(So).map(t=>{let r=t.trim().split($o).filter(s=>s&&!!s.trim()),o=[];for(let s=0,a=r.length;s<a;s+=1){const l=r[s];let i=!1,h=-1;for(;!i&&++h<Qt;){const _=pt[h];let g=_.isMultiMatch(l);g&&(o.push(new _(g,e)),i=!0)}if(!i)for(h=-1;++h<Qt;){const _=pt[h];let g=_.isSingleMatch(l);if(g){o.push(new _(g,e));break}}}return o})}const Mo=new Set([Vn.type,Ln.type]);class Vo{constructor(e,{isCaseSensitive:t=A.isCaseSensitive,includeMatches:r=A.includeMatches,minMatchCharLength:o=A.minMatchCharLength,ignoreLocation:s=A.ignoreLocation,findAllMatches:a=A.findAllMatches,location:l=A.location,threshold:i=A.threshold,distance:h=A.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:r,minMatchCharLength:o,findAllMatches:a,ignoreLocation:s,location:l,threshold:i,distance:h},this.pattern=t?e:e.toLowerCase(),this.query=Po(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:o}=this.options;e=o?e:e.toLowerCase();let s=0,a=[],l=0;for(let i=0,h=t.length;i<h;i+=1){const _=t[i];a.length=0,s=0;for(let g=0,k=_.length;g<k;g+=1){const $=_[g],{isMatch:I,indices:y,score:f}=$.search(e);if(I){if(s+=1,l+=f,r){const N=$.constructor.type;Mo.has(N)?a=[...a,...y]:a.push(y)}}else{l=0,s=0,a.length=0;break}}if(s){let g={isMatch:!0,score:l/s};return r&&(g.indices=a),g}}return{isMatch:!1,score:1}}}const ht=[];function Lo(...n){ht.push(...n)}function vt(n,e){for(let t=0,r=ht.length;t<r;t+=1){let o=ht[t];if(o.condition(n,e))return new o(n,e)}return new Mn(n,e)}const qe={AND:"$and",OR:"$or"},_t={PATH:"$path",PATTERN:"$val"},ft=n=>!!(n[qe.AND]||n[qe.OR]),Co=n=>!!n[_t.PATH],xo=n=>!ce(n)&&wn(n)&&!ft(n),Zt=n=>({[qe.AND]:Object.keys(n).map(e=>({[e]:n[e]}))});function Cn(n,e,{auto:t=!0}={}){const r=o=>{let s=Object.keys(o);const a=Co(o);if(!a&&s.length>1&&!ft(o))return r(Zt(o));if(xo(o)){const i=a?o[_t.PATH]:s[0],h=a?o[_t.PATTERN]:o[i];if(!se(h))throw new Error(eo(i));const _={keyId:dt(i),pattern:h};return t&&(_.searcher=vt(h,e)),_}let l={children:[],operator:s[0]};return s.forEach(i=>{const h=o[i];ce(h)&&h.forEach(_=>{l.children.push(r(_))})}),l};return ft(n)||(n=Zt(n)),r(n)}function Io(n,{ignoreFieldNorm:e=A.ignoreFieldNorm}){n.forEach(t=>{let r=1;t.matches.forEach(({key:o,norm:s,score:a})=>{const l=o?o.weight:null;r*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(e?1:s))}),t.score=r})}function Ao(n,e){const t=n.matches;e.matches=[],ne(t)&&t.forEach(r=>{if(!ne(r.indices)||!r.indices.length)return;const{indices:o,value:s}=r;let a={indices:o,value:s};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function Eo(n,e){e.score=n.score}function To(n,e,{includeMatches:t=A.includeMatches,includeScore:r=A.includeScore}={}){const o=[];return t&&o.push(Ao),r&&o.push(Eo),n.map(s=>{const{idx:a}=s,l={item:e[a],refIndex:a};return o.length&&o.forEach(i=>{i(s,l)}),l})}class ye{constructor(e,t={},r){this.options={...A,...t},this.options.useExtendedSearch,this._keyStore=new oo(this.options.keys),this.setCollection(e,r)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof Mt))throw new Error(Xr);this._myIndex=t||Pn(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){!ne(e)||(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const t=[];for(let r=0,o=this._docs.length;r<o;r+=1){const s=this._docs[r];e(s,r)&&(this.removeAt(r),r-=1,o-=1,t.push(s))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:r,includeScore:o,shouldSort:s,sortFn:a,ignoreFieldNorm:l}=this.options;let i=se(e)?se(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Io(i,{ignoreFieldNorm:l}),s&&i.sort(a),bn(t)&&t>-1&&(i=i.slice(0,t)),To(i,this._docs,{includeMatches:r,includeScore:o})}_searchStringList(e){const t=vt(e,this.options),{records:r}=this._myIndex,o=[];return r.forEach(({v:s,i:a,n:l})=>{if(!ne(s))return;const{isMatch:i,score:h,indices:_}=t.searchIn(s);i&&o.push({item:s,idx:a,matches:[{score:h,value:s,norm:l,indices:_}]})}),o}_searchLogical(e){const t=Cn(e,this.options),r=(l,i,h)=>{if(!l.children){const{keyId:g,searcher:k}=l,$=this._findMatches({key:this._keyStore.get(g),value:this._myIndex.getValueForItemAtKeyId(i,g),searcher:k});return $&&$.length?[{idx:h,item:i,matches:$}]:[]}const _=[];for(let g=0,k=l.children.length;g<k;g+=1){const $=l.children[g],I=r($,i,h);if(I.length)_.push(...I);else if(l.operator===qe.AND)return[]}return _},o=this._myIndex.records,s={},a=[];return o.forEach(({$:l,i})=>{if(ne(l)){let h=r(t,l,i);h.length&&(s[i]||(s[i]={idx:i,item:l,matches:[]},a.push(s[i])),h.forEach(({matches:_})=>{s[i].matches.push(..._)}))}}),a}_searchObjectList(e){const t=vt(e,this.options),{keys:r,records:o}=this._myIndex,s=[];return o.forEach(({$:a,i:l})=>{if(!ne(a))return;let i=[];r.forEach((h,_)=>{i.push(...this._findMatches({key:h,value:a[_],searcher:t}))}),i.length&&s.push({idx:l,item:a,matches:i})}),s}_findMatches({key:e,value:t,searcher:r}){if(!ne(t))return[];let o=[];if(ce(t))t.forEach(({v:s,i:a,n:l})=>{if(!ne(s))return;const{isMatch:i,score:h,indices:_}=r.searchIn(s);i&&o.push({score:h,key:e,value:s,idx:a,norm:l,indices:_})});else{const{v:s,n:a}=t,{isMatch:l,score:i,indices:h}=r.searchIn(s);l&&o.push({score:i,key:e,value:s,norm:a,indices:h})}return o}}ye.version="6.6.2";ye.createIndex=Pn;ye.parseIndex=ho;ye.config=A;ye.parseQuery=Cn;Lo(Vo);const Jt=He({selectedNode:"",selectedGroup:"",search:"",dataValue:"",filtered:{count:0,items:new Map,groups:new Set}}),Ie=()=>({isSearching:V(()=>Jt.search!==""),...Zn(Jt)});function No(n){return{all:n=n||new Map,on:function(e,t){var r=n.get(e);r?r.push(t):n.set(e,[t])},off:function(e,t){var r=n.get(e);r&&(t?r.splice(r.indexOf(t)>>>0,1):n.set(e,[]))},emit:function(e,t){var r=n.get(e);r&&r.slice().map(function(o){o(t)}),(r=n.get("*"))&&r.slice().map(function(o){o(e,t)})}}}const Oo=No(),Ye=()=>({emitter:Oo});function Ho(n,e){let t=n.nextElementSibling;for(;t;){if(t.matches(e))return t;t=t.nextElementSibling}}function jo(n,e){let t=n.previousElementSibling;for(;t;){if(t.matches(e))return t;t=t.previousElementSibling}}const Bo=["command-theme"],Do={"command-root":""},Ro=b({name:"Command"}),zo=b({...Ro,props:{theme:{type:String,default:"default"},fuseOptions:{type:Object,default:()=>({threshold:.2,keys:["label"]})}},emits:["select-item"],setup(n,{emit:e}){const t=n,r='[command-item=""]',o="command-item-key",s='[command-group=""]',a="command-group-key",l='[command-group-heading=""]',i=`${r}:not([aria-disabled="true"])`,h=`${r}[aria-selected="true"]`,_="command-item-select",g="data-value";Te("theme",t.theme||"default");const{selectedNode:k,search:$,dataValue:I,filtered:y}=Ie(),{emitter:f}=Ye(),N=C(),B=nt(C(new Map),333),O=nt(C(new Set),333),G=nt(C(new Map)),K=V(()=>{const M=[];for(const[D,j]of B.value.entries())M.push({key:D,label:j});return M}),ee=V(()=>{const M=ye.createIndex(t.fuseOptions.keys,K.value);return new ye(K.value,t.fuseOptions,M)}),Y=()=>{var M,D,j;const W=te();W&&(((M=W.parentElement)==null?void 0:M.firstElementChild)===W&&((j=(D=W.closest(s))==null?void 0:D.querySelector(l))==null||j.scrollIntoView({block:"nearest"})),W.scrollIntoView({block:"nearest"}))},te=()=>{var M;return(M=N.value)==null?void 0:M.querySelector(h)},Q=(M=N.value)=>{const D=M==null?void 0:M.querySelectorAll(i);return D?Array.from(D):[]},be=()=>{var M;const D=(M=N.value)==null?void 0:M.querySelectorAll(s);return D?Array.from(D):[]},ae=()=>{const[M]=Q();M&&M.getAttribute(o)&&(k.value=M.getAttribute(o)||"")},L=M=>{const D=Q()[M];D&&(k.value=D.getAttribute(o)||"")},T=M=>{const D=te(),j=Q(),W=j.findIndex(Re=>Re===D),pe=j[W+M];pe?k.value=pe.getAttribute(o)||"":M>0?L(0):L(j.length-1)},U=M=>{const D=te();let j=D==null?void 0:D.closest(s),W=null;for(;j&&!W;)j=M>0?Ho(j,s):jo(j,s),W=j==null?void 0:j.querySelector(i);W?k.value=W.getAttribute(o)||"":T(M)},F=()=>L(0),we=()=>L(Q().length-1),Ee=M=>{M.preventDefault(),M.metaKey?we():M.altKey?U(1):T(1)},$e=M=>{M.preventDefault(),M.metaKey?F():M.altKey?U(-1):T(-1)},Z=M=>{switch(M.key){case"n":case"j":{M.ctrlKey&&Ee(M);break}case"ArrowDown":{Ee(M);break}case"p":case"k":{M.ctrlKey&&$e(M);break}case"ArrowUp":{$e(M);break}case"Home":{F();break}case"End":{we();break}case"Enter":{const D=te();if(D){const j=new Event(_);D.dispatchEvent(j)}}}},de=()=>{if(!$.value){y.value.count=O.value.size;return}y.value.groups=new Set("");const M=new Map,D=ee.value.search($.value).map(j=>j.item);for(const{key:j,label:W}of D)M.set(j,W);for(const[j,W]of G.value)for(const pe of W)M.get(pe)&&y.value.groups.add(j);ie(()=>{y.value.count=M.size,y.value.items=M})},fe=()=>{const M=Q(),D=be();for(const j of M){const W=j.getAttribute(o)||"",pe=j.getAttribute(g)||"";O.value.add(W),B.value.set(W,pe),y.value.count=B.value.size}for(const j of D){const W=Q(j),pe=j.getAttribute(a)||"",Re=new Set("");for(const Fn of W){const Gn=Fn.getAttribute(o)||"";Re.add(Gn)}G.value.set(pe,Re)}};q(()=>k.value,M=>{M&&ie(Y)},{deep:!0}),q(()=>$.value,M=>{de(),ie(ae)}),f.on("selectItem",M=>{e("select-item",M)});const tt=gn(M=>{M&&(fe(),ie(ae))},100);return f.on("rerenderList",tt),le(()=>{fe(),ae()}),(M,D)=>(c(),p("div",{class:R(n.theme),onKeydown:Z,ref_key:"commandRef",ref:N,"command-theme":n.theme},[d("div",Do,[v(M.$slots,"default")])],42,Bo))}}),Ae=(n,e)=>{const t=n.__vccOpts||n;for(const[r,o]of e)t[r]=o;return t},mt=Ae(zo,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/Command.vue"]]),Fo={"command-dialog":""},Go={"command-dialog-mask":""},Wo={"command-dialog-wrapper":""},Uo={"command-dialog-header":""},qo={"command-dialog-body":""},Ko={key:0,"command-dialog-footer":""},Qo=b({name:"Command.Dialog"}),Zo=b({...Qo,props:{visible:{type:Boolean,required:!0},theme:{type:String,required:!0}},emits:["select-item"],setup(n,{emit:e}){const t=n,{search:r,filtered:o}=Ie(),{emitter:s}=Ye(),a=C();s.on("selectItem",i=>{e("select-item",i)});const l=()=>{r.value="",o.value.count=0,o.value.items=new Map,o.value.groups=new Set};return yn(()=>t.visible,l),bt(l),(i,h)=>(c(),x(Qn,{to:"body",ref_key:"dialogRef",ref:a},[w(Je,{name:"command-dialog",appear:""},{default:m(()=>[n.visible?(c(),x(mt,{key:0,theme:n.theme},{default:m(()=>[d("div",Fo,[d("div",Go,[d("div",Wo,[d("div",Uo,[v(i.$slots,"header")]),d("div",qo,[v(i.$slots,"body")]),i.$slots.footer?(c(),p("div",Ko,[v(i.$slots,"footer")])):S("v-if",!0)])])])]),_:3},8,["theme"])):S("v-if",!0)]),_:3})],512))}}),Jo=Ae(Zo,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandDialog.vue"]]);let xn=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((e,t)=>(t&=63,t<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t>62?e+="-":e+="_",e),"");const Yo=["command-group-key","data-value"],Xo={key:0,"command-group-heading":""},es={"command-group-items":"",role:"group"},ts=b({name:"Command.Group"}),ns=b({...ts,props:{heading:{type:String,required:!0}},setup(n){const e=V(()=>`command-group-${xn()}`),{filtered:t,isSearching:r}=Ie(),o=V(()=>r.value?t.value.groups.has(e.value):!0);return(s,a)=>ln((c(),p("div",{"command-group":"",role:"presentation",key:u(e),"command-group-key":u(e),"data-value":n.heading},[n.heading?(c(),p("div",Xo,E(n.heading),1)):S("v-if",!0),d("div",es,[v(s.$slots,"default")])],8,Yo)),[[un,u(o)]])}}),rs=Ae(ns,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandGroup.vue"]]),os=["placeholder","value"],ss=b({name:"Command.Input"}),as=b({...ss,props:{placeholder:{type:String,required:!0},value:{type:String,required:!1}},emits:["input","update:value"],setup(n,{emit:e}){const t=C(null),{search:r}=Ie(),o=V(()=>r.value),s=a=>{const l=a,i=a.target;r.value=i==null?void 0:i.value,e("input",l),e("update:value",r.value)};return he(()=>{var a;(a=t.value)==null||a.focus()}),(a,l)=>(c(),p("input",{ref_key:"inputRef",ref:t,"command-input":"","auto-focus":"","auto-complete":"off","auto-correct":"off","spell-check":!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,placeholder:n.placeholder,value:u(o),onInput:s},null,40,os))}}),is=Ae(as,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandInput.vue"]]),cs=["aria-selected","aria-disabled","command-item-key"],ls=b({name:"Command.Item"}),us=b({...ls,props:{shortcut:{type:Array,required:!1},perform:{type:null,required:!1}},emits:["select"],setup(n,{emit:e}){const t=n,r="command-item-select",o="data-value",{current:s}=zr(),{selectedNode:a,filtered:l,isSearching:i}=Ie(),{emitter:h}=Ye(),_=C(),g=V(()=>`command-item-${xn()}`),k=V(()=>{const y=l.value.items.get(g.value);return i.value?y!==void 0:!0}),$=V(()=>Array.from(s)),I=()=>{var y;const f={key:g.value,value:((y=_.value)==null?void 0:y.getAttribute(o))||""};e("select",f),h.emit("selectItem",f)};return yn($,y=>{t.shortcut&&t.shortcut.length>0&&t.shortcut.every(f=>s.has(f.toLowerCase()))&&t.perform&&t.perform()}),he(()=>{var y;(y=_.value)==null||y.addEventListener(r,I)}),bt(()=>{var y;(y=_.value)==null||y.removeEventListener(r,I)}),(y,f)=>ln((c(),p("div",{ref_key:"itemRef",ref:_,"command-item":"",role:"option","aria-selected":u(a)===u(g),"aria-disabled":!u(k),key:u(g),"command-item-key":u(g),onClick:I},[v(y.$slots,"default")],8,cs)),[[un,u(k)]])}}),ds=Ae(us,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandItem.vue"]]),ps=b({name:"Command.List"}),hs=b({...ps,setup(n){const{emitter:e}=Ye(),t=C(),r=C();let o=null,s;return he(()=>{s=r.value;const a=t.value;s&&a&&(o=new ResizeObserver(l=>{ie(()=>{const i=s==null?void 0:s.offsetHeight;a==null||a.style.setProperty("--command-list-height",`${i==null?void 0:i.toFixed(1)}px`),e.emit("rerenderList",!0)})}),o.observe(s))}),bt(()=>{o!==null&&s&&o.unobserve(s)}),(a,l)=>(c(),p("div",{"command-list":"",role:"listbox","aria-label":"Suggestions",ref_key:"listRef",ref:t},[d("div",{"command-list-sizer":"",ref_key:"heightRef",ref:r},[v(a.$slots,"default")],512)],512))}}),vs=Ae(hs,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandList.vue"]]),_s=b({name:"Command.Empty",setup(n,{attrs:e,slots:t}){const{filtered:r}=Ie(),o=V(()=>r.value.count===0);return()=>o.value?Ue("div",{"command-empty":"",role:"presentation",...e},t):Ue("div",{"command-empty":"hidden",role:"presentation",style:{display:"none"},...e})}}),fs=b({name:"Command.Loading",setup(n,{attrs:e,slots:t}){return()=>Ue("div",{"command-loading":"",role:"progressbar",...e},t)}}),ms=b({name:"Command.Separator",setup(n,{attrs:e,slots:t}){return()=>Ue("div",{"command-separator":"",role:"separator",...e})}}),Se=Object.assign(mt,{Dialog:Jo,Empty:_s,Group:rs,Input:is,Item:ds,List:vs,Loading:fs,Separator:ms,Root:mt});var Yt;const In=typeof window<"u",gs=n=>typeof n=="string",An=()=>{};In&&((Yt=window==null?void 0:window.navigator)!=null&&Yt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function En(n){return typeof n=="function"?n():u(n)}function ys(n){return n}function ks(n){return gt()?(yt(n),!0):!1}function bs(n,e=!0){cn()?le(n):e?n():ie(n)}function ws(n){var e;const t=En(n);return(e=t==null?void 0:t.$el)!=null?e:t}const Vt=In?window:void 0;function Pe(...n){let e,t,r,o;if(gs(n[0])||Array.isArray(n[0])?([t,r,o]=n,e=Vt):[e,t,r,o]=n,!e)return An;Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]);const s=[],a=()=>{s.forEach(_=>_()),s.length=0},l=(_,g,k,$)=>(_.addEventListener(g,k,$),()=>_.removeEventListener(g,k,$)),i=q(()=>[ws(e),En(o)],([_,g])=>{a(),_&&s.push(...t.flatMap(k=>r.map($=>l(_,k,$,g))))},{immediate:!0,flush:"post"}),h=()=>{i(),a()};return ks(h),h}const Xt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},en="__vueuse_ssr_handlers__";Xt[en]=Xt[en]||{};const $s={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Ss(n={}){const{reactive:e=!1,target:t=Vt,aliasMap:r=$s,passive:o=!0,onEventFired:s=An}=n,a=He(new Set),l={toJSON(){return{}},current:a},i=e?He(l):l,h=new Set,_=new Set;function g(y,f){y in i&&(e?i[y]=f:i[y].value=f)}function k(){a.clear();for(const y of _)g(y,!1)}function $(y,f){var N,B;const O=(N=y.key)==null?void 0:N.toLowerCase(),K=[(B=y.code)==null?void 0:B.toLowerCase(),O].filter(Boolean);O&&(f?a.add(O):a.delete(O));for(const ee of K)_.add(ee),g(ee,f);O==="meta"&&!f?(h.forEach(ee=>{a.delete(ee),g(ee,!1)}),h.clear()):typeof y.getModifierState=="function"&&y.getModifierState("Meta")&&f&&[...a,...K].forEach(ee=>h.add(ee))}Pe(t,"keydown",y=>($(y,!0),s(y)),{passive:o}),Pe(t,"keyup",y=>($(y,!1),s(y)),{passive:o}),Pe("blur",k,{passive:!0}),Pe("focus",k,{passive:!0});const I=new Proxy(i,{get(y,f,N){if(typeof f!="string")return Reflect.get(y,f,N);if(f=f.toLowerCase(),f in r&&(f=r[f]),!(f in i))if(/[+_-]/.test(f)){const O=f.split(/[+_-]/g).map(G=>G.trim());i[f]=V(()=>O.every(G=>u(I[G])))}else i[f]=C(!1);const B=Reflect.get(y,f,N);return e?u(B):B}});return I}var tn;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(tn||(tn={}));var Ps=Object.defineProperty,nn=Object.getOwnPropertySymbols,Ms=Object.prototype.hasOwnProperty,Vs=Object.prototype.propertyIsEnumerable,rn=(n,e,t)=>e in n?Ps(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ls=(n,e)=>{for(var t in e||(e={}))Ms.call(e,t)&&rn(n,t,e[t]);if(nn)for(var t of nn(e))Vs.call(e,t)&&rn(n,t,e[t]);return n};const Cs={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Ls({linear:ys},Cs);function xs(n={}){const{window:e=Vt,initialWidth:t=1/0,initialHeight:r=1/0,listenOrientation:o=!0,includeScrollbar:s=!0}=n,a=C(t),l=C(r),i=()=>{e&&(s?(a.value=e.innerWidth,l.value=e.innerHeight):(a.value=e.document.documentElement.clientWidth,l.value=e.document.documentElement.clientHeight))};return i(),bs(i),Pe("resize",i,{passive:!0}),o&&Pe("orientationchange",i,{passive:!0}),{width:a,height:l}}const ot=C([{route:"/guide/quick start",meta:{title:"快速开始",date:"2023-05-22 19:23:47",tag:[],description:`\r
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
1.Lambda 表达式引入：Java 8 `,cover:""}},{route:"/project/图表绘制",meta:{title:"1.图表",date:"2023-08-14 14:16:10",tag:[],description:`\r
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
    title 平台开发流程\r`,cover:""}},{route:"/python/base",meta:{title:"",date:"2023-08-14 14:16:10",tag:[],cover:""}},{route:"/python/flask",meta:{title:"可以像pythonxx.pyaddxx调用，但是速度会非常满",date:"2023-05-27 18:45:43",tag:[],description:`\r
\r
\r
import sys\r
import pyautogui\r
 python index.py 2   能输出后面的值\r
type = sys.argv[1]\r
pyautogui.PAUS`,cover:""}},{route:"/python/llm",meta:{title:"4.LLM大语言模型",date:"2023-08-14 14:16:10",tag:[],description:`\r
\r
\r
\r
\r
 4.1.RMKV\r
\r
\`\`\`\r
Receptance Weighted Key Value (RWKV)\r
\r
其中 R, K, V 都由输入的线性变换生成，而 W 是参数。\r`,cover:""}},{route:"/know/know/10.项目具体代码优化",meta:{title:"10.项目具体代码优化",date:"2023-08-14 14:16:10",tag:[],description:`\r
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
`,cover:""}},{route:"/know/know/11.web3",meta:{title:"11.web3",date:"2023-08-14 14:16:10",tag:[],description:`\r
简介：Dapp。后端基本不需要，需要的是链端的知识 \r
\r
 11.1 基本概念\r
\r
- 用户可以通过数字密钥或钱包登录任何平台\r
- 前端与底层区块链网络交互，区块链协议和智能合约取代特定业务`,cover:""}},{route:"/know/know/1html",meta:{title:"1.HTML（浏览器机制）",date:"2023-05-23 21:20:09",tag:[],description:`\r
[[toc]]\r
\r
 1.1基础知识\r
\r
 1.1.1 HTML5新属性\r
\r
聋人的3D后台拖拽存储\r
\r
\`\`\`js\r
1. 8个语义标签：header, section, footer,`,cover:""}},{route:"/know/know/2javascript基础",meta:{title:"2.JavaScript基础",date:"2023-05-23 21:20:09",tag:[],description:`\r
[[TOC]]\r
\r
\r
\r
\`\`\`\r
发现一个网站可以搭建简单的node服务，https://runkit.com/ 。去到里面注册账号后输入类似\r
\r
export.endpoint =fun`,cover:""}},{route:"/know/know/3javascript基础",meta:{title:"2.1JavaScript基础|v8",date:"2023-05-23 21:20:09",tag:[],description:`\r
[[toc]]\r
\r
\r
\r
\r
\r
 1.2.js上传最终版\r
\r
\r
\r
 1.2.1 基本的dom结构\r
\r
简单的说就是input 中设置 type="file" 和 multiple \r`,cover:""}},{route:"/know/know/4javascript代码输出题",meta:{title:"2.9JavaScript代码输出题",date:"2023-05-23 21:20:09",tag:[],description:`\r
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
var da`,cover:""}},{route:"/know/know/4javascript手写题",meta:{title:"4.JS手写题",date:"2023-05-23 21:20:09",tag:[],description:`\r
[[toc]]\r
\r
 4.1.debounce | thorttle\r
\r
\`\`\`js\r
/**\r
 * \r
 * @param {*} fn \r
 * @param {*} time \r
 *`,cover:""}},{route:"/know/know/5javascript-es6",meta:{title:"3.JavaScript-es6",date:"2023-05-23 21:20:09",tag:[],description:`\r
[[toc]]\r
\r
 3.0 var  let const\r
\r
\`\`\`js\r
var 变量提升。只有声明没有赋值\r
\r
暂时性死区:let const没有声明变量却引入。实例化到被创造的过程。`,cover:""}},{route:"/know/know/6nginx",meta:{title:"6.nginx",date:"2023-08-14 14:16:11",tag:[],description:`\r
\r
\r
 6.1 基础\r
\r
\`\`\`js\r
--0.下载\r
http://nginx.org/en/download.html\r
解压之后直接按下面\r
\r
查看nginx 安装目录. \r
ps -`,cover:""}},{route:"/know/know/6ts",meta:{title:"2.2.ts",date:"2023-05-23 21:20:09",tag:[],description:`\r
[[toc]]\r
\r
https://www.typescriptlang.org/play?code/FAAhQ\r
\r
 2.1 基本\r
\r
 2.1.0 安装\r
\r
\`\`\`shell\r
npm`,cover:""}},{route:"/know/know/7css",meta:{title:"5.CSS",date:"2023-05-23 21:20:09",tag:[],description:`\r
[[toc]]\r
\r
 5.1 基础\r
\r
 5.1.1 border-box |  content-box   \r
\r
\`\`\`js\r
--1.怪异盒子模型（ie盒子）：box-sizing: b`,cover:""}},{route:"/know/know/8bug",meta:{title:"6.bug|脚本工具",date:"2023-05-23 21:20:09",tag:[],description:`\r
[[toc]]\r
\r
 6.1 nginx\r
\r
\r
\r
 6.1.1 nginx 缓存的bug\r
\r
\`\`\`shell\r
p：配置了 反向代理\r
location /api/ {\r
	proxy`,cover:""}},{route:"/know/know/9shell",meta:{title:"9.shell|CICD",date:"2023-08-14 14:16:11",tag:[],description:`\r
[[toc]]\r
\r
 9.1 基础\r
\r
 9.1.1 循环\r
\r
\`\`\`shell\r
echo "请输入你想沟通的人数"\r
read n\r
count=1\r
while ((count<=n)`,cover:""}},{route:"/know/优化/11.webcomponent",meta:{title:"",date:"2023-08-14 14:16:11",tag:[],cover:""}},{route:"/know/优化/12.pwa",meta:{title:"",date:"2023-08-14 14:16:11",tag:[],cover:""}},{route:"/know/优化/1性能优化和安全",meta:{title:"1.性能优化与安全",date:"2023-05-22 19:23:47",tag:[],description:`\r
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
将恶意script代码植入页面中，需要对输`,cover:""}},{route:"/know/优化/2webpack",meta:{title:"2.webpack",date:"2023-05-22 19:23:47",tag:[],description:`\r
[[toc]]\r
\r
\r
\r
\r
\r
 6.0 手写webpack\r
\r
\`\`\`js\r
生成bundle.js\r
文件大概是这样\r
(functoin (modules)\r
 {处理模块加载 \r
`,cover:""}},{route:"/know/优化/3算法",meta:{title:"3.实用算法|设计模式",date:"2023-05-22 19:23:47",tag:[],description:`\r
[[toc]]\r
\r
 7.1 时间复杂度\r
\r
<img src="https://cdn.jsdelivr.net/npm/frontimagepackage/blog/%E9%9D%A2%E`,cover:""}},{route:"/know/优化/5npm,组件库构造",meta:{title:"5.组件库构建|脚手架建设",date:"2023-05-22 19:23:47",tag:[],description:`\r
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
0.webrtc 是 用户通过 nat，stun，turn经过信令服务器交换STUN和TURN来进行和其他人所建立p`,cover:""}},{route:"/know/优化/9wasm",meta:{title:"9.webassembly",date:"2023-08-14 14:16:11",tag:[],description:`\r
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
3.将一个场景的渲染结果作为另一个`,cover:""}},{route:"/know/框架/16.echart",meta:{title:"16.echart",date:"2023-08-14 14:16:12",tag:[],description:`\r
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
  righ`,cover:""}},{route:"/know/框架/1vue",meta:{title:"1.vue|主流方案对比",date:"2023-05-22 19:23:47",tag:[],description:`\r
[[toc]]\r
\r
\r
\r
 1.0 经典八股\r
\r
 1.0.1 nexttick原理\r
\r
\`\`\`\r
【1】nextTick 中其实就是封装了异步代码。（promise.then.resol`,cover:""}},{route:"/know/框架/2react",meta:{title:"2.react",date:"2023-05-30 15:02:16",tag:[],description:`\r
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
\r`,cover:""}},{route:"/know/框架/5vue3",meta:{title:"5.vue3",date:"2023-05-22 19:23:47",tag:[],description:`\r
[[toc]]\r
\r
\r
\r
 5.？奇奇怪怪的报错\r
\r
\`\`\`js\r
--1.Type number trivially inferred from a number literal, rem`,cover:""}},{route:"/know/框架/7python",meta:{title:"7.python",date:"2023-05-22 19:23:47",tag:[],description:`\r
\r
\r
 7.1 anconda \r
\r
\`\`\`js\r
--1.去到这个网站然后下载，注意只为我安装就可以添加到环境变量\r
https://repo.anaconda.com/archive/\r
`,cover:""}},{route:"/know/框架/7tensorFlow",meta:{title:"7.tensorFlow.js",date:"2023-08-14 14:16:12",tag:[],description:`\r
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
\r`,cover:""}},{route:"/know/框架/8mediapipe",meta:{title:"mediapipe",date:"2023-08-14 14:16:12",tag:[],description:`\r
<img src="./img/hand-landmarks.png"/\r
\r
<img src="./img/body-landmarks.png"/>\r
\r
<img src="./img/f`,cover:""}},{route:"/know/计算机基础/10.加密",meta:{title:"",date:"2023-08-14 14:16:12",tag:[],cover:""}},{route:"/know/计算机基础/1计算机网络",meta:{title:"1.计算机网络",date:"2023-05-22 19:23:47",tag:[],description:`\r
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
跟踪图像中的特征点并使用它们，它用于估`,cover:""}},{route:"/supper/3D数字孪生/4three数据大屏",meta:{title:"4.数据大屏自适应",date:"2023-05-22 20:27:56",tag:[],description:`\r
[[toc]]\r
\r
大屏等在不同尺寸下面的自适应的解决。百度大屏等，他们都采用了css3的缩放\`transform: scale(X)\`属性。相比较别的乱七八糟的方法。我们只要监听浏览器的窗口大`,cover:""}},{route:"/supper/3D数字孪生/5threejs的性能优化",meta:{title:"5.threejs的性能优化",date:"2023-05-22 20:27:56",tag:[],description:`\r
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
 js-cookie是一个简单的，轻量级的处理cookies的js  这玩意我一般和v`,cover:""}},{route:"/supper/功能/10数据大屏自适应",meta:{title:"10.数据大屏自适应",date:"2023-05-22 20:27:56",tag:[],description:`\r
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
\`\``,cover:""}},{route:"/supper/工具基础/14.vscode",meta:{title:"14.vscode的snippet",date:"2023-08-14 14:16:14",tag:[],description:`\r
快速 生成 \r
\r
https://snippet-generator.app/\r
\r
 14.1 基本格式\r
\r
\`\`\`json\r
{\r
	"选择填入": {\r
		"prefix": "rea`,cover:""}},{route:"/supper/工具基础/16.代码高亮",meta:{title:"16.代码高亮",date:"2023-08-14 14:16:14",tag:[],description:`\r
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
当多人合作的时候`,cover:""}},{route:"/supper/工具基础/2用gitee连接ssh,linux服务器",meta:{title:"1.linux环境",date:"2023-05-22 20:27:56",tag:[],description:`yum -y install policycoreutils openssh-server openssh-clients postfix\r
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
gi`,cover:"https://data.jsdelivr.com/v1/package/gh/yilaikesi/frontImgPackage/badge)](https://www.jsdelivr.com/package/gh/yilaikesi/frontImgPackage"}},{route:"/supper/工具基础/4git的基本使用",meta:{title:"4.git的基本使用",date:"2023-05-23 21:20:09",tag:[],description:`\r
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
apache（安卓，必须带一个商标声明）`,cover:""}},{route:"/supper/工程化/2webpack的配置",meta:{title:"2.webpack的配置",date:"2023-05-22 20:27:56",tag:[],description:`\r
[[toc]]\r
\r
\r
vue.config.js 是⼀个可选的配置⽂件，如果项⽬的 (和 package.json 同级的) 根⽬录中存在这个⽂件，那么它会被 @vue/cli-service`,cover:""}},{route:"/supper/工程化/3关于一些自动化脚本",meta:{title:"3.关于一些自动化脚本(githook&&)",date:"2023-05-22 20:27:56",tag:[],description:`\r
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
//2.c`,cover:""}}]),Is={customSearchQuery:function(e){return e.replace(/[\u4e00-\u9fa5]/g," $& ").replace(/\s+/g," ").trim()}};function As(n,e="yyyy-MM-dd hh:mm:ss"){n instanceof Date||(n=new Date(n));const t={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,`${n.getFullYear()}`.substr(4-RegExp.$1.length)));for(const r in t)new RegExp(`(${r})`).test(e)&&(e=e.replace(RegExp.$1,RegExp.$1.length===1?t[r]:`00${t[r]}`.substr(`${t[r]}`.length)));return e}const Es={},Ts={width:"594",height:"112",viewBox:"0 0 594 112",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ns=dn('<path d="M147.8 111.2H164V77.5998H164.6C164.6 77.5998 170.6 87.1998 183.2 87.1998C197 87.1998 209.6 74.5998 209.6 56.5998C209.6 38.5998 197 25.9998 183.2 25.9998C170.6 25.9998 164.6 35.5998 164.6 35.5998H164V27.1998H147.8V111.2ZM178.4 72.1998C170 72.1998 163.4 65.5998 163.4 56.5998C163.4 47.5998 170 40.9998 178.4 40.9998C186.8 40.9998 193.4 47.5998 193.4 56.5998C193.4 65.5998 186.8 72.1998 178.4 72.1998Z" fill="black"></path><path d="M230.628 87.1998C242.028 87.1998 248.028 78.7998 248.028 78.7998H248.628V85.9998C252.228 85.9998 264.828 85.9998 264.828 85.9998V49.3998C264.828 36.1998 254.628 25.9998 239.628 25.9998C224.028 25.9998 215.628 37.3998 215.628 37.3998L225.228 46.9998C225.228 46.9998 230.028 40.3998 238.428 40.3998C244.428 40.3998 248.028 43.9998 248.628 48.1998L230.028 51.5598C219.228 53.4798 212.628 60.7998 212.628 70.3998C212.628 79.9998 219.828 87.1998 230.628 87.1998ZM236.028 73.9998C231.228 73.9998 228.828 71.5998 228.828 67.9998C228.828 64.9998 231.228 62.7198 235.428 61.9998L248.628 59.5998V60.7998C248.628 68.5998 243.228 73.9998 236.028 73.9998Z" fill="black"></path><path d="M299.033 111.2C317.633 111.2 330.833 97.9998 330.833 79.9998V27.1998H314.633V35.5998H314.033C314.033 35.5998 308.633 25.9998 296.033 25.9998C282.833 25.9998 270.833 37.9998 270.833 55.3998C270.833 72.7998 282.833 84.7998 296.033 84.7998C308.633 84.7998 314.033 75.1998 314.033 75.1998H314.633V79.9998C314.633 89.5998 308.033 96.1998 299.033 96.1998C289.433 96.1998 283.433 88.9998 283.433 88.9998L273.233 99.1998C273.233 99.1998 281.633 111.2 299.033 111.2ZM300.833 69.7998C293.033 69.7998 287.033 63.7998 287.033 55.3998C287.033 46.9998 293.033 40.9998 300.833 40.9998C308.633 40.9998 314.633 46.9998 314.633 55.3998C314.633 63.7998 308.633 69.7998 300.833 69.7998Z" fill="black"></path><path d="M367.986 87.1998C384.186 87.1998 393.186 77.5998 393.186 77.5998L384.786 66.1998C384.786 66.1998 379.386 72.7998 369.186 72.7998C360.186 72.7998 355.386 67.9998 353.586 62.5998H396.186C396.186 62.5998 396.786 59.5998 396.786 55.3998C396.786 39.1998 383.586 25.9998 367.386 25.9998C350.586 25.9998 336.786 39.7998 336.786 56.5998C336.786 73.3998 350.586 87.1998 367.986 87.1998ZM353.586 50.5998C355.386 45.1998 360.186 40.3998 366.786 40.3998C373.386 40.3998 378.186 45.1998 379.986 50.5998H353.586Z" fill="black"></path><path d="M406.423 85.9998H422.624V43.3998H444.224V85.9998H460.423V28.3998H422.624V24.7998C422.624 19.3998 425.624 16.3998 430.423 16.3998C433.423 16.3998 435.823 17.5998 435.823 17.5998V2.5998C435.823 2.5998 431.624 0.799805 426.224 0.799805C414.224 0.799805 406.423 8.59981 406.423 22.3998V28.3998H397.423V43.3998H406.423V85.9998ZM452.263 19.3998C457.423 19.3998 461.624 15.1998 461.624 10.3998C461.624 5.59981 457.424 1.3998 452.384 1.3998C447.224 1.3998 443.023 5.59981 443.023 10.3998C443.023 15.1998 447.223 19.3998 452.263 19.3998Z" fill="black"></path><path d="M470.652 85.9998H486.852V54.7998C486.852 46.9998 492.252 41.5998 499.452 41.5998C506.052 41.5998 510.252 45.7998 510.252 52.9998V85.9998H526.452V50.5998C526.452 35.5998 516.852 25.9998 504.852 25.9998C493.452 25.9998 487.452 35.5998 487.452 35.5998H486.852V27.1998H470.652V85.9998Z" fill="black"></path><path d="M557.819 87.1998C570.419 87.1998 576.419 77.5998 576.419 77.5998H577.019V85.9998H593.219V1.9998H577.019V35.5998H576.419C576.419 35.5998 570.419 25.9998 557.819 25.9998C544.019 25.9998 531.419 38.5998 531.419 56.5998C531.419 74.5998 544.019 87.1998 557.819 87.1998ZM562.619 72.1998C554.219 72.1998 547.619 65.5998 547.619 56.5998C547.619 47.5998 554.219 40.9998 562.619 40.9998C571.019 40.9998 577.619 47.5998 577.619 56.5998C577.619 65.5998 571.019 72.1998 562.619 72.1998Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M60 96.9999C93.1371 96.9999 120 81.8416 120 63.1428V50.8311H115.91C107.182 38.2198 85.4398 29.2856 60 29.2856C34.5602 29.2856 12.8183 38.2198 4.09026 50.8311H0V63.1428C0 81.8416 26.8629 96.9999 60 96.9999Z" fill="black"></path><path d="M116 52C116 59.317 110.727 66.7404 100.454 72.5615C90.3014 78.3149 76.0069 82 60 82C43.9931 82 29.6986 78.3149 19.5456 72.5615C9.2731 66.7404 4 59.317 4 52C4 44.6831 9.2731 37.2596 19.5456 31.4385C29.6986 25.6851 43.9931 22 60 22C76.0069 22 90.3014 25.6851 100.454 31.4385C110.727 37.2596 116 44.6831 116 52Z" fill="white" stroke="black" stroke-width="8"></path><path d="M57.8864 72.0605L87.2817 41.837C88.6253 40.4556 87.43 38.1599 85.5278 38.4684L26.0819 48.1083C23.9864 48.4481 23.794 51.3882 25.8273 51.9982L46.7151 58.2645C47.2181 58.4154 47.6415 58.7581 47.894 59.2185L54.6991 71.6277C55.3457 72.8069 56.9487 73.0246 57.8864 72.0605Z" fill="black"></path><ellipse cx="58" cy="53.5" rx="7" ry="4.5" fill="white"></ellipse>',11),Os=[Ns];function Hs(n,e){return c(),p("svg",Ts,Os)}const js=P(Es,[["render",Hs]]),Lt=n=>(re("data-v-e09e7552"),n=n(),oe(),n),Bs={class:"blog-search","data-pagefind-ignore":"all"},Ds=Lt(()=>d("svg",{width:"14",height:"14",viewBox:"0 0 20 20"},[d("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),Rs={key:0,class:"search-tip"},zs={key:1,class:"metaKey"},Fs={class:"search-dialog"},Gs={class:"link"},Ws={class:"title"},Us={key:0,class:"date"},qs=["innerHTML"],Ks={class:"command-palette-logo"},Qs={href:"https://github.com/cloudcannon/pagefind",target:"_blank",rel:"noopener noreferrer"},Zs=Lt(()=>d("span",{class:"command-palette-Label"},"Search by",-1)),Js=Lt(()=>d("ul",{class:"command-palette-commands"},[d("li",null,[d("kbd",{class:"command-palette-commands-key"},[d("svg",{width:"15",height:"15","aria-label":"Enter key",role:"img"},[d("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[d("path",{d:"M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"})])])]),d("span",{class:"command-palette-Label"},"to select")]),d("li",null,[d("kbd",{class:"command-palette-commands-key"},[d("svg",{width:"15",height:"15","aria-label":"Arrow down",role:"img"},[d("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[d("path",{d:"M7.5 3.5v8M10.5 8.5l-3 3-3-3"})])])]),d("kbd",{class:"command-palette-commands-key"},[d("svg",{width:"15",height:"15","aria-label":"Arrow up",role:"img"},[d("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[d("path",{d:"M7.5 11.5v-8M10.5 6.5l-3-3-3 3"})])])]),d("span",{class:"command-palette-Label"},"to navigate")]),d("li",null,[d("kbd",{class:"command-palette-commands-key"},[d("svg",{width:"15",height:"15","aria-label":"Escape key",role:"img"},[d("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[d("path",{d:"M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"})])])]),d("span",{class:"command-palette-Label"},"to close")])],-1)),Ys=b({__name:"Search",setup(n){Jn(L=>({dba016e0:l.value}));const e=Is,{localeIndex:t}=at(),r=V(()=>{var L;return{...e,...((L=e==null?void 0:e.locales)==null?void 0:L[t.value])||{}}}),o=V(()=>{var L;return((L=r.value)==null?void 0:L.showDate)??!0}),s=xs(),a=V(()=>s.width.value<760),l=V(()=>a.value?0:1),i=V(()=>{var L;return(L=r.value)!=null&&L.heading?r.value.heading.replace(/\{\{searchResult\}\}/,f.value.length):`Total: ${f.value.length} search results.`}),h=C("");le(()=>{h.value=/(Mac|iPhone|iPod|iPad)/i.test(navigator==null?void 0:navigator.platform)?"⌘":"Ctrl"});const _=C(!1),g=C(""),k=Ss({passive:!1,onEventFired(L){L.ctrlKey&&L.key==="k"&&L.type==="keydown"&&L.preventDefault()}}),$=k["Meta+K"],I=k["Ctrl+K"],y=k.Escape;q($,L=>{L&&(_.value=!0)}),q(I,L=>{L&&(_.value=!0)}),q(y,L=>{L&&(_.value=!1)});const f=C([]),N=()=>{if(!g.value){f.value=[];return}f.value=ot.value.filter(L=>`${L.meta.description}${L.meta.title}`.includes(g.value)).map(L=>{var T,U;return{...L,meta:{...L.meta,description:((U=(T=L.meta)==null?void 0:T.description)==null?void 0:U.replace(new RegExp(`(${g.value})`,"g"),"<mark>$1</mark>"))||""}}}),f.value.sort((L,T)=>+new Date(T.meta.date)-+new Date(L.meta.date))},B=V(()=>{var L;return((L=r.value)==null?void 0:L.resultOptimization)??!0});q(()=>g.value,async()=>{var L,T,U;if(!((L=window==null?void 0:window.__pagefind__)!=null&&L.search))N();else{const F=typeof r.value.customSearchQuery=="function"?r.value.customSearchQuery(g.value):g.value;await((U=(T=window==null?void 0:window.__pagefind__)==null?void 0:T.search)==null?void 0:U.call(T,F).then(async we=>{const Ee=await Promise.all(we.results.map(Z=>Z.data()));let $e=[];B.value?ot.value.forEach(Z=>{const de=Ee.find(fe=>fe.url.startsWith(Me(Z.route)));de&&$e.push({...Z,meta:{...Z.meta,description:de.excerpt}})}):$e=Ee.map(Z=>{var fe;const de=ot.value.find(tt=>Z.url.startsWith(Me(tt.route)));return de?{...de,route:Z.url,meta:{...de.meta,description:Z.excerpt}}:{route:Z.url,meta:{title:Z.meta.title,description:Z.excerpt,date:(fe=Z==null?void 0:Z.meta)==null?void 0:fe.date}}}),f.value=$e.filter(r.value.filter??(()=>!0))}))}ie(()=>{document.querySelectorAll('div[aria-disabled="true"]').forEach(F=>{F.setAttribute("aria-disabled","false")})})});const O=L=>{L.target===L.currentTarget&&(_.value=!1)};q(()=>_.value,L=>{var T;L?ie(()=>{var U;(U=document.querySelector("div[command-dialog-mask]"))==null||U.addEventListener("click",O)}):(T=document.querySelector("div[command-dialog-mask]"))==null||T.removeEventListener("click",O)});const G=C(999),K=C(0),ee=V(()=>{const T=K.value%Math.ceil(f.value.length/G.value)*G.value;return f.value.slice(T,T+G.value)}),Y=Yn(),te=xe(),Q=L=>{_.value=!1,te.path!==L.value&&Y.go(L.value)},{lang:be}=at(),ae=V(()=>r.value.langReload??!0);return q(()=>be.value,()=>{ae.value&&window.location.reload()}),(L,T)=>{var U;return c(),p("div",Bs,[d("div",{class:"nav-search-btn-wait",onClick:T[0]||(T[0]=F=>_.value=!0)},[Ds,a.value?S("",!0):(c(),p("span",Rs,E(((U=r.value)==null?void 0:U.btnPlaceholder)||"Search"),1)),a.value?S("",!0):(c(),p("span",zs,E(h.value)+" K ",1))]),w(u(Se).Dialog,{visible:_.value,theme:"algolia"},Xn({header:m(()=>{var F;return[w(u(Se).Input,{value:g.value,"onUpdate:value":T[1]||(T[1]=we=>g.value=we),placeholder:((F=r.value)==null?void 0:F.placeholder)||"Search Docs"},null,8,["value","placeholder"])]}),body:m(()=>[d("div",Fs,[w(u(Se).List,null,{default:m(()=>[f.value.length?(c(),x(u(Se).Group,{key:1,heading:i.value},{default:m(()=>[(c(!0),p(z,null,X(ee.value,F=>(c(),x(u(Se).Item,{"data-value":B.value?u(Me)(F.route):F.route,key:F.route,onSelect:Q},{default:m(()=>[d("div",Gs,[d("div",Ws,[d("span",null,E(F.meta.title),1),o.value&&F.meta.date?(c(),p("span",Us,E(u(As)(F.meta.date,"yyyy-MM-dd")),1)):S("",!0)]),d("div",{class:"des",innerHTML:F.meta.description},null,8,qs)])]),_:2},1032,["data-value"]))),128))]),_:1},8,["heading"])):(c(),x(u(Se).Empty,{key:0},{default:m(()=>{var F;return[J(E(((F=r.value)==null?void 0:F.emptyText)||"No results found."),1)]}),_:1}))]),_:1})])]),_:2},[f.value.length?{name:"footer",fn:m(()=>[d("div",Ks,[d("a",Qs,[Zs,w(js,{style:{width:"77px"}})])]),Js]),key:"0"}:void 0]),1032,["visible"])])}}});const Xs=P(Ys,[["__scopeId","data-v-e09e7552"]]),ea={},ta={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",height:"24px",viewBox:"0 0 24 24",width:"24px"},na=d("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),ra=d("path",{d:"M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"},null,-1),oa=[na,ra];function sa(n,e){return c(),p("svg",ta,oa)}const aa=P(ea,[["render",sa]]),ia=b({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(n){const e=n,t=V(()=>e.tag??e.href?"a":"span"),r=V(()=>e.href&&pn.test(e.href));return(o,s)=>(c(),x(Ve(t.value),{class:R(["VPLink",{link:o.href}]),href:o.href?u(Be)(o.href):void 0,target:o.target||(r.value?"_blank":void 0),rel:o.rel||(r.value?"noreferrer":void 0)},{default:m(()=>[v(o.$slots,"default",{},void 0,!0),r.value&&!o.noIcon?(c(),x(aa,{key:0,class:"icon"})):S("",!0)]),_:3},8,["class","href","target","rel"]))}});const _e=P(ia,[["__scopeId","data-v-8f4dc553"]]),ca=b({__name:"VPNavBarMenuLink",props:{item:{}},setup(n){const{page:e}=H();return(t,r)=>(c(),x(_e,{class:R({VPNavBarMenuLink:!0,active:u(Ce)(u(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,tabindex:"0"},{default:m(()=>[J(E(t.item.text),1)]),_:1},8,["class","href","target","rel"]))}});const la=P(ca,[["__scopeId","data-v-5e623618"]]),Ct=C();let Tn=!1,st=0;function ua(n){const e=C(!1);if(er){!Tn&&da(),st++;const t=q(Ct,r=>{var o,s,a;r===n.el.value||(o=n.el.value)!=null&&o.contains(r)?(e.value=!0,(s=n.onFocus)==null||s.call(n)):(e.value=!1,(a=n.onBlur)==null||a.call(n))});kt(()=>{t(),st--,st||pa()})}return an(e)}function da(){document.addEventListener("focusin",Nn),Tn=!0,Ct.value=document.activeElement}function pa(){document.removeEventListener("focusin",Nn)}function Nn(){Ct.value=document.activeElement}const ha={},va={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},_a=d("path",{d:"M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"},null,-1),fa=[_a];function ma(n,e){return c(),p("svg",va,fa)}const On=P(ha,[["render",ma]]),ga={},ya={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},ka=d("circle",{cx:"12",cy:"12",r:"2"},null,-1),ba=d("circle",{cx:"19",cy:"12",r:"2"},null,-1),wa=d("circle",{cx:"5",cy:"12",r:"2"},null,-1),$a=[ka,ba,wa];function Sa(n,e){return c(),p("svg",ya,$a)}const Pa=P(ga,[["render",Sa]]),Ma={class:"VPMenuLink"},Va=b({__name:"VPMenuLink",props:{item:{}},setup(n){const{page:e}=H();return(t,r)=>(c(),p("div",Ma,[w(_e,{class:R({active:u(Ce)(u(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel},{default:m(()=>[J(E(t.item.text),1)]),_:1},8,["class","href","target","rel"])]))}});const Xe=P(Va,[["__scopeId","data-v-2f2cfafc"]]),La={class:"VPMenuGroup"},Ca={key:0,class:"title"},xa=b({__name:"VPMenuGroup",props:{text:{},items:{}},setup(n){return(e,t)=>(c(),p("div",La,[e.text?(c(),p("p",Ca,E(e.text),1)):S("",!0),(c(!0),p(z,null,X(e.items,r=>(c(),p(z,null,["link"in r?(c(),x(Xe,{key:0,item:r},null,8,["item"])):S("",!0)],64))),256))]))}});const Ia=P(xa,[["__scopeId","data-v-69e747b5"]]),Aa={class:"VPMenu"},Ea={key:0,class:"items"},Ta=b({__name:"VPMenu",props:{items:{}},setup(n){return(e,t)=>(c(),p("div",Aa,[e.items?(c(),p("div",Ea,[(c(!0),p(z,null,X(e.items,r=>(c(),p(z,{key:r.text},["link"in r?(c(),x(Xe,{key:0,item:r},null,8,["item"])):(c(),x(Ia,{key:1,text:r.text,items:r.items},null,8,["text","items"]))],64))),128))])):S("",!0),v(e.$slots,"default",{},void 0,!0)]))}});const Na=P(Ta,[["__scopeId","data-v-e7ea1737"]]),Oa=["aria-expanded","aria-label"],Ha={key:0,class:"text"},ja={class:"menu"},Ba=b({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(n){const e=C(!1),t=C();ua({el:t,onBlur:r});function r(){e.value=!1}return(o,s)=>(c(),p("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:s[1]||(s[1]=a=>e.value=!0),onMouseleave:s[2]||(s[2]=a=>e.value=!1)},[d("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":o.label,onClick:s[0]||(s[0]=a=>e.value=!e.value)},[o.button||o.icon?(c(),p("span",Ha,[o.icon?(c(),x(Ve(o.icon),{key:0,class:"option-icon"})):S("",!0),J(" "+E(o.button)+" ",1),w(On,{class:"text-icon"})])):(c(),x(Pa,{key:1,class:"icon"}))],8,Oa),d("div",ja,[w(Na,{items:o.items},{default:m(()=>[v(o.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}});const xt=P(Ba,[["__scopeId","data-v-764effdf"]]),Da=b({__name:"VPNavBarMenuGroup",props:{item:{}},setup(n){const{page:e}=H();return(t,r)=>(c(),x(xt,{class:R({VPNavBarMenuGroup:!0,active:u(Ce)(u(e).relativePath,t.item.activeMatch,!!t.item.activeMatch)}),button:t.item.text,items:t.item.items},null,8,["class","button","items"]))}}),Ra=n=>(re("data-v-7f418b0f"),n=n(),oe(),n),za={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Fa=Ra(()=>d("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),Ga=b({__name:"VPNavBarMenu",setup(n){const{theme:e}=H();return(t,r)=>u(e).nav?(c(),p("nav",za,[Fa,(c(!0),p(z,null,X(u(e).nav,o=>(c(),p(z,{key:o.text},["link"in o?(c(),x(la,{key:0,item:o},null,8,["item"])):(c(),x(Da,{key:1,item:o},null,8,["item"]))],64))),128))])):S("",!0)}});const Wa=P(Ga,[["__scopeId","data-v-7f418b0f"]]),Ua={},qa={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Ka=d("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),Qa=d("path",{d:" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",class:"css-c4d79v"},null,-1),Za=[Ka,Qa];function Ja(n,e){return c(),p("svg",qa,Za)}const Hn=P(Ua,[["render",Ja]]),Ya={class:"items"},Xa={class:"title"},ei=b({__name:"VPNavBarTranslations",setup(n){const{theme:e}=H(),{localeLinks:t,currentLang:r}=De({correspondingLink:!0});return(o,s)=>u(t).length&&u(r).label?(c(),x(xt,{key:0,class:"VPNavBarTranslations",icon:Hn,label:u(e).langMenuLabel||"Change language"},{default:m(()=>[d("div",Ya,[d("p",Xa,E(u(r).label),1),(c(!0),p(z,null,X(u(t),a=>(c(),x(Xe,{key:a.link,item:a},null,8,["item"]))),128))])]),_:1},8,["label"])):S("",!0)}});const ti=P(ei,[["__scopeId","data-v-74abcbb9"]]);const ni={},ri={class:"VPSwitch",type:"button",role:"switch"},oi={class:"check"},si={key:0,class:"icon"};function ai(n,e){return c(),p("button",ri,[d("span",oi,[n.$slots.default?(c(),p("span",si,[v(n.$slots,"default",{},void 0,!0)])):S("",!0)])])}const ii=P(ni,[["render",ai],["__scopeId","data-v-f3c41672"]]),ci={},li={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},ui=dn('<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',9),di=[ui];function pi(n,e){return c(),p("svg",li,di)}const hi=P(ci,[["render",pi]]),vi={},_i={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},fi=d("path",{d:"M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"},null,-1),mi=[fi];function gi(n,e){return c(),p("svg",_i,mi)}const yi=P(vi,[["render",gi]]),ki=b({__name:"VPSwitchAppearance",setup(n){const{site:e,isDark:t}=H(),r=C(!1),o=typeof localStorage<"u"?s():()=>{};le(()=>{r.value=document.documentElement.classList.contains("dark")});function s(){const a=window.matchMedia("(prefers-color-scheme: dark)"),l=document.documentElement.classList;let i=localStorage.getItem(Bt),h=e.value.appearance==="dark"&&i==null||(i==="auto"||i==null?a.matches:i==="dark");a.onchange=k=>{i==="auto"&&g(h=k.matches)};function _(){g(h=!h),i=h?a.matches?"auto":"dark":a.matches?"light":"auto",localStorage.setItem(Bt,i)}function g(k){const $=document.createElement("style");$.type="text/css",$.appendChild(document.createTextNode(`:not(.VPSwitchAppearance):not(.VPSwitchAppearance *) {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}`)),document.head.appendChild($),r.value=k,l[k?"add":"remove"]("dark"),window.getComputedStyle($).opacity,document.head.removeChild($)}return _}return q(r,a=>{t.value=a}),(a,l)=>(c(),x(ii,{title:"toggle dark mode",class:"VPSwitchAppearance","aria-checked":r.value,onClick:u(o)},{default:m(()=>[w(hi,{class:"sun"}),w(yi,{class:"moon"})]),_:1},8,["aria-checked","onClick"]))}});const It=P(ki,[["__scopeId","data-v-87de0873"]]),bi={key:0,class:"VPNavBarAppearance"},wi=b({__name:"VPNavBarAppearance",setup(n){const{site:e}=H();return(t,r)=>u(e).appearance?(c(),p("div",bi,[w(It)])):S("",!0)}});const $i=P(wi,[["__scopeId","data-v-f6a63727"]]),Si={discord:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',facebook:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',github:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',instagram:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',linkedin:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',mastodon:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',slack:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',twitter:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',youtube:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'},Pi=["href","aria-label","innerHTML"],Mi=b({__name:"VPSocialLink",props:{icon:{},link:{}},setup(n){const e=n,t=V(()=>typeof e.icon=="object"?e.icon.svg:Si[e.icon]);return(r,o)=>(c(),p("a",{class:"VPSocialLink",href:r.link,"aria-label":typeof r.icon=="string"?r.icon:"",target:"_blank",rel:"noopener",innerHTML:t.value},null,8,Pi))}});const Vi=P(Mi,[["__scopeId","data-v-c530cc0a"]]),Li={class:"VPSocialLinks"},Ci=b({__name:"VPSocialLinks",props:{links:{}},setup(n){return(e,t)=>(c(),p("div",Li,[(c(!0),p(z,null,X(e.links,({link:r,icon:o})=>(c(),x(Vi,{key:r,icon:o,link:r},null,8,["icon","link"]))),128))]))}});const At=P(Ci,[["__scopeId","data-v-d7a53887"]]),xi=b({__name:"VPNavBarSocialLinks",setup(n){const{theme:e}=H();return(t,r)=>u(e).socialLinks?(c(),x(At,{key:0,class:"VPNavBarSocialLinks",links:u(e).socialLinks},null,8,["links"])):S("",!0)}});const Ii=P(xi,[["__scopeId","data-v-0394ad82"]]),Ai={key:0,class:"group translations"},Ei={class:"trans-title"},Ti={key:1,class:"group"},Ni={class:"item appearance"},Oi={class:"label"},Hi={class:"appearance-action"},ji={key:2,class:"group"},Bi={class:"item social-links"},Di=b({__name:"VPNavBarExtra",setup(n){const{site:e,theme:t}=H(),{localeLinks:r,currentLang:o}=De({correspondingLink:!0}),s=V(()=>r.value.length&&o.value.label||e.value.appearance||t.value.socialLinks);return(a,l)=>s.value?(c(),x(xt,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:m(()=>[u(r).length&&u(o).label?(c(),p("div",Ai,[d("p",Ei,E(u(o).label),1),(c(!0),p(z,null,X(u(r),i=>(c(),x(Xe,{key:i.link,item:i},null,8,["item"]))),128))])):S("",!0),u(e).appearance?(c(),p("div",Ti,[d("div",Ni,[d("p",Oi,E(u(t).darkModeSwitchLabel||"Appearance"),1),d("div",Hi,[w(It)])])])):S("",!0),u(t).socialLinks?(c(),p("div",ji,[d("div",Bi,[w(At,{class:"social-links-list",links:u(t).socialLinks},null,8,["links"])])])):S("",!0)]),_:1})):S("",!0)}});const Ri=P(Di,[["__scopeId","data-v-40855f84"]]),zi=n=>(re("data-v-e5dd9c1c"),n=n(),oe(),n),Fi=["aria-expanded"],Gi=zi(()=>d("span",{class:"container"},[d("span",{class:"top"}),d("span",{class:"middle"}),d("span",{class:"bottom"})],-1)),Wi=[Gi],Ui=b({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(n){return(e,t)=>(c(),p("button",{type:"button",class:R(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=r=>e.$emit("click"))},Wi,10,Fi))}});const qi=P(Ui,[["__scopeId","data-v-e5dd9c1c"]]),Ki=n=>(re("data-v-7c10cd25"),n=n(),oe(),n),Qi={class:"container"},Zi={class:"title"},Ji={class:"content"},Yi=Ki(()=>d("div",{class:"curtain"},null,-1)),Xi={class:"content-body"},ec=b({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(n){const{y:e}=fr(),{hasSidebar:t}=ue(),r=V(()=>({"has-sidebar":t.value,fill:e.value>0}));return(o,s)=>(c(),p("div",{class:R(["VPNavBar",r.value])},[d("div",Qi,[d("div",Zi,[w(Tr,null,{"nav-bar-title-before":m(()=>[v(o.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":m(()=>[v(o.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),d("div",Ji,[Yi,d("div",Xi,[v(o.$slots,"nav-bar-content-before",{},void 0,!0),w(Xs,{class:"search"}),w(Wa,{class:"menu"}),w(ti,{class:"translations"}),w($i,{class:"appearance"}),w(Ii,{class:"social-links"}),w(Ri,{class:"extra"}),v(o.$slots,"nav-bar-content-after",{},void 0,!0),w(qi,{class:"hamburger",active:o.isScreenOpen,onClick:s[0]||(s[0]=a=>o.$emit("toggle-screen"))},null,8,["active"])])])])],2))}});const tc=P(ec,[["__scopeId","data-v-7c10cd25"]]);function nc(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}else return Array.from(n)}var Et=!1;if(typeof window<"u"){var on={get passive(){Et=!0}};window.addEventListener("testPassive",null,on),window.removeEventListener("testPassive",null,on)}var Ke=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),Le=[],Qe=!1,Tt=-1,Ne=void 0,ge=void 0,Oe=void 0,jn=function(e){return Le.some(function(t){return!!(t.options.allowTouchMove&&t.options.allowTouchMove(e))})},Ze=function(e){var t=e||window.event;return jn(t.target)||t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)},rc=function(e){if(Oe===void 0){var t=!!e&&e.reserveScrollBarGap===!0,r=window.innerWidth-document.documentElement.clientWidth;if(t&&r>0){var o=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);Oe=document.body.style.paddingRight,document.body.style.paddingRight=o+r+"px"}}Ne===void 0&&(Ne=document.body.style.overflow,document.body.style.overflow="hidden")},oc=function(){Oe!==void 0&&(document.body.style.paddingRight=Oe,Oe=void 0),Ne!==void 0&&(document.body.style.overflow=Ne,Ne=void 0)},sc=function(){return window.requestAnimationFrame(function(){if(ge===void 0){ge={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,r=e.scrollX,o=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-r,setTimeout(function(){return window.requestAnimationFrame(function(){var s=o-window.innerHeight;s&&t>=o&&(document.body.style.top=-(t+s))})},300)}})},ac=function(){if(ge!==void 0){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=ge.position,document.body.style.top=ge.top,document.body.style.left=ge.left,window.scrollTo(t,e),ge=void 0}},ic=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},cc=function(e,t){var r=e.targetTouches[0].clientY-Tt;return jn(e.target)?!1:t&&t.scrollTop===0&&r>0||ic(t)&&r<0?Ze(e):(e.stopPropagation(),!0)},Bn=function(e,t){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!Le.some(function(o){return o.targetElement===e})){var r={targetElement:e,options:t||{}};Le=[].concat(nc(Le),[r]),Ke?sc():rc(t),Ke&&(e.ontouchstart=function(o){o.targetTouches.length===1&&(Tt=o.targetTouches[0].clientY)},e.ontouchmove=function(o){o.targetTouches.length===1&&cc(o,e)},Qe||(document.addEventListener("touchmove",Ze,Et?{passive:!1}:void 0),Qe=!0))}},Dn=function(){Ke&&(Le.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),Qe&&(document.removeEventListener("touchmove",Ze,Et?{passive:!1}:void 0),Qe=!1),Tt=-1),Ke?ac():oc(),Le=[]};const lc=b({__name:"VPNavScreenMenuLink",props:{text:{},link:{}},setup(n){const e=wt("close-screen");return(t,r)=>(c(),x(_e,{class:"VPNavScreenMenuLink",href:t.link,onClick:u(e)},{default:m(()=>[J(E(t.text),1)]),_:1},8,["href","onClick"]))}});const uc=P(lc,[["__scopeId","data-v-c328f34f"]]),dc={},pc={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},hc=d("path",{d:"M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"},null,-1),vc=[hc];function _c(n,e){return c(),p("svg",pc,vc)}const fc=P(dc,[["render",_c]]),mc=b({__name:"VPNavScreenMenuGroupLink",props:{text:{},link:{}},setup(n){const e=wt("close-screen");return(t,r)=>(c(),x(_e,{class:"VPNavScreenMenuGroupLink",href:t.link,onClick:u(e)},{default:m(()=>[J(E(t.text),1)]),_:1},8,["href","onClick"]))}});const Rn=P(mc,[["__scopeId","data-v-3d20956d"]]),gc={class:"VPNavScreenMenuGroupSection"},yc={key:0,class:"title"},kc=b({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(n){return(e,t)=>(c(),p("div",gc,[e.text?(c(),p("p",yc,E(e.text),1)):S("",!0),(c(!0),p(z,null,X(e.items,r=>(c(),x(Rn,{key:r.text,text:r.text,link:r.link},null,8,["text","link"]))),128))]))}});const bc=P(kc,[["__scopeId","data-v-7478538b"]]),wc=["aria-controls","aria-expanded"],$c={class:"button-text"},Sc=["id"],Pc={key:1,class:"group"},Mc=b({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(n){const e=n,t=C(!1),r=V(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function o(){t.value=!t.value}return(s,a)=>(c(),p("div",{class:R(["VPNavScreenMenuGroup",{open:t.value}])},[d("button",{class:"button","aria-controls":r.value,"aria-expanded":t.value,onClick:o},[d("span",$c,E(s.text),1),w(fc,{class:"button-icon"})],8,wc),d("div",{id:r.value,class:"items"},[(c(!0),p(z,null,X(s.items,l=>(c(),p(z,{key:l.text},["link"in l?(c(),p("div",{key:l.text,class:"item"},[w(Rn,{text:l.text,link:l.link},null,8,["text","link"])])):(c(),p("div",Pc,[w(bc,{text:l.text,items:l.items},null,8,["text","items"])]))],64))),128))],8,Sc)],2))}});const Vc=P(Mc,[["__scopeId","data-v-a9a19324"]]),Lc={key:0,class:"VPNavScreenMenu"},Cc=b({__name:"VPNavScreenMenu",setup(n){const{theme:e}=H();return(t,r)=>u(e).nav?(c(),p("nav",Lc,[(c(!0),p(z,null,X(u(e).nav,o=>(c(),p(z,{key:o.text},["link"in o?(c(),x(uc,{key:0,text:o.text,link:o.link},null,8,["text","link"])):(c(),x(Vc,{key:1,text:o.text||"",items:o.items},null,8,["text","items"]))],64))),128))])):S("",!0)}}),xc={key:0,class:"VPNavScreenAppearance"},Ic={class:"text"},Ac=b({__name:"VPNavScreenAppearance",setup(n){const{site:e,theme:t}=H();return(r,o)=>u(e).appearance?(c(),p("div",xc,[d("p",Ic,E(u(t).darkModeSwitchLabel||"Appearance"),1),w(It)])):S("",!0)}});const Ec=P(Ac,[["__scopeId","data-v-add8f686"]]),Tc={class:"list"},Nc=b({__name:"VPNavScreenTranslations",setup(n){const{localeLinks:e,currentLang:t}=De({correspondingLink:!0}),r=C(!1);function o(){r.value=!r.value}return(s,a)=>u(e).length&&u(t).label?(c(),p("div",{key:0,class:R(["VPNavScreenTranslations",{open:r.value}])},[d("button",{class:"title",onClick:o},[w(Hn,{class:"icon lang"}),J(" "+E(u(t).label)+" ",1),w(On,{class:"icon chevron"})]),d("ul",Tc,[(c(!0),p(z,null,X(u(e),l=>(c(),p("li",{key:l.link,class:"item"},[w(_e,{class:"link",href:l.link},{default:m(()=>[J(E(l.text),1)]),_:2},1032,["href"])]))),128))])],2)):S("",!0)}});const Oc=P(Nc,[["__scopeId","data-v-d72aa483"]]),Hc=b({__name:"VPNavScreenSocialLinks",setup(n){const{theme:e}=H();return(t,r)=>u(e).socialLinks?(c(),x(At,{key:0,class:"VPNavScreenSocialLinks",links:u(e).socialLinks},null,8,["links"])):S("",!0)}}),jc={class:"container"},Bc=b({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(n){const e=C(null);function t(){Bn(e.value,{reserveScrollBarGap:!0})}function r(){Dn()}return(o,s)=>(c(),x(Je,{name:"fade",onEnter:t,onAfterLeave:r},{default:m(()=>[o.open?(c(),p("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e},[d("div",jc,[v(o.$slots,"nav-screen-content-before",{},void 0,!0),w(Cc,{class:"menu"}),w(Oc,{class:"translations"}),w(Ec,{class:"appearance"}),w(Hc,{class:"social-links"}),v(o.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):S("",!0)]),_:3}))}});const Dc=P(Bc,[["__scopeId","data-v-724636ae"]]),Rc={class:"VPNav"},zc=b({__name:"VPNav",setup(n){const{isScreenOpen:e,closeScreen:t,toggleScreen:r}=Vr();return Te("close-screen",t),(o,s)=>(c(),p("header",Rc,[w(tc,{"is-screen-open":u(e),onToggleScreen:u(r)},{"nav-bar-title-before":m(()=>[v(o.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":m(()=>[v(o.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":m(()=>[v(o.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":m(()=>[v(o.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),w(Dc,{open:u(e)},{"nav-screen-content-before":m(()=>[v(o.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":m(()=>[v(o.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])]))}});const Fc=P(zc,[["__scopeId","data-v-7e5bc4a5"]]),Gc={},Wc={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Uc=d("path",{d:"M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"},null,-1),qc=d("path",{d:"M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"},null,-1),Kc=d("path",{d:"M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"},null,-1),Qc=d("path",{d:"M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"},null,-1),Zc=[Uc,qc,Kc,Qc];function Jc(n,e){return c(),p("svg",Wc,Zc)}const Yc=P(Gc,[["render",Jc]]);function Xc(){const{hasSidebar:n}=ue(),e=it("(min-width: 960px)"),t=it("(min-width: 1280px)");return{isAsideEnabled:V(()=>!t.value&&!e.value?!1:n.value?t.value:e.value)}}const el=71;function Nt(n){return typeof n.outline=="object"&&!Array.isArray(n.outline)&&n.outline.label||n.outlineTitle||"On this page"}function Ot(n){const e=[...document.querySelectorAll(".VPDoc h2,h3,h4,h5,h6")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const r=Number(t.tagName[1]);return{title:tl(t),link:"#"+t.id,level:r}});return nl(e,n)}function tl(n){let e="";for(const t of n.childNodes)if(t.nodeType===1){if(t.classList.contains("VPBadge")||t.classList.contains("header-anchor"))continue;e+=t.textContent}else t.nodeType===3&&(e+=t.textContent);return e.trim()}function nl(n,e){if(e===!1)return[];const t=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[r,o]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;n=n.filter(a=>a.level>=r&&a.level<=o);const s=[];e:for(let a=0;a<n.length;a++){const l=n[a];if(a===0)s.push(l);else{for(let i=a-1;i>=0;i--){const h=n[i];if(h.level<l.level){(h.children||(h.children=[])).push(l);continue e}}s.push(l)}}return s}function rl(n,e){const{isAsideEnabled:t}=Xc(),r=mr(s,100);let o=null;le(()=>{requestAnimationFrame(s),window.addEventListener("scroll",r)}),tr(()=>{a(location.hash)}),kt(()=>{window.removeEventListener("scroll",r)});function s(){if(!t.value)return;const l=[].slice.call(n.value.querySelectorAll(".outline-link")),i=[].slice.call(document.querySelectorAll(".content .header-anchor")).filter($=>l.some(I=>I.hash===$.hash&&$.offsetParent!==null)),h=window.scrollY,_=window.innerHeight,g=document.body.offsetHeight,k=Math.abs(h+_-g)<1;if(i.length&&k){a(i[i.length-1].hash);return}for(let $=0;$<i.length;$++){const I=i[$],y=i[$+1],[f,N]=ol($,I,y);if(f){a(N);return}}}function a(l){o&&o.classList.remove("active"),l!==null&&(o=n.value.querySelector(`a[href="${decodeURIComponent(l)}"]`));const i=o;i?(i.classList.add("active"),e.value.style.top=i.offsetTop+33+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function sn(n){return n.parentElement.offsetTop-el}function ol(n,e,t){const r=window.scrollY;return n===0&&r===0?[!0,null]:r<sn(e)?[!1,null]:!t||r<sn(t)?[!0,e.hash]:[!1,null]}const sl=["href","title"],al=b({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(n){function e({target:t}){const r="#"+t.href.split("#")[1],o=document.querySelector(decodeURIComponent(r));o==null||o.focus()}return(t,r)=>{const o=ke("VPDocOutlineItem",!0);return c(),p("ul",{class:R(t.root?"root":"nested")},[(c(!0),p(z,null,X(t.headers,({children:s,link:a,title:l})=>(c(),p("li",null,[d("a",{class:"outline-link",href:a,onClick:e,title:l},E(l),9,sl),s!=null&&s.length?(c(),x(o,{key:0,headers:s},null,8,["headers"])):S("",!0)]))),256))],2)}}});const Ht=P(al,[["__scopeId","data-v-9a431c33"]]),il={},cl={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},ll=d("path",{d:"M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"},null,-1),ul=[ll];function dl(n,e){return c(),p("svg",cl,ul)}const jt=P(il,[["render",dl]]),pl=b({__name:"VPLocalNavOutlineDropdown",setup(n){const{frontmatter:e,theme:t}=H(),r=C(!1),o=C(0),s=C();je(()=>{r.value=!1});function a(){r.value=!r.value,o.value=window.innerHeight+Math.min(window.scrollY-64,0)}function l(_){_.target.classList.contains("outline-link")&&(s.value&&(s.value.style.transition="none"),ie(()=>{r.value=!1}))}function i(){r.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}const h=$t([]);return je(()=>{h.value=Ot(e.value.outline??t.value.outline)}),(_,g)=>(c(),p("div",{class:"VPLocalNavOutlineDropdown",style:nr({"--vp-vh":o.value+"px"})},[h.value.length>0?(c(),p("button",{key:0,onClick:a,class:R({open:r.value})},[J(E(u(Nt)(u(t)))+" ",1),w(jt,{class:"icon"})],2)):(c(),p("button",{key:1,onClick:i},E(u(t).returnToTopLabel||"Return to top"),1)),w(Je,{name:"flyout"},{default:m(()=>[r.value?(c(),p("div",{key:0,ref_key:"items",ref:s,class:"items",onClick:l},[d("a",{class:"top-link",href:"#",onClick:i},E(u(t).returnToTopLabel||"Return to top"),1),w(Ht,{headers:h.value},null,8,["headers"])],512)):S("",!0)]),_:1})],4))}});const hl=P(pl,[["__scopeId","data-v-079b16a8"]]),vl={key:0,class:"VPLocalNav"},_l=["aria-expanded"],fl={class:"menu-text"},ml=b({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(n){const{theme:e,frontmatter:t}=H(),{hasSidebar:r}=ue();return(o,s)=>u(t).layout!=="home"?(c(),p("div",vl,[u(r)?(c(),p("button",{key:0,class:"menu","aria-expanded":o.open,"aria-controls":"VPSidebarNav",onClick:s[0]||(s[0]=a=>o.$emit("open-menu"))},[w(Yc,{class:"menu-icon"}),d("span",fl,E(u(e).sidebarMenuLabel||"Menu"),1)],8,_l)):S("",!0),w(hl)])):S("",!0)}});const gl=P(ml,[["__scopeId","data-v-392e1bf8"]]),yl=n=>(re("data-v-c4656e6d"),n=n(),oe(),n),kl=["role","tabindex"],bl=yl(()=>d("div",{class:"indicator"},null,-1)),wl=["onKeydown"],$l={key:1,class:"items"},Sl=b({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(n){const e=n,{collapsed:t,collapsible:r,isLink:o,isActiveLink:s,hasActiveLink:a,hasChildren:l,toggle:i}=br(V(()=>e.item)),h=V(()=>l.value?"section":"div"),_=V(()=>o.value?"a":"div"),g=V(()=>l.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),k=V(()=>o.value?void 0:"button"),$=V(()=>[[`level-${e.depth}`],{collapsible:r.value},{collapsed:t.value},{"is-link":o.value},{"is-active":s.value},{"has-active":a.value}]);function I(f){"key"in f&&f.key!=="Enter"||!e.item.link&&i()}function y(){e.item.link&&i()}return(f,N)=>{const B=ke("VPSidebarItem",!0);return c(),x(Ve(h.value),{class:R(["VPSidebarItem",$.value])},{default:m(()=>[f.item.text?(c(),p("div",Ge({key:0,class:"item",role:k.value},rr(f.item.items?{click:I,keydown:I}:{},!0),{tabindex:f.item.items&&0}),[bl,f.item.link?(c(),x(_e,{key:0,tag:_.value,class:"link",href:f.item.link},{default:m(()=>[(c(),x(Ve(g.value),{class:"text",innerHTML:f.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href"])):(c(),x(Ve(g.value),{key:1,class:"text",innerHTML:f.item.text},null,8,["innerHTML"])),f.item.collapsed!=null?(c(),p("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:y,onKeydown:or(y,["enter"]),tabindex:"0"},[w(jt,{class:"caret-icon"})],40,wl)):S("",!0)],16,kl)):S("",!0),f.item.items&&f.item.items.length?(c(),p("div",$l,[f.depth<5?(c(!0),p(z,{key:0},X(f.item.items,O=>(c(),x(B,{key:O.text,item:O,depth:f.depth+1},null,8,["item","depth"]))),128)):S("",!0)])):S("",!0)]),_:1},8,["class"])}}});const Pl=P(Sl,[["__scopeId","data-v-c4656e6d"]]),zn=n=>(re("data-v-af16598e"),n=n(),oe(),n),Ml=zn(()=>d("div",{class:"curtain"},null,-1)),Vl={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Ll=zn(()=>d("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),Cl=b({__name:"VPSidebar",props:{open:{type:Boolean}},setup(n){const e=n,{sidebarGroups:t,hasSidebar:r}=ue();let o=C(null);function s(){Bn(o.value,{reserveScrollBarGap:!0})}function a(){Dn()}return sr(async()=>{var l;e.open?(s(),(l=o.value)==null||l.focus()):a()}),(l,i)=>u(r)?(c(),p("aside",{key:0,class:R(["VPSidebar",{open:l.open}]),ref_key:"navEl",ref:o,onClick:i[0]||(i[0]=ar(()=>{},["stop"]))},[Ml,d("nav",Vl,[Ll,v(l.$slots,"sidebar-nav-before",{},void 0,!0),(c(!0),p(z,null,X(u(t),h=>(c(),p("div",{key:h.text,class:"group"},[w(Pl,{item:h,depth:0},null,8,["item"])]))),128)),v(l.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):S("",!0)}});const xl=P(Cl,[["__scopeId","data-v-af16598e"]]),Il={},Al={class:"VPPage"};function El(n,e){const t=ke("Content");return c(),p("div",Al,[v(n.$slots,"page-top"),w(t),v(n.$slots,"page-bottom")])}const Tl=P(Il,[["render",El]]),Nl=b({__name:"VPButton",props:{tag:{},size:{},theme:{},text:{},href:{}},setup(n){const e=n,t=V(()=>[e.size??"medium",e.theme??"brand"]),r=V(()=>e.href&&pn.test(e.href)),o=V(()=>e.tag?e.tag:e.href?"a":"button");return(s,a)=>(c(),x(Ve(o.value),{class:R(["VPButton",t.value]),href:s.href?u(Be)(s.href):void 0,target:r.value?"_blank":void 0,rel:r.value?"noreferrer":void 0},{default:m(()=>[J(E(s.text),1)]),_:1},8,["class","href","target","rel"]))}});const Ol=P(Nl,[["__scopeId","data-v-567ba664"]]),Hl=n=>(re("data-v-fd2650d5"),n=n(),oe(),n),jl={class:"container"},Bl={class:"main"},Dl={key:0,class:"name"},Rl={class:"clip"},zl={key:1,class:"text"},Fl={key:2,class:"tagline"},Gl={key:0,class:"actions"},Wl={key:0,class:"image"},Ul={class:"image-container"},ql=Hl(()=>d("div",{class:"image-bg"},null,-1)),Kl=b({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(n){const e=wt("hero-image-slot-exists");return(t,r)=>(c(),p("div",{class:R(["VPHero",{"has-image":t.image||u(e)}])},[d("div",jl,[d("div",Bl,[v(t.$slots,"home-hero-info",{},()=>[t.name?(c(),p("h1",Dl,[d("span",Rl,E(t.name),1)])):S("",!0),t.text?(c(),p("p",zl,E(t.text),1)):S("",!0),t.tagline?(c(),p("p",Fl,E(t.tagline),1)):S("",!0)],!0),t.actions?(c(),p("div",Gl,[(c(!0),p(z,null,X(t.actions,o=>(c(),p("div",{key:o.link,class:"action"},[w(Ol,{tag:"a",size:"medium",theme:o.theme,text:o.text,href:o.link},null,8,["theme","text","href"])]))),128))])):S("",!0)]),t.image||u(e)?(c(),p("div",Wl,[d("div",Ul,[ql,v(t.$slots,"home-hero-image",{},()=>[t.image?(c(),x(Pt,{key:0,class:"image-src",image:t.image},null,8,["image"])):S("",!0)],!0)])])):S("",!0)])],2))}});const Ql=P(Kl,[["__scopeId","data-v-fd2650d5"]]),Zl=b({__name:"VPHomeHero",setup(n){const{frontmatter:e}=H();return(t,r)=>u(e).hero?(c(),x(Ql,{key:0,class:"VPHomeHero",name:u(e).hero.name,text:u(e).hero.text,tagline:u(e).hero.tagline,image:u(e).hero.image,actions:u(e).hero.actions},{"home-hero-info":m(()=>[v(t.$slots,"home-hero-info")]),"home-hero-image":m(()=>[v(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):S("",!0)}}),Jl={},Yl={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Xl=d("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),eu=[Xl];function tu(n,e){return c(),p("svg",Yl,eu)}const nu=P(Jl,[["render",tu]]),ru={class:"box"},ou=["innerHTML"],su=["innerHTML"],au=["innerHTML"],iu={key:3,class:"link-text"},cu={class:"link-text-value"},lu=b({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{}},setup(n){return(e,t)=>(c(),x(_e,{class:"VPFeature",href:e.link,"no-icon":!0},{default:m(()=>[d("article",ru,[typeof e.icon=="object"?(c(),x(Pt,{key:0,image:e.icon,alt:e.icon.alt,height:e.icon.height,width:e.icon.width},null,8,["image","alt","height","width"])):e.icon?(c(),p("div",{key:1,class:"icon",innerHTML:e.icon},null,8,ou)):S("",!0),d("h2",{class:"title",innerHTML:e.title},null,8,su),e.details?(c(),p("p",{key:2,class:"details",innerHTML:e.details},null,8,au)):S("",!0),e.linkText?(c(),p("div",iu,[d("p",cu,[J(E(e.linkText)+" ",1),w(nu,{class:"link-text-icon"})])])):S("",!0)])]),_:1},8,["href"]))}});const uu=P(lu,[["__scopeId","data-v-837f6cca"]]),du={key:0,class:"VPFeatures"},pu={class:"container"},hu={class:"items"},vu=b({__name:"VPFeatures",props:{features:{}},setup(n){const e=n,t=V(()=>{const r=e.features.length;if(r){if(r===2)return"grid-2";if(r===3)return"grid-3";if(r%3===0)return"grid-6";if(r%2===0)return"grid-4"}else return});return(r,o)=>r.features?(c(),p("div",du,[d("div",pu,[d("div",hu,[(c(!0),p(z,null,X(r.features,s=>(c(),p("div",{key:s.title,class:R(["item",[t.value]])},[w(uu,{icon:s.icon,title:s.title,details:s.details,link:s.link,"link-text":s.linkText},null,8,["icon","title","details","link","link-text"])],2))),128))])])])):S("",!0)}});const _u=P(vu,[["__scopeId","data-v-6816157f"]]),fu=b({__name:"VPHomeFeatures",setup(n){const{frontmatter:e}=H();return(t,r)=>u(e).features?(c(),x(_u,{key:0,class:"VPHomeFeatures",features:u(e).features},null,8,["features"])):S("",!0)}}),mu={class:"VPHome"},gu=b({__name:"VPHome",setup(n){return(e,t)=>{const r=ke("Content");return c(),p("div",mu,[v(e.$slots,"home-hero-before",{},void 0,!0),w(Zl,null,{"home-hero-info":m(()=>[v(e.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":m(()=>[v(e.$slots,"home-hero-image",{},void 0,!0)]),_:3}),v(e.$slots,"home-hero-after",{},void 0,!0),v(e.$slots,"home-features-before",{},void 0,!0),w(fu),v(e.$slots,"home-features-after",{},void 0,!0),w(r)])}}});const yu=P(gu,[["__scopeId","data-v-d82743a8"]]),ku=n=>(re("data-v-ff0f39c8"),n=n(),oe(),n),bu={class:"content"},wu={class:"outline-title"},$u={"aria-labelledby":"doc-outline-aria-label"},Su=ku(()=>d("span",{class:"visually-hidden",id:"doc-outline-aria-label"}," Table of Contents for current page ",-1)),Pu=b({__name:"VPDocAsideOutline",setup(n){const{frontmatter:e,theme:t}=H(),r=$t([]);je(()=>{r.value=Ot(e.value.outline??t.value.outline)});const o=C(),s=C();return rl(o,s),(a,l)=>(c(),p("div",{class:R(["VPDocAsideOutline",{"has-outline":r.value.length>0}]),ref_key:"container",ref:o},[d("div",bu,[d("div",{class:"outline-marker",ref_key:"marker",ref:s},null,512),d("div",wu,E(u(Nt)(u(t))),1),d("nav",$u,[Su,w(Ht,{headers:r.value,root:!0},null,8,["headers"])])])],2))}});const Mu=P(Pu,[["__scopeId","data-v-ff0f39c8"]]),Vu={class:"VPDocAsideCarbonAds"},Lu=b({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(n){const e=()=>null;return(t,r)=>(c(),p("div",Vu,[w(u(e),{"carbon-ads":t.carbonAds},null,8,["carbon-ads"])]))}}),Cu=n=>(re("data-v-3f215769"),n=n(),oe(),n),xu={class:"VPDocAside"},Iu=Cu(()=>d("div",{class:"spacer"},null,-1)),Au=b({__name:"VPDocAside",setup(n){const{theme:e}=H();return(t,r)=>(c(),p("div",xu,[v(t.$slots,"aside-top",{},void 0,!0),v(t.$slots,"aside-outline-before",{},void 0,!0),w(Mu),v(t.$slots,"aside-outline-after",{},void 0,!0),Iu,v(t.$slots,"aside-ads-before",{},void 0,!0),u(e).carbonAds?(c(),x(Lu,{key:0,"carbon-ads":u(e).carbonAds},null,8,["carbon-ads"])):S("",!0),v(t.$slots,"aside-ads-after",{},void 0,!0),v(t.$slots,"aside-bottom",{},void 0,!0)]))}});const Eu=P(Au,[["__scopeId","data-v-3f215769"]]);function Tu(){const{theme:n,page:e}=H();return V(()=>{const{text:t="Edit this page",pattern:r=""}=n.value.editLink||{};let o;return typeof r=="function"?o=r(e.value):o=r.replace(/:path/g,e.value.filePath),{url:o,text:t}})}function Nu(){const{page:n,theme:e,frontmatter:t}=H();return V(()=>{var a,l,i,h;const r=fn(e.value.sidebar,n.value.relativePath),o=yr(r),s=o.findIndex(_=>Ce(n.value.relativePath,_.link));return{prev:t.value.prev===!1?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((a=o[s-1])==null?void 0:a.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((l=o[s-1])==null?void 0:l.link)},next:t.value.next===!1?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??((i=o[s+1])==null?void 0:i.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((h=o[s+1])==null?void 0:h.link)}}})}const Ou={},Hu={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},ju=d("path",{d:"M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z"},null,-1),Bu=d("path",{d:"M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z"},null,-1),Du=[ju,Bu];function Ru(n,e){return c(),p("svg",Hu,Du)}const zu=P(Ou,[["render",Ru]]),Fu={class:"VPLastUpdated"},Gu=["datetime"],Wu=b({__name:"VPDocFooterLastUpdated",setup(n){const{theme:e,page:t,lang:r}=H(),o=V(()=>new Date(t.value.lastUpdated)),s=V(()=>o.value.toISOString()),a=C("");return le(()=>{he(()=>{a.value=o.value.toLocaleString(r.value)})}),(l,i)=>(c(),p("p",Fu,[J(E(u(e).lastUpdatedText||"Last updated")+": ",1),d("time",{datetime:s.value},E(a.value),9,Gu)]))}});const Uu=P(Wu,[["__scopeId","data-v-7b3ebfe1"]]),qu={key:0,class:"VPDocFooter"},Ku={key:0,class:"edit-info"},Qu={key:0,class:"edit-link"},Zu={key:1,class:"last-updated"},Ju={key:1,class:"prev-next"},Yu={class:"pager"},Xu=["href"],ed=["innerHTML"],td=["innerHTML"],nd=["href"],rd=["innerHTML"],od=["innerHTML"],sd=b({__name:"VPDocFooter",setup(n){const{theme:e,page:t,frontmatter:r}=H(),o=Tu(),s=Nu(),a=V(()=>e.value.editLink&&r.value.editLink!==!1),l=V(()=>t.value.lastUpdated&&r.value.lastUpdated!==!1),i=V(()=>a.value||l.value||s.value.prev||s.value.next);return(h,_)=>{var g,k,$,I,y,f,N;return i.value?(c(),p("footer",qu,[v(h.$slots,"doc-footer-before",{},void 0,!0),a.value||l.value?(c(),p("div",Ku,[a.value?(c(),p("div",Qu,[w(_e,{class:"edit-link-button",href:u(o).url,"no-icon":!0},{default:m(()=>[w(zu,{class:"edit-link-icon","aria-label":"edit icon"}),J(" "+E(u(o).text),1)]),_:1},8,["href"])])):S("",!0),l.value?(c(),p("div",Zu,[w(Uu)])):S("",!0)])):S("",!0),(g=u(s).prev)!=null&&g.link||(k=u(s).next)!=null&&k.link?(c(),p("div",Ju,[d("div",Yu,[($=u(s).prev)!=null&&$.link?(c(),p("a",{key:0,class:"pager-link prev",href:u(Be)(u(s).prev.link)},[d("span",{class:"desc",innerHTML:((I=u(e).docFooter)==null?void 0:I.prev)||"Previous page"},null,8,ed),d("span",{class:"title",innerHTML:u(s).prev.text},null,8,td)],8,Xu)):S("",!0)]),d("div",{class:R(["pager",{"has-prev":(y=u(s).prev)==null?void 0:y.link}])},[(f=u(s).next)!=null&&f.link?(c(),p("a",{key:0,class:"pager-link next",href:u(Be)(u(s).next.link)},[d("span",{class:"desc",innerHTML:((N=u(e).docFooter)==null?void 0:N.next)||"Next page"},null,8,rd),d("span",{class:"title",innerHTML:u(s).next.text},null,8,od)],8,nd)):S("",!0)],2)])):S("",!0)])):S("",!0)}}});const ad=P(sd,[["__scopeId","data-v-face870a"]]),id={key:0,class:"VPDocOutlineDropdown"},cd={key:0,class:"items"},ld=b({__name:"VPDocOutlineDropdown",setup(n){const{frontmatter:e,theme:t}=H(),r=C(!1);je(()=>{r.value=!1});const o=$t([]);return je(()=>{o.value=Ot(e.value.outline??t.value.outline)}),(s,a)=>o.value.length>0?(c(),p("div",id,[d("button",{onClick:a[0]||(a[0]=l=>r.value=!r.value),class:R({open:r.value})},[J(E(u(Nt)(u(t)))+" ",1),w(jt,{class:"icon"})],2),r.value?(c(),p("div",cd,[w(Ht,{headers:o.value},null,8,["headers"])])):S("",!0)])):S("",!0)}});const ud=P(ld,[["__scopeId","data-v-2edece88"]]),dd=n=>(re("data-v-c4b0d3cf"),n=n(),oe(),n),pd={class:"container"},hd=dd(()=>d("div",{class:"aside-curtain"},null,-1)),vd={class:"aside-container"},_d={class:"aside-content"},fd={class:"content"},md={class:"content-container"},gd={class:"main"},yd=b({__name:"VPDoc",setup(n){const e=xe(),{hasSidebar:t,hasAside:r,leftAside:o}=ue(),s=V(()=>e.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(a,l)=>{const i=ke("Content");return c(),p("div",{class:R(["VPDoc",{"has-sidebar":u(t),"has-aside":u(r)}])},[v(a.$slots,"doc-top",{},void 0,!0),d("div",pd,[u(r)?(c(),p("div",{key:0,class:R(["aside",{"left-aside":u(o)}])},[hd,d("div",vd,[d("div",_d,[w(Eu,null,{"aside-top":m(()=>[v(a.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":m(()=>[v(a.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":m(()=>[v(a.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":m(()=>[v(a.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":m(()=>[v(a.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":m(()=>[v(a.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):S("",!0),d("div",fd,[d("div",md,[v(a.$slots,"doc-before",{},void 0,!0),w(ud),d("main",gd,[w(i,{class:R(["vp-doc",s.value])},null,8,["class"])]),w(ad,null,{"doc-footer-before":m(()=>[v(a.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),v(a.$slots,"doc-after",{},void 0,!0)])])]),v(a.$slots,"doc-bottom",{},void 0,!0)],2)}}});const kd=P(yd,[["__scopeId","data-v-c4b0d3cf"]]),et=n=>(re("data-v-c70503b8"),n=n(),oe(),n),bd={class:"NotFound"},wd=et(()=>d("p",{class:"code"},"404",-1)),$d=et(()=>d("h1",{class:"title"},"PAGE NOT FOUND",-1)),Sd=et(()=>d("div",{class:"divider"},null,-1)),Pd=et(()=>d("blockquote",{class:"quote"}," But if you don't change your direction, and if you keep looking, you may end up where you are heading. ",-1)),Md={class:"action"},Vd=["href"],Ld=b({__name:"NotFound",setup(n){const{site:e}=H(),{localeLinks:t}=De({removeCurrent:!1}),r=C("/");return le(()=>{var s;const o=window.location.pathname.replace(e.value.base,"").replace(/(^.*?\/).*$/,"/$1");t.value.length&&(r.value=((s=t.value.find(({link:a})=>a.startsWith(o)))==null?void 0:s.link)||t.value[0].link)}),(o,s)=>(c(),p("div",bd,[wd,$d,Sd,Pd,d("div",Md,[d("a",{class:"link",href:u(Me)(r.value),"aria-label":"go to home"}," Take me home ",8,Vd)])]))}});const Cd=P(Ld,[["__scopeId","data-v-c70503b8"]]),xd=b({__name:"VPContent",setup(n){const{page:e,frontmatter:t}=H(),{hasSidebar:r}=ue();return(o,s)=>(c(),p("div",{class:R(["VPContent",{"has-sidebar":u(r),"is-home":u(t).layout==="home"}]),id:"VPContent"},[u(e).isNotFound?v(o.$slots,"not-found",{key:0},()=>[w(Cd)],!0):u(t).layout==="page"?(c(),x(Tl,{key:1},{"page-top":m(()=>[v(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":m(()=>[v(o.$slots,"page-bottom",{},void 0,!0)]),_:3})):u(t).layout==="home"?(c(),x(yu,{key:2},{"home-hero-before":m(()=>[v(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info":m(()=>[v(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":m(()=>[v(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":m(()=>[v(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":m(()=>[v(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":m(()=>[v(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):(c(),x(kd,{key:3},{"doc-top":m(()=>[v(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":m(()=>[v(o.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":m(()=>[v(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":m(()=>[v(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":m(()=>[v(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":m(()=>[v(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":m(()=>[v(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":m(()=>[v(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":m(()=>[v(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":m(()=>[v(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":m(()=>[v(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}});const Id=P(xd,[["__scopeId","data-v-a494bd1d"]]),Ad={class:"container"},Ed=["innerHTML"],Td=["innerHTML"],Nd=b({__name:"VPFooter",setup(n){const{theme:e}=H(),{hasSidebar:t}=ue();return(r,o)=>u(e).footer?(c(),p("footer",{key:0,class:R(["VPFooter",{"has-sidebar":u(t)}])},[d("div",Ad,[u(e).footer.message?(c(),p("p",{key:0,class:"message",innerHTML:u(e).footer.message},null,8,Ed)):S("",!0),u(e).footer.copyright?(c(),p("p",{key:1,class:"copyright",innerHTML:u(e).footer.copyright},null,8,Td)):S("",!0)])],2)):S("",!0)}});const Od=P(Nd,[["__scopeId","data-v-2f86ebd2"]]),Hd={key:0,class:"Layout"},jd=b({__name:"Layout",setup(n){const{isOpen:e,open:t,close:r}=ue(),o=xe();q(()=>o.path,r),kr(e,r),Te("close-sidebar",r),Te("is-sidebar-open",e);const{frontmatter:s}=H(),a=ir(),l=V(()=>!!a["home-hero-image"]);return Te("hero-image-slot-exists",l),(i,h)=>{const _=ke("Content");return u(s).layout!==!1?(c(),p("div",Hd,[v(i.$slots,"layout-top",{},void 0,!0),w($r),w(Mr,{class:"backdrop",show:u(e),onClick:u(r)},null,8,["show","onClick"]),w(Fc,null,{"nav-bar-title-before":m(()=>[v(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":m(()=>[v(i.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":m(()=>[v(i.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":m(()=>[v(i.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":m(()=>[v(i.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":m(()=>[v(i.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),w(gl,{open:u(e),onOpenMenu:u(t)},null,8,["open","onOpenMenu"]),w(xl,{open:u(e)},{"sidebar-nav-before":m(()=>[v(i.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":m(()=>[v(i.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),w(Id,{"data-pagefind-body":""},{"page-top":m(()=>[v(i.$slots,"page-top",{},void 0,!0)]),"page-bottom":m(()=>[v(i.$slots,"page-bottom",{},void 0,!0)]),"not-found":m(()=>[v(i.$slots,"not-found",{},void 0,!0)]),"home-hero-before":m(()=>[v(i.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info":m(()=>[v(i.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":m(()=>[v(i.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":m(()=>[v(i.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":m(()=>[v(i.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":m(()=>[v(i.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":m(()=>[v(i.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":m(()=>[v(i.$slots,"doc-before",{},void 0,!0)]),"doc-after":m(()=>[v(i.$slots,"doc-after",{},void 0,!0)]),"doc-top":m(()=>[v(i.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":m(()=>[v(i.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":m(()=>[v(i.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":m(()=>[v(i.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":m(()=>[v(i.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":m(()=>[v(i.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":m(()=>[v(i.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":m(()=>[v(i.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),w(Od),v(i.$slots,"layout-bottom",{},void 0,!0)])):(c(),x(_,{key:1}))}}});const Bd=P(jd,[["__scopeId","data-v-f0b011de"]]);const Rd={Layout:Bd,enhanceApp:({app:n})=>{n.component("Badge",lr)}};export{Rd as t};
