(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{317:function(t,s,e){},368:function(t,s,e){"use strict";var a=e(317);e.n(a).a},392:function(t,s,e){"use strict";e.r(s);e(39),e(27);var a={data:function(){return{deg:6}},methods:{},watch:{},mounted:function(){var t=this;setInterval((function(){var s=new Date,e=5*s.getHours()*t.deg,a=s.getMinutes()*t.deg,n=s.getSeconds()*t.deg;t.$refs.hh.style.transform="rotateZ(".concat(e+a/12,"deg)"),t.$refs.mm.style.transform="rotateZ(".concat(a,"deg)"),t.$refs.ss.style.transform="rotateZ(".concat(n,"deg)")}),1e3)}},n=(e(368),e(3)),r=Object(n.a)(a,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"wrap",attrs:{id:"clock"}},[s("div",{staticClass:"clock"},[s("div",{ref:"hh",staticClass:"hour"}),this._v(" "),s("div",{ref:"mm",staticClass:"min"}),this._v(" "),s("div",{ref:"ss",staticClass:"sec"})])])}),[],!1,null,"730a23f4",null);s.default=r.exports}}]);