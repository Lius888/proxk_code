(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3facb574"],{"02bc":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"empty"},[e("img",{attrs:{src:s("f3f6")}})])])}],c={name:"Empty",props:{}},i=c,o=s("c701"),r=Object(o["a"])(i,e,n,!1,null,null,null);a["a"]=r.exports},2417:function(t,a,s){},"3be4":function(t,a,s){"use strict";s("2417")},8021:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[null==t.data?s("Loadings"):t._e(),null!=t.data?s("div",{staticClass:"container containerp"},[s("section",{staticClass:"sales-data"},[s("div",{staticClass:"caption flex-fs"},[s("div",[s("p",{staticClass:"name"},[t._v(t._s(t.data.customer.company))]),s("p",{staticClass:"contact"},[t._v(t._s(t.data.customer.name)+" "+t._s(t.data.customer.phone))]),s("p",{staticClass:"address"},[t._v(t._s(t.data.customer.address))])])]),s("div",{staticClass:"flex-sa"},[s("router-link",{attrs:{to:{path:"/ordercheck/"+t.cust_no}}},[s("div",{staticClass:"value"},[t._v(t._s(t.toThousands(t.data.customer.total_sum)))]),s("div",{staticClass:"title"},[t._v("销售总额")])]),s("router-link",{attrs:{to:{path:"/ordercheck/"+t.cust_no}}},[s("div",{staticClass:"value"},[t._v(t._s(t.data.customer.total_order))]),s("div",{staticClass:"title"},[t._v("订单笔数")])])],1)]),s("section",{staticClass:"customer-analysis"},[s("div",{staticClass:"caption flex-sb"},[t._v("\n        客户拜访记录\n        "),s("router-link",{staticClass:"add",attrs:{to:{path:"/nodes/"+t.cust_no}}},[t._v("+添加记录")])],1),null!=t.data&&0==t.data.customer_log.length?s("Empty"):s("div",{staticClass:"list"},t._l(t.data.customer_log,(function(a,e){return s("div",{key:e,staticClass:"item"},[s("div",{staticClass:"text-content"},[t._v(t._s(a.content))]),s("div",{staticClass:"flex-sa bottom"},[s("span",[t._v(t._s(t.formatDate(a.start_time)))])])])})),0)],1)]):t._e()],1)},n=[],c=(s("2b45"),s("9a33"),s("28f8")),i=(s("cc57"),s("47e3"),s("756f")),o=s("e876"),r=s("02bc"),l=s("89af"),u={name:"CustDetails",components:Object(c["a"])({Empty:r["a"],Loadings:l["a"]},i["a"].name,i["a"]),data:function(){return{data:null,cust_no:""}},created:function(){var t=this;this.cust_no=this.$route.params.type,Object(o["g"])({cust_no:this.$route.params.type}).then((function(a){t.data=a.data}))},mounted:function(){},methods:{toThousands:function(t){var a=[],s=0;t=(t||0).toString().split("");for(var e=t.length-1;e>=0;e--)s++,a.unshift(t[e]),s%3||0==e||a.unshift(",");return a.join("")},formatDate:function(t){var a=new Date(1e3*t),s=a.getFullYear(),e=a.getMonth()+1;e=e<10?"0"+e:e;var n=a.getDate();return n=n<10?"0"+n:n,s+"-"+e+"-"+n+" "}}},d=u,_=(s("3be4"),s("c701")),f=Object(_["a"])(d,e,n,!1,null,"74e5fec0",null);a["default"]=f.exports},f3f6:function(t,a,s){t.exports=s.p+"h5/img/empty.f65bdbe1.png"}}]);
//# sourceMappingURL=chunk-3facb574.bcc4540b.js.map