(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e7b3e43"],{"02bc":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"empty"},[i("img",{attrs:{src:n("f3f6")}})])])}],s={name:"Empty",props:{}},o=s,r=n("9ca4"),c=Object(r["a"])(o,i,a,!1,null,null,null);e["a"]=c.exports},"09fb":function(t,e,n){"use strict";var i=n("35ea");function a(t){var e=window.getComputedStyle(t),n="none"===e.display,i=null===t.offsetParent&&"fixed"!==e.position;return n||i}var s=n("00cb"),o=n("1e97"),r=n("43c9"),c=Object(i["a"])("list"),l=c[0],d=c[1],u=c[2];e["a"]=l({mixins:[Object(o["a"])((function(t){this.scroller||(this.scroller=Object(s["b"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:[Number,String],default:300},direction:{type:String,default:"down"}},data:function(){return{innerLoading:this.loading}},updated:function(){this.innerLoading=this.loading},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.innerLoading||t.finished||t.error)){var e,n=t.$el,i=t.scroller,s=t.offset,o=t.direction;e=i.getBoundingClientRect?i.getBoundingClientRect():{top:0,bottom:i.innerHeight};var r=e.bottom-e.top;if(!r||a(n))return!1;var c=!1,l=t.$refs.placeholder.getBoundingClientRect();c="up"===o?e.top-l.top<=s:l.bottom-e.bottom<=s,c&&(t.innerLoading=!0,t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()},genLoading:function(){var t=this.$createElement;if(this.innerLoading&&!this.finished)return t("div",{key:"loading",class:d("loading")},[this.slots("loading")||t(r["a"],{attrs:{size:"16"}},[this.loadingText||u("loading")])])},genFinishedText:function(){var t=this.$createElement;if(this.finished){var e=this.slots("finished")||this.finishedText;if(e)return t("div",{class:d("finished-text")},[e])}},genErrorText:function(){var t=this.$createElement;if(this.error){var e=this.slots("error")||this.errorText;if(e)return t("div",{on:{click:this.clickErrorText},class:d("error-text")},[e])}}},render:function(){var t=arguments[0],e=t("div",{ref:"placeholder",key:"placeholder",class:d("placeholder")});return t("div",{class:d(),attrs:{role:"feed","aria-busy":this.innerLoading}},["down"===this.direction?this.slots():e,this.genLoading(),this.genFinishedText(),this.genErrorText(),"up"===this.direction?this.slots():e])}})},1718:function(t,e,n){},1732:function(t,e,n){"use strict";var i=n("d081"),a=n.n(i);a.a},"1f6c":function(t,e,n){"use strict";n("7c36"),n("df3f"),n("1718")},"688c":function(t,e,n){"use strict";n.r(e);var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[null==t.list?n("Loadings"):n("div",{staticClass:"container scontainer"},[n("div",{staticClass:"search-bar"},[n("van-search",{attrs:{"show-action":"",label:"查询",placeholder:"请输入搜索关键词",clearable:""},on:{search:t.searchData},scopedSlots:t._u([{key:"action",fn:function(){return[n("div",{on:{click:t.searchData}},[t._v("搜索")])]},proxy:!0}]),model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}})],1),0==t.list.length?n("Empty"):n("van-list",{staticClass:"list",attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(e,i){return n("div",{key:i,staticClass:"item"},[n("div",{staticClass:"info"},[n("div",{staticClass:"title flex-sb"},[t._v("\n            "+t._s(e.company)+"\n            "),n("span",{staticClass:"time"},[t._v("2020-9-8")])]),n("div",[t._v("合同号: "+t._s(e.cust_no))]),n("div",[t._v("客户电话: "+t._s(e.phone))]),n("div",[t._v("业务员: "+t._s(e.sname))])])])})),0)],1)],1)},s=[],o=(n("2b45"),n("9a33"),n("ce3c")),r=(n("1f6c"),n("09fb")),c=(n("b2a3"),n("43c9")),l=(n("8ef2"),n("688d")),d=(n("cc57"),n("733f"),n("d470")),u=n("e876"),h=n("02bc"),f=n("89af"),g={name:"Product",components:(i={},Object(o["a"])(i,d["a"].name,d["a"]),Object(o["a"])(i,l["a"].name,l["a"]),Object(o["a"])(i,c["a"].name,c["a"]),Object(o["a"])(i,r["a"].name,r["a"]),Object(o["a"])(i,"Empty",h["a"]),Object(o["a"])(i,"Loadings",f["a"]),i),data:function(){return{list:[{cid:"13178",name:" 黄S",company:"深圳市锦龙自动化设备有限公司",call:"",total_sum:"580",address:"深圳市宝安区石岩街道北环路华丰圳宝工业园5栋2楼东",total_order:"1",phone:"15818870229",cust_no:"A866B58409464088998F792B44A2FDA7",staff_no:"A03",create_time:"1514908800",type:null,status:"合作中客户",visiting_time:"0",visiting_date:null,sname:"付中",department:"业务部"},{cid:"12375",name:"刘韩芬（崔小姐）",company:"JAESHIN.CO",call:"",total_sum:"1420",address:"广州市白云区\n广园中路203-207号景泰西2巷2号102档（河北大厦后座）广州正鸿国际物流有限公司",total_order:"1",phone:"13825077605",cust_no:"B81B1783C7BE48759060FA667FF2EFF4",staff_no:"A03",create_time:"1537459200",type:null,status:"合作中客户",visiting_time:"0",visiting_date:null,sname:"付中",department:"业务部"}],keywords:"",page:"",loading:!1,finished:!0}},created:function(){},mounted:function(){this.cust_no=this.$route.params.type},methods:{searchData:function(){""!=this.keywords&&(this.page="")},formatDate:function(t){var e=new Date(1e3*t),n=e.getFullYear(),i=e.getMonth()+1;i=i<10?"0"+i:i;var a=e.getDate();return a=a<10?"0"+a:a,n+"-"+i+"-"+a+" "},toThousands:function(t){var e=[],n=0;t=(t||0).toString().split("");for(var i=t.length-1;i>=0;i--)n++,e.unshift(t[i]),n%3||0==i||e.unshift(",");return e.join("")},getData:function(){var t=this,e={search:this.keywords,page:this.page};-1!=this.cust_no&&(e.cust_no=this.cust_no),Object(u["q"])(e).then((function(e){""!=t.page?t.list=t.list.concat(e.data.order):t.list=e.data.order,t.finished=e.data.order.length<200,t.loading=e.data.order.length<200,200==e.data.order.length&&(t.page=t.list[t.list.length-1].oid)}))},onLoad:function(){this.getData()}}},p=g,v=(n("1732"),n("9ca4")),b=Object(v["a"])(p,a,s,!1,null,"6ddbee8a",null);e["default"]=b.exports},"688d":function(t,e,n){"use strict";var i=n("23c4"),a=n.n(i),s=n("d601"),o=n("35ea"),r=n("2a47"),c=n("f449"),l=n("721a"),d=Object(o["a"])("search"),u=d[0],h=d[1],f=d[2];function g(t,e,n,i){function o(){if(n.label||e.label)return t("div",{class:h("label")},[n.label?n.label():e.label])}function d(){if(e.showAction)return t("div",{class:h("action"),attrs:{role:"button",tabindex:"0"},on:{click:a}},[n.action?n.action():e.actionText||f("cancel")]);function a(){n.action||(Object(r["a"])(i,"input",""),Object(r["a"])(i,"cancel"))}}var u={attrs:i.data.attrs,on:Object(s["a"])({},i.listeners,{keypress:function(t){13===t.keyCode&&(Object(c["c"])(t),Object(r["a"])(i,"search",e.value)),Object(r["a"])(i,"keypress",t)}})},g=Object(r["b"])(i);return g.attrs=void 0,t("div",a()([{class:h({"show-action":e.showAction}),style:{background:e.background}},g]),[null==n.left?void 0:n.left(),t("div",{class:h("content",e.shape)},[o(),t(l["a"],a()([{attrs:{type:"search",border:!1,value:e.value,leftIcon:e.leftIcon,rightIcon:e.rightIcon,clearable:e.clearable,clearTrigger:e.clearTrigger},scopedSlots:{"left-icon":n["left-icon"],"right-icon":n["right-icon"]}},u]))]),d()])}g.props={value:String,label:String,rightIcon:String,actionText:String,background:String,showAction:Boolean,clearTrigger:String,shape:{type:String,default:"square"},clearable:{type:Boolean,default:!0},leftIcon:{type:String,default:"search"}},e["a"]=u(g)},"8ef2":function(t,e,n){"use strict";n("7c36"),n("e47e"),n("8077"),n("9a3a"),n("8866"),n("cb92")},cb92:function(t,e,n){},d081:function(t,e,n){},f3f6:function(t,e,n){t.exports=n.p+"h5/img/empty.f65bdbe1.png"}}]);
//# sourceMappingURL=chunk-1e7b3e43.810cc1fe.js.map