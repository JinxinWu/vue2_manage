webpackJsonp([8],{"1CFs":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Xxa5"),s=a.n(n),r=a("exGp"),o=a.n(r),l={components:{TableDataNew:a("SSws").a},data:function(){return{total:1,tableData:[],tableColumns:[{key:"ssj",name:"手术间"},{key:"sbzj",name:"本月该手术间设备折旧费用"},{key:"fwzj",name:"本月该手术间房屋折旧费用"},{key:"sdf",name:"本月该手术间水电费"},{key:"hj",name:"三项间接费用合计"},{key:"dwsjbzcb",name:"单位时间标准成本"}]}},created:function(){this.getPageList()},methods:{getPageList:function(){var t=this;return o()(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("http://8.130.74.65:50051/table/getGSSJDWSJBZCB");case 2:(a=e.sent).data?(t.tableData=a.data,t.total=a.data.length,console.log(t.tableColumns)):t.$message.error("手术信息汇总表获取失败");case 4:case"end":return e.stop()}},e,t)}))()}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("TableDataNew",{attrs:{mydata:this.tableData,mytotal:this.total,myshuxing:this.tableColumns}})],1)},staticRenderFns:[]};var i=a("VU/8")(l,c,!1,function(t){a("C+/R")},"data-v-db147622",null);e.default=i.exports},"C+/R":function(t,e){}});