(function(t){function e(e){for(var r,a,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-16f6c4f8":"e883d03b","chunk-1b96acd2":"d7e3db1b"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-16f6c4f8":1,"chunk-1b96acd2":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-16f6c4f8":"67b74626","chunk-1b96acd2":"fea350b3"}[t]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("8bbf"),a=n.n(r),o=(n("d3b7"),n("cebe")),i=n.n(o),s={},c=i.a.create(s);c.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=c,window.axios=c,Object.defineProperties(t.prototype,{axios:{get:function(){return c}},$axios:{get:function(){return c}}})},a.a.use(Plugin);Plugin;var u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-navigation-drawer",{attrs:{app:"",fixed:"",dark:t.$store.state.isDark},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-sheet",{staticClass:"pa-4"},[r("v-avatar",{staticClass:"mb-4",attrs:{color:"#036bd9",size:"64"}},[r("img",{attrs:{src:n("9b19")}})]),r("div",[t._v("北京环球度假村")])],1),r("NavigationList")],1),r("v-app-bar",{attrs:{app:"",dark:t.$store.state.isDark}},[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),r("v-toolbar-title",[t._v("Universal Statistic")]),r("v-spacer"),r("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{icon:"",target:"_blank"},on:{click:function(e){return t.$router.replace("/menu")}}},n),[r("v-icon",[t._v("mdi-home")])],1)]}}])},[r("span",[t._v("回到首页")])]),r("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{icon:"",target:"_blank"},on:{click:function(e){return t.$store.commit("tapTheme")}}},n),[r("v-icon",[t._v(t._s(t.$store.state.isDark?"mdi-weather-night":"mdi-white-balance-sunny"))])],1)]}}])},[r("span",[t._v(t._s(t.$store.state.isDark?"关闭da♂rk模式":"开启da♂rk模式"))])])],1),r("v-main",[r("div",{staticClass:"main-container",class:{dark:t.$store.state.isDark}},[r("router-view",{attrs:{drawer:t.drawer}})],1)]),r("v-footer",{attrs:{app:"",dark:t.$store.state.isDark}},[t._v(" copyright ")])],1)},l=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{attrs:{dense:"",nav:""}},[n("v-list-item-group",{attrs:{value:t.selectedItem,mandatory:""}},t._l(t.itemList,(function(e,r){return n("v-list-item",{key:r,attrs:{link:""},on:{click:function(n){return t.clickItem(e)}}},[n("v-list-item-avatar",[n("v-img",{attrs:{src:"http://flanb.msharebox.com:6661/url?url="+e.map_image}})],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:t._s(e.title)}}),n("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.subtitle)}})],1)],1)})),1)],1)},f=[],p=n("5530"),m=(n("c740"),n("ac1f"),n("5319"),n("5880")),h=n.n(m),v={name:"NavigationList",data:function(){return{selectedItem:0}},beforeMount:function(){var t=this;this.selectedItem=this.itemList.findIndex((function(e){var n;return e.id==(null===(n=t.$route.params)||void 0===n?void 0:n.itemId)}))},methods:{clickItem:function(t){this.$route.path!="/item/".concat(t.id)&&this.$router.replace("/item/".concat(t.id))}},computed:Object(p["a"])({},Object(m["mapState"])(["itemList"])),watch:{$route:function(){var t=this;this.selectedItem=this.itemList.findIndex((function(e){var n;return e.id==(null===(n=t.$route.params)||void 0===n?void 0:n.itemId)}))}}},b=v,g=n("2877"),w=Object(g["a"])(b,d,f,!1,null,"3e3b99ea",null),k=w.exports,y={name:"App",data:function(){return{drawer:!1}},components:{NavigationList:k},mounted:function(){this.$store.dispatch("fetchNowList")},watch:{drawer:function(t){t?sessionStorage.setItem("openDrawer",!0):sessionStorage.removeItem("openDrawer")}}},_=y,x=(n("5c0b"),Object(g["a"])(_,u,l,!1,null,null,null)),$=x.exports,T=(n("3ca3"),n("ddb0"),n("6389")),j=n.n(T),A=j.a.prototype.replace;j.a.prototype.replace=function(t){return A.call(this,t).catch((function(t){return t}))},a.a.use(j.a);var C=[{path:"/",name:"App",redirect:"/menu"},{path:"/menu",name:"menu",component:function(){return n.e("chunk-1b96acd2").then(n.bind(null,"9a0b"))}},{path:"/item/:itemId",name:"item",component:function(){return n.e("chunk-16f6c4f8").then(n.bind(null,"3167"))}}],P=new j.a({mode:"hash",base:"",routes:C}),O=P,I=n("0e44");a.a.use(h.a);var L=new h.a.Store({state:{isDark:!0,itemList:[],itemUpdateTime:0,pendingItems:!1,stackedChart:!1,renderChart:0},mutations:{tapTheme:function(t){t.isDark=!t.isDark},setStackedChart:function(t,e){e!=t.stackedChart&&(t.stackedChart=e)},attachRenderData:function(t){t.renderChart=Date.now()}},actions:{fetchNowList:function(t){t.commit;var e=t.state;e.pendingItems=!0,window.axios.get("http://flanb.msharebox.com:6660/list").then((function(t){var n,r,a;e.pendingItems=!1,null!==(n=t.data)&&void 0!==n&&null!==(r=n.data)&&void 0!==r&&null!==(a=r.list)&&void 0!==a&&a.length?(e.itemList=t.data.data.list,e.itemUpdateTime=t.data.ts):$toast("读取数据错误",1500,e.isDark?"light-theme":"")})).catch((function(t){e.pendingItems=!1}))}},modules:{},plugins:[Object(I["a"])()]}),D=n("a2c9"),S=n.n(D);a.a.use(S.a);var E={theme:{options:{customProperties:!0},themes:{light:{primary:"#007BFF",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}},F=new S.a(E),N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["toast-container",t.showToast?"show":"",t.toastActive?"active":""]},[n("div",{class:["toast-main",t.theme?t.theme:""]},t._l(t.msg.split("\n"),(function(e){return n("p",[t._v(t._s(e))])})),0)])},M=[],B=(n("159b"),{name:"toast",data:function(){return{showToast:!1,toastActive:!1,timerArr:[]}},beforeDestroy:function(){this.timerArr.forEach((function(t){clearTimeout(t)}))},methods:{show:function(){var t=this;this.toastActive=!1,this.timerArr.forEach((function(t){clearTimeout(t)})),this.showToast=!0,this.timerArr[0]=setTimeout((function(){t.toastActive=!0}),10),this.timerArr[1]=setTimeout((function(){t.toastActive=!1}),this.duration),this.timerArr[2]=setTimeout((function(){t.showToast=!1}),this.duration+300)}},props:{msg:{default:"toast"},duration:{default:1500},theme:{default:null}}}),V=B,U=(n("ba1a"),Object(g["a"])(V,N,M,!1,null,"de91d148",null)),q=U.exports,H={install:function(t,e){var n=t.extend(q),r=new n,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;r.$mount(document.createElement("div")),document.body.appendChild(r.$el),r.msg=t,r.duration=e,r.theme=n,r.show()};t.prototype.$toast=a,window.$toast=a}},J=H;a.a.config.productionTip=!1,a.a.use(J),new a.a({router:O,store:L,vuetify:F,render:function(t){return t($)}}).$mount("#app")},5880:function(t,e){t.exports=Vuex},"5c0b":function(t,e,n){"use strict";n("9c0c")},"62c4":function(t,e){t.exports=VueChartJs},6389:function(t,e){t.exports=VueRouter},"8bbf":function(t,e){t.exports=Vue},"9b19":function(t,e,n){t.exports=n.p+"img/logo.64bdfaa6.svg"},"9c0c":function(t,e,n){},a2c9:function(t,e){t.exports=Vuetify},a86b:function(t,e,n){},ba1a:function(t,e,n){"use strict";n("a86b")},cebe:function(t,e){t.exports=axios}});
//# sourceMappingURL=app.aafdc44b.js.map