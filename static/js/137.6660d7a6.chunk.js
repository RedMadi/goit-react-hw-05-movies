"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[137],{867:function(n,t,e){e.d(t,{Df:function(){return u},ME:function(){return l},TP:function(){return s},tx:function(){return f},zv:function(){return p}});var r=e(861),o=e(757),a=e.n(o),c=e(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="6c1f11195924715b049a64034d3aea97",u=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&query=").concat(encodeURIComponent(t)));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},449:function(n,t,e){e.d(t,{Z:function(){return v}});var r,o,a,c,i,u,s,p=e(168),f=e(444),l=e(87),d=(0,f.ZP)(l.rU)(r||(r=(0,p.Z)(["\n  color: darkgreen;\n  font-size: 20px;\n  font-weight: 500;\n  text-decoration: none;\n\n  &:hover {\n    color: black;\n  }\n"]))),x=f.ZP.dt(o||(o=(0,p.Z)(["\n  margin-bottom: 8px;\n"]))),h=(f.ZP.section(a||(a=(0,p.Z)(["\n  padding-right: 50px;\n  padding-left: 50px;\n"]))),f.ZP.h2(c||(c=(0,p.Z)(["\n  margin-top: 30px;\n  margin-bottom: 30px;\n  padding-left: 5px;\n  font-size: 30px;\n  font-weight: 600;\n  text-align: center;\n  border-bottom: 2px solid #000;\n  padding-bottom: 5px;\n"]))),f.ZP.ul(i||(i=(0,p.Z)(["\n  list-style: disc;\n  color: #8a0f2c;\n"]))),f.ZP.li(u||(u=(0,p.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 15px;\n  }\n"]))),(0,f.ZP)(l.rU)(s||(s=(0,p.Z)(["\n  font-style: 20px;\n  color: #8a0f2c;\n  transition: color 200ms ease-in-out, border-bottom 200ms ease-in-out;\n\n  &:hover,\n  &:focus {\n    color: #8a0f2c;\n    border: 2px solid #8a0f2c;\n    padding: 3px;\n  }\n"]))),e(184)),v=function(n){var t=n.trendingMovies;return(0,h.jsx)("dl",{children:t.map((function(n){return(0,h.jsx)(x,{children:(0,h.jsx)(d,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})}},137:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,o,a,c,i=e(439),u=e(791),s=e(87),p=e(89),f=e(449),l=e(168),d=e(444),x=d.ZP.form(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n"]))),h=d.ZP.input(o||(o=(0,l.Z)(["\n  border: 1px solid black;\n  border-radius: 6px;\n  padding: 8px;\n  margin-right: 20px;\n  font-size: 16px;\n"]))),v=d.ZP.button(a||(a=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  width: 100px;\n  height: 36px;\n  color: white;\n  background-color: grey;\n  cursor: pointer;\n  position: relative;\n  border-radius: 4px;\n  border: 1px solid black;\n\n  &:active {\n    color: black;\n  }\n\n  &:hover: {\n    color: black;\n  }\n"]))),m=e(184),Z=function(n){var t=n.func,e=(0,u.useState)(""),r=(0,i.Z)(e,2),o=r[0],a=r[1];return(0,m.jsxs)(x,{onSubmit:function(n){n.preventDefault(),t(o)},children:[(0,m.jsx)(h,{type:"text",name:"value",autoFocus:!0,placeholder:"Enter the movie title",onChange:function(n){var t=n.target.value;a(t)}}),(0,m.jsx)(v,{type:"submit",children:"Search"})]})},g=e(867),b=d.ZP.p(c||(c=(0,l.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n"]))),k=function(){var n=(0,u.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1],o=(0,u.useState)(!1),a=(0,i.Z)(o,2),c=a[0],l=a[1],d=(0,u.useState)(!1),x=(0,i.Z)(d,2),h=x[0],v=x[1],k=(0,s.lr)(),y=(0,i.Z)(k,2),w=y[0],j=y[1],P=w.get("search");return(0,u.useEffect)((function(){null!==P&&(l(!0),(0,g.ME)(P).then((function(n){r(n),0===n.length&&v(!0)})).catch((function(n){console.log(n)})).finally((function(){l(!1)})))}),[P]),(0,m.jsxs)("main",{children:[(0,m.jsx)(Z,{func:function(n){j({search:n})}}),c&&(0,m.jsx)(p.a,{}),e&&(0,m.jsx)(f.Z,{trendingMovies:e}),h&&(0,m.jsx)(b,{children:"No movies matching search query"})]})}}}]);
//# sourceMappingURL=137.6660d7a6.chunk.js.map