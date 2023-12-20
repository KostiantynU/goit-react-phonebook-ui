"use strict";(self.webpackChunkgoit_react_phonebook=self.webpackChunkgoit_react_phonebook||[]).push([[910],{2190:function(n,e,t){var r=t(9434),a=t(2946),i=t(3058),o=t(4226),s=t(3329);e.Z=function(){var n=(0,r.v9)(a.AD),e=(0,r.I0)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.nv,{children:"Find contacts by name"}),(0,s.jsx)(o.Vs,{onChange:function(n){return e((0,i.M6)(n.target.value.toLowerCase().trim()))},value:n,$formadd:"90%"})]})}},8641:function(n,e,t){t.d(e,{Z:function(){return z}});var r,a,i,o,s,d,c,l=t(2791),u=t(9434),m=t(3230),p=t(2946),h=t(6725),g=t(3244),f=t(9439),b=t(168),x=t(5867),v=x.ZP.li(r||(r=(0,b.Z)(["\n  position: relative;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.2rem;\n  margin: 0.2rem;\n  border: 1px solid rgb(46, 191, 145);\n  border-radius: 8px;\n\n  &:hover {\n    background-image: linear-gradient(155deg, rgba(131, 96, 195, 0.2), rgba(46, 191, 145, 0.3));\n  }\n  /* overflow: hidden;\n  &::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%) translateX(-110%) skew(-30deg);\n    width: 120%;\n    height: 120%;\n    background-image: linear-gradient(155deg, rgba(131, 96, 195, 0.2), rgba(46, 191, 145, 0.3));\n    transition: 500ms;\n    pointer-events: none;\n  }\n  &:hover::after {\n    transform: translateY(-50%) translateX(-8%) skew(-30deg);\n  } */\n"]))),y=x.ZP.span(a||(a=(0,b.Z)(["\n  font-weight: 600;\n"]))),j=(0,x.ZP)(y)(i||(i=(0,b.Z)(["\n  font-weight: 500;\n"]))),Z=t(4226),k=t(5705),C=x.ZP.form(o||(o=(0,b.Z)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n  align-items: center;\n  /* position: absolute;\n  left: 0;\n  top: -50%; */\n"]))),w=(0,x.ZP)(Z.Rj)(s||(s=(0,b.Z)(["\n  width: 300px;\n  margin: 0;\n  margin-bottom: 0;\n"]))),E=(0,x.ZP)(Z.lt).attrs((function(n){return{$padding:n.$padding||"0.3rem"}}))(d||(d=(0,b.Z)(["\n  background: rgb(131, 96, 195);\n  margin: 0;\n  padding: ",";\n  color: black;\n  &:hover {\n    background: rgb(131, 96, 195);\n  }\n"])),(function(n){return n.$padding})),A=(0,x.ZP)(E)(c||(c=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 20px;\n  height: 20px;\n  color: white;\n"]))),I=t(3329),P=function(n){var e=n.handleChangeEditOpen,t=n.userId,r=(0,u.v9)(p.a1),a=(0,u.I0)(),i=r.find((function(n){return n.id===t})),o=(0,k.TA)({initialValues:{name:i.name,number:i.number},validate:function(n){var e={};if(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/i.test(n.name)||(e.name="Invalid name"),!/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(n.number))return e},onSubmit:function(n){var i={id:t,name:n.name,number:n.number};if(r.some((function(n){return n.name.toLowerCase().includes(i.name.toLowerCase())})))return o.handleReset(),alert("".concat(i.name," is already in list!"));a((0,m.Nq)(i)),o.handleReset(),e()}});return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(h.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:{position:"absolute",left:"0",top:"-90%",width:"100%",height:"100%",display:"flex",alignItems:"center",borderRadius:"8px",background:"linear-gradient(310deg, rgb(46, 191, 145), rgb(131, 96, 195))"},children:(0,I.jsxs)(C,{onSubmit:o.handleSubmit,children:[(0,I.jsx)(w,{id:"name",name:"name",type:"text",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.name,$formadd:"300px",placeholder:"Enter new name"}),(0,I.jsx)(w,{id:"number",name:"number",type:"tel",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.number,$formadd:"300px",placeholder:"Enter new number"}),o.touched.number&&o.errors.number?(0,I.jsx)(h.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,I.jsx)(Z.Mj,{children:o.errors.number})}):null,(0,I.jsx)(E,{$padding:"5px",type:"submit",children:"Change"}),(0,I.jsx)(A,{type:"button",onClick:e,children:"X"})]})})})};var F=function(n){var e=n.name,t=n.number,r=n.id,a=(0,u.I0)(),i=(0,l.useState)(!1),o=(0,f.Z)(i,2),s=o[0],d=o[1],c=function(){d((function(n){return!n}))},h=(0,u.v9)(p.xU);return(0,I.jsxs)(v,{children:[(0,I.jsxs)(y,{children:[e," :"]})," ",(0,I.jsx)(j,{children:t}),(0,I.jsx)(Z.lt,{type:"button",onClick:c,children:"Edit"}),(0,I.jsx)(Z.lt,{type:"button",onClick:function(){return a((0,m.Mr)(r))},children:h?"Deleting":"Delete"}),s&&(0,I.jsx)(P,{handleChangeEditOpen:c,userId:r})]})};var z=function(){var n=(0,u.v9)(p.a1),e=(0,u.v9)(p.xU),t=(0,u.v9)(p.N8),r=(0,u.v9)(p.AD),a=n.filter((function(n){return n.name.toLowerCase().includes(r)})),i=(0,u.I0)();return(0,l.useEffect)((function(){i((0,m.IF)())}),[i]),(0,I.jsxs)(I.Fragment,{children:[t&&(0,I.jsx)(h.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,I.jsxs)("p",{children:["Some error hapenned: ",t]})}),e&&(0,I.jsx)(h.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,I.jsx)(g.zW,{children:"Loading contacts..."})}),!e&&(0,I.jsx)(h.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:n.length?(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(g.LZ,{children:a.map((function(n){var e=n.name,t=n.id,r=n.number;return(0,I.jsx)(F,{name:e,number:r,id:t},t)}))})}):(0,I.jsx)("p",{children:"Your list of contacts is empty!"})})]})}},3244:function(n,e,t){t.d(e,{Dx:function(){return d},LZ:function(){return c},zW:function(){return l}});var r,a,i,o=t(168),s=t(5867),d=s.ZP.h2(r||(r=(0,o.Z)(["\n  margin: 0.5rem;\n"]))),c=s.ZP.ul(a||(a=(0,o.Z)(["\n  position: relative;\n  padding: 5px;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 18px;\n  list-style: disc;\n"]))),l=s.ZP.p(i||(i=(0,o.Z)(["\n  background-image: linear-gradient(155deg, rgba(131, 96, 195, 0.2), rgba(46, 191, 145, 0.3));\n"])))},2910:function(n,e,t){t.r(e);var r=t(2190),a=t(8641),i=t(3329);e.default=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{}),(0,i.jsx)(a.Z,{})]})}},2946:function(n,e,t){t.d(e,{AD:function(){return r},N8:function(){return i},a1:function(){return a},xU:function(){return o}});var r=function(n){return n.contacts.filter},a=function(n){return n.contacts.phonebook.items},i=function(n){return n.contacts.phonebook.isError},o=function(n){return n.contacts.phonebook.selectIsLoading}}}]);
//# sourceMappingURL=910.89eed328.chunk.js.map