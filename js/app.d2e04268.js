(function(t){function e(e){for(var n,u,a=e[0],o=e[1],s=e[2],l=0,f=[];l<a.length;l++)u=a[l],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&f.push(r[u][0]),r[u]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);b&&b(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),c()}function c(){for(var t,e=0;e<i.length;e++){for(var c=i[e],n=!0,a=1;a<c.length;a++){var o=c[a];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=u(u.s=c[0]))}return t}var n={},r={app:0},i=[];function u(e){if(n[e])return n[e].exports;var c=n[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,u),c.l=!0,c.exports}u.m=t,u.c=n,u.d=function(t,e,c){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(u.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(c,n,function(e){return t[e]}.bind(null,n));return c},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/coffeeStore/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var b=o;i.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("cd49")},"02e3":function(t,e,c){},"0a62":function(t,e,c){},"0dcf":function(t,e,c){},"1c5f":function(t,e,c){"use strict";c("6ff7")},4023:function(t,e,c){},"459a":function(t,e,c){"use strict";c("0a62")},"4f17":function(t,e,c){"use strict";c("bfdb")},"529a":function(t,e,c){"use strict";c("02e3")},"5aeb":function(t,e,c){},"5fbd":function(t,e,c){},"6ff7":function(t,e,c){},"7ba0":function(t,e,c){"use strict";c("4023")},"8da9":function(t,e,c){t.exports=c.p+"img/shopping_cart_white_36dp.52f0c70c.svg"},b98d:function(t,e,c){},bbbe:function(t,e,c){"use strict";c("5aeb")},bfdb:function(t,e,c){},c96e:function(t,e,c){"use strict";c("5fbd")},cb7c:function(t,e,c){"use strict";c("b98d")},cd49:function(t,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23"),r=c("1da1"),i=(c("96cf"),c("4e82"),c("4de4"),c("d3b7"),c("77ba")),u=c("bc3a"),a=c.n(u),o=Object(i["b"])({id:"card",state:function(){return{items:[]}},getters:{getItems:function(){return this.items}},actions:{setItems:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.a.get("https://vashuber.github.io/coffeeStore/api.json").then((function(e){return t.items=e.data}));case 2:case"end":return e.stop()}}),e)})))()},filter:function(t){t&&(this.items=this.items.filter((function(e){return e.type===t})))},sort:function(t){switch(t){case"По цене":this.items.sort((function(t,e){return t.prices[0].cost-e.prices[0].cost}));break;case"По алфавиту":this.items.sort((function(t,e){return t.title.toLowerCase()>e.title.toLowerCase()?1:-1}));break;case"По популярности":this.items.sort((function(t,e){return e.countPurchases-t.countPurchases}));break}}}}),s=c("8da9"),b=c.n(s),l=Object(i["b"])({id:"cart",state:function(){return{cart:[]}},getters:{getItemsInCart:function(){return this.cart}},actions:{addItemsToCart:function(t){this.cart.push(t)},removeItemFromCart:function(t){this.cart=this.cart.filter((function(e){return e.idCart!==t}))},order:function(){this.cart=[]}}}),f=function(t){return Object(n["y"])("data-v-16d7acfd"),t=t(),Object(n["w"])(),t},j={class:"header"},O=Object(n["j"])("Магазин"),d=f((function(){return Object(n["i"])("img",{src:b.a,alt:""},null,-1)})),p=Object(n["l"])({setup:function(t){var e=l(),c=Object(n["d"])((function(){return e.cart.length}));return function(t,e){var r=Object(n["C"])("router-link");return Object(n["v"])(),Object(n["h"])("header",j,[Object(n["k"])(r,{to:"/",class:"header__link"},{default:Object(n["I"])((function(){return[O]})),_:1}),Object(n["k"])(r,{to:"/cart",class:"header__link"},{default:Object(n["I"])((function(){return[d,Object(n["k"])(n["b"],{name:"show-count"},{default:Object(n["I"])((function(){return[Object(n["J"])(Object(n["i"])("span",{class:"header__count"},Object(n["E"])(Object(n["F"])(c)),513),[[n["G"],Object(n["F"])(c)>0]])]})),_:1})]})),_:1})])}}}),v=(c("d416"),c("6b0d")),m=c.n(v);const _=m()(p,[["__scopeId","data-v-16d7acfd"]]);var h=_,g=c("6c02"),k={class:"app"},w=Object(n["l"])({setup:function(t){var e=o(),c=Object(g["c"])(),i=Object(n["A"])(!1);return Object(n["t"])(Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.setItems();case 2:e.sort("По цене");case 3:case"end":return t.stop()}}),t)})))),Object(n["H"])(c,(function(){i.value="/404"===c.path})),function(t,e){var c=Object(n["C"])("router-view");return Object(n["v"])(),Object(n["h"])("div",k,[i.value?Object(n["g"])("",!0):(Object(n["v"])(),Object(n["f"])(h,{key:0})),Object(n["k"])(c)])}}});c("7ba0");const y=w;var I=y,C=(c("7db0"),c("a4d3"),c("e01a"),c("99af"),c("cc98")),x=c.n(C),P={class:"button"},E=Object(n["l"])({props:{text:null},setup:function(t){var e=t;return function(t,c){return Object(n["v"])(),Object(n["h"])("button",P,Object(n["E"])(e.text),1)}}});c("cb7c");const R=m()(E,[["__scopeId","data-v-f92fdc4e"]]);var S=R,F={class:"product"},A=["src","alt"],B={class:"product__title"},M={class:"product__description"},J={key:0,class:"product__prices"},T=["onClick"],U={class:"product__bottom"},H={class:"product__price"},q=Object(n["l"])({props:{item:null},setup:function(t){var e=t,c=l(),r=Object(n["A"])(e.item.prices[0].cost),i=function(){var t=e.item,n=t.id,i=t.title,u=t.imgUrl,a=t.type,o=e.item.prices.find((function(t){return t.cost===r.value}));c.addItemsToCart({id:n,idCart:x()(),title:i,imgUrl:u,type:a,finalPrice:r.value,volume:null===o||void 0===o?void 0:o.volume})},u=function(t){r.value=t.cost};return function(t,c){return Object(n["v"])(),Object(n["h"])("div",F,[Object(n["i"])("img",{src:e.item.imgUrl,alt:e.item.title,class:"product__img"},null,8,A),Object(n["i"])("h3",B,Object(n["E"])(e.item.title),1),Object(n["i"])("p",M,Object(n["E"])(e.item.description),1),e.item.prices.length>1?(Object(n["v"])(),Object(n["h"])("div",J,[(Object(n["v"])(!0),Object(n["h"])(n["a"],null,Object(n["B"])(e.item.prices,(function(t){return Object(n["v"])(),Object(n["h"])("div",{class:Object(n["q"])(["product__option",{product__option_active:t.cost===r.value}]),key:"".concat(e.item.title,"-").concat(t.cost),onClick:function(e){return u(t)}},Object(n["E"])(t.volume),11,T)})),128))])):Object(n["g"])("",!0),Object(n["i"])("div",U,[Object(n["i"])("div",H,Object(n["E"])(r.value)+" ₽",1),Object(n["k"])(S,{text:"Добавить",class:"product__button",onClick:i})])])}}});c("bbbe");const G=m()(q,[["__scopeId","data-v-2401b276"]]);var L=G,X={class:"select__current-option"},z={class:"select__options"},D=["onClick"],K=Object(n["l"])({props:{options:null},setup:function(t){var e=t,c=o(),r=Object(n["A"])(!1),i=Object(n["A"])(e.options[0]),u=function(){return r.value=!r.value},a=function(t){return i.value=t};return Object(n["H"])(i,(function(t){c.sort(t)})),function(t,c){return Object(n["v"])(),Object(n["h"])("div",{class:"select",onClick:u},[Object(n["i"])("div",X,Object(n["E"])(i.value),1),Object(n["J"])(Object(n["k"])(n["b"],{name:"showOptions"},{default:Object(n["I"])((function(){return[Object(n["i"])("div",z,[(Object(n["v"])(!0),Object(n["h"])(n["a"],null,Object(n["B"])(e.options,(function(t){return Object(n["v"])(),Object(n["h"])("div",{class:"select__item",key:t,onClick:function(e){return a(t)}},Object(n["E"])(t),9,D)})),128))])]})),_:1},512),[[n["G"],r.value]])])}}});c("1c5f");const N=K;var Q=N,V={class:"filter"},W=Object(n["l"])({setup:function(t){var e=["кофе","чизкейк"],c=Object(n["A"])(""),i=o();Object(n["H"])(c,function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.setItems();case 2:i.filter(e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var u=function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:c.value===e?c.value="":c.value=e;case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n["u"])(Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.setItems();case 2:case"end":return t.stop()}}),t)})))),function(t,r){return Object(n["v"])(),Object(n["h"])("div",V,[(Object(n["v"])(),Object(n["h"])(n["a"],null,Object(n["B"])(e,(function(t){return Object(n["k"])(S,{key:t,text:t,class:Object(n["q"])(["filter__button",{filter__button_active:t===c.value}]),onClick:function(e){return u(t)}},null,8,["text","onClick","class"])})),64))])}}});c("459a");const Y=m()(W,[["__scopeId","data-v-05a3af08"]]);var Z=Y,$={class:"head"},tt={class:"products-wrapper"},et=Object(n["l"])({setup:function(t){var e=o(),c=Object(n["d"])((function(){return e.getItems})),r=["По цене","По алфавиту","По популярности"];return function(t,e){return Object(n["v"])(),Object(n["h"])(n["a"],null,[Object(n["i"])("div",$,[Object(n["k"])(Z),Object(n["k"])(Q,{options:r})]),Object(n["i"])("div",tt,[Object(n["k"])(n["c"],{name:"on-delete"},{default:Object(n["I"])((function(){return[(Object(n["v"])(!0),Object(n["h"])(n["a"],null,Object(n["B"])(Object(n["F"])(c),(function(t){return Object(n["v"])(),Object(n["f"])(L,{item:t,key:t.id},null,8,["item"])})),128))]})),_:1})])],64)}}});c("c96e");const ct=m()(et,[["__scopeId","data-v-0c805f44"]]);var nt=ct,rt=c("d8d7"),it=c.n(rt),ut=c("a1e9"),at={class:"cartProduct"},ot=["src","alt"],st={class:"cartProduct__info"},bt=Object(n["j"])(" Информация о товаре: "),lt={class:"cartProduct__right"},ft={class:"cartProduct__price"},jt=Object(n["l"])({props:{item:null},setup:function(t){var e=t,c=l(),r=function(t){c.removeItemFromCart(t)};return function(t,c){return Object(n["v"])(),Object(n["h"])("div",at,[Object(n["i"])("img",{src:e.item.imgUrl,alt:e.item.title,class:"cartProduct__img"},null,8,ot),Object(n["i"])("div",st,[bt,Object(n["i"])("div",null,Object(n["E"])(e.item.title)+",",1),Object(n["i"])("div",null,Object(n["E"])(e.item.volume),1)]),Object(n["i"])("div",lt,[Object(n["i"])("button",{class:"cartProduct__remove-button",onClick:c[0]||(c[0]=function(t){return r(e.item.idCart)})}," X "),Object(n["i"])("div",ft,Object(n["E"])(e.item.finalPrice)+" ₽",1)])])}}});c("e746");const Ot=m()(jt,[["__scopeId","data-v-aa3aaaa4"]]);var dt=Ot,pt=function(t){return Object(n["y"])("data-v-5b1a171d"),t=t(),Object(n["w"])(),t},vt={key:0,class:"cart"},mt={class:"cart__check"},_t={class:"cart__sum"},ht={key:1,class:"empty"},gt=Object(n["j"])(" Ваша корзина пуста "),kt=pt((function(){return Object(n["i"])("img",{src:it.a,alt:""},null,-1)})),wt=[gt,kt],yt=Object(n["l"])({setup:function(t){var e=l(),c=function(){e.order()},r=Object(ut["c"])((function(){return e.getItemsInCart})),i=Object(ut["c"])((function(){return r.value.reduce((function(t,e){return e.finalPrice+t}),0)}));return function(t,e){return 0!==Object(n["F"])(i)?(Object(n["v"])(),Object(n["h"])("div",vt,[Object(n["i"])("div",null,[Object(n["k"])(n["c"],{name:"on-delete"},{default:Object(n["I"])((function(){return[(Object(n["v"])(!0),Object(n["h"])(n["a"],null,Object(n["B"])(Object(n["F"])(r),(function(t){return Object(n["v"])(),Object(n["f"])(dt,{item:t,key:t.idCart},null,8,["item"])})),128))]})),_:1})]),Object(n["i"])("div",mt,[Object(n["i"])("div",_t,"Сумма заказа: "+Object(n["E"])(Object(n["F"])(i))+"₽",1),Object(n["k"])(S,{text:"Заказать",class:"cart__button",onClick:c})])])):(Object(n["v"])(),Object(n["h"])("div",ht,wt))}}});c("529a");const It=m()(yt,[["__scopeId","data-v-5b1a171d"]]);var Ct=It,xt=c("d595"),Pt=c.n(xt),Et=function(t){return Object(n["y"])("data-v-0ceb9930"),t=t(),Object(n["w"])(),t},Rt={class:"errorPage"},St=Et((function(){return Object(n["i"])("div",{class:"errorPage__head"},[Object(n["i"])("h3",{class:"errorPage__message"},"404"),Object(n["i"])("img",{src:Pt.a,alt:""})],-1)})),Ft=Object(n["j"])("Вернуться в магазин ->");function At(t,e){var c=Object(n["C"])("router-link");return Object(n["v"])(),Object(n["h"])("div",Rt,[St,Object(n["k"])(c,{to:"/"},{default:Object(n["I"])((function(){return[Ft]})),_:1})])}c("4f17");const Bt={},Mt=m()(Bt,[["render",At],["__scopeId","data-v-0ceb9930"]]);var Jt=Mt,Tt=[{path:"/",name:"Store",component:nt},{path:"/cart",name:"Cart",component:Ct},{path:"/404",name:"Eror",component:Jt},{path:"/:pathMatch(.*)*",redirect:"/404"}],Ut=Object(g["a"])({history:Object(g["b"])("/coffeeStore/"),linkActiveClass:"header__link_active",routes:Tt}),Ht=Ut;Object(n["e"])(I).use(Ht).use(Object(i["a"])()).mount("#app")},d416:function(t,e,c){"use strict";c("0dcf")},d595:function(t,e,c){t.exports=c.p+"img/error_outline_black_48dp.5afb290e.svg"},d8d7:function(t,e,c){t.exports=c.p+"img/search_black_48dp.843415a0.svg"},e746:function(t,e,c){"use strict";c("ea02")},ea02:function(t,e,c){}});
//# sourceMappingURL=app.d2e04268.js.map