window.Modernizr=function(e,t,n){function r(e){h.cssText=e}function o(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function i(e,t){for(var r in e){var o=e[r];if(!a(o,"-")&&h[o]!==n)return"pfx"!=t||o}return!1}function c(e,t,r){for(var a in e){var i=t[e[a]];if(i!==n)return!1===r?e[a]:o(i,"function")?i.bind(r||t):i}return!1}function s(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+x.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?i(a,t):c(a=(e+" "+w.join(r+" ")+r).split(" "),t,n)}var u,l,d={},f=t.documentElement,m="modernizr",p=t.createElement(m),h=p.style,g=t.createElement("input"),v=":)",y={}.toString,b=" -webkit- -moz- -o- -ms- ".split(" "),E="Webkit Moz O ms",x=E.split(" "),w=E.toLowerCase().split(" "),S="http://www.w3.org/2000/svg",C={},k={},T={},N=[],M=N.slice,P=function(e,n,r,o){var a,i,c,s,u=t.createElement("div"),l=t.body,d=l||t.createElement("body");if(parseInt(r,10))for(;r--;)(c=t.createElement("div")).id=o?o[r]:m+(r+1),u.appendChild(c);return a=["&#173;",'<style id="s',m,'">',e,"</style>"].join(""),u.id=m,(l?u:d).innerHTML+=a,d.appendChild(u),l||(d.style.background="",d.style.overflow="hidden",s=f.style.overflow,f.style.overflow="hidden",f.appendChild(d)),i=n(u,e),l?u.parentNode.removeChild(u):(d.parentNode.removeChild(d),f.style.overflow=s),!!i},j=function(){var e={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return function(r,a){a=a||t.createElement(e[r]||"div");var i=(r="on"+r)in a;return i||(a.setAttribute||(a=t.createElement("div")),a.setAttribute&&a.removeAttribute&&(a.setAttribute(r,""),i=o(a[r],"function"),o(a[r],"undefined")||(a[r]=n),a.removeAttribute(r))),a=null,i}}(),$={}.hasOwnProperty;for(var D in l=o($,"undefined")||o($.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return $.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=M.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var a=new o,i=t.apply(a,n.concat(M.call(arguments)));return Object(i)===i?i:a}return t.apply(e,n.concat(M.call(arguments)))};return r}),C.flexbox=function(){return s("flexWrap")},C.flexboxlegacy=function(){return s("boxDirection")},C.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},C.canvastext=function(){return!(!d.canvas||!o(t.createElement("canvas").getContext("2d").fillText,"function"))},C.webgl=function(){return!!e.WebGLRenderingContext},C.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:P(["@media (",b.join("touch-enabled),("),m,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},C.geolocation=function(){return"geolocation"in navigator},C.postmessage=function(){return!!e.postMessage},C.websqldatabase=function(){return!!e.openDatabase},C.indexedDB=function(){return!!s("indexedDB",e)},C.hashchange=function(){return j("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},C.history=function(){return!(!e.history||!history.pushState)},C.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},C.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},C.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(h.backgroundColor,"rgba")},C.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(h.backgroundColor,"rgba")||a(h.backgroundColor,"hsla")},C.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(h.background)},C.backgroundsize=function(){return s("backgroundSize")},C.borderimage=function(){return s("borderImage")},C.borderradius=function(){return s("borderRadius")},C.boxshadow=function(){return s("boxShadow")},C.textshadow=function(){return""===t.createElement("div").style.textShadow},C.opacity=function(){return e="opacity:.55",r(b.join(e+";")+(t||"")),/^0.55$/.test(h.opacity);var e,t},C.cssanimations=function(){return s("animationName")},C.csscolumns=function(){return s("columnCount")},C.cssgradients=function(){var e="background-image:";return r((e+"-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));"+e)+b.join("linear-gradient(left top,#9f9, white);"+e)).slice(0,-e.length)),a(h.backgroundImage,"gradient")},C.cssreflections=function(){return s("boxReflect")},C.csstransforms=function(){return!!s("transform")},C.csstransforms3d=function(){var e=!!s("perspective");return e&&"webkitPerspective"in f.style&&P("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},C.csstransitions=function(){return s("transition")},C.fontface=function(){var e;return P('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),a=o.sheet||o.styleSheet,i=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"";e=/src/i.test(i)&&0===i.indexOf(r.split(" ")[0])}),e},C.generatedcontent=function(){var e;return P(["#",m,"{font:0/0 a}#",m,':after{content:"',v,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},C.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&((n=new Boolean(n)).ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return n},C.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&((n=new Boolean(n)).ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return n},C.localstorage=function(){try{return localStorage.setItem(m,m),localStorage.removeItem(m),!0}catch(e){return!1}},C.sessionstorage=function(){try{return sessionStorage.setItem(m,m),sessionStorage.removeItem(m),!0}catch(e){return!1}},C.webworkers=function(){return!!e.Worker},C.applicationcache=function(){return!!e.applicationCache},C.svg=function(){return!!t.createElementNS&&!!t.createElementNS(S,"svg").createSVGRect},C.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==S},C.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(y.call(t.createElementNS(S,"animate")))},C.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(y.call(t.createElementNS(S,"clipPath")))},C)l(C,D)&&(u=D.toLowerCase(),d[u]=C[D](),N.push((d[u]?"":"no-")+u));return d.input||(d.input=function(n){for(var r=0,o=n.length;o>r;r++)T[n[r]]=!!(n[r]in g);return T.list&&(T.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),T}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),d.inputtypes=function(e){for(var r,o,a,i=0,c=e.length;c>i;i++)g.setAttribute("type",o=e[i]),(r="text"!==g.type)&&(g.value=v,g.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&g.style.WebkitAppearance!==n?(f.appendChild(g),r=(a=t.defaultView).getComputedStyle&&"textfield"!==a.getComputedStyle(g,null).WebkitAppearance&&0!==g.offsetHeight,f.removeChild(g)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?g.checkValidity&&!1===g.checkValidity():g.value!=v)),k[e[i]]=!!r;return k}("search tel url email datetime date month week time datetime-local number range color".split(" "))),d.addTest=function(e,t){if("object"==typeof e)for(var r in e)l(e,r)&&d.addTest(r,e[r]);else{if(e=e.toLowerCase(),d[e]!==n)return d;t="function"==typeof t?t():t,f.className+=" "+(t?"":"no-")+e,d[e]=t}return d},r(""),p=g=null,function(e,t){function n(){var e=h.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=p[e[f]];return t||(t={},m++,e[f]=m,p[m]=t),t}function o(e,n,o){return n||(n=t),s?n.createElement(e):(o||(o=r(n)),!(a=o.cache[e]?o.cache[e].cloneNode():d.test(e)?(o.cache[e]=o.createElem(e)).cloneNode():o.createElem(e)).canHaveChildren||l.test(e)||a.tagUrn?a:o.frag.appendChild(a));var a}function a(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return h.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(h,t.frag)}function i(e){e||(e=t);var n=r(e);return!h.shivCSS||c||n.hasCSS||(n.hasCSS=!!function(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),s||a(e,n),e}var c,s,u=e.html5||{},l=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,d=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f="_html5shiv",m=0,p={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,s=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){c=!0,s=!0}}();var h={elements:u.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==u.shivCSS,supportsUnknownElements:s,shivMethods:!1!==u.shivMethods,type:"default",shivDocument:i,createElement:o,createDocumentFragment:function(e,o){if(e||(e=t),s)return e.createDocumentFragment();for(var a=(o=o||r(e)).frag.cloneNode(),i=0,c=n(),u=c.length;u>i;i++)a.createElement(c[i]);return a}};e.html5=h,i(t)}(this,t),d._version="2.8.3",d._prefixes=b,d._domPrefixes=w,d._cssomPrefixes=x,d.mq=function(t){var n,r=e.matchMedia||e.msMatchMedia;return r?r(t)&&r(t).matches||!1:(P("@media "+t+" { #"+m+" { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),n)},d.hasEvent=j,d.testProp=function(e){return i([e])},d.testAllProps=s,d.testStyles=P,d.prefixed=function(e,t,n){return t?s(e,t,n):s(e,"pfx")},f.className=f.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+N.join(" "),d}(this,this.document);