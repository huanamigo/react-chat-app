import{j as e,r as p,a as C}from"./react-BrP7bTIu.js";import{c as L}from"./react-dom-BtizlmEl.js";import{i as R,g as k,a as M,b as P,c as U,d as E,u as I,e as O,f as z,s as f,h as _,o as D}from"./@firebase-SVGPPxer.js";import"./firebase-DYtkTYGS.js";import{N,H as B}from"./react-router-dom-WETVU6vL.js";import{d as H,e as F,f as d}from"./react-router-Clg5aAZL.js";import"./scheduler-CzFDRTuY.js";import"./tslib-BGVaTf34.js";import"./idb-BXWtuYvb.js";import"./@remix-run-BgBg4VcQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(s){if(s.ep)return;s.ep=!0;const t=a(s);fetch(s.href,t)}})();const K="_container_11yjs_2",Z={container:K},q="_container_ashy1_1",W={container:q},G="_container_12177_1",J="_time_12177_12",y={container:G,time:J},l=({messageText:n,time:r})=>e.jsxs("div",{className:y.container,children:[e.jsx("span",{children:n}),e.jsx("span",{className:y.time,children:r})]}),Q="_container_6gyfo_1",V={container:Q},X=()=>e.jsx("div",{className:V.container,children:e.jsx("textarea",{})}),Y=()=>e.jsxs("div",{className:W.container,children:[e.jsx(l,{messageText:"111111111111111111111111",time:"15:40"}),e.jsx(l,{messageText:"22222222222222222222",time:"15:40"}),e.jsx(l,{messageText:"333333333333333333333333333333333",time:"15:40"}),e.jsx(l,{messageText:"444444444444444444",time:"15:40"}),e.jsx(l,{messageText:"55555555555555555555555555",time:"15:40"}),e.jsx(X,{})]}),ee="_container_140fh_1",se="_wrapper_140fh_10",te="_username_140fh_13",re="_message_140fh_16",m={container:ee,wrapper:se,username:te,message:re},u=({username:n,img:r,lastMessage:a})=>e.jsxs("div",{className:m.container,children:[e.jsx("img",{src:r}),e.jsxs("div",{className:m.wrapper,children:[e.jsx("p",{className:m.username,children:n}),e.jsx("p",{className:m.message,children:a})]})]}),ne="_container_13318_1",ae={container:ne},oe=()=>e.jsx("div",{className:ae.container,children:e.jsx("input",{type:"text",placeholder:"Search"})}),ce="_container_bzkbo_1",ie={container:ce},le=()=>e.jsxs("div",{className:ie.container,children:[e.jsx(oe,{}),e.jsx(u,{username:"janek",img:"https://source.unsplash.com/random",lastMessage:"brudka"}),e.jsx(u,{username:"janek",img:"https://source.unsplash.com/random",lastMessage:"brudka"}),e.jsx(u,{username:"janek",img:"https://source.unsplash.com/random",lastMessage:"brudka"}),e.jsx(u,{username:"janek",img:"https://source.unsplash.com/random",lastMessage:"brudka"}),e.jsx(u,{username:"janek",img:"https://source.unsplash.com/random",lastMessage:"brudka"})]}),ue="_container_zhmx4_1",pe="_wrapper_zhmx4_5",w={container:ue,wrapper:pe},me=()=>e.jsx("div",{className:w.container,children:e.jsxs("div",{className:w.wrapper,children:[e.jsx(le,{}),e.jsx(Y,{})]})}),de="_container_rtgsm_1",he="_error_rtgsm_21",v={container:de,error:he},xe={apiKey:"AIzaSyAB80-tZTx63iK-eSokF2n1HNM25fO_rZ4",authDomain:"react-chat-app-cf377.firebaseapp.com",projectId:"react-chat-app-cf377",storageBucket:"react-chat-app-cf377.appspot.com",messagingSenderId:"333727045415",appId:"1:333727045415:web:07aac7a056b70e402bbb02"};R(xe);const $=k(),ge=M(),b=P(),je=()=>{const[n,r]=p.useState(""),a=H(),c=s=>{s.preventDefault(),console.log(s.currentTarget[0].value);const t=s.currentTarget[0].value,i=s.currentTarget[1].value,T=s.currentTarget[2].value,h=s.currentTarget[4],x=h.files?h.files[0]:null;try{const o=U($,i,T),A=E(ge,t);if(x){const g=I(A,x);g.on("state_changed",()=>{O(g.snapshot.ref).then(async j=>{await z((await o).user,{displayName:t,photoURL:j}),await f(_(b,"users",(await o).user.uid),{uid:(await o).user.uid,displayName:t,email:i,photoURL:j}),await f(_(b,"userChats",(await o).user.uid),{}),a("../",{replace:!0})})})}r("")}catch(o){r(String(o)),console.log(o)}};return e.jsxs("div",{className:v.container,children:[e.jsxs("form",{onSubmit:s=>c(s),children:[e.jsx("input",{type:"text",placeholder:"Username"}),e.jsx("input",{type:"email",placeholder:"E-mail"}),e.jsx("input",{type:"new-password",placeholder:"Password"}),e.jsx("input",{type:"new-password",placeholder:"Confirm password"}),e.jsx("input",{type:"file"}),e.jsx("button",{children:"Sign Up"}),n!==""&&e.jsx("span",{className:v.error,children:"Something went wrong"})]}),e.jsxs("p",{children:["Already have an account? ",e.jsx(N,{to:"/login",children:"Log In"})]})]})},fe="_container_rtgsm_1",_e="_error_rtgsm_21",ye={container:fe,error:_e},we=()=>e.jsxs("div",{className:ye.container,children:[e.jsxs("form",{children:[e.jsx("input",{type:"email",placeholder:"E-mail"}),e.jsx("input",{type:"password",placeholder:"Password"}),e.jsx("button",{children:"Login"})]}),e.jsxs("p",{children:["Don't have an account? ",e.jsx(N,{to:"/register",children:"Sign Up"})]})]}),S=p.createContext({currentUser:{}}),ve=({children:n})=>{const[r,a]=p.useState({});return p.useEffect(()=>{const c=D($,s=>{s&&a(s),console.log(s)});return()=>{c()}},[r]),e.jsx(S.Provider,{value:{currentUser:r},children:n})};function be(){const{currentUser:n}=p.useContext(S);return console.log(n),e.jsx("div",{className:Z.container,children:e.jsxs(F,{children:[e.jsx(d,{path:"/",element:e.jsx(me,{})}),e.jsx(d,{path:"/register",element:e.jsx(je,{})}),e.jsx(d,{path:"/login",element:e.jsx(we,{})})]})})}L.createRoot(document.getElementById("root")).render(e.jsx(C.StrictMode,{children:e.jsx(ve,{children:e.jsx(B,{children:e.jsx(be,{})})})}));
