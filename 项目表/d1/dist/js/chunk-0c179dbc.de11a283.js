(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c179dbc"],{"305b":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"secure"},[a("van-nav-bar",{attrs:{title:"安全中心","left-text":"返回","left-arrow":""},on:{"click-left":t.back}}),a("div",{staticClass:"list-box"},[a("van-cell-group",[a("van-cell",{attrs:{title:"修改密码","is-link":""},on:{click:t.openPopup}}),a("van-cell",{attrs:{title:"注销账号","is-link":""},on:{click:t.destroy}})],1)],1),a("div",{staticClass:"logout"},[a("van-button",{attrs:{round:!0,block:!0,type:"danger"},on:{click:t.logout}},[t._v("退出登录")])],1),a("van-popup",{attrs:{position:"bottom"},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[a("div",{staticClass:"v-popup"},[a("van-form",{on:{submit:t.commit}},[a("van-field",{attrs:{label:"旧密码",placeholder:"旧密码"},model:{value:t.pwds.oldPassword,callback:function(e){t.$set(t.pwds,"oldPassword",e)},expression:"pwds.oldPassword"}}),a("van-field",{attrs:{type:"text",label:"新密码",placeholder:"新密码"},model:{value:t.pwds.password,callback:function(e){t.$set(t.pwds,"password",e)},expression:"pwds.password"}}),a("div",{staticClass:"btn-box"},[a("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v("提交")])],1)],1)],1)])],1)},s=[],n=(a("6d93"),a("e3a8")),r={data:function(){return{isOpen:!1,pwds:{oldPassword:"",password:""}}},methods:{back:function(){this.$router.go(-1)},openPopup:function(){this.isOpen=!0},commit:function(){var t=this;if(n["a"].validUserForm(this.pwds)){var e=localStorage.getItem("__Tk");this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/updatePassword",data:{appkey:this.appkey,tokenString:e,password:this.pwds.password,oldPassword:this.pwds.oldPassword}}).then((function(e){t.$toast.clear(),t.isOpen=!1,"E001"==e.data.code?(localStorage.removeItem("__Tk"),t.$router.push({name:"Login"})):t.$toast(e.data.msg)})).catch((function(e){t.$toast.clear()}))}},logout:function(){localStorage.removeItem("__Tk"),this.$router.push({name:"Login"})},destroy:function(){var t=this;this.$dialog.confirm({title:"注销账号",message:"一旦注销，数据无法恢复"}).then((function(){var e=localStorage.getItem("__Tk");t.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),t.axios({method:"POST",url:"/destroyAccount",data:{appkey:t.appkey,tokenString:e}}).then((function(e){t.$toast.clear(),"G001"==e.data.code?(localStorage.removeItem("__Tk"),t.$router.push({name:"Login"})):t.$toast(e.data.msg)})).catch((function(e){t.$toast.clear()}))})).catch((function(t){}))}}},i=r,l=a("2877"),c=Object(l["a"])(i,o,s,!1,null,null,null);e["default"]=c.exports},"6d93":function(t,e,a){},e3a8:function(t,e,a){"use strict";a("a4f5");var o=a("5fa4");function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}var i=function(){function t(){s(this,t),this.validUserFormReg={nickName:{reg:/^[\u4e00-\u9fa5\w]{1,10}$/,msg:"昵称格式不正确"},phone:{reg:/^1[3-9]\d{9}$/,msg:"手机号格式不正确"},password:{reg:/^[a-zA-Z]\w{5,15}$/,msg:"密码格式不正确且以字母开头"},oldPassword:{reg:/^[a-zA-Z]\w{5,15}$/,msg:"旧密码格式不正确且以字母开头"},email:{reg:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,msg:"邮箱格式不正确"},code:{reg:/^\d{6}$/,msg:"验证格式正确"}}}return r(t,[{key:"validUserForm",value:function(t){for(var e in t)if(!this.validUserFormReg[e].reg.test(t[e]))return Object(o["a"])(this.validUserFormReg[e].msg),!1;return!0}}]),t}();e["a"]=new i}}]);
//# sourceMappingURL=chunk-0c179dbc.de11a283.js.map