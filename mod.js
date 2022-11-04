// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var t=Math.floor,n=Math.ceil;function e(r){return r<0?n(r):t(r)}var o=Number.NEGATIVE_INFINITY,a=Number.POSITIVE_INFINITY;function u(r){return r===a||r===o}var i="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var f=Object.prototype.toString;var c=Object.prototype.hasOwnProperty;var l,y="function"==typeof Symbol?Symbol.toStringTag:"";l=i&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,a;if(null==r)return f.call(r);n=r[y],a=y,t=null!=(o=r)&&c.call(o,a);try{r[y]=void 0}catch(t){return f.call(r)}return e=f.call(r),t?r[y]=n:delete r[y],e}:function(r){return f.call(r)};var v=l,p="function"==typeof Uint32Array;var b="function"==typeof Uint32Array?Uint32Array:null;var w,A="function"==typeof Uint32Array?Uint32Array:void 0;w=function(){var r,t,n;if("function"!=typeof b)return!1;try{t=new b(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(p&&n instanceof Uint32Array||"[object Uint32Array]"===v(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _=w,m="function"==typeof Float64Array;var d="function"==typeof Float64Array?Float64Array:null;var s,U="function"==typeof Float64Array?Float64Array:void 0;s=function(){var r,t,n;if("function"!=typeof d)return!1;try{t=new d([1,3.14,-3.14,NaN]),n=t,r=(m&&n instanceof Float64Array||"[object Float64Array]"===v(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?U:function(){throw new Error("not implemented")};var h=s,j="function"==typeof Uint8Array;var g="function"==typeof Uint8Array?Uint8Array:null;var I,O="function"==typeof Uint8Array?Uint8Array:void 0;I=function(){var r,t,n;if("function"!=typeof g)return!1;try{t=new g(t=[1,3.14,-3.14,256,257]),n=t,r=(j&&n instanceof Uint8Array||"[object Uint8Array]"===v(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?O:function(){throw new Error("not implemented")};var S=I,N="function"==typeof Uint16Array;var E="function"==typeof Uint16Array?Uint16Array:null;var F,H="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var r,t,n;if("function"!=typeof E)return!1;try{t=new E(t=[1,3.14,-3.14,65536,65537]),n=t,r=(N&&n instanceof Uint16Array||"[object Uint16Array]"===v(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?H:function(){throw new Error("not implemented")};var T,G={uint16:F,uint8:S};(T=new G.uint16(1))[0]=4660;var P,L,V=52===new G.uint8(T.buffer)[0];!0===V?(P=1,L=0):(P=0,L=1);var W={HIGH:P,LOW:L},M=new h(1),k=new _(M.buffer),x=W.HIGH,Y=W.LOW;function C(r,t){return M[0]=t,r[0]=k[x],r[1]=k[Y],r}function q(r,t){return 1===arguments.length?C([0,0],r):C(r,t)}var z,B,D=!0===V?1:0,J=new h(1),K=new _(J.buffer);function Q(r){return J[0]=r,K[D]}!0===V?(z=1,B=0):(z=0,B=1);var R={HIGH:z,LOW:B},X=new h(1),Z=new _(X.buffer),$=R.HIGH,rr=R.LOW;function tr(r,t){return Z[$]=r,Z[rr]=t,X[0]}var nr=[0,0];var er="function"==typeof Object.defineProperty?Object.defineProperty:null;var or,ar=Object.defineProperty,ur=Object.prototype,ir=ur.toString,fr=ur.__defineGetter__,cr=ur.__defineSetter__,lr=ur.__lookupGetter__,yr=ur.__lookupSetter__;or=function(){try{return er({},"x",{}),!0}catch(r){return!1}}()?ar:function(r,t,n){var e,o,a,u;if("object"!=typeof r||null===r||"[object Array]"===ir.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===ir.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(lr.call(r,t)||yr.call(r,t)?(e=r.__proto__,r.__proto__=ur,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),a="get"in n,u="set"in n,o&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&fr&&fr.call(r,t,n.get),u&&cr&&cr.call(r,t,n.set),r};function vr(t,n,e,o){return r(t)||u(t)?(n[o]=t,n[o+e]=0,n):0!==t&&function(r){return Math.abs(r)}(t)<22250738585072014e-324?(n[o]=4503599627370496*t,n[o+e]=-52,n):(n[o]=t,n[o+e]=0,n)}or((function(r){return vr(r,[0,0],1,0)}),"assign",{configurable:!1,enumerable:!1,writable:!1,value:vr});var pr=[0,0],br=[0,0];function wr(t,n){var e,i,f,c,l;return 0===n||0===t||r(t)||u(t)?t:(vr(t,pr,1,0),n+=pr[1],n+=function(r){var t=Q(r);return(t=(2146435072&t)>>>20)-1023|0}(t=pr[0]),n<-1074?(f=t,q(nr,0),c=nr[0],c&=2147483647,l=Q(f),tr(c|=l&=2147483648,nr[1])):n>1023?t<0?o:a:(n<=-1023?(n+=52,i=2220446049250313e-31):i=1,q(br,t),e=br[0],e&=2148532223,i*tr(e|=n+1023<<20,br[1])))}function Ar(t){var n;return r(t)||t===a?t:t===o?0:t>709.782712893384?a:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<3.725290298461914e-9?1+t:function(r,t,n){var e,o,a,u;return wr(1-(t-(e=r-t)*(a=e-(o=e*e)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(t-.6931471803691238*(n=e(t<0?1.4426950408889634*t-.5:1.4426950408889634*t+.5)),1.9082149292705877e-10*n,n)}var _r=!0===V?0:1,mr=new h(1),dr=new _(mr.buffer);var sr=.8450629115104675;function Ur(t){var n,e,u,i,f,c,l;return r(t)?NaN:t===a?1:t===o?-1:0===t?t:(t<0?(n=!0,e=-t):(n=!1,e=t),e<.84375?e<3.725290298461914e-9?e<2848094538889218e-321?.125*(8*t+1.0270333367641007*t):t+.1283791670955126*t:(i=.12837916709551256+(u=t*t)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(u),f=1+u*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(u),t+t*(i/f)):e<1.25?(c=(f=e-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(f)-.0023621185607526594,l=1+f*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(f),n?-sr-c/l:sr+c/l):e>=6?n?-1:1:(f=1/(e*e),e<2.857142857142857?(i=f*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(f)-.009864944034847148,f=1+f*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(f)):(i=f*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(f)-.0098649429247001,f=1+f*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(f)),u=function(r,t){return mr[0]=r,dr[_r]=t>>>0,mr[0]}(e,0),i=Ar(-u*u-.5625)*Ar((u-e)*(u+e)+i/f),n?i/e-1:1-i/e))}export{Ur as default};
//# sourceMappingURL=mod.js.map
