(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),s=c(6),r=c(4),l=c(5),i=c(8),o=c(7),u=c(1),d=c.n(u),p=(c(13),c(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(e){Object(i.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={select:["Jam"]},e.selecetAdd=function(t){e.setState((function(e){return{select:[].concat(Object(s.a)(e.select),[t])}}))},e.clearSelect=function(){e.setState({select:[]})},e.addText=function(e){switch(e.length){case 0:return"No goods selected";case 1:return"".concat(e[0]," is selected");default:return"".concat(e.slice(0,-1).join(", ")," and ").concat(e[e.length-1]," are selected")}},e.selectRemove=function(t){e.setState((function(e){var c=e.select,n=c.indexOf(t);return c.splice(n,1),{select:c}}))},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this,t=this.state.select;return Object(p.jsx)("div",{className:"wrap",children:Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)("header",{className:"app__header",children:Object(p.jsxs)("h1",{className:"app__title",children:["Selected:"," ",this.addText(t)]})}),Object(p.jsx)("ul",{className:"app__list",children:h.map((function(c){var n=t.includes(c);return Object(p.jsxs)("div",{className:"app__main",children:[Object(p.jsx)("li",{className:"app__value",children:c},c),Object(p.jsx)("button",{type:"button",className:"button",onClick:n?function(){return e.selectRemove(c)}:function(){return e.selecetAdd(c)},children:n?"Remove":"Selecet"})]})}))}),Object(p.jsx)("button",{type:"button",className:"button-clear",onClick:this.clearSelect,children:"Clear"})]})})}}]),c}(d.a.Component),b=j;a.a.render(Object(p.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e76ef3ef.chunk.js.map