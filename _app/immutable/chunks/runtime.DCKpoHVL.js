var Nn=Array.isArray,Zt=Array.prototype.indexOf,Cn=Array.from,bn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,zt=Object.getOwnPropertyDescriptors,Pn=Object.prototype,Fn=Array.prototype,Wt=Object.getPrototypeOf;const qn=()=>{};function Ln(t){return t()}function Xt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,Et=4,j=8,at=16,T=32,W=64,V=128,I=256,G=512,E=1024,D=2048,X=4096,N=8192,b=16384,Jt=32768,yt=65536,Mn=1<<17,Qt=1<<19,wt=1<<20,vt=Symbol("$state"),Yn=Symbol("legacy props"),jn=Symbol("");function Tt(t){return t===this.v}function tn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function mt(t){return!tn(t,this.v)}function nn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function rn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function en(t){throw new Error("https://svelte.dev/e/effect_orphan")}function ln(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Hn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Bn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Un(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Vn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function sn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let J=!1;function Gn(){J=!0}const Kn=1,$n=2,Zn=16,zn=1,Wn=2,Xn=4,Jn=8,Qn=16,tr=1,nr=2,un="[",on="[!",fn="]",At={},rr=Symbol();function ut(t,n){var r={f:0,v:t,reactions:null,equals:Tt,rv:0,wv:0};return r}function er(t){return gt(ut(t))}function _n(t,n=!1){var e;const r=ut(t);return n||(r.equals=mt),J&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function lr(t,n=!1){return gt(_n(t,n))}function gt(t){return o!==null&&o.f&y&&(w===null?gn([t]):w.push(t)),t}function sr(t,n){return o!==null&&ft()&&o.f&(y|at)&&(w===null||!w.includes(t))&&an(),cn(t,n)}function cn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Bt(),Rt(t,D),ft()&&u!==null&&u.f&E&&!(u.f&T)&&(h!==null&&h.includes(t)?(m(u,D),nt(u)):g===null?Rn([t]):g.push(t))),n}function Rt(t,n){var r=t.reactions;if(r!==null)for(var e=ft(),l=r.length,s=0;s<l;s++){var a=r[s],i=a.f;i&D||!e&&a===u||(m(a,n),i&(E|I)&&(i&y?Rt(a,X):nt(a)))}}function xt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let C=!1;function ar(t){C=t}let A;function q(t){if(t===null)throw xt(),At;return A=t}function ur(){return q(P(A))}function or(t){if(C){if(P(A)!==null)throw xt(),At;A=t}}function ir(){for(var t=0,n=A;;){if(n.nodeType===8){var r=n.data;if(r===fn){if(t===0)return n;t-=1}else(r===un||r===on)&&(t+=1)}var e=P(n);n.remove(),n=e}}var pt,Dt,St;function fr(){if(pt===void 0){pt=window;var t=Element.prototype,n=Node.prototype;Dt=ct(n,"firstChild").get,St=ct(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function et(t){return Dt.call(t)}function P(t){return St.call(t)}function _r(t,n){if(!C)return et(t);var r=et(A);if(r===null)r=A.appendChild(rt());else if(n&&r.nodeType!==3){var e=rt();return r==null||r.before(e),q(e),e}return q(r),r}function cr(t,n){if(!C){var r=et(t);return r instanceof Comment&&r.data===""?P(r):r}return A}function vr(t,n=1,r=!1){let e=C?A:t;for(var l;n--;)l=e,e=P(e);if(!C)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=rt();return e===null?l==null||l.after(a):e.before(a),q(a),a}return q(e),e}function pr(t){t.textContent=""}function vn(t){var n=y|D;u===null?n|=I:u.f|=wt;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:Tt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function hr(t){const n=vn(t);return n.equals=mt,n}function It(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ot(e):S(e)}}}function pn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Ot(t){var n,r=u;Z(pn(t));try{It(t),n=Ut(t)}finally{Z(r)}return n}function kt(t){var n=Ot(t),r=(x||t.f&I)&&t.deps!==null?X:E;m(t,r),t.equals(n)||(t.v=n,t.wv=Bt())}function ot(t){It(t),Y(t,0),m(t,b),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Nt(t){u===null&&o===null&&en(),o!==null&&o.f&I&&rn(),it&&nn()}function hn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var l=(t&W)!==0,s=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|D,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var i=O;try{ht(!0),tt(a),a.f|=Jt}catch(c){throw S(a),c}finally{ht(i)}}else n!==null&&nt(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(wt|V))===0;if(!_&&!l&&e&&(s!==null&&hn(a,s),o!==null&&o.f&y)){var p=o;(p.children??(p.children=[])).push(a)}return a}function dr(t){const n=F(j,null,!1);return m(n,E),n.teardown=t,n}function Er(t){Nt();var n=u!==null&&(u.f&T)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Ct(t);return e}}function yr(t){return Nt(),dn(t)}function wr(t){const n=F(W,t,!0);return(r={})=>new Promise(e=>{r.outro?wn(n,()=>{S(n),e(void 0)}):(S(n),e(void 0))})}function Ct(t){return F(Et,t,!1)}function dn(t){return F(j,t,!0)}function Tr(t){return En(t)}function En(t,n=0){return F(j|at|n,t,!0)}function mr(t,n=!0){return F(j|T,t,!0,n)}function bt(t){var n=t.teardown;if(n!==null){const r=it,e=o;dt(!0),$(null);try{n.call(null)}finally{dt(r),$(e)}}}function Pt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ot(n[r])}}function Ft(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;S(r,n),r=e}}function yn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&T||S(n),n=r}}function S(t,n=!0){var r=!1;if((n||t.f&Qt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:P(e);e.remove(),e=s}r=!0}Ft(t,n&&!r),Pt(t),Y(t,0),m(t,b);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();bt(t);var i=t.parent;i!==null&&i.first!==null&&qt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function qt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function wn(t,n){var r=[];Lt(t,r,!0),Tn(r,()=>{S(t),n&&n()})}function Tn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Lt(t,n,r){if(!(t.f&N)){if(t.f^=N,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&yt)!==0||(e.f&T)!==0;Lt(e,n,s?r:!1),e=l}}}function Ar(t){Mt(t,!0)}function Mt(t,n){if(t.f&N){H(t)&&tt(t),t.f^=N;for(var r=t.first;r!==null;){var e=r.next,l=(r.f&yt)!==0||(r.f&T)!==0;Mt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let K=!1,lt=[];function Yt(){K=!1;const t=lt.slice();lt=[],Xt(t)}function gr(t){K||(K=!0,queueMicrotask(Yt)),lt.push(t)}function mn(){K&&Yt()}const jt=0,An=1;let B=!1,U=jt,L=!1,M=null,O=!1,it=!1;function ht(t){O=t}function dt(t){it=t}let R=[],k=0;let o=null;function $(t){o=t}let u=null;function Z(t){u=t}let w=null;function gn(t){w=t}let h=null,d=0,g=null;function Rn(t){g=t}let Ht=1,z=0,x=!1,f=null;function Bt(){return++Ht}function ft(){return!J||f!==null&&f.l===null}function H(t){var p;var n=t.f;if(n&D)return!0;if(n&X){var r=t.deps,e=(n&I)!==0;if(r!==null){var l,s,a=(n&G)!==0,i=e&&u!==null&&!x,_=r.length;if(a||i){for(l=0;l<_;l++)s=r[l],(a||!((p=s==null?void 0:s.reactions)!=null&&p.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=G)}for(l=0;l<_;l++)if(s=r[l],H(s)&&kt(s),s.wv>t.wv)return!0}(!e||u!==null&&!x)&&m(t,E)}return!1}function xn(t,n){for(var r=n;r!==null;){if(r.f&V)try{r.fn(t);return}catch{r.f^=V}r=r.parent}throw B=!1,t}function Dn(t){return(t.f&b)===0&&(t.parent===null||(t.parent.f&V)===0)}function Q(t,n,r,e){if(B){if(r===null&&(B=!1),Dn(n))throw t;return}r!==null&&(B=!0);{xn(t,n);return}}function Ut(t){var _t;var n=h,r=d,e=g,l=o,s=x,a=w,i=f,_=t.f;h=null,d=0,g=null,o=_&(T|W)?null:t,x=!O&&(_&I)!==0,w=null,f=t.ctx,z++;try{var p=(0,t.fn)(),c=t.deps;if(h!==null){var v;if(Y(t,d),c!==null&&d>0)for(c.length=d+h.length,v=0;v<h.length;v++)c[d+v]=h[v];else t.deps=c=h;if(!x)for(v=d;v<c.length;v++)((_t=c[v]).reactions??(_t.reactions=[])).push(t)}else c!==null&&d<c.length&&(Y(t,d),c.length=d);return l!==null&&z++,p}finally{h=n,d=r,g=e,o=l,x=s,w=a,f=i}}function Sn(t,n){let r=n.reactions;if(r!==null){var e=Zt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&y&&(h===null||!h.includes(n))&&(m(n,X),n.f&(I|G)||(n.f^=G),Y(n,0))}function Y(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Sn(t,r[e])}function tt(t){var n=t.f;if(!(n&b)){m(t,E);var r=u,e=f;u=t;try{n&at?yn(t):Ft(t),Pt(t),bt(t);var l=Ut(t);t.teardown=typeof l=="function"?l:null,t.wv=Ht;var s=t.deps,a}catch(i){Q(i,t,r,e||t.ctx)}finally{u=r}}}function Vt(){if(k>1e3){k=0;try{ln()}catch(t){if(M!==null)Q(t,M,null);else throw t}}k++}function Gt(t){var n=t.length;if(n!==0){Vt();var r=O;O=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&E||(l.f^=E);var s=[];Kt(l,s),In(s)}}finally{O=r}}}function In(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(b|N)))try{H(e)&&(tt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qt(e):e.fn=null))}catch(l){Q(l,e,null,e.ctx)}}}function On(){if(L=!1,k>1001)return;const t=R;R=[],Gt(t),L||(k=0,M=null)}function nt(t){U===jt&&(L||(L=!0,queueMicrotask(On))),M=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(W|T)){if(!(r&E))return;n.f^=E}}R.push(n)}function Kt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&T)!==0,a=s&&(l&E)!==0,i=r.next;if(!a&&!(l&N))if(l&j){if(s)r.f^=E;else try{H(r)&&tt(r)}catch(v){Q(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else l&Et&&e.push(r);if(i===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var p=v.next;if(p!==null){r=p;continue t}v=v.parent}}r=i}for(var c=0;c<e.length;c++)_=e[c],n.push(_),Kt(_,n)}function $t(t){var n=U,r=R;try{Vt();const l=[];U=An,R=l,L=!1,Gt(r);var e=t==null?void 0:t();return mn(),(R.length>0||l.length>0)&&$t(),k=0,M=null,e}finally{U=n,R=r}}async function Rr(){await Promise.resolve(),$t()}function xr(t){var c;var n=t.f,r=(n&y)!==0;if(r&&n&b){var e=Ot(t);return ot(t),e}if(o!==null){w!==null&&w.includes(t)&&sn();var l=o.deps;t.rv<z&&(t.rv=z,h===null&&l!==null&&l[d]===t?d++:h===null?h=[t]:h.push(t),g!==null&&u!==null&&u.f&E&&!(u.f&T)&&g.includes(t)&&(m(u,D),nt(u)))}else if(r&&t.deps===null)for(var s=t,a=s.parent,i=s;a!==null;)if(a.f&y){var _=a;i=_,a=_.parent}else{var p=a;(c=p.deriveds)!=null&&c.includes(i)||(p.deriveds??(p.deriveds=[])).push(i);break}return r&&(s=t,H(s)&&kt(s)),t.v}function Dr(t){const n=o;try{return o=null,t()}finally{o=n}}const kn=-7169;function m(t,n){t.f=t.f&kn|n}function Sr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},J&&!n&&(f.l={s:null,u:null,r1:[],r2:ut(!1)})}function Ir(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];Z(s.effect),$(s.reaction),Ct(s.fn)}}finally{Z(r),$(e)}}f=n.p,n.m=!0}return{}}function Or(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)st(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&vt in r&&st(r)}}}function st(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{st(t[e],n)}catch{}const r=Wt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=zt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{Fn as $,u as A,dr as B,gr as C,bn as D,yt as E,Nn as F,fr as G,et as H,un as I,P as J,At as K,ar as L,q as M,ur as N,fn as O,xt as P,Hn as Q,pr as R,Cn as S,wr as T,rt as U,tn as V,J as W,tr as X,nr as Y,vt as Z,Pn as _,Er as a,ut as a0,Un as a1,sr as a2,ct as a3,rr as a4,Vn as a5,Wt as a6,on as a7,ir as a8,Ar as a9,jn as aA,zt as aB,lr as aC,wn as aa,Ct as ab,dn as ac,_n as ad,Bn as ae,Mn as af,Xn as ag,mt as ah,T as ai,W as aj,zn as ak,Wn as al,Jn as am,Yn as an,hr as ao,Qn as ap,$t as aq,Rr as ar,er as as,N as at,cn as au,Lt as av,Tn as aw,$n as ax,Kn as ay,Zn as az,Dr as b,f as c,Ln as d,Or as e,vn as f,xr as g,Gn as h,En as i,mr as j,S as k,C as l,A as m,qn as n,cr as o,Sr as p,Ir as q,Xt as r,vr as s,Tr as t,yr as u,_r as v,or as w,$ as x,Z as y,o as z};
