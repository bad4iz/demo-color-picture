!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,n){if(!O[e]||!w[e])return;for(var r in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(v[r]=n[r]);0==--b&&0===m&&j()}(e,r),n&&n(e,r)};var r,t=!0,o="5efe02c02d6eb0620b6d",c=1e4,i={},d=[],a=[];function u(e){var n=x[e];if(!n)return H;var t=function(t){return n.hot.active?(x[t]?-1===x[t].parents.indexOf(e)&&x[t].parents.push(e):(d=[e],r=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),d=[]),H(t)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return H[e]},set:function(n){H[e]=n}}};for(var c in H)Object.prototype.hasOwnProperty.call(H,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(t,c,o(c));return t.e=function(e){return"ready"===f&&p("prepare"),m++,H.e(e).then(n,function(e){throw n(),e});function n(){m--,"prepare"===f&&(g[e]||E(e),0===m&&0===b&&j())}},t.t=function(e,n){return 1&n&&(e=t(e)),H.t(e,-2&n)},t}function l(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:D,apply:P,status:function(e){if(!e)return f;s.push(e)},addStatusHandler:function(e){s.push(e)},removeStatusHandler:function(e){var n=s.indexOf(e);n>=0&&s.splice(n,1)},data:i[e]};return r=void 0,n}var s=[],f="idle";function p(e){f=e;for(var n=0;n<s.length;n++)s[n].call(null,e)}var h,v,y,b=0,m=0,g={},w={},O={};function _(e){return+e+""===e?+e:e}function D(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return t=e,p("check"),(n=c,n=n||1e4,new Promise(function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,c=H.p+""+o+".hot-update.json";t.open("GET",c,!0),t.timeout=n,t.send(null)}catch(e){return r(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+c+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+c+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(e){return void r(e)}e(n)}}})).then(function(e){if(!e)return p("idle"),null;w={},g={},O=e.c,y=e.h,p("prepare");var n=new Promise(function(e,n){h={resolve:e,reject:n}});v={};return E(0),"prepare"===f&&0===m&&0===b&&j(),n});var n}function E(e){O[e]?(w[e]=!0,b++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=H.p+""+e+"."+o+".hot-update.js",document.head.appendChild(n)}(e)):g[e]=!0}function j(){p("ready");var e=h;if(h=null,e)if(t)Promise.resolve().then(function(){return P(t)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in v)Object.prototype.hasOwnProperty.call(v,r)&&n.push(_(r));e.resolve(n)}}function P(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var r,t,c,a,u;function l(e){for(var n=[e],r={},t=n.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),c=o.id,i=o.chain;if((a=x[c])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:c};if(a.hot._main)return{type:"unaccepted",chain:i,moduleId:c};for(var d=0;d<a.parents.length;d++){var u=a.parents[d],l=x[u];if(l){if(l.hot._declinedDependencies[c])return{type:"declined",chain:i.concat([u]),moduleId:c,parentId:u};-1===n.indexOf(u)&&(l.hot._acceptedDependencies[c]?(r[u]||(r[u]=[]),s(r[u],[c])):(delete r[u],n.push(u),t.push({chain:i.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function s(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var h={},b=[],m={},g=function(){console.warn("[HMR] unexpected require("+D.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var D;u=_(w);var E=!1,j=!1,P=!1,I="";switch((D=v[w]?l(u):{type:"disposed",moduleId:w}).chain&&(I="\nUpdate propagation: "+D.chain.join(" -> ")),D.type){case"self-declined":n.onDeclined&&n.onDeclined(D),n.ignoreDeclined||(E=new Error("Aborted because of self decline: "+D.moduleId+I));break;case"declined":n.onDeclined&&n.onDeclined(D),n.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+D.moduleId+" in "+D.parentId+I));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(D),n.ignoreUnaccepted||(E=new Error("Aborted because "+u+" is not accepted"+I));break;case"accepted":n.onAccepted&&n.onAccepted(D),j=!0;break;case"disposed":n.onDisposed&&n.onDisposed(D),P=!0;break;default:throw new Error("Unexception type "+D.type)}if(E)return p("abort"),Promise.reject(E);if(j)for(u in m[u]=v[u],s(b,D.outdatedModules),D.outdatedDependencies)Object.prototype.hasOwnProperty.call(D.outdatedDependencies,u)&&(h[u]||(h[u]=[]),s(h[u],D.outdatedDependencies[u]));P&&(s(b,[D.moduleId]),m[u]=g)}var S,M=[];for(t=0;t<b.length;t++)u=b[t],x[u]&&x[u].hot._selfAccepted&&M.push({module:u,errorHandler:x[u].hot._selfAccepted});p("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete installedChunks[e]}(e)});for(var k,A,q=b.slice();q.length>0;)if(u=q.pop(),a=x[u]){var L={},U=a.hot._disposeHandlers;for(c=0;c<U.length;c++)(r=U[c])(L);for(i[u]=L,a.hot.active=!1,delete x[u],delete h[u],c=0;c<a.children.length;c++){var R=x[a.children[c]];R&&((S=R.parents.indexOf(u))>=0&&R.parents.splice(S,1))}}for(u in h)if(Object.prototype.hasOwnProperty.call(h,u)&&(a=x[u]))for(A=h[u],c=0;c<A.length;c++)k=A[c],(S=a.children.indexOf(k))>=0&&a.children.splice(S,1);for(u in p("apply"),o=y,m)Object.prototype.hasOwnProperty.call(m,u)&&(e[u]=m[u]);var T=null;for(u in h)if(Object.prototype.hasOwnProperty.call(h,u)&&(a=x[u])){A=h[u];var C=[];for(t=0;t<A.length;t++)if(k=A[t],r=a.hot._acceptedDependencies[k]){if(-1!==C.indexOf(r))continue;C.push(r)}for(t=0;t<C.length;t++){r=C[t];try{r(A)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:u,dependencyId:A[t],error:e}),n.ignoreErrored||T||(T=e)}}}for(t=0;t<M.length;t++){var N=M[t];u=N.module,d=[u];try{H(u)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(r){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:r,originalError:e}),n.ignoreErrored||T||(T=r),T||(T=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:u,error:e}),n.ignoreErrored||T||(T=e)}}return T?(p("fail"),Promise.reject(T)):(p("idle"),new Promise(function(e){e(b)}))}var x={};function H(n){if(x[n])return x[n].exports;var r=x[n]={i:n,l:!1,exports:{},hot:l(n),parents:(a=d,d=[],a),children:[]};return e[n].call(r.exports,r,r.exports,u(n)),r.l=!0,r.exports}H.m=e,H.c=x,H.d=function(e,n,r){H.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},H.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},H.t=function(e,n){if(1&n&&(e=H(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(H.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)H.d(r,t,function(n){return e[n]}.bind(null,t));return r},H.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return H.d(n,"a",n),n},H.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},H.p="",H.h=function(){return o},u(0)(H.s=0)}([function(e,n,r){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){switch(t(e)){case"object":return c(e);case"string":return n=e,(r=new Image).src=n,void r.addEventListener("load",function(){return c(r)});default:return!1}var n,r}function c(e){var n=document.createElement("canvas"),r=e.width,t=e.height;r>200&&(r=100),t>200&&(r=100),n.width=r,n.height=t;var o=n.getContext("2d");o.drawImage(e,0,0,n.width,n.height);for(var c=o.getImageData(0,0,n.width,n.height),i=0,d=0,a=0,u=0,l=c.data.length,s=l/4,f=0;f<l;f+=4)i+=c.data[f],d+=c.data[f+1],a+=c.data[f+2],u+=c.data[f+3];var p=Math.ceil(i/s),h=Math.ceil(d/s),v=Math.ceil(a/s),y=u/s;return"rgba(".concat(p,", ").concat(h,", ").concat(v,", ").concat(y,")")}r.r(n),r.d(n,"default",function(){return c});var i=document.querySelector("#drop_zone");function d(e){e.preventDefault(),e.stopPropagation()}function a(e){var n=new FileReader;n.onload=l,n.readAsDataURL(e)}function u(e){var n=o(e.target);document.body.style.backgroundColor=n}function l(e){var n=new Image;n.src=e.target.result,n.addEventListener("load",u)}document.body.querySelector("#file-inpur").addEventListener("change",function(e){var n=e.target;n.files&&n.files[0]&&a(n.files[0])}),i.addEventListener("drop",function(e){var n=e.dataTransfer;if(n.files&&n.files[0]){var r=n.files;a(r[0])}},!1),["dragenter","dragover","dragleave","drop"].forEach(function(e){i.addEventListener(e,d,!1)})}]);
//# sourceMappingURL=app.bundle.js.map
