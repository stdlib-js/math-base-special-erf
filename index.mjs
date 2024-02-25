// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-set-low-word@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.1-esm/index.mjs";var i=.8450629115104675;function o(o){var m,d,f,u,a,c,l;return t(o)?NaN:o===s?1:o===r?-1:0===o?o:(o<0?(m=!0,d=-o):(m=!1,d=o),d<.84375?d<3.725290298461914e-9?d<2848094538889218e-321?.125*(8*o+1.0270333367641007*o):o+.1283791670955126*o:(u=.12837916709551256+(f=o*o)*function(t){return 0===t?-.3250421072470015:t*(t*(-23763016656650163e-21*t-.005770270296489442)-.02848174957559851)-.3250421072470015}(f),a=1+f*function(t){return 0===t?.39791722395915535:.39791722395915535+t*(.0650222499887673+t*(.005081306281875766+t*(.00013249473800432164+-3960228278775368e-21*t)))}(f),o+o*(u/a)):d<1.25?(c=(a=d-1)*function(t){return 0===t?.41485611868374833:.41485611868374833+t*(t*(.31834661990116175+t*(t*(.035478304325618236+-.002166375594868791*t)-.11089469428239668))-.3722078760357013)}(a)-.0023621185607526594,l=1+a*function(t){return 0===t?.10642088040084423:.10642088040084423+t*(.540397917702171+t*(.07182865441419627+t*(.12617121980876164+t*(.01363708391202905+.011984499846799107*t))))}(a),m?-i-c/l:i+c/l):d>=6?m?-1:1:(a=1/(d*d),d<2.857142857142857?(u=a*function(t){return 0===t?-.6938585727071818:t*(t*(t*(t*(t*(-9.814329344169145*t-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(a)-.009864944034847148,a=1+a*function(t){return 0===t?19.651271667439257:19.651271667439257+t*(137.65775414351904+t*(434.56587747522923+t*(645.3872717332679+t*(429.00814002756783+t*(108.63500554177944+t*(6.570249770319282+-.0604244152148581*t))))))}(a)):(u=a*function(t){return 0===t?-.799283237680523:t*(t*(t*(t*(-483.5191916086514*t-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(a)-.0098649429247001,a=1+a*function(t){return 0===t?30.33806074348246:30.33806074348246+t*(325.7925129965739+t*(1536.729586084437+t*(3199.8582195085955+t*(2553.0504064331644+t*(474.52854120695537+-22.44095244658582*t)))))}(a)),f=e(d,0),u=n(-f*f-.5625)*n((f-d)*(f+d)+u/a),m?u/d-1:1-u/d))}export{o as default};
//# sourceMappingURL=index.mjs.map
