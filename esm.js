/*! (c) Andrea Giammarchi (ISC) */var hyperHTML=function(e){"use strict";function t(){return this}function n(e){return e.join(Y).replace(se,o).replace(le,r)}function r(e,t,n,r){return"<"+t+n.replace(fe,i)+r}function i(e,t,n){return t+(n||'"')+X+(n||'"')}function o(e,t,n){return ie.test(t)?e:"<"+t+n+"></"+t+">"}function a(e,t,n,r){return{name:r,node:t,path:n,type:e}}function u(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function c(e,t,n,r){for(var i=e.childNodes,o=i.length,u=0;u<o;){var s=i[u];switch(s.nodeType){case te:var f=r.concat(u);l(s,t,n,f),c(s,t,n,f);break;case ee:s.textContent===X&&(n.shift(),t.push(re.test(e.nodeName)?a("text",e,r):a("any",s,r.concat(u))));break;case ne:re.test(e.nodeName)&&U.call(s.textContent)===Y&&(n.shift(),t.push(a("text",e,r)))}u++}}function l(t,n,r,i){for(var o=new k,u=t.attributes,c=[],l=c.slice.call(u,0),s=l.length,f=0;f<s;){var h=l[f++];if(h.value===X){var d=h.name;if(!o.has(d)){var p=r.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*['"]?$/,"$1"),v=u[p]||u[p.toLowerCase()];o.set(d,v),n.push(a("attr",v,i,p))}c.push(h)}}for(s=c.length,f=0;f<s;){var m=c[f++];/^id$/i.test(m.name)?t.removeAttribute(m.name):t.removeAttributeNode(m)}var g=t.nodeName;if(/^script$/i.test(g)){var b=e.createElement(g);for(s=u.length,f=0;f<s;)b.setAttributeNode(u[f++].cloneNode(!0));b.textContent=t.textContent,t.parentNode.replaceChild(b,t)}}function s(e,t){var r=n(t),i=e.transform;i&&(r=i(r));var o=K(r,e.type);d(o);var a=[];c(o,a,t.slice(0),[]);var l={content:o,updates:function(n){for(var r=[],i=a.length,o=0;o<i;){var c=a[o++],l=u(n,c.path);switch(c.type){case"any":r.push(e.any(l,[]));break;case"attr":r.push(e.attribute(l,c.name,c.node));break;case"text":r.push(e.text(l)),l.textContent=""}}return function(){var e=arguments.length,o=e-1,a=1;if(i!==o)throw new Error(o+" values instead of "+i+"\n"+t.join(", "));for(;a<e;)r[a-1](arguments[a++]);return n}}};return he.set(t,l),l}function f(t,n){var r=he.get(n)||s(t,n),i=Q.call(e,r.content,!0),o={content:i,template:n,updates:r.updates(i)};return de.set(t,o),o}function h(e){return function(t){var n=de.get(e);return null!=n&&n.template===t||(n=f(e,t)),n.updates.apply(null,arguments),n.content}}function d(e){for(var t=e.childNodes,n=t.length;n--;){var r=t[n];1!==r.nodeType&&0===U.call(r.textContent).length&&e.removeChild(r)}}function p(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1],this._=null}function v(e){return this.type=e,h(this)}function m(){var e=We.get(this),t=Ne.apply(null,arguments);return e&&e.template===t[0]?e.tagger.apply(null,t):g.apply(this,t),this}function g(){var e=Ne.apply(null,arguments),t=ve in this?"svg":"html",n=new v(t);We.set(this,{tagger:n,template:e[0]}),this.textContent="",this.appendChild(n.apply(null,e))}function b(e){return arguments.length<2?null==e?Oe("html"):"string"==typeof e?b.wire(null,e):"raw"in e?Oe("html")(e):"nodeType"in e?b.bind(e):Le(e,"html"):("raw"in e?Oe("html"):b.wire).apply(null,arguments)}/*! (c) Andrea Giammarchi - ISC */
var y={};try{y.WeakMap=WeakMap}catch(WeakMap){y.WeakMap=function(e,t){function n(t){i(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(r,this)}function r(e){this.set(e[0],e[1])}var i=t.defineProperty,o=t.hasOwnProperty,a=n.prototype;return a["delete"]=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return o.call(e,this._)},a.set=function(e,t){return i(e,this._,{configurable:!0,value:t}),this},n}(Math.random(),Object)}var w=y.WeakMap,N={};try{N.WeakSet=WeakSet}catch(WeakSet){!function(e,t){function n(){t(this,"_",{value:"_@ungap/weakmap"+e++})}var r=n.prototype;r.add=function(e){return this.has(e)||t(e,this._,{value:!0,configurable:!0}),this},r.has=function(e){return this.hasOwnProperty.call(e,this._)},r["delete"]=function(e){return this.has(e)&&delete e[this._]},N.WeakSet=n}(Math.random(),Object.defineProperty)}var x=N.WeakSet,E={};try{E.Map=Map}catch(Map){E.Map=function(){function e(e){return-1<(t=n.indexOf(e))}var t=0,n=[],r=[];return{"delete":function(i){var o=e(i);return o&&(n.splice(t,1),r.splice(t,1)),o},get:function(n){return e(n)?r[t]:void 0},has:function(t){return e(t)},set:function(i,o){return r[e(i)?t:n.push(i)-1]=o,this}}}}var k=E.Map,C=function(e,t,n,r,i,o){if(i-r<2)t.insertBefore(e(n[r],1),o);else{for(var a=t.ownerDocument.createDocumentFragment();r<i;)a.appendChild(e(n[r++],1));t.insertBefore(a,o)}},A=function(e,t){return e==t},S=function(e){return e},M=function(e,t,n,r,i,o,a){var u=o-i;if(u<1)return-1;for(;n-t>=u;){for(var c=t,l=i;c<n&&l<o&&a(e[c],r[l]);)c++,l++;if(l===o)return t;t=c+1}return-1},_=function(e,t,n,r,i,o){for(;r<i&&o(n[r],e[t-1]);)r++,t--;return 0===t},j=function(e,t,n,r,i){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:i},T=function(e,t,n,r,i){if(i-r<2)t.removeChild(e(n[r],-1));else{var o=t.ownerDocument.createRange();o.setStartBefore(e(n[r],-1)),o.setEndAfter(e(n[i-1],-1)),o.deleteContents()}},O=function(e,t,n,r,i,o,a,u){var c=0,l=r<u?r:u,s=Array(l++),f=Array(l);f[0]=-1;for(var h=1;h<l;h++)f[h]=a;for(var d=new k,p=o;p<a;p++)d.set(i[p],p);for(var v=t;v<n;v++){var m=d.get(e[v]);null!=m&&-1<(c=W(f,l,m))&&(f[c]=m,s[c]={newi:v,oldi:m,prev:s[c-1]})}for(c=--l,--a;f[c]>a;)--c;l=u+r-c;var g=Array(l),b=s[c];for(--n;b;){for(var y=b,w=y.newi,N=y.oldi;n>w;)g[--l]=1,--n;for(;a>N;)g[--l]=-1,--a;g[--l]=0,--n,--a,b=b.prev}for(;n>=t;)g[--l]=1,--n;for(;a>=o;)g[--l]=-1,--a;return g},L=function(e,t,n,r,i,o,a){var u,c,l,s,f,h,d,p=n+o,v=[];e:for(u=0;u<=p;u++){if(u>50)return null;for(d=u-1,f=u?v[u-1]:[0,0],h=v[u]=[],c=-u;c<=u;c+=2){for(s=c===-u||c!==u&&f[d+c-1]<f[d+c+1]?f[d+c+1]:f[d+c-1]+1,l=s-c;s<o&&l<n&&a(r[i+s],e[t+l]);)s++,l++;if(s===o&&l===n)break e;h[u+c]=s}}var m=Array(u/2+p/2),g=m.length-1;for(u=v.length-1;u>=0;u--){for(;s>0&&l>0&&a(r[i+s-1],e[t+l-1]);)m[g--]=0,s--,l--;if(!u)break;d=u-1,f=u?v[u-1]:[0,0],c=s-l,c===-u||c!==u&&f[d+c-1]<f[d+c+1]?(l--,m[g--]=1):(s--,m[g--]=-1)}return m},P=function(e,t,n,r,i,o,a,u,c){for(var l=new k,s=e.length,f=a,h=0;h<s;)switch(e[h++]){case 0:i++,f++;break;case 1:l.set(r[i],1),C(t,n,r,i++,i,f<u?t(o[f],1):c);break;case-1:f++}for(h=0;h<s;)switch(e[h++]){case 0:a++;break;case-1:l.has(o[a])?a++:T(t,n,o,a++,a)}},W=function(e,t,n){for(var r=1,i=t;r<i;){var o=(r+i)/2>>>0;n<e[o]?i=o:r=o+1}return r},$=function(e,t,n,r,i,o,a,u,c,l,s,f,h){P(L(n,r,o,a,u,l,f)||O(n,r,i,o,a,u,c,l),e,t,n,r,a,u,s,h)},D=function(e,t,n,r){r||(r={});for(var i=r.compare||A,o=r.node||S,a=null==r.before?null:o(r.before,0),u=t.length,c=u,l=0,s=n.length,f=0;l<c&&f<s&&i(t[l],n[f]);)l++,f++;for(;l<c&&f<s&&i(t[c-1],n[s-1]);)c--,s--;var h=l===c,d=f===s;if(h&&d)return n;if(h&&f<s)return C(o,e,n,f,s,j(o,t,l,u,a)),n;if(d&&l<c)return T(o,e,t,l,c),n;var p=c-l,v=s-f,m=-1;if(p<v){if(-1<(m=M(n,f,s,t,l,c,i)))return C(o,e,n,f,m,o(t[l],0)),C(o,e,n,m+p,s,j(o,t,c,u,a)),n}else if(v<p&&-1<(m=M(t,l,c,n,f,s,i)))return T(o,e,t,l,m),T(o,e,t,m+v,c),n;return p<2||v<2?(C(o,e,n,f,s,o(t[l],0)),T(o,e,t,l,c),n):p===v&&_(n,s,t,l,c,i)?(C(o,e,n,f,s,j(o,t,c,u,a)),n):($(o,e,n,f,s,v,t,l,c,p,u,i,a),n)},F={};F.CustomEvent="function"==typeof CustomEvent?CustomEvent:function(t){function n(t,n){n||(n={});var r=e.createEvent("CustomEvent");return r.initCustomEvent(t,!!n.bubbles,!!n.cancelable,n.detail),r}return n.prototype=new n("").constructor.prototype,n}();var R=F.CustomEvent,H=function(e,t){var n="_"+e+"$";return{get:function(){return this[n]||z(this,n,t.call(this,e))},set:function(e){z(this,n,e)}}},z=function(e,t,n){return Object.defineProperty(e,t,{configurable:!0,value:"function"==typeof n?function(){return e._wire$=n.apply(this,arguments)}:n})[t]},B={},Z={},V=[],G=Z.hasOwnProperty,I=0,q={attributes:B,define:function(e,t){e.indexOf("-")<0?(e in Z||(I=V.push(e)),Z[e]=t):B[e]=t},invoke:function(e,t){for(var n=0;n<I;n++){var r=V[n];if(G.call(e,r))return Z[r](e[r],t)}}},J=Array.isArray||function(e){var t=e.call([]);return function(n){return e.call(n)===t}}({}.toString),K=function(e){function t(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function n(t){return t===i?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",t)}function r(e){var r=n(i),o=n("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",t(r,o.firstChild.childNodes),r}var i="fragment",o="content"in n("template"),a=o?function(e){var t=n("template");return t.innerHTML=e,t.content}:function(e){var r=n(i),o=n("template"),a=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var u=RegExp.$1;o.innerHTML="<table>"+e+"</table>",a=o.querySelectorAll(u)}else o.innerHTML=e,a=o.childNodes;return t(r,a),r};return function(e,t){return("svg"===t?r:a)(e)}}(e),Q=function(e,t,n,r,i){var o="importNode"in e,a=e.createDocumentFragment();return a.appendChild(e.createTextNode("g")),a.appendChild(e.createTextNode("")),(o?e.importNode(a,!0):a.cloneNode(!0)).childNodes.length<2?function u(e,t){for(var n=e.cloneNode(),r=e.childNodes||[],i=r.length,o=0;t&&o<i;o++)n.appendChild(u(r[o],t));return n}:o?e.importNode:function(e,t){return e.cloneNode(!!t)}}(e),U="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},X="-"+Math.random().toFixed(6)+"%";(function(e,t,n){return"content"in e&&(e.innerHTML='<p tabindex="'+X+'"></p>',e.content.childNodes[0].getAttribute("tabindex")==X)})(e.createElement("template"))||(X="_dt: "+X.slice(1,-1)+";");var Y="\x3c!--"+X+"--\x3e",ee=8,te=1,ne=3,re=/^(?:style|textarea)$/i,ie=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,oe=" \\f\\n\\r\\t",ae="[ "+oe+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",ue="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",ce="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",le=new RegExp(ue+ae+ce+"+)([ "+oe+"]*/?>)","g"),se=new RegExp(ue+ae+ce+"*)([ "+oe+"]*/>)","g"),fe=new RegExp("("+ae+"\\s*=\\s*)(['\"]?)"+Y+"\\2","gi"),he=new w,de=new w,pe=function(){function e(e,t,n){return t+"-"+n.toLowerCase()}function t(e,t){var n;return t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style")),n.value="",e.setAttributeNode(n),r(n,!0)}function n(t){var n,r=[];for(n in t)r.push(n.replace(o,e),":",t[n],";");return r.join("")}function r(e,t){var r,o;return function(a){var u,c,l,s;switch(typeof a){case"object":if(a){if("object"===r){if(!t&&o!==a)for(c in o)c in a||(e[c]="")}else t?e.value="":e.cssText="";u=t?{}:e;for(c in a)s=a[c],l="number"!=typeof s||i.test(c)?s:s+"px",!t&&/^--/.test(c)?u.setProperty(c,l):u[c]=l;r="object",t?e.value=n(o=u):o=a;break}default:o!=a&&(r="string",o=a,t?e.value=a||"":e.cssText=a||"")}}}var i=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,o=/([^A-Z])([A-Z]+)/g;return function(e,n){return"ownerSVGElement"in e?t(e,n):r(e.style,!1)}}(),ve="ownerSVGElement",me=function(){var t=!1,n=function(r){if(!("raw"in r)||r.propertyIsEnumerable("raw")||!Object.isFrozen(r.raw)||/Firefox\/(\d+)/.test((e.defaultView.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var i={};return(n=function(e){var t="raw"+e.join("raw");return i[t]||(i[t]=e)})(r)}return t=!0,r};return function(e){return t?e:n(e)}}(),ge=function(e){return e.ownerDocument||e},be=function(e){return ge(e).createDocumentFragment()},ye=function(e,t){return ge(e).createTextNode(t)},we="append"in be(e)?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=t.length,r=0;r<n;r++)e.appendChild(t[r])},Ne=function(e){for(var t=[me(e)],n=1,r=arguments.length;n<r;n++)t[n]=arguments[n];return t},xe=[].slice;p.prototype.valueOf=function(e){var t=null==this._;return t&&(this._=be(this.first)),(t||e)&&we(this._,this.childNodes),this._},p.prototype.remove=function(){this._=null;var e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{var n=ge(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e};var Ee=/*! (c) Andrea Giammarchi */
function(e){function t(e){function t(e){s=new l;for(var t,i=e.length,o=0;o<i;o++)t=e[o],a(t.removedNodes,r,n),a(t.addedNodes,n,r);s=null}function a(e,t,n){for(var r,o=new i(t),a=e.length,u=0;u<a;1===(r=e[u++]).nodeType&&c(r,o,t,n));}function c(e,t,n,r){u.has(e)&&!s[n].has(e)&&(s[r]["delete"](e),s[n].add(e),e.dispatchEvent(t));for(var i=e.children||[],o=i.length,a=0;a<o;c(i[a++],t,n,r));}function l(){this[n]=new o,this[r]=new o}var s=null;try{new MutationObserver(t).observe(e,{subtree:!0,childList:!0})}catch(p){var f=0,h=[],d=function(e){h.push(e),clearTimeout(f),f=setTimeout(function(){t(h.splice(f=0,h.length))},0)};e.addEventListener("DOMNodeRemoved",function(e){d({addedNodes:[],removedNodes:[e.target]})},!0),e.addEventListener("DOMNodeInserted",function(e){d({addedNodes:[e.target],removedNodes:[]})},!0)}}var n="connected",r="dis"+n,i=e.Event,o=e.WeakSet,a=!0,u=new o;return function(e){return a&&(a=!a,t(e.ownerDocument)),u.add(e),e}}({Event:R,WeakSet:x}),ke=function(e){return{html:e}},Ce=function Re(e,t){return"ELEMENT_NODE"in e?e:e.constructor===p?1/t<0?t?e.remove():e.last:t?e.valueOf(!0):e.first:Re(e.render(),t)},Ae=function(e){return"ELEMENT_NODE"in e||e instanceof p||e instanceof t},Se=function(e,t){t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(ke).then(t):Promise.resolve(q.invoke(e,t)).then(t)},Me=function(e){return null!=e&&"then"in e},_e=/^(?:form|list)$/i;v.prototype={attribute:function(e,t,n){var r,i=ve in e;if("style"===t)return pe(e,n,i);if(/^on/.test(t)){var o=t.slice(2);return"connected"===o||"disconnected"===o?Ee(e):t.toLowerCase()in e&&(o=o.toLowerCase()),function(t){r!==t&&(r&&e.removeEventListener(o,r,!1),r=t,t&&e.addEventListener(o,t,!1))}}if("data"===t||!i&&t in e&&!_e.test(t))return function(n){r!==n&&(r=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)))};if(t in q.attributes)return function(n){var i=q.attributes[t](e,n);r!==i&&(r=i,null==i?e.removeAttribute(t):e.setAttribute(t,i))};var a=!1,u=n.cloneNode(!0);return function(t){r!==t&&(r=t,u.value!==t&&(null==t?(a&&(a=!1,e.removeAttributeNode(u)),u.value=t):(u.value=t,a||(a=!0,e.setAttributeNode(u)))))}},any:function(e,t){var n,r={node:Ce,before:e},i=ve in e?"svg":"html",o=!1;return function a(u){switch(typeof u){case"string":case"number":case"boolean":o?n!==u&&(n=u,t[0].textContent=u):(o=!0,n=u,t=D(e.parentNode,t,[ye(e,u)],r));break;case"function":a(u(e));break;case"object":case"undefined":if(null==u){o=!1,t=D(e.parentNode,t,[],r);break}default:if(o=!1,n=u,J(u))if(0===u.length)t.length&&(t=D(e.parentNode,t,[],r));else switch(typeof u[0]){case"string":case"number":case"boolean":a({html:u});break;case"object":if(J(u[0])&&(u=u.concat.apply([],u)),Me(u[0])){Promise.all(u).then(a);break}default:t=D(e.parentNode,t,u,r)}else Ae(u)?t=D(e.parentNode,t,11===u.nodeType?xe.call(u.childNodes):[u],r):Me(u)?u.then(a):"placeholder"in u?Se(u,a):"text"in u?a(String(u.text)):"any"in u?a(u.any):"html"in u?t=D(e.parentNode,t,xe.call(K([].concat(u.html).join(""),i).childNodes),r):a("length"in u?xe.call(u):q.invoke(u,a))}}},text:function(e){var t;return function n(r){if(t!==r){t=r;var i=typeof r;"object"===i&&r?Me(r)?r.then(n):"placeholder"in r?Se(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?xe.call(r).join(""):q.invoke(r,n)):"function"===i?n(r(e)):e.textContent=null==r?"":r}}}};var je=new w,Te=function(e,t){return null==e?Oe(t||"html"):Le(e,t||"html")},Oe=function(e){var t,n,r;return function(){var i=Ne.apply(null,arguments);return r!==i[0]?(r=i[0],n=new v(e),t=Pe(n.apply(n,i))):n.apply(n,i),t}},Le=function(e,t){var n=t.indexOf(":"),r=je.get(e),i=t;return-1<n&&(i=t.slice(n+1),t=t.slice(0,n)||"html"),r||je.set(e,r={}),r[i]||(r[i]=Oe(t))},Pe=function(e){var t=e.childNodes;return 1===t.length?t[0]:new p(xe.call(t,0))},We=new w,$e=function(e){return m.bind(e)},De=q.define,Fe=v.prototype;return b.Component=t,b.bind=$e,b.define=De,b.diff=D,b.hyper=b,b.observe=Ee,b.tagger=Fe,b.wire=Te,b._={WeakMap:w,WeakSet:x},function(e){var n=new w,r=Object.create,i=function(e,t,n){return e.set(t,n),n},o=function(e,t,n,o){var u=t.get(e)||a(e,t);switch(typeof o){case"object":case"function":var c=u.w||(u.w=new w);return c.get(o)||i(c,o,new e(n));default:var l=u.p||(u.p=r(null));return l[o]||(l[o]=new e(n))}},a=function(e,t){var n={w:null,p:null};return t.set(e,n),n},u=function(e){var t=new k;return n.set(e,t),t};Object.defineProperties(t,{"for":{configurable:!0,value:function(e,t){return o(this,n.get(e)||u(e),e,null==t?"default":t)}}}),Object.defineProperties(t.prototype,{handleEvent:{value:function(e){var t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:H("html",e),svg:H("svg",e),state:H("state",function(){return this.defaultState}),defaultState:{get:function(){return{}}},dispatch:{value:function(e,t){var n=this._wire$;if(n){var r=new R(e,{bubbles:!0,cancelable:!0,detail:t});return r.component=this,(n.dispatchEvent?n:n.childNodes[0]).dispatchEvent(r)}return!1}},setState:{value:function(e,t){var n=this.state,r="function"==typeof e?e.call(this,n):e;for(var i in r)n[i]=r[i];return!1!==t&&this.render(),this}}})}(Oe),b}(document);
export default hyperHTML;
export const {Component, bind, define, diff, hyper, wire} = hyperHTML;
