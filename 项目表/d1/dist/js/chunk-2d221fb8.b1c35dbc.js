(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d221fb8"],{cd56:function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"main"},[e("div",[e("router-view")],1),e("van-tabbar",{on:{change:a.toggleTabBar},model:{value:a.tabBarName,callback:function(t){a.tabBarName=t},expression:"tabBarName"}},a._l(a.tabBarData,(function(t,r){return e("van-tabbar-item",{key:r,attrs:{icon:t.icon}},[a._v(a._s(t.title))])})),1)],1)},n=[],o=(e("fb6a"),{data:function(){return{tabBarName:0,tabBarData:[{icon:"coupon-o",title:"菜单",routeName:"Menu",url:"/main/menu"},{icon:"orders-o",title:"订单",routeName:"Order",url:"/main/order"},{icon:"shopping-cart-o",title:"购物车",routeName:"Shopcart",url:"/main/shopcart"},{icon:"contact",title:"我的",routeName:"My",url:"/main/my"}]}},created:function(){for(var a=location.hash.slice(1),t=0;t<this.tabBarData.length;t++)if(this.tabBarData[t].url==a){this.tabBarName=t;break}},methods:{toggleTabBar:function(a){this.$router.push({name:this.tabBarData[a].routeName})}}}),i=o,c=e("2877"),u=Object(c["a"])(i,r,n,!1,null,"30c8bc0e",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d221fb8.b1c35dbc.js.map