!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!O[e]||!w[e])return;for(var n in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0==--g&&0===b&&E()}(e,n),t&&t(e,n)};var n,r=!0,o="a3151fadc080ccfdeea2",c=1e4,d={},a=[],i=[];function l(e){var t=I[e];if(!t)return P;var r=function(r){return t.hot.active?(I[r]?-1===I[r].parents.indexOf(e)&&I[r].parents.push(e):(a=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),a=[]),P(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(t){P[e]=t}}};for(var c in P)Object.prototype.hasOwnProperty.call(P,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(r,c,o(c));return r.e=function(e){return"ready"===p&&f("prepare"),b++,P.e(e).then(t,function(e){throw t(),e});function t(){b--,"prepare"===p&&(m[e]||D(e),0===b&&0===g&&E())}},r.t=function(e,t){return 1&t&&(e=r(e)),P.t(e,-2&t)},r}function s(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:x,apply:j,status:function(e){if(!e)return p;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:d[e]};return n=void 0,t}var u=[],p="idle";function f(e){p=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var h,y,v,g=0,b=0,m={},w={},O={};function _(e){return+e+""===e?+e:e}function x(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return r=e,f("check"),(t=c,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,c=P.p+""+o+".hot-update.json";r.open("GET",c,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+c+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+c+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return f("idle"),null;w={},m={},O=e.c,v=e.h,f("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});y={};return D(0),"prepare"===p&&0===b&&0===g&&E(),t});var t}function D(e){O[e]?(w[e]=!0,g++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=P.p+""+e+"."+o+".hot-update.js",document.head.appendChild(t)}(e)):m[e]=!0}function E(){f("ready");var e=h;if(h=null,e)if(r)Promise.resolve().then(function(){return j(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(_(n));e.resolve(t)}}function j(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,c,i,l;function s(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),c=o.id,d=o.chain;if((i=I[c])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:c};if(i.hot._main)return{type:"unaccepted",chain:d,moduleId:c};for(var a=0;a<i.parents.length;a++){var l=i.parents[a],s=I[l];if(s){if(s.hot._declinedDependencies[c])return{type:"declined",chain:d.concat([l]),moduleId:c,parentId:l};-1===t.indexOf(l)&&(s.hot._acceptedDependencies[c]?(n[l]||(n[l]=[]),u(n[l],[c])):(delete n[l],t.push(l),r.push({chain:d.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var h={},g=[],b={},m=function(){console.warn("[HMR] unexpected require("+x.moduleId+") to disposed module")};for(var w in y)if(Object.prototype.hasOwnProperty.call(y,w)){var x;l=_(w);var D=!1,E=!1,j=!1,H="";switch((x=y[w]?s(l):{type:"disposed",moduleId:w}).chain&&(H="\nUpdate propagation: "+x.chain.join(" -> ")),x.type){case"self-declined":t.onDeclined&&t.onDeclined(x),t.ignoreDeclined||(D=new Error("Aborted because of self decline: "+x.moduleId+H));break;case"declined":t.onDeclined&&t.onDeclined(x),t.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+x.moduleId+" in "+x.parentId+H));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(x),t.ignoreUnaccepted||(D=new Error("Aborted because "+l+" is not accepted"+H));break;case"accepted":t.onAccepted&&t.onAccepted(x),E=!0;break;case"disposed":t.onDisposed&&t.onDisposed(x),j=!0;break;default:throw new Error("Unexception type "+x.type)}if(D)return f("abort"),Promise.reject(D);if(E)for(l in b[l]=y[l],u(g,x.outdatedModules),x.outdatedDependencies)Object.prototype.hasOwnProperty.call(x.outdatedDependencies,l)&&(h[l]||(h[l]=[]),u(h[l],x.outdatedDependencies[l]));j&&(u(g,[x.moduleId]),b[l]=m)}var k,S=[];for(r=0;r<g.length;r++)l=g[r],I[l]&&I[l].hot._selfAccepted&&S.push({module:l,errorHandler:I[l].hot._selfAccepted});f("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete installedChunks[e]}(e)});for(var M,A,q=g.slice();q.length>0;)if(l=q.pop(),i=I[l]){var L={},U=i.hot._disposeHandlers;for(c=0;c<U.length;c++)(n=U[c])(L);for(d[l]=L,i.hot.active=!1,delete I[l],delete h[l],c=0;c<i.children.length;c++){var R=I[i.children[c]];R&&((k=R.parents.indexOf(l))>=0&&R.parents.splice(k,1))}}for(l in h)if(Object.prototype.hasOwnProperty.call(h,l)&&(i=I[l]))for(A=h[l],c=0;c<A.length;c++)M=A[c],(k=i.children.indexOf(M))>=0&&i.children.splice(k,1);for(l in f("apply"),o=v,b)Object.prototype.hasOwnProperty.call(b,l)&&(e[l]=b[l]);var T=null;for(l in h)if(Object.prototype.hasOwnProperty.call(h,l)&&(i=I[l])){A=h[l];var C=[];for(r=0;r<A.length;r++)if(M=A[r],n=i.hot._acceptedDependencies[M]){if(-1!==C.indexOf(n))continue;C.push(n)}for(r=0;r<C.length;r++){n=C[r];try{n(A)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:A[r],error:e}),t.ignoreErrored||T||(T=e)}}}for(r=0;r<S.length;r++){var $=S[r];l=$.module,a=[l];try{P(l)}catch(e){if("function"==typeof $.errorHandler)try{$.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,originalError:e}),t.ignoreErrored||T||(T=n),T||(T=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||T||(T=e)}}return T?(f("fail"),Promise.reject(T)):(f("idle"),new Promise(function(e){e(g)}))}var I={};function P(t){if(I[t])return I[t].exports;var n=I[t]={i:t,l:!1,exports:{},hot:s(t),parents:(i=a,a=[],i),children:[]};return e[t].call(n.exports,n,n.exports,l(t)),n.l=!0,n.exports}P.m=e,P.c=I,P.d=function(e,t,n){P.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},P.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.t=function(e,t){if(1&t&&(e=P(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(P.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)P.d(n,r,function(t){return e[t]}.bind(null,r));return n},P.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(t,"a",t),t},P.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},P.p="",P.h=function(){return o},l(0)(P.s=0)}([function(e,t,n){"use strict";function r(e){const t=document.createElement("canvas");let n=e.width,r=e.height;n>200&&(n=100),r>200&&(n=100),t.width=n,t.height=r;const o=t.getContext("2d");o.drawImage(e,0,0,t.width,t.height);const c=o.getImageData(0,0,t.width,t.height);let d=0,a=0,i=0,l=0;const s=c.data.length,u=s/4;for(let e=0;e<s;e+=4)d+=c.data[e],a+=c.data[e+1],i+=c.data[e+2],l+=c.data[e+3];return`rgba(${Math.ceil(d/u)}, ${Math.ceil(a/u)}, ${Math.ceil(i/u)}, ${l/u})`}function o(e){switch(typeof e){case"object":return r(e);case"string":return function(e){const t=new Image;t.src=e,t.addEventListener("load",()=>r(t))}(e);default:return!1}}n.r(t);var c=document.querySelector("#drop_zone"),d=document.body.querySelector("#file-inpur"),a=document.body.querySelector("header");function i(e){e.preventDefault(),e.stopPropagation()}function l(e){var t=new FileReader;t.onload=u,t.readAsDataURL(e)}function s(e){var t=o(e.target);c.style.boxShadow="0 16px 32px -8px ".concat(t),c.style.border="none",a.style.backgroundColor=t,a.style.boxShadow=" 0 16px 24px -12px ".concat(t),setTimeout(function(){c.style.boxShadow="",a.style.backgroundColor="",a.style.boxShadow="",c.style.backgroundImage=""},1500)}function u(e){var t=new Image;t.src=e.target.result,c.style.backgroundImage="url('".concat(e.target.result,"')"),t.addEventListener("load",s)}d.addEventListener("change",function(e){var t=e.target;t.files&&t.files[0]&&l(t.files[0])}),c.addEventListener("drop",function(e){var t=e.dataTransfer;if(t.files&&t.files[0]){var n=t.files;l(n[0])}},!1),["dragenter","dragover","dragleave","drop"].forEach(function(e){c.addEventListener(e,i,!1)})}]);
//# sourceMappingURL=app.bundle.js.map