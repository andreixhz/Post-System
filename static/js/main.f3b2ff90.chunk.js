(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{118:function(e,t,a){},122:function(e,t,a){},145:function(e,t){},148:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),s=a.n(c),r=a(8),i=a.n(r),o=a(28),l=a(12),u=a(11),j=a(87),d=a.n(j).a.create({baseURL:"http://localhost:3333/",timeout:1e3}),b=a(23),h=a(180);a(118);var m=function(e){var t=e.socket,a=Object(c.useState)([]),s=Object(u.a)(a,2),r=s[0],i=s[1];return Object(c.useEffect)((function(){d({url:"/post",method:"get",headers:{authorization:"bearer "+localStorage.getItem("token")}}).then((function(e){"no post founded"!==e.data.code&&i(e.data.data)}))}),[]),Object(c.useEffect)((function(){t.on("post",(function(e){i([e.res.data.post].concat(Object(b.a)(r)))}))})),Object(n.jsx)("div",{children:r.map((function(e,t){return function(e){var t=e.i,a=e.author,c=e.url,s=e.desc;return Object(n.jsxs)(h.a,{className:"post",elevation:1,children:[Object(n.jsx)("h4",{children:a}),"undefined"===s?Object(n.jsx)(n.Fragment,{}):Object(n.jsx)("p",{children:s}),Object(n.jsx)("img",{src:"http://localhost:3333/image/".concat(c)}),Object(n.jsx)("div",{})]},t)}({i:t,author:e.author,url:e.image,desc:e.description})}))})},O=a(59),f=a(152),p=a(188),g=a(187),x=(a(122),a.p+"static/media/upload.bb20f2fb.svg"),v=a.p+"static/media/send.fab9d966.svg";var S=function(e){var t=e.socket,a=Object(c.useState)(),r=Object(u.a)(a,2),i=r[0],o=r[1],l=Object(c.useState)(null),j=Object(u.a)(l,2),b=j[0],m=j[1],S=Object(c.useState)(),k=Object(u.a)(S,2),z=k[0],C=k[1],N=Object(c.useState)(!1),y=Object(u.a)(N,2),w=y[0],I=y[1],F=s.a.useState({open:!1,msg:""}),D=Object(u.a)(F,2),E=D[0],U=D[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(h.a,{className:"post_image",elevation:1,children:[Object(n.jsx)("input",{accept:"image/*",id:"contained-button-file",multiple:!0,type:"file",onChange:function(e){m(e.target.files[0]),o(URL.createObjectURL(e.target.files[0]))}}),Object(n.jsx)("label",{htmlFor:"contained-button-file",children:Object(n.jsx)(f.a,{disabled:w,variant:"contained",component:"span",children:Object(n.jsx)("div",{style:{backgroundImage:"url(".concat(i,")"),backgroundSize:"cover"},className:"select_image",children:Object(n.jsx)("img",{src:x})})})}),Object(n.jsx)(p.a,{multiline:!0,rowsMax:3,inputProps:{"aria-label":"naked"},placeholder:"Decription",className:"description",value:z,onChange:function(e){return C(e.target.value)}}),Object(n.jsx)(f.a,{disabled:w,onClick:function(){return function(){if(null!==b&&void 0!==b){var e=new FormData;e.append("image",b),e.append("description",z),I(!0),d({url:"/post",method:"post",data:e,headers:{"Content-Type":"multipart/form-data; boundary=".concat(e._boundary),authorization:"bearer "+localStorage.getItem("token")}}).then((function(e){console.log(e),I(!1),C(""),o(null),m(null),U({open:!0,msg:"Image has been sended"}),t.emit("post",{res:e})}))}else U({open:!0,msg:"Please select a image"})}()},children:Object(n.jsx)("div",{className:"select_image",children:Object(n.jsx)("img",{src:v})})})]}),Object(n.jsx)(g.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:E.open,onClose:function(){return U(Object(O.a)(Object(O.a)({},E),{},{open:!1}))},message:E.msg},"topcenter")]})},k=a(89),z=a.n(k),C=a.p+"static/media/exit.8d248a94.svg";a(148);var N=function(){var e=Object(l.e)(),t=Object(c.useState)({}),a=Object(u.a)(t,2),s=a[0],r=a[1],i=Object(c.useState)(),o=Object(u.a)(i,2),j=o[0],b=o[1];function h(){localStorage.clear(),e.push("/login")}return Object(c.useEffect)((function(){localStorage.getItem("token")||e.push("/login"),d({url:"/auth/valid",method:"post",headers:{authorization:"bearer "+localStorage.getItem("token")}}).then((function(e){r(e.data)})).catch((function(){h()})),b(z()("http://localhost:3333"))}),[]),Object(n.jsxs)("div",{className:"center home",children:[Object(n.jsxs)("div",{class:"home-header",children:[Object(n.jsxs)("h1",{children:["H1, ",s.username]}),Object(n.jsx)(f.a,{onClick:function(){return h()},children:Object(n.jsx)("img",{src:C})})]}),null!=j?Object(n.jsxs)(n.Fragment,{children:[" ",Object(n.jsx)(S,{socket:j})," ",Object(n.jsx)(m,{socket:j})," "]}):Object(n.jsx)(n.Fragment,{})]})},y=a(185),w=a(184);var I=function(){var e=Object(c.useState)(),t=Object(u.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)(),i=Object(u.a)(r,2),j=i[0],b=i[1],h=Object(l.e)();return Object(n.jsx)("div",{className:"center-a enter",children:Object(n.jsxs)("div",{className:"enter-form",children:[Object(n.jsx)("h2",{children:"Login"}),Object(n.jsxs)("form",{onSubmit:function(e){d({method:"post",url:"/auth/authenticate",data:{username:a,password:j}}).then((function(e){localStorage.setItem("token",e.data.token),h.push("/")})).catch((function(){return alert("user not found")})),e.preventDefault()},children:[Object(n.jsx)(y.a,{required:!0,onChange:function(e){return s(e.target.value)},label:"Username",id:"outlined-size-small",defaultValue:"",variant:"outlined",size:"small"}),Object(n.jsx)(y.a,{required:!0,onChange:function(e){return b(e.target.value)},label:"Password",id:"outlined-size-small",defaultValue:"",type:"password",variant:"outlined",size:"small"}),Object(n.jsxs)("div",{children:[Object(n.jsx)(w.a,{type:"submit",variant:"outlined",children:"Confirm"}),Object(n.jsx)(o.b,{to:"/register",children:"Don't have account?"})]})]})]})})};var F=function(){var e=Object(c.useState)(),t=Object(u.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)(),i=Object(u.a)(r,2),j=i[0],b=i[1],h=Object(c.useState)(),m=Object(u.a)(h,2),O=m[0],f=m[1],p=Object(l.e)();return Object(n.jsx)("div",{className:"center-a enter",children:Object(n.jsxs)("div",{className:"enter-form",children:[Object(n.jsx)("h2",{children:"Register"}),Object(n.jsxs)("form",{onSubmit:function(e){d({method:"post",url:"/auth/register",data:{username:a,email:j,password:O}}).then((function(e){localStorage.setItem("token",e.data.token),p.push("/")})).catch((function(){return alert("register error")})),e.preventDefault()},children:[Object(n.jsx)(y.a,{label:"Username",id:"outlined-size-small",defaultValue:"",variant:"outlined",size:"small",onChange:function(e){return s(e.target.value)}}),Object(n.jsx)(y.a,{label:"Email",id:"outlined-size-small",defaultValue:"",type:"email",variant:"outlined",size:"small",onChange:function(e){return b(e.target.value)}}),Object(n.jsx)(y.a,{label:"Password",id:"outlined-size-small",defaultValue:"",type:"password",variant:"outlined",size:"small",onChange:function(e){return f(e.target.value)}}),Object(n.jsxs)("div",{children:[Object(n.jsx)(w.a,{type:"submit",variant:"outlined",children:"Confirm"}),Object(n.jsx)(o.b,{to:"/login",children:"have account?"})]})]})]})})};var D=function(){return Object(n.jsx)(o.a,{className:!0,children:Object(n.jsx)("div",{className:"center fd",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(l.a,{path:"/",exact:!0,component:N}),Object(n.jsx)(l.a,{path:"/login",component:I}),Object(n.jsx)(l.a,{path:"/register",component:F})]})})})};a(150);var E=function(){return Object(n.jsx)(D,{})};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.f3b2ff90.chunk.js.map