(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"0418":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrp"},[i("NavBar",{attrs:{isActive:t.isAnimFinished,leftList:[{text:t.title,url:"#"}],rightList:t.navRightList}}),i("div",{staticClass:"header ctn container",class:{finished:t.isAnimFinished},on:{click:t.headerBackTop}},[i("div",{style:{display:t.isAnimFinished?"none":"block"}},[i("div",{staticClass:"title",attrs:{id:"header-title"}},[t._v(" "+t._s(t.title)+" ")]),i("div",{staticClass:"seperator",attrs:{id:"header-seperator"}}),i("div",{staticClass:"desc",attrs:{id:"header-desc"}},[t._v(t._s(t.desc))]),i("div",{staticClass:"link-list",attrs:{id:"header-link-list"}},t._l(t.linkList,(function(t,e){return i("div",{key:e,staticClass:"link"},[i("a",{attrs:{href:t.href}},[i("img",{staticClass:"link-icon",attrs:{src:""===t.picPath?"./img/header/iconLink-"+(e+1).toString()+".png":t.picPath,alt:"linkPic"+e}})])])})),0)])])],1)},s=[],o=(i("2af1"),i("cffa")),a=i("1dac"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-bar"},[i("div",{staticClass:"cvs-ctn",class:{active:t.isActive}},[i("canvas",{staticClass:"cvs",attrs:{id:"nav-bg-cvs"}})]),i("ul",{staticClass:"link-ctn",class:{active:t.isActive}},[i("li",{staticClass:"links left"},t._l(t.leftList,(function(e,n){return i("a",{key:e.text,staticClass:"link-item",style:{"transition-delay":.2*(t.leftList.length-n-1)+"s"},attrs:{href:e.url}},[t._v(t._s(e.text))])})),0),i("li",{staticClass:"links right"},t._l(t.rightList,(function(e,n){return i("a",{key:e.text,staticClass:"link-item",style:{"transition-delay":.2*n+"s"},attrs:{href:e.url}},[t._v(t._s(e.text))])})),0)])])},l=[],c={name:"NavBar",props:{isActive:{type:Boolean,default:!0},leftList:{type:Array,default:function(){return[{text:"左侧1",url:"#"},{text:"左侧2",url:"#"}]}},rightList:{type:Array,default:function(){return[{text:"左侧1",url:"#"},{text:"左侧2",url:"#"}]}}},mounted:function(){this.setBg()},methods:{setBg:function(){var t=document.getElementById("nav-bg-cvs"),e=window.devicePixelRatio||1,i=window.innerWidth*e;t.width=i,t.height=.05*window.innerHeight},updateBg:function(){var t=document.getElementById("bg-cvs"),e=document.getElementById("nav-bg-cvs"),i=e.getContext("2d");i.drawImage(t,0,0),window.requestAnimationFrame(this.updateBg)}}},d=c,u=(i("3b58"),i("2877")),m=Object(u["a"])(d,r,l,!1,null,"427c0498",null),h=m.exports;o["a"].registerPlugin(a["a"]);var p={components:{NavBar:h},model:{props:"isAnimFinished",event:"animFinished"},name:"Header",props:{title:{type:String,default:"我是标题"},desc:{type:String,default:"我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述"},isInBlog:{type:Boolean,default:!1}},data:function(){return{isAnimFinished:!1,isScrolling:!1,animTimeOut:null,firstScrollTarget:0,navRightList:[{text:"主页",url:"/blog"},{text:"关于",url:"/blog/about"}],linkList:[{href:"https://github.com/toooot0000",picPath:"img/header/GitHub-Mark-Light-120px-plus.png"},{href:"mailto:runan.ye@outlook.com",picPath:"img/header/email3.png"}]}},beforeMount:function(){var t=document.location,e="/";"localhost"!=t.hostname&&(e="/blog/"),this.navRightList[0].url=e,this.navRightList[1].url=e+"about.html",this.isInBlog&&(this.linkList[0].picPath=(this.$isDev()?"/img/":"/blog/img/")+"header/GitHub-Mark-Light-120px-plus.png",this.linkList[1].picPath=(this.$isDev()?"/img/":"/blog/img/")+"header/email3.png")},mounted:function(){var t=this;window.addEventListener("scroll",t.scrollEvent),this.firstScrollTarget=150,this.scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;var e={trigger:".wrp",start:5,end:50,scrub:.1,onEnter:function(){t.animTimeOut&&window.clearTimeout(t.animTimeOut),t.isAnimFinished=!1,t.$isMobile()||t.forceScrollTo(t.firstScrollTarget)},onEnterBack:function(){t.animTimeOut&&window.clearTimeout(t.animTimeOut),t.isAnimFinished=!1}};o["a"].to(".header",{scrollTrigger:e,scale:.1,height:100,width:100,duration:.2,background:"white",opacity:.8,top:"3vh",borderRadius:"999rem",ease:"none",onComplete:function(){t.animTimeOut=setTimeout((function(){t.isAnimFinished=!0}),500)}}),o["a"].to(["#header-seperator","#header-desc","#header-title","#header-link-list"],{scrollTrigger:e,duration:.2,opacity:0,fontSize:"0.2rem"}),o["a"].to(".wrp",{scrollTrigger:{trigger:".wrp",start:5,end:t.firstScrollTarget-30,onEnterBack:function(){t.$isMobile()||t.forceScrollTo(0)}}})},destroyed:function(){var t=this;window.removeEventListener("scroll",t.scrollEvent)},methods:{headerBackTop:function(){this.isAnimFinished&&this.forceScrollTo(0)},scrollEvent:function(){var t=this;t.scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,t.isScrolling=!0,setTimeout((function(){t.isScrolling=!1}),300)},banMouseScroll:function(){document.addEventListener&&document.addEventListener("DOMMouseScroll",this.mouseScrollListener,!1),window.addEventListener("mousewheel",this.mouseScrollListener,{passive:!1})},unbanMouseScroll:function(){document.removeEventListener&&document.removeEventListener("DOMMouseScroll",this.mouseScrollListener,!1),window.removeEventListener("mousewheel",this.mouseScrollListener,{passive:!1})},mouseScrollListener:function(t){t=t||window.event,t.preventDefault&&t.preventDefault()},forceScrollTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:30,s=this;if(Math.abs(s.scrollTop-t)>0)var o=setInterval((function(){var a=Math.max(Math.min(Math.abs(s.scrollTop-t)/5,n),i),r=Math.sign(t-s.scrollTop);document.documentElement.scrollTop=document.body.scrollTop=s.scrollTop+a*r,Math.abs(s.scrollTop-t)<=e&&clearInterval(o)}),16)}},watch:{isAnimFinished:function(t){this.$emit("animFinished",t)}}},v=p,g=(i("680e"),Object(u["a"])(v,n,s,!1,null,"134051c2",null));e["a"]=g.exports},1605:function(t,e,i){"use strict";var n=i("2b0e"),s=function(){return"localhost"==document.location.hostname},o=function(){var t=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t},a={isDev:s,isMobile:o};n["a"].prototype.$isDev=a.isDev,n["a"].prototype.$isMobile=a.isMobile},3710:function(t,e,i){},"3b58":function(t,e,i){"use strict";i("3710")},"680e":function(t,e,i){"use strict";i("8c7b")},"8c7b":function(t,e,i){},a4d9:function(t,e,i){"use strict";i("ec2d")},ec2d:function(t,e,i){},fd2d:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("div",{staticClass:"line auther"},[t._v("Copyright ©️ 叶汝楠 Jerry Ye ")])])}],o={},a=o,r=(i("a4d9"),i("2877")),l=Object(r["a"])(a,n,s,!1,null,"1c96ffac",null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-common.2443362e.js.map