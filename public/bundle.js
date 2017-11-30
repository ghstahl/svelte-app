!function(){"use strict";function t(){}function e(t){for(var e,n,o=1,i=arguments.length;o<i;o++){n=arguments[o];for(e in n)t[e]=n[e]}return t}function n(t,e){e.appendChild(t)}function o(t,e,n){e.insertBefore(t,n)}function i(t){t.parentNode.removeChild(t)}function r(){return document.createDocumentFragment()}function a(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function c(t,e,n){t.addEventListener(e,n,!1)}function u(t,e,n){t.removeEventListener(e,n,!1)}function h(){return Object.create(null)}function f(e){this.destroy=t,this.fire("destroy"),this.set=this.get=t,!1!==e&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function l(t,e){return t!==e||t&&"object"==typeof t||"function"==typeof t}function d(t,e,n,o,i){for(var r in e)if(n[r]){var a=o[r],s=i[r],c=e[r];if(c)for(var u=0;u<c.length;u+=1){var h=c[u];h.__calling||(h.__calling=!0,h.call(t,a,s),h.__calling=!1)}}}function p(t,e){t.options=e,t._observers={pre:h(),post:h()},t._handlers=h(),t._root=e._root||t,t._bind=e._bind}function g(t){for(;t&&t.length;)t.pop()()}function v(n){p(this,n),this._state=e({},n.data),this._fragment=function(e,n){var r;return{c:function(){(r=a("h1")).textContent="Hello Svelte"},m:function(t,e){o(r,t,e)},p:t,u:function(){i(r)},d:t}}(this._state),n.target&&(this._fragment.c(),this._fragment.m(n.target,n.anchor||null))}function _(){}function m(t,e){function r(t){e.goHome()}function h(t){e.incrementCount()}function f(t){e.corsTest()}function l(t){e.corsTest2()}function d(t){e.fetchIdentity()}var p,g,v,_,m,b,w,S,k,O,A,P,x,C,E,T,L,H,j,R,M,U,I,q,N,B,G,W,D,z,F,J,$,V=t.identity.oidc.access_token,Y=t.identity.access_code,K=t.identity.oidc.access_token&&y(t,e);return{c:function(){(p=a("h1")).textContent="Welcome Svelte",g=s("\r\n"),(v=a("button")).textContent="Go Home",_=s("\r\n\r\n"),m=a("p"),b=s("Count: "),w=s(t.count),S=s("\r\n"),(k=a("button")).textContent="+1",O=s("\r\n"),(A=a("button")).textContent="corsTest",P=s("\r\n"),x=a("p"),C=s("pet: "),E=s(t.pet),T=s("\r\n"),(L=a("button")).textContent="corsTest2",H=s("\r\n"),j=a("p"),R=s("corsTest2: "),M=s(t.corsTest2),U=s("\r\n"),(I=a("button")).textContent="fetchIdentity",q=s("\r\n"),N=a("p"),B=s("identity.oidc.access_token: "),G=s(V),W=s("\r\n"),D=a("p"),z=s("identity.access_code: "),F=s(Y),J=s("\r\n\r\n"),K&&K.c(),$=document.createComment(""),this.h()},h:function(){!function(t){!function(t,e,n){t.setAttribute(e,n)}(t,"svelte-2568122580","")}(p),c(v,"click",r),c(k,"click",h),c(A,"click",f),c(L,"click",l),c(I,"click",d)},m:function(t,e){o(p,t,e),o(g,t,e),o(v,t,e),o(_,t,e),o(m,t,e),n(b,m),n(w,m),o(S,t,e),o(k,t,e),o(O,t,e),o(A,t,e),o(P,t,e),o(x,t,e),n(C,x),n(E,x),o(T,t,e),o(L,t,e),o(H,t,e),o(j,t,e),n(R,j),n(M,j),o(U,t,e),o(I,t,e),o(q,t,e),o(N,t,e),n(B,N),n(G,N),o(W,t,e),o(D,t,e),n(z,D),n(F,D),o(J,t,e),K&&K.m(t,e),o($,t,e)},p:function(t,n){t.count&&(w.data=n.count),t.pet&&(E.data=n.pet),t.corsTest2&&(M.data=n.corsTest2),t.identity&&V!==(V=n.identity.oidc.access_token)&&(G.data=V),t.identity&&Y!==(Y=n.identity.access_code)&&(F.data=Y),n.identity.oidc.access_token?K?K.p(t,n):((K=y(n,e)).c(),K.m($.parentNode,$)):K&&(K.u(),K.d(),K=null)},u:function(){i(p),i(g),i(v),i(_),i(m),i(S),i(k),i(O),i(A),i(P),i(x),i(T),i(L),i(H),i(j),i(U),i(I),i(q),i(N),i(W),i(D),i(J),K&&K.u(),i($)},d:function(){u(v,"click",r),u(k,"click",h),u(A,"click",f),u(L,"click",l),u(I,"click",d),K&&K.d()}}}function y(t,e){function r(t){e.establishAuthenticatedSession()}function h(t){e.checkAuthenticatedSession()}var f,l,d,p,g,v,_,m,y,b,w,S=t.establishSession.message,k=t.checkAuthenticatedSession.message;return{c:function(){(f=a("button")).textContent="establishAuthenticatedSession",l=s("\r\n\t"),d=a("p"),p=s("establishSession.message: "),g=s(S),v=s("\r\n\t"),(_=a("button")).textContent="checkAuthenticatedSession",m=s("\r\n\t"),y=a("p"),b=s("checkAuthenticatedSession.message: "),w=s(k),this.h()},h:function(){c(f,"click",r),c(_,"click",h)},m:function(t,e){o(f,t,e),o(l,t,e),o(d,t,e),n(p,d),n(g,d),o(v,t,e),o(_,t,e),o(m,t,e),o(y,t,e),n(b,y),n(w,y)},p:function(t,e){t.establishSession&&S!==(S=e.establishSession.message)&&(g.data=S),t.checkAuthenticatedSession&&k!==(k=e.checkAuthenticatedSession.message)&&(w.data=k)},u:function(){i(f),i(l),i(d),i(v),i(_),i(m),i(y)},d:function(){u(f,"click",r),u(_,"click",h)}}}function b(t){p(this,t),this._state=e({establishSession:{},checkAuthenticatedSession:{},user:{loggedIn:!1},pet:"",identity:{oidc:{access_token:null}},count:0,corsTest2:""},t.data),this._handlers.destroy=[_];var n=function(){localStorage.getItem("user")&&this.set({user:{loggedIn:!0}})}.bind(this);t._root?this._root._oncreate.push(n):this._oncreate=[n],this._fragment=m(this._state,this),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null),g(this._oncreate))}function w(n){p(this,n),this._state=e({},n.data),this._fragment=function(e,n){function r(t){n.goHome()}var h,f,l;return{c:function(){(h=a("h1")).textContent="Hello replace method",f=s("\r\n"),(l=a("button")).textContent="Go Home",this.h()},h:function(){c(l,"click",r)},m:function(t,e){o(h,t,e),o(f,t,e),o(l,t,e)},p:t,u:function(){i(h),i(f),i(l)},d:function(){u(l,"click",r)}}}(this._state,this),n.target&&(this._fragment.c(),this._fragment.m(n.target,n.anchor||null))}function S(){T.destroy()}function k(c){p(this,c),this._state=e({},c.data),this._handlers.destroy=[S];var u=function(){T.create("#app")}.bind(this);c._root?this._root._oncreate.push(u):(this._oncreate=[u],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(e,c){var u,h,f,l,d,p,g,v,_=new E({_root:c._root,slots:{default:r()},data:{to:"/"}}),m=new E({_root:c._root,slots:{default:r()},data:{to:"/welcome"}}),y=new E({_root:c._root,slots:{default:r()},data:{to:"/test/replace",replace:!0}});return{c:function(){u=a("div"),h=s("Home"),_._fragment.c(),f=s("\r\n\t"),l=s("Welcome"),m._fragment.c(),d=s("\r\n\t"),p=s("Replace"),y._fragment.c(),g=s("\r\n\t"),v=a("div"),this.h()},h:function(){v.id="app"},m:function(t,e){o(u,t,e),n(h,_._slotted.default),_._mount(u,null),n(f,u),n(l,m._slotted.default),m._mount(u,null),n(d,u),n(p,y._slotted.default),y._mount(u,null),n(g,u),n(v,u)},p:t,u:function(){i(u)},d:function(){_.destroy(!1),m.destroy(!1),y.destroy(!1)}}}(this._state,this),c.target&&(this._fragment.c(),this._fragment.m(c.target,c.anchor||null),this._lock=!0,g(this._beforecreate),g(this._oncreate),g(this._aftercreate),this._lock=!1)}var O={destroy:f,get:function(t){return t?this._state[t]:this._state},fire:function(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var o=0;o<n.length;o+=1)n[o].call(this,e)},observe:function(t,e,n){var o=n&&n.defer?this._observers.post:this._observers.pre;return(o[t]||(o[t]=[])).push(e),n&&!1===n.init||(e.__calling=!0,e.call(this,this._state[t]),e.__calling=!1),{cancel:function(){var n=o[t].indexOf(e);~n&&o[t].splice(n,1)}}},on:function(t,e){if("teardown"===t)return this.on("destroy",e);var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}},set:function(t){this._set(e({},t)),this._root._lock||(this._root._lock=!0,g(this._root._beforecreate),g(this._root._oncreate),g(this._root._aftercreate),this._root._lock=!1)},teardown:f,_recompute:t,_set:function(t){var n=this._state,o={},i=!1;for(var r in t)l(t[r],n[r])&&(o[r]=i=!0);i&&(this._state=e({},n,t),this._recompute(o,this._state),this._bind&&this._bind(o,this._state),d(this,this._observers.pre,o,this._state,n),this._fragment.p(o,this._state),d(this,this._observers.post,o,this._state,n))},_mount:function(t,e){this._fragment.m(t,e)},_unmount:function(){this._fragment.u()}},A=("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self,function(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}(function(t,e){return e={exports:{}},t(e,e.exports),e.exports}(function(t,e){t.exports=function(){function t(){}function e(t){for(var e,n,o=1,i=arguments.length;o<i;o++){n=arguments[o];for(e in n)t[e]=n[e]}return t}function n(){return Object.create(null)}function o(e){this.destroy=t,this.fire("destroy"),this.set=this.get=t,!1!==e&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function i(t,e){return t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t,e,n,o,i){for(var r in e)if(n[r]){var a=o[r],s=i[r],c=e[r];if(c)for(var u=0;u<c.length;u+=1){var h=c[u];h.__calling||(h.__calling=!0,h.call(t,a,s),h.__calling=!1)}}}function a(t){for(;t&&t.length;)t.pop()()}function s(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function c(t,e){return e={exports:{}},t(e,e.exports),e.exports}function u(t){return"/"===t.charAt(0)}function h(t,e){for(var n=e,o=n+1,i=t.length;o<i;n+=1,o+=1)t[n]=t[o];t.pop()}function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t&&t.split("/")||[],o=e&&e.split("/")||[],i=t&&u(t),r=e&&u(e),a=i||r;if(t&&u(t)?o=n:n.length&&(o.pop(),o=o.concat(n)),!o.length)return"/";var s=void 0;if(o.length){var c=o[o.length-1];s="."===c||".."===c||""===c}else s=!1;for(var f=0,l=o.length;l>=0;l--){var d=o[l];"."===d?h(o,l):".."===d?(h(o,l),f++):f&&(h(o,l),f--)}if(!a)for(;f--;f)o.unshift("..");!a||""===o[0]||o[0]&&u(o[0])||o.unshift("");var p=o.join("/");return s&&"/"!==p.substr(-1)&&(p+="/"),p}function l(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(Array.isArray(t))return Array.isArray(e)&&t.length===e.length&&t.every(function(t,n){return l(t,e[n])});var n=void 0===t?"undefined":w(t);if(n!==(void 0===e?"undefined":w(e)))return!1;if("object"===n){var o=t.valueOf(),i=e.valueOf();if(o!==t||i!==e)return l(o,i);var r=Object.keys(t),a=Object.keys(e);return r.length===a.length&&r.every(function(n){return l(t[n],e[n])})}return!1}function d(){this.get("event")()}function p(t,e){function n(t){var n=e.get();e.navigate(t,n.to)}var o,i,r,a=e._slotted.default;return{c:function(){o=function(t){return document.createElement(t)}("a"),this.h()},h:function(){o.href=i=""+t.basePath+t.to,o.className=r=t.class+" "+(t.active?t.activeClass:""),function(t,e,n){t.addEventListener(e,n,!1)}(o,"click",n)},m:function(t,e){(function(t,e,n){e.insertBefore(t,n)})(o,t,e),a&&function(t,e){e.appendChild(t)}(a,o)},p:function(t,e){(t.basePath||t.to)&&i!==(i=""+e.basePath+e.to)&&(o.href=i),(t.class||t.active||t.activeClass)&&r!==(r=e.class+" "+(e.active?e.activeClass:""))&&(o.className=r)},u:function(){(function(t){t.parentNode.removeChild(t)})(o),a&&function(t,e){for(;t.firstChild;)e.appendChild(t.firstChild)}(o,a)},d:function(){!function(t,e,n){t.removeEventListener(e,n,!1)}(o,"click",n)}}}function g(t){(function(t,e){t.options=e,t._observers={pre:n(),post:n()},t._handlers=n(),t._root=e._root||t,t._bind=e._bind})(this,t),this._state=e({replace:!1,to:"/",basePath:"#",active:!1,class:"",activeClass:T,event:null},t.data),this._handlers.destroy=[d],this._slotted=t.slots||{};var o=function(){this.setActivedClass(E.location),this.set({event:E.listen(this.setActivedClass.bind(this))})}.bind(this);t._root?this._root._oncreate.push(o):this._oncreate=[o],this.slots={},this._fragment=p(this._state,this),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null),a(this._oncreate))}var v={destroy:o,get:function(t){return t?this._state[t]:this._state},fire:function(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var o=0;o<n.length;o+=1)n[o].call(this,e)},observe:function(t,e,n){var o=n&&n.defer?this._observers.post:this._observers.pre;return(o[t]||(o[t]=[])).push(e),n&&!1===n.init||(e.__calling=!0,e.call(this,this._state[t]),e.__calling=!1),{cancel:function(){var n=o[t].indexOf(e);~n&&o[t].splice(n,1)}}},on:function(t,e){if("teardown"===t)return this.on("destroy",e);var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}},set:function(t){this._set(e({},t)),this._root._lock||(this._root._lock=!0,a(this._root._beforecreate),a(this._root._oncreate),a(this._root._aftercreate),this._root._lock=!1)},teardown:o,_recompute:t,_set:function(t){var n=this._state,o={},a=!1;for(var s in t)i(t[s],n[s])&&(o[s]=a=!0);a&&(this._state=e({},n,t),this._recompute(o,this._state),this._bind&&this._bind(o,this._state),r(this,this._observers.pre,o,this._state,n),this._fragment.p(o,this._state),r(this,this._observers.post,o,this._state,n))},_mount:function(t,e){this._fragment.m(t,e)},_unmount:function(){this._fragment.u()}},_=function(){},m=_=function(t,e,n){var o=arguments.length;n=new Array(o>2?o-2:0);for(var i=2;i<o;i++)n[i-2]=arguments[i];if(void 0===e)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(e.length<10||/^[s\W]*$/.test(e))throw new Error("The warning format should be able to uniquely identify this warning. Please, use a more descriptive format than: "+e);if(!t){var r=0,a="Warning: "+e.replace(/%s/g,function(){return n[r++]});"undefined"!=typeof console&&console.error(a);try{throw new Error(a)}catch(t){}}},y=function(t,e,n,o,i,r,a,s){if(void 0===e)throw new Error("invariant requires an error message argument");if(!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,o,i,r,a,s],h=0;(c=new Error(e.replace(/%s/g,function(){return u[h++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}},b=Object.freeze({default:f}),w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S=Object.freeze({default:l}),k=c(function(t,e){e.__esModule=!0,e.addLeadingSlash=function(t){return"/"===t.charAt(0)?t:"/"+t},e.stripLeadingSlash=function(t){return"/"===t.charAt(0)?t.substr(1):t};var n=e.hasBasename=function(t,e){return new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(t)};e.stripBasename=function(t,e){return n(t,e)?t.substr(e.length):t},e.stripTrailingSlash=function(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t},e.parsePath=function(t){var e=t||"/",n="",o="",i=e.indexOf("#");-1!==i&&(o=e.substr(i),e=e.substr(0,i));var r=e.indexOf("?");return-1!==r&&(n=e.substr(r),e=e.substr(0,r)),{pathname:e,search:"?"===n?"":n,hash:"#"===o?"":o}},e.createPath=function(t){var e=t.pathname,n=t.search,o=t.hash,i=e||"/";return n&&"?"!==n&&(i+="?"===n.charAt(0)?n:"?"+n),o&&"#"!==o&&(i+="#"===o.charAt(0)?o:"#"+o),i}});s(k),k.addLeadingSlash,k.stripLeadingSlash,k.hasBasename,k.stripBasename,k.stripTrailingSlash,k.parsePath,k.createPath;var O=b&&f||b,A=S&&l||S,P=c(function(t,e){function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.locationsAreEqual=e.createLocation=void 0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},i=n(O),r=n(A);e.createLocation=function(t,e,n,r){var a=void 0;"string"==typeof t?(a=k.parsePath(t)).state=e:(void 0===(a=o({},t)).pathname&&(a.pathname=""),a.search?"?"!==a.search.charAt(0)&&(a.search="?"+a.search):a.search="",a.hash?"#"!==a.hash.charAt(0)&&(a.hash="#"+a.hash):a.hash="",void 0!==e&&void 0===a.state&&(a.state=e));try{a.pathname=decodeURI(a.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+a.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return n&&(a.key=n),r?a.pathname?"/"!==a.pathname.charAt(0)&&(a.pathname=i.default(a.pathname,r.pathname)):a.pathname=r.pathname:a.pathname||(a.pathname="/"),a},e.locationsAreEqual=function(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash===e.hash&&t.key===e.key&&r.default(t.state,e.state)}});s(P),P.locationsAreEqual,P.createLocation;var x=c(function(t,e){e.__esModule=!0;var n=function(t){return t&&t.__esModule?t:{default:t}}(m);e.default=function(){var t=null,e=[];return{setPrompt:function(e){return n.default(null==t,"A history supports only one prompt at a time"),t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,o,i,r){if(null!=t){var a="function"==typeof t?t(e,o):t;"string"==typeof a?"function"==typeof i?i(a,r):(n.default(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),r(!0)):r(!1!==a)}else r(!0)},appendListener:function(t){var n=!0,o=function(){n&&t.apply(void 0,arguments)};return e.push(o),function(){n=!1,e=e.filter(function(t){return t!==o})}},notifyListeners:function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];e.forEach(function(t){return t.apply(void 0,n)})}}}});s(x);var C=c(function(t,e){e.__esModule=!0,e.canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),e.addEventListener=function(t,e,n){return t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)},e.removeEventListener=function(t,e,n){return t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n)},e.getConfirmation=function(t,e){return e(window.confirm(t))},e.supportsHistory=function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history},e.supportsPopStateOnHashChange=function(){return-1===window.navigator.userAgent.indexOf("Trident")},e.supportsGoWithoutReloadUsingHash=function(){return-1===window.navigator.userAgent.indexOf("Firefox")},e.isExtraneousPopstateEvent=function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")}});s(C),C.canUseDOM,C.addEventListener,C.removeEventListener,C.getConfirmation,C.supportsHistory,C.supportsPopStateOnHashChange,C.supportsGoWithoutReloadUsingHash,C.isExtraneousPopstateEvent;var E=s(c(function(t,e){function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},i=n(m),r=n(y),a=n(x),s={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+k.stripLeadingSlash(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:k.stripLeadingSlash,decodePath:k.addLeadingSlash},slash:{encodePath:k.addLeadingSlash,decodePath:k.addLeadingSlash}},c=function(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},u=function(t){var e=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,e>=0?e:0)+"#"+t)};e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r.default(C.canUseDOM,"Hash history needs a DOM");var e=window.history,n=C.supportsGoWithoutReloadUsingHash(),h=t.getUserConfirmation,f=void 0===h?C.getConfirmation:h,l=t.hashType,d=void 0===l?"slash":l,p=t.basename?k.stripTrailingSlash(k.addLeadingSlash(t.basename)):"",g=s[d],v=g.encodePath,_=g.decodePath,m=function(){var t=_(c());return i.default(!p||k.hasBasename(t,p),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+p+'".'),p&&(t=k.stripBasename(t,p)),P.createLocation(t)},y=a.default(),b=function(t){o(I,t),I.length=e.length,y.notifyListeners(I.location,I.action)},w=!1,S=null,O=function(){var t=c(),e=v(t);if(t!==e)u(e);else{var n=m(),o=I.location;if(!w&&P.locationsAreEqual(o,n))return;if(S===k.createPath(n))return;S=null,A(n)}},A=function(t){w?(w=!1,b()):y.confirmTransitionTo(t,"POP",f,function(e){e?b({action:"POP",location:t}):x(t)})},x=function(t){var e=I.location,n=H.lastIndexOf(k.createPath(e));-1===n&&(n=0);var o=H.lastIndexOf(k.createPath(t));-1===o&&(o=0);var i=n-o;i&&(w=!0,j(i))},E=c(),T=v(E);E!==T&&u(T);var L=m(),H=[k.createPath(L)],j=function(t){i.default(n,"Hash history go(n) causes a full page reload in this browser"),e.go(t)},R=0,M=function(t){1===(R+=t)?C.addEventListener(window,"hashchange",O):0===R&&C.removeEventListener(window,"hashchange",O)},U=!1,I={length:e.length,action:"POP",location:L,createHref:function(t){return"#"+v(p+k.createPath(t))},push:function(t,e){i.default(void 0===e,"Hash history cannot push state; it is ignored");var n=P.createLocation(t,void 0,void 0,I.location);y.confirmTransitionTo(n,"PUSH",f,function(t){if(t){var e=k.createPath(n),o=v(p+e);if(c()!==o){S=e,function(t){window.location.hash=t}(o);var r=H.lastIndexOf(k.createPath(I.location)),a=H.slice(0,-1===r?0:r+1);a.push(e),H=a,b({action:"PUSH",location:n})}else i.default(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),b()}})},replace:function(t,e){i.default(void 0===e,"Hash history cannot replace state; it is ignored");var n=P.createLocation(t,void 0,void 0,I.location);y.confirmTransitionTo(n,"REPLACE",f,function(t){if(t){var e=k.createPath(n),o=v(p+e);c()!==o&&(S=e,u(o));var i=H.indexOf(k.createPath(I.location));-1!==i&&(H[i]=e),b({action:"REPLACE",location:n})}})},go:j,goBack:function(){return j(-1)},goForward:function(){return j(1)},block:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=y.setPrompt(t);return U||(M(1),U=!0),function(){return U&&(U=!1,M(-1)),e()}},listen:function(t){var e=y.appendListener(t);return M(1),function(){M(-1),e()}}};return I}}))(),T="router-link-active",L={navigate:function(t,e){t&&t.preventDefault&&t.preventDefault(),e&&E.location.pathname!==e&&(this.get("replace")?E.replace(e):E.push(e))},setActivedClass:function(t){var e=t.pathname===this.get("to");this.set({active:e})}};e(g.prototype,L,v);var H=function(t){var e=void 0,n=void 0,o=void 0,i=function(n){o&&o.destroy();for(var i in t)if(t.hasOwnProperty(i)&&n.pathname===i){o=new t[i]({target:e});break}};return{create:function(t){e="string"==typeof t?document.querySelector(t):t,n=E.listen(i),i(E.location)},destroy:function(){n&&(n(),n=void 0)}}};return H.push=function(t){E.push(t)},H.replace=function(t){E.replace(t)},H.go=function(t){E.go(t)},H.listen=function(t){E.listen(t)},{createRouter:H,RouterLink:g}}()})));e(v.prototype,O);var P=A.createRouter;e(b.prototype,{goHome:function(){P.push("/")},incrementCount:function(){var t=this.get();this.set({count:t.count+1})},fetchIdentity:function(){var t=this,e=this.get(),n=JSON.stringify({query:"query q($id: String!){identity(input: { id: $id }) {access_code oidc}}",variables:'{"id": "NOF"}',operationName:"q"});fetch("/api/graphql",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:n}).then(function(t){return t.json()}).then(function(n){console.log(n.data),t.set({identity:n.data.identity}),console.log(e)})},establishAuthenticatedSession:function(){var t=this,e=this.get();console.log(e);var n="https://pingo7identityserver4.azurewebsites.net/Account/EstablishAuthenticatedSession?accessToken="+e.identity.oidc.access_token;fetch(n,{credentials:"include",headers:{"Content-Type":"text/plain"},method:"GET"}).then(function(e){console.log(e),t.set({establishSession:{message:"Success"}})}).catch(function(e){t.set({establishSession:{message:e.message}}),console.log("There has been a problem with your fetch operation: "+e.message)})},checkAuthenticatedSession:function(){var t=this,e=this.get();console.log(e);fetch("https://pingo7identityserver4.azurewebsites.net/Account/CheckAuthenticatedSession",{credentials:"include",method:"GET",headers:{"Content-Type":"text/plain"}}).then(function(t){return t.text()}).then(function(e){console.log(e),t.set({checkAuthenticatedSession:{message:e}})}).catch(function(e){t.set({checkAuthenticatedSession:{message:e.message}}),console.log("There has been a problem with your fetch operation: "+e.message)})},corsTest:function(){var t=this,e=(this.get(),JSON.stringify({name:"dog",description:"I am dog"}));fetch("https://pingo7api.azurewebsites.net/api2/OpenApi/Create",{method:"POST",headers:{"Content-Type":"application/json"},body:e}).then(function(t){return t.json()}).then(function(e){console.log(e),t.set({pet:JSON.stringify(e)})})},corsTest2:function(){var t=this;this.get();fetch("https://pingo7api.azurewebsites.net/api2/OpenApi/testing2",{method:"GET",headers:{"Content-Type":"text/plain"}}).then(function(t){return t.json()}).then(function(e){console.log(e),t.set({corsTest2:"api3:"+JSON.stringify(e)})})}},O);var x=A.createRouter;e(w.prototype,{goHome:function(){x.replace("/")}},O);var C=A.createRouter,E=A.RouterLink,T=C({"/":v,"/welcome":b,"/test/replace":w});C.listen(function(t){console.log("router changed")}),e(k.prototype,O),new k({target:document.body,data:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
