import{s as S,n as _,b as x}from"../chunks/scheduler.4e6a9c3a.js";import{S as j,i as k,h as f,j as d,s as q,k as g,l as h,n as v,f as l,b as y,d as m,o as $,p as E}from"../chunks/index.725e2a91.js";import{s as C}from"../chunks/singletons.f9536079.js";const H=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return H().page.subscribe(s)}};function w(s){var b;let t,r=s[0].status+"",o,n,i,p=((b=s[0].error)==null?void 0:b.message)+"",u;return{c(){t=f("h1"),o=d(r),n=q(),i=f("p"),u=d(p)},l(e){t=g(e,"H1",{});var a=h(t);o=v(a,r),a.forEach(l),n=y(e),i=g(e,"P",{});var c=h(i);u=v(c,p),c.forEach(l)},m(e,a){m(e,t,a),$(t,o),m(e,n,a),m(e,i,a),$(i,u)},p(e,[a]){var c;a&1&&r!==(r=e[0].status+"")&&E(o,r),a&1&&p!==(p=((c=e[0].error)==null?void 0:c.message)+"")&&E(u,p)},i:_,o:_,d(e){e&&(l(t),l(n),l(i))}}}function z(s,t,r){let o;return x(s,P,n=>r(0,o=n)),[o]}let F=class extends j{constructor(t){super(),k(this,t,z,w,S,{})}};export{F as component};
