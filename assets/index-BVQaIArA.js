(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function nc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var AT={exports:{}},Ud={},CT={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rc=Symbol.for("react.element"),vk=Symbol.for("react.portal"),wk=Symbol.for("react.fragment"),Ek=Symbol.for("react.strict_mode"),Ik=Symbol.for("react.profiler"),Tk=Symbol.for("react.provider"),Sk=Symbol.for("react.context"),Rk=Symbol.for("react.forward_ref"),Ak=Symbol.for("react.suspense"),Ck=Symbol.for("react.memo"),Pk=Symbol.for("react.lazy"),lw=Symbol.iterator;function kk(t){return t===null||typeof t!="object"?null:(t=lw&&t[lw]||t["@@iterator"],typeof t=="function"?t:null)}var PT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kT=Object.assign,xT={};function Qa(t,e,n){this.props=t,this.context=e,this.refs=xT,this.updater=n||PT}Qa.prototype.isReactComponent={};Qa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function bT(){}bT.prototype=Qa.prototype;function jg(t,e,n){this.props=t,this.context=e,this.refs=xT,this.updater=n||PT}var Bg=jg.prototype=new bT;Bg.constructor=jg;kT(Bg,Qa.prototype);Bg.isPureReactComponent=!0;var uw=Array.isArray,NT=Object.prototype.hasOwnProperty,zg={current:null},DT={key:!0,ref:!0,__self:!0,__source:!0};function OT(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)NT.call(e,r)&&!DT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:rc,type:t,key:s,ref:o,props:i,_owner:zg.current}}function xk(t,e){return{$$typeof:rc,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $g(t){return typeof t=="object"&&t!==null&&t.$$typeof===rc}function bk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cw=/\/+/g;function ip(t,e){return typeof t=="object"&&t!==null&&t.key!=null?bk(""+t.key):e.toString(36)}function vh(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case rc:case vk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ip(o,0):r,uw(i)?(n="",t!=null&&(n=t.replace(cw,"$&/")+"/"),vh(i,e,n,"",function(c){return c})):i!=null&&($g(i)&&(i=xk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(cw,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",uw(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+ip(s,a);o+=vh(s,e,n,l,i)}else if(l=kk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+ip(s,a++),o+=vh(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $c(t,e,n){if(t==null)return t;var r=[],i=0;return vh(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Nk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},wh={transition:null},Dk={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:wh,ReactCurrentOwner:zg};function VT(){throw Error("act(...) is not supported in production builds of React.")}ue.Children={map:$c,forEach:function(t,e,n){$c(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $c(t,function(){e++}),e},toArray:function(t){return $c(t,function(e){return e})||[]},only:function(t){if(!$g(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=Qa;ue.Fragment=wk;ue.Profiler=Ik;ue.PureComponent=jg;ue.StrictMode=Ek;ue.Suspense=Ak;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dk;ue.act=VT;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=kT({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=zg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)NT.call(e,l)&&!DT.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:rc,type:t.type,key:i,ref:s,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:Sk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Tk,_context:t},t.Consumer=t};ue.createElement=OT;ue.createFactory=function(t){var e=OT.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:Rk,render:t}};ue.isValidElement=$g;ue.lazy=function(t){return{$$typeof:Pk,_payload:{_status:-1,_result:t},_init:Nk}};ue.memo=function(t,e){return{$$typeof:Ck,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=wh.transition;wh.transition={};try{t()}finally{wh.transition=e}};ue.unstable_act=VT;ue.useCallback=function(t,e){return sn.current.useCallback(t,e)};ue.useContext=function(t){return sn.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};ue.useEffect=function(t,e){return sn.current.useEffect(t,e)};ue.useId=function(){return sn.current.useId()};ue.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return sn.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};ue.useRef=function(t){return sn.current.useRef(t)};ue.useState=function(t){return sn.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return sn.current.useTransition()};ue.version="18.3.1";CT.exports=ue;var V=CT.exports;const Ni=nc(V);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ok=V,Vk=Symbol.for("react.element"),Lk=Symbol.for("react.fragment"),Mk=Object.prototype.hasOwnProperty,Fk=Ok.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uk={key:!0,ref:!0,__self:!0,__source:!0};function LT(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Mk.call(e,r)&&!Uk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Vk,type:t,key:s,ref:o,props:i,_owner:Fk.current}}Ud.Fragment=Lk;Ud.jsx=LT;Ud.jsxs=LT;AT.exports=Ud;var g=AT.exports,em={},MT={exports:{}},Nn={},FT={exports:{}},UT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(G,ne){var ie=G.length;G.push(ne);e:for(;0<ie;){var ye=ie-1>>>1,ce=G[ye];if(0<i(ce,ne))G[ye]=ne,G[ie]=ce,ie=ye;else break e}}function n(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var ne=G[0],ie=G.pop();if(ie!==ne){G[0]=ie;e:for(var ye=0,ce=G.length,ge=ce>>>1;ye<ge;){var st=2*(ye+1)-1,Ct=G[st],Wt=st+1,Lt=G[Wt];if(0>i(Ct,ie))Wt<ce&&0>i(Lt,Ct)?(G[ye]=Lt,G[Wt]=ie,ye=Wt):(G[ye]=Ct,G[st]=ie,ye=st);else if(Wt<ce&&0>i(Lt,ie))G[ye]=Lt,G[Wt]=ie,ye=Wt;else break e}}return ne}function i(G,ne){var ie=G.sortIndex-ne.sortIndex;return ie!==0?ie:G.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,f=null,m=3,v=!1,S=!1,P=!1,x=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(G){for(var ne=n(c);ne!==null;){if(ne.callback===null)r(c);else if(ne.startTime<=G)r(c),ne.sortIndex=ne.expirationTime,e(l,ne);else break;ne=n(c)}}function b(G){if(P=!1,I(G),!S)if(n(l)!==null)S=!0,Vt(F);else{var ne=n(c);ne!==null&&_t(b,ne.startTime-G)}}function F(G,ne){S=!1,P&&(P=!1,w(y),y=-1),v=!0;var ie=m;try{for(I(ne),f=n(l);f!==null&&(!(f.expirationTime>ne)||G&&!k());){var ye=f.callback;if(typeof ye=="function"){f.callback=null,m=f.priorityLevel;var ce=ye(f.expirationTime<=ne);ne=t.unstable_now(),typeof ce=="function"?f.callback=ce:f===n(l)&&r(l),I(ne)}else r(l);f=n(l)}if(f!==null)var ge=!0;else{var st=n(c);st!==null&&_t(b,st.startTime-ne),ge=!1}return ge}finally{f=null,m=ie,v=!1}}var U=!1,T=null,y=-1,R=5,A=-1;function k(){return!(t.unstable_now()-A<R)}function N(){if(T!==null){var G=t.unstable_now();A=G;var ne=!0;try{ne=T(!0,G)}finally{ne?C():(U=!1,T=null)}}else U=!1}var C;if(typeof E=="function")C=function(){E(N)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,En=ct.port2;ct.port1.onmessage=N,C=function(){En.postMessage(null)}}else C=function(){x(N,0)};function Vt(G){T=G,U||(U=!0,C())}function _t(G,ne){y=x(function(){G(t.unstable_now())},ne)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(G){G.callback=null},t.unstable_continueExecution=function(){S||v||(S=!0,Vt(F))},t.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<G?Math.floor(1e3/G):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(G){switch(m){case 1:case 2:case 3:var ne=3;break;default:ne=m}var ie=m;m=ne;try{return G()}finally{m=ie}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(G,ne){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ie=m;m=G;try{return ne()}finally{m=ie}},t.unstable_scheduleCallback=function(G,ne,ie){var ye=t.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?ye+ie:ye):ie=ye,G){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=ie+ce,G={id:h++,callback:ne,priorityLevel:G,startTime:ie,expirationTime:ce,sortIndex:-1},ie>ye?(G.sortIndex=ie,e(c,G),n(l)===null&&G===n(c)&&(P?(w(y),y=-1):P=!0,_t(b,ie-ye))):(G.sortIndex=ce,e(l,G),S||v||(S=!0,Vt(F))),G},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(G){var ne=m;return function(){var ie=m;m=ne;try{return G.apply(this,arguments)}finally{m=ie}}}})(UT);FT.exports=UT;var jk=FT.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bk=V,xn=jk;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jT=new Set,vu={};function po(t,e){Ia(t,e),Ia(t+"Capture",e)}function Ia(t,e){for(vu[t]=e,t=0;t<e.length;t++)jT.add(e[t])}var Xr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tm=Object.prototype.hasOwnProperty,zk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hw={},dw={};function $k(t){return tm.call(dw,t)?!0:tm.call(hw,t)?!1:zk.test(t)?dw[t]=!0:(hw[t]=!0,!1)}function qk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Gk(t,e,n,r){if(e===null||typeof e>"u"||qk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var qg=/[\-:]([a-z])/g;function Gg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qg,Gg);Ot[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qg,Gg);Ot[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qg,Gg);Ot[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wg(t,e,n,r){var i=Ot.hasOwnProperty(e)?Ot[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Gk(e,n,i,r)&&(n=null),r||i===null?$k(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var oi=Bk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qc=Symbol.for("react.element"),Qo=Symbol.for("react.portal"),Yo=Symbol.for("react.fragment"),Hg=Symbol.for("react.strict_mode"),nm=Symbol.for("react.profiler"),BT=Symbol.for("react.provider"),zT=Symbol.for("react.context"),Kg=Symbol.for("react.forward_ref"),rm=Symbol.for("react.suspense"),im=Symbol.for("react.suspense_list"),Qg=Symbol.for("react.memo"),Ri=Symbol.for("react.lazy"),$T=Symbol.for("react.offscreen"),fw=Symbol.iterator;function Rl(t){return t===null||typeof t!="object"?null:(t=fw&&t[fw]||t["@@iterator"],typeof t=="function"?t:null)}var qe=Object.assign,sp;function zl(t){if(sp===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sp=e&&e[1]||""}return`
`+sp+t}var op=!1;function ap(t,e){if(!t||op)return"";op=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{op=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zl(t):""}function Wk(t){switch(t.tag){case 5:return zl(t.type);case 16:return zl("Lazy");case 13:return zl("Suspense");case 19:return zl("SuspenseList");case 0:case 2:case 15:return t=ap(t.type,!1),t;case 11:return t=ap(t.type.render,!1),t;case 1:return t=ap(t.type,!0),t;default:return""}}function sm(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yo:return"Fragment";case Qo:return"Portal";case nm:return"Profiler";case Hg:return"StrictMode";case rm:return"Suspense";case im:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zT:return(t.displayName||"Context")+".Consumer";case BT:return(t._context.displayName||"Context")+".Provider";case Kg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qg:return e=t.displayName||null,e!==null?e:sm(t.type)||"Memo";case Ri:e=t._payload,t=t._init;try{return sm(t(e))}catch{}}return null}function Hk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sm(e);case 8:return e===Hg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Kk(t){var e=qT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Gc(t){t._valueTracker||(t._valueTracker=Kk(t))}function GT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=qT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function qh(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function om(t,e){var n=e.checked;return qe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function pw(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Hi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function WT(t,e){e=e.checked,e!=null&&Wg(t,"checked",e,!1)}function am(t,e){WT(t,e);var n=Hi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lm(t,e.type,n):e.hasOwnProperty("defaultValue")&&lm(t,e.type,Hi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function mw(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lm(t,e,n){(e!=="number"||qh(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $l=Array.isArray;function ua(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Hi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function um(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return qe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if($l(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Hi(n)}}function HT(t,e){var n=Hi(e.value),r=Hi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function _w(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function KT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?KT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wc,QT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wc=Wc||document.createElement("div"),Wc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wu(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qk=["Webkit","ms","Moz","O"];Object.keys(Zl).forEach(function(t){Qk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zl[e]=Zl[t]})});function YT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zl.hasOwnProperty(t)&&Zl[t]?(""+e).trim():e+"px"}function XT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=YT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Yk=qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hm(t,e){if(e){if(Yk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function dm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fm=null;function Yg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pm=null,ca=null,ha=null;function yw(t){if(t=oc(t)){if(typeof pm!="function")throw Error($(280));var e=t.stateNode;e&&(e=qd(e),pm(t.stateNode,t.type,e))}}function JT(t){ca?ha?ha.push(t):ha=[t]:ca=t}function ZT(){if(ca){var t=ca,e=ha;if(ha=ca=null,yw(t),e)for(t=0;t<e.length;t++)yw(e[t])}}function e0(t,e){return t(e)}function t0(){}var lp=!1;function n0(t,e,n){if(lp)return t(e,n);lp=!0;try{return e0(t,e,n)}finally{lp=!1,(ca!==null||ha!==null)&&(t0(),ZT())}}function Eu(t,e){var n=t.stateNode;if(n===null)return null;var r=qd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var mm=!1;if(Xr)try{var Al={};Object.defineProperty(Al,"passive",{get:function(){mm=!0}}),window.addEventListener("test",Al,Al),window.removeEventListener("test",Al,Al)}catch{mm=!1}function Xk(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var eu=!1,Gh=null,Wh=!1,gm=null,Jk={onError:function(t){eu=!0,Gh=t}};function Zk(t,e,n,r,i,s,o,a,l){eu=!1,Gh=null,Xk.apply(Jk,arguments)}function ex(t,e,n,r,i,s,o,a,l){if(Zk.apply(this,arguments),eu){if(eu){var c=Gh;eu=!1,Gh=null}else throw Error($(198));Wh||(Wh=!0,gm=c)}}function mo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function r0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vw(t){if(mo(t)!==t)throw Error($(188))}function tx(t){var e=t.alternate;if(!e){if(e=mo(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return vw(i),t;if(s===r)return vw(i),e;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function i0(t){return t=tx(t),t!==null?s0(t):null}function s0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=s0(t);if(e!==null)return e;t=t.sibling}return null}var o0=xn.unstable_scheduleCallback,ww=xn.unstable_cancelCallback,nx=xn.unstable_shouldYield,rx=xn.unstable_requestPaint,nt=xn.unstable_now,ix=xn.unstable_getCurrentPriorityLevel,Xg=xn.unstable_ImmediatePriority,a0=xn.unstable_UserBlockingPriority,Hh=xn.unstable_NormalPriority,sx=xn.unstable_LowPriority,l0=xn.unstable_IdlePriority,jd=null,Ir=null;function ox(t){if(Ir&&typeof Ir.onCommitFiberRoot=="function")try{Ir.onCommitFiberRoot(jd,t,void 0,(t.current.flags&128)===128)}catch{}}var sr=Math.clz32?Math.clz32:ux,ax=Math.log,lx=Math.LN2;function ux(t){return t>>>=0,t===0?32:31-(ax(t)/lx|0)|0}var Hc=64,Kc=4194304;function ql(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kh(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ql(a):(s&=o,s!==0&&(r=ql(s)))}else o=n&~i,o!==0?r=ql(o):s!==0&&(r=ql(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-sr(e),i=1<<n,r|=t[n],e&=~i;return r}function cx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hx(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-sr(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=cx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function _m(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function u0(){var t=Hc;return Hc<<=1,!(Hc&4194240)&&(Hc=64),t}function up(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ic(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-sr(e),t[e]=n}function dx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-sr(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Jg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-sr(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Se=0;function c0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var h0,Zg,d0,f0,p0,ym=!1,Qc=[],Mi=null,Fi=null,Ui=null,Iu=new Map,Tu=new Map,Pi=[],fx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ew(t,e){switch(t){case"focusin":case"focusout":Mi=null;break;case"dragenter":case"dragleave":Fi=null;break;case"mouseover":case"mouseout":Ui=null;break;case"pointerover":case"pointerout":Iu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tu.delete(e.pointerId)}}function Cl(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=oc(e),e!==null&&Zg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function px(t,e,n,r,i){switch(e){case"focusin":return Mi=Cl(Mi,t,e,n,r,i),!0;case"dragenter":return Fi=Cl(Fi,t,e,n,r,i),!0;case"mouseover":return Ui=Cl(Ui,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Iu.set(s,Cl(Iu.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Tu.set(s,Cl(Tu.get(s)||null,t,e,n,r,i)),!0}return!1}function m0(t){var e=Ls(t.target);if(e!==null){var n=mo(e);if(n!==null){if(e=n.tag,e===13){if(e=r0(n),e!==null){t.blockedOn=e,p0(t.priority,function(){d0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Eh(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);fm=r,n.target.dispatchEvent(r),fm=null}else return e=oc(n),e!==null&&Zg(e),t.blockedOn=n,!1;e.shift()}return!0}function Iw(t,e,n){Eh(t)&&n.delete(e)}function mx(){ym=!1,Mi!==null&&Eh(Mi)&&(Mi=null),Fi!==null&&Eh(Fi)&&(Fi=null),Ui!==null&&Eh(Ui)&&(Ui=null),Iu.forEach(Iw),Tu.forEach(Iw)}function Pl(t,e){t.blockedOn===e&&(t.blockedOn=null,ym||(ym=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,mx)))}function Su(t){function e(i){return Pl(i,t)}if(0<Qc.length){Pl(Qc[0],t);for(var n=1;n<Qc.length;n++){var r=Qc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Mi!==null&&Pl(Mi,t),Fi!==null&&Pl(Fi,t),Ui!==null&&Pl(Ui,t),Iu.forEach(e),Tu.forEach(e),n=0;n<Pi.length;n++)r=Pi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Pi.length&&(n=Pi[0],n.blockedOn===null);)m0(n),n.blockedOn===null&&Pi.shift()}var da=oi.ReactCurrentBatchConfig,Qh=!0;function gx(t,e,n,r){var i=Se,s=da.transition;da.transition=null;try{Se=1,e_(t,e,n,r)}finally{Se=i,da.transition=s}}function _x(t,e,n,r){var i=Se,s=da.transition;da.transition=null;try{Se=4,e_(t,e,n,r)}finally{Se=i,da.transition=s}}function e_(t,e,n,r){if(Qh){var i=vm(t,e,n,r);if(i===null)vp(t,e,r,Yh,n),Ew(t,r);else if(px(i,t,e,n,r))r.stopPropagation();else if(Ew(t,r),e&4&&-1<fx.indexOf(t)){for(;i!==null;){var s=oc(i);if(s!==null&&h0(s),s=vm(t,e,n,r),s===null&&vp(t,e,r,Yh,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else vp(t,e,r,null,n)}}var Yh=null;function vm(t,e,n,r){if(Yh=null,t=Yg(r),t=Ls(t),t!==null)if(e=mo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=r0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yh=t,null}function g0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ix()){case Xg:return 1;case a0:return 4;case Hh:case sx:return 16;case l0:return 536870912;default:return 16}default:return 16}}var Di=null,t_=null,Ih=null;function _0(){if(Ih)return Ih;var t,e=t_,n=e.length,r,i="value"in Di?Di.value:Di.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ih=i.slice(t,1<r?1-r:void 0)}function Th(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Yc(){return!0}function Tw(){return!1}function Dn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Yc:Tw,this.isPropagationStopped=Tw,this}return qe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yc)},persist:function(){},isPersistent:Yc}),e}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},n_=Dn(Ya),sc=qe({},Ya,{view:0,detail:0}),yx=Dn(sc),cp,hp,kl,Bd=qe({},sc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:r_,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==kl&&(kl&&t.type==="mousemove"?(cp=t.screenX-kl.screenX,hp=t.screenY-kl.screenY):hp=cp=0,kl=t),cp)},movementY:function(t){return"movementY"in t?t.movementY:hp}}),Sw=Dn(Bd),vx=qe({},Bd,{dataTransfer:0}),wx=Dn(vx),Ex=qe({},sc,{relatedTarget:0}),dp=Dn(Ex),Ix=qe({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),Tx=Dn(Ix),Sx=qe({},Ya,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Rx=Dn(Sx),Ax=qe({},Ya,{data:0}),Rw=Dn(Ax),Cx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Px={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kx[t])?!!e[t]:!1}function r_(){return xx}var bx=qe({},sc,{key:function(t){if(t.key){var e=Cx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Th(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Px[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:r_,charCode:function(t){return t.type==="keypress"?Th(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Th(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Nx=Dn(bx),Dx=qe({},Bd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Aw=Dn(Dx),Ox=qe({},sc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:r_}),Vx=Dn(Ox),Lx=qe({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mx=Dn(Lx),Fx=qe({},Bd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ux=Dn(Fx),jx=[9,13,27,32],i_=Xr&&"CompositionEvent"in window,tu=null;Xr&&"documentMode"in document&&(tu=document.documentMode);var Bx=Xr&&"TextEvent"in window&&!tu,y0=Xr&&(!i_||tu&&8<tu&&11>=tu),Cw=" ",Pw=!1;function v0(t,e){switch(t){case"keyup":return jx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function w0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xo=!1;function zx(t,e){switch(t){case"compositionend":return w0(e);case"keypress":return e.which!==32?null:(Pw=!0,Cw);case"textInput":return t=e.data,t===Cw&&Pw?null:t;default:return null}}function $x(t,e){if(Xo)return t==="compositionend"||!i_&&v0(t,e)?(t=_0(),Ih=t_=Di=null,Xo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return y0&&e.locale!=="ko"?null:e.data;default:return null}}var qx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qx[t.type]:e==="textarea"}function E0(t,e,n,r){JT(r),e=Xh(e,"onChange"),0<e.length&&(n=new n_("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var nu=null,Ru=null;function Gx(t){N0(t,0)}function zd(t){var e=ea(t);if(GT(e))return t}function Wx(t,e){if(t==="change")return e}var I0=!1;if(Xr){var fp;if(Xr){var pp="oninput"in document;if(!pp){var xw=document.createElement("div");xw.setAttribute("oninput","return;"),pp=typeof xw.oninput=="function"}fp=pp}else fp=!1;I0=fp&&(!document.documentMode||9<document.documentMode)}function bw(){nu&&(nu.detachEvent("onpropertychange",T0),Ru=nu=null)}function T0(t){if(t.propertyName==="value"&&zd(Ru)){var e=[];E0(e,Ru,t,Yg(t)),n0(Gx,e)}}function Hx(t,e,n){t==="focusin"?(bw(),nu=e,Ru=n,nu.attachEvent("onpropertychange",T0)):t==="focusout"&&bw()}function Kx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zd(Ru)}function Qx(t,e){if(t==="click")return zd(e)}function Yx(t,e){if(t==="input"||t==="change")return zd(e)}function Xx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ar=typeof Object.is=="function"?Object.is:Xx;function Au(t,e){if(ar(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!tm.call(e,i)||!ar(t[i],e[i]))return!1}return!0}function Nw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dw(t,e){var n=Nw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nw(n)}}function S0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?S0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function R0(){for(var t=window,e=qh();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qh(t.document)}return e}function s_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Jx(t){var e=R0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&S0(n.ownerDocument.documentElement,n)){if(r!==null&&s_(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Dw(n,s);var o=Dw(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Zx=Xr&&"documentMode"in document&&11>=document.documentMode,Jo=null,wm=null,ru=null,Em=!1;function Ow(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Em||Jo==null||Jo!==qh(r)||(r=Jo,"selectionStart"in r&&s_(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ru&&Au(ru,r)||(ru=r,r=Xh(wm,"onSelect"),0<r.length&&(e=new n_("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Jo)))}function Xc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zo={animationend:Xc("Animation","AnimationEnd"),animationiteration:Xc("Animation","AnimationIteration"),animationstart:Xc("Animation","AnimationStart"),transitionend:Xc("Transition","TransitionEnd")},mp={},A0={};Xr&&(A0=document.createElement("div").style,"AnimationEvent"in window||(delete Zo.animationend.animation,delete Zo.animationiteration.animation,delete Zo.animationstart.animation),"TransitionEvent"in window||delete Zo.transitionend.transition);function $d(t){if(mp[t])return mp[t];if(!Zo[t])return t;var e=Zo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in A0)return mp[t]=e[n];return t}var C0=$d("animationend"),P0=$d("animationiteration"),k0=$d("animationstart"),x0=$d("transitionend"),b0=new Map,Vw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function os(t,e){b0.set(t,e),po(e,[t])}for(var gp=0;gp<Vw.length;gp++){var _p=Vw[gp],eb=_p.toLowerCase(),tb=_p[0].toUpperCase()+_p.slice(1);os(eb,"on"+tb)}os(C0,"onAnimationEnd");os(P0,"onAnimationIteration");os(k0,"onAnimationStart");os("dblclick","onDoubleClick");os("focusin","onFocus");os("focusout","onBlur");os(x0,"onTransitionEnd");Ia("onMouseEnter",["mouseout","mouseover"]);Ia("onMouseLeave",["mouseout","mouseover"]);Ia("onPointerEnter",["pointerout","pointerover"]);Ia("onPointerLeave",["pointerout","pointerover"]);po("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));po("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));po("onBeforeInput",["compositionend","keypress","textInput","paste"]);po("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));po("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));po("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gl));function Lw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ex(r,e,void 0,t),t.currentTarget=null}function N0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Lw(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Lw(i,a,c),s=l}}}if(Wh)throw t=gm,Wh=!1,gm=null,t}function be(t,e){var n=e[Am];n===void 0&&(n=e[Am]=new Set);var r=t+"__bubble";n.has(r)||(D0(e,t,2,!1),n.add(r))}function yp(t,e,n){var r=0;e&&(r|=4),D0(n,t,r,e)}var Jc="_reactListening"+Math.random().toString(36).slice(2);function Cu(t){if(!t[Jc]){t[Jc]=!0,jT.forEach(function(n){n!=="selectionchange"&&(nb.has(n)||yp(n,!1,t),yp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Jc]||(e[Jc]=!0,yp("selectionchange",!1,e))}}function D0(t,e,n,r){switch(g0(e)){case 1:var i=gx;break;case 4:i=_x;break;default:i=e_}n=i.bind(null,e,n,t),i=void 0,!mm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function vp(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ls(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}n0(function(){var c=s,h=Yg(n),f=[];e:{var m=b0.get(t);if(m!==void 0){var v=n_,S=t;switch(t){case"keypress":if(Th(n)===0)break e;case"keydown":case"keyup":v=Nx;break;case"focusin":S="focus",v=dp;break;case"focusout":S="blur",v=dp;break;case"beforeblur":case"afterblur":v=dp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Sw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Vx;break;case C0:case P0:case k0:v=Tx;break;case x0:v=Mx;break;case"scroll":v=yx;break;case"wheel":v=Ux;break;case"copy":case"cut":case"paste":v=Rx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Aw}var P=(e&4)!==0,x=!P&&t==="scroll",w=P?m!==null?m+"Capture":null:m;P=[];for(var E=c,I;E!==null;){I=E;var b=I.stateNode;if(I.tag===5&&b!==null&&(I=b,w!==null&&(b=Eu(E,w),b!=null&&P.push(Pu(E,b,I)))),x)break;E=E.return}0<P.length&&(m=new v(m,S,null,n,h),f.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==fm&&(S=n.relatedTarget||n.fromElement)&&(Ls(S)||S[Jr]))break e;if((v||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,v?(S=n.relatedTarget||n.toElement,v=c,S=S?Ls(S):null,S!==null&&(x=mo(S),S!==x||S.tag!==5&&S.tag!==6)&&(S=null)):(v=null,S=c),v!==S)){if(P=Sw,b="onMouseLeave",w="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(P=Aw,b="onPointerLeave",w="onPointerEnter",E="pointer"),x=v==null?m:ea(v),I=S==null?m:ea(S),m=new P(b,E+"leave",v,n,h),m.target=x,m.relatedTarget=I,b=null,Ls(h)===c&&(P=new P(w,E+"enter",S,n,h),P.target=I,P.relatedTarget=x,b=P),x=b,v&&S)t:{for(P=v,w=S,E=0,I=P;I;I=Oo(I))E++;for(I=0,b=w;b;b=Oo(b))I++;for(;0<E-I;)P=Oo(P),E--;for(;0<I-E;)w=Oo(w),I--;for(;E--;){if(P===w||w!==null&&P===w.alternate)break t;P=Oo(P),w=Oo(w)}P=null}else P=null;v!==null&&Mw(f,m,v,P,!1),S!==null&&x!==null&&Mw(f,x,S,P,!0)}}e:{if(m=c?ea(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var F=Wx;else if(kw(m))if(I0)F=Yx;else{F=Kx;var U=Hx}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=Qx);if(F&&(F=F(t,c))){E0(f,F,n,h);break e}U&&U(t,m,c),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&lm(m,"number",m.value)}switch(U=c?ea(c):window,t){case"focusin":(kw(U)||U.contentEditable==="true")&&(Jo=U,wm=c,ru=null);break;case"focusout":ru=wm=Jo=null;break;case"mousedown":Em=!0;break;case"contextmenu":case"mouseup":case"dragend":Em=!1,Ow(f,n,h);break;case"selectionchange":if(Zx)break;case"keydown":case"keyup":Ow(f,n,h)}var T;if(i_)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Xo?v0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(y0&&n.locale!=="ko"&&(Xo||y!=="onCompositionStart"?y==="onCompositionEnd"&&Xo&&(T=_0()):(Di=h,t_="value"in Di?Di.value:Di.textContent,Xo=!0)),U=Xh(c,y),0<U.length&&(y=new Rw(y,t,null,n,h),f.push({event:y,listeners:U}),T?y.data=T:(T=w0(n),T!==null&&(y.data=T)))),(T=Bx?zx(t,n):$x(t,n))&&(c=Xh(c,"onBeforeInput"),0<c.length&&(h=new Rw("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=T))}N0(f,e)})}function Pu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xh(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Eu(t,n),s!=null&&r.unshift(Pu(t,s,i)),s=Eu(t,e),s!=null&&r.push(Pu(t,s,i))),t=t.return}return r}function Oo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Mw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Eu(n,s),l!=null&&o.unshift(Pu(n,l,a))):i||(l=Eu(n,s),l!=null&&o.push(Pu(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var rb=/\r\n?/g,ib=/\u0000|\uFFFD/g;function Fw(t){return(typeof t=="string"?t:""+t).replace(rb,`
`).replace(ib,"")}function Zc(t,e,n){if(e=Fw(e),Fw(t)!==e&&n)throw Error($(425))}function Jh(){}var Im=null,Tm=null;function Sm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rm=typeof setTimeout=="function"?setTimeout:void 0,sb=typeof clearTimeout=="function"?clearTimeout:void 0,Uw=typeof Promise=="function"?Promise:void 0,ob=typeof queueMicrotask=="function"?queueMicrotask:typeof Uw<"u"?function(t){return Uw.resolve(null).then(t).catch(ab)}:Rm;function ab(t){setTimeout(function(){throw t})}function wp(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Su(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Su(e)}function ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xa=Math.random().toString(36).slice(2),fr="__reactFiber$"+Xa,ku="__reactProps$"+Xa,Jr="__reactContainer$"+Xa,Am="__reactEvents$"+Xa,lb="__reactListeners$"+Xa,ub="__reactHandles$"+Xa;function Ls(t){var e=t[fr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Jr]||n[fr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jw(t);t!==null;){if(n=t[fr])return n;t=jw(t)}return e}t=n,n=t.parentNode}return null}function oc(t){return t=t[fr]||t[Jr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ea(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function qd(t){return t[ku]||null}var Cm=[],ta=-1;function as(t){return{current:t}}function De(t){0>ta||(t.current=Cm[ta],Cm[ta]=null,ta--)}function Pe(t,e){ta++,Cm[ta]=t.current,t.current=e}var Ki={},Gt=as(Ki),yn=as(!1),Qs=Ki;function Ta(t,e){var n=t.type.contextTypes;if(!n)return Ki;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function vn(t){return t=t.childContextTypes,t!=null}function Zh(){De(yn),De(Gt)}function Bw(t,e,n){if(Gt.current!==Ki)throw Error($(168));Pe(Gt,e),Pe(yn,n)}function O0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,Hk(t)||"Unknown",i));return qe({},n,r)}function ed(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ki,Qs=Gt.current,Pe(Gt,t),Pe(yn,yn.current),!0}function zw(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=O0(t,e,Qs),r.__reactInternalMemoizedMergedChildContext=t,De(yn),De(Gt),Pe(Gt,t)):De(yn),Pe(yn,n)}var jr=null,Gd=!1,Ep=!1;function V0(t){jr===null?jr=[t]:jr.push(t)}function cb(t){Gd=!0,V0(t)}function ls(){if(!Ep&&jr!==null){Ep=!0;var t=0,e=Se;try{var n=jr;for(Se=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}jr=null,Gd=!1}catch(i){throw jr!==null&&(jr=jr.slice(t+1)),o0(Xg,ls),i}finally{Se=e,Ep=!1}}return null}var na=[],ra=0,td=null,nd=0,Ln=[],Mn=0,Ys=null,Br=1,zr="";function Rs(t,e){na[ra++]=nd,na[ra++]=td,td=t,nd=e}function L0(t,e,n){Ln[Mn++]=Br,Ln[Mn++]=zr,Ln[Mn++]=Ys,Ys=t;var r=Br;t=zr;var i=32-sr(r)-1;r&=~(1<<i),n+=1;var s=32-sr(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Br=1<<32-sr(e)+i|n<<i|r,zr=s+t}else Br=1<<s|n<<i|r,zr=t}function o_(t){t.return!==null&&(Rs(t,1),L0(t,1,0))}function a_(t){for(;t===td;)td=na[--ra],na[ra]=null,nd=na[--ra],na[ra]=null;for(;t===Ys;)Ys=Ln[--Mn],Ln[Mn]=null,zr=Ln[--Mn],Ln[Mn]=null,Br=Ln[--Mn],Ln[Mn]=null}var Pn=null,An=null,Ve=!1,rr=null;function M0(t,e){var n=Un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $w(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,An=ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,An=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ys!==null?{id:Br,overflow:zr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,An=null,!0):!1;default:return!1}}function Pm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function km(t){if(Ve){var e=An;if(e){var n=e;if(!$w(t,e)){if(Pm(t))throw Error($(418));e=ji(n.nextSibling);var r=Pn;e&&$w(t,e)?M0(r,n):(t.flags=t.flags&-4097|2,Ve=!1,Pn=t)}}else{if(Pm(t))throw Error($(418));t.flags=t.flags&-4097|2,Ve=!1,Pn=t}}}function qw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function eh(t){if(t!==Pn)return!1;if(!Ve)return qw(t),Ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sm(t.type,t.memoizedProps)),e&&(e=An)){if(Pm(t))throw F0(),Error($(418));for(;e;)M0(t,e),e=ji(e.nextSibling)}if(qw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){An=ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}An=null}}else An=Pn?ji(t.stateNode.nextSibling):null;return!0}function F0(){for(var t=An;t;)t=ji(t.nextSibling)}function Sa(){An=Pn=null,Ve=!1}function l_(t){rr===null?rr=[t]:rr.push(t)}var hb=oi.ReactCurrentBatchConfig;function xl(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function th(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gw(t){var e=t._init;return e(t._payload)}function U0(t){function e(w,E){if(t){var I=w.deletions;I===null?(w.deletions=[E],w.flags|=16):I.push(E)}}function n(w,E){if(!t)return null;for(;E!==null;)e(w,E),E=E.sibling;return null}function r(w,E){for(w=new Map;E!==null;)E.key!==null?w.set(E.key,E):w.set(E.index,E),E=E.sibling;return w}function i(w,E){return w=qi(w,E),w.index=0,w.sibling=null,w}function s(w,E,I){return w.index=I,t?(I=w.alternate,I!==null?(I=I.index,I<E?(w.flags|=2,E):I):(w.flags|=2,E)):(w.flags|=1048576,E)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function a(w,E,I,b){return E===null||E.tag!==6?(E=Pp(I,w.mode,b),E.return=w,E):(E=i(E,I),E.return=w,E)}function l(w,E,I,b){var F=I.type;return F===Yo?h(w,E,I.props.children,b,I.key):E!==null&&(E.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ri&&Gw(F)===E.type)?(b=i(E,I.props),b.ref=xl(w,E,I),b.return=w,b):(b=xh(I.type,I.key,I.props,null,w.mode,b),b.ref=xl(w,E,I),b.return=w,b)}function c(w,E,I,b){return E===null||E.tag!==4||E.stateNode.containerInfo!==I.containerInfo||E.stateNode.implementation!==I.implementation?(E=kp(I,w.mode,b),E.return=w,E):(E=i(E,I.children||[]),E.return=w,E)}function h(w,E,I,b,F){return E===null||E.tag!==7?(E=$s(I,w.mode,b,F),E.return=w,E):(E=i(E,I),E.return=w,E)}function f(w,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Pp(""+E,w.mode,I),E.return=w,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case qc:return I=xh(E.type,E.key,E.props,null,w.mode,I),I.ref=xl(w,null,E),I.return=w,I;case Qo:return E=kp(E,w.mode,I),E.return=w,E;case Ri:var b=E._init;return f(w,b(E._payload),I)}if($l(E)||Rl(E))return E=$s(E,w.mode,I,null),E.return=w,E;th(w,E)}return null}function m(w,E,I,b){var F=E!==null?E.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return F!==null?null:a(w,E,""+I,b);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case qc:return I.key===F?l(w,E,I,b):null;case Qo:return I.key===F?c(w,E,I,b):null;case Ri:return F=I._init,m(w,E,F(I._payload),b)}if($l(I)||Rl(I))return F!==null?null:h(w,E,I,b,null);th(w,I)}return null}function v(w,E,I,b,F){if(typeof b=="string"&&b!==""||typeof b=="number")return w=w.get(I)||null,a(E,w,""+b,F);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case qc:return w=w.get(b.key===null?I:b.key)||null,l(E,w,b,F);case Qo:return w=w.get(b.key===null?I:b.key)||null,c(E,w,b,F);case Ri:var U=b._init;return v(w,E,I,U(b._payload),F)}if($l(b)||Rl(b))return w=w.get(I)||null,h(E,w,b,F,null);th(E,b)}return null}function S(w,E,I,b){for(var F=null,U=null,T=E,y=E=0,R=null;T!==null&&y<I.length;y++){T.index>y?(R=T,T=null):R=T.sibling;var A=m(w,T,I[y],b);if(A===null){T===null&&(T=R);break}t&&T&&A.alternate===null&&e(w,T),E=s(A,E,y),U===null?F=A:U.sibling=A,U=A,T=R}if(y===I.length)return n(w,T),Ve&&Rs(w,y),F;if(T===null){for(;y<I.length;y++)T=f(w,I[y],b),T!==null&&(E=s(T,E,y),U===null?F=T:U.sibling=T,U=T);return Ve&&Rs(w,y),F}for(T=r(w,T);y<I.length;y++)R=v(T,w,y,I[y],b),R!==null&&(t&&R.alternate!==null&&T.delete(R.key===null?y:R.key),E=s(R,E,y),U===null?F=R:U.sibling=R,U=R);return t&&T.forEach(function(k){return e(w,k)}),Ve&&Rs(w,y),F}function P(w,E,I,b){var F=Rl(I);if(typeof F!="function")throw Error($(150));if(I=F.call(I),I==null)throw Error($(151));for(var U=F=null,T=E,y=E=0,R=null,A=I.next();T!==null&&!A.done;y++,A=I.next()){T.index>y?(R=T,T=null):R=T.sibling;var k=m(w,T,A.value,b);if(k===null){T===null&&(T=R);break}t&&T&&k.alternate===null&&e(w,T),E=s(k,E,y),U===null?F=k:U.sibling=k,U=k,T=R}if(A.done)return n(w,T),Ve&&Rs(w,y),F;if(T===null){for(;!A.done;y++,A=I.next())A=f(w,A.value,b),A!==null&&(E=s(A,E,y),U===null?F=A:U.sibling=A,U=A);return Ve&&Rs(w,y),F}for(T=r(w,T);!A.done;y++,A=I.next())A=v(T,w,y,A.value,b),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?y:A.key),E=s(A,E,y),U===null?F=A:U.sibling=A,U=A);return t&&T.forEach(function(N){return e(w,N)}),Ve&&Rs(w,y),F}function x(w,E,I,b){if(typeof I=="object"&&I!==null&&I.type===Yo&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case qc:e:{for(var F=I.key,U=E;U!==null;){if(U.key===F){if(F=I.type,F===Yo){if(U.tag===7){n(w,U.sibling),E=i(U,I.props.children),E.return=w,w=E;break e}}else if(U.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ri&&Gw(F)===U.type){n(w,U.sibling),E=i(U,I.props),E.ref=xl(w,U,I),E.return=w,w=E;break e}n(w,U);break}else e(w,U);U=U.sibling}I.type===Yo?(E=$s(I.props.children,w.mode,b,I.key),E.return=w,w=E):(b=xh(I.type,I.key,I.props,null,w.mode,b),b.ref=xl(w,E,I),b.return=w,w=b)}return o(w);case Qo:e:{for(U=I.key;E!==null;){if(E.key===U)if(E.tag===4&&E.stateNode.containerInfo===I.containerInfo&&E.stateNode.implementation===I.implementation){n(w,E.sibling),E=i(E,I.children||[]),E.return=w,w=E;break e}else{n(w,E);break}else e(w,E);E=E.sibling}E=kp(I,w.mode,b),E.return=w,w=E}return o(w);case Ri:return U=I._init,x(w,E,U(I._payload),b)}if($l(I))return S(w,E,I,b);if(Rl(I))return P(w,E,I,b);th(w,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,E!==null&&E.tag===6?(n(w,E.sibling),E=i(E,I),E.return=w,w=E):(n(w,E),E=Pp(I,w.mode,b),E.return=w,w=E),o(w)):n(w,E)}return x}var Ra=U0(!0),j0=U0(!1),rd=as(null),id=null,ia=null,u_=null;function c_(){u_=ia=id=null}function h_(t){var e=rd.current;De(rd),t._currentValue=e}function xm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function fa(t,e){id=t,u_=ia=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pn=!0),t.firstContext=null)}function qn(t){var e=t._currentValue;if(u_!==t)if(t={context:t,memoizedValue:e,next:null},ia===null){if(id===null)throw Error($(308));ia=t,id.dependencies={lanes:0,firstContext:t}}else ia=ia.next=t;return e}var Ms=null;function d_(t){Ms===null?Ms=[t]:Ms.push(t)}function B0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,d_(e)):(n.next=i.next,i.next=n),e.interleaved=n,Zr(t,r)}function Zr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ai=!1;function f_(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function z0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Hr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Bi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ve&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Zr(t,n)}return i=r.interleaved,i===null?(e.next=e,d_(r)):(e.next=i.next,i.next=e),r.interleaved=e,Zr(t,n)}function Sh(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jg(t,n)}}function Ww(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function sd(t,e,n,r){var i=t.updateQueue;Ai=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,h=c=l=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=t,P=a;switch(m=e,v=n,P.tag){case 1:if(S=P.payload,typeof S=="function"){f=S.call(v,f,m);break e}f=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=P.payload,m=typeof S=="function"?S.call(v,f,m):S,m==null)break e;f=qe({},f,m);break e;case 2:Ai=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=v,l=f):h=h.next=v,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Js|=o,t.lanes=o,t.memoizedState=f}}function Hw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var ac={},Tr=as(ac),xu=as(ac),bu=as(ac);function Fs(t){if(t===ac)throw Error($(174));return t}function p_(t,e){switch(Pe(bu,e),Pe(xu,t),Pe(Tr,ac),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=cm(e,t)}De(Tr),Pe(Tr,e)}function Aa(){De(Tr),De(xu),De(bu)}function $0(t){Fs(bu.current);var e=Fs(Tr.current),n=cm(e,t.type);e!==n&&(Pe(xu,t),Pe(Tr,n))}function m_(t){xu.current===t&&(De(Tr),De(xu))}var Be=as(0);function od(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ip=[];function g_(){for(var t=0;t<Ip.length;t++)Ip[t]._workInProgressVersionPrimary=null;Ip.length=0}var Rh=oi.ReactCurrentDispatcher,Tp=oi.ReactCurrentBatchConfig,Xs=0,ze=null,ft=null,vt=null,ad=!1,iu=!1,Nu=0,db=0;function Ut(){throw Error($(321))}function __(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ar(t[n],e[n]))return!1;return!0}function y_(t,e,n,r,i,s){if(Xs=s,ze=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Rh.current=t===null||t.memoizedState===null?gb:_b,t=n(r,i),iu){s=0;do{if(iu=!1,Nu=0,25<=s)throw Error($(301));s+=1,vt=ft=null,e.updateQueue=null,Rh.current=yb,t=n(r,i)}while(iu)}if(Rh.current=ld,e=ft!==null&&ft.next!==null,Xs=0,vt=ft=ze=null,ad=!1,e)throw Error($(300));return t}function v_(){var t=Nu!==0;return Nu=0,t}function dr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?ze.memoizedState=vt=t:vt=vt.next=t,vt}function Gn(){if(ft===null){var t=ze.alternate;t=t!==null?t.memoizedState:null}else t=ft.next;var e=vt===null?ze.memoizedState:vt.next;if(e!==null)vt=e,ft=t;else{if(t===null)throw Error($(310));ft=t,t={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},vt===null?ze.memoizedState=vt=t:vt=vt.next=t}return vt}function Du(t,e){return typeof e=="function"?e(t):e}function Sp(t){var e=Gn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=ft,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Xs&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,ze.lanes|=h,Js|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,ar(r,e.memoizedState)||(pn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ze.lanes|=s,Js|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Rp(t){var e=Gn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ar(s,e.memoizedState)||(pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function q0(){}function G0(t,e){var n=ze,r=Gn(),i=e(),s=!ar(r.memoizedState,i);if(s&&(r.memoizedState=i,pn=!0),r=r.queue,w_(K0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||vt!==null&&vt.memoizedState.tag&1){if(n.flags|=2048,Ou(9,H0.bind(null,n,r,i,e),void 0,null),Et===null)throw Error($(349));Xs&30||W0(n,e,i)}return i}function W0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ze.updateQueue,e===null?(e={lastEffect:null,stores:null},ze.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function H0(t,e,n,r){e.value=n,e.getSnapshot=r,Q0(e)&&Y0(t)}function K0(t,e,n){return n(function(){Q0(e)&&Y0(t)})}function Q0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ar(t,n)}catch{return!0}}function Y0(t){var e=Zr(t,1);e!==null&&or(e,t,1,-1)}function Kw(t){var e=dr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Du,lastRenderedState:t},e.queue=t,t=t.dispatch=mb.bind(null,ze,t),[e.memoizedState,t]}function Ou(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ze.updateQueue,e===null?(e={lastEffect:null,stores:null},ze.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function X0(){return Gn().memoizedState}function Ah(t,e,n,r){var i=dr();ze.flags|=t,i.memoizedState=Ou(1|e,n,void 0,r===void 0?null:r)}function Wd(t,e,n,r){var i=Gn();r=r===void 0?null:r;var s=void 0;if(ft!==null){var o=ft.memoizedState;if(s=o.destroy,r!==null&&__(r,o.deps)){i.memoizedState=Ou(e,n,s,r);return}}ze.flags|=t,i.memoizedState=Ou(1|e,n,s,r)}function Qw(t,e){return Ah(8390656,8,t,e)}function w_(t,e){return Wd(2048,8,t,e)}function J0(t,e){return Wd(4,2,t,e)}function Z0(t,e){return Wd(4,4,t,e)}function eS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function tS(t,e,n){return n=n!=null?n.concat([t]):null,Wd(4,4,eS.bind(null,e,t),n)}function E_(){}function nS(t,e){var n=Gn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&__(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function rS(t,e){var n=Gn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&__(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function iS(t,e,n){return Xs&21?(ar(n,e)||(n=u0(),ze.lanes|=n,Js|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pn=!0),t.memoizedState=n)}function fb(t,e){var n=Se;Se=n!==0&&4>n?n:4,t(!0);var r=Tp.transition;Tp.transition={};try{t(!1),e()}finally{Se=n,Tp.transition=r}}function sS(){return Gn().memoizedState}function pb(t,e,n){var r=$i(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},oS(t))aS(e,n);else if(n=B0(t,e,n,r),n!==null){var i=en();or(n,t,r,i),lS(n,e,r)}}function mb(t,e,n){var r=$i(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(oS(t))aS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ar(a,o)){var l=e.interleaved;l===null?(i.next=i,d_(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=B0(t,e,i,r),n!==null&&(i=en(),or(n,t,r,i),lS(n,e,r))}}function oS(t){var e=t.alternate;return t===ze||e!==null&&e===ze}function aS(t,e){iu=ad=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function lS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jg(t,n)}}var ld={readContext:qn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},gb={readContext:qn,useCallback:function(t,e){return dr().memoizedState=[t,e===void 0?null:e],t},useContext:qn,useEffect:Qw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ah(4194308,4,eS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ah(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ah(4,2,t,e)},useMemo:function(t,e){var n=dr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=pb.bind(null,ze,t),[r.memoizedState,t]},useRef:function(t){var e=dr();return t={current:t},e.memoizedState=t},useState:Kw,useDebugValue:E_,useDeferredValue:function(t){return dr().memoizedState=t},useTransition:function(){var t=Kw(!1),e=t[0];return t=fb.bind(null,t[1]),dr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ze,i=dr();if(Ve){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),Et===null)throw Error($(349));Xs&30||W0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Qw(K0.bind(null,r,s,t),[t]),r.flags|=2048,Ou(9,H0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=dr(),e=Et.identifierPrefix;if(Ve){var n=zr,r=Br;n=(r&~(1<<32-sr(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Nu++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=db++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_b={readContext:qn,useCallback:nS,useContext:qn,useEffect:w_,useImperativeHandle:tS,useInsertionEffect:J0,useLayoutEffect:Z0,useMemo:rS,useReducer:Sp,useRef:X0,useState:function(){return Sp(Du)},useDebugValue:E_,useDeferredValue:function(t){var e=Gn();return iS(e,ft.memoizedState,t)},useTransition:function(){var t=Sp(Du)[0],e=Gn().memoizedState;return[t,e]},useMutableSource:q0,useSyncExternalStore:G0,useId:sS,unstable_isNewReconciler:!1},yb={readContext:qn,useCallback:nS,useContext:qn,useEffect:w_,useImperativeHandle:tS,useInsertionEffect:J0,useLayoutEffect:Z0,useMemo:rS,useReducer:Rp,useRef:X0,useState:function(){return Rp(Du)},useDebugValue:E_,useDeferredValue:function(t){var e=Gn();return ft===null?e.memoizedState=t:iS(e,ft.memoizedState,t)},useTransition:function(){var t=Rp(Du)[0],e=Gn().memoizedState;return[t,e]},useMutableSource:q0,useSyncExternalStore:G0,useId:sS,unstable_isNewReconciler:!1};function tr(t,e){if(t&&t.defaultProps){e=qe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function bm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:qe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hd={isMounted:function(t){return(t=t._reactInternals)?mo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=en(),i=$i(t),s=Hr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,i),e!==null&&(or(e,t,i,r),Sh(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=en(),i=$i(t),s=Hr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,i),e!==null&&(or(e,t,i,r),Sh(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=en(),r=$i(t),i=Hr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Bi(t,i,r),e!==null&&(or(e,t,r,n),Sh(e,t,r))}};function Yw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Au(n,r)||!Au(i,s):!0}function uS(t,e,n){var r=!1,i=Ki,s=e.contextType;return typeof s=="object"&&s!==null?s=qn(s):(i=vn(e)?Qs:Gt.current,r=e.contextTypes,s=(r=r!=null)?Ta(t,i):Ki),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Xw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Hd.enqueueReplaceState(e,e.state,null)}function Nm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},f_(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=qn(s):(s=vn(e)?Qs:Gt.current,i.context=Ta(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bm(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Hd.enqueueReplaceState(i,i.state,null),sd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ca(t,e){try{var n="",r=e;do n+=Wk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ap(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Dm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vb=typeof WeakMap=="function"?WeakMap:Map;function cS(t,e,n){n=Hr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){cd||(cd=!0,$m=r),Dm(t,e)},n}function hS(t,e,n){n=Hr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Dm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Dm(t,e),typeof r!="function"&&(zi===null?zi=new Set([this]):zi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jw(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new vb;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Db.bind(null,t,e,n),e.then(t,t))}function Zw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function eE(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Hr(-1,1),e.tag=2,Bi(n,e,1))),n.lanes|=1),t)}var wb=oi.ReactCurrentOwner,pn=!1;function Yt(t,e,n,r){e.child=t===null?j0(e,null,n,r):Ra(e,t.child,n,r)}function tE(t,e,n,r,i){n=n.render;var s=e.ref;return fa(e,i),r=y_(t,e,n,r,s,i),n=v_(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ei(t,e,i)):(Ve&&n&&o_(e),e.flags|=1,Yt(t,e,r,i),e.child)}function nE(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!k_(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,dS(t,e,s,r,i)):(t=xh(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Au,n(o,r)&&t.ref===e.ref)return ei(t,e,i)}return e.flags|=1,t=qi(s,r),t.ref=e.ref,t.return=e,e.child=t}function dS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Au(s,r)&&t.ref===e.ref)if(pn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(pn=!0);else return e.lanes=t.lanes,ei(t,e,i)}return Om(t,e,n,r,i)}function fS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(oa,Tn),Tn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Pe(oa,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Pe(oa,Tn),Tn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Pe(oa,Tn),Tn|=r;return Yt(t,e,i,n),e.child}function pS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Om(t,e,n,r,i){var s=vn(n)?Qs:Gt.current;return s=Ta(e,s),fa(e,i),n=y_(t,e,n,r,s,i),r=v_(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ei(t,e,i)):(Ve&&r&&o_(e),e.flags|=1,Yt(t,e,n,i),e.child)}function rE(t,e,n,r,i){if(vn(n)){var s=!0;ed(e)}else s=!1;if(fa(e,i),e.stateNode===null)Ch(t,e),uS(e,n,r),Nm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=qn(c):(c=vn(n)?Qs:Gt.current,c=Ta(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Xw(e,o,r,c),Ai=!1;var m=e.memoizedState;o.state=m,sd(e,r,o,i),l=e.memoizedState,a!==r||m!==l||yn.current||Ai?(typeof h=="function"&&(bm(e,n,h,r),l=e.memoizedState),(a=Ai||Yw(e,n,a,r,m,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,z0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:tr(e.type,a),o.props=c,f=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=qn(l):(l=vn(n)?Qs:Gt.current,l=Ta(e,l));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&Xw(e,o,r,l),Ai=!1,m=e.memoizedState,o.state=m,sd(e,r,o,i);var S=e.memoizedState;a!==f||m!==S||yn.current||Ai?(typeof v=="function"&&(bm(e,n,v,r),S=e.memoizedState),(c=Ai||Yw(e,n,c,r,m,S,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Vm(t,e,n,r,s,i)}function Vm(t,e,n,r,i,s){pS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&zw(e,n,!1),ei(t,e,s);r=e.stateNode,wb.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ra(e,t.child,null,s),e.child=Ra(e,null,a,s)):Yt(t,e,a,s),e.memoizedState=r.state,i&&zw(e,n,!0),e.child}function mS(t){var e=t.stateNode;e.pendingContext?Bw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bw(t,e.context,!1),p_(t,e.containerInfo)}function iE(t,e,n,r,i){return Sa(),l_(i),e.flags|=256,Yt(t,e,n,r),e.child}var Lm={dehydrated:null,treeContext:null,retryLane:0};function Mm(t){return{baseLanes:t,cachePool:null,transitions:null}}function gS(t,e,n){var r=e.pendingProps,i=Be.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Pe(Be,i&1),t===null)return km(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Yd(o,r,0,null),t=$s(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mm(n),e.memoizedState=Lm,t):I_(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Eb(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=qi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=qi(a,s):(s=$s(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Mm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Lm,r}return s=t.child,t=s.sibling,r=qi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function I_(t,e){return e=Yd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function nh(t,e,n,r){return r!==null&&l_(r),Ra(e,t.child,null,n),t=I_(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Eb(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ap(Error($(422))),nh(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Yd({mode:"visible",children:r.children},i,0,null),s=$s(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ra(e,t.child,null,o),e.child.memoizedState=Mm(o),e.memoizedState=Lm,s);if(!(e.mode&1))return nh(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error($(419)),r=Ap(s,r,void 0),nh(t,e,o,r)}if(a=(o&t.childLanes)!==0,pn||a){if(r=Et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Zr(t,i),or(r,t,i,-1))}return P_(),r=Ap(Error($(421))),nh(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Ob.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,An=ji(i.nextSibling),Pn=e,Ve=!0,rr=null,t!==null&&(Ln[Mn++]=Br,Ln[Mn++]=zr,Ln[Mn++]=Ys,Br=t.id,zr=t.overflow,Ys=e),e=I_(e,r.children),e.flags|=4096,e)}function sE(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),xm(t.return,e,n)}function Cp(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function _S(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Yt(t,e,r.children,n),r=Be.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sE(t,n,e);else if(t.tag===19)sE(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Pe(Be,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&od(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Cp(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&od(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Cp(e,!0,n,null,s);break;case"together":Cp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ch(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ei(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Js|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=qi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ib(t,e,n){switch(e.tag){case 3:mS(e),Sa();break;case 5:$0(e);break;case 1:vn(e.type)&&ed(e);break;case 4:p_(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Pe(rd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Pe(Be,Be.current&1),e.flags|=128,null):n&e.child.childLanes?gS(t,e,n):(Pe(Be,Be.current&1),t=ei(t,e,n),t!==null?t.sibling:null);Pe(Be,Be.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return _S(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Pe(Be,Be.current),r)break;return null;case 22:case 23:return e.lanes=0,fS(t,e,n)}return ei(t,e,n)}var yS,Fm,vS,wS;yS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fm=function(){};vS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Fs(Tr.current);var s=null;switch(n){case"input":i=om(t,i),r=om(t,r),s=[];break;case"select":i=qe({},i,{value:void 0}),r=qe({},r,{value:void 0}),s=[];break;case"textarea":i=um(t,i),r=um(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Jh)}hm(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(vu.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(vu.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&be("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};wS=function(t,e,n,r){n!==r&&(e.flags|=4)};function bl(t,e){if(!Ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Tb(t,e,n){var r=e.pendingProps;switch(a_(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return vn(e.type)&&Zh(),jt(e),null;case 3:return r=e.stateNode,Aa(),De(yn),De(Gt),g_(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(eh(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rr!==null&&(Wm(rr),rr=null))),Fm(t,e),jt(e),null;case 5:m_(e);var i=Fs(bu.current);if(n=e.type,t!==null&&e.stateNode!=null)vS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return jt(e),null}if(t=Fs(Tr.current),eh(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[fr]=e,r[ku]=s,t=(e.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(i=0;i<Gl.length;i++)be(Gl[i],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":pw(r,s),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},be("invalid",r);break;case"textarea":gw(r,s),be("invalid",r)}hm(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Zc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Zc(r.textContent,a,t),i=["children",""+a]):vu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&be("scroll",r)}switch(n){case"input":Gc(r),mw(r,s,!0);break;case"textarea":Gc(r),_w(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Jh)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=KT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[fr]=e,t[ku]=r,yS(t,e,!1,!1),e.stateNode=t;e:{switch(o=dm(n,r),n){case"dialog":be("cancel",t),be("close",t),i=r;break;case"iframe":case"object":case"embed":be("load",t),i=r;break;case"video":case"audio":for(i=0;i<Gl.length;i++)be(Gl[i],t);i=r;break;case"source":be("error",t),i=r;break;case"img":case"image":case"link":be("error",t),be("load",t),i=r;break;case"details":be("toggle",t),i=r;break;case"input":pw(t,r),i=om(t,r),be("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=qe({},r,{value:void 0}),be("invalid",t);break;case"textarea":gw(t,r),i=um(t,r),be("invalid",t);break;default:i=r}hm(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?XT(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&QT(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&wu(t,l):typeof l=="number"&&wu(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(vu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&be("scroll",t):l!=null&&Wg(t,s,l,o))}switch(n){case"input":Gc(t),mw(t,r,!1);break;case"textarea":Gc(t),_w(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Hi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ua(t,!!r.multiple,s,!1):r.defaultValue!=null&&ua(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Jh)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)wS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=Fs(bu.current),Fs(Tr.current),eh(e)){if(r=e.stateNode,n=e.memoizedProps,r[fr]=e,(s=r.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:Zc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Zc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fr]=e,e.stateNode=r}return jt(e),null;case 13:if(De(Be),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ve&&An!==null&&e.mode&1&&!(e.flags&128))F0(),Sa(),e.flags|=98560,s=!1;else if(s=eh(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[fr]=e}else Sa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else rr!==null&&(Wm(rr),rr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Be.current&1?pt===0&&(pt=3):P_())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return Aa(),Fm(t,e),t===null&&Cu(e.stateNode.containerInfo),jt(e),null;case 10:return h_(e.type._context),jt(e),null;case 17:return vn(e.type)&&Zh(),jt(e),null;case 19:if(De(Be),s=e.memoizedState,s===null)return jt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)bl(s,!1);else{if(pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=od(t),o!==null){for(e.flags|=128,bl(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Pe(Be,Be.current&1|2),e.child}t=t.sibling}s.tail!==null&&nt()>Pa&&(e.flags|=128,r=!0,bl(s,!1),e.lanes=4194304)}else{if(!r)if(t=od(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),bl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ve)return jt(e),null}else 2*nt()-s.renderingStartTime>Pa&&n!==1073741824&&(e.flags|=128,r=!0,bl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=nt(),e.sibling=null,n=Be.current,Pe(Be,r?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return C_(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Tn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function Sb(t,e){switch(a_(e),e.tag){case 1:return vn(e.type)&&Zh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Aa(),De(yn),De(Gt),g_(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return m_(e),null;case 13:if(De(Be),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));Sa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return De(Be),null;case 4:return Aa(),null;case 10:return h_(e.type._context),null;case 22:case 23:return C_(),null;case 24:return null;default:return null}}var rh=!1,zt=!1,Rb=typeof WeakSet=="function"?WeakSet:Set,X=null;function sa(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Qe(t,e,r)}else n.current=null}function Um(t,e,n){try{n()}catch(r){Qe(t,e,r)}}var oE=!1;function Ab(t,e){if(Im=Qh,t=R0(),s_(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,m=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++h===r&&(l=o),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tm={focusedElem:t,selectionRange:n},Qh=!1,X=e;X!==null;)if(e=X,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,X=t;else for(;X!==null;){e=X;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var P=S.memoizedProps,x=S.memoizedState,w=e.stateNode,E=w.getSnapshotBeforeUpdate(e.elementType===e.type?P:tr(e.type,P),x);w.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(b){Qe(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,X=t;break}X=e.return}return S=oE,oE=!1,S}function su(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Um(e,n,s)}i=i.next}while(i!==r)}}function Kd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function jm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ES(t){var e=t.alternate;e!==null&&(t.alternate=null,ES(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fr],delete e[ku],delete e[Am],delete e[lb],delete e[ub])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function IS(t){return t.tag===5||t.tag===3||t.tag===4}function aE(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||IS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Jh));else if(r!==4&&(t=t.child,t!==null))for(Bm(t,e,n),t=t.sibling;t!==null;)Bm(t,e,n),t=t.sibling}function zm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(zm(t,e,n),t=t.sibling;t!==null;)zm(t,e,n),t=t.sibling}var xt=null,nr=!1;function Ei(t,e,n){for(n=n.child;n!==null;)TS(t,e,n),n=n.sibling}function TS(t,e,n){if(Ir&&typeof Ir.onCommitFiberUnmount=="function")try{Ir.onCommitFiberUnmount(jd,n)}catch{}switch(n.tag){case 5:zt||sa(n,e);case 6:var r=xt,i=nr;xt=null,Ei(t,e,n),xt=r,nr=i,xt!==null&&(nr?(t=xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):xt.removeChild(n.stateNode));break;case 18:xt!==null&&(nr?(t=xt,n=n.stateNode,t.nodeType===8?wp(t.parentNode,n):t.nodeType===1&&wp(t,n),Su(t)):wp(xt,n.stateNode));break;case 4:r=xt,i=nr,xt=n.stateNode.containerInfo,nr=!0,Ei(t,e,n),xt=r,nr=i;break;case 0:case 11:case 14:case 15:if(!zt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Um(n,e,o),i=i.next}while(i!==r)}Ei(t,e,n);break;case 1:if(!zt&&(sa(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Qe(n,e,a)}Ei(t,e,n);break;case 21:Ei(t,e,n);break;case 22:n.mode&1?(zt=(r=zt)||n.memoizedState!==null,Ei(t,e,n),zt=r):Ei(t,e,n);break;default:Ei(t,e,n)}}function lE(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Rb),e.forEach(function(r){var i=Vb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function er(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:xt=a.stateNode,nr=!1;break e;case 3:xt=a.stateNode.containerInfo,nr=!0;break e;case 4:xt=a.stateNode.containerInfo,nr=!0;break e}a=a.return}if(xt===null)throw Error($(160));TS(s,o,i),xt=null,nr=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Qe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)SS(e,t),e=e.sibling}function SS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(er(e,t),hr(t),r&4){try{su(3,t,t.return),Kd(3,t)}catch(P){Qe(t,t.return,P)}try{su(5,t,t.return)}catch(P){Qe(t,t.return,P)}}break;case 1:er(e,t),hr(t),r&512&&n!==null&&sa(n,n.return);break;case 5:if(er(e,t),hr(t),r&512&&n!==null&&sa(n,n.return),t.flags&32){var i=t.stateNode;try{wu(i,"")}catch(P){Qe(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&WT(i,s),dm(a,o);var c=dm(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?XT(i,f):h==="dangerouslySetInnerHTML"?QT(i,f):h==="children"?wu(i,f):Wg(i,h,f,c)}switch(a){case"input":am(i,s);break;case"textarea":HT(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?ua(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?ua(i,!!s.multiple,s.defaultValue,!0):ua(i,!!s.multiple,s.multiple?[]:"",!1))}i[ku]=s}catch(P){Qe(t,t.return,P)}}break;case 6:if(er(e,t),hr(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Qe(t,t.return,P)}}break;case 3:if(er(e,t),hr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Su(e.containerInfo)}catch(P){Qe(t,t.return,P)}break;case 4:er(e,t),hr(t);break;case 13:er(e,t),hr(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(R_=nt())),r&4&&lE(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(c=zt)||h,er(e,t),zt=c):er(e,t),hr(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(X=t,h=t.child;h!==null;){for(f=X=h;X!==null;){switch(m=X,v=m.child,m.tag){case 0:case 11:case 14:case 15:su(4,m,m.return);break;case 1:sa(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(P){Qe(r,n,P)}}break;case 5:sa(m,m.return);break;case 22:if(m.memoizedState!==null){cE(f);continue}}v!==null?(v.return=m,X=v):cE(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=YT("display",o))}catch(P){Qe(t,t.return,P)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(P){Qe(t,t.return,P)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:er(e,t),hr(t),r&4&&lE(t);break;case 21:break;default:er(e,t),hr(t)}}function hr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(IS(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wu(i,""),r.flags&=-33);var s=aE(t);zm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=aE(t);Bm(t,a,o);break;default:throw Error($(161))}}catch(l){Qe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Cb(t,e,n){X=t,RS(t)}function RS(t,e,n){for(var r=(t.mode&1)!==0;X!==null;){var i=X,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||rh;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||zt;a=rh;var c=zt;if(rh=o,(zt=l)&&!c)for(X=i;X!==null;)o=X,l=o.child,o.tag===22&&o.memoizedState!==null?hE(i):l!==null?(l.return=o,X=l):hE(i);for(;s!==null;)X=s,RS(s),s=s.sibling;X=i,rh=a,zt=c}uE(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,X=s):uE(t)}}function uE(t){for(;X!==null;){var e=X;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||Kd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!zt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tr(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hw(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hw(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Su(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}zt||e.flags&512&&jm(e)}catch(m){Qe(e,e.return,m)}}if(e===t){X=null;break}if(n=e.sibling,n!==null){n.return=e.return,X=n;break}X=e.return}}function cE(t){for(;X!==null;){var e=X;if(e===t){X=null;break}var n=e.sibling;if(n!==null){n.return=e.return,X=n;break}X=e.return}}function hE(t){for(;X!==null;){var e=X;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Kd(4,e)}catch(l){Qe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Qe(e,i,l)}}var s=e.return;try{jm(e)}catch(l){Qe(e,s,l)}break;case 5:var o=e.return;try{jm(e)}catch(l){Qe(e,o,l)}}}catch(l){Qe(e,e.return,l)}if(e===t){X=null;break}var a=e.sibling;if(a!==null){a.return=e.return,X=a;break}X=e.return}}var Pb=Math.ceil,ud=oi.ReactCurrentDispatcher,T_=oi.ReactCurrentOwner,zn=oi.ReactCurrentBatchConfig,ve=0,Et=null,ut=null,Dt=0,Tn=0,oa=as(0),pt=0,Vu=null,Js=0,Qd=0,S_=0,ou=null,dn=null,R_=0,Pa=1/0,Ur=null,cd=!1,$m=null,zi=null,ih=!1,Oi=null,hd=0,au=0,qm=null,Ph=-1,kh=0;function en(){return ve&6?nt():Ph!==-1?Ph:Ph=nt()}function $i(t){return t.mode&1?ve&2&&Dt!==0?Dt&-Dt:hb.transition!==null?(kh===0&&(kh=u0()),kh):(t=Se,t!==0||(t=window.event,t=t===void 0?16:g0(t.type)),t):1}function or(t,e,n,r){if(50<au)throw au=0,qm=null,Error($(185));ic(t,n,r),(!(ve&2)||t!==Et)&&(t===Et&&(!(ve&2)&&(Qd|=n),pt===4&&ki(t,Dt)),wn(t,r),n===1&&ve===0&&!(e.mode&1)&&(Pa=nt()+500,Gd&&ls()))}function wn(t,e){var n=t.callbackNode;hx(t,e);var r=Kh(t,t===Et?Dt:0);if(r===0)n!==null&&ww(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ww(n),e===1)t.tag===0?cb(dE.bind(null,t)):V0(dE.bind(null,t)),ob(function(){!(ve&6)&&ls()}),n=null;else{switch(c0(r)){case 1:n=Xg;break;case 4:n=a0;break;case 16:n=Hh;break;case 536870912:n=l0;break;default:n=Hh}n=DS(n,AS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function AS(t,e){if(Ph=-1,kh=0,ve&6)throw Error($(327));var n=t.callbackNode;if(pa()&&t.callbackNode!==n)return null;var r=Kh(t,t===Et?Dt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=dd(t,r);else{e=r;var i=ve;ve|=2;var s=PS();(Et!==t||Dt!==e)&&(Ur=null,Pa=nt()+500,zs(t,e));do try{bb();break}catch(a){CS(t,a)}while(!0);c_(),ud.current=s,ve=i,ut!==null?e=0:(Et=null,Dt=0,e=pt)}if(e!==0){if(e===2&&(i=_m(t),i!==0&&(r=i,e=Gm(t,i))),e===1)throw n=Vu,zs(t,0),ki(t,r),wn(t,nt()),n;if(e===6)ki(t,r);else{if(i=t.current.alternate,!(r&30)&&!kb(i)&&(e=dd(t,r),e===2&&(s=_m(t),s!==0&&(r=s,e=Gm(t,s))),e===1))throw n=Vu,zs(t,0),ki(t,r),wn(t,nt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:As(t,dn,Ur);break;case 3:if(ki(t,r),(r&130023424)===r&&(e=R_+500-nt(),10<e)){if(Kh(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){en(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Rm(As.bind(null,t,dn,Ur),e);break}As(t,dn,Ur);break;case 4:if(ki(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-sr(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=nt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Pb(r/1960))-r,10<r){t.timeoutHandle=Rm(As.bind(null,t,dn,Ur),r);break}As(t,dn,Ur);break;case 5:As(t,dn,Ur);break;default:throw Error($(329))}}}return wn(t,nt()),t.callbackNode===n?AS.bind(null,t):null}function Gm(t,e){var n=ou;return t.current.memoizedState.isDehydrated&&(zs(t,e).flags|=256),t=dd(t,e),t!==2&&(e=dn,dn=n,e!==null&&Wm(e)),t}function Wm(t){dn===null?dn=t:dn.push.apply(dn,t)}function kb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ar(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ki(t,e){for(e&=~S_,e&=~Qd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-sr(e),r=1<<n;t[n]=-1,e&=~r}}function dE(t){if(ve&6)throw Error($(327));pa();var e=Kh(t,0);if(!(e&1))return wn(t,nt()),null;var n=dd(t,e);if(t.tag!==0&&n===2){var r=_m(t);r!==0&&(e=r,n=Gm(t,r))}if(n===1)throw n=Vu,zs(t,0),ki(t,e),wn(t,nt()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,As(t,dn,Ur),wn(t,nt()),null}function A_(t,e){var n=ve;ve|=1;try{return t(e)}finally{ve=n,ve===0&&(Pa=nt()+500,Gd&&ls())}}function Zs(t){Oi!==null&&Oi.tag===0&&!(ve&6)&&pa();var e=ve;ve|=1;var n=zn.transition,r=Se;try{if(zn.transition=null,Se=1,t)return t()}finally{Se=r,zn.transition=n,ve=e,!(ve&6)&&ls()}}function C_(){Tn=oa.current,De(oa)}function zs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sb(n)),ut!==null)for(n=ut.return;n!==null;){var r=n;switch(a_(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zh();break;case 3:Aa(),De(yn),De(Gt),g_();break;case 5:m_(r);break;case 4:Aa();break;case 13:De(Be);break;case 19:De(Be);break;case 10:h_(r.type._context);break;case 22:case 23:C_()}n=n.return}if(Et=t,ut=t=qi(t.current,null),Dt=Tn=e,pt=0,Vu=null,S_=Qd=Js=0,dn=ou=null,Ms!==null){for(e=0;e<Ms.length;e++)if(n=Ms[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ms=null}return t}function CS(t,e){do{var n=ut;try{if(c_(),Rh.current=ld,ad){for(var r=ze.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ad=!1}if(Xs=0,vt=ft=ze=null,iu=!1,Nu=0,T_.current=null,n===null||n.return===null){pt=1,Vu=e,ut=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Dt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=Zw(o);if(v!==null){v.flags&=-257,eE(v,o,a,s,e),v.mode&1&&Jw(s,c,e),e=v,l=c;var S=e.updateQueue;if(S===null){var P=new Set;P.add(l),e.updateQueue=P}else S.add(l);break e}else{if(!(e&1)){Jw(s,c,e),P_();break e}l=Error($(426))}}else if(Ve&&a.mode&1){var x=Zw(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),eE(x,o,a,s,e),l_(Ca(l,a));break e}}s=l=Ca(l,a),pt!==4&&(pt=2),ou===null?ou=[s]:ou.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=cS(s,l,e);Ww(s,w);break e;case 1:a=l;var E=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(zi===null||!zi.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=hS(s,a,e);Ww(s,b);break e}}s=s.return}while(s!==null)}xS(n)}catch(F){e=F,ut===n&&n!==null&&(ut=n=n.return);continue}break}while(!0)}function PS(){var t=ud.current;return ud.current=ld,t===null?ld:t}function P_(){(pt===0||pt===3||pt===2)&&(pt=4),Et===null||!(Js&268435455)&&!(Qd&268435455)||ki(Et,Dt)}function dd(t,e){var n=ve;ve|=2;var r=PS();(Et!==t||Dt!==e)&&(Ur=null,zs(t,e));do try{xb();break}catch(i){CS(t,i)}while(!0);if(c_(),ve=n,ud.current=r,ut!==null)throw Error($(261));return Et=null,Dt=0,pt}function xb(){for(;ut!==null;)kS(ut)}function bb(){for(;ut!==null&&!nx();)kS(ut)}function kS(t){var e=NS(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?xS(t):ut=e,T_.current=null}function xS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Sb(n,e),n!==null){n.flags&=32767,ut=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pt=6,ut=null;return}}else if(n=Tb(n,e,Tn),n!==null){ut=n;return}if(e=e.sibling,e!==null){ut=e;return}ut=e=t}while(e!==null);pt===0&&(pt=5)}function As(t,e,n){var r=Se,i=zn.transition;try{zn.transition=null,Se=1,Nb(t,e,n,r)}finally{zn.transition=i,Se=r}return null}function Nb(t,e,n,r){do pa();while(Oi!==null);if(ve&6)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(dx(t,s),t===Et&&(ut=Et=null,Dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ih||(ih=!0,DS(Hh,function(){return pa(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zn.transition,zn.transition=null;var o=Se;Se=1;var a=ve;ve|=4,T_.current=null,Ab(t,n),SS(n,t),Jx(Tm),Qh=!!Im,Tm=Im=null,t.current=n,Cb(n),rx(),ve=a,Se=o,zn.transition=s}else t.current=n;if(ih&&(ih=!1,Oi=t,hd=i),s=t.pendingLanes,s===0&&(zi=null),ox(n.stateNode),wn(t,nt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(cd)throw cd=!1,t=$m,$m=null,t;return hd&1&&t.tag!==0&&pa(),s=t.pendingLanes,s&1?t===qm?au++:(au=0,qm=t):au=0,ls(),null}function pa(){if(Oi!==null){var t=c0(hd),e=zn.transition,n=Se;try{if(zn.transition=null,Se=16>t?16:t,Oi===null)var r=!1;else{if(t=Oi,Oi=null,hd=0,ve&6)throw Error($(331));var i=ve;for(ve|=4,X=t.current;X!==null;){var s=X,o=s.child;if(X.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(X=c;X!==null;){var h=X;switch(h.tag){case 0:case 11:case 15:su(8,h,s)}var f=h.child;if(f!==null)f.return=h,X=f;else for(;X!==null;){h=X;var m=h.sibling,v=h.return;if(ES(h),h===c){X=null;break}if(m!==null){m.return=v,X=m;break}X=v}}}var S=s.alternate;if(S!==null){var P=S.child;if(P!==null){S.child=null;do{var x=P.sibling;P.sibling=null,P=x}while(P!==null)}}X=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,X=o;else e:for(;X!==null;){if(s=X,s.flags&2048)switch(s.tag){case 0:case 11:case 15:su(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,X=w;break e}X=s.return}}var E=t.current;for(X=E;X!==null;){o=X;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,X=I;else e:for(o=E;X!==null;){if(a=X,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Kd(9,a)}}catch(F){Qe(a,a.return,F)}if(a===o){X=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,X=b;break e}X=a.return}}if(ve=i,ls(),Ir&&typeof Ir.onPostCommitFiberRoot=="function")try{Ir.onPostCommitFiberRoot(jd,t)}catch{}r=!0}return r}finally{Se=n,zn.transition=e}}return!1}function fE(t,e,n){e=Ca(n,e),e=cS(t,e,1),t=Bi(t,e,1),e=en(),t!==null&&(ic(t,1,e),wn(t,e))}function Qe(t,e,n){if(t.tag===3)fE(t,t,n);else for(;e!==null;){if(e.tag===3){fE(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zi===null||!zi.has(r))){t=Ca(n,t),t=hS(e,t,1),e=Bi(e,t,1),t=en(),e!==null&&(ic(e,1,t),wn(e,t));break}}e=e.return}}function Db(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=en(),t.pingedLanes|=t.suspendedLanes&n,Et===t&&(Dt&n)===n&&(pt===4||pt===3&&(Dt&130023424)===Dt&&500>nt()-R_?zs(t,0):S_|=n),wn(t,e)}function bS(t,e){e===0&&(t.mode&1?(e=Kc,Kc<<=1,!(Kc&130023424)&&(Kc=4194304)):e=1);var n=en();t=Zr(t,e),t!==null&&(ic(t,e,n),wn(t,n))}function Ob(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),bS(t,n)}function Vb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),bS(t,n)}var NS;NS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yn.current)pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pn=!1,Ib(t,e,n);pn=!!(t.flags&131072)}else pn=!1,Ve&&e.flags&1048576&&L0(e,nd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ch(t,e),t=e.pendingProps;var i=Ta(e,Gt.current);fa(e,n),i=y_(null,e,r,t,i,n);var s=v_();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(r)?(s=!0,ed(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,f_(e),i.updater=Hd,e.stateNode=i,i._reactInternals=e,Nm(e,r,t,n),e=Vm(null,e,r,!0,s,n)):(e.tag=0,Ve&&s&&o_(e),Yt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ch(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Mb(r),t=tr(r,t),i){case 0:e=Om(null,e,r,t,n);break e;case 1:e=rE(null,e,r,t,n);break e;case 11:e=tE(null,e,r,t,n);break e;case 14:e=nE(null,e,r,tr(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tr(r,i),Om(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tr(r,i),rE(t,e,r,i,n);case 3:e:{if(mS(e),t===null)throw Error($(387));r=e.pendingProps,s=e.memoizedState,i=s.element,z0(t,e),sd(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ca(Error($(423)),e),e=iE(t,e,r,n,i);break e}else if(r!==i){i=Ca(Error($(424)),e),e=iE(t,e,r,n,i);break e}else for(An=ji(e.stateNode.containerInfo.firstChild),Pn=e,Ve=!0,rr=null,n=j0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sa(),r===i){e=ei(t,e,n);break e}Yt(t,e,r,n)}e=e.child}return e;case 5:return $0(e),t===null&&km(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Sm(r,i)?o=null:s!==null&&Sm(r,s)&&(e.flags|=32),pS(t,e),Yt(t,e,o,n),e.child;case 6:return t===null&&km(e),null;case 13:return gS(t,e,n);case 4:return p_(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ra(e,null,r,n):Yt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tr(r,i),tE(t,e,r,i,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Pe(rd,r._currentValue),r._currentValue=o,s!==null)if(ar(s.value,o)){if(s.children===i.children&&!yn.current){e=ei(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Hr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),xm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),xm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Yt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,fa(e,n),i=qn(i),r=r(i),e.flags|=1,Yt(t,e,r,n),e.child;case 14:return r=e.type,i=tr(r,e.pendingProps),i=tr(r.type,i),nE(t,e,r,i,n);case 15:return dS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tr(r,i),Ch(t,e),e.tag=1,vn(r)?(t=!0,ed(e)):t=!1,fa(e,n),uS(e,r,i),Nm(e,r,i,n),Vm(null,e,r,!0,t,n);case 19:return _S(t,e,n);case 22:return fS(t,e,n)}throw Error($(156,e.tag))};function DS(t,e){return o0(t,e)}function Lb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(t,e,n,r){return new Lb(t,e,n,r)}function k_(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Mb(t){if(typeof t=="function")return k_(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kg)return 11;if(t===Qg)return 14}return 2}function qi(t,e){var n=t.alternate;return n===null?(n=Un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xh(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")k_(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Yo:return $s(n.children,i,s,e);case Hg:o=8,i|=8;break;case nm:return t=Un(12,n,e,i|2),t.elementType=nm,t.lanes=s,t;case rm:return t=Un(13,n,e,i),t.elementType=rm,t.lanes=s,t;case im:return t=Un(19,n,e,i),t.elementType=im,t.lanes=s,t;case $T:return Yd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case BT:o=10;break e;case zT:o=9;break e;case Kg:o=11;break e;case Qg:o=14;break e;case Ri:o=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=Un(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function $s(t,e,n,r){return t=Un(7,t,r,e),t.lanes=n,t}function Yd(t,e,n,r){return t=Un(22,t,r,e),t.elementType=$T,t.lanes=n,t.stateNode={isHidden:!1},t}function Pp(t,e,n){return t=Un(6,t,null,e),t.lanes=n,t}function kp(t,e,n){return e=Un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Fb(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=up(0),this.expirationTimes=up(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=up(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function x_(t,e,n,r,i,s,o,a,l){return t=new Fb(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Un(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},f_(s),t}function Ub(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function OS(t){if(!t)return Ki;t=t._reactInternals;e:{if(mo(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(vn(n))return O0(t,n,e)}return e}function VS(t,e,n,r,i,s,o,a,l){return t=x_(n,r,!0,t,i,s,o,a,l),t.context=OS(null),n=t.current,r=en(),i=$i(n),s=Hr(r,i),s.callback=e??null,Bi(n,s,i),t.current.lanes=i,ic(t,i,r),wn(t,r),t}function Xd(t,e,n,r){var i=e.current,s=en(),o=$i(i);return n=OS(n),e.context===null?e.context=n:e.pendingContext=n,e=Hr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Bi(i,e,o),t!==null&&(or(t,i,o,s),Sh(t,i,o)),o}function fd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function pE(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function b_(t,e){pE(t,e),(t=t.alternate)&&pE(t,e)}function jb(){return null}var LS=typeof reportError=="function"?reportError:function(t){console.error(t)};function N_(t){this._internalRoot=t}Jd.prototype.render=N_.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));Xd(t,e,null,null)};Jd.prototype.unmount=N_.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zs(function(){Xd(null,t,null,null)}),e[Jr]=null}};function Jd(t){this._internalRoot=t}Jd.prototype.unstable_scheduleHydration=function(t){if(t){var e=f0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pi.length&&e!==0&&e<Pi[n].priority;n++);Pi.splice(n,0,t),n===0&&m0(t)}};function D_(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mE(){}function Bb(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=fd(o);s.call(c)}}var o=VS(e,r,t,0,null,!1,!1,"",mE);return t._reactRootContainer=o,t[Jr]=o.current,Cu(t.nodeType===8?t.parentNode:t),Zs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=fd(l);a.call(c)}}var l=x_(t,0,!1,null,null,!1,!1,"",mE);return t._reactRootContainer=l,t[Jr]=l.current,Cu(t.nodeType===8?t.parentNode:t),Zs(function(){Xd(e,l,n,r)}),l}function ef(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=fd(o);a.call(l)}}Xd(e,o,t,i)}else o=Bb(n,e,t,i,r);return fd(o)}h0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ql(e.pendingLanes);n!==0&&(Jg(e,n|1),wn(e,nt()),!(ve&6)&&(Pa=nt()+500,ls()))}break;case 13:Zs(function(){var r=Zr(t,1);if(r!==null){var i=en();or(r,t,1,i)}}),b_(t,1)}};Zg=function(t){if(t.tag===13){var e=Zr(t,134217728);if(e!==null){var n=en();or(e,t,134217728,n)}b_(t,134217728)}};d0=function(t){if(t.tag===13){var e=$i(t),n=Zr(t,e);if(n!==null){var r=en();or(n,t,e,r)}b_(t,e)}};f0=function(){return Se};p0=function(t,e){var n=Se;try{return Se=t,e()}finally{Se=n}};pm=function(t,e,n){switch(e){case"input":if(am(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=qd(r);if(!i)throw Error($(90));GT(r),am(r,i)}}}break;case"textarea":HT(t,n);break;case"select":e=n.value,e!=null&&ua(t,!!n.multiple,e,!1)}};e0=A_;t0=Zs;var zb={usingClientEntryPoint:!1,Events:[oc,ea,qd,JT,ZT,A_]},Nl={findFiberByHostInstance:Ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$b={bundleType:Nl.bundleType,version:Nl.version,rendererPackageName:Nl.rendererPackageName,rendererConfig:Nl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:oi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=i0(t),t===null?null:t.stateNode},findFiberByHostInstance:Nl.findFiberByHostInstance||jb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sh.isDisabled&&sh.supportsFiber)try{jd=sh.inject($b),Ir=sh}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zb;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!D_(e))throw Error($(200));return Ub(t,e,null,n)};Nn.createRoot=function(t,e){if(!D_(t))throw Error($(299));var n=!1,r="",i=LS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=x_(t,1,!1,null,null,n,!1,r,i),t[Jr]=e.current,Cu(t.nodeType===8?t.parentNode:t),new N_(e)};Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=i0(e),t=t===null?null:t.stateNode,t};Nn.flushSync=function(t){return Zs(t)};Nn.hydrate=function(t,e,n){if(!Zd(e))throw Error($(200));return ef(null,t,e,!0,n)};Nn.hydrateRoot=function(t,e,n){if(!D_(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=LS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=VS(e,null,t,1,n??null,i,!1,s,o),t[Jr]=e.current,Cu(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Jd(e)};Nn.render=function(t,e,n){if(!Zd(e))throw Error($(200));return ef(null,t,e,!1,n)};Nn.unmountComponentAtNode=function(t){if(!Zd(t))throw Error($(40));return t._reactRootContainer?(Zs(function(){ef(null,null,t,!1,function(){t._reactRootContainer=null,t[Jr]=null})}),!0):!1};Nn.unstable_batchedUpdates=A_;Nn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Zd(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return ef(t,e,n,!1,r)};Nn.version="18.3.1-next-f1338f8080-20240426";function MS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(MS)}catch(t){console.error(t)}}MS(),MT.exports=Nn;var FS=MT.exports;const aa=nc(FS);var gE=FS;em.createRoot=gE.createRoot,em.hydrateRoot=gE.hydrateRoot;var _E={};/**
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
 */const US=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},jS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,v=c&63;l||(v=64,o||(m=64)),r.push(n[h],n[f],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(US(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Gb;const m=s<<2|a>>4;if(r.push(m),c!==64){const v=a<<4&240|c>>2;if(r.push(v),f!==64){const S=c<<6&192|f;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Gb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wb=function(t){const e=US(t);return jS.encodeByteArray(e,!0)},pd=function(t){return Wb(t).replace(/\./g,"")},BS=function(t){try{return jS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function md(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Hb(n)||(t[n]=md(t[n],e[n]));return t}function Hb(t){return t!=="__proto__"}/**
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
 */function Kb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Qb=()=>Kb().__FIREBASE_DEFAULTS__,Yb=()=>{if(typeof process>"u"||typeof _E>"u")return;const t=_E.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Xb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&BS(t[1]);return e&&JSON.parse(e)},tf=()=>{try{return Qb()||Yb()||Xb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zS=t=>{var e,n;return(n=(e=tf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$S=t=>{const e=zS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},qS=()=>{var t;return(t=tf())===null||t===void 0?void 0:t.config},GS=t=>{var e;return(e=tf())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Jb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function WS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[pd(JSON.stringify(n)),pd(JSON.stringify(o)),""].join(".")}/**
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
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function O_(){var t;const e=(t=tf())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function HS(){return typeof window<"u"||KS()}function KS(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function QS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function V_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YS(){const t=Ue();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function XS(){return!O_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Lu(){try{return typeof indexedDB=="object"}catch{return!1}}function eN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const tN="FirebaseError";class qt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=tN,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,go.prototype.create)}}class go{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?nN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new qt(i,a,r)}}function nN(t,e){return t.replace(rN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const rN=/\{\$([^}]+)}/g;/**
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
 */function yE(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function iN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ka(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(vE(s)&&vE(o)){if(!ka(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function vE(t){return t!==null&&typeof t=="object"}/**
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
 */function Ja(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function la(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Wl(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function JS(t,e){const n=new sN(t,e);return n.subscribe.bind(n)}class sN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");oN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=xp),i.error===void 0&&(i.error=xp),i.complete===void 0&&(i.complete=xp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xp(){}/**
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
 */function J(t){return t&&t._delegate?t._delegate:t}class Wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Cs="[DEFAULT]";/**
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
 */class aN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Jb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uN(e))try{this.getOrInitializeService({instanceIdentifier:Cs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Cs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cs){return this.instances.has(e)}getOptions(e=Cs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cs){return this.component?this.component.multipleInstances?e:Cs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lN(t){return t===Cs?void 0:t}function uN(t){return t.instantiationMode==="EAGER"}/**
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
 */class ZS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new aN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const L_=[];var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const eR={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},cN=le.INFO,hN={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},dN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=hN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nf{constructor(e){this.name=e,this._logLevel=cN,this._logHandler=dN,this._userLogHandler=null,L_.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}function fN(t){L_.forEach(e=>{e.setLogLevel(t)})}function pN(t,e){for(const n of L_){let r=null;e&&e.level&&(r=eR[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:le[s].toLowerCase(),message:a,args:o,type:i.name})}}}const mN=(t,e)=>e.some(n=>t instanceof n);let wE,EE;function gN(){return wE||(wE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _N(){return EE||(EE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tR=new WeakMap,Hm=new WeakMap,nR=new WeakMap,bp=new WeakMap,M_=new WeakMap;function yN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Gi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tR.set(n,t)}).catch(()=>{}),M_.set(e,t),e}function vN(t){if(Hm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Hm.set(t,e)}let Km={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nR.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wN(t){Km=t(Km)}function EN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Np(this),e,...n);return nR.set(r,e.sort?e.sort():[e]),Gi(r)}:_N().includes(t)?function(...e){return t.apply(Np(this),e),Gi(tR.get(this))}:function(...e){return Gi(t.apply(Np(this),e))}}function IN(t){return typeof t=="function"?EN(t):(t instanceof IDBTransaction&&vN(t),mN(t,gN())?new Proxy(t,Km):t)}function Gi(t){if(t instanceof IDBRequest)return yN(t);if(bp.has(t))return bp.get(t);const e=IN(t);return e!==t&&(bp.set(t,e),M_.set(e,t)),e}const Np=t=>M_.get(t);function TN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Gi(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Gi(o.result),l.oldVersion,l.newVersion,Gi(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const SN=["get","getKey","getAll","getAllKeys","count"],RN=["put","add","delete","clear"],Dp=new Map;function IE(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dp.get(e))return Dp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=RN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||SN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Dp.set(e,s),s}wN(t=>({...t,get:(e,n,r)=>IE(e,n)||t.get(e,n,r),has:(e,n)=>!!IE(e,n)||t.has(e,n)}));/**
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
 */class AN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gd="@firebase/app",Qm="0.10.6";/**
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
 */const eo=new nf("@firebase/app"),PN="@firebase/app-compat",kN="@firebase/analytics-compat",xN="@firebase/analytics",bN="@firebase/app-check-compat",NN="@firebase/app-check",DN="@firebase/auth",ON="@firebase/auth-compat",VN="@firebase/database",LN="@firebase/database-compat",MN="@firebase/functions",FN="@firebase/functions-compat",UN="@firebase/installations",jN="@firebase/installations-compat",BN="@firebase/messaging",zN="@firebase/messaging-compat",$N="@firebase/performance",qN="@firebase/performance-compat",GN="@firebase/remote-config",WN="@firebase/remote-config-compat",HN="@firebase/storage",KN="@firebase/storage-compat",QN="@firebase/firestore",YN="@firebase/vertexai-preview",XN="@firebase/firestore-compat",JN="firebase",ZN="10.12.3";/**
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
 */const Qi="[DEFAULT]",eD={[gd]:"fire-core",[PN]:"fire-core-compat",[xN]:"fire-analytics",[kN]:"fire-analytics-compat",[NN]:"fire-app-check",[bN]:"fire-app-check-compat",[DN]:"fire-auth",[ON]:"fire-auth-compat",[VN]:"fire-rtdb",[LN]:"fire-rtdb-compat",[MN]:"fire-fn",[FN]:"fire-fn-compat",[UN]:"fire-iid",[jN]:"fire-iid-compat",[BN]:"fire-fcm",[zN]:"fire-fcm-compat",[$N]:"fire-perf",[qN]:"fire-perf-compat",[GN]:"fire-rc",[WN]:"fire-rc-compat",[HN]:"fire-gcs",[KN]:"fire-gcs-compat",[QN]:"fire-fst",[XN]:"fire-fst-compat",[YN]:"fire-vertex","fire-js":"fire-js",[JN]:"fire-js-all"};/**
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
 */const Yi=new Map,xa=new Map,ba=new Map;function Mu(t,e){try{t.container.addComponent(e)}catch(n){eo.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rR(t,e){t.container.addOrOverwriteComponent(e)}function ti(t){const e=t.name;if(ba.has(e))return eo.debug(`There were multiple attempts to register component ${e}.`),!1;ba.set(e,t);for(const n of Yi.values())Mu(n,t);for(const n of xa.values())Mu(n,t);return!0}function Za(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tD(t,e,n=Qi){Za(t,e).clearInstance(n)}function iR(t){return t.options!==void 0}function Xe(t){return t.settings!==void 0}function nD(){ba.clear()}/**
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
 */const rD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$n=new go("app","Firebase",rD);/**
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
 */let sR=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}};/**
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
 */class iD extends sR{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,kn(gd,Qm,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){U_(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw $n.create("server-app-deleted")}}/**
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
 */const ai=ZN;function F_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qi,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw $n.create("bad-app-name",{appName:String(i)});if(n||(n=qS()),!n)throw $n.create("no-options");const s=Yi.get(i);if(s){if(ka(n,s.options)&&ka(r,s.config))return s;throw $n.create("duplicate-app",{appName:i})}const o=new ZS(i);for(const l of ba.values())o.addComponent(l);const a=new sR(n,r,o);return Yi.set(i,a),a}function sD(t,e){if(HS()&&!KS())throw $n.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;iR(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((h,f)=>Math.imul(31,h)+f.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw $n.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=xa.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new ZS(s);for(const c of ba.values())a.addComponent(c);const l=new iD(n,e,s,a);return xa.set(s,l),l}function rf(t=Qi){const e=Yi.get(t);if(!e&&t===Qi&&qS())return F_();if(!e)throw $n.create("no-app",{appName:t});return e}function oD(){return Array.from(Yi.values())}async function U_(t){let e=!1;const n=t.name;Yi.has(n)?(e=!0,Yi.delete(n)):xa.has(n)&&t.decRefCount()<=0&&(xa.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function kn(t,e,n){var r;let i=(r=eD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),eo.warn(a.join(" "));return}ti(new Wn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function oR(t,e){if(t!==null&&typeof t!="function")throw $n.create("invalid-log-argument");pN(t,e)}function aR(t){fN(t)}/**
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
 */const aD="firebase-heartbeat-database",lD=1,Fu="firebase-heartbeat-store";let Op=null;function lR(){return Op||(Op=TN(aD,lD,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fu)}catch(n){console.warn(n)}}}}).catch(t=>{throw $n.create("idb-open",{originalErrorMessage:t.message})})),Op}async function uD(t){try{const n=(await lR()).transaction(Fu),r=await n.objectStore(Fu).get(uR(t));return await n.done,r}catch(e){if(e instanceof qt)eo.warn(e.message);else{const n=$n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});eo.warn(n.message)}}}async function TE(t,e){try{const r=(await lR()).transaction(Fu,"readwrite");await r.objectStore(Fu).put(e,uR(t)),await r.done}catch(n){if(n instanceof qt)eo.warn(n.message);else{const r=$n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});eo.warn(r.message)}}}function uR(t){return`${t.name}!${t.options.appId}`}/**
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
 */const cD=1024,hD=30*24*60*60*1e3;class dD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=SE();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=hD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=SE(),{heartbeatsToSend:r,unsentEntries:i}=fD(this._heartbeatsCache.heartbeats),s=pd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function SE(){return new Date().toISOString().substring(0,10)}function fD(t,e=cD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),RE(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),RE(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lu()?eN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return TE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return TE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function RE(t){return pd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function mD(t){ti(new Wn("platform-logger",e=>new AN(e),"PRIVATE")),ti(new Wn("heartbeat",e=>new dD(e),"PRIVATE")),kn(gd,Qm,t),kn(gd,Qm,"esm2017"),kn("fire-js","")}mD("");const gD=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:qt,SDK_VERSION:ai,_DEFAULT_ENTRY_NAME:Qi,_addComponent:Mu,_addOrOverwriteComponent:rR,_apps:Yi,_clearComponents:nD,_components:ba,_getProvider:Za,_isFirebaseApp:iR,_isFirebaseServerApp:Xe,_registerComponent:ti,_removeServiceInstance:tD,_serverApps:xa,deleteApp:U_,getApp:rf,getApps:oD,initializeApp:F_,initializeServerApp:sD,onLog:oR,registerVersion:kn,setLogLevel:aR},Symbol.toStringTag,{value:"Module"}));var AE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qs,cR;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function R(){}R.prototype=y.prototype,T.D=y.prototype,T.prototype=new R,T.prototype.constructor=T,T.C=function(A,k,N){for(var C=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)C[ct-2]=arguments[ct];return y.prototype[k].apply(A,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,y,R){R||(R=0);var A=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)A[k]=y.charCodeAt(R++)|y.charCodeAt(R++)<<8|y.charCodeAt(R++)<<16|y.charCodeAt(R++)<<24;else for(k=0;16>k;++k)A[k]=y[R++]|y[R++]<<8|y[R++]<<16|y[R++]<<24;y=T.g[0],R=T.g[1],k=T.g[2];var N=T.g[3],C=y+(N^R&(k^N))+A[0]+3614090360&4294967295;y=R+(C<<7&4294967295|C>>>25),C=N+(k^y&(R^k))+A[1]+3905402710&4294967295,N=y+(C<<12&4294967295|C>>>20),C=k+(R^N&(y^R))+A[2]+606105819&4294967295,k=N+(C<<17&4294967295|C>>>15),C=R+(y^k&(N^y))+A[3]+3250441966&4294967295,R=k+(C<<22&4294967295|C>>>10),C=y+(N^R&(k^N))+A[4]+4118548399&4294967295,y=R+(C<<7&4294967295|C>>>25),C=N+(k^y&(R^k))+A[5]+1200080426&4294967295,N=y+(C<<12&4294967295|C>>>20),C=k+(R^N&(y^R))+A[6]+2821735955&4294967295,k=N+(C<<17&4294967295|C>>>15),C=R+(y^k&(N^y))+A[7]+4249261313&4294967295,R=k+(C<<22&4294967295|C>>>10),C=y+(N^R&(k^N))+A[8]+1770035416&4294967295,y=R+(C<<7&4294967295|C>>>25),C=N+(k^y&(R^k))+A[9]+2336552879&4294967295,N=y+(C<<12&4294967295|C>>>20),C=k+(R^N&(y^R))+A[10]+4294925233&4294967295,k=N+(C<<17&4294967295|C>>>15),C=R+(y^k&(N^y))+A[11]+2304563134&4294967295,R=k+(C<<22&4294967295|C>>>10),C=y+(N^R&(k^N))+A[12]+1804603682&4294967295,y=R+(C<<7&4294967295|C>>>25),C=N+(k^y&(R^k))+A[13]+4254626195&4294967295,N=y+(C<<12&4294967295|C>>>20),C=k+(R^N&(y^R))+A[14]+2792965006&4294967295,k=N+(C<<17&4294967295|C>>>15),C=R+(y^k&(N^y))+A[15]+1236535329&4294967295,R=k+(C<<22&4294967295|C>>>10),C=y+(k^N&(R^k))+A[1]+4129170786&4294967295,y=R+(C<<5&4294967295|C>>>27),C=N+(R^k&(y^R))+A[6]+3225465664&4294967295,N=y+(C<<9&4294967295|C>>>23),C=k+(y^R&(N^y))+A[11]+643717713&4294967295,k=N+(C<<14&4294967295|C>>>18),C=R+(N^y&(k^N))+A[0]+3921069994&4294967295,R=k+(C<<20&4294967295|C>>>12),C=y+(k^N&(R^k))+A[5]+3593408605&4294967295,y=R+(C<<5&4294967295|C>>>27),C=N+(R^k&(y^R))+A[10]+38016083&4294967295,N=y+(C<<9&4294967295|C>>>23),C=k+(y^R&(N^y))+A[15]+3634488961&4294967295,k=N+(C<<14&4294967295|C>>>18),C=R+(N^y&(k^N))+A[4]+3889429448&4294967295,R=k+(C<<20&4294967295|C>>>12),C=y+(k^N&(R^k))+A[9]+568446438&4294967295,y=R+(C<<5&4294967295|C>>>27),C=N+(R^k&(y^R))+A[14]+3275163606&4294967295,N=y+(C<<9&4294967295|C>>>23),C=k+(y^R&(N^y))+A[3]+4107603335&4294967295,k=N+(C<<14&4294967295|C>>>18),C=R+(N^y&(k^N))+A[8]+1163531501&4294967295,R=k+(C<<20&4294967295|C>>>12),C=y+(k^N&(R^k))+A[13]+2850285829&4294967295,y=R+(C<<5&4294967295|C>>>27),C=N+(R^k&(y^R))+A[2]+4243563512&4294967295,N=y+(C<<9&4294967295|C>>>23),C=k+(y^R&(N^y))+A[7]+1735328473&4294967295,k=N+(C<<14&4294967295|C>>>18),C=R+(N^y&(k^N))+A[12]+2368359562&4294967295,R=k+(C<<20&4294967295|C>>>12),C=y+(R^k^N)+A[5]+4294588738&4294967295,y=R+(C<<4&4294967295|C>>>28),C=N+(y^R^k)+A[8]+2272392833&4294967295,N=y+(C<<11&4294967295|C>>>21),C=k+(N^y^R)+A[11]+1839030562&4294967295,k=N+(C<<16&4294967295|C>>>16),C=R+(k^N^y)+A[14]+4259657740&4294967295,R=k+(C<<23&4294967295|C>>>9),C=y+(R^k^N)+A[1]+2763975236&4294967295,y=R+(C<<4&4294967295|C>>>28),C=N+(y^R^k)+A[4]+1272893353&4294967295,N=y+(C<<11&4294967295|C>>>21),C=k+(N^y^R)+A[7]+4139469664&4294967295,k=N+(C<<16&4294967295|C>>>16),C=R+(k^N^y)+A[10]+3200236656&4294967295,R=k+(C<<23&4294967295|C>>>9),C=y+(R^k^N)+A[13]+681279174&4294967295,y=R+(C<<4&4294967295|C>>>28),C=N+(y^R^k)+A[0]+3936430074&4294967295,N=y+(C<<11&4294967295|C>>>21),C=k+(N^y^R)+A[3]+3572445317&4294967295,k=N+(C<<16&4294967295|C>>>16),C=R+(k^N^y)+A[6]+76029189&4294967295,R=k+(C<<23&4294967295|C>>>9),C=y+(R^k^N)+A[9]+3654602809&4294967295,y=R+(C<<4&4294967295|C>>>28),C=N+(y^R^k)+A[12]+3873151461&4294967295,N=y+(C<<11&4294967295|C>>>21),C=k+(N^y^R)+A[15]+530742520&4294967295,k=N+(C<<16&4294967295|C>>>16),C=R+(k^N^y)+A[2]+3299628645&4294967295,R=k+(C<<23&4294967295|C>>>9),C=y+(k^(R|~N))+A[0]+4096336452&4294967295,y=R+(C<<6&4294967295|C>>>26),C=N+(R^(y|~k))+A[7]+1126891415&4294967295,N=y+(C<<10&4294967295|C>>>22),C=k+(y^(N|~R))+A[14]+2878612391&4294967295,k=N+(C<<15&4294967295|C>>>17),C=R+(N^(k|~y))+A[5]+4237533241&4294967295,R=k+(C<<21&4294967295|C>>>11),C=y+(k^(R|~N))+A[12]+1700485571&4294967295,y=R+(C<<6&4294967295|C>>>26),C=N+(R^(y|~k))+A[3]+2399980690&4294967295,N=y+(C<<10&4294967295|C>>>22),C=k+(y^(N|~R))+A[10]+4293915773&4294967295,k=N+(C<<15&4294967295|C>>>17),C=R+(N^(k|~y))+A[1]+2240044497&4294967295,R=k+(C<<21&4294967295|C>>>11),C=y+(k^(R|~N))+A[8]+1873313359&4294967295,y=R+(C<<6&4294967295|C>>>26),C=N+(R^(y|~k))+A[15]+4264355552&4294967295,N=y+(C<<10&4294967295|C>>>22),C=k+(y^(N|~R))+A[6]+2734768916&4294967295,k=N+(C<<15&4294967295|C>>>17),C=R+(N^(k|~y))+A[13]+1309151649&4294967295,R=k+(C<<21&4294967295|C>>>11),C=y+(k^(R|~N))+A[4]+4149444226&4294967295,y=R+(C<<6&4294967295|C>>>26),C=N+(R^(y|~k))+A[11]+3174756917&4294967295,N=y+(C<<10&4294967295|C>>>22),C=k+(y^(N|~R))+A[2]+718787259&4294967295,k=N+(C<<15&4294967295|C>>>17),C=R+(N^(k|~y))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(k+(C<<21&4294967295|C>>>11))&4294967295,T.g[2]=T.g[2]+k&4294967295,T.g[3]=T.g[3]+N&4294967295}r.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var R=y-this.blockSize,A=this.B,k=this.h,N=0;N<y;){if(k==0)for(;N<=R;)i(this,T,N),N+=this.blockSize;if(typeof T=="string"){for(;N<y;)if(A[k++]=T.charCodeAt(N++),k==this.blockSize){i(this,A),k=0;break}}else for(;N<y;)if(A[k++]=T[N++],k==this.blockSize){i(this,A),k=0;break}}this.h=k,this.o+=y},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var R=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=R&255,R/=256;for(this.u(T),T=Array(16),y=R=0;4>y;++y)for(var A=0;32>A;A+=8)T[R++]=this.g[y]>>>A&255;return T};function s(T,y){var R=a;return Object.prototype.hasOwnProperty.call(R,T)?R[T]:R[T]=y(T)}function o(T,y){this.h=y;for(var R=[],A=!0,k=T.length-1;0<=k;k--){var N=T[k]|0;A&&N==y||(R[k]=N,A=!1)}this.g=R}var a={};function l(T){return-128<=T&&128>T?s(T,function(y){return new o([y|0],0>y?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return f;if(0>T)return x(c(-T));for(var y=[],R=1,A=0;T>=R;A++)y[A]=T/R|0,R*=4294967296;return new o(y,0)}function h(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return x(h(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=c(Math.pow(y,8)),A=f,k=0;k<T.length;k+=8){var N=Math.min(8,T.length-k),C=parseInt(T.substring(k,k+N),y);8>N?(N=c(Math.pow(y,N)),A=A.j(N).add(c(C))):(A=A.j(R),A=A.add(c(C)))}return A}var f=l(0),m=l(1),v=l(16777216);t=o.prototype,t.m=function(){if(P(this))return-x(this).m();for(var T=0,y=1,R=0;R<this.g.length;R++){var A=this.i(R);T+=(0<=A?A:4294967296+A)*y,y*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(S(this))return"0";if(P(this))return"-"+x(this).toString(T);for(var y=c(Math.pow(T,6)),R=this,A="";;){var k=b(R,y).g;R=w(R,k.j(y));var N=((0<R.g.length?R.g[0]:R.h)>>>0).toString(T);if(R=k,S(R))return N+A;for(;6>N.length;)N="0"+N;A=N+A}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function S(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function P(T){return T.h==-1}t.l=function(T){return T=w(this,T),P(T)?-1:S(T)?0:1};function x(T){for(var y=T.g.length,R=[],A=0;A<y;A++)R[A]=~T.g[A];return new o(R,~T.h).add(m)}t.abs=function(){return P(this)?x(this):this},t.add=function(T){for(var y=Math.max(this.g.length,T.g.length),R=[],A=0,k=0;k<=y;k++){var N=A+(this.i(k)&65535)+(T.i(k)&65535),C=(N>>>16)+(this.i(k)>>>16)+(T.i(k)>>>16);A=C>>>16,N&=65535,C&=65535,R[k]=C<<16|N}return new o(R,R[R.length-1]&-2147483648?-1:0)};function w(T,y){return T.add(x(y))}t.j=function(T){if(S(this)||S(T))return f;if(P(this))return P(T)?x(this).j(x(T)):x(x(this).j(T));if(P(T))return x(this.j(x(T)));if(0>this.l(v)&&0>T.l(v))return c(this.m()*T.m());for(var y=this.g.length+T.g.length,R=[],A=0;A<2*y;A++)R[A]=0;for(A=0;A<this.g.length;A++)for(var k=0;k<T.g.length;k++){var N=this.i(A)>>>16,C=this.i(A)&65535,ct=T.i(k)>>>16,En=T.i(k)&65535;R[2*A+2*k]+=C*En,E(R,2*A+2*k),R[2*A+2*k+1]+=N*En,E(R,2*A+2*k+1),R[2*A+2*k+1]+=C*ct,E(R,2*A+2*k+1),R[2*A+2*k+2]+=N*ct,E(R,2*A+2*k+2)}for(A=0;A<y;A++)R[A]=R[2*A+1]<<16|R[2*A];for(A=y;A<2*y;A++)R[A]=0;return new o(R,0)};function E(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function I(T,y){this.g=T,this.h=y}function b(T,y){if(S(y))throw Error("division by zero");if(S(T))return new I(f,f);if(P(T))return y=b(x(T),y),new I(x(y.g),x(y.h));if(P(y))return y=b(T,x(y)),new I(x(y.g),y.h);if(30<T.g.length){if(P(T)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var R=m,A=y;0>=A.l(T);)R=F(R),A=F(A);var k=U(R,1),N=U(A,1);for(A=U(A,2),R=U(R,2);!S(A);){var C=N.add(A);0>=C.l(T)&&(k=k.add(R),N=C),A=U(A,1),R=U(R,1)}return y=w(T,k.j(y)),new I(k,y)}for(k=f;0<=T.l(y);){for(R=Math.max(1,Math.floor(T.m()/y.m())),A=Math.ceil(Math.log(R)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),N=c(R),C=N.j(y);P(C)||0<C.l(T);)R-=A,N=c(R),C=N.j(y);S(N)&&(N=m),k=k.add(N),T=w(T,C)}return new I(k,T)}t.A=function(T){return b(this,T).h},t.and=function(T){for(var y=Math.max(this.g.length,T.g.length),R=[],A=0;A<y;A++)R[A]=this.i(A)&T.i(A);return new o(R,this.h&T.h)},t.or=function(T){for(var y=Math.max(this.g.length,T.g.length),R=[],A=0;A<y;A++)R[A]=this.i(A)|T.i(A);return new o(R,this.h|T.h)},t.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),R=[],A=0;A<y;A++)R[A]=this.i(A)^T.i(A);return new o(R,this.h^T.h)};function F(T){for(var y=T.g.length+1,R=[],A=0;A<y;A++)R[A]=T.i(A)<<1|T.i(A-1)>>>31;return new o(R,T.h)}function U(T,y){var R=y>>5;y%=32;for(var A=T.g.length-R,k=[],N=0;N<A;N++)k[N]=0<y?T.i(N+R)>>>y|T.i(N+R+1)<<32-y:T.i(N+R);return new o(k,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,cR=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,qs=o}).apply(typeof AE<"u"?AE:typeof self<"u"?self:typeof window<"u"?window:{});var oh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hR,dR,Hl,fR,bh,Ym,pR,mR,gR;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,d,p){return u==Array.prototype||u==Object.prototype||(u[d]=p.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof oh=="object"&&oh];for(var d=0;d<u.length;++d){var p=u[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(u,d){if(d)e:{var p=r;u=u.split(".");for(var _=0;_<u.length-1;_++){var D=u[_];if(!(D in p))break e;p=p[D]}u=u[u.length-1],_=p[u],d=d(_),d!=_&&d!=null&&e(p,u,{configurable:!0,writable:!0,value:d})}}function s(u,d){u instanceof String&&(u+="");var p=0,_=!1,D={next:function(){if(!_&&p<u.length){var M=p++;return{value:d(M,u[M]),done:!1}}return _=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(u){return u||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var d=typeof u;return d=d!="object"?d:u?Array.isArray(u)?"array":d:"null",d=="array"||d=="object"&&typeof u.length=="number"}function c(u){var d=typeof u;return d=="object"&&u!=null||d=="function"}function h(u,d,p){return u.call.apply(u.bind,arguments)}function f(u,d,p){if(!u)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,_),u.apply(d,D)}}return function(){return u.apply(d,arguments)}}function m(u,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function v(u,d){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),u.apply(this,_)}}function S(u,d){function p(){}p.prototype=d.prototype,u.aa=d.prototype,u.prototype=new p,u.prototype.constructor=u,u.Qb=function(_,D,M){for(var W=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)W[Ce-2]=arguments[Ce];return d.prototype[D].apply(_,W)}}function P(u){const d=u.length;if(0<d){const p=Array(d);for(let _=0;_<d;_++)p[_]=u[_];return p}return[]}function x(u,d){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(l(_)){const D=u.length||0,M=_.length||0;u.length=D+M;for(let W=0;W<M;W++)u[D+W]=_[W]}else u.push(_)}}class w{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function E(u){return/^[\s\xa0]*$/.test(u)}function I(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function b(u){return b[" "](u),u}b[" "]=function(){};var F=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function U(u,d,p){for(const _ in u)d.call(p,u[_],_,u)}function T(u,d){for(const p in u)d.call(void 0,u[p],p,u)}function y(u){const d={};for(const p in u)d[p]=u[p];return d}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(u,d){let p,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(p in _)u[p]=_[p];for(let M=0;M<R.length;M++)p=R[M],Object.prototype.hasOwnProperty.call(_,p)&&(u[p]=_[p])}}function k(u){var d=1;u=u.split(":");const p=[];for(;0<d&&u.length;)p.push(u.shift()),d--;return u.length&&p.push(u.join(":")),p}function N(u){a.setTimeout(()=>{throw u},0)}function C(){var u=ne;let d=null;return u.g&&(d=u.g,u.g=u.g.next,u.g||(u.h=null),d.next=null),d}class ct{constructor(){this.h=this.g=null}add(d,p){const _=En.get();_.set(d,p),this.h?this.h.next=_:this.g=_,this.h=_}}var En=new w(()=>new Vt,u=>u.reset());class Vt{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let _t,G=!1,ne=new ct,ie=()=>{const u=a.Promise.resolve(void 0);_t=()=>{u.then(ye)}};var ye=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(p){N(p)}var d=En;d.j(u),100>d.h&&(d.h++,u.next=d.g,d.g=u)}G=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(u,d){this.type=u,this.g=this.target=d,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var st=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,d=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return u}();function Ct(u,d){if(ge.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var p=this.type=u.type,_=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=d,d=u.relatedTarget){if(F){e:{try{b(d.nodeName);var D=!0;break e}catch{}D=!1}D||(d=null)}}else p=="mouseover"?d=u.fromElement:p=="mouseout"&&(d=u.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Wt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ct.aa.h.call(this)}}S(Ct,ge);var Wt={2:"touch",3:"pen",4:"mouse"};Ct.prototype.h=function(){Ct.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Lt="closure_listenable_"+(1e6*Math.random()|0),ms=0;function Kn(u,d,p,_,D){this.listener=u,this.proxy=null,this.src=d,this.type=p,this.capture=!!_,this.ha=D,this.key=++ms,this.da=this.fa=!1}function Ht(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function On(u){this.src=u,this.g={},this.h=0}On.prototype.add=function(u,d,p,_,D){var M=u.toString();u=this.g[M],u||(u=this.g[M]=[],this.h++);var W=an(u,d,_,D);return-1<W?(d=u[W],p||(d.fa=!1)):(d=new Kn(d,this.src,M,!!_,D),d.fa=p,u.push(d)),d};function je(u,d){var p=d.type;if(p in u.g){var _=u.g[p],D=Array.prototype.indexOf.call(_,d,void 0),M;(M=0<=D)&&Array.prototype.splice.call(_,D,1),M&&(Ht(d),u.g[p].length==0&&(delete u.g[p],u.h--))}}function an(u,d,p,_){for(var D=0;D<u.length;++D){var M=u[D];if(!M.da&&M.listener==d&&M.capture==!!p&&M.ha==_)return D}return-1}var ln="closure_lm_"+(1e6*Math.random()|0),he={};function Qn(u,d,p,_,D){if(Array.isArray(d)){for(var M=0;M<d.length;M++)Qn(u,d[M],p,_,D);return null}return p=So(p),u&&u[Lt]?u.K(d,p,c(_)?!!_.capture:!!_,D):xr(u,d,p,!1,_,D)}function xr(u,d,p,_,D,M){if(!d)throw Error("Invalid event type");var W=c(D)?!!D.capture:!!D,Ce=_s(u);if(Ce||(u[ln]=Ce=new On(u)),p=Ce.add(d,p,_,W,M),p.proxy)return p;if(_=Pt(),p.proxy=_,_.src=u,_.listener=p,u.addEventListener)st||(D=W),D===void 0&&(D=!1),u.addEventListener(d.toString(),_,D);else if(u.attachEvent)u.attachEvent(Vn(d.toString()),_);else if(u.addListener&&u.removeListener)u.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Pt(){function u(p){return d.call(u.src,u.listener,p)}const d=gs;return u}function br(u,d,p,_,D){if(Array.isArray(d))for(var M=0;M<d.length;M++)br(u,d[M],p,_,D);else _=c(_)?!!_.capture:!!_,p=So(p),u&&u[Lt]?(u=u.i,d=String(d).toString(),d in u.g&&(M=u.g[d],p=an(M,p,_,D),-1<p&&(Ht(M[p]),Array.prototype.splice.call(M,p,1),M.length==0&&(delete u.g[d],u.h--)))):u&&(u=_s(u))&&(d=u.g[d.toString()],u=-1,d&&(u=an(d,p,_,D)),(p=-1<u?d[u]:null)&&Nr(p))}function Nr(u){if(typeof u!="number"&&u&&!u.da){var d=u.src;if(d&&d[Lt])je(d.i,u);else{var p=u.type,_=u.proxy;d.removeEventListener?d.removeEventListener(p,_,u.capture):d.detachEvent?d.detachEvent(Vn(p),_):d.addListener&&d.removeListener&&d.removeListener(_),(p=_s(d))?(je(p,u),p.h==0&&(p.src=null,d[ln]=null)):Ht(u)}}}function Vn(u){return u in he?he[u]:he[u]="on"+u}function gs(u,d){if(u.da)u=!0;else{d=new Ct(d,this);var p=u.listener,_=u.ha||u.src;u.fa&&Nr(u),u=p.call(_,d)}return u}function _s(u){return u=u[ln],u instanceof On?u:null}var mi="__closure_events_fn_"+(1e9*Math.random()>>>0);function So(u){return typeof u=="function"?u:(u[mi]||(u[mi]=function(d){return u.handleEvent(d)}),u[mi])}function re(){ce.call(this),this.i=new On(this),this.M=this,this.F=null}S(re,ce),re.prototype[Lt]=!0,re.prototype.removeEventListener=function(u,d,p,_){br(this,u,d,p,_)};function H(u,d){var p,_=u.F;if(_)for(p=[];_;_=_.F)p.push(_);if(u=u.M,_=d.type||d,typeof d=="string")d=new ge(d,u);else if(d instanceof ge)d.target=d.target||u;else{var D=d;d=new ge(_,u),A(d,D)}if(D=!0,p)for(var M=p.length-1;0<=M;M--){var W=d.g=p[M];D=ae(W,_,!0,d)&&D}if(W=d.g=u,D=ae(W,_,!0,d)&&D,D=ae(W,_,!1,d)&&D,p)for(M=0;M<p.length;M++)W=d.g=p[M],D=ae(W,_,!1,d)&&D}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var u=this.i,d;for(d in u.g){for(var p=u.g[d],_=0;_<p.length;_++)Ht(p[_]);delete u.g[d],u.h--}}this.F=null},re.prototype.K=function(u,d,p,_){return this.i.add(String(u),d,!1,p,_)},re.prototype.L=function(u,d,p,_){return this.i.add(String(u),d,!0,p,_)};function ae(u,d,p,_){if(d=u.i.g[String(d)],!d)return!0;d=d.concat();for(var D=!0,M=0;M<d.length;++M){var W=d[M];if(W&&!W.da&&W.capture==p){var Ce=W.listener,kt=W.ha||W.src;W.fa&&je(u.i,W),D=Ce.call(kt,_)!==!1&&D}}return D&&!_.defaultPrevented}function He(u,d,p){if(typeof u=="function")p&&(u=m(u,p));else if(u&&typeof u.handleEvent=="function")u=m(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(u,d||0)}function ot(u){u.g=He(()=>{u.g=null,u.i&&(u.i=!1,ot(u))},u.l);const d=u.h;u.h=null,u.m.apply(null,d)}class ht extends ce{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:ot(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yn(u){ce.call(this),this.h=u,this.g={}}S(Yn,ce);var gi=[];function cr(u){U(u.g,function(d,p){this.g.hasOwnProperty(p)&&Nr(d)},u),u.g={}}Yn.prototype.N=function(){Yn.aa.N.call(this),cr(this)},Yn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xn=a.JSON.stringify,pl=a.JSON.parse,ml=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function ys(){}ys.prototype.h=null;function Ro(u){return u.h||(u.h=u.i())}function Kt(){}var vs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ao(){ge.call(this,"d")}S(Ao,ge);function ws(){ge.call(this,"c")}S(ws,ge);var Jn={},Co=null;function _i(){return Co=Co||new re}Jn.La="serverreachability";function Po(u){ge.call(this,Jn.La,u)}S(Po,ge);function Dr(u){const d=_i();H(d,new Po(d))}Jn.STAT_EVENT="statevent";function ko(u,d){ge.call(this,Jn.STAT_EVENT,u),this.stat=d}S(ko,ge);function dt(u){const d=_i();H(d,new ko(d,u))}Jn.Ma="timingevent";function xo(u,d){ge.call(this,Jn.Ma,u),this.size=d}S(xo,ge);function Or(u,d){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},d)}function Vr(){this.g=!0}Vr.prototype.xa=function(){this.g=!1};function un(u,d,p,_,D,M){u.info(function(){if(u.g)if(M)for(var W="",Ce=M.split("&"),kt=0;kt<Ce.length;kt++){var Ee=Ce[kt].split("=");if(1<Ee.length){var Mt=Ee[0];Ee=Ee[1];var Ft=Mt.split("_");W=2<=Ft.length&&Ft[1]=="type"?W+(Mt+"="+Ee+"&"):W+(Mt+"=redacted&")}}else W=null;else W=M;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+d+`
`+p+`
`+W})}function Ae(u,d,p,_,D,M,W){u.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+d+`
`+p+`
`+M+" "+W})}function te(u,d,p,_){u.info(function(){return"XMLHTTP TEXT ("+d+"): "+Z1(u,p)+(_?" "+_:"")})}function J1(u,d){u.info(function(){return"TIMEOUT: "+d})}Vr.prototype.info=function(){};function Z1(u,d){if(!u.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(u=0;u<p.length;u++)if(Array.isArray(p[u])){var _=p[u];if(!(2>_.length)){var D=_[1];if(Array.isArray(D)&&!(1>D.length)){var M=D[0];if(M!="noop"&&M!="stop"&&M!="close")for(var W=1;W<D.length;W++)D[W]=""}}}}return Xn(p)}catch{return d}}var xc={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Tv={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wf;function bc(){}S(bc,ys),bc.prototype.g=function(){return new XMLHttpRequest},bc.prototype.i=function(){return{}},Wf=new bc;function yi(u,d,p,_){this.j=u,this.i=d,this.l=p,this.R=_||1,this.U=new Yn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Sv}function Sv(){this.i=null,this.g="",this.h=!1}var Rv={},Hf={};function Kf(u,d,p){u.L=1,u.v=Vc(Lr(d)),u.m=p,u.P=!0,Av(u,null)}function Av(u,d){u.F=Date.now(),Nc(u),u.A=Lr(u.v);var p=u.A,_=u.R;Array.isArray(_)||(_=[String(_)]),jv(p.i,"t",_),u.C=0,p=u.j.J,u.h=new Sv,u.g=iw(u.j,p?d:null,!u.m),0<u.O&&(u.M=new ht(m(u.Y,u,u.g),u.O)),d=u.U,p=u.g,_=u.ca;var D="readystatechange";Array.isArray(D)||(D&&(gi[0]=D.toString()),D=gi);for(var M=0;M<D.length;M++){var W=Qn(p,D[M],_||d.handleEvent,!1,d.h||d);if(!W)break;d.g[W.key]=W}d=u.H?y(u.H):{},u.m?(u.u||(u.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,d)):(u.u="GET",u.g.ea(u.A,u.u,null,d)),Dr(),un(u.i,u.u,u.A,u.l,u.R,u.m)}yi.prototype.ca=function(u){u=u.target;const d=this.M;d&&Mr(u)==3?d.j():this.Y(u)},yi.prototype.Y=function(u){try{if(u==this.g)e:{const Ft=Mr(this.g);var d=this.g.Ba();const Do=this.g.Z();if(!(3>Ft)&&(Ft!=3||this.g&&(this.h.h||this.g.oa()||Hv(this.g)))){this.J||Ft!=4||d==7||(d==8||0>=Do?Dr(3):Dr(2)),Qf(this);var p=this.g.Z();this.X=p;t:if(Cv(this)){var _=Hv(this.g);u="";var D=_.length,M=Mr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Es(this),gl(this);var W="";break t}this.h.i=new a.TextDecoder}for(d=0;d<D;d++)this.h.h=!0,u+=this.h.i.decode(_[d],{stream:!(M&&d==D-1)});_.length=0,this.h.g+=u,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=p==200,Ae(this.i,this.u,this.A,this.l,this.R,Ft,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Ce,kt=this.g;if((Ce=kt.g?kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(Ce)){var Ee=Ce;break t}}Ee=null}if(p=Ee)te(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yf(this,p);else{this.o=!1,this.s=3,dt(12),Es(this),gl(this);break e}}if(this.P){p=!0;let Zn;for(;!this.J&&this.C<W.length;)if(Zn=ek(this,W),Zn==Hf){Ft==4&&(this.s=4,dt(14),p=!1),te(this.i,this.l,null,"[Incomplete Response]");break}else if(Zn==Rv){this.s=4,dt(15),te(this.i,this.l,W,"[Invalid Chunk]"),p=!1;break}else te(this.i,this.l,Zn,null),Yf(this,Zn);if(Cv(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ft!=4||W.length!=0||this.h.h||(this.s=1,dt(16),p=!1),this.o=this.o&&p,!p)te(this.i,this.l,W,"[Invalid Chunked Response]"),Es(this),gl(this);else if(0<W.length&&!this.W){this.W=!0;var Mt=this.j;Mt.g==this&&Mt.ba&&!Mt.M&&(Mt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),np(Mt),Mt.M=!0,dt(11))}}else te(this.i,this.l,W,null),Yf(this,W);Ft==4&&Es(this),this.o&&!this.J&&(Ft==4?ew(this.j,this):(this.o=!1,Nc(this)))}else _k(this.g),p==400&&0<W.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),Es(this),gl(this)}}}catch{}finally{}};function Cv(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function ek(u,d){var p=u.C,_=d.indexOf(`
`,p);return _==-1?Hf:(p=Number(d.substring(p,_)),isNaN(p)?Rv:(_+=1,_+p>d.length?Hf:(d=d.slice(_,_+p),u.C=_+p,d)))}yi.prototype.cancel=function(){this.J=!0,Es(this)};function Nc(u){u.S=Date.now()+u.I,Pv(u,u.I)}function Pv(u,d){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Or(m(u.ba,u),d)}function Qf(u){u.B&&(a.clearTimeout(u.B),u.B=null)}yi.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(J1(this.i,this.A),this.L!=2&&(Dr(),dt(17)),Es(this),this.s=2,gl(this)):Pv(this,this.S-u)};function gl(u){u.j.G==0||u.J||ew(u.j,u)}function Es(u){Qf(u);var d=u.M;d&&typeof d.ma=="function"&&d.ma(),u.M=null,cr(u.U),u.g&&(d=u.g,u.g=null,d.abort(),d.ma())}function Yf(u,d){try{var p=u.j;if(p.G!=0&&(p.g==u||Xf(p.h,u))){if(!u.K&&Xf(p.h,u)&&p.G==3){try{var _=p.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<u.F)jc(p),Fc(p);else break e;tp(p),dt(18)}}else p.za=D[1],0<p.za-p.T&&37500>D[2]&&p.F&&p.v==0&&!p.C&&(p.C=Or(m(p.Za,p),6e3));if(1>=bv(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Ts(p,11)}else if((u.K||p.g==u)&&jc(p),!E(d))for(D=p.Da.g.parse(d),d=0;d<D.length;d++){let Ee=D[d];if(p.T=Ee[0],Ee=Ee[1],p.G==2)if(Ee[0]=="c"){p.K=Ee[1],p.ia=Ee[2];const Mt=Ee[3];Mt!=null&&(p.la=Mt,p.j.info("VER="+p.la));const Ft=Ee[4];Ft!=null&&(p.Aa=Ft,p.j.info("SVER="+p.Aa));const Do=Ee[5];Do!=null&&typeof Do=="number"&&0<Do&&(_=1.5*Do,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const Zn=u.g;if(Zn){const zc=Zn.g?Zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zc){var M=_.h;M.g||zc.indexOf("spdy")==-1&&zc.indexOf("quic")==-1&&zc.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Jf(M,M.h),M.h=null))}if(_.D){const rp=Zn.g?Zn.g.getResponseHeader("X-HTTP-Session-Id"):null;rp&&(_.ya=rp,xe(_.I,_.D,rp))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-u.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var W=u;if(_.qa=rw(_,_.J?_.ia:null,_.W),W.K){Nv(_.h,W);var Ce=W,kt=_.L;kt&&(Ce.I=kt),Ce.B&&(Qf(Ce),Nc(Ce)),_.g=W}else Jv(_);0<p.i.length&&Uc(p)}else Ee[0]!="stop"&&Ee[0]!="close"||Ts(p,7);else p.G==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?Ts(p,7):ep(p):Ee[0]!="noop"&&p.l&&p.l.ta(Ee),p.v=0)}}Dr(4)}catch{}}var tk=class{constructor(u,d){this.g=u,this.map=d}};function kv(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function xv(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function bv(u){return u.h?1:u.g?u.g.size:0}function Xf(u,d){return u.h?u.h==d:u.g?u.g.has(d):!1}function Jf(u,d){u.g?u.g.add(d):u.h=d}function Nv(u,d){u.h&&u.h==d?u.h=null:u.g&&u.g.has(d)&&u.g.delete(d)}kv.prototype.cancel=function(){if(this.i=Dv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Dv(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let d=u.i;for(const p of u.g.values())d=d.concat(p.D);return d}return P(u.i)}function nk(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var d=[],p=u.length,_=0;_<p;_++)d.push(u[_]);return d}d=[],p=0;for(_ in u)d[p++]=u[_];return d}function rk(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var d=[];u=u.length;for(var p=0;p<u;p++)d.push(p);return d}d=[],p=0;for(const _ in u)d[p++]=_;return d}}}function Ov(u,d){if(u.forEach&&typeof u.forEach=="function")u.forEach(d,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,d,void 0);else for(var p=rk(u),_=nk(u),D=_.length,M=0;M<D;M++)d.call(void 0,_[M],p&&p[M],u)}var Vv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ik(u,d){if(u){u=u.split("&");for(var p=0;p<u.length;p++){var _=u[p].indexOf("="),D=null;if(0<=_){var M=u[p].substring(0,_);D=u[p].substring(_+1)}else M=u[p];d(M,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Is(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Is){this.h=u.h,Dc(this,u.j),this.o=u.o,this.g=u.g,Oc(this,u.s),this.l=u.l;var d=u.i,p=new vl;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Lv(this,p),this.m=u.m}else u&&(d=String(u).match(Vv))?(this.h=!1,Dc(this,d[1]||"",!0),this.o=_l(d[2]||""),this.g=_l(d[3]||"",!0),Oc(this,d[4]),this.l=_l(d[5]||"",!0),Lv(this,d[6]||"",!0),this.m=_l(d[7]||"")):(this.h=!1,this.i=new vl(null,this.h))}Is.prototype.toString=function(){var u=[],d=this.j;d&&u.push(yl(d,Mv,!0),":");var p=this.g;return(p||d=="file")&&(u.push("//"),(d=this.o)&&u.push(yl(d,Mv,!0),"@"),u.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&u.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&u.push("/"),u.push(yl(p,p.charAt(0)=="/"?ak:ok,!0))),(p=this.i.toString())&&u.push("?",p),(p=this.m)&&u.push("#",yl(p,uk)),u.join("")};function Lr(u){return new Is(u)}function Dc(u,d,p){u.j=p?_l(d,!0):d,u.j&&(u.j=u.j.replace(/:$/,""))}function Oc(u,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);u.s=d}else u.s=null}function Lv(u,d,p){d instanceof vl?(u.i=d,ck(u.i,u.h)):(p||(d=yl(d,lk)),u.i=new vl(d,u.h))}function xe(u,d,p){u.i.set(d,p)}function Vc(u){return xe(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function _l(u,d){return u?d?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function yl(u,d,p){return typeof u=="string"?(u=encodeURI(u).replace(d,sk),p&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function sk(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Mv=/[#\/\?@]/g,ok=/[#\?:]/g,ak=/[#\?]/g,lk=/[#\?@]/g,uk=/#/g;function vl(u,d){this.h=this.g=null,this.i=u||null,this.j=!!d}function vi(u){u.g||(u.g=new Map,u.h=0,u.i&&ik(u.i,function(d,p){u.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=vl.prototype,t.add=function(u,d){vi(this),this.i=null,u=bo(this,u);var p=this.g.get(u);return p||this.g.set(u,p=[]),p.push(d),this.h+=1,this};function Fv(u,d){vi(u),d=bo(u,d),u.g.has(d)&&(u.i=null,u.h-=u.g.get(d).length,u.g.delete(d))}function Uv(u,d){return vi(u),d=bo(u,d),u.g.has(d)}t.forEach=function(u,d){vi(this),this.g.forEach(function(p,_){p.forEach(function(D){u.call(d,D,_,this)},this)},this)},t.na=function(){vi(this);const u=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let _=0;_<d.length;_++){const D=u[_];for(let M=0;M<D.length;M++)p.push(d[_])}return p},t.V=function(u){vi(this);let d=[];if(typeof u=="string")Uv(this,u)&&(d=d.concat(this.g.get(bo(this,u))));else{u=Array.from(this.g.values());for(let p=0;p<u.length;p++)d=d.concat(u[p])}return d},t.set=function(u,d){return vi(this),this.i=null,u=bo(this,u),Uv(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[d]),this.h+=1,this},t.get=function(u,d){return u?(u=this.V(u),0<u.length?String(u[0]):d):d};function jv(u,d,p){Fv(u,d),0<p.length&&(u.i=null,u.g.set(bo(u,d),P(p)),u.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var _=d[p];const M=encodeURIComponent(String(_)),W=this.V(_);for(_=0;_<W.length;_++){var D=M;W[_]!==""&&(D+="="+encodeURIComponent(String(W[_]))),u.push(D)}}return this.i=u.join("&")};function bo(u,d){return d=String(d),u.j&&(d=d.toLowerCase()),d}function ck(u,d){d&&!u.j&&(vi(u),u.i=null,u.g.forEach(function(p,_){var D=_.toLowerCase();_!=D&&(Fv(this,_),jv(this,D,p))},u)),u.j=d}function hk(u,d){const p=new Vr;if(a.Image){const _=new Image;_.onload=v(wi,p,"TestLoadImage: loaded",!0,d,_),_.onerror=v(wi,p,"TestLoadImage: error",!1,d,_),_.onabort=v(wi,p,"TestLoadImage: abort",!1,d,_),_.ontimeout=v(wi,p,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=u}else d(!1)}function dk(u,d){const p=new Vr,_=new AbortController,D=setTimeout(()=>{_.abort(),wi(p,"TestPingServer: timeout",!1,d)},1e4);fetch(u,{signal:_.signal}).then(M=>{clearTimeout(D),M.ok?wi(p,"TestPingServer: ok",!0,d):wi(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),wi(p,"TestPingServer: error",!1,d)})}function wi(u,d,p,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(p)}catch{}}function fk(){this.g=new ml}function pk(u,d,p){const _=p||"";try{Ov(u,function(D,M){let W=D;c(D)&&(W=Xn(D)),d.push(_+M+"="+encodeURIComponent(W))})}catch(D){throw d.push(_+"type="+encodeURIComponent("_badmap")),D}}function wl(u){this.l=u.Ub||null,this.j=u.eb||!1}S(wl,ys),wl.prototype.g=function(){return new Lc(this.l,this.j)},wl.prototype.i=function(u){return function(){return u}}({});function Lc(u,d){re.call(this),this.D=u,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Lc,re),t=Lc.prototype,t.open=function(u,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=d,this.readyState=1,Il(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(d.body=u),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,El(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Il(this)),this.g&&(this.readyState=3,Il(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bv(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bv(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var d=u.value?u.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!u.done}))&&(this.response=this.responseText+=d)}u.done?El(this):Il(this),this.readyState==3&&Bv(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,El(this))},t.Qa=function(u){this.g&&(this.response=u,El(this))},t.ga=function(){this.g&&El(this)};function El(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Il(u)}t.setRequestHeader=function(u,d){this.u.append(u,d)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,u.push(p[0]+": "+p[1]),p=d.next();return u.join(`\r
`)};function Il(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Lc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function zv(u){let d="";return U(u,function(p,_){d+=_,d+=":",d+=p,d+=`\r
`}),d}function Zf(u,d,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=zv(p),typeof u=="string"?p!=null&&encodeURIComponent(String(p)):xe(u,d,p))}function Ke(u){re.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Ke,re);var mk=/^https?$/i,gk=["POST","PUT"];t=Ke.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,d,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);d=d?d.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wf.g(),this.v=this.o?Ro(this.o):Ro(Wf),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(u),!0),this.B=!1}catch(M){$v(this,M);return}if(u=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)p.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const M of _.keys())p.set(M,_.get(M));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),D=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(gk,d,void 0))||_||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,W]of p)this.g.setRequestHeader(M,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Wv(this),this.u=!0,this.g.send(u),this.u=!1}catch(M){$v(this,M)}};function $v(u,d){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=d,u.m=5,qv(u),Mc(u)}function qv(u){u.A||(u.A=!0,H(u,"complete"),H(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,H(this,"complete"),H(this,"abort"),Mc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mc(this,!0)),Ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Gv(this):this.bb())},t.bb=function(){Gv(this)};function Gv(u){if(u.h&&typeof o<"u"&&(!u.v[1]||Mr(u)!=4||u.Z()!=2)){if(u.u&&Mr(u)==4)He(u.Ea,0,u);else if(H(u,"readystatechange"),Mr(u)==4){u.h=!1;try{const W=u.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var _;if(_=W===0){var D=String(u.D).match(Vv)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),_=!mk.test(D?D.toLowerCase():"")}p=_}if(p)H(u,"complete"),H(u,"success");else{u.m=6;try{var M=2<Mr(u)?u.g.statusText:""}catch{M=""}u.l=M+" ["+u.Z()+"]",qv(u)}}finally{Mc(u)}}}}function Mc(u,d){if(u.g){Wv(u);const p=u.g,_=u.v[0]?()=>{}:null;u.g=null,u.v=null,d||H(u,"ready");try{p.onreadystatechange=_}catch{}}}function Wv(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function Mr(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<Mr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var d=this.g.responseText;return u&&d.indexOf(u)==0&&(d=d.substring(u.length)),pl(d)}};function Hv(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function _k(u){const d={};u=(u.g&&2<=Mr(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<u.length;_++){if(E(u[_]))continue;var p=k(u[_]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=d[D]||[];d[D]=M,M.push(p)}T(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Tl(u,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[u]||d}function Kv(u){this.Aa=0,this.i=[],this.j=new Vr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Tl("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Tl("baseRetryDelayMs",5e3,u),this.cb=Tl("retryDelaySeedMs",1e4,u),this.Wa=Tl("forwardChannelMaxRetries",2,u),this.wa=Tl("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new kv(u&&u.concurrentRequestLimit),this.Da=new fk,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Kv.prototype,t.la=8,t.G=1,t.connect=function(u,d,p,_){dt(0),this.W=u,this.H=d||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=rw(this,null,this.W),Uc(this)};function ep(u){if(Qv(u),u.G==3){var d=u.U++,p=Lr(u.I);if(xe(p,"SID",u.K),xe(p,"RID",d),xe(p,"TYPE","terminate"),Sl(u,p),d=new yi(u,u.j,d),d.L=2,d.v=Vc(Lr(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=iw(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Nc(d)}nw(u)}function Fc(u){u.g&&(np(u),u.g.cancel(),u.g=null)}function Qv(u){Fc(u),u.u&&(a.clearTimeout(u.u),u.u=null),jc(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Uc(u){if(!xv(u.h)&&!u.s){u.s=!0;var d=u.Ga;_t||ie(),G||(_t(),G=!0),ne.add(d,u),u.B=0}}function yk(u,d){return bv(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=d.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Or(m(u.Ga,u,d),tw(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const D=new yi(this,this.j,u);let M=this.o;if(this.S&&(M?(M=y(M),A(M,this.S)):M=this.S),this.m!==null||this.O||(D.H=M,M=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Xv(this,D,d),p=Lr(this.I),xe(p,"RID",u),xe(p,"CVER",22),this.D&&xe(p,"X-HTTP-Session-Id",this.D),Sl(this,p),M&&(this.O?d="headers="+encodeURIComponent(String(zv(M)))+"&"+d:this.m&&Zf(p,this.m,M)),Jf(this.h,D),this.Ua&&xe(p,"TYPE","init"),this.P?(xe(p,"$req",d),xe(p,"SID","null"),D.T=!0,Kf(D,p,null)):Kf(D,p,d),this.G=2}}else this.G==3&&(u?Yv(this,u):this.i.length==0||xv(this.h)||Yv(this))};function Yv(u,d){var p;d?p=d.l:p=u.U++;const _=Lr(u.I);xe(_,"SID",u.K),xe(_,"RID",p),xe(_,"AID",u.T),Sl(u,_),u.m&&u.o&&Zf(_,u.m,u.o),p=new yi(u,u.j,p,u.B+1),u.m===null&&(p.H=u.o),d&&(u.i=d.D.concat(u.i)),d=Xv(u,p,1e3),p.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Jf(u.h,p),Kf(p,_,d)}function Sl(u,d){u.H&&U(u.H,function(p,_){xe(d,_,p)}),u.l&&Ov({},function(p,_){xe(d,_,p)})}function Xv(u,d,p){p=Math.min(u.i.length,p);var _=u.l?m(u.l.Na,u.l,u):null;e:{var D=u.i;let M=-1;for(;;){const W=["count="+p];M==-1?0<p?(M=D[0].g,W.push("ofs="+M)):M=0:W.push("ofs="+M);let Ce=!0;for(let kt=0;kt<p;kt++){let Ee=D[kt].g;const Mt=D[kt].map;if(Ee-=M,0>Ee)M=Math.max(0,D[kt].g-100),Ce=!1;else try{pk(Mt,W,"req"+Ee+"_")}catch{_&&_(Mt)}}if(Ce){_=W.join("&");break e}}}return u=u.i.splice(0,p),d.D=u,_}function Jv(u){if(!u.g&&!u.u){u.Y=1;var d=u.Fa;_t||ie(),G||(_t(),G=!0),ne.add(d,u),u.v=0}}function tp(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Or(m(u.Fa,u),tw(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,Zv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Or(m(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),Fc(this),Zv(this))};function np(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function Zv(u){u.g=new yi(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var d=Lr(u.qa);xe(d,"RID","rpc"),xe(d,"SID",u.K),xe(d,"AID",u.T),xe(d,"CI",u.F?"0":"1"),!u.F&&u.ja&&xe(d,"TO",u.ja),xe(d,"TYPE","xmlhttp"),Sl(u,d),u.m&&u.o&&Zf(d,u.m,u.o),u.L&&(u.g.I=u.L);var p=u.g;u=u.ia,p.L=1,p.v=Vc(Lr(d)),p.m=null,p.P=!0,Av(p,u)}t.Za=function(){this.C!=null&&(this.C=null,Fc(this),tp(this),dt(19))};function jc(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function ew(u,d){var p=null;if(u.g==d){jc(u),np(u),u.g=null;var _=2}else if(Xf(u.h,d))p=d.D,Nv(u.h,d),_=1;else return;if(u.G!=0){if(d.o)if(_==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var D=u.B;_=_i(),H(_,new xo(_,p)),Uc(u)}else Jv(u);else if(D=d.s,D==3||D==0&&0<d.X||!(_==1&&yk(u,d)||_==2&&tp(u)))switch(p&&0<p.length&&(d=u.h,d.i=d.i.concat(p)),D){case 1:Ts(u,5);break;case 4:Ts(u,10);break;case 3:Ts(u,6);break;default:Ts(u,2)}}}function tw(u,d){let p=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(p*=2),p*d}function Ts(u,d){if(u.j.info("Error code "+d),d==2){var p=m(u.fb,u),_=u.Xa;const D=!_;_=new Is(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Dc(_,"https"),Vc(_),D?hk(_.toString(),p):dk(_.toString(),p)}else dt(2);u.G=0,u.l&&u.l.sa(d),nw(u),Qv(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function nw(u){if(u.G=0,u.ka=[],u.l){const d=Dv(u.h);(d.length!=0||u.i.length!=0)&&(x(u.ka,d),x(u.ka,u.i),u.h.i.length=0,P(u.i),u.i.length=0),u.l.ra()}}function rw(u,d,p){var _=p instanceof Is?Lr(p):new Is(p);if(_.g!="")d&&(_.g=d+"."+_.g),Oc(_,_.s);else{var D=a.location;_=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;var M=new Is(null);_&&Dc(M,_),d&&(M.g=d),D&&Oc(M,D),p&&(M.l=p),_=M}return p=u.D,d=u.ya,p&&d&&xe(_,p,d),xe(_,"VER",u.la),Sl(u,_),_}function iw(u,d,p){if(d&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=u.Ca&&!u.pa?new Ke(new wl({eb:p})):new Ke(u.pa),d.Ha(u.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function sw(){}t=sw.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Bc(){}Bc.prototype.g=function(u,d){return new In(u,d)};function In(u,d){re.call(this),this.g=new Kv(d),this.l=u,this.h=d&&d.messageUrlParams||null,u=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(u?u["X-WebChannel-Content-Type"]=d.messageContentType:u={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(u?u["X-WebChannel-Client-Profile"]=d.va:u={"X-WebChannel-Client-Profile":d.va}),this.g.S=u,(u=d&&d.Sb)&&!E(u)&&(this.g.m=u),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!E(d)&&(this.g.D=d,u=this.h,u!==null&&d in u&&(u=this.h,d in u&&delete u[d])),this.j=new No(this)}S(In,re),In.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},In.prototype.close=function(){ep(this.g)},In.prototype.o=function(u){var d=this.g;if(typeof u=="string"){var p={};p.__data__=u,u=p}else this.u&&(p={},p.__data__=Xn(u),u=p);d.i.push(new tk(d.Ya++,u)),d.G==3&&Uc(d)},In.prototype.N=function(){this.g.l=null,delete this.j,ep(this.g),delete this.g,In.aa.N.call(this)};function ow(u){Ao.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var d=u.__sm__;if(d){e:{for(const p in d){u=p;break e}u=void 0}(this.i=u)&&(u=this.i,d=d!==null&&u in d?d[u]:void 0),this.data=d}else this.data=u}S(ow,Ao);function aw(){ws.call(this),this.status=1}S(aw,ws);function No(u){this.g=u}S(No,sw),No.prototype.ua=function(){H(this.g,"a")},No.prototype.ta=function(u){H(this.g,new ow(u))},No.prototype.sa=function(u){H(this.g,new aw)},No.prototype.ra=function(){H(this.g,"b")},Bc.prototype.createWebChannel=Bc.prototype.g,In.prototype.send=In.prototype.o,In.prototype.open=In.prototype.m,In.prototype.close=In.prototype.close,gR=function(){return new Bc},mR=function(){return _i()},pR=Jn,Ym={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xc.NO_ERROR=0,xc.TIMEOUT=8,xc.HTTP_ERROR=6,bh=xc,Tv.COMPLETE="complete",fR=Tv,Kt.EventType=vs,vs.OPEN="a",vs.CLOSE="b",vs.ERROR="c",vs.MESSAGE="d",re.prototype.listen=re.prototype.K,Hl=Kt,dR=wl,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,hR=Ke}).apply(typeof oh<"u"?oh:typeof self<"u"?self:typeof window<"u"?window:{});const CE="@firebase/firestore";/**
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
 */let wt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
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
 */let el="10.12.3";/**
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
 */const Xi=new nf("@firebase/firestore");function qo(){return Xi.logLevel}function _D(t){Xi.setLogLevel(t)}function z(t,...e){if(Xi.logLevel<=le.DEBUG){const n=e.map(j_);Xi.debug(`Firestore (${el}): ${t}`,...n)}}function rt(t,...e){if(Xi.logLevel<=le.ERROR){const n=e.map(j_);Xi.error(`Firestore (${el}): ${t}`,...n)}}function lr(t,...e){if(Xi.logLevel<=le.WARN){const n=e.map(j_);Xi.warn(`Firestore (${el}): ${t}`,...n)}}function j_(t){if(typeof t=="string")return t;try{/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${el}) INTERNAL ASSERTION FAILED: `+t;throw rt(e),new Error(e)}function Z(t,e){t||Y()}function yD(t,e){t||Y()}function Q(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends qt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class It{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class _R{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(wt.UNAUTHENTICATED))}shutdown(){}}class wD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ED{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new It;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new It,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new It)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string"),new _R(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string"),new wt(e)}}class ID{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class TD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ID(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class SD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Z(typeof n.token=="string"),this.R=n.token,new SD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function AD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class yR{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=AD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function Na(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function vR(t){return t+"\0"}/**
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
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Fe(0,0))}static max(){return new ee(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Uu{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Uu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Uu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends Uu{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const CD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Le extends Uu{construct(e,n,r){return new Le(e,n,r)}static isValidIdentifier(e){return CD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Le.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Le(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new B(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new B(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Le(n)}static emptyPath(){return new Le([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(fe.fromString(e))}static fromName(e){return new K(fe.fromString(e).popFirst(5))}static empty(){return new K(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new fe(e.slice()))}}/**
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
 */class _d{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Xm(t){return t.fields.find(e=>e.kind===2)}function Ps(t){return t.fields.filter(e=>e.kind!==2)}_d.UNKNOWN_ID=-1;class Nh{constructor(e,n){this.fieldPath=e,this.kind=n}}class ju{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new ju(0,bn.min())}}function wR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new bn(i,K.empty(),e)}function ER(t){return new bn(t.readTime,t.key,-1)}class bn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new bn(ee.min(),K.empty(),-1)}static max(){return new bn(ee.max(),K.empty(),-1)}}function B_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
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
 */const IR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class TR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function us(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==IR)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class sf{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new It,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new lu(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=z_(r.target.error);this.V.reject(new lu(e,i))}}static open(e,n,r,i){try{return new sf(n,e.transaction(i,r))}catch(s){throw new lu(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(z("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new kD(n)}}class Sr{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Sr.S(Ue())===12.2&&rt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return z("SimpleDb","Removing database:",e),xs(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Lu())return!1;if(Sr.C())return!0;const e=Ue(),n=Sr.S(e),r=0<n&&n<10,i=SR(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(z("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new lu(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new B(L.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new B(L.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new lu(e,o))},i.onupgradeneeded=s=>{z("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{z("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=sf.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),O.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(z("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function SR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class PD{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return xs(this.B.delete())}}class lu extends B{constructor(e,n){super(L.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function cs(t){return t.name==="IndexedDbTransactionError"}class kD{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(z("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(z("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),xs(r)}add(e){return z("SimpleDb","ADD",this.store.name,e,e),xs(this.store.add(e))}get(e){return xs(this.store.get(e)).next(n=>(n===void 0&&(n=null),z("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return z("SimpleDb","DELETE",this.store.name,e),xs(this.store.delete(e))}count(){return z("SimpleDb","COUNT",this.store.name),xs(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new O((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,l)=>{o.push(l)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new O((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){z("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new O((r,i)=>{n.onerror=s=>{const o=z_(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new O((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new PD(a),c=n(a.primaryKey,a.value,l);if(c instanceof O){const h=c.catch(f=>(l.done(),O.reject(f)));r.push(h)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>O.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function xs(t){return new O((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=z_(r.target.error);n(i)}})}let PE=!1;function z_(t){const e=Sr.S(Ue());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new B("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return PE||(PE=!0,setTimeout(()=>{throw r},0)),r}}return t}class xD{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){z("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{z("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){cs(n)?z("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await us(n)}await this.X(6e4)})}}class bD{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return O.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return z("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(z("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=ER(s);B_(o,r)>0&&(r=o)}),new bn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class mn{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}mn.oe=-1;function lc(t){return t==null}function Bu(t){return t===0&&1/t==-1/0}function RR(t){return typeof t=="number"&&Number.isInteger(t)&&!Bu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function tn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=kE(e)),e=ND(t.get(n),e);return kE(e)}function ND(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function kE(t){return t+""}function vr(t){const e=t.length;if(Z(e>=2),e===2)return Z(t.charAt(0)===""&&t.charAt(1)===""),fe.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&Y(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:Y()}s=o+2}return new fe(r)}/**
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
 */const xE=["userId","batchId"];/**
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
 */function Dh(t,e){return[t,tn(e)]}function AR(t,e,n){return[t,tn(e),n]}const DD={},OD=["prefixPath","collectionGroup","readTime","documentId"],VD=["prefixPath","collectionGroup","documentId"],LD=["collectionGroup","readTime","prefixPath","documentId"],MD=["canonicalId","targetId"],FD=["targetId","path"],UD=["path","targetId"],jD=["collectionId","parent"],BD=["indexId","uid"],zD=["uid","sequenceNumber"],$D=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],qD=["indexId","uid","orderedDocumentKey"],GD=["userId","collectionPath","documentId"],WD=["userId","collectionPath","largestBatchId"],HD=["userId","collectionGroup","largestBatchId"],CR=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],KD=[...CR,"documentOverlays"],PR=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],kR=PR,xR=[...kR,"indexConfiguration","indexState","indexEntries"],QD=xR;/**
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
 */class Jm extends TR{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function Rt(t,e){const n=Q(t);return Sr.F(n._e,e)}/**
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
 */function bE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _o(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function bR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ke{constructor(e,n){this.comparator=e,this.root=n||bt.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ah(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ah(this.root,e,this.comparator,!1)}getReverseIterator(){return new ah(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ah(this.root,e,this.comparator,!0)}}class ah{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??bt.RED,this.left=i??bt.EMPTY,this.right=s??bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new bt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return bt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new bt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Re{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new NE(this.data.getIterator())}getIteratorFrom(e){return new NE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Re)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Re(this.comparator);return n.data=e,n}}class NE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Vo(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class gn{constructor(e){this.fields=e,e.sort(Le.comparator)}static empty(){return new gn([])}unionWith(e){let n=new Re(Le.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new gn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Na(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class NR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function YD(){return typeof atob<"u"}/**
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
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new NR("Invalid base64 string: "+s):s}}(e);return new gt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const XD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ni(t){if(Z(!!t),typeof t=="string"){let e=0;const n=XD.exec(t);if(Z(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ji(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
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
 */function of(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $_(t){const e=t.mapValue.fields.__previous_value__;return of(e)?$_(e):e}function zu(t){const e=ni(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
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
 */class JD{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Zi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Zi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Zi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Vi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Oh={nullValue:"NULL_VALUE"};function to(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?of(t)?4:DR(t)?9007199254740991:10:Y()}function Cr(t,e){if(t===e)return!0;const n=to(t);if(n!==to(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zu(t).isEqual(zu(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ni(i.timestampValue),a=ni(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ji(i.bytesValue).isEqual(Ji(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ye(i.geoPointValue.latitude)===Ye(s.geoPointValue.latitude)&&Ye(i.geoPointValue.longitude)===Ye(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ye(i.integerValue)===Ye(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ye(i.doubleValue),a=Ye(s.doubleValue);return o===a?Bu(o)===Bu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Na(t.arrayValue.values||[],e.arrayValue.values||[],Cr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(bE(o)!==bE(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Cr(o[l],a[l])))return!1;return!0}(t,e);default:return Y()}}function $u(t,e){return(t.values||[]).find(n=>Cr(n,e))!==void 0}function es(t,e){if(t===e)return 0;const n=to(t),r=to(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ye(s.integerValue||s.doubleValue),l=Ye(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return DE(t.timestampValue,e.timestampValue);case 4:return DE(zu(t),zu(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ji(s),l=Ji(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=se(a[c],l[c]);if(h!==0)return h}return se(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=se(Ye(s.latitude),Ye(o.latitude));return a!==0?a:se(Ye(s.longitude),Ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const h=es(a[c],l[c]);if(h)return h}return se(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Vi.mapValue&&o===Vi.mapValue)return 0;if(s===Vi.mapValue)return 1;if(o===Vi.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const m=se(l[f],h[f]);if(m!==0)return m;const v=es(a[l[f]],c[h[f]]);if(v!==0)return v}return se(l.length,h.length)}(t.mapValue,e.mapValue);default:throw Y()}}function DE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=ni(t),r=ni(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function Da(t){return Zm(t)}function Zm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ni(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ji(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Zm(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Zm(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function no(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function eg(t){return!!t&&"integerValue"in t}function qu(t){return!!t&&"arrayValue"in t}function OE(t){return!!t&&"nullValue"in t}function VE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vh(t){return!!t&&"mapValue"in t}function uu(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _o(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=uu(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=uu(t.arrayValue.values[n]);return e}return Object.assign({},t)}function DR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function ZD(t){return"nullValue"in t?Oh:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?no(Zi.empty(),K.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:Y()}function eO(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?no(Zi.empty(),K.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Vi:Y()}function LE(t,e){const n=es(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function ME(t,e){const n=es(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Vh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=uu(n)}setAll(e){let n=Le.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=uu(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Vh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Vh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){_o(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Nt(uu(this.value))}}function OR(t){const e=[];return _o(t.fields,(n,r)=>{const i=new Le([n]);if(Vh(r)){const s=OR(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new gn(e)}/**
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
 */class Ne{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ne(e,0,ee.min(),ee.min(),ee.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ne(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new Ne(e,2,n,ee.min(),ee.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new Ne(e,3,n,ee.min(),ee.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ne&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ne(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ts{constructor(e,n){this.position=e,this.inclusive=n}}function FE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=es(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function UE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Gu{constructor(e,n="asc"){this.field=e,this.dir=n}}function tO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class VR{}class pe extends VR{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new nO(e,n,r):n==="array-contains"?new sO(e,r):n==="in"?new BR(e,r):n==="not-in"?new oO(e,r):n==="array-contains-any"?new aO(e,r):new pe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new rO(e,r):new iO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(es(n,this.value)):n!==null&&to(this.value)===to(n)&&this.matchesComparison(es(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Te extends VR{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Te(e,n)}matches(e){return Oa(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Oa(t){return t.op==="and"}function tg(t){return t.op==="or"}function q_(t){return LR(t)&&Oa(t)}function LR(t){for(const e of t.filters)if(e instanceof Te)return!1;return!0}function ng(t){if(t instanceof pe)return t.field.canonicalString()+t.op.toString()+Da(t.value);if(q_(t))return t.filters.map(e=>ng(e)).join(",");{const e=t.filters.map(n=>ng(n)).join(",");return`${t.op}(${e})`}}function MR(t,e){return t instanceof pe?function(r,i){return i instanceof pe&&r.op===i.op&&r.field.isEqual(i.field)&&Cr(r.value,i.value)}(t,e):t instanceof Te?function(r,i){return i instanceof Te&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&MR(o,i.filters[a]),!0):!1}(t,e):void Y()}function FR(t,e){const n=t.filters.concat(e);return Te.create(n,t.op)}function UR(t){return t instanceof pe?function(n){return`${n.field.canonicalString()} ${n.op} ${Da(n.value)}`}(t):t instanceof Te?function(n){return n.op.toString()+" {"+n.getFilters().map(UR).join(" ,")+"}"}(t):"Filter"}class nO extends pe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class rO extends pe{constructor(e,n){super(e,"in",n),this.keys=jR("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class iO extends pe{constructor(e,n){super(e,"not-in",n),this.keys=jR("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function jR(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class sO extends pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qu(n)&&$u(n.arrayValue,this.value)}}class BR extends pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$u(this.value.arrayValue,n)}}class oO extends pe{constructor(e,n){super(e,"not-in",n)}matches(e){if($u(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!$u(this.value.arrayValue,n)}}class aO extends pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>$u(this.value.arrayValue,r))}}/**
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
 */class lO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function rg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new lO(t,e,n,r,i,s,o)}function ro(t){const e=Q(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ng(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),lc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Da(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Da(r)).join(",")),e.ue=n}return e.ue}function uc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!tO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!MR(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!UE(t.startAt,e.startAt)&&UE(t.endAt,e.endAt)}function yd(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function vd(t,e){return t.filters.filter(n=>n instanceof pe&&n.field.isEqual(e))}function jE(t,e,n){let r=Oh,i=!0;for(const s of vd(t,e)){let o=Oh,a=!0;switch(s.op){case"<":case"<=":o=ZD(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Oh}LE({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];LE({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function BE(t,e,n){let r=Vi,i=!0;for(const s of vd(t,e)){let o=Vi,a=!0;switch(s.op){case">=":case">":o=eO(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Vi}ME({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];ME({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class li{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function zR(t,e,n,r,i,s,o,a){return new li(t,e,n,r,i,s,o,a)}function tl(t){return new li(t)}function zE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function G_(t){return t.collectionGroup!==null}function ma(t){const e=Q(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Re(Le.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Gu(s,r))}),n.has(Le.keyField().canonicalString())||e.ce.push(new Gu(Le.keyField(),r))}return e.ce}function nn(t){const e=Q(t);return e.le||(e.le=uO(e,ma(t))),e.le}function uO(t,e){if(t.limitType==="F")return rg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Gu(i.field,s)});const n=t.endAt?new ts(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ts(t.startAt.position,t.startAt.inclusive):null;return rg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ig(t,e){const n=t.filters.concat([e]);return new li(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function wd(t,e,n){return new li(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function cc(t,e){return uc(nn(t),nn(e))&&t.limitType===e.limitType}function $R(t){return`${ro(nn(t))}|lt:${t.limitType}`}function Go(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>UR(i)).join(", ")}]`),lc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Da(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Da(i)).join(",")),`Target(${r})`}(nn(t))}; limitType=${t.limitType})`}function hc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ma(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=FE(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,ma(r),i)||r.endAt&&!function(o,a,l){const c=FE(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,ma(r),i))}(t,e)}function qR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function GR(t){return(e,n)=>{let r=!1;for(const i of ma(t)){const s=cO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function cO(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?es(l,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class hs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){_o(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return bR(this.inner)}size(){return this.innerSize}}/**
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
 */const hO=new ke(K.comparator);function _n(){return hO}const WR=new ke(K.comparator);function Kl(...t){let e=WR;for(const n of t)e=e.insert(n.key,n);return e}function HR(t){let e=WR;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function wr(){return cu()}function KR(){return cu()}function cu(){return new hs(t=>t.toString(),(t,e)=>t.isEqual(e))}const dO=new ke(K.comparator),fO=new Re(K.comparator);function oe(...t){let e=fO;for(const n of t)e=e.add(n);return e}const pO=new Re(se);function W_(){return pO}/**
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
 */function QR(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bu(e)?"-0":e}}function YR(t){return{integerValue:""+t}}function XR(t,e){return RR(e)?YR(e):QR(t,e)}/**
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
 */class af{constructor(){this._=void 0}}function mO(t,e,n){return t instanceof Va?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&of(s)&&(s=$_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof io?ZR(t,e):t instanceof so?eA(t,e):function(i,s){const o=JR(i,s),a=$E(o)+$E(i.Pe);return eg(o)&&eg(i.Pe)?YR(a):QR(i.serializer,a)}(t,e)}function gO(t,e,n){return t instanceof io?ZR(t,e):t instanceof so?eA(t,e):n}function JR(t,e){return t instanceof La?function(r){return eg(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Va extends af{}class io extends af{constructor(e){super(),this.elements=e}}function ZR(t,e){const n=tA(e);for(const r of t.elements)n.some(i=>Cr(i,r))||n.push(r);return{arrayValue:{values:n}}}class so extends af{constructor(e){super(),this.elements=e}}function eA(t,e){let n=tA(e);for(const r of t.elements)n=n.filter(i=>!Cr(i,r));return{arrayValue:{values:n}}}class La extends af{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function $E(t){return Ye(t.integerValue||t.doubleValue)}function tA(t){return qu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class dc{constructor(e,n){this.field=e,this.transform=n}}function _O(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof io&&i instanceof io||r instanceof so&&i instanceof so?Na(r.elements,i.elements,Cr):r instanceof La&&i instanceof La?Cr(r.Pe,i.Pe):r instanceof Va&&i instanceof Va}(t.transform,e.transform)}class yO{constructor(e,n){this.version=e,this.transformResults=n}}class Me{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Me}static exists(e){return new Me(void 0,e)}static updateTime(e){return new Me(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lh(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class lf{}function nA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new rl(t.key,Me.none()):new nl(t.key,t.data,Me.none());{const n=t.data,r=Nt.empty();let i=new Re(Le.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ui(t.key,r,new gn(i.toArray()),Me.none())}}function vO(t,e,n){t instanceof nl?function(i,s,o){const a=i.value.clone(),l=GE(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ui?function(i,s,o){if(!Lh(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=GE(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(rA(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function hu(t,e,n,r){return t instanceof nl?function(s,o,a,l){if(!Lh(s.precondition,o))return a;const c=s.value.clone(),h=WE(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ui?function(s,o,a,l){if(!Lh(s.precondition,o))return a;const c=WE(s.fieldTransforms,l,o),h=o.data;return h.setAll(rA(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Lh(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function wO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=JR(r.transform,i||null);s!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,s))}return n||null}function qE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Na(r,i,(s,o)=>_O(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class nl extends lf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ui extends lf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function rA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function GE(t,e,n){const r=new Map;Z(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,gO(o,a,n[i]))}return r}function WE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,mO(s,o,e))}return r}class rl extends lf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class H_ extends lf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class K_{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&vO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=hu(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=hu(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=KR();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=nA(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&Na(this.mutations,e.mutations,(n,r)=>qE(n,r))&&Na(this.baseMutations,e.baseMutations,(n,r)=>qE(n,r))}}class Q_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Z(e.mutations.length===r.length);let i=function(){return dO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Q_(e,n,r,i)}}/**
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
 */class Y_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class EO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var at,_e;function iA(t){switch(t){default:return Y();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function sA(t){if(t===void 0)return rt("GRPC error has no .code"),L.UNKNOWN;switch(t){case at.OK:return L.OK;case at.CANCELLED:return L.CANCELLED;case at.UNKNOWN:return L.UNKNOWN;case at.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case at.INTERNAL:return L.INTERNAL;case at.UNAVAILABLE:return L.UNAVAILABLE;case at.UNAUTHENTICATED:return L.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case at.NOT_FOUND:return L.NOT_FOUND;case at.ALREADY_EXISTS:return L.ALREADY_EXISTS;case at.PERMISSION_DENIED:return L.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case at.ABORTED:return L.ABORTED;case at.OUT_OF_RANGE:return L.OUT_OF_RANGE;case at.UNIMPLEMENTED:return L.UNIMPLEMENTED;case at.DATA_LOSS:return L.DATA_LOSS;default:return Y()}}(_e=at||(at={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function oA(){return new TextEncoder}/**
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
 */const IO=new qs([4294967295,4294967295],0);function HE(t){const e=oA().encode(t),n=new cR;return n.update(e),new Uint8Array(n.digest())}function KE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new qs([n,r],0),new qs([i,s],0)]}class X_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ql(`Invalid padding: ${n}`);if(r<0)throw new Ql(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ql(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ql(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=qs.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(qs.fromNumber(r)));return i.compare(IO)===1&&(i=new qs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=HE(e),[r,i]=KE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new X_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=HE(e),[r,i]=KE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ql extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class fc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,pc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new fc(ee.min(),i,new ke(se),_n(),oe())}}class pc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new pc(r,n,oe(),oe(),oe())}}/**
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
 */class Mh{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class aA{constructor(e,n){this.targetId=e,this.me=n}}class lA{constructor(e,n,r=gt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class QE{constructor(){this.fe=0,this.ge=XE(),this.pe=gt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=oe(),n=oe(),r=oe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new pc(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=XE()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Z(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class TO{constructor(e){this.Le=e,this.Be=new Map,this.ke=_n(),this.qe=YE(),this.Qe=new ke(se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(yd(s))if(r===0){const o=new K(s.path);this.Ue(n,o,Ne.newNoDocument(o,ee.min()))}else Z(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ji(r).toUint8Array()}catch(l){if(l instanceof NR)return lr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new X_(o,i,s)}catch(l){return lr(l instanceof Ql?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&yd(a.target)){const l=new K(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Ne.newNoDocument(l,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=oe();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new fc(e,n,this.Qe,this.ke,r);return this.ke=_n(),this.qe=YE(),this.Qe=new ke(se),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new QE,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Re(se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new QE),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function YE(){return new ke(K.comparator)}function XE(){return new ke(K.comparator)}const SO={asc:"ASCENDING",desc:"DESCENDING"},RO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},AO={and:"AND",or:"OR"};class CO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function sg(t,e){return t.useProto3Json||lc(e)?e:{value:e}}function Ma(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function PO(t,e){return Ma(t,e.toTimestamp())}function it(t){return Z(!!t),ee.fromTimestamp(function(n){const r=ni(n);return new Fe(r.seconds,r.nanos)}(t))}function J_(t,e){return og(t,e).canonicalString()}function og(t,e){const n=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function cA(t){const e=fe.fromString(t);return Z(wA(e)),e}function Wu(t,e){return J_(t.databaseId,e.path)}function Rr(t,e){const n=cA(e);if(n.get(1)!==t.databaseId.projectId)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(fA(n))}function hA(t,e){return J_(t.databaseId,e)}function dA(t){const e=cA(t);return e.length===4?fe.emptyPath():fA(e)}function ag(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fA(t){return Z(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function JE(t,e,n){return{name:Wu(t,e),fields:n.value.mapValue.fields}}function pA(t,e,n){const r=Rr(t,e.name),i=it(e.updateTime),s=e.createTime?it(e.createTime):ee.min(),o=new Nt({mapValue:{fields:e.fields}}),a=Ne.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function kO(t,e){return"found"in e?function(r,i){Z(!!i.found),i.found.name,i.found.updateTime;const s=Rr(r,i.found.name),o=it(i.found.updateTime),a=i.found.createTime?it(i.found.createTime):ee.min(),l=new Nt({mapValue:{fields:i.found.fields}});return Ne.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){Z(!!i.missing),Z(!!i.readTime);const s=Rr(r,i.missing),o=it(i.readTime);return Ne.newNoDocument(s,o)}(t,e):Y()}function xO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Z(h===void 0||typeof h=="string"),gt.fromBase64String(h||"")):(Z(h===void 0||h instanceof Buffer||h instanceof Uint8Array),gt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?L.UNKNOWN:sA(c.code);return new B(h,c.message||"")}(o);n=new lA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Rr(t,r.document.name),s=it(r.document.updateTime),o=r.document.createTime?it(r.document.createTime):ee.min(),a=new Nt({mapValue:{fields:r.document.fields}}),l=Ne.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Mh(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Rr(t,r.document),s=r.readTime?it(r.readTime):ee.min(),o=Ne.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Mh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Rr(t,r.document),s=r.removedTargetIds||[];n=new Mh([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new EO(i,s),a=r.targetId;n=new aA(a,o)}}return n}function Hu(t,e){let n;if(e instanceof nl)n={update:JE(t,e.key,e.value)};else if(e instanceof rl)n={delete:Wu(t,e.key)};else if(e instanceof ui)n={update:JE(t,e.key,e.data),updateMask:LO(e.fieldMask)};else{if(!(e instanceof H_))return Y();n={verify:Wu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Va)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof io)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof so)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof La)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:PO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function lg(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Me.updateTime(it(s.updateTime)):s.exists!==void 0?Me.exists(s.exists):Me.none()}(e.currentDocument):Me.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)Z(a.setToServerValue==="REQUEST_TIME"),l=new Va;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];l=new io(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];l=new so(h)}else"increment"in a?l=new La(o,a.increment):Y();const c=Le.fromServerFormat(a.fieldPath);return new dc(c,l)}(t,i)):[];if(e.update){e.update.name;const i=Rr(t,e.update.name),s=new Nt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const c=l.fieldPaths||[];return new gn(c.map(h=>Le.fromServerFormat(h)))}(e.updateMask);return new ui(i,s,o,n,r)}return new nl(i,s,n,r)}if(e.delete){const i=Rr(t,e.delete);return new rl(i,n)}if(e.verify){const i=Rr(t,e.verify);return new H_(i,n)}return Y()}function bO(t,e){return t&&t.length>0?(Z(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?it(i.updateTime):it(s);return o.isEqual(ee.min())&&(o=it(s)),new yO(o,i.transformResults||[])}(n,e))):[]}function mA(t,e){return{documents:[hA(t,e.path)]}}function gA(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=hA(t,i);const s=function(c){if(c.length!==0)return vA(Te.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:Wo(m.field),direction:DO(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=sg(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function _A(t){let e=dA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Z(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const m=yA(f);return m instanceof Te&&q_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(S){return new Gu(Ho(S.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,lc(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(f){const m=!!f.before,v=f.values||[];return new ts(v,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,v=f.values||[];return new ts(v,m)}(n.endAt)),zR(e,i,o,s,a,"F",l,c)}function NO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function yA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ho(n.unaryFilter.field);return pe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ho(n.unaryFilter.field);return pe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ho(n.unaryFilter.field);return pe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ho(n.unaryFilter.field);return pe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return pe.create(Ho(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Te.create(n.compositeFilter.filters.map(r=>yA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function DO(t){return SO[t]}function OO(t){return RO[t]}function VO(t){return AO[t]}function Wo(t){return{fieldPath:t.canonicalString()}}function Ho(t){return Le.fromServerFormat(t.fieldPath)}function vA(t){return t instanceof pe?function(n){if(n.op==="=="){if(VE(n.value))return{unaryFilter:{field:Wo(n.field),op:"IS_NAN"}};if(OE(n.value))return{unaryFilter:{field:Wo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(VE(n.value))return{unaryFilter:{field:Wo(n.field),op:"IS_NOT_NAN"}};if(OE(n.value))return{unaryFilter:{field:Wo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wo(n.field),op:OO(n.op),value:n.value}}}(t):t instanceof Te?function(n){const r=n.getFilters().map(i=>vA(i));return r.length===1?r[0]:{compositeFilter:{op:VO(n.op),filters:r}}}(t):Y()}function LO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function wA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class $r{constructor(e,n,r,i,s=ee.min(),o=ee.min(),a=gt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new $r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class EA{constructor(e){this.ct=e}}function MO(t,e){let n;if(e.document)n=pA(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=K.fromSegments(e.noDocument.path),i=ao(e.noDocument.readTime);n=Ne.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return Y();{const r=K.fromSegments(e.unknownDocument.path),i=ao(e.unknownDocument.version);n=Ne.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new Fe(i[0],i[1]);return ee.fromTimestamp(s)}(e.readTime)),n}function ZE(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Ed(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Wu(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Ma(s,o.version.toTimestamp()),createTime:Ma(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:oo(e.version)};else{if(!e.isUnknownDocument())return Y();r.unknownDocument={path:n.path.toArray(),version:oo(e.version)}}return r}function Ed(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function oo(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ao(t){const e=new Fe(t.seconds,t.nanoseconds);return ee.fromTimestamp(e)}function bs(t,e){const n=(e.baseMutations||[]).map(s=>lg(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>lg(t.ct,s)),i=Fe.fromMillis(e.localWriteTimeMs);return new K_(e.batchId,i,n,r)}function Yl(t){const e=ao(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?ao(t.lastLimboFreeSnapshotVersion):ee.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return Z(s.documents.length===1),nn(tl(dA(s.documents[0])))}(t.query):function(s){return nn(_A(s))}(t.query),new $r(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,gt.fromBase64String(t.resumeToken))}function IA(t,e){const n=oo(e.snapshotVersion),r=oo(e.lastLimboFreeSnapshotVersion);let i;i=yd(e.target)?mA(t.ct,e.target):gA(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ro(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Z_(t){const e=_A({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wd(e,e.limit,"L"):e}function Vp(t,e){return new Y_(e.largestBatchId,lg(t.ct,e.overlayMutation))}function eI(t,e){const n=e.path.lastSegment();return[t,tn(e.path.popLast()),n]}function tI(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:oo(r.readTime),documentKey:tn(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class FO{getBundleMetadata(e,n){return nI(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:ao(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return nI(e).put(function(i){return{bundleId:i.id,createTime:oo(it(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return rI(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:Z_(s.bundledQuery),readTime:ao(s.readTime)}}(r)})}saveNamedQuery(e,n){return rI(e).put(function(i){return{name:i.name,readTime:oo(it(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function nI(t){return Rt(t,"bundles")}function rI(t){return Rt(t,"namedQueries")}/**
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
 */class uf{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new uf(e,r)}getOverlay(e,n){return Dl(e).get(eI(this.userId,n)).next(r=>r?Vp(this.serializer,r):null)}getOverlays(e,n){const r=wr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Y_(n,o);i.push(this.ht(e,a))}),O.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(tn(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Dl(e).j("collectionPathOverlayIndex",a))}),O.waitFor(s)}getOverlaysForCollection(e,n,r){const i=wr(),s=tn(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Dl(e).U("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const c=Vp(this.serializer,l);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=wr();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Dl(e).J({index:"collectionGroupOverlayIndex",range:a},(l,c,h)=>{const f=Vp(this.serializer,c);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):h.done()}).next(()=>s)}ht(e,n){return Dl(e).put(function(i,s,o){const[a,l,c]=eI(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Hu(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function Dl(t){return Rt(t,"documentOverlays")}/**
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
 */class Ns{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(Ye(e.integerValue));else if("doubleValue"in e){const r=Ye(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),Bu(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Et(n,20),typeof r=="string"&&(r=ni(r)),n.At(`${r.seconds||""}`),n.dt(r.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(Ji(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?DR(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):Y()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),K.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}Ns.bt=new Ns;function UO(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function iI(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=UO(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class jO{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ct(r.value),r=n.next();this.vt()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=n.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Lt(e){const n=this.Bt(e),r=iI(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Bt(e),r=iI(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Bt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ct(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class BO{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Lt(e)}Tt(){this.Gt.Qt()}}class zO{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class Ol{constructor(){this.Gt=new jO,this.zt=new BO(this.Gt),this.jt=new zO(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
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
 */class Ds{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Ds(this.indexId,this.documentKey,this.arrayValue,r)}}function Ii(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=sI(t.arrayValue,e.arrayValue),n!==0?n:(n=sI(t.directionalValue,e.directionalValue),n!==0?n:K.comparator(t.documentKey,e.documentKey)))}function sI(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class oI{constructor(e){this.Yt=new Re((n,r)=>Le.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if(Z(e.collectionGroup===this.collectionId),this.en)return!1;const n=Xm(e);if(n!==void 0&&!this.nn(n))return!1;const r=Ps(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Yt.size>0){const a=this.Yt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.rn(a,l)||!this.sn(this.Zt[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}on(){if(this.en)return null;let e=new Re(Le.comparator);const n=[];for(const r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Nh(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Nh(r.field,0))}for(const r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Nh(r.field,r.dir==="asc"?0:1)));return new _d(_d.UNKNOWN_ID,this.collectionId,n,ju.empty())}nn(e){for(const n of this.Xt)if(this.rn(n,e))return!0;return!1}rn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function TA(t){var e,n;if(Z(t instanceof pe||t instanceof Te),t instanceof pe){if(t instanceof BR){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>pe.create(t.field,"==",s)))||[];return Te.create(i,"or")}return t}const r=t.filters.map(i=>TA(i));return Te.create(r,t.op)}function $O(t){if(t.getFilters().length===0)return[];const e=hg(TA(t));return Z(SA(e)),ug(e)||cg(e)?[e]:e.getFilters()}function ug(t){return t instanceof pe}function cg(t){return t instanceof Te&&q_(t)}function SA(t){return ug(t)||cg(t)||function(n){if(n instanceof Te&&tg(n)){for(const r of n.getFilters())if(!ug(r)&&!cg(r))return!1;return!0}return!1}(t)}function hg(t){if(Z(t instanceof pe||t instanceof Te),t instanceof pe)return t;if(t.filters.length===1)return hg(t.filters[0]);const e=t.filters.map(r=>hg(r));let n=Te.create(e,t.op);return n=Id(n),SA(n)?n:(Z(n instanceof Te),Z(Oa(n)),Z(n.filters.length>1),n.filters.reduce((r,i)=>ey(r,i)))}function ey(t,e){let n;return Z(t instanceof pe||t instanceof Te),Z(e instanceof pe||e instanceof Te),n=t instanceof pe?e instanceof pe?function(i,s){return Te.create([i,s],"and")}(t,e):aI(t,e):e instanceof pe?aI(e,t):function(i,s){if(Z(i.filters.length>0&&s.filters.length>0),Oa(i)&&Oa(s))return FR(i,s.getFilters());const o=tg(i)?i:s,a=tg(i)?s:i,l=o.filters.map(c=>ey(c,a));return Te.create(l,"or")}(t,e),Id(n)}function aI(t,e){if(Oa(e))return FR(e,t.getFilters());{const n=e.filters.map(r=>ey(t,r));return Te.create(n,"or")}}function Id(t){if(Z(t instanceof pe||t instanceof Te),t instanceof pe)return t;const e=t.getFilters();if(e.length===1)return Id(e[0]);if(LR(t))return t;const n=e.map(i=>Id(i)),r=[];return n.forEach(i=>{i instanceof pe?r.push(i):i instanceof Te&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Te.create(r,t.op)}/**
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
 */class qO{constructor(){this._n=new ty}addToCollectionParentIndex(e,n){return this._n.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(bn.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(bn.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class ty{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Re(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Re(fe.comparator)).toArray()}}/**
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
 */const lh=new Uint8Array(0);class GO{constructor(e,n){this.databaseId=n,this.an=new ty,this.un=new hs(r=>ro(r),(r,i)=>uc(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.an.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.an.add(n)});const s={collectionId:r,parent:tn(i)};return lI(e).put(s)}return O.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[vR(n),""],!1,!0);return lI(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(vr(o.parent))}return r})}addFieldIndex(e,n){const r=Vl(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Mo(e);return s.next(a=>{o.put(tI(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Vl(e),i=Mo(e),s=Lo(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Vl(e),r=Lo(e),i=Mo(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return O.forEach(this.cn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new oI(r).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Lo(e);let i=!0;const s=new Map;return O.forEach(this.cn(n),o=>this.ln(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=oe();const a=[];return O.forEach(s,(l,c)=>{z("IndexedDbIndexManager",`Using index ${function(I){return`id=${I.indexId}|cg=${I.collectionGroup}|f=${I.fields.map(b=>`${b.fieldPath}:${b.kind}`).join(",")}`}(l)} to execute ${ro(n)}`);const h=function(I,b){const F=Xm(b);if(F===void 0)return null;for(const U of vd(I,F.fieldPath))switch(U.op){case"array-contains-any":return U.value.arrayValue.values||[];case"array-contains":return[U.value]}return null}(c,l),f=function(I,b){const F=new Map;for(const U of Ps(b))for(const T of vd(I,U.fieldPath))switch(T.op){case"==":case"in":F.set(U.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return F.set(U.fieldPath.canonicalString(),T.value),Array.from(F.values())}return null}(c,l),m=function(I,b){const F=[];let U=!0;for(const T of Ps(b)){const y=T.kind===0?jE(I,T.fieldPath,I.startAt):BE(I,T.fieldPath,I.startAt);F.push(y.value),U&&(U=y.inclusive)}return new ts(F,U)}(c,l),v=function(I,b){const F=[];let U=!0;for(const T of Ps(b)){const y=T.kind===0?BE(I,T.fieldPath,I.endAt):jE(I,T.fieldPath,I.endAt);F.push(y.value),U&&(U=y.inclusive)}return new ts(F,U)}(c,l),S=this.hn(l,c,m),P=this.hn(l,c,v),x=this.Pn(l,c,f),w=this.In(l.indexId,h,S,m.inclusive,P,v.inclusive,x);return O.forEach(w,E=>r.G(E,n.limit).next(I=>{I.forEach(b=>{const F=K.fromSegments(b.documentKey);o.has(F)||(o=o.add(F),a.push(F))})}))}).next(()=>a)}return O.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=$O(Te.create(e.filters,"and")).map(r=>rg(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}In(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),c=l/(n!=null?n.length:1),h=[];for(let f=0;f<l;++f){const m=n?this.Tn(n[f/c]):lh,v=this.En(e,m,r[f%c],i),S=this.dn(e,m,s[f%c],o),P=a.map(x=>this.En(e,m,x,!0));h.push(...this.createRange(v,S,P))}return h}En(e,n,r,i){const s=new Ds(e,K.empty(),n,r);return i?s:s.Jt()}dn(e,n,r,i){const s=new Ds(e,K.empty(),n,r);return i?s.Jt():s}ln(e,n){const r=new oI(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return O.forEach(i,s=>this.ln(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let c=new Re(Le.comparator),h=!1;for(const f of l.filters)for(const m of f.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?h=!0:c=c.add(m.field));for(const f of l.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(h?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}An(e,n){const r=new Ol;for(const i of Ps(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);Ns.bt.Pt(s,o)}return r.Wt()}Tn(e){const n=new Ol;return Ns.bt.Pt(e,n.Ht(0)),n.Wt()}Rn(e,n){const r=new Ol;return Ns.bt.Pt(no(this.databaseId,n),r.Ht(function(s){const o=Ps(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}Pn(e,n,r){if(r===null)return[];let i=[];i.push(new Ol);let s=0;for(const o of Ps(e)){const a=r[s++];for(const l of i)if(this.Vn(n,o.fieldPath)&&qu(a))i=this.mn(i,o,a);else{const c=l.Ht(o.kind);Ns.bt.Pt(a,c)}}return this.fn(i)}hn(e,n,r){return this.Pn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}mn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Ol;l.seed(a.Wt()),Ns.bt.Pt(o,l.Ht(n.kind)),s.push(l)}return s}Vn(e,n){return!!e.filters.find(r=>r instanceof pe&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Vl(e),i=Mo(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return O.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(h,f){const m=f?new ju(f.sequenceNumber,new bn(ao(f.readTime),new K(vr(f.documentKey)),f.largestBatchId)):ju.empty(),v=h.fields.map(([S,P])=>new Nh(Le.fromServerFormat(S),P));return new _d(h.indexId,h.collectionGroup,v,m)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:se(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Vl(e),s=Mo(e);return this.gn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>O.forEach(a,l=>s.put(tI(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return O.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?O.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),O.forEach(a,l=>this.pn(e,i,l).next(c=>{const h=this.yn(s,l);return c.isEqual(h)?O.resolve():this.wn(e,s,l,c,h)}))))})}Sn(e,n,r,i){return Lo(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,n.key),documentKey:n.key.path.toArray()})}bn(e,n,r,i){return Lo(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,n.key),n.key.path.toArray()])}pn(e,n,r){const i=Lo(e);let s=new Re(Ii);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,n)])},(o,a)=>{s=s.add(new Ds(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}yn(e,n){let r=new Re(Ii);const i=this.An(n,e);if(i==null)return r;const s=Xm(n);if(s!=null){const o=e.data.field(s.fieldPath);if(qu(o))for(const a of o.arrayValue.values||[])r=r.add(new Ds(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new Ds(n.indexId,e.key,lh,i));return r}wn(e,n,r,i,s){z("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,c,h,f,m){const v=l.getIterator(),S=c.getIterator();let P=Vo(v),x=Vo(S);for(;P||x;){let w=!1,E=!1;if(P&&x){const I=h(P,x);I<0?E=!0:I>0&&(w=!0)}else P!=null?E=!0:w=!0;w?(f(x),x=Vo(S)):E?(m(P),P=Vo(v)):(P=Vo(v),x=Vo(S))}}(i,s,Ii,a=>{o.push(this.Sn(e,n,r,a))},a=>{o.push(this.bn(e,n,r,a))}),O.waitFor(o)}gn(e){let n=1;return Mo(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Ii(o,a)).filter((o,a,l)=>!a||Ii(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Ii(o,e),l=Ii(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&l<0)i.push(o),i.push(o.Jt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,lh,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,lh,[]];s.push(IDBKeyRange.bound(a,l))}return s}Dn(e,n){return Ii(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(uI)}getMinOffset(e,n){return O.mapArray(this.cn(n),r=>this.ln(e,r).next(i=>i||Y())).next(uI)}}function lI(t){return Rt(t,"collectionParents")}function Lo(t){return Rt(t,"indexEntries")}function Vl(t){return Rt(t,"indexConfiguration")}function Mo(t){return Rt(t,"indexState")}function uI(t){Z(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;B_(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new bn(e.readTime,e.documentKey,n)}/**
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
 */const cI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class cn{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new cn(e,cn.DEFAULT_COLLECTION_PERCENTILE,cn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function RA(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.J({range:o},(h,f,m)=>(a++,m.delete()));s.push(l.next(()=>{Z(a===1)}));const c=[];for(const h of n.mutations){const f=AR(e,h.key.path,n.batchId);s.push(i.delete(f)),c.push(h.key)}return O.waitFor(s).next(()=>c)}function Td(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw Y();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */cn.DEFAULT_COLLECTION_PERCENTILE=10,cn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,cn.DEFAULT=new cn(41943040,cn.DEFAULT_COLLECTION_PERCENTILE,cn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),cn.DISABLED=new cn(-1,0,0);class cf{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Cn={}}static lt(e,n,r,i){Z(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new cf(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ti(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Ko(e),o=Ti(e);return o.add({}).next(a=>{Z(typeof a=="number");const l=new K_(a,n,r,i),c=function(v,S,P){const x=P.baseMutations.map(E=>Hu(v.ct,E)),w=P.mutations.map(E=>Hu(v.ct,E));return{userId:S,batchId:P.batchId,localWriteTimeMs:P.localWriteTime.toMillis(),baseMutations:x,mutations:w}}(this.serializer,this.userId,l),h=[];let f=new Re((m,v)=>se(m.canonicalString(),v.canonicalString()));for(const m of i){const v=AR(this.userId,m.key.path,a);f=f.add(m.key.path.popLast()),h.push(o.put(c)),h.push(s.put(v,DD))}return f.forEach(m=>{h.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Cn[a]=l.keys()}),O.waitFor(h).next(()=>l)})}lookupMutationBatch(e,n){return Ti(e).get(n).next(r=>r?(Z(r.userId===this.userId),bs(this.serializer,r)):null)}vn(e,n){return this.Cn[n]?O.resolve(this.Cn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Cn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Ti(e).J({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(Z(a.batchId>=r),s=bs(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Ti(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ti(e).U("userMutationsIndex",n).next(r=>r.map(i=>bs(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Dh(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Ko(e).J({range:i},(o,a,l)=>{const[c,h,f]=o,m=vr(h);if(c===this.userId&&n.path.isEqual(m))return Ti(e).get(f).next(v=>{if(!v)throw Y();Z(v.userId===this.userId),s.push(bs(this.serializer,v))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Re(se);const i=[];return n.forEach(s=>{const o=Dh(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=Ko(e).J({range:a},(c,h,f)=>{const[m,v,S]=c,P=vr(v);m===this.userId&&s.path.isEqual(P)?r=r.add(S):f.done()});i.push(l)}),O.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Dh(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Re(se);return Ko(e).J({range:o},(l,c,h)=>{const[f,m,v]=l,S=vr(m);f===this.userId&&r.isPrefixOf(S)?S.length===i&&(a=a.add(v)):h.done()}).next(()=>this.Fn(e,a))}Fn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Ti(e).get(s).next(o=>{if(o===null)throw Y();Z(o.userId===this.userId),r.push(bs(this.serializer,o))}))}),O.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return RA(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Mn(n.batchId)}),O.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return O.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Ko(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=vr(s[1]);i.push(l)}else a.done()}).next(()=>{Z(i.length===0)})})}containsKey(e,n){return AA(e,this.userId,n)}xn(e){return CA(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function AA(t,e,n){const r=Dh(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Ko(t).J({range:s,H:!0},(a,l,c)=>{const[h,f,m]=a;h===e&&f===i&&(o=!0),c.done()}).next(()=>o)}function Ti(t){return Rt(t,"mutations")}function Ko(t){return Rt(t,"documentMutations")}function CA(t){return Rt(t,"mutationQueues")}/**
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
 */class lo{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new lo(0)}static Ln(){return new lo(-1)}}/**
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
 */class WO{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Bn(e).next(n=>{const r=new lo(n.highestTargetId);return n.highestTargetId=r.next(),this.kn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(n=>ee.fromTimestamp(new Fe(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.kn(e,i)))}addTargetData(e,n){return this.qn(e,n).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.Qn(n,r),this.kn(e,r))))}updateTargetData(e,n){return this.qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Fo(e).delete(n.targetId)).next(()=>this.Bn(e)).next(r=>(Z(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Fo(e).J((o,a)=>{const l=Yl(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>O.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Fo(e).J((r,i)=>{const s=Yl(i);n(s)})}Bn(e){return hI(e).get("targetGlobalKey").next(n=>(Z(n!==null),n))}kn(e,n){return hI(e).put("targetGlobalKey",n)}qn(e,n){return Fo(e).put(IA(this.serializer,n))}Qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=ro(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Fo(e).J({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const c=Yl(a);uc(n,c.target)&&(s=c,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=xi(e);return n.forEach(o=>{const a=tn(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),O.waitFor(i)}removeMatchingKeys(e,n,r){const i=xi(e);return O.forEach(n,s=>{const o=tn(s.path);return O.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=xi(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=xi(e);let s=oe();return i.J({range:r,H:!0},(o,a,l)=>{const c=vr(o[1]),h=new K(c);s=s.add(h)}).next(()=>s)}containsKey(e,n){const r=tn(n.path),i=IDBKeyRange.bound([r],[vR(r)],!1,!0);let s=0;return xi(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],l,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return Fo(e).get(n).next(r=>r?Yl(r):null)}}function Fo(t){return Rt(t,"targets")}function hI(t){return Rt(t,"targetGlobal")}function xi(t){return Rt(t,"targetDocuments")}/**
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
 */function dI([t,e],[n,r]){const i=se(t,n);return i===0?se(e,r):i}class HO{constructor(e){this.Kn=e,this.buffer=new Re(dI),this.$n=0}Un(){return++this.$n}Wn(e){const n=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();dI(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class KO{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){z("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){cs(n)?z("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await us(n)}await this.zn(3e5)})}}class QO{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.Hn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(mn.oe);const r=new HO(n);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(cI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),cI):this.Yn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,n){let r,i,s,o,a,l,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),qo()<=le.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(c-l)+`ms
Total Duration: ${c-h}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function YO(t,e){return new QO(t,e)}/**
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
 */class XO{constructor(e,n){this.db=e,this.garbageCollector=YO(this,n)}Hn(e){const n=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Zn(e){let n=0;return this.Jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Jn(e,n){return this.Xn(e,(r,i)=>n(i))}addReference(e,n,r){return uh(e,r)}removeReference(e,n,r){return uh(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return uh(e,n)}er(e,n){return function(i,s){let o=!1;return CA(i).Y(a=>AA(i,a,s).next(l=>(l&&(o=!0),O.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,a)=>{if(a<=n){const l=this.er(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,ee.min()),xi(e).delete(function(f){return[0,tn(f.path)]}(o))))});i.push(l)}}).next(()=>O.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return uh(e,n)}Xn(e,n){const r=xi(e);let i,s=mn.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:c})=>{o===0?(s!==mn.oe&&n(new K(vr(i)),s),s=c,i=l):s=mn.oe}).next(()=>{s!==mn.oe&&n(new K(vr(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function uh(t,e){return xi(t).put(function(r,i){return{targetId:0,path:tn(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class PA{constructor(){this.changes=new hs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ne.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class JO{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Ss(e).put(r)}removeEntry(e,n,r){return Ss(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Ed(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.tr(e,r)))}getEntry(e,n){let r=Ne.newInvalidDocument(n);return Ss(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Ll(n))},(i,s)=>{r=this.nr(n,s)}).next(()=>r)}rr(e,n){let r={size:0,document:Ne.newInvalidDocument(n)};return Ss(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Ll(n))},(i,s)=>{r={document:this.nr(n,s),size:Td(s)}}).next(()=>r)}getEntries(e,n){let r=_n();return this.ir(e,n,(i,s)=>{const o=this.nr(i,s);r=r.insert(i,o)}).next(()=>r)}sr(e,n){let r=_n(),i=new ke(K.comparator);return this.ir(e,n,(s,o)=>{const a=this.nr(s,o);r=r.insert(s,a),i=i.insert(s,Td(o))}).next(()=>({documents:r,_r:i}))}ir(e,n,r){if(n.isEmpty())return O.resolve();let i=new Re(mI);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(Ll(i.first()),Ll(i.last())),o=i.getIterator();let a=o.getNext();return Ss(e).J({index:"documentKeyIndex",range:s},(l,c,h)=>{const f=K.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&mI(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?h.$(Ll(a)):h.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),Ed(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ss(e).U(IDBKeyRange.bound(a,l,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let h=_n();for(const f of c){const m=this.nr(K.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);m.isFoundDocument()&&(hc(n,m)||i.has(m.key))&&(h=h.insert(m.key,m))}return h})}getAllFromCollectionGroup(e,n,r,i){let s=_n();const o=pI(n,r),a=pI(n,bn.max());return Ss(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,c,h)=>{const f=this.nr(K.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&h.done()}).next(()=>s)}newChangeBuffer(e){return new ZO(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return fI(e).get("remoteDocumentGlobalKey").next(n=>(Z(!!n),n))}tr(e,n){return fI(e).put("remoteDocumentGlobalKey",n)}nr(e,n){if(n){const r=MO(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(ee.min())))return r}return Ne.newInvalidDocument(e)}}function kA(t){return new JO(t)}class ZO extends PA{constructor(e,n){super(),this.ar=e,this.trackRemovals=n,this.ur=new hs(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Re((s,o)=>se(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ur.get(s);if(n.push(this.ar.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=ZE(this.ar.serializer,o);i=i.add(s.path.popLast());const c=Td(l);r+=c-a.size,n.push(this.ar.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=ZE(this.ar.serializer,o.convertToNoDocument(ee.min()));n.push(this.ar.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ar.updateMetadata(e,r)),O.waitFor(n)}getFromCache(e,n){return this.ar.rr(e,n).next(r=>(this.ur.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ar.sr(e,n).next(({documents:r,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function fI(t){return Rt(t,"remoteDocumentGlobal")}function Ss(t){return Rt(t,"remoteDocumentsV14")}function Ll(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function pI(t,e){const n=e.documentKey.path.toArray();return[t,Ed(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function mI(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=se(n[s],r[s]),i)return i;return i=se(n.length,r.length),i||(i=se(n[n.length-2],r[r.length-2]),i||se(n[n.length-1],r[r.length-1]))}/**
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
 */class eV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class xA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&hu(r.mutation,i,gn.empty(),Fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=wr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Kl();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=_n();const o=cu(),a=function(){return cu()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof ui)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),hu(h.mutation,c,h.mutation.getFieldMask(),Fe.now())):o.set(c.key,gn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new eV(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=cu();let i=new ke((o,a)=>o-a),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||gn.empty();h=a.applyToLocalView(c,h),r.set(l,h);const f=(i.get(a.batchId)||oe()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=KR();h.forEach(m=>{if(!s.has(m)){const v=nA(n.get(m),r.get(m));v!==null&&f.set(m,v),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):G_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(wr());let a=-1,l=s;return o.next(c=>O.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?O.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,oe())).next(h=>({batchId:a,changes:HR(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Kl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Kl();return this.indexManager.getCollectionParents(e,s).next(a=>O.forEach(a,l=>{const c=function(f,m){return new li(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Ne.newInvalidDocument(h)))});let a=Kl();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&hu(h.mutation,c,gn.empty(),Fe.now()),hc(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class tV{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return O.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:it(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:Z_(i.bundledQuery),readTime:it(i.readTime)}}(n)),O.resolve()}}/**
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
 */class nV{constructor(){this.overlays=new ke(K.comparator),this.hr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=wr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=wr(),s=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ke((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=wr(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=wr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return O.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Y_(n,r));let s=this.hr.get(n);s===void 0&&(s=oe(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class ny{constructor(){this.Pr=new Re(yt.Ir),this.Tr=new Re(yt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new yt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new yt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new K(new fe([])),r=new yt(n,e),i=new yt(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new K(new fe([])),r=new yt(n,e),i=new yt(n,e+1);let s=oe();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new yt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class yt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return K.comparator(e.key,n.key)||se(e.pr,n.pr)}static Er(e,n){return se(e.pr,n.pr)||K.comparator(e.key,n.key)}}/**
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
 */class rV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Re(yt.Ir)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new K_(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new yt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new yt(n,0),i=new yt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Re(se);return n.forEach(i=>{const s=new yt(i,0),o=new yt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),O.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new yt(new K(s),0);let a=new Re(se);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.pr)),!0)},o),O.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Z(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return O.forEach(n.mutations,i=>{const s=new yt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new yt(n,0),i=this.wr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class iV{constructor(e){this.vr=e,this.docs=function(){return new ke(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():Ne.newInvalidDocument(n))}getEntries(e,n){let r=_n();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ne.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=_n();const o=n.path,a=new K(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||B_(ER(h),r)<=0||(i.has(h.key)||hc(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Fr(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new sV(this)}getSize(e){return O.resolve(this.size)}}class sV extends PA{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class oV{constructor(e){this.persistence=e,this.Mr=new hs(n=>ro(n),uc),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ny,this.targetCount=0,this.Lr=lo.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),O.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new lo(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.qn(n),O.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.Nr.containsKey(n))}}/**
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
 */class bA{constructor(e,n){this.Br={},this.overlays={},this.kr=new mn(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new oV(this),this.indexManager=new qO,this.remoteDocumentCache=function(i){return new iV(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new EA(n),this.$r=new tV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new nV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new rV(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const i=new aV(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return O.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class aV extends TR{constructor(e){super(),this.currentSequenceNumber=e}}class hf{constructor(e){this.persistence=e,this.zr=new ny,this.jr=null}static Hr(e){return new hf(e)}get Jr(){if(this.jr)return this.jr;throw Y()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),O.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Jr,r=>{const i=K.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return O.or([()=>O.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class lV{constructor(e){this.serializer=e}O(e,n,r,i){const s=new sf("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",xE,{unique:!0}),l.createObjectStore("documentMutations")}(e),gI(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=O.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),gI(e)),o=o.next(()=>function(l){const c=l.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ee.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",h)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,c){return c.store("mutations").U().next(h=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",xE,{unique:!0});const f=c.store("mutations"),m=h.map(v=>f.put(v));return O.waitFor(m)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Xr(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(o=o.next(()=>this.ti(s))),r<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ri(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const c=l.createObjectStore("documentOverlays",{keyPath:GD});c.createIndex("collectionPathOverlayIndex",WD,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",HD,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const c=l.createObjectStore("remoteDocumentsV14",{keyPath:OD});c.createIndex("documentKeyIndex",VD),c.createIndex("collectionGroupIndex",LD)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:BD}).createIndex("sequenceNumberIndex",zD,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:$D}).createIndex("documentKeyIndex",qD,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),o}ei(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=Td(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>O.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>O.forEach(a,l=>{Z(l.userId===s.userId);const c=bs(this.serializer,l);return RA(e,s.userId,c).next(()=>{})}))}))}ti(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const l=new fe(o),c=function(f){return[0,tn(f)]}(l);s.push(n.get(c).next(h=>h?O.resolve():(f=>n.put({targetId:0,path:tn(f),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>O.waitFor(s))})}ni(e,n){e.createObjectStore("collectionParents",{keyPath:jD});const r=n.store("collectionParents"),i=new ty,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:tn(l)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const l=new fe(o);return s(l.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,l],c)=>{const h=vr(a);return s(h.popLast())}))}ri(e){const n=e.store("targets");return n.J((r,i)=>{const s=Yl(i),o=IA(this.serializer,s);return n.put(o)})}ii(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(f){return f.document?new K(fe.fromString(f.document.name).popFirst(5)):f.noDocument?K.fromSegments(f.noDocument.path):f.unknownDocument?K.fromSegments(f.unknownDocument.path):Y()}(o).path.toArray(),c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>O.waitFor(i))}si(e,n){const r=n.store("mutations"),i=kA(this.serializer),s=new bA(hf.Hr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(l=>{var c;let h=(c=a.get(l.userId))!==null&&c!==void 0?c:oe();bs(this.serializer,l).keys().forEach(f=>h=h.add(f)),a.set(l.userId,h)}),O.forEach(a,(l,c)=>{const h=new wt(c),f=uf.lt(this.serializer,h),m=s.getIndexManager(h),v=cf.lt(h,this.serializer,m,s.referenceDelegate);return new xA(i,v,f,m).recalculateAndSaveOverlaysForDocumentKeys(new Jm(n,mn.oe),l).next()})})}}function gI(t){t.createObjectStore("targetDocuments",{keyPath:FD}).createIndex("documentTargetsIndex",UD,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",MD,{unique:!0}),t.createObjectStore("targetGlobal")}const Lp="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ry{constructor(e,n,r,i,s,o,a,l,c,h,f=16){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.oi=s,this.window=o,this.document=a,this._i=c,this.ai=h,this.ui=f,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=m=>Promise.resolve(),!ry.D())throw new B(L.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new XO(this,i),this.Ti=n+"main",this.serializer=new EA(l),this.Ei=new Sr(this.Ti,this.ui,new lV(this.serializer)),this.Qr=new WO(this.referenceDelegate,this.serializer),this.remoteDocumentCache=kA(this.serializer),this.$r=new FO,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,h===!1&&rt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new B(L.FAILED_PRECONDITION,Lp);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new mn(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ch(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(n=>{n||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(n=>this.isPrimary&&!n?this.yi(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(cs(e))return z("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return z("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return Ml(e).get("owner").next(n=>O.resolve(this.Si(n)))}bi(e){return ch(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Rt(n,"clientMetadata");return r.U().next(i=>{const s=this.vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return O.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const n of e)this.di.removeItem(this.Fi(n.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?O.resolve(!0):Ml(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)){if(this.Si(n)&&this.networkEnabled)return!0;if(!this.Si(n)){if(!n.allowTabSynchronization)throw new B(L.FAILED_PRECONDITION,Lp);return!1}}return!(!this.networkEnabled||!this.inForeground)||ch(e).U().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&z("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Jm(e,mn.oe);return this.yi(n).next(()=>this.bi(n))}),this.Ei.close(),this.Li()}vi(e,n){return e.filter(r=>this.Ci(r.updateTimeMs,n)&&!this.Mi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>ch(e).U().next(n=>this.vi(n,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,n){return cf.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new GO(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return uf.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,n,r){z("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===16?QD:l===15?xR:l===14?kR:l===13?PR:l===12?KD:l===11?CR:void Y()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new Jm(a,this.kr?this.kr.next():mn.oe),n==="readwrite-primary"?this.gi(o).next(l=>!!l||this.pi(o)).next(l=>{if(!l)throw rt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new B(L.FAILED_PRECONDITION,IR);return r(o)}).next(l=>this.wi(o).next(()=>l)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return Ml(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)&&!this.Si(n)&&!(this.ai||this.allowTabSynchronization&&n.allowTabSynchronization))throw new B(L.FAILED_PRECONDITION,Lp)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ml(e).put("owner",n)}static D(){return Sr.D()}yi(e){const n=Ml(e);return n.get("owner").next(r=>this.Si(r)?(z("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):O.resolve())}Ci(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(rt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;XS()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var n;try{const r=((n=this.di)===null||n===void 0?void 0:n.getItem(this.Fi(e)))!==null;return z("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return rt("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){rt("Failed to set zombie client id.",e)}}Li(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ml(t){return Rt(t,"owner")}function ch(t){return Rt(t,"clientMetadata")}function iy(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class sy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=oe(),i=oe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new sy(e,n.fromCache,r,i)}}/**
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
 */class uV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class NA{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return XS()?8:SR(Ue())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new uV;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(qo()<=le.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Go(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),O.resolve()):(qo()<=le.DEBUG&&z("QueryEngine","Query:",Go(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(qo()<=le.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Go(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nn(n))):O.resolve())}ji(e,n){if(zE(n))return O.resolve(null);let r=nn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=wd(n,null,"F"),r=nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,wd(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,i){return zE(n)||i.isEqual(ee.min())?O.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?O.resolve(null):(qo()<=le.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Go(n)),this.es(e,o,n,wR(i,-1)).next(a=>a))})}Zi(e,n){let r=new Re(GR(e));return n.forEach((i,s)=>{hc(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return qo()<=le.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Go(n)),this.zi.getDocumentsMatchingQuery(e,n,bn.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class cV{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new ke(se),this.rs=new hs(s=>ro(s),uc),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xA(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function DA(t,e,n,r){return new cV(t,e,n,r)}async function OA(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=oe();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function hV(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const f=c.batch,m=f.keys();let v=O.resolve();return m.forEach(S=>{v=v.next(()=>h.getEntry(l,S)).next(P=>{const x=c.docVersions.get(S);Z(x!==null),P.version.compareTo(x)<0&&(f.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),h.addEntry(P)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=oe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function VA(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function dV(t,e){const n=Q(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(n.Qr.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,h.addedDocuments,f)));let v=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?v=v.withResumeToken(gt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):h.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(h.resumeToken,r)),i=i.insert(f,v),function(P,x,w){return P.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,v,h)&&a.push(n.Qr.updateTargetData(s,v))});let l=_n(),c=oe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(LA(s,o,e.documentUpdates).next(h=>{l=h.cs,c=h.ls})),!r.isEqual(ee.min())){const h=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return O.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.ns=i,s))}function LA(t,e,n){let r=oe(),i=oe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=_n();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ee.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:i}})}function fV(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Fa(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new $r(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Ua(t,e,n){const r=Q(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!cs(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Sd(t,e,n){const r=Q(t);let i=ee.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const f=Q(l),m=f.rs.get(h);return m!==void 0?O.resolve(f.ns.get(m)):f.Qr.getTargetData(c,h)}(r,o,nn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:oe())).next(a=>(UA(r,qR(e),a),{documents:a,hs:s})))}function MA(t,e){const n=Q(t),r=Q(n.Qr),i=n.ns.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function FA(t,e){const n=Q(t),r=n.ss.get(e)||ee.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.os.getAllFromCollectionGroup(i,e,wR(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(UA(n,e,i),i))}function UA(t,e,n){let r=t.ss.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}async function pV(t,e,n,r){const i=Q(t);let s=oe(),o=_n();for(const c of n){const h=e.Ps(c.metadata.name);c.document&&(s=s.add(h));const f=e.Is(c);f.setReadTime(e.Ts(c.metadata.readTime)),o=o.insert(h,f)}const a=i.os.newChangeBuffer({trackRemovals:!0}),l=await Fa(i,function(h){return nn(tl(fe.fromString(`__bundle__/docs/${h}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>LA(c,a,o).next(h=>(a.apply(c),h)).next(h=>i.Qr.removeMatchingKeysForTargetId(c,l.targetId).next(()=>i.Qr.addMatchingKeys(c,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,h.cs,h.ls)).next(()=>h.cs)))}async function mV(t,e,n=oe()){const r=await Fa(t,nn(Z_(e.bundledQuery))),i=Q(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=it(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const a=r.withResumeToken(gt.EMPTY_BYTE_STRING,o);return i.ns=i.ns.insert(a.targetId,a),i.Qr.updateTargetData(s,a).next(()=>i.Qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function _I(t,e){return`firestore_clients_${t}_${e}`}function yI(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Mp(t,e){return`firestore_targets_${t}_${e}`}class Rd{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Es(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new B(i.error.code,i.error.message))),o?new Rd(e,n,i.state,s):(rt("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class du{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Es(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new B(r.error.code,r.error.message))),s?new du(e,r.state,i):(rt("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ad{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=W_();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=RR(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Ad(e,s):(rt("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class oy{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new oy(n.clientId,n.onlineState):(rt("SharedClientState",`Failed to parse online state: ${e}`),null)}}class dg{constructor(){this.activeTargetIds=W_()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Fp{constructor(e,n,r,i,s){this.window=e,this.oi=n,this.persistenceKey=r,this.Vs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new ke(se),this.started=!1,this.ys=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=_I(this.persistenceKey,this.Vs),this.Ss=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new dg),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Fs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Vs)continue;const i=this.getItem(_I(this.persistenceKey,r));if(i){const s=Ad.Es(r,i);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const n=this.storage.getItem(this.vs);if(n){const r=this.xs(n);r&&this.Os(r)}for(const r of this.ys)this.gs(r);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let n=!1;return this.ps.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,n,r){this.Ls(e,n,r),this.Bs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Mp(this.persistenceKey,e));if(r){const i=du.Es(e,r);i&&(n=i.state)}}return this.ks.As(e),this.Ms(),n}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Mp(this.persistenceKey,e))}updateQueryState(e,n,r){this.qs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return z("SharedClientState","READ",e,n),n}setItem(e,n){z("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){z("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const n=e;if(n.storageArea===this.storage){if(z("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ws)return void rt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.bs.test(n.key)){if(n.newValue==null){const r=this.$s(n.key);return this.Us(r,null)}{const r=this.Ws(n.key,n.newValue);if(r)return this.Us(r.clientId,r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.Gs(n.key,n.newValue);if(r)return this.zs(r)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const r=this.js(n.key,n.newValue);if(r)return this.Hs(r)}}else if(n.key===this.vs){if(n.newValue!==null){const r=this.xs(n.newValue);if(r)return this.Os(r)}}else if(n.key===this.Ss){const r=function(s){let o=mn.oe;if(s!=null)try{const a=JSON.parse(s);Z(typeof a=="number"),o=a}catch(a){rt("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==mn.oe&&this.sequenceNumberHandler(r)}else if(n.key===this.Fs){const r=this.Js(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ys(i)))}}}else this.ys.push(n)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Ls(e,n,r){const i=new Rd(this.currentUser,e,n,r),s=yI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ds())}Bs(e){const n=yI(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Qs(e){const n={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(n))}qs(e,n,r){const i=Mp(this.persistenceKey,e),s=new du(e,n,r);this.setItem(i,s.ds())}Ks(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Fs,n)}$s(e){const n=this.bs.exec(e);return n?n[1]:null}Ws(e,n){const r=this.$s(e);return Ad.Es(r,n)}Gs(e,n){const r=this.Ds.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Rd.Es(new wt(s),i,n)}js(e,n){const r=this.Cs.exec(e),i=Number(r[1]);return du.Es(i,n)}xs(e){return oy.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);z("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,n){const r=n?this.ps.insert(e,n):this.ps.remove(e),i=this.Ns(this.ps),s=this.Ns(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.eo(o,a).then(()=>{this.ps=r})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let n=W_();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class jA{constructor(){this.no=new dg,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new dg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class gV{io(e){}shutdown(){}}/**
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
 */class vI{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let hh=null;function Up(){return hh===null?hh=function(){return 268435456+Math.round(2147483648*Math.random())}():hh++,"0x"+hh.toString(16)}/**
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
 */const _V={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class yV{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const Bt="WebChannelConnection";class vV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Up(),l=this.vo(n,r.toUriEncodedString());z("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,l,c,i).then(h=>(z("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw lr("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+el}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=_V[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Up();return new Promise((o,a)=>{const l=new hR;l.setWithCredentials(!0),l.listenOnce(fR.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case bh.NO_ERROR:const h=l.getResponseJson();z(Bt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case bh.TIMEOUT:z(Bt,`RPC '${e}' ${s} timed out`),a(new B(L.DEADLINE_EXCEEDED,"Request time out"));break;case bh.HTTP_ERROR:const f=l.getStatus();if(z(Bt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const S=function(x){const w=x.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(w)>=0?w:L.UNKNOWN}(v.status);a(new B(S,v.message))}else a(new B(L.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new B(L.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{z(Bt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);z(Bt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Up(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=gR(),a=mR(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new dR({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");z(Bt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);let m=!1,v=!1;const S=new yV({lo:x=>{v?z(Bt,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(m||(z(Bt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),z(Bt,`RPC '${e}' stream ${i} sending:`,x),f.send(x))},ho:()=>f.close()}),P=(x,w,E)=>{x.listen(w,I=>{try{E(I)}catch(b){setTimeout(()=>{throw b},0)}})};return P(f,Hl.EventType.OPEN,()=>{v||(z(Bt,`RPC '${e}' stream ${i} transport opened.`),S.mo())}),P(f,Hl.EventType.CLOSE,()=>{v||(v=!0,z(Bt,`RPC '${e}' stream ${i} transport closed`),S.po())}),P(f,Hl.EventType.ERROR,x=>{v||(v=!0,lr(Bt,`RPC '${e}' stream ${i} transport errored:`,x),S.po(new B(L.UNAVAILABLE,"The operation could not be completed")))}),P(f,Hl.EventType.MESSAGE,x=>{var w;if(!v){const E=x.data[0];Z(!!E);const I=E,b=I.error||((w=I[0])===null||w===void 0?void 0:w.error);if(b){z(Bt,`RPC '${e}' stream ${i} received error:`,b);const F=b.status;let U=function(R){const A=at[R];if(A!==void 0)return sA(A)}(F),T=b.message;U===void 0&&(U=L.INTERNAL,T="Unknown error status: "+F+" with message "+b.message),v=!0,S.po(new B(U,T)),f.close()}else z(Bt,`RPC '${e}' stream ${i} received:`,E),S.yo(E)}}),P(a,pR.STAT_EVENT,x=>{x.stat===Ym.PROXY?z(Bt,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===Ym.NOPROXY&&z(Bt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.fo()},0),S}}/**
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
 */function BA(){return typeof window<"u"?window:null}function Fh(){return typeof document<"u"?document:null}/**
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
 */function mc(t){return new CO(t,!0)}/**
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
 */class ay{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class zA{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new ay(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(rt(n.toString()),rt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new B(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wV extends zA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=xO(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?it(o.readTime):ee.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=ag(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=yd(l)?{documents:mA(s,l)}:{query:gA(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=uA(s,o.resumeToken);const c=sg(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=Ma(s,o.snapshotVersion.toTimestamp());const c=sg(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=NO(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=ag(this.serializer),n.removeTarget=e,this.i_(n)}}class EV extends zA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=bO(e.writeResults,e.commitTime),r=it(e.commitTime);return this.listener.A_(r,n)}return Z(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=ag(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Hu(this.serializer,r))};this.i_(n)}}/**
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
 */class IV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,og(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(L.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,og(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(L.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class TV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(rt(n),this.y_=!1):z("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class SV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{ds(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=Q(l);c.M_.add(4),await il(c),c.N_.set("Unknown"),c.M_.delete(4),await gc(c)}(this))})}),this.N_=new TV(r,i)}}async function gc(t){if(ds(t))for(const e of t.x_)await e(!0)}async function il(t){for(const e of t.x_)await e(!1)}function df(t,e){const n=Q(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),cy(n)?uy(n):ol(n).Xo()&&ly(n,e))}function ja(t,e){const n=Q(t),r=ol(n);n.F_.delete(e),r.Xo()&&$A(n,e),n.F_.size===0&&(r.Xo()?r.n_():ds(n)&&n.N_.set("Unknown"))}function ly(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ol(t).P_(e)}function $A(t,e){t.L_.xe(e),ol(t).I_(e)}function uy(t){t.L_=new TO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ol(t).start(),t.N_.w_()}function cy(t){return ds(t)&&!ol(t).Zo()&&t.F_.size>0}function ds(t){return Q(t).M_.size===0}function qA(t){t.L_=void 0}async function RV(t){t.N_.set("Online")}async function AV(t){t.F_.forEach((e,n)=>{ly(t,e)})}async function CV(t,e){qA(t),cy(t)?(t.N_.D_(e),uy(t)):t.N_.set("Unknown")}async function PV(t,e,n){if(t.N_.set("Online"),e instanceof lA&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Cd(t,r)}else if(e instanceof Mh?t.L_.Ke(e):e instanceof aA?t.L_.He(e):t.L_.We(e),!n.isEqual(ee.min()))try{const r=await VA(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.F_.get(c);h&&s.F_.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s.F_.get(l);if(!h)return;s.F_.set(l,h.withResumeToken(gt.EMPTY_BYTE_STRING,h.snapshotVersion)),$A(s,l);const f=new $r(h.target,l,c,h.sequenceNumber);ly(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){z("RemoteStore","Failed to raise snapshot:",r),await Cd(t,r)}}async function Cd(t,e,n){if(!cs(e))throw e;t.M_.add(1),await il(t),t.N_.set("Offline"),n||(n=()=>VA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await gc(t)})}function GA(t,e){return e().catch(n=>Cd(t,n,e))}async function sl(t){const e=Q(t),n=ns(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;kV(e);)try{const i=await fV(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,xV(e,i)}catch(i){await Cd(e,i)}WA(e)&&HA(e)}function kV(t){return ds(t)&&t.v_.length<10}function xV(t,e){t.v_.push(e);const n=ns(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function WA(t){return ds(t)&&!ns(t).Zo()&&t.v_.length>0}function HA(t){ns(t).start()}async function bV(t){ns(t).V_()}async function NV(t){const e=ns(t);for(const n of t.v_)e.d_(n.mutations)}async function DV(t,e,n){const r=t.v_.shift(),i=Q_.from(r,e,n);await GA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await sl(t)}async function OV(t,e){e&&ns(t).E_&&await async function(r,i){if(function(o){return iA(o)&&o!==L.ABORTED}(i.code)){const s=r.v_.shift();ns(r).t_(),await GA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await sl(r)}}(t,e),WA(t)&&HA(t)}async function wI(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=ds(n);n.M_.add(3),await il(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await gc(n)}async function fg(t,e){const n=Q(t);e?(n.M_.delete(2),await gc(n)):e||(n.M_.add(2),await il(n),n.N_.set("Unknown"))}function ol(t){return t.B_||(t.B_=function(n,r,i){const s=Q(n);return s.f_(),new wV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:RV.bind(null,t),To:AV.bind(null,t),Ao:CV.bind(null,t),h_:PV.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),cy(t)?uy(t):t.N_.set("Unknown")):(await t.B_.stop(),qA(t))})),t.B_}function ns(t){return t.k_||(t.k_=function(n,r,i){const s=Q(n);return s.f_(),new EV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:bV.bind(null,t),Ao:OV.bind(null,t),R_:NV.bind(null,t),A_:DV.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await sl(t)):(await t.k_.stop(),t.v_.length>0&&(z("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class hy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new It,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new hy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function al(t,e){if(rt("AsyncQueue",`${e}: ${t}`),cs(t))return new B(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ga{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Kl(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new ga(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ga)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ga;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class EI{constructor(){this.q_=new ke(K.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):Y():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ba{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ba(e,n,ga.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class VV{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class LV{constructor(){this.queries=new hs(e=>$R(e),cc),this.onlineState="Unknown",this.z_=new Set}}async function dy(t,e){const n=Q(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new VV,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=al(o,`Initialization of query '${Go(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&py(n)}async function fy(t,e){const n=Q(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function MV(t,e){const n=Q(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&py(n)}function FV(t,e,n){const r=Q(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function py(t){t.z_.forEach(e=>{e.next()})}var pg,II;(II=pg||(pg={})).J_="default",II.Cache="cache";class my{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ba(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Ba.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==pg.Cache}}/**
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
 */class UV{constructor(e,n){this.ia=e,this.byteLength=n}sa(){return"metadata"in this.ia}}/**
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
 */class TI{constructor(e){this.serializer=e}Ps(e){return Rr(this.serializer,e)}Is(e){return e.metadata.exists?pA(this.serializer,e.document,!1):Ne.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return it(e)}}class jV{constructor(e,n,r){this.oa=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=KA(e)}_a(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ia.namedQuery)this.queries.push(e.ia.namedQuery);else if(e.ia.documentMetadata){this.documents.push({metadata:e.ia.documentMetadata}),e.ia.documentMetadata.exists||++n;const r=fe.fromString(e.ia.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ia.document&&(this.documents[this.documents.length-1].document=e.ia.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}aa(e){const n=new Map,r=new TI(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Ps(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||oe()).add(s);n.set(o,a)}}return n}async complete(){const e=await pV(this.localStore,new TI(this.serializer),this.documents,this.oa.id),n=this.aa(this.documents);for(const r of this.queries)await mV(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ua:this.collectionGroups,ca:e}}}function KA(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class QA{constructor(e){this.key=e}}class YA{constructor(e){this.key=e}}class XA{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=oe(),this.mutatedKeys=oe(),this.Ia=GR(e),this.Ta=new ga(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new EI,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),v=hc(this.query,f)?f:null,S=!!m&&this.mutatedKeys.has(m.key),P=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let x=!1;m&&v?m.data.isEqual(v.data)?S!==P&&(r.track({type:3,doc:v}),x=!0):this.Ra(m,v)||(r.track({type:2,doc:v}),x=!0,(l&&this.Ia(v,l)>0||c&&this.Ia(v,c)<0)&&(a=!0)):!m&&v?(r.track({type:0,doc:v}),x=!0):m&&!v&&(r.track({type:1,doc:m}),x=!0,(l||c)&&(a=!0)),x&&(v?(o=o.add(v),s=P?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((h,f)=>function(v,S){const P=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return P(v)-P(S)}(h.type,f.type)||this.Ia(h.doc,f.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],l=this.Pa.size===0&&this.current&&!i?1:0,c=l!==this.ha;return this.ha=l,o.length!==0||c?{snapshot:new Ba(this.query,e.Ta,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new EI,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=oe(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new YA(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new QA(r))}),n}pa(e){this.la=e.hs,this.Pa=oe();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Ba.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class BV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class zV{constructor(e){this.key=e,this.wa=!1}}class $V{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new hs(a=>$R(a),cc),this.Da=new Map,this.Ca=new Set,this.va=new ke(K.comparator),this.Fa=new Map,this.Ma=new ny,this.xa={},this.Oa=new Map,this.Na=lo.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function qV(t,e,n=!0){const r=ff(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await JA(r,e,n,!0),i}async function GV(t,e){const n=ff(t);await JA(n,e,!0,!1)}async function JA(t,e,n,r){const i=await Fa(t.localStore,nn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await gy(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&df(t.remoteStore,i),a}async function gy(t,e,n,r,i){t.Ba=(f,m,v)=>async function(P,x,w,E){let I=x.view.da(w);I.Xi&&(I=await Sd(P.localStore,x.query,!1).then(({documents:T})=>x.view.da(T,I)));const b=E&&E.targetChanges.get(x.targetId),F=E&&E.targetMismatches.get(x.targetId)!=null,U=x.view.applyChanges(I,P.isPrimaryClient,b,F);return mg(P,x.targetId,U.fa),U.snapshot}(t,f,m,v);const s=await Sd(t.localStore,e,!0),o=new XA(e,s.hs),a=o.da(s.documents),l=pc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);mg(t,n,c.fa);const h=new BV(e,n,o);return t.ba.set(e,h),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function WV(t,e,n){const r=Q(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!cc(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ua(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ja(r.remoteStore,i.targetId),za(r,i.targetId)}).catch(us)):(za(r,i.targetId),await Ua(r.localStore,i.targetId,!0))}async function HV(t,e){const n=Q(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ja(n.remoteStore,r.targetId))}async function KV(t,e,n){const r=wy(t);try{const i=await function(o,a){const l=Q(o),c=Fe.now(),h=a.reduce((v,S)=>v.add(S.key),oe());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let S=_n(),P=oe();return l.os.getEntries(v,h).next(x=>{S=x,S.forEach((w,E)=>{E.isValidDocument()||(P=P.add(w))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,S)).next(x=>{f=x;const w=[];for(const E of a){const I=wO(E,f.get(E.key).overlayedDocument);I!=null&&w.push(new ui(E.key,I,OR(I.value.mapValue),Me.exists(!0)))}return l.mutationQueue.addMutationBatch(v,c,w,a)}).next(x=>{m=x;const w=x.applyToLocalDocumentSet(f,P);return l.documentOverlayCache.saveOverlays(v,x.batchId,w)})}).then(()=>({batchId:m.batchId,changes:HR(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.xa[o.currentUser.toKey()];c||(c=new ke(se)),c=c.insert(a,l),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await ci(r,i.changes),await sl(r.remoteStore)}catch(i){const s=al(i,"Failed to persist write");n.reject(s)}}async function ZA(t,e){const n=Q(t);try{const r=await dV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(Z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Z(o.wa):i.removedDocuments.size>0&&(Z(o.wa),o.wa=!1))}),await ci(n,r,e)}catch(r){await us(r)}}function SI(t,e,n){const r=Q(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=Q(o);l.onlineState=a;let c=!1;l.queries.forEach((h,f)=>{for(const m of f.U_)m.j_(a)&&(c=!0)}),c&&py(l)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function QV(t,e,n){const r=Q(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new ke(K.comparator);o=o.insert(s,Ne.newNoDocument(s,ee.min()));const a=oe().add(s),l=new fc(ee.min(),new Map,new ke(se),o,a);await ZA(r,l),r.va=r.va.remove(s),r.Fa.delete(e),vy(r)}else await Ua(r.localStore,e,!1).then(()=>za(r,e,n)).catch(us)}async function YV(t,e){const n=Q(t),r=e.batch.batchId;try{const i=await hV(n.localStore,e);yy(n,r,null),_y(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ci(n,i)}catch(i){await us(i)}}async function XV(t,e,n){const r=Q(t);try{const i=await function(o,a){const l=Q(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(Z(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);yy(r,e,n),_y(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ci(r,i)}catch(i){await us(i)}}async function JV(t,e){const n=Q(t);ds(n.remoteStore)||z("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=Q(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Oa.get(r)||[];i.push(e),n.Oa.set(r,i)}catch(r){const i=al(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function _y(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function yy(t,e,n){const r=Q(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function za(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||eC(t,r)})}function eC(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(ja(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),vy(t))}function mg(t,e,n){for(const r of n)r instanceof QA?(t.Ma.addReference(r.key,e),ZV(t,r)):r instanceof YA?(z("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||eC(t,r.key)):Y()}function ZV(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(z("SyncEngine","New document in limbo: "+n),t.Ca.add(r),vy(t))}function vy(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new K(fe.fromString(e)),r=t.Na.next();t.Fa.set(r,new zV(n)),t.va=t.va.insert(n,r),df(t.remoteStore,new $r(nn(tl(n.path)),r,"TargetPurposeLimboResolution",mn.oe))}}async function ci(t,e,n){const r=Q(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){i.push(c);const f=sy.Ki(l.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(l,c){const h=Q(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>O.forEach(c,m=>O.forEach(m.qi,v=>h.persistence.referenceDelegate.addReference(f,m.targetId,v)).next(()=>O.forEach(m.Qi,v=>h.persistence.referenceDelegate.removeReference(f,m.targetId,v)))))}catch(f){if(!cs(f))throw f;z("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const v=h.ns.get(m),S=v.snapshotVersion,P=v.withLastLimboFreeSnapshotVersion(S);h.ns=h.ns.insert(m,P)}}}(r.localStore,s))}async function eL(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const r=await OA(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(l=>{l.reject(new B(L.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ci(n,r.us)}}function tL(t,e){const n=Q(t),r=n.Fa.get(e);if(r&&r.wa)return oe().add(r.key);{let i=oe();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}async function nL(t,e){const n=Q(t),r=await Sd(n.localStore,e.query,!0),i=e.view.pa(r);return n.isPrimaryClient&&mg(n,e.targetId,i.fa),i}async function rL(t,e){const n=Q(t);return FA(n.localStore,e).then(r=>ci(n,r))}async function iL(t,e,n,r){const i=Q(t),s=await function(a,l){const c=Q(a),h=Q(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",f=>h.vn(f,l).next(m=>m?c.localDocuments.getDocuments(f,m):O.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await sl(i.remoteStore):n==="acknowledged"||n==="rejected"?(yy(i,e,r||null),_y(i,e),function(a,l){Q(Q(a).mutationQueue).Mn(l)}(i.localStore,e)):Y(),await ci(i,s)):z("SyncEngine","Cannot apply mutation batch with id: "+e)}async function sL(t,e){const n=Q(t);if(ff(n),wy(n),e===!0&&n.La!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await RI(n,r.toArray());n.La=!0,await fg(n.remoteStore,!0);for(const s of i)df(n.remoteStore,s)}else if(e===!1&&n.La!==!1){const r=[];let i=Promise.resolve();n.Da.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(za(n,o),Ua(n.localStore,o,!0))),ja(n.remoteStore,o)}),await i,await RI(n,r),function(o){const a=Q(o);a.Fa.forEach((l,c)=>{ja(a.remoteStore,c)}),a.Ma.mr(),a.Fa=new Map,a.va=new ke(K.comparator)}(n),n.La=!1,await fg(n.remoteStore,!1)}}async function RI(t,e,n){const r=Q(t),i=[],s=[];for(const o of e){let a;const l=r.Da.get(o);if(l&&l.length!==0){a=await Fa(r.localStore,nn(l[0]));for(const c of l){const h=r.ba.get(c),f=await nL(r,h);f.snapshot&&s.push(f.snapshot)}}else{const c=await MA(r.localStore,o);a=await Fa(r.localStore,c),await gy(r,tC(c),o,!1,a.resumeToken)}i.push(a)}return r.Sa.h_(s),i}function tC(t){return zR(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function oL(t){return function(n){return Q(Q(n).persistence).Bi()}(Q(t).localStore)}async function aL(t,e,n,r){const i=Q(t);if(i.La)return void z("SyncEngine","Ignoring unexpected query state notification.");const s=i.Da.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await FA(i.localStore,qR(s[0])),a=fc.createSynthesizedRemoteEventForCurrentChange(e,n==="current",gt.EMPTY_BYTE_STRING);await ci(i,o,a);break}case"rejected":await Ua(i.localStore,e,!0),za(i,e,r);break;default:Y()}}async function lL(t,e,n){const r=ff(t);if(r.La){for(const i of e){if(r.Da.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){z("SyncEngine","Adding an already active target "+i);continue}const s=await MA(r.localStore,i),o=await Fa(r.localStore,s);await gy(r,tC(s),o.targetId,!1,o.resumeToken),df(r.remoteStore,o)}for(const i of n)r.Da.has(i)&&await Ua(r.localStore,i,!1).then(()=>{ja(r.remoteStore,i),za(r,i)}).catch(us)}}function ff(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ZA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=QV.bind(null,e),e.Sa.h_=MV.bind(null,e.eventManager),e.Sa.ka=FV.bind(null,e.eventManager),e}function wy(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=YV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=XV.bind(null,e),e}function uL(t,e,n){const r=Q(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(v,S){const P=Q(v),x=it(S.createTime);return P.persistence.runTransaction("hasNewerBundle","readonly",w=>P.$r.getBundleMetadata(w,S.id)).then(w=>!!w&&w.createTime.compareTo(x)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(v){return{taskState:"Success",documentsLoaded:v.totalDocuments,bytesLoaded:v.totalBytes,totalDocuments:v.totalDocuments,totalBytes:v.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(KA(l));const c=new jV(l,s.localStore,o.serializer);let h=await o.qa();for(;h;){const m=await c._a(h);m&&a._updateProgress(m),h=await o.qa()}const f=await c.complete();return await ci(s,f.ca,void 0),await function(v,S){const P=Q(v);return P.persistence.runTransaction("Save bundle","readwrite",x=>P.$r.saveBundleMetadata(x,S))}(s.localStore,l),a._completeWith(f.progress),Promise.resolve(f.ua)}catch(l){return lr("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class gg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=mc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return DA(this.persistence,new NA,e.initialUser,this.serializer)}createPersistence(e){return new bA(hf.Hr,this.serializer)}createSharedClientState(e){return new jA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nC extends gg{constructor(e,n,r){super(),this.Qa=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Qa.initialize(this,e),await wy(this.Qa.syncEngine),await sl(this.Qa.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return DA(this.persistence,new NA,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new KO(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new bD(n,this.persistence);return new xD(e.asyncQueue,r)}createPersistence(e){const n=iy(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?cn.withCacheSize(this.cacheSizeBytes):cn.DEFAULT;return new ry(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,BA(),Fh(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new jA}}class cL extends nC{constructor(e,n){super(e,n,!1),this.Qa=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Qa.syncEngine;this.sharedClientState instanceof Fp&&(this.sharedClientState.syncEngine={Zs:iL.bind(null,n),Xs:aL.bind(null,n),eo:lL.bind(null,n),Bi:oL.bind(null,n),Ys:rL.bind(null,n)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await sL(this.Qa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=BA();if(!Fp.D(n))throw new B(L.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=iy(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Fp(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Ey{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>SI(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=eL.bind(null,this.syncEngine),await fg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new LV}()}createDatastore(e){const n=mc(e.databaseInfo.databaseId),r=function(s){return new vV(s)}(e.databaseInfo);return function(s,o,a,l){return new IV(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new SV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>SI(this.syncEngine,n,0),function(){return vI.D()?new vI:new gV}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,h){const f=new $V(i,s,o,a,l,c);return h&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=Q(r);z("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await il(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */function AI(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class pf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):rt("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class hL{constructor(e,n){this.Ua=e,this.serializer=n,this.metadata=new It,this.buffer=new Uint8Array,this.Wa=function(){return new TextDecoder("utf-8")}(),this.Ga().then(r=>{r&&r.sa()?this.metadata.resolve(r.ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ia)}`))},r=>this.metadata.reject(r))}close(){return this.Ua.cancel()}async getMetadata(){return this.metadata.promise}async qa(){return await this.getMetadata(),this.Ga()}async Ga(){const e=await this.za();if(e===null)return null;const n=this.Wa.decode(e),r=Number(n);isNaN(r)&&this.ja(`length string (${n}) is not valid number`);const i=await this.Ha(r);return new UV(JSON.parse(i),e.length+r)}Ja(){return this.buffer.findIndex(e=>e===123)}async za(){for(;this.Ja()<0&&!await this.Ya(););if(this.buffer.length===0)return null;const e=this.Ja();e<0&&this.ja("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ha(e){for(;this.buffer.length<e;)await this.Ya()&&this.ja("Reached the end of bundle when more is expected.");const n=this.Wa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}ja(e){throw this.Ua.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ya(){const e=await this.Ua.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class dL{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new B(L.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=Q(i),a={documents:s.map(f=>Wu(o.serializer,f))},l=await o.xo("BatchGetDocuments",o.serializer.databaseId,fe.emptyPath(),a,s.length),c=new Map;l.forEach(f=>{const m=kO(o.serializer,f);c.set(m.key.toString(),m)});const h=[];return s.forEach(f=>{const m=c.get(f.toString());Z(!!m),h.push(m)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new rl(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=K.fromPath(r);this.mutations.push(new H_(i,this.precondition(i)))}),await async function(r,i){const s=Q(r),o={writes:i.map(a=>Hu(s.serializer,a))};await s.Co("Commit",s.serializer.databaseId,fe.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw Y();n=ee.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new B(L.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(ee.min())?Me.exists(!1):Me.updateTime(n):Me.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(ee.min()))throw new B(L.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Me.updateTime(n)}return Me.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class fL{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Za=r.maxAttempts,this.Yo=new ay(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{const e=new dL(this.datastore),n=this.tu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.nu(i)}))}).catch(r=>{this.nu(r)})})}tu(e){try{const n=this.updateFunction(e);return!lc(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}nu(e){this.Za>0&&this.ru(e)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(e)}ru(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!iA(n)}return!1}}/**
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
 */class pL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=wt.UNAUTHENTICATED,this.clientId=yR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{z("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(z("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new It;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=al(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Uh(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await OA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function _g(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Iy(t);z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>wI(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>wI(e.remoteStore,i)),t._onlineComponents=e}function rC(t){return t.name==="FirebaseError"?t.code===L.FAILED_PRECONDITION||t.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Iy(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Uh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!rC(n))throw n;lr("Error using user provided cache. Falling back to memory cache: "+n),await Uh(t,new gg)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await Uh(t,new gg);return t._offlineComponents}async function mf(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await _g(t,t._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await _g(t,new Ey))),t._onlineComponents}function iC(t){return Iy(t).then(e=>e.persistence)}function Ty(t){return Iy(t).then(e=>e.localStore)}function sC(t){return mf(t).then(e=>e.remoteStore)}function Sy(t){return mf(t).then(e=>e.syncEngine)}function mL(t){return mf(t).then(e=>e.datastore)}async function $a(t){const e=await mf(t),n=e.eventManager;return n.onListen=qV.bind(null,e.syncEngine),n.onUnlisten=WV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=GV.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=HV.bind(null,e.syncEngine),n}function gL(t){return t.asyncQueue.enqueue(async()=>{const e=await iC(t),n=await sC(t);return e.setNetworkEnabled(!0),function(i){const s=Q(i);return s.M_.delete(0),gc(s)}(n)})}function _L(t){return t.asyncQueue.enqueue(async()=>{const e=await iC(t),n=await sC(t);return e.setNetworkEnabled(!1),async function(i){const s=Q(i);s.M_.add(0),await il(s),s.N_.set("Offline")}(n)})}function yL(t,e){const n=new It;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,h){const f=Q(c);return f.persistence.runTransaction("read document","readonly",m=>f.localDocuments.getDocument(m,h))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new B(L.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=al(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await Ty(t),e,n)),n.promise}function oC(t,e,n={}){const r=new It;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new pf({next:m=>{o.enqueueAndForget(()=>fy(s,f));const v=m.docs.has(a);!v&&m.fromCache?c.reject(new B(L.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&l&&l.source==="server"?c.reject(new B(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new my(tl(a.path),h,{includeMetadataChanges:!0,ra:!0});return dy(s,f)}(await $a(t),t.asyncQueue,e,n,r)),r.promise}function vL(t,e){const n=new It;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Sd(i,s,!0),l=new XA(s,a.hs),c=l.da(a.documents),h=l.applyChanges(c,!1);o.resolve(h.snapshot)}catch(a){const l=al(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await Ty(t),e,n)),n.promise}function aC(t,e,n={}){const r=new It;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new pf({next:m=>{o.enqueueAndForget(()=>fy(s,f)),m.fromCache&&l.source==="server"?c.reject(new B(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new my(a,h,{includeMetadataChanges:!0,ra:!0});return dy(s,f)}(await $a(t),t.asyncQueue,e,n,r)),r.promise}function wL(t,e){const n=new pf(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){Q(i).z_.add(s),s.next()}(await $a(t),n)),()=>{n.$a(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){Q(i).z_.delete(s)}(await $a(t),n))}}function EL(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?oA().encode(o):o,function(h,f){return new hL(h,f)}(function(h,f){if(h instanceof Uint8Array)return AI(h,f);if(h instanceof ArrayBuffer)return AI(new Uint8Array(h),f);if(h instanceof ReadableStream)return h.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,mc(e));t.asyncQueue.enqueueAndForget(async()=>{uL(await Sy(t),i,r)})}function IL(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=Q(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await Ty(t),e))}/**
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
 */function lC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const CI=new Map;/**
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
 */function Ry(t,e,n){if(!n)throw new B(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uC(t,e,n,r){if(e===!0&&r===!0)throw new B(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function PI(t){if(!K.isDocumentKey(t))throw new B(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kI(t){if(K.isDocumentKey(t))throw new B(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function we(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gf(t);throw new B(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function cC(t,e){if(e<=0)throw new B(L.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class xI{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _c{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vD;switch(r.type){case"firstParty":return new TD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=CI.get(n);r&&(z("ComponentProvider","Removing Datastore"),CI.delete(n),r.terminate())}(this),Promise.resolve()}}function hC(t,e,n,r={}){var i;const s=(t=we(t,_c))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&lr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=wt.MOCK_USER;else{a=WS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new B(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new wt(c)}t._authCredentials=new wD(new _R(a,l))}}/**
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
 */let rn=class dC{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new dC(this.firestore,e,this._query)}},$e=class fC{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fC(this.firestore,e,this._key)}},Wi=class pC extends rn{constructor(e,n,r){super(e,n,tl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new K(e))}withConverter(e){return new pC(this.firestore,e,this._path)}};function Pd(t,e,...n){if(t=J(t),Ry("collection","path",e),t instanceof _c){const r=fe.fromString(e,...n);return kI(r),new Wi(t,null,r)}{if(!(t instanceof $e||t instanceof Wi))throw new B(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return kI(r),new Wi(t.firestore,null,r)}}function TL(t,e){if(t=we(t,_c),Ry("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new B(L.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new rn(t,null,function(r){return new li(fe.emptyPath(),r)}(e))}function qa(t,e,...n){if(t=J(t),arguments.length===1&&(e=yR.newId()),Ry("doc","path",e),t instanceof _c){const r=fe.fromString(e,...n);return PI(r),new $e(t,null,new K(r))}{if(!(t instanceof $e||t instanceof Wi))throw new B(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return PI(r),new $e(t.firestore,t instanceof Wi?t.converter:null,new K(r))}}function mC(t,e){return t=J(t),e=J(e),(t instanceof $e||t instanceof Wi)&&(e instanceof $e||e instanceof Wi)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function gC(t,e){return t=J(t),e=J(e),t instanceof rn&&e instanceof rn&&t.firestore===e.firestore&&cc(t._query,e._query)&&t.converter===e.converter}/**
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
 */class SL{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new ay(this,"async_queue_retry"),this.hu=()=>{const n=Fh();n&&z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Fh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Fh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new It;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!cs(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw rt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=hy.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&Y()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function yg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class RL{constructor(){this._progressObserver={},this._taskCompletionResolver=new It,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const AL=-1;let Je=class extends _c{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new SL}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||_C(this),this._firestoreClient.terminate()}};function CL(t,e){const n=typeof t=="object"?t:rf(),r=typeof t=="string"?t:"(default)",i=Za(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=$S("firestore");s&&hC(i,...s)}return i}function At(t){return t._firestoreClient||_C(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function _C(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,h){return new JD(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,lC(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new pL(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function PL(t,e){vC(t=we(t,Je));const n=At(t);if(n._uninitializedComponentsProvider)throw new B(L.FAILED_PRECONDITION,"SDK cache is already specified.");lr("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new Ey;return yC(n,i,new nC(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function kL(t){vC(t=we(t,Je));const e=At(t);if(e._uninitializedComponentsProvider)throw new B(L.FAILED_PRECONDITION,"SDK cache is already specified.");lr("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new Ey;return yC(e,r,new cL(r,n.cacheSizeBytes))}function yC(t,e,n){const r=new It;return t.asyncQueue.enqueue(async()=>{try{await Uh(t,n),await _g(t,e),r.resolve()}catch(i){const s=i;if(!rC(s))throw s;lr("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function xL(t){if(t._initialized&&!t._terminated)throw new B(L.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new It;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Sr.D())return Promise.resolve();const i=r+"main";await Sr.delete(i)}(iy(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function bL(t){return function(n){const r=new It;return n.asyncQueue.enqueueAndForget(async()=>JV(await Sy(n),r)),r.promise}(At(t=we(t,Je)))}function NL(t){return gL(At(t=we(t,Je)))}function DL(t){return _L(At(t=we(t,Je)))}function OL(t,e){const n=At(t=we(t,Je)),r=new RL;return EL(n,t._databaseId,e,r),r}function VL(t,e){return IL(At(t=we(t,Je)),e).then(n=>n?new rn(t,null,n.query):null)}function vC(t){if(t._initialized||t._terminated)throw new B(L.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class Pr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pr(gt.fromBase64String(e))}catch(n){throw new B(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pr(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let rs=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let yo=class{constructor(e){this._methodName=e}};/**
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
 */class _f{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
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
 */const LL=/^__.*__$/;class ML{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ui(e,this.data,this.fieldMask,n,this.fieldTransforms):new nl(e,this.data,n,this.fieldTransforms)}}class wC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ui(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function EC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class yf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new yf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return kd(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(EC(this.fu)&&LL.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class FL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||mc(e)}Fu(e,n,r,i=!1){return new yf({fu:e,methodName:n,vu:r,path:Le.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vo(t){const e=t._freezeSettings(),n=mc(t._databaseId);return new FL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vf(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);Ny("Data must be an object, but it was:",o,r);const a=SC(r,o);let l,c;if(s.merge)l=new gn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const m=vg(e,f,n);if(!o.contains(m))throw new B(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);AC(h,m)||h.push(m)}l=new gn(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new ML(new Nt(a),l,c)}class yc extends yo{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yc}}function IC(t,e,n){return new yf({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ay extends yo{_toFieldTransform(e){return new dc(e.path,new Va)}isEqual(e){return e instanceof Ay}}class Cy extends yo{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=IC(this,e,!0),r=this.Mu.map(s=>wo(s,n)),i=new io(r);return new dc(e.path,i)}isEqual(e){return e instanceof Cy&&ka(this.Mu,e.Mu)}}class Py extends yo{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=IC(this,e,!0),r=this.Mu.map(s=>wo(s,n)),i=new so(r);return new dc(e.path,i)}isEqual(e){return e instanceof Py&&ka(this.Mu,e.Mu)}}class ky extends yo{constructor(e,n){super(e),this.xu=n}_toFieldTransform(e){const n=new La(e.serializer,XR(e.serializer,this.xu));return new dc(e.path,n)}isEqual(e){return e instanceof ky&&this.xu===e.xu}}function xy(t,e,n,r){const i=t.Fu(1,e,n);Ny("Data must be an object, but it was:",i,r);const s=[],o=Nt.empty();_o(r,(l,c)=>{const h=Dy(e,l,n);c=J(c);const f=i.Su(h);if(c instanceof yc)s.push(h);else{const m=wo(c,f);m!=null&&(s.push(h),o.set(h,m))}});const a=new gn(s);return new wC(o,a,i.fieldTransforms)}function by(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[vg(e,r,n)],l=[i];if(s.length%2!=0)throw new B(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(vg(e,s[m])),l.push(s[m+1]);const c=[],h=Nt.empty();for(let m=a.length-1;m>=0;--m)if(!AC(c,a[m])){const v=a[m];let S=l[m];S=J(S);const P=o.Su(v);if(S instanceof yc)c.push(v);else{const x=wo(S,P);x!=null&&(c.push(v),h.set(v,x))}}const f=new gn(c);return new wC(h,f,o.fieldTransforms)}function TC(t,e,n,r=!1){return wo(n,t.Fu(r?4:3,e))}function wo(t,e){if(RC(t=J(t)))return Ny("Unsupported field value:",e,t),SC(t,e);if(t instanceof yo)return function(r,i){if(!EC(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=wo(a,i.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=J(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return XR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Fe.fromDate(r);return{timestampValue:Ma(i.serializer,s)}}if(r instanceof Fe){const s=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ma(i.serializer,s)}}if(r instanceof _f)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pr)return{bytesValue:uA(i.serializer,r._byteString)};if(r instanceof $e){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:J_(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${gf(r)}`)}(t,e)}function SC(t,e){const n={};return bR(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_o(t,(r,i)=>{const s=wo(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function RC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof _f||t instanceof Pr||t instanceof $e||t instanceof yo)}function Ny(t,e,n){if(!RC(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=gf(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function vg(t,e,n){if((e=J(e))instanceof rs)return e._internalPath;if(typeof e=="string")return Dy(t,e);throw kd("Field path arguments must be of type string or ",t,!1,void 0,n)}const UL=new RegExp("[~\\*/\\[\\]]");function Dy(t,e,n){if(e.search(UL)>=0)throw kd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new rs(...e.split("."))._internalPath}catch{throw kd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function kd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new B(L.INVALID_ARGUMENT,a+t+l)}function AC(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Ku{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jL extends Ku{data(){return super.data()}}function wf(t,e){return typeof e=="string"?Dy(t,e):e instanceof rs?e._internalPath:e._delegate._internalPath}/**
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
 */function CC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Oy{}class vc extends Oy{}function Fr(t,e,...n){let r=[];e instanceof Oy&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Vy).length,a=s.filter(l=>l instanceof Ef).length;if(o>1||o>0&&a>0)throw new B(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ef extends vc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ef(e,n,r)}_apply(e){const n=this._parse(e);return xC(e._query,n),new rn(e.firestore,e.converter,ig(e._query,n))}_parse(e){const n=vo(e.firestore);return function(s,o,a,l,c,h,f){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new B(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){NI(f,h);const v=[];for(const S of f)v.push(bI(l,s,S));m={arrayValue:{values:v}}}else m=bI(l,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||NI(f,h),m=TC(a,o,f,h==="in"||h==="not-in");return pe.create(c,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function PC(t,e,n){const r=e,i=wf("where",t);return Ef._create(i,r,n)}class Vy extends Oy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Vy(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Te.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)xC(o,l),o=ig(o,l)}(e._query,n),new rn(e.firestore,e.converter,ig(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ly extends vc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ly(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new B(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Gu(s,o)}(e._query,this._field,this._direction);return new rn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new li(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function BL(t,e="asc"){const n=e,r=wf("orderBy",t);return Ly._create(r,n)}class If extends vc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new If(e,n,r)}_apply(e){return new rn(e.firestore,e.converter,wd(e._query,this._limit,this._limitType))}}function zL(t){return cC("limit",t),If._create("limit",t,"F")}function $L(t){return cC("limitToLast",t),If._create("limitToLast",t,"L")}class Tf extends vc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Tf(e,n,r)}_apply(e){const n=kC(e,this.type,this._docOrFields,this._inclusive);return new rn(e.firestore,e.converter,function(i,s){return new li(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function qL(...t){return Tf._create("startAt",t,!0)}function GL(...t){return Tf._create("startAfter",t,!1)}class Sf extends vc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Sf(e,n,r)}_apply(e){const n=kC(e,this.type,this._docOrFields,this._inclusive);return new rn(e.firestore,e.converter,function(i,s){return new li(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function WL(...t){return Sf._create("endBefore",t,!1)}function HL(...t){return Sf._create("endAt",t,!0)}function kC(t,e,n,r){if(n[0]=J(n[0]),n[0]instanceof Ku)return function(s,o,a,l,c){if(!l)throw new B(L.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const h=[];for(const f of ma(s))if(f.field.isKeyField())h.push(no(o,l.key));else{const m=l.data.field(f.field);if(of(m))throw new B(L.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const v=f.field.canonicalString();throw new B(L.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${v}' (used as the orderBy) does not exist.`)}h.push(m)}return new ts(h,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=vo(t.firestore);return function(o,a,l,c,h,f){const m=o.explicitOrderBy;if(h.length>m.length)throw new B(L.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const v=[];for(let S=0;S<h.length;S++){const P=h[S];if(m[S].field.isKeyField()){if(typeof P!="string")throw new B(L.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof P}`);if(!G_(o)&&P.indexOf("/")!==-1)throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${P}' contains a slash.`);const x=o.path.child(fe.fromString(P));if(!K.isDocumentKey(x))throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${x}' is not because it contains an odd number of segments.`);const w=new K(x);v.push(no(a,w))}else{const x=TC(l,c,P);v.push(x)}}return new ts(v,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function bI(t,e,n){if(typeof(n=J(n))=="string"){if(n==="")throw new B(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!G_(e)&&n.indexOf("/")!==-1)throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!K.isDocumentKey(r))throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return no(t,new K(r))}if(n instanceof $e)return no(t,n._key);throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gf(n)}.`)}function NI(t,e){if(!Array.isArray(t)||t.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function xC(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class My{convertValue(e,n="none"){switch(to(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ji(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return _o(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new _f(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=$_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(zu(e));default:return null}}convertTimestamp(e){const n=ni(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);Z(wA(r));const i=new Zi(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||rt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Rf(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class KL extends My{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,n)}}/**
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
 */class Us{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let ri=class extends Ku{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(wf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},fu=class extends ri{data(e={}){return super.data(e)}},is=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Us(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new fu(this._firestore,this._userDataWriter,r.key,r,new Us(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new fu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Us(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new fu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Us(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:QL(a.type),doc:l,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function QL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}function bC(t,e){return t instanceof ri&&e instanceof ri?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof is&&e instanceof is&&t._firestore===e._firestore&&gC(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function YL(t){t=we(t,$e);const e=we(t.firestore,Je);return oC(At(e),t._key).then(n=>Fy(e,t,n))}class Eo extends My{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,n)}}function XL(t){t=we(t,$e);const e=we(t.firestore,Je),n=At(e),r=new Eo(e);return yL(n,t._key).then(i=>new ri(e,r,t._key,i,new Us(i!==null&&i.hasLocalMutations,!0),t.converter))}function JL(t){t=we(t,$e);const e=we(t.firestore,Je);return oC(At(e),t._key,{source:"server"}).then(n=>Fy(e,t,n))}function NC(t){t=we(t,rn);const e=we(t.firestore,Je),n=At(e),r=new Eo(e);return CC(t._query),aC(n,t._query).then(i=>new is(e,r,t,i))}function ZL(t){t=we(t,rn);const e=we(t.firestore,Je),n=At(e),r=new Eo(e);return vL(n,t._query).then(i=>new is(e,r,t,i))}function eM(t){t=we(t,rn);const e=we(t.firestore,Je),n=At(e),r=new Eo(e);return aC(n,t._query,{source:"server"}).then(i=>new is(e,r,t,i))}function DI(t,e,n){t=we(t,$e);const r=we(t.firestore,Je),i=Rf(t.converter,e,n);return wc(r,[vf(vo(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Me.none())])}function wg(t,e,n,...r){t=we(t,$e);const i=we(t.firestore,Je),s=vo(i);let o;return o=typeof(e=J(e))=="string"||e instanceof rs?by(s,"updateDoc",t._key,e,n,r):xy(s,"updateDoc",t._key,e),wc(i,[o.toMutation(t._key,Me.exists(!0))])}function DC(t){return wc(we(t.firestore,Je),[new rl(t._key,Me.none())])}function OC(t,e){const n=we(t.firestore,Je),r=qa(t),i=Rf(t.converter,e);return wc(n,[vf(vo(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Me.exists(!1))]).then(()=>r)}function VC(t,...e){var n,r,i;t=J(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||yg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(yg(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,h;if(t instanceof $e)c=we(t.firestore,Je),h=tl(t._key.path),l={next:f=>{e[o]&&e[o](Fy(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=we(t,rn);c=we(f.firestore,Je),h=f._query;const m=new Eo(c);l={next:v=>{e[o]&&e[o](new is(c,m,f,v))},error:e[o+1],complete:e[o+2]},CC(t._query)}return function(m,v,S,P){const x=new pf(P),w=new my(v,x,S);return m.asyncQueue.enqueueAndForget(async()=>dy(await $a(m),w)),()=>{x.$a(),m.asyncQueue.enqueueAndForget(async()=>fy(await $a(m),w))}}(At(c),h,a,l)}function tM(t,e){return wL(At(t=we(t,Je)),yg(e)?e:{next:e})}function wc(t,e){return function(r,i){const s=new It;return r.asyncQueue.enqueueAndForget(async()=>KV(await Sy(r),i,s)),s.promise}(At(t),e)}function Fy(t,e,n){const r=n.docs.get(e._key),i=new Eo(t);return new ri(t,i,e._key,r,new Us(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const nM={maxAttempts:5};/**
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
 */let rM=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=vo(e)}set(e,n,r){this._verifyNotCommitted();const i=bi(e,this._firestore),s=Rf(i.converter,n,r),o=vf(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Me.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=bi(e,this._firestore);let o;return o=typeof(n=J(n))=="string"||n instanceof rs?by(this._dataReader,"WriteBatch.update",s._key,n,r,i):xy(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Me.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=bi(e,this._firestore);return this._mutations=this._mutations.concat(new rl(n._key,Me.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new B(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function bi(t,e){if((t=J(t)).firestore!==e)throw new B(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */let iM=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=vo(n)}get(n){const r=bi(n,this._firestore),i=new KL(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return Y();const o=s[0];if(o.isFoundDocument())return new Ku(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Ku(this._firestore,i,r._key,null,r.converter);throw Y()})}set(n,r,i){const s=bi(n,this._firestore),o=Rf(s.converter,r,i),a=vf(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=bi(n,this._firestore);let a;return a=typeof(r=J(r))=="string"||r instanceof rs?by(this._dataReader,"Transaction.update",o._key,r,i,s):xy(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=bi(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=bi(e,this._firestore),r=new Eo(this._firestore);return super.get(e).then(i=>new ri(this._firestore,r,n._key,i._document,new Us(!1,!1),n.converter))}};function sM(t,e,n){t=we(t,Je);const r=Object.assign(Object.assign({},nM),n);return function(s){if(s.maxAttempts<1)throw new B(L.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new It;return s.asyncQueue.enqueueAndForget(async()=>{const c=await mL(s);new fL(s.asyncQueue,c,a,o,l).Xa()}),l.promise}(At(t),i=>e(new iM(t,i)),r)}/**
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
 */function oM(){return new yc("deleteField")}function aM(){return new Ay("serverTimestamp")}function lM(...t){return new Cy("arrayUnion",t)}function uM(...t){return new Py("arrayRemove",t)}function cM(t){return new ky("increment",t)}(function(e,n=!0){(function(i){el=i})(ai),ti(new Wn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Je(new ED(r.getProvider("auth-internal")),new RD(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new B(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zi(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),kn(CE,"4.6.4",e),kn(CE,"4.6.4","esm2017")})();/**
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
 */class hM{constructor(e,n){this._delegate=e,this.firebase=n,Mu(e,new Wn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),U_(this._delegate)))}_getService(e,n=Qi){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Qi){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Mu(this._delegate,e)}_addOrOverwriteComponent(e){rR(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const dM={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},OI=new go("app-compat","Firebase",dM);/**
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
 */function fM(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:kn,setLogLevel:aR,onLog:oR,apps:null,SDK_VERSION:ai,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:gD}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||Qi,!yE(e,c))throw OI.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,h={}){const f=F_(c,h);if(yE(e,f.name))return e[f.name];const m=new t(f,n);return e[f.name]=m,m}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const h=c.name,f=h.replace("-compat","");if(ti(c)&&c.type==="PUBLIC"){const m=(v=i())=>{if(typeof v[f]!="function")throw OI.create("invalid-app-argument",{appName:h});return v[f]()};c.serviceProps!==void 0&&md(m,c.serviceProps),n[f]=m,t.prototype[f]=function(...v){return this._getService.bind(this,h).apply(this,c.multipleInstances?v:[])}}return c.type==="PUBLIC"?n[f]:null}function l(c,h){return h==="serverAuth"?null:h}return n}/**
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
 */function LC(){const t=fM(hM);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:LC,extendNamespace:e,createSubscribe:JS,ErrorFactory:go,deepExtend:md});function e(n){md(t,n)}return t}const pM=LC();/**
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
 */const VI=new nf("@firebase/app-compat"),mM="@firebase/app-compat",gM="0.2.36";/**
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
 */function _M(t){kn(mM,gM,t)}/**
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
 */if(HS()&&self.firebase!==void 0){VI.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&VI.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Io=pM;_M();var yM="firebase",vM="10.12.3";/**
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
 */Io.registerVersion(yM,vM,"app-compat");function Uy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Fl={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Uo={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function wM(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function MC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const EM=wM,IM=MC,FC=new go("auth","Firebase",MC());/**
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
 */const xd=new nf("@firebase/auth");function TM(t,...e){xd.logLevel<=le.WARN&&xd.warn(`Auth (${ai}): ${t}`,...e)}function jh(t,...e){xd.logLevel<=le.ERROR&&xd.error(`Auth (${ai}): ${t}`,...e)}/**
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
 */function St(t,...e){throw By(t,...e)}function mt(t,...e){return By(t,...e)}function jy(t,e,n){const r=Object.assign(Object.assign({},IM()),{[e]:n});return new go("auth","Firebase",r).create(e,{appName:t.name})}function Tt(t){return jy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ll(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&St(t,"argument-error"),jy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function By(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return FC.create(t,...e)}function q(t,e,...n){if(!t)throw By(e,...n)}function Er(t){const e="INTERNAL ASSERTION FAILED: "+t;throw jh(e),new Error(e)}function ur(t,e){t||Er(e)}/**
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
 */function Qu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zy(){return LI()==="http:"||LI()==="https:"}function LI(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function SM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zy()||QS()||"connection"in navigator)?navigator.onLine:!0}function RM(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ec{constructor(e,n){this.shortDelay=e,this.longDelay=n,ur(n>e,"Short delay should be less than long delay!"),this.isMobile=Zb()||V_()}get(){return SM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $y(t,e){ur(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class UC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const AM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const CM=new Ec(3e4,6e4);function et(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tt(t,e,n,r,i={}){return jC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ja(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),UC.fetch()(BC(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function jC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},AM),e);try{const i=new kM(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Xl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Xl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Xl(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw jy(t,h,c);St(t,h)}}catch(i){if(i instanceof qt)throw i;St(t,"network-request-failed",{message:String(i)})}}async function hi(t,e,n,r,i={}){const s=await tt(t,e,n,r,i);return"mfaPendingCredential"in s&&St(t,"multi-factor-auth-required",{_serverResponse:s}),s}function BC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?$y(t.config,i):`${t.config.apiScheme}://${i}`}function PM(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kM{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mt(this.auth,"network-request-failed")),CM.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=mt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function MI(t){return t!==void 0&&t.getResponse!==void 0}function FI(t){return t!==void 0&&t.enterprise!==void 0}class xM{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return PM(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function bM(t){return(await tt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function NM(t,e){return tt(t,"GET","/v2/recaptchaConfig",et(t,e))}/**
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
 */async function DM(t,e){return tt(t,"POST","/v1/accounts:delete",e)}async function OM(t,e){return tt(t,"POST","/v1/accounts:update",e)}async function zC(t,e){return tt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function pu(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VM(t,e=!1){const n=J(t),r=await n.getIdToken(e),i=Af(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:pu(jp(i.auth_time)),issuedAtTime:pu(jp(i.iat)),expirationTime:pu(jp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function jp(t){return Number(t)*1e3}function Af(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return jh("JWT malformed, contained fewer than 3 sections"),null;try{const i=BS(n);return i?JSON.parse(i):(jh("Failed to decode base64 JWT payload"),null)}catch(i){return jh("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function UI(t){const e=Af(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ii(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof qt&&LM(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LM({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class MM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Eg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pu(this.lastLoginAt),this.creationTime=pu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ii(t,zC(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?$C(s.providerUserInfo):[],a=UM(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Eg(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function FM(t){const e=J(t);await Yu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UM(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $C(t){return t.map(e=>{var{providerId:n}=e,r=Uy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function jM(t,e){const n=await jC(t,{},async()=>{const r=Ja({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=BC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",UC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function BM(t,e){return tt(t,"POST","/v2/accounts:revokeToken",et(t,e))}/**
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
 */class _a{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):UI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=UI(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jM(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new _a;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _a,this.toJSON())}_performRefresh(){return Er("not implemented")}}/**
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
 */function Si(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Uy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new MM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Eg(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ii(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VM(this,e)}reload(){return FM(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Yu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xe(this.auth.app))return Promise.reject(Tt(this.auth));const e=await this.getIdToken();return await ii(this,DM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:I,emailVerified:b,isAnonymous:F,providerData:U,stsTokenManager:T}=n;q(I&&T,e,"internal-error");const y=_a.fromJSON(this.name,T);q(typeof I=="string",e,"internal-error"),Si(f,e.name),Si(m,e.name),q(typeof b=="boolean",e,"internal-error"),q(typeof F=="boolean",e,"internal-error"),Si(v,e.name),Si(S,e.name),Si(P,e.name),Si(x,e.name),Si(w,e.name),Si(E,e.name);const R=new qr({uid:I,auth:e,email:m,emailVerified:b,displayName:f,isAnonymous:F,photoURL:S,phoneNumber:v,tenantId:P,stsTokenManager:y,createdAt:w,lastLoginAt:E});return U&&Array.isArray(U)&&(R.providerData=U.map(A=>Object.assign({},A))),x&&(R._redirectEventId=x),R}static async _fromIdTokenResponse(e,n,r=!1){const i=new _a;i.updateFromServerResponse(n);const s=new qr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Yu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?$C(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new _a;a.updateFromIdToken(r);const l=new qr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Eg(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const jI=new Map;function Cn(t){ur(t instanceof Function,"Expected a class definition");let e=jI.get(t);return e?(ur(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jI.set(t,e),e)}/**
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
 */class qC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qC.type="NONE";const Ga=qC;/**
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
 */function Gs(t,e,n){return`firebase:${t}:${e}:${n}`}class ya{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Gs(this.userKey,i.apiKey,s),this.fullPersistenceKey=Gs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ya(Cn(Ga),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Cn(Ga);const o=Gs(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=qr._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ya(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ya(s,e,r))}}/**
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
 */function BI(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(HC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(GC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(KC(e))return"Blackberry";if(QC(e))return"Webos";if(qy(e))return"Safari";if((e.includes("chrome/")||WC(e))&&!e.includes("edge/"))return"Chrome";if(Ic(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function GC(t=Ue()){return/firefox\//i.test(t)}function qy(t=Ue()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function WC(t=Ue()){return/crios\//i.test(t)}function HC(t=Ue()){return/iemobile/i.test(t)}function Ic(t=Ue()){return/android/i.test(t)}function KC(t=Ue()){return/blackberry/i.test(t)}function QC(t=Ue()){return/webos/i.test(t)}function ul(t=Ue()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zM(t=Ue()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function $M(t=Ue()){var e;return ul(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qM(){return YS()&&document.documentMode===10}function YC(t=Ue()){return ul(t)||Ic(t)||QC(t)||KC(t)||/windows phone/i.test(t)||HC(t)}function GM(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function XC(t,e=[]){let n;switch(t){case"Browser":n=BI(Ue());break;case"Worker":n=`${BI(Ue())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ai}/${r}`}/**
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
 */class WM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function HM(t,e={}){return tt(t,"GET","/v2/passwordPolicy",et(t,e))}/**
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
 */const KM=6;class QM{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:KM,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class YM{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zI(this),this.idTokenSubscription=new zI(this),this.beforeStateQueue=new WM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=FC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ya.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await zC(this,{idToken:e}),r=await qr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Xe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xe(this.app))return Promise.reject(Tt(this));const n=e?J(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xe(this.app)?Promise.reject(Tt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xe(this.app)?Promise.reject(Tt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await HM(this),n=new QM(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new go("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await BM(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await ya.create(this,[Cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=XC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&TM(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ze(t){return J(t)}class zI{constructor(e){this.auth=e,this.observer=null,this.addObserver=JS(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Tc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function XM(t){Tc=t}function Gy(t){return Tc.loadJS(t)}function JM(){return Tc.recaptchaV2Script}function ZM(){return Tc.recaptchaEnterpriseScript}function e2(){return Tc.gapiScript}function JC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const t2="recaptcha-enterprise",n2="NO_RECAPTCHA";class r2{constructor(e){this.type=t2,this.auth=Ze(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{NM(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new xM(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;FI(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(n2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&FI(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ZM();l.length!==0&&(l+=a),Gy(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function $I(t,e,n,r=!1){const i=new r2(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Xu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await $I(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await $I(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function i2(t,e){const n=Za(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ka(s,e??{}))return i;St(i,"already-initialized")}return n.initialize({options:e})}function s2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ZC(t,e,n){const r=Ze(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=eP(e),{host:o,port:a}=o2(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||a2()}function eP(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function o2(t){const e=eP(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qI(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:qI(o)}}}function qI(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function a2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class cl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Er("not implemented")}_getIdTokenResponse(e){return Er("not implemented")}_linkToIdToken(e,n){return Er("not implemented")}_getReauthenticationResolver(e){return Er("not implemented")}}/**
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
 */async function tP(t,e){return tt(t,"POST","/v1/accounts:resetPassword",et(t,e))}async function l2(t,e){return tt(t,"POST","/v1/accounts:update",e)}async function u2(t,e){return tt(t,"POST","/v1/accounts:signUp",e)}async function c2(t,e){return tt(t,"POST","/v1/accounts:update",et(t,e))}/**
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
 */async function h2(t,e){return hi(t,"POST","/v1/accounts:signInWithPassword",et(t,e))}async function Cf(t,e){return tt(t,"POST","/v1/accounts:sendOobCode",et(t,e))}async function d2(t,e){return Cf(t,e)}async function f2(t,e){return Cf(t,e)}async function p2(t,e){return Cf(t,e)}async function m2(t,e){return Cf(t,e)}/**
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
 */async function g2(t,e){return hi(t,"POST","/v1/accounts:signInWithEmailLink",et(t,e))}async function _2(t,e){return hi(t,"POST","/v1/accounts:signInWithEmailLink",et(t,e))}/**
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
 */class Ju extends cl{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ju(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ju(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xu(e,n,"signInWithPassword",h2);case"emailLink":return g2(e,{email:this._email,oobCode:this._password});default:St(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xu(e,r,"signUpPassword",u2);case"emailLink":return _2(e,{idToken:n,email:this._email,oobCode:this._password});default:St(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Kr(t,e){return hi(t,"POST","/v1/accounts:signInWithIdp",et(t,e))}/**
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
 */const y2="http://localhost";class kr extends cl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):St("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Uy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new kr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Kr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Kr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kr(e,n)}buildRequest(){const e={requestUri:y2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ja(n)}return e}}/**
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
 */async function v2(t,e){return tt(t,"POST","/v1/accounts:sendVerificationCode",et(t,e))}async function w2(t,e){return hi(t,"POST","/v1/accounts:signInWithPhoneNumber",et(t,e))}async function E2(t,e){const n=await hi(t,"POST","/v1/accounts:signInWithPhoneNumber",et(t,e));if(n.temporaryProof)throw Xl(t,"account-exists-with-different-credential",n);return n}const I2={USER_NOT_FOUND:"user-not-found"};async function T2(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return hi(t,"POST","/v1/accounts:signInWithPhoneNumber",et(t,n),I2)}/**
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
 */class Ws extends cl{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ws({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ws({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return w2(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return E2(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return T2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ws({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function S2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function R2(t){const e=la(Wl(t)).link,n=e?la(Wl(e)).deep_link_id:null,r=la(Wl(t)).deep_link_id;return(r?la(Wl(r)).link:null)||r||n||e||t}class Pf{constructor(e){var n,r,i,s,o,a;const l=la(Wl(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,f=S2((i=l.mode)!==null&&i!==void 0?i:null);q(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=R2(e);try{return new Pf(n)}catch{return null}}}/**
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
 */class fs{constructor(){this.providerId=fs.PROVIDER_ID}static credential(e,n){return Ju._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Pf.parseLink(n);return q(r,"argument-error"),Ju._fromEmailAndCode(e,r.code,r.tenantId)}}fs.PROVIDER_ID="password";fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class di{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hl extends di{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class va extends hl{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return q("providerId"in n&&"signInMethod"in n,"argument-error"),kr._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return q(e.idToken||e.accessToken,"argument-error"),kr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return va.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return va.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new va(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class pr extends hl{constructor(){super("facebook.com")}static credential(e){return kr._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";pr.PROVIDER_ID="facebook.com";/**
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
 */class mr extends hl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kr._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.GOOGLE_SIGN_IN_METHOD="google.com";mr.PROVIDER_ID="google.com";/**
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
 */class gr extends hl{constructor(){super("github.com")}static credential(e){return kr._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.GITHUB_SIGN_IN_METHOD="github.com";gr.PROVIDER_ID="github.com";/**
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
 */const A2="http://localhost";class Wa extends cl{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Kr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Kr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Wa(r,s)}static _create(e,n){return new Wa(e,n)}buildRequest(){return{requestUri:A2,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const C2="saml.";class bd extends di{constructor(e){q(e.startsWith(C2),"argument-error"),super(e)}static credentialFromResult(e){return bd.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return bd.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Wa.fromJSON(e);return q(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Wa._create(r,n)}catch{return null}}}/**
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
 */class _r extends hl{constructor(){super("twitter.com")}static credential(e,n){return kr._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.TWITTER_SIGN_IN_METHOD="twitter.com";_r.PROVIDER_ID="twitter.com";/**
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
 */async function nP(t,e){return hi(t,"POST","/v1/accounts:signUp",et(t,e))}/**
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
 */class Hn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await qr._fromIdTokenResponse(e,r,i),o=GI(r);return new Hn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=GI(r);return new Hn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function GI(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function P2(t){var e;if(Xe(t.app))return Promise.reject(Tt(t));const n=Ze(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Hn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await nP(n,{returnSecureToken:!0}),i=await Hn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Nd extends qt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Nd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Nd(e,n,r,i)}}function rP(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Nd._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function iP(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function k2(t,e){const n=J(t);await kf(!0,n,e);const{providerUserInfo:r}=await OM(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=iP(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Wy(t,e,n=!1){const r=await ii(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hn._forOperation(t,"link",r)}async function kf(t,e,n){await Yu(e);const r=iP(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";q(r.has(n)===t,e.auth,i)}/**
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
 */async function sP(t,e,n=!1){const{auth:r}=t;if(Xe(r.app))return Promise.reject(Tt(r));const i="reauthenticate";try{const s=await ii(t,rP(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=Af(s.idToken);q(o,r,"internal-error");const{sub:a}=o;return q(t.uid===a,r,"user-mismatch"),Hn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&St(r,"user-mismatch"),s}}/**
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
 */async function oP(t,e,n=!1){if(Xe(t.app))return Promise.reject(Tt(t));const r="signIn",i=await rP(t,r,e),s=await Hn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function xf(t,e){return oP(Ze(t),e)}async function aP(t,e){const n=J(t);return await kf(!1,n,e.providerId),Wy(n,e)}async function lP(t,e){return sP(J(t),e)}/**
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
 */async function x2(t,e){return hi(t,"POST","/v1/accounts:signInWithCustomToken",et(t,e))}/**
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
 */async function b2(t,e){if(Xe(t.app))return Promise.reject(Tt(t));const n=Ze(t),r=await x2(n,{token:e,returnSecureToken:!0}),i=await Hn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class Sc{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Hy._fromServerResponse(e,n):"totpInfo"in n?Ky._fromServerResponse(e,n):St(e,"internal-error")}}class Hy extends Sc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Hy(n)}}class Ky extends Sc{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Ky(n)}}/**
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
 */function bf(t,e,n){var r;q(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),q(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(q(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(q(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Qy(t){const e=Ze(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function N2(t,e,n){const r=Ze(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&bf(r,i,n),await Xu(r,i,"getOobCode",f2)}async function D2(t,e,n){await tP(J(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Qy(t),r})}async function O2(t,e){await c2(J(t),{oobCode:e})}async function uP(t,e){const n=J(t),r=await tP(n,{oobCode:e}),i=r.requestType;switch(q(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":q(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":q(r.mfaInfo,n,"internal-error");default:q(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Sc._fromServerResponse(Ze(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function V2(t,e){const{data:n}=await uP(J(t),e);return n.email}async function cP(t,e,n){if(Xe(t.app))return Promise.reject(Tt(t));const r=Ze(t),o=await Xu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nP).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Qy(t),l}),a=await Hn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function hP(t,e,n){return Xe(t.app)?Promise.reject(Tt(t)):xf(J(t),fs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Qy(t),r})}/**
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
 */async function L2(t,e,n){const r=Ze(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){q(a.handleCodeInApp,r,"argument-error"),a&&bf(r,o,a)}s(i,n),await Xu(r,i,"getOobCode",p2)}function M2(t,e){const n=Pf.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function F2(t,e,n){if(Xe(t.app))return Promise.reject(Tt(t));const r=J(t),i=fs.credentialWithLink(e,n||Qu());return q(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),xf(r,i)}/**
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
 */async function U2(t,e){return tt(t,"POST","/v1/accounts:createAuthUri",et(t,e))}/**
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
 */async function j2(t,e){const n=zy()?Qu():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await U2(J(t),r);return i||[]}async function B2(t,e){const n=J(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&bf(n.auth,i,e);const{email:s}=await d2(n.auth,i);s!==t.email&&await t.reload()}async function z2(t,e,n){const r=J(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&bf(r.auth,s,n);const{email:o}=await m2(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function $2(t,e){return tt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function q2(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=J(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ii(r,$2(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function G2(t,e){const n=J(t);return Xe(n.auth.app)?Promise.reject(Tt(n.auth)):dP(n,e,null)}function W2(t,e){return dP(J(t),null,e)}async function dP(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await ii(t,l2(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function H2(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Af(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new wa(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new K2(s,i);case"github.com":return new Q2(s,i);case"google.com":return new Y2(s,i);case"twitter.com":return new X2(s,i,t.screenName||null);case"custom":case"anonymous":return new wa(s,null);default:return new wa(s,r,i)}}class wa{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class fP extends wa{constructor(e,n,r,i){super(e,n,r),this.username=i}}class K2 extends wa{constructor(e,n){super(e,"facebook.com",n)}}class Q2 extends fP{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class Y2 extends wa{constructor(e,n){super(e,"google.com",n)}}class X2 extends fP{constructor(e,n,r){super(e,"twitter.com",n,r)}}function J2(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:H2(n)}function Z2(t,e,n,r){return J(t).onIdTokenChanged(e,n,r)}function eF(t,e,n){return J(t).beforeAuthStateChanged(e,n)}function tF(t){return J(t).signOut()}/**
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
 */class js{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new js("enroll",e,n)}static _fromMfaPendingCredential(e){return new js("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return js._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return js._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Yy{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Ze(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Sc._fromServerResponse(r,a));q(i.mfaPendingCredential,r,"internal-error");const o=js._fromMfaPendingCredential(i.mfaPendingCredential);return new Yy(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const h=await Hn._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(h.user),h;case"reauthenticate":return q(n.user,r,"internal-error"),Hn._forOperation(n.user,n.operationType,c);default:St(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function nF(t,e){var n;const r=J(t),i=e;return q(e.customData.operationType,r,"argument-error"),q((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Yy._fromError(r,i)}/**
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
 */function rF(t,e){return tt(t,"POST","/v2/accounts/mfaEnrollment:start",et(t,e))}function iF(t,e){return tt(t,"POST","/v2/accounts/mfaEnrollment:finalize",et(t,e))}function sF(t,e){return tt(t,"POST","/v2/accounts/mfaEnrollment:withdraw",et(t,e))}class Xy{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Sc._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Xy(e)}async getSession(){return js._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await ii(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await ii(this.user,sF(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Bp=new WeakMap;function oF(t){const e=J(t);return Bp.has(e)||Bp.set(e,Xy._fromUser(e)),Bp.get(e)}const Dd="__sak";/**
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
 */class pP{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Dd,"1"),this.storage.removeItem(Dd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function aF(){const t=Ue();return qy(t)||ul(t)}const lF=1e3,uF=10;class mP extends pP{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=aF()&&GM(),this.fallbackToPolling=YC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);qM()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uF):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},lF)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mP.type="LOCAL";const Nf=mP;/**
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
 */class gP extends pP{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gP.type="SESSION";const ss=gP;/**
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
 */function cF(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Df{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Df(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await cF(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Df.receivers=[];/**
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
 */function Rc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class hF{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Rc("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function lt(){return window}function dF(t){lt().location.href=t}/**
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
 */function Jy(){return typeof lt().WorkerGlobalScope<"u"&&typeof lt().importScripts=="function"}async function fF(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pF(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mF(){return Jy()?self:null}/**
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
 */const _P="firebaseLocalStorageDb",gF=1,Od="firebaseLocalStorage",yP="fbase_key";class Ac{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Of(t,e){return t.transaction([Od],e?"readwrite":"readonly").objectStore(Od)}function _F(){const t=indexedDB.deleteDatabase(_P);return new Ac(t).toPromise()}function Ig(){const t=indexedDB.open(_P,gF);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Od,{keyPath:yP})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Od)?e(r):(r.close(),await _F(),e(await Ig()))})})}async function WI(t,e,n){const r=Of(t,!0).put({[yP]:e,value:n});return new Ac(r).toPromise()}async function yF(t,e){const n=Of(t,!1).get(e),r=await new Ac(n).toPromise();return r===void 0?null:r.value}function HI(t,e){const n=Of(t,!0).delete(e);return new Ac(n).toPromise()}const vF=800,wF=3;class vP{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ig(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>wF)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Df._getInstance(mF()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fF(),!this.activeServiceWorker)return;this.sender=new hF(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pF()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ig();return await WI(e,Dd,"1"),await HI(e,Dd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>WI(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>yF(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>HI(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Of(i,!1).getAll();return new Ac(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vF)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vP.type="LOCAL";const Ha=vP;/**
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
 */function EF(t,e){return tt(t,"POST","/v2/accounts/mfaSignIn:start",et(t,e))}function IF(t,e){return tt(t,"POST","/v2/accounts/mfaSignIn:finalize",et(t,e))}/**
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
 */const TF=500,SF=6e4,dh=1e12;class RF{constructor(e){this.auth=e,this.counter=dh,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new AF(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||dh;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||dh;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||dh;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class AF{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;q(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=CF(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},SF)},TF))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function CF(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const zp=JC("rcb"),PF=new Ec(3e4,6e4);class kF{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=lt().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return q(xF(n),e,"argument-error"),this.shouldResolveImmediately(n)&&MI(lt().grecaptcha)?Promise.resolve(lt().grecaptcha):new Promise((r,i)=>{const s=lt().setTimeout(()=>{i(mt(e,"network-request-failed"))},PF.get());lt()[zp]=()=>{lt().clearTimeout(s),delete lt()[zp];const a=lt().grecaptcha;if(!a||!MI(a)){i(mt(e,"internal-error"));return}const l=a.render;a.render=(c,h)=>{const f=l(c,h);return this.counter++,f},this.hostLanguage=n,r(a)};const o=`${JM()}?${Ja({onload:zp,render:"explicit",hl:n})}`;Gy(o).catch(()=>{clearTimeout(s),i(mt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=lt().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function xF(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class bF{async load(e){return new RF(e)}clearedOneInstance(){}}/**
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
 */const wP="recaptcha",NF={theme:"light",type:"image"};let DF=class{constructor(e,n,r=Object.assign({},NF)){this.parameters=r,this.type=wP,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ze(e),this.isInvisible=this.parameters.size==="invisible",q(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;q(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new bF:new kF,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){q(!this.parameters.sitekey,this.auth,"argument-error"),q(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),q(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=lt()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){q(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){q(zy()&&!Jy(),this.auth,"internal-error"),await OF(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await bM(this.auth);q(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return q(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function OF(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Zy{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ws._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function VF(t,e,n){if(Xe(t.app))return Promise.reject(Tt(t));const r=Ze(t),i=await Vf(r,e,J(n));return new Zy(i,s=>xf(r,s))}async function LF(t,e,n){const r=J(t);await kf(!1,r,"phone");const i=await Vf(r.auth,e,J(n));return new Zy(i,s=>aP(r,s))}async function MF(t,e,n){const r=J(t);if(Xe(r.auth.app))return Promise.reject(Tt(r.auth));const i=await Vf(r.auth,e,J(n));return new Zy(i,s=>lP(r,s))}async function Vf(t,e,n){var r;const i=await n.verify();try{q(typeof i=="string",t,"argument-error"),q(n.type===wP,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return q(o.type==="enroll",t,"internal-error"),(await rF(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{q(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return q(a,t,"missing-multi-factor-info"),(await EF(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await v2(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function FF(t,e){const n=J(t);if(Xe(n.auth.app))return Promise.reject(Tt(n.auth));await Wy(n,e)}/**
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
 */let uo=class Bh{constructor(e){this.providerId=Bh.PROVIDER_ID,this.auth=Ze(e)}verifyPhoneNumber(e,n){return Vf(this.auth,e,J(n))}static credential(e,n){return Ws._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Bh.credentialFromTaggedObject(n)}static credentialFromError(e){return Bh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ws._fromTokenResponse(n,r):null}};uo.PROVIDER_ID="phone";uo.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function To(t,e){return e?Cn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ev extends cl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UF(t){return oP(t.auth,new ev(t),t.bypassAuthState)}function jF(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),sP(n,new ev(t),t.bypassAuthState)}async function BF(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),Wy(n,new ev(t),t.bypassAuthState)}/**
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
 */class EP{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UF;case"linkViaPopup":case"linkViaRedirect":return BF;case"reauthViaPopup":case"reauthViaRedirect":return jF;default:St(this.auth,"internal-error")}}resolve(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zF=new Ec(2e3,1e4);async function $F(t,e,n){if(Xe(t.app))return Promise.reject(mt(t,"operation-not-supported-in-this-environment"));const r=Ze(t);ll(t,e,di);const i=To(r,n);return new Gr(r,"signInViaPopup",e,i).executeNotNull()}async function qF(t,e,n){const r=J(t);if(Xe(r.auth.app))return Promise.reject(mt(r.auth,"operation-not-supported-in-this-environment"));ll(r.auth,e,di);const i=To(r.auth,n);return new Gr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function GF(t,e,n){const r=J(t);ll(r.auth,e,di);const i=To(r.auth,n);return new Gr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Gr extends EP{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Gr.currentPopupAction&&Gr.currentPopupAction.cancel(),Gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){ur(this.filter.length===1,"Popup operations only handle one event");const e=Rc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zF.get())};e()}}Gr.currentPopupAction=null;/**
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
 */const WF="pendingRedirect",mu=new Map;class HF extends EP{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=mu.get(this.auth._key());if(!e){try{const r=await KF(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}mu.set(this.auth._key(),e)}return this.bypassAuthState||mu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KF(t,e){const n=TP(e),r=IP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function tv(t,e){return IP(t)._set(TP(e),"true")}function QF(){mu.clear()}function nv(t,e){mu.set(t._key(),e)}function IP(t){return Cn(t._redirectPersistence)}function TP(t){return Gs(WF,t.config.apiKey,t.name)}/**
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
 */function YF(t,e,n){return XF(t,e,n)}async function XF(t,e,n){if(Xe(t.app))return Promise.reject(Tt(t));const r=Ze(t);ll(t,e,di),await r._initializationPromise;const i=To(r,n);return await tv(i,r),i._openRedirect(r,e,"signInViaRedirect")}function JF(t,e,n){return ZF(t,e,n)}async function ZF(t,e,n){const r=J(t);if(ll(r.auth,e,di),Xe(r.auth.app))return Promise.reject(Tt(r.auth));await r.auth._initializationPromise;const i=To(r.auth,n);await tv(i,r.auth);const s=await SP(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function eU(t,e,n){return tU(t,e,n)}async function tU(t,e,n){const r=J(t);ll(r.auth,e,di),await r.auth._initializationPromise;const i=To(r.auth,n);await kf(!1,r,e.providerId),await tv(i,r.auth);const s=await SP(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function nU(t,e){return await Ze(t)._initializationPromise,Lf(t,e,!1)}async function Lf(t,e,n=!1){if(Xe(t.app))return Promise.reject(Tt(t));const r=Ze(t),i=To(r,e),o=await new HF(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function SP(t){const e=Rc(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const rU=10*60*1e3;class RP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iU(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!AP(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rU&&this.cachedEventUids.clear(),this.cachedEventUids.has(KI(e))}saveEventToCache(e){this.cachedEventUids.add(KI(e)),this.lastProcessedEventTime=Date.now()}}function KI(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function AP({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iU(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return AP(t);default:return!1}}/**
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
 */async function CP(t,e={}){return tt(t,"GET","/v1/projects",e)}/**
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
 */const sU=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oU=/^https?/;async function aU(t){if(t.config.emulator)return;const{authorizedDomains:e}=await CP(t);for(const n of e)try{if(lU(n))return}catch{}St(t,"unauthorized-domain")}function lU(t){const e=Qu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!oU.test(n))return!1;if(sU.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const uU=new Ec(3e4,6e4);function QI(){const t=lt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cU(t){return new Promise((e,n)=>{var r,i,s;function o(){QI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{QI(),n(mt(t,"network-request-failed"))},timeout:uU.get()})}if(!((i=(r=lt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=lt().gapi)===null||s===void 0)&&s.load)o();else{const a=JC("iframefcb");return lt()[a]=()=>{gapi.load?o():n(mt(t,"network-request-failed"))},Gy(`${e2()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw zh=null,e})}let zh=null;function hU(t){return zh=zh||cU(t),zh}/**
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
 */const dU=new Ec(5e3,15e3),fU="__/auth/iframe",pU="emulator/auth/iframe",mU={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gU=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _U(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$y(e,pU):`https://${t.config.authDomain}/${fU}`,r={apiKey:e.apiKey,appName:t.name,v:ai},i=gU.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ja(r).slice(1)}`}async function yU(t){const e=await hU(t),n=lt().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:_U(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mU,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=mt(t,"network-request-failed"),a=lt().setTimeout(()=>{s(o)},dU.get());function l(){lt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const vU={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wU=500,EU=600,IU="_blank",TU="http://localhost";class YI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SU(t,e,n,r=wU,i=EU){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},vU),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ue().toLowerCase();n&&(a=WC(c)?IU:n),GC(c)&&(e=e||TU,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[v,S])=>`${m}${v}=${S},`,"");if($M(c)&&a!=="_self")return RU(e||"",a),new YI(null);const f=window.open(e||"",a,h);q(f,t,"popup-blocked");try{f.focus()}catch{}return new YI(f)}function RU(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const AU="__/auth/handler",CU="emulator/auth/handler",PU=encodeURIComponent("fac");async function Tg(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ai,eventId:i};if(e instanceof di){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",iN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries(s||{}))o[h]=f}if(e instanceof hl){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${PU}=${encodeURIComponent(l)}`:"";return`${kU(t)}?${Ja(a).slice(1)}${c}`}function kU({config:t}){return t.emulator?$y(t,CU):`https://${t.authDomain}/${AU}`}/**
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
 */const $p="webStorageSupport";class xU{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ss,this._completeRedirectFn=Lf,this._overrideRedirectResult=nv}async _openPopup(e,n,r,i){var s;ur((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Tg(e,n,r,Qu(),i);return SU(e,o,Rc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Tg(e,n,r,Qu(),i);return dF(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ur(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yU(e),r=new RP(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($p,{type:$p},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[$p];o!==void 0&&n(!!o),St(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aU(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return YC()||qy()||ul()}}const PP=xU;class bU{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Er("unexpected MultiFactorSessionType")}}}class rv extends bU{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new rv(e)}_finalizeEnroll(e,n,r){return iF(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return IF(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class kP{constructor(){}static assertion(e){return rv._fromCredential(e)}}kP.FACTOR_ID="phone";var XI="@firebase/auth",JI="1.7.5";/**
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
 */class NU{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function DU(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function OU(t){ti(new Wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:XC(t)},c=new YM(r,i,s,l);return s2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ti(new Wn("auth-internal",e=>{const n=Ze(e.getProvider("auth").getImmediate());return(r=>new NU(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kn(XI,JI,DU(t)),kn(XI,JI,"esm2017")}/**
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
 */const VU=5*60,LU=GS("authIdTokenMaxAge")||VU;let ZI=null;const MU=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>LU)return;const i=n==null?void 0:n.token;ZI!==i&&(ZI=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function FU(t=rf()){const e=Za(t,"auth");if(e.isInitialized())return e.getImmediate();const n=i2(t,{popupRedirectResolver:PP,persistence:[Ha,Nf,ss]}),r=GS("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=MU(s.toString());eF(n,o,()=>o(n.currentUser)),Z2(n,a=>o(a))}}const i=zS("auth");return i&&ZC(n,`http://${i}`),n}function UU(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}XM({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=mt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",UU().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});OU("Browser");/**
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
 */function co(){return window}/**
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
 */const jU=2e3;async function BU(t,e,n){var r;const{BuildInfo:i}=co();ur(e.sessionId,"AuthEvent did not contain a session ID");const s=await WU(e.sessionId),o={};return ul()?o.ibi=i.packageName:Ic()?o.apn=i.packageName:St(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Tg(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function zU(t){const{BuildInfo:e}=co(),n={};ul()?n.iosBundleId=e.packageName:Ic()?n.androidPackageName=e.packageName:St(t,"operation-not-supported-in-this-environment"),await CP(t,n)}function $U(t){const{cordova:e}=co();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,zM()?"_blank":"_system","location=yes"),n(i)})})}async function qU(t,e,n){const{cordova:r}=co();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var f;s();const m=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof m=="function"&&m(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(mt(t,"redirect-cancelled-by-user"))},jU))}function h(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),Ic()&&document.addEventListener("visibilitychange",h,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",h,!1),a&&window.clearTimeout(a)}})}finally{i()}}function GU(t){var e,n,r,i,s,o,a,l,c,h;const f=co();q(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),q(typeof((n=f==null?void 0:f.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),q(typeof((s=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),q(typeof((l=(a=(o=f==null?void 0:f.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),q(typeof((h=(c=f==null?void 0:f.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||h===void 0?void 0:h.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function WU(t){const e=HU(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function HU(t){if(ur(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const KU=20;class QU extends RP{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function YU(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:ZU(),postBody:null,tenantId:t.tenantId,error:mt(t,"no-auth-event")}}function XU(t,e){return Sg()._set(Rg(t),e)}async function eT(t){const e=await Sg()._get(Rg(t));return e&&await Sg()._remove(Rg(t)),e}function JU(t,e){var n,r;const i=tj(e);if(i.includes("/__/auth/callback")){const s=$h(i),o=s.firebaseError?ej(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?mt(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function ZU(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<KU;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Sg(){return Cn(Nf)}function Rg(t){return Gs("authEvent",t.config.apiKey,t.name)}function ej(t){try{return JSON.parse(t)}catch{return null}}function tj(t){const e=$h(t),n=e.link?decodeURIComponent(e.link):void 0,r=$h(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return $h(i).link||i||r||n||t}function $h(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return la(n.join("?"))}/**
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
 */const nj=500;class rj{constructor(){this._redirectPersistence=ss,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Lf,this._overrideRedirectResult=nv}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new QU(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){St(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){GU(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),QF(),await this._originValidation(e);const o=YU(e,r,i);await XU(e,o);const a=await BU(e,o,n),l=await $U(a);return qU(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zU(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=co(),o=setTimeout(async()=>{await eT(e),n.onEvent(tT())},nj),a=async h=>{clearTimeout(o);const f=await eT(e);let m=null;f&&(h!=null&&h.url)&&(m=JU(f,h.url)),n.onEvent(m||tT())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,c=`${s.packageName.toLowerCase()}://`;co().handleOpenURL=async h=>{if(h.toLowerCase().startsWith(c)&&a({url:h}),typeof l=="function")try{l(h)}catch(f){console.error(f)}}}}const ij=rj;function tT(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:mt("no-auth-event")}}/**
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
 */function sj(t,e){Ze(t)._logFramework(e)}var oj="@firebase/auth-compat",aj="0.5.10";/**
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
 */const lj=1e3;function gu(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function uj(){return gu()==="http:"||gu()==="https:"}function xP(t=Ue()){return!!((gu()==="file:"||gu()==="ionic:"||gu()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function cj(){return V_()||O_()}function hj(){return YS()&&(document==null?void 0:document.documentMode)===11}function dj(t=Ue()){return/Edge\/\d+/.test(t)}function fj(t=Ue()){return hj()||dj(t)}function bP(){try{const t=self.localStorage,e=Rc();if(t)return t.setItem(e,"1"),t.removeItem(e),fj()?Lu():!0}catch{return iv()&&Lu()}return!1}function iv(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function qp(){return(uj()||QS()||xP())&&!cj()&&bP()&&!iv()}function NP(){return xP()&&typeof document<"u"}async function pj(){return NP()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},lj);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function mj(){return typeof window<"u"?window:null}/**
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
 */const Rn={LOCAL:"local",NONE:"none",SESSION:"session"},Ul=q,DP="persistence";function gj(t,e){if(Ul(Object.values(Rn).includes(e),t,"invalid-persistence-type"),V_()){Ul(e!==Rn.SESSION,t,"unsupported-persistence-type");return}if(O_()){Ul(e===Rn.NONE,t,"unsupported-persistence-type");return}if(iv()){Ul(e===Rn.NONE||e===Rn.LOCAL&&Lu(),t,"unsupported-persistence-type");return}Ul(e===Rn.NONE||bP(),t,"unsupported-persistence-type")}async function Ag(t){await t._initializationPromise;const e=OP(),n=Gs(DP,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function _j(t,e){const n=OP();if(!n)return[];const r=Gs(DP,t,e);switch(n.getItem(r)){case Rn.NONE:return[Ga];case Rn.LOCAL:return[Ha,ss];case Rn.SESSION:return[ss];default:return[]}}function OP(){var t;try{return((t=mj())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const yj=q;class Li{constructor(){this.browserResolver=Cn(PP),this.cordovaResolver=Cn(ij),this.underlyingResolver=null,this._redirectPersistence=ss,this._completeRedirectFn=Lf,this._overrideRedirectResult=nv}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return NP()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return yj(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await pj();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function VP(t){return t.unwrap()}function vj(t){return t.wrapped()}/**
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
 */function wj(t){return LP(t)}function Ej(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new Ij(t,nF(t,e))}else if(r){const i=LP(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function LP(t){const{_tokenResponse:e}=t instanceof qt?t.customData:t;if(!e)return null;if(!(t instanceof qt)&&"temporaryProof"in e&&"phoneNumber"in e)return uo.credentialFromResult(t);const n=e.providerId;if(!n||n===Fl.PASSWORD)return null;let r;switch(n){case Fl.GOOGLE:r=mr;break;case Fl.FACEBOOK:r=pr;break;case Fl.GITHUB:r=gr;break;case Fl.TWITTER:r=_r;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Wa._create(n,a):kr._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new va(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof qt?r.credentialFromError(t):r.credentialFromResult(t)}function hn(t,e){return e.catch(n=>{throw n instanceof qt&&Ej(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:wj(n),additionalUserInfo:J2(n),user:Wr.getOrCreate(i)}})}async function Cg(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>hn(t,n.confirm(r))}}class Ij{constructor(e,n){this.resolver=n,this.auth=vj(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return hn(VP(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Wr{constructor(e){this._delegate=e,this.multiFactor=oF(e)}static getOrCreate(e){return Wr.USER_MAP.has(e)||Wr.USER_MAP.set(e,new Wr(e)),Wr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return hn(this.auth,aP(this._delegate,e))}async linkWithPhoneNumber(e,n){return Cg(this.auth,LF(this._delegate,e,n))}async linkWithPopup(e){return hn(this.auth,GF(this._delegate,e,Li))}async linkWithRedirect(e){return await Ag(Ze(this.auth)),eU(this._delegate,e,Li)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return hn(this.auth,lP(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Cg(this.auth,MF(this._delegate,e,n))}reauthenticateWithPopup(e){return hn(this.auth,qF(this._delegate,e,Li))}async reauthenticateWithRedirect(e){return await Ag(Ze(this.auth)),JF(this._delegate,e,Li)}sendEmailVerification(e){return B2(this._delegate,e)}async unlink(e){return await k2(this._delegate,e),this}updateEmail(e){return G2(this._delegate,e)}updatePassword(e){return W2(this._delegate,e)}updatePhoneNumber(e){return FF(this._delegate,e)}updateProfile(e){return q2(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return z2(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Wr.USER_MAP=new WeakMap;/**
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
 */const jl=q;class Pg{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;jl(r,"invalid-api-key",{appName:e.name}),jl(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Li:void 0;this._delegate=n.initialize({options:{persistence:Tj(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(EM),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Wr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){ZC(this._delegate,e,n)}applyActionCode(e){return O2(this._delegate,e)}checkActionCode(e){return uP(this._delegate,e)}confirmPasswordReset(e,n){return D2(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return hn(this._delegate,cP(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return j2(this._delegate,e)}isSignInWithEmailLink(e){return M2(this._delegate,e)}async getRedirectResult(){jl(qp(),this._delegate,"operation-not-supported-in-this-environment");const e=await nU(this._delegate,Li);return e?hn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){sj(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=nT(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=nT(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return L2(this._delegate,e,n)}sendPasswordResetEmail(e,n){return N2(this._delegate,e,n||void 0)}async setPersistence(e){gj(this._delegate,e);let n;switch(e){case Rn.SESSION:n=ss;break;case Rn.LOCAL:n=await Cn(Ha)._isAvailable()?Ha:Nf;break;case Rn.NONE:n=Ga;break;default:return St("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return hn(this._delegate,P2(this._delegate))}signInWithCredential(e){return hn(this._delegate,xf(this._delegate,e))}signInWithCustomToken(e){return hn(this._delegate,b2(this._delegate,e))}signInWithEmailAndPassword(e,n){return hn(this._delegate,hP(this._delegate,e,n))}signInWithEmailLink(e,n){return hn(this._delegate,F2(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Cg(this._delegate,VF(this._delegate,e,n))}async signInWithPopup(e){return jl(qp(),this._delegate,"operation-not-supported-in-this-environment"),hn(this._delegate,$F(this._delegate,e,Li))}async signInWithRedirect(e){return jl(qp(),this._delegate,"operation-not-supported-in-this-environment"),await Ag(this._delegate),YF(this._delegate,e,Li)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return V2(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Pg.Persistence=Rn;function nT(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Wr.getOrCreate(o)),error:e,complete:n}}function Tj(t,e){const n=_j(t,e);if(typeof self<"u"&&!n.includes(Ha)&&n.push(Ha),typeof window<"u")for(const r of[Nf,ss])n.includes(r)||n.push(r);return n.includes(Ga)||n.push(Ga),n}/**
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
 */class sv{constructor(){this.providerId="phone",this._delegate=new uo(VP(Io.auth()))}static credential(e,n){return uo.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}sv.PHONE_SIGN_IN_METHOD=uo.PHONE_SIGN_IN_METHOD;sv.PROVIDER_ID=uo.PROVIDER_ID;/**
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
 */const Sj=q;class Rj{constructor(e,n,r=Io.app()){var i;Sj((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new DF(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const Aj="auth-compat";function Cj(t){t.INTERNAL.registerComponent(new Wn(Aj,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Pg(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Uo.EMAIL_SIGNIN,PASSWORD_RESET:Uo.PASSWORD_RESET,RECOVER_EMAIL:Uo.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Uo.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Uo.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Uo.VERIFY_EMAIL}},EmailAuthProvider:fs,FacebookAuthProvider:pr,GithubAuthProvider:gr,GoogleAuthProvider:mr,OAuthProvider:va,SAMLAuthProvider:bd,PhoneAuthProvider:sv,PhoneMultiFactorGenerator:kP,RecaptchaVerifier:Rj,TwitterAuthProvider:_r,Auth:Pg,AuthCredential:cl,Error:qt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(oj,aj)}Cj(Io);const Pj="@firebase/firestore-compat",kj="0.3.33";/**
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
 */function ov(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new B("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function rT(){if(typeof Uint8Array>"u")throw new B("unimplemented","Uint8Arrays are not available in this environment.")}function iT(){if(!YD())throw new B("unimplemented","Blobs are unavailable in Firestore in this environment.")}let MP=class kg{constructor(e){this._delegate=e}static fromBase64String(e){return iT(),new kg(Pr.fromBase64String(e))}static fromUint8Array(e){return rT(),new kg(Pr.fromUint8Array(e))}toBase64(){return iT(),this._delegate.toBase64()}toUint8Array(){return rT(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
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
 */function xg(t){return xj(t,["next","error","complete"])}function xj(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class bj{enableIndexedDbPersistence(e,n){return PL(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return kL(e._delegate)}clearIndexedDbPersistence(e){return xL(e._delegate)}}class FP{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Zi||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&lr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){hC(this._delegate,e,n,r)}enableNetwork(){return NL(this._delegate)}disableNetwork(){return DL(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,uC("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return bL(this._delegate)}onSnapshotsInSync(e){return tM(this._delegate,e)}get app(){if(!this._appCompat)throw new B("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Ka(this,Pd(this._delegate,e))}catch(n){throw Jt(n,"collection()","Firestore.collection()")}}doc(e){try{return new jn(this,qa(this._delegate,e))}catch(n){throw Jt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Xt(this,TL(this._delegate,e))}catch(n){throw Jt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return sM(this._delegate,n=>e(new UP(this,n)))}batch(){return At(this._delegate),new jP(new rM(this._delegate,e=>wc(this._delegate,e)))}loadBundle(e){return OL(this._delegate,e)}namedQuery(e){return VL(this._delegate,e).then(n=>n?new Xt(this,n):null)}}class Mf extends My{constructor(e){super(),this.firestore=e}convertBytes(e){return new MP(new Pr(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return jn.forKey(n,this.firestore,null)}}function Nj(t){_D(t)}class UP{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Mf(e)}get(e){const n=Bs(e);return this._delegate.get(n).then(r=>new Zu(this._firestore,new ri(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Bs(e);return r?(ov("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Bs(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Bs(e);return this._delegate.delete(n),this}}class jP{constructor(e){this._delegate=e}set(e,n,r){const i=Bs(e);return r?(ov("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Bs(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Bs(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class ho{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new fu(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new ec(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=ho.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new ho(e,new Mf(e),n),i.set(n,s)),s}}ho.INSTANCES=new WeakMap;class jn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Mf(e)}static forPath(e,n,r){if(e.length%2!==0)throw new B("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new jn(n,new $e(n._delegate,r,new K(e)))}static forKey(e,n,r){return new jn(n,new $e(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Ka(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Ka(this.firestore,Pd(this._delegate,e))}catch(n){throw Jt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=J(e),e instanceof $e?mC(this._delegate,e):!1}set(e,n){n=ov("DocumentReference.set",n);try{return n?DI(this._delegate,e,n):DI(this._delegate,e)}catch(r){throw Jt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?wg(this._delegate,e):wg(this._delegate,e,n,...r)}catch(i){throw Jt(i,"updateDoc()","DocumentReference.update()")}}delete(){return DC(this._delegate)}onSnapshot(...e){const n=BP(e),r=zP(e,i=>new Zu(this.firestore,new ri(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return VC(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=XL(this._delegate):(e==null?void 0:e.source)==="server"?n=JL(this._delegate):n=YL(this._delegate),n.then(r=>new Zu(this.firestore,new ri(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new jn(this.firestore,e?this._delegate.withConverter(ho.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Jt(t,e,n){return t.message=t.message.replace(e,n),t}function BP(t){for(const e of t)if(typeof e=="object"&&!xg(e))return e;return{}}function zP(t,e){var n,r;let i;return xg(t[0])?i=t[0]:xg(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Zu{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new jn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return bC(this._delegate,e._delegate)}}class ec extends Zu{data(e){const n=this._delegate.data(e);return this._delegate._converter||yD(n!==void 0),n}}class Xt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Mf(e)}where(e,n,r){try{return new Xt(this.firestore,Fr(this._delegate,PC(e,n,r)))}catch(i){throw Jt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Xt(this.firestore,Fr(this._delegate,BL(e,n)))}catch(r){throw Jt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Xt(this.firestore,Fr(this._delegate,zL(e)))}catch(n){throw Jt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Xt(this.firestore,Fr(this._delegate,$L(e)))}catch(n){throw Jt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Xt(this.firestore,Fr(this._delegate,qL(...e)))}catch(n){throw Jt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Xt(this.firestore,Fr(this._delegate,GL(...e)))}catch(n){throw Jt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Xt(this.firestore,Fr(this._delegate,WL(...e)))}catch(n){throw Jt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Xt(this.firestore,Fr(this._delegate,HL(...e)))}catch(n){throw Jt(n,"endAt()","Query.endAt()")}}isEqual(e){return gC(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=ZL(this._delegate):(e==null?void 0:e.source)==="server"?n=eM(this._delegate):n=NC(this._delegate),n.then(r=>new bg(this.firestore,new is(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=BP(e),r=zP(e,i=>new bg(this.firestore,new is(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return VC(this._delegate,n,r)}withConverter(e){return new Xt(this.firestore,e?this._delegate.withConverter(ho.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Dj{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new ec(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class bg{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Xt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new ec(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new Dj(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new ec(this._firestore,r))})}isEqual(e){return bC(this._delegate,e._delegate)}}class Ka extends Xt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new jn(this.firestore,e):null}doc(e){try{return e===void 0?new jn(this.firestore,qa(this._delegate)):new jn(this.firestore,qa(this._delegate,e))}catch(n){throw Jt(n,"doc()","CollectionReference.doc()")}}add(e){return OC(this._delegate,e).then(n=>new jn(this.firestore,n))}isEqual(e){return mC(this._delegate,e._delegate)}withConverter(e){return new Ka(this.firestore,e?this._delegate.withConverter(ho.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Bs(t){return we(t,$e)}/**
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
 */class av{constructor(...e){this._delegate=new rs(...e)}static documentId(){return new av(Le.keyField().canonicalString())}isEqual(e){return e=J(e),e instanceof rs?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Os{constructor(e){this._delegate=e}static serverTimestamp(){const e=aM();return e._methodName="FieldValue.serverTimestamp",new Os(e)}static delete(){const e=oM();return e._methodName="FieldValue.delete",new Os(e)}static arrayUnion(...e){const n=lM(...e);return n._methodName="FieldValue.arrayUnion",new Os(n)}static arrayRemove(...e){const n=uM(...e);return n._methodName="FieldValue.arrayRemove",new Os(n)}static increment(e){const n=cM(e);return n._methodName="FieldValue.increment",new Os(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const Oj={Firestore:FP,GeoPoint:_f,Timestamp:Fe,Blob:MP,Transaction:UP,WriteBatch:jP,DocumentReference:jn,DocumentSnapshot:Zu,Query:Xt,QueryDocumentSnapshot:ec,QuerySnapshot:bg,CollectionReference:Ka,FieldPath:av,FieldValue:Os,setLogLevel:Nj,CACHE_SIZE_UNLIMITED:AL};function Vj(t,e){t.INTERNAL.registerComponent(new Wn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},Oj)))}/**
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
 */function Lj(t){Vj(t,(e,n)=>new FP(e,n,new bj)),t.registerVersion(Pj,kj)}Lj(Io);/**
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
 */const $P="firebasestorage.googleapis.com",qP="storageBucket",Mj=2*60*1e3,Fj=10*60*1e3,Uj=1e3;/**
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
 */class We extends qt{constructor(e,n,r=0){super(Gp(e),`Firebase Storage: ${n} (${Gp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,We.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Gp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Oe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Oe||(Oe={}));function Gp(t){return"storage/"+t}function lv(){const t="An unknown error occurred, please check the error payload for server response.";return new We(Oe.UNKNOWN,t)}function jj(t){return new We(Oe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Bj(t){return new We(Oe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function zj(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new We(Oe.UNAUTHENTICATED,t)}function $j(){return new We(Oe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function qj(t){return new We(Oe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function GP(){return new We(Oe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function WP(){return new We(Oe.CANCELED,"User canceled the upload/download.")}function Gj(t){return new We(Oe.INVALID_URL,"Invalid URL '"+t+"'.")}function Wj(t){return new We(Oe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Hj(){return new We(Oe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+qP+"' property when initializing the app?")}function HP(){return new We(Oe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Kj(){return new We(Oe.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Qj(){return new We(Oe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Yj(t){return new We(Oe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ea(t){return new We(Oe.INVALID_ARGUMENT,t)}function KP(){return new We(Oe.APP_DELETED,"The Firebase app was deleted.")}function QP(t){return new We(Oe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function _u(t,e){return new We(Oe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Bl(t){throw new We(Oe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class $t{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=$t.makeFromUrl(e,n)}catch{return new $t(e,"")}if(r.path==="")return r;throw Wj(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",v=new RegExp(`^https?://${f}/${h}/b/${i}/o${m}`,"i"),S={bucket:1,path:3},P=n===$P?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",w=new RegExp(`^https?://${P}/${i}/${x}`,"i"),I=[{regex:a,indices:l,postModify:s},{regex:v,indices:S,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<I.length;b++){const F=I[b],U=F.regex.exec(e);if(U){const T=U[F.indices.bucket];let y=U[F.indices.path];y||(y=""),r=new $t(T,y),F.postModify(r);break}}if(r==null)throw Gj(e);return r}}class Xj{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Jj(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function h(...x){c||(c=!0,e.apply(null,x))}function f(x){i=setTimeout(()=>{i=null,t(v,l())},x)}function m(){s&&clearTimeout(s)}function v(x,...w){if(c){m();return}if(x){m(),h.call(null,x,...w);return}if(l()||o){m(),h.call(null,x,...w);return}r<64&&(r*=2);let I;a===1?(a=2,I=0):I=(r+Math.random())*1e3,f(I)}let S=!1;function P(x){S||(S=!0,m(),!c&&(i!==null?(x||(a=2),clearTimeout(i),f(0)):x||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function Zj(t){t(!1)}/**
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
 */function eB(t){return t!==void 0}function tB(t){return typeof t=="function"}function nB(t){return typeof t=="object"&&!Array.isArray(t)}function Ff(t){return typeof t=="string"||t instanceof String}function sT(t){return uv()&&t instanceof Blob}function uv(){return typeof Blob<"u"}function Ng(t,e,n,r){if(r<e)throw Ea(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ea(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function ps(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function YP(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Hs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Hs||(Hs={}));/**
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
 */function XP(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class rB{constructor(e,n,r,i,s,o,a,l,c,h,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,S)=>{this.resolve_=v,this.reject_=S,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new fh(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Hs.NO_ERROR,l=s.getStatus();if(!a||XP(l,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Hs.ABORT;r(!1,new fh(!1,null,h));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new fh(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());eB(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=lv();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?KP():WP();o(l)}else{const l=GP();o(l)}};this.canceled_?n(!1,new fh(!1,null,!0)):this.backoffId_=Jj(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Zj(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class fh{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function iB(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function sB(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function oB(t,e){e&&(t["X-Firebase-GMPID"]=e)}function aB(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function lB(t,e,n,r,i,s,o=!0){const a=YP(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return oB(c,e),iB(c,n),sB(c,s),aB(c,r),new rB(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function uB(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function cB(...t){const e=uB();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(uv())return new Blob(t);throw new We(Oe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function hB(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function dB(t){if(typeof atob>"u")throw Yj("base-64");return atob(t)}/**
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
 */const Bn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Wp{constructor(e,n){this.data=e,this.contentType=n||null}}function JP(t,e){switch(t){case Bn.RAW:return new Wp(ZP(e));case Bn.BASE64:case Bn.BASE64URL:return new Wp(e1(t,e));case Bn.DATA_URL:return new Wp(pB(e),mB(e))}throw lv()}function ZP(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function fB(t){let e;try{e=decodeURIComponent(t)}catch{throw _u(Bn.DATA_URL,"Malformed data URL.")}return ZP(e)}function e1(t,e){switch(t){case Bn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw _u(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Bn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw _u(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=dB(e)}catch(i){throw i.message.includes("polyfill")?i:_u(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class t1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw _u(Bn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=gB(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function pB(t){const e=new t1(t);return e.base64?e1(Bn.BASE64,e.rest):fB(e.rest)}function mB(t){return new t1(t).contentType}function gB(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class yr{constructor(e,n){let r=0,i="";sT(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(sT(this.data_)){const r=this.data_,i=hB(r,e,n);return i===null?null:new yr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new yr(r,!0)}}static getBlob(...e){if(uv()){const n=e.map(r=>r instanceof yr?r.data_:r);return new yr(cB.apply(null,n))}else{const n=e.map(o=>Ff(o)?JP(Bn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new yr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function cv(t){let e;try{e=JSON.parse(t)}catch{return null}return nB(e)?e:null}/**
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
 */function _B(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function yB(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function n1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function vB(t,e){return e}class Qt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||vB}}let ph=null;function wB(t){return!Ff(t)||t.length<2?t:n1(t)}function Cc(){if(ph)return ph;const t=[];t.push(new Qt("bucket")),t.push(new Qt("generation")),t.push(new Qt("metageneration")),t.push(new Qt("name","fullPath",!0));function e(s,o){return wB(o)}const n=new Qt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Qt("size");return i.xform=r,t.push(i),t.push(new Qt("timeCreated")),t.push(new Qt("updated")),t.push(new Qt("md5Hash",null,!0)),t.push(new Qt("cacheControl",null,!0)),t.push(new Qt("contentDisposition",null,!0)),t.push(new Qt("contentEncoding",null,!0)),t.push(new Qt("contentLanguage",null,!0)),t.push(new Qt("contentType",null,!0)),t.push(new Qt("metadata","customMetadata",!0)),ph=t,ph}function EB(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new $t(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function IB(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return EB(r,t),r}function r1(t,e,n){const r=cv(e);return r===null?null:IB(t,r,n)}function TB(t,e,n,r){const i=cv(e);if(i===null||!Ff(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const h=t.bucket,f=t.fullPath,m="/b/"+o(h)+"/o/"+o(f),v=ps(m,n,r),S=YP({alt:"media",token:c});return v+S})[0]}function hv(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
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
 */const oT="prefixes",aT="items";function SB(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[oT])for(const i of n[oT]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new $t(e,s));r.prefixes.push(o)}if(n[aT])for(const i of n[aT]){const s=t._makeStorageReference(new $t(e,i.name));r.items.push(s)}return r}function RB(t,e,n){const r=cv(n);return r===null?null:SB(t,e,r)}class fi{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Ar(t){if(!t)throw lv()}function Uf(t,e){function n(r,i){const s=r1(t,i,e);return Ar(s!==null),s}return n}function AB(t,e){function n(r,i){const s=RB(t,e,i);return Ar(s!==null),s}return n}function CB(t,e){function n(r,i){const s=r1(t,i,e);return Ar(s!==null),TB(s,i,t.host,t._protocol)}return n}function dl(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=$j():i=zj():n.getStatus()===402?i=Bj(t.bucket):n.getStatus()===403?i=qj(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function jf(t){const e=dl(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=jj(t.path)),s.serverResponse=i.serverResponse,s}return n}function i1(t,e,n){const r=e.fullServerUrl(),i=ps(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new fi(i,s,Uf(t,n),o);return a.errorHandler=jf(e),a}function PB(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=ps(o,t.host,t._protocol),l="GET",c=t.maxOperationRetryTime,h=new fi(a,l,AB(t,e.bucket),c);return h.urlParams=s,h.errorHandler=dl(e),h}function kB(t,e,n){const r=e.fullServerUrl(),i=ps(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new fi(i,s,CB(t,n),o);return a.errorHandler=jf(e),a}function xB(t,e,n,r){const i=e.fullServerUrl(),s=ps(i,t.host,t._protocol),o="PATCH",a=hv(n,r),l={"Content-Type":"application/json; charset=utf-8"},c=t.maxOperationRetryTime,h=new fi(s,o,Uf(t,r),c);return h.headers=l,h.body=a,h.errorHandler=jf(e),h}function bB(t,e){const n=e.fullServerUrl(),r=ps(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,c){}const a=new fi(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=jf(e),a}function NB(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function s1(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=NB(null,e)),r}function o1(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let I="";for(let b=0;b<2;b++)I=I+Math.random().toString().slice(2);return I}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=s1(e,r,i),h=hv(c,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+l+"--",v=yr.getBlob(f,r,m);if(v===null)throw HP();const S={name:c.fullPath},P=ps(s,t.host,t._protocol),x="POST",w=t.maxUploadRetryTime,E=new fi(P,x,Uf(t,n),w);return E.urlParams=S,E.headers=o,E.body=v.uploadData(),E.errorHandler=dl(e),E}class Vd{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function dv(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Ar(!1)}return Ar(!!n&&(e||["active"]).indexOf(n)!==-1),n}function DB(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=s1(e,r,i),a={name:o.fullPath},l=ps(s,t.host,t._protocol),c="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=hv(o,n),m=t.maxUploadRetryTime;function v(P){dv(P);let x;try{x=P.getResponseHeader("X-Goog-Upload-URL")}catch{Ar(!1)}return Ar(Ff(x)),x}const S=new fi(l,c,v,m);return S.urlParams=a,S.headers=h,S.body=f,S.errorHandler=dl(e),S}function OB(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const h=dv(c,["active","final"]);let f=null;try{f=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Ar(!1)}f||Ar(!1);const m=Number(f);return Ar(!isNaN(m)),new Vd(m,r.size(),h==="final")}const o="POST",a=t.maxUploadRetryTime,l=new fi(n,o,s,a);return l.headers=i,l.errorHandler=dl(e),l}const lT=256*1024;function VB(t,e,n,r,i,s,o,a){const l=new Vd(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw Kj();const c=l.total-l.current;let h=c;i>0&&(h=Math.min(h,i));const f=l.current,m=f+h;let v="";h===0?v="finalize":c===h?v="upload, finalize":v="upload";const S={"X-Goog-Upload-Command":v,"X-Goog-Upload-Offset":`${l.current}`},P=r.slice(f,m);if(P===null)throw HP();function x(b,F){const U=dv(b,["active","final"]),T=l.current+h,y=r.size();let R;return U==="final"?R=Uf(e,s)(b,F):R=null,new Vd(T,y,U==="final",R)}const w="POST",E=e.maxUploadRetryTime,I=new fi(n,w,x,E);return I.headers=S,I.body=P.uploadData(),I.progressCallback=a||null,I.errorHandler=dl(t),I}/**
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
 */const LB={STATE_CHANGED:"state_changed"},Zt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Hp(t){switch(t){case"running":case"pausing":case"canceling":return Zt.RUNNING;case"paused":return Zt.PAUSED;case"success":return Zt.SUCCESS;case"canceled":return Zt.CANCELED;case"error":return Zt.ERROR;default:return Zt.ERROR}}/**
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
 */class MB{constructor(e,n,r){if(tB(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function jo(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class FB{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Hs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Hs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Hs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Bl("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Bl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Bl("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Bl("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Bl("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class UB extends FB{initXhr(){this.xhr_.responseType="text"}}function ir(){return new UB}/**
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
 */class a1{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Cc(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Oe.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(XP(i.status,[]))if(s)i=GP();else{this.sleepTime=Math.max(this.sleepTime*2,Uj),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Oe.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=DB(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,ir,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=OB(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,ir,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=lT*this._chunkMultiplier,n=new Vd(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=VB(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,ir,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){lT*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=i1(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,ir,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=o1(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,ir,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=WP(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Hp(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new MB(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Hp(this._state)){case Zt.SUCCESS:jo(this._resolve.bind(null,this.snapshot))();break;case Zt.CANCELED:case Zt.ERROR:const n=this._reject;jo(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Hp(this._state)){case Zt.RUNNING:case Zt.PAUSED:e.next&&jo(e.next.bind(e,this.snapshot))();break;case Zt.SUCCESS:e.complete&&jo(e.complete.bind(e))();break;case Zt.CANCELED:case Zt.ERROR:e.error&&jo(e.error.bind(e,this._error))();break;default:e.error&&jo(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class fo{constructor(e,n){this._service=e,n instanceof $t?this._location=n:this._location=$t.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new fo(e,n)}get root(){const e=new $t(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return n1(this._location.path)}get storage(){return this._service}get parent(){const e=_B(this._location.path);if(e===null)return null;const n=new $t(this._location.bucket,e);return new fo(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw QP(e)}}function jB(t,e,n){t._throwIfRoot("uploadBytes");const r=o1(t.storage,t._location,Cc(),new yr(e,!0),n);return t.storage.makeRequestWithTokens(r,ir).then(i=>({metadata:i,ref:t}))}function BB(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new a1(t,new yr(e),n)}function zB(t){const e={prefixes:[],items:[]};return l1(t,e).then(()=>e)}async function l1(t,e,n){const i=await u1(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await l1(t,e,i.nextPageToken)}function u1(t,e){e!=null&&typeof e.maxResults=="number"&&Ng("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=PB(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,ir)}function $B(t){t._throwIfRoot("getMetadata");const e=i1(t.storage,t._location,Cc());return t.storage.makeRequestWithTokens(e,ir)}function qB(t,e){t._throwIfRoot("updateMetadata");const n=xB(t.storage,t._location,e,Cc());return t.storage.makeRequestWithTokens(n,ir)}function GB(t){t._throwIfRoot("getDownloadURL");const e=kB(t.storage,t._location,Cc());return t.storage.makeRequestWithTokens(e,ir).then(n=>{if(n===null)throw Qj();return n})}function WB(t){t._throwIfRoot("deleteObject");const e=bB(t.storage,t._location);return t.storage.makeRequestWithTokens(e,ir)}function c1(t,e){const n=yB(t._location.path,e),r=new $t(t._location.bucket,n);return new fo(t.storage,r)}/**
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
 */function HB(t){return/^[A-Za-z]+:\/\//.test(t)}function KB(t,e){return new fo(t,e)}function h1(t,e){if(t instanceof fv){const n=t;if(n._bucket==null)throw Hj();const r=new fo(n,n._bucket);return e!=null?h1(r,e):r}else return e!==void 0?c1(t,e):t}function QB(t,e){if(e&&HB(e)){if(t instanceof fv)return KB(t,e);throw Ea("To use ref(service, url), the first argument must be a Storage instance.")}else return h1(t,e)}function uT(t,e){const n=e==null?void 0:e[qP];return n==null?null:$t.makeFromBucketSpec(n,t)}function YB(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:WS(i,t.app.options.projectId))}class fv{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=$P,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Mj,this._maxUploadRetryTime=Fj,this._requests=new Set,i!=null?this._bucket=$t.makeFromBucketSpec(i,this._host):this._bucket=uT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$t.makeFromBucketSpec(this._url,e):this._bucket=uT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ng("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ng("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new fo(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Xj(KP());{const o=lB(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const cT="@firebase/storage",hT="0.12.6";/**
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
 */const d1="storage";function dT(t,e,n){return t=J(t),jB(t,e,n)}function XB(t,e,n){return t=J(t),BB(t,e,n)}function JB(t){return t=J(t),$B(t)}function ZB(t,e){return t=J(t),qB(t,e)}function e4(t,e){return t=J(t),u1(t,e)}function t4(t){return t=J(t),zB(t)}function Dg(t){return t=J(t),GB(t)}function f1(t){return t=J(t),WB(t)}function yu(t,e){return t=J(t),QB(t,e)}function n4(t,e){return c1(t,e)}function r4(t=rf(),e){t=J(t);const r=Za(t,d1).getImmediate({identifier:e}),i=$S("storage");return i&&p1(r,...i),r}function p1(t,e,n,r={}){YB(t,e,n,r)}function i4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new fv(n,r,i,e,ai)}function s4(){ti(new Wn(d1,i4,"PUBLIC").setMultipleInstances(!0)),kn(cT,hT,""),kn(cT,hT,"esm2017")}s4();/**
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
 */class mh{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
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
 */class fT{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new mh(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new mh(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new mh(o,this,this._ref)):s={next:n.next?o=>n.next(new mh(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class pT{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new Qr(e,this._service))}get items(){return this._delegate.items.map(e=>new Qr(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
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
 */class Qr{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=n4(this._delegate,e);return new Qr(n,this.storage)}get root(){return new Qr(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new Qr(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new fT(XB(this._delegate,e,n),this)}putString(e,n=Bn.RAW,r){this._throwIfRoot("putString");const i=JP(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new fT(new a1(this._delegate,new yr(i.data,!0),s),this)}listAll(){return t4(this._delegate).then(e=>new pT(e,this.storage))}list(e){return e4(this._delegate,e||void 0).then(n=>new pT(n,this.storage))}getMetadata(){return JB(this._delegate)}updateMetadata(e){return ZB(this._delegate,e)}getDownloadURL(){return Dg(this._delegate)}delete(){return this._throwIfRoot("delete"),f1(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw QP(e)}}/**
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
 */class m1{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(mT(e))throw Ea("ref() expected a child path but got a URL, use refFromURL instead.");return new Qr(yu(this._delegate,e),this)}refFromURL(e){if(!mT(e))throw Ea("refFromURL() expected a full URL but got a child path, use ref() instead.");try{$t.makeFromUrl(e,this._delegate.host)}catch{throw Ea("refFromUrl() expected a valid full URL but got an invalid one.")}return new Qr(yu(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){p1(this._delegate,e,n,r)}}function mT(t){return/^[A-Za-z]+:\/\//.test(t)}const o4="@firebase/storage-compat",a4="0.3.9";/**
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
 */const l4="storage-compat";function u4(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new m1(n,r)}function c4(t){const e={TaskState:Zt,TaskEvent:LB,StringFormat:Bn,Storage:m1,Reference:Qr};t.INTERNAL.registerComponent(new Wn(l4,u4,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(o4,a4)}c4(Io);const pv=Io.initializeApp({apiKey:"AIzaSyBHgG4mwWSEUBLPS1p2XFtaC8GwPIv2xN8",authDomain:"arquidiocesishermosillo-776dd.firebaseapp.com",projectId:"arquidiocesishermosillo-776dd",storageBucket:"arquidiocesishermosillo-776dd.appspot.com",messagingSenderId:"767127814821",appId:"1:767127814821:web:6c159d62075bcd1271c34c"}),mv=FU(pv),gh=CL(pv),Kp=r4(pv),Bf=V.createContext(),h4=t=>{const[e,n]=V.useState([]),r=Fr(Pd(gh,"auctions"),PC("email","==",localStorage.getItem("userEmailLS"))),i=Pd(gh,"auctions"),[s,o]=V.useState(!0);V.useEffect(()=>{NC(r).then(S=>{S.size===0&&(console.log("No results!"),localStorage.removeItem("Done"));const P=S.docs.map(x=>({id:x.id,...x.data()}));n(P)}).catch(S=>{console.log("Error searching items",S)})},[s]);const a=(S,P)=>{const x=yu(Kp,`projectFiles/${S==null?void 0:S.name}`);dT(x,S).then(()=>{Dg(x).then(w=>{P.imgName=S==null?void 0:S.name,P.imgUrl=w,OC(i,P),o(!s)})}).catch(w=>console.log(w))},l=async(S,P)=>{const x=qa(gh,"auctions",S);try{await DC(x);const w=yu(Kp,`projectFiles/${P}`);f1(w).then(()=>{console.log(P,"se elimino de Storage")}).catch(E=>{console.log("ocurrio un error: ",E)})}catch(w){console.error(w)}},c=async(S,P)=>{const x=qa(gh,"auctions",S);try{await wg(x,P)}catch(w){console.error(w)}},[h,f]=V.useState(null),m=S=>{f(S)},v=(S,P)=>{const x=yu(Kp,`projectFiles/${P}`);dT(x,S).then(()=>{Dg(x).then(w=>{o(!s)})}).catch(w=>console.log(w))};return g.jsx(Bf.Provider,{value:{items:e,deleteById:l,UpdateById:c,handleFileAdd:a,postCollection:i,setToggle:o,toggle:s,editInfo:m,editingState:h,setEditingState:f,changeImg:v},children:t.children})};var g1={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=i(s,r(a)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=i(o,a));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(g1);var d4=g1.exports;const Ie=nc(d4);function Og(){return Og=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Og.apply(null,arguments)}function _1(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function gT(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function f4(t){var e=p4(t,"string");return typeof e=="symbol"?e:String(e)}function p4(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function m4(t,e,n){var r=V.useRef(t!==void 0),i=V.useState(e),s=i[0],o=i[1],a=t!==void 0,l=r.current;return r.current=a,!a&&l&&s!==e&&o(e),[a?t:s,V.useCallback(function(c){for(var h=arguments.length,f=new Array(h>1?h-1:0),m=1;m<h;m++)f[m-1]=arguments[m];n&&n.apply(void 0,[c].concat(f)),o(c)},[n])]}function g4(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[gT(r)],a=s[r],l=_1(s,[gT(r),r].map(f4)),c=e[r],h=m4(a,o,t[c]),f=h[0],m=h[1];return Og({},l,(i={},i[r]=f,i[c]=m,i))},t)}function Vg(t,e){return Vg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Vg(t,e)}function _4(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Vg(t,e)}const y4=["xxl","xl","lg","md","sm","xs"],v4="xs",zf=V.createContext({prefixes:{},breakpoints:y4,minBreakpoint:v4});function Ge(t,e){const{prefixes:n}=V.useContext(zf);return t||n[e]||e}function y1(){const{breakpoints:t}=V.useContext(zf);return t}function v1(){const{minBreakpoint:t}=V.useContext(zf);return t}function w4(){const{dir:t}=V.useContext(zf);return t==="rtl"}function $f(t){return t&&t.ownerDocument||document}function E4(t){var e=$f(t);return e&&e.defaultView||window}function I4(t,e){return E4(t).getComputedStyle(t,e)}var T4=/([A-Z])/g;function S4(t){return t.replace(T4,"-$1").toLowerCase()}var R4=/^ms-/;function _h(t){return S4(t).replace(R4,"-ms-")}var A4=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function C4(t){return!!(t&&A4.test(t))}function Ks(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(_h(e))||I4(t).getPropertyValue(_h(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(_h(i)):C4(i)?r+=i+"("+s+") ":n+=_h(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}var w1={exports:{}},P4="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",k4=P4,x4=k4;function E1(){}function I1(){}I1.resetWarningCache=E1;var b4=function(){function t(r,i,s,o,a,l){if(l!==x4){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:I1,resetWarningCache:E1};return n.PropTypes=n,n};w1.exports=b4();var N4=w1.exports;const Yr=nc(N4),_T={disabled:!1},T1=Ni.createContext(null);var D4=function(e){return e.scrollTop},Jl="unmounted",ks="exited",Ci="entering",Vs="entered",Lg="exiting",pi=function(t){_4(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,l;return s.appearStatus=null,r.in?a?(l=ks,s.appearStatus=Ci):l=Vs:r.unmountOnExit||r.mountOnEnter?l=Jl:l=ks,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===Jl?{status:ks}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==Ci&&o!==Vs&&(s=Ci):(o===Ci||o===Vs)&&(s=Lg)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===Ci){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:aa.findDOMNode(this);o&&D4(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ks&&this.setState({status:Jl})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[aa.findDOMNode(this),a],c=l[0],h=l[1],f=this.getTimeouts(),m=a?f.appear:f.enter;if(!i&&!o||_T.disabled){this.safeSetState({status:Vs},function(){s.props.onEntered(c)});return}this.props.onEnter(c,h),this.safeSetState({status:Ci},function(){s.props.onEntering(c,h),s.onTransitionEnd(m,function(){s.safeSetState({status:Vs},function(){s.props.onEntered(c,h)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:aa.findDOMNode(this);if(!s||_T.disabled){this.safeSetState({status:ks},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Lg},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:ks},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:aa.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],c=l[0],h=l[1];this.props.addEndListener(c,h)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===Jl)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=_1(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Ni.createElement(T1.Provider,{value:null},typeof o=="function"?o(i,a):Ni.cloneElement(Ni.Children.only(o),a))},e}(Ni.Component);pi.contextType=T1;pi.propTypes={};function Bo(){}pi.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Bo,onEntering:Bo,onEntered:Bo,onExit:Bo,onExiting:Bo,onExited:Bo};pi.UNMOUNTED=Jl;pi.EXITED=ks;pi.ENTERING=Ci;pi.ENTERED=Vs;pi.EXITING=Lg;const fl=!!(typeof window<"u"&&window.document&&window.document.createElement);var Mg=!1,Fg=!1;try{var Qp={get passive(){return Mg=!0},get once(){return Fg=Mg=!0}};fl&&(window.addEventListener("test",Qp,Qp),window.removeEventListener("test",Qp,!0))}catch{}function S1(t,e,n,r){if(r&&typeof r!="boolean"&&!Fg){var i=r.once,s=r.capture,o=n;!Fg&&i&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,Mg?r:s)}t.addEventListener(e,n,r)}function Ug(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function Ld(t,e,n,r){return S1(t,e,n,r),function(){Ug(t,e,n,r)}}function O4(t,e,n,r){if(r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function V4(t){var e=Ks(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function L4(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||O4(t,"transitionend",!0)},e+n),s=Ld(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function R1(t,e,n,r){n==null&&(n=V4(t)||0);var i=L4(t,n,r),s=Ld(t,"transitionend",e);return function(){i(),s()}}function yT(t,e){const n=Ks(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function M4(t,e){const n=yT(t,"transitionDuration"),r=yT(t,"transitionDelay"),i=R1(t,s=>{s.target===t&&(i(),e(s))},n+r)}function F4(t){t.offsetHeight}const vT=t=>!t||typeof t=="function"?t:e=>{t.current=e};function U4(t,e){const n=vT(t),r=vT(e);return i=>{n&&n(i),r&&r(i)}}function Pc(t,e){return V.useMemo(()=>U4(t,e),[t,e])}function j4(t){return t&&"setState"in t?aa.findDOMNode(t):t??null}const B4=Ni.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:l,...c},h)=>{const f=V.useRef(null),m=Pc(f,l),v=U=>{m(j4(U))},S=U=>T=>{U&&f.current&&U(f.current,T)},P=V.useCallback(S(t),[t]),x=V.useCallback(S(e),[e]),w=V.useCallback(S(n),[n]),E=V.useCallback(S(r),[r]),I=V.useCallback(S(i),[i]),b=V.useCallback(S(s),[s]),F=V.useCallback(S(o),[o]);return g.jsx(pi,{ref:h,...c,onEnter:P,onEntered:w,onEntering:x,onExit:E,onExited:b,onExiting:I,addEndListener:F,nodeRef:f,children:typeof a=="function"?(U,T)=>a(U,{...T,ref:v}):Ni.cloneElement(a,{ref:v})})});function z4(t){const e=V.useRef(t);return V.useEffect(()=>{e.current=t},[t]),e}function Fn(t){const e=z4(t);return V.useCallback(function(...n){return e.current&&e.current(...n)},[e])}const A1=t=>V.forwardRef((e,n)=>g.jsx("div",{...e,ref:n,className:Ie(e.className,t)})),C1=A1("h4");C1.displayName="DivStyledAsH4";const P1=V.forwardRef(({className:t,bsPrefix:e,as:n=C1,...r},i)=>(e=Ge(e,"alert-heading"),g.jsx(n,{ref:i,className:Ie(t,e),...r})));P1.displayName="AlertHeading";function $4(){return V.useState(null)}function q4(){const t=V.useRef(!0),e=V.useRef(()=>t.current);return V.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),e.current}function G4(t){const e=V.useRef(null);return V.useEffect(()=>{e.current=t}),e.current}const W4=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",H4=typeof document<"u",wT=H4||W4?V.useLayoutEffect:V.useEffect,K4=["as","disabled"];function Q4(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Y4(t){return!t||t.trim()==="#"}function gv({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||r!=null||i!=null?t="a":t="button");const c={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},c];const h=m=>{if((e||t==="a"&&Y4(n))&&m.preventDefault(),e){m.stopPropagation();return}o==null||o(m)},f=m=>{m.key===" "&&(m.preventDefault(),h(m))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:h,onKeyDown:f},c]}const X4=V.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=Q4(t,K4);const[s,{tagName:o}]=gv(Object.assign({tagName:n,disabled:r},i));return g.jsx(o,Object.assign({},i,s,{ref:e}))});X4.displayName="Button";const J4=["onKeyDown"];function Z4(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ez(t){return!t||t.trim()==="#"}const k1=V.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=Z4(t,J4);const[i]=gv(Object.assign({tagName:"a"},r)),s=Fn(o=>{i.onKeyDown(o),n==null||n(o)});return ez(r.href)||r.role==="button"?g.jsx("a",Object.assign({ref:e},r,i,{onKeyDown:s})):g.jsx("a",Object.assign({ref:e},r,{onKeyDown:n}))});k1.displayName="Anchor";const x1=V.forwardRef(({className:t,bsPrefix:e,as:n=k1,...r},i)=>(e=Ge(e,"alert-link"),g.jsx(n,{ref:i,className:Ie(t,e),...r})));x1.displayName="AlertLink";const tz={[Ci]:"show",[Vs]:"show"},tc=V.forwardRef(({className:t,children:e,transitionClasses:n={},onEnter:r,...i},s)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...i},a=V.useCallback((l,c)=>{F4(l),r==null||r(l,c)},[r]);return g.jsx(B4,{ref:s,addEndListener:M4,...o,onEnter:a,childRef:e.ref,children:(l,c)=>V.cloneElement(e,{...c,className:Ie("fade",t,e.props.className,tz[l],n[l])})})});tc.displayName="Fade";const nz={"aria-label":Yr.string,onClick:Yr.func,variant:Yr.oneOf(["white"])},qf=V.forwardRef(({className:t,variant:e,"aria-label":n="Close",...r},i)=>g.jsx("button",{ref:i,type:"button",className:Ie("btn-close",e&&`btn-close-${e}`,t),"aria-label":n,...r}));qf.displayName="CloseButton";qf.propTypes=nz;const b1=V.forwardRef((t,e)=>{const{bsPrefix:n,show:r=!0,closeLabel:i="Close alert",closeVariant:s,className:o,children:a,variant:l="primary",onClose:c,dismissible:h,transition:f=tc,...m}=g4(t,{show:"onClose"}),v=Ge(n,"alert"),S=Fn(w=>{c&&c(!1,w)}),P=f===!0?tc:f,x=g.jsxs("div",{role:"alert",...P?void 0:m,ref:e,className:Ie(o,v,l&&`${v}-${l}`,h&&`${v}-dismissible`),children:[h&&g.jsx(qf,{onClick:S,"aria-label":i,variant:s}),a]});return P?g.jsx(P,{unmountOnExit:!0,...m,ref:void 0,in:r,children:x}):r?x:null});b1.displayName="Alert";const N1=Object.assign(b1,{Link:x1,Heading:P1}),Sn=V.forwardRef(({as:t,bsPrefix:e,variant:n="primary",size:r,active:i=!1,disabled:s=!1,className:o,...a},l)=>{const c=Ge(e,"btn"),[h,{tagName:f}]=gv({tagName:t,disabled:s,...a}),m=f;return g.jsx(m,{...h,...a,ref:l,disabled:s,className:Ie(o,c,i&&"active",n&&`${c}-${n}`,r&&`${c}-${r}`,a.href&&s&&"disabled")})});Sn.displayName="Button";function rz(t){const e=V.useRef(t);return e.current=t,e}function D1(t){const e=rz(t);V.useEffect(()=>()=>e.current(),[])}function iz(t,e){return V.Children.toArray(t).some(n=>V.isValidElement(n)&&n.type===e)}function sz({as:t,bsPrefix:e,className:n,...r}){e=Ge(e,"col");const i=y1(),s=v1(),o=[],a=[];return i.forEach(l=>{const c=r[l];delete r[l];let h,f,m;typeof c=="object"&&c!=null?{span:h,offset:f,order:m}=c:h=c;const v=l!==s?`-${l}`:"";h&&o.push(h===!0?`${e}${v}`:`${e}${v}-${h}`),m!=null&&a.push(`order${v}-${m}`),f!=null&&a.push(`offset${v}-${f}`)}),[{...r,className:Ie(n,...o,...a)},{as:t,bsPrefix:e,spans:o}]}const de=V.forwardRef((t,e)=>{const[{className:n,...r},{as:i="div",bsPrefix:s,spans:o}]=sz(t);return g.jsx(i,{...r,ref:e,className:Ie(n,!o.length&&s)})});de.displayName="Col";var oz=Function.prototype.bind.call(Function.prototype.call,[].slice);function zo(t,e){return oz(t.querySelectorAll(e))}function ET(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}const az="data-rr-ui-";function lz(t){return`${az}${t}`}const O1=V.createContext(fl?window:void 0);O1.Provider;function _v(){return V.useContext(O1)}const uz={type:Yr.string,tooltip:Yr.bool,as:Yr.elementType},Gf=V.forwardRef(({as:t="div",className:e,type:n="valid",tooltip:r=!1,...i},s)=>g.jsx(t,{...i,ref:s,className:Ie(e,`${n}-${r?"tooltip":"feedback"}`)}));Gf.displayName="Feedback";Gf.propTypes=uz;const si=V.createContext({}),yv=V.forwardRef(({id:t,bsPrefix:e,className:n,type:r="checkbox",isValid:i=!1,isInvalid:s=!1,as:o="input",...a},l)=>{const{controlId:c}=V.useContext(si);return e=Ge(e,"form-check-input"),g.jsx(o,{...a,ref:l,type:r,id:t||c,className:Ie(n,e,i&&"is-valid",s&&"is-invalid")})});yv.displayName="FormCheckInput";const Md=V.forwardRef(({bsPrefix:t,className:e,htmlFor:n,...r},i)=>{const{controlId:s}=V.useContext(si);return t=Ge(t,"form-check-label"),g.jsx("label",{...r,ref:i,htmlFor:n||s,className:Ie(e,t)})});Md.displayName="FormCheckLabel";const V1=V.forwardRef(({id:t,bsPrefix:e,bsSwitchPrefix:n,inline:r=!1,reverse:i=!1,disabled:s=!1,isValid:o=!1,isInvalid:a=!1,feedbackTooltip:l=!1,feedback:c,feedbackType:h,className:f,style:m,title:v="",type:S="checkbox",label:P,children:x,as:w="input",...E},I)=>{e=Ge(e,"form-check"),n=Ge(n,"form-switch");const{controlId:b}=V.useContext(si),F=V.useMemo(()=>({controlId:t||b}),[b,t]),U=!x&&P!=null&&P!==!1||iz(x,Md),T=g.jsx(yv,{...E,type:S==="switch"?"checkbox":S,ref:I,isValid:o,isInvalid:a,disabled:s,as:w});return g.jsx(si.Provider,{value:F,children:g.jsx("div",{style:m,className:Ie(f,U&&e,r&&`${e}-inline`,i&&`${e}-reverse`,S==="switch"&&n),children:x||g.jsxs(g.Fragment,{children:[T,U&&g.jsx(Md,{title:v,children:P}),c&&g.jsx(Gf,{type:h,tooltip:l,children:c})]})})})});V1.displayName="FormCheck";const Fd=Object.assign(V1,{Input:yv,Label:Md}),L1=V.forwardRef(({bsPrefix:t,type:e,size:n,htmlSize:r,id:i,className:s,isValid:o=!1,isInvalid:a=!1,plaintext:l,readOnly:c,as:h="input",...f},m)=>{const{controlId:v}=V.useContext(si);return t=Ge(t,"form-control"),g.jsx(h,{...f,type:e,size:r,ref:m,readOnly:c,id:i||v,className:Ie(s,l?`${t}-plaintext`:t,n&&`${t}-${n}`,e==="color"&&`${t}-color`,o&&"is-valid",a&&"is-invalid")})});L1.displayName="FormControl";const cz=Object.assign(L1,{Feedback:Gf}),M1=V.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=Ge(e,"form-floating"),g.jsx(n,{ref:i,className:Ie(t,e),...r})));M1.displayName="FormFloating";const vv=V.forwardRef(({controlId:t,as:e="div",...n},r)=>{const i=V.useMemo(()=>({controlId:t}),[t]);return g.jsx(si.Provider,{value:i,children:g.jsx(e,{...n,ref:r})})});vv.displayName="FormGroup";const F1=V.forwardRef(({as:t="label",bsPrefix:e,column:n=!1,visuallyHidden:r=!1,className:i,htmlFor:s,...o},a)=>{const{controlId:l}=V.useContext(si);e=Ge(e,"form-label");let c="col-form-label";typeof n=="string"&&(c=`${c} ${c}-${n}`);const h=Ie(i,e,r&&"visually-hidden",n&&c);return s=s||l,n?g.jsx(de,{ref:a,as:"label",className:h,htmlFor:s,...o}):g.jsx(t,{ref:a,className:h,htmlFor:s,...o})});F1.displayName="FormLabel";const U1=V.forwardRef(({bsPrefix:t,className:e,id:n,...r},i)=>{const{controlId:s}=V.useContext(si);return t=Ge(t,"form-range"),g.jsx("input",{...r,type:"range",ref:i,className:Ie(e,t),id:n||s})});U1.displayName="FormRange";const j1=V.forwardRef(({bsPrefix:t,size:e,htmlSize:n,className:r,isValid:i=!1,isInvalid:s=!1,id:o,...a},l)=>{const{controlId:c}=V.useContext(si);return t=Ge(t,"form-select"),g.jsx("select",{...a,size:n,ref:l,className:Ie(r,t,e&&`${t}-${e}`,i&&"is-valid",s&&"is-invalid"),id:o||c})});j1.displayName="FormSelect";const B1=V.forwardRef(({bsPrefix:t,className:e,as:n="small",muted:r,...i},s)=>(t=Ge(t,"form-text"),g.jsx(n,{...i,ref:s,className:Ie(e,t,r&&"text-muted")})));B1.displayName="FormText";const z1=V.forwardRef((t,e)=>g.jsx(Fd,{...t,ref:e,type:"switch"}));z1.displayName="Switch";const hz=Object.assign(z1,{Input:Fd.Input,Label:Fd.Label}),$1=V.forwardRef(({bsPrefix:t,className:e,children:n,controlId:r,label:i,...s},o)=>(t=Ge(t,"form-floating"),g.jsxs(vv,{ref:o,className:Ie(e,t),controlId:r,...s,children:[n,g.jsx("label",{htmlFor:r,children:i})]})));$1.displayName="FloatingLabel";const dz={_ref:Yr.any,validated:Yr.bool,as:Yr.elementType},wv=V.forwardRef(({className:t,validated:e,as:n="form",...r},i)=>g.jsx(n,{...r,ref:i,className:Ie(t,e&&"was-validated")}));wv.displayName="Form";wv.propTypes=dz;const j=Object.assign(wv,{Group:vv,Control:cz,Floating:M1,Check:Fd,Switch:hz,Label:F1,Text:B1,Range:U1,Select:j1,FloatingLabel:$1});var yh;function IT(t){if((!yh&&yh!==0||t)&&fl){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e),yh=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return yh}function Yp(t){t===void 0&&(t=$f());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function fz(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const TT=lz("modal-open");class Ev{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return fz(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(Ks(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(TT,""),Ks(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(TT),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const Xp=(t,e)=>fl?t==null?(e||$f()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function pz(t,e){const n=_v(),[r,i]=V.useState(()=>Xp(t,n==null?void 0:n.document));if(!r){const s=Xp(t);s&&i(s)}return V.useEffect(()=>{},[e,r]),V.useEffect(()=>{const s=Xp(t);s!==r&&i(s)},[t,r]),r}function mz({children:t,in:e,onExited:n,mountOnEnter:r,unmountOnExit:i}){const s=V.useRef(null),o=V.useRef(e),a=Fn(n);V.useEffect(()=>{e?o.current=!0:a(s.current)},[e,a]);const l=Pc(s,t.ref),c=V.cloneElement(t,{ref:l});return e?c:i||!o.current&&r?null:c}function gz(t){return t.code==="Escape"||t.keyCode===27}function _z(){const t=V.version.split(".");return{major:+t[0],minor:+t[1],patch:+t[2]}}const yz=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function vz(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function wz(t){let{onEnter:e,onEntering:n,onEntered:r,onExit:i,onExiting:s,onExited:o,addEndListener:a,children:l}=t,c=vz(t,yz);const{major:h}=_z(),f=h>=19?l.props.ref:l.ref,m=V.useRef(null),v=Pc(m,typeof l=="function"?null:f),S=U=>T=>{U&&m.current&&U(m.current,T)},P=V.useCallback(S(e),[e]),x=V.useCallback(S(n),[n]),w=V.useCallback(S(r),[r]),E=V.useCallback(S(i),[i]),I=V.useCallback(S(s),[s]),b=V.useCallback(S(o),[o]),F=V.useCallback(S(a),[a]);return Object.assign({},c,{nodeRef:m},e&&{onEnter:P},n&&{onEntering:x},r&&{onEntered:w},i&&{onExit:E},s&&{onExiting:I},o&&{onExited:b},a&&{addEndListener:F},{children:typeof l=="function"?(U,T)=>l(U,Object.assign({},T,{ref:v})):V.cloneElement(l,{ref:v})})}const Ez=["component"];function Iz(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const Tz=V.forwardRef((t,e)=>{let{component:n}=t,r=Iz(t,Ez);const i=wz(r);return g.jsx(n,Object.assign({ref:e},i))});function Sz({in:t,onTransition:e}){const n=V.useRef(null),r=V.useRef(!0),i=Fn(e);return wT(()=>{if(!n.current)return;let s=!1;return i({in:t,element:n.current,initial:r.current,isStale:()=>s}),()=>{s=!0}},[t,i]),wT(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function Rz({children:t,in:e,onExited:n,onEntered:r,transition:i}){const[s,o]=V.useState(!e);e&&s&&o(!1);const a=Sz({in:!!e,onTransition:c=>{const h=()=>{c.isStale()||(c.in?r==null||r(c.element,c.initial):(o(!0),n==null||n(c.element)))};Promise.resolve(i(c)).then(h,f=>{throw c.in||o(!0),f})}}),l=Pc(a,t.ref);return s&&!e?null:V.cloneElement(t,{ref:l})}function ST(t,e,n){return t?g.jsx(Tz,Object.assign({},n,{component:t})):e?g.jsx(Rz,Object.assign({},n,{transition:e})):g.jsx(mz,Object.assign({},n))}const Az=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Cz(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}let Jp;function Pz(t){return Jp||(Jp=new Ev({ownerDocument:t==null?void 0:t.document})),Jp}function kz(t){const e=_v(),n=t||Pz(e),r=V.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:V.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:V.useCallback(i=>{r.current.backdrop=i},[])})}const q1=V.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:a=!0,keyboard:l=!0,onBackdropClick:c,onEscapeKeyDown:h,transition:f,runTransition:m,backdropTransition:v,runBackdropTransition:S,autoFocus:P=!0,enforceFocus:x=!0,restoreFocus:w=!0,restoreFocusOptions:E,renderDialog:I,renderBackdrop:b=he=>g.jsx("div",Object.assign({},he)),manager:F,container:U,onShow:T,onHide:y=()=>{},onExit:R,onExited:A,onExiting:k,onEnter:N,onEntering:C,onEntered:ct}=t,En=Cz(t,Az);const Vt=_v(),_t=pz(U),G=kz(F),ne=q4(),ie=G4(n),[ye,ce]=V.useState(!n),ge=V.useRef(null);V.useImperativeHandle(e,()=>G,[G]),fl&&!ie&&n&&(ge.current=Yp(Vt==null?void 0:Vt.document)),n&&ye&&ce(!1);const st=Fn(()=>{if(G.add(),Ht.current=Ld(document,"keydown",ms),Kn.current=Ld(document,"focus",()=>setTimeout(Wt),!0),T&&T(),P){var he,Qn;const xr=Yp((he=(Qn=G.dialog)==null?void 0:Qn.ownerDocument)!=null?he:Vt==null?void 0:Vt.document);G.dialog&&xr&&!ET(G.dialog,xr)&&(ge.current=xr,G.dialog.focus())}}),Ct=Fn(()=>{if(G.remove(),Ht.current==null||Ht.current(),Kn.current==null||Kn.current(),w){var he;(he=ge.current)==null||he.focus==null||he.focus(E),ge.current=null}});V.useEffect(()=>{!n||!_t||st()},[n,_t,st]),V.useEffect(()=>{ye&&Ct()},[ye,Ct]),D1(()=>{Ct()});const Wt=Fn(()=>{if(!x||!ne()||!G.isTopModal())return;const he=Yp(Vt==null?void 0:Vt.document);G.dialog&&he&&!ET(G.dialog,he)&&G.dialog.focus()}),Lt=Fn(he=>{he.target===he.currentTarget&&(c==null||c(he),a===!0&&y())}),ms=Fn(he=>{l&&gz(he)&&G.isTopModal()&&(h==null||h(he),he.defaultPrevented||y())}),Kn=V.useRef(),Ht=V.useRef(),On=(...he)=>{ce(!0),A==null||A(...he)};if(!_t)return null;const je=Object.assign({role:r,ref:G.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},En,{style:s,className:i,tabIndex:-1});let an=I?I(je):g.jsx("div",Object.assign({},je,{children:V.cloneElement(o,{role:"document"})}));an=ST(f,m,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:R,onExiting:k,onExited:On,onEnter:N,onEntering:C,onEntered:ct,children:an});let ln=null;return a&&(ln=b({ref:G.setBackdropRef,onClick:Lt}),ln=ST(v,S,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:ln})),g.jsx(g.Fragment,{children:aa.createPortal(g.jsxs(g.Fragment,{children:[ln,an]}),_t)})});q1.displayName="Modal";const xz=Object.assign(q1,{Manager:Ev});function bz(t,e){return t.classList?t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function Nz(t,e){t.classList?t.classList.add(e):bz(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function RT(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Dz(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=RT(t.className,e):t.setAttribute("class",RT(t.className&&t.className.baseVal||"",e))}const $o={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Oz extends Ev{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,Ks(n,{[e]:`${parseFloat(Ks(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],Ks(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(Nz(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";zo(n,$o.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),zo(n,$o.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),zo(n,$o.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();Dz(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";zo(n,$o.FIXED_CONTENT).forEach(s=>this.restore(r,s)),zo(n,$o.STICKY_CONTENT).forEach(s=>this.restore(i,s)),zo(n,$o.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let Zp;function Vz(t){return Zp||(Zp=new Oz(t)),Zp}const G1=V.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=Ge(e,"modal-body"),g.jsx(n,{ref:i,className:Ie(t,e),...r})));G1.displayName="ModalBody";const W1=V.createContext({onHide(){}}),Iv=V.forwardRef(({bsPrefix:t,className:e,contentClassName:n,centered:r,size:i,fullscreen:s,children:o,scrollable:a,...l},c)=>{t=Ge(t,"modal");const h=`${t}-dialog`,f=typeof s=="string"?`${t}-fullscreen-${s}`:`${t}-fullscreen`;return g.jsx("div",{...l,ref:c,className:Ie(h,e,i&&`${t}-${i}`,r&&`${h}-centered`,a&&`${h}-scrollable`,s&&f),children:g.jsx("div",{className:Ie(`${t}-content`,n),children:o})})});Iv.displayName="ModalDialog";const H1=V.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=Ge(e,"modal-footer"),g.jsx(n,{ref:i,className:Ie(t,e),...r})));H1.displayName="ModalFooter";const Lz=V.forwardRef(({closeLabel:t="Close",closeVariant:e,closeButton:n=!1,onHide:r,children:i,...s},o)=>{const a=V.useContext(W1),l=Fn(()=>{a==null||a.onHide(),r==null||r()});return g.jsxs("div",{ref:o,...s,children:[i,n&&g.jsx(qf,{"aria-label":t,variant:e,onClick:l})]})}),K1=V.forwardRef(({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:r=!1,...i},s)=>(t=Ge(t,"modal-header"),g.jsx(Lz,{ref:s,...i,className:Ie(e,t),closeLabel:n,closeButton:r})));K1.displayName="ModalHeader";const Mz=A1("h4"),Q1=V.forwardRef(({className:t,bsPrefix:e,as:n=Mz,...r},i)=>(e=Ge(e,"modal-title"),g.jsx(n,{ref:i,className:Ie(t,e),...r})));Q1.displayName="ModalTitle";function Fz(t){return g.jsx(tc,{...t,timeout:null})}function Uz(t){return g.jsx(tc,{...t,timeout:null})}const Y1=V.forwardRef(({bsPrefix:t,className:e,style:n,dialogClassName:r,contentClassName:i,children:s,dialogAs:o=Iv,"data-bs-theme":a,"aria-labelledby":l,"aria-describedby":c,"aria-label":h,show:f=!1,animation:m=!0,backdrop:v=!0,keyboard:S=!0,onEscapeKeyDown:P,onShow:x,onHide:w,container:E,autoFocus:I=!0,enforceFocus:b=!0,restoreFocus:F=!0,restoreFocusOptions:U,onEntered:T,onExit:y,onExiting:R,onEnter:A,onEntering:k,onExited:N,backdropClassName:C,manager:ct,...En},Vt)=>{const[_t,G]=V.useState({}),[ne,ie]=V.useState(!1),ye=V.useRef(!1),ce=V.useRef(!1),ge=V.useRef(null),[st,Ct]=$4(),Wt=Pc(Vt,Ct),Lt=Fn(w),ms=w4();t=Ge(t,"modal");const Kn=V.useMemo(()=>({onHide:Lt}),[Lt]);function Ht(){return ct||Vz({isRTL:ms})}function On(re){if(!fl)return;const H=Ht().getScrollbarWidth()>0,ae=re.scrollHeight>$f(re).documentElement.clientHeight;G({paddingRight:H&&!ae?IT():void 0,paddingLeft:!H&&ae?IT():void 0})}const je=Fn(()=>{st&&On(st.dialog)});D1(()=>{Ug(window,"resize",je),ge.current==null||ge.current()});const an=()=>{ye.current=!0},ln=re=>{ye.current&&st&&re.target===st.dialog&&(ce.current=!0),ye.current=!1},he=()=>{ie(!0),ge.current=R1(st.dialog,()=>{ie(!1)})},Qn=re=>{re.target===re.currentTarget&&he()},xr=re=>{if(v==="static"){Qn(re);return}if(ce.current||re.target!==re.currentTarget){ce.current=!1;return}w==null||w()},Pt=re=>{S?P==null||P(re):(re.preventDefault(),v==="static"&&he())},br=(re,H)=>{re&&On(re),A==null||A(re,H)},Nr=re=>{ge.current==null||ge.current(),y==null||y(re)},Vn=(re,H)=>{k==null||k(re,H),S1(window,"resize",je)},gs=re=>{re&&(re.style.display=""),N==null||N(re),Ug(window,"resize",je)},_s=V.useCallback(re=>g.jsx("div",{...re,className:Ie(`${t}-backdrop`,C,!m&&"show")}),[m,C,t]),mi={...n,..._t};mi.display="block";const So=re=>g.jsx("div",{role:"dialog",...re,style:mi,className:Ie(e,t,ne&&`${t}-static`,!m&&"show"),onClick:v?xr:void 0,onMouseUp:ln,"data-bs-theme":a,"aria-label":h,"aria-labelledby":l,"aria-describedby":c,children:g.jsx(o,{...En,onMouseDown:an,className:r,contentClassName:i,children:s})});return g.jsx(W1.Provider,{value:Kn,children:g.jsx(xz,{show:f,ref:Wt,backdrop:v,container:E,keyboard:!0,autoFocus:I,enforceFocus:b,restoreFocus:F,restoreFocusOptions:U,onEscapeKeyDown:Pt,onShow:x,onHide:w,onEnter:br,onEntering:Vn,onEntered:T,onExit:Nr,onExiting:R,onExited:gs,manager:Ht(),transition:m?Fz:void 0,backdropTransition:m?Uz:void 0,renderBackdrop:_s,renderDialog:So})})});Y1.displayName="Modal";const fn=Object.assign(Y1,{Body:G1,Header:K1,Title:Q1,Footer:H1,Dialog:Iv,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),me=V.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=Ge(t,"row"),o=y1(),a=v1(),l=`${s}-cols`,c=[];return o.forEach(h=>{const f=r[h];delete r[h];let m;f!=null&&typeof f=="object"?{cols:m}=f:m=f;const v=h!==a?`-${h}`:"";m!=null&&c.push(`${l}${v}-${m}`)}),g.jsx(n,{ref:i,...r,className:Ie(e,s,...c)})});me.displayName="Row";var X1={exports:{}};(()=>{var t={d:(s,o)=>{for(var a in o)t.o(o,a)&&!t.o(s,a)&&Object.defineProperty(s,a,{enumerable:!0,get:o[a]})},o:(s,o)=>Object.prototype.hasOwnProperty.call(s,o),r:s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})}},e={};function n(s,o){for(var a=0;a<o.length;a++){var l=o[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,l.key,l)}}t.r(e),t.d(e,{default:()=>i});var r=function(){function s(){(function(l,c){if(!(l instanceof c))throw new TypeError("Cannot call a class as a function")})(this,s)}var o,a;return o=s,a=[{key:"changeHeightWidth",value:function(l,c,h,f,m,v){return h>f&&(l=Math.round(l*f/h),h=f),l>c&&(h=Math.round(h*c/l),l=c),m&&h<m&&(l=Math.round(l*m/h),h=m),v&&l<v&&(h=Math.round(h*v/l),l=v),{height:l,width:h}}},{key:"resizeAndRotateImage",value:function(l,c,h,f,m){var v=arguments.length>5&&arguments[5]!==void 0?arguments[5]:"jpeg",S=arguments.length>6&&arguments[6]!==void 0?arguments[6]:100,P=arguments.length>7&&arguments[7]!==void 0?arguments[7]:0,x=S/100,w=document.createElement("canvas"),E=l.width,I=l.height,b=this.changeHeightWidth(I,h,E,c,f,m);!P||P!==90&&P!==270?(w.width=b.width,w.height=b.height):(w.width=b.height,w.height=b.width),E=b.width,I=b.height;var F=w.getContext("2d");return F.fillStyle="rgba(0, 0, 0, 0)",F.fillRect(0,0,E,I),F.imageSmoothingEnabled&&F.imageSmoothingQuality&&(F.imageSmoothingQuality="high"),P&&(F.rotate(P*Math.PI/180),P===90?F.translate(0,-w.width):P===180?F.translate(-w.width,-w.height):P===270?F.translate(-w.height,0):P!==0&&P!==360||F.translate(0,0)),F.drawImage(l,0,0,E,I),w.toDataURL("image/".concat(v),x)}},{key:"b64toByteArrays",value:function(l,c){for(var h=atob(l.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/,"")),f=[],m=0;m<h.length;m+=512){for(var v=h.slice(m,m+512),S=new Array(v.length),P=0;P<v.length;P++)S[P]=v.charCodeAt(P);var x=new Uint8Array(S);f.push(x)}return f}},{key:"b64toBlob",value:function(l,c){var h=this.b64toByteArrays(l,c);return new Blob(h,{type:c,lastModified:new Date})}},{key:"b64toFile",value:function(l,c,h){var f=this.b64toByteArrays(l,h);return new File(f,c,{type:h,lastModified:new Date})}},{key:"createResizedImage",value:function(l,c,h,f,m,v,S){var P=arguments.length>7&&arguments[7]!==void 0?arguments[7]:"base64",x=arguments.length>8&&arguments[8]!==void 0?arguments[8]:null,w=arguments.length>9&&arguments[9]!==void 0?arguments[9]:null,E=new FileReader;if(!l)throw Error("File Not Found!");if(l.type&&!l.type.includes("image"))throw Error("File Is NOT Image!");E.readAsDataURL(l),E.onload=function(){var I=new Image;I.src=E.result,I.onload=function(){var b=s.resizeAndRotateImage(I,c,h,x,w,f,m,v),F="image/".concat(f);switch(P){case"blob":var U=s.b64toBlob(b,F);S(U);break;case"base64":S(b);break;case"file":var T=l.name.toString().replace(/(png|jpeg|jpg|webp)$/i,"").concat(f.toString()),y=s.b64toFile(b,T,F);S(y);break;default:S(b)}}},E.onerror=function(I){throw Error(I)}}}],a&&n(o,a),s}();const i={imageFileResizer:function(s,o,a,l,c,h,f,m,v,S){return r.createResizedImage(s,o,a,l,c,h,f,m,v,S)}};X1.exports=e})();var jz=X1.exports;const Bz=nc(jz),zz=()=>{const{handleFileAdd:t,editingState:e,setEditingState:n,UpdateById:r,toggle:i,setToggle:s,changeImg:o}=V.useContext(Bf);V.useEffect(()=>{if(e!==null){E(e);let H=Object.keys(e.centros).sort(),ae=[],He=[],ot=[],ht=[],Yn=[],gi=[],cr=[],Xn=[],pl=[],ml=[],ys=[],Ro=[],Kt=[ae];H.map((Ae,te)=>{te<=2&&ae.push(Ae),te>=3&&te<=5&&He.push(Ae),te>=6&&te<=8&&ot.push(Ae),te>=9&&te<=11&&ht.push(Ae),te>=12&&te<=14&&Yn.push(Ae),te>=15&&te<=17&&gi.push(Ae),te>=18&&te<=20&&cr.push(Ae),te>=21&&te<=23&&Xn.push(Ae),te>=25&&te<=26&&pl.push(Ae),te>=27&&te<=29&&ml.push(Ae),te>=30&&te<=32&&ys.push(Ae),te>=33&&te<=35&&Ro.push(Ae)}),He.length>2&&Kt.push(He),ot.length>2&&Kt.push(ot),ht.length>2&&Kt.push(ht),Yn.length>2&&Kt.push(Yn),gi.length>2&&Kt.push(gi),cr.length>2&&Kt.push(cr),Xn.length>2&&Kt.push(Xn),pl.length>2&&Kt.push(pl),ml.length>2&&Kt.push(ml),ys.length>2&&Kt.push(ys),Ro.length>2&&Kt.push(Ro),Qn(Kt);let vs=Object.keys(e.grupos).sort(),Ao=[],ws=[],Jn=[],Co=[],_i=[],Po=[],Dr=[],ko=[],dt=[],xo=[],Or=[],Vr=[],un=[Ao];vs.map((Ae,te)=>{te<=2&&Ao.push(Ae),te>=3&&te<=5&&ws.push(Ae),te>=6&&te<=8&&Jn.push(Ae),te>=9&&te<=11&&Co.push(Ae),te>=12&&te<=14&&_i.push(Ae),te>=15&&te<=17&&Po.push(Ae),te>=18&&te<=20&&Dr.push(Ae),te>=21&&te<=23&&ko.push(Ae),te>=25&&te<=26&&dt.push(Ae),te>=27&&te<=29&&xo.push(Ae),te>=30&&te<=32&&Or.push(Ae),te>=33&&te<=35&&Vr.push(Ae)}),ws.length>2&&un.push(ws),Jn.length>2&&un.push(Jn),Co.length>2&&un.push(Co),_i.length>2&&un.push(_i),Po.length>2&&un.push(Po),Dr.length>2&&un.push(Dr),ko.length>2&&un.push(ko),dt.length>2&&un.push(dt),xo.length>2&&un.push(xo),Or.length>2&&un.push(Or),Vr.length>2&&un.push(Vr),gs(un),an(e.centros),br(e.grupos),Kn()}},[e]);const[a,l]=V.useState(),[c,h]=V.useState(!1),f=H=>new Promise(ae=>{Bz.imageFileResizer(H,600,600,"JPEG",120,0,He=>{ae(He)},"base64")}),m=async H=>{const ae=H.target.files[0];localStorage.setItem("urlImgLS",URL.createObjectURL(ae));const He=await f(ae);fetch(He).then(ot=>ot.blob()).then(ot=>{const ht=new File([ot],Date.now()+".jpeg",{type:"image/jpeg"});l(ht)}),h(!0),setTimeout(()=>{h(!1)},4e3)},[v,S]=V.useState(!1),[P,x]=V.useState(""),[w,E]=V.useState({nombre:"",clasificacion:"",vicario:"",parroco:"",decanato:"",direccion:"",telefono:"",oficina:"",sitioWeb:"",imgUrl:"",horarioDeMisasLunes:"",horarioDeMisasMartes:"",horarioDeMisasMiercoles:"",horarioDeMisasJueves:"",horarioDeMisasViernes:"",horarioDeMisasSabado:"",horarioDeMisasDomingo:"",catesismoAdultos:"",catesismoNinos:"",confesiones:"",preMatrimoniales:"",preBautismales:"",eventos:"",fiestaPatronal:"",comentarios:""}),I=H=>{E({...w,[H.target.name]:H.target.value})},{nombre:b,clasificacion:F,vicario:U,parroco:T,decanato:y,direccion:R,telefono:A,oficina:k,sitioWeb:N,imgUrl:C,horarioDeMisasLunes:ct,horarioDeMisasMartes:En,horarioDeMisasMiercoles:Vt,horarioDeMisasJueves:_t,horarioDeMisasViernes:G,horarioDeMisasSabado:ne,horarioDeMisasDomingo:ie,catesismoAdultos:ye,catesismoNinos:ce,confesiones:ge,preMatrimoniales:st,preBautismales:Ct,eventos:Wt,fiestaPatronal:Lt,comentarios:ms}=w,Kn=()=>S(!0),Ht=()=>S(!1),On=()=>{n(null),E({nombre:"",clasificacion:"",vicario:"",parroco:"",decanato:"",direccion:"",telefono:"",oficina:"",sitioWeb:"",horarioDeMisasLunes:"",horarioDeMisasMartes:"",horarioDeMisasMiercoles:"",horarioDeMisasJueves:"",horarioDeMisasViernes:"",horarioDeMisasSabado:"",horarioDeMisasDomingo:"",catesismoAdultos:"",catesismoNinos:"",confesiones:"",preMatrimoniales:"",preBautismales:"",eventos:"",fiestaPatronal:"",comentarios:""}),br({"1a_Grupo_1":"","1b_Horario_Grupo_1":"","1c_Direccion_Grupo_1":""}),an({"1_Centro_1":"","1_Horario_Centro_1":"","1_Direccion_Centro_1":""}),Ht(),console.log("cancelar")},[je,an]=V.useState({"1_Centro_1":"","1_Horario_Centro_1":"","1_Direccion_Centro_1":""}),ln=H=>{an({...je,[H.target.name]:H.target.value})},[he,Qn]=V.useState([["1_Centro_1","1_Horario_Centro_1","1_Direccion_Centro_1"]]),xr=()=>{let H=Number(he[he.length-1][2].slice(-2).replace("_",""))+1,ae=String(H),He=ae.concat("_Centro_".concat(ae)),ot=ae.concat("_Horario_Centro_".concat(ae)),ht=ae.concat("_Direccion_Centro_".concat(ae));je[He]="",je[ot]="",je[ht]="",Qn([...he,[He,ot,ht]])},[Pt,br]=V.useState({"1a_Grupo_1":"","1b_Horario_Grupo_1":"","1c_Direccion_Grupo_1":""});console.log(Pt);const Nr=H=>{br({...Pt,[H.target.name]:H.target.value})},[Vn,gs]=V.useState([["1a_Grupo_1","1b_Horario_Grupo_1","1c_Direccion_Grupo_1"]]),_s=()=>{let H=Number(Vn[Vn.length-1][2].slice(-2).replace("_",""))+1,ae=String(H),He=ae.concat("a_Grupo_".concat(ae)),ot=ae.concat("b_Horario_Grupo_".concat(ae)),ht=ae.concat("c_Direccion_Grupo_".concat(ae));Pt[He]="",Pt[ot]="",Pt[ht]="",gs([...Vn,[He,ot,ht]])},mi=async H=>{H.preventDefault(),x("");let ae=new Date,He=ae.setHours(ae.getHours());w.email=localStorage.getItem("userEmailLS"),w.duration=He,w.centros=je,w.grupos=Pt,e!==null?(r(w.id,w),a!==void 0&&o(a,w.imgName),n(null),setTimeout(()=>{s(!i)},1e3)):a!==void 0?(t(a,w),setTimeout(()=>{s(!i)},1e3)):window.confirm("Seleccione la Primer Foto Por Favor")?setTimeout(()=>{Kn(),localStorage.removeItem("Done")},1e3):setTimeout(()=>{localStorage.removeItem("Done"),location.reload()},1e3),Ht(),localStorage.setItem("Done","gracias-AddAuction")},So=(H,ae,He)=>{delete je[H],delete je[ae],delete je[He],an(je);let ot=H.slice(-2).replace("_","");he.map((ht,Yn)=>{if(ht[0].slice(-2).replace("_","")===ot){const cr=he.filter(Xn=>Xn!==ht);Qn(cr)}})},re=(H,ae,He)=>{delete Pt[H],delete Pt[ae],delete Pt[He],br(Pt);let ot=H.slice(-2).replace("_","");Vn.map((ht,Yn)=>{if(ht[0].slice(-2).replace("_","")===ot){const cr=Vn.filter(Xn=>Xn!==ht);gs(cr)}})};return g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"col d-flex justify-content-center my-3 ",children:localStorage.getItem("Done")?g.jsx("p",{children:"Gracias !!"}):g.jsx("button",{onClick:Kn,className:"btn btn-primary mx-5",children:"CREAR INFORME"})}),g.jsx("div",{className:c?"spinnerContainerHere":"spinnerContainer",children:g.jsx("div",{class:"spinner"})}),g.jsx(fn,{centered:!0,show:v,onHide:Ht,style:{width:"96%",marginLeft:"1%"},children:g.jsxs("form",{onSubmit:mi,style:{backgroundColor:"rgb(222,222,222)"},children:[g.jsxs(fn.Body,{children:[P&&g.jsx(N1,{variant:"danger",children:P}),e!==null?g.jsxs(fn.Footer,{children:[g.jsx(Sn,{variant:"outline-secondary",onClick:()=>On(),children:"Cancelar"}),g.jsx(Sn,{variant:"outline-primary",type:"submit",children:e!==null?"Guardar Cambios":"Guardar"})]}):g.jsx(me,{children:g.jsx(de,{className:" mb-4 text-white fw-bold bg-primary  mx-2 p-2 text-center",children:localStorage.getItem("userEmailLS")})}),g.jsx(me,{children:g.jsxs(de,{children:[g.jsx(j.Label,{children:"Imagen"}),g.jsx(j.Group,{children:g.jsx(j.Control,{type:"file",label:"Cargar Foto",onChange:m,name:"imgUrl"})})]})}),g.jsx("hr",{}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:"Nombre"}),g.jsx(j.Control,{type:"text",name:"nombre",value:b,onChange:I})]})})}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:"Parroco"}),g.jsx(j.Control,{type:"text",name:"parroco",value:T,onChange:I})]})})}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:"Vicario"}),g.jsx(j.Control,{type:"text",name:"vicario",value:U,onChange:I})]})})}),g.jsx(me,{children:g.jsxs(de,{className:"mb-2",children:[g.jsx(j.Label,{children:"Clasificacion"}),g.jsxs(j.Control,{as:"select",multiple:!1,value:F,name:"clasificacion",onChange:I,children:[g.jsx("option",{value:"parroquia",children:"Parroquia"}),g.jsx("option",{value:"cuasiparroquia",children:"Cuasiparroquia"}),g.jsx("option",{value:"catedral",children:"Catedral"}),g.jsx("option",{value:"centro",children:"Centro"}),g.jsx("option",{value:"santuario",children:"Santuario"}),g.jsx("option",{value:"rectoria",children:"Rectoria"}),g.jsx("option",{value:"institucion educativa",children:"Institucion Educativa"}),g.jsx("option",{value:"obra social",children:"Obra Social"}),g.jsx("option",{value:"vida consagrada femenina",children:"Vida Consagrada Femenina"}),g.jsx("option",{value:"vida consagrada masculina",children:"Vida Consagrada Masculina"}),g.jsx("option",{value:"organismo laical",children:"Organismo Laical"}),g.jsx("option",{value:"otro",children:"Otro"})]})]})}),g.jsx(me,{children:g.jsxs(de,{children:[g.jsx(j.Label,{children:"Decanato"}),g.jsx(j.Control,{type:"text",name:"decanato",value:y,onChange:I})]})}),g.jsx("hr",{}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:"Confesiones"}),g.jsx(j.Control,{type:"text",name:"confesiones",value:ge,onChange:I})]})})}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:"Dirección"}),g.jsx(j.Control,{type:"text",name:"direccion",value:R,onChange:I})]})})}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:"Telefono"}),g.jsx(j.Control,{type:"text",name:"telefono",value:A,onChange:I})]})})}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:"Horario de Oficina"}),g.jsx(j.Control,{type:"text",name:"oficina",value:k,onChange:I})]})})}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:"Sitio Web"}),g.jsx(j.Control,{type:"text",name:"sitioWeb",value:N,onChange:I})]})})}),g.jsx("hr",{}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsxs(j.Label,{children:["Horario de Misas Lunes"," "]}),g.jsx(j.Control,{type:"text",name:"horarioDeMisasLunes",value:ct,onChange:I})]})})}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:"Horario de Misas Martes"}),g.jsx(j.Control,{type:"text",name:"horarioDeMisasMartes",value:En,onChange:I})]})})}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:"Horario de Misas Miercoles"}),g.jsx(j.Control,{type:"text",name:"horarioDeMisasMiercoles",value:Vt,onChange:I})]})})}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:"Horario de Misas Jueves"}),g.jsx(j.Control,{type:"text",name:"horarioDeMisasJueves",value:_t,onChange:I})]})})}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:"Horario de Misas Viernes"}),g.jsx(j.Control,{type:"text",name:"horarioDeMisasViernes",value:G,onChange:I})]})})}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:"Horario de Misas Sabados"}),g.jsx(j.Control,{type:"text",name:"horarioDeMisasSabado",value:ne,onChange:I})]})})}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:"Horario de Misas Domingos"}),g.jsx(j.Control,{type:"text",name:"horarioDeMisasDomingo",value:ie,onChange:I})]})})}),g.jsx("hr",{}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:"Catesismo Adultos"}),g.jsx(j.Control,{type:"text",name:"catesismoAdultos",value:ye,onChange:I})]})})}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:"Catesismo Niños"}),g.jsx(j.Control,{type:"text",name:"catesismoNinos",value:ce,onChange:I})]})})}),g.jsx("hr",{}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:"Platicas Prematrimoniales"}),g.jsx(j.Control,{type:"text",name:"preMatrimoniales",value:st,onChange:I})]})})}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:"Platicas Prebautismales"}),g.jsx(j.Control,{type:"text",name:"preBautismales",value:Ct,onChange:I})]})})}),g.jsx("hr",{}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:"Eventos"}),g.jsx(j.Control,{type:"text",name:"eventos",value:Wt,onChange:I})]})})}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:"Fiesta Patronal"}),g.jsx(j.Control,{type:"text",name:"fiestaPatronal",value:Lt,onChange:I})]})})}),g.jsx("hr",{}),he.map((H,ae)=>g.jsxs("div",{children:[g.jsx(me,{children:g.jsx(de,{children:he.length>1&&H[0]!=="1_Centro_1"&&g.jsxs(Sn,{variant:"danger",size:"sm",className:"eliminarCentro",onClick:()=>So(H[0],H[1],H[2]),children:["- Eliminar ",H[0].slice(2).replace("_"," ").replace("_"," ")]})})}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:H[0].slice(2).replace("_"," ").replace("_"," ")}),g.jsx(j.Control,{placeholder:"Nombre de Centro Parroquial",type:"text",name:H[0],value:je[H[0]],onChange:ln})]})})}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsxs(j.Label,{children:["Horario de ",H[0].slice(1).replace("_"," ").replace("_"," ")]}),g.jsx(j.Control,{type:"text",name:H[1],value:je[H[1]],onChange:ln})]})})}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsxs(j.Label,{children:["Direccion de ",H[0].slice(1).replace("_"," ").replace("_"," ")]}),g.jsx(j.Control,{type:"text",name:H[2],value:je[H[2]],onChange:ln})]})})}),g.jsx("hr",{})]},ae+"@#$")),g.jsx(Sn,{variant:"info",className:"AgregarCentro",onClick:xr,children:"+ Agregar Centro"}),g.jsx("hr",{}),Vn.map((H,ae)=>g.jsxs("div",{children:[g.jsx(me,{children:g.jsx(de,{children:Vn.length>1&&H[0]!=="1a_Grupo_1"&&g.jsxs(Sn,{variant:"danger",size:"sm",className:"eliminarCentro",onClick:()=>re(H[0],H[1],H[2]),children:["- Eliminar ",H[0].slice(3).replace("_"," ").replace("_"," ")]})})}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:H[0].slice(3).replace("_"," ").replace("_"," ")}),g.jsx(j.Control,{type:"text",placeholder:"Nombre Grupo Devocional o Apostolado",name:H[0],value:Pt[H[0]],onChange:Nr})]})})}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsxs(j.Label,{children:["Horario de ",H[0].slice(2).replace("_"," ").replace("_"," ")]}),g.jsx(j.Control,{type:"text",name:H[1],value:Pt[H[1]],onChange:Nr})]})})}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsxs(j.Label,{children:["Direccion de ",H[0].slice(2).replace("_"," ").replace("_"," ")]}),g.jsx(j.Control,{type:"text",name:H[2],value:Pt[H[2]],onChange:Nr})]})})}),g.jsx("hr",{})]},ae+"@#$-")),g.jsx(Sn,{variant:"info",onClick:_s,children:"+ Agregar Grupo / Devocion"}),g.jsx("hr",{}),g.jsx(me,{children:g.jsx(de,{children:g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:"Comentarios"}),g.jsx(j.Control,{as:"textarea",placeholder:"comentar...",style:{height:"100px"},name:"comentarios",value:ms,onChange:I})]})})})]}),g.jsxs(fn.Footer,{children:[g.jsx(Sn,{variant:"secondary",onClick:()=>On(),children:"Cancelar"}),g.jsx(Sn,{variant:"primary",type:"submit",children:e!==null?"Guardar Cambios":"Guardar"})]})]})})]})},$z=({item:t})=>{var l,c;const{deleteById:e,setToggle:n,toggle:r,editInfo:i,setEditingState:s}=V.useContext(Bf),o=h=>{i(h)};let a=localStorage.urlImgLS;return a===void 0?a=t.imgUrl:(a=localStorage.urlImgLS,setTimeout(()=>{localStorage.removeItem("urlImgLS")},3e3)),g.jsxs("div",{className:"card shadow-sm ",children:[g.jsx("img",{src:a,style:{height:"auto",width:"40%",marginLeft:"30%",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"},className:"text-center my-4 ",alt:"Carga una Imagen en Editar Informe"}),g.jsxs("div",{className:"w-100 ",children:[g.jsx("h5",{children:t.email}),g.jsx("p",{children:new Date(t.duration).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"})}),g.jsx("h5",{children:" "}),g.jsx("hr",{}),g.jsxs("p",{children:["Nombre:",g.jsxs("span",{children:[" ",t.nombre]})]}),g.jsxs("p",{children:[" Parroco:",g.jsxs("span",{children:[" ",t.parroco]})]}),g.jsxs("p",{children:[" Vicario:",g.jsxs("span",{children:[" ",t.vicario]})]}),g.jsxs("p",{children:["Clasificacion:",g.jsxs("span",{children:[" ",t.clasificacion]})]}),g.jsxs("p",{children:[" Decanato:",g.jsxs("span",{children:[" ",t.decanato]})]}),g.jsx("hr",{}),g.jsxs("p",{children:[" Confesiones:",g.jsxs("span",{children:[" ",t.confesiones]})]}),g.jsxs("p",{children:[" Direccion:",g.jsxs("span",{children:[" ",t.direccion]})]}),g.jsxs("p",{children:[" Telefono:",g.jsxs("span",{children:[" ",t.telefono]})]}),g.jsxs("p",{children:[" Horario de Oficina:",g.jsxs("span",{children:[" ",t.oficina]})]}),g.jsxs("p",{children:[" Sitio Web:",g.jsxs("span",{children:[" ",t.sitioWeb]})]}),g.jsx("hr",{}),g.jsxs("p",{children:[" Horario de Misas Lunes:",g.jsxs("span",{children:[" ",t.horarioDeMisasLunes]})]}),g.jsxs("p",{children:[" Horario de Misas Martes:",g.jsxs("span",{children:[" ",t.horarioDeMisasMartes]})]}),g.jsxs("p",{children:[" Horario de Misas Miercoles:",g.jsxs("span",{children:[" ",t.horarioDeMisasMiercoles]})]}),g.jsxs("p",{children:[" Horario de Misas Jueves:",g.jsxs("span",{children:[" ",t.horarioDeMisasJueves]})]}),g.jsxs("p",{children:[" Horario de Misas Viernes:",g.jsxs("span",{children:[" ",t.horarioDeMisasViernes]})]}),g.jsxs("p",{children:[" Horario de Misas Sabado:",g.jsxs("span",{children:[" ",t.horarioDeMisasSabado]})]}),g.jsxs("p",{children:[" Horario de Misas Domingo:",g.jsxs("span",{children:[" ",t.horarioDeMisasDomingo]})]}),g.jsx("hr",{}),g.jsxs("p",{children:[" catesismo Adultos:",g.jsxs("span",{children:[" ",t.catesismoAdultos]})]}),g.jsxs("p",{children:[" catesismo Niños:",g.jsxs("span",{children:[" ",t.catesismoNinos]})]}),g.jsx("hr",{}),g.jsxs("p",{children:[" Platicas Prematrimoniales:",g.jsxs("span",{children:[" ",t.preMatrimoniales]})]}),g.jsxs("p",{children:[" Platicas Prebautismales:",g.jsxs("span",{children:[" ",t.preBautismales]})]}),g.jsxs("p",{children:[" Eventos:",g.jsxs("span",{children:[" ",t.eventos]})]}),g.jsxs("p",{children:[" Fiesta Patronal: ",g.jsx("span",{children:t.fiestaPatronal})]}),g.jsx("hr",{}),(l=Object.keys(t.centros).sort())==null?void 0:l.map((h,f)=>g.jsx("div",{className:"borderX",children:g.jsxs("p",{children:[h.slice(2).replace("_"," ").replace("_"," "),":",g.jsxs("span",{children:[" ",t.centros[h]]})]},f+"koko")})),(c=Object.keys(t.grupos).sort())==null?void 0:c.map((h,f)=>g.jsx("div",{className:"borderX",children:g.jsxs("p",{children:[h.slice(3).replace("_"," ").replace("_"," "),":",g.jsxs("span",{children:[" ",t.grupos[h]]})]},f+"kok")})),g.jsxs("p",{children:[" Comentarios:",g.jsxs("span",{children:[" ",t.comentarios]})]}),g.jsx("hr",{}),g.jsxs("div",{className:"btnBorrarInforme",children:[g.jsx("button",{className:"btn btn-danger m-5",onClick:()=>{window.confirm("Quieres Borrar este Documento?")&&(localStorage.removeItem("Done"),setTimeout(()=>{e(t.id,t.imgName),s(null),n(!r)},1e3))},children:"BORRAR INFORME"}),g.jsx("button",{className:"btn btn-primary m-5",onClick:()=>o(t),children:"EDITAR INFORME"})]})]})]})},kc=V.createContext(),qz=t=>{const e=async(o,a,l)=>{try{await cP(o,a,l),i(o,a,l)}catch(c){console.error("code",c.code);const h={"auth/email-already-in-use":()=>alert("El Correo ya esta en Uso"),"auth/operation-not-allowed":()=>alert("Operacion No Permitida."),"auth/weak-password":()=>alert("La contraseña es muy débil."),"auth/invalid-email":()=>alert("El Correo No es Valido")};(m=>{h[m]()})(c.code)}},[n,r]=V.useState(!0),i=(o,a,l)=>{hP(o,a,l).then(c=>{const h=c.user;localStorage.setItem("userEmailLS",h.email),r(!n),location.reload()}).catch(c=>{console.log(c.code),console.log(c.message),c.code=="auth/invalid-credential"&&alert("Contraseña o Correo son Incorrrectos")})},s=()=>{localStorage.removeItem("Done"),tF(mv),localStorage.removeItem("userEmailLS"),r(!n)};return g.jsx(kc.Provider,{value:{register:e,login:i,logout:s,stateLogout:n},children:t.children})},Gz=()=>{const{items:t}=V.useContext(Bf),{stateLogout:e}=V.useContext(kc);return g.jsxs("div",{className:"",children:[localStorage.getItem("userEmailLS")!==null&&g.jsx(zz,{items:t}),t.length>0&&localStorage.getItem("userEmailLS")!==null&&localStorage.setItem("Done","graciasBody-19"),e?g.jsx("div",{className:"row row-cols-1 p-5 border mt-1 ",children:t.map((n,r)=>g.jsx($z,{item:n},r))}):""]})},Wz="https://xipeRafa.github.io/AHilloEditor/assets/canal10-CXob-wmH.png",Hz=()=>{const{login:t}=V.useContext(kc),[e,n]=V.useState(!1),r=V.useRef(),i=V.useRef(),s=()=>n(!0),o=()=>n(!1),a=l=>{l.preventDefault(),localStorage.removeItem("Done"),t(mv,r.current.value,i.current.value),o()};return g.jsxs(g.Fragment,{children:[g.jsx("div",{onClick:s,className:"btn btn-outline-secondary mx-2",children:"Entrar"}),g.jsx(fn,{centered:!0,show:e,onHide:o,children:g.jsxs("form",{onSubmit:a,children:[g.jsx(fn.Header,{children:g.jsx(fn.Title,{children:"Entrar"})}),g.jsxs(fn.Body,{children:[g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:"Email "}),g.jsx(j.Control,{type:"email",required:!0,ref:r})]}),g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:"Password"}),g.jsx(j.Control,{type:"password",required:!0,ref:i})]})]}),g.jsxs(fn.Footer,{children:[g.jsx(Sn,{variant:"secondary",onClick:o,children:" Cancelar "}),g.jsx(Sn,{variant:"primary",type:"submit",children:"         Entrar "})]})]})})]})},Kz=()=>{const{register:t}=V.useContext(kc),[e,n]=V.useState(!1),[r,i]=V.useState(""),s=V.useRef(),o=V.useRef(),a=V.useRef(),l=()=>{n(!0)},c=()=>{i(""),n(!1)},h=f=>{if(f.preventDefault(),i(""),localStorage.removeItem("Done"),o.current.value!==a.current.value)return i("Claves No son iguales.");if(o.current.value.length<6)return i("Claves es muy corta Use 6 caracteres Minimo");t(mv,s.current.value,o.current.value),c()};return g.jsxs(g.Fragment,{children:[g.jsx("div",{onClick:l,className:"btn btn-outline-secondary mx-2",children:"Registro"}),g.jsx(fn,{centered:!0,show:e,onHide:c,children:g.jsxs("form",{onSubmit:h,children:[g.jsx(fn.Header,{children:g.jsx(fn.Title,{children:"Registro"})}),g.jsxs(fn.Body,{children:[r&&g.jsx(N1,{variant:"danger",children:r}),g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:"Email"}),g.jsx(j.Control,{type:"email",required:!0,ref:s})]}),g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:"Password"}),g.jsx(j.Control,{type:"password",required:!0,ref:o})]}),g.jsxs(j.Group,{children:[g.jsx(j.Label,{children:"Confirmar Password"}),g.jsx(j.Control,{type:"password",required:!0,ref:a})]})]}),g.jsxs(fn.Footer,{children:[g.jsx(Sn,{variant:"secondary",onClick:c,children:" Cancelar "}),g.jsx(Sn,{variant:"primary",type:"submit",children:" Registro "})]})]})})]})},Qz=()=>{const{logout:t}=V.useContext(kc),e=()=>{localStorage.removeItem("Done"),setTimeout(()=>{t()},500)};return g.jsxs("nav",{className:"container navbar navbar-light",children:[g.jsx("div",{className:"w-100 d-flex justify-content-center",children:g.jsx("div",{className:"navbar-brand mb-4",children:g.jsx("img",{src:Wz,alt:"logo",height:"140"})})}),g.jsx("div",{className:"w-100 d-flex justify-content-center",children:g.jsx("div",{className:"mb-4",children:localStorage.getItem("userEmailLS")!==null?g.jsxs(g.Fragment,{children:[g.jsx("button",{className:"btn btn-secondary mx-2 disabled",children:localStorage.getItem("userEmailLS")}),g.jsx("button",{onClick:()=>{window.confirm("Quieres Salir?")&&e()},className:"btn btn-outline-secondary mx-2",children:"SALIR"})]}):g.jsxs(g.Fragment,{children:[g.jsx(Hz,{}),g.jsx(Kz,{})]})})})]})},Yz=()=>g.jsx(g.Fragment,{children:g.jsx(qz,{children:g.jsxs(h4,{children:[g.jsx(Qz,{}),g.jsx(Gz,{})]})})});em.createRoot(document.getElementById("root")).render(g.jsx(Ni.StrictMode,{children:g.jsx(Yz,{})}));
