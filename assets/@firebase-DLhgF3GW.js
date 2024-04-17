import{_ as Ui}from"./tslib-BGVaTf34.js";import{o as ed}from"./idb-BXWtuYvb.js";var ea={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},td=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},bc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(t[l],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Cc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):td(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new nd;const d=i<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class nd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rd=function(n){const e=Cc(n);return bc.encodeByteArray(e,!0)},xr=function(n){return rd(n).replace(/\./g,"")},kc=function(n){try{return bc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=()=>sd().__FIREBASE_DEFAULTS__,od=()=>{if(typeof process>"u"||typeof ea>"u")return;const n=ea.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ad=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&kc(n[1]);return e&&JSON.parse(e)},os=()=>{try{return id()||od()||ad()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Dc=n=>{var e,t;return(t=(e=os())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Nc=n=>{const e=Dc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Oc=()=>{var n;return(n=os())===null||n===void 0?void 0:n.config},Vc=n=>{var e;return(e=os())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[xr(JSON.stringify(t)),xr(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ud(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(G())}function ld(){var n;const e=(n=os())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function dd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fd(){const n=G();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function pd(){return!ld()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Mc(){try{return typeof indexedDB=="object"}catch{return!1}}function gd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md="FirebaseError";class Le extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=md,Object.setPrototypeOf(this,Le.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gn.prototype.create)}}class Gn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?_d(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Le(s,a,r)}}function _d(n,e){return n.replace(yd,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const yd=/\{\$([^}]+)}/g;function Ed(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ur(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(ta(i)&&ta(o)){if(!Ur(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function ta(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function mn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function vd(n,e){const t=new Td(n,e);return t.subscribe.bind(t)}class Td{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Id(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=qs),s.error===void 0&&(s.error=qs),s.complete===void 0&&(s.complete=qs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Id(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function qs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(n){return n&&n._delegate?n._delegate:n}class st{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new cd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Rd(e))try{this.getOrInitializeService({instanceIdentifier:ht})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ht){return this.instances.has(e)}getOptions(e=ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ad(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ht){return this.component?this.component.multipleInstances?e:ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ad(n){return n===ht?void 0:n}function Rd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new wd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(b||(b={}));const Pd={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},Cd=b.INFO,bd={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},kd=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=bd[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fi{constructor(e){this.name=e,this._logLevel=Cd,this._logHandler=kd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in b))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...e),this._logHandler(this,b.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...e),this._logHandler(this,b.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,b.INFO,...e),this._logHandler(this,b.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,b.WARN,...e),this._logHandler(this,b.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...e),this._logHandler(this,b.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Nd(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Nd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oi="@firebase/app",na="0.9.29";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new Fi("@firebase/app"),Od="@firebase/app-compat",Vd="@firebase/analytics-compat",Ld="@firebase/analytics",Md="@firebase/app-check-compat",xd="@firebase/app-check",Ud="@firebase/auth",Fd="@firebase/auth-compat",Bd="@firebase/database",qd="@firebase/database-compat",jd="@firebase/functions",$d="@firebase/functions-compat",zd="@firebase/installations",Hd="@firebase/installations-compat",Wd="@firebase/messaging",Gd="@firebase/messaging-compat",Kd="@firebase/performance",Qd="@firebase/performance-compat",Xd="@firebase/remote-config",Yd="@firebase/remote-config-compat",Jd="@firebase/storage",Zd="@firebase/storage-compat",ef="@firebase/firestore",tf="@firebase/firestore-compat",nf="firebase",rf="10.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="[DEFAULT]",sf={[oi]:"fire-core",[Od]:"fire-core-compat",[Ld]:"fire-analytics",[Vd]:"fire-analytics-compat",[xd]:"fire-app-check",[Md]:"fire-app-check-compat",[Ud]:"fire-auth",[Fd]:"fire-auth-compat",[Bd]:"fire-rtdb",[qd]:"fire-rtdb-compat",[jd]:"fire-fn",[$d]:"fire-fn-compat",[zd]:"fire-iid",[Hd]:"fire-iid-compat",[Wd]:"fire-fcm",[Gd]:"fire-fcm-compat",[Kd]:"fire-perf",[Qd]:"fire-perf-compat",[Xd]:"fire-rc",[Yd]:"fire-rc-compat",[Jd]:"fire-gcs",[Zd]:"fire-gcs-compat",[ef]:"fire-fst",[tf]:"fire-fst-compat","fire-js":"fire-js",[nf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new Map,ci=new Map;function of(n,e){try{n.container.addComponent(e)}catch(t){vt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Tt(n){const e=n.name;if(ci.has(e))return vt.debug(`There were multiple attempts to register component ${e}.`),!1;ci.set(e,n);for(const t of Fr.values())of(t,n);return!0}function as(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},nt=new Gn("app","Firebase",af);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=rf;function uf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ai,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw nt.create("bad-app-name",{appName:String(s)});if(t||(t=Oc()),!t)throw nt.create("no-options");const i=Fr.get(s);if(i){if(Ur(t,i.options)&&Ur(r,i.config))return i;throw nt.create("duplicate-app",{appName:s})}const o=new Sd(s);for(const c of ci.values())o.addComponent(c);const a=new cf(t,r,o);return Fr.set(s,a),a}function Bi(n=ai){const e=Fr.get(n);if(!e&&n===ai&&Oc())return uf();if(!e)throw nt.create("no-app",{appName:n});return e}function Be(n,e,t){var r;let s=(r=sf[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vt.warn(a.join(" "));return}Tt(new st(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="firebase-heartbeat-database",hf=1,bn="firebase-heartbeat-store";let js=null;function xc(){return js||(js=ed(lf,hf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(bn)}catch(t){console.warn(t)}}}}).catch(n=>{throw nt.create("idb-open",{originalErrorMessage:n.message})})),js}async function df(n){try{const t=(await xc()).transaction(bn),r=await t.objectStore(bn).get(Uc(n));return await t.done,r}catch(e){if(e instanceof Le)vt.warn(e.message);else{const t=nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vt.warn(t.message)}}}async function ra(n,e){try{const r=(await xc()).transaction(bn,"readwrite");await r.objectStore(bn).put(e,Uc(n)),await r.done}catch(t){if(t instanceof Le)vt.warn(t.message);else{const r=nt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});vt.warn(r.message)}}}function Uc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=1024,pf=30*24*60*60*1e3;class gf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _f(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=sa();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=pf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=sa(),{heartbeatsToSend:r,unsentEntries:s}=mf(this._heartbeatsCache.heartbeats),i=xr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function sa(){return new Date().toISOString().substring(0,10)}function mf(n,e=ff){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ia(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ia(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class _f{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mc()?gd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await df(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ra(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ra(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ia(n){return xr(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(n){Tt(new st("platform-logger",e=>new Dd(e),"PRIVATE")),Tt(new st("heartbeat",e=>new gf(e),"PRIVATE")),Be(oi,na,n),Be(oi,na,"esm2017"),Be("fire-js","")}yf("");function Fc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ef=Fc,Bc=new Gn("auth","Firebase",Fc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new Fi("@firebase/auth");function vf(n,...e){Br.logLevel<=b.WARN&&Br.warn(`Auth (${Ct}): ${n}`,...e)}function br(n,...e){Br.logLevel<=b.ERROR&&Br.error(`Auth (${Ct}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(n,...e){throw qi(n,...e)}function be(n,...e){return qi(n,...e)}function Tf(n,e,t){const r=Object.assign(Object.assign({},Ef()),{[e]:t});return new Gn("auth","Firebase",r).create(e,{appName:n.name})}function qi(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Bc.create(n,...e)}function w(n,e,...t){if(!n)throw qi(e,...t)}function xe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw br(e),new Error(e)}function ze(n,e){n||xe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function If(){return oa()==="http:"||oa()==="https:"}function oa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(If()||hd()||"connection"in navigator)?navigator.onLine:!0}function Af(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,t){this.shortDelay=e,this.longDelay=t,ze(t>e,"Short delay should be less than long delay!"),this.isMobile=ud()||dd()}get(){return wf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(n,e){ze(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=new Qn(3e4,6e4);function ct(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ge(n,e,t,r,s={}){return jc(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Kn(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),qc.fetch()($c(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function jc(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Rf),e);try{const s=new Cf(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw _r(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw _r(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw _r(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw _r(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Tf(n,l,u);Ie(n,l)}}catch(s){if(s instanceof Le)throw s;Ie(n,"network-request-failed",{message:String(s)})}}async function Xn(n,e,t,r,s={}){const i=await Ge(n,e,t,r,s);return"mfaPendingCredential"in i&&Ie(n,"multi-factor-auth-required",{_serverResponse:i}),i}function $c(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?ji(n.config,s):`${n.config.apiScheme}://${s}`}function Pf(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Cf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(be(this.auth,"network-request-failed")),Sf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _r(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=be(n,e,r);return s.customData._tokenResponse=t,s}function aa(n){return n!==void 0&&n.enterprise!==void 0}class bf{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Pf(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function kf(n,e){return Ge(n,"GET","/v2/recaptchaConfig",ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Df(n,e){return Ge(n,"POST","/v1/accounts:delete",e)}async function Nf(n,e){return Ge(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Of(n,e=!1){const t=K(n),r=await t.getIdToken(e),s=$i(r);w(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Tn($s(s.auth_time)),issuedAtTime:Tn($s(s.iat)),expirationTime:Tn($s(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $s(n){return Number(n)*1e3}function $i(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return br("JWT malformed, contained fewer than 3 sections"),null;try{const s=kc(t);return s?JSON.parse(s):(br("Failed to decode base64 JWT payload"),null)}catch(s){return br("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Vf(n){const e=$i(n);return w(e,"internal-error"),w(typeof e.exp<"u","internal-error"),w(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Le&&Lf(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Lf({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tn(this.lastLoginAt),this.creationTime=Tn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Wt(n,Nf(t,{idToken:r}));w(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ff(i.providerUserInfo):[],a=Uf(n.providerData,o),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new zc(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function xf(n){const e=K(n);await qr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Uf(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ff(n){return n.map(e=>{var{providerId:t}=e,r=Ui(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bf(n,e){const t=await jc(n,{},async()=>{const r=Kn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=$c(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",qc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function qf(n,e){return Ge(n,"POST","/v2/accounts:revokeToken",ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(typeof e.idToken<"u","internal-error"),w(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return w(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Bf(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new kn;return r&&(w(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(w(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(w(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new kn,this.toJSON())}_performRefresh(){return xe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(n,e){w(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class _t{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Ui(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Mf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new zc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Wt(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Of(this,e)}reload(){return xf(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new _t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await qr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wt(this,Df(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,f=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=t.photoURL)!==null&&o!==void 0?o:void 0,I=(a=t.tenantId)!==null&&a!==void 0?a:void 0,y=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,k=(u=t.createdAt)!==null&&u!==void 0?u:void 0,V=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:D,emailVerified:L,isAnonymous:fe,providerData:Z,stsTokenManager:ve}=t;w(D&&ve,e,"internal-error");const Ke=kn.fromJSON(this.name,ve);w(typeof D=="string",e,"internal-error"),Qe(h,e.name),Qe(d,e.name),w(typeof L=="boolean",e,"internal-error"),w(typeof fe=="boolean",e,"internal-error"),Qe(f,e.name),Qe(v,e.name),Qe(I,e.name),Qe(y,e.name),Qe(k,e.name),Qe(V,e.name);const Me=new _t({uid:D,auth:e,email:d,emailVerified:L,displayName:h,isAnonymous:fe,photoURL:v,phoneNumber:f,tenantId:I,stsTokenManager:Ke,createdAt:k,lastLoginAt:V});return Z&&Array.isArray(Z)&&(Me.providerData=Z.map(mr=>Object.assign({},mr))),y&&(Me._redirectEventId=y),Me}static async _fromIdTokenResponse(e,t,r=!1){const s=new kn;s.updateFromServerResponse(t);const i=new _t({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await qr(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=new Map;function Ue(n){ze(n instanceof Function,"Expected a class definition");let e=ca.get(n);return e?(ze(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ca.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Hc.type="NONE";const ua=Hc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(n,e,t){return`firebase:${n}:${e}:${t}`}class qt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=kr(this.userKey,s.apiKey,i),this.fullPersistenceKey=kr("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_t._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new qt(Ue(ua),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Ue(ua);const o=kr(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=_t._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new qt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new qt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xc(e))return"Blackberry";if(Yc(e))return"Webos";if(zi(e))return"Safari";if((e.includes("chrome/")||Gc(e))&&!e.includes("edge/"))return"Chrome";if(Qc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wc(n=G()){return/firefox\//i.test(n)}function zi(n=G()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gc(n=G()){return/crios\//i.test(n)}function Kc(n=G()){return/iemobile/i.test(n)}function Qc(n=G()){return/android/i.test(n)}function Xc(n=G()){return/blackberry/i.test(n)}function Yc(n=G()){return/webos/i.test(n)}function cs(n=G()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function jf(n=G()){var e;return cs(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $f(){return fd()&&document.documentMode===10}function Jc(n=G()){return cs(n)||Qc(n)||Yc(n)||Xc(n)||/windows phone/i.test(n)||Kc(n)}function zf(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(n,e=[]){let t;switch(n){case"Browser":t=la(G());break;case"Worker":t=`${la(G())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ct}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wf(n,e={}){return Ge(n,"GET","/v2/passwordPolicy",ct(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=6;class Kf{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Gf,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ha(this),this.idTokenSubscription=new ha(this),this.beforeStateQueue=new Hf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ue(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await qt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await qr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Af()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?K(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ue(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Wf(this),t=new Kf(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await qf(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ue(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await qt.create(this,[Ue(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(w(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&vf(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function bt(n){return K(n)}class ha{constructor(e){this.auth=e,this.observer=null,this.addObserver=vd(t=>this.observer=t)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let us={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Xf(n){us=n}function eu(n){return us.loadJS(n)}function Yf(){return us.recaptchaEnterpriseScript}function Jf(){return us.gapiScript}function Zf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const ep="recaptcha-enterprise",tp="NO_RECAPTCHA";class np{constructor(e){this.type=ep,this.auth=bt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{kf(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new bf(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;aa(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(tp)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!t&&aa(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Yf();c.length!==0&&(c+=a),eu(c).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function da(n,e,t,r=!1){const s=new np(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function li(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await da(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await da(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(n,e){const t=as(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Ur(i,e??{}))return s;Ie(s,"already-initialized")}return t.initialize({options:e})}function sp(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ue);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ip(n,e,t){const r=bt(n);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=tu(e),{host:o,port:a}=op(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||ap()}function tu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function op(n){const e=tu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:fa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:fa(o)}}}function fa(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ap(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return xe("not implemented")}_getIdTokenResponse(e){return xe("not implemented")}_linkToIdToken(e,t){return xe("not implemented")}_getReauthenticationResolver(e){return xe("not implemented")}}async function cp(n,e){return Ge(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function up(n,e){return Xn(n,"POST","/v1/accounts:signInWithPassword",ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lp(n,e){return Xn(n,"POST","/v1/accounts:signInWithEmailLink",ct(n,e))}async function hp(n,e){return Xn(n,"POST","/v1/accounts:signInWithEmailLink",ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Hi{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Dn(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Dn(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return li(e,t,"signInWithPassword",up);case"emailLink":return lp(e,{email:this._email,oobCode:this._password});default:Ie(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return li(e,r,"signUpPassword",cp);case"emailLink":return hp(e,{idToken:t,email:this._email,oobCode:this._password});default:Ie(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(n,e){return Xn(n,"POST","/v1/accounts:signInWithIdp",ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp="http://localhost";class It extends Hi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new It(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ie("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Ui(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new It(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return jt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,jt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,jt(e,t)}buildRequest(){const e={requestUri:dp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Kn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pp(n){const e=gn(mn(n)).link,t=e?gn(mn(e)).deep_link_id:null,r=gn(mn(n)).deep_link_id;return(r?gn(mn(r)).link:null)||r||t||e||n}class Wi{constructor(e){var t,r,s,i,o,a;const c=gn(mn(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=fp((s=c.mode)!==null&&s!==void 0?s:null);w(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=pp(e);try{return new Wi(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(){this.providerId=tn.PROVIDER_ID}static credential(e,t){return Dn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Wi.parseLink(t);return w(r,"argument-error"),Dn._fromEmailAndCode(e,r.code,r.tenantId)}}tn.PROVIDER_ID="password";tn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";tn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends nu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends Yn{constructor(){super("facebook.com")}static credential(e){return It._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xe.credential(e.oauthAccessToken)}catch{return null}}}Xe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends Yn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return It._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ye.credential(t,r)}catch{return null}}}Ye.GOOGLE_SIGN_IN_METHOD="google.com";Ye.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends Yn{constructor(){super("github.com")}static credential(e){return It._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch{return null}}}Je.GITHUB_SIGN_IN_METHOD="github.com";Je.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze extends Yn{constructor(){super("twitter.com")}static credential(e,t){return It._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ze.credential(t,r)}catch{return null}}}Ze.TWITTER_SIGN_IN_METHOD="twitter.com";Ze.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gp(n,e){return Xn(n,"POST","/v1/accounts:signUp",ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await _t._fromIdTokenResponse(e,r,s),o=pa(r);return new wt({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=pa(r);return new wt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function pa(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends Le{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,jr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new jr(e,t,r,s)}}function ru(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?jr._fromErrorAndOperation(n,i,e,r):i})}async function mp(n,e,t=!1){const r=await Wt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return wt._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _p(n,e,t=!1){const{auth:r}=n,s="reauthenticate";try{const i=await Wt(n,ru(r,s,e,n),t);w(i.idToken,r,"internal-error");const o=$i(i.idToken);w(o,r,"internal-error");const{sub:a}=o;return w(n.uid===a,r,"user-mismatch"),wt._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ie(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function su(n,e,t=!1){const r="signIn",s=await ru(n,r,e),i=await wt._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function yp(n,e){return su(bt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iu(n){const e=bt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function oT(n,e,t){const r=bt(n),o=await li(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gp).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&iu(n),c}),a=await wt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function aT(n,e,t){return yp(K(n),tn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iu(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ep(n,e){return Ge(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cT(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=K(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Wt(r,Ep(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function vp(n,e,t,r){return K(n).onIdTokenChanged(e,t,r)}function Tp(n,e,t){return K(n).beforeAuthStateChanged(e,t)}function uT(n,e,t,r){return K(n).onAuthStateChanged(e,t,r)}function lT(n){return K(n).signOut()}const $r="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($r,"1"),this.storage.removeItem($r),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(){const n=G();return zi(n)||cs(n)}const wp=1e3,Ap=10;class au extends ou{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ip()&&zf(),this.fallbackToPolling=Jc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);$f()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ap):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},wp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}au.type="LOCAL";const Rp=au;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu extends ou{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}cu.type="SESSION";const uu=cu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ls(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(t.origin,i)),c=await Sp(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ls.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Gi("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return window}function Cp(n){ke().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(){return typeof ke().WorkerGlobalScope<"u"&&typeof ke().importScripts=="function"}async function bp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Dp(){return lu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu="firebaseLocalStorageDb",Np=1,zr="firebaseLocalStorage",du="fbase_key";class Jn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function hs(n,e){return n.transaction([zr],e?"readwrite":"readonly").objectStore(zr)}function Op(){const n=indexedDB.deleteDatabase(hu);return new Jn(n).toPromise()}function hi(){const n=indexedDB.open(hu,Np);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(zr,{keyPath:du})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(zr)?e(r):(r.close(),await Op(),e(await hi()))})})}async function ga(n,e,t){const r=hs(n,!0).put({[du]:e,value:t});return new Jn(r).toPromise()}async function Vp(n,e){const t=hs(n,!1).get(e),r=await new Jn(t).toPromise();return r===void 0?null:r.value}function ma(n,e){const t=hs(n,!0).delete(e);return new Jn(t).toPromise()}const Lp=800,Mp=3;class fu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Mp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ls._getInstance(Dp()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await bp(),!this.activeServiceWorker)return;this.sender=new Pp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hi();return await ga(e,$r,"1"),await ma(e,$r),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ga(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Vp(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ma(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=hs(s,!1).getAll();return new Jn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Lp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fu.type="LOCAL";const xp=fu;new Qn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(n,e){return e?Ue(e):(w(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends Hi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return jt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return jt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Fp(n){return su(n.auth,new Ki(n),n.bypassAuthState)}function Bp(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),_p(t,new Ki(n),n.bypassAuthState)}async function qp(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),mp(t,new Ki(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fp;case"linkViaPopup":case"linkViaRedirect":return qp;case"reauthViaPopup":case"reauthViaRedirect":return Bp;default:Ie(this.auth,"internal-error")}}resolve(e){ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=new Qn(2e3,1e4);class Ft extends pu{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ft.currentPopupAction&&Ft.currentPopupAction.cancel(),Ft.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){ze(this.filter.length===1,"Popup operations only handle one event");const e=Gi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ft.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jp.get())};e()}}Ft.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p="pendingRedirect",Dr=new Map;class zp extends pu{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Dr.get(this.auth._key());if(!e){try{const r=await Hp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Dr.set(this.auth._key(),e)}return this.bypassAuthState||Dr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hp(n,e){const t=Kp(e),r=Gp(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Wp(n,e){Dr.set(n._key(),e)}function Gp(n){return Ue(n._redirectPersistence)}function Kp(n){return kr($p,n.config.apiKey,n.name)}async function Qp(n,e,t=!1){const r=bt(n),s=Up(r,e),o=await new zp(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=10*60*1e3;class Yp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Jp(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!gu(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(be(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Xp&&this.cachedEventUids.clear(),this.cachedEventUids.has(_a(e))}saveEventToCache(e){this.cachedEventUids.add(_a(e)),this.lastProcessedEventTime=Date.now()}}function _a(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function gu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Jp(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zp(n,e={}){return Ge(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tg=/^https?/;async function ng(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Zp(n);for(const t of e)try{if(rg(t))return}catch{}Ie(n,"unauthorized-domain")}function rg(n){const e=ui(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!tg.test(t))return!1;if(eg.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=new Qn(3e4,6e4);function ya(){const n=ke().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ig(n){return new Promise((e,t)=>{var r,s,i;function o(){ya(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ya(),t(be(n,"network-request-failed"))},timeout:sg.get()})}if(!((s=(r=ke().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ke().gapi)===null||i===void 0)&&i.load)o();else{const a=Zf("iframefcb");return ke()[a]=()=>{gapi.load?o():t(be(n,"network-request-failed"))},eu(`${Jf()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Nr=null,e})}let Nr=null;function og(n){return Nr=Nr||ig(n),Nr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=new Qn(5e3,15e3),cg="__/auth/iframe",ug="emulator/auth/iframe",lg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dg(n){const e=n.config;w(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ji(e,ug):`https://${n.config.authDomain}/${cg}`,r={apiKey:e.apiKey,appName:n.name,v:Ct},s=hg.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Kn(r).slice(1)}`}async function fg(n){const e=await og(n),t=ke().gapi;return w(t,n,"internal-error"),e.open({where:document.body,url:dg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=be(n,"network-request-failed"),a=ke().setTimeout(()=>{i(o)},ag.get());function c(){ke().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gg=500,mg=600,_g="_blank",yg="http://localhost";class Ea{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Eg(n,e,t,r=gg,s=mg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},pg),{width:r.toString(),height:s.toString(),top:i,left:o}),u=G().toLowerCase();t&&(a=Gc(u)?_g:t),Wc(u)&&(e=e||yg,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,v])=>`${d}${f}=${v},`,"");if(jf(u)&&a!=="_self")return vg(e||"",a),new Ea(null);const h=window.open(e||"",a,l);w(h,n,"popup-blocked");try{h.focus()}catch{}return new Ea(h)}function vg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg="__/auth/handler",Ig="emulator/auth/handler",wg=encodeURIComponent("fac");async function va(n,e,t,r,s,i){w(n.config.authDomain,n,"auth-domain-config-required"),w(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ct,eventId:s};if(e instanceof nu){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ed(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(i||{}))o[l]=h}if(e instanceof Yn){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await n._getAppCheckToken(),u=c?`#${wg}=${encodeURIComponent(c)}`:"";return`${Ag(n)}?${Kn(a).slice(1)}${u}`}function Ag({config:n}){return n.emulator?ji(n,Ig):`https://${n.authDomain}/${Tg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs="webStorageSupport";class Rg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uu,this._completeRedirectFn=Qp,this._overrideRedirectResult=Wp}async _openPopup(e,t,r,s){var i;ze((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await va(e,t,r,ui(),s);return Eg(e,o,Gi())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await va(e,t,r,ui(),s);return Cp(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(ze(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await fg(e),r=new Yp(e);return t.register("authEvent",s=>(w(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(zs,{type:zs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[zs];o!==void 0&&t(!!o),Ie(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ng(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Jc()||zi()||cs()}}const Sg=Rg;var Ta="@firebase/auth",Ia="1.6.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bg(n){Tt(new st("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;w(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zc(n)},u=new Qf(r,s,i,c);return sp(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Tt(new st("auth-internal",e=>{const t=bt(e.getProvider("auth").getImmediate());return(r=>new Pg(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Be(Ta,Ia,Cg(n)),Be(Ta,Ia,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=5*60,Dg=Vc("authIdTokenMaxAge")||kg;let wa=null;const Ng=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Dg)return;const s=t==null?void 0:t.token;wa!==s&&(wa=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function hT(n=Bi()){const e=as(n,"auth");if(e.isInitialized())return e.getImmediate();const t=rp(n,{popupRedirectResolver:Sg,persistence:[xp,Rp,uu]}),r=Vc("authTokenSyncURL");if(r&&r.match(/^\/[^\/].*/)){const i=Ng(r);Tp(t,i,()=>i(t.currentUser)),vp(t,o=>i(o))}const s=Dc("auth");return s&&ip(t,`http://${s}`),t}function Og(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Xf({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=be("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Og().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bg("Browser");var Vg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_,Qi=Qi||{},R=Vg||self;function ds(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Zn(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Lg(n){return Object.prototype.hasOwnProperty.call(n,Hs)&&n[Hs]||(n[Hs]=++Mg)}var Hs="closure_uid_"+(1e9*Math.random()>>>0),Mg=0;function xg(n,e,t){return n.call.apply(n.bind,arguments)}function Ug(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function ce(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ce=xg:ce=Ug,ce.apply(null,arguments)}function yr(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function J(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function ut(){this.s=this.s,this.o=this.o}var Fg=0;ut.prototype.s=!1;ut.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Fg!=0)&&Lg(this)};ut.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const mu=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Xi(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function Aa(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(ds(r)){const s=n.length||0,i=r.length||0;n.length=s+i;for(let o=0;o<i;o++)n[s+o]=r[o]}else n.push(r)}}function ue(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var Bg=function(){if(!R.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const t=()=>{};R.addEventListener("test",t,e),R.removeEventListener("test",t,e)}catch{}return n}();function Nn(n){return/^[\s\xa0]*$/.test(n)}function fs(){var n=R.navigator;return n&&(n=n.userAgent)?n:""}function Re(n){return fs().indexOf(n)!=-1}function Yi(n){return Yi[" "](n),n}Yi[" "]=function(){};function qg(n,e){var t=Om;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var jg=Re("Opera"),Gt=Re("Trident")||Re("MSIE"),_u=Re("Edge"),di=_u||Gt,yu=Re("Gecko")&&!(fs().toLowerCase().indexOf("webkit")!=-1&&!Re("Edge"))&&!(Re("Trident")||Re("MSIE"))&&!Re("Edge"),$g=fs().toLowerCase().indexOf("webkit")!=-1&&!Re("Edge");function Eu(){var n=R.document;return n?n.documentMode:void 0}var fi;e:{var Ws="",Gs=function(){var n=fs();if(yu)return/rv:([^\);]+)(\)|;)/.exec(n);if(_u)return/Edge\/([\d\.]+)/.exec(n);if(Gt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if($g)return/WebKit\/(\S+)/.exec(n);if(jg)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Gs&&(Ws=Gs?Gs[1]:""),Gt){var Ks=Eu();if(Ks!=null&&Ks>parseFloat(Ws)){fi=String(Ks);break e}}fi=Ws}var pi;if(R.document&&Gt){var Ra=Eu();pi=Ra||parseInt(fi,10)||void 0}else pi=void 0;var zg=pi;function On(n,e){if(ue.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(yu){e:{try{Yi(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Hg[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&On.$.h.call(this)}}J(On,ue);var Hg={2:"touch",3:"pen",4:"mouse"};On.prototype.h=function(){On.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var er="closure_listenable_"+(1e6*Math.random()|0),Wg=0;function Gg(n,e,t,r,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=s,this.key=++Wg,this.fa=this.ia=!1}function ps(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Ji(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function Kg(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function vu(n){const e={};for(const t in n)e[t]=n[t];return e}const Sa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Tu(n,e){let t,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(t in r)n[t]=r[t];for(let i=0;i<Sa.length;i++)t=Sa[i],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function gs(n){this.src=n,this.g={},this.h=0}gs.prototype.add=function(n,e,t,r,s){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=mi(n,e,r,s);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new Gg(e,this.src,i,!!r,s),e.ia=t,n.push(e)),e};function gi(n,e){var t=e.type;if(t in n.g){var r=n.g[t],s=mu(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ps(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function mi(n,e,t,r){for(var s=0;s<n.length;++s){var i=n[s];if(!i.fa&&i.listener==e&&i.capture==!!t&&i.la==r)return s}return-1}var Zi="closure_lm_"+(1e6*Math.random()|0),Qs={};function Iu(n,e,t,r,s){if(r&&r.once)return Au(n,e,t,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Iu(n,e[i],t,r,s);return null}return t=no(t),n&&n[er]?n.O(e,t,Zn(r)?!!r.capture:!!r,s):wu(n,e,t,!1,r,s)}function wu(n,e,t,r,s,i){if(!e)throw Error("Invalid event type");var o=Zn(s)?!!s.capture:!!s,a=to(n);if(a||(n[Zi]=a=new gs(n)),t=a.add(e,t,r,o,i),t.proxy)return t;if(r=Qg(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)Bg||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),r,s);else if(n.attachEvent)n.attachEvent(Su(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function Qg(){function n(t){return e.call(n.src,n.listener,t)}const e=Xg;return n}function Au(n,e,t,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Au(n,e[i],t,r,s);return null}return t=no(t),n&&n[er]?n.P(e,t,Zn(r)?!!r.capture:!!r,s):wu(n,e,t,!0,r,s)}function Ru(n,e,t,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Ru(n,e[i],t,r,s);else r=Zn(r)?!!r.capture:!!r,t=no(t),n&&n[er]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=mi(i,t,r,s),-1<t&&(ps(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=to(n))&&(e=n.g[e.toString()],n=-1,e&&(n=mi(e,t,r,s)),(t=-1<n?e[n]:null)&&eo(t))}function eo(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[er])gi(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(Su(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=to(e))?(gi(t,n),t.h==0&&(t.src=null,e[Zi]=null)):ps(n)}}}function Su(n){return n in Qs?Qs[n]:Qs[n]="on"+n}function Xg(n,e){if(n.fa)n=!0;else{e=new On(e,this);var t=n.listener,r=n.la||n.src;n.ia&&eo(n),n=t.call(r,e)}return n}function to(n){return n=n[Zi],n instanceof gs?n:null}var Xs="__closure_events_fn_"+(1e9*Math.random()>>>0);function no(n){return typeof n=="function"?n:(n[Xs]||(n[Xs]=function(e){return n.handleEvent(e)}),n[Xs])}function Y(){ut.call(this),this.i=new gs(this),this.S=this,this.J=null}J(Y,ut);Y.prototype[er]=!0;Y.prototype.removeEventListener=function(n,e,t,r){Ru(this,n,e,t,r)};function re(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new ue(e,n);else if(e instanceof ue)e.target=e.target||n;else{var s=e;e=new ue(r,n),Tu(e,s)}if(s=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];s=Er(o,r,!0,e)&&s}if(o=e.g=n,s=Er(o,r,!0,e)&&s,s=Er(o,r,!1,e)&&s,t)for(i=0;i<t.length;i++)o=e.g=t[i],s=Er(o,r,!1,e)&&s}Y.prototype.N=function(){if(Y.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)ps(t[r]);delete n.g[e],n.h--}}this.J=null};Y.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};Y.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function Er(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&gi(n.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var ro=R.JSON.stringify;class Yg{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Jg(){var n=so;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Zg{constructor(){this.h=this.g=null}add(e,t){const r=Pu.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var Pu=new Yg(()=>new em,n=>n.reset());class em{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function tm(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function nm(n){R.setTimeout(()=>{throw n},0)}let Vn,Ln=!1,so=new Zg,Cu=()=>{const n=R.Promise.resolve(void 0);Vn=()=>{n.then(rm)}};var rm=()=>{for(var n;n=Jg();){try{n.h.call(n.g)}catch(t){nm(t)}var e=Pu;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Ln=!1};function ms(n,e){Y.call(this),this.h=n||1,this.g=e||R,this.j=ce(this.qb,this),this.l=Date.now()}J(ms,Y);_=ms.prototype;_.ga=!1;_.T=null;_.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),re(this,"tick"),this.ga&&(io(this),this.start()))}};_.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function io(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}_.N=function(){ms.$.N.call(this),io(this),delete this.g};function oo(n,e,t){if(typeof n=="function")t&&(n=ce(n,t));else if(n&&typeof n.handleEvent=="function")n=ce(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:R.setTimeout(n,e||0)}function bu(n){n.g=oo(()=>{n.g=null,n.i&&(n.i=!1,bu(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class sm extends ut{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:bu(this)}N(){super.N(),this.g&&(R.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mn(n){ut.call(this),this.h=n,this.g={}}J(Mn,ut);var Pa=[];function ku(n,e,t,r){Array.isArray(t)||(t&&(Pa[0]=t.toString()),t=Pa);for(var s=0;s<t.length;s++){var i=Iu(e,t[s],r||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function Du(n){Ji(n.g,function(e,t){this.g.hasOwnProperty(t)&&eo(e)},n),n.g={}}Mn.prototype.N=function(){Mn.$.N.call(this),Du(this)};Mn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function _s(){this.g=!0}_s.prototype.Ea=function(){this.g=!1};function im(n,e,t,r,s,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function om(n,e,t,r,s,i,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+t+`
`+i+" "+o})}function Bt(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+cm(n,t)+(r?" "+r:"")})}function am(n,e){n.info(function(){return"TIMEOUT: "+e})}_s.prototype.info=function(){};function cm(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ro(t)}catch{return e}}var kt={},Ca=null;function ys(){return Ca=Ca||new Y}kt.Ta="serverreachability";function Nu(n){ue.call(this,kt.Ta,n)}J(Nu,ue);function xn(n){const e=ys();re(e,new Nu(e))}kt.STAT_EVENT="statevent";function Ou(n,e){ue.call(this,kt.STAT_EVENT,n),this.stat=e}J(Ou,ue);function de(n){const e=ys();re(e,new Ou(e,n))}kt.Ua="timingevent";function Vu(n,e){ue.call(this,kt.Ua,n),this.size=e}J(Vu,ue);function tr(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return R.setTimeout(function(){n()},e)}var Es={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Lu={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ao(){}ao.prototype.h=null;function ba(n){return n.h||(n.h=n.i())}function Mu(){}var nr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function co(){ue.call(this,"d")}J(co,ue);function uo(){ue.call(this,"c")}J(uo,ue);var _i;function vs(){}J(vs,ao);vs.prototype.g=function(){return new XMLHttpRequest};vs.prototype.i=function(){return{}};_i=new vs;function rr(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new Mn(this),this.P=um,n=di?125:void 0,this.V=new ms(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new xu}function xu(){this.i=null,this.g="",this.h=!1}var um=45e3,Uu={},yi={};_=rr.prototype;_.setTimeout=function(n){this.P=n};function Ei(n,e,t){n.L=1,n.A=Is(He(e)),n.u=t,n.S=!0,Fu(n,null)}function Fu(n,e){n.G=Date.now(),sr(n),n.B=He(n.A);var t=n.B,r=n.W;Array.isArray(r)||(r=[String(r)]),Gu(t.i,"t",r),n.o=0,t=n.l.J,n.h=new xu,n.g=pl(n.l,t?e:null,!n.u),0<n.O&&(n.M=new sm(ce(n.Pa,n,n.g),n.O)),ku(n.U,n.g,"readystatechange",n.nb),e=n.I?vu(n.I):{},n.u?(n.v||(n.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,e)):(n.v="GET",n.g.ha(n.B,n.v,null,e)),xn(),im(n.j,n.v,n.B,n.m,n.W,n.u)}_.nb=function(n){n=n.target;const e=this.M;e&&Se(n)==3?e.l():this.Pa(n)};_.Pa=function(n){try{if(n==this.g)e:{const l=Se(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||di||this.g&&(this.h.h||this.g.ja()||Oa(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?xn(3):xn(2)),Ts(this);var t=this.g.da();this.ca=t;t:if(Bu(this)){var r=Oa(this.g);n="";var s=r.length,i=Se(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ft(this),In(this);var o="";break t}this.h.i=new R.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=n,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,om(this.j,this.v,this.B,this.m,this.W,l,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Nn(a)){var u=a;break t}}u=null}if(t=u)Bt(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vi(this,t);else{this.i=!1,this.s=3,de(12),ft(this),In(this);break e}}this.S?(qu(this,l,o),di&&this.i&&l==3&&(ku(this.U,this.V,"tick",this.mb),this.V.start())):(Bt(this.j,this.m,o,null),vi(this,o)),l==4&&ft(this),this.i&&!this.J&&(l==4?ll(this.l,this):(this.i=!1,sr(this)))}else km(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.s=3,de(12)):(this.s=0,de(13)),ft(this),In(this)}}}catch{}finally{}};function Bu(n){return n.g?n.v=="GET"&&n.L!=2&&n.l.Ha:!1}function qu(n,e,t){let r=!0,s;for(;!n.J&&n.o<t.length;)if(s=lm(n,t),s==yi){e==4&&(n.s=4,de(14),r=!1),Bt(n.j,n.m,null,"[Incomplete Response]");break}else if(s==Uu){n.s=4,de(15),Bt(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else Bt(n.j,n.m,s,null),vi(n,s);Bu(n)&&n.o!=0&&(n.h.g=n.h.g.slice(n.o),n.o=0),e!=4||t.length!=0||n.h.h||(n.s=1,de(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),mo(e),e.M=!0,de(11))):(Bt(n.j,n.m,t,"[Invalid Chunked Response]"),ft(n),In(n))}_.mb=function(){if(this.g){var n=Se(this.g),e=this.g.ja();this.o<e.length&&(Ts(this),qu(this,n,e),this.i&&n!=4&&sr(this))}};function lm(n,e){var t=n.o,r=e.indexOf(`
`,t);return r==-1?yi:(t=Number(e.substring(t,r)),isNaN(t)?Uu:(r+=1,r+t>e.length?yi:(e=e.slice(r,r+t),n.o=r+t,e)))}_.cancel=function(){this.J=!0,ft(this)};function sr(n){n.Y=Date.now()+n.P,ju(n,n.P)}function ju(n,e){if(n.C!=null)throw Error("WatchDog timer not null");n.C=tr(ce(n.lb,n),e)}function Ts(n){n.C&&(R.clearTimeout(n.C),n.C=null)}_.lb=function(){this.C=null;const n=Date.now();0<=n-this.Y?(am(this.j,this.B),this.L!=2&&(xn(),de(17)),ft(this),this.s=2,In(this)):ju(this,this.Y-n)};function In(n){n.l.H==0||n.J||ll(n.l,n)}function ft(n){Ts(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,io(n.V),Du(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function vi(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||Ti(t.i,n))){if(!n.K&&Ti(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Gr(t),Ss(t);else break e;go(t),de(18)}}else t.Fa=s[1],0<t.Fa-t.V&&37500>s[2]&&t.G&&t.A==0&&!t.v&&(t.v=tr(ce(t.ib,t),6e3));if(1>=Xu(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else pt(t,11)}else if((n.K||t.g==n)&&Gr(t),!Nn(e))for(s=t.Ja.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.K=u[1],t.pa=u[2];const l=u[3];l!=null&&(t.ra=l,t.l.info("VER="+t.ra));const h=u[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const v=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=r.i;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(lo(i,i.h),i.h=null))}if(r.F){const I=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.Da=I,U(r.I,r.F,I))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=fl(r,r.J?r.pa:null,r.Y),o.K){Yu(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(Ts(a),sr(a)),r.g=o}else cl(r);0<t.j.length&&Ps(t)}else u[0]!="stop"&&u[0]!="close"||pt(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?pt(t,7):po(t):u[0]!="noop"&&t.h&&t.h.Aa(u),t.A=0)}}xn(4)}catch{}}function hm(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(ds(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function dm(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(ds(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function $u(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(ds(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=dm(n),r=hm(n),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],t&&t[i],n)}var zu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fm(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),s=null;if(0<=r){var i=n[t].substring(0,r);s=n[t].substring(r+1)}else i=n[t];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function yt(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof yt){this.h=n.h,Hr(this,n.j),this.s=n.s,this.g=n.g,Wr(this,n.m),this.l=n.l;var e=n.i,t=new Un;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),ka(this,t),this.o=n.o}else n&&(e=String(n).match(zu))?(this.h=!1,Hr(this,e[1]||"",!0),this.s=_n(e[2]||""),this.g=_n(e[3]||"",!0),Wr(this,e[4]),this.l=_n(e[5]||"",!0),ka(this,e[6]||"",!0),this.o=_n(e[7]||"")):(this.h=!1,this.i=new Un(null,this.h))}yt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(yn(e,Da,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(yn(e,Da,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(yn(t,t.charAt(0)=="/"?mm:gm,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",yn(t,ym)),n.join("")};function He(n){return new yt(n)}function Hr(n,e,t){n.j=t?_n(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Wr(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function ka(n,e,t){e instanceof Un?(n.i=e,Em(n.i,n.h)):(t||(e=yn(e,_m)),n.i=new Un(e,n.h))}function U(n,e,t){n.i.set(e,t)}function Is(n){return U(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function _n(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function yn(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,pm),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function pm(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Da=/[#\/\?@]/g,gm=/[#\?:]/g,mm=/[#\?]/g,_m=/[#\?@]/g,ym=/#/g;function Un(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function lt(n){n.g||(n.g=new Map,n.h=0,n.i&&fm(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}_=Un.prototype;_.add=function(n,e){lt(this),this.i=null,n=nn(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Hu(n,e){lt(n),e=nn(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Wu(n,e){return lt(n),e=nn(n,e),n.g.has(e)}_.forEach=function(n,e){lt(this),this.g.forEach(function(t,r){t.forEach(function(s){n.call(e,s,r,this)},this)},this)};_.ta=function(){lt(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const s=n[r];for(let i=0;i<s.length;i++)t.push(e[r])}return t};_.Z=function(n){lt(this);let e=[];if(typeof n=="string")Wu(this,n)&&(e=e.concat(this.g.get(nn(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};_.set=function(n,e){return lt(this),this.i=null,n=nn(this,n),Wu(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};_.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function Gu(n,e,t){Hu(n,e),0<t.length&&(n.i=null,n.g.set(nn(n,e),Xi(t)),n.h+=t.length)}_.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),n.push(s)}}return this.i=n.join("&")};function nn(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function Em(n,e){e&&!n.j&&(lt(n),n.i=null,n.g.forEach(function(t,r){var s=r.toLowerCase();r!=s&&(Hu(this,r),Gu(this,s,t))},n)),n.j=e}var vm=class{constructor(n,e){this.g=n,this.map=e}};function Ku(n){this.l=n||Tm,R.PerformanceNavigationTiming?(n=R.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(R.g&&R.g.Ka&&R.g.Ka()&&R.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Tm=10;function Qu(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Xu(n){return n.h?1:n.g?n.g.size:0}function Ti(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function lo(n,e){n.g?n.g.add(e):n.h=e}function Yu(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Ku.prototype.cancel=function(){if(this.i=Ju(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Ju(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return Xi(n.i)}var Im=class{stringify(n){return R.JSON.stringify(n,void 0)}parse(n){return R.JSON.parse(n,void 0)}};function wm(){this.g=new Im}function Am(n,e,t){const r=t||"";try{$u(n,function(s,i){let o=s;Zn(s)&&(o=ro(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Rm(n,e){const t=new _s;if(R.Image){const r=new Image;r.onload=yr(vr,t,r,"TestLoadImage: loaded",!0,e),r.onerror=yr(vr,t,r,"TestLoadImage: error",!1,e),r.onabort=yr(vr,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=yr(vr,t,r,"TestLoadImage: timeout",!1,e),R.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function vr(n,e,t,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function ws(n){this.l=n.ec||null,this.j=n.ob||!1}J(ws,ao);ws.prototype.g=function(){return new As(this.l,this.j)};ws.prototype.i=function(n){return function(){return n}}({});function As(n,e){Y.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=ho,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}J(As,Y);var ho=0;_=As.prototype;_.open=function(n,e){if(this.readyState!=ho)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Fn(this)};_.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||R).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};_.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ir(this)),this.readyState=ho};_.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Fn(this)),this.g&&(this.readyState=3,Fn(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof R.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Zu(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Zu(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}_.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?ir(this):Fn(this),this.readyState==3&&Zu(this)}};_.Za=function(n){this.g&&(this.response=this.responseText=n,ir(this))};_.Ya=function(n){this.g&&(this.response=n,ir(this))};_.ka=function(){this.g&&ir(this)};function ir(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Fn(n)}_.setRequestHeader=function(n,e){this.v.append(n,e)};_.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};_.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Fn(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(As.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Sm=R.JSON.parse;function $(n){Y.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=el,this.L=this.M=!1}J($,Y);var el="",Pm=/^https?$/i,Cm=["POST","PUT"];_=$.prototype;_.Oa=function(n){this.M=n};_.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():_i.g(),this.C=this.u?ba(this.u):ba(_i),this.g.onreadystatechange=ce(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(i){Na(this,i);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)t.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())t.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(i=>i.toLowerCase()=="content-type"),s=R.FormData&&n instanceof R.FormData,!(0<=mu(Cm,e))||r||s||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of t)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{rl(this),0<this.B&&((this.L=bm(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ce(this.ua,this)):this.A=oo(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){Na(this,i)}};function bm(n){return Gt&&typeof n.timeout=="number"&&n.ontimeout!==void 0}_.ua=function(){typeof Qi<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,re(this,"timeout"),this.abort(8))};function Na(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,tl(n),Rs(n)}function tl(n){n.F||(n.F=!0,re(n,"complete"),re(n,"error"))}_.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,re(this,"complete"),re(this,"abort"),Rs(this))};_.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Rs(this,!0)),$.$.N.call(this)};_.La=function(){this.s||(this.G||this.v||this.l?nl(this):this.kb())};_.kb=function(){nl(this)};function nl(n){if(n.h&&typeof Qi<"u"&&(!n.C[1]||Se(n)!=4||n.da()!=2)){if(n.v&&Se(n)==4)oo(n.La,0,n);else if(re(n,"readystatechange"),Se(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var s=String(n.I).match(zu)[1]||null;!s&&R.self&&R.self.location&&(s=R.self.location.protocol.slice(0,-1)),r=!Pm.test(s?s.toLowerCase():"")}t=r}if(t)re(n,"complete"),re(n,"success");else{n.m=6;try{var i=2<Se(n)?n.g.statusText:""}catch{i=""}n.j=i+" ["+n.da()+"]",tl(n)}}finally{Rs(n)}}}}function Rs(n,e){if(n.g){rl(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||re(n,"ready");try{t.onreadystatechange=r}catch{}}}function rl(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(R.clearTimeout(n.A),n.A=null)}_.isActive=function(){return!!this.g};function Se(n){return n.g?n.g.readyState:0}_.da=function(){try{return 2<Se(this)?this.g.status:-1}catch{return-1}};_.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};_.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),Sm(e)}};function Oa(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case el:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function km(n){const e={};n=(n.g&&2<=Se(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Nn(n[r]))continue;var t=tm(n[r]);const s=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const i=e[s]||[];e[s]=i,i.push(t)}Kg(e,function(r){return r.join(", ")})}_.Ia=function(){return this.m};_.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function sl(n){let e="";return Ji(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function fo(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=sl(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):U(n,e,t))}function hn(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function il(n){this.Ga=0,this.j=[],this.l=new _s,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=hn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=hn("baseRetryDelayMs",5e3,n),this.hb=hn("retryDelaySeedMs",1e4,n),this.eb=hn("forwardChannelMaxRetries",2,n),this.xa=hn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Ku(n&&n.concurrentRequestLimit),this.Ja=new wm,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}_=il.prototype;_.ra=8;_.H=1;function po(n){if(ol(n),n.H==3){var e=n.W++,t=He(n.I);if(U(t,"SID",n.K),U(t,"RID",e),U(t,"TYPE","terminate"),or(n,t),e=new rr(n,n.l,e),e.L=2,e.A=Is(He(t)),t=!1,R.navigator&&R.navigator.sendBeacon)try{t=R.navigator.sendBeacon(e.A.toString(),"")}catch{}!t&&R.Image&&(new Image().src=e.A,t=!0),t||(e.g=pl(e.l,null),e.g.ha(e.A)),e.G=Date.now(),sr(e)}dl(n)}function Ss(n){n.g&&(mo(n),n.g.cancel(),n.g=null)}function ol(n){Ss(n),n.u&&(R.clearTimeout(n.u),n.u=null),Gr(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&R.clearTimeout(n.m),n.m=null)}function Ps(n){if(!Qu(n.i)&&!n.m){n.m=!0;var e=n.Na;Vn||Cu(),Ln||(Vn(),Ln=!0),so.add(e,n),n.C=0}}function Dm(n,e){return Xu(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=tr(ce(n.Na,n,e),hl(n,n.C)),n.C++,!0)}_.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const s=new rr(this,this.l,n);let i=this.s;if(this.U&&(i?(i=vu(i),Tu(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=al(this,s,e),t=He(this.I),U(t,"RID",n),U(t,"CVER",22),this.F&&U(t,"X-HTTP-Session-Id",this.F),or(this,t),i&&(this.O?e="headers="+encodeURIComponent(String(sl(i)))+"&"+e:this.o&&fo(t,this.o,i)),lo(this.i,s),this.bb&&U(t,"TYPE","init"),this.P?(U(t,"$req",e),U(t,"SID","null"),s.aa=!0,Ei(s,t,null)):Ei(s,t,e),this.H=2}}else this.H==3&&(n?Va(this,n):this.j.length==0||Qu(this.i)||Va(this))};function Va(n,e){var t;e?t=e.m:t=n.W++;const r=He(n.I);U(r,"SID",n.K),U(r,"RID",t),U(r,"AID",n.V),or(n,r),n.o&&n.s&&fo(r,n.o,n.s),t=new rr(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=al(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),lo(n.i,t),Ei(t,r,e)}function or(n,e){n.na&&Ji(n.na,function(t,r){U(e,r,t)}),n.h&&$u({},function(t,r){U(e,r,t)})}function al(n,e,t){t=Math.min(n.j.length,t);var r=n.h?ce(n.h.Va,n.h,n):null;e:{var s=n.j;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<t;c++){let u=s[c].g;const l=s[c].map;if(u-=i,0>u)i=Math.max(0,s[c].g-100),a=!1;else try{Am(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function cl(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;Vn||Cu(),Ln||(Vn(),Ln=!0),so.add(e,n),n.A=0}}function go(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=tr(ce(n.Ma,n),hl(n,n.A)),n.A++,!0)}_.Ma=function(){if(this.u=null,ul(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=tr(ce(this.jb,this),n)}};_.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,de(10),Ss(this),ul(this))};function mo(n){n.B!=null&&(R.clearTimeout(n.B),n.B=null)}function ul(n){n.g=new rr(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=He(n.wa);U(e,"RID","rpc"),U(e,"SID",n.K),U(e,"AID",n.V),U(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&U(e,"TO",n.qa),U(e,"TYPE","xmlhttp"),or(n,e),n.o&&n.s&&fo(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.A=Is(He(e)),t.u=null,t.S=!0,Fu(t,n)}_.ib=function(){this.v!=null&&(this.v=null,Ss(this),go(this),de(19))};function Gr(n){n.v!=null&&(R.clearTimeout(n.v),n.v=null)}function ll(n,e){var t=null;if(n.g==e){Gr(n),mo(n),n.g=null;var r=2}else if(Ti(n.i,e))t=e.F,Yu(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.u?e.u.length:0,e=Date.now()-e.G;var s=n.C;r=ys(),re(r,new Vu(r,t)),Ps(n)}else cl(n);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&Dm(n,e)||r==2&&go(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),s){case 1:pt(n,5);break;case 4:pt(n,10);break;case 3:pt(n,6);break;default:pt(n,2)}}}function hl(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function pt(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=ce(n.pb,n);t||(t=new yt("//www.google.com/images/cleardot.gif"),R.location&&R.location.protocol=="http"||Hr(t,"https"),Is(t)),Rm(t.toString(),r)}else de(2);n.H=0,n.h&&n.h.za(e),dl(n),ol(n)}_.pb=function(n){n?(this.l.info("Successfully pinged google.com"),de(2)):(this.l.info("Failed to ping google.com"),de(1))};function dl(n){if(n.H=0,n.ma=[],n.h){const e=Ju(n.i);(e.length!=0||n.j.length!=0)&&(Aa(n.ma,e),Aa(n.ma,n.j),n.i.i.length=0,Xi(n.j),n.j.length=0),n.h.ya()}}function fl(n,e,t){var r=t instanceof yt?He(t):new yt(t);if(r.g!="")e&&(r.g=e+"."+r.g),Wr(r,r.m);else{var s=R.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new yt(null);r&&Hr(i,r),e&&(i.g=e),s&&Wr(i,s),t&&(i.l=t),r=i}return t=n.F,e=n.Da,t&&e&&U(r,t,e),U(r,"VER",n.ra),or(n,r),r}function pl(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n.Ha&&!n.va?new $(new ws({ob:t})):new $(n.va),e.Oa(n.J),e}_.isActive=function(){return!!this.h&&this.h.isActive(this)};function gl(){}_=gl.prototype;_.Ba=function(){};_.Aa=function(){};_.za=function(){};_.ya=function(){};_.isActive=function(){return!0};_.Va=function(){};function Kr(){if(Gt&&!(10<=Number(zg)))throw Error("Environmental error: no available transport.")}Kr.prototype.g=function(n,e){return new _e(n,e)};function _e(n,e){Y.call(this),this.g=new il(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!Nn(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Nn(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new rn(this)}J(_e,Y);_e.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;de(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=fl(n,null,n.Y),Ps(n)};_e.prototype.close=function(){po(this.g)};_e.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=ro(n),n=t);e.j.push(new vm(e.fb++,n)),e.H==3&&Ps(e)};_e.prototype.N=function(){this.g.h=null,delete this.j,po(this.g),delete this.g,_e.$.N.call(this)};function ml(n){co.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}J(ml,co);function _l(){uo.call(this),this.status=1}J(_l,uo);function rn(n){this.g=n}J(rn,gl);rn.prototype.Ba=function(){re(this.g,"a")};rn.prototype.Aa=function(n){re(this.g,new ml(n))};rn.prototype.za=function(n){re(this.g,new _l)};rn.prototype.ya=function(){re(this.g,"b")};function Nm(){this.blockSize=-1}function we(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}J(we,Nm);we.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ys(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(s=0;16>s;++s)r[s]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],s=n.g[2];var i=n.g[3],o=e+(i^t&(s^i))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=i+(s^e&(t^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(t^i&(e^t))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=t+(e^s&(i^e))+r[3]+3250441966&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(i^t&(s^i))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=i+(s^e&(t^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(t^i&(e^t))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=t+(e^s&(i^e))+r[7]+4249261313&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(i^t&(s^i))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=i+(s^e&(t^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(t^i&(e^t))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=t+(e^s&(i^e))+r[11]+2304563134&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(i^t&(s^i))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=i+(s^e&(t^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(t^i&(e^t))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=t+(e^s&(i^e))+r[15]+1236535329&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(t^s))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^s&(e^t))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(s^i))+r[0]+3921069994&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(t^s))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^s&(e^t))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(s^i))+r[4]+3889429448&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(t^s))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^s&(e^t))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(s^i))+r[8]+1163531501&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(t^s))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^s&(e^t))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(s^i))+r[12]+2368359562&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(t^s^i)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^t)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=t+(s^i^e)+r[14]+4259657740&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^i)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^t)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=t+(s^i^e)+r[10]+3200236656&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^i)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^t)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=t+(s^i^e)+r[6]+76029189&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^i)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^t)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=t+(s^i^e)+r[2]+3299628645&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(s^(t|~i))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~t))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=t+(i^(s|~e))+r[5]+4237533241&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~i))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~t))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=t+(i^(s|~e))+r[1]+2240044497&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~i))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~t))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=t+(i^(s|~e))+r[13]+1309151649&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~i))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~t))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=t+(i^(s|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+s&4294967295,n.g[3]=n.g[3]+i&4294967295}we.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=t;)Ys(this,n,i),i+=this.blockSize;if(typeof n=="string"){for(;i<e;)if(r[s++]=n.charCodeAt(i++),s==this.blockSize){Ys(this,r),s=0;break}}else for(;i<e;)if(r[s++]=n[i++],s==this.blockSize){Ys(this,r),s=0;break}}this.h=s,this.i+=e};we.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function M(n,e){this.h=e;for(var t=[],r=!0,s=n.length-1;0<=s;s--){var i=n[s]|0;r&&i==e||(t[s]=i,r=!1)}this.g=t}var Om={};function _o(n){return-128<=n&&128>n?qg(n,function(e){return new M([e|0],0>e?-1:0)}):new M([n|0],0>n?-1:0)}function Pe(n){if(isNaN(n)||!isFinite(n))return $t;if(0>n)return te(Pe(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=Ii;return new M(e,0)}function yl(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return te(yl(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Pe(Math.pow(e,8)),r=$t,s=0;s<n.length;s+=8){var i=Math.min(8,n.length-s),o=parseInt(n.substring(s,s+i),e);8>i?(i=Pe(Math.pow(e,i)),r=r.R(i).add(Pe(o))):(r=r.R(t),r=r.add(Pe(o)))}return r}var Ii=4294967296,$t=_o(0),wi=_o(1),La=_o(16777216);_=M.prototype;_.ea=function(){if(ye(this))return-te(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:Ii+r)*e,e*=Ii}return n};_.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Fe(this))return"0";if(ye(this))return"-"+te(this).toString(n);for(var e=Pe(Math.pow(n,6)),t=this,r="";;){var s=Xr(t,e).g;t=Qr(t,s.R(e));var i=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=s,Fe(t))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};_.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Fe(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function ye(n){return n.h==-1}_.X=function(n){return n=Qr(this,n),ye(n)?-1:Fe(n)?0:1};function te(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new M(t,~n.h).add(wi)}_.abs=function(){return ye(this)?te(this):this};_.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(n.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(n.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,t[s]=o<<16|i}return new M(t,t[t.length-1]&-2147483648?-1:0)};function Qr(n,e){return n.add(te(e))}_.R=function(n){if(Fe(this)||Fe(n))return $t;if(ye(this))return ye(n)?te(this).R(te(n)):te(te(this).R(n));if(ye(n))return te(this.R(te(n)));if(0>this.X(La)&&0>n.X(La))return Pe(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<n.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(s)>>>16,c=n.D(s)&65535;t[2*r+2*s]+=o*c,Tr(t,2*r+2*s),t[2*r+2*s+1]+=i*c,Tr(t,2*r+2*s+1),t[2*r+2*s+1]+=o*a,Tr(t,2*r+2*s+1),t[2*r+2*s+2]+=i*a,Tr(t,2*r+2*s+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new M(t,0)};function Tr(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function dn(n,e){this.g=n,this.h=e}function Xr(n,e){if(Fe(e))throw Error("division by zero");if(Fe(n))return new dn($t,$t);if(ye(n))return e=Xr(te(n),e),new dn(te(e.g),te(e.h));if(ye(e))return e=Xr(n,te(e)),new dn(te(e.g),e.h);if(30<n.g.length){if(ye(n)||ye(e))throw Error("slowDivide_ only works with positive integers.");for(var t=wi,r=e;0>=r.X(n);)t=Ma(t),r=Ma(r);var s=Ot(t,1),i=Ot(r,1);for(r=Ot(r,2),t=Ot(t,2);!Fe(r);){var o=i.add(r);0>=o.X(n)&&(s=s.add(t),i=o),r=Ot(r,1),t=Ot(t,1)}return e=Qr(n,s.R(e)),new dn(s,e)}for(s=$t;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Pe(t),o=i.R(e);ye(o)||0<o.X(n);)t-=r,i=Pe(t),o=i.R(e);Fe(i)&&(i=wi),s=s.add(i),n=Qr(n,o)}return new dn(s,n)}_.gb=function(n){return Xr(this,n).h};_.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new M(t,this.h&n.h)};_.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new M(t,this.h|n.h)};_.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new M(t,this.h^n.h)};function Ma(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new M(t,n.h)}function Ot(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,s=[],i=0;i<r;i++)s[i]=0<e?n.D(i+t)>>>e|n.D(i+t+1)<<32-e:n.D(i+t);return new M(s,n.h)}Kr.prototype.createWebChannel=Kr.prototype.g;_e.prototype.send=_e.prototype.u;_e.prototype.open=_e.prototype.m;_e.prototype.close=_e.prototype.close;Es.NO_ERROR=0;Es.TIMEOUT=8;Es.HTTP_ERROR=6;Lu.COMPLETE="complete";Mu.EventType=nr;nr.OPEN="a";nr.CLOSE="b";nr.ERROR="c";nr.MESSAGE="d";Y.prototype.listen=Y.prototype.O;$.prototype.listenOnce=$.prototype.P;$.prototype.getLastError=$.prototype.Sa;$.prototype.getLastErrorCode=$.prototype.Ia;$.prototype.getStatus=$.prototype.da;$.prototype.getResponseJson=$.prototype.Wa;$.prototype.getResponseText=$.prototype.ja;$.prototype.send=$.prototype.ha;$.prototype.setWithCredentials=$.prototype.Oa;we.prototype.digest=we.prototype.l;we.prototype.reset=we.prototype.reset;we.prototype.update=we.prototype.j;M.prototype.add=M.prototype.add;M.prototype.multiply=M.prototype.R;M.prototype.modulo=M.prototype.gb;M.prototype.compare=M.prototype.X;M.prototype.toNumber=M.prototype.ea;M.prototype.toString=M.prototype.toString;M.prototype.getBits=M.prototype.D;M.fromNumber=Pe;M.fromString=yl;var Vm=function(){return new Kr},Lm=function(){return ys()},Js=Es,Mm=Lu,xm=kt,xa={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ir=Mu,Um=$,Fm=we,zt=M;const Ua="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}oe.UNAUTHENTICATED=new oe(null),oe.GOOGLE_CREDENTIALS=new oe("google-credentials-uid"),oe.FIRST_PARTY=new oe("first-party-uid"),oe.MOCK_USER=new oe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sn="10.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=new Fi("@firebase/firestore");function fn(){return At.logLevel}function m(n,...e){if(At.logLevel<=b.DEBUG){const t=e.map(yo);At.debug(`Firestore (${sn}): ${n}`,...t)}}function Oe(n,...e){if(At.logLevel<=b.ERROR){const t=e.map(yo);At.error(`Firestore (${sn}): ${n}`,...t)}}function Kt(n,...e){if(At.logLevel<=b.WARN){const t=e.map(yo);At.warn(`Firestore (${sn}): ${n}`,...t)}}function yo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(n="Unexpected state"){const e=`FIRESTORE (${sn}) INTERNAL ASSERTION FAILED: `+n;throw Oe(e),new Error(e)}function x(n,e){n||A()}function P(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends Le{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Bm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(oe.UNAUTHENTICATED))}shutdown(){}}class qm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class jm{constructor(e){this.t=e,this.currentUser=oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new qe;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qe,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{m("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(m("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qe)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(m("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(x(typeof r.accessToken=="string"),new El(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return x(e===null||typeof e=="string"),new oe(e)}}class $m{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=oe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class zm{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new $m(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Hm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Wm{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=i=>{i.error!=null&&m("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,m("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{m("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):m("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(x(typeof t.token=="string"),this.R=t.token,new Hm(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Gm(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function O(n,e){return n<e?-1:n>e?1:0}function Qt(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new E(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new E(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new E(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Q.fromMillis(Date.now())}static fromDate(e){return Q.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Q(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?O(this.nanoseconds,e.nanoseconds):O(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.timestamp=e}static fromTimestamp(e){return new S(e)}static min(){return new S(new Q(0,0))}static max(){return new S(new Q(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t,r){t===void 0?t=0:t>e.length&&A(),r===void 0?r=e.length-t:r>e.length-t&&A(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Bn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Bn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class F extends Bn{construct(e,t,r){return new F(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new E(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new F(t)}static emptyPath(){return new F([])}}const Km=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ne extends Bn{construct(e,t,r){return new ne(e,t,r)}static isValidIdentifier(e){return Km.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ne.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ne(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new E(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new E(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new E(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new E(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ne(t)}static emptyPath(){return new ne([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.path=e}static fromPath(e){return new T(F.fromString(e))}static fromName(e){return new T(F.fromString(e).popFirst(5))}static empty(){return new T(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&F.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return F.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new T(new F(e.slice()))}}function Qm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=S.fromTimestamp(r===1e9?new Q(t+1,0):new Q(t,r));return new it(s,T.empty(),e)}function Xm(n){return new it(n.readTime,n.key,-1)}class it{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new it(S.min(),T.empty(),-1)}static max(){return new it(S.max(),T.empty(),-1)}}function Ym(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=T.comparator(n.documentKey,e.documentKey),t!==0?t:O(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==Jm)throw n;m("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new g((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof g?t:g.resolve(t)}catch(t){return g.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):g.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):g.reject(t)}static resolve(e){return new g((t,r)=>{t(e)})}static reject(e){return new g((t,r)=>{r(e)})}static waitFor(e){return new g((t,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=g.resolve(!1);for(const r of e)t=t.next(s=>s?g.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new g((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(e,t){return new g((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new qe,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new wn(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=vo(r.target.error);this.V.reject(new wn(e,s))}}static open(e,t,r,s){try{return new Eo(t,e.transaction(s,r))}catch(i){throw new wn(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(m("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new t_(t)}}class gt{constructor(e,t,r){this.name=e,this.version=t,this.p=r,gt.S(G())===12.2&&Oe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return m("SimpleDb","Removing database:",e),dt(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Mc())return!1;if(gt.C())return!0;const e=G(),t=gt.S(e),r=0<t&&t<10,s=gt.v(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(m("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new wn(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new E(p.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new E(p.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new wn(e,o))},s.onupgradeneeded=i=>{m("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{m("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=t=>this.L(t)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Eo.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),g.reject(u))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(m("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class e_{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return dt(this.k.delete())}}class wn extends E{constructor(e,t){super(p.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function cr(n){return n.name==="IndexedDbTransactionError"}class t_{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(m("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(m("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),dt(r)}add(e){return m("SimpleDb","ADD",this.store.name,e,e),dt(this.store.add(e))}get(e){return dt(this.store.get(e)).next(t=>(t===void 0&&(t=null),m("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return m("SimpleDb","DELETE",this.store.name,e),dt(this.store.delete(e))}count(){return m("SimpleDb","COUNT",this.store.name),dt(this.store.count())}W(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new g((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new g((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(e,t){m("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.G(s,t)}Z(e){const t=this.cursor({});return new g((r,s)=>{t.onerror=i=>{const o=vo(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,t){const r=[];return new g((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new e_(a),u=t(a.primaryKey,a.value,c);if(u instanceof g){const l=u.catch(h=>(c.done(),g.reject(h)));r.push(l)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>g.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function dt(n){return new g((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=vo(r.target.error);t(s)}})}let Fa=!1;function vo(n){const e=gt.S(G());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new E("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Fa||(Fa=!0,setTimeout(()=>{throw r},0)),r}}return n}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.se(r),this.oe=r=>t.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}To._e=-1;function Cs(n){return n==null}function Yr(n){return n===0&&1/n==-1/0}function n_(n){return typeof n=="number"&&Number.isInteger(n)&&!Yr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function on(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Tl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,t){this.comparator=e,this.root=t||ee.EMPTY}insert(e,t){return new q(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ee.BLACK,null,null))}remove(e){return new q(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ee.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wr(this.root,e,this.comparator,!1)}getReverseIterator(){return new wr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wr(this.root,e,this.comparator,!0)}}class wr{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ee{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ee.RED,this.left=s??ee.EMPTY,this.right=i??ee.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ee(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ee.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const e=this.left.check();if(e!==this.right.check())throw A();return e+(this.isRed()?0:1)}}ee.EMPTY=null,ee.RED=!0,ee.BLACK=!1;ee.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(e,t,r,s,i){return this}insert(e,t,r){return new ee(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.comparator=e,this.data=new q(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new qa(this.data.getIterator())}getIteratorFrom(e){return new qa(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof se)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new se(this.comparator);return t.data=e,t}}class qa{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.fields=e,e.sort(ne.comparator)}static empty(){return new Te([])}unionWith(e){let t=new se(ne.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Te(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Qt(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Il("Invalid base64 string: "+i):i}}(e);return new le(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new le(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return O(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}le.EMPTY_BYTE_STRING=new le("");const r_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ot(n){if(x(!!n),typeof n=="string"){let e=0;const t=r_.exec(n);if(x(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:H(n.seconds),nanos:H(n.nanos)}}function H(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Rt(n){return typeof n=="string"?le.fromBase64String(n):le.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function wo(n){const e=n.mapValue.fields.__previous_value__;return Io(e)?wo(e):e}function qn(n){const e=ot(n.mapValue.fields.__local_write_time__.timestampValue);return new Q(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,t,r,s,i,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class jn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new jn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof jn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function St(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Io(n)?4:i_(n)?9007199254740991:10:A()}function Ve(n,e){if(n===e)return!0;const t=St(n);if(t!==St(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return qn(n).isEqual(qn(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ot(s.timestampValue),a=ot(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Rt(s.bytesValue).isEqual(Rt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return H(s.geoPointValue.latitude)===H(i.geoPointValue.latitude)&&H(s.geoPointValue.longitude)===H(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return H(s.integerValue)===H(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=H(s.doubleValue),a=H(i.doubleValue);return o===a?Yr(o)===Yr(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Qt(n.arrayValue.values||[],e.arrayValue.values||[],Ve);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Ba(o)!==Ba(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Ve(o[c],a[c])))return!1;return!0}(n,e);default:return A()}}function $n(n,e){return(n.values||[]).find(t=>Ve(t,e))!==void 0}function Xt(n,e){if(n===e)return 0;const t=St(n),r=St(e);if(t!==r)return O(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return O(n.booleanValue,e.booleanValue);case 2:return function(i,o){const a=H(i.integerValue||i.doubleValue),c=H(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return ja(n.timestampValue,e.timestampValue);case 4:return ja(qn(n),qn(e));case 5:return O(n.stringValue,e.stringValue);case 6:return function(i,o){const a=Rt(i),c=Rt(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=O(a[u],c[u]);if(l!==0)return l}return O(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const a=O(H(i.latitude),H(o.latitude));return a!==0?a:O(H(i.longitude),H(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=Xt(a[u],c[u]);if(l)return l}return O(a.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Ar.mapValue&&o===Ar.mapValue)return 0;if(i===Ar.mapValue)return 1;if(o===Ar.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=O(c[h],l[h]);if(d!==0)return d;const f=Xt(a[c[h]],u[l[h]]);if(f!==0)return f}return O(c.length,l.length)}(n.mapValue,e.mapValue);default:throw A()}}function ja(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return O(n,e);const t=ot(n),r=ot(e),s=O(t.seconds,r.seconds);return s!==0?s:O(t.nanos,r.nanos)}function Yt(n){return Ai(n)}function Ai(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=ot(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Rt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return T.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Ai(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ai(t.fields[o])}`;return s+"}"}(n.mapValue):A()}function $a(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ri(n){return!!n&&"integerValue"in n}function Ao(n){return!!n&&"arrayValue"in n}function za(n){return!!n&&"nullValue"in n}function Ha(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Or(n){return!!n&&"mapValue"in n}function An(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return on(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=An(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=An(n.arrayValue.values[t]);return e}return Object.assign({},n)}function i_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.value=e}static empty(){return new Ee({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Or(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=An(t)}setAll(e){let t=ne.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=An(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Or(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ve(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Or(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){on(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ee(An(this.value))}}function wl(n){const e=[];return on(n.fields,(t,r)=>{const s=new ne([t]);if(Or(r)){const i=wl(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Te(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,t,r,s,i,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ae(e,0,S.min(),S.min(),S.min(),Ee.empty(),0)}static newFoundDocument(e,t,r,s){return new ae(e,1,t,S.min(),r,s,0)}static newNoDocument(e,t){return new ae(e,2,t,S.min(),S.min(),Ee.empty(),0)}static newUnknownDocument(e,t){return new ae(e,3,t,S.min(),S.min(),Ee.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(S.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ee.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ee.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t){this.position=e,this.inclusive=t}}function Wa(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=T.comparator(T.fromName(o.referenceValue),t.key):r=Xt(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ga(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ve(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,t="asc"){this.field=e,this.dir=t}}function o_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{}class W extends Al{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new c_(e,t,r):t==="array-contains"?new h_(e,r):t==="in"?new d_(e,r):t==="not-in"?new f_(e,r):t==="array-contains-any"?new p_(e,r):new W(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new u_(e,r):new l_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Xt(t,this.value)):t!==null&&St(this.value)===St(t)&&this.matchesComparison(Xt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ae extends Al{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new Ae(e,t)}matches(e){return Rl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Rl(n){return n.op==="and"}function Sl(n){return a_(n)&&Rl(n)}function a_(n){for(const e of n.filters)if(e instanceof Ae)return!1;return!0}function Si(n){if(n instanceof W)return n.field.canonicalString()+n.op.toString()+Yt(n.value);if(Sl(n))return n.filters.map(e=>Si(e)).join(",");{const e=n.filters.map(t=>Si(t)).join(",");return`${n.op}(${e})`}}function Pl(n,e){return n instanceof W?function(r,s){return s instanceof W&&r.op===s.op&&r.field.isEqual(s.field)&&Ve(r.value,s.value)}(n,e):n instanceof Ae?function(r,s){return s instanceof Ae&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Pl(o,s.filters[a]),!0):!1}(n,e):void A()}function Cl(n){return n instanceof W?function(t){return`${t.field.canonicalString()} ${t.op} ${Yt(t.value)}`}(n):n instanceof Ae?function(t){return t.op.toString()+" {"+t.getFilters().map(Cl).join(" ,")+"}"}(n):"Filter"}class c_ extends W{constructor(e,t,r){super(e,t,r),this.key=T.fromName(r.referenceValue)}matches(e){const t=T.comparator(e.key,this.key);return this.matchesComparison(t)}}class u_ extends W{constructor(e,t){super(e,"in",t),this.keys=bl("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class l_ extends W{constructor(e,t){super(e,"not-in",t),this.keys=bl("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function bl(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>T.fromName(r.referenceValue))}class h_ extends W{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ao(t)&&$n(t.arrayValue,this.value)}}class d_ extends W{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$n(this.value.arrayValue,t)}}class f_ extends W{constructor(e,t){super(e,"not-in",t)}matches(e){if($n(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!$n(this.value.arrayValue,t)}}class p_ extends W{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ao(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>$n(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Ka(n,e=null,t=[],r=[],s=null,i=null,o=null){return new g_(n,e,t,r,s,i,o)}function Ro(n){const e=P(n);if(e.ce===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Si(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Cs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Yt(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Yt(r)).join(",")),e.ce=t}return e.ce}function So(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!o_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Pl(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ga(n.startAt,e.startAt)&&Ga(n.endAt,e.endAt)}function Pi(n){return T.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function m_(n,e,t,r,s,i,o,a){return new ur(n,e,t,r,s,i,o,a)}function kl(n){return new ur(n)}function Qa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Dl(n){return n.collectionGroup!==null}function Rn(n){const e=P(n);if(e.le===null){e.le=[];const t=new Set;for(const i of e.explicitOrderBy)e.le.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new se(ne.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.le.push(new Zr(i,r))}),t.has(ne.keyField().canonicalString())||e.le.push(new Zr(ne.keyField(),r))}return e.le}function De(n){const e=P(n);return e.he||(e.he=__(e,Rn(n))),e.he}function __(n,e){if(n.limitType==="F")return Ka(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Zr(s.field,i)});const t=n.endAt?new Jr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Jr(n.startAt.position,n.startAt.inclusive):null;return Ka(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ci(n,e){const t=n.filters.concat([e]);return new ur(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function bi(n,e,t){return new ur(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function bs(n,e){return So(De(n),De(e))&&n.limitType===e.limitType}function Nl(n){return`${Ro(De(n))}|lt:${n.limitType}`}function Lt(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Cl(s)).join(", ")}]`),Cs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Yt(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Yt(s)).join(",")),`Target(${r})`}(De(n))}; limitType=${n.limitType})`}function ks(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):T.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Rn(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const u=Wa(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Rn(r),s)||r.endAt&&!function(o,a,c){const u=Wa(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Rn(r),s))}(n,e)}function y_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ol(n){return(e,t)=>{let r=!1;for(const s of Rn(n)){const i=E_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function E_(n,e,t){const r=n.field.isKeyField()?T.comparator(e.key,t.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?Xt(c,u):A()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return A()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){on(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Tl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=new q(T.comparator);function We(){return v_}const Vl=new q(T.comparator);function En(...n){let e=Vl;for(const t of n)e=e.insert(t.key,t);return e}function Ll(n){let e=Vl;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function mt(){return Sn()}function Ml(){return Sn()}function Sn(){return new an(n=>n.toString(),(n,e)=>n.isEqual(e))}const T_=new q(T.comparator),I_=new se(T.comparator);function C(...n){let e=I_;for(const t of n)e=e.add(t);return e}const w_=new se(O);function A_(){return w_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yr(e)?"-0":e}}function Ul(n){return{integerValue:""+n}}function R_(n,e){return n_(e)?Ul(e):xl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(){this._=void 0}}function S_(n,e,t){return n instanceof es?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Io(i)&&(i=wo(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof zn?Bl(n,e):n instanceof Hn?ql(n,e):function(s,i){const o=Fl(s,i),a=Xa(o)+Xa(s.Ie);return Ri(o)&&Ri(s.Ie)?Ul(a):xl(s.serializer,a)}(n,e)}function P_(n,e,t){return n instanceof zn?Bl(n,e):n instanceof Hn?ql(n,e):t}function Fl(n,e){return n instanceof ts?function(r){return Ri(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class es extends Ds{}class zn extends Ds{constructor(e){super(),this.elements=e}}function Bl(n,e){const t=jl(e);for(const r of n.elements)t.some(s=>Ve(s,r))||t.push(r);return{arrayValue:{values:t}}}class Hn extends Ds{constructor(e){super(),this.elements=e}}function ql(n,e){let t=jl(e);for(const r of n.elements)t=t.filter(s=>!Ve(s,r));return{arrayValue:{values:t}}}class ts extends Ds{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Xa(n){return H(n.integerValue||n.doubleValue)}function jl(n){return Ao(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function C_(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof zn&&s instanceof zn||r instanceof Hn&&s instanceof Hn?Qt(r.elements,s.elements,Ve):r instanceof ts&&s instanceof ts?Ve(r.Ie,s.Ie):r instanceof es&&s instanceof es}(n.transform,e.transform)}class b_{constructor(e,t){this.version=e,this.transformResults=t}}class je{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new je}static exists(e){return new je(void 0,e)}static updateTime(e){return new je(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ns{}function $l(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Hl(n.key,je.none()):new lr(n.key,n.data,je.none());{const t=n.data,r=Ee.empty();let s=new se(ne.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Dt(n.key,r,new Te(s.toArray()),je.none())}}function k_(n,e,t){n instanceof lr?function(s,i,o){const a=s.value.clone(),c=Ja(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof Dt?function(s,i,o){if(!Vr(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Ja(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(zl(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Pn(n,e,t,r){return n instanceof lr?function(i,o,a,c){if(!Vr(i.precondition,o))return a;const u=i.value.clone(),l=Za(i.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof Dt?function(i,o,a,c){if(!Vr(i.precondition,o))return a;const u=Za(i.fieldTransforms,c,o),l=o.data;return l.setAll(zl(i)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(n,e,t,r):function(i,o,a){return Vr(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function D_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Fl(r.transform,s||null);i!=null&&(t===null&&(t=Ee.empty()),t.set(r.field,i))}return t||null}function Ya(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Qt(r,s,(i,o)=>C_(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class lr extends Ns{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Dt extends Ns{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function zl(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ja(n,e,t){const r=new Map;x(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,P_(o,a,t[s]))}return r}function Za(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,S_(i,o,e))}return r}class Hl extends Ns{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class N_ extends Ns{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&k_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Pn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Pn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Ml();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const c=$l(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(S.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),C())}isEqual(e){return this.batchId===e.batchId&&Qt(this.mutations,e.mutations,(t,r)=>Ya(t,r))&&Qt(this.baseMutations,e.baseMutations,(t,r)=>Ya(t,r))}}class Po{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){x(e.mutations.length===r.length);let s=function(){return T_}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Po(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z,N;function M_(n){switch(n){default:return A();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function Wl(n){if(n===void 0)return Oe("GRPC error has no .code"),p.UNKNOWN;switch(n){case z.OK:return p.OK;case z.CANCELLED:return p.CANCELLED;case z.UNKNOWN:return p.UNKNOWN;case z.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case z.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case z.INTERNAL:return p.INTERNAL;case z.UNAVAILABLE:return p.UNAVAILABLE;case z.UNAUTHENTICATED:return p.UNAUTHENTICATED;case z.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case z.NOT_FOUND:return p.NOT_FOUND;case z.ALREADY_EXISTS:return p.ALREADY_EXISTS;case z.PERMISSION_DENIED:return p.PERMISSION_DENIED;case z.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case z.ABORTED:return p.ABORTED;case z.OUT_OF_RANGE:return p.OUT_OF_RANGE;case z.UNIMPLEMENTED:return p.UNIMPLEMENTED;case z.DATA_LOSS:return p.DATA_LOSS;default:return A()}}(N=z||(z={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=new zt([4294967295,4294967295],0);function ec(n){const e=x_().encode(n),t=new Fm;return t.update(e),new Uint8Array(t.digest())}function tc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new zt([t,r],0),new zt([s,i],0)]}class Co{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new vn(`Invalid padding: ${t}`);if(r<0)throw new vn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new vn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new vn(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=zt.fromNumber(this.Te)}de(e,t,r){let s=e.add(t.multiply(zt.fromNumber(r)));return s.compare(U_)===1&&(s=new zt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=ec(e),[r,s]=tc(t);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Co(i,s,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const t=ec(e),[r,s]=tc(t);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class vn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,hr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Os(S.min(),s,new q(O),We(),C())}}class hr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new hr(r,t,C(),C(),C())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,t,r,s){this.Ve=e,this.removedTargetIds=t,this.key=r,this.me=s}}class Gl{constructor(e,t){this.targetId=e,this.fe=t}}class Kl{constructor(e,t,r=le.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class nc{constructor(){this.ge=0,this.pe=sc(),this.ye=le.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=C(),t=C(),r=C();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:A()}}),new hr(this.ye,this.we,e,t,r)}Fe(){this.Se=!1,this.pe=sc()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,x(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class F_{constructor(e){this.Be=e,this.ke=new Map,this.qe=We(),this.Qe=rc(),this.Ke=new q(O)}$e(e){for(const t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(const t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(t);break;case 3:this.je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.Ce(e.resumeToken));break;default:A()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((r,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,r=e.fe.count,s=this.Ye(t);if(s){const i=s.target;if(Pi(i))if(r===0){const o=new T(i.path);this.We(t,o,ae.newNoDocument(o,S.min()))}else x(r===1);else{const o=this.Ze(t);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,u)}}}}}Xe(e){const t=e.fe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,a;try{o=Rt(r).toUint8Array()}catch(c){if(c instanceof Il)return Kt("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Co(o,s,i)}catch(c){return Kt(c instanceof vn?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,t,r){return t.fe.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Be.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(t,i,null),s++)}),s}it(e){const t=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Pi(a.target)){const c=new T(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,ae.newNoDocument(c,e))}i.De&&(t.set(o,i.ve()),i.Fe())}});let r=C();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new Os(e,t,this.Ke,this.qe,r);return this.qe=We(),this.Qe=rc(),this.Ke=new q(O),s}Ue(e,t){if(!this.je(e))return;const r=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,r),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,t)?s.Me(t,1):s.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),r&&(this.qe=this.qe.insert(t,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new nc,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new se(O),this.Qe=this.Qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||m("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.ke.get(e);return t&&t.be?null:this.Be._t(e)}He(e){this.ke.set(e,new nc),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function rc(){return new q(T.comparator)}function sc(){return new q(T.comparator)}const B_={asc:"ASCENDING",desc:"DESCENDING"},q_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},j_={and:"AND",or:"OR"};class $_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ki(n,e){return n.useProto3Json||Cs(e)?e:{value:e}}function ns(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ql(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function z_(n,e){return ns(n,e.toTimestamp())}function Ne(n){return x(!!n),S.fromTimestamp(function(t){const r=ot(t);return new Q(r.seconds,r.nanos)}(n))}function bo(n,e){return Di(n,e).canonicalString()}function Di(n,e){const t=function(s){return new F(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Xl(n){const e=F.fromString(n);return x(th(e)),e}function Ni(n,e){return bo(n.databaseId,e.path)}function Zs(n,e){const t=Xl(e);if(t.get(1)!==n.databaseId.projectId)throw new E(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new E(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new T(Jl(t))}function Yl(n,e){return bo(n.databaseId,e)}function H_(n){const e=Xl(n);return e.length===4?F.emptyPath():Jl(e)}function Oi(n){return new F(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Jl(n){return x(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ic(n,e,t){return{name:Ni(n,e),fields:t.value.mapValue.fields}}function W_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:A()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,l){return u.useProto3Json?(x(l===void 0||typeof l=="string"),le.fromBase64String(l||"")):(x(l===void 0||l instanceof Uint8Array),le.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?p.UNKNOWN:Wl(u.code);return new E(l,u.message||"")}(o);t=new Kl(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Zs(n,r.document.name),i=Ne(r.document.updateTime),o=r.document.createTime?Ne(r.document.createTime):S.min(),a=new Ee({mapValue:{fields:r.document.fields}}),c=ae.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new Lr(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Zs(n,r.document),i=r.readTime?Ne(r.readTime):S.min(),o=ae.newNoDocument(s,i),a=r.removedTargetIds||[];t=new Lr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Zs(n,r.document),i=r.removedTargetIds||[];t=new Lr([],i,s,null)}else{if(!("filter"in e))return A();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new L_(s,i),a=r.targetId;t=new Gl(a,o)}}return t}function G_(n,e){let t;if(e instanceof lr)t={update:ic(n,e.key,e.value)};else if(e instanceof Hl)t={delete:Ni(n,e.key)};else if(e instanceof Dt)t={update:ic(n,e.key,e.data),updateMask:ny(e.fieldMask)};else{if(!(e instanceof N_))return A();t={verify:Ni(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof es)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof zn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Hn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ts)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw A()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:z_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:A()}(n,e.precondition)),t}function K_(n,e){return n&&n.length>0?(x(e!==void 0),n.map(t=>function(s,i){let o=s.updateTime?Ne(s.updateTime):Ne(i);return o.isEqual(S.min())&&(o=Ne(i)),new b_(o,s.transformResults||[])}(t,e))):[]}function Q_(n,e){return{documents:[Yl(n,e.path)]}}function X_(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Yl(n,s);const i=function(u){if(u.length!==0)return eh(Ae.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(l=>function(d){return{field:Mt(d.field),direction:Z_(d.dir)}}(l))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=ki(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:t,parent:s}}function Y_(n){let e=H_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){x(r===1);const l=t.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=function(h){const d=Zl(h);return d instanceof Ae&&Sl(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(d=>function(v){return new Zr(xt(v.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Cs(d)?null:d}(t.limit));let c=null;t.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new Jr(f,d)}(t.startAt));let u=null;return t.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new Jr(f,d)}(t.endAt)),m_(e,s,o,i,a,"F",c,u)}function J_(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return A()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Zl(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=xt(t.unaryFilter.field);return W.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=xt(t.unaryFilter.field);return W.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xt(t.unaryFilter.field);return W.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=xt(t.unaryFilter.field);return W.create(o,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(n):n.fieldFilter!==void 0?function(t){return W.create(xt(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ae.create(t.compositeFilter.filters.map(r=>Zl(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return A()}}(t.compositeFilter.op))}(n):A()}function Z_(n){return B_[n]}function ey(n){return q_[n]}function ty(n){return j_[n]}function Mt(n){return{fieldPath:n.canonicalString()}}function xt(n){return ne.fromServerFormat(n.fieldPath)}function eh(n){return n instanceof W?function(t){if(t.op==="=="){if(Ha(t.value))return{unaryFilter:{field:Mt(t.field),op:"IS_NAN"}};if(za(t.value))return{unaryFilter:{field:Mt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ha(t.value))return{unaryFilter:{field:Mt(t.field),op:"IS_NOT_NAN"}};if(za(t.value))return{unaryFilter:{field:Mt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mt(t.field),op:ey(t.op),value:t.value}}}(n):n instanceof Ae?function(t){const r=t.getFilters().map(s=>eh(s));return r.length===1?r[0]:{compositeFilter:{op:ty(t.op),filters:r}}}(n):A()}function ny(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function th(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t,r,s,i=S.min(),o=S.min(),a=le.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new tt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new tt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e){this.ct=e}}function sy(n){const e=Y_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?bi(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(){this._n=new oy}addToCollectionParentIndex(e,t){return this._n.add(t),g.resolve()}getCollectionParents(e,t){return g.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return g.resolve()}deleteFieldIndex(e,t){return g.resolve()}deleteAllFieldIndexes(e){return g.resolve()}createTargetIndexes(e,t){return g.resolve()}getDocumentsMatchingTarget(e,t){return g.resolve(null)}getIndexType(e,t){return g.resolve(0)}getFieldIndexes(e,t){return g.resolve([])}getNextCollectionGroupToUpdate(e){return g.resolve(null)}getMinOffset(e,t){return g.resolve(it.min())}getMinOffsetFromCollectionGroup(e,t){return g.resolve(it.min())}updateCollectionGroup(e,t,r){return g.resolve()}updateIndexEntries(e,t){return g.resolve()}}class oy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new se(F.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new se(F.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Jt(0)}static Ln(){return new Jt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(){this.changes=new an(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ae.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?g.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Pn(r.mutation,s,Te.empty(),Q.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,C()).next(()=>r))}getLocalViewOfDocuments(e,t,r=C()){const s=mt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=En();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=mt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,C()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,s){let i=We();const o=Sn(),a=function(){return Sn()}();return t.forEach((c,u)=>{const l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof Dt)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Pn(l.mutation,u,l.mutation.getFieldMask(),Q.now())):o.set(u.key,Te.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new cy(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Sn();let s=new q((o,a)=>o-a),i=C();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||Te.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(s.get(a.batchId)||C()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Ml();l.forEach(d=>{if(!i.has(d)){const f=$l(t.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return g.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return T.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Dl(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):g.resolve(mt());let a=-1,c=i;return o.next(u=>g.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?g.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,C())).next(l=>({batchId:a,changes:Ll(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new T(t)).next(r=>{let s=En();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=En();return this.indexManager.getCollectionParents(e,i).next(a=>g.forEach(a,c=>{const u=function(h,d){return new ur(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(l=>{l.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((c,u)=>{const l=u.getKey();o.get(l)===null&&(o=o.insert(l,ae.newInvalidDocument(l)))});let a=En();return o.forEach((c,u)=>{const l=i.get(c);l!==void 0&&Pn(l.mutation,u,Te.empty(),Q.now()),ks(t,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return g.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ne(s.createTime)}}(t)),g.resolve()}getNamedQuery(e,t){return g.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(s){return{name:s.name,query:sy(s.bundledQuery),readTime:Ne(s.readTime)}}(t)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(){this.overlays=new q(T.comparator),this.hr=new Map}getOverlay(e,t){return g.resolve(this.overlays.get(t))}getOverlays(e,t){const r=mt();return g.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),g.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),g.resolve()}getOverlaysForCollection(e,t,r){const s=mt(),i=t.length+1,o=new T(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return g.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new q((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=mt(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=mt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return g.resolve(a)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new V_(t,r));let i=this.hr.get(t);i===void 0&&(i=C(),this.hr.set(t,i)),this.hr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this.Pr=new se(X.Ir),this.Tr=new se(X.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const r=new X(e,t);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ar(new X(e,t))}Rr(e,t){e.forEach(r=>this.removeReference(r,t))}Vr(e){const t=new T(new F([])),r=new X(t,e),s=new X(t,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new T(new F([])),r=new X(t,e),s=new X(t,e+1);let i=C();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new X(e,0),r=this.Pr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class X{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return T.comparator(e.key,t.key)||O(e.pr,t.pr)}static Er(e,t){return O(e.pr,t.pr)||T.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new se(X.Ir)}checkEmpty(e){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new O_(i,t,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new X(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(e,t){return g.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.br(r),i=s<0?0:s;return g.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new X(t,0),s=new X(t,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),g.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new se(O);return t.forEach(s=>{const i=new X(s,0),o=new X(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),g.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;T.isDocumentKey(i)||(i=i.child(""));const o=new X(new T(i),0);let a=new se(O);return this.wr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.pr)),!0)},o),g.resolve(this.Dr(a))}Dr(e){const t=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){x(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return g.forEach(t.mutations,s=>{const i=new X(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,t){const r=new X(t,0),s=this.wr.firstAfterOrEqual(r);return g.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,g.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e){this.vr=e,this.docs=function(){return new q(T.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return g.resolve(r?r.document.mutableCopy():ae.newInvalidDocument(t))}getEntries(e,t){let r=We();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ae.newInvalidDocument(s))}),g.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=We();const o=t.path,a=new T(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Ym(Xm(l),r)<=0||(s.has(l.key)||ks(t,l))&&(i=i.insert(l.key,l.mutableCopy()))}return g.resolve(i)}getAllFromCollectionGroup(e,t,r,s){A()}Fr(e,t){return g.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new py(this)}getSize(e){return g.resolve(this.size)}}class py extends ay{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),g.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e){this.persistence=e,this.Mr=new an(t=>Ro(t),So),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ko,this.targetCount=0,this.Lr=Jt.Nn()}forEachTarget(e,t){return this.Mr.forEach((r,s)=>t(s)),g.resolve()}getLastRemoteSnapshotVersion(e){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return g.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Or&&(this.Or=t),g.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new Jt(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,g.resolve()}updateTargetData(e,t){return this.qn(t),g.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,g.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),g.waitFor(i).next(()=>s)}getTargetCount(e){return g.resolve(this.targetCount)}getTargetData(e,t){const r=this.Mr.get(t)||null;return g.resolve(r)}addMatchingKeys(e,t,r){return this.Nr.dr(t,r),g.resolve()}removeMatchingKeys(e,t,r){this.Nr.Rr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),g.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),g.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Nr.gr(t);return g.resolve(r)}containsKey(e,t){return g.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,t){this.Br={},this.overlays={},this.kr=new To(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new gy(this),this.indexManager=new iy,this.remoteDocumentCache=function(s){return new fy(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new ry(t),this.$r=new ly(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new hy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new dy(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,r){m("MemoryPersistence","Starting transaction:",e);const s=new _y(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,t){return g.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class _y extends Zm{constructor(e){super(),this.currentSequenceNumber=e}}class Do{constructor(e){this.persistence=e,this.zr=new ko,this.jr=null}static Hr(e){return new Do(e)}get Jr(){if(this.jr)return this.jr;throw A()}addReference(e,t,r){return this.zr.addReference(r,t),this.Jr.delete(r.toString()),g.resolve()}removeReference(e,t,r){return this.zr.removeReference(r,t),this.Jr.add(r.toString()),g.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),g.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Jr,r=>{const s=T.fromPath(r);return this.Yr(e,s).next(i=>{i||t.removeEntry(s,S.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(r=>{r?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return g.or([()=>g.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.qi=r,this.Qi=s}static Ki(e,t){let r=C(),s=C();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new No(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return pd()?8:gt.v(G())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ji(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new yy;return this.Ji(e,t,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,t,o,a.size)})}).next(()=>i.result)}Yi(e,t,r,s){return r.documentReadCount<this.Wi?(fn()<=b.DEBUG&&m("QueryEngine","SDK will not create cache indexes for query:",Lt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),g.resolve()):(fn()<=b.DEBUG&&m("QueryEngine","Query:",Lt(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(fn()<=b.DEBUG&&m("QueryEngine","The SDK decides to create cache indexes for query:",Lt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,De(t))):g.resolve())}ji(e,t){if(Qa(t))return g.resolve(null);let r=De(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=bi(t,null,"F"),r=De(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=C(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Zi(t,a);return this.Xi(t,u,o,c.readTime)?this.ji(e,bi(t,null,"F")):this.es(e,u,t,c)}))})))}Hi(e,t,r,s){return Qa(t)||s.isEqual(S.min())?g.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(t,i);return this.Xi(t,o,r,s)?g.resolve(null):(fn()<=b.DEBUG&&m("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Lt(t)),this.es(e,o,t,Qm(s,-1)).next(a=>a))})}Zi(e,t){let r=new se(Ol(e));return t.forEach((s,i)=>{ks(e,i)&&(r=r.add(i))}),r}Xi(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,t,r){return fn()<=b.DEBUG&&m("QueryEngine","Using full collection scan to execute query:",Lt(t)),this.zi.getDocumentsMatchingQuery(e,t,it.min(),r)}es(e,t,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,t,r,s){this.persistence=e,this.ts=t,this.serializer=s,this.ns=new q(O),this.rs=new an(i=>Ro(i),So),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uy(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function Ty(n,e,t,r){return new vy(n,e,t,r)}async function nh(n,e){const t=P(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t._s(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=C();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function Iy(n,e){const t=P(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.os.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let f=g.resolve();return d.forEach(v=>{f=f.next(()=>l.getEntry(c,v)).next(I=>{const y=u.docVersions.get(v);x(y!==null),I.version.compareTo(y)<0&&(h.applyToRemoteDocument(I,u),I.isValidDocument()&&(I.setReadTime(u.commitVersion),l.addEntry(I)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=C();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function rh(n){const e=P(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function wy(n,e){const t=P(n),r=e.snapshotVersion;let s=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.os.newChangeBuffer({trackRemovals:!0});s=t.ns;const a=[];e.targetChanges.forEach((l,h)=>{const d=s.get(h);if(!d)return;a.push(t.Qr.removeMatchingKeys(i,l.removedDocuments,h).next(()=>t.Qr.addMatchingKeys(i,l.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(le.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),s=s.insert(h,f),function(I,y,k){return I.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(d,f,l)&&a.push(t.Qr.updateTargetData(i,f))});let c=We(),u=C();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Ay(i,o,e.documentUpdates).next(l=>{c=l.cs,u=l.ls})),!r.isEqual(S.min())){const l=t.Qr.getLastRemoteSnapshotVersion(i).next(h=>t.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return g.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.ns=s,i))}function Ay(n,e,t){let r=C(),s=C();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=We();return t.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(S.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):m("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{cs:o,ls:s}})}function Ry(n,e){const t=P(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Sy(n,e){const t=P(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Qr.getTargetData(r,e).next(i=>i?(s=i,g.resolve(s)):t.Qr.allocateTargetId(r).next(o=>(s=new tt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.ns=t.ns.insert(r.targetId,r),t.rs.set(e,r.targetId)),r})}async function Vi(n,e,t){const r=P(n),s=r.ns.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!cr(o))throw o;m("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function oc(n,e,t){const r=P(n);let s=S.min(),i=C();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,l){const h=P(c),d=h.rs.get(l);return d!==void 0?g.resolve(h.ns.get(d)):h.Qr.getTargetData(u,l)}(r,o,De(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,t?s:S.min(),t?i:C())).next(a=>(Py(r,y_(e),a),{documents:a,hs:i})))}function Py(n,e,t){let r=n.ss.get(e)||S.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.ss.set(e,r)}class ac{constructor(){this.activeTargetIds=A_()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Cy{constructor(){this.no=new ac,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,r){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new ac,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){m("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){m("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rr=null;function ei(){return Rr===null?Rr=function(){return 268435456+Math.round(2147483648*Math.random())}():Rr++,"0x"+Rr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie="WebChannelConnection";class Ny extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+t.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(t,r,s,i,o){const a=ei(),c=this.bo(t,r.toUriEncodedString());m("RestConnection",`Sending RPC '${t}' ${a}:`,c,s);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,i,o),this.Co(t,c,u,s).then(l=>(m("RestConnection",`Received RPC '${t}' ${a}: `,l),l),l=>{throw Kt("RestConnection",`RPC '${t}' ${a} failed with error: `,l,"url: ",c,"request:",s),l})}vo(t,r,s,i,o,a){return this.So(t,r,s,i,o)}Do(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+sn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}bo(t,r){const s=ky[t];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,t,r,s){const i=ei();return new Promise((o,a)=>{const c=new Um;c.setWithCredentials(!0),c.listenOnce(Mm.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Js.NO_ERROR:const l=c.getResponseJson();m(ie,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(l)),o(l);break;case Js.TIMEOUT:m(ie,`RPC '${e}' ${i} timed out`),a(new E(p.DEADLINE_EXCEEDED,"Request time out"));break;case Js.HTTP_ERROR:const h=c.getStatus();if(m(ie,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const v=function(y){const k=y.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(k)>=0?k:p.UNKNOWN}(f.status);a(new E(v,f.message))}else a(new E(p.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new E(p.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{m(ie,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);m(ie,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",u,r,15)})}Fo(e,t,r){const s=ei(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Vm(),a=Lm(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=i.join("");m(ie,`Creating RPC '${e}' stream ${s}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const v=new Dy({lo:y=>{f?m(ie,`Not sending because RPC '${e}' stream ${s} is closed:`,y):(d||(m(ie,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),m(ie,`RPC '${e}' stream ${s} sending:`,y),h.send(y))},ho:()=>h.close()}),I=(y,k,V)=>{y.listen(k,D=>{try{V(D)}catch(L){setTimeout(()=>{throw L},0)}})};return I(h,Ir.EventType.OPEN,()=>{f||m(ie,`RPC '${e}' stream ${s} transport opened.`)}),I(h,Ir.EventType.CLOSE,()=>{f||(f=!0,m(ie,`RPC '${e}' stream ${s} transport closed`),v.Vo())}),I(h,Ir.EventType.ERROR,y=>{f||(f=!0,Kt(ie,`RPC '${e}' stream ${s} transport errored:`,y),v.Vo(new E(p.UNAVAILABLE,"The operation could not be completed")))}),I(h,Ir.EventType.MESSAGE,y=>{var k;if(!f){const V=y.data[0];x(!!V);const D=V,L=D.error||((k=D[0])===null||k===void 0?void 0:k.error);if(L){m(ie,`RPC '${e}' stream ${s} received error:`,L);const fe=L.status;let Z=function(Me){const mr=z[Me];if(mr!==void 0)return Wl(mr)}(fe),ve=L.message;Z===void 0&&(Z=p.INTERNAL,ve="Unknown error status: "+fe+" with message "+L.message),f=!0,v.Vo(new E(Z,ve)),h.close()}else m(ie,`RPC '${e}' stream ${s} received:`,V),v.mo(V)}}),I(a,xm.STAT_EVENT,y=>{y.stat===xa.PROXY?m(ie,`RPC '${e}' stream ${s} detected buffering proxy`):y.stat===xa.NOPROXY&&m(ie,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{v.Ro()},0),v}}function ti(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(n){return new $_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=t,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const t=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,t-r);s>0&&m("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,t,r,s,i,o,a,c){this.oi=e,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new sh(e,t)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,t){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():t&&t.code===p.RESOURCE_EXHAUSTED?(Oe(t.toString()),Oe("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):t&&t.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(t)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),t=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===t&&this.o_(r,s)},r=>{e(()=>{const s=new E(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(e,t){const r=this.s_(this.Wo);this.stream=this.a_(e,t),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return m("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return t=>{this.oi.enqueueAndForget(()=>this.Wo===e?t():(m("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Oy extends ih{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}a_(e,t){return this.connection.Fo("Listen",e,t)}onMessage(e){this.jo.reset();const t=W_(this.serializer,e),r=function(i){if(!("targetChange"in i))return S.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?S.min():o.readTime?Ne(o.readTime):S.min()}(e);return this.listener.u_(t,r)}c_(e){const t={};t.database=Oi(this.serializer),t.addTarget=function(i,o){let a;const c=o.target;if(a=Pi(c)?{documents:Q_(i,c)}:{query:X_(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Ql(i,o.resumeToken);const u=ki(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(S.min())>0){a.readTime=ns(i,o.snapshotVersion.toTimestamp());const u=ki(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=J_(this.serializer,e);r&&(t.labels=r),this.t_(t)}l_(e){const t={};t.database=Oi(this.serializer),t.removeTarget=e,this.t_(t)}}class Vy extends ih{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,t){return this.connection.Fo("Write",e,t)}onMessage(e){if(x(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const t=K_(e.writeResults,e.commitTime),r=Ne(e.commitTime);return this.listener.T_(r,t)}return x(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Oi(this.serializer),this.t_(e)}I_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>G_(this.serializer,r))};this.t_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new E(p.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,Di(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(p.UNKNOWN,i.toString())})}vo(e,t,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Di(t,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new E(p.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class My{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Oe(t),this.g_=!1):m("OnlineStateTracker",t)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{Nt(this)&&(m("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=P(c);u.v_.add(4),await dr(u),u.x_.set("Unknown"),u.v_.delete(4),await Ls(u)}(this))})}),this.x_=new My(r,s)}}async function Ls(n){if(Nt(n))for(const e of n.F_)await e(!0)}async function dr(n){for(const e of n.F_)await e(!1)}function oh(n,e){const t=P(n);t.C_.has(e.targetId)||(t.C_.set(e.targetId,e),Mo(t)?Lo(t):cn(t).Jo()&&Vo(t,e))}function Oo(n,e){const t=P(n),r=cn(t);t.C_.delete(e),r.Jo()&&ah(t,e),t.C_.size===0&&(r.Jo()?r.Xo():Nt(t)&&t.x_.set("Unknown"))}function Vo(n,e){if(n.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(S.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}cn(n).c_(e)}function ah(n,e){n.O_.Oe(e),cn(n).l_(e)}function Lo(n){n.O_=new F_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>n.C_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),cn(n).start(),n.x_.p_()}function Mo(n){return Nt(n)&&!cn(n).Ho()&&n.C_.size>0}function Nt(n){return P(n).v_.size===0}function ch(n){n.O_=void 0}async function Uy(n){n.C_.forEach((e,t)=>{Vo(n,e)})}async function Fy(n,e){ch(n),Mo(n)?(n.x_.S_(e),Lo(n)):n.x_.set("Unknown")}async function By(n,e,t){if(n.x_.set("Online"),e instanceof Kl&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(n,e)}catch(r){m("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await rs(n,r)}else if(e instanceof Lr?n.O_.$e(e):e instanceof Gl?n.O_.Je(e):n.O_.Ge(e),!t.isEqual(S.min()))try{const r=await rh(n.localStore);t.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=i.C_.get(u);l&&i.C_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=i.C_.get(c);if(!l)return;i.C_.set(c,l.withResumeToken(le.EMPTY_BYTE_STRING,l.snapshotVersion)),ah(i,c);const h=new tt(l.target,c,u,l.sequenceNumber);Vo(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){m("RemoteStore","Failed to raise snapshot:",r),await rs(n,r)}}async function rs(n,e,t){if(!cr(e))throw e;n.v_.add(1),await dr(n),n.x_.set("Offline"),t||(t=()=>rh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{m("RemoteStore","Retrying IndexedDB access"),await t(),n.v_.delete(1),await Ls(n)})}function uh(n,e){return e().catch(t=>rs(n,t,e))}async function Ms(n){const e=P(n),t=at(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;qy(e);)try{const s=await Ry(e.localStore,r);if(s===null){e.D_.length===0&&t.Xo();break}r=s.batchId,jy(e,s)}catch(s){await rs(e,s)}lh(e)&&hh(e)}function qy(n){return Nt(n)&&n.D_.length<10}function jy(n,e){n.D_.push(e);const t=at(n);t.Jo()&&t.P_&&t.I_(e.mutations)}function lh(n){return Nt(n)&&!at(n).Ho()&&n.D_.length>0}function hh(n){at(n).start()}async function $y(n){at(n).d_()}async function zy(n){const e=at(n);for(const t of n.D_)e.I_(t.mutations)}async function Hy(n,e,t){const r=n.D_.shift(),s=Po.from(r,e,t);await uh(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ms(n)}async function Wy(n,e){e&&at(n).P_&&await async function(r,s){if(function(o){return M_(o)&&o!==p.ABORTED}(s.code)){const i=r.D_.shift();at(r).Zo(),await uh(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ms(r)}}(n,e),lh(n)&&hh(n)}async function uc(n,e){const t=P(n);t.asyncQueue.verifyOperationInProgress(),m("RemoteStore","RemoteStore received new credentials");const r=Nt(t);t.v_.add(3),await dr(t),r&&t.x_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.v_.delete(3),await Ls(t)}async function Gy(n,e){const t=P(n);e?(t.v_.delete(2),await Ls(t)):e||(t.v_.add(2),await dr(t),t.x_.set("Unknown"))}function cn(n){return n.N_||(n.N_=function(t,r,s){const i=P(t);return i.R_(),new Oy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:Uy.bind(null,n),To:Fy.bind(null,n),u_:By.bind(null,n)}),n.F_.push(async e=>{e?(n.N_.Zo(),Mo(n)?Lo(n):n.x_.set("Unknown")):(await n.N_.stop(),ch(n))})),n.N_}function at(n){return n.L_||(n.L_=function(t,r,s){const i=P(t);return i.R_(),new Vy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:$y.bind(null,n),To:Wy.bind(null,n),E_:zy.bind(null,n),T_:Hy.bind(null,n)}),n.F_.push(async e=>{e?(n.L_.Zo(),await Ms(n)):(await n.L_.stop(),n.D_.length>0&&(m("RemoteStore",`Stopping write stream with ${n.D_.length} pending writes`),n.D_=[]))})),n.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new xo(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uo(n,e){if(Oe("AsyncQueue",`${e}: ${n}`),cr(n))return new E(p.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.comparator=e?(t,r)=>e(t,r)||T.comparator(t.key,r.key):(t,r)=>T.comparator(t.key,r.key),this.keyedMap=En(),this.sortedSet=new q(this.comparator)}static emptySet(e){return new Ht(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ht)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ht;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(){this.B_=new q(T.comparator)}track(e){const t=e.doc.key,r=this.B_.get(t);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(t,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(t):e.type===1&&r.type===2?this.B_=this.B_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):A():this.B_=this.B_.insert(t,e)}k_(){const e=[];return this.B_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Zt{constructor(e,t,r,s,i,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Zt(e,t,Ht.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class Qy{constructor(){this.queries=new an(e=>Nl(e),bs),this.onlineState="Unknown",this.W_=new Set}}async function Xy(n,e){const t=P(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.K_()&&e.U_()&&(r=2):(i=new Ky,r=e.U_()?0:1);try{switch(r){case 0:i.q_=await t.onListen(s,!0);break;case 1:i.q_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const a=Uo(o,`Initialization of query '${Lt(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.Q_.push(e),e.G_(t.onlineState),i.q_&&e.z_(i.q_)&&Fo(t)}async function Yy(n,e){const t=P(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.Q_.indexOf(e);o>=0&&(i.Q_.splice(o,1),i.Q_.length===0?s=e.U_()?0:1:!i.K_()&&e.U_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Jy(n,e){const t=P(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.Q_)a.z_(s)&&(r=!0);o.q_=s}}r&&Fo(t)}function Zy(n,e,t){const r=P(n),s=r.queries.get(e);if(s)for(const i of s.Q_)i.onError(t);r.queries.delete(e)}function Fo(n){n.W_.forEach(e=>{e.next()})}var Li,hc;(hc=Li||(Li={})).j_="default",hc.Cache="cache";class eE{constructor(e,t,r){this.query=e,this.H_=t,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Zt(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),t=!0):this.X_(e,this.onlineState)&&(this.ea(e),t=!0),this.Y_=e,t}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let t=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),t=!0),t}X_(e,t){if(!e.fromCache||!this.U_())return!0;const r=t!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const t=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ea(e){e=Zt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==Li.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e){this.key=e}}class fh{constructor(e){this.key=e}}class tE{constructor(e,t){this.query=e,this.ua=t,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=C(),this.mutatedKeys=C(),this.ha=Ol(e),this.Pa=new Ht(this.ha)}get Ia(){return this.ua}Ta(e,t){const r=t?t.Ea:new lc,s=t?t.Pa:this.Pa;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const d=s.get(l),f=ks(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),I=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?v!==I&&(r.track({type:3,doc:f}),y=!0):this.da(d,f)||(r.track({type:2,doc:f}),y=!0,(c&&this.ha(f,c)>0||u&&this.ha(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),y=!0):d&&!f&&(r.track({type:1,doc:d}),y=!0,(c||u)&&(a=!0)),y&&(f?(o=o.add(f),i=I?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:i}}da(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((l,h)=>function(f,v){const I=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return I(f)-I(v)}(l.type,h.type)||this.ha(l.doc,h.doc)),this.Aa(r),s=s!=null&&s;const a=t&&!s?this.Ra():[],c=this.la.size===0&&this.current&&!s?1:0,u=c!==this.ca;return this.ca=c,o.length!==0||u?{snapshot:new Zt(this.query,e.Pa,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new lc,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(t=>this.ua=this.ua.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.ua=this.ua.delete(t)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=C(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const t=[];return e.forEach(r=>{this.la.has(r)||t.push(new fh(r))}),this.la.forEach(r=>{e.has(r)||t.push(new dh(r))}),t}fa(e){this.ua=e.hs,this.la=C();const t=this.Ta(e.documents);return this.applyChanges(t,!0)}ga(){return Zt.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class nE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class rE{constructor(e){this.key=e,this.pa=!1}}class sE{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new an(a=>Nl(a),bs),this.Sa=new Map,this.ba=new Set,this.Da=new q(T.comparator),this.Ca=new Map,this.va=new ko,this.Fa={},this.Ma=new Map,this.xa=Jt.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function iE(n,e,t=!0){const r=Eh(n);let s;const i=r.wa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ga()):s=await ph(r,e,t,!0),s}async function oE(n,e){const t=Eh(n);await ph(t,e,!0,!1)}async function ph(n,e,t,r){const s=await Sy(n.localStore,De(e)),i=s.targetId,o=t?n.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await aE(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&oh(n.remoteStore,s),a}async function aE(n,e,t,r,s){n.Na=(h,d,f)=>async function(I,y,k,V){let D=y.view.Ta(k);D.Xi&&(D=await oc(I.localStore,y.query,!1).then(({documents:ve})=>y.view.Ta(ve,D)));const L=V&&V.targetChanges.get(y.targetId),fe=V&&V.targetMismatches.get(y.targetId)!=null,Z=y.view.applyChanges(D,I.isPrimaryClient,L,fe);return fc(I,y.targetId,Z.Va),Z.snapshot}(n,h,d,f);const i=await oc(n.localStore,e,!0),o=new tE(e,i.hs),a=o.Ta(i.documents),c=hr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(a,n.isPrimaryClient,c);fc(n,t,u.Va);const l=new nE(e,t,o);return n.wa.set(e,l),n.Sa.has(t)?n.Sa.get(t).push(e):n.Sa.set(t,[e]),u.snapshot}async function cE(n,e,t){const r=P(n),s=r.wa.get(e),i=r.Sa.get(s.targetId);if(i.length>1)return r.Sa.set(s.targetId,i.filter(o=>!bs(o,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Vi(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Oo(r.remoteStore,s.targetId),Mi(r,s.targetId)}).catch(ar)):(Mi(r,s.targetId),await Vi(r.localStore,s.targetId,!0))}async function uE(n,e){const t=P(n),r=t.wa.get(e),s=t.Sa.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Oo(t.remoteStore,r.targetId))}async function lE(n,e,t){const r=_E(n);try{const s=await function(o,a){const c=P(o),u=Q.now(),l=a.reduce((f,v)=>f.add(v.key),C());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let v=We(),I=C();return c.os.getEntries(f,l).next(y=>{v=y,v.forEach((k,V)=>{V.isValidDocument()||(I=I.add(k))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,v)).next(y=>{h=y;const k=[];for(const V of a){const D=D_(V,h.get(V.key).overlayedDocument);D!=null&&k.push(new Dt(V.key,D,wl(D.value.mapValue),je.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,k,a)}).next(y=>{d=y;const k=y.applyToLocalDocumentSet(h,I);return c.documentOverlayCache.saveOverlays(f,y.batchId,k)})}).then(()=>({batchId:d.batchId,changes:Ll(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.Fa[o.currentUser.toKey()];u||(u=new q(O)),u=u.insert(a,c),o.Fa[o.currentUser.toKey()]=u}(r,s.batchId,t),await fr(r,s.changes),await Ms(r.remoteStore)}catch(s){const i=Uo(s,"Failed to persist write");t.reject(i)}}async function gh(n,e){const t=P(n);try{const r=await wy(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Ca.get(i);o&&(x(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?x(o.pa):s.removedDocuments.size>0&&(x(o.pa),o.pa=!1))}),await fr(t,r,e)}catch(r){await ar(r)}}function dc(n,e,t){const r=P(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.wa.forEach((i,o)=>{const a=o.view.G_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=P(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.Q_)d.G_(a)&&(u=!0)}),u&&Fo(c)}(r.eventManager,e),s.length&&r.ya.u_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hE(n,e,t){const r=P(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ca.get(e),i=s&&s.key;if(i){let o=new q(T.comparator);o=o.insert(i,ae.newNoDocument(i,S.min()));const a=C().add(i),c=new Os(S.min(),new Map,new q(O),o,a);await gh(r,c),r.Da=r.Da.remove(i),r.Ca.delete(e),Bo(r)}else await Vi(r.localStore,e,!1).then(()=>Mi(r,e,t)).catch(ar)}async function dE(n,e){const t=P(n),r=e.batch.batchId;try{const s=await Iy(t.localStore,e);_h(t,r,null),mh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await fr(t,s)}catch(s){await ar(s)}}async function fE(n,e,t){const r=P(n);try{const s=await function(o,a){const c=P(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(x(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,e);_h(r,e,t),mh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await fr(r,s)}catch(s){await ar(s)}}function mh(n,e){(n.Ma.get(e)||[]).forEach(t=>{t.resolve()}),n.Ma.delete(e)}function _h(n,e,t){const r=P(n);let s=r.Fa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Fa[r.currentUser.toKey()]=s}}function Mi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Sa.get(e))n.wa.delete(r),t&&n.ya.La(r,t);n.Sa.delete(e),n.isPrimaryClient&&n.va.Vr(e).forEach(r=>{n.va.containsKey(r)||yh(n,r)})}function yh(n,e){n.ba.delete(e.path.canonicalString());const t=n.Da.get(e);t!==null&&(Oo(n.remoteStore,t),n.Da=n.Da.remove(e),n.Ca.delete(t),Bo(n))}function fc(n,e,t){for(const r of t)r instanceof dh?(n.va.addReference(r.key,e),pE(n,r)):r instanceof fh?(m("SyncEngine","Document no longer in limbo: "+r.key),n.va.removeReference(r.key,e),n.va.containsKey(r.key)||yh(n,r.key)):A()}function pE(n,e){const t=e.key,r=t.path.canonicalString();n.Da.get(t)||n.ba.has(r)||(m("SyncEngine","New document in limbo: "+t),n.ba.add(r),Bo(n))}function Bo(n){for(;n.ba.size>0&&n.Da.size<n.maxConcurrentLimboResolutions;){const e=n.ba.values().next().value;n.ba.delete(e);const t=new T(F.fromString(e)),r=n.xa.next();n.Ca.set(r,new rE(t)),n.Da=n.Da.insert(t,r),oh(n.remoteStore,new tt(De(kl(t.path)),r,"TargetPurposeLimboResolution",To._e))}}async function fr(n,e,t){const r=P(n),s=[],i=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,c)=>{o.push(r.Na(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const l=No.Ki(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.ya.u_(s),await async function(c,u){const l=P(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(u,d=>g.forEach(d.qi,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>g.forEach(d.Qi,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!cr(h))throw h;m("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=l.ns.get(d),v=f.snapshotVersion,I=f.withLastLimboFreeSnapshotVersion(v);l.ns=l.ns.insert(d,I)}}}(r.localStore,i))}async function gE(n,e){const t=P(n);if(!t.currentUser.isEqual(e)){m("SyncEngine","User change. New user:",e.toKey());const r=await nh(t.localStore,e);t.currentUser=e,function(i,o){i.Ma.forEach(a=>{a.forEach(c=>{c.reject(new E(p.CANCELLED,o))})}),i.Ma.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fr(t,r.us)}}function mE(n,e){const t=P(n),r=t.Ca.get(e);if(r&&r.pa)return C().add(r.key);{let s=C();const i=t.Sa.get(e);if(!i)return s;for(const o of i){const a=t.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function Eh(n){const e=P(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=gh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hE.bind(null,e),e.ya.u_=Jy.bind(null,e.eventManager),e.ya.La=Zy.bind(null,e.eventManager),e}function _E(n){const e=P(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fE.bind(null,e),e}class pc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Vs(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Ty(this.persistence,new Ey,e.initialUser,this.serializer)}createPersistence(e){return new my(Do.Hr,this.serializer)}createSharedClientState(e){return new Cy}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class yE{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gE.bind(null,this.syncEngine),await Gy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Qy}()}createDatastore(e){const t=Vs(e.databaseInfo.databaseId),r=function(i){return new Ny(i)}(e.databaseInfo);return function(i,o,a,c){return new Ly(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,a){return new xy(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>dc(this.syncEngine,t,0),function(){return cc.D()?new cc:new by}())}createSyncEngine(e,t){return function(s,i,o,a,c,u,l){const h=new sE(s,i,o,a,c,u);return l&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(r){const s=P(r);m("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await dr(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):Oe("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e,t,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=oe.UNAUTHENTICATED,this.clientId=vl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{m("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(m("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Uo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ni(n,e){n.asyncQueue.verifyOperationInProgress(),m("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await nh(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function gc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await IE(n);m("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>uc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>uc(e.remoteStore,s)),n._onlineComponents=e}function TE(n){return n.name==="FirebaseError"?n.code===p.FAILED_PRECONDITION||n.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function IE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){m("FirestoreClient","Using user provided OfflineComponentProvider");try{await ni(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!TE(t))throw t;Kt("Error using user provided cache. Falling back to memory cache: "+t),await ni(n,new pc)}}else m("FirestoreClient","Using default OfflineComponentProvider"),await ni(n,new pc);return n._offlineComponents}async function vh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(m("FirestoreClient","Using user provided OnlineComponentProvider"),await gc(n,n._uninitializedComponentsProvider._online)):(m("FirestoreClient","Using default OnlineComponentProvider"),await gc(n,new yE))),n._onlineComponents}function wE(n){return vh(n).then(e=>e.syncEngine)}async function AE(n){const e=await vh(n),t=e.eventManager;return t.onListen=iE.bind(null,e.syncEngine),t.onUnlisten=cE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=oE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=uE.bind(null,e.syncEngine),t}function RE(n,e,t={}){const r=new qe;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const l=new EE({next:d=>{o.enqueueAndForget(()=>Yy(i,h)),d.fromCache&&c.source==="server"?u.reject(new E(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new eE(a,l,{includeMetadataChanges:!0,ta:!0});return Xy(i,h)}(await AE(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(n,e,t){if(!t)throw new E(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function SE(n,e,t,r){if(e===!0&&r===!0)throw new E(p.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function _c(n){if(!T.isDocumentKey(n))throw new E(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function yc(n){if(T.isDocumentKey(n))throw new E(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function xs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":A()}function Wn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new E(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=xs(n);throw new E(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new E(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new E(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}SE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Th((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new E(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new E(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new E(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Us{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ec({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new E(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ec(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Bm;switch(r.type){case"firstParty":return new zm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new E(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=mc.get(t);r&&(m("ComponentProvider","Removing Datastore"),mc.delete(t),r.terminate())}(this),Promise.resolve()}}function PE(n,e,t,r={}){var s;const i=(n=Wn(n,Us))._getSettings(),o=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Kt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=oe.MOCK_USER;else{a=Lc(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new E(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new oe(u)}n._authCredentials=new qm(new El(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new un(this.firestore,e,this._query)}}class me{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new me(this.firestore,e,this._key)}}class rt extends un{constructor(e,t,r){super(e,t,kl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new me(this.firestore,null,new T(e))}withConverter(e){return new rt(this.firestore,e,this._path)}}function gT(n,e,...t){if(n=K(n),Ih("collection","path",e),n instanceof Us){const r=F.fromString(e,...t);return yc(r),new rt(n,null,r)}{if(!(n instanceof me||n instanceof rt))throw new E(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(F.fromString(e,...t));return yc(r),new rt(n.firestore,null,r)}}function mT(n,e,...t){if(n=K(n),arguments.length===1&&(e=vl.newId()),Ih("doc","path",e),n instanceof Us){const r=F.fromString(e,...t);return _c(r),new me(n,null,new T(r))}{if(!(n instanceof me||n instanceof rt))throw new E(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(F.fromString(e,...t));return _c(r),new me(n.firestore,n instanceof rt?n.converter:null,new T(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new sh(this,"async_queue_retry"),this.cu=()=>{const t=ti();t&&m("AsyncQueue","Visibility state changed to "+t.visibilityState),this.jo.Ko()};const e=ti();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const t=ti();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const t=new qe;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!cr(e))throw e;m("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const t=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Oe("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this._u=!1,r))));return this.nu=t,t}enqueueAfterDelay(e,t,r){this.lu(),this.uu.indexOf(e)>-1&&(t=0);const s=xo.createAndSchedule(this,e,t,r,i=>this.Iu(i));return this.su.push(s),s}lu(){this.ou&&A()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const t of this.su)if(t.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.su)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const t=this.su.indexOf(e);this.su.splice(t,1)}}class qo extends Us{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=function(){return new CE}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ah(this),this._firestoreClient.terminate()}}function _T(n,e){const t=typeof n=="object"?n:Bi(),r=typeof n=="string"?n:e||"(default)",s=as(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Nc("firestore");i&&PE(s,...i)}return s}function wh(n){return n._firestoreClient||Ah(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Ah(n){var e,t,r;const s=n._freezeSettings(),i=function(a,c,u,l){return new s_(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Th(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new vE(n._authCredentials,n._appCheckCredentials,n._queue,i),!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this._byteString=e}static fromBase64String(e){try{return new en(le.fromBase64String(e))}catch(t){throw new E(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new en(le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new E(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new E(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new E(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return O(this._lat,e._lat)||O(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=/^__.*__$/;class kE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Dt(e,this.data,this.fieldMask,t,this.fieldTransforms):new lr(e,this.data,t,this.fieldTransforms)}}function Sh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class zo{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ru(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new zo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.mu({path:r,gu:!1});return s.pu(e),s}yu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.mu({path:r,gu:!1});return s.Ru(),s}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return ss(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(Sh(this.Vu)&&bE.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class DE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Vs(e)}Cu(e,t,r,s=!1){return new zo({Vu:e,methodName:t,Du:r,path:ne.emptyPath(),gu:!1,bu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ph(n){const e=n._freezeSettings(),t=Vs(n._databaseId);return new DE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function NE(n,e,t,r,s,i={}){const o=n.Cu(i.merge||i.mergeFields?2:0,e,t,s);kh("Data must be an object, but it was:",o,r);const a=Ch(r,o);let c,u;if(i.merge)c=new Te(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=VE(e,h,t);if(!o.contains(d))throw new E(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ME(l,d)||l.push(d)}c=new Te(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new kE(new Ee(a),c,u)}function OE(n,e,t,r=!1){return Ho(t,n.Cu(r?4:3,e))}function Ho(n,e){if(bh(n=K(n)))return kh("Unsupported field value:",e,n),Ch(n,e);if(n instanceof Rh)return function(r,s){if(!Sh(s.Vu))throw s.Su(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Su(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Ho(a,s.wu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=K(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return R_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Q.fromDate(r);return{timestampValue:ns(s.serializer,i)}}if(r instanceof Q){const i=new Q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ns(s.serializer,i)}}if(r instanceof $o)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof en)return{bytesValue:Ql(s.serializer,r._byteString)};if(r instanceof me){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:bo(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Su(`Unsupported field value: ${xs(r)}`)}(n,e)}function Ch(n,e){const t={};return Tl(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):on(n,(r,s)=>{const i=Ho(s,e.fu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function bh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Q||n instanceof $o||n instanceof en||n instanceof me||n instanceof Rh)}function kh(n,e,t){if(!bh(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=xs(t);throw r==="an object"?e.Su(n+" a custom object"):e.Su(n+" "+r)}}function VE(n,e,t){if((e=K(e))instanceof jo)return e._internalPath;if(typeof e=="string")return Dh(n,e);throw ss("Field path arguments must be of type string or ",n,!1,void 0,t)}const LE=new RegExp("[~\\*/\\[\\]]");function Dh(n,e,t){if(e.search(LE)>=0)throw ss(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new jo(...e.split("."))._internalPath}catch{throw ss(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ss(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new E(p.INVALID_ARGUMENT,a+n+c)}function ME(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Wo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class xE extends Nh{data(){return super.data()}}function Wo(n,e){return typeof e=="string"?Dh(n,e):e instanceof jo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new E(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Go{}class FE extends Go{}function yT(n,e,...t){let r=[];e instanceof Go&&r.push(e),r=r.concat(t),function(i){const o=i.filter(c=>c instanceof Ko).length,a=i.filter(c=>c instanceof Fs).length;if(o>1||o>0&&a>0)throw new E(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Fs extends FE{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Fs(e,t,r)}_apply(e){const t=this._parse(e);return Oh(e._query,t),new un(e.firestore,e.converter,Ci(e._query,t))}_parse(e){const t=Ph(e.firestore);return function(i,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new E(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Tc(h,l);const f=[];for(const v of h)f.push(vc(c,i,v));d={arrayValue:{values:f}}}else d=vc(c,i,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Tc(h,l),d=OE(a,o,h,l==="in"||l==="not-in");return W.create(u,l,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ET(n,e,t){const r=e,s=Wo("where",n);return Fs._create(s,r,t)}class Ko extends Go{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ko(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ae.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)Oh(o,c),o=Ci(o,c)}(e._query,t),new un(e.firestore,e.converter,Ci(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function vc(n,e,t){if(typeof(t=K(t))=="string"){if(t==="")throw new E(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dl(e)&&t.indexOf("/")!==-1)throw new E(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(F.fromString(t));if(!T.isDocumentKey(r))throw new E(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return $a(n,new T(r))}if(t instanceof me)return $a(n,t._key);throw new E(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xs(t)}.`)}function Tc(n,e){if(!Array.isArray(n)||n.length===0)throw new E(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Oh(n,e){const t=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new E(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new E(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class BE{convertValue(e,t="none"){switch(St(e)){case 0:return null;case 1:return e.booleanValue;case 2:return H(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Rt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw A()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return on(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new $o(H(e.latitude),H(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=wo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(qn(e));default:return null}}convertTimestamp(e){const t=ot(e);return new Q(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=F.fromString(e);x(th(r));const s=new jn(r.get(1),r.get(3)),i=new T(r.popFirst(5));return s.isEqual(t)||Oe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jE extends Nh{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Mr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Wo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Mr extends jE{data(e={}){return super.data(e)}}class $E{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Sr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Mr(this._firestore,this._userDataWriter,r.key,r,new Sr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new E(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Mr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Sr(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Mr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Sr(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:zE(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function zE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A()}}class HE extends BE{constructor(e){super(),this.firestore=e}convertBytes(e){return new en(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new me(this.firestore,null,t)}}function vT(n){n=Wn(n,un);const e=Wn(n.firestore,qo),t=wh(e),r=new HE(e);return UE(n._query),RE(t,n._query).then(s=>new $E(e,r,n,s))}function TT(n,e,t){n=Wn(n,me);const r=Wn(n.firestore,qo),s=qE(n.converter,e,t);return WE(r,[NE(Ph(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,je.none())])}function WE(n,e){return function(r,s){const i=new qe;return r.asyncQueue.enqueueAndForget(async()=>lE(await wE(r),s,i)),i.promise}(wh(n),e)}(function(e,t=!0){(function(s){sn=s})(Ct),Tt(new st("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new qo(new jm(r.getProvider("auth-internal")),new Wm(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new E(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jn(u.options.projectId,l)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Be(Ua,"4.5.0",e),Be(Ua,"4.5.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh="firebasestorage.googleapis.com",Lh="storageBucket",GE=2*60*1e3,KE=10*60*1e3,QE=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j extends Le{constructor(e,t,r=0){super(ri(e),`Firebase Storage: ${t} (${ri(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,j.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ri(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var B;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(B||(B={}));function ri(n){return"storage/"+n}function Qo(){const n="An unknown error occurred, please check the error payload for server response.";return new j(B.UNKNOWN,n)}function XE(n){return new j(B.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function YE(n){return new j(B.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function JE(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new j(B.UNAUTHENTICATED,n)}function ZE(){return new j(B.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ev(n){return new j(B.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Mh(){return new j(B.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function xh(){return new j(B.CANCELED,"User canceled the upload/download.")}function tv(n){return new j(B.INVALID_URL,"Invalid URL '"+n+"'.")}function nv(n){return new j(B.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function rv(){return new j(B.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Lh+"' property when initializing the app?")}function Uh(){return new j(B.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function sv(){return new j(B.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function iv(){return new j(B.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ov(n){return new j(B.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function xi(n){return new j(B.INVALID_ARGUMENT,n)}function Fh(){return new j(B.APP_DELETED,"The Firebase app was deleted.")}function av(n){return new j(B.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Cn(n,e){return new j(B.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function pn(n){throw new j(B.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=ge.makeFromUrl(e,t)}catch{return new ge(e,"")}if(r.path==="")return r;throw nv(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(L){L.path_=decodeURIComponent(L.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${s}/o${d}`,"i"),v={bucket:1,path:3},I=t===Vh?"(?:storage.googleapis.com|storage.cloud.google.com)":t,y="([^?#]*)",k=new RegExp(`^https?://${I}/${s}/${y}`,"i"),D=[{regex:a,indices:c,postModify:i},{regex:f,indices:v,postModify:u},{regex:k,indices:{bucket:1,path:2},postModify:u}];for(let L=0;L<D.length;L++){const fe=D[L],Z=fe.regex.exec(e);if(Z){const ve=Z[fe.indices.bucket];let Ke=Z[fe.indices.path];Ke||(Ke=""),r=new ge(ve,Ke),fe.postModify(r);break}}if(r==null)throw tv(e);return r}}class cv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(n,e,t){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...y){u||(u=!0,e.apply(null,y))}function h(y){s=setTimeout(()=>{s=null,n(f,c())},y)}function d(){i&&clearTimeout(i)}function f(y,...k){if(u){d();return}if(y){d(),l.call(null,y,...k);return}if(c()||o){d(),l.call(null,y,...k);return}r<64&&(r*=2);let D;a===1?(a=2,D=0):D=(r+Math.random())*1e3,h(D)}let v=!1;function I(y){v||(v=!0,d(),!u&&(s!==null?(y||(a=2),clearTimeout(s),h(0)):y||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,I(!0)},t),I}function lv(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(n){return n!==void 0}function dv(n){return typeof n=="function"}function fv(n){return typeof n=="object"&&!Array.isArray(n)}function Bs(n){return typeof n=="string"||n instanceof String}function Ic(n){return Xo()&&n instanceof Blob}function Xo(){return typeof Blob<"u"}function wc(n,e,t,r){if(r<e)throw xi(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw xi(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Bh(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Et;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Et||(Et={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,t,r,s,i,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,v)=>{this.resolve_=f,this.reject_=v,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Pr(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Et.NO_ERROR,c=i.getStatus();if(!a||qh(c,this.additionalRetryCodes_)&&this.retry){const l=i.getErrorCode()===Et.ABORT;r(!1,new Pr(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Pr(u,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());hv(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Qo();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Fh():xh();o(c)}else{const c=Mh();o(c)}};this.canceled_?t(!1,new Pr(!1,null,!0)):this.backoffId_=uv(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&lv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Pr{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function gv(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function mv(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _v(n,e){e&&(n["X-Firebase-GMPID"]=e)}function yv(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Ev(n,e,t,r,s,i,o=!0){const a=Bh(n.urlParams),c=n.url+a,u=Object.assign({},n.headers);return _v(u,e),gv(u,t),mv(u,i),yv(u,r),new pv(c,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Tv(...n){const e=vv();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Xo())return new Blob(n);throw new j(B.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Iv(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(n){if(typeof atob>"u")throw ov("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class si{constructor(e,t){this.data=e,this.contentType=t||null}}function Av(n,e){switch(n){case Ce.RAW:return new si(jh(e));case Ce.BASE64:case Ce.BASE64URL:return new si($h(n,e));case Ce.DATA_URL:return new si(Sv(e),Pv(e))}throw Qo()}function jh(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Rv(n){let e;try{e=decodeURIComponent(n)}catch{throw Cn(Ce.DATA_URL,"Malformed data URL.")}return jh(e)}function $h(n,e){switch(n){case Ce.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Cn(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Ce.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Cn(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=wv(e)}catch(s){throw s.message.includes("polyfill")?s:Cn(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class zh{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Cn(Ce.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=Cv(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Sv(n){const e=new zh(n);return e.base64?$h(Ce.BASE64,e.rest):Rv(e.rest)}function Pv(n){return new zh(n).contentType}function Cv(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){let r=0,s="";Ic(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Ic(this.data_)){const r=this.data_,s=Iv(r,e,t);return s===null?null:new et(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new et(r,!0)}}static getBlob(...e){if(Xo()){const t=e.map(r=>r instanceof et?r.data_:r);return new et(Tv.apply(null,t))}else{const t=e.map(o=>Bs(o)?Av(Ce.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new et(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(n){let e;try{e=JSON.parse(n)}catch{return null}return fv(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function kv(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Wh(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(n,e){return e}class he{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||Dv}}let Cr=null;function Nv(n){return!Bs(n)||n.length<2?n:Wh(n)}function Gh(){if(Cr)return Cr;const n=[];n.push(new he("bucket")),n.push(new he("generation")),n.push(new he("metageneration")),n.push(new he("name","fullPath",!0));function e(i,o){return Nv(o)}const t=new he("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new he("size");return s.xform=r,n.push(s),n.push(new he("timeCreated")),n.push(new he("updated")),n.push(new he("md5Hash",null,!0)),n.push(new he("cacheControl",null,!0)),n.push(new he("contentDisposition",null,!0)),n.push(new he("contentEncoding",null,!0)),n.push(new he("contentLanguage",null,!0)),n.push(new he("contentType",null,!0)),n.push(new he("metadata","customMetadata",!0)),Cr=n,Cr}function Ov(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new ge(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function Vv(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return Ov(r,n),r}function Kh(n,e,t){const r=Hh(e);return r===null?null:Vv(n,r,t)}function Lv(n,e,t,r){const s=Hh(e);if(s===null||!Bs(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=n.bucket,h=n.fullPath,d="/b/"+o(l)+"/o/"+o(h),f=pr(d,t,r),v=Bh({alt:"media",token:u});return f+v})[0]}function Qh(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class ln{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(n){if(!n)throw Qo()}function Yo(n,e){function t(r,s){const i=Kh(n,s,e);return $e(i!==null),i}return t}function Mv(n,e){function t(r,s){const i=Kh(n,s,e);return $e(i!==null),Lv(i,s,n.host,n._protocol)}return t}function gr(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=ZE():s=JE():t.getStatus()===402?s=YE(n.bucket):t.getStatus()===403?s=ev(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Xh(n){const e=gr(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=XE(n.path)),i.serverResponse=s.serverResponse,i}return t}function xv(n,e,t){const r=e.fullServerUrl(),s=pr(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,a=new ln(s,i,Yo(n,t),o);return a.errorHandler=Xh(e),a}function Uv(n,e,t){const r=e.fullServerUrl(),s=pr(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,a=new ln(s,i,Mv(n,t),o);return a.errorHandler=Xh(e),a}function Fv(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Yh(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=Fv(null,e)),r}function Bv(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let D="";for(let L=0;L<2;L++)D=D+Math.random().toString().slice(2);return D}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=Yh(e,r,s),l=Qh(u,t),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=et.getBlob(h,r,d);if(f===null)throw Uh();const v={name:u.fullPath},I=pr(i,n.host,n._protocol),y="POST",k=n.maxUploadRetryTime,V=new ln(I,y,Yo(n,t),k);return V.urlParams=v,V.headers=o,V.body=f.uploadData(),V.errorHandler=gr(e),V}class is{constructor(e,t,r,s){this.current=e,this.total=t,this.finalized=!!r,this.metadata=s||null}}function Jo(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{$e(!1)}return $e(!!t&&(e||["active"]).indexOf(t)!==-1),t}function qv(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o=Yh(e,r,s),a={name:o.fullPath},c=pr(i,n.host,n._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Qh(o,t),d=n.maxUploadRetryTime;function f(I){Jo(I);let y;try{y=I.getResponseHeader("X-Goog-Upload-URL")}catch{$e(!1)}return $e(Bs(y)),y}const v=new ln(c,u,f,d);return v.urlParams=a,v.headers=l,v.body=h,v.errorHandler=gr(e),v}function jv(n,e,t,r){const s={"X-Goog-Upload-Command":"query"};function i(u){const l=Jo(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{$e(!1)}h||$e(!1);const d=Number(h);return $e(!isNaN(d)),new is(d,r.size(),l==="final")}const o="POST",a=n.maxUploadRetryTime,c=new ln(t,o,i,a);return c.headers=s,c.errorHandler=gr(e),c}const Ac=256*1024;function $v(n,e,t,r,s,i,o,a){const c=new is(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw sv();const u=c.total-c.current;let l=u;s>0&&(l=Math.min(l,s));const h=c.current,d=h+l;let f="";l===0?f="finalize":u===l?f="upload, finalize":f="upload";const v={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},I=r.slice(h,d);if(I===null)throw Uh();function y(L,fe){const Z=Jo(L,["active","final"]),ve=c.current+l,Ke=r.size();let Me;return Z==="final"?Me=Yo(e,i)(L,fe):Me=null,new is(ve,Ke,Z==="final",Me)}const k="POST",V=e.maxUploadRetryTime,D=new ln(t,k,y,V);return D.headers=v,D.body=I.uploadData(),D.progressCallback=a||null,D.errorHandler=gr(n),D}const pe={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ii(n){switch(n){case"running":case"pausing":case"canceling":return pe.RUNNING;case"paused":return pe.PAUSED;case"success":return pe.SUCCESS;case"canceled":return pe.CANCELED;case"error":return pe.ERROR;default:return pe.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,t,r){if(dv(e)||t!=null||r!=null)this.next=e,this.error=t??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class Hv{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Et.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Et.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Et.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw pn("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw pn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw pn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw pn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw pn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Wv extends Hv{initXhr(){this.xhr_.responseType="text"}}function Ut(){return new Wv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=Gh(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(B.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(qh(s.status,[]))if(i)s=Mh();else{this.sleepTime=Math.max(this.sleepTime*2,QE),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(B.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const r=qv(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Ut,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,r)=>{const s=jv(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,Ut,t,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Ac*this._chunkMultiplier,t=new is(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=$v(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Ut,s,i,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Ac*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const r=xv(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,Ut,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const r=Bv(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Ut,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=xh(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=ii(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,s){const i=new zv(t||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(ii(this._state)){case pe.SUCCESS:Vt(this._resolve.bind(null,this.snapshot))();break;case pe.CANCELED:case pe.ERROR:const t=this._reject;Vt(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ii(this._state)){case pe.RUNNING:case pe.PAUSED:e.next&&Vt(e.next.bind(e,this.snapshot))();break;case pe.SUCCESS:e.complete&&Vt(e.complete.bind(e))();break;case pe.CANCELED:case pe.ERROR:e.error&&Vt(e.error.bind(e,this._error))();break;default:e.error&&Vt(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,t){this._service=e,t instanceof ge?this._location=t:this._location=ge.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Pt(e,t)}get root(){const e=new ge(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Wh(this._location.path)}get storage(){return this._service}get parent(){const e=bv(this._location.path);if(e===null)return null;const t=new ge(this._location.bucket,e);return new Pt(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw av(e)}}function Kv(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new Gv(n,new et(e),t)}function Qv(n){n._throwIfRoot("getDownloadURL");const e=Uv(n.storage,n._location,Gh());return n.storage.makeRequestWithTokens(e,Ut).then(t=>{if(t===null)throw iv();return t})}function Xv(n,e){const t=kv(n._location.path,e),r=new ge(n._location.bucket,t);return new Pt(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(n){return/^[A-Za-z]+:\/\//.test(n)}function Jv(n,e){return new Pt(n,e)}function Jh(n,e){if(n instanceof Zo){const t=n;if(t._bucket==null)throw rv();const r=new Pt(t,t._bucket);return e!=null?Jh(r,e):r}else return e!==void 0?Xv(n,e):n}function Zv(n,e){if(e&&Yv(e)){if(n instanceof Zo)return Jv(n,e);throw xi("To use ref(service, url), the first argument must be a Storage instance.")}else return Jh(n,e)}function Rc(n,e){const t=e==null?void 0:e[Lh];return t==null?null:ge.makeFromBucketSpec(t,n)}function eT(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:Lc(s,n.app.options.projectId))}class Zo{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Vh,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=GE,this._maxUploadRetryTime=KE,this._requests=new Set,s!=null?this._bucket=ge.makeFromBucketSpec(s,this._host):this._bucket=Rc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ge.makeFromBucketSpec(this._url,e):this._bucket=Rc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){wc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){wc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Pt(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new cv(Fh());{const o=Ev(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Sc="@firebase/storage",Pc="0.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="storage";function IT(n,e,t){return n=K(n),Kv(n,e,t)}function wT(n){return n=K(n),Qv(n)}function AT(n,e){return n=K(n),Zv(n,e)}function RT(n=Bi(),e){n=K(n);const r=as(n,Zh).getImmediate({identifier:e}),s=Nc("storage");return s&&tT(r,...s),r}function tT(n,e,t,r={}){eT(n,e,t,r)}function nT(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Zo(t,r,s,e,Ct)}function rT(){Tt(new st(Zh,nT,"PUBLIC").setMultipleInstances(!0)),Be(Sc,Pc,""),Be(Sc,Pc,"esm2017")}rT();export{RT as a,_T as b,gT as c,vT as d,oT as e,AT as f,hT as g,wT as h,uf as i,cT as j,TT as k,mT as l,aT as m,uT as o,yT as q,Be as r,lT as s,IT as u,ET as w};
