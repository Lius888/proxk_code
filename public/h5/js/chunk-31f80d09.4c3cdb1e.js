(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31f80d09"],{"02bc":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"empty"},[i("img",{attrs:{src:n("f3f6")}})])])}],s={name:"Empty",props:{}},c=s,o=n("9ca4"),r=Object(o["a"])(c,i,a,!1,null,null,null);e["a"]=r.exports},"09fb":function(t,e,n){"use strict";var i=n("35ea"),a=n("9ec1"),s=n("00cb"),c=n("1e97"),o=n("43c9"),r=Object(i["a"])("list"),l=r[0],d=r[1],u=r[2];e["a"]=l({mixins:[Object(c["a"])((function(t){this.scroller||(this.scroller=Object(s["c"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:[Number,String],default:300},direction:{type:String,default:"down"}},data:function(){return{innerLoading:this.loading}},updated:function(){this.innerLoading=this.loading},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.innerLoading||t.finished||t.error)){var e,n=t.$el,i=t.scroller,s=t.offset,c=t.direction;e=i.getBoundingClientRect?i.getBoundingClientRect():{top:0,bottom:i.innerHeight};var o=e.bottom-e.top;if(!o||Object(a["a"])(n))return!1;var r=!1,l=t.$refs.placeholder.getBoundingClientRect();r="up"===c?e.top-l.top<=s:l.bottom-e.bottom<=s,r&&(t.innerLoading=!0,t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()},genLoading:function(){var t=this.$createElement;if(this.innerLoading&&!this.finished)return t("div",{key:"loading",class:d("loading")},[this.slots("loading")||t(o["a"],{attrs:{size:"16"}},[this.loadingText||u("loading")])])},genFinishedText:function(){var t=this.$createElement;if(this.finished){var e=this.slots("finished")||this.finishedText;if(e)return t("div",{class:d("finished-text")},[e])}},genErrorText:function(){var t=this.$createElement;if(this.error){var e=this.slots("error")||this.errorText;if(e)return t("div",{on:{click:this.clickErrorText},class:d("error-text")},[e])}}},render:function(){var t=arguments[0],e=t("div",{ref:"placeholder",key:"placeholder",class:d("placeholder")});return t("div",{class:d(),attrs:{role:"feed","aria-busy":this.innerLoading}},["down"===this.direction?this.slots():e,this.genLoading(),this.genFinishedText(),this.genErrorText(),"up"===this.direction?this.slots():e])}})},1718:function(t,e,n){},"1f6c":function(t,e,n){"use strict";n("7c36"),n("df3f"),n("1718")},"5e3f":function(t,e,n){"use strict";n.r(e);var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[null==t.list?n("Loadings"):n("div",{staticClass:"container scontainer"},[n("div",{staticClass:"search-bar"},[n("van-search",{attrs:{"show-action":"",label:"查询",placeholder:"请输入搜索关键词",clearable:""},on:{search:t.searchData},scopedSlots:t._u([{key:"action",fn:function(){return[n("div",{on:{click:t.searchData}},[t._v("搜索")])]},proxy:!0}]),model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}})],1),0==t.list.length?n("Empty"):n("van-list",{staticClass:"list",attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(e,i){return n("router-link",{key:i,staticClass:"item",attrs:{to:{path:"/custDetails/"+e.cust_no}}},[n("div",{staticClass:"flex-sb"},[n("div",{staticClass:"info"},[n("span",{staticClass:"company"},[t._v(t._s(e.company))]),n("div",{staticClass:"contact"},[t._v("\n              联系人:"+t._s(e.name)+"\n              "),n("span",[t._v("电话:"+t._s(""==e.phone?e.call:e.phone))])]),n("div",{staticClass:"address"},[t._v("地址:"+t._s(e.address))])]),n("van-icon",{attrs:{name:"arrow",color:"#eee"}})],1)])})),1)],1)],1)},s=[],c=n("ce3c"),o=(n("1f6c"),n("09fb")),r=(n("b2a3"),n("43c9")),l=(n("8ef2"),n("688d")),d=(n("cc57"),n("733f"),n("d470")),u=n("e876"),h=n("02bc"),f=n("89af"),g={name:"Customerdata",components:(i={},Object(c["a"])(i,d["a"].name,d["a"]),Object(c["a"])(i,l["a"].name,l["a"]),Object(c["a"])(i,r["a"].name,r["a"]),Object(c["a"])(i,o["a"].name,o["a"]),Object(c["a"])(i,"Empty",h["a"]),Object(c["a"])(i,"Loadings",f["a"]),i),data:function(){return{list:[{cid:"13178",name:" 黄S",company:"深圳市锦龙自动化设备有限公司",call:"",total_sum:"580",address:"深圳市宝安区石岩街道北环路华丰圳宝工业园5栋2楼东",total_order:"1",phone:"15813870229",cust_no:"A866B58409464088998F792B44A2FDA7",staff_no:"A03",create_time:"1514908800",type:null,status:"合作中客户",visiting_time:"0",visiting_date:null,sname:"付明中",department:"业务部"},{cid:"12375",name:"刘韩芬（崔小姐）",company:"JAESHIN.CO",call:"",total_sum:"1420",address:"广州市白云区\n广园中路203-207号景泰西2巷2号102档（河北大厦后座）广州正鸿国际物流有限公司",total_order:"1",phone:"13825006605",cust_no:"B81B1783C7BE48759060FA667FF2EFF4",staff_no:"A03",create_time:"1537459200",type:null,status:"合作中客户",visiting_time:"0",visiting_date:null,sname:"付明中",department:"业务部"}],keywords:"",page:"",loading:!1,finished:!0}},created:function(){},mounted:function(){},methods:{searchData:function(){""!=this.keywords&&(this.page="")},getData:function(){var t=this;Object(u["e"])({search:this.keywords,page:this.page,length:30}).then((function(e){""!=t.page?t.list=t.list.concat(e.data.customer):t.list=e.data.customer,t.finished=e.data.customer.length<30,t.loading=e.data.customer.length<30,30==e.data.customer.length&&(t.page=t.list[t.list.length-1].cid)}))},onLoad:function(){this.getData()}}},p=g,m=(n("f96c"),n("9ca4")),b=Object(m["a"])(p,a,s,!1,null,"2256d847",null);e["default"]=b.exports},"688d":function(t,e,n){"use strict";var i=n("23c4"),a=n.n(i),s=n("d601"),c=n("35ea"),o=n("2a47"),r=n("f449"),l=n("721a"),d=Object(c["a"])("search"),u=d[0],h=d[1],f=d[2];function g(t,e,n,i){function c(){if(n.label||e.label)return t("div",{class:h("label")},[n.label?n.label():e.label])}function d(){if(e.showAction)return t("div",{class:h("action"),attrs:{role:"button",tabindex:"0"},on:{click:a}},[n.action?n.action():e.actionText||f("cancel")]);function a(){n.action||(Object(o["a"])(i,"input",""),Object(o["a"])(i,"cancel"))}}var u={attrs:i.data.attrs,on:Object(s["a"])({},i.listeners,{keypress:function(t){13===t.keyCode&&(Object(r["c"])(t),Object(o["a"])(i,"search",e.value)),Object(o["a"])(i,"keypress",t)}})},g=Object(o["b"])(i);return g.attrs=void 0,t("div",a()([{class:h({"show-action":e.showAction}),style:{background:e.background}},g]),[null==n.left?void 0:n.left(),t("div",{class:h("content",e.shape)},[c(),t(l["a"],a()([{attrs:{type:"search",border:!1,value:e.value,leftIcon:e.leftIcon,rightIcon:e.rightIcon,clearable:e.clearable,clearTrigger:e.clearTrigger},scopedSlots:{"left-icon":n["left-icon"],"right-icon":n["right-icon"]}},u]))]),d()])}g.props={value:String,label:String,rightIcon:String,actionText:String,background:String,showAction:Boolean,clearTrigger:String,shape:{type:String,default:"square"},clearable:{type:Boolean,default:!0},leftIcon:{type:String,default:"search"}},e["a"]=u(g)},"8ef2":function(t,e,n){"use strict";n("7c36"),n("e47e"),n("8077"),n("9a3a"),n("8866"),n("cb92")},"95ec":function(t,e,n){},cb92:function(t,e,n){},f3f6:function(t,e,n){t.exports=n.p+"h5/img/empty.f65bdbe1.png"},f96c:function(t,e,n){"use strict";var i=n("95ec"),a=n.n(i);a.a}}]);
//# sourceMappingURL=chunk-31f80d09.4c3cdb1e.js.map