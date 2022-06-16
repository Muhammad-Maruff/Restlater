/*! For license information please see 22.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkrestlater=self.webpackChunkrestlater||[]).push([[22],{8796:(t,e,n)=>{n.d(e,{$g:()=>r.s,A$:()=>r.H,AP:()=>r.i,BV:()=>r.L,Bs:()=>r.A,C3:()=>r.h,F6:()=>r.f,F7:()=>r.o,GH:()=>r.T,H0:()=>r.B,JB:()=>r.a8,JG:()=>r.ao,Js:()=>r.aE,L6:()=>r.l,LG:()=>r.a1,LS:()=>r.a0,Nr:()=>r.aa,O4:()=>r.U,Oh:()=>r.aI,Ov:()=>r.ac,P6:()=>r.a9,PQ:()=>r.ax,QT:()=>z,QZ:()=>r.aC,R5:()=>V,RO:()=>r.P,Rv:()=>r.u,S$:()=>r.G,SE:()=>r.az,Sn:()=>r.at,TX:()=>r.a4,VE:()=>r.V,WV:()=>r.g,XB:()=>r.X,Xb:()=>r.a5,ZJ:()=>r.Z,_O:()=>r.N,_p:()=>r.$,a$:()=>r.b,aF:()=>r._,aT:()=>r.a,bX:()=>r.a3,bc:()=>r.e,c4:()=>r.W,ck:()=>r.af,cx:()=>r.j,e5:()=>r.a6,ev:()=>r.aL,gK:()=>r.al,gQ:()=>r.ah,hJ:()=>r.Q,iA:()=>r.a2,jh:()=>r.J,k9:()=>r.d,lI:()=>r.R,n0:()=>r.k,oo:()=>r.a7,p2:()=>r.an,qB:()=>r.ak,rh:()=>r.c,s:()=>r.ag,sB:()=>r.Y,vY:()=>r.r,w$:()=>r.ab,w9:()=>r.M,wU:()=>r.ay,ww:()=>r.m,xW:()=>r.aB});var r=n(6061),o=n(8288);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(){u=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new E(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=k(a,n);if(u){if(u===p)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=f(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p={};function d(){}function v(){}function h(){}var y={};s(y,o,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(I([])));g&&g!==e&&n.call(g,o)&&(y=g);var w=h.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,a,u,c){var s=f(t[o],t,a);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"==i(p)&&n.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):e.resolve(p).then((function(t){l.value=t,u(l)}),(function(t){return r("throw",t,u,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function k(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,p;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function I(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:P}}function P(){return{value:void 0,done:!0}}return v.prototype=h,s(w,"constructor",h),s(h,"constructor",v),v.displayName=s(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),s(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),s(w,c,"Generator"),s(w,o,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=I,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:I(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=p(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},f.apply(this,arguments)}function p(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=h(t)););return t}function d(t,e){return d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},d(t,e)}function v(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}function y(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function m(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){y(i,r,o,a,u,"next",t)}function u(t){y(i,r,o,a,u,"throw",t)}a(void 0)}))}}function g(){return window}function w(t,e,n){return b.apply(this,arguments)}function b(){return(b=m(u().mark((function t(e,n,o){var i,a,c,s,l;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=g(),c=a.BuildInfo,(0,r.aq)(n.sessionId,"AuthEvent did not contain a session ID"),t.next=4,I(n.sessionId);case 4:return s=t.sent,l={},(0,r.ar)()?l.ibi=c.packageName:(0,r.as)()?l.apn=c.packageName:(0,r.at)(e,"operation-not-supported-in-this-environment"),c.displayName&&(l.appDisplayName=c.displayName),l.sessionId=s,t.abrupt("return",(0,r.au)(e,o,n.type,void 0,null!==(i=n.eventId)&&void 0!==i?i:void 0,l));case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(){return(x=m(u().mark((function t(e){var n,o,i;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=g(),o=n.BuildInfo,i={},(0,r.ar)()?i.iosBundleId=o.packageName:(0,r.as)()?i.androidPackageName=o.packageName:(0,r.at)(e,"operation-not-supported-in-this-environment"),t.next=5,(0,r.av)(e,i);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t){var e=g().cordova;return new Promise((function(n){e.plugins.browsertab.isAvailable((function(o){var i=null;o?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,(0,r.ap)()?"_blank":"_system","location=yes"),n(i)}))}))}function L(t,e,n){return _.apply(this,arguments)}function _(){return(_=m(u().mark((function t(e,n,o){var i,a,c;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=g(),a=i.cordova,c=function(){},t.prev=2,t.next=5,new Promise((function(t,i){var u=null;function s(){var e;t();var n=null===(e=a.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof n&&n(),"function"==typeof(null==o?void 0:o.close)&&o.close()}function l(){u||(u=window.setTimeout((function(){i((0,r.aw)(e,"redirect-cancelled-by-user"))}),2e3))}function f(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&l()}n.addPassiveListener(s),document.addEventListener("resume",l,!1),(0,r.as)()&&document.addEventListener("visibilitychange",f,!1),c=function(){n.removePassiveListener(s),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",f,!1),u&&window.clearTimeout(u)}}));case 5:return t.prev=5,c(),t.finish(5);case 8:case"end":return t.stop()}}),t,null,[[2,,5,8]])})))).apply(this,arguments)}function E(t){var e,n,o,i,a,u,c,s,l,f,p=g();(0,r.ax)("function"==typeof(null===(e=null==p?void 0:p.universalLinks)||void 0===e?void 0:e.subscribe),t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),(0,r.ax)(void 0!==(null===(n=null==p?void 0:p.BuildInfo)||void 0===n?void 0:n.packageName),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),(0,r.ax)("function"==typeof(null===(a=null===(i=null===(o=null==p?void 0:p.cordova)||void 0===o?void 0:o.plugins)||void 0===i?void 0:i.browsertab)||void 0===a?void 0:a.openUrl),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,r.ax)("function"==typeof(null===(s=null===(c=null===(u=null==p?void 0:p.cordova)||void 0===u?void 0:u.plugins)||void 0===c?void 0:c.browsertab)||void 0===s?void 0:s.isAvailable),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,r.ax)("function"==typeof(null===(f=null===(l=null==p?void 0:p.cordova)||void 0===l?void 0:l.InAppBrowser)||void 0===f?void 0:f.open),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}function I(t){return P.apply(this,arguments)}function P(){return(P=m(u().mark((function t(e){var n,r,o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=O(e),t.next=3,crypto.subtle.digest("SHA-256",n);case 3:return r=t.sent,o=Array.from(new Uint8Array(r)),t.abrupt("return",o.map((function(t){return t.toString(16).padStart(2,"0")})).join(""));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(t){if((0,r.aq)(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return(new TextEncoder).encode(t);for(var e=new ArrayBuffer(t.length),n=new Uint8Array(e),o=0;o<t.length;o++)n[o]=t.charCodeAt(o);return n}n(8274),n(9764),n(6933);var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=h(n);if(r){var o=h(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return v(this,t)});function i(){var t;return c(this,i),(t=o.apply(this,arguments)).passiveListeners=new Set,t.initPromise=new Promise((function(e){t.resolveInialized=e})),t}return l(i,[{key:"addPassiveListener",value:function(t){this.passiveListeners.add(t)}},{key:"removePassiveListener",value:function(t){this.passiveListeners.delete(t)}},{key:"resetRedirect",value:function(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}},{key:"onEvent",value:function(t){return this.resolveInialized(),this.passiveListeners.forEach((function(e){return e(t)})),f(h(i.prototype),"onEvent",this).call(this,t)}},{key:"initialized",value:(e=m(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.initPromise;case 2:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),i}(r.aA);function R(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:e,eventId:n,urlResponse:null,sessionId:T(),postBody:null,tenantId:t.tenantId,error:(0,r.aw)(t,"no-auth-event")}}function S(t,e){return C()._set(G(t),e)}function A(t){return B.apply(this,arguments)}function B(){return(B=m(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C()._get(G(e));case 2:if(!(n=t.sent)){t.next=6;break}return t.next=6,C()._remove(G(e));case 6:return t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(t,e){var n,o,i=function(t){var e=U(t),n=e.link?decodeURIComponent(e.link):void 0,r=U(n).link,o=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return U(o).link||o||r||n||t}(e);if(i.includes("/__/auth/callback")){var a=U(i),u=a.firebaseError?function(t){try{return JSON.parse(t)}catch(t){return null}}(decodeURIComponent(a.firebaseError)):null,c=null===(o=null===(n=null==u?void 0:u.code)||void 0===n?void 0:n.split("auth/"))||void 0===o?void 0:o[1],s=c?(0,r.aw)(c):null;return s?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:s,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function T(){for(var t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",n=0;n<20;n++){var r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function C(){return(0,r.ay)(r.b)}function G(t){return(0,r.az)("authEvent",t.config.apiKey,t.name)}function U(t){if(!(null==t?void 0:t.includes("?")))return{};var e,n=function(t){if(Array.isArray(t))return t}(e=t.split("?"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r=(n[0],n.slice(1));return(0,o.zd)(r.join("?"))}var z=function(){function t(){c(this,t),this._redirectPersistence=r.a,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=r.aB,this._overrideRedirectResult=r.aC}var e,n;return l(t,[{key:"_initialize",value:(n=m(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e._key(),(r=this.eventManagers.get(n))||(r=new j(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),t.abrupt("return",r);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"_openPopup",value:function(t){(0,r.at)(t,"operation-not-supported-in-this-environment")}},{key:"_openRedirect",value:(e=m(u().mark((function t(e,n,o,i){var a,c,s,l;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return E(e),t.next=3,this._initialize(e);case 3:return a=t.sent,t.next=6,a.initialized();case 6:return a.resetRedirect(),(0,r.aD)(),t.next=10,this._originValidation(e);case 10:return c=R(e,o,i),t.next=13,S(e,c);case 13:return t.next=15,w(e,c,n);case 15:return s=t.sent,t.next=18,k(s);case 18:return l=t.sent,t.abrupt("return",L(e,a,l));case 20:case"end":return t.stop()}}),t,this)}))),function(t,n,r,o){return e.apply(this,arguments)})},{key:"_isIframeWebStorageSupported",value:function(t,e){throw new Error("Method not implemented.")}},{key:"_originValidation",value:function(t){var e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=function(t){return x.apply(this,arguments)}(t)),this.originValidationPromises[e]}},{key:"attachCallbackListeners",value:function(t,e){var n=g(),r=n.universalLinks,o=n.handleOpenURL,i=n.BuildInfo,a=setTimeout(m(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A(t);case 2:e.onEvent(F());case 3:case"end":return n.stop()}}),n)}))),500),c=function(){var n=m(u().mark((function n(r){var o,i;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return clearTimeout(a),n.next=3,A(t);case 3:o=n.sent,i=null,o&&(null==r?void 0:r.url)&&(i=N(o,r.url)),e.onEvent(i||F());case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();void 0!==r&&"function"==typeof r.subscribe&&r.subscribe(null,c);var s=o,l="".concat(i.packageName.toLowerCase(),"://");g().handleOpenURL=function(){var t=m(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.toLowerCase().startsWith(l)&&c({url:e}),"function"==typeof s)try{s(e)}catch(t){console.error(t)}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]),t}();function F(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:(0,r.aw)("no-auth-event")}}function V(t,e){(0,r.aE)(t)._logFramework(e)}},551:(t,e,n)=>{n.d(e,{v0:()=>r.n,Aj:()=>r.v});var r=n(6061);n(8288),n(8274),n(9764),n(6933)}}]);