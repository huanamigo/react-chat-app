import{r as c,R as B}from"./react-BrP7bTIu.js";import"./react-dom-BtizlmEl.js";import{R as D,u as _,a as A,D as H,N as V,b as z,c as G,d as M}from"./react-router-C0nYgrbg.js";import{c as X,s as b,i as W,b as N,d as k}from"./@remix-run-BgBg4VcQ.js";/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},S.apply(this,arguments)}function j(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,i;for(i=0;i<a.length;i++)o=a[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function q(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function J(e,t){return e.button===0&&(!t||t==="_self")&&!q(e)}const Q=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Y=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Z="6";try{window.__reactRouterVersion=Z}catch{}const $=c.createContext({isTransitioning:!1}),ee="startTransition",O=B[ee];function fe(e){let{basename:t,children:n,future:a,window:o}=e,i=c.useRef();i.current==null&&(i.current=X({window:o,v5Compat:!0}));let s=i.current,[d,h]=c.useState({action:s.action,location:s.location}),{v7_startTransition:r}=a||{},p=c.useCallback(m=>{r&&O?O(()=>h(m)):h(m)},[h,r]);return c.useLayoutEffect(()=>s.listen(p),[s,p]),c.createElement(D,{basename:t,children:n,location:d.location,navigationType:d.action,navigator:s,future:a})}const te=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ne=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ae=c.forwardRef(function(t,n){let{onClick:a,relative:o,reloadDocument:i,replace:s,state:d,target:h,to:r,preventScrollReset:p,unstable_viewTransition:m}=t,w=j(t,Q),{basename:x}=c.useContext(V),v,g=!1;if(typeof r=="string"&&ne.test(r)&&(v=r,te))try{let f=new URL(window.location.href),l=r.startsWith("//")?new URL(f.protocol+r):new URL(r),y=b(l.pathname,x);l.origin===f.origin&&y!=null?r=y+l.search+l.hash:g=!0}catch{}let R=z(r,{relative:o}),C=re(r,{replace:s,state:d,target:h,preventScrollReset:p,relative:o,unstable_viewTransition:m});function u(f){a&&a(f),f.defaultPrevented||C(f)}return c.createElement("a",S({},w,{href:v||R,onClick:g||i?a:u,ref:n,target:h}))}),he=c.forwardRef(function(t,n){let{"aria-current":a="page",caseSensitive:o=!1,className:i="",end:s=!1,style:d,to:h,unstable_viewTransition:r,children:p}=t,m=j(t,Y),w=_(h,{relative:m.relative}),x=A(),v=c.useContext(H),{navigator:g,basename:R}=c.useContext(V),C=v!=null&&oe(w)&&r===!0,u=g.encodeLocation?g.encodeLocation(w).pathname:w.pathname,f=x.pathname,l=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;o||(f=f.toLowerCase(),l=l?l.toLowerCase():null,u=u.toLowerCase()),l&&R&&(l=b(l,R)||l);const y=u!=="/"&&u.endsWith("/")?u.length-1:u.length;let L=f===u||!s&&f.startsWith(u)&&f.charAt(y)==="/",E=l!=null&&(l===u||!s&&l.startsWith(u)&&l.charAt(u.length)==="/"),T={isActive:L,isPending:E,isTransitioning:C},I=L?a:void 0,P;typeof i=="function"?P=i(T):P=[i,L?"active":null,E?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let K=typeof d=="function"?d(T):d;return c.createElement(ae,S({},m,{"aria-current":I,className:P,ref:n,style:K,to:h,unstable_viewTransition:r}),typeof p=="function"?p(T):p)});var U;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(U||(U={}));var F;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(F||(F={}));function ie(e){let t=c.useContext(G);return t||W(!1),t}function re(e,t){let{target:n,replace:a,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:d}=t===void 0?{}:t,h=M(),r=A(),p=_(e,{relative:s});return c.useCallback(m=>{if(J(m,n)){m.preventDefault();let w=a!==void 0?a:k(r)===k(p);h(e,{replace:w,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:d})}},[r,h,p,a,o,n,e,i,s,d])}function oe(e,t){t===void 0&&(t={});let n=c.useContext($);n==null&&W(!1);let{basename:a}=ie(U.useViewTransitionState),o=_(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=b(n.currentLocation.pathname,a)||n.currentLocation.pathname,s=b(n.nextLocation.pathname,a)||n.nextLocation.pathname;return N(o.pathname,s)!=null||N(o.pathname,i)!=null}export{fe as H,he as N};