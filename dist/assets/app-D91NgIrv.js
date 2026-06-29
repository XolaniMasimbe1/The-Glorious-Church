function ww(r,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in r)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(r,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Ew(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var od={exports:{}},Ca={},ad={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function Tw(){if(eg)return ke;eg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function k(O){return O===null||typeof O!="object"?null:(O=T&&O[T]||O["@@iterator"],typeof O=="function"?O:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,W={};function V(O,H,fe){this.props=O,this.context=H,this.refs=W,this.updater=fe||F}V.prototype.isReactComponent={},V.prototype.setState=function(O,H){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,H,"setState")},V.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function ie(){}ie.prototype=V.prototype;function ne(O,H,fe){this.props=O,this.context=H,this.refs=W,this.updater=fe||F}var Z=ne.prototype=new ie;Z.constructor=ne,z(Z,V.prototype),Z.isPureReactComponent=!0;var ee=Array.isArray,we=Object.prototype.hasOwnProperty,Ee={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function I(O,H,fe){var Ae,Re={},Ne=null,Me=null;if(H!=null)for(Ae in H.ref!==void 0&&(Me=H.ref),H.key!==void 0&&(Ne=""+H.key),H)we.call(H,Ae)&&!x.hasOwnProperty(Ae)&&(Re[Ae]=H[Ae]);var Ue=arguments.length-2;if(Ue===1)Re.children=fe;else if(1<Ue){for(var $e=Array(Ue),vt=0;vt<Ue;vt++)$e[vt]=arguments[vt+2];Re.children=$e}if(O&&O.defaultProps)for(Ae in Ue=O.defaultProps,Ue)Re[Ae]===void 0&&(Re[Ae]=Ue[Ae]);return{$$typeof:r,type:O,key:Ne,ref:Me,props:Re,_owner:Ee.current}}function R(O,H){return{$$typeof:r,type:O.type,key:H,ref:O.ref,props:O.props,_owner:O._owner}}function P(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function D(O){var H={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(fe){return H[fe]})}var b=/\/+/g;function A(O,H){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):H.toString(36)}function nt(O,H,fe,Ae,Re){var Ne=typeof O;(Ne==="undefined"||Ne==="boolean")&&(O=null);var Me=!1;if(O===null)Me=!0;else switch(Ne){case"string":case"number":Me=!0;break;case"object":switch(O.$$typeof){case r:case e:Me=!0}}if(Me)return Me=O,Re=Re(Me),O=Ae===""?"."+A(Me,0):Ae,ee(Re)?(fe="",O!=null&&(fe=O.replace(b,"$&/")+"/"),nt(Re,H,fe,"",function(vt){return vt})):Re!=null&&(P(Re)&&(Re=R(Re,fe+(!Re.key||Me&&Me.key===Re.key?"":(""+Re.key).replace(b,"$&/")+"/")+O)),H.push(Re)),1;if(Me=0,Ae=Ae===""?".":Ae+":",ee(O))for(var Ue=0;Ue<O.length;Ue++){Ne=O[Ue];var $e=Ae+A(Ne,Ue);Me+=nt(Ne,H,fe,$e,Re)}else if($e=k(O),typeof $e=="function")for(O=$e.call(O),Ue=0;!(Ne=O.next()).done;)Ne=Ne.value,$e=Ae+A(Ne,Ue++),Me+=nt(Ne,H,fe,$e,Re);else if(Ne==="object")throw H=String(O),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return Me}function Ot(O,H,fe){if(O==null)return O;var Ae=[],Re=0;return nt(O,Ae,"","",function(Ne){return H.call(fe,Ne,Re++)}),Ae}function Vt(O){if(O._status===-1){var H=O._result;H=H(),H.then(function(fe){(O._status===0||O._status===-1)&&(O._status=1,O._result=fe)},function(fe){(O._status===0||O._status===-1)&&(O._status=2,O._result=fe)}),O._status===-1&&(O._status=0,O._result=H)}if(O._status===1)return O._result.default;throw O._result}var Be={current:null},re={transition:null},me={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:re,ReactCurrentOwner:Ee};function oe(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:Ot,forEach:function(O,H,fe){Ot(O,function(){H.apply(this,arguments)},fe)},count:function(O){var H=0;return Ot(O,function(){H++}),H},toArray:function(O){return Ot(O,function(H){return H})||[]},only:function(O){if(!P(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ke.Component=V,ke.Fragment=t,ke.Profiler=o,ke.PureComponent=ne,ke.StrictMode=s,ke.Suspense=g,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,ke.act=oe,ke.cloneElement=function(O,H,fe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ae=z({},O.props),Re=O.key,Ne=O.ref,Me=O._owner;if(H!=null){if(H.ref!==void 0&&(Ne=H.ref,Me=Ee.current),H.key!==void 0&&(Re=""+H.key),O.type&&O.type.defaultProps)var Ue=O.type.defaultProps;for($e in H)we.call(H,$e)&&!x.hasOwnProperty($e)&&(Ae[$e]=H[$e]===void 0&&Ue!==void 0?Ue[$e]:H[$e])}var $e=arguments.length-2;if($e===1)Ae.children=fe;else if(1<$e){Ue=Array($e);for(var vt=0;vt<$e;vt++)Ue[vt]=arguments[vt+2];Ae.children=Ue}return{$$typeof:r,type:O.type,key:Re,ref:Ne,props:Ae,_owner:Me}},ke.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},ke.createElement=I,ke.createFactory=function(O){var H=I.bind(null,O);return H.type=O,H},ke.createRef=function(){return{current:null}},ke.forwardRef=function(O){return{$$typeof:f,render:O}},ke.isValidElement=P,ke.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:Vt}},ke.memo=function(O,H){return{$$typeof:_,type:O,compare:H===void 0?null:H}},ke.startTransition=function(O){var H=re.transition;re.transition={};try{O()}finally{re.transition=H}},ke.unstable_act=oe,ke.useCallback=function(O,H){return Be.current.useCallback(O,H)},ke.useContext=function(O){return Be.current.useContext(O)},ke.useDebugValue=function(){},ke.useDeferredValue=function(O){return Be.current.useDeferredValue(O)},ke.useEffect=function(O,H){return Be.current.useEffect(O,H)},ke.useId=function(){return Be.current.useId()},ke.useImperativeHandle=function(O,H,fe){return Be.current.useImperativeHandle(O,H,fe)},ke.useInsertionEffect=function(O,H){return Be.current.useInsertionEffect(O,H)},ke.useLayoutEffect=function(O,H){return Be.current.useLayoutEffect(O,H)},ke.useMemo=function(O,H){return Be.current.useMemo(O,H)},ke.useReducer=function(O,H,fe){return Be.current.useReducer(O,H,fe)},ke.useRef=function(O){return Be.current.useRef(O)},ke.useState=function(O){return Be.current.useState(O)},ke.useSyncExternalStore=function(O,H,fe){return Be.current.useSyncExternalStore(O,H,fe)},ke.useTransition=function(){return Be.current.useTransition()},ke.version="18.3.1",ke}var tg;function Xd(){return tg||(tg=1,ad.exports=Tw()),ad.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function Iw(){if(ng)return Ca;ng=1;var r=Xd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,_){var w,T={},k=null,F=null;_!==void 0&&(k=""+_),g.key!==void 0&&(k=""+g.key),g.ref!==void 0&&(F=g.ref);for(w in g)s.call(g,w)&&!l.hasOwnProperty(w)&&(T[w]=g[w]);if(f&&f.defaultProps)for(w in g=f.defaultProps,g)T[w]===void 0&&(T[w]=g[w]);return{$$typeof:e,type:f,key:k,ref:F,props:T,_owner:o.current}}return Ca.Fragment=t,Ca.jsx=h,Ca.jsxs=h,Ca}var rg;function Sw(){return rg||(rg=1,od.exports=Iw()),od.exports}var L=Sw(),q=Xd();const Aw=Ew(q),Rw=ww({__proto__:null,default:Aw},[q]);var Ru={},ld={exports:{}},en={},ud={exports:{}},cd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function kw(){return ig||(ig=1,(function(r){function e(re,me){var oe=re.length;re.push(me);e:for(;0<oe;){var O=oe-1>>>1,H=re[O];if(0<o(H,me))re[O]=me,re[oe]=H,oe=O;else break e}}function t(re){return re.length===0?null:re[0]}function s(re){if(re.length===0)return null;var me=re[0],oe=re.pop();if(oe!==me){re[0]=oe;e:for(var O=0,H=re.length,fe=H>>>1;O<fe;){var Ae=2*(O+1)-1,Re=re[Ae],Ne=Ae+1,Me=re[Ne];if(0>o(Re,oe))Ne<H&&0>o(Me,Re)?(re[O]=Me,re[Ne]=oe,O=Ne):(re[O]=Re,re[Ae]=oe,O=Ae);else if(Ne<H&&0>o(Me,oe))re[O]=Me,re[Ne]=oe,O=Ne;else break e}}return me}function o(re,me){var oe=re.sortIndex-me.sortIndex;return oe!==0?oe:re.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var g=[],_=[],w=1,T=null,k=3,F=!1,z=!1,W=!1,V=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Z(re){for(var me=t(_);me!==null;){if(me.callback===null)s(_);else if(me.startTime<=re)s(_),me.sortIndex=me.expirationTime,e(g,me);else break;me=t(_)}}function ee(re){if(W=!1,Z(re),!z)if(t(g)!==null)z=!0,Vt(we);else{var me=t(_);me!==null&&Be(ee,me.startTime-re)}}function we(re,me){z=!1,W&&(W=!1,ie(I),I=-1),F=!0;var oe=k;try{for(Z(me),T=t(g);T!==null&&(!(T.expirationTime>me)||re&&!D());){var O=T.callback;if(typeof O=="function"){T.callback=null,k=T.priorityLevel;var H=O(T.expirationTime<=me);me=r.unstable_now(),typeof H=="function"?T.callback=H:T===t(g)&&s(g),Z(me)}else s(g);T=t(g)}if(T!==null)var fe=!0;else{var Ae=t(_);Ae!==null&&Be(ee,Ae.startTime-me),fe=!1}return fe}finally{T=null,k=oe,F=!1}}var Ee=!1,x=null,I=-1,R=5,P=-1;function D(){return!(r.unstable_now()-P<R)}function b(){if(x!==null){var re=r.unstable_now();P=re;var me=!0;try{me=x(!0,re)}finally{me?A():(Ee=!1,x=null)}}else Ee=!1}var A;if(typeof ne=="function")A=function(){ne(b)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,Ot=nt.port2;nt.port1.onmessage=b,A=function(){Ot.postMessage(null)}}else A=function(){V(b,0)};function Vt(re){x=re,Ee||(Ee=!0,A())}function Be(re,me){I=V(function(){re(r.unstable_now())},me)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(re){re.callback=null},r.unstable_continueExecution=function(){z||F||(z=!0,Vt(we))},r.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<re?Math.floor(1e3/re):5},r.unstable_getCurrentPriorityLevel=function(){return k},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(re){switch(k){case 1:case 2:case 3:var me=3;break;default:me=k}var oe=k;k=me;try{return re()}finally{k=oe}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(re,me){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var oe=k;k=re;try{return me()}finally{k=oe}},r.unstable_scheduleCallback=function(re,me,oe){var O=r.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?O+oe:O):oe=O,re){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=oe+H,re={id:w++,callback:me,priorityLevel:re,startTime:oe,expirationTime:H,sortIndex:-1},oe>O?(re.sortIndex=oe,e(_,re),t(g)===null&&re===t(_)&&(W?(ie(I),I=-1):W=!0,Be(ee,oe-O))):(re.sortIndex=H,e(g,re),z||F||(z=!0,Vt(we))),re},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(re){var me=k;return function(){var oe=k;k=me;try{return re.apply(this,arguments)}finally{k=oe}}}})(cd)),cd}var sg;function Cw(){return sg||(sg=1,ud.exports=kw()),ud.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function Pw(){if(og)return en;og=1;var r=Xd(),e=Cw();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function k(n){return g.call(T,n)?!0:g.call(w,n)?!1:_.test(n)?T[n]=!0:(w[n]=!0,!1)}function F(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function z(n,i,a,c){if(i===null||typeof i>"u"||F(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function W(n,i,a,c,d,m,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=v}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){V[n]=new W(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];V[i]=new W(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){V[n]=new W(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){V[n]=new W(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){V[n]=new W(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){V[n]=new W(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){V[n]=new W(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){V[n]=new W(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){V[n]=new W(n,5,!1,n.toLowerCase(),null,!1,!1)});var ie=/[\-:]([a-z])/g;function ne(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(ie,ne);V[i]=new W(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(ie,ne);V[i]=new W(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(ie,ne);V[i]=new W(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){V[n]=new W(n,1,!1,n.toLowerCase(),null,!1,!1)}),V.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){V[n]=new W(n,1,!1,n.toLowerCase(),null,!0,!0)});function Z(n,i,a,c){var d=V.hasOwnProperty(i)?V[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(z(i,a,d,c)&&(a=null),c||d===null?k(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var ee=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,we=Symbol.for("react.element"),Ee=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),D=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),Ot=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),re=Symbol.iterator;function me(n){return n===null||typeof n!="object"?null:(n=re&&n[re]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,O;function H(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var fe=!1;function Ae(n,i){if(!n||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(B){var c=B}Reflect.construct(n,[],i)}else{try{i.call()}catch(B){c=B}n.call(i.prototype)}else{try{throw Error()}catch(B){c=B}n()}}catch(B){if(B&&c&&typeof B.stack=="string"){for(var d=B.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,S=m.length-1;1<=v&&0<=S&&d[v]!==m[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==m[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==m[S]){var C=`
`+d[v].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=v&&0<=S);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?H(n):""}function Re(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=Ae(n.type,!1),n;case 11:return n=Ae(n.type.render,!1),n;case 1:return n=Ae(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case x:return"Fragment";case Ee:return"Portal";case R:return"Profiler";case I:return"StrictMode";case A:return"Suspense";case nt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case b:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ot:return i=n.displayName||null,i!==null?i:Ne(n.type)||"Memo";case Vt:i=n._payload,n=n._init;try{return Ne(n(i))}catch{}}return null}function Me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(i);case 8:return i===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ue(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function vt(n){var i=$e(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ur(n){n._valueTracker||(n._valueTracker=vt(n))}function ms(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Fr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ci(n,i){var a=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function gs(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Ue(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Vo(n,i){i=i.checked,i!=null&&Z(n,"checked",i,!1)}function Lo(n,i){Vo(n,i);var a=Ue(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ys(n,i.type,a):i.hasOwnProperty("defaultValue")&&ys(n,i.type,Ue(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function hl(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ys(n,i,a){(i!=="number"||Fr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var cr=Array.isArray;function hr(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ue(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function bo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function _s(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(cr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ue(a)}}function vs(n,i){var a=Ue(i.value),c=Ue(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Mo(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function dt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ft(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?dt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var dr,Uo=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(dr=dr||document.createElement("div"),dr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=dr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function jr(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xi=["Webkit","ms","Moz","O"];Object.keys(Pi).forEach(function(n){xi.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Pi[i]=Pi[n]})});function Fo(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Pi.hasOwnProperty(n)&&Pi[n]?(""+i).trim():i+"px"}function jo(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Fo(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Bo=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zo(n,i){if(i){if(Bo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function $o(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ni=null;function ws(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Es=null,hn=null,zn=null;function Ts(n){if(n=fa(n)){if(typeof Es!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Bl(i),Es(n.stateNode,n.type,i))}}function $n(n){hn?zn?zn.push(n):zn=[n]:hn=n}function Wo(){if(hn){var n=hn,i=zn;if(zn=hn=null,Ts(n),i)for(n=0;n<i.length;n++)Ts(i[n])}}function Di(n,i){return n(i)}function qo(){}var fr=!1;function Ho(n,i,a){if(fr)return n(i,a);fr=!0;try{return Di(n,i,a)}finally{fr=!1,(hn!==null||zn!==null)&&(qo(),Wo())}}function rt(n,i){var a=n.stateNode;if(a===null)return null;var c=Bl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Is=!1;if(f)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){Is=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{Is=!1}function Oi(n,i,a,c,d,m,v,S,C){var B=Array.prototype.slice.call(arguments,3);try{i.apply(a,B)}catch(Q){this.onError(Q)}}var Vi=!1,Ss=null,In=!1,Ko=null,Vc={onError:function(n){Vi=!0,Ss=n}};function As(n,i,a,c,d,m,v,S,C){Vi=!1,Ss=null,Oi.apply(Vc,arguments)}function dl(n,i,a,c,d,m,v,S,C){if(As.apply(this,arguments),Vi){if(Vi){var B=Ss;Vi=!1,Ss=null}else throw Error(t(198));In||(In=!0,Ko=B)}}function Sn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Li(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function An(n){if(Sn(n)!==n)throw Error(t(188))}function fl(n){var i=n.alternate;if(!i){if(i=Sn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return An(d),n;if(m===c)return An(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,c=m;break}if(S===c){v=!0,c=d,a=m;break}S=S.sibling}if(!v){for(S=m.child;S;){if(S===a){v=!0,a=m,c=d;break}if(S===c){v=!0,c=m,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Go(n){return n=fl(n),n!==null?Rs(n):null}function Rs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Rs(n);if(i!==null)return i;n=n.sibling}return null}var ks=e.unstable_scheduleCallback,Qo=e.unstable_cancelCallback,pl=e.unstable_shouldYield,Lc=e.unstable_requestPaint,We=e.unstable_now,ml=e.unstable_getCurrentPriorityLevel,bi=e.unstable_ImmediatePriority,Br=e.unstable_UserBlockingPriority,dn=e.unstable_NormalPriority,Yo=e.unstable_LowPriority,gl=e.unstable_IdlePriority,Mi=null,tn=null;function yl(n){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Mi,n,void 0,(n.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:vl,Xo=Math.log,_l=Math.LN2;function vl(n){return n>>>=0,n===0?32:31-(Xo(n)/_l|0)|0}var Cs=64,Ps=4194304;function zr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ui(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?c=zr(S):(m&=v,m!==0&&(c=zr(m)))}else v=a&~d,v!==0?c=zr(v):m!==0&&(c=zr(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-$t(i),d=1<<a,c|=n[a],i&=~d;return c}function bc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var v=31-$t(m),S=1<<v,C=d[v];C===-1?((S&a)===0||(S&c)!==0)&&(d[v]=bc(S,i)):C<=i&&(n.expiredLanes|=S),m&=~S}}function nn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Fi(){var n=Cs;return Cs<<=1,(Cs&4194240)===0&&(Cs=64),n}function $r(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Wr(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-$t(i),n[i]=a}function ze(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-$t(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function qr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-$t(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Pe=0;function Hr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var wl,xs,El,Tl,Il,Jo=!1,Wn=[],At=null,Rn=null,kn=null,Kr=new Map,fn=new Map,qn=[],Mc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sl(n,i){switch(n){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":Kr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fn.delete(i.pointerId)}}function Kt(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=fa(i),i!==null&&xs(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Uc(n,i,a,c,d){switch(i){case"focusin":return At=Kt(At,n,i,a,c,d),!0;case"dragenter":return Rn=Kt(Rn,n,i,a,c,d),!0;case"mouseover":return kn=Kt(kn,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Kr.set(m,Kt(Kr.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,fn.set(m,Kt(fn.get(m)||null,n,i,a,c,d)),!0}return!1}function Al(n){var i=Wi(n.target);if(i!==null){var a=Sn(i);if(a!==null){if(i=a.tag,i===13){if(i=Li(a),i!==null){n.blockedOn=i,Il(n.priority,function(){El(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function mr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ns(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ni=c,a.target.dispatchEvent(c),Ni=null}else return i=fa(a),i!==null&&xs(i),n.blockedOn=a,!1;i.shift()}return!0}function ji(n,i,a){mr(n)&&a.delete(i)}function Rl(){Jo=!1,At!==null&&mr(At)&&(At=null),Rn!==null&&mr(Rn)&&(Rn=null),kn!==null&&mr(kn)&&(kn=null),Kr.forEach(ji),fn.forEach(ji)}function Cn(n,i){n.blockedOn===i&&(n.blockedOn=null,Jo||(Jo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Rl)))}function Pn(n){function i(d){return Cn(d,n)}if(0<Wn.length){Cn(Wn[0],n);for(var a=1;a<Wn.length;a++){var c=Wn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(At!==null&&Cn(At,n),Rn!==null&&Cn(Rn,n),kn!==null&&Cn(kn,n),Kr.forEach(i),fn.forEach(i),a=0;a<qn.length;a++)c=qn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<qn.length&&(a=qn[0],a.blockedOn===null);)Al(a),a.blockedOn===null&&qn.shift()}var gr=ee.ReactCurrentBatchConfig,Gr=!0;function Qe(n,i,a,c){var d=Pe,m=gr.transition;gr.transition=null;try{Pe=1,Zo(n,i,a,c)}finally{Pe=d,gr.transition=m}}function Fc(n,i,a,c){var d=Pe,m=gr.transition;gr.transition=null;try{Pe=4,Zo(n,i,a,c)}finally{Pe=d,gr.transition=m}}function Zo(n,i,a,c){if(Gr){var d=Ns(n,i,a,c);if(d===null)Yc(n,i,c,Bi,a),Sl(n,c);else if(Uc(d,n,i,a,c))c.stopPropagation();else if(Sl(n,c),i&4&&-1<Mc.indexOf(n)){for(;d!==null;){var m=fa(d);if(m!==null&&wl(m),m=Ns(n,i,a,c),m===null&&Yc(n,i,c,Bi,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Yc(n,i,c,null,a)}}var Bi=null;function Ns(n,i,a,c){if(Bi=null,n=ws(c),n=Wi(n),n!==null)if(i=Sn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Li(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Bi=n,null}function ea(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ml()){case bi:return 1;case Br:return 4;case dn:case Yo:return 16;case gl:return 536870912;default:return 16}default:return 16}}var rn=null,Ds=null,Gt=null;function ta(){if(Gt)return Gt;var n,i=Ds,a=i.length,c,d="value"in rn?rn.value:rn.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[m-c];c++);return Gt=d.slice(n,1<c?1-c:void 0)}function Os(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Hn(){return!0}function na(){return!1}function Rt(n){function i(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(a=n[S],this[S]=a?a(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Hn:na,this.isPropagationStopped=na,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),i}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vs=Rt(xn),Kn=oe({},xn,{view:0,detail:0}),jc=Rt(Kn),Ls,yr,Qr,zi=oe({},Kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Qr&&(Qr&&n.type==="mousemove"?(Ls=n.screenX-Qr.screenX,yr=n.screenY-Qr.screenY):yr=Ls=0,Qr=n),Ls)},movementY:function(n){return"movementY"in n?n.movementY:yr}}),bs=Rt(zi),ra=oe({},zi,{dataTransfer:0}),kl=Rt(ra),Ms=oe({},Kn,{relatedTarget:0}),Us=Rt(Ms),Cl=oe({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),_r=Rt(Cl),Pl=oe({},xn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),xl=Rt(Pl),Nl=oe({},xn,{data:0}),ia=Rt(Nl),Fs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ol(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Dl[n])?!!i[n]:!1}function Gn(){return Ol}var u=oe({},Kn,{key:function(n){if(n.key){var i=Fs[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Os(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Wt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(n){return n.type==="keypress"?Os(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Os(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p=Rt(u),y=oe({},zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Rt(y),M=oe({},Kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn}),$=Rt(M),te=oe({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=Rt(te),pt=oe({},zi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),De=Rt(pt),wt=[9,13,27,32],at=f&&"CompositionEvent"in window,pn=null;f&&"documentMode"in document&&(pn=document.documentMode);var sn=f&&"TextEvent"in window&&!pn,$i=f&&(!at||pn&&8<pn&&11>=pn),js=" ",Gf=!1;function Qf(n,i){switch(n){case"keyup":return wt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Bs=!1;function y0(n,i){switch(n){case"compositionend":return Yf(i);case"keypress":return i.which!==32?null:(Gf=!0,js);case"textInput":return n=i.data,n===js&&Gf?null:n;default:return null}}function _0(n,i){if(Bs)return n==="compositionend"||!at&&Qf(n,i)?(n=ta(),Gt=Ds=rn=null,Bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return $i&&i.locale!=="ko"?null:i.data;default:return null}}var v0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!v0[n.type]:i==="textarea"}function Jf(n,i,a,c){$n(c),i=Ul(i,"onChange"),0<i.length&&(a=new Vs("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var sa=null,oa=null;function w0(n){gp(n,0)}function Vl(n){var i=Hs(n);if(ms(i))return n}function E0(n,i){if(n==="change")return i}var Zf=!1;if(f){var Bc;if(f){var zc="oninput"in document;if(!zc){var ep=document.createElement("div");ep.setAttribute("oninput","return;"),zc=typeof ep.oninput=="function"}Bc=zc}else Bc=!1;Zf=Bc&&(!document.documentMode||9<document.documentMode)}function tp(){sa&&(sa.detachEvent("onpropertychange",np),oa=sa=null)}function np(n){if(n.propertyName==="value"&&Vl(oa)){var i=[];Jf(i,oa,n,ws(n)),Ho(w0,i)}}function T0(n,i,a){n==="focusin"?(tp(),sa=i,oa=a,sa.attachEvent("onpropertychange",np)):n==="focusout"&&tp()}function I0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Vl(oa)}function S0(n,i){if(n==="click")return Vl(i)}function A0(n,i){if(n==="input"||n==="change")return Vl(i)}function R0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Nn=typeof Object.is=="function"?Object.is:R0;function aa(n,i){if(Nn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!Nn(n[d],i[d]))return!1}return!0}function rp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ip(n,i){var a=rp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=rp(a)}}function sp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?sp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function op(){for(var n=window,i=Fr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Fr(n.document)}return i}function $c(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function k0(n){var i=op(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&sp(a.ownerDocument.documentElement,a)){if(c!==null&&$c(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=ip(a,m);var v=ip(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var C0=f&&"documentMode"in document&&11>=document.documentMode,zs=null,Wc=null,la=null,qc=!1;function ap(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qc||zs==null||zs!==Fr(c)||(c=zs,"selectionStart"in c&&$c(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),la&&aa(la,c)||(la=c,c=Ul(Wc,"onSelect"),0<c.length&&(i=new Vs("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=zs)))}function Ll(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var $s={animationend:Ll("Animation","AnimationEnd"),animationiteration:Ll("Animation","AnimationIteration"),animationstart:Ll("Animation","AnimationStart"),transitionend:Ll("Transition","TransitionEnd")},Hc={},lp={};f&&(lp=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function bl(n){if(Hc[n])return Hc[n];if(!$s[n])return n;var i=$s[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in lp)return Hc[n]=i[a];return n}var up=bl("animationend"),cp=bl("animationiteration"),hp=bl("animationstart"),dp=bl("transitionend"),fp=new Map,pp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(n,i){fp.set(n,i),l(i,[n])}for(var Kc=0;Kc<pp.length;Kc++){var Gc=pp[Kc],P0=Gc.toLowerCase(),x0=Gc[0].toUpperCase()+Gc.slice(1);Yr(P0,"on"+x0)}Yr(up,"onAnimationEnd"),Yr(cp,"onAnimationIteration"),Yr(hp,"onAnimationStart"),Yr("dblclick","onDoubleClick"),Yr("focusin","onFocus"),Yr("focusout","onBlur"),Yr(dp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function mp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,dl(c,i,void 0,n),n.currentTarget=null}function gp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var v=c.length-1;0<=v;v--){var S=c[v],C=S.instance,B=S.currentTarget;if(S=S.listener,C!==m&&d.isPropagationStopped())break e;mp(d,S,B),m=C}else for(v=0;v<c.length;v++){if(S=c[v],C=S.instance,B=S.currentTarget,S=S.listener,C!==m&&d.isPropagationStopped())break e;mp(d,S,B),m=C}}}if(In)throw n=Ko,In=!1,Ko=null,n}function He(n,i){var a=i[nh];a===void 0&&(a=i[nh]=new Set);var c=n+"__bubble";a.has(c)||(yp(i,n,2,!1),a.add(c))}function Qc(n,i,a){var c=0;i&&(c|=4),yp(a,n,c,i)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function ca(n){if(!n[Ml]){n[Ml]=!0,s.forEach(function(a){a!=="selectionchange"&&(N0.has(a)||Qc(a,!1,n),Qc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ml]||(i[Ml]=!0,Qc("selectionchange",!1,i))}}function yp(n,i,a,c){switch(ea(i)){case 1:var d=Qe;break;case 4:d=Fc;break;default:d=Zo}a=d.bind(null,i,a,n),d=void 0,!Is||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Yc(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var C=v.tag;if((C===3||C===4)&&(C=v.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;v=v.return}for(;S!==null;){if(v=Wi(S),v===null)return;if(C=v.tag,C===5||C===6){c=m=v;continue e}S=S.parentNode}}c=c.return}Ho(function(){var B=m,Q=ws(a),X=[];e:{var G=fp.get(n);if(G!==void 0){var se=Vs,le=n;switch(n){case"keypress":if(Os(a)===0)break e;case"keydown":case"keyup":se=p;break;case"focusin":le="focus",se=Us;break;case"focusout":le="blur",se=Us;break;case"beforeblur":case"afterblur":se=Us;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=kl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=$;break;case up:case cp:case hp:se=_r;break;case dp:se=Fe;break;case"scroll":se=jc;break;case"wheel":se=De;break;case"copy":case"cut":case"paste":se=xl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=E}var ce=(i&4)!==0,it=!ce&&n==="scroll",U=ce?G!==null?G+"Capture":null:G;ce=[];for(var N=B,j;N!==null;){j=N;var J=j.stateNode;if(j.tag===5&&J!==null&&(j=J,U!==null&&(J=rt(N,U),J!=null&&ce.push(ha(N,J,j)))),it)break;N=N.return}0<ce.length&&(G=new se(G,le,null,a,Q),X.push({event:G,listeners:ce}))}}if((i&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",se=n==="mouseout"||n==="pointerout",G&&a!==Ni&&(le=a.relatedTarget||a.fromElement)&&(Wi(le)||le[vr]))break e;if((se||G)&&(G=Q.window===Q?Q:(G=Q.ownerDocument)?G.defaultView||G.parentWindow:window,se?(le=a.relatedTarget||a.toElement,se=B,le=le?Wi(le):null,le!==null&&(it=Sn(le),le!==it||le.tag!==5&&le.tag!==6)&&(le=null)):(se=null,le=B),se!==le)){if(ce=bs,J="onMouseLeave",U="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(ce=E,J="onPointerLeave",U="onPointerEnter",N="pointer"),it=se==null?G:Hs(se),j=le==null?G:Hs(le),G=new ce(J,N+"leave",se,a,Q),G.target=it,G.relatedTarget=j,J=null,Wi(Q)===B&&(ce=new ce(U,N+"enter",le,a,Q),ce.target=j,ce.relatedTarget=it,J=ce),it=J,se&&le)t:{for(ce=se,U=le,N=0,j=ce;j;j=Ws(j))N++;for(j=0,J=U;J;J=Ws(J))j++;for(;0<N-j;)ce=Ws(ce),N--;for(;0<j-N;)U=Ws(U),j--;for(;N--;){if(ce===U||U!==null&&ce===U.alternate)break t;ce=Ws(ce),U=Ws(U)}ce=null}else ce=null;se!==null&&_p(X,G,se,ce,!1),le!==null&&it!==null&&_p(X,it,le,ce,!0)}}e:{if(G=B?Hs(B):window,se=G.nodeName&&G.nodeName.toLowerCase(),se==="select"||se==="input"&&G.type==="file")var de=E0;else if(Xf(G))if(Zf)de=A0;else{de=I0;var ge=T0}else(se=G.nodeName)&&se.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(de=S0);if(de&&(de=de(n,B))){Jf(X,de,a,Q);break e}ge&&ge(n,G,B),n==="focusout"&&(ge=G._wrapperState)&&ge.controlled&&G.type==="number"&&ys(G,"number",G.value)}switch(ge=B?Hs(B):window,n){case"focusin":(Xf(ge)||ge.contentEditable==="true")&&(zs=ge,Wc=B,la=null);break;case"focusout":la=Wc=zs=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,ap(X,a,Q);break;case"selectionchange":if(C0)break;case"keydown":case"keyup":ap(X,a,Q)}var ye;if(at)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Bs?Qf(n,a)&&(ve="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&($i&&a.locale!=="ko"&&(Bs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Bs&&(ye=ta()):(rn=Q,Ds="value"in rn?rn.value:rn.textContent,Bs=!0)),ge=Ul(B,ve),0<ge.length&&(ve=new ia(ve,n,null,a,Q),X.push({event:ve,listeners:ge}),ye?ve.data=ye:(ye=Yf(a),ye!==null&&(ve.data=ye)))),(ye=sn?y0(n,a):_0(n,a))&&(B=Ul(B,"onBeforeInput"),0<B.length&&(Q=new ia("onBeforeInput","beforeinput",null,a,Q),X.push({event:Q,listeners:B}),Q.data=ye))}gp(X,i)})}function ha(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ul(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=rt(n,a),m!=null&&c.unshift(ha(n,m,d)),m=rt(n,i),m!=null&&c.push(ha(n,m,d))),n=n.return}return c}function Ws(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function _p(n,i,a,c,d){for(var m=i._reactName,v=[];a!==null&&a!==c;){var S=a,C=S.alternate,B=S.stateNode;if(C!==null&&C===c)break;S.tag===5&&B!==null&&(S=B,d?(C=rt(a,m),C!=null&&v.unshift(ha(a,C,S))):d||(C=rt(a,m),C!=null&&v.push(ha(a,C,S)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var D0=/\r\n?/g,O0=/\u0000|\uFFFD/g;function vp(n){return(typeof n=="string"?n:""+n).replace(D0,`
`).replace(O0,"")}function Fl(n,i,a){if(i=vp(i),vp(n)!==i&&a)throw Error(t(425))}function jl(){}var Xc=null,Jc=null;function Zc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var eh=typeof setTimeout=="function"?setTimeout:void 0,V0=typeof clearTimeout=="function"?clearTimeout:void 0,wp=typeof Promise=="function"?Promise:void 0,L0=typeof queueMicrotask=="function"?queueMicrotask:typeof wp<"u"?function(n){return wp.resolve(null).then(n).catch(b0)}:eh;function b0(n){setTimeout(function(){throw n})}function th(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Pn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Pn(i)}function Xr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Ep(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var qs=Math.random().toString(36).slice(2),Qn="__reactFiber$"+qs,da="__reactProps$"+qs,vr="__reactContainer$"+qs,nh="__reactEvents$"+qs,M0="__reactListeners$"+qs,U0="__reactHandles$"+qs;function Wi(n){var i=n[Qn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[vr]||a[Qn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Ep(n);n!==null;){if(a=n[Qn])return a;n=Ep(n)}return i}n=a,a=n.parentNode}return null}function fa(n){return n=n[Qn]||n[vr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Hs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Bl(n){return n[da]||null}var rh=[],Ks=-1;function Jr(n){return{current:n}}function Ke(n){0>Ks||(n.current=rh[Ks],rh[Ks]=null,Ks--)}function qe(n,i){Ks++,rh[Ks]=n.current,n.current=i}var Zr={},Lt=Jr(Zr),Qt=Jr(!1),qi=Zr;function Gs(n,i){var a=n.type.contextTypes;if(!a)return Zr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Yt(n){return n=n.childContextTypes,n!=null}function zl(){Ke(Qt),Ke(Lt)}function Tp(n,i,a){if(Lt.current!==Zr)throw Error(t(168));qe(Lt,i),qe(Qt,a)}function Ip(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Me(n)||"Unknown",d));return oe({},a,c)}function $l(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Zr,qi=Lt.current,qe(Lt,n),qe(Qt,Qt.current),!0}function Sp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Ip(n,i,qi),c.__reactInternalMemoizedMergedChildContext=n,Ke(Qt),Ke(Lt),qe(Lt,n)):Ke(Qt),qe(Qt,a)}var wr=null,Wl=!1,ih=!1;function Ap(n){wr===null?wr=[n]:wr.push(n)}function F0(n){Wl=!0,Ap(n)}function ei(){if(!ih&&wr!==null){ih=!0;var n=0,i=Pe;try{var a=wr;for(Pe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}wr=null,Wl=!1}catch(d){throw wr!==null&&(wr=wr.slice(n+1)),ks(bi,ei),d}finally{Pe=i,ih=!1}}return null}var Qs=[],Ys=0,ql=null,Hl=0,mn=[],gn=0,Hi=null,Er=1,Tr="";function Ki(n,i){Qs[Ys++]=Hl,Qs[Ys++]=ql,ql=n,Hl=i}function Rp(n,i,a){mn[gn++]=Er,mn[gn++]=Tr,mn[gn++]=Hi,Hi=n;var c=Er;n=Tr;var d=32-$t(c)-1;c&=~(1<<d),a+=1;var m=32-$t(i)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Er=1<<32-$t(i)+d|a<<d|c,Tr=m+n}else Er=1<<m|a<<d|c,Tr=n}function sh(n){n.return!==null&&(Ki(n,1),Rp(n,1,0))}function oh(n){for(;n===ql;)ql=Qs[--Ys],Qs[Ys]=null,Hl=Qs[--Ys],Qs[Ys]=null;for(;n===Hi;)Hi=mn[--gn],mn[gn]=null,Tr=mn[--gn],mn[gn]=null,Er=mn[--gn],mn[gn]=null}var on=null,an=null,Ye=!1,Dn=null;function kp(n,i){var a=wn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Cp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,on=n,an=Xr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,on=n,an=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Hi!==null?{id:Er,overflow:Tr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=wn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,on=n,an=null,!0):!1;default:return!1}}function ah(n){return(n.mode&1)!==0&&(n.flags&128)===0}function lh(n){if(Ye){var i=an;if(i){var a=i;if(!Cp(n,i)){if(ah(n))throw Error(t(418));i=Xr(a.nextSibling);var c=on;i&&Cp(n,i)?kp(c,a):(n.flags=n.flags&-4097|2,Ye=!1,on=n)}}else{if(ah(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ye=!1,on=n}}}function Pp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;on=n}function Kl(n){if(n!==on)return!1;if(!Ye)return Pp(n),Ye=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Zc(n.type,n.memoizedProps)),i&&(i=an)){if(ah(n))throw xp(),Error(t(418));for(;i;)kp(n,i),i=Xr(i.nextSibling)}if(Pp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){an=Xr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}an=null}}else an=on?Xr(n.stateNode.nextSibling):null;return!0}function xp(){for(var n=an;n;)n=Xr(n.nextSibling)}function Xs(){an=on=null,Ye=!1}function uh(n){Dn===null?Dn=[n]:Dn.push(n)}var j0=ee.ReactCurrentBatchConfig;function pa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(v){var S=d.refs;v===null?delete S[m]:S[m]=v},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Gl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Np(n){var i=n._init;return i(n._payload)}function Dp(n){function i(U,N){if(n){var j=U.deletions;j===null?(U.deletions=[N],U.flags|=16):j.push(N)}}function a(U,N){if(!n)return null;for(;N!==null;)i(U,N),N=N.sibling;return null}function c(U,N){for(U=new Map;N!==null;)N.key!==null?U.set(N.key,N):U.set(N.index,N),N=N.sibling;return U}function d(U,N){return U=li(U,N),U.index=0,U.sibling=null,U}function m(U,N,j){return U.index=j,n?(j=U.alternate,j!==null?(j=j.index,j<N?(U.flags|=2,N):j):(U.flags|=2,N)):(U.flags|=1048576,N)}function v(U){return n&&U.alternate===null&&(U.flags|=2),U}function S(U,N,j,J){return N===null||N.tag!==6?(N=ed(j,U.mode,J),N.return=U,N):(N=d(N,j),N.return=U,N)}function C(U,N,j,J){var de=j.type;return de===x?Q(U,N,j.props.children,J,j.key):N!==null&&(N.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Vt&&Np(de)===N.type)?(J=d(N,j.props),J.ref=pa(U,N,j),J.return=U,J):(J=_u(j.type,j.key,j.props,null,U.mode,J),J.ref=pa(U,N,j),J.return=U,J)}function B(U,N,j,J){return N===null||N.tag!==4||N.stateNode.containerInfo!==j.containerInfo||N.stateNode.implementation!==j.implementation?(N=td(j,U.mode,J),N.return=U,N):(N=d(N,j.children||[]),N.return=U,N)}function Q(U,N,j,J,de){return N===null||N.tag!==7?(N=ts(j,U.mode,J,de),N.return=U,N):(N=d(N,j),N.return=U,N)}function X(U,N,j){if(typeof N=="string"&&N!==""||typeof N=="number")return N=ed(""+N,U.mode,j),N.return=U,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case we:return j=_u(N.type,N.key,N.props,null,U.mode,j),j.ref=pa(U,null,N),j.return=U,j;case Ee:return N=td(N,U.mode,j),N.return=U,N;case Vt:var J=N._init;return X(U,J(N._payload),j)}if(cr(N)||me(N))return N=ts(N,U.mode,j,null),N.return=U,N;Gl(U,N)}return null}function G(U,N,j,J){var de=N!==null?N.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return de!==null?null:S(U,N,""+j,J);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case we:return j.key===de?C(U,N,j,J):null;case Ee:return j.key===de?B(U,N,j,J):null;case Vt:return de=j._init,G(U,N,de(j._payload),J)}if(cr(j)||me(j))return de!==null?null:Q(U,N,j,J,null);Gl(U,j)}return null}function se(U,N,j,J,de){if(typeof J=="string"&&J!==""||typeof J=="number")return U=U.get(j)||null,S(N,U,""+J,de);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case we:return U=U.get(J.key===null?j:J.key)||null,C(N,U,J,de);case Ee:return U=U.get(J.key===null?j:J.key)||null,B(N,U,J,de);case Vt:var ge=J._init;return se(U,N,j,ge(J._payload),de)}if(cr(J)||me(J))return U=U.get(j)||null,Q(N,U,J,de,null);Gl(N,J)}return null}function le(U,N,j,J){for(var de=null,ge=null,ye=N,ve=N=0,It=null;ye!==null&&ve<j.length;ve++){ye.index>ve?(It=ye,ye=null):It=ye.sibling;var Le=G(U,ye,j[ve],J);if(Le===null){ye===null&&(ye=It);break}n&&ye&&Le.alternate===null&&i(U,ye),N=m(Le,N,ve),ge===null?de=Le:ge.sibling=Le,ge=Le,ye=It}if(ve===j.length)return a(U,ye),Ye&&Ki(U,ve),de;if(ye===null){for(;ve<j.length;ve++)ye=X(U,j[ve],J),ye!==null&&(N=m(ye,N,ve),ge===null?de=ye:ge.sibling=ye,ge=ye);return Ye&&Ki(U,ve),de}for(ye=c(U,ye);ve<j.length;ve++)It=se(ye,U,ve,j[ve],J),It!==null&&(n&&It.alternate!==null&&ye.delete(It.key===null?ve:It.key),N=m(It,N,ve),ge===null?de=It:ge.sibling=It,ge=It);return n&&ye.forEach(function(ui){return i(U,ui)}),Ye&&Ki(U,ve),de}function ce(U,N,j,J){var de=me(j);if(typeof de!="function")throw Error(t(150));if(j=de.call(j),j==null)throw Error(t(151));for(var ge=de=null,ye=N,ve=N=0,It=null,Le=j.next();ye!==null&&!Le.done;ve++,Le=j.next()){ye.index>ve?(It=ye,ye=null):It=ye.sibling;var ui=G(U,ye,Le.value,J);if(ui===null){ye===null&&(ye=It);break}n&&ye&&ui.alternate===null&&i(U,ye),N=m(ui,N,ve),ge===null?de=ui:ge.sibling=ui,ge=ui,ye=It}if(Le.done)return a(U,ye),Ye&&Ki(U,ve),de;if(ye===null){for(;!Le.done;ve++,Le=j.next())Le=X(U,Le.value,J),Le!==null&&(N=m(Le,N,ve),ge===null?de=Le:ge.sibling=Le,ge=Le);return Ye&&Ki(U,ve),de}for(ye=c(U,ye);!Le.done;ve++,Le=j.next())Le=se(ye,U,ve,Le.value,J),Le!==null&&(n&&Le.alternate!==null&&ye.delete(Le.key===null?ve:Le.key),N=m(Le,N,ve),ge===null?de=Le:ge.sibling=Le,ge=Le);return n&&ye.forEach(function(vw){return i(U,vw)}),Ye&&Ki(U,ve),de}function it(U,N,j,J){if(typeof j=="object"&&j!==null&&j.type===x&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case we:e:{for(var de=j.key,ge=N;ge!==null;){if(ge.key===de){if(de=j.type,de===x){if(ge.tag===7){a(U,ge.sibling),N=d(ge,j.props.children),N.return=U,U=N;break e}}else if(ge.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Vt&&Np(de)===ge.type){a(U,ge.sibling),N=d(ge,j.props),N.ref=pa(U,ge,j),N.return=U,U=N;break e}a(U,ge);break}else i(U,ge);ge=ge.sibling}j.type===x?(N=ts(j.props.children,U.mode,J,j.key),N.return=U,U=N):(J=_u(j.type,j.key,j.props,null,U.mode,J),J.ref=pa(U,N,j),J.return=U,U=J)}return v(U);case Ee:e:{for(ge=j.key;N!==null;){if(N.key===ge)if(N.tag===4&&N.stateNode.containerInfo===j.containerInfo&&N.stateNode.implementation===j.implementation){a(U,N.sibling),N=d(N,j.children||[]),N.return=U,U=N;break e}else{a(U,N);break}else i(U,N);N=N.sibling}N=td(j,U.mode,J),N.return=U,U=N}return v(U);case Vt:return ge=j._init,it(U,N,ge(j._payload),J)}if(cr(j))return le(U,N,j,J);if(me(j))return ce(U,N,j,J);Gl(U,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,N!==null&&N.tag===6?(a(U,N.sibling),N=d(N,j),N.return=U,U=N):(a(U,N),N=ed(j,U.mode,J),N.return=U,U=N),v(U)):a(U,N)}return it}var Js=Dp(!0),Op=Dp(!1),Ql=Jr(null),Yl=null,Zs=null,ch=null;function hh(){ch=Zs=Yl=null}function dh(n){var i=Ql.current;Ke(Ql),n._currentValue=i}function fh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function eo(n,i){Yl=n,ch=Zs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Xt=!0),n.firstContext=null)}function yn(n){var i=n._currentValue;if(ch!==n)if(n={context:n,memoizedValue:i,next:null},Zs===null){if(Yl===null)throw Error(t(308));Zs=n,Yl.dependencies={lanes:0,firstContext:n}}else Zs=Zs.next=n;return i}var Gi=null;function ph(n){Gi===null?Gi=[n]:Gi.push(n)}function Vp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,ph(i)):(a.next=d.next,d.next=a),i.interleaved=a,Ir(n,c)}function Ir(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ti=!1;function mh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Sr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ni(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ve&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Ir(n,a)}return d=c.interleaved,d===null?(i.next=i,ph(c)):(i.next=d.next,d.next=i),c.interleaved=i,Ir(n,a)}function Xl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,qr(n,a)}}function bp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Jl(n,i,a,c){var d=n.updateQueue;ti=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var C=S,B=C.next;C.next=null,v===null?m=B:v.next=B,v=C;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,S=Q.lastBaseUpdate,S!==v&&(S===null?Q.firstBaseUpdate=B:S.next=B,Q.lastBaseUpdate=C))}if(m!==null){var X=d.baseState;v=0,Q=B=C=null,S=m;do{var G=S.lane,se=S.eventTime;if((c&G)===G){Q!==null&&(Q=Q.next={eventTime:se,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var le=n,ce=S;switch(G=i,se=a,ce.tag){case 1:if(le=ce.payload,typeof le=="function"){X=le.call(se,X,G);break e}X=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ce.payload,G=typeof le=="function"?le.call(se,X,G):le,G==null)break e;X=oe({},X,G);break e;case 2:ti=!0}}S.callback!==null&&S.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[S]:G.push(S))}else se={eventTime:se,lane:G,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Q===null?(B=Q=se,C=X):Q=Q.next=se,v|=G;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;G=S,S=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(Q===null&&(C=X),d.baseState=C,d.firstBaseUpdate=B,d.lastBaseUpdate=Q,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Xi|=v,n.lanes=v,n.memoizedState=X}}function Mp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ma={},Yn=Jr(ma),ga=Jr(ma),ya=Jr(ma);function Qi(n){if(n===ma)throw Error(t(174));return n}function gh(n,i){switch(qe(ya,i),qe(ga,n),qe(Yn,ma),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ft(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ft(i,n)}Ke(Yn),qe(Yn,i)}function to(){Ke(Yn),Ke(ga),Ke(ya)}function Up(n){Qi(ya.current);var i=Qi(Yn.current),a=ft(i,n.type);i!==a&&(qe(ga,n),qe(Yn,a))}function yh(n){ga.current===n&&(Ke(Yn),Ke(ga))}var Xe=Jr(0);function Zl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var _h=[];function vh(){for(var n=0;n<_h.length;n++)_h[n]._workInProgressVersionPrimary=null;_h.length=0}var eu=ee.ReactCurrentDispatcher,wh=ee.ReactCurrentBatchConfig,Yi=0,Je=null,mt=null,Et=null,tu=!1,_a=!1,va=0,B0=0;function bt(){throw Error(t(321))}function Eh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Nn(n[a],i[a]))return!1;return!0}function Th(n,i,a,c,d,m){if(Yi=m,Je=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,eu.current=n===null||n.memoizedState===null?q0:H0,n=a(c,d),_a){m=0;do{if(_a=!1,va=0,25<=m)throw Error(t(301));m+=1,Et=mt=null,i.updateQueue=null,eu.current=K0,n=a(c,d)}while(_a)}if(eu.current=iu,i=mt!==null&&mt.next!==null,Yi=0,Et=mt=Je=null,tu=!1,i)throw Error(t(300));return n}function Ih(){var n=va!==0;return va=0,n}function Xn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Je.memoizedState=Et=n:Et=Et.next=n,Et}function _n(){if(mt===null){var n=Je.alternate;n=n!==null?n.memoizedState:null}else n=mt.next;var i=Et===null?Je.memoizedState:Et.next;if(i!==null)Et=i,mt=n;else{if(n===null)throw Error(t(310));mt=n,n={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},Et===null?Je.memoizedState=Et=n:Et=Et.next=n}return Et}function wa(n,i){return typeof i=="function"?i(n):i}function Sh(n){var i=_n(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=mt,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var S=v=null,C=null,B=m;do{var Q=B.lane;if((Yi&Q)===Q)C!==null&&(C=C.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),c=B.hasEagerState?B.eagerState:n(c,B.action);else{var X={lane:Q,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};C===null?(S=C=X,v=c):C=C.next=X,Je.lanes|=Q,Xi|=Q}B=B.next}while(B!==null&&B!==m);C===null?v=c:C.next=S,Nn(c,i.memoizedState)||(Xt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Je.lanes|=m,Xi|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Ah(n){var i=_n(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=n(m,v.action),v=v.next;while(v!==d);Nn(m,i.memoizedState)||(Xt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Fp(){}function jp(n,i){var a=Je,c=_n(),d=i(),m=!Nn(c.memoizedState,d);if(m&&(c.memoizedState=d,Xt=!0),c=c.queue,Rh($p.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,Ea(9,zp.bind(null,a,c,d,i),void 0,null),Tt===null)throw Error(t(349));(Yi&30)!==0||Bp(a,i,d)}return d}function Bp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Je.updateQueue,i===null?(i={lastEffect:null,stores:null},Je.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function zp(n,i,a,c){i.value=a,i.getSnapshot=c,Wp(i)&&qp(n)}function $p(n,i,a){return a(function(){Wp(i)&&qp(n)})}function Wp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Nn(n,a)}catch{return!0}}function qp(n){var i=Ir(n,1);i!==null&&bn(i,n,1,-1)}function Hp(n){var i=Xn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:n},i.queue=n,n=n.dispatch=W0.bind(null,Je,n),[i.memoizedState,n]}function Ea(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Je.updateQueue,i===null?(i={lastEffect:null,stores:null},Je.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Kp(){return _n().memoizedState}function nu(n,i,a,c){var d=Xn();Je.flags|=n,d.memoizedState=Ea(1|i,a,void 0,c===void 0?null:c)}function ru(n,i,a,c){var d=_n();c=c===void 0?null:c;var m=void 0;if(mt!==null){var v=mt.memoizedState;if(m=v.destroy,c!==null&&Eh(c,v.deps)){d.memoizedState=Ea(i,a,m,c);return}}Je.flags|=n,d.memoizedState=Ea(1|i,a,m,c)}function Gp(n,i){return nu(8390656,8,n,i)}function Rh(n,i){return ru(2048,8,n,i)}function Qp(n,i){return ru(4,2,n,i)}function Yp(n,i){return ru(4,4,n,i)}function Xp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Jp(n,i,a){return a=a!=null?a.concat([n]):null,ru(4,4,Xp.bind(null,i,n),a)}function kh(){}function Zp(n,i){var a=_n();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Eh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function em(n,i){var a=_n();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Eh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function tm(n,i,a){return(Yi&21)===0?(n.baseState&&(n.baseState=!1,Xt=!0),n.memoizedState=a):(Nn(a,i)||(a=Fi(),Je.lanes|=a,Xi|=a,n.baseState=!0),i)}function z0(n,i){var a=Pe;Pe=a!==0&&4>a?a:4,n(!0);var c=wh.transition;wh.transition={};try{n(!1),i()}finally{Pe=a,wh.transition=c}}function nm(){return _n().memoizedState}function $0(n,i,a){var c=oi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},rm(n))im(i,a);else if(a=Vp(n,i,a,c),a!==null){var d=Ht();bn(a,n,c,d),sm(a,i,c)}}function W0(n,i,a){var c=oi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(rm(n))im(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var v=i.lastRenderedState,S=m(v,a);if(d.hasEagerState=!0,d.eagerState=S,Nn(S,v)){var C=i.interleaved;C===null?(d.next=d,ph(i)):(d.next=C.next,C.next=d),i.interleaved=d;return}}catch{}finally{}a=Vp(n,i,d,c),a!==null&&(d=Ht(),bn(a,n,c,d),sm(a,i,c))}}function rm(n){var i=n.alternate;return n===Je||i!==null&&i===Je}function im(n,i){_a=tu=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function sm(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,qr(n,a)}}var iu={readContext:yn,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useInsertionEffect:bt,useLayoutEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useMutableSource:bt,useSyncExternalStore:bt,useId:bt,unstable_isNewReconciler:!1},q0={readContext:yn,useCallback:function(n,i){return Xn().memoizedState=[n,i===void 0?null:i],n},useContext:yn,useEffect:Gp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,nu(4194308,4,Xp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return nu(4194308,4,n,i)},useInsertionEffect:function(n,i){return nu(4,2,n,i)},useMemo:function(n,i){var a=Xn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Xn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=$0.bind(null,Je,n),[c.memoizedState,n]},useRef:function(n){var i=Xn();return n={current:n},i.memoizedState=n},useState:Hp,useDebugValue:kh,useDeferredValue:function(n){return Xn().memoizedState=n},useTransition:function(){var n=Hp(!1),i=n[0];return n=z0.bind(null,n[1]),Xn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Je,d=Xn();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Tt===null)throw Error(t(349));(Yi&30)!==0||Bp(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Gp($p.bind(null,c,m,n),[n]),c.flags|=2048,Ea(9,zp.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Xn(),i=Tt.identifierPrefix;if(Ye){var a=Tr,c=Er;a=(c&~(1<<32-$t(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=va++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=B0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},H0={readContext:yn,useCallback:Zp,useContext:yn,useEffect:Rh,useImperativeHandle:Jp,useInsertionEffect:Qp,useLayoutEffect:Yp,useMemo:em,useReducer:Sh,useRef:Kp,useState:function(){return Sh(wa)},useDebugValue:kh,useDeferredValue:function(n){var i=_n();return tm(i,mt.memoizedState,n)},useTransition:function(){var n=Sh(wa)[0],i=_n().memoizedState;return[n,i]},useMutableSource:Fp,useSyncExternalStore:jp,useId:nm,unstable_isNewReconciler:!1},K0={readContext:yn,useCallback:Zp,useContext:yn,useEffect:Rh,useImperativeHandle:Jp,useInsertionEffect:Qp,useLayoutEffect:Yp,useMemo:em,useReducer:Ah,useRef:Kp,useState:function(){return Ah(wa)},useDebugValue:kh,useDeferredValue:function(n){var i=_n();return mt===null?i.memoizedState=n:tm(i,mt.memoizedState,n)},useTransition:function(){var n=Ah(wa)[0],i=_n().memoizedState;return[n,i]},useMutableSource:Fp,useSyncExternalStore:jp,useId:nm,unstable_isNewReconciler:!1};function On(n,i){if(n&&n.defaultProps){i=oe({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Ch(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:oe({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var su={isMounted:function(n){return(n=n._reactInternals)?Sn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Ht(),d=oi(n),m=Sr(c,d);m.payload=i,a!=null&&(m.callback=a),i=ni(n,m,d),i!==null&&(bn(i,n,d,c),Xl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Ht(),d=oi(n),m=Sr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=ni(n,m,d),i!==null&&(bn(i,n,d,c),Xl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Ht(),c=oi(n),d=Sr(a,c);d.tag=2,i!=null&&(d.callback=i),i=ni(n,d,c),i!==null&&(bn(i,n,c,a),Xl(i,n,c))}};function om(n,i,a,c,d,m,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,v):i.prototype&&i.prototype.isPureReactComponent?!aa(a,c)||!aa(d,m):!0}function am(n,i,a){var c=!1,d=Zr,m=i.contextType;return typeof m=="object"&&m!==null?m=yn(m):(d=Yt(i)?qi:Lt.current,c=i.contextTypes,m=(c=c!=null)?Gs(n,d):Zr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=su,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function lm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&su.enqueueReplaceState(i,i.state,null)}function Ph(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},mh(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=yn(m):(m=Yt(i)?qi:Lt.current,d.context=Gs(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Ch(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&su.enqueueReplaceState(d,d.state,null),Jl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function no(n,i){try{var a="",c=i;do a+=Re(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function xh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Nh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var G0=typeof WeakMap=="function"?WeakMap:Map;function um(n,i,a){a=Sr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){du||(du=!0,Hh=c),Nh(n,i)},a}function cm(n,i,a){a=Sr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Nh(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Nh(n,i),typeof c!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function hm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new G0;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=lw.bind(null,n,i,a),i.then(n,n))}function dm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function fm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Sr(-1,1),i.tag=2,ni(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Q0=ee.ReactCurrentOwner,Xt=!1;function qt(n,i,a,c){i.child=n===null?Op(i,null,a,c):Js(i,n.child,a,c)}function pm(n,i,a,c,d){a=a.render;var m=i.ref;return eo(i,d),c=Th(n,i,a,c,m,d),a=Ih(),n!==null&&!Xt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ar(n,i,d)):(Ye&&a&&sh(i),i.flags|=1,qt(n,i,c,d),i.child)}function mm(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Zh(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,gm(n,i,m,c,d)):(n=_u(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:aa,a(v,c)&&n.ref===i.ref)return Ar(n,i,d)}return i.flags|=1,n=li(m,c),n.ref=i.ref,n.return=i,i.child=n}function gm(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(aa(m,c)&&n.ref===i.ref)if(Xt=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Xt=!0);else return i.lanes=n.lanes,Ar(n,i,d)}return Dh(n,i,a,c,d)}function ym(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(io,ln),ln|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,qe(io,ln),ln|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,qe(io,ln),ln|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,qe(io,ln),ln|=c;return qt(n,i,d,a),i.child}function _m(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Dh(n,i,a,c,d){var m=Yt(a)?qi:Lt.current;return m=Gs(i,m),eo(i,d),a=Th(n,i,a,c,m,d),c=Ih(),n!==null&&!Xt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ar(n,i,d)):(Ye&&c&&sh(i),i.flags|=1,qt(n,i,a,d),i.child)}function vm(n,i,a,c,d){if(Yt(a)){var m=!0;$l(i)}else m=!1;if(eo(i,d),i.stateNode===null)au(n,i),am(i,a,c),Ph(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,S=i.memoizedProps;v.props=S;var C=v.context,B=a.contextType;typeof B=="object"&&B!==null?B=yn(B):(B=Yt(a)?qi:Lt.current,B=Gs(i,B));var Q=a.getDerivedStateFromProps,X=typeof Q=="function"||typeof v.getSnapshotBeforeUpdate=="function";X||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||C!==B)&&lm(i,v,c,B),ti=!1;var G=i.memoizedState;v.state=G,Jl(i,c,v,d),C=i.memoizedState,S!==c||G!==C||Qt.current||ti?(typeof Q=="function"&&(Ch(i,a,Q,c),C=i.memoizedState),(S=ti||om(i,a,S,c,G,C,B))?(X||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=C),v.props=c,v.state=C,v.context=B,c=S):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,Lp(n,i),S=i.memoizedProps,B=i.type===i.elementType?S:On(i.type,S),v.props=B,X=i.pendingProps,G=v.context,C=a.contextType,typeof C=="object"&&C!==null?C=yn(C):(C=Yt(a)?qi:Lt.current,C=Gs(i,C));var se=a.getDerivedStateFromProps;(Q=typeof se=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==X||G!==C)&&lm(i,v,c,C),ti=!1,G=i.memoizedState,v.state=G,Jl(i,c,v,d);var le=i.memoizedState;S!==X||G!==le||Qt.current||ti?(typeof se=="function"&&(Ch(i,a,se,c),le=i.memoizedState),(B=ti||om(i,a,B,c,G,le,C)||!1)?(Q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,le,C),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,le,C)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=le),v.props=c,v.state=le,v.context=C,c=B):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),c=!1)}return Oh(n,i,a,c,m,d)}function Oh(n,i,a,c,d,m){_m(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&Sp(i,a,!1),Ar(n,i,m);c=i.stateNode,Q0.current=i;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=Js(i,n.child,null,m),i.child=Js(i,null,S,m)):qt(n,i,S,m),i.memoizedState=c.state,d&&Sp(i,a,!0),i.child}function wm(n){var i=n.stateNode;i.pendingContext?Tp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Tp(n,i.context,!1),gh(n,i.containerInfo)}function Em(n,i,a,c,d){return Xs(),uh(d),i.flags|=256,qt(n,i,a,c),i.child}var Vh={dehydrated:null,treeContext:null,retryLane:0};function Lh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Tm(n,i,a){var c=i.pendingProps,d=Xe.current,m=!1,v=(i.flags&128)!==0,S;if((S=v)||(S=n!==null&&n.memoizedState===null?!1:(d&2)!==0),S?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qe(Xe,d&1),n===null)return lh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,m?(c=i.mode,m=i.child,v={mode:"hidden",children:v},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=v):m=vu(v,c,0,null),n=ts(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Lh(a),i.memoizedState=Vh,n):bh(i,v));if(d=n.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return Y0(n,i,v,c,S,d,a);if(m){m=c.fallback,v=i.mode,d=n.child,S=d.sibling;var C={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=C,i.deletions=null):(c=li(d,C),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?m=li(S,m):(m=ts(m,v,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,v=n.child.memoizedState,v=v===null?Lh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=n.childLanes&~a,i.memoizedState=Vh,c}return m=n.child,n=m.sibling,c=li(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function bh(n,i){return i=vu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ou(n,i,a,c){return c!==null&&uh(c),Js(i,n.child,null,a),n=bh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Y0(n,i,a,c,d,m,v){if(a)return i.flags&256?(i.flags&=-257,c=xh(Error(t(422))),ou(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=vu({mode:"visible",children:c.children},d,0,null),m=ts(m,d,v,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Js(i,n.child,null,v),i.child.memoizedState=Lh(v),i.memoizedState=Vh,m);if((i.mode&1)===0)return ou(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,m=Error(t(419)),c=xh(m,c,void 0),ou(n,i,v,c)}if(S=(v&n.childLanes)!==0,Xt||S){if(c=Tt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Ir(n,d),bn(c,n,d,-1))}return Jh(),c=xh(Error(t(421))),ou(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=uw.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,an=Xr(d.nextSibling),on=i,Ye=!0,Dn=null,n!==null&&(mn[gn++]=Er,mn[gn++]=Tr,mn[gn++]=Hi,Er=n.id,Tr=n.overflow,Hi=i),i=bh(i,c.children),i.flags|=4096,i)}function Im(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),fh(n.return,i,a)}function Mh(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Sm(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(qt(n,i,c.children,a),c=Xe.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Im(n,a,i);else if(n.tag===19)Im(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qe(Xe,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Zl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Mh(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Zl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Mh(i,!0,a,null,m);break;case"together":Mh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function au(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ar(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Xi|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=li(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=li(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function X0(n,i,a){switch(i.tag){case 3:wm(i),Xs();break;case 5:Up(i);break;case 1:Yt(i.type)&&$l(i);break;case 4:gh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;qe(Ql,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(qe(Xe,Xe.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Tm(n,i,a):(qe(Xe,Xe.current&1),n=Ar(n,i,a),n!==null?n.sibling:null);qe(Xe,Xe.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Sm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(Xe,Xe.current),c)break;return null;case 22:case 23:return i.lanes=0,ym(n,i,a)}return Ar(n,i,a)}var Am,Uh,Rm,km;Am=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Uh=function(){},Rm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Qi(Yn.current);var m=null;switch(a){case"input":d=Ci(n,d),c=Ci(n,c),m=[];break;case"select":d=oe({},d,{value:void 0}),c=oe({},c,{value:void 0}),m=[];break;case"textarea":d=bo(n,d),c=bo(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=jl)}zo(a,c);var v;a=null;for(B in d)if(!c.hasOwnProperty(B)&&d.hasOwnProperty(B)&&d[B]!=null)if(B==="style"){var S=d[B];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(o.hasOwnProperty(B)?m||(m=[]):(m=m||[]).push(B,null));for(B in c){var C=c[B];if(S=d!=null?d[B]:void 0,c.hasOwnProperty(B)&&C!==S&&(C!=null||S!=null))if(B==="style")if(S){for(v in S)!S.hasOwnProperty(v)||C&&C.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in C)C.hasOwnProperty(v)&&S[v]!==C[v]&&(a||(a={}),a[v]=C[v])}else a||(m||(m=[]),m.push(B,a)),a=C;else B==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,S=S?S.__html:void 0,C!=null&&S!==C&&(m=m||[]).push(B,C)):B==="children"?typeof C!="string"&&typeof C!="number"||(m=m||[]).push(B,""+C):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(o.hasOwnProperty(B)?(C!=null&&B==="onScroll"&&He("scroll",n),m||S===C||(m=[])):(m=m||[]).push(B,C))}a&&(m=m||[]).push("style",a);var B=m;(i.updateQueue=B)&&(i.flags|=4)}},km=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ta(n,i){if(!Ye)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Mt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function J0(n,i,a){var c=i.pendingProps;switch(oh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(i),null;case 1:return Yt(i.type)&&zl(),Mt(i),null;case 3:return c=i.stateNode,to(),Ke(Qt),Ke(Lt),vh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Kl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Dn!==null&&(Qh(Dn),Dn=null))),Uh(n,i),Mt(i),null;case 5:yh(i);var d=Qi(ya.current);if(a=i.type,n!==null&&i.stateNode!=null)Rm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Mt(i),null}if(n=Qi(Yn.current),Kl(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Qn]=i,c[da]=m,n=(i.mode&1)!==0,a){case"dialog":He("cancel",c),He("close",c);break;case"iframe":case"object":case"embed":He("load",c);break;case"video":case"audio":for(d=0;d<ua.length;d++)He(ua[d],c);break;case"source":He("error",c);break;case"img":case"image":case"link":He("error",c),He("load",c);break;case"details":He("toggle",c);break;case"input":gs(c,m),He("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},He("invalid",c);break;case"textarea":_s(c,m),He("invalid",c)}zo(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var S=m[v];v==="children"?typeof S=="string"?c.textContent!==S&&(m.suppressHydrationWarning!==!0&&Fl(c.textContent,S,n),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(m.suppressHydrationWarning!==!0&&Fl(c.textContent,S,n),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&He("scroll",c)}switch(a){case"input":ur(c),hl(c,m,!0);break;case"textarea":ur(c),Mo(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=jl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=dt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Qn]=i,n[da]=c,Am(n,i,!1,!1),i.stateNode=n;e:{switch(v=$o(a,c),a){case"dialog":He("cancel",n),He("close",n),d=c;break;case"iframe":case"object":case"embed":He("load",n),d=c;break;case"video":case"audio":for(d=0;d<ua.length;d++)He(ua[d],n);d=c;break;case"source":He("error",n),d=c;break;case"img":case"image":case"link":He("error",n),He("load",n),d=c;break;case"details":He("toggle",n),d=c;break;case"input":gs(n,c),d=Ci(n,c),He("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=oe({},c,{value:void 0}),He("invalid",n);break;case"textarea":_s(n,c),d=bo(n,c),He("invalid",n);break;default:d=c}zo(a,d),S=d;for(m in S)if(S.hasOwnProperty(m)){var C=S[m];m==="style"?jo(n,C):m==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Uo(n,C)):m==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&jr(n,C):typeof C=="number"&&jr(n,""+C):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?C!=null&&m==="onScroll"&&He("scroll",n):C!=null&&Z(n,m,C,v))}switch(a){case"input":ur(n),hl(n,c,!1);break;case"textarea":ur(n),Mo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ue(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?hr(n,!!c.multiple,m,!1):c.defaultValue!=null&&hr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=jl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Mt(i),null;case 6:if(n&&i.stateNode!=null)km(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Qi(ya.current),Qi(Yn.current),Kl(i)){if(c=i.stateNode,a=i.memoizedProps,c[Qn]=i,(m=c.nodeValue!==a)&&(n=on,n!==null))switch(n.tag){case 3:Fl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Fl(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Qn]=i,i.stateNode=c}return Mt(i),null;case 13:if(Ke(Xe),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ye&&an!==null&&(i.mode&1)!==0&&(i.flags&128)===0)xp(),Xs(),i.flags|=98560,m=!1;else if(m=Kl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Qn]=i}else Xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Mt(i),m=!1}else Dn!==null&&(Qh(Dn),Dn=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Xe.current&1)!==0?gt===0&&(gt=3):Jh())),i.updateQueue!==null&&(i.flags|=4),Mt(i),null);case 4:return to(),Uh(n,i),n===null&&ca(i.stateNode.containerInfo),Mt(i),null;case 10:return dh(i.type._context),Mt(i),null;case 17:return Yt(i.type)&&zl(),Mt(i),null;case 19:if(Ke(Xe),m=i.memoizedState,m===null)return Mt(i),null;if(c=(i.flags&128)!==0,v=m.rendering,v===null)if(c)Ta(m,!1);else{if(gt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=Zl(n),v!==null){for(i.flags|=128,Ta(m,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,n=v.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qe(Xe,Xe.current&1|2),i.child}n=n.sibling}m.tail!==null&&We()>so&&(i.flags|=128,c=!0,Ta(m,!1),i.lanes=4194304)}else{if(!c)if(n=Zl(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ta(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!Ye)return Mt(i),null}else 2*We()-m.renderingStartTime>so&&a!==1073741824&&(i.flags|=128,c=!0,Ta(m,!1),i.lanes=4194304);m.isBackwards?(v.sibling=i.child,i.child=v):(a=m.last,a!==null?a.sibling=v:i.child=v,m.last=v)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=We(),i.sibling=null,a=Xe.current,qe(Xe,c?a&1|2:a&1),i):(Mt(i),null);case 22:case 23:return Xh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ln&1073741824)!==0&&(Mt(i),i.subtreeFlags&6&&(i.flags|=8192)):Mt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Z0(n,i){switch(oh(i),i.tag){case 1:return Yt(i.type)&&zl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return to(),Ke(Qt),Ke(Lt),vh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return yh(i),null;case 13:if(Ke(Xe),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Xs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ke(Xe),null;case 4:return to(),null;case 10:return dh(i.type._context),null;case 22:case 23:return Xh(),null;case 24:return null;default:return null}}var lu=!1,Ut=!1,ew=typeof WeakSet=="function"?WeakSet:Set,ae=null;function ro(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tt(n,i,c)}else a.current=null}function Fh(n,i,a){try{a()}catch(c){tt(n,i,c)}}var Cm=!1;function tw(n,i){if(Xc=Gr,n=op(),$c(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,S=-1,C=-1,B=0,Q=0,X=n,G=null;t:for(;;){for(var se;X!==a||d!==0&&X.nodeType!==3||(S=v+d),X!==m||c!==0&&X.nodeType!==3||(C=v+c),X.nodeType===3&&(v+=X.nodeValue.length),(se=X.firstChild)!==null;)G=X,X=se;for(;;){if(X===n)break t;if(G===a&&++B===d&&(S=v),G===m&&++Q===c&&(C=v),(se=X.nextSibling)!==null)break;X=G,G=X.parentNode}X=se}a=S===-1||C===-1?null:{start:S,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jc={focusedElem:n,selectionRange:a},Gr=!1,ae=i;ae!==null;)if(i=ae,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ae=n;else for(;ae!==null;){i=ae;try{var le=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var ce=le.memoizedProps,it=le.memoizedState,U=i.stateNode,N=U.getSnapshotBeforeUpdate(i.elementType===i.type?ce:On(i.type,ce),it);U.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var j=i.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){tt(i,i.return,J)}if(n=i.sibling,n!==null){n.return=i.return,ae=n;break}ae=i.return}return le=Cm,Cm=!1,le}function Ia(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Fh(i,a,m)}d=d.next}while(d!==c)}}function uu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function jh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Pm(n){var i=n.alternate;i!==null&&(n.alternate=null,Pm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Qn],delete i[da],delete i[nh],delete i[M0],delete i[U0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function xm(n){return n.tag===5||n.tag===3||n.tag===4}function Nm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||xm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Bh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=jl));else if(c!==4&&(n=n.child,n!==null))for(Bh(n,i,a),n=n.sibling;n!==null;)Bh(n,i,a),n=n.sibling}function zh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(zh(n,i,a),n=n.sibling;n!==null;)zh(n,i,a),n=n.sibling}var kt=null,Vn=!1;function ri(n,i,a){for(a=a.child;a!==null;)Dm(n,i,a),a=a.sibling}function Dm(n,i,a){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Mi,a)}catch{}switch(a.tag){case 5:Ut||ro(a,i);case 6:var c=kt,d=Vn;kt=null,ri(n,i,a),kt=c,Vn=d,kt!==null&&(Vn?(n=kt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):kt.removeChild(a.stateNode));break;case 18:kt!==null&&(Vn?(n=kt,a=a.stateNode,n.nodeType===8?th(n.parentNode,a):n.nodeType===1&&th(n,a),Pn(n)):th(kt,a.stateNode));break;case 4:c=kt,d=Vn,kt=a.stateNode.containerInfo,Vn=!0,ri(n,i,a),kt=c,Vn=d;break;case 0:case 11:case 14:case 15:if(!Ut&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&((m&2)!==0||(m&4)!==0)&&Fh(a,i,v),d=d.next}while(d!==c)}ri(n,i,a);break;case 1:if(!Ut&&(ro(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){tt(a,i,S)}ri(n,i,a);break;case 21:ri(n,i,a);break;case 22:a.mode&1?(Ut=(c=Ut)||a.memoizedState!==null,ri(n,i,a),Ut=c):ri(n,i,a);break;default:ri(n,i,a)}}function Om(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new ew),i.forEach(function(c){var d=cw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Ln(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,v=i,S=v;e:for(;S!==null;){switch(S.tag){case 5:kt=S.stateNode,Vn=!1;break e;case 3:kt=S.stateNode.containerInfo,Vn=!0;break e;case 4:kt=S.stateNode.containerInfo,Vn=!0;break e}S=S.return}if(kt===null)throw Error(t(160));Dm(m,v,d),kt=null,Vn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(B){tt(d,i,B)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Vm(i,n),i=i.sibling}function Vm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ln(i,n),Jn(n),c&4){try{Ia(3,n,n.return),uu(3,n)}catch(ce){tt(n,n.return,ce)}try{Ia(5,n,n.return)}catch(ce){tt(n,n.return,ce)}}break;case 1:Ln(i,n),Jn(n),c&512&&a!==null&&ro(a,a.return);break;case 5:if(Ln(i,n),Jn(n),c&512&&a!==null&&ro(a,a.return),n.flags&32){var d=n.stateNode;try{jr(d,"")}catch(ce){tt(n,n.return,ce)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,v=a!==null?a.memoizedProps:m,S=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{S==="input"&&m.type==="radio"&&m.name!=null&&Vo(d,m),$o(S,v);var B=$o(S,m);for(v=0;v<C.length;v+=2){var Q=C[v],X=C[v+1];Q==="style"?jo(d,X):Q==="dangerouslySetInnerHTML"?Uo(d,X):Q==="children"?jr(d,X):Z(d,Q,X,B)}switch(S){case"input":Lo(d,m);break;case"textarea":vs(d,m);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var se=m.value;se!=null?hr(d,!!m.multiple,se,!1):G!==!!m.multiple&&(m.defaultValue!=null?hr(d,!!m.multiple,m.defaultValue,!0):hr(d,!!m.multiple,m.multiple?[]:"",!1))}d[da]=m}catch(ce){tt(n,n.return,ce)}}break;case 6:if(Ln(i,n),Jn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(ce){tt(n,n.return,ce)}}break;case 3:if(Ln(i,n),Jn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Pn(i.containerInfo)}catch(ce){tt(n,n.return,ce)}break;case 4:Ln(i,n),Jn(n);break;case 13:Ln(i,n),Jn(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(qh=We())),c&4&&Om(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(Ut=(B=Ut)||Q,Ln(i,n),Ut=B):Ln(i,n),Jn(n),c&8192){if(B=n.memoizedState!==null,(n.stateNode.isHidden=B)&&!Q&&(n.mode&1)!==0)for(ae=n,Q=n.child;Q!==null;){for(X=ae=Q;ae!==null;){switch(G=ae,se=G.child,G.tag){case 0:case 11:case 14:case 15:Ia(4,G,G.return);break;case 1:ro(G,G.return);var le=G.stateNode;if(typeof le.componentWillUnmount=="function"){c=G,a=G.return;try{i=c,le.props=i.memoizedProps,le.state=i.memoizedState,le.componentWillUnmount()}catch(ce){tt(c,a,ce)}}break;case 5:ro(G,G.return);break;case 22:if(G.memoizedState!==null){Mm(X);continue}}se!==null?(se.return=G,ae=se):Mm(X)}Q=Q.sibling}e:for(Q=null,X=n;;){if(X.tag===5){if(Q===null){Q=X;try{d=X.stateNode,B?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(S=X.stateNode,C=X.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null,S.style.display=Fo("display",v))}catch(ce){tt(n,n.return,ce)}}}else if(X.tag===6){if(Q===null)try{X.stateNode.nodeValue=B?"":X.memoizedProps}catch(ce){tt(n,n.return,ce)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===n)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===n)break e;for(;X.sibling===null;){if(X.return===null||X.return===n)break e;Q===X&&(Q=null),X=X.return}Q===X&&(Q=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Ln(i,n),Jn(n),c&4&&Om(n);break;case 21:break;default:Ln(i,n),Jn(n)}}function Jn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(xm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(jr(d,""),c.flags&=-33);var m=Nm(n);zh(n,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,S=Nm(n);Bh(n,S,v);break;default:throw Error(t(161))}}catch(C){tt(n,n.return,C)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function nw(n,i,a){ae=n,Lm(n)}function Lm(n,i,a){for(var c=(n.mode&1)!==0;ae!==null;){var d=ae,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||lu;if(!v){var S=d.alternate,C=S!==null&&S.memoizedState!==null||Ut;S=lu;var B=Ut;if(lu=v,(Ut=C)&&!B)for(ae=d;ae!==null;)v=ae,C=v.child,v.tag===22&&v.memoizedState!==null?Um(d):C!==null?(C.return=v,ae=C):Um(d);for(;m!==null;)ae=m,Lm(m),m=m.sibling;ae=d,lu=S,Ut=B}bm(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,ae=m):bm(n)}}function bm(n){for(;ae!==null;){var i=ae;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Ut||uu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Ut)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:On(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Mp(i,m,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Mp(i,v,a)}break;case 5:var S=i.stateNode;if(a===null&&i.flags&4){a=S;var C=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var B=i.alternate;if(B!==null){var Q=B.memoizedState;if(Q!==null){var X=Q.dehydrated;X!==null&&Pn(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ut||i.flags&512&&jh(i)}catch(G){tt(i,i.return,G)}}if(i===n){ae=null;break}if(a=i.sibling,a!==null){a.return=i.return,ae=a;break}ae=i.return}}function Mm(n){for(;ae!==null;){var i=ae;if(i===n){ae=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ae=a;break}ae=i.return}}function Um(n){for(;ae!==null;){var i=ae;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{uu(4,i)}catch(C){tt(i,a,C)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(C){tt(i,d,C)}}var m=i.return;try{jh(i)}catch(C){tt(i,m,C)}break;case 5:var v=i.return;try{jh(i)}catch(C){tt(i,v,C)}}}catch(C){tt(i,i.return,C)}if(i===n){ae=null;break}var S=i.sibling;if(S!==null){S.return=i.return,ae=S;break}ae=i.return}}var rw=Math.ceil,cu=ee.ReactCurrentDispatcher,$h=ee.ReactCurrentOwner,vn=ee.ReactCurrentBatchConfig,Ve=0,Tt=null,lt=null,Ct=0,ln=0,io=Jr(0),gt=0,Sa=null,Xi=0,hu=0,Wh=0,Aa=null,Jt=null,qh=0,so=1/0,Rr=null,du=!1,Hh=null,ii=null,fu=!1,si=null,pu=0,Ra=0,Kh=null,mu=-1,gu=0;function Ht(){return(Ve&6)!==0?We():mu!==-1?mu:mu=We()}function oi(n){return(n.mode&1)===0?1:(Ve&2)!==0&&Ct!==0?Ct&-Ct:j0.transition!==null?(gu===0&&(gu=Fi()),gu):(n=Pe,n!==0||(n=window.event,n=n===void 0?16:ea(n.type)),n)}function bn(n,i,a,c){if(50<Ra)throw Ra=0,Kh=null,Error(t(185));Wr(n,a,c),((Ve&2)===0||n!==Tt)&&(n===Tt&&((Ve&2)===0&&(hu|=a),gt===4&&ai(n,Ct)),Zt(n,c),a===1&&Ve===0&&(i.mode&1)===0&&(so=We()+500,Wl&&ei()))}function Zt(n,i){var a=n.callbackNode;pr(n,i);var c=Ui(n,n===Tt?Ct:0);if(c===0)a!==null&&Qo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Qo(a),i===1)n.tag===0?F0(jm.bind(null,n)):Ap(jm.bind(null,n)),L0(function(){(Ve&6)===0&&ei()}),a=null;else{switch(Hr(c)){case 1:a=bi;break;case 4:a=Br;break;case 16:a=dn;break;case 536870912:a=gl;break;default:a=dn}a=Gm(a,Fm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Fm(n,i){if(mu=-1,gu=0,(Ve&6)!==0)throw Error(t(327));var a=n.callbackNode;if(oo()&&n.callbackNode!==a)return null;var c=Ui(n,n===Tt?Ct:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=yu(n,c);else{i=c;var d=Ve;Ve|=2;var m=zm();(Tt!==n||Ct!==i)&&(Rr=null,so=We()+500,Zi(n,i));do try{ow();break}catch(S){Bm(n,S)}while(!0);hh(),cu.current=m,Ve=d,lt!==null?i=0:(Tt=null,Ct=0,i=gt)}if(i!==0){if(i===2&&(d=nn(n),d!==0&&(c=d,i=Gh(n,d))),i===1)throw a=Sa,Zi(n,0),ai(n,c),Zt(n,We()),a;if(i===6)ai(n,c);else{if(d=n.current.alternate,(c&30)===0&&!iw(d)&&(i=yu(n,c),i===2&&(m=nn(n),m!==0&&(c=m,i=Gh(n,m))),i===1))throw a=Sa,Zi(n,0),ai(n,c),Zt(n,We()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:es(n,Jt,Rr);break;case 3:if(ai(n,c),(c&130023424)===c&&(i=qh+500-We(),10<i)){if(Ui(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ht(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=eh(es.bind(null,n,Jt,Rr),i);break}es(n,Jt,Rr);break;case 4:if(ai(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-$t(c);m=1<<v,v=i[v],v>d&&(d=v),c&=~m}if(c=d,c=We()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*rw(c/1960))-c,10<c){n.timeoutHandle=eh(es.bind(null,n,Jt,Rr),c);break}es(n,Jt,Rr);break;case 5:es(n,Jt,Rr);break;default:throw Error(t(329))}}}return Zt(n,We()),n.callbackNode===a?Fm.bind(null,n):null}function Gh(n,i){var a=Aa;return n.current.memoizedState.isDehydrated&&(Zi(n,i).flags|=256),n=yu(n,i),n!==2&&(i=Jt,Jt=a,i!==null&&Qh(i)),n}function Qh(n){Jt===null?Jt=n:Jt.push.apply(Jt,n)}function iw(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!Nn(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ai(n,i){for(i&=~Wh,i&=~hu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-$t(i),c=1<<a;n[a]=-1,i&=~c}}function jm(n){if((Ve&6)!==0)throw Error(t(327));oo();var i=Ui(n,0);if((i&1)===0)return Zt(n,We()),null;var a=yu(n,i);if(n.tag!==0&&a===2){var c=nn(n);c!==0&&(i=c,a=Gh(n,c))}if(a===1)throw a=Sa,Zi(n,0),ai(n,i),Zt(n,We()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,es(n,Jt,Rr),Zt(n,We()),null}function Yh(n,i){var a=Ve;Ve|=1;try{return n(i)}finally{Ve=a,Ve===0&&(so=We()+500,Wl&&ei())}}function Ji(n){si!==null&&si.tag===0&&(Ve&6)===0&&oo();var i=Ve;Ve|=1;var a=vn.transition,c=Pe;try{if(vn.transition=null,Pe=1,n)return n()}finally{Pe=c,vn.transition=a,Ve=i,(Ve&6)===0&&ei()}}function Xh(){ln=io.current,Ke(io)}function Zi(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,V0(a)),lt!==null)for(a=lt.return;a!==null;){var c=a;switch(oh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&zl();break;case 3:to(),Ke(Qt),Ke(Lt),vh();break;case 5:yh(c);break;case 4:to();break;case 13:Ke(Xe);break;case 19:Ke(Xe);break;case 10:dh(c.type._context);break;case 22:case 23:Xh()}a=a.return}if(Tt=n,lt=n=li(n.current,null),Ct=ln=i,gt=0,Sa=null,Wh=hu=Xi=0,Jt=Aa=null,Gi!==null){for(i=0;i<Gi.length;i++)if(a=Gi[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}Gi=null}return n}function Bm(n,i){do{var a=lt;try{if(hh(),eu.current=iu,tu){for(var c=Je.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}tu=!1}if(Yi=0,Et=mt=Je=null,_a=!1,va=0,$h.current=null,a===null||a.return===null){gt=1,Sa=i,lt=null;break}e:{var m=n,v=a.return,S=a,C=i;if(i=Ct,S.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var B=C,Q=S,X=Q.tag;if((Q.mode&1)===0&&(X===0||X===11||X===15)){var G=Q.alternate;G?(Q.updateQueue=G.updateQueue,Q.memoizedState=G.memoizedState,Q.lanes=G.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var se=dm(v);if(se!==null){se.flags&=-257,fm(se,v,S,m,i),se.mode&1&&hm(m,B,i),i=se,C=B;var le=i.updateQueue;if(le===null){var ce=new Set;ce.add(C),i.updateQueue=ce}else le.add(C);break e}else{if((i&1)===0){hm(m,B,i),Jh();break e}C=Error(t(426))}}else if(Ye&&S.mode&1){var it=dm(v);if(it!==null){(it.flags&65536)===0&&(it.flags|=256),fm(it,v,S,m,i),uh(no(C,S));break e}}m=C=no(C,S),gt!==4&&(gt=2),Aa===null?Aa=[m]:Aa.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var U=um(m,C,i);bp(m,U);break e;case 1:S=C;var N=m.type,j=m.stateNode;if((m.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(ii===null||!ii.has(j)))){m.flags|=65536,i&=-i,m.lanes|=i;var J=cm(m,S,i);bp(m,J);break e}}m=m.return}while(m!==null)}Wm(a)}catch(de){i=de,lt===a&&a!==null&&(lt=a=a.return);continue}break}while(!0)}function zm(){var n=cu.current;return cu.current=iu,n===null?iu:n}function Jh(){(gt===0||gt===3||gt===2)&&(gt=4),Tt===null||(Xi&268435455)===0&&(hu&268435455)===0||ai(Tt,Ct)}function yu(n,i){var a=Ve;Ve|=2;var c=zm();(Tt!==n||Ct!==i)&&(Rr=null,Zi(n,i));do try{sw();break}catch(d){Bm(n,d)}while(!0);if(hh(),Ve=a,cu.current=c,lt!==null)throw Error(t(261));return Tt=null,Ct=0,gt}function sw(){for(;lt!==null;)$m(lt)}function ow(){for(;lt!==null&&!pl();)$m(lt)}function $m(n){var i=Km(n.alternate,n,ln);n.memoizedProps=n.pendingProps,i===null?Wm(n):lt=i,$h.current=null}function Wm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=J0(a,i,ln),a!==null){lt=a;return}}else{if(a=Z0(a,i),a!==null){a.flags&=32767,lt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gt=6,lt=null;return}}if(i=i.sibling,i!==null){lt=i;return}lt=i=n}while(i!==null);gt===0&&(gt=5)}function es(n,i,a){var c=Pe,d=vn.transition;try{vn.transition=null,Pe=1,aw(n,i,a,c)}finally{vn.transition=d,Pe=c}return null}function aw(n,i,a,c){do oo();while(si!==null);if((Ve&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(ze(n,m),n===Tt&&(lt=Tt=null,Ct=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||fu||(fu=!0,Gm(dn,function(){return oo(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=vn.transition,vn.transition=null;var v=Pe;Pe=1;var S=Ve;Ve|=4,$h.current=null,tw(n,a),Vm(a,n),k0(Jc),Gr=!!Xc,Jc=Xc=null,n.current=a,nw(a),Lc(),Ve=S,Pe=v,vn.transition=m}else n.current=a;if(fu&&(fu=!1,si=n,pu=d),m=n.pendingLanes,m===0&&(ii=null),yl(a.stateNode),Zt(n,We()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(du)throw du=!1,n=Hh,Hh=null,n;return(pu&1)!==0&&n.tag!==0&&oo(),m=n.pendingLanes,(m&1)!==0?n===Kh?Ra++:(Ra=0,Kh=n):Ra=0,ei(),null}function oo(){if(si!==null){var n=Hr(pu),i=vn.transition,a=Pe;try{if(vn.transition=null,Pe=16>n?16:n,si===null)var c=!1;else{if(n=si,si=null,pu=0,(Ve&6)!==0)throw Error(t(331));var d=Ve;for(Ve|=4,ae=n.current;ae!==null;){var m=ae,v=m.child;if((ae.flags&16)!==0){var S=m.deletions;if(S!==null){for(var C=0;C<S.length;C++){var B=S[C];for(ae=B;ae!==null;){var Q=ae;switch(Q.tag){case 0:case 11:case 15:Ia(8,Q,m)}var X=Q.child;if(X!==null)X.return=Q,ae=X;else for(;ae!==null;){Q=ae;var G=Q.sibling,se=Q.return;if(Pm(Q),Q===B){ae=null;break}if(G!==null){G.return=se,ae=G;break}ae=se}}}var le=m.alternate;if(le!==null){var ce=le.child;if(ce!==null){le.child=null;do{var it=ce.sibling;ce.sibling=null,ce=it}while(ce!==null)}}ae=m}}if((m.subtreeFlags&2064)!==0&&v!==null)v.return=m,ae=v;else e:for(;ae!==null;){if(m=ae,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ia(9,m,m.return)}var U=m.sibling;if(U!==null){U.return=m.return,ae=U;break e}ae=m.return}}var N=n.current;for(ae=N;ae!==null;){v=ae;var j=v.child;if((v.subtreeFlags&2064)!==0&&j!==null)j.return=v,ae=j;else e:for(v=N;ae!==null;){if(S=ae,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:uu(9,S)}}catch(de){tt(S,S.return,de)}if(S===v){ae=null;break e}var J=S.sibling;if(J!==null){J.return=S.return,ae=J;break e}ae=S.return}}if(Ve=d,ei(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Mi,n)}catch{}c=!0}return c}finally{Pe=a,vn.transition=i}}return!1}function qm(n,i,a){i=no(a,i),i=um(n,i,1),n=ni(n,i,1),i=Ht(),n!==null&&(Wr(n,1,i),Zt(n,i))}function tt(n,i,a){if(n.tag===3)qm(n,n,a);else for(;i!==null;){if(i.tag===3){qm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ii===null||!ii.has(c))){n=no(a,n),n=cm(i,n,1),i=ni(i,n,1),n=Ht(),i!==null&&(Wr(i,1,n),Zt(i,n));break}}i=i.return}}function lw(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Ht(),n.pingedLanes|=n.suspendedLanes&a,Tt===n&&(Ct&a)===a&&(gt===4||gt===3&&(Ct&130023424)===Ct&&500>We()-qh?Zi(n,0):Wh|=a),Zt(n,i)}function Hm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ps,Ps<<=1,(Ps&130023424)===0&&(Ps=4194304)));var a=Ht();n=Ir(n,i),n!==null&&(Wr(n,i,a),Zt(n,a))}function uw(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Hm(n,a)}function cw(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Hm(n,a)}var Km;Km=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Qt.current)Xt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Xt=!1,X0(n,i,a);Xt=(n.flags&131072)!==0}else Xt=!1,Ye&&(i.flags&1048576)!==0&&Rp(i,Hl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;au(n,i),n=i.pendingProps;var d=Gs(i,Lt.current);eo(i,a),d=Th(null,i,c,n,d,a);var m=Ih();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Yt(c)?(m=!0,$l(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,mh(i),d.updater=su,i.stateNode=d,d._reactInternals=i,Ph(i,c,n,a),i=Oh(null,i,c,!0,m,a)):(i.tag=0,Ye&&m&&sh(i),qt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(au(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=dw(c),n=On(c,n),d){case 0:i=Dh(null,i,c,n,a);break e;case 1:i=vm(null,i,c,n,a);break e;case 11:i=pm(null,i,c,n,a);break e;case 14:i=mm(null,i,c,On(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),Dh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),vm(n,i,c,d,a);case 3:e:{if(wm(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,Lp(n,i),Jl(i,c,null,a);var v=i.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=no(Error(t(423)),i),i=Em(n,i,c,a,d);break e}else if(c!==d){d=no(Error(t(424)),i),i=Em(n,i,c,a,d);break e}else for(an=Xr(i.stateNode.containerInfo.firstChild),on=i,Ye=!0,Dn=null,a=Op(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Xs(),c===d){i=Ar(n,i,a);break e}qt(n,i,c,a)}i=i.child}return i;case 5:return Up(i),n===null&&lh(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,v=d.children,Zc(c,d)?v=null:m!==null&&Zc(c,m)&&(i.flags|=32),_m(n,i),qt(n,i,v,a),i.child;case 6:return n===null&&lh(i),null;case 13:return Tm(n,i,a);case 4:return gh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Js(i,null,c,a):qt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),pm(n,i,c,d,a);case 7:return qt(n,i,i.pendingProps,a),i.child;case 8:return qt(n,i,i.pendingProps.children,a),i.child;case 12:return qt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,v=d.value,qe(Ql,c._currentValue),c._currentValue=v,m!==null)if(Nn(m.value,v)){if(m.children===d.children&&!Qt.current){i=Ar(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var S=m.dependencies;if(S!==null){v=m.child;for(var C=S.firstContext;C!==null;){if(C.context===c){if(m.tag===1){C=Sr(-1,a&-a),C.tag=2;var B=m.updateQueue;if(B!==null){B=B.shared;var Q=B.pending;Q===null?C.next=C:(C.next=Q.next,Q.next=C),B.pending=C}}m.lanes|=a,C=m.alternate,C!==null&&(C.lanes|=a),fh(m.return,a,i),S.lanes|=a;break}C=C.next}}else if(m.tag===10)v=m.type===i.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),fh(v,a,i),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===i){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}qt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,eo(i,a),d=yn(d),c=c(d),i.flags|=1,qt(n,i,c,a),i.child;case 14:return c=i.type,d=On(c,i.pendingProps),d=On(c.type,d),mm(n,i,c,d,a);case 15:return gm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),au(n,i),i.tag=1,Yt(c)?(n=!0,$l(i)):n=!1,eo(i,a),am(i,c,d),Ph(i,c,d,a),Oh(null,i,c,!0,n,a);case 19:return Sm(n,i,a);case 22:return ym(n,i,a)}throw Error(t(156,i.tag))};function Gm(n,i){return ks(n,i)}function hw(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(n,i,a,c){return new hw(n,i,a,c)}function Zh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function dw(n){if(typeof n=="function")return Zh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===b)return 11;if(n===Ot)return 14}return 2}function li(n,i){var a=n.alternate;return a===null?(a=wn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function _u(n,i,a,c,d,m){var v=2;if(c=n,typeof n=="function")Zh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case x:return ts(a.children,d,m,i);case I:v=8,d|=8;break;case R:return n=wn(12,a,i,d|2),n.elementType=R,n.lanes=m,n;case A:return n=wn(13,a,i,d),n.elementType=A,n.lanes=m,n;case nt:return n=wn(19,a,i,d),n.elementType=nt,n.lanes=m,n;case Be:return vu(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:v=10;break e;case D:v=9;break e;case b:v=11;break e;case Ot:v=14;break e;case Vt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=wn(v,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function ts(n,i,a,c){return n=wn(7,n,c,i),n.lanes=a,n}function vu(n,i,a,c){return n=wn(22,n,c,i),n.elementType=Be,n.lanes=a,n.stateNode={isHidden:!1},n}function ed(n,i,a){return n=wn(6,n,null,i),n.lanes=a,n}function td(n,i,a){return i=wn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function fw(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$r(0),this.expirationTimes=$r(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$r(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function nd(n,i,a,c,d,m,v,S,C){return n=new fw(n,i,a,S,C),i===1?(i=1,m===!0&&(i|=8)):i=0,m=wn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},mh(m),n}function pw(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ee,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Qm(n){if(!n)return Zr;n=n._reactInternals;e:{if(Sn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Yt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Yt(a))return Ip(n,a,i)}return i}function Ym(n,i,a,c,d,m,v,S,C){return n=nd(a,c,!0,n,d,m,v,S,C),n.context=Qm(null),a=n.current,c=Ht(),d=oi(a),m=Sr(c,d),m.callback=i??null,ni(a,m,d),n.current.lanes=d,Wr(n,d,c),Zt(n,c),n}function wu(n,i,a,c){var d=i.current,m=Ht(),v=oi(d);return a=Qm(a),i.context===null?i.context=a:i.pendingContext=a,i=Sr(m,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ni(d,i,v),n!==null&&(bn(n,d,v,m),Xl(n,d,v)),v}function Eu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Xm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function rd(n,i){Xm(n,i),(n=n.alternate)&&Xm(n,i)}function mw(){return null}var Jm=typeof reportError=="function"?reportError:function(n){console.error(n)};function id(n){this._internalRoot=n}Tu.prototype.render=id.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));wu(n,i,null,null)},Tu.prototype.unmount=id.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Ji(function(){wu(null,n,null,null)}),i[vr]=null}};function Tu(n){this._internalRoot=n}Tu.prototype.unstable_scheduleHydration=function(n){if(n){var i=Tl();n={blockedOn:null,target:n,priority:i};for(var a=0;a<qn.length&&i!==0&&i<qn[a].priority;a++);qn.splice(a,0,n),a===0&&Al(n)}};function sd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Iu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Zm(){}function gw(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var B=Eu(v);m.call(B)}}var v=Ym(i,c,n,0,null,!1,!1,"",Zm);return n._reactRootContainer=v,n[vr]=v.current,ca(n.nodeType===8?n.parentNode:n),Ji(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var B=Eu(C);S.call(B)}}var C=nd(n,0,!1,null,null,!1,!1,"",Zm);return n._reactRootContainer=C,n[vr]=C.current,ca(n.nodeType===8?n.parentNode:n),Ji(function(){wu(i,C,a,c)}),C}function Su(n,i,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var S=d;d=function(){var C=Eu(v);S.call(C)}}wu(i,v,n,d)}else v=gw(a,i,n,d,c);return Eu(v)}wl=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=zr(i.pendingLanes);a!==0&&(qr(i,a|1),Zt(i,We()),(Ve&6)===0&&(so=We()+500,ei()))}break;case 13:Ji(function(){var c=Ir(n,1);if(c!==null){var d=Ht();bn(c,n,1,d)}}),rd(n,1)}},xs=function(n){if(n.tag===13){var i=Ir(n,134217728);if(i!==null){var a=Ht();bn(i,n,134217728,a)}rd(n,134217728)}},El=function(n){if(n.tag===13){var i=oi(n),a=Ir(n,i);if(a!==null){var c=Ht();bn(a,n,i,c)}rd(n,i)}},Tl=function(){return Pe},Il=function(n,i){var a=Pe;try{return Pe=n,i()}finally{Pe=a}},Es=function(n,i,a){switch(i){case"input":if(Lo(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Bl(c);if(!d)throw Error(t(90));ms(c),Lo(c,d)}}}break;case"textarea":vs(n,a);break;case"select":i=a.value,i!=null&&hr(n,!!a.multiple,i,!1)}},Di=Yh,qo=Ji;var yw={usingClientEntryPoint:!1,Events:[fa,Hs,Bl,$n,Wo,Yh]},ka={findFiberByHostInstance:Wi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_w={bundleType:ka.bundleType,version:ka.version,rendererPackageName:ka.rendererPackageName,rendererConfig:ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Go(n),n===null?null:n.stateNode},findFiberByHostInstance:ka.findFiberByHostInstance||mw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Au.isDisabled&&Au.supportsFiber)try{Mi=Au.inject(_w),tn=Au}catch{}}return en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yw,en.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sd(i))throw Error(t(200));return pw(n,i,null,a)},en.createRoot=function(n,i){if(!sd(n))throw Error(t(299));var a=!1,c="",d=Jm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=nd(n,1,!1,null,null,a,!1,c,d),n[vr]=i.current,ca(n.nodeType===8?n.parentNode:n),new id(i)},en.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Go(i),n=n===null?null:n.stateNode,n},en.flushSync=function(n){return Ji(n)},en.hydrate=function(n,i,a){if(!Iu(i))throw Error(t(200));return Su(null,n,i,!0,a)},en.hydrateRoot=function(n,i,a){if(!sd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=Jm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=Ym(i,null,n,1,a??null,d,!1,m,v),n[vr]=i.current,ca(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Tu(i)},en.render=function(n,i,a){if(!Iu(i))throw Error(t(200));return Su(null,n,i,!1,a)},en.unmountComponentAtNode=function(n){if(!Iu(n))throw Error(t(40));return n._reactRootContainer?(Ji(function(){Su(null,null,n,!1,function(){n._reactRootContainer=null,n[vr]=null})}),!0):!1},en.unstable_batchedUpdates=Yh,en.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Iu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Su(n,i,a,!1,c)},en.version="18.3.1-next-f1338f8080-20240426",en}var ag;function jy(){if(ag)return ld.exports;ag=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ld.exports=Pw(),ld.exports}var lg;function xw(){if(lg)return Ru;lg=1;var r=jy();return Ru.createRoot=r.createRoot,Ru.hydrateRoot=r.hydrateRoot,Ru}var Nw=xw();jy();/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ja(){return ja=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)({}).hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},ja.apply(null,arguments)}var mi;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(mi||(mi={}));const ug="popstate";function Dw(r){r===void 0&&(r={});function e(s,o){let{pathname:l,search:h,hash:f}=s.location;return Sd("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:$u(o)}return Vw(e,t,null,r)}function Ze(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Jd(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ow(){return Math.random().toString(36).substr(2,8)}function cg(r,e){return{usr:r.state,key:r.key,idx:e}}function Sd(r,e,t,s){return t===void 0&&(t=null),ja({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?Ro(e):e,{state:t,key:e&&e.key||s||Ow()})}function $u(r){let{pathname:e="/",search:t="",hash:s=""}=r;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function Ro(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substr(t),r=r.substr(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substr(s),r=r.substr(0,s)),r&&(e.pathname=r)}return e}function Vw(r,e,t,s){s===void 0&&(s={});let{window:o=document.defaultView,v5Compat:l=!1}=s,h=o.history,f=mi.Pop,g=null,_=w();_==null&&(_=0,h.replaceState(ja({},h.state,{idx:_}),""));function w(){return(h.state||{idx:null}).idx}function T(){f=mi.Pop;let V=w(),ie=V==null?null:V-_;_=V,g&&g({action:f,location:W.location,delta:ie})}function k(V,ie){f=mi.Push;let ne=Sd(W.location,V,ie);_=w()+1;let Z=cg(ne,_),ee=W.createHref(ne);try{h.pushState(Z,"",ee)}catch(we){if(we instanceof DOMException&&we.name==="DataCloneError")throw we;o.location.assign(ee)}l&&g&&g({action:f,location:W.location,delta:1})}function F(V,ie){f=mi.Replace;let ne=Sd(W.location,V,ie);_=w();let Z=cg(ne,_),ee=W.createHref(ne);h.replaceState(Z,"",ee),l&&g&&g({action:f,location:W.location,delta:0})}function z(V){let ie=o.location.origin!=="null"?o.location.origin:o.location.href,ne=typeof V=="string"?V:$u(V);return ne=ne.replace(/ $/,"%20"),Ze(ie,"No window.location.(origin|href) available to create URL for href: "+ne),new URL(ne,ie)}let W={get action(){return f},get location(){return r(o,h)},listen(V){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(ug,T),g=V,()=>{o.removeEventListener(ug,T),g=null}},createHref(V){return e(o,V)},createURL:z,encodeLocation(V){let ie=z(V);return{pathname:ie.pathname,search:ie.search,hash:ie.hash}},push:k,replace:F,go(V){return h.go(V)}};return W}var hg;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(hg||(hg={}));function Lw(r,e,t){return t===void 0&&(t="/"),bw(r,e,t)}function bw(r,e,t,s){let o=typeof e=="string"?Ro(e):e,l=go(o.pathname||"/",t);if(l==null)return null;let h=By(r);Mw(h);let f=null,g=Gw(l);for(let _=0;f==null&&_<h.length;++_)f=Hw(h[_],g);return f}function By(r,e,t,s){e===void 0&&(e=[]),t===void 0&&(t=[]),s===void 0&&(s="");let o=(l,h,f)=>{let g={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};g.relativePath.startsWith("/")&&(Ze(g.relativePath.startsWith(s),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(s.length));let _=_i([s,g.relativePath]),w=t.concat(g);l.children&&l.children.length>0&&(Ze(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+_+'".')),By(l.children,e,w,_)),!(l.path==null&&!l.index)&&e.push({path:_,score:Ww(_,l.index),routesMeta:w})};return r.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let g of zy(l.path))o(l,h,g)}),e}function zy(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let h=zy(s.join("/")),f=[];return f.push(...h.map(g=>g===""?l:[l,g].join("/"))),o&&f.push(...h),f.map(g=>r.startsWith("/")&&g===""?"/":g)}function Mw(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:qw(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const Uw=/^:[\w-]+$/,Fw=3,jw=2,Bw=1,zw=10,$w=-2,dg=r=>r==="*";function Ww(r,e){let t=r.split("/"),s=t.length;return t.some(dg)&&(s+=$w),e&&(s+=jw),t.filter(o=>!dg(o)).reduce((o,l)=>o+(Uw.test(l)?Fw:l===""?Bw:zw),s)}function qw(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function Hw(r,e,t){let{routesMeta:s}=r,o={},l="/",h=[];for(let f=0;f<s.length;++f){let g=s[f],_=f===s.length-1,w=l==="/"?e:e.slice(l.length)||"/",T=Ad({path:g.relativePath,caseSensitive:g.caseSensitive,end:_},w),k=g.route;if(!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:_i([l,T.pathname]),pathnameBase:Zw(_i([l,T.pathnameBase])),route:k}),T.pathnameBase!=="/"&&(l=_i([l,T.pathnameBase]))}return h}function Ad(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=Kw(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((_,w,T)=>{let{paramName:k,isOptional:F}=w;if(k==="*"){let W=f[T]||"";h=l.slice(0,l.length-W.length).replace(/(.)\/+$/,"$1")}const z=f[T];return F&&!z?_[k]=void 0:_[k]=(z||"").replace(/%2F/g,"/"),_},{}),pathname:l,pathnameBase:h,pattern:r}}function Kw(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Jd(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,g)=>(s.push({paramName:f,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function Gw(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Jd(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function go(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}const Qw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Yw=r=>Qw.test(r);function Xw(r,e){e===void 0&&(e="/");let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?Ro(r):r,l;if(t)if(Yw(t))l=t;else{if(t.includes("//")){let h=t;t=$y(t),Jd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(h+" -> "+t))}t.startsWith("/")?l=fg(t.substring(1),"/"):l=fg(t,e)}else l=e;return{pathname:l,search:eE(s),hash:tE(o)}}function fg(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function hd(r,e,t,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Jw(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Zd(r,e){let t=Jw(r);return e?t.map((s,o)=>o===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function ef(r,e,t,s){s===void 0&&(s=!1);let o;typeof r=="string"?o=Ro(r):(o=ja({},r),Ze(!o.pathname||!o.pathname.includes("?"),hd("?","pathname","search",o)),Ze(!o.pathname||!o.pathname.includes("#"),hd("#","pathname","hash",o)),Ze(!o.search||!o.search.includes("#"),hd("#","search","hash",o)));let l=r===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let T=e.length-1;if(!s&&h.startsWith("..")){let k=h.split("/");for(;k[0]==="..";)k.shift(),T-=1;o.pathname=k.join("/")}f=T>=0?e[T]:"/"}let g=Xw(o,f),_=h&&h!=="/"&&h.endsWith("/"),w=(l||h===".")&&t.endsWith("/");return!g.pathname.endsWith("/")&&(_||w)&&(g.pathname+="/"),g}const $y=r=>r.replace(/\/\/+/g,"/"),_i=r=>$y(r.join("/")),Zw=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),eE=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,tE=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function nE(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const Wy=["post","put","patch","delete"];new Set(Wy);const rE=["get",...Wy];new Set(rE);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ba(){return Ba=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)({}).hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},Ba.apply(null,arguments)}const cc=q.createContext(null),qy=q.createContext(null),br=q.createContext(null),hc=q.createContext(null),Mr=q.createContext({outlet:null,matches:[],isDataRoute:!1}),Hy=q.createContext(null);function iE(r,e){let{relative:t}=e===void 0?{}:e;ko()||Ze(!1);let{basename:s,navigator:o}=q.useContext(br),{hash:l,pathname:h,search:f}=dc(r,{relative:t}),g=h;return s!=="/"&&(g=h==="/"?s:_i([s,h])),o.createHref({pathname:g,search:f,hash:l})}function ko(){return q.useContext(hc)!=null}function or(){return ko()||Ze(!1),q.useContext(hc).location}function Ky(r){q.useContext(br).static||q.useLayoutEffect(r)}function Gy(){let{isDataRoute:r}=q.useContext(Mr);return r?vE():sE()}function sE(){ko()||Ze(!1);let r=q.useContext(cc),{basename:e,future:t,navigator:s}=q.useContext(br),{matches:o}=q.useContext(Mr),{pathname:l}=or(),h=JSON.stringify(Zd(o,t.v7_relativeSplatPath)),f=q.useRef(!1);return Ky(()=>{f.current=!0}),q.useCallback(function(_,w){if(w===void 0&&(w={}),!f.current)return;if(typeof _=="number"){s.go(_);return}let T=ef(_,JSON.parse(h),l,w.relative==="path");r==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:_i([e,T.pathname])),(w.replace?s.replace:s.push)(T,w.state,w)},[e,s,h,l,r])}const oE=q.createContext(null);function aE(r){let e=q.useContext(Mr).outlet;return e&&q.createElement(oE.Provider,{value:r},e)}function dc(r,e){let{relative:t}=e===void 0?{}:e,{future:s}=q.useContext(br),{matches:o}=q.useContext(Mr),{pathname:l}=or(),h=JSON.stringify(Zd(o,s.v7_relativeSplatPath));return q.useMemo(()=>ef(r,JSON.parse(h),l,t==="path"),[r,h,l,t])}function lE(r,e){return uE(r,e)}function uE(r,e,t,s){ko()||Ze(!1);let{navigator:o}=q.useContext(br),{matches:l}=q.useContext(Mr),h=l[l.length-1],f=h?h.params:{};h&&h.pathname;let g=h?h.pathnameBase:"/";h&&h.route;let _=or(),w;if(e){var T;let V=typeof e=="string"?Ro(e):e;g==="/"||(T=V.pathname)!=null&&T.startsWith(g)||Ze(!1),w=V}else w=_;let k=w.pathname||"/",F=k;if(g!=="/"){let V=g.replace(/^\//,"").split("/");F="/"+k.replace(/^\//,"").split("/").slice(V.length).join("/")}let z=Lw(r,{pathname:F}),W=pE(z&&z.map(V=>Object.assign({},V,{params:Object.assign({},f,V.params),pathname:_i([g,o.encodeLocation?o.encodeLocation(V.pathname).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?g:_i([g,o.encodeLocation?o.encodeLocation(V.pathnameBase).pathname:V.pathnameBase])})),l,t,s);return e&&W?q.createElement(hc.Provider,{value:{location:Ba({pathname:"/",search:"",hash:"",state:null,key:"default"},w),navigationType:mi.Pop}},W):W}function cE(){let r=_E(),e=nE(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},e),t?q.createElement("pre",{style:o},t):null,null)}const hE=q.createElement(cE,null);class dE extends q.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?q.createElement(Mr.Provider,{value:this.props.routeContext},q.createElement(Hy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fE(r){let{routeContext:e,match:t,children:s}=r,o=q.useContext(cc);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),q.createElement(Mr.Provider,{value:e},s)}function pE(r,e,t,s){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),s===void 0&&(s=null),r==null){var l;if(!t)return null;if(t.errors)r=t.matches;else if((l=s)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let h=r,f=(o=t)==null?void 0:o.errors;if(f!=null){let w=h.findIndex(T=>T.route.id&&(f==null?void 0:f[T.route.id])!==void 0);w>=0||Ze(!1),h=h.slice(0,Math.min(h.length,w+1))}let g=!1,_=-1;if(t&&s&&s.v7_partialHydration)for(let w=0;w<h.length;w++){let T=h[w];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(_=w),T.route.id){let{loaderData:k,errors:F}=t,z=T.route.loader&&k[T.route.id]===void 0&&(!F||F[T.route.id]===void 0);if(T.route.lazy||z){g=!0,_>=0?h=h.slice(0,_+1):h=[h[0]];break}}}return h.reduceRight((w,T,k)=>{let F,z=!1,W=null,V=null;t&&(F=f&&T.route.id?f[T.route.id]:void 0,W=T.route.errorElement||hE,g&&(_<0&&k===0?(wE("route-fallback"),z=!0,V=null):_===k&&(z=!0,V=T.route.hydrateFallbackElement||null)));let ie=e.concat(h.slice(0,k+1)),ne=()=>{let Z;return F?Z=W:z?Z=V:T.route.Component?Z=q.createElement(T.route.Component,null):T.route.element?Z=T.route.element:Z=w,q.createElement(fE,{match:T,routeContext:{outlet:w,matches:ie,isDataRoute:t!=null},children:Z})};return t&&(T.route.ErrorBoundary||T.route.errorElement||k===0)?q.createElement(dE,{location:t.location,revalidation:t.revalidation,component:W,error:F,children:ne(),routeContext:{outlet:null,matches:ie,isDataRoute:!0}}):ne()},null)}var Qy=(function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r})(Qy||{}),Yy=(function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r})(Yy||{});function mE(r){let e=q.useContext(cc);return e||Ze(!1),e}function gE(r){let e=q.useContext(qy);return e||Ze(!1),e}function yE(r){let e=q.useContext(Mr);return e||Ze(!1),e}function Xy(r){let e=yE(),t=e.matches[e.matches.length-1];return t.route.id||Ze(!1),t.route.id}function _E(){var r;let e=q.useContext(Hy),t=gE(),s=Xy();return e!==void 0?e:(r=t.errors)==null?void 0:r[s]}function vE(){let{router:r}=mE(Qy.UseNavigateStable),e=Xy(Yy.UseNavigateStable),t=q.useRef(!1);return Ky(()=>{t.current=!0}),q.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?r.navigate(o):r.navigate(o,Ba({fromRouteId:e},l)))},[r,e])}const pg={};function wE(r,e,t){pg[r]||(pg[r]=!0)}function EE(r,e){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function za(r){let{to:e,replace:t,state:s,relative:o}=r;ko()||Ze(!1);let{future:l,static:h}=q.useContext(br),{matches:f}=q.useContext(Mr),{pathname:g}=or(),_=Gy(),w=ef(e,Zd(f,l.v7_relativeSplatPath),g,o==="path"),T=JSON.stringify(w);return q.useEffect(()=>_(JSON.parse(T),{replace:t,state:s,relative:o}),[_,T,o,t,s]),null}function Jy(r){return aE(r.context)}function yt(r){Ze(!1)}function TE(r){let{basename:e="/",children:t=null,location:s,navigationType:o=mi.Pop,navigator:l,static:h=!1,future:f}=r;ko()&&Ze(!1);let g=e.replace(/^\/*/,"/"),_=q.useMemo(()=>({basename:g,navigator:l,static:h,future:Ba({v7_relativeSplatPath:!1},f)}),[g,f,l,h]);typeof s=="string"&&(s=Ro(s));let{pathname:w="/",search:T="",hash:k="",state:F=null,key:z="default"}=s,W=q.useMemo(()=>{let V=go(w,g);return V==null?null:{location:{pathname:V,search:T,hash:k,state:F,key:z},navigationType:o}},[g,w,T,k,F,z,o]);return W==null?null:q.createElement(br.Provider,{value:_},q.createElement(hc.Provider,{children:t,value:W}))}function IE(r){let{children:e,location:t}=r;return lE(Rd(e),t)}new Promise(()=>{});function Rd(r,e){e===void 0&&(e=[]);let t=[];return q.Children.forEach(r,(s,o)=>{if(!q.isValidElement(s))return;let l=[...e,o];if(s.type===q.Fragment){t.push.apply(t,Rd(s.props.children,l));return}s.type!==yt&&Ze(!1),!s.props.index||!s.props.children||Ze(!1);let h={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=Rd(s.props.children,l)),t.push(h)}),t}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wu(){return Wu=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)({}).hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},Wu.apply(null,arguments)}function Zy(r,e){if(r==null)return{};var t={};for(var s in r)if({}.hasOwnProperty.call(r,s)){if(e.indexOf(s)!==-1)continue;t[s]=r[s]}return t}function SE(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function AE(r,e){return r.button===0&&(!e||e==="_self")&&!SE(r)}const RE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],kE=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],CE="6";try{window.__reactRouterVersion=CE}catch{}const PE=q.createContext({isTransitioning:!1}),xE="startTransition",mg=Rw[xE];function NE(r){let{basename:e,children:t,future:s,window:o}=r,l=q.useRef();l.current==null&&(l.current=Dw({window:o,v5Compat:!0}));let h=l.current,[f,g]=q.useState({action:h.action,location:h.location}),{v7_startTransition:_}=s||{},w=q.useCallback(T=>{_&&mg?mg(()=>g(T)):g(T)},[g,_]);return q.useLayoutEffect(()=>h.listen(w),[h,w]),q.useEffect(()=>EE(s),[s]),q.createElement(TE,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:h,future:s})}const DE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",OE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,VE=q.forwardRef(function(e,t){let{onClick:s,relative:o,reloadDocument:l,replace:h,state:f,target:g,to:_,preventScrollReset:w,viewTransition:T}=e,k=Zy(e,RE),{basename:F}=q.useContext(br),z,W=!1;if(typeof _=="string"&&OE.test(_)&&(z=_,DE))try{let Z=new URL(window.location.href),ee=_.startsWith("//")?new URL(Z.protocol+_):new URL(_),we=go(ee.pathname,F);ee.origin===Z.origin&&we!=null?_=we+ee.search+ee.hash:W=!0}catch{}let V=iE(_,{relative:o}),ie=ME(_,{replace:h,state:f,target:g,preventScrollReset:w,relative:o,viewTransition:T});function ne(Z){s&&s(Z),Z.defaultPrevented||ie(Z)}return q.createElement("a",Wu({},k,{href:z||V,onClick:W||l?s:ne,ref:t,target:g}))}),LE=q.forwardRef(function(e,t){let{"aria-current":s="page",caseSensitive:o=!1,className:l="",end:h=!1,style:f,to:g,viewTransition:_,children:w}=e,T=Zy(e,kE),k=dc(g,{relative:T.relative}),F=or(),z=q.useContext(qy),{navigator:W,basename:V}=q.useContext(br),ie=z!=null&&UE(k)&&_===!0,ne=W.encodeLocation?W.encodeLocation(k).pathname:k.pathname,Z=F.pathname,ee=z&&z.navigation&&z.navigation.location?z.navigation.location.pathname:null;o||(Z=Z.toLowerCase(),ee=ee?ee.toLowerCase():null,ne=ne.toLowerCase()),ee&&V&&(ee=go(ee,V)||ee);const we=ne!=="/"&&ne.endsWith("/")?ne.length-1:ne.length;let Ee=Z===ne||!h&&Z.startsWith(ne)&&Z.charAt(we)==="/",x=ee!=null&&(ee===ne||!h&&ee.startsWith(ne)&&ee.charAt(ne.length)==="/"),I={isActive:Ee,isPending:x,isTransitioning:ie},R=Ee?s:void 0,P;typeof l=="function"?P=l(I):P=[l,Ee?"active":null,x?"pending":null,ie?"transitioning":null].filter(Boolean).join(" ");let D=typeof f=="function"?f(I):f;return q.createElement(VE,Wu({},T,{"aria-current":R,className:P,ref:t,style:D,to:g,viewTransition:_}),typeof w=="function"?w(I):w)});var kd;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(kd||(kd={}));var gg;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(gg||(gg={}));function bE(r){let e=q.useContext(cc);return e||Ze(!1),e}function ME(r,e){let{target:t,replace:s,state:o,preventScrollReset:l,relative:h,viewTransition:f}=e===void 0?{}:e,g=Gy(),_=or(),w=dc(r,{relative:h});return q.useCallback(T=>{if(AE(T,t)){T.preventDefault();let k=s!==void 0?s:$u(_)===$u(w);g(r,{replace:k,state:o,preventScrollReset:l,relative:h,viewTransition:f})}},[_,g,w,s,o,t,r,l,h,f])}function UE(r,e){e===void 0&&(e={});let t=q.useContext(PE);t==null&&Ze(!1);let{basename:s}=bE(kd.useViewTransitionState),o=dc(r,{relative:e.relative});if(!t.isTransitioning)return!1;let l=go(t.currentLocation.pathname,s)||t.currentLocation.pathname,h=go(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Ad(o.pathname,h)!=null||Ad(o.pathname,l)!=null}var yg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},FE=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},t_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,w=l>>2,T=(l&3)<<4|f>>4;let k=(f&15)<<2|_>>6,F=_&63;g||(F=64,h||(k=64)),s.push(t[w],t[T],t[k],t[F])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(e_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):FE(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||_==null||T==null)throw new jE;const k=l<<2|f>>4;if(s.push(k),_!==64){const F=f<<4&240|_>>2;if(s.push(F),T!==64){const z=_<<6&192|T;s.push(z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class jE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BE=function(r){const e=e_(r);return t_.encodeByteArray(e,!0)},qu=function(r){return BE(r).replace(/\./g,"")},n_=function(r){try{return t_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function zE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $E=()=>zE().__FIREBASE_DEFAULTS__,WE=()=>{if(typeof process>"u"||typeof yg>"u")return;const r=yg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},qE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&n_(r[1]);return e&&JSON.parse(e)},fc=()=>{try{return $E()||WE()||qE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},r_=r=>{var e,t;return(t=(e=fc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},i_=r=>{const e=r_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},s_=()=>{var r;return(r=fc())===null||r===void 0?void 0:r.config},o_=r=>{var e;return(e=fc())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function a_(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[qu(JSON.stringify(t)),qu(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function GE(){var r;const e=(r=fc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function QE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function YE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function XE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function JE(){const r=zt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function ZE(){return!GE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function eT(){try{return typeof indexedDB=="object"}catch{return!1}}function tT(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT="FirebaseError";class ar extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=nT,Object.setPrototypeOf(this,ar.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ja.prototype.create)}}class Ja{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?rT(l,s):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new ar(o,f,s)}}function rT(r,e){return r.replace(iT,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const iT=/\{\$([^}]+)}/g;function sT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Hu(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(_g(l)&&_g(h)){if(!Hu(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function _g(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function xa(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Na(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function oT(r,e){const t=new aT(r,e);return t.subscribe.bind(t)}class aT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");lT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=dd),o.error===void 0&&(o.error=dd),o.complete===void 0&&(o.complete=dd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function dd(){}/**
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
 */function ht(r){return r&&r._delegate?r._delegate:r}class Si{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class uT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new HE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hT(e))try{this.getOrInitializeService({instanceIdentifier:ns})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ns){return this.instances.has(e)}getOptions(e=ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:cT(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ns){return this.component?this.component.multipleInstances?e:ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cT(r){return r===ns?void 0:r}function hT(r){return r.instantiationMode==="EAGER"}/**
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
 */class dT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new uT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(xe||(xe={}));const fT={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},pT=xe.INFO,mT={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},gT=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=mT[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tf{constructor(e){this.name=e,this._logLevel=pT,this._logHandler=gT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const yT=(r,e)=>e.some(t=>r instanceof t);let vg,wg;function _T(){return vg||(vg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vT(){return wg||(wg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const l_=new WeakMap,Cd=new WeakMap,u_=new WeakMap,fd=new WeakMap,nf=new WeakMap;function wT(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(vi(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&l_.set(t,r)}).catch(()=>{}),nf.set(e,r),e}function ET(r){if(Cd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Cd.set(r,e)}let Pd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Cd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||u_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return vi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function TT(r){Pd=r(Pd)}function IT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(pd(this),e,...t);return u_.set(s,e.sort?e.sort():[e]),vi(s)}:vT().includes(r)?function(...e){return r.apply(pd(this),e),vi(l_.get(this))}:function(...e){return vi(r.apply(pd(this),e))}}function ST(r){return typeof r=="function"?IT(r):(r instanceof IDBTransaction&&ET(r),yT(r,_T())?new Proxy(r,Pd):r)}function vi(r){if(r instanceof IDBRequest)return wT(r);if(fd.has(r))return fd.get(r);const e=ST(r);return e!==r&&(fd.set(r,e),nf.set(e,r)),e}const pd=r=>nf.get(r);function AT(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=vi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(vi(h.result),g.oldVersion,g.newVersion,vi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),f}const RT=["get","getKey","getAll","getAllKeys","count"],kT=["put","add","delete","clear"],md=new Map;function Eg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(md.get(e))return md.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=kT.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||RT.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(f.shift())),(await Promise.all([_[t](...f),o&&g.done]))[0]};return md.set(e,l),l}TT(r=>({...r,get:(e,t,s)=>Eg(e,t)||r.get(e,t,s),has:(e,t)=>!!Eg(e,t)||r.has(e,t)}));/**
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
 */class CT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(PT(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function PT(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xd="@firebase/app",Tg="0.10.13";/**
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
 */const Dr=new tf("@firebase/app"),xT="@firebase/app-compat",NT="@firebase/analytics-compat",DT="@firebase/analytics",OT="@firebase/app-check-compat",VT="@firebase/app-check",LT="@firebase/auth",bT="@firebase/auth-compat",MT="@firebase/database",UT="@firebase/data-connect",FT="@firebase/database-compat",jT="@firebase/functions",BT="@firebase/functions-compat",zT="@firebase/installations",$T="@firebase/installations-compat",WT="@firebase/messaging",qT="@firebase/messaging-compat",HT="@firebase/performance",KT="@firebase/performance-compat",GT="@firebase/remote-config",QT="@firebase/remote-config-compat",YT="@firebase/storage",XT="@firebase/storage-compat",JT="@firebase/firestore",ZT="@firebase/vertexai-preview",eI="@firebase/firestore-compat",tI="firebase",nI="10.14.1";/**
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
 */const Nd="[DEFAULT]",rI={[xd]:"fire-core",[xT]:"fire-core-compat",[DT]:"fire-analytics",[NT]:"fire-analytics-compat",[VT]:"fire-app-check",[OT]:"fire-app-check-compat",[LT]:"fire-auth",[bT]:"fire-auth-compat",[MT]:"fire-rtdb",[UT]:"fire-data-connect",[FT]:"fire-rtdb-compat",[jT]:"fire-fn",[BT]:"fire-fn-compat",[zT]:"fire-iid",[$T]:"fire-iid-compat",[WT]:"fire-fcm",[qT]:"fire-fcm-compat",[HT]:"fire-perf",[KT]:"fire-perf-compat",[GT]:"fire-rc",[QT]:"fire-rc-compat",[YT]:"fire-gcs",[XT]:"fire-gcs-compat",[JT]:"fire-fst",[eI]:"fire-fst-compat",[ZT]:"fire-vertex","fire-js":"fire-js",[tI]:"fire-js-all"};/**
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
 */const Ku=new Map,iI=new Map,Dd=new Map;function Ig(r,e){try{r.container.addComponent(e)}catch(t){Dr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function ss(r){const e=r.name;if(Dd.has(e))return Dr.debug(`There were multiple attempts to register component ${e}.`),!1;Dd.set(e,r);for(const t of Ku.values())Ig(t,r);for(const t of iI.values())Ig(t,r);return!0}function pc(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function kr(r){return r.settings!==void 0}/**
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
 */const sI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wi=new Ja("app","Firebase",sI);/**
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
 */class oI{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wi.create("app-deleted",{appName:this._name})}}/**
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
 */const cs=nI;function c_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Nd,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw wi.create("bad-app-name",{appName:String(o)});if(t||(t=s_()),!t)throw wi.create("no-options");const l=Ku.get(o);if(l){if(Hu(t,l.options)&&Hu(s,l.config))return l;throw wi.create("duplicate-app",{appName:o})}const h=new dT(o);for(const g of Dd.values())h.addComponent(g);const f=new oI(t,s,h);return Ku.set(o,f),f}function rf(r=Nd){const e=Ku.get(r);if(!e&&r===Nd&&s_())return c_();if(!e)throw wi.create("no-app",{appName:r});return e}function Zn(r,e,t){var s;let o=(s=rI[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dr.warn(f.join(" "));return}ss(new Si(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const aI="firebase-heartbeat-database",lI=1,$a="firebase-heartbeat-store";let gd=null;function h_(){return gd||(gd=AT(aI,lI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore($a)}catch(t){console.warn(t)}}}}).catch(r=>{throw wi.create("idb-open",{originalErrorMessage:r.message})})),gd}async function uI(r){try{const t=(await h_()).transaction($a),s=await t.objectStore($a).get(d_(r));return await t.done,s}catch(e){if(e instanceof ar)Dr.warn(e.message);else{const t=wi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dr.warn(t.message)}}}async function Sg(r,e){try{const s=(await h_()).transaction($a,"readwrite");await s.objectStore($a).put(e,d_(r)),await s.done}catch(t){if(t instanceof ar)Dr.warn(t.message);else{const s=wi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Dr.warn(s.message)}}}function d_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const cI=1024,hI=720*60*60*1e3;class dI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new pI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Ag();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const f=new Date(h.date).valueOf();return Date.now()-f<=hI}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Dr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ag(),{heartbeatsToSend:s,unsentEntries:o}=fI(this._heartbeatsCache.heartbeats),l=qu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Dr.warn(t),""}}}function Ag(){return new Date().toISOString().substring(0,10)}function fI(r,e=cI){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Rg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Rg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class pI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eT()?tT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await uI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Sg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Sg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Rg(r){return qu(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function mI(r){ss(new Si("platform-logger",e=>new CT(e),"PRIVATE")),ss(new Si("heartbeat",e=>new dI(e),"PRIVATE")),Zn(xd,Tg,r),Zn(xd,Tg,"esm2017"),Zn("fire-js","")}mI("");function sf(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function f_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gI=f_,p_=new Ja("auth","Firebase",f_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=new tf("@firebase/auth");function yI(r,...e){Gu.logLevel<=xe.WARN&&Gu.warn(`Auth (${cs}): ${r}`,...e)}function Vu(r,...e){Gu.logLevel<=xe.ERROR&&Gu.error(`Auth (${cs}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(r,...e){throw of(r,...e)}function er(r,...e){return of(r,...e)}function m_(r,e,t){const s=Object.assign(Object.assign({},gI()),{[e]:t});return new Ja("auth","Firebase",s).create(e,{appName:r.name})}function Ei(r){return m_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function of(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return p_.create(r,...e)}function _e(r,e,...t){if(!r)throw of(e,...t)}function Cr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Vu(e),new Error(e)}function Or(r,e){r||Cr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function _I(){return kg()==="http:"||kg()==="https:"}function kg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_I()||YE()||"connection"in navigator)?navigator.onLine:!0}function wI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t){this.shortDelay=e,this.longDelay=t,Or(t>e,"Short delay should be less than long delay!"),this.isMobile=KE()||XE()}get(){return vI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(r,e){Or(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=new el(3e4,6e4);function hs(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Ur(r,e,t,s,o={}){return y_(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const f=Za(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:g},l);return QE()||(_.referrerPolicy="no-referrer"),g_.fetch()(__(r,r.config.apiHost,t,f),_)})}async function y_(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},EI),e);try{const o=new SI(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw ku(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,_]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw ku(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw ku(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw ku(r,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw m_(r,w,_);jn(r,w)}}catch(o){if(o instanceof ar)throw o;jn(r,"network-request-failed",{message:String(o)})}}async function mc(r,e,t,s,o={}){const l=await Ur(r,e,t,s,o);return"mfaPendingCredential"in l&&jn(r,"multi-factor-auth-required",{_serverResponse:l}),l}function __(r,e,t,s){const o=`${e}${t}?${s}`;return r.config.emulator?af(r.config,o):`${r.config.apiScheme}://${o}`}function II(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class SI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(er(this.auth,"network-request-failed")),TI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ku(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=er(r,e,s);return o.customData._tokenResponse=t,o}function Cg(r){return r!==void 0&&r.enterprise!==void 0}class AI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return II(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function RI(r,e){return Ur(r,"GET","/v2/recaptchaConfig",hs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kI(r,e){return Ur(r,"POST","/v1/accounts:delete",e)}async function v_(r,e){return Ur(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CI(r,e=!1){const t=ht(r),s=await t.getIdToken(e),o=lf(s);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:La(yd(o.auth_time)),issuedAtTime:La(yd(o.iat)),expirationTime:La(yd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function yd(r){return Number(r)*1e3}function lf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Vu("JWT malformed, contained fewer than 3 sections"),null;try{const o=n_(t);return o?JSON.parse(o):(Vu("Failed to decode base64 JWT payload"),null)}catch(o){return Vu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Pg(r){const e=lf(r);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ar&&PI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function PI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=La(this.lastLoginAt),this.creationTime=La(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qu(r){var e;const t=r.auth,s=await r.getIdToken(),o=await yo(r,v_(t,{idToken:s}));_e(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?w_(l.providerUserInfo):[],f=DI(r.providerData,h),g=r.isAnonymous,_=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),w=g?_:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Vd(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(r,T)}async function NI(r){const e=ht(r);await Qu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DI(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function w_(r){return r.map(e=>{var{providerId:t}=e,s=sf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OI(r,e){const t=await y_(r,{},async()=>{const s=Za({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=__(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",g_.fetch()(h,{method:"POST",headers:f,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function VI(r,e){return Ur(r,"POST","/v2/accounts:revokeToken",hs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=Pg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await OI(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new ho;return s&&(_e(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(_e(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ho,this.toJSON())}_performRefresh(){return Cr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(r,e){_e(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Pr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=sf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Vd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await yo(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return CI(this,e)}reload(){return NI(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Qu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kr(this.auth.app))return Promise.reject(Ei(this.auth));const e=await this.getIdToken();return await yo(this,kI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,h,f,g,_,w;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,k=(o=t.email)!==null&&o!==void 0?o:void 0,F=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,z=(h=t.photoURL)!==null&&h!==void 0?h:void 0,W=(f=t.tenantId)!==null&&f!==void 0?f:void 0,V=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,ie=(_=t.createdAt)!==null&&_!==void 0?_:void 0,ne=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:Z,emailVerified:ee,isAnonymous:we,providerData:Ee,stsTokenManager:x}=t;_e(Z&&x,e,"internal-error");const I=ho.fromJSON(this.name,x);_e(typeof Z=="string",e,"internal-error"),ci(T,e.name),ci(k,e.name),_e(typeof ee=="boolean",e,"internal-error"),_e(typeof we=="boolean",e,"internal-error"),ci(F,e.name),ci(z,e.name),ci(W,e.name),ci(V,e.name),ci(ie,e.name),ci(ne,e.name);const R=new Pr({uid:Z,auth:e,email:k,emailVerified:ee,displayName:T,isAnonymous:we,photoURL:z,phoneNumber:F,tenantId:W,stsTokenManager:I,createdAt:ie,lastLoginAt:ne});return Ee&&Array.isArray(Ee)&&(R.providerData=Ee.map(P=>Object.assign({},P))),V&&(R._redirectEventId=V),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new ho;o.updateFromServerResponse(t);const l=new Pr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Qu(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?w_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new ho;f.updateFromIdToken(s);const g=new Pr({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Vd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=new Map;function xr(r){Or(r instanceof Function,"Expected a class definition");let e=xg.get(r);return e?(Or(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,xg.set(r,e),e)}/**
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
 */class E_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}E_.type="NONE";const Ng=E_;/**
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
 */function Lu(r,e,t){return`firebase:${r}:${e}:${t}`}class fo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Lu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Lu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new fo(xr(Ng),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||xr(Ng);const h=Lu(s,e.config.apiKey,e.name);let f=null;for(const _ of t)try{const w=await _._get(h);if(w){const T=Pr._fromJSON(e,w);_!==l&&(f=T),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new fo(l,e,s):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new fo(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(A_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(T_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(k_(e))return"Blackberry";if(C_(e))return"Webos";if(I_(e))return"Safari";if((e.includes("chrome/")||S_(e))&&!e.includes("edge/"))return"Chrome";if(R_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function T_(r=zt()){return/firefox\//i.test(r)}function I_(r=zt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function S_(r=zt()){return/crios\//i.test(r)}function A_(r=zt()){return/iemobile/i.test(r)}function R_(r=zt()){return/android/i.test(r)}function k_(r=zt()){return/blackberry/i.test(r)}function C_(r=zt()){return/webos/i.test(r)}function uf(r=zt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function LI(r=zt()){var e;return uf(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bI(){return JE()&&document.documentMode===10}function P_(r=zt()){return uf(r)||R_(r)||C_(r)||k_(r)||/windows phone/i.test(r)||A_(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(r,e=[]){let t;switch(r){case"Browser":t=Dg(zt());break;case"Worker":t=`${Dg(zt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${cs}/${s}`}/**
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
 */class MI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function UI(r,e={}){return Ur(r,"GET","/v2/passwordPolicy",hs(r,e))}/**
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
 */const FI=6;class jI{constructor(e){var t,s,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:FI,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,h,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Og(this),this.idTokenSubscription=new Og(this),this.beforeStateQueue=new MI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xr(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await fo.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await v_(this,{idToken:e}),s=await Pr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(kr(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kr(this.app))return Promise.reject(Ei(this));const t=e?ht(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kr(this.app)?Promise.reject(Ei(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kr(this.app)?Promise.reject(Ei(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await UI(this),t=new jI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ja("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await VI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await fo.create(this,[xr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=x_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&yI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Co(r){return ht(r)}class Og{constructor(e){this.auth=e,this.observer=null,this.addObserver=oT(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zI(r){gc=r}function N_(r){return gc.loadJS(r)}function $I(){return gc.recaptchaEnterpriseScript}function WI(){return gc.gapiScript}function qI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}const HI="recaptcha-enterprise",KI="NO_RECAPTCHA";class GI{constructor(e){this.type=HI,this.auth=Co(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{RI(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const _=new AI(g);return l.tenantId==null?l._agentRecaptchaConfig=_:l._tenantRecaptchaConfigs[l.tenantId]=_,h(_.siteKey)}}).catch(g=>{f(g)})})}function o(l,h,f){const g=window.grecaptcha;Cg(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(_=>{h(_)}).catch(()=>{h(KI)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((l,h)=>{s(this.auth).then(f=>{if(!t&&Cg(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=$I();g.length!==0&&(g+=f),N_(g).then(()=>{o(f,l,h)}).catch(_=>{h(_)})}}).catch(f=>{h(f)})})}}async function Vg(r,e,t,s=!1){const o=new GI(r);let l;try{l=await o.verify(t)}catch{l=await o.verify(t,!0)}const h=Object.assign({},e);return s?Object.assign(h,{captchaResp:l}):Object.assign(h,{captchaResponse:l}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Lg(r,e,t,s){var o;if(!((o=r._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Vg(r,e,t,t==="getOobCode");return s(r,l)}else return s(r,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await Vg(r,e,t,t==="getOobCode");return s(r,h)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(r,e){const t=pc(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Hu(l,e??{}))return o;jn(o,"already-initialized")}return t.initialize({options:e})}function YI(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(xr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function XI(r,e,t){const s=Co(r);_e(s._canInitEmulator,s,"emulator-config-failed"),_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=D_(e),{host:h,port:f}=JI(e),g=f===null?"":`:${f}`;s.config.emulator={url:`${l}//${h}${g}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),ZI()}function D_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function JI(r){const e=D_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:bg(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:bg(h)}}}function bg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function ZI(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Cr("not implemented")}_getIdTokenResponse(e){return Cr("not implemented")}_linkToIdToken(e,t){return Cr("not implemented")}_getReauthenticationResolver(e){return Cr("not implemented")}}async function eS(r,e){return Ur(r,"POST","/v1/accounts:update",e)}async function tS(r,e){return Ur(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nS(r,e){return mc(r,"POST","/v1/accounts:signInWithPassword",hs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rS(r,e){return mc(r,"POST","/v1/accounts:signInWithEmailLink",hs(r,e))}async function iS(r,e){return mc(r,"POST","/v1/accounts:signInWithEmailLink",hs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa extends cf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Wa(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Wa(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lg(e,t,"signInWithPassword",nS);case"emailLink":return rS(e,{email:this._email,oobCode:this._password});default:jn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lg(e,s,"signUpPassword",tS);case"emailLink":return iS(e,{idToken:t,email:this._email,oobCode:this._password});default:jn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(r,e){return mc(r,"POST","/v1/accounts:signInWithIdp",hs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS="http://localhost";class os extends cf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new os(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):jn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=sf(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new os(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return po(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,po(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,po(e,t)}buildRequest(){const e={requestUri:sS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Za(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function aS(r){const e=xa(Na(r)).link,t=e?xa(Na(e)).deep_link_id:null,s=xa(Na(r)).deep_link_id;return(s?xa(Na(s)).link:null)||s||t||e||r}class hf{constructor(e){var t,s,o,l,h,f;const g=xa(Na(e)),_=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(s=g.oobCode)!==null&&s!==void 0?s:null,T=oS((o=g.mode)!==null&&o!==void 0?o:null);_e(_&&w&&T,"argument-error"),this.apiKey=_,this.operation=T,this.code=w,this.continueUrl=(l=g.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=g.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(f=g.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=aS(e);try{return new hf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(){this.providerId=Po.PROVIDER_ID}static credential(e,t){return Wa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=hf.parseLink(t);return _e(s,"argument-error"),Wa._fromEmailAndCode(e,s.code,s.tenantId)}}Po.PROVIDER_ID="password";Po.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Po.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class tl extends O_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends tl{constructor(){super("facebook.com")}static credential(e){return os._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hi.credential(e.oauthAccessToken)}catch{return null}}}hi.FACEBOOK_SIGN_IN_METHOD="facebook.com";hi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends tl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return os._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return di.credential(t,s)}catch{return null}}}di.GOOGLE_SIGN_IN_METHOD="google.com";di.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends tl{constructor(){super("github.com")}static credential(e){return os._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fi.credential(e.oauthAccessToken)}catch{return null}}}fi.GITHUB_SIGN_IN_METHOD="github.com";fi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends tl{constructor(){super("twitter.com")}static credential(e,t){return os._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return pi.credential(t,s)}catch{return null}}}pi.TWITTER_SIGN_IN_METHOD="twitter.com";pi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await Pr._fromIdTokenResponse(e,s,o),h=Mg(s);return new _o({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Mg(s);return new _o({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Mg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu extends ar{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Yu.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Yu(e,t,s,o)}}function V_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Yu._fromErrorAndOperation(r,l,e,s):l})}async function lS(r,e,t=!1){const s=await yo(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return _o._forOperation(r,"link",s)}/**
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
 */async function uS(r,e,t=!1){const{auth:s}=r;if(kr(s.app))return Promise.reject(Ei(s));const o="reauthenticate";try{const l=await yo(r,V_(s,o,e,r),t);_e(l.idToken,s,"internal-error");const h=lf(l.idToken);_e(h,s,"internal-error");const{sub:f}=h;return _e(r.uid===f,s,"user-mismatch"),_o._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&jn(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L_(r,e,t=!1){if(kr(r.app))return Promise.reject(Ei(r));const s="signIn",o=await V_(r,s,e),l=await _o._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function cS(r,e){return L_(Co(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hS(r){const e=Co(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function dS(r,e,t){return kr(r.app)?Promise.reject(Ei(r)):cS(ht(r),Po.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&hS(r),s})}function fS(r,e){return pS(ht(r),null,e)}async function pS(r,e,t){const{auth:s}=r,l={idToken:await r.getIdToken(),returnSecureToken:!0};t&&(l.password=t);const h=await yo(r,eS(s,l));await r._updateTokensIfNecessary(h,!0)}function mS(r,e,t,s){return ht(r).onIdTokenChanged(e,t,s)}function gS(r,e,t){return ht(r).beforeAuthStateChanged(e,t)}function yS(r,e,t,s){return ht(r).onAuthStateChanged(e,t,s)}function _S(r){return ht(r).signOut()}const Xu="__sak";/**
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
 */class b_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Xu,"1"),this.storage.removeItem(Xu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=1e3,wS=10;class M_ extends b_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=P_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);bI()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,wS):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},vS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}M_.type="LOCAL";const ES=M_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_ extends b_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}U_.type="SESSION";const F_=U_;/**
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
 */function TS(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class yc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new yc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(h).map(async _=>_(t.origin,l)),g=await TS(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class IS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const _=df("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(T){const k=T;if(k.data.eventId===_)switch(k.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(k.data.response);break;default:clearTimeout(w),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(){return window}function SS(r){tr().location.href=r}/**
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
 */function j_(){return typeof tr().WorkerGlobalScope<"u"&&typeof tr().importScripts=="function"}async function AS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RS(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function kS(){return j_()?self:null}/**
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
 */const B_="firebaseLocalStorageDb",CS=1,Ju="firebaseLocalStorage",z_="fbase_key";class nl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function _c(r,e){return r.transaction([Ju],e?"readwrite":"readonly").objectStore(Ju)}function PS(){const r=indexedDB.deleteDatabase(B_);return new nl(r).toPromise()}function Ld(){const r=indexedDB.open(B_,CS);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Ju,{keyPath:z_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Ju)?e(s):(s.close(),await PS(),e(await Ld()))})})}async function Ug(r,e,t){const s=_c(r,!0).put({[z_]:e,value:t});return new nl(s).toPromise()}async function xS(r,e){const t=_c(r,!1).get(e),s=await new nl(t).toPromise();return s===void 0?null:s.value}function Fg(r,e){const t=_c(r,!0).delete(e);return new nl(t).toPromise()}const NS=800,DS=3;class $_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ld(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>DS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return j_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yc._getInstance(kS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await AS(),!this.activeServiceWorker)return;this.sender=new IS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ld();return await Ug(e,Xu,"1"),await Fg(e,Xu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ug(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>xS(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Fg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=_c(o,!1).getAll();return new nl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$_.type="LOCAL";const OS=$_;new el(3e4,6e4);/**
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
 */function VS(r,e){return e?xr(e):(_e(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class ff extends cf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return po(e,this._buildIdpRequest())}_linkToIdToken(e,t){return po(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return po(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function LS(r){return L_(r.auth,new ff(r),r.bypassAuthState)}function bS(r){const{auth:e,user:t}=r;return _e(t,e,"internal-error"),uS(t,new ff(r),r.bypassAuthState)}async function MS(r){const{auth:e,user:t}=r;return _e(t,e,"internal-error"),lS(t,new ff(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LS;case"linkViaPopup":case"linkViaRedirect":return MS;case"reauthViaPopup":case"reauthViaRedirect":return bS;default:jn(this.auth,"internal-error")}}resolve(e){Or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=new el(2e3,1e4);class co extends W_{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,co.currentPopupAction&&co.currentPopupAction.cancel(),co.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Or(this.filter.length===1,"Popup operations only handle one event");const e=df();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(er(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(er(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,co.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(er(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,US.get())};e()}}co.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS="pendingRedirect",bu=new Map;class jS extends W_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=bu.get(this.auth._key());if(!e){try{const s=await BS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}bu.set(this.auth._key(),e)}return this.bypassAuthState||bu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BS(r,e){const t=WS(e),s=$S(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function zS(r,e){bu.set(r._key(),e)}function $S(r){return xr(r._redirectPersistence)}function WS(r){return Lu(FS,r.config.apiKey,r.name)}async function qS(r,e,t=!1){if(kr(r.app))return Promise.reject(Ei(r));const s=Co(r),o=VS(s,e),h=await new jS(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=600*1e3;class KS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GS(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!q_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(er(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HS&&this.cachedEventUids.clear(),this.cachedEventUids.has(jg(e))}saveEventToCache(e){this.cachedEventUids.add(jg(e)),this.lastProcessedEventTime=Date.now()}}function jg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function q_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function GS(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return q_(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QS(r,e={}){return Ur(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XS=/^https?/;async function JS(r){if(r.config.emulator)return;const{authorizedDomains:e}=await QS(r);for(const t of e)try{if(ZS(t))return}catch{}jn(r,"unauthorized-domain")}function ZS(r){const e=Od(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!XS.test(t))return!1;if(YS.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const e1=new el(3e4,6e4);function Bg(){const r=tr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function t1(r){return new Promise((e,t)=>{var s,o,l;function h(){Bg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bg(),t(er(r,"network-request-failed"))},timeout:e1.get()})}if(!((o=(s=tr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=tr().gapi)===null||l===void 0)&&l.load)h();else{const f=qI("iframefcb");return tr()[f]=()=>{gapi.load?h():t(er(r,"network-request-failed"))},N_(`${WI()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw Mu=null,e})}let Mu=null;function n1(r){return Mu=Mu||t1(r),Mu}/**
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
 */const r1=new el(5e3,15e3),i1="__/auth/iframe",s1="emulator/auth/iframe",o1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},a1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function l1(r){const e=r.config;_e(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?af(e,s1):`https://${r.config.authDomain}/${i1}`,s={apiKey:e.apiKey,appName:r.name,v:cs},o=a1.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${Za(s).slice(1)}`}async function u1(r){const e=await n1(r),t=tr().gapi;return _e(t,r,"internal-error"),e.open({where:document.body,url:l1(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:o1,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=er(r,"network-request-failed"),f=tr().setTimeout(()=>{l(h)},r1.get());function g(){tr().clearTimeout(f),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const c1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},h1=500,d1=600,f1="_blank",p1="http://localhost";class zg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function m1(r,e,t,s=h1,o=d1){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const g=Object.assign(Object.assign({},c1),{width:s.toString(),height:o.toString(),top:l,left:h}),_=zt().toLowerCase();t&&(f=S_(_)?f1:t),T_(_)&&(e=e||p1,g.scrollbars="yes");const w=Object.entries(g).reduce((k,[F,z])=>`${k}${F}=${z},`,"");if(LI(_)&&f!=="_self")return g1(e||"",f),new zg(null);const T=window.open(e||"",f,w);_e(T,r,"popup-blocked");try{T.focus()}catch{}return new zg(T)}function g1(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const y1="__/auth/handler",_1="emulator/auth/handler",v1=encodeURIComponent("fac");async function $g(r,e,t,s,o,l){_e(r.config.authDomain,r,"auth-domain-config-required"),_e(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:cs,eventId:o};if(e instanceof O_){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",sT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))h[w]=T}if(e instanceof tl){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const g=await r._getAppCheckToken(),_=g?`#${v1}=${encodeURIComponent(g)}`:"";return`${w1(r)}?${Za(f).slice(1)}${_}`}function w1({config:r}){return r.emulator?af(r,_1):`https://${r.authDomain}/${y1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="webStorageSupport";class E1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=F_,this._completeRedirectFn=qS,this._overrideRedirectResult=zS}async _openPopup(e,t,s,o){var l;Or((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await $g(e,t,s,Od(),o);return m1(e,h,df())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await $g(e,t,s,Od(),o);return SS(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Or(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await u1(e),s=new KS(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_d,{type:_d},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[_d];h!==void 0&&t(!!h),jn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=JS(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return P_()||I_()||uf()}}const T1=E1;var Wg="@firebase/auth",qg="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function A1(r){ss(new Si("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=s.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:x_(r)},_=new BI(s,o,l,g);return YI(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ss(new Si("auth-internal",e=>{const t=Co(e.getProvider("auth").getImmediate());return(s=>new I1(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(Wg,qg,S1(r)),Zn(Wg,qg,"esm2017")}/**
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
 */const R1=300,k1=o_("authIdTokenMaxAge")||R1;let Hg=null;const C1=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>k1)return;const o=t==null?void 0:t.token;Hg!==o&&(Hg=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function P1(r=rf()){const e=pc(r,"auth");if(e.isInitialized())return e.getImmediate();const t=QI(r,{popupRedirectResolver:T1,persistence:[OS,ES,F_]}),s=o_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=C1(l.toString());gS(t,h,()=>h(t.currentUser)),mS(t,f=>h(f))}}const o=r_("auth");return o&&XI(t,`http://${o}`),t}function x1(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}zI({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=er("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",x1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});A1("Browser");var N1="firebase",D1="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zn(N1,D1,"app");var Kg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var is,H_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,I){function R(){}R.prototype=I.prototype,x.D=I.prototype,x.prototype=new R,x.prototype.constructor=x,x.C=function(P,D,b){for(var A=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)A[nt-2]=arguments[nt];return I.prototype[D].apply(P,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,I,R){R||(R=0);var P=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)P[D]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(D=0;16>D;++D)P[D]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=x.g[0],R=x.g[1],D=x.g[2];var b=x.g[3],A=I+(b^R&(D^b))+P[0]+3614090360&4294967295;I=R+(A<<7&4294967295|A>>>25),A=b+(D^I&(R^D))+P[1]+3905402710&4294967295,b=I+(A<<12&4294967295|A>>>20),A=D+(R^b&(I^R))+P[2]+606105819&4294967295,D=b+(A<<17&4294967295|A>>>15),A=R+(I^D&(b^I))+P[3]+3250441966&4294967295,R=D+(A<<22&4294967295|A>>>10),A=I+(b^R&(D^b))+P[4]+4118548399&4294967295,I=R+(A<<7&4294967295|A>>>25),A=b+(D^I&(R^D))+P[5]+1200080426&4294967295,b=I+(A<<12&4294967295|A>>>20),A=D+(R^b&(I^R))+P[6]+2821735955&4294967295,D=b+(A<<17&4294967295|A>>>15),A=R+(I^D&(b^I))+P[7]+4249261313&4294967295,R=D+(A<<22&4294967295|A>>>10),A=I+(b^R&(D^b))+P[8]+1770035416&4294967295,I=R+(A<<7&4294967295|A>>>25),A=b+(D^I&(R^D))+P[9]+2336552879&4294967295,b=I+(A<<12&4294967295|A>>>20),A=D+(R^b&(I^R))+P[10]+4294925233&4294967295,D=b+(A<<17&4294967295|A>>>15),A=R+(I^D&(b^I))+P[11]+2304563134&4294967295,R=D+(A<<22&4294967295|A>>>10),A=I+(b^R&(D^b))+P[12]+1804603682&4294967295,I=R+(A<<7&4294967295|A>>>25),A=b+(D^I&(R^D))+P[13]+4254626195&4294967295,b=I+(A<<12&4294967295|A>>>20),A=D+(R^b&(I^R))+P[14]+2792965006&4294967295,D=b+(A<<17&4294967295|A>>>15),A=R+(I^D&(b^I))+P[15]+1236535329&4294967295,R=D+(A<<22&4294967295|A>>>10),A=I+(D^b&(R^D))+P[1]+4129170786&4294967295,I=R+(A<<5&4294967295|A>>>27),A=b+(R^D&(I^R))+P[6]+3225465664&4294967295,b=I+(A<<9&4294967295|A>>>23),A=D+(I^R&(b^I))+P[11]+643717713&4294967295,D=b+(A<<14&4294967295|A>>>18),A=R+(b^I&(D^b))+P[0]+3921069994&4294967295,R=D+(A<<20&4294967295|A>>>12),A=I+(D^b&(R^D))+P[5]+3593408605&4294967295,I=R+(A<<5&4294967295|A>>>27),A=b+(R^D&(I^R))+P[10]+38016083&4294967295,b=I+(A<<9&4294967295|A>>>23),A=D+(I^R&(b^I))+P[15]+3634488961&4294967295,D=b+(A<<14&4294967295|A>>>18),A=R+(b^I&(D^b))+P[4]+3889429448&4294967295,R=D+(A<<20&4294967295|A>>>12),A=I+(D^b&(R^D))+P[9]+568446438&4294967295,I=R+(A<<5&4294967295|A>>>27),A=b+(R^D&(I^R))+P[14]+3275163606&4294967295,b=I+(A<<9&4294967295|A>>>23),A=D+(I^R&(b^I))+P[3]+4107603335&4294967295,D=b+(A<<14&4294967295|A>>>18),A=R+(b^I&(D^b))+P[8]+1163531501&4294967295,R=D+(A<<20&4294967295|A>>>12),A=I+(D^b&(R^D))+P[13]+2850285829&4294967295,I=R+(A<<5&4294967295|A>>>27),A=b+(R^D&(I^R))+P[2]+4243563512&4294967295,b=I+(A<<9&4294967295|A>>>23),A=D+(I^R&(b^I))+P[7]+1735328473&4294967295,D=b+(A<<14&4294967295|A>>>18),A=R+(b^I&(D^b))+P[12]+2368359562&4294967295,R=D+(A<<20&4294967295|A>>>12),A=I+(R^D^b)+P[5]+4294588738&4294967295,I=R+(A<<4&4294967295|A>>>28),A=b+(I^R^D)+P[8]+2272392833&4294967295,b=I+(A<<11&4294967295|A>>>21),A=D+(b^I^R)+P[11]+1839030562&4294967295,D=b+(A<<16&4294967295|A>>>16),A=R+(D^b^I)+P[14]+4259657740&4294967295,R=D+(A<<23&4294967295|A>>>9),A=I+(R^D^b)+P[1]+2763975236&4294967295,I=R+(A<<4&4294967295|A>>>28),A=b+(I^R^D)+P[4]+1272893353&4294967295,b=I+(A<<11&4294967295|A>>>21),A=D+(b^I^R)+P[7]+4139469664&4294967295,D=b+(A<<16&4294967295|A>>>16),A=R+(D^b^I)+P[10]+3200236656&4294967295,R=D+(A<<23&4294967295|A>>>9),A=I+(R^D^b)+P[13]+681279174&4294967295,I=R+(A<<4&4294967295|A>>>28),A=b+(I^R^D)+P[0]+3936430074&4294967295,b=I+(A<<11&4294967295|A>>>21),A=D+(b^I^R)+P[3]+3572445317&4294967295,D=b+(A<<16&4294967295|A>>>16),A=R+(D^b^I)+P[6]+76029189&4294967295,R=D+(A<<23&4294967295|A>>>9),A=I+(R^D^b)+P[9]+3654602809&4294967295,I=R+(A<<4&4294967295|A>>>28),A=b+(I^R^D)+P[12]+3873151461&4294967295,b=I+(A<<11&4294967295|A>>>21),A=D+(b^I^R)+P[15]+530742520&4294967295,D=b+(A<<16&4294967295|A>>>16),A=R+(D^b^I)+P[2]+3299628645&4294967295,R=D+(A<<23&4294967295|A>>>9),A=I+(D^(R|~b))+P[0]+4096336452&4294967295,I=R+(A<<6&4294967295|A>>>26),A=b+(R^(I|~D))+P[7]+1126891415&4294967295,b=I+(A<<10&4294967295|A>>>22),A=D+(I^(b|~R))+P[14]+2878612391&4294967295,D=b+(A<<15&4294967295|A>>>17),A=R+(b^(D|~I))+P[5]+4237533241&4294967295,R=D+(A<<21&4294967295|A>>>11),A=I+(D^(R|~b))+P[12]+1700485571&4294967295,I=R+(A<<6&4294967295|A>>>26),A=b+(R^(I|~D))+P[3]+2399980690&4294967295,b=I+(A<<10&4294967295|A>>>22),A=D+(I^(b|~R))+P[10]+4293915773&4294967295,D=b+(A<<15&4294967295|A>>>17),A=R+(b^(D|~I))+P[1]+2240044497&4294967295,R=D+(A<<21&4294967295|A>>>11),A=I+(D^(R|~b))+P[8]+1873313359&4294967295,I=R+(A<<6&4294967295|A>>>26),A=b+(R^(I|~D))+P[15]+4264355552&4294967295,b=I+(A<<10&4294967295|A>>>22),A=D+(I^(b|~R))+P[6]+2734768916&4294967295,D=b+(A<<15&4294967295|A>>>17),A=R+(b^(D|~I))+P[13]+1309151649&4294967295,R=D+(A<<21&4294967295|A>>>11),A=I+(D^(R|~b))+P[4]+4149444226&4294967295,I=R+(A<<6&4294967295|A>>>26),A=b+(R^(I|~D))+P[11]+3174756917&4294967295,b=I+(A<<10&4294967295|A>>>22),A=D+(I^(b|~R))+P[2]+718787259&4294967295,D=b+(A<<15&4294967295|A>>>17),A=R+(b^(D|~I))+P[9]+3951481745&4294967295,x.g[0]=x.g[0]+I&4294967295,x.g[1]=x.g[1]+(D+(A<<21&4294967295|A>>>11))&4294967295,x.g[2]=x.g[2]+D&4294967295,x.g[3]=x.g[3]+b&4294967295}s.prototype.u=function(x,I){I===void 0&&(I=x.length);for(var R=I-this.blockSize,P=this.B,D=this.h,b=0;b<I;){if(D==0)for(;b<=R;)o(this,x,b),b+=this.blockSize;if(typeof x=="string"){for(;b<I;)if(P[D++]=x.charCodeAt(b++),D==this.blockSize){o(this,P),D=0;break}}else for(;b<I;)if(P[D++]=x[b++],D==this.blockSize){o(this,P),D=0;break}}this.h=D,this.o+=I},s.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var I=1;I<x.length-8;++I)x[I]=0;var R=8*this.o;for(I=x.length-8;I<x.length;++I)x[I]=R&255,R/=256;for(this.u(x),x=Array(16),I=R=0;4>I;++I)for(var P=0;32>P;P+=8)x[R++]=this.g[I]>>>P&255;return x};function l(x,I){var R=f;return Object.prototype.hasOwnProperty.call(R,x)?R[x]:R[x]=I(x)}function h(x,I){this.h=I;for(var R=[],P=!0,D=x.length-1;0<=D;D--){var b=x[D]|0;P&&b==I||(R[D]=b,P=!1)}this.g=R}var f={};function g(x){return-128<=x&&128>x?l(x,function(I){return new h([I|0],0>I?-1:0)}):new h([x|0],0>x?-1:0)}function _(x){if(isNaN(x)||!isFinite(x))return T;if(0>x)return V(_(-x));for(var I=[],R=1,P=0;x>=R;P++)I[P]=x/R|0,R*=4294967296;return new h(I,0)}function w(x,I){if(x.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(x.charAt(0)=="-")return V(w(x.substring(1),I));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=_(Math.pow(I,8)),P=T,D=0;D<x.length;D+=8){var b=Math.min(8,x.length-D),A=parseInt(x.substring(D,D+b),I);8>b?(b=_(Math.pow(I,b)),P=P.j(b).add(_(A))):(P=P.j(R),P=P.add(_(A)))}return P}var T=g(0),k=g(1),F=g(16777216);r=h.prototype,r.m=function(){if(W(this))return-V(this).m();for(var x=0,I=1,R=0;R<this.g.length;R++){var P=this.i(R);x+=(0<=P?P:4294967296+P)*I,I*=4294967296}return x},r.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(z(this))return"0";if(W(this))return"-"+V(this).toString(x);for(var I=_(Math.pow(x,6)),R=this,P="";;){var D=ee(R,I).g;R=ie(R,D.j(I));var b=((0<R.g.length?R.g[0]:R.h)>>>0).toString(x);if(R=D,z(R))return b+P;for(;6>b.length;)b="0"+b;P=b+P}},r.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function z(x){if(x.h!=0)return!1;for(var I=0;I<x.g.length;I++)if(x.g[I]!=0)return!1;return!0}function W(x){return x.h==-1}r.l=function(x){return x=ie(this,x),W(x)?-1:z(x)?0:1};function V(x){for(var I=x.g.length,R=[],P=0;P<I;P++)R[P]=~x.g[P];return new h(R,~x.h).add(k)}r.abs=function(){return W(this)?V(this):this},r.add=function(x){for(var I=Math.max(this.g.length,x.g.length),R=[],P=0,D=0;D<=I;D++){var b=P+(this.i(D)&65535)+(x.i(D)&65535),A=(b>>>16)+(this.i(D)>>>16)+(x.i(D)>>>16);P=A>>>16,b&=65535,A&=65535,R[D]=A<<16|b}return new h(R,R[R.length-1]&-2147483648?-1:0)};function ie(x,I){return x.add(V(I))}r.j=function(x){if(z(this)||z(x))return T;if(W(this))return W(x)?V(this).j(V(x)):V(V(this).j(x));if(W(x))return V(this.j(V(x)));if(0>this.l(F)&&0>x.l(F))return _(this.m()*x.m());for(var I=this.g.length+x.g.length,R=[],P=0;P<2*I;P++)R[P]=0;for(P=0;P<this.g.length;P++)for(var D=0;D<x.g.length;D++){var b=this.i(P)>>>16,A=this.i(P)&65535,nt=x.i(D)>>>16,Ot=x.i(D)&65535;R[2*P+2*D]+=A*Ot,ne(R,2*P+2*D),R[2*P+2*D+1]+=b*Ot,ne(R,2*P+2*D+1),R[2*P+2*D+1]+=A*nt,ne(R,2*P+2*D+1),R[2*P+2*D+2]+=b*nt,ne(R,2*P+2*D+2)}for(P=0;P<I;P++)R[P]=R[2*P+1]<<16|R[2*P];for(P=I;P<2*I;P++)R[P]=0;return new h(R,0)};function ne(x,I){for(;(x[I]&65535)!=x[I];)x[I+1]+=x[I]>>>16,x[I]&=65535,I++}function Z(x,I){this.g=x,this.h=I}function ee(x,I){if(z(I))throw Error("division by zero");if(z(x))return new Z(T,T);if(W(x))return I=ee(V(x),I),new Z(V(I.g),V(I.h));if(W(I))return I=ee(x,V(I)),new Z(V(I.g),I.h);if(30<x.g.length){if(W(x)||W(I))throw Error("slowDivide_ only works with positive integers.");for(var R=k,P=I;0>=P.l(x);)R=we(R),P=we(P);var D=Ee(R,1),b=Ee(P,1);for(P=Ee(P,2),R=Ee(R,2);!z(P);){var A=b.add(P);0>=A.l(x)&&(D=D.add(R),b=A),P=Ee(P,1),R=Ee(R,1)}return I=ie(x,D.j(I)),new Z(D,I)}for(D=T;0<=x.l(I);){for(R=Math.max(1,Math.floor(x.m()/I.m())),P=Math.ceil(Math.log(R)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),b=_(R),A=b.j(I);W(A)||0<A.l(x);)R-=P,b=_(R),A=b.j(I);z(b)&&(b=k),D=D.add(b),x=ie(x,A)}return new Z(D,x)}r.A=function(x){return ee(this,x).h},r.and=function(x){for(var I=Math.max(this.g.length,x.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)&x.i(P);return new h(R,this.h&x.h)},r.or=function(x){for(var I=Math.max(this.g.length,x.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)|x.i(P);return new h(R,this.h|x.h)},r.xor=function(x){for(var I=Math.max(this.g.length,x.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)^x.i(P);return new h(R,this.h^x.h)};function we(x){for(var I=x.g.length+1,R=[],P=0;P<I;P++)R[P]=x.i(P)<<1|x.i(P-1)>>>31;return new h(R,x.h)}function Ee(x,I){var R=I>>5;I%=32;for(var P=x.g.length-R,D=[],b=0;b<P;b++)D[b]=0<I?x.i(b+R)>>>I|x.i(b+R+1)<<32-I:x.i(b+R);return new h(D,x.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,H_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,is=h}).apply(typeof Kg<"u"?Kg:typeof self<"u"?self:typeof window<"u"?window:{});var Cu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var K_,Da,G_,Uu,bd,Q_,Y_,X_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,y){return u==Array.prototype||u==Object.prototype||(u[p]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cu=="object"&&Cu];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,p){if(p)e:{var y=s;u=u.split(".");for(var E=0;E<u.length-1;E++){var M=u[E];if(!(M in y))break e;y=y[M]}u=u[u.length-1],E=y[u],p=p(E),p!=E&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var y=0,E=!1,M={next:function(){if(!E&&y<u.length){var $=y++;return{value:p($,u[$]),done:!1}}return E=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function _(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function w(u,p,y){return u.call.apply(u.bind,arguments)}function T(u,p,y){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,E),u.apply(p,M)}}return function(){return u.apply(p,arguments)}}function k(u,p,y){return k=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:T,k.apply(null,arguments)}function F(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function z(u,p){function y(){}y.prototype=p.prototype,u.aa=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(E,M,$){for(var te=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)te[Fe-2]=arguments[Fe];return p.prototype[M].apply(E,te)}}function W(u){const p=u.length;if(0<p){const y=Array(p);for(let E=0;E<p;E++)y[E]=u[E];return y}return[]}function V(u,p){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const M=u.length||0,$=E.length||0;u.length=M+$;for(let te=0;te<$;te++)u[M+te]=E[te]}else u.push(E)}}class ie{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function ne(u){return/^[\s\xa0]*$/.test(u)}function Z(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function ee(u){return ee[" "](u),u}ee[" "]=function(){};var we=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function Ee(u,p,y){for(const E in u)p.call(y,u[E],E,u)}function x(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function I(u){const p={};for(const y in u)p[y]=u[y];return p}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(u,p){let y,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(y in E)u[y]=E[y];for(let $=0;$<R.length;$++)y=R[$],Object.prototype.hasOwnProperty.call(E,y)&&(u[y]=E[y])}}function D(u){var p=1;u=u.split(":");const y=[];for(;0<p&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function b(u){f.setTimeout(()=>{throw u},0)}function A(){var u=me;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class nt{constructor(){this.h=this.g=null}add(p,y){const E=Ot.get();E.set(p,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Ot=new ie(()=>new Vt,u=>u.reset());class Vt{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,re=!1,me=new nt,oe=()=>{const u=f.Promise.resolve(void 0);Be=()=>{u.then(O)}};var O=()=>{for(var u;u=A();){try{u.h.call(u.g)}catch(y){b(y)}var p=Ot;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}re=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Ae=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};f.addEventListener("test",y,p),f.removeEventListener("test",y,p)}catch{}return u})();function Re(u,p){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(we){e:{try{ee(p.nodeName);var M=!0;break e}catch{}M=!1}M||(p=null)}}else y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement);this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ne[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Re.aa.h.call(this)}}z(Re,fe);var Ne={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function $e(u,p,y,E,M){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!E,this.ha=M,this.key=++Ue,this.da=this.fa=!1}function vt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function ur(u){this.src=u,this.g={},this.h=0}ur.prototype.add=function(u,p,y,E,M){var $=u.toString();u=this.g[$],u||(u=this.g[$]=[],this.h++);var te=Fr(u,p,E,M);return-1<te?(p=u[te],y||(p.fa=!1)):(p=new $e(p,this.src,$,!!E,M),p.fa=y,u.push(p)),p};function ms(u,p){var y=p.type;if(y in u.g){var E=u.g[y],M=Array.prototype.indexOf.call(E,p,void 0),$;($=0<=M)&&Array.prototype.splice.call(E,M,1),$&&(vt(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Fr(u,p,y,E){for(var M=0;M<u.length;++M){var $=u[M];if(!$.da&&$.listener==p&&$.capture==!!y&&$.ha==E)return M}return-1}var Ci="closure_lm_"+(1e6*Math.random()|0),gs={};function Vo(u,p,y,E,M){if(Array.isArray(p)){for(var $=0;$<p.length;$++)Vo(u,p[$],y,E,M);return null}return y=Mo(y),u&&u[Me]?u.K(p,y,_(E)?!!E.capture:!1,M):Lo(u,p,y,!1,E,M)}function Lo(u,p,y,E,M,$){if(!p)throw Error("Invalid event type");var te=_(M)?!!M.capture:!!M,Fe=_s(u);if(Fe||(u[Ci]=Fe=new ur(u)),y=Fe.add(p,y,E,te,$),y.proxy)return y;if(E=hl(),y.proxy=E,E.src=u,E.listener=y,u.addEventListener)Ae||(M=te),M===void 0&&(M=!1),u.addEventListener(p.toString(),E,M);else if(u.attachEvent)u.attachEvent(hr(p.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function hl(){function u(y){return p.call(u.src,u.listener,y)}const p=bo;return u}function ys(u,p,y,E,M){if(Array.isArray(p))for(var $=0;$<p.length;$++)ys(u,p[$],y,E,M);else E=_(E)?!!E.capture:!!E,y=Mo(y),u&&u[Me]?(u=u.i,p=String(p).toString(),p in u.g&&($=u.g[p],y=Fr($,y,E,M),-1<y&&(vt($[y]),Array.prototype.splice.call($,y,1),$.length==0&&(delete u.g[p],u.h--)))):u&&(u=_s(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Fr(p,y,E,M)),(y=-1<u?p[u]:null)&&cr(y))}function cr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Me])ms(p.i,u);else{var y=u.type,E=u.proxy;p.removeEventListener?p.removeEventListener(y,E,u.capture):p.detachEvent?p.detachEvent(hr(y),E):p.addListener&&p.removeListener&&p.removeListener(E),(y=_s(p))?(ms(y,u),y.h==0&&(y.src=null,p[Ci]=null)):vt(u)}}}function hr(u){return u in gs?gs[u]:gs[u]="on"+u}function bo(u,p){if(u.da)u=!0;else{p=new Re(p,this);var y=u.listener,E=u.ha||u.src;u.fa&&cr(u),u=y.call(E,p)}return u}function _s(u){return u=u[Ci],u instanceof ur?u:null}var vs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mo(u){return typeof u=="function"?u:(u[vs]||(u[vs]=function(p){return u.handleEvent(p)}),u[vs])}function dt(){H.call(this),this.i=new ur(this),this.M=this,this.F=null}z(dt,H),dt.prototype[Me]=!0,dt.prototype.removeEventListener=function(u,p,y,E){ys(this,u,p,y,E)};function ft(u,p){var y,E=u.F;if(E)for(y=[];E;E=E.F)y.push(E);if(u=u.M,E=p.type||p,typeof p=="string")p=new fe(p,u);else if(p instanceof fe)p.target=p.target||u;else{var M=p;p=new fe(E,u),P(p,M)}if(M=!0,y)for(var $=y.length-1;0<=$;$--){var te=p.g=y[$];M=dr(te,E,!0,p)&&M}if(te=p.g=u,M=dr(te,E,!0,p)&&M,M=dr(te,E,!1,p)&&M,y)for($=0;$<y.length;$++)te=p.g=y[$],M=dr(te,E,!1,p)&&M}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var y=u.g[p],E=0;E<y.length;E++)vt(y[E]);delete u.g[p],u.h--}}this.F=null},dt.prototype.K=function(u,p,y,E){return this.i.add(String(u),p,!1,y,E)},dt.prototype.L=function(u,p,y,E){return this.i.add(String(u),p,!0,y,E)};function dr(u,p,y,E){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var M=!0,$=0;$<p.length;++$){var te=p[$];if(te&&!te.da&&te.capture==y){var Fe=te.listener,pt=te.ha||te.src;te.fa&&ms(u.i,te),M=Fe.call(pt,E)!==!1&&M}}return M&&!E.defaultPrevented}function Uo(u,p,y){if(typeof u=="function")y&&(u=k(u,y));else if(u&&typeof u.handleEvent=="function")u=k(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function jr(u){u.g=Uo(()=>{u.g=null,u.i&&(u.i=!1,jr(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Pi extends H{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:jr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xi(u){H.call(this),this.h=u,this.g={}}z(xi,H);var Fo=[];function jo(u){Ee(u.g,function(p,y){this.g.hasOwnProperty(y)&&cr(p)},u),u.g={}}xi.prototype.N=function(){xi.aa.N.call(this),jo(this)},xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bo=f.JSON.stringify,zo=f.JSON.parse,$o=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Ni(){}Ni.prototype.h=null;function ws(u){return u.h||(u.h=u.i())}function Es(){}var hn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zn(){fe.call(this,"d")}z(zn,fe);function Ts(){fe.call(this,"c")}z(Ts,fe);var $n={},Wo=null;function Di(){return Wo=Wo||new dt}$n.La="serverreachability";function qo(u){fe.call(this,$n.La,u)}z(qo,fe);function fr(u){const p=Di();ft(p,new qo(p))}$n.STAT_EVENT="statevent";function Ho(u,p){fe.call(this,$n.STAT_EVENT,u),this.stat=p}z(Ho,fe);function rt(u){const p=Di();ft(p,new Ho(p,u))}$n.Ma="timingevent";function Is(u,p){fe.call(this,$n.Ma,u),this.size=p}z(Is,fe);function Tn(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function Oi(){this.g=!0}Oi.prototype.xa=function(){this.g=!1};function Vi(u,p,y,E,M,$){u.info(function(){if(u.g)if($)for(var te="",Fe=$.split("&"),pt=0;pt<Fe.length;pt++){var De=Fe[pt].split("=");if(1<De.length){var wt=De[0];De=De[1];var at=wt.split("_");te=2<=at.length&&at[1]=="type"?te+(wt+"="+De+"&"):te+(wt+"=redacted&")}}else te=null;else te=$;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+p+`
`+y+`
`+te})}function Ss(u,p,y,E,M,$,te){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+p+`
`+y+`
`+$+" "+te})}function In(u,p,y,E){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Vc(u,y)+(E?" "+E:"")})}function Ko(u,p){u.info(function(){return"TIMEOUT: "+p})}Oi.prototype.info=function(){};function Vc(u,p){if(!u.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var E=y[u];if(!(2>E.length)){var M=E[1];if(Array.isArray(M)&&!(1>M.length)){var $=M[0];if($!="noop"&&$!="stop"&&$!="close")for(var te=1;te<M.length;te++)M[te]=""}}}}return Bo(y)}catch{return p}}var As={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},dl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sn;function Li(){}z(Li,Ni),Li.prototype.g=function(){return new XMLHttpRequest},Li.prototype.i=function(){return{}},Sn=new Li;function An(u,p,y,E){this.j=u,this.i=p,this.l=y,this.R=E||1,this.U=new xi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fl}function fl(){this.i=null,this.g="",this.h=!1}var Go={},Rs={};function ks(u,p,y){u.L=1,u.v=qr(nn(p)),u.m=y,u.P=!0,Qo(u,null)}function Qo(u,p){u.F=Date.now(),We(u),u.A=nn(u.v);var y=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Kr(y.i,"t",E),u.C=0,y=u.j.J,u.h=new fl,u.g=Nl(u.j,y?p:null,!u.m),0<u.O&&(u.M=new Pi(k(u.Y,u,u.g),u.O)),p=u.U,y=u.g,E=u.ca;var M="readystatechange";Array.isArray(M)||(M&&(Fo[0]=M.toString()),M=Fo);for(var $=0;$<M.length;$++){var te=Vo(y,M[$],E||p.handleEvent,!1,p.h||p);if(!te)break;p.g[te.key]=te}p=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),fr(),Vi(u.i,u.u,u.A,u.l,u.R,u.m)}An.prototype.ca=function(u){u=u.target;const p=this.M;p&&Gt(u)==3?p.j():this.Y(u)},An.prototype.Y=function(u){try{if(u==this.g)e:{const at=Gt(this.g);var p=this.g.Ba();const pn=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||ta(this.g)))){this.J||at!=4||p==7||(p==8||0>=pn?fr(3):fr(2)),bi(this);var y=this.g.Z();this.X=y;t:if(pl(this)){var E=ta(this.g);u="";var M=E.length,$=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){dn(this),Br(this);var te="";break t}this.h.i=new f.TextDecoder}for(p=0;p<M;p++)this.h.h=!0,u+=this.h.i.decode(E[p],{stream:!($&&p==M-1)});E.length=0,this.h.g+=u,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=y==200,Ss(this.i,this.u,this.A,this.l,this.R,at,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,pt=this.g;if((Fe=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ne(Fe)){var De=Fe;break t}}De=null}if(y=De)In(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yo(this,y);else{this.o=!1,this.s=3,rt(12),dn(this),Br(this);break e}}if(this.P){y=!0;let sn;for(;!this.J&&this.C<te.length;)if(sn=Lc(this,te),sn==Rs){at==4&&(this.s=4,rt(14),y=!1),In(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==Go){this.s=4,rt(15),In(this.i,this.l,te,"[Invalid Chunk]"),y=!1;break}else In(this.i,this.l,sn,null),Yo(this,sn);if(pl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||te.length!=0||this.h.h||(this.s=1,rt(16),y=!1),this.o=this.o&&y,!y)In(this.i,this.l,te,"[Invalid Chunked Response]"),dn(this),Br(this);else if(0<te.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),ra(wt),wt.M=!0,rt(11))}}else In(this.i,this.l,te,null),Yo(this,te);at==4&&dn(this),this.o&&!this.J&&(at==4?Us(this.j,this):(this.o=!1,We(this)))}else Os(this.g),y==400&&0<te.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),dn(this),Br(this)}}}catch{}finally{}};function pl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Lc(u,p){var y=u.C,E=p.indexOf(`
`,y);return E==-1?Rs:(y=Number(p.substring(y,E)),isNaN(y)?Go:(E+=1,E+y>p.length?Rs:(p=p.slice(E,E+y),u.C=E+y,p)))}An.prototype.cancel=function(){this.J=!0,dn(this)};function We(u){u.S=Date.now()+u.I,ml(u,u.I)}function ml(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Tn(k(u.ba,u),p)}function bi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}An.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Ko(this.i,this.A),this.L!=2&&(fr(),rt(17)),dn(this),this.s=2,Br(this)):ml(this,this.S-u)};function Br(u){u.j.G==0||u.J||Us(u.j,u)}function dn(u){bi(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,jo(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function Yo(u,p){try{var y=u.j;if(y.G!=0&&(y.g==u||$t(y.h,u))){if(!u.K&&$t(y.h,u)&&y.G==3){try{var E=y.Da.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)Ms(y),xn(y);else break e;bs(y),rt(18)}}else y.za=M[1],0<y.za-y.T&&37500>M[2]&&y.F&&y.v==0&&!y.C&&(y.C=Tn(k(y.Za,y),6e3));if(1>=yl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else _r(y,11)}else if((u.K||y.g==u)&&Ms(y),!ne(p))for(M=y.Da.g.parse(p),p=0;p<M.length;p++){let De=M[p];if(y.T=De[0],De=De[1],y.G==2)if(De[0]=="c"){y.K=De[1],y.ia=De[2];const wt=De[3];wt!=null&&(y.la=wt,y.j.info("VER="+y.la));const at=De[4];at!=null&&(y.Aa=at,y.j.info("SVER="+y.Aa));const pn=De[5];pn!=null&&typeof pn=="number"&&0<pn&&(E=1.5*pn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const sn=u.g;if(sn){const $i=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($i){var $=E.h;$.g||$i.indexOf("spdy")==-1&&$i.indexOf("quic")==-1&&$i.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(Xo($,$.h),$.h=null))}if(E.D){const js=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;js&&(E.ya=js,ze(E.I,E.D,js))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var te=u;if(E.qa=xl(E,E.J?E.ia:null,E.W),te.K){_l(E.h,te);var Fe=te,pt=E.L;pt&&(Fe.I=pt),Fe.B&&(bi(Fe),We(Fe)),E.g=te}else zi(E);0<y.i.length&&Kn(y)}else De[0]!="stop"&&De[0]!="close"||_r(y,7);else y.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?_r(y,7):Rt(y):De[0]!="noop"&&y.l&&y.l.ta(De),y.v=0)}}fr(4)}catch{}}var gl=class{constructor(u,p){this.g=u,this.map=p}};function Mi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function tn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function yl(u){return u.h?1:u.g?u.g.size:0}function $t(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function Xo(u,p){u.g?u.g.add(p):u.h=p}function _l(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Mi.prototype.cancel=function(){if(this.i=vl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function vl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.D);return p}return W(u.i)}function Cs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],y=u.length,E=0;E<y;E++)p.push(u[E]);return p}p=[],y=0;for(E in u)p[y++]=u[E];return p}function Ps(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var y=0;y<u;y++)p.push(y);return p}p=[],y=0;for(const E in u)p[y++]=E;return p}}}function zr(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var y=Ps(u),E=Cs(u),M=E.length,$=0;$<M;$++)p.call(void 0,E[$],y&&y[$],u)}var Ui=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bc(u,p){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var E=u[y].indexOf("="),M=null;if(0<=E){var $=u[y].substring(0,E);M=u[y].substring(E+1)}else $=u[y];p($,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function pr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof pr){this.h=u.h,Fi(this,u.j),this.o=u.o,this.g=u.g,$r(this,u.s),this.l=u.l;var p=u.i,y=new Wn;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),Wr(this,y),this.m=u.m}else u&&(p=String(u).match(Ui))?(this.h=!1,Fi(this,p[1]||"",!0),this.o=Pe(p[2]||""),this.g=Pe(p[3]||"",!0),$r(this,p[4]),this.l=Pe(p[5]||"",!0),Wr(this,p[6]||"",!0),this.m=Pe(p[7]||"")):(this.h=!1,this.i=new Wn(null,this.h))}pr.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Hr(p,xs,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Hr(p,xs,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Hr(y,y.charAt(0)=="/"?Tl:El,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Hr(y,Jo)),u.join("")};function nn(u){return new pr(u)}function Fi(u,p,y){u.j=y?Pe(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function $r(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Wr(u,p,y){p instanceof Wn?(u.i=p,qn(u.i,u.h)):(y||(p=Hr(p,Il)),u.i=new Wn(p,u.h))}function ze(u,p,y){u.i.set(p,y)}function qr(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Pe(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Hr(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,wl),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function wl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var xs=/[#\/\?@]/g,El=/[#\?:]/g,Tl=/[#\?]/g,Il=/[#\?@]/g,Jo=/#/g;function Wn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function At(u){u.g||(u.g=new Map,u.h=0,u.i&&bc(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=Wn.prototype,r.add=function(u,p){At(this),this.i=null,u=fn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function Rn(u,p){At(u),p=fn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function kn(u,p){return At(u),p=fn(u,p),u.g.has(p)}r.forEach=function(u,p){At(this),this.g.forEach(function(y,E){y.forEach(function(M){u.call(p,M,E,this)},this)},this)},r.na=function(){At(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let E=0;E<p.length;E++){const M=u[E];for(let $=0;$<M.length;$++)y.push(p[E])}return y},r.V=function(u){At(this);let p=[];if(typeof u=="string")kn(this,u)&&(p=p.concat(this.g.get(fn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)p=p.concat(u[y])}return p},r.set=function(u,p){return At(this),this.i=null,u=fn(this,u),kn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Kr(u,p,y){Rn(u,p),0<y.length&&(u.i=null,u.g.set(fn(u,p),W(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var E=p[y];const $=encodeURIComponent(String(E)),te=this.V(E);for(E=0;E<te.length;E++){var M=$;te[E]!==""&&(M+="="+encodeURIComponent(String(te[E]))),u.push(M)}}return this.i=u.join("&")};function fn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function qn(u,p){p&&!u.j&&(At(u),u.i=null,u.g.forEach(function(y,E){var M=E.toLowerCase();E!=M&&(Rn(this,E),Kr(this,M,y))},u)),u.j=p}function Mc(u,p){const y=new Oi;if(f.Image){const E=new Image;E.onload=F(Kt,y,"TestLoadImage: loaded",!0,p,E),E.onerror=F(Kt,y,"TestLoadImage: error",!1,p,E),E.onabort=F(Kt,y,"TestLoadImage: abort",!1,p,E),E.ontimeout=F(Kt,y,"TestLoadImage: timeout",!1,p,E),f.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else p(!1)}function Sl(u,p){const y=new Oi,E=new AbortController,M=setTimeout(()=>{E.abort(),Kt(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:E.signal}).then($=>{clearTimeout(M),$.ok?Kt(y,"TestPingServer: ok",!0,p):Kt(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),Kt(y,"TestPingServer: error",!1,p)})}function Kt(u,p,y,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(y)}catch{}}function Uc(){this.g=new $o}function Al(u,p,y){const E=y||"";try{zr(u,function(M,$){let te=M;_(M)&&(te=Bo(M)),p.push(E+$+"="+encodeURIComponent(te))})}catch(M){throw p.push(E+"type="+encodeURIComponent("_badmap")),M}}function mr(u){this.l=u.Ub||null,this.j=u.eb||!1}z(mr,Ni),mr.prototype.g=function(){return new ji(this.l,this.j)},mr.prototype.i=(function(u){return function(){return u}})({});function ji(u,p){dt.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}z(ji,dt),r=ji.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Pn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Cn(this):Pn(this),this.readyState==3&&Rl(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Cn(this))},r.Qa=function(u){this.g&&(this.response=u,Cn(this))},r.ga=function(){this.g&&Cn(this)};function Cn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Pn(u)}r.setRequestHeader=function(u,p){this.u.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function Pn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function gr(u){let p="";return Ee(u,function(y,E){p+=E,p+=":",p+=y,p+=`\r
`}),p}function Gr(u,p,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=gr(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):ze(u,p,y))}function Qe(u){dt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}z(Qe,dt);var Fc=/^https?$/i,Zo=["POST","PUT"];r=Qe.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,p,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sn.g(),this.v=this.o?ws(this.o):ws(Sn),this.g.onreadystatechange=k(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch($){Bi(this,$);return}if(u=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)y.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const $ of E.keys())y.set($,E.get($));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find($=>$.toLowerCase()=="content-type"),M=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(Zo,p,void 0))||E||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,te]of y)this.g.setRequestHeader($,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ds(this),this.u=!0,this.g.send(u),this.u=!1}catch($){Bi(this,$)}};function Bi(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Ns(u),rn(u)}function Ns(u){u.A||(u.A=!0,ft(u,"complete"),ft(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ft(this,"complete"),ft(this,"abort"),rn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rn(this,!0)),Qe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ea(this):this.bb())},r.bb=function(){ea(this)};function ea(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Gt(u)!=4||u.Z()!=2)){if(u.u&&Gt(u)==4)Uo(u.Ea,0,u);else if(ft(u,"readystatechange"),Gt(u)==4){u.h=!1;try{const te=u.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var E;if(E=te===0){var M=String(u.D).match(Ui)[1]||null;!M&&f.self&&f.self.location&&(M=f.self.location.protocol.slice(0,-1)),E=!Fc.test(M?M.toLowerCase():"")}y=E}if(y)ft(u,"complete"),ft(u,"success");else{u.m=6;try{var $=2<Gt(u)?u.g.statusText:""}catch{$=""}u.l=$+" ["+u.Z()+"]",Ns(u)}}finally{rn(u)}}}}function rn(u,p){if(u.g){Ds(u);const y=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||ft(u,"ready");try{y.onreadystatechange=E}catch{}}}function Ds(u){u.I&&(f.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Gt(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),zo(p)}};function ta(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Os(u){const p={};u=(u.g&&2<=Gt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(ne(u[E]))continue;var y=D(u[E]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const $=p[M]||[];p[M]=$,$.push(y)}x(p,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hn(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function na(u){this.Aa=0,this.i=[],this.j=new Oi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Hn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Hn("baseRetryDelayMs",5e3,u),this.cb=Hn("retryDelaySeedMs",1e4,u),this.Wa=Hn("forwardChannelMaxRetries",2,u),this.wa=Hn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Mi(u&&u.concurrentRequestLimit),this.Da=new Uc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=na.prototype,r.la=8,r.G=1,r.connect=function(u,p,y,E){rt(0),this.W=u,this.H=p||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=xl(this,null,this.W),Kn(this)};function Rt(u){if(Vs(u),u.G==3){var p=u.U++,y=nn(u.I);if(ze(y,"SID",u.K),ze(y,"RID",p),ze(y,"TYPE","terminate"),yr(u,y),p=new An(u,u.j,p),p.L=2,p.v=qr(nn(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=p.v,y=!0),y||(p.g=Nl(p.j,null),p.g.ea(p.v)),p.F=Date.now(),We(p)}Pl(u)}function xn(u){u.g&&(ra(u),u.g.cancel(),u.g=null)}function Vs(u){xn(u),u.u&&(f.clearTimeout(u.u),u.u=null),Ms(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Kn(u){if(!tn(u.h)&&!u.s){u.s=!0;var p=u.Ga;Be||oe(),re||(Be(),re=!0),me.add(p,u),u.B=0}}function jc(u,p){return yl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Tn(k(u.Ga,u,p),Cl(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const M=new An(this,this.j,u);let $=this.o;if(this.S&&($?($=I($),P($,this.S)):$=this.S),this.m!==null||this.O||(M.H=$,$=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=Qr(this,M,p),y=nn(this.I),ze(y,"RID",u),ze(y,"CVER",22),this.D&&ze(y,"X-HTTP-Session-Id",this.D),yr(this,y),$&&(this.O?p="headers="+encodeURIComponent(String(gr($)))+"&"+p:this.m&&Gr(y,this.m,$)),Xo(this.h,M),this.Ua&&ze(y,"TYPE","init"),this.P?(ze(y,"$req",p),ze(y,"SID","null"),M.T=!0,ks(M,y,null)):ks(M,y,p),this.G=2}}else this.G==3&&(u?Ls(this,u):this.i.length==0||tn(this.h)||Ls(this))};function Ls(u,p){var y;p?y=p.l:y=u.U++;const E=nn(u.I);ze(E,"SID",u.K),ze(E,"RID",y),ze(E,"AID",u.T),yr(u,E),u.m&&u.o&&Gr(E,u.m,u.o),y=new An(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),p&&(u.i=p.D.concat(u.i)),p=Qr(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Xo(u.h,y),ks(y,E,p)}function yr(u,p){u.H&&Ee(u.H,function(y,E){ze(p,E,y)}),u.l&&zr({},function(y,E){ze(p,E,y)})}function Qr(u,p,y){y=Math.min(u.i.length,y);var E=u.l?k(u.l.Na,u.l,u):null;e:{var M=u.i;let $=-1;for(;;){const te=["count="+y];$==-1?0<y?($=M[0].g,te.push("ofs="+$)):$=0:te.push("ofs="+$);let Fe=!0;for(let pt=0;pt<y;pt++){let De=M[pt].g;const wt=M[pt].map;if(De-=$,0>De)$=Math.max(0,M[pt].g-100),Fe=!1;else try{Al(wt,te,"req"+De+"_")}catch{E&&E(wt)}}if(Fe){E=te.join("&");break e}}}return u=u.i.splice(0,y),p.D=u,E}function zi(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;Be||oe(),re||(Be(),re=!0),me.add(p,u),u.v=0}}function bs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Tn(k(u.Fa,u),Cl(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,kl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Tn(k(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),xn(this),kl(this))};function ra(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function kl(u){u.g=new An(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=nn(u.qa);ze(p,"RID","rpc"),ze(p,"SID",u.K),ze(p,"AID",u.T),ze(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(p,"TO",u.ja),ze(p,"TYPE","xmlhttp"),yr(u,p),u.m&&u.o&&Gr(p,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=qr(nn(p)),y.m=null,y.P=!0,Qo(y,u)}r.Za=function(){this.C!=null&&(this.C=null,xn(this),bs(this),rt(19))};function Ms(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Us(u,p){var y=null;if(u.g==p){Ms(u),ra(u),u.g=null;var E=2}else if($t(u.h,p))y=p.D,_l(u.h,p),E=1;else return;if(u.G!=0){if(p.o)if(E==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var M=u.B;E=Di(),ft(E,new Is(E,y)),Kn(u)}else zi(u);else if(M=p.s,M==3||M==0&&0<p.X||!(E==1&&jc(u,p)||E==2&&bs(u)))switch(y&&0<y.length&&(p=u.h,p.i=p.i.concat(y)),M){case 1:_r(u,5);break;case 4:_r(u,10);break;case 3:_r(u,6);break;default:_r(u,2)}}}function Cl(u,p){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*p}function _r(u,p){if(u.j.info("Error code "+p),p==2){var y=k(u.fb,u),E=u.Xa;const M=!E;E=new pr(E||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Fi(E,"https"),qr(E),M?Mc(E.toString(),y):Sl(E.toString(),y)}else rt(2);u.G=0,u.l&&u.l.sa(p),Pl(u),Vs(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Pl(u){if(u.G=0,u.ka=[],u.l){const p=vl(u.h);(p.length!=0||u.i.length!=0)&&(V(u.ka,p),V(u.ka,u.i),u.h.i.length=0,W(u.i),u.i.length=0),u.l.ra()}}function xl(u,p,y){var E=y instanceof pr?nn(y):new pr(y);if(E.g!="")p&&(E.g=p+"."+E.g),$r(E,E.s);else{var M=f.location;E=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;var $=new pr(null);E&&Fi($,E),p&&($.g=p),M&&$r($,M),y&&($.l=y),E=$}return y=u.D,p=u.ya,y&&p&&ze(E,y,p),ze(E,"VER",u.la),yr(u,E),E}function Nl(u,p,y){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Qe(new mr({eb:y})):new Qe(u.pa),p.Ha(u.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ia(){}r=ia.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Fs(){}Fs.prototype.g=function(u,p){return new Wt(u,p)};function Wt(u,p){dt.call(this),this.g=new na(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!ne(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!ne(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Gn(this)}z(Wt,dt),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){Rt(this.g)},Wt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Bo(u),u=y);p.i.push(new gl(p.Ya++,u)),p.G==3&&Kn(p)},Wt.prototype.N=function(){this.g.l=null,delete this.j,Rt(this.g),delete this.g,Wt.aa.N.call(this)};function Dl(u){zn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}z(Dl,zn);function Ol(){Ts.call(this),this.status=1}z(Ol,Ts);function Gn(u){this.g=u}z(Gn,ia),Gn.prototype.ua=function(){ft(this.g,"a")},Gn.prototype.ta=function(u){ft(this.g,new Dl(u))},Gn.prototype.sa=function(u){ft(this.g,new Ol)},Gn.prototype.ra=function(){ft(this.g,"b")},Fs.prototype.createWebChannel=Fs.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,X_=function(){return new Fs},Y_=function(){return Di()},Q_=$n,bd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},As.NO_ERROR=0,As.TIMEOUT=8,As.HTTP_ERROR=6,Uu=As,dl.COMPLETE="complete",G_=dl,Es.EventType=hn,hn.OPEN="a",hn.CLOSE="b",hn.ERROR="c",hn.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Da=Es,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,K_=Qe}).apply(typeof Cu<"u"?Cu:typeof self<"u"?self:typeof window<"u"?window:{});const Gg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jt.UNAUTHENTICATED=new jt(null),jt.GOOGLE_CREDENTIALS=new jt("google-credentials-uid"),jt.FIRST_PARTY=new jt("first-party-uid"),jt.MOCK_USER=new jt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=new tf("@firebase/firestore");function Pa(){return as.logLevel}function he(r,...e){if(as.logLevel<=xe.DEBUG){const t=e.map(pf);as.debug(`Firestore (${xo}): ${r}`,...t)}}function Vr(r,...e){if(as.logLevel<=xe.ERROR){const t=e.map(pf);as.error(`Firestore (${xo}): ${r}`,...t)}}function vo(r,...e){if(as.logLevel<=xe.WARN){const t=e.map(pf);as.warn(`Firestore (${xo}): ${r}`,...t)}}function pf(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(r="Unexpected state"){const e=`FIRESTORE (${xo}) INTERNAL ASSERTION FAILED: `+r;throw Vr(e),new Error(e)}function je(r,e){r||Te()}function Se(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends ar{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class O1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(jt.UNAUTHENTICATED)))}shutdown(){}}class V1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class L1{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){je(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new Ti;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ti,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ti)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(je(typeof s.accessToken=="string"),new J_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string"),new jt(e)}}class b1{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class M1{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new b1(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(jt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class U1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class F1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){je(this.o===void 0);const s=l=>{l.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.R;return this.R=l.token,he("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(je(typeof t.token=="string"),this.R=t.token,new U1(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=j1(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%e.length))}return s}}function be(r,e){return r<e?-1:r>e?1:0}function wo(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ue(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new _t(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new _t(0,0))}static max(){return new Ie(new _t(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,t,s){t===void 0?t=0:t>e.length&&Te(),s===void 0?s=e.length-t:s>e.length-t&&Te(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return qa.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof qa?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=e.get(o),h=t.get(o);if(l<h)return-1;if(l>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ge extends qa{construct(e,t,s){return new Ge(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ue(K.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Ge(t)}static emptyPath(){return new Ge([])}}const B1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends qa{construct(e,t,s){return new xt(e,t,s)}static isValidIdentifier(e){return B1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xt(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new ue(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ue(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ue(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(s+=f,o++):(l(),o++)}if(l(),h)throw new ue(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(t)}static emptyPath(){return new xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(Ge.fromString(e))}static fromName(e){return new pe(Ge.fromString(e).popFirst(5))}static empty(){return new pe(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new Ge(e.slice()))}}function z1(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(s===1e9?new _t(t+1,0):new _t(t,s));return new Ai(o,pe.empty(),e)}function $1(r){return new Ai(r.readTime,r.key,-1)}class Ai{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ai(Ie.min(),pe.empty(),-1)}static max(){return new Ai(Ie.max(),pe.empty(),-1)}}function W1(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(r.documentKey,e.documentKey),t!==0?t:be(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class H1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rl(r){if(r.code!==K.FAILED_PRECONDITION||r.message!==q1)throw r;he("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Y(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Y?t:Y.resolve(t)}catch(t){return Y.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Y.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Y.reject(t)}static resolve(e){return new Y(((t,s)=>{t(e)}))}static reject(e){return new Y(((t,s)=>{s(e)}))}static waitFor(e){return new Y(((t,s)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(g=>s(g)))})),h=!0,l===o&&t()}))}static or(e){let t=Y.resolve(!1);for(const s of e)t=t.next((o=>o?Y.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new Y(((s,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next((w=>{h[_]=w,++f,f===l&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new Y(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function K1(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function il(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class mf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}mf.oe=-1;function vc(r){return r==null}function Zu(r){return r===0&&1/r==-1/0}function G1(r){return typeof r=="number"&&Number.isInteger(r)&&!Zu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function ds(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function ev(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pu(this.root,e,this.comparator,!0)}}class Pu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Pt.RED,this.left=o??Pt.EMPTY,this.right=l??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Pt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(e,t,s,o,l){return this}insert(e,t,s){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Yg(this.data.getIterator())}getIteratorFrom(e){return new Yg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Nt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Nt(this.comparator);return t.data=e,t}}class Yg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new Un([])}unionWith(e){let t=new Nt(xt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Un(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return wo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class tv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new tv("Invalid base64 string: "+l):l}})(e);return new Dt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const Q1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ri(r){if(je(!!r),typeof r=="string"){let e=0;const t=Q1.exec(r);if(je(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:st(r.seconds),nanos:st(r.nanos)}}function st(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ls(r){return typeof r=="string"?Dt.fromBase64String(r):Dt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function yf(r){const e=r.mapValue.fields.__previous_value__;return gf(e)?yf(e):e}function Ha(r){const e=Ri(r.mapValue.fields.__local_write_time__.timestampValue);return new _t(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e,t,s,o,l,h,f,g,_){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=_}}class Ka{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ka("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ka&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu={mapValue:{}};function us(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?gf(r)?4:J1(r)?9007199254740991:X1(r)?10:11:Te()}function ir(r,e){if(r===e)return!0;const t=us(r);if(t!==us(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ha(r).isEqual(Ha(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ri(o.timestampValue),f=Ri(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return ls(o.bytesValue).isEqual(ls(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return st(o.geoPointValue.latitude)===st(l.geoPointValue.latitude)&&st(o.geoPointValue.longitude)===st(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return st(o.integerValue)===st(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=st(o.doubleValue),f=st(l.doubleValue);return h===f?Zu(h)===Zu(f):isNaN(h)&&isNaN(f)}return!1})(r,e);case 9:return wo(r.arrayValue.values||[],e.arrayValue.values||[],ir);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Qg(h)!==Qg(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!ir(h[g],f[g])))return!1;return!0})(r,e);default:return Te()}}function Ga(r,e){return(r.values||[]).find((t=>ir(t,e)))!==void 0}function Eo(r,e){if(r===e)return 0;const t=us(r),s=us(e);if(t!==s)return be(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return be(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=st(l.integerValue||l.doubleValue),g=st(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(r,e);case 3:return Xg(r.timestampValue,e.timestampValue);case 4:return Xg(Ha(r),Ha(e));case 5:return be(r.stringValue,e.stringValue);case 6:return(function(l,h){const f=ls(l),g=ls(h);return f.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),g=h.split("/");for(let _=0;_<f.length&&_<g.length;_++){const w=be(f[_],g[_]);if(w!==0)return w}return be(f.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=be(st(l.latitude),st(h.latitude));return f!==0?f:be(st(l.longitude),st(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Jg(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var f,g,_,w;const T=l.fields||{},k=h.fields||{},F=(f=T.value)===null||f===void 0?void 0:f.arrayValue,z=(g=k.value)===null||g===void 0?void 0:g.arrayValue,W=be(((_=F==null?void 0:F.values)===null||_===void 0?void 0:_.length)||0,((w=z==null?void 0:z.values)===null||w===void 0?void 0:w.length)||0);return W!==0?W:Jg(F,z)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===xu.mapValue&&h===xu.mapValue)return 0;if(l===xu.mapValue)return 1;if(h===xu.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let T=0;T<g.length&&T<w.length;++T){const k=be(g[T],w[T]);if(k!==0)return k;const F=Eo(f[g[T]],_[w[T]]);if(F!==0)return F}return be(g.length,w.length)})(r.mapValue,e.mapValue);default:throw Te()}}function Xg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return be(r,e);const t=Ri(r),s=Ri(e),o=be(t.seconds,s.seconds);return o!==0?o:be(t.nanos,s.nanos)}function Jg(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=Eo(t[o],s[o]);if(l)return l}return be(t.length,s.length)}function To(r){return Md(r)}function Md(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=Ri(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return ls(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return pe.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=Md(l);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${Md(t.fields[h])}`;return o+"}"})(r.mapValue):Te()}function Zg(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Ud(r){return!!r&&"integerValue"in r}function _f(r){return!!r&&"arrayValue"in r}function ey(r){return!!r&&"nullValue"in r}function ty(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Fu(r){return!!r&&"mapValue"in r}function X1(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ba(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return ds(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=ba(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ba(r.arrayValue.values[t]);return e}return Object.assign({},r)}function J1(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.value=e}static empty(){return new un({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Fu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ba(t)}setAll(e){let t=xt.emptyPath(),s={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=f.popLast()}h?s[f.lastSegment()]=ba(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());Fu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ir(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Fu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ds(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new un(ba(this.value))}}function nv(r){const e=[];return ds(r.fields,((t,s)=>{const o=new xt([t]);if(Fu(s)){const l=nv(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new Un(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,s,o,l,h,f){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Bt(e,0,Ie.min(),Ie.min(),Ie.min(),un.empty(),0)}static newFoundDocument(e,t,s,o){return new Bt(e,1,t,Ie.min(),s,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,Ie.min(),Ie.min(),un.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,Ie.min(),Ie.min(),un.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=un.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ec{constructor(e,t){this.position=e,this.inclusive=t}}function ny(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=pe.comparator(pe.fromName(h.referenceValue),t.key):s=Eo(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function ry(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!ir(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class tc{constructor(e,t="asc"){this.field=e,this.dir=t}}function Z1(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class rv{}class ct extends rv{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new tA(e,t,s):t==="array-contains"?new iA(e,s):t==="in"?new sA(e,s):t==="not-in"?new oA(e,s):t==="array-contains-any"?new aA(e,s):new ct(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new nA(e,s):new rA(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Eo(t,this.value)):t!==null&&us(this.value)===us(t)&&this.matchesComparison(Eo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bn extends rv{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Bn(e,t)}matches(e){return iv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function iv(r){return r.op==="and"}function sv(r){return eA(r)&&iv(r)}function eA(r){for(const e of r.filters)if(e instanceof Bn)return!1;return!0}function Fd(r){if(r instanceof ct)return r.field.canonicalString()+r.op.toString()+To(r.value);if(sv(r))return r.filters.map((e=>Fd(e))).join(",");{const e=r.filters.map((t=>Fd(t))).join(",");return`${r.op}(${e})`}}function ov(r,e){return r instanceof ct?(function(s,o){return o instanceof ct&&s.op===o.op&&s.field.isEqual(o.field)&&ir(s.value,o.value)})(r,e):r instanceof Bn?(function(s,o){return o instanceof Bn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,h,f)=>l&&ov(h,o.filters[f])),!0):!1})(r,e):void Te()}function av(r){return r instanceof ct?(function(t){return`${t.field.canonicalString()} ${t.op} ${To(t.value)}`})(r):r instanceof Bn?(function(t){return t.op.toString()+" {"+t.getFilters().map(av).join(" ,")+"}"})(r):"Filter"}class tA extends ct{constructor(e,t,s){super(e,t,s),this.key=pe.fromName(s.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class nA extends ct{constructor(e,t){super(e,"in",t),this.keys=lv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class rA extends ct{constructor(e,t){super(e,"not-in",t),this.keys=lv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function lv(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>pe.fromName(s.referenceValue)))}class iA extends ct{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return _f(t)&&Ga(t.arrayValue,this.value)}}class sA extends ct{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ga(this.value.arrayValue,t)}}class oA extends ct{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ga(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ga(this.value.arrayValue,t)}}class aA extends ct{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!_f(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Ga(this.value.arrayValue,s)))}}/**
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
 */class lA{constructor(e,t=null,s=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.ue=null}}function iy(r,e=null,t=[],s=[],o=null,l=null,h=null){return new lA(r,e,t,s,o,l,h)}function vf(r){const e=Se(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Fd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),vc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>To(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>To(s))).join(",")),e.ue=t}return e.ue}function wf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!Z1(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!ov(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!ry(r.startAt,e.startAt)&&ry(r.endAt,e.endAt)}function jd(r){return pe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t=null,s=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function uA(r,e,t,s,o,l,h,f){return new sl(r,e,t,s,o,l,h,f)}function uv(r){return new sl(r)}function sy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function cv(r){return r.collectionGroup!==null}function Ma(r){const e=Se(r);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new Nt(xt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(f=f.add(_.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new tc(l,s))})),t.has(xt.keyField().canonicalString())||e.ce.push(new tc(xt.keyField(),s))}return e.ce}function nr(r){const e=Se(r);return e.le||(e.le=cA(e,Ma(r))),e.le}function cA(r,e){if(r.limitType==="F")return iy(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new tc(o.field,l)}));const t=r.endAt?new ec(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new ec(r.startAt.position,r.startAt.inclusive):null;return iy(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Bd(r,e){const t=r.filters.concat([e]);return new sl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function zd(r,e,t){return new sl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function wc(r,e){return wf(nr(r),nr(e))&&r.limitType===e.limitType}function hv(r){return`${vf(nr(r))}|lt:${r.limitType}`}function ao(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>av(o))).join(", ")}]`),vc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>To(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>To(o))).join(",")),`Target(${s})`})(nr(r))}; limitType=${r.limitType})`}function Ec(r,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):pe.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(r,e)&&(function(s,o){for(const l of Ma(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,f,g){const _=ny(h,f,g);return h.inclusive?_<=0:_<0})(s.startAt,Ma(s),o)||s.endAt&&!(function(h,f,g){const _=ny(h,f,g);return h.inclusive?_>=0:_>0})(s.endAt,Ma(s),o))})(r,e)}function hA(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function dv(r){return(e,t)=>{let s=!1;for(const o of Ma(r)){const l=dA(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function dA(r,e,t){const s=r.field.isKeyField()?pe.comparator(e.key,t.key):(function(l,h,f){const g=h.data.field(l),_=f.data.field(l);return g!==null&&_!==null?Eo(g,_):Te()})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ds(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return ev(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=new et(pe.comparator);function Lr(){return fA}const fv=new et(pe.comparator);function Oa(...r){let e=fv;for(const t of r)e=e.insert(t.key,t);return e}function pv(r){let e=fv;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function rs(){return Ua()}function mv(){return Ua()}function Ua(){return new No((r=>r.toString()),((r,e)=>r.isEqual(e)))}const pA=new et(pe.comparator),mA=new Nt(pe.comparator);function Ce(...r){let e=mA;for(const t of r)e=e.add(t);return e}const gA=new Nt(be);function yA(){return gA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zu(e)?"-0":e}}function gv(r){return{integerValue:""+r}}function _A(r,e){return G1(e)?gv(e):Ef(r,e)}/**
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
 */class Tc{constructor(){this._=void 0}}function vA(r,e,t){return r instanceof nc?(function(o,l){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&gf(l)&&(l=yf(l)),l&&(h.fields.__previous_value__=l),{mapValue:h}})(t,e):r instanceof Qa?_v(r,e):r instanceof Ya?vv(r,e):(function(o,l){const h=yv(o,l),f=oy(h)+oy(o.Pe);return Ud(h)&&Ud(o.Pe)?gv(f):Ef(o.serializer,f)})(r,e)}function wA(r,e,t){return r instanceof Qa?_v(r,e):r instanceof Ya?vv(r,e):t}function yv(r,e){return r instanceof rc?(function(s){return Ud(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class nc extends Tc{}class Qa extends Tc{constructor(e){super(),this.elements=e}}function _v(r,e){const t=wv(e);for(const s of r.elements)t.some((o=>ir(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Ya extends Tc{constructor(e){super(),this.elements=e}}function vv(r,e){let t=wv(e);for(const s of r.elements)t=t.filter((o=>!ir(o,s)));return{arrayValue:{values:t}}}class rc extends Tc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function oy(r){return st(r.integerValue||r.doubleValue)}function wv(r){return _f(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function EA(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof Qa&&o instanceof Qa||s instanceof Ya&&o instanceof Ya?wo(s.elements,o.elements,ir):s instanceof rc&&o instanceof rc?ir(s.Pe,o.Pe):s instanceof nc&&o instanceof nc})(r.transform,e.transform)}class TA{constructor(e,t){this.version=e,this.transformResults=t}}class Nr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Nr}static exists(e){return new Nr(void 0,e)}static updateTime(e){return new Nr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ju(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Ic{}function Ev(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Iv(r.key,Nr.none()):new Sc(r.key,r.data,Nr.none());{const t=r.data,s=un.empty();let o=new Nt(xt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new fs(r.key,s,new Un(o.toArray()),Nr.none())}}function IA(r,e,t){r instanceof Sc?(function(o,l,h){const f=o.value.clone(),g=ly(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(r,e,t):r instanceof fs?(function(o,l,h){if(!ju(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=ly(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(Tv(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Fa(r,e,t,s){return r instanceof Sc?(function(l,h,f,g){if(!ju(l.precondition,h))return f;const _=l.value.clone(),w=uy(l.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,s):r instanceof fs?(function(l,h,f,g){if(!ju(l.precondition,h))return f;const _=uy(l.fieldTransforms,g,h),w=h.data;return w.setAll(Tv(l)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(r,e,t,s):(function(l,h,f){return ju(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(r,e,t)}function SA(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=yv(s.transform,o||null);l!=null&&(t===null&&(t=un.empty()),t.set(s.field,l))}return t||null}function ay(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&wo(s,o,((l,h)=>EA(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Sc extends Ic{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class fs extends Ic{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Tv(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function ly(r,e,t){const s=new Map;je(r.length===t.length);for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);s.set(l.field,wA(h,f,t[o]))}return s}function uy(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,vA(l,h,e))}return s}class Iv extends Ic{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class AA extends Ic{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&IA(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Fa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Fa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=mv();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=Ev(h,f);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ie.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ce())}isEqual(e){return this.batchId===e.batchId&&wo(this.mutations,e.mutations,((t,s)=>ay(t,s)))&&wo(this.baseMutations,e.baseMutations,((t,s)=>ay(t,s)))}}class Tf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){je(e.mutations.length===s.length);let o=(function(){return pA})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new Tf(e,t,s,o)}}/**
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
 */class kA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class CA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,Oe;function PA(r){switch(r){default:return Te();case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0}}function Sv(r){if(r===void 0)return Vr("GRPC error has no .code"),K.UNKNOWN;switch(r){case ut.OK:return K.OK;case ut.CANCELLED:return K.CANCELLED;case ut.UNKNOWN:return K.UNKNOWN;case ut.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case ut.INTERNAL:return K.INTERNAL;case ut.UNAVAILABLE:return K.UNAVAILABLE;case ut.UNAUTHENTICATED:return K.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case ut.NOT_FOUND:return K.NOT_FOUND;case ut.ALREADY_EXISTS:return K.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return K.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case ut.ABORTED:return K.ABORTED;case ut.OUT_OF_RANGE:return K.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return K.UNIMPLEMENTED;case ut.DATA_LOSS:return K.DATA_LOSS;default:return Te()}}(Oe=ut||(ut={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function xA(){return new TextEncoder}/**
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
 */const NA=new is([4294967295,4294967295],0);function cy(r){const e=xA().encode(r),t=new H_;return t.update(e),new Uint8Array(t.digest())}function hy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new is([t,s],0),new is([o,l],0)]}class If{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Va(`Invalid padding: ${t}`);if(s<0)throw new Va(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Va(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Va(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=is.fromNumber(this.Ie)}Ee(e,t,s){let o=e.add(t.multiply(is.fromNumber(s)));return o.compare(NA)===1&&(o=new is([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=cy(e),[s,o]=hy(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(s,o,l);if(!this.de(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new If(l,o,t);return s.forEach((f=>h.insert(f))),h}insert(e){if(this.Ie===0)return;const t=cy(e),[s,o]=hy(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(s,o,l);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Va extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,ol.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ac(Ie.min(),o,new et(be),Lr(),Ce())}}class ol{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ol(s,t,Ce(),Ce(),Ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,t,s,o){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=o}}class Av{constructor(e,t){this.targetId=e,this.me=t}}class Rv{constructor(e,t,s=Dt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class dy{constructor(){this.fe=0,this.ge=py(),this.pe=Dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ce(),t=Ce(),s=Ce();return this.ge.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:Te()}})),new ol(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=py()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,je(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class DA{constructor(e){this.Le=e,this.Be=new Map,this.ke=Lr(),this.qe=fy(),this.Qe=new et(be)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const s=this.Ge(t);switch(e.state){case 0:this.ze(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),s.De(e.resumeToken));break;default:Te()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((s,o)=>{this.ze(o)&&t(o)}))}He(e){const t=e.targetId,s=e.me.count,o=this.Je(t);if(o){const l=o.target;if(jd(l))if(s===0){const h=new pe(l.path);this.Ue(t,h,Bt.newNoDocument(h,Ie.min()))}else je(s===1);else{const h=this.Ye(t);if(h!==s){const f=this.Ze(e),g=f?this.Xe(f,e,h):1;if(g!==0){this.je(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,_)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=ls(s).toUint8Array()}catch(g){if(g instanceof tv)return vo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new If(h,o,l)}catch(g){return vo(g instanceof Va?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.Ie===0?null:f}Xe(e,t,s){return t.me.count===s-this.nt(e,t.targetId)?0:2}nt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const h=this.Le.tt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Ue(t,l,null),o++)})),o}rt(e){const t=new Map;this.Be.forEach(((l,h)=>{const f=this.Je(h);if(f){if(l.current&&jd(f.target)){const g=new pe(f.target.path);this.ke.get(g)!==null||this.it(h,g)||this.Ue(h,g,Bt.newNoDocument(g,e))}l.be&&(t.set(h,l.ve()),l.Ce())}}));let s=Ce();this.qe.forEach(((l,h)=>{let f=!0;h.forEachWhile((g=>{const _=this.Je(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(s=s.add(l))})),this.ke.forEach(((l,h)=>h.setReadTime(e)));const o=new Ac(e,t,this.Qe,this.ke,s);return this.ke=Lr(),this.qe=fy(),this.Qe=new et(be),o}$e(e,t){if(!this.ze(e))return;const s=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,s){if(!this.ze(e))return;const o=this.Ge(e);this.it(e,t)?o.Fe(t,1):o.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new dy,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Nt(be),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||he("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new dy),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function fy(){return new et(pe.comparator)}function py(){return new et(pe.comparator)}const OA={asc:"ASCENDING",desc:"DESCENDING"},VA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},LA={and:"AND",or:"OR"};class bA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function $d(r,e){return r.useProto3Json||vc(e)?e:{value:e}}function ic(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function MA(r,e){return ic(r,e.toTimestamp())}function rr(r){return je(!!r),Ie.fromTimestamp((function(t){const s=Ri(t);return new _t(s.seconds,s.nanos)})(r))}function Sf(r,e){return Wd(r,e).canonicalString()}function Wd(r,e){const t=(function(o){return new Ge(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Cv(r){const e=Ge.fromString(r);return je(Ov(e)),e}function qd(r,e){return Sf(r.databaseId,e.path)}function vd(r,e){const t=Cv(e);if(t.get(1)!==r.databaseId.projectId)throw new ue(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ue(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new pe(xv(t))}function Pv(r,e){return Sf(r.databaseId,e)}function UA(r){const e=Cv(r);return e.length===4?Ge.emptyPath():xv(e)}function Hd(r){return new Ge(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function xv(r){return je(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function my(r,e,t){return{name:qd(r,e),fields:t.value.mapValue.fields}}function FA(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:Te()})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(_,w){return _.useProto3Json?(je(w===void 0||typeof w=="string"),Dt.fromBase64String(w||"")):(je(w===void 0||w instanceof Buffer||w instanceof Uint8Array),Dt.fromUint8Array(w||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(_){const w=_.code===void 0?K.UNKNOWN:Sv(_.code);return new ue(w,_.message||"")})(h);t=new Rv(s,o,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=vd(r,s.document.name),l=rr(s.document.updateTime),h=s.document.createTime?rr(s.document.createTime):Ie.min(),f=new un({mapValue:{fields:s.document.fields}}),g=Bt.newFoundDocument(o,l,h,f),_=s.targetIds||[],w=s.removedTargetIds||[];t=new Bu(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=vd(r,s.document),l=s.readTime?rr(s.readTime):Ie.min(),h=Bt.newNoDocument(o,l),f=s.removedTargetIds||[];t=new Bu([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=vd(r,s.document),l=s.removedTargetIds||[];t=new Bu([],l,o,null)}else{if(!("filter"in e))return Te();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new CA(o,l),f=s.targetId;t=new Av(f,h)}}return t}function jA(r,e){let t;if(e instanceof Sc)t={update:my(r,e.key,e.value)};else if(e instanceof Iv)t={delete:qd(r,e.key)};else if(e instanceof fs)t={update:my(r,e.key,e.data),updateMask:QA(e.fieldMask)};else{if(!(e instanceof AA))return Te();t={verify:qd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,h){const f=h.transform;if(f instanceof nc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Qa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Ya)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof rc)return{fieldPath:h.field.canonicalString(),increment:f.Pe};throw Te()})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:MA(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te()})(r,e.precondition)),t}function BA(r,e){return r&&r.length>0?(je(e!==void 0),r.map((t=>(function(o,l){let h=o.updateTime?rr(o.updateTime):rr(l);return h.isEqual(Ie.min())&&(h=rr(l)),new TA(h,o.transformResults||[])})(t,e)))):[]}function zA(r,e){return{documents:[Pv(r,e.path)]}}function $A(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Pv(r,o);const l=(function(_){if(_.length!==0)return Dv(Bn.create(_,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(_){if(_.length!==0)return _.map((w=>(function(k){return{field:lo(k.field),direction:HA(k.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=$d(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{_t:t,parent:o}}function WA(r){let e=UA(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){je(s===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(T){const k=Nv(T);return k instanceof Bn&&sv(k)?k.getFilters():[k]})(t.where));let h=[];t.orderBy&&(h=(function(T){return T.map((k=>(function(z){return new tc(uo(z.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(z.direction))})(k)))})(t.orderBy));let f=null;t.limit&&(f=(function(T){let k;return k=typeof T=="object"?T.value:T,vc(k)?null:k})(t.limit));let g=null;t.startAt&&(g=(function(T){const k=!!T.before,F=T.values||[];return new ec(F,k)})(t.startAt));let _=null;return t.endAt&&(_=(function(T){const k=!T.before,F=T.values||[];return new ec(F,k)})(t.endAt)),uA(e,o,h,l,f,"F",g,_)}function qA(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te()}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Nv(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=uo(t.unaryFilter.field);return ct.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=uo(t.unaryFilter.field);return ct.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=uo(t.unaryFilter.field);return ct.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=uo(t.unaryFilter.field);return ct.create(h,"!=",{nullValue:"NULL_VALUE"});default:return Te()}})(r):r.fieldFilter!==void 0?(function(t){return ct.create(uo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Bn.create(t.compositeFilter.filters.map((s=>Nv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Te()}})(t.compositeFilter.op))})(r):Te()}function HA(r){return OA[r]}function KA(r){return VA[r]}function GA(r){return LA[r]}function lo(r){return{fieldPath:r.canonicalString()}}function uo(r){return xt.fromServerFormat(r.fieldPath)}function Dv(r){return r instanceof ct?(function(t){if(t.op==="=="){if(ty(t.value))return{unaryFilter:{field:lo(t.field),op:"IS_NAN"}};if(ey(t.value))return{unaryFilter:{field:lo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ty(t.value))return{unaryFilter:{field:lo(t.field),op:"IS_NOT_NAN"}};if(ey(t.value))return{unaryFilter:{field:lo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:lo(t.field),op:KA(t.op),value:t.value}}})(r):r instanceof Bn?(function(t){const s=t.getFilters().map((o=>Dv(o)));return s.length===1?s[0]:{compositeFilter:{op:GA(t.op),filters:s}}})(r):Te()}function QA(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ov(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t,s,o,l=Ie.min(),h=Ie.min(),f=Dt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new gi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e){this.ct=e}}function XA(r){const e=WA({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?zd(e,e.limit,"L"):e}/**
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
 */class JA{constructor(){this.un=new ZA}addToCollectionParentIndex(e,t){return this.un.add(t),Y.resolve()}getCollectionParents(e,t){return Y.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return Y.resolve()}deleteFieldIndex(e,t){return Y.resolve()}deleteAllFieldIndexes(e){return Y.resolve()}createTargetIndexes(e,t){return Y.resolve()}getDocumentsMatchingTarget(e,t){return Y.resolve(null)}getIndexType(e,t){return Y.resolve(0)}getFieldIndexes(e,t){return Y.resolve([])}getNextCollectionGroupToUpdate(e){return Y.resolve(null)}getMinOffset(e,t){return Y.resolve(Ai.min())}getMinOffsetFromCollectionGroup(e,t){return Y.resolve(Ai.min())}updateCollectionGroup(e,t,s){return Y.resolve()}updateIndexEntries(e,t){return Y.resolve()}}class ZA{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Nt(Ge.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Nt(Ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Io(0)}static kn(){return new Io(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(){this.changes=new No((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?Y.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class tR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Fa(s.mutation,o,Un.empty(),_t.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ce()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ce()){const o=rs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let h=Oa();return l.forEach(((f,g)=>{h=h.insert(f,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=rs();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ce())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,s,o){let l=Lr();const h=Ua(),f=(function(){return Ua()})();return t.forEach(((g,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof fs)?l=l.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),Fa(w.mutation,_,w.mutation.getFieldMask(),_t.now())):h.set(_.key,Un.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((_,w)=>h.set(_,w))),t.forEach(((_,w)=>{var T;return f.set(_,new tR(w,(T=h.get(_))!==null&&T!==void 0?T:null))})),f)))}recalculateAndSaveOverlays(e,t){const s=Ua();let o=new et(((h,f)=>h-f)),l=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let w=s.get(g)||Un.empty();w=f.applyToLocalView(_,w),s.set(g,w);const T=(o.get(f.batchId)||Ce()).add(g);o=o.insert(f.batchId,T)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),_=g.key,w=g.value,T=mv();w.forEach((k=>{if(!l.has(k)){const F=Ev(t.get(k),s.get(k));F!==null&&T.set(k,F),l=l.add(k)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,T))}return Y.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return pe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):cv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):Y.resolve(rs());let f=-1,g=l;return h.next((_=>Y.forEach(_,((w,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(w)?Y.resolve():this.remoteDocumentCache.getEntry(e,w).next((k=>{g=g.insert(w,k)}))))).next((()=>this.populateOverlays(e,_,l))).next((()=>this.computeViews(e,g,_,Ce()))).next((w=>({batchId:f,changes:pv(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next((s=>{let o=Oa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=Oa();return this.indexManager.getCollectionParents(e,l).next((f=>Y.forEach(f,(g=>{const _=(function(T,k){return new sl(k,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((w=>{w.forEach(((T,k)=>{h=h.insert(T,k)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((h=>{l.forEach(((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,Bt.newInvalidDocument(w)))}));let f=Oa();return h.forEach(((g,_)=>{const w=l.get(g);w!==void 0&&Fa(w.mutation,_,Un.empty(),_t.now()),Ec(t,_)&&(f=f.insert(g,_))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return Y.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:rr(o.createTime)}})(t)),Y.resolve()}getNamedQuery(e,t){return Y.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,(function(o){return{name:o.name,query:XA(o.bundledQuery),readTime:rr(o.readTime)}})(t)),Y.resolve()}}/**
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
 */class iR{constructor(){this.overlays=new et(pe.comparator),this.Ir=new Map}getOverlay(e,t){return Y.resolve(this.overlays.get(t))}getOverlays(e,t){const s=rs();return Y.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.ht(e,t,l)})),Y.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Ir.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.Ir.delete(s)),Y.resolve()}getOverlaysForCollection(e,t,s){const o=rs(),l=t.length+1,h=new pe(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return Y.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new et(((_,w)=>_-w));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=l.get(_.largestBatchId);w===null&&(w=rs(),l=l.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const f=rs(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,w)=>f.set(_,w))),!(f.size()>=o)););return Y.resolve(f)}ht(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Ir.get(o.largestBatchId).delete(s.key);this.Ir.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new kA(t,s));let l=this.Ir.get(t);l===void 0&&(l=Ce(),this.Ir.set(t,l)),this.Ir.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return Y.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Y.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(){this.Tr=new Nt(St.Er),this.dr=new Nt(St.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const s=new St(e,t);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Vr(new St(e,t))}mr(e,t){e.forEach((s=>this.removeReference(s,t)))}gr(e){const t=new pe(new Ge([])),s=new St(t,e),o=new St(t,e+1),l=[];return this.dr.forEachInRange([s,o],(h=>{this.Vr(h),l.push(h.key)})),l}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new pe(new Ge([])),s=new St(t,e),o=new St(t,e+1);let l=Ce();return this.dr.forEachInRange([s,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new St(e,0),s=this.Tr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class St{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return pe.comparator(e.key,t.key)||be(e.wr,t.wr)}static Ar(e,t){return be(e.wr,t.wr)||pe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Nt(St.Er)}checkEmpty(e){return Y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new RA(l,t,s,o);this.mutationQueue.push(h);for(const f of o)this.br=this.br.add(new St(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return Y.resolve(h)}lookupMutationBatch(e,t){return Y.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.vr(s),l=o<0?0:o;return Y.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),l=[];return this.br.forEachInRange([s,o],(h=>{const f=this.Dr(h.wr);l.push(f)})),Y.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Nt(be);return t.forEach((o=>{const l=new St(o,0),h=new St(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([l,h],(f=>{s=s.add(f.wr)}))})),Y.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;pe.isDocumentKey(l)||(l=l.child(""));const h=new St(new pe(l),0);let f=new Nt(be);return this.br.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(f=f.add(g.wr)),!0)}),h),Y.resolve(this.Cr(f))}Cr(e){const t=[];return e.forEach((s=>{const o=this.Dr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){je(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return Y.forEach(t.mutations,(o=>{const l=new St(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.br=s}))}On(e){}containsKey(e,t){const s=new St(t,0),o=this.br.firstAfterOrEqual(s);return Y.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Y.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e){this.Mr=e,this.docs=(function(){return new et(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.Mr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return Y.resolve(s?s.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let s=Lr();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():Bt.newInvalidDocument(o))})),Y.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=Lr();const h=t.path,f=new pe(h.child("")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||W1($1(w),s)<=0||(o.has(w.key)||Ec(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return Y.resolve(l)}getAllFromCollectionGroup(e,t,s,o){Te()}Or(e,t){return Y.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new lR(this)}getSize(e){return Y.resolve(this.size)}}class lR extends eR{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.cr.addEntry(e,o)):this.cr.removeEntry(s)})),Y.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e){this.persistence=e,this.Nr=new No((t=>vf(t)),wf),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Af,this.targetCount=0,this.kr=Io.Bn()}forEachTarget(e,t){return this.Nr.forEach(((s,o)=>t(o))),Y.resolve()}getLastRemoteSnapshotVersion(e){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Y.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Lr&&(this.Lr=t),Y.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Io(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,Y.resolve()}updateTargetData(e,t){return this.Kn(t),Y.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,Y.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.Nr.forEach(((h,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.Nr.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),Y.waitFor(l).next((()=>o))}getTargetCount(e){return Y.resolve(this.targetCount)}getTargetData(e,t){const s=this.Nr.get(t)||null;return Y.resolve(s)}addMatchingKeys(e,t,s){return this.Br.Rr(t,s),Y.resolve()}removeMatchingKeys(e,t,s){this.Br.mr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),Y.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),Y.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Br.yr(t);return Y.resolve(s)}containsKey(e,t){return Y.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e,t){this.qr={},this.overlays={},this.Qr=new mf(0),this.Kr=!1,this.Kr=!0,this.$r=new sR,this.referenceDelegate=e(this),this.Ur=new uR(this),this.indexManager=new JA,this.remoteDocumentCache=(function(o){return new aR(o)})((s=>this.referenceDelegate.Wr(s))),this.serializer=new YA(t),this.Gr=new rR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new iR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.qr[e.toKey()];return s||(s=new oR(t,this.referenceDelegate),this.qr[e.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,s){he("MemoryPersistence","Starting transaction:",e);const o=new hR(this.Qr.next());return this.referenceDelegate.zr(),s(o).next((l=>this.referenceDelegate.jr(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Hr(e,t){return Y.or(Object.values(this.qr).map((s=>()=>s.containsKey(e,t))))}}class hR extends H1{constructor(e){super(),this.currentSequenceNumber=e}}class Rf{constructor(e){this.persistence=e,this.Jr=new Af,this.Yr=null}static Zr(e){return new Rf(e)}get Xr(){if(this.Yr)return this.Yr;throw Te()}addReference(e,t,s){return this.Jr.addReference(s,t),this.Xr.delete(s.toString()),Y.resolve()}removeReference(e,t,s){return this.Jr.removeReference(s,t),this.Xr.add(s.toString()),Y.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),Y.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach((o=>this.Xr.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.Xr.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.Xr,(s=>{const o=pe.fromPath(s);return this.ei(e,o).next((l=>{l||t.removeEntry(o,Ie.min())}))})).next((()=>(this.Yr=null,t.apply(e))))}updateLimboDocument(e,t){return this.ei(e,t).next((s=>{s?this.Xr.delete(t.toString()):this.Xr.add(t.toString())}))}Wr(e){return 0}ei(e,t){return Y.or([()=>Y.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.$i=s,this.Ui=o}static Wi(e,t){let s=Ce(),o=Ce();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new kf(e,t.fromCache,s,o)}}/**
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
 */class dR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class fR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=(function(){return ZE()?8:K1(zt())>0?6:4})()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.Yi(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.Zi(e,t,o,s).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new dR;return this.Xi(e,t,h).next((f=>{if(l.result=f,this.zi)return this.es(e,t,h,f.size)}))})).next((()=>l.result))}es(e,t,s,o){return s.documentReadCount<this.ji?(Pa()<=xe.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",ao(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Y.resolve()):(Pa()<=xe.DEBUG&&he("QueryEngine","Query:",ao(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Hi*o?(Pa()<=xe.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",ao(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nr(t))):Y.resolve())}Yi(e,t){if(sy(t))return Y.resolve(null);let s=nr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=zd(t,null,"F"),s=nr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const h=Ce(...l);return this.Ji.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.ts(t,f);return this.ns(t,_,h,g.readTime)?this.Yi(e,zd(t,null,"F")):this.rs(e,_,t,g)}))))})))))}Zi(e,t,s,o){return sy(t)||o.isEqual(Ie.min())?Y.resolve(null):this.Ji.getDocuments(e,s).next((l=>{const h=this.ts(t,l);return this.ns(t,h,s,o)?Y.resolve(null):(Pa()<=xe.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ao(t)),this.rs(e,h,t,z1(o,-1)).next((f=>f)))}))}ts(e,t){let s=new Nt(dv(e));return t.forEach(((o,l)=>{Ec(e,l)&&(s=s.add(l))})),s}ns(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Xi(e,t,s){return Pa()<=xe.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",ao(t)),this.Ji.getDocumentsMatchingQuery(e,t,Ai.min(),s)}rs(e,t,s,o){return this.Ji.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e,t,s,o){this.persistence=e,this.ss=t,this.serializer=o,this.os=new et(be),this._s=new No((l=>vf(l)),wf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(s)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.os)))}}function mR(r,e,t,s){return new pR(r,e,t,s)}async function Vv(r,e){const t=Se(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.ls(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const h=[],f=[];let g=Ce();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of l){f.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next((_=>({hs:_,removedBatchIds:h,addedBatchIds:f})))}))}))}function gR(r,e){const t=Se(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),l=t.cs.newChangeBuffer({trackRemovals:!0});return(function(f,g,_,w){const T=_.batch,k=T.keys();let F=Y.resolve();return k.forEach((z=>{F=F.next((()=>w.getEntry(g,z))).next((W=>{const V=_.docVersions.get(z);je(V!==null),W.version.compareTo(V)<0&&(T.applyToRemoteDocument(W,_),W.isValidDocument()&&(W.setReadTime(_.commitVersion),w.addEntry(W)))}))})),F.next((()=>f.mutationQueue.removeMutationBatch(g,T)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(f){let g=Ce();for(let _=0;_<f.mutationResults.length;++_)f.mutationResults[_].transformResults.length>0&&(g=g.add(f.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function Lv(r){const e=Se(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ur.getLastRemoteSnapshotVersion(t)))}function yR(r,e){const t=Se(r),s=e.snapshotVersion;let o=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.cs.newChangeBuffer({trackRemovals:!0});o=t.os;const f=[];e.targetChanges.forEach(((w,T)=>{const k=o.get(T);if(!k)return;f.push(t.Ur.removeMatchingKeys(l,w.removedDocuments,T).next((()=>t.Ur.addMatchingKeys(l,w.addedDocuments,T))));let F=k.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?F=F.withResumeToken(Dt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):w.resumeToken.approximateByteSize()>0&&(F=F.withResumeToken(w.resumeToken,s)),o=o.insert(T,F),(function(W,V,ie){return W.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-W.snapshotVersion.toMicroseconds()>=3e8?!0:ie.addedDocuments.size+ie.modifiedDocuments.size+ie.removedDocuments.size>0})(k,F,w)&&f.push(t.Ur.updateTargetData(l,F))}));let g=Lr(),_=Ce();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),f.push(_R(l,h,e.documentUpdates).next((w=>{g=w.Ps,_=w.Is}))),!s.isEqual(Ie.min())){const w=t.Ur.getLastRemoteSnapshotVersion(l).next((T=>t.Ur.setTargetsMetadata(l,l.currentSequenceNumber,s)));f.push(w)}return Y.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,_))).next((()=>g))})).then((l=>(t.os=o,l)))}function _R(r,e,t){let s=Ce(),o=Ce();return t.forEach((l=>s=s.add(l))),e.getEntries(r,s).next((l=>{let h=Lr();return t.forEach(((f,g)=>{const _=l.get(f);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Ie.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):he("LocalStore","Ignoring outdated watch update for ",f,". Current version:",_.version," Watch version:",g.version)})),{Ps:h,Is:o}}))}function vR(r,e){const t=Se(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function wR(r,e){const t=Se(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.Ur.getTargetData(s,e).next((l=>l?(o=l,Y.resolve(o)):t.Ur.allocateTargetId(s).next((h=>(o=new gi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Ur.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.os.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.os=t.os.insert(s.targetId,s),t._s.set(e,s.targetId)),s}))}async function Kd(r,e,t){const s=Se(r),o=s.os.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!il(h))throw h;he("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.os=s.os.remove(e),s._s.delete(o.target)}function gy(r,e,t){const s=Se(r);let o=Ie.min(),l=Ce();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,w){const T=Se(g),k=T._s.get(w);return k!==void 0?Y.resolve(T.os.get(k)):T.Ur.getTargetData(_,w)})(s,h,nr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(h,f.targetId).next((g=>{l=g}))})).next((()=>s.ss.getDocumentsMatchingQuery(h,e,t?o:Ie.min(),t?l:Ce()))).next((f=>(ER(s,hA(e),f),{documents:f,Ts:l})))))}function ER(r,e,t){let s=r.us.get(e)||Ie.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),r.us.set(e,s)}class yy{constructor(){this.activeTargetIds=yA()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TR{constructor(){this.so=new yy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,s){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new yy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class IR{_o(e){}shutdown(){}}/**
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
 */class _y{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){he("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){he("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Nu=null;function wd(){return Nu===null?Nu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Nu++,"0x"+Nu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class RR extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+t.host,this.vo=`projects/${o}/databases/${l}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}get Fo(){return!1}Mo(t,s,o,l,h){const f=wd(),g=this.xo(t,s.toUriEncodedString());he("RestConnection",`Sending RPC '${t}' ${f}:`,g,o);const _={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(_,l,h),this.No(t,g,_,o).then((w=>(he("RestConnection",`Received RPC '${t}' ${f}: `,w),w)),(w=>{throw vo("RestConnection",`RPC '${t}' ${f} failed with error: `,w,"url: ",g,"request:",o),w}))}Lo(t,s,o,l,h,f){return this.Mo(t,s,o,l,h)}Oo(t,s,o){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+xo})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach(((l,h)=>t[h]=l)),o&&o.headers.forEach(((l,h)=>t[h]=l))}xo(t,s){const o=SR[t];return`${this.Do}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,s,o){const l=wd();return new Promise(((h,f)=>{const g=new K_;g.setWithCredentials(!0),g.listenOnce(G_.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Uu.NO_ERROR:const w=g.getResponseJson();he(Ft,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(w)),h(w);break;case Uu.TIMEOUT:he(Ft,`RPC '${e}' ${l} timed out`),f(new ue(K.DEADLINE_EXCEEDED,"Request time out"));break;case Uu.HTTP_ERROR:const T=g.getStatus();if(he(Ft,`RPC '${e}' ${l} failed with status:`,T,"response text:",g.getResponseText()),T>0){let k=g.getResponseJson();Array.isArray(k)&&(k=k[0]);const F=k==null?void 0:k.error;if(F&&F.status&&F.message){const z=(function(V){const ie=V.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(ie)>=0?ie:K.UNKNOWN})(F.status);f(new ue(z,F.message))}else f(new ue(K.UNKNOWN,"Server responded with status "+g.getStatus()))}else f(new ue(K.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{he(Ft,`RPC '${e}' ${l} completed.`)}}));const _=JSON.stringify(o);he(Ft,`RPC '${e}' ${l} sending request:`,o),g.send(t,"POST",_,s,15)}))}Bo(e,t,s){const o=wd(),l=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=X_(),f=Y_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Oo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=l.join("");he(Ft,`Creating RPC '${e}' stream ${o}: ${w}`,g);const T=h.createWebChannel(w,g);let k=!1,F=!1;const z=new AR({Io:V=>{F?he(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,V):(k||(he(Ft,`Opening RPC '${e}' stream ${o} transport.`),T.open(),k=!0),he(Ft,`RPC '${e}' stream ${o} sending:`,V),T.send(V))},To:()=>T.close()}),W=(V,ie,ne)=>{V.listen(ie,(Z=>{try{ne(Z)}catch(ee){setTimeout((()=>{throw ee}),0)}}))};return W(T,Da.EventType.OPEN,(()=>{F||(he(Ft,`RPC '${e}' stream ${o} transport opened.`),z.yo())})),W(T,Da.EventType.CLOSE,(()=>{F||(F=!0,he(Ft,`RPC '${e}' stream ${o} transport closed`),z.So())})),W(T,Da.EventType.ERROR,(V=>{F||(F=!0,vo(Ft,`RPC '${e}' stream ${o} transport errored:`,V),z.So(new ue(K.UNAVAILABLE,"The operation could not be completed")))})),W(T,Da.EventType.MESSAGE,(V=>{var ie;if(!F){const ne=V.data[0];je(!!ne);const Z=ne,ee=Z.error||((ie=Z[0])===null||ie===void 0?void 0:ie.error);if(ee){he(Ft,`RPC '${e}' stream ${o} received error:`,ee);const we=ee.status;let Ee=(function(R){const P=ut[R];if(P!==void 0)return Sv(P)})(we),x=ee.message;Ee===void 0&&(Ee=K.INTERNAL,x="Unknown error status: "+we+" with message "+ee.message),F=!0,z.So(new ue(Ee,x)),T.close()}else he(Ft,`RPC '${e}' stream ${o} received:`,ne),z.bo(ne)}})),W(f,Q_.STAT_EVENT,(V=>{V.stat===bd.PROXY?he(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):V.stat===bd.NOPROXY&&he(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{z.wo()}),0),z}}function Ed(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(r){return new bA(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,t,s=1e3,o=1.5,l=6e4){this.ui=e,this.timerId=t,this.ko=s,this.qo=o,this.Qo=l,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),o=Math.max(0,t-s);o>0&&he("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e,t,s,o,l,h,f,g){this.ui=e,this.Ho=s,this.Jo=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new bv(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(Vr(t.toString()),Vr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.Yo===t&&this.P_(s,o)}),(s=>{e((()=>{const o=new ue(K.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(o)}))}))}P_(e,t){const s=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo((()=>{s((()=>this.listener.Eo()))})),this.stream.Ro((()=>{s((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((o=>{s((()=>this.I_(o)))})),this.stream.onMessage((o=>{s((()=>++this.e_==1?this.E_(o):this.onNext(o)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return he("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget((()=>this.Yo===e?t():(he("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class kR extends Mv{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=FA(this.serializer,e),s=(function(l){if(!("targetChange"in l))return Ie.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ie.min():h.readTime?rr(h.readTime):Ie.min()})(e);return this.listener.d_(t,s)}A_(e){const t={};t.database=Hd(this.serializer),t.addTarget=(function(l,h){let f;const g=h.target;if(f=jd(g)?{documents:zA(l,g)}:{query:$A(l,g)._t},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=kv(l,h.resumeToken);const _=$d(l,h.expectedCount);_!==null&&(f.expectedCount=_)}else if(h.snapshotVersion.compareTo(Ie.min())>0){f.readTime=ic(l,h.snapshotVersion.toTimestamp());const _=$d(l,h.expectedCount);_!==null&&(f.expectedCount=_)}return f})(this.serializer,e);const s=qA(this.serializer,e);s&&(t.labels=s),this.a_(t)}R_(e){const t={};t.database=Hd(this.serializer),t.removeTarget=e,this.a_(t)}}class CR extends Mv{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return je(!!e.streamToken),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){je(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=BA(e.writeResults,e.commitTime),s=rr(e.commitTime);return this.listener.g_(s,t)}p_(){const e={};e.database=Hd(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>jA(this.serializer,s)))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new ue(K.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Mo(e,Wd(t,s),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ue(K.UNKNOWN,l.toString())}))}Lo(e,t,s,o,l){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Lo(e,Wd(t,s),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ue(K.UNKNOWN,h.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class xR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Vr(t),this.D_=!1):he("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=l,this.k_._o((h=>{s.enqueueAndForget((async()=>{ps(this)&&(he("RemoteStore","Restarting streams for network reachability change."),await(async function(g){const _=Se(g);_.L_.add(4),await al(_),_.q_.set("Unknown"),_.L_.delete(4),await kc(_)})(this))}))})),this.q_=new xR(s,o)}}async function kc(r){if(ps(r))for(const e of r.B_)await e(!0)}async function al(r){for(const e of r.B_)await e(!1)}function Uv(r,e){const t=Se(r);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Nf(t)?xf(t):Do(t).r_()&&Pf(t,e))}function Cf(r,e){const t=Se(r),s=Do(t);t.N_.delete(e),s.r_()&&Fv(t,e),t.N_.size===0&&(s.r_()?s.o_():ps(t)&&t.q_.set("Unknown"))}function Pf(r,e){if(r.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Do(r).A_(e)}function Fv(r,e){r.Q_.xe(e),Do(r).R_(e)}function xf(r){r.Q_=new DA({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.N_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),Do(r).start(),r.q_.v_()}function Nf(r){return ps(r)&&!Do(r).n_()&&r.N_.size>0}function ps(r){return Se(r).L_.size===0}function jv(r){r.Q_=void 0}async function DR(r){r.q_.set("Online")}async function OR(r){r.N_.forEach(((e,t)=>{Pf(r,e)}))}async function VR(r,e){jv(r),Nf(r)?(r.q_.M_(e),xf(r)):r.q_.set("Unknown")}async function LR(r,e,t){if(r.q_.set("Online"),e instanceof Rv&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.N_.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.N_.delete(f),o.Q_.removeTarget(f))})(r,e)}catch(s){he("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await sc(r,s)}else if(e instanceof Bu?r.Q_.Ke(e):e instanceof Av?r.Q_.He(e):r.Q_.We(e),!t.isEqual(Ie.min()))try{const s=await Lv(r.localStore);t.compareTo(s)>=0&&await(function(l,h){const f=l.Q_.rt(h);return f.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=l.N_.get(_);w&&l.N_.set(_,w.withResumeToken(g.resumeToken,h))}})),f.targetMismatches.forEach(((g,_)=>{const w=l.N_.get(g);if(!w)return;l.N_.set(g,w.withResumeToken(Dt.EMPTY_BYTE_STRING,w.snapshotVersion)),Fv(l,g);const T=new gi(w.target,g,_,w.sequenceNumber);Pf(l,T)})),l.remoteSyncer.applyRemoteEvent(f)})(r,t)}catch(s){he("RemoteStore","Failed to raise snapshot:",s),await sc(r,s)}}async function sc(r,e,t){if(!il(e))throw e;r.L_.add(1),await al(r),r.q_.set("Offline"),t||(t=()=>Lv(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{he("RemoteStore","Retrying IndexedDB access"),await t(),r.L_.delete(1),await kc(r)}))}function Bv(r,e){return e().catch((t=>sc(r,t,e)))}async function Cc(r){const e=Se(r),t=ki(e);let s=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;bR(e);)try{const o=await vR(e.localStore,s);if(o===null){e.O_.length===0&&t.o_();break}s=o.batchId,MR(e,o)}catch(o){await sc(e,o)}zv(e)&&$v(e)}function bR(r){return ps(r)&&r.O_.length<10}function MR(r,e){r.O_.push(e);const t=ki(r);t.r_()&&t.V_&&t.m_(e.mutations)}function zv(r){return ps(r)&&!ki(r).n_()&&r.O_.length>0}function $v(r){ki(r).start()}async function UR(r){ki(r).p_()}async function FR(r){const e=ki(r);for(const t of r.O_)e.m_(t.mutations)}async function jR(r,e,t){const s=r.O_.shift(),o=Tf.from(s,e,t);await Bv(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Cc(r)}async function BR(r,e){e&&ki(r).V_&&await(async function(s,o){if((function(h){return PA(h)&&h!==K.ABORTED})(o.code)){const l=s.O_.shift();ki(s).s_(),await Bv(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Cc(s)}})(r,e),zv(r)&&$v(r)}async function vy(r,e){const t=Se(r);t.asyncQueue.verifyOperationInProgress(),he("RemoteStore","RemoteStore received new credentials");const s=ps(t);t.L_.add(3),await al(t),s&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await kc(t)}async function zR(r,e){const t=Se(r);e?(t.L_.delete(2),await kc(t)):e||(t.L_.add(2),await al(t),t.q_.set("Unknown"))}function Do(r){return r.K_||(r.K_=(function(t,s,o){const l=Se(t);return l.w_(),new kR(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Eo:DR.bind(null,r),Ro:OR.bind(null,r),mo:VR.bind(null,r),d_:LR.bind(null,r)}),r.B_.push((async e=>{e?(r.K_.s_(),Nf(r)?xf(r):r.q_.set("Unknown")):(await r.K_.stop(),jv(r))}))),r.K_}function ki(r){return r.U_||(r.U_=(function(t,s,o){const l=Se(t);return l.w_(),new CR(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:UR.bind(null,r),mo:BR.bind(null,r),f_:FR.bind(null,r),g_:jR.bind(null,r)}),r.B_.push((async e=>{e?(r.U_.s_(),await Cc(r)):(await r.U_.stop(),r.O_.length>0&&(he("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))}))),r.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new Ti,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,f=new Df(e,t,h,o,l);return f.start(s),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Of(r,e){if(Vr("AsyncQueue",`${e}: ${r}`),il(r))return new ue(K.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.comparator=e?(t,s)=>e(t,s)||pe.comparator(t.key,s.key):(t,s)=>pe.comparator(t.key,s.key),this.keyedMap=Oa(),this.sortedSet=new et(this.comparator)}static emptySet(e){return new mo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof mo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new mo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(){this.W_=new et(pe.comparator)}track(e){const t=e.doc.key,s=this.W_.get(t);s?e.type!==0&&s.type===3?this.W_=this.W_.insert(t,e):e.type===3&&s.type!==1?this.W_=this.W_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.W_=this.W_.remove(t):e.type===1&&s.type===2?this.W_=this.W_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Te():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal(((t,s)=>{e.push(s)})),e}}class So{constructor(e,t,s,o,l,h,f,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new So(e,t,mo.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class WR{constructor(){this.queries=Ey(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,s){const o=Se(t),l=o.queries;o.queries=Ey(),l.forEach(((h,f)=>{for(const g of f.j_)g.onError(s)}))})(this,new ue(K.ABORTED,"Firestore shutting down"))}}function Ey(){return new No((r=>hv(r)),wc)}async function qR(r,e){const t=Se(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.H_()&&e.J_()&&(s=2):(l=new $R,s=e.J_()?0:1);try{switch(s){case 0:l.z_=await t.onListen(o,!0);break;case 1:l.z_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Of(h,`Initialization of query '${ao(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.j_.push(e),e.Z_(t.onlineState),l.z_&&e.X_(l.z_)&&Vf(t)}async function HR(r,e){const t=Se(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.j_.indexOf(e);h>=0&&(l.j_.splice(h,1),l.j_.length===0?o=e.J_()?0:1:!l.H_()&&e.J_()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function KR(r,e){const t=Se(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.j_)f.X_(o)&&(s=!0);h.z_=o}}s&&Vf(t)}function GR(r,e,t){const s=Se(r),o=s.queries.get(e);if(o)for(const l of o.j_)l.onError(t);s.queries.delete(e)}function Vf(r){r.Y_.forEach((e=>{e.next()}))}var Gd,Ty;(Ty=Gd||(Gd={})).ea="default",Ty.Cache="cache";class QR{constructor(e,t,s){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new So(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const s=t!=="Offline";return(!this.options._a||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=So.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Gd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e){this.key=e}}class qv{constructor(e){this.key=e}}class YR{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ce(),this.mutatedKeys=Ce(),this.Aa=dv(e),this.Ra=new mo(this.Aa)}get Va(){return this.Ta}ma(e,t){const s=t?t.fa:new wy,o=t?t.Ra:this.Ra;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,T)=>{const k=o.get(w),F=Ec(this.query,T)?T:null,z=!!k&&this.mutatedKeys.has(k.key),W=!!F&&(F.hasLocalMutations||this.mutatedKeys.has(F.key)&&F.hasCommittedMutations);let V=!1;k&&F?k.data.isEqual(F.data)?z!==W&&(s.track({type:3,doc:F}),V=!0):this.ga(k,F)||(s.track({type:2,doc:F}),V=!0,(g&&this.Aa(F,g)>0||_&&this.Aa(F,_)<0)&&(f=!0)):!k&&F?(s.track({type:0,doc:F}),V=!0):k&&!F&&(s.track({type:1,doc:k}),V=!0,(g||_)&&(f=!0)),V&&(F?(h=h.add(F),l=W?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),s.track({type:1,doc:w})}return{Ra:h,fa:s,ns:f,mutatedKeys:l}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const h=e.fa.G_();h.sort(((w,T)=>(function(F,z){const W=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return W(F)-W(z)})(w.type,T.type)||this.Aa(w.doc,T.doc))),this.pa(s),o=o!=null&&o;const f=t&&!o?this.ya():[],g=this.da.size===0&&this.current&&!o?1:0,_=g!==this.Ea;return this.Ea=g,h.length!==0||_?{snapshot:new So(this.query,e.Ra,l,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:f}:{wa:f}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new wy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((t=>this.Ta=this.Ta.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ta=this.Ta.delete(t))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ce(),this.Ra.forEach((s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))}));const t=[];return e.forEach((s=>{this.da.has(s)||t.push(new qv(s))})),this.da.forEach((s=>{e.has(s)||t.push(new Wv(s))})),t}ba(e){this.Ta=e.Ts,this.da=Ce();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return So.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class XR{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class JR{constructor(e){this.key=e,this.va=!1}}class ZR{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Ca={},this.Fa=new No((f=>hv(f)),wc),this.Ma=new Map,this.xa=new Set,this.Oa=new et(pe.comparator),this.Na=new Map,this.La=new Af,this.Ba={},this.ka=new Map,this.qa=Io.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function ek(r,e,t=!0){const s=Xv(r);let o;const l=s.Fa.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Da()):o=await Hv(s,e,t,!0),o}async function tk(r,e){const t=Xv(r);await Hv(t,e,!0,!1)}async function Hv(r,e,t,s){const o=await wR(r.localStore,nr(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await nk(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Uv(r.remoteStore,o),f}async function nk(r,e,t,s,o){r.Ka=(T,k,F)=>(async function(W,V,ie,ne){let Z=V.view.ma(ie);Z.ns&&(Z=await gy(W.localStore,V.query,!1).then((({documents:x})=>V.view.ma(x,Z))));const ee=ne&&ne.targetChanges.get(V.targetId),we=ne&&ne.targetMismatches.get(V.targetId)!=null,Ee=V.view.applyChanges(Z,W.isPrimaryClient,ee,we);return Sy(W,V.targetId,Ee.wa),Ee.snapshot})(r,T,k,F);const l=await gy(r.localStore,e,!0),h=new YR(e,l.Ts),f=h.ma(l.documents),g=ol.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(f,r.isPrimaryClient,g);Sy(r,t,_.wa);const w=new XR(e,t,h);return r.Fa.set(e,w),r.Ma.has(t)?r.Ma.get(t).push(e):r.Ma.set(t,[e]),_.snapshot}async function rk(r,e,t){const s=Se(r),o=s.Fa.get(e),l=s.Ma.get(o.targetId);if(l.length>1)return s.Ma.set(o.targetId,l.filter((h=>!wc(h,e)))),void s.Fa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Kd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Cf(s.remoteStore,o.targetId),Qd(s,o.targetId)})).catch(rl)):(Qd(s,o.targetId),await Kd(s.localStore,o.targetId,!0))}async function ik(r,e){const t=Se(r),s=t.Fa.get(e),o=t.Ma.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Cf(t.remoteStore,s.targetId))}async function sk(r,e,t){const s=dk(r);try{const o=await(function(h,f){const g=Se(h),_=_t.now(),w=f.reduce(((F,z)=>F.add(z.key)),Ce());let T,k;return g.persistence.runTransaction("Locally write mutations","readwrite",(F=>{let z=Lr(),W=Ce();return g.cs.getEntries(F,w).next((V=>{z=V,z.forEach(((ie,ne)=>{ne.isValidDocument()||(W=W.add(ie))}))})).next((()=>g.localDocuments.getOverlayedDocuments(F,z))).next((V=>{T=V;const ie=[];for(const ne of f){const Z=SA(ne,T.get(ne.key).overlayedDocument);Z!=null&&ie.push(new fs(ne.key,Z,nv(Z.value.mapValue),Nr.exists(!0)))}return g.mutationQueue.addMutationBatch(F,_,ie,f)})).next((V=>{k=V;const ie=V.applyToLocalDocumentSet(T,W);return g.documentOverlayCache.saveOverlays(F,V.batchId,ie)}))})).then((()=>({batchId:k.batchId,changes:pv(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,f,g){let _=h.Ba[h.currentUser.toKey()];_||(_=new et(be)),_=_.insert(f,g),h.Ba[h.currentUser.toKey()]=_})(s,o.batchId,t),await ll(s,o.changes),await Cc(s.remoteStore)}catch(o){const l=Of(o,"Failed to persist write");t.reject(l)}}async function Kv(r,e){const t=Se(r);try{const s=await yR(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Na.get(l);h&&(je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.va=!0:o.modifiedDocuments.size>0?je(h.va):o.removedDocuments.size>0&&(je(h.va),h.va=!1))})),await ll(t,s,e)}catch(s){await rl(s)}}function Iy(r,e,t){const s=Se(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Fa.forEach(((l,h)=>{const f=h.view.Z_(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const g=Se(h);g.onlineState=f;let _=!1;g.queries.forEach(((w,T)=>{for(const k of T.j_)k.Z_(f)&&(_=!0)})),_&&Vf(g)})(s.eventManager,e),o.length&&s.Ca.d_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ok(r,e,t){const s=Se(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Na.get(e),l=o&&o.key;if(l){let h=new et(pe.comparator);h=h.insert(l,Bt.newNoDocument(l,Ie.min()));const f=Ce().add(l),g=new Ac(Ie.min(),new Map,new et(be),h,f);await Kv(s,g),s.Oa=s.Oa.remove(l),s.Na.delete(e),Lf(s)}else await Kd(s.localStore,e,!1).then((()=>Qd(s,e,t))).catch(rl)}async function ak(r,e){const t=Se(r),s=e.batch.batchId;try{const o=await gR(t.localStore,e);Qv(t,s,null),Gv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ll(t,o)}catch(o){await rl(o)}}async function lk(r,e,t){const s=Se(r);try{const o=await(function(h,f){const g=Se(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let w;return g.mutationQueue.lookupMutationBatch(_,f).next((T=>(je(T!==null),w=T.keys(),g.mutationQueue.removeMutationBatch(_,T)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w))).next((()=>g.localDocuments.getDocuments(_,w)))}))})(s.localStore,e);Qv(s,e,t),Gv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ll(s,o)}catch(o){await rl(o)}}function Gv(r,e){(r.ka.get(e)||[]).forEach((t=>{t.resolve()})),r.ka.delete(e)}function Qv(r,e,t){const s=Se(r);let o=s.Ba[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.Ba[s.currentUser.toKey()]=o}}function Qd(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Ma.get(e))r.Fa.delete(s),t&&r.Ca.$a(s,t);r.Ma.delete(e),r.isPrimaryClient&&r.La.gr(e).forEach((s=>{r.La.containsKey(s)||Yv(r,s)}))}function Yv(r,e){r.xa.delete(e.path.canonicalString());const t=r.Oa.get(e);t!==null&&(Cf(r.remoteStore,t),r.Oa=r.Oa.remove(e),r.Na.delete(t),Lf(r))}function Sy(r,e,t){for(const s of t)s instanceof Wv?(r.La.addReference(s.key,e),uk(r,s)):s instanceof qv?(he("SyncEngine","Document no longer in limbo: "+s.key),r.La.removeReference(s.key,e),r.La.containsKey(s.key)||Yv(r,s.key)):Te()}function uk(r,e){const t=e.key,s=t.path.canonicalString();r.Oa.get(t)||r.xa.has(s)||(he("SyncEngine","New document in limbo: "+t),r.xa.add(s),Lf(r))}function Lf(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const e=r.xa.values().next().value;r.xa.delete(e);const t=new pe(Ge.fromString(e)),s=r.qa.next();r.Na.set(s,new JR(t)),r.Oa=r.Oa.insert(t,s),Uv(r.remoteStore,new gi(nr(uv(t.path)),s,"TargetPurposeLimboResolution",mf.oe))}}async function ll(r,e,t){const s=Se(r),o=[],l=[],h=[];s.Fa.isEmpty()||(s.Fa.forEach(((f,g)=>{h.push(s.Ka(g,e,t).then((_=>{var w;if((_||t)&&s.isPrimaryClient){const T=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(_){o.push(_);const T=kf.Wi(g.targetId,_);l.push(T)}})))})),await Promise.all(h),s.Ca.d_(o),await(async function(g,_){const w=Se(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>Y.forEach(_,(k=>Y.forEach(k.$i,(F=>w.persistence.referenceDelegate.addReference(T,k.targetId,F))).next((()=>Y.forEach(k.Ui,(F=>w.persistence.referenceDelegate.removeReference(T,k.targetId,F)))))))))}catch(T){if(!il(T))throw T;he("LocalStore","Failed to update sequence numbers: "+T)}for(const T of _){const k=T.targetId;if(!T.fromCache){const F=w.os.get(k),z=F.snapshotVersion,W=F.withLastLimboFreeSnapshotVersion(z);w.os=w.os.insert(k,W)}}})(s.localStore,l))}async function ck(r,e){const t=Se(r);if(!t.currentUser.isEqual(e)){he("SyncEngine","User change. New user:",e.toKey());const s=await Vv(t.localStore,e);t.currentUser=e,(function(l,h){l.ka.forEach((f=>{f.forEach((g=>{g.reject(new ue(K.CANCELLED,h))}))})),l.ka.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ll(t,s.hs)}}function hk(r,e){const t=Se(r),s=t.Na.get(e);if(s&&s.va)return Ce().add(s.key);{let o=Ce();const l=t.Ma.get(e);if(!l)return o;for(const h of l){const f=t.Fa.get(h);o=o.unionWith(f.view.Va)}return o}}function Xv(r){const e=Se(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Kv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ok.bind(null,e),e.Ca.d_=KR.bind(null,e.eventManager),e.Ca.$a=GR.bind(null,e.eventManager),e}function dk(r){const e=Se(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ak.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lk.bind(null,e),e}class oc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Rc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return mR(this.persistence,new fR,e.initialUser,this.serializer)}Ga(e){return new cR(Rf.Zr,this.serializer)}Wa(e){return new TR}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oc.provider={build:()=>new oc};class Yd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Iy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=ck.bind(null,this.syncEngine),await zR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new WR})()}createDatastore(e){const t=Rc(e.databaseInfo.databaseId),s=(function(l){return new RR(l)})(e.databaseInfo);return(function(l,h,f,g){return new PR(l,h,f,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,h,f){return new NR(s,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>Iy(this.syncEngine,t,0)),(function(){return _y.D()?new _y:new IR})())}createSyncEngine(e,t){return(function(o,l,h,f,g,_,w){const T=new ZR(o,l,h,f,g,_);return w&&(T.Qa=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Se(o);he("RemoteStore","RemoteStore shutting down."),l.L_.add(5),await al(l),l.k_.shutdown(),l.q_.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Yd.provider={build:()=>new Yd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fk{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Vr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=jt.UNAUTHENTICATED,this.clientId=Z_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async h=>{he("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(he("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ti;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Of(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Td(r,e){r.asyncQueue.verifyOperationInProgress(),he("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await Vv(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function Ay(r,e){r.asyncQueue.verifyOperationInProgress();const t=await mk(r);he("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>vy(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>vy(e.remoteStore,o))),r._onlineComponents=e}async function mk(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){he("FirestoreClient","Using user provided OfflineComponentProvider");try{await Td(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===K.FAILED_PRECONDITION||o.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;vo("Error using user provided cache. Falling back to memory cache: "+t),await Td(r,new oc)}}else he("FirestoreClient","Using default OfflineComponentProvider"),await Td(r,new oc);return r._offlineComponents}async function Jv(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(he("FirestoreClient","Using user provided OnlineComponentProvider"),await Ay(r,r._uninitializedComponentsProvider._online)):(he("FirestoreClient","Using default OnlineComponentProvider"),await Ay(r,new Yd))),r._onlineComponents}function gk(r){return Jv(r).then((e=>e.syncEngine))}async function yk(r){const e=await Jv(r),t=e.eventManager;return t.onListen=ek.bind(null,e.syncEngine),t.onUnlisten=rk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=tk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ik.bind(null,e.syncEngine),t}function _k(r,e,t={}){const s=new Ti;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,_){const w=new fk({next:k=>{w.Za(),h.enqueueAndForget((()=>HR(l,T))),k.fromCache&&g.source==="server"?_.reject(new ue(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(k)},error:k=>_.reject(k)}),T=new QR(f,w,{includeMetadataChanges:!0,_a:!0});return qR(l,T)})(await yk(r),r.asyncQueue,e,t,s))),s.promise}/**
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
 */function Zv(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(r,e,t){if(!t)throw new ue(K.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function vk(r,e,t,s){if(e===!0&&s===!0)throw new ue(K.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function ky(r){if(!pe.isDocumentKey(r))throw new ue(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Cy(r){if(pe.isDocumentKey(r))throw new ue(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Pc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Te()}function Xa(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ue(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Pc(r);throw new ue(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ue(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ue(K.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ue(K.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ue(K.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Py({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Py(e),e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new O1;switch(s.type){case"firstParty":return new M1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ue(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Ry.get(t);s&&(he("ComponentProvider","Removing Datastore"),Ry.delete(t),s.terminate())})(this),Promise.resolve()}}function wk(r,e,t,s={}){var o;const l=(r=Xa(r,xc))._getSettings(),h=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==h&&vo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},l),{host:h,ssl:!1})),s.mockUserToken){let f,g;if(typeof s.mockUserToken=="string")f=s.mockUserToken,g=jt.MOCK_USER;else{f=a_(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const _=s.mockUserToken.sub||s.mockUserToken.user_id;if(!_)throw new ue(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new jt(_)}r._authCredentials=new V1(new J_(f,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Oo(this.firestore,e,this._query)}}class cn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ii(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new cn(this.firestore,e,this._key)}}class Ii extends Oo{constructor(e,t,s){super(e,t,uv(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new cn(this.firestore,null,new pe(e))}withConverter(e){return new Ii(this.firestore,e,this._path)}}function Ek(r,e,...t){if(r=ht(r),e0("collection","path",e),r instanceof xc){const s=Ge.fromString(e,...t);return Cy(s),new Ii(r,null,s)}{if(!(r instanceof cn||r instanceof Ii))throw new ue(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ge.fromString(e,...t));return Cy(s),new Ii(r.firestore,null,s)}}function Tk(r,e,...t){if(r=ht(r),arguments.length===1&&(e=Z_.newId()),e0("doc","path",e),r instanceof xc){const s=Ge.fromString(e,...t);return ky(s),new cn(r,null,new pe(s))}{if(!(r instanceof cn||r instanceof Ii))throw new ue(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ge.fromString(e,...t));return ky(s),new cn(r.firestore,r instanceof Ii?r.converter:null,new pe(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new bv(this,"async_queue_retry"),this.Vu=()=>{const s=Ed();s&&he("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=e;const t=Ed();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Ed();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise((()=>{}));const t=new Ti;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Pu.push(e),this.pu())))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!il(e))throw e;he("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(e){const t=this.mu.then((()=>(this.du=!0,e().catch((s=>{this.Eu=s,this.du=!1;const o=(function(h){let f=h.message||"";return h.stack&&(f=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),f})(s);throw Vr("INTERNAL UNHANDLED ERROR: ",o),s})).then((s=>(this.du=!1,s))))));return this.mu=t,t}enqueueAfterDelay(e,t,s){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const o=Df.createAndSchedule(this,e,t,s,(l=>this.yu(l)));return this.Tu.push(o),o}fu(){this.Eu&&Te()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then((()=>{this.Tu.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()}))}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class bf extends xc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new xy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xy(e),this._firestoreClient=void 0,await e}}}function Ik(r,e){const t=typeof r=="object"?r:rf(),s=typeof r=="string"?r:"(default)",o=pc(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=i_("firestore");l&&wk(o,...l)}return o}function t0(r){if(r._terminated)throw new ue(K.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Sk(r),r._firestoreClient}function Sk(r){var e,t,s;const o=r._freezeSettings(),l=(function(f,g,_,w){return new Y1(f,g,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,Zv(w.experimentalLongPollingOptions),w.useFetchStreams)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new pk(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&(function(f){const g=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(g),_online:g}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ao(Dt.fromBase64String(e))}catch(t){throw new ue(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ao(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=/^__.*__$/;class n0{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new fs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function r0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class jf{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.vu(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new jf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:s,xu:!1});return o.Ou(e),o}Nu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:s,xu:!1});return o.vu(),o}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ac(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(r0(this.Cu)&&Ak.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Rk{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Rc(e)}Qu(e,t,s,o=!1){return new jf({Cu:e,methodName:t,qu:s,path:xt.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function i0(r){const e=r._freezeSettings(),t=Rc(r._databaseId);return new Rk(r._databaseId,!!e.ignoreUndefinedProperties,t)}class Dc extends Mf{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Dc}}function kk(r,e,t,s){const o=r.Qu(1,e,t);o0("Data must be an object, but it was:",o,s);const l=[],h=un.empty();ds(s,((g,_)=>{const w=Bf(e,g,t);_=ht(_);const T=o.Nu(w);if(_ instanceof Dc)l.push(w);else{const k=ul(_,T);k!=null&&(l.push(w),h.set(w,k))}}));const f=new Un(l);return new n0(h,f,o.fieldTransforms)}function Ck(r,e,t,s,o,l){const h=r.Qu(1,e,t),f=[Ny(e,s,t)],g=[o];if(l.length%2!=0)throw new ue(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let k=0;k<l.length;k+=2)f.push(Ny(e,l[k])),g.push(l[k+1]);const _=[],w=un.empty();for(let k=f.length-1;k>=0;--k)if(!Dk(_,f[k])){const F=f[k];let z=g[k];z=ht(z);const W=h.Nu(F);if(z instanceof Dc)_.push(F);else{const V=ul(z,W);V!=null&&(_.push(F),w.set(F,V))}}const T=new Un(_);return new n0(w,T,h.fieldTransforms)}function Pk(r,e,t,s=!1){return ul(t,r.Qu(s?4:3,e))}function ul(r,e){if(s0(r=ht(r)))return o0("Unsupported field value:",e,r),xk(r,e);if(r instanceof Mf)return(function(s,o){if(!r0(o.Cu))throw o.Bu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return(function(s,o){const l=[];let h=0;for(const f of s){let g=ul(f,o.Lu(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(s,o){if((s=ht(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return _A(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=_t.fromDate(s);return{timestampValue:ic(o.serializer,l)}}if(s instanceof _t){const l=new _t(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ic(o.serializer,l)}}if(s instanceof Uf)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ao)return{bytesValue:kv(o.serializer,s._byteString)};if(s instanceof cn){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.Bu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Sf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Ff)return(function(h,f){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map((g=>{if(typeof g!="number")throw f.Bu("VectorValues must only contain numeric values.");return Ef(f.serializer,g)}))}}}}}})(s,o);throw o.Bu(`Unsupported field value: ${Pc(s)}`)})(r,e)}function xk(r,e){const t={};return ev(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ds(r,((s,o)=>{const l=ul(o,e.Mu(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function s0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof _t||r instanceof Uf||r instanceof Ao||r instanceof cn||r instanceof Mf||r instanceof Ff)}function o0(r,e,t){if(!s0(t)||!(function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)})(t)){const s=Pc(t);throw s==="an object"?e.Bu(r+" a custom object"):e.Bu(r+" "+s)}}function Ny(r,e,t){if((e=ht(e))instanceof Nc)return e._internalPath;if(typeof e=="string")return Bf(r,e);throw ac("Field path arguments must be of type string or ",r,!1,void 0,t)}const Nk=new RegExp("[~\\*/\\[\\]]");function Bf(r,e,t){if(e.search(Nk)>=0)throw ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Nc(...e.split("."))._internalPath}catch{throw ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function ac(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ue(K.INVALID_ARGUMENT,f+r+g)}function Dk(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new cn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ok(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(zf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ok extends a0{data(){return super.data()}}function zf(r,e){return typeof e=="string"?Bf(r,e):e instanceof Nc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ue(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $f{}class Lk extends $f{}function bk(r,e,...t){let s=[];e instanceof $f&&s.push(e),s=s.concat(t),(function(l){const h=l.filter((g=>g instanceof Wf)).length,f=l.filter((g=>g instanceof Oc)).length;if(h>1||h>0&&f>0)throw new ue(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class Oc extends Lk{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Oc(e,t,s)}_apply(e){const t=this._parse(e);return l0(e._query,t),new Oo(e.firestore,e.converter,Bd(e._query,t))}_parse(e){const t=i0(e.firestore);return(function(l,h,f,g,_,w,T){let k;if(_.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ue(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){Oy(T,w);const F=[];for(const z of T)F.push(Dy(g,l,z));k={arrayValue:{values:F}}}else k=Dy(g,l,T)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||Oy(T,w),k=Pk(f,h,T,w==="in"||w==="not-in");return ct.create(_,w,k)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Mk(r,e,t){const s=e,o=zf("where",r);return Oc._create(o,s,t)}class Wf extends $f{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Wf(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Bn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const g of f)l0(h,g),h=Bd(h,g)})(e._query,t),new Oo(e.firestore,e.converter,Bd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Dy(r,e,t){if(typeof(t=ht(t))=="string"){if(t==="")throw new ue(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!cv(e)&&t.indexOf("/")!==-1)throw new ue(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ge.fromString(t));if(!pe.isDocumentKey(s))throw new ue(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Zg(r,new pe(s))}if(t instanceof cn)return Zg(r,t._key);throw new ue(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pc(t)}.`)}function Oy(r,e){if(!Array.isArray(r)||r.length===0)throw new ue(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function l0(r,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ue(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Uk{convertValue(e,t="none"){switch(us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ls(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ds(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){var t,s,o;const l=(o=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>st(h.doubleValue)));return new Ff(l)}convertGeoPoint(e){return new Uf(st(e.latitude),st(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=yf(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ha(e));default:return null}}convertTimestamp(e){const t=Ri(e);return new _t(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ge.fromString(e);je(Ov(s));const o=new Ka(s.get(1),s.get(3)),l=new pe(s.popFirst(5));return o.isEqual(t)||Vr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Fk extends a0{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(zf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class zu extends Fk{data(e={}){return super.data(e)}}class jk{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Du(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new zu(this._firestore,this._userDataWriter,s.key,s,new Du(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const g=new zu(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Du(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new zu(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Du(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return f.type!==0&&(_=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),w=h.indexOf(f.doc.key)),{type:Bk(f.type),doc:g,oldIndex:_,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Bk(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te()}}class zk extends Uk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ao(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new cn(this.firestore,null,t)}}function $k(r){r=Xa(r,Oo);const e=Xa(r.firestore,bf),t=t0(e),s=new zk(e);return Vk(r._query),_k(t,r._query).then((o=>new jk(e,s,r,o)))}function Wk(r,e,t,...s){r=Xa(r,cn);const o=Xa(r.firestore,bf),l=i0(o);let h;return h=typeof(e=ht(e))=="string"||e instanceof Nc?Ck(l,"updateDoc",r._key,e,t,s):kk(l,"updateDoc",r._key,e),qk(o,[h.toMutation(r._key,Nr.exists(!0))])}function qk(r,e){return(function(s,o){const l=new Ti;return s.asyncQueue.enqueueAndForget((async()=>sk(await gk(s),o,l))),l.promise})(t0(r),e)}(function(e,t=!0){(function(o){xo=o})(cs),ss(new Si("firestore",((s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),f=new bf(new L1(s.getProvider("auth-internal")),new F1(s.getProvider("app-check-internal")),(function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ue(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ka(_.options.projectId,w)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),Zn(Gg,"4.7.3",e),Zn(Gg,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0="firebasestorage.googleapis.com",Hk="storageBucket",Kk=120*1e3,Gk=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends ar{constructor(e,t,s=0){super(Id(e),`Firebase Storage: ${t} (${Id(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,lr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Id(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var sr;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(sr||(sr={}));function Id(r){return"storage/"+r}function Qk(){const r="An unknown error occurred, please check the error payload for server response.";return new lr(sr.UNKNOWN,r)}function Yk(){return new lr(sr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Xk(){return new lr(sr.CANCELED,"User canceled the upload/download.")}function Jk(r){return new lr(sr.INVALID_URL,"Invalid URL '"+r+"'.")}function Zk(r){return new lr(sr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function Vy(r){return new lr(sr.INVALID_ARGUMENT,r)}function c0(){return new lr(sr.APP_DELETED,"The Firebase app was deleted.")}function eC(r){return new lr(sr.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=Fn.makeFromUrl(e,t)}catch{return new Fn(e,"")}if(s.path==="")return s;throw Zk(e)}static makeFromUrl(e,t){let s=null;const o="([A-Za-z0-9.\\-_]+)";function l(ee){ee.path.charAt(ee.path.length-1)==="/"&&(ee.path_=ee.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),g={bucket:1,path:3};function _(ee){ee.path_=decodeURIComponent(ee.path)}const w="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),k="(/([^?#]*).*)?$",F=new RegExp(`^https?://${T}/${w}/b/${o}/o${k}`,"i"),z={bucket:1,path:3},W=t===u0?"(?:storage.googleapis.com|storage.cloud.google.com)":t,V="([^?#]*)",ie=new RegExp(`^https?://${W}/${o}/${V}`,"i"),Z=[{regex:f,indices:g,postModify:l},{regex:F,indices:z,postModify:_},{regex:ie,indices:{bucket:1,path:2},postModify:_}];for(let ee=0;ee<Z.length;ee++){const we=Z[ee],Ee=we.regex.exec(e);if(Ee){const x=Ee[we.indices.bucket];let I=Ee[we.indices.path];I||(I=""),s=new Fn(x,I),we.postModify(s);break}}if(s==null)throw Jk(e);return s}}class tC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(r,e,t){let s=1,o=null,l=null,h=!1,f=0;function g(){return f===2}let _=!1;function w(...V){_||(_=!0,e.apply(null,V))}function T(V){o=setTimeout(()=>{o=null,r(F,g())},V)}function k(){l&&clearTimeout(l)}function F(V,...ie){if(_){k();return}if(V){k(),w.call(null,V,...ie);return}if(g()||h){k(),w.call(null,V,...ie);return}s<64&&(s*=2);let Z;f===1?(f=2,Z=0):Z=(s+Math.random())*1e3,T(Z)}let z=!1;function W(V){z||(z=!0,k(),!_&&(o!==null?(V||(f=2),clearTimeout(o),T(0)):V||(f=1)))}return T(0),l=setTimeout(()=>{h=!0,W(!0)},t),W}function rC(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(r){return r!==void 0}function Ly(r,e,t,s){if(s<e)throw Vy(`Invalid value for '${r}'. Expected ${e} or greater.`);if(s>t)throw Vy(`Invalid value for '${r}'. Expected ${t} or less.`)}function sC(r){const e=encodeURIComponent;let t="?";for(const s in r)if(r.hasOwnProperty(s)){const o=e(s)+"="+e(r[s]);t=t+o+"&"}return t=t.slice(0,-1),t}var lc;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(lc||(lc={}));/**
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
 */function oC(r,e){const t=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,l=e.indexOf(r)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,t,s,o,l,h,f,g,_,w,T,k=!0){this.url_=e,this.method_=t,this.headers_=s,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=g,this.timeout_=_,this.progressCallback_=w,this.connectionFactory_=T,this.retry=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((F,z)=>{this.resolve_=F,this.reject_=z,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new Ou(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const g=f.loaded,_=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,_)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===lc.NO_ERROR,g=l.getStatus();if(!f||oC(g,this.additionalRetryCodes_)&&this.retry){const w=l.getErrorCode()===lc.ABORT;s(!1,new Ou(!1,null,w));return}const _=this.successCodes_.indexOf(g)!==-1;s(!0,new Ou(_,l))})},t=(s,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const g=this.callback_(f,f.getResponse());iC(g)?l(g):l()}catch(g){h(g)}else if(f!==null){const g=Qk();g.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,g)):h(g)}else if(o.canceled){const g=this.appDelete_?c0():Xk();h(g)}else{const g=Yk();h(g)}};this.canceled_?t(!1,new Ou(!1,null,!0)):this.backoffId_=nC(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&rC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ou{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function lC(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function uC(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function cC(r,e){e&&(r["X-Firebase-GMPID"]=e)}function hC(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function dC(r,e,t,s,o,l,h=!0){const f=sC(r.urlParams),g=r.url+f,_=Object.assign({},r.headers);return cC(_,e),lC(_,t),uC(_,l),hC(_,s),new aC(g,r.method,_,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,h)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function pC(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
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
 */class uc{constructor(e,t){this._service=e,t instanceof Fn?this._location=t:this._location=Fn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new uc(e,t)}get root(){const e=new Fn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pC(this._location.path)}get storage(){return this._service}get parent(){const e=fC(this._location.path);if(e===null)return null;const t=new Fn(this._location.bucket,e);return new uc(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw eC(e)}}function by(r,e){const t=e==null?void 0:e[Hk];return t==null?null:Fn.makeFromBucketSpec(t,r)}function mC(r,e,t,s={}){r.host=`${e}:${t}`,r._protocol="http";const{mockUserToken:o}=s;o&&(r._overrideAuthToken=typeof o=="string"?o:a_(o,r.app.options.projectId))}class gC{constructor(e,t,s,o,l){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=o,this._firebaseVersion=l,this._bucket=null,this._host=u0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Kk,this._maxUploadRetryTime=Gk,this._requests=new Set,o!=null?this._bucket=Fn.makeFromBucketSpec(o,this._host):this._bucket=by(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Fn.makeFromBucketSpec(this._url,e):this._bucket=by(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ly("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ly("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new uc(this,e)}_makeRequest(e,t,s,o,l=!0){if(this._deleted)return new tC(c0());{const h=dC(e,this._appId,s,o,t,this._firebaseVersion,l);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,o).getPromise()}}const My="@firebase/storage",Uy="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0="storage";function yC(r=rf(),e){r=ht(r);const s=pc(r,h0).getImmediate({identifier:e}),o=i_("storage");return o&&_C(s,...o),s}function _C(r,e,t,s={}){mC(r,e,t,s)}function vC(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),s=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new gC(t,s,o,e,cs)}function wC(){ss(new Si(h0,vC,"PUBLIC").setMultipleInstances(!0)),Zn(My,Uy,""),Zn(My,Uy,"esm2017")}wC();const EC={apiKey:"AIzaSyDE7_LLpLeSgrnDwSOBo0gr2gqHQz_IUpE",authDomain:"glorious-church-app.firebaseapp.com",projectId:"glorious-church-app",storageBucket:"glorious-church-app.firebasestorage.app",messagingSenderId:"962372698082",appId:"1:962372698082:web:e8491be558c6421d1dc3bb"},qf=c_(EC),Hf=P1(qf),d0=Ik(qf);yC(qf);const f0=q.createContext(null);function cl(){const r=q.useContext(f0);if(!r)throw new Error("useAuth must be used within AuthProvider");return r}const p0={STAFF:"staff"},yi={ADMIN:"Admin",PASTOR:"Pastor",CA_LEADER:"Creative Arts Leader"};function TC(r){return r==="CA Leader"?yi.CA_LEADER:r||""}async function IC(r){if(!(r!=null&&r.email))return null;const e=bk(Ek(d0,p0.STAFF),Mk("email","==",r.email)),t=await $k(e);if(t.empty)return null;const s=t.docs[0],o=s.data();return{staffDocId:s.id,staffProfile:{id:s.id,...o},role:TC(o.role)}}async function SC(r,e){const t=Tk(d0,p0.STAFF,r);await Wk(t,e)}async function AC(r,e){return(await dS(Hf,r,e)).user}async function Fy(){await _S(Hf)}async function RC(r,e){await fS(r,e)}function kC(r){return(r==null?void 0:r.code)==="auth/invalid-credential"||(r==null?void 0:r.code)==="auth/user-not-found"||(r==null?void 0:r.code)==="auth/wrong-password"?"Invalid email address or password configuration.":(r==null?void 0:r.code)==="custom/not-staff"?"Access Denied. Your email is not registered in the staff database.":(r==null?void 0:r.message)||"Authentication failed."}function CC({children:r}){const[e,t]=q.useState(null),[s,o]=q.useState(null),[l,h]=q.useState(null),[f,g]=q.useState(""),[_,w]=q.useState(!0),[T,k]=q.useState(null),F=q.useCallback(()=>{o(null),h(null),g("")},[]),z=q.useCallback(async Z=>{const ee=await IC(Z);return ee?(o(ee.staffDocId),h(ee.staffProfile),g(ee.role),!0):(F(),!1)},[F]);q.useEffect(()=>yS(Hf,async ee=>{if(w(!0),t(ee),!ee){F(),w(!1);return}try{await z(ee)}catch(we){console.error("Staff profile resolution failed:",we),F()}finally{w(!1)}}),[F,z]);const W=q.useCallback(async(Z,ee)=>{k(null);const we=await AC(Z,ee);if(!await z(we)){await Fy();const x=new Error("Access Denied. Your email is not registered in the staff database.");throw x.code="custom/not-staff",x}return we},[z]),V=q.useCallback(async()=>{await Fy(),F()},[F]),ie=q.useCallback(async()=>{e&&await z(e)},[e,z]),ne=q.useMemo(()=>({firebaseUser:e,staffDocId:s,staffProfile:l,role:f,isAuthenticated:!!(e&&l),isLoading:_,authError:T,setAuthError:k,signIn:W,signOut:V,refreshStaffProfile:ie}),[e,s,l,f,_,T,W,V,ie]);return L.jsx(f0.Provider,{value:ne,children:r})}const Mn=[yi.ADMIN,yi.PASTOR,yi.CA_LEADER],PC={"/dashboard":Mn,"/users":[yi.ADMIN,yi.PASTOR],"/members":Mn,"/creative-arts":Mn,"/schools/primary":Mn,"/schools/high":Mn,"/schools/higher-education":Mn,"/maps/members":Mn,"/maps/schools":Mn,"/attendance":Mn,"/offerings":Mn,"/transport":[yi.ADMIN,yi.PASTOR],"/calendar":Mn};function xC(r,e){const t=PC[e];return t?t.includes(r):!0}function NC(){return L.jsx("div",{className:"min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center",children:L.jsx("p",{className:"text-sm text-slate-400",children:"Verifying session..."})})}function DC(){const{isAuthenticated:r,isLoading:e,role:t}=cl(),s=or();return e?L.jsx(NC,{}):r?xC(t,s.pathname)?L.jsx(Jy,{}):L.jsx(za,{to:"/dashboard",replace:!0}):L.jsx(za,{to:"/login",replace:!0,state:{from:s.pathname}})}/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OC=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),m0=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var VC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LC=q.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:h,...f},g)=>q.createElement("svg",{ref:g,...VC,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:m0("lucide",o),...f},[...h.map(([_,w])=>q.createElement(_,w)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=(r,e)=>{const t=q.forwardRef(({className:s,...o},l)=>q.createElement(LC,{ref:l,iconNode:e,className:m0(`lucide-${OC(r)}`,s),...o}));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bC=ot("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=ot("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UC=ot("Bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=ot("CalendarCheck",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jC=ot("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BC=ot("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zC=ot("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $C=ot("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WC=ot("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qC=ot("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HC=ot("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KC=ot("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GC=ot("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QC=ot("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YC=ot("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XC=ot("School",[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10",key:"1xqip1"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6",key:"9d2mlk"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JC=ot("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZC=ot("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eP=ot("UserCog",[["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m21.7 16.4-.9-.3",key:"12j9ji"}],["path",{d:"m15.2 13.9-.9-.3",key:"1fdjdi"}],["path",{d:"m16.6 18.7.3-.9",key:"heedtr"}],["path",{d:"m19.1 12.2.3-.9",key:"1af3ki"}],["path",{d:"m19.6 18.7-.4-1",key:"1x9vze"}],["path",{d:"m16.8 12.3-.4-1",key:"vqeiwj"}],["path",{d:"m14.3 16.6 1-.4",key:"1qlj63"}],["path",{d:"m20.7 13.8 1-.4",key:"1v5t8k"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tP=ot("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=ot("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),nP=[{path:"/dashboard",label:"Dashboard Overview",icon:WC,roles:null},{path:"/users",label:"System Users",icon:ZC,roles:["Admin","Pastor"]},{path:"/members",label:"Members Directory",icon:tP,roles:null},{path:"/creative-arts",label:"Creative Arts",icon:YC,roles:null},{path:"/schools/primary",label:"Primary Schools",icon:XC,roles:null},{path:"/schools/high",label:"High Schools",icon:$C,roles:null},{path:"/schools/higher-education",label:"Universities & Colleges",icon:MC,roles:null},{path:"/maps/members",label:"Members Map",icon:GC,roles:null},{path:"/maps/schools",label:"High Schools Map",icon:KC,roles:null},{path:"/attendance",label:"Attendance Tracker",icon:FC,roles:null},{path:"/offerings",label:"Offerings Log",icon:bC,roles:null},{path:"/transport",label:"Saturday Transport",icon:UC,roles:["Admin","Pastor"]},{path:"/calendar",label:"Calendar",icon:jC,roles:null}];function rP(r){return nP.filter(e=>e.roles?e.roles.includes(r):!0)}const g0={"/dashboard":"Dashboard Overview","/users":"System Users","/members":"Members Directory","/creative-arts":"Creative Arts","/schools/primary":"Primary Schools","/schools/high":"High Schools","/schools/higher-education":"Universities & Colleges","/maps/members":"Members Map","/maps/schools":"High Schools Map","/attendance":"Attendance Tracker","/offerings":"Offerings Log","/transport":"Saturday Transport","/calendar":"Calendar"};function iP(r){return new Promise((e,t)=>{const s=new FileReader;s.onload=o=>e(o.target.result),s.onerror=t,s.readAsDataURL(r)})}function sP({isOpen:r,onClose:e,title:t,icon:s,children:o,maxWidth:l="max-w-sm"}){return q.useEffect(()=>{if(!r)return;function h(f){f.key==="Escape"&&e()}return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[r,e]),r?L.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 text-xs",onClick:h=>{h.target===h.currentTarget&&e()},role:"presentation",children:L.jsxs("div",{className:`bg-slate-800 border border-slate-700 rounded-xl w-full ${l} shadow-xl p-4 space-y-4 max-h-[90vh] overflow-y-auto`,children:[L.jsxs("div",{className:"flex justify-between items-center border-b border-slate-700 pb-2",children:[L.jsxs("h3",{className:"font-bold text-white text-sm flex items-center gap-1.5",children:[s?L.jsx(s,{className:"text-indigo-400 w-4 h-4"}):null,t]}),L.jsx("button",{type:"button",onClick:e,className:"text-slate-400 hover:text-white cursor-pointer","aria-label":"Close modal",children:L.jsx(Kf,{className:"w-4 h-4"})})]}),o]})}):null}function oP({isOpen:r,onClose:e}){const{firebaseUser:t,staffDocId:s,staffProfile:o,refreshStaffProfile:l}=cl(),[h,f]=q.useState(""),[g,_]=q.useState(""),[w,T]=q.useState(""),[k,F]=q.useState(!1),[z,W]=q.useState("");q.useEffect(()=>{!r||!o||(f(o.name||""),T(o.photo||""),_(""),W(""))},[r,o]);async function V(ne){var we;const Z=(we=ne.target.files)==null?void 0:we[0];if(!Z)return;const ee=await iP(Z);T(ee)}async function ie(ne){if(ne.preventDefault(),W(""),!s||!t){W("Session not verified.");return}if(g.trim()!==""&&g.length<6){W("Password must be at least 6 characters long.");return}F(!0);try{await SC(s,{name:h.trim(),photo:w}),g.trim()!==""&&await RC(t,g),await l(),e()}catch(Z){console.error(Z),W(Z.message||"Error saving updates.")}finally{F(!1)}}return L.jsx(sP,{isOpen:r,onClose:e,title:"Account Settings",icon:eP,children:L.jsxs("form",{onSubmit:ie,className:"space-y-3",children:[z?L.jsx("p",{className:"text-rose-400 text-[11px]",children:z}):null,L.jsxs("div",{children:[L.jsx("label",{className:"block text-slate-400 mb-1",children:"Update Profile Picture"}),L.jsxs("div",{className:"flex items-center gap-3 bg-slate-900 p-2 rounded-lg border border-slate-700",children:[L.jsx("div",{className:"w-10 h-10 rounded-full bg-slate-800 border border-slate-700 overflow-hidden flex items-center justify-center shrink-0",children:w?L.jsx("img",{src:w,alt:"",className:"w-full h-full object-cover rounded-full"}):L.jsx("span",{className:"text-slate-500 text-xs",children:"?"})}),L.jsx("input",{type:"file",accept:"image/*",onChange:V,className:"text-[11px] text-slate-400 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-[11px] file:font-semibold file:bg-slate-800 file:text-slate-300 hover:file:bg-slate-700 file:cursor-pointer"})]})]}),L.jsxs("div",{children:[L.jsx("label",{className:"block text-slate-400 mb-0.5",children:"Full Name"}),L.jsx("input",{type:"text",required:!0,value:h,onChange:ne=>f(ne.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white focus:outline-none"})]}),L.jsxs("div",{className:"pt-2 border-t border-slate-700/60",children:[L.jsx("p",{className:"text-indigo-400 font-semibold mb-2",children:"Change Account Password (Optional)"}),L.jsxs("div",{children:[L.jsx("label",{className:"block text-slate-400 mb-0.5",children:"New Password"}),L.jsx("input",{type:"password",value:g,onChange:ne=>_(ne.target.value),placeholder:"Leave blank to keep current",className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white focus:outline-none"})]})]}),L.jsxs("div",{className:"flex justify-end gap-2 pt-2 border-t border-slate-700",children:[L.jsx("button",{type:"button",onClick:e,className:"bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg cursor-pointer",children:"Cancel"}),L.jsx("button",{type:"submit",disabled:k,className:"bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg font-medium cursor-pointer transition disabled:opacity-60",children:k?"Saving...":"Save Updates"})]})]})})}function aP(){const{firebaseUser:r,staffProfile:e,role:t,signOut:s}=cl(),[o,l]=q.useState(!1),[h,f]=q.useState(!1),g=q.useRef(null),_=(e==null?void 0:e.name)||"Staff Member",w=(r==null?void 0:r.email)||"loading session...",T=e==null?void 0:e.photo;q.useEffect(()=>{function z(W){g.current&&!g.current.contains(W.target)&&l(!1)}return document.addEventListener("click",z),()=>document.removeEventListener("click",z)},[]);function k(){l(!1),window.confirm("Are you sure you want to log out and terminate this session?")&&s()}function F(){l(!1),f(!0)}return L.jsxs(L.Fragment,{children:[L.jsxs("div",{ref:g,className:"p-4 border-t border-slate-800 text-xs relative",children:[o?L.jsxs("div",{className:"absolute left-4 bottom-16 w-60 bg-slate-800 border border-slate-700 rounded-xl p-3 shadow-xl space-y-2 z-50 text-xs text-slate-300",children:[L.jsxs("div",{className:"border-b border-slate-700/60 pb-2 mb-1",children:[L.jsx("p",{className:"font-bold text-white truncate text-[11px]",children:_}),L.jsx("p",{className:"text-[10px] text-slate-400 font-mono truncate",children:w})]}),L.jsxs("button",{type:"button",onClick:F,className:"w-full text-left flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-indigo-600 hover:text-white transition cursor-pointer font-medium",children:[L.jsx(JC,{className:"w-3.5 h-3.5"}),"Account Settings"]}),L.jsxs("button",{type:"button",onClick:k,className:"w-full text-left flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-rose-500/20 text-rose-400 transition cursor-pointer font-medium",children:[L.jsx(HC,{className:"w-3.5 h-3.5"}),"Sign Out"]})]}):null,L.jsxs("button",{type:"button",onClick:()=>l(z=>!z),className:"w-full flex items-center justify-between p-1 rounded-lg hover:bg-slate-900 text-left cursor-pointer transition",children:[L.jsxs("div",{className:"flex items-center gap-2.5 truncate",children:[L.jsx("div",{className:"w-7 h-7 rounded-full bg-indigo-600 border border-indigo-400/30 flex items-center justify-center text-white font-bold text-xs uppercase shrink-0 overflow-hidden",children:T?L.jsx("img",{src:T,alt:"",className:"w-full h-full object-cover"}):L.jsx("span",{children:_.charAt(0).toUpperCase()})}),L.jsxs("div",{className:"truncate",children:[L.jsx("p",{className:"font-medium text-slate-200",children:_}),L.jsx("p",{className:"text-[10px] text-indigo-400 uppercase tracking-wider",children:t||"Staff"})]})]}),L.jsx(BC,{className:"w-4 h-4 text-slate-500 shrink-0"})]})]}),L.jsx(oP,{isOpen:h,onClose:()=>f(!1)})]})}function lP({isActive:r}){return r?"w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-white bg-indigo-600 font-medium transition":"w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-400 hover:bg-slate-800/60 hover:text-white font-medium transition"}function uP({isMobileOpen:r,onCloseMobile:e}){const{role:t}=cl(),s=rP(t);return L.jsxs("aside",{className:`fixed inset-y-0 left-0 transform ${r?"translate-x-0":"-translate-x-full"} md:relative md:translate-x-0 w-64 bg-slate-950 border-r border-slate-800 h-screen z-40 flex flex-col justify-between shrink-0 transition-transform duration-300 ease-in-out`,children:[L.jsxs("div",{children:[L.jsxs("div",{className:"p-4 border-b border-slate-800 flex items-center justify-between",children:[L.jsxs("div",{className:"flex items-center gap-2",children:[L.jsx("img",{src:"/img/GC_logo.png",alt:"Glorious Church Logo",className:"w-10 h-10 object-contain"}),L.jsx("div",{children:L.jsx("h1",{className:"text-sm font-bold tracking-wide uppercase text-indigo-300",children:"The Glorious Church"})})]}),L.jsx("button",{type:"button",onClick:e,className:"md:hidden text-slate-400 hover:text-white cursor-pointer","aria-label":"Close sidebar",children:L.jsx(Kf,{className:"w-5 h-5"})})]}),L.jsx("nav",{className:"p-4 space-y-1 text-xs",children:s.map(({path:o,label:l,icon:h})=>L.jsxs(LE,{to:o,className:lP,onClick:e,children:[L.jsx(h,{className:"w-4 h-4"}),l]},o))})]}),L.jsx(aP,{})]})}function cP({onMenuToggle:r,isMenuOpen:e}){return L.jsxs("div",{className:"md:hidden bg-slate-950 border-b border-slate-800 p-4 flex justify-between items-center z-50 sticky top-0 shrink-0",children:[L.jsxs("div",{className:"flex items-center gap-2",children:[L.jsx("img",{src:"/img/GC_logo.png",alt:"Glorious Church Logo",className:"w-8 h-8 object-contain"}),L.jsx("h1",{className:"text-xs font-bold tracking-wide uppercase text-indigo-300",children:"The Glorious Church"})]}),L.jsx("button",{type:"button",onClick:r,className:"text-slate-400 hover:text-white focus:outline-none cursor-pointer","aria-label":e?"Close menu":"Open menu",children:e?L.jsx(Kf,{className:"w-6 h-6"}):L.jsx(QC,{className:"w-6 h-6"})})]})}function hP({isOpen:r,onClose:e}){return r?L.jsx("div",{className:"fixed inset-0 bg-black/50 z-30 md:hidden",onClick:e,role:"presentation"}):null}function dP(){const[r,e]=q.useState(!1);return{isOpen:r,open:()=>e(!0),close:()=>e(!1),toggle:()=>e(t=>!t)}}function fP({badge:r="The Greatest Service"}){const{pathname:e}=or(),t=g0[e]||"The Glorious Church";return L.jsxs("header",{className:"bg-slate-900 border-b border-slate-800 px-6 py-4 hidden md:flex justify-between items-center shrink-0",children:[L.jsx("h2",{className:"text-base font-bold text-white tracking-wide",children:t}),L.jsx("div",{className:"text-[11px] text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded font-medium border border-indigo-500/20",children:r})]})}function pP(){const r=dP();return L.jsxs("div",{className:"bg-slate-900 text-slate-100 font-sans min-h-screen flex flex-col md:flex-row overflow-hidden",children:[L.jsx(hP,{isOpen:r.isOpen,onClose:r.close}),L.jsx(cP,{isMenuOpen:r.isOpen,onMenuToggle:r.toggle}),L.jsx(uP,{isMobileOpen:r.isOpen,onCloseMobile:r.close}),L.jsxs("div",{className:"flex-1 h-screen flex flex-col overflow-hidden",children:[L.jsx(fP,{}),L.jsx("main",{className:"p-4 md:p-6 overflow-y-auto flex-1 max-w-6xl w-full mx-auto",children:L.jsx(Jy,{})})]})]})}function mP({message:r}){return r?L.jsxs("div",{className:"bg-rose-500/10 border border-rose-500/20 text-rose-400 p-2.5 rounded-lg font-medium flex items-center gap-2",children:[L.jsx(zC,{className:"w-4 h-4 shrink-0"}),L.jsx("span",{children:r})]}):null}function gP(){var z;const{signIn:r,isAuthenticated:e,isLoading:t}=cl(),s=or(),[o,l]=q.useState(""),[h,f]=q.useState(""),[g,_]=q.useState(""),[w,T]=q.useState(!1),k=((z=s.state)==null?void 0:z.from)||"/dashboard";if(!t&&e)return L.jsx(za,{to:k,replace:!0});async function F(W){W.preventDefault(),_(""),T(!0);try{await r(o.trim(),h)}catch(V){console.error("Authentication Failure:",V),_(kC(V))}finally{T(!1)}}return L.jsx("div",{className:"bg-slate-900 text-slate-100 font-sans min-h-screen flex items-center justify-center p-4",children:L.jsxs("div",{className:"bg-slate-800 border border-slate-700/70 rounded-xl w-full max-w-sm shadow-xl p-6 space-y-4 text-xs",children:[L.jsxs("div",{className:"text-center space-y-1",children:[L.jsx("h2",{className:"text-lg font-bold text-white tracking-wide",children:"The Glorious Church"}),L.jsx("p",{className:"text-slate-400",children:"Management Roster Authentication Node"})]}),L.jsx(mP,{message:g}),L.jsxs("form",{onSubmit:F,className:"space-y-3",children:[L.jsxs("div",{children:[L.jsx("label",{className:"block text-slate-400 mb-1 font-medium",children:"Secure Log Email"}),L.jsx("input",{type:"email",required:!0,value:o,onChange:W=>l(W.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none",placeholder:"name@thegloriouschurch.org"})]}),L.jsxs("div",{children:[L.jsx("label",{className:"block text-slate-400 mb-1 font-medium",children:"Portal Password"}),L.jsx("input",{type:"password",required:!0,value:h,onChange:W=>f(W.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none",placeholder:"••••••••"})]}),L.jsxs("button",{type:"submit",disabled:w,className:"w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 px-4 rounded-lg transition flex items-center justify-center gap-2 cursor-pointer shadow mt-4 text-xs disabled:opacity-60",children:[L.jsx(qC,{className:"w-3.5 h-3.5"}),w?"Verifying Identity...":"Sign In to Portal"]})]})]})})}function yP(){return L.jsxs("div",{className:"space-y-6",children:[L.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[L.jsx("div",{className:"bg-slate-800 p-4 rounded-xl border border-slate-700/70 flex items-center justify-between shadow-sm",children:L.jsxs("div",{children:[L.jsx("p",{className:"text-[10px] text-slate-400 uppercase tracking-wider font-semibold",children:"Total Roster Members"}),L.jsx("h3",{className:"text-2xl md:text-3xl font-bold mt-1 text-white",children:"—"})]})}),L.jsx("div",{className:"bg-slate-800 p-4 rounded-xl border border-slate-700/70 flex items-center justify-between shadow-sm",children:L.jsxs("div",{children:[L.jsx("p",{className:"text-[10px] text-slate-400 uppercase tracking-wider font-semibold",children:"Total Year Offerings"}),L.jsx("h3",{className:"text-2xl md:text-3xl font-bold mt-1 text-white",children:"R0.00"})]})}),L.jsx("div",{className:"bg-slate-800 p-4 rounded-xl border border-slate-700/70 flex items-center justify-between shadow-sm",children:L.jsxs("div",{children:[L.jsx("p",{className:"text-[10px] text-slate-400 uppercase tracking-wider font-semibold",children:"Avg Youth Attendance"}),L.jsx("h3",{className:"text-2xl md:text-3xl font-bold mt-1 text-white",children:"0%"})]})})]}),L.jsx("div",{className:"bg-slate-800 p-4 rounded-xl border border-slate-700/70 shadow-sm",children:L.jsx("p",{className:"text-xs text-slate-400",children:"Dashboard metrics and birthday widgets will be migrated in Phase 2. You are signed in to the React shell."})})]})}function En(){const{pathname:r}=or(),e=g0[r]||"Module";return L.jsxs("div",{className:"bg-slate-800 p-6 rounded-xl border border-slate-700/70 shadow-sm space-y-2",children:[L.jsx("h3",{className:"text-sm font-bold text-white",children:e}),L.jsx("p",{className:"text-xs text-slate-400",children:"This module is scheduled for a future migration phase. Navigation and access controls are active."})]})}function _P(){return L.jsxs(IE,{children:[L.jsx(yt,{path:"/login",element:L.jsx(gP,{})}),L.jsx(yt,{element:L.jsx(DC,{}),children:L.jsxs(yt,{element:L.jsx(pP,{}),children:[L.jsx(yt,{index:!0,element:L.jsx(za,{to:"/dashboard",replace:!0})}),L.jsx(yt,{path:"dashboard",element:L.jsx(yP,{})}),L.jsx(yt,{path:"users",element:L.jsx(En,{})}),L.jsx(yt,{path:"members",element:L.jsx(En,{})}),L.jsx(yt,{path:"creative-arts",element:L.jsx(En,{})}),L.jsx(yt,{path:"schools/primary",element:L.jsx(En,{})}),L.jsx(yt,{path:"schools/high",element:L.jsx(En,{})}),L.jsx(yt,{path:"schools/higher-education",element:L.jsx(En,{})}),L.jsx(yt,{path:"maps/members",element:L.jsx(En,{})}),L.jsx(yt,{path:"maps/schools",element:L.jsx(En,{})}),L.jsx(yt,{path:"attendance",element:L.jsx(En,{})}),L.jsx(yt,{path:"offerings",element:L.jsx(En,{})}),L.jsx(yt,{path:"transport",element:L.jsx(En,{})}),L.jsx(yt,{path:"calendar",element:L.jsx(En,{})})]})}),L.jsx(yt,{path:"*",element:L.jsx(za,{to:"/dashboard",replace:!0})})]})}function vP(){return L.jsx(NE,{children:L.jsx(CC,{children:L.jsx(_P,{})})})}Nw.createRoot(document.getElementById("root")).render(L.jsx(q.StrictMode,{children:L.jsx(vP,{})}));
