import{x as b,y as E,z as I,A as R,B as P,C as V,D as q,F as B,G as S,H as C,I as W,J as Y,K as m,L as w,M as A,N as j,m as p,O as $,P as z,Q as F,R as G,S as J,T as K,U as Q,j as U,p as x,l as L,q as X,c as Z}from"./runtime.DCKpoHVL.js";import{b as rr}from"./disclose-version.D9serw20.js";const tr=["touchstart","touchmove"];function er(r){return tr.includes(r)}function ar(r){var t=I,a=R;b(null),E(null);try{return r()}finally{b(t),E(a)}}const nr=new Set,D=new Set;function ir(r,t,a,o){function i(e){if(o.capture||y.call(t,e),!e.cancelBubble)return ar(()=>a.call(this,e))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?V(()=>{t.addEventListener(r,i,o)}):t.addEventListener(r,i,o),i}function fr(r,t,a,o,i){var e={capture:o,passive:i},u=ir(r,t,a,e);(t===document.body||t===window||t===document)&&P(()=>{t.removeEventListener(r,u,e)})}function y(r){var O;var t=this,a=t.ownerDocument,o=r.type,i=((O=r.composedPath)==null?void 0:O.call(r))||[],e=i[0]||r.target,u=0,_=r.__root;if(_){var c=i.indexOf(_);if(c!==-1&&(t===document||t===window)){r.__root=t;return}var h=i.indexOf(t);if(h===-1)return;c<=h&&(u=c)}if(e=i[u]||r.target,e!==t){q(r,"currentTarget",{configurable:!0,get(){return e||a}});var T=I,f=R;b(null),E(null);try{for(var n,s=[];e!==null;){var l=e.assignedSlot||e.parentNode||e.host||null;try{var d=e["__"+o];if(d!==void 0&&!e.disabled)if(B(d)){var[H,...M]=d;H.apply(e,[r,...M])}else d.call(e,r)}catch(g){n?s.push(g):n=g}if(r.cancelBubble||l===t||l===null)break;e=l}if(n){for(let g of s)queueMicrotask(()=>{throw g});throw n}}finally{r.__root=t,delete r.currentTarget,b(T),E(f)}}}function lr(r,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=a,r.nodeValue=a==null?"":a+"")}function sr(r,t){return k(r,t)}function cr(r,t){S(),t.intro=t.intro??!1;const a=t.target,o=L,i=p;try{for(var e=C(a);e&&(e.nodeType!==8||e.data!==W);)e=Y(e);if(!e)throw m;w(!0),A(e),j();const u=k(r,{...t,anchor:e});if(p===null||p.nodeType!==8||p.data!==$)throw z(),m;return w(!1),u}catch(u){if(u===m)return t.recover===!1&&F(),S(),G(a),w(!1),sr(r,t);throw u}finally{w(o),A(i)}}const v=new Map;function k(r,{target:t,anchor:a,props:o={},events:i,context:e,intro:u=!0}){S();var _=new Set,c=f=>{for(var n=0;n<f.length;n++){var s=f[n];if(!_.has(s)){_.add(s);var l=er(s);t.addEventListener(s,y,{passive:l});var d=v.get(s);d===void 0?(document.addEventListener(s,y,{passive:l}),v.set(s,1)):v.set(s,d+1)}}};c(J(nr)),D.add(c);var h=void 0,T=K(()=>{var f=a??t.appendChild(Q());return U(()=>{if(e){x({});var n=Z;n.c=e}i&&(o.$$events=i),L&&rr(f,null),h=r(f,o)||{},L&&(R.nodes_end=p),e&&X()}),()=>{var l;for(var n of _){t.removeEventListener(n,y);var s=v.get(n);--s===0?(document.removeEventListener(n,y),v.delete(n)):v.set(n,s)}D.delete(c),f!==a&&((l=f.parentNode)==null||l.removeChild(f))}});return N.set(h,T),h}let N=new WeakMap;function dr(r,t){const a=N.get(r);return a?(N.delete(r),a(t)):Promise.resolve()}export{fr as e,cr as h,sr as m,lr as s,dr as u};
