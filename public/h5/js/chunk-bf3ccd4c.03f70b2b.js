(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf3ccd4c"],{"02bc":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"empty"},[n("img",{attrs:{src:i("f3f6")}})])])}],s={name:"Empty",props:{}},c=s,r=i("c701"),o=Object(r["a"])(c,n,a,!1,null,null,null);e["a"]=o.exports},"2e2f":function(t,e,i){"use strict";var n=i("4c02"),a=i.n(n),s=i("b65a"),c=i("30a7"),r=i("1db3"),o=i("f117"),l=i("863f"),d=Object(c["a"])("search"),f=d[0],u=d[1],h=d[2];function g(t,e,i,n){function c(){if(i.label||e.label)return t("div",{class:u("label")},[i.label?i.label():e.label])}function d(){if(e.showAction)return t("div",{class:u("action"),attrs:{role:"button",tabindex:"0"},on:{click:a}},[i.action?i.action():e.actionText||h("cancel")]);function a(){i.action||(Object(r["a"])(n,"input",""),Object(r["a"])(n,"cancel"))}}var f={attrs:n.data.attrs,on:Object(s["a"])({},n.listeners,{keypress:function(t){13===t.keyCode&&(Object(o["c"])(t),Object(r["a"])(n,"search",e.value)),Object(r["a"])(n,"keypress",t)}})},g=Object(r["b"])(n);return g.attrs=void 0,t("div",a()([{class:u({"show-action":e.showAction}),style:{background:e.background}},g]),[null==i.left?void 0:i.left(),t("div",{class:u("content",e.shape)},[c(),t(l["a"],a()([{attrs:{type:"search",border:!1,value:e.value,leftIcon:e.leftIcon,rightIcon:e.rightIcon,clearable:e.clearable,clearTrigger:e.clearTrigger},scopedSlots:{"left-icon":i["left-icon"],"right-icon":i["right-icon"]}},f]))]),d()])}g.props={value:String,label:String,rightIcon:String,actionText:String,background:String,showAction:Boolean,clearTrigger:String,shape:{type:String,default:"square"},clearable:{type:Boolean,default:!0},leftIcon:{type:String,default:"search"}},e["a"]=f(g)},"4ba7":function(t,e,i){"use strict";i.r(e);var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"container scontainer"},[i("div",{staticClass:"search-bar"},[i("van-search",{attrs:{"show-action":"",label:"查询",placeholder:"请输入搜索关键词",clearable:""},on:{search:t.searchData},scopedSlots:t._u([{key:"action",fn:function(){return[i("div",{on:{click:t.searchData}},[t._v("搜索")])]},proxy:!0}]),model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}})],1),0==t.list.length?i("Empty"):i("van-list",{staticClass:"list",attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(e,n){return i("div",{key:n,staticClass:"item"},[i("div",{staticClass:"info"},[i("div",{staticClass:"title"},[t._v("\n            货号"+t._s(e.number)+"\n            "),i("span",{staticStyle:{"padding-left":"20px"}},[t._v("品名"+t._s(e.title))])]),i("div",{staticClass:"tips"},[t._v("型号:"+t._s(""==e.model?"暂无":e.model))]),i("div",{staticClass:"tips"},[t._v("产品属性:"+t._s(""==e.attribute?"暂无":e.attribute))]),i("div",{staticClass:"tips"},[t._v("\n            规格:"+t._s(e.standards)+"\n            "),i("span",{staticStyle:{"padding-left":"20px"}},[t._v("单位:"+t._s(e.unit))])]),i("div",{staticClass:"tips"},[t._v(t._s(e.explanfield?e.explanfield:""))])])])})),0)],1)])},s=[],c=i("28f8"),r=(i("89de"),i("7c8e")),o=(i("4d52"),i("4ab1")),l=(i("f44b"),i("2e2f")),d=(i("cc57"),i("47e3"),i("756f")),f=i("e876"),u=i("02bc"),h=i("89af"),g={name:"Product",components:(n={},Object(c["a"])(n,d["a"].name,d["a"]),Object(c["a"])(n,l["a"].name,l["a"]),Object(c["a"])(n,o["a"].name,o["a"]),Object(c["a"])(n,r["a"].name,r["a"]),Object(c["a"])(n,"Empty",u["a"]),Object(c["a"])(n,"Loadings",h["a"]),n),data:function(){return{list:[],keywords:"",page:"",loading:!1,finished:!1}},created:function(){},mounted:function(){},methods:{searchData:function(){""!=this.keywords&&(this.page="")},getData:function(){var t=this;Object(f["t"])({search:this.keywords,page:this.page,length:30}).then((function(e){""!=t.page?t.list=t.list.concat(e.data.product):t.list=e.data.product,t.finished=e.data.product.length<30,t.loading=e.data.product.length<30,30==e.data.product.length&&(t.page=t.list[t.list.length-1].pid)}))},onLoad:function(){this.getData()}}},p=g,b=(i("ba62"),i("c701")),v=Object(b["a"])(p,a,s,!1,null,"6311d82d",null);e["default"]=v.exports},"7c8e":function(t,e,i){"use strict";var n=i("30a7"),a=i("e7f1"),s=i("2172"),c=i("be75"),r=i("4ab1"),o=Object(n["a"])("list"),l=o[0],d=o[1],f=o[2];e["a"]=l({mixins:[Object(c["a"])((function(t){this.scroller||(this.scroller=Object(s["c"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:[Number,String],default:300},direction:{type:String,default:"down"}},data:function(){return{innerLoading:this.loading}},updated:function(){this.innerLoading=this.loading},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.innerLoading||t.finished||t.error)){var e,i=t.$el,n=t.scroller,s=t.offset,c=t.direction;e=n.getBoundingClientRect?n.getBoundingClientRect():{top:0,bottom:n.innerHeight};var r=e.bottom-e.top;if(!r||Object(a["a"])(i))return!1;var o=!1,l=t.$refs.placeholder.getBoundingClientRect();o="up"===c?e.top-l.top<=s:l.bottom-e.bottom<=s,o&&(t.innerLoading=!0,t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()},genLoading:function(){var t=this.$createElement;if(this.innerLoading&&!this.finished)return t("div",{key:"loading",class:d("loading")},[this.slots("loading")||t(r["a"],{attrs:{size:"16"}},[this.loadingText||f("loading")])])},genFinishedText:function(){var t=this.$createElement;if(this.finished){var e=this.slots("finished")||this.finishedText;if(e)return t("div",{class:d("finished-text")},[e])}},genErrorText:function(){var t=this.$createElement;if(this.error){var e=this.slots("error")||this.errorText;if(e)return t("div",{on:{click:this.clickErrorText},class:d("error-text")},[e])}}},render:function(){var t=arguments[0],e=t("div",{ref:"placeholder",key:"placeholder",class:d("placeholder")});return t("div",{class:d(),attrs:{role:"feed","aria-busy":this.innerLoading}},["down"===this.direction?this.slots():e,this.genLoading(),this.genFinishedText(),this.genErrorText(),"up"===this.direction?this.slots():e])}})},"89de":function(t,e,i){"use strict";i("35f8"),i("238b"),i("d73d")},ba62:function(t,e,i){"use strict";i("de52")},d73d:function(t,e,i){},de52:function(t,e,i){},e968:function(t,e,i){},f3f6:function(t,e,i){t.exports=i.p+"h5/img/empty.f65bdbe1.png"},f44b:function(t,e,i){"use strict";i("35f8"),i("f1ab"),i("0353"),i("b664"),i("8dbe"),i("e968")}}]);
//# sourceMappingURL=chunk-bf3ccd4c.03f70b2b.js.map