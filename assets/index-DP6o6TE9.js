(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function _h(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var wT={exports:{}},yh={},ET={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xu=Symbol.for("react.element"),_1=Symbol.for("react.portal"),y1=Symbol.for("react.fragment"),v1=Symbol.for("react.strict_mode"),w1=Symbol.for("react.profiler"),E1=Symbol.for("react.provider"),I1=Symbol.for("react.context"),T1=Symbol.for("react.forward_ref"),S1=Symbol.for("react.suspense"),R1=Symbol.for("react.memo"),A1=Symbol.for("react.lazy"),nw=Symbol.iterator;function P1(t){return t===null||typeof t!="object"?null:(t=nw&&t[nw]||t["@@iterator"],typeof t=="function"?t:null)}var IT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},TT=Object.assign,ST={};function va(t,e,n){this.props=t,this.context=e,this.refs=ST,this.updater=n||IT}va.prototype.isReactComponent={};va.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};va.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function RT(){}RT.prototype=va.prototype;function Tg(t,e,n){this.props=t,this.context=e,this.refs=ST,this.updater=n||IT}var Sg=Tg.prototype=new RT;Sg.constructor=Tg;TT(Sg,va.prototype);Sg.isPureReactComponent=!0;var rw=Array.isArray,AT=Object.prototype.hasOwnProperty,Rg={current:null},PT={key:!0,ref:!0,__self:!0,__source:!0};function CT(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)AT.call(e,r)&&!PT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:xu,type:t,key:s,ref:o,props:i,_owner:Rg.current}}function C1(t,e){return{$$typeof:xu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ag(t){return typeof t=="object"&&t!==null&&t.$$typeof===xu}function k1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var iw=/\/+/g;function $f(t,e){return typeof t=="object"&&t!==null&&t.key!=null?k1(""+t.key):e.toString(36)}function Yc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xu:case _1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+$f(o,0):r,rw(i)?(n="",t!=null&&(n=t.replace(iw,"$&/")+"/"),Yc(i,e,n,"",function(c){return c})):i!=null&&(Ag(i)&&(i=C1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(iw,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",rw(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+$f(s,a);o+=Yc(s,e,n,l,i)}else if(l=P1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+$f(s,a++),o+=Yc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wc(t,e,n){if(t==null)return t;var r=[],i=0;return Yc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function x1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jt={current:null},Xc={transition:null},b1={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:Xc,ReactCurrentOwner:Rg};function kT(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:wc,forEach:function(t,e,n){wc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wc(t,function(){e++}),e},toArray:function(t){return wc(t,function(e){return e})||[]},only:function(t){if(!Ag(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};le.Component=va;le.Fragment=y1;le.Profiler=w1;le.PureComponent=Tg;le.StrictMode=v1;le.Suspense=S1;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b1;le.act=kT;le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=TT({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Rg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)AT.call(e,l)&&!PT.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:xu,type:t.type,key:i,ref:s,props:r,_owner:o}};le.createContext=function(t){return t={$$typeof:I1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:E1,_context:t},t.Consumer=t};le.createElement=CT;le.createFactory=function(t){var e=CT.bind(null,t);return e.type=t,e};le.createRef=function(){return{current:null}};le.forwardRef=function(t){return{$$typeof:T1,render:t}};le.isValidElement=Ag;le.lazy=function(t){return{$$typeof:A1,_payload:{_status:-1,_result:t},_init:x1}};le.memo=function(t,e){return{$$typeof:R1,type:t,compare:e===void 0?null:e}};le.startTransition=function(t){var e=Xc.transition;Xc.transition={};try{t()}finally{Xc.transition=e}};le.unstable_act=kT;le.useCallback=function(t,e){return Jt.current.useCallback(t,e)};le.useContext=function(t){return Jt.current.useContext(t)};le.useDebugValue=function(){};le.useDeferredValue=function(t){return Jt.current.useDeferredValue(t)};le.useEffect=function(t,e){return Jt.current.useEffect(t,e)};le.useId=function(){return Jt.current.useId()};le.useImperativeHandle=function(t,e,n){return Jt.current.useImperativeHandle(t,e,n)};le.useInsertionEffect=function(t,e){return Jt.current.useInsertionEffect(t,e)};le.useLayoutEffect=function(t,e){return Jt.current.useLayoutEffect(t,e)};le.useMemo=function(t,e){return Jt.current.useMemo(t,e)};le.useReducer=function(t,e,n){return Jt.current.useReducer(t,e,n)};le.useRef=function(t){return Jt.current.useRef(t)};le.useState=function(t){return Jt.current.useState(t)};le.useSyncExternalStore=function(t,e,n){return Jt.current.useSyncExternalStore(t,e,n)};le.useTransition=function(){return Jt.current.useTransition()};le.version="18.3.1";ET.exports=le;var x=ET.exports;const li=_h(x);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N1=x,D1=Symbol.for("react.element"),O1=Symbol.for("react.fragment"),V1=Object.prototype.hasOwnProperty,L1=N1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M1={key:!0,ref:!0,__self:!0,__source:!0};function xT(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)V1.call(e,r)&&!M1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:D1,type:t,key:s,ref:o,props:i,_owner:L1.current}}yh.Fragment=O1;yh.jsx=xT;yh.jsxs=xT;wT.exports=yh;var g=wT.exports,Fp={},bT={exports:{}},In={},NT={exports:{}},DT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(G,ee){var te=G.length;G.push(ee);e:for(;0<te;){var fe=te-1>>>1,ue=G[fe];if(0<i(ue,ee))G[fe]=ee,G[te]=ue,te=fe;else break e}}function n(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var ee=G[0],te=G.pop();if(te!==ee){G[0]=te;e:for(var fe=0,ue=G.length,oe=ue>>>1;fe<oe;){var rt=2*(fe+1)-1,lt=G[rt],ut=rt+1,bt=G[ut];if(0>i(lt,te))ut<ue&&0>i(bt,lt)?(G[fe]=bt,G[ut]=te,fe=ut):(G[fe]=lt,G[rt]=te,fe=rt);else if(ut<ue&&0>i(bt,te))G[fe]=bt,G[ut]=te,fe=ut;else break e}}return ee}function i(G,ee){var te=G.sortIndex-ee.sortIndex;return te!==0?te:G.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,m=3,v=!1,P=!1,k=!1,D=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(G){for(var ee=n(c);ee!==null;){if(ee.callback===null)r(c);else if(ee.startTime<=G)r(c),ee.sortIndex=ee.expirationTime,e(l,ee);else break;ee=n(c)}}function O(G){if(k=!1,S(G),!P)if(n(l)!==null)P=!0,xt(U);else{var ee=n(c);ee!==null&&$e(O,ee.startTime-G)}}function U(G,ee){P=!1,k&&(k=!1,T(y),y=-1),v=!0;var te=m;try{for(S(ee),f=n(l);f!==null&&(!(f.expirationTime>ee)||G&&!C());){var fe=f.callback;if(typeof fe=="function"){f.callback=null,m=f.priorityLevel;var ue=fe(f.expirationTime<=ee);ee=t.unstable_now(),typeof ue=="function"?f.callback=ue:f===n(l)&&r(l),S(ee)}else r(l);f=n(l)}if(f!==null)var oe=!0;else{var rt=n(c);rt!==null&&$e(O,rt.startTime-ee),oe=!1}return oe}finally{f=null,m=te,v=!1}}var F=!1,E=null,y=-1,I=5,R=-1;function C(){return!(t.unstable_now()-R<I)}function b(){if(E!==null){var G=t.unstable_now();R=G;var ee=!0;try{ee=E(!0,G)}finally{ee?A():(F=!1,E=null)}}else F=!1}var A;if(typeof w=="function")A=function(){w(b)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,Bt=at.port2;at.port1.onmessage=b,A=function(){Bt.postMessage(null)}}else A=function(){D(b,0)};function xt(G){E=G,F||(F=!0,A())}function $e(G,ee){y=D(function(){G(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(G){G.callback=null},t.unstable_continueExecution=function(){P||v||(P=!0,xt(U))},t.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<G?Math.floor(1e3/G):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(G){switch(m){case 1:case 2:case 3:var ee=3;break;default:ee=m}var te=m;m=ee;try{return G()}finally{m=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(G,ee){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var te=m;m=G;try{return ee()}finally{m=te}},t.unstable_scheduleCallback=function(G,ee,te){var fe=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?fe+te:fe):te=fe,G){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=te+ue,G={id:d++,callback:ee,priorityLevel:G,startTime:te,expirationTime:ue,sortIndex:-1},te>fe?(G.sortIndex=te,e(c,G),n(l)===null&&G===n(c)&&(k?(T(y),y=-1):k=!0,$e(O,te-fe))):(G.sortIndex=ue,e(l,G),P||v||(P=!0,xt(U))),G},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(G){var ee=m;return function(){var te=m;m=ee;try{return G.apply(this,arguments)}finally{m=te}}}})(DT);NT.exports=DT;var F1=NT.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U1=x,wn=F1;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var OT=new Set,Hl={};function zs(t,e){Wo(t,e),Wo(t+"Capture",e)}function Wo(t,e){for(Hl[t]=e,t=0;t<e.length;t++)OT.add(e[t])}var xr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Up=Object.prototype.hasOwnProperty,j1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sw={},ow={};function B1(t){return Up.call(ow,t)?!0:Up.call(sw,t)?!1:j1.test(t)?ow[t]=!0:(sw[t]=!0,!1)}function z1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $1(t,e,n,r){if(e===null||typeof e>"u"||z1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pg=/[\-:]([a-z])/g;function Cg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pg,Cg);kt[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pg,Cg);kt[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pg,Cg);kt[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function kg(t,e,n,r){var i=kt.hasOwnProperty(e)?kt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($1(e,n,i,r)&&(n=null),r||i===null?B1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ur=U1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ec=Symbol.for("react.element"),vo=Symbol.for("react.portal"),wo=Symbol.for("react.fragment"),xg=Symbol.for("react.strict_mode"),jp=Symbol.for("react.profiler"),VT=Symbol.for("react.provider"),LT=Symbol.for("react.context"),bg=Symbol.for("react.forward_ref"),Bp=Symbol.for("react.suspense"),zp=Symbol.for("react.suspense_list"),Ng=Symbol.for("react.memo"),ti=Symbol.for("react.lazy"),MT=Symbol.for("react.offscreen"),aw=Symbol.iterator;function el(t){return t===null||typeof t!="object"?null:(t=aw&&t[aw]||t["@@iterator"],typeof t=="function"?t:null)}var je=Object.assign,qf;function _l(t){if(qf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qf=e&&e[1]||""}return`
`+qf+t}var Gf=!1;function Wf(t,e){if(!t||Gf)return"";Gf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Gf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_l(t):""}function q1(t){switch(t.tag){case 5:return _l(t.type);case 16:return _l("Lazy");case 13:return _l("Suspense");case 19:return _l("SuspenseList");case 0:case 2:case 15:return t=Wf(t.type,!1),t;case 11:return t=Wf(t.type.render,!1),t;case 1:return t=Wf(t.type,!0),t;default:return""}}function $p(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case wo:return"Fragment";case vo:return"Portal";case jp:return"Profiler";case xg:return"StrictMode";case Bp:return"Suspense";case zp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case LT:return(t.displayName||"Context")+".Consumer";case VT:return(t._context.displayName||"Context")+".Provider";case bg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ng:return e=t.displayName||null,e!==null?e:$p(t.type)||"Memo";case ti:e=t._payload,t=t._init;try{return $p(t(e))}catch{}}return null}function G1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $p(e);case 8:return e===xg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ti(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function FT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function W1(t){var e=FT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ic(t){t._valueTracker||(t._valueTracker=W1(t))}function UT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=FT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ed(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qp(t,e){var n=e.checked;return je({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lw(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ti(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function jT(t,e){e=e.checked,e!=null&&kg(t,"checked",e,!1)}function Gp(t,e){jT(t,e);var n=Ti(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wp(t,e.type,Ti(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function uw(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wp(t,e,n){(e!=="number"||Ed(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var yl=Array.isArray;function Do(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ti(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Hp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return je({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(yl(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ti(n)}}function BT(t,e){var n=Ti(e.value),r=Ti(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function dw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Tc,$T=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Tc=Tc||document.createElement("div"),Tc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Tc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Kl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Cl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},H1=["Webkit","ms","Moz","O"];Object.keys(Cl).forEach(function(t){H1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Cl[e]=Cl[t]})});function qT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Cl.hasOwnProperty(t)&&Cl[t]?(""+e).trim():e+"px"}function GT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=qT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var K1=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qp(t,e){if(e){if(K1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function Yp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xp=null;function Dg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jp=null,Oo=null,Vo=null;function hw(t){if(t=Du(t)){if(typeof Jp!="function")throw Error($(280));var e=t.stateNode;e&&(e=Th(e),Jp(t.stateNode,t.type,e))}}function WT(t){Oo?Vo?Vo.push(t):Vo=[t]:Oo=t}function HT(){if(Oo){var t=Oo,e=Vo;if(Vo=Oo=null,hw(t),e)for(t=0;t<e.length;t++)hw(e[t])}}function KT(t,e){return t(e)}function QT(){}var Hf=!1;function YT(t,e,n){if(Hf)return t(e,n);Hf=!0;try{return KT(t,e,n)}finally{Hf=!1,(Oo!==null||Vo!==null)&&(QT(),HT())}}function Ql(t,e){var n=t.stateNode;if(n===null)return null;var r=Th(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var Zp=!1;if(xr)try{var tl={};Object.defineProperty(tl,"passive",{get:function(){Zp=!0}}),window.addEventListener("test",tl,tl),window.removeEventListener("test",tl,tl)}catch{Zp=!1}function Q1(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var kl=!1,Id=null,Td=!1,em=null,Y1={onError:function(t){kl=!0,Id=t}};function X1(t,e,n,r,i,s,o,a,l){kl=!1,Id=null,Q1.apply(Y1,arguments)}function J1(t,e,n,r,i,s,o,a,l){if(X1.apply(this,arguments),kl){if(kl){var c=Id;kl=!1,Id=null}else throw Error($(198));Td||(Td=!0,em=c)}}function $s(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function XT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fw(t){if($s(t)!==t)throw Error($(188))}function Z1(t){var e=t.alternate;if(!e){if(e=$s(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return fw(i),t;if(s===r)return fw(i),e;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function JT(t){return t=Z1(t),t!==null?ZT(t):null}function ZT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ZT(t);if(e!==null)return e;t=t.sibling}return null}var e0=wn.unstable_scheduleCallback,pw=wn.unstable_cancelCallback,ex=wn.unstable_shouldYield,tx=wn.unstable_requestPaint,et=wn.unstable_now,nx=wn.unstable_getCurrentPriorityLevel,Og=wn.unstable_ImmediatePriority,t0=wn.unstable_UserBlockingPriority,Sd=wn.unstable_NormalPriority,rx=wn.unstable_LowPriority,n0=wn.unstable_IdlePriority,vh=null,sr=null;function ix(t){if(sr&&typeof sr.onCommitFiberRoot=="function")try{sr.onCommitFiberRoot(vh,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:ax,sx=Math.log,ox=Math.LN2;function ax(t){return t>>>=0,t===0?32:31-(sx(t)/ox|0)|0}var Sc=64,Rc=4194304;function vl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rd(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=vl(a):(s&=o,s!==0&&(r=vl(s)))}else o=n&~i,o!==0?r=vl(o):s!==0&&(r=vl(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-$n(e),i=1<<n,r|=t[n],e&=~i;return r}function lx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ux(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$n(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=lx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function tm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function r0(){var t=Sc;return Sc<<=1,!(Sc&4194240)&&(Sc=64),t}function Kf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function bu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function cx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-$n(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Vg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-$n(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ie=0;function i0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var s0,Lg,o0,a0,l0,nm=!1,Ac=[],fi=null,pi=null,mi=null,Yl=new Map,Xl=new Map,ii=[],dx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mw(t,e){switch(t){case"focusin":case"focusout":fi=null;break;case"dragenter":case"dragleave":pi=null;break;case"mouseover":case"mouseout":mi=null;break;case"pointerover":case"pointerout":Yl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xl.delete(e.pointerId)}}function nl(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Du(e),e!==null&&Lg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function hx(t,e,n,r,i){switch(e){case"focusin":return fi=nl(fi,t,e,n,r,i),!0;case"dragenter":return pi=nl(pi,t,e,n,r,i),!0;case"mouseover":return mi=nl(mi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Yl.set(s,nl(Yl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Xl.set(s,nl(Xl.get(s)||null,t,e,n,r,i)),!0}return!1}function u0(t){var e=ds(t.target);if(e!==null){var n=$s(e);if(n!==null){if(e=n.tag,e===13){if(e=XT(n),e!==null){t.blockedOn=e,l0(t.priority,function(){o0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Xp=r,n.target.dispatchEvent(r),Xp=null}else return e=Du(n),e!==null&&Lg(e),t.blockedOn=n,!1;e.shift()}return!0}function gw(t,e,n){Jc(t)&&n.delete(e)}function fx(){nm=!1,fi!==null&&Jc(fi)&&(fi=null),pi!==null&&Jc(pi)&&(pi=null),mi!==null&&Jc(mi)&&(mi=null),Yl.forEach(gw),Xl.forEach(gw)}function rl(t,e){t.blockedOn===e&&(t.blockedOn=null,nm||(nm=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,fx)))}function Jl(t){function e(i){return rl(i,t)}if(0<Ac.length){rl(Ac[0],t);for(var n=1;n<Ac.length;n++){var r=Ac[n];r.blockedOn===t&&(r.blockedOn=null)}}for(fi!==null&&rl(fi,t),pi!==null&&rl(pi,t),mi!==null&&rl(mi,t),Yl.forEach(e),Xl.forEach(e),n=0;n<ii.length;n++)r=ii[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ii.length&&(n=ii[0],n.blockedOn===null);)u0(n),n.blockedOn===null&&ii.shift()}var Lo=Ur.ReactCurrentBatchConfig,Ad=!0;function px(t,e,n,r){var i=Ie,s=Lo.transition;Lo.transition=null;try{Ie=1,Mg(t,e,n,r)}finally{Ie=i,Lo.transition=s}}function mx(t,e,n,r){var i=Ie,s=Lo.transition;Lo.transition=null;try{Ie=4,Mg(t,e,n,r)}finally{Ie=i,Lo.transition=s}}function Mg(t,e,n,r){if(Ad){var i=rm(t,e,n,r);if(i===null)ip(t,e,r,Pd,n),mw(t,r);else if(hx(i,t,e,n,r))r.stopPropagation();else if(mw(t,r),e&4&&-1<dx.indexOf(t)){for(;i!==null;){var s=Du(i);if(s!==null&&s0(s),s=rm(t,e,n,r),s===null&&ip(t,e,r,Pd,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ip(t,e,r,null,n)}}var Pd=null;function rm(t,e,n,r){if(Pd=null,t=Dg(r),t=ds(t),t!==null)if(e=$s(t),e===null)t=null;else if(n=e.tag,n===13){if(t=XT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Pd=t,null}function c0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nx()){case Og:return 1;case t0:return 4;case Sd:case rx:return 16;case n0:return 536870912;default:return 16}default:return 16}}var ui=null,Fg=null,Zc=null;function d0(){if(Zc)return Zc;var t,e=Fg,n=e.length,r,i="value"in ui?ui.value:ui.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Zc=i.slice(t,1<r?1-r:void 0)}function ed(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Pc(){return!0}function _w(){return!1}function Tn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Pc:_w,this.isPropagationStopped=_w,this}return je(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pc)},persist:function(){},isPersistent:Pc}),e}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ug=Tn(wa),Nu=je({},wa,{view:0,detail:0}),gx=Tn(Nu),Qf,Yf,il,wh=je({},Nu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==il&&(il&&t.type==="mousemove"?(Qf=t.screenX-il.screenX,Yf=t.screenY-il.screenY):Yf=Qf=0,il=t),Qf)},movementY:function(t){return"movementY"in t?t.movementY:Yf}}),yw=Tn(wh),_x=je({},wh,{dataTransfer:0}),yx=Tn(_x),vx=je({},Nu,{relatedTarget:0}),Xf=Tn(vx),wx=je({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),Ex=Tn(wx),Ix=je({},wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Tx=Tn(Ix),Sx=je({},wa,{data:0}),vw=Tn(Sx),Rx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ax={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Px={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Px[t])?!!e[t]:!1}function jg(){return Cx}var kx=je({},Nu,{key:function(t){if(t.key){var e=Rx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ed(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ax[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jg,charCode:function(t){return t.type==="keypress"?ed(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ed(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xx=Tn(kx),bx=je({},wh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ww=Tn(bx),Nx=je({},Nu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jg}),Dx=Tn(Nx),Ox=je({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vx=Tn(Ox),Lx=je({},wh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Mx=Tn(Lx),Fx=[9,13,27,32],Bg=xr&&"CompositionEvent"in window,xl=null;xr&&"documentMode"in document&&(xl=document.documentMode);var Ux=xr&&"TextEvent"in window&&!xl,h0=xr&&(!Bg||xl&&8<xl&&11>=xl),Ew=" ",Iw=!1;function f0(t,e){switch(t){case"keyup":return Fx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function p0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Eo=!1;function jx(t,e){switch(t){case"compositionend":return p0(e);case"keypress":return e.which!==32?null:(Iw=!0,Ew);case"textInput":return t=e.data,t===Ew&&Iw?null:t;default:return null}}function Bx(t,e){if(Eo)return t==="compositionend"||!Bg&&f0(t,e)?(t=d0(),Zc=Fg=ui=null,Eo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return h0&&e.locale!=="ko"?null:e.data;default:return null}}var zx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zx[t.type]:e==="textarea"}function m0(t,e,n,r){WT(r),e=Cd(e,"onChange"),0<e.length&&(n=new Ug("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var bl=null,Zl=null;function $x(t){A0(t,0)}function Eh(t){var e=So(t);if(UT(e))return t}function qx(t,e){if(t==="change")return e}var g0=!1;if(xr){var Jf;if(xr){var Zf="oninput"in document;if(!Zf){var Sw=document.createElement("div");Sw.setAttribute("oninput","return;"),Zf=typeof Sw.oninput=="function"}Jf=Zf}else Jf=!1;g0=Jf&&(!document.documentMode||9<document.documentMode)}function Rw(){bl&&(bl.detachEvent("onpropertychange",_0),Zl=bl=null)}function _0(t){if(t.propertyName==="value"&&Eh(Zl)){var e=[];m0(e,Zl,t,Dg(t)),YT($x,e)}}function Gx(t,e,n){t==="focusin"?(Rw(),bl=e,Zl=n,bl.attachEvent("onpropertychange",_0)):t==="focusout"&&Rw()}function Wx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Eh(Zl)}function Hx(t,e){if(t==="click")return Eh(e)}function Kx(t,e){if(t==="input"||t==="change")return Eh(e)}function Qx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gn=typeof Object.is=="function"?Object.is:Qx;function eu(t,e){if(Gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Up.call(e,i)||!Gn(t[i],e[i]))return!1}return!0}function Aw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pw(t,e){var n=Aw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Aw(n)}}function y0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?y0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function v0(){for(var t=window,e=Ed();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ed(t.document)}return e}function zg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Yx(t){var e=v0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&y0(n.ownerDocument.documentElement,n)){if(r!==null&&zg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Pw(n,s);var o=Pw(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Xx=xr&&"documentMode"in document&&11>=document.documentMode,Io=null,im=null,Nl=null,sm=!1;function Cw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sm||Io==null||Io!==Ed(r)||(r=Io,"selectionStart"in r&&zg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nl&&eu(Nl,r)||(Nl=r,r=Cd(im,"onSelect"),0<r.length&&(e=new Ug("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Io)))}function Cc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var To={animationend:Cc("Animation","AnimationEnd"),animationiteration:Cc("Animation","AnimationIteration"),animationstart:Cc("Animation","AnimationStart"),transitionend:Cc("Transition","TransitionEnd")},ep={},w0={};xr&&(w0=document.createElement("div").style,"AnimationEvent"in window||(delete To.animationend.animation,delete To.animationiteration.animation,delete To.animationstart.animation),"TransitionEvent"in window||delete To.transitionend.transition);function Ih(t){if(ep[t])return ep[t];if(!To[t])return t;var e=To[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in w0)return ep[t]=e[n];return t}var E0=Ih("animationend"),I0=Ih("animationiteration"),T0=Ih("animationstart"),S0=Ih("transitionend"),R0=new Map,kw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Li(t,e){R0.set(t,e),zs(e,[t])}for(var tp=0;tp<kw.length;tp++){var np=kw[tp],Jx=np.toLowerCase(),Zx=np[0].toUpperCase()+np.slice(1);Li(Jx,"on"+Zx)}Li(E0,"onAnimationEnd");Li(I0,"onAnimationIteration");Li(T0,"onAnimationStart");Li("dblclick","onDoubleClick");Li("focusin","onFocus");Li("focusout","onBlur");Li(S0,"onTransitionEnd");Wo("onMouseEnter",["mouseout","mouseover"]);Wo("onMouseLeave",["mouseout","mouseover"]);Wo("onPointerEnter",["pointerout","pointerover"]);Wo("onPointerLeave",["pointerout","pointerover"]);zs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zs("onBeforeInput",["compositionend","keypress","textInput","paste"]);zs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eb=new Set("cancel close invalid load scroll toggle".split(" ").concat(wl));function xw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,J1(r,e,void 0,t),t.currentTarget=null}function A0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;xw(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;xw(i,a,c),s=l}}}if(Td)throw t=em,Td=!1,em=null,t}function Ce(t,e){var n=e[cm];n===void 0&&(n=e[cm]=new Set);var r=t+"__bubble";n.has(r)||(P0(e,t,2,!1),n.add(r))}function rp(t,e,n){var r=0;e&&(r|=4),P0(n,t,r,e)}var kc="_reactListening"+Math.random().toString(36).slice(2);function tu(t){if(!t[kc]){t[kc]=!0,OT.forEach(function(n){n!=="selectionchange"&&(eb.has(n)||rp(n,!1,t),rp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[kc]||(e[kc]=!0,rp("selectionchange",!1,e))}}function P0(t,e,n,r){switch(c0(e)){case 1:var i=px;break;case 4:i=mx;break;default:i=Mg}n=i.bind(null,e,n,t),i=void 0,!Zp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ip(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ds(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}YT(function(){var c=s,d=Dg(n),f=[];e:{var m=R0.get(t);if(m!==void 0){var v=Ug,P=t;switch(t){case"keypress":if(ed(n)===0)break e;case"keydown":case"keyup":v=xx;break;case"focusin":P="focus",v=Xf;break;case"focusout":P="blur",v=Xf;break;case"beforeblur":case"afterblur":v=Xf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=yw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=yx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Dx;break;case E0:case I0:case T0:v=Ex;break;case S0:v=Vx;break;case"scroll":v=gx;break;case"wheel":v=Mx;break;case"copy":case"cut":case"paste":v=Tx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ww}var k=(e&4)!==0,D=!k&&t==="scroll",T=k?m!==null?m+"Capture":null:m;k=[];for(var w=c,S;w!==null;){S=w;var O=S.stateNode;if(S.tag===5&&O!==null&&(S=O,T!==null&&(O=Ql(w,T),O!=null&&k.push(nu(w,O,S)))),D)break;w=w.return}0<k.length&&(m=new v(m,P,null,n,d),f.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==Xp&&(P=n.relatedTarget||n.fromElement)&&(ds(P)||P[br]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(P=n.relatedTarget||n.toElement,v=c,P=P?ds(P):null,P!==null&&(D=$s(P),P!==D||P.tag!==5&&P.tag!==6)&&(P=null)):(v=null,P=c),v!==P)){if(k=yw,O="onMouseLeave",T="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(k=ww,O="onPointerLeave",T="onPointerEnter",w="pointer"),D=v==null?m:So(v),S=P==null?m:So(P),m=new k(O,w+"leave",v,n,d),m.target=D,m.relatedTarget=S,O=null,ds(d)===c&&(k=new k(T,w+"enter",P,n,d),k.target=S,k.relatedTarget=D,O=k),D=O,v&&P)t:{for(k=v,T=P,w=0,S=k;S;S=ro(S))w++;for(S=0,O=T;O;O=ro(O))S++;for(;0<w-S;)k=ro(k),w--;for(;0<S-w;)T=ro(T),S--;for(;w--;){if(k===T||T!==null&&k===T.alternate)break t;k=ro(k),T=ro(T)}k=null}else k=null;v!==null&&bw(f,m,v,k,!1),P!==null&&D!==null&&bw(f,D,P,k,!0)}}e:{if(m=c?So(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var U=qx;else if(Tw(m))if(g0)U=Kx;else{U=Wx;var F=Gx}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(U=Hx);if(U&&(U=U(t,c))){m0(f,U,n,d);break e}F&&F(t,m,c),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&Wp(m,"number",m.value)}switch(F=c?So(c):window,t){case"focusin":(Tw(F)||F.contentEditable==="true")&&(Io=F,im=c,Nl=null);break;case"focusout":Nl=im=Io=null;break;case"mousedown":sm=!0;break;case"contextmenu":case"mouseup":case"dragend":sm=!1,Cw(f,n,d);break;case"selectionchange":if(Xx)break;case"keydown":case"keyup":Cw(f,n,d)}var E;if(Bg)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Eo?f0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(h0&&n.locale!=="ko"&&(Eo||y!=="onCompositionStart"?y==="onCompositionEnd"&&Eo&&(E=d0()):(ui=d,Fg="value"in ui?ui.value:ui.textContent,Eo=!0)),F=Cd(c,y),0<F.length&&(y=new vw(y,t,null,n,d),f.push({event:y,listeners:F}),E?y.data=E:(E=p0(n),E!==null&&(y.data=E)))),(E=Ux?jx(t,n):Bx(t,n))&&(c=Cd(c,"onBeforeInput"),0<c.length&&(d=new vw("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=E))}A0(f,e)})}function nu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ql(t,n),s!=null&&r.unshift(nu(t,s,i)),s=Ql(t,e),s!=null&&r.push(nu(t,s,i))),t=t.return}return r}function ro(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Ql(n,s),l!=null&&o.unshift(nu(n,l,a))):i||(l=Ql(n,s),l!=null&&o.push(nu(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var tb=/\r\n?/g,nb=/\u0000|\uFFFD/g;function Nw(t){return(typeof t=="string"?t:""+t).replace(tb,`
`).replace(nb,"")}function xc(t,e,n){if(e=Nw(e),Nw(t)!==e&&n)throw Error($(425))}function kd(){}var om=null,am=null;function lm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var um=typeof setTimeout=="function"?setTimeout:void 0,rb=typeof clearTimeout=="function"?clearTimeout:void 0,Dw=typeof Promise=="function"?Promise:void 0,ib=typeof queueMicrotask=="function"?queueMicrotask:typeof Dw<"u"?function(t){return Dw.resolve(null).then(t).catch(sb)}:um;function sb(t){setTimeout(function(){throw t})}function sp(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Jl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Jl(e)}function gi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ow(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ea=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Ea,ru="__reactProps$"+Ea,br="__reactContainer$"+Ea,cm="__reactEvents$"+Ea,ob="__reactListeners$"+Ea,ab="__reactHandles$"+Ea;function ds(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[br]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ow(t);t!==null;){if(n=t[Yn])return n;t=Ow(t)}return e}t=n,n=t.parentNode}return null}function Du(t){return t=t[Yn]||t[br],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function So(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function Th(t){return t[ru]||null}var dm=[],Ro=-1;function Mi(t){return{current:t}}function xe(t){0>Ro||(t.current=dm[Ro],dm[Ro]=null,Ro--)}function Re(t,e){Ro++,dm[Ro]=t.current,t.current=e}var Si={},jt=Mi(Si),ln=Mi(!1),Ss=Si;function Ho(t,e){var n=t.type.contextTypes;if(!n)return Si;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function un(t){return t=t.childContextTypes,t!=null}function xd(){xe(ln),xe(jt)}function Vw(t,e,n){if(jt.current!==Si)throw Error($(168));Re(jt,e),Re(ln,n)}function C0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,G1(t)||"Unknown",i));return je({},n,r)}function bd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Si,Ss=jt.current,Re(jt,t),Re(ln,ln.current),!0}function Lw(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=C0(t,e,Ss),r.__reactInternalMemoizedMergedChildContext=t,xe(ln),xe(jt),Re(jt,t)):xe(ln),Re(ln,n)}var yr=null,Sh=!1,op=!1;function k0(t){yr===null?yr=[t]:yr.push(t)}function lb(t){Sh=!0,k0(t)}function Fi(){if(!op&&yr!==null){op=!0;var t=0,e=Ie;try{var n=yr;for(Ie=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}yr=null,Sh=!1}catch(i){throw yr!==null&&(yr=yr.slice(t+1)),e0(Og,Fi),i}finally{Ie=e,op=!1}}return null}var Ao=[],Po=0,Nd=null,Dd=0,Sn=[],Rn=0,Rs=null,vr=1,wr="";function es(t,e){Ao[Po++]=Dd,Ao[Po++]=Nd,Nd=t,Dd=e}function x0(t,e,n){Sn[Rn++]=vr,Sn[Rn++]=wr,Sn[Rn++]=Rs,Rs=t;var r=vr;t=wr;var i=32-$n(r)-1;r&=~(1<<i),n+=1;var s=32-$n(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,vr=1<<32-$n(e)+i|n<<i|r,wr=s+t}else vr=1<<s|n<<i|r,wr=t}function $g(t){t.return!==null&&(es(t,1),x0(t,1,0))}function qg(t){for(;t===Nd;)Nd=Ao[--Po],Ao[Po]=null,Dd=Ao[--Po],Ao[Po]=null;for(;t===Rs;)Rs=Sn[--Rn],Sn[Rn]=null,wr=Sn[--Rn],Sn[Rn]=null,vr=Sn[--Rn],Sn[Rn]=null}var yn=null,gn=null,Ne=!1,Bn=null;function b0(t,e){var n=Pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Mw(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yn=t,gn=gi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yn=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Rs!==null?{id:vr,overflow:wr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yn=t,gn=null,!0):!1;default:return!1}}function hm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fm(t){if(Ne){var e=gn;if(e){var n=e;if(!Mw(t,e)){if(hm(t))throw Error($(418));e=gi(n.nextSibling);var r=yn;e&&Mw(t,e)?b0(r,n):(t.flags=t.flags&-4097|2,Ne=!1,yn=t)}}else{if(hm(t))throw Error($(418));t.flags=t.flags&-4097|2,Ne=!1,yn=t}}}function Fw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yn=t}function bc(t){if(t!==yn)return!1;if(!Ne)return Fw(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lm(t.type,t.memoizedProps)),e&&(e=gn)){if(hm(t))throw N0(),Error($(418));for(;e;)b0(t,e),e=gi(e.nextSibling)}if(Fw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=gi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=yn?gi(t.stateNode.nextSibling):null;return!0}function N0(){for(var t=gn;t;)t=gi(t.nextSibling)}function Ko(){gn=yn=null,Ne=!1}function Gg(t){Bn===null?Bn=[t]:Bn.push(t)}var ub=Ur.ReactCurrentBatchConfig;function sl(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function Nc(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Uw(t){var e=t._init;return e(t._payload)}function D0(t){function e(T,w){if(t){var S=T.deletions;S===null?(T.deletions=[w],T.flags|=16):S.push(w)}}function n(T,w){if(!t)return null;for(;w!==null;)e(T,w),w=w.sibling;return null}function r(T,w){for(T=new Map;w!==null;)w.key!==null?T.set(w.key,w):T.set(w.index,w),w=w.sibling;return T}function i(T,w){return T=wi(T,w),T.index=0,T.sibling=null,T}function s(T,w,S){return T.index=S,t?(S=T.alternate,S!==null?(S=S.index,S<w?(T.flags|=2,w):S):(T.flags|=2,w)):(T.flags|=1048576,w)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,w,S,O){return w===null||w.tag!==6?(w=fp(S,T.mode,O),w.return=T,w):(w=i(w,S),w.return=T,w)}function l(T,w,S,O){var U=S.type;return U===wo?d(T,w,S.props.children,O,S.key):w!==null&&(w.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===ti&&Uw(U)===w.type)?(O=i(w,S.props),O.ref=sl(T,w,S),O.return=T,O):(O=ad(S.type,S.key,S.props,null,T.mode,O),O.ref=sl(T,w,S),O.return=T,O)}function c(T,w,S,O){return w===null||w.tag!==4||w.stateNode.containerInfo!==S.containerInfo||w.stateNode.implementation!==S.implementation?(w=pp(S,T.mode,O),w.return=T,w):(w=i(w,S.children||[]),w.return=T,w)}function d(T,w,S,O,U){return w===null||w.tag!==7?(w=ys(S,T.mode,O,U),w.return=T,w):(w=i(w,S),w.return=T,w)}function f(T,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return w=fp(""+w,T.mode,S),w.return=T,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ec:return S=ad(w.type,w.key,w.props,null,T.mode,S),S.ref=sl(T,null,w),S.return=T,S;case vo:return w=pp(w,T.mode,S),w.return=T,w;case ti:var O=w._init;return f(T,O(w._payload),S)}if(yl(w)||el(w))return w=ys(w,T.mode,S,null),w.return=T,w;Nc(T,w)}return null}function m(T,w,S,O){var U=w!==null?w.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return U!==null?null:a(T,w,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ec:return S.key===U?l(T,w,S,O):null;case vo:return S.key===U?c(T,w,S,O):null;case ti:return U=S._init,m(T,w,U(S._payload),O)}if(yl(S)||el(S))return U!==null?null:d(T,w,S,O,null);Nc(T,S)}return null}function v(T,w,S,O,U){if(typeof O=="string"&&O!==""||typeof O=="number")return T=T.get(S)||null,a(w,T,""+O,U);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Ec:return T=T.get(O.key===null?S:O.key)||null,l(w,T,O,U);case vo:return T=T.get(O.key===null?S:O.key)||null,c(w,T,O,U);case ti:var F=O._init;return v(T,w,S,F(O._payload),U)}if(yl(O)||el(O))return T=T.get(S)||null,d(w,T,O,U,null);Nc(w,O)}return null}function P(T,w,S,O){for(var U=null,F=null,E=w,y=w=0,I=null;E!==null&&y<S.length;y++){E.index>y?(I=E,E=null):I=E.sibling;var R=m(T,E,S[y],O);if(R===null){E===null&&(E=I);break}t&&E&&R.alternate===null&&e(T,E),w=s(R,w,y),F===null?U=R:F.sibling=R,F=R,E=I}if(y===S.length)return n(T,E),Ne&&es(T,y),U;if(E===null){for(;y<S.length;y++)E=f(T,S[y],O),E!==null&&(w=s(E,w,y),F===null?U=E:F.sibling=E,F=E);return Ne&&es(T,y),U}for(E=r(T,E);y<S.length;y++)I=v(E,T,y,S[y],O),I!==null&&(t&&I.alternate!==null&&E.delete(I.key===null?y:I.key),w=s(I,w,y),F===null?U=I:F.sibling=I,F=I);return t&&E.forEach(function(C){return e(T,C)}),Ne&&es(T,y),U}function k(T,w,S,O){var U=el(S);if(typeof U!="function")throw Error($(150));if(S=U.call(S),S==null)throw Error($(151));for(var F=U=null,E=w,y=w=0,I=null,R=S.next();E!==null&&!R.done;y++,R=S.next()){E.index>y?(I=E,E=null):I=E.sibling;var C=m(T,E,R.value,O);if(C===null){E===null&&(E=I);break}t&&E&&C.alternate===null&&e(T,E),w=s(C,w,y),F===null?U=C:F.sibling=C,F=C,E=I}if(R.done)return n(T,E),Ne&&es(T,y),U;if(E===null){for(;!R.done;y++,R=S.next())R=f(T,R.value,O),R!==null&&(w=s(R,w,y),F===null?U=R:F.sibling=R,F=R);return Ne&&es(T,y),U}for(E=r(T,E);!R.done;y++,R=S.next())R=v(E,T,y,R.value,O),R!==null&&(t&&R.alternate!==null&&E.delete(R.key===null?y:R.key),w=s(R,w,y),F===null?U=R:F.sibling=R,F=R);return t&&E.forEach(function(b){return e(T,b)}),Ne&&es(T,y),U}function D(T,w,S,O){if(typeof S=="object"&&S!==null&&S.type===wo&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ec:e:{for(var U=S.key,F=w;F!==null;){if(F.key===U){if(U=S.type,U===wo){if(F.tag===7){n(T,F.sibling),w=i(F,S.props.children),w.return=T,T=w;break e}}else if(F.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===ti&&Uw(U)===F.type){n(T,F.sibling),w=i(F,S.props),w.ref=sl(T,F,S),w.return=T,T=w;break e}n(T,F);break}else e(T,F);F=F.sibling}S.type===wo?(w=ys(S.props.children,T.mode,O,S.key),w.return=T,T=w):(O=ad(S.type,S.key,S.props,null,T.mode,O),O.ref=sl(T,w,S),O.return=T,T=O)}return o(T);case vo:e:{for(F=S.key;w!==null;){if(w.key===F)if(w.tag===4&&w.stateNode.containerInfo===S.containerInfo&&w.stateNode.implementation===S.implementation){n(T,w.sibling),w=i(w,S.children||[]),w.return=T,T=w;break e}else{n(T,w);break}else e(T,w);w=w.sibling}w=pp(S,T.mode,O),w.return=T,T=w}return o(T);case ti:return F=S._init,D(T,w,F(S._payload),O)}if(yl(S))return P(T,w,S,O);if(el(S))return k(T,w,S,O);Nc(T,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,w!==null&&w.tag===6?(n(T,w.sibling),w=i(w,S),w.return=T,T=w):(n(T,w),w=fp(S,T.mode,O),w.return=T,T=w),o(T)):n(T,w)}return D}var Qo=D0(!0),O0=D0(!1),Od=Mi(null),Vd=null,Co=null,Wg=null;function Hg(){Wg=Co=Vd=null}function Kg(t){var e=Od.current;xe(Od),t._currentValue=e}function pm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Mo(t,e){Vd=t,Wg=Co=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function Nn(t){var e=t._currentValue;if(Wg!==t)if(t={context:t,memoizedValue:e,next:null},Co===null){if(Vd===null)throw Error($(308));Co=t,Vd.dependencies={lanes:0,firstContext:t}}else Co=Co.next=t;return e}var hs=null;function Qg(t){hs===null?hs=[t]:hs.push(t)}function V0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Qg(e)):(n.next=i.next,i.next=n),e.interleaved=n,Nr(t,r)}function Nr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ni=!1;function Yg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function L0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ar(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _i(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Nr(t,n)}return i=r.interleaved,i===null?(e.next=e,Qg(r)):(e.next=i.next,i.next=e),r.interleaved=e,Nr(t,n)}function td(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vg(t,n)}}function jw(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ld(t,e,n,r){var i=t.updateQueue;ni=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,d=c=l=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var P=t,k=a;switch(m=e,v=n,k.tag){case 1:if(P=k.payload,typeof P=="function"){f=P.call(v,f,m);break e}f=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=k.payload,m=typeof P=="function"?P.call(v,f,m):P,m==null)break e;f=je({},f,m);break e;case 2:ni=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=v,l=f):d=d.next=v,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ps|=o,t.lanes=o,t.memoizedState=f}}function Bw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var Ou={},or=Mi(Ou),iu=Mi(Ou),su=Mi(Ou);function fs(t){if(t===Ou)throw Error($(174));return t}function Xg(t,e){switch(Re(su,e),Re(iu,t),Re(or,Ou),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Kp(e,t)}xe(or),Re(or,e)}function Yo(){xe(or),xe(iu),xe(su)}function M0(t){fs(su.current);var e=fs(or.current),n=Kp(e,t.type);e!==n&&(Re(iu,t),Re(or,n))}function Jg(t){iu.current===t&&(xe(or),xe(iu))}var Me=Mi(0);function Md(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ap=[];function Zg(){for(var t=0;t<ap.length;t++)ap[t]._workInProgressVersionPrimary=null;ap.length=0}var nd=Ur.ReactCurrentDispatcher,lp=Ur.ReactCurrentBatchConfig,As=0,Fe=null,ct=null,gt=null,Fd=!1,Dl=!1,ou=0,cb=0;function Ot(){throw Error($(321))}function e_(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gn(t[n],e[n]))return!1;return!0}function t_(t,e,n,r,i,s){if(As=s,Fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nd.current=t===null||t.memoizedState===null?pb:mb,t=n(r,i),Dl){s=0;do{if(Dl=!1,ou=0,25<=s)throw Error($(301));s+=1,gt=ct=null,e.updateQueue=null,nd.current=gb,t=n(r,i)}while(Dl)}if(nd.current=Ud,e=ct!==null&&ct.next!==null,As=0,gt=ct=Fe=null,Fd=!1,e)throw Error($(300));return t}function n_(){var t=ou!==0;return ou=0,t}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Fe.memoizedState=gt=t:gt=gt.next=t,gt}function Dn(){if(ct===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=ct.next;var e=gt===null?Fe.memoizedState:gt.next;if(e!==null)gt=e,ct=t;else{if(t===null)throw Error($(310));ct=t,t={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},gt===null?Fe.memoizedState=gt=t:gt=gt.next=t}return gt}function au(t,e){return typeof e=="function"?e(t):e}function up(t){var e=Dn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=ct,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((As&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Fe.lanes|=d,Ps|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Gn(r,e.memoizedState)||(rn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Fe.lanes|=s,Ps|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function cp(t){var e=Dn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Gn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function F0(){}function U0(t,e){var n=Fe,r=Dn(),i=e(),s=!Gn(r.memoizedState,i);if(s&&(r.memoizedState=i,rn=!0),r=r.queue,r_(z0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||gt!==null&&gt.memoizedState.tag&1){if(n.flags|=2048,lu(9,B0.bind(null,n,r,i,e),void 0,null),yt===null)throw Error($(349));As&30||j0(n,e,i)}return i}function j0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function B0(t,e,n,r){e.value=n,e.getSnapshot=r,$0(e)&&q0(t)}function z0(t,e,n){return n(function(){$0(e)&&q0(t)})}function $0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gn(t,n)}catch{return!0}}function q0(t){var e=Nr(t,1);e!==null&&qn(e,t,1,-1)}function zw(t){var e=Qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:au,lastRenderedState:t},e.queue=t,t=t.dispatch=fb.bind(null,Fe,t),[e.memoizedState,t]}function lu(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function G0(){return Dn().memoizedState}function rd(t,e,n,r){var i=Qn();Fe.flags|=t,i.memoizedState=lu(1|e,n,void 0,r===void 0?null:r)}function Rh(t,e,n,r){var i=Dn();r=r===void 0?null:r;var s=void 0;if(ct!==null){var o=ct.memoizedState;if(s=o.destroy,r!==null&&e_(r,o.deps)){i.memoizedState=lu(e,n,s,r);return}}Fe.flags|=t,i.memoizedState=lu(1|e,n,s,r)}function $w(t,e){return rd(8390656,8,t,e)}function r_(t,e){return Rh(2048,8,t,e)}function W0(t,e){return Rh(4,2,t,e)}function H0(t,e){return Rh(4,4,t,e)}function K0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Q0(t,e,n){return n=n!=null?n.concat([t]):null,Rh(4,4,K0.bind(null,e,t),n)}function i_(){}function Y0(t,e){var n=Dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&e_(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function X0(t,e){var n=Dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&e_(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function J0(t,e,n){return As&21?(Gn(n,e)||(n=r0(),Fe.lanes|=n,Ps|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function db(t,e){var n=Ie;Ie=n!==0&&4>n?n:4,t(!0);var r=lp.transition;lp.transition={};try{t(!1),e()}finally{Ie=n,lp.transition=r}}function Z0(){return Dn().memoizedState}function hb(t,e,n){var r=vi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},eS(t))tS(e,n);else if(n=V0(t,e,n,r),n!==null){var i=Kt();qn(n,t,r,i),nS(n,e,r)}}function fb(t,e,n){var r=vi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(eS(t))tS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Gn(a,o)){var l=e.interleaved;l===null?(i.next=i,Qg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=V0(t,e,i,r),n!==null&&(i=Kt(),qn(n,t,r,i),nS(n,e,r))}}function eS(t){var e=t.alternate;return t===Fe||e!==null&&e===Fe}function tS(t,e){Dl=Fd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function nS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vg(t,n)}}var Ud={readContext:Nn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},pb={readContext:Nn,useCallback:function(t,e){return Qn().memoizedState=[t,e===void 0?null:e],t},useContext:Nn,useEffect:$w,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,rd(4194308,4,K0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return rd(4194308,4,t,e)},useInsertionEffect:function(t,e){return rd(4,2,t,e)},useMemo:function(t,e){var n=Qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=hb.bind(null,Fe,t),[r.memoizedState,t]},useRef:function(t){var e=Qn();return t={current:t},e.memoizedState=t},useState:zw,useDebugValue:i_,useDeferredValue:function(t){return Qn().memoizedState=t},useTransition:function(){var t=zw(!1),e=t[0];return t=db.bind(null,t[1]),Qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Fe,i=Qn();if(Ne){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),yt===null)throw Error($(349));As&30||j0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,$w(z0.bind(null,r,s,t),[t]),r.flags|=2048,lu(9,B0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Qn(),e=yt.identifierPrefix;if(Ne){var n=wr,r=vr;n=(r&~(1<<32-$n(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ou++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=cb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},mb={readContext:Nn,useCallback:Y0,useContext:Nn,useEffect:r_,useImperativeHandle:Q0,useInsertionEffect:W0,useLayoutEffect:H0,useMemo:X0,useReducer:up,useRef:G0,useState:function(){return up(au)},useDebugValue:i_,useDeferredValue:function(t){var e=Dn();return J0(e,ct.memoizedState,t)},useTransition:function(){var t=up(au)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:F0,useSyncExternalStore:U0,useId:Z0,unstable_isNewReconciler:!1},gb={readContext:Nn,useCallback:Y0,useContext:Nn,useEffect:r_,useImperativeHandle:Q0,useInsertionEffect:W0,useLayoutEffect:H0,useMemo:X0,useReducer:cp,useRef:G0,useState:function(){return cp(au)},useDebugValue:i_,useDeferredValue:function(t){var e=Dn();return ct===null?e.memoizedState=t:J0(e,ct.memoizedState,t)},useTransition:function(){var t=cp(au)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:F0,useSyncExternalStore:U0,useId:Z0,unstable_isNewReconciler:!1};function Un(t,e){if(t&&t.defaultProps){e=je({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function mm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:je({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ah={isMounted:function(t){return(t=t._reactInternals)?$s(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Kt(),i=vi(t),s=Ar(r,i);s.payload=e,n!=null&&(s.callback=n),e=_i(t,s,i),e!==null&&(qn(e,t,i,r),td(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Kt(),i=vi(t),s=Ar(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_i(t,s,i),e!==null&&(qn(e,t,i,r),td(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),r=vi(t),i=Ar(n,r);i.tag=2,e!=null&&(i.callback=e),e=_i(t,i,r),e!==null&&(qn(e,t,r,n),td(e,t,r))}};function qw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!eu(n,r)||!eu(i,s):!0}function rS(t,e,n){var r=!1,i=Si,s=e.contextType;return typeof s=="object"&&s!==null?s=Nn(s):(i=un(e)?Ss:jt.current,r=e.contextTypes,s=(r=r!=null)?Ho(t,i):Si),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ah,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Gw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ah.enqueueReplaceState(e,e.state,null)}function gm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Yg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Nn(s):(s=un(e)?Ss:jt.current,i.context=Ho(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(mm(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ah.enqueueReplaceState(i,i.state,null),Ld(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Xo(t,e){try{var n="",r=e;do n+=q1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function dp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _m(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _b=typeof WeakMap=="function"?WeakMap:Map;function iS(t,e,n){n=Ar(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Bd||(Bd=!0,Pm=r),_m(t,e)},n}function sS(t,e,n){n=Ar(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){_m(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_m(t,e),typeof r!="function"&&(yi===null?yi=new Set([this]):yi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ww(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new _b;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=bb.bind(null,t,e,n),e.then(t,t))}function Hw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kw(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ar(-1,1),e.tag=2,_i(n,e,1))),n.lanes|=1),t)}var yb=Ur.ReactCurrentOwner,rn=!1;function qt(t,e,n,r){e.child=t===null?O0(e,null,n,r):Qo(e,t.child,n,r)}function Qw(t,e,n,r,i){n=n.render;var s=e.ref;return Mo(e,i),r=t_(t,e,n,r,s,i),n=n_(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dr(t,e,i)):(Ne&&n&&$g(e),e.flags|=1,qt(t,e,r,i),e.child)}function Yw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!h_(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,oS(t,e,s,r,i)):(t=ad(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:eu,n(o,r)&&t.ref===e.ref)return Dr(t,e,i)}return e.flags|=1,t=wi(s,r),t.ref=e.ref,t.return=e,e.child=t}function oS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(eu(s,r)&&t.ref===e.ref)if(rn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,Dr(t,e,i)}return ym(t,e,n,r,i)}function aS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(xo,fn),fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Re(xo,fn),fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Re(xo,fn),fn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Re(xo,fn),fn|=r;return qt(t,e,i,n),e.child}function lS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ym(t,e,n,r,i){var s=un(n)?Ss:jt.current;return s=Ho(e,s),Mo(e,i),n=t_(t,e,n,r,s,i),r=n_(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dr(t,e,i)):(Ne&&r&&$g(e),e.flags|=1,qt(t,e,n,i),e.child)}function Xw(t,e,n,r,i){if(un(n)){var s=!0;bd(e)}else s=!1;if(Mo(e,i),e.stateNode===null)id(t,e),rS(e,n,r),gm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Nn(c):(c=un(n)?Ss:jt.current,c=Ho(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Gw(e,o,r,c),ni=!1;var m=e.memoizedState;o.state=m,Ld(e,r,o,i),l=e.memoizedState,a!==r||m!==l||ln.current||ni?(typeof d=="function"&&(mm(e,n,d,r),l=e.memoizedState),(a=ni||qw(e,n,a,r,m,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,L0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Un(e.type,a),o.props=c,f=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Nn(l):(l=un(n)?Ss:jt.current,l=Ho(e,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&Gw(e,o,r,l),ni=!1,m=e.memoizedState,o.state=m,Ld(e,r,o,i);var P=e.memoizedState;a!==f||m!==P||ln.current||ni?(typeof v=="function"&&(mm(e,n,v,r),P=e.memoizedState),(c=ni||qw(e,n,c,r,m,P,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return vm(t,e,n,r,s,i)}function vm(t,e,n,r,i,s){lS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Lw(e,n,!1),Dr(t,e,s);r=e.stateNode,yb.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Qo(e,t.child,null,s),e.child=Qo(e,null,a,s)):qt(t,e,a,s),e.memoizedState=r.state,i&&Lw(e,n,!0),e.child}function uS(t){var e=t.stateNode;e.pendingContext?Vw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vw(t,e.context,!1),Xg(t,e.containerInfo)}function Jw(t,e,n,r,i){return Ko(),Gg(i),e.flags|=256,qt(t,e,n,r),e.child}var wm={dehydrated:null,treeContext:null,retryLane:0};function Em(t){return{baseLanes:t,cachePool:null,transitions:null}}function cS(t,e,n){var r=e.pendingProps,i=Me.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Re(Me,i&1),t===null)return fm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=kh(o,r,0,null),t=ys(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Em(n),e.memoizedState=wm,t):s_(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return vb(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=wi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=wi(a,s):(s=ys(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Em(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=wm,r}return s=t.child,t=s.sibling,r=wi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function s_(t,e){return e=kh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Dc(t,e,n,r){return r!==null&&Gg(r),Qo(e,t.child,null,n),t=s_(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function vb(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=dp(Error($(422))),Dc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=kh({mode:"visible",children:r.children},i,0,null),s=ys(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Qo(e,t.child,null,o),e.child.memoizedState=Em(o),e.memoizedState=wm,s);if(!(e.mode&1))return Dc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error($(419)),r=dp(s,r,void 0),Dc(t,e,o,r)}if(a=(o&t.childLanes)!==0,rn||a){if(r=yt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Nr(t,i),qn(r,t,i,-1))}return d_(),r=dp(Error($(421))),Dc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Nb.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,gn=gi(i.nextSibling),yn=e,Ne=!0,Bn=null,t!==null&&(Sn[Rn++]=vr,Sn[Rn++]=wr,Sn[Rn++]=Rs,vr=t.id,wr=t.overflow,Rs=e),e=s_(e,r.children),e.flags|=4096,e)}function Zw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),pm(t.return,e,n)}function hp(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function dS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(qt(t,e,r.children,n),r=Me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zw(t,n,e);else if(t.tag===19)Zw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Re(Me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Md(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),hp(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Md(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}hp(e,!0,n,null,s);break;case"together":hp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function id(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ps|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=wi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function wb(t,e,n){switch(e.tag){case 3:uS(e),Ko();break;case 5:M0(e);break;case 1:un(e.type)&&bd(e);break;case 4:Xg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Re(Od,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Re(Me,Me.current&1),e.flags|=128,null):n&e.child.childLanes?cS(t,e,n):(Re(Me,Me.current&1),t=Dr(t,e,n),t!==null?t.sibling:null);Re(Me,Me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return dS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Re(Me,Me.current),r)break;return null;case 22:case 23:return e.lanes=0,aS(t,e,n)}return Dr(t,e,n)}var hS,Im,fS,pS;hS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Im=function(){};fS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,fs(or.current);var s=null;switch(n){case"input":i=qp(t,i),r=qp(t,r),s=[];break;case"select":i=je({},i,{value:void 0}),r=je({},r,{value:void 0}),s=[];break;case"textarea":i=Hp(t,i),r=Hp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=kd)}Qp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Hl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Hl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ce("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};pS=function(t,e,n,r){n!==r&&(e.flags|=4)};function ol(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Eb(t,e,n){var r=e.pendingProps;switch(qg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return un(e.type)&&xd(),Vt(e),null;case 3:return r=e.stateNode,Yo(),xe(ln),xe(jt),Zg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(bc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bn!==null&&(xm(Bn),Bn=null))),Im(t,e),Vt(e),null;case 5:Jg(e);var i=fs(su.current);if(n=e.type,t!==null&&e.stateNode!=null)fS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return Vt(e),null}if(t=fs(or.current),bc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Yn]=e,r[ru]=s,t=(e.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(i=0;i<wl.length;i++)Ce(wl[i],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":lw(r,s),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ce("invalid",r);break;case"textarea":cw(r,s),Ce("invalid",r)}Qp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&xc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&xc(r.textContent,a,t),i=["children",""+a]):Hl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ce("scroll",r)}switch(n){case"input":Ic(r),uw(r,s,!0);break;case"textarea":Ic(r),dw(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=kd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Yn]=e,t[ru]=r,hS(t,e,!1,!1),e.stateNode=t;e:{switch(o=Yp(n,r),n){case"dialog":Ce("cancel",t),Ce("close",t),i=r;break;case"iframe":case"object":case"embed":Ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<wl.length;i++)Ce(wl[i],t);i=r;break;case"source":Ce("error",t),i=r;break;case"img":case"image":case"link":Ce("error",t),Ce("load",t),i=r;break;case"details":Ce("toggle",t),i=r;break;case"input":lw(t,r),i=qp(t,r),Ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=je({},r,{value:void 0}),Ce("invalid",t);break;case"textarea":cw(t,r),i=Hp(t,r),Ce("invalid",t);break;default:i=r}Qp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?GT(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$T(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Kl(t,l):typeof l=="number"&&Kl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Hl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ce("scroll",t):l!=null&&kg(t,s,l,o))}switch(n){case"input":Ic(t),uw(t,r,!1);break;case"textarea":Ic(t),dw(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ti(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Do(t,!!r.multiple,s,!1):r.defaultValue!=null&&Do(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=kd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)pS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=fs(su.current),fs(or.current),bc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Yn]=e,(s=r.nodeValue!==n)&&(t=yn,t!==null))switch(t.tag){case 3:xc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yn]=e,e.stateNode=r}return Vt(e),null;case 13:if(xe(Me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&gn!==null&&e.mode&1&&!(e.flags&128))N0(),Ko(),e.flags|=98560,s=!1;else if(s=bc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[Yn]=e}else Ko(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else Bn!==null&&(xm(Bn),Bn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Me.current&1?dt===0&&(dt=3):d_())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return Yo(),Im(t,e),t===null&&tu(e.stateNode.containerInfo),Vt(e),null;case 10:return Kg(e.type._context),Vt(e),null;case 17:return un(e.type)&&xd(),Vt(e),null;case 19:if(xe(Me),s=e.memoizedState,s===null)return Vt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ol(s,!1);else{if(dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Md(t),o!==null){for(e.flags|=128,ol(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Re(Me,Me.current&1|2),e.child}t=t.sibling}s.tail!==null&&et()>Jo&&(e.flags|=128,r=!0,ol(s,!1),e.lanes=4194304)}else{if(!r)if(t=Md(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ol(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ne)return Vt(e),null}else 2*et()-s.renderingStartTime>Jo&&n!==1073741824&&(e.flags|=128,r=!0,ol(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=et(),e.sibling=null,n=Me.current,Re(Me,r?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return c_(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?fn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function Ib(t,e){switch(qg(e),e.tag){case 1:return un(e.type)&&xd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Yo(),xe(ln),xe(jt),Zg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jg(e),null;case 13:if(xe(Me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));Ko()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xe(Me),null;case 4:return Yo(),null;case 10:return Kg(e.type._context),null;case 22:case 23:return c_(),null;case 24:return null;default:return null}}var Oc=!1,Mt=!1,Tb=typeof WeakSet=="function"?WeakSet:Set,Y=null;function ko(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){He(t,e,r)}else n.current=null}function Tm(t,e,n){try{n()}catch(r){He(t,e,r)}}var eE=!1;function Sb(t,e){if(om=Ad,t=v0(),zg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(l=o),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(am={focusedElem:t,selectionRange:n},Ad=!1,Y=e;Y!==null;)if(e=Y,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Y=t;else for(;Y!==null;){e=Y;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var k=P.memoizedProps,D=P.memoizedState,T=e.stateNode,w=T.getSnapshotBeforeUpdate(e.elementType===e.type?k:Un(e.type,k),D);T.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(O){He(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,Y=t;break}Y=e.return}return P=eE,eE=!1,P}function Ol(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Tm(e,n,s)}i=i.next}while(i!==r)}}function Ph(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Sm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function mS(t){var e=t.alternate;e!==null&&(t.alternate=null,mS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[ru],delete e[cm],delete e[ob],delete e[ab])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gS(t){return t.tag===5||t.tag===3||t.tag===4}function tE(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kd));else if(r!==4&&(t=t.child,t!==null))for(Rm(t,e,n),t=t.sibling;t!==null;)Rm(t,e,n),t=t.sibling}function Am(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Am(t,e,n),t=t.sibling;t!==null;)Am(t,e,n),t=t.sibling}var Rt=null,jn=!1;function Xr(t,e,n){for(n=n.child;n!==null;)_S(t,e,n),n=n.sibling}function _S(t,e,n){if(sr&&typeof sr.onCommitFiberUnmount=="function")try{sr.onCommitFiberUnmount(vh,n)}catch{}switch(n.tag){case 5:Mt||ko(n,e);case 6:var r=Rt,i=jn;Rt=null,Xr(t,e,n),Rt=r,jn=i,Rt!==null&&(jn?(t=Rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Rt.removeChild(n.stateNode));break;case 18:Rt!==null&&(jn?(t=Rt,n=n.stateNode,t.nodeType===8?sp(t.parentNode,n):t.nodeType===1&&sp(t,n),Jl(t)):sp(Rt,n.stateNode));break;case 4:r=Rt,i=jn,Rt=n.stateNode.containerInfo,jn=!0,Xr(t,e,n),Rt=r,jn=i;break;case 0:case 11:case 14:case 15:if(!Mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Tm(n,e,o),i=i.next}while(i!==r)}Xr(t,e,n);break;case 1:if(!Mt&&(ko(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){He(n,e,a)}Xr(t,e,n);break;case 21:Xr(t,e,n);break;case 22:n.mode&1?(Mt=(r=Mt)||n.memoizedState!==null,Xr(t,e,n),Mt=r):Xr(t,e,n);break;default:Xr(t,e,n)}}function nE(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Tb),e.forEach(function(r){var i=Db.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Rt=a.stateNode,jn=!1;break e;case 3:Rt=a.stateNode.containerInfo,jn=!0;break e;case 4:Rt=a.stateNode.containerInfo,jn=!0;break e}a=a.return}if(Rt===null)throw Error($(160));_S(s,o,i),Rt=null,jn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){He(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yS(e,t),e=e.sibling}function yS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),Kn(t),r&4){try{Ol(3,t,t.return),Ph(3,t)}catch(k){He(t,t.return,k)}try{Ol(5,t,t.return)}catch(k){He(t,t.return,k)}}break;case 1:Fn(e,t),Kn(t),r&512&&n!==null&&ko(n,n.return);break;case 5:if(Fn(e,t),Kn(t),r&512&&n!==null&&ko(n,n.return),t.flags&32){var i=t.stateNode;try{Kl(i,"")}catch(k){He(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&jT(i,s),Yp(a,o);var c=Yp(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?GT(i,f):d==="dangerouslySetInnerHTML"?$T(i,f):d==="children"?Kl(i,f):kg(i,d,f,c)}switch(a){case"input":Gp(i,s);break;case"textarea":BT(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Do(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?Do(i,!!s.multiple,s.defaultValue,!0):Do(i,!!s.multiple,s.multiple?[]:"",!1))}i[ru]=s}catch(k){He(t,t.return,k)}}break;case 6:if(Fn(e,t),Kn(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){He(t,t.return,k)}}break;case 3:if(Fn(e,t),Kn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jl(e.containerInfo)}catch(k){He(t,t.return,k)}break;case 4:Fn(e,t),Kn(t);break;case 13:Fn(e,t),Kn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(l_=et())),r&4&&nE(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Mt=(c=Mt)||d,Fn(e,t),Mt=c):Fn(e,t),Kn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Y=t,d=t.child;d!==null;){for(f=Y=d;Y!==null;){switch(m=Y,v=m.child,m.tag){case 0:case 11:case 14:case 15:Ol(4,m,m.return);break;case 1:ko(m,m.return);var P=m.stateNode;if(typeof P.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(k){He(r,n,k)}}break;case 5:ko(m,m.return);break;case 22:if(m.memoizedState!==null){iE(f);continue}}v!==null?(v.return=m,Y=v):iE(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=qT("display",o))}catch(k){He(t,t.return,k)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(k){He(t,t.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fn(e,t),Kn(t),r&4&&nE(t);break;case 21:break;default:Fn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gS(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Kl(i,""),r.flags&=-33);var s=tE(t);Am(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=tE(t);Rm(t,a,o);break;default:throw Error($(161))}}catch(l){He(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Rb(t,e,n){Y=t,vS(t)}function vS(t,e,n){for(var r=(t.mode&1)!==0;Y!==null;){var i=Y,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Oc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Mt;a=Oc;var c=Mt;if(Oc=o,(Mt=l)&&!c)for(Y=i;Y!==null;)o=Y,l=o.child,o.tag===22&&o.memoizedState!==null?sE(i):l!==null?(l.return=o,Y=l):sE(i);for(;s!==null;)Y=s,vS(s),s=s.sibling;Y=i,Oc=a,Mt=c}rE(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Y=s):rE(t)}}function rE(t){for(;Y!==null;){var e=Y;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Mt||Ph(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Mt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Un(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Bw(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bw(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Jl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}Mt||e.flags&512&&Sm(e)}catch(m){He(e,e.return,m)}}if(e===t){Y=null;break}if(n=e.sibling,n!==null){n.return=e.return,Y=n;break}Y=e.return}}function iE(t){for(;Y!==null;){var e=Y;if(e===t){Y=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Y=n;break}Y=e.return}}function sE(t){for(;Y!==null;){var e=Y;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ph(4,e)}catch(l){He(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){He(e,i,l)}}var s=e.return;try{Sm(e)}catch(l){He(e,s,l)}break;case 5:var o=e.return;try{Sm(e)}catch(l){He(e,o,l)}}}catch(l){He(e,e.return,l)}if(e===t){Y=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Y=a;break}Y=e.return}}var Ab=Math.ceil,jd=Ur.ReactCurrentDispatcher,o_=Ur.ReactCurrentOwner,xn=Ur.ReactCurrentBatchConfig,me=0,yt=null,ot=null,Ct=0,fn=0,xo=Mi(0),dt=0,uu=null,Ps=0,Ch=0,a_=0,Vl=null,nn=null,l_=0,Jo=1/0,_r=null,Bd=!1,Pm=null,yi=null,Vc=!1,ci=null,zd=0,Ll=0,Cm=null,sd=-1,od=0;function Kt(){return me&6?et():sd!==-1?sd:sd=et()}function vi(t){return t.mode&1?me&2&&Ct!==0?Ct&-Ct:ub.transition!==null?(od===0&&(od=r0()),od):(t=Ie,t!==0||(t=window.event,t=t===void 0?16:c0(t.type)),t):1}function qn(t,e,n,r){if(50<Ll)throw Ll=0,Cm=null,Error($(185));bu(t,n,r),(!(me&2)||t!==yt)&&(t===yt&&(!(me&2)&&(Ch|=n),dt===4&&si(t,Ct)),cn(t,r),n===1&&me===0&&!(e.mode&1)&&(Jo=et()+500,Sh&&Fi()))}function cn(t,e){var n=t.callbackNode;ux(t,e);var r=Rd(t,t===yt?Ct:0);if(r===0)n!==null&&pw(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&pw(n),e===1)t.tag===0?lb(oE.bind(null,t)):k0(oE.bind(null,t)),ib(function(){!(me&6)&&Fi()}),n=null;else{switch(i0(r)){case 1:n=Og;break;case 4:n=t0;break;case 16:n=Sd;break;case 536870912:n=n0;break;default:n=Sd}n=PS(n,wS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function wS(t,e){if(sd=-1,od=0,me&6)throw Error($(327));var n=t.callbackNode;if(Fo()&&t.callbackNode!==n)return null;var r=Rd(t,t===yt?Ct:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=$d(t,r);else{e=r;var i=me;me|=2;var s=IS();(yt!==t||Ct!==e)&&(_r=null,Jo=et()+500,_s(t,e));do try{kb();break}catch(a){ES(t,a)}while(!0);Hg(),jd.current=s,me=i,ot!==null?e=0:(yt=null,Ct=0,e=dt)}if(e!==0){if(e===2&&(i=tm(t),i!==0&&(r=i,e=km(t,i))),e===1)throw n=uu,_s(t,0),si(t,r),cn(t,et()),n;if(e===6)si(t,r);else{if(i=t.current.alternate,!(r&30)&&!Pb(i)&&(e=$d(t,r),e===2&&(s=tm(t),s!==0&&(r=s,e=km(t,s))),e===1))throw n=uu,_s(t,0),si(t,r),cn(t,et()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:ts(t,nn,_r);break;case 3:if(si(t,r),(r&130023424)===r&&(e=l_+500-et(),10<e)){if(Rd(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Kt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=um(ts.bind(null,t,nn,_r),e);break}ts(t,nn,_r);break;case 4:if(si(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-$n(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=et()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ab(r/1960))-r,10<r){t.timeoutHandle=um(ts.bind(null,t,nn,_r),r);break}ts(t,nn,_r);break;case 5:ts(t,nn,_r);break;default:throw Error($(329))}}}return cn(t,et()),t.callbackNode===n?wS.bind(null,t):null}function km(t,e){var n=Vl;return t.current.memoizedState.isDehydrated&&(_s(t,e).flags|=256),t=$d(t,e),t!==2&&(e=nn,nn=n,e!==null&&xm(e)),t}function xm(t){nn===null?nn=t:nn.push.apply(nn,t)}function Pb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Gn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function si(t,e){for(e&=~a_,e&=~Ch,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),r=1<<n;t[n]=-1,e&=~r}}function oE(t){if(me&6)throw Error($(327));Fo();var e=Rd(t,0);if(!(e&1))return cn(t,et()),null;var n=$d(t,e);if(t.tag!==0&&n===2){var r=tm(t);r!==0&&(e=r,n=km(t,r))}if(n===1)throw n=uu,_s(t,0),si(t,e),cn(t,et()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ts(t,nn,_r),cn(t,et()),null}function u_(t,e){var n=me;me|=1;try{return t(e)}finally{me=n,me===0&&(Jo=et()+500,Sh&&Fi())}}function Cs(t){ci!==null&&ci.tag===0&&!(me&6)&&Fo();var e=me;me|=1;var n=xn.transition,r=Ie;try{if(xn.transition=null,Ie=1,t)return t()}finally{Ie=r,xn.transition=n,me=e,!(me&6)&&Fi()}}function c_(){fn=xo.current,xe(xo)}function _s(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,rb(n)),ot!==null)for(n=ot.return;n!==null;){var r=n;switch(qg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xd();break;case 3:Yo(),xe(ln),xe(jt),Zg();break;case 5:Jg(r);break;case 4:Yo();break;case 13:xe(Me);break;case 19:xe(Me);break;case 10:Kg(r.type._context);break;case 22:case 23:c_()}n=n.return}if(yt=t,ot=t=wi(t.current,null),Ct=fn=e,dt=0,uu=null,a_=Ch=Ps=0,nn=Vl=null,hs!==null){for(e=0;e<hs.length;e++)if(n=hs[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}hs=null}return t}function ES(t,e){do{var n=ot;try{if(Hg(),nd.current=Ud,Fd){for(var r=Fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fd=!1}if(As=0,gt=ct=Fe=null,Dl=!1,ou=0,o_.current=null,n===null||n.return===null){dt=1,uu=e,ot=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ct,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Hw(o);if(v!==null){v.flags&=-257,Kw(v,o,a,s,e),v.mode&1&&Ww(s,c,e),e=v,l=c;var P=e.updateQueue;if(P===null){var k=new Set;k.add(l),e.updateQueue=k}else P.add(l);break e}else{if(!(e&1)){Ww(s,c,e),d_();break e}l=Error($(426))}}else if(Ne&&a.mode&1){var D=Hw(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Kw(D,o,a,s,e),Gg(Xo(l,a));break e}}s=l=Xo(l,a),dt!==4&&(dt=2),Vl===null?Vl=[s]:Vl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=iS(s,l,e);jw(s,T);break e;case 1:a=l;var w=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(yi===null||!yi.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=sS(s,a,e);jw(s,O);break e}}s=s.return}while(s!==null)}SS(n)}catch(U){e=U,ot===n&&n!==null&&(ot=n=n.return);continue}break}while(!0)}function IS(){var t=jd.current;return jd.current=Ud,t===null?Ud:t}function d_(){(dt===0||dt===3||dt===2)&&(dt=4),yt===null||!(Ps&268435455)&&!(Ch&268435455)||si(yt,Ct)}function $d(t,e){var n=me;me|=2;var r=IS();(yt!==t||Ct!==e)&&(_r=null,_s(t,e));do try{Cb();break}catch(i){ES(t,i)}while(!0);if(Hg(),me=n,jd.current=r,ot!==null)throw Error($(261));return yt=null,Ct=0,dt}function Cb(){for(;ot!==null;)TS(ot)}function kb(){for(;ot!==null&&!ex();)TS(ot)}function TS(t){var e=AS(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?SS(t):ot=e,o_.current=null}function SS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ib(n,e),n!==null){n.flags&=32767,ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{dt=6,ot=null;return}}else if(n=Eb(n,e,fn),n!==null){ot=n;return}if(e=e.sibling,e!==null){ot=e;return}ot=e=t}while(e!==null);dt===0&&(dt=5)}function ts(t,e,n){var r=Ie,i=xn.transition;try{xn.transition=null,Ie=1,xb(t,e,n,r)}finally{xn.transition=i,Ie=r}return null}function xb(t,e,n,r){do Fo();while(ci!==null);if(me&6)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(cx(t,s),t===yt&&(ot=yt=null,Ct=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vc||(Vc=!0,PS(Sd,function(){return Fo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=xn.transition,xn.transition=null;var o=Ie;Ie=1;var a=me;me|=4,o_.current=null,Sb(t,n),yS(n,t),Yx(am),Ad=!!om,am=om=null,t.current=n,Rb(n),tx(),me=a,Ie=o,xn.transition=s}else t.current=n;if(Vc&&(Vc=!1,ci=t,zd=i),s=t.pendingLanes,s===0&&(yi=null),ix(n.stateNode),cn(t,et()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Bd)throw Bd=!1,t=Pm,Pm=null,t;return zd&1&&t.tag!==0&&Fo(),s=t.pendingLanes,s&1?t===Cm?Ll++:(Ll=0,Cm=t):Ll=0,Fi(),null}function Fo(){if(ci!==null){var t=i0(zd),e=xn.transition,n=Ie;try{if(xn.transition=null,Ie=16>t?16:t,ci===null)var r=!1;else{if(t=ci,ci=null,zd=0,me&6)throw Error($(331));var i=me;for(me|=4,Y=t.current;Y!==null;){var s=Y,o=s.child;if(Y.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Y=c;Y!==null;){var d=Y;switch(d.tag){case 0:case 11:case 15:Ol(8,d,s)}var f=d.child;if(f!==null)f.return=d,Y=f;else for(;Y!==null;){d=Y;var m=d.sibling,v=d.return;if(mS(d),d===c){Y=null;break}if(m!==null){m.return=v,Y=m;break}Y=v}}}var P=s.alternate;if(P!==null){var k=P.child;if(k!==null){P.child=null;do{var D=k.sibling;k.sibling=null,k=D}while(k!==null)}}Y=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Y=o;else e:for(;Y!==null;){if(s=Y,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ol(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,Y=T;break e}Y=s.return}}var w=t.current;for(Y=w;Y!==null;){o=Y;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,Y=S;else e:for(o=w;Y!==null;){if(a=Y,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ph(9,a)}}catch(U){He(a,a.return,U)}if(a===o){Y=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,Y=O;break e}Y=a.return}}if(me=i,Fi(),sr&&typeof sr.onPostCommitFiberRoot=="function")try{sr.onPostCommitFiberRoot(vh,t)}catch{}r=!0}return r}finally{Ie=n,xn.transition=e}}return!1}function aE(t,e,n){e=Xo(n,e),e=iS(t,e,1),t=_i(t,e,1),e=Kt(),t!==null&&(bu(t,1,e),cn(t,e))}function He(t,e,n){if(t.tag===3)aE(t,t,n);else for(;e!==null;){if(e.tag===3){aE(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yi===null||!yi.has(r))){t=Xo(n,t),t=sS(e,t,1),e=_i(e,t,1),t=Kt(),e!==null&&(bu(e,1,t),cn(e,t));break}}e=e.return}}function bb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,yt===t&&(Ct&n)===n&&(dt===4||dt===3&&(Ct&130023424)===Ct&&500>et()-l_?_s(t,0):a_|=n),cn(t,e)}function RS(t,e){e===0&&(t.mode&1?(e=Rc,Rc<<=1,!(Rc&130023424)&&(Rc=4194304)):e=1);var n=Kt();t=Nr(t,e),t!==null&&(bu(t,e,n),cn(t,n))}function Nb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),RS(t,n)}function Db(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),RS(t,n)}var AS;AS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ln.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,wb(t,e,n);rn=!!(t.flags&131072)}else rn=!1,Ne&&e.flags&1048576&&x0(e,Dd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;id(t,e),t=e.pendingProps;var i=Ho(e,jt.current);Mo(e,n),i=t_(null,e,r,t,i,n);var s=n_();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(r)?(s=!0,bd(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yg(e),i.updater=Ah,e.stateNode=i,i._reactInternals=e,gm(e,r,t,n),e=vm(null,e,r,!0,s,n)):(e.tag=0,Ne&&s&&$g(e),qt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(id(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Vb(r),t=Un(r,t),i){case 0:e=ym(null,e,r,t,n);break e;case 1:e=Xw(null,e,r,t,n);break e;case 11:e=Qw(null,e,r,t,n);break e;case 14:e=Yw(null,e,r,Un(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Un(r,i),ym(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Un(r,i),Xw(t,e,r,i,n);case 3:e:{if(uS(e),t===null)throw Error($(387));r=e.pendingProps,s=e.memoizedState,i=s.element,L0(t,e),Ld(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Xo(Error($(423)),e),e=Jw(t,e,r,n,i);break e}else if(r!==i){i=Xo(Error($(424)),e),e=Jw(t,e,r,n,i);break e}else for(gn=gi(e.stateNode.containerInfo.firstChild),yn=e,Ne=!0,Bn=null,n=O0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ko(),r===i){e=Dr(t,e,n);break e}qt(t,e,r,n)}e=e.child}return e;case 5:return M0(e),t===null&&fm(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,lm(r,i)?o=null:s!==null&&lm(r,s)&&(e.flags|=32),lS(t,e),qt(t,e,o,n),e.child;case 6:return t===null&&fm(e),null;case 13:return cS(t,e,n);case 4:return Xg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Qo(e,null,r,n):qt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Un(r,i),Qw(t,e,r,i,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Re(Od,r._currentValue),r._currentValue=o,s!==null)if(Gn(s.value,o)){if(s.children===i.children&&!ln.current){e=Dr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ar(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),pm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),pm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Mo(e,n),i=Nn(i),r=r(i),e.flags|=1,qt(t,e,r,n),e.child;case 14:return r=e.type,i=Un(r,e.pendingProps),i=Un(r.type,i),Yw(t,e,r,i,n);case 15:return oS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Un(r,i),id(t,e),e.tag=1,un(r)?(t=!0,bd(e)):t=!1,Mo(e,n),rS(e,r,i),gm(e,r,i,n),vm(null,e,r,!0,t,n);case 19:return dS(t,e,n);case 22:return aS(t,e,n)}throw Error($(156,e.tag))};function PS(t,e){return e0(t,e)}function Ob(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(t,e,n,r){return new Ob(t,e,n,r)}function h_(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vb(t){if(typeof t=="function")return h_(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bg)return 11;if(t===Ng)return 14}return 2}function wi(t,e){var n=t.alternate;return n===null?(n=Pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ad(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")h_(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case wo:return ys(n.children,i,s,e);case xg:o=8,i|=8;break;case jp:return t=Pn(12,n,e,i|2),t.elementType=jp,t.lanes=s,t;case Bp:return t=Pn(13,n,e,i),t.elementType=Bp,t.lanes=s,t;case zp:return t=Pn(19,n,e,i),t.elementType=zp,t.lanes=s,t;case MT:return kh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case VT:o=10;break e;case LT:o=9;break e;case bg:o=11;break e;case Ng:o=14;break e;case ti:o=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=Pn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ys(t,e,n,r){return t=Pn(7,t,r,e),t.lanes=n,t}function kh(t,e,n,r){return t=Pn(22,t,r,e),t.elementType=MT,t.lanes=n,t.stateNode={isHidden:!1},t}function fp(t,e,n){return t=Pn(6,t,null,e),t.lanes=n,t}function pp(t,e,n){return e=Pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Lb(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kf(0),this.expirationTimes=Kf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function f_(t,e,n,r,i,s,o,a,l){return t=new Lb(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yg(s),t}function Mb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function CS(t){if(!t)return Si;t=t._reactInternals;e:{if($s(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(un(n))return C0(t,n,e)}return e}function kS(t,e,n,r,i,s,o,a,l){return t=f_(n,r,!0,t,i,s,o,a,l),t.context=CS(null),n=t.current,r=Kt(),i=vi(n),s=Ar(r,i),s.callback=e??null,_i(n,s,i),t.current.lanes=i,bu(t,i,r),cn(t,r),t}function xh(t,e,n,r){var i=e.current,s=Kt(),o=vi(i);return n=CS(n),e.context===null?e.context=n:e.pendingContext=n,e=Ar(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=_i(i,e,o),t!==null&&(qn(t,i,o,s),td(t,i,o)),o}function qd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lE(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function p_(t,e){lE(t,e),(t=t.alternate)&&lE(t,e)}function Fb(){return null}var xS=typeof reportError=="function"?reportError:function(t){console.error(t)};function m_(t){this._internalRoot=t}bh.prototype.render=m_.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));xh(t,e,null,null)};bh.prototype.unmount=m_.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Cs(function(){xh(null,t,null,null)}),e[br]=null}};function bh(t){this._internalRoot=t}bh.prototype.unstable_scheduleHydration=function(t){if(t){var e=a0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ii.length&&e!==0&&e<ii[n].priority;n++);ii.splice(n,0,t),n===0&&u0(t)}};function g_(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function uE(){}function Ub(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=qd(o);s.call(c)}}var o=kS(e,r,t,0,null,!1,!1,"",uE);return t._reactRootContainer=o,t[br]=o.current,tu(t.nodeType===8?t.parentNode:t),Cs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=qd(l);a.call(c)}}var l=f_(t,0,!1,null,null,!1,!1,"",uE);return t._reactRootContainer=l,t[br]=l.current,tu(t.nodeType===8?t.parentNode:t),Cs(function(){xh(e,l,n,r)}),l}function Dh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=qd(o);a.call(l)}}xh(e,o,t,i)}else o=Ub(n,e,t,i,r);return qd(o)}s0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=vl(e.pendingLanes);n!==0&&(Vg(e,n|1),cn(e,et()),!(me&6)&&(Jo=et()+500,Fi()))}break;case 13:Cs(function(){var r=Nr(t,1);if(r!==null){var i=Kt();qn(r,t,1,i)}}),p_(t,1)}};Lg=function(t){if(t.tag===13){var e=Nr(t,134217728);if(e!==null){var n=Kt();qn(e,t,134217728,n)}p_(t,134217728)}};o0=function(t){if(t.tag===13){var e=vi(t),n=Nr(t,e);if(n!==null){var r=Kt();qn(n,t,e,r)}p_(t,e)}};a0=function(){return Ie};l0=function(t,e){var n=Ie;try{return Ie=t,e()}finally{Ie=n}};Jp=function(t,e,n){switch(e){case"input":if(Gp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Th(r);if(!i)throw Error($(90));UT(r),Gp(r,i)}}}break;case"textarea":BT(t,n);break;case"select":e=n.value,e!=null&&Do(t,!!n.multiple,e,!1)}};KT=u_;QT=Cs;var jb={usingClientEntryPoint:!1,Events:[Du,So,Th,WT,HT,u_]},al={findFiberByHostInstance:ds,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bb={bundleType:al.bundleType,version:al.version,rendererPackageName:al.rendererPackageName,rendererConfig:al.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ur.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=JT(t),t===null?null:t.stateNode},findFiberByHostInstance:al.findFiberByHostInstance||Fb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lc.isDisabled&&Lc.supportsFiber)try{vh=Lc.inject(Bb),sr=Lc}catch{}}In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jb;In.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g_(e))throw Error($(200));return Mb(t,e,null,n)};In.createRoot=function(t,e){if(!g_(t))throw Error($(299));var n=!1,r="",i=xS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=f_(t,1,!1,null,null,n,!1,r,i),t[br]=e.current,tu(t.nodeType===8?t.parentNode:t),new m_(e)};In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=JT(e),t=t===null?null:t.stateNode,t};In.flushSync=function(t){return Cs(t)};In.hydrate=function(t,e,n){if(!Nh(e))throw Error($(200));return Dh(null,t,e,!0,n)};In.hydrateRoot=function(t,e,n){if(!g_(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=xS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=kS(e,null,t,1,n??null,i,!1,s,o),t[br]=e.current,tu(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new bh(e)};In.render=function(t,e,n){if(!Nh(e))throw Error($(200));return Dh(null,t,e,!1,n)};In.unmountComponentAtNode=function(t){if(!Nh(t))throw Error($(40));return t._reactRootContainer?(Cs(function(){Dh(null,null,t,!1,function(){t._reactRootContainer=null,t[br]=null})}),!0):!1};In.unstable_batchedUpdates=u_;In.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Nh(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return Dh(t,e,n,!1,r)};In.version="18.3.1-next-f1338f8080-20240426";function bS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bS)}catch(t){console.error(t)}}bS(),bT.exports=In;var NS=bT.exports;const bo=_h(NS);var cE=NS;Fp.createRoot=cE.createRoot,Fp.hydrateRoot=cE.hydrateRoot;var dE={};/**
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
 */const DS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},OS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,v=c&63;l||(v=64,o||(m=64)),r.push(n[d],n[f],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(DS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new $b;const m=s<<2|a>>4;if(r.push(m),c!==64){const v=a<<4&240|c>>2;if(r.push(v),f!==64){const P=c<<6&192|f;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $b extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qb=function(t){const e=DS(t);return OS.encodeByteArray(e,!0)},Gd=function(t){return qb(t).replace(/\./g,"")},VS=function(t){try{return OS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Wd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Gb(n)||(t[n]=Wd(t[n],e[n]));return t}function Gb(t){return t!=="__proto__"}/**
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
 */function Wb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Hb=()=>Wb().__FIREBASE_DEFAULTS__,Kb=()=>{if(typeof process>"u"||typeof dE>"u")return;const t=dE.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Qb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&VS(t[1]);return e&&JSON.parse(e)},Oh=()=>{try{return Hb()||Kb()||Qb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},LS=t=>{var e,n;return(n=(e=Oh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},MS=t=>{const e=LS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},FS=()=>{var t;return(t=Oh())===null||t===void 0?void 0:t.config},US=t=>{var e;return(e=Oh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Yb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function jS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Gd(JSON.stringify(n)),Gd(JSON.stringify(o)),""].join(".")}/**
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
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function __(){var t;const e=(t=Oh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function BS(){return typeof window<"u"||zS()}function zS(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function $S(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function y_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qS(){const t=Le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function GS(){return!__()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cu(){try{return typeof indexedDB=="object"}catch{return!1}}function Jb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Zb="FirebaseError";class Ut extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Zb,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qs.prototype.create)}}class qs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?eN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ut(i,a,r)}}function eN(t,e){return t.replace(tN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const tN=/\{\$([^}]+)}/g;/**
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
 */function hE(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function nN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(fE(s)&&fE(o)){if(!Zo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function fE(t){return t!==null&&typeof t=="object"}/**
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
 */function Ia(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function No(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function El(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function WS(t,e){const n=new rN(t,e);return n.subscribe.bind(n)}class rN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");iN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=mp),i.error===void 0&&(i.error=mp),i.complete===void 0&&(i.complete=mp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mp(){}/**
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
 */function X(t){return t&&t._delegate?t._delegate:t}class On{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ns="[DEFAULT]";/**
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
 */class sN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Yb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aN(e))try{this.getOrInitializeService({instanceIdentifier:ns})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ns){return this.instances.has(e)}getOptions(e=ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ns){return this.component?this.component.multipleInstances?e:ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oN(t){return t===ns?void 0:t}function aN(t){return t.instantiationMode==="EAGER"}/**
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
 */class HS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const v_=[];var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const KS={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},lN=ae.INFO,uN={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},cN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=uN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vh{constructor(e){this.name=e,this._logLevel=lN,this._logHandler=cN,this._userLogHandler=null,v_.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}function dN(t){v_.forEach(e=>{e.setLogLevel(t)})}function hN(t,e){for(const n of v_){let r=null;e&&e.level&&(r=KS[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:ae[s].toLowerCase(),message:a,args:o,type:i.name})}}}const fN=(t,e)=>e.some(n=>t instanceof n);let pE,mE;function pN(){return pE||(pE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mN(){return mE||(mE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const QS=new WeakMap,bm=new WeakMap,YS=new WeakMap,gp=new WeakMap,w_=new WeakMap;function gN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ei(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&QS.set(n,t)}).catch(()=>{}),w_.set(e,t),e}function _N(t){if(bm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});bm.set(t,e)}let Nm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||YS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ei(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yN(t){Nm=t(Nm)}function vN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_p(this),e,...n);return YS.set(r,e.sort?e.sort():[e]),Ei(r)}:mN().includes(t)?function(...e){return t.apply(_p(this),e),Ei(QS.get(this))}:function(...e){return Ei(t.apply(_p(this),e))}}function wN(t){return typeof t=="function"?vN(t):(t instanceof IDBTransaction&&_N(t),fN(t,pN())?new Proxy(t,Nm):t)}function Ei(t){if(t instanceof IDBRequest)return gN(t);if(gp.has(t))return gp.get(t);const e=wN(t);return e!==t&&(gp.set(t,e),w_.set(e,t)),e}const _p=t=>w_.get(t);function EN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ei(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ei(o.result),l.oldVersion,l.newVersion,Ei(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const IN=["get","getKey","getAll","getAllKeys","count"],TN=["put","add","delete","clear"],yp=new Map;function gE(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yp.get(e))return yp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=TN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||IN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return yp.set(e,s),s}yN(t=>({...t,get:(e,n,r)=>gE(e,n)||t.get(e,n,r),has:(e,n)=>!!gE(e,n)||t.has(e,n)}));/**
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
 */class SN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function RN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hd="@firebase/app",Dm="0.10.6";/**
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
 */const ks=new Vh("@firebase/app"),AN="@firebase/app-compat",PN="@firebase/analytics-compat",CN="@firebase/analytics",kN="@firebase/app-check-compat",xN="@firebase/app-check",bN="@firebase/auth",NN="@firebase/auth-compat",DN="@firebase/database",ON="@firebase/database-compat",VN="@firebase/functions",LN="@firebase/functions-compat",MN="@firebase/installations",FN="@firebase/installations-compat",UN="@firebase/messaging",jN="@firebase/messaging-compat",BN="@firebase/performance",zN="@firebase/performance-compat",$N="@firebase/remote-config",qN="@firebase/remote-config-compat",GN="@firebase/storage",WN="@firebase/storage-compat",HN="@firebase/firestore",KN="@firebase/vertexai-preview",QN="@firebase/firestore-compat",YN="firebase",XN="10.12.3";/**
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
 */const Ri="[DEFAULT]",JN={[Hd]:"fire-core",[AN]:"fire-core-compat",[CN]:"fire-analytics",[PN]:"fire-analytics-compat",[xN]:"fire-app-check",[kN]:"fire-app-check-compat",[bN]:"fire-auth",[NN]:"fire-auth-compat",[DN]:"fire-rtdb",[ON]:"fire-rtdb-compat",[VN]:"fire-fn",[LN]:"fire-fn-compat",[MN]:"fire-iid",[FN]:"fire-iid-compat",[UN]:"fire-fcm",[jN]:"fire-fcm-compat",[BN]:"fire-perf",[zN]:"fire-perf-compat",[$N]:"fire-rc",[qN]:"fire-rc-compat",[GN]:"fire-gcs",[WN]:"fire-gcs-compat",[HN]:"fire-fst",[QN]:"fire-fst-compat",[KN]:"fire-vertex","fire-js":"fire-js",[YN]:"fire-js-all"};/**
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
 */const Ai=new Map,ea=new Map,ta=new Map;function du(t,e){try{t.container.addComponent(e)}catch(n){ks.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function XS(t,e){t.container.addOrOverwriteComponent(e)}function Or(t){const e=t.name;if(ta.has(e))return ks.debug(`There were multiple attempts to register component ${e}.`),!1;ta.set(e,t);for(const n of Ai.values())du(n,t);for(const n of ea.values())du(n,t);return!0}function Ta(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ZN(t,e,n=Ri){Ta(t,e).clearInstance(n)}function JS(t){return t.options!==void 0}function Qe(t){return t.settings!==void 0}function eD(){ta.clear()}/**
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
 */const tD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bn=new qs("app","Firebase",tD);/**
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
 */let ZS=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new On("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}};/**
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
 */class nD extends ZS{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,vn(Hd,Dm,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){I_(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw bn.create("server-app-deleted")}}/**
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
 */const jr=XN;function E_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ri,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw bn.create("bad-app-name",{appName:String(i)});if(n||(n=FS()),!n)throw bn.create("no-options");const s=Ai.get(i);if(s){if(Zo(n,s.options)&&Zo(r,s.config))return s;throw bn.create("duplicate-app",{appName:i})}const o=new HS(i);for(const l of ta.values())o.addComponent(l);const a=new ZS(n,r,o);return Ai.set(i,a),a}function rD(t,e){if(BS()&&!zS())throw bn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;JS(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((d,f)=>Math.imul(31,d)+f.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw bn.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=ea.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new HS(s);for(const c of ta.values())a.addComponent(c);const l=new nD(n,e,s,a);return ea.set(s,l),l}function Lh(t=Ri){const e=Ai.get(t);if(!e&&t===Ri&&FS())return E_();if(!e)throw bn.create("no-app",{appName:t});return e}function iD(){return Array.from(Ai.values())}async function I_(t){let e=!1;const n=t.name;Ai.has(n)?(e=!0,Ai.delete(n)):ea.has(n)&&t.decRefCount()<=0&&(ea.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function vn(t,e,n){var r;let i=(r=JN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ks.warn(a.join(" "));return}Or(new On(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function eR(t,e){if(t!==null&&typeof t!="function")throw bn.create("invalid-log-argument");hN(t,e)}function tR(t){dN(t)}/**
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
 */const sD="firebase-heartbeat-database",oD=1,hu="firebase-heartbeat-store";let vp=null;function nR(){return vp||(vp=EN(sD,oD,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(hu)}catch(n){console.warn(n)}}}}).catch(t=>{throw bn.create("idb-open",{originalErrorMessage:t.message})})),vp}async function aD(t){try{const n=(await nR()).transaction(hu),r=await n.objectStore(hu).get(rR(t));return await n.done,r}catch(e){if(e instanceof Ut)ks.warn(e.message);else{const n=bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ks.warn(n.message)}}}async function _E(t,e){try{const r=(await nR()).transaction(hu,"readwrite");await r.objectStore(hu).put(e,rR(t)),await r.done}catch(n){if(n instanceof Ut)ks.warn(n.message);else{const r=bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ks.warn(r.message)}}}function rR(t){return`${t.name}!${t.options.appId}`}/**
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
 */const lD=1024,uD=30*24*60*60*1e3;class cD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=yE();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=uD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yE(),{heartbeatsToSend:r,unsentEntries:i}=dD(this._heartbeatsCache.heartbeats),s=Gd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function yE(){return new Date().toISOString().substring(0,10)}function dD(t,e=lD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),vE(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),vE(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cu()?Jb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await aD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _E(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _E(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function vE(t){return Gd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function fD(t){Or(new On("platform-logger",e=>new SN(e),"PRIVATE")),Or(new On("heartbeat",e=>new cD(e),"PRIVATE")),vn(Hd,Dm,t),vn(Hd,Dm,"esm2017"),vn("fire-js","")}fD("");const pD=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Ut,SDK_VERSION:jr,_DEFAULT_ENTRY_NAME:Ri,_addComponent:du,_addOrOverwriteComponent:XS,_apps:Ai,_clearComponents:eD,_components:ta,_getProvider:Ta,_isFirebaseApp:JS,_isFirebaseServerApp:Qe,_registerComponent:Or,_removeServiceInstance:ZN,_serverApps:ea,deleteApp:I_,getApp:Lh,getApps:iD,initializeApp:E_,initializeServerApp:rD,onLog:eR,registerVersion:vn,setLogLevel:tR},Symbol.toStringTag,{value:"Module"}));var wE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vs,iR;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function I(){}I.prototype=y.prototype,E.D=y.prototype,E.prototype=new I,E.prototype.constructor=E,E.C=function(R,C,b){for(var A=Array(arguments.length-2),at=2;at<arguments.length;at++)A[at-2]=arguments[at];return y.prototype[C].apply(R,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,I){I||(I=0);var R=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)R[C]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(C=0;16>C;++C)R[C]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=E.g[0],I=E.g[1],C=E.g[2];var b=E.g[3],A=y+(b^I&(C^b))+R[0]+3614090360&4294967295;y=I+(A<<7&4294967295|A>>>25),A=b+(C^y&(I^C))+R[1]+3905402710&4294967295,b=y+(A<<12&4294967295|A>>>20),A=C+(I^b&(y^I))+R[2]+606105819&4294967295,C=b+(A<<17&4294967295|A>>>15),A=I+(y^C&(b^y))+R[3]+3250441966&4294967295,I=C+(A<<22&4294967295|A>>>10),A=y+(b^I&(C^b))+R[4]+4118548399&4294967295,y=I+(A<<7&4294967295|A>>>25),A=b+(C^y&(I^C))+R[5]+1200080426&4294967295,b=y+(A<<12&4294967295|A>>>20),A=C+(I^b&(y^I))+R[6]+2821735955&4294967295,C=b+(A<<17&4294967295|A>>>15),A=I+(y^C&(b^y))+R[7]+4249261313&4294967295,I=C+(A<<22&4294967295|A>>>10),A=y+(b^I&(C^b))+R[8]+1770035416&4294967295,y=I+(A<<7&4294967295|A>>>25),A=b+(C^y&(I^C))+R[9]+2336552879&4294967295,b=y+(A<<12&4294967295|A>>>20),A=C+(I^b&(y^I))+R[10]+4294925233&4294967295,C=b+(A<<17&4294967295|A>>>15),A=I+(y^C&(b^y))+R[11]+2304563134&4294967295,I=C+(A<<22&4294967295|A>>>10),A=y+(b^I&(C^b))+R[12]+1804603682&4294967295,y=I+(A<<7&4294967295|A>>>25),A=b+(C^y&(I^C))+R[13]+4254626195&4294967295,b=y+(A<<12&4294967295|A>>>20),A=C+(I^b&(y^I))+R[14]+2792965006&4294967295,C=b+(A<<17&4294967295|A>>>15),A=I+(y^C&(b^y))+R[15]+1236535329&4294967295,I=C+(A<<22&4294967295|A>>>10),A=y+(C^b&(I^C))+R[1]+4129170786&4294967295,y=I+(A<<5&4294967295|A>>>27),A=b+(I^C&(y^I))+R[6]+3225465664&4294967295,b=y+(A<<9&4294967295|A>>>23),A=C+(y^I&(b^y))+R[11]+643717713&4294967295,C=b+(A<<14&4294967295|A>>>18),A=I+(b^y&(C^b))+R[0]+3921069994&4294967295,I=C+(A<<20&4294967295|A>>>12),A=y+(C^b&(I^C))+R[5]+3593408605&4294967295,y=I+(A<<5&4294967295|A>>>27),A=b+(I^C&(y^I))+R[10]+38016083&4294967295,b=y+(A<<9&4294967295|A>>>23),A=C+(y^I&(b^y))+R[15]+3634488961&4294967295,C=b+(A<<14&4294967295|A>>>18),A=I+(b^y&(C^b))+R[4]+3889429448&4294967295,I=C+(A<<20&4294967295|A>>>12),A=y+(C^b&(I^C))+R[9]+568446438&4294967295,y=I+(A<<5&4294967295|A>>>27),A=b+(I^C&(y^I))+R[14]+3275163606&4294967295,b=y+(A<<9&4294967295|A>>>23),A=C+(y^I&(b^y))+R[3]+4107603335&4294967295,C=b+(A<<14&4294967295|A>>>18),A=I+(b^y&(C^b))+R[8]+1163531501&4294967295,I=C+(A<<20&4294967295|A>>>12),A=y+(C^b&(I^C))+R[13]+2850285829&4294967295,y=I+(A<<5&4294967295|A>>>27),A=b+(I^C&(y^I))+R[2]+4243563512&4294967295,b=y+(A<<9&4294967295|A>>>23),A=C+(y^I&(b^y))+R[7]+1735328473&4294967295,C=b+(A<<14&4294967295|A>>>18),A=I+(b^y&(C^b))+R[12]+2368359562&4294967295,I=C+(A<<20&4294967295|A>>>12),A=y+(I^C^b)+R[5]+4294588738&4294967295,y=I+(A<<4&4294967295|A>>>28),A=b+(y^I^C)+R[8]+2272392833&4294967295,b=y+(A<<11&4294967295|A>>>21),A=C+(b^y^I)+R[11]+1839030562&4294967295,C=b+(A<<16&4294967295|A>>>16),A=I+(C^b^y)+R[14]+4259657740&4294967295,I=C+(A<<23&4294967295|A>>>9),A=y+(I^C^b)+R[1]+2763975236&4294967295,y=I+(A<<4&4294967295|A>>>28),A=b+(y^I^C)+R[4]+1272893353&4294967295,b=y+(A<<11&4294967295|A>>>21),A=C+(b^y^I)+R[7]+4139469664&4294967295,C=b+(A<<16&4294967295|A>>>16),A=I+(C^b^y)+R[10]+3200236656&4294967295,I=C+(A<<23&4294967295|A>>>9),A=y+(I^C^b)+R[13]+681279174&4294967295,y=I+(A<<4&4294967295|A>>>28),A=b+(y^I^C)+R[0]+3936430074&4294967295,b=y+(A<<11&4294967295|A>>>21),A=C+(b^y^I)+R[3]+3572445317&4294967295,C=b+(A<<16&4294967295|A>>>16),A=I+(C^b^y)+R[6]+76029189&4294967295,I=C+(A<<23&4294967295|A>>>9),A=y+(I^C^b)+R[9]+3654602809&4294967295,y=I+(A<<4&4294967295|A>>>28),A=b+(y^I^C)+R[12]+3873151461&4294967295,b=y+(A<<11&4294967295|A>>>21),A=C+(b^y^I)+R[15]+530742520&4294967295,C=b+(A<<16&4294967295|A>>>16),A=I+(C^b^y)+R[2]+3299628645&4294967295,I=C+(A<<23&4294967295|A>>>9),A=y+(C^(I|~b))+R[0]+4096336452&4294967295,y=I+(A<<6&4294967295|A>>>26),A=b+(I^(y|~C))+R[7]+1126891415&4294967295,b=y+(A<<10&4294967295|A>>>22),A=C+(y^(b|~I))+R[14]+2878612391&4294967295,C=b+(A<<15&4294967295|A>>>17),A=I+(b^(C|~y))+R[5]+4237533241&4294967295,I=C+(A<<21&4294967295|A>>>11),A=y+(C^(I|~b))+R[12]+1700485571&4294967295,y=I+(A<<6&4294967295|A>>>26),A=b+(I^(y|~C))+R[3]+2399980690&4294967295,b=y+(A<<10&4294967295|A>>>22),A=C+(y^(b|~I))+R[10]+4293915773&4294967295,C=b+(A<<15&4294967295|A>>>17),A=I+(b^(C|~y))+R[1]+2240044497&4294967295,I=C+(A<<21&4294967295|A>>>11),A=y+(C^(I|~b))+R[8]+1873313359&4294967295,y=I+(A<<6&4294967295|A>>>26),A=b+(I^(y|~C))+R[15]+4264355552&4294967295,b=y+(A<<10&4294967295|A>>>22),A=C+(y^(b|~I))+R[6]+2734768916&4294967295,C=b+(A<<15&4294967295|A>>>17),A=I+(b^(C|~y))+R[13]+1309151649&4294967295,I=C+(A<<21&4294967295|A>>>11),A=y+(C^(I|~b))+R[4]+4149444226&4294967295,y=I+(A<<6&4294967295|A>>>26),A=b+(I^(y|~C))+R[11]+3174756917&4294967295,b=y+(A<<10&4294967295|A>>>22),A=C+(y^(b|~I))+R[2]+718787259&4294967295,C=b+(A<<15&4294967295|A>>>17),A=I+(b^(C|~y))+R[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(C+(A<<21&4294967295|A>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+b&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var I=y-this.blockSize,R=this.B,C=this.h,b=0;b<y;){if(C==0)for(;b<=I;)i(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<y;)if(R[C++]=E.charCodeAt(b++),C==this.blockSize){i(this,R),C=0;break}}else for(;b<y;)if(R[C++]=E[b++],C==this.blockSize){i(this,R),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var I=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=I&255,I/=256;for(this.u(E),E=Array(16),y=I=0;4>y;++y)for(var R=0;32>R;R+=8)E[I++]=this.g[y]>>>R&255;return E};function s(E,y){var I=a;return Object.prototype.hasOwnProperty.call(I,E)?I[E]:I[E]=y(E)}function o(E,y){this.h=y;for(var I=[],R=!0,C=E.length-1;0<=C;C--){var b=E[C]|0;R&&b==y||(I[C]=b,R=!1)}this.g=I}var a={};function l(E){return-128<=E&&128>E?s(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return f;if(0>E)return D(c(-E));for(var y=[],I=1,R=0;E>=I;R++)y[R]=E/I|0,I*=4294967296;return new o(y,0)}function d(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return D(d(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(y,8)),R=f,C=0;C<E.length;C+=8){var b=Math.min(8,E.length-C),A=parseInt(E.substring(C,C+b),y);8>b?(b=c(Math.pow(y,b)),R=R.j(b).add(c(A))):(R=R.j(I),R=R.add(c(A)))}return R}var f=l(0),m=l(1),v=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-D(this).m();for(var E=0,y=1,I=0;I<this.g.length;I++){var R=this.i(I);E+=(0<=R?R:4294967296+R)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(k(this))return"-"+D(this).toString(E);for(var y=c(Math.pow(E,6)),I=this,R="";;){var C=O(I,y).g;I=T(I,C.j(y));var b=((0<I.g.length?I.g[0]:I.h)>>>0).toString(E);if(I=C,P(I))return b+R;for(;6>b.length;)b="0"+b;R=b+R}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function k(E){return E.h==-1}t.l=function(E){return E=T(this,E),k(E)?-1:P(E)?0:1};function D(E){for(var y=E.g.length,I=[],R=0;R<y;R++)I[R]=~E.g[R];return new o(I,~E.h).add(m)}t.abs=function(){return k(this)?D(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),I=[],R=0,C=0;C<=y;C++){var b=R+(this.i(C)&65535)+(E.i(C)&65535),A=(b>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);R=A>>>16,b&=65535,A&=65535,I[C]=A<<16|b}return new o(I,I[I.length-1]&-2147483648?-1:0)};function T(E,y){return E.add(D(y))}t.j=function(E){if(P(this)||P(E))return f;if(k(this))return k(E)?D(this).j(D(E)):D(D(this).j(E));if(k(E))return D(this.j(D(E)));if(0>this.l(v)&&0>E.l(v))return c(this.m()*E.m());for(var y=this.g.length+E.g.length,I=[],R=0;R<2*y;R++)I[R]=0;for(R=0;R<this.g.length;R++)for(var C=0;C<E.g.length;C++){var b=this.i(R)>>>16,A=this.i(R)&65535,at=E.i(C)>>>16,Bt=E.i(C)&65535;I[2*R+2*C]+=A*Bt,w(I,2*R+2*C),I[2*R+2*C+1]+=b*Bt,w(I,2*R+2*C+1),I[2*R+2*C+1]+=A*at,w(I,2*R+2*C+1),I[2*R+2*C+2]+=b*at,w(I,2*R+2*C+2)}for(R=0;R<y;R++)I[R]=I[2*R+1]<<16|I[2*R];for(R=y;R<2*y;R++)I[R]=0;return new o(I,0)};function w(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function S(E,y){this.g=E,this.h=y}function O(E,y){if(P(y))throw Error("division by zero");if(P(E))return new S(f,f);if(k(E))return y=O(D(E),y),new S(D(y.g),D(y.h));if(k(y))return y=O(E,D(y)),new S(D(y.g),y.h);if(30<E.g.length){if(k(E)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var I=m,R=y;0>=R.l(E);)I=U(I),R=U(R);var C=F(I,1),b=F(R,1);for(R=F(R,2),I=F(I,2);!P(R);){var A=b.add(R);0>=A.l(E)&&(C=C.add(I),b=A),R=F(R,1),I=F(I,1)}return y=T(E,C.j(y)),new S(C,y)}for(C=f;0<=E.l(y);){for(I=Math.max(1,Math.floor(E.m()/y.m())),R=Math.ceil(Math.log(I)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),b=c(I),A=b.j(y);k(A)||0<A.l(E);)I-=R,b=c(I),A=b.j(y);P(b)&&(b=m),C=C.add(b),E=T(E,A)}return new S(C,E)}t.A=function(E){return O(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),I=[],R=0;R<y;R++)I[R]=this.i(R)&E.i(R);return new o(I,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),I=[],R=0;R<y;R++)I[R]=this.i(R)|E.i(R);return new o(I,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),I=[],R=0;R<y;R++)I[R]=this.i(R)^E.i(R);return new o(I,this.h^E.h)};function U(E){for(var y=E.g.length+1,I=[],R=0;R<y;R++)I[R]=E.i(R)<<1|E.i(R-1)>>>31;return new o(I,E.h)}function F(E,y){var I=y>>5;y%=32;for(var R=E.g.length-I,C=[],b=0;b<R;b++)C[b]=0<y?E.i(b+I)>>>y|E.i(b+I+1)<<32-y:E.i(b+I);return new o(C,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,iR=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,vs=o}).apply(typeof wE<"u"?wE:typeof self<"u"?self:typeof window<"u"?window:{});var Mc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sR,oR,Il,aR,ld,Om,lR,uR,cR;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,h,p){return u==Array.prototype||u==Object.prototype||(u[h]=p.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mc=="object"&&Mc];for(var h=0;h<u.length;++h){var p=u[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(u,h){if(h)e:{var p=r;u=u.split(".");for(var _=0;_<u.length-1;_++){var N=u[_];if(!(N in p))break e;p=p[N]}u=u[u.length-1],_=p[u],h=h(_),h!=_&&h!=null&&e(p,u,{configurable:!0,writable:!0,value:h})}}function s(u,h){u instanceof String&&(u+="");var p=0,_=!1,N={next:function(){if(!_&&p<u.length){var M=p++;return{value:h(M,u[M]),done:!1}}return _=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(u){return u||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var h=typeof u;return h=h!="object"?h:u?Array.isArray(u)?"array":h:"null",h=="array"||h=="object"&&typeof u.length=="number"}function c(u){var h=typeof u;return h=="object"&&u!=null||h=="function"}function d(u,h,p){return u.call.apply(u.bind,arguments)}function f(u,h,p){if(!u)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,_),u.apply(h,N)}}return function(){return u.apply(h,arguments)}}function m(u,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function v(u,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),u.apply(this,_)}}function P(u,h){function p(){}p.prototype=h.prototype,u.aa=h.prototype,u.prototype=new p,u.prototype.constructor=u,u.Qb=function(_,N,M){for(var W=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)W[Se-2]=arguments[Se];return h.prototype[N].apply(_,W)}}function k(u){const h=u.length;if(0<h){const p=Array(h);for(let _=0;_<h;_++)p[_]=u[_];return p}return[]}function D(u,h){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(l(_)){const N=u.length||0,M=_.length||0;u.length=N+M;for(let W=0;W<M;W++)u[N+W]=_[W]}else u.push(_)}}class T{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(u){return/^[\s\xa0]*$/.test(u)}function S(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function O(u){return O[" "](u),u}O[" "]=function(){};var U=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function F(u,h,p){for(const _ in u)h.call(p,u[_],_,u)}function E(u,h){for(const p in u)h.call(void 0,u[p],p,u)}function y(u){const h={};for(const p in u)h[p]=u[p];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(u,h){let p,_;for(let N=1;N<arguments.length;N++){_=arguments[N];for(p in _)u[p]=_[p];for(let M=0;M<I.length;M++)p=I[M],Object.prototype.hasOwnProperty.call(_,p)&&(u[p]=_[p])}}function C(u){var h=1;u=u.split(":");const p=[];for(;0<h&&u.length;)p.push(u.shift()),h--;return u.length&&p.push(u.join(":")),p}function b(u){a.setTimeout(()=>{throw u},0)}function A(){var u=ee;let h=null;return u.g&&(h=u.g,u.g=u.g.next,u.g||(u.h=null),h.next=null),h}class at{constructor(){this.h=this.g=null}add(h,p){const _=Bt.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var Bt=new T(()=>new xt,u=>u.reset());class xt{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let $e,G=!1,ee=new at,te=()=>{const u=a.Promise.resolve(void 0);$e=()=>{u.then(fe)}};var fe=()=>{for(var u;u=A();){try{u.h.call(u.g)}catch(p){b(p)}var h=Bt;h.j(u),100>h.h&&(h.h++,u.next=h.g,h.g=u)}G=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(u,h){this.type=u,this.g=this.target=h,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var rt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,h=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return u}();function lt(u,h){if(oe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var p=this.type=u.type,_=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=h,h=u.relatedTarget){if(U){e:{try{O(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else p=="mouseover"?h=u.fromElement:p=="mouseout"&&(h=u.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:ut[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&lt.aa.h.call(this)}}P(lt,oe);var ut={2:"touch",3:"pen",4:"mouse"};lt.prototype.h=function(){lt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var bt="closure_listenable_"+(1e6*Math.random()|0),Gi=0;function fr(u,h,p,_,N){this.listener=u,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=N,this.key=++Gi,this.da=this.fa=!1}function se(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function qe(u){this.src=u,this.g={},this.h=0}qe.prototype.add=function(u,h,p,_,N){var M=u.toString();u=this.g[M],u||(u=this.g[M]=[],this.h++);var W=Ln(u,h,_,N);return-1<W?(h=u[W],p||(h.fa=!1)):(h=new fr(h,this.src,M,!!_,N),h.fa=p,u.push(h)),h};function pt(u,h){var p=h.type;if(p in u.g){var _=u.g[p],N=Array.prototype.indexOf.call(_,h,void 0),M;(M=0<=N)&&Array.prototype.splice.call(_,N,1),M&&(se(h),u.g[p].length==0&&(delete u.g[p],u.h--))}}function Ln(u,h,p,_){for(var N=0;N<u.length;++N){var M=u[N];if(!M.da&&M.listener==h&&M.capture==!!p&&M.ha==_)return N}return-1}var dn="closure_lm_"+(1e6*Math.random()|0),ve={};function Wi(u,h,p,_,N){if(Array.isArray(h)){for(var M=0;M<h.length;M++)Wi(u,h[M],p,_,N);return null}return p=sc(p),u&&u[bt]?u.K(h,p,c(_)?!!_.capture:!!_,N):Hi(u,h,p,!1,_,N)}function Hi(u,h,p,_,N,M){if(!h)throw Error("Invalid event type");var W=c(N)?!!N.capture:!!N,Se=Ua(u);if(Se||(u[dn]=Se=new qe(u)),p=Se.add(h,p,_,W,M),p.proxy)return p;if(_=Rf(),p.proxy=_,_.src=u,_.listener=p,u.addEventListener)rt||(N=W),N===void 0&&(N=!1),u.addEventListener(h.toString(),_,N);else if(u.attachEvent)u.attachEvent(ic(h.toString()),_);else if(u.addListener&&u.removeListener)u.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Rf(){function u(p){return h.call(u.src,u.listener,p)}const h=Af;return u}function rc(u,h,p,_,N){if(Array.isArray(h))for(var M=0;M<h.length;M++)rc(u,h[M],p,_,N);else _=c(_)?!!_.capture:!!_,p=sc(p),u&&u[bt]?(u=u.i,h=String(h).toString(),h in u.g&&(M=u.g[h],p=Ln(M,p,_,N),-1<p&&(se(M[p]),Array.prototype.splice.call(M,p,1),M.length==0&&(delete u.g[h],u.h--)))):u&&(u=Ua(u))&&(h=u.g[h.toString()],u=-1,h&&(u=Ln(h,p,_,N)),(p=-1<u?h[u]:null)&&Fa(p))}function Fa(u){if(typeof u!="number"&&u&&!u.da){var h=u.src;if(h&&h[bt])pt(h.i,u);else{var p=u.type,_=u.proxy;h.removeEventListener?h.removeEventListener(p,_,u.capture):h.detachEvent?h.detachEvent(ic(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=Ua(h))?(pt(p,u),p.h==0&&(p.src=null,h[dn]=null)):se(u)}}}function ic(u){return u in ve?ve[u]:ve[u]="on"+u}function Af(u,h){if(u.da)u=!0;else{h=new lt(h,this);var p=u.listener,_=u.ha||u.src;u.fa&&Fa(u),u=p.call(_,h)}return u}function Ua(u){return u=u[dn],u instanceof qe?u:null}var Js="__closure_events_fn_"+(1e9*Math.random()>>>0);function sc(u){return typeof u=="function"?u:(u[Js]||(u[Js]=function(h){return u.handleEvent(h)}),u[Js])}function ne(){ue.call(this),this.i=new qe(this),this.M=this,this.F=null}P(ne,ue),ne.prototype[bt]=!0,ne.prototype.removeEventListener=function(u,h,p,_){rc(this,u,h,p,_)};function Ge(u,h){var p,_=u.F;if(_)for(p=[];_;_=_.F)p.push(_);if(u=u.M,_=h.type||h,typeof h=="string")h=new oe(h,u);else if(h instanceof oe)h.target=h.target||u;else{var N=h;h=new oe(_,u),R(h,N)}if(N=!0,p)for(var M=p.length-1;0<=M;M--){var W=h.g=p[M];N=Ki(W,_,!0,h)&&N}if(W=h.g=u,N=Ki(W,_,!0,h)&&N,N=Ki(W,_,!1,h)&&N,p)for(M=0;M<p.length;M++)W=h.g=p[M],N=Ki(W,_,!1,h)&&N}ne.prototype.N=function(){if(ne.aa.N.call(this),this.i){var u=this.i,h;for(h in u.g){for(var p=u.g[h],_=0;_<p.length;_++)se(p[_]);delete u.g[h],u.h--}}this.F=null},ne.prototype.K=function(u,h,p,_){return this.i.add(String(u),h,!1,p,_)},ne.prototype.L=function(u,h,p,_){return this.i.add(String(u),h,!0,p,_)};function Ki(u,h,p,_){if(h=u.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,M=0;M<h.length;++M){var W=h[M];if(W&&!W.da&&W.capture==p){var Se=W.listener,St=W.ha||W.src;W.fa&&pt(u.i,W),N=Se.call(St,_)!==!1&&N}}return N&&!_.defaultPrevented}function av(u,h,p){if(typeof u=="function")p&&(u=m(u,p));else if(u&&typeof u.handleEvent=="function")u=m(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(u,h||0)}function lv(u){u.g=av(()=>{u.g=null,u.i&&(u.i=!1,lv(u))},u.l);const h=u.h;u.h=null,u.m.apply(null,h)}class Gk extends ue{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:lv(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ja(u){ue.call(this),this.h=u,this.g={}}P(ja,ue);var uv=[];function cv(u){F(u.g,function(h,p){this.g.hasOwnProperty(p)&&Fa(h)},u),u.g={}}ja.prototype.N=function(){ja.aa.N.call(this),cv(this)},ja.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pf=a.JSON.stringify,Wk=a.JSON.parse,Hk=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function Cf(){}Cf.prototype.h=null;function dv(u){return u.h||(u.h=u.i())}function hv(){}var Ba={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function kf(){oe.call(this,"d")}P(kf,oe);function xf(){oe.call(this,"c")}P(xf,oe);var Qi={},fv=null;function oc(){return fv=fv||new ne}Qi.La="serverreachability";function pv(u){oe.call(this,Qi.La,u)}P(pv,oe);function za(u){const h=oc();Ge(h,new pv(h))}Qi.STAT_EVENT="statevent";function mv(u,h){oe.call(this,Qi.STAT_EVENT,u),this.stat=h}P(mv,oe);function zt(u){const h=oc();Ge(h,new mv(h,u))}Qi.Ma="timingevent";function gv(u,h){oe.call(this,Qi.Ma,u),this.size=h}P(gv,oe);function $a(u,h){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},h)}function qa(){this.g=!0}qa.prototype.xa=function(){this.g=!1};function Kk(u,h,p,_,N,M){u.info(function(){if(u.g)if(M)for(var W="",Se=M.split("&"),St=0;St<Se.length;St++){var _e=Se[St].split("=");if(1<_e.length){var Nt=_e[0];_e=_e[1];var Dt=Nt.split("_");W=2<=Dt.length&&Dt[1]=="type"?W+(Nt+"="+_e+"&"):W+(Nt+"=redacted&")}}else W=null;else W=M;return"XMLHTTP REQ ("+_+") [attempt "+N+"]: "+h+`
`+p+`
`+W})}function Qk(u,h,p,_,N,M,W){u.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+N+"]: "+h+`
`+p+`
`+M+" "+W})}function Zs(u,h,p,_){u.info(function(){return"XMLHTTP TEXT ("+h+"): "+Xk(u,p)+(_?" "+_:"")})}function Yk(u,h){u.info(function(){return"TIMEOUT: "+h})}qa.prototype.info=function(){};function Xk(u,h){if(!u.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(u=0;u<p.length;u++)if(Array.isArray(p[u])){var _=p[u];if(!(2>_.length)){var N=_[1];if(Array.isArray(N)&&!(1>N.length)){var M=N[0];if(M!="noop"&&M!="stop"&&M!="close")for(var W=1;W<N.length;W++)N[W]=""}}}}return Pf(p)}catch{return h}}var ac={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_v={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},bf;function lc(){}P(lc,Cf),lc.prototype.g=function(){return new XMLHttpRequest},lc.prototype.i=function(){return{}},bf=new lc;function Kr(u,h,p,_){this.j=u,this.i=h,this.l=p,this.R=_||1,this.U=new ja(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yv}function yv(){this.i=null,this.g="",this.h=!1}var vv={},Nf={};function Df(u,h,p){u.L=1,u.v=hc(pr(h)),u.m=p,u.P=!0,wv(u,null)}function wv(u,h){u.F=Date.now(),uc(u),u.A=pr(u.v);var p=u.A,_=u.R;Array.isArray(_)||(_=[String(_)]),Ov(p.i,"t",_),u.C=0,p=u.j.J,u.h=new yv,u.g=Jv(u.j,p?h:null,!u.m),0<u.O&&(u.M=new Gk(m(u.Y,u,u.g),u.O)),h=u.U,p=u.g,_=u.ca;var N="readystatechange";Array.isArray(N)||(N&&(uv[0]=N.toString()),N=uv);for(var M=0;M<N.length;M++){var W=Wi(p,N[M],_||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=u.H?y(u.H):{},u.m?(u.u||(u.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,h)):(u.u="GET",u.g.ea(u.A,u.u,null,h)),za(),Kk(u.i,u.u,u.A,u.l,u.R,u.m)}Kr.prototype.ca=function(u){u=u.target;const h=this.M;h&&mr(u)==3?h.j():this.Y(u)},Kr.prototype.Y=function(u){try{if(u==this.g)e:{const Dt=mr(this.g);var h=this.g.Ba();const no=this.g.Z();if(!(3>Dt)&&(Dt!=3||this.g&&(this.h.h||this.g.oa()||Bv(this.g)))){this.J||Dt!=4||h==7||(h==8||0>=no?za(3):za(2)),Of(this);var p=this.g.Z();this.X=p;t:if(Ev(this)){var _=Bv(this.g);u="";var N=_.length,M=mr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yi(this),Ga(this);var W="";break t}this.h.i=new a.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,u+=this.h.i.decode(_[h],{stream:!(M&&h==N-1)});_.length=0,this.h.g+=u,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=p==200,Qk(this.i,this.u,this.A,this.l,this.R,Dt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,St=this.g;if((Se=St.g?St.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(Se)){var _e=Se;break t}}_e=null}if(p=_e)Zs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vf(this,p);else{this.o=!1,this.s=3,zt(12),Yi(this),Ga(this);break e}}if(this.P){p=!0;let Mn;for(;!this.J&&this.C<W.length;)if(Mn=Jk(this,W),Mn==Nf){Dt==4&&(this.s=4,zt(14),p=!1),Zs(this.i,this.l,null,"[Incomplete Response]");break}else if(Mn==vv){this.s=4,zt(15),Zs(this.i,this.l,W,"[Invalid Chunk]"),p=!1;break}else Zs(this.i,this.l,Mn,null),Vf(this,Mn);if(Ev(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Dt!=4||W.length!=0||this.h.h||(this.s=1,zt(16),p=!1),this.o=this.o&&p,!p)Zs(this.i,this.l,W,"[Invalid Chunked Response]"),Yi(this),Ga(this);else if(0<W.length&&!this.W){this.W=!0;var Nt=this.j;Nt.g==this&&Nt.ba&&!Nt.M&&(Nt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Bf(Nt),Nt.M=!0,zt(11))}}else Zs(this.i,this.l,W,null),Vf(this,W);Dt==4&&Yi(this),this.o&&!this.J&&(Dt==4?Kv(this.j,this):(this.o=!1,uc(this)))}else m1(this.g),p==400&&0<W.indexOf("Unknown SID")?(this.s=3,zt(12)):(this.s=0,zt(13)),Yi(this),Ga(this)}}}catch{}finally{}};function Ev(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Jk(u,h){var p=u.C,_=h.indexOf(`
`,p);return _==-1?Nf:(p=Number(h.substring(p,_)),isNaN(p)?vv:(_+=1,_+p>h.length?Nf:(h=h.slice(_,_+p),u.C=_+p,h)))}Kr.prototype.cancel=function(){this.J=!0,Yi(this)};function uc(u){u.S=Date.now()+u.I,Iv(u,u.I)}function Iv(u,h){if(u.B!=null)throw Error("WatchDog timer not null");u.B=$a(m(u.ba,u),h)}function Of(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Kr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Yk(this.i,this.A),this.L!=2&&(za(),zt(17)),Yi(this),this.s=2,Ga(this)):Iv(this,this.S-u)};function Ga(u){u.j.G==0||u.J||Kv(u.j,u)}function Yi(u){Of(u);var h=u.M;h&&typeof h.ma=="function"&&h.ma(),u.M=null,cv(u.U),u.g&&(h=u.g,u.g=null,h.abort(),h.ma())}function Vf(u,h){try{var p=u.j;if(p.G!=0&&(p.g==u||Lf(p.h,u))){if(!u.K&&Lf(p.h,u)&&p.G==3){try{var _=p.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var N=_;if(N[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<u.F)_c(p),mc(p);else break e;jf(p),zt(18)}}else p.za=N[1],0<p.za-p.T&&37500>N[2]&&p.F&&p.v==0&&!p.C&&(p.C=$a(m(p.Za,p),6e3));if(1>=Rv(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Ji(p,11)}else if((u.K||p.g==u)&&_c(p),!w(h))for(N=p.Da.g.parse(h),h=0;h<N.length;h++){let _e=N[h];if(p.T=_e[0],_e=_e[1],p.G==2)if(_e[0]=="c"){p.K=_e[1],p.ia=_e[2];const Nt=_e[3];Nt!=null&&(p.la=Nt,p.j.info("VER="+p.la));const Dt=_e[4];Dt!=null&&(p.Aa=Dt,p.j.info("SVER="+p.Aa));const no=_e[5];no!=null&&typeof no=="number"&&0<no&&(_=1.5*no,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const Mn=u.g;if(Mn){const vc=Mn.g?Mn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vc){var M=_.h;M.g||vc.indexOf("spdy")==-1&&vc.indexOf("quic")==-1&&vc.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Mf(M,M.h),M.h=null))}if(_.D){const zf=Mn.g?Mn.g.getResponseHeader("X-HTTP-Session-Id"):null;zf&&(_.ya=zf,Pe(_.I,_.D,zf))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-u.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var W=u;if(_.qa=Xv(_,_.J?_.ia:null,_.W),W.K){Av(_.h,W);var Se=W,St=_.L;St&&(Se.I=St),Se.B&&(Of(Se),uc(Se)),_.g=W}else Wv(_);0<p.i.length&&gc(p)}else _e[0]!="stop"&&_e[0]!="close"||Ji(p,7);else p.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?Ji(p,7):Uf(p):_e[0]!="noop"&&p.l&&p.l.ta(_e),p.v=0)}}za(4)}catch{}}var Zk=class{constructor(u,h){this.g=u,this.map=h}};function Tv(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sv(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Rv(u){return u.h?1:u.g?u.g.size:0}function Lf(u,h){return u.h?u.h==h:u.g?u.g.has(h):!1}function Mf(u,h){u.g?u.g.add(h):u.h=h}function Av(u,h){u.h&&u.h==h?u.h=null:u.g&&u.g.has(h)&&u.g.delete(h)}Tv.prototype.cancel=function(){if(this.i=Pv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Pv(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let h=u.i;for(const p of u.g.values())h=h.concat(p.D);return h}return k(u.i)}function e1(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var h=[],p=u.length,_=0;_<p;_++)h.push(u[_]);return h}h=[],p=0;for(_ in u)h[p++]=u[_];return h}function t1(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var h=[];u=u.length;for(var p=0;p<u;p++)h.push(p);return h}h=[],p=0;for(const _ in u)h[p++]=_;return h}}}function Cv(u,h){if(u.forEach&&typeof u.forEach=="function")u.forEach(h,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,h,void 0);else for(var p=t1(u),_=e1(u),N=_.length,M=0;M<N;M++)h.call(void 0,_[M],p&&p[M],u)}var kv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function n1(u,h){if(u){u=u.split("&");for(var p=0;p<u.length;p++){var _=u[p].indexOf("="),N=null;if(0<=_){var M=u[p].substring(0,_);N=u[p].substring(_+1)}else M=u[p];h(M,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Xi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Xi){this.h=u.h,cc(this,u.j),this.o=u.o,this.g=u.g,dc(this,u.s),this.l=u.l;var h=u.i,p=new Ka;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),xv(this,p),this.m=u.m}else u&&(h=String(u).match(kv))?(this.h=!1,cc(this,h[1]||"",!0),this.o=Wa(h[2]||""),this.g=Wa(h[3]||"",!0),dc(this,h[4]),this.l=Wa(h[5]||"",!0),xv(this,h[6]||"",!0),this.m=Wa(h[7]||"")):(this.h=!1,this.i=new Ka(null,this.h))}Xi.prototype.toString=function(){var u=[],h=this.j;h&&u.push(Ha(h,bv,!0),":");var p=this.g;return(p||h=="file")&&(u.push("//"),(h=this.o)&&u.push(Ha(h,bv,!0),"@"),u.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&u.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&u.push("/"),u.push(Ha(p,p.charAt(0)=="/"?s1:i1,!0))),(p=this.i.toString())&&u.push("?",p),(p=this.m)&&u.push("#",Ha(p,a1)),u.join("")};function pr(u){return new Xi(u)}function cc(u,h,p){u.j=p?Wa(h,!0):h,u.j&&(u.j=u.j.replace(/:$/,""))}function dc(u,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);u.s=h}else u.s=null}function xv(u,h,p){h instanceof Ka?(u.i=h,l1(u.i,u.h)):(p||(h=Ha(h,o1)),u.i=new Ka(h,u.h))}function Pe(u,h,p){u.i.set(h,p)}function hc(u){return Pe(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Wa(u,h){return u?h?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ha(u,h,p){return typeof u=="string"?(u=encodeURI(u).replace(h,r1),p&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function r1(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var bv=/[#\/\?@]/g,i1=/[#\?:]/g,s1=/[#\?]/g,o1=/[#\?@]/g,a1=/#/g;function Ka(u,h){this.h=this.g=null,this.i=u||null,this.j=!!h}function Qr(u){u.g||(u.g=new Map,u.h=0,u.i&&n1(u.i,function(h,p){u.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Ka.prototype,t.add=function(u,h){Qr(this),this.i=null,u=eo(this,u);var p=this.g.get(u);return p||this.g.set(u,p=[]),p.push(h),this.h+=1,this};function Nv(u,h){Qr(u),h=eo(u,h),u.g.has(h)&&(u.i=null,u.h-=u.g.get(h).length,u.g.delete(h))}function Dv(u,h){return Qr(u),h=eo(u,h),u.g.has(h)}t.forEach=function(u,h){Qr(this),this.g.forEach(function(p,_){p.forEach(function(N){u.call(h,N,_,this)},this)},this)},t.na=function(){Qr(this);const u=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let _=0;_<h.length;_++){const N=u[_];for(let M=0;M<N.length;M++)p.push(h[_])}return p},t.V=function(u){Qr(this);let h=[];if(typeof u=="string")Dv(this,u)&&(h=h.concat(this.g.get(eo(this,u))));else{u=Array.from(this.g.values());for(let p=0;p<u.length;p++)h=h.concat(u[p])}return h},t.set=function(u,h){return Qr(this),this.i=null,u=eo(this,u),Dv(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[h]),this.h+=1,this},t.get=function(u,h){return u?(u=this.V(u),0<u.length?String(u[0]):h):h};function Ov(u,h,p){Nv(u,h),0<p.length&&(u.i=null,u.g.set(eo(u,h),k(p)),u.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var _=h[p];const M=encodeURIComponent(String(_)),W=this.V(_);for(_=0;_<W.length;_++){var N=M;W[_]!==""&&(N+="="+encodeURIComponent(String(W[_]))),u.push(N)}}return this.i=u.join("&")};function eo(u,h){return h=String(h),u.j&&(h=h.toLowerCase()),h}function l1(u,h){h&&!u.j&&(Qr(u),u.i=null,u.g.forEach(function(p,_){var N=_.toLowerCase();_!=N&&(Nv(this,_),Ov(this,N,p))},u)),u.j=h}function u1(u,h){const p=new qa;if(a.Image){const _=new Image;_.onload=v(Yr,p,"TestLoadImage: loaded",!0,h,_),_.onerror=v(Yr,p,"TestLoadImage: error",!1,h,_),_.onabort=v(Yr,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=v(Yr,p,"TestLoadImage: timeout",!1,h,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=u}else h(!1)}function c1(u,h){const p=new qa,_=new AbortController,N=setTimeout(()=>{_.abort(),Yr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(u,{signal:_.signal}).then(M=>{clearTimeout(N),M.ok?Yr(p,"TestPingServer: ok",!0,h):Yr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Yr(p,"TestPingServer: error",!1,h)})}function Yr(u,h,p,_,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),_(p)}catch{}}function d1(){this.g=new Hk}function h1(u,h,p){const _=p||"";try{Cv(u,function(N,M){let W=N;c(N)&&(W=Pf(N)),h.push(_+M+"="+encodeURIComponent(W))})}catch(N){throw h.push(_+"type="+encodeURIComponent("_badmap")),N}}function Qa(u){this.l=u.Ub||null,this.j=u.eb||!1}P(Qa,Cf),Qa.prototype.g=function(){return new fc(this.l,this.j)},Qa.prototype.i=function(u){return function(){return u}}({});function fc(u,h){ne.call(this),this.D=u,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(fc,ne),t=fc.prototype,t.open=function(u,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=h,this.readyState=1,Xa(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(h.body=u),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ya(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Xa(this)),this.g&&(this.readyState=3,Xa(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vv(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vv(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var h=u.value?u.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!u.done}))&&(this.response=this.responseText+=h)}u.done?Ya(this):Xa(this),this.readyState==3&&Vv(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,Ya(this))},t.Qa=function(u){this.g&&(this.response=u,Ya(this))},t.ga=function(){this.g&&Ya(this)};function Ya(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Xa(u)}t.setRequestHeader=function(u,h){this.u.append(u,h)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,u.push(p[0]+": "+p[1]),p=h.next();return u.join(`\r
`)};function Xa(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(fc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Lv(u){let h="";return F(u,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function Ff(u,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Lv(p),typeof u=="string"?p!=null&&encodeURIComponent(String(p)):Pe(u,h,p))}function We(u){ne.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(We,ne);var f1=/^https?$/i,p1=["POST","PUT"];t=We.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);h=h?h.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():bf.g(),this.v=this.o?dv(this.o):dv(bf),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(u),!0),this.B=!1}catch(M){Mv(this,M);return}if(u=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var N in _)p.set(N,_[N]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const M of _.keys())p.set(M,_.get(M));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),N=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(p1,h,void 0))||_||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,W]of p)this.g.setRequestHeader(M,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jv(this),this.u=!0,this.g.send(u),this.u=!1}catch(M){Mv(this,M)}};function Mv(u,h){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=h,u.m=5,Fv(u),pc(u)}function Fv(u){u.A||(u.A=!0,Ge(u,"complete"),Ge(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Ge(this,"complete"),Ge(this,"abort"),pc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pc(this,!0)),We.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Uv(this):this.bb())},t.bb=function(){Uv(this)};function Uv(u){if(u.h&&typeof o<"u"&&(!u.v[1]||mr(u)!=4||u.Z()!=2)){if(u.u&&mr(u)==4)av(u.Ea,0,u);else if(Ge(u,"readystatechange"),mr(u)==4){u.h=!1;try{const W=u.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=W===0){var N=String(u.D).match(kv)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),_=!f1.test(N?N.toLowerCase():"")}p=_}if(p)Ge(u,"complete"),Ge(u,"success");else{u.m=6;try{var M=2<mr(u)?u.g.statusText:""}catch{M=""}u.l=M+" ["+u.Z()+"]",Fv(u)}}finally{pc(u)}}}}function pc(u,h){if(u.g){jv(u);const p=u.g,_=u.v[0]?()=>{}:null;u.g=null,u.v=null,h||Ge(u,"ready");try{p.onreadystatechange=_}catch{}}}function jv(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function mr(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<mr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var h=this.g.responseText;return u&&h.indexOf(u)==0&&(h=h.substring(u.length)),Wk(h)}};function Bv(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function m1(u){const h={};u=(u.g&&2<=mr(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<u.length;_++){if(w(u[_]))continue;var p=C(u[_]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=h[N]||[];h[N]=M,M.push(p)}E(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ja(u,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[u]||h}function zv(u){this.Aa=0,this.i=[],this.j=new qa,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ja("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ja("baseRetryDelayMs",5e3,u),this.cb=Ja("retryDelaySeedMs",1e4,u),this.Wa=Ja("forwardChannelMaxRetries",2,u),this.wa=Ja("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Tv(u&&u.concurrentRequestLimit),this.Da=new d1,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=zv.prototype,t.la=8,t.G=1,t.connect=function(u,h,p,_){zt(0),this.W=u,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=Xv(this,null,this.W),gc(this)};function Uf(u){if($v(u),u.G==3){var h=u.U++,p=pr(u.I);if(Pe(p,"SID",u.K),Pe(p,"RID",h),Pe(p,"TYPE","terminate"),Za(u,p),h=new Kr(u,u.j,h),h.L=2,h.v=hc(pr(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=Jv(h.j,null),h.g.ea(h.v)),h.F=Date.now(),uc(h)}Yv(u)}function mc(u){u.g&&(Bf(u),u.g.cancel(),u.g=null)}function $v(u){mc(u),u.u&&(a.clearTimeout(u.u),u.u=null),_c(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function gc(u){if(!Sv(u.h)&&!u.s){u.s=!0;var h=u.Ga;$e||te(),G||($e(),G=!0),ee.add(h,u),u.B=0}}function g1(u,h){return Rv(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=h.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=$a(m(u.Ga,u,h),Qv(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const N=new Kr(this,this.j,u);let M=this.o;if(this.S&&(M?(M=y(M),R(M,this.S)):M=this.S),this.m!==null||this.O||(N.H=M,M=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Gv(this,N,h),p=pr(this.I),Pe(p,"RID",u),Pe(p,"CVER",22),this.D&&Pe(p,"X-HTTP-Session-Id",this.D),Za(this,p),M&&(this.O?h="headers="+encodeURIComponent(String(Lv(M)))+"&"+h:this.m&&Ff(p,this.m,M)),Mf(this.h,N),this.Ua&&Pe(p,"TYPE","init"),this.P?(Pe(p,"$req",h),Pe(p,"SID","null"),N.T=!0,Df(N,p,null)):Df(N,p,h),this.G=2}}else this.G==3&&(u?qv(this,u):this.i.length==0||Sv(this.h)||qv(this))};function qv(u,h){var p;h?p=h.l:p=u.U++;const _=pr(u.I);Pe(_,"SID",u.K),Pe(_,"RID",p),Pe(_,"AID",u.T),Za(u,_),u.m&&u.o&&Ff(_,u.m,u.o),p=new Kr(u,u.j,p,u.B+1),u.m===null&&(p.H=u.o),h&&(u.i=h.D.concat(u.i)),h=Gv(u,p,1e3),p.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Mf(u.h,p),Df(p,_,h)}function Za(u,h){u.H&&F(u.H,function(p,_){Pe(h,_,p)}),u.l&&Cv({},function(p,_){Pe(h,_,p)})}function Gv(u,h,p){p=Math.min(u.i.length,p);var _=u.l?m(u.l.Na,u.l,u):null;e:{var N=u.i;let M=-1;for(;;){const W=["count="+p];M==-1?0<p?(M=N[0].g,W.push("ofs="+M)):M=0:W.push("ofs="+M);let Se=!0;for(let St=0;St<p;St++){let _e=N[St].g;const Nt=N[St].map;if(_e-=M,0>_e)M=Math.max(0,N[St].g-100),Se=!1;else try{h1(Nt,W,"req"+_e+"_")}catch{_&&_(Nt)}}if(Se){_=W.join("&");break e}}}return u=u.i.splice(0,p),h.D=u,_}function Wv(u){if(!u.g&&!u.u){u.Y=1;var h=u.Fa;$e||te(),G||($e(),G=!0),ee.add(h,u),u.v=0}}function jf(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=$a(m(u.Fa,u),Qv(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,Hv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=$a(m(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,zt(10),mc(this),Hv(this))};function Bf(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function Hv(u){u.g=new Kr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var h=pr(u.qa);Pe(h,"RID","rpc"),Pe(h,"SID",u.K),Pe(h,"AID",u.T),Pe(h,"CI",u.F?"0":"1"),!u.F&&u.ja&&Pe(h,"TO",u.ja),Pe(h,"TYPE","xmlhttp"),Za(u,h),u.m&&u.o&&Ff(h,u.m,u.o),u.L&&(u.g.I=u.L);var p=u.g;u=u.ia,p.L=1,p.v=hc(pr(h)),p.m=null,p.P=!0,wv(p,u)}t.Za=function(){this.C!=null&&(this.C=null,mc(this),jf(this),zt(19))};function _c(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function Kv(u,h){var p=null;if(u.g==h){_c(u),Bf(u),u.g=null;var _=2}else if(Lf(u.h,h))p=h.D,Av(u.h,h),_=1;else return;if(u.G!=0){if(h.o)if(_==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var N=u.B;_=oc(),Ge(_,new gv(_,p)),gc(u)}else Wv(u);else if(N=h.s,N==3||N==0&&0<h.X||!(_==1&&g1(u,h)||_==2&&jf(u)))switch(p&&0<p.length&&(h=u.h,h.i=h.i.concat(p)),N){case 1:Ji(u,5);break;case 4:Ji(u,10);break;case 3:Ji(u,6);break;default:Ji(u,2)}}}function Qv(u,h){let p=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(p*=2),p*h}function Ji(u,h){if(u.j.info("Error code "+h),h==2){var p=m(u.fb,u),_=u.Xa;const N=!_;_=new Xi(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||cc(_,"https"),hc(_),N?u1(_.toString(),p):c1(_.toString(),p)}else zt(2);u.G=0,u.l&&u.l.sa(h),Yv(u),$v(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),zt(2)):(this.j.info("Failed to ping google.com"),zt(1))};function Yv(u){if(u.G=0,u.ka=[],u.l){const h=Pv(u.h);(h.length!=0||u.i.length!=0)&&(D(u.ka,h),D(u.ka,u.i),u.h.i.length=0,k(u.i),u.i.length=0),u.l.ra()}}function Xv(u,h,p){var _=p instanceof Xi?pr(p):new Xi(p);if(_.g!="")h&&(_.g=h+"."+_.g),dc(_,_.s);else{var N=a.location;_=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var M=new Xi(null);_&&cc(M,_),h&&(M.g=h),N&&dc(M,N),p&&(M.l=p),_=M}return p=u.D,h=u.ya,p&&h&&Pe(_,p,h),Pe(_,"VER",u.la),Za(u,_),_}function Jv(u,h,p){if(h&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=u.Ca&&!u.pa?new We(new Qa({eb:p})):new We(u.pa),h.Ha(u.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zv(){}t=Zv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function yc(){}yc.prototype.g=function(u,h){return new hn(u,h)};function hn(u,h){ne.call(this),this.g=new zv(h),this.l=u,this.h=h&&h.messageUrlParams||null,u=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(u?u["X-WebChannel-Content-Type"]=h.messageContentType:u={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(u?u["X-WebChannel-Client-Profile"]=h.va:u={"X-WebChannel-Client-Profile":h.va}),this.g.S=u,(u=h&&h.Sb)&&!w(u)&&(this.g.m=u),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,u=this.h,u!==null&&h in u&&(u=this.h,h in u&&delete u[h])),this.j=new to(this)}P(hn,ne),hn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},hn.prototype.close=function(){Uf(this.g)},hn.prototype.o=function(u){var h=this.g;if(typeof u=="string"){var p={};p.__data__=u,u=p}else this.u&&(p={},p.__data__=Pf(u),u=p);h.i.push(new Zk(h.Ya++,u)),h.G==3&&gc(h)},hn.prototype.N=function(){this.g.l=null,delete this.j,Uf(this.g),delete this.g,hn.aa.N.call(this)};function ew(u){kf.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var h=u.__sm__;if(h){e:{for(const p in h){u=p;break e}u=void 0}(this.i=u)&&(u=this.i,h=h!==null&&u in h?h[u]:void 0),this.data=h}else this.data=u}P(ew,kf);function tw(){xf.call(this),this.status=1}P(tw,xf);function to(u){this.g=u}P(to,Zv),to.prototype.ua=function(){Ge(this.g,"a")},to.prototype.ta=function(u){Ge(this.g,new ew(u))},to.prototype.sa=function(u){Ge(this.g,new tw)},to.prototype.ra=function(){Ge(this.g,"b")},yc.prototype.createWebChannel=yc.prototype.g,hn.prototype.send=hn.prototype.o,hn.prototype.open=hn.prototype.m,hn.prototype.close=hn.prototype.close,cR=function(){return new yc},uR=function(){return oc()},lR=Qi,Om={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ac.NO_ERROR=0,ac.TIMEOUT=8,ac.HTTP_ERROR=6,ld=ac,_v.COMPLETE="complete",aR=_v,hv.EventType=Ba,Ba.OPEN="a",Ba.CLOSE="b",Ba.ERROR="c",Ba.MESSAGE="d",ne.prototype.listen=ne.prototype.K,Il=hv,oR=Qa,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,sR=We}).apply(typeof Mc<"u"?Mc:typeof self<"u"?self:typeof window<"u"?window:{});const EE="@firebase/firestore";/**
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
 */let _t=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
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
 */let Sa="10.12.3";/**
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
 */const Pi=new Vh("@firebase/firestore");function po(){return Pi.logLevel}function mD(t){Pi.setLogLevel(t)}function z(t,...e){if(Pi.logLevel<=ae.DEBUG){const n=e.map(T_);Pi.debug(`Firestore (${Sa}): ${t}`,...n)}}function tt(t,...e){if(Pi.logLevel<=ae.ERROR){const n=e.map(T_);Pi.error(`Firestore (${Sa}): ${t}`,...n)}}function Wn(t,...e){if(Pi.logLevel<=ae.WARN){const n=e.map(T_);Pi.warn(`Firestore (${Sa}): ${t}`,...n)}}function T_(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${Sa}) INTERNAL ASSERTION FAILED: `+t;throw tt(e),new Error(e)}function J(t,e){t||Q()}function gD(t,e){t||Q()}function K(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Ut{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class dR{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _D{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class yD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class vD{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new vt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new dR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new _t(e)}}class wD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ED{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new wD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ID{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(J(typeof n.token=="string"),this.R=n.token,new ID(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function SD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class hR{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=SD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function na(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function fR(t){return t+"\0"}/**
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
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Ve(0,0))}static max(){return new Z(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class fu{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ce extends fu{construct(e,n,r){return new ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ce(n)}static emptyPath(){return new ce([])}}const RD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class De extends fu{construct(e,n,r){return new De(e,n,r)}static isValidIdentifier(e){return RD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),De.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new De(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new j(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new j(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new j(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new De(n)}static emptyPath(){return new De([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(ce.fromString(e))}static fromName(e){return new H(ce.fromString(e).popFirst(5))}static empty(){return new H(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new ce(e.slice()))}}/**
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
 */class Kd{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Vm(t){return t.fields.find(e=>e.kind===2)}function rs(t){return t.fields.filter(e=>e.kind!==2)}Kd.UNKNOWN_ID=-1;class ud{constructor(e,n){this.fieldPath=e,this.kind=n}}class pu{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new pu(0,En.min())}}function pR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new En(i,H.empty(),e)}function mR(t){return new En(t.readTime,t.key,-1)}class En{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new En(Z.min(),H.empty(),-1)}static max(){return new En(Z.max(),H.empty(),-1)}}function S_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
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
 */const gR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _R{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ui(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==gR)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class Mh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new vt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Ml(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=R_(r.target.error);this.V.reject(new Ml(e,i))}}static open(e,n,r,i){try{return new Mh(n,e.transaction(i,r))}catch(s){throw new Ml(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(z("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new PD(n)}}class ar{constructor(e,n,r){this.name=e,this.version=n,this.p=r,ar.S(Le())===12.2&&tt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return z("SimpleDb","Removing database:",e),ss(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!cu())return!1;if(ar.C())return!0;const e=Le(),n=ar.S(e),r=0<n&&n<10,i=yR(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(z("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Ml(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new j(L.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new j(L.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ml(e,o))},i.onupgradeneeded=s=>{z("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{z("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Mh.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),V.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(z("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function yR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class AD{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return ss(this.B.delete())}}class Ml extends j{constructor(e,n){super(L.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function ji(t){return t.name==="IndexedDbTransactionError"}class PD{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(z("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(z("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ss(r)}add(e){return z("SimpleDb","ADD",this.store.name,e,e),ss(this.store.add(e))}get(e){return ss(this.store.get(e)).next(n=>(n===void 0&&(n=null),z("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return z("SimpleDb","DELETE",this.store.name,e),ss(this.store.delete(e))}count(){return z("SimpleDb","COUNT",this.store.name),ss(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new V((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,l)=>{o.push(l)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new V((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){z("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new V((r,i)=>{n.onerror=s=>{const o=R_(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new V((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new AD(a),c=n(a.primaryKey,a.value,l);if(c instanceof V){const d=c.catch(f=>(l.done(),V.reject(f)));r.push(d)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>V.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ss(t){return new V((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=R_(r.target.error);n(i)}})}let IE=!1;function R_(t){const e=ar.S(Le());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new j("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return IE||(IE=!0,setTimeout(()=>{throw r},0)),r}}return t}class CD{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){z("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{z("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){ji(n)?z("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await Ui(n)}await this.X(6e4)})}}class kD{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return V.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return z("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(z("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=mR(s);S_(o,r)>0&&(r=o)}),new En(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class sn{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}sn.oe=-1;function Vu(t){return t==null}function mu(t){return t===0&&1/t==-1/0}function vR(t){return typeof t=="number"&&Number.isInteger(t)&&!mu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Qt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=TE(e)),e=xD(t.get(n),e);return TE(e)}function xD(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function TE(t){return t+""}function nr(t){const e=t.length;if(J(e>=2),e===2)return J(t.charAt(0)===""&&t.charAt(1)===""),ce.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&Q(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:Q()}s=o+2}return new ce(r)}/**
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
 */const SE=["userId","batchId"];/**
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
 */function cd(t,e){return[t,Qt(e)]}function wR(t,e,n){return[t,Qt(e),n]}const bD={},ND=["prefixPath","collectionGroup","readTime","documentId"],DD=["prefixPath","collectionGroup","documentId"],OD=["collectionGroup","readTime","prefixPath","documentId"],VD=["canonicalId","targetId"],LD=["targetId","path"],MD=["path","targetId"],FD=["collectionId","parent"],UD=["indexId","uid"],jD=["uid","sequenceNumber"],BD=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],zD=["indexId","uid","orderedDocumentKey"],$D=["userId","collectionPath","documentId"],qD=["userId","collectionPath","largestBatchId"],GD=["userId","collectionGroup","largestBatchId"],ER=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],WD=[...ER,"documentOverlays"],IR=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],TR=IR,SR=[...TR,"indexConfiguration","indexState","indexEntries"],HD=SR;/**
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
 */class Lm extends _R{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function It(t,e){const n=K(t);return ar.F(n._e,e)}/**
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
 */function RE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function RR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||At.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,At.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,At.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fc(this.root,e,this.comparator,!0)}}class Fc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class At{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??At.RED,this.left=i??At.EMPTY,this.right=s??At.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new At(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return At.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new At(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Te{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new AE(this.data.getIterator())}getIteratorFrom(e){return new AE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Te)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Te(this.comparator);return n.data=e,n}}class AE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function io(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class on{constructor(e){this.fields=e,e.sort(De.comparator)}static empty(){return new on([])}unionWith(e){let n=new Te(De.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new on(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return na(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class AR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function KD(){return typeof atob<"u"}/**
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
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new AR("Invalid base64 string: "+s):s}}(e);return new ft(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const QD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vr(t){if(J(!!t),typeof t=="string"){let e=0;const n=QD.exec(t);if(J(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ke(t.seconds),nanos:Ke(t.nanos)}}function Ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ci(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
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
 */function Fh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function A_(t){const e=t.mapValue.fields.__previous_value__;return Fh(e)?A_(e):e}function gu(t){const e=Vr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
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
 */class YD{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class ki{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ki("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ki&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const di={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},dd={nullValue:"NULL_VALUE"};function xs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Fh(t)?4:PR(t)?9007199254740991:10:Q()}function cr(t,e){if(t===e)return!0;const n=xs(t);if(n!==xs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gu(t).isEqual(gu(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Vr(i.timestampValue),a=Vr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ci(i.bytesValue).isEqual(Ci(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ke(i.geoPointValue.latitude)===Ke(s.geoPointValue.latitude)&&Ke(i.geoPointValue.longitude)===Ke(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ke(i.integerValue)===Ke(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ke(i.doubleValue),a=Ke(s.doubleValue);return o===a?mu(o)===mu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return na(t.arrayValue.values||[],e.arrayValue.values||[],cr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(RE(o)!==RE(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!cr(o[l],a[l])))return!1;return!0}(t,e);default:return Q()}}function _u(t,e){return(t.values||[]).find(n=>cr(n,e))!==void 0}function xi(t,e){if(t===e)return 0;const n=xs(t),r=xs(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ke(s.integerValue||s.doubleValue),l=Ke(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return PE(t.timestampValue,e.timestampValue);case 4:return PE(gu(t),gu(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ci(s),l=Ci(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const d=re(a[c],l[c]);if(d!==0)return d}return re(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=re(Ke(s.latitude),Ke(o.latitude));return a!==0?a:re(Ke(s.longitude),Ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const d=xi(a[c],l[c]);if(d)return d}return re(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===di.mapValue&&o===di.mapValue)return 0;if(s===di.mapValue)return 1;if(o===di.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},d=Object.keys(c);l.sort(),d.sort();for(let f=0;f<l.length&&f<d.length;++f){const m=re(l[f],d[f]);if(m!==0)return m;const v=xi(a[l[f]],c[d[f]]);if(v!==0)return v}return re(l.length,d.length)}(t.mapValue,e.mapValue);default:throw Q()}}function PE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=Vr(t),r=Vr(e),i=re(n.seconds,r.seconds);return i!==0?i:re(n.nanos,r.nanos)}function ra(t){return Mm(t)}function Mm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ci(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Mm(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Mm(n.fields[o])}`;return i+"}"}(t.mapValue):Q()}function bs(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Fm(t){return!!t&&"integerValue"in t}function yu(t){return!!t&&"arrayValue"in t}function CE(t){return!!t&&"nullValue"in t}function kE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function hd(t){return!!t&&"mapValue"in t}function Fl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Gs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Fl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function PR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function XD(t){return"nullValue"in t?dd:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?bs(ki.empty(),H.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:Q()}function JD(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?bs(ki.empty(),H.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?di:Q()}function xE(t,e){const n=xi(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function bE(t,e){const n=xi(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!hd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fl(n)}setAll(e){let n=De.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Fl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());hd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];hd(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Gs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Pt(Fl(this.value))}}function CR(t){const e=[];return Gs(t.fields,(n,r)=>{const i=new De([n]);if(hd(r)){const s=CR(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new on(e)}/**
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
 */class ke{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ke(e,0,Z.min(),Z.min(),Z.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,i){return new ke(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new ke(e,2,n,Z.min(),Z.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new ke(e,3,n,Z.min(),Z.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bi{constructor(e,n){this.position=e,this.inclusive=n}}function NE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=xi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function DE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class vu{constructor(e,n="asc"){this.field=e,this.dir=n}}function ZD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class kR{}class de extends kR{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new eO(e,n,r):n==="array-contains"?new rO(e,r):n==="in"?new VR(e,r):n==="not-in"?new iO(e,r):n==="array-contains-any"?new sO(e,r):new de(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new tO(e,r):new nO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(xi(n,this.value)):n!==null&&xs(this.value)===xs(n)&&this.matchesComparison(xi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ee extends kR{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Ee(e,n)}matches(e){return ia(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ia(t){return t.op==="and"}function Um(t){return t.op==="or"}function P_(t){return xR(t)&&ia(t)}function xR(t){for(const e of t.filters)if(e instanceof Ee)return!1;return!0}function jm(t){if(t instanceof de)return t.field.canonicalString()+t.op.toString()+ra(t.value);if(P_(t))return t.filters.map(e=>jm(e)).join(",");{const e=t.filters.map(n=>jm(n)).join(",");return`${t.op}(${e})`}}function bR(t,e){return t instanceof de?function(r,i){return i instanceof de&&r.op===i.op&&r.field.isEqual(i.field)&&cr(r.value,i.value)}(t,e):t instanceof Ee?function(r,i){return i instanceof Ee&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&bR(o,i.filters[a]),!0):!1}(t,e):void Q()}function NR(t,e){const n=t.filters.concat(e);return Ee.create(n,t.op)}function DR(t){return t instanceof de?function(n){return`${n.field.canonicalString()} ${n.op} ${ra(n.value)}`}(t):t instanceof Ee?function(n){return n.op.toString()+" {"+n.getFilters().map(DR).join(" ,")+"}"}(t):"Filter"}class eO extends de{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class tO extends de{constructor(e,n){super(e,"in",n),this.keys=OR("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class nO extends de{constructor(e,n){super(e,"not-in",n),this.keys=OR("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function OR(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class rO extends de{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yu(n)&&_u(n.arrayValue,this.value)}}class VR extends de{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_u(this.value.arrayValue,n)}}class iO extends de{constructor(e,n){super(e,"not-in",n)}matches(e){if(_u(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_u(this.value.arrayValue,n)}}class sO extends de{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_u(this.value.arrayValue,r))}}/**
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
 */class oO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Bm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new oO(t,e,n,r,i,s,o)}function Ns(t){const e=K(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>jm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Vu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ra(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ra(r)).join(",")),e.ue=n}return e.ue}function Lu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ZD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!bR(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!DE(t.startAt,e.startAt)&&DE(t.endAt,e.endAt)}function Qd(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Yd(t,e){return t.filters.filter(n=>n instanceof de&&n.field.isEqual(e))}function OE(t,e,n){let r=dd,i=!0;for(const s of Yd(t,e)){let o=dd,a=!0;switch(s.op){case"<":case"<=":o=XD(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=dd}xE({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];xE({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function VE(t,e,n){let r=di,i=!0;for(const s of Yd(t,e)){let o=di,a=!0;switch(s.op){case">=":case">":o=JD(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=di}bE({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];bE({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Br{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function LR(t,e,n,r,i,s,o,a){return new Br(t,e,n,r,i,s,o,a)}function Ra(t){return new Br(t)}function LE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function C_(t){return t.collectionGroup!==null}function Uo(t){const e=K(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Te(De.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new vu(s,r))}),n.has(De.keyField().canonicalString())||e.ce.push(new vu(De.keyField(),r))}return e.ce}function Yt(t){const e=K(t);return e.le||(e.le=aO(e,Uo(t))),e.le}function aO(t,e){if(t.limitType==="F")return Bm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new vu(i.field,s)});const n=t.endAt?new bi(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new bi(t.startAt.position,t.startAt.inclusive):null;return Bm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function zm(t,e){const n=t.filters.concat([e]);return new Br(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Xd(t,e,n){return new Br(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Mu(t,e){return Lu(Yt(t),Yt(e))&&t.limitType===e.limitType}function MR(t){return`${Ns(Yt(t))}|lt:${t.limitType}`}function mo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>DR(i)).join(", ")}]`),Vu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ra(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ra(i)).join(",")),`Target(${r})`}(Yt(t))}; limitType=${t.limitType})`}function Fu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Uo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=NE(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Uo(r),i)||r.endAt&&!function(o,a,l){const c=NE(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Uo(r),i))}(t,e)}function FR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function UR(t){return(e,n)=>{let r=!1;for(const i of Uo(t)){const s=lO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function lO(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?xi(l,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */class Bi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Gs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return RR(this.inner)}size(){return this.innerSize}}/**
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
 */const uO=new Ae(H.comparator);function an(){return uO}const jR=new Ae(H.comparator);function Tl(...t){let e=jR;for(const n of t)e=e.insert(n.key,n);return e}function BR(t){let e=jR;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function rr(){return Ul()}function zR(){return Ul()}function Ul(){return new Bi(t=>t.toString(),(t,e)=>t.isEqual(e))}const cO=new Ae(H.comparator),dO=new Te(H.comparator);function ie(...t){let e=dO;for(const n of t)e=e.add(n);return e}const hO=new Te(re);function k_(){return hO}/**
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
 */function $R(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mu(e)?"-0":e}}function qR(t){return{integerValue:""+t}}function GR(t,e){return vR(e)?qR(e):$R(t,e)}/**
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
 */class Uh{constructor(){this._=void 0}}function fO(t,e,n){return t instanceof sa?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Fh(s)&&(s=A_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ds?HR(t,e):t instanceof Os?KR(t,e):function(i,s){const o=WR(i,s),a=ME(o)+ME(i.Pe);return Fm(o)&&Fm(i.Pe)?qR(a):$R(i.serializer,a)}(t,e)}function pO(t,e,n){return t instanceof Ds?HR(t,e):t instanceof Os?KR(t,e):n}function WR(t,e){return t instanceof oa?function(r){return Fm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class sa extends Uh{}class Ds extends Uh{constructor(e){super(),this.elements=e}}function HR(t,e){const n=QR(e);for(const r of t.elements)n.some(i=>cr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Os extends Uh{constructor(e){super(),this.elements=e}}function KR(t,e){let n=QR(e);for(const r of t.elements)n=n.filter(i=>!cr(i,r));return{arrayValue:{values:n}}}class oa extends Uh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function ME(t){return Ke(t.integerValue||t.doubleValue)}function QR(t){return yu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Uu{constructor(e,n){this.field=e,this.transform=n}}function mO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ds&&i instanceof Ds||r instanceof Os&&i instanceof Os?na(r.elements,i.elements,cr):r instanceof oa&&i instanceof oa?cr(r.Pe,i.Pe):r instanceof sa&&i instanceof sa}(t.transform,e.transform)}class gO{constructor(e,n){this.version=e,this.transformResults=n}}class Oe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Oe}static exists(e){return new Oe(void 0,e)}static updateTime(e){return new Oe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fd(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class jh{}function YR(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Pa(t.key,Oe.none()):new Aa(t.key,t.data,Oe.none());{const n=t.data,r=Pt.empty();let i=new Te(De.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new zr(t.key,r,new on(i.toArray()),Oe.none())}}function _O(t,e,n){t instanceof Aa?function(i,s,o){const a=i.value.clone(),l=UE(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof zr?function(i,s,o){if(!fd(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=UE(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(XR(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function jl(t,e,n,r){return t instanceof Aa?function(s,o,a,l){if(!fd(s.precondition,o))return a;const c=s.value.clone(),d=jE(s.fieldTransforms,l,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof zr?function(s,o,a,l){if(!fd(s.precondition,o))return a;const c=jE(s.fieldTransforms,l,o),d=o.data;return d.setAll(XR(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return fd(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function yO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=WR(r.transform,i||null);s!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,s))}return n||null}function FE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&na(r,i,(s,o)=>mO(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Aa extends jh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zr extends jh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function XR(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function UE(t,e,n){const r=new Map;J(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,pO(o,a,n[i]))}return r}function jE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,fO(s,o,e))}return r}class Pa extends jh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class x_ extends jh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class b_{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&_O(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=jl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=jl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=zR();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=YR(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&na(this.mutations,e.mutations,(n,r)=>FE(n,r))&&na(this.baseMutations,e.baseMutations,(n,r)=>FE(n,r))}}class N_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){J(e.mutations.length===r.length);let i=function(){return cO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new N_(e,n,r,i)}}/**
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
 */class D_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class vO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var it,he;function JR(t){switch(t){default:return Q();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function ZR(t){if(t===void 0)return tt("GRPC error has no .code"),L.UNKNOWN;switch(t){case it.OK:return L.OK;case it.CANCELLED:return L.CANCELLED;case it.UNKNOWN:return L.UNKNOWN;case it.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case it.INTERNAL:return L.INTERNAL;case it.UNAVAILABLE:return L.UNAVAILABLE;case it.UNAUTHENTICATED:return L.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case it.NOT_FOUND:return L.NOT_FOUND;case it.ALREADY_EXISTS:return L.ALREADY_EXISTS;case it.PERMISSION_DENIED:return L.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case it.ABORTED:return L.ABORTED;case it.OUT_OF_RANGE:return L.OUT_OF_RANGE;case it.UNIMPLEMENTED:return L.UNIMPLEMENTED;case it.DATA_LOSS:return L.DATA_LOSS;default:return Q()}}(he=it||(it={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function eA(){return new TextEncoder}/**
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
 */const wO=new vs([4294967295,4294967295],0);function BE(t){const e=eA().encode(t),n=new iR;return n.update(e),new Uint8Array(n.digest())}function zE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new vs([n,r],0),new vs([i,s],0)]}class O_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Sl(`Invalid padding: ${n}`);if(r<0)throw new Sl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Sl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Sl(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=vs.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(vs.fromNumber(r)));return i.compare(wO)===1&&(i=new vs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=BE(e),[r,i]=zE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new O_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=BE(e),[r,i]=zE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Sl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ju{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Bu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ju(Z.min(),i,new Ae(re),an(),ie())}}class Bu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Bu(r,n,ie(),ie(),ie())}}/**
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
 */class pd{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class tA{constructor(e,n){this.targetId=e,this.me=n}}class nA{constructor(e,n,r=ft.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class $E{constructor(){this.fe=0,this.ge=GE(),this.pe=ft.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ie(),n=ie(),r=ie();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new Bu(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=GE()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,J(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class EO{constructor(e){this.Le=e,this.Be=new Map,this.ke=an(),this.qe=qE(),this.Qe=new Ae(re)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Qd(s))if(r===0){const o=new H(s.path);this.Ue(n,o,ke.newNoDocument(o,Z.min()))}else J(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ci(r).toUint8Array()}catch(l){if(l instanceof AR)return Wn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new O_(o,i,s)}catch(l){return Wn(l instanceof Sl?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Qd(a.target)){const l=new H(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,ke.newNoDocument(l,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=ie();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new ju(e,n,this.Qe,this.ke,r);return this.ke=an(),this.qe=qE(),this.Qe=new Ae(re),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new $E,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Te(re),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new $E),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function qE(){return new Ae(H.comparator)}function GE(){return new Ae(H.comparator)}const IO={asc:"ASCENDING",desc:"DESCENDING"},TO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SO={and:"AND",or:"OR"};class RO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $m(t,e){return t.useProto3Json||Vu(e)?e:{value:e}}function aa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function AO(t,e){return aa(t,e.toTimestamp())}function nt(t){return J(!!t),Z.fromTimestamp(function(n){const r=Vr(n);return new Ve(r.seconds,r.nanos)}(t))}function V_(t,e){return qm(t,e).canonicalString()}function qm(t,e){const n=function(i){return new ce(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function iA(t){const e=ce.fromString(t);return J(pA(e)),e}function wu(t,e){return V_(t.databaseId,e.path)}function lr(t,e){const n=iA(e);if(n.get(1)!==t.databaseId.projectId)throw new j(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(aA(n))}function sA(t,e){return V_(t.databaseId,e)}function oA(t){const e=iA(t);return e.length===4?ce.emptyPath():aA(e)}function Gm(t){return new ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function aA(t){return J(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function WE(t,e,n){return{name:wu(t,e),fields:n.value.mapValue.fields}}function lA(t,e,n){const r=lr(t,e.name),i=nt(e.updateTime),s=e.createTime?nt(e.createTime):Z.min(),o=new Pt({mapValue:{fields:e.fields}}),a=ke.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function PO(t,e){return"found"in e?function(r,i){J(!!i.found),i.found.name,i.found.updateTime;const s=lr(r,i.found.name),o=nt(i.found.updateTime),a=i.found.createTime?nt(i.found.createTime):Z.min(),l=new Pt({mapValue:{fields:i.found.fields}});return ke.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){J(!!i.missing),J(!!i.readTime);const s=lr(r,i.missing),o=nt(i.readTime);return ke.newNoDocument(s,o)}(t,e):Q()}function CO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(J(d===void 0||typeof d=="string"),ft.fromBase64String(d||"")):(J(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ft.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?L.UNKNOWN:ZR(c.code);return new j(d,c.message||"")}(o);n=new nA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=lr(t,r.document.name),s=nt(r.document.updateTime),o=r.document.createTime?nt(r.document.createTime):Z.min(),a=new Pt({mapValue:{fields:r.document.fields}}),l=ke.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new pd(c,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=lr(t,r.document),s=r.readTime?nt(r.readTime):Z.min(),o=ke.newNoDocument(i,s),a=r.removedTargetIds||[];n=new pd([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=lr(t,r.document),s=r.removedTargetIds||[];n=new pd([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new vO(i,s),a=r.targetId;n=new tA(a,o)}}return n}function Eu(t,e){let n;if(e instanceof Aa)n={update:WE(t,e.key,e.value)};else if(e instanceof Pa)n={delete:wu(t,e.key)};else if(e instanceof zr)n={update:WE(t,e.key,e.data),updateMask:OO(e.fieldMask)};else{if(!(e instanceof x_))return Q();n={verify:wu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof sa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ds)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Os)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof oa)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:AO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function Wm(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Oe.updateTime(nt(s.updateTime)):s.exists!==void 0?Oe.exists(s.exists):Oe.none()}(e.currentDocument):Oe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)J(a.setToServerValue==="REQUEST_TIME"),l=new sa;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];l=new Ds(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];l=new Os(d)}else"increment"in a?l=new oa(o,a.increment):Q();const c=De.fromServerFormat(a.fieldPath);return new Uu(c,l)}(t,i)):[];if(e.update){e.update.name;const i=lr(t,e.update.name),s=new Pt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const c=l.fieldPaths||[];return new on(c.map(d=>De.fromServerFormat(d)))}(e.updateMask);return new zr(i,s,o,n,r)}return new Aa(i,s,n,r)}if(e.delete){const i=lr(t,e.delete);return new Pa(i,n)}if(e.verify){const i=lr(t,e.verify);return new x_(i,n)}return Q()}function kO(t,e){return t&&t.length>0?(J(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?nt(i.updateTime):nt(s);return o.isEqual(Z.min())&&(o=nt(s)),new gO(o,i.transformResults||[])}(n,e))):[]}function uA(t,e){return{documents:[sA(t,e.path)]}}function cA(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=sA(t,i);const s=function(c){if(c.length!==0)return fA(Ee.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:go(m.field),direction:bO(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=$m(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function dA(t){let e=oA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){J(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=hA(f);return m instanceof Ee&&P_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(P){return new vu(_o(P.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Vu(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(f){const m=!!f.before,v=f.values||[];return new bi(v,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,v=f.values||[];return new bi(v,m)}(n.endAt)),LR(e,i,o,s,a,"F",l,c)}function xO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function hA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_o(n.unaryFilter.field);return de.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=_o(n.unaryFilter.field);return de.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=_o(n.unaryFilter.field);return de.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_o(n.unaryFilter.field);return de.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return de.create(_o(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ee.create(n.compositeFilter.filters.map(r=>hA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function bO(t){return IO[t]}function NO(t){return TO[t]}function DO(t){return SO[t]}function go(t){return{fieldPath:t.canonicalString()}}function _o(t){return De.fromServerFormat(t.fieldPath)}function fA(t){return t instanceof de?function(n){if(n.op==="=="){if(kE(n.value))return{unaryFilter:{field:go(n.field),op:"IS_NAN"}};if(CE(n.value))return{unaryFilter:{field:go(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(kE(n.value))return{unaryFilter:{field:go(n.field),op:"IS_NOT_NAN"}};if(CE(n.value))return{unaryFilter:{field:go(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:go(n.field),op:NO(n.op),value:n.value}}}(t):t instanceof Ee?function(n){const r=n.getFilters().map(i=>fA(i));return r.length===1?r[0]:{compositeFilter:{op:DO(n.op),filters:r}}}(t):Q()}function OO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function pA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Er{constructor(e,n,r,i,s=Z.min(),o=Z.min(),a=ft.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class mA{constructor(e){this.ct=e}}function VO(t,e){let n;if(e.document)n=lA(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=H.fromSegments(e.noDocument.path),i=Ls(e.noDocument.readTime);n=ke.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return Q();{const r=H.fromSegments(e.unknownDocument.path),i=Ls(e.unknownDocument.version);n=ke.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new Ve(i[0],i[1]);return Z.fromTimestamp(s)}(e.readTime)),n}function HE(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Jd(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:wu(s,o.key),fields:o.data.value.mapValue.fields,updateTime:aa(s,o.version.toTimestamp()),createTime:aa(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Vs(e.version)};else{if(!e.isUnknownDocument())return Q();r.unknownDocument={path:n.path.toArray(),version:Vs(e.version)}}return r}function Jd(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Vs(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ls(t){const e=new Ve(t.seconds,t.nanoseconds);return Z.fromTimestamp(e)}function os(t,e){const n=(e.baseMutations||[]).map(s=>Wm(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Wm(t.ct,s)),i=Ve.fromMillis(e.localWriteTimeMs);return new b_(e.batchId,i,n,r)}function Rl(t){const e=Ls(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Ls(t.lastLimboFreeSnapshotVersion):Z.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return J(s.documents.length===1),Yt(Ra(oA(s.documents[0])))}(t.query):function(s){return Yt(dA(s))}(t.query),new Er(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,ft.fromBase64String(t.resumeToken))}function gA(t,e){const n=Vs(e.snapshotVersion),r=Vs(e.lastLimboFreeSnapshotVersion);let i;i=Qd(e.target)?uA(t.ct,e.target):cA(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ns(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function L_(t){const e=dA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xd(e,e.limit,"L"):e}function wp(t,e){return new D_(e.largestBatchId,Wm(t.ct,e.overlayMutation))}function KE(t,e){const n=e.path.lastSegment();return[t,Qt(e.path.popLast()),n]}function QE(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:Vs(r.readTime),documentKey:Qt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class LO{getBundleMetadata(e,n){return YE(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Ls(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return YE(e).put(function(i){return{bundleId:i.id,createTime:Vs(nt(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return XE(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:L_(s.bundledQuery),readTime:Ls(s.readTime)}}(r)})}saveNamedQuery(e,n){return XE(e).put(function(i){return{name:i.name,readTime:Vs(nt(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function YE(t){return It(t,"bundles")}function XE(t){return It(t,"namedQueries")}/**
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
 */class Bh{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new Bh(e,r)}getOverlay(e,n){return ll(e).get(KE(this.userId,n)).next(r=>r?wp(this.serializer,r):null)}getOverlays(e,n){const r=rr();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new D_(n,o);i.push(this.ht(e,a))}),V.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Qt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(ll(e).j("collectionPathOverlayIndex",a))}),V.waitFor(s)}getOverlaysForCollection(e,n,r){const i=rr(),s=Qt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ll(e).U("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const c=wp(this.serializer,l);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=rr();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return ll(e).J({index:"collectionGroupOverlayIndex",range:a},(l,c,d)=>{const f=wp(this.serializer,c);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):d.done()}).next(()=>s)}ht(e,n){return ll(e).put(function(i,s,o){const[a,l,c]=KE(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Eu(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function ll(t){return It(t,"documentOverlays")}/**
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
 */class as{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(Ke(e.integerValue));else if("doubleValue"in e){const r=Ke(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),mu(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Et(n,20),typeof r=="string"&&(r=Vr(r)),n.At(`${r.seconds||""}`),n.dt(r.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(Ci(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?PR(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):Q()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),H.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}as.bt=new as;function MO(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function JE(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=MO(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class FO{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ct(r.value),r=n.next();this.vt()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=n.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Lt(e){const n=this.Bt(e),r=JE(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Bt(e),r=JE(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Bt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ct(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class UO{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Lt(e)}Tt(){this.Gt.Qt()}}class jO{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class ul{constructor(){this.Gt=new FO,this.zt=new UO(this.Gt),this.jt=new jO(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
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
 */class ls{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ls(this.indexId,this.documentKey,this.arrayValue,r)}}function Jr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=ZE(t.arrayValue,e.arrayValue),n!==0?n:(n=ZE(t.directionalValue,e.directionalValue),n!==0?n:H.comparator(t.documentKey,e.documentKey)))}function ZE(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class eI{constructor(e){this.Yt=new Te((n,r)=>De.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if(J(e.collectionGroup===this.collectionId),this.en)return!1;const n=Vm(e);if(n!==void 0&&!this.nn(n))return!1;const r=rs(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Yt.size>0){const a=this.Yt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.rn(a,l)||!this.sn(this.Zt[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}on(){if(this.en)return null;let e=new Te(De.comparator);const n=[];for(const r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new ud(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new ud(r.field,0))}for(const r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new ud(r.field,r.dir==="asc"?0:1)));return new Kd(Kd.UNKNOWN_ID,this.collectionId,n,pu.empty())}nn(e){for(const n of this.Xt)if(this.rn(n,e))return!0;return!1}rn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function _A(t){var e,n;if(J(t instanceof de||t instanceof Ee),t instanceof de){if(t instanceof VR){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>de.create(t.field,"==",s)))||[];return Ee.create(i,"or")}return t}const r=t.filters.map(i=>_A(i));return Ee.create(r,t.op)}function BO(t){if(t.getFilters().length===0)return[];const e=Qm(_A(t));return J(yA(e)),Hm(e)||Km(e)?[e]:e.getFilters()}function Hm(t){return t instanceof de}function Km(t){return t instanceof Ee&&P_(t)}function yA(t){return Hm(t)||Km(t)||function(n){if(n instanceof Ee&&Um(n)){for(const r of n.getFilters())if(!Hm(r)&&!Km(r))return!1;return!0}return!1}(t)}function Qm(t){if(J(t instanceof de||t instanceof Ee),t instanceof de)return t;if(t.filters.length===1)return Qm(t.filters[0]);const e=t.filters.map(r=>Qm(r));let n=Ee.create(e,t.op);return n=Zd(n),yA(n)?n:(J(n instanceof Ee),J(ia(n)),J(n.filters.length>1),n.filters.reduce((r,i)=>M_(r,i)))}function M_(t,e){let n;return J(t instanceof de||t instanceof Ee),J(e instanceof de||e instanceof Ee),n=t instanceof de?e instanceof de?function(i,s){return Ee.create([i,s],"and")}(t,e):tI(t,e):e instanceof de?tI(e,t):function(i,s){if(J(i.filters.length>0&&s.filters.length>0),ia(i)&&ia(s))return NR(i,s.getFilters());const o=Um(i)?i:s,a=Um(i)?s:i,l=o.filters.map(c=>M_(c,a));return Ee.create(l,"or")}(t,e),Zd(n)}function tI(t,e){if(ia(e))return NR(e,t.getFilters());{const n=e.filters.map(r=>M_(t,r));return Ee.create(n,"or")}}function Zd(t){if(J(t instanceof de||t instanceof Ee),t instanceof de)return t;const e=t.getFilters();if(e.length===1)return Zd(e[0]);if(xR(t))return t;const n=e.map(i=>Zd(i)),r=[];return n.forEach(i=>{i instanceof de?r.push(i):i instanceof Ee&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Ee.create(r,t.op)}/**
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
 */class zO{constructor(){this._n=new F_}addToCollectionParentIndex(e,n){return this._n.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(En.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(En.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class F_{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Te(ce.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Te(ce.comparator)).toArray()}}/**
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
 */const Uc=new Uint8Array(0);class $O{constructor(e,n){this.databaseId=n,this.an=new F_,this.un=new Bi(r=>Ns(r),(r,i)=>Lu(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.an.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.an.add(n)});const s={collectionId:r,parent:Qt(i)};return nI(e).put(s)}return V.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[fR(n),""],!1,!0);return nI(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(nr(o.parent))}return r})}addFieldIndex(e,n){const r=cl(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=oo(e);return s.next(a=>{o.put(QE(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=cl(e),i=oo(e),s=so(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=cl(e),r=so(e),i=oo(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return V.forEach(this.cn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new eI(r).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=so(e);let i=!0;const s=new Map;return V.forEach(this.cn(n),o=>this.ln(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=ie();const a=[];return V.forEach(s,(l,c)=>{z("IndexedDbIndexManager",`Using index ${function(S){return`id=${S.indexId}|cg=${S.collectionGroup}|f=${S.fields.map(O=>`${O.fieldPath}:${O.kind}`).join(",")}`}(l)} to execute ${Ns(n)}`);const d=function(S,O){const U=Vm(O);if(U===void 0)return null;for(const F of Yd(S,U.fieldPath))switch(F.op){case"array-contains-any":return F.value.arrayValue.values||[];case"array-contains":return[F.value]}return null}(c,l),f=function(S,O){const U=new Map;for(const F of rs(O))for(const E of Yd(S,F.fieldPath))switch(E.op){case"==":case"in":U.set(F.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return U.set(F.fieldPath.canonicalString(),E.value),Array.from(U.values())}return null}(c,l),m=function(S,O){const U=[];let F=!0;for(const E of rs(O)){const y=E.kind===0?OE(S,E.fieldPath,S.startAt):VE(S,E.fieldPath,S.startAt);U.push(y.value),F&&(F=y.inclusive)}return new bi(U,F)}(c,l),v=function(S,O){const U=[];let F=!0;for(const E of rs(O)){const y=E.kind===0?VE(S,E.fieldPath,S.endAt):OE(S,E.fieldPath,S.endAt);U.push(y.value),F&&(F=y.inclusive)}return new bi(U,F)}(c,l),P=this.hn(l,c,m),k=this.hn(l,c,v),D=this.Pn(l,c,f),T=this.In(l.indexId,d,P,m.inclusive,k,v.inclusive,D);return V.forEach(T,w=>r.G(w,n.limit).next(S=>{S.forEach(O=>{const U=H.fromSegments(O.documentKey);o.has(U)||(o=o.add(U),a.push(U))})}))}).next(()=>a)}return V.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=BO(Ee.create(e.filters,"and")).map(r=>Bm(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}In(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),c=l/(n!=null?n.length:1),d=[];for(let f=0;f<l;++f){const m=n?this.Tn(n[f/c]):Uc,v=this.En(e,m,r[f%c],i),P=this.dn(e,m,s[f%c],o),k=a.map(D=>this.En(e,m,D,!0));d.push(...this.createRange(v,P,k))}return d}En(e,n,r,i){const s=new ls(e,H.empty(),n,r);return i?s:s.Jt()}dn(e,n,r,i){const s=new ls(e,H.empty(),n,r);return i?s.Jt():s}ln(e,n){const r=new eI(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return V.forEach(i,s=>this.ln(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let c=new Te(De.comparator),d=!1;for(const f of l.filters)for(const m of f.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:c=c.add(m.field));for(const f of l.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(d?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}An(e,n){const r=new ul;for(const i of rs(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);as.bt.Pt(s,o)}return r.Wt()}Tn(e){const n=new ul;return as.bt.Pt(e,n.Ht(0)),n.Wt()}Rn(e,n){const r=new ul;return as.bt.Pt(bs(this.databaseId,n),r.Ht(function(s){const o=rs(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}Pn(e,n,r){if(r===null)return[];let i=[];i.push(new ul);let s=0;for(const o of rs(e)){const a=r[s++];for(const l of i)if(this.Vn(n,o.fieldPath)&&yu(a))i=this.mn(i,o,a);else{const c=l.Ht(o.kind);as.bt.Pt(a,c)}}return this.fn(i)}hn(e,n,r){return this.Pn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}mn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new ul;l.seed(a.Wt()),as.bt.Pt(o,l.Ht(n.kind)),s.push(l)}return s}Vn(e,n){return!!e.filters.find(r=>r instanceof de&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=cl(e),i=oo(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return V.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(d,f){const m=f?new pu(f.sequenceNumber,new En(Ls(f.readTime),new H(nr(f.documentKey)),f.largestBatchId)):pu.empty(),v=d.fields.map(([P,k])=>new ud(De.fromServerFormat(P),k));return new Kd(d.indexId,d.collectionGroup,v,m)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:re(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=cl(e),s=oo(e);return this.gn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>V.forEach(a,l=>s.put(QE(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return V.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?V.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),V.forEach(a,l=>this.pn(e,i,l).next(c=>{const d=this.yn(s,l);return c.isEqual(d)?V.resolve():this.wn(e,s,l,c,d)}))))})}Sn(e,n,r,i){return so(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,n.key),documentKey:n.key.path.toArray()})}bn(e,n,r,i){return so(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,n.key),n.key.path.toArray()])}pn(e,n,r){const i=so(e);let s=new Te(Jr);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,n)])},(o,a)=>{s=s.add(new ls(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}yn(e,n){let r=new Te(Jr);const i=this.An(n,e);if(i==null)return r;const s=Vm(n);if(s!=null){const o=e.data.field(s.fieldPath);if(yu(o))for(const a of o.arrayValue.values||[])r=r.add(new ls(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new ls(n.indexId,e.key,Uc,i));return r}wn(e,n,r,i,s){z("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,c,d,f,m){const v=l.getIterator(),P=c.getIterator();let k=io(v),D=io(P);for(;k||D;){let T=!1,w=!1;if(k&&D){const S=d(k,D);S<0?w=!0:S>0&&(T=!0)}else k!=null?w=!0:T=!0;T?(f(D),D=io(P)):w?(m(k),k=io(v)):(k=io(v),D=io(P))}}(i,s,Jr,a=>{o.push(this.Sn(e,n,r,a))},a=>{o.push(this.bn(e,n,r,a))}),V.waitFor(o)}gn(e){let n=1;return oo(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Jr(o,a)).filter((o,a,l)=>!a||Jr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Jr(o,e),l=Jr(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&l<0)i.push(o),i.push(o.Jt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Uc,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Uc,[]];s.push(IDBKeyRange.bound(a,l))}return s}Dn(e,n){return Jr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(rI)}getMinOffset(e,n){return V.mapArray(this.cn(n),r=>this.ln(e,r).next(i=>i||Q())).next(rI)}}function nI(t){return It(t,"collectionParents")}function so(t){return It(t,"indexEntries")}function cl(t){return It(t,"indexConfiguration")}function oo(t){return It(t,"indexState")}function rI(t){J(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;S_(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new En(e.readTime,e.documentKey,n)}/**
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
 */const iI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class en{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function vA(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.J({range:o},(d,f,m)=>(a++,m.delete()));s.push(l.next(()=>{J(a===1)}));const c=[];for(const d of n.mutations){const f=wR(e,d.key.path,n.batchId);s.push(i.delete(f)),c.push(d.key)}return V.waitFor(s).next(()=>c)}function eh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw Q();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(41943040,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);class zh{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Cn={}}static lt(e,n,r,i){J(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new zh(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Zr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=yo(e),o=Zr(e);return o.add({}).next(a=>{J(typeof a=="number");const l=new b_(a,n,r,i),c=function(v,P,k){const D=k.baseMutations.map(w=>Eu(v.ct,w)),T=k.mutations.map(w=>Eu(v.ct,w));return{userId:P,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:D,mutations:T}}(this.serializer,this.userId,l),d=[];let f=new Te((m,v)=>re(m.canonicalString(),v.canonicalString()));for(const m of i){const v=wR(this.userId,m.key.path,a);f=f.add(m.key.path.popLast()),d.push(o.put(c)),d.push(s.put(v,bD))}return f.forEach(m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Cn[a]=l.keys()}),V.waitFor(d).next(()=>l)})}lookupMutationBatch(e,n){return Zr(e).get(n).next(r=>r?(J(r.userId===this.userId),os(this.serializer,r)):null)}vn(e,n){return this.Cn[n]?V.resolve(this.Cn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Cn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Zr(e).J({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(J(a.batchId>=r),s=os(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Zr(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Zr(e).U("userMutationsIndex",n).next(r=>r.map(i=>os(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=cd(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return yo(e).J({range:i},(o,a,l)=>{const[c,d,f]=o,m=nr(d);if(c===this.userId&&n.path.isEqual(m))return Zr(e).get(f).next(v=>{if(!v)throw Q();J(v.userId===this.userId),s.push(os(this.serializer,v))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Te(re);const i=[];return n.forEach(s=>{const o=cd(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=yo(e).J({range:a},(c,d,f)=>{const[m,v,P]=c,k=nr(v);m===this.userId&&s.path.isEqual(k)?r=r.add(P):f.done()});i.push(l)}),V.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=cd(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Te(re);return yo(e).J({range:o},(l,c,d)=>{const[f,m,v]=l,P=nr(m);f===this.userId&&r.isPrefixOf(P)?P.length===i&&(a=a.add(v)):d.done()}).next(()=>this.Fn(e,a))}Fn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Zr(e).get(s).next(o=>{if(o===null)throw Q();J(o.userId===this.userId),r.push(os(this.serializer,o))}))}),V.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return vA(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Mn(n.batchId)}),V.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return V.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return yo(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=nr(s[1]);i.push(l)}else a.done()}).next(()=>{J(i.length===0)})})}containsKey(e,n){return wA(e,this.userId,n)}xn(e){return EA(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function wA(t,e,n){const r=cd(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return yo(t).J({range:s,H:!0},(a,l,c)=>{const[d,f,m]=a;d===e&&f===i&&(o=!0),c.done()}).next(()=>o)}function Zr(t){return It(t,"mutations")}function yo(t){return It(t,"documentMutations")}function EA(t){return It(t,"mutationQueues")}/**
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
 */class Ms{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Ms(0)}static Ln(){return new Ms(-1)}}/**
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
 */class qO{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Bn(e).next(n=>{const r=new Ms(n.highestTargetId);return n.highestTargetId=r.next(),this.kn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(n=>Z.fromTimestamp(new Ve(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.kn(e,i)))}addTargetData(e,n){return this.qn(e,n).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.Qn(n,r),this.kn(e,r))))}updateTargetData(e,n){return this.qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ao(e).delete(n.targetId)).next(()=>this.Bn(e)).next(r=>(J(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ao(e).J((o,a)=>{const l=Rl(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>V.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ao(e).J((r,i)=>{const s=Rl(i);n(s)})}Bn(e){return sI(e).get("targetGlobalKey").next(n=>(J(n!==null),n))}kn(e,n){return sI(e).put("targetGlobalKey",n)}qn(e,n){return ao(e).put(gA(this.serializer,n))}Qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ns(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ao(e).J({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const c=Rl(a);Lu(n,c.target)&&(s=c,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=oi(e);return n.forEach(o=>{const a=Qt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),V.waitFor(i)}removeMatchingKeys(e,n,r){const i=oi(e);return V.forEach(n,s=>{const o=Qt(s.path);return V.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=oi(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=oi(e);let s=ie();return i.J({range:r,H:!0},(o,a,l)=>{const c=nr(o[1]),d=new H(c);s=s.add(d)}).next(()=>s)}containsKey(e,n){const r=Qt(n.path),i=IDBKeyRange.bound([r],[fR(r)],!1,!0);let s=0;return oi(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],l,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return ao(e).get(n).next(r=>r?Rl(r):null)}}function ao(t){return It(t,"targets")}function sI(t){return It(t,"targetGlobal")}function oi(t){return It(t,"targetDocuments")}/**
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
 */function oI([t,e],[n,r]){const i=re(t,n);return i===0?re(e,r):i}class GO{constructor(e){this.Kn=e,this.buffer=new Te(oI),this.$n=0}Un(){return++this.$n}Wn(e){const n=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();oI(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class WO{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){z("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ji(n)?z("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Ui(n)}await this.zn(3e5)})}}class HO{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.Hn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(sn.oe);const r=new GO(n);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(iI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),iI):this.Yn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,n){let r,i,s,o,a,l,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),po()<=ae.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(c-l)+`ms
Total Duration: ${c-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function KO(t,e){return new HO(t,e)}/**
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
 */class QO{constructor(e,n){this.db=e,this.garbageCollector=KO(this,n)}Hn(e){const n=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Zn(e){let n=0;return this.Jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Jn(e,n){return this.Xn(e,(r,i)=>n(i))}addReference(e,n,r){return jc(e,r)}removeReference(e,n,r){return jc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return jc(e,n)}er(e,n){return function(i,s){let o=!1;return EA(i).Y(a=>wA(i,a,s).next(l=>(l&&(o=!0),V.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,a)=>{if(a<=n){const l=this.er(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,Z.min()),oi(e).delete(function(f){return[0,Qt(f.path)]}(o))))});i.push(l)}}).next(()=>V.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return jc(e,n)}Xn(e,n){const r=oi(e);let i,s=sn.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:c})=>{o===0?(s!==sn.oe&&n(new H(nr(i)),s),s=c,i=l):s=sn.oe}).next(()=>{s!==sn.oe&&n(new H(nr(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function jc(t,e){return oi(t).put(function(r,i){return{targetId:0,path:Qt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class IA{constructor(){this.changes=new Bi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class YO{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Zi(e).put(r)}removeEntry(e,n,r){return Zi(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Jd(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.tr(e,r)))}getEntry(e,n){let r=ke.newInvalidDocument(n);return Zi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(dl(n))},(i,s)=>{r=this.nr(n,s)}).next(()=>r)}rr(e,n){let r={size:0,document:ke.newInvalidDocument(n)};return Zi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(dl(n))},(i,s)=>{r={document:this.nr(n,s),size:eh(s)}}).next(()=>r)}getEntries(e,n){let r=an();return this.ir(e,n,(i,s)=>{const o=this.nr(i,s);r=r.insert(i,o)}).next(()=>r)}sr(e,n){let r=an(),i=new Ae(H.comparator);return this.ir(e,n,(s,o)=>{const a=this.nr(s,o);r=r.insert(s,a),i=i.insert(s,eh(o))}).next(()=>({documents:r,_r:i}))}ir(e,n,r){if(n.isEmpty())return V.resolve();let i=new Te(uI);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(dl(i.first()),dl(i.last())),o=i.getIterator();let a=o.getNext();return Zi(e).J({index:"documentKeyIndex",range:s},(l,c,d)=>{const f=H.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&uI(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?d.$(dl(a)):d.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),Jd(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Zi(e).U(IDBKeyRange.bound(a,l,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let d=an();for(const f of c){const m=this.nr(H.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);m.isFoundDocument()&&(Fu(n,m)||i.has(m.key))&&(d=d.insert(m.key,m))}return d})}getAllFromCollectionGroup(e,n,r,i){let s=an();const o=lI(n,r),a=lI(n,En.max());return Zi(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,c,d)=>{const f=this.nr(H.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&d.done()}).next(()=>s)}newChangeBuffer(e){return new XO(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return aI(e).get("remoteDocumentGlobalKey").next(n=>(J(!!n),n))}tr(e,n){return aI(e).put("remoteDocumentGlobalKey",n)}nr(e,n){if(n){const r=VO(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(Z.min())))return r}return ke.newInvalidDocument(e)}}function TA(t){return new YO(t)}class XO extends IA{constructor(e,n){super(),this.ar=e,this.trackRemovals=n,this.ur=new Bi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Te((s,o)=>re(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ur.get(s);if(n.push(this.ar.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=HE(this.ar.serializer,o);i=i.add(s.path.popLast());const c=eh(l);r+=c-a.size,n.push(this.ar.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=HE(this.ar.serializer,o.convertToNoDocument(Z.min()));n.push(this.ar.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ar.updateMetadata(e,r)),V.waitFor(n)}getFromCache(e,n){return this.ar.rr(e,n).next(r=>(this.ur.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ar.sr(e,n).next(({documents:r,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function aI(t){return It(t,"remoteDocumentGlobal")}function Zi(t){return It(t,"remoteDocumentsV14")}function dl(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function lI(t,e){const n=e.documentKey.path.toArray();return[t,Jd(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function uI(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=re(n[s],r[s]),i)return i;return i=re(n.length,r.length),i||(i=re(n[n.length-2],r[r.length-2]),i||re(n[n.length-1],r[r.length-1]))}/**
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
 */class JO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class SA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&jl(r.mutation,i,on.empty(),Ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=rr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Tl();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=rr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=an();const o=Ul(),a=function(){return Ul()}();return n.forEach((l,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof zr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),jl(d.mutation,c,d.mutation.getFieldMask(),Ve.now())):o.set(c.key,on.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new JO(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ul();let i=new Ae((o,a)=>o-a),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let d=r.get(l)||on.empty();d=a.applyToLocalView(c,d),r.set(l,d);const f=(i.get(a.batchId)||ie()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,d=l.value,f=zR();d.forEach(m=>{if(!s.has(m)){const v=YR(n.get(m),r.get(m));v!==null&&f.set(m,v),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):C_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(rr());let a=-1,l=s;return o.next(c=>V.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,ie())).next(d=>({batchId:a,changes:BR(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=Tl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Tl();return this.indexManager.getCollectionParents(e,s).next(a=>V.forEach(a,l=>{const c=function(f,m){return new Br(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,ke.newInvalidDocument(d)))});let a=Tl();return o.forEach((l,c)=>{const d=s.get(l);d!==void 0&&jl(d.mutation,c,on.empty(),Ve.now()),Fu(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class ZO{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return V.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:nt(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:L_(i.bundledQuery),readTime:nt(i.readTime)}}(n)),V.resolve()}}/**
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
 */class eV{constructor(){this.overlays=new Ae(H.comparator),this.hr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=rr();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=rr(),s=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ae((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=rr(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=rr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return V.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new D_(n,r));let s=this.hr.get(n);s===void 0&&(s=ie(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class U_{constructor(){this.Pr=new Te(mt.Ir),this.Tr=new Te(mt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new mt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new mt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new H(new ce([])),r=new mt(n,e),i=new mt(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new H(new ce([])),r=new mt(n,e),i=new mt(n,e+1);let s=ie();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new mt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class mt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return H.comparator(e.key,n.key)||re(e.pr,n.pr)}static Er(e,n){return re(e.pr,n.pr)||H.comparator(e.key,n.key)}}/**
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
 */class tV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Te(mt.Ir)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new b_(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new mt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new mt(n,0),i=new mt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Te(re);return n.forEach(i=>{const s=new mt(i,0),o=new mt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),V.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new mt(new H(s),0);let a=new Te(re);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.pr)),!0)},o),V.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){J(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return V.forEach(n.mutations,i=>{const s=new mt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new mt(n,0),i=this.wr.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class nV{constructor(e){this.vr=e,this.docs=function(){return new Ae(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():ke.newInvalidDocument(n))}getEntries(e,n){let r=an();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ke.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=an();const o=n.path,a=new H(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:d}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||S_(mR(d),r)<=0||(i.has(d.key)||Fu(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Fr(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new rV(this)}getSize(e){return V.resolve(this.size)}}class rV extends IA{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class iV{constructor(e){this.persistence=e,this.Mr=new Bi(n=>Ns(n),Lu),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Or=0,this.Nr=new U_,this.targetCount=0,this.Lr=Ms.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),V.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Ms(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.qn(n),V.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Nr.containsKey(n))}}/**
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
 */class RA{constructor(e,n){this.Br={},this.overlays={},this.kr=new sn(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new iV(this),this.indexManager=new zO,this.remoteDocumentCache=function(i){return new nV(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new mA(n),this.$r=new ZO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new tV(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const i=new sV(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return V.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class sV extends _R{constructor(e){super(),this.currentSequenceNumber=e}}class $h{constructor(e){this.persistence=e,this.zr=new U_,this.jr=null}static Hr(e){return new $h(e)}get Jr(){if(this.jr)return this.jr;throw Q()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),V.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Jr,r=>{const i=H.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return V.or([()=>V.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class oV{constructor(e){this.serializer=e}O(e,n,r,i){const s=new Mh("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",SE,{unique:!0}),l.createObjectStore("documentMutations")}(e),cI(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=V.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),cI(e)),o=o.next(()=>function(l){const c=l.store("targetGlobal"),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Z.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",d)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,c){return c.store("mutations").U().next(d=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",SE,{unique:!0});const f=c.store("mutations"),m=d.map(v=>f.put(v));return V.waitFor(m)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Xr(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(o=o.next(()=>this.ti(s))),r<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ri(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const c=l.createObjectStore("documentOverlays",{keyPath:$D});c.createIndex("collectionPathOverlayIndex",qD,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",GD,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const c=l.createObjectStore("remoteDocumentsV14",{keyPath:ND});c.createIndex("documentKeyIndex",DD),c.createIndex("collectionGroupIndex",OD)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:UD}).createIndex("sequenceNumberIndex",jD,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:BD}).createIndex("documentKeyIndex",zD,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),o}ei(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=eh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>V.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>V.forEach(a,l=>{J(l.userId===s.userId);const c=os(this.serializer,l);return vA(e,s.userId,c).next(()=>{})}))}))}ti(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const l=new ce(o),c=function(f){return[0,Qt(f)]}(l);s.push(n.get(c).next(d=>d?V.resolve():(f=>n.put({targetId:0,path:Qt(f),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>V.waitFor(s))})}ni(e,n){e.createObjectStore("collectionParents",{keyPath:FD});const r=n.store("collectionParents"),i=new F_,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Qt(l)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const l=new ce(o);return s(l.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,l],c)=>{const d=nr(a);return s(d.popLast())}))}ri(e){const n=e.store("targets");return n.J((r,i)=>{const s=Rl(i),o=gA(this.serializer,s);return n.put(o)})}ii(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(f){return f.document?new H(ce.fromString(f.document.name).popFirst(5)):f.noDocument?H.fromSegments(f.noDocument.path):f.unknownDocument?H.fromSegments(f.unknownDocument.path):Q()}(o).path.toArray(),c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>V.waitFor(i))}si(e,n){const r=n.store("mutations"),i=TA(this.serializer),s=new RA($h.Hr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(l=>{var c;let d=(c=a.get(l.userId))!==null&&c!==void 0?c:ie();os(this.serializer,l).keys().forEach(f=>d=d.add(f)),a.set(l.userId,d)}),V.forEach(a,(l,c)=>{const d=new _t(c),f=Bh.lt(this.serializer,d),m=s.getIndexManager(d),v=zh.lt(d,this.serializer,m,s.referenceDelegate);return new SA(i,v,f,m).recalculateAndSaveOverlaysForDocumentKeys(new Lm(n,sn.oe),l).next()})})}}function cI(t){t.createObjectStore("targetDocuments",{keyPath:LD}).createIndex("documentTargetsIndex",MD,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",VD,{unique:!0}),t.createObjectStore("targetGlobal")}const Ep="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class j_{constructor(e,n,r,i,s,o,a,l,c,d,f=16){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.oi=s,this.window=o,this.document=a,this._i=c,this.ai=d,this.ui=f,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=m=>Promise.resolve(),!j_.D())throw new j(L.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new QO(this,i),this.Ti=n+"main",this.serializer=new mA(l),this.Ei=new ar(this.Ti,this.ui,new oV(this.serializer)),this.Qr=new qO(this.referenceDelegate,this.serializer),this.remoteDocumentCache=TA(this.serializer),this.$r=new LO,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,d===!1&&tt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new j(L.FAILED_PRECONDITION,Ep);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new sn(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Bc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(n=>{n||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(n=>this.isPrimary&&!n?this.yi(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(ji(e))return z("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return z("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return hl(e).get("owner").next(n=>V.resolve(this.Si(n)))}bi(e){return Bc(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=It(n,"clientMetadata");return r.U().next(i=>{const s=this.vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return V.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const n of e)this.di.removeItem(this.Fi(n.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?V.resolve(!0):hl(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)){if(this.Si(n)&&this.networkEnabled)return!0;if(!this.Si(n)){if(!n.allowTabSynchronization)throw new j(L.FAILED_PRECONDITION,Ep);return!1}}return!(!this.networkEnabled||!this.inForeground)||Bc(e).U().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&z("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Lm(e,sn.oe);return this.yi(n).next(()=>this.bi(n))}),this.Ei.close(),this.Li()}vi(e,n){return e.filter(r=>this.Ci(r.updateTimeMs,n)&&!this.Mi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>Bc(e).U().next(n=>this.vi(n,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,n){return zh.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new $O(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Bh.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,n,r){z("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===16?HD:l===15?SR:l===14?TR:l===13?IR:l===12?WD:l===11?ER:void Q()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new Lm(a,this.kr?this.kr.next():sn.oe),n==="readwrite-primary"?this.gi(o).next(l=>!!l||this.pi(o)).next(l=>{if(!l)throw tt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new j(L.FAILED_PRECONDITION,gR);return r(o)}).next(l=>this.wi(o).next(()=>l)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return hl(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)&&!this.Si(n)&&!(this.ai||this.allowTabSynchronization&&n.allowTabSynchronization))throw new j(L.FAILED_PRECONDITION,Ep)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return hl(e).put("owner",n)}static D(){return ar.D()}yi(e){const n=hl(e);return n.get("owner").next(r=>this.Si(r)?(z("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):V.resolve())}Ci(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(tt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;GS()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var n;try{const r=((n=this.di)===null||n===void 0?void 0:n.getItem(this.Fi(e)))!==null;return z("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return tt("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){tt("Failed to set zombie client id.",e)}}Li(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function hl(t){return It(t,"owner")}function Bc(t){return It(t,"clientMetadata")}function B_(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class z_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new z_(e,n.fromCache,r,i)}}/**
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
 */class aV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class AA{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return GS()?8:yR(Le())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new aV;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(po()<=ae.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",mo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),V.resolve()):(po()<=ae.DEBUG&&z("QueryEngine","Query:",mo(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(po()<=ae.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",mo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yt(n))):V.resolve())}ji(e,n){if(LE(n))return V.resolve(null);let r=Yt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Xd(n,null,"F"),r=Yt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,Xd(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,i){return LE(n)||i.isEqual(Z.min())?V.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?V.resolve(null):(po()<=ae.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),mo(n)),this.es(e,o,n,pR(i,-1)).next(a=>a))})}Zi(e,n){let r=new Te(UR(e));return n.forEach((i,s)=>{Fu(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return po()<=ae.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",mo(n)),this.zi.getDocumentsMatchingQuery(e,n,En.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class lV{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Ae(re),this.rs=new Bi(s=>Ns(s),Lu),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new SA(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function PA(t,e,n,r){return new lV(t,e,n,r)}async function CA(t,e){const n=K(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ie();for(const c of i){o.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function uV(t,e){const n=K(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,d){const f=c.batch,m=f.keys();let v=V.resolve();return m.forEach(P=>{v=v.next(()=>d.getEntry(l,P)).next(k=>{const D=c.docVersions.get(P);J(D!==null),k.version.compareTo(D)<0&&(f.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ie();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function kA(t){const e=K(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function cV(t,e){const n=K(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;a.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,f)));let v=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?v=v.withResumeToken(ft.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),i=i.insert(f,v),function(k,D,T){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,v,d)&&a.push(n.Qr.updateTargetData(s,v))});let l=an(),c=ie();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(xA(s,o,e.documentUpdates).next(d=>{l=d.cs,c=d.ls})),!r.isEqual(Z.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return V.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.ns=i,s))}function xA(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=an();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:i}})}function dV(t,e){const n=K(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function la(t,e){const n=K(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function ua(t,e,n){const r=K(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ji(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function th(t,e,n){const r=K(t);let i=Z.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,d){const f=K(l),m=f.rs.get(d);return m!==void 0?V.resolve(f.ns.get(m)):f.Qr.getTargetData(c,d)}(r,o,Yt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:ie())).next(a=>(DA(r,FR(e),a),{documents:a,hs:s})))}function bA(t,e){const n=K(t),r=K(n.Qr),i=n.ns.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function NA(t,e){const n=K(t),r=n.ss.get(e)||Z.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.os.getAllFromCollectionGroup(i,e,pR(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(DA(n,e,i),i))}function DA(t,e,n){let r=t.ss.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}async function hV(t,e,n,r){const i=K(t);let s=ie(),o=an();for(const c of n){const d=e.Ps(c.metadata.name);c.document&&(s=s.add(d));const f=e.Is(c);f.setReadTime(e.Ts(c.metadata.readTime)),o=o.insert(d,f)}const a=i.os.newChangeBuffer({trackRemovals:!0}),l=await la(i,function(d){return Yt(Ra(ce.fromString(`__bundle__/docs/${d}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>xA(c,a,o).next(d=>(a.apply(c),d)).next(d=>i.Qr.removeMatchingKeysForTargetId(c,l.targetId).next(()=>i.Qr.addMatchingKeys(c,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,d.cs,d.ls)).next(()=>d.cs)))}async function fV(t,e,n=ie()){const r=await la(t,Yt(L_(e.bundledQuery))),i=K(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=nt(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const a=r.withResumeToken(ft.EMPTY_BYTE_STRING,o);return i.ns=i.ns.insert(a.targetId,a),i.Qr.updateTargetData(s,a).next(()=>i.Qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function dI(t,e){return`firestore_clients_${t}_${e}`}function hI(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Ip(t,e){return`firestore_targets_${t}_${e}`}class nh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Es(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new j(i.error.code,i.error.message))),o?new nh(e,n,i.state,s):(tt("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Bl{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Es(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new j(r.error.code,r.error.message))),s?new Bl(e,r.state,i):(tt("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class rh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=k_();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=vR(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new rh(e,s):(tt("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class $_{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new $_(n.clientId,n.onlineState):(tt("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Ym{constructor(){this.activeTargetIds=k_()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Tp{constructor(e,n,r,i,s){this.window=e,this.oi=n,this.persistenceKey=r,this.Vs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new Ae(re),this.started=!1,this.ys=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=dI(this.persistenceKey,this.Vs),this.Ss=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new Ym),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Fs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Vs)continue;const i=this.getItem(dI(this.persistenceKey,r));if(i){const s=rh.Es(r,i);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const n=this.storage.getItem(this.vs);if(n){const r=this.xs(n);r&&this.Os(r)}for(const r of this.ys)this.gs(r);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let n=!1;return this.ps.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,n,r){this.Ls(e,n,r),this.Bs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Ip(this.persistenceKey,e));if(r){const i=Bl.Es(e,r);i&&(n=i.state)}}return this.ks.As(e),this.Ms(),n}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ip(this.persistenceKey,e))}updateQueryState(e,n,r){this.qs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return z("SharedClientState","READ",e,n),n}setItem(e,n){z("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){z("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const n=e;if(n.storageArea===this.storage){if(z("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ws)return void tt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.bs.test(n.key)){if(n.newValue==null){const r=this.$s(n.key);return this.Us(r,null)}{const r=this.Ws(n.key,n.newValue);if(r)return this.Us(r.clientId,r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.Gs(n.key,n.newValue);if(r)return this.zs(r)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const r=this.js(n.key,n.newValue);if(r)return this.Hs(r)}}else if(n.key===this.vs){if(n.newValue!==null){const r=this.xs(n.newValue);if(r)return this.Os(r)}}else if(n.key===this.Ss){const r=function(s){let o=sn.oe;if(s!=null)try{const a=JSON.parse(s);J(typeof a=="number"),o=a}catch(a){tt("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==sn.oe&&this.sequenceNumberHandler(r)}else if(n.key===this.Fs){const r=this.Js(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ys(i)))}}}else this.ys.push(n)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Ls(e,n,r){const i=new nh(this.currentUser,e,n,r),s=hI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ds())}Bs(e){const n=hI(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Qs(e){const n={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(n))}qs(e,n,r){const i=Ip(this.persistenceKey,e),s=new Bl(e,n,r);this.setItem(i,s.ds())}Ks(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Fs,n)}$s(e){const n=this.bs.exec(e);return n?n[1]:null}Ws(e,n){const r=this.$s(e);return rh.Es(r,n)}Gs(e,n){const r=this.Ds.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return nh.Es(new _t(s),i,n)}js(e,n){const r=this.Cs.exec(e),i=Number(r[1]);return Bl.Es(i,n)}xs(e){return $_.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);z("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,n){const r=n?this.ps.insert(e,n):this.ps.remove(e),i=this.Ns(this.ps),s=this.Ns(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.eo(o,a).then(()=>{this.ps=r})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let n=k_();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class OA{constructor(){this.no=new Ym,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Ym,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pV{io(e){}shutdown(){}}/**
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
 */class fI{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zc=null;function Sp(){return zc===null?zc=function(){return 268435456+Math.round(2147483648*Math.random())}():zc++,"0x"+zc.toString(16)}/**
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
 */const mV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class gV{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const Lt="WebChannelConnection";class _V extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Sp(),l=this.vo(n,r.toUriEncodedString());z("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,l,c,i).then(d=>(z("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Wn("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",l,"request:",i),d})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Sa}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=mV[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Sp();return new Promise((o,a)=>{const l=new sR;l.setWithCredentials(!0),l.listenOnce(aR.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ld.NO_ERROR:const d=l.getResponseJson();z(Lt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case ld.TIMEOUT:z(Lt,`RPC '${e}' ${s} timed out`),a(new j(L.DEADLINE_EXCEEDED,"Request time out"));break;case ld.HTTP_ERROR:const f=l.getStatus();if(z(Lt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const P=function(D){const T=D.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(T)>=0?T:L.UNKNOWN}(v.status);a(new j(P,v.message))}else a(new j(L.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new j(L.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{z(Lt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);z(Lt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Sp(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=cR(),a=uR(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new oR({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=s.join("");z(Lt,`Creating RPC '${e}' stream ${i}: ${d}`,l);const f=o.createWebChannel(d,l);let m=!1,v=!1;const P=new gV({lo:D=>{v?z(Lt,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(m||(z(Lt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),z(Lt,`RPC '${e}' stream ${i} sending:`,D),f.send(D))},ho:()=>f.close()}),k=(D,T,w)=>{D.listen(T,S=>{try{w(S)}catch(O){setTimeout(()=>{throw O},0)}})};return k(f,Il.EventType.OPEN,()=>{v||(z(Lt,`RPC '${e}' stream ${i} transport opened.`),P.mo())}),k(f,Il.EventType.CLOSE,()=>{v||(v=!0,z(Lt,`RPC '${e}' stream ${i} transport closed`),P.po())}),k(f,Il.EventType.ERROR,D=>{v||(v=!0,Wn(Lt,`RPC '${e}' stream ${i} transport errored:`,D),P.po(new j(L.UNAVAILABLE,"The operation could not be completed")))}),k(f,Il.EventType.MESSAGE,D=>{var T;if(!v){const w=D.data[0];J(!!w);const S=w,O=S.error||((T=S[0])===null||T===void 0?void 0:T.error);if(O){z(Lt,`RPC '${e}' stream ${i} received error:`,O);const U=O.status;let F=function(I){const R=it[I];if(R!==void 0)return ZR(R)}(U),E=O.message;F===void 0&&(F=L.INTERNAL,E="Unknown error status: "+U+" with message "+O.message),v=!0,P.po(new j(F,E)),f.close()}else z(Lt,`RPC '${e}' stream ${i} received:`,w),P.yo(w)}}),k(a,lR.STAT_EVENT,D=>{D.stat===Om.PROXY?z(Lt,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===Om.NOPROXY&&z(Lt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.fo()},0),P}}/**
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
 */function VA(){return typeof window<"u"?window:null}function md(){return typeof document<"u"?document:null}/**
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
 */function zu(t){return new RO(t,!0)}/**
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
 */class q_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class LA{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new q_(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(tt(n.toString()),tt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new j(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yV extends LA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=CO(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?nt(o.readTime):Z.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Gm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Qd(l)?{documents:uA(s,l)}:{query:cA(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=rA(s,o.resumeToken);const c=$m(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Z.min())>0){a.readTime=aa(s,o.snapshotVersion.toTimestamp());const c=$m(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=xO(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Gm(this.serializer),n.removeTarget=e,this.i_(n)}}class vV extends LA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=kO(e.writeResults,e.commitTime),r=nt(e.commitTime);return this.listener.A_(r,n)}return J(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Gm(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Eu(this.serializer,r))};this.i_(n)}}/**
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
 */class wV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new j(L.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,qm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(L.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,qm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(L.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class EV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(tt(n),this.y_=!1):z("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class IV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{zi(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=K(l);c.M_.add(4),await Ca(c),c.N_.set("Unknown"),c.M_.delete(4),await $u(c)}(this))})}),this.N_=new EV(r,i)}}async function $u(t){if(zi(t))for(const e of t.x_)await e(!0)}async function Ca(t){for(const e of t.x_)await e(!1)}function qh(t,e){const n=K(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),H_(n)?W_(n):xa(n).Xo()&&G_(n,e))}function ca(t,e){const n=K(t),r=xa(n);n.F_.delete(e),r.Xo()&&MA(n,e),n.F_.size===0&&(r.Xo()?r.n_():zi(n)&&n.N_.set("Unknown"))}function G_(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xa(t).P_(e)}function MA(t,e){t.L_.xe(e),xa(t).I_(e)}function W_(t){t.L_=new EO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),xa(t).start(),t.N_.w_()}function H_(t){return zi(t)&&!xa(t).Zo()&&t.F_.size>0}function zi(t){return K(t).M_.size===0}function FA(t){t.L_=void 0}async function TV(t){t.N_.set("Online")}async function SV(t){t.F_.forEach((e,n)=>{G_(t,e)})}async function RV(t,e){FA(t),H_(t)?(t.N_.D_(e),W_(t)):t.N_.set("Unknown")}async function AV(t,e,n){if(t.N_.set("Online"),e instanceof nA&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ih(t,r)}else if(e instanceof pd?t.L_.Ke(e):e instanceof tA?t.L_.He(e):t.L_.We(e),!n.isEqual(Z.min()))try{const r=await kA(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const d=s.F_.get(l);if(!d)return;s.F_.set(l,d.withResumeToken(ft.EMPTY_BYTE_STRING,d.snapshotVersion)),MA(s,l);const f=new Er(d.target,l,c,d.sequenceNumber);G_(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){z("RemoteStore","Failed to raise snapshot:",r),await ih(t,r)}}async function ih(t,e,n){if(!ji(e))throw e;t.M_.add(1),await Ca(t),t.N_.set("Offline"),n||(n=()=>kA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await $u(t)})}function UA(t,e){return e().catch(n=>ih(t,n,e))}async function ka(t){const e=K(t),n=Ni(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;PV(e);)try{const i=await dV(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,CV(e,i)}catch(i){await ih(e,i)}jA(e)&&BA(e)}function PV(t){return zi(t)&&t.v_.length<10}function CV(t,e){t.v_.push(e);const n=Ni(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function jA(t){return zi(t)&&!Ni(t).Zo()&&t.v_.length>0}function BA(t){Ni(t).start()}async function kV(t){Ni(t).V_()}async function xV(t){const e=Ni(t);for(const n of t.v_)e.d_(n.mutations)}async function bV(t,e,n){const r=t.v_.shift(),i=N_.from(r,e,n);await UA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ka(t)}async function NV(t,e){e&&Ni(t).E_&&await async function(r,i){if(function(o){return JR(o)&&o!==L.ABORTED}(i.code)){const s=r.v_.shift();Ni(r).t_(),await UA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ka(r)}}(t,e),jA(t)&&BA(t)}async function pI(t,e){const n=K(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=zi(n);n.M_.add(3),await Ca(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await $u(n)}async function Xm(t,e){const n=K(t);e?(n.M_.delete(2),await $u(n)):e||(n.M_.add(2),await Ca(n),n.N_.set("Unknown"))}function xa(t){return t.B_||(t.B_=function(n,r,i){const s=K(n);return s.f_(),new yV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:TV.bind(null,t),To:SV.bind(null,t),Ao:RV.bind(null,t),h_:AV.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),H_(t)?W_(t):t.N_.set("Unknown")):(await t.B_.stop(),FA(t))})),t.B_}function Ni(t){return t.k_||(t.k_=function(n,r,i){const s=K(n);return s.f_(),new vV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:kV.bind(null,t),Ao:NV.bind(null,t),R_:xV.bind(null,t),A_:bV.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await ka(t)):(await t.k_.stop(),t.v_.length>0&&(z("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class K_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new K_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ba(t,e){if(tt("AsyncQueue",`${e}: ${t}`),ji(t))return new j(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class jo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Tl(),this.sortedSet=new Ae(this.comparator)}static emptySet(e){return new jo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof jo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new jo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class mI{constructor(){this.q_=new Ae(H.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):Q():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class da{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new da(e,n,jo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class DV{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class OV{constructor(){this.queries=new Bi(e=>MR(e),Mu),this.onlineState="Unknown",this.z_=new Set}}async function Q_(t,e){const n=K(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new DV,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=ba(o,`Initialization of query '${mo(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&X_(n)}async function Y_(t,e){const n=K(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function VV(t,e){const n=K(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&X_(n)}function LV(t,e,n){const r=K(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function X_(t){t.z_.forEach(e=>{e.next()})}var Jm,gI;(gI=Jm||(Jm={})).J_="default",gI.Cache="cache";class J_{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new da(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=da.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Jm.Cache}}/**
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
 */class MV{constructor(e,n){this.ia=e,this.byteLength=n}sa(){return"metadata"in this.ia}}/**
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
 */class _I{constructor(e){this.serializer=e}Ps(e){return lr(this.serializer,e)}Is(e){return e.metadata.exists?lA(this.serializer,e.document,!1):ke.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return nt(e)}}class FV{constructor(e,n,r){this.oa=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=zA(e)}_a(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ia.namedQuery)this.queries.push(e.ia.namedQuery);else if(e.ia.documentMetadata){this.documents.push({metadata:e.ia.documentMetadata}),e.ia.documentMetadata.exists||++n;const r=ce.fromString(e.ia.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ia.document&&(this.documents[this.documents.length-1].document=e.ia.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}aa(e){const n=new Map,r=new _I(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Ps(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||ie()).add(s);n.set(o,a)}}return n}async complete(){const e=await hV(this.localStore,new _I(this.serializer),this.documents,this.oa.id),n=this.aa(this.documents);for(const r of this.queries)await fV(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ua:this.collectionGroups,ca:e}}}function zA(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class $A{constructor(e){this.key=e}}class qA{constructor(e){this.key=e}}class GA{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ie(),this.mutatedKeys=ie(),this.Ia=UR(e),this.Ta=new jo(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new mI,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),v=Fu(this.query,f)?f:null,P=!!m&&this.mutatedKeys.has(m.key),k=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let D=!1;m&&v?m.data.isEqual(v.data)?P!==k&&(r.track({type:3,doc:v}),D=!0):this.Ra(m,v)||(r.track({type:2,doc:v}),D=!0,(l&&this.Ia(v,l)>0||c&&this.Ia(v,c)<0)&&(a=!0)):!m&&v?(r.track({type:0,doc:v}),D=!0):m&&!v&&(r.track({type:1,doc:m}),D=!0,(l||c)&&(a=!0)),D&&(v?(o=o.add(v),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,f)=>function(v,P){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return k(v)-k(P)}(d.type,f.type)||this.Ia(d.doc,f.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],l=this.Pa.size===0&&this.current&&!i?1:0,c=l!==this.ha;return this.ha=l,o.length!==0||c?{snapshot:new da(this.query,e.Ta,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new mI,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ie(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new qA(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new $A(r))}),n}pa(e){this.la=e.hs,this.Pa=ie();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return da.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class UV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class jV{constructor(e){this.key=e,this.wa=!1}}class BV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Bi(a=>MR(a),Mu),this.Da=new Map,this.Ca=new Set,this.va=new Ae(H.comparator),this.Fa=new Map,this.Ma=new U_,this.xa={},this.Oa=new Map,this.Na=Ms.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function zV(t,e,n=!0){const r=Gh(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await WA(r,e,n,!0),i}async function $V(t,e){const n=Gh(t);await WA(n,e,!0,!1)}async function WA(t,e,n,r){const i=await la(t.localStore,Yt(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await Z_(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&qh(t.remoteStore,i),a}async function Z_(t,e,n,r,i){t.Ba=(f,m,v)=>async function(k,D,T,w){let S=D.view.da(T);S.Xi&&(S=await th(k.localStore,D.query,!1).then(({documents:E})=>D.view.da(E,S)));const O=w&&w.targetChanges.get(D.targetId),U=w&&w.targetMismatches.get(D.targetId)!=null,F=D.view.applyChanges(S,k.isPrimaryClient,O,U);return Zm(k,D.targetId,F.fa),F.snapshot}(t,f,m,v);const s=await th(t.localStore,e,!0),o=new GA(e,s.hs),a=o.da(s.documents),l=Bu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Zm(t,n,c.fa);const d=new UV(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function qV(t,e,n){const r=K(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!Mu(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ua(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ca(r.remoteStore,i.targetId),ha(r,i.targetId)}).catch(Ui)):(ha(r,i.targetId),await ua(r.localStore,i.targetId,!0))}async function GV(t,e){const n=K(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ca(n.remoteStore,r.targetId))}async function WV(t,e,n){const r=ry(t);try{const i=await function(o,a){const l=K(o),c=Ve.now(),d=a.reduce((v,P)=>v.add(P.key),ie());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let P=an(),k=ie();return l.os.getEntries(v,d).next(D=>{P=D,P.forEach((T,w)=>{w.isValidDocument()||(k=k.add(T))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,P)).next(D=>{f=D;const T=[];for(const w of a){const S=yO(w,f.get(w.key).overlayedDocument);S!=null&&T.push(new zr(w.key,S,CR(S.value.mapValue),Oe.exists(!0)))}return l.mutationQueue.addMutationBatch(v,c,T,a)}).next(D=>{m=D;const T=D.applyToLocalDocumentSet(f,k);return l.documentOverlayCache.saveOverlays(v,D.batchId,T)})}).then(()=>({batchId:m.batchId,changes:BR(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.xa[o.currentUser.toKey()];c||(c=new Ae(re)),c=c.insert(a,l),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await $r(r,i.changes),await ka(r.remoteStore)}catch(i){const s=ba(i,"Failed to persist write");n.reject(s)}}async function HA(t,e){const n=K(t);try{const r=await cV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?J(o.wa):i.removedDocuments.size>0&&(J(o.wa),o.wa=!1))}),await $r(n,r,e)}catch(r){await Ui(r)}}function yI(t,e,n){const r=K(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=K(o);l.onlineState=a;let c=!1;l.queries.forEach((d,f)=>{for(const m of f.U_)m.j_(a)&&(c=!0)}),c&&X_(l)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function HV(t,e,n){const r=K(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new Ae(H.comparator);o=o.insert(s,ke.newNoDocument(s,Z.min()));const a=ie().add(s),l=new ju(Z.min(),new Map,new Ae(re),o,a);await HA(r,l),r.va=r.va.remove(s),r.Fa.delete(e),ny(r)}else await ua(r.localStore,e,!1).then(()=>ha(r,e,n)).catch(Ui)}async function KV(t,e){const n=K(t),r=e.batch.batchId;try{const i=await uV(n.localStore,e);ty(n,r,null),ey(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await $r(n,i)}catch(i){await Ui(i)}}async function QV(t,e,n){const r=K(t);try{const i=await function(o,a){const l=K(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(J(f!==null),d=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>l.localDocuments.getDocuments(c,d))})}(r.localStore,e);ty(r,e,n),ey(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await $r(r,i)}catch(i){await Ui(i)}}async function YV(t,e){const n=K(t);zi(n.remoteStore)||z("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=K(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Oa.get(r)||[];i.push(e),n.Oa.set(r,i)}catch(r){const i=ba(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function ey(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function ty(t,e,n){const r=K(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function ha(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||KA(t,r)})}function KA(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(ca(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),ny(t))}function Zm(t,e,n){for(const r of n)r instanceof $A?(t.Ma.addReference(r.key,e),XV(t,r)):r instanceof qA?(z("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||KA(t,r.key)):Q()}function XV(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(z("SyncEngine","New document in limbo: "+n),t.Ca.add(r),ny(t))}function ny(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new H(ce.fromString(e)),r=t.Na.next();t.Fa.set(r,new jV(n)),t.va=t.va.insert(n,r),qh(t.remoteStore,new Er(Yt(Ra(n.path)),r,"TargetPurposeLimboResolution",sn.oe))}}async function $r(t,e,n){const r=K(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){i.push(c);const f=z_.Ki(l.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(l,c){const d=K(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>V.forEach(c,m=>V.forEach(m.qi,v=>d.persistence.referenceDelegate.addReference(f,m.targetId,v)).next(()=>V.forEach(m.Qi,v=>d.persistence.referenceDelegate.removeReference(f,m.targetId,v)))))}catch(f){if(!ji(f))throw f;z("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const v=d.ns.get(m),P=v.snapshotVersion,k=v.withLastLimboFreeSnapshotVersion(P);d.ns=d.ns.insert(m,k)}}}(r.localStore,s))}async function JV(t,e){const n=K(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const r=await CA(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(l=>{l.reject(new j(L.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await $r(n,r.us)}}function ZV(t,e){const n=K(t),r=n.Fa.get(e);if(r&&r.wa)return ie().add(r.key);{let i=ie();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}async function eL(t,e){const n=K(t),r=await th(n.localStore,e.query,!0),i=e.view.pa(r);return n.isPrimaryClient&&Zm(n,e.targetId,i.fa),i}async function tL(t,e){const n=K(t);return NA(n.localStore,e).then(r=>$r(n,r))}async function nL(t,e,n,r){const i=K(t),s=await function(a,l){const c=K(a),d=K(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",f=>d.vn(f,l).next(m=>m?c.localDocuments.getDocuments(f,m):V.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await ka(i.remoteStore):n==="acknowledged"||n==="rejected"?(ty(i,e,r||null),ey(i,e),function(a,l){K(K(a).mutationQueue).Mn(l)}(i.localStore,e)):Q(),await $r(i,s)):z("SyncEngine","Cannot apply mutation batch with id: "+e)}async function rL(t,e){const n=K(t);if(Gh(n),ry(n),e===!0&&n.La!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await vI(n,r.toArray());n.La=!0,await Xm(n.remoteStore,!0);for(const s of i)qh(n.remoteStore,s)}else if(e===!1&&n.La!==!1){const r=[];let i=Promise.resolve();n.Da.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(ha(n,o),ua(n.localStore,o,!0))),ca(n.remoteStore,o)}),await i,await vI(n,r),function(o){const a=K(o);a.Fa.forEach((l,c)=>{ca(a.remoteStore,c)}),a.Ma.mr(),a.Fa=new Map,a.va=new Ae(H.comparator)}(n),n.La=!1,await Xm(n.remoteStore,!1)}}async function vI(t,e,n){const r=K(t),i=[],s=[];for(const o of e){let a;const l=r.Da.get(o);if(l&&l.length!==0){a=await la(r.localStore,Yt(l[0]));for(const c of l){const d=r.ba.get(c),f=await eL(r,d);f.snapshot&&s.push(f.snapshot)}}else{const c=await bA(r.localStore,o);a=await la(r.localStore,c),await Z_(r,QA(c),o,!1,a.resumeToken)}i.push(a)}return r.Sa.h_(s),i}function QA(t){return LR(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function iL(t){return function(n){return K(K(n).persistence).Bi()}(K(t).localStore)}async function sL(t,e,n,r){const i=K(t);if(i.La)return void z("SyncEngine","Ignoring unexpected query state notification.");const s=i.Da.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await NA(i.localStore,FR(s[0])),a=ju.createSynthesizedRemoteEventForCurrentChange(e,n==="current",ft.EMPTY_BYTE_STRING);await $r(i,o,a);break}case"rejected":await ua(i.localStore,e,!0),ha(i,e,r);break;default:Q()}}async function oL(t,e,n){const r=Gh(t);if(r.La){for(const i of e){if(r.Da.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){z("SyncEngine","Adding an already active target "+i);continue}const s=await bA(r.localStore,i),o=await la(r.localStore,s);await Z_(r,QA(s),o.targetId,!1,o.resumeToken),qh(r.remoteStore,o)}for(const i of n)r.Da.has(i)&&await ua(r.localStore,i,!1).then(()=>{ca(r.remoteStore,i),ha(r,i)}).catch(Ui)}}function Gh(t){const e=K(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=HA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HV.bind(null,e),e.Sa.h_=VV.bind(null,e.eventManager),e.Sa.ka=LV.bind(null,e.eventManager),e}function ry(t){const e=K(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QV.bind(null,e),e}function aL(t,e,n){const r=K(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(v,P){const k=K(v),D=nt(P.createTime);return k.persistence.runTransaction("hasNewerBundle","readonly",T=>k.$r.getBundleMetadata(T,P.id)).then(T=>!!T&&T.createTime.compareTo(D)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(v){return{taskState:"Success",documentsLoaded:v.totalDocuments,bytesLoaded:v.totalBytes,totalDocuments:v.totalDocuments,totalBytes:v.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(zA(l));const c=new FV(l,s.localStore,o.serializer);let d=await o.qa();for(;d;){const m=await c._a(d);m&&a._updateProgress(m),d=await o.qa()}const f=await c.complete();return await $r(s,f.ca,void 0),await function(v,P){const k=K(v);return k.persistence.runTransaction("Save bundle","readwrite",D=>k.$r.saveBundleMetadata(D,P))}(s.localStore,l),a._completeWith(f.progress),Promise.resolve(f.ua)}catch(l){return Wn("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class eg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=zu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return PA(this.persistence,new AA,e.initialUser,this.serializer)}createPersistence(e){return new RA($h.Hr,this.serializer)}createSharedClientState(e){return new OA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class YA extends eg{constructor(e,n,r){super(),this.Qa=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Qa.initialize(this,e),await ry(this.Qa.syncEngine),await ka(this.Qa.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return PA(this.persistence,new AA,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new WO(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new kD(n,this.persistence);return new CD(e.asyncQueue,r)}createPersistence(e){const n=B_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new j_(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,VA(),md(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new OA}}class lL extends YA{constructor(e,n){super(e,n,!1),this.Qa=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Qa.syncEngine;this.sharedClientState instanceof Tp&&(this.sharedClientState.syncEngine={Zs:nL.bind(null,n),Xs:sL.bind(null,n),eo:oL.bind(null,n),Bi:iL.bind(null,n),Ys:tL.bind(null,n)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await rL(this.Qa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=VA();if(!Tp.D(n))throw new j(L.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=B_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Tp(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class iy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yI(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=JV.bind(null,this.syncEngine),await Xm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new OV}()}createDatastore(e){const n=zu(e.databaseInfo.databaseId),r=function(s){return new _V(s)}(e.databaseInfo);return function(s,o,a,l){return new wV(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new IV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>yI(this.syncEngine,n,0),function(){return fI.D()?new fI:new pV}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,d){const f=new BV(i,s,o,a,l,c);return d&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=K(r);z("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Ca(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */function wI(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class Wh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):tt("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class uL{constructor(e,n){this.Ua=e,this.serializer=n,this.metadata=new vt,this.buffer=new Uint8Array,this.Wa=function(){return new TextDecoder("utf-8")}(),this.Ga().then(r=>{r&&r.sa()?this.metadata.resolve(r.ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ia)}`))},r=>this.metadata.reject(r))}close(){return this.Ua.cancel()}async getMetadata(){return this.metadata.promise}async qa(){return await this.getMetadata(),this.Ga()}async Ga(){const e=await this.za();if(e===null)return null;const n=this.Wa.decode(e),r=Number(n);isNaN(r)&&this.ja(`length string (${n}) is not valid number`);const i=await this.Ha(r);return new MV(JSON.parse(i),e.length+r)}Ja(){return this.buffer.findIndex(e=>e===123)}async za(){for(;this.Ja()<0&&!await this.Ya(););if(this.buffer.length===0)return null;const e=this.Ja();e<0&&this.ja("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ha(e){for(;this.buffer.length<e;)await this.Ya()&&this.ja("Reached the end of bundle when more is expected.");const n=this.Wa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}ja(e){throw this.Ua.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ya(){const e=await this.Ua.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class cL{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new j(L.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=K(i),a={documents:s.map(f=>wu(o.serializer,f))},l=await o.xo("BatchGetDocuments",o.serializer.databaseId,ce.emptyPath(),a,s.length),c=new Map;l.forEach(f=>{const m=PO(o.serializer,f);c.set(m.key.toString(),m)});const d=[];return s.forEach(f=>{const m=c.get(f.toString());J(!!m),d.push(m)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Pa(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=H.fromPath(r);this.mutations.push(new x_(i,this.precondition(i)))}),await async function(r,i){const s=K(r),o={writes:i.map(a=>Eu(s.serializer,a))};await s.Co("Commit",s.serializer.databaseId,ce.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw Q();n=Z.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new j(L.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(Z.min())?Oe.exists(!1):Oe.updateTime(n):Oe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(Z.min()))throw new j(L.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Oe.updateTime(n)}return Oe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class dL{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Za=r.maxAttempts,this.Yo=new q_(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{const e=new cL(this.datastore),n=this.tu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.nu(i)}))}).catch(r=>{this.nu(r)})})}tu(e){try{const n=this.updateFunction(e);return!Vu(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}nu(e){this.Za>0&&this.ru(e)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(e)}ru(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!JR(n)}return!1}}/**
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
 */class hL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=_t.UNAUTHENTICATED,this.clientId=hR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{z("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(z("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ba(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gd(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await CA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function tg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await sy(t);z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>pI(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>pI(e.remoteStore,i)),t._onlineComponents=e}function XA(t){return t.name==="FirebaseError"?t.code===L.FAILED_PRECONDITION||t.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function sy(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await gd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!XA(n))throw n;Wn("Error using user provided cache. Falling back to memory cache: "+n),await gd(t,new eg)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await gd(t,new eg);return t._offlineComponents}async function Hh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await tg(t,t._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await tg(t,new iy))),t._onlineComponents}function JA(t){return sy(t).then(e=>e.persistence)}function oy(t){return sy(t).then(e=>e.localStore)}function ZA(t){return Hh(t).then(e=>e.remoteStore)}function ay(t){return Hh(t).then(e=>e.syncEngine)}function fL(t){return Hh(t).then(e=>e.datastore)}async function fa(t){const e=await Hh(t),n=e.eventManager;return n.onListen=zV.bind(null,e.syncEngine),n.onUnlisten=qV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$V.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=GV.bind(null,e.syncEngine),n}function pL(t){return t.asyncQueue.enqueue(async()=>{const e=await JA(t),n=await ZA(t);return e.setNetworkEnabled(!0),function(i){const s=K(i);return s.M_.delete(0),$u(s)}(n)})}function mL(t){return t.asyncQueue.enqueue(async()=>{const e=await JA(t),n=await ZA(t);return e.setNetworkEnabled(!1),async function(i){const s=K(i);s.M_.add(0),await Ca(s),s.N_.set("Offline")}(n)})}function gL(t,e){const n=new vt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,d){const f=K(c);return f.persistence.runTransaction("read document","readonly",m=>f.localDocuments.getDocument(m,d))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new j(L.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=ba(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await oy(t),e,n)),n.promise}function eP(t,e,n={}){const r=new vt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const d=new Wh({next:m=>{o.enqueueAndForget(()=>Y_(s,f));const v=m.docs.has(a);!v&&m.fromCache?c.reject(new j(L.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&l&&l.source==="server"?c.reject(new j(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new J_(Ra(a.path),d,{includeMetadataChanges:!0,ra:!0});return Q_(s,f)}(await fa(t),t.asyncQueue,e,n,r)),r.promise}function _L(t,e){const n=new vt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await th(i,s,!0),l=new GA(s,a.hs),c=l.da(a.documents),d=l.applyChanges(c,!1);o.resolve(d.snapshot)}catch(a){const l=ba(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await oy(t),e,n)),n.promise}function tP(t,e,n={}){const r=new vt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const d=new Wh({next:m=>{o.enqueueAndForget(()=>Y_(s,f)),m.fromCache&&l.source==="server"?c.reject(new j(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new J_(a,d,{includeMetadataChanges:!0,ra:!0});return Q_(s,f)}(await fa(t),t.asyncQueue,e,n,r)),r.promise}function yL(t,e){const n=new Wh(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){K(i).z_.add(s),s.next()}(await fa(t),n)),()=>{n.$a(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){K(i).z_.delete(s)}(await fa(t),n))}}function vL(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?eA().encode(o):o,function(d,f){return new uL(d,f)}(function(d,f){if(d instanceof Uint8Array)return wI(d,f);if(d instanceof ArrayBuffer)return wI(new Uint8Array(d),f);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,zu(e));t.asyncQueue.enqueueAndForget(async()=>{aL(await ay(t),i,r)})}function wL(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=K(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await oy(t),e))}/**
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
 */function nP(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const EI=new Map;/**
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
 */function ly(t,e,n){if(!n)throw new j(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rP(t,e,n,r){if(e===!0&&r===!0)throw new j(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function II(t){if(!H.isDocumentKey(t))throw new j(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function TI(t){if(H.isDocumentKey(t))throw new j(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function ge(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kh(t);throw new j(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function iP(t,e){if(e<=0)throw new j(L.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class SI{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nP((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new j(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new j(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new j(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new SI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new SI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _D;switch(r.type){case"firstParty":return new ED(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=EI.get(n);r&&(z("ComponentProvider","Removing Datastore"),EI.delete(n),r.terminate())}(this),Promise.resolve()}}function sP(t,e,n,r={}){var i;const s=(t=ge(t,qu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=_t.MOCK_USER;else{a=jS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new j(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new _t(c)}t._authCredentials=new yD(new dR(a,l))}}/**
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
 */let Xt=class oP{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new oP(this.firestore,e,this._query)}},Ue=class aP{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ii(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new aP(this.firestore,e,this._key)}},Ii=class lP extends Xt{constructor(e,n,r){super(e,n,Ra(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new H(e))}withConverter(e){return new lP(this.firestore,e,this._path)}};function sh(t,e,...n){if(t=X(t),ly("collection","path",e),t instanceof qu){const r=ce.fromString(e,...n);return TI(r),new Ii(t,null,r)}{if(!(t instanceof Ue||t instanceof Ii))throw new j(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ce.fromString(e,...n));return TI(r),new Ii(t.firestore,null,r)}}function EL(t,e){if(t=ge(t,qu),ly("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new j(L.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Xt(t,null,function(r){return new Br(ce.emptyPath(),r)}(e))}function pa(t,e,...n){if(t=X(t),arguments.length===1&&(e=hR.newId()),ly("doc","path",e),t instanceof qu){const r=ce.fromString(e,...n);return II(r),new Ue(t,null,new H(r))}{if(!(t instanceof Ue||t instanceof Ii))throw new j(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ce.fromString(e,...n));return II(r),new Ue(t.firestore,t instanceof Ii?t.converter:null,new H(r))}}function uP(t,e){return t=X(t),e=X(e),(t instanceof Ue||t instanceof Ii)&&(e instanceof Ue||e instanceof Ii)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function cP(t,e){return t=X(t),e=X(e),t instanceof Xt&&e instanceof Xt&&t.firestore===e.firestore&&Mu(t._query,e._query)&&t.converter===e.converter}/**
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
 */class IL{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new q_(this,"async_queue_retry"),this.hu=()=>{const n=md();n&&z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=md();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=md();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new vt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!ji(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw tt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=K_.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&Q()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function ng(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class TL{constructor(){this._progressObserver={},this._taskCompletionResolver=new vt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const SL=-1;let Ye=class extends qu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new IL}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||dP(this),this._firestoreClient.terminate()}};function RL(t,e){const n=typeof t=="object"?t:Lh(),r=typeof t=="string"?t:"(default)",i=Ta(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=MS("firestore");s&&sP(i,...s)}return i}function Tt(t){return t._firestoreClient||dP(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function dP(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,d){return new YD(a,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,nP(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new hL(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function AL(t,e){fP(t=ge(t,Ye));const n=Tt(t);if(n._uninitializedComponentsProvider)throw new j(L.FAILED_PRECONDITION,"SDK cache is already specified.");Wn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new iy;return hP(n,i,new YA(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function PL(t){fP(t=ge(t,Ye));const e=Tt(t);if(e._uninitializedComponentsProvider)throw new j(L.FAILED_PRECONDITION,"SDK cache is already specified.");Wn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new iy;return hP(e,r,new lL(r,n.cacheSizeBytes))}function hP(t,e,n){const r=new vt;return t.asyncQueue.enqueue(async()=>{try{await gd(t,n),await tg(t,e),r.resolve()}catch(i){const s=i;if(!XA(s))throw s;Wn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function CL(t){if(t._initialized&&!t._terminated)throw new j(L.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new vt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!ar.D())return Promise.resolve();const i=r+"main";await ar.delete(i)}(B_(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function kL(t){return function(n){const r=new vt;return n.asyncQueue.enqueueAndForget(async()=>YV(await ay(n),r)),r.promise}(Tt(t=ge(t,Ye)))}function xL(t){return pL(Tt(t=ge(t,Ye)))}function bL(t){return mL(Tt(t=ge(t,Ye)))}function NL(t,e){const n=Tt(t=ge(t,Ye)),r=new TL;return vL(n,t._databaseId,e,r),r}function DL(t,e){return wL(Tt(t=ge(t,Ye)),e).then(n=>n?new Xt(t,null,n.query):null)}function fP(t){if(t._initialized||t._terminated)throw new j(L.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class dr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new dr(ft.fromBase64String(e))}catch(n){throw new j(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new dr(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let Di=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new De(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let Ws=class{constructor(e){this._methodName=e}};/**
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
 */class Qh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
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
 */const OL=/^__.*__$/;class VL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Aa(e,this.data,n,this.fieldTransforms)}}class pP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new zr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function mP(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Yh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Yh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return oh(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(mP(this.fu)&&OL.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class LL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||zu(e)}Fu(e,n,r,i=!1){return new Yh({fu:e,methodName:n,vu:r,path:De.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hs(t){const e=t._freezeSettings(),n=zu(t._databaseId);return new LL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Xh(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);my("Data must be an object, but it was:",o,r);const a=yP(r,o);let l,c;if(s.merge)l=new on(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=rg(e,f,n);if(!o.contains(m))throw new j(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);wP(d,m)||d.push(m)}l=new on(d),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new VL(new Pt(a),l,c)}class Gu extends Ws{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gu}}function gP(t,e,n){return new Yh({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class uy extends Ws{_toFieldTransform(e){return new Uu(e.path,new sa)}isEqual(e){return e instanceof uy}}class cy extends Ws{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=gP(this,e,!0),r=this.Mu.map(s=>Ks(s,n)),i=new Ds(r);return new Uu(e.path,i)}isEqual(e){return e instanceof cy&&Zo(this.Mu,e.Mu)}}class dy extends Ws{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=gP(this,e,!0),r=this.Mu.map(s=>Ks(s,n)),i=new Os(r);return new Uu(e.path,i)}isEqual(e){return e instanceof dy&&Zo(this.Mu,e.Mu)}}class hy extends Ws{constructor(e,n){super(e),this.xu=n}_toFieldTransform(e){const n=new oa(e.serializer,GR(e.serializer,this.xu));return new Uu(e.path,n)}isEqual(e){return e instanceof hy&&this.xu===e.xu}}function fy(t,e,n,r){const i=t.Fu(1,e,n);my("Data must be an object, but it was:",i,r);const s=[],o=Pt.empty();Gs(r,(l,c)=>{const d=gy(e,l,n);c=X(c);const f=i.Su(d);if(c instanceof Gu)s.push(d);else{const m=Ks(c,f);m!=null&&(s.push(d),o.set(d,m))}});const a=new on(s);return new pP(o,a,i.fieldTransforms)}function py(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[rg(e,r,n)],l=[i];if(s.length%2!=0)throw new j(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(rg(e,s[m])),l.push(s[m+1]);const c=[],d=Pt.empty();for(let m=a.length-1;m>=0;--m)if(!wP(c,a[m])){const v=a[m];let P=l[m];P=X(P);const k=o.Su(v);if(P instanceof Gu)c.push(v);else{const D=Ks(P,k);D!=null&&(c.push(v),d.set(v,D))}}const f=new on(c);return new pP(d,f,o.fieldTransforms)}function _P(t,e,n,r=!1){return Ks(n,t.Fu(r?4:3,e))}function Ks(t,e){if(vP(t=X(t)))return my("Unsupported field value:",e,t),yP(t,e);if(t instanceof Ws)return function(r,i){if(!mP(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Ks(a,i.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=X(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return GR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ve.fromDate(r);return{timestampValue:aa(i.serializer,s)}}if(r instanceof Ve){const s=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:aa(i.serializer,s)}}if(r instanceof Qh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof dr)return{bytesValue:rA(i.serializer,r._byteString)};if(r instanceof Ue){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:V_(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Kh(r)}`)}(t,e)}function yP(t,e){const n={};return RR(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gs(t,(r,i)=>{const s=Ks(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function vP(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof Qh||t instanceof dr||t instanceof Ue||t instanceof Ws)}function my(t,e,n){if(!vP(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Kh(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function rg(t,e,n){if((e=X(e))instanceof Di)return e._internalPath;if(typeof e=="string")return gy(t,e);throw oh("Field path arguments must be of type string or ",t,!1,void 0,n)}const ML=new RegExp("[~\\*/\\[\\]]");function gy(t,e,n){if(e.search(ML)>=0)throw oh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Di(...e.split("."))._internalPath}catch{throw oh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function oh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new j(L.INVALID_ARGUMENT,a+t+l)}function wP(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Iu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class FL extends Iu{data(){return super.data()}}function Jh(t,e){return typeof e=="string"?gy(t,e):e instanceof Di?e._internalPath:e._delegate._internalPath}/**
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
 */function EP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new j(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _y{}class Wu extends _y{}function gr(t,e,...n){let r=[];e instanceof _y&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof yy).length,a=s.filter(l=>l instanceof Zh).length;if(o>1||o>0&&a>0)throw new j(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Zh extends Wu{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Zh(e,n,r)}_apply(e){const n=this._parse(e);return SP(e._query,n),new Xt(e.firestore,e.converter,zm(e._query,n))}_parse(e){const n=Hs(e.firestore);return function(s,o,a,l,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new j(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){AI(f,d);const v=[];for(const P of f)v.push(RI(l,s,P));m={arrayValue:{values:v}}}else m=RI(l,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||AI(f,d),m=_P(a,o,f,d==="in"||d==="not-in");return de.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function IP(t,e,n){const r=e,i=Jh("where",t);return Zh._create(i,r,n)}class yy extends _y{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new yy(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ee.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)SP(o,l),o=zm(o,l)}(e._query,n),new Xt(e.firestore,e.converter,zm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class vy extends Wu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new vy(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new j(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new j(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new vu(s,o)}(e._query,this._field,this._direction);return new Xt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Br(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function UL(t,e="asc"){const n=e,r=Jh("orderBy",t);return vy._create(r,n)}class ef extends Wu{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new ef(e,n,r)}_apply(e){return new Xt(e.firestore,e.converter,Xd(e._query,this._limit,this._limitType))}}function jL(t){return iP("limit",t),ef._create("limit",t,"F")}function BL(t){return iP("limitToLast",t),ef._create("limitToLast",t,"L")}class tf extends Wu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new tf(e,n,r)}_apply(e){const n=TP(e,this.type,this._docOrFields,this._inclusive);return new Xt(e.firestore,e.converter,function(i,s){return new Br(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function zL(...t){return tf._create("startAt",t,!0)}function $L(...t){return tf._create("startAfter",t,!1)}class nf extends Wu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new nf(e,n,r)}_apply(e){const n=TP(e,this.type,this._docOrFields,this._inclusive);return new Xt(e.firestore,e.converter,function(i,s){return new Br(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function qL(...t){return nf._create("endBefore",t,!1)}function GL(...t){return nf._create("endAt",t,!0)}function TP(t,e,n,r){if(n[0]=X(n[0]),n[0]instanceof Iu)return function(s,o,a,l,c){if(!l)throw new j(L.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const f of Uo(s))if(f.field.isKeyField())d.push(bs(o,l.key));else{const m=l.data.field(f.field);if(Fh(m))throw new j(L.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const v=f.field.canonicalString();throw new j(L.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${v}' (used as the orderBy) does not exist.`)}d.push(m)}return new bi(d,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Hs(t.firestore);return function(o,a,l,c,d,f){const m=o.explicitOrderBy;if(d.length>m.length)throw new j(L.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const v=[];for(let P=0;P<d.length;P++){const k=d[P];if(m[P].field.isKeyField()){if(typeof k!="string")throw new j(L.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof k}`);if(!C_(o)&&k.indexOf("/")!==-1)throw new j(L.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${k}' contains a slash.`);const D=o.path.child(ce.fromString(k));if(!H.isDocumentKey(D))throw new j(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${D}' is not because it contains an odd number of segments.`);const T=new H(D);v.push(bs(a,T))}else{const D=_P(l,c,k);v.push(D)}}return new bi(v,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function RI(t,e,n){if(typeof(n=X(n))=="string"){if(n==="")throw new j(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!C_(e)&&n.indexOf("/")!==-1)throw new j(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ce.fromString(n));if(!H.isDocumentKey(r))throw new j(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return bs(t,new H(r))}if(n instanceof Ue)return bs(t,n._key);throw new j(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Kh(n)}.`)}function AI(t,e){if(!Array.isArray(t)||t.length===0)throw new j(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function SP(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new j(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class wy{convertValue(e,n="none"){switch(xs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Gs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Qh(Ke(e.latitude),Ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=A_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(gu(e));default:return null}}convertTimestamp(e){const n=Vr(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ce.fromString(e);J(pA(r));const i=new ki(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||tt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function rf(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class WL extends wy{constructor(e){super(),this.firestore=e}convertBytes(e){return new dr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,n)}}/**
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
 */class ps{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Lr=class extends Iu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Jh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},zl=class extends Lr{data(e={}){return super.data(e)}},Oi=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ps(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new zl(this._firestore,this._userDataWriter,r.key,r,new ps(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new zl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ps(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new zl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ps(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:HL(a.type),doc:l,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function HL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}function RP(t,e){return t instanceof Lr&&e instanceof Lr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Oi&&e instanceof Oi&&t._firestore===e._firestore&&cP(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function KL(t){t=ge(t,Ue);const e=ge(t.firestore,Ye);return eP(Tt(e),t._key).then(n=>Ey(e,t,n))}class Qs extends wy{constructor(e){super(),this.firestore=e}convertBytes(e){return new dr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,n)}}function QL(t){t=ge(t,Ue);const e=ge(t.firestore,Ye),n=Tt(e),r=new Qs(e);return gL(n,t._key).then(i=>new Lr(e,r,t._key,i,new ps(i!==null&&i.hasLocalMutations,!0),t.converter))}function YL(t){t=ge(t,Ue);const e=ge(t.firestore,Ye);return eP(Tt(e),t._key,{source:"server"}).then(n=>Ey(e,t,n))}function AP(t){t=ge(t,Xt);const e=ge(t.firestore,Ye),n=Tt(e),r=new Qs(e);return EP(t._query),tP(n,t._query).then(i=>new Oi(e,r,t,i))}function XL(t){t=ge(t,Xt);const e=ge(t.firestore,Ye),n=Tt(e),r=new Qs(e);return _L(n,t._query).then(i=>new Oi(e,r,t,i))}function JL(t){t=ge(t,Xt);const e=ge(t.firestore,Ye),n=Tt(e),r=new Qs(e);return tP(n,t._query,{source:"server"}).then(i=>new Oi(e,r,t,i))}function PI(t,e,n){t=ge(t,Ue);const r=ge(t.firestore,Ye),i=rf(t.converter,e,n);return Hu(r,[Xh(Hs(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Oe.none())])}function ig(t,e,n,...r){t=ge(t,Ue);const i=ge(t.firestore,Ye),s=Hs(i);let o;return o=typeof(e=X(e))=="string"||e instanceof Di?py(s,"updateDoc",t._key,e,n,r):fy(s,"updateDoc",t._key,e),Hu(i,[o.toMutation(t._key,Oe.exists(!0))])}function PP(t){return Hu(ge(t.firestore,Ye),[new Pa(t._key,Oe.none())])}function CP(t,e){const n=ge(t.firestore,Ye),r=pa(t),i=rf(t.converter,e);return Hu(n,[Xh(Hs(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Oe.exists(!1))]).then(()=>r)}function kP(t,...e){var n,r,i;t=X(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||ng(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(ng(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,d;if(t instanceof Ue)c=ge(t.firestore,Ye),d=Ra(t._key.path),l={next:f=>{e[o]&&e[o](Ey(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=ge(t,Xt);c=ge(f.firestore,Ye),d=f._query;const m=new Qs(c);l={next:v=>{e[o]&&e[o](new Oi(c,m,f,v))},error:e[o+1],complete:e[o+2]},EP(t._query)}return function(m,v,P,k){const D=new Wh(k),T=new J_(v,D,P);return m.asyncQueue.enqueueAndForget(async()=>Q_(await fa(m),T)),()=>{D.$a(),m.asyncQueue.enqueueAndForget(async()=>Y_(await fa(m),T))}}(Tt(c),d,a,l)}function ZL(t,e){return yL(Tt(t=ge(t,Ye)),ng(e)?e:{next:e})}function Hu(t,e){return function(r,i){const s=new vt;return r.asyncQueue.enqueueAndForget(async()=>WV(await ay(r),i,s)),s.promise}(Tt(t),e)}function Ey(t,e,n){const r=n.docs.get(e._key),i=new Qs(t);return new Lr(t,i,e._key,r,new ps(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const eM={maxAttempts:5};/**
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
 */let tM=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Hs(e)}set(e,n,r){this._verifyNotCommitted();const i=ai(e,this._firestore),s=rf(i.converter,n,r),o=Xh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Oe.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=ai(e,this._firestore);let o;return o=typeof(n=X(n))=="string"||n instanceof Di?py(this._dataReader,"WriteBatch.update",s._key,n,r,i):fy(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Oe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=ai(e,this._firestore);return this._mutations=this._mutations.concat(new Pa(n._key,Oe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new j(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function ai(t,e){if((t=X(t)).firestore!==e)throw new j(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */let nM=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Hs(n)}get(n){const r=ai(n,this._firestore),i=new WL(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return Q();const o=s[0];if(o.isFoundDocument())return new Iu(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Iu(this._firestore,i,r._key,null,r.converter);throw Q()})}set(n,r,i){const s=ai(n,this._firestore),o=rf(s.converter,r,i),a=Xh(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=ai(n,this._firestore);let a;return a=typeof(r=X(r))=="string"||r instanceof Di?py(this._dataReader,"Transaction.update",o._key,r,i,s):fy(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=ai(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=ai(e,this._firestore),r=new Qs(this._firestore);return super.get(e).then(i=>new Lr(this._firestore,r,n._key,i._document,new ps(!1,!1),n.converter))}};function rM(t,e,n){t=ge(t,Ye);const r=Object.assign(Object.assign({},eM),n);return function(s){if(s.maxAttempts<1)throw new j(L.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new vt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await fL(s);new dL(s.asyncQueue,c,a,o,l).Xa()}),l.promise}(Tt(t),i=>e(new nM(t,i)),r)}/**
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
 */function iM(){return new Gu("deleteField")}function sM(){return new uy("serverTimestamp")}function oM(...t){return new cy("arrayUnion",t)}function aM(...t){return new dy("arrayRemove",t)}function lM(t){return new hy("increment",t)}(function(e,n=!0){(function(i){Sa=i})(jr),Or(new On("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ye(new vD(r.getProvider("auth-internal")),new TD(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new j(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ki(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),vn(EE,"4.6.4",e),vn(EE,"4.6.4","esm2017")})();/**
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
 */class uM{constructor(e,n){this._delegate=e,this.firebase=n,du(e,new On("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),I_(this._delegate)))}_getService(e,n=Ri){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ri){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){du(this._delegate,e)}_addOrOverwriteComponent(e){XS(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const cM={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},CI=new qs("app-compat","Firebase",cM);/**
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
 */function dM(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:vn,setLogLevel:tR,onLog:eR,apps:null,SDK_VERSION:jr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:pD}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||Ri,!hE(e,c))throw CI.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,d={}){const f=E_(c,d);if(hE(e,f.name))return e[f.name];const m=new t(f,n);return e[f.name]=m,m}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const d=c.name,f=d.replace("-compat","");if(Or(c)&&c.type==="PUBLIC"){const m=(v=i())=>{if(typeof v[f]!="function")throw CI.create("invalid-app-argument",{appName:d});return v[f]()};c.serviceProps!==void 0&&Wd(m,c.serviceProps),n[f]=m,t.prototype[f]=function(...v){return this._getService.bind(this,d).apply(this,c.multipleInstances?v:[])}}return c.type==="PUBLIC"?n[f]:null}function l(c,d){return d==="serverAuth"?null:d}return n}/**
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
 */function xP(){const t=dM(uM);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:xP,extendNamespace:e,createSubscribe:WS,ErrorFactory:qs,deepExtend:Wd});function e(n){Wd(t,n)}return t}const hM=xP();/**
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
 */const kI=new Vh("@firebase/app-compat"),fM="@firebase/app-compat",pM="0.2.36";/**
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
 */function mM(t){vn(fM,pM,t)}/**
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
 */if(BS()&&self.firebase!==void 0){kI.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&kI.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Ys=hM;mM();var gM="firebase",_M="10.12.3";/**
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
 */Ys.registerVersion(gM,_M,"app-compat");function Iy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const fl={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},lo={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function yM(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function bP(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vM=yM,wM=bP,NP=new qs("auth","Firebase",bP());/**
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
 */const ah=new Vh("@firebase/auth");function EM(t,...e){ah.logLevel<=ae.WARN&&ah.warn(`Auth (${jr}): ${t}`,...e)}function _d(t,...e){ah.logLevel<=ae.ERROR&&ah.error(`Auth (${jr}): ${t}`,...e)}/**
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
 */function Et(t,...e){throw Sy(t,...e)}function ht(t,...e){return Sy(t,...e)}function Ty(t,e,n){const r=Object.assign(Object.assign({},wM()),{[e]:n});return new qs("auth","Firebase",r).create(e,{appName:t.name})}function wt(t){return Ty(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Na(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Et(t,"argument-error"),Ty(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Sy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return NP.create(t,...e)}function q(t,e,...n){if(!t)throw Sy(e,...n)}function ir(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _d(e),new Error(e)}function Hn(t,e){t||ir(e)}/**
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
 */function Tu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ry(){return xI()==="http:"||xI()==="https:"}function xI(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function IM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ry()||$S()||"connection"in navigator)?navigator.onLine:!0}function TM(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ku{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=Xb()||y_()}get(){return IM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ay(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class DP{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const SM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const RM=new Ku(3e4,6e4);function Je(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ze(t,e,n,r,i={}){return OP(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ia(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),DP.fetch()(VP(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function OP(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},SM),e);try{const i=new PM(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Al(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Al(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Al(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Al(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ty(t,d,c);Et(t,d)}}catch(i){if(i instanceof Ut)throw i;Et(t,"network-request-failed",{message:String(i)})}}async function qr(t,e,n,r,i={}){const s=await Ze(t,e,n,r,i);return"mfaPendingCredential"in s&&Et(t,"multi-factor-auth-required",{_serverResponse:s}),s}function VP(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ay(t.config,i):`${t.config.apiScheme}://${i}`}function AM(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class PM{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ht(this.auth,"network-request-failed")),RM.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Al(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ht(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function bI(t){return t!==void 0&&t.getResponse!==void 0}function NI(t){return t!==void 0&&t.enterprise!==void 0}class CM{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return AM(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function kM(t){return(await Ze(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function xM(t,e){return Ze(t,"GET","/v2/recaptchaConfig",Je(t,e))}/**
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
 */async function bM(t,e){return Ze(t,"POST","/v1/accounts:delete",e)}async function NM(t,e){return Ze(t,"POST","/v1/accounts:update",e)}async function LP(t,e){return Ze(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function $l(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DM(t,e=!1){const n=X(t),r=await n.getIdToken(e),i=sf(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:$l(Rp(i.auth_time)),issuedAtTime:$l(Rp(i.iat)),expirationTime:$l(Rp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Rp(t){return Number(t)*1e3}function sf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _d("JWT malformed, contained fewer than 3 sections"),null;try{const i=VS(n);return i?JSON.parse(i):(_d("Failed to decode base64 JWT payload"),null)}catch(i){return _d("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function DI(t){const e=sf(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Mr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ut&&OM(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function OM({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class VM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$l(this.lastLoginAt),this.creationTime=$l(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Su(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Mr(t,LP(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?MP(s.providerUserInfo):[],a=MM(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new sg(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function LM(t){const e=X(t);await Su(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MM(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function MP(t){return t.map(e=>{var{providerId:n}=e,r=Iy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function FM(t,e){const n=await OP(t,{},async()=>{const r=Ia({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=VP(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",DP.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function UM(t,e){return Ze(t,"POST","/v2/accounts:revokeToken",Je(t,e))}/**
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
 */class Bo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):DI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=DI(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await FM(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Bo;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bo,this.toJSON())}_performRefresh(){return ir("not implemented")}}/**
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
 */function ei(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ir{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Iy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sg(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Mr(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return DM(this,e)}reload(){return LM(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ir(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Su(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qe(this.auth.app))return Promise.reject(wt(this.auth));const e=await this.getIdToken();return await Mr(this,bM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:S,emailVerified:O,isAnonymous:U,providerData:F,stsTokenManager:E}=n;q(S&&E,e,"internal-error");const y=Bo.fromJSON(this.name,E);q(typeof S=="string",e,"internal-error"),ei(f,e.name),ei(m,e.name),q(typeof O=="boolean",e,"internal-error"),q(typeof U=="boolean",e,"internal-error"),ei(v,e.name),ei(P,e.name),ei(k,e.name),ei(D,e.name),ei(T,e.name),ei(w,e.name);const I=new Ir({uid:S,auth:e,email:m,emailVerified:O,displayName:f,isAnonymous:U,photoURL:P,phoneNumber:v,tenantId:k,stsTokenManager:y,createdAt:T,lastLoginAt:w});return F&&Array.isArray(F)&&(I.providerData=F.map(R=>Object.assign({},R))),D&&(I._redirectEventId=D),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new Bo;i.updateFromServerResponse(n);const s=new Ir({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Su(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?MP(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Bo;a.updateFromIdToken(r);const l=new Ir({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new sg(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const OI=new Map;function _n(t){Hn(t instanceof Function,"Expected a class definition");let e=OI.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,OI.set(t,e),e)}/**
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
 */class FP{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}FP.type="NONE";const ma=FP;/**
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
 */function ws(t,e,n){return`firebase:${t}:${e}:${n}`}class zo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ws(this.userKey,i.apiKey,s),this.fullPersistenceKey=ws("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ir._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zo(_n(ma),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||_n(ma);const o=ws(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Ir._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new zo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new zo(s,e,r))}}/**
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
 */function VI(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(BP(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(UP(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zP(e))return"Blackberry";if($P(e))return"Webos";if(Py(e))return"Safari";if((e.includes("chrome/")||jP(e))&&!e.includes("edge/"))return"Chrome";if(Qu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function UP(t=Le()){return/firefox\//i.test(t)}function Py(t=Le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jP(t=Le()){return/crios\//i.test(t)}function BP(t=Le()){return/iemobile/i.test(t)}function Qu(t=Le()){return/android/i.test(t)}function zP(t=Le()){return/blackberry/i.test(t)}function $P(t=Le()){return/webos/i.test(t)}function Da(t=Le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jM(t=Le()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function BM(t=Le()){var e;return Da(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zM(){return qS()&&document.documentMode===10}function qP(t=Le()){return Da(t)||Qu(t)||$P(t)||zP(t)||/windows phone/i.test(t)||BP(t)}function $M(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function GP(t,e=[]){let n;switch(t){case"Browser":n=VI(Le());break;case"Worker":n=`${VI(Le())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${jr}/${r}`}/**
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
 */class qM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function GM(t,e={}){return Ze(t,"GET","/v2/passwordPolicy",Je(t,e))}/**
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
 */const WM=6;class HM{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:WM,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class KM{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new LI(this),this.idTokenSubscription=new LI(this),this.beforeStateQueue=new qM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=NP,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await zo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await LP(this,{idToken:e}),r=await Ir._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Qe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Su(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qe(this.app))return Promise.reject(wt(this));const n=e?X(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qe(this.app)?Promise.reject(wt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qe(this.app)?Promise.reject(wt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GM(this),n=new HM(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await UM(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await zo.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=GP(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&EM(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xe(t){return X(t)}class LI{constructor(e){this.auth=e,this.observer=null,this.addObserver=WS(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Yu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QM(t){Yu=t}function Cy(t){return Yu.loadJS(t)}function YM(){return Yu.recaptchaV2Script}function XM(){return Yu.recaptchaEnterpriseScript}function JM(){return Yu.gapiScript}function WP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ZM="recaptcha-enterprise",eF="NO_RECAPTCHA";class tF{constructor(e){this.type=ZM,this.auth=Xe(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{xM(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new CM(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;NI(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(eF)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&NI(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=XM();l.length!==0&&(l+=a),Cy(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function MI(t,e,n,r=!1){const i=new tF(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ru(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await MI(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await MI(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function nF(t,e){const n=Ta(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Zo(s,e??{}))return i;Et(i,"already-initialized")}return n.initialize({options:e})}function rF(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function HP(t,e,n){const r=Xe(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=KP(e),{host:o,port:a}=iF(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||sF()}function KP(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function iF(t){const e=KP(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:FI(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:FI(o)}}}function FI(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sF(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Oa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ir("not implemented")}_getIdTokenResponse(e){return ir("not implemented")}_linkToIdToken(e,n){return ir("not implemented")}_getReauthenticationResolver(e){return ir("not implemented")}}/**
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
 */async function QP(t,e){return Ze(t,"POST","/v1/accounts:resetPassword",Je(t,e))}async function oF(t,e){return Ze(t,"POST","/v1/accounts:update",e)}async function aF(t,e){return Ze(t,"POST","/v1/accounts:signUp",e)}async function lF(t,e){return Ze(t,"POST","/v1/accounts:update",Je(t,e))}/**
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
 */async function uF(t,e){return qr(t,"POST","/v1/accounts:signInWithPassword",Je(t,e))}async function of(t,e){return Ze(t,"POST","/v1/accounts:sendOobCode",Je(t,e))}async function cF(t,e){return of(t,e)}async function dF(t,e){return of(t,e)}async function hF(t,e){return of(t,e)}async function fF(t,e){return of(t,e)}/**
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
 */async function pF(t,e){return qr(t,"POST","/v1/accounts:signInWithEmailLink",Je(t,e))}async function mF(t,e){return qr(t,"POST","/v1/accounts:signInWithEmailLink",Je(t,e))}/**
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
 */class Au extends Oa{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Au(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Au(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ru(e,n,"signInWithPassword",uF);case"emailLink":return pF(e,{email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ru(e,r,"signUpPassword",aF);case"emailLink":return mF(e,{idToken:n,email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Pr(t,e){return qr(t,"POST","/v1/accounts:signInWithIdp",Je(t,e))}/**
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
 */const gF="http://localhost";class hr extends Oa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Iy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new hr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Pr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pr(e,n)}buildRequest(){const e={requestUri:gF,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ia(n)}return e}}/**
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
 */async function _F(t,e){return Ze(t,"POST","/v1/accounts:sendVerificationCode",Je(t,e))}async function yF(t,e){return qr(t,"POST","/v1/accounts:signInWithPhoneNumber",Je(t,e))}async function vF(t,e){const n=await qr(t,"POST","/v1/accounts:signInWithPhoneNumber",Je(t,e));if(n.temporaryProof)throw Al(t,"account-exists-with-different-credential",n);return n}const wF={USER_NOT_FOUND:"user-not-found"};async function EF(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return qr(t,"POST","/v1/accounts:signInWithPhoneNumber",Je(t,n),wF)}/**
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
 */class Es extends Oa{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Es({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Es({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return yF(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return vF(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return EF(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Es({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function IF(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TF(t){const e=No(El(t)).link,n=e?No(El(e)).deep_link_id:null,r=No(El(t)).deep_link_id;return(r?No(El(r)).link:null)||r||n||e||t}class af{constructor(e){var n,r,i,s,o,a;const l=No(El(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,f=IF((i=l.mode)!==null&&i!==void 0?i:null);q(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=TF(e);try{return new af(n)}catch{return null}}}/**
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
 */class $i{constructor(){this.providerId=$i.PROVIDER_ID}static credential(e,n){return Au._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=af.parseLink(n);return q(r,"argument-error"),Au._fromEmailAndCode(e,r.code,r.tenantId)}}$i.PROVIDER_ID="password";$i.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$i.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Gr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Va extends Gr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class $o extends Va{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return q("providerId"in n&&"signInMethod"in n,"argument-error"),hr._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return q(e.idToken||e.accessToken,"argument-error"),hr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return $o.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return $o.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new $o(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Xn extends Va{constructor(){super("facebook.com")}static credential(e){return hr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xn.PROVIDER_ID="facebook.com";/**
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
 */class Jn extends Va{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
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
 */class Zn extends Va{constructor(){super("github.com")}static credential(e){return hr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
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
 */const SF="http://localhost";class ga extends Oa{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Pr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new ga(r,s)}static _create(e,n){return new ga(e,n)}buildRequest(){return{requestUri:SF,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const RF="saml.";class lh extends Gr{constructor(e){q(e.startsWith(RF),"argument-error"),super(e)}static credentialFromResult(e){return lh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return lh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=ga.fromJSON(e);return q(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return ga._create(r,n)}catch{return null}}}/**
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
 */class er extends Va{constructor(){super("twitter.com")}static credential(e,n){return hr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return er.credential(n,r)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
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
 */async function YP(t,e){return qr(t,"POST","/v1/accounts:signUp",Je(t,e))}/**
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
 */class Vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ir._fromIdTokenResponse(e,r,i),o=UI(r);return new Vn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=UI(r);return new Vn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function UI(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function AF(t){var e;if(Qe(t.app))return Promise.reject(wt(t));const n=Xe(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Vn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await YP(n,{returnSecureToken:!0}),i=await Vn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class uh extends Ut{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,uh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new uh(e,n,r,i)}}function XP(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?uh._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function JP(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function PF(t,e){const n=X(t);await lf(!0,n,e);const{providerUserInfo:r}=await NM(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=JP(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function ky(t,e,n=!1){const r=await Mr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vn._forOperation(t,"link",r)}async function lf(t,e,n){await Su(e);const r=JP(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";q(r.has(n)===t,e.auth,i)}/**
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
 */async function ZP(t,e,n=!1){const{auth:r}=t;if(Qe(r.app))return Promise.reject(wt(r));const i="reauthenticate";try{const s=await Mr(t,XP(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=sf(s.idToken);q(o,r,"internal-error");const{sub:a}=o;return q(t.uid===a,r,"user-mismatch"),Vn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Et(r,"user-mismatch"),s}}/**
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
 */async function eC(t,e,n=!1){if(Qe(t.app))return Promise.reject(wt(t));const r="signIn",i=await XP(t,r,e),s=await Vn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function uf(t,e){return eC(Xe(t),e)}async function tC(t,e){const n=X(t);return await lf(!1,n,e.providerId),ky(n,e)}async function nC(t,e){return ZP(X(t),e)}/**
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
 */async function CF(t,e){return qr(t,"POST","/v1/accounts:signInWithCustomToken",Je(t,e))}/**
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
 */async function kF(t,e){if(Qe(t.app))return Promise.reject(wt(t));const n=Xe(t),r=await CF(n,{token:e,returnSecureToken:!0}),i=await Vn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class Xu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?xy._fromServerResponse(e,n):"totpInfo"in n?by._fromServerResponse(e,n):Et(e,"internal-error")}}class xy extends Xu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new xy(n)}}class by extends Xu{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new by(n)}}/**
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
 */function cf(t,e,n){var r;q(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),q(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(q(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(q(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Ny(t){const e=Xe(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function xF(t,e,n){const r=Xe(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&cf(r,i,n),await Ru(r,i,"getOobCode",dF)}async function bF(t,e,n){await QP(X(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ny(t),r})}async function NF(t,e){await lF(X(t),{oobCode:e})}async function rC(t,e){const n=X(t),r=await QP(n,{oobCode:e}),i=r.requestType;switch(q(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":q(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":q(r.mfaInfo,n,"internal-error");default:q(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Xu._fromServerResponse(Xe(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function DF(t,e){const{data:n}=await rC(X(t),e);return n.email}async function iC(t,e,n){if(Qe(t.app))return Promise.reject(wt(t));const r=Xe(t),o=await Ru(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",YP).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Ny(t),l}),a=await Vn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function sC(t,e,n){return Qe(t.app)?Promise.reject(wt(t)):uf(X(t),$i.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ny(t),r})}/**
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
 */async function OF(t,e,n){const r=Xe(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){q(a.handleCodeInApp,r,"argument-error"),a&&cf(r,o,a)}s(i,n),await Ru(r,i,"getOobCode",hF)}function VF(t,e){const n=af.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function LF(t,e,n){if(Qe(t.app))return Promise.reject(wt(t));const r=X(t),i=$i.credentialWithLink(e,n||Tu());return q(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),uf(r,i)}/**
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
 */async function MF(t,e){return Ze(t,"POST","/v1/accounts:createAuthUri",Je(t,e))}/**
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
 */async function FF(t,e){const n=Ry()?Tu():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await MF(X(t),r);return i||[]}async function UF(t,e){const n=X(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&cf(n.auth,i,e);const{email:s}=await cF(n.auth,i);s!==t.email&&await t.reload()}async function jF(t,e,n){const r=X(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&cf(r.auth,s,n);const{email:o}=await fF(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function BF(t,e){return Ze(t,"POST","/v1/accounts:update",e)}/**
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
 */async function zF(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=X(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Mr(r,BF(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function $F(t,e){const n=X(t);return Qe(n.auth.app)?Promise.reject(wt(n.auth)):oC(n,e,null)}function qF(t,e){return oC(X(t),null,e)}async function oC(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Mr(t,oF(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function GF(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=sf(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new qo(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new WF(s,i);case"github.com":return new HF(s,i);case"google.com":return new KF(s,i);case"twitter.com":return new QF(s,i,t.screenName||null);case"custom":case"anonymous":return new qo(s,null);default:return new qo(s,r,i)}}class qo{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class aC extends qo{constructor(e,n,r,i){super(e,n,r),this.username=i}}class WF extends qo{constructor(e,n){super(e,"facebook.com",n)}}class HF extends aC{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class KF extends qo{constructor(e,n){super(e,"google.com",n)}}class QF extends aC{constructor(e,n,r){super(e,"twitter.com",n,r)}}function YF(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:GF(n)}function XF(t,e,n,r){return X(t).onIdTokenChanged(e,n,r)}function JF(t,e,n){return X(t).beforeAuthStateChanged(e,n)}function ZF(t){return X(t).signOut()}/**
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
 */class ms{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new ms("enroll",e,n)}static _fromMfaPendingCredential(e){return new ms("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return ms._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return ms._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Dy{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Xe(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Xu._fromServerResponse(r,a));q(i.mfaPendingCredential,r,"internal-error");const o=ms._fromMfaPendingCredential(i.mfaPendingCredential);return new Dy(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const d=await Vn._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return q(n.user,r,"internal-error"),Vn._forOperation(n.user,n.operationType,c);default:Et(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function e2(t,e){var n;const r=X(t),i=e;return q(e.customData.operationType,r,"argument-error"),q((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Dy._fromError(r,i)}/**
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
 */function t2(t,e){return Ze(t,"POST","/v2/accounts/mfaEnrollment:start",Je(t,e))}function n2(t,e){return Ze(t,"POST","/v2/accounts/mfaEnrollment:finalize",Je(t,e))}function r2(t,e){return Ze(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Je(t,e))}class Oy{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Xu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Oy(e)}async getSession(){return ms._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Mr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Mr(this.user,r2(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Ap=new WeakMap;function i2(t){const e=X(t);return Ap.has(e)||Ap.set(e,Oy._fromUser(e)),Ap.get(e)}const ch="__sak";/**
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
 */class lC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ch,"1"),this.storage.removeItem(ch),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function s2(){const t=Le();return Py(t)||Da(t)}const o2=1e3,a2=10;class uC extends lC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=s2()&&$M(),this.fallbackToPolling=qP(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);zM()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,a2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},o2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}uC.type="LOCAL";const df=uC;/**
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
 */class cC extends lC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cC.type="SESSION";const Vi=cC;/**
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
 */function l2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class hf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new hf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await l2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hf.receivers=[];/**
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
 */function Ju(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class u2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Ju("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function st(){return window}function c2(t){st().location.href=t}/**
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
 */function Vy(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function d2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function h2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function f2(){return Vy()?self:null}/**
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
 */const dC="firebaseLocalStorageDb",p2=1,dh="firebaseLocalStorage",hC="fbase_key";class Zu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ff(t,e){return t.transaction([dh],e?"readwrite":"readonly").objectStore(dh)}function m2(){const t=indexedDB.deleteDatabase(dC);return new Zu(t).toPromise()}function og(){const t=indexedDB.open(dC,p2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(dh,{keyPath:hC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(dh)?e(r):(r.close(),await m2(),e(await og()))})})}async function jI(t,e,n){const r=ff(t,!0).put({[hC]:e,value:n});return new Zu(r).toPromise()}async function g2(t,e){const n=ff(t,!1).get(e),r=await new Zu(n).toPromise();return r===void 0?null:r.value}function BI(t,e){const n=ff(t,!0).delete(e);return new Zu(n).toPromise()}const _2=800,y2=3;class fC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await og(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>y2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hf._getInstance(f2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await d2(),!this.activeServiceWorker)return;this.sender=new u2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||h2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await og();return await jI(e,ch,"1"),await BI(e,ch),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jI(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>g2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>BI(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ff(i,!1).getAll();return new Zu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fC.type="LOCAL";const _a=fC;/**
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
 */function v2(t,e){return Ze(t,"POST","/v2/accounts/mfaSignIn:start",Je(t,e))}function w2(t,e){return Ze(t,"POST","/v2/accounts/mfaSignIn:finalize",Je(t,e))}/**
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
 */const E2=500,I2=6e4,$c=1e12;class T2{constructor(e){this.auth=e,this.counter=$c,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new S2(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||$c;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||$c;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||$c;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class S2{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;q(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=R2(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},I2)},E2))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function R2(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Pp=WP("rcb"),A2=new Ku(3e4,6e4);class P2{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=st().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return q(C2(n),e,"argument-error"),this.shouldResolveImmediately(n)&&bI(st().grecaptcha)?Promise.resolve(st().grecaptcha):new Promise((r,i)=>{const s=st().setTimeout(()=>{i(ht(e,"network-request-failed"))},A2.get());st()[Pp]=()=>{st().clearTimeout(s),delete st()[Pp];const a=st().grecaptcha;if(!a||!bI(a)){i(ht(e,"internal-error"));return}const l=a.render;a.render=(c,d)=>{const f=l(c,d);return this.counter++,f},this.hostLanguage=n,r(a)};const o=`${YM()}?${Ia({onload:Pp,render:"explicit",hl:n})}`;Cy(o).catch(()=>{clearTimeout(s),i(ht(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=st().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function C2(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class k2{async load(e){return new T2(e)}clearedOneInstance(){}}/**
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
 */const pC="recaptcha",x2={theme:"light",type:"image"};let b2=class{constructor(e,n,r=Object.assign({},x2)){this.parameters=r,this.type=pC,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Xe(e),this.isInvisible=this.parameters.size==="invisible",q(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;q(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new k2:new P2,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){q(!this.parameters.sitekey,this.auth,"argument-error"),q(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),q(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=st()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){q(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){q(Ry()&&!Vy(),this.auth,"internal-error"),await N2(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await kM(this.auth);q(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return q(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function N2(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Ly{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Es._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function D2(t,e,n){if(Qe(t.app))return Promise.reject(wt(t));const r=Xe(t),i=await pf(r,e,X(n));return new Ly(i,s=>uf(r,s))}async function O2(t,e,n){const r=X(t);await lf(!1,r,"phone");const i=await pf(r.auth,e,X(n));return new Ly(i,s=>tC(r,s))}async function V2(t,e,n){const r=X(t);if(Qe(r.auth.app))return Promise.reject(wt(r.auth));const i=await pf(r.auth,e,X(n));return new Ly(i,s=>nC(r,s))}async function pf(t,e,n){var r;const i=await n.verify();try{q(typeof i=="string",t,"argument-error"),q(n.type===pC,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return q(o.type==="enroll",t,"internal-error"),(await t2(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{q(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return q(a,t,"missing-multi-factor-info"),(await v2(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await _F(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function L2(t,e){const n=X(t);if(Qe(n.auth.app))return Promise.reject(wt(n.auth));await ky(n,e)}/**
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
 */let Fs=class yd{constructor(e){this.providerId=yd.PROVIDER_ID,this.auth=Xe(e)}verifyPhoneNumber(e,n){return pf(this.auth,e,X(n))}static credential(e,n){return Es._fromVerification(e,n)}static credentialFromResult(e){const n=e;return yd.credentialFromTaggedObject(n)}static credentialFromError(e){return yd.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Es._fromTokenResponse(n,r):null}};Fs.PROVIDER_ID="phone";Fs.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Xs(t,e){return e?_n(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class My extends Oa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Pr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Pr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function M2(t){return eC(t.auth,new My(t),t.bypassAuthState)}function F2(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),ZP(n,new My(t),t.bypassAuthState)}async function U2(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),ky(n,new My(t),t.bypassAuthState)}/**
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
 */class mC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return M2;case"linkViaPopup":case"linkViaRedirect":return U2;case"reauthViaPopup":case"reauthViaRedirect":return F2;default:Et(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const j2=new Ku(2e3,1e4);async function B2(t,e,n){if(Qe(t.app))return Promise.reject(ht(t,"operation-not-supported-in-this-environment"));const r=Xe(t);Na(t,e,Gr);const i=Xs(r,n);return new Tr(r,"signInViaPopup",e,i).executeNotNull()}async function z2(t,e,n){const r=X(t);if(Qe(r.auth.app))return Promise.reject(ht(r.auth,"operation-not-supported-in-this-environment"));Na(r.auth,e,Gr);const i=Xs(r.auth,n);return new Tr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function $2(t,e,n){const r=X(t);Na(r.auth,e,Gr);const i=Xs(r.auth,n);return new Tr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Tr extends mC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Tr.currentPopupAction&&Tr.currentPopupAction.cancel(),Tr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=Ju();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,j2.get())};e()}}Tr.currentPopupAction=null;/**
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
 */const q2="pendingRedirect",ql=new Map;class G2 extends mC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ql.get(this.auth._key());if(!e){try{const r=await W2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ql.set(this.auth._key(),e)}return this.bypassAuthState||ql.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function W2(t,e){const n=_C(e),r=gC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Fy(t,e){return gC(t)._set(_C(e),"true")}function H2(){ql.clear()}function Uy(t,e){ql.set(t._key(),e)}function gC(t){return _n(t._redirectPersistence)}function _C(t){return ws(q2,t.config.apiKey,t.name)}/**
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
 */function K2(t,e,n){return Q2(t,e,n)}async function Q2(t,e,n){if(Qe(t.app))return Promise.reject(wt(t));const r=Xe(t);Na(t,e,Gr),await r._initializationPromise;const i=Xs(r,n);return await Fy(i,r),i._openRedirect(r,e,"signInViaRedirect")}function Y2(t,e,n){return X2(t,e,n)}async function X2(t,e,n){const r=X(t);if(Na(r.auth,e,Gr),Qe(r.auth.app))return Promise.reject(wt(r.auth));await r.auth._initializationPromise;const i=Xs(r.auth,n);await Fy(i,r.auth);const s=await yC(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function J2(t,e,n){return Z2(t,e,n)}async function Z2(t,e,n){const r=X(t);Na(r.auth,e,Gr),await r.auth._initializationPromise;const i=Xs(r.auth,n);await lf(!1,r,e.providerId),await Fy(i,r.auth);const s=await yC(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function eU(t,e){return await Xe(t)._initializationPromise,mf(t,e,!1)}async function mf(t,e,n=!1){if(Qe(t.app))return Promise.reject(wt(t));const r=Xe(t),i=Xs(r,e),o=await new G2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function yC(t){const e=Ju(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const tU=10*60*1e3;class vC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nU(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!wC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ht(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tU&&this.cachedEventUids.clear(),this.cachedEventUids.has(zI(e))}saveEventToCache(e){this.cachedEventUids.add(zI(e)),this.lastProcessedEventTime=Date.now()}}function zI(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function wC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nU(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wC(t);default:return!1}}/**
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
 */async function EC(t,e={}){return Ze(t,"GET","/v1/projects",e)}/**
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
 */const rU=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iU=/^https?/;async function sU(t){if(t.config.emulator)return;const{authorizedDomains:e}=await EC(t);for(const n of e)try{if(oU(n))return}catch{}Et(t,"unauthorized-domain")}function oU(t){const e=Tu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!iU.test(n))return!1;if(rU.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const aU=new Ku(3e4,6e4);function $I(){const t=st().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lU(t){return new Promise((e,n)=>{var r,i,s;function o(){$I(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$I(),n(ht(t,"network-request-failed"))},timeout:aU.get()})}if(!((i=(r=st().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=st().gapi)===null||s===void 0)&&s.load)o();else{const a=WP("iframefcb");return st()[a]=()=>{gapi.load?o():n(ht(t,"network-request-failed"))},Cy(`${JM()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw vd=null,e})}let vd=null;function uU(t){return vd=vd||lU(t),vd}/**
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
 */const cU=new Ku(5e3,15e3),dU="__/auth/iframe",hU="emulator/auth/iframe",fU={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pU=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mU(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ay(e,hU):`https://${t.config.authDomain}/${dU}`,r={apiKey:e.apiKey,appName:t.name,v:jr},i=pU.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ia(r).slice(1)}`}async function gU(t){const e=await uU(t),n=st().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:mU(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fU,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ht(t,"network-request-failed"),a=st().setTimeout(()=>{s(o)},cU.get());function l(){st().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const _U={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yU=500,vU=600,wU="_blank",EU="http://localhost";class qI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function IU(t,e,n,r=yU,i=vU){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},_U),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Le().toLowerCase();n&&(a=jP(c)?wU:n),UP(c)&&(e=e||EU,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[v,P])=>`${m}${v}=${P},`,"");if(BM(c)&&a!=="_self")return TU(e||"",a),new qI(null);const f=window.open(e||"",a,d);q(f,t,"popup-blocked");try{f.focus()}catch{}return new qI(f)}function TU(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const SU="__/auth/handler",RU="emulator/auth/handler",AU=encodeURIComponent("fac");async function ag(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:jr,eventId:i};if(e instanceof Gr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(e instanceof Va){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${AU}=${encodeURIComponent(l)}`:"";return`${PU(t)}?${Ia(a).slice(1)}${c}`}function PU({config:t}){return t.emulator?Ay(t,RU):`https://${t.authDomain}/${SU}`}/**
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
 */const Cp="webStorageSupport";class CU{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vi,this._completeRedirectFn=mf,this._overrideRedirectResult=Uy}async _openPopup(e,n,r,i){var s;Hn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ag(e,n,r,Tu(),i);return IU(e,o,Ju())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ag(e,n,r,Tu(),i);return c2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Hn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gU(e),r=new vC(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cp,{type:Cp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Cp];o!==void 0&&n(!!o),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sU(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qP()||Py()||Da()}}const IC=CU;class kU{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return ir("unexpected MultiFactorSessionType")}}}class jy extends kU{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new jy(e)}_finalizeEnroll(e,n,r){return n2(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return w2(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class TC{constructor(){}static assertion(e){return jy._fromCredential(e)}}TC.FACTOR_ID="phone";var GI="@firebase/auth",WI="1.7.5";/**
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
 */class xU{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function bU(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function NU(t){Or(new On("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:GP(t)},c=new KM(r,i,s,l);return rF(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Or(new On("auth-internal",e=>{const n=Xe(e.getProvider("auth").getImmediate());return(r=>new xU(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vn(GI,WI,bU(t)),vn(GI,WI,"esm2017")}/**
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
 */const DU=5*60,OU=US("authIdTokenMaxAge")||DU;let HI=null;const VU=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>OU)return;const i=n==null?void 0:n.token;HI!==i&&(HI=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function LU(t=Lh()){const e=Ta(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nF(t,{popupRedirectResolver:IC,persistence:[_a,df,Vi]}),r=US("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=VU(s.toString());JF(n,o,()=>o(n.currentUser)),XF(n,a=>o(a))}}const i=LS("auth");return i&&HP(n,`http://${i}`),n}function MU(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}QM({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ht("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",MU().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});NU("Browser");/**
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
 */function Us(){return window}/**
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
 */const FU=2e3;async function UU(t,e,n){var r;const{BuildInfo:i}=Us();Hn(e.sessionId,"AuthEvent did not contain a session ID");const s=await qU(e.sessionId),o={};return Da()?o.ibi=i.packageName:Qu()?o.apn=i.packageName:Et(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,ag(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function jU(t){const{BuildInfo:e}=Us(),n={};Da()?n.iosBundleId=e.packageName:Qu()?n.androidPackageName=e.packageName:Et(t,"operation-not-supported-in-this-environment"),await EC(t,n)}function BU(t){const{cordova:e}=Us();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,jM()?"_blank":"_system","location=yes"),n(i)})})}async function zU(t,e,n){const{cordova:r}=Us();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var f;s();const m=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof m=="function"&&m(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(ht(t,"redirect-cancelled-by-user"))},FU))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),Qu()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function $U(t){var e,n,r,i,s,o,a,l,c,d;const f=Us();q(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),q(typeof((n=f==null?void 0:f.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),q(typeof((s=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),q(typeof((l=(a=(o=f==null?void 0:f.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),q(typeof((d=(c=f==null?void 0:f.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function qU(t){const e=GU(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function GU(t){if(Hn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const WU=20;class HU extends vC{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function KU(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:XU(),postBody:null,tenantId:t.tenantId,error:ht(t,"no-auth-event")}}function QU(t,e){return lg()._set(ug(t),e)}async function KI(t){const e=await lg()._get(ug(t));return e&&await lg()._remove(ug(t)),e}function YU(t,e){var n,r;const i=ZU(e);if(i.includes("/__/auth/callback")){const s=wd(i),o=s.firebaseError?JU(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?ht(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function XU(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<WU;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function lg(){return _n(df)}function ug(t){return ws("authEvent",t.config.apiKey,t.name)}function JU(t){try{return JSON.parse(t)}catch{return null}}function ZU(t){const e=wd(t),n=e.link?decodeURIComponent(e.link):void 0,r=wd(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return wd(i).link||i||r||n||t}function wd(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return No(n.join("?"))}/**
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
 */const ej=500;class tj{constructor(){this._redirectPersistence=Vi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=mf,this._overrideRedirectResult=Uy}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new HU(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Et(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){$U(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),H2(),await this._originValidation(e);const o=KU(e,r,i);await QU(e,o);const a=await UU(e,o,n),l=await BU(a);return zU(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jU(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Us(),o=setTimeout(async()=>{await KI(e),n.onEvent(QI())},ej),a=async d=>{clearTimeout(o);const f=await KI(e);let m=null;f&&(d!=null&&d.url)&&(m=YU(f,d.url)),n.onEvent(m||QI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,c=`${s.packageName.toLowerCase()}://`;Us().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(c)&&a({url:d}),typeof l=="function")try{l(d)}catch(f){console.error(f)}}}}const nj=tj;function QI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ht("no-auth-event")}}/**
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
 */function rj(t,e){Xe(t)._logFramework(e)}var ij="@firebase/auth-compat",sj="0.5.10";/**
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
 */const oj=1e3;function Gl(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function aj(){return Gl()==="http:"||Gl()==="https:"}function SC(t=Le()){return!!((Gl()==="file:"||Gl()==="ionic:"||Gl()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function lj(){return y_()||__()}function uj(){return qS()&&(document==null?void 0:document.documentMode)===11}function cj(t=Le()){return/Edge\/\d+/.test(t)}function dj(t=Le()){return uj()||cj(t)}function RC(){try{const t=self.localStorage,e=Ju();if(t)return t.setItem(e,"1"),t.removeItem(e),dj()?cu():!0}catch{return By()&&cu()}return!1}function By(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function kp(){return(aj()||$S()||SC())&&!lj()&&RC()&&!By()}function AC(){return SC()&&typeof document<"u"}async function hj(){return AC()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},oj);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function fj(){return typeof window<"u"?window:null}/**
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
 */const pn={LOCAL:"local",NONE:"none",SESSION:"session"},pl=q,PC="persistence";function pj(t,e){if(pl(Object.values(pn).includes(e),t,"invalid-persistence-type"),y_()){pl(e!==pn.SESSION,t,"unsupported-persistence-type");return}if(__()){pl(e===pn.NONE,t,"unsupported-persistence-type");return}if(By()){pl(e===pn.NONE||e===pn.LOCAL&&cu(),t,"unsupported-persistence-type");return}pl(e===pn.NONE||RC(),t,"unsupported-persistence-type")}async function cg(t){await t._initializationPromise;const e=CC(),n=ws(PC,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function mj(t,e){const n=CC();if(!n)return[];const r=ws(PC,t,e);switch(n.getItem(r)){case pn.NONE:return[ma];case pn.LOCAL:return[_a,Vi];case pn.SESSION:return[Vi];default:return[]}}function CC(){var t;try{return((t=fj())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const gj=q;class hi{constructor(){this.browserResolver=_n(IC),this.cordovaResolver=_n(nj),this.underlyingResolver=null,this._redirectPersistence=Vi,this._completeRedirectFn=mf,this._overrideRedirectResult=Uy}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return AC()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return gj(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await hj();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function kC(t){return t.unwrap()}function _j(t){return t.wrapped()}/**
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
 */function yj(t){return xC(t)}function vj(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new wj(t,e2(t,e))}else if(r){const i=xC(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function xC(t){const{_tokenResponse:e}=t instanceof Ut?t.customData:t;if(!e)return null;if(!(t instanceof Ut)&&"temporaryProof"in e&&"phoneNumber"in e)return Fs.credentialFromResult(t);const n=e.providerId;if(!n||n===fl.PASSWORD)return null;let r;switch(n){case fl.GOOGLE:r=Jn;break;case fl.FACEBOOK:r=Xn;break;case fl.GITHUB:r=Zn;break;case fl.TWITTER:r=er;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?ga._create(n,a):hr._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new $o(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof Ut?r.credentialFromError(t):r.credentialFromResult(t)}function tn(t,e){return e.catch(n=>{throw n instanceof Ut&&vj(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:yj(n),additionalUserInfo:YF(n),user:Sr.getOrCreate(i)}})}async function dg(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>tn(t,n.confirm(r))}}class wj{constructor(e,n){this.resolver=n,this.auth=_j(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return tn(kC(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Sr{constructor(e){this._delegate=e,this.multiFactor=i2(e)}static getOrCreate(e){return Sr.USER_MAP.has(e)||Sr.USER_MAP.set(e,new Sr(e)),Sr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return tn(this.auth,tC(this._delegate,e))}async linkWithPhoneNumber(e,n){return dg(this.auth,O2(this._delegate,e,n))}async linkWithPopup(e){return tn(this.auth,$2(this._delegate,e,hi))}async linkWithRedirect(e){return await cg(Xe(this.auth)),J2(this._delegate,e,hi)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return tn(this.auth,nC(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return dg(this.auth,V2(this._delegate,e,n))}reauthenticateWithPopup(e){return tn(this.auth,z2(this._delegate,e,hi))}async reauthenticateWithRedirect(e){return await cg(Xe(this.auth)),Y2(this._delegate,e,hi)}sendEmailVerification(e){return UF(this._delegate,e)}async unlink(e){return await PF(this._delegate,e),this}updateEmail(e){return $F(this._delegate,e)}updatePassword(e){return qF(this._delegate,e)}updatePhoneNumber(e){return L2(this._delegate,e)}updateProfile(e){return zF(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return jF(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Sr.USER_MAP=new WeakMap;/**
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
 */const ml=q;class hg{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;ml(r,"invalid-api-key",{appName:e.name}),ml(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?hi:void 0;this._delegate=n.initialize({options:{persistence:Ej(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(vM),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Sr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){HP(this._delegate,e,n)}applyActionCode(e){return NF(this._delegate,e)}checkActionCode(e){return rC(this._delegate,e)}confirmPasswordReset(e,n){return bF(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return tn(this._delegate,iC(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return FF(this._delegate,e)}isSignInWithEmailLink(e){return VF(this._delegate,e)}async getRedirectResult(){ml(kp(),this._delegate,"operation-not-supported-in-this-environment");const e=await eU(this._delegate,hi);return e?tn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){rj(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=YI(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=YI(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return OF(this._delegate,e,n)}sendPasswordResetEmail(e,n){return xF(this._delegate,e,n||void 0)}async setPersistence(e){pj(this._delegate,e);let n;switch(e){case pn.SESSION:n=Vi;break;case pn.LOCAL:n=await _n(_a)._isAvailable()?_a:df;break;case pn.NONE:n=ma;break;default:return Et("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return tn(this._delegate,AF(this._delegate))}signInWithCredential(e){return tn(this._delegate,uf(this._delegate,e))}signInWithCustomToken(e){return tn(this._delegate,kF(this._delegate,e))}signInWithEmailAndPassword(e,n){return tn(this._delegate,sC(this._delegate,e,n))}signInWithEmailLink(e,n){return tn(this._delegate,LF(this._delegate,e,n))}signInWithPhoneNumber(e,n){return dg(this._delegate,D2(this._delegate,e,n))}async signInWithPopup(e){return ml(kp(),this._delegate,"operation-not-supported-in-this-environment"),tn(this._delegate,B2(this._delegate,e,hi))}async signInWithRedirect(e){return ml(kp(),this._delegate,"operation-not-supported-in-this-environment"),await cg(this._delegate),K2(this._delegate,e,hi)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return DF(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}hg.Persistence=pn;function YI(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Sr.getOrCreate(o)),error:e,complete:n}}function Ej(t,e){const n=mj(t,e);if(typeof self<"u"&&!n.includes(_a)&&n.push(_a),typeof window<"u")for(const r of[df,Vi])n.includes(r)||n.push(r);return n.includes(ma)||n.push(ma),n}/**
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
 */class zy{constructor(){this.providerId="phone",this._delegate=new Fs(kC(Ys.auth()))}static credential(e,n){return Fs.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}zy.PHONE_SIGN_IN_METHOD=Fs.PHONE_SIGN_IN_METHOD;zy.PROVIDER_ID=Fs.PROVIDER_ID;/**
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
 */const Ij=q;class Tj{constructor(e,n,r=Ys.app()){var i;Ij((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new b2(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const Sj="auth-compat";function Rj(t){t.INTERNAL.registerComponent(new On(Sj,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new hg(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:lo.EMAIL_SIGNIN,PASSWORD_RESET:lo.PASSWORD_RESET,RECOVER_EMAIL:lo.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:lo.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:lo.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:lo.VERIFY_EMAIL}},EmailAuthProvider:$i,FacebookAuthProvider:Xn,GithubAuthProvider:Zn,GoogleAuthProvider:Jn,OAuthProvider:$o,SAMLAuthProvider:lh,PhoneAuthProvider:zy,PhoneMultiFactorGenerator:TC,RecaptchaVerifier:Tj,TwitterAuthProvider:er,Auth:hg,AuthCredential:Oa,Error:Ut}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(ij,sj)}Rj(Ys);const Aj="@firebase/firestore-compat",Pj="0.3.33";/**
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
 */function $y(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new j("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function XI(){if(typeof Uint8Array>"u")throw new j("unimplemented","Uint8Arrays are not available in this environment.")}function JI(){if(!KD())throw new j("unimplemented","Blobs are unavailable in Firestore in this environment.")}let bC=class fg{constructor(e){this._delegate=e}static fromBase64String(e){return JI(),new fg(dr.fromBase64String(e))}static fromUint8Array(e){return XI(),new fg(dr.fromUint8Array(e))}toBase64(){return JI(),this._delegate.toBase64()}toUint8Array(){return XI(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
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
 */function pg(t){return Cj(t,["next","error","complete"])}function Cj(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class kj{enableIndexedDbPersistence(e,n){return AL(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return PL(e._delegate)}clearIndexedDbPersistence(e){return CL(e._delegate)}}class NC{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ki||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Wn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){sP(this._delegate,e,n,r)}enableNetwork(){return xL(this._delegate)}disableNetwork(){return bL(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,rP("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return kL(this._delegate)}onSnapshotsInSync(e){return ZL(this._delegate,e)}get app(){if(!this._appCompat)throw new j("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ya(this,sh(this._delegate,e))}catch(n){throw Wt(n,"collection()","Firestore.collection()")}}doc(e){try{return new Cn(this,pa(this._delegate,e))}catch(n){throw Wt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Gt(this,EL(this._delegate,e))}catch(n){throw Wt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return rM(this._delegate,n=>e(new DC(this,n)))}batch(){return Tt(this._delegate),new OC(new tM(this._delegate,e=>Hu(this._delegate,e)))}loadBundle(e){return NL(this._delegate,e)}namedQuery(e){return DL(this._delegate,e).then(n=>n?new Gt(this,n):null)}}class gf extends wy{constructor(e){super(),this.firestore=e}convertBytes(e){return new bC(new dr(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Cn.forKey(n,this.firestore,null)}}function xj(t){mD(t)}class DC{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new gf(e)}get(e){const n=gs(e);return this._delegate.get(n).then(r=>new Pu(this._firestore,new Lr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=gs(e);return r?($y("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=gs(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=gs(e);return this._delegate.delete(n),this}}class OC{constructor(e){this._delegate=e}set(e,n,r){const i=gs(e);return r?($y("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=gs(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=gs(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class js{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new zl(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Cu(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=js.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new js(e,new gf(e),n),i.set(n,s)),s}}js.INSTANCES=new WeakMap;class Cn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new gf(e)}static forPath(e,n,r){if(e.length%2!==0)throw new j("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Cn(n,new Ue(n._delegate,r,new H(e)))}static forKey(e,n,r){return new Cn(n,new Ue(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new ya(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ya(this.firestore,sh(this._delegate,e))}catch(n){throw Wt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=X(e),e instanceof Ue?uP(this._delegate,e):!1}set(e,n){n=$y("DocumentReference.set",n);try{return n?PI(this._delegate,e,n):PI(this._delegate,e)}catch(r){throw Wt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?ig(this._delegate,e):ig(this._delegate,e,n,...r)}catch(i){throw Wt(i,"updateDoc()","DocumentReference.update()")}}delete(){return PP(this._delegate)}onSnapshot(...e){const n=VC(e),r=LC(e,i=>new Pu(this.firestore,new Lr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return kP(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=QL(this._delegate):(e==null?void 0:e.source)==="server"?n=YL(this._delegate):n=KL(this._delegate),n.then(r=>new Pu(this.firestore,new Lr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Cn(this.firestore,e?this._delegate.withConverter(js.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Wt(t,e,n){return t.message=t.message.replace(e,n),t}function VC(t){for(const e of t)if(typeof e=="object"&&!pg(e))return e;return{}}function LC(t,e){var n,r;let i;return pg(t[0])?i=t[0]:pg(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Pu{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Cn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return RP(this._delegate,e._delegate)}}class Cu extends Pu{data(e){const n=this._delegate.data(e);return this._delegate._converter||gD(n!==void 0),n}}class Gt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new gf(e)}where(e,n,r){try{return new Gt(this.firestore,gr(this._delegate,IP(e,n,r)))}catch(i){throw Wt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Gt(this.firestore,gr(this._delegate,UL(e,n)))}catch(r){throw Wt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Gt(this.firestore,gr(this._delegate,jL(e)))}catch(n){throw Wt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Gt(this.firestore,gr(this._delegate,BL(e)))}catch(n){throw Wt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Gt(this.firestore,gr(this._delegate,zL(...e)))}catch(n){throw Wt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Gt(this.firestore,gr(this._delegate,$L(...e)))}catch(n){throw Wt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Gt(this.firestore,gr(this._delegate,qL(...e)))}catch(n){throw Wt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Gt(this.firestore,gr(this._delegate,GL(...e)))}catch(n){throw Wt(n,"endAt()","Query.endAt()")}}isEqual(e){return cP(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=XL(this._delegate):(e==null?void 0:e.source)==="server"?n=JL(this._delegate):n=AP(this._delegate),n.then(r=>new mg(this.firestore,new Oi(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=VC(e),r=LC(e,i=>new mg(this.firestore,new Oi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return kP(this._delegate,n,r)}withConverter(e){return new Gt(this.firestore,e?this._delegate.withConverter(js.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class bj{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Cu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class mg{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Gt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Cu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new bj(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Cu(this._firestore,r))})}isEqual(e){return RP(this._delegate,e._delegate)}}class ya extends Gt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Cn(this.firestore,e):null}doc(e){try{return e===void 0?new Cn(this.firestore,pa(this._delegate)):new Cn(this.firestore,pa(this._delegate,e))}catch(n){throw Wt(n,"doc()","CollectionReference.doc()")}}add(e){return CP(this._delegate,e).then(n=>new Cn(this.firestore,n))}isEqual(e){return uP(this._delegate,e._delegate)}withConverter(e){return new ya(this.firestore,e?this._delegate.withConverter(js.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function gs(t){return ge(t,Ue)}/**
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
 */class qy{constructor(...e){this._delegate=new Di(...e)}static documentId(){return new qy(De.keyField().canonicalString())}isEqual(e){return e=X(e),e instanceof Di?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class us{constructor(e){this._delegate=e}static serverTimestamp(){const e=sM();return e._methodName="FieldValue.serverTimestamp",new us(e)}static delete(){const e=iM();return e._methodName="FieldValue.delete",new us(e)}static arrayUnion(...e){const n=oM(...e);return n._methodName="FieldValue.arrayUnion",new us(n)}static arrayRemove(...e){const n=aM(...e);return n._methodName="FieldValue.arrayRemove",new us(n)}static increment(e){const n=lM(e);return n._methodName="FieldValue.increment",new us(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const Nj={Firestore:NC,GeoPoint:Qh,Timestamp:Ve,Blob:bC,Transaction:DC,WriteBatch:OC,DocumentReference:Cn,DocumentSnapshot:Pu,Query:Gt,QueryDocumentSnapshot:Cu,QuerySnapshot:mg,CollectionReference:ya,FieldPath:qy,FieldValue:us,setLogLevel:xj,CACHE_SIZE_UNLIMITED:SL};function Dj(t,e){t.INTERNAL.registerComponent(new On("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},Nj)))}/**
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
 */function Oj(t){Dj(t,(e,n)=>new NC(e,n,new kj)),t.registerVersion(Aj,Pj)}Oj(Ys);/**
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
 */const MC="firebasestorage.googleapis.com",FC="storageBucket",Vj=2*60*1e3,Lj=10*60*1e3,Mj=1e3;/**
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
 */class ze extends Ut{constructor(e,n,r=0){super(xp(e),`Firebase Storage: ${n} (${xp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ze.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var be;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(be||(be={}));function xp(t){return"storage/"+t}function Gy(){const t="An unknown error occurred, please check the error payload for server response.";return new ze(be.UNKNOWN,t)}function Fj(t){return new ze(be.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Uj(t){return new ze(be.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function jj(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ze(be.UNAUTHENTICATED,t)}function Bj(){return new ze(be.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function zj(t){return new ze(be.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function UC(){return new ze(be.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function jC(){return new ze(be.CANCELED,"User canceled the upload/download.")}function $j(t){return new ze(be.INVALID_URL,"Invalid URL '"+t+"'.")}function qj(t){return new ze(be.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Gj(){return new ze(be.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+FC+"' property when initializing the app?")}function BC(){return new ze(be.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Wj(){return new ze(be.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Hj(){return new ze(be.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Kj(t){return new ze(be.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Go(t){return new ze(be.INVALID_ARGUMENT,t)}function zC(){return new ze(be.APP_DELETED,"The Firebase app was deleted.")}function $C(t){return new ze(be.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Wl(t,e){return new ze(be.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function gl(t){throw new ze(be.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Ft{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ft.makeFromUrl(e,n)}catch{return new Ft(e,"")}if(r.path==="")return r;throw qj(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(O){O.path_=decodeURIComponent(O.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",v=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),P={bucket:1,path:3},k=n===MC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",T=new RegExp(`^https?://${k}/${i}/${D}`,"i"),S=[{regex:a,indices:l,postModify:s},{regex:v,indices:P,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let O=0;O<S.length;O++){const U=S[O],F=U.regex.exec(e);if(F){const E=F[U.indices.bucket];let y=F[U.indices.path];y||(y=""),r=new Ft(E,y),U.postModify(r);break}}if(r==null)throw $j(e);return r}}class Qj{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Yj(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function d(...D){c||(c=!0,e.apply(null,D))}function f(D){i=setTimeout(()=>{i=null,t(v,l())},D)}function m(){s&&clearTimeout(s)}function v(D,...T){if(c){m();return}if(D){m(),d.call(null,D,...T);return}if(l()||o){m(),d.call(null,D,...T);return}r<64&&(r*=2);let S;a===1?(a=2,S=0):S=(r+Math.random())*1e3,f(S)}let P=!1;function k(D){P||(P=!0,m(),!c&&(i!==null?(D||(a=2),clearTimeout(i),f(0)):D||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,k(!0)},n),k}function Xj(t){t(!1)}/**
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
 */function Jj(t){return t!==void 0}function Zj(t){return typeof t=="function"}function eB(t){return typeof t=="object"&&!Array.isArray(t)}function _f(t){return typeof t=="string"||t instanceof String}function ZI(t){return Wy()&&t instanceof Blob}function Wy(){return typeof Blob<"u"}function gg(t,e,n,r){if(r<e)throw Go(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Go(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function qi(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function qC(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Is;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Is||(Is={}));/**
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
 */function GC(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class tB{constructor(e,n,r,i,s,o,a,l,c,d,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,P)=>{this.resolve_=v,this.reject_=P,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new qc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Is.NO_ERROR,l=s.getStatus();if(!a||GC(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Is.ABORT;r(!1,new qc(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new qc(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Jj(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Gy();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?zC():jC();o(l)}else{const l=UC();o(l)}};this.canceled_?n(!1,new qc(!1,null,!0)):this.backoffId_=Yj(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Xj(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function nB(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function rB(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function iB(t,e){e&&(t["X-Firebase-GMPID"]=e)}function sB(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function oB(t,e,n,r,i,s,o=!0){const a=qC(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return iB(c,e),nB(c,n),rB(c,s),sB(c,r),new tB(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function aB(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function lB(...t){const e=aB();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Wy())return new Blob(t);throw new ze(be.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function uB(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function cB(t){if(typeof atob>"u")throw Kj("base-64");return atob(t)}/**
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
 */const kn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class bp{constructor(e,n){this.data=e,this.contentType=n||null}}function WC(t,e){switch(t){case kn.RAW:return new bp(HC(e));case kn.BASE64:case kn.BASE64URL:return new bp(KC(t,e));case kn.DATA_URL:return new bp(hB(e),fB(e))}throw Gy()}function HC(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function dB(t){let e;try{e=decodeURIComponent(t)}catch{throw Wl(kn.DATA_URL,"Malformed data URL.")}return HC(e)}function KC(t,e){switch(t){case kn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Wl(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case kn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Wl(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=cB(e)}catch(i){throw i.message.includes("polyfill")?i:Wl(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class QC{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Wl(kn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=pB(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function hB(t){const e=new QC(t);return e.base64?KC(kn.BASE64,e.rest):dB(e.rest)}function fB(t){return new QC(t).contentType}function pB(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class tr{constructor(e,n){let r=0,i="";ZI(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(ZI(this.data_)){const r=this.data_,i=uB(r,e,n);return i===null?null:new tr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new tr(r,!0)}}static getBlob(...e){if(Wy()){const n=e.map(r=>r instanceof tr?r.data_:r);return new tr(lB.apply(null,n))}else{const n=e.map(o=>_f(o)?WC(kn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new tr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Hy(t){let e;try{e=JSON.parse(t)}catch{return null}return eB(e)?e:null}/**
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
 */function mB(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function gB(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function YC(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function _B(t,e){return e}class $t{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||_B}}let Gc=null;function yB(t){return!_f(t)||t.length<2?t:YC(t)}function ec(){if(Gc)return Gc;const t=[];t.push(new $t("bucket")),t.push(new $t("generation")),t.push(new $t("metageneration")),t.push(new $t("name","fullPath",!0));function e(s,o){return yB(o)}const n=new $t("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new $t("size");return i.xform=r,t.push(i),t.push(new $t("timeCreated")),t.push(new $t("updated")),t.push(new $t("md5Hash",null,!0)),t.push(new $t("cacheControl",null,!0)),t.push(new $t("contentDisposition",null,!0)),t.push(new $t("contentEncoding",null,!0)),t.push(new $t("contentLanguage",null,!0)),t.push(new $t("contentType",null,!0)),t.push(new $t("metadata","customMetadata",!0)),Gc=t,Gc}function vB(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Ft(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function wB(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return vB(r,t),r}function XC(t,e,n){const r=Hy(e);return r===null?null:wB(t,r,n)}function EB(t,e,n,r){const i=Hy(e);if(i===null||!_f(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),v=qi(m,n,r),P=qC({alt:"media",token:c});return v+P})[0]}function Ky(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
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
 */const eT="prefixes",tT="items";function IB(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[eT])for(const i of n[eT]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new Ft(e,s));r.prefixes.push(o)}if(n[tT])for(const i of n[tT]){const s=t._makeStorageReference(new Ft(e,i.name));r.items.push(s)}return r}function TB(t,e,n){const r=Hy(n);return r===null?null:IB(t,e,r)}class Wr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ur(t){if(!t)throw Gy()}function yf(t,e){function n(r,i){const s=XC(t,i,e);return ur(s!==null),s}return n}function SB(t,e){function n(r,i){const s=TB(t,e,i);return ur(s!==null),s}return n}function RB(t,e){function n(r,i){const s=XC(t,i,e);return ur(s!==null),EB(s,i,t.host,t._protocol)}return n}function La(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Bj():i=jj():n.getStatus()===402?i=Uj(t.bucket):n.getStatus()===403?i=zj(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function vf(t){const e=La(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=Fj(t.path)),s.serverResponse=i.serverResponse,s}return n}function JC(t,e,n){const r=e.fullServerUrl(),i=qi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Wr(i,s,yf(t,n),o);return a.errorHandler=vf(e),a}function AB(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=qi(o,t.host,t._protocol),l="GET",c=t.maxOperationRetryTime,d=new Wr(a,l,SB(t,e.bucket),c);return d.urlParams=s,d.errorHandler=La(e),d}function PB(t,e,n){const r=e.fullServerUrl(),i=qi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Wr(i,s,RB(t,n),o);return a.errorHandler=vf(e),a}function CB(t,e,n,r){const i=e.fullServerUrl(),s=qi(i,t.host,t._protocol),o="PATCH",a=Ky(n,r),l={"Content-Type":"application/json; charset=utf-8"},c=t.maxOperationRetryTime,d=new Wr(s,o,yf(t,r),c);return d.headers=l,d.body=a,d.errorHandler=vf(e),d}function kB(t,e){const n=e.fullServerUrl(),r=qi(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,c){}const a=new Wr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=vf(e),a}function xB(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function ZC(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=xB(null,e)),r}function ek(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let S="";for(let O=0;O<2;O++)S=S+Math.random().toString().slice(2);return S}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=ZC(e,r,i),d=Ky(c,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+l+"--",v=tr.getBlob(f,r,m);if(v===null)throw BC();const P={name:c.fullPath},k=qi(s,t.host,t._protocol),D="POST",T=t.maxUploadRetryTime,w=new Wr(k,D,yf(t,n),T);return w.urlParams=P,w.headers=o,w.body=v.uploadData(),w.errorHandler=La(e),w}class hh{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Qy(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{ur(!1)}return ur(!!n&&(e||["active"]).indexOf(n)!==-1),n}function bB(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=ZC(e,r,i),a={name:o.fullPath},l=qi(s,t.host,t._protocol),c="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=Ky(o,n),m=t.maxUploadRetryTime;function v(k){Qy(k);let D;try{D=k.getResponseHeader("X-Goog-Upload-URL")}catch{ur(!1)}return ur(_f(D)),D}const P=new Wr(l,c,v,m);return P.urlParams=a,P.headers=d,P.body=f,P.errorHandler=La(e),P}function NB(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const d=Qy(c,["active","final"]);let f=null;try{f=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{ur(!1)}f||ur(!1);const m=Number(f);return ur(!isNaN(m)),new hh(m,r.size(),d==="final")}const o="POST",a=t.maxUploadRetryTime,l=new Wr(n,o,s,a);return l.headers=i,l.errorHandler=La(e),l}const nT=256*1024;function DB(t,e,n,r,i,s,o,a){const l=new hh(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw Wj();const c=l.total-l.current;let d=c;i>0&&(d=Math.min(d,i));const f=l.current,m=f+d;let v="";d===0?v="finalize":c===d?v="upload, finalize":v="upload";const P={"X-Goog-Upload-Command":v,"X-Goog-Upload-Offset":`${l.current}`},k=r.slice(f,m);if(k===null)throw BC();function D(O,U){const F=Qy(O,["active","final"]),E=l.current+d,y=r.size();let I;return F==="final"?I=yf(e,s)(O,U):I=null,new hh(E,y,F==="final",I)}const T="POST",w=e.maxUploadRetryTime,S=new Wr(n,T,D,w);return S.headers=P,S.body=k.uploadData(),S.progressCallback=a||null,S.errorHandler=La(t),S}/**
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
 */const OB={STATE_CHANGED:"state_changed"},Ht={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Np(t){switch(t){case"running":case"pausing":case"canceling":return Ht.RUNNING;case"paused":return Ht.PAUSED;case"success":return Ht.SUCCESS;case"canceled":return Ht.CANCELED;case"error":return Ht.ERROR;default:return Ht.ERROR}}/**
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
 */class VB{constructor(e,n,r){if(Zj(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function uo(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class LB{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Is.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Is.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Is.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw gl("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw gl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw gl("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw gl("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw gl("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class MB extends LB{initXhr(){this.xhr_.responseType="text"}}function zn(){return new MB}/**
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
 */class tk{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=ec(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(be.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(GC(i.status,[]))if(s)i=UC();else{this.sleepTime=Math.max(this.sleepTime*2,Mj),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(be.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=bB(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,zn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=NB(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,zn,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=nT*this._chunkMultiplier,n=new hh(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=DB(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,zn,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){nT*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=JC(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,zn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=ek(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,zn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=jC(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Np(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new VB(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Np(this._state)){case Ht.SUCCESS:uo(this._resolve.bind(null,this.snapshot))();break;case Ht.CANCELED:case Ht.ERROR:const n=this._reject;uo(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Np(this._state)){case Ht.RUNNING:case Ht.PAUSED:e.next&&uo(e.next.bind(e,this.snapshot))();break;case Ht.SUCCESS:e.complete&&uo(e.complete.bind(e))();break;case Ht.CANCELED:case Ht.ERROR:e.error&&uo(e.error.bind(e,this._error))();break;default:e.error&&uo(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Bs{constructor(e,n){this._service=e,n instanceof Ft?this._location=n:this._location=Ft.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Bs(e,n)}get root(){const e=new Ft(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return YC(this._location.path)}get storage(){return this._service}get parent(){const e=mB(this._location.path);if(e===null)return null;const n=new Ft(this._location.bucket,e);return new Bs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw $C(e)}}function FB(t,e,n){t._throwIfRoot("uploadBytes");const r=ek(t.storage,t._location,ec(),new tr(e,!0),n);return t.storage.makeRequestWithTokens(r,zn).then(i=>({metadata:i,ref:t}))}function UB(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new tk(t,new tr(e),n)}function jB(t){const e={prefixes:[],items:[]};return nk(t,e).then(()=>e)}async function nk(t,e,n){const i=await rk(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await nk(t,e,i.nextPageToken)}function rk(t,e){e!=null&&typeof e.maxResults=="number"&&gg("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=AB(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,zn)}function BB(t){t._throwIfRoot("getMetadata");const e=JC(t.storage,t._location,ec());return t.storage.makeRequestWithTokens(e,zn)}function zB(t,e){t._throwIfRoot("updateMetadata");const n=CB(t.storage,t._location,e,ec());return t.storage.makeRequestWithTokens(n,zn)}function $B(t){t._throwIfRoot("getDownloadURL");const e=PB(t.storage,t._location,ec());return t.storage.makeRequestWithTokens(e,zn).then(n=>{if(n===null)throw Hj();return n})}function qB(t){t._throwIfRoot("deleteObject");const e=kB(t.storage,t._location);return t.storage.makeRequestWithTokens(e,zn)}function ik(t,e){const n=gB(t._location.path,e),r=new Ft(t._location.bucket,n);return new Bs(t.storage,r)}/**
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
 */function GB(t){return/^[A-Za-z]+:\/\//.test(t)}function WB(t,e){return new Bs(t,e)}function sk(t,e){if(t instanceof Yy){const n=t;if(n._bucket==null)throw Gj();const r=new Bs(n,n._bucket);return e!=null?sk(r,e):r}else return e!==void 0?ik(t,e):t}function HB(t,e){if(e&&GB(e)){if(t instanceof Yy)return WB(t,e);throw Go("To use ref(service, url), the first argument must be a Storage instance.")}else return sk(t,e)}function rT(t,e){const n=e==null?void 0:e[FC];return n==null?null:Ft.makeFromBucketSpec(n,t)}function KB(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:jS(i,t.app.options.projectId))}class Yy{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=MC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Vj,this._maxUploadRetryTime=Lj,this._requests=new Set,i!=null?this._bucket=Ft.makeFromBucketSpec(i,this._host):this._bucket=rT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ft.makeFromBucketSpec(this._url,e):this._bucket=rT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){gg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){gg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Bs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Qj(zC());{const o=oB(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const iT="@firebase/storage",sT="0.12.6";/**
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
 */const ok="storage";function QB(t,e,n){return t=X(t),FB(t,e,n)}function YB(t,e,n){return t=X(t),UB(t,e,n)}function XB(t){return t=X(t),BB(t)}function JB(t,e){return t=X(t),zB(t,e)}function ZB(t,e){return t=X(t),rk(t,e)}function e4(t){return t=X(t),jB(t)}function ak(t){return t=X(t),$B(t)}function lk(t){return t=X(t),qB(t)}function fh(t,e){return t=X(t),HB(t,e)}function t4(t,e){return ik(t,e)}function n4(t=Lh(),e){t=X(t);const r=Ta(t,ok).getImmediate({identifier:e}),i=MS("storage");return i&&uk(r,...i),r}function uk(t,e,n,r={}){KB(t,e,n,r)}function r4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Yy(n,r,i,e,jr)}function i4(){Or(new On(ok,r4,"PUBLIC").setMultipleInstances(!0)),vn(iT,sT,""),vn(iT,sT,"esm2017")}i4();/**
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
 */class Wc{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
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
 */class oT{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Wc(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new Wc(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new Wc(o,this,this._ref)):s={next:n.next?o=>n.next(new Wc(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class aT{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new Cr(e,this._service))}get items(){return this._delegate.items.map(e=>new Cr(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=t4(this._delegate,e);return new Cr(n,this.storage)}get root(){return new Cr(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new Cr(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new oT(YB(this._delegate,e,n),this)}putString(e,n=kn.RAW,r){this._throwIfRoot("putString");const i=WC(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new oT(new tk(this._delegate,new tr(i.data,!0),s),this)}listAll(){return e4(this._delegate).then(e=>new aT(e,this.storage))}list(e){return ZB(this._delegate,e||void 0).then(n=>new aT(n,this.storage))}getMetadata(){return XB(this._delegate)}updateMetadata(e){return JB(this._delegate,e)}getDownloadURL(){return ak(this._delegate)}delete(){return this._throwIfRoot("delete"),lk(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw $C(e)}}/**
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
 */class ck{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(lT(e))throw Go("ref() expected a child path but got a URL, use refFromURL instead.");return new Cr(fh(this._delegate,e),this)}refFromURL(e){if(!lT(e))throw Go("refFromURL() expected a full URL but got a child path, use ref() instead.");try{Ft.makeFromUrl(e,this._delegate.host)}catch{throw Go("refFromUrl() expected a valid full URL but got an invalid one.")}return new Cr(fh(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){uk(this._delegate,e,n,r)}}function lT(t){return/^[A-Za-z]+:\/\//.test(t)}const s4="@firebase/storage-compat",o4="0.3.9";/**
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
 */const a4="storage-compat";function l4(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new ck(n,r)}function u4(t){const e={TaskState:Ht,TaskEvent:OB,StringFormat:kn,Storage:ck,Reference:Cr};t.INTERNAL.registerComponent(new On(a4,l4,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(s4,o4)}u4(Ys);const Xy=Ys.initializeApp({apiKey:"AIzaSyBHgG4mwWSEUBLPS1p2XFtaC8GwPIv2xN8",authDomain:"arquidiocesishermosillo-776dd.firebaseapp.com",projectId:"arquidiocesishermosillo-776dd",storageBucket:"arquidiocesishermosillo-776dd.appspot.com",messagingSenderId:"767127814821",appId:"1:767127814821:web:6c159d62075bcd1271c34c"}),Jy=LU(Xy),Hc=RL(Xy),uT=n4(Xy),wf=x.createContext(),c4=t=>{const[e,n]=x.useState([]),r=gr(sh(Hc,"auctions"),IP("email","==",localStorage.getItem("userEmailLS"))),i=sh(Hc,"auctions"),[s,o]=x.useState(!0);x.useEffect(()=>{AP(r).then(d=>{d.size===0&&console.log("No results!");const f=d.docs.map(m=>({id:m.id,...m.data()}));n(f)}).catch(d=>{console.log("Error searching items",d)})},[s]);const a=(d,f)=>{const m=fh(uT,`projectFiles/${d==null?void 0:d.name}`);QB(m,d).then(()=>{ak(m).then(v=>{f.imgName=d.name,f.imgUrl=v,CP(i,f),o(!s)})}).catch(v=>console.log(v))},l=async(d,f)=>{const m=pa(Hc,"auctions",d);try{await PP(m);const v=fh(uT,`projectFiles/${f}`);lk(v).then(()=>{console.log(f,"se elimino de Storage")}).catch(P=>{console.log("ocurrio un error: ",P)})}catch(v){console.error(v)}},c=async(d,f)=>{const m=pa(Hc,"auctions",d);try{await ig(m,f)}catch(v){console.error(v)}};return g.jsx(wf.Provider,{value:{items:e,deleteById:l,UpdateById:c,handleFileAdd:a,postCollection:i,setToggle:o,toggle:s},children:t.children})};var dk={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=i(s,r(a)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=i(o,a));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(dk);var d4=dk.exports;const we=_h(d4);function _g(){return _g=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_g.apply(null,arguments)}function hk(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function cT(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function h4(t){var e=f4(t,"string");return typeof e=="symbol"?e:String(e)}function f4(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function p4(t,e,n){var r=x.useRef(t!==void 0),i=x.useState(e),s=i[0],o=i[1],a=t!==void 0,l=r.current;return r.current=a,!a&&l&&s!==e&&o(e),[a?t:s,x.useCallback(function(c){for(var d=arguments.length,f=new Array(d>1?d-1:0),m=1;m<d;m++)f[m-1]=arguments[m];n&&n.apply(void 0,[c].concat(f)),o(c)},[n])]}function m4(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[cT(r)],a=s[r],l=hk(s,[cT(r),r].map(h4)),c=e[r],d=p4(a,o,t[c]),f=d[0],m=d[1];return _g({},l,(i={},i[r]=f,i[c]=m,i))},t)}function yg(t,e){return yg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},yg(t,e)}function g4(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,yg(t,e)}const _4=["xxl","xl","lg","md","sm","xs"],y4="xs",Ef=x.createContext({prefixes:{},breakpoints:_4,minBreakpoint:y4});function Be(t,e){const{prefixes:n}=x.useContext(Ef);return t||n[e]||e}function fk(){const{breakpoints:t}=x.useContext(Ef);return t}function pk(){const{minBreakpoint:t}=x.useContext(Ef);return t}function v4(){const{dir:t}=x.useContext(Ef);return t==="rtl"}function If(t){return t&&t.ownerDocument||document}function w4(t){var e=If(t);return e&&e.defaultView||window}function E4(t,e){return w4(t).getComputedStyle(t,e)}var I4=/([A-Z])/g;function T4(t){return t.replace(I4,"-$1").toLowerCase()}var S4=/^ms-/;function Kc(t){return T4(t).replace(S4,"-ms-")}var R4=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function A4(t){return!!(t&&R4.test(t))}function Ts(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(Kc(e))||E4(t).getPropertyValue(Kc(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(Kc(i)):A4(i)?r+=i+"("+s+") ":n+=Kc(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}var mk={exports:{}},P4="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",C4=P4,k4=C4;function gk(){}function _k(){}_k.resetWarningCache=gk;var x4=function(){function t(r,i,s,o,a,l){if(l!==k4){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:_k,resetWarningCache:gk};return n.PropTypes=n,n};mk.exports=x4();var b4=mk.exports;const kr=_h(b4),dT={disabled:!1},yk=li.createContext(null);var N4=function(e){return e.scrollTop},Pl="unmounted",is="exited",ri="entering",cs="entered",vg="exiting",Hr=function(t){g4(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,l;return s.appearStatus=null,r.in?a?(l=is,s.appearStatus=ri):l=cs:r.unmountOnExit||r.mountOnEnter?l=Pl:l=is,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===Pl?{status:is}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==ri&&o!==cs&&(s=ri):(o===ri||o===cs)&&(s=vg)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===ri){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:bo.findDOMNode(this);o&&N4(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===is&&this.setState({status:Pl})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[bo.findDOMNode(this),a],c=l[0],d=l[1],f=this.getTimeouts(),m=a?f.appear:f.enter;if(!i&&!o||dT.disabled){this.safeSetState({status:cs},function(){s.props.onEntered(c)});return}this.props.onEnter(c,d),this.safeSetState({status:ri},function(){s.props.onEntering(c,d),s.onTransitionEnd(m,function(){s.safeSetState({status:cs},function(){s.props.onEntered(c,d)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:bo.findDOMNode(this);if(!s||dT.disabled){this.safeSetState({status:is},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:vg},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:is},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:bo.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],c=l[0],d=l[1];this.props.addEndListener(c,d)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===Pl)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=hk(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return li.createElement(yk.Provider,{value:null},typeof o=="function"?o(i,a):li.cloneElement(li.Children.only(o),a))},e}(li.Component);Hr.contextType=yk;Hr.propTypes={};function co(){}Hr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:co,onEntering:co,onEntered:co,onExit:co,onExiting:co,onExited:co};Hr.UNMOUNTED=Pl;Hr.EXITED=is;Hr.ENTERING=ri;Hr.ENTERED=cs;Hr.EXITING=vg;const Ma=!!(typeof window<"u"&&window.document&&window.document.createElement);var wg=!1,Eg=!1;try{var Dp={get passive(){return wg=!0},get once(){return Eg=wg=!0}};Ma&&(window.addEventListener("test",Dp,Dp),window.removeEventListener("test",Dp,!0))}catch{}function vk(t,e,n,r){if(r&&typeof r!="boolean"&&!Eg){var i=r.once,s=r.capture,o=n;!Eg&&i&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,wg?r:s)}t.addEventListener(e,n,r)}function Ig(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function ph(t,e,n,r){return vk(t,e,n,r),function(){Ig(t,e,n,r)}}function D4(t,e,n,r){if(r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function O4(t){var e=Ts(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function V4(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||D4(t,"transitionend",!0)},e+n),s=ph(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function wk(t,e,n,r){n==null&&(n=O4(t)||0);var i=V4(t,n,r),s=ph(t,"transitionend",e);return function(){i(),s()}}function hT(t,e){const n=Ts(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function L4(t,e){const n=hT(t,"transitionDuration"),r=hT(t,"transitionDelay"),i=wk(t,s=>{s.target===t&&(i(),e(s))},n+r)}function M4(t){t.offsetHeight}const fT=t=>!t||typeof t=="function"?t:e=>{t.current=e};function F4(t,e){const n=fT(t),r=fT(e);return i=>{n&&n(i),r&&r(i)}}function tc(t,e){return x.useMemo(()=>F4(t,e),[t,e])}function U4(t){return t&&"setState"in t?bo.findDOMNode(t):t??null}const j4=li.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:l,...c},d)=>{const f=x.useRef(null),m=tc(f,l),v=F=>{m(U4(F))},P=F=>E=>{F&&f.current&&F(f.current,E)},k=x.useCallback(P(t),[t]),D=x.useCallback(P(e),[e]),T=x.useCallback(P(n),[n]),w=x.useCallback(P(r),[r]),S=x.useCallback(P(i),[i]),O=x.useCallback(P(s),[s]),U=x.useCallback(P(o),[o]);return g.jsx(Hr,{ref:d,...c,onEnter:k,onEntered:T,onEntering:D,onExit:w,onExited:O,onExiting:S,addEndListener:U,nodeRef:f,children:typeof a=="function"?(F,E)=>a(F,{...E,ref:v}):li.cloneElement(a,{ref:v})})});function B4(t){const e=x.useRef(t);return x.useEffect(()=>{e.current=t},[t]),e}function An(t){const e=B4(t);return x.useCallback(function(...n){return e.current&&e.current(...n)},[e])}const Ek=t=>x.forwardRef((e,n)=>g.jsx("div",{...e,ref:n,className:we(e.className,t)})),Ik=Ek("h4");Ik.displayName="DivStyledAsH4";const Tk=x.forwardRef(({className:t,bsPrefix:e,as:n=Ik,...r},i)=>(e=Be(e,"alert-heading"),g.jsx(n,{ref:i,className:we(t,e),...r})));Tk.displayName="AlertHeading";function z4(){return x.useState(null)}function $4(){const t=x.useRef(!0),e=x.useRef(()=>t.current);return x.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),e.current}function q4(t){const e=x.useRef(null);return x.useEffect(()=>{e.current=t}),e.current}const G4=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",W4=typeof document<"u",pT=W4||G4?x.useLayoutEffect:x.useEffect,H4=["as","disabled"];function K4(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Q4(t){return!t||t.trim()==="#"}function Zy({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||r!=null||i!=null?t="a":t="button");const c={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},c];const d=m=>{if((e||t==="a"&&Q4(n))&&m.preventDefault(),e){m.stopPropagation();return}o==null||o(m)},f=m=>{m.key===" "&&(m.preventDefault(),d(m))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:d,onKeyDown:f},c]}const Y4=x.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=K4(t,H4);const[s,{tagName:o}]=Zy(Object.assign({tagName:n,disabled:r},i));return g.jsx(o,Object.assign({},i,s,{ref:e}))});Y4.displayName="Button";const X4=["onKeyDown"];function J4(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Z4(t){return!t||t.trim()==="#"}const Sk=x.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=J4(t,X4);const[i]=Zy(Object.assign({tagName:"a"},r)),s=An(o=>{i.onKeyDown(o),n==null||n(o)});return Z4(r.href)||r.role==="button"?g.jsx("a",Object.assign({ref:e},r,i,{onKeyDown:s})):g.jsx("a",Object.assign({ref:e},r,{onKeyDown:n}))});Sk.displayName="Anchor";const Rk=x.forwardRef(({className:t,bsPrefix:e,as:n=Sk,...r},i)=>(e=Be(e,"alert-link"),g.jsx(n,{ref:i,className:we(t,e),...r})));Rk.displayName="AlertLink";const ez={[ri]:"show",[cs]:"show"},ku=x.forwardRef(({className:t,children:e,transitionClasses:n={},onEnter:r,...i},s)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...i},a=x.useCallback((l,c)=>{M4(l),r==null||r(l,c)},[r]);return g.jsx(j4,{ref:s,addEndListener:L4,...o,onEnter:a,childRef:e.ref,children:(l,c)=>x.cloneElement(e,{...c,className:we("fade",t,e.props.className,ez[l],n[l])})})});ku.displayName="Fade";const tz={"aria-label":kr.string,onClick:kr.func,variant:kr.oneOf(["white"])},Tf=x.forwardRef(({className:t,variant:e,"aria-label":n="Close",...r},i)=>g.jsx("button",{ref:i,type:"button",className:we("btn-close",e&&`btn-close-${e}`,t),"aria-label":n,...r}));Tf.displayName="CloseButton";Tf.propTypes=tz;const Ak=x.forwardRef((t,e)=>{const{bsPrefix:n,show:r=!0,closeLabel:i="Close alert",closeVariant:s,className:o,children:a,variant:l="primary",onClose:c,dismissible:d,transition:f=ku,...m}=m4(t,{show:"onClose"}),v=Be(n,"alert"),P=An(T=>{c&&c(!1,T)}),k=f===!0?ku:f,D=g.jsxs("div",{role:"alert",...k?void 0:m,ref:e,className:we(o,v,l&&`${v}-${l}`,d&&`${v}-dismissible`),children:[d&&g.jsx(Tf,{onClick:P,"aria-label":i,variant:s}),a]});return k?g.jsx(k,{unmountOnExit:!0,...m,ref:void 0,in:r,children:D}):r?D:null});Ak.displayName="Alert";const ev=Object.assign(Ak,{Link:Rk,Heading:Tk}),Rr=x.forwardRef(({as:t,bsPrefix:e,variant:n="primary",size:r,active:i=!1,disabled:s=!1,className:o,...a},l)=>{const c=Be(e,"btn"),[d,{tagName:f}]=Zy({tagName:t,disabled:s,...a}),m=f;return g.jsx(m,{...d,...a,ref:l,disabled:s,className:we(o,c,i&&"active",n&&`${c}-${n}`,r&&`${c}-${r}`,a.href&&s&&"disabled")})});Rr.displayName="Button";function nz(t){const e=x.useRef(t);return e.current=t,e}function Pk(t){const e=nz(t);x.useEffect(()=>()=>e.current(),[])}function rz(t,e){return x.Children.toArray(t).some(n=>x.isValidElement(n)&&n.type===e)}function iz({as:t,bsPrefix:e,className:n,...r}){e=Be(e,"col");const i=fk(),s=pk(),o=[],a=[];return i.forEach(l=>{const c=r[l];delete r[l];let d,f,m;typeof c=="object"&&c!=null?{span:d,offset:f,order:m}=c:d=c;const v=l!==s?`-${l}`:"";d&&o.push(d===!0?`${e}${v}`:`${e}${v}-${d}`),m!=null&&a.push(`order${v}-${m}`),f!=null&&a.push(`offset${v}-${f}`)}),[{...r,className:we(n,...o,...a)},{as:t,bsPrefix:e,spans:o}]}const pe=x.forwardRef((t,e)=>{const[{className:n,...r},{as:i="div",bsPrefix:s,spans:o}]=iz(t);return g.jsx(i,{...r,ref:e,className:we(n,!o.length&&s)})});pe.displayName="Col";var sz=Function.prototype.bind.call(Function.prototype.call,[].slice);function ho(t,e){return sz(t.querySelectorAll(e))}function mT(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}const oz="data-rr-ui-";function az(t){return`${oz}${t}`}const Ck=x.createContext(Ma?window:void 0);Ck.Provider;function tv(){return x.useContext(Ck)}const lz={type:kr.string,tooltip:kr.bool,as:kr.elementType},Sf=x.forwardRef(({as:t="div",className:e,type:n="valid",tooltip:r=!1,...i},s)=>g.jsx(t,{...i,ref:s,className:we(e,`${n}-${r?"tooltip":"feedback"}`)}));Sf.displayName="Feedback";Sf.propTypes=lz;const Fr=x.createContext({}),nv=x.forwardRef(({id:t,bsPrefix:e,className:n,type:r="checkbox",isValid:i=!1,isInvalid:s=!1,as:o="input",...a},l)=>{const{controlId:c}=x.useContext(Fr);return e=Be(e,"form-check-input"),g.jsx(o,{...a,ref:l,type:r,id:t||c,className:we(n,e,i&&"is-valid",s&&"is-invalid")})});nv.displayName="FormCheckInput";const mh=x.forwardRef(({bsPrefix:t,className:e,htmlFor:n,...r},i)=>{const{controlId:s}=x.useContext(Fr);return t=Be(t,"form-check-label"),g.jsx("label",{...r,ref:i,htmlFor:n||s,className:we(e,t)})});mh.displayName="FormCheckLabel";const kk=x.forwardRef(({id:t,bsPrefix:e,bsSwitchPrefix:n,inline:r=!1,reverse:i=!1,disabled:s=!1,isValid:o=!1,isInvalid:a=!1,feedbackTooltip:l=!1,feedback:c,feedbackType:d,className:f,style:m,title:v="",type:P="checkbox",label:k,children:D,as:T="input",...w},S)=>{e=Be(e,"form-check"),n=Be(n,"form-switch");const{controlId:O}=x.useContext(Fr),U=x.useMemo(()=>({controlId:t||O}),[O,t]),F=!D&&k!=null&&k!==!1||rz(D,mh),E=g.jsx(nv,{...w,type:P==="switch"?"checkbox":P,ref:S,isValid:o,isInvalid:a,disabled:s,as:T});return g.jsx(Fr.Provider,{value:U,children:g.jsx("div",{style:m,className:we(f,F&&e,r&&`${e}-inline`,i&&`${e}-reverse`,P==="switch"&&n),children:D||g.jsxs(g.Fragment,{children:[E,F&&g.jsx(mh,{title:v,children:k}),c&&g.jsx(Sf,{type:d,tooltip:l,children:c})]})})})});kk.displayName="FormCheck";const gh=Object.assign(kk,{Input:nv,Label:mh}),xk=x.forwardRef(({bsPrefix:t,type:e,size:n,htmlSize:r,id:i,className:s,isValid:o=!1,isInvalid:a=!1,plaintext:l,readOnly:c,as:d="input",...f},m)=>{const{controlId:v}=x.useContext(Fr);return t=Be(t,"form-control"),g.jsx(d,{...f,type:e,size:r,ref:m,readOnly:c,id:i||v,className:we(s,l?`${t}-plaintext`:t,n&&`${t}-${n}`,e==="color"&&`${t}-color`,o&&"is-valid",a&&"is-invalid")})});xk.displayName="FormControl";const uz=Object.assign(xk,{Feedback:Sf}),bk=x.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=Be(e,"form-floating"),g.jsx(n,{ref:i,className:we(t,e),...r})));bk.displayName="FormFloating";const rv=x.forwardRef(({controlId:t,as:e="div",...n},r)=>{const i=x.useMemo(()=>({controlId:t}),[t]);return g.jsx(Fr.Provider,{value:i,children:g.jsx(e,{...n,ref:r})})});rv.displayName="FormGroup";const Nk=x.forwardRef(({as:t="label",bsPrefix:e,column:n=!1,visuallyHidden:r=!1,className:i,htmlFor:s,...o},a)=>{const{controlId:l}=x.useContext(Fr);e=Be(e,"form-label");let c="col-form-label";typeof n=="string"&&(c=`${c} ${c}-${n}`);const d=we(i,e,r&&"visually-hidden",n&&c);return s=s||l,n?g.jsx(pe,{ref:a,as:"label",className:d,htmlFor:s,...o}):g.jsx(t,{ref:a,className:d,htmlFor:s,...o})});Nk.displayName="FormLabel";const Dk=x.forwardRef(({bsPrefix:t,className:e,id:n,...r},i)=>{const{controlId:s}=x.useContext(Fr);return t=Be(t,"form-range"),g.jsx("input",{...r,type:"range",ref:i,className:we(e,t),id:n||s})});Dk.displayName="FormRange";const Ok=x.forwardRef(({bsPrefix:t,size:e,htmlSize:n,className:r,isValid:i=!1,isInvalid:s=!1,id:o,...a},l)=>{const{controlId:c}=x.useContext(Fr);return t=Be(t,"form-select"),g.jsx("select",{...a,size:n,ref:l,className:we(r,t,e&&`${t}-${e}`,i&&"is-valid",s&&"is-invalid"),id:o||c})});Ok.displayName="FormSelect";const Vk=x.forwardRef(({bsPrefix:t,className:e,as:n="small",muted:r,...i},s)=>(t=Be(t,"form-text"),g.jsx(n,{...i,ref:s,className:we(e,t,r&&"text-muted")})));Vk.displayName="FormText";const Lk=x.forwardRef((t,e)=>g.jsx(gh,{...t,ref:e,type:"switch"}));Lk.displayName="Switch";const cz=Object.assign(Lk,{Input:gh.Input,Label:gh.Label}),Mk=x.forwardRef(({bsPrefix:t,className:e,children:n,controlId:r,label:i,...s},o)=>(t=Be(t,"form-floating"),g.jsxs(rv,{ref:o,className:we(e,t),controlId:r,...s,children:[n,g.jsx("label",{htmlFor:r,children:i})]})));Mk.displayName="FloatingLabel";const dz={_ref:kr.any,validated:kr.bool,as:kr.elementType},iv=x.forwardRef(({className:t,validated:e,as:n="form",...r},i)=>g.jsx(n,{...r,ref:i,className:we(t,e&&"was-validated")}));iv.displayName="Form";iv.propTypes=dz;const B=Object.assign(iv,{Group:rv,Control:uz,Floating:bk,Check:gh,Switch:cz,Label:Nk,Text:Vk,Range:Dk,Select:Ok,FloatingLabel:Mk});var Qc;function gT(t){if((!Qc&&Qc!==0||t)&&Ma){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e),Qc=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return Qc}function Op(t){t===void 0&&(t=If());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function hz(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const _T=az("modal-open");class sv{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return hz(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(Ts(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(_T,""),Ts(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(_T),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const Vp=(t,e)=>Ma?t==null?(e||If()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function fz(t,e){const n=tv(),[r,i]=x.useState(()=>Vp(t,n==null?void 0:n.document));if(!r){const s=Vp(t);s&&i(s)}return x.useEffect(()=>{},[e,r]),x.useEffect(()=>{const s=Vp(t);s!==r&&i(s)},[t,r]),r}function pz({children:t,in:e,onExited:n,mountOnEnter:r,unmountOnExit:i}){const s=x.useRef(null),o=x.useRef(e),a=An(n);x.useEffect(()=>{e?o.current=!0:a(s.current)},[e,a]);const l=tc(s,t.ref),c=x.cloneElement(t,{ref:l});return e?c:i||!o.current&&r?null:c}function mz(t){return t.code==="Escape"||t.keyCode===27}function gz(){const t=x.version.split(".");return{major:+t[0],minor:+t[1],patch:+t[2]}}const _z=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function yz(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function vz(t){let{onEnter:e,onEntering:n,onEntered:r,onExit:i,onExiting:s,onExited:o,addEndListener:a,children:l}=t,c=yz(t,_z);const{major:d}=gz(),f=d>=19?l.props.ref:l.ref,m=x.useRef(null),v=tc(m,typeof l=="function"?null:f),P=F=>E=>{F&&m.current&&F(m.current,E)},k=x.useCallback(P(e),[e]),D=x.useCallback(P(n),[n]),T=x.useCallback(P(r),[r]),w=x.useCallback(P(i),[i]),S=x.useCallback(P(s),[s]),O=x.useCallback(P(o),[o]),U=x.useCallback(P(a),[a]);return Object.assign({},c,{nodeRef:m},e&&{onEnter:k},n&&{onEntering:D},r&&{onEntered:T},i&&{onExit:w},s&&{onExiting:S},o&&{onExited:O},a&&{addEndListener:U},{children:typeof l=="function"?(F,E)=>l(F,Object.assign({},E,{ref:v})):x.cloneElement(l,{ref:v})})}const wz=["component"];function Ez(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const Iz=x.forwardRef((t,e)=>{let{component:n}=t,r=Ez(t,wz);const i=vz(r);return g.jsx(n,Object.assign({ref:e},i))});function Tz({in:t,onTransition:e}){const n=x.useRef(null),r=x.useRef(!0),i=An(e);return pT(()=>{if(!n.current)return;let s=!1;return i({in:t,element:n.current,initial:r.current,isStale:()=>s}),()=>{s=!0}},[t,i]),pT(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function Sz({children:t,in:e,onExited:n,onEntered:r,transition:i}){const[s,o]=x.useState(!e);e&&s&&o(!1);const a=Tz({in:!!e,onTransition:c=>{const d=()=>{c.isStale()||(c.in?r==null||r(c.element,c.initial):(o(!0),n==null||n(c.element)))};Promise.resolve(i(c)).then(d,f=>{throw c.in||o(!0),f})}}),l=tc(a,t.ref);return s&&!e?null:x.cloneElement(t,{ref:l})}function yT(t,e,n){return t?g.jsx(Iz,Object.assign({},n,{component:t})):e?g.jsx(Sz,Object.assign({},n,{transition:e})):g.jsx(pz,Object.assign({},n))}const Rz=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Az(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}let Lp;function Pz(t){return Lp||(Lp=new sv({ownerDocument:t==null?void 0:t.document})),Lp}function Cz(t){const e=tv(),n=t||Pz(e),r=x.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:x.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:x.useCallback(i=>{r.current.backdrop=i},[])})}const Fk=x.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:a=!0,keyboard:l=!0,onBackdropClick:c,onEscapeKeyDown:d,transition:f,runTransition:m,backdropTransition:v,runBackdropTransition:P,autoFocus:k=!0,enforceFocus:D=!0,restoreFocus:T=!0,restoreFocusOptions:w,renderDialog:S,renderBackdrop:O=ve=>g.jsx("div",Object.assign({},ve)),manager:U,container:F,onShow:E,onHide:y=()=>{},onExit:I,onExited:R,onExiting:C,onEnter:b,onEntering:A,onEntered:at}=t,Bt=Az(t,Rz);const xt=tv(),$e=fz(F),G=Cz(U),ee=$4(),te=q4(n),[fe,ue]=x.useState(!n),oe=x.useRef(null);x.useImperativeHandle(e,()=>G,[G]),Ma&&!te&&n&&(oe.current=Op(xt==null?void 0:xt.document)),n&&fe&&ue(!1);const rt=An(()=>{if(G.add(),se.current=ph(document,"keydown",Gi),fr.current=ph(document,"focus",()=>setTimeout(ut),!0),E&&E(),k){var ve,Wi;const Hi=Op((ve=(Wi=G.dialog)==null?void 0:Wi.ownerDocument)!=null?ve:xt==null?void 0:xt.document);G.dialog&&Hi&&!mT(G.dialog,Hi)&&(oe.current=Hi,G.dialog.focus())}}),lt=An(()=>{if(G.remove(),se.current==null||se.current(),fr.current==null||fr.current(),T){var ve;(ve=oe.current)==null||ve.focus==null||ve.focus(w),oe.current=null}});x.useEffect(()=>{!n||!$e||rt()},[n,$e,rt]),x.useEffect(()=>{fe&&lt()},[fe,lt]),Pk(()=>{lt()});const ut=An(()=>{if(!D||!ee()||!G.isTopModal())return;const ve=Op(xt==null?void 0:xt.document);G.dialog&&ve&&!mT(G.dialog,ve)&&G.dialog.focus()}),bt=An(ve=>{ve.target===ve.currentTarget&&(c==null||c(ve),a===!0&&y())}),Gi=An(ve=>{l&&mz(ve)&&G.isTopModal()&&(d==null||d(ve),ve.defaultPrevented||y())}),fr=x.useRef(),se=x.useRef(),qe=(...ve)=>{ue(!0),R==null||R(...ve)};if(!$e)return null;const pt=Object.assign({role:r,ref:G.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},Bt,{style:s,className:i,tabIndex:-1});let Ln=S?S(pt):g.jsx("div",Object.assign({},pt,{children:x.cloneElement(o,{role:"document"})}));Ln=yT(f,m,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:I,onExiting:C,onExited:qe,onEnter:b,onEntering:A,onEntered:at,children:Ln});let dn=null;return a&&(dn=O({ref:G.setBackdropRef,onClick:bt}),dn=yT(v,P,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:dn})),g.jsx(g.Fragment,{children:bo.createPortal(g.jsxs(g.Fragment,{children:[dn,Ln]}),$e)})});Fk.displayName="Modal";const kz=Object.assign(Fk,{Manager:sv});function xz(t,e){return t.classList?t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function bz(t,e){t.classList?t.classList.add(e):xz(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function vT(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Nz(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=vT(t.className,e):t.setAttribute("class",vT(t.className&&t.className.baseVal||"",e))}const fo={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Dz extends sv{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,Ts(n,{[e]:`${parseFloat(Ts(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],Ts(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(bz(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";ho(n,fo.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),ho(n,fo.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),ho(n,fo.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();Nz(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";ho(n,fo.FIXED_CONTENT).forEach(s=>this.restore(r,s)),ho(n,fo.STICKY_CONTENT).forEach(s=>this.restore(i,s)),ho(n,fo.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let Mp;function Oz(t){return Mp||(Mp=new Dz(t)),Mp}const Uk=x.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=Be(e,"modal-body"),g.jsx(n,{ref:i,className:we(t,e),...r})));Uk.displayName="ModalBody";const jk=x.createContext({onHide(){}}),ov=x.forwardRef(({bsPrefix:t,className:e,contentClassName:n,centered:r,size:i,fullscreen:s,children:o,scrollable:a,...l},c)=>{t=Be(t,"modal");const d=`${t}-dialog`,f=typeof s=="string"?`${t}-fullscreen-${s}`:`${t}-fullscreen`;return g.jsx("div",{...l,ref:c,className:we(d,e,i&&`${t}-${i}`,r&&`${d}-centered`,a&&`${d}-scrollable`,s&&f),children:g.jsx("div",{className:we(`${t}-content`,n),children:o})})});ov.displayName="ModalDialog";const Bk=x.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=Be(e,"modal-footer"),g.jsx(n,{ref:i,className:we(t,e),...r})));Bk.displayName="ModalFooter";const Vz=x.forwardRef(({closeLabel:t="Close",closeVariant:e,closeButton:n=!1,onHide:r,children:i,...s},o)=>{const a=x.useContext(jk),l=An(()=>{a==null||a.onHide(),r==null||r()});return g.jsxs("div",{ref:o,...s,children:[i,n&&g.jsx(Tf,{"aria-label":t,variant:e,onClick:l})]})}),zk=x.forwardRef(({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:r=!1,...i},s)=>(t=Be(t,"modal-header"),g.jsx(Vz,{ref:s,...i,className:we(e,t),closeLabel:n,closeButton:r})));zk.displayName="ModalHeader";const Lz=Ek("h4"),$k=x.forwardRef(({className:t,bsPrefix:e,as:n=Lz,...r},i)=>(e=Be(e,"modal-title"),g.jsx(n,{ref:i,className:we(t,e),...r})));$k.displayName="ModalTitle";function Mz(t){return g.jsx(ku,{...t,timeout:null})}function Fz(t){return g.jsx(ku,{...t,timeout:null})}const qk=x.forwardRef(({bsPrefix:t,className:e,style:n,dialogClassName:r,contentClassName:i,children:s,dialogAs:o=ov,"data-bs-theme":a,"aria-labelledby":l,"aria-describedby":c,"aria-label":d,show:f=!1,animation:m=!0,backdrop:v=!0,keyboard:P=!0,onEscapeKeyDown:k,onShow:D,onHide:T,container:w,autoFocus:S=!0,enforceFocus:O=!0,restoreFocus:U=!0,restoreFocusOptions:F,onEntered:E,onExit:y,onExiting:I,onEnter:R,onEntering:C,onExited:b,backdropClassName:A,manager:at,...Bt},xt)=>{const[$e,G]=x.useState({}),[ee,te]=x.useState(!1),fe=x.useRef(!1),ue=x.useRef(!1),oe=x.useRef(null),[rt,lt]=z4(),ut=tc(xt,lt),bt=An(T),Gi=v4();t=Be(t,"modal");const fr=x.useMemo(()=>({onHide:bt}),[bt]);function se(){return at||Oz({isRTL:Gi})}function qe(ne){if(!Ma)return;const Ge=se().getScrollbarWidth()>0,Ki=ne.scrollHeight>If(ne).documentElement.clientHeight;G({paddingRight:Ge&&!Ki?gT():void 0,paddingLeft:!Ge&&Ki?gT():void 0})}const pt=An(()=>{rt&&qe(rt.dialog)});Pk(()=>{Ig(window,"resize",pt),oe.current==null||oe.current()});const Ln=()=>{fe.current=!0},dn=ne=>{fe.current&&rt&&ne.target===rt.dialog&&(ue.current=!0),fe.current=!1},ve=()=>{te(!0),oe.current=wk(rt.dialog,()=>{te(!1)})},Wi=ne=>{ne.target===ne.currentTarget&&ve()},Hi=ne=>{if(v==="static"){Wi(ne);return}if(ue.current||ne.target!==ne.currentTarget){ue.current=!1;return}T==null||T()},Rf=ne=>{P?k==null||k(ne):(ne.preventDefault(),v==="static"&&ve())},rc=(ne,Ge)=>{ne&&qe(ne),R==null||R(ne,Ge)},Fa=ne=>{oe.current==null||oe.current(),y==null||y(ne)},ic=(ne,Ge)=>{C==null||C(ne,Ge),vk(window,"resize",pt)},Af=ne=>{ne&&(ne.style.display=""),b==null||b(ne),Ig(window,"resize",pt)},Ua=x.useCallback(ne=>g.jsx("div",{...ne,className:we(`${t}-backdrop`,A,!m&&"show")}),[m,A,t]),Js={...n,...$e};Js.display="block";const sc=ne=>g.jsx("div",{role:"dialog",...ne,style:Js,className:we(e,t,ee&&`${t}-static`,!m&&"show"),onClick:v?Hi:void 0,onMouseUp:dn,"data-bs-theme":a,"aria-label":d,"aria-labelledby":l,"aria-describedby":c,children:g.jsx(o,{...Bt,onMouseDown:Ln,className:r,contentClassName:i,children:s})});return g.jsx(jk.Provider,{value:fr,children:g.jsx(kz,{show:f,ref:ut,backdrop:v,container:w,keyboard:!0,autoFocus:S,enforceFocus:O,restoreFocus:U,restoreFocusOptions:F,onEscapeKeyDown:Rf,onShow:D,onHide:T,onEnter:rc,onEntering:ic,onEntered:E,onExit:Fa,onExiting:I,onExited:Af,manager:se(),transition:m?Mz:void 0,backdropTransition:m?Fz:void 0,renderBackdrop:Ua,renderDialog:sc})})});qk.displayName="Modal";const mn=Object.assign(qk,{Body:Uk,Header:zk,Title:$k,Footer:Bk,Dialog:ov,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),ye=x.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=Be(t,"row"),o=fk(),a=pk(),l=`${s}-cols`,c=[];return o.forEach(d=>{const f=r[d];delete r[d];let m;f!=null&&typeof f=="object"?{cols:m}=f:m=f;const v=d!==a?`-${d}`:"";m!=null&&c.push(`${l}${v}-${m}`)}),g.jsx(n,{ref:i,...r,className:we(e,s,...c)})});ye.displayName="Row";const Uz=t=>{const{handleFileAdd:e}=x.useContext(wf),[n,r]=x.useState(!1),[i,s]=x.useState(""),o=x.useRef(),a=x.useRef(),l=x.useRef(),c=x.useRef(),d=x.useRef(),f=x.useRef(),m=x.useRef(),v=x.useRef(),P=x.useRef(),k=x.useRef(),D=x.useRef(),T=x.useRef(),w=x.useRef(),S=x.useRef(),O=x.useRef(),U=x.useRef(),F=x.useRef(),E=x.useRef(),y=x.useRef(),I=x.useRef(),R=x.useRef(),C=x.useRef(),b=x.useRef(),A=x.useRef(),at=()=>r(!0),Bt=()=>r(!1),xt=["image/png","image/jpeg","image/jpg"],[$e,G]=x.useState({Centro_1:"",Horario_Centro_1:"",Direccion_Centro_1:""}),ee=se=>{G({...$e,[se.target.name]:se.target.value})},[te,fe]=x.useState([["Centro_1","Horario_Centro_1","Direccion_Centro_1"]]),ue=()=>{let se="Centro_".concat(String(te.length+1)),qe="Horario_Centro_".concat(String(te.length+1)),pt="Direccion_Centro_".concat(String(te.length+1));$e[se]="",$e[qe]="",$e[pt]="",fe([...te,[se,qe,pt]])},[oe,rt]=x.useState({Grupo_1:"",Horario_Grupo_1:"",Direccion_Grupo_1:""}),lt=se=>{rt({...oe,[se.target.name]:se.target.value})},[ut,bt]=x.useState([["Grupo_1","Horario_Grupo_1","Direccion_Grupo_1"]]),Gi=()=>{let se="Grupo_".concat(String(ut.length+1)),qe="Horario_Grupo_".concat(String(ut.length+1)),pt="Direccion_Grupo_".concat(String(ut.length+1));oe[se]="",oe[qe]="",oe[pt]="",bt([...ut,[se,qe,pt]])},fr=async se=>{var dn,ve;if(se.preventDefault(),s(""),!xt.includes((dn=d.current)==null?void 0:dn.files[0].type))return s("por favor use una imagen valida (png, jpeg, jpg)");let qe=new Date,pt=qe.setHours(qe.getHours()),Ln={email:localStorage.getItem("userEmailLS"),nombre:o.current.value,clasificacion:a.current.value,vicario:l.current.value,parroco:c.current.value,duration:pt,direccion:m.current.value,telefono:v.current.value,sitioWeb:P.current.value,decanato:f.current.value,horarioDeMisasLunes:k.current.value,horarioDeMisasMartes:D.current.value,horarioDeMisasMiercoles:T.current.value,horarioDeMisasJueves:w.current.value,horarioDeMisasViernes:S.current.value,horarioDeMisasSabado:O.current.value,horarioDeMisasDomingo:U.current.value,catesismoAdultos:F.current.value,catesismoNinos:E.current.value,confesiones:y.current.value,preMatrimoniales:I.current.value,preBautismales:R.current.value,eventos:C.current.value,fiestaPatronal:b.current.value,centros:$e,grupos:oe,comentarios:A.current.value};e((ve=d.current)==null?void 0:ve.files[0],Ln),Bt(),localStorage.setItem("Done","gracias")};return g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"col d-flex justify-content-center my-3 ",children:localStorage.getItem("Done")?g.jsx("p",{children:"Gracias !!"}):g.jsx("button",{onClick:at,className:"btn btn-primary mx-5",children:"CREAR INFORME"})}),g.jsx(mn,{centered:!0,show:n,onHide:Bt,style:{width:"96%",marginLeft:"1%"},children:g.jsxs("form",{onSubmit:fr,style:{backgroundColor:"rgb(222,222,222)"},children:[g.jsxs(mn.Body,{children:[i&&g.jsx(ev,{variant:"danger",children:i}),g.jsx(ye,{children:g.jsx(pe,{className:"border mb-5 btn bg-primary mx-2 p-2 text-center text-white",children:localStorage.getItem("userEmailLS")})}),g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:"Nombre"}),g.jsx(B.Control,{type:"text",required:!0,ref:o})]})})}),g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:"Parroco"}),g.jsx(B.Control,{type:"text",required:!0,ref:c})]})})}),g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:"Vicario"}),g.jsx(B.Control,{type:"text",required:!0,ref:l})]})})}),g.jsx(ye,{children:g.jsxs(pe,{className:"mb-2",children:[g.jsx(B.Label,{children:"Clasificacion"}),g.jsxs(B.Control,{as:"select",multiple:!1,ref:a,children:[g.jsx("option",{value:"parroquia",children:"Parroquia"}),g.jsx("option",{value:"cuasiparroquia",children:"Cuasiparroquia"}),g.jsx("option",{value:"catedral",children:"Catedral"}),g.jsx("option",{value:"centro",children:"Centro"}),g.jsx("option",{value:"santuario",children:"Santuario"}),g.jsx("option",{value:"rectoria",children:"Rectoria"}),g.jsx("option",{value:"institucion educativa",children:"Institucion Educativa"}),g.jsx("option",{value:"obra social",children:"Obra Social"}),g.jsx("option",{value:"vida consagrada femenina",children:"Vida Consagrada Femenina"}),g.jsx("option",{value:"vida consagrada masculina",children:"Vida Consagrada Masculina"}),g.jsx("option",{value:"organismo laical",children:"Organismo Laical"}),g.jsx("option",{value:"otro",children:"Otro"})]})]})}),g.jsx(ye,{children:g.jsxs(pe,{children:[g.jsx(B.Label,{children:"Decanato"}),g.jsx(B.Control,{type:"text",required:!0,ref:f})]})}),g.jsx("hr",{}),g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:"Confesiones"}),g.jsx(B.Control,{type:"text",required:!0,ref:y})]})})}),g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:"Dirección"}),g.jsx(B.Control,{type:"text",required:!0,ref:m})]})})}),g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:"Telefono"}),g.jsx(B.Control,{type:"text",required:!0,ref:v})]})})}),g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:"Sitio Web"}),g.jsx(B.Control,{type:"text",required:!0,ref:P})]})})}),g.jsx("hr",{}),g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:"Horario de Misas Lunes "}),g.jsx(B.Control,{type:"text",required:!0,ref:k})]})})}),g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:"Horario de Misas Martes"}),g.jsx(B.Control,{type:"text",required:!0,ref:D})]})})}),g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:"Horario de Misas Miercoles"}),g.jsx(B.Control,{type:"text",required:!0,ref:T})]})})}),g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:"Horario de Misas Jueves"}),g.jsx(B.Control,{type:"text",required:!0,ref:w})]})})}),g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:"Horario de Misas Viernes"}),g.jsx(B.Control,{type:"text",required:!0,ref:S})]})})}),g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:"Horario de Misas Sabados"}),g.jsx(B.Control,{type:"text",required:!0,ref:O})]})})}),g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:"Horario de Misas Domingos"}),g.jsx(B.Control,{type:"text",required:!0,ref:U})]})})}),g.jsx("hr",{}),g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:"Catesismo Adultos"}),g.jsx(B.Control,{type:"text",required:!0,ref:F})]})})}),g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:"Catesismo Niños"}),g.jsx(B.Control,{type:"text",required:!0,ref:E})]})})}),g.jsx("hr",{}),g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:"Platicas Prematrimoniales"}),g.jsx(B.Control,{type:"text",required:!0,ref:I})]})})}),g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:"Platicas Prebautismales"}),g.jsx(B.Control,{type:"text",required:!0,ref:R})]})})}),g.jsx("hr",{}),g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:"Eventos"}),g.jsx(B.Control,{type:"text",required:!0,ref:C})]})})}),g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:"Fiesta Patronal"}),g.jsx(B.Control,{type:"text",required:!0,ref:b})]})})}),g.jsx("hr",{}),te.map((se,qe)=>g.jsxs("div",{children:[g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:se[0]}),g.jsx(B.Control,{placeholder:"Nombre de Centro parroquial",type:"text",name:se[0],onChange:ee})]})})}),g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsxs(B.Label,{children:["Horario de ",se[0]]}),g.jsx(B.Control,{type:"text",name:se[1],onChange:ee})]})})}),g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsxs(B.Label,{children:["Direccion de ",se[0]]}),g.jsx(B.Control,{type:"text",name:se[2],onChange:ee})]})})}),g.jsx("hr",{})]},qe+"@#$")),g.jsx(Rr,{variant:"info",className:"AgregarCentro",onClick:ue,children:"+ Agregar Centro"}),g.jsx("hr",{}),ut.map((se,qe)=>g.jsxs("div",{children:[g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:se[0]}),g.jsx(B.Control,{type:"text",placeholder:"Nombre Grupo Devocional o Apostolado",name:se[0],onChange:lt})]})})}),g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsxs(B.Label,{children:["Horario de ",se[0]]}),g.jsx(B.Control,{type:"text",name:se[1],onChange:lt})]})})}),g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsxs(B.Label,{children:["Direccion de ",se[0]]}),g.jsx(B.Control,{type:"text",name:se[2],onChange:lt})]})})}),g.jsx("hr",{})]},qe+"@#$-")),g.jsx(Rr,{variant:"info",onClick:Gi,children:"+ Agregar Grupo - Devocion"}),g.jsx("hr",{}),g.jsx(ye,{children:g.jsx(pe,{children:g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:"Comentarios"}),g.jsx(B.Control,{as:"textarea",placeholder:"comentar...",style:{height:"100px"},required:!0,ref:A})]})})}),g.jsx("hr",{}),g.jsx(ye,{children:g.jsxs(pe,{children:[g.jsx(B.Label,{children:"Imagen"}),g.jsx(B.Group,{children:g.jsx(B.Control,{type:"file",label:"Cargar Foto",required:!0,ref:d})})]})})]}),g.jsxs(mn.Footer,{children:[g.jsx(Rr,{variant:"secondary",onClick:Bt,children:"Cancelar"}),g.jsx(Rr,{variant:"primary",type:"submit",children:"Guardar"})]})]})})]})},jz=({item:t})=>{var i,s;const{deleteById:e,setToggle:n,toggle:r}=x.useContext(wf);return g.jsxs("div",{className:"card shadow-sm ",children:[g.jsx("div",{style:{height:"180px",backgroundImage:`url(${t.imgUrl})`,backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"},className:"w-100 mt-4"}),g.jsxs("div",{className:"w-100 ",children:[g.jsx("h5",{children:" "}),g.jsx("h5",{children:t.email}),g.jsx("hr",{}),g.jsxs("p",{children:["Nombre:",g.jsxs("span",{children:[" ",t.nombre]})]}),g.jsxs("p",{children:[" Parroco:",g.jsxs("span",{children:[" ",t.parroco]})]}),g.jsxs("p",{children:[" Vicario:",g.jsxs("span",{children:[" ",t.vicario]})]}),g.jsxs("p",{children:["Clasificacion:",g.jsxs("span",{children:[" ",t.clasificacion]})]}),g.jsxs("p",{children:[" Decanato:",g.jsxs("span",{children:[" ",t.decanato]})]}),g.jsx("hr",{}),g.jsxs("p",{children:[" Confesiones:",g.jsxs("span",{children:[" ",t.confesiones]})]}),g.jsxs("p",{children:[" Direccion:",g.jsxs("span",{children:[" ",t.direccion]})]}),g.jsxs("p",{children:[" Telefono:",g.jsxs("span",{children:[" ",t.telefono]})]}),g.jsxs("p",{children:[" Sitio Web:",g.jsxs("span",{children:[" ",t.sitioWeb]})]}),g.jsx("hr",{}),g.jsxs("p",{children:[" Horario de Misas Lunes:",g.jsxs("span",{children:[" ",t.horarioDeMisasLunes]})]}),g.jsxs("p",{children:[" Horario de Misas Martes:",g.jsxs("span",{children:[" ",t.horarioDeMisasMartes]})]}),g.jsxs("p",{children:[" Horario de Misas Miercoles:",g.jsxs("span",{children:[" ",t.horarioDeMisasMiercoles]})]}),g.jsxs("p",{children:[" Horario de Misas Jueves:",g.jsxs("span",{children:[" ",t.horarioDeMisasJueves]})]}),g.jsxs("p",{children:[" Horario de Misas Viernes:",g.jsxs("span",{children:[" ",t.horarioDeMisasViernes]})]}),g.jsxs("p",{children:[" Horario de Misas Sabado:",g.jsxs("span",{children:[" ",t.horarioDeMisasSabado]})]}),g.jsxs("p",{children:[" Horario de Misas Domingo:",g.jsxs("span",{children:[" ",t.horarioDeMisasDomingo]})]}),g.jsx("hr",{}),g.jsxs("p",{children:[" catesismo Adultos:",g.jsxs("span",{children:[" ",t.catesismoAdultos]})]}),g.jsxs("p",{children:[" catesismo Niños:",g.jsxs("span",{children:[" ",t.catesismoNinos]})]}),g.jsx("hr",{}),g.jsxs("p",{children:[" Platicas Prematrimoniales:",g.jsxs("span",{children:[" ",t.preMatrimoniales]})]}),g.jsxs("p",{children:[" Platicas Prebautismales:",g.jsxs("span",{children:[" ",t.preBautismales]})]}),g.jsxs("p",{children:[" Eventos:",g.jsxs("span",{children:[" ",t.eventos]})]}),g.jsxs("p",{children:[" Fiesta Patronal: ",g.jsx("span",{children:t.fiestaPatronal})]}),g.jsx("hr",{}),(i=Object.keys(t.centros).sort())==null?void 0:i.map((o,a)=>g.jsxs("p",{children:[o,":",g.jsxs("span",{children:[" ",t.centros[o]]})]},a+"koko")),g.jsx("hr",{}),(s=Object.keys(t.grupos).sort())==null?void 0:s.map((o,a)=>g.jsxs("p",{children:[o,":",g.jsxs("span",{children:[" ",t.grupos[o]]})]},a+"koke")),g.jsx("hr",{}),g.jsxs("p",{children:[" Comentarios:",g.jsxs("span",{children:[" ",t.comentarios]})]}),g.jsx("hr",{}),g.jsx("button",{className:"btn btn-danger m-5",onClick:()=>{window.confirm("Quieres Borrar este Documento?")&&(e(t.id,t.imgName),n(!r),localStorage.removeItem("Done"))},children:"BORRAR INFORME"})]})]})},nc=x.createContext(),Bz=t=>{const e=async(o,a,l)=>{try{await iC(o,a,l),i(o,a,l)}catch(c){console.error(c)}},[n,r]=x.useState(!0),i=(o,a,l)=>{sC(o,a,l).then(c=>{const d=c.user;localStorage.setItem("userEmailLS",d.email),r(!n),location.reload()}).catch(c=>{const d=c.code;console.log(d);const f=c.message;console.log(f)})},s=()=>{ZF(Jy),localStorage.removeItem("userEmailLS"),r(!n)};return g.jsx(nc.Provider,{value:{register:e,login:i,logout:s,stateLogout:n},children:t.children})},zz=()=>{const{items:t}=x.useContext(wf),{stateLogout:e}=x.useContext(nc);return console.log(t),g.jsxs("div",{className:"",children:[localStorage.getItem("userEmailLS")!==null&&g.jsx(Uz,{items:t}),e?g.jsx("div",{className:"row row-cols-1 p-5 border mt-1 ",children:t.map((n,r)=>g.jsx(jz,{item:n},r))}):""]})},$z="https://xipeRafa.github.io/AHilloEditor/assets/canal10-CXob-wmH.png",qz=()=>{const{login:t}=x.useContext(nc),[e,n]=x.useState(!1),[r,i]=x.useState(""),s=x.useRef(),o=x.useRef(),a=()=>n(!0),l=()=>n(!1),c=async d=>{d.preventDefault(),i("");try{await t(Jy,s.current.value,o.current.value),l()}catch{i("Invalid login")}};return g.jsxs(g.Fragment,{children:[g.jsx("div",{onClick:a,className:"btn btn-outline-secondary mx-2",children:"Entrar"}),g.jsx(mn,{centered:!0,show:e,onHide:l,children:g.jsxs("form",{onSubmit:c,children:[g.jsx(mn.Header,{children:g.jsx(mn.Title,{children:"Entrar"})}),g.jsxs(mn.Body,{children:[r&&g.jsx(ev,{variant:"danger",children:r}),g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:"Email "}),g.jsx(B.Control,{type:"email",required:!0,ref:s})]}),g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:"Password"}),g.jsx(B.Control,{type:"password",required:!0,ref:o})]})]}),g.jsxs(mn.Footer,{children:[g.jsx(Rr,{variant:"secondary",onClick:l,children:"Cancelar"}),g.jsx(Rr,{variant:"primary",type:"submit",children:"Entrar"})]})]})})]})},Gz=()=>{const{register:t}=x.useContext(nc),[e,n]=x.useState(!1),[r,i]=x.useState(""),s=x.useRef(),o=x.useRef(),a=x.useRef(),l=()=>n(!0),c=()=>n(!1),d=async f=>{if(f.preventDefault(),i(""),o.current.value!==a.current.value)return i("Passwords does not match");try{await t(Jy,s.current.value,o.current.value),c()}catch(m){i(m.message)}};return g.jsxs(g.Fragment,{children:[g.jsx("div",{onClick:l,className:"btn btn-outline-secondary mx-2",children:"Registro"}),g.jsx(mn,{centered:!0,show:e,onHide:c,children:g.jsxs("form",{onSubmit:d,children:[g.jsx(mn.Header,{children:g.jsx(mn.Title,{children:"Registro"})}),g.jsxs(mn.Body,{children:[r&&g.jsx(ev,{variant:"danger",children:r}),g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:"Email"}),g.jsx(B.Control,{type:"email",required:!0,ref:s})]}),g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:"Password"}),g.jsx(B.Control,{type:"password",required:!0,ref:o})]}),g.jsxs(B.Group,{children:[g.jsx(B.Label,{children:"Confirmar Password"}),g.jsx(B.Control,{type:"password",required:!0,ref:a})]})]}),g.jsxs(mn.Footer,{children:[g.jsx(Rr,{variant:"secondary",onClick:c,children:"Cancelar"}),g.jsx(Rr,{variant:"primary",type:"submit",children:"Registro"})]})]})})]})},Wz=()=>{const{logout:t}=x.useContext(nc);return g.jsxs("nav",{className:"container navbar navbar-light",children:[g.jsx("div",{className:"w-100 d-flex justify-content-center",children:g.jsx("div",{className:"navbar-brand mb-4",children:g.jsx("img",{src:$z,alt:"logo",height:"140"})})}),g.jsx("div",{className:"w-100 d-flex justify-content-center",children:g.jsx("div",{className:"mb-4",children:localStorage.getItem("userEmailLS")!==null?g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"btn btn-secondary mx-2 disabled",children:localStorage.getItem("userEmailLS")}),g.jsx("div",{onClick:()=>t(),className:"btn btn-outline-secondary mx-2",children:"SALIR"})]}):g.jsxs(g.Fragment,{children:[g.jsx(qz,{}),g.jsx(Gz,{})]})})})]})},Hz=()=>g.jsx(g.Fragment,{children:g.jsx(Bz,{children:g.jsxs(c4,{children:[g.jsx(Wz,{}),g.jsx(zz,{})]})})});Fp.createRoot(document.getElementById("root")).render(g.jsx(li.StrictMode,{children:g.jsx(Hz,{})}));
