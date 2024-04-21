import{j as e,r as i,a as A}from"./react-BrP7bTIu.js";import{c as I}from"./react-dom-BtizlmEl.js";import{i as U,g as P,a as M,b as O,o as B,q as z,w as D,c as W,d as k,s as H,e as F,f as K,u as Y,h as Z,j as Q,k as N,l as b,m as G}from"./@firebase-DLhgF3GW.js";import"./firebase-BGoxOC5i.js";import{d as w,e as J,f as V,g as j}from"./react-router-C0nYgrbg.js";import{N as T,H as X}from"./react-router-dom-iW47g7mf.js";import"./scheduler-CzFDRTuY.js";import"./tslib-BGVaTf34.js";import"./idb-BXWtuYvb.js";import"./@remix-run-BgBg4VcQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const ee="_container_11yjs_2",se={container:ee},te="_container_ashy1_1",ne={container:te},re="_container_12177_1",oe="_time_12177_12",C={container:re,time:oe},g=({messageText:n,time:t})=>e.jsxs("div",{className:C.container,children:[e.jsx("span",{children:n}),e.jsx("span",{className:C.time,children:t})]}),ae="_container_6gyfo_1",ce={container:ae},ie=()=>e.jsx("div",{className:ce.container,children:e.jsx("textarea",{})}),le=()=>e.jsxs("div",{className:ne.container,children:[e.jsx(g,{messageText:"111111111111111111111111",time:"15:40"}),e.jsx(g,{messageText:"22222222222222222222",time:"15:40"}),e.jsx(g,{messageText:"333333333333333333333333333333333",time:"15:40"}),e.jsx(g,{messageText:"444444444444444444",time:"15:40"}),e.jsx(g,{messageText:"55555555555555555555555555",time:"15:40"}),e.jsx(ie,{})]}),ue="_container_t6ds5_1",de="_wrapper_t6ds5_14",pe="_username_t6ds5_20",me="_message_t6ds5_23",m={container:ue,wrapper:de,username:pe,message:me},ge={apiKey:"AIzaSyAB80-tZTx63iK-eSokF2n1HNM25fO_rZ4",authDomain:"react-chat-app-cf377.firebaseapp.com",projectId:"react-chat-app-cf377",storageBucket:"react-chat-app-cf377.appspot.com",messagingSenderId:"333727045415",appId:"1:333727045415:web:07aac7a056b70e402bbb02"};U(ge);const h=P(),he=M(),y=O(),x=i.createContext({currentUser:{},isLoading:!0}),xe=({children:n})=>{const[t,o]=i.useState({}),[c,s]=i.useState(!0);return i.useEffect(()=>{const r=B(h,a=>{a&&o(a),s(!1)});return()=>{r()}},[t]),e.jsx(x.Provider,{value:{currentUser:t,isLoading:c},children:n})},L=({chatUser:n,isSearched:t})=>{const{currentUser:o}=i.useContext(x),c=async()=>{if(o.uid!==""&&o.uid!==void 0){const s=o.uid>n.uid?o.uid+n.uid:n.uid+o.uid;console.log(s)}console.log(o.uid+n.uid)};return e.jsxs("div",{className:m.container,children:[e.jsx("img",{src:n.img}),t?e.jsx("div",{onClick:()=>c(),className:m.wrapper,children:e.jsx("p",{className:m.username,children:n.username})}):e.jsxs("div",{className:m.wrapper,children:[e.jsx("p",{className:m.username,children:n.username}),e.jsx("p",{className:m.message,children:n.lastMessage})]})]})},je="_container_17q7h_1",fe={container:je},_e=({setSearchedUser:n})=>{const[t,o]=i.useState(""),c=async s=>{const r=z(W(y,"users"),D("email","==",s));try{const a=await k(r);console.log(a.docs.length),a.docs.length>0?a.forEach(l=>{const d=l.data();console.log(d),n({username:d.displayName,img:d.photoURL,lastMessage:"???",uid:d.uid})}):n({username:"",img:"",lastMessage:"",uid:""})}catch(a){o(String(a)),console.log(a)}};return e.jsxs("div",{className:fe.container,children:[e.jsx("input",{type:"text",placeholder:"Search email",onChange:s=>{c(s.target.value)}}),t!==""&&e.jsx("p",{children:t})]})},ye="_container_yqqb2_1",we="_navbar_yqqb2_5",ve="_logoutBtn_yqqb2_11",f={container:ye,navbar:we,logoutBtn:ve},Se=()=>{const n=w(),{currentUser:t}=i.useContext(x),[o,c]=i.useState({username:"",img:"",lastMessage:"",uid:""}),[s]=i.useState({username:"temp",img:"https://source.unsplash.com/random",lastMessage:"jazda",uid:"qwertyuioQWERTYUIO"});return e.jsxs("div",{className:f.container,children:[e.jsxs("div",{className:f.navbar,children:[e.jsx("img",{src:t==null?void 0:t.photoURL,alt:t.displayName}),e.jsx("span",{children:t.displayName}),e.jsx("button",{className:f.logoutBtn,onClick:()=>{H(h).then(()=>{console.log("WYLogoWANO"),n("../login",{replace:!0})}).catch(r=>{console.log(r)})},children:"Logout"})]}),e.jsx(_e,{setSearchedUser:c}),o.username!==""&&e.jsx(L,{chatUser:o,isSearched:!0}),e.jsx(L,{chatUser:s})]})},Ne="_container_16cuw_1",be="_wrapper_16cuw_5",Ce="_loadingScreen_16cuw_9",_={container:Ne,wrapper:be,loadingScreen:Ce},Le=()=>{const{currentUser:n,isLoading:t}=i.useContext(x);return console.log(n),console.log(t),t?e.jsx("div",{className:_.loading,children:"Loading..."}):"email"in n?e.jsx("div",{className:_.container,children:e.jsxs("div",{className:_.wrapper,children:[e.jsx(Se,{}),e.jsx(le,{})]})}):e.jsx(J,{to:{pathname:"/login"}})},$e="_container_rtgsm_1",Ee="_error_rtgsm_21",$={container:$e,error:Ee},Te=()=>{const[n,t]=i.useState(""),o=w(),c=s=>{s.preventDefault();const r=s.currentTarget[0].value,a=s.currentTarget[1].value,l=s.currentTarget[2].value,d=s.currentTarget[4],v=d.files?d.files[0]:null;console.log(r);try{const p=F(h,a,l),R=K(he,r);if(v){const S=Y(R,v);S.on("state_changed",u=>{const q=u.bytesTransferred/u.totalBytes*100;switch(console.log("Upload is "+q+"% done"),u.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running");break}},u=>{t(String(u))},()=>{Z(S.snapshot.ref).then(async u=>{await Q((await p).user,{displayName:r,photoURL:u}),await N(b(y,"users",(await p).user.uid),{uid:(await p).user.uid,displayName:r,email:a,photoURL:u}),await N(b(y,"userChats",(await p).user.uid),{})}),o("../",{replace:!0})})}}catch(p){t(String(p)),console.log(p)}};return e.jsxs("div",{className:$.container,children:[e.jsxs("form",{onSubmit:s=>c(s),children:[e.jsx("input",{type:"text",autoComplete:"username",placeholder:"Username"}),e.jsx("input",{type:"email",autoComplete:"email",placeholder:"E-mail"}),e.jsx("input",{type:"password",autoComplete:"new-password",placeholder:"Password"}),e.jsx("input",{type:"password",autoComplete:"new-password",placeholder:"Confirm password"}),e.jsx("input",{type:"file"}),e.jsx("button",{children:"Sign Up"}),n!==""&&e.jsx("span",{className:$.error,children:"Something went wrong"})]}),e.jsxs("p",{children:["Already have an account? ",e.jsx(T,{to:"/login",children:"Log In"})]})]})},Re="_container_zdrll_1",qe="_error_zdrll_38",E={container:Re,error:qe},Ae=()=>{const[n,t]=i.useState(""),o=w(),c=s=>{s.preventDefault();const r=s.currentTarget[0].value,a=s.currentTarget[1].value;try{try{G(h,r,a),console.log("udalo sie zalogowac")}catch(l){t(String(l)),console.log(l)}o("../",{replace:!0}),console.log("przenosze na homepage")}catch(l){t(String(l)),console.log(l)}};return e.jsxs("div",{className:E.container,children:[e.jsxs("form",{onSubmit:s=>c(s),children:[e.jsx("input",{type:"email",autoComplete:"email",placeholder:"E-mail"}),e.jsx("input",{type:"password",autoComplete:"current-password",placeholder:"Password"}),e.jsx("button",{children:"Login"}),n!==""&&e.jsx("span",{className:E.error,children:"Something went wrong"})]}),e.jsxs("p",{children:["Don't have an account? ",e.jsx(T,{to:"/register",children:"Sign Up"})]})]})};function Ie(){return e.jsx("div",{className:se.container,children:e.jsxs(V,{children:[e.jsx(j,{path:"/",element:e.jsx(Le,{})}),e.jsx(j,{path:"/register",element:e.jsx(Te,{})}),e.jsx(j,{path:"/login",element:e.jsx(Ae,{})})]})})}I.createRoot(document.getElementById("root")).render(e.jsx(A.StrictMode,{children:e.jsx(xe,{children:e.jsx(X,{children:e.jsx(Ie,{})})})}));
