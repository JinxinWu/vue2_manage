webpackJsonp([17],{bhGD:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Xxa5"),s=a.n(r),n=a("exGp"),o=a.n(n),l={data:function(){return{searchForm:{current:1,size:10,name:"",sex:"",state:""},total:1,tableData:[{name:"wu",sex:1,nickname:"Star",mobile:"19999999999",state:0,stateName:"正常"}]}},created:function(){this.getPageList()},methods:{getPageList:function(){var e=this;return o()(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get(url,{params:e.searchForm});case 2:(a=t.sent).data.success?(e.tableData=a.data.data.records,e.total=a.data.data.total):e.$message.error(a.data.message);case 4:case"end":return t.stop()}},t,e)}))()},changeRadio:function(e){this.searchForm.state=e,this.getPageList()},handleSearch:function(){this.searchForm.current=1,this.getPageList()},handleClear:function(){this.$refs.searchForm.resetFields(),this.getPageList()},handleSizeChange:function(e){this.searchForm.size=e,this.searchForm.current=1,this.getPageList()},handleCurrentChange:function(e){this.searchForm.current=e,this.getPageList()},deleteUser:function(e){var t=this;this.$confirm("确认要删除该用户吗, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$axios.delete(url,{params:{id:e}}).then(function(e){e.data.success?t.$message({message:"删除成功！",type:"success"}):t.$message.error(e.data.message)})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("el-card",{attrs:{shadow:"never"}},[a("el-row",{attrs:{type:"flex",justify:"space-between"}},[a("el-form",{ref:"searchForm",staticClass:"demo-form-inline",attrs:{model:e.searchForm,size:"small",inline:""}},[a("el-form-item",{attrs:{label:"用户名称:",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入用户名称"},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name","string"==typeof t?t.trim():t)},expression:"searchForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"性别:",prop:"sex"}},[a("el-select",{attrs:{placeholder:"请选择用户性别"},model:{value:e.searchForm.sex,callback:function(t){e.$set(e.searchForm,"sex",t)},expression:"searchForm.sex"}},[a("el-option",{attrs:{label:"女",value:"0"}}),e._v(" "),a("el-option",{attrs:{label:"男",value:"1"}})],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"small"},on:{click:function(t){return e.handleSearch()}}},[e._v("查询\n          ")]),e._v(" "),a("el-button",{attrs:{size:"small",icon:"el-icon-refresh-right"},on:{click:function(t){return e.handleClear()}}},[e._v("重置")])],1)],1)],1),e._v(" "),a("el-row",{staticClass:"rowSpace"},[a("el-col",[a("div",[a("el-radio-group",{attrs:{size:"small"},on:{change:function(t){return e.changeRadio(t)}},model:{value:e.searchForm.state,callback:function(t){e.$set(e.searchForm,"state",t)},expression:"searchForm.state"}},[a("el-radio-button",{attrs:{label:""}},[e._v("全部")]),e._v(" "),a("el-radio-button",{attrs:{label:"0"}},[e._v("正常")]),e._v(" "),a("el-radio-button",{attrs:{label:"1"}},[e._v("已注销")])],1)],1)])],1),e._v(" "),a("el-table",{ref:"table",attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"sex",label:"性别","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v("\n            "+e._s(0==t.row.sex?"女":"男")+"\n          ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"nickname",label:"昵称","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"mobile",label:"手机号","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"stateName",label:"状态","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"330"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return e.deleteUser(t.row.id)}}},[e._v("删除")]),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(t){return e.$commonJs.changeView("/user/detail")}}},[e._v("详情")])]}}])})],1),e._v(" "),a("el-pagination",{staticClass:"pagination",attrs:{layout:"->,total, sizes, prev, pager, next, jumper","page-sizes":[10,20,30,40],"current-page":e.searchForm.current,"page-size":e.searchForm.size,total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var c=a("VU/8")(l,i,!1,function(e){a("p2Dx")},"data-v-3fbb4435",null);t.default=c.exports},p2Dx:function(e,t){}});