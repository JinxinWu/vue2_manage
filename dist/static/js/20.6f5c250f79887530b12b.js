webpackJsonp([20],{NClx:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("mvHQ"),a=r.n(o),s={name:"ele",components:{},data:function(){return{}},computed:{form:{get:function(){return this.$store.state.houseForm},set:function(e){this.$store.commit("updateHouseForm",e)}}},created:function(){},methods:{onSubmit:function(){var e=this;this.form.res=Number(this.form.zhejiu)*Number(this.form.area)/Number(this.form.areaSum),this.$axios({method:"post",url:"http://8.130.74.65:50051/money/FWZJ",headers:{"Content-Type":"application/json"},dataType:"json",data:a()({BYZJZJ:this.form.zhejiu,ZMJ:this.form.area,SSJMJ:this.form.areaSum,BYSSJFWZJZJ:this.form.res})}).then(function(t){e.$message({showClose:!0,message:"数据上传成功",type:"success"}),console.log(t.data)},function(e){console.log(e)})}}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("el-card",{attrs:{shadow:"never"}},[r("el-row",[r("el-col",{attrs:{offset:6,span:10}},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"180px"}},[r("el-form-item",{attrs:{label:"本月折旧总计"}},[r("el-input",{attrs:{placeholder:"请输入数值"},model:{value:e.form.zhejiu,callback:function(t){e.$set(e.form,"zhejiu",t)},expression:"form.zhejiu"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"总面积"}},[r("el-input",{attrs:{placeholder:"请输入数值"},model:{value:e.form.areaSum,callback:function(t){e.$set(e.form,"areaSum",t)},expression:"form.areaSum"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"手术间面积"}},[r("el-input",{attrs:{placeholder:"请输入数值"},model:{value:e.form.area,callback:function(t){e.$set(e.form,"area",t)},expression:"form.area"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"本月手术间房屋折旧总计"}},[r("el-input",{attrs:{placeholder:"等待计算",disabled:!0},model:{value:e.form.res,callback:function(t){e.$set(e.form,"res",t)},expression:"form.res"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("计算结果")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var n=r("VU/8")(s,l,!1,function(e){r("ZaMt")},"data-v-1a34e9b4",null);t.default=n.exports},ZaMt:function(e,t){}});