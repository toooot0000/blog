(function(e){function t(t){for(var r,a,u=t[0],c=t[1],s=t[2],f=0,d=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={about:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="./";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;i.push([2,"chunk-vendors","chunk-common"]),n()})({"0762":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{title:"About Jerry Ye",desc:"关于Jerry Ye的一些事情。"},model:{value:e.isHeaderAnimFinished,callback:function(t){e.isHeaderAnimFinished=t},expression:"isHeaderAnimFinished"}}),e._m(0),n("Footer")],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about-content",attrs:{id:"content"}},[n("div",{staticClass:"container"},[n("div",[e._v("别看了。啥也没有")])])])}],a=n("0418"),u=n("fd2d"),c=n("cffa"),s=n("1dac"),l=n("2b27"),f=n.n(l);n("6d93");c["a"].registerPlugin(s["a"]),r["a"].use(f.a);var d={name:"PageMain",components:{Header:a["a"],Footer:u["a"]},data:function(){return{isHeaderAnimFinished:!1,isLoading:!0,blogList:[{id:1,name:"name",path:"path"}],configList:[]}},mounted:function(){c["a"].to(".about-content",{scrollTrigger:{trigger:".container",start:20,end:150,pin:!1,scrub:1},y:0,opacity:1,ease:"power1.out",stagger:.1})},methods:{}},p=d,b=(n("f726"),n("2877")),v=Object(b["a"])(p,o,i,!1,null,"3176786c",null),h=v.exports,g=n("bbd5");r["a"].config.productionTip=!1,r["a"].prototype.$isDev=g["a"].isDev,new r["a"]({render:function(e){return e(h)}}).$mount("#app")},2:function(e,t,n){e.exports=n("0762")},"21f6":function(e,t,n){},f726:function(e,t,n){"use strict";n("21f6")}});
//# sourceMappingURL=about.76ec6f8e.js.map