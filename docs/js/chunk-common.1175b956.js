(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"0418":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrp"},[i("NavBar",{attrs:{isActive:t.isAnimFinished,leftList:[{text:t.title,url:"#"}],rightList:[{text:"主页",url:"/blog"},{text:"关于",url:"/blog/about"}]}}),i("div",{staticClass:"header ctn container",class:{finished:t.isAnimFinished},on:{click:t.headerBackTop}},[i("div",{style:{display:t.isAnimFinished?"none":"block"}},[i("div",{staticClass:"title",attrs:{id:"header-title"}},[t._v(" "+t._s(t.title)+" ")]),i("div",{staticClass:"seperator",attrs:{id:"header-seperator"}}),i("div",{staticClass:"desc",attrs:{id:"header-desc"}},[t._v(t._s(t.desc))]),i("div",{staticClass:"link-list",attrs:{id:"header-link-list"}},t._l(t.linkList,(function(t,e){return i("div",{key:e,staticClass:"link"},[i("a",{attrs:{href:t.href}},[i("img",{staticClass:"link-icon",attrs:{src:""===t.picPath?"./img/header/iconLink-"+(e+1).toString()+".png":t.picPath,alt:"linkPic"+e}})])])})),0)])])],1)},s=[],r=(i("2af1"),i("cffa")),o=i("1dac"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-bar"},[i("div",{staticClass:"cvs-ctn",class:{active:t.isActive}},[i("canvas",{staticClass:"cvs",attrs:{id:"nav-bg-cvs"}})]),i("ul",{staticClass:"link-ctn",class:{active:t.isActive}},[i("li",{staticClass:"links left"},t._l(t.leftList,(function(e,n){return i("a",{key:e.text,staticClass:"link-item",style:{"transition-delay":.2*(t.leftList.length-n-1)+"s"},attrs:{href:e.url}},[t._v(t._s(e.text))])})),0),i("li",{staticClass:"links right"},t._l(t.rightList,(function(e,n){return i("a",{key:e.text,staticClass:"link-item",style:{"transition-delay":.2*n+"s"},attrs:{href:e.url}},[t._v(t._s(e.text))])})),0)])])},l=[],c={name:"NavBar",props:{isActive:{type:Boolean,default:!0},leftList:{type:Array,default:function(){return[{text:"左侧1",url:"#"},{text:"左侧2",url:"#"}]}},rightList:{type:Array,default:function(){return[{text:"左侧1",url:"#"},{text:"左侧2",url:"#"}]}}},mounted:function(){this.setBg()},methods:{setBg:function(){var t=document.getElementById("nav-bg-cvs"),e=window.devicePixelRatio||1,i=window.innerWidth*e;t.width=i,t.height=.05*window.innerHeight},updateBg:function(){var t=document.getElementById("bg-cvs"),e=document.getElementById("nav-bg-cvs"),i=e.getContext("2d");i.drawImage(t,0,0),window.requestAnimationFrame(this.updateBg)}}},d=c,u=(i("3b58"),i("2877")),h=Object(u["a"])(d,a,l,!1,null,"427c0498",null),m=h.exports;r["a"].registerPlugin(o["a"]);var f={components:{NavBar:m},model:{props:"isAnimFinished",event:"animFinished"},name:"Header",props:{title:{type:String,default:"我是标题"},desc:{type:String,default:"我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述"},linkList:{type:Array,default:function(){return[{href:"#",picPath:""},{href:"#",picPath:""},{href:"#",picPath:""}]}}},data:function(){return{isAnimFinished:!1,isScrolling:!1,animTimeOut:null,firstScrollTarget:0}},mounted:function(){var t=this;window.addEventListener("scroll",t.scrollEvent),this.firstScrollTarget=150,this.scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;var e={trigger:".wrp",start:5,end:50,scrub:.1,onEnter:function(){t.animTimeOut&&window.clearTimeout(t.animTimeOut),t.isAnimFinished=!1,t.forceScrollTo(t.firstScrollTarget)},onEnterBack:function(){t.animTimeOut&&window.clearTimeout(t.animTimeOut),t.isAnimFinished=!1}};r["a"].to(".header",{scrollTrigger:e,scale:.1,height:100,width:100,duration:.2,background:"white",opacity:.8,top:"3vh",borderRadius:"999rem",ease:"none",onComplete:function(){t.animTimeOut=setTimeout((function(){t.isAnimFinished=!0}),500)}}),r["a"].to(["#header-seperator","#header-desc","#header-title","#header-link-list"],{scrollTrigger:e,duration:.2,opacity:0,fontSize:"0.2rem"}),r["a"].to(".wrp",{scrollTrigger:{trigger:".wrp",start:5,end:t.firstScrollTarget-30,onEnterBack:function(){t.forceScrollTo(0)}}})},destroyed:function(){var t=this;window.removeEventListener("scroll",t.scrollEvent)},methods:{headerBackTop:function(){this.isAnimFinished&&this.forceScrollTo(0)},scrollEvent:function(){var t=this;t.scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,t.isScrolling=!0,setTimeout((function(){t.isScrolling=!1}),300)},banMouseScroll:function(){document.addEventListener&&document.addEventListener("DOMMouseScroll",this.mouseScrollListener,!1),window.addEventListener("mousewheel",this.mouseScrollListener,{passive:!1})},unbanMouseScroll:function(){document.removeEventListener&&document.removeEventListener("DOMMouseScroll",this.mouseScrollListener,!1),window.removeEventListener("mousewheel",this.mouseScrollListener,{passive:!1})},mouseScrollListener:function(t){t=t||window.event,t.preventDefault&&t.preventDefault()},forceScrollTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:30,s=this;if(Math.abs(s.scrollTop-t)>0)var r=setInterval((function(){var o=Math.max(Math.min(Math.abs(s.scrollTop-t)/5,n),i),a=Math.sign(t-s.scrollTop);document.documentElement.scrollTop=document.body.scrollTop=s.scrollTop+o*a,Math.abs(s.scrollTop-t)<=e&&clearInterval(r)}),16)}},watch:{isAnimFinished:function(t){this.$emit("animFinished",t)}}},v=f,p=(i("60d7"),Object(u["a"])(v,n,s,!1,null,"0f1ec3d4",null));e["a"]=p.exports},3710:function(t,e,i){},"3b58":function(t,e,i){"use strict";i("3710")},"60d7":function(t,e,i){"use strict";i("f81b")},a4d9:function(t,e,i){"use strict";i("ec2d")},ec2d:function(t,e,i){},f81b:function(t,e,i){},fd2d:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("div",{staticClass:"line auther"},[t._v("Copyright ©️ 叶汝楠 Jerry Ye ")])])}],r={},o=r,a=(i("a4d9"),i("2877")),l=Object(a["a"])(o,n,s,!1,null,"1c96ffac",null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-common.1175b956.js.map