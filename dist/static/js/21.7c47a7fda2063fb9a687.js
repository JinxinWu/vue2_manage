webpackJsonp([21],{"7FUE":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Xxa5"),s=a.n(n),r=a("exGp"),o=a.n(r),l={components:{TableDataNew:a("SSws").a},data:function(){return{total:1,tableData:[],tableColumns:[{key:"zzh",name:"住院号"},{key:"ssmc",name:"手术名称"},{key:"zdys",name:"主刀医生"},{key:"shsj",name:"手术时间"},{key:"zdysgz",name:"主刀医生工资"},{key:"zdysgs",name:"主刀医生工时"},{key:"zdysfy",name:"主刀医生费用"},{key:"sqzbfy",name:"术前准备费用"},{key:"fzysfy",name:"辅助医生费用"},{key:"sssqthsfy",name:"手术室其他护士费用"}]}},created:function(){this.getPageList()},methods:{getPageList:function(){var e=this;return o()(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("http://8.130.74.65:50051/table/getSSRGFY");case 2:(a=t.sent).data?(e.tableData=a.data,e.total=a.data.length,console.log(e.tableColumns)):e.$message.error("手术信息汇总表获取失败");case 4:case"end":return t.stop()}},t,e)}))()}}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content"},[t("TableDataNew",{attrs:{mydata:this.tableData,mytotal:this.total,myshuxing:this.tableColumns}})],1)},staticRenderFns:[]};var i=a("VU/8")(l,c,!1,function(e){a("lu10")},"data-v-07aa44e7",null);t.default=i.exports},lu10:function(e,t){}});