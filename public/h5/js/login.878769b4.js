(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"1b83":function(t,e,n){"use strict";n("35f8"),n("f1ab"),n("0353"),n("5c56")},3653:function(t,e,n){"use strict";n("593a")},4128:function(t,e,n){},"593a":function(t,e,n){},"5c56":function(t,e,n){},"5cf8":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scan"},[t._m(0),n("footer",[n("button",{on:{click:t.startRecognize}},[t._v("1.创建控件")]),n("button",{on:{click:t.startScan}},[t._v("2.开始扫描")]),n("button",{on:{click:t.cancelScan}},[t._v("3.结束扫描")]),n("button",{on:{click:t.closeScan}},[t._v("4.关闭控件")])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"bcid"}},[n("div",{staticStyle:{height:"40%"}}),n("p",{staticClass:"tip"},[t._v("...载入中...")])])}],i=(n("f548"),null),c={data:function(){return{codeUrl:""}},methods:{startRecognize:function(){var t=this;function e(e,n,a){switch(e){case plus.barcode.QR:e="QR";break;case plus.barcode.EAN13:e="EAN13";break;case plus.barcode.EAN8:e="EAN8";break;default:e="其它"+e;break}n=n.replace(/\n/g,""),t.codeUrl=n,alert(n),t.closeScan()}window.plus&&(i=new plus.barcode.Barcode("bcid"),i.onmarked=e)},startScan:function(){window.plus&&i.start()},cancelScan:function(){window.plus&&i.cancel()},closeScan:function(){window.plus&&i.close()}}},o=c,r=(n("bc4a"),n("c701")),l=Object(r["a"])(o,a,s,!1,null,null,null);e["default"]=l.exports},a075:function(t,e,n){"use strict";n("4128")},ac2a:function(t,e,n){"use strict";n.r(e);var a,s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"content"},[n("p",{staticClass:"logo"}),n("p",{staticClass:"crm"},[t._v("盛彩印刷包装MES")]),n("p",[n("van-field",{attrs:{label:"手机号码",type:"text",placeholder:"请输入手机号码"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1),n("p",[n("van-field",{attrs:{label:"密码",type:"password",placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("div",{staticClass:"submit",on:{click:t.submitLogin}},[t._v("登录")])]),n("p",{staticClass:"bottom"},[t._v("*若没有账号,请联系管理员*")])])},i=[],c=(n("f548"),n("28f8")),o=(n("35f8"),n("e1f2"),n("30a7")),r=n("a0a1"),l=n("79f6"),u=Object(o["a"])("checkbox-group"),f=u[0],h=u[1],d=f({mixins:[Object(l["b"])("vanCheckbox"),r["a"]],props:{max:[Number,String],disabled:Boolean,direction:String,iconSize:[Number,String],checkedColor:String,value:{type:Array,default:function(){return[]}}},watch:{value:function(t){this.$emit("change",t)}},methods:{toggleAll:function(t){if(!1!==t){var e=this.children;t||(e=e.filter((function(t){return!t.checked})));var n=e.map((function(t){return t.name}));this.$emit("input",n)}else this.$emit("input",[])}},render:function(){var t=arguments[0];return t("div",{class:h([this.direction])},[this.slots()])}}),p=(n("f1ab"),n("0353"),n("f6e9"),n("3aab")),b=Object(o["a"])("checkbox"),m=b[0],v=b[1],g=m({mixins:[Object(p["a"])({bem:v,role:"checkbox",parent:"vanCheckbox"})],computed:{checked:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.name):this.value},set:function(t){this.parent?this.setParentValue(t):this.$emit("input",t)}}},watch:{value:function(t){this.$emit("change",t)}},methods:{toggle:function(t){var e=this;void 0===t&&(t=!this.checked),clearTimeout(this.toggleTask),this.toggleTask=setTimeout((function(){e.checked=t}))},setParentValue:function(t){var e=this.parent,n=e.value.slice();if(t){if(e.max&&n.length>=e.max)return;-1===n.indexOf(this.name)&&(n.push(this.name),e.$emit("input",n))}else{var a=n.indexOf(this.name);-1!==a&&(n.splice(a,1),e.$emit("input",n))}}}}),k=(n("cc57"),n("1a86"),n("863f")),_=n("c24f"),x=n("c246"),w=n("ed08"),O={name:"Login",components:(a={},Object(c["a"])(a,k["a"].name,k["a"]),Object(c["a"])(a,g.name,g),Object(c["a"])(a,d.name,d),a),data:function(){return{checked:!0,account:"",password:""}},created:function(){x["a"].get("userInfo")&&x["a"].get("ntoken")&&this.$router.replace({path:"/index"})},mounted:function(){var t=x["a"].get("account_m"),e=x["a"].get("account_p");t&&e&&(e=e.replace("x19980731",""),e=e.replace("!857094/",""),this.account=t,this.password=e)},methods:{submitLogin:function(){var t=this;""==Object(w["e"])(this.account)?this.$dialog.message("请输入手机号"):""==Object(w["e"])(this.password)?this.$dialog.message("请输入密码"):Object(_["c"])({mobile:this.account,password:this.password}).then((function(e){var n=e.data;x["a"].set("ntoken",n.token),x["a"].set("userInfo",JSON.stringify(n)),t.checked&&(x["a"].set("account_m",t.account),x["a"].set("account_p","!857094/"+t.password+"x19980731")),0==n.role?t.$router.replace({path:"/dataCenter"}):t.$router.replace({path:"/index"})})).catch((function(e){t.$dialog.message(e.msg)}))}}},j=O,C=(n("3653"),n("c701")),$=Object(C["a"])(j,s,i,!1,null,"65e88f61",null);e["default"]=$.exports},bc4a:function(t,e,n){"use strict";n("d894")},bccc:function(t,e,n){"use strict";var a=n("30a7"),s=n("ea52"),i=n("756f"),c=Object(a["a"])("nav-bar"),o=c[0],r=c[1];e["a"]=o({props:{title:String,fixed:Boolean,zIndex:[Number,String],leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,border:{type:Boolean,default:!0}},data:function(){return{height:null}},mounted:function(){this.placeholder&&this.fixed&&(this.height=this.$refs.navBar.getBoundingClientRect().height)},methods:{genLeft:function(){var t=this.$createElement,e=this.slots("left");return e||[this.leftArrow&&t(i["a"],{class:r("arrow"),attrs:{name:"arrow-left"}}),this.leftText&&t("span",{class:r("text")},[this.leftText])]},genRight:function(){var t=this.$createElement,e=this.slots("right");return e||(this.rightText?t("span",{class:r("text")},[this.rightText]):void 0)},genNavBar:function(){var t,e=this.$createElement;return e("div",{ref:"navBar",style:{zIndex:this.zIndex},class:[r({fixed:this.fixed,"safe-area-inset-top":this.safeAreaInsetTop}),(t={},t[s["a"]]=this.border,t)]},[e("div",{class:r("content")},[this.hasLeft()&&e("div",{class:r("left"),on:{click:this.onClickLeft}},[this.genLeft()]),e("div",{class:[r("title"),"van-ellipsis"]},[this.slots("title")||this.title]),this.hasRight()&&e("div",{class:r("right"),on:{click:this.onClickRight}},[this.genRight()])])])},hasLeft:function(){return this.leftArrow||this.leftText||this.slots("left")},hasRight:function(){return this.rightText||this.slots("right")},onClickLeft:function(t){this.$emit("click-left",t)},onClickRight:function(t){this.$emit("click-right",t)}},render:function(){var t=arguments[0];return this.placeholder&&this.fixed?t("div",{class:r("placeholder"),style:{height:this.height+"px"}},[this.genNavBar()]):this.genNavBar()}})},c242:function(t,e,n){"use strict";n.r(e);var a,s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"content"},[n("p",{staticClass:"logo"}),n("van-cell-group",[n("van-field",{attrs:{disabled:"",label:"登录账号",placeholder:""},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}}),n("van-field",{attrs:{label:"旧密码",type:"password",placeholder:"请输入旧密码"},model:{value:t.old_pass,callback:function(e){t.old_pass=e},expression:"old_pass"}}),n("van-field",{attrs:{label:"新密码",placeholder:"请输入新密码",type:"password"},model:{value:t.user_pass,callback:function(e){t.user_pass=e},expression:"user_pass"}}),n("van-field",{attrs:{type:"password",label:"重复密码",placeholder:"请输入再次输入密码"},model:{value:t.ruser_pass,callback:function(e){t.ruser_pass=e},expression:"ruser_pass"}})],1),n("div",{staticClass:"submit",on:{click:t.submitLogin}},[t._v("确认修改")])],1)])},i=[],c=n("28f8"),o=(n("1b83"),n("bccc")),r=(n("f33c"),n("eee3")),l=(n("1a86"),n("863f")),u=(n("cc57"),n("47e3"),n("756f")),f=n("c24f"),h=(n("c246"),n("ed08")),d={name:"ChangePassword",components:(a={},Object(c["a"])(a,u["a"].name,u["a"]),Object(c["a"])(a,l["a"].name,l["a"]),Object(c["a"])(a,r["a"].name,r["a"]),Object(c["a"])(a,o["a"].name,o["a"]),a),data:function(){return{checked:!0,user_pass:"",old_pass:"",ruser_pass:"",mobile:"",show:!1}},mounted:function(){var t=this;Object(f["a"])().then((function(e){var n=e.data;t.mobile=n.user.mobile})).catch((function(t){Object(r["a"])(t.msg)}))},methods:{onClickLeft:function(){this.$router.go(-1)},submitLogin:function(){""==Object(h["e"])(this.old_pass)?Object(r["a"])("请输入旧密码"):""==Object(h["e"])(this.user_pass)?Object(r["a"])("请输入新密码"):Object(h["e"])(this.user_pass)!=Object(h["e"])(this.ruser_pass)?Object(r["a"])("两次密码不一致"):Object(f["d"])({user_nickname:this.user_nickname,old_pass:this.old_pass,user_pass:this.user_pass}).then((function(t){t.data;Object(r["a"])("修改成功"),location.reload()})).catch((function(t){Object(r["a"])(t.msg)}))}}},p=d,b=(n("f82f"),n("c701")),m=Object(b["a"])(p,s,i,!1,null,"3be19684",null);e["default"]=m.exports},c24f:function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return r}));var a=n("b775");function s(t){return a["a"].post("publics/mobileLogin",t,{login:!1})}function i(t){return a["a"].post("User/up_pws",t,{login:!0})}function c(t){return a["a"].post("User/up_user",t,{login:!0})}function o(t){return a["a"].post("User/jobday_table",t,{login:!0})}function r(){return a["a"].get("User/getUserInfo")}},d2f8:function(t,e,n){},d894:function(t,e,n){},e1f2:function(t,e,n){},e37a:function(t,e,n){"use strict";n.r(e);var a,s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{staticClass:"content"},[n("van-cell",{attrs:{title:"产量报表","is-link":"",to:"/analysis"}}),n("van-cell",{attrs:{title:"待加工订单","is-link":"",to:"/dataCenter"}}),n("van-cell",{attrs:{title:"密码修改","is-link":"",to:"/change_password"}}),n("van-cell",{attrs:{title:"资料修改","is-link":"",to:"/changeInfo"}}),n("van-cell",{attrs:{title:"安全退出","is-link":""},on:{click:t.logout}})],1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:"https://thirdwx.qlogo.cn/mmopen/vi_32/shtiammO5YRnUewhrtJobt7UU8qPYkslw0scF8e2fvznBwOhVstNRC3JpmL6x4p9NwACwnkCs9aH5gpbnL2f4ag/132",alt:""}})]),t._v("\n    YHJ\n  ")])}],c=(n("f548"),n("28f8")),o=(n("47e3"),n("756f")),r=(n("cc57"),n("e8d5"),n("0ae0")),l=n("c246"),u={name:"UserCenter",components:(a={},Object(c["a"])(a,r["a"].name,r["a"]),Object(c["a"])(a,o["a"].name,o["a"]),a),data:function(){return{data:null}},created:function(){},mounted:function(){},methods:{logout:function(){l["a"].remove("ntoken"),this.$router.replace({path:"/"})}}},f=u,h=(n("a075"),n("c701")),d=Object(h["a"])(f,s,i,!1,null,"0e220f4c",null);e["default"]=d.exports},f6e9:function(t,e,n){},f82f:function(t,e,n){"use strict";n("d2f8")}}]);
//# sourceMappingURL=login.878769b4.js.map