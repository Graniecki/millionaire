(this.webpackJsonpmillionaire=this.webpackJsonpmillionaire||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"id":12,"money":"1,000,000"},{"id":11,"money":"500,000"},{"id":10,"money":"250,000"},{"id":9,"money":"125,000"},{"id":8,"money":"64,000"},{"id":7,"money":"32,000"},{"id":6,"money":"16,000"},{"id":5,"money":"8,000"},{"id":4,"money":"4,000"},{"id":3,"money":"2,000"},{"id":2,"money":"1,000"},{"id":1,"money":"500"}]')},function(e){e.exports=JSON.parse('[{"id":1,"question":"How old your elder brother was 10 years before you was born, mate?","variants":["10 years","11 years","12 years","14 years"],"variantLetters":["A","B","C","D"],"trueAnswers":["10 years"]},{"id":2,"question":"2 + 2?","variants":["3","2","5","4"],"variantLetters":["A","B","C","D"],"trueAnswers":["4"]},{"id":3,"question":"3 + 3?","variants":["6","2","3","4"],"variantLetters":["A","B","C","D"],"trueAnswers":["6"]},{"id":4,"question":"4 + 4?","variants":["8","2","3","4"],"variantLetters":["A","B","C","D"],"trueAnswers":["8"]},{"id":5,"question":"5 + 5?","variants":["1","10","3","4"],"variantLetters":["A","B","C","D"],"trueAnswers":["10"]},{"id":6,"question":"6 + 6?","variants":["1","2","12","4"],"variantLetters":["A","B","C","D"],"trueAnswers":["12"]},{"id":7,"question":"7 + 7?","variants":["1","2","3","14"],"variantLetters":["A","B","C","D"],"trueAnswers":["14"]},{"id":8,"question":"8 + 8?","variants":["16","2","3","4"],"variantLetters":["A","B","C","D"],"trueAnswers":["16"]},{"id":9,"question":"9 + 9?","variants":["1","18","3","4"],"variantLetters":["A","B","C","D"],"trueAnswers":["18"]},{"id":10,"question":"10 + 10?","variants":["1","20","3","4"],"variantLetters":["A","B","C","D"],"trueAnswers":["20"]},{"id":11,"question":"11 + 11?","variants":["1","2","22","4"],"variantLetters":["A","B","C","D"],"trueAnswers":["22"]},{"id":12,"question":"12 + 12?","variants":["1","2","3","24"],"variantLetters":["A","B","C","D"],"trueAnswers":["24"]}]')},,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(1),r=s(9),i=s.n(r),c=(s(16),s(2)),o=(s(17),s.p+"static/media/hand.db4d6f4e.png"),A=(s(18),function(e){var t=e.setStart;return Object(n.jsxs)("div",{className:"game-start",children:[Object(n.jsx)("div",{className:"hand",children:Object(n.jsx)("img",{src:o,alt:"hand"})}),Object(n.jsxs)("div",{className:"frame",children:[Object(n.jsx)("h1",{className:"title",children:"Who wants to be a millionaire?"}),Object(n.jsx)("button",{type:"button",className:"button",onClick:function(){return t(!0)},children:Object(n.jsx)("span",{children:"Start"})})]})]})}),u=s(10),d=s(5),l=s.n(d),j=(s(19),s(7)),m=s(8),b=function(e){var t=e.setEndGame,s=e.setFinalScore,r=Object(a.useState)(!1),i=Object(c.a)(r,2),o=i[0],A=i[1],d=Object(a.useState)(1),b=Object(c.a)(d,2),v=b[0],O=b[1],h=Object(a.useState)(1),f=Object(c.a)(h,2),g=f[0],x=f[1],y=Object(a.useState)(m.find((function(e){return e.id===g}))),w=Object(c.a)(y,2),C=w[0],p=w[1],B=C.trueAnswers,N=B.length,S=function(e){var n=e.currentTarget,a=n.parentElement;if(!n.classList.contains("selected")&&(v<=N&&(n.classList.add("selected"),O(v+1)),v===N)){var r=Object(u.a)(a.querySelectorAll(".selected"));setTimeout((function(){r.forEach((function(e){B.some((function(t){return t===e.dataset.value}))?(e.classList.remove("selected"),e.classList.add("correct")):(e.classList.remove("selected"),e.classList.add("wrong"))})),r.every((function(e){return e.classList.contains("correct")}))?setTimeout((function(){r.forEach((function(e){return e.classList.remove("correct")})),O(1),x(g+1),12===g?(t(!0),s("1,000,000")):p(m.find((function(e){return e.id===g+1})))}),2500):setTimeout((function(){var e=j.find((function(e){return e.id===g-1}));t(!0),s(e?e.money:"0")}),2500)}),2500)}};return Object(n.jsxs)("div",{className:"game",children:[Object(n.jsx)("button",{type:"button",className:"menu",onClick:function(){return A(!0)},children:Object(n.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABCSURBVHgB7dIxCgAgDAPA1H8I+v9HKfiP1lU6tjgouTEkWwD6nvig1j7M0BAggrnW6GdWfEkVYZkt3cMXUR5fRA/YSoQg8r7Dk8MAAAAASUVORK5CYII=",alt:"menu"})}),Object(n.jsxs)("main",{className:l()({questions:!0,unvisible:o}),children:[Object(n.jsx)("article",{className:"question",children:Object(n.jsx)("h1",{children:C.question})}),Object(n.jsx)("article",{className:"variants",children:C.variants.map((function(e,t){return Object(n.jsxs)("button",{type:"button","data-value":e,className:"variant",onClick:S,children:[Object(n.jsx)("span",{className:"variant-lettert",children:C.variantLetters[t]}),Object(n.jsx)("span",{className:"variant-value",children:e})]},C.variantLetters[t])}))})]}),Object(n.jsxs)("aside",{className:l()({"money-scale":!0,unvisible:!o}),children:[Object(n.jsx)("div",{className:"scale",children:j.map((function(e){return Object(n.jsx)("div",{className:l()({money:!0,"current-question":g===e.id,"earned-money":g>e.id}),children:Object(n.jsx)("span",{children:"$".concat(e.money)})},e.money)}))}),Object(n.jsx)("button",{type:"button",className:"close-menu",onClick:function(){return A(!1)},children:Object(n.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAENSURBVHgB7ZRBCsIwEEUnqYIoxehKcJMjeAVvojdw51JvoFuP4Ql6Dnd112Wh3bVlzIhQKdN0dKn9ECiT5L+Q/A5Ar59XwBWXS7syxuzHY3PL8zT1GSwW1s5m81MYTu9ZlibNed2yb4eodsOhisgAPOa0BhE3SsGGW8MCqgqOiBC7YdsgtTlYWluWcOa8FHhOFwQqciezbsRFgeskiWPOvKrqOTGgDUJ1qXkngINQTWouAjQhL4DInKRBKK357y6Jruj9zp+bmIf/CsClhept6foI4IuiL8IigCTnUgj7XIMBtQp/FKlGc/Ufrw+cF9vswtAkWutRWeLWd7/UCCcTc3WpUq4fXbhm1+sP9AD2MeAb9SuKCgAAAABJRU5ErkJggg==",alt:"close-menu"})})]})]})},v=(s(20),function(e){var t=e.finalScore,s=e.setStart,a=e.setEndGame;return Object(n.jsxs)("div",{className:"game-over",children:[Object(n.jsx)("div",{className:"hand",children:Object(n.jsx)("img",{src:o,alt:"hand"})}),Object(n.jsxs)("div",{className:"frame",children:[Object(n.jsx)("p",{className:"total",children:"Total score:"}),Object(n.jsx)("h1",{className:"title",children:"$".concat(t," earned")}),Object(n.jsx)("button",{type:"button",className:"button",onClick:function(){s(!0),a(!1)},children:Object(n.jsx)("span",{children:"Try again"})})]})]})});var O=function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),s=t[0],r=t[1],i=Object(a.useState)(!1),o=Object(c.a)(i,2),u=o[0],d=o[1],l=Object(a.useState)(""),j=Object(c.a)(l,2),m=j[0],O=j[1];return Object(n.jsxs)("div",{className:"App",children:[!s&&Object(n.jsx)(A,{setStart:r}),s&&!u&&Object(n.jsx)(b,{setEndGame:d,setFinalScore:O}),u&&Object(n.jsx)(v,{finalScore:m,setStart:r,setEndGame:d})]})};i.a.render(Object(n.jsx)(O,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.38047e6b.chunk.js.map