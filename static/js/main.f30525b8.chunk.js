(this["webpackJsonpreact-hookform-starter"]=this["webpackJsonpreact-hookform-starter"]||[]).push([[0],{121:function(e,a,t){},123:function(e,a,t){},124:function(e,a,t){"use strict";t.r(a);t(65);var n=t(0),l=t.n(n),r=t(62),m=t.n(r),o=(t(121),t(63)),c=(t(123),function(){var e=Object(o.a)(),a=e.register,t=e.handleSubmit,n=e.errors,r=t((function(e){var a=e.firstName,t=e.lastName,n=e.age,l=e.email;console.log(a,t,n),window.alert("firstName: ".concat(a,", lastName: ").concat(t,", age: ").concat(n,", email: ").concat(l," "))}));return l.a.createElement("form",{onSubmit:r},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"firstName"},"First Name"),l.a.createElement("input",{name:"firstName",ref:a({})})," "),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"lastName"},"Last Name"),l.a.createElement("input",{name:"lastName",ref:a({required:"Last name is required.",maxLength:{value:15,message:"Max length is 15"}})}),n.lastName&&l.a.createElement("p",null,n.lastName.message)),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"age"},"Age"),l.a.createElement("input",{name:"age",ref:a({pattern:/\d+/})}),n.age&&l.a.createElement("p",null,"Please enter number for age.")),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{name:"email",ref:a({pattern:{value:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Invalid email addres"}}),placeholder:"mailAddress1@somemail.com"}),n.email&&l.a.createElement("p",null,n.email.message)),l.a.createElement("input",{type:"submit"}))});var i=function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"react-hook-form example"),l.a.createElement(c,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,a,t){e.exports=t(124)}},[[64,1,2]]]);
//# sourceMappingURL=main.f30525b8.chunk.js.map