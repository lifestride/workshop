var jn=Array.isArray,en=Array.prototype.indexOf,Bn=Array.from,Un=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,ln=Object.getOwnPropertyDescriptors,Vn=Object.prototype,Gn=Array.prototype,sn=Object.getPrototypeOf;const Kn=()=>{};function $n(t){return t()}function mt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,gt=4,U=8,ft=16,D=32,V=64,Z=128,C=256,z=512,p=1024,I=2048,F=4096,P=8192,L=16384,an=32768,At=65536,Zn=1<<17,un=1<<19,kt=1<<20,Et=Symbol("$state"),zn=Symbol("legacy props"),Wn=Symbol("");function Dt(t){return t===this.v}function on(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function It(t){return!on(t,this.v)}function fn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function _n(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function cn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function vn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Xn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Jn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Qn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function tr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function pn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function hn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let nt=!1;function nr(){nt=!0}const rr=1,er=2,lr=4,sr=8,ar=16,ur=1,or=2,ir=4,fr=8,_r=16,cr=1,vr=2,dn="[",En="[!",yn="]",Rt={},pr=Symbol();function _t(t,n){var r={f:0,v:t,reactions:null,equals:Dt,rv:0,wv:0};return r}function hr(t){return St(_t(t))}function wn(t,n=!1){var e;const r=_t(t);return n||(r.equals=It),nt&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function dr(t,n=!1){return St(wn(t,n))}function St(t){return u!==null&&!k&&u.f&y&&(g===null?Nn([t]):g.push(t)),t}function Er(t,n){return Tn(t,Yn(()=>rn(t))),n}function Tn(t,n){return u!==null&&!k&&rt()&&u.f&(y|ft)&&(g===null||!g.includes(t))&&hn(),mn(t,n)}function mn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=zt(),xt(t,I),rt()&&i!==null&&i.f&p&&!(i.f&(D|V))&&(A===null?bn([t]):A.push(t))),n}function xt(t,n){var r=t.reactions;if(r!==null)for(var e=rt(),l=r.length,s=0;s<l;s++){var a=r[s],o=a.f;o&I||!e&&a===i||(T(a,n),o&(p|C)&&(o&y?xt(a,F):lt(a)))}}function Ot(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let x=!1;function yr(t){x=t}let w;function Y(t){if(t===null)throw Ot(),Rt;return w=t}function wr(){return Y(N(w))}function Tr(t){if(x){if(N(w)!==null)throw Ot(),Rt;w=t}}function mr(t=1){if(x){for(var n=t,r=w;n--;)r=N(r);w=r}}function gr(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===yn){if(t===0)return n;t-=1}else(r===dn||r===En)&&(t+=1)}var e=N(n);n.remove(),n=e}}var yt,Ct,Nt;function Ar(){if(yt===void 0){yt=window;var t=Element.prototype,n=Node.prototype;Ct=dt(n,"firstChild").get,Nt=dt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function st(t=""){return document.createTextNode(t)}function at(t){return Ct.call(t)}function N(t){return Nt.call(t)}function kr(t,n){if(!x)return at(t);var r=at(w);if(r===null)r=w.appendChild(st());else if(n&&r.nodeType!==3){var e=st();return r==null||r.before(e),Y(e),e}return Y(r),r}function Dr(t,n){if(!x){var r=at(t);return r instanceof Comment&&r.data===""?N(r):r}return w}function Ir(t,n=1,r=!1){let e=x?w:t;for(var l;n--;)l=e,e=N(e);if(!x)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=st();return e===null?l==null||l.after(a):e.before(a),Y(a),a}return Y(e),e}function Rr(t){t.textContent=""}function bt(t){var n=y|I;i===null?n|=C:i.f|=kt;var r=u!==null&&u.f&y?u:null;const e={children:null,ctx:f,deps:null,equals:Dt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??i};return r!==null&&(r.children??(r.children=[])).push(e),e}function Sr(t){const n=bt(t);return n.equals=It,n}function qt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ct(e):O(e)}}}function gn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Pt(t){var n,r=i;Q(gn(t));try{qt(t),n=Xt(t)}finally{Q(r)}return n}function Ft(t){var n=Pt(t),r=(S||t.f&C)&&t.deps!==null?F:p;T(t,r),t.equals(n)||(t.v=n,t.wv=zt())}function ct(t){qt(t),B(t,0),T(t,L),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Lt(t){i===null&&u===null&&cn(),u!==null&&u.f&C&&_n(),vt&&fn()}function An(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function M(t,n,r,e=!0){var l=(t&V)!==0,s=i,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|I,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var o=b;try{wt(!0),pt(a),a.f|=an}catch(m){throw O(a),m}finally{wt(o)}}else n!==null&&lt(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(kt|Z))===0;if(!_&&!l&&e&&(s!==null&&An(a,s),u!==null&&u.f&y)){var c=u;(c.children??(c.children=[])).push(a)}return a}function xr(t){const n=M(U,null,!1);return T(n,p),n.teardown=t,n}function Or(t){Lt();var n=i!==null&&(i.f&D)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:i,reaction:u})}else{var e=Mt(t);return e}}function Cr(t){return Lt(),kn(t)}function Nr(t){const n=M(V,t,!0);return(r={})=>new Promise(e=>{r.outro?Rn(n,()=>{O(n),e(void 0)}):(O(n),e(void 0))})}function Mt(t){return M(gt,t,!1)}function kn(t){return M(U,t,!0)}function br(t,n=[],r=bt){const e=n.map(r);return Dn(()=>t(...e.map(rn)))}function Dn(t,n=0){return M(U|ft|n,t,!0)}function qr(t,n=!0){return M(U|D,t,!0,n)}function Yt(t){var n=t.teardown;if(n!==null){const r=vt,e=u;Tt(!0),J(null);try{n.call(null)}finally{Tt(r),J(e)}}}function Ht(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ct(n[r])}}function jt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;O(r,n),r=e}}function In(t){for(var n=t.first;n!==null;){var r=n.next;n.f&D||O(n),n=r}}function O(t,n=!0){var r=!1;if((n||t.f&un)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:N(e);e.remove(),e=s}r=!0}jt(t,n&&!r),Ht(t),B(t,0),T(t,L);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();Yt(t);var o=t.parent;o!==null&&o.first!==null&&Bt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Bt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Rn(t,n){var r=[];Ut(t,r,!0),Sn(r,()=>{O(t),n&&n()})}function Sn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Ut(t,n,r){if(!(t.f&P)){if(t.f^=P,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&At)!==0||(e.f&D)!==0;Ut(e,n,s?r:!1),e=l}}}function Pr(t){Vt(t,!0)}function Vt(t,n){if(t.f&P){t.f^=P,t.f&p||(t.f^=p),G(t)&&(T(t,I),lt(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&At)!==0||(r.f&D)!==0;Vt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}const xn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let W=!1,X=!1,ut=[],ot=[];function Gt(){W=!1;const t=ut.slice();ut=[],mt(t)}function Kt(){X=!1;const t=ot.slice();ot=[],mt(t)}function Fr(t){W||(W=!0,queueMicrotask(Gt)),ut.push(t)}function Lr(t){X||(X=!0,xn(Kt)),ot.push(t)}function On(){W&&Gt(),X&&Kt()}const $t=0,Cn=1;let K=!1,$=$t,H=!1,j=null,b=!1,vt=!1;function wt(t){b=t}function Tt(t){vt=t}let R=[],q=0;let u=null,k=!1;function J(t){u=t}let i=null;function Q(t){i=t}let g=null;function Nn(t){g=t}let h=null,E=0,A=null;function bn(t){A=t}let Zt=1,tt=0,S=!1,f=null;function zt(){return++Zt}function rt(){return!nt||f!==null&&f.l===null}function G(t){var c;var n=t.f;if(n&I)return!0;if(n&F){var r=t.deps,e=(n&C)!==0;if(r!==null){var l,s,a=(n&z)!==0,o=e&&i!==null&&!S,_=r.length;if(a||o){for(l=0;l<_;l++)s=r[l],(a||!((c=s==null?void 0:s.reactions)!=null&&c.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=z)}for(l=0;l<_;l++)if(s=r[l],G(s)&&Ft(s),s.wv>t.wv)return!0}(!e||i!==null&&!S)&&T(t,p)}return!1}function qn(t,n){for(var r=n;r!==null;){if(r.f&Z)try{r.fn(t);return}catch{r.f^=Z}r=r.parent}throw K=!1,t}function Pn(t){return(t.f&L)===0&&(t.parent===null||(t.parent.f&Z)===0)}function et(t,n,r,e){if(K){if(r===null&&(K=!1),Pn(n))throw t;return}r!==null&&(K=!0);{qn(t,n);return}}function Wt(t,n,r=0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var s=e[l];s.f&y?Wt(s,n,r+1):n===s&&(r===0?T(s,I):s.f&p&&T(s,F),lt(s))}}function Xt(t){var ht;var n=h,r=E,e=A,l=u,s=S,a=g,o=f,_=k,c=t.f;h=null,E=0,A=null,u=c&(D|V)?null:t,S=!b&&(c&C)!==0,g=null,f=t.ctx,k=!1,tt++;try{var m=(0,t.fn)(),v=t.deps;if(h!==null){var d;if(B(t,E),v!==null&&E>0)for(v.length=E+h.length,d=0;d<h.length;d++)v[E+d]=h[d];else t.deps=v=h;if(!S)for(d=E;d<v.length;d++)((ht=v[d]).reactions??(ht.reactions=[])).push(t)}else v!==null&&E<v.length&&(B(t,E),v.length=E);if(rt()&&A!==null&&!(t.f&(y|F|I)))for(d=0;d<A.length;d++)Wt(A[d],t);return l!==null&&tt++,m}finally{h=n,E=r,A=e,u=l,S=s,g=a,f=o,k=_}}function Fn(t,n){let r=n.reactions;if(r!==null){var e=en.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&y&&(h===null||!h.includes(n))&&(T(n,F),n.f&(C|z)||(n.f^=z),B(n,0))}function B(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Fn(t,r[e])}function pt(t){var n=t.f;if(!(n&L)){T(t,p);var r=i,e=f;i=t;try{n&ft?In(t):jt(t),Ht(t),Yt(t);var l=Xt(t);t.teardown=typeof l=="function"?l:null,t.wv=Zt;var s=t.deps,a}catch(o){et(o,t,r,e||t.ctx)}finally{i=r}}}function Jt(){if(q>1e3){q=0;try{vn()}catch(t){if(j!==null)et(t,j,null);else throw t}}q++}function Qt(t){var n=t.length;if(n!==0){Jt();var r=b;b=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&p||(l.f^=p);var s=[];tn(l,s),Ln(s)}}finally{b=r}}}function Ln(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(L|P)))try{G(e)&&(pt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Bt(e):e.fn=null))}catch(l){et(l,e,null,e.ctx)}}}function Mn(){if(H=!1,q>1001)return;const t=R;R=[],Qt(t),H||(q=0,j=null)}function lt(t){$===$t&&(H||(H=!0,queueMicrotask(Mn))),j=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(V|D)){if(!(r&p))return;n.f^=p}}R.push(n)}function tn(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&D)!==0,a=s&&(l&p)!==0,o=r.next;if(!a&&!(l&P))if(l&U){if(s)r.f^=p;else try{G(r)&&pt(r)}catch(v){et(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else l&gt&&e.push(r);if(o===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var c=v.next;if(c!==null){r=c;continue t}v=v.parent}}r=o}for(var m=0;m<e.length;m++)_=e[m],n.push(_),tn(_,n)}function nn(t){var n=$,r=R;try{Jt();const l=[];$=Cn,R=l,H=!1,Qt(r);var e=t==null?void 0:t();return On(),(R.length>0||l.length>0)&&nn(),q=0,j=null,e}finally{$=n,R=r}}async function Mr(){await Promise.resolve(),nn()}function rn(t){var m;var n=t.f,r=(n&y)!==0;if(r&&n&L){var e=Pt(t);return ct(t),e}if(u!==null&&!k){g!==null&&g.includes(t)&&pn();var l=u.deps;t.rv<tt&&(t.rv=tt,h===null&&l!==null&&l[E]===t?E++:h===null?h=[t]:h.push(t))}else if(r&&t.deps===null)for(var s=t,a=s.parent,o=s;a!==null;)if(a.f&y){var _=a;o=_,a=_.parent}else{var c=a;(m=c.deriveds)!=null&&m.includes(o)||(c.deriveds??(c.deriveds=[])).push(o);break}return r&&(s=t,G(s)&&Ft(s)),t.v}function Yn(t){var n=k;try{return k=!0,t()}finally{k=n}}const Hn=-7169;function T(t,n){t.f=t.f&Hn|n}function Yr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},nt&&!n&&(f.l={s:null,u:null,r1:[],r2:_t(!1)})}function Hr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=i,e=u;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];Q(s.effect),J(s.reaction),Mt(s.fn)}}finally{Q(r),J(e)}}f=n.p,n.m=!0}return{}}function jr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Et in t)it(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&Et in r&&it(r)}}}function it(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{it(t[e],n)}catch{}const r=sn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=ln(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{Mr as $,jn as A,u as B,i as C,Ar as D,At as E,at as F,N as G,dn as H,Rt as I,yr as J,Y as K,wr as L,yn as M,Ot as N,Xn as O,Rr as P,Bn as Q,Nr as R,st as S,on as T,nt as U,cr as V,vr as W,zn as X,Tn as Y,nn as Z,wn as _,Or as a,hr as a0,Et as a1,Vn as a2,Gn as a3,_t as a4,Qn as a5,dt as a6,pr as a7,tr as a8,sn as a9,sr as aA,ar as aB,Lr as aC,Wn as aD,ln as aE,dr as aF,mr as aG,Er as aH,En as aa,gr as ab,Pr as ac,Rn as ad,Mt as ae,kn as af,Fr as ag,xr as ah,Jn as ai,Zn as aj,ir as ak,It as al,D as am,V as an,ur as ao,or as ap,fr as aq,Sr as ar,_r as as,P as at,rr as au,mn as av,er as aw,Ut as ax,Sn as ay,lr as az,Yn as b,f as c,$n as d,jr as e,bt as f,rn as g,nr as h,Dn as i,qr as j,O as k,x as l,w as m,Kn as n,Dr as o,Yr as p,Hr as q,mt as r,Ir as s,br as t,Cr as u,kr as v,Tr as w,Un as x,J as y,Q as z};
