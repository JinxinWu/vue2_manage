webpackJsonp([12],{LI73:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Xxa5"),n=a.n(s),r=a("exGp"),c=a.n(r),o={components:{TableDataNew:a("SSws").a},data:function(){return{total:1,tableData:[{zyh:"wu",ssmc:1,ssj:"Star",ssb:666,bsfhc:0,clfyhj:100}],tableColumns:[{key:"zyh",name:"住院号"},{key:"ssmc",name:"手术名称"},{key:"ssj",name:"手术间"},{key:"ssb",name:"手术包"},{key:"bsfhc",name:"不收费耗材"},{key:"clfyhj",name:"材料费用合计"}]}},created:function(){this.getPageList()},methods:{getPageList:function(){var t=this;return c()(n.a.mark(function e(){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("http://8.130.74.65:50051/table/getCLFY");case 2:(a=e.sent).data?(t.tableData=a.data,t.tableData.forEach(function(e){e.ssj=Number(t.$store.state.bagForm.cost),e.clfyhj=Number(e.bsfhc)+Number(t.$store.state.bagForm.cost)}),t.total=a.data.length):t.$message.error("手术信息汇总表获取失败");case 4:case"end":return e.stop()}},e,t)}))()}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("TableDataNew",{attrs:{mydata:this.tableData,mytotal:this.total,myshuxing:this.tableColumns}})],1)},staticRenderFns:[]};var i=a("VU/8")(o,u,!1,function(t){a("z53/")},"data-v-55fb9d9f",null);e.default=i.exports},"z53/":function(t,e){}});