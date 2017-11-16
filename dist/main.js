/*! jQuery v3.1.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.0",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null!=a?a<0?this[a+this.length]:this[a]:f.call(this)},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"label"in b&&b.disabled===a||"form"in b&&b.disabled===a||"form"in b&&b.disabled===!1&&(b.isDisabled===a||b.isDisabled!==!a&&("label"in b||!ea(b))!==a)}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e)}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(_,aa),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=V.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(_,aa),$.test(j[0].type)&&qa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&sa(j),!a)return G.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||$.test(a)&&qa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){if(r.isFunction(b))return r.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return r.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(C.test(b))return r.filter(b,a,c);b=r.filter(b,a)}return r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType})}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/\S+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,
    r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c||"false"!==c&&("null"===c?null:+c+""===c?+c:X.test(c)?JSON.parse(c):c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),Z(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=Z(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),aa=["Top","Right","Bottom","Left"],ba=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ca=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function da(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&_.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ea={};function fa(a){var b,c=a.ownerDocument,d=a.nodeName,e=ea[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ea[d]=e,e)}function ga(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ba(d)&&(e[f]=fa(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ga(this,!0)},hide:function(){return ga(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ba(this)?r(this).show():r(this).hide()})}});var ha=/^(?:checkbox|radio)$/i,ia=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ja=/^$|\/(?:java|ecma)script/i,ka={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option,ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead,ka.th=ka.td;function la(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function ma(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var na=/<|&#?\w+;/;function oa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(na.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ia.exec(f)||["",""])[1].toLowerCase(),i=ka[h]||ka._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=la(l.appendChild(f),"script"),j&&ma(g),c){k=0;while(f=g[k++])ja.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var pa=d.documentElement,qa=/^key/,ra=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,sa=/^([^.]*)(?:\.(.+)|)/;function ta(){return!0}function ua(){return!1}function va(){try{return d.activeElement}catch(a){}}function wa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)wa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ua;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(pa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;c<h;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?r(e,this).index(i)>-1:r.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==va()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===va()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ta:ua,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:ua,isPropagationStopped:ua,isImmediatePropagationStopped:ua,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ta,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ta,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ta,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&qa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ra.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return wa(this,a,b,c,d)},one:function(a,b,c,d){return wa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ua),this.each(function(){r.event.remove(this,a,c,b)})}});var xa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ya=/<script|<style|<link/i,za=/checked\s*(?:[^=]|=\s*.checked.)/i,Aa=/^true\/(.*)/,Ba=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Da(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ea(a){var b=Aa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ga(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ha.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ha(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&za.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(m&&(e=oa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(la(e,"script"),Da),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,la(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ea),l=0;l<i;l++)j=h[l],ja.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ba,""),k))}return a}function Ia(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(la(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&ma(la(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(xa,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=la(h),f=la(a),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);if(b)if(c)for(f=f||la(a),g=g||la(h),d=0,e=f.length;d<e;d++)Fa(f[d],g[d]);else Fa(a,h);return g=la(h,"script"),g.length>0&&ma(g,!i&&la(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(la(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!ya.test(a)&&!ka[(ia.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(la(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(la(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ja=/^margin/,Ka=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),La=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",pa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,pa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Ma(a,b,c){var d,e,f,g,h=a.style;return c=c||La(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ka.test(g)&&Ja.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Na(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Oa=/^(none|table(?!-c[ea]).+)/,Pa={position:"absolute",visibility:"hidden",display:"block"},Qa={letterSpacing:"0",fontWeight:"400"},Ra=["Webkit","Moz","ms"],Sa=d.createElement("div").style;function Ta(a){if(a in Sa)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ra.length;while(c--)if(a=Ra[c]+b,a in Sa)return a}function Ua(a,b,c){var d=_.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Va(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+aa[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+aa[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+aa[f]+"Width",!0,e))):(g+=r.css(a,"padding"+aa[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+aa[f]+"Width",!0,e)));return g}function Wa(a,b,c){var d,e=!0,f=La(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Ma(a,b,f),(d<0||null==d)&&(d=a.style[b]),Ka.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Va(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ma(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=_.exec(c))&&e[1]&&(c=da(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Ma(a,b,d)),"normal"===e&&b in Qa&&(e=Qa[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Oa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Wa(a,b,d):ca(a,Pa,function(){return Wa(a,b,d)})},set:function(a,c,d){var e,f=d&&La(a),g=d&&Va(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=_.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ua(a,c,g)}}}),r.cssHooks.marginLeft=Na(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Ma(a,"marginLeft"))||a.getBoundingClientRect().left-ca(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+aa[d]+b]=f[d]||f[d-2]||f[0];return e}},Ja.test(a)||(r.cssHooks[a+b].set=Ua)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=La(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Xa(a,b,c,d,e){return new Xa.prototype.init(a,b,c,d,e)}r.Tween=Xa,Xa.prototype={constructor:Xa,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Xa.propHooks[this.prop];return a&&a.get?a.get(this):Xa.propHooks._default.get(this)},run:function(a){var b,c=Xa.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Xa.propHooks._default.set(this),this}},Xa.prototype.init.prototype=Xa.prototype,Xa.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Xa.propHooks.scrollTop=Xa.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Xa.prototype.init,r.fx.step={};var Ya,Za,$a=/^(?:toggle|show|hide)$/,_a=/queueHooks$/;function ab(){Za&&(a.requestAnimationFrame(ab),r.fx.tick())}function bb(){return a.setTimeout(function(){Ya=void 0}),Ya=r.now()}function cb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=aa[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function db(a,b,c){for(var d,e=(gb.tweeners[b]||[]).concat(gb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function eb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ba(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],$a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ga([a],!0),j=a.style.display||j,k=r.css(a,"display"),ga([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ga([a],!0),m.done(function(){p||ga([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=db(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function fb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function gb(a,b,c){var d,e,f=0,g=gb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Ya||bb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Ya||bb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(fb(k,j.opts.specialEasing);f<g;f++)if(d=gb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,db,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(gb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return da(c.elem,a,_.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],gb.tweeners[c]=gb.tweeners[c]||[],gb.tweeners[c].unshift(b)},prefilters:[eb],prefilter:function(a,b){b?gb.prefilters.unshift(a):gb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:e.duration="number"==typeof e.duration?e.duration:e.duration in r.fx.speeds?r.fx.speeds[e.duration]:r.fx.speeds._default,null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ba).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=gb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&_a.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(cb(b,!0),a,d,e)}}),r.each({slideDown:cb("show"),slideUp:cb("hide"),slideToggle:cb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Ya=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Ya=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){Za||(Za=a.requestAnimationFrame?a.requestAnimationFrame(ab):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame(Za):a.clearInterval(Za),Za=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var hb,ib=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?hb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);
    if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),hb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ib[b]||r.find.attr;ib[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=ib[g],ib[g]=e,e=null!=c(a,b,d)?g:null,ib[g]=f),e}});var jb=/^(?:input|select|textarea|button)$/i,kb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):jb.test(a.nodeName)||kb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});var lb=/[\t\r\n\f]/g;function mb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,mb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,mb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,mb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=mb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(c)+" ").replace(lb," ").indexOf(b)>-1)return!0;return!1}});var nb=/\r/g,ob=/[\x20\t\r\n\f]+/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(nb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:r.trim(r.text(a)).replace(ob," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type,g=f?null:[],h=f?e+1:d.length,i=e<0?h:f?e:0;i<h;i++)if(c=d[i],(c.selected||i===e)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ha.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,""),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=oa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=r.trim(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||pa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Na(o.pixelPosition,function(a,c){if(c)return c=Ma(a,b),Ka.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});
// ==================================================
// fancyBox v3.1.25
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2017 fancyApps
//
// ==================================================
;(function (window, document, $, undefined) {
    'use strict';

    // If there's no jQuery, fancyBox can't work
    // =========================================

    if ( !$ ) {
        return;
    }

    // Check if fancyBox is already initialized
    // ========================================

    if ( $.fn.fancybox ) {

        $.error('fancyBox already initialized');

        return;
    }

    // Private default settings
    // ========================

    var defaults = {

        // Enable infinite gallery navigation
        loop : false,

        // Space around image, ignored if zoomed-in or viewport smaller than 800px
        margin : [44, 0],

        // Horizontal space between slides
        gutter : 50,

        // Enable keyboard navigation
        keyboard : true,

        // Should display navigation arrows at the screen edges
        arrows : true,

        // Should display infobar (counter and arrows at the top)
        infobar : false,

        // Should display toolbar (buttons at the top)
        toolbar : true,

        // What buttons should appear in the top right corner.
        // Buttons will be created using templates from `btnTpl` option
        // and they will be placed into toolbar (class="fancybox-toolbar"` element)
        buttons : [
            'slideShow',
            'fullScreen',
            'thumbs',
            'close'
        ],

        // Detect "idle" time in seconds
        idleTime : 4,

        // Should display buttons at top right corner of the content
        // If 'auto' - they will be created for content having type 'html', 'inline' or 'ajax'
        // Use template from `btnTpl.smallBtn` for customization
        smallBtn : 'auto',

        // Disable right-click and use simple image protection for images
        protect : false,

        // Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
        modal : false,

        image : {

            // Wait for images to load before displaying
            // Requires predefined image dimensions
            // If 'auto' - will zoom in thumbnail if 'width' and 'height' attributes are found
            preload : "auto",

        },

        ajax : {

            // Object containing settings for ajax request
            settings : {

                // This helps to indicate that request comes from the modal
                // Feel free to change naming
                data : {
                    fancybox : true
                }
            }

        },

        iframe : {

            // Iframe template
            tpl : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',

            // Preload iframe before displaying it
            // This allows to calculate iframe content width and height
            // (note: Due to "Same Origin Policy", you can't get cross domain data).
            preload : true,

            // Custom CSS styling for iframe wrapping element
            // You can use this to set custom iframe dimensions
            css : {},

            // Iframe tag attributes
            attr : {
                scrolling : 'auto'
            }

        },

        // Open/close animation type
        // Possible values:
        //   false            - disable
        //   "zoom"           - zoom images from/to thumbnail
        //   "fade"
        //   "zoom-in-out"
        //
        animationEffect : "zoom",

        // Duration in ms for open/close animation
        animationDuration : 366,

        // Should image change opacity while zooming
        // If opacity is 'auto', then opacity will be changed if image and thumbnail have different aspect ratios
        zoomOpacity : 'auto',

        // Transition effect between slides
        //
        // Possible values:
        //   false            - disable
        //   "fade'
        //   "slide'
        //   "circular'
        //   "tube'
        //   "zoom-in-out'
        //   "rotate'
        //
        transitionEffect : "fade",

        // Duration in ms for transition animation
        transitionDuration : 366,

        // Custom CSS class for slide element
        slideClass : '',

        // Custom CSS class for layout
        baseClass : '',

        // Base template for layout
        baseTpl	:
        '<div class="fancybox-container" role="dialog" tabindex="-1">' +
        '<div class="fancybox-bg"></div>' +
        '<div class="fancybox-inner">' +
        '<div class="fancybox-infobar">' +
        '<button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button>' +
        '<div class="fancybox-infobar__body">' +
        '<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>' +
        '</div>' +
        '<button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button>' +
        '</div>' +
        '<div class="fancybox-toolbar">' +
        '{{BUTTONS}}' +
        '</div>' +
        '<div class="fancybox-navigation">' +
        '<button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" />' +
        '<button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" />' +
        '</div>' +
        '<div class="fancybox-stage"></div>' +
        '<div class="fancybox-caption-wrap">' +
        '<div class="fancybox-caption"></div>' +
        '</div>' +
        '</div>' +
        '</div>',

        // Loading indicator template
        spinnerTpl : '<div class="fancybox-loading"></div>',

        // Error message template
        errorTpl : '<div class="fancybox-error"><p>{{ERROR}}<p></div>',

        btnTpl : {
            slideShow  : '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',
            fullScreen : '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',
            thumbs     : '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',
            close      : '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',

            // This small close button will be appended to your html/inline/ajax content by default,
            // if "smallBtn" option is not set to false
            smallBtn   : '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>'
        },

        // Container is injected into this element
        parentEl : 'body',


        // Focus handling
        // ==============

        // Try to focus on the first focusable element after opening
        autoFocus : true,

        // Put focus back to active element after closing
        backFocus : true,

        // Do not let user to focus on element outside modal content
        trapFocus : true,


        // Module specific options
        // =======================

        fullScreen : {
            autoStart : false,
        },

        touch : {
            vertical : true,  // Allow to drag content vertically
            momentum : true   // Continue movement after releasing mouse/touch when panning
        },

        // Hash value when initializing manually,
        // set `false` to disable hash change
        hash : null,

        // Customize or add new media types
        // Example:
        /*
        media : {
            youtube : {
                params : {
                    autoplay : 0
                }
            }
        }
        */
        media : {},

        slideShow : {
            autoStart : false,
            speed     : 4000
        },

        thumbs : {
            autoStart   : false,   // Display thumbnails on opening
            hideOnClose : true     // Hide thumbnail grid when closing animation starts
        },

        // Callbacks
        //==========

        // See Documentation/API/Events for more information
        // Example:
        /*
            afterShow: function( instance, current ) {
                 console.info( 'Clicked element:' );
                 console.info( current.opts.$orig );
            }
        */

        onInit       : $.noop,  // When instance has been initialized

        beforeLoad   : $.noop,  // Before the content of a slide is being loaded
        afterLoad    : $.noop,  // When the content of a slide is done loading

        beforeShow   : $.noop,  // Before open animation starts
        afterShow    : $.noop,  // When content is done loading and animating

        beforeClose  : $.noop,  // Before the instance attempts to close. Return false to cancel the close.
        afterClose   : $.noop,  // After instance has been closed

        onActivate   : $.noop,  // When instance is brought to front
        onDeactivate : $.noop,  // When other instance has been activated


        // Interaction
        // ===========

        // Use options below to customize taken action when user clicks or double clicks on the fancyBox area,
        // each option can be string or method that returns value.
        //
        // Possible values:
        //   "close"           - close instance
        //   "next"            - move to next gallery item
        //   "nextOrClose"     - move to next gallery item or close if gallery has only one item
        //   "toggleControls"  - show/hide controls
        //   "zoom"            - zoom image (if loaded)
        //   false             - do nothing

        // Clicked on the content
        clickContent : function( current, event ) {
            return current.type === 'image' ? 'zoom' : false;
        },

        // Clicked on the slide
        clickSlide : 'close',

        // Clicked on the background (backdrop) element
        clickOutside : 'close',

        // Same as previous two, but for double click
        dblclickContent : false,
        dblclickSlide   : false,
        dblclickOutside : false,


        // Custom options when mobile device is detected
        // =============================================

        mobile : {
            clickContent : function( current, event ) {
                return current.type === 'image' ? 'toggleControls' : false;
            },
            clickSlide : function( current, event ) {
                return current.type === 'image' ? 'toggleControls' : "close";
            },
            dblclickContent : function( current, event ) {
                return current.type === 'image' ? 'zoom' : false;
            },
            dblclickSlide : function( current, event ) {
                return current.type === 'image' ? 'zoom' : false;
            }
        },


        // Internationalization
        // ============

        lang : 'en',
        i18n : {
            'en' : {
                CLOSE       : 'Close',
                NEXT        : 'Next',
                PREV        : 'Previous',
                ERROR       : 'The requested content cannot be loaded. <br/> Please try again later.',
                PLAY_START  : 'Start slideshow',
                PLAY_STOP   : 'Pause slideshow',
                FULL_SCREEN : 'Full screen',
                THUMBS      : 'Thumbnails'
            },
            'de' : {
                CLOSE       : 'Schliessen',
                NEXT        : 'Weiter',
                PREV        : 'Zurück',
                ERROR       : 'Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.',
                PLAY_START  : 'Diaschau starten',
                PLAY_STOP   : 'Diaschau beenden',
                FULL_SCREEN : 'Vollbild',
                THUMBS      : 'Vorschaubilder'
            }
        }

    };

    // Few useful variables and methods
    // ================================

    var $W = $(window);
    var $D = $(document);

    var called = 0;


    // Check if an object is a jQuery object and not a native JavaScript object
    // ========================================================================

    var isQuery = function ( obj ) {
        return obj && obj.hasOwnProperty && obj instanceof $;
    };


    // Handle multiple browsers for "requestAnimationFrame" and "cancelAnimationFrame"
    // ===============================================================================

    var requestAFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            // if all else fails, use setTimeout
            function (callback) {
                return window.setTimeout(callback, 1000 / 60);
            };
    })();


    // Detect the supported transition-end event property name
    // =======================================================

    var transitionEnd = (function () {
        var t, el = document.createElement("fakeelement");

        var transitions = {
            "transition"      : "transitionend",
            "OTransition"     : "oTransitionEnd",
            "MozTransition"   : "transitionend",
            "WebkitTransition": "webkitTransitionEnd"
        };

        for (t in transitions) {
            if (el.style[t] !== undefined){
                return transitions[t];
            }
        }
    })();


    // Force redraw on an element.
    // This helps in cases where the browser doesn't redraw an updated element properly.
    // =================================================================================

    var forceRedraw = function( $el ) {
        return ( $el && $el.length && $el[0].offsetHeight );
    };


    // Class definition
    // ================

    var FancyBox = function( content, opts, index ) {
        var self = this;

        self.opts  = $.extend( true, { index : index }, defaults, opts || {} );

        // Exclude buttons option from deep merging
        if ( opts && $.isArray( opts.buttons ) ) {
            self.opts.buttons = opts.buttons;
        }

        self.id    = self.opts.id || ++called;
        self.group = [];

        self.currIndex = parseInt( self.opts.index, 10 ) || 0;
        self.prevIndex = null;

        self.prevPos = null;
        self.currPos = 0;

        self.firstRun = null;

        // Create group elements from original item collection
        self.createGroup( content );

        if ( !self.group.length ) {
            return;
        }

        // Save last active element and current scroll position
        self.$lastFocus = $(document.activeElement).blur();

        // Collection of gallery objects
        self.slides = {};

        self.init( content );

    };

    $.extend(FancyBox.prototype, {

        // Create DOM structure
        // ====================

        init : function() {
            var self = this;

            var testWidth, $container, buttonStr;

            var firstItemOpts = self.group[ self.currIndex ].opts;

            self.scrollTop  = $D.scrollTop();
            self.scrollLeft = $D.scrollLeft();


            // Hide scrollbars
            // ===============

            if ( !$.fancybox.getInstance() && !$.fancybox.isMobile && $( 'body' ).css('overflow') !== 'hidden' ) {
                testWidth = $( 'body' ).width();

                $( 'html' ).addClass( 'fancybox-enabled' );

                // Compare body width after applying "overflow: hidden"
                testWidth = $( 'body' ).width() - testWidth;

                // If width has changed - compensate missing scrollbars by adding right margin
                if ( testWidth > 1 ) {
                    $( 'head' ).append( '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: ' + testWidth + 'px; }</style>' );
                }
            }


            // Build html markup and set references
            // ====================================

            // Build html code for buttons and insert into main template
            buttonStr = '';

            $.each( firstItemOpts.buttons, function( index, value ) {
                buttonStr += ( firstItemOpts.btnTpl[ value ] || '' );
            });

            // Create markup from base template, it will be initially hidden to
            // avoid unnecessary work like painting while initializing is not complete
            $container = $( self.translate( self, firstItemOpts.baseTpl.replace( '\{\{BUTTONS\}\}', buttonStr ) ) )
                .addClass( 'fancybox-is-hidden' )
                .attr('id', 'fancybox-container-' + self.id)
                .addClass( firstItemOpts.baseClass )
                .data( 'FancyBox', self )
                .prependTo( firstItemOpts.parentEl );

            // Create object holding references to jQuery wrapped nodes
            self.$refs = {
                container : $container
            };

            [ 'bg', 'inner', 'infobar', 'toolbar', 'stage', 'caption' ].forEach(function(item) {
                self.$refs[ item ] = $container.find( '.fancybox-' + item );
            });

            // Check for redundant elements
            if ( !firstItemOpts.arrows || self.group.length < 2 ) {
                $container.find('.fancybox-navigation').remove();
            }

            if ( !firstItemOpts.infobar ) {
                self.$refs.infobar.remove();
            }

            if ( !firstItemOpts.toolbar ) {
                self.$refs.toolbar.remove();
            }

            self.trigger( 'onInit' );

            // Bring to front and enable events
            self.activate();

            // Build slides, load and reveal content
            self.jumpTo( self.currIndex );
        },


        // Simple i18n support - replaces object keys found in template
        // with corresponding values
        // ============================================================

        translate : function( obj, str ) {
            var arr = obj.opts.i18n[ obj.opts.lang ];

            return str.replace(/\{\{(\w+)\}\}/g, function(match, n) {
                var value = arr[n];

                if ( value === undefined ) {
                    return match;
                }

                return value;
            });
        },

        // Create array of gally item objects
        // Check if each object has valid type and content
        // ===============================================

        createGroup : function ( content ) {
            var self  = this;
            var items = $.makeArray( content );

            $.each(items, function( i, item ) {
                var obj  = {},
                    opts = {},
                    data = [],
                    $item,
                    type,
                    src,
                    srcParts;

                // Step 1 - Make sure we have an object
                // ====================================

                if ( $.isPlainObject( item ) ) {

                    // We probably have manual usage here, something like
                    // $.fancybox.open( [ { src : "image.jpg", type : "image" } ] )

                    obj  = item;
                    opts = item.opts || item;

                } else if ( $.type( item ) === 'object' && $( item ).length ) {

                    // Here we propbably have jQuery collection returned by some selector

                    $item = $( item );
                    data  = $item.data();

                    opts = 'options' in data ? data.options : {};
                    opts = $.type( opts ) === 'object' ? opts : {};

                    obj.src  = 'src' in data ? data.src : ( opts.src || $item.attr( 'href' ) );

                    [ 'width', 'height', 'thumb', 'type', 'filter' ].forEach(function(item) {
                        if ( item in data ) {
                            opts[ item ] = data[ item ];
                        }
                    });

                    if ( 'srcset' in data ) {
                        opts.image = { srcset : data.srcset };
                    }

                    opts.$orig = $item;

                    if ( !obj.type && !obj.src ) {
                        obj.type = 'inline';
                        obj.src  = item;
                    }

                } else {

                    // Assume we have a simple html code, for example:
                    // $.fancybox.open( '<div><h1>Hi!</h1></div>' );

                    obj = {
                        type : 'html',
                        src  : item + ''
                    };

                }

                // Each gallery object has full collection of options
                obj.opts = $.extend( true, {}, self.opts, opts );

                if ( $.fancybox.isMobile ) {
                    obj.opts = $.extend( true, {}, obj.opts, obj.opts.mobile );
                }


                // Step 2 - Make sure we have content type, if not - try to guess
                // ==============================================================

                type = obj.type || obj.opts.type;
                src  = obj.src || '';

                if ( !type && src ) {
                    if ( src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ) {
                        type = 'image';

                    } else if ( src.match(/\.(pdf)((\?|#).*)?$/i) ) {
                        type = 'pdf';

                    } else if ( src.charAt(0) === '#' ) {
                        type = 'inline';
                    }
                }

                obj.type = type;


                // Step 3 - Some adjustments
                // =========================

                obj.index = self.group.length;

                // Check if $orig and $thumb objects exist
                if ( obj.opts.$orig && !obj.opts.$orig.length ) {
                    delete obj.opts.$orig;
                }

                if ( !obj.opts.$thumb && obj.opts.$orig ) {
                    obj.opts.$thumb = obj.opts.$orig.find( 'img:first' );
                }

                if ( obj.opts.$thumb && !obj.opts.$thumb.length ) {
                    delete obj.opts.$thumb;
                }

                // Caption is a "special" option, it can be passed as a method
                if ( $.type( obj.opts.caption ) === 'function' ) {
                    obj.opts.caption = obj.opts.caption.apply( item, [ self, obj ] );

                } else if ( 'caption' in data ) {
                    obj.opts.caption = data.caption;
                }

                // Make sure we have caption as a string
                obj.opts.caption = obj.opts.caption === undefined ? '' : obj.opts.caption + '';

                // Check if url contains "filter" used to filter the content
                // Example: "ajax.html #something"
                if ( type === 'ajax' ) {
                    srcParts = src.split(/\s+/, 2);

                    if ( srcParts.length > 1 ) {
                        obj.src = srcParts.shift();

                        obj.opts.filter = srcParts.shift();
                    }
                }

                if ( obj.opts.smallBtn == 'auto' ) {

                    if ( $.inArray( type, ['html', 'inline', 'ajax'] ) > -1 ) {
                        obj.opts.toolbar  = false;
                        obj.opts.smallBtn = true;

                    } else {
                        obj.opts.smallBtn = false;
                    }

                }

                // If the type is "pdf", then simply load file into iframe
                if ( type === 'pdf' ) {
                    obj.type = 'iframe';

                    obj.opts.iframe.preload = false;
                }

                // Hide all buttons and disable interactivity for modal items
                if ( obj.opts.modal ) {

                    obj.opts = $.extend(true, obj.opts, {
                        // Remove buttons
                        infobar : 0,
                        toolbar : 0,

                        smallBtn : 0,

                        // Disable keyboard navigation
                        keyboard : 0,

                        // Disable some modules
                        slideShow  : 0,
                        fullScreen : 0,
                        thumbs     : 0,
                        touch      : 0,

                        // Disable click event handlers
                        clickContent    : false,
                        clickSlide      : false,
                        clickOutside    : false,
                        dblclickContent : false,
                        dblclickSlide   : false,
                        dblclickOutside : false
                    });

                }

                // Step 4 - Add processed object to group
                // ======================================

                self.group.push( obj );

            });

        },


        // Attach an event handler functions for:
        //   - navigation buttons
        //   - browser scrolling, resizing;
        //   - focusing
        //   - keyboard
        //   - detect idle
        // ======================================

        addEvents : function() {
            var self = this;

            self.removeEvents();

            // Make navigation elements clickable
            self.$refs.container.on('click.fb-close', '[data-fancybox-close]', function(e) {
                e.stopPropagation();
                e.preventDefault();

                self.close( e );

            }).on( 'click.fb-prev touchend.fb-prev', '[data-fancybox-prev]', function(e) {
                e.stopPropagation();
                e.preventDefault();

                self.previous();

            }).on( 'click.fb-next touchend.fb-next', '[data-fancybox-next]', function(e) {
                e.stopPropagation();
                e.preventDefault();

                self.next();

            });


            // Handle page scrolling and browser resizing
            $W.on('orientationchange.fb resize.fb', function(e) {

                if ( e && e.originalEvent && e.originalEvent.type === "resize" ) {

                    requestAFrame(function() {
                        self.update();
                    });

                } else {

                    self.$refs.stage.hide();

                    setTimeout(function() {
                        self.$refs.stage.show();

                        self.update();
                    }, 500);

                }

            });

            // Trap keyboard focus inside of the modal, so the user does not accidentally tab outside of the modal
            // (a.k.a. "escaping the modal")
            $D.on('focusin.fb', function(e) {
                var instance = $.fancybox ? $.fancybox.getInstance() : null;

                if ( instance.isClosing || !instance.current || !instance.current.opts.trapFocus || $( e.target ).hasClass( 'fancybox-container' ) || $( e.target ).is( document ) ) {
                    return;
                }

                if ( instance && $( e.target ).css( 'position' ) !== 'fixed' && !instance.$refs.container.has( e.target ).length ) {
                    e.stopPropagation();

                    instance.focus();

                    // Sometimes page gets scrolled, set it back
                    $W.scrollTop( self.scrollTop ).scrollLeft( self.scrollLeft );
                }
            });


            // Enable keyboard navigation
            $D.on('keydown.fb', function (e) {
                var current = self.current,
                    keycode = e.keyCode || e.which;

                if ( !current || !current.opts.keyboard ) {
                    return;
                }

                if ( $(e.target).is('input') || $(e.target).is('textarea') ) {
                    return;
                }

                // Backspace and Esc keys
                if ( keycode === 8 || keycode === 27 ) {
                    e.preventDefault();

                    self.close( e );

                    return;
                }

                // Left arrow and Up arrow
                if ( keycode === 37 || keycode === 38 ) {
                    e.preventDefault();

                    self.previous();

                    return;
                }

                // Righ arrow and Down arrow
                if ( keycode === 39 || keycode === 40 ) {
                    e.preventDefault();

                    self.next();

                    return;
                }

                self.trigger('afterKeydown', e, keycode);
            });


            // Hide controls after some inactivity period
            if ( self.group[ self.currIndex ].opts.idleTime ) {
                self.idleSecondsCounter = 0;

                $D.on('mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle', function() {
                    self.idleSecondsCounter = 0;

                    if ( self.isIdle ) {
                        self.showControls();
                    }

                    self.isIdle = false;
                });

                self.idleInterval = window.setInterval(function() {

                    self.idleSecondsCounter++;

                    if ( self.idleSecondsCounter >= self.group[ self.currIndex ].opts.idleTime ) {
                        self.isIdle = true;
                        self.idleSecondsCounter = 0;

                        self.hideControls();
                    }

                }, 1000);
            }

        },


        // Remove events added by the core
        // ===============================

        removeEvents : function () {
            var self = this;

            $W.off( 'orientationchange.fb resize.fb' );
            $D.off( 'focusin.fb keydown.fb .fb-idle' );

            this.$refs.container.off( '.fb-close .fb-prev .fb-next' );

            if ( self.idleInterval ) {
                window.clearInterval( self.idleInterval );

                self.idleInterval = null;
            }
        },


        // Change to previous gallery item
        // ===============================

        previous : function( duration ) {
            return this.jumpTo( this.currPos - 1, duration );
        },


        // Change to next gallery item
        // ===========================

        next : function( duration ) {
            return this.jumpTo( this.currPos + 1, duration );
        },


        // Switch to selected gallery item
        // ===============================

        jumpTo : function ( pos, duration, slide ) {
            var self = this,
                firstRun,
                loop,
                current,
                previous,
                canvasWidth,
                currentPos,
                transitionProps;

            var groupLen = self.group.length;

            if ( self.isSliding || self.isClosing || ( self.isAnimating && self.firstRun ) ) {
                return;
            }

            pos  = parseInt( pos, 10 );
            loop = self.current ? self.current.opts.loop : self.opts.loop;

            if ( !loop && ( pos < 0 || pos >= groupLen ) ) {
                return false;
            }

            firstRun = self.firstRun = ( self.firstRun === null );

            if ( groupLen < 2 && !firstRun && !!self.isSliding ) {
                return;
            }

            previous = self.current;

            self.prevIndex = self.currIndex;
            self.prevPos   = self.currPos;

            // Create slides
            current = self.createSlide( pos );

            if ( groupLen > 1 ) {
                if ( loop || current.index > 0 ) {
                    self.createSlide( pos - 1 );
                }

                if ( loop || current.index < groupLen - 1 ) {
                    self.createSlide( pos + 1 );
                }
            }

            self.current   = current;
            self.currIndex = current.index;
            self.currPos   = current.pos;

            self.trigger( 'beforeShow', firstRun );

            self.updateControls();

            currentPos = $.fancybox.getTranslate( current.$slide );

            current.isMoved        = ( currentPos.left !== 0 || currentPos.top !== 0 ) && !current.$slide.hasClass( 'fancybox-animated' );
            current.forcedDuration = undefined;

            if ( $.isNumeric( duration ) ) {
                current.forcedDuration = duration;
            } else {
                duration = current.opts[ firstRun ? 'animationDuration' : 'transitionDuration' ];
            }

            duration = parseInt( duration, 10 );

            // Fresh start - reveal container, current slide and start loading content
            if ( firstRun ) {

                if ( current.opts.animationEffect && duration ) {
                    self.$refs.container.css( 'transition-duration', duration + 'ms' );
                }

                self.$refs.container.removeClass( 'fancybox-is-hidden' );

                forceRedraw( self.$refs.container );

                self.$refs.container.addClass( 'fancybox-is-open' );

                // Make first slide visible (to display loading icon, if needed)
                current.$slide.addClass( 'fancybox-slide--current' );

                self.loadSlide( current );

                self.preload();

                return;
            }

            // Clean up
            $.each(self.slides, function( index, slide ) {
                $.fancybox.stop( slide.$slide );
            });

            // Make current that slide is visible even if content is still loading
            current.$slide.removeClass( 'fancybox-slide--next fancybox-slide--previous' ).addClass( 'fancybox-slide--current' );

            // If slides have been dragged, animate them to correct position
            if ( current.isMoved ) {
                canvasWidth = Math.round( current.$slide.width() );

                $.each(self.slides, function( index, slide ) {
                    var pos = slide.pos - current.pos;

                    $.fancybox.animate( slide.$slide, {
                        top  : 0,
                        left : ( pos * canvasWidth ) + ( pos * slide.opts.gutter )
                    }, duration, function() {

                        slide.$slide.removeAttr('style').removeClass( 'fancybox-slide--next fancybox-slide--previous' );

                        if ( slide.pos === self.currPos ) {
                            current.isMoved = false;

                            self.complete();
                        }
                    });
                });

            } else {
                self.$refs.stage.children().removeAttr( 'style' );
            }

            // Start transition that reveals current content
            // or wait when it will be loaded

            if ( current.isLoaded ) {
                self.revealContent( current );

            } else {
                self.loadSlide( current );
            }

            self.preload();

            if ( previous.pos === current.pos ) {
                return;
            }

            // Handle previous slide
            // =====================

            transitionProps = 'fancybox-slide--' + ( previous.pos > current.pos ? 'next' : 'previous' );

            previous.$slide.removeClass( 'fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous' );

            previous.isComplete = false;

            if ( !duration || ( !current.isMoved && !current.opts.transitionEffect ) ) {
                return;
            }

            if ( current.isMoved ) {
                previous.$slide.addClass( transitionProps );

            } else {

                transitionProps = 'fancybox-animated ' + transitionProps + ' fancybox-fx-' + current.opts.transitionEffect;

                $.fancybox.animate( previous.$slide, transitionProps, duration, function() {
                    previous.$slide.removeClass( transitionProps ).removeAttr( 'style' );
                });

            }

        },


        // Create new "slide" element
        // These are gallery items  that are actually added to DOM
        // =======================================================

        createSlide : function( pos ) {

            var self = this;
            var $slide;
            var index;

            index = pos % self.group.length;
            index = index < 0 ? self.group.length + index : index;

            if ( !self.slides[ pos ] && self.group[ index ] ) {
                $slide = $('<div class="fancybox-slide"></div>').appendTo( self.$refs.stage );

                self.slides[ pos ] = $.extend( true, {}, self.group[ index ], {
                    pos      : pos,
                    $slide   : $slide,
                    isLoaded : false,
                });

                self.updateSlide( self.slides[ pos ] );
            }

            return self.slides[ pos ];
        },


        // Scale image to the actual size of the image
        // ===========================================

        scaleToActual : function( x, y, duration ) {

            var self = this;

            var current = self.current;
            var $what   = current.$content;

            var imgPos, posX, posY, scaleX, scaleY;

            var canvasWidth  = parseInt( current.$slide.width(), 10 );
            var canvasHeight = parseInt( current.$slide.height(), 10 );

            var newImgWidth  = current.width;
            var newImgHeight = current.height;

            if ( !( current.type == 'image' && !current.hasError) || !$what || self.isAnimating) {
                return;
            }

            $.fancybox.stop( $what );

            self.isAnimating = true;

            x = x === undefined ? canvasWidth  * 0.5  : x;
            y = y === undefined ? canvasHeight * 0.5  : y;

            imgPos = $.fancybox.getTranslate( $what );

            scaleX  = newImgWidth  / imgPos.width;
            scaleY  = newImgHeight / imgPos.height;

            // Get center position for original image
            posX = ( canvasWidth * 0.5  - newImgWidth * 0.5 );
            posY = ( canvasHeight * 0.5 - newImgHeight * 0.5 );

            // Make sure image does not move away from edges
            if ( newImgWidth > canvasWidth ) {
                posX = imgPos.left * scaleX - ( ( x * scaleX ) - x );

                if ( posX > 0 ) {
                    posX = 0;
                }

                if ( posX <  canvasWidth - newImgWidth ) {
                    posX = canvasWidth - newImgWidth;
                }
            }

            if ( newImgHeight > canvasHeight) {
                posY = imgPos.top  * scaleY - ( ( y * scaleY ) - y );

                if ( posY > 0 ) {
                    posY = 0;
                }

                if ( posY <  canvasHeight - newImgHeight ) {
                    posY = canvasHeight - newImgHeight;
                }
            }

            self.updateCursor( newImgWidth, newImgHeight );

            $.fancybox.animate( $what, {
                top    : posY,
                left   : posX,
                scaleX : scaleX,
                scaleY : scaleY
            }, duration || 330, function() {
                self.isAnimating = false;
            });

            // Stop slideshow
            if ( self.SlideShow && self.SlideShow.isActive ) {
                self.SlideShow.stop();
            }
        },


        // Scale image to fit inside parent element
        // ========================================

        scaleToFit : function( duration ) {

            var self = this;

            var current = self.current;
            var $what   = current.$content;
            var end;

            if ( !( current.type == 'image' && !current.hasError) || !$what || self.isAnimating ) {
                return;
            }

            $.fancybox.stop( $what );

            self.isAnimating = true;

            end = self.getFitPos( current );

            self.updateCursor( end.width, end.height );

            $.fancybox.animate( $what, {
                top    : end.top,
                left   : end.left,
                scaleX : end.width  / $what.width(),
                scaleY : end.height / $what.height()
            }, duration || 330, function() {
                self.isAnimating = false;
            });

        },

        // Calculate image size to fit inside viewport
        // ===========================================

        getFitPos : function( slide ) {
            var self  = this;
            var $what = slide.$content;

            var imgWidth  = slide.width;
            var imgHeight = slide.height;

            var margin = slide.opts.margin;

            var canvasWidth, canvasHeight, minRatio, width, height;

            if ( !$what || !$what.length || ( !imgWidth && !imgHeight) ) {
                return false;
            }

            // Convert "margin to CSS style: [ top, right, bottom, left ]
            if ( $.type( margin ) === "number" ) {
                margin = [ margin, margin ];
            }

            if ( margin.length == 2 ) {
                margin = [ margin[0], margin[1], margin[0], margin[1] ];
            }

            if ( $W.width() < 800 ) {
                margin = [ 0, 0, 0, 0 ];
            }

            // We can not use $slide width here, because it can have different diemensions while in transiton
            canvasWidth  = parseInt( self.$refs.stage.width(), 10 )  - ( margin[ 1 ] + margin[ 3 ] );
            canvasHeight = parseInt( self.$refs.stage.height(), 10 ) - ( margin[ 0 ] + margin[ 2 ] );

            minRatio = Math.min(1, canvasWidth / imgWidth, canvasHeight / imgHeight );

            width  = Math.floor( minRatio * imgWidth );
            height = Math.floor( minRatio * imgHeight );

            // Use floor rounding to make sure it really fits
            return {
                top    : Math.floor( ( canvasHeight - height ) * 0.5 ) + margin[ 0 ],
                left   : Math.floor( ( canvasWidth  - width )  * 0.5 ) + margin[ 3 ],
                width  : width,
                height : height
            };

        },


        // Update position and content of all slides
        // =========================================

        update : function() {

            var self = this;

            $.each( self.slides, function( key, slide ) {
                self.updateSlide( slide );
            });

        },


        // Update slide position and scale content to fit
        // ==============================================

        updateSlide : function( slide ) {

            var self  = this;
            var $what = slide.$content;

            if ( $what && ( slide.width || slide.height ) ) {
                $.fancybox.stop( $what );

                $.fancybox.setTranslate( $what, self.getFitPos( slide ) );

                if ( slide.pos === self.currPos ) {
                    self.updateCursor();
                }
            }

            slide.$slide.trigger( 'refresh' );

            self.trigger( 'onUpdate', slide );

        },

        // Update cursor style depending if content can be zoomed
        // ======================================================

        updateCursor : function( nextWidth, nextHeight ) {

            var self = this;
            var isScaledDown;

            var $container = self.$refs.container.removeClass('fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut');

            if ( !self.current || self.isClosing ) {
                return;
            }

            if ( self.isZoomable() ) {

                $container.addClass( 'fancybox-is-zoomable' );

                if ( nextWidth !== undefined && nextHeight !== undefined ) {
                    isScaledDown = nextWidth < self.current.width && nextHeight < self.current.height;

                } else {
                    isScaledDown = self.isScaledDown();
                }

                if ( isScaledDown ) {

                    // If image is scaled down, then, obviously, it can be zoomed to full size
                    $container.addClass('fancybox-can-zoomIn');

                } else {

                    if ( self.current.opts.touch ) {

                        // If image size ir largen than available available and touch module is not disable,
                        // then user can do panning
                        $container.addClass('fancybox-can-drag');

                    } else {
                        $container.addClass('fancybox-can-zoomOut');
                    }

                }

            } else if ( self.current.opts.touch ) {
                $container.addClass('fancybox-can-drag');
            }

        },


        // Check if current slide is zoomable
        // ==================================

        isZoomable : function() {

            var self = this;

            var current = self.current;
            var fitPos;

            if ( !current || self.isClosing ) {
                return;
            }

            // Assume that slide is zoomable if
            //   - image is loaded successfuly
            //   - click action is "zoom"
            //   - actual size of the image is smaller than available area
            if ( current.type === 'image' && current.isLoaded && !current.hasError &&
                ( current.opts.clickContent === 'zoom' || ( $.isFunction( current.opts.clickContent ) && current.opts.clickContent( current ) ===  "zoom" ) )
            ) {

                fitPos = self.getFitPos( current );

                if ( current.width > fitPos.width || current.height > fitPos.height ) {
                    return true;
                }

            }

            return false;

        },


        // Check if current image dimensions are smaller than actual
        // =========================================================

        isScaledDown : function() {

            var self = this;

            var current = self.current;
            var $what   = current.$content;

            var rez = false;

            if ( $what ) {
                rez = $.fancybox.getTranslate( $what );
                rez = rez.width < current.width || rez.height < current.height;
            }

            return rez;

        },


        // Check if image dimensions exceed parent element
        // ===============================================

        canPan : function() {

            var self = this;

            var current = self.current;
            var $what   = current.$content;

            var rez = false;

            if ( $what ) {
                rez = self.getFitPos( current );
                rez = Math.abs( $what.width() - rez.width ) > 1  || Math.abs( $what.height() - rez.height ) > 1;

            }

            return rez;

        },


        // Load content into the slide
        // ===========================

        loadSlide : function( slide ) {

            var self = this, type, $slide;
            var ajaxLoad;

            if ( slide.isLoading ) {
                return;
            }

            if ( slide.isLoaded ) {
                return;
            }

            slide.isLoading = true;

            self.trigger( 'beforeLoad', slide );

            type   = slide.type;
            $slide = slide.$slide;

            $slide
                .off( 'refresh' )
                .trigger( 'onReset' )
                .addClass( 'fancybox-slide--' + ( type || 'unknown' ) )
                .addClass( slide.opts.slideClass );

            // Create content depending on the type

            switch ( type ) {

                case 'image':

                    self.setImage( slide );

                    break;

                case 'iframe':

                    self.setIframe( slide );

                    break;

                case 'html':

                    self.setContent( slide, slide.src || slide.content );

                    break;

                case 'inline':

                    if ( $( slide.src ).length ) {
                        self.setContent( slide, $( slide.src ) );

                    } else {
                        self.setError( slide );
                    }

                    break;

                case 'ajax':

                    self.showLoading( slide );

                    ajaxLoad = $.ajax( $.extend( {}, slide.opts.ajax.settings, {
                        url : slide.src,
                        success : function ( data, textStatus ) {

                            if ( textStatus === 'success' ) {
                                self.setContent( slide, data );
                            }

                        },
                        error : function ( jqXHR, textStatus ) {

                            if ( jqXHR && textStatus !== 'abort' ) {
                                self.setError( slide );
                            }

                        }
                    }));

                    $slide.one( 'onReset', function () {
                        ajaxLoad.abort();
                    });

                    break;

                default:

                    self.setError( slide );

                    break;

            }

            return true;

        },


        // Use thumbnail image, if possible
        // ================================

        setImage : function( slide ) {

            var self   = this;
            var srcset = slide.opts.image.srcset;

            var found, temp, pxRatio, windowWidth;

            // If we have "srcset", then we need to find matching "src" value.
            // This is necessary, because when you set an src attribute, the browser will preload the image
            // before any javascript or even CSS is applied.
            if ( srcset ) {
                pxRatio     = window.devicePixelRatio || 1;
                windowWidth = window.innerWidth  * pxRatio;

                temp = srcset.split(',').map(function ( el ) {
                    var ret = {};

                    el.trim().split(/\s+/).forEach(function ( el, i ) {
                        var value = parseInt( el.substring(0, el.length - 1), 10 );

                        if ( i === 0 ) {
                            return ( ret.url = el );
                        }

                        if ( value ) {
                            ret.value   = value;
                            ret.postfix = el[ el.length - 1 ];
                        }

                    });

                    return ret;
                });

                // Sort by value
                temp.sort(function (a, b) {
                    return a.value - b.value;
                });

                // Ok, now we have an array of all srcset values
                for ( var j = 0; j < temp.length; j++ ) {
                    var el = temp[ j ];

                    if ( ( el.postfix === 'w' && el.value >= windowWidth ) || ( el.postfix === 'x' && el.value >= pxRatio ) ) {
                        found = el;
                        break;
                    }
                }

                // If not found, take the last one
                if ( !found && temp.length ) {
                    found = temp[ temp.length - 1 ];
                }

                if ( found ) {
                    slide.src = found.url;

                    // If we have default width/height values, we can calculate height for matching source
                    if ( slide.width && slide.height && found.postfix == 'w' ) {
                        slide.height = ( slide.width / slide.height ) * found.value;
                        slide.width  = found.value;
                    }
                }
            }

            // This will be wrapper containing both ghost and actual image
            slide.$content = $('<div class="fancybox-image-wrap"></div>')
                .addClass( 'fancybox-is-hidden' )
                .appendTo( slide.$slide );


            // If we have a thumbnail, we can display it while actual image is loading
            // Users will not stare at black screen and actual image will appear gradually
            if ( slide.opts.preload !== false && slide.opts.width && slide.opts.height && ( slide.opts.thumb || slide.opts.$thumb ) ) {

                slide.width  = slide.opts.width;
                slide.height = slide.opts.height;

                slide.$ghost = $('<img />')
                    .one('error', function() {

                        $(this).remove();

                        slide.$ghost = null;

                        self.setBigImage( slide );

                    })
                    .one('load', function() {

                        self.afterLoad( slide );

                        self.setBigImage( slide );

                    })
                    .addClass( 'fancybox-image' )
                    .appendTo( slide.$content )
                    .attr( 'src', slide.opts.thumb || slide.opts.$thumb.attr( 'src' ) );

            } else {

                self.setBigImage( slide );

            }

        },


        // Create full-size image
        // ======================

        setBigImage : function ( slide ) {
            var self = this;
            var $img = $('<img />');

            slide.$image = $img
                .one('error', function() {

                    self.setError( slide );

                })
                .one('load', function() {

                    // Clear timeout that checks if loading icon needs to be displayed
                    clearTimeout( slide.timouts );

                    slide.timouts = null;

                    if ( self.isClosing ) {
                        return;
                    }

                    slide.width  = this.naturalWidth;
                    slide.height = this.naturalHeight;

                    if ( slide.opts.image.srcset ) {
                        $img.attr( 'sizes', '100vw' ).attr( 'srcset', slide.opts.image.srcset );
                    }

                    self.hideLoading( slide );

                    if ( slide.$ghost ) {

                        slide.timouts = setTimeout(function() {
                            slide.timouts = null;

                            slide.$ghost.hide();

                        }, Math.min( 300, Math.max( 1000, slide.height / 1600 ) ) );

                    } else {
                        self.afterLoad( slide );
                    }

                })
                .addClass( 'fancybox-image' )
                .attr('src', slide.src)
                .appendTo( slide.$content );

            if ( $img[0].complete ) {
                $img.trigger( 'load' );

            } else if( $img[0].error ) {
                $img.trigger( 'error' );

            } else {

                slide.timouts = setTimeout(function() {
                    if ( !$img[0].complete && !slide.hasError ) {
                        self.showLoading( slide );
                    }

                }, 100);

            }

        },


        // Create iframe wrapper, iframe and bindings
        // ==========================================

        setIframe : function( slide ) {
            var self	= this,
                opts    = slide.opts.iframe,
                $slide	= slide.$slide,
                $iframe;

            slide.$content = $('<div class="fancybox-content' + ( opts.preload ? ' fancybox-is-hidden' : '' ) + '"></div>')
                .css( opts.css )
                .appendTo( $slide );

            $iframe = $( opts.tpl.replace(/\{rnd\}/g, new Date().getTime()) )
                .attr( opts.attr )
                .appendTo( slide.$content );

            if ( opts.preload ) {

                self.showLoading( slide );

                // Unfortunately, it is not always possible to determine if iframe is successfully loaded
                // (due to browser security policy)

                $iframe.on('load.fb error.fb', function(e) {
                    this.isReady = 1;

                    slide.$slide.trigger( 'refresh' );

                    self.afterLoad( slide );
                });

                // Recalculate iframe content size
                // ===============================

                $slide.on('refresh.fb', function() {
                    var $wrap = slide.$content,
                        $contents,
                        $body,
                        scrollWidth,
                        frameWidth,
                        frameHeight;

                    if ( $iframe[0].isReady !== 1 ) {
                        return;
                    }

                    // Check if content is accessible,
                    // it will fail if frame is not with the same origin

                    try {
                        $contents = $iframe.contents();
                        $body     = $contents.find('body');

                    } catch (ignore) {}

                    // Calculate dimensions for the wrapper
                    if ( $body && $body.length && !( opts.css.width !== undefined && opts.css.height !== undefined ) ) {

                        scrollWidth = $iframe[0].contentWindow.document.documentElement.scrollWidth;

                        frameWidth	= Math.ceil( $body.outerWidth(true) + ( $wrap.width() - scrollWidth ) );
                        frameHeight	= Math.ceil( $body.outerHeight(true) );

                        // Resize wrapper to fit iframe content
                        $wrap.css({
                            'width'  : opts.css.width  === undefined ? frameWidth  + ( $wrap.outerWidth()  - $wrap.innerWidth() )  : opts.css.width,
                            'height' : opts.css.height === undefined ? frameHeight + ( $wrap.outerHeight() - $wrap.innerHeight() ) : opts.css.height
                        });

                    }

                    $wrap.removeClass( 'fancybox-is-hidden' );

                });

            } else {

                this.afterLoad( slide );

            }

            $iframe.attr( 'src', slide.src );

            if ( slide.opts.smallBtn === true ) {
                slide.$content.prepend( self.translate( slide, slide.opts.btnTpl.smallBtn ) );
            }

            // Remove iframe if closing or changing gallery item
            $slide.one( 'onReset', function () {

                // This helps IE not to throw errors when closing
                try {

                    $( this ).find( 'iframe' ).hide().attr( 'src', '//about:blank' );

                } catch ( ignore ) {}

                $( this ).empty();

                slide.isLoaded = false;

            });

        },


        // Wrap and append content to the slide
        // ======================================

        setContent : function ( slide, content ) {

            var self = this;

            if ( self.isClosing ) {
                return;
            }

            self.hideLoading( slide );

            slide.$slide.empty();

            if ( isQuery( content ) && content.parent().length ) {

                // If content is a jQuery object, then it will be moved to the slide.
                // The placeholder is created so we will know where to put it back.
                // If user is navigating gallery fast, then the content might be already inside fancyBox
                // =====================================================================================

                // Make sure content is not already moved to fancyBox
                content.parent( '.fancybox-slide--inline' ).trigger( 'onReset' );

                // Create temporary element marking original place of the content
                slide.$placeholder = $( '<div></div>' ).hide().insertAfter( content );

                // Make sure content is visible
                content.css('display', 'inline-block');

            } else if ( !slide.hasError ) {

                // If content is just a plain text, try to convert it to html
                if ( $.type( content ) === 'string' ) {
                    content = $('<div>').append( $.trim( content ) ).contents();

                    // If we have text node, then add wrapping element to make vertical alignment work
                    if ( content[0].nodeType === 3 ) {
                        content = $('<div>').html( content );
                    }
                }

                // If "filter" option is provided, then filter content
                if ( slide.opts.filter ) {
                    content = $('<div>').html( content ).find( slide.opts.filter );
                }

            }

            slide.$slide.one('onReset', function () {

                // Put content back
                if ( slide.$placeholder ) {
                    slide.$placeholder.after( content.hide() ).remove();

                    slide.$placeholder = null;
                }

                // Remove custom close button
                if ( slide.$smallBtn ) {
                    slide.$smallBtn.remove();

                    slide.$smallBtn = null;
                }

                // Remove content and mark slide as not loaded
                if ( !slide.hasError ) {
                    $(this).empty();

                    slide.isLoaded = false;
                }

            });

            slide.$content = $( content ).appendTo( slide.$slide );

            if ( slide.opts.smallBtn && !slide.$smallBtn ) {
                slide.$smallBtn = $( self.translate( slide, slide.opts.btnTpl.smallBtn ) ).appendTo( slide.$content.filter('div').first() );
            }

            this.afterLoad( slide );
        },

        // Display error message
        // =====================

        setError : function ( slide ) {

            slide.hasError = true;

            slide.$slide.removeClass( 'fancybox-slide--' + slide.type );

            this.setContent( slide, this.translate( slide, slide.opts.errorTpl ) );

        },


        // Show loading icon inside the slide
        // ==================================

        showLoading : function( slide ) {

            var self = this;

            slide = slide || self.current;

            if ( slide && !slide.$spinner ) {
                slide.$spinner = $( self.opts.spinnerTpl ).appendTo( slide.$slide );
            }

        },

        // Remove loading icon from the slide
        // ==================================

        hideLoading : function( slide ) {

            var self = this;

            slide = slide || self.current;

            if ( slide && slide.$spinner ) {
                slide.$spinner.remove();

                delete slide.$spinner;
            }

        },


        // Adjustments after slide content has been loaded
        // ===============================================

        afterLoad : function( slide ) {

            var self = this;

            if ( self.isClosing ) {
                return;
            }

            slide.isLoading = false;
            slide.isLoaded  = true;

            self.trigger( 'afterLoad', slide );

            self.hideLoading( slide );

            if ( slide.opts.protect && slide.$content && !slide.hasError ) {

                // Disable right click
                slide.$content.on( 'contextmenu.fb', function( e ) {
                    if ( e.button == 2 ) {
                        e.preventDefault();
                    }

                    return true;
                });

                // Add fake element on top of the image
                // This makes a bit harder for user to select image
                if ( slide.type === 'image' ) {
                    $( '<div class="fancybox-spaceball"></div>' ).appendTo( slide.$content );
                }

            }

            self.revealContent( slide );

        },


        // Make content visible
        // This method is called right after content has been loaded or
        // user navigates gallery and transition should start
        // ============================================================

        revealContent : function( slide ) {

            var self   = this;
            var $slide = slide.$slide;

            var effect, effectClassName, duration, opacity, end, start = false;

            effect   = slide.opts[ self.firstRun ? 'animationEffect'   : 'transitionEffect' ];
            duration = slide.opts[ self.firstRun ? 'animationDuration' : 'transitionDuration' ];

            duration = parseInt( slide.forcedDuration === undefined ? duration : slide.forcedDuration, 10 );

            if ( slide.isMoved || slide.pos !== self.currPos || !duration ) {
                effect = false;
            }

            // Check if can zoom
            if ( effect === 'zoom' && !( slide.pos === self.currPos && duration && slide.type === 'image' && !slide.hasError && ( start = self.getThumbPos( slide ) ) ) ) {
                effect = 'fade';
            }


            // Zoom animation
            // ==============

            if ( effect === 'zoom' ) {
                end = self.getFitPos( slide );

                end.scaleX = end.width  / start.width;
                end.scaleY = end.height / start.height;

                delete end.width;
                delete end.height;

                // Check if we need to animate opacity
                opacity = slide.opts.zoomOpacity;

                if ( opacity == 'auto' ) {
                    opacity = Math.abs( slide.width / slide.height - start.width / start.height ) > 0.1;
                }

                if ( opacity ) {
                    start.opacity = 0.1;
                    end.opacity   = 1;
                }

                // Draw image at start position
                $.fancybox.setTranslate( slide.$content.removeClass( 'fancybox-is-hidden' ), start );

                forceRedraw( slide.$content );

                // Start animation
                $.fancybox.animate( slide.$content, end, duration, function() {
                    self.complete();
                });

                return;
            }


            self.updateSlide( slide );


            // Simply show content
            // ===================

            if ( !effect ) {
                forceRedraw( $slide );

                slide.$content.removeClass( 'fancybox-is-hidden' );

                if ( slide.pos === self.currPos ) {
                    self.complete();
                }

                return;
            }

            $.fancybox.stop( $slide );

            effectClassName = 'fancybox-animated fancybox-slide--' + ( slide.pos > self.prevPos ? 'next' : 'previous' ) + ' fancybox-fx-' + effect;

            $slide.removeAttr( 'style' ).removeClass( 'fancybox-slide--current fancybox-slide--next fancybox-slide--previous' ).addClass( effectClassName );

            slide.$content.removeClass( 'fancybox-is-hidden' );

            //Force reflow for CSS3 transitions
            forceRedraw( $slide );

            $.fancybox.animate( $slide, 'fancybox-slide--current', duration, function(e) {
                $slide.removeClass( effectClassName ).removeAttr( 'style' );

                if ( slide.pos === self.currPos ) {
                    self.complete();
                }

            }, true);

        },


        // Check if we can and have to zoom from thumbnail
        //================================================

        getThumbPos : function( slide ) {

            var self = this;
            var rez  = false;

            // Check if element is inside the viewport by at least 1 pixel
            var isElementVisible = function( $el ) {
                var element = $el[0];

                var elementRect = element.getBoundingClientRect();
                var parentRects = [];

                var visibleInAllParents;

                while ( element.parentElement !== null ) {
                    if ( $(element.parentElement).css('overflow') === 'hidden'  || $(element.parentElement).css('overflow') === 'auto' ) {
                        parentRects.push(element.parentElement.getBoundingClientRect());
                    }

                    element = element.parentElement;
                }

                visibleInAllParents = parentRects.every(function(parentRect){
                    var visiblePixelX = Math.min(elementRect.right, parentRect.right) - Math.max(elementRect.left, parentRect.left);
                    var visiblePixelY = Math.min(elementRect.bottom, parentRect.bottom) - Math.max(elementRect.top, parentRect.top);

                    return visiblePixelX > 0 && visiblePixelY > 0;
                });

                return visibleInAllParents &&
                    elementRect.bottom > 0 && elementRect.right > 0 &&
                    elementRect.left < $(window).width() && elementRect.top < $(window).height();
            };

            var $thumb   = slide.opts.$thumb;
            var thumbPos = $thumb ? $thumb.offset() : 0;
            var slidePos;

            if ( thumbPos && $thumb[0].ownerDocument === document && isElementVisible( $thumb ) ) {
                slidePos = self.$refs.stage.offset();

                rez = {
                    top    : thumbPos.top  - slidePos.top  + parseFloat( $thumb.css( "border-top-width" ) || 0 ),
                    left   : thumbPos.left - slidePos.left + parseFloat( $thumb.css( "border-left-width" ) || 0 ),
                    width  : $thumb.width(),
                    height : $thumb.height(),
                    scaleX : 1,
                    scaleY : 1
                };
            }

            return rez;
        },


        // Final adjustments after current gallery item is moved to position
        // and it`s content is loaded
        // ==================================================================

        complete : function() {

            var self = this;

            var current = self.current;
            var slides  = {};

            if ( current.isMoved || !current.isLoaded || current.isComplete ) {
                return;
            }

            current.isComplete = true;

            current.$slide.siblings().trigger( 'onReset' );

            // Trigger any CSS3 transiton inside the slide
            forceRedraw( current.$slide );

            current.$slide.addClass( 'fancybox-slide--complete' );

            // Remove unnecessary slides
            $.each( self.slides, function( key, slide ) {
                if ( slide.pos >= self.currPos - 1 && slide.pos <= self.currPos + 1 ) {
                    slides[ slide.pos ] = slide;

                } else if ( slide ) {

                    $.fancybox.stop( slide.$slide );

                    slide.$slide.unbind().remove();
                }
            });

            self.slides = slides;

            self.updateCursor();

            self.trigger( 'afterShow' );

            // Try to focus on the first focusable element
            if ( $( document.activeElement ).is( '[disabled]' ) || ( current.opts.autoFocus && !( current.type == 'image' || current.type === 'iframe' ) ) ) {
                self.focus();
            }

        },


        // Preload next and previous slides
        // ================================

        preload : function() {
            var self = this;
            var next, prev;

            if ( self.group.length < 2 ) {
                return;
            }

            next  = self.slides[ self.currPos + 1 ];
            prev  = self.slides[ self.currPos - 1 ];

            if ( next && next.type === 'image' ) {
                self.loadSlide( next );
            }

            if ( prev && prev.type === 'image' ) {
                self.loadSlide( prev );
            }

        },


        // Try to find and focus on the first focusable element
        // ====================================================

        focus : function() {
            var current = this.current;
            var $el;

            if ( this.isClosing ) {
                return;
            }

            // Skip for images and iframes
            $el = current && current.isComplete ? current.$slide.find('button,:input,[tabindex],a').filter(':not([disabled]):visible:first') : null;
            $el = $el && $el.length ? $el : this.$refs.container;

            $el.focus();
        },


        // Activates current instance - brings container to the front and enables keyboard,
        // notifies other instances about deactivating
        // =================================================================================

        activate : function () {
            var self = this;

            // Deactivate all instances
            $( '.fancybox-container' ).each(function () {
                var instance = $(this).data( 'FancyBox' );

                // Skip self and closing instances
                if (instance && instance.uid !== self.uid && !instance.isClosing) {
                    instance.trigger( 'onDeactivate' );
                }

            });

            if ( self.current ) {
                if ( self.$refs.container.index() > 0 ) {
                    self.$refs.container.prependTo( document.body );
                }

                self.updateControls();
            }

            self.trigger( 'onActivate' );

            self.addEvents();

        },


        // Start closing procedure
        // This will start "zoom-out" animation if needed and clean everything up afterwards
        // =================================================================================

        close : function( e, d ) {

            var self    = this;
            var current = self.current;

            var effect, duration;
            var $what, opacity, start, end;

            var done = function() {
                self.cleanUp( e );
            };

            if ( self.isClosing ) {
                return false;
            }

            self.isClosing = true;

            // If beforeClose callback prevents closing, make sure content is centered
            if ( self.trigger( 'beforeClose', e ) === false ) {
                self.isClosing = false;

                requestAFrame(function() {
                    self.update();
                });

                return false;
            }

            // Remove all events
            // If there are multiple instances, they will be set again by "activate" method
            self.removeEvents();

            if ( current.timouts ) {
                clearTimeout( current.timouts );
            }

            $what    = current.$content;
            effect   = current.opts.animationEffect;
            duration = $.isNumeric( d ) ? d : ( effect ? current.opts.animationDuration : 0 );

            // Remove other slides
            current.$slide.off( transitionEnd ).removeClass( 'fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated' );

            current.$slide.siblings().trigger( 'onReset' ).remove();

            // Trigger animations
            if ( duration ) {
                self.$refs.container.removeClass( 'fancybox-is-open' ).addClass( 'fancybox-is-closing' );
            }

            // Clean up
            self.hideLoading( current );

            self.hideControls();

            self.updateCursor();

            // Check if possible to zoom-out
            if ( effect === 'zoom' && !( e !== true && $what && duration && current.type === 'image' && !current.hasError && ( end = self.getThumbPos( current ) ) ) ) {
                effect = 'fade';
            }

            if ( effect === 'zoom' ) {
                $.fancybox.stop( $what );

                start = $.fancybox.getTranslate( $what );

                start.width  = start.width  * start.scaleX;
                start.height = start.height * start.scaleY;

                // Check if we need to animate opacity
                opacity = current.opts.zoomOpacity;

                if ( opacity == 'auto' ) {
                    opacity = Math.abs( current.width / current.height - end.width / end.height ) > 0.1;
                }

                if ( opacity ) {
                    end.opacity = 0;
                }

                start.scaleX = start.width  / end.width;
                start.scaleY = start.height / end.height;

                start.width  = end.width;
                start.height = end.height;

                $.fancybox.setTranslate( current.$content, start );

                $.fancybox.animate( current.$content, end, duration, done );

                return true;
            }

            if ( effect && duration ) {

                // If skip animation
                if ( e === true ) {
                    setTimeout( done, duration );

                } else {
                    $.fancybox.animate( current.$slide.removeClass( 'fancybox-slide--current' ), 'fancybox-animated fancybox-slide--previous fancybox-fx-' + effect, duration, done );
                }

            } else {
                done();
            }

            return true;
        },


        // Final adjustments after removing the instance
        // =============================================

        cleanUp : function( e ) {
            var self = this,
                instance;

            self.current.$slide.trigger( 'onReset' );

            self.$refs.container.empty().remove();

            self.trigger( 'afterClose', e );

            // Place back focus
            if ( self.$lastFocus && !!self.current.opts.backFocus ) {
                self.$lastFocus.focus();
            }

            self.current = null;

            // Check if there are other instances
            instance = $.fancybox.getInstance();

            if ( instance ) {
                instance.activate();

            } else {

                $W.scrollTop( self.scrollTop ).scrollLeft( self.scrollLeft );

                $( 'html' ).removeClass( 'fancybox-enabled' );

                $( '#fancybox-style-noscroll' ).remove();
            }

        },


        // Call callback and trigger an event
        // ==================================

        trigger : function( name, slide ) {
            var args  = Array.prototype.slice.call(arguments, 1),
                self  = this,
                obj   = slide && slide.opts ? slide : self.current,
                rez;

            if ( obj ) {
                args.unshift( obj );

            } else {
                obj = self;
            }

            args.unshift( self );

            if ( $.isFunction( obj.opts[ name ] ) ) {
                rez = obj.opts[ name ].apply( obj, args );
            }

            if ( rez === false ) {
                return rez;
            }

            if ( name === 'afterClose' ) {
                $D.trigger( name + '.fb', args );

            } else {
                self.$refs.container.trigger( name + '.fb', args );
            }

        },


        // Update infobar values, navigation button states and reveal caption
        // ==================================================================

        updateControls : function ( force ) {

            var self = this;

            var current  = self.current;
            var index    = current.index;
            var opts     = current.opts;
            var caption  = opts.caption;
            var $caption = self.$refs.caption;

            // Recalculate content dimensions
            current.$slide.trigger( 'refresh' );

            self.$caption = caption && caption.length ? $caption.html( caption ) : null;

            if ( !self.isHiddenControls ) {
                self.showControls();
            }

            // Update info and navigation elements
            $('[data-fancybox-count]').html( self.group.length );
            $('[data-fancybox-index]').html( index + 1 );

            $('[data-fancybox-prev]').prop('disabled', ( !opts.loop && index <= 0 ) );
            $('[data-fancybox-next]').prop('disabled', ( !opts.loop && index >= self.group.length - 1 ) );

        },

        // Hide toolbar and caption
        // ========================

        hideControls : function () {

            this.isHiddenControls = true;

            this.$refs.container.removeClass('fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav');

        },

        showControls : function() {

            var self = this;
            var opts = self.current ? self.current.opts : self.opts;
            var $container = self.$refs.container;

            self.isHiddenControls   = false;
            self.idleSecondsCounter = 0;

            $container
                .toggleClass('fancybox-show-toolbar', !!( opts.toolbar && opts.buttons ) )
                .toggleClass('fancybox-show-infobar', !!( opts.infobar && self.group.length > 1 ) )
                .toggleClass('fancybox-show-nav',     !!( opts.arrows && self.group.length > 1 ) )
                .toggleClass('fancybox-is-modal',     !!opts.modal );

            if ( self.$caption ) {
                $container.addClass( 'fancybox-show-caption ');

            } else {
                $container.removeClass( 'fancybox-show-caption' );
            }

        },


        // Toggle toolbar and caption
        // ==========================

        toggleControls : function() {

            if ( this.isHiddenControls ) {
                this.showControls();

            } else {
                this.hideControls();
            }

        },


    });


    $.fancybox = {

        version  : "3.1.25",
        defaults : defaults,


        // Get current instance and execute a command.
        //
        // Examples of usage:
        //
        //   $instance = $.fancybox.getInstance();
        //   $.fancybox.getInstance().jumpTo( 1 );
        //   $.fancybox.getInstance( 'jumpTo', 1 );
        //   $.fancybox.getInstance( function() {
        //       console.info( this.currIndex );
        //   });
        // ======================================================

        getInstance : function ( command ) {
            var instance = $('.fancybox-container:not(".fancybox-is-closing"):first').data( 'FancyBox' );
            var args     = Array.prototype.slice.call(arguments, 1);

            if ( instance instanceof FancyBox ) {

                if ( $.type( command ) === 'string' ) {
                    instance[ command ].apply( instance, args );

                } else if ( $.type( command ) === 'function' ) {
                    command.apply( instance, args );

                }

                return instance;
            }

            return false;

        },


        // Create new instance
        // ===================

        open : function ( items, opts, index ) {
            return new FancyBox( items, opts, index );
        },


        // Close current or all instances
        // ==============================

        close : function ( all ) {
            var instance = this.getInstance();

            if ( instance ) {
                instance.close();

                // Try to find and close next instance

                if ( all === true ) {
                    this.close();
                }
            }

        },

        // Close instances and unbind all events
        // ==============================

        destroy : function() {

            this.close( true );

            $D.off( 'click.fb-start' );

        },


        // Try to detect mobile devices
        // ============================

        isMobile : document.createTouch !== undefined && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),


        // Detect if 'translate3d' support is available
        // ============================================

        use3d : (function() {
            var div = document.createElement('div');

            return window.getComputedStyle && window.getComputedStyle( div ).getPropertyValue('transform') && !(document.documentMode && document.documentMode < 11);
        }()),


        // Helper function to get current visual state of an element
        // returns array[ top, left, horizontal-scale, vertical-scale, opacity ]
        // =====================================================================

        getTranslate : function( $el ) {
            var matrix;

            if ( !$el || !$el.length ) {
                return false;
            }

            matrix  = $el.eq( 0 ).css('transform');

            if ( matrix && matrix.indexOf( 'matrix' ) !== -1 ) {
                matrix = matrix.split('(')[1];
                matrix = matrix.split(')')[0];
                matrix = matrix.split(',');
            } else {
                matrix = [];
            }

            if ( matrix.length ) {

                // If IE
                if ( matrix.length > 10 ) {
                    matrix = [ matrix[13], matrix[12], matrix[0], matrix[5] ];

                } else {
                    matrix = [ matrix[5], matrix[4], matrix[0], matrix[3]];
                }

                matrix = matrix.map(parseFloat);

            } else {
                matrix = [ 0, 0, 1, 1 ];

                var transRegex = /\.*translate\((.*)px,(.*)px\)/i;
                var transRez = transRegex.exec( $el.eq( 0 ).attr('style') );

                if ( transRez ) {
                    matrix[ 0 ] = parseFloat( transRez[2] );
                    matrix[ 1 ] = parseFloat( transRez[1] );
                }
            }

            return {
                top     : matrix[ 0 ],
                left    : matrix[ 1 ],
                scaleX  : matrix[ 2 ],
                scaleY  : matrix[ 3 ],
                opacity : parseFloat( $el.css('opacity') ),
                width   : $el.width(),
                height  : $el.height()
            };

        },


        // Shortcut for setting "translate3d" properties for element
        // Can set be used to set opacity, too
        // ========================================================

        setTranslate : function( $el, props ) {
            var str  = '';
            var css  = {};

            if ( !$el || !props ) {
                return;
            }

            if ( props.left !== undefined || props.top !== undefined ) {
                str = ( props.left === undefined ? $el.position().left : props.left )  + 'px, ' + ( props.top === undefined ? $el.position().top : props.top ) + 'px';

                if ( this.use3d ) {
                    str = 'translate3d(' + str + ', 0px)';

                } else {
                    str = 'translate(' + str + ')';
                }
            }

            if ( props.scaleX !== undefined && props.scaleY !== undefined ) {
                str = (str.length ? str + ' ' : '') + 'scale(' + props.scaleX + ', ' + props.scaleY + ')';
            }

            if ( str.length ) {
                css.transform = str;
            }

            if ( props.opacity !== undefined ) {
                css.opacity = props.opacity;
            }

            if ( props.width !== undefined ) {
                css.width = props.width;
            }

            if ( props.height !== undefined ) {
                css.height = props.height;
            }

            return $el.css( css );
        },


        // Simple CSS transition handler
        // =============================

        animate : function ( $el, to, duration, callback, leaveAnimationName ) {
            var event = transitionEnd || 'transitionend';

            if ( $.isFunction( duration ) ) {
                callback = duration;
                duration = null;
            }

            if ( !$.isPlainObject( to ) ) {
                $el.removeAttr('style');
            }

            $el.on( event, function(e) {

                // Skip events from child elements and z-index change
                if ( e && e.originalEvent && ( !$el.is( e.originalEvent.target ) || e.originalEvent.propertyName == 'z-index' ) ) {
                    return;
                }

                $el.off( event );

                if ( $.isPlainObject( to ) ) {

                    if ( to.scaleX !== undefined && to.scaleY !== undefined ) {
                        $el.css( 'transition-duration', '0ms' );

                        to.width  = Math.round( $el.width()  * to.scaleX );
                        to.height = Math.round( $el.height() * to.scaleY );

                        to.scaleX = 1;
                        to.scaleY = 1;

                        $.fancybox.setTranslate( $el, to );
                    }

                } else if ( leaveAnimationName !== true ) {
                    $el.removeClass( to );
                }

                if ( $.isFunction( callback ) ) {
                    callback( e );
                }

            });

            if ( $.isNumeric( duration ) ) {
                $el.css( 'transition-duration', duration + 'ms' );
            }

            if ( $.isPlainObject( to ) ) {
                $.fancybox.setTranslate( $el, to );

            } else {
                $el.addClass( to );
            }

            $el.data("timer", setTimeout(function() {
                $el.trigger( 'transitionend' );
            }, duration + 16));

        },

        stop : function( $el ) {
            clearTimeout( $el.data("timer") );

            $el.off( transitionEnd );
        }

    };


    // Default click handler for "fancyboxed" links
    // ============================================

    function _run( e ) {
        var target	= e.currentTarget,
            opts	= e.data ? e.data.options : {},
            items	= opts.selector ? $( opts.selector ) : ( e.data ? e.data.items : [] ),
            value	= $(target).attr( 'data-fancybox' ) || '',
            index	= 0,
            active  = $.fancybox.getInstance();

        e.preventDefault();
        e.stopPropagation();

        // Avoid opening multiple times
        if ( active && active.current.opts.$orig.is( target ) ) {
            return;
        }

        // Get all related items and find index for clicked one
        if ( value ) {
            items = items.length ? items.filter( '[data-fancybox="' + value + '"]' ) : $( '[data-fancybox="' + value + '"]' );
            index = items.index( target );

            // Sometimes current item can not be found
            // (for example, when slider clones items)
            if ( index < 0 ) {
                index = 0;
            }

        } else {
            items = [ target ];
        }

        $.fancybox.open( items, opts, index );
    }


    // Create a jQuery plugin
    // ======================

    $.fn.fancybox = function (options) {
        var selector;

        options  = options || {};
        selector = options.selector || false;

        if ( selector ) {

            $( 'body' ).off( 'click.fb-start', selector ).on( 'click.fb-start', selector, {
                options : options
            }, _run );

        } else {

            this.off( 'click.fb-start' ).on( 'click.fb-start', {
                items   : this,
                options : options
            }, _run);

        }

        return this;
    };


    // Self initializing plugin
    // ========================

    $D.on( 'click.fb-start', '[data-fancybox]', _run );

}( window, document, window.jQuery || jQuery ));

// ==========================================================================
//
// Media
// Adds additional media type support
//
// ==========================================================================
;(function ($) {

    'use strict';

    // Formats matching url to final form

    var format = function (url, rez, params) {
        if ( !url ) {
            return;
        }

        params = params || '';

        if ( $.type(params) === "object" ) {
            params = $.param(params, true);
        }

        $.each(rez, function (key, value) {
            url = url.replace('$' + key, value || '');
        });

        if (params.length) {
            url += (url.indexOf('?') > 0 ? '&' : '?') + params;
        }

        return url;
    };

    // Object containing properties for each media type

    var defaults = {
        youtube : {
            matcher : /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params  : {
                autoplay : 1,
                autohide : 1,
                fs  : 1,
                rel : 0,
                hd  : 1,
                wmode : 'transparent',
                enablejsapi : 1,
                html5 : 1
            },
            paramPlace : 8,
            type  : 'iframe',
            url   : '//www.youtube.com/embed/$4',
            thumb : '//img.youtube.com/vi/$4/hqdefault.jpg'
        },

        vimeo : {
            matcher : /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params  : {
                autoplay : 1,
                hd : 1,
                show_title    : 1,
                show_byline   : 1,
                show_portrait : 0,
                fullscreen    : 1,
                api : 1
            },
            paramPlace : 3,
            type : 'iframe',
            url : '//player.vimeo.com/video/$2'
        },

        metacafe : {
            matcher : /metacafe.com\/watch\/(\d+)\/(.*)?/,
            type    : 'iframe',
            url     : '//www.metacafe.com/embed/$1/?ap=1'
        },

        dailymotion : {
            matcher : /dailymotion.com\/video\/(.*)\/?(.*)/,
            params : {
                additionalInfos : 0,
                autoStart : 1
            },
            type : 'iframe',
            url  : '//www.dailymotion.com/embed/video/$1'
        },

        vine : {
            matcher : /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
            type    : 'iframe',
            url     : '//vine.co/v/$1/embed/simple'
        },

        instagram : {
            matcher : /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type    : 'image',
            url     : '//$1/p/$2/media/?size=l'
        },

        // Examples:
        // http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
        // https://www.google.com/maps/@37.7852006,-122.4146355,14.65z
        // https://www.google.com/maps/place/Googleplex/@37.4220041,-122.0833494,17z/data=!4m5!3m4!1s0x0:0x6c296c66619367e0!8m2!3d37.4219998!4d-122.0840572
        gmap_place : {
            matcher : /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type    : 'iframe',
            url     : function (rez) {
                return '//maps.google.' + rez[2] + '/?ll=' + ( rez[9] ? rez[9] + '&z=' + Math.floor(  rez[10]  ) + ( rez[12] ? rez[12].replace(/^\//, "&") : '' )  : rez[12] ) + '&output=' + ( rez[12] && rez[12].indexOf('layer=c') > 0 ? 'svembed' : 'embed' );
            }
        },

        // Examples:
        // https://www.google.com/maps/search/Empire+State+Building/
        // https://www.google.com/maps/search/?api=1&query=centurylink+field
        // https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393
        gmap_search : {
            matcher : /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type    : 'iframe',
            url     : function (rez) {
                return '//maps.google.' + rez[2] + '/maps?q=' + rez[5].replace('query=', 'q=').replace('api=1', '') + '&output=embed';
            }
        }
    };

    $(document).on('onInit.fb', function (e, instance) {

        $.each(instance.group, function( i, item ) {

            var url	 = item.src || '',
                type = false,
                media,
                thumb,
                rez,
                params,
                urlParams,
                o,
                provider;

            // Skip items that already have content type
            if ( item.type ) {
                return;
            }

            media = $.extend( true, {}, defaults, item.opts.media );

            // Look for any matching media type
            $.each(media, function ( n, el ) {
                rez = url.match(el.matcher);
                o   = {};
                provider = n;

                if (!rez) {
                    return;
                }

                type = el.type;

                if ( el.paramPlace && rez[ el.paramPlace ] ) {
                    urlParams = rez[ el.paramPlace ];

                    if ( urlParams[ 0 ] == '?' ) {
                        urlParams = urlParams.substring(1);
                    }

                    urlParams = urlParams.split('&');

                    for ( var m = 0; m < urlParams.length; ++m ) {
                        var p = urlParams[ m ].split('=', 2);

                        if ( p.length == 2 ) {
                            o[ p[0] ] = decodeURIComponent( p[1].replace(/\+/g, " ") );
                        }
                    }
                }

                params = $.extend( true, {}, el.params, item.opts[ n ], o );

                url   = $.type(el.url) === "function" ? el.url.call(this, rez, params, item) : format(el.url, rez, params);
                thumb = $.type(el.thumb) === "function" ? el.thumb.call(this, rez, params, item) : format(el.thumb, rez);

                if ( provider === 'vimeo' ) {
                    url = url.replace('&%23', '#');
                }

                return false;
            });

            // If it is found, then change content type and update the url

            if ( type ) {
                item.src  = url;
                item.type = type;

                if ( !item.opts.thumb && !( item.opts.$thumb && item.opts.$thumb.length ) ) {
                    item.opts.thumb = thumb;
                }

                if ( type === 'iframe' ) {
                    $.extend(true, item.opts, {
                        iframe : {
                            preload : false,
                            attr : {
                                scrolling : "no"
                            }
                        }
                    });

                    item.contentProvider = provider;

                    item.opts.slideClass += ' fancybox-slide--' + ( provider == 'gmap_place' || provider == 'gmap_search' ? 'map' : 'video' );
                }

            } else {

                // If no content type is found, then set it to `image` as fallback
                item.type = 'image';
            }

        });

    });

}(window.jQuery));

// ==========================================================================
//
// Guestures
// Adds touch guestures, handles click and tap events
//
// ==========================================================================
;(function (window, document, $) {
    'use strict';

    var requestAFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            // if all else fails, use setTimeout
            function (callback) {
                return window.setTimeout(callback, 1000 / 60);
            };
    })();


    var cancelAFrame = (function () {
        return window.cancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.oCancelAnimationFrame ||
            function (id) {
                window.clearTimeout(id);
            };
    })();


    var pointers = function( e ) {
        var result = [];

        e = e.originalEvent || e || window.e;
        e = e.touches && e.touches.length ? e.touches : ( e.changedTouches && e.changedTouches.length ? e.changedTouches : [ e ] );

        for ( var key in e ) {

            if ( e[ key ].pageX ) {
                result.push( { x : e[ key ].pageX, y : e[ key ].pageY } );

            } else if ( e[ key ].clientX ) {
                result.push( { x : e[ key ].clientX, y : e[ key ].clientY } );
            }
        }

        return result;
    };

    var distance = function( point2, point1, what ) {
        if ( !point1 || !point2 ) {
            return 0;
        }

        if ( what === 'x' ) {
            return point2.x - point1.x;

        } else if ( what === 'y' ) {
            return point2.y - point1.y;
        }

        return Math.sqrt( Math.pow( point2.x - point1.x, 2 ) + Math.pow( point2.y - point1.y, 2 ) );
    };

    var isClickable = function( $el ) {

        if ( $el.is('a,button,input,select,textarea') || $.isFunction( $el.get(0).onclick ) || $el.data('selectable') ) {
            return true;
        }

        // Check for attributes like data-fancybox-next or data-fancybox-close
        for ( var i = 0, atts = $el[0].attributes, n = atts.length; i < n; i++ ) {
            if ( atts[i].nodeName.substr(0, 14) === 'data-fancybox-' ) {
                return true;
            }
        }

        return false;
    };

    var hasScrollbars = function( el ) {
        var overflowY = window.getComputedStyle( el )['overflow-y'];
        var overflowX = window.getComputedStyle( el )['overflow-x'];

        var vertical   = (overflowY === 'scroll' || overflowY === 'auto') && el.scrollHeight > el.clientHeight;
        var horizontal = (overflowX === 'scroll' || overflowX === 'auto') && el.scrollWidth > el.clientWidth;

        return vertical || horizontal;
    };

    var isScrollable = function ( $el ) {
        var rez = false;

        while ( true ) {
            rez	= hasScrollbars( $el.get(0) );

            if ( rez ) {
                break;
            }

            $el = $el.parent();

            if ( !$el.length || $el.hasClass( 'fancybox-stage' ) || $el.is( 'body' ) ) {
                break;
            }
        }

        return rez;
    };


    var Guestures = function ( instance ) {
        var self = this;

        self.instance = instance;

        self.$bg        = instance.$refs.bg;
        self.$stage     = instance.$refs.stage;
        self.$container = instance.$refs.container;

        self.destroy();

        self.$container.on( 'touchstart.fb.touch mousedown.fb.touch', $.proxy(self, 'ontouchstart') );
    };

    Guestures.prototype.destroy = function() {
        this.$container.off( '.fb.touch' );
    };

    Guestures.prototype.ontouchstart = function( e ) {
        var self = this;

        var $target  = $( e.target );
        var instance = self.instance;
        var current  = instance.current;
        var $content = current.$content;

        var isTouchDevice = ( e.type == 'touchstart' );

        // Do not respond to both events
        if ( isTouchDevice ) {
            self.$container.off( 'mousedown.fb.touch' );
        }

        // Ignore clicks while zooming or closing
        if ( !current || self.instance.isAnimating || self.instance.isClosing ) {
            e.stopPropagation();
            e.preventDefault();

            return;
        }

        // Ignore right click
        if ( e.originalEvent && e.originalEvent.button == 2 ) {
            return;
        }

        // Ignore taping on links, buttons, input elements
        if ( !$target.length || isClickable( $target ) || isClickable( $target.parent() ) ) {
            return;
        }

        // Ignore clicks on the scrollbar
        if ( e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left ) {
            return;
        }

        self.startPoints = pointers( e );

        // Prevent zooming if already swiping
        if ( !self.startPoints || ( self.startPoints.length > 1 && instance.isSliding ) ) {
            return;
        }

        self.$target  = $target;
        self.$content = $content;
        self.canTap   = true;

        $(document).off( '.fb.touch' );

        $(document).on( isTouchDevice ? 'touchend.fb.touch touchcancel.fb.touch' : 'mouseup.fb.touch mouseleave.fb.touch',  $.proxy(self, "ontouchend"));
        $(document).on( isTouchDevice ? 'touchmove.fb.touch' : 'mousemove.fb.touch',  $.proxy(self, "ontouchmove"));

        if ( !(instance.current.opts.touch || instance.canPan() ) || !( $target.is( self.$stage ) || self.$stage.find( $target ).length ) ) {

            // Prevent ghosting
            if ( $target.is('img') ) {
                e.preventDefault();
            }

            return;
        }

        e.stopPropagation();

        if ( !( $.fancybox.isMobile && ( isScrollable( self.$target ) || isScrollable( self.$target.parent() ) ) ) ) {
            e.preventDefault();
        }

        self.canvasWidth  = Math.round( current.$slide[0].clientWidth );
        self.canvasHeight = Math.round( current.$slide[0].clientHeight );

        self.startTime = new Date().getTime();
        self.distanceX = self.distanceY = self.distance = 0;

        self.isPanning = false;
        self.isSwiping = false;
        self.isZooming = false;

        self.sliderStartPos  = self.sliderLastPos || { top: 0, left: 0 };
        self.contentStartPos = $.fancybox.getTranslate( self.$content );
        self.contentLastPos  = null;

        if ( self.startPoints.length === 1 && !self.isZooming ) {
            self.canTap = !instance.isSliding;

            if ( current.type === 'image' && ( self.contentStartPos.width > self.canvasWidth + 1 || self.contentStartPos.height > self.canvasHeight + 1 ) ) {

                $.fancybox.stop( self.$content );

                self.$content.css( 'transition-duration', '0ms' );

                self.isPanning = true;

            } else {

                self.isSwiping = true;
            }

            self.$container.addClass('fancybox-controls--isGrabbing');
        }

        if ( self.startPoints.length === 2 && !instance.isAnimating && !current.hasError && current.type === 'image' && ( current.isLoaded || current.$ghost ) ) {
            self.isZooming = true;

            self.isSwiping = false;
            self.isPanning = false;

            $.fancybox.stop( self.$content );

            self.$content.css( 'transition-duration', '0ms' );

            self.centerPointStartX = ( ( self.startPoints[0].x + self.startPoints[1].x ) * 0.5 ) - $(window).scrollLeft();
            self.centerPointStartY = ( ( self.startPoints[0].y + self.startPoints[1].y ) * 0.5 ) - $(window).scrollTop();

            self.percentageOfImageAtPinchPointX = ( self.centerPointStartX - self.contentStartPos.left ) / self.contentStartPos.width;
            self.percentageOfImageAtPinchPointY = ( self.centerPointStartY - self.contentStartPos.top  ) / self.contentStartPos.height;

            self.startDistanceBetweenFingers = distance( self.startPoints[0], self.startPoints[1] );
        }

    };

    Guestures.prototype.ontouchmove = function( e ) {

        var self = this;

        self.newPoints = pointers( e );

        if ( $.fancybox.isMobile && ( isScrollable( self.$target ) || isScrollable( self.$target.parent() ) ) ) {
            e.stopPropagation();

            self.canTap = false;

            return;
        }

        if ( !( self.instance.current.opts.touch || self.instance.canPan() ) || !self.newPoints || !self.newPoints.length ) {
            return;
        }

        self.distanceX = distance( self.newPoints[0], self.startPoints[0], 'x' );
        self.distanceY = distance( self.newPoints[0], self.startPoints[0], 'y' );

        self.distance = distance( self.newPoints[0], self.startPoints[0] );

        // Skip false ontouchmove events (Chrome)
        if ( self.distance > 0 ) {

            if ( !( self.$target.is( self.$stage ) || self.$stage.find( self.$target ).length ) ) {
                return;
            }

            e.stopPropagation();
            e.preventDefault();

            if ( self.isSwiping ) {
                self.onSwipe();

            } else if ( self.isPanning ) {
                self.onPan();

            } else if ( self.isZooming ) {
                self.onZoom();
            }

        }

    };

    Guestures.prototype.onSwipe = function() {

        var self = this;

        var swiping = self.isSwiping;
        var left    = self.sliderStartPos.left || 0;
        var angle;

        if ( swiping === true ) {

            if ( Math.abs( self.distance ) > 10 )  {

                self.canTap = false;

                if ( self.instance.group.length < 2 && self.instance.opts.touch.vertical ) {
                    self.isSwiping  = 'y';

                } else if ( self.instance.isSliding || self.instance.opts.touch.vertical === false || ( self.instance.opts.touch.vertical === 'auto' && $( window ).width() > 800 ) ) {
                    self.isSwiping  = 'x';

                } else {
                    angle = Math.abs( Math.atan2( self.distanceY, self.distanceX ) * 180 / Math.PI );

                    self.isSwiping = ( angle > 45 && angle < 135 ) ? 'y' : 'x';
                }

                self.instance.isSliding = self.isSwiping;

                // Reset points to avoid jumping, because we dropped first swipes to calculate the angle
                self.startPoints = self.newPoints;

                $.each(self.instance.slides, function( index, slide ) {
                    $.fancybox.stop( slide.$slide );

                    slide.$slide.css( 'transition-duration', '0ms' );

                    slide.inTransition = false;

                    if ( slide.pos === self.instance.current.pos ) {
                        self.sliderStartPos.left = $.fancybox.getTranslate( slide.$slide ).left;
                    }
                });

                //self.instance.current.isMoved = true;

                // Stop slideshow
                if ( self.instance.SlideShow && self.instance.SlideShow.isActive ) {
                    self.instance.SlideShow.stop();
                }
            }

        } else {

            if ( swiping == 'x' ) {

                // Sticky edges
                if ( self.distanceX > 0 && ( self.instance.group.length < 2 || ( self.instance.current.index === 0 && !self.instance.current.opts.loop ) ) ) {
                    left = left + Math.pow( self.distanceX, 0.8 );

                } else if ( self.distanceX < 0 && ( self.instance.group.length < 2 || ( self.instance.current.index === self.instance.group.length - 1 && !self.instance.current.opts.loop ) ) ) {
                    left = left - Math.pow( -self.distanceX, 0.8 );

                } else {
                    left = left + self.distanceX;
                }

            }

            self.sliderLastPos = {
                top  : swiping == 'x' ? 0 : self.sliderStartPos.top + self.distanceY,
                left : left
            };

            if ( self.requestId ) {
                cancelAFrame( self.requestId );

                self.requestId = null;
            }

            self.requestId = requestAFrame(function() {

                if ( self.sliderLastPos ) {
                    $.each(self.instance.slides, function( index, slide ) {
                        var pos = slide.pos - self.instance.currPos;

                        $.fancybox.setTranslate( slide.$slide, {
                            top  : self.sliderLastPos.top,
                            left : self.sliderLastPos.left + ( pos * self.canvasWidth ) + ( pos * slide.opts.gutter )
                        });
                    });

                    self.$container.addClass( 'fancybox-is-sliding' );
                }

            });

        }

    };

    Guestures.prototype.onPan = function() {

        var self = this;

        var newOffsetX, newOffsetY, newPos;

        self.canTap = false;

        if ( self.contentStartPos.width > self.canvasWidth ) {
            newOffsetX = self.contentStartPos.left + self.distanceX;

        } else {
            newOffsetX = self.contentStartPos.left;
        }

        newOffsetY = self.contentStartPos.top + self.distanceY;

        newPos = self.limitMovement( newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height );

        newPos.scaleX = self.contentStartPos.scaleX;
        newPos.scaleY = self.contentStartPos.scaleY;

        self.contentLastPos = newPos;

        if ( self.requestId ) {
            cancelAFrame( self.requestId );

            self.requestId = null;
        }

        self.requestId = requestAFrame(function() {
            $.fancybox.setTranslate( self.$content, self.contentLastPos );
        });
    };

    // Make panning sticky to the edges
    Guestures.prototype.limitMovement = function( newOffsetX, newOffsetY, newWidth, newHeight ) {

        var self = this;

        var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY;

        var canvasWidth  = self.canvasWidth;
        var canvasHeight = self.canvasHeight;

        var currentOffsetX = self.contentStartPos.left;
        var currentOffsetY = self.contentStartPos.top;

        var distanceX = self.distanceX;
        var distanceY = self.distanceY;

        // Slow down proportionally to traveled distance

        minTranslateX = Math.max(0, canvasWidth  * 0.5 - newWidth  * 0.5 );
        minTranslateY = Math.max(0, canvasHeight * 0.5 - newHeight * 0.5 );

        maxTranslateX = Math.min( canvasWidth  - newWidth,  canvasWidth  * 0.5 - newWidth  * 0.5 );
        maxTranslateY = Math.min( canvasHeight - newHeight, canvasHeight * 0.5 - newHeight * 0.5 );

        if ( newWidth > canvasWidth ) {

            //   ->
            if ( distanceX > 0 && newOffsetX > minTranslateX ) {
                newOffsetX = minTranslateX - 1 + Math.pow( -minTranslateX + currentOffsetX + distanceX, 0.8 ) || 0;
            }

            //    <-
            if ( distanceX  < 0 && newOffsetX < maxTranslateX ) {
                newOffsetX = maxTranslateX + 1 - Math.pow( maxTranslateX - currentOffsetX - distanceX, 0.8 ) || 0;
            }

        }

        if ( newHeight > canvasHeight ) {

            //   \/
            if ( distanceY > 0 && newOffsetY > minTranslateY ) {
                newOffsetY = minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8 ) || 0;
            }

            //   /\
            if ( distanceY < 0 && newOffsetY < maxTranslateY ) {
                newOffsetY = maxTranslateY + 1 - Math.pow ( maxTranslateY - currentOffsetY - distanceY, 0.8 ) || 0;
            }

        }

        return {
            top  : newOffsetY,
            left : newOffsetX
        };

    };


    Guestures.prototype.limitPosition = function( newOffsetX, newOffsetY, newWidth, newHeight ) {

        var self = this;

        var canvasWidth  = self.canvasWidth;
        var canvasHeight = self.canvasHeight;

        if ( newWidth > canvasWidth ) {
            newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
            newOffsetX = newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth : newOffsetX;

        } else {

            // Center horizontally
            newOffsetX = Math.max( 0, canvasWidth / 2 - newWidth / 2 );

        }

        if ( newHeight > canvasHeight ) {
            newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
            newOffsetY = newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight : newOffsetY;

        } else {

            // Center vertically
            newOffsetY = Math.max( 0, canvasHeight / 2 - newHeight / 2 );

        }

        return {
            top  : newOffsetY,
            left : newOffsetX
        };

    };

    Guestures.prototype.onZoom = function() {

        var self = this;

        // Calculate current distance between points to get pinch ratio and new width and height

        var currentWidth  = self.contentStartPos.width;
        var currentHeight = self.contentStartPos.height;

        var currentOffsetX = self.contentStartPos.left;
        var currentOffsetY = self.contentStartPos.top;

        var endDistanceBetweenFingers = distance( self.newPoints[0], self.newPoints[1] );

        var pinchRatio = endDistanceBetweenFingers / self.startDistanceBetweenFingers;

        var newWidth  = Math.floor( currentWidth  * pinchRatio );
        var newHeight = Math.floor( currentHeight * pinchRatio );

        // This is the translation due to pinch-zooming
        var translateFromZoomingX = (currentWidth  - newWidth)  * self.percentageOfImageAtPinchPointX;
        var translateFromZoomingY = (currentHeight - newHeight) * self.percentageOfImageAtPinchPointY;

        //Point between the two touches

        var centerPointEndX = ((self.newPoints[0].x + self.newPoints[1].x) / 2) - $(window).scrollLeft();
        var centerPointEndY = ((self.newPoints[0].y + self.newPoints[1].y) / 2) - $(window).scrollTop();

        // And this is the translation due to translation of the centerpoint
        // between the two fingers

        var translateFromTranslatingX = centerPointEndX - self.centerPointStartX;
        var translateFromTranslatingY = centerPointEndY - self.centerPointStartY;

        // The new offset is the old/current one plus the total translation

        var newOffsetX = currentOffsetX + ( translateFromZoomingX + translateFromTranslatingX );
        var newOffsetY = currentOffsetY + ( translateFromZoomingY + translateFromTranslatingY );

        var newPos = {
            top    : newOffsetY,
            left   : newOffsetX,
            scaleX : self.contentStartPos.scaleX * pinchRatio,
            scaleY : self.contentStartPos.scaleY * pinchRatio
        };

        self.canTap = false;

        self.newWidth  = newWidth;
        self.newHeight = newHeight;

        self.contentLastPos = newPos;

        if ( self.requestId ) {
            cancelAFrame( self.requestId );

            self.requestId = null;
        }

        self.requestId = requestAFrame(function() {
            $.fancybox.setTranslate( self.$content, self.contentLastPos );
        });

    };

    Guestures.prototype.ontouchend = function( e ) {

        var self = this;
        var dMs  = Math.max( (new Date().getTime() ) - self.startTime, 1);

        var swiping = self.isSwiping;
        var panning = self.isPanning;
        var zooming = self.isZooming;

        self.endPoints = pointers( e );

        self.$container.removeClass( 'fancybox-controls--isGrabbing' );

        $(document).off( '.fb.touch' );

        if ( self.requestId ) {
            cancelAFrame( self.requestId );

            self.requestId = null;
        }

        self.isSwiping = false;
        self.isPanning = false;
        self.isZooming = false;

        if ( self.canTap )  {
            return self.onTap( e );
        }

        self.speed = 366;

        // Speed in px/ms
        self.velocityX = self.distanceX / dMs * 0.5;
        self.velocityY = self.distanceY / dMs * 0.5;

        self.speedX = Math.max( self.speed * 0.5, Math.min( self.speed * 1.5, ( 1 / Math.abs( self.velocityX ) ) * self.speed ) );

        if ( panning ) {
            self.endPanning();

        } else if ( zooming ) {
            self.endZooming();

        } else {
            self.endSwiping( swiping );
        }

        return;
    };

    Guestures.prototype.endSwiping = function( swiping ) {

        var self = this;
        var ret = false;

        self.instance.isSliding = false;
        self.sliderLastPos      = null;

        // Close if swiped vertically / navigate if horizontally
        if ( swiping == 'y' && Math.abs( self.distanceY ) > 50 ) {

            // Continue vertical movement
            $.fancybox.animate( self.instance.current.$slide, {
                top     : self.sliderStartPos.top + self.distanceY + ( self.velocityY * 150 ),
                opacity : 0
            }, 150 );

            ret = self.instance.close( true, 300 );

        } else if ( swiping == 'x' && self.distanceX > 50 && self.instance.group.length > 1 ) {
            ret = self.instance.previous( self.speedX );

        } else if ( swiping == 'x' && self.distanceX < -50  && self.instance.group.length > 1 ) {
            ret = self.instance.next( self.speedX );
        }

        if ( ret === false && ( swiping == 'x' || swiping == 'y' ) ) {
            self.instance.jumpTo( self.instance.current.index, 150 );
        }

        self.$container.removeClass( 'fancybox-is-sliding' );

    };

    // Limit panning from edges
    // ========================

    Guestures.prototype.endPanning = function() {

        var self = this;
        var newOffsetX, newOffsetY, newPos;

        if ( !self.contentLastPos ) {
            return;
        }

        if ( self.instance.current.opts.touch.momentum === false ) {
            newOffsetX = self.contentLastPos.left;
            newOffsetY = self.contentLastPos.top;

        } else {

            // Continue movement
            newOffsetX = self.contentLastPos.left + ( self.velocityX * self.speed );
            newOffsetY = self.contentLastPos.top  + ( self.velocityY * self.speed );
        }

        newPos = self.limitPosition( newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height );

        newPos.width  = self.contentStartPos.width;
        newPos.height = self.contentStartPos.height;

        $.fancybox.animate( self.$content, newPos, 330 );
    };


    Guestures.prototype.endZooming = function() {

        var self = this;

        var current = self.instance.current;

        var newOffsetX, newOffsetY, newPos, reset;

        var newWidth  = self.newWidth;
        var newHeight = self.newHeight;

        if ( !self.contentLastPos ) {
            return;
        }

        newOffsetX = self.contentLastPos.left;
        newOffsetY = self.contentLastPos.top;

        reset = {
            top    : newOffsetY,
            left   : newOffsetX,
            width  : newWidth,
            height : newHeight,
            scaleX : 1,
            scaleY : 1
        };

        // Reset scalex/scaleY values; this helps for perfomance and does not break animation
        $.fancybox.setTranslate( self.$content, reset );

        if ( newWidth < self.canvasWidth && newHeight < self.canvasHeight ) {
            self.instance.scaleToFit( 150 );

        } else if ( newWidth > current.width || newHeight > current.height ) {
            self.instance.scaleToActual( self.centerPointStartX, self.centerPointStartY, 150 );

        } else {

            newPos = self.limitPosition( newOffsetX, newOffsetY, newWidth, newHeight );

            // Switch from scale() to width/height or animation will not work correctly
            $.fancybox.setTranslate( self.content, $.fancybox.getTranslate( self.$content ) );

            $.fancybox.animate( self.$content, newPos, 150 );
        }

    };

    Guestures.prototype.onTap = function(e) {
        var self    = this;
        var $target = $( e.target );

        var instance = self.instance;
        var current  = instance.current;

        var endPoints = ( e && pointers( e ) ) || self.startPoints;

        var tapX = endPoints[0] ? endPoints[0].x - self.$stage.offset().left : 0;
        var tapY = endPoints[0] ? endPoints[0].y - self.$stage.offset().top  : 0;

        var where;

        var process = function ( prefix ) {

            var action = current.opts[ prefix ];

            if ( $.isFunction( action ) ) {
                action = action.apply( instance, [ current, e ] );
            }

            if ( !action) {
                return;
            }

            switch ( action ) {

                case "close" :

                    instance.close( self.startEvent );

                    break;

                case "toggleControls" :

                    instance.toggleControls( true );

                    break;

                case "next" :

                    instance.next();

                    break;

                case "nextOrClose" :

                    if ( instance.group.length > 1 ) {
                        instance.next();

                    } else {
                        instance.close( self.startEvent );
                    }

                    break;

                case "zoom" :

                    if ( current.type == 'image' && ( current.isLoaded || current.$ghost ) ) {

                        if ( instance.canPan() ) {
                            instance.scaleToFit();

                        } else if ( instance.isScaledDown() ) {
                            instance.scaleToActual( tapX, tapY );

                        } else if ( instance.group.length < 2 ) {
                            instance.close( self.startEvent );
                        }
                    }

                    break;
            }

        };

        // Ignore right click
        if ( e.originalEvent && e.originalEvent.button == 2 ) {
            return;
        }

        // Skip if current slide is not in the center
        if ( instance.isSliding ) {
            return;
        }

        // Skip if clicked on the scrollbar
        if ( tapX > $target[0].clientWidth + $target.offset().left ) {
            return;
        }

        // Check where is clicked
        if ( $target.is( '.fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container' ) ) {
            where = 'Outside';

        } else if ( $target.is( '.fancybox-slide' ) ) {
            where = 'Slide';

        } else if  ( instance.current.$content && instance.current.$content.has( e.target ).length ) {
            where = 'Content';

        } else {
            return;
        }

        // Check if this is a double tap
        if ( self.tapped ) {

            // Stop previously created single tap
            clearTimeout( self.tapped );
            self.tapped = null;

            // Skip if distance between taps is too big
            if ( Math.abs( tapX - self.tapX ) > 50 || Math.abs( tapY - self.tapY ) > 50 || instance.isSliding ) {
                return this;
            }

            // OK, now we assume that this is a double-tap
            process( 'dblclick' + where );

        } else {

            // Single tap will be processed if user has not clicked second time within 300ms
            // or there is no need to wait for double-tap
            self.tapX = tapX;
            self.tapY = tapY;

            if ( current.opts[ 'dblclick' + where ] && current.opts[ 'dblclick' + where ] !== current.opts[ 'click' + where ] ) {
                self.tapped = setTimeout(function() {
                    self.tapped = null;

                    process( 'click' + where );

                }, 300);

            } else {
                process( 'click' + where );
            }

        }

        return this;
    };

    $(document).on('onActivate.fb', function (e, instance) {
        if ( instance && !instance.Guestures ) {
            instance.Guestures = new Guestures( instance );
        }
    });

    $(document).on('beforeClose.fb', function (e, instance) {
        if ( instance && instance.Guestures ) {
            instance.Guestures.destroy();
        }
    });


}(window, document, window.jQuery));

// ==========================================================================
//
// SlideShow
// Enables slideshow functionality
//
// Example of usage:
// $.fancybox.getInstance().SlideShow.start()
//
// ==========================================================================
;(function (document, $) {
    'use strict';

    var SlideShow = function( instance ) {
        this.instance = instance;
        this.init();
    };

    $.extend( SlideShow.prototype, {
        timer    : null,
        isActive : false,
        $button  : null,
        speed    : 3000,

        init : function() {
            var self = this;

            self.$button = self.instance.$refs.toolbar.find('[data-fancybox-play]').on('click', function() {
                self.toggle();
            });

            if ( self.instance.group.length < 2 || !self.instance.group[ self.instance.currIndex ].opts.slideShow ) {
                self.$button.hide();
            }
        },

        set : function() {
            var self = this;

            // Check if reached last element
            if ( self.instance && self.instance.current && (self.instance.current.opts.loop || self.instance.currIndex < self.instance.group.length - 1 )) {
                self.timer = setTimeout(function() {
                    self.instance.next();

                }, self.instance.current.opts.slideShow.speed || self.speed);

            } else {
                self.stop();
                self.instance.idleSecondsCounter = 0;
                self.instance.showControls();
            }

        },

        clear : function() {
            var self = this;

            clearTimeout( self.timer );

            self.timer = null;
        },

        start : function() {
            var self = this;
            var current = self.instance.current;

            if ( self.instance && current && ( current.opts.loop || current.index < self.instance.group.length - 1 )) {

                self.isActive = true;

                self.$button
                    .attr( 'title', current.opts.i18n[ current.opts.lang ].PLAY_STOP )
                    .addClass( 'fancybox-button--pause' );

                if ( current.isComplete ) {
                    self.set();
                }
            }
        },

        stop : function() {
            var self = this;
            var current = self.instance.current;

            self.clear();

            self.$button
                .attr( 'title', current.opts.i18n[ current.opts.lang ].PLAY_START )
                .removeClass( 'fancybox-button--pause' );

            self.isActive = false;
        },

        toggle : function() {
            var self = this;

            if ( self.isActive ) {
                self.stop();

            } else {
                self.start();
            }
        }

    });

    $(document).on({
        'onInit.fb' : function(e, instance) {
            if ( instance && !instance.SlideShow ) {
                instance.SlideShow = new SlideShow( instance );
            }
        },

        'beforeShow.fb' : function(e, instance, current, firstRun) {
            var SlideShow = instance && instance.SlideShow;

            if ( firstRun ) {

                if ( SlideShow && current.opts.slideShow.autoStart ) {
                    SlideShow.start();
                }

            } else if ( SlideShow && SlideShow.isActive )  {
                SlideShow.clear();
            }
        },

        'afterShow.fb' : function(e, instance, current) {
            var SlideShow = instance && instance.SlideShow;

            if ( SlideShow && SlideShow.isActive ) {
                SlideShow.set();
            }
        },

        'afterKeydown.fb' : function(e, instance, current, keypress, keycode) {
            var SlideShow = instance && instance.SlideShow;

            // "P" or Spacebar
            if ( SlideShow && current.opts.slideShow && ( keycode === 80 || keycode === 32 ) && !$(document.activeElement).is( 'button,a,input' ) ) {
                keypress.preventDefault();

                SlideShow.toggle();
            }
        },

        'beforeClose.fb onDeactivate.fb' : function(e, instance) {
            var SlideShow = instance && instance.SlideShow;

            if ( SlideShow ) {
                SlideShow.stop();
            }
        }
    });

    // Page Visibility API to pause slideshow when window is not active
    $(document).on("visibilitychange", function() {
        var instance  = $.fancybox.getInstance();
        var SlideShow = instance && instance.SlideShow;

        if ( SlideShow && SlideShow.isActive ) {
            if ( document.hidden ) {
                SlideShow.clear();

            } else {
                SlideShow.set();
            }
        }
    });

}(document, window.jQuery));

// ==========================================================================
//
// FullScreen
// Adds fullscreen functionality
//
// ==========================================================================
;(function (document, $) {
    'use strict';

    // Collection of methods supported by user browser
    var fn = (function () {

        var fnMap = [
            [
                'requestFullscreen',
                'exitFullscreen',
                'fullscreenElement',
                'fullscreenEnabled',
                'fullscreenchange',
                'fullscreenerror'
            ],
            // new WebKit
            [
                'webkitRequestFullscreen',
                'webkitExitFullscreen',
                'webkitFullscreenElement',
                'webkitFullscreenEnabled',
                'webkitfullscreenchange',
                'webkitfullscreenerror'

            ],
            // old WebKit (Safari 5.1)
            [
                'webkitRequestFullScreen',
                'webkitCancelFullScreen',
                'webkitCurrentFullScreenElement',
                'webkitCancelFullScreen',
                'webkitfullscreenchange',
                'webkitfullscreenerror'

            ],
            [
                'mozRequestFullScreen',
                'mozCancelFullScreen',
                'mozFullScreenElement',
                'mozFullScreenEnabled',
                'mozfullscreenchange',
                'mozfullscreenerror'
            ],
            [
                'msRequestFullscreen',
                'msExitFullscreen',
                'msFullscreenElement',
                'msFullscreenEnabled',
                'MSFullscreenChange',
                'MSFullscreenError'
            ]
        ];

        var val;
        var ret = {};
        var i, j;

        for ( i = 0; i < fnMap.length; i++ ) {
            val = fnMap[ i ];

            if ( val && val[ 1 ] in document ) {
                for ( j = 0; j < val.length; j++ ) {
                    ret[ fnMap[ 0 ][ j ] ] = val[ j ];
                }

                return ret;
            }
        }

        return false;
    })();

    // If browser does not have Full Screen API, then simply unset default button template and stop
    if ( !fn ) {

        if ( $ && $.fancybox ) {
            $.fancybox.defaults.btnTpl.fullScreen = false;
        }

        return;
    }

    var FullScreen = {

        request : function ( elem ) {

            elem = elem || document.documentElement;

            elem[ fn.requestFullscreen ]( elem.ALLOW_KEYBOARD_INPUT );

        },
        exit : function () {

            document[ fn.exitFullscreen ]();

        },
        toggle : function ( elem ) {

            elem = elem || document.documentElement;

            if ( this.isFullscreen() ) {
                this.exit();

            } else {
                this.request( elem );
            }

        },
        isFullscreen : function()  {

            return Boolean( document[ fn.fullscreenElement ] );

        },
        enabled : function()  {

            return Boolean( document[ fn.fullscreenEnabled ] );

        }
    };

    $(document).on({
        'onInit.fb' : function(e, instance) {
            var $container;

            var $button = instance.$refs.toolbar.find('[data-fancybox-fullscreen]');

            if ( instance && !instance.FullScreen && instance.group[ instance.currIndex ].opts.fullScreen ) {
                $container = instance.$refs.container;

                $container.on('click.fb-fullscreen', '[data-fancybox-fullscreen]', function(e) {

                    e.stopPropagation();
                    e.preventDefault();

                    FullScreen.toggle( $container[ 0 ] );

                });

                if ( instance.opts.fullScreen && instance.opts.fullScreen.autoStart === true ) {
                    FullScreen.request( $container[ 0 ] );
                }

                // Expose API
                instance.FullScreen = FullScreen;

            } else {
                $button.hide();
            }

        },

        'afterKeydown.fb' : function(e, instance, current, keypress, keycode) {

            // "P" or Spacebar
            if ( instance && instance.FullScreen && keycode === 70 ) {
                keypress.preventDefault();

                instance.FullScreen.toggle( instance.$refs.container[ 0 ] );
            }

        },

        'beforeClose.fb' : function( instance ) {
            if ( instance && instance.FullScreen ) {
                FullScreen.exit();
            }
        }
    });

    $(document).on(fn.fullscreenchange, function() {
        var instance = $.fancybox.getInstance();

        // If image is zooming, then force to stop and reposition properly
        if ( instance.current && instance.current.type === 'image' && instance.isAnimating ) {
            instance.current.$content.css( 'transition', 'none' );

            instance.isAnimating = false;

            instance.update( true, true, 0 );
        }

        instance.trigger('onFullscreenChange', FullScreen.isFullscreen() );

    });

}(document, window.jQuery));

// ==========================================================================
//
// Thumbs
// Displays thumbnails in a grid
//
// ==========================================================================
;(function (document, $) {
    'use strict';

    var FancyThumbs = function( instance ) {
        this.instance = instance;
        this.init();
    };

    $.extend( FancyThumbs.prototype, {

        $button		: null,
        $grid		: null,
        $list		: null,
        isVisible	: false,

        init : function() {
            var self = this;

            var first  = self.instance.group[0],
                second = self.instance.group[1];

            self.$button = self.instance.$refs.toolbar.find( '[data-fancybox-thumbs]' );

            if ( self.instance.group.length > 1 && self.instance.group[ self.instance.currIndex ].opts.thumbs && (
                    ( first.type == 'image'  || first.opts.thumb  || first.opts.$thumb ) &&
                    ( second.type == 'image' || second.opts.thumb || second.opts.$thumb )
                )) {

                self.$button.on('click', function() {
                    self.toggle();
                });

                self.isActive = true;

            } else {
                self.$button.hide();

                self.isActive = false;
            }

        },

        create : function() {
            var instance = this.instance,
                list,
                src;

            this.$grid = $('<div class="fancybox-thumbs"></div>').appendTo( instance.$refs.container );

            list = '<ul>';

            $.each(instance.group, function( i, item ) {

                src = item.opts.thumb || ( item.opts.$thumb ? item.opts.$thumb.attr('src') : null );

                if ( !src && item.type === 'image' ) {
                    src = item.src;
                }

                if ( src && src.length ) {
                    list += '<li data-index="' + i + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + src + '" /></li>';
                }

            });

            list += '</ul>';

            this.$list = $( list ).appendTo( this.$grid ).on('click', 'li', function() {
                instance.jumpTo( $(this).data('index') );
            });

            this.$list.find('img').hide().one('load', function() {

                var $parent		= $(this).parent().removeClass('fancybox-thumbs-loading'),
                    thumbWidth	= $parent.outerWidth(),
                    thumbHeight	= $parent.outerHeight(),
                    width,
                    height,
                    widthRatio,
                    heightRatio;

                width  = this.naturalWidth	|| this.width;
                height = this.naturalHeight	|| this.height;

                //Calculate thumbnail width/height and center it

                widthRatio  = width  / thumbWidth;
                heightRatio = height / thumbHeight;

                if (widthRatio >= 1 && heightRatio >= 1) {
                    if (widthRatio > heightRatio) {
                        width  = width / heightRatio;
                        height = thumbHeight;

                    } else {
                        width  = thumbWidth;
                        height = height / widthRatio;
                    }
                }

                $(this).css({
                    width         : Math.floor(width),
                    height        : Math.floor(height),
                    'margin-top'  : Math.min( 0, Math.floor(thumbHeight * 0.3 - height * 0.3 ) ),
                    'margin-left' : Math.min( 0, Math.floor(thumbWidth  * 0.5 - width  * 0.5 ) )
                }).show();

            })
                .each(function() {
                    this.src = $( this ).data( 'src' );
                });

        },

        focus : function() {

            if ( this.instance.current ) {
                this.$list
                    .children()
                    .removeClass('fancybox-thumbs-active')
                    .filter('[data-index="' + this.instance.current.index  + '"]')
                    .addClass('fancybox-thumbs-active')
                    .focus();
            }

        },

        close : function() {
            this.$grid.hide();
        },

        update : function() {

            this.instance.$refs.container.toggleClass( 'fancybox-show-thumbs', this.isVisible );

            if ( this.isVisible ) {

                if ( !this.$grid ) {
                    this.create();
                }

                this.instance.trigger( 'onThumbsShow' );

                this.focus();

            } else if ( this.$grid ) {
                this.instance.trigger( 'onThumbsHide' );
            }

            // Update content position
            this.instance.update();

        },

        hide : function() {
            this.isVisible = false;
            this.update();
        },

        show : function() {
            this.isVisible = true;
            this.update();
        },

        toggle : function() {
            this.isVisible = !this.isVisible;
            this.update();
        }

    });

    $(document).on({

        'onInit.fb' : function(e, instance) {
            if ( instance && !instance.Thumbs ) {
                instance.Thumbs = new FancyThumbs( instance );
            }
        },

        'beforeShow.fb' : function(e, instance, item, firstRun) {
            var Thumbs = instance && instance.Thumbs;

            if ( !Thumbs || !Thumbs.isActive ) {
                return;
            }

            if ( item.modal ) {
                Thumbs.$button.hide();

                Thumbs.hide();

                return;
            }

            if ( firstRun && instance.opts.thumbs.autoStart === true ) {
                Thumbs.show();
            }

            if ( Thumbs.isVisible ) {
                Thumbs.focus();
            }
        },

        'afterKeydown.fb' : function(e, instance, current, keypress, keycode) {
            var Thumbs = instance && instance.Thumbs;

            // "G"
            if ( Thumbs && Thumbs.isActive && keycode === 71 ) {
                keypress.preventDefault();

                Thumbs.toggle();
            }
        },

        'beforeClose.fb' : function( e, instance ) {
            var Thumbs = instance && instance.Thumbs;

            if ( Thumbs && Thumbs.isVisible && instance.opts.thumbs.hideOnClose !== false ) {
                Thumbs.close();
            }
        }

    });

}(document, window.jQuery));

// ==========================================================================
//
// Hash
// Enables linking to each modal
//
// ==========================================================================
;(function (document, window, $) {
    'use strict';

    // Simple $.escapeSelector polyfill (for jQuery prior v3)
    if ( !$.escapeSelector ) {
        $.escapeSelector = function( sel ) {
            var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
            var fcssescape = function( ch, asCodePoint ) {
                if ( asCodePoint ) {
                    // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
                    if ( ch === "\0" ) {
                        return "\uFFFD";
                    }

                    // Control characters and (dependent upon position) numbers get escaped as code points
                    return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
                }

                // Other potentially-special ASCII characters get backslash-escaped
                return "\\" + ch;
            };

            return ( sel + "" ).replace( rcssescape, fcssescape );
        };
    }

    // Create new history entry only once
    var shouldCreateHistory = true;

    // Variable containing last hash value set by fancyBox
    // It will be used to determine if fancyBox needs to close after hash change is detected
    var currentHash = null;

    // Throttling the history change
    var timerID = null;

    // Get info about gallery name and current index from url
    function parseUrl() {
        var hash    = window.location.hash.substr( 1 );
        var rez     = hash.split( '-' );
        var index   = rez.length > 1 && /^\+?\d+$/.test( rez[ rez.length - 1 ] ) ? parseInt( rez.pop( -1 ), 10 ) || 1 : 1;
        var gallery = rez.join( '-' );

        // Index is starting from 1
        if ( index < 1 ) {
            index = 1;
        }

        return {
            hash    : hash,
            index   : index,
            gallery : gallery
        };
    }

    // Trigger click evnt on links to open new fancyBox instance
    function triggerFromUrl( url ) {
        var $el;

        if ( url.gallery !== '' ) {

            // If we can find element matching 'data-fancybox' atribute, then trigger click event for that ..
            $el = $( "[data-fancybox='" + $.escapeSelector( url.gallery ) + "']" ).eq( url.index - 1 );

            if ( !$el.length ) {
                // .. if not, try finding element by ID
                $el = $( "#" + $.escapeSelector( url.gallery ) + "" );
            }

            if ( $el.length ) {
                shouldCreateHistory = false;

                $el.trigger( 'click' );
            }

        }
    }

    // Get gallery name from current instance
    function getGalleryID( instance ) {
        var opts;

        if ( !instance ) {
            return false;
        }

        opts = instance.current ? instance.current.opts : instance.opts;

        return opts.hash || ( opts.$orig ? opts.$orig.data( 'fancybox' ) : ''  );
    }

    // Star when DOM becomes ready
    $(function() {

        // Small delay is used to allow other scripts to process "dom ready" event
        setTimeout(function() {

            // Check if this module is not disabled
            if ( $.fancybox.defaults.hash === false ) {
                return;
            }

            // Update hash when opening/closing fancyBox
            $(document).on({
                'onInit.fb' : function( e, instance ) {
                    var url, gallery;

                    if ( instance.group[ instance.currIndex ].opts.hash === false ) {
                        return;
                    }

                    url     = parseUrl();
                    gallery = getGalleryID( instance );

                    // Make sure gallery start index matches index from hash
                    if ( gallery && url.gallery && gallery == url.gallery ) {
                        instance.currIndex = url.index - 1;
                    }

                },

                'beforeShow.fb' : function( e, instance, current ) {
                    var gallery;

                    if ( !current || current.opts.hash === false ) {
                        return;
                    }

                    gallery = getGalleryID( instance );

                    // Update window hash
                    if ( gallery && gallery !== '' ) {

                        if ( window.location.hash.indexOf( gallery ) < 0 ) {
                            instance.opts.origHash = window.location.hash;
                        }

                        currentHash = gallery + ( instance.group.length > 1 ? '-' + ( current.index + 1 ) : '' );

                        if ( 'replaceState' in window.history ) {
                            if ( timerID ) {
                                clearTimeout( timerID );
                            }

                            timerID = setTimeout(function() {
                                window.history[ shouldCreateHistory ? 'pushState' : 'replaceState' ]( {} , document.title, window.location.pathname + window.location.search + '#' +  currentHash );

                                timerID = null;

                                shouldCreateHistory = false;

                            }, 300);

                        } else {
                            window.location.hash = currentHash;
                        }

                    }

                },

                'beforeClose.fb' : function( e, instance, current ) {
                    var gallery, origHash;

                    if ( timerID ) {
                        clearTimeout( timerID );
                    }

                    if ( current.opts.hash === false ) {
                        return;
                    }

                    gallery  = getGalleryID( instance );
                    origHash = instance && instance.opts.origHash ? instance.opts.origHash : '';

                    // Remove hash from location bar
                    if ( gallery && gallery !== '' ) {

                        if ( 'replaceState' in history ) {
                            window.history.replaceState( {} , document.title, window.location.pathname + window.location.search + origHash );

                        } else {
                            window.location.hash = origHash;

                            // Keep original scroll position
                            $( window ).scrollTop( instance.scrollTop ).scrollLeft( instance.scrollLeft );
                        }
                    }

                    currentHash = null;
                }
            });

            // Check if need to close after url has changed
            $(window).on('hashchange.fb', function() {
                var url = parseUrl();

                if ( $.fancybox.getInstance() ) {
                    if ( currentHash && currentHash !== url.gallery + '-' + url.index && !( url.index === 1 && currentHash == url.gallery ) ) {
                        currentHash = null;

                        $.fancybox.close();
                    }

                } else if ( url.gallery !== '' ) {
                    triggerFromUrl( url );
                }
            });

            // Check current hash and trigger click event on matching element to start fancyBox, if needed
            triggerFromUrl( parseUrl() );

        }, 50);

    });

}(document, window, window.jQuery));
/**
 * Swiper 4.0.3
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2017 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 27, 2017
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.Swiper = factory());
}(this, (function () { 'use strict';

    var w;
    if (typeof window === 'undefined') {
        w = {
            navigator: {
                userAgent: '',
            },
            location: {},
            history: {},
            addEventListener: function addEventListener() {},
            removeEventListener: function removeEventListener() {},
            getComputedStyle: function getComputedStyle() {
                return {};
            },
            Image: function Image() {},
            Date: function Date() {},
        };
    } else {
        w = window;
    }

    var win = w;

    /**
     * Dom7 2.0.1
     * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
     * http://framework7.io/docs/dom.html
     *
     * Copyright 2017, Vladimir Kharlampidi
     * The iDangero.us
     * http://www.idangero.us/
     *
     * Licensed under MIT
     *
     * Released on: October 2, 2017
     */
    var Dom7 = function Dom7(arr) {
        var self = this;
        // Create array-like object
        for (var i = 0; i < arr.length; i += 1) {
            self[i] = arr[i];
        }
        self.length = arr.length;
        // Return collection with methods
        return this;
    };

    function $$1(selector, context) {
        var arr = [];
        var i = 0;
        if (selector && !context) {
            if (selector instanceof Dom7) {
                return selector;
            }
        }
        if (selector) {
            // String
            if (typeof selector === 'string') {
                var els;
                var tempParent;
                var html = selector.trim();
                if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
                    var toCreate = 'div';
                    if (html.indexOf('<li') === 0) { toCreate = 'ul'; }
                    if (html.indexOf('<tr') === 0) { toCreate = 'tbody'; }
                    if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) { toCreate = 'tr'; }
                    if (html.indexOf('<tbody') === 0) { toCreate = 'table'; }
                    if (html.indexOf('<option') === 0) { toCreate = 'select'; }
                    tempParent = document.createElement(toCreate);
                    tempParent.innerHTML = html;
                    for (i = 0; i < tempParent.childNodes.length; i += 1) {
                        arr.push(tempParent.childNodes[i]);
                    }
                } else {
                    if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
                        // Pure ID selector
                        els = [document.getElementById(selector.trim().split('#')[1])];
                    } else {
                        // Other selectors
                        els = (context || document).querySelectorAll(selector.trim());
                    }
                    for (i = 0; i < els.length; i += 1) {
                        if (els[i]) { arr.push(els[i]); }
                    }
                }
            } else if (selector.nodeType || selector === window || selector === document) {
                // Node/element
                arr.push(selector);
            } else if (selector.length > 0 && selector[0].nodeType) {
                // Array of elements or instance of Dom
                for (i = 0; i < selector.length; i += 1) {
                    arr.push(selector[i]);
                }
            }
        }
        return new Dom7(arr);
    }

    $$1.fn = Dom7.prototype;
    $$1.Class = Dom7;
    $$1.Dom7 = Dom7;

    function unique(arr) {
        var uniqueArray = [];
        for (var i = 0; i < arr.length; i += 1) {
            if (uniqueArray.indexOf(arr[i]) === -1) { uniqueArray.push(arr[i]); }
        }
        return uniqueArray;
    }
// Classes and attributes
    function addClass(className) {
        var this$1 = this;

        if (typeof className === 'undefined') {
            return this;
        }
        var classes = className.split(' ');
        for (var i = 0; i < classes.length; i += 1) {
            for (var j = 0; j < this.length; j += 1) {
                if (typeof this$1[j].classList !== 'undefined') { this$1[j].classList.add(classes[i]); }
            }
        }
        return this;
    }
    function removeClass(className) {
        var this$1 = this;

        var classes = className.split(' ');
        for (var i = 0; i < classes.length; i += 1) {
            for (var j = 0; j < this.length; j += 1) {
                if (typeof this$1[j].classList !== 'undefined') { this$1[j].classList.remove(classes[i]); }
            }
        }
        return this;
    }
    function hasClass(className) {
        if (!this[0]) { return false; }
        return this[0].classList.contains(className);
    }
    function toggleClass(className) {
        var this$1 = this;

        var classes = className.split(' ');
        for (var i = 0; i < classes.length; i += 1) {
            for (var j = 0; j < this.length; j += 1) {
                if (typeof this$1[j].classList !== 'undefined') { this$1[j].classList.toggle(classes[i]); }
            }
        }
        return this;
    }
    function attr(attrs, value) {
        var arguments$1 = arguments;
        var this$1 = this;

        if (arguments.length === 1 && typeof attrs === 'string') {
            // Get attr
            if (this[0]) { return this[0].getAttribute(attrs); }
            return undefined;
        }

        // Set attrs
        for (var i = 0; i < this.length; i += 1) {
            if (arguments$1.length === 2) {
                // String
                this$1[i].setAttribute(attrs, value);
            } else {
                // Object
                // eslint-disable-next-line
                for (var attrName in attrs) {
                    this$1[i][attrName] = attrs[attrName];
                    this$1[i].setAttribute(attrName, attrs[attrName]);
                }
            }
        }
        return this;
    }
// eslint-disable-next-line
    function removeAttr(attr) {
        var this$1 = this;

        for (var i = 0; i < this.length; i += 1) {
            this$1[i].removeAttribute(attr);
        }
        return this;
    }
    function data(key, value) {
        var this$1 = this;

        var el;
        if (typeof value === 'undefined') {
            el = this[0];
            // Get value
            if (el) {
                if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
                    return el.dom7ElementDataStorage[key];
                }

                var dataKey = el.getAttribute(("data-" + key));
                if (dataKey) {
                    return dataKey;
                }
                return undefined;
            }
            return undefined;
        }

        // Set value
        for (var i = 0; i < this.length; i += 1) {
            el = this$1[i];
            if (!el.dom7ElementDataStorage) { el.dom7ElementDataStorage = {}; }
            el.dom7ElementDataStorage[key] = value;
        }
        return this;
    }
// Transforms
// eslint-disable-next-line
    function transform(transform) {
        var this$1 = this;

        for (var i = 0; i < this.length; i += 1) {
            var elStyle = this$1[i].style;
            elStyle.webkitTransform = transform;
            elStyle.transform = transform;
        }
        return this;
    }
    function transition(duration) {
        var this$1 = this;

        if (typeof duration !== 'string') {
            duration = duration + "ms"; // eslint-disable-line
        }
        for (var i = 0; i < this.length; i += 1) {
            var elStyle = this$1[i].style;
            elStyle.webkitTransitionDuration = duration;
            elStyle.transitionDuration = duration;
        }
        return this;
    }
// Events
    function on() {
        var this$1 = this;
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var eventType = args[0];
        var targetSelector = args[1];
        var listener = args[2];
        var capture = args[3];
        if (typeof args[1] === 'function') {
            var assign;
            (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
            targetSelector = undefined;
        }
        if (!capture) { capture = false; }

        function handleLiveEvent(e) {
            var target = e.target;
            if (!target) { return; }
            var eventData = e.target.dom7EventData || [];
            eventData.unshift(e);
            if ($$1(target).is(targetSelector)) { listener.apply(target, eventData); }
            else {
                var parents = $$1(target).parents(); // eslint-disable-line
                for (var k = 0; k < parents.length; k += 1) {
                    if ($$1(parents[k]).is(targetSelector)) { listener.apply(parents[k], eventData); }
                }
            }
        }
        function handleEvent(e) {
            var eventData = e && e.target ? e.target.dom7EventData || [] : [];
            eventData.unshift(e);
            listener.apply(this, eventData);
        }
        var events = eventType.split(' ');
        var j;
        for (var i = 0; i < this.length; i += 1) {
            var el = this$1[i];
            if (!targetSelector) {
                for (j = 0; j < events.length; j += 1) {
                    if (!el.dom7Listeners) { el.dom7Listeners = []; }
                    el.dom7Listeners.push({
                        type: eventType,
                        listener: listener,
                        proxyListener: handleEvent,
                    });
                    el.addEventListener(events[j], handleEvent, capture);
                }
            } else {
                // Live events
                for (j = 0; j < events.length; j += 1) {
                    if (!el.dom7LiveListeners) { el.dom7LiveListeners = []; }
                    el.dom7LiveListeners.push({
                        type: eventType,
                        listener: listener,
                        proxyListener: handleLiveEvent,
                    });
                    el.addEventListener(events[j], handleLiveEvent, capture);
                }
            }
        }
        return this;
    }
    function off() {
        var this$1 = this;
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var eventType = args[0];
        var targetSelector = args[1];
        var listener = args[2];
        var capture = args[3];
        if (typeof args[1] === 'function') {
            var assign;
            (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
            targetSelector = undefined;
        }
        if (!capture) { capture = false; }

        var events = eventType.split(' ');
        for (var i = 0; i < events.length; i += 1) {
            for (var j = 0; j < this.length; j += 1) {
                var el = this$1[j];
                if (!targetSelector) {
                    if (el.dom7Listeners) {
                        for (var k = 0; k < el.dom7Listeners.length; k += 1) {
                            if (listener) {
                                if (el.dom7Listeners[k].listener === listener) {
                                    el.removeEventListener(events[i], el.dom7Listeners[k].proxyListener, capture);
                                }
                            } else if (el.dom7Listeners[k].type === events[i]) {
                                el.removeEventListener(events[i], el.dom7Listeners[k].proxyListener, capture);
                            }
                        }
                    }
                } else if (el.dom7LiveListeners) {
                    for (var k$1 = 0; k$1 < el.dom7LiveListeners.length; k$1 += 1) {
                        if (listener) {
                            if (el.dom7LiveListeners[k$1].listener === listener) {
                                el.removeEventListener(events[i], el.dom7LiveListeners[k$1].proxyListener, capture);
                            }
                        } else if (el.dom7LiveListeners[k$1].type === events[i]) {
                            el.removeEventListener(events[i], el.dom7LiveListeners[k$1].proxyListener, capture);
                        }
                    }
                }
            }
        }
        return this;
    }
    function trigger() {
        var this$1 = this;
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var events = args[0].split(' ');
        var eventData = args[1];
        for (var i = 0; i < events.length; i += 1) {
            for (var j = 0; j < this.length; j += 1) {
                var evt = (void 0);
                try {
                    evt = new window.CustomEvent(events[i], {
                        detail: eventData,
                        bubbles: true,
                        cancelable: true,
                    });
                } catch (e) {
                    evt = document.createEvent('Event');
                    evt.initEvent(events[i], true, true);
                    evt.detail = eventData;
                }
                // eslint-disable-next-line
                this$1[j].dom7EventData = args.filter(function (data, dataIndex) { return dataIndex > 0; });
                this$1[j].dispatchEvent(evt);
                this$1[j].dom7EventData = [];
                delete this$1[j].dom7EventData;
            }
        }
        return this;
    }
    function transitionEnd(callback) {
        var events = ['webkitTransitionEnd', 'transitionend'];
        var dom = this;
        var i;
        function fireCallBack(e) {
            /* jshint validthis:true */
            if (e.target !== this) { return; }
            callback.call(this, e);
            for (i = 0; i < events.length; i += 1) {
                dom.off(events[i], fireCallBack);
            }
        }
        if (callback) {
            for (i = 0; i < events.length; i += 1) {
                dom.on(events[i], fireCallBack);
            }
        }
        return this;
    }
    function outerWidth(includeMargins) {
        if (this.length > 0) {
            if (includeMargins) {
                // eslint-disable-next-line
                var styles = this.styles();
                return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
            }
            return this[0].offsetWidth;
        }
        return null;
    }
    function outerHeight(includeMargins) {
        if (this.length > 0) {
            if (includeMargins) {
                // eslint-disable-next-line
                var styles = this.styles();
                return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
            }
            return this[0].offsetHeight;
        }
        return null;
    }
    function offset() {
        if (this.length > 0) {
            var el = this[0];
            var box = el.getBoundingClientRect();
            var body = document.body;
            var clientTop = el.clientTop || body.clientTop || 0;
            var clientLeft = el.clientLeft || body.clientLeft || 0;
            var scrollTop = el === window ? window.scrollY : el.scrollTop;
            var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
            return {
                top: (box.top + scrollTop) - clientTop,
                left: (box.left + scrollLeft) - clientLeft,
            };
        }

        return null;
    }
    function styles() {
        if (this[0]) { return window.getComputedStyle(this[0], null); }
        return {};
    }
    function css(props, value) {
        var this$1 = this;

        var i;
        if (arguments.length === 1) {
            if (typeof props === 'string') {
                if (this[0]) { return window.getComputedStyle(this[0], null).getPropertyValue(props); }
            } else {
                for (i = 0; i < this.length; i += 1) {
                    // eslint-disable-next-line
                    for (var prop in props) {
                        this$1[i].style[prop] = props[prop];
                    }
                }
                return this;
            }
        }
        if (arguments.length === 2 && typeof props === 'string') {
            for (i = 0; i < this.length; i += 1) {
                this$1[i].style[props] = value;
            }
            return this;
        }
        return this;
    }

// Iterate over the collection passing elements to `callback`
    function each(callback) {
        var this$1 = this;

        // Don't bother continuing without a callback
        if (!callback) { return this; }
        // Iterate over the current collection
        for (var i = 0; i < this.length; i += 1) {
            // If the callback returns false
            if (callback.call(this$1[i], i, this$1[i]) === false) {
                // End the loop early
                return this$1;
            }
        }
        // Return `this` to allow chained DOM operations
        return this;
    }
// eslint-disable-next-line
    function html(html) {
        var this$1 = this;

        if (typeof html === 'undefined') {
            return this[0] ? this[0].innerHTML : undefined;
        }

        for (var i = 0; i < this.length; i += 1) {
            this$1[i].innerHTML = html;
        }
        return this;
    }
// eslint-disable-next-line
    function text(text) {
        var this$1 = this;

        if (typeof text === 'undefined') {
            if (this[0]) {
                return this[0].textContent.trim();
            }
            return null;
        }

        for (var i = 0; i < this.length; i += 1) {
            this$1[i].textContent = text;
        }
        return this;
    }
    function is(selector) {
        var el = this[0];
        var compareWith;
        var i;
        if (!el || typeof selector === 'undefined') { return false; }
        if (typeof selector === 'string') {
            if (el.matches) { return el.matches(selector); }
            else if (el.webkitMatchesSelector) { return el.webkitMatchesSelector(selector); }
            else if (el.msMatchesSelector) { return el.msMatchesSelector(selector); }

            compareWith = $$1(selector);
            for (i = 0; i < compareWith.length; i += 1) {
                if (compareWith[i] === el) { return true; }
            }
            return false;
        } else if (selector === document) { return el === document; }
        else if (selector === window) { return el === window; }

        if (selector.nodeType || selector instanceof Dom7) {
            compareWith = selector.nodeType ? [selector] : selector;
            for (i = 0; i < compareWith.length; i += 1) {
                if (compareWith[i] === el) { return true; }
            }
            return false;
        }
        return false;
    }
    function index() {
        var child = this[0];
        var i;
        if (child) {
            i = 0;
            // eslint-disable-next-line
            while ((child = child.previousSibling) !== null) {
                if (child.nodeType === 1) { i += 1; }
            }
            return i;
        }
        return undefined;
    }
// eslint-disable-next-line
    function eq(index) {
        if (typeof index === 'undefined') { return this; }
        var length = this.length;
        var returnIndex;
        if (index > length - 1) {
            return new Dom7([]);
        }
        if (index < 0) {
            returnIndex = length + index;
            if (returnIndex < 0) { return new Dom7([]); }
            return new Dom7([this[returnIndex]]);
        }
        return new Dom7([this[index]]);
    }
    function append() {
        var this$1 = this;
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var newChild;

        for (var k = 0; k < args.length; k += 1) {
            newChild = args[k];
            for (var i = 0; i < this.length; i += 1) {
                if (typeof newChild === 'string') {
                    var tempDiv = document.createElement('div');
                    tempDiv.innerHTML = newChild;
                    while (tempDiv.firstChild) {
                        this$1[i].appendChild(tempDiv.firstChild);
                    }
                } else if (newChild instanceof Dom7) {
                    for (var j = 0; j < newChild.length; j += 1) {
                        this$1[i].appendChild(newChild[j]);
                    }
                } else {
                    this$1[i].appendChild(newChild);
                }
            }
        }

        return this;
    }
    function prepend(newChild) {
        var this$1 = this;

        var i;
        var j;
        for (i = 0; i < this.length; i += 1) {
            if (typeof newChild === 'string') {
                var tempDiv = document.createElement('div');
                tempDiv.innerHTML = newChild;
                for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
                    this$1[i].insertBefore(tempDiv.childNodes[j], this$1[i].childNodes[0]);
                }
            } else if (newChild instanceof Dom7) {
                for (j = 0; j < newChild.length; j += 1) {
                    this$1[i].insertBefore(newChild[j], this$1[i].childNodes[0]);
                }
            } else {
                this$1[i].insertBefore(newChild, this$1[i].childNodes[0]);
            }
        }
        return this;
    }
    function next(selector) {
        if (this.length > 0) {
            if (selector) {
                if (this[0].nextElementSibling && $$1(this[0].nextElementSibling).is(selector)) {
                    return new Dom7([this[0].nextElementSibling]);
                }
                return new Dom7([]);
            }

            if (this[0].nextElementSibling) { return new Dom7([this[0].nextElementSibling]); }
            return new Dom7([]);
        }
        return new Dom7([]);
    }
    function nextAll(selector) {
        var nextEls = [];
        var el = this[0];
        if (!el) { return new Dom7([]); }
        while (el.nextElementSibling) {
            var next = el.nextElementSibling; // eslint-disable-line
            if (selector) {
                if ($$1(next).is(selector)) { nextEls.push(next); }
            } else { nextEls.push(next); }
            el = next;
        }
        return new Dom7(nextEls);
    }
    function prev(selector) {
        if (this.length > 0) {
            var el = this[0];
            if (selector) {
                if (el.previousElementSibling && $$1(el.previousElementSibling).is(selector)) {
                    return new Dom7([el.previousElementSibling]);
                }
                return new Dom7([]);
            }

            if (el.previousElementSibling) { return new Dom7([el.previousElementSibling]); }
            return new Dom7([]);
        }
        return new Dom7([]);
    }
    function prevAll(selector) {
        var prevEls = [];
        var el = this[0];
        if (!el) { return new Dom7([]); }
        while (el.previousElementSibling) {
            var prev = el.previousElementSibling; // eslint-disable-line
            if (selector) {
                if ($$1(prev).is(selector)) { prevEls.push(prev); }
            } else { prevEls.push(prev); }
            el = prev;
        }
        return new Dom7(prevEls);
    }
    function parent(selector) {
        var this$1 = this;

        var parents = []; // eslint-disable-line
        for (var i = 0; i < this.length; i += 1) {
            if (this$1[i].parentNode !== null) {
                if (selector) {
                    if ($$1(this$1[i].parentNode).is(selector)) { parents.push(this$1[i].parentNode); }
                } else {
                    parents.push(this$1[i].parentNode);
                }
            }
        }
        return $$1(unique(parents));
    }
    function parents(selector) {
        var this$1 = this;

        var parents = []; // eslint-disable-line
        for (var i = 0; i < this.length; i += 1) {
            var parent = this$1[i].parentNode; // eslint-disable-line
            while (parent) {
                if (selector) {
                    if ($$1(parent).is(selector)) { parents.push(parent); }
                } else {
                    parents.push(parent);
                }
                parent = parent.parentNode;
            }
        }
        return $$1(unique(parents));
    }
    function closest(selector) {
        var closest = this; // eslint-disable-line
        if (typeof selector === 'undefined') {
            return new Dom7([]);
        }
        if (!closest.is(selector)) {
            closest = closest.parents(selector).eq(0);
        }
        return closest;
    }
    function find(selector) {
        var this$1 = this;

        var foundElements = [];
        for (var i = 0; i < this.length; i += 1) {
            var found = this$1[i].querySelectorAll(selector);
            for (var j = 0; j < found.length; j += 1) {
                foundElements.push(found[j]);
            }
        }
        return new Dom7(foundElements);
    }
    function children(selector) {
        var this$1 = this;

        var children = []; // eslint-disable-line
        for (var i = 0; i < this.length; i += 1) {
            var childNodes = this$1[i].childNodes;

            for (var j = 0; j < childNodes.length; j += 1) {
                if (!selector) {
                    if (childNodes[j].nodeType === 1) { children.push(childNodes[j]); }
                } else if (childNodes[j].nodeType === 1 && $$1(childNodes[j]).is(selector)) {
                    children.push(childNodes[j]);
                }
            }
        }
        return new Dom7(unique(children));
    }
    function remove() {
        var this$1 = this;

        for (var i = 0; i < this.length; i += 1) {
            if (this$1[i].parentNode) { this$1[i].parentNode.removeChild(this$1[i]); }
        }
        return this;
    }
    function add() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var dom = this;
        var i;
        var j;
        for (i = 0; i < args.length; i += 1) {
            var toAdd = $$1(args[i]);
            for (j = 0; j < toAdd.length; j += 1) {
                dom[dom.length] = toAdd[j];
                dom.length += 1;
            }
        }
        return dom;
    }
    var noTrigger = ('resize scroll').split(' ');

    var Methods = {
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        toggleClass: toggleClass,
        attr: attr,
        removeAttr: removeAttr,
        data: data,
        transform: transform,
        transition: transition,
        on: on,
        off: off,
        trigger: trigger,
        transitionEnd: transitionEnd,
        outerWidth: outerWidth,
        outerHeight: outerHeight,
        offset: offset,
        css: css,
        each: each,
        html: html,
        text: text,
        is: is,
        index: index,
        eq: eq,
        append: append,
        prepend: prepend,
        next: next,
        nextAll: nextAll,
        prev: prev,
        prevAll: prevAll,
        parent: parent,
        parents: parents,
        closest: closest,
        find: find,
        children: children,
        remove: remove,
        add: add,
        styles: styles,
    };

    Object.keys(Methods).forEach(function (methodName) {
        $$1.fn[methodName] = Methods[methodName];
    });

    var Utils = {
        deleteProps: function deleteProps(obj) {
            var object = obj;
            Object.keys(object).forEach(function (key) {
                try {
                    object[key] = null;
                } catch (e) {
                    // no getter for object
                }
                try {
                    delete object[key];
                } catch (e) {
                    // something got wrong
                }
            });
        },
        nextTick: function nextTick(callback, delay) {
            if ( delay === void 0 ) delay = 0;

            return setTimeout(callback, delay);
        },
        now: function now() {
            return Date.now();
        },
        getTranslate: function getTranslate(el, axis) {
            if ( axis === void 0 ) axis = 'x';

            var matrix;
            var curTransform;
            var transformMatrix;

            var curStyle = win.getComputedStyle(el, null);

            if (win.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(',').length > 6) {
                    curTransform = curTransform.split(', ').map(function (a) { return a.replace(',', '.'); }).join(', ');
                }
                // Some old versions of Webkit choke when 'none' is passed; pass
                // empty string instead in this case
                transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                matrix = transformMatrix.toString().split(',');
            }

            if (axis === 'x') {
                // Latest Chrome and webkits Fix
                if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m41; }
                // Crazy IE10 Matrix
                else if (matrix.length === 16) { curTransform = parseFloat(matrix[12]); }
                // Normal Browsers
                else { curTransform = parseFloat(matrix[4]); }
            }
            if (axis === 'y') {
                // Latest Chrome and webkits Fix
                if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m42; }
                // Crazy IE10 Matrix
                else if (matrix.length === 16) { curTransform = parseFloat(matrix[13]); }
                // Normal Browsers
                else { curTransform = parseFloat(matrix[5]); }
            }
            return curTransform || 0;
        },
        parseUrlQuery: function parseUrlQuery(url) {
            var query = {};
            var urlToParse = url || win.location.href;
            var i;
            var params;
            var param;
            var length;
            if (typeof urlToParse === 'string' && urlToParse.length) {
                urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
                params = urlToParse.split('&').filter(function (paramsPart) { return paramsPart !== ''; });
                length = params.length;

                for (i = 0; i < length; i += 1) {
                    param = params[i].replace(/#\S+/g, '').split('=');
                    query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
                }
            }
            return query;
        },
        isObject: function isObject(o) {
            return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
        },
        extend: function extend() {
            var args = [], len$1 = arguments.length;
            while ( len$1-- ) args[ len$1 ] = arguments[ len$1 ];

            var to = Object(args[0]);
            for (var i = 1; i < args.length; i += 1) {
                var nextSource = args[i];
                if (nextSource !== undefined && nextSource !== null) {
                    var keysArray = Object.keys(Object(nextSource));
                    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        var nextKey = keysArray[nextIndex];
                        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== undefined && desc.enumerable) {
                            if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                                Utils.extend(to[nextKey], nextSource[nextKey]);
                            } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                                to[nextKey] = {};
                                Utils.extend(to[nextKey], nextSource[nextKey]);
                            } else {
                                to[nextKey] = nextSource[nextKey];
                            }
                        }
                    }
                }
            }
            return to;
        },
    };

    var d;
    if (typeof document === 'undefined') {
        d = {
            addEventListener: function addEventListener() {},
            removeEventListener: function removeEventListener() {},
            activeElement: {
                blur: function blur() {},
                nodeName: '',
            },
            querySelector: function querySelector() {
                return {};
            },
            querySelectorAll: function querySelectorAll() {
                return [];
            },
            createElement: function createElement() {
                return {
                    style: {},
                    setAttribute: function setAttribute() {},
                    getElementsByTagName: function getElementsByTagName() {
                        return [];
                    },
                };
            },
            location: { hash: '' },
        };
    } else {
        d = document;
    }

    var doc = d;

    var Support = (function Support() {
        return {
            touch: (win.Modernizr && win.Modernizr.touch === true) || (function checkTouch() {
                return !!(('ontouchstart' in win) || (win.DocumentTouch && doc instanceof win.DocumentTouch));
            }()),

            transforms3d: (win.Modernizr && win.Modernizr.csstransforms3d === true) || (function checkTransforms3d() {
                var div = doc.createElement('div').style;
                return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div);
            }()),

            flexbox: (function checkFlexbox() {
                var div = doc.createElement('div').style;
                var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
                for (var i = 0; i < styles.length; i += 1) {
                    if (styles[i] in div) { return true; }
                }
                return false;
            }()),

            observer: (function checkObserver() {
                return ('MutationObserver' in win || 'WebkitMutationObserver' in win);
            }()),

            passiveListener: (function checkPassiveListener() {
                var supportsPassive = false;
                try {
                    var opts = Object.defineProperty({}, 'passive', {
                        get: function get() {
                            supportsPassive = true;
                        },
                    });
                    win.addEventListener('testPassiveListener', null, opts);
                } catch (e) {
                    // No support
                }
                return supportsPassive;
            }()),

            gestures: (function checkGestures() {
                return 'ongesturestart' in win;
            }()),
        };
    }());

    var SwiperClass = function SwiperClass(params) {
        if ( params === void 0 ) params = {};

        var self = this;
        self.params = params;

        // Events
        self.eventsListeners = {};

        if (self.params && self.params.on) {
            Object.keys(self.params.on).forEach(function (eventName) {
                self.on(eventName, self.params.on[eventName]);
            });
        }
    };

    var staticAccessors = { components: {} };
    SwiperClass.prototype.on = function on (events, handler) {
        var self = this;
        if (typeof handler !== 'function') { return self; }
        events.split(' ').forEach(function (event) {
            if (!self.eventsListeners[event]) { self.eventsListeners[event] = []; }
            self.eventsListeners[event].push(handler);
        });
        return self;
    };
    SwiperClass.prototype.once = function once (events, handler) {
        var self = this;
        if (typeof handler !== 'function') { return self; }
        function onceHandler() {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            handler.apply(self, args);
            self.off(events, onceHandler);
        }
        return self.on(events, onceHandler);
    };
    SwiperClass.prototype.off = function off (events, handler) {
        var self = this;
        events.split(' ').forEach(function (event) {
            if (typeof handler === 'undefined') {
                self.eventsListeners[event] = [];
            } else {
                self.eventsListeners[event].forEach(function (eventHandler, index) {
                    if (eventHandler === handler) {
                        self.eventsListeners[event].splice(index, 1);
                    }
                });
            }
        });
        return self;
    };
    SwiperClass.prototype.emit = function emit () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var self = this;
        var events;
        var data;
        var context;
        if (typeof args[0] === 'string' || Array.isArray(args[0])) {
            events = args[0];
            data = args.slice(1, args.length);
            context = self;
        } else {
            events = args[0].events;
            data = args[0].data;
            context = args[0].context || self;
        }
        var eventsArray = Array.isArray(events) ? events : events.split(' ');
        eventsArray.forEach(function (event) {
            if (self.eventsListeners[event]) {
                var handlers = [];
                self.eventsListeners[event].forEach(function (eventHandler) {
                    handlers.push(eventHandler);
                });
                handlers.forEach(function (eventHandler) {
                    eventHandler.apply(context, data);
                });
            }
        });
        return self;
    };
    SwiperClass.prototype.useModulesParams = function useModulesParams (instanceParams) {
        var instance = this;
        if (!instance.modules) { return; }
        Object.keys(instance.modules).forEach(function (moduleName) {
            var module = instance.modules[moduleName];
            // Extend params
            if (module.params) {
                Utils.extend(instanceParams, module.params);
            }
        });
    };
    SwiperClass.prototype.useModules = function useModules (modulesParams) {
        if ( modulesParams === void 0 ) modulesParams = {};

        var instance = this;
        if (!instance.modules) { return; }
        Object.keys(instance.modules).forEach(function (moduleName) {
            var module = instance.modules[moduleName];
            var moduleParams = modulesParams[moduleName] || {};
            // Extend instance methods and props
            if (module.instance) {
                Object.keys(module.instance).forEach(function (modulePropName) {
                    var moduleProp = module.instance[modulePropName];
                    if (typeof moduleProp === 'function') {
                        instance[modulePropName] = moduleProp.bind(instance);
                    } else {
                        instance[modulePropName] = moduleProp;
                    }
                });
            }
            // Add event listeners
            if (module.on && instance.on) {
                Object.keys(module.on).forEach(function (moduleEventName) {
                    instance.on(moduleEventName, module.on[moduleEventName]);
                });
            }

            // Module create callback
            if (module.create) {
                module.create.bind(instance)(moduleParams);
            }
        });
    };
    staticAccessors.components.set = function (components) {
        var Class = this;
        if (!Class.use) { return; }
        Class.use(components);
    };
    SwiperClass.installModule = function installModule (module) {
        var params = [], len = arguments.length - 1;
        while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

        var Class = this;
        if (!Class.prototype.modules) { Class.prototype.modules = {}; }
        var name = module.name || (((Object.keys(Class.prototype.modules).length) + "_" + (Utils.now())));
        Class.prototype.modules[name] = module;
        // Prototype
        if (module.proto) {
            Object.keys(module.proto).forEach(function (key) {
                Class.prototype[key] = module.proto[key];
            });
        }
        // Class
        if (module.static) {
            Object.keys(module.static).forEach(function (key) {
                Class[key] = module.static[key];
            });
        }
        // Callback
        if (module.install) {
            module.install.apply(Class, params);
        }
        return Class;
    };
    SwiperClass.use = function use (module) {
        var params = [], len = arguments.length - 1;
        while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

        var Class = this;
        if (Array.isArray(module)) {
            module.forEach(function (m) { return Class.installModule(m); });
            return Class;
        }
        return Class.installModule.apply(Class, [ module ].concat( params ));
    };

    Object.defineProperties( SwiperClass, staticAccessors );

    var updateSize = function () {
        var swiper = this;
        var width;
        var height;
        var $el = swiper.$el;
        if (typeof swiper.params.width !== 'undefined') {
            width = swiper.params.width;
        } else {
            width = $el[0].clientWidth;
        }
        if (typeof swiper.params.height !== 'undefined') {
            height = swiper.params.height;
        } else {
            height = $el[0].clientHeight;
        }
        if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
            return;
        }

        // Subtract paddings
        width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
        height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);

        Utils.extend(swiper, {
            width: width,
            height: height,
            size: swiper.isHorizontal() ? width : height,
        });
    };

    var updateSlides = function () {
        var swiper = this;
        var params = swiper.params;

        var $wrapperEl = swiper.$wrapperEl;
        var swiperSize = swiper.size;
        var rtl = swiper.rtl;
        var wrongRTL = swiper.wrongRTL;
        var slides = $wrapperEl.children(("." + (swiper.params.slideClass)));
        var isVirtual = swiper.virtual && params.virtual.enabled;
        var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
        var snapGrid = [];
        var slidesGrid = [];
        var slidesSizesGrid = [];

        var offsetBefore = params.slidesOffsetBefore;
        if (typeof offsetBefore === 'function') {
            offsetBefore = params.slidesOffsetBefore.call(swiper);
        }

        var offsetAfter = params.slidesOffsetAfter;
        if (typeof offsetAfter === 'function') {
            offsetAfter = params.slidesOffsetAfter.call(swiper);
        }

        var previousSlidesLength = slidesLength;
        var previousSnapGridLength = swiper.snapGrid.length;
        var previousSlidesGridLength = swiper.snapGrid.length;

        var spaceBetween = params.spaceBetween;
        var slidePosition = -offsetBefore;
        var prevSlideSize = 0;
        var index = 0;
        if (typeof swiperSize === 'undefined') {
            return;
        }
        if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
            spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
        }

        swiper.virtualSize = -spaceBetween;

        // reset margins
        if (rtl) { slides.css({ marginLeft: '', marginTop: '' }); }
        else { slides.css({ marginRight: '', marginBottom: '' }); }

        var slidesNumberEvenToRows;
        if (params.slidesPerColumn > 1) {
            if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
                slidesNumberEvenToRows = slidesLength;
            } else {
                slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
            }
            if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
                slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
            }
        }

        // Calc slides
        var slideSize;
        var slidesPerColumn = params.slidesPerColumn;
        var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
        var numFullColumns = slidesPerRow - ((params.slidesPerColumn * slidesPerRow) - slidesLength);
        for (var i = 0; i < slidesLength; i += 1) {
            slideSize = 0;
            var slide = slides.eq(i);
            if (params.slidesPerColumn > 1) {
                // Set slides order
                var newSlideOrderIndex = (void 0);
                var column = (void 0);
                var row = (void 0);
                if (params.slidesPerColumnFill === 'column') {
                    column = Math.floor(i / slidesPerColumn);
                    row = i - (column * slidesPerColumn);
                    if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
                        row += 1;
                        if (row >= slidesPerColumn) {
                            row = 0;
                            column += 1;
                        }
                    }
                    newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn);
                    slide
                        .css({
                            '-webkit-box-ordinal-group': newSlideOrderIndex,
                            '-moz-box-ordinal-group': newSlideOrderIndex,
                            '-ms-flex-order': newSlideOrderIndex,
                            '-webkit-order': newSlideOrderIndex,
                            order: newSlideOrderIndex,
                        });
                } else {
                    row = Math.floor(i / slidesPerRow);
                    column = i - (row * slidesPerRow);
                }
                slide
                    .css(
                        ("margin-" + (swiper.isHorizontal() ? 'top' : 'left')),
                        (row !== 0 && params.spaceBetween) && (((params.spaceBetween) + "px"))
                    )
                    .attr('data-swiper-column', column)
                    .attr('data-swiper-row', row);
            }
            if (slide.css('display') === 'none') { continue; } // eslint-disable-line
            if (params.slidesPerView === 'auto') {
                slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
                if (params.roundLengths) { slideSize = Math.floor(slideSize); }
            } else {
                slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView;
                if (params.roundLengths) { slideSize = Math.floor(slideSize); }

                if (slides[i]) {
                    if (swiper.isHorizontal()) {
                        slides[i].style.width = slideSize + "px";
                    } else {
                        slides[i].style.height = slideSize + "px";
                    }
                }
            }
            if (slides[i]) {
                slides[i].swiperSlideSize = slideSize;
            }
            slidesSizesGrid.push(slideSize);


            if (params.centeredSlides) {
                slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween;
                if (prevSlideSize === 0 && i !== 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
                if (i === 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
                if (Math.abs(slidePosition) < 1 / 1000) { slidePosition = 0; }
                if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
                slidesGrid.push(slidePosition);
            } else {
                if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
                slidesGrid.push(slidePosition);
                slidePosition = slidePosition + slideSize + spaceBetween;
            }

            swiper.virtualSize += slideSize + spaceBetween;

            prevSlideSize = slideSize;

            index += 1;
        }
        swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
        var newSlidesGrid;

        if (
            rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
            $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") });
        }
        if (!Support.flexbox || params.setWrapperSize) {
            if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
            else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
        }

        if (params.slidesPerColumn > 1) {
            swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
            swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
            if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
            else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
            if (params.centeredSlides) {
                newSlidesGrid = [];
                for (var i$1 = 0; i$1 < snapGrid.length; i$1 += 1) {
                    if (snapGrid[i$1] < swiper.virtualSize + snapGrid[0]) { newSlidesGrid.push(snapGrid[i$1]); }
                }
                snapGrid = newSlidesGrid;
            }
        }

        // Remove last grid elements depending on width
        if (!params.centeredSlides) {
            newSlidesGrid = [];
            for (var i$2 = 0; i$2 < snapGrid.length; i$2 += 1) {
                if (snapGrid[i$2] <= swiper.virtualSize - swiperSize) {
                    newSlidesGrid.push(snapGrid[i$2]);
                }
            }
            snapGrid = newSlidesGrid;
            if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
                snapGrid.push(swiper.virtualSize - swiperSize);
            }
        }
        if (snapGrid.length === 0) { snapGrid = [0]; }

        if (params.spaceBetween !== 0) {
            if (swiper.isHorizontal()) {
                if (rtl) { slides.css({ marginLeft: (spaceBetween + "px") }); }
                else { slides.css({ marginRight: (spaceBetween + "px") }); }
            } else { slides.css({ marginBottom: (spaceBetween + "px") }); }
        }

        Utils.extend(swiper, {
            slides: slides,
            snapGrid: snapGrid,
            slidesGrid: slidesGrid,
            slidesSizesGrid: slidesSizesGrid,
        });

        if (slidesLength !== previousSlidesLength) {
            swiper.emit('slidesLengthChange');
        }
        if (snapGrid.length !== previousSnapGridLength) {
            swiper.emit('snapGridLengthChange');
        }
        if (slidesGrid.length !== previousSlidesGridLength) {
            swiper.emit('slidesGridLengthChange');
        }

        if (params.watchSlidesProgress || params.watchSlidesVisibility) {
            swiper.updateSlidesOffset();
        }
    };

    var updateAutoHeight = function () {
        var swiper = this;
        var activeSlides = [];
        var newHeight = 0;
        var i;

        // Find slides currently in view
        if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
            for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                var index = swiper.activeIndex + i;
                if (index > swiper.slides.length) { break; }
                activeSlides.push(swiper.slides.eq(index)[0]);
            }
        } else {
            activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
        }

        // Find new height from highest slide in view
        for (i = 0; i < activeSlides.length; i += 1) {
            if (typeof activeSlides[i] !== 'undefined') {
                var height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
        }

        // Update Height
        if (newHeight) { swiper.$wrapperEl.css('height', (newHeight + "px")); }
    };

    var updateSlidesOffset = function () {
        var swiper = this;
        var slides = swiper.slides;
        for (var i = 0; i < slides.length; i += 1) {
            slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
        }
    };

    var updateSlidesProgress = function (translate) {
        if ( translate === void 0 ) translate = this.translate || 0;

        var swiper = this;
        var params = swiper.params;

        var slides = swiper.slides;
        var rtl = swiper.rtl;

        if (slides.length === 0) { return; }
        if (typeof slides[0].swiperSlideOffset === 'undefined') { swiper.updateSlidesOffset(); }

        var offsetCenter = -translate;
        if (rtl) { offsetCenter = translate; }

        // Visible Slides
        slides.removeClass(params.slideVisibleClass);

        for (var i = 0; i < slides.length; i += 1) {
            var slide = slides[i];
            var slideProgress =
                (
                    (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide.swiperSlideOffset
                ) / (slide.swiperSlideSize + params.spaceBetween);
            if (params.watchSlidesVisibility) {
                var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
                var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                var isVisible =
                    (slideBefore >= 0 && slideBefore < swiper.size) ||
                    (slideAfter > 0 && slideAfter <= swiper.size) ||
                    (slideBefore <= 0 && slideAfter >= swiper.size);
                if (isVisible) {
                    slides.eq(i).addClass(params.slideVisibleClass);
                }
            }
            slide.progress = rtl ? -slideProgress : slideProgress;
        }
    };

    var updateProgress = function (translate) {
        if ( translate === void 0 ) translate = this.translate || 0;

        var swiper = this;
        var params = swiper.params;

        var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        var progress = swiper.progress;
        var isBeginning = swiper.isBeginning;
        var isEnd = swiper.isEnd;
        var wasBeginning = isBeginning;
        var wasEnd = isEnd;
        if (translatesDiff === 0) {
            progress = 0;
            isBeginning = true;
            isEnd = true;
        } else {
            progress = (translate - swiper.minTranslate()) / (translatesDiff);
            isBeginning = progress <= 0;
            isEnd = progress >= 1;
        }
        Utils.extend(swiper, {
            progress: progress,
            isBeginning: isBeginning,
            isEnd: isEnd,
        });

        if (params.watchSlidesProgress || params.watchSlidesVisibility) { swiper.updateSlidesProgress(translate); }

        if (isBeginning && !wasBeginning) {
            swiper.emit('reachBeginning toEdge');
        }
        if (isEnd && !wasEnd) {
            swiper.emit('reachEnd toEdge');
        }
        if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
            swiper.emit('fromEdge');
        }

        swiper.emit('progress', progress);
    };

    var updateSlidesClasses = function () {
        var swiper = this;

        var slides = swiper.slides;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var activeIndex = swiper.activeIndex;
        var realIndex = swiper.realIndex;
        var isVirtual = swiper.virtual && params.virtual.enabled;

        slides.removeClass(((params.slideActiveClass) + " " + (params.slideNextClass) + " " + (params.slidePrevClass) + " " + (params.slideDuplicateActiveClass) + " " + (params.slideDuplicateNextClass) + " " + (params.slideDuplicatePrevClass)));

        var activeSlide;
        if (isVirtual) {
            activeSlide = swiper.$wrapperEl.find(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + activeIndex + "\"]"));
        } else {
            activeSlide = slides.eq(activeIndex);
        }

        // Active classes
        activeSlide.addClass(params.slideActiveClass);

        if (params.loop) {
            // Duplicate to all looped slides
            if (activeSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl
                    .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + realIndex + "\"]"))
                    .addClass(params.slideDuplicateActiveClass);
            } else {
                $wrapperEl
                    .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]"))
                    .addClass(params.slideDuplicateActiveClass);
            }
        }
        // Next Slide
        var nextSlide = activeSlide.nextAll(("." + (params.slideClass))).eq(0).addClass(params.slideNextClass);
        if (params.loop && nextSlide.length === 0) {
            nextSlide = slides.eq(0);
            nextSlide.addClass(params.slideNextClass);
        }
        // Prev Slide
        var prevSlide = activeSlide.prevAll(("." + (params.slideClass))).eq(0).addClass(params.slidePrevClass);
        if (params.loop && prevSlide.length === 0) {
            prevSlide = slides.eq(-1);
            prevSlide.addClass(params.slidePrevClass);
        }
        if (params.loop) {
            // Duplicate to all looped slides
            if (nextSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl
                    .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
                    .addClass(params.slideDuplicateNextClass);
            } else {
                $wrapperEl
                    .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
                    .addClass(params.slideDuplicateNextClass);
            }
            if (prevSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl
                    .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
                    .addClass(params.slideDuplicatePrevClass);
            } else {
                $wrapperEl
                    .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
                    .addClass(params.slideDuplicatePrevClass);
            }
        }
    };

    var updateActiveIndex = function (newActiveIndex) {
        var swiper = this;
        var translate = swiper.rtl ? swiper.translate : -swiper.translate;
        var slidesGrid = swiper.slidesGrid;
        var snapGrid = swiper.snapGrid;
        var params = swiper.params;
        var previousIndex = swiper.activeIndex;
        var previousRealIndex = swiper.realIndex;
        var previousSnapIndex = swiper.snapIndex;
        var activeIndex = newActiveIndex;
        var snapIndex;
        if (typeof activeIndex === 'undefined') {
            for (var i = 0; i < slidesGrid.length; i += 1) {
                if (typeof slidesGrid[i + 1] !== 'undefined') {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) {
                        activeIndex = i;
                    } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
                        activeIndex = i + 1;
                    }
                } else if (translate >= slidesGrid[i]) {
                    activeIndex = i;
                }
            }
            // Normalize slideIndex
            if (params.normalizeSlideIndex) {
                if (activeIndex < 0 || typeof activeIndex === 'undefined') { activeIndex = 0; }
            }
        }
        if (snapGrid.indexOf(translate) >= 0) {
            snapIndex = snapGrid.indexOf(translate);
        } else {
            snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
        }
        if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }
        if (activeIndex === previousIndex) {
            if (snapIndex !== previousSnapIndex) {
                swiper.snapIndex = snapIndex;
                swiper.emit('snapIndexChange');
            }
            return;
        }

        // Get real index
        var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);

        Utils.extend(swiper, {
            snapIndex: snapIndex,
            realIndex: realIndex,
            previousIndex: previousIndex,
            activeIndex: activeIndex,
        });
        swiper.emit('activeIndexChange');
        swiper.emit('snapIndexChange');
        if (previousRealIndex !== realIndex) {
            swiper.emit('realIndexChange');
        }
        swiper.emit('slideChange');
    };

    var updateClickedSlide = function (e) {
        var swiper = this;
        var params = swiper.params;
        var slide = $$1(e.target).closest(("." + (params.slideClass)))[0];
        var slideFound = false;
        if (slide) {
            for (var i = 0; i < swiper.slides.length; i += 1) {
                if (swiper.slides[i] === slide) { slideFound = true; }
            }
        }

        if (slide && slideFound) {
            swiper.clickedSlide = slide;
            if (swiper.virtual && swiper.params.virtual.enabled) {
                swiper.clickedIndex = parseInt($$1(slide).attr('data-swiper-slide-index'), 10);
            } else {
                swiper.clickedIndex = $$1(slide).index();
            }
        } else {
            swiper.clickedSlide = undefined;
            swiper.clickedIndex = undefined;
            return;
        }
        if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
            swiper.slideToClickedSlide();
        }
    };

    var update = {
        updateSize: updateSize,
        updateSlides: updateSlides,
        updateAutoHeight: updateAutoHeight,
        updateSlidesOffset: updateSlidesOffset,
        updateSlidesProgress: updateSlidesProgress,
        updateProgress: updateProgress,
        updateSlidesClasses: updateSlidesClasses,
        updateActiveIndex: updateActiveIndex,
        updateClickedSlide: updateClickedSlide,
    };

    var getTranslate = function (axis) {
        if ( axis === void 0 ) axis = this.isHorizontal() ? 'x' : 'y';

        var swiper = this;

        var params = swiper.params;
        var rtl = swiper.rtl;
        var translate = swiper.translate;
        var $wrapperEl = swiper.$wrapperEl;

        if (params.virtualTranslate) {
            return rtl ? -translate : translate;
        }

        var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
        if (rtl) { currentTranslate = -currentTranslate; }

        return currentTranslate || 0;
    };

    var setTranslate = function (translate, byController) {
        var swiper = this;
        var rtl = swiper.rtl;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var progress = swiper.progress;
        var x = 0;
        var y = 0;
        var z = 0;

        if (swiper.isHorizontal()) {
            x = rtl ? -translate : translate;
        } else {
            y = translate;
        }

        if (params.roundLengths) {
            x = Math.floor(x);
            y = Math.floor(y);
        }

        if (!params.virtualTranslate) {
            if (Support.transforms3d) { $wrapperEl.transform(("translate3d(" + x + "px, " + y + "px, " + z + "px)")); }
            else { $wrapperEl.transform(("translate(" + x + "px, " + y + "px)")); }
        }

        swiper.translate = swiper.isHorizontal() ? x : y;

        // Check if we need to update progress
        var newProgress;
        var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        if (translatesDiff === 0) {
            newProgress = 0;
        } else {
            newProgress = (translate - swiper.minTranslate()) / (translatesDiff);
        }
        if (newProgress !== progress) {
            swiper.updateProgress(translate);
        }

        swiper.emit('setTranslate', swiper.translate, byController);
    };

    var minTranslate = function () {
        return (-this.snapGrid[0]);
    };

    var maxTranslate = function () {
        return (-this.snapGrid[this.snapGrid.length - 1]);
    };

    var translate = {
        getTranslate: getTranslate,
        setTranslate: setTranslate,
        minTranslate: minTranslate,
        maxTranslate: maxTranslate,
    };

    var setTransition = function (duration, byController) {
        var swiper = this;

        swiper.$wrapperEl.transition(duration);

        swiper.emit('setTransition', duration, byController);
    };

    var transitionStart = function (runCallbacks) {
        if ( runCallbacks === void 0 ) runCallbacks = true;

        var swiper = this;
        var activeIndex = swiper.activeIndex;
        var params = swiper.params;
        var previousIndex = swiper.previousIndex;
        if (params.autoHeight) {
            swiper.updateAutoHeight();
        }
        swiper.emit('transitionStart');

        if (!runCallbacks) { return; }
        if (activeIndex !== previousIndex) {
            swiper.emit('slideChangeTransitionStart');
            if (activeIndex > previousIndex) {
                swiper.emit('slideNextTransitionStart');
            } else {
                swiper.emit('slidePrevTransitionStart');
            }
        }
    };

    var transitionEnd$1 = function (runCallbacks) {
        if ( runCallbacks === void 0 ) runCallbacks = true;

        var swiper = this;
        var activeIndex = swiper.activeIndex;
        var previousIndex = swiper.previousIndex;
        swiper.animating = false;
        swiper.setTransition(0);

        swiper.emit('transitionEnd');
        if (runCallbacks) {
            if (activeIndex !== previousIndex) {
                swiper.emit('slideChangeTransitionEnd');
                if (activeIndex > previousIndex) {
                    swiper.emit('slideNextTransitionEnd');
                } else {
                    swiper.emit('slidePrevTransitionEnd');
                }
            }
        }
    };

    var transition$1 = {
        setTransition: setTransition,
        transitionStart: transitionStart,
        transitionEnd: transitionEnd$1,
    };

    var Browser = (function Browser() {
        function isIE9() {
            // create temporary DIV
            var div = doc.createElement('div');
            // add content to tmp DIV which is wrapped into the IE HTML conditional statement
            div.innerHTML = '<!--[if lte IE 9]><i></i><![endif]-->';
            // return true / false value based on what will browser render
            return div.getElementsByTagName('i').length === 1;
        }
        function isSafari() {
            var ua = win.navigator.userAgent.toLowerCase();
            return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
        }
        return {
            isSafari: isSafari(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent),
            ie: win.navigator.pointerEnabled || win.navigator.msPointerEnabled,
            ieTouch: (win.navigator.msPointerEnabled && win.navigator.msMaxTouchPoints > 1) ||
            (win.navigator.pointerEnabled && win.navigator.maxTouchPoints > 1),
            lteIE9: isIE9(),
        };
    }());

    var slideTo = function (index, speed, runCallbacks, internal) {
        if ( index === void 0 ) index = 0;
        if ( speed === void 0 ) speed = this.params.speed;
        if ( runCallbacks === void 0 ) runCallbacks = true;

        var swiper = this;
        var slideIndex = index;
        if (slideIndex < 0) { slideIndex = 0; }

        var params = swiper.params;
        var snapGrid = swiper.snapGrid;
        var slidesGrid = swiper.slidesGrid;
        var previousIndex = swiper.previousIndex;
        var activeIndex = swiper.activeIndex;
        var rtl = swiper.rtl;
        var $wrapperEl = swiper.$wrapperEl;

        var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
        if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }

        if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
            swiper.emit('beforeSlideChangeStart');
        }

        var translate = -snapGrid[snapIndex];

        // Update progress
        swiper.updateProgress(translate);

        // Normalize slideIndex
        if (params.normalizeSlideIndex) {
            for (var i = 0; i < slidesGrid.length; i += 1) {
                if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
                    slideIndex = i;
                }
            }
        }

        // Directions locks
        if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
            return false;
        }
        if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
            if ((activeIndex || 0) !== slideIndex) { return false; }
        }

        // Update Index
        if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
            swiper.updateActiveIndex(slideIndex);
            // Update Height
            if (params.autoHeight) {
                swiper.updateAutoHeight();
            }
            swiper.updateSlidesClasses();
            if (params.effect !== 'slide') {
                swiper.setTranslate(translate);
            }
            return false;
        }

        if (speed === 0 || Browser.lteIE9) {
            swiper.setTransition(0);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.transitionStart(runCallbacks);
            swiper.transitionEnd(runCallbacks);
        } else {
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.transitionStart(runCallbacks);
            if (!swiper.animating) {
                swiper.animating = true;
                $wrapperEl.transitionEnd(function () {
                    if (!swiper) { return; }
                    swiper.transitionEnd(runCallbacks);
                });
            }
        }

        return true;
    };

    /* eslint no-unused-vars: "off" */
    var slideNext = function (speed, runCallbacks, internal) {
        if ( speed === void 0 ) speed = this.params.speed;
        if ( runCallbacks === void 0 ) runCallbacks = true;

        var swiper = this;
        var params = swiper.params;
        var animating = swiper.animating;
        if (params.loop) {
            if (animating) { return false; }
            swiper.loopFix();
            // eslint-disable-next-line
            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
        }
        return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
    };

    /* eslint no-unused-vars: "off" */
    var slidePrev = function (speed, runCallbacks, internal) {
        if ( speed === void 0 ) speed = this.params.speed;
        if ( runCallbacks === void 0 ) runCallbacks = true;

        var swiper = this;
        var params = swiper.params;
        var animating = swiper.animating;

        if (params.loop) {
            if (animating) { return false; }
            swiper.loopFix();
            // eslint-disable-next-line
            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            return swiper.slideTo(swiper.activeIndex - 1, speed, runCallbacks, internal);
        }
        return swiper.slideTo(swiper.activeIndex - 1, speed, runCallbacks, internal);
    };

    /* eslint no-unused-vars: "off" */
    var slideReset = function (speed, runCallbacks, internal) {
        if ( speed === void 0 ) speed = this.params.speed;
        if ( runCallbacks === void 0 ) runCallbacks = true;

        var swiper = this;
        return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
    };

    var slideToClickedSlide = function () {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;

        var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
        var slideToIndex = swiper.clickedIndex;
        var realIndex;
        if (params.loop) {
            if (swiper.animating) { return; }
            realIndex = parseInt($$1(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
            if (params.centeredSlides) {
                if (
                    (slideToIndex < swiper.loopedSlides - (slidesPerView / 2)) ||
                    (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))
                ) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl
                        .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
                        .eq(0)
                        .index();

                    Utils.nextTick(function () {
                        swiper.slideTo(slideToIndex);
                    });
                } else {
                    swiper.slideTo(slideToIndex);
                }
            } else if (slideToIndex > swiper.slides.length - slidesPerView) {
                swiper.loopFix();
                slideToIndex = $wrapperEl
                    .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
                    .eq(0)
                    .index();

                Utils.nextTick(function () {
                    swiper.slideTo(slideToIndex);
                });
            } else {
                swiper.slideTo(slideToIndex);
            }
        } else {
            swiper.slideTo(slideToIndex);
        }
    };

    var slide = {
        slideTo: slideTo,
        slideNext: slideNext,
        slidePrev: slidePrev,
        slideReset: slideReset,
        slideToClickedSlide: slideToClickedSlide,
    };

    var loopCreate = function () {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        // Remove duplicated slides
        $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass))).remove();

        var slides = $wrapperEl.children(("." + (params.slideClass)));

        if (params.loopFillGroupWithBlank) {
            var blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
            if (blankSlidesNum !== params.slidesPerGroup) {
                for (var i = 0; i < blankSlidesNum; i += 1) {
                    var blankNode = $$1(doc.createElement('div')).addClass(((params.slideClass) + " " + (params.slideBlankClass)));
                    $wrapperEl.append(blankNode);
                }
                slides = $wrapperEl.children(("." + (params.slideClass)));
            }
        }

        if (params.slidesPerView === 'auto' && !params.loopedSlides) { params.loopedSlides = slides.length; }

        swiper.loopedSlides = parseInt(params.loopedSlides || params.slidesPerView, 10);
        swiper.loopedSlides += params.loopAdditionalSlides;
        if (swiper.loopedSlides > slides.length) {
            swiper.loopedSlides = slides.length;
        }

        var prependSlides = [];
        var appendSlides = [];
        slides.each(function (index, el) {
            var slide = $$1(el);
            if (index < swiper.loopedSlides) { appendSlides.push(el); }
            if (index < slides.length && index >= slides.length - swiper.loopedSlides) { prependSlides.push(el); }
            slide.attr('data-swiper-slide-index', index);
        });
        for (var i$1 = 0; i$1 < appendSlides.length; i$1 += 1) {
            $wrapperEl.append($$1(appendSlides[i$1].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
        for (var i$2 = prependSlides.length - 1; i$2 >= 0; i$2 -= 1) {
            $wrapperEl.prepend($$1(prependSlides[i$2].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
    };

    var loopFix = function () {
        var swiper = this;
        var params = swiper.params;
        var activeIndex = swiper.activeIndex;
        var slides = swiper.slides;
        var loopedSlides = swiper.loopedSlides;
        var allowSlidePrev = swiper.allowSlidePrev;
        var allowSlideNext = swiper.allowSlideNext;
        var newIndex;
        swiper.allowSlidePrev = true;
        swiper.allowSlideNext = true;
        // Fix For Negative Oversliding
        if (activeIndex < loopedSlides) {
            newIndex = (slides.length - (loopedSlides * 3)) + activeIndex;
            newIndex += loopedSlides;
            swiper.slideTo(newIndex, 0, false, true);
        } else if ((params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2) || (activeIndex > slides.length - (params.slidesPerView * 2))) {
            // Fix For Positive Oversliding
            newIndex = -slides.length + activeIndex + loopedSlides;
            newIndex += loopedSlides;
            swiper.slideTo(newIndex, 0, false, true);
        }
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
    };

    var loopDestroy = function () {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl;
        var params = swiper.params;
        var slides = swiper.slides;
        $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass))).remove();
        slides.removeAttr('data-swiper-slide-index');
    };

    var loop = {
        loopCreate: loopCreate,
        loopFix: loopFix,
        loopDestroy: loopDestroy,
    };

    var setGrabCursor = function (moving) {
        var swiper = this;
        if (Support.touch || !swiper.params.simulateTouch) { return; }
        var el = swiper.el;
        el.style.cursor = 'move';
        el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
        el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
        el.style.cursor = moving ? 'grabbing' : 'grab';
    };

    var unsetGrabCursor = function () {
        var swiper = this;
        if (Support.touch) { return; }
        swiper.el.style.cursor = '';
    };

    var grabCursor = {
        setGrabCursor: setGrabCursor,
        unsetGrabCursor: unsetGrabCursor,
    };

    var appendSlide = function (slides) {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl;
        var params = swiper.params;
        if (params.loop) {
            swiper.loopDestroy();
        }
        if (typeof slides === 'object' && 'length' in slides) {
            for (var i = 0; i < slides.length; i += 1) {
                if (slides[i]) { $wrapperEl.append(slides[i]); }
            }
        } else {
            $wrapperEl.append(slides);
        }
        if (params.loop) {
            swiper.loopCreate();
        }
        if (!(params.observer && Support.observer)) {
            swiper.update();
        }
    };

    var prependSlide = function (slides) {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var activeIndex = swiper.activeIndex;

        if (params.loop) {
            swiper.loopDestroy();
        }
        var newActiveIndex = activeIndex + 1;
        if (typeof slides === 'object' && 'length' in slides) {
            for (var i = 0; i < slides.length; i += 1) {
                if (slides[i]) { $wrapperEl.prepend(slides[i]); }
            }
            newActiveIndex = activeIndex + slides.length;
        } else {
            $wrapperEl.prepend(slides);
        }
        if (params.loop) {
            swiper.loopCreate();
        }
        if (!(params.observer && Support.observer)) {
            swiper.update();
        }
        swiper.slideTo(newActiveIndex, 0, false);
    };

    var removeSlide = function (slidesIndexes) {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var activeIndex = swiper.activeIndex;

        if (params.loop) {
            swiper.loopDestroy();
            swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
        }
        var newActiveIndex = activeIndex;
        var indexToRemove;

        if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
            for (var i = 0; i < slidesIndexes.length; i += 1) {
                indexToRemove = slidesIndexes[i];
                if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
                if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
            }
            newActiveIndex = Math.max(newActiveIndex, 0);
        } else {
            indexToRemove = slidesIndexes;
            if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
            if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
            newActiveIndex = Math.max(newActiveIndex, 0);
        }

        if (params.loop) {
            swiper.loopCreate();
        }

        if (!(params.observer && Support.observer)) {
            swiper.update();
        }
        if (params.loop) {
            swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
        } else {
            swiper.slideTo(newActiveIndex, 0, false);
        }
    };

    var removeAllSlides = function () {
        var swiper = this;

        var slidesIndexes = [];
        for (var i = 0; i < swiper.slides.length; i += 1) {
            slidesIndexes.push(i);
        }
        swiper.removeSlide(slidesIndexes);
    };

    var manipulation = {
        appendSlide: appendSlide,
        prependSlide: prependSlide,
        removeSlide: removeSlide,
        removeAllSlides: removeAllSlides,
    };

    var Device = (function Device() {
        var ua = win.navigator.userAgent;

        var device = {
            ios: false,
            android: false,
            androidChrome: false,
            desktop: false,
            windows: false,
            iphone: false,
            ipod: false,
            ipad: false,
            cordova: win.cordova || win.phonegap,
            phonegap: win.cordova || win.phonegap,
        };

        var windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/); // eslint-disable-line
        var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
        var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
        var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
        var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);


        // Windows
        if (windows) {
            device.os = 'windows';
            device.osVersion = windows[2];
            device.windows = true;
        }
        // Android
        if (android && !windows) {
            device.os = 'android';
            device.osVersion = android[2];
            device.android = true;
            device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
        }
        if (ipad || iphone || ipod) {
            device.os = 'ios';
            device.ios = true;
        }
        // iOS
        if (iphone && !ipod) {
            device.osVersion = iphone[2].replace(/_/g, '.');
            device.iphone = true;
        }
        if (ipad) {
            device.osVersion = ipad[2].replace(/_/g, '.');
            device.ipad = true;
        }
        if (ipod) {
            device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
            device.iphone = true;
        }
        // iOS 8+ changed UA
        if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
            if (device.osVersion.split('.')[0] === '10') {
                device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
            }
        }

        // Desktop
        device.desktop = !(device.os || device.android || device.webView);

        // Webview
        device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);

        // Minimal UI
        if (device.os && device.os === 'ios') {
            var osVersionArr = device.osVersion.split('.');
            var metaViewport = doc.querySelector('meta[name="viewport"]');
            device.minimalUi =
                !device.webView &&
                (ipod || iphone) &&
                (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7) &&
                metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
        }

        // Pixel Ratio
        device.pixelRatio = win.devicePixelRatio || 1;

        // Export object
        return device;
    }());

    var onTouchStart = function (event) {
        var swiper = this;
        var data = swiper.touchEventsData;
        var params = swiper.params;
        var touches = swiper.touches;
        var e = event;
        if (e.originalEvent) { e = e.originalEvent; }
        data.isTouchEvent = e.type === 'touchstart';
        if (!data.isTouchEvent && 'which' in e && e.which === 3) { return; }
        if (params.noSwiping && $$1(e).closest(("." + (params.noSwipingClass)))[0]) {
            swiper.allowClick = true;
            return;
        }
        if (params.swipeHandler) {
            if (!$$1(e).closest(params.swipeHandler)[0]) { return; }
        }

        touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
        var startX = touches.currentX;
        var startY = touches.currentY;

        // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
        if (Device.ios && params.iOSEdgeSwipeDetection && startX <= params.iOSEdgeSwipeThreshold) {
            return;
        }
        Utils.extend(data, {
            isTouched: true,
            isMoved: false,
            allowTouchCallbacks: true,
            isScrolling: undefined,
            startMoving: undefined,
        });

        touches.startX = startX;
        touches.startY = startY;
        data.touchStartTime = Utils.now();
        swiper.allowClick = true;
        swiper.updateSize();
        swiper.swipeDirection = undefined;
        if (params.threshold > 0) { data.allowThresholdMove = false; }
        if (e.type !== 'touchstart') {
            var preventDefault = true;
            if ($$1(e.target).is(data.formElements)) { preventDefault = false; }
            if (doc.activeElement && $$1(doc.activeElement).is(data.formElements)) {
                doc.activeElement.blur();
            }
            if (preventDefault) {
                e.preventDefault();
            }
        }
        swiper.emit('touchStart', e);
    };

    var onTouchMove = function (event) {
        var swiper = this;
        var data = swiper.touchEventsData;
        var params = swiper.params;
        var touches = swiper.touches;
        var rtl = swiper.rtl;
        var e = event;
        if (e.originalEvent) { e = e.originalEvent; }
        if (data.isTouchEvent && e.type === 'mousemove') { return; }
        var pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        var pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        if (e.preventedByNestedSwiper) {
            touches.startX = pageX;
            touches.startY = pageY;
            return;
        }
        if (!swiper.allowTouchMove) {
            // isMoved = true;
            swiper.allowClick = false;
            if (data.isTouched) {
                Utils.extend(touches, {
                    startX: pageX,
                    startY: pageY,
                    currentX: pageX,
                    currentY: pageY,
                });
                data.touchStartTime = Utils.now();
            }
            return;
        }
        if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
            if (swiper.isVertical()) {
                // Vertical
                if (
                    (touches.currentY < touches.startY && swiper.translate <= swiper.maxTranslate()) ||
                    (touches.currentY > touches.startY && swiper.translate >= swiper.minTranslate())
                ) {
                    return;
                }
            } else if (
                (touches.currentX < touches.startX && swiper.translate <= swiper.maxTranslate()) ||
                (touches.currentX > touches.startX && swiper.translate >= swiper.minTranslate())
            ) {
                return;
            }
        }
        if (data.isTouchEvent && doc.activeElement) {
            if (e.target === doc.activeElement && $$1(e.target).is(data.formElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
        }
        if (data.allowTouchCallbacks) {
            swiper.emit('touchMove', e);
        }
        if (e.targetTouches && e.targetTouches.length > 1) { return; }

        touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

        if (typeof data.isScrolling === 'undefined') {
            var touchAngle;
            if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
                data.isScrolling = false;
            } else {
                touchAngle = (Math.atan2(Math.abs(touches.currentY - touches.startY), Math.abs(touches.currentX - touches.startX)) * 180) / Math.PI;
                data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle);
            }
        }
        if (data.isScrolling) {
            swiper.emit('touchMoveOpposite', e);
        }
        if (typeof startMoving === 'undefined') {
            if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
                data.startMoving = true;
            }
        }
        if (!data.isTouched) { return; }
        if (data.isScrolling) {
            data.isTouched = false;
            return;
        }
        if (!data.startMoving) {
            return;
        }
        swiper.allowClick = false;
        e.preventDefault();
        if (params.touchMoveStopPropagation && !params.nested) {
            e.stopPropagation();
        }

        if (!data.isMoved) {
            if (params.loop) {
                swiper.loopFix();
            }
            data.startTranslate = swiper.getTranslate();
            swiper.setTransition(0);
            if (swiper.animating) {
                swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
            }
            data.allowMomentumBounce = false;
            // Grab Cursor
            if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
                swiper.setGrabCursor(true);
            }
            swiper.emit('sliderFirstMove', e);
        }
        swiper.emit('sliderMove', e);
        data.isMoved = true;

        var diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        touches.diff = diff;

        diff *= params.touchRatio;
        if (rtl) { diff = -diff; }

        swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
        data.currentTranslate = diff + data.startTranslate;

        var disableParentSwiper = true;
        var resistanceRatio = params.resistanceRatio;
        if (params.touchReleaseOnEdges) {
            resistanceRatio = 0;
        }
        if ((diff > 0 && data.currentTranslate > swiper.minTranslate())) {
            disableParentSwiper = false;
            if (params.resistance) { data.currentTranslate = (swiper.minTranslate() - 1) + (Math.pow( (-swiper.minTranslate() + data.startTranslate + diff), resistanceRatio )); }
        } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) { data.currentTranslate = (swiper.maxTranslate() + 1) - (Math.pow( (swiper.maxTranslate() - data.startTranslate - diff), resistanceRatio )); }
        }

        if (disableParentSwiper) {
            e.preventedByNestedSwiper = true;
        }

        // Directions locks
        if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
            data.currentTranslate = data.startTranslate;
        }
        if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
            data.currentTranslate = data.startTranslate;
        }


        // Threshold
        if (params.threshold > 0) {
            if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
        }

        if (!params.followFinger) { return; }

        // Update active index in free mode
        if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        if (params.freeMode) {
            // Velocity
            if (data.velocities.length === 0) {
                data.velocities.push({
                    position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
                    time: data.touchStartTime,
                });
            }
            data.velocities.push({
                position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
                time: Utils.now(),
            });
        }
        // Update progress
        swiper.updateProgress(data.currentTranslate);
        // Update translate
        swiper.setTranslate(data.currentTranslate);
    };

    var onTouchEnd = function (event) {
        var swiper = this;
        var data = swiper.touchEventsData;

        var params = swiper.params;
        var touches = swiper.touches;
        var rtl = swiper.rtl;
        var $wrapperEl = swiper.$wrapperEl;
        var slidesGrid = swiper.slidesGrid;
        var snapGrid = swiper.snapGrid;
        var e = event;
        if (e.originalEvent) { e = e.originalEvent; }
        if (data.allowTouchCallbacks) {
            swiper.emit('touchEnd', e);
        }
        data.allowTouchCallbacks = false;
        if (!data.isTouched) { return; }
        // Return Grab Cursor
        if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
            swiper.setGrabCursor(false);
        }

        // Time diff
        var touchEndTime = Utils.now();
        var timeDiff = touchEndTime - data.touchStartTime;

        // Tap, doubleTap, Click
        if (swiper.allowClick) {
            swiper.updateClickedSlide(e);
            swiper.emit('tap', e);
            if (timeDiff < 300 && (touchEndTime - data.lastClickTime) > 300) {
                if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
                data.clickTimeout = Utils.nextTick(function () {
                    if (!swiper) { return; }
                    swiper.emit('click', e);
                }, 300);
            }
            if (timeDiff < 300 && (touchEndTime - data.lastClickTime) < 300) {
                if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
                swiper.emit('doubleTap', e);
            }
        }

        data.lastClickTime = Utils.now();
        Utils.nextTick(function () {
            if (swiper) { swiper.allowClick = true; }
        });

        if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
            data.isTouched = false;
            data.isMoved = false;
            return;
        }
        data.isTouched = false;
        data.isMoved = false;

        var currentPos;
        if (params.followFinger) {
            currentPos = rtl ? swiper.translate : -swiper.translate;
        } else {
            currentPos = -data.currentTranslate;
        }
        if (params.freeMode) {
            if (currentPos < -swiper.minTranslate()) {
                swiper.slideTo(swiper.activeIndex);
                return;
            } else if (currentPos > -swiper.maxTranslate()) {
                if (swiper.slides.length < snapGrid.length) {
                    swiper.slideTo(snapGrid.length - 1);
                } else {
                    swiper.slideTo(swiper.slides.length - 1);
                }
                return;
            }

            if (params.freeModeMomentum) {
                if (data.velocities.length > 1) {
                    var lastMoveEvent = data.velocities.pop();
                    var velocityEvent = data.velocities.pop();

                    var distance = lastMoveEvent.position - velocityEvent.position;
                    var time = lastMoveEvent.time - velocityEvent.time;
                    swiper.velocity = distance / time;
                    swiper.velocity /= 2;
                    if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
                        swiper.velocity = 0;
                    }
                    // this implies that the user stopped moving a finger then released.
                    // There would be no events with distance zero, so the last event is stale.
                    if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) {
                        swiper.velocity = 0;
                    }
                } else {
                    swiper.velocity = 0;
                }
                swiper.velocity *= params.freeModeMomentumVelocityRatio;

                data.velocities.length = 0;
                var momentumDuration = 1000 * params.freeModeMomentumRatio;
                var momentumDistance = swiper.velocity * momentumDuration;

                var newPosition = swiper.translate + momentumDistance;
                if (rtl) { newPosition = -newPosition; }
                var doBounce = false;
                var afterBouncePosition;
                var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
                if (newPosition < swiper.maxTranslate()) {
                    if (params.freeModeMomentumBounce) {
                        if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                            newPosition = swiper.maxTranslate() - bounceAmount;
                        }
                        afterBouncePosition = swiper.maxTranslate();
                        doBounce = true;
                        data.allowMomentumBounce = true;
                    } else {
                        newPosition = swiper.maxTranslate();
                    }
                } else if (newPosition > swiper.minTranslate()) {
                    if (params.freeModeMomentumBounce) {
                        if (newPosition - swiper.minTranslate() > bounceAmount) {
                            newPosition = swiper.minTranslate() + bounceAmount;
                        }
                        afterBouncePosition = swiper.minTranslate();
                        doBounce = true;
                        data.allowMomentumBounce = true;
                    } else {
                        newPosition = swiper.minTranslate();
                    }
                } else if (params.freeModeSticky) {
                    var nextSlide;
                    for (var j = 0; j < snapGrid.length; j += 1) {
                        if (snapGrid[j] > -newPosition) {
                            nextSlide = j;
                            break;
                        }
                    }
                    if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
                        newPosition = snapGrid[nextSlide];
                    } else {
                        newPosition = snapGrid[nextSlide - 1];
                    }
                    if (!rtl) { newPosition = -newPosition; }
                }
                // Fix duration
                if (swiper.velocity !== 0) {
                    if (rtl) {
                        momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                    } else {
                        momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                    }
                } else if (params.freeModeSticky) {
                    swiper.slideReset();
                    return;
                }

                if (params.freeModeMomentumBounce && doBounce) {
                    swiper.updateProgress(afterBouncePosition);
                    swiper.setTransition(momentumDuration);
                    swiper.setTranslate(newPosition);
                    swiper.transitionStart();
                    swiper.animating = true;
                    $wrapperEl.transitionEnd(function () {
                        if (!swiper || !data.allowMomentumBounce) { return; }
                        swiper.emit('momentumBounce');

                        swiper.setTransition(params.speed);
                        swiper.setTranslate(afterBouncePosition);
                        $wrapperEl.transitionEnd(function () {
                            if (!swiper) { return; }
                            swiper.transitionEnd();
                        });
                    });
                } else if (swiper.velocity) {
                    swiper.updateProgress(newPosition);
                    swiper.setTransition(momentumDuration);
                    swiper.setTranslate(newPosition);
                    swiper.transitionStart();
                    if (!swiper.animating) {
                        swiper.animating = true;
                        $wrapperEl.transitionEnd(function () {
                            if (!swiper) { return; }
                            swiper.transitionEnd();
                        });
                    }
                } else {
                    swiper.updateProgress(newPosition);
                }

                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            return;
        }

        // Find current slide
        var stopIndex = 0;
        var groupSize = swiper.slidesSizesGrid[0];
        for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
            if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
                if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
                    stopIndex = i;
                    groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
                }
            } else if (currentPos >= slidesGrid[i]) {
                stopIndex = i;
                groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
            }
        }

        // Find current slide size
        var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;

        if (timeDiff > params.longSwipesMs) {
            // Long touches
            if (!params.longSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            if (swiper.swipeDirection === 'next') {
                if (ratio >= params.longSwipesRatio) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
                else { swiper.slideTo(stopIndex); }
            }
            if (swiper.swipeDirection === 'prev') {
                if (ratio > (1 - params.longSwipesRatio)) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
                else { swiper.slideTo(stopIndex); }
            }
        } else {
            // Short swipes
            if (!params.shortSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            if (swiper.swipeDirection === 'next') {
                swiper.slideTo(stopIndex + params.slidesPerGroup);
            }
            if (swiper.swipeDirection === 'prev') {
                swiper.slideTo(stopIndex);
            }
        }
    };

    var onResize = function () {
        var swiper = this;

        var params = swiper.params;
        var el = swiper.el;
        var allowSlideNext = swiper.allowSlideNext;
        var allowSlidePrev = swiper.allowSlidePrev;

        if (el && el.offsetWidth === 0) { return; }

        // Breakpoints
        if (params.breakpoints) {
            swiper.setBreakpoint();
        }

        // Disable locks on resize
        swiper.allowSlideNext = true;
        swiper.allowSlidePrev = true;

        swiper.updateSize();
        swiper.updateSlides();

        if (params.freeMode) {
            var newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
            swiper.setTranslate(newTranslate);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();

            if (params.autoHeight) {
                swiper.updateAutoHeight();
            }
        } else {
            swiper.updateSlidesClasses();
            if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
                swiper.slideTo(swiper.slides.length - 1, 0, false, true);
            } else {
                swiper.slideTo(swiper.activeIndex, 0, false, true);
            }
        }
        // Return locks after resize
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
    };

    var onClick = function (e) {
        var swiper = this;
        if (!swiper.allowClick) {
            if (swiper.params.preventClicks) { e.preventDefault(); }
            if (swiper.params.preventClicksPropagation && swiper.animating) {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }
    };

    function attachEvents() {
        var swiper = this;

        var params = swiper.params;
        var touchEvents = swiper.touchEvents;
        var el = swiper.el;
        var wrapperEl = swiper.wrapperEl;

        {
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
        }

        swiper.onClick = onClick.bind(swiper);

        var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
        var capture = !!params.nested;

        // Touch Events
        {
            if (Browser.ie) {
                target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
                (Support.touch ? target : doc).addEventListener(touchEvents.move, swiper.onTouchMove, capture);
                (Support.touch ? target : doc).addEventListener(touchEvents.end, swiper.onTouchEnd, false);
            } else {
                if (Support.touch) {
                    var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
                    target.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
                    target.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
                    target.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
                }
                if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
                    target.addEventListener('mousedown', swiper.onTouchStart, false);
                    doc.addEventListener('mousemove', swiper.onTouchMove, capture);
                    doc.addEventListener('mouseup', swiper.onTouchEnd, false);
                }
            }
            // Prevent Links Clicks
            if (params.preventClicks || params.preventClicksPropagation) {
                target.addEventListener('click', swiper.onClick, true);
            }
        }

        // Resize handler
        swiper.on('resize observerUpdate', onResize);
    }

    function detachEvents() {
        var swiper = this;

        var params = swiper.params;
        var touchEvents = swiper.touchEvents;
        var el = swiper.el;
        var wrapperEl = swiper.wrapperEl;

        var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
        var capture = !!params.nested;

        // Touch Events
        {
            if (Browser.ie) {
                target.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
                (Support.touch ? target : doc).removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
                (Support.touch ? target : doc).removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
            } else {
                if (Support.touch) {
                    var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
                    target.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
                    target.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
                    target.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
                }
                if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
                    target.removeEventListener('mousedown', swiper.onTouchStart, false);
                    doc.removeEventListener('mousemove', swiper.onTouchMove, capture);
                    doc.removeEventListener('mouseup', swiper.onTouchEnd, false);
                }
            }
            // Prevent Links Clicks
            if (params.preventClicks || params.preventClicksPropagation) {
                target.removeEventListener('click', swiper.onClick, true);
            }
        }

        // Resize handler
        swiper.off('resize observerUpdate', onResize);
    }

    var events = {
        attachEvents: attachEvents,
        detachEvents: detachEvents,
    };

    var setBreakpoint = function () {
        var swiper = this;
        var activeIndex = swiper.activeIndex;
        var loopedSlides = swiper.loopedSlides; if ( loopedSlides === void 0 ) loopedSlides = 0;
        var params = swiper.params;
        var breakpoints = params.breakpoints;
        if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) { return; }
        // Set breakpoint for window width and update parameters
        var breakpoint = swiper.getBreakpoint(breakpoints);
        if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
            var breakPointsParams = breakpoint in breakpoints ? breakpoints[breakpoint] : swiper.originalParams;
            var needsReLoop = params.loop && (breakPointsParams.slidesPerView !== params.slidesPerView);

            Utils.extend(swiper.params, breakPointsParams);

            Utils.extend(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev,
            });

            swiper.currentBreakpoint = breakpoint;

            if (needsReLoop) {
                var oldIndex = activeIndex - loopedSlides;
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo(oldIndex + loopedSlides, 0, false);
            }
        }
    };

    var getBreakpoint = function (breakpoints) {
        // Get breakpoint for window width
        if (!breakpoints) { return undefined; }
        var breakpoint = false;
        var points = [];
        Object.keys(breakpoints).forEach(function (point) {
            points.push(point);
        });
        points.sort(function (a, b) { return parseInt(a, 10) > parseInt(b, 10); });
        for (var i = 0; i < points.length; i += 1) {
            var point = points[i];
            if (point >= win.innerWidth && !breakpoint) {
                breakpoint = point;
            }
        }
        return breakpoint || 'max';
    };

    var breakpoints = { setBreakpoint: setBreakpoint, getBreakpoint: getBreakpoint };

    var addClasses = function () {
        var swiper = this;
        var classNames = swiper.classNames;
        var params = swiper.params;
        var rtl = swiper.rtl;
        var $el = swiper.$el;
        var suffixes = [];

        suffixes.push(params.direction);

        if (params.freeMode) {
            suffixes.push('free-mode');
        }
        if (!Support.flexbox) {
            suffixes.push('no-flexbox');
        }
        if (params.autoHeight) {
            suffixes.push('autoheight');
        }
        if (rtl) {
            suffixes.push('rtl');
        }
        if (params.slidesPerColumn > 1) {
            suffixes.push('multirow');
        }
        if (Device.android) {
            suffixes.push('android');
        }
        if (Device.ios) {
            suffixes.push('ios');
        }
        // WP8 Touch Events Fix
        if (win.navigator.pointerEnabled || win.navigator.msPointerEnabled) {
            suffixes.push(("wp8-" + (params.direction)));
        }

        suffixes.forEach(function (suffix) {
            classNames.push(params.containerModifierClass + suffix);
        });

        $el.addClass(classNames.join(' '));
    };

    var removeClasses = function () {
        var swiper = this;
        var $el = swiper.$el;
        var classNames = swiper.classNames;

        $el.removeClass(classNames.join(' '));
    };

    var classes = { addClasses: addClasses, removeClasses: removeClasses };

    var loadImage = function (imageEl, src, srcset, sizes, checkForComplete, callback) {
        var image;
        function onReady() {
            if (callback) { callback(); }
        }
        if (!imageEl.complete || !checkForComplete) {
            if (src) {
                image = new win.Image();
                image.onload = onReady;
                image.onerror = onReady;
                if (sizes) {
                    image.sizes = sizes;
                }
                if (srcset) {
                    image.srcset = srcset;
                }
                if (src) {
                    image.src = src;
                }
            } else {
                onReady();
            }
        } else {
            // image already loaded...
            onReady();
        }
    };

    var preloadImages = function () {
        var swiper = this;
        swiper.imagesToLoad = swiper.$el.find('img');
        function onReady() {
            if (typeof swiper === 'undefined' || swiper === null || !swiper) { return; }
            if (swiper.imagesLoaded !== undefined) { swiper.imagesLoaded += 1; }
            if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                if (swiper.params.updateOnImagesReady) { swiper.update(); }
                swiper.emit('imagesReady');
            }
        }
        for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
            var imageEl = swiper.imagesToLoad[i];
            swiper.loadImage(
                imageEl,
                imageEl.currentSrc || imageEl.getAttribute('src'),
                imageEl.srcset || imageEl.getAttribute('srcset'),
                imageEl.sizes || imageEl.getAttribute('sizes'),
                true,
                onReady
            );
        }
    };

    var images = {
        loadImage: loadImage,
        preloadImages: preloadImages,
    };

    var defaults = {
        init: true,
        direction: 'horizontal',
        touchEventsTarget: 'container',
        initialSlide: 0,
        speed: 300,

        // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
        iOSEdgeSwipeDetection: false,
        iOSEdgeSwipeThreshold: 20,

        // Free mode
        freeMode: false,
        freeModeMomentum: true,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: true,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: false,
        freeModeMinimumVelocity: 0.02,

        // Autoheight
        autoHeight: false,

        // Set wrapper width
        setWrapperSize: false,

        // Virtual Translate
        virtualTranslate: false,

        // Effects
        effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

        // Breakpoints
        breakpoints: undefined,

        // Slides grid
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'column',
        slidesPerGroup: 1,
        centeredSlides: false,
        slidesOffsetBefore: 0, // in px
        slidesOffsetAfter: 0, // in px
        normalizeSlideIndex: true,

        // Round length
        roundLengths: false,

        // Touches
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: true,
        allowTouchMove: true,
        threshold: 0,
        touchMoveStopPropagation: true,
        touchReleaseOnEdges: false,

        // Unique Navigation Elements
        uniqueNavElements: true,

        // Resistance
        resistance: true,
        resistanceRatio: 0.85,

        // Progress
        watchSlidesProgress: false,
        watchSlidesVisibility: false,

        // Cursor
        grabCursor: false,

        // Clicks
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: false,

        // Images
        preloadImages: true,
        updateOnImagesReady: true,

        // loop
        loop: false,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: false,

        // Swiping/no swiping
        allowSlidePrev: true,
        allowSlideNext: true,
        swipeHandler: null, // '.swipe-handler',
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping',

        // Passive Listeners
        passiveListeners: true,

        // NS
        containerModifierClass: 'swiper-container-', // NEW
        slideClass: 'swiper-slide',
        slideBlankClass: 'swiper-slide-invisible-blank',
        slideActiveClass: 'swiper-slide-active',
        slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideDuplicateClass: 'swiper-slide-duplicate',
        slideNextClass: 'swiper-slide-next',
        slideDuplicateNextClass: 'swiper-slide-duplicate-next',
        slidePrevClass: 'swiper-slide-prev',
        slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
        wrapperClass: 'swiper-wrapper',

        // Callbacks
        runCallbacksOnInit: true,
    };

    var prototypes = {
        update: update,
        translate: translate,
        transition: transition$1,
        slide: slide,
        loop: loop,
        grabCursor: grabCursor,
        manipulation: manipulation,
        events: events,
        breakpoints: breakpoints,
        classes: classes,
        images: images,
    };

    var extendedDefaults = {};

    var Swiper$1 = (function (SwiperClass$$1) {
        function Swiper() {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            var el;
            var params;
            if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
                params = args[0];
            } else {
                var assign;
                (assign = args, el = assign[0], params = assign[1]);
            }
            if (!params) { params = {}; }

            params = Utils.extend({}, params);
            if (el && !params.el) { params.el = el; }

            SwiperClass$$1.call(this, params);

            Object.keys(prototypes).forEach(function (prototypeGroup) {
                Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
                    if (!Swiper.prototype[protoMethod]) {
                        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
                    }
                });
            });

            // Swiper Instance
            var swiper = this;

            Object.keys(swiper.modules).forEach(function (moduleName) {
                var module = swiper.modules[moduleName];
                if (module.params) {
                    var moduleParamName = Object.keys(module.params)[0];
                    var moduleParams = module.params[moduleParamName];
                    if (typeof moduleParams !== 'object') { return; }
                    if (!(moduleParamName in params && 'enabled' in moduleParams)) { return; }
                    if (params[moduleParamName] === true) {
                        params[moduleParamName] = { enabled: true };
                    }
                    if (
                        typeof params[moduleParamName] === 'object' &&
                        !('enabled' in params[moduleParamName])
                    ) {
                        params[moduleParamName].enabled = true;
                    }
                    if (!params[moduleParamName]) { params[moduleParamName] = { enabled: false }; }
                }
            });

            // Extend defaults with modules params
            var swiperParams = Utils.extend({}, defaults);
            swiper.useModulesParams(swiperParams);

            // Extend defaults with passed params
            swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
            swiper.originalParams = Utils.extend({}, swiper.params);
            swiper.passedParams = Utils.extend({}, params);

            // Find el
            var $el = $$1(swiper.params.el);
            el = $el[0];

            if (!el) {
                return undefined;
            }

            if ($el.length > 1) {
                var swipers = [];
                $el.each(function (index, containerEl) {
                    var newParams = Utils.extend({}, params, { el: containerEl });
                    swipers.push(new Swiper(newParams));
                });
                return swipers;
            }

            el.swiper = swiper;
            $el.data('swiper', swiper);

            // Find Wrapper
            var $wrapperEl = $el.children(("." + (swiper.params.wrapperClass)));

            // Extend Swiper
            Utils.extend(swiper, {
                $el: $el,
                el: el,
                $wrapperEl: $wrapperEl,
                wrapperEl: $wrapperEl[0],

                // Classes
                classNames: [],

                // Slides
                slides: $$1(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],

                // isDirection
                isHorizontal: function isHorizontal() {
                    return swiper.params.direction === 'horizontal';
                },
                isVertical: function isVertical() {
                    return swiper.params.direction === 'vertical';
                },
                // RTL
                rtl: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
                wrongRTL: $wrapperEl.css('display') === '-webkit-box',

                // Indexes
                activeIndex: 0,
                realIndex: 0,

                //
                isBeginning: true,
                isEnd: false,

                // Props
                translate: 0,
                progress: 0,
                velocity: 0,
                animating: false,

                // Locks
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev,

                // Touch Events
                touchEvents: (function touchEvents() {
                    var touch = ['touchstart', 'touchmove', 'touchend'];
                    var desktop = ['mousedown', 'mousemove', 'mouseup'];
                    if (win.navigator.pointerEnabled) {
                        desktop = ['pointerdown', 'pointermove', 'pointerup'];
                    } else if (win.navigator.msPointerEnabled) {
                        desktop = ['MSPointerDown', 'MsPointerMove', 'MsPointerUp'];
                    }

                    return {
                        start: Support.touch || !swiper.params.simulateTouch ? touch[0] : desktop[0],
                        move: Support.touch || !swiper.params.simulateTouch ? touch[1] : desktop[1],
                        end: Support.touch || !swiper.params.simulateTouch ? touch[2] : desktop[2],
                    };
                }()),
                touchEventsData: {
                    isTouched: undefined,
                    isMoved: undefined,
                    allowTouchCallbacks: undefined,
                    touchStartTime: undefined,
                    isScrolling: undefined,
                    currentTranslate: undefined,
                    startTranslate: undefined,
                    allowThresholdMove: undefined,
                    // Form elements to match
                    formElements: 'input, select, textarea, button, video',
                    // Last click time
                    lastClickTime: Utils.now(),
                    clickTimeout: undefined,
                    // Velocities
                    velocities: [],
                    allowMomentumBounce: undefined,
                    isTouchEvent: undefined,
                    startMoving: undefined,
                },

                // Clicks
                allowClick: true,

                // Touches
                allowTouchMove: swiper.params.allowTouchMove,

                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0,
                },

                // Images
                imagesToLoad: [],
                imagesLoaded: 0,

            });

            // Install Modules
            swiper.useModules();

            // Init
            if (swiper.params.init) {
                swiper.init();
            }

            // Return app instance
            return swiper;
        }

        if ( SwiperClass$$1 ) Swiper.__proto__ = SwiperClass$$1;
        Swiper.prototype = Object.create( SwiperClass$$1 && SwiperClass$$1.prototype );
        Swiper.prototype.constructor = Swiper;

        var staticAccessors = { extendedDefaults: {},defaults: {},Class: {},$: {} };
        Swiper.prototype.slidesPerViewDynamic = function slidesPerViewDynamic () {
            var swiper = this;
            var params = swiper.params;
            var slides = swiper.slides;
            var slidesGrid = swiper.slidesGrid;
            var swiperSize = swiper.size;
            var activeIndex = swiper.activeIndex;
            var spv = 1;
            if (params.centeredSlides) {
                var slideSize = slides[activeIndex].swiperSlideSize;
                var breakLoop;
                for (var i = activeIndex + 1; i < slides.length; i += 1) {
                    if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) { breakLoop = true; }
                    }
                }
                for (var i$1 = activeIndex - 1; i$1 >= 0; i$1 -= 1) {
                    if (slides[i$1] && !breakLoop) {
                        slideSize += slides[i$1].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) { breakLoop = true; }
                    }
                }
            } else {
                for (var i$2 = activeIndex + 1; i$2 < slides.length; i$2 += 1) {
                    if (slidesGrid[i$2] - slidesGrid[activeIndex] < swiperSize) {
                        spv += 1;
                    }
                }
            }
            return spv;
        };
        Swiper.prototype.update = function update$$1 () {
            var swiper = this;
            if (!swiper) { return; }
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();

            var newTranslate;
            function setTranslate() {
                newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
                swiper.setTranslate(newTranslate);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            var translated;
            if (swiper.params.freeMode) {
                setTranslate();
                if (swiper.params.autoHeight) {
                    swiper.updateAutoHeight();
                }
            } else {
                if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
                    translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
                } else {
                    translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                }
                if (!translated) {
                    setTranslate();
                }
            }
            swiper.emit('update');
        };
        Swiper.prototype.init = function init () {
            var swiper = this;
            if (swiper.initialized) { return; }

            swiper.emit('beforeInit');

            // Set breakpoint
            if (swiper.params.breakpoints) {
                swiper.setBreakpoint();
            }

            // Add Classes
            swiper.addClasses();

            // Create loop
            if (swiper.params.loop) {
                swiper.loopCreate();
            }

            // Update size
            swiper.updateSize();

            // Update slides
            swiper.updateSlides();

            // Set Grab Cursor
            if (swiper.params.grabCursor) {
                swiper.setGrabCursor();
            }

            if (swiper.params.preloadImages) {
                swiper.preloadImages();
            }

            // Slide To Initial Slide
            if (swiper.params.loop) {
                swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
            } else {
                swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
            }

            // Attach events
            swiper.attachEvents();

            // Init Flag
            swiper.initialized = true;

            // Emit
            swiper.emit('init');
        };
        Swiper.prototype.destroy = function destroy (deleteInstance, cleanStyles) {
            if ( deleteInstance === void 0 ) deleteInstance = true;
            if ( cleanStyles === void 0 ) cleanStyles = true;

            var swiper = this;
            var params = swiper.params;
            var $el = swiper.$el;
            var $wrapperEl = swiper.$wrapperEl;
            var slides = swiper.slides;
            swiper.emit('beforeDestroy');

            // Init Flag
            swiper.initialized = false;

            // Detach events
            swiper.detachEvents();

            // Destroy loop
            if (params.loop) {
                swiper.loopDestroy();
            }

            // Cleanup styles
            if (cleanStyles) {
                swiper.removeClasses();
                $el.removeAttr('style');
                $wrapperEl.removeAttr('style');
                if (slides && slides.length) {
                    slides
                        .removeClass([
                            params.slideVisibleClass,
                            params.slideActiveClass,
                            params.slideNextClass,
                            params.slidePrevClass ].join(' '))
                        .removeAttr('style')
                        .removeAttr('data-swiper-slide-index')
                        .removeAttr('data-swiper-column')
                        .removeAttr('data-swiper-row');
                }
            }

            swiper.emit('destroy');

            // Detach emitter events
            Object.keys(swiper.eventsListeners).forEach(function (eventName) {
                swiper.off(eventName);
            });

            if (deleteInstance !== false) {
                swiper.$el[0].swiper = null;
                swiper.$el.data('swiper', null);
                Utils.deleteProps(swiper);
                swiper = null;
            }
        };
        Swiper.extendDefaults = function extendDefaults (newDefaults) {
            Utils.extend(extendedDefaults, newDefaults);
        };
        staticAccessors.extendedDefaults.get = function () {
            return extendedDefaults;
        };
        staticAccessors.defaults.get = function () {
            return defaults;
        };
        staticAccessors.Class.get = function () {
            return SwiperClass$$1;
        };
        staticAccessors.$.get = function () {
            return $$1;
        };

        Object.defineProperties( Swiper, staticAccessors );

        return Swiper;
    }(SwiperClass));

    var Device$2 = {
        name: 'device',
        proto: {
            device: Device,
        },
        static: {
            device: Device,
        },
    };

    var Support$2 = {
        name: 'support',
        proto: {
            support: Support,
        },
        static: {
            support: Support,
        },
    };

    var Browser$2 = {
        name: 'browser',
        proto: {
            browser: Browser,
        },
        static: {
            browser: Browser,
        },
    };

    var Resize = {
        name: 'resize',
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                resize: {
                    resizeHandler: function resizeHandler() {
                        if (!swiper || !swiper.initialized) { return; }
                        swiper.emit('beforeResize');
                        swiper.emit('resize');
                    },
                    orientationChangeHandler: function orientationChangeHandler() {
                        if (!swiper || !swiper.initialized) { return; }
                        swiper.emit('orientationchange');
                    },
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                // Emit resize
                win.addEventListener('resize', swiper.resize.resizeHandler);

                // Emit orientationchange
                win.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
            },
            destroy: function destroy() {
                var swiper = this;
                win.removeEventListener('resize', swiper.resize.resizeHandler);
                win.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
            },
        },
    };

    var Observer = {
        func: win.MutationObserver || win.WebkitMutationObserver,
        attach: function attach(target, options) {
            if ( options === void 0 ) options = {};

            var swiper = this;

            var ObserverFunc = Observer.func;
            var observer = new ObserverFunc(function (mutations) {
                mutations.forEach(function (mutation) {
                    swiper.emit('observerUpdate', mutation);
                });
            });

            observer.observe(target, {
                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
                childList: typeof options.childList === 'undefined' ? true : options.childList,
                characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
            });

            swiper.observer.observers.push(observer);
        },
        init: function init() {
            var swiper = this;
            if (!Support.observer || !swiper.params.observer) { return; }
            if (swiper.params.observeParents) {
                var containerParents = swiper.$el.parents();
                for (var i = 0; i < containerParents.length; i += 1) {
                    swiper.observer.attach(containerParents[i]);
                }
            }
            // Observe container
            swiper.observer.attach(swiper.$el[0], { childList: false });

            // Observe wrapper
            swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
        },
        destroy: function destroy() {
            var swiper = this;
            swiper.observer.observers.forEach(function (observer) {
                observer.disconnect();
            });
            swiper.observer.observers = [];
        },
    };

    var Observer$1 = {
        name: 'observer',
        params: {
            observer: false,
            observeParents: false,
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                observer: {
                    init: Observer.init.bind(swiper),
                    attach: Observer.attach.bind(swiper),
                    destroy: Observer.destroy.bind(swiper),
                    observers: [],
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                swiper.observer.init();
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.observer.destroy();
            },
        },
    };

    var Virtual = {
        update: function update(force) {
            var swiper = this;
            var ref = swiper.params;
            var slidesPerView = ref.slidesPerView;
            var slidesPerGroup = ref.slidesPerGroup;
            var centeredSlides = ref.centeredSlides;
            var ref$1 = swiper.virtual;
            var previousFrom = ref$1.from;
            var previousTo = ref$1.to;
            var slides = ref$1.slides;
            var previousSlidesGrid = ref$1.slidesGrid;
            var renderSlide = ref$1.renderSlide;
            var previousOffset = ref$1.offset;
            swiper.updateActiveIndex();
            var activeIndex = swiper.activeIndex || 0;

            var offsetProp;
            if (swiper.rtl && swiper.isHorizontal()) { offsetProp = 'right'; }
            else { offsetProp = swiper.isHorizontal() ? 'left' : 'top'; }

            var slidesAfter;
            var slidesBefore;
            if (centeredSlides) {
                slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup;
                slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup;
            } else {
                slidesAfter = slidesPerView + (slidesPerGroup - 1);
                slidesBefore = slidesPerGroup;
            }
            var from = Math.max((activeIndex || 0) - slidesBefore, 0);
            var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
            var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);

            Utils.extend(swiper.virtual, {
                from: from,
                to: to,
                offset: offset,
                slidesGrid: swiper.slidesGrid,
            });

            function onRendered() {
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                if (swiper.lazy && swiper.params.lazy.enabled) {
                    swiper.lazy.load();
                }
            }

            if (previousFrom === from && previousTo === to && !force) {
                if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
                    swiper.slides.css(offsetProp, (offset + "px"));
                }
                swiper.updateProgress();
                return;
            }
            if (swiper.params.virtual.renderExternal) {
                swiper.params.virtual.renderExternal.call(swiper, {
                    offset: offset,
                    from: from,
                    to: to,
                    slides: (function getSlides() {
                        var slidesToRender = [];
                        for (var i = from; i <= to; i += 1) {
                            slidesToRender.push(slides[i]);
                        }
                        return slidesToRender;
                    }()),
                });
                onRendered();
                return;
            }
            var prependIndexes = [];
            var appendIndexes = [];
            if (force) {
                swiper.$wrapperEl.find(("." + (swiper.params.slideClass))).remove();
            } else {
                for (var i = previousFrom; i <= previousTo; i += 1) {
                    if (i < from || i > to) {
                        swiper.$wrapperEl.find(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + i + "\"]")).remove();
                    }
                }
            }
            for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
                if (i$1 >= from && i$1 <= to) {
                    if (typeof previousTo === 'undefined' || force) {
                        appendIndexes.push(i$1);
                    } else {
                        if (i$1 > previousTo) { appendIndexes.push(i$1); }
                        if (i$1 < previousFrom) { prependIndexes.push(i$1); }
                    }
                }
            }
            appendIndexes.forEach(function (index) {
                swiper.$wrapperEl.append(renderSlide(slides[index], index));
            });
            prependIndexes.sort(function (a, b) { return a < b; }).forEach(function (index) {
                swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
            });
            swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, (offset + "px"));
            onRendered();
        },
        renderSlide: function renderSlide(slide, index) {
            var swiper = this;
            var params = swiper.params.virtual;
            if (params.cache && swiper.virtual.cache[index]) {
                return swiper.virtual.cache[index];
            }
            var $slideEl = params.renderSlide
                ? $$1(params.renderSlide.call(swiper, slide, index))
                : $$1(("<div class=\"" + (swiper.params.slideClass) + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>"));
            if (!$slideEl.attr('data-swiper-slide-index')) { $slideEl.attr('data-swiper-slide-index', index); }
            if (params.cache) { swiper.virtual.cache[index] = $slideEl; }
            return $slideEl;
        },
        appendSlide: function appendSlide(slide) {
            var swiper = this;
            swiper.virtual.slides.push(slide);
            swiper.virtual.update(true);
        },
        prependSlide: function prependSlide(slide) {
            var swiper = this;
            swiper.virtual.slides.unshift(slide);
            if (swiper.params.virtual.cache) {
                var cache = swiper.virtual.cache;
                var newCache = {};
                Object.keys(cache).forEach(function (cachedIndex) {
                    newCache[cachedIndex + 1] = cache[cachedIndex];
                });
                swiper.virtual.cache = newCache;
            }
            swiper.virtual.update(true);
            swiper.slideNext(0);
        },
    };

    var Virtual$1 = {
        name: 'virtual',
        params: {
            virtual: {
                enabled: false,
                slides: [],
                cache: true,
                renderSlide: null,
                renderExternal: null,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                virtual: {
                    update: Virtual.update.bind(swiper),
                    appendSlide: Virtual.appendSlide.bind(swiper),
                    prependSlide: Virtual.prependSlide.bind(swiper),
                    renderSlide: Virtual.renderSlide.bind(swiper),
                    slides: swiper.params.virtual.slides,
                    cache: {},
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (!swiper.params.virtual.enabled) { return; }
                swiper.classNames.push(((swiper.params.containerModifierClass) + "virtual"));
                Utils.extend(swiper.params, {
                    watchSlidesProgress: true,
                });
                swiper.virtual.update();
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (!swiper.params.virtual.enabled) { return; }
                swiper.virtual.update();
            },
        },
    };

    var Keyboard = {
        handle: function handle(event) {
            var swiper = this;
            var e = event;
            if (e.originalEvent) { e = e.originalEvent; } // jquery fix
            var kc = e.keyCode || e.charCode;
            // Directions locks
            if (!swiper.allowSlideNext && ((swiper.isHorizontal() && kc === 39) || (swiper.isVertical() && kc === 40))) {
                return false;
            }
            if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && kc === 37) || (swiper.isVertical() && kc === 38))) {
                return false;
            }
            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
                return undefined;
            }
            if (doc.activeElement && doc.activeElement.nodeName && (doc.activeElement.nodeName.toLowerCase() === 'input' || doc.activeElement.nodeName.toLowerCase() === 'textarea')) {
                return undefined;
            }
            if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
                var inView = false;
                // Check that swiper should be inside of visible area of window
                if (swiper.$el.parents(("." + (swiper.params.slideClass))).length > 0 && swiper.$el.parents(("." + (swiper.params.slideActiveClass))).length === 0) {
                    return undefined;
                }
                var windowScroll = {
                    left: win.pageXOffset,
                    top: win.pageYOffset,
                };
                var windowWidth = win.innerWidth;
                var windowHeight = win.innerHeight;
                var swiperOffset = swiper.$el.offset();
                if (swiper.rtl) { swiperOffset.left -= swiper.$el[0].scrollLeft; }
                var swiperCoord = [
                    [swiperOffset.left, swiperOffset.top],
                    [swiperOffset.left + swiper.width, swiperOffset.top],
                    [swiperOffset.left, swiperOffset.top + swiper.height],
                    [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height] ];
                for (var i = 0; i < swiperCoord.length; i += 1) {
                    var point = swiperCoord[i];
                    if (
                        point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth &&
                        point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight
                    ) {
                        inView = true;
                    }
                }
                if (!inView) { return undefined; }
            }
            if (swiper.isHorizontal()) {
                if (kc === 37 || kc === 39) {
                    if (e.preventDefault) { e.preventDefault(); }
                    else { e.returnValue = false; }
                }
                if ((kc === 39 && !swiper.rtl) || (kc === 37 && swiper.rtl)) { swiper.slideNext(); }
                if ((kc === 37 && !swiper.rtl) || (kc === 39 && swiper.rtl)) { swiper.slidePrev(); }
            } else {
                if (kc === 38 || kc === 40) {
                    if (e.preventDefault) { e.preventDefault(); }
                    else { e.returnValue = false; }
                }
                if (kc === 40) { swiper.slideNext(); }
                if (kc === 38) { swiper.slidePrev(); }
            }
            swiper.emit('keyPress', kc);
            return undefined;
        },
        enable: function enable() {
            var swiper = this;
            if (swiper.keyboard.enabled) { return; }
            $$1(doc).on('keydown', swiper.keyboard.handle);
            swiper.keyboard.enabled = true;
        },
        disable: function disable() {
            var swiper = this;
            if (!swiper.keyboard.enabled) { return; }
            $$1(doc).off('keydown', swiper.keyboard.handle);
            swiper.keyboard.enabled = false;
        },
    };

    var Keyboard$1 = {
        name: 'keyboard',
        params: {
            keyboard: {
                enabled: false,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                keyboard: {
                    enabled: false,
                    enable: Keyboard.enable.bind(swiper),
                    disable: Keyboard.disable.bind(swiper),
                    handle: Keyboard.handle.bind(swiper),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.keyboard.enabled) {
                    swiper.keyboard.enable();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                if (swiper.keyboard.enabled) {
                    swiper.keyboard.disable();
                }
            },
        },
    };

    function isEventSupported() {
        var eventName = 'onwheel';
        var isSupported = eventName in doc;

        if (!isSupported) {
            var element = doc.createElement('div');
            element.setAttribute(eventName, 'return;');
            isSupported = typeof element[eventName] === 'function';
        }

        if (!isSupported &&
            doc.implementation &&
            doc.implementation.hasFeature &&
            // always returns true in newer browsers as per the standard.
            // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
            doc.implementation.hasFeature('', '') !== true
        ) {
            // This is the only way to test support for the `wheel` event in IE9+.
            isSupported = doc.implementation.hasFeature('Events.wheel', '3.0');
        }

        return isSupported;
    }
    var Mousewheel = {
        lastScrollTime: Utils.now(),
        event: (function getEvent() {
            if (win.navigator.userAgent.indexOf('firefox') > -1) { return 'DOMMouseScroll'; }
            return isEventSupported() ? 'wheel' : 'mousewheel';
        }()),
        normalize: function normalize(e) {
            // Reasonable defaults
            var PIXEL_STEP = 10;
            var LINE_HEIGHT = 40;
            var PAGE_HEIGHT = 800;

            var sX = 0;
            var sY = 0; // spinX, spinY
            var pX = 0;
            var pY = 0; // pixelX, pixelY

            // Legacy
            if ('detail' in e) {
                sY = e.detail;
            }
            if ('wheelDelta' in e) {
                sY = -e.wheelDelta / 120;
            }
            if ('wheelDeltaY' in e) {
                sY = -e.wheelDeltaY / 120;
            }
            if ('wheelDeltaX' in e) {
                sX = -e.wheelDeltaX / 120;
            }

            // side scrolling on FF with DOMMouseScroll
            if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
                sX = sY;
                sY = 0;
            }

            pX = sX * PIXEL_STEP;
            pY = sY * PIXEL_STEP;

            if ('deltaY' in e) {
                pY = e.deltaY;
            }
            if ('deltaX' in e) {
                pX = e.deltaX;
            }

            if ((pX || pY) && e.deltaMode) {
                if (e.deltaMode === 1) { // delta in LINE units
                    pX *= LINE_HEIGHT;
                    pY *= LINE_HEIGHT;
                } else { // delta in PAGE units
                    pX *= PAGE_HEIGHT;
                    pY *= PAGE_HEIGHT;
                }
            }

            // Fall-back if spin cannot be determined
            if (pX && !sX) {
                sX = (pX < 1) ? -1 : 1;
            }
            if (pY && !sY) {
                sY = (pY < 1) ? -1 : 1;
            }

            return {
                spinX: sX,
                spinY: sY,
                pixelX: pX,
                pixelY: pY,
            };
        },
        handle: function handle(event) {
            var e = event;
            var swiper = this;
            var params = swiper.params.mousewheel;
            if (e.originalEvent) { e = e.originalEvent; } // jquery fix
            var delta = 0;
            var rtlFactor = swiper.rtl ? -1 : 1;

            var data = Mousewheel.normalize(e);

            if (params.forceToAxis) {
                if (swiper.isHorizontal()) {
                    if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) { delta = data.pixelX * rtlFactor; }
                    else { return true; }
                } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) { delta = data.pixelY; }
                else { return true; }
            } else {
                delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
            }

            if (delta === 0) { return true; }

            if (params.invert) { delta = -delta; }

            if (!swiper.params.freeMode) {
                if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
                    if (delta < 0) {
                        if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                            swiper.slideNext();
                            swiper.emit('scroll', e);
                        } else if (params.releaseOnEdges) { return true; }
                    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
                        swiper.slidePrev();
                        swiper.emit('scroll', e);
                    } else if (params.releaseOnEdges) { return true; }
                }
                swiper.mousewheel.lastScrollTime = (new win.Date()).getTime();
            } else {
                // Freemode or scrollContainer:
                var position = swiper.getTranslate() + (delta * params.sensitivity);
                var wasBeginning = swiper.isBeginning;
                var wasEnd = swiper.isEnd;

                if (position >= swiper.minTranslate()) { position = swiper.minTranslate(); }
                if (position <= swiper.maxTranslate()) { position = swiper.maxTranslate(); }

                swiper.setTransition(0);
                swiper.setTranslate(position);
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();

                if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
                    swiper.updateSlidesClasses();
                }

                if (swiper.params.freeModeSticky) {
                    clearTimeout(swiper.mousewheel.timeout);
                    swiper.mousewheel.timeout = Utils.nextTick(function () {
                        swiper.slideReset();
                    }, 300);
                }
                // Emit event
                swiper.emit('scroll', e);

                // Stop autoplay
                if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) { swiper.stopAutoplay(); }

                // Return page scroll on edge positions
                if (position === 0 || position === swiper.maxTranslate()) { return true; }
            }

            if (e.preventDefault) { e.preventDefault(); }
            else { e.returnValue = false; }
            return false;
        },
        enable: function enable() {
            var swiper = this;
            if (!Mousewheel.event) { return false; }
            if (swiper.mousewheel.enabled) { return false; }
            var target = swiper.$el;
            if (swiper.params.mousewheel.eventsTarged !== 'container') {
                target = $$1(swiper.params.mousewheel.eventsTarged);
            }
            target.on(Mousewheel.event, swiper.mousewheel.handle);
            swiper.mousewheel.enabled = true;
            return true;
        },
        disable: function disable() {
            var swiper = this;
            if (!Mousewheel.event) { return false; }
            if (!swiper.mousewheel.enabled) { return false; }
            var target = swiper.$el;
            if (swiper.params.mousewheel.eventsTarged !== 'container') {
                target = $$1(swiper.params.mousewheel.eventsTarged);
            }
            target.off(Mousewheel.event, swiper.mousewheel.handle);
            swiper.mousewheel.enabled = false;
            return true;
        },
    };

    var Mousewheel$1 = {
        name: 'mousewheel',
        params: {
            mousewheel: {
                enabled: false,
                releaseOnEdges: false,
                invert: false,
                forceToAxis: false,
                sensitivity: 1,
                eventsTarged: 'container',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                mousewheel: {
                    enabled: false,
                    enable: Mousewheel.enable.bind(swiper),
                    disable: Mousewheel.disable.bind(swiper),
                    handle: Mousewheel.handle.bind(swiper),
                    lastScrollTime: Utils.now(),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.mousewheel.enabled) { swiper.mousewheel.enable(); }
            },
            destroy: function destroy() {
                var swiper = this;
                if (swiper.mousewheel.enabled) { swiper.mousewheel.disable(); }
            },
        },
    };

    var Navigation = {
        update: function update() {
            // Update Navigation Buttons
            var swiper = this;
            var params = swiper.params.navigation;

            if (swiper.params.loop) { return; }
            var ref = swiper.navigation;
            var $nextEl = ref.$nextEl;
            var $prevEl = ref.$prevEl;

            if ($prevEl && $prevEl.length > 0) {
                if (swiper.isBeginning) {
                    $prevEl.addClass(params.disabledClass);
                } else {
                    $prevEl.removeClass(params.disabledClass);
                }
            }
            if ($nextEl && $nextEl.length > 0) {
                if (swiper.isEnd) {
                    $nextEl.addClass(params.disabledClass);
                } else {
                    $nextEl.removeClass(params.disabledClass);
                }
            }
        },
        init: function init() {
            var swiper = this;
            var params = swiper.params.navigation;
            if (!(params.nextEl || params.prevEl)) { return; }

            var $nextEl;
            var $prevEl;
            if (params.nextEl) {
                $nextEl = $$1(params.nextEl);
                if (
                    swiper.params.uniqueNavElements &&
                    typeof params.nextEl === 'string' &&
                    $nextEl.length > 1 &&
                    swiper.$el.find(params.nextEl).length === 1
                ) {
                    $nextEl = swiper.$el.find(params.nextEl);
                }
            }
            if (params.prevEl) {
                $prevEl = $$1(params.prevEl);
                if (
                    swiper.params.uniqueNavElements &&
                    typeof params.prevEl === 'string' &&
                    $prevEl.length > 1 &&
                    swiper.$el.find(params.prevEl).length === 1
                ) {
                    $prevEl = swiper.$el.find(params.prevEl);
                }
            }

            if ($nextEl && $nextEl.length > 0) {
                $nextEl.on('click', function (e) {
                    e.preventDefault();
                    if (swiper.isEnd && !swiper.params.loop) { return; }
                    swiper.slideNext();
                });
            }
            if ($prevEl && $prevEl.length > 0) {
                $prevEl.on('click', function (e) {
                    e.preventDefault();
                    if (swiper.isBeginning && !swiper.params.loop) { return; }
                    swiper.slidePrev();
                });
            }

            Utils.extend(swiper.navigation, {
                $nextEl: $nextEl,
                nextEl: $nextEl && $nextEl[0],
                $prevEl: $prevEl,
                prevEl: $prevEl && $prevEl[0],
            });
        },
        destroy: function destroy() {
            var swiper = this;
            var ref = swiper.navigation;
            var $nextEl = ref.$nextEl;
            var $prevEl = ref.$prevEl;
            if ($nextEl && $nextEl.length) {
                $nextEl.off('click');
                $nextEl.removeClass(swiper.params.navigation.disabledClass);
            }
            if ($prevEl && $prevEl.length) {
                $prevEl.off('click');
                $prevEl.removeClass(swiper.params.navigation.disabledClass);
            }
        },
    };

    var Navigation$1 = {
        name: 'navigation',
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,

                hideOnClick: false,
                disabledClass: 'swiper-button-disabled',
                hiddenClass: 'swiper-button-hidden',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                navigation: {
                    init: Navigation.init.bind(swiper),
                    update: Navigation.update.bind(swiper),
                    destroy: Navigation.destroy.bind(swiper),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                swiper.navigation.init();
                swiper.navigation.update();
            },
            toEdge: function toEdge() {
                var swiper = this;
                swiper.navigation.update();
            },
            fromEdge: function fromEdge() {
                var swiper = this;
                swiper.navigation.update();
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.navigation.destroy();
            },
            click: function click(e) {
                var swiper = this;
                var ref = swiper.navigation;
                var $nextEl = ref.$nextEl;
                var $prevEl = ref.$prevEl;
                if (
                    swiper.params.navigation.hideOnClick &&
                    !$$1(e.target).is($prevEl) &&
                    !$$1(e.target).is($nextEl)
                ) {
                    if ($nextEl) { $nextEl.toggleClass(swiper.params.navigation.hiddenClass); }
                    if ($prevEl) { $prevEl.toggleClass(swiper.params.navigation.hiddenClass); }
                }
            },
        },
    };

    var Pagination = {
        update: function update() {
            // Render || Update Pagination bullets/items
            var swiper = this;
            var rtl = swiper.rtl;
            var params = swiper.params.pagination;
            if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
            var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
            var $el = swiper.pagination.$el;
            // Current/Total
            var current;
            var total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
            if (swiper.params.loop) {
                current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
                if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) {
                    current -= (slidesLength - (swiper.loopedSlides * 2));
                }
                if (current > total - 1) { current -= total; }
                if (current < 0 && swiper.params.paginationType !== 'bullets') { current = total + current; }
            } else if (typeof swiper.snapIndex !== 'undefined') {
                current = swiper.snapIndex;
            } else {
                current = swiper.activeIndex || 0;
            }
            // Types
            if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                var bullets = swiper.pagination.bullets;
                if (params.dynamicBullets) {
                    swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
                    $el.css(swiper.isHorizontal() ? 'width' : 'height', ((swiper.pagination.bulletSize * 5) + "px"));
                }
                bullets.removeClass(((params.bulletActiveClass) + " " + (params.bulletActiveClass) + "-next " + (params.bulletActiveClass) + "-next-next " + (params.bulletActiveClass) + "-prev " + (params.bulletActiveClass) + "-prev-prev"));
                if ($el.length > 1) {
                    bullets.each(function (index, bullet) {
                        var $bullet = $$1(bullet);
                        if ($bullet.index() === current) {
                            $bullet.addClass(params.bulletActiveClass);
                            if (params.dynamicBullets) {
                                $bullet
                                    .prev()
                                    .addClass(((params.bulletActiveClass) + "-prev"))
                                    .prev()
                                    .addClass(((params.bulletActiveClass) + "-prev-prev"));
                                $bullet
                                    .next()
                                    .addClass(((params.bulletActiveClass) + "-next"))
                                    .next()
                                    .addClass(((params.bulletActiveClass) + "-next-next"));
                            }
                        }
                    });
                } else {
                    var $bullet = bullets.eq(current);
                    $bullet.addClass(params.bulletActiveClass);
                    if (params.dynamicBullets) {
                        $bullet
                            .prev()
                            .addClass(((params.bulletActiveClass) + "-prev"))
                            .prev()
                            .addClass(((params.bulletActiveClass) + "-prev-prev"));
                        $bullet
                            .next()
                            .addClass(((params.bulletActiveClass) + "-next"))
                            .next()
                            .addClass(((params.bulletActiveClass) + "-next-next"));
                    }
                }
                if (params.dynamicBullets) {
                    var bulletsOffset = (((swiper.pagination.bulletSize * 5) - (swiper.pagination.bulletSize)) / 2) - (current * swiper.pagination.bulletSize);
                    var offsetProp = rtl ? 'right' : 'left';
                    bullets.css(swiper.isHorizontal() ? offsetProp : 'top', (bulletsOffset + "px"));
                }
            }
            if (params.type === 'fraction') {
                $el.find(("." + (params.currentClass))).text(current + 1);
                $el.find(("." + (params.totalClass))).text(total);
            }
            if (params.type === 'progressbar') {
                var scale = (current + 1) / total;
                var scaleX = scale;
                var scaleY = 1;
                if (!swiper.isHorizontal()) {
                    scaleY = scale;
                    scaleX = 1;
                }
                $el.find(("." + (params.progressbarFillClass))).transform(("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")")).transition(swiper.params.speed);
            }
            if (params.type === 'custom' && params.renderCustom) {
                $el.html(params.renderCustom(swiper, current + 1, total));
                swiper.emit('paginationRender', swiper, $el[0]);
            } else {
                swiper.emit('paginationUpdate', swiper, $el[0]);
            }
        },
        render: function render() {
            // Render Container
            var swiper = this;
            var params = swiper.params.pagination;
            if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
            var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;

            var $el = swiper.pagination.$el;
            var paginationHTML = '';
            if (params.type === 'bullets') {
                var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                for (var i = 0; i < numberOfBullets; i += 1) {
                    if (params.renderBullet) {
                        paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
                    } else {
                        paginationHTML += "<" + (params.bulletElement) + " class=\"" + (params.bulletClass) + "\"></" + (params.bulletElement) + ">";
                    }
                }
                $el.html(paginationHTML);
                swiper.pagination.bullets = $el.find(("." + (params.bulletClass)));
            }
            if (params.type === 'fraction') {
                if (params.renderFraction) {
                    paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
                } else {
                    paginationHTML =
                        "<span class=\"" + (params.currentClass) + "\"></span>" +
                        ' / ' +
                        "<span class=\"" + (params.totalClass) + "\"></span>";
                }
                $el.html(paginationHTML);
            }
            if (params.type === 'progressbar') {
                if (params.renderProgressbar) {
                    paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
                } else {
                    paginationHTML = "<span class=\"" + (params.progressbarFillClass) + "\"></span>";
                }
                $el.html(paginationHTML);
            }
            if (params.type !== 'custom') {
                swiper.emit('paginationRender', swiper.pagination.$el[0]);
            }
        },
        init: function init() {
            var swiper = this;
            var params = swiper.params.pagination;
            if (!params.el) { return; }

            var $el = $$1(params.el);
            if ($el.length === 0) { return; }

            if (
                swiper.params.uniqueNavElements &&
                typeof params.el === 'string' &&
                $el.length > 1 &&
                swiper.$el.find(params.el).length === 1
            ) {
                $el = swiper.$el.find(params.el);
            }

            if (params.type === 'bullets' && params.clickable) {
                $el.addClass(params.clickableClass);
            }

            $el.addClass(params.modifierClass + params.type);

            if (params.type === 'bullets' && params.dynamicBullets) {
                $el.addClass(("" + (params.modifierClass) + (params.type) + "-dynamic"));
            }

            if (params.clickable) {
                $el.on('click', ("." + (params.bulletClass)), function onClick(e) {
                    e.preventDefault();
                    var index = $$1(this).index() * swiper.params.slidesPerGroup;
                    if (swiper.params.loop) { index += swiper.loopedSlides; }
                    swiper.slideTo(index);
                });
            }

            Utils.extend(swiper.pagination, {
                $el: $el,
                el: $el[0],
            });
        },
        destroy: function destroy() {
            var swiper = this;
            var params = swiper.params.pagination;
            if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
            var $el = swiper.pagination.$el;

            $el.removeClass(params.hiddenClass);
            $el.removeClass(params.modifierClass + params.type);
            if (swiper.pagination.bullets) { swiper.pagination.bullets.removeClass(params.bulletActiveClass); }
            if (params.clickable) {
                $el.off('click', ("." + (params.bulletClass)));
            }
        },
    };

    var Pagination$1 = {
        name: 'pagination',
        params: {
            pagination: {
                el: null,
                bulletElement: 'span',
                clickable: false,
                hideOnClick: false,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                type: 'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
                dynamicBullets: false,

                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
                modifierClass: 'swiper-pagination-', // NEW
                currentClass: 'swiper-pagination-current',
                totalClass: 'swiper-pagination-total',
                hiddenClass: 'swiper-pagination-hidden',
                progressbarFillClass: 'swiper-pagination-progressbar-fill',
                clickableClass: 'swiper-pagination-clickable', // NEW
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                pagination: {
                    init: Pagination.init.bind(swiper),
                    render: Pagination.render.bind(swiper),
                    update: Pagination.update.bind(swiper),
                    destroy: Pagination.destroy.bind(swiper),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
            },
            activeIndexChange: function activeIndexChange() {
                var swiper = this;
                if (swiper.params.loop) {
                    swiper.pagination.update();
                } else if (typeof swiper.snapIndex === 'undefined') {
                    swiper.pagination.update();
                }
            },
            snapIndexChange: function snapIndexChange() {
                var swiper = this;
                if (!swiper.params.loop) {
                    swiper.pagination.update();
                }
            },
            slidesLengthChange: function slidesLengthChange() {
                var swiper = this;
                if (swiper.params.loop) {
                    swiper.pagination.render();
                    swiper.pagination.update();
                }
            },
            snapGridLengthChange: function snapGridLengthChange() {
                var swiper = this;
                if (!swiper.params.loop) {
                    swiper.pagination.render();
                    swiper.pagination.update();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.pagination.destroy();
            },
            click: function click(e) {
                var swiper = this;
                if (
                    swiper.params.pagination.el &&
                    swiper.params.pagination.hideOnClick &&
                    swiper.pagination.$el.length > 0 &&
                    !$$1(e.target).hasClass(swiper.params.pagination.bulletClass)
                ) {
                    swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
                }
            },
        },
    };

    var Scrollbar = {
        setTranslate: function setTranslate() {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
            var scrollbar = swiper.scrollbar;
            var rtl = swiper.rtl;
            var progress = swiper.progress;
            var dragSize = scrollbar.dragSize;
            var trackSize = scrollbar.trackSize;
            var $dragEl = scrollbar.$dragEl;
            var $el = scrollbar.$el;
            var params = swiper.params.scrollbar;

            var newSize = dragSize;
            var newPos = (trackSize - dragSize) * progress;
            if (rtl && swiper.isHorizontal()) {
                newPos = -newPos;
                if (newPos > 0) {
                    newSize = dragSize - newPos;
                    newPos = 0;
                } else if (-newPos + dragSize > trackSize) {
                    newSize = trackSize + newPos;
                }
            } else if (newPos < 0) {
                newSize = dragSize + newPos;
                newPos = 0;
            } else if (newPos + dragSize > trackSize) {
                newSize = trackSize - newPos;
            }
            if (swiper.isHorizontal()) {
                if (Support.transforms3d) {
                    $dragEl.transform(("translate3d(" + newPos + "px, 0, 0)"));
                } else {
                    $dragEl.transform(("translateX(" + newPos + "px)"));
                }
                $dragEl[0].style.width = newSize + "px";
            } else {
                if (Support.transforms3d) {
                    $dragEl.transform(("translate3d(0px, " + newPos + "px, 0)"));
                } else {
                    $dragEl.transform(("translateY(" + newPos + "px)"));
                }
                $dragEl[0].style.height = newSize + "px";
            }
            if (params.hide) {
                clearTimeout(swiper.scrollbar.timeout);
                $el[0].style.opacity = 1;
                swiper.scrollbar.timeout = setTimeout(function () {
                    $el[0].style.opacity = 0;
                    $el.transition(400);
                }, 1000);
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
            swiper.scrollbar.$dragEl.transition(duration);
        },
        updateSize: function updateSize() {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }

            var scrollbar = swiper.scrollbar;
            var $dragEl = scrollbar.$dragEl;
            var $el = scrollbar.$el;

            $dragEl[0].style.width = '';
            $dragEl[0].style.height = '';
            var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;

            var divider = swiper.size / swiper.virtualSize;
            var moveDivider = divider * (trackSize / swiper.size);
            var dragSize;
            if (swiper.params.scrollbar.dragSize === 'auto') {
                dragSize = trackSize * divider;
            } else {
                dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
            }

            if (swiper.isHorizontal()) {
                $dragEl[0].style.width = dragSize + "px";
            } else {
                $dragEl[0].style.height = dragSize + "px";
            }

            if (divider >= 1) {
                $el[0].style.display = 'none';
            } else {
                $el[0].style.display = '';
            }
            if (swiper.params.scrollbarHide) {
                $el[0].style.opacity = 0;
            }
            Utils.extend(scrollbar, {
                trackSize: trackSize,
                divider: divider,
                moveDivider: moveDivider,
                dragSize: dragSize,
            });
        },
        setDragPosition: function setDragPosition(e) {
            var swiper = this;
            var scrollbar = swiper.scrollbar;
            var $el = scrollbar.$el;
            var dragSize = scrollbar.dragSize;
            var moveDivider = scrollbar.moveDivider;

            var pointerPosition;
            if (swiper.isHorizontal()) {
                pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX);
            } else {
                pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY);
            }
            var position = (pointerPosition) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragSize / 2);
            var positionMin = -swiper.minTranslate() * moveDivider;
            var positionMax = -swiper.maxTranslate() * moveDivider;
            if (position < positionMin) {
                position = positionMin;
            } else if (position > positionMax) {
                position = positionMax;
            }
            if (swiper.rtl) {
                position = positionMax - position;
            }
            position = -position / moveDivider;
            swiper.updateProgress(position);
            swiper.setTranslate(position);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        },
        onDragStart: function onDragStart(e) {
            var swiper = this;
            var params = swiper.params.scrollbar;
            var scrollbar = swiper.scrollbar;
            var $wrapperEl = swiper.$wrapperEl;
            var $el = scrollbar.$el;
            var $dragEl = scrollbar.$dragEl;
            swiper.scrollbar.isTouched = true;
            e.preventDefault();
            e.stopPropagation();

            $wrapperEl.transition(100);
            $dragEl.transition(100);
            scrollbar.setDragPosition(e);

            clearTimeout(swiper.scrollbar.dragTimeout);

            $el.transition(0);
            if (params.hide) {
                $el.css('opacity', 1);
            }
            swiper.emit('scrollbarDragStart', e);
        },
        onDragMove: function onDragMove(e) {
            var swiper = this;
            var scrollbar = swiper.scrollbar;
            var $wrapperEl = swiper.$wrapperEl;
            var $el = scrollbar.$el;
            var $dragEl = scrollbar.$dragEl;

            if (!swiper.scrollbar.isTouched) { return; }
            if (e.preventDefault) { e.preventDefault(); }
            else { e.returnValue = false; }
            scrollbar.setDragPosition(e);
            $wrapperEl.transition(0);
            $el.transition(0);
            $dragEl.transition(0);
            swiper.emit('scrollbarDragMove', e);
        },
        onDragEnd: function onDragEnd(e) {
            var swiper = this;

            var params = swiper.params.scrollbar;
            var scrollbar = swiper.scrollbar;
            var $el = scrollbar.$el;

            if (!swiper.scrollbar.isTouched) { return; }
            swiper.scrollbar.isTouched = false;
            if (params.hide) {
                clearTimeout(swiper.scrollbar.dragTimeout);
                swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
                    $el.css('opacity', 0);
                    $el.transition(400);
                }, 1000);
            }
            swiper.emit('scrollbarDragEnd', e);
            if (params.snapOnRelease) {
                swiper.slideReset();
            }
        },
        enableDraggable: function enableDraggable() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) { return; }
            var scrollbar = swiper.scrollbar;
            var $el = scrollbar.$el;
            var target = Support.touch ? $el[0] : document;
            $el.on(swiper.scrollbar.dragEvents.start, swiper.scrollbar.onDragStart);
            $$1(target).on(swiper.scrollbar.dragEvents.move, swiper.scrollbar.onDragMove);
            $$1(target).on(swiper.scrollbar.dragEvents.end, swiper.scrollbar.onDragEnd);
        },
        disableDraggable: function disableDraggable() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) { return; }
            var scrollbar = swiper.scrollbar;
            var $el = scrollbar.$el;
            var target = Support.touch ? $el[0] : document;
            $el.off(swiper.scrollbar.dragEvents.start);
            $$1(target).off(swiper.scrollbar.dragEvents.move);
            $$1(target).off(swiper.scrollbar.dragEvents.end);
        },
        init: function init() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) { return; }
            var scrollbar = swiper.scrollbar;
            var $swiperEl = swiper.$el;
            var touchEvents = swiper.touchEvents;
            var params = swiper.params.scrollbar;

            var $el = $$1(params.el);
            if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
                $el = $swiperEl.find(params.el);
            }

            var $dragEl = $el.find('.swiper-scrollbar-drag');
            if ($dragEl.length === 0) {
                $dragEl = $$1('<div class="swiper-scrollbar-drag"></div>');
                $el.append($dragEl);
            }

            swiper.scrollbar.dragEvents = (function dragEvents() {
                if ((swiper.params.simulateTouch === false && !Support.touch)) {
                    return {
                        start: 'mousedown',
                        move: 'mousemove',
                        end: 'mouseup',
                    };
                }
                return touchEvents;
            }());

            Utils.extend(scrollbar, {
                $el: $el,
                el: $el[0],
                $dragEl: $dragEl,
                dragEl: $dragEl[0],
            });

            if (params.draggable) {
                scrollbar.enableDraggable();
            }
        },
        destroy: function destroy() {
            var swiper = this;
            swiper.scrollbar.disableDraggable();
        },
    };

    var Scrollbar$1 = {
        name: 'scrollbar',
        params: {
            scrollbar: {
                el: null,
                dragSize: 'auto',
                hide: false,
                draggable: false,
                snapOnRelease: true,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                scrollbar: {
                    init: Scrollbar.init.bind(swiper),
                    destroy: Scrollbar.destroy.bind(swiper),
                    updateSize: Scrollbar.updateSize.bind(swiper),
                    setTranslate: Scrollbar.setTranslate.bind(swiper),
                    setTransition: Scrollbar.setTransition.bind(swiper),
                    enableDraggable: Scrollbar.enableDraggable.bind(swiper),
                    disableDraggable: Scrollbar.disableDraggable.bind(swiper),
                    setDragPosition: Scrollbar.setDragPosition.bind(swiper),
                    onDragStart: Scrollbar.onDragStart.bind(swiper),
                    onDragMove: Scrollbar.onDragMove.bind(swiper),
                    onDragEnd: Scrollbar.onDragEnd.bind(swiper),
                    isTouched: false,
                    timeout: null,
                    dragTimeout: null,
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                swiper.scrollbar.init();
                swiper.scrollbar.updateSize();
                swiper.scrollbar.setTranslate();
            },
            update: function update() {
                var swiper = this;
                swiper.scrollbar.updateSize();
            },
            resize: function resize() {
                var swiper = this;
                swiper.scrollbar.updateSize();
            },
            observerUpdate: function observerUpdate() {
                var swiper = this;
                swiper.scrollbar.updateSize();
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                swiper.scrollbar.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                swiper.scrollbar.setTransition(duration);
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.scrollbar.destroy();
            },
        },
    };

    var Parallax = {
        setTransform: function setTransform(el, progress) {
            var swiper = this;
            var rtl = swiper.rtl;

            var $el = $$1(el);
            var rtlFactor = rtl ? -1 : 1;

            var p = $el.attr('data-swiper-parallax') || '0';
            var x = $el.attr('data-swiper-parallax-x');
            var y = $el.attr('data-swiper-parallax-y');
            var scale = $el.attr('data-swiper-parallax-scale');
            var opacity = $el.attr('data-swiper-parallax-opacity');

            if (x || y) {
                x = x || '0';
                y = y || '0';
            } else if (swiper.isHorizontal()) {
                x = p;
                y = '0';
            } else {
                y = p;
                x = '0';
            }

            if ((x).indexOf('%') >= 0) {
                x = (parseInt(x, 10) * progress * rtlFactor) + "%";
            } else {
                x = (x * progress * rtlFactor) + "px";
            }
            if ((y).indexOf('%') >= 0) {
                y = (parseInt(y, 10) * progress) + "%";
            } else {
                y = (y * progress) + "px";
            }

            if (typeof opacity !== 'undefined' && opacity !== null) {
                var currentOpacity = opacity - ((opacity - 1) * (1 - Math.abs(progress)));
                $el[0].style.opacity = currentOpacity;
            }
            if (typeof scale === 'undefined' || scale === null) {
                $el.transform(("translate3d(" + x + ", " + y + ", 0px)"));
            } else {
                var currentScale = scale - ((scale - 1) * (1 - Math.abs(progress)));
                $el.transform(("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")"));
            }
        },
        setTranslate: function setTranslate() {
            var swiper = this;
            var $el = swiper.$el;
            var slides = swiper.slides;
            var progress = swiper.progress;
            $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
                .each(function (index, el) {
                    swiper.parallax.setTransform(el, progress);
                });
            slides.each(function (slideIndex, slideEl) {
                $$1(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
                    .each(function (index, el) {
                        var slideProgress = Math.min(Math.max(slideEl.progress, -1), 1);
                        swiper.parallax.setTransform(el, slideProgress);
                    });
            });
        },
        setTransition: function setTransition(duration) {
            if ( duration === void 0 ) duration = this.params.speed;

            var swiper = this;
            var $el = swiper.$el;
            $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
                .each(function (index, parallaxEl) {
                    var $parallaxEl = $$1(parallaxEl);
                    var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
                    if (duration === 0) { parallaxDuration = 0; }
                    $parallaxEl.transition(parallaxDuration);
                });
        },
    };

    var Parallax$1 = {
        name: 'parallax',
        params: {
            parallax: {
                enabled: false,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                parallax: {
                    setTransform: Parallax.setTransform.bind(swiper),
                    setTranslate: Parallax.setTranslate.bind(swiper),
                    setTransition: Parallax.setTransition.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                swiper.params.watchSlidesProgress = true;
            },
            init: function init() {
                var swiper = this;
                if (!swiper.params.parallax) { return; }
                swiper.parallax.setTranslate();
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (!swiper.params.parallax) { return; }
                swiper.parallax.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                if (!swiper.params.parallax) { return; }
                swiper.parallax.setTransition(duration);
            },
        },
    };

    var Zoom = {
        // Calc Scale From Multi-touches
        getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
            if (e.targetTouches.length < 2) { return 1; }
            var x1 = e.targetTouches[0].pageX;
            var y1 = e.targetTouches[0].pageY;
            var x2 = e.targetTouches[1].pageX;
            var y2 = e.targetTouches[1].pageY;
            var distance = Math.sqrt((Math.pow( (x2 - x1), 2 )) + (Math.pow( (y2 - y1), 2 )));
            return distance;
        },
        // Events
        onGestureStart: function onGestureStart(e) {
            var swiper = this;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            if (!Support.gestures) {
                if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
                    return;
                }
                gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
            }
            if (!gesture.$slideEl || !gesture.$slideEl.length) {
                gesture.$slideEl = $$1(this);
                if (gesture.$slideEl.length === 0) { gesture.$slideEl = swiper.slides.eq(swiper.activeIndex); }
                gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
                gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
                gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
                if (gesture.$imageWrapEl.length === 0) {
                    gesture.$imageEl = undefined;
                    return;
                }
            }
            gesture.$imageEl.transition(0);
            swiper.zoom.isScaling = true;
        },
        onGestureChange: function onGestureChange(e) {
            var swiper = this;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            if (!Support.gestures) {
                if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
                    return;
                }
                gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
            if (Support.gestures) {
                swiper.zoom.scale = e.scale * zoom.currentScale;
            } else {
                zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
            }
            if (zoom.scale > gesture.maxRatio) {
                zoom.scale = (gesture.maxRatio - 1) + (Math.pow( ((zoom.scale - gesture.maxRatio) + 1), 0.5 ));
            }
            if (zoom.scale < params.minRatio) {
                zoom.scale = (params.minRatio + 1) - (Math.pow( ((params.minRatio - zoom.scale) + 1), 0.5 ));
            }
            gesture.$imageEl.transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
        },
        onGestureEnd: function onGestureEnd(e) {
            var swiper = this;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            if (!Support.gestures) {
                if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2)) {
                    return;
                }
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
            zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
            gesture.$imageEl.transition(swiper.params.speed).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
            zoom.currentScale = zoom.scale;
            zoom.isScaling = false;
            if (zoom.scale === 1) { gesture.$slideEl = undefined; }
        },
        onTouchStart: function onTouchStart(e) {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            var image = zoom.image;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
            if (image.isTouched) { return; }
            if (Device.android) { e.preventDefault(); }
            image.isTouched = true;
            image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
            image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
        },
        onTouchMove: function onTouchMove(e) {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            var image = zoom.image;
            var velocity = zoom.velocity;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
            swiper.allowClick = false;
            if (!image.isTouched || !gesture.$slideEl) { return; }

            if (!image.isMoved) {
                image.width = gesture.$imageEl[0].offsetWidth;
                image.height = gesture.$imageEl[0].offsetHeight;
                image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
                image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
                gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
                gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
                gesture.$imageWrapEl.transition(0);
                if (swiper.rtl) { image.startX = -image.startX; }
                if (swiper.rtl) { image.startY = -image.startY; }
            }
            // Define if we need image drag
            var scaledWidth = image.width * zoom.scale;
            var scaledHeight = image.height * zoom.scale;

            if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) { return; }

            image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
            image.maxX = -image.minX;
            image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
            image.maxY = -image.minY;

            image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
            image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

            if (!image.isMoved && !zoom.isScaling) {
                if (
                    swiper.isHorizontal() &&
                    (
                        (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x) ||
                        (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)
                    )
                ) {
                    image.isTouched = false;
                    return;
                } else if (
                    !swiper.isHorizontal() &&
                    (
                        (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y) ||
                        (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)
                    )
                ) {
                    image.isTouched = false;
                    return;
                }
            }
            e.preventDefault();
            e.stopPropagation();

            image.isMoved = true;
            image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX;
            image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY;

            if (image.currentX < image.minX) {
                image.currentX = (image.minX + 1) - (Math.pow( ((image.minX - image.currentX) + 1), 0.8 ));
            }
            if (image.currentX > image.maxX) {
                image.currentX = (image.maxX - 1) + (Math.pow( ((image.currentX - image.maxX) + 1), 0.8 ));
            }

            if (image.currentY < image.minY) {
                image.currentY = (image.minY + 1) - (Math.pow( ((image.minY - image.currentY) + 1), 0.8 ));
            }
            if (image.currentY > image.maxY) {
                image.currentY = (image.maxY - 1) + (Math.pow( ((image.currentY - image.maxY) + 1), 0.8 ));
            }

            // Velocity
            if (!velocity.prevPositionX) { velocity.prevPositionX = image.touchesCurrent.x; }
            if (!velocity.prevPositionY) { velocity.prevPositionY = image.touchesCurrent.y; }
            if (!velocity.prevTime) { velocity.prevTime = Date.now(); }
            velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
            velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
            if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) { velocity.x = 0; }
            if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) { velocity.y = 0; }
            velocity.prevPositionX = image.touchesCurrent.x;
            velocity.prevPositionY = image.touchesCurrent.y;
            velocity.prevTime = Date.now();

            gesture.$imageWrapEl.transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
        },
        onTouchEnd: function onTouchEnd() {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            var image = zoom.image;
            var velocity = zoom.velocity;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
            if (!image.isTouched || !image.isMoved) {
                image.isTouched = false;
                image.isMoved = false;
                return;
            }
            image.isTouched = false;
            image.isMoved = false;
            var momentumDurationX = 300;
            var momentumDurationY = 300;
            var momentumDistanceX = velocity.x * momentumDurationX;
            var newPositionX = image.currentX + momentumDistanceX;
            var momentumDistanceY = velocity.y * momentumDurationY;
            var newPositionY = image.currentY + momentumDistanceY;

            // Fix duration
            if (velocity.x !== 0) { momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x); }
            if (velocity.y !== 0) { momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y); }
            var momentumDuration = Math.max(momentumDurationX, momentumDurationY);

            image.currentX = newPositionX;
            image.currentY = newPositionY;

            // Define if we need image drag
            var scaledWidth = image.width * zoom.scale;
            var scaledHeight = image.height * zoom.scale;
            image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
            image.maxX = -image.minX;
            image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
            image.maxY = -image.minY;
            image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
            image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);

            gesture.$imageWrapEl.transition(momentumDuration).transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
        },
        onTransitionEnd: function onTransitionEnd() {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
                gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
                gesture.$imageWrapEl.transform('translate3d(0,0,0)');
                gesture.$slideEl = undefined;
                gesture.$imageEl = undefined;
                gesture.$imageWrapEl = undefined;

                zoom.scale = 1;
                zoom.currentScale = 1;
            }
        },
        // Toggle Zoom
        toggle: function toggle(e) {
            var swiper = this;
            var zoom = swiper.zoom;

            if (zoom.scale && zoom.scale !== 1) {
                // Zoom Out
                zoom.out();
            } else {
                // Zoom In
                zoom.in(e);
            }
        },
        in: function in$1(e) {
            var swiper = this;

            var zoom = swiper.zoom;
            var params = swiper.params.zoom;
            var gesture = zoom.gesture;
            var image = zoom.image;

            if (!gesture.$slideEl) {
                gesture.$slideEl = swiper.clickedSlide ? $$1(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
                gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
                gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

            gesture.$slideEl.addClass(("" + (params.zoomedSlideClass)));

            var touchX;
            var touchY;
            var offsetX;
            var offsetY;
            var diffX;
            var diffY;
            var translateX;
            var translateY;
            var imageWidth;
            var imageHeight;
            var scaledWidth;
            var scaledHeight;
            var translateMinX;
            var translateMinY;
            var translateMaxX;
            var translateMaxY;
            var slideWidth;
            var slideHeight;

            if (typeof image.touchesStart.x === 'undefined' && e) {
                touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
                touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
            } else {
                touchX = image.touchesStart.x;
                touchY = image.touchesStart.y;
            }

            zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
            zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
            if (e) {
                slideWidth = gesture.$slideEl[0].offsetWidth;
                slideHeight = gesture.$slideEl[0].offsetHeight;
                offsetX = gesture.$slideEl.offset().left;
                offsetY = gesture.$slideEl.offset().top;
                diffX = (offsetX + (slideWidth / 2)) - touchX;
                diffY = (offsetY + (slideHeight / 2)) - touchY;

                imageWidth = gesture.$imageEl[0].offsetWidth;
                imageHeight = gesture.$imageEl[0].offsetHeight;
                scaledWidth = imageWidth * zoom.scale;
                scaledHeight = imageHeight * zoom.scale;

                translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0);
                translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0);
                translateMaxX = -translateMinX;
                translateMaxY = -translateMinY;

                translateX = diffX * zoom.scale;
                translateY = diffY * zoom.scale;

                if (translateX < translateMinX) {
                    translateX = translateMinX;
                }
                if (translateX > translateMaxX) {
                    translateX = translateMaxX;
                }

                if (translateY < translateMinY) {
                    translateY = translateMinY;
                }
                if (translateY > translateMaxY) {
                    translateY = translateMaxY;
                }
            } else {
                translateX = 0;
                translateY = 0;
            }
            gesture.$imageWrapEl.transition(300).transform(("translate3d(" + translateX + "px, " + translateY + "px,0)"));
            gesture.$imageEl.transition(300).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
        },
        out: function out() {
            var swiper = this;

            var zoom = swiper.zoom;
            var params = swiper.params.zoom;
            var gesture = zoom.gesture;

            if (!gesture.$slideEl) {
                gesture.$slideEl = swiper.clickedSlide ? $$1(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
                gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
                gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

            zoom.scale = 1;
            zoom.currentScale = 1;
            gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
            gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
            gesture.$slideEl.removeClass(("" + (params.zoomedSlideClass)));
            gesture.$slideEl = undefined;
        },
        // Attach/Detach Events
        enable: function enable() {
            var swiper = this;
            var zoom = swiper.zoom;
            if (zoom.enabled) { return; }
            zoom.enabled = true;

            var slides = swiper.slides;

            var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

            // Scale image
            if (Support.gestures) {
                slides.on('gesturestart', zoom.onGestureStart, passiveListener);
                slides.on('gesturechange', zoom.onGestureChange, passiveListener);
                slides.on('gestureend', zoom.onGestureEnd, passiveListener);
            } else if (swiper.touchEvents.start === 'touchstart') {
                slides.on(swiper.touchEvents.start, zoom.onGestureStart, passiveListener);
                slides.on(swiper.touchEvents.move, zoom.onGestureChange, passiveListener);
                slides.on(swiper.touchEvents.end, zoom.onGestureEnd, passiveListener);
            }

            // Move image
            swiper.slides.each(function (index, slideEl) {
                var $slideEl = $$1(slideEl);
                if ($slideEl.find(("." + (swiper.params.zoom.containerClass))).length > 0) {
                    $slideEl.on(swiper.touchEvents.move, zoom.onTouchMove);
                }
            });
        },
        disable: function disable() {
            var swiper = this;
            var zoom = swiper.zoom;
            if (!zoom.enabled) { return; }

            swiper.zoom.enabled = false;

            var slides = swiper.slides;

            var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

            // Scale image
            if (Support.gestures) {
                slides.off('gesturestart', zoom.onGestureStart, passiveListener);
                slides.off('gesturechange', zoom.onGestureChange, passiveListener);
                slides.off('gestureend', zoom.onGestureEnd, passiveListener);
            } else if (swiper.touchEvents.start === 'touchstart') {
                slides.off(swiper.touchEvents.start, zoom.onGestureStart, passiveListener);
                slides.off(swiper.touchEvents.move, zoom.onGestureChange, passiveListener);
                slides.off(swiper.touchEvents.end, zoom.onGestureEnd, passiveListener);
            }

            // Move image
            swiper.slides.each(function (index, slideEl) {
                var $slideEl = $$1(slideEl);
                if ($slideEl.find(("." + (swiper.params.zoom.containerClass))).length > 0) {
                    $slideEl.off(swiper.touchEvents.move, zoom.onTouchMove);
                }
            });
        },
    };

    var Zoom$1 = {
        name: 'zoom',
        params: {
            zoom: {
                enabled: false,
                maxRatio: 3,
                minRatio: 1,
                toggle: true,
                containerClass: 'swiper-zoom-container',
                zoomedSlideClass: 'swiper-slide-zoomed',
            },
        },
        create: function create() {
            var swiper = this;
            var zoom = {
                enabled: false,
                scale: 1,
                currentScale: 1,
                isScaling: false,
                gesture: {
                    $slideEl: undefined,
                    slideWidth: undefined,
                    slideHeight: undefined,
                    $imageEl: undefined,
                    $imageWrapEl: undefined,
                    maxRatio: 3,
                },
                image: {
                    isTouched: undefined,
                    isMoved: undefined,
                    currentX: undefined,
                    currentY: undefined,
                    minX: undefined,
                    minY: undefined,
                    maxX: undefined,
                    maxY: undefined,
                    width: undefined,
                    height: undefined,
                    startX: undefined,
                    startY: undefined,
                    touchesStart: {},
                    touchesCurrent: {},
                },
                velocity: {
                    x: undefined,
                    y: undefined,
                    prevPositionX: undefined,
                    prevPositionY: undefined,
                    prevTime: undefined,
                },
            };
            ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach(function (methodName) {
                zoom[methodName] = Zoom[methodName].bind(swiper);
            });
            Utils.extend(swiper, {
                zoom: zoom,
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.zoom.enabled) {
                    swiper.zoom.enable();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.zoom.disable();
            },
            touchStart: function touchStart(e) {
                var swiper = this;
                if (!swiper.zoom.enabled) { return; }
                swiper.zoom.onTouchStart(e);
            },
            touchEnd: function touchEnd(e) {
                var swiper = this;
                if (!swiper.zoom.enabled) { return; }
                swiper.zoom.onTouchEnd(e);
            },
            doubleTap: function doubleTap(e) {
                var swiper = this;
                if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
                    swiper.zoom.toggle(e);
                }
            },
            transitionEnd: function transitionEnd() {
                var swiper = this;
                if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
                    swiper.zoom.onTransitionEnd();
                }
            },
        },
    };

    var Lazy = {
        loadInSlide: function loadInSlide(index, loadInDuplicate) {
            if ( loadInDuplicate === void 0 ) loadInDuplicate = true;

            var swiper = this;
            var params = swiper.params.lazy;
            if (typeof index === 'undefined') { return; }
            if (swiper.slides.length === 0) { return; }
            var isVirtual = swiper.virtual && swiper.params.virtual.enabled;

            var $slideEl = isVirtual
                ? swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]"))
                : swiper.slides.eq(index);

            var $images = $slideEl.find(("." + (params.elementClass) + ":not(." + (params.loadedClass) + "):not(." + (params.loadingClass) + ")"));
            if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
                $images = $images.add($slideEl[0]);
            }
            if ($images.length === 0) { return; }

            $images.each(function (imageIndex, imageEl) {
                var $imageEl = $$1(imageEl);
                $imageEl.addClass(params.loadingClass);

                var background = $imageEl.attr('data-background');
                var src = $imageEl.attr('data-src');
                var srcset = $imageEl.attr('data-srcset');
                var sizes = $imageEl.attr('data-sizes');

                swiper.loadImage($imageEl[0], (src || background), srcset, sizes, false, function () {
                    if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params)) { return; }
                    if (background) {
                        $imageEl.css('background-image', ("url(\"" + background + "\")"));
                        $imageEl.removeAttr('data-background');
                    } else {
                        if (srcset) {
                            $imageEl.attr('srcset', srcset);
                            $imageEl.removeAttr('data-srcset');
                        }
                        if (sizes) {
                            $imageEl.attr('sizes', sizes);
                            $imageEl.removeAttr('data-sizes');
                        }
                        if (src) {
                            $imageEl.attr('src', src);
                            $imageEl.removeAttr('data-src');
                        }
                    }

                    $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
                    $slideEl.find(("." + (params.preloaderClass))).remove();
                    if (swiper.params.loop && loadInDuplicate) {
                        var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
                        if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                            var originalSlide = swiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + (swiper.params.slideDuplicateClass) + ")"));
                            swiper.lazy.loadInSlide(originalSlide.index(), false);
                        } else {
                            var duplicatedSlide = swiper.$wrapperEl.children(("." + (swiper.params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]"));
                            swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
                        }
                    }
                    swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
                });

                swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
            });
        },
        load: function load() {
            var swiper = this;
            var $wrapperEl = swiper.$wrapperEl;
            var swiperParams = swiper.params;
            var slides = swiper.slides;
            var activeIndex = swiper.activeIndex;
            var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
            var params = swiperParams.lazy;

            var slidesPerView = swiperParams.slidesPerView;
            if (slidesPerView === 'auto') {
                slidesPerView = 0;
            }

            function slideExist(index) {
                if (isVirtual) {
                    if ($wrapperEl.children(("." + (swiperParams.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]")).length) {
                        return true;
                    }
                } else if (slides[index]) { return true; }
                return false;
            }
            function slideIndex(slideEl) {
                if (isVirtual) {
                    return $$1(slideEl).attr('data-swiper-slide-index');
                }
                return $$1(slideEl).index();
            }

            if (!swiper.lazy.initialImageLoaded) { swiper.lazy.initialImageLoaded = true; }
            if (swiper.params.watchSlidesVisibility) {
                $wrapperEl.children(("." + (swiperParams.slideVisibleClass))).each(function (elIndex, slideEl) {
                    var index = isVirtual ? $$1(slideEl).attr('data-swiper-slide-index') : $$1(slideEl).index();
                    swiper.lazy.loadInSlide(index);
                });
            } else if (slidesPerView > 1) {
                for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
                    if (slideExist(i)) { swiper.lazy.loadInSlide(i); }
                }
            } else {
                swiper.lazy.loadInSlide(activeIndex);
            }
            if (params.loadPrevNext) {
                if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
                    var amount = params.loadPrevNextAmount;
                    var spv = slidesPerView;
                    var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                    var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
                    // Next Slides
                    for (var i$1 = activeIndex + slidesPerView; i$1 < maxIndex; i$1 += 1) {
                        if (slideExist(i$1)) { swiper.lazy.loadInSlide(i$1); }
                    }
                    // Prev Slides
                    for (var i$2 = minIndex; i$2 < activeIndex; i$2 += 1) {
                        if (slideExist(i$2)) { swiper.lazy.loadInSlide(i$2); }
                    }
                } else {
                    var nextSlide = $wrapperEl.children(("." + (swiperParams.slideNextClass)));
                    if (nextSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(nextSlide)); }

                    var prevSlide = $wrapperEl.children(("." + (swiperParams.slidePrevClass)));
                    if (prevSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(prevSlide)); }
                }
            }
        },
    };

    var Lazy$1 = {
        name: 'lazy',
        params: {
            lazy: {
                enabled: false,
                loadPrevNext: false,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: false,

                elementClass: 'swiper-lazy',
                loadingClass: 'swiper-lazy-loading',
                loadedClass: 'swiper-lazy-loaded',
                preloaderClass: 'swiper-lazy-preloader',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                lazy: {
                    initialImageLoaded: false,
                    load: Lazy.load.bind(swiper),
                    loadInSlide: Lazy.loadInSlide.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (swiper.params.preloadImages) { swiper.params.preloadImages = false; }
            },
            init: function init() {
                var swiper = this;
                if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
                    swiper.lazy.load();
                }
            },
            scroll: function scroll() {
                var swiper = this;
                if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
                    swiper.lazy.load();
                }
            },
            resize: function resize() {
                var swiper = this;
                if (swiper.params.lazy.enabled) {
                    swiper.lazy.load();
                }
            },
            scrollbarDragMove: function scrollbarDragMove() {
                var swiper = this;
                if (swiper.params.lazy.enabled) {
                    swiper.lazy.load();
                }
            },
            transitionStart: function transitionStart() {
                var swiper = this;
                if (swiper.params.lazy.enabled) {
                    if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) {
                        swiper.lazy.load();
                    }
                }
            },
            transitionEnd: function transitionEnd() {
                var swiper = this;
                if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
                    swiper.lazy.load();
                }
            },
        },
    };

    /* eslint no-bitwise: ["error", { "allow": [">>"] }] */
    var Controller = {
        LinearSpline: function LinearSpline(x, y) {
            var binarySearch = (function search() {
                var maxIndex;
                var minIndex;
                var guess;
                return function (array, val) {
                    minIndex = -1;
                    maxIndex = array.length;
                    while (maxIndex - minIndex > 1) {
                        guess = maxIndex + minIndex >> 1;
                        if (array[guess] <= val) {
                            minIndex = guess;
                        } else {
                            maxIndex = guess;
                        }
                    }
                    return maxIndex;
                };
            }());
            this.x = x;
            this.y = y;
            this.lastIndex = x.length - 1;
            // Given an x value (x2), return the expected y2 value:
            // (x1,y1) is the known point before given value,
            // (x3,y3) is the known point after given value.
            var i1;
            var i3;

            this.interpolate = function interpolate(x2) {
                if (!x2) { return 0; }

                // Get the indexes of x1 and x3 (the array indexes before and after given x2):
                i3 = binarySearch(this.x, x2);
                i1 = i3 - 1;

                // We have our indexes i1 & i3, so we can calculate already:
                // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
                return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1])) + this.y[i1];
            };
            return this;
        },
        // xxx: for now i will just save one spline function to to
        getInterpolateFunction: function getInterpolateFunction(c) {
            var swiper = this;
            if (!swiper.controller.spline) {
                swiper.controller.spline = swiper.params.loop ?
                    new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) :
                    new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
            }
        },
        setTranslate: function setTranslate(setTranslate$1, byController) {
            var swiper = this;
            var controlled = swiper.controller.control;
            var multiplier;
            var controlledTranslate;
            function setControlledTranslate(c) {
                // this will create an Interpolate function based on the snapGrids
                // x is the Grid of the scrolled scroller and y will be the controlled scroller
                // it makes sense to create this only once and recall it for the interpolation
                // the function does a lot of value caching for performance
                var translate = c.rtl && c.params.direction === 'horizontal' ? -swiper.translate : swiper.translate;
                if (swiper.params.controller.by === 'slide') {
                    swiper.controller.getInterpolateFunction(c);
                    // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                    // but it did not work out
                    controlledTranslate = -swiper.controller.spline.interpolate(-translate);
                }

                if (!controlledTranslate || swiper.params.controller.by === 'container') {
                    multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                    controlledTranslate = ((translate - swiper.minTranslate()) * multiplier) + c.minTranslate();
                }

                if (swiper.params.controller.inverse) {
                    controlledTranslate = c.maxTranslate() - controlledTranslate;
                }
                c.updateProgress(controlledTranslate);
                c.setTranslate(controlledTranslate, swiper);
                c.updateActiveIndex();
                c.updateSlidesClasses();
            }
            if (Array.isArray(controlled)) {
                for (var i = 0; i < controlled.length; i += 1) {
                    if (controlled[i] !== byController && controlled[i] instanceof Swiper$1) {
                        setControlledTranslate(controlled[i]);
                    }
                }
            } else if (controlled instanceof Swiper$1 && byController !== controlled) {
                setControlledTranslate(controlled);
            }
        },
        setTransition: function setTransition(duration, byController) {
            var swiper = this;
            var controlled = swiper.controller.control;
            var i;
            function setControlledTransition(c) {
                c.setTransition(duration, swiper);
                if (duration !== 0) {
                    c.transitionStart();
                    c.$wrapperEl.transitionEnd(function () {
                        if (!controlled) { return; }
                        if (c.params.loop && swiper.params.controller.by === 'slide') {
                            c.loopFix();
                        }
                        c.transitionEnd();
                    });
                }
            }
            if (Array.isArray(controlled)) {
                for (i = 0; i < controlled.length; i += 1) {
                    if (controlled[i] !== byController && controlled[i] instanceof Swiper$1) {
                        setControlledTransition(controlled[i]);
                    }
                }
            } else if (controlled instanceof Swiper$1 && byController !== controlled) {
                setControlledTransition(controlled);
            }
        },
    };
    var Controller$1 = {
        name: 'controller',
        params: {
            controller: {
                control: undefined,
                inverse: false,
                by: 'slide', // or 'container'
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                controller: {
                    control: swiper.params.controller.control,
                    getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
                    setTranslate: Controller.setTranslate.bind(swiper),
                    setTransition: Controller.setTransition.bind(swiper),
                },
            });
        },
        on: {
            update: function update() {
                var swiper = this;
                if (!swiper.controller.control) { return; }
                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            },
            resize: function resize() {
                var swiper = this;
                if (!swiper.controller.control) { return; }
                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            },
            observerUpdate: function observerUpdate() {
                var swiper = this;
                if (!swiper.controller.control) { return; }
                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            },
            setTranslate: function setTranslate(translate, byController) {
                var swiper = this;
                if (!swiper.controller.control) { return; }
                swiper.controller.setTranslate(translate, byController);
            },
            setTransition: function setTransition(duration, byController) {
                var swiper = this;
                if (!swiper.controller.control) { return; }
                swiper.controller.setTransition(duration, byController);
            },
        },
    };

    var a11y = {
        makeElFocusable: function makeElFocusable($el) {
            $el.attr('tabIndex', '0');
            return $el;
        },
        addElRole: function addElRole($el, role) {
            $el.attr('role', role);
            return $el;
        },
        addElLabel: function addElLabel($el, label) {
            $el.attr('aria-label', label);
            return $el;
        },
        disableEl: function disableEl($el) {
            $el.attr('aria-disabled', true);
            return $el;
        },
        enableEl: function enableEl($el) {
            $el.attr('aria-disabled', false);
            return $el;
        },
        onEnterKey: function onEnterKey(e) {
            var swiper = this;
            var params = swiper.params.a11y;
            if (e.keyCode !== 13) { return; }
            var $targetEl = $$1(e.target);
            if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
                if (!(swiper.isEnd && !swiper.params.loop)) {
                    swiper.slideNext();
                }
                if (swiper.isEnd) {
                    swiper.a11y.notify(params.lastSlideMessage);
                } else {
                    swiper.a11y.notify(params.nextSlideMessage);
                }
            }
            if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
                if (!(swiper.isBeginning && !swiper.params.loop)) {
                    swiper.slidePrev();
                }
                if (swiper.isBeginning) {
                    swiper.a11y.notify(params.firstSlideMessage);
                } else {
                    swiper.a11y.notify(params.prevSlideMessage);
                }
            }
            if (swiper.pagination && $targetEl.is(("." + (swiper.params.pagination.bulletClass)))) {
                $targetEl[0].click();
            }
        },
        notify: function notify(message) {
            var swiper = this;
            var notification = swiper.a11y.liveRegion;
            if (notification.length === 0) { return; }
            notification.html('');
            notification.html(message);
        },
        updateNavigation: function updateNavigation() {
            var swiper = this;

            if (swiper.params.loop) { return; }
            var ref = swiper.navigation;
            var $nextEl = ref.$nextEl;
            var $prevEl = ref.$prevEl;

            if ($prevEl && $prevEl.length > 0) {
                if (swiper.isBeginning) {
                    swiper.a11y.disableEl($prevEl);
                } else {
                    swiper.a11y.enableEl($prevEl);
                }
            }
            if ($nextEl && $nextEl.length > 0) {
                if (swiper.isEnd) {
                    swiper.a11y.disableEl($nextEl);
                } else {
                    swiper.a11y.enableEl($nextEl);
                }
            }
        },
        updatePagination: function updatePagination() {
            var swiper = this;
            var params = swiper.params.a11y;
            if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
                swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
                    var $bulletEl = $$1(bulletEl);
                    swiper.a11y.makeElFocusable($bulletEl);
                    swiper.a11y.addElRole($bulletEl, 'button');
                    swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
                });
            }
        },
        init: function init() {
            var swiper = this;

            swiper.$el.append(swiper.a11y.liveRegion);

            // Navigation
            var params = swiper.params.a11y;
            var $nextEl;
            var $prevEl;
            if (swiper.navigation && swiper.navigation.$nextEl) {
                $nextEl = swiper.navigation.$nextEl;
            }
            if (swiper.navigation && swiper.navigation.$prevEl) {
                $prevEl = swiper.navigation.$prevEl;
            }
            if ($nextEl) {
                swiper.a11y.makeElFocusable($nextEl);
                swiper.a11y.addElRole($nextEl, 'button');
                swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
                $nextEl.on('keydown', swiper.a11y.onEnterKey);
            }
            if ($prevEl) {
                swiper.a11y.makeElFocusable($prevEl);
                swiper.a11y.addElRole($prevEl, 'button');
                swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
                $prevEl.on('keydown', swiper.a11y.onEnterKey);
            }

            // Pagination
            if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
                swiper.pagination.$el.on('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
            }
        },
        destroy: function destroy() {
            var swiper = this;
            if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) { swiper.a11y.liveRegion.remove(); }

            var $nextEl;
            var $prevEl;
            if (swiper.navigation && swiper.navigation.$nextEl) {
                $nextEl = swiper.navigation.$nextEl;
            }
            if (swiper.navigation && swiper.navigation.$prevEl) {
                $prevEl = swiper.navigation.$prevEl;
            }
            if ($nextEl) {
                $nextEl.off('keydown', swiper.a11y.onEnterKey);
            }
            if ($prevEl) {
                $prevEl.off('keydown', swiper.a11y.onEnterKey);
            }

            // Pagination
            if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
                swiper.pagination.$el.off('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
            }
        },
    };
    var A11y = {
        name: 'a11y',
        params: {
            a11y: {
                enabled: false,
                notificationClass: 'swiper-notification',
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
                firstSlideMessage: 'This is the first slide',
                lastSlideMessage: 'This is the last slide',
                paginationBulletMessage: 'Go to slide {{index}}',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                a11y: {
                    liveRegion: $$1(("<span class=\"" + (swiper.params.a11y.notificationClass) + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")),
                },
            });
            Object.keys(a11y).forEach(function (methodName) {
                swiper.a11y[methodName] = a11y[methodName].bind(swiper);
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (!swiper.params.a11y.enabled) { return; }
                swiper.a11y.init();
                swiper.a11y.updateNavigation();
            },
            toEdge: function toEdge() {
                var swiper = this;
                if (!swiper.params.a11y.enabled) { return; }
                swiper.a11y.updateNavigation();
            },
            fromEdge: function fromEdge() {
                var swiper = this;
                if (!swiper.params.a11y.enabled) { return; }
                swiper.a11y.updateNavigation();
            },
            paginationUpdate: function paginationUpdate() {
                var swiper = this;
                if (!swiper.params.a11y.enabled) { return; }
                swiper.a11y.updatePagination();
            },
            destroy: function destroy() {
                var swiper = this;
                if (!swiper.params.a11y.enabled) { return; }
                swiper.a11y.destroy();
            },
        },
    };

    var History = {
        init: function init() {
            var swiper = this;
            if (!swiper.params.history) { return; }
            if (!win.history || !win.history.pushState) {
                swiper.params.history.enabled = false;
                swiper.params.hashNavigation.enabled = true;
                return;
            }
            var history = swiper.history;
            history.initialized = true;
            history.paths = History.getPathValues();
            if (!history.paths.key && !history.paths.value) { return; }
            history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
            if (!swiper.params.history.replaceState) {
                win.addEventListener('popstate', swiper.history.setHistoryPopState);
            }
        },
        destroy: function destroy() {
            var swiper = this;
            if (!swiper.params.history.replaceState) {
                win.removeEventListener('popstate', swiper.history.setHistoryPopState);
            }
        },
        setHistoryPopState: function setHistoryPopState() {
            var swiper = this;
            swiper.history.paths = History.getPathValues();
            swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
        },
        getPathValues: function getPathValues() {
            var pathArray = win.location.pathname.slice(1).split('/');
            var total = pathArray.length;
            var key = pathArray[total - 2];
            var value = pathArray[total - 1];
            return { key: key, value: value };
        },
        setHistory: function setHistory(key, index) {
            var swiper = this;
            if (!swiper.history.initialized || !swiper.params.history.enabled) { return; }
            var slide = swiper.slides.eq(index);
            var value = History.slugify(slide.attr('data-history'));
            if (!win.location.pathname.includes(key)) {
                value = key + "/" + value;
            }
            var currentState = win.history.state;
            if (currentState && currentState.value === value) {
                return;
            }
            if (swiper.params.history.replaceState) {
                win.history.replaceState({ value: value }, null, value);
            } else {
                win.history.pushState({ value: value }, null, value);
            }
        },
        slugify: function slugify(text) {
            return text.toString().toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^\w-]+/g, '')
                .replace(/--+/g, '-')
                .replace(/^-+/, '')
                .replace(/-+$/, '');
        },
        scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
            var swiper = this;
            if (value) {
                for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
                    var slide = swiper.slides.eq(i);
                    var slideHistory = History.slugify(slide.attr('data-history'));
                    if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                        var index = slide.index();
                        swiper.slideTo(index, speed, runCallbacks);
                    }
                }
            } else {
                swiper.slideTo(0, speed, runCallbacks);
            }
        },
    };

    var History$1 = {
        name: 'history',
        params: {
            history: {
                enabled: false,
                replaceState: false,
                key: 'slides',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                history: {
                    init: History.init.bind(swiper),
                    setHistory: History.setHistory.bind(swiper),
                    setHistoryPopState: History.setHistoryPopState.bind(swiper),
                    scrollToSlide: History.scrollToSlide.bind(swiper),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.history.enabled) {
                    swiper.history.init();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                if (swiper.params.history.enabled) {
                    swiper.history.destroy();
                }
            },
            transitionEnd: function transitionEnd() {
                var swiper = this;
                if (swiper.history.initialized) {
                    swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
                }
            },
        },
    };

    var HashNavigation = {
        onHashCange: function onHashCange() {
            var swiper = this;
            var newHash = doc.location.hash.replace('#', '');
            var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
            if (newHash !== activeSlideHash) {
                swiper.slideTo(swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-hash=\"" + newHash + "\"]")).index());
            }
        },
        setHash: function setHash() {
            var swiper = this;
            if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) { return; }
            if (swiper.params.hashNavigation.replaceState && win.history && win.history.replaceState) {
                win.history.replaceState(null, null, (("#" + (swiper.slides.eq(swiper.activeIndex).attr('data-hash'))) || ''));
            } else {
                var slide = swiper.slides.eq(swiper.activeIndex);
                var hash = slide.attr('data-hash') || slide.attr('data-history');
                doc.location.hash = hash || '';
            }
        },
        init: function init() {
            var swiper = this;
            if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) { return; }
            swiper.hashNavigation.initialized = true;
            var hash = doc.location.hash.replace('#', '');
            if (hash) {
                var speed = 0;
                for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
                    var slide = swiper.slides.eq(i);
                    var slideHash = slide.attr('data-hash') || slide.attr('data-history');
                    if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                        var index = slide.index();
                        swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
                    }
                }
            }
            if (swiper.params.hashNavigation.watchState) {
                $$1(win).on('hashchange', swiper.hashNavigation.onHashCange);
            }
        },
        destroy: function destroy() {
            var swiper = this;
            if (swiper.params.hashNavigation.watchState) {
                $$1(win).off('hashchange', swiper.hashNavigation.onHashCange);
            }
        },
    };
    var HashNavigation$1 = {
        name: 'hash-navigation',
        params: {
            hashNavigation: {
                enabled: false,
                replaceState: false,
                watchState: false,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                hashNavigation: {
                    initialized: false,
                    init: HashNavigation.init.bind(swiper),
                    destroy: HashNavigation.destroy.bind(swiper),
                    setHash: HashNavigation.setHash.bind(swiper),
                    onHashCange: HashNavigation.onHashCange.bind(swiper),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.hashNavigation.enabled) {
                    swiper.hashNavigation.init();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                if (swiper.params.hashNavigation.enabled) {
                    swiper.hashNavigation.destroy();
                }
            },
            transitionEnd: function transitionEnd() {
                var swiper = this;
                if (swiper.hashNavigation.initialized) {
                    swiper.hashNavigation.setHash();
                }
            },
        },
    };

    var Autoplay = {
        run: function run() {
            var swiper = this;
            var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
            var delay = swiper.params.autoplay.delay;
            if ($activeSlideEl.attr('data-swiper-autoplay')) {
                delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
            }
            swiper.autoplay.timeout = Utils.nextTick(function () {
                if (swiper.params.loop) {
                    swiper.loopFix();
                    swiper.slideNext(swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else if (!swiper.isEnd) {
                    swiper.slideNext(swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    swiper.slideTo(0, swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else {
                    swiper.autoplay.stop();
                }
            }, delay);
        },
        start: function start() {
            var swiper = this;
            if (typeof swiper.autoplay.timeout !== 'undefined') { return false; }
            if (swiper.autoplay.running) { return false; }
            swiper.autoplay.running = true;
            swiper.emit('autoplayStart');
            swiper.autoplay.run();
            return true;
        },
        stop: function stop() {
            var swiper = this;
            if (!swiper.autoplay.running) { return false; }
            if (typeof swiper.autoplay.timeout === 'undefined') { return false; }

            if (swiper.autoplay.timeout) {
                clearTimeout(swiper.autoplay.timeout);
                swiper.autoplay.timeout = undefined;
            }
            swiper.autoplay.running = false;
            swiper.emit('autoplayStop');
            return true;
        },
        pause: function pause(speed) {
            var swiper = this;
            if (!swiper.autoplay.running) { return; }
            if (swiper.autoplay.paused) { return; }
            if (swiper.autoplay.timeout) { clearTimeout(swiper.autoplay.timeout); }
            swiper.autoplay.paused = true;
            if (speed === 0) {
                swiper.autoplay.paused = false;
                swiper.autoplay.run();
            } else {
                swiper.$wrapperEl.transitionEnd(function () {
                    if (!swiper) { return; }
                    swiper.autoplay.paused = false;
                    if (!swiper.autoplay.running) {
                        swiper.autoplay.stop();
                    } else {
                        swiper.autoplay.run();
                    }
                });
            }
        },
    };

    var Autoplay$1 = {
        name: 'autoplay',
        params: {
            autoplay: {
                enabled: false,
                delay: 3000,
                disableOnInteraction: true,
                stopOnLastSlide: false,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                autoplay: {
                    running: false,
                    paused: false,
                    run: Autoplay.run.bind(swiper),
                    start: Autoplay.start.bind(swiper),
                    stop: Autoplay.stop.bind(swiper),
                    pause: Autoplay.pause.bind(swiper),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.autoplay.enabled) {
                    swiper.autoplay.start();
                }
            },
            beforeTransitionStart: function beforeTransitionStart(speed, internal) {
                var swiper = this;
                if (swiper.autoplay.running) {
                    if (internal || !swiper.params.autoplay.disableOnInteraction) {
                        swiper.autoplay.pause(speed);
                    } else {
                        swiper.autoplay.stop();
                    }
                }
            },
            sliderFirstMove: function sliderFirstMove() {
                var swiper = this;
                if (swiper.autoplay.running) {
                    if (swiper.params.autoplay.disableOnInteraction) {
                        swiper.autoplay.stop();
                    } else {
                        swiper.autoplay.pause();
                    }
                }
            },
            destroy: function destroy() {
                var swiper = this;
                if (swiper.autoplay.running) {
                    swiper.autoplay.stop();
                }
            },
        },
    };

    var Fade = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var slides = swiper.slides;
            for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = swiper.slides.eq(i);
                var offset = $slideEl[0].swiperSlideOffset;
                var tx = -offset;
                if (!swiper.params.virtualTranslate) { tx -= swiper.translate; }
                var ty = 0;
                if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                }
                var slideOpacity = swiper.params.fadeEffect.crossFade ?
                    Math.max(1 - Math.abs($slideEl[0].progress), 0) :
                    1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                $slideEl
                    .css({
                        opacity: slideOpacity,
                    })
                    .transform(("translate3d(" + tx + "px, " + ty + "px, 0px)"));
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            var slides = swiper.slides;
            var $wrapperEl = swiper.$wrapperEl;
            slides.transition(duration);
            if (swiper.params.virtualTranslate && duration !== 0) {
                var eventTriggered = false;
                slides.transitionEnd(function () {
                    if (eventTriggered) { return; }
                    if (!swiper) { return; }
                    eventTriggered = true;
                    swiper.animating = false;
                    var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                    for (var i = 0; i < triggerEvents.length; i += 1) {
                        $wrapperEl.trigger(triggerEvents[i]);
                    }
                });
            }
        },
    };

    var EffectFade = {
        name: 'effect-fade',
        params: {
            fadeEffect: {
                crossFade: false,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                fadeEffect: {
                    setTranslate: Fade.setTranslate.bind(swiper),
                    setTransition: Fade.setTransition.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (swiper.params.effect !== 'fade') { return; }
                swiper.classNames.push(((swiper.params.containerModifierClass) + "fade"));
                Utils.extend(swiper.params, {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    spaceBetween: 0,
                    virtualTranslate: true,
                });
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (swiper.params.effect !== 'fade') { return; }
                swiper.fadeEffect.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                if (swiper.params.effect !== 'fade') { return; }
                swiper.fadeEffect.setTransition(duration);
            },
        },
    };

    var Cube = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var $el = swiper.$el;
            var $wrapperEl = swiper.$wrapperEl;
            var slides = swiper.slides;
            var swiperWidth = swiper.width;
            var swiperHeight = swiper.height;
            var rtl = swiper.rtl;
            var swiperSize = swiper.size;
            var params = swiper.params.cubeEffect;
            var isHorizontal = swiper.isHorizontal();
            var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            var wrapperRotate = 0;
            var $cubeShadowEl;
            if (params.shadow) {
                if (isHorizontal) {
                    $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
                    if ($cubeShadowEl.length === 0) {
                        $cubeShadowEl = $$1('<div class="swiper-cube-shadow"></div>');
                        $wrapperEl.append($cubeShadowEl);
                    }
                    $cubeShadowEl.css({ height: (swiperWidth + "px") });
                } else {
                    $cubeShadowEl = $el.find('.swiper-cube-shadow');
                    if ($cubeShadowEl.length === 0) {
                        $cubeShadowEl = $$1('<div class="swiper-cube-shadow"></div>');
                        $el.append($cubeShadowEl);
                    }
                }
            }
            for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = slides.eq(i);
                var slideIndex = i;
                if (isVirtual) {
                    slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
                }
                var slideAngle = slideIndex * 90;
                var round = Math.floor(slideAngle / 360);
                if (rtl) {
                    slideAngle = -slideAngle;
                    round = Math.floor(-slideAngle / 360);
                }
                var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                var tx = 0;
                var ty = 0;
                var tz = 0;
                if (slideIndex % 4 === 0) {
                    tx = -round * 4 * swiperSize;
                    tz = 0;
                } else if ((slideIndex - 1) % 4 === 0) {
                    tx = 0;
                    tz = -round * 4 * swiperSize;
                } else if ((slideIndex - 2) % 4 === 0) {
                    tx = swiperSize + (round * 4 * swiperSize);
                    tz = swiperSize;
                } else if ((slideIndex - 3) % 4 === 0) {
                    tx = -swiperSize;
                    tz = (3 * swiperSize) + (swiperSize * 4 * round);
                }
                if (rtl) {
                    tx = -tx;
                }

                if (!isHorizontal) {
                    ty = tx;
                    tx = 0;
                }

                var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
                if (progress <= 1 && progress > -1) {
                    wrapperRotate = (slideIndex * 90) + (progress * 90);
                    if (rtl) { wrapperRotate = (-slideIndex * 90) - (progress * 90); }
                }
                $slideEl.transform(transform);
                if (params.slideShadows) {
                    // Set shadows
                    var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                    if (shadowBefore.length === 0) {
                        shadowBefore = $$1(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
                        $slideEl.append(shadowBefore);
                    }
                    if (shadowAfter.length === 0) {
                        shadowAfter = $$1(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
                        $slideEl.append(shadowAfter);
                    }
                    if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
                    if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
                }
            }
            $wrapperEl.css({
                '-webkit-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
                '-moz-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
                '-ms-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
                'transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
            });

            if (params.shadow) {
                if (isHorizontal) {
                    $cubeShadowEl.transform(("translate3d(0px, " + ((swiperWidth / 2) + params.shadowOffset) + "px, " + (-swiperWidth / 2) + "px) rotateX(90deg) rotateZ(0deg) scale(" + (params.shadowScale) + ")"));
                } else {
                    var shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
                    var multiplier = 1.5 - (
                        (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2) +
                        (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
                    );
                    var scale1 = params.shadowScale;
                    var scale2 = params.shadowScale / multiplier;
                    var offset = params.shadowOffset;
                    $cubeShadowEl.transform(("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + ((swiperHeight / 2) + offset) + "px, " + (-swiperHeight / 2 / scale2) + "px) rotateX(-90deg)"));
                }
            }
            var zFactor = (Browser.isSafari || Browser.isUiWebView) ? (-swiperSize / 2) : 0;
            $wrapperEl
                .transform(("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)"));
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            var $el = swiper.$el;
            var slides = swiper.slides;
            slides
                .transition(duration)
                .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                .transition(duration);
            if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                $el.find('.swiper-cube-shadow').transition(duration);
            }
        },
    };

    var EffectCube = {
        name: 'effect-cube',
        params: {
            cubeEffect: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                cubeEffect: {
                    setTranslate: Cube.setTranslate.bind(swiper),
                    setTransition: Cube.setTransition.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (swiper.params.effect !== 'cube') { return; }
                swiper.classNames.push(((swiper.params.containerModifierClass) + "cube"));
                swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
                Utils.extend(swiper.params, {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: false,
                    virtualTranslate: true,
                });
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (swiper.params.effect !== 'cube') { return; }
                swiper.cubeEffect.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                if (swiper.params.effect !== 'cube') { return; }
                swiper.cubeEffect.setTransition(duration);
            },
        },
    };

    var Flip = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var slides = swiper.slides;
            for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = slides.eq(i);
                var progress = $slideEl[0].progress;
                if (swiper.params.flipEffect.limitRotation) {
                    progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                }
                var offset = $slideEl[0].swiperSlideOffset;
                var rotate = -180 * progress;
                var rotateY = rotate;
                var rotateX = 0;
                var tx = -offset;
                var ty = 0;
                if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                    rotateX = -rotateY;
                    rotateY = 0;
                } else if (swiper.rtl) {
                    rotateY = -rotateY;
                }

                $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

                if (swiper.params.flipEffect.slideShadows) {
                    // Set shadows
                    var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                    if (shadowBefore.length === 0) {
                        shadowBefore = $$1(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>"));
                        $slideEl.append(shadowBefore);
                    }
                    if (shadowAfter.length === 0) {
                        shadowAfter = $$1(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>"));
                        $slideEl.append(shadowAfter);
                    }
                    if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
                    if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
                }

                $slideEl
                    .transform(("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"));
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            var slides = swiper.slides;
            var activeIndex = swiper.activeIndex;
            var $wrapperEl = swiper.$wrapperEl;
            slides
                .transition(duration)
                .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                .transition(duration);
            if (swiper.params.virtualTranslate && duration !== 0) {
                var eventTriggered = false;
                slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
                    if (eventTriggered) { return; }
                    if (!swiper) { return; }
                    if (!$$1(this).hasClass(swiper.params.slideActiveClass)) { return; }
                    eventTriggered = true;
                    swiper.animating = false;
                    var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                    for (var i = 0; i < triggerEvents.length; i += 1) {
                        $wrapperEl.trigger(triggerEvents[i]);
                    }
                });
            }
        },
    };

    var EffectFlip = {
        name: 'effect-flip',
        params: {
            flipEffect: {
                slideShadows: true,
                limitRotation: true,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                flipEffect: {
                    setTranslate: Flip.setTranslate.bind(swiper),
                    setTransition: Flip.setTransition.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (swiper.params.effect !== 'flip') { return; }
                swiper.classNames.push(((swiper.params.containerModifierClass) + "flip"));
                swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
                Utils.extend(swiper.params, {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    spaceBetween: 0,
                    virtualTranslate: true,
                });
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (swiper.params.effect !== 'flip') { return; }
                swiper.flipEffect.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                if (swiper.params.effect !== 'flip') { return; }
                swiper.flipEffect.setTransition(duration);
            },
        },
    };

    var Coverflow = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var swiperWidth = swiper.width;
            var swiperHeight = swiper.height;
            var slides = swiper.slides;
            var $wrapperEl = swiper.$wrapperEl;
            var slidesSizesGrid = swiper.slidesSizesGrid;
            var params = swiper.params.coverflowEffect;
            var isHorizontal = swiper.isHorizontal();
            var transform = swiper.translate;
            var center = isHorizontal ? -transform + (swiperWidth / 2) : -transform + (swiperHeight / 2);
            var rotate = isHorizontal ? params.rotate : -params.rotate;
            var translate = params.depth;
            // Each slide offset from center
            for (var i = 0, length = slides.length; i < length; i += 1) {
                var $slideEl = slides.eq(i);
                var slideSize = slidesSizesGrid[i];
                var slideOffset = $slideEl[0].swiperSlideOffset;
                var offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

                var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                // var rotateZ = 0
                var translateZ = -translate * Math.abs(offsetMultiplier);

                var translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
                var translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

                // Fix for ultra small values
                if (Math.abs(translateX) < 0.001) { translateX = 0; }
                if (Math.abs(translateY) < 0.001) { translateY = 0; }
                if (Math.abs(translateZ) < 0.001) { translateZ = 0; }
                if (Math.abs(rotateY) < 0.001) { rotateY = 0; }
                if (Math.abs(rotateX) < 0.001) { rotateX = 0; }

                var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";

                $slideEl.transform(slideTransform);
                $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                if (params.slideShadows) {
                    // Set shadows
                    var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                    if ($shadowBeforeEl.length === 0) {
                        $shadowBeforeEl = $$1(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
                        $slideEl.append($shadowBeforeEl);
                    }
                    if ($shadowAfterEl.length === 0) {
                        $shadowAfterEl = $$1(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
                        $slideEl.append($shadowAfterEl);
                    }
                    if ($shadowBeforeEl.length) { $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0; }
                    if ($shadowAfterEl.length) { $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0; }
                }
            }

            // Set correct perspective for IE10
            if (Browser.ie) {
                var ws = $wrapperEl[0].style;
                ws.perspectiveOrigin = center + "px 50%";
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            swiper.slides
                .transition(duration)
                .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                .transition(duration);
        },
    };

    var EffectCoverflow = {
        name: 'effect-coverflow',
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                coverflowEffect: {
                    setTranslate: Coverflow.setTranslate.bind(swiper),
                    setTransition: Coverflow.setTransition.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (swiper.params.effect !== 'coverflow') { return; }

                swiper.classNames.push(((swiper.params.containerModifierClass) + "coverflow"));
                swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));

                swiper.params.watchSlidesProgress = true;
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (swiper.params.effect !== 'coverflow') { return; }
                swiper.coverflowEffect.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                if (swiper.params.effect !== 'coverflow') { return; }
                swiper.coverflowEffect.setTransition(duration);
            },
        },
    };

// Swiper Class
// Core Modules
    Swiper$1.components = [
        Device$2,
        Support$2,
        Browser$2,
        Resize,
        Observer$1,
        Virtual$1,
        Keyboard$1,
        Mousewheel$1,
        Navigation$1,
        Pagination$1,
        Scrollbar$1,
        Parallax$1,
        Zoom$1,
        Lazy$1,
        Controller$1,
        A11y,
        History$1,
        HashNavigation$1,
        Autoplay$1,
        EffectFade,
        EffectCube,
        EffectFlip,
        EffectCoverflow
    ];

    return Swiper$1;

})));
let $window, $document, $html;


let pageApp = {
    'init': function(){
        let $thisApp = $('#app');
        let curApp = $thisApp.attr('data-app');
        this.globalPollifil();
        if (pageApp[curApp]) { pageApp[curApp]($thisApp); }
    },
    'page-address':function($thisApp){
        let $mapPlace = $thisApp.find('[data-target="ymap"]');
        ymaps.ready(function() {

            let mapLat = 55.751244;
            let mapLng = 37.618423;
            let mapZoom = 16;

            let map = new ymaps.Map($mapPlace[0], {
                center: [mapLat, mapLng],
                zoom: mapZoom,
                type: 'yandex#publicMap',
                controls: [],
                behaviors: ['drag', 'dblClickZoom']
            });

            map.controls.add(
                new ymaps.control.ZoomControl(),
                {
                    float: "none",
                    position: {
                        top: 30,
                        right: 30
                    }
                }
            );

            let marker = new ymaps.Placemark(map.getCenter(), {

            }, {
                iconLayout: 'default#image',
                iconImageHref: '/assets/img/map-pin.png',
                iconImageSize: [50,64],
                hideIconOnBalloonOpen: false
            });



            map.geoObjects.add(marker);


        });
    },
    'globalPollifil': function(){
        if (!('classList' in document.documentElement) && Object.defineProperty && typeof HTMLElement !== 'undefined') {
            Object.defineProperty(HTMLElement.prototype, 'classList', {
                get: function() {
                    let self = this;

                    function update(fn) {
                        return function(value) {
                            let classes = self.className.split(/\s+/);
                            let index = classes.indexOf(value);

                            fn(classes, index, value);
                            self.className = classes.join(' ');
                        };
                    }

                    let ret = {
                        add: update(function(classes, index, value) {
                            ~index || classes.push(value);
                        }),

                        remove: update(function(classes, index) {
                            ~index && classes.splice(index, 1);
                        }),

                        toggle: update(function(classes, index, value) {
                            ~index ? classes.splice(index, 1) : classes.push(value);
                        }),

                        contains: function(value) {
                            return !!~self.className.split(/\s+/).indexOf(value);
                        },

                        item: function(i) {
                            return self.className.split(/\s+/)[i] || null;
                        }
                    };

                    Object.defineProperty(ret, 'length', {
                        get: function() {
                            return self.className.split(/\s+/).length;
                        }
                    });

                    return ret;
                }
            });
        }

        (function() {
            let lastTime = 0;
            let vendors = ['ms', 'moz', 'webkit', 'o'];
            for(let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
                window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                    || window[vendors[x]+'CancelRequestAnimationFrame'];
            }

            if (!window.requestAnimationFrame)
                window.requestAnimationFrame = function(callback, element) {
                    let currTime = new Date().getTime();
                    let timeToCall = Math.max(0, 16 - (currTime - lastTime));
                    let id = window.setTimeout(function() { callback(currTime + timeToCall); },
                        timeToCall);
                    lastTime = currTime + timeToCall;
                    return id;
                };

            if (!window.cancelAnimationFrame)
                window.cancelAnimationFrame = function(id) {
                    clearTimeout(id);
                };
        }());
    },
};

let moduleApp = {
    'init': function () {
        this.resizeGlobal();
        this.resizeLogo();
        this.executeModules();
        this.executeSFX();
        this.globalActions();
        this.toolsGlobalSubscribe();
        this.pageLoader();
        this.startupMessage();
        this.initSlider();
        this.pagePilingInit();

    },
    'executeModules':function(){
        $('[data-is]').each(function(i,thisModule){
            let $thisModule = $(thisModule);
            let thisModuleName = $thisModule.attr('data-is');
            if(moduleApp[thisModuleName]) { moduleApp[thisModuleName]($thisModule); }
        });
    },
    'executeSFX':function(){
        if (appConfig.mobileVersion || device.tablet()) { return false; }
        $('[data-sfx]').each(function(i,thisModule){
            let $thisModule = $(thisModule);
            let thisModuleName = $thisModule.attr('data-sfx');
            if(moduleApp.SFXModules[thisModuleName]) { moduleApp.SFXModules[thisModuleName]($thisModule); }
        });
    },
    'globalActions':function(){

        //tabs
        $('.js-tabs-controls').on('click', function(e){
            e.preventDefault();

            let $this = $(this),
                $item = $this.closest('.tabs-controls-item'),
                $parent = $this.closest('.js-tabs-wrapper'),
                $contentItem = $parent.find('.js-tabs-item'),
                itemNumber = $item.index();

            $contentItem.eq(itemNumber)
                .add($item)
                .addClass('active')
                .siblings()
                .removeClass('active');

            let $perent = $this.parents('.window-direction');
            if($(document).width() > 900) {
                if ($this.hasClass('js-price')) {
                    $perent.addClass('full-screen__container');
                }
                else {
                    $perent.removeClass('full-screen__container');
                }
            }
        });

        //accordions
        $('.js-accordion-trigger').on('click', function(e){
            e.preventDefault();

            let
                $this = $(this),
                item = $this.closest('.accordion-item'),
                list = $this.closest('.accordion-list'),
                items = list.find('.accordion-item'),
                content = item.find('.accordion-inner'),
                otherContent = list.find('.accordion-inner'),
                duration = 300;

            if (!item.hasClass('active')) {
                items.removeClass('active');
                item.addClass('active');

                otherContent.stop(true, true).slideUp(duration);
                content.stop(true, true).slideDown(duration);

            } else {
                content.stop(true, true).slideUp(duration);
                item.removeClass('active');
            }

        });


        //button menu
        $('.js-m-btn-menu').on('click', function(e){
           e.preventDefault();

           let $this = $(this);

            $this.toggleClass('active');

            $('body').toggleClass('openMenu');
        });

        //init menu section
        $('#myMenu .menu-link').on('click', function(){
            $('body').toggleClass('openMenu');
            $('.js-m-btn-menu').toggleClass('active');
        });

        //pop-up form sign
        $('.js-sign').on('click', function(){
            let template = $('.js-form-sigh').html();
            $.fancybox.open({
                wrapCSS : 'fb-fancy-default',
                type: 'html',
                content: template,
                padding: 0,
                autoScale: false,
                fitToView: false,
                openEffect  : 'drop',
                closeEffect: 'drop',
                nextEffect: 'fade',
                prevEffect : 'fade',
                openSpeed: 300,
                closeSpeed: 300,
                nextSpeed: 300,
                prevSpeed: 300,
                beforeShow:function(){
                    // let $thisFancy = $('.fancybox-inner');
                    //
                    // let $thisChosen = $thisFancy.find('[data-is="chosen"]');
                    // moduleApp.chosen($thisChosen);
                    //
                    // let $cityTarget = $thisFancy.find('.js-fb-city-target');
                    //
                    // $thisFancy.find('.js-fb-city-action').on('change',function(){
                    //     let action = !!($(this).find('option:selected').attr('data-city'));
                    //     if (action) {
                    //         $cityTarget.slideDown(200, function(){
                    //             if (!$cityTarget.hasClass('state-inited')) {
                    //                 $cityTarget.addClass('state-inited');
                    //                 $cityTarget.find('select').chosen({
                    //                     no_results_text: "Нет результатов"
                    //                 });
                    //             }
                    //         });
                    //     }
                    //     else {
                    //         $cityTarget.slideUp(200);
                    //     }
                    // });
                    //
                    //
                    // let $thisSubmit = $thisFancy.find('.js-fb-submit');
                    // moduleApp.formValidation($thisSubmit);
                    //
                    //

                }
            });
        });


        //hover element price
        $('.js-item-element').hover(function () {
            let $this = $(this),
                $parent = $this.parents('.price-list'),
                $allElements = $parent.find('.js-item-element');

            $allElements.toggleClass('disabled');
            $this.toggleClass('disabled').toggleClass('active');

        });


        $('.js-certificates').on('click', function(){
            let updateSize = true;
            let $this = $(this),
               thisSertificat = $this.parent('div').find('.certificat-list').slideToggle(300);

            $this.toggleClass('active');

            setTimeout(function(){
                moduleApp.initSlider(updateSize);
            }, 400);
        });
    },
    'resizeGlobal': function(){
        window.addEventListener('resize', resizeInitFunction);

        function resizeInitFunction(){
            moduleApp.resizeLogo();
            moduleApp.pagePilingInit();
        }
    },
    'resizeLogo': function(){
        if($(document).width() < 900){
            $('.logo svg').attr('viewBox', '0 0 47 44');
            $('.mCustomScrollbar').attr('class', '');
        }
        else{
            $('.logo svg').attr('viewBox', '0 0 248 44');
        }
    },
    'pagePilingInit': function(){
        let $listSection = $('.main section');
        let configTime = {
                delay: 1550,
                animationTime: 500,
                delayNextPage: 1550
            };


        startAnimation(1);

        $(".main").onepage_scroll({
            sectionContainer: "section",
            responsiveFallback: 1000,
            loop: false,
            animationTime: configTime.animationTime,
            delay: configTime.delay,
            updateURL: true,
            beforeMove: function(index){
                console.log('before ' + index);
                // $listSection.eq(index-1).removeClass('active-animate')
                // $listSection.eq(index-1).addClass('disabled-animate');

                // startAnimation(index);

            },
            afterMove: function(index){
                // console.log('after ' + index);
                // $listSection.eq(index-1).removeClass('disabled-animate')
                // $listSection.eq(index-1).addClass('active-animate');
            },
            customMove: function(index){
                // console.log('custom ' + index);
            },
            moveUp: function(index, next){
                // animation(index, next);
                animationRouterUp(index, next);
            },
            moveDown: function(index, next){
                // animation(index, next);
                animationRouterDown(index, next);
            }
        });

        function startAnimation(index){
            $listSection.eq(index-1).addClass('active-page');
            let $list1 = $listSection.eq(index-1).find('.js-white-list');
            let $list2 = $listSection.eq(index-1).find('.js-white-list2');
            let sequenceTimeline = new TimelineLite();

            // console.log($listSection.eq(index-1));
            sequenceTimeline
                .to($list2, 1, {x:"100%"})
                .to($list1, 1, {x:"100%"}, "-=.5")
        }

        let directionCountIndex = 0;
        let directionCountNext = 0;

        function animationRouterDown(index, next){

            let tl = new TimelineLite();
            // console.log($listSection.eq(index-1));
            //.add(TweenLite.set($listSection.eq(index-1), {'z-index':0}))
            //.add(TweenLite.set($listSection.eq(index-1), {'z-index':0}))

            switch(next) {
                case 1:
                    tl.add(hideChoicePage).add(showMainPage);
                    break;
                case 2:
                    tl.add(hideMainPage).add(showChoicePage);
                    break;
                case 3:
                    directionCountNext = next;
                    tl.add(hideChoicePage).add(showDirectionPage);
                    break;
                case 4:
                case 5:
                case 6:
                case 7:
                    directionCountIndex = index;
                    directionCountNext = next;
                    tl.add(hideDirectionPage).add(showDirectionPage);
                    break;
                case 8:
                    directionCountIndex = index;
                    tl.add(hideDirectionPage).add(showExpertsPage);
                    break;
                case 9:
                    tl.add(hideExpertsPage).add(showReviewsPage);
                    break;
                case 10:
                    tl.add(hideReviewsPage).add(showStockPage);
                    break;
                case 11:
                    tl.add(hideStockPage).add(showContactsPage);
                    break;
                case 'menu':
                    break;
                default:
                    break;
            }
        }

        function animationRouterUp(index, next){

            let tl = new TimelineLite();
            // console.log($listSection.eq(index-1));
            //.add(TweenLite.set($listSection.eq(index-1), {'z-index':0}))
            //.add(TweenLite.set($listSection.eq(index-1), {'z-index':0}))
            console.log(next);
            switch(next) {
                case 1:
                    tl.add(hideChoicePage).add(showMainPage);
                    break;
                case 2:
                    directionCountIndex = index;
                    tl.add(hideDirectionPage).add(showChoicePage);
                    break;
                case 3:
                case 4:
                case 5:
                case 6:
                    directionCountIndex = index;
                    directionCountNext = next;
                    tl.add(hideDirectionPage).add(showDirectionPage);
                    break;
                case 7:
                    directionCountIndex = index;
                    directionCountNext = next;
                    tl.add(hideExpertsPage).add(showDirectionPage);
                    break;
                case 8:
                    tl.add(hideReviewsPage).add(showExpertsPage);
                    break;
                case 9:
                    tl.add(hideStockPage).add(showReviewsPage);
                    break;
                case 10:
                    tl.add(hideContactsPage).add(showStockPage);
                    break;
                case 11:
                    break;
                case 'menu':
                    break;
                default:
                    break;
            }
        }

        let sequenceTimeline = new TimelineLite();

        function showMainPage(index, next){
            let $indexPage = $listSection.eq(0),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');

            console.log($indexPage);
            let sequenceTimeline2 = new TimelineLite();

            sequenceTimeline
                .set($indexPage, {'z-index':50})
                .set($list1Index, {x:'0%'})
                .set($list2Index, {x:'0%'})
                .to($list2Index, .7, {x:'100%'})
                .to($list1Index, .7, {x:'100%'}, "-=.3")
        }

        function hideMainPage(index, next){
            let $indexPage = $listSection.eq(0),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');

            console.log($indexPage);
            let sequenceTimeline2 = new TimelineLite();

            sequenceTimeline
                .set($list1Index, {x:'-100%'})
                .set($list2Index, {x:'-100%'})
                .to($list1Index, .7, {x:'0%'})
                .to($list2Index, .7, {x:'0%'}, "-=.3")
                .set($indexPage, {'z-index':0})
        }

        function showChoicePage(index){
            let $indexPage = $listSection.eq(1),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');
            console.log($indexPage);
            let sequenceTimeline2 = new TimelineLite();
            sequenceTimeline
                .set($indexPage, {'z-index':50})
                .set($list1Index, {x:'0%'})
                .set($list2Index, {x:'0%'})
                .to($list2Index, .7, {x:'100%'})
                .to($list1Index, .7, {x:'100%'}, "-=.3")
        }
        function hideChoicePage(index){
            let $indexPage = $listSection.eq(1),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');
            console.log($indexPage);
            let sequenceTimeline2 = new TimelineLite();
            sequenceTimeline
                .set($list1Index, {x:'-100%'})
                .set($list2Index, {x:'-100%'})
                .to($list1Index, .7, {x:'0%'})
                .to($list2Index, .7, {x:'0%'}, "-=.3")
                .set($indexPage, {'z-index':0})
        }

        function showDirectionPage(index){
            console.log(directionCountNext);
            let $indexPage = $listSection.eq(directionCountNext-1),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');
            // console.log($indexPage);
            let sequenceTimeline2 = new TimelineLite();
            sequenceTimeline
                .set($indexPage, {'z-index':50})
                .set($list1Index, {x:'0%'})
                .set($list2Index, {x:'0%'})
                .to($list2Index, .7, {x:'100%'})
                .to($list1Index, .7, {x:'100%'}, "-=.3")
        }
        function hideDirectionPage(index){

            let $indexPage = $listSection.eq(directionCountIndex-1),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');
            // console.log($indexPage);
            let sequenceTimeline2 = new TimelineLite();
            sequenceTimeline
                .set($list1Index, {x:'-100%'})
                .set($list2Index, {x:'-100%'})
                .to($list1Index, .7, {x:'0%'})
                .to($list2Index, .7, {x:'0%'}, "-=.3")
                .set($indexPage, {'z-index':0})
        }

        function showExpertsPage(index){
            let $indexPage = $listSection.eq(7),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');
            console.log($indexPage);
            let sequenceTimeline2 = new TimelineLite();
            sequenceTimeline
                .set($indexPage, {'z-index':50})
                .set($list1Index, {x:'0%'})
                .set($list2Index, {x:'0%'})
                .to($list2Index, .7, {x:'100%'})
                .to($list1Index, .7, {x:'100%'}, "-=.3")
        }
        function hideExpertsPage(index){
            let $indexPage = $listSection.eq(7),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');

            let sequenceTimeline2 = new TimelineLite();
            sequenceTimeline
                .set($list1Index, {x:'-100%'})
                .set($list2Index, {x:'-100%'})
                .to($list1Index, .7, {x:'0%'})
                .to($list2Index, .7, {x:'0%'}, "-=.3")
                .set($indexPage, {'z-index':0})
        }

        function showReviewsPage(index){
            let $indexPage = $listSection.eq(8),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');
            console.log($indexPage);
            let sequenceTimeline2 = new TimelineLite();
            sequenceTimeline
                .set($indexPage, {'z-index':50})
                .set($list1Index, {x:'0%'})
                .set($list2Index, {x:'0%'})
                .to($list2Index, .7, {x:'100%'})
                .to($list1Index, .7, {x:'100%'}, "-=.3")
        }
        function hideReviewsPage(index){
            let $indexPage = $listSection.eq(8),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');
            console.log($indexPage);
            let sequenceTimeline2 = new TimelineLite();
            sequenceTimeline
                .set($list1Index, {x:'-100%'})
                .set($list2Index, {x:'-100%'})
                .to($list1Index, .7, {x:'0%'})
                .to($list2Index, .7, {x:'0%'}, "-=.3")
                .set($indexPage, {'z-index':0})
        }

        function showStockPage(index){
            let $indexPage = $listSection.eq(9),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');
            console.log($indexPage);
            let sequenceTimeline2 = new TimelineLite();
            sequenceTimeline
                .set($indexPage, {'z-index':50})
                .set($list1Index, {x:'0%'})
                .set($list2Index, {x:'0%'})
                .to($list2Index, .7, {x:'100%'})
                .to($list1Index, .7, {x:'100%'}, "-=.3")
        }
        function hideStockPage(index){
            let $indexPage = $listSection.eq(9),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');
            console.log($indexPage);
            let sequenceTimeline2 = new TimelineLite();
            sequenceTimeline
                .set($list1Index, {x:'-100%'})
                .set($list2Index, {x:'-100%'})
                .to($list1Index, .7, {x:'0%'})
                .to($list2Index, .7, {x:'0%'}, "-=.3")
                .set($indexPage, {'z-index':0})
        }

        function showContactsPage(index){
            let $indexPage = $listSection.eq(10),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');
            console.log($indexPage);
            let sequenceTimeline2 = new TimelineLite();
            sequenceTimeline
                .set($indexPage, {'z-index':50})
                .set($list1Index, {x:'0%'})
                .set($list2Index, {x:'0%'})
                .to($list2Index, .7, {x:'100%'})
                .to($list1Index, .7, {x:'100%'}, "-=.3")
        }
        function hideContactsPage(index){
            let $indexPage = $listSection.eq(10),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');
            console.log($indexPage);
            let sequenceTimeline2 = new TimelineLite();
            sequenceTimeline
                .set($list1Index, {x:'-100%'})
                .set($list2Index, {x:'-100%'})
                .to($list1Index, .7, {x:'0%'})
                .to($list2Index, .7, {x:'0%'}, "-=.3")
                .set($indexPage, {'z-index':0})
        }




        function animation(index, next){
            let $indexPage = $listSection.eq(index-1),
                $nextPage = $listSection.eq(next-1),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2'),
                $list1Next = $nextPage.find('.js-white-list'),
                $list2Next = $nextPage.find('.js-white-list2');

            let sequenceTimeline2 = new TimelineLite();
            sequenceTimeline2
                .set($list1Index, {x:'-100%'})
                .set($list2Index, {x:'-100%'})
                .to($list1Index, .7, {x:'0%'})
                .to($list2Index, .7, {x:'0%'}, "-=.3")
                .set($indexPage, {'z-index':0})
                .set($nextPage, {'z-index':50})
                .to($list2Next, .5, {x:'100%'})
                .to($list1Next, .5, {x:'100%'}, "-=.2");
        }

        // function startAnimation(index){};
        function showPage(index){};
        function hidePage(index){};

    },
    'initSlider': function(update){
        let configSlideChoice = {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            on: {
                init: function () {
                    addProgressSlide();
                    animationProgreeBar();
                },
            },

        };

        let mySwiper = new Swiper('.js-slider-choice', configSlideChoice);

        mySwiper.on('slideChange', function () {
            removeProgressSlide();
            addProgressSlide();
        });

        mySwiper.on('slideChangeTransitionStart', function () {
            animationProgreeBar();
        });

        function addProgressSlide(){
            let progressBar = '<div class="js-progress progress-bar-slider"></div>';
            $('.js-slider-choice').append(progressBar);
        }

        function removeProgressSlide(){
            $('.js-slider-choice .js-progress').remove();
        }

        function animationProgreeBar(){
            $('.js-slider-choice .js-progress').addClass('animation-progress');
        }



        let configSliderExperts = {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            navigation: {
                nextEl: '.js-next-experts',
                prevEl: '.js-prev-experts',
            },
            simulateTouch: false
        };

        let configSliderExpertsContent = {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            simulateTouch: false,
            autoHeight: true,
            observer: true,
            navigation: {
                nextEl: '.js-next-experts',
                prevEl: '.js-prev-experts',
            },
        };


        let expertsSwiper = new Swiper('.js-slider-experts', configSliderExperts);
        let expertsContentSwiper = new Swiper('.js-slider-experts-content', configSliderExpertsContent);

        if(update){
            expertsContentSwiper.updateSize();
        }


        let configSliderReviews = {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            navigation: {
                nextEl: '.js-next-reviews',
                prevEl: '.js-prev-reviews',
            },
            simulateTouch: false
        };

        let configSliderReviewsContent = {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            autoHeight: true,
            navigation: {
                nextEl: '.js-next-reviews',
                prevEl: '.js-prev-reviews',
            },
        };

        let reviewsSwiper = new Swiper('.js-slider-reviews', configSliderReviews);
        let reviewsContentSwiper = new Swiper('.js-slider-reviews-content', configSliderReviewsContent);


    },
    'toolsGlobalSubscribe':function($thisModule){
        $document.on('click','.ts-submit',function(e){
            e.preventDefault();
            let $this = $(this);
            let $parent =  $this.closest('.is-tools-subscribe');
            let $thisInput = $parent.find('.ts-input');
            let regexEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


            if (regexEmail.test($thisInput.val()) && $thisInput.val().length > 0) {
                $parent.find('.ts-form').submit();
            } else {
                $thisInput.addClass('state-bounce');
                setTimeout(function(){
                    $thisInput.removeClass('state-bounce').focus();
                }, 400);
            }

        });
    },
    'pageLoader': function(){
        $document.on('click','a',function(){
            let $this = $(this);
            let noProgress = false;

            let href = $this.attr('href');
            let targetBlank = $this.attr('target') || false;
            let inSwiper = $this.closest('.swiper-container').length;
            let downloadAttr = $this.attr('download');
            if (typeof downloadAttr !== typeof undefined && downloadAttr !== false) {
                noProgress = true;
            }

            if (
                !href ||
                href.indexOf('mailto') > -1 ||
                href.indexOf('#') > -1 ||
                href.indexOf('javascript') > -1 ||
                href.indexOf('tel') > -1 ||
                $this.hasClass('no-preloader') ||
                $this.hasClass('js-fancy-image') ||
                href.length === 0 ||
                href === 'undefined' ||
                targetBlank ||
                inSwiper
            ) { noProgress = true; }

            if (noProgress) {
                return true;
            } else {
                $("#body").removeClass('jsfx-loaded');
                return true;
            }
        });

        $("#body").addClass('jsfx-loaded');
    },
    'startupMessage':function(){
        if (appConfig.startupMessage.title && appConfig.startupMessage.message) {
            let template = '<div class="fb-modal-default">';
            template += '<div class="fbp-title">'+appConfig.startupMessage.title+'</div>';
            template += '<div class="fbp-message">'+appConfig.startupMessage.message+'</div>';
            template += '<div class="cntr"><a href="#" class="is-button-a js-fancy-close"><span>Ок</span></a></div>';
            template += '</div>';

            $.fancybox.open({
                wrapCSS : 'fb-fancy-default fb-fancy-no-close',
                content: template,
                padding: 0,
                autoScale: false,
                fitToView: false,
                openEffect  : 'drop',
                closeEffect: 'drop',
                nextEffect: 'fade',
                prevEffect : 'fade',
                openSpeed: 300,
                closeSpeed: 300,
                nextSpeed: 300,
                prevSpeed: 300
            });
        }
    },
    'SFXModules':{
        'sfx-a':function($thisModule){
            let gfxFromLeft = {
                'data-when':'enter',
                'data-from':'.8',
                'data-to':'0',
                'data-translatex':'-40'
            };

            let gfxFromRight = {
                'data-when':'enter',
                'data-from':'.8',
                'data-to':'0',
                'data-translatex':'40'
            };

            $thisModule.find('.lt-column-left .lt-tile').addClass('scrollme animateme').attr(gfxFromLeft);
            $thisModule.find('.lt-column-right .lt-tile').addClass('scrollme animateme').attr(gfxFromRight);
        },
        'sfx-b':function($thisModule){
            let gfxFromLeft = {
                'data-when':'enter',
                'data-from':'.8',
                'data-to':'0',
                'data-translatex':'-40'
            };

            let gfxFormRight = {
                'data-when':'enter',
                'data-from':'.8',
                'data-to':'0',
                'data-translatex':'40'
            };

            $thisModule.find('.lt-row:even').find('.lt-row-content-inner').addClass('scrollme animateme').attr(gfxFromLeft);
            $thisModule.find('.lt-row:even').find('.lt-row-image').addClass('scrollme animateme').attr(gfxFormRight);
            $thisModule.find('.lt-row:odd').find('.lt-row-content-inner').addClass('scrollme animateme').attr(gfxFormRight);
            $thisModule.find('.lt-row:odd').find('.lt-row-image').addClass('scrollme animateme').attr(gfxFromLeft);
        },
        'sfx-c':function($thisModule){
            let gfxFromRight = {
                'data-when':'enter',
                'data-from':'.8',
                'data-to':'0',
                'data-translatex':'40'
            };

            $thisModule.addClass('scrollme animateme').attr(gfxFromRight);
        },
        'sfx-d':function($thisModule){
            return false;
            let gfxFromLeft = {
                'data-when':'enter',
                'data-from':'.8',
                'data-to':'0',
                'data-translatex':'-40'
            };

            let gfxFormRight = {
                'data-when':'enter',
                'data-from':'.8',
                'data-to':'0',
                'data-translatex':'40'
            };

            $thisModule.find('.lt-row:even').find('.lt-row-content-inner').addClass('scrollme animateme').attr(gfxFromLeft);
            $thisModule.find('.lt-row:even').find('.lt-row-image').addClass('scrollme animateme').attr(gfxFormRight);
            $thisModule.find('.lt-row:odd').find('.lt-row-content-inner').addClass('scrollme animateme').attr(gfxFormRight);
            $thisModule.find('.lt-row:odd').find('.lt-row-image').addClass('scrollme animateme').attr(gfxFromLeft);
        },
        'sfx-e':function($thisModule){

            let gfxFromLeft = {
                'data-when':'enter',
                'data-from':'.8',
                'data-to':'0',
                'data-opacity':'0'
            };
            $thisModule.find('.hc-year-box').addClass('scrollme animateme').attr(gfxFromLeft);
        }
    },
    'formValidation': function ($submitBtn, submitFunction) {

        let params = {
            'formValidationAttr':'data-validation',
            'formInputClass':'is-form-text',
            'formCheckboxClass':'is-form-checkbox',
            'formShowErrorClass':'form-show-error',
            'submitDisabledClass':'state-disabled',
            'submitProgressClass':'state-progress'
        };

        $submitBtn = $submitBtn || $('.js-form-submit');
        submitFunction = submitFunction || false;
        $submitBtn.closest('form').addClass('is-form-validation');
        $submitBtn.click(function(e){
            e.preventDefault();
            let $this = $(this);
            if ($this.hasClass(params.submitDisabledClass) || $this.hasClass(params.submitProgressClass)) {
                return false;
            }
            let $form = $this.closest('form');
            let $forms = $form.find('['+params.formValidationAttr+']');
            let result = formChecking($forms, true);
            if (result) {
                if (submitFunction) {
                    submitFunction($form);
                } else {
                    $this.addClass(params.submitProgressClass);
                    $form.submit();
                }
            } else {
                $forms.on('keyup keypress change', function(){
                    let $current = $(this);
                    setTimeout(function(){ formChecking($current); }, 50);
                });
            }
            return false;
        });

        $(document).on('keydown', function (e) {
            return true;
            if (e.keyCode == 13) {
                let $thisFocus = $(document.activeElement);
                if ($thisFocus.is('textarea')) {
                    return true;
                }
                if ($thisFocus.closest('.form-select').length) {
                    return true;
                }
                if ($thisFocus.closest('.is-form-validation').length) {
                    $submitBtn.trigger('click');
                }
                return false;
            }
        });

        function formChecking($inp, onFocus) {


            onFocus = onFocus || false;

            let noError = true;

            $inp.each(function (ind, elm) {
                let $this = $(elm);

                let mask = $this.attr(params.formValidationAttr);
                let value = $this.val();
                let placeHolder = $this.attr('placeholder');
                let regex;
                let subError = true;

                if (mask == 'text') {
                    if ((value.length < 1) || (value == placeHolder)) {
                        noError = false;
                        $this.closest('.'+params.formInputClass).addClass(params.formShowErrorClass);
                        if (onFocus) {
                            $this.focus();
                            onFocus = false;
                        }
                    } else {
                        $this.closest('.'+params.formInputClass).removeClass(params.formShowErrorClass);
                    }
                }

                if (mask == 'text-visible') {
                    if ($this.is(':visible') && ((value.length < 1) || (value == placeHolder))) {
                        noError = false;
                        $this.closest('.'+params.formInputClass).addClass(params.formShowErrorClass);
                        if (onFocus) {
                            $this.focus();
                            onFocus = false;
                        }
                    } else {
                        $this.closest('.'+params.formInputClass).removeClass(params.formShowErrorClass);
                    }
                }

                if (mask == 'email') {
                    regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                    if (!regex.test(value) || (value == placeHolder)) {
                        noError = false;
                        $this.closest('.'+params.formInputClass).addClass(params.formShowErrorClass);
                        if (onFocus) {
                            $this.focus();
                            onFocus = false;
                        }
                    } else {
                        $this.closest('.'+params.formInputClass).removeClass(params.formShowErrorClass);
                    }
                }

                if (mask == 'email-visible') {
                    regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                    if ($this.is(':visible') && (!regex.test(value) || (value == placeHolder))) {
                        noError = false;
                        $this.closest('.'+params.formInputClass).addClass(params.formShowErrorClass);
                        if (onFocus) {
                            $this.focus();
                            onFocus = false;
                        }
                    } else {
                        $this.closest('.'+params.formInputClass).removeClass(params.formShowErrorClass);
                    }
                }

                if (mask == 'opt-email') {
                    regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                    if(value != ''){
                        if (!regex.test(value) || (value == placeHolder)) {
                            noError = false;
                            $this.closest('.'+params.formInputClass).addClass(params.formShowErrorClass);
                            if (onFocus) {
                                $this.focus();
                                onFocus = false;
                            }
                        } else {
                            $this.closest('.'+params.formInputClass).removeClass(params.formShowErrorClass);
                        }
                    } else {
                        $this.closest('.'+params.formInputClass).removeClass(params.formShowErrorClass);
                    }
                }

                if (mask == 'file') {
                    let parts = $(this).val().split('.');
                    if (parts==""){
                        noError = false;
                        $this.closest('.'+params.formInputClass).addClass(params.formShowErrorClass);
                        if (onFocus) {
                            $this.focus();
                            onFocus = false;
                        }
                    }
                    else {
                        $this.closest('.'+params.formInputClass).removeClass(params.formShowErrorClass);
                    }
                }

                if (mask == 'checkbox') {
                    if ($this.is(':visible') && (!$this.is(':checked'))) {
                        noError = false;
                        $this.closest('.'+params.formCheckboxClass).addClass(params.formShowErrorClass);
                    } else {
                        $this.closest('.'+params.formCheckboxClass).removeClass(params.formShowErrorClass);
                    }
                }

                if (mask == 'vacancy-file-link') {

                    let $thisGroup = $('['+params.formValidationAttr+'="vacancy-file-link"]:visible');

                    if ($thisGroup.length === 0) { return true; }

                    $thisGroup.each(function(i,e){
                        if ($(e).val().length > 0) { subError = false; }
                    });

                    if (subError) {
                        noError = false;
                        $thisGroup.closest('.'+params.formInputClass).addClass(params.formShowErrorClass);
                    } else {
                        $thisGroup.closest('.'+params.formInputClass).removeClass(params.formShowErrorClass);
                    }

                }

            });

            return noError;
        }


        // add mask

        $submitBtn.closest('form').find('[data-mask]').each(function(i,thisForm){
            let $thisForm = $(thisForm);
            let thisMask = $thisForm.attr('data-mask');
            if (thisMask=="phone") { $thisForm.addClass('state-with-mask').mask("+7 (999) 999 99 99", {placeholder:"–"}); }
        });
    }
};


$(document).ready(function(){
    // init globals
    $window = $(window);
    $document = $(document);
    $html = $('html');

    pageApp.init();
    moduleApp.init();

});


function initMap() {
    var uluru = {lat: 56.00926295, lng: 37.85537839};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru,
        mapTypeControl: false,
        fullscreenControl: false,
        // rotateControl: false,
        // streetViewControl: false,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 13
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#144b53"
                    },
                    {
                        "lightness": 14
                    },
                    {
                        "weight": 1.4
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#315b94"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#315b94"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 5
                    },
                    {
                        "color": "#315b94"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#315b94"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#315b94"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#487bc2"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#487bc2"
                    },
                    {
                        "lightness": 25
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#487bc2"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#487bc2"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#487bc2"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#487bc2"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#2b4e7e"
                    }
                ]
            }
        ]
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}


