webpackJsonp([17],{"92f9":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("Xxa5"),r=t.n(n),s=t("exGp"),l=t.n(s),m={components:{TableData:t("FykN").a},data:function(){return{total:1,tableData_GK:[],tableColumns_GK:[{key:"gh",name:"工号"},{key:"zgxm",name:"职工姓名"},{key:"zgxz",name:"职工性质"},{key:"zglb",name:"职工类别"},{key:"zc",name:"职称"},{key:"zw",name:"职务"},{key:"rsks",name:"人事科室"},{key:"jx",name:"绩效"},{key:"yfgz",name:"应发工资"},{key:"dwwxej",name:"单位五险二金"},{key:"rlcbhj",name:"人力成本合计"}],tableData_MZ:[],tableColumns_MZ:[{key:"gh",name:"工号"},{key:"zgxm",name:"职工姓名"},{key:"zgxz",name:"职工性质"},{key:"zglb",name:"职工类别"},{key:"zc",name:"职称"},{key:"zw",name:"职务"},{key:"rsks",name:"人事科室"},{key:"jx",name:"绩效"},{key:"yfgz",name:"应发工资"},{key:"dwwxej",name:"单位五险二金"},{key:"rlcbhj",name:"人力成本合计"}],tableData_SS:[],tableColumns_SS:[{key:"gh",name:"工号"},{key:"zgxm",name:"职工姓名"},{key:"zgxz",name:"职工性质"},{key:"zglb",name:"职工类别"},{key:"zc",name:"职称"},{key:"zw",name:"职务"},{key:"rsks",name:"人事科室"},{key:"jx",name:"绩效"},{key:"yfgz",name:"应发工资"},{key:"dwwxej",name:"单位五险二金"},{key:"rlcbhj",name:"人力成本合计"}]}},created:function(){this.getPageList_GK(),this.getPageList_MZ(),this.getPageList_SS()},methods:{getPageList_GK:function(){var e=this;return l()(r.a.mark(function a(){var t;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$axios.get("http://8.130.74.65:50051/table/getGKYSXZ");case 2:(t=a.sent).data?(e.tableData_GK=t.data,e.total=t.data.length):e.$message.error("手术信息汇总表获取失败");case 4:case"end":return a.stop()}},a,e)}))()},getPageList_MZ:function(){var e=this;return l()(r.a.mark(function a(){var t;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$axios.get("http://8.130.74.65:50051/table/getMZKXZ");case 2:(t=a.sent).data?(e.tableData_MZ=t.data,e.total=t.data.length):e.$message.error("手术信息汇总表获取失败");case 4:case"end":return a.stop()}},a,e)}))()},getPageList_SS:function(){var e=this;return l()(r.a.mark(function a(){var t;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$axios.get("http://8.130.74.65:50051/table/getSSSXZ");case 2:t=a.sent,console.log(t.data[0]),t.data?(e.tableData_SS=t.data,e.total=t.data.length):e.$message.error("手术信息汇总表获取失败");case 5:case"end":return a.stop()}},a,e)}))()}}},o={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("el-tabs",{attrs:{type:"border-card"}},[t("el-tab-pane",{attrs:{label:"骨科医生薪资表"}},[t("TableData",{attrs:{mydata:e.tableData_GK,mytotal:e.total,myshuxing:e.tableColumns_GK,urlAdd:"GKYSXZ"}})],1),e._v(" "),t("el-tab-pane",{attrs:{label:"麻醉科薪资表"}},[t("TableData",{attrs:{mydata:e.tableData_MZ,mytotal:e.total,myshuxing:e.tableColumns_MZ,urlAdd:"MZKXZ"}})],1),e._v(" "),t("el-tab-pane",{attrs:{label:"手术室薪资表"}},[t("TableData",{attrs:{mydata:e.tableData_SS,mytotal:e.total,myshuxing:e.tableColumns_SS,urlAdd:"SSSXZ"}})],1)],1)],1)},staticRenderFns:[]};var c=t("VU/8")(m,o,!1,function(e){t("bgdp")},"data-v-3f2790a5",null);a.default=c.exports},bgdp:function(e,a){}});