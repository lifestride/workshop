import{g as P,O,P as D,Q as Y,R as H,S as L,T as b,M as $,V as B,J as C,L as T,c as g,s as A,a as W,f as p,W as j,K as q,X as J,Y as K,Z as Q,_ as X,$ as Z,e as z,B as F,k as G,h as E,D as U}from"./BfgOeBKH.js";import{b as x}from"./BC7vDPbO.js";const rr=["touchstart","touchmove"];function er(r){return rr.includes(r)}const V=new Set,S=new Set;function sr(r){for(var e=0;e<r.length;e++)V.add(r[e]);for(var t of S)t(r)}function m(r){var N;var e=this,t=e.ownerDocument,c=r.type,i=((N=r.composedPath)==null?void 0:N.call(r))||[],a=i[0]||r.target,d=0,_=r.__root;if(_){var u=i.indexOf(_);if(u!==-1&&(e===document||e===window)){r.__root=e;return}var h=i.indexOf(e);if(h===-1)return;u<=h&&(d=u)}if(a=i[d]||r.target,a!==e){P(r,"currentTarget",{configurable:!0,get(){return a||t}});var w=H,o=L;O(null),D(null);try{for(var n,s=[];a!==null;){var f=a.assignedSlot||a.parentNode||a.host||null;try{var l=a["__"+c];if(l!==void 0&&!a.disabled)if(Y(l)){var[I,...M]=l;I.apply(a,[r,...M])}else l.call(a,r)}catch(y){n?s.push(y):n=y}if(r.cancelBubble||f===e||f===null)break;a=f}if(n){for(let y of s)queueMicrotask(()=>{throw y});throw n}}finally{r.__root=e,delete r.currentTarget,O(w),D(o)}}}function or(r,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=t,r.nodeValue=t+"")}function ar(r,e){return k(r,e)}function ir(r,e){b(),e.intro=e.intro??!1;const t=e.target,c=E,i=p;try{for(var a=$(t);a&&(a.nodeType!==8||a.data!==B);)a=C(a);if(!a)throw T;g(!0),A(a),W();const d=k(r,{...e,anchor:a});if(p===null||p.nodeType!==8||p.data!==j)throw q(),T;return g(!1),d}catch(d){if(d===T)return e.recover===!1&&J(),b(),K(t),g(!1),ar(r,e);throw d}finally{g(c),A(i)}}const v=new Map;function k(r,{target:e,anchor:t,props:c={},events:i,context:a,intro:d=!0}){b();var _=new Set,u=o=>{for(var n=0;n<o.length;n++){var s=o[n];if(!_.has(s)){_.add(s);var f=er(s);e.addEventListener(s,m,{passive:f});var l=v.get(s);l===void 0?(document.addEventListener(s,m,{passive:f}),v.set(s,1)):v.set(s,l+1)}}};u(Q(V)),S.add(u);var h=void 0,w=X(()=>{var o=t??e.appendChild(Z());return z(()=>{if(a){F({});var n=G;n.c=a}i&&(c.$$events=i),E&&x(o,null),h=r(o,c)||{},E&&(L.nodes_end=p),a&&U()}),()=>{var f;for(var n of _){e.removeEventListener(n,m);var s=v.get(n);--s===0?(document.removeEventListener(n,m),v.delete(n)):v.set(n,s)}S.delete(u),o!==t&&((f=o.parentNode)==null||f.removeChild(o))}});return R.set(h,w),h}let R=new WeakMap;function fr(r,e){const t=R.get(r);return t?(R.delete(r),t(e)):Promise.resolve()}export{sr as d,ir as h,ar as m,or as s,fr as u};
