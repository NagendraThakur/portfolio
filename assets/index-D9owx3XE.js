(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Zv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var id={exports:{}},No={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function Zy(){if(w_)return No;w_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:u}}return No.Fragment=e,No.jsx=i,No.jsxs=i,No}var D_;function Ky(){return D_||(D_=1,id.exports=Zy()),id.exports}var pe=Ky(),ad={exports:{}},lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U_;function Qy(){if(U_)return lt;U_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(A){return A===null||typeof A!="object"?null:(A=v&&A[v]||A["@@iterator"],typeof A=="function"?A:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,R={};function y(A,B,se){this.props=A,this.context=B,this.refs=R,this.updater=se||E}y.prototype.isReactComponent={},y.prototype.setState=function(A,B){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,B,"setState")},y.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function _(){}_.prototype=y.prototype;function O(A,B,se){this.props=A,this.context=B,this.refs=R,this.updater=se||E}var L=O.prototype=new _;L.constructor=O,M(L,y.prototype),L.isPureReactComponent=!0;var U=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function z(A,B,se,de,W,he){return se=he.ref,{$$typeof:s,type:A,key:B,ref:se!==void 0?se:null,props:he}}function j(A,B){return z(A.type,B,void 0,void 0,void 0,A.props)}function D(A){return typeof A=="object"&&A!==null&&A.$$typeof===s}function w(A){var B={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(se){return B[se]})}var G=/\/+/g;function oe(A,B){return typeof A=="object"&&A!==null&&A.key!=null?w(""+A.key):B.toString(36)}function ae(){}function xe(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(ae,ae):(A.status="pending",A.then(function(B){A.status==="pending"&&(A.status="fulfilled",A.value=B)},function(B){A.status==="pending"&&(A.status="rejected",A.reason=B)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function ue(A,B,se,de,W){var he=typeof A;(he==="undefined"||he==="boolean")&&(A=null);var Ee=!1;if(A===null)Ee=!0;else switch(he){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(A.$$typeof){case s:case e:Ee=!0;break;case g:return Ee=A._init,ue(Ee(A._payload),B,se,de,W)}}if(Ee)return W=W(A),Ee=de===""?"."+oe(A,0):de,U(W)?(se="",Ee!=null&&(se=Ee.replace(G,"$&/")+"/"),ue(W,B,se,"",function(at){return at})):W!=null&&(D(W)&&(W=j(W,se+(W.key==null||A&&A.key===W.key?"":(""+W.key).replace(G,"$&/")+"/")+Ee)),B.push(W)),1;Ee=0;var Ae=de===""?".":de+":";if(U(A))for(var we=0;we<A.length;we++)de=A[we],he=Ae+oe(de,we),Ee+=ue(de,B,se,he,W);else if(we=x(A),typeof we=="function")for(A=we.call(A),we=0;!(de=A.next()).done;)de=de.value,he=Ae+oe(de,we++),Ee+=ue(de,B,se,he,W);else if(he==="object"){if(typeof A.then=="function")return ue(xe(A),B,se,de,W);throw B=String(A),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function P(A,B,se){if(A==null)return A;var de=[],W=0;return ue(A,de,"","",function(he){return B.call(se,he,W++)}),de}function q(A){if(A._status===-1){var B=A._result;B=B(),B.then(function(se){(A._status===0||A._status===-1)&&(A._status=1,A._result=se)},function(se){(A._status===0||A._status===-1)&&(A._status=2,A._result=se)}),A._status===-1&&(A._status=0,A._result=B)}if(A._status===1)return A._result.default;throw A._result}var Y=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function Me(){}return lt.Children={map:P,forEach:function(A,B,se){P(A,function(){B.apply(this,arguments)},se)},count:function(A){var B=0;return P(A,function(){B++}),B},toArray:function(A){return P(A,function(B){return B})||[]},only:function(A){if(!D(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},lt.Component=y,lt.Fragment=i,lt.Profiler=l,lt.PureComponent=O,lt.StrictMode=r,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,lt.__COMPILER_RUNTIME={__proto__:null,c:function(A){return H.H.useMemoCache(A)}},lt.cache=function(A){return function(){return A.apply(null,arguments)}},lt.cloneElement=function(A,B,se){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var de=M({},A.props),W=A.key,he=void 0;if(B!=null)for(Ee in B.ref!==void 0&&(he=void 0),B.key!==void 0&&(W=""+B.key),B)!k.call(B,Ee)||Ee==="key"||Ee==="__self"||Ee==="__source"||Ee==="ref"&&B.ref===void 0||(de[Ee]=B[Ee]);var Ee=arguments.length-2;if(Ee===1)de.children=se;else if(1<Ee){for(var Ae=Array(Ee),we=0;we<Ee;we++)Ae[we]=arguments[we+2];de.children=Ae}return z(A.type,W,void 0,void 0,he,de)},lt.createContext=function(A){return A={$$typeof:f,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:u,_context:A},A},lt.createElement=function(A,B,se){var de,W={},he=null;if(B!=null)for(de in B.key!==void 0&&(he=""+B.key),B)k.call(B,de)&&de!=="key"&&de!=="__self"&&de!=="__source"&&(W[de]=B[de]);var Ee=arguments.length-2;if(Ee===1)W.children=se;else if(1<Ee){for(var Ae=Array(Ee),we=0;we<Ee;we++)Ae[we]=arguments[we+2];W.children=Ae}if(A&&A.defaultProps)for(de in Ee=A.defaultProps,Ee)W[de]===void 0&&(W[de]=Ee[de]);return z(A,he,void 0,void 0,null,W)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(A){return{$$typeof:h,render:A}},lt.isValidElement=D,lt.lazy=function(A){return{$$typeof:g,_payload:{_status:-1,_result:A},_init:q}},lt.memo=function(A,B){return{$$typeof:p,type:A,compare:B===void 0?null:B}},lt.startTransition=function(A){var B=H.T,se={};H.T=se;try{var de=A(),W=H.S;W!==null&&W(se,de),typeof de=="object"&&de!==null&&typeof de.then=="function"&&de.then(Me,Y)}catch(he){Y(he)}finally{H.T=B}},lt.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},lt.use=function(A){return H.H.use(A)},lt.useActionState=function(A,B,se){return H.H.useActionState(A,B,se)},lt.useCallback=function(A,B){return H.H.useCallback(A,B)},lt.useContext=function(A){return H.H.useContext(A)},lt.useDebugValue=function(){},lt.useDeferredValue=function(A,B){return H.H.useDeferredValue(A,B)},lt.useEffect=function(A,B,se){var de=H.H;if(typeof se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return de.useEffect(A,B)},lt.useId=function(){return H.H.useId()},lt.useImperativeHandle=function(A,B,se){return H.H.useImperativeHandle(A,B,se)},lt.useInsertionEffect=function(A,B){return H.H.useInsertionEffect(A,B)},lt.useLayoutEffect=function(A,B){return H.H.useLayoutEffect(A,B)},lt.useMemo=function(A,B){return H.H.useMemo(A,B)},lt.useOptimistic=function(A,B){return H.H.useOptimistic(A,B)},lt.useReducer=function(A,B,se){return H.H.useReducer(A,B,se)},lt.useRef=function(A){return H.H.useRef(A)},lt.useState=function(A){return H.H.useState(A)},lt.useSyncExternalStore=function(A,B,se){return H.H.useSyncExternalStore(A,B,se)},lt.useTransition=function(){return H.H.useTransition()},lt.version="19.1.1",lt}var L_;function Ih(){return L_||(L_=1,ad.exports=Qy()),ad.exports}var fe=Ih();const tn=Zv(fe);var rd={exports:{}},Oo={},sd={exports:{}},od={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function Jy(){return N_||(N_=1,function(s){function e(P,q){var Y=P.length;P.push(q);e:for(;0<Y;){var Me=Y-1>>>1,A=P[Me];if(0<l(A,q))P[Me]=q,P[Y]=A,Y=Me;else break e}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var q=P[0],Y=P.pop();if(Y!==q){P[0]=Y;e:for(var Me=0,A=P.length,B=A>>>1;Me<B;){var se=2*(Me+1)-1,de=P[se],W=se+1,he=P[W];if(0>l(de,Y))W<A&&0>l(he,de)?(P[Me]=he,P[W]=Y,Me=W):(P[Me]=de,P[se]=Y,Me=se);else if(W<A&&0>l(he,Y))P[Me]=he,P[W]=Y,Me=W;else break e}}return q}function l(P,q){var Y=P.sortIndex-q.sortIndex;return Y!==0?Y:P.id-q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,v=null,x=3,E=!1,M=!1,R=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function U(P){for(var q=i(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=P)r(p),q.sortIndex=q.expirationTime,e(m,q);else break;q=i(p)}}function H(P){if(R=!1,U(P),!M)if(i(m)!==null)M=!0,k||(k=!0,oe());else{var q=i(p);q!==null&&ue(H,q.startTime-P)}}var k=!1,z=-1,j=5,D=-1;function w(){return y?!0:!(s.unstable_now()-D<j)}function G(){if(y=!1,k){var P=s.unstable_now();D=P;var q=!0;try{e:{M=!1,R&&(R=!1,O(z),z=-1),E=!0;var Y=x;try{t:{for(U(P),v=i(m);v!==null&&!(v.expirationTime>P&&w());){var Me=v.callback;if(typeof Me=="function"){v.callback=null,x=v.priorityLevel;var A=Me(v.expirationTime<=P);if(P=s.unstable_now(),typeof A=="function"){v.callback=A,U(P),q=!0;break t}v===i(m)&&r(m),U(P)}else r(m);v=i(m)}if(v!==null)q=!0;else{var B=i(p);B!==null&&ue(H,B.startTime-P),q=!1}}break e}finally{v=null,x=Y,E=!1}q=void 0}}finally{q?oe():k=!1}}}var oe;if(typeof L=="function")oe=function(){L(G)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,xe=ae.port2;ae.port1.onmessage=G,oe=function(){xe.postMessage(null)}}else oe=function(){_(G,0)};function ue(P,q){z=_(function(){P(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(P){switch(x){case 1:case 2:case 3:var q=3;break;default:q=x}var Y=x;x=q;try{return P()}finally{x=Y}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(P,q){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Y=x;x=P;try{return q()}finally{x=Y}},s.unstable_scheduleCallback=function(P,q,Y){var Me=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Me+Y:Me):Y=Me,P){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=Y+A,P={id:g++,callback:q,priorityLevel:P,startTime:Y,expirationTime:A,sortIndex:-1},Y>Me?(P.sortIndex=Y,e(p,P),i(m)===null&&P===i(p)&&(R?(O(z),z=-1):R=!0,ue(H,Y-Me))):(P.sortIndex=A,e(m,P),M||E||(M=!0,k||(k=!0,oe()))),P},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(P){var q=x;return function(){var Y=x;x=q;try{return P.apply(this,arguments)}finally{x=Y}}}}(od)),od}var O_;function $y(){return O_||(O_=1,sd.exports=Jy()),sd.exports}var ld={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_;function eS(){if(P_)return Ln;P_=1;var s=Ih();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},Ln.flushSync=function(m){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=g,r.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:E}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Ln.requestFormReset=function(m){r.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Ln.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ln.version="19.1.1",Ln}var I_;function tS(){if(I_)return ld.exports;I_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ld.exports=eS(),ld.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function nS(){if(B_)return Oo;B_=1;var s=$y(),e=Ih(),i=tS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var d=c.alternate;if(d===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===a)return h(c),t;if(d===o)return h(c),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=d;else{for(var S=!1,T=c.child;T;){if(T===a){S=!0,a=c,o=d;break}if(T===o){S=!0,o=c,a=d;break}T=T.sibling}if(!S){for(T=d.child;T;){if(T===a){S=!0,a=d,o=c;break}if(T===o){S=!0,o=d,a=c;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function oe(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Symbol.for("react.client.reference");function xe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ae?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case y:return"Profiler";case R:return"StrictMode";case H:return"Suspense";case k:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case L:return(t.displayName||"Context")+".Provider";case O:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:xe(t.type)||"Memo";case j:n=t._payload,t=t._init;try{return xe(t(n))}catch{}}return null}var ue=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Me=[],A=-1;function B(t){return{current:t}}function se(t){0>A||(t.current=Me[A],Me[A]=null,A--)}function de(t,n){A++,Me[A]=t.current,t.current=n}var W=B(null),he=B(null),Ee=B(null),Ae=B(null);function we(t,n){switch(de(Ee,n),de(he,t),de(W,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?i_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=i_(n),t=a_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}se(W),de(W,t)}function at(){se(W),se(he),se(Ee)}function Xe(t){t.memoizedState!==null&&de(Ae,t);var n=W.current,a=a_(n,t.type);n!==a&&(de(he,t),de(W,a))}function et(t){he.current===t&&(se(W),se(he)),Ae.current===t&&(se(Ae),Co._currentValue=Y)}var bt=Object.prototype.hasOwnProperty,ht=s.unstable_scheduleCallback,F=s.unstable_cancelCallback,bn=s.unstable_shouldYield,Mt=s.unstable_requestPaint,gt=s.unstable_now,ke=s.unstable_getCurrentPriorityLevel,xt=s.unstable_ImmediatePriority,Ke=s.unstable_UserBlockingPriority,ot=s.unstable_NormalPriority,Jt=s.unstable_LowPriority,N=s.unstable_IdlePriority,b=s.log,ee=s.unstable_setDisableYieldValue,ge=null,ve=null;function ce(t){if(typeof b=="function"&&ee(t),ve&&typeof ve.setStrictMode=="function")try{ve.setStrictMode(ge,t)}catch{}}var Ie=Math.clz32?Math.clz32:We,Le=Math.log,Ve=Math.LN2;function We(t){return t>>>=0,t===0?32:31-(Le(t)/Ve|0)|0}var be=256,Be=4194304;function je(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ze(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,d=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~d,o!==0?c=je(o):(S&=T,S!==0?c=je(S):a||(a=T&~t,a!==0&&(c=je(a))))):(T=o&~d,T!==0?c=je(T):S!==0?c=je(S):a||(a=o&~t,a!==0&&(c=je(a)))),c===0?0:n!==0&&n!==c&&(n&d)===0&&(d=c&-c,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:c}function De(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function st(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var t=be;return be<<=1,(be&4194048)===0&&(be=256),t}function Ne(){var t=Be;return Be<<=1,(Be&62914560)===0&&(Be=4194304),t}function Te(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ze(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ce(t,n,a,o,c,d){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,I=t.expirationTimes,$=t.hiddenUpdates;for(a=S&~a;0<a;){var me=31-Ie(a),ye=1<<me;T[me]=0,I[me]=-1;var te=$[me];if(te!==null)for($[me]=null,me=0;me<te.length;me++){var ne=te[me];ne!==null&&(ne.lane&=-536870913)}a&=~ye}o!==0&&Se(t,o,0),d!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=d&~(S&~n))}function Se(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ie(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function He(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ie(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function rt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ut(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Tt(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:M_(t.type))}function Wn(t,n){var a=q.p;try{return q.p=t,n()}finally{q.p=a}}var _n=Math.random().toString(36).slice(2),fn="__reactFiber$"+_n,Tn="__reactProps$"+_n,Bn="__reactContainer$"+_n,Ja="__reactEvents$"+_n,el="__reactListeners$"+_n,tl="__reactHandles$"+_n,$a="__reactResources$"+_n,ma="__reactMarker$"+_n;function ga(t){delete t[fn],delete t[Tn],delete t[Ja],delete t[el],delete t[tl]}function Oi(t){var n=t[fn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Bn]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=l_(t);t!==null;){if(a=t[fn])return a;t=l_(t)}return n}t=a,a=t.parentNode}return null}function Pi(t){if(t=t[fn]||t[Bn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function er(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function _a(t){var n=t[$a];return n||(n=t[$a]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function sn(t){t[ma]=!0}var nl=new Set,il={};function Ii(t,n){C(t,n),C(t+"Capture",n)}function C(t,n){for(il[t]=n,t=0;t<n.length;t++)nl.add(n[t])}var K=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},re={};function Q(t){return bt.call(re,t)?!0:bt.call(ie,t)?!1:K.test(t)?re[t]=!0:(ie[t]=!0,!1)}function Re(t,n,a){if(Q(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ue(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Pe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var Fe,nt;function Je(t){if(Fe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Fe=n&&n[1]||"",nt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fe+t+nt}var qe=!1;function ct(t,n){if(!t||qe)return"";qe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(ne){var te=ne}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(ne){te=ne}t.call(ye.prototype)}}else{try{throw Error()}catch(ne){te=ne}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(ne){if(ne&&te&&typeof ne.stack=="string")return[ne.stack,te.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],T=d[1];if(S&&T){var I=S.split(`
`),$=T.split(`
`);for(c=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===I.length||c===$.length)for(o=I.length-1,c=$.length-1;1<=o&&0<=c&&I[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(I[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||I[o]!==$[c]){var me=`
`+I[o].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=o&&0<=c);break}}}finally{qe=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Je(a):""}function wt(t){switch(t.tag){case 26:case 27:case 5:return Je(t.type);case 16:return Je("Lazy");case 13:return Je("Suspense");case 19:return Je("SuspenseList");case 0:case 15:return ct(t.type,!1);case 11:return ct(t.type.render,!1);case 1:return ct(t.type,!0);case 31:return Je("Activity");default:return""}}function Wt(t){try{var n="";do n+=wt(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function pt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Dt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(t){var n=Dt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,d=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){o=""+S,d.call(this,S)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ot(t){t._valueTracker||(t._valueTracker=Qe(t))}function yt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Dt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function vn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var va=/[\n"\\]/g;function kt(t){return t.replace(va,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bi(t,n,a,o,c,d,S,T){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+pt(n)):t.value!==""+pt(n)&&(t.value=""+pt(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?Dn(t,S,pt(n)):a!=null?Dn(t,S,pt(a)):o!=null&&t.removeAttribute("value"),c==null&&d!=null&&(t.defaultChecked=!!d),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+pt(T):t.removeAttribute("name")}function Gt(t,n,a,o,c,d,S,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+pt(a):"",n=n!=null?""+pt(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S)}function Dn(t,n,a){n==="number"&&vn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function dn(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+pt(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function xn(t,n,a){if(n!=null&&(n=""+pt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+pt(a):""}function An(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ue(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=pt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function Ei(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ip(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||zi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function ap(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&ip(t,c,o)}else for(var d in n)n.hasOwnProperty(d)&&ip(t,d,n[d])}function tc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Y0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),j0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function al(t){return j0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var nc=null;function ic(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pr=null,Ir=null;function rp(t){var n=Pi(t);if(n&&(t=n.stateNode)){var a=t[Tn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Bi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+kt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[Tn]||null;if(!c)throw Error(r(90));Bi(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&yt(o)}break e;case"textarea":xn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&dn(t,!!a.multiple,n,!1)}}}var ac=!1;function sp(t,n,a){if(ac)return t(n,a);ac=!0;try{var o=t(n);return o}finally{if(ac=!1,(Pr!==null||Ir!==null)&&(kl(),Pr&&(n=Pr,t=Ir,Ir=Pr=null,rp(n),t)))for(n=0;n<t.length;n++)rp(t[n])}}function Hs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Tn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rc=!1;if(Fi)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){rc=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{rc=!1}var xa=null,sc=null,rl=null;function op(){if(rl)return rl;var t,n=sc,a=n.length,o,c="value"in xa?xa.value:xa.textContent,d=c.length;for(t=0;t<a&&n[t]===c[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===c[d-o];o++);return rl=c.slice(t,1<o?1-o:void 0)}function sl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ol(){return!0}function lp(){return!1}function zn(t){function n(a,o,c,d,S){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ol:lp,this.isPropagationStopped=lp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),n}var tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=zn(tr),Vs=g({},tr,{view:0,detail:0}),Z0=zn(Vs),oc,lc,ks,ul=g({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ks&&(ks&&t.type==="mousemove"?(oc=t.screenX-ks.screenX,lc=t.screenY-ks.screenY):lc=oc=0,ks=t),oc)},movementY:function(t){return"movementY"in t?t.movementY:lc}}),up=zn(ul),K0=g({},ul,{dataTransfer:0}),Q0=zn(K0),J0=g({},Vs,{relatedTarget:0}),uc=zn(J0),$0=g({},tr,{animationName:0,elapsedTime:0,pseudoElement:0}),ex=zn($0),tx=g({},tr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nx=zn(tx),ix=g({},tr,{data:0}),cp=zn(ix),ax={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ox(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=sx[t])?!!n[t]:!1}function cc(){return ox}var lx=g({},Vs,{key:function(t){if(t.key){var n=ax[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cc,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ux=zn(lx),cx=g({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fp=zn(cx),fx=g({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cc}),dx=zn(fx),hx=g({},tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),px=zn(hx),mx=g({},ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gx=zn(mx),_x=g({},tr,{newState:0,oldState:0}),vx=zn(_x),xx=[9,13,27,32],fc=Fi&&"CompositionEvent"in window,Xs=null;Fi&&"documentMode"in document&&(Xs=document.documentMode);var yx=Fi&&"TextEvent"in window&&!Xs,dp=Fi&&(!fc||Xs&&8<Xs&&11>=Xs),hp=" ",pp=!1;function mp(t,n){switch(t){case"keyup":return xx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Br=!1;function Sx(t,n){switch(t){case"compositionend":return gp(n);case"keypress":return n.which!==32?null:(pp=!0,hp);case"textInput":return t=n.data,t===hp&&pp?null:t;default:return null}}function Ex(t,n){if(Br)return t==="compositionend"||!fc&&mp(t,n)?(t=op(),rl=sc=xa=null,Br=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return dp&&n.locale!=="ko"?null:n.data;default:return null}}var Mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Mx[t.type]:n==="textarea"}function vp(t,n,a,o){Pr?Ir?Ir.push(o):Ir=[o]:Pr=o,n=Zl(n,"onChange"),0<n.length&&(a=new ll("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Ws=null,qs=null;function bx(t){Jg(t,0)}function cl(t){var n=er(t);if(yt(n))return t}function xp(t,n){if(t==="change")return n}var yp=!1;if(Fi){var dc;if(Fi){var hc="oninput"in document;if(!hc){var Sp=document.createElement("div");Sp.setAttribute("oninput","return;"),hc=typeof Sp.oninput=="function"}dc=hc}else dc=!1;yp=dc&&(!document.documentMode||9<document.documentMode)}function Ep(){Ws&&(Ws.detachEvent("onpropertychange",Mp),qs=Ws=null)}function Mp(t){if(t.propertyName==="value"&&cl(qs)){var n=[];vp(n,qs,t,ic(t)),sp(bx,n)}}function Tx(t,n,a){t==="focusin"?(Ep(),Ws=n,qs=a,Ws.attachEvent("onpropertychange",Mp)):t==="focusout"&&Ep()}function Ax(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cl(qs)}function Rx(t,n){if(t==="click")return cl(n)}function Cx(t,n){if(t==="input"||t==="change")return cl(n)}function wx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var qn=typeof Object.is=="function"?Object.is:wx;function Ys(t,n){if(qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!bt.call(n,c)||!qn(t[c],n[c]))return!1}return!0}function bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tp(t,n){var a=bp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=bp(a)}}function Ap(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ap(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Rp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=vn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=vn(t.document)}return n}function pc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Dx=Fi&&"documentMode"in document&&11>=document.documentMode,zr=null,mc=null,js=null,gc=!1;function Cp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gc||zr==null||zr!==vn(o)||(o=zr,"selectionStart"in o&&pc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),js&&Ys(js,o)||(js=o,o=Zl(mc,"onSelect"),0<o.length&&(n=new ll("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=zr)))}function nr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Fr={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionrun:nr("Transition","TransitionRun"),transitionstart:nr("Transition","TransitionStart"),transitioncancel:nr("Transition","TransitionCancel"),transitionend:nr("Transition","TransitionEnd")},_c={},wp={};Fi&&(wp=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function ir(t){if(_c[t])return _c[t];if(!Fr[t])return t;var n=Fr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in wp)return _c[t]=n[a];return t}var Dp=ir("animationend"),Up=ir("animationiteration"),Lp=ir("animationstart"),Ux=ir("transitionrun"),Lx=ir("transitionstart"),Nx=ir("transitioncancel"),Np=ir("transitionend"),Op=new Map,vc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vc.push("scrollEnd");function hi(t,n){Op.set(t,n),Ii(n,[t])}var Pp=new WeakMap;function ii(t,n){if(typeof t=="object"&&t!==null){var a=Pp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Wt(n)},Pp.set(t,n),n)}return{value:t,source:n,stack:Wt(n)}}var ai=[],Hr=0,xc=0;function fl(){for(var t=Hr,n=xc=Hr=0;n<t;){var a=ai[n];ai[n++]=null;var o=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var d=ai[n];if(ai[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}d!==0&&Ip(a,c,d)}}function dl(t,n,a,o){ai[Hr++]=t,ai[Hr++]=n,ai[Hr++]=a,ai[Hr++]=o,xc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function yc(t,n,a,o){return dl(t,n,a,o),hl(t)}function Gr(t,n){return dl(t,null,null,n),hl(t)}function Ip(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(c=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,c&&n!==null&&(c=31-Ie(a),t=d.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),d):null}function hl(t){if(50<yo)throw yo=0,Rf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Vr={};function Ox(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,n,a,o){return new Ox(t,n,a,o)}function Sc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hi(t,n){var a=t.alternate;return a===null?(a=Yn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Bp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function pl(t,n,a,o,c,d){var S=0;if(o=t,typeof t=="function")Sc(t)&&(S=1);else if(typeof t=="string")S=Iy(t,a,W.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=Yn(31,a,n,c),t.elementType=D,t.lanes=d,t;case M:return ar(a.children,c,d,n);case R:S=8,c|=24;break;case y:return t=Yn(12,a,n,c|2),t.elementType=y,t.lanes=d,t;case H:return t=Yn(13,a,n,c),t.elementType=H,t.lanes=d,t;case k:return t=Yn(19,a,n,c),t.elementType=k,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case L:S=10;break e;case O:S=9;break e;case U:S=11;break e;case z:S=14;break e;case j:S=16,o=null;break e}S=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Yn(S,a,n,c),n.elementType=t,n.type=o,n.lanes=d,n}function ar(t,n,a,o){return t=Yn(7,t,o,n),t.lanes=a,t}function Ec(t,n,a){return t=Yn(6,t,null,n),t.lanes=a,t}function Mc(t,n,a){return n=Yn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var kr=[],Xr=0,ml=null,gl=0,ri=[],si=0,rr=null,Gi=1,Vi="";function sr(t,n){kr[Xr++]=gl,kr[Xr++]=ml,ml=t,gl=n}function zp(t,n,a){ri[si++]=Gi,ri[si++]=Vi,ri[si++]=rr,rr=t;var o=Gi;t=Vi;var c=32-Ie(o)-1;o&=~(1<<c),a+=1;var d=32-Ie(n)+c;if(30<d){var S=c-c%5;d=(o&(1<<S)-1).toString(32),o>>=S,c-=S,Gi=1<<32-Ie(n)+c|a<<c|o,Vi=d+t}else Gi=1<<d|a<<c|o,Vi=t}function bc(t){t.return!==null&&(sr(t,1),zp(t,1,0))}function Tc(t){for(;t===ml;)ml=kr[--Xr],kr[Xr]=null,gl=kr[--Xr],kr[Xr]=null;for(;t===rr;)rr=ri[--si],ri[si]=null,Vi=ri[--si],ri[si]=null,Gi=ri[--si],ri[si]=null}var Pn=null,Kt=null,Ct=!1,or=null,Mi=!1,Ac=Error(r(519));function lr(t){var n=Error(r(418,""));throw Qs(ii(n,t)),Ac}function Fp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[fn]=t,n[Tn]=o,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<Eo.length;a++)vt(Eo[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),Gt(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Ot(n);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),An(n,o.value,o.defaultValue,o.children),Ot(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||n_(n.textContent,a)?(o.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),o.onScroll!=null&&vt("scroll",n),o.onScrollEnd!=null&&vt("scrollend",n),o.onClick!=null&&(n.onclick=Kl),n=!0):n=!1,n||lr(t)}function Hp(t){for(Pn=t.return;Pn;)switch(Pn.tag){case 5:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Pn=Pn.return}}function Zs(t){if(t!==Pn)return!1;if(!Ct)return Hp(t),Ct=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||kf(t.type,t.memoizedProps)),a=!a),a&&Kt&&lr(t),Hp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Kt=mi(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Kt=null}}else n===27?(n=Kt,Pa(t.type)?(t=Yf,Yf=null,Kt=t):Kt=n):Kt=Pn?mi(t.stateNode.nextSibling):null;return!0}function Ks(){Kt=Pn=null,Ct=!1}function Gp(){var t=or;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),or=null),t}function Qs(t){or===null?or=[t]:or.push(t)}var Rc=B(null),ur=null,ki=null;function ya(t,n,a){de(Rc,n._currentValue),n._currentValue=a}function Xi(t){t._currentValue=Rc.current,se(Rc)}function Cc(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function wc(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var d=c.dependencies;if(d!==null){var S=c.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=c;for(var I=0;I<n.length;I++)if(T.context===n[I]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Cc(d.return,a,t),o||(S=null);break e}d=T.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,d=S.alternate,d!==null&&(d.lanes|=a),Cc(S,a,t),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===t){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Js(t,n,a,o){t=null;for(var c=n,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=c.type;qn(c.pendingProps.value,S.value)||(t!==null?t.push(T):t=[T])}}else if(c===Ae.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Co):t=[Co])}c=c.return}t!==null&&wc(n,t,a,o),n.flags|=262144}function _l(t){for(t=t.firstContext;t!==null;){if(!qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function cr(t){ur=t,ki=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Un(t){return Vp(ur,t)}function vl(t,n){return ur===null&&cr(t),Vp(t,n)}function Vp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(t===null)throw Error(r(308));ki=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ki=ki.next=n;return a}var Px=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Ix=s.unstable_scheduleCallback,Bx=s.unstable_NormalPriority,hn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Dc(){return{controller:new Px,data:new Map,refCount:0}}function $s(t){t.refCount--,t.refCount===0&&Ix(Bx,function(){t.controller.abort()})}var eo=null,Uc=0,Wr=0,qr=null;function zx(t,n){if(eo===null){var a=eo=[];Uc=0,Wr=Of(),qr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Uc++,n.then(kp,kp),n}function kp(){if(--Uc===0&&eo!==null){qr!==null&&(qr.status="fulfilled");var t=eo;eo=null,Wr=0,qr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Fx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Xp=P.S;P.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&zx(t,n),Xp!==null&&Xp(t,n)};var fr=B(null);function Lc(){var t=fr.current;return t!==null?t:Xt.pooledCache}function xl(t,n){n===null?de(fr,fr.current):de(fr,n.pool)}function Wp(){var t=Lc();return t===null?null:{parent:hn._currentValue,pool:t}}var to=Error(r(460)),qp=Error(r(474)),yl=Error(r(542)),Nc={then:function(){}};function Yp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Sl(){}function jp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Sl,Sl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Kp(t),t;default:if(typeof n.status=="string")n.then(Sl,Sl);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Kp(t),t}throw no=n,to}}var no=null;function Zp(){if(no===null)throw Error(r(459));var t=no;return no=null,t}function Kp(t){if(t===to||t===yl)throw Error(r(483))}var Sa=!1;function Oc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ea(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ma(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Lt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=hl(t),Ip(t,null,a),n}return dl(t,o,n,a),hl(t)}function io(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,He(t,a)}}function Ic(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?c=d=S:d=d.next=S,a=a.next}while(a!==null);d===null?c=d=n:d=d.next=n}else c=d=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Bc=!1;function ao(){if(Bc){var t=qr;if(t!==null)throw t}}function ro(t,n,a,o){Bc=!1;var c=t.updateQueue;Sa=!1;var d=c.firstBaseUpdate,S=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var I=T,$=I.next;I.next=null,S===null?d=$:S.next=$,S=I;var me=t.alternate;me!==null&&(me=me.updateQueue,T=me.lastBaseUpdate,T!==S&&(T===null?me.firstBaseUpdate=$:T.next=$,me.lastBaseUpdate=I))}if(d!==null){var ye=c.baseState;S=0,me=$=I=null,T=d;do{var te=T.lane&-536870913,ne=te!==T.lane;if(ne?(Et&te)===te:(o&te)===te){te!==0&&te===Wr&&(Bc=!0),me!==null&&(me=me.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var it=t,$e=T;te=n;var Bt=a;switch($e.tag){case 1:if(it=$e.payload,typeof it=="function"){ye=it.call(Bt,ye,te);break e}ye=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=$e.payload,te=typeof it=="function"?it.call(Bt,ye,te):it,te==null)break e;ye=g({},ye,te);break e;case 2:Sa=!0}}te=T.callback,te!==null&&(t.flags|=64,ne&&(t.flags|=8192),ne=c.callbacks,ne===null?c.callbacks=[te]:ne.push(te))}else ne={lane:te,tag:T.tag,payload:T.payload,callback:T.callback,next:null},me===null?($=me=ne,I=ye):me=me.next=ne,S|=te;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ne=T,T=ne.next,ne.next=null,c.lastBaseUpdate=ne,c.shared.pending=null}}while(!0);me===null&&(I=ye),c.baseState=I,c.firstBaseUpdate=$,c.lastBaseUpdate=me,d===null&&(c.shared.lanes=0),Ua|=S,t.lanes=S,t.memoizedState=ye}}function Qp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Jp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Qp(a[t],n)}var Yr=B(null),El=B(0);function $p(t,n){t=Qi,de(El,t),de(Yr,n),Qi=t|n.baseLanes}function zc(){de(El,Qi),de(Yr,Yr.current)}function Fc(){Qi=El.current,se(Yr),se(El)}var ba=0,dt=null,Pt=null,on=null,Ml=!1,jr=!1,dr=!1,bl=0,so=0,Zr=null,Hx=0;function $t(){throw Error(r(321))}function Hc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!qn(t[a],n[a]))return!1;return!0}function Gc(t,n,a,o,c,d){return ba=d,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Im:Bm,dr=!1,d=a(o,c),dr=!1,jr&&(d=tm(n,a,o,c)),em(t),d}function em(t){P.H=Dl;var n=Pt!==null&&Pt.next!==null;if(ba=0,on=Pt=dt=null,Ml=!1,so=0,Zr=null,n)throw Error(r(300));t===null||yn||(t=t.dependencies,t!==null&&_l(t)&&(yn=!0))}function tm(t,n,a,o){dt=t;var c=0;do{if(jr&&(Zr=null),so=0,jr=!1,25<=c)throw Error(r(301));if(c+=1,on=Pt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}P.H=Yx,d=n(a,o)}while(jr);return d}function Gx(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?oo(n):n,t=t.useState()[0],(Pt!==null?Pt.memoizedState:null)!==t&&(dt.flags|=1024),n}function Vc(){var t=bl!==0;return bl=0,t}function kc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Xc(t){if(Ml){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ml=!1}ba=0,on=Pt=dt=null,jr=!1,so=bl=0,Zr=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?dt.memoizedState=on=t:on=on.next=t,on}function ln(){if(Pt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var n=on===null?dt.memoizedState:on.next;if(n!==null)on=n,Pt=t;else{if(t===null)throw dt.alternate===null?Error(r(467)):Error(r(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},on===null?dt.memoizedState=on=t:on=on.next=t}return on}function Wc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(t){var n=so;return so+=1,Zr===null&&(Zr=[]),t=jp(Zr,t,n),n=dt,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Im:Bm),t}function Tl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return oo(t);if(t.$$typeof===L)return Un(t)}throw Error(r(438,String(t)))}function qc(t){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=dt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Wc(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=w;return n.index++,a}function Wi(t,n){return typeof n=="function"?n(t):n}function Al(t){var n=ln();return Yc(n,Pt,t)}function Yc(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=t.baseQueue,d=o.pending;if(d!==null){if(c!==null){var S=c.next;c.next=d.next,d.next=S}n.baseQueue=c=d,o.pending=null}if(d=t.baseState,c===null)t.memoizedState=d;else{n=c.next;var T=S=null,I=null,$=n,me=!1;do{var ye=$.lane&-536870913;if(ye!==$.lane?(Et&ye)===ye:(ba&ye)===ye){var te=$.revertLane;if(te===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ye===Wr&&(me=!0);else if((ba&te)===te){$=$.next,te===Wr&&(me=!0);continue}else ye={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(T=I=ye,S=d):I=I.next=ye,dt.lanes|=te,Ua|=te;ye=$.action,dr&&a(d,ye),d=$.hasEagerState?$.eagerState:a(d,ye)}else te={lane:ye,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(T=I=te,S=d):I=I.next=te,dt.lanes|=ye,Ua|=ye;$=$.next}while($!==null&&$!==n);if(I===null?S=d:I.next=T,!qn(d,t.memoizedState)&&(yn=!0,me&&(a=qr,a!==null)))throw a;t.memoizedState=d,t.baseState=S,t.baseQueue=I,o.lastRenderedState=d}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function jc(t){var n=ln(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,d=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do d=t(d,S.action),S=S.next;while(S!==c);qn(d,n.memoizedState)||(yn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function nm(t,n,a){var o=dt,c=ln(),d=Ct;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!qn((Pt||c).memoizedState,a);S&&(c.memoizedState=a,yn=!0),c=c.queue;var T=rm.bind(null,o,c,t);if(lo(2048,8,T,[t]),c.getSnapshot!==n||S||on!==null&&on.memoizedState.tag&1){if(o.flags|=2048,Kr(9,Rl(),am.bind(null,o,c,a,n),null),Xt===null)throw Error(r(349));d||(ba&124)!==0||im(o,n,a)}return a}function im(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=Wc(),dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function am(t,n,a,o){n.value=a,n.getSnapshot=o,sm(n)&&om(t)}function rm(t,n,a){return a(function(){sm(n)&&om(t)})}function sm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!qn(t,a)}catch{return!0}}function om(t){var n=Gr(t,2);n!==null&&Jn(n,t,2)}function Zc(t){var n=Fn();if(typeof t=="function"){var a=t;if(t=a(),dr){ce(!0);try{a()}finally{ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:t},n}function lm(t,n,a,o){return t.baseState=a,Yc(t,Pt,typeof o=="function"?o:Wi)}function Vx(t,n,a,o,c){if(wl(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};P.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,um(n,d)):(d.next=a.next,n.pending=a.next=d)}}function um(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var d=P.T,S={};P.T=S;try{var T=a(c,o),I=P.S;I!==null&&I(S,T),cm(t,n,T)}catch($){Kc(t,n,$)}finally{P.T=d}}else try{d=a(c,o),cm(t,n,d)}catch($){Kc(t,n,$)}}function cm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){fm(t,n,o)},function(o){return Kc(t,n,o)}):fm(t,n,a)}function fm(t,n,a){n.status="fulfilled",n.value=a,dm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,um(t,a)))}function Kc(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,dm(n),n=n.next;while(n!==o)}t.action=null}function dm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function hm(t,n){return n}function pm(t,n){if(Ct){var a=Xt.formState;if(a!==null){e:{var o=dt;if(Ct){if(Kt){t:{for(var c=Kt,d=Mi;c.nodeType!==8;){if(!d){c=null;break t}if(c=mi(c.nextSibling),c===null){c=null;break t}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){Kt=mi(c.nextSibling),o=c.data==="F!";break e}}lr(o)}o=!1}o&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hm,lastRenderedState:n},a.queue=o,a=Nm.bind(null,dt,o),o.dispatch=a,o=Zc(!1),d=tf.bind(null,dt,!1,o.queue),o=Fn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=Vx.bind(null,dt,c,d,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function mm(t){var n=ln();return gm(n,Pt,t)}function gm(t,n,a){if(n=Yc(t,n,hm)[0],t=Al(Wi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=oo(n)}catch(S){throw S===to?yl:S}else o=n;n=ln();var c=n.queue,d=c.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,Kr(9,Rl(),kx.bind(null,c,a),null)),[o,d,t]}function kx(t,n){t.action=n}function _m(t){var n=ln(),a=Pt;if(a!==null)return gm(n,a,t);ln(),n=n.memoizedState,a=ln();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Kr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=dt.updateQueue,n===null&&(n=Wc(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Rl(){return{destroy:void 0,resource:void 0}}function vm(){return ln().memoizedState}function Cl(t,n,a,o){var c=Fn();o=o===void 0?null:o,dt.flags|=t,c.memoizedState=Kr(1|n,Rl(),a,o)}function lo(t,n,a,o){var c=ln();o=o===void 0?null:o;var d=c.memoizedState.inst;Pt!==null&&o!==null&&Hc(o,Pt.memoizedState.deps)?c.memoizedState=Kr(n,d,a,o):(dt.flags|=t,c.memoizedState=Kr(1|n,d,a,o))}function xm(t,n){Cl(8390656,8,t,n)}function ym(t,n){lo(2048,8,t,n)}function Sm(t,n){return lo(4,2,t,n)}function Em(t,n){return lo(4,4,t,n)}function Mm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function bm(t,n,a){a=a!=null?a.concat([t]):null,lo(4,4,Mm.bind(null,n,t),a)}function Qc(){}function Tm(t,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Hc(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Am(t,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Hc(n,o[1]))return o[0];if(o=t(),dr){ce(!0);try{t()}finally{ce(!1)}}return a.memoizedState=[o,n],o}function Jc(t,n,a){return a===void 0||(ba&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=wg(),dt.lanes|=t,Ua|=t,a)}function Rm(t,n,a,o){return qn(a,n)?a:Yr.current!==null?(t=Jc(t,a,o),qn(t,n)||(yn=!0),t):(ba&42)===0?(yn=!0,t.memoizedState=a):(t=wg(),dt.lanes|=t,Ua|=t,n)}function Cm(t,n,a,o,c){var d=q.p;q.p=d!==0&&8>d?d:8;var S=P.T,T={};P.T=T,tf(t,!1,n,a);try{var I=c(),$=P.S;if($!==null&&$(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var me=Fx(I,o);uo(t,n,me,Qn(t))}else uo(t,n,o,Qn(t))}catch(ye){uo(t,n,{then:function(){},status:"rejected",reason:ye},Qn())}finally{q.p=d,P.T=S}}function Xx(){}function $c(t,n,a,o){if(t.tag!==5)throw Error(r(476));var c=wm(t).queue;Cm(t,c,n,Y,a===null?Xx:function(){return Dm(t),a(o)})}function wm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Dm(t){var n=wm(t).next.queue;uo(t,n,{},Qn())}function ef(){return Un(Co)}function Um(){return ln().memoizedState}function Lm(){return ln().memoizedState}function Wx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();t=Ea(a);var o=Ma(n,t,a);o!==null&&(Jn(o,n,a),io(o,n,a)),n={cache:Dc()},t.payload=n;return}n=n.return}}function qx(t,n,a){var o=Qn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},wl(t)?Om(n,a):(a=yc(t,n,a,o),a!==null&&(Jn(a,t,o),Pm(a,n,o)))}function Nm(t,n,a){var o=Qn();uo(t,n,a,o)}function uo(t,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(wl(t))Om(n,c);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,T=d(S,a);if(c.hasEagerState=!0,c.eagerState=T,qn(T,S))return dl(t,n,c,0),Xt===null&&fl(),!1}catch{}finally{}if(a=yc(t,n,c,o),a!==null)return Jn(a,t,o),Pm(a,n,o),!0}return!1}function tf(t,n,a,o){if(o={lane:2,revertLane:Of(),action:o,hasEagerState:!1,eagerState:null,next:null},wl(t)){if(n)throw Error(r(479))}else n=yc(t,a,o,2),n!==null&&Jn(n,t,2)}function wl(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function Om(t,n){jr=Ml=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Pm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,He(t,a)}}var Dl={readContext:Un,use:Tl,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t},Im={readContext:Un,use:Tl,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:Un,useEffect:xm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Cl(4194308,4,Mm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Cl(4194308,4,t,n)},useInsertionEffect:function(t,n){Cl(4,2,t,n)},useMemo:function(t,n){var a=Fn();n=n===void 0?null:n;var o=t();if(dr){ce(!0);try{t()}finally{ce(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Fn();if(a!==void 0){var c=a(n);if(dr){ce(!0);try{a(n)}finally{ce(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=qx.bind(null,dt,t),[o.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=Zc(t);var n=t.queue,a=Nm.bind(null,dt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Qc,useDeferredValue:function(t,n){var a=Fn();return Jc(a,t,n)},useTransition:function(){var t=Zc(!1);return t=Cm.bind(null,dt,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=dt,c=Fn();if(Ct){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xt===null)throw Error(r(349));(Et&124)!==0||im(o,n,a)}c.memoizedState=a;var d={value:a,getSnapshot:n};return c.queue=d,xm(rm.bind(null,o,d,t),[t]),o.flags|=2048,Kr(9,Rl(),am.bind(null,o,d,a,n),null),a},useId:function(){var t=Fn(),n=Xt.identifierPrefix;if(Ct){var a=Vi,o=Gi;a=(o&~(1<<32-Ie(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=bl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Hx++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:ef,useFormState:pm,useActionState:pm,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=tf.bind(null,dt,!0,a),a.dispatch=n,[t,n]},useMemoCache:qc,useCacheRefresh:function(){return Fn().memoizedState=Wx.bind(null,dt)}},Bm={readContext:Un,use:Tl,useCallback:Tm,useContext:Un,useEffect:ym,useImperativeHandle:bm,useInsertionEffect:Sm,useLayoutEffect:Em,useMemo:Am,useReducer:Al,useRef:vm,useState:function(){return Al(Wi)},useDebugValue:Qc,useDeferredValue:function(t,n){var a=ln();return Rm(a,Pt.memoizedState,t,n)},useTransition:function(){var t=Al(Wi)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:oo(t),n]},useSyncExternalStore:nm,useId:Um,useHostTransitionStatus:ef,useFormState:mm,useActionState:mm,useOptimistic:function(t,n){var a=ln();return lm(a,Pt,t,n)},useMemoCache:qc,useCacheRefresh:Lm},Yx={readContext:Un,use:Tl,useCallback:Tm,useContext:Un,useEffect:ym,useImperativeHandle:bm,useInsertionEffect:Sm,useLayoutEffect:Em,useMemo:Am,useReducer:jc,useRef:vm,useState:function(){return jc(Wi)},useDebugValue:Qc,useDeferredValue:function(t,n){var a=ln();return Pt===null?Jc(a,t,n):Rm(a,Pt.memoizedState,t,n)},useTransition:function(){var t=jc(Wi)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:oo(t),n]},useSyncExternalStore:nm,useId:Um,useHostTransitionStatus:ef,useFormState:_m,useActionState:_m,useOptimistic:function(t,n){var a=ln();return Pt!==null?lm(a,Pt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:qc,useCacheRefresh:Lm},Qr=null,co=0;function Ul(t){var n=co;return co+=1,Qr===null&&(Qr=[]),jp(Qr,t,n)}function fo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ll(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function zm(t){var n=t._init;return n(t._payload)}function Fm(t){function n(Z,V){if(t){var J=Z.deletions;J===null?(Z.deletions=[V],Z.flags|=16):J.push(V)}}function a(Z,V){if(!t)return null;for(;V!==null;)n(Z,V),V=V.sibling;return null}function o(Z){for(var V=new Map;Z!==null;)Z.key!==null?V.set(Z.key,Z):V.set(Z.index,Z),Z=Z.sibling;return V}function c(Z,V){return Z=Hi(Z,V),Z.index=0,Z.sibling=null,Z}function d(Z,V,J){return Z.index=J,t?(J=Z.alternate,J!==null?(J=J.index,J<V?(Z.flags|=67108866,V):J):(Z.flags|=67108866,V)):(Z.flags|=1048576,V)}function S(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function T(Z,V,J,_e){return V===null||V.tag!==6?(V=Ec(J,Z.mode,_e),V.return=Z,V):(V=c(V,J),V.return=Z,V)}function I(Z,V,J,_e){var Ge=J.type;return Ge===M?me(Z,V,J.props.children,_e,J.key):V!==null&&(V.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===j&&zm(Ge)===V.type)?(V=c(V,J.props),fo(V,J),V.return=Z,V):(V=pl(J.type,J.key,J.props,null,Z.mode,_e),fo(V,J),V.return=Z,V)}function $(Z,V,J,_e){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=Mc(J,Z.mode,_e),V.return=Z,V):(V=c(V,J.children||[]),V.return=Z,V)}function me(Z,V,J,_e,Ge){return V===null||V.tag!==7?(V=ar(J,Z.mode,_e,Ge),V.return=Z,V):(V=c(V,J),V.return=Z,V)}function ye(Z,V,J){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Ec(""+V,Z.mode,J),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return J=pl(V.type,V.key,V.props,null,Z.mode,J),fo(J,V),J.return=Z,J;case E:return V=Mc(V,Z.mode,J),V.return=Z,V;case j:var _e=V._init;return V=_e(V._payload),ye(Z,V,J)}if(ue(V)||oe(V))return V=ar(V,Z.mode,J,null),V.return=Z,V;if(typeof V.then=="function")return ye(Z,Ul(V),J);if(V.$$typeof===L)return ye(Z,vl(Z,V),J);Ll(Z,V)}return null}function te(Z,V,J,_e){var Ge=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ge!==null?null:T(Z,V,""+J,_e);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case x:return J.key===Ge?I(Z,V,J,_e):null;case E:return J.key===Ge?$(Z,V,J,_e):null;case j:return Ge=J._init,J=Ge(J._payload),te(Z,V,J,_e)}if(ue(J)||oe(J))return Ge!==null?null:me(Z,V,J,_e,null);if(typeof J.then=="function")return te(Z,V,Ul(J),_e);if(J.$$typeof===L)return te(Z,V,vl(Z,J),_e);Ll(Z,J)}return null}function ne(Z,V,J,_e,Ge){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return Z=Z.get(J)||null,T(V,Z,""+_e,Ge);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case x:return Z=Z.get(_e.key===null?J:_e.key)||null,I(V,Z,_e,Ge);case E:return Z=Z.get(_e.key===null?J:_e.key)||null,$(V,Z,_e,Ge);case j:var mt=_e._init;return _e=mt(_e._payload),ne(Z,V,J,_e,Ge)}if(ue(_e)||oe(_e))return Z=Z.get(J)||null,me(V,Z,_e,Ge,null);if(typeof _e.then=="function")return ne(Z,V,J,Ul(_e),Ge);if(_e.$$typeof===L)return ne(Z,V,J,vl(V,_e),Ge);Ll(V,_e)}return null}function it(Z,V,J,_e){for(var Ge=null,mt=null,Ye=V,tt=V=0,En=null;Ye!==null&&tt<J.length;tt++){Ye.index>tt?(En=Ye,Ye=null):En=Ye.sibling;var At=te(Z,Ye,J[tt],_e);if(At===null){Ye===null&&(Ye=En);break}t&&Ye&&At.alternate===null&&n(Z,Ye),V=d(At,V,tt),mt===null?Ge=At:mt.sibling=At,mt=At,Ye=En}if(tt===J.length)return a(Z,Ye),Ct&&sr(Z,tt),Ge;if(Ye===null){for(;tt<J.length;tt++)Ye=ye(Z,J[tt],_e),Ye!==null&&(V=d(Ye,V,tt),mt===null?Ge=Ye:mt.sibling=Ye,mt=Ye);return Ct&&sr(Z,tt),Ge}for(Ye=o(Ye);tt<J.length;tt++)En=ne(Ye,Z,tt,J[tt],_e),En!==null&&(t&&En.alternate!==null&&Ye.delete(En.key===null?tt:En.key),V=d(En,V,tt),mt===null?Ge=En:mt.sibling=En,mt=En);return t&&Ye.forEach(function(Ha){return n(Z,Ha)}),Ct&&sr(Z,tt),Ge}function $e(Z,V,J,_e){if(J==null)throw Error(r(151));for(var Ge=null,mt=null,Ye=V,tt=V=0,En=null,At=J.next();Ye!==null&&!At.done;tt++,At=J.next()){Ye.index>tt?(En=Ye,Ye=null):En=Ye.sibling;var Ha=te(Z,Ye,At.value,_e);if(Ha===null){Ye===null&&(Ye=En);break}t&&Ye&&Ha.alternate===null&&n(Z,Ye),V=d(Ha,V,tt),mt===null?Ge=Ha:mt.sibling=Ha,mt=Ha,Ye=En}if(At.done)return a(Z,Ye),Ct&&sr(Z,tt),Ge;if(Ye===null){for(;!At.done;tt++,At=J.next())At=ye(Z,At.value,_e),At!==null&&(V=d(At,V,tt),mt===null?Ge=At:mt.sibling=At,mt=At);return Ct&&sr(Z,tt),Ge}for(Ye=o(Ye);!At.done;tt++,At=J.next())At=ne(Ye,Z,tt,At.value,_e),At!==null&&(t&&At.alternate!==null&&Ye.delete(At.key===null?tt:At.key),V=d(At,V,tt),mt===null?Ge=At:mt.sibling=At,mt=At);return t&&Ye.forEach(function(jy){return n(Z,jy)}),Ct&&sr(Z,tt),Ge}function Bt(Z,V,J,_e){if(typeof J=="object"&&J!==null&&J.type===M&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case x:e:{for(var Ge=J.key;V!==null;){if(V.key===Ge){if(Ge=J.type,Ge===M){if(V.tag===7){a(Z,V.sibling),_e=c(V,J.props.children),_e.return=Z,Z=_e;break e}}else if(V.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===j&&zm(Ge)===V.type){a(Z,V.sibling),_e=c(V,J.props),fo(_e,J),_e.return=Z,Z=_e;break e}a(Z,V);break}else n(Z,V);V=V.sibling}J.type===M?(_e=ar(J.props.children,Z.mode,_e,J.key),_e.return=Z,Z=_e):(_e=pl(J.type,J.key,J.props,null,Z.mode,_e),fo(_e,J),_e.return=Z,Z=_e)}return S(Z);case E:e:{for(Ge=J.key;V!==null;){if(V.key===Ge)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){a(Z,V.sibling),_e=c(V,J.children||[]),_e.return=Z,Z=_e;break e}else{a(Z,V);break}else n(Z,V);V=V.sibling}_e=Mc(J,Z.mode,_e),_e.return=Z,Z=_e}return S(Z);case j:return Ge=J._init,J=Ge(J._payload),Bt(Z,V,J,_e)}if(ue(J))return it(Z,V,J,_e);if(oe(J)){if(Ge=oe(J),typeof Ge!="function")throw Error(r(150));return J=Ge.call(J),$e(Z,V,J,_e)}if(typeof J.then=="function")return Bt(Z,V,Ul(J),_e);if(J.$$typeof===L)return Bt(Z,V,vl(Z,J),_e);Ll(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,V!==null&&V.tag===6?(a(Z,V.sibling),_e=c(V,J),_e.return=Z,Z=_e):(a(Z,V),_e=Ec(J,Z.mode,_e),_e.return=Z,Z=_e),S(Z)):a(Z,V)}return function(Z,V,J,_e){try{co=0;var Ge=Bt(Z,V,J,_e);return Qr=null,Ge}catch(Ye){if(Ye===to||Ye===yl)throw Ye;var mt=Yn(29,Ye,null,Z.mode);return mt.lanes=_e,mt.return=Z,mt}finally{}}}var Jr=Fm(!0),Hm=Fm(!1),oi=B(null),bi=null;function Ta(t){var n=t.alternate;de(pn,pn.current&1),de(oi,t),bi===null&&(n===null||Yr.current!==null||n.memoizedState!==null)&&(bi=t)}function Gm(t){if(t.tag===22){if(de(pn,pn.current),de(oi,t),bi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(bi=t)}}else Aa()}function Aa(){de(pn,pn.current),de(oi,oi.current)}function qi(t){se(oi),bi===t&&(bi=null),se(pn)}var pn=B(0);function Nl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||qf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function nf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var af={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Qn(),c=Ea(o);c.payload=n,a!=null&&(c.callback=a),n=Ma(t,c,o),n!==null&&(Jn(n,t,o),io(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Qn(),c=Ea(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ma(t,c,o),n!==null&&(Jn(n,t,o),io(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Qn(),o=Ea(a);o.tag=2,n!=null&&(o.callback=n),n=Ma(t,o,a),n!==null&&(Jn(n,t,a),io(n,t,a))}};function Vm(t,n,a,o,c,d,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,S):n.prototype&&n.prototype.isPureReactComponent?!Ys(a,o)||!Ys(c,d):!0}function km(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&af.enqueueReplaceState(n,n.state,null)}function hr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var Ol=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Xm(t){Ol(t)}function Wm(t){console.error(t)}function qm(t){Ol(t)}function Pl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Ym(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function rf(t,n,a){return a=Ea(a),a.tag=3,a.payload={element:null},a.callback=function(){Pl(t,n)},a}function jm(t){return t=Ea(t),t.tag=3,t}function Zm(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var d=o.value;t.payload=function(){return c(d)},t.callback=function(){Ym(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){Ym(n,a,o),typeof c!="function"&&(La===null?La=new Set([this]):La.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function jx(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Js(n,a,c,!0),a=oi.current,a!==null){switch(a.tag){case 13:return bi===null?wf():a.alternate===null&&Qt===0&&(Qt=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Nc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Uf(t,o,c)),!1;case 22:return a.flags|=65536,o===Nc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Uf(t,o,c)),!1}throw Error(r(435,a.tag))}return Uf(t,o,c),wf(),!1}if(Ct)return n=oi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Ac&&(t=Error(r(422),{cause:o}),Qs(ii(t,a)))):(o!==Ac&&(n=Error(r(423),{cause:o}),Qs(ii(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=ii(o,a),c=rf(t.stateNode,o,c),Ic(t,c),Qt!==4&&(Qt=2)),!1;var d=Error(r(520),{cause:o});if(d=ii(d,a),xo===null?xo=[d]:xo.push(d),Qt!==4&&(Qt=2),n===null)return!0;o=ii(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=rf(a.stateNode,o,t),Ic(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(La===null||!La.has(d))))return a.flags|=65536,c&=-c,a.lanes|=c,c=jm(c),Zm(c,t,a,o),Ic(a,c),!1}a=a.return}while(a!==null);return!1}var Km=Error(r(461)),yn=!1;function Rn(t,n,a,o){n.child=t===null?Hm(n,null,a,o):Jr(n,t.child,a,o)}function Qm(t,n,a,o,c){a=a.render;var d=n.ref;if("ref"in o){var S={};for(var T in o)T!=="ref"&&(S[T]=o[T])}else S=o;return cr(n),o=Gc(t,n,a,S,d,c),T=Vc(),t!==null&&!yn?(kc(t,n,c),Yi(t,n,c)):(Ct&&T&&bc(n),n.flags|=1,Rn(t,n,o,c),n.child)}function Jm(t,n,a,o,c){if(t===null){var d=a.type;return typeof d=="function"&&!Sc(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,$m(t,n,d,o,c)):(t=pl(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!hf(t,c)){var S=d.memoizedProps;if(a=a.compare,a=a!==null?a:Ys,a(S,o)&&t.ref===n.ref)return Yi(t,n,c)}return n.flags|=1,t=Hi(d,o),t.ref=n.ref,t.return=n,n.child=t}function $m(t,n,a,o,c){if(t!==null){var d=t.memoizedProps;if(Ys(d,o)&&t.ref===n.ref)if(yn=!1,n.pendingProps=o=d,hf(t,c))(t.flags&131072)!==0&&(yn=!0);else return n.lanes=t.lanes,Yi(t,n,c)}return sf(t,n,a,o,c)}function eg(t,n,a){var o=n.pendingProps,c=o.children,d=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,t!==null){for(c=n.child=t.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return tg(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&xl(n,d!==null?d.cachePool:null),d!==null?$p(n,d):zc(),Gm(n);else return n.lanes=n.childLanes=536870912,tg(t,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(xl(n,d.cachePool),$p(n,d),Aa(),n.memoizedState=null):(t!==null&&xl(n,null),zc(),Aa());return Rn(t,n,c,a),n.child}function tg(t,n,a,o){var c=Lc();return c=c===null?null:{parent:hn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&xl(n,null),zc(),Gm(n),t!==null&&Js(t,n,o,!0),null}function Il(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function sf(t,n,a,o,c){return cr(n),a=Gc(t,n,a,o,void 0,c),o=Vc(),t!==null&&!yn?(kc(t,n,c),Yi(t,n,c)):(Ct&&o&&bc(n),n.flags|=1,Rn(t,n,a,c),n.child)}function ng(t,n,a,o,c,d){return cr(n),n.updateQueue=null,a=tm(n,o,a,c),em(t),o=Vc(),t!==null&&!yn?(kc(t,n,d),Yi(t,n,d)):(Ct&&o&&bc(n),n.flags|=1,Rn(t,n,a,d),n.child)}function ig(t,n,a,o,c){if(cr(n),n.stateNode===null){var d=Vr,S=a.contextType;typeof S=="object"&&S!==null&&(d=Un(S)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=af,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Oc(n),S=a.contextType,d.context=typeof S=="object"&&S!==null?Un(S):Vr,d.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(nf(n,a,S,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&af.enqueueReplaceState(d,d.state,null),ro(n,o,d,c),ao(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var T=n.memoizedProps,I=hr(a,T);d.props=I;var $=d.context,me=a.contextType;S=Vr,typeof me=="object"&&me!==null&&(S=Un(me));var ye=a.getDerivedStateFromProps;me=typeof ye=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,me||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||$!==S)&&km(n,d,o,S),Sa=!1;var te=n.memoizedState;d.state=te,ro(n,o,d,c),ao(),$=n.memoizedState,T||te!==$||Sa?(typeof ye=="function"&&(nf(n,a,ye,o),$=n.memoizedState),(I=Sa||Vm(n,a,I,o,te,$,S))?(me||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),d.props=o,d.state=$,d.context=S,o=I):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Pc(t,n),S=n.memoizedProps,me=hr(a,S),d.props=me,ye=n.pendingProps,te=d.context,$=a.contextType,I=Vr,typeof $=="object"&&$!==null&&(I=Un($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==ye||te!==I)&&km(n,d,o,I),Sa=!1,te=n.memoizedState,d.state=te,ro(n,o,d,c),ao();var ne=n.memoizedState;S!==ye||te!==ne||Sa||t!==null&&t.dependencies!==null&&_l(t.dependencies)?(typeof T=="function"&&(nf(n,a,T,o),ne=n.memoizedState),(me=Sa||Vm(n,a,me,o,te,ne,I)||t!==null&&t.dependencies!==null&&_l(t.dependencies))?($||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ne,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ne,I)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&te===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&te===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ne),d.props=o,d.state=ne,d.context=I,o=me):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&te===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&te===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Il(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Jr(n,t.child,null,c),n.child=Jr(n,null,a,c)):Rn(t,n,a,c),n.memoizedState=d.state,t=n.child):t=Yi(t,n,c),t}function ag(t,n,a,o){return Ks(),n.flags|=256,Rn(t,n,a,o),n.child}var of={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lf(t){return{baseLanes:t,cachePool:Wp()}}function uf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=li),t}function rg(t,n,a){var o=n.pendingProps,c=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ct){if(c?Ta(n):Aa(),Ct){var T=Kt,I;if(I=T){e:{for(I=T,T=Mi;I.nodeType!==8;){if(!T){T=null;break e}if(I=mi(I.nextSibling),I===null){T=null;break e}}T=I}T!==null?(n.memoizedState={dehydrated:T,treeContext:rr!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},I=Yn(18,null,null,0),I.stateNode=T,I.return=n,n.child=I,Pn=n,Kt=null,I=!0):I=!1}I||lr(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return qf(T)?n.lanes=32:n.lanes=536870912,null;qi(n)}return T=o.children,o=o.fallback,c?(Aa(),c=n.mode,T=Bl({mode:"hidden",children:T},c),o=ar(o,c,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,c=n.child,c.memoizedState=lf(a),c.childLanes=uf(t,S,a),n.memoizedState=of,o):(Ta(n),cf(n,T))}if(I=t.memoizedState,I!==null&&(T=I.dehydrated,T!==null)){if(d)n.flags&256?(Ta(n),n.flags&=-257,n=ff(t,n,a)):n.memoizedState!==null?(Aa(),n.child=t.child,n.flags|=128,n=null):(Aa(),c=o.fallback,T=n.mode,o=Bl({mode:"visible",children:o.children},T),c=ar(c,T,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Jr(n,t.child,null,a),o=n.child,o.memoizedState=lf(a),o.childLanes=uf(t,S,a),n.memoizedState=of,n=c);else if(Ta(n),qf(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var $=S.dgst;S=$,o=Error(r(419)),o.stack="",o.digest=S,Qs({value:o,source:null,stack:null}),n=ff(t,n,a)}else if(yn||Js(t,n,a,!1),S=(a&t.childLanes)!==0,yn||S){if(S=Xt,S!==null&&(o=a&-a,o=(o&42)!==0?1:rt(o),o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==I.retryLane))throw I.retryLane=o,Gr(t,o),Jn(S,t,o),Km;T.data==="$?"||wf(),n=ff(t,n,a)}else T.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,Kt=mi(T.nextSibling),Pn=n,Ct=!0,or=null,Mi=!1,t!==null&&(ri[si++]=Gi,ri[si++]=Vi,ri[si++]=rr,Gi=t.id,Vi=t.overflow,rr=n),n=cf(n,o.children),n.flags|=4096);return n}return c?(Aa(),c=o.fallback,T=n.mode,I=t.child,$=I.sibling,o=Hi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,$!==null?c=Hi($,c):(c=ar(c,T,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,T=t.child.memoizedState,T===null?T=lf(a):(I=T.cachePool,I!==null?($=hn._currentValue,I=I.parent!==$?{parent:$,pool:$}:I):I=Wp(),T={baseLanes:T.baseLanes|a,cachePool:I}),c.memoizedState=T,c.childLanes=uf(t,S,a),n.memoizedState=of,o):(Ta(n),a=t.child,t=a.sibling,a=Hi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function cf(t,n){return n=Bl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Bl(t,n){return t=Yn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function ff(t,n,a){return Jr(n,t.child,null,a),t=cf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function sg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Cc(t.return,n,a)}function df(t,n,a,o,c){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=c)}function og(t,n,a){var o=n.pendingProps,c=o.revealOrder,d=o.tail;if(Rn(t,n,o.children,a),o=pn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sg(t,a,n);else if(t.tag===19)sg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(de(pn,o),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Nl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),df(n,!1,c,a,d);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Nl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}df(n,!0,a,null,d);break;case"together":df(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Yi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ua|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Js(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Hi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Hi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function hf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&_l(t)))}function Zx(t,n,a){switch(n.tag){case 3:we(n,n.stateNode.containerInfo),ya(n,hn,t.memoizedState.cache),Ks();break;case 27:case 5:Xe(n);break;case 4:we(n,n.stateNode.containerInfo);break;case 10:ya(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ta(n),n.flags|=128,null):(a&n.child.childLanes)!==0?rg(t,n,a):(Ta(n),t=Yi(t,n,a),t!==null?t.sibling:null);Ta(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Js(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return og(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),de(pn,pn.current),o)break;return null;case 22:case 23:return n.lanes=0,eg(t,n,a);case 24:ya(n,hn,t.memoizedState.cache)}return Yi(t,n,a)}function lg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)yn=!0;else{if(!hf(t,a)&&(n.flags&128)===0)return yn=!1,Zx(t,n,a);yn=(t.flags&131072)!==0}else yn=!1,Ct&&(n.flags&1048576)!==0&&zp(n,gl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")Sc(o)?(t=hr(o,t),n.tag=1,n=ig(null,n,o,t,a)):(n.tag=0,n=sf(null,n,o,t,a));else{if(o!=null){if(c=o.$$typeof,c===U){n.tag=11,n=Qm(null,n,o,t,a);break e}else if(c===z){n.tag=14,n=Jm(null,n,o,t,a);break e}}throw n=xe(o)||o,Error(r(306,n,""))}}return n;case 0:return sf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=hr(o,n.pendingProps),ig(t,n,o,c,a);case 3:e:{if(we(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;c=d.element,Pc(t,n),ro(n,o,null,a);var S=n.memoizedState;if(o=S.cache,ya(n,hn,o),o!==d.cache&&wc(n,[hn],a,!0),ao(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=ag(t,n,o,a);break e}else if(o!==c){c=ii(Error(r(424)),n),Qs(c),n=ag(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Kt=mi(t.firstChild),Pn=n,Ct=!0,or=null,Mi=!0,a=Hm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ks(),o===c){n=Yi(t,n,a);break e}Rn(t,n,o,a)}n=n.child}return n;case 26:return Il(t,n),t===null?(a=d_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ct||(a=n.type,t=n.pendingProps,o=Ql(Ee.current).createElement(a),o[fn]=n,o[Tn]=t,wn(o,a,t),sn(o),n.stateNode=o):n.memoizedState=d_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Xe(n),t===null&&Ct&&(o=n.stateNode=u_(n.type,n.pendingProps,Ee.current),Pn=n,Mi=!0,c=Kt,Pa(n.type)?(Yf=c,Kt=mi(o.firstChild)):Kt=c),Rn(t,n,n.pendingProps.children,a),Il(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ct&&((c=o=Kt)&&(o=My(o,n.type,n.pendingProps,Mi),o!==null?(n.stateNode=o,Pn=n,Kt=mi(o.firstChild),Mi=!1,c=!0):c=!1),c||lr(n)),Xe(n),c=n.type,d=n.pendingProps,S=t!==null?t.memoizedProps:null,o=d.children,kf(c,d)?o=null:S!==null&&kf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=Gc(t,n,Gx,null,null,a),Co._currentValue=c),Il(t,n),Rn(t,n,o,a),n.child;case 6:return t===null&&Ct&&((t=a=Kt)&&(a=by(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Pn=n,Kt=null,t=!0):t=!1),t||lr(n)),null;case 13:return rg(t,n,a);case 4:return we(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Jr(n,null,o,a):Rn(t,n,o,a),n.child;case 11:return Qm(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ya(n,n.type,o.value),Rn(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,cr(n),c=Un(c),o=o(c),n.flags|=1,Rn(t,n,o,a),n.child;case 14:return Jm(t,n,n.type,n.pendingProps,a);case 15:return $m(t,n,n.type,n.pendingProps,a);case 19:return og(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=Bl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Hi(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return eg(t,n,a);case 24:return cr(n),o=Un(hn),t===null?(c=Lc(),c===null&&(c=Xt,d=Dc(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=a),c=d),n.memoizedState={parent:o,cache:c},Oc(n),ya(n,hn,c)):((t.lanes&a)!==0&&(Pc(t,n),ro(n,null,null,a),ao()),c=t.memoizedState,d=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ya(n,hn,o)):(o=d.cache,ya(n,hn,o),o!==c.cache&&wc(n,[hn],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ji(t){t.flags|=4}function ug(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!__(n)){if(n=oi.current,n!==null&&((Et&4194048)===Et?bi!==null:(Et&62914560)!==Et&&(Et&536870912)===0||n!==bi))throw no=Nc,qp;t.flags|=8192}}function zl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ne():536870912,t.lanes|=n,ns|=n)}function ho(t,n){if(!Ct)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Yt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Kx(t,n,a){var o=n.pendingProps;switch(Tc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(n),null;case 1:return Yt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Xi(hn),at(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Zs(n)?ji(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Gp())),Yt(n),null;case 26:return a=n.memoizedState,t===null?(ji(n),a!==null?(Yt(n),ug(n,a)):(Yt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(ji(n),Yt(n),ug(n,a)):(Yt(n),n.flags&=-16777217):(t.memoizedProps!==o&&ji(n),Yt(n),n.flags&=-16777217),null;case 27:et(n),a=Ee.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}t=W.current,Zs(n)?Fp(n):(t=u_(c,o,a),n.stateNode=t,ji(n))}return Yt(n),null;case 5:if(et(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}if(t=W.current,Zs(n))Fp(n);else{switch(c=Ql(Ee.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}t[fn]=n,t[Tn]=o;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;e:switch(wn(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ji(n)}}return Yt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ji(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=Ee.current,Zs(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=Pn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[fn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||n_(t.nodeValue,a)),t||lr(n)}else t=Ql(t).createTextNode(o),t[fn]=n,n.stateNode=t}return Yt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Zs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[fn]=n}else Ks(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),c=!1}else c=Gp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(qi(n),n):(qi(n),null)}if(qi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==c&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),zl(n,n.updateQueue),Yt(n),null;case 4:return at(),t===null&&zf(n.stateNode.containerInfo),Yt(n),null;case 10:return Xi(n.type),Yt(n),null;case 19:if(se(pn),c=n.memoizedState,c===null)return Yt(n),null;if(o=(n.flags&128)!==0,d=c.rendering,d===null)if(o)ho(c,!1);else{if(Qt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Nl(t),d!==null){for(n.flags|=128,ho(c,!1),t=d.updateQueue,n.updateQueue=t,zl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Bp(a,t),a=a.sibling;return de(pn,pn.current&1|2),n.child}t=t.sibling}c.tail!==null&&gt()>Gl&&(n.flags|=128,o=!0,ho(c,!1),n.lanes=4194304)}else{if(!o)if(t=Nl(d),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,zl(n,t),ho(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!Ct)return Yt(n),null}else 2*gt()-c.renderingStartTime>Gl&&a!==536870912&&(n.flags|=128,o=!0,ho(c,!1),n.lanes=4194304);c.isBackwards?(d.sibling=n.child,n.child=d):(t=c.last,t!==null?t.sibling=d:n.child=d,c.last=d)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=gt(),n.sibling=null,t=pn.current,de(pn,o?t&1|2:t&1),n):(Yt(n),null);case 22:case 23:return qi(n),Fc(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Yt(n),n.subtreeFlags&6&&(n.flags|=8192)):Yt(n),a=n.updateQueue,a!==null&&zl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&se(fr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(hn),Yt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Qx(t,n){switch(Tc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Xi(hn),at(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return et(n),null;case 13:if(qi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ks()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return se(pn),null;case 4:return at(),null;case 10:return Xi(n.type),null;case 22:case 23:return qi(n),Fc(),t!==null&&se(fr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Xi(hn),null;case 25:return null;default:return null}}function cg(t,n){switch(Tc(n),n.tag){case 3:Xi(hn),at();break;case 26:case 27:case 5:et(n);break;case 4:at();break;case 13:qi(n);break;case 19:se(pn);break;case 10:Xi(n.type);break;case 22:case 23:qi(n),Fc(),t!==null&&se(fr);break;case 24:Xi(hn)}}function po(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var d=a.create,S=a.inst;o=d(),S.destroy=o}a=a.next}while(a!==c)}}catch(T){Vt(n,n.return,T)}}function Ra(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&t)===t){var S=o.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,c=n;var I=a,$=T;try{$()}catch(me){Vt(c,I,me)}}}o=o.next}while(o!==d)}}catch(me){Vt(n,n.return,me)}}function fg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Jp(n,a)}catch(o){Vt(t,t.return,o)}}}function dg(t,n,a){a.props=hr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Vt(t,n,o)}}function mo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Vt(t,n,c)}}function Ti(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Vt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Vt(t,n,c)}else a.current=null}function hg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Vt(t,t.return,c)}}function pf(t,n,a){try{var o=t.stateNode;vy(o,t.type,a,n),o[Tn]=n}catch(c){Vt(t,t.return,c)}}function pg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Pa(t.type)||t.tag===4}function mf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Pa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Kl));else if(o!==4&&(o===27&&Pa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(gf(t,n,a),t=t.sibling;t!==null;)gf(t,n,a),t=t.sibling}function Fl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Pa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Fl(t,n,a),t=t.sibling;t!==null;)Fl(t,n,a),t=t.sibling}function mg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);wn(n,o,a),n[fn]=t,n[Tn]=a}catch(d){Vt(t,t.return,d)}}var Zi=!1,en=!1,_f=!1,gg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function Jx(t,n){if(t=t.containerInfo,Gf=iu,t=Rp(t),pc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var S=0,T=-1,I=-1,$=0,me=0,ye=t,te=null;t:for(;;){for(var ne;ye!==a||c!==0&&ye.nodeType!==3||(T=S+c),ye!==d||o!==0&&ye.nodeType!==3||(I=S+o),ye.nodeType===3&&(S+=ye.nodeValue.length),(ne=ye.firstChild)!==null;)te=ye,ye=ne;for(;;){if(ye===t)break t;if(te===a&&++$===c&&(T=S),te===d&&++me===o&&(I=S),(ne=ye.nextSibling)!==null)break;ye=te,te=ye.parentNode}ye=ne}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vf={focusedElem:t,selectionRange:a},iu=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,d=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,c=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var it=hr(a.type,c,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(it,d),o.__reactInternalSnapshotBeforeUpdate=t}catch($e){Vt(a,a.return,$e)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Wf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Wf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function _g(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ca(t,a),o&4&&po(5,a);break;case 1:if(Ca(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Vt(a,a.return,S)}else{var c=hr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Vt(a,a.return,S)}}o&64&&fg(a),o&512&&mo(a,a.return);break;case 3:if(Ca(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Jp(t,n)}catch(S){Vt(a,a.return,S)}}break;case 27:n===null&&o&4&&mg(a);case 26:case 5:Ca(t,a),n===null&&o&4&&hg(a),o&512&&mo(a,a.return);break;case 12:Ca(t,a);break;case 13:Ca(t,a),o&4&&yg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=oy.bind(null,a),Ty(t,a))));break;case 22:if(o=a.memoizedState!==null||Zi,!o){n=n!==null&&n.memoizedState!==null||en,c=Zi;var d=en;Zi=o,(en=n)&&!d?wa(t,a,(a.subtreeFlags&8772)!==0):Ca(t,a),Zi=c,en=d}break;case 30:break;default:Ca(t,a)}}function vg(t){var n=t.alternate;n!==null&&(t.alternate=null,vg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ga(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qt=null,Hn=!1;function Ki(t,n,a){for(a=a.child;a!==null;)xg(t,n,a),a=a.sibling}function xg(t,n,a){if(ve&&typeof ve.onCommitFiberUnmount=="function")try{ve.onCommitFiberUnmount(ge,a)}catch{}switch(a.tag){case 26:en||Ti(a,n),Ki(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:en||Ti(a,n);var o=qt,c=Hn;Pa(a.type)&&(qt=a.stateNode,Hn=!1),Ki(t,n,a),bo(a.stateNode),qt=o,Hn=c;break;case 5:en||Ti(a,n);case 6:if(o=qt,c=Hn,qt=null,Ki(t,n,a),qt=o,Hn=c,qt!==null)if(Hn)try{(qt.nodeType===9?qt.body:qt.nodeName==="HTML"?qt.ownerDocument.body:qt).removeChild(a.stateNode)}catch(d){Vt(a,n,d)}else try{qt.removeChild(a.stateNode)}catch(d){Vt(a,n,d)}break;case 18:qt!==null&&(Hn?(t=qt,o_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Lo(t)):o_(qt,a.stateNode));break;case 4:o=qt,c=Hn,qt=a.stateNode.containerInfo,Hn=!0,Ki(t,n,a),qt=o,Hn=c;break;case 0:case 11:case 14:case 15:en||Ra(2,a,n),en||Ra(4,a,n),Ki(t,n,a);break;case 1:en||(Ti(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&dg(a,n,o)),Ki(t,n,a);break;case 21:Ki(t,n,a);break;case 22:en=(o=en)||a.memoizedState!==null,Ki(t,n,a),en=o;break;default:Ki(t,n,a)}}function yg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Lo(t)}catch(a){Vt(n,n.return,a)}}function $x(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new gg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new gg),n;default:throw Error(r(435,t.tag))}}function vf(t,n){var a=$x(t);n.forEach(function(o){var c=ly.bind(null,t,o);a.has(o)||(a.add(o),o.then(c,c))})}function jn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],d=t,S=n,T=S;e:for(;T!==null;){switch(T.tag){case 27:if(Pa(T.type)){qt=T.stateNode,Hn=!1;break e}break;case 5:qt=T.stateNode,Hn=!1;break e;case 3:case 4:qt=T.stateNode.containerInfo,Hn=!0;break e}T=T.return}if(qt===null)throw Error(r(160));xg(d,S,c),qt=null,Hn=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Sg(n,t),n=n.sibling}var pi=null;function Sg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:jn(n,t),Zn(t),o&4&&(Ra(3,t,t.return),po(3,t),Ra(5,t,t.return));break;case 1:jn(n,t),Zn(t),o&512&&(en||a===null||Ti(a,a.return)),o&64&&Zi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=pi;if(jn(n,t),Zn(t),o&512&&(en||a===null||Ti(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":d=c.getElementsByTagName("title")[0],(!d||d[ma]||d[fn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(o),c.head.insertBefore(d,c.querySelector("head > title"))),wn(d,o,a),d[fn]=t,sn(d),o=d;break e;case"link":var S=m_("link","href",c).get(o+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(d=S[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break t}}d=c.createElement(o),wn(d,o,a),c.head.appendChild(d);break;case"meta":if(S=m_("meta","content",c).get(o+(a.content||""))){for(T=0;T<S.length;T++)if(d=S[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break t}}d=c.createElement(o),wn(d,o,a),c.head.appendChild(d);break;default:throw Error(r(468,o))}d[fn]=t,sn(d),o=d}t.stateNode=o}else g_(c,t.type,t.stateNode);else t.stateNode=p_(c,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?g_(c,t.type,t.stateNode):p_(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&pf(t,t.memoizedProps,a.memoizedProps)}break;case 27:jn(n,t),Zn(t),o&512&&(en||a===null||Ti(a,a.return)),a!==null&&o&4&&pf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,t),Zn(t),o&512&&(en||a===null||Ti(a,a.return)),t.flags&32){c=t.stateNode;try{Ei(c,"")}catch(ne){Vt(t,t.return,ne)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,pf(t,c,a!==null?a.memoizedProps:c)),o&1024&&(_f=!0);break;case 6:if(jn(n,t),Zn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ne){Vt(t,t.return,ne)}}break;case 3:if(eu=null,c=pi,pi=Jl(n.containerInfo),jn(n,t),pi=c,Zn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Lo(n.containerInfo)}catch(ne){Vt(t,t.return,ne)}_f&&(_f=!1,Eg(t));break;case 4:o=pi,pi=Jl(t.stateNode.containerInfo),jn(n,t),Zn(t),pi=o;break;case 12:jn(n,t),Zn(t);break;case 13:jn(n,t),Zn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(bf=gt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,vf(t,o)));break;case 22:c=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,$=Zi,me=en;if(Zi=$||c,en=me||I,jn(n,t),en=me,Zi=$,Zn(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||Zi||en||pr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(d=I.stateNode,c)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=I.stateNode;var ye=I.memoizedProps.style,te=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;T.style.display=te==null||typeof te=="boolean"?"":(""+te).trim()}}catch(ne){Vt(I,I.return,ne)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(ne){Vt(I,I.return,ne)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,vf(t,a))));break;case 19:jn(n,t),Zn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,vf(t,o)));break;case 30:break;case 21:break;default:jn(n,t),Zn(t)}}function Zn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(pg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,d=mf(t);Fl(t,d,c);break;case 5:var S=a.stateNode;a.flags&32&&(Ei(S,""),a.flags&=-33);var T=mf(t);Fl(t,T,S);break;case 3:case 4:var I=a.stateNode.containerInfo,$=mf(t);gf(t,$,I);break;default:throw Error(r(161))}}catch(me){Vt(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Eg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Eg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ca(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)_g(t,n.alternate,n),n=n.sibling}function pr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ra(4,n,n.return),pr(n);break;case 1:Ti(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&dg(n,n.return,a),pr(n);break;case 27:bo(n.stateNode);case 26:case 5:Ti(n,n.return),pr(n);break;case 22:n.memoizedState===null&&pr(n);break;case 30:pr(n);break;default:pr(n)}t=t.sibling}}function wa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,d=n,S=d.flags;switch(d.tag){case 0:case 11:case 15:wa(c,d,a),po(4,d);break;case 1:if(wa(c,d,a),o=d,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Vt(o,o.return,$)}if(o=d,c=o.updateQueue,c!==null){var T=o.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)Qp(I[c],T)}catch($){Vt(o,o.return,$)}}a&&S&64&&fg(d),mo(d,d.return);break;case 27:mg(d);case 26:case 5:wa(c,d,a),a&&o===null&&S&4&&hg(d),mo(d,d.return);break;case 12:wa(c,d,a);break;case 13:wa(c,d,a),a&&S&4&&yg(c,d);break;case 22:d.memoizedState===null&&wa(c,d,a),mo(d,d.return);break;case 30:break;default:wa(c,d,a)}n=n.sibling}}function xf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&$s(a))}function yf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&$s(t))}function Ai(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Mg(t,n,a,o),n=n.sibling}function Mg(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(t,n,a,o),c&2048&&po(9,n);break;case 1:Ai(t,n,a,o);break;case 3:Ai(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&$s(t)));break;case 12:if(c&2048){Ai(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,S=d.id,T=d.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Vt(n,n.return,I)}}else Ai(t,n,a,o);break;case 13:Ai(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,S=n.alternate,n.memoizedState!==null?d._visibility&2?Ai(t,n,a,o):go(t,n):d._visibility&2?Ai(t,n,a,o):(d._visibility|=2,$r(t,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&xf(S,n);break;case 24:Ai(t,n,a,o),c&2048&&yf(n.alternate,n);break;default:Ai(t,n,a,o)}}function $r(t,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=t,S=n,T=a,I=o,$=S.flags;switch(S.tag){case 0:case 11:case 15:$r(d,S,T,I,c),po(8,S);break;case 23:break;case 22:var me=S.stateNode;S.memoizedState!==null?me._visibility&2?$r(d,S,T,I,c):go(d,S):(me._visibility|=2,$r(d,S,T,I,c)),c&&$&2048&&xf(S.alternate,S);break;case 24:$r(d,S,T,I,c),c&&$&2048&&yf(S.alternate,S);break;default:$r(d,S,T,I,c)}n=n.sibling}}function go(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:go(a,o),c&2048&&xf(o.alternate,o);break;case 24:go(a,o),c&2048&&yf(o.alternate,o);break;default:go(a,o)}n=n.sibling}}var _o=8192;function es(t){if(t.subtreeFlags&_o)for(t=t.child;t!==null;)bg(t),t=t.sibling}function bg(t){switch(t.tag){case 26:es(t),t.flags&_o&&t.memoizedState!==null&&zy(pi,t.memoizedState,t.memoizedProps);break;case 5:es(t);break;case 3:case 4:var n=pi;pi=Jl(t.stateNode.containerInfo),es(t),pi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=_o,_o=16777216,es(t),_o=n):es(t));break;default:es(t)}}function Tg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function vo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,Rg(o,t)}Tg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ag(t),t=t.sibling}function Ag(t){switch(t.tag){case 0:case 11:case 15:vo(t),t.flags&2048&&Ra(9,t,t.return);break;case 3:vo(t);break;case 12:vo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Hl(t)):vo(t);break;default:vo(t)}}function Hl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,Rg(o,t)}Tg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ra(8,n,n.return),Hl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Hl(n));break;default:Hl(n)}t=t.sibling}}function Rg(t,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ra(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:$s(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else e:for(a=t;Sn!==null;){o=Sn;var c=o.sibling,d=o.return;if(vg(o),o===a){Sn=null;break e}if(c!==null){c.return=d,Sn=c;break e}Sn=d}}}var ey={getCacheForType:function(t){var n=Un(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},ty=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Xt=null,_t=null,Et=0,Nt=0,Kn=null,Da=!1,ts=!1,Sf=!1,Qi=0,Qt=0,Ua=0,mr=0,Ef=0,li=0,ns=0,xo=null,Gn=null,Mf=!1,bf=0,Gl=1/0,Vl=null,La=null,Cn=0,Na=null,is=null,as=0,Tf=0,Af=null,Cg=null,yo=0,Rf=null;function Qn(){if((Lt&2)!==0&&Et!==0)return Et&-Et;if(P.T!==null){var t=Wr;return t!==0?t:Of()}return Tt()}function wg(){li===0&&(li=(Et&536870912)===0||Ct?X():536870912);var t=oi.current;return t!==null&&(t.flags|=32),li}function Jn(t,n,a){(t===Xt&&(Nt===2||Nt===9)||t.cancelPendingCommit!==null)&&(rs(t,0),Oa(t,Et,li,!1)),ze(t,a),((Lt&2)===0||t!==Xt)&&(t===Xt&&((Lt&2)===0&&(mr|=a),Qt===4&&Oa(t,Et,li,!1)),Ri(t))}function Dg(t,n,a){if((Lt&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||De(t,n),c=o?ay(t,n):Df(t,n,!0),d=o;do{if(c===0){ts&&!o&&Oa(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!ny(a)){c=Df(t,n,!1),d=!1;continue}if(c===2){if(d=n,t.errorRecoveryDisabledLanes&d)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var T=t;c=xo;var I=T.current.memoizedState.isDehydrated;if(I&&(rs(T,S).flags|=256),S=Df(T,S,!1),S!==2){if(Sf&&!I){T.errorRecoveryDisabledLanes|=d,mr|=d,c=4;break e}d=Gn,Gn=c,d!==null&&(Gn===null?Gn=d:Gn.push.apply(Gn,d))}c=S}if(d=!1,c!==2)continue}}if(c===1){rs(t,0),Oa(t,n,0,!0);break}e:{switch(o=t,d=c,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Oa(o,n,li,!Da);break e;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=bf+300-gt(),10<c)){if(Oa(o,n,li,!Da),Ze(o,0,!0)!==0)break e;o.timeoutHandle=r_(Ug.bind(null,o,a,Gn,Vl,Mf,n,li,mr,ns,Da,d,2,-0,0),c);break e}Ug(o,a,Gn,Vl,Mf,n,li,mr,ns,Da,d,0,-0,0)}}break}while(!0);Ri(t)}function Ug(t,n,a,o,c,d,S,T,I,$,me,ye,te,ne){if(t.timeoutHandle=-1,ye=n.subtreeFlags,(ye&8192||(ye&16785408)===16785408)&&(Ro={stylesheets:null,count:0,unsuspend:By},bg(n),ye=Fy(),ye!==null)){t.cancelPendingCommit=ye(zg.bind(null,t,n,d,a,o,c,S,T,I,me,1,te,ne)),Oa(t,d,S,!$);return}zg(t,n,d,a,o,c,S,T,I)}function ny(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],d=c.getSnapshot;c=c.value;try{if(!qn(d(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Oa(t,n,a,o){n&=~Ef,n&=~mr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var d=31-Ie(c),S=1<<d;o[d]=-1,c&=~S}a!==0&&Se(t,a,n)}function kl(){return(Lt&6)===0?(So(0),!1):!0}function Cf(){if(_t!==null){if(Nt===0)var t=_t.return;else t=_t,ki=ur=null,Xc(t),Qr=null,co=0,t=_t;for(;t!==null;)cg(t.alternate,t),t=t.return;_t=null}}function rs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,yy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Cf(),Xt=t,_t=a=Hi(t.current,null),Et=n,Nt=0,Kn=null,Da=!1,ts=De(t,n),Sf=!1,ns=li=Ef=mr=Ua=Qt=0,Gn=xo=null,Mf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Ie(o),d=1<<c;n|=t[c],o&=~d}return Qi=n,fl(),a}function Lg(t,n){dt=null,P.H=Dl,n===to||n===yl?(n=Zp(),Nt=3):n===qp?(n=Zp(),Nt=4):Nt=n===Km?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,_t===null&&(Qt=1,Pl(t,ii(n,t.current)))}function Ng(){var t=P.H;return P.H=Dl,t===null?Dl:t}function Og(){var t=P.A;return P.A=ey,t}function wf(){Qt=4,Da||(Et&4194048)!==Et&&oi.current!==null||(ts=!0),(Ua&134217727)===0&&(mr&134217727)===0||Xt===null||Oa(Xt,Et,li,!1)}function Df(t,n,a){var o=Lt;Lt|=2;var c=Ng(),d=Og();(Xt!==t||Et!==n)&&(Vl=null,rs(t,n)),n=!1;var S=Qt;e:do try{if(Nt!==0&&_t!==null){var T=_t,I=Kn;switch(Nt){case 8:Cf(),S=6;break e;case 3:case 2:case 9:case 6:oi.current===null&&(n=!0);var $=Nt;if(Nt=0,Kn=null,ss(t,T,I,$),a&&ts){S=0;break e}break;default:$=Nt,Nt=0,Kn=null,ss(t,T,I,$)}}iy(),S=Qt;break}catch(me){Lg(t,me)}while(!0);return n&&t.shellSuspendCounter++,ki=ur=null,Lt=o,P.H=c,P.A=d,_t===null&&(Xt=null,Et=0,fl()),S}function iy(){for(;_t!==null;)Pg(_t)}function ay(t,n){var a=Lt;Lt|=2;var o=Ng(),c=Og();Xt!==t||Et!==n?(Vl=null,Gl=gt()+500,rs(t,n)):ts=De(t,n);e:do try{if(Nt!==0&&_t!==null){n=_t;var d=Kn;t:switch(Nt){case 1:Nt=0,Kn=null,ss(t,n,d,1);break;case 2:case 9:if(Yp(d)){Nt=0,Kn=null,Ig(n);break}n=function(){Nt!==2&&Nt!==9||Xt!==t||(Nt=7),Ri(t)},d.then(n,n);break e;case 3:Nt=7;break e;case 4:Nt=5;break e;case 7:Yp(d)?(Nt=0,Kn=null,Ig(n)):(Nt=0,Kn=null,ss(t,n,d,7));break;case 5:var S=null;switch(_t.tag){case 26:S=_t.memoizedState;case 5:case 27:var T=_t;if(!S||__(S)){Nt=0,Kn=null;var I=T.sibling;if(I!==null)_t=I;else{var $=T.return;$!==null?(_t=$,Xl($)):_t=null}break t}}Nt=0,Kn=null,ss(t,n,d,5);break;case 6:Nt=0,Kn=null,ss(t,n,d,6);break;case 8:Cf(),Qt=6;break e;default:throw Error(r(462))}}ry();break}catch(me){Lg(t,me)}while(!0);return ki=ur=null,P.H=o,P.A=c,Lt=a,_t!==null?0:(Xt=null,Et=0,fl(),Qt)}function ry(){for(;_t!==null&&!bn();)Pg(_t)}function Pg(t){var n=lg(t.alternate,t,Qi);t.memoizedProps=t.pendingProps,n===null?Xl(t):_t=n}function Ig(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=ng(a,n,n.pendingProps,n.type,void 0,Et);break;case 11:n=ng(a,n,n.pendingProps,n.type.render,n.ref,Et);break;case 5:Xc(n);default:cg(a,n),n=_t=Bp(n,Qi),n=lg(a,n,Qi)}t.memoizedProps=t.pendingProps,n===null?Xl(t):_t=n}function ss(t,n,a,o){ki=ur=null,Xc(n),Qr=null,co=0;var c=n.return;try{if(jx(t,c,n,a,Et)){Qt=1,Pl(t,ii(a,t.current)),_t=null;return}}catch(d){if(c!==null)throw _t=c,d;Qt=1,Pl(t,ii(a,t.current)),_t=null;return}n.flags&32768?(Ct||o===1?t=!0:ts||(Et&536870912)!==0?t=!1:(Da=t=!0,(o===2||o===9||o===3||o===6)&&(o=oi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Bg(n,t)):Xl(n)}function Xl(t){var n=t;do{if((n.flags&32768)!==0){Bg(n,Da);return}t=n.return;var a=Kx(n.alternate,n,Qi);if(a!==null){_t=a;return}if(n=n.sibling,n!==null){_t=n;return}_t=n=t}while(n!==null);Qt===0&&(Qt=5)}function Bg(t,n){do{var a=Qx(t.alternate,t);if(a!==null){a.flags&=32767,_t=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){_t=t;return}_t=t=a}while(t!==null);Qt=6,_t=null}function zg(t,n,a,o,c,d,S,T,I){t.cancelPendingCommit=null;do Wl();while(Cn!==0);if((Lt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=xc,Ce(t,a,d,S,T,I),t===Xt&&(_t=Xt=null,Et=0),is=n,Na=t,as=a,Tf=d,Af=c,Cg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,uy(ot,function(){return kg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,c=q.p,q.p=2,S=Lt,Lt|=4;try{Jx(t,n,a)}finally{Lt=S,q.p=c,P.T=o}}Cn=1,Fg(),Hg(),Gg()}}function Fg(){if(Cn===1){Cn=0;var t=Na,n=is,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=q.p;q.p=2;var c=Lt;Lt|=4;try{Sg(n,t);var d=Vf,S=Rp(t.containerInfo),T=d.focusedElem,I=d.selectionRange;if(S!==T&&T&&T.ownerDocument&&Ap(T.ownerDocument.documentElement,T)){if(I!==null&&pc(T)){var $=I.start,me=I.end;if(me===void 0&&(me=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(me,T.value.length);else{var ye=T.ownerDocument||document,te=ye&&ye.defaultView||window;if(te.getSelection){var ne=te.getSelection(),it=T.textContent.length,$e=Math.min(I.start,it),Bt=I.end===void 0?$e:Math.min(I.end,it);!ne.extend&&$e>Bt&&(S=Bt,Bt=$e,$e=S);var Z=Tp(T,$e),V=Tp(T,Bt);if(Z&&V&&(ne.rangeCount!==1||ne.anchorNode!==Z.node||ne.anchorOffset!==Z.offset||ne.focusNode!==V.node||ne.focusOffset!==V.offset)){var J=ye.createRange();J.setStart(Z.node,Z.offset),ne.removeAllRanges(),$e>Bt?(ne.addRange(J),ne.extend(V.node,V.offset)):(J.setEnd(V.node,V.offset),ne.addRange(J))}}}}for(ye=[],ne=T;ne=ne.parentNode;)ne.nodeType===1&&ye.push({element:ne,left:ne.scrollLeft,top:ne.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ye.length;T++){var _e=ye[T];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}iu=!!Gf,Vf=Gf=null}finally{Lt=c,q.p=o,P.T=a}}t.current=n,Cn=2}}function Hg(){if(Cn===2){Cn=0;var t=Na,n=is,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=q.p;q.p=2;var c=Lt;Lt|=4;try{_g(t,n.alternate,n)}finally{Lt=c,q.p=o,P.T=a}}Cn=3}}function Gg(){if(Cn===4||Cn===3){Cn=0,Mt();var t=Na,n=is,a=as,o=Cg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Cn=5:(Cn=0,is=Na=null,Vg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(La=null),Ut(a),n=n.stateNode,ve&&typeof ve.onCommitFiberRoot=="function")try{ve.onCommitFiberRoot(ge,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,c=q.p,q.p=2,P.T=null;try{for(var d=t.onRecoverableError,S=0;S<o.length;S++){var T=o[S];d(T.value,{componentStack:T.stack})}}finally{P.T=n,q.p=c}}(as&3)!==0&&Wl(),Ri(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===Rf?yo++:(yo=0,Rf=t):yo=0,So(0)}}function Vg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,$s(n)))}function Wl(t){return Fg(),Hg(),Gg(),kg()}function kg(){if(Cn!==5)return!1;var t=Na,n=Tf;Tf=0;var a=Ut(as),o=P.T,c=q.p;try{q.p=32>a?32:a,P.T=null,a=Af,Af=null;var d=Na,S=as;if(Cn=0,is=Na=null,as=0,(Lt&6)!==0)throw Error(r(331));var T=Lt;if(Lt|=4,Ag(d.current),Mg(d,d.current,S,a),Lt=T,So(0,!1),ve&&typeof ve.onPostCommitFiberRoot=="function")try{ve.onPostCommitFiberRoot(ge,d)}catch{}return!0}finally{q.p=c,P.T=o,Vg(t,n)}}function Xg(t,n,a){n=ii(a,n),n=rf(t.stateNode,n,2),t=Ma(t,n,2),t!==null&&(ze(t,2),Ri(t))}function Vt(t,n,a){if(t.tag===3)Xg(t,t,a);else for(;n!==null;){if(n.tag===3){Xg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(La===null||!La.has(o))){t=ii(a,t),a=jm(2),o=Ma(n,a,2),o!==null&&(Zm(a,o,n,t),ze(o,2),Ri(o));break}}n=n.return}}function Uf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new ty;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Sf=!0,c.add(a),t=sy.bind(null,t,n,a),n.then(t,t))}function sy(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xt===t&&(Et&a)===a&&(Qt===4||Qt===3&&(Et&62914560)===Et&&300>gt()-bf?(Lt&2)===0&&rs(t,0):Ef|=a,ns===Et&&(ns=0)),Ri(t)}function Wg(t,n){n===0&&(n=Ne()),t=Gr(t,n),t!==null&&(ze(t,n),Ri(t))}function oy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Wg(t,a)}function ly(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Wg(t,a)}function uy(t,n){return ht(t,n)}var ql=null,os=null,Lf=!1,Yl=!1,Nf=!1,gr=0;function Ri(t){t!==os&&t.next===null&&(os===null?ql=os=t:os=os.next=t),Yl=!0,Lf||(Lf=!0,fy())}function So(t,n){if(!Nf&&Yl){Nf=!0;do for(var a=!1,o=ql;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var d=0;else{var S=o.suspendedLanes,T=o.pingedLanes;d=(1<<31-Ie(42|t)+1)-1,d&=c&~(S&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Zg(o,d))}else d=Et,d=Ze(o,o===Xt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||De(o,d)||(a=!0,Zg(o,d));o=o.next}while(a);Nf=!1}}function cy(){qg()}function qg(){Yl=Lf=!1;var t=0;gr!==0&&(xy()&&(t=gr),gr=0);for(var n=gt(),a=null,o=ql;o!==null;){var c=o.next,d=Yg(o,n);d===0?(o.next=null,a===null?ql=c:a.next=c,c===null&&(os=a)):(a=o,(t!==0||(d&3)!==0)&&(Yl=!0)),o=c}So(t)}function Yg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var S=31-Ie(d),T=1<<S,I=c[S];I===-1?((T&a)===0||(T&o)!==0)&&(c[S]=st(T,n)):I<=n&&(t.expiredLanes|=T),d&=~T}if(n=Xt,a=Et,a=Ze(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Nt===2||Nt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&F(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||De(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&F(o),Ut(a)){case 2:case 8:a=Ke;break;case 32:a=ot;break;case 268435456:a=N;break;default:a=ot}return o=jg.bind(null,t),a=ht(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&F(o),t.callbackPriority=2,t.callbackNode=null,2}function jg(t,n){if(Cn!==0&&Cn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Wl()&&t.callbackNode!==a)return null;var o=Et;return o=Ze(t,t===Xt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Dg(t,o,n),Yg(t,gt()),t.callbackNode!=null&&t.callbackNode===a?jg.bind(null,t):null)}function Zg(t,n){if(Wl())return null;Dg(t,n,!0)}function fy(){Sy(function(){(Lt&6)!==0?ht(xt,cy):qg()})}function Of(){return gr===0&&(gr=X()),gr}function Kg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:al(""+t)}function Qg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function dy(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var d=Kg((c[Tn]||null).action),S=o.submitter;S&&(n=(n=S[Tn]||null)?Kg(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var T=new ll("action","action",null,o,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(gr!==0){var I=S?Qg(c,S):new FormData(c);$c(a,{pending:!0,data:I,method:c.method,action:d},null,I)}}else typeof d=="function"&&(T.preventDefault(),I=S?Qg(c,S):new FormData(c),$c(a,{pending:!0,data:I,method:c.method,action:d},d,I))},currentTarget:c}]})}}for(var Pf=0;Pf<vc.length;Pf++){var If=vc[Pf],hy=If.toLowerCase(),py=If[0].toUpperCase()+If.slice(1);hi(hy,"on"+py)}hi(Dp,"onAnimationEnd"),hi(Up,"onAnimationIteration"),hi(Lp,"onAnimationStart"),hi("dblclick","onDoubleClick"),hi("focusin","onFocus"),hi("focusout","onBlur"),hi(Ux,"onTransitionRun"),hi(Lx,"onTransitionStart"),hi(Nx,"onTransitionCancel"),hi(Np,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),Ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ii("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),my=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function Jg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var S=o.length-1;0<=S;S--){var T=o[S],I=T.instance,$=T.currentTarget;if(T=T.listener,I!==d&&c.isPropagationStopped())break e;d=T,c.currentTarget=$;try{d(c)}catch(me){Ol(me)}c.currentTarget=null,d=I}else for(S=0;S<o.length;S++){if(T=o[S],I=T.instance,$=T.currentTarget,T=T.listener,I!==d&&c.isPropagationStopped())break e;d=T,c.currentTarget=$;try{d(c)}catch(me){Ol(me)}c.currentTarget=null,d=I}}}}function vt(t,n){var a=n[Ja];a===void 0&&(a=n[Ja]=new Set);var o=t+"__bubble";a.has(o)||($g(n,t,2,!1),a.add(o))}function Bf(t,n,a){var o=0;n&&(o|=4),$g(a,t,o,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function zf(t){if(!t[jl]){t[jl]=!0,nl.forEach(function(a){a!=="selectionchange"&&(my.has(a)||Bf(a,!1,t),Bf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[jl]||(n[jl]=!0,Bf("selectionchange",!1,n))}}function $g(t,n,a,o){switch(M_(n)){case 2:var c=Vy;break;case 8:c=ky;break;default:c=Jf}a=c.bind(null,n,a,t),c=void 0,!rc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Ff(t,n,a,o,c){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var T=o.stateNode.containerInfo;if(T===c)break;if(S===4)for(S=o.return;S!==null;){var I=S.tag;if((I===3||I===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;T!==null;){if(S=Oi(T),S===null)return;if(I=S.tag,I===5||I===6||I===26||I===27){o=d=S;continue e}T=T.parentNode}}o=o.return}sp(function(){var $=d,me=ic(a),ye=[];e:{var te=Op.get(t);if(te!==void 0){var ne=ll,it=t;switch(t){case"keypress":if(sl(a)===0)break e;case"keydown":case"keyup":ne=ux;break;case"focusin":it="focus",ne=uc;break;case"focusout":it="blur",ne=uc;break;case"beforeblur":case"afterblur":ne=uc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=Q0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=dx;break;case Dp:case Up:case Lp:ne=ex;break;case Np:ne=px;break;case"scroll":case"scrollend":ne=Z0;break;case"wheel":ne=gx;break;case"copy":case"cut":case"paste":ne=nx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=fp;break;case"toggle":case"beforetoggle":ne=vx}var $e=(n&4)!==0,Bt=!$e&&(t==="scroll"||t==="scrollend"),Z=$e?te!==null?te+"Capture":null:te;$e=[];for(var V=$,J;V!==null;){var _e=V;if(J=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||J===null||Z===null||(_e=Hs(V,Z),_e!=null&&$e.push(Mo(V,_e,J))),Bt)break;V=V.return}0<$e.length&&(te=new ne(te,it,null,a,me),ye.push({event:te,listeners:$e}))}}if((n&7)===0){e:{if(te=t==="mouseover"||t==="pointerover",ne=t==="mouseout"||t==="pointerout",te&&a!==nc&&(it=a.relatedTarget||a.fromElement)&&(Oi(it)||it[Bn]))break e;if((ne||te)&&(te=me.window===me?me:(te=me.ownerDocument)?te.defaultView||te.parentWindow:window,ne?(it=a.relatedTarget||a.toElement,ne=$,it=it?Oi(it):null,it!==null&&(Bt=u(it),$e=it.tag,it!==Bt||$e!==5&&$e!==27&&$e!==6)&&(it=null)):(ne=null,it=$),ne!==it)){if($e=up,_e="onMouseLeave",Z="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&($e=fp,_e="onPointerLeave",Z="onPointerEnter",V="pointer"),Bt=ne==null?te:er(ne),J=it==null?te:er(it),te=new $e(_e,V+"leave",ne,a,me),te.target=Bt,te.relatedTarget=J,_e=null,Oi(me)===$&&($e=new $e(Z,V+"enter",it,a,me),$e.target=J,$e.relatedTarget=Bt,_e=$e),Bt=_e,ne&&it)t:{for($e=ne,Z=it,V=0,J=$e;J;J=ls(J))V++;for(J=0,_e=Z;_e;_e=ls(_e))J++;for(;0<V-J;)$e=ls($e),V--;for(;0<J-V;)Z=ls(Z),J--;for(;V--;){if($e===Z||Z!==null&&$e===Z.alternate)break t;$e=ls($e),Z=ls(Z)}$e=null}else $e=null;ne!==null&&e_(ye,te,ne,$e,!1),it!==null&&Bt!==null&&e_(ye,Bt,it,$e,!0)}}e:{if(te=$?er($):window,ne=te.nodeName&&te.nodeName.toLowerCase(),ne==="select"||ne==="input"&&te.type==="file")var Ge=xp;else if(_p(te))if(yp)Ge=Cx;else{Ge=Ax;var mt=Tx}else ne=te.nodeName,!ne||ne.toLowerCase()!=="input"||te.type!=="checkbox"&&te.type!=="radio"?$&&tc($.elementType)&&(Ge=xp):Ge=Rx;if(Ge&&(Ge=Ge(t,$))){vp(ye,Ge,a,me);break e}mt&&mt(t,te,$),t==="focusout"&&$&&te.type==="number"&&$.memoizedProps.value!=null&&Dn(te,"number",te.value)}switch(mt=$?er($):window,t){case"focusin":(_p(mt)||mt.contentEditable==="true")&&(zr=mt,mc=$,js=null);break;case"focusout":js=mc=zr=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,Cp(ye,a,me);break;case"selectionchange":if(Dx)break;case"keydown":case"keyup":Cp(ye,a,me)}var Ye;if(fc)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Br?mp(t,a)&&(tt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(tt="onCompositionStart");tt&&(dp&&a.locale!=="ko"&&(Br||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Br&&(Ye=op()):(xa=me,sc="value"in xa?xa.value:xa.textContent,Br=!0)),mt=Zl($,tt),0<mt.length&&(tt=new cp(tt,t,null,a,me),ye.push({event:tt,listeners:mt}),Ye?tt.data=Ye:(Ye=gp(a),Ye!==null&&(tt.data=Ye)))),(Ye=yx?Sx(t,a):Ex(t,a))&&(tt=Zl($,"onBeforeInput"),0<tt.length&&(mt=new cp("onBeforeInput","beforeinput",null,a,me),ye.push({event:mt,listeners:tt}),mt.data=Ye)),dy(ye,t,$,a,me)}Jg(ye,n)})}function Mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Zl(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=Hs(t,a),c!=null&&o.unshift(Mo(t,c,d)),c=Hs(t,n),c!=null&&o.push(Mo(t,c,d))),t.tag===3)return o;t=t.return}return[]}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function e_(t,n,a,o,c){for(var d=n._reactName,S=[];a!==null&&a!==o;){var T=a,I=T.alternate,$=T.stateNode;if(T=T.tag,I!==null&&I===o)break;T!==5&&T!==26&&T!==27||$===null||(I=$,c?($=Hs(a,d),$!=null&&S.unshift(Mo(a,$,I))):c||($=Hs(a,d),$!=null&&S.push(Mo(a,$,I)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var gy=/\r\n?/g,_y=/\u0000|\uFFFD/g;function t_(t){return(typeof t=="string"?t:""+t).replace(gy,`
`).replace(_y,"")}function n_(t,n){return n=t_(n),t_(t)===n}function Kl(){}function It(t,n,a,o,c,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ei(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ei(t,""+o);break;case"className":Ue(t,"class",o);break;case"tabIndex":Ue(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ue(t,a,o);break;case"style":ap(t,o,d);break;case"data":if(n!=="object"){Ue(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=al(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&It(t,n,"name",c.name,c,null),It(t,n,"formEncType",c.formEncType,c,null),It(t,n,"formMethod",c.formMethod,c,null),It(t,n,"formTarget",c.formTarget,c,null)):(It(t,n,"encType",c.encType,c,null),It(t,n,"method",c.method,c,null),It(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=al(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Kl);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=al(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":vt("beforetoggle",t),vt("toggle",t),Re(t,"popover",o);break;case"xlinkActuate":Pe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Pe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Pe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Pe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Pe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Pe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Re(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Y0.get(a)||a,Re(t,a,o))}}function Hf(t,n,a,o,c,d){switch(a){case"style":ap(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Ei(t,o):(typeof o=="number"||typeof o=="bigint")&&Ei(t,""+o);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Kl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!il.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),d=t[Tn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,c),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Re(t,a,o)}}}function wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var o=!1,c=!1,d;for(d in a)if(a.hasOwnProperty(d)){var S=a[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(t,n,d,S,a,null)}}c&&It(t,n,"srcSet",a.srcSet,a,null),o&&It(t,n,"src",a.src,a,null);return;case"input":vt("invalid",t);var T=d=S=c=null,I=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":c=me;break;case"type":S=me;break;case"checked":I=me;break;case"defaultChecked":$=me;break;case"value":d=me;break;case"defaultValue":T=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,n));break;default:It(t,n,o,me,a,null)}}Gt(t,d,T,I,$,S,c,!1),Ot(t);return;case"select":vt("invalid",t),o=S=d=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":d=T;break;case"defaultValue":S=T;break;case"multiple":o=T;default:It(t,n,c,T,a,null)}n=d,a=S,t.multiple=!!o,n!=null?dn(t,!!o,n,!1):a!=null&&dn(t,!!o,a,!0);return;case"textarea":vt("invalid",t),d=c=o=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":o=T;break;case"defaultValue":c=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:It(t,n,S,T,a,null)}An(t,o,c,d),Ot(t);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:It(t,n,I,o,a,null)}return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(o=0;o<Eo.length;o++)vt(Eo[o],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(t,n,$,o,a,null)}return;default:if(tc(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&Hf(t,n,me,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&It(t,n,T,o,a,null))}function vy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,S=null,T=null,I=null,$=null,me=null;for(ne in a){var ye=a[ne];if(a.hasOwnProperty(ne)&&ye!=null)switch(ne){case"checked":break;case"value":break;case"defaultValue":I=ye;default:o.hasOwnProperty(ne)||It(t,n,ne,null,o,ye)}}for(var te in o){var ne=o[te];if(ye=a[te],o.hasOwnProperty(te)&&(ne!=null||ye!=null))switch(te){case"type":d=ne;break;case"name":c=ne;break;case"checked":$=ne;break;case"defaultChecked":me=ne;break;case"value":S=ne;break;case"defaultValue":T=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(r(137,n));break;default:ne!==ye&&It(t,n,te,ne,o,ye)}}Bi(t,S,T,I,$,me,d,c);return;case"select":ne=S=T=te=null;for(d in a)if(I=a[d],a.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":ne=I;default:o.hasOwnProperty(d)||It(t,n,d,null,o,I)}for(c in o)if(d=o[c],I=a[c],o.hasOwnProperty(c)&&(d!=null||I!=null))switch(c){case"value":te=d;break;case"defaultValue":T=d;break;case"multiple":S=d;default:d!==I&&It(t,n,c,d,o,I)}n=T,a=S,o=ne,te!=null?dn(t,!!a,te,!1):!!o!=!!a&&(n!=null?dn(t,!!a,n,!0):dn(t,!!a,a?[]:"",!1));return;case"textarea":ne=te=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:It(t,n,T,null,o,c)}for(S in o)if(c=o[S],d=a[S],o.hasOwnProperty(S)&&(c!=null||d!=null))switch(S){case"value":te=c;break;case"defaultValue":ne=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==d&&It(t,n,S,c,o,d)}xn(t,te,ne);return;case"option":for(var it in a)if(te=a[it],a.hasOwnProperty(it)&&te!=null&&!o.hasOwnProperty(it))switch(it){case"selected":t.selected=!1;break;default:It(t,n,it,null,o,te)}for(I in o)if(te=o[I],ne=a[I],o.hasOwnProperty(I)&&te!==ne&&(te!=null||ne!=null))switch(I){case"selected":t.selected=te&&typeof te!="function"&&typeof te!="symbol";break;default:It(t,n,I,te,o,ne)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in a)te=a[$e],a.hasOwnProperty($e)&&te!=null&&!o.hasOwnProperty($e)&&It(t,n,$e,null,o,te);for($ in o)if(te=o[$],ne=a[$],o.hasOwnProperty($)&&te!==ne&&(te!=null||ne!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(r(137,n));break;default:It(t,n,$,te,o,ne)}return;default:if(tc(n)){for(var Bt in a)te=a[Bt],a.hasOwnProperty(Bt)&&te!==void 0&&!o.hasOwnProperty(Bt)&&Hf(t,n,Bt,void 0,o,te);for(me in o)te=o[me],ne=a[me],!o.hasOwnProperty(me)||te===ne||te===void 0&&ne===void 0||Hf(t,n,me,te,o,ne);return}}for(var Z in a)te=a[Z],a.hasOwnProperty(Z)&&te!=null&&!o.hasOwnProperty(Z)&&It(t,n,Z,null,o,te);for(ye in o)te=o[ye],ne=a[ye],!o.hasOwnProperty(ye)||te===ne||te==null&&ne==null||It(t,n,ye,te,o,ne)}var Gf=null,Vf=null;function Ql(t){return t.nodeType===9?t:t.ownerDocument}function i_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function a_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function kf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Xf=null;function xy(){var t=window.event;return t&&t.type==="popstate"?t===Xf?!1:(Xf=t,!0):(Xf=null,!1)}var r_=typeof setTimeout=="function"?setTimeout:void 0,yy=typeof clearTimeout=="function"?clearTimeout:void 0,s_=typeof Promise=="function"?Promise:void 0,Sy=typeof queueMicrotask=="function"?queueMicrotask:typeof s_<"u"?function(t){return s_.resolve(null).then(t).catch(Ey)}:r_;function Ey(t){setTimeout(function(){throw t})}function Pa(t){return t==="head"}function o_(t,n){var a=n,o=0,c=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var S=t.ownerDocument;if(a&1&&bo(S.documentElement),a&2&&bo(S.body),a&4)for(a=S.head,bo(a),S=a.firstChild;S;){var T=S.nextSibling,I=S.nodeName;S[ma]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=T}}if(c===0){t.removeChild(d),Lo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);Lo(n)}function Wf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Wf(a),ga(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function My(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ma])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=mi(t.nextSibling),t===null)break}return null}function by(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=mi(t.nextSibling),t===null))return null;return t}function qf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Ty(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function mi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Yf=null;function l_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function u_(t,n,a){switch(n=Ql(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function bo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ga(t)}var ui=new Map,c_=new Set;function Jl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ji=q.d;q.d={f:Ay,r:Ry,D:Cy,C:wy,L:Dy,m:Uy,X:Ny,S:Ly,M:Oy};function Ay(){var t=Ji.f(),n=kl();return t||n}function Ry(t){var n=Pi(t);n!==null&&n.tag===5&&n.type==="form"?Dm(n):Ji.r(t)}var us=typeof document>"u"?null:document;function f_(t,n,a){var o=us;if(o&&typeof n=="string"&&n){var c=kt(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),c_.has(c)||(c_.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),wn(n,"link",t),sn(n),o.head.appendChild(n)))}}function Cy(t){Ji.D(t),f_("dns-prefetch",t,null)}function wy(t,n){Ji.C(t,n),f_("preconnect",t,n)}function Dy(t,n,a){Ji.L(t,n,a);var o=us;if(o&&t&&n){var c='link[rel="preload"][as="'+kt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+kt(a.imageSizes)+'"]')):c+='[href="'+kt(t)+'"]';var d=c;switch(n){case"style":d=cs(t);break;case"script":d=fs(t)}ui.has(d)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ui.set(d,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(To(d))||n==="script"&&o.querySelector(Ao(d))||(n=o.createElement("link"),wn(n,"link",t),sn(n),o.head.appendChild(n)))}}function Uy(t,n){Ji.m(t,n);var a=us;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+kt(o)+'"][href="'+kt(t)+'"]',d=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=fs(t)}if(!ui.has(d)&&(t=g({rel:"modulepreload",href:t},n),ui.set(d,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ao(d)))return}o=a.createElement("link"),wn(o,"link",t),sn(o),a.head.appendChild(o)}}}function Ly(t,n,a){Ji.S(t,n,a);var o=us;if(o&&t){var c=_a(o).hoistableStyles,d=cs(t);n=n||"default";var S=c.get(d);if(!S){var T={loading:0,preload:null};if(S=o.querySelector(To(d)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ui.get(d))&&jf(t,a);var I=S=o.createElement("link");sn(I),wn(I,"link",t),I._p=new Promise(function($,me){I.onload=$,I.onerror=me}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,$l(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:T},c.set(d,S)}}}function Ny(t,n){Ji.X(t,n);var a=us;if(a&&t){var o=_a(a).hoistableScripts,c=fs(t),d=o.get(c);d||(d=a.querySelector(Ao(c)),d||(t=g({src:t,async:!0},n),(n=ui.get(c))&&Zf(t,n),d=a.createElement("script"),sn(d),wn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function Oy(t,n){Ji.M(t,n);var a=us;if(a&&t){var o=_a(a).hoistableScripts,c=fs(t),d=o.get(c);d||(d=a.querySelector(Ao(c)),d||(t=g({src:t,async:!0,type:"module"},n),(n=ui.get(c))&&Zf(t,n),d=a.createElement("script"),sn(d),wn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function d_(t,n,a,o){var c=(c=Ee.current)?Jl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=cs(a.href),a=_a(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=cs(a.href);var d=_a(c).hoistableStyles,S=d.get(t);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,S),(d=c.querySelector(To(t)))&&!d._p&&(S.instance=d,S.state.loading=5),ui.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(t,a),d||Py(c,t,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fs(a),a=_a(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function cs(t){return'href="'+kt(t)+'"'}function To(t){return'link[rel="stylesheet"]['+t+"]"}function h_(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Py(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),sn(n),t.head.appendChild(n))}function fs(t){return'[src="'+kt(t)+'"]'}function Ao(t){return"script[async]"+t}function p_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+kt(a.href)+'"]');if(o)return n.instance=o,sn(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),sn(o),wn(o,"style",c),$l(o,a.precedence,t),n.instance=o;case"stylesheet":c=cs(a.href);var d=t.querySelector(To(c));if(d)return n.state.loading|=4,n.instance=d,sn(d),d;o=h_(a),(c=ui.get(c))&&jf(o,c),d=(t.ownerDocument||t).createElement("link"),sn(d);var S=d;return S._p=new Promise(function(T,I){S.onload=T,S.onerror=I}),wn(d,"link",o),n.state.loading|=4,$l(d,a.precedence,t),n.instance=d;case"script":return d=fs(a.src),(c=t.querySelector(Ao(d)))?(n.instance=c,sn(c),c):(o=a,(c=ui.get(d))&&(o=g({},a),Zf(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),sn(c),wn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,$l(o,a.precedence,t));return n.instance}function $l(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,d=c,S=0;S<o.length;S++){var T=o[S];if(T.dataset.precedence===n)d=T;else if(d!==c)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function jf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var eu=null;function m_(t,n,a){if(eu===null){var o=new Map,c=eu=new Map;c.set(a,o)}else c=eu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var d=a[c];if(!(d[ma]||d[fn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=t+S;var T=o.get(S);T?T.push(d):o.set(S,[d])}}return o}function g_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Iy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function __(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ro=null;function By(){}function zy(t,n,a){if(Ro===null)throw Error(r(475));var o=Ro;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=cs(a.href),d=t.querySelector(To(c));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=tu.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=d,sn(d);return}d=t.ownerDocument||t,a=h_(a),(c=ui.get(c))&&jf(a,c),d=d.createElement("link"),sn(d);var S=d;S._p=new Promise(function(T,I){S.onload=T,S.onerror=I}),wn(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=tu.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function Fy(){if(Ro===null)throw Error(r(475));var t=Ro;return t.stylesheets&&t.count===0&&Kf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Kf(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function tu(){if(this.count--,this.count===0){if(this.stylesheets)Kf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var nu=null;function Kf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,nu=new Map,n.forEach(Hy,t),nu=null,tu.call(t))}function Hy(t,n){if(!(n.state.loading&4)){var a=nu.get(t);if(a)var o=a.get(null);else{a=new Map,nu.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var S=c[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),d=a.get(S)||o,d===o&&a.set(null,c),a.set(S,c),this.count++,o=tu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),d?d.parentNode.insertBefore(c,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Co={$$typeof:L,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Gy(t,n,a,o,c,d,S,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function v_(t,n,a,o,c,d,S,T,I,$,me,ye){return t=new Gy(t,n,a,S,T,I,$,ye),n=1,d===!0&&(n|=24),d=Yn(3,null,null,n),t.current=d,d.stateNode=t,n=Dc(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Oc(d),t}function x_(t){return t?(t=Vr,t):Vr}function y_(t,n,a,o,c,d){c=x_(c),o.context===null?o.context=c:o.pendingContext=c,o=Ea(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ma(t,o,n),a!==null&&(Jn(a,t,n),io(a,t,n))}function S_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Qf(t,n){S_(t,n),(t=t.alternate)&&S_(t,n)}function E_(t){if(t.tag===13){var n=Gr(t,67108864);n!==null&&Jn(n,t,67108864),Qf(t,67108864)}}var iu=!0;function Vy(t,n,a,o){var c=P.T;P.T=null;var d=q.p;try{q.p=2,Jf(t,n,a,o)}finally{q.p=d,P.T=c}}function ky(t,n,a,o){var c=P.T;P.T=null;var d=q.p;try{q.p=8,Jf(t,n,a,o)}finally{q.p=d,P.T=c}}function Jf(t,n,a,o){if(iu){var c=$f(o);if(c===null)Ff(t,n,o,au,a),b_(t,o);else if(Wy(c,t,n,a,o))o.stopPropagation();else if(b_(t,o),n&4&&-1<Xy.indexOf(t)){for(;c!==null;){var d=Pi(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=je(d.pendingLanes);if(S!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var I=1<<31-Ie(S);T.entanglements[1]|=I,S&=~I}Ri(d),(Lt&6)===0&&(Gl=gt()+500,So(0))}}break;case 13:T=Gr(d,2),T!==null&&Jn(T,d,2),kl(),Qf(d,2)}if(d=$f(o),d===null&&Ff(t,n,o,au,a),d===c)break;c=d}c!==null&&o.stopPropagation()}else Ff(t,n,o,null,a)}}function $f(t){return t=ic(t),ed(t)}var au=null;function ed(t){if(au=null,t=Oi(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return au=t,null}function M_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ke()){case xt:return 2;case Ke:return 8;case ot:case Jt:return 32;case N:return 268435456;default:return 32}default:return 32}}var td=!1,Ia=null,Ba=null,za=null,wo=new Map,Do=new Map,Fa=[],Xy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function b_(t,n){switch(t){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":Ba=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Uo(t,n,a,o,c,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[c]},n!==null&&(n=Pi(n),n!==null&&E_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Wy(t,n,a,o,c){switch(n){case"focusin":return Ia=Uo(Ia,t,n,a,o,c),!0;case"dragenter":return Ba=Uo(Ba,t,n,a,o,c),!0;case"mouseover":return za=Uo(za,t,n,a,o,c),!0;case"pointerover":var d=c.pointerId;return wo.set(d,Uo(wo.get(d)||null,t,n,a,o,c)),!0;case"gotpointercapture":return d=c.pointerId,Do.set(d,Uo(Do.get(d)||null,t,n,a,o,c)),!0}return!1}function T_(t){var n=Oi(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Wn(t.priority,function(){if(a.tag===13){var o=Qn();o=rt(o);var c=Gr(a,o);c!==null&&Jn(c,a,o),Qf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ru(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=$f(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);nc=o,a.target.dispatchEvent(o),nc=null}else return n=Pi(a),n!==null&&E_(n),t.blockedOn=a,!1;n.shift()}return!0}function A_(t,n,a){ru(t)&&a.delete(n)}function qy(){td=!1,Ia!==null&&ru(Ia)&&(Ia=null),Ba!==null&&ru(Ba)&&(Ba=null),za!==null&&ru(za)&&(za=null),wo.forEach(A_),Do.forEach(A_)}function su(t,n){t.blockedOn===n&&(t.blockedOn=null,td||(td=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,qy)))}var ou=null;function R_(t){ou!==t&&(ou=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ou===t&&(ou=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(ed(o||a)===null)continue;break}var d=Pi(a);d!==null&&(t.splice(n,3),n-=3,$c(d,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Lo(t){function n(I){return su(I,t)}Ia!==null&&su(Ia,t),Ba!==null&&su(Ba,t),za!==null&&su(za,t),wo.forEach(n),Do.forEach(n);for(var a=0;a<Fa.length;a++){var o=Fa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Fa.length&&(a=Fa[0],a.blockedOn===null);)T_(a),a.blockedOn===null&&Fa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],d=a[o+1],S=c[Tn]||null;if(typeof d=="function")S||R_(a);else if(S){var T=null;if(d&&d.hasAttribute("formAction")){if(c=d,S=d[Tn]||null)T=S.formAction;else if(ed(c)!==null)continue}else T=S.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),R_(a)}}}function nd(t){this._internalRoot=t}lu.prototype.render=nd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Qn();y_(a,o,t,n,null,null)},lu.prototype.unmount=nd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;y_(t.current,2,null,t,null,null),kl(),n[Bn]=null}};function lu(t){this._internalRoot=t}lu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Tt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Fa.length&&n!==0&&n<Fa[a].priority;a++);Fa.splice(a,0,t),a===0&&T_(t)}};var C_=e.version;if(C_!=="19.1.1")throw Error(r(527,C_,"19.1.1"));q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var Yy={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uu.isDisabled&&uu.supportsFiber)try{ge=uu.inject(Yy),ve=uu}catch{}}return Oo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",c=Xm,d=Wm,S=qm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=v_(t,1,!1,null,null,a,o,c,d,S,T,null),t[Bn]=n.current,zf(t),new nd(n)},Oo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,c="",d=Xm,S=Wm,T=qm,I=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=v_(t,1,!0,n,a??null,o,c,d,S,T,I,$),n.context=x_(null),a=n.current,o=Qn(),o=rt(o),c=Ea(o),c.callback=null,Ma(a,c,o),a=o,n.current.lanes=a,ze(n,a),Ri(n),t[Bn]=n.current,zf(t),new lu(n)},Oo.version="19.1.1",Oo}var z_;function iS(){if(z_)return rd.exports;z_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),rd.exports=nS(),rd.exports}var aS=iS();/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),sS=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),F_=s=>{const e=sS(s);return e.charAt(0).toUpperCase()+e.slice(1)},Kv=(...s)=>s.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim(),oS=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=fe.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:u,iconNode:f,...h},m)=>fe.createElement("svg",{ref:m,...lS,width:e,height:e,stroke:s,strokeWidth:r?Number(i)*24/Number(e):i,className:Kv("lucide",l),...!u&&!oS(h)&&{"aria-hidden":"true"},...h},[...f.map(([p,g])=>fe.createElement(p,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=(s,e)=>{const i=fe.forwardRef(({className:r,...l},u)=>fe.createElement(uS,{ref:u,iconNode:e,className:Kv(`lucide-${rS(F_(s))}`,`lucide-${s}`,r),...l}));return i.displayName=F_(s),i};/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],fS=ha("book",cS);/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],Bh=ha("code",dS);/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Qv=ha("file-text",hS);/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]],mS=ha("git-pull-request",pS);/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],zh=ha("github",gS);/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],vS=ha("house",_S);/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],Fh=ha("message-circle",xS);/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],SS=ha("moon",yS);/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Jv=ha("sun",ES);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hh="178",MS=0,H_=1,bS=2,$v=1,TS=2,aa=3,Ka=0,kn=1,ra=2,ja=0,Rs=1,G_=2,V_=3,k_=4,AS=5,Tr=100,RS=101,CS=102,wS=103,DS=104,US=200,LS=201,NS=202,OS=203,qd=204,Yd=205,PS=206,IS=207,BS=208,zS=209,FS=210,HS=211,GS=212,VS=213,kS=214,jd=0,Zd=1,Kd=2,Ds=3,Qd=4,Jd=5,$d=6,eh=7,e0=0,XS=1,WS=2,Za=0,qS=1,YS=2,jS=3,ZS=4,KS=5,QS=6,JS=7,t0=300,Us=301,Ls=302,th=303,nh=304,Zu=306,ih=1e3,Rr=1001,ah=1002,Si=1003,$S=1004,cu=1005,wi=1006,ud=1007,Cr=1008,ca=1009,n0=1010,i0=1011,Vo=1012,Gh=1013,Dr=1014,sa=1015,Yo=1016,Vh=1017,kh=1018,ko=1020,a0=35902,r0=1021,s0=1022,yi=1023,Xo=1026,Wo=1027,o0=1028,Xh=1029,l0=1030,Wh=1031,qh=1033,Pu=33776,Iu=33777,Bu=33778,zu=33779,rh=35840,sh=35841,oh=35842,lh=35843,uh=36196,ch=37492,fh=37496,dh=37808,hh=37809,ph=37810,mh=37811,gh=37812,_h=37813,vh=37814,xh=37815,yh=37816,Sh=37817,Eh=37818,Mh=37819,bh=37820,Th=37821,Fu=36492,Ah=36494,Rh=36495,u0=36283,Ch=36284,wh=36285,Dh=36286,eE=3200,tE=3201,nE=0,iE=1,Ya="",fi="srgb",Ns="srgb-linear",Xu="linear",zt="srgb",ds=7680,X_=519,aE=512,rE=513,sE=514,c0=515,oE=516,lE=517,uE=518,cE=519,W_=35044,q_="300 es",oa=2e3,Wu=2001;class Ps{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cd=Math.PI/180,Uh=180/Math.PI;function jo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function St(s,e,i){return Math.max(e,Math.min(i,s))}function fE(s,e){return(s%e+e)%e}function fd(s,e,i){return(1-i)*s+i*e}function Po(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Vn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ht{constructor(e=0,i=0){Ht.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*l+e.x,this.y=u*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,f,h){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=u[f+0],E=u[f+1],M=u[f+2],R=u[f+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v;return}if(h===1){e[i+0]=x,e[i+1]=E,e[i+2]=M,e[i+3]=R;return}if(v!==R||m!==x||p!==E||g!==M){let y=1-h;const _=m*x+p*E+g*M+v*R,O=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const H=Math.sqrt(L),k=Math.atan2(H,_*O);y=Math.sin(y*k)/H,h=Math.sin(h*k)/H}const U=h*O;if(m=m*y+x*U,p=p*y+E*U,g=g*y+M*U,v=v*y+R*U,y===1-h){const H=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=H,p*=H,g*=H,v*=H}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,f){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=u[f],x=u[f+1],E=u[f+2],M=u[f+3];return e[i]=h*M+g*v+m*E-p*x,e[i+1]=m*M+g*x+p*v-h*E,e[i+2]=p*M+g*E+h*x-m*v,e[i+3]=g*M-h*v-m*x-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),v=h(u/2),x=m(r/2),E=m(l/2),M=m(u/2);switch(f){case"XYZ":this._x=x*g*v+p*E*M,this._y=p*E*v-x*g*M,this._z=p*g*M+x*E*v,this._w=p*g*v-x*E*M;break;case"YXZ":this._x=x*g*v+p*E*M,this._y=p*E*v-x*g*M,this._z=p*g*M-x*E*v,this._w=p*g*v+x*E*M;break;case"ZXY":this._x=x*g*v-p*E*M,this._y=p*E*v+x*g*M,this._z=p*g*M+x*E*v,this._w=p*g*v-x*E*M;break;case"ZYX":this._x=x*g*v-p*E*M,this._y=p*E*v+x*g*M,this._z=p*g*M-x*E*v,this._w=p*g*v+x*E*M;break;case"YZX":this._x=x*g*v+p*E*M,this._y=p*E*v+x*g*M,this._z=p*g*M-x*E*v,this._w=p*g*v-x*E*M;break;case"XZY":this._x=x*g*v-p*E*M,this._y=p*E*v-x*g*M,this._z=p*g*M+x*E*v,this._w=p*g*v+x*E*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],f=i[1],h=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=r+h+v;if(x>0){const E=.5/Math.sqrt(x+1);this._w=.25/E,this._x=(g-m)*E,this._y=(u-p)*E,this._z=(f-l)*E}else if(r>h&&r>v){const E=2*Math.sqrt(1+r-h-v);this._w=(g-m)/E,this._x=.25*E,this._y=(l+f)/E,this._z=(u+p)/E}else if(h>v){const E=2*Math.sqrt(1+h-r-v);this._w=(u-p)/E,this._x=(l+f)/E,this._y=.25*E,this._z=(m+g)/E}else{const E=2*Math.sqrt(1+v-r-h);this._w=(f-l)/E,this._x=(u+p)/E,this._y=(m+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,f=e._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+f*h+l*p-u*m,this._y=l*g+f*m+u*h-r*p,this._z=u*g+f*p+r*m-l*h,this._w=f*g-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,f=this._w;let h=f*e._w+r*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=f,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const E=1-i;return this._w=E*f+i*this._w,this._x=E*r+i*this._x,this._y=E*l+i*this._y,this._z=E*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=f*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,i=0,r=0){le.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Y_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Y_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,f=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*r),g=2*(h*i-u*l),v=2*(u*r-f*i);return this.x=i+m*p+f*v-h*g,this.y=r+m*g+h*p-u*v,this.z=l+m*v+u*g-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*f-r*m,this.z=r*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return dd.copy(this).projectOnVector(e),this.sub(dd)}reflect(e){return this.sub(dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dd=new le,Y_=new Zo;class ut{constructor(e,i,r,l,u,f,h,m,p){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,f,h,m,p)}set(e,i,r,l,u,f,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],E=r[5],M=r[8],R=l[0],y=l[3],_=l[6],O=l[1],L=l[4],U=l[7],H=l[2],k=l[5],z=l[8];return u[0]=f*R+h*O+m*H,u[3]=f*y+h*L+m*k,u[6]=f*_+h*U+m*z,u[1]=p*R+g*O+v*H,u[4]=p*y+g*L+v*k,u[7]=p*_+g*U+v*z,u[2]=x*R+E*O+M*H,u[5]=x*y+E*L+M*k,u[8]=x*_+E*U+M*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return i*f*g-i*h*p-r*u*g+r*h*m+l*u*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8],v=g*f-h*p,x=h*m-g*u,E=p*u-f*m,M=i*v+r*x+l*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/M;return e[0]=v*R,e[1]=(l*p-g*r)*R,e[2]=(h*r-l*f)*R,e[3]=x*R,e[4]=(g*i-l*m)*R,e[5]=(l*u-h*i)*R,e[6]=E*R,e[7]=(r*m-p*i)*R,e[8]=(f*i-r*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,f,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(hd.makeScale(e,i)),this}rotate(e){return this.premultiply(hd.makeRotation(-e)),this}translate(e,i){return this.premultiply(hd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hd=new ut;function f0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function qu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function dE(){const s=qu("canvas");return s.style.display="block",s}const j_={};function Cs(s){s in j_||(j_[s]=!0,console.warn(s))}function hE(s,e,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function pE(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function mE(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Z_=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),K_=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gE(){const s={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===zt&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===zt&&(l.r=ws(l.r),l.g=ws(l.g),l.b=ws(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ya?Xu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Cs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Cs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ns]:{primaries:e,whitePoint:r,transfer:Xu,toXYZ:Z_,fromXYZ:K_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:r,transfer:zt,toXYZ:Z_,fromXYZ:K_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),s}const Rt=gE();function la(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let hs;class _E{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{hs===void 0&&(hs=qu("canvas")),hs.width=e.width,hs.height=e.height;const l=hs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=hs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=qu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=la(u[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(la(i[r]/255)*255):i[r]=la(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vE=0;class Yh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=jo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?u.push(pd(l[f].image)):u.push(pd(l[f]))}else u=pd(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function pd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_E.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xE=0;const md=new le;class Xn extends Ps{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=Rr,l=Rr,u=wi,f=Cr,h=yi,m=ca,p=Xn.DEFAULT_ANISOTROPY,g=Ya){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=jo(),this.name="",this.source=new Yh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(md).x}get height(){return this.source.getSize(md).y}get depth(){return this.source.getSize(md).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==t0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ih:e.x=e.x-Math.floor(e.x);break;case Rr:e.x=e.x<0?0:1;break;case ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ih:e.y=e.y-Math.floor(e.y);break;case Rr:e.y=e.y<0?0:1;break;case ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=t0;Xn.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,i=0,r=0,l=1){nn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],v=m[8],x=m[1],E=m[5],M=m[9],R=m[2],y=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-R)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+R)<.1&&Math.abs(M+y)<.1&&Math.abs(p+E+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,U=(E+1)/2,H=(_+1)/2,k=(g+x)/4,z=(v+R)/4,j=(M+y)/4;return L>U&&L>H?L<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(L),l=k/r,u=z/r):U>H?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=k/l,u=j/l):H<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),r=z/u,l=j/u),this.set(r,l,u,i),this}let O=Math.sqrt((y-M)*(y-M)+(v-R)*(v-R)+(x-g)*(x-g));return Math.abs(O)<.001&&(O=1),this.x=(y-M)/O,this.y=(v-R)/O,this.z=(x-g)/O,this.w=Math.acos((p+E+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this.w=St(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this.w=St(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yE extends Ps{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new nn(0,0,e,i),this.scissorTest=!1,this.viewport=new nn(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Xn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:wi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Yh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends yE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class d0 extends Xn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Si,this.minFilter=Si,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class SE extends Xn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Si,this.minFilter=Si,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(e=new le(1/0,1/0,1/0),i=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(gi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(gi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=gi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=u.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,gi):gi.fromBufferAttribute(u,f),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fu.copy(r.boundingBox)),fu.applyMatrix4(e.matrixWorld),this.union(fu)}const l=e.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),du.subVectors(this.max,Io),ps.subVectors(e.a,Io),ms.subVectors(e.b,Io),gs.subVectors(e.c,Io),Ga.subVectors(ms,ps),Va.subVectors(gs,ms),_r.subVectors(ps,gs);let i=[0,-Ga.z,Ga.y,0,-Va.z,Va.y,0,-_r.z,_r.y,Ga.z,0,-Ga.x,Va.z,0,-Va.x,_r.z,0,-_r.x,-Ga.y,Ga.x,0,-Va.y,Va.x,0,-_r.y,_r.x,0];return!gd(i,ps,ms,gs,du)||(i=[1,0,0,0,1,0,0,0,1],!gd(i,ps,ms,gs,du))?!1:(hu.crossVectors(Ga,Va),i=[hu.x,hu.y,hu.z],gd(i,ps,ms,gs,du))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $i=[new le,new le,new le,new le,new le,new le,new le,new le],gi=new le,fu=new Ko,ps=new le,ms=new le,gs=new le,Ga=new le,Va=new le,_r=new le,Io=new le,du=new le,hu=new le,vr=new le;function gd(s,e,i,r,l){for(let u=0,f=s.length-3;u<=f;u+=3){vr.fromArray(s,u);const h=l.x*Math.abs(vr.x)+l.y*Math.abs(vr.y)+l.z*Math.abs(vr.z),m=e.dot(vr),p=i.dot(vr),g=r.dot(vr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const EE=new Ko,Bo=new le,_d=new le;class jh{constructor(e=new le,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):EE.setFromPoints(e).getCenter(r);let l=0;for(let u=0,f=e.length;u<f;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Bo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_d.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(_d)),this.expandByPoint(Bo.copy(e.center).sub(_d))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ea=new le,vd=new le,pu=new le,ka=new le,xd=new le,mu=new le,yd=new le;class ME{constructor(e=new le,i=new le(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ea)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ea.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){vd.copy(e).add(i).multiplyScalar(.5),pu.copy(i).sub(e).normalize(),ka.copy(this.origin).sub(vd);const u=e.distanceTo(i)*.5,f=-this.direction.dot(pu),h=ka.dot(this.direction),m=-ka.dot(pu),p=ka.lengthSq(),g=Math.abs(1-f*f);let v,x,E,M;if(g>0)if(v=f*m-h,x=f*h-m,M=u*g,v>=0)if(x>=-M)if(x<=M){const R=1/g;v*=R,x*=R,E=v*(v+f*x+2*h)+x*(f*v+x+2*m)+p}else x=u,v=Math.max(0,-(f*x+h)),E=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(f*x+h)),E=-v*v+x*(x+2*m)+p;else x<=-M?(v=Math.max(0,-(-f*u+h)),x=v>0?-u:Math.min(Math.max(-u,-m),u),E=-v*v+x*(x+2*m)+p):x<=M?(v=0,x=Math.min(Math.max(-u,-m),u),E=x*(x+2*m)+p):(v=Math.max(0,-(f*u+h)),x=v>0?u:Math.min(Math.max(-u,-m),u),E=-v*v+x*(x+2*m)+p);else x=f>0?-u:u,v=Math.max(0,-(f*x+h)),E=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(vd).addScaledVector(pu,x),E}intersectSphere(e,i){ea.subVectors(e.center,this.origin);const r=ea.dot(this.direction),l=ea.dot(ea)-r*r,u=e.radius*e.radius;if(l>u)return null;const f=Math.sqrt(u-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),g>=0?(u=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),r>f||u>l||((u>r||isNaN(r))&&(r=u),(f<l||isNaN(l))&&(l=f),v>=0?(h=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(h=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ea)!==null}intersectTriangle(e,i,r,l,u){xd.subVectors(i,e),mu.subVectors(r,e),yd.crossVectors(xd,mu);let f=this.direction.dot(yd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;ka.subVectors(this.origin,e);const m=h*this.direction.dot(mu.crossVectors(ka,mu));if(m<0)return null;const p=h*this.direction.dot(xd.cross(ka));if(p<0||m+p>f)return null;const g=-h*ka.dot(yd);return g<0?null:this.at(g/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(e,i,r,l,u,f,h,m,p,g,v,x,E,M,R,y){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,f,h,m,p,g,v,x,E,M,R,y)}set(e,i,r,l,u,f,h,m,p,g,v,x,E,M,R,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=f,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=E,_[7]=M,_[11]=R,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/_s.setFromMatrixColumn(e,0).length(),u=1/_s.setFromMatrixColumn(e,1).length(),f=1/_s.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=f*g,E=f*v,M=h*g,R=h*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=E+M*p,i[5]=x-R*p,i[9]=-h*m,i[2]=R-x*p,i[6]=M+E*p,i[10]=f*m}else if(e.order==="YXZ"){const x=m*g,E=m*v,M=p*g,R=p*v;i[0]=x+R*h,i[4]=M*h-E,i[8]=f*p,i[1]=f*v,i[5]=f*g,i[9]=-h,i[2]=E*h-M,i[6]=R+x*h,i[10]=f*m}else if(e.order==="ZXY"){const x=m*g,E=m*v,M=p*g,R=p*v;i[0]=x-R*h,i[4]=-f*v,i[8]=M+E*h,i[1]=E+M*h,i[5]=f*g,i[9]=R-x*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const x=f*g,E=f*v,M=h*g,R=h*v;i[0]=m*g,i[4]=M*p-E,i[8]=x*p+R,i[1]=m*v,i[5]=R*p+x,i[9]=E*p-M,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const x=f*m,E=f*p,M=h*m,R=h*p;i[0]=m*g,i[4]=R-x*v,i[8]=M*v+E,i[1]=v,i[5]=f*g,i[9]=-h*g,i[2]=-p*g,i[6]=E*v+M,i[10]=x-R*v}else if(e.order==="XZY"){const x=f*m,E=f*p,M=h*m,R=h*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+R,i[5]=f*g,i[9]=E*v-M,i[2]=M*v-E,i[6]=h*g,i[10]=R*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bE,e,TE)}lookAt(e,i,r){const l=this.elements;return $n.subVectors(e,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Xa.crossVectors(r,$n),Xa.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Xa.crossVectors(r,$n)),Xa.normalize(),gu.crossVectors($n,Xa),l[0]=Xa.x,l[4]=gu.x,l[8]=$n.x,l[1]=Xa.y,l[5]=gu.y,l[9]=$n.y,l[2]=Xa.z,l[6]=gu.z,l[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],E=r[13],M=r[2],R=r[6],y=r[10],_=r[14],O=r[3],L=r[7],U=r[11],H=r[15],k=l[0],z=l[4],j=l[8],D=l[12],w=l[1],G=l[5],oe=l[9],ae=l[13],xe=l[2],ue=l[6],P=l[10],q=l[14],Y=l[3],Me=l[7],A=l[11],B=l[15];return u[0]=f*k+h*w+m*xe+p*Y,u[4]=f*z+h*G+m*ue+p*Me,u[8]=f*j+h*oe+m*P+p*A,u[12]=f*D+h*ae+m*q+p*B,u[1]=g*k+v*w+x*xe+E*Y,u[5]=g*z+v*G+x*ue+E*Me,u[9]=g*j+v*oe+x*P+E*A,u[13]=g*D+v*ae+x*q+E*B,u[2]=M*k+R*w+y*xe+_*Y,u[6]=M*z+R*G+y*ue+_*Me,u[10]=M*j+R*oe+y*P+_*A,u[14]=M*D+R*ae+y*q+_*B,u[3]=O*k+L*w+U*xe+H*Y,u[7]=O*z+L*G+U*ue+H*Me,u[11]=O*j+L*oe+U*P+H*A,u[15]=O*D+L*ae+U*q+H*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],f=e[1],h=e[5],m=e[9],p=e[13],g=e[2],v=e[6],x=e[10],E=e[14],M=e[3],R=e[7],y=e[11],_=e[15];return M*(+u*m*v-l*p*v-u*h*x+r*p*x+l*h*E-r*m*E)+R*(+i*m*E-i*p*x+u*f*x-l*f*E+l*p*g-u*m*g)+y*(+i*p*v-i*h*E-u*f*v+r*f*E+u*h*g-r*p*g)+_*(-l*h*g-i*m*v+i*h*x+l*f*v-r*f*x+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8],v=e[9],x=e[10],E=e[11],M=e[12],R=e[13],y=e[14],_=e[15],O=v*y*p-R*x*p+R*m*E-h*y*E-v*m*_+h*x*_,L=M*x*p-g*y*p-M*m*E+f*y*E+g*m*_-f*x*_,U=g*R*p-M*v*p+M*h*E-f*R*E-g*h*_+f*v*_,H=M*v*m-g*R*m-M*h*x+f*R*x+g*h*y-f*v*y,k=i*O+r*L+l*U+u*H;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/k;return e[0]=O*z,e[1]=(R*x*u-v*y*u-R*l*E+r*y*E+v*l*_-r*x*_)*z,e[2]=(h*y*u-R*m*u+R*l*p-r*y*p-h*l*_+r*m*_)*z,e[3]=(v*m*u-h*x*u-v*l*p+r*x*p+h*l*E-r*m*E)*z,e[4]=L*z,e[5]=(g*y*u-M*x*u+M*l*E-i*y*E-g*l*_+i*x*_)*z,e[6]=(M*m*u-f*y*u-M*l*p+i*y*p+f*l*_-i*m*_)*z,e[7]=(f*x*u-g*m*u+g*l*p-i*x*p-f*l*E+i*m*E)*z,e[8]=U*z,e[9]=(M*v*u-g*R*u-M*r*E+i*R*E+g*r*_-i*v*_)*z,e[10]=(f*R*u-M*h*u+M*r*p-i*R*p-f*r*_+i*h*_)*z,e[11]=(g*h*u-f*v*u-g*r*p+i*v*p+f*r*E-i*h*E)*z,e[12]=H*z,e[13]=(g*R*l-M*v*l+M*r*x-i*R*x-g*r*y+i*v*y)*z,e[14]=(M*h*l-f*R*l-M*r*m+i*R*m+f*r*y-i*h*y)*z,e[15]=(f*v*l-g*h*l+g*r*m-i*v*m-f*r*x+i*h*x)*z,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,f=e.x,h=e.y,m=e.z,p=u*f,g=u*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*f,0,p*m-l*h,g*m+l*f,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,f){return this.set(1,r,u,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,f=i._y,h=i._z,m=i._w,p=u+u,g=f+f,v=h+h,x=u*p,E=u*g,M=u*v,R=f*g,y=f*v,_=h*v,O=m*p,L=m*g,U=m*v,H=r.x,k=r.y,z=r.z;return l[0]=(1-(R+_))*H,l[1]=(E+U)*H,l[2]=(M-L)*H,l[3]=0,l[4]=(E-U)*k,l[5]=(1-(x+_))*k,l[6]=(y+O)*k,l[7]=0,l[8]=(M+L)*z,l[9]=(y-O)*z,l[10]=(1-(x+R))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=_s.set(l[0],l[1],l[2]).length();const f=_s.set(l[4],l[5],l[6]).length(),h=_s.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],_i.copy(this);const p=1/u,g=1/f,v=1/h;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=g,_i.elements[5]*=g,_i.elements[6]*=g,_i.elements[8]*=v,_i.elements[9]*=v,_i.elements[10]*=v,i.setFromRotationMatrix(_i),r.x=u,r.y=f,r.z=h,this}makePerspective(e,i,r,l,u,f,h=oa){const m=this.elements,p=2*u/(i-e),g=2*u/(r-l),v=(i+e)/(i-e),x=(r+l)/(r-l);let E,M;if(h===oa)E=-(f+u)/(f-u),M=-2*f*u/(f-u);else if(h===Wu)E=-f/(f-u),M=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=M,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,f,h=oa){const m=this.elements,p=1/(i-e),g=1/(r-l),v=1/(f-u),x=(i+e)*p,E=(r+l)*g;let M,R;if(h===oa)M=(f+u)*v,R=-2*v;else if(h===Wu)M=u*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-E,m[2]=0,m[6]=0,m[10]=R,m[14]=-M,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const _s=new le,_i=new cn,bE=new le(0,0,0),TE=new le(1,1,1),Xa=new le,gu=new le,$n=new le,Q_=new cn,J_=new Zo;class fa{constructor(e=0,i=0,r=0,l=fa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(St(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Q_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Q_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return J_.setFromEuler(this),this.setFromQuaternion(J_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fa.DEFAULT_ORDER="XYZ";class h0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let AE=0;const $_=new le,vs=new Zo,ta=new cn,_u=new le,zo=new le,RE=new le,CE=new Zo,ev=new le(1,0,0),tv=new le(0,1,0),nv=new le(0,0,1),iv={type:"added"},wE={type:"removed"},xs={type:"childadded",child:null},Sd={type:"childremoved",child:null};class ni extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const e=new le,i=new fa,r=new Zo,l=new le(1,1,1);function u(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new cn},normalMatrix:{value:new ut}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new h0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return vs.setFromAxisAngle(e,i),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,i){return vs.setFromAxisAngle(e,i),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(ev,e)}rotateY(e){return this.rotateOnAxis(tv,e)}rotateZ(e){return this.rotateOnAxis(nv,e)}translateOnAxis(e,i){return $_.copy(e).applyQuaternion(this.quaternion),this.position.add($_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(ev,e)}translateY(e){return this.translateOnAxis(tv,e)}translateZ(e){return this.translateOnAxis(nv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?_u.copy(e):_u.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(zo,_u,this.up):ta.lookAt(_u,zo,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),vs.setFromRotationMatrix(ta),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(iv),xs.child=e,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(wE),Sd.child=e,this.dispatchEvent(Sd),Sd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(ta),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(iv),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,RE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,CE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),g=f(e.images),v=f(e.shapes),x=f(e.skeletons),E=f(e.animations),M=f(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),E.length>0&&(r.animations=E),M.length>0&&(r.nodes=M)}return r.object=l,r;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}ni.DEFAULT_UP=new le(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new le,na=new le,Ed=new le,ia=new le,ys=new le,Ss=new le,av=new le,Md=new le,bd=new le,Td=new le,Ad=new nn,Rd=new nn,Cd=new nn;class xi{constructor(e=new le,i=new le,r=new le){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),vi.subVectors(e,i),l.cross(vi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){vi.subVectors(l,i),na.subVectors(r,i),Ed.subVectors(e,i);const f=vi.dot(vi),h=vi.dot(na),m=vi.dot(Ed),p=na.dot(na),g=na.dot(Ed),v=f*p-h*h;if(v===0)return u.set(0,0,0),null;const x=1/v,E=(p*m-h*g)*x,M=(f*g-h*m)*x;return u.set(1-E-M,M,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(e,i,r,l,u,f,h,m){return this.getBarycoord(e,i,r,l,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ia.x),m.addScaledVector(f,ia.y),m.addScaledVector(h,ia.z),m)}static getInterpolatedAttribute(e,i,r,l,u,f){return Ad.setScalar(0),Rd.setScalar(0),Cd.setScalar(0),Ad.fromBufferAttribute(e,i),Rd.fromBufferAttribute(e,r),Cd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Ad,u.x),f.addScaledVector(Rd,u.y),f.addScaledVector(Cd,u.z),f}static isFrontFacing(e,i,r,l){return vi.subVectors(r,i),na.subVectors(e,i),vi.cross(na).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),vi.cross(na).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return xi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return xi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let f,h;ys.subVectors(l,r),Ss.subVectors(u,r),Md.subVectors(e,r);const m=ys.dot(Md),p=Ss.dot(Md);if(m<=0&&p<=0)return i.copy(r);bd.subVectors(e,l);const g=ys.dot(bd),v=Ss.dot(bd);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(ys,f);Td.subVectors(e,u);const E=ys.dot(Td),M=Ss.dot(Td);if(M>=0&&E<=M)return i.copy(u);const R=E*p-m*M;if(R<=0&&p>=0&&M<=0)return h=p/(p-M),i.copy(r).addScaledVector(Ss,h);const y=g*M-E*v;if(y<=0&&v-g>=0&&E-M>=0)return av.subVectors(u,l),h=(v-g)/(v-g+(E-M)),i.copy(l).addScaledVector(av,h);const _=1/(y+R+x);return f=R*_,h=x*_,i.copy(r).addScaledVector(ys,f).addScaledVector(Ss,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const p0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wa={h:0,s:0,l:0},vu={h:0,s:0,l:0};function wd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Ft{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Rt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Rt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Rt.workingColorSpace){if(e=fE(e,1),i=St(i,0,1),r=St(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,f=2*r-u;this.r=wd(f,u,e+1/3),this.g=wd(f,u,e),this.b=wd(f,u,e-1/3)}return Rt.colorSpaceToWorking(this,l),this}setStyle(e,i=fi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=fi){const r=p0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Rt.workingToColorSpace(On.copy(this),e),Math.round(St(On.r*255,0,255))*65536+Math.round(St(On.g*255,0,255))*256+Math.round(St(On.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Rt.workingColorSpace){Rt.workingToColorSpace(On.copy(this),i);const r=On.r,l=On.g,u=On.b,f=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=g<=.5?v/(f+h):v/(2-f-h),f){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Rt.workingColorSpace){return Rt.workingToColorSpace(On.copy(this),i),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=fi){Rt.workingToColorSpace(On.copy(this),e);const i=On.r,r=On.g,l=On.b;return e!==fi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Wa),this.setHSL(Wa.h+e,Wa.s+i,Wa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Wa),e.getHSL(vu);const r=fd(Wa.h,vu.h,i),l=fd(Wa.s,vu.s,i),u=fd(Wa.l,vu.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Ft;Ft.NAMES=p0;let DE=0;class Ku extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=Rs,this.side=Ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qd,this.blendDst=Yd,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(r.blending=this.blending),this.side!==Ka&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==qd&&(r.blendSrc=this.blendSrc),this.blendDst!==Yd&&(r.blendDst=this.blendDst),this.blendEquation!==Tr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==X_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const f=[];for(const h in u){const m=u[h];delete m.metadata,f.push(m)}return f}if(i){const u=l(e.textures),f=l(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zh extends Ku{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fa,this.combine=e0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new le,xu=new Ht;let UE=0;class Ui{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:UE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=W_,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)xu.fromBufferAttribute(this,i),xu.applyMatrix3(e),this.setXY(i,xu.x,xu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Po(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Vn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Po(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Po(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Po(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Po(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==W_&&(e.usage=this.usage),e}}class m0 extends Ui{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class g0 extends Ui{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class wr extends Ui{constructor(e,i,r){super(new Float32Array(e),i,r)}}let LE=0;const ci=new cn,Dd=new ni,Es=new le,ei=new Ko,Fo=new Ko,Mn=new le;class Nr extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(f0(e)?g0:m0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ut().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,i,r){return ci.makeTranslation(e,i,r),this.applyMatrix4(ci),this}scale(e,i,r){return ci.makeScale(e,i,r),this.applyMatrix4(ci),this}lookAt(e){return Dd.lookAt(e),Dd.updateMatrix(),this.applyMatrix4(Dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new wr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ei.setFromBufferAttribute(u),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),i)for(let u=0,f=i.length;u<f;u++){const h=i[u];Fo.setFromBufferAttribute(h),this.morphTargetsRelative?(Mn.addVectors(ei.min,Fo.min),ei.expandByPoint(Mn),Mn.addVectors(ei.max,Fo.max),ei.expandByPoint(Mn)):(ei.expandByPoint(Fo.min),ei.expandByPoint(Fo.max))}ei.getCenter(r);let l=0;for(let u=0,f=e.count;u<f;u++)Mn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(Mn));if(i)for(let u=0,f=i.length;u<f;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Mn.fromBufferAttribute(h,p),m&&(Es.fromBufferAttribute(e,p),Mn.add(Es)),l=Math.max(l,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let j=0;j<r.count;j++)h[j]=new le,m[j]=new le;const p=new le,g=new le,v=new le,x=new Ht,E=new Ht,M=new Ht,R=new le,y=new le;function _(j,D,w){p.fromBufferAttribute(r,j),g.fromBufferAttribute(r,D),v.fromBufferAttribute(r,w),x.fromBufferAttribute(u,j),E.fromBufferAttribute(u,D),M.fromBufferAttribute(u,w),g.sub(p),v.sub(p),E.sub(x),M.sub(x);const G=1/(E.x*M.y-M.x*E.y);isFinite(G)&&(R.copy(g).multiplyScalar(M.y).addScaledVector(v,-E.y).multiplyScalar(G),y.copy(v).multiplyScalar(E.x).addScaledVector(g,-M.x).multiplyScalar(G),h[j].add(R),h[D].add(R),h[w].add(R),m[j].add(y),m[D].add(y),m[w].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let j=0,D=O.length;j<D;++j){const w=O[j],G=w.start,oe=w.count;for(let ae=G,xe=G+oe;ae<xe;ae+=3)_(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const L=new le,U=new le,H=new le,k=new le;function z(j){H.fromBufferAttribute(l,j),k.copy(H);const D=h[j];L.copy(D),L.sub(H.multiplyScalar(H.dot(D))).normalize(),U.crossVectors(k,D);const G=U.dot(m[j])<0?-1:1;f.setXYZW(j,L.x,L.y,L.z,G)}for(let j=0,D=O.length;j<D;++j){const w=O[j],G=w.start,oe=w.count;for(let ae=G,xe=G+oe;ae<xe;ae+=3)z(e.getX(ae+0)),z(e.getX(ae+1)),z(e.getX(ae+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,E=r.count;x<E;x++)r.setXYZ(x,0,0,0);const l=new le,u=new le,f=new le,h=new le,m=new le,p=new le,g=new le,v=new le;if(e)for(let x=0,E=e.count;x<E;x+=3){const M=e.getX(x+0),R=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,y),g.subVectors(f,u),v.subVectors(l,u),g.cross(v),h.fromBufferAttribute(r,M),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,y),h.add(g),m.add(g),p.add(g),r.setXYZ(M,h.x,h.y,h.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,E=i.count;x<E;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,u),v.subVectors(l,u),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,v=h.normalized,x=new p.constructor(m.length*g);let E=0,M=0;for(let R=0,y=m.length;R<y;R++){h.isInterleavedBufferAttribute?E=m[R]*h.data.stride+h.offset:E=m[R]*g;for(let _=0;_<g;_++)x[M++]=p[E++]}return new Ui(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Nr,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let g=0,v=p.length;g<v;g++){const x=p[g],E=e(x,r);m.push(E)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const E=p[v];g.push(E.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],v=u[p];for(let x=0,E=v.length;x<E;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,g=f.length;p<g;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rv=new cn,xr=new ME,yu=new jh,sv=new le,Su=new le,Eu=new le,Mu=new le,Ud=new le,bu=new le,ov=new le,Tu=new le;class Di extends ni{constructor(e=new Nr,i=new Zh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){bu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=h[m],v=u[m];g!==0&&(Ud.fromBufferAttribute(v,e),f?bu.addScaledVector(Ud,g):bu.addScaledVector(Ud.sub(i),g))}i.add(bu)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),yu.copy(r.boundingSphere),yu.applyMatrix4(u),xr.copy(e.ray).recast(e.near),!(yu.containsPoint(xr.origin)===!1&&(xr.intersectSphere(yu,sv)===null||xr.origin.distanceToSquared(sv)>(e.far-e.near)**2))&&(rv.copy(u).invert(),xr.copy(e.ray).applyMatrix4(rv),!(r.boundingBox!==null&&xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,xr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,f=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,E=u.drawRange;if(h!==null)if(Array.isArray(f))for(let M=0,R=x.length;M<R;M++){const y=x[M],_=f[y.materialIndex],O=Math.max(y.start,E.start),L=Math.min(h.count,Math.min(y.start+y.count,E.start+E.count));for(let U=O,H=L;U<H;U+=3){const k=h.getX(U),z=h.getX(U+1),j=h.getX(U+2);l=Au(this,_,e,r,p,g,v,k,z,j),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const M=Math.max(0,E.start),R=Math.min(h.count,E.start+E.count);for(let y=M,_=R;y<_;y+=3){const O=h.getX(y),L=h.getX(y+1),U=h.getX(y+2);l=Au(this,f,e,r,p,g,v,O,L,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let M=0,R=x.length;M<R;M++){const y=x[M],_=f[y.materialIndex],O=Math.max(y.start,E.start),L=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let U=O,H=L;U<H;U+=3){const k=U,z=U+1,j=U+2;l=Au(this,_,e,r,p,g,v,k,z,j),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const M=Math.max(0,E.start),R=Math.min(m.count,E.start+E.count);for(let y=M,_=R;y<_;y+=3){const O=y,L=y+1,U=y+2;l=Au(this,f,e,r,p,g,v,O,L,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function NE(s,e,i,r,l,u,f,h){let m;if(e.side===kn?m=r.intersectTriangle(f,u,l,!0,h):m=r.intersectTriangle(l,u,f,e.side===Ka,h),m===null)return null;Tu.copy(h),Tu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Tu);return p<i.near||p>i.far?null:{distance:p,point:Tu.clone(),object:s}}function Au(s,e,i,r,l,u,f,h,m,p){s.getVertexPosition(h,Su),s.getVertexPosition(m,Eu),s.getVertexPosition(p,Mu);const g=NE(s,e,i,r,Su,Eu,Mu,ov);if(g){const v=new le;xi.getBarycoord(ov,Su,Eu,Mu,v),l&&(g.uv=xi.getInterpolatedAttribute(l,h,m,p,v,new Ht)),u&&(g.uv1=xi.getInterpolatedAttribute(u,h,m,p,v,new Ht)),f&&(g.normal=xi.getInterpolatedAttribute(f,h,m,p,v,new le),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new le,materialIndex:0};xi.getNormal(Su,Eu,Mu,x.normal),g.face=x,g.barycoord=v}return g}class Is extends Nr{constructor(e=1,i=1,r=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:f};const h=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const m=[],p=[],g=[],v=[];let x=0,E=0;M("z","y","x",-1,-1,r,i,e,f,u,0),M("z","y","x",1,-1,r,i,-e,f,u,1),M("x","z","y",1,1,e,r,i,l,f,2),M("x","z","y",1,-1,e,r,-i,l,f,3),M("x","y","z",1,-1,e,i,r,l,u,4),M("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new wr(p,3)),this.setAttribute("normal",new wr(g,3)),this.setAttribute("uv",new wr(v,2));function M(R,y,_,O,L,U,H,k,z,j,D){const w=U/z,G=H/j,oe=U/2,ae=H/2,xe=k/2,ue=z+1,P=j+1;let q=0,Y=0;const Me=new le;for(let A=0;A<P;A++){const B=A*G-ae;for(let se=0;se<ue;se++){const de=se*w-oe;Me[R]=de*O,Me[y]=B*L,Me[_]=xe,p.push(Me.x,Me.y,Me.z),Me[R]=0,Me[y]=0,Me[_]=k>0?1:-1,g.push(Me.x,Me.y,Me.z),v.push(se/z),v.push(1-A/j),q+=1}}for(let A=0;A<j;A++)for(let B=0;B<z;B++){const se=x+B+ue*A,de=x+B+ue*(A+1),W=x+(B+1)+ue*(A+1),he=x+(B+1)+ue*A;m.push(se,de,he),m.push(de,W,he),Y+=6}h.addGroup(E,Y,D),E+=Y,x+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function In(s){const e={};for(let i=0;i<s.length;i++){const r=Os(s[i]);for(const l in r)e[l]=r[l]}return e}function OE(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function _0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const PE={clone:Os,merge:In};var IE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qa extends Ku{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IE,this.fragmentShader=BE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=OE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class v0 extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=oa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qa=new le,lv=new Ht,uv=new Ht;class di extends v0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Uh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uh*2*Math.atan(Math.tan(cd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qa.x,qa.y).multiplyScalar(-e/qa.z),qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(qa.x,qa.y).multiplyScalar(-e/qa.z)}getViewSize(e,i){return this.getViewBounds(e,lv,uv),i.subVectors(uv,lv)}setViewOffset(e,i,r,l,u,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(cd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;u+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ms=-90,bs=1;class zE extends ni{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new di(Ms,bs,e,i);l.layers=this.layers,this.add(l);const u=new di(Ms,bs,e,i);u.layers=this.layers,this.add(u);const f=new di(Ms,bs,e,i);f.layers=this.layers,this.add(f);const h=new di(Ms,bs,e,i);h.layers=this.layers,this.add(h);const m=new di(Ms,bs,e,i);m.layers=this.layers,this.add(m);const p=new di(Ms,bs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,f,h,m]=i;for(const p of i)this.remove(p);if(e===oa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Wu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,h,m,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,x,E),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class x0 extends Xn{constructor(e=[],i=Us,r,l,u,f,h,m,p,g){super(e,i,r,l,u,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class FE extends Ur{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new x0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Is(5,5,5),u=new Qa({name:"CubemapFromEquirect",uniforms:Os(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:ja});u.uniforms.tEquirect.value=i;const f=new Di(l,u),h=i.minFilter;return i.minFilter===Cr&&(i.minFilter=wi),new zE(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(u)}}class Ru extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HE={type:"move"};class Ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ru,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ru,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ru,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const R of e.hand.values()){const y=i.getJointPose(R,r),_=this._getHandJoint(p,R);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),E=.02,M=.005;p.inputState.pinching&&x>E+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=E-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(HE)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ru;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class GE extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fa,this.environmentIntensity=1,this.environmentRotation=new fa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Nd=new le,VE=new le,kE=new ut;class Mr{constructor(e=new le(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Nd.subVectors(r,i).cross(VE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Nd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||kE.getNormalMatrix(e),l=this.coplanarPoint(Nd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new jh,XE=new Ht(.5,.5),Cu=new le;class y0{constructor(e=new Mr,i=new Mr,r=new Mr,l=new Mr,u=new Mr,f=new Mr){this.planes=[e,i,r,l,u,f]}set(e,i,r,l,u,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=oa){const r=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],m=l[3],p=l[4],g=l[5],v=l[6],x=l[7],E=l[8],M=l[9],R=l[10],y=l[11],_=l[12],O=l[13],L=l[14],U=l[15];if(r[0].setComponents(m-u,x-p,y-E,U-_).normalize(),r[1].setComponents(m+u,x+p,y+E,U+_).normalize(),r[2].setComponents(m+f,x+g,y+M,U+O).normalize(),r[3].setComponents(m-f,x-g,y-M,U-O).normalize(),r[4].setComponents(m-h,x-v,y-R,U-L).normalize(),i===oa)r[5].setComponents(m+h,x+v,y+R,U+L).normalize();else if(i===Wu)r[5].setComponents(h,v,R,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){yr.center.set(0,0,0);const i=XE.distanceTo(e.center);return yr.radius=.7071067811865476+i,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Cu.x=l.normal.x>0?e.max.x:e.min.x,Cu.y=l.normal.y>0?e.max.y:e.min.y,Cu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Cu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class S0 extends Xn{constructor(e,i,r=Dr,l,u,f,h=Si,m=Si,p,g=Xo,v=1){if(g!==Xo&&g!==Wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:v};super(x,l,u,f,h,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Qu extends Nr{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,f=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,v=e/h,x=i/m,E=[],M=[],R=[],y=[];for(let _=0;_<g;_++){const O=_*x-f;for(let L=0;L<p;L++){const U=L*v-u;M.push(U,-O,0),R.push(0,0,1),y.push(L/h),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let O=0;O<h;O++){const L=O+p*_,U=O+p*(_+1),H=O+1+p*(_+1),k=O+1+p*_;E.push(L,U,k),E.push(U,H,k)}this.setIndex(E),this.setAttribute("position",new wr(M,3)),this.setAttribute("normal",new wr(R,3)),this.setAttribute("uv",new wr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qu(e.width,e.height,e.widthSegments,e.heightSegments)}}class WE extends Ku{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qE extends Ku{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class YE extends v0{constructor(e=-1,i=1,r=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,f=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class jE extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function cv(s,e,i,r){const l=ZE(r);switch(i){case r0:return s*e;case o0:return s*e/l.components*l.byteLength;case Xh:return s*e/l.components*l.byteLength;case l0:return s*e*2/l.components*l.byteLength;case Wh:return s*e*2/l.components*l.byteLength;case s0:return s*e*3/l.components*l.byteLength;case yi:return s*e*4/l.components*l.byteLength;case qh:return s*e*4/l.components*l.byteLength;case Pu:case Iu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Bu:case zu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sh:case lh:return Math.max(s,16)*Math.max(e,8)/4;case rh:case oh:return Math.max(s,8)*Math.max(e,8)/2;case uh:case ch:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case fh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ph:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case mh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case gh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case _h:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case vh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case xh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case yh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Mh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case bh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Th:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Fu:case Ah:case Rh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case u0:case Ch:return Math.ceil(s/4)*Math.ceil(e/4)*8;case wh:case Dh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ZE(s){switch(s){case ca:case n0:return{byteLength:1,components:1};case Vo:case i0:case Yo:return{byteLength:2,components:1};case Vh:case kh:return{byteLength:2,components:4};case Dr:case Gh:case sa:return{byteLength:4,components:1};case a0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function E0(){let s=null,e=!1,i=null,r=null;function l(u,f){i(u,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function KE(s){const e=new WeakMap;function i(h,m){const p=h.array,g=h.usage,v=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,g),h.onUploadCallback();let E;if(p instanceof Float32Array)E=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?E=s.HALF_FLOAT:E=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=s.SHORT;else if(p instanceof Uint32Array)E=s.UNSIGNED_INT;else if(p instanceof Int32Array)E=s.INT;else if(p instanceof Int8Array)E=s.BYTE;else if(p instanceof Uint8Array)E=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const g=m.array,v=m.updateRanges;if(s.bindBuffer(p,h),v.length===0)s.bufferSubData(p,0,g);else{v.sort((E,M)=>E.start-M.start);let x=0;for(let E=1;E<v.length;E++){const M=v[x],R=v[E];R.start<=M.start+M.count+1?M.count=Math.max(M.count,R.start+R.count-M.start):(++x,v[x]=R)}v.length=x+1;for(let E=0,M=v.length;E<M;E++){const R=v[E];s.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:f}}var QE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$E=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,SM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,EM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,MM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RM="gl_FragColor = linearToOutputTexel( gl_FragColor );",CM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,DM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,UM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,OM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,XM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ZM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,KM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,QM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,JM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$M=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ib=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ab=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ob=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ub=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,db=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ab=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Db=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ub=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Nb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ob=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ib=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$b=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,aT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_T=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ST=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,TT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,CT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:QE,alphahash_pars_fragment:JE,alphamap_fragment:$E,alphamap_pars_fragment:eM,alphatest_fragment:tM,alphatest_pars_fragment:nM,aomap_fragment:iM,aomap_pars_fragment:aM,batching_pars_vertex:rM,batching_vertex:sM,begin_vertex:oM,beginnormal_vertex:lM,bsdfs:uM,iridescence_fragment:cM,bumpmap_pars_fragment:fM,clipping_planes_fragment:dM,clipping_planes_pars_fragment:hM,clipping_planes_pars_vertex:pM,clipping_planes_vertex:mM,color_fragment:gM,color_pars_fragment:_M,color_pars_vertex:vM,color_vertex:xM,common:yM,cube_uv_reflection_fragment:SM,defaultnormal_vertex:EM,displacementmap_pars_vertex:MM,displacementmap_vertex:bM,emissivemap_fragment:TM,emissivemap_pars_fragment:AM,colorspace_fragment:RM,colorspace_pars_fragment:CM,envmap_fragment:wM,envmap_common_pars_fragment:DM,envmap_pars_fragment:UM,envmap_pars_vertex:LM,envmap_physical_pars_fragment:kM,envmap_vertex:NM,fog_vertex:OM,fog_pars_vertex:PM,fog_fragment:IM,fog_pars_fragment:BM,gradientmap_pars_fragment:zM,lightmap_pars_fragment:FM,lights_lambert_fragment:HM,lights_lambert_pars_fragment:GM,lights_pars_begin:VM,lights_toon_fragment:XM,lights_toon_pars_fragment:WM,lights_phong_fragment:qM,lights_phong_pars_fragment:YM,lights_physical_fragment:jM,lights_physical_pars_fragment:ZM,lights_fragment_begin:KM,lights_fragment_maps:QM,lights_fragment_end:JM,logdepthbuf_fragment:$M,logdepthbuf_pars_fragment:eb,logdepthbuf_pars_vertex:tb,logdepthbuf_vertex:nb,map_fragment:ib,map_pars_fragment:ab,map_particle_fragment:rb,map_particle_pars_fragment:sb,metalnessmap_fragment:ob,metalnessmap_pars_fragment:lb,morphinstance_vertex:ub,morphcolor_vertex:cb,morphnormal_vertex:fb,morphtarget_pars_vertex:db,morphtarget_vertex:hb,normal_fragment_begin:pb,normal_fragment_maps:mb,normal_pars_fragment:gb,normal_pars_vertex:_b,normal_vertex:vb,normalmap_pars_fragment:xb,clearcoat_normal_fragment_begin:yb,clearcoat_normal_fragment_maps:Sb,clearcoat_pars_fragment:Eb,iridescence_pars_fragment:Mb,opaque_fragment:bb,packing:Tb,premultiplied_alpha_fragment:Ab,project_vertex:Rb,dithering_fragment:Cb,dithering_pars_fragment:wb,roughnessmap_fragment:Db,roughnessmap_pars_fragment:Ub,shadowmap_pars_fragment:Lb,shadowmap_pars_vertex:Nb,shadowmap_vertex:Ob,shadowmask_pars_fragment:Pb,skinbase_vertex:Ib,skinning_pars_vertex:Bb,skinning_vertex:zb,skinnormal_vertex:Fb,specularmap_fragment:Hb,specularmap_pars_fragment:Gb,tonemapping_fragment:Vb,tonemapping_pars_fragment:kb,transmission_fragment:Xb,transmission_pars_fragment:Wb,uv_pars_fragment:qb,uv_pars_vertex:Yb,uv_vertex:jb,worldpos_vertex:Zb,background_vert:Kb,background_frag:Qb,backgroundCube_vert:Jb,backgroundCube_frag:$b,cube_vert:eT,cube_frag:tT,depth_vert:nT,depth_frag:iT,distanceRGBA_vert:aT,distanceRGBA_frag:rT,equirect_vert:sT,equirect_frag:oT,linedashed_vert:lT,linedashed_frag:uT,meshbasic_vert:cT,meshbasic_frag:fT,meshlambert_vert:dT,meshlambert_frag:hT,meshmatcap_vert:pT,meshmatcap_frag:mT,meshnormal_vert:gT,meshnormal_frag:_T,meshphong_vert:vT,meshphong_frag:xT,meshphysical_vert:yT,meshphysical_frag:ST,meshtoon_vert:ET,meshtoon_frag:MT,points_vert:bT,points_frag:TT,shadow_vert:AT,shadow_frag:RT,sprite_vert:CT,sprite_frag:wT},Oe={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Ci={basic:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ft(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:In([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:In([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Ft(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:In([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:In([Oe.points,Oe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:In([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:In([Oe.common,Oe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:In([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:In([Oe.sprite,Oe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:In([Oe.common,Oe.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:In([Oe.lights,Oe.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ci.physical={uniforms:In([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const wu={r:0,b:0,g:0},Sr=new fa,DT=new cn;function UT(s,e,i,r,l,u,f){const h=new Ft(0);let m=u===!0?0:1,p,g,v=null,x=0,E=null;function M(L){let U=L.isScene===!0?L.background:null;return U&&U.isTexture&&(U=(L.backgroundBlurriness>0?i:e).get(U)),U}function R(L){let U=!1;const H=M(L);H===null?_(h,m):H&&H.isColor&&(_(H,1),U=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,f):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(L,U){const H=M(U);H&&(H.isCubeTexture||H.mapping===Zu)?(g===void 0&&(g=new Di(new Is(1,1,1),new Qa({name:"BackgroundCubeMaterial",uniforms:Os(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,z,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Sr.copy(U.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),g.material.uniforms.envMap.value=H,g.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(DT.makeRotationFromEuler(Sr)),g.material.toneMapped=Rt.getTransfer(H.colorSpace)!==zt,(v!==H||x!==H.version||E!==s.toneMapping)&&(g.material.needsUpdate=!0,v=H,x=H.version,E=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new Di(new Qu(2,2),new Qa({name:"BackgroundMaterial",uniforms:Os(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(H.colorSpace)!==zt,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(v!==H||x!==H.version||E!==s.toneMapping)&&(p.material.needsUpdate=!0,v=H,x=H.version,E=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,U){L.getRGB(wu,_0(s)),r.buffers.color.setClear(wu.r,wu.g,wu.b,U,f)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,U=1){h.set(L),m=U,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(h,m)},render:R,addToRenderList:y,dispose:O}}function LT(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,f=!1;function h(w,G,oe,ae,xe){let ue=!1;const P=v(ae,oe,G);u!==P&&(u=P,p(u.object)),ue=E(w,ae,oe,xe),ue&&M(w,ae,oe,xe),xe!==null&&e.update(xe,s.ELEMENT_ARRAY_BUFFER),(ue||f)&&(f=!1,U(w,G,oe,ae),xe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(xe).buffer))}function m(){return s.createVertexArray()}function p(w){return s.bindVertexArray(w)}function g(w){return s.deleteVertexArray(w)}function v(w,G,oe){const ae=oe.wireframe===!0;let xe=r[w.id];xe===void 0&&(xe={},r[w.id]=xe);let ue=xe[G.id];ue===void 0&&(ue={},xe[G.id]=ue);let P=ue[ae];return P===void 0&&(P=x(m()),ue[ae]=P),P}function x(w){const G=[],oe=[],ae=[];for(let xe=0;xe<i;xe++)G[xe]=0,oe[xe]=0,ae[xe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:oe,attributeDivisors:ae,object:w,attributes:{},index:null}}function E(w,G,oe,ae){const xe=u.attributes,ue=G.attributes;let P=0;const q=oe.getAttributes();for(const Y in q)if(q[Y].location>=0){const A=xe[Y];let B=ue[Y];if(B===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(B=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(B=w.instanceColor)),A===void 0||A.attribute!==B||B&&A.data!==B.data)return!0;P++}return u.attributesNum!==P||u.index!==ae}function M(w,G,oe,ae){const xe={},ue=G.attributes;let P=0;const q=oe.getAttributes();for(const Y in q)if(q[Y].location>=0){let A=ue[Y];A===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(A=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(A=w.instanceColor));const B={};B.attribute=A,A&&A.data&&(B.data=A.data),xe[Y]=B,P++}u.attributes=xe,u.attributesNum=P,u.index=ae}function R(){const w=u.newAttributes;for(let G=0,oe=w.length;G<oe;G++)w[G]=0}function y(w){_(w,0)}function _(w,G){const oe=u.newAttributes,ae=u.enabledAttributes,xe=u.attributeDivisors;oe[w]=1,ae[w]===0&&(s.enableVertexAttribArray(w),ae[w]=1),xe[w]!==G&&(s.vertexAttribDivisor(w,G),xe[w]=G)}function O(){const w=u.newAttributes,G=u.enabledAttributes;for(let oe=0,ae=G.length;oe<ae;oe++)G[oe]!==w[oe]&&(s.disableVertexAttribArray(oe),G[oe]=0)}function L(w,G,oe,ae,xe,ue,P){P===!0?s.vertexAttribIPointer(w,G,oe,xe,ue):s.vertexAttribPointer(w,G,oe,ae,xe,ue)}function U(w,G,oe,ae){R();const xe=ae.attributes,ue=oe.getAttributes(),P=G.defaultAttributeValues;for(const q in ue){const Y=ue[q];if(Y.location>=0){let Me=xe[q];if(Me===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(Me=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(Me=w.instanceColor)),Me!==void 0){const A=Me.normalized,B=Me.itemSize,se=e.get(Me);if(se===void 0)continue;const de=se.buffer,W=se.type,he=se.bytesPerElement,Ee=W===s.INT||W===s.UNSIGNED_INT||Me.gpuType===Gh;if(Me.isInterleavedBufferAttribute){const Ae=Me.data,we=Ae.stride,at=Me.offset;if(Ae.isInstancedInterleavedBuffer){for(let Xe=0;Xe<Y.locationSize;Xe++)_(Y.location+Xe,Ae.meshPerAttribute);w.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Xe=0;Xe<Y.locationSize;Xe++)y(Y.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,de);for(let Xe=0;Xe<Y.locationSize;Xe++)L(Y.location+Xe,B/Y.locationSize,W,A,we*he,(at+B/Y.locationSize*Xe)*he,Ee)}else{if(Me.isInstancedBufferAttribute){for(let Ae=0;Ae<Y.locationSize;Ae++)_(Y.location+Ae,Me.meshPerAttribute);w.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ae=0;Ae<Y.locationSize;Ae++)y(Y.location+Ae);s.bindBuffer(s.ARRAY_BUFFER,de);for(let Ae=0;Ae<Y.locationSize;Ae++)L(Y.location+Ae,B/Y.locationSize,W,A,B*he,B/Y.locationSize*Ae*he,Ee)}}else if(P!==void 0){const A=P[q];if(A!==void 0)switch(A.length){case 2:s.vertexAttrib2fv(Y.location,A);break;case 3:s.vertexAttrib3fv(Y.location,A);break;case 4:s.vertexAttrib4fv(Y.location,A);break;default:s.vertexAttrib1fv(Y.location,A)}}}}O()}function H(){j();for(const w in r){const G=r[w];for(const oe in G){const ae=G[oe];for(const xe in ae)g(ae[xe].object),delete ae[xe];delete G[oe]}delete r[w]}}function k(w){if(r[w.id]===void 0)return;const G=r[w.id];for(const oe in G){const ae=G[oe];for(const xe in ae)g(ae[xe].object),delete ae[xe];delete G[oe]}delete r[w.id]}function z(w){for(const G in r){const oe=r[G];if(oe[w.id]===void 0)continue;const ae=oe[w.id];for(const xe in ae)g(ae[xe].object),delete ae[xe];delete oe[w.id]}}function j(){D(),f=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:j,resetDefaultState:D,dispose:H,releaseStatesOfGeometry:k,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:y,disableUnusedAttributes:O}}function NT(s,e,i){let r;function l(p){r=p}function u(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function f(p,g,v){v!==0&&(s.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function h(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let E=0;for(let M=0;M<v;M++)E+=g[M];i.update(E,r,1)}function m(p,g,v,x){if(v===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let M=0;M<p.length;M++)f(p[M],g[M],x[M]);else{E.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let M=0;for(let R=0;R<v;R++)M+=g[R]*x[R];i.update(M,r,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function OT(s,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==yi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const j=z===Yo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==ca&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==sa&&!j)}function m(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),E=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=M>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:E,maxVertexTextures:M,maxTextureSize:R,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:O,maxVaryings:L,maxFragmentUniforms:U,vertexTextures:H,maxSamples:k}}function PT(s){const e=this;let i=null,r=0,l=!1,u=!1;const f=new Mr,h=new ut,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const E=v.length!==0||x||r!==0||l;return l=x,r=v.length,E},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,E){const M=v.clippingPlanes,R=v.clipIntersection,y=v.clipShadows,_=s.get(v);if(!l||M===null||M.length===0||u&&!y)u?g(null):p();else{const O=u?0:r,L=O*4;let U=_.clippingState||null;m.value=U,U=g(M,x,L,E);for(let H=0;H!==L;++H)U[H]=i[H];_.clippingState=U,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,E,M){const R=v!==null?v.length:0;let y=null;if(R!==0){if(y=m.value,M!==!0||y===null){const _=E+R*4,O=x.matrixWorldInverse;h.getNormalMatrix(O),(y===null||y.length<_)&&(y=new Float32Array(_));for(let L=0,U=E;L!==R;++L,U+=4)f.copy(v[L]).applyMatrix4(O,h),f.normal.toArray(y,U),y[U+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function IT(s){let e=new WeakMap;function i(f,h){return h===th?f.mapping=Us:h===nh&&(f.mapping=Ls),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===th||h===nh)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new FE(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const As=4,fv=[.125,.215,.35,.446,.526,.582],Ar=20,Od=new YE,dv=new Ft;let Pd=null,Id=0,Bd=0,zd=!1;const br=(1+Math.sqrt(5))/2,Ts=1/br,hv=[new le(-br,Ts,0),new le(br,Ts,0),new le(-Ts,0,br),new le(Ts,0,br),new le(0,br,-Ts),new le(0,br,Ts),new le(-1,1,-1),new le(1,1,-1),new le(-1,1,1),new le(1,1,1)],BT=new le;class pv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:f=256,position:h=BT}=u;Pd=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_v(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pd,Id,Bd),this._renderer.xr.enabled=zd,e.scissorTest=!1,Du(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Us||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pd=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:Yo,format:yi,colorSpace:Ns,depthBuffer:!1},l=mv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mv(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zT(u)),this._blurMaterial=FT(u,e,i)}return l}_compileMaterial(e){const i=new Di(this._lodPlanes[0],e);this._renderer.compile(i,Od)}_sceneToCubeUV(e,i,r,l,u){const m=new di(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,E=v.toneMapping;v.getClearColor(dv),v.toneMapping=Za,v.autoClear=!1;const M=new Zh({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),R=new Di(new Is,M);let y=!1;const _=e.background;_?_.isColor&&(M.color.copy(_),e.background=null,y=!0):(M.color.copy(dv),y=!0);for(let O=0;O<6;O++){const L=O%3;L===0?(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[O],u.y,u.z)):L===1?(m.up.set(0,0,p[O]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[O],u.z)):(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[O]));const U=this._cubeSize;Du(l,L*U,O>2?U:0,U,U),v.setRenderTarget(l),y&&v.render(R,m),v.render(e,m)}R.geometry.dispose(),R.material.dispose(),v.toneMapping=E,v.autoClear=x,e.background=_}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Us||e.mapping===Ls;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=_v()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gv());const u=l?this._cubemapMaterial:this._equirectMaterial,f=new Di(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;Du(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Od)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=hv[(l-u-1)%hv.length];this._blur(e,u-1,u,f,h)}i.autoClear=r}_blur(e,i,r,l,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",u),this._halfBlur(f,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Di(this._lodPlanes[l],p),x=p.uniforms,E=this._sizeLods[r]-1,M=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*Ar-1),R=u/M,y=isFinite(u)?1+Math.floor(g*R):Ar;y>Ar&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ar}`);const _=[];let O=0;for(let z=0;z<Ar;++z){const j=z/R,D=Math.exp(-j*j/2);_.push(D),z===0?O+=D:z<y&&(O+=2*D)}for(let z=0;z<_.length;z++)_[z]=_[z]/O;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:L}=this;x.dTheta.value=M,x.mipInt.value=L-r;const U=this._sizeLods[l],H=3*U*(l>L-As?l-L+As:0),k=4*(this._cubeSize-U);Du(i,H,k,3*U,2*U),m.setRenderTarget(i),m.render(v,Od)}}function zT(s){const e=[],i=[],r=[];let l=s;const u=s-As+1+fv.length;for(let f=0;f<u;f++){const h=Math.pow(2,l);i.push(h);let m=1/h;f>s-As?m=fv[f-s+As-1]:f===0&&(m=0),r.push(m);const p=1/(h-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],E=6,M=6,R=3,y=2,_=1,O=new Float32Array(R*M*E),L=new Float32Array(y*M*E),U=new Float32Array(_*M*E);for(let k=0;k<E;k++){const z=k%3*2/3-1,j=k>2?0:-1,D=[z,j,0,z+2/3,j,0,z+2/3,j+1,0,z,j,0,z+2/3,j+1,0,z,j+1,0];O.set(D,R*M*k),L.set(x,y*M*k);const w=[k,k,k,k,k,k];U.set(w,_*M*k)}const H=new Nr;H.setAttribute("position",new Ui(O,R)),H.setAttribute("uv",new Ui(L,y)),H.setAttribute("faceIndex",new Ui(U,_)),e.push(H),l>As&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function mv(s,e,i){const r=new Ur(s,e,i);return r.texture.mapping=Zu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Du(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function FT(s,e,i){const r=new Float32Array(Ar),l=new le(0,1,0);return new Qa({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ja,depthTest:!1,depthWrite:!1})}function gv(){return new Qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ja,depthTest:!1,depthWrite:!1})}function _v(){return new Qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ja,depthTest:!1,depthWrite:!1})}function Kh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function HT(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===th||m===nh,g=m===Us||m===Ls;if(p||g){let v=e.get(h);const x=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new pv(s)),v=p?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),v.texture;if(v!==void 0)return v.texture;{const E=h.image;return p&&E&&E.height>0||g&&E&&l(E)?(i===null&&(i=new pv(s)),v=p?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),h.addEventListener("dispose",u),v.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function GT(s){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Cs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function VT(s,e,i,r){const l={},u=new WeakMap;function f(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);x.removeEventListener("dispose",f),delete l[x.id];const E=u.get(x);E&&(e.remove(E),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(v,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const E in x)e.update(x[E],s.ARRAY_BUFFER)}function p(v){const x=[],E=v.index,M=v.attributes.position;let R=0;if(E!==null){const O=E.array;R=E.version;for(let L=0,U=O.length;L<U;L+=3){const H=O[L+0],k=O[L+1],z=O[L+2];x.push(H,k,k,z,z,H)}}else if(M!==void 0){const O=M.array;R=M.version;for(let L=0,U=O.length/3-1;L<U;L+=3){const H=L+0,k=L+1,z=L+2;x.push(H,k,k,z,z,H)}}else return;const y=new(f0(x)?g0:m0)(x,1);y.version=R;const _=u.get(v);_&&e.remove(_),u.set(v,y)}function g(v){const x=u.get(v);if(x){const E=v.index;E!==null&&x.version<E.version&&p(v)}else p(v);return u.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function kT(s,e,i){let r;function l(x){r=x}let u,f;function h(x){u=x.type,f=x.bytesPerElement}function m(x,E){s.drawElements(r,E,u,x*f),i.update(E,r,1)}function p(x,E,M){M!==0&&(s.drawElementsInstanced(r,E,u,x*f,M),i.update(E,r,M))}function g(x,E,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,u,x,0,M);let y=0;for(let _=0;_<M;_++)y+=E[_];i.update(y,r,1)}function v(x,E,M,R){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/f,E[_],R[_]);else{y.multiDrawElementsInstancedWEBGL(r,E,0,u,x,0,R,0,M);let _=0;for(let O=0;O<M;O++)_+=E[O]*R[O];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function XT(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(u/3);break;case s.LINES:i.lines+=h*(u/2);break;case s.LINE_STRIP:i.lines+=h*(u-1);break;case s.LINE_LOOP:i.lines+=h*u;break;case s.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function WT(s,e,i){const r=new WeakMap,l=new nn;function u(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(h);if(x===void 0||x.count!==v){let w=function(){j.dispose(),r.delete(h),h.removeEventListener("dispose",w)};var E=w;x!==void 0&&x.texture.dispose();const M=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let U=0;M===!0&&(U=1),R===!0&&(U=2),y===!0&&(U=3);let H=h.attributes.position.count*U,k=1;H>e.maxTextureSize&&(k=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const z=new Float32Array(H*k*4*v),j=new d0(z,H,k,v);j.type=sa,j.needsUpdate=!0;const D=U*4;for(let G=0;G<v;G++){const oe=_[G],ae=O[G],xe=L[G],ue=H*k*4*G;for(let P=0;P<oe.count;P++){const q=P*D;M===!0&&(l.fromBufferAttribute(oe,P),z[ue+q+0]=l.x,z[ue+q+1]=l.y,z[ue+q+2]=l.z,z[ue+q+3]=0),R===!0&&(l.fromBufferAttribute(ae,P),z[ue+q+4]=l.x,z[ue+q+5]=l.y,z[ue+q+6]=l.z,z[ue+q+7]=0),y===!0&&(l.fromBufferAttribute(xe,P),z[ue+q+8]=l.x,z[ue+q+9]=l.y,z[ue+q+10]=l.z,z[ue+q+11]=xe.itemSize===4?l.w:1)}}x={count:v,texture:j,size:new Ht(H,k)},r.set(h,x),h.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let M=0;for(let y=0;y<p.length;y++)M+=p[y];const R=h.morphTargetsRelative?1:1-M;m.getUniforms().setValue(s,"morphTargetBaseInfluence",R),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function qT(s,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:f}}const M0=new Xn,vv=new S0(1,1),b0=new d0,T0=new SE,A0=new x0,xv=[],yv=[],Sv=new Float32Array(16),Ev=new Float32Array(9),Mv=new Float32Array(4);function Bs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let u=xv[l];if(u===void 0&&(u=new Float32Array(l),xv[l]=u),e!==0){r.toArray(u,0);for(let f=1,h=0;f!==e;++f)h+=i,s[f].toArray(u,h)}return u}function mn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function gn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function Ju(s,e){let i=yv[e];i===void 0&&(i=new Int32Array(e),yv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function YT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function jT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2fv(this.addr,e),gn(i,e)}}function ZT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;s.uniform3fv(this.addr,e),gn(i,e)}}function KT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4fv(this.addr,e),gn(i,e)}}function QT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;Mv.set(r),s.uniformMatrix2fv(this.addr,!1,Mv),gn(i,r)}}function JT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;Ev.set(r),s.uniformMatrix3fv(this.addr,!1,Ev),gn(i,r)}}function $T(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;Sv.set(r),s.uniformMatrix4fv(this.addr,!1,Sv),gn(i,r)}}function eA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function tA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2iv(this.addr,e),gn(i,e)}}function nA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;s.uniform3iv(this.addr,e),gn(i,e)}}function iA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4iv(this.addr,e),gn(i,e)}}function aA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function rA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2uiv(this.addr,e),gn(i,e)}}function sA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;s.uniform3uiv(this.addr,e),gn(i,e)}}function oA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4uiv(this.addr,e),gn(i,e)}}function lA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(vv.compareFunction=c0,u=vv):u=M0,i.setTexture2D(e||u,l)}function uA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||T0,l)}function cA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||A0,l)}function fA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||b0,l)}function dA(s){switch(s){case 5126:return YT;case 35664:return jT;case 35665:return ZT;case 35666:return KT;case 35674:return QT;case 35675:return JT;case 35676:return $T;case 5124:case 35670:return eA;case 35667:case 35671:return tA;case 35668:case 35672:return nA;case 35669:case 35673:return iA;case 5125:return aA;case 36294:return rA;case 36295:return sA;case 36296:return oA;case 35678:case 36198:case 36298:case 36306:case 35682:return lA;case 35679:case 36299:case 36307:return uA;case 35680:case 36300:case 36308:case 36293:return cA;case 36289:case 36303:case 36311:case 36292:return fA}}function hA(s,e){s.uniform1fv(this.addr,e)}function pA(s,e){const i=Bs(e,this.size,2);s.uniform2fv(this.addr,i)}function mA(s,e){const i=Bs(e,this.size,3);s.uniform3fv(this.addr,i)}function gA(s,e){const i=Bs(e,this.size,4);s.uniform4fv(this.addr,i)}function _A(s,e){const i=Bs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function vA(s,e){const i=Bs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function xA(s,e){const i=Bs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function yA(s,e){s.uniform1iv(this.addr,e)}function SA(s,e){s.uniform2iv(this.addr,e)}function EA(s,e){s.uniform3iv(this.addr,e)}function MA(s,e){s.uniform4iv(this.addr,e)}function bA(s,e){s.uniform1uiv(this.addr,e)}function TA(s,e){s.uniform2uiv(this.addr,e)}function AA(s,e){s.uniform3uiv(this.addr,e)}function RA(s,e){s.uniform4uiv(this.addr,e)}function CA(s,e,i){const r=this.cache,l=e.length,u=Ju(i,l);mn(r,u)||(s.uniform1iv(this.addr,u),gn(r,u));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||M0,u[f])}function wA(s,e,i){const r=this.cache,l=e.length,u=Ju(i,l);mn(r,u)||(s.uniform1iv(this.addr,u),gn(r,u));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||T0,u[f])}function DA(s,e,i){const r=this.cache,l=e.length,u=Ju(i,l);mn(r,u)||(s.uniform1iv(this.addr,u),gn(r,u));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||A0,u[f])}function UA(s,e,i){const r=this.cache,l=e.length,u=Ju(i,l);mn(r,u)||(s.uniform1iv(this.addr,u),gn(r,u));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||b0,u[f])}function LA(s){switch(s){case 5126:return hA;case 35664:return pA;case 35665:return mA;case 35666:return gA;case 35674:return _A;case 35675:return vA;case 35676:return xA;case 5124:case 35670:return yA;case 35667:case 35671:return SA;case 35668:case 35672:return EA;case 35669:case 35673:return MA;case 5125:return bA;case 36294:return TA;case 36295:return AA;case 36296:return RA;case 35678:case 36198:case 36298:case 36306:case 35682:return CA;case 35679:case 36299:case 36307:return wA;case 35680:case 36300:case 36308:case 36293:return DA;case 36289:case 36303:case 36311:case 36292:return UA}}class NA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=dA(i.type)}}class OA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=LA(i.type)}}class PA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const Fd=/(\w+)(\])?(\[|\.)?/g;function bv(s,e){s.seq.push(e),s.map[e.id]=e}function IA(s,e,i){const r=s.name,l=r.length;for(Fd.lastIndex=0;;){const u=Fd.exec(r),f=Fd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){bv(i,p===void 0?new NA(h,s,e):new OA(h,s,e));break}else{let v=i.map[h];v===void 0&&(v=new PA(h),bv(i,v)),i=v}}}class Hu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),f=e.getUniformLocation(i,u.name);IA(u,f,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,f=i.length;u!==f;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function Tv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const BA=37297;let zA=0;function FA(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let f=l;f<u;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const Av=new ut;function HA(s){Rt._getMatrix(Av,Rt.workingColorSpace,s);const e=`mat3( ${Av.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(s)){case Xu:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Rv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=s.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+FA(s.getShaderSource(e),f)}else return l}function GA(s,e){const i=HA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function VA(s,e){let i;switch(e){case qS:i="Linear";break;case YS:i="Reinhard";break;case jS:i="Cineon";break;case ZS:i="ACESFilmic";break;case QS:i="AgX";break;case JS:i="Neutral";break;case KS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uu=new le;function kA(){Rt.getLuminanceCoefficients(Uu);const s=Uu.x.toFixed(4),e=Uu.y.toFixed(4),i=Uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function WA(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function qA(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(e,l),f=u.name;let h=1;u.type===s.FLOAT_MAT2&&(h=2),u.type===s.FLOAT_MAT3&&(h=3),u.type===s.FLOAT_MAT4&&(h=4),i[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:h}}return i}function Go(s){return s!==""}function Cv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lh(s){return s.replace(YA,ZA)}const jA=new Map;function ZA(s,e){let i=ft[e];if(i===void 0){const r=jA.get(e);if(r!==void 0)i=ft[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Lh(i)}const KA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dv(s){return s.replace(KA,QA)}function QA(s,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Uv(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function JA(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===$v?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===TS?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===aa&&(e="SHADOWMAP_TYPE_VSM"),e}function $A(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Us:case Ls:e="ENVMAP_TYPE_CUBE";break;case Zu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function e1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ls:e="ENVMAP_MODE_REFRACTION";break}return e}function t1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case e0:e="ENVMAP_BLENDING_MULTIPLY";break;case XS:e="ENVMAP_BLENDING_MIX";break;case WS:e="ENVMAP_BLENDING_ADD";break}return e}function n1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function i1(s,e,i,r){const l=s.getContext(),u=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=JA(i),p=$A(i),g=e1(i),v=t1(i),x=n1(i),E=XA(i),M=WA(u),R=l.createProgram();let y,_,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Go).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Go).join(`
`),_.length>0&&(_+=`
`)):(y=[Uv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),_=[Uv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Za?"#define TONE_MAPPING":"",i.toneMapping!==Za?ft.tonemapping_pars_fragment:"",i.toneMapping!==Za?VA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,GA("linearToOutputTexel",i.outputColorSpace),kA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Go).join(`
`)),f=Lh(f),f=Cv(f,i),f=wv(f,i),h=Lh(h),h=Cv(h,i),h=wv(h,i),f=Dv(f),h=Dv(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===q_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===q_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=O+y+f,U=O+_+h,H=Tv(l,l.VERTEX_SHADER,L),k=Tv(l,l.FRAGMENT_SHADER,U);l.attachShader(R,H),l.attachShader(R,k),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function z(G){if(s.debug.checkShaderErrors){const oe=l.getProgramInfoLog(R).trim(),ae=l.getShaderInfoLog(H).trim(),xe=l.getShaderInfoLog(k).trim();let ue=!0,P=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ue=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,R,H,k);else{const q=Rv(l,H,"vertex"),Y=Rv(l,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+oe+`
`+q+`
`+Y)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(ae===""||xe==="")&&(P=!1);P&&(G.diagnostics={runnable:ue,programLog:oe,vertexShader:{log:ae,prefix:y},fragmentShader:{log:xe,prefix:_}})}l.deleteShader(H),l.deleteShader(k),j=new Hu(l,R),D=qA(l,R)}let j;this.getUniforms=function(){return j===void 0&&z(this),j};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(R,BA)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=zA++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=H,this.fragmentShader=k,this}let a1=0;class r1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new s1(e),i.set(e,r)),r}}class s1{constructor(e){this.id=a1++,this.code=e,this.usedTimes=0}}function o1(s,e,i,r,l,u,f){const h=new h0,m=new r1,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let E=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return p.add(D),D===0?"uv":`uv${D}`}function y(D,w,G,oe,ae){const xe=oe.fog,ue=ae.geometry,P=D.isMeshStandardMaterial?oe.environment:null,q=(D.isMeshStandardMaterial?i:e).get(D.envMap||P),Y=q&&q.mapping===Zu?q.image.height:null,Me=M[D.type];D.precision!==null&&(E=l.getMaxPrecision(D.precision),E!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",E,"instead."));const A=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,B=A!==void 0?A.length:0;let se=0;ue.morphAttributes.position!==void 0&&(se=1),ue.morphAttributes.normal!==void 0&&(se=2),ue.morphAttributes.color!==void 0&&(se=3);let de,W,he,Ee;if(Me){const Tt=Ci[Me];de=Tt.vertexShader,W=Tt.fragmentShader}else de=D.vertexShader,W=D.fragmentShader,m.update(D),he=m.getVertexShaderID(D),Ee=m.getFragmentShaderID(D);const Ae=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),at=ae.isInstancedMesh===!0,Xe=ae.isBatchedMesh===!0,et=!!D.map,bt=!!D.matcap,ht=!!q,F=!!D.aoMap,bn=!!D.lightMap,Mt=!!D.bumpMap,gt=!!D.normalMap,ke=!!D.displacementMap,xt=!!D.emissiveMap,Ke=!!D.metalnessMap,ot=!!D.roughnessMap,Jt=D.anisotropy>0,N=D.clearcoat>0,b=D.dispersion>0,ee=D.iridescence>0,ge=D.sheen>0,ve=D.transmission>0,ce=Jt&&!!D.anisotropyMap,Ie=N&&!!D.clearcoatMap,Le=N&&!!D.clearcoatNormalMap,Ve=N&&!!D.clearcoatRoughnessMap,We=ee&&!!D.iridescenceMap,be=ee&&!!D.iridescenceThicknessMap,Be=ge&&!!D.sheenColorMap,je=ge&&!!D.sheenRoughnessMap,Ze=!!D.specularMap,De=!!D.specularColorMap,st=!!D.specularIntensityMap,X=ve&&!!D.transmissionMap,Ne=ve&&!!D.thicknessMap,Te=!!D.gradientMap,ze=!!D.alphaMap,Ce=D.alphaTest>0,Se=!!D.alphaHash,He=!!D.extensions;let rt=Za;D.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(rt=s.toneMapping);const Ut={shaderID:Me,shaderType:D.type,shaderName:D.name,vertexShader:de,fragmentShader:W,defines:D.defines,customVertexShaderID:he,customFragmentShaderID:Ee,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:E,batching:Xe,batchingColor:Xe&&ae._colorsTexture!==null,instancing:at,instancingColor:at&&ae.instanceColor!==null,instancingMorph:at&&ae.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Ae===null?s.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Ns,alphaToCoverage:!!D.alphaToCoverage,map:et,matcap:bt,envMap:ht,envMapMode:ht&&q.mapping,envMapCubeUVHeight:Y,aoMap:F,lightMap:bn,bumpMap:Mt,normalMap:gt,displacementMap:x&&ke,emissiveMap:xt,normalMapObjectSpace:gt&&D.normalMapType===iE,normalMapTangentSpace:gt&&D.normalMapType===nE,metalnessMap:Ke,roughnessMap:ot,anisotropy:Jt,anisotropyMap:ce,clearcoat:N,clearcoatMap:Ie,clearcoatNormalMap:Le,clearcoatRoughnessMap:Ve,dispersion:b,iridescence:ee,iridescenceMap:We,iridescenceThicknessMap:be,sheen:ge,sheenColorMap:Be,sheenRoughnessMap:je,specularMap:Ze,specularColorMap:De,specularIntensityMap:st,transmission:ve,transmissionMap:X,thicknessMap:Ne,gradientMap:Te,opaque:D.transparent===!1&&D.blending===Rs&&D.alphaToCoverage===!1,alphaMap:ze,alphaTest:Ce,alphaHash:Se,combine:D.combine,mapUv:et&&R(D.map.channel),aoMapUv:F&&R(D.aoMap.channel),lightMapUv:bn&&R(D.lightMap.channel),bumpMapUv:Mt&&R(D.bumpMap.channel),normalMapUv:gt&&R(D.normalMap.channel),displacementMapUv:ke&&R(D.displacementMap.channel),emissiveMapUv:xt&&R(D.emissiveMap.channel),metalnessMapUv:Ke&&R(D.metalnessMap.channel),roughnessMapUv:ot&&R(D.roughnessMap.channel),anisotropyMapUv:ce&&R(D.anisotropyMap.channel),clearcoatMapUv:Ie&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:Le&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:be&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:je&&R(D.sheenRoughnessMap.channel),specularMapUv:Ze&&R(D.specularMap.channel),specularColorMapUv:De&&R(D.specularColorMap.channel),specularIntensityMapUv:st&&R(D.specularIntensityMap.channel),transmissionMapUv:X&&R(D.transmissionMap.channel),thicknessMapUv:Ne&&R(D.thicknessMap.channel),alphaMapUv:ze&&R(D.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(gt||Jt),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!ue.attributes.uv&&(et||ze),fog:!!xe,useFog:D.fog===!0,fogExp2:!!xe&&xe.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:we,skinning:ae.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:se,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:et&&D.map.isVideoTexture===!0&&Rt.getTransfer(D.map.colorSpace)===zt,decodeVideoTextureEmissive:xt&&D.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(D.emissiveMap.colorSpace)===zt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ra,flipSided:D.side===kn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:He&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&D.extensions.multiDraw===!0||Xe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ut.vertexUv1s=p.has(1),Ut.vertexUv2s=p.has(2),Ut.vertexUv3s=p.has(3),p.clear(),Ut}function _(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)w.push(G),w.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(O(w,D),L(w,D),w.push(s.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function O(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function L(D,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),w.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reverseDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),D.push(h.mask)}function U(D){const w=M[D.type];let G;if(w){const oe=Ci[w];G=PE.clone(oe.uniforms)}else G=D.uniforms;return G}function H(D,w){let G;for(let oe=0,ae=g.length;oe<ae;oe++){const xe=g[oe];if(xe.cacheKey===w){G=xe,++G.usedTimes;break}}return G===void 0&&(G=new i1(s,w,D,u),g.push(G)),G}function k(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function z(D){m.remove(D)}function j(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:U,acquireProgram:H,releaseProgram:k,releaseShaderCache:z,programs:g,dispose:j}}function l1(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function u(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function u1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Lv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Nv(){const s=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function f(v,x,E,M,R,y){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:E,groupOrder:M,renderOrder:v.renderOrder,z:R,group:y},s[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=E,_.groupOrder=M,_.renderOrder=v.renderOrder,_.z=R,_.group=y),e++,_}function h(v,x,E,M,R,y){const _=f(v,x,E,M,R,y);E.transmission>0?r.push(_):E.transparent===!0?l.push(_):i.push(_)}function m(v,x,E,M,R,y){const _=f(v,x,E,M,R,y);E.transmission>0?r.unshift(_):E.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||u1),r.length>1&&r.sort(x||Lv),l.length>1&&l.sort(x||Lv)}function g(){for(let v=e,x=s.length;v<x;v++){const E=s[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:g,sort:p}}function c1(){let s=new WeakMap;function e(r,l){const u=s.get(r);let f;return u===void 0?(f=new Nv,s.set(r,[f])):l>=u.length?(f=new Nv,u.push(f)):f=u[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function f1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new le,color:new Ft};break;case"SpotLight":i={position:new le,direction:new le,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new le,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":i={direction:new le,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":i={color:new Ft,position:new le,halfWidth:new le,halfHeight:new le};break}return s[e.id]=i,i}}}function d1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let h1=0;function p1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function m1(s){const e=new f1,i=d1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new le);const l=new le,u=new cn,f=new cn;function h(p){let g=0,v=0,x=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let E=0,M=0,R=0,y=0,_=0,O=0,L=0,U=0,H=0,k=0,z=0;p.sort(p1);for(let D=0,w=p.length;D<w;D++){const G=p[D],oe=G.color,ae=G.intensity,xe=G.distance,ue=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=oe.r*ae,v+=oe.g*ae,x+=oe.b*ae;else if(G.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(G.sh.coefficients[P],ae);z++}else if(G.isDirectionalLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const q=G.shadow,Y=i.get(G);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,r.directionalShadow[E]=Y,r.directionalShadowMap[E]=ue,r.directionalShadowMatrix[E]=G.shadow.matrix,O++}r.directional[E]=P,E++}else if(G.isSpotLight){const P=e.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(oe).multiplyScalar(ae),P.distance=xe,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,r.spot[R]=P;const q=G.shadow;if(G.map&&(r.spotLightMap[H]=G.map,H++,q.updateMatrices(G),G.castShadow&&k++),r.spotLightMatrix[R]=q.matrix,G.castShadow){const Y=i.get(G);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,r.spotShadow[R]=Y,r.spotShadowMap[R]=ue,U++}R++}else if(G.isRectAreaLight){const P=e.get(G);P.color.copy(oe).multiplyScalar(ae),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=P,y++}else if(G.isPointLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const q=G.shadow,Y=i.get(G);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,r.pointShadow[M]=Y,r.pointShadowMap[M]=ue,r.pointShadowMatrix[M]=G.shadow.matrix,L++}r.point[M]=P,M++}else if(G.isHemisphereLight){const P=e.get(G);P.skyColor.copy(G.color).multiplyScalar(ae),P.groundColor.copy(G.groundColor).multiplyScalar(ae),r.hemi[_]=P,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const j=r.hash;(j.directionalLength!==E||j.pointLength!==M||j.spotLength!==R||j.rectAreaLength!==y||j.hemiLength!==_||j.numDirectionalShadows!==O||j.numPointShadows!==L||j.numSpotShadows!==U||j.numSpotMaps!==H||j.numLightProbes!==z)&&(r.directional.length=E,r.spot.length=R,r.rectArea.length=y,r.point.length=M,r.hemi.length=_,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=U+H-k,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=z,j.directionalLength=E,j.pointLength=M,j.spotLength=R,j.rectAreaLength=y,j.hemiLength=_,j.numDirectionalShadows=O,j.numPointShadows=L,j.numSpotShadows=U,j.numSpotMaps=H,j.numLightProbes=z,r.version=h1++)}function m(p,g){let v=0,x=0,E=0,M=0,R=0;const y=g.matrixWorldInverse;for(let _=0,O=p.length;_<O;_++){const L=p[_];if(L.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),v++}else if(L.isSpotLight){const U=r.spot[E];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),E++}else if(L.isRectAreaLight){const U=r.rectArea[M];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(y),f.identity(),u.copy(L.matrixWorld),u.premultiply(y),f.extractRotation(u),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),M++}else if(L.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const U=r.hemi[R];U.direction.setFromMatrixPosition(L.matrixWorld),U.direction.transformDirection(y),R++}}}return{setup:h,setupView:m,state:r}}function Ov(s){const e=new m1(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function f(g){r.push(g)}function h(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:f}}function g1(s){let e=new WeakMap;function i(l,u=0){const f=e.get(l);let h;return f===void 0?(h=new Ov(s),e.set(l,[h])):u>=f.length?(h=new Ov(s),f.push(h)):h=f[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const _1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function x1(s,e,i){let r=new y0;const l=new Ht,u=new Ht,f=new nn,h=new WE({depthPacking:tE}),m=new qE,p={},g=i.maxTextureSize,v={[Ka]:kn,[kn]:Ka,[ra]:ra},x=new Qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:_1,fragmentShader:v1}),E=x.clone();E.defines.HORIZONTAL_PASS=1;const M=new Nr;M.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Di(M,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$v;let _=this.type;this.render=function(k,z,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;const D=s.getRenderTarget(),w=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),oe=s.state;oe.setBlending(ja),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const ae=_!==aa&&this.type===aa,xe=_===aa&&this.type!==aa;for(let ue=0,P=k.length;ue<P;ue++){const q=k[ue],Y=q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Me=Y.getFrameExtents();if(l.multiply(Me),u.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Me.x),l.x=u.x*Me.x,Y.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Me.y),l.y=u.y*Me.y,Y.mapSize.y=u.y)),Y.map===null||ae===!0||xe===!0){const B=this.type!==aa?{minFilter:Si,magFilter:Si}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ur(l.x,l.y,B),Y.map.texture.name=q.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const A=Y.getViewportCount();for(let B=0;B<A;B++){const se=Y.getViewport(B);f.set(u.x*se.x,u.y*se.y,u.x*se.z,u.y*se.w),oe.viewport(f),Y.updateMatrices(q,B),r=Y.getFrustum(),U(z,j,Y.camera,q,this.type)}Y.isPointLightShadow!==!0&&this.type===aa&&O(Y,j),Y.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(D,w,G)};function O(k,z){const j=e.update(R);x.defines.VSM_SAMPLES!==k.blurSamples&&(x.defines.VSM_SAMPLES=k.blurSamples,E.defines.VSM_SAMPLES=k.blurSamples,x.needsUpdate=!0,E.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Ur(l.x,l.y)),x.uniforms.shadow_pass.value=k.map.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(z,null,j,x,R,null),E.uniforms.shadow_pass.value=k.mapPass.texture,E.uniforms.resolution.value=k.mapSize,E.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(z,null,j,E,R,null)}function L(k,z,j,D){let w=null;const G=j.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(G!==void 0)w=G;else if(w=j.isPointLight===!0?m:h,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const oe=w.uuid,ae=z.uuid;let xe=p[oe];xe===void 0&&(xe={},p[oe]=xe);let ue=xe[ae];ue===void 0&&(ue=w.clone(),xe[ae]=ue,z.addEventListener("dispose",H)),w=ue}if(w.visible=z.visible,w.wireframe=z.wireframe,D===aa?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:v[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,j.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const oe=s.properties.get(w);oe.light=j}return w}function U(k,z,j,D,w){if(k.visible===!1)return;if(k.layers.test(z.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&w===aa)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,k.matrixWorld);const ae=e.update(k),xe=k.material;if(Array.isArray(xe)){const ue=ae.groups;for(let P=0,q=ue.length;P<q;P++){const Y=ue[P],Me=xe[Y.materialIndex];if(Me&&Me.visible){const A=L(k,Me,D,w);k.onBeforeShadow(s,k,z,j,ae,A,Y),s.renderBufferDirect(j,null,ae,A,k,Y),k.onAfterShadow(s,k,z,j,ae,A,Y)}}}else if(xe.visible){const ue=L(k,xe,D,w);k.onBeforeShadow(s,k,z,j,ae,ue,null),s.renderBufferDirect(j,null,ae,ue,k,null),k.onAfterShadow(s,k,z,j,ae,ue,null)}}const oe=k.children;for(let ae=0,xe=oe.length;ae<xe;ae++)U(oe[ae],z,j,D,w)}function H(k){k.target.removeEventListener("dispose",H);for(const j in p){const D=p[j],w=k.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const y1={[jd]:Zd,[Kd]:$d,[Qd]:eh,[Ds]:Jd,[Zd]:jd,[$d]:Kd,[eh]:Qd,[Jd]:Ds};function S1(s,e){function i(){let X=!1;const Ne=new nn;let Te=null;const ze=new nn(0,0,0,0);return{setMask:function(Ce){Te!==Ce&&!X&&(s.colorMask(Ce,Ce,Ce,Ce),Te=Ce)},setLocked:function(Ce){X=Ce},setClear:function(Ce,Se,He,rt,Ut){Ut===!0&&(Ce*=rt,Se*=rt,He*=rt),Ne.set(Ce,Se,He,rt),ze.equals(Ne)===!1&&(s.clearColor(Ce,Se,He,rt),ze.copy(Ne))},reset:function(){X=!1,Te=null,ze.set(-1,0,0,0)}}}function r(){let X=!1,Ne=!1,Te=null,ze=null,Ce=null;return{setReversed:function(Se){if(Ne!==Se){const He=e.get("EXT_clip_control");Se?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Ne=Se;const rt=Ce;Ce=null,this.setClear(rt)}},getReversed:function(){return Ne},setTest:function(Se){Se?Ae(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(Se){Te!==Se&&!X&&(s.depthMask(Se),Te=Se)},setFunc:function(Se){if(Ne&&(Se=y1[Se]),ze!==Se){switch(Se){case jd:s.depthFunc(s.NEVER);break;case Zd:s.depthFunc(s.ALWAYS);break;case Kd:s.depthFunc(s.LESS);break;case Ds:s.depthFunc(s.LEQUAL);break;case Qd:s.depthFunc(s.EQUAL);break;case Jd:s.depthFunc(s.GEQUAL);break;case $d:s.depthFunc(s.GREATER);break;case eh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ze=Se}},setLocked:function(Se){X=Se},setClear:function(Se){Ce!==Se&&(Ne&&(Se=1-Se),s.clearDepth(Se),Ce=Se)},reset:function(){X=!1,Te=null,ze=null,Ce=null,Ne=!1}}}function l(){let X=!1,Ne=null,Te=null,ze=null,Ce=null,Se=null,He=null,rt=null,Ut=null;return{setTest:function(Tt){X||(Tt?Ae(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(Tt){Ne!==Tt&&!X&&(s.stencilMask(Tt),Ne=Tt)},setFunc:function(Tt,Wn,_n){(Te!==Tt||ze!==Wn||Ce!==_n)&&(s.stencilFunc(Tt,Wn,_n),Te=Tt,ze=Wn,Ce=_n)},setOp:function(Tt,Wn,_n){(Se!==Tt||He!==Wn||rt!==_n)&&(s.stencilOp(Tt,Wn,_n),Se=Tt,He=Wn,rt=_n)},setLocked:function(Tt){X=Tt},setClear:function(Tt){Ut!==Tt&&(s.clearStencil(Tt),Ut=Tt)},reset:function(){X=!1,Ne=null,Te=null,ze=null,Ce=null,Se=null,He=null,rt=null,Ut=null}}}const u=new i,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,E=[],M=null,R=!1,y=null,_=null,O=null,L=null,U=null,H=null,k=null,z=new Ft(0,0,0),j=0,D=!1,w=null,G=null,oe=null,ae=null,xe=null;const ue=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,q=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),P=q>=1):Y.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),P=q>=2);let Me=null,A={};const B=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),de=new nn().fromArray(B),W=new nn().fromArray(se);function he(X,Ne,Te,ze){const Ce=new Uint8Array(4),Se=s.createTexture();s.bindTexture(X,Se),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<Te;He++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,ze,0,s.RGBA,s.UNSIGNED_BYTE,Ce):s.texImage2D(Ne+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ce);return Se}const Ee={};Ee[s.TEXTURE_2D]=he(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=he(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=he(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=he(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Ae(s.DEPTH_TEST),f.setFunc(Ds),Mt(!1),gt(H_),Ae(s.CULL_FACE),F(ja);function Ae(X){g[X]!==!0&&(s.enable(X),g[X]=!0)}function we(X){g[X]!==!1&&(s.disable(X),g[X]=!1)}function at(X,Ne){return v[X]!==Ne?(s.bindFramebuffer(X,Ne),v[X]=Ne,X===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ne),X===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Xe(X,Ne){let Te=E,ze=!1;if(X){Te=x.get(Ne),Te===void 0&&(Te=[],x.set(Ne,Te));const Ce=X.textures;if(Te.length!==Ce.length||Te[0]!==s.COLOR_ATTACHMENT0){for(let Se=0,He=Ce.length;Se<He;Se++)Te[Se]=s.COLOR_ATTACHMENT0+Se;Te.length=Ce.length,ze=!0}}else Te[0]!==s.BACK&&(Te[0]=s.BACK,ze=!0);ze&&s.drawBuffers(Te)}function et(X){return M!==X?(s.useProgram(X),M=X,!0):!1}const bt={[Tr]:s.FUNC_ADD,[RS]:s.FUNC_SUBTRACT,[CS]:s.FUNC_REVERSE_SUBTRACT};bt[wS]=s.MIN,bt[DS]=s.MAX;const ht={[US]:s.ZERO,[LS]:s.ONE,[NS]:s.SRC_COLOR,[qd]:s.SRC_ALPHA,[FS]:s.SRC_ALPHA_SATURATE,[BS]:s.DST_COLOR,[PS]:s.DST_ALPHA,[OS]:s.ONE_MINUS_SRC_COLOR,[Yd]:s.ONE_MINUS_SRC_ALPHA,[zS]:s.ONE_MINUS_DST_COLOR,[IS]:s.ONE_MINUS_DST_ALPHA,[HS]:s.CONSTANT_COLOR,[GS]:s.ONE_MINUS_CONSTANT_COLOR,[VS]:s.CONSTANT_ALPHA,[kS]:s.ONE_MINUS_CONSTANT_ALPHA};function F(X,Ne,Te,ze,Ce,Se,He,rt,Ut,Tt){if(X===ja){R===!0&&(we(s.BLEND),R=!1);return}if(R===!1&&(Ae(s.BLEND),R=!0),X!==AS){if(X!==y||Tt!==D){if((_!==Tr||U!==Tr)&&(s.blendEquation(s.FUNC_ADD),_=Tr,U=Tr),Tt)switch(X){case Rs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case G_:s.blendFunc(s.ONE,s.ONE);break;case V_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case k_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Rs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case G_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case V_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case k_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}O=null,L=null,H=null,k=null,z.set(0,0,0),j=0,y=X,D=Tt}return}Ce=Ce||Ne,Se=Se||Te,He=He||ze,(Ne!==_||Ce!==U)&&(s.blendEquationSeparate(bt[Ne],bt[Ce]),_=Ne,U=Ce),(Te!==O||ze!==L||Se!==H||He!==k)&&(s.blendFuncSeparate(ht[Te],ht[ze],ht[Se],ht[He]),O=Te,L=ze,H=Se,k=He),(rt.equals(z)===!1||Ut!==j)&&(s.blendColor(rt.r,rt.g,rt.b,Ut),z.copy(rt),j=Ut),y=X,D=!1}function bn(X,Ne){X.side===ra?we(s.CULL_FACE):Ae(s.CULL_FACE);let Te=X.side===kn;Ne&&(Te=!Te),Mt(Te),X.blending===Rs&&X.transparent===!1?F(ja):F(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),u.setMask(X.colorWrite);const ze=X.stencilWrite;h.setTest(ze),ze&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),xt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Ae(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(X){w!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),w=X)}function gt(X){X!==MS?(Ae(s.CULL_FACE),X!==G&&(X===H_?s.cullFace(s.BACK):X===bS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),G=X}function ke(X){X!==oe&&(P&&s.lineWidth(X),oe=X)}function xt(X,Ne,Te){X?(Ae(s.POLYGON_OFFSET_FILL),(ae!==Ne||xe!==Te)&&(s.polygonOffset(Ne,Te),ae=Ne,xe=Te)):we(s.POLYGON_OFFSET_FILL)}function Ke(X){X?Ae(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function ot(X){X===void 0&&(X=s.TEXTURE0+ue-1),Me!==X&&(s.activeTexture(X),Me=X)}function Jt(X,Ne,Te){Te===void 0&&(Me===null?Te=s.TEXTURE0+ue-1:Te=Me);let ze=A[Te];ze===void 0&&(ze={type:void 0,texture:void 0},A[Te]=ze),(ze.type!==X||ze.texture!==Ne)&&(Me!==Te&&(s.activeTexture(Te),Me=Te),s.bindTexture(X,Ne||Ee[X]),ze.type=X,ze.texture=Ne)}function N(){const X=A[Me];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ee(){try{s.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ge(){try{s.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ve(){try{s.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ce(){try{s.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ie(){try{s.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Le(){try{s.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ve(){try{s.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function We(){try{s.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function be(){try{s.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Be(X){de.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),de.copy(X))}function je(X){W.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),W.copy(X))}function Ze(X,Ne){let Te=p.get(Ne);Te===void 0&&(Te=new WeakMap,p.set(Ne,Te));let ze=Te.get(X);ze===void 0&&(ze=s.getUniformBlockIndex(Ne,X.name),Te.set(X,ze))}function De(X,Ne){const ze=p.get(Ne).get(X);m.get(Ne)!==ze&&(s.uniformBlockBinding(Ne,ze,X.__bindingPointIndex),m.set(Ne,ze))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Me=null,A={},v={},x=new WeakMap,E=[],M=null,R=!1,y=null,_=null,O=null,L=null,U=null,H=null,k=null,z=new Ft(0,0,0),j=0,D=!1,w=null,G=null,oe=null,ae=null,xe=null,de.set(0,0,s.canvas.width,s.canvas.height),W.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),h.reset()}return{buffers:{color:u,depth:f,stencil:h},enable:Ae,disable:we,bindFramebuffer:at,drawBuffers:Xe,useProgram:et,setBlending:F,setMaterial:bn,setFlipSided:Mt,setCullFace:gt,setLineWidth:ke,setPolygonOffset:xt,setScissorTest:Ke,activeTexture:ot,bindTexture:Jt,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:ee,texImage2D:We,texImage3D:be,updateUBOMapping:Ze,uniformBlockBinding:De,texStorage2D:Le,texStorage3D:Ve,texSubImage2D:ge,texSubImage3D:ve,compressedTexSubImage2D:ce,compressedTexSubImage3D:Ie,scissor:Be,viewport:je,reset:st}}function E1(s,e,i,r,l,u,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ht,g=new WeakMap;let v;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,b){return E?new OffscreenCanvas(N,b):qu("canvas")}function R(N,b,ee){let ge=1;const ve=Jt(N);if((ve.width>ee||ve.height>ee)&&(ge=ee/Math.max(ve.width,ve.height)),ge<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ce=Math.floor(ge*ve.width),Ie=Math.floor(ge*ve.height);v===void 0&&(v=M(ce,Ie));const Le=b?M(ce,Ie):v;return Le.width=ce,Le.height=Ie,Le.getContext("2d").drawImage(N,0,0,ce,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+ce+"x"+Ie+")."),Le}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),N;return N}function y(N){return N.generateMipmaps}function _(N){s.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(N,b,ee,ge,ve=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ce=b;if(b===s.RED&&(ee===s.FLOAT&&(ce=s.R32F),ee===s.HALF_FLOAT&&(ce=s.R16F),ee===s.UNSIGNED_BYTE&&(ce=s.R8)),b===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(ce=s.R8UI),ee===s.UNSIGNED_SHORT&&(ce=s.R16UI),ee===s.UNSIGNED_INT&&(ce=s.R32UI),ee===s.BYTE&&(ce=s.R8I),ee===s.SHORT&&(ce=s.R16I),ee===s.INT&&(ce=s.R32I)),b===s.RG&&(ee===s.FLOAT&&(ce=s.RG32F),ee===s.HALF_FLOAT&&(ce=s.RG16F),ee===s.UNSIGNED_BYTE&&(ce=s.RG8)),b===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(ce=s.RG8UI),ee===s.UNSIGNED_SHORT&&(ce=s.RG16UI),ee===s.UNSIGNED_INT&&(ce=s.RG32UI),ee===s.BYTE&&(ce=s.RG8I),ee===s.SHORT&&(ce=s.RG16I),ee===s.INT&&(ce=s.RG32I)),b===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),ee===s.UNSIGNED_INT&&(ce=s.RGB32UI),ee===s.BYTE&&(ce=s.RGB8I),ee===s.SHORT&&(ce=s.RGB16I),ee===s.INT&&(ce=s.RGB32I)),b===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),ee===s.UNSIGNED_INT&&(ce=s.RGBA32UI),ee===s.BYTE&&(ce=s.RGBA8I),ee===s.SHORT&&(ce=s.RGBA16I),ee===s.INT&&(ce=s.RGBA32I)),b===s.RGB&&ee===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),b===s.RGBA){const Ie=ve?Xu:Rt.getTransfer(ge);ee===s.FLOAT&&(ce=s.RGBA32F),ee===s.HALF_FLOAT&&(ce=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(ce=Ie===zt?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function U(N,b){let ee;return N?b===null||b===Dr||b===ko?ee=s.DEPTH24_STENCIL8:b===sa?ee=s.DEPTH32F_STENCIL8:b===Vo&&(ee=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Dr||b===ko?ee=s.DEPTH_COMPONENT24:b===sa?ee=s.DEPTH_COMPONENT32F:b===Vo&&(ee=s.DEPTH_COMPONENT16),ee}function H(N,b){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Si&&N.minFilter!==wi?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function k(N){const b=N.target;b.removeEventListener("dispose",k),j(b),b.isVideoTexture&&g.delete(b)}function z(N){const b=N.target;b.removeEventListener("dispose",z),w(b)}function j(N){const b=r.get(N);if(b.__webglInit===void 0)return;const ee=N.source,ge=x.get(ee);if(ge){const ve=ge[b.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&D(N),Object.keys(ge).length===0&&x.delete(ee)}r.remove(N)}function D(N){const b=r.get(N);s.deleteTexture(b.__webglTexture);const ee=N.source,ge=x.get(ee);delete ge[b.__cacheKey],f.memory.textures--}function w(N){const b=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(b.__webglFramebuffer[ge]))for(let ve=0;ve<b.__webglFramebuffer[ge].length;ve++)s.deleteFramebuffer(b.__webglFramebuffer[ge][ve]);else s.deleteFramebuffer(b.__webglFramebuffer[ge]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ge])}else{if(Array.isArray(b.__webglFramebuffer))for(let ge=0;ge<b.__webglFramebuffer.length;ge++)s.deleteFramebuffer(b.__webglFramebuffer[ge]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ge=0;ge<b.__webglColorRenderbuffer.length;ge++)b.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ge]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ee=N.textures;for(let ge=0,ve=ee.length;ge<ve;ge++){const ce=r.get(ee[ge]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),f.memory.textures--),r.remove(ee[ge])}r.remove(N)}let G=0;function oe(){G=0}function ae(){const N=G;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),G+=1,N}function xe(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function ue(N,b){const ee=r.get(N);if(N.isVideoTexture&&Ke(N),N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){const ge=N.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(ee,N,b);return}}i.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+b)}function P(N,b){const ee=r.get(N);if(N.version>0&&ee.__version!==N.version){Ee(ee,N,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+b)}function q(N,b){const ee=r.get(N);if(N.version>0&&ee.__version!==N.version){Ee(ee,N,b);return}i.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+b)}function Y(N,b){const ee=r.get(N);if(N.version>0&&ee.__version!==N.version){Ae(ee,N,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+b)}const Me={[ih]:s.REPEAT,[Rr]:s.CLAMP_TO_EDGE,[ah]:s.MIRRORED_REPEAT},A={[Si]:s.NEAREST,[$S]:s.NEAREST_MIPMAP_NEAREST,[cu]:s.NEAREST_MIPMAP_LINEAR,[wi]:s.LINEAR,[ud]:s.LINEAR_MIPMAP_NEAREST,[Cr]:s.LINEAR_MIPMAP_LINEAR},B={[aE]:s.NEVER,[cE]:s.ALWAYS,[rE]:s.LESS,[c0]:s.LEQUAL,[sE]:s.EQUAL,[uE]:s.GEQUAL,[oE]:s.GREATER,[lE]:s.NOTEQUAL};function se(N,b){if(b.type===sa&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===wi||b.magFilter===ud||b.magFilter===cu||b.magFilter===Cr||b.minFilter===wi||b.minFilter===ud||b.minFilter===cu||b.minFilter===Cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,Me[b.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,Me[b.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,Me[b.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,A[b.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,A[b.minFilter]),b.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,B[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Si||b.minFilter!==cu&&b.minFilter!==Cr||b.type===sa&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function de(N,b){let ee=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",k));const ge=b.source;let ve=x.get(ge);ve===void 0&&(ve={},x.set(ge,ve));const ce=xe(b);if(ce!==N.__cacheKey){ve[ce]===void 0&&(ve[ce]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,ee=!0),ve[ce].usedTimes++;const Ie=ve[N.__cacheKey];Ie!==void 0&&(ve[N.__cacheKey].usedTimes--,Ie.usedTimes===0&&D(b)),N.__cacheKey=ce,N.__webglTexture=ve[ce].texture}return ee}function W(N,b,ee){return Math.floor(Math.floor(N/ee)/b)}function he(N,b,ee,ge){const ce=N.updateRanges;if(ce.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,ee,ge,b.data);else{ce.sort((be,Be)=>be.start-Be.start);let Ie=0;for(let be=1;be<ce.length;be++){const Be=ce[Ie],je=ce[be],Ze=Be.start+Be.count,De=W(je.start,b.width,4),st=W(Be.start,b.width,4);je.start<=Ze+1&&De===st&&W(je.start+je.count-1,b.width,4)===De?Be.count=Math.max(Be.count,je.start+je.count-Be.start):(++Ie,ce[Ie]=je)}ce.length=Ie+1;const Le=s.getParameter(s.UNPACK_ROW_LENGTH),Ve=s.getParameter(s.UNPACK_SKIP_PIXELS),We=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let be=0,Be=ce.length;be<Be;be++){const je=ce[be],Ze=Math.floor(je.start/4),De=Math.ceil(je.count/4),st=Ze%b.width,X=Math.floor(Ze/b.width),Ne=De,Te=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,st),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,st,X,Ne,Te,ee,ge,b.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Le),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ve),s.pixelStorei(s.UNPACK_SKIP_ROWS,We)}}function Ee(N,b,ee){let ge=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ge=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ge=s.TEXTURE_3D);const ve=de(N,b),ce=b.source;i.bindTexture(ge,N.__webglTexture,s.TEXTURE0+ee);const Ie=r.get(ce);if(ce.version!==Ie.__version||ve===!0){i.activeTexture(s.TEXTURE0+ee);const Le=Rt.getPrimaries(Rt.workingColorSpace),Ve=b.colorSpace===Ya?null:Rt.getPrimaries(b.colorSpace),We=b.colorSpace===Ya||Le===Ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let be=R(b.image,!1,l.maxTextureSize);be=ot(b,be);const Be=u.convert(b.format,b.colorSpace),je=u.convert(b.type);let Ze=L(b.internalFormat,Be,je,b.colorSpace,b.isVideoTexture);se(ge,b);let De;const st=b.mipmaps,X=b.isVideoTexture!==!0,Ne=Ie.__version===void 0||ve===!0,Te=ce.dataReady,ze=H(b,be);if(b.isDepthTexture)Ze=U(b.format===Wo,b.type),Ne&&(X?i.texStorage2D(s.TEXTURE_2D,1,Ze,be.width,be.height):i.texImage2D(s.TEXTURE_2D,0,Ze,be.width,be.height,0,Be,je,null));else if(b.isDataTexture)if(st.length>0){X&&Ne&&i.texStorage2D(s.TEXTURE_2D,ze,Ze,st[0].width,st[0].height);for(let Ce=0,Se=st.length;Ce<Se;Ce++)De=st[Ce],X?Te&&i.texSubImage2D(s.TEXTURE_2D,Ce,0,0,De.width,De.height,Be,je,De.data):i.texImage2D(s.TEXTURE_2D,Ce,Ze,De.width,De.height,0,Be,je,De.data);b.generateMipmaps=!1}else X?(Ne&&i.texStorage2D(s.TEXTURE_2D,ze,Ze,be.width,be.height),Te&&he(b,be,Be,je)):i.texImage2D(s.TEXTURE_2D,0,Ze,be.width,be.height,0,Be,je,be.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){X&&Ne&&i.texStorage3D(s.TEXTURE_2D_ARRAY,ze,Ze,st[0].width,st[0].height,be.depth);for(let Ce=0,Se=st.length;Ce<Se;Ce++)if(De=st[Ce],b.format!==yi)if(Be!==null)if(X){if(Te)if(b.layerUpdates.size>0){const He=cv(De.width,De.height,b.format,b.type);for(const rt of b.layerUpdates){const Ut=De.data.subarray(rt*He/De.data.BYTES_PER_ELEMENT,(rt+1)*He/De.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ce,0,0,rt,De.width,De.height,1,Be,Ut)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ce,0,0,0,De.width,De.height,be.depth,Be,De.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ce,Ze,De.width,De.height,be.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Te&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Ce,0,0,0,De.width,De.height,be.depth,Be,je,De.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Ce,Ze,De.width,De.height,be.depth,0,Be,je,De.data)}else{X&&Ne&&i.texStorage2D(s.TEXTURE_2D,ze,Ze,st[0].width,st[0].height);for(let Ce=0,Se=st.length;Ce<Se;Ce++)De=st[Ce],b.format!==yi?Be!==null?X?Te&&i.compressedTexSubImage2D(s.TEXTURE_2D,Ce,0,0,De.width,De.height,Be,De.data):i.compressedTexImage2D(s.TEXTURE_2D,Ce,Ze,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Te&&i.texSubImage2D(s.TEXTURE_2D,Ce,0,0,De.width,De.height,Be,je,De.data):i.texImage2D(s.TEXTURE_2D,Ce,Ze,De.width,De.height,0,Be,je,De.data)}else if(b.isDataArrayTexture)if(X){if(Ne&&i.texStorage3D(s.TEXTURE_2D_ARRAY,ze,Ze,be.width,be.height,be.depth),Te)if(b.layerUpdates.size>0){const Ce=cv(be.width,be.height,b.format,b.type);for(const Se of b.layerUpdates){const He=be.data.subarray(Se*Ce/be.data.BYTES_PER_ELEMENT,(Se+1)*Ce/be.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Se,be.width,be.height,1,Be,je,He)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Be,je,be.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ze,be.width,be.height,be.depth,0,Be,je,be.data);else if(b.isData3DTexture)X?(Ne&&i.texStorage3D(s.TEXTURE_3D,ze,Ze,be.width,be.height,be.depth),Te&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Be,je,be.data)):i.texImage3D(s.TEXTURE_3D,0,Ze,be.width,be.height,be.depth,0,Be,je,be.data);else if(b.isFramebufferTexture){if(Ne)if(X)i.texStorage2D(s.TEXTURE_2D,ze,Ze,be.width,be.height);else{let Ce=be.width,Se=be.height;for(let He=0;He<ze;He++)i.texImage2D(s.TEXTURE_2D,He,Ze,Ce,Se,0,Be,je,null),Ce>>=1,Se>>=1}}else if(st.length>0){if(X&&Ne){const Ce=Jt(st[0]);i.texStorage2D(s.TEXTURE_2D,ze,Ze,Ce.width,Ce.height)}for(let Ce=0,Se=st.length;Ce<Se;Ce++)De=st[Ce],X?Te&&i.texSubImage2D(s.TEXTURE_2D,Ce,0,0,Be,je,De):i.texImage2D(s.TEXTURE_2D,Ce,Ze,Be,je,De);b.generateMipmaps=!1}else if(X){if(Ne){const Ce=Jt(be);i.texStorage2D(s.TEXTURE_2D,ze,Ze,Ce.width,Ce.height)}Te&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,je,be)}else i.texImage2D(s.TEXTURE_2D,0,Ze,Be,je,be);y(b)&&_(ge),Ie.__version=ce.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Ae(N,b,ee){if(b.image.length!==6)return;const ge=de(N,b),ve=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+ee);const ce=r.get(ve);if(ve.version!==ce.__version||ge===!0){i.activeTexture(s.TEXTURE0+ee);const Ie=Rt.getPrimaries(Rt.workingColorSpace),Le=b.colorSpace===Ya?null:Rt.getPrimaries(b.colorSpace),Ve=b.colorSpace===Ya||Ie===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const We=b.isCompressedTexture||b.image[0].isCompressedTexture,be=b.image[0]&&b.image[0].isDataTexture,Be=[];for(let Se=0;Se<6;Se++)!We&&!be?Be[Se]=R(b.image[Se],!0,l.maxCubemapSize):Be[Se]=be?b.image[Se].image:b.image[Se],Be[Se]=ot(b,Be[Se]);const je=Be[0],Ze=u.convert(b.format,b.colorSpace),De=u.convert(b.type),st=L(b.internalFormat,Ze,De,b.colorSpace),X=b.isVideoTexture!==!0,Ne=ce.__version===void 0||ge===!0,Te=ve.dataReady;let ze=H(b,je);se(s.TEXTURE_CUBE_MAP,b);let Ce;if(We){X&&Ne&&i.texStorage2D(s.TEXTURE_CUBE_MAP,ze,st,je.width,je.height);for(let Se=0;Se<6;Se++){Ce=Be[Se].mipmaps;for(let He=0;He<Ce.length;He++){const rt=Ce[He];b.format!==yi?Ze!==null?X?Te&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He,0,0,rt.width,rt.height,Ze,rt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He,st,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He,0,0,rt.width,rt.height,Ze,De,rt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He,st,rt.width,rt.height,0,Ze,De,rt.data)}}}else{if(Ce=b.mipmaps,X&&Ne){Ce.length>0&&ze++;const Se=Jt(Be[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,ze,st,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(be){X?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Be[Se].width,Be[Se].height,Ze,De,Be[Se].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,st,Be[Se].width,Be[Se].height,0,Ze,De,Be[Se].data);for(let He=0;He<Ce.length;He++){const Ut=Ce[He].image[Se].image;X?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He+1,0,0,Ut.width,Ut.height,Ze,De,Ut.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He+1,st,Ut.width,Ut.height,0,Ze,De,Ut.data)}}else{X?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ze,De,Be[Se]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,st,Ze,De,Be[Se]);for(let He=0;He<Ce.length;He++){const rt=Ce[He];X?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He+1,0,0,Ze,De,rt.image[Se]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He+1,st,Ze,De,rt.image[Se])}}}y(b)&&_(s.TEXTURE_CUBE_MAP),ce.__version=ve.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function we(N,b,ee,ge,ve,ce){const Ie=u.convert(ee.format,ee.colorSpace),Le=u.convert(ee.type),Ve=L(ee.internalFormat,Ie,Le,ee.colorSpace),We=r.get(b),be=r.get(ee);if(be.__renderTarget=b,!We.__hasExternalTextures){const Be=Math.max(1,b.width>>ce),je=Math.max(1,b.height>>ce);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?i.texImage3D(ve,ce,Ve,Be,je,b.depth,0,Ie,Le,null):i.texImage2D(ve,ce,Ve,Be,je,0,Ie,Le,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),xt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,ve,be.__webglTexture,0,ke(b)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ge,ve,be.__webglTexture,ce),i.bindFramebuffer(s.FRAMEBUFFER,null)}function at(N,b,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,N),b.depthBuffer){const ge=b.depthTexture,ve=ge&&ge.isDepthTexture?ge.type:null,ce=U(b.stencilBuffer,ve),Ie=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=ke(b);xt(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Le,ce,b.width,b.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,ce,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ce,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ie,s.RENDERBUFFER,N)}else{const ge=b.textures;for(let ve=0;ve<ge.length;ve++){const ce=ge[ve],Ie=u.convert(ce.format,ce.colorSpace),Le=u.convert(ce.type),Ve=L(ce.internalFormat,Ie,Le,ce.colorSpace),We=ke(b);ee&&xt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,We,Ve,b.width,b.height):xt(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,We,Ve,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ve,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Xe(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(b.depthTexture);ge.__renderTarget=b,(!ge.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ue(b.depthTexture,0);const ve=ge.__webglTexture,ce=ke(b);if(b.depthTexture.format===Xo)xt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(b.depthTexture.format===Wo)xt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function et(N){const b=r.get(N),ee=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const ge=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ge){const ve=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ge.removeEventListener("dispose",ve)};ge.addEventListener("dispose",ve),b.__depthDisposeCallback=ve}b.__boundDepthTexture=ge}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");const ge=N.texture.mipmaps;ge&&ge.length>0?Xe(b.__webglFramebuffer[0],N):Xe(b.__webglFramebuffer,N)}else if(ee){b.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ge]),b.__webglDepthbuffer[ge]===void 0)b.__webglDepthbuffer[ge]=s.createRenderbuffer(),at(b.__webglDepthbuffer[ge],N,!1);else{const ve=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer[ge];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,ce)}}else{const ge=N.texture.mipmaps;if(ge&&ge.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),at(b.__webglDepthbuffer,N,!1);else{const ve=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,ce)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(N,b,ee){const ge=r.get(N);b!==void 0&&we(ge.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&et(N)}function ht(N){const b=N.texture,ee=r.get(N),ge=r.get(b);N.addEventListener("dispose",z);const ve=N.textures,ce=N.isWebGLCubeRenderTarget===!0,Ie=ve.length>1;if(Ie||(ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture()),ge.__version=b.version,f.memory.textures++),ce){ee.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer[Le]=[];for(let Ve=0;Ve<b.mipmaps.length;Ve++)ee.__webglFramebuffer[Le][Ve]=s.createFramebuffer()}else ee.__webglFramebuffer[Le]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Le=0;Le<b.mipmaps.length;Le++)ee.__webglFramebuffer[Le]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Ie)for(let Le=0,Ve=ve.length;Le<Ve;Le++){const We=r.get(ve[Le]);We.__webglTexture===void 0&&(We.__webglTexture=s.createTexture(),f.memory.textures++)}if(N.samples>0&&xt(N)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Le=0;Le<ve.length;Le++){const Ve=ve[Le];ee.__webglColorRenderbuffer[Le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[Le]);const We=u.convert(Ve.format,Ve.colorSpace),be=u.convert(Ve.type),Be=L(Ve.internalFormat,We,be,Ve.colorSpace,N.isXRRenderTarget===!0),je=ke(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,je,Be,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,ee.__webglColorRenderbuffer[Le])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),at(ee.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){i.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),se(s.TEXTURE_CUBE_MAP,b);for(let Le=0;Le<6;Le++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ve=0;Ve<b.mipmaps.length;Ve++)we(ee.__webglFramebuffer[Le][Ve],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ve);else we(ee.__webglFramebuffer[Le],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);y(b)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ie){for(let Le=0,Ve=ve.length;Le<Ve;Le++){const We=ve[Le],be=r.get(We);i.bindTexture(s.TEXTURE_2D,be.__webglTexture),se(s.TEXTURE_2D,We),we(ee.__webglFramebuffer,N,We,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,0),y(We)&&_(s.TEXTURE_2D)}i.unbindTexture()}else{let Le=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Le=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Le,ge.__webglTexture),se(Le,b),b.mipmaps&&b.mipmaps.length>0)for(let Ve=0;Ve<b.mipmaps.length;Ve++)we(ee.__webglFramebuffer[Ve],N,b,s.COLOR_ATTACHMENT0,Le,Ve);else we(ee.__webglFramebuffer,N,b,s.COLOR_ATTACHMENT0,Le,0);y(b)&&_(Le),i.unbindTexture()}N.depthBuffer&&et(N)}function F(N){const b=N.textures;for(let ee=0,ge=b.length;ee<ge;ee++){const ve=b[ee];if(y(ve)){const ce=O(N),Ie=r.get(ve).__webglTexture;i.bindTexture(ce,Ie),_(ce),i.unbindTexture()}}}const bn=[],Mt=[];function gt(N){if(N.samples>0){if(xt(N)===!1){const b=N.textures,ee=N.width,ge=N.height;let ve=s.COLOR_BUFFER_BIT;const ce=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=r.get(N),Le=b.length>1;if(Le)for(let We=0;We<b.length;We++)i.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const Ve=N.texture.mipmaps;Ve&&Ve.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let We=0;We<b.length;We++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),Le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[We]);const be=r.get(b[We]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,be,0)}s.blitFramebuffer(0,0,ee,ge,0,0,ee,ge,ve,s.NEAREST),m===!0&&(bn.length=0,Mt.length=0,bn.push(s.COLOR_ATTACHMENT0+We),N.depthBuffer&&N.resolveDepthBuffer===!1&&(bn.push(ce),Mt.push(ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Mt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,bn))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Le)for(let We=0;We<b.length;We++){i.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[We]);const be=r.get(b[We]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,be,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function ke(N){return Math.min(l.maxSamples,N.samples)}function xt(N){const b=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ke(N){const b=f.render.frame;g.get(N)!==b&&(g.set(N,b),N.update())}function ot(N,b){const ee=N.colorSpace,ge=N.format,ve=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||ee!==Ns&&ee!==Ya&&(Rt.getTransfer(ee)===zt?(ge!==yi||ve!==ca)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),b}function Jt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=ae,this.resetTextureUnits=oe,this.setTexture2D=ue,this.setTexture2DArray=P,this.setTexture3D=q,this.setTextureCube=Y,this.rebindTextures=bt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=we,this.useMultisampledRTT=xt}function M1(s,e){function i(r,l=Ya){let u;const f=Rt.getTransfer(l);if(r===ca)return s.UNSIGNED_BYTE;if(r===Vh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===kh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===a0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===n0)return s.BYTE;if(r===i0)return s.SHORT;if(r===Vo)return s.UNSIGNED_SHORT;if(r===Gh)return s.INT;if(r===Dr)return s.UNSIGNED_INT;if(r===sa)return s.FLOAT;if(r===Yo)return s.HALF_FLOAT;if(r===r0)return s.ALPHA;if(r===s0)return s.RGB;if(r===yi)return s.RGBA;if(r===Xo)return s.DEPTH_COMPONENT;if(r===Wo)return s.DEPTH_STENCIL;if(r===o0)return s.RED;if(r===Xh)return s.RED_INTEGER;if(r===l0)return s.RG;if(r===Wh)return s.RG_INTEGER;if(r===qh)return s.RGBA_INTEGER;if(r===Pu||r===Iu||r===Bu||r===zu)if(f===zt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Pu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Iu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Bu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Pu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Iu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Bu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rh||r===sh||r===oh||r===lh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===rh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===oh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===uh||r===ch||r===fh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===uh||r===ch)return f===zt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===fh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===dh||r===hh||r===ph||r===mh||r===gh||r===_h||r===vh||r===xh||r===yh||r===Sh||r===Eh||r===Mh||r===bh||r===Th)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===dh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ph)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===mh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_h)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Eh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Mh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Th)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fu||r===Ah||r===Rh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Fu)return f===zt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ah)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Rh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===u0||r===Ch||r===wh||r===Dh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Fu)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Ch)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===wh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Dh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ko?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const b1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class A1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Xn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Qa({vertexShader:b1,fragmentShader:T1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Di(new Qu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class R1 extends Ps{constructor(e,i){super();const r=this;let l=null,u=1,f=null,h="local-floor",m=1,p=null,g=null,v=null,x=null,E=null,M=null;const R=new A1,y=i.getContextAttributes();let _=null,O=null;const L=[],U=[],H=new Ht;let k=null;const z=new di;z.viewport=new nn;const j=new di;j.viewport=new nn;const D=[z,j],w=new jE;let G=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let he=L[W];return he===void 0&&(he=new Ld,L[W]=he),he.getTargetRaySpace()},this.getControllerGrip=function(W){let he=L[W];return he===void 0&&(he=new Ld,L[W]=he),he.getGripSpace()},this.getHand=function(W){let he=L[W];return he===void 0&&(he=new Ld,L[W]=he),he.getHandSpace()};function ae(W){const he=U.indexOf(W.inputSource);if(he===-1)return;const Ee=L[he];Ee!==void 0&&(Ee.update(W.inputSource,W.frame,p||f),Ee.dispatchEvent({type:W.type,data:W.inputSource}))}function xe(){l.removeEventListener("select",ae),l.removeEventListener("selectstart",ae),l.removeEventListener("selectend",ae),l.removeEventListener("squeeze",ae),l.removeEventListener("squeezestart",ae),l.removeEventListener("squeezeend",ae),l.removeEventListener("end",xe),l.removeEventListener("inputsourceschange",ue);for(let W=0;W<L.length;W++){const he=U[W];he!==null&&(U[W]=null,L[W].disconnect(he))}G=null,oe=null,R.reset(),e.setRenderTarget(_),E=null,x=null,v=null,l=null,O=null,de.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){u=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){h=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(W){p=W},this.getBaseLayer=function(){return x!==null?x:E},this.getBinding=function(){return v},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",ae),l.addEventListener("selectstart",ae),l.addEventListener("selectend",ae),l.addEventListener("squeeze",ae),l.addEventListener("squeezestart",ae),l.addEventListener("squeezeend",ae),l.addEventListener("end",xe),l.addEventListener("inputsourceschange",ue),y.xrCompatible!==!0&&await i.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ae=null,we=null;y.depth&&(we=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=y.stencil?Wo:Xo,Ae=y.stencil?ko:Dr);const at={colorFormat:i.RGBA8,depthFormat:we,scaleFactor:u};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(at),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),O=new Ur(x.textureWidth,x.textureHeight,{format:yi,type:ca,depthTexture:new S0(x.textureWidth,x.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ee={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,Ee),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),O=new Ur(E.framebufferWidth,E.framebufferHeight,{format:yi,type:ca,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),de.setContext(l),de.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function ue(W){for(let he=0;he<W.removed.length;he++){const Ee=W.removed[he],Ae=U.indexOf(Ee);Ae>=0&&(U[Ae]=null,L[Ae].disconnect(Ee))}for(let he=0;he<W.added.length;he++){const Ee=W.added[he];let Ae=U.indexOf(Ee);if(Ae===-1){for(let at=0;at<L.length;at++)if(at>=U.length){U.push(Ee),Ae=at;break}else if(U[at]===null){U[at]=Ee,Ae=at;break}if(Ae===-1)break}const we=L[Ae];we&&we.connect(Ee)}}const P=new le,q=new le;function Y(W,he,Ee){P.setFromMatrixPosition(he.matrixWorld),q.setFromMatrixPosition(Ee.matrixWorld);const Ae=P.distanceTo(q),we=he.projectionMatrix.elements,at=Ee.projectionMatrix.elements,Xe=we[14]/(we[10]-1),et=we[14]/(we[10]+1),bt=(we[9]+1)/we[5],ht=(we[9]-1)/we[5],F=(we[8]-1)/we[0],bn=(at[8]+1)/at[0],Mt=Xe*F,gt=Xe*bn,ke=Ae/(-F+bn),xt=ke*-F;if(he.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(xt),W.translateZ(ke),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),we[10]===-1)W.projectionMatrix.copy(he.projectionMatrix),W.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Ke=Xe+ke,ot=et+ke,Jt=Mt-xt,N=gt+(Ae-xt),b=bt*et/ot*Ke,ee=ht*et/ot*Ke;W.projectionMatrix.makePerspective(Jt,N,b,ee,Ke,ot),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Me(W,he){he===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(he.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;let he=W.near,Ee=W.far;R.texture!==null&&(R.depthNear>0&&(he=R.depthNear),R.depthFar>0&&(Ee=R.depthFar)),w.near=j.near=z.near=he,w.far=j.far=z.far=Ee,(G!==w.near||oe!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),G=w.near,oe=w.far),z.layers.mask=W.layers.mask|2,j.layers.mask=W.layers.mask|4,w.layers.mask=z.layers.mask|j.layers.mask;const Ae=W.parent,we=w.cameras;Me(w,Ae);for(let at=0;at<we.length;at++)Me(we[at],Ae);we.length===2?Y(w,z,j):w.projectionMatrix.copy(z.projectionMatrix),A(W,w,Ae)};function A(W,he,Ee){Ee===null?W.matrix.copy(he.matrixWorld):(W.matrix.copy(Ee.matrixWorld),W.matrix.invert(),W.matrix.multiply(he.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(he.projectionMatrix),W.projectionMatrixInverse.copy(he.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Uh*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(x===null&&E===null))return m},this.setFoveation=function(W){m=W,x!==null&&(x.fixedFoveation=W),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=W)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(w)};let B=null;function se(W,he){if(g=he.getViewerPose(p||f),M=he,g!==null){const Ee=g.views;E!==null&&(e.setRenderTargetFramebuffer(O,E.framebuffer),e.setRenderTarget(O));let Ae=!1;Ee.length!==w.cameras.length&&(w.cameras.length=0,Ae=!0);for(let Xe=0;Xe<Ee.length;Xe++){const et=Ee[Xe];let bt=null;if(E!==null)bt=E.getViewport(et);else{const F=v.getViewSubImage(x,et);bt=F.viewport,Xe===0&&(e.setRenderTargetTextures(O,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(O))}let ht=D[Xe];ht===void 0&&(ht=new di,ht.layers.enable(Xe),ht.viewport=new nn,D[Xe]=ht),ht.matrix.fromArray(et.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(et.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(bt.x,bt.y,bt.width,bt.height),Xe===0&&(w.matrix.copy(ht.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Ae===!0&&w.cameras.push(ht)}const we=l.enabledFeatures;if(we&&we.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Xe=v.getDepthInformation(Ee[0]);Xe&&Xe.isValid&&Xe.texture&&R.init(e,Xe,l.renderState)}}for(let Ee=0;Ee<L.length;Ee++){const Ae=U[Ee],we=L[Ee];Ae!==null&&we!==void 0&&we.update(Ae,he,p||f)}B&&B(W,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),M=null}const de=new E0;de.setAnimationLoop(se),this.setAnimationLoop=function(W){B=W},this.dispose=function(){}}}const Er=new fa,C1=new cn;function w1(s,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,_0(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,O,L,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),v(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),x(y,_),_.isMeshPhysicalMaterial&&E(y,_,U)):_.isMeshMatcapMaterial?(u(y,_),M(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),R(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(f(y,_),_.isLineDashedMaterial&&h(y,_)):_.isPointsMaterial?m(y,_,O,L):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===kn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===kn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const O=e.get(_),L=O.envMap,U=O.envMapRotation;L&&(y.envMap.value=L,Er.copy(U),Er.x*=-1,Er.y*=-1,Er.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),y.envMapRotation.value.setFromMatrix4(C1.makeRotationFromEuler(Er)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function f(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function h(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,O,L){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*O,y.scale.value=L*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function E(y,_,O){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===kn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,_){_.matcap&&(y.matcap.value=_.matcap)}function R(y,_){const O=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function D1(s,e,i,r){let l={},u={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,L){const U=L.program;r.uniformBlockBinding(O,U)}function p(O,L){let U=l[O.id];U===void 0&&(M(O),U=g(O),l[O.id]=U,O.addEventListener("dispose",y));const H=L.program;r.updateUBOMapping(O,H);const k=e.render.frame;u[O.id]!==k&&(x(O),u[O.id]=k)}function g(O){const L=v();O.__bindingPointIndex=L;const U=s.createBuffer(),H=O.__size,k=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,H,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,U),U}function v(){for(let O=0;O<h;O++)if(f.indexOf(O)===-1)return f.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const L=l[O.id],U=O.uniforms,H=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let k=0,z=U.length;k<z;k++){const j=Array.isArray(U[k])?U[k]:[U[k]];for(let D=0,w=j.length;D<w;D++){const G=j[D];if(E(G,k,D,H)===!0){const oe=G.__offset,ae=Array.isArray(G.value)?G.value:[G.value];let xe=0;for(let ue=0;ue<ae.length;ue++){const P=ae[ue],q=R(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,oe+xe,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,xe),xe+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,oe,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function E(O,L,U,H){const k=O.value,z=L+"_"+U;if(H[z]===void 0)return typeof k=="number"||typeof k=="boolean"?H[z]=k:H[z]=k.clone(),!0;{const j=H[z];if(typeof k=="number"||typeof k=="boolean"){if(j!==k)return H[z]=k,!0}else if(j.equals(k)===!1)return j.copy(k),!0}return!1}function M(O){const L=O.uniforms;let U=0;const H=16;for(let z=0,j=L.length;z<j;z++){const D=Array.isArray(L[z])?L[z]:[L[z]];for(let w=0,G=D.length;w<G;w++){const oe=D[w],ae=Array.isArray(oe.value)?oe.value:[oe.value];for(let xe=0,ue=ae.length;xe<ue;xe++){const P=ae[xe],q=R(P),Y=U%H,Me=Y%q.boundary,A=Y+Me;U+=Me,A!==0&&H-A<q.storage&&(U+=H-A),oe.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=U,U+=q.storage}}}const k=U%H;return k>0&&(U+=H-k),O.__size=U,O.__cache={},this}function R(O){const L={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(L.boundary=4,L.storage=4):O.isVector2?(L.boundary=8,L.storage=8):O.isVector3||O.isColor?(L.boundary=16,L.storage=12):O.isVector4?(L.boundary=16,L.storage=16):O.isMatrix3?(L.boundary=48,L.storage=48):O.isMatrix4?(L.boundary=64,L.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),L}function y(O){const L=O.target;L.removeEventListener("dispose",y);const U=f.indexOf(L.__bindingPointIndex);f.splice(U,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function _(){for(const O in l)s.deleteBuffer(l[O]);f=[],l={},u={}}return{bind:m,update:p,dispose:_}}class U1{constructor(e={}){const{canvas:i=dE(),context:r=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=f;const M=new Uint32Array(4),R=new Int32Array(4);let y=null,_=null;const O=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Za,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let H=!1;this._outputColorSpace=fi;let k=0,z=0,j=null,D=-1,w=null;const G=new nn,oe=new nn;let ae=null;const xe=new Ft(0);let ue=0,P=i.width,q=i.height,Y=1,Me=null,A=null;const B=new nn(0,0,P,q),se=new nn(0,0,P,q);let de=!1;const W=new y0;let he=!1,Ee=!1;const Ae=new cn,we=new cn,at=new le,Xe=new nn,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function ht(){return j===null?Y:1}let F=r;function bn(C,K){return i.getContext(C,K)}try{const C={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Hh}`),i.addEventListener("webglcontextlost",ze,!1),i.addEventListener("webglcontextrestored",Ce,!1),i.addEventListener("webglcontextcreationerror",Se,!1),F===null){const K="webgl2";if(F=bn(K,C),F===null)throw bn(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Mt,gt,ke,xt,Ke,ot,Jt,N,b,ee,ge,ve,ce,Ie,Le,Ve,We,be,Be,je,Ze,De,st,X;function Ne(){Mt=new GT(F),Mt.init(),De=new M1(F,Mt),gt=new OT(F,Mt,e,De),ke=new S1(F,Mt),gt.reverseDepthBuffer&&x&&ke.buffers.depth.setReversed(!0),xt=new XT(F),Ke=new l1,ot=new E1(F,Mt,ke,Ke,gt,De,xt),Jt=new IT(U),N=new HT(U),b=new KE(F),st=new LT(F,b),ee=new VT(F,b,xt,st),ge=new qT(F,ee,b,xt),Be=new WT(F,gt,ot),Ve=new PT(Ke),ve=new o1(U,Jt,N,Mt,gt,st,Ve),ce=new w1(U,Ke),Ie=new c1,Le=new g1(Mt),be=new UT(U,Jt,N,ke,ge,E,m),We=new x1(U,ge,gt),X=new D1(F,xt,gt,ke),je=new NT(F,Mt,xt),Ze=new kT(F,Mt,xt),xt.programs=ve.programs,U.capabilities=gt,U.extensions=Mt,U.properties=Ke,U.renderLists=Ie,U.shadowMap=We,U.state=ke,U.info=xt}Ne();const Te=new R1(U,F);this.xr=Te,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=Mt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Mt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(P,q,!1))},this.getSize=function(C){return C.set(P,q)},this.setSize=function(C,K,ie=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=C,q=K,i.width=Math.floor(C*Y),i.height=Math.floor(K*Y),ie===!0&&(i.style.width=C+"px",i.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(P*Y,q*Y).floor()},this.setDrawingBufferSize=function(C,K,ie){P=C,q=K,Y=ie,i.width=Math.floor(C*ie),i.height=Math.floor(K*ie),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(G)},this.getViewport=function(C){return C.copy(B)},this.setViewport=function(C,K,ie,re){C.isVector4?B.set(C.x,C.y,C.z,C.w):B.set(C,K,ie,re),ke.viewport(G.copy(B).multiplyScalar(Y).round())},this.getScissor=function(C){return C.copy(se)},this.setScissor=function(C,K,ie,re){C.isVector4?se.set(C.x,C.y,C.z,C.w):se.set(C,K,ie,re),ke.scissor(oe.copy(se).multiplyScalar(Y).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(C){ke.setScissorTest(de=C)},this.setOpaqueSort=function(C){Me=C},this.setTransparentSort=function(C){A=C},this.getClearColor=function(C){return C.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(C=!0,K=!0,ie=!0){let re=0;if(C){let Q=!1;if(j!==null){const Re=j.texture.format;Q=Re===qh||Re===Wh||Re===Xh}if(Q){const Re=j.texture.type,Ue=Re===ca||Re===Dr||Re===Vo||Re===ko||Re===Vh||Re===kh,Pe=be.getClearColor(),Fe=be.getClearAlpha(),nt=Pe.r,Je=Pe.g,qe=Pe.b;Ue?(M[0]=nt,M[1]=Je,M[2]=qe,M[3]=Fe,F.clearBufferuiv(F.COLOR,0,M)):(R[0]=nt,R[1]=Je,R[2]=qe,R[3]=Fe,F.clearBufferiv(F.COLOR,0,R))}else re|=F.COLOR_BUFFER_BIT}K&&(re|=F.DEPTH_BUFFER_BIT),ie&&(re|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ze,!1),i.removeEventListener("webglcontextrestored",Ce,!1),i.removeEventListener("webglcontextcreationerror",Se,!1),be.dispose(),Ie.dispose(),Le.dispose(),Ke.dispose(),Jt.dispose(),N.dispose(),ge.dispose(),st.dispose(),X.dispose(),ve.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",fn),Te.removeEventListener("sessionend",Tn),Bn.stop()};function ze(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const C=xt.autoReset,K=We.enabled,ie=We.autoUpdate,re=We.needsUpdate,Q=We.type;Ne(),xt.autoReset=C,We.enabled=K,We.autoUpdate=ie,We.needsUpdate=re,We.type=Q}function Se(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function He(C){const K=C.target;K.removeEventListener("dispose",He),rt(K)}function rt(C){Ut(C),Ke.remove(C)}function Ut(C){const K=Ke.get(C).programs;K!==void 0&&(K.forEach(function(ie){ve.releaseProgram(ie)}),C.isShaderMaterial&&ve.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,ie,re,Q,Re){K===null&&(K=et);const Ue=Q.isMesh&&Q.matrixWorld.determinant()<0,Pe=er(C,K,ie,re,Q);ke.setMaterial(re,Ue);let Fe=ie.index,nt=1;if(re.wireframe===!0){if(Fe=ee.getWireframeAttribute(ie),Fe===void 0)return;nt=2}const Je=ie.drawRange,qe=ie.attributes.position;let ct=Je.start*nt,wt=(Je.start+Je.count)*nt;Re!==null&&(ct=Math.max(ct,Re.start*nt),wt=Math.min(wt,(Re.start+Re.count)*nt)),Fe!==null?(ct=Math.max(ct,0),wt=Math.min(wt,Fe.count)):qe!=null&&(ct=Math.max(ct,0),wt=Math.min(wt,qe.count));const Wt=wt-ct;if(Wt<0||Wt===1/0)return;st.setup(Q,re,Pe,ie,Fe);let pt,Dt=je;if(Fe!==null&&(pt=b.get(Fe),Dt=Ze,Dt.setIndex(pt)),Q.isMesh)re.wireframe===!0?(ke.setLineWidth(re.wireframeLinewidth*ht()),Dt.setMode(F.LINES)):Dt.setMode(F.TRIANGLES);else if(Q.isLine){let Qe=re.linewidth;Qe===void 0&&(Qe=1),ke.setLineWidth(Qe*ht()),Q.isLineSegments?Dt.setMode(F.LINES):Q.isLineLoop?Dt.setMode(F.LINE_LOOP):Dt.setMode(F.LINE_STRIP)}else Q.isPoints?Dt.setMode(F.POINTS):Q.isSprite&&Dt.setMode(F.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Cs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Dt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))Dt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Qe=Q._multiDrawStarts,Ot=Q._multiDrawCounts,yt=Q._multiDrawCount,vn=Fe?b.get(Fe).bytesPerElement:1,va=Ke.get(re).currentProgram.getUniforms();for(let kt=0;kt<yt;kt++)va.setValue(F,"_gl_DrawID",kt),Dt.render(Qe[kt]/vn,Ot[kt])}else if(Q.isInstancedMesh)Dt.renderInstances(ct,Wt,Q.count);else if(ie.isInstancedBufferGeometry){const Qe=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Ot=Math.min(ie.instanceCount,Qe);Dt.renderInstances(ct,Wt,Ot)}else Dt.render(ct,Wt)};function Tt(C,K,ie){C.transparent===!0&&C.side===ra&&C.forceSinglePass===!1?(C.side=kn,C.needsUpdate=!0,ga(C,K,ie),C.side=Ka,C.needsUpdate=!0,ga(C,K,ie),C.side=ra):ga(C,K,ie)}this.compile=function(C,K,ie=null){ie===null&&(ie=C),_=Le.get(ie),_.init(K),L.push(_),ie.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(_.pushLight(Q),Q.castShadow&&_.pushShadow(Q))}),C!==ie&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(_.pushLight(Q),Q.castShadow&&_.pushShadow(Q))}),_.setupLights();const re=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Re=Q.material;if(Re)if(Array.isArray(Re))for(let Ue=0;Ue<Re.length;Ue++){const Pe=Re[Ue];Tt(Pe,ie,Q),re.add(Pe)}else Tt(Re,ie,Q),re.add(Re)}),_=L.pop(),re},this.compileAsync=function(C,K,ie=null){const re=this.compile(C,K,ie);return new Promise(Q=>{function Re(){if(re.forEach(function(Ue){Ke.get(Ue).currentProgram.isReady()&&re.delete(Ue)}),re.size===0){Q(C);return}setTimeout(Re,10)}Mt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Wn=null;function _n(C){Wn&&Wn(C)}function fn(){Bn.stop()}function Tn(){Bn.start()}const Bn=new E0;Bn.setAnimationLoop(_n),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(C){Wn=C,Te.setAnimationLoop(C),C===null?Bn.stop():Bn.start()},Te.addEventListener("sessionstart",fn),Te.addEventListener("sessionend",Tn),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(K),K=Te.getCamera()),C.isScene===!0&&C.onBeforeRender(U,C,K,j),_=Le.get(C,L.length),_.init(K),L.push(_),we.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),W.setFromProjectionMatrix(we),Ee=this.localClippingEnabled,he=Ve.init(this.clippingPlanes,Ee),y=Ie.get(C,O.length),y.init(),O.push(y),Te.enabled===!0&&Te.isPresenting===!0){const Re=U.xr.getDepthSensingMesh();Re!==null&&Ja(Re,K,-1/0,U.sortObjects)}Ja(C,K,0,U.sortObjects),y.finish(),U.sortObjects===!0&&y.sort(Me,A),bt=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,bt&&be.addToRenderList(y,C),this.info.render.frame++,he===!0&&Ve.beginShadows();const ie=_.state.shadowsArray;We.render(ie,C,K),he===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=y.opaque,Q=y.transmissive;if(_.setupLights(),K.isArrayCamera){const Re=K.cameras;if(Q.length>0)for(let Ue=0,Pe=Re.length;Ue<Pe;Ue++){const Fe=Re[Ue];tl(re,Q,C,Fe)}bt&&be.render(C);for(let Ue=0,Pe=Re.length;Ue<Pe;Ue++){const Fe=Re[Ue];el(y,C,Fe,Fe.viewport)}}else Q.length>0&&tl(re,Q,C,K),bt&&be.render(C),el(y,C,K);j!==null&&z===0&&(ot.updateMultisampleRenderTarget(j),ot.updateRenderTargetMipmap(j)),C.isScene===!0&&C.onAfterRender(U,C,K),st.resetDefaultState(),D=-1,w=null,L.pop(),L.length>0?(_=L[L.length-1],he===!0&&Ve.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,O.pop(),O.length>0?y=O[O.length-1]:y=null};function Ja(C,K,ie,re){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)ie=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||W.intersectsSprite(C)){re&&Xe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(we);const Ue=ge.update(C),Pe=C.material;Pe.visible&&y.push(C,Ue,Pe,ie,Xe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||W.intersectsObject(C))){const Ue=ge.update(C),Pe=C.material;if(re&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Xe.copy(C.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Xe.copy(Ue.boundingSphere.center)),Xe.applyMatrix4(C.matrixWorld).applyMatrix4(we)),Array.isArray(Pe)){const Fe=Ue.groups;for(let nt=0,Je=Fe.length;nt<Je;nt++){const qe=Fe[nt],ct=Pe[qe.materialIndex];ct&&ct.visible&&y.push(C,Ue,ct,ie,Xe.z,qe)}}else Pe.visible&&y.push(C,Ue,Pe,ie,Xe.z,null)}}const Re=C.children;for(let Ue=0,Pe=Re.length;Ue<Pe;Ue++)Ja(Re[Ue],K,ie,re)}function el(C,K,ie,re){const Q=C.opaque,Re=C.transmissive,Ue=C.transparent;_.setupLightsView(ie),he===!0&&Ve.setGlobalState(U.clippingPlanes,ie),re&&ke.viewport(G.copy(re)),Q.length>0&&$a(Q,K,ie),Re.length>0&&$a(Re,K,ie),Ue.length>0&&$a(Ue,K,ie),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function tl(C,K,ie,re){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[re.id]===void 0&&(_.state.transmissionRenderTarget[re.id]=new Ur(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float")?Yo:ca,minFilter:Cr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const Re=_.state.transmissionRenderTarget[re.id],Ue=re.viewport||G;Re.setSize(Ue.z*U.transmissionResolutionScale,Ue.w*U.transmissionResolutionScale);const Pe=U.getRenderTarget(),Fe=U.getActiveCubeFace(),nt=U.getActiveMipmapLevel();U.setRenderTarget(Re),U.getClearColor(xe),ue=U.getClearAlpha(),ue<1&&U.setClearColor(16777215,.5),U.clear(),bt&&be.render(ie);const Je=U.toneMapping;U.toneMapping=Za;const qe=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),_.setupLightsView(re),he===!0&&Ve.setGlobalState(U.clippingPlanes,re),$a(C,ie,re),ot.updateMultisampleRenderTarget(Re),ot.updateRenderTargetMipmap(Re),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let wt=0,Wt=K.length;wt<Wt;wt++){const pt=K[wt],Dt=pt.object,Qe=pt.geometry,Ot=pt.material,yt=pt.group;if(Ot.side===ra&&Dt.layers.test(re.layers)){const vn=Ot.side;Ot.side=kn,Ot.needsUpdate=!0,ma(Dt,ie,re,Qe,Ot,yt),Ot.side=vn,Ot.needsUpdate=!0,ct=!0}}ct===!0&&(ot.updateMultisampleRenderTarget(Re),ot.updateRenderTargetMipmap(Re))}U.setRenderTarget(Pe,Fe,nt),U.setClearColor(xe,ue),qe!==void 0&&(re.viewport=qe),U.toneMapping=Je}function $a(C,K,ie){const re=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,Re=C.length;Q<Re;Q++){const Ue=C[Q],Pe=Ue.object,Fe=Ue.geometry,nt=Ue.group;let Je=Ue.material;Je.allowOverride===!0&&re!==null&&(Je=re),Pe.layers.test(ie.layers)&&ma(Pe,K,ie,Fe,Je,nt)}}function ma(C,K,ie,re,Q,Re){C.onBeforeRender(U,K,ie,re,Q,Re),C.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(U,K,ie,re,C,Re),Q.transparent===!0&&Q.side===ra&&Q.forceSinglePass===!1?(Q.side=kn,Q.needsUpdate=!0,U.renderBufferDirect(ie,K,re,Q,C,Re),Q.side=Ka,Q.needsUpdate=!0,U.renderBufferDirect(ie,K,re,Q,C,Re),Q.side=ra):U.renderBufferDirect(ie,K,re,Q,C,Re),C.onAfterRender(U,K,ie,re,Q,Re)}function ga(C,K,ie){K.isScene!==!0&&(K=et);const re=Ke.get(C),Q=_.state.lights,Re=_.state.shadowsArray,Ue=Q.state.version,Pe=ve.getParameters(C,Q.state,Re,K,ie),Fe=ve.getProgramCacheKey(Pe);let nt=re.programs;re.environment=C.isMeshStandardMaterial?K.environment:null,re.fog=K.fog,re.envMap=(C.isMeshStandardMaterial?N:Jt).get(C.envMap||re.environment),re.envMapRotation=re.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,nt===void 0&&(C.addEventListener("dispose",He),nt=new Map,re.programs=nt);let Je=nt.get(Fe);if(Je!==void 0){if(re.currentProgram===Je&&re.lightsStateVersion===Ue)return Pi(C,Pe),Je}else Pe.uniforms=ve.getUniforms(C),C.onBeforeCompile(Pe,U),Je=ve.acquireProgram(Pe,Fe),nt.set(Fe,Je),re.uniforms=Pe.uniforms;const qe=re.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qe.clippingPlanes=Ve.uniform),Pi(C,Pe),re.needsLights=sn(C),re.lightsStateVersion=Ue,re.needsLights&&(qe.ambientLightColor.value=Q.state.ambient,qe.lightProbe.value=Q.state.probe,qe.directionalLights.value=Q.state.directional,qe.directionalLightShadows.value=Q.state.directionalShadow,qe.spotLights.value=Q.state.spot,qe.spotLightShadows.value=Q.state.spotShadow,qe.rectAreaLights.value=Q.state.rectArea,qe.ltc_1.value=Q.state.rectAreaLTC1,qe.ltc_2.value=Q.state.rectAreaLTC2,qe.pointLights.value=Q.state.point,qe.pointLightShadows.value=Q.state.pointShadow,qe.hemisphereLights.value=Q.state.hemi,qe.directionalShadowMap.value=Q.state.directionalShadowMap,qe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,qe.spotShadowMap.value=Q.state.spotShadowMap,qe.spotLightMatrix.value=Q.state.spotLightMatrix,qe.spotLightMap.value=Q.state.spotLightMap,qe.pointShadowMap.value=Q.state.pointShadowMap,qe.pointShadowMatrix.value=Q.state.pointShadowMatrix),re.currentProgram=Je,re.uniformsList=null,Je}function Oi(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=Hu.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function Pi(C,K){const ie=Ke.get(C);ie.outputColorSpace=K.outputColorSpace,ie.batching=K.batching,ie.batchingColor=K.batchingColor,ie.instancing=K.instancing,ie.instancingColor=K.instancingColor,ie.instancingMorph=K.instancingMorph,ie.skinning=K.skinning,ie.morphTargets=K.morphTargets,ie.morphNormals=K.morphNormals,ie.morphColors=K.morphColors,ie.morphTargetsCount=K.morphTargetsCount,ie.numClippingPlanes=K.numClippingPlanes,ie.numIntersection=K.numClipIntersection,ie.vertexAlphas=K.vertexAlphas,ie.vertexTangents=K.vertexTangents,ie.toneMapping=K.toneMapping}function er(C,K,ie,re,Q){K.isScene!==!0&&(K=et),ot.resetTextureUnits();const Re=K.fog,Ue=re.isMeshStandardMaterial?K.environment:null,Pe=j===null?U.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ns,Fe=(re.isMeshStandardMaterial?N:Jt).get(re.envMap||Ue),nt=re.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Je=!!ie.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),qe=!!ie.morphAttributes.position,ct=!!ie.morphAttributes.normal,wt=!!ie.morphAttributes.color;let Wt=Za;re.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Wt=U.toneMapping);const pt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Dt=pt!==void 0?pt.length:0,Qe=Ke.get(re),Ot=_.state.lights;if(he===!0&&(Ee===!0||C!==w)){const xn=C===w&&re.id===D;Ve.setState(re,C,xn)}let yt=!1;re.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Ot.state.version||Qe.outputColorSpace!==Pe||Q.isBatchedMesh&&Qe.batching===!1||!Q.isBatchedMesh&&Qe.batching===!0||Q.isBatchedMesh&&Qe.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Qe.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Qe.instancing===!1||!Q.isInstancedMesh&&Qe.instancing===!0||Q.isSkinnedMesh&&Qe.skinning===!1||!Q.isSkinnedMesh&&Qe.skinning===!0||Q.isInstancedMesh&&Qe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Qe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Qe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Qe.instancingMorph===!1&&Q.morphTexture!==null||Qe.envMap!==Fe||re.fog===!0&&Qe.fog!==Re||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ve.numPlanes||Qe.numIntersection!==Ve.numIntersection)||Qe.vertexAlphas!==nt||Qe.vertexTangents!==Je||Qe.morphTargets!==qe||Qe.morphNormals!==ct||Qe.morphColors!==wt||Qe.toneMapping!==Wt||Qe.morphTargetsCount!==Dt)&&(yt=!0):(yt=!0,Qe.__version=re.version);let vn=Qe.currentProgram;yt===!0&&(vn=ga(re,K,Q));let va=!1,kt=!1,Bi=!1;const Gt=vn.getUniforms(),Dn=Qe.uniforms;if(ke.useProgram(vn.program)&&(va=!0,kt=!0,Bi=!0),re.id!==D&&(D=re.id,kt=!0),va||w!==C){ke.buffers.depth.getReversed()?(Ae.copy(C.projectionMatrix),pE(Ae),mE(Ae),Gt.setValue(F,"projectionMatrix",Ae)):Gt.setValue(F,"projectionMatrix",C.projectionMatrix),Gt.setValue(F,"viewMatrix",C.matrixWorldInverse);const An=Gt.map.cameraPosition;An!==void 0&&An.setValue(F,at.setFromMatrixPosition(C.matrixWorld)),gt.logarithmicDepthBuffer&&Gt.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Gt.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,kt=!0,Bi=!0)}if(Q.isSkinnedMesh){Gt.setOptional(F,Q,"bindMatrix"),Gt.setOptional(F,Q,"bindMatrixInverse");const xn=Q.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Gt.setValue(F,"boneTexture",xn.boneTexture,ot))}Q.isBatchedMesh&&(Gt.setOptional(F,Q,"batchingTexture"),Gt.setValue(F,"batchingTexture",Q._matricesTexture,ot),Gt.setOptional(F,Q,"batchingIdTexture"),Gt.setValue(F,"batchingIdTexture",Q._indirectTexture,ot),Gt.setOptional(F,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Gt.setValue(F,"batchingColorTexture",Q._colorsTexture,ot));const dn=ie.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&Be.update(Q,ie,vn),(kt||Qe.receiveShadow!==Q.receiveShadow)&&(Qe.receiveShadow=Q.receiveShadow,Gt.setValue(F,"receiveShadow",Q.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Dn.envMap.value=Fe,Dn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&K.environment!==null&&(Dn.envMapIntensity.value=K.environmentIntensity),kt&&(Gt.setValue(F,"toneMappingExposure",U.toneMappingExposure),Qe.needsLights&&_a(Dn,Bi),Re&&re.fog===!0&&ce.refreshFogUniforms(Dn,Re),ce.refreshMaterialUniforms(Dn,re,Y,q,_.state.transmissionRenderTarget[C.id]),Hu.upload(F,Oi(Qe),Dn,ot)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Hu.upload(F,Oi(Qe),Dn,ot),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Gt.setValue(F,"center",Q.center),Gt.setValue(F,"modelViewMatrix",Q.modelViewMatrix),Gt.setValue(F,"normalMatrix",Q.normalMatrix),Gt.setValue(F,"modelMatrix",Q.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const xn=re.uniformsGroups;for(let An=0,Ei=xn.length;An<Ei;An++){const zi=xn[An];X.update(zi,vn),X.bind(zi,vn)}}return vn}function _a(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function sn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(C,K,ie){const re=Ke.get(C);re.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),Ke.get(C.texture).__webglTexture=K,Ke.get(C.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ie,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,K){const ie=Ke.get(C);ie.__webglFramebuffer=K,ie.__useDefaultFramebuffer=K===void 0};const nl=F.createFramebuffer();this.setRenderTarget=function(C,K=0,ie=0){j=C,k=K,z=ie;let re=!0,Q=null,Re=!1,Ue=!1;if(C){const Fe=Ke.get(C);if(Fe.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(F.FRAMEBUFFER,null),re=!1;else if(Fe.__webglFramebuffer===void 0)ot.setupRenderTarget(C);else if(Fe.__hasExternalTextures)ot.rebindTextures(C,Ke.get(C.texture).__webglTexture,Ke.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const qe=C.depthTexture;if(Fe.__boundDepthTexture!==qe){if(qe!==null&&Ke.has(qe)&&(C.width!==qe.image.width||C.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(C)}}const nt=C.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Ue=!0);const Je=Ke.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Je[K])?Q=Je[K][ie]:Q=Je[K],Re=!0):C.samples>0&&ot.useMultisampledRTT(C)===!1?Q=Ke.get(C).__webglMultisampledFramebuffer:Array.isArray(Je)?Q=Je[ie]:Q=Je,G.copy(C.viewport),oe.copy(C.scissor),ae=C.scissorTest}else G.copy(B).multiplyScalar(Y).floor(),oe.copy(se).multiplyScalar(Y).floor(),ae=de;if(ie!==0&&(Q=nl),ke.bindFramebuffer(F.FRAMEBUFFER,Q)&&re&&ke.drawBuffers(C,Q),ke.viewport(G),ke.scissor(oe),ke.setScissorTest(ae),Re){const Fe=Ke.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+K,Fe.__webglTexture,ie)}else if(Ue){const Fe=Ke.get(C.texture),nt=K;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Fe.__webglTexture,ie,nt)}else if(C!==null&&ie!==0){const Fe=Ke.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Fe.__webglTexture,ie)}D=-1},this.readRenderTargetPixels=function(C,K,ie,re,Q,Re,Ue,Pe=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ke.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe){ke.bindFramebuffer(F.FRAMEBUFFER,Fe);try{const nt=C.textures[Pe],Je=nt.format,qe=nt.type;if(!gt.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-re&&ie>=0&&ie<=C.height-Q&&(C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Pe),F.readPixels(K,ie,re,Q,De.convert(Je),De.convert(qe),Re))}finally{const nt=j!==null?Ke.get(j).__webglFramebuffer:null;ke.bindFramebuffer(F.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(C,K,ie,re,Q,Re,Ue,Pe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ke.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe)if(K>=0&&K<=C.width-re&&ie>=0&&ie<=C.height-Q){ke.bindFramebuffer(F.FRAMEBUFFER,Fe);const nt=C.textures[Pe],Je=nt.format,qe=nt.type;if(!gt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ct),F.bufferData(F.PIXEL_PACK_BUFFER,Re.byteLength,F.STREAM_READ),C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Pe),F.readPixels(K,ie,re,Q,De.convert(Je),De.convert(qe),0);const wt=j!==null?Ke.get(j).__webglFramebuffer:null;ke.bindFramebuffer(F.FRAMEBUFFER,wt);const Wt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await hE(F,Wt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ct),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Re),F.deleteBuffer(ct),F.deleteSync(Wt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,K=null,ie=0){const re=Math.pow(2,-ie),Q=Math.floor(C.image.width*re),Re=Math.floor(C.image.height*re),Ue=K!==null?K.x:0,Pe=K!==null?K.y:0;ot.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,ie,0,0,Ue,Pe,Q,Re),ke.unbindTexture()};const il=F.createFramebuffer(),Ii=F.createFramebuffer();this.copyTextureToTexture=function(C,K,ie=null,re=null,Q=0,Re=null){Re===null&&(Q!==0?(Cs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=Q,Q=0):Re=0);let Ue,Pe,Fe,nt,Je,qe,ct,wt,Wt;const pt=C.isCompressedTexture?C.mipmaps[Re]:C.image;if(ie!==null)Ue=ie.max.x-ie.min.x,Pe=ie.max.y-ie.min.y,Fe=ie.isBox3?ie.max.z-ie.min.z:1,nt=ie.min.x,Je=ie.min.y,qe=ie.isBox3?ie.min.z:0;else{const dn=Math.pow(2,-Q);Ue=Math.floor(pt.width*dn),Pe=Math.floor(pt.height*dn),C.isDataArrayTexture?Fe=pt.depth:C.isData3DTexture?Fe=Math.floor(pt.depth*dn):Fe=1,nt=0,Je=0,qe=0}re!==null?(ct=re.x,wt=re.y,Wt=re.z):(ct=0,wt=0,Wt=0);const Dt=De.convert(K.format),Qe=De.convert(K.type);let Ot;K.isData3DTexture?(ot.setTexture3D(K,0),Ot=F.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(ot.setTexture2DArray(K,0),Ot=F.TEXTURE_2D_ARRAY):(ot.setTexture2D(K,0),Ot=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,K.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,K.unpackAlignment);const yt=F.getParameter(F.UNPACK_ROW_LENGTH),vn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),va=F.getParameter(F.UNPACK_SKIP_PIXELS),kt=F.getParameter(F.UNPACK_SKIP_ROWS),Bi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,pt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,nt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Je),F.pixelStorei(F.UNPACK_SKIP_IMAGES,qe);const Gt=C.isDataArrayTexture||C.isData3DTexture,Dn=K.isDataArrayTexture||K.isData3DTexture;if(C.isDepthTexture){const dn=Ke.get(C),xn=Ke.get(K),An=Ke.get(dn.__renderTarget),Ei=Ke.get(xn.__renderTarget);ke.bindFramebuffer(F.READ_FRAMEBUFFER,An.__webglFramebuffer),ke.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let zi=0;zi<Fe;zi++)Gt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ke.get(C).__webglTexture,Q,qe+zi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ke.get(K).__webglTexture,Re,Wt+zi)),F.blitFramebuffer(nt,Je,Ue,Pe,ct,wt,Ue,Pe,F.DEPTH_BUFFER_BIT,F.NEAREST);ke.bindFramebuffer(F.READ_FRAMEBUFFER,null),ke.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||Ke.has(C)){const dn=Ke.get(C),xn=Ke.get(K);ke.bindFramebuffer(F.READ_FRAMEBUFFER,il),ke.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ii);for(let An=0;An<Fe;An++)Gt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,dn.__webglTexture,Q,qe+An):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,dn.__webglTexture,Q),Dn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xn.__webglTexture,Re,Wt+An):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xn.__webglTexture,Re),Q!==0?F.blitFramebuffer(nt,Je,Ue,Pe,ct,wt,Ue,Pe,F.COLOR_BUFFER_BIT,F.NEAREST):Dn?F.copyTexSubImage3D(Ot,Re,ct,wt,Wt+An,nt,Je,Ue,Pe):F.copyTexSubImage2D(Ot,Re,ct,wt,nt,Je,Ue,Pe);ke.bindFramebuffer(F.READ_FRAMEBUFFER,null),ke.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Dn?C.isDataTexture||C.isData3DTexture?F.texSubImage3D(Ot,Re,ct,wt,Wt,Ue,Pe,Fe,Dt,Qe,pt.data):K.isCompressedArrayTexture?F.compressedTexSubImage3D(Ot,Re,ct,wt,Wt,Ue,Pe,Fe,Dt,pt.data):F.texSubImage3D(Ot,Re,ct,wt,Wt,Ue,Pe,Fe,Dt,Qe,pt):C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Re,ct,wt,Ue,Pe,Dt,Qe,pt.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Re,ct,wt,pt.width,pt.height,Dt,pt.data):F.texSubImage2D(F.TEXTURE_2D,Re,ct,wt,Ue,Pe,Dt,Qe,pt);F.pixelStorei(F.UNPACK_ROW_LENGTH,yt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,vn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,va),F.pixelStorei(F.UNPACK_SKIP_ROWS,kt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Bi),Re===0&&K.generateMipmaps&&F.generateMipmap(Ot),ke.unbindTexture()},this.copyTextureToTexture3D=function(C,K,ie=null,re=null,Q=0){return Cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,K,ie,re,Q)},this.initRenderTarget=function(C){Ke.get(C).__webglFramebuffer===void 0&&ot.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ot.setTextureCube(C,0):C.isData3DTexture?ot.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ot.setTexture2DArray(C,0):ot.setTexture2D(C,0),ke.unbindTexture()},this.resetState=function(){k=0,z=0,j=null,ke.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Rt._getUnpackColorSpace()}}/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Pv="popstate";function L1(s={}){function e(r,l){let{pathname:u,search:f,hash:h}=r.location;return Nh("",{pathname:u,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:qo(l)}return O1(e,i,null,s)}function Zt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Li(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function N1(){return Math.random().toString(36).substring(2,10)}function Iv(s,e){return{usr:s.state,key:s.key,idx:e}}function Nh(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?zs(e):e,state:i,key:e&&e.key||r||N1()}}function qo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function zs(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function O1(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,f=l.history,h="POP",m=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function v(){h="POP";let y=g(),_=y==null?null:y-p;p=y,m&&m({action:h,location:R.location,delta:_})}function x(y,_){h="PUSH";let O=Nh(R.location,y,_);p=g()+1;let L=Iv(O,p),U=R.createHref(O);try{f.pushState(L,"",U)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;l.location.assign(U)}u&&m&&m({action:h,location:R.location,delta:1})}function E(y,_){h="REPLACE";let O=Nh(R.location,y,_);p=g();let L=Iv(O,p),U=R.createHref(O);f.replaceState(L,"",U),u&&m&&m({action:h,location:R.location,delta:0})}function M(y){return P1(y)}let R={get action(){return h},get location(){return s(l,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Pv,v),m=y,()=>{l.removeEventListener(Pv,v),m=null}},createHref(y){return e(l,y)},createURL:M,encodeLocation(y){let _=M(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:E,go(y){return f.go(y)}};return R}function P1(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Zt(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:qo(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function R0(s,e,i="/"){return I1(s,e,i,!1)}function I1(s,e,i,r){let l=typeof e=="string"?zs(e):e,u=da(l.pathname||"/",i);if(u==null)return null;let f=C0(s);B1(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=j1(u);h=q1(f[m],p,r)}return h}function C0(s,e=[],i=[],r=""){let l=(u,f,h)=>{let m={relativePath:h===void 0?u.path||"":h,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};m.relativePath.startsWith("/")&&(Zt(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length));let p=ua([r,m.relativePath]),g=i.concat(m);u.children&&u.children.length>0&&(Zt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),C0(u.children,e,g,p)),!(u.path==null&&!u.index)&&e.push({path:p,score:X1(p,u.index),routesMeta:g})};return s.forEach((u,f)=>{if(u.path===""||!u.path?.includes("?"))l(u,f);else for(let h of w0(u.path))l(u,f,h)}),e}function w0(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let f=w0(r.join("/")),h=[];return h.push(...f.map(m=>m===""?u:[u,m].join("/"))),l&&h.push(...f),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function B1(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:W1(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var z1=/^:[\w-]+$/,F1=3,H1=2,G1=1,V1=10,k1=-2,Bv=s=>s==="*";function X1(s,e){let i=s.split("/"),r=i.length;return i.some(Bv)&&(r+=k1),e&&(r+=H1),i.filter(l=>!Bv(l)).reduce((l,u)=>l+(z1.test(u)?F1:u===""?G1:V1),r)}function W1(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function q1(s,e,i=!1){let{routesMeta:r}=s,l={},u="/",f=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,g=u==="/"?e:e.slice(u.length)||"/",v=Yu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),x=m.route;if(!v&&p&&i&&!r[r.length-1].route.index&&(v=Yu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:ua([u,v.pathname]),pathnameBase:J1(ua([u,v.pathnameBase])),route:x}),v.pathnameBase!=="/"&&(u=ua([u,v.pathnameBase]))}return f}function Yu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=Y1(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:v},x)=>{if(g==="*"){let M=h[x]||"";f=u.slice(0,u.length-M.length).replace(/(.)\/+$/,"$1")}const E=h[x];return v&&!E?p[g]=void 0:p[g]=(E||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:f,pattern:s}}function Y1(s,e=!1,i=!0){Li(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function j1(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Li(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function da(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function Z1(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?zs(s):s;return{pathname:i?i.startsWith("/")?i:K1(i,e):e,search:$1(r),hash:eR(l)}}function K1(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Hd(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Q1(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function D0(s){let e=Q1(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function U0(s,e,i,r=!1){let l;typeof s=="string"?l=zs(s):(l={...s},Zt(!l.pathname||!l.pathname.includes("?"),Hd("?","pathname","search",l)),Zt(!l.pathname||!l.pathname.includes("#"),Hd("#","pathname","hash",l)),Zt(!l.search||!l.search.includes("#"),Hd("#","search","hash",l)));let u=s===""||l.pathname==="",f=u?"/":l.pathname,h;if(f==null)h=i;else{let v=e.length-1;if(!r&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),v-=1;l.pathname=x.join("/")}h=v>=0?e[v]:"/"}let m=Z1(l,h),p=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var ua=s=>s.join("/").replace(/\/\/+/g,"/"),J1=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),$1=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,eR=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function tR(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var L0=["POST","PUT","PATCH","DELETE"];new Set(L0);var nR=["GET",...L0];new Set(nR);var Fs=fe.createContext(null);Fs.displayName="DataRouter";var $u=fe.createContext(null);$u.displayName="DataRouterState";fe.createContext(!1);var N0=fe.createContext({isTransitioning:!1});N0.displayName="ViewTransition";var iR=fe.createContext(new Map);iR.displayName="Fetchers";var aR=fe.createContext(null);aR.displayName="Await";var Ni=fe.createContext(null);Ni.displayName="Navigation";var Qo=fe.createContext(null);Qo.displayName="Location";var pa=fe.createContext({outlet:null,matches:[],isDataRoute:!1});pa.displayName="Route";var Qh=fe.createContext(null);Qh.displayName="RouteError";function rR(s,{relative:e}={}){Zt(Jo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=fe.useContext(Ni),{hash:l,pathname:u,search:f}=$o(s,{relative:e}),h=u;return i!=="/"&&(h=u==="/"?i:ua([i,u])),r.createHref({pathname:h,search:f,hash:l})}function Jo(){return fe.useContext(Qo)!=null}function Or(){return Zt(Jo(),"useLocation() may be used only in the context of a <Router> component."),fe.useContext(Qo).location}var O0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function P0(s){fe.useContext(Ni).static||fe.useLayoutEffect(s)}function sR(){let{isDataRoute:s}=fe.useContext(pa);return s?xR():oR()}function oR(){Zt(Jo(),"useNavigate() may be used only in the context of a <Router> component.");let s=fe.useContext(Fs),{basename:e,navigator:i}=fe.useContext(Ni),{matches:r}=fe.useContext(pa),{pathname:l}=Or(),u=JSON.stringify(D0(r)),f=fe.useRef(!1);return P0(()=>{f.current=!0}),fe.useCallback((m,p={})=>{if(Li(f.current,O0),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=U0(m,JSON.parse(u),l,p.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:ua([e,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[e,i,u,l,s])}fe.createContext(null);function $o(s,{relative:e}={}){let{matches:i}=fe.useContext(pa),{pathname:r}=Or(),l=JSON.stringify(D0(i));return fe.useMemo(()=>U0(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function lR(s,e){return I0(s,e)}function I0(s,e,i,r){Zt(Jo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=fe.useContext(Ni),{matches:u}=fe.useContext(pa),f=u[u.length-1],h=f?f.params:{},m=f?f.pathname:"/",p=f?f.pathnameBase:"/",g=f&&f.route;{let _=g&&g.path||"";B0(m,!g||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let v=Or(),x;if(e){let _=typeof e=="string"?zs(e):e;Zt(p==="/"||_.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${_.pathname}" was given in the \`location\` prop.`),x=_}else x=v;let E=x.pathname||"/",M=E;if(p!=="/"){let _=p.replace(/^\//,"").split("/");M="/"+E.replace(/^\//,"").split("/").slice(_.length).join("/")}let R=R0(s,{pathname:M});Li(g||R!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Li(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=hR(R&&R.map(_=>Object.assign({},_,{params:Object.assign({},h,_.params),pathname:ua([p,l.encodeLocation?l.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?p:ua([p,l.encodeLocation?l.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),u,i,r);return e&&y?fe.createElement(Qo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},y):y}function uR(){let s=vR(),e=tR(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=fe.createElement(fe.Fragment,null,fe.createElement("p",null,"💿 Hey developer 👋"),fe.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",fe.createElement("code",{style:u},"ErrorBoundary")," or"," ",fe.createElement("code",{style:u},"errorElement")," prop on your route.")),fe.createElement(fe.Fragment,null,fe.createElement("h2",null,"Unexpected Application Error!"),fe.createElement("h3",{style:{fontStyle:"italic"}},e),i?fe.createElement("pre",{style:l},i):null,f)}var cR=fe.createElement(uR,null),fR=class extends fe.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){console.error("React Router caught the following error during render",s,e)}render(){return this.state.error!==void 0?fe.createElement(pa.Provider,{value:this.props.routeContext},fe.createElement(Qh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function dR({routeContext:s,match:e,children:i}){let r=fe.useContext(Fs);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),fe.createElement(pa.Provider,{value:s},i)}function hR(s,e=[],i=null,r=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let l=s,u=i?.errors;if(u!=null){let m=l.findIndex(p=>p.route.id&&u?.[p.route.id]!==void 0);Zt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let f=!1,h=-1;if(i)for(let m=0;m<l.length;m++){let p=l[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=m),p.route.id){let{loaderData:g,errors:v}=i,x=p.route.loader&&!g.hasOwnProperty(p.route.id)&&(!v||v[p.route.id]===void 0);if(p.route.lazy||x){f=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((m,p,g)=>{let v,x=!1,E=null,M=null;i&&(v=u&&p.route.id?u[p.route.id]:void 0,E=p.route.errorElement||cR,f&&(h<0&&g===0?(B0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,M=null):h===g&&(x=!0,M=p.route.hydrateFallbackElement||null)));let R=e.concat(l.slice(0,g+1)),y=()=>{let _;return v?_=E:x?_=M:p.route.Component?_=fe.createElement(p.route.Component,null):p.route.element?_=p.route.element:_=m,fe.createElement(dR,{match:p,routeContext:{outlet:m,matches:R,isDataRoute:i!=null},children:_})};return i&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?fe.createElement(fR,{location:i.location,revalidation:i.revalidation,component:E,error:v,children:y(),routeContext:{outlet:null,matches:R,isDataRoute:!0}}):y()},null)}function Jh(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function pR(s){let e=fe.useContext(Fs);return Zt(e,Jh(s)),e}function mR(s){let e=fe.useContext($u);return Zt(e,Jh(s)),e}function gR(s){let e=fe.useContext(pa);return Zt(e,Jh(s)),e}function $h(s){let e=gR(s),i=e.matches[e.matches.length-1];return Zt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function _R(){return $h("useRouteId")}function vR(){let s=fe.useContext(Qh),e=mR("useRouteError"),i=$h("useRouteError");return s!==void 0?s:e.errors?.[i]}function xR(){let{router:s}=pR("useNavigate"),e=$h("useNavigate"),i=fe.useRef(!1);return P0(()=>{i.current=!0}),fe.useCallback(async(l,u={})=>{Li(i.current,O0),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:e,...u}))},[s,e])}var zv={};function B0(s,e,i){!e&&!zv[s]&&(zv[s]=!0,Li(!1,i))}fe.memo(yR);function yR({routes:s,future:e,state:i}){return I0(s,void 0,i,e)}function Oh(s){Zt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function SR({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:u=!1}){Zt(!Jo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),h=fe.useMemo(()=>({basename:f,navigator:l,static:u,future:{}}),[f,l,u]);typeof i=="string"&&(i=zs(i));let{pathname:m="/",search:p="",hash:g="",state:v=null,key:x="default"}=i,E=fe.useMemo(()=>{let M=da(m,f);return M==null?null:{location:{pathname:M,search:p,hash:g,state:v,key:x},navigationType:r}},[f,m,p,g,v,x,r]);return Li(E!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:fe.createElement(Ni.Provider,{value:h},fe.createElement(Qo.Provider,{children:e,value:E}))}function ER({children:s,location:e}){return lR(Ph(s),e)}function Ph(s,e=[]){let i=[];return fe.Children.forEach(s,(r,l)=>{if(!fe.isValidElement(r))return;let u=[...e,l];if(r.type===fe.Fragment){i.push.apply(i,Ph(r.props.children,u));return}Zt(r.type===Oh,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Zt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=Ph(r.props.children,u)),i.push(f)}),i}var Gu="get",Vu="application/x-www-form-urlencoded";function ec(s){return s!=null&&typeof s.tagName=="string"}function MR(s){return ec(s)&&s.tagName.toLowerCase()==="button"}function bR(s){return ec(s)&&s.tagName.toLowerCase()==="form"}function TR(s){return ec(s)&&s.tagName.toLowerCase()==="input"}function AR(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function RR(s,e){return s.button===0&&(!e||e==="_self")&&!AR(s)}var Lu=null;function CR(){if(Lu===null)try{new FormData(document.createElement("form"),0),Lu=!1}catch{Lu=!0}return Lu}var wR=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Gd(s){return s!=null&&!wR.has(s)?(Li(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Vu}"`),null):s}function DR(s,e){let i,r,l,u,f;if(bR(s)){let h=s.getAttribute("action");r=h?da(h,e):null,i=s.getAttribute("method")||Gu,l=Gd(s.getAttribute("enctype"))||Vu,u=new FormData(s)}else if(MR(s)||TR(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(r=m?da(m,e):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||Gu,l=Gd(s.getAttribute("formenctype"))||Gd(h.getAttribute("enctype"))||Vu,u=new FormData(h,s),!CR()){let{name:p,type:g,value:v}=s;if(g==="image"){let x=p?`${p}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else p&&u.append(p,v)}}else{if(ec(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Gu,r=null,l=Vu,f=s}return u&&l==="text/plain"&&(f=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ep(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function UR(s,e,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&da(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function LR(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function NR(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function OR(s,e,i){let r=await Promise.all(s.map(async l=>{let u=e.routes[l.route.id];if(u){let f=await LR(u,i);return f.links?f.links():[]}return[]}));return zR(r.flat(1).filter(NR).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Fv(s,e,i,r,l,u){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return u==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):u==="data"?e.filter((m,p)=>{let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function PR(s,e,{includeHydrateFallback:i}={}){return IR(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function IR(s){return[...new Set(s)]}function BR(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function zR(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let u=JSON.stringify(BR(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}function z0(){let s=fe.useContext(Fs);return ep(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function FR(){let s=fe.useContext($u);return ep(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var tp=fe.createContext(void 0);tp.displayName="FrameworkContext";function F0(){let s=fe.useContext(tp);return ep(s,"You must render this element inside a <HydratedRouter> element"),s}function HR(s,e){let i=fe.useContext(tp),[r,l]=fe.useState(!1),[u,f]=fe.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:v}=e,x=fe.useRef(null);fe.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let R=_=>{_.forEach(O=>{f(O.isIntersecting)})},y=new IntersectionObserver(R,{threshold:.5});return x.current&&y.observe(x.current),()=>{y.disconnect()}}},[s]),fe.useEffect(()=>{if(r){let R=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(R)}}},[r]);let E=()=>{l(!0)},M=()=>{l(!1),f(!1)};return i?s!=="intent"?[u,x,{}]:[u,x,{onFocus:Ho(h,E),onBlur:Ho(m,M),onMouseEnter:Ho(p,E),onMouseLeave:Ho(g,M),onTouchStart:Ho(v,E)}]:[!1,x,{}]}function Ho(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function GR({page:s,...e}){let{router:i}=z0(),r=fe.useMemo(()=>R0(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?fe.createElement(kR,{page:s,matches:r,...e}):null}function VR(s){let{manifest:e,routeModules:i}=F0(),[r,l]=fe.useState([]);return fe.useEffect(()=>{let u=!1;return OR(s,e,i).then(f=>{u||l(f)}),()=>{u=!0}},[s,e,i]),r}function kR({page:s,matches:e,...i}){let r=Or(),{manifest:l,routeModules:u}=F0(),{basename:f}=z0(),{loaderData:h,matches:m}=FR(),p=fe.useMemo(()=>Fv(s,e,m,l,r,"data"),[s,e,m,l,r]),g=fe.useMemo(()=>Fv(s,e,m,l,r,"assets"),[s,e,m,l,r]),v=fe.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let M=new Set,R=!1;if(e.forEach(_=>{let O=l.routes[_.route.id];!O||!O.hasLoader||(!p.some(L=>L.route.id===_.route.id)&&_.route.id in h&&u[_.route.id]?.shouldRevalidate||O.hasClientLoader?R=!0:M.add(_.route.id))}),M.size===0)return[];let y=UR(s,f,"data");return R&&M.size>0&&y.searchParams.set("_routes",e.filter(_=>M.has(_.route.id)).map(_=>_.route.id).join(",")),[y.pathname+y.search]},[f,h,r,l,p,e,s,u]),x=fe.useMemo(()=>PR(g,l),[g,l]),E=VR(g);return fe.createElement(fe.Fragment,null,v.map(M=>fe.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...i})),x.map(M=>fe.createElement("link",{key:M,rel:"modulepreload",href:M,...i})),E.map(({key:M,link:R})=>fe.createElement("link",{key:M,...R})))}function XR(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var H0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{H0&&(window.__reactRouterVersion="7.7.1")}catch{}function G0({basename:s,children:e,window:i}){let r=fe.useRef();r.current==null&&(r.current=L1({window:i,v5Compat:!0}));let l=r.current,[u,f]=fe.useState({action:l.action,location:l.location}),h=fe.useCallback(m=>{fe.startTransition(()=>f(m))},[f]);return fe.useLayoutEffect(()=>l.listen(h),[l,h]),fe.createElement(SR,{basename:s,children:e,location:u.location,navigationType:u.action,navigator:l})}var V0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lr=fe.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:f,state:h,target:m,to:p,preventScrollReset:g,viewTransition:v,...x},E){let{basename:M}=fe.useContext(Ni),R=typeof p=="string"&&V0.test(p),y,_=!1;if(typeof p=="string"&&R&&(y=p,H0))try{let D=new URL(window.location.href),w=p.startsWith("//")?new URL(D.protocol+p):new URL(p),G=da(w.pathname,M);w.origin===D.origin&&G!=null?p=G+w.search+w.hash:_=!0}catch{Li(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let O=rR(p,{relative:l}),[L,U,H]=HR(r,x),k=jR(p,{replace:f,state:h,target:m,preventScrollReset:g,relative:l,viewTransition:v});function z(D){e&&e(D),D.defaultPrevented||k(D)}let j=fe.createElement("a",{...x,...H,href:y||O,onClick:_||u?e:z,ref:XR(E,U),target:m,"data-discover":!R&&i==="render"?"true":void 0});return L&&!R?fe.createElement(fe.Fragment,null,j,fe.createElement(GR,{page:O})):j});Lr.displayName="Link";var WR=fe.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:f,viewTransition:h,children:m,...p},g){let v=$o(f,{relative:p.relative}),x=Or(),E=fe.useContext($u),{navigator:M,basename:R}=fe.useContext(Ni),y=E!=null&&$R(v)&&h===!0,_=M.encodeLocation?M.encodeLocation(v).pathname:v.pathname,O=x.pathname,L=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;i||(O=O.toLowerCase(),L=L?L.toLowerCase():null,_=_.toLowerCase()),L&&R&&(L=da(L,R)||L);const U=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let H=O===_||!l&&O.startsWith(_)&&O.charAt(U)==="/",k=L!=null&&(L===_||!l&&L.startsWith(_)&&L.charAt(_.length)==="/"),z={isActive:H,isPending:k,isTransitioning:y},j=H?e:void 0,D;typeof r=="function"?D=r(z):D=[r,H?"active":null,k?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let w=typeof u=="function"?u(z):u;return fe.createElement(Lr,{...p,"aria-current":j,className:D,ref:g,style:w,to:f,viewTransition:h},typeof m=="function"?m(z):m)});WR.displayName="NavLink";var qR=fe.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:u,method:f=Gu,action:h,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:v,...x},E)=>{let M=QR(),R=JR(h,{relative:p}),y=f.toLowerCase()==="get"?"get":"post",_=typeof h=="string"&&V0.test(h),O=L=>{if(m&&m(L),L.defaultPrevented)return;L.preventDefault();let U=L.nativeEvent.submitter,H=U?.getAttribute("formmethod")||f;M(U||L.currentTarget,{fetcherKey:e,method:H,navigate:i,replace:l,state:u,relative:p,preventScrollReset:g,viewTransition:v})};return fe.createElement("form",{ref:E,method:y,action:R,onSubmit:r?m:O,...x,"data-discover":!_&&s==="render"?"true":void 0})});qR.displayName="Form";function YR(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function k0(s){let e=fe.useContext(Fs);return Zt(e,YR(s)),e}function jR(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:f}={}){let h=sR(),m=Or(),p=$o(s,{relative:u});return fe.useCallback(g=>{if(RR(g,e)){g.preventDefault();let v=i!==void 0?i:qo(m)===qo(p);h(s,{replace:v,state:r,preventScrollReset:l,relative:u,viewTransition:f})}},[m,h,p,i,r,e,s,l,u,f])}var ZR=0,KR=()=>`__${String(++ZR)}__`;function QR(){let{router:s}=k0("useSubmit"),{basename:e}=fe.useContext(Ni),i=_R();return fe.useCallback(async(r,l={})=>{let{action:u,method:f,encType:h,formData:m,body:p}=DR(r,e);if(l.navigate===!1){let g=l.fetcherKey||KR();await s.fetch(g,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||h,flushSync:l.flushSync})}else await s.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,e,i])}function JR(s,{relative:e}={}){let{basename:i}=fe.useContext(Ni),r=fe.useContext(pa);Zt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...$o(s||".",{relative:e})},f=Or();if(s==null){u.search=f.search;let h=new URLSearchParams(u.search),m=h.getAll("index");if(m.some(g=>g==="")){h.delete("index"),m.filter(v=>v).forEach(v=>h.append("index",v));let g=h.toString();u.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:ua([i,u.pathname])),qo(u)}function $R(s,{relative:e}={}){let i=fe.useContext(N0);Zt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=k0("useViewTransitionState"),l=$o(s,{relative:e});if(!i.isTransitioning)return!1;let u=da(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=da(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Yu(l.pathname,f)!=null||Yu(l.pathname,u)!=null}var Vd={exports:{}},kd,Hv;function eC(){if(Hv)return kd;Hv=1;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return kd=s,kd}var Xd,Gv;function tC(){if(Gv)return Xd;Gv=1;var s=eC();function e(){}function i(){}return i.resetWarningCache=e,Xd=function(){function r(f,h,m,p,g,v){if(v!==s){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}r.isRequired=r;function l(){return r}var u={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:l,element:r,elementType:r,instanceOf:l,node:r,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:i,resetWarningCache:e};return u.PropTypes=u,u},Xd}var Vv;function nC(){return Vv||(Vv=1,Vd.exports=tC()()),Vd.exports}var iC=nC();const jt=Zv(iC);function kv(s,e){var i=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(s,l).enumerable})),i.push.apply(i,r)}return i}function Xv(s){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?kv(Object(i),!0).forEach(function(r){X0(s,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(i)):kv(Object(i)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(i,r))})}return s}function ku(s){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ku=function(e){return typeof e}:ku=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ku(s)}function X0(s,e,i){return e in s?Object.defineProperty(s,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[e]=i,s}function aC(s,e){if(s==null)return{};var i={},r=Object.keys(s),l,u;for(u=0;u<r.length;u++)l=r[u],!(e.indexOf(l)>=0)&&(i[l]=s[l]);return i}function rC(s,e){if(s==null)return{};var i=aC(s,e),r,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(s);for(l=0;l<u.length;l++)r=u[l],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(s,r)&&(i[r]=s[r])}return i}function sC(s,e){return oC(s)||lC(s,e)||uC(s,e)||cC()}function oC(s){if(Array.isArray(s))return s}function lC(s,e){var i=s&&(typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"]);if(i!=null){var r=[],l=!0,u=!1,f,h;try{for(i=i.call(s);!(l=(f=i.next()).done)&&(r.push(f.value),!(e&&r.length===e));l=!0);}catch(m){u=!0,h=m}finally{try{!l&&i.return!=null&&i.return()}finally{if(u)throw h}}return r}}function uC(s,e){if(s){if(typeof s=="string")return Wv(s,e);var i=Object.prototype.toString.call(s).slice(8,-1);if(i==="Object"&&s.constructor&&(i=s.constructor.name),i==="Map"||i==="Set")return Array.from(s);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Wv(s,e)}}function Wv(s,e){(e==null||e>s.length)&&(e=s.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=s[i];return r}function cC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ti=function(e,i,r){var l=!!r,u=tn.useRef(r);tn.useEffect(function(){u.current=r},[r]),tn.useEffect(function(){if(!l||!e)return function(){};var f=function(){u.current&&u.current.apply(u,arguments)};return e.on(i,f),function(){e.off(i,f)}},[l,i,e,u])},fC=function(e){var i=tn.useRef(e);return tn.useEffect(function(){i.current=e},[e]),i.current},ju=function(e){return e!==null&&ku(e)==="object"},qv="[object Object]",dC=function s(e,i){if(!ju(e)||!ju(i))return e===i;var r=Array.isArray(e),l=Array.isArray(i);if(r!==l)return!1;var u=Object.prototype.toString.call(e)===qv,f=Object.prototype.toString.call(i)===qv;if(u!==f)return!1;if(!u&&!r)return e===i;var h=Object.keys(e),m=Object.keys(i);if(h.length!==m.length)return!1;for(var p={},g=0;g<h.length;g+=1)p[h[g]]=!0;for(var v=0;v<m.length;v+=1)p[m[v]]=!0;var x=Object.keys(p);if(x.length!==h.length)return!1;var E=e,M=i,R=function(_){return s(E[_],M[_])};return x.every(R)},hC=function(e,i,r){return ju(e)?Object.keys(e).reduce(function(l,u){var f=!ju(i)||!dC(e[u],i[u]);return r.includes(u)?(f&&console.warn("Unsupported prop change: options.".concat(u," is not a mutable property.")),l):f?Xv(Xv({},l||{}),{},X0({},u,e[u])):l},null):null},W0=tn.createContext(null);W0.displayName="ElementsContext";var pC=function(e,i){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(i," in an <Elements> provider."));return e};jt.any,jt.object;jt.func.isRequired;var q0=tn.createContext(null);q0.displayName="CheckoutSdkContext";var mC=function(e,i){if(!e)throw new Error("Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(i," in an <CheckoutProvider> provider."));return e},gC=tn.createContext(null);gC.displayName="CheckoutContext";jt.any,jt.shape({fetchClientSecret:jt.func.isRequired,elementsOptions:jt.object}).isRequired;var Yv=function(e){var i=tn.useContext(q0),r=tn.useContext(W0);if(i&&r)throw new Error("You cannot wrap the part of your app that ".concat(e," in both <CheckoutProvider> and <Elements> providers."));return i?mC(i,e):pC(r,e)},_C=["mode"],vC=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},an=function(e,i){var r="".concat(vC(e),"Element"),l=function(m){var p=m.id,g=m.className,v=m.options,x=v===void 0?{}:v,E=m.onBlur,M=m.onFocus,R=m.onReady,y=m.onChange,_=m.onEscape,O=m.onClick,L=m.onLoadError,U=m.onLoaderStart,H=m.onNetworksChange,k=m.onConfirm,z=m.onCancel,j=m.onShippingAddressChange,D=m.onShippingRateChange,w=Yv("mounts <".concat(r,">")),G="elements"in w?w.elements:null,oe="checkoutSdk"in w?w.checkoutSdk:null,ae=tn.useState(null),xe=sC(ae,2),ue=xe[0],P=xe[1],q=tn.useRef(null),Y=tn.useRef(null);ti(ue,"blur",E),ti(ue,"focus",M),ti(ue,"escape",_),ti(ue,"click",O),ti(ue,"loaderror",L),ti(ue,"loaderstart",U),ti(ue,"networkschange",H),ti(ue,"confirm",k),ti(ue,"cancel",z),ti(ue,"shippingaddresschange",j),ti(ue,"shippingratechange",D),ti(ue,"change",y);var Me;R&&(e==="expressCheckout"?Me=R:Me=function(){R(ue)}),ti(ue,"ready",Me),tn.useLayoutEffect(function(){if(q.current===null&&Y.current!==null&&(G||oe)){var B=null;if(oe)switch(e){case"payment":B=oe.createPaymentElement(x);break;case"address":if("mode"in x){var se=x.mode,de=rC(x,_C);if(se==="shipping")B=oe.createShippingAddressElement(de);else if(se==="billing")B=oe.createBillingAddressElement(de);else throw new Error("Invalid options.mode. mode must be 'billing' or 'shipping'.")}else throw new Error("You must supply options.mode. mode must be 'billing' or 'shipping'.");break;case"expressCheckout":B=oe.createExpressCheckoutElement(x);break;case"currencySelector":B=oe.createCurrencySelectorElement();break;case"taxId":B=oe.createTaxIdElement(x);break;default:throw new Error("Invalid Element type ".concat(r,". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />."))}else G&&(B=G.create(e,x));q.current=B,P(B),B&&B.mount(Y.current)}},[G,oe,x]);var A=fC(x);return tn.useEffect(function(){if(q.current){var B=hC(x,A,["paymentRequest"]);B&&"update"in q.current&&q.current.update(B)}},[x,A]),tn.useLayoutEffect(function(){return function(){if(q.current&&typeof q.current.destroy=="function")try{q.current.destroy(),q.current=null}catch{}}},[]),tn.createElement("div",{id:p,className:g,ref:Y})},u=function(m){Yv("mounts <".concat(r,">"));var p=m.id,g=m.className;return tn.createElement("div",{id:p,className:g})},f=i?u:l;return f.propTypes={id:jt.string,className:jt.string,onChange:jt.func,onBlur:jt.func,onFocus:jt.func,onReady:jt.func,onEscape:jt.func,onClick:jt.func,onLoadError:jt.func,onLoaderStart:jt.func,onNetworksChange:jt.func,onConfirm:jt.func,onCancel:jt.func,onShippingAddressChange:jt.func,onShippingRateChange:jt.func,options:jt.object},f.displayName=r,f.__elementType=e,f},rn=typeof window>"u",xC=tn.createContext(null);xC.displayName="EmbeddedCheckoutProviderContext";an("auBankAccount",rn);var yC=an("card",rn);an("cardNumber",rn);an("cardExpiry",rn);an("cardCvc",rn);an("fpxBank",rn);an("iban",rn);an("idealBank",rn);an("p24Bank",rn);an("epsBank",rn);an("payment",rn);an("expressCheckout",rn);an("currencySelector",rn);an("paymentRequestButton",rn);an("linkAuthentication",rn);an("address",rn);an("shippingAddress",rn);an("paymentMethodMessaging",rn);an("affirmMessage",rn);an("afterpayClearpayMessage",rn);an("taxId",rn);var Wd,jv;function SC(){if(jv)return Wd;jv=1;var s=Object.defineProperty,e=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,r=Object.prototype.hasOwnProperty,l=(A,B)=>{for(var se in B)s(A,se,{get:B[se],enumerable:!0})},u=(A,B,se,de)=>{if(B&&typeof B=="object"||typeof B=="function")for(let W of i(B))!r.call(A,W)&&W!==se&&s(A,W,{get:()=>B[W],enumerable:!(de=e(B,W))||de.enumerable});return A},f=A=>u(s({},"__esModule",{value:!0}),A),h=(A,B,se)=>new Promise((de,W)=>{var he=we=>{try{Ae(se.next(we))}catch(at){W(at)}},Ee=we=>{try{Ae(se.throw(we))}catch(at){W(at)}},Ae=we=>we.done?de(we.value):Promise.resolve(we.value).then(he,Ee);Ae((se=se.apply(A,B)).next())}),m={};l(m,{SubmissionError:()=>U,appendExtraData:()=>ae,createClient:()=>q,getDefaultClient:()=>Y,isSubmissionError:()=>L}),Wd=f(m);var p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",g=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;function v(A){A=String(A);for(var B,se,de,W,he="",Ee=0,Ae=A.length%3;Ee<A.length;){if((se=A.charCodeAt(Ee++))>255||(de=A.charCodeAt(Ee++))>255||(W=A.charCodeAt(Ee++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");B=se<<16|de<<8|W,he+=p.charAt(B>>18&63)+p.charAt(B>>12&63)+p.charAt(B>>6&63)+p.charAt(B&63)}return Ae?he.slice(0,Ae-3)+"===".substring(Ae):he}function x(A){if(A=String(A).replace(/[\t\n\f\r ]+/g,""),!g.test(A))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");A+="==".slice(2-(A.length&3));for(var B,se="",de,W,he=0;he<A.length;)B=p.indexOf(A.charAt(he++))<<18|p.indexOf(A.charAt(he++))<<12|(de=p.indexOf(A.charAt(he++)))<<6|(W=p.indexOf(A.charAt(he++))),se+=de===64?String.fromCharCode(B>>16&255):W===64?String.fromCharCode(B>>16&255,B>>8&255):String.fromCharCode(B>>16&255,B>>8&255,B&255);return se}var E=()=>navigator.webdriver||!!document.documentElement.getAttribute(x("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom,M=class{constructor(){this.loadedAt=Date.now(),this.webdriver=E()}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}},R=class{constructor(A){this.kind="success",this.next=A.next}};function y(A){return"next"in A&&typeof A.next=="string"}var _=class{constructor(A,B){this.paymentIntentClientSecret=A,this.resubmitKey=B,this.kind="stripePluginPending"}};function O(A){if("stripe"in A&&"resubmitKey"in A&&typeof A.resubmitKey=="string"){let{stripe:B}=A;return typeof B=="object"&&B!=null&&"paymentIntentClientSecret"in B&&typeof B.paymentIntentClientSecret=="string"}return!1}function L(A){return A.kind==="error"}var U=class{constructor(...A){this.kind="error",this.formErrors=[],this.fieldErrors=new Map;var B;for(let se of A){if(!se.field){this.formErrors.push({code:se.code&&H(se.code)?se.code:"UNSPECIFIED",message:se.message});continue}let de=(B=this.fieldErrors.get(se.field))!=null?B:[];de.push({code:se.code&&z(se.code)?se.code:"UNSPECIFIED",message:se.message}),this.fieldErrors.set(se.field,de)}}getFormErrors(){return[...this.formErrors]}getFieldErrors(A){var B;return(B=this.fieldErrors.get(A))!=null?B:[]}getAllFieldErrors(){return Array.from(this.fieldErrors)}};function H(A){return A in k}var k={BLOCKED:"BLOCKED",EMPTY:"EMPTY",FILES_TOO_BIG:"FILES_TOO_BIG",FORM_NOT_FOUND:"FORM_NOT_FOUND",INACTIVE:"INACTIVE",NO_FILE_UPLOADS:"NO_FILE_UPLOADS",PROJECT_NOT_FOUND:"PROJECT_NOT_FOUND",TOO_MANY_FILES:"TOO_MANY_FILES"};function z(A){return A in j}var j={REQUIRED_FIELD_EMPTY:"REQUIRED_FIELD_EMPTY",REQUIRED_FIELD_MISSING:"REQUIRED_FIELD_MISSING",STRIPE_CLIENT_ERROR:"STRIPE_CLIENT_ERROR",STRIPE_SCA_ERROR:"STRIPE_SCA_ERROR",TYPE_EMAIL:"TYPE_EMAIL",TYPE_NUMERIC:"TYPE_NUMERIC",TYPE_TEXT:"TYPE_TEXT"};function D(A){return"errors"in A&&Array.isArray(A.errors)&&A.errors.every(B=>typeof B.message=="string")||"error"in A&&typeof A.error=="string"}var w="4.0.0",G=A=>v(JSON.stringify(A)),oe=A=>{let B=`@formspree/core@${w}`;return A?`${A} ${B}`:B};function ae(A,B,se){A instanceof FormData?A.append(B,se):A[B]=se}function xe(A){return A!==null&&typeof A=="object"}var ue=class{constructor(A={}){this.project=A.project,this.stripe=A.stripe,typeof window<"u"&&(this.session=new M)}submitForm(A,B){return h(this,arguments,function*(se,de,W={}){let he=W.endpoint||"https://formspree.io",Ee=this.project?`${he}/p/${this.project}/f/${se}`:`${he}/f/${se}`,Ae={Accept:"application/json","Formspree-Client":oe(W.clientName)};this.session&&(Ae["Formspree-Session-Data"]=G(this.session.data())),de instanceof FormData||(Ae["Content-Type"]="application/json");function we(Xe){return h(this,null,function*(){try{let et=yield(yield fetch(Ee,{method:"POST",mode:"cors",body:Xe instanceof FormData?Xe:JSON.stringify(Xe),headers:Ae})).json();if(xe(et)){if(D(et))return Array.isArray(et.errors)?new U(...et.errors):new U({message:et.error});if(O(et))return new _(et.stripe.paymentIntentClientSecret,et.resubmitKey);if(y(et))return new R({next:et.next})}return new U({message:"Unexpected response format"})}catch(et){let bt=et instanceof Error?et.message:`Unknown error while posting to Formspree: ${JSON.stringify(et)}`;return new U({message:bt})}})}if(this.stripe&&W.createPaymentMethod){let Xe=yield W.createPaymentMethod();if(Xe.error)return new U({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Error creating payment method"});ae(de,"paymentMethod",Xe.paymentMethod.id);let et=yield we(de);if(et.kind==="error")return et;if(et.kind==="stripePluginPending"){let bt=yield this.stripe.handleCardAction(et.paymentIntentClientSecret);if(bt.error)return new U({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Stripe SCA error"});de instanceof FormData?de.delete("paymentMethod"):delete de.paymentMethod,ae(de,"paymentIntent",bt.paymentIntent.id),ae(de,"resubmitKey",et.resubmitKey);let ht=yield we(de);return P(ht),ht}return et}let at=yield we(de);return P(at),at})}};function P(A){let{kind:B}=A;if(B!=="success"&&B!=="error")throw new Error(`Unexpected submission result (kind: ${B})`)}var q=A=>new ue(A),Y=()=>(Me||(Me=q()),Me),Me;return Wd}var np=SC();function Nu(s){let{prefix:e,field:i,errors:r,...l}=s;if(r==null)return null;let u=i?r.getFieldErrors(i):r.getFormErrors();return u.length===0?null:tn.createElement("div",{...l},e?`${e} `:null,u.map(f=>f.message).join(", "))}var EC=fe.createContext({elements:null});function MC(){return fe.useContext(EC)}var bC=tn.createContext(null);function TC(){return fe.useContext(bC)??{client:np.getDefaultClient()}}var AC="3.0.0",RC=`@formspree/react@${AC}`;function CC(s,e={}){let i=TC(),{client:r=i.client,extraData:l,origin:u}=e,{elements:f}=MC(),{stripe:h}=r;return async function(m){let p=wC(m)?DC(m):m;if(typeof l=="object")for(let[x,E]of Object.entries(l)){let M;typeof E=="function"?M=await E():M=E,M!==void 0&&np.appendExtraData(p,x,M)}let g=f?.getElement(yC),v=h&&g?()=>h.createPaymentMethod({type:"card",card:g,billing_details:UC(p)}):void 0;return r.submitForm(s,p,{endpoint:u,clientName:RC,createPaymentMethod:v})}}function wC(s){return"preventDefault"in s&&typeof s.preventDefault=="function"}function DC(s){s.preventDefault();let e=s.currentTarget;if(e.tagName!="FORM")throw new Error("submit was triggered for a non-form element");return new FormData(e)}function UC(s){let e={address:LC(s)};for(let i of["name","email","phone"]){let r=s instanceof FormData?s.get(i):s[i];r&&typeof r=="string"&&(e[i]=r)}return e}function LC(s){let e={};for(let[i,r]of[["address_line1","line1"],["address_line2","line2"],["address_city","city"],["address_country","country"],["address_state","state"],["address_postal_code","postal_code"]]){let l=s instanceof FormData?s.get(i):s[i];l&&typeof l=="string"&&(e[r]=l)}return e}function NC(s,e={}){let[i,r]=fe.useState(null),[l,u]=fe.useState(null),[f,h]=fe.useState(!1),[m,p]=fe.useState(!1),g=CC(s,{client:e.client,extraData:e.data,origin:e.endpoint});return[{errors:i,result:l,submitting:f,succeeded:m},async function(v){h(!0);let x=await g(v);h(!1),np.isSubmissionError(x)?(r(x),p(!1)):(r(null),u(x),p(!0))},function(){r(null),u(null),h(!1),p(!1)}]}const OC=()=>{const[s,e]=NC("mrblllya");return s.succeeded?pe.jsx("section",{className:"min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 text-center",children:pe.jsxs("div",{className:"max-w-xl w-full mx-auto p-8 rounded-2xl shadow-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700",children:[pe.jsx("h2",{className:"text-4xl md:text-5xl font-extrabold mb-6 text-indigo-600 dark:text-indigo-400",children:"Message Sent!"}),pe.jsx("p",{className:"text-lg text-gray-700 dark:text-gray-300 mb-4",children:"Thank you for reaching out! I'll get back to you as soon as possible."}),pe.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"(You can customize this success message further!)"})]})}):pe.jsx("section",{className:"min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:pe.jsxs("div",{className:"max-w-4xl w-full mx-auto p-8 rounded-2xl shadow-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-center relative overflow-hidden",children:[pe.jsx("div",{className:"absolute top-0 left-0 w-32 h-32 bg-indigo-200 dark:bg-indigo-700 rounded-full opacity-10 blur-xl -translate-x-1/2 -translate-y-1/2"}),pe.jsx("div",{className:"absolute bottom-0 right-0 w-48 h-48 bg-purple-200 dark:bg-purple-700 rounded-full opacity-10 blur-xl translate-x-1/2 translate-y-1/2"}),pe.jsx("h2",{className:"text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-gray-100 leading-tight",children:"Let's Build Something Amazing Together!"}),pe.jsx("p",{className:"text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto",children:"Whether you have a project idea, a question, or just want to connect, feel free to reach out. I'm always eager to collaborate and discuss new opportunities. Or Email me on NagendraThakurSharma@gmail.com"}),pe.jsxs("form",{onSubmit:e,className:"grid grid-cols-1 md:grid-cols-2 gap-8 text-left",children:[pe.jsxs("div",{className:"space-y-6",children:[pe.jsxs("div",{children:[pe.jsx("label",{htmlFor:"name",className:"block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Your Name"}),pe.jsx("input",{type:"text",id:"name",name:"name",className:"w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200",placeholder:"John Doe",required:!0}),pe.jsx(Nu,{prefix:"Name",field:"name",errors:s.errors,className:"text-red-500 text-sm mt-1"})]}),pe.jsxs("div",{children:[pe.jsx("label",{htmlFor:"email",className:"block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Your Email"}),pe.jsx("input",{id:"email",type:"email",name:"email",className:"w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200",placeholder:"you@example.com",required:!0}),pe.jsx(Nu,{prefix:"Email",field:"email",errors:s.errors,className:"text-red-500 text-sm mt-1"})]}),pe.jsxs("div",{children:[pe.jsx("label",{htmlFor:"subject",className:"block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Subject"}),pe.jsx("input",{type:"text",id:"subject",name:"subject",className:"w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200",placeholder:"Project Inquiry, Collaboration, etc."}),pe.jsx(Nu,{prefix:"Subject",field:"subject",errors:s.errors,className:"text-red-500 text-sm mt-1"})]})]}),pe.jsxs("div",{className:"space-y-6",children:[pe.jsxs("div",{children:[pe.jsx("label",{htmlFor:"message",className:"block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Your Message"}),pe.jsx("textarea",{id:"message",name:"message",rows:"8",className:"w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200",placeholder:"Tell me more about your idea or question...",required:!0}),pe.jsx(Nu,{prefix:"Message",field:"message",errors:s.errors,className:"text-red-500 text-sm mt-1"})]}),pe.jsx("div",{className:"text-center md:text-right",children:pe.jsx("button",{type:"submit",disabled:s.submitting,className:"inline-flex items-center justify-center py-4 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed",children:s.submitting?"Sending...":pe.jsxs(pe.Fragment,{children:[pe.jsx(Fh,{size:20,className:"mr-2"})," Send Message"]})})})]})]})]})})},PC=()=>{const[s,e]=fe.useState(()=>{const r=localStorage.getItem("theme");return r?r==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches});fe.useEffect(()=>{s?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))},[s]);const i=()=>{e(!s)};return pe.jsxs(G0,{children:[" ",pe.jsxs("div",{className:"relative min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50 font-inter transition-colors duration-300 overflow-hidden",children:[pe.jsx(IC,{}),pe.jsxs("div",{className:"relative z-10",children:[pe.jsx(BC,{toggleDarkMode:i,darkMode:s}),pe.jsxs(ER,{children:[" ",pe.jsx(Oh,{path:"/",element:pe.jsxs(pe.Fragment,{children:[pe.jsx(zC,{}),pe.jsx(FC,{}),pe.jsx(GC,{})]})}),pe.jsx(Oh,{path:"/contact",element:pe.jsx(OC,{})})," "]}),pe.jsx(kC,{})]})]})]})},IC=()=>{const s=fe.useRef(null),e=fe.useRef(null),i=fe.useCallback(()=>{if(!s.current)return;const r=new GE;r.background=null;const l=new di(75,s.current.clientWidth/s.current.clientHeight,.1,1e3);l.position.z=5;const u=new U1({antialias:!0,alpha:!0});u.setSize(s.current.clientWidth,s.current.clientHeight),s.current.appendChild(u.domElement);const f=[],h=50,m=new Is(.1,1.5,.1);for(let v=0;v<h;v++){const x=new Zh({color:4871528}),E=new Di(m,x);E.position.x=(Math.random()-.5)*20,E.position.y=(Math.random()-.5)*20,E.position.z=Math.random()*-10,E.rotation.x=Math.random()*Math.PI,E.rotation.y=Math.random()*Math.PI,E.userData.speed=.05+Math.random()*.1,E.userData.rotationSpeed=.005+Math.random()*.01,r.add(E),f.push(E)}const p=()=>{e.current=requestAnimationFrame(p),f.forEach(v=>{v.position.y-=v.userData.speed,v.position.x+=(Math.random()-.5)*.01,v.rotation.x+=v.userData.rotationSpeed,v.rotation.y+=v.userData.rotationSpeed,v.position.y<-10&&(v.position.y=10,v.position.x=(Math.random()-.5)*20,v.position.z=Math.random()*-10)}),u.render(r,l)},g=()=>{l.aspect=s.current.clientWidth/s.current.clientHeight,l.updateProjectionMatrix(),u.setSize(s.current.clientWidth,s.current.clientHeight)};return window.addEventListener("resize",g),p(),()=>{window.removeEventListener("resize",g),cancelAnimationFrame(e.current),s.current&&u.domElement&&s.current.removeChild(u.domElement),u.dispose(),m.dispose(),f.forEach(v=>v.material.dispose())}},[]);return fe.useEffect(()=>{i()},[i]),pe.jsx("div",{ref:s,className:"absolute inset-0 w-full h-full z-0 opacity-20 dark:opacity-10",style:{background:"linear-gradient(135deg, #1a202c, #2d3748)"}})},BC=({toggleDarkMode:s,darkMode:e})=>pe.jsx("header",{className:"sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm py-4 px-4 sm:px-6 lg:px-8",children:pe.jsxs("div",{className:"max-w-7xl mx-auto flex justify-between items-center",children:[pe.jsxs(Lr,{to:"/",className:"flex items-center space-x-2 text-2xl font-bold text-gray-800 dark:text-gray-100",children:[" ",pe.jsx("img",{src:"https://placehold.co/40x40/6366f1/ffffff?text=N",alt:"Nagendra's Logo",className:"rounded-full"}),pe.jsx("span",{children:"Nagendra Thakur Sharma"})]}),pe.jsxs("nav",{className:"hidden md:flex space-x-6",children:[pe.jsx(Ou,{icon:pe.jsx(vS,{size:18}),text:"Home",to:"/"})," ",pe.jsx(Ou,{icon:pe.jsx(Bh,{size:18}),text:"Projects",to:"/#projects"}),pe.jsx(Ou,{icon:pe.jsx(Qv,{size:18}),text:"Blog",to:"/#blog"}),pe.jsx(Ou,{icon:pe.jsx(Fh,{size:18}),text:"Contact",to:"/contact"})," "]}),pe.jsxs("div",{className:"flex items-center space-x-4",children:[pe.jsx("button",{onClick:s,className:"p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500","aria-label":"Toggle dark mode",children:e?pe.jsx(Jv,{size:20}):pe.jsx(SS,{size:20})}),pe.jsx("button",{className:"md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:pe.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:pe.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16m-7 6h7"})})})]})]})}),Ou=({icon:s,text:e,to:i})=>pe.jsxs(Lr,{to:i,className:"flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 font-medium",children:[s,pe.jsx("span",{children:e})]}),zC=()=>pe.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-800 text-white rounded-b-3xl shadow-xl mx-auto max-w-7xl mt-8",children:pe.jsxs("div",{className:"max-w-4xl mx-auto",children:[pe.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6",children:["Hi, I'm ",pe.jsx("span",{className:"text-yellow-300",children:"Nagendra Thakur Sharma"})," – A Passionate Developer."]}),pe.jsx("p",{className:"text-lg sm:text-xl mb-8 opacity-90",children:"Welcome to my corner of the internet! I build robust and engaging softwares. Explore my projects and learn more about my journey in tech through my blog."}),pe.jsxs("div",{className:"flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4",children:[pe.jsx(Lr,{to:"/#projects",className:"bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300",children:"View My Projects"}),pe.jsx(Lr,{to:"/#blog",className:"bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-indigo-600 transform hover:scale-105 transition-all duration-300",children:"Read My Blog"})]})]})}),FC=()=>{const s=[{image:"https://placehold.co/400x250/6366f1/ffffff?text=Project+1",title:"Sajilo360 POS (FLutter)",description:"Sajilo360 is a cloud-based SaaS platform offering tailored POS and enterprise solutions for the Food and Beverage (F&B) and Retail industries. It seamlessly integrates with local vendors and provides F&B businesses with an online presence, connecting them to their customers. The platform's scalable architecture allows businesses to expand rapidly without management concerns.",liveLink:"https://play.google.com/store/apps/details?id=com.pos.sajilo360&pcampaignid=web_share",githubLink:"https://github.com/NagendraThakur/rastriya_solution_flutter"},{image:"https://placehold.co/400x250/22c55e/ffffff?text=Project+2",title:"Mero Gadi (Flutter)",description:"Mero Gadi Tracker provides GPS tracking systems to ensure the safety of your vehicles, fleet, family, and pets. The system delivers real-time location, speed, and route monitoring, allowing you to manage and keep an eye on what matters most. You receive instant alerts for accidents, unauthorized usage, and other critical events, all for an affordable price. These features help you stay connected and in control.",liveLink:"https://play.google.com/store/apps/details?id=ms.pioneer.merogadi&hl=en",githubLink:""},{image:"https://placehold.co/400x250/ef4444/ffffff?text=Project+3",title:"Chess App (FLutter)",description:"Built with Flutter and Dart, this chess game features a clean, intuitive user interface that offers a seamless playing experience. It demonstrates my ability to develop a complex, state-driven application with smooth animations and responsive design. The project showcases my skills in front-end development and logic implementation. It’s a testament to creating an engaging and functional user experience.",liveLink:"",githubLink:"https://github.com/NagendraThakur/chess_game_flutter"},{image:"https://placehold.co/400x250/3b82f6/ffffff?text=Project+4",title:"Spam Detection (Machine Learning)",description:"This spam detection software, developed in Python using a Jupyter Notebook, leverages machine learning to accurately classify emails. The project highlights my expertise in data science, including preprocessing, feature engineering, and model training.",liveLink:"",githubLink:"https://github.com/NagendraThakur/Spam-detection"},{image:"https://placehold.co/400x250/3b82f6/ffffff?text=Project+5",title:"ATS (Django)",description:"Built with the Django framework, this Applicant Tracking System (ATS) streamlines the hiring process for recruiters and hiring managers. It features a robust back-end for managing job postings, candidate applications, and interview scheduling. This project demonstrates my proficiency in full-stack web development, database design, and creating scalable, data-driven applications.",liveLink:"",githubLink:"https://github.com/NagendraThakur/ats_django"}];return pe.jsx("section",{id:"projects",className:"py-16 px-4 sm:px-6 lg:px-8",children:pe.jsxs("div",{className:"max-w-7xl mx-auto",children:[pe.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100",children:"My Latest Projects"}),pe.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:s.map((e,i)=>pe.jsx(HC,{image:e.image,title:e.title,description:e.description,liveLink:e.liveLink,githubLink:e.githubLink},i))}),pe.jsx("div",{className:"text-center mt-12",children:pe.jsxs(Lr,{to:"/projects-page",className:"inline-flex items-center justify-center py-3 px-8 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300",children:[pe.jsx(mS,{size:20,className:"mr-2"})," View All Projects"]})})]})})},HC=({image:s,title:e,description:i,liveLink:r,githubLink:l})=>pe.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden",children:[pe.jsx("img",{src:s,alt:e,className:"w-full h-48 object-cover"}),pe.jsxs("div",{className:"p-6",children:[pe.jsx("h3",{className:"text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100",children:e}),pe.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:i}),pe.jsxs("div",{className:"flex justify-center space-x-4",children:[r!=""?pe.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium transition-colors",children:[pe.jsx(Bh,{size:18,className:"mr-1"})," Live Demo"]}):null,l!=""?pe.jsxs("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 font-medium transition-colors",children:[pe.jsx(zh,{size:18,className:"mr-1"})," GitHub"]}):null]})]})]}),GC=()=>{const s=[{icon:pe.jsx(Bh,{size:32,className:"text-indigo-500 dark:text-indigo-400"}),title:"Full-Stack Development",description:"Proficient in both front-end (React, Vue) and back-end (Node.js, Python, Ruby on Rails) technologies."},{icon:pe.jsx(fS,{size:32,className:"text-green-500 dark:text-green-400"}),title:"Problem Solving",description:"A knack for breaking down complex problems and delivering efficient, scalable solutions."},{icon:pe.jsx(Qv,{size:32,className:"text-red-500 dark:text-red-400"}),title:"Clean Code Advocate",description:"Committed to writing readable, maintainable, and well-documented code."},{icon:pe.jsx(Jv,{size:32,className:"text-yellow-500 dark:text-yellow-400"}),title:"Responsive Design",description:"Ensuring applications look and function flawlessly across all devices and screen sizes."},{icon:pe.jsx(Fh,{size:32,className:"text-blue-500 dark:text-blue-400"}),title:"Effective Communication",description:"Clear and concise communication, both technical and non-technical."},{icon:pe.jsx(zh,{size:32,className:"text-gray-700 dark:text-gray-300"}),title:"Version Control",description:"Experienced with Git and collaborative development workflows."}];return pe.jsx("section",{className:"py-16 px-4 sm:px-6 lg:px-8",children:pe.jsxs("div",{className:"max-w-7xl mx-auto",children:[pe.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100",children:"Why Work With Me?"}),pe.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:s.map((e,i)=>pe.jsx(VC,{icon:e.icon,title:e.title,description:e.description},i))})]})})},VC=({icon:s,title:e,description:i})=>pe.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300 border border-gray-100 dark:border-gray-700",children:[pe.jsx("div",{className:"mb-4 flex justify-center",children:s}),pe.jsx("h3",{className:"text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100",children:e}),pe.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:i})]}),kC=()=>pe.jsx("footer",{className:"py-8 px-4 sm:px-6 lg:px-8 bg-gray-800 dark:bg-gray-950 text-gray-300 dark:text-gray-400",children:pe.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-4 sm:space-y-0",children:[pe.jsxs("p",{children:["© ",new Date().getFullYear()," Nagendra Thakur Sharma. All rights reserved."]}),pe.jsxs("div",{className:"flex space-x-6",children:[pe.jsx("a",{href:"https://github.com/NagendraThakur",target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors duration-200","aria-label":"GitHub",children:pe.jsx(zh,{size:24})}),pe.jsx("a",{href:"https://www.linkedin.com/in/nagendrathakursharma/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors duration-200","aria-label":"LinkedIn",children:pe.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:pe.jsx("path",{d:"M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.27 20.3H3.65V9.4H7.27v10.9zM5.46 7.82c-1.2 0-2.17-.97-2.17-2.17s.97-2.17 2.17-2.17 2.17.97 2.17 2.17-.97 2.17-2.17 2.17zm14.83 12.48h-3.62V14.5c0-1.3-.47-2.19-1.63-2.19-1.3 0-2.07.88-2.07 2.19v5.8h-3.61V9.4h3.61v1.57c.5-.72 1.3-1.76 3.26-1.76 2.37 0 4.15 1.55 4.15 4.88v6.21z"})})})]})]})});aS.createRoot(document.getElementById("root")).render(pe.jsx(fe.StrictMode,{children:pe.jsx(G0,{basename:"/portfolio",children:pe.jsx(PC,{})})}));
