(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,t){},12:function(e,a,t){"use strict";t.r(a);var c=t(5),n=t.n(c),r=t(4),i=t(1);t(10);var l=t(2),s=t.n(l),o=t(0),j=function(e){var a=e.total,t=e.perPage,c=e.currentPage,n=e.onPageChange,r=Math.ceil(a/t),i=Array.from({length:r},(function(e,a){return a+1})),l=1===c,j=c===r;return Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:s()({"page-item":!0,disabled:l}),children:Object(o.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":l,onClick:function(){return!l&&n(c-1)},children:"\xab"})}),i.map((function(e){return Object(o.jsx)("li",{className:s()({"page-item":!0,active:e===c}),children:Object(o.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e})})})),Object(o.jsx)("li",{className:s()({"page-item":!0,disabled:j}),children:Object(o.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":j,onClick:function(){return!j&&n(c+1)},children:"\xbb"})})]})},u=function(e,a){for(var t=[],c=e;c<=a;c+=1)t.push(c);return t}(1,42).map((function(e){return"Item ".concat(e)})),d=function(){var e=Object(i.useState)(5),a=Object(r.a)(e,2),t=a[0],c=a[1],n=Object(i.useState)(1),l=Object(r.a)(n,2),s=l[0],d=l[1],h=u.length,b=(s-1)*t+1,m=Math.min(s*t,h);return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(b," - ").concat(m," of ").concat(h,")")}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:t,onChange:function(e){c(Number(e.target.value)),d(1)},children:[Object(o.jsx)("option",{value:"3",children:"3"}),Object(o.jsx)("option",{value:"5",children:"5"}),Object(o.jsx)("option",{value:"10",children:"10"}),Object(o.jsx)("option",{value:"20",children:"20"})]})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(j,{total:h,perPage:t,currentPage:s,onPageChange:function(e){return d(e)}}),Object(o.jsx)("ul",{children:u.map((function(e,a){return a>=b-1&&a<m&&Object(o.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(o.jsx)(d,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.ad1c0d33.chunk.js.map