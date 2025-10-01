"use strict";var a=function(r,u){return function(){return u||r((u={exports:{}}).exports,u),u.exports}};var f=a(function(p0,l){
function d(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}l.exports=d
});var c=a(function(c0,p){
function g(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}p.exports=g
});var q=a(function(y0,y){
function m(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}y.exports=m
});var C=a(function(q0,A){
function w(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}A.exports=w
});var P=a(function(A0,N){
function z(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}N.exports=z
});var R=a(function(C0,Q){
function M(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}Q.exports=M
});var B=a(function(N0,S){
function V(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}S.exports=V
});var F=a(function(P0,E){
function W(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}E.exports=W
});var T=a(function(Q0,Y){
var _=require('@stdlib/math-base-assert-is-nan/dist'),I=require('@stdlib/math-base-special-exp/dist'),b=require('@stdlib/number-float64-base-set-low-word/dist'),h=require('@stdlib/constants-float64-pinf/dist'),j=require('@stdlib/constants-float64-ninf/dist'),k=f(),D=c(),G=q(),H=C(),J=P(),K=R(),O=B(),U=F(),L=1e-300,Z=2848094538889218e-321,$=3725290298461914e-24,X=.8450629115104675,x=.1283791670955126,r0=1.0270333367641007,e0=.12837916709551256,t0=1,u0=-.0023621185607526594,i0=1,a0=-.009864944034847148,v0=1,n0=-.0098649429247001,o0=1;function s0(r){var u,t,i,v,e,s,n,o;return _(r)?NaN:r===h?1:r===j?-1:r===0?r:(r<0?(u=!0,t=-r):(u=!1,t=r),t<.84375?t<$?t<Z?.125*(8*r+r0*r):r+x*r:(i=r*r,v=e0+i*k(i),e=t0+i*D(i),s=v/e,r+r*s):t<1.25?(e=t-1,n=u0+e*G(e),o=i0+e*H(e),u?-X-n/o:X+n/o):t>=6?u?L-1:1-L:(e=1/(t*t),t<2.857142857142857?(v=a0+e*J(e),e=v0+e*K(e)):(v=n0+e*O(e),e=o0+e*U(e)),i=b(t,0),v=I(-(i*i)-.5625)*I((i-t)*(i+t)+v/e),u?v/t-1:1-v/t))}Y.exports=s0
});var l0=T();module.exports=l0;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
