
; /* Start:"a:4:{s:4:"full";s:74:"/ispring_bitrix/content/js/lib/jquery/jquery-1.11.3.min.js?143982423595957";s:6:"source";s:58:"/ispring_bitrix/content/js/lib/jquery/jquery-1.11.3.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:80:"/ispring_bitrix/content/js/lib/jquery/jquery.browser-0.0.8.min.js?14398242352510";s:6:"source";s:65:"/ispring_bitrix/content/js/lib/jquery/jquery.browser-0.0.8.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * jQuery Browser Plugin 0.0.8
 * https://github.com/gabceb/jquery-browser-plugin
 *
 * Original jquery-browser code Copyright 2005, 2015 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * Modifications Copyright 2015 Gabriel Cebrian
 * https://github.com/gabceb
 *
 * Released under the MIT license
 *
 * Date: 05-07-2015
 */!function(a){"function"==typeof define&&define.amd?define(["jquery"],function(b){return a(b)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=a(require("jquery")):a(window.jQuery)}(function(a){"use strict";function b(a){void 0===a&&(a=window.navigator.userAgent),a=a.toLowerCase();var b=/(edge)\/([\w.]+)/.exec(a)||/(opr)[\/]([\w.]+)/.exec(a)||/(chrome)[ \/]([\w.]+)/.exec(a)||/(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[],c=/(ipad)/.exec(a)||/(ipod)/.exec(a)||/(iphone)/.exec(a)||/(kindle)/.exec(a)||/(silk)/.exec(a)||/(android)/.exec(a)||/(windows phone)/.exec(a)||/(win)/.exec(a)||/(mac)/.exec(a)||/(linux)/.exec(a)||/(cros)/.exec(a)||/(playbook)/.exec(a)||/(bb)/.exec(a)||/(blackberry)/.exec(a)||[],d={},e={browser:b[5]||b[3]||b[1]||"",version:b[2]||b[4]||"0",versionNumber:b[4]||b[2]||"0",platform:c[0]||""};if(e.browser&&(d[e.browser]=!0,d.version=e.version,d.versionNumber=parseInt(e.versionNumber,10)),e.platform&&(d[e.platform]=!0),(d.android||d.bb||d.blackberry||d.ipad||d.iphone||d.ipod||d.kindle||d.playbook||d.silk||d["windows phone"])&&(d.mobile=!0),(d.cros||d.mac||d.linux||d.win)&&(d.desktop=!0),(d.chrome||d.opr||d.safari)&&(d.webkit=!0),d.rv||d.edge){var f="msie";e.browser=f,d[f]=!0}if(d.safari&&d.blackberry){var g="blackberry";e.browser=g,d[g]=!0}if(d.safari&&d.playbook){var h="playbook";e.browser=h,d[h]=!0}if(d.bb){var i="blackberry";e.browser=i,d[i]=!0}if(d.opr){var j="opera";e.browser=j,d[j]=!0}if(d.safari&&d.android){var k="android";e.browser=k,d[k]=!0}if(d.safari&&d.kindle){var l="kindle";e.browser=l,d[l]=!0}if(d.safari&&d.silk){var m="silk";e.browser=m,d[m]=!0}return d.name=e.browser,d.platform=e.platform,d}return window.jQBrowser=b(window.navigator.userAgent),window.jQBrowser.uaMatch=b,a&&(a.browser=window.jQBrowser),window.jQBrowser});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:81:"/ispring_bitrix/content/js/lib/jquery/jquery.lazyload-1.9.3.min.js?14483500783381";s:6:"source";s:66:"/ispring_bitrix/content/js/lib/jquery/jquery.lazyload-1.9.3.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! Lazy Load 1.9.3 - MIT license - Copyright 2010-2013 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:83:"/ispring_bitrix/content/js/lib/jquery/jquery.fancybox-2.1.5.pack.js?143982423523432";s:6:"source";s:67:"/ispring_bitrix/content/js/lib/jquery/jquery.fancybox-2.1.5.pack.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
    width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
    keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
    (I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
    openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
    isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
        c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
    k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
    b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
        setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
        d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
        a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
        b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
        y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
        if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
    (h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
        {},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
        mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
        !0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
        "image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
        this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
        f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
        e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
        outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
        g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
        "no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
        h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
        h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
    "iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
        y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
    !a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
        b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
        a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
    (c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
    {duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
    b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
    f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
    b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
    f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
    b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
    e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
    d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:73:"/ispring_bitrix/content/js/lib/bootstrap/bootstrap.min.js?143982423537056";s:6:"source";s:57:"/ispring_bitrix/content/js/lib/bootstrap/bootstrap.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://bootstrap-3.ru/customize.php?id=f5bc5c89b4194340863e)
 * Config saved to config.json and https://gist.github.com/f5bc5c89b4194340863e
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),n=i.data("bs.alert");n||i.data("bs.alert",n=new o(this)),"string"==typeof e&&n[e].call(i)})}var i='[data-dismiss="alert"]',o=function(e){t(e).on("click",i,this.close)};o.VERSION="3.3.5",o.TRANSITION_DURATION=150,o.prototype.close=function(e){function i(){a.detach().trigger("closed.bs.alert").remove()}var n=t(this),s=n.attr("data-target");s||(s=n.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""));var a=t(s);e&&e.preventDefault(),a.length||(a=n.closest(".alert")),a.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(a.removeClass("in"),t.support.transition&&a.hasClass("fade")?a.one("bsTransitionEnd",i).emulateTransitionEnd(o.TRANSITION_DURATION):i())};var n=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=o,t.fn.alert.noConflict=function(){return t.fn.alert=n,this},t(document).on("click.bs.alert.data-api",i,o.prototype.close)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.button"),s="object"==typeof e&&e;n||o.data("bs.button",n=new i(this,s)),"toggle"==e?n.toggle():e&&n.setState(e)})}var i=function(e,o){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,o),this.isLoading=!1};i.VERSION="3.3.5",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(e){var i="disabled",o=this.$element,n=o.is("input")?"val":"html",s=o.data();e+="Text",null==s.resetText&&o.data("resetText",o[n]()),setTimeout(t.proxy(function(){o[n](null==s[e]?this.options[e]:s[e]),"loadingText"==e?(this.isLoading=!0,o.addClass(i).attr(i,i)):this.isLoading&&(this.isLoading=!1,o.removeClass(i).removeAttr(i))},this),0)},i.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var o=t.fn.button;t.fn.button=e,t.fn.button.Constructor=i,t.fn.button.noConflict=function(){return t.fn.button=o,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(i){var o=t(i.target);o.hasClass("btn")||(o=o.closest(".btn")),e.call(o,"toggle"),t(i.target).is('input[type="radio"]')||t(i.target).is('input[type="checkbox"]')||i.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.carousel"),s=t.extend({},i.DEFAULTS,o.data(),"object"==typeof e&&e),a="string"==typeof e?e:s.slide;n||o.data("bs.carousel",n=new i(this,s)),"number"==typeof e?n.to(e):a?n[a]():s.interval&&n.pause().cycle()})}var i=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};i.VERSION="3.3.5",i.TRANSITION_DURATION=600,i.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},i.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},i.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},i.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},i.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e),o="prev"==t&&0===i||"next"==t&&i==this.$items.length-1;if(o&&!this.options.wrap)return e;var n="prev"==t?-1:1,s=(i+n)%this.$items.length;return this.$items.eq(s)},i.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},i.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},i.prototype.next=function(){return this.sliding?void 0:this.slide("next")},i.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},i.prototype.slide=function(e,o){var n=this.$element.find(".item.active"),s=o||this.getItemForDirection(e,n),a=this.interval,r="next"==e?"left":"right",l=this;if(s.hasClass("active"))return this.sliding=!1;var h=s[0],d=t.Event("slide.bs.carousel",{relatedTarget:h,direction:r});if(this.$element.trigger(d),!d.isDefaultPrevented()){if(this.sliding=!0,a&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var p=t(this.$indicators.children()[this.getItemIndex(s)]);p&&p.addClass("active")}var c=t.Event("slid.bs.carousel",{relatedTarget:h,direction:r});return t.support.transition&&this.$element.hasClass("slide")?(s.addClass(e),s[0].offsetWidth,n.addClass(r),s.addClass(r),n.one("bsTransitionEnd",function(){s.removeClass([e,r].join(" ")).addClass("active"),n.removeClass(["active",r].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(c)},0)}).emulateTransitionEnd(i.TRANSITION_DURATION)):(n.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(c)),a&&this.cycle(),this}};var o=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=i,t.fn.carousel.noConflict=function(){return t.fn.carousel=o,this};var n=function(i){var o,n=t(this),s=t(n.attr("data-target")||(o=n.attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,""));if(s.hasClass("carousel")){var a=t.extend({},s.data(),n.data()),r=n.attr("data-slide-to");r&&(a.interval=!1),e.call(s,a),r&&s.data("bs.carousel").to(r),i.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",n).on("click.bs.carousel.data-api","[data-slide-to]",n),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var i=t(this);e.call(i,i.data())})})}(jQuery),+function(t){"use strict";function e(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var o=i&&t(i);return o&&o.length?o:e.parent()}function i(i){i&&3===i.which||(t(n).remove(),t(s).each(function(){var o=t(this),n=e(o),s={relatedTarget:this};n.hasClass("open")&&(i&&"click"==i.type&&/input|textarea/i.test(i.target.tagName)&&t.contains(n[0],i.target)||(n.trigger(i=t.Event("hide.bs.dropdown",s)),i.isDefaultPrevented()||(o.attr("aria-expanded","false"),n.removeClass("open").trigger("hidden.bs.dropdown",s))))}))}function o(e){return this.each(function(){var i=t(this),o=i.data("bs.dropdown");o||i.data("bs.dropdown",o=new a(this)),"string"==typeof e&&o[e].call(i)})}var n=".dropdown-backdrop",s='[data-toggle="dropdown"]',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.5",a.prototype.toggle=function(o){var n=t(this);if(!n.is(".disabled, :disabled")){var s=e(n),a=s.hasClass("open");if(i(),!a){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",i);var r={relatedTarget:this};if(s.trigger(o=t.Event("show.bs.dropdown",r)),o.isDefaultPrevented())return;n.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger("shown.bs.dropdown",r)}return!1}},a.prototype.keydown=function(i){if(/(38|40|27|32)/.test(i.which)&&!/input|textarea/i.test(i.target.tagName)){var o=t(this);if(i.preventDefault(),i.stopPropagation(),!o.is(".disabled, :disabled")){var n=e(o),a=n.hasClass("open");if(!a&&27!=i.which||a&&27==i.which)return 27==i.which&&n.find(s).trigger("focus"),o.trigger("click");var r=" li:not(.disabled):visible a",l=n.find(".dropdown-menu"+r);if(l.length){var h=l.index(i.target);38==i.which&&h>0&&h--,40==i.which&&h<l.length-1&&h++,~h||(h=0),l.eq(h).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=o,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,a.prototype.toggle).on("keydown.bs.dropdown.data-api",s,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e,o){return this.each(function(){var n=t(this),s=n.data("bs.modal"),a=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e);s||n.data("bs.modal",s=new i(this,a)),"string"==typeof e?s[e](o):a.show&&s.show(o)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.3.5",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var o=this,n=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var n=t.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),n&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:e});n?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(i.TRANSITION_DURATION):o.$element.trigger("focus").trigger(s)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var o=this,n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&n;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+n).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){o.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var o=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var o=t(this),n=o.attr("href"),s=t(o.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),a=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},s.data(),o.data());o.is("a")&&i.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),e.call(s,a,this)})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tooltip"),s="object"==typeof e&&e;(n||!/destroy|hide/.test(e))&&(n||o.data("bs.tooltip",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};i.VERSION="3.3.5",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,o){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var a=n[s];if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=a){var r="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout";this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusin"==e.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState?void(i.hoverState="in"):(clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusout"==e.type?"focus":"hover"]=!1),i.isInStateTrue()?void 0:(clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide())},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!o)return;var n=this,s=this.tip(),a=this.getUID(this.type);this.setContent(),s.attr("id",a),this.$element.attr("aria-describedby",a),this.options.animation&&s.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,h=l.test(r);h&&(r=r.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var d=this.getPosition(),p=s[0].offsetWidth,c=s[0].offsetHeight;if(h){var f=r,u=this.getPosition(this.$viewport);r="bottom"==r&&d.bottom+c>u.bottom?"top":"top"==r&&d.top-c<u.top?"bottom":"right"==r&&d.right+p>u.width?"left":"left"==r&&d.left-p<u.left?"right":r,s.removeClass(f).addClass(r)}var g=this.getCalculatedOffset(r,d,p,c);this.applyPlacement(g,r);var m=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",m).emulateTransitionEnd(i.TRANSITION_DURATION):m()}},i.prototype.applyPlacement=function(e,i){var o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,a=parseInt(o.css("margin-top"),10),r=parseInt(o.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(r)&&(r=0),e.top+=a,e.left+=r,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,h=o[0].offsetHeight;"top"==i&&h!=s&&(e.top=e.top+s-h);var d=this.getViewportAdjustedDelta(i,e,l,h);d.left?e.left+=d.left:e.top+=d.top;var p=/top|bottom/.test(i),c=p?2*d.left-n+l:2*d.top-s+h,f=p?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(c,o[0][f],p)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function o(){"in"!=n.hoverState&&s.detach(),n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}var n=this,s=t(this.$tip),a=t.Event("hide.bs."+this.type);return this.$element.trigger(a),a.isDefaultPrevented()?void 0:(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=o?{top:0,left:0}:e.offset(),a={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},r=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,a,r,s)},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.right&&(n.left=a.left+a.width-d)}return n},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),e?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null})};var o=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.popover"),s="object"==typeof e&&e;(n||!/destroy|hide/.test(e))&&(n||o.data("bs.popover",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");i.VERSION="3.3.5",i.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var o=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=i,t.fn.popover.noConflict=function(){return t.fn.popover=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tab");n||o.data("bs.tab",n=new i(this)),"string"==typeof e&&n[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.3.5",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.data("target");if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var n=i.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),a=t.Event("show.bs.tab",{relatedTarget:n[0]});if(n.trigger(s),e.trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){var r=t(o);this.activate(e.closest("li"),i),this.activate(r,r.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:n[0]})})}}},i.prototype.activate=function(e,o,n){function s(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),n&&n()}var a=o.find("> .active"),r=n&&t.support.transition&&(a.length&&a.hasClass("fade")||!!o.find("> .fade").length);a.length&&r?a.one("bsTransitionEnd",s).emulateTransitionEnd(i.TRANSITION_DURATION):s(),a.removeClass("in")};var o=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=o,this};var n=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',n).on("click.bs.tab.data-api",'[data-toggle="pill"]',n)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.affix"),s="object"==typeof e&&e;n||o.data("bs.affix",n=new i(this,s)),"string"==typeof e&&n[e]()})}var i=function(e,o){this.options=t.extend({},i.DEFAULTS,o),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};i.VERSION="3.3.5",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return i>n?"top":!1;if("bottom"==this.affixed)return null!=i?n+this.unpin<=s.top?!1:"bottom":t-o>=n+a?!1:"bottom";var r=null==this.affixed,l=r?n:s.top,h=r?a:e;return null!=i&&i>=n?"top":null!=o&&l+h>=t-o?"bottom":!1},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),o=this.options.offset,n=o.top,s=o.bottom,a=Math.max(t(document).height(),t(document.body).height());"object"!=typeof o&&(s=n=o),"function"==typeof n&&(n=o.top(this.$element)),"function"==typeof s&&(s=o.bottom(this.$element));var r=this.getState(a,e,n,s);if(this.affixed!=r){null!=this.unpin&&this.$element.css("top","");var l="affix"+(r?"-"+r:""),h=t.Event(l+".bs.affix");if(this.$element.trigger(h),h.isDefaultPrevented())return;this.affixed=r,this.unpin="bottom"==r?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==r&&this.$element.offset({top:a-e-s})}};var o=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=i,t.fn.affix.noConflict=function(){return t.fn.affix=o,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this),o=i.data();o.offset=o.offset||{},null!=o.offsetBottom&&(o.offset.bottom=o.offsetBottom),null!=o.offsetTop&&(o.offset.top=o.offsetTop),e.call(i,o)})})}(jQuery),+function(t){"use strict";function e(e){var i,o=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(o)}function i(e){return this.each(function(){var i=t(this),n=i.data("bs.collapse"),s=t.extend({},o.DEFAULTS,i.data(),"object"==typeof e&&e);!n&&s.toggle&&/show|hide/.test(e)&&(s.toggle=!1),n||i.data("bs.collapse",n=new o(this,s)),"string"==typeof e&&n[e]()})}var o=function(e,i){this.$element=t(e),this.options=t.extend({},o.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};o.VERSION="3.3.5",o.TRANSITION_DURATION=350,o.DEFAULTS={toggle:!0},o.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},o.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,n=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(n&&n.length&&(e=n.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){n&&n.length&&(i.call(n,"hide"),e||n.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var l=t.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l]);
}}}},o.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(n,this)).emulateTransitionEnd(o.TRANSITION_DURATION):n.call(this)}}},o.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},o.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,o){var n=t(o);this.addAriaAndCollapsedClass(e(n),n)},this)).end()},o.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var n=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=o,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(o){var n=t(this);n.attr("data-target")||o.preventDefault();var s=e(n),a=s.data("bs.collapse"),r=a?"toggle":n.data();i.call(s,r)})}(jQuery),+function(t){"use strict";function e(i,o){this.$body=t(document.body),this.$scrollElement=t(t(i).is(document.body)?window:i),this.options=t.extend({},e.DEFAULTS,o),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function i(i){return this.each(function(){var o=t(this),n=o.data("bs.scrollspy"),s="object"==typeof i&&i;n||o.data("bs.scrollspy",n=new e(this,s)),"string"==typeof i&&n[i]()})}e.VERSION="3.3.5",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e=this,i="offset",o=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(i="position",o=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var e=t(this),n=e.data("target")||e.attr("href"),s=/^#./.test(n)&&t(n);return s&&s.length&&s.is(":visible")&&[[s[i]().top+o,n]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),e>=o)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(void 0===n[t+1]||e<n[t+1])&&this.activate(s[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear();var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',o=t(i).parents("li").addClass("active");o.parent(".dropdown-menu").length&&(o=o.closest("li.dropdown").addClass("active")),o.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var o=t.fn.scrollspy;t.fn.scrollspy=i,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=o,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one("bsTransitionEnd",function(){i=!0});var n=function(){i||t(o).trigger(t.support.transition.end)};return setTimeout(n,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:48:"/ispring_bitrix/content/js/ping.js?1439824235433";s:6:"source";s:34:"/ispring_bitrix/content/js/ping.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function pingForCookieUpdate()
{
    $.get("/ping.html");
}

function userCookieExpired()
{
    if ( typeof( $(".logged_in") ) != 'undefined' )
    {
        $(".logged_in").removeAttr("id").addClass("not_active");
    }
    $.get("/logout.html");
}

$(function()
{
    var HEADER_UPDATE_INTERVAL = 24 * 60 * 1000; // 24 min
    pingForCookieUpdate();
    setTimeout(userCookieExpired, HEADER_UPDATE_INTERVAL);
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:49:"/ispring_bitrix/content/js/base.js?14398242354053";s:6:"source";s:34:"/ispring_bitrix/content/js/base.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
	Base.js, version 1.1
	Copyright 2006-2007, Dean Edwards
	License: http://www.opensource.org/licenses/mit-license.php
*/

var Base = function() {
	// dummy
};

Base.extend = function(_instance, _static) { // subclass
	var extend = Base.prototype.extend;
	
	// build the prototype
	Base._prototyping = true;
	var proto = new this;
	extend.call(proto, _instance);
	delete Base._prototyping;
	
	// create the wrapper for the constructor function
	//var constructor = proto.constructor.valueOf(); //-dean
	var constructor = proto.constructor;
	var klass = proto.constructor = function() {
		if (!Base._prototyping) {
			if (this._constructing || this.constructor == klass) { // instantiation
				this._constructing = true;
				constructor.apply(this, arguments);
				delete this._constructing;
			} else if (arguments[0] != null) { // casting
				return (arguments[0].extend || extend).call(arguments[0], proto);
			}
		}
	};
	
	// build the class interface
	klass.ancestor = this;
	klass.extend = this.extend;
	klass.forEach = this.forEach;
	klass.implement = this.implement;
	klass.prototype = proto;
	klass.toString = this.toString;
	klass.valueOf = function(type) {
		//return (type == "object") ? klass : constructor; //-dean
		return (type == "object") ? klass : constructor.valueOf();
	};
	extend.call(klass, _static);
	// class initialisation
	if (typeof klass.init == "function") klass.init();
	return klass;
};

Base.prototype = {	
	extend: function(source, value) {
		if (arguments.length > 1) { // extending with a name/value pair
			var ancestor = this[source];
			if (ancestor && (typeof value == "function") && // overriding a method?
				// the valueOf() comparison is to avoid circular references
				(!ancestor.valueOf || ancestor.valueOf() != value.valueOf()) &&
				/\bbase\b/.test(value)) {
				// get the underlying method
				var method = value.valueOf();
				// override
				value = function() {
					var previous = this.base || Base.prototype.base;
					this.base = ancestor;
					var returnValue = method.apply(this, arguments);
					this.base = previous;
					return returnValue;
				};
				// point to the underlying method
				value.valueOf = function(type) {
					return (type == "object") ? value : method;
				};
				value.toString = Base.toString;
			}
			this[source] = value;
		} else if (source) { // extending with an object literal
			var extend = Base.prototype.extend;
			// if this object has a customised extend method then use it
			if (!Base._prototyping && typeof this != "function") {
				extend = this.extend || extend;
			}
			var proto = {toSource: null};
			// do the "toString" and other methods manually
			var hidden = ["constructor", "toString", "valueOf"];
			// if we are prototyping then include the constructor
			var i = Base._prototyping ? 0 : 1;
			while (key = hidden[i++]) {
				if (source[key] != proto[key]) {
					extend.call(this, key, source[key]);

				}
			}
			// copy each of the source object's properties to this object
			for (var key in source) {
				if (!proto[key]) extend.call(this, key, source[key]);
			}
		}
		return this;
	},

	base: function() {
		// call this method from any other method to invoke that method's ancestor
	}
};

// initialise
Base = Base.extend({
	constructor: function() {
		this.extend(arguments[0]);
	}
}, {
	ancestor: Object,
	version: "1.1",
	
	forEach: function(object, block, context) {
		for (var key in object) {
			if (this.prototype[key] === undefined) {
				block.call(context, object[key], key, object);
			}
		}
	},
		
	implement: function() {
		for (var i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] == "function") {
				// if it's a function, call it
				arguments[i](this.prototype);
			} else {
				// add the interface using the extend method
				this.prototype.extend(arguments[i]);
			}
		}
		return this;
	},
	
	toString: function() {
		return String(this.valueOf());
	}
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:51:"/ispring_bitrix/content/js/handler.js?1439824235199";s:6:"source";s:37:"/ispring_bitrix/content/js/handler.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * Creates event handler for invoking listener method. 
 */
function handler(listener, methodName)
{
	return function()
	{
		return listener[methodName].apply(listener, arguments);
	};
}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:56:"/ispring_bitrix/content/js/lazyload.func.js?146237417863";s:6:"source";s:43:"/ispring_bitrix/content/js/lazyload.func.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function(){
    initLazyLoadedImages($('.lazyloaded'));
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:63:"/ispring_bitrix/content/js/lib/fancybox.func.js?145872929542577";s:6:"source";s:47:"/ispring_bitrix/content/js/lib/fancybox.func.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var WINDOW_SUB_WIDTH                = 30;
var WINDOW_SUB_HEIGHT               = 20;
var FANCYBOX_IFRAME_SUB_WIDTH       = 30;
var FANCYBOX_IFRAME_SUB_HEIGHT      = 20;
var FANCYBOX_SUB_HORIZONTAL_SPACE   = 100;
var FANCYBOX_SPEED                  = 300;
var IS_MOBILE                       = /iphone|ipod|android|blackberry|mini|windows\sce|palm|smartphone|mac|iemobile/i;
var IS_TABLET                       = /ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i;
var YOUTUBE_VIDEO_WIDTH             = 853;
var YOUTUBE_VIDEO_HEIGHT             = 480;
var VIMEO_VIDEO_WIDTH             = 960;
var VIMEO_VIDEO_HEIGHT             = 540;
var CLOUD_VIDEO_WIDTH              = 700;
var CLOUD_VIDEO_HEIGHT             = 600;

var FORM_WIDTH                     = 685;
var FORM_HEIGHT                    = 450;

var g_fancyObjectsSizesArr = new Array();
var g_noBorderFrames = new Array();

function checkDevice()
{
    var isMobile = (IS_MOBILE.test(navigator.userAgent.toLowerCase()));
    var isTablet = (IS_TABLET.test(navigator.userAgent.toLowerCase()));
    return isMobile || isTablet;
}

function initResourceParamArr()
{
    g_fancyObjectsSizesArr["/ipad/index.html"]                                               = [760, 630];
    g_fancyObjectsSizesArr["/images/pro/toolbar_pro1.jpg"]                                   = [740, 626];
    g_fancyObjectsSizesArr["/images/pro/pres_explorer.jpg"]                                  = [783, 595];
    g_fancyObjectsSizesArr["/images/pro/interface_screenshot.png"]                           = [828, 641];
    g_fancyObjectsSizesArr["/images/pro/publish_cd_screenshot.png"]                          = [828, 641];
    
    g_fancyObjectsSizesArr["/images/mobile_player/output-options-full.jpg"]               = [838, 651];
    g_fancyObjectsSizesArr["/images/mobile_player/mobile-app-info-full-1.jpg"]              = [486, 401];
    g_fancyObjectsSizesArr["/images/mobile_player/library-sample-full.jpg"]               = [660, 445];
        
    g_fancyObjectsSizesArr["/images/pro/overview/screenshots/toolbar_full.jpg"]              = [1021, 766];
    g_fancyObjectsSizesArr["/images/pro/overview/screenshots/general_full.jpg"]              = [838, 651];
    g_fancyObjectsSizesArr["/images/pro/overview/screenshots/player_full.jpg"]               = [1030, 650];
    g_fancyObjectsSizesArr["/images/pro/overview/screenshots/narrations_full.jpg"]           = [1024, 768];
    
    g_fancyObjectsSizesArr["/images/free_suite/screenshots/full/suite-lms.png"]                 = [824, 615];
    g_fancyObjectsSizesArr["/images/free_suite/screenshots/full/color-branding.png"]            = [1010, 609];
    g_fancyObjectsSizesArr["/images/free_suite/screenshots/full/company-logo.png"]              = [574, 346];
    g_fancyObjectsSizesArr["/images/free_suite/screenshots/full/customize-course-player.png"]   = [983, 614];
    g_fancyObjectsSizesArr["/images/free_suite/screenshots/full/info-presenter.png"]            = [1010, 609];
    g_fancyObjectsSizesArr["/images/free_suite/screenshots/full/narration-synchronization.png"] = [1024, 768];
    g_fancyObjectsSizesArr["/images/free_suite/screenshots/full/presenter-video.png"]           = [1010, 609];
    
    g_fancyObjectsSizesArr["/images/pro_7_beta/full/player-templates-1.png"]                   = [955, 616];
    g_fancyObjectsSizesArr["/images/pro_7_beta/full/player-colors-1.png"]                      = [955, 616];
    g_fancyObjectsSizesArr["/images/pro_7_beta/full/player-layout-1.png"]                      = [955, 616];
    g_fancyObjectsSizesArr["/images/pro_7_beta/full/presentation-explorer-branching-1.png"]    = [979, 676];
    g_fancyObjectsSizesArr["/images/pro_7_beta/full/narration-editor-1.png"]                   = [938, 687];

    g_fancyObjectsSizesArr["/images/presenter/deliver_courses.png"]                          = [828, 641];
    g_fancyObjectsSizesArr["/images/presenter/toolbar_full1.png"]                            = [878, 584];
    g_fancyObjectsSizesArr["/images/presenter/quiz.png"]                                     = [713, 509];
    g_fancyObjectsSizesArr["/images/pro/overview/ispring_api_full.jpg"]                      = [644, 459];
    g_fancyObjectsSizesArr["/images/presenter/presenter.png"]                                = [828, 641];
    g_fancyObjectsSizesArr["/images/presenter/publish_cd_screenshot.png"]                    = [828, 641];
    g_fancyObjectsSizesArr["/images/presenter/quizmaker.png"]                                = [870, 709];
    g_fancyObjectsSizesArr["/images/presenter/side_panel_position.png"]                      = [817, 580];

    g_fancyObjectsSizesArr["/images/quizmaker/quizmaker1.png"]                               = [1011, 713];
    g_fancyObjectsSizesArr["/images/quizmaker/quiz_publish_isonline.png"]                    = [834, 561];
    g_fancyObjectsSizesArr["/images/quizmaker/publish_window.png"]                           = [834, 561];
    g_fancyObjectsSizesArr["/images/quizmaker/overview/manage_quizzes_full.jpg"]             = [963, 704];

    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.0_full_size/startup.jpg"]             = [602, 432];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.0_full_size/new_type_questions.jpg"]  = [963, 704];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.0_full_size/blank_slide.jpg"]         = [710, 535];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.0_full_size/quiz_formulas.jpg"]       = [983, 720];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.0_full_size/individual_feedback.jpg"] = [970, 690];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.0_full_size/branching.jpg"]           = [963, 704];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.0_full_size/print.jpg"]               = [725, 535];

    g_fancyObjectsSizesArr["/images/free_quiz_maker/full/graded_quizzes.png"]                   = [1024, 768];
    g_fancyObjectsSizesArr["/images/free_quiz_maker/full/adv_cust_1.png"]                       = [756,  698];
    g_fancyObjectsSizesArr["/images/free_quiz_maker/full/adv_cust_2.png"]                       = [756,  698];
    g_fancyObjectsSizesArr["/images/free_quiz_maker/full/adv_cust_3.png"]                       = [756,  698];
    g_fancyObjectsSizesArr["/images/free_quiz_maker/full/adv_cust_4.png"]                       = [756,  698];
    g_fancyObjectsSizesArr["/images/free_quiz_maker/full/adv_lms.png"]                          = [838,  565];
    g_fancyObjectsSizesArr["/images/free_quiz_maker/full/branching.png"]                        = [1024, 760];

    g_fancyObjectsSizesArr["/images/sdk/overview/platform_sheme_full.png"]                      = [755, 600];
    g_fancyObjectsSizesArr["/images/sdk/overview/codebuilder_screen.png"]                       = [748, 697];

    g_fancyObjectsSizesArr["/images/go_pro/features/big/audio_narration1.jpg"]                = [655, 324];
    g_fancyObjectsSizesArr["/images/go_pro/features/big/blackboard.jpg"]                      = [838, 651];
    g_fancyObjectsSizesArr["/images/go_pro/features/big/branding_and_presenter_info.jpg"]     = [590, 257];
    g_fancyObjectsSizesArr["/images/go_pro/features/big/content_protection1.jpg"]             = [838, 651];
    g_fancyObjectsSizesArr["/images/go_pro/features/big/publish_lms.jpg"]                     = [838, 651];
    g_fancyObjectsSizesArr["/images/go_pro/features/big/interaction.jpg"]                     = [838, 651];
    g_fancyObjectsSizesArr["/images/go_pro/features/big/quizmaker.jpg"]                       = [1022, 773];
    g_fancyObjectsSizesArr["/images/go_pro/features/big/quizmaker_startup.jpg"]               = [600, 430];
    g_fancyObjectsSizesArr["/images/go_pro/features/big/customizable_player.jpg"]             = [838, 651];
    g_fancyObjectsSizesArr["/images/go_pro/features/big/players.jpg"]                         = [590, 257];
    g_fancyObjectsSizesArr["/images/go_pro/features/big/quiz_preview.jpg"]                    = [854, 764];
    g_fancyObjectsSizesArr["/images/go_pro/features/big/tuning.jpg"]                          = [838, 651];
    g_fancyObjectsSizesArr["/images/go_pro/features/big/video.jpg"]                           = [637, 314];

    g_fancyObjectsSizesArr["/images/upgrade_to_quizmaker/full/learning_course.jpg"]                = [881, 544];
    g_fancyObjectsSizesArr["/images/upgrade_to_quizmaker/full/branching.png"]                      = [963, 704];
    g_fancyObjectsSizesArr["/images/upgrade_to_quizmaker/full/publish.jpg"]                        = [838, 565];
    g_fancyObjectsSizesArr["/images/upgrade_to_quizmaker/full/quizmaker.jpg"]                      = [1022, 773];
    g_fancyObjectsSizesArr["/images/upgrade_to_quizmaker/full/track_quiz_results.jpg"]             = [746, 698];

    g_fancyObjectsSizesArr["/images/player_pack/players/streamline1.jpg"]                     = [867, 536];
    g_fancyObjectsSizesArr["/images/player_pack/players/streamline2.jpg"]                     = [999, 563];
    g_fancyObjectsSizesArr["/images/player_pack/players/streamline3.png"]                     = [988, 563];
    g_fancyObjectsSizesArr["/images/player_pack/players/glossy1.jpg"]                         = [898, 578];
    g_fancyObjectsSizesArr["/images/player_pack/players/glossy2.jpg"]                         = [597, 399];
    g_fancyObjectsSizesArr["/images/player_pack/players/glossy3.jpg"]                         = [898, 578];
    g_fancyObjectsSizesArr["/images/player_pack/players/matte1.png"]                          = [898, 578];
    g_fancyObjectsSizesArr["/images/player_pack/players/matte2.jpg"]                          = [898, 578];
    g_fancyObjectsSizesArr["/images/player_pack/players/matte3.jpg"]                          = [898, 578];
    g_fancyObjectsSizesArr["/images/player_pack/players/crystal1.jpg"]                        = [634, 573];
    g_fancyObjectsSizesArr["/images/player_pack/players/crystal2.jpg"]                        = [634, 573];
    g_fancyObjectsSizesArr["/images/player_pack/players/crystal3.jpg"]                        = [634, 573];
    g_fancyObjectsSizesArr["/images/player_pack/players/navigation_panel1.jpg"]               = [720, 541];
    g_fancyObjectsSizesArr["/images/player_pack/players/navigation_panel2.jpg"]               = [720, 541];
    g_fancyObjectsSizesArr["/images/player_pack/players/notes1.jpg"]                          = [683, 512];
    g_fancyObjectsSizesArr["/images/player_pack/players/notes2.jpg"]                          = [683, 512];
    g_fancyObjectsSizesArr["/images/player_pack/players/marker1.jpg"]                         = [898, 578];
    g_fancyObjectsSizesArr["/images/player_pack/players/marker2.jpg"]                         = [898, 578];
    g_fancyObjectsSizesArr["/images/player_pack/players/classic1.jpg"]                        = [944, 643];
    g_fancyObjectsSizesArr["/images/player_pack/players/classic2.png"]                        = [944, 643];
    g_fancyObjectsSizesArr["/images/player_pack/players/classic3.jpg"]                        = [944, 643];

    g_fancyObjectsSizesArr["/powerpoint/free-elearning-templates/process-interaction-1.html"]  = [642, 517];
    g_fancyObjectsSizesArr["/powerpoint/free-elearning-templates/process-interaction-2.html"]  = [642, 517];
    g_fancyObjectsSizesArr["/powerpoint/free-elearning-templates/tabs-interaction-1.html"]     = [642, 517];
    g_fancyObjectsSizesArr["/powerpoint/free-elearning-templates/tabs-interaction-2.html"]     = [642, 517];

    g_fancyObjectsSizesArr["/images/free_suite/screenshots/full/flash_based_interactions.jpg"] = [883, 624];
    g_fancyObjectsSizesArr["/images/free_suite/screenshots/full/audio_video.png"]              = [1001, 872];
    g_fancyObjectsSizesArr["/images/free_suite/screenshots/full/questions_categories.png"]     = [1024, 728];
    g_fancyObjectsSizesArr["/images/free_suite/screenshots/full/customizable_player.png"]      = [1024, 645];
    g_fancyObjectsSizesArr["/images/free_suite/screenshots/full/company_logo.png"]             = [838, 651];

    g_fancyObjectsSizesArr["/images/articles/accupoint_technology/technology_scheme.jpg"]    = [732, 810];

    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.0_full_size/startup.png"]               = [602,432];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.0_full_size/attempts.png"]              = [730,650];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.0_full_size/blank_slide.png"]           = [710,535];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.0_full_size/branching.png"]             = [1037,767];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.0_full_size/full_screen.png"]           = [1046,772];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.0_full_size/individual_feedback.png"]   = [1037,767];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.0_full_size/new_type_questions.png"]    = [1037,767];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.0_full_size/preview.png"]               = [1037,767];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.0_full_size/print.png"]                 = [707,507];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.0_full_size/publish_lms.png"]           = [824,529];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.0_full_size/quiz_formulas.png"]         = [1037,767];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.0_full_size/score.png"]                 = [730,650];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.0_full_size/send_result.png"]           = [730,650];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.0_full_size/show_all_questions.png"]    = [730,650];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.0_full_size/show_random_questions.png"] = [730,650];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.0_full_size/shuffle_answers.png"]       = [730,650];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.0_full_size/text_labels.png"]           = [730,650];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.0_full_size/time_limit.png"]            = [730,650];
    g_fancyObjectsSizesArr["/images/quizmaker/overview/manage_quizzes_full_1.jpg"]                = [1024,728];

    g_fancyObjectsSizesArr["/images/vocabulary_quiz/matching-screen.png"]     = [1024,728];
    g_fancyObjectsSizesArr["/images/vocabulary_quiz/insert-image-screen.png"] = [1024,728];
    g_fancyObjectsSizesArr["/images/vocabulary_quiz/preview-screen.png"]      = [728,575];

    g_fancyObjectsSizesArr["/images/kinetics/whats_new/6.1/full/3d_book_player.png"]                  = [883,655];
    g_fancyObjectsSizesArr["/images/kinetics/whats_new/6.1/full/record_audio.png"]                    = [1000,733];
    g_fancyObjectsSizesArr["/images/kinetics/whats_new/6.1/full/insert_video.png"]                    = [1000,733];
    g_fancyObjectsSizesArr["/images/kinetics/whats_new/6.1/full/preview_inteactions.png"]             = [1000,733];

    g_fancyObjectsSizesArr["/images/pro/whats_new/6.1/full/quiz_bazed_brabching.png"]                 = [951,595];
    g_fancyObjectsSizesArr["/images/pro/whats_new/6.1/full/web_objects_interactions_1.png"]             = [996,786];
    g_fancyObjectsSizesArr["/images/pro/whats_new/6.1/full/maker_tool.png"]                           = [1000,615];
    g_fancyObjectsSizesArr["/images/pro/whats_new/6.1/full/removing_navigation_buttons.png"]          = [1024,645];
    g_fancyObjectsSizesArr["/images/pro/whats_new/6.1/full/navigation_tooltips.png"]                  = [986,615];
    g_fancyObjectsSizesArr["/images/pro/whats_new/6.1/full/slide_notes.png"]                          = [986,615];
    g_fancyObjectsSizesArr["/images/pro/whats_new/improved_narration_editor.png"]            = [1024,768];
    g_fancyObjectsSizesArr["/images/pro/whats_new/6.1/full/more_player_layouts.png"]                  = [951,595];
    g_fancyObjectsSizesArr["/images/pro/whats_new/6.1/full/settings_completition_statuses.png"]       = [838,651];

    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.1/full/text_styles_and_hyperlinks.png"]          = [1024,728];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.1/full/embedded_flash_movie.png"]                = [1024,728];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.1/full/number_of_attempts.png"]                  = [746,698];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.1/full/customizable_result_letter_template.png"] = [726,643];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.1/full/custom_points_for_multiple_choice.png"]   = [1024,728];
    g_fancyObjectsSizesArr["/images/quizmaker/whats_new/6.1/full/settings_completition_statuses.png"]      = [838,651];

    g_fancyObjectsSizesArr["/images/pro/whats_new/full/narration.png"]                      = [980,778];
    g_fancyObjectsSizesArr["/images/pro/whats_new/full/streamline_player.jpg"]              = [980,600];
    g_fancyObjectsSizesArr["/images/pro/whats_new/full/enhanced_protection.jpg"]            = [838,651];
    g_fancyObjectsSizesArr["/images/pro/whats_new/full/integration_with_kinetics.jpg"]      = [965,739];
    g_fancyObjectsSizesArr["/images/pro/whats_new/full/integration_with_quizmaker.jpg"]     = [965,739];
    g_fancyObjectsSizesArr["/images/pro/whats_new/full/lms_compliance.jpg"]                 = [838,651];

    g_fancyObjectsSizesArr["/images/pro/screenshot_tour/full/insert_movies.jpg"]              = [965,739];
    /*no*/
    g_fancyObjectsSizesArr["/images/pro/screenshot_tour/full/attaches_and_links.jpg"]         = [980,600];
    g_fancyObjectsSizesArr["/images/pro/screenshot_tour/full/personify_presentation.jpg"]     = [610,500];
    g_fancyObjectsSizesArr["/images/pro/screenshot_tour/full/kinetics_interactions.jpg"]      = [965,739];
    g_fancyObjectsSizesArr["/images/pro/screenshot_tour/full/add_quiz.jpg"]                   = [965,739];
    g_fancyObjectsSizesArr["/images/pro/screenshot_tour/full/compliant_course.jpg"]           = [838,651];
    g_fancyObjectsSizesArr["/images/pro/screenshot_tour/full/customize_player.jpg"]           = [980,600];
    g_fancyObjectsSizesArr["/images/pro/screenshot_tour/full/protect_project.jpg"]            = [838,651];
    g_fancyObjectsSizesArr["/images/pro/screenshot_tour/full/required_format.jpg"]            = [838,651];
    g_fancyObjectsSizesArr["/images/pro/whats_new/full/narration.jpg"]                        = [980,778];
    g_fancyObjectsSizesArr["/images/pro/whats_new/full/integration_with_kinetics.jpg"]        = [965,739];
    g_fancyObjectsSizesArr["/images/pro/whats_new/full/integration_with_quizmaker.jpg"]       = [965,739];

    g_fancyObjectsSizesArr["/ispring-pro/samples.html"]                 = [856,718];
    g_fancyObjectsSizesArr["/ispring-presenter/samples.html"]           = [1001,693];
    g_fancyObjectsSizesArr["/ispring-kinetics/samples.html"]            = [938,693];
    g_fancyObjectsSizesArr["/ispring-quizmaker/samples.html"]           = [856,660];
    g_fancyObjectsSizesArr["/free-quiz-maker/samples.html"]      = [906, 718];
    g_fancyObjectsSizesArr["/free-quiz-maker/samples.html?id=1"] = [906, 718];
    g_fancyObjectsSizesArr["/free-quiz-maker/samples.html?id=0"] = [906, 718];
    g_fancyObjectsSizesArr["/free-quiz-maker/survey.html"]       = [800, 600];

    g_fancyObjectsSizesArr["/ispring-presenter/video-windows-size-mode.html"] = [901, 550];

    g_fancyObjectsSizesArr["/products/presenter/system_requirements.html"] = [774, 600];
    g_fancyObjectsSizesArr["/products/pro/system_requirements.html"]       = [774, 600];
    g_fancyObjectsSizesArr["/products/quizmaker/system_requirements.html"] = [774, 600];
    g_fancyObjectsSizesArr["/products/kinetics/system_requirements.html"]  = [774, 600];
    g_fancyObjectsSizesArr["/products/suite/system_requirements.html"]     = [774, 600];
    g_fancyObjectsSizesArr["/products/platform/system_requirements.html"]  = [774, 600];
    g_fancyObjectsSizesArr["/products/free/system_requirements.html"]      = [774, 600];

    g_fancyObjectsSizesArr["/ispring-pro/quick-tour.html"]       = [640, 498];
    g_fancyObjectsSizesArr["/ispring-presenter/quick-tour.html"] = [640, 498];
    g_fancyObjectsSizesArr["/ispring-quizmaker/quick-tour.html"] = [640, 498];
    g_fancyObjectsSizesArr["/ispring-online/quick-tour.html"]    = [640, 498];
    g_fancyObjectsSizesArr["/ispring-suite/quick-tour.html"]     = [640, 498];
    g_fancyObjectsSizesArr["/resources/demo/converter/auton_pro_2/auton_pro.html"] = [656, 541];

    g_fancyObjectsSizesArr["/login.html"] = [685, 449];
    g_fancyObjectsSizesArr["/login.html?target=account"] = [685, 449];
    g_fancyObjectsSizesArr["/login.html?target=create_account"] = [685, 449];

    g_fancyObjectsSizesArr["/signin.html"] = [388, 241];

    g_fancyObjectsSizesArr["/images/quizmaker/full/layouts.png"]                   = [881, 744];
    g_fancyObjectsSizesArr["/images/quizmaker/full/animations.png"]                      = [955, 616];
    g_fancyObjectsSizesArr["/images/quizmaker/full/themes.png"]                      = [955, 616];
    g_fancyObjectsSizesArr["/resources/demo/presenter/ispring-presenter-7-promo-flash-2/ispring-presenter-7-promo-flash1.swf"] = [1024, 616];

    g_noBorderFrames = [
        "/login.html",
        "/login.html?target=account",
        "/login.html?target=create_account"
    ];

    if ( typeof g_demosDimensions != 'undefined' )
    {
        for (path in g_demosDimensions)
        {
            g_fancyObjectsSizesArr[path] = g_demosDimensions[path];
        }
    }

    if ( typeof g_tutorialsDimensions != 'undefined' )
    {
        for (path in g_tutorialsDimensions)
        {
            g_fancyObjectsSizesArr[path] = g_tutorialsDimensions[path];
        }
    }
}

function isSizeDefined( objectUrl )
{
    return typeof( g_fancyObjectsSizesArr[objectUrl] ) != "undefined";
}

/**
 * Returns resource width by name.
 */
function getFancyObjectWidth( objectUrl, isWideScreen )
{
    var width;
    if ( typeof( g_fancyObjectsSizesArr[objectUrl] ) != "undefined" )
    {
        width = parseInt(g_fancyObjectsSizesArr[objectUrl][0]);
    }
    else if (objectUrl.indexOf("/v/") != -1 || objectUrl.indexOf("/embed/") != -1)
    {
        width = (isWideScreen) ? VIMEO_VIDEO_WIDTH : YOUTUBE_VIDEO_WIDTH;
    }
    else if (objectUrl.indexOf("html") != -1)
    {
        width = FORM_WIDTH;
    }
    else if (objectUrl.indexOf("player.vimeo.com") != -1)
    {
        width = VIMEO_VIDEO_WIDTH;
    }
    else if (objectUrl.indexOf("ispri.ng") != -1)
    {
        width = CLOUD_VIDEO_WIDTH;
    }
    else
    {
        var match = objectUrl.match(/width=[0-9]+/i);
        if ( match )
        {
            width = parseInt( match[0].replace('width=', '') );
        }
    }

    return width ? width : $(window).width();
}

/**
 * Returns resource height by name.
 */
function getFancyObjectHeight( objectUrl, isWideScreen )
{
    var height;
    if ( typeof( g_fancyObjectsSizesArr[objectUrl] ) != "undefined" )
    {
        height = parseInt(g_fancyObjectsSizesArr[objectUrl][1]);
    }
    else if (objectUrl.indexOf("/v/") != -1 || objectUrl.indexOf("/embed/") != -1)
    {
        height = (isWideScreen) ? VIMEO_VIDEO_HEIGHT : YOUTUBE_VIDEO_HEIGHT;
    }
    else if (objectUrl.indexOf("html") != -1)
    {
        height = FORM_HEIGHT;
    }
    else if (objectUrl.indexOf("player.vimeo.com") != -1)
    {
        height = VIMEO_VIDEO_HEIGHT;
    }
    else if (objectUrl.indexOf("ispri.ng") != -1)
    {
        height = CLOUD_VIDEO_HEIGHT;
    }
    else
    {
        var match = objectUrl.match(/height=[0-9]+/i);
        if ( match )
        {
            height = parseInt( match[0].replace('height=', '') );
        }
    }
    return height ? height : $(window).height();
}

/**
 * Returns resource content type.
 */
function getResourceContentType( resource )
{
    var isSwf = ( resource.toLowerCase().indexOf( ".swf" ) != -1 );
    if ( isSwf )
    {
        return "swf";
    }

    var isHtml = ( resource.toLowerCase().indexOf( ".html" ) != -1 );
    if ( isHtml )
    {
        return "html";
    }

    var isImg = ( resource.toLowerCase().indexOf( ".jpg" ) != -1 )
        || ( resource.toLowerCase().indexOf( ".gif" ) != -1 )
        || ( resource.toLowerCase().indexOf( ".png" ) != -1 );
    if ( isImg )
    {
        return "img";
    }

    var isYouTubeSwf = ( resource.toLowerCase().indexOf( "/v/" ) != -1 )
    if ( isYouTubeSwf )
    {
        return "youtube-swf";
    }

    return "html";
}

function getFancyViewSwfUrl( targetUrl, width, height, title /* = "" */, pageId /* = "" */)
{
    var title = title || "";
    var url = "/preview_swf.html?";
    if (pageId && pageId.indexOf("quicktour") != -1)
        url += "ref=qt&";
    url += "swf_name=" + escape( targetUrl ) + "&width=" + width + "&height=" + height + "&title=" + title + "&autostart=true";
    var trackPageId = pageId != "" && typeof(pageId) != "undefined" ? pageId : $( "#track_page_id" ).val();
    if ( trackPageId != "" )
        url += "&page=" + trackPageId;

    return url;
}

/**
 * Handles fancybox-link click.
 */
function fancyBoxLinkHandler( target, title, width, height, pageId /* = "" */ )
{
  
    var targetPath = getUrlPath(target);

    var windowHeight    = getWindowHeight();
    var contentType     = getResourceContentType( targetPath );
    var targetWidth     = width || getFancyObjectWidth( targetPath );
    var targetHeight    = height || getFancyObjectHeight( targetPath );

    if ( contentType != 'img' )
    {
        $( "#fancybox-outer" ).unbind();
    }
    else
    {
        $( "#fancybox-outer" ).bind( "click", function(){
            $.fancybox.close();
        });
    }

    var doesContentSizeFitWindow = ( targetHeight + FANCYBOX_SUB_HORIZONTAL_SPACE <= windowHeight );

    if ( !doesContentSizeFitWindow )
    {
        var contentUrl = "";
        if ( contentType == 'html' || contentType == 'youtube-swf' )
        {
            contentUrl = target;
        }
        else if ( contentType == 'swf' )
        {
            contentUrl = getFancyViewSwfUrl( target, targetWidth, targetHeight, title, pageId );
        }
        else
        {
            contentUrl = "/image_viewer.html?img=" + escape( target ) + "&title=" + title;
        }
        openPopupWindow( encodeURI( contentUrl ), targetWidth + WINDOW_SUB_WIDTH, targetHeight + WINDOW_SUB_HEIGHT, "yes", "no" );
        enable_scroll();

        return false;
    }
    return true;
}

function initFlashLink(link, targetUrl, targetWidth, targetHeight, pageId /* ="" */ )
{
    link = $(link);
    var title = link.attr( "title" );
    var contentType = getResourceContentType( targetUrl );

    var contentUrl = contentType == 'swf'
        ? getFancyViewSwfUrl( targetUrl, targetWidth, targetHeight, title, pageId )
        : targetUrl;
    link.fancybox({
        'titleShow'         : true,
        'overlayOpacity'    : 0.7,
        'overlayColor'      : '#000',
        'transitionIn'      : 'elastic',
        'speedIn'           : FANCYBOX_SPEED,
        'transitionOut'     : 'elastic',
        'speedOut'          : FANCYBOX_SPEED,
        'padding'           : 0,
        'width'             : targetWidth,
        'height'            : targetHeight,
        'minWidth'          : targetWidth,
        'minHeight'         : targetHeight,
        'maxWidth'          : targetWidth,
        'maxHeight'         : targetHeight,
        'href'              : encodeURI( contentUrl ),
        'type'              : 'iframe',
        'swf'               : {'allowfullscreen': true},
        'scrolling'         : 'no',
        'beforeLoad'           : function(){
            disable_scroll();
            return fancyBoxLinkHandler( targetUrl, title, targetWidth, targetHeight, pageId );
        },
        'beforeShow'        : function(){showPreloader(); showProductDownloadButton(targetUrl)},
        'afterClose': function(){ enable_scroll();},

        'afterLoad'         : function(){hidePreloader(); hideProductDownloadButton(targetUrl)}

    });
}

function disable_scroll() {
    window.onwheel = function(){ return false; }
}

function enable_scroll() {
    window.onwheel = function(){ return true; }
}

function initYouTubeLink(link, targetUrl, targetWidth, targetHeight, pageId  /*=""*/  )
{
    link = $(link);
    var title = link.attr( "title" );
    var contentType = getResourceContentType( targetUrl );

    var contentUrl = contentType == 'swf'
        ? getFancyViewSwfUrl( targetUrl, targetWidth, targetHeight, title, pageId )
        : targetUrl;

    var typeContent = contentType == 'youtube-swf' ? 'swf' : 'iframe';

    link.fancybox({
        'titleShow'         : true,
        'overlayOpacity'    : 0.7,
        'overlayColor'      : '#000',
        'transitionIn'      : 'elastic',
        'speedIn'           : FANCYBOX_SPEED,
        'padding'           : 0,
        'width'             : targetWidth,
        'height'            : targetHeight,
        'minWidth'          : targetWidth,
        'minHeight'         : targetHeight,
        'maxWidth'          : targetWidth,
        'maxHeight'         : targetHeight,
        'href'              : encodeURI( contentUrl ),
        'type'              : typeContent,
        'scrolling'         : 'no',
		'autoScale'		    : false,
        'swf'               : {allowfullscreen: true},
        'aspectRatio'       : true,
        'beforeLoad'           : function(){
            return fancyBoxLinkHandler( targetUrl, title, targetWidth, targetHeight, pageId );
        },
        'beforeShow'        : function(){showPreloader(); showProductDownloadButton(targetUrl)},

        'afterLoad'         : function(){hidePreloader(); hideProductDownloadButton(targetUrl)}
    });
}

function showPreloader()
{
    $('#fancybox-content').addClass('fancybox_preloader');
}

function hidePreloader()
{
    $('#fancybox-content').removeClass('fancybox_preloader');
}

function showProductDownloadButton(targetUrl)
{
    if (targetUrl.indexOf('/ispring-pro/quick-tour.html') != -1)
    {
        $( "#fancybox-content" ).find('iframe').after('<a href="/ispring-pro/download.html" class="try_free_for_quick_tour">&nbsp;</a>');
        $( "#fancybox-content" ).css({overflow: 'visible'});
    }
}

function hideProductDownloadButton(targetUrl)
{
    if (targetUrl.indexOf('/ispring-pro/quick-tour.html') != -1)
    {
        $('.try_free_for_quick_tour').remove();
    }  
}

/**
 * Inits fancybox.
 */
function initFancyBox( container )
{
    var fancyboxLinks = container ? container.find('.fancybox-link') : $('.fancybox-link');
    fancyboxLinks.each(function() {
        var targetUrl = $( this ).attr( "href" );

        if ( getResourceContentType( targetUrl ) == "swf" )
        {
            if ( targetUrl == "#" )
                return;

            var targetPath = getUrlPath(targetUrl);

            var targetWidth = getFancyObjectWidth( targetPath );
            var targetHeight = getFancyObjectHeight( targetPath );

            initFlashLink( this, targetUrl, targetWidth, targetHeight );
        }
        else
        {
            $( this ).fancybox({
                'titleShow'     : true,
                'overlayOpacity'    : 0.7,
                'overlayColor'      : '#000',
                'transitionIn'      : 'elastic',
                'transitionOut'     : 'elastic',
                'speedOut'          : FANCYBOX_SPEED,
                'speedIn'           : FANCYBOX_SPEED,
                'padding'           : 0,
                'beforeLoad'        : function(){
                    return fancyBoxLinkHandler( $(this).attr('href'), $(this).attr( 'title' ) );
                }
            });
        }
    });

    var fancyboxFlashLinks = container ? container.find('.fancybox-flash-link') : $('.fancybox-flash-link');
    fancyboxFlashLinks.each(function() {

        var targetUrl = $( this ).attr( "href" );

        if ( targetUrl == "#" )
            return;

        var targetPath = getUrlPath(targetUrl);

        var targetWidth = getFancyObjectWidth( targetPath );
        var targetHeight = getFancyObjectHeight( targetPath );

        initFlashLink( this, targetUrl, targetWidth, targetHeight );
    });

}

function initFancyBoxHTML5Links(container)
{
    var fancyboxFlashLinks = container ? container.find('.fancybox-html5-link') : $('.fancybox-html5-link');
    
    fancyboxFlashLinks.each(function() {
        var targetUrl, targetWidth, targetHeight;
        if (isHtml5supported())
        {
            targetUrl = $( this ).attr( "href" );

            if ( targetUrl == "#" )
                return;

            var targetPath = getUrlPath(targetUrl);

            targetWidth = getFancyObjectWidth( targetPath );
            targetHeight = getFancyObjectHeight( targetPath );
        }
        else
        {
            targetUrl = "/images/html5_is_not_supported.jpg";
            targetWidth = 535;
            targetHeight = 253;
        }

        initFlashLink( this, targetUrl, targetWidth, targetHeight );
    });
}

function initYouTubeVideoFancyBox(container)
{
    var fancyboxFlashLinks = container ? container.find('.fancybox-youtube-link') : $('.fancybox-youtube-link');
    
    fancyboxFlashLinks.each(function() {
        var targetUrl, targetWidth, targetHeight;

        targetUrl = $( this ).attr( "href" );

        if ( targetUrl == "#" )
            return;

        var targetPath = getUrlPath(targetUrl);

        var isWideScreen = $(this).hasClass('widescreen');
        targetWidth = getFancyObjectWidth( targetPath , isWideScreen );
        targetHeight = getFancyObjectHeight( targetPath, isWideScreen );

        initYouTubeLink( this, targetUrl, targetWidth, targetHeight );
    });
}

function initVimeoVideoFancyBox(container)
{
    var fancyboxVimeoLinks = container ? container.find('.fancybox-vimeo-link') : $('.fancybox-vimeo-link');

    fancyboxVimeoLinks.each(function() {
        var targetUrl, targetWidth, targetHeight;

        targetUrl = $( this ).attr( "href" );

        if ( targetUrl == "#" )
            return;

        targetWidth = getFancyObjectWidth( targetUrl );
        targetHeight = getFancyObjectHeight( targetUrl );


        initFlashLink( this, targetUrl, targetWidth, targetHeight );
    });
}

/**
 * Handles fancybox-link demo click.
 */
function fancyBoxDemoHandler( target, scrollbar )
{
    target = String(target);

    var path = preparePath( target );

    var windowHeight    = getWindowHeight();
    var targetWidth     = getFancyObjectWidth( path );
    var targetHeight    = getFancyObjectHeight( path );

    var doesContentSizeFitWindow = ( targetHeight + FANCYBOX_SUB_HORIZONTAL_SPACE <= windowHeight );
    if ( !doesContentSizeFitWindow )
    {
        if (!scrollbar)
        {
            scrollbar = "no";
        }

        if ( $(".fancybox-demo-link").html() != null)
        {
            targetHeight = targetHeight - 65;
        }

        openPopupWindow( encodeURI( target ), targetWidth, targetHeight, scrollbar, "no" );

        return false;
    }
    return true;
}

function requirementsFancyBoxHandler( target, scrollbar )
{

    var isiPad = navigator.userAgent.match(/iPad/i) != null;
    if ( isiPad )
    {
        var path = preparePath( target );
        var targetWidth  = getFancyObjectWidth( path );
        var targetHeight = getFancyObjectHeight( path );

        target = getUrlPath(target);
        openPopupWindow( encodeURI( target ), targetWidth, targetHeight, scrollbar );
        return false;
    }

    return fancyBoxDemoHandler( target, scrollbar );
}

function preparePath(path)
{
    if ( !isSizeDefined(path) )
    {
        // try to find object sizes by its path without params
        var newPath = stripUrlParams(path);
        if (path != newPath)
        {
            path = newPath;
        }
    }
    return path;
}

function initFrameFancyBox(className, onStartFunc, onCleanup)
{
    $( '.' + className ).each(function(){
        onStartFunc = (onStartFunc) ? onStartFunc : function(){ 
            return true; 
        };

        onCleanup = (onCleanup) ? onCleanup : function(){
            return true;
        };


        var target = $( this ).attr( "href" );

        if ( target == "#" )
            return;

        contentTarget = getUrlPath(target);

        var targetWidth  =  getFancyObjectWidth( contentTarget );
        var targetHeight = getFancyObjectHeight( contentTarget );

        $( this ).fancybox({
            'type'              : 'iframe',
            'scrolling'         : 'no',
            'titleShow'         : false,
            'overlayOpacity'    : 0.7,
            'overlayColor'      : '#000',
            'speedOut'          : FANCYBOX_SPEED,
            'speedIn'           : FANCYBOX_SPEED,
            'padding'           : 0,
            'width'             : targetWidth,
            'height'            : targetHeight,
            'minWidth'          : targetWidth,
            'minHeight'         : targetHeight,
            'maxWidth'          : targetWidth,
            'maxHeight'         : targetHeight,
            'href'              : encodeURI( target ),
            'onStart'           : function(){
                return onStartFunc(target);
            },
            'onCleanup'           :function(){
                return onCleanup(target);
            },
            wrapCSS: "remove_background"
        });
    });
}

function initHtmlFancyBox(className)
{
    $('.' + className).each(function () {
        $(this).fancybox({
            'scrolling'         : 'no',
            'titleShow'         : false,
            'overlayOpacity'    : 0.7,
            'overlayColor'      : '#000',
            'speedOut'          : FANCYBOX_SPEED,
            'speedIn'           : FANCYBOX_SPEED,
            'padding'           : 0
        });
    });
}

/**
 * Inits demo fancybox.
 */
function initDemoFancyBox()
{
    initFrameFancyBox('fancybox-demo-link', fancyBoxDemoHandler);
}

function initFormFancyBox()
{
    initFrameFancyBox('fancybox-form-link', removeFancyBoxBordersAndBackground, restoreBordersAndBackground);
}

function initResponsiveFormFancyBox()
{
    initHtmlFancyBox('fancybox-html-form-link');
}

function removeFancyBoxBordersAndBackground(target, scrollbar)
{
    var borders = $('#fancybox-outer > .fancybox-bg');
    borders.hide();

    var bgElements  = $('#fancybox-outer, #fancybox-frame');
    bgElements.css({backgroundColor:'transparent'});

    target = String(target);

    var path = preparePath( target );

    var windowHeight    = getWindowHeight();
    var targetWidth     = getFancyObjectWidth( path );
    var targetHeight    = getFancyObjectHeight( path );

    var doesContentSizeFitWindow = ( targetHeight + FANCYBOX_SUB_HORIZONTAL_SPACE <= windowHeight );
    if ( !doesContentSizeFitWindow )
    {
        if (!scrollbar)
        {
            scrollbar = "no";
        }
        openPopupWindow( encodeURI( target ), targetWidth, targetHeight, scrollbar, "no" );

        return false;
    }


    return true;
}

function restoreBordersAndBackground()
{
    $('#fancybox-outer, #fancybox-frame').css({backgroundColor:'#FFF'});
    $('#fancybox-outer > .fancybox-bg').show();

    return true;
}

/**
 * Inits system requirements fancybox.
 */
function initRequirementsFancyBox()
{
    $( ".fancybox-requirements-link" ).each(function(){
        var target = $( this ).attr( "href" );

        if ( target == "#" )
            return;

        target = target.replace( "http://" + getDomain(), "" );

        var path = preparePath( target );

        var targetWidth  = getFancyObjectWidth( path );
        var targetHeight = getFancyObjectHeight( path );

        $( this ).fancybox({
            'titleShow'         : false,
            'overlayOpacity'    : 0.7,
            'overlayColor'      : '#000',
            'transitionIn'      : 'elastic',
            'transitionOut'     : 'elastic',
            'speedOut'          : FANCYBOX_SPEED,
            'speedIn'           : FANCYBOX_SPEED,
            'padding'           : 0,
            'width'             : targetWidth,
            'height'            : targetHeight,
            'href'              : encodeURI( target ),
            'allowScriptAccess' : 'always',
            'type'              : 'iframe',
            'onStart'           : function(){
                return requirementsFancyBoxHandler( target, "yes" );
            },
            'onComplete'        : function(){
                $( "#fancybox-frame" ).attr();
                return true;
            }         
        });
    });
}

function ForgotPasswordFormResize()
{
    $('#fancybox-inner').height(368); 
    $('#fancybox-wrap').height(368); 
    $.fancybox.resize(); 
}

function openLinkInNewTab()
{
    $( '.fancybox-html5-link' ).attr('target', '_blank');
    $( '.fancybox-flash-link' ).attr('target', '_blank');
    $( '.fancybox-requirements-link' ).attr('target', '_blank');
    $( '.fancybox-form-link' ).attr('target', '_blank');
    $( '.fancybox-demo-link' ).attr('target', '_blank');
}

function initAllFancyBoxFunctions()
{
    if (!checkDevice())
    {
        initResourceParamArr();
        initFancyBox();
        initFancyBoxHTML5Links();
        initDemoFancyBox();
        initRequirementsFancyBox();
        initYouTubeVideoFancyBox();
        initVimeoVideoFancyBox();
        initResponsiveFormFancyBox();
    }
    else
    {
        openLinkInNewTab();
    }
}

$(document).ready(initAllFancyBoxFunctions);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:56:"/ispring_bitrix/content/js/placeholder.js?14398242351577";s:6:"source";s:41:"/ispring_bitrix/content/js/placeholder.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * Example: inputPlaceholder( document.getElementById('my_input_element') )
 * @param {Element} input
 * @param {String} [color='#AAA']
 * @return {Element} input
 */
function inputPlaceholder (input, color) {

	if (!input) return null;

	// Do nothing if placeholder supported by the browser (Webkit, Firefox 3.7)
	if (input.placeholder && 'placeholder' in document.createElement(input.tagName)) return input;

	color = color || '#AAA';
	var default_color = input.style.color;
	var placeholder = input.getAttribute('placeholder');

	if (input.value === '' || input.value == placeholder) {
		input.value = placeholder;
		input.style.color = color;
		input.setAttribute('data-placeholder-visible', 'true');
	}

	var add_event = /*@cc_on'attachEvent'||@*/'addEventListener';

	input[add_event](/*@cc_on'on'+@*/'focus', function(){
	 input.style.color = default_color;
	 if (input.getAttribute('data-placeholder-visible')) {
		 input.setAttribute('data-placeholder-visible', '');
		 input.value = '';
	 }
	}, false);

	input[add_event](/*@cc_on'on'+@*/'blur', function(){
		if (input.value === '') {
			input.setAttribute('data-placeholder-visible', 'true');
			input.value = placeholder;
			input.style.color = color;
		} else {
			input.style.color = default_color;
			input.setAttribute('data-placeholder-visible', '');
		}
	}, false);

	input.form && input.form[add_event](/*@cc_on'on'+@*/'submit', function(){
		if (input.getAttribute('data-placeholder-visible')) {
			input.value = '';
		}
	}, false);

	return input;
}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:77:"/ispring_bitrix/content/js/lib/jquery/jquery.lazyscript.min.js?14527759651639";s:6:"source";s:62:"/ispring_bitrix/content/js/lib/jquery/jquery.lazyscript.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * jQuery Lazy script
 * version: 1.0.0
 * @requires jQuery v1.5 or later
 * Copyright (c) 2013 Ravishanker Kusuma
 * http://hayageek.com/
 */
(function(a){jQuery.cachedScript=function(d,b){var c={dataType:"script",cache:true,url:d,complete:function(e,f){b.call(this)}};return jQuery.ajax(c)};a.lazyscript=function(k){var j=a.extend({type:false,id:false,time:1000,partial:true,scripts:[],success:false},k);var f=false;if(j.type){switch(j.type){case"scroll":a(window).scroll(g);break;case"hover":a("#"+j.id).hover(c);break;case"click":a("#"+j.id).click(c);break;case"visible":a(window).scroll(i);break;case"delay":if(j.time){setTimeout(b,j.time)}break;default:alert("Invalid lazy script type");break}}function d(n,l,m){if(n.removeEventListener){n.removeEventListener(l,m,false)}if(n.detachEvent){n.detachEvent("on"+l,m)}}function b(){if(!f){f=true;e()}}function c(){if(!f){f=true;setTimeout(e,5);d(a("#"+j.id).get(0),"hover",c)}}function h(){if(!f){f=true;setTimeout(e,5);d(a("#"+j.id).get(0),"click",c)}}function g(){if(!f){f=true;setTimeout(e,5);d(window,"scroll",g)}}function i(){var l=a("#"+j.id);t=l.get(0);$w=a(window);viewTop=$w.scrollTop();viewBottom=viewTop+$w.height();_top=l.offset().top;_bottom=_top+l.height();compareTop=j.partial===true?_bottom:_top;compareBottom=j.partial===true?_top:_bottom;if(!f){if((compareBottom<=viewBottom)&&(compareTop>=viewTop)){f=true;d(window,"scroll",i);setTimeout(e,5)}}}function e(){var o=j.scripts.length;var n=0;for(var l=0;l<o;l++){jQuery.cachedScript(j.scripts[l],function(){n++})}(function m(){if(n==o){if(j.success){j.success.call(this)}}else{window.setTimeout(m,20)}})()}}}(jQuery));
/* End */
;
; /* Start:"a:4:{s:4:"full";s:51:"/ispring_bitrix/content/js/utils.js?146096635227455";s:6:"source";s:35:"/ispring_bitrix/content/js/utils.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * Decodes string from get method.
 */
function decodeStringFromGet( string )
{
    decodedString = string.replace( /\+/g, " " );

    return decodedString;
}

/**
 * Returns parameter value by its name.
 */
function getParamValue( paramName )
{
    var loc = location.search.substring( 1, location.search.length );
    var paramValue = false;

    var params = loc.split("&");
    for ( i=0; i < params.length; i++ )
    {
        var name = params[i].substring(0,params[i].indexOf('='));
        if (name == paramName)
        {
            paramValue = params[i].substring(params[i].indexOf('=')+1);
        }
    }
    if ( paramValue )
    {
        return decodeStringFromGet( paramValue );
    }
    else
    {
        return false;
    }
}

function parseUrlParams( url )
{
    var urlParts = String(url).split('?');

    return urlParts.length > 1 ? parseQueryString(urlParts[1]) : {};
}

/**
 * Returns parameters and their values from query string.
 */
function parseQueryString( queryString )
{
    var pairs = {};

    var params = queryString.split("&");
    for ( i = 0; i < params.length; i++ )
    {
        var name = params[i].substring(0,params[i].indexOf('='));
        pairs[name] = decodeStringFromGet( params[i].substring( params[i].indexOf('=') + 1 ) );
    }

    return pairs;
}

/**
 * Returns parameter value by its name from query string
 */
function getQueryParamValue( queryString, paramName )
{
    var pairs = parseQueryString( queryString );

    if ( pairs[paramName] != undefined )
    {
        return pairs[paramName];
    }
    else
    {
        return false;
    }
}

/**
 * Returns page name.
 */
function getPageName()
{
    var path = window.location.pathname;
    var pageName = path.substring( path.lastIndexOf( '/' ) + 1 );
    pageName = pageName.toLowerCase();

    return pageName;
}

/**
 * Returns domain name.
 */
function getDomain()
{
    return window.location.hostname;
}

/**
 * Returns path part of URL with query string
 */
function getUrlPath(url)
{
    if (window.location.protocol == "https:" || String(url).indexOf("https://") != -1)
    {
        return String(url).replace( /^https?:\/\/[^\/]*/i, "" );
    }
    else if (String(url).indexOf("http://") == -1)
    {
        return String(url).replace( /^\/\/[^\/]*/i, "" );
    }

    return String(url).replace( /^http?:\/\/[^\/]*/i, "" );
}

function getWindowWidth()
{
    var windowWidth;
    if ( self.innerHeight )
    { // all except Explorer
        windowWidth = self.innerWidth;
    } else
    if ( document.documentElement && document.documentElement.clientHeight )
    { // Explorer 6 Strict Mode
        windowWidth = document.documentElement.clientWidth;
    } else
    if ( document.body ) { // other Explorers
        windowWidth = document.body.clientWidth;
    }

    return windowWidth;
}

function getWindowHeight()
{
    var windowHeight;
    if ( self.innerHeight )
    { // all except Explorer
        windowHeight = self.innerHeight;
    } else
    if ( document.documentElement && document.documentElement.clientHeight )
    { // Explorer 6 Strict Mode
        windowHeight = document.documentElement.clientHeight;
    } else
    if ( document.body ) { // other Explorers
        windowHeight = document.body.clientHeight;
    }

    return windowHeight;
}

function openPopupWindow( url, width, height, scrollbar )
{
    var width  = width || 700;
    var height = height || 580;
    var top = Math.ceil((screen.height - height) / 2);
    var left = Math.ceil((screen.width - width) / 2);

    var winOptions = 'width=' + width
        + ',height=' + height
        + ',left=' + left
        + ',top=' + top;
    if ( scrollbar == "yes" )
    {
        winOptions += ',scrollbars=yes';
    }
    else
    {
        winOptions += ',scrollbars=no';
    }

    winOptions +=
              ',toolbar=no'
            + ',location=no'
            + ',directories=no'
            + ',menubar=no'
            + ',status=no';

    return window.open(url, "_blank", winOptions);
}

/**
 * Trims value of input object
 */
function TrimInputVal( inputId )
{
    var input = $( "#" + inputId );
    var value = $.trim( input.val() );

    input.val( value );
}

/**
 * Clicks element by it's id.
 */
function clickElementById( elementId )
{
    $( "#" + elementId ).click();
}

/**
 * Preloades images.
 */
function preloadImages( images, start, end )
{
    var img = new Image();
    for ( var slideIndex = start; slideIndex <= end; slideIndex++ )
    {
        img.src = images[slideIndex];
    }
}

/**
 * Checks if google search results are empty.
 */
function checkEmptyGoogleSearchResults( resContainer, key )
{
    var isChecked = false;
    $( "#" + resContainer ).find( " .gsc-results.gsc-webResult" ).each(function(){
        if ( ( $.trim( $(this).html() ) == "" ) && !isChecked )
        {
            var emptySearchMessage = Messages.KnowledgeBase.EmptySearchResults.replace( "%REQUEST_TEXT%", key );
            $( "#" + resContainer ).html( emptySearchMessage );
        }
        isChecked = true;
    });
}

/**
 * Prepares google search results.
 */
function prepareGoogleSearchResults( resContainer, searchText )
{
    $( "#" + resContainer + " div.gs-snippet b").each( function(){
        if ( $(this).text().toLowerCase() == searchText.toLowerCase() )
        {
            $(this).addClass( "searched_text" );
        }
    });
}

/**
 * Returns google search results count.
 */
function getGoogleSearchResultCount( resContainer )
{
    var resultsCount = getElementsCount( resContainer, ".gsc-results .gsc-cursor-box .gsc-cursor-page" );

    if ( resultsCount > 1 )
    {
        return resultsCount * 10;
    }

    resultsCount = getElementsCount( resContainer, ".gsc-results .gsc-webResult" );

    return resultsCount;
}

/**
 * Returns count of elements in container
 */
function getElementsCount( containerId, elemtens )
{
    var count = 0;
    $( "#" + containerId ).find( elemtens ).each(function(){
        ++count;
    });

    return count;
}

// Finds position of first occurrence of a string within another
 //
 // version: 1004.2314
 // discuss at: http://phpjs.org/functions/strpos
 // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
 // +   improved by: Onno Marsman
 // +   bugfixed by: Daniel Esteban
 // +   improved by: Brett Zamir (http://brett-zamir.me)
 // *     example 1: strpos('Kevin van Zonneveld', 'e', 5);
 // *     returns 1: 14
function strpos(haystack, needle, offset)
{
    var i = ( haystack+'' ).indexOf( needle, ( offset || 0 ) );

    return i === -1 ? false : i;
}

/**
 * Returns url page name.
 */
function getUrlPageName( url )
{
    var splitedUrl = url.split( "/" ).pop().split( "#" );
    if ( splitedUrl.length == 0 )
    {
        return "";
    }

    return splitedUrl[0];
}

/**
 * Returns url anchor.
 */
function getURLAnchor( url )
{
    return url.split( "#" ).pop();
}

/**
 * Returns URL without anchors.
 */
function clearURLAnchor( url )
{
    var splitedUrl = url.split( "#" );
    if ( splitedUrl.length == 0 )
    {
        return "";
    }

    return splitedUrl[0];
}

/**
 *  Returns URL without params
 */
function stripUrlParams(url)
{
    var parts = url.split('?');
    if (parts.length == 0)
    {
        return url;
    }

    return parts[0];
}

/**
 * Initializes input clear button.
 */
function initInputClearButton( input, clearButton, clearButtonClickHandler, checkSearchInput )
{
    input.keyup( function(){
        checkSearchInput();
    });
    input.focus( function(){
        checkSearchInput();
    });
    input.blur( function(){
        checkSearchInput();
    });

    clearButton.unbind();
    clearButton.click( function(){
        clearButtonClickHandler();
    });
}

/**
 * Checks top menu search input
 */
function checkSearchInput( searchInput, clearSearchButton, basicVal )
{
    var inputVal = $.trim( searchInput.val() );
    if ( ( inputVal == "" ) || ( inputVal == basicVal ) )
    {
        clearSearchButton.fadeOut( "slow" );
        return;
    }
    clearSearchButton.fadeIn( "slow" );
}

/* Utility functions for auto resize iframes */
function ResetIFrames()
{
    iFrames = document.getElementsByTagName('iframe');
    for( frameIndex = 0; frameIndex < iFrames.length; frameIndex++ )
    {
        updateFrameHeight( iFrames[frameIndex] );
        addVambEve( iFrames[frameIndex], 'load', ResetIFrames );
    }
}

function resetFrameHeight(frameName)
{
    var frame = $('[name="' + frameName + '"]');
    updateFrameHeight(frame);
}

function updateFrameHeight( iFrame )
{
    var contens = $( iFrame ).contents();
    var height = 0;
    try
    {
        height = contens.height();
    }
    catch (Exception)
    {
        //IE bug with $.height call.
    }
    $( iFrame ).css( "height", height );
}

function addVambEve( obj, evType, fn )
{
    if (obj.addEventListener)
    {
        obj.addEventListener(evType, fn,false);
        return true;
    }
    else if (obj.attachEvent)
    {
        var r = obj.attachEvent("on"+evType, fn);
        return r;
    }
    else
    {
        return false;
    }
}

/**
 * Returns file extension.
 */
function getFileExtension( file )
{
    var splittedByHash = file.split("#");
    var fileData = splittedByHash[0].split(".");
    if ( fileData.length == 0 )
        return '';

    return fileData[fileData.length - 1];
}

function getURLHash( url )
{
    var hashPos = strpos( url, '#' );
    if ( strpos === false )
    {
        return '';
    }
    return url.substr( hashPos + 1, url.length );
}

/**
 * Appends parameters to URL
 * @param url
 * @param params An object of parameters, where keys are param names.
 */
function addUrlParams(url, params)
{
    if ( !url || !params )
    {
        return url;
    }

    var url = String(url);
    var urlParts = url.split('?');
    var newUrl = urlParts[0];

    var paramStr = '';
    for (var name in params)
    {
        paramStr += "&" + name + "=" + params[name];
    }

    if ( urlParts.length > 1 && urlParts[1] != '' )
    {
        paramStr += "&" + urlParts[1];
    }

    if (paramStr != '')
    {
        newUrl += '?' + paramStr.substr(1);
    }

    return newUrl;
}

function GetHttpQueryString( params )
{
    var result;
    for (param in params)
    {
        result += '&' + param + '=' + encodeURI(params[param]);
    }

    return result.substr(1);
}

/**
 * adds advertisment parameter from page url to any link
 */
function addAdParam(link_id)
{
    var adValue = getParamValue( "ad" );
    if ( adValue != false )
    {
        var params = {'ad': adValue};

        var downloadLink = $( link_id);
        var downloadLinkURL = downloadLink.attr( "href" );
        downloadLink.attr( "href", addUrlParams(downloadLinkURL, params) );
    }
}

function getCookie(name)
{
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))

    return matches ? decodeURIComponent(matches[1]) : undefined
}


/**
 * Parses uri query string.
 * @return Object
 */
function parseQueryString( queryString /* = String */)
{
    var holder = new Object();
    if ( queryString )
    {
        var chunks = queryString.split("&");
        for ( var i = 0; i < chunks.length; ++i )
        {
            var keyValuePair = chunks[i].split("=");
            var key = decodeURIComponent(keyValuePair[0]);
            var value = decodeURIComponent(keyValuePair[1]);
            holder[key] = value;
        }
    }
    return holder;
}

function isEmptyObject(obj)
{
    if (obj)
    {
        for( field in obj )
        {
            return false;
        }
    }
    return true;
}

function getFormFieldsNames(form)
{
    var fields = form.find(":input:not(:button)");
    var names = new Array();
    for (var i=0; i < fields.length; i++)
    {
        if (names.toString().indexOf($(fields[i]).attr('name')) == -1)
        {
            names[i] = $(fields[i]).attr('name');
        }
    }
    return names;
}

function isIe()
{
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // IE 12 (aka Edge) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    return false;
}

function isIe6()
{
    var ieV = jQuery.browser.version,
    ie = jQuery.browser.msie;
    return ie && (ieV == 6);
}

function isIe8()
{
    var ieV = jQuery.browser.version,
    ie = jQuery.browser.msie;
    return ie && (ieV == 8);
}

function isIeLt7()
{
    var ieV = jQuery.browser.version,
    ie = jQuery.browser.msie;
    return ie && (ieV <= 7);
}

function isIeLt8()
{
    var ieV = jQuery.browser.version,
    ie = jQuery.browser.msie;
    return ie && (ieV <= 8);
}

function isIelg9()
{
    var ieV = jQuery.browser.version,
    ie = jQuery.browser.msie;
    return ie && (ieV >= 9);
}

function isIe9()
{
    var ieV = jQuery.browser.version,
    ie = jQuery.browser.msie;
    return ie&&(ieV == 9);
}

function isIe10()
{
    var ieV = jQuery.browser.version,
        ie = jQuery.browser.msie;
    return ie&&(ieV == 10);
}

function isIe11()
{
    return (Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject);
}

function isFFlg11()
{
    var ffV = jQuery.browser.version,
    ff = jQuery.browser.mozilla;
    return ff&&(ffV >= 10);
}

function isOperalg11()
{
    var opera = jQuery.browser.opera,
    operaV = 0;
    if (opera)
    {
       operaV = Math.floor(jQuery.browser.version);
    }
    
    return opera&&(operaV >= 11);
}

function isFF()
{
    return jQuery.browser.mozilla;
}

function isOpera()
{
    var opera = jQuery.browser.opera;
    if (opera)
    {
        return true;
    }
    
    return false;
}

function isChrome()
{
    return $.browser.webkit && !!window.chrome;
}

function isSafari()
{
    return ($.browser.webkit && !window.chrome);
}

function isSafariMac()
{
    var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    var isSafari = $.browser.webkit && !window.chrome;
    return (isMac && isSafari);
}

function getBrowser()
{
    return (isChrome()) ? "chrome" :
        ((isIe8()) ? "ie8" :
        ((isIe10()) ? "ie10" :
        ((isIe9()) ? "ie9" :
        ((isIe11()) ? "ie11" :
        ((isIeLt7()) ? "ie7" :
        ((isFF()) ? "firefox" :
        ((isSafariMac()) ? "safari_on_mac" :
        ((isSafari()) ? "safari" :
        (((isOpera)) ? "opera" : "no_detect")))))))));
}

function isSafariChromeHtml5()
{
    var userAgent = navigator.userAgent.toLowerCase();
    var isChrome = $.browser.webkit && !!window.chrome;
    var isSafari = $.browser.webkit && !window.chrome;
    var isHtml5Supported = false;

    if (isChrome)
    {
        userAgent = userAgent.substring(userAgent.indexOf('chrome/') +7);
        version = userAgent.substring(0,userAgent.indexOf('.'));
        if (version >= 17)
        {
            isHtml5Supported = true;
        }
    }
    else if (isSafari)
    {
        userAgent = userAgent.substring(userAgent.indexOf('safari/') +7);
        version = userAgent.substring(0,userAgent.indexOf('.'));
        if (version >= 533)
        {
            isHtml5Supported = true;
        }
    }

    return isHtml5Supported;
}

function isIPad()
{
    var userAgent = navigator.userAgent.toLowerCase();
    var isIpad = userAgent.indexOf('ipad');
    return (isIpad != -1);
}

function isIPhone()
{
    var userAgent = navigator.userAgent.toLowerCase();
    var isIphone = userAgent.indexOf('iphone');
    return (isIphone != -1);
}

function isCheckBoxChecked(element)
{
    if (isIeLt8())
    {
        return element.is("input:checkbox:not(:checked)");
    }

    return element.is("input:checkbox:checked");
}

function isCheckBoxNotChecked(element)
{

    if (isIeLt8())
    {
        return element.is("input:checkbox:checked");
    }

    return element.is("input:checkbox:not(:checked)");
}

function isHtml5supported()
{
    return isIelg9() || isFFlg11() || isOperalg11() || isSafariChromeHtml5() || isIPad() || isAndroid();
}

function isAndroid()
{
    var browser  = navigator.userAgent.toLowerCase();
    var platform = navigator.platform.toLowerCase();

    var androidIndex = browser.indexOf('android');
    var androidPlatformIndex = platform.indexOf('android');

    var isAndroid = ((androidIndex > -1) || (androidPlatformIndex > -1)) ? true : false;

    var isOpera = (browser.indexOf('opera') > -1) ? true : false;
    var isFF = (browser.indexOf('firefox') > -1) ? true : false;

    if (isAndroid && (isOpera || isFF))
    {
       return true;
    }

    var androidVStart = androidIndex + 8;
    var androidVEnd = androidVStart + 1;
    var browserV = browser.substring(androidVStart, androidVEnd);

    if (isAndroid && (browserV == '3' || browserV == '4'))
    {
        return true;
    }

    return false;
    
}

function isWin64bit()
{
    if (navigator.userAgent.indexOf("WOW64") != -1 || 
        navigator.userAgent.indexOf("Win64") != -1 )
    {
        return true;
    } 
    
    return false;
}

function preparePriceString(price)
{
    var thousands = Math.floor(price / 1000);
    var beforeThousand = price % 1000;

    if (thousands > 0)
    {
        var digitsCount = beforeThousand.toString().length;
        var addition = '';
        switch (digitsCount)
        {
            case 1:
                addition = '00';
                break;
            case 2:
                addition = '0';
                break;
        }
        beforeThousand = addition + beforeThousand;
    }
    var priceString = (thousands > 0) ? (thousands + ',' + beforeThousand) : beforeThousand;

    return priceString;
}

function supports_history_api() {
    return !!(window.history && history.pushState);
}

/**
 * Slowly scroll to JQuery element, if pageUrl contains 'system-requirements' substring
 * @param pageUrl String
 * @param element JQuery
 */
function scrollToElementIfSystemRequirementPage(pageUrl, element)
{
    if (pageUrl.indexOf("system-requirements.html") > 0)
    {
        $.scrollTo(element, 800);
    }
}

/**
 *
 * @param message String error message
 * @return {String} of dom element
 */
function prepareLoginFormErrorTooltip(message)
{
    var error = '<span class="error">' + message + '</span>';
    return error;
}

/**
 * fix IE8 bug with background position on :active event
 * @warning function enlarges button width. Call this function only once.
 * @param button
 */
function fixButtonActiveState(button)
{
    button = $(button);
    button.css({width: '+=1'});
    button.css({height:'+=1'});

    button.mousedown(function ()
    {
        increaseBackgroundPosition(this, 1, 1);

        $(document).mouseup(function ()
        {
            $(document).unbind('mouseup', arguments.callee);
            increaseBackgroundPosition(this, -1, -1);
        });
    });
}

/**
 *
 * @param {Object} element DOM element
 * @param {Number} dx
 * @param {Number} dy
 */
function increaseBackgroundPosition(element, dx, dy)
{
    element = $(element);

    var startParams = element.css('backgroundPosition');
    if (!startParams || startParams == undefined)
    {
        startParams = '0px 0px';
    }

    var backgroundPos = startParams.split(" ");
    var xPosStr = backgroundPos[0].replace('px', '');
    var yPosStr = backgroundPos[1].replace('px', '');

    var xPos = Number(xPosStr) + dx;
    var yPos = Number(yPosStr) + dy;

    var result = String(xPos) + 'px ' + String(yPos) + 'px';

    element.css({
        backgroundPosition: result
    });
}

function setSelectionRange(input, selectionStart, selectionEnd)
{
    if (input.setSelectionRange)
    {
        input.focus();
        input.setSelectionRange(selectionStart, selectionEnd);
    }
    else if (input.createTextRange)
    {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd('character', selectionEnd);
        range.moveStart('character', selectionStart);
        range.select();
    }
}

function setCaretToPos (input, pos)
{
    setSelectionRange(input, pos, pos);
}

function initLazyLoadedImages(selector)
{
    var onloadParam = 'onload';

    $('.lazy_container').each(function() {
        var sizeParam = $(this).find('img').attr('data-size');
        LazyloadHandler($(this), (sizeParam != onloadParam), false);
    });

    $("img").load(function() {
        LazyloadHandler($(this).parents('.lazy_container'), true, true);
    });

    $( window ).resize(function() {
        $('.lazy_container').each(function() {
            LazyloadHandler($(this), true, false);
        });
    });


    var imagesForLazyload = $(selector);
    if (imagesForLazyload.lazyload)
    {
        imagesForLazyload.each(function(){
            var thisImage = $(this);


            var alreadyLoaded = thisImage.attr('src') == thisImage.attr('data-original');
            if (!alreadyLoaded)
            {
                thisImage.lazyload({
                    effect : "fadeIn"
                });
            }
        });
    }
}

function LazyloadHandler(lazyloadContainer, isNeedChangeSize, changeBckg)
{
    if (lazyloadContainer.length > 0)
    {
        if (changeBckg)
        {
            lazyloadContainer.css('background', 'transparent');
            if (lazyloadContainer.hasClass('img-thumbnail'))
            {
                lazyloadContainer.addClass('loaded');
            }
        }

        var img = lazyloadContainer.find('img');
        if ((isNeedChangeSize) && (img.length > 0))
        {
            var border = (lazyloadContainer.css('border-width').length > 0) ? lazyloadContainer.css('border-width').replace("px", "") : 0 ;
            if (isIe8())
            {
                var isBordered = lazyloadContainer.css('borderLeftWidth').length > 0 && lazyloadContainer.css('borderLeftWidth') != 'medium'
                var border = (isBordered) ? lazyloadContainer.css('borderLeftWidth').replace("px", "") : 0 ;
            }
            var padding = (lazyloadContainer.hasClass('img-thumbnail')) ? lazyloadContainer.css('paddingTop').replace("px", "") : 0;
            var imgHeight = (img.height() == 1) ? img.attr('data-height') : img.height();
            var height = (padding != 0) ? parseInt(padding) * 2 + parseInt(imgHeight) : imgHeight;

            var imgWidth = (parseInt(img.attr('data-width')) != 1) ? img.attr('data-width') : img.width();
            var width = (padding != 0) ? parseInt(padding) * 2 + parseInt(imgWidth) : imgWidth;

            lazyloadContainer.css('height', parseInt(height) + parseInt(border * 2));
            lazyloadContainer.css('width', parseInt(width) + parseInt(border * 2));
        }
    }
}


function initDefaultSocialButtons()
{
    if (isIeLt7()) // disable social buttons, because they cause errors under IE6-7
    {
        $('.default_social_buttons_block').hide();
        return;
    }

    if (isIe8())
    {
        $('.share_button_container.twitter').hide();
    }

    var options = {
        type: "scroll",
        scripts: [
            "https://platform.twitter.com/widgets.js",
            "https://connect.facebook.net/en_GB/all.js#xfbml=1",
            "https://apis.google.com/js/plusone.js",
            "https://platform.linkedin.com/in.js"
        ],
        success: function () {
            FB.init({ status: true, cookie: true, xfbml: true });
        }
    };
    $.lazyscript(options);
}

function formatNumber(number, precision)
{
    if (isNaN(number))
    {
        number = 0;
    }
    else if (number === '')
    {
        number = 0;
    }

    number = Number(number).toFixed(precision) + "";

    var parts = number.split('.');
    var intNum = parts[0];
    var chunkLen = intNum.length % 3 || 3;
    var numberArr = [];

    // break the number into chunks of 3 digits; first chunk may be less than 3
    for (var i = 0; i < intNum.length; i += chunkLen)
    {
        if (i != 0)
        {
            chunkLen = 3;
        }
        numberArr[numberArr.length] = intNum.substr(i, chunkLen);
    }

    intNum = numberArr.join(',');
    return intNum + (parts.length > 1 ? '.' . parts[1] : '');
}

function isMobileOrTablet()
{
    return isMobile() || isTablet();
}

function isMobile()
{
   return (/iphone|ipod|android|blackberry|mini|windows\sce|palm|smartphone|mac|iemobile/i.test(navigator.userAgent.toLowerCase()));
}

function isTablet()
{
    return (/ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(navigator.userAgent.toLowerCase()));
}

function isOnScreen(element)
{
    var scrolledTop = $(window).scrollTop();
    var scrolledBottom = scrolledTop + $(window).height();
    var elementOffsetTop = element.offset().top;
    var elementOffsetBottom = elementOffsetTop + element.height();

    return ((elementOffsetTop <= scrolledBottom) && (elementOffsetBottom >= scrolledTop))
}

(function ( $ ) {
    $.fn.addClassWhenOnScreen = function(classToAdd)
    {
        var selectedElements = this;
        $(window).scroll(function() {
            selectedElements.each(function(){
                var element = $(this);
                if (isOnScreen(element) && !element.hasClass(classToAdd))
                {
                    element.addClass(classToAdd);
                }
            });
        });
    };
}( jQuery ));

/*indexOf for IE 8*/
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(val) {
        return jQuery.inArray(val, this);
    };
}

function inIframe()
{
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

function loadImages(container, imageClass)
{
    var imgs = container.find("img");

    imgs.each(function ()
    {
        if ($(this).attr("data-original") && $(this).hasClass(imageClass))
        {
            $(this).attr("src", $(this).attr("data-original"));
            $(this).removeAttr("data-original");
        }
    });
}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:61:"/ispring_bitrix/content/js/lng/en/messages.js?146295770319353";s:6:"source";s:45:"/ispring_bitrix/content/js/lng/en/messages.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var Messages =
{
    Captcha:
    {
        WrongCaptcha: "You must agree to iSpring Privacy Policy"
    },

    FreeAcademicLicenseRequest:
    {
        ErrorName: 'Please enter your name',
        ErrorEmail: 'Please enter your email',
        ErrorOrganization: 'Please enter an educational institution',
        ErrorURL: 'Please enter a valid URL',
        ErrorLanguage: "Please select product language",
        ErrorIdentification: 'Please select identification file (.jpg, .gif, .pdf files allowed)',
        ErrorLicenseNumber: 'Please enter number of licenses'
    },

    AcademicLicenseRequest:
    {
        ErrorName: "Please enter your name",
        ErrorEmail: "Please enter a valid e-mail address",
        ErrorOrganization: "Please enter an educational institution",
        ErrorWebsite: "Please enter a valid URL",
        ErrorIdentification: ".jpg, .gif, .pdf files allowed",
        ErrorProduct: "Please select product",
        ErrorQuantity: "Required",
        ErrorPhoneRequired: "Required",
        ErrorPhoneMaxLength: "Maximum length of Phone 20",
        ErrorPhoneInvalid: "Please enter digits"
    },

    MigrateToiSpring:
    {
        ErrorName: "Please enter your name",
        ErrorEmail: "Please enter a valid e-mail address",
        ErrorProduct: "Please enter product name and version",
        ErrorLicenses: "Please enter number of licenses",
        ErrorProofOfOwnership: "Please select identification file (.jpg, .gif, .pdf files allowed)",
        ErrorISProduct: "Please select iSpring product",
        ErrorISLicenses: "Please enter number of iSpring licenses"
    },

    GenerateFreeSerial:
    {
        ErrorName: "Please enter your name",
        ErrorEmail: "Please enter a valid e-mail address",
        ErrorPrivateKey: "The characters you entered don't match the image. Please try again."
    },

    GenerateSerial:
    {
        EmptyFieldsList: "The form contains several errors. Correct the following fields:",
        LicensePassword: "Please enter your license password",
        RegistrationName: "Please enter valid  registration name",
        Email: "Please enter a valid e-mail address",
        ConfirmEmail: "Please enter a valid confirm e-mail address",
        Address: "Please enter your address",
        City: "Please enter your city",
        Country: "Please select your country",
        Phone: "Please enter your phone",
        ErrorPhoneInvalid: "Please enter digits."
    },

    GetTrialLicense:
    {
        ErrorFirstName: "Please enter First Name",
        ErrorLastName: "Please enter Last Name",
        ErrorCompany: "Please enter Organization",
        ErrorJobTitle: "Please enter Title",
        ErrorPhoneMaxLength: "Maximum length of Phone 100",
        ErrorFirstNameMaxLength: "Maximum length of First Name 50",
        ErrorLastNameMaxLength: "Maximum length of First Name 50",
        ErrorEmailMaxLength: "Maximum length of Email 100",
        ErrorCountryMaxLength: "Maximum length of Country 100",
        ErrorCompany: "Required",
        ErrorTitle: "Required",
        ErrorPhoneInvalid: "Please enter digits",
        ErrorState: "Please enter State or Province",
        ErrorEmail: "Please enter a valid e-mail address",
        ErrorProduct: "Select at least one product",
        ErrorName: "Please enter Name",
        ErrorNameMaxLength: "Maximum length of Name 50",
        EmailNotValid: "Please, enter valid E-mail address.",
        EmailRequired: "E-mail address required.",
        ReviewErrors: "Please review the following errors:\n\t- ",
        ReviewErrorsAlert: "The form contains several errors. Correct the following fields:\n\n",
        EmptyEmail: "Please enter Email address",
        InvalidEmail: "Please use a valid email address"
    },

    RegisterIspringOnline:
    {
        ErrorName: "Please enter your name.",
        ErrorEmail: "Please enter your e-mail address.",
        CompanyNameRequired: "Please enter a company name.",
        WrongCompanyName: "The Company Name contains invalid characters. Please use only alphanumeric characters and dashes."
    },

    Licensing:
    {
        CustmoQueryHint: "I would like to get information about iSpring Platform pricing.",
        PlayerPackHint: "I would like to get information about iSpring Player Pack pricing.",
        NameRequired: "Please enter your name",
        EmailRequired: "Please enter a valid e-mail address",
        JobTitleRquired: "Please enter your job title",
        CompanyRequired: "Please enter your company",
        WrongPrivateKey: "The characters you entered don't match the image. Please try again."
    },

    Support:
    {
        SelectProductVersion: "Select Product Version",
        NameRequired: "Please enter your name",
        EmailRequired: "Please enter a valid e-mail address",
        OperatingSystemRequired: "Please select operating system",
        PowerPointVersionRequired: "Please select PowerPoint version",
        iSpringVersionRequired: "Please select iSpring version",
        iSpringProductRequired: "Please select iSpring Product",
        BrowserRequired: "Please select Browser",
        SubjectRequired: "Please enter a subject",
        DescrRequired: "Please enter a description",
        TermsAgreement: "Please read and agree to iSpring Technical Support Terms and Conditions",
        WrongCaptcha: "Please confirm you are not a spambot"
    },

    Upgrade:
    {
        AllFieldsAreEmpty: "Please enter your License Key or select Product and Version.",
        NameRequired: "Please enter your name",
        EmailRequired: "Please enter a valid e-mail address",
        LicenseRequired: "Please enter your license key",
        WrongCaptcha: "The characters you entered don't match the image. Please try again.",
        MessageRequired: "Please enter your message",
        IncorrectLicense: "Incorrect license key"
    },

    Reseller:
    {
        BusinessNameRequired: "Please enter Business Name",
        AddressRequired: "Please enter Address Line 1",
        CityRequired: "Please enter City",
        StateRequired: "Please enter State",
        ZipRequired: "Please enter Zip or Postal Code",
        CountryRequired: "Please enter Country",
        PhoneRequired: "Please enter Phone",
        PhoneInvalid: "Please enter digits (you can also use parentheses, plus, and minus signs).",
        EmailRequired: "Please enter E-mail",
        EmailInvalid: "Please enter valid E-mail",
        EmailAlready: "Reseller with the same email is already registered",
        ConfirmEmailRequired: "Please enter Confirm e-mail",
        PassRequired: "Please enter Password",
        ConfirmPassRequired: "Please enter Confirm Password",
        WrongConfirmPassword: "Confirmation does not match with the password.",
        NewPassRequired: "Please enter New Password",
        ErrorShortPassword: "Your password is too short (min %MIN_LENGTH% characters).",
        ConfirmNewPassRequired: "Please enter Confirm New Password",
        PrimaryFirstNameRequired: "Please enter Primary Contact First Name",
        PrimaryLastNameRequired: "Please enter Primary Contact Last Name"
    },

    Admin:
    {
        TypeRequired: "Please choose Type",
        TitleRequired: "Please enter Title",
        UrlRequired: "Please enter URL",
        CategoryRequired: "Please choose Category",
        BriefDescrRequired: "Please enter Brief Description",
        ContentRequired: "Please enter Content",
        NameRequired: "Please enter Name",
        Login: "Please enter a valid Username and Password.",
        Password: "Please enter a valid Username and Password.",
        LanguageRequired: "Please choose Language",
        PublishDateRequired: "Please enter a Publishing Date",
        CodeRequired: "Please enter a Code",
        SalaryRequired: "Please enter a Salary",
        DemandRequired: "Please enter a Required Demand",
        PossibleRequired: "Please enter a Possible Demand"
    },

    ResellerLogin:
    {
        Login: "Please enter a valid Login.",
        Password: "Please enter a valid Password."
    },

    ForgotPassword:
    {
        Email: "Please enter a valid email."
    },

    KnowledgeBase:
    {
        EmptySearchResults: "<span class=\"empty_search_results\">Your search \"<strong>%REQUEST_TEXT%</strong>\" did not match any pages.</span>"
    },

    SiteLogin:
    {
        Common: "The form contains several errors. Correct the following fields:\n\n",
        Email: "E-mail address required.",
        EmailIncorrect: "Please enter a valid email address.",
        Password: "Password required.",
        LoginFail: "The specified email or password is incorrect.",
        LoginError: "E-mail address or password required.",
        LoginFailed: "The E-mail or password is incorrect. Please try again.",
        RestorePasswordEmailNotFound: "Specified email is not registered.",
        RestorePasswordFail: "Server reports about error.",
        RestorePasswordSuccess: "A link to reset your password has been sent to %EMAIL%."
    },

    ScheduleCallForm:
    {
        Common: "The form contains several errors. Correct the following fields:\n\n",
        Phone: "Please enter a phone.",
        Date: "Please specify a date.",
        Comments: "Please enter a comment.",
        Time: "Please choose valid time."
    },

    ChangePassword:
    {
        Password: "Please enter a password.",
        Length: "The size of password must be greater than 3",
        Confirm: "Please enter a confirmation of the password."
    },

    ChangeEmail:
    {
        Password: "Please enter a password.",
        EmailInvalid: "Please enter your registered e-mail address.",
        NewEmailInvalid: "Please enter a valid e-mail address."
    },

    AskQuestion:
    {
        Subject: "Please enter a subject.",
        Description: "Please enter a description.",
        FailSubmit: "System error, contact technical support."
    },

    CreateAccount:
    {
        ReviewErrorsAlert: "The form contains several errors. Correct the following fields:\n\n",
        ErrorFirstName: "Please enter First Name.",
        ErrorName: "Please enter Name.",
        ErrorLastName: "Please enter Last Name.",
        ErrorEmail: "Please enter a valid e-mail address.",
        ErrorDuplicate: "E-mail has been already registered.",
        ErrorSiteAddress: "Please enter Site Address",
        AnotherError: "Sorry, but your account cannot be created due to a server error.",
        ErrorDuplicateLearnAccount: "You already have the iSpring Learn account.",
        ErrorDuplicateSiteAddress: "Site address is invalid or already in use.",
        ErrorPhoneMaxLength: "Maximum length of Phone 20",
        ErrorPhone: "Please enter Phone.",
        ErrorDeletedAccount: "The trial account under this email has expired. <br class='hidden-xs' />To create a new trial account, please"
    },

    SalesQuestionForm:
    {
        JobTitle:    "Please enter your job title",
        Company:     "Please enter your company name",
        Country:     "Please select a country",
        Phone:       "Please enter a phone",
        Subject:     "Please enter a subject",
        Description: "Please enter a description"
    },

    ContactUs:
    {
        FirstName: "Please enter Name",
        LastName: "Please enter Last Name",
        Title: "Please enter Title",
        Company: "Please enter Company name",
        Country: "Please choose Country",
        PhoneNumber: "Please enter Phone Number",
        EmailAddress: "Please enter a valid E-mail Address",
        Subject: "Please enter Subject",
        Description: "Please enter Description"
    },

    SDKLicensingSurvey:
    {
        CompanyNameRequired: "Please enter Company Name",
        ContactPersonRequired: "Please Enter Contact Person",
        PostionRequired: "Please enter Postion",
        PhoneNumberRequired: "Please enter Contact Phone Number",
        EmailRequired: "Please enter Email",
        WebsiteRequired: "Please enter website",
        StreetAddressRequired: "Please enter Street Address",
        CityRequired: "Please enter City",
        ZipRequired: "Please enter ZIP Code",
        CountryRequired: "Please select Country",
        IndustryRequired: "Please enter Industry",
        UsageRequired: "Please choose how do you plan to use iSpring Platform",
        UsageDescRequired: "Please describe your future market",
        InstallationsRequired: "Please enter Number of Platform Installations",
        InstallationsInvalid: "Please enter a value greater than or equal to 0",
        DevelopersRequired: "Please enter Number of Developers",
        DevelopersInvalid: "Please enter a value greater than or equal to 0",
        UsersRequired: "Please enter Number of Users",
        UsersInvalid: "Please enter a value greater than or equal to 0",
        ASVersionRequired: "Please indicate the version of iSpring Platform you'd like to purchase",
        PlayersRequired: "Please indicate whether you would like to license additional customizable players"
    },

    BillingInfo:
    {
        Email: "Please enter Email Address",
        Company: "Please enter Company",
        FirstName: "Please enter First Name",
        LastName: "Please enter Last Name",
        Address: "Please enter Address",
        City: "Please enter City",
        State: "Please enter State/Province",
        Postcode: "Please enter ZIP Code",
        Country: "Please enter Country",
        Phone: "Please enter Phone",
        PhoneFormat: "Please enter correct Phone",
        FaxFormat: "Please enter correct Fax",

        MaxLength50: "The maximum number of characters: 50",//TODO: text
        MaxLength100: "The maximum number of characters: 100",//TODO: text
        MaxLength500: "The maximum number of characters: 500",//TODO: text
        InvalidPostcode: "The ZIP/Postal Cod contains invalid characters. Please use only alphanumeric characters, spaces and dashes."//TODO: text
    },

    PaymentInfo:
    {
        CardNum: "Please enter credit card number",
        ExpDate: "Please enter expiration date",
        CCV: "Please enter card code verification",
        InvalidExpDate: "Please enter valid expiration date"
    },

    ShoppingCart:
    {
        DiscountCodeRequired: "Please enter Discount Code",
        DiscountCodeMaxLength: "Discount Code max length %MAX_LENGTH%"
    },

    FileAttacmentForm:
    {
        ErrorSend: "The form hasn't been submitted.",
        TooLargeFiles: "The file size of each attachement should be less than 16 Mb.",
        DuplicateAttachementName: "<strong>Attachement:</strong> " + "Attachement(s) named %names% already exist(s)."
    },

    ProfileForm:
    {
        FirstName: "Please enter your first name.", //TODO: text
        LastName: "Please enter your last name.", //TODO: text
        Phone: "Please enter Phone"
    },

    EditAccountRegistrationName:
    {
        RegistrationName: "Please enter Registration name." //TODO: text
    },
    
    ElearningRocketRatePlan:
    {
        CompanyName:  "Please enter Site Address.",
        InvalidName: "Your E-Learning Rocket site address contains illegal characters.",
        AlreadyExistName:  "Entered Site Address already exists. Please enter another one.",
        RatePlanInvalid: "Please select rate plan",
        AnotherError: "Unknown error occurred. Please try again later."
    },
    
    ProBetaTesters:
    {
        ErrorEmailRequired: "Please use a valid Email.",
        ErrorEmailMaxLength: "Email field lenght 100."
    },

    iSpringCloudTrial:
    {
        ErrorEmailRequired: "Please enter your email address",
        InvalidEmail: "Please use a valid email address",
        ErrorEmailMaxLength: "E-mail field lenght 100",
        PlanRequired: "Please, select plan."
    },

    iSpringCloudTrialShortMsg:
    {
        ErrorEmailRequired: "Please, enter your E-mail",
        InvalidEmail:       "Please, use a valid E-mail",
        ErrorEmailMaxLength: "E-mail field lenght 100"
    },

    DemoRequest:
    {
        ErrorFirstName: "Required",
        ErrorFirstNameMaxLength: "Maximum length of First Name 50",
        ErrorLastName: "Required",
        ErrorLastNameMaxLength: "Maximum length of First Name 50",
        ErrorEmailMaxLength: "Maximum length of Email 100",
        EmailNotValid: "Please, enter valid E-mail address.",
        EmailRequired: "E-mail address required.",
        ErrorPhoneMaxLength: "Maximum length of Phone 100",
        ErrorPhoneInvalid: "Please enter digits.",
        PhoneRequired: "Phone required."
    },           
    
    SendFeedback: 
    {
        ErrorFirstName: "Please enter First Name",
        ErrorFirstNameMaxLength: "Maximum length of First Name 50",
        EmptyEmail: "Please enter Email adress",
        ErrorEmailMaxLength: "Maximum length of Email 100",
        ErrorEmail: "Please enter a valid e-mail address",
        EmailNotValid: "Please, enter valid E-mail address.",
        EmailRequired: "E-mail address required.",
        InvalidEmail: "Please use a valid email adress"
    },
    
    RequestQuote: {
        ErrorMessageRequired: "Please enter your message.",
        ErrorNameRequired: "Please enter your name.",
        ErrorNameMaxLenght: "Maximum length of Name 100",
        ErrorEmailInvalid: "Please use a valid email adress",
        ErrorEmailRequired: "Please enter your email.",
        ErrorEmailMaxLength: "Maximum length of email 100"
    },

    SubscribeNewsletters:
    {
        ErrorEmailMaxLength: "Maximum length of Email 100",
        EmailNotValid: "Please, enter valid E-mail",
        EmailRequired: "E-mail address required"
    },

    SubscribeNewslettersNew:
    {
        ErrorEmailMaxLength: "Maximum length of Email 100.",
        EmailNotValid: "Please double check your email address.",
        EmailRequired: "E-mail address required."
    },

    UpgradeCenter:
    {
        EmptyField: "License key is required",
        ErrorLicenseKey: "Please use a valid license key",
        IncorrectLicenseKey: "Please, enter correct key",
        MinLength: "Minimum length of license key 38",
        MaxLength: "Maximum length of license key 100",
        Email: "Please enter Email Address",
        EmailNotValid: "Please, enter valid E-mail",
        Name: "Please enter Name",
        Message: "Please enter Message"
    },

    SpecialChars:
    {
        WrongSymbols: "Not supported character(s)"
    },

    TestOutLms:
    {
        ErrorName: "Please enter Name",
        ErrorNameMaxLength: "Maximum length of Name 50",
        InvalidEmail: "Please use a valid email address",
        EmptyEmail: "Please enter Email address",
        ErrorEmailMaxLength: "Maximum length of Email 100",
        ErrorLms: "Please enter Your LMS",
        ErrorLmsMaxLength: "Maximum length of field 50"
    }
};

/* End */
;
; /* Start:"a:4:{s:4:"full";s:69:"/ispring_bitrix/content/js/lib/jquery.validate.min.js?143982423521068";s:6:"source";s:53:"/ispring_bitrix/content/js/lib/jquery.validate.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery Validation Plugin - v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */(function(t){t.extend(t.fn,{validate:function(e){if(!this.length)return e&&e.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."),void 0;var i=t.data(this[0],"validator");return i?i:(this.attr("novalidate","novalidate"),i=new t.validator(e,this[0]),t.data(this[0],"validator",i),i.settings.onsubmit&&(this.validateDelegate(":submit","click",function(e){i.settings.submitHandler&&(i.submitButton=e.target),t(e.target).hasClass("cancel")&&(i.cancelSubmit=!0),void 0!==t(e.target).attr("formnovalidate")&&(i.cancelSubmit=!0)}),this.submit(function(e){function s(){var s;return i.settings.submitHandler?(i.submitButton&&(s=t("<input type='hidden'/>").attr("name",i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),i.settings.submitHandler.call(i,i.currentForm,e),i.submitButton&&s.remove(),!1):!0}return i.settings.debug&&e.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,s()):i.form()?i.pendingRequest?(i.formSubmitted=!0,!1):s():(i.focusInvalid(),!1)})),i)},valid:function(){if(t(this[0]).is("form"))return this.validate().form();var e=!0,i=t(this[0].form).validate();return this.each(function(){e=e&&i.element(this)}),e},removeAttrs:function(e){var i={},s=this;return t.each(e.split(/\s/),function(t,e){i[e]=s.attr(e),s.removeAttr(e)}),i},rules:function(e,i){var s=this[0];if(e){var r=t.data(s.form,"validator").settings,n=r.rules,a=t.validator.staticRules(s);switch(e){case"add":t.extend(a,t.validator.normalizeRule(i)),delete a.messages,n[s.name]=a,i.messages&&(r.messages[s.name]=t.extend(r.messages[s.name],i.messages));break;case"remove":if(!i)return delete n[s.name],a;var u={};return t.each(i.split(/\s/),function(t,e){u[e]=a[e],delete a[e]}),u}}var o=t.validator.normalizeRules(t.extend({},t.validator.classRules(s),t.validator.attributeRules(s),t.validator.dataRules(s),t.validator.staticRules(s)),s);if(o.required){var l=o.required;delete o.required,o=t.extend({required:l},o)}return o}}),t.extend(t.expr[":"],{blank:function(e){return!t.trim(""+t(e).val())},filled:function(e){return!!t.trim(""+t(e).val())},unchecked:function(e){return!t(e).prop("checked")}}),t.validator=function(e,i){this.settings=t.extend(!0,{},t.validator.defaults,e),this.currentForm=i,this.init()},t.validator.format=function(e,i){return 1===arguments.length?function(){var i=t.makeArray(arguments);return i.unshift(e),t.validator.format.apply(this,i)}:(arguments.length>2&&i.constructor!==Array&&(i=t.makeArray(arguments).slice(1)),i.constructor!==Array&&(i=[i]),t.each(i,function(t,i){e=e.replace(RegExp("\\{"+t+"\\}","g"),function(){return i})}),e)},t.extend(t.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:t([]),errorLabelContainer:t([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(t){this.lastActive=t,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(t)).hide())},onfocusout:function(t){this.checkable(t)||!(t.name in this.submitted)&&this.optional(t)||this.element(t)},onkeyup:function(t,e){(9!==e.which||""!==this.elementValue(t))&&(t.name in this.submitted||t===this.lastElement)&&this.element(t)},onclick:function(t){t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode)},highlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).addClass(i).removeClass(s):t(e).addClass(i).removeClass(s)},unhighlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).removeClass(i).addClass(s):t(e).removeClass(i).addClass(s)}},setDefaults:function(e){t.extend(t.validator.defaults,e)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:t.validator.format("Please enter no more than {0} characters."),minlength:t.validator.format("Please enter at least {0} characters."),rangelength:t.validator.format("Please enter a value between {0} and {1} characters long."),range:t.validator.format("Please enter a value between {0} and {1}."),max:t.validator.format("Please enter a value less than or equal to {0}."),min:t.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function e(e){var i=t.data(this[0].form,"validator"),s="on"+e.type.replace(/^validate/,"");i.settings[s]&&i.settings[s].call(i,this[0],e)}this.labelContainer=t(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||t(this.currentForm),this.containers=t(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var i=this.groups={};t.each(this.settings.groups,function(e,s){"string"==typeof s&&(s=s.split(/\s/)),t.each(s,function(t,s){i[s]=e})});var s=this.settings.rules;t.each(s,function(e,i){s[e]=t.validator.normalizeRule(i)}),t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",e).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",e),this.settings.invalidHandler&&t(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),t.extend(this.submitted,this.errorMap),this.invalid=t.extend({},this.errorMap),this.valid()||t(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);return this.valid()},element:function(e){e=this.validationTargetFor(this.clean(e)),this.lastElement=e,this.prepareElement(e),this.currentElements=t(e);var i=this.check(e)!==!1;return i?delete this.invalid[e.name]:this.invalid[e.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),i},showErrors:function(e){if(e){t.extend(this.errorMap,e),this.errorList=[];for(var i in e)this.errorList.push({message:e[i],element:this.findByName(i)[0]});this.successList=t.grep(this.successList,function(t){return!(t.name in e)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){t.fn.resetForm&&t(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(t){var e=0;for(var i in t)e++;return e},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{t(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(e){}},findLastActive:function(){var e=this.lastActive;return e&&1===t.grep(this.errorList,function(t){return t.element.name===e.name}).length&&e},elements:function(){var e=this,i={};return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&e.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in i||!e.objectLength(t(this).rules())?!1:(i[this.name]=!0,!0)})},clean:function(e){return t(e)[0]},errors:function(){var e=this.settings.errorClass.replace(" ",".");return t(this.settings.errorElement+"."+e,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=t([]),this.toHide=t([]),this.currentElements=t([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(t){this.reset(),this.toHide=this.errorsFor(t)},elementValue:function(e){var i=t(e).attr("type"),s=t(e).val();return"radio"===i||"checkbox"===i?t("input[name='"+t(e).attr("name")+"']:checked").val():"string"==typeof s?s.replace(/\r/g,""):s},check:function(e){e=this.validationTargetFor(this.clean(e));var i,s=t(e).rules(),r=!1,n=this.elementValue(e);for(var a in s){var u={method:a,parameters:s[a]};try{if(i=t.validator.methods[a].call(this,n,e,u.parameters),"dependency-mismatch"===i){r=!0;continue}if(r=!1,"pending"===i)return this.toHide=this.toHide.not(this.errorsFor(e)),void 0;if(!i)return this.formatAndAdd(e,u),!1}catch(o){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+e.id+", check the '"+u.method+"' method.",o),o}}return r?void 0:(this.objectLength(s)&&this.successList.push(e),!0)},customDataMessage:function(e,i){return t(e).data("msg-"+i.toLowerCase())||e.attributes&&t(e).attr("data-msg-"+i.toLowerCase())},customMessage:function(t,e){var i=this.settings.messages[t];return i&&(i.constructor===String?i:i[e])},findDefined:function(){for(var t=0;arguments.length>t;t++)if(void 0!==arguments[t])return arguments[t];return void 0},defaultMessage:function(e,i){return this.findDefined(this.customMessage(e.name,i),this.customDataMessage(e,i),!this.settings.ignoreTitle&&e.title||void 0,t.validator.messages[i],"<strong>Warning: No message defined for "+e.name+"</strong>")},formatAndAdd:function(e,i){var s=this.defaultMessage(e,i.method),r=/\$?\{(\d+)\}/g;"function"==typeof s?s=s.call(this,i.parameters,e):r.test(s)&&(s=t.validator.format(s.replace(r,"{$1}"),i.parameters)),this.errorList.push({message:s,element:e}),this.errorMap[e.name]=s,this.submitted[e.name]=s},addWrapper:function(t){return this.settings.wrapper&&(t=t.add(t.parent(this.settings.wrapper))),t},defaultShowErrors:function(){var t,e;for(t=0;this.errorList[t];t++){var i=this.errorList[t];this.settings.highlight&&this.settings.highlight.call(this,i.element,this.settings.errorClass,this.settings.validClass),this.showLabel(i.element,i.message)}if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(t=0;this.successList[t];t++)this.showLabel(this.successList[t]);if(this.settings.unhighlight)for(t=0,e=this.validElements();e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return t(this.errorList).map(function(){return this.element})},showLabel:function(e,i){var s=this.errorsFor(e);s.length?(s.removeClass(this.settings.validClass).addClass(this.settings.errorClass),s.html(i)):(s=t("<"+this.settings.errorElement+">").attr("for",this.idOrName(e)).addClass(this.settings.errorClass).html(i||""),this.settings.wrapper&&(s=s.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(s).length||(this.settings.errorPlacement?this.settings.errorPlacement(s,t(e)):s.insertAfter(e))),!i&&this.settings.success&&(s.text(""),"string"==typeof this.settings.success?s.addClass(this.settings.success):this.settings.success(s,e)),this.toShow=this.toShow.add(s)},errorsFor:function(e){var i=this.idOrName(e);return this.errors().filter(function(){return t(this).attr("for")===i})},idOrName:function(t){return this.groups[t.name]||(this.checkable(t)?t.name:t.id||t.name)},validationTargetFor:function(t){return this.checkable(t)&&(t=this.findByName(t.name).not(this.settings.ignore)[0]),t},checkable:function(t){return/radio|checkbox/i.test(t.type)},findByName:function(e){return t(this.currentForm).find("[name='"+e+"']")},getLength:function(e,i){switch(i.nodeName.toLowerCase()){case"select":return t("option:selected",i).length;case"input":if(this.checkable(i))return this.findByName(i.name).filter(":checked").length}return e.length},depend:function(t,e){return this.dependTypes[typeof t]?this.dependTypes[typeof t](t,e):!0},dependTypes:{"boolean":function(t){return t},string:function(e,i){return!!t(e,i.form).length},"function":function(t,e){return t(e)}},optional:function(e){var i=this.elementValue(e);return!t.validator.methods.required.call(this,i,e)&&"dependency-mismatch"},startRequest:function(t){this.pending[t.name]||(this.pendingRequest++,this.pending[t.name]=!0)},stopRequest:function(e,i){this.pendingRequest--,0>this.pendingRequest&&(this.pendingRequest=0),delete this.pending[e.name],i&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(t(this.currentForm).submit(),this.formSubmitted=!1):!i&&0===this.pendingRequest&&this.formSubmitted&&(t(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(e){return t.data(e,"previousValue")||t.data(e,"previousValue",{old:null,valid:!0,message:this.defaultMessage(e,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(e,i){e.constructor===String?this.classRuleSettings[e]=i:t.extend(this.classRuleSettings,e)},classRules:function(e){var i={},s=t(e).attr("class");return s&&t.each(s.split(" "),function(){this in t.validator.classRuleSettings&&t.extend(i,t.validator.classRuleSettings[this])}),i},attributeRules:function(e){var i={},s=t(e),r=s[0].getAttribute("type");for(var n in t.validator.methods){var a;"required"===n?(a=s.get(0).getAttribute(n),""===a&&(a=!0),a=!!a):a=s.attr(n),/min|max/.test(n)&&(null===r||/number|range|text/.test(r))&&(a=Number(a)),a?i[n]=a:r===n&&"range"!==r&&(i[n]=!0)}return i.maxlength&&/-1|2147483647|524288/.test(i.maxlength)&&delete i.maxlength,i},dataRules:function(e){var i,s,r={},n=t(e);for(i in t.validator.methods)s=n.data("rule-"+i.toLowerCase()),void 0!==s&&(r[i]=s);return r},staticRules:function(e){var i={},s=t.data(e.form,"validator");return s.settings.rules&&(i=t.validator.normalizeRule(s.settings.rules[e.name])||{}),i},normalizeRules:function(e,i){return t.each(e,function(s,r){if(r===!1)return delete e[s],void 0;if(r.param||r.depends){var n=!0;switch(typeof r.depends){case"string":n=!!t(r.depends,i.form).length;break;case"function":n=r.depends.call(i,i)}n?e[s]=void 0!==r.param?r.param:!0:delete e[s]}}),t.each(e,function(s,r){e[s]=t.isFunction(r)?r(i):r}),t.each(["minlength","maxlength"],function(){e[this]&&(e[this]=Number(e[this]))}),t.each(["rangelength","range"],function(){var i;e[this]&&(t.isArray(e[this])?e[this]=[Number(e[this][0]),Number(e[this][1])]:"string"==typeof e[this]&&(i=e[this].split(/[\s,]+/),e[this]=[Number(i[0]),Number(i[1])]))}),t.validator.autoCreateRanges&&(e.min&&e.max&&(e.range=[e.min,e.max],delete e.min,delete e.max),e.minlength&&e.maxlength&&(e.rangelength=[e.minlength,e.maxlength],delete e.minlength,delete e.maxlength)),e},normalizeRule:function(e){if("string"==typeof e){var i={};t.each(e.split(/\s/),function(){i[this]=!0}),e=i}return e},addMethod:function(e,i,s){t.validator.methods[e]=i,t.validator.messages[e]=void 0!==s?s:t.validator.messages[e],3>i.length&&t.validator.addClassRules(e,t.validator.normalizeRule(e))},methods:{required:function(e,i,s){if(!this.depend(s,i))return"dependency-mismatch";if("select"===i.nodeName.toLowerCase()){var r=t(i).val();return r&&r.length>0}return this.checkable(i)?this.getLength(e,i)>0:t.trim(e).length>0},email:function(t,e){return this.optional(e)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)},url:function(t,e){return this.optional(e)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)},date:function(t,e){return this.optional(e)||!/Invalid|NaN/.test(""+new Date(t))},dateISO:function(t,e){return this.optional(e)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)},number:function(t,e){return this.optional(e)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)},digits:function(t,e){return this.optional(e)||/^\d+$/.test(t)},creditcard:function(t,e){if(this.optional(e))return"dependency-mismatch";if(/[^0-9 \-]+/.test(t))return!1;var i=0,s=0,r=!1;t=t.replace(/\D/g,"");for(var n=t.length-1;n>=0;n--){var a=t.charAt(n);s=parseInt(a,10),r&&(s*=2)>9&&(s-=9),i+=s,r=!r}return 0===i%10},minlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s},maxlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||s>=r},rangelength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s[0]&&s[1]>=r},min:function(t,e,i){return this.optional(e)||t>=i},max:function(t,e,i){return this.optional(e)||i>=t},range:function(t,e,i){return this.optional(e)||t>=i[0]&&i[1]>=t},equalTo:function(e,i,s){var r=t(s);return this.settings.onfocusout&&r.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){t(i).valid()}),e===r.val()},remote:function(e,i,s){if(this.optional(i))return"dependency-mismatch";var r=this.previousValue(i);if(this.settings.messages[i.name]||(this.settings.messages[i.name]={}),r.originalMessage=this.settings.messages[i.name].remote,this.settings.messages[i.name].remote=r.message,s="string"==typeof s&&{url:s}||s,r.old===e)return r.valid;r.old=e;var n=this;this.startRequest(i);var a={};return a[i.name]=e,t.ajax(t.extend(!0,{url:s,mode:"abort",port:"validate"+i.name,dataType:"json",data:a,success:function(s){n.settings.messages[i.name].remote=r.originalMessage;var a=s===!0||"true"===s;if(a){var u=n.formSubmitted;n.prepareElement(i),n.formSubmitted=u,n.successList.push(i),delete n.invalid[i.name],n.showErrors()}else{var o={},l=s||n.defaultMessage(i,"remote");o[i.name]=r.message=t.isFunction(l)?l(e):l,n.invalid[i.name]=!0,n.showErrors(o)}r.valid=a,n.stopRequest(i,a)}},s)),"pending"}}}),t.format=t.validator.format})(jQuery),function(t){var e={};if(t.ajaxPrefilter)t.ajaxPrefilter(function(t,i,s){var r=t.port;"abort"===t.mode&&(e[r]&&e[r].abort(),e[r]=s)});else{var i=t.ajax;t.ajax=function(s){var r=("mode"in s?s:t.ajaxSettings).mode,n=("port"in s?s:t.ajaxSettings).port;return"abort"===r?(e[n]&&e[n].abort(),e[n]=i.apply(this,arguments),e[n]):i.apply(this,arguments)}}}(jQuery),function(t){t.extend(t.fn,{validateDelegate:function(e,i,s){return this.bind(i,function(i){var r=t(i.target);return r.is(e)?s.apply(r,arguments):void 0})}})}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:69:"/ispring_bitrix/content/js/classes/view/Flash.class.js?14398242359130";s:6:"source";s:54:"/ispring_bitrix/content/js/classes/view/Flash.class.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var Flash = Base.extend({
},
{
    isIE: (navigator.appVersion.indexOf("MSIE") != -1) ? true : false,
    isWin: (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false,
    isOpera: (navigator.userAgent.indexOf("Opera") != -1) ? true : false,

    /**
     * Prepares flash embed code.
     */
    getPlayerEmbed: function( idPlayer, playerLocation, playerVars, width, height, flashParams )
    {
        var htmlVars = this.getFlashVars(playerVars);

        var defaultFlashParams =
        {
            allowScriptAccess: "always",
            quality:           "high",
            bgcolor:           "#ffffff",
            allowFullScreen:   "true",
            flashVars:         htmlVars,
            wmode:             "opaque"
        };
        flashParams = $.extend(defaultFlashParams, flashParams);
        if (flashParams.wmode == null)
        {
            delete flashParams.wmode;
        }

        var proto = ('https:' == document.location.protocol ? 'https://' : 'http://');
        var html = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="' + proto + 'fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0" width="' + width + '" height="' + height + '" id="' + idPlayer + '">'
                + '<param name="movie" value="' + playerLocation + '" />';

        for(var i in flashParams)
            html += '<param name="' + i + '" value="' + flashParams[i] + '" />';

        html += '<embed src="' + playerLocation  + '" width="' + width + '" height="' + height + '" name="' + idPlayer + '" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"';

        for (i in flashParams)
            html += i + '="' + flashParams[i] + '" ';

        html += '></embed></object>';

        return html;
    },

    /**
     * Prepares flash embed code by specified flash options.
     */
    getPlayerEmbedByOptions: function( objectId, flashOptions )
    {
        var movieLocation = flashOptions.getMovieLocation();
        var flashVars = flashOptions.getFlashVars();

        var width = flashOptions.getWidth();
        var height = flashOptions.getHeight();

        var wmode   = flashOptions.getWmode();
        var bgColor = flashOptions.getBgColor();

        return this.getPlayerEmbed( objectId, movieLocation, flashVars, width, height, {wmode: wmode, bgcolor: bgColor} );
    },

    /**
     * Combines flash vars string by vars array.
     */
    getFlashVars: function(playerVars)
    {
        var htmlVars = '';
        for (var i in playerVars)
            htmlVars += i + '=' + encodeURIComponent(playerVars[i]) + '&';
        htmlVars = htmlVars.substr(0, htmlVars.length - 1);

        return htmlVars;
    },

    /**
     * Prepares and inserts flash embed code into page.
     */
    insertFlashMovie: function( idObject, movieLocation, flashVars, width, height, flashParams )
    {
        document.write( this.getPlayerEmbed(idObject, movieLocation, flashVars, width, height, flashParams) );
    },

    /**
     * Returns flash object by its name.
     */
    getFlashApp: function( appName )
    {
        return document[appName];
    },

    // When called with reqMajorVer, reqMinorVer, reqRevision returns true if that version or greater is available
    detectFlashVer: function (reqMajorVer, reqMinorVer, reqRevision)
    {
        versionStr = this.getSwfVer();
        if (versionStr == -1 ) {
            return false;
        } else if (versionStr != 0) {
            if(this.isIE && this.isWin && !this.isOpera) {
                // Given "WIN 2,0,0,11"
                tempArray         = versionStr.split(" ");  // ["WIN", "2,0,0,11"]
                tempString        = tempArray[1];           // "2,0,0,11"
                versionArray      = tempString.split(",");  // ['2', '0', '0', '11']
            } else {
                versionArray      = versionStr.split(".");
            }
            var versionMajor      = versionArray[0];
            var versionMinor      = versionArray[1];
            var versionRevision   = versionArray[2];

                // is the major.revision >= requested major.revision AND the minor version >= requested minor
            if (versionMajor > parseFloat(reqMajorVer)) {
                return true;
            } else if (versionMajor == parseFloat(reqMajorVer)) {
                if (versionMinor > parseFloat(reqMinorVer))
                    return true;
                else if (versionMinor == parseFloat(reqMinorVer)) {
                    if (versionRevision >= parseFloat(reqRevision))
                        return true;
                }
            }
            return false;
        }
    },

    // JavaScript helper required to detect Flash Player PlugIn version information
    getSwfVer: function (){
        // NS/Opera version >= 3 check for Flash plugin in plugin array
        var flashVer = -1;

        if (navigator.plugins != null && navigator.plugins.length > 0) {
            if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
                var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
                var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;
                var descArray = flashDescription.split(" ");
                var tempArrayMajor = descArray[2].split(".");
                var versionMajor = tempArrayMajor[0];
                var versionMinor = tempArrayMajor[1];
                var versionRevision = descArray[3];
                if (versionRevision == "") {
                    versionRevision = descArray[4];
                }
                if (versionRevision[0] == "d") {
                    versionRevision = versionRevision.substring(1);
                } else if (versionRevision[0] == "r") {
                    versionRevision = versionRevision.substring(1);
                    if (versionRevision.indexOf("d") > 0) {
                        versionRevision = versionRevision.substring(0, versionRevision.indexOf("d"));
                    }
                }
                var flashVer = versionMajor + "." + versionMinor + "." + versionRevision;
            }
        }
        // MSN/WebTV 2.6 supports Flash 4
        else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) flashVer = 4;
        // WebTV 2.5 supports Flash 3
        else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) flashVer = 3;
        // older WebTV supports Flash 2
        else if (navigator.userAgent.toLowerCase().indexOf("webtv") != -1) flashVer = 2;
        else if ( this.isIE && this.isWin && !this.isOpera ) {
            flashVer = this.controlVersion();
        }

        return flashVer;
    },

    controlVersion: function ()
    {
        var version;
        var axo;
        var e;

        // NOTE : new ActiveXObject(strFoo) throws an exception if strFoo isn't in the registry

        try {
            // version will be set for 7.X or greater players
            axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
            version = axo.GetVariable("$version");
        } catch (e) {
        }

        if (!version)
        {
            try {
                // version will be set for 6.X players only
                axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");

                // installed player is some revision of 6.0
                // GetVariable("$version") crashes for versions 6.0.22 through 6.0.29,
                // so we have to be careful.

                // default to the first public version
                version = "WIN 6,0,21,0";

                // throws if AllowScripAccess does not exist (introduced in 6.0r47)
                axo.AllowScriptAccess = "always";

                // safe to call for 6.0r47 or greater
                version = axo.GetVariable("$version");

            } catch (e) {
            }
        }

        if (!version)
        {
            try {
                // version will be set for 4.X or 5.X player
                axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
                version = axo.GetVariable("$version");
            } catch (e) {
            }
        }

        if (!version)
        {
            try {
                // version will be set for 3.X player
                axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
                version = "WIN 3,0,18,0";
            } catch (e) {
            }
        }

        if (!version)
        {
            try {
                // version will be set for 2.X player
                axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                version = "WIN 2,0,0,11";
            } catch (e) {
                version = -1;
            }
        }

        return version;
    }

});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:71:"/ispring_bitrix/content/js/layout/responsive/top_menu.js?14591861136240";s:6:"source";s:56:"/ispring_bitrix/content/js/layout/responsive/top_menu.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function()
{
    var isRuPage = $(".ru_page").length > 0;
    checkAccount(isRuPage);
    _mainMenuHandler();
    initLoginFancyBox();
    if (isIe9())
    {
        var searchInputs = document.getElementsByClassName('top_menu_search_input');
        for (var i = 0; i < searchInputs.length; i++)
        {
            inputPlaceholder(searchInputs[i]);
        }
    }
    selectInitNavigationMenu();
});

function _mainMenuHandler()
{
    var openClass = 'open';
    var visibleClass = 'visible';

    $('.hover_dropdown').each(function(){
        var item = $(this);
        item.hover(function(){
            var popup = $('.menu_products');
            hideMenu(popup, popup.next('.shadow_under'), openClass, visibleClass, 'menu_products', $('.top_menu_list .dropdown'));
        });
    });

    $('.popup_suite .popup_description_wrapper').hover(function(){
        $('#menu_products .menu_arrow_up').addClass('grey_arrow');
    }, function(){
        $('#menu_products .menu_arrow_up').removeClass('grey_arrow');
    });

    $('.top_menu_list .dropdown').each(function(){
        var item = $(this);
        var popupClass = item.attr('id');
        var popup = $('.' + popupClass);
        var shadow = popup.next('.shadow_under');
        item.click(function(){
            if (popup.hasClass('open'))
            {
                hideMenu(popup, shadow, openClass, visibleClass, popupClass, item);
            }
            else
            {
                hideAllTabs(openClass, visibleClass, popupClass);

                showMenu(popup, shadow, openClass, visibleClass, popupClass, item);
            }

            shadow.click(function(){
                hideMenu(popup, shadow, openClass, visibleClass, popupClass, item);
            });

            $(window).resize(function(){
                hideMenu(popup, shadow, openClass, visibleClass, popupClass, item);
            });
        });
    });
}

function hideAllTabs(openClass, visibleClass, curPopupClass)
{
    $('.top_menu_list .dropdown').each(function(){
        var item = $(this);
        var popupClass = item.attr('id');
        var popup = $('.' + popupClass);
        var shadow = popup.next('.shadow_under');

        if ((popup.hasClass('open')) && (curPopupClass != popupClass))
        {
            hideMenu(popup, shadow, openClass, visibleClass, popupClass, item);
        }
    });
}

function showMenu(popup, shadow, firstClass, secondClass, popupClass, item)
{
    popup.addClass(firstClass);
    shadow.addClass(secondClass);
    if (isIe8())
   {
        popup.css('visibility', 'visible');
        shadow.show();
    }
    if (popupClass == 'menu_products')
    {
        item.find('.menu_arrow_up').fadeIn();
    }
}

function hideMenu(popup, shadow, firstClass, secondClass, popupClass, item)
{
    popup.removeClass(firstClass);
    shadow.removeClass(secondClass);
    if (isIe8())
    {
        popup.css('visibility', 'hidden');
        shadow.hide();
    }
    if (popupClass == 'menu_products')
    {
        item.find('.menu_arrow_up').hide();
    }
}


function initLoginFancyBox()
{
    if ( typeof(initFormFancyBox) == 'function' )
    {
        initFormFancyBox();
        var loginRequired = getBrowserCookie("loginreq");

        if ( loginRequired == '1' )
        {
            $('#hiddenLoginPopupLink').trigger('click.fb');
        }
    }
}


function selectInitNavigationMenu()
{
    $('.with_submenu').each(function(){
        var item = $(this);
        item.hover(function()
        {
            if (!item.hasClass('not_active'))
            {
                $('.dropdown_hover').each(function(){
                    $(this).removeClass('open');
                });
                var popup = $('.menu_products');
                popup.removeClass('open');
                popup.next('.shadow_under').removeClass('visible');
                $('#menu_products').find('.menu_arrow_up').fadeOut();
                item.addClass('open');
            }
        },
        function()
        {
            item.removeClass('open');
        });
    });
}

function getBrowserCookie(cookieName)
{
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++)
    {
        var name = cookies[i].substr(0, cookies[i].indexOf("="));
        var value = cookies[i].substr(cookies[i].indexOf("=") + 1);
        name = name.replace(/^\s+|\s+$/g,"");
        if (name == cookieName)
        {
            return value.replace(/\+/g, " ");
        }
    }

    return "";
}

function checkAccount(isRuPage)
{
    var url = (isRuPage) ? "/refresh_cart_count.html" : "/ispring_bitrix/refresh_cart_count.php";
    $.post(url, 'json', function(){
        var userName = getBrowserCookie("username");
        if ( userName )
        {
            if (isRuPage)
            {
                $(".not_logged_in").hide();
                $(".logged_in").show();
                $(".account_menu").addClass("active");
            }
            else
            {
                $("#topMenuLoginLink").hide();
                $(".logged_in").attr("id", "nav_item_account").removeClass("not_active");
            }
        }
        else
        {
            if (isRuPage)
            {
                $(".logged_in").hide();
                $(".not_logged_in").show();
                $(".account_menu").removeClass("active");
            }
            else
            {
                $(".logged_in").removeAttr("id").removeAttr("data-toggle").addClass("not_active");
                $("#topMenuLoginLink").show();
            }
        }

        var cartCount = parseInt(getBrowserCookie("cartcount"));
        if ( cartCount )
        {
            $('#cartItemsCount').show().html((isRuPage) ? '(' + cartCount + ')' : cartCount);
            $('.cart_items_count_second').show().html(cartCount);
            $('.cart_items_count_third').show().html('(' + cartCount + ')');
            $("#topShoppingCart").attr("href", "https://" + getDomain() + "/cart/view.html")
        }
    });
}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:58:"/ispring_bitrix/content/js/purchase_link.js?14514713852227";s:6:"source";s:43:"/ispring_bitrix/content/js/purchase_link.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var PurchaseLink = (function()
{
    var _escape = window.encodeURIComponent || escape;

    /**
     * Returns additional link parameter name by specified in URL PRODUCT parameter.
     */
    function _getAdditionalName( url, index )
    {
        var additionalName = '';

        var re = /PRODUCT\[([0-9]+)\]/;
        var matches = url.match( re );
        var productID = (matches && matches[1]) ? matches[1] : null;
        if ( productID )
        {
            additionalName = 'HADD[' + productID + '][ADDITIONAL' + index + ']';
        }

        return additionalName;
    };

    return {
        addLinkAdditional: function(linkObj)
        {
            if ( !linkObj )
                return;

            var href = linkObj.attr('href');
            var additionalName = _getAdditionalName( href, 1 );
            if ( additionalName != '' )
            {
                var tracker = Stats.getiSpringTracker();
                if ( tracker != null )
                {
                    href = tracker.getLinkerUrl(href, additionalName);
                }
            }

            var accountId = $('#siteAccountId').val();
            if ( accountId )
            {
                var additionalName = _getAdditionalName( href, 2 );
                if ( additionalName != '' )
                {
                    var params = {};
                    params[additionalName] = accountId;

                    href = addUrlParams(href, params);
                }
            }

            linkObj.attr( "href", href );

            // add google analytics cookie for cross
            // domain tracking
            _gaq.push(function() {
                var tracker = _gat._getTrackerByName();
                var href = tracker._getLinkerUrl( linkObj.attr("href") );
                linkObj.attr( "href", href );
            });
        },

        addArrLinks: function(purchaseLinks)
        {
            $.each( purchaseLinks, function(index, value) {
                if (value.length > 0)
                {
                    PurchaseLink.addLinkAdditional(value);
                }
            });
        }
    };
})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:68:"/ispring_bitrix/content/js/classes/SiteConfig.class.js?1439824235433";s:6:"source";s:54:"/ispring_bitrix/content/js/classes/SiteConfig.class.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var SiteConfig = Base.extend(
{
    _config: null,

    constructor: function()
    {
        this._config = JSON.parse( $("#siteConfig").val() );
    },

    getSiteId: function()
    {
        return this._config.siteId;
    }
    
},
{
    _instance: null,

    getInstance: function()
    {
        if ( !this._instance )
        {
            this._instance = new SiteConfig();
        }
        return this._instance;
    }
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:56:"/ispring_bitrix/content/js/stats_utils.js?14398242354334";s:6:"source";s:41:"/ispring_bitrix/content/js/stats_utils.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var Stats = function()
{
    var MAX_ATTEMPTS = 3;

    var _isBaseURL = "";
    var _requireFlashStatsAttemptsCounter = 0;

    var _statsFlashName = 'statsFlash';
    var _iSpringTracker = null;

    var _isInitialized = false;
    var _queue = []; // the queue of command to be executed

    function _doProcessQueue()
    {
        var tracker = Stats.getiSpringTracker();
        // check if valid tracker returned
        if ( !tracker )
        {
            return;
        }
        
        while (_queue.length != 0)
        {
            try
            {
                var args = _queue.shift();
                // first element contains method name
                var commandName = Array.prototype.shift.apply(args);
                tracker[commandName].apply(tracker, args);
            }
            catch (err)
            {              
            }
        }
    }

    /**
     * Tries to load flash movie for restoring user cookie first. If it can't be
     * loaded or time out occured, processes command queue.
     */
    function _processQueue()
    {
        if ( !_isInitialized )
        {
            var flashStats = Flash.getFlashApp( _statsFlashName );
            if (  flashStats && flashStats.isLoaded != undefined || _requireFlashStatsAttemptsCounter >= MAX_ATTEMPTS )
            {
                _isInitialized = true;
            }
            else if ( _requireFlashStatsAttemptsCounter < MAX_ATTEMPTS )
            {
                ++_requireFlashStatsAttemptsCounter;
                setTimeout( _processQueue, 200 );
            }
        }

        if ( _isInitialized )
        {
            _doProcessQueue();
        }
    }

    /**
     * Method accepts unlimited number of parameters, where the first parameter
     * is the name of iSpringTracker method to call and the others are parameters
     * of that method.
     */
    function _exec()
    {
        if (arguments.length > 0)
        {
            // push command to queue, turn arguments object into an array
            _queue[_queue.length] = Array.prototype.slice.call(arguments, 0);
            
            _processQueue();
        }
    };

    _isInitialized = !Flash.detectFlashVer(9,0,0);

    return {
        trackPageView: function()
        {
            _exec('trackPageView');
        },

        trackEvent: function( eventName, productName, productVersion )
        {
            _exec('trackEvent', eventName, productName, productVersion);
        },

        /**
         * Inserts iSpring Stats helper flash.
         */
        insertStatsFlash: function()
        {
            var contentServerUrl = $("#content_server_url").val();

            var flashHTML = Flash.getPlayerEmbed( "statsFlash", contentServerUrl + "/resources/stats1.swf", {}, 1, 1 );
            $("#stats_flash_container").attr("innerHTML", flashHTML );
        },

        tryInitIsBaseURL: function()
        {
            if ( typeof(isBaseURL) !== 'undefined' )
            {
                _isBaseURL = isBaseURL;
            }
        },

        getiSpringTracker: function()
        {
            var typeOfTracker = (typeof(_iSpringTracker) );
            if ( typeOfTracker == 'undefined' || _iSpringTracker == null )
            {
                try
                {
                    if ( typeof(iSpring) != 'undefined' && _isBaseURL != "" )
                    {
                        //temporary code before bitrix.ispringsolutions.com is moved to ispringsolutions.com
                        var pattern = /bitrix.ispringsolutions.com/i;
                        var defaultSiteId = SiteConfig.getInstance().getSiteId();
                        var siteId = (pattern.test(getDomain())) ? 7 : defaultSiteId;
                        _iSpringTracker = iSpring.getTracker( _isBaseURL, siteId );
                        //_iSpringTracker = iSpring.getTracker( _isBaseURL, defaultSiteId );
                    }
                }
                catch(err)
                {
                }
            }
            return _iSpringTracker;
        }
    };
}();

Stats.tryInitIsBaseURL();

$(function(){
    Stats.insertStatsFlash();
    Stats.trackPageView();
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:64:"/ispring_bitrix/content/js/add_to_cart_tracking.js?1451471385385";s:6:"source";s:50:"/ispring_bitrix/content/js/add_to_cart_tracking.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function(){
    var ADD_TO_CART_LINK_SELECTOR = 'a[href^="/cart/view.html"]';

    $(ADD_TO_CART_LINK_SELECTOR).click(function() {
        var url = this.pathname + this.search;
        if ($('.ru_page').length > 0)
        {
            ga('send', 'pageview', url);
        }
        else
        {
            _gaq.push(['_trackPageview', url]);
        }
    });
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:50:"/ispring_bitrix/content/js/footer.js?1451471385423";s:6:"source";s:36:"/ispring_bitrix/content/js/footer.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){
    $(".footer_menu .products a").each(function(){
        $(this).click(function(){
            if ($('.ru_page').length > 0)
            {
                ga('send', 'event', 'Footer_clicks', $(this).attr("id"));
            }
            else
            {
                _gaq.push(['_trackEvent', 'Footer_clicks', $(this).attr("id")]);
            }
        });
    });
});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:92:"/ispring_bitrix/content/js/classes/pages/SubscribeNewslettersFormNew.class.js?14514713855436";s:6:"source";s:77:"/ispring_bitrix/content/js/classes/pages/SubscribeNewslettersFormNew.class.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var SubscribeNewslettersForm = Base.extend({
    _HANDLER: "/page_parts/subscribe_newsletters.php",

    _form: null,
    _button: null,
    _inputField: null,
    _successBlock: null,
    _errorBlock: null,

    errorMessagePlaceholder: null,
    validatorSettings: null,
    validator: null,

    constructor: function(form)
    {
        var thisPtr = this;
        this._form = form;
        var formExists = this._form.length > 0;
        this._button = this._form.find('.email_form_submit_btn');
        this._inputField = this._form.find('.form_email_input');
        this._successBlock = this._form.find(".success_wrapper");
        this._errorBlock = this._form.find(".error_wrapper");

        if (formExists)
        {
            this.initFormValidation();
        }

        this._inputField.click(function(){
            thisPtr._errorBlock.hide();
        });
        if (!this._form.parent().hasClass('newsletter_wrapper'))
        {
            this._errorBlock.click(handler(thisPtr, '_changeBtnState'));
        }

        this._addFormStates();

    },

    _changeBtnState: function()
    {
        this._inputField.val("");
        this._button.removeClass();
        this._button.addClass('email_form_submit_btn');
        if ($(".ru_page").length > 0)
        {
            this._button.addClass('btn_ru');
        }
        this._errorBlock.hide();
    },

    initFormValidation: function()
    {
        this.validatorSettings = this.getValidatorSettings();
        this.validator = this._form.validate(this.validatorSettings);
    },

    _checkFormErrors: function(formErrorsJson)
    {
        if (formErrorsJson != '')
        {
            var formErrors = $.parseJSON(formErrorsJson);
            var errorMap = {};
            for (var fieldName in formErrors)
            {
                errorMap[fieldName] = formErrors[fieldName]['message'];
            }

            this.validator.showErrors(errorMap);
        }
    },

    getValidatorSettings: function()
    {
        var thisPtr = this;
        var validateParams =
        {
            submitHandler: function()
            {
                var params = {
                    'email'       : thisPtr._form.find(".form_email_input").val()
                };
                if (thisPtr._form.find("[name='group']").is("input"))
                {
                    params['group'] = thisPtr._form.find("[name='group']").val();
                }

                $.post(thisPtr._HANDLER, params, handler( thisPtr, 'processAjaxResultHandler'), 'json');
                thisPtr._button.attr('disabled', 'disabled');
                return false;
            },

            errorPlacement: function (error, element)
            {
                thisPtr._errorBlock.find(".text").html(error);
            },

            highlight: function(element, errorClass, validClass)
            {
                thisPtr._errorBlock.show();
            },

            unhighlight: function(element, errorClass, validClass)
            {
                thisPtr._errorBlock.hide();
            },
            wrapper: '',
            errorClass: "error",
            onkeyup: false,
            onsubmit: true,

            rules:
            {
                email:
                {
                    required: true,
                    email: true,
                    maxlength: 100
                }
            },
            messages:
            {
                email:
                {
                    email:     Messages.SubscribeNewslettersNew.EmailNotValid,
                    required:  Messages.SubscribeNewslettersNew.EmailRequired,
                    maxlength: Messages.SubscribeNewslettersNew.ErrorEmailMaxLength
                }
            }
        };

        return validateParams;
    },

    processAjaxResultHandler: function(data)
    {
        switch (data.status)
        {
            case 0:
                if (data.errors)
                {
                    this._button.removeAttr('disabled');
                    this._checkFormErrors(data.errors);
                }
                break;
            case 1:
            {
                this._successBlock.show();
                this._button.hide();
                if ($('.ru_page').length > 0)
                {
                    ga('send', 'event', 'Newsletter_subs', 'Footer_subs');
                }
                else
                {
                    _gaq.push(['_trackEvent', 'Newsletter_subs', 'Footer_subs']);
                }
                break;
            }
        }
    },

    _addFormStates: function()
    {
        if (isIeLt7())
        {
            $(".form_email_input")
            .focus(function(){
                    $(this).addClass("not_empty");
                });
        }

        $(".form_email_input")
        .blur(function(){
            if ($(this).val() != '')
            {
                $(this).addClass("not_empty");
            }
            else
            {
                $(this).removeClass("not_empty");
            }
         });
    }

});

$(document).ready(function(){
    $('.subscribe_newsletter_form').each(function() {
        new SubscribeNewslettersForm($(this));
    });
});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:77:"/ispring_bitrix/content/js/classes/menu/TopMobileMenu.class.js?14526930242820";s:6:"source";s:62:"/ispring_bitrix/content/js/classes/menu/TopMobileMenu.class.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var TopMobileMenu = Base.extend(
{
    OPENED_MENU_CLASS: 'opened',
    CLOSED_MENU_CLASS: 'closed',
    _mainMenuButton: null,
    _serviceMenuButton: null,
    _grayLayer: null,
    _serviceMenu: null,
    _mainMenu: null,

    constructor: function()
    {
        this._mainMenuButton = $('.main_menu_button');
        this._serviceMenuButton = $('.service_menu_button');
        this._grayLayer = $('#grayLayerMain');
        this._mainMenu = $('.main_menu');
        this._serviceMenu = $('.service_menu_mobile_navbar');

        this._mainMenuButton.addClass(this.CLOSED_MENU_CLASS);
        this._serviceMenuButton.addClass(this.CLOSED_MENU_CLASS);

        this._mainMenuButton.on('click', handler(this, '_changeMainMenuState'));
        this._serviceMenuButton.on('click', handler(this, '_changeServiceMenuState'));

        this._grayLayer.hide();
        this._grayLayer.on('click', handler(this, '_hideMenu'));
        this._grayLayer.on('scroll', handler(this, '_hideMenu'));
        this._grayLayer.on('touchstart', handler(this, '_hideMenu'));
        this._grayLayer.on('touchmove', handler(this, '_hideMenu'));
        this._grayLayer.on('scrollstart', handler(this, '_hideMenu'));
        this._grayLayer.on('wheel', handler(this, '_hideMenu'));
    },

    _hideMenu: function()
    {
        if (this._mainMenuButton.hasClass(this.OPENED_MENU_CLASS) )
        {
            this._mainMenuButton.click();
        }
        if (this._serviceMenuButton.hasClass(this.OPENED_MENU_CLASS) )
        {
            this._serviceMenuButton.click();
        }
    },

    _changeMainMenuState: function()
    {
        this._changeMenuState(this._mainMenuButton, this._serviceMenuButton, this._mainMenu);
    },

    _changeServiceMenuState: function()
    {
        this._changeMenuState(this._serviceMenuButton, this._mainMenuButton, this._serviceMenu);
    },

    _changeMenuState: function(menuButton, secondMenuButton, menu)
    {
        if (secondMenuButton.hasClass(this.OPENED_MENU_CLASS) )
        {
            secondMenuButton.click();
        }
        var opened = this.isOpened(menu);
        if ( menuButton.hasClass(this.CLOSED_MENU_CLASS) && !opened)
        {
            menuButton.removeClass(this.CLOSED_MENU_CLASS);
            menuButton.addClass(this.OPENED_MENU_CLASS);
            this._grayLayer.show();
        }
        else if (opened)
        {
            menuButton.removeClass(this.OPENED_MENU_CLASS);
            menuButton.addClass(this.CLOSED_MENU_CLASS);
            this._grayLayer.hide();
        }
    },

    isOpened: function (menu)
    {
        return menu.hasClass('in') || menu.hasClass('collapsing');
    }
});

$(document).ready(function()
{
    new TopMobileMenu();
});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:80:"/ispring_bitrix/content/js/classes/utils/EventDispatcher.class.js?14398242352787";s:6:"source";s:65:"/ispring_bitrix/content/js/classes/utils/EventDispatcher.class.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var EventDispatcher = Base.extend({
    _listeners: null,
    
    constructor: function()
    {
        this._listeners = new Object();
    },
    
    /**
     * Adds listener to object's event.
     */
    addListener: function(eventName, listener, method)
    {
        if (!this._listeners)
        {
            this._listeners = new Object();
        }
        
        if (!this._listeners[eventName])
        {
            this._listeners[eventName] = new Array();
        }
        
        this._listeners[eventName].push({listener: listener, method: method});
    },
    
    /**
     * Removes listener from object's event.
     */
    removeListener: function(eventName, listener)
    {
        if (!this._listeners[eventName])
        {
            return;
        }
        
        var countListeners = this._listeners[eventName].length;
        for (var i = 0; i < countListeners; ++i)
        {
            if (this._listeners[eventName][i].listener == listener)
            {
                this._listeners[eventName].splice(i, 1);        
                break;
            }
        }
    },
    
    /**
     * Checkes is object already has specified listener to event.
     * 
     * @return boolean
     */
    hasListener: function(eventName, listener)
    {
        if (!this._listeners[eventName])
        {
            return false;
        }
        
        var countListeners = this._listeners[eventName].length;
        for (var i = 0; i < countListeners; ++i)
        {
            if (this._listeners[eventName][i].listener == listener)
            {
                return true;
            }
        }
        return false;
    },
    
    /**
     * Dispatches event.
     */
    dispatchEvent: function(eventName)
    {
        if (!this._listeners || !this._listeners[eventName])
        {
            return;
        }
    
        var eventArguments = Array.prototype.slice.call(arguments);
        //remove eventName from arguments list
        eventArguments.splice(0, 1);
        
        var countListeners = this._listeners[eventName].length;
        for (var i = 0; i < countListeners; ++i)
        {
            var listener = this._listeners[eventName][i].listener;
            var method   = this._listeners[eventName][i].method;

            //workaround bug with calling handler from other window
            //NOTE: this workaround woudn't work if you want to pass additional parameters to handler
            if (eventArguments.length == 0)
            {
                method.apply(listener);
            }
            else
            {
                method.apply(listener, eventArguments);
            }
        }
    }
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:70:"/ispring_bitrix/content/js/jquery.scrollTo-1.4.2-min.js?14398242352262";s:6:"source";s:55:"/ispring_bitrix/content/js/jquery.scrollTo-1.4.2-min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:59:"/ispring_bitrix/content/js/jquery.ifixpng.js?14398242357464";s:6:"source";s:44:"/ispring_bitrix/content/js/jquery.ifixpng.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * jQuery ifixpng plugin
 * (previously known as pngfix)
 * Version 3.1.2  (2008/09/01)
 * @requires jQuery v1.2.6 or above, or a lower version with the dimensions plugin
 *
 * Based on the plugin by Kush M., http://jquery.khurshid.com
 *
 * Background position Fixed
 * Also fixes non-visible images
 * (c) Copyright Yereth Jansen (yereth@yereth.nl)
 * personal website: http://www.yereth.nl
 * Company website: http://www.wharf.nl
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * For a demonstration of the background-position being fixed:
 * http://www.yereth.nl/bgpos.html
 *
 * Plugin page:
 * http://plugins.jquery.com/project/iFixPng2
 *
 */

/**
 *
 * @example
 *
 * optional if location of pixel.gif if different to default which is images/pixel.gif
 * $.ifixpng('media/pixel.gif');
 *
 * $('img[@src$=.png], #panel').ifixpng();
 *
 * @apply hack to all png images and #panel which icluded png img in its css
 *
 * @name ifixpng
 * @type jQuery
 * @cat Plugins/Image
 * @return jQuery
 * @author jQuery Community
 */
;(function($) {

    /**
     * helper variables and function
     */
    $.ifixpng = function(customPixel) {
        $.ifixpng.pixel = customPixel;
    };

    $.ifixpng.regexp = {
        bg: /^url\(["']?(.*\.png([?].*)?)["']?\)$/i,
        img: /.*\.png([?].*)?$/i
    },

    $.ifixpng.getPixel = function() {
        return $.ifixpng.pixel || '/images/pixel.gif';
    };

    var hack = {
        base    : $('base').attr('href'),
        ltie7   : $.browser.msie && $.browser.version < 7,
        filter  : function(src) {
            return "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,sizingMethod=crop,src='"+src+"')";
        }
    };

    /**
     * Applies ie png hack to selected dom elements
     *
     * $('img[@src$=.png]').ifixpng();
     * @desc apply hack to all images with png extensions
     *
     * $('#panel, img[@src$=.png]').ifixpng();
     * @desc apply hack to element #panel and all images with png extensions
     *
     * @name ifixpng
     */

    $.fn.ifixpng = hack.ltie7 ? function() {
        function fixImage(image, source, width, height, hidden) {
            image.css({filter:hack.filter(source), width: width, height: height})
              .attr({src:$.ifixpng.getPixel()})
              .positionFix();
        }

        return this.each(function() {
            var $$ = $(this);
            if (($$.is('img') && (this.src.match($.ifixpng.regexp.img) || $$.hasClass('ifixpng'))) || $$.is('input')) { // hack image tags present in dom
                var source, img;
                if (this.src) { // make sure it is png image
                    // use source tag value if set
                    source = (hack.base && this.src.substring(0,1)!='/' && this.src.indexOf(hack.base) === -1) ? hack.base + this.src : this.src;
                    // If the width is not set, we have a problem; the image is not probably visible or not loaded
                    // and we need a work around.
                    if (!this.width || !this.height) {
                        $(new Image()).one('load', function() {
                            fixImage($$, source, this.width, this.height);
                            $(this).remove();
                        }).attr('src', source);
                    // If the image already has dimensions (it's loaded and visible) we can fix it straight away.
                    } else fixImage($$, source, this.width, this.height);
                }
            } else if (this.style) { // hack png css properties present inside css
                var imageSrc = $$.css('backgroundImage');
                // Background repeated images we cannot fix unfortunately
                if (imageSrc && imageSrc.match($.ifixpng.regexp.bg) && this.currentStyle.backgroundRepeat == 'no-repeat') {
                    imageSrc = RegExp.$1;
                    var x = this.currentStyle.backgroundPositionX || 0, y = this.currentStyle.backgroundPositionY || 0;
                    if (x || y) {
                        var css = {}, img;
                        if (typeof x != 'undefined') {
                            if (x == 'left') css.left = 0;
                            // if right is 0, we have to check if the parent has an odd width, because of an IE bug
                            else if (x == 'right') css.right = $$.width() % 2 === 1 ? -1 : 0;
                            else css.left = x;
                        }
                        if (typeof y != 'undefined') {
                            // if bottom is 0, we have to check if the parent has an odd height, because of an IE bug
                            if (y == 'bottom') css.bottom = $$.height() % 2 === 1 ? -1 : 0;
                            else if (y == 'top') css.top = 0;
                            else css.top = y;
                        }
                        img = new Image();
                        $(img).one('load', function() {
                            var x,y, expr = {}, prop;
                            // Now the image is loaded for sure, we can see if the background position needs fixing with an expression (in case of percentages)
                            if (/center|%/.test(css.top)) {
                                expr.top = "(this.parentNode.offsetHeight - this.offsetHeight) * " + (css.top == 'center' ? 0.5 : (parseInt(css.top) / 100));
                                delete css.top;
                            }
                            if (/center|%/.test(css.left)) {
                                expr.left = "(this.parentNode.offsetWidth - this.offsetWidth) * " + (css.left == 'center' ? 0.5 : (parseInt(css.left) / 100));
                                delete css.left;
                            }
                            // Let's add the helper DIV which will simulate the background image
                            $$.positionFix().css({backgroundImage: 'none'}).prepend(
                                $('<div></div>').css(css).css({
                                    width: this.width,
                                    height: this.height,
                                    position: 'absolute',
                                    filter: hack.filter(imageSrc)
                                })
                            );
                            if (expr.top || expr.left) {
                                var elem = $$.children(':first')[0];
                                for (prop in expr) elem.style.setExpression(prop, expr[prop], 'JavaScript');
                            }
                            $(this).remove();
                        });
                        img.src = imageSrc;
                    } else {
                        $$.css({backgroundImage: 'none', filter:hack.filter(imageSrc)});
                    }
                }
            }
        });
    } : function() { return this; };

    /**
     * positions selected item relatively
     */
    $.fn.positionFix = function() {
        return this.each(function() {
            var $$ = $(this);
            if ($$.css('position') != 'absolute') $$.css({position:'relative'});
        });
    };

})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:83:"/ispring_bitrix/content/js/classes/FloatSidebarProductsPage.class.js?14609969945077";s:6:"source";s:68:"/ispring_bitrix/content/js/classes/FloatSidebarProductsPage.class.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var FloatSidebarProductsPage = Base.extend({

    SCROLL_DURATION: 500,
    PORTRAIT_ORIENTATION_1: 0,
    PORTRAIT_ORIENTATION_2: 180,
    MAX_WIDTH_IPHONE: 1023,
    AFFIX_CLASS: 'affix',
    SIDEBAR_CLASS: 'navigation_block',
    ACTIVE_CLASS: 'active',

    _viewport: null,
    windowWidth: false,

    /**
     *
     * @param offset - scroll offset to top block border
     * @param offsetBtm - limit to scroll at the page bottom
     * @param topOffset - top border to appear axis (relative to top menu)
     * @param scrollOffset - scroll spy offset, should be more than offset
     */
    constructor: function(offset, offsetBtm, topOffset, scrollOffset)
    {
        this._viewport = $('body,html');
        this.navigitionBlock = $('.' + this.SIDEBAR_CLASS);

        this.serviceMenu = $('.service_menu');
        this.indexTopMenu = $('.index_top_menu_wrapper');
        this.breadcrumbsContainer = $('.breadcrumbs_container');
        this.topMenuWrapper = $('.top_menu_wrapper');
        this.floatMenu = $('.top_menu_content');
        this.topBlock = $('#topBlock');
        this.footer = $('.footer');
        this.windowWidth = ($(window).width() <= this.MAX_WIDTH_IPHONE);

        this._addScrollHandler(offsetBtm, topOffset, scrollOffset);
        this._addSmoothScroll(offset);
        this._addStopAnimate();
    },

    _addStopAnimate: function()
    {
        $('body, html').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup', function(e){
            if ( e.which > 0 || e.type == "mousedown" ) {
                $("html,body").stop(true, false);
            }
        })
    },

    _addScrollHandler: function(offsetBtm, topOffset, scrollOffset)
    {
        var thisPtr = this;
        var serviceMenuHeight = (this.serviceMenu != null) ? this.serviceMenu.outerHeight(true) : 0;
        var indexTopMenuHeight = (this.indexTopMenu != null) ? this.indexTopMenu.outerHeight(true) : 0;
        var breadcrumbsContainerHeight = (this.breadcrumbsContainer != null) ? this.breadcrumbsContainer.outerHeight(true) : 0;
        var topMenuWrapperHeight = (this.topMenuWrapper != null) ? this.topMenuWrapper.outerHeight(true) : 0;
        var topBlockHeight = (this.topBlock != null) ? this.topBlock.outerHeight(true) - topOffset: 0;
        var footerHeight = (this.footer != null) ? this.footer.outerHeight(true) : 0;
        var topAdditionalOffset = 40;

        this.navigitionBlock.affix({
            offset: {
                top: function () {
                    return (this.top = serviceMenuHeight + indexTopMenuHeight + breadcrumbsContainerHeight + topMenuWrapperHeight + topBlockHeight)
                },
                bottom: function () {
                    return (this.bottom = footerHeight + offsetBtm + topAdditionalOffset)
                }
            }
        });

        $('body').scrollspy({target: '.' + this.SIDEBAR_CLASS, offset: scrollOffset});
    },

    _addSmoothScroll: function(offset)
    {
        var thisPtr = this;
        $('a[href*=#]:not([href=#])').on('click', function()
        {
            var linkPtr = $(this);
            var target = $(this.hash);
            $('body').addClass('scroll_on_click');
            $('.nav').find('li a.selected').removeClass('selected');
            linkPtr.addClass('selected');
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                var offsetTop = (thisPtr._firstItemClick(target) && !thisPtr.windowWidth) ? 0 : target.offset().top - offset;
                $('html,body').animate({
                    scrollTop: (thisPtr.windowWidth ? (offsetTop - thisPtr._fixSidebarWithFloatMenu(target)) : (offsetTop + thisPtr._fixSidebarWithFloatMenu(target)))
                }, thisPtr.SCROLL_DURATION,
                function(){
                    $('.nav').find('li a.selected').removeClass('selected');
                    $('body').removeClass('scroll_on_click');
                });
                return false;
            }
        });
    },

    _firstItemClick: function(target)
    {
        var firstItemHash = $('.bs-docs-sidenav').find('li:first-child a').prop('hash');
        var firstItemSubmenuHash = $('.bs-docs-sidenav').find('li.second_submenu').first().find('a').prop('hash');
        var firstItemClick = firstItemHash && firstItemHash.indexOf(target.attr('id')) != -1 || (firstItemSubmenuHash && firstItemSubmenuHash.indexOf(target.attr('id')) != -1);
        return firstItemClick;
    },

    _fixSidebarWithFloatMenu: function(target)
    {
        var thisPtr = this;
        var top = $(window).scrollTop();
        var distance = (thisPtr.topMenuWrapper.length) ? thisPtr.topMenuWrapper.offset().top - top : 0;
        var floatMenuHeight = (thisPtr.floatMenu.length && ((distance < 0 && !thisPtr._firstItemClick(target)) || thisPtr.windowWidth)) ? thisPtr.floatMenu.outerHeight(true) : 0;
        return floatMenuHeight;
    }
});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:49:"/ispring_bitrix/content/js/demos.js?1456823604445";s:6:"source";s:35:"/ispring_bitrix/content/js/demos.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){
    var offset = 50;
    var btmOffset = 0;
    var topOffset = -207;
    var scrollOffset = 90;
    if ($(".sidebar-menu").is("div"))
    {
        new FloatSidebarProductsPage(offset, btmOffset, topOffset, scrollOffset);
    }
    $("img").each(function(){
        $(this).bind("load", function(){
            $(this).next(".demo_hover_state").addClass("active_hover_state");
        });
    });
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:78:"/ispring_bitrix/content/js/classes/FloatNavigationMenu.class.js?14435114762174";s:6:"source";s:63:"/ispring_bitrix/content/js/classes/FloatNavigationMenu.class.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var NavigationFloatMenu = Base.extend({
    SHIFT_TIMEOUT: 5000,
    QUICK_SHIFT: 200,
    SLOW_SHIFT: 300,

    _menu: null,
    _shiftingBtn: null,
    _once: true,
    _productIcon: null,

    constructor: function()
    {
        this._menu = $('#topMenuContent');
        this._productIcon = $('#productIcon');
        this._menuWrapper = $('#topMenuWrapper');
        this._shiftingBtn = $('#nav_get_started .top_block_tab_link');
        if (this._menuWrapper != null)
        {
            this._scrollingContent($(window).scrollTop(), this);
            this._scrolling();
        }
    },

    _scrolling: function()
    {
        var thisPtr = this;
        $(window).scroll(function(){
            var top = $(this).scrollTop();
            thisPtr._scrollingContent(top, thisPtr);
        });
    },

    _scrollingContent: function(top, thisPtr)
    {
        var distance = thisPtr._menuWrapper.offset().top - top;
        if (distance < 0)
        {
            thisPtr._menu.addClass('start_scroll');
            if (thisPtr._productIcon != null)
            {
                thisPtr._productIcon.addClass('show_icon');
                thisPtr._productIcon.attr('src', thisPtr._productIcon.attr('data-original'));
            }

            if ((thisPtr._once && thisPtr._shiftingBtn.length > 0))
            {
                thisPtr._shifting(thisPtr.SHIFT_TIMEOUT);
                thisPtr._shifting(thisPtr.SHIFT_TIMEOUT * 3);
                thisPtr._once = false;
            }
        }
        else
        {
            thisPtr._menu.removeClass('start_scroll');
            if (thisPtr._productIcon != null)
            {
                thisPtr._productIcon.removeClass('show_icon');
            }
        }
    },

    _shifting: function(time)
    {
        var thisPtr = this;
        setTimeout(function(){
            thisPtr._shiftingBtn.animate({ "left": "+=20" }, thisPtr.SLOW_SHIFT );
            thisPtr._shiftingBtn.animate({ "left": "-=20" }, thisPtr.SLOW_SHIFT );
        }, time);
    }
});

$(document).ready(function(){
    new NavigationFloatMenu();
});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:78:"/ispring_bitrix/content/js/classes/ArrowNavigationMenu.class.js?14526930245682";s:6:"source";s:63:"/ispring_bitrix/content/js/classes/ArrowNavigationMenu.class.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var ArrowNavigationMenu = Base.extend(
{
    ARROW_DOWN_CLASS: 'down',
    ARROW_UP_CLASS: 'up',
    MENU_ITEM_HEIGHT: 52,
    _arrowButton: null,
    _grayLayer: null,
    _menu: null,
    _menuWrapper: null,
    _mainMenuWrapper: null,
    _mainMenuButton: null,
    _menuList: null,
    _startMove: 0,

    constructor: function()
    {
        this._arrowButton = $('.menu_arrow_button');
        this._grayLayer = $('#grayLayerSub');
        this._menu = $('#responsiveTopMenuContent');
        this._menuWrapper = $('#responsiveTopMenuWrapper');
        this._mainMenuButton = $(".main_menu_button");
        this._mainMenuWrapper = $(".index_top_menu_wrapper");
        this._menuList = $(".product_menu");

        this._arrowButton.addClass(this.ARROW_DOWN_CLASS);
        this._arrowButton.on('click', handler(this, '_changeMenuState'));

        this._grayLayer.hide();
        this._grayLayer.on('click', handler(this, '_hideMenu'));
        this._grayLayer.on('scroll', handler(this, '_hideMenu'));
        this._grayLayer.on('touchstart', handler(this, '_hideMenu'));
        this._grayLayer.on('touchmove', handler(this, '_hideMenu'));
        this._grayLayer.on('scrollstart', handler(this, '_hideMenu'));
        this._grayLayer.on('wheel', handler(this, '_hideMenu'));

        this._mainMenuButton.on('click', handler(this, '_hideMenu'));

        this._menuList.on('shown.bs.collapse', handler(this, '_scrollToTopMenu'));
        this._menuList.on('hide.bs.collapse', handler(this, '_scrollToTopMenu'));

        this._menuList.on('touchmove', handler(this, '_movingMenu'));
        this._menuList.on('touchstart', handler(this, '_setIsMovingMenu'));
        var thatPtr = this;
        this._menuList.on('scroll', function(e){
            thatPtr._setIsScrollingMenu(e);
        });
        this._menuList.on('wheel', function(e){
            thatPtr._setIsScrollingMenu(e);
        });

        $( window ).on('scroll', handler(this, '_setIsScrollingWindow'));
        $( window ).on('wheel', handler(this, '_setIsScrollingWindow'));
        $( window ).on('scrollstart', handler(this, '_setIsScrollingWindow'));
        $( window ).on('touchstart', handler(this, '_setIsScrollingWindow'));
        $( window ).on('touchmove', handler(this, '_setIsScrollingWindow'));

        this._scrollingContent($(window).scrollTop());
        $( window ).on('resize', handler(this, '_changeVisibleMenu'));

        this._arrowButton.dblclick(handler(this, '_changeMenuState'));
    },

    _scrollingContent: function(top)
    {
        var distance = this._menuWrapper.offset().top - top;
        if (distance < 0)
        {
            this._menu.addClass('start_scroll');
        }
        else
        {
            this._menu.removeClass('start_scroll');
        }
        this._changeVisibleMenu();
    },

    _setIsScrollingMenu: function(event)
    {
        if (this._menu.find($(event.target)))
        {
            var area = document.getElementsByClassName("product_menu")[0];

            var delta = event.originalEvent.deltaY || event.originalEvent.detail || event.originalEvent.wheelDelta;

            if ((delta < 0 && area.scrollTop == 0) || (delta > 0 && area.scrollHeight - area.clientHeight - area.scrollTop <= 1))
            {
                event.preventDefault();
            }
        }
        else
        {
             return false;
        }
    },

    _setIsMovingMenu: function()
    {
        this._startMove = window.event.touches[0].pageY;
    },

    _movingMenu: function()
    {
        if (this._menu.find($(window.event.target)).length > 0 ||
            this._mainMenuWrapper.find($(window.event.target)).length > 0)
        {
            {
                var area = document.getElementsByClassName("product_menu")[0];

                var delta = this._startMove - window.event.touches[0].pageY;
                if ((delta < 0 && area.scrollTop == 0)
                    || (delta > 0 && area.scrollHeight - area.clientHeight - area.scrollTop <= 1))
                {
                    window.event.preventDefault();
                }
            }
        }
        else
        {
            return false;
        }
    },

    _setIsScrollingWindow: function()
    {
        var top = $(window).scrollTop();
        this._scrollingContent(top);
    },

    _hideMenu: function()
    {
        if (this._arrowButton.hasClass(this.ARROW_UP_CLASS) )
        {
            this._arrowButton.click();
        }
    },

    _scrollToTopMenu: function()
    {
        this._menuList.scrollTop(0);
    },

    _changeMenuState: function()
    {
        if ( this._arrowButton.hasClass(this.ARROW_DOWN_CLASS))
        {
            this._arrowButton.removeClass(this.ARROW_DOWN_CLASS);
            this._arrowButton.addClass(this.ARROW_UP_CLASS);
            this._grayLayer.show();
        }
        else
        {
            this._arrowButton.removeClass(this.ARROW_UP_CLASS);
            this._arrowButton.addClass(this.ARROW_DOWN_CLASS);
            this._grayLayer.hide();
        }
    },

    _changeVisibleMenu: function()
    {
        var visibleMenuItemsNumber = Math.floor(($(window).height() - this._menu.height()) / this.MENU_ITEM_HEIGHT);
        visibleMenuItemsNumber = (this._menu.hasClass('start_scroll')) ? visibleMenuItemsNumber : visibleMenuItemsNumber - 2;
        this._menuList.css('max-height', (this.MENU_ITEM_HEIGHT * visibleMenuItemsNumber) + 'px');
    }
});

$(document).ready(function()
{
    new ArrowNavigationMenu();
});

/* End */
;; /* /ispring_bitrix/content/js/lib/jquery/jquery-1.11.3.min.js?143982423595957*/
; /* /ispring_bitrix/content/js/lib/jquery/jquery.browser-0.0.8.min.js?14398242352510*/
; /* /ispring_bitrix/content/js/lib/jquery/jquery.lazyload-1.9.3.min.js?14483500783381*/
; /* /ispring_bitrix/content/js/lib/jquery/jquery.fancybox-2.1.5.pack.js?143982423523432*/
; /* /ispring_bitrix/content/js/lib/bootstrap/bootstrap.min.js?143982423537056*/
; /* /ispring_bitrix/content/js/ping.js?1439824235433*/
; /* /ispring_bitrix/content/js/base.js?14398242354053*/
; /* /ispring_bitrix/content/js/handler.js?1439824235199*/
; /* /ispring_bitrix/content/js/lazyload.func.js?146237417863*/
; /* /ispring_bitrix/content/js/lib/fancybox.func.js?145872929542577*/
; /* /ispring_bitrix/content/js/placeholder.js?14398242351577*/
; /* /ispring_bitrix/content/js/lib/jquery/jquery.lazyscript.min.js?14527759651639*/
; /* /ispring_bitrix/content/js/utils.js?146096635227455*/
; /* /ispring_bitrix/content/js/lng/en/messages.js?146295770319353*/
; /* /ispring_bitrix/content/js/lib/jquery.validate.min.js?143982423521068*/
; /* /ispring_bitrix/content/js/classes/view/Flash.class.js?14398242359130*/
; /* /ispring_bitrix/content/js/layout/responsive/top_menu.js?14591861136240*/
; /* /ispring_bitrix/content/js/purchase_link.js?14514713852227*/
; /* /ispring_bitrix/content/js/classes/SiteConfig.class.js?1439824235433*/
; /* /ispring_bitrix/content/js/stats_utils.js?14398242354334*/
; /* /ispring_bitrix/content/js/add_to_cart_tracking.js?1451471385385*/
; /* /ispring_bitrix/content/js/footer.js?1451471385423*/
; /* /ispring_bitrix/content/js/classes/pages/SubscribeNewslettersFormNew.class.js?14514713855436*/
; /* /ispring_bitrix/content/js/classes/menu/TopMobileMenu.class.js?14526930242820*/
; /* /ispring_bitrix/content/js/classes/utils/EventDispatcher.class.js?14398242352787*/
; /* /ispring_bitrix/content/js/jquery.scrollTo-1.4.2-min.js?14398242352262*/
; /* /ispring_bitrix/content/js/jquery.ifixpng.js?14398242357464*/
; /* /ispring_bitrix/content/js/classes/FloatSidebarProductsPage.class.js?14609969945077*/
; /* /ispring_bitrix/content/js/demos.js?1456823604445*/
; /* /ispring_bitrix/content/js/classes/FloatNavigationMenu.class.js?14435114762174*/
; /* /ispring_bitrix/content/js/classes/ArrowNavigationMenu.class.js?14526930245682*/
