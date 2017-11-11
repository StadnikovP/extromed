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
            console.log($(this));
            let $this = $(this),
                $parent = $this.parents('.price-list'),
                $allElements = $parent.find('.js-item-element');

            $allElements.toggleClass('disabled');
            $this.toggleClass('disabled').toggleClass('active');

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

        if($(document).width() > 900){
            $('#pagepiling').pagepiling({
                anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage'],
                menu: '#myMenu',
                sectionSelector: '.section'
            });
        }

    },
    'initSlider': function(){
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
            autoHeight: true,
            navigation: {
                nextEl: '.js-next-experts',
                prevEl: '.js-prev-experts',
            },
        };


        let expertsSwiper = new Swiper('.js-slider-experts', configSliderExperts);
        let expertsContentSwiper = new Swiper('.js-slider-experts-content', configSliderExpertsContent);


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


