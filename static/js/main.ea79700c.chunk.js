(this.webpackJsonpmesto2=this.webpackJsonpmesto2||[]).push([[0],[,,function(e,t,a){e.exports=a.p+"static/media/close-icon.c2d0901f.svg"},,,function(e,t,a){e.exports=a.p+"static/media/logo.855a8c98.svg"},,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),c=a.n(r),s=(a(13),a(1)),i=a(5),l=a.n(i);var p=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{className:"logo",alt:"\u041c\u0435\u0441\u0442\u043e \u0432 \u0420\u043e\u0441\u0441\u0438\u0438",src:l.a}))},u=a(6),m=a(7),_=new(function(){function e(t){var a=t.userURL,n=t.cardsURL,o=t.token;Object(u.a)(this,e),this._userURL=a,this._cardsURL=n,this._token=o}return Object(m.a)(e,[{key:"userDownload",value:function(){return fetch(this._userURL,{method:"GET",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ".concat(e.status))}))}},{key:"cardsDownload",value:function(){return fetch(this._cardsURL,{method:"GET",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0432\u044f\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c ".concat(e.status))}))}},{key:"profileDataUpload",value:function(e,t){return fetch(this._userURL,{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 ".concat(e.status))}))}},{key:"newCardUpload",value:function(e,t){return fetch(this._cardsURL,{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 ".concat(e.status))}))}},{key:"deleteCard",value:function(e){var t=this._cardsURL+"/".concat(e);return fetch(t,{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438")}))}},{key:"likeCard",value:function(e){var t=this._cardsURL+"/likes/".concat(e);return fetch(t,{method:"PUT",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0432\u044f\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c")}))}},{key:"dislikeCard",value:function(e){var t=this._cardsURL+"/likes/".concat(e);return fetch(t,{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0432\u044f\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c")}))}},{key:"avatarUpload",value:function(e){return fetch(this._userURL+"/avatar",{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430")}))}}]),e}())({userURL:"https://mesto.nomoreparties.co/v1/cohort-15/users/me",cardsURL:"https://mesto.nomoreparties.co/v1/cohort-15/cards",token:"e6bf7ea4-0157-47ee-b8f8-bf17d3b13ba1"});var d=function(e){var t=e.card,a=e.onCardClick;return o.a.createElement("li",{className:"card"},o.a.createElement("img",{src:t.link,alt:"",className:"card__image",onClick:function(){a(t)}}),o.a.createElement("button",{className:"button card__delete-button",type:"button"}),o.a.createElement("div",{className:"card__caption"},o.a.createElement("h2",{className:"card__title"},t.name),o.a.createElement("div",{className:"card__like-container"},o.a.createElement("button",{className:"button card__like-button",type:"button"}),o.a.createElement("p",{className:"card__like-counter"},t.likes.length))))};var h=function(e){var t=e.onEditProfile,a=e.onAddPlace,n=e.onEditAvatar,r=e.onCardClick,c=o.a.useState(""),i=Object(s.a)(c,2),l=i[0],p=i[1],u=o.a.useState(""),m=Object(s.a)(u,2),h=m[0],f=m[1],E=o.a.useState(""),b=Object(s.a)(E,2),k=b[0],v=b[1],y=o.a.useState([]),N=Object(s.a)(y,2),C=N[0],j=N[1];return o.a.useEffect((function(){var e=[_.userDownload(),_.cardsDownload()];Promise.all(e).then((function(e){var t=e[0];j(e[1]),p(t.name),f(t.about),v(t.avatar)}))}),[]),o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("img",{src:k,alt:"\u0444\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__avatar",onClick:n}),o.a.createElement("div",{className:"profile__info"},o.a.createElement("h1",{className:"profile__name"},l),o.a.createElement("button",{className:"button profile__edit-button",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:t}),o.a.createElement("p",{className:"profile__occupation"},h)),o.a.createElement("button",{className:"button profile__add-button",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",onClick:a})),o.a.createElement("section",null,o.a.createElement("ul",{className:"cards"},C.map((function(e){return o.a.createElement(d,{key:e._id,card:e,onCardClick:r})})))))};var f=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa92020 Mesto Russia"))},E=a(2),b=a.n(E);var k=function(e){var t=e.title,a=e.name,n=e.submitText,r=e.isOpen,c=e.onClose,s=e.children,i="popup popup_type_".concat(a," ").concat(r&&"popup_opened");return o.a.createElement("div",{className:i},o.a.createElement("form",{name:a,action:"#",className:"popup__container popup__container_type_input",noValidate:!0},o.a.createElement("p",{className:"popup__text"},t),s,o.a.createElement("button",{type:"submit",className:"button popup__save-button"},n),o.a.createElement("button",{type:"reset",className:"button popup__close-button popup__close-button_type_input",onClick:c},o.a.createElement("img",{src:b.a,alt:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"}))))};var v=function(e){var t=e.card,a=e.onClose,n="popup popup_type_image ".concat(0!==Object.keys(t).length&&"popup_opened");return o.a.createElement("div",{className:n},o.a.createElement("div",{className:"popup__container popup__container_type_picture"},o.a.createElement("button",{className:"button popup__close-button popup__close-button_type_picture",type:"reset",onClick:a},o.a.createElement("img",{src:b.a,alt:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"})),o.a.createElement("img",{src:t.link,alt:"",className:"popup__image"}),o.a.createElement("p",{className:"popup__subtitle"},t.name)))};var y=function(){var e=o.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],r=o.a.useState(!1),c=Object(s.a)(r,2),i=c[0],l=c[1],u=o.a.useState(!1),m=Object(s.a)(u,2),_=m[0],d=m[1],E=o.a.useState(!1),b=Object(s.a)(E,2),y=b[0],N=b[1],C=o.a.useState({}),j=Object(s.a)(C,2),g=j[0],L=j[1];function O(){n(!1),l(!1),d(!1),N(!1),L({})}return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"body"},o.a.createElement(p,null),o.a.createElement(h,{onEditProfile:function(){n(!0)},onAddPlace:function(){l(!0)},onEditAvatar:function(){d(!0)},onCardClick:function(e){L(e)}}),o.a.createElement(f,null),o.a.createElement(k,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",submitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClose:O,isOpen:a},o.a.createElement("input",{name:"name",className:"popup__input popup__input_type_name",type:"text",required:!0,minLength:"2",maxLength:"40",autoComplete:"off"}),o.a.createElement("span",{className:"popup__error popup__error_type_name"}),o.a.createElement("input",{name:"occupation",className:"popup__input popup__input_type_occupation",type:"text",required:!0,minLength:"2",maxLength:"200",autoComplete:"off"}),o.a.createElement("span",{className:"popup__error popup__error_type_occupation"})),o.a.createElement(k,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"new-card",submitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClose:O,isOpen:i},o.a.createElement("input",{name:"place",className:"popup__input popup__input_type_place",type:"text",placeholder:"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30",autoComplete:"off"}),o.a.createElement("span",{className:"popup__error popup__error_type_place"}),o.a.createElement("input",{name:"link",className:"popup__input popup__input_type_link",type:"url",required:!0,placeholder:"\u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",autoComplete:"off"}),o.a.createElement("span",{className:"popup__error popup__error_type_link"})),o.a.createElement(k,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",submitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClose:O,isOpen:_},o.a.createElement("input",{name:"link",className:"popup__input popup__input_type_link",type:"url",required:!0,placeholder:"\u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",autoComplete:"off"}),o.a.createElement("span",{className:"popup__error popup__error_type_link"})),o.a.createElement(k,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"confirm",submitText:"\u0434\u0430",onClose:O,isOpen:y}),o.a.createElement(v,{card:g,onClose:O})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.ea79700c.chunk.js.map