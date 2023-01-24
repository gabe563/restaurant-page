(()=>{"use strict";var n={150:(n,t,e)=>{e.d(t,{Z:()=>g});var o=e(81),i=e.n(o),a=e(645),r=e.n(a),c=e(667),s=e.n(c),d=new URL(e(77),e.b),l=new URL(e(664),e.b),p=new URL(e(229),e.b),u=r()(i());u.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Orbitron&display=swap);"]),u.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Rajdhani&display=swap);"]);var m=s()(d),h=s()(l),f=s()(p);u.push([n.id,"@font-face {\n  font-family: 'Bitsumis';\n  /* src: url('../fonts/BITSUMIS.ttf') format('ttf'); */\n  src: url("+m+") format('woff2'),\n    url("+h+") format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --header-color: rgba(17, 24, 39, 0.9);\n  --st-color: #fafaf9;\n  --nd-color: black;\n\n  --st-font: 'Bitsumis';\n  --nd-font: 'Orbitron';\n  --rd-font: 'Rajdhani';\n}\n\nbody::after {\n  content: '';\n  background: url("+f+");\n  background-size: cover;\n  background-repeat: no-repeat;\n  opacity: 70%;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  position: absolute;\n  z-index: -1;\n}\n\n#content {\n  width: 100vw;\n  height: 100vh;\n}\n\n.info {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 88vh;\n}\n\n.snack1 {\n  height: 324px;\n  width: 488px;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 100px;\n  background-color: var(--header-color);\n  padding-left: 60px;\n  padding-right: 60px;\n}\n\n.title-div {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n.title-div p {\n  font-family: var(--st-font);\n  font-size: 35px;\n  color: var(--st-color);\n  cursor: pointer;\n}\n\n.nut-icon {\n  color: var(--st-color);\n  cursor: pointer;\n}\n\n.pages {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 70px;\n  width: 635px;\n  height: 50px;\n  font-size: 0;\n  list-style-type: none;\n  font-family: var(--nd-font);\n  color: var(--st-color);\n  position: relative;\n}\n\n.pages li {\n  font-size: 15px;\n  cursor: pointer;\n  position: relative;\n  text-align: center;\n  z-index: 1;\n}\n\n.pages .current-box {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 140px;\n  height: 100%;\n  border: 4px solid var(--st-color);\n  border-radius: 24px;\n  z-index: 0;\n  transition: all 0.5s ease 0s;\n}\n\n.pages .start,\nli:nth-child(4).current ~ .current-box {\n  width: 120px;\n  left: 512px;\n}\n\n.pages .start,\nli:nth-child(3).current ~ .current-box {\n  left: 343px;\n}\n\n.pages .start,\nli:nth-child(2).current ~ .current-box {\n  left: 173px;\n}\n\n.pages .start,\nli:nth-child(1).current ~ .current-box {\n  width: 120px;\n  left: 3px;\n}\n\n.pages li:nth-child(1) {\n  width: 100px;\n}\n\n.pages li:nth-child(2) {\n  width: 100px;\n}\n\n.pages li:nth-child(3) {\n  width: 100px;\n}\n\n.pages li:nth-child(4) {\n  width: 100px;\n}\n\n.home-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 92vw;\n  height: 76vh;\n  background-color: rgba(250, 250, 249, 0.9);\n  border-radius: 50px;\n  animation: fadeIn 1s;\n}\n\n.header-home {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n  position: relative;\n}\n\n.header-home p {\n  margin-top: 10px;\n  font-size: 45px;\n  font-weight: 900;\n  -webkit-text-stroke: 1px black;\n}\n\n.header-home,\n.home-info {\n  font-family: var(--rd-font);\n}\n\n.home-info {\n  display: flex;\n  gap: 34px;\n  margin-top: 45px;\n  margin-left: 144px;\n  margin-right: 144px;\n}\n\n.home-txt {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 50px;\n  font-size: 33px;\n  font-weight: 800;\n}\n\n.home-txt hr {\n  display: flex;\n  align-items: center;\n  height: 4px;\n  margin-left: -10px;\n  width: 465px;\n  border: none;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  background-color: white;\n}\n\n.home-txt hr::before {\n  border-radius: 50%;\n  content: '';\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  background-color: white;\n}\n\n.snack1 {\n  border-radius: 74px;\n}\n\n.info-cont2 {\n  max-width: 400px;\n}\n\n.menu-content {\n  display: grid;\n  place-content: center;\n  min-width: 76vh;\n  width: 92vw;\n  height: 76vh;\n  border-radius: 50px;\n  background-color: rgba(250, 250, 249, 0.9);\n  animation: fadeIn 1s;\n}\n\n.cake img {\n  border-radius: 35px;\n  width: 470px;\n  height: 400px;\n}\n\n.img-cont {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n  padding: 20px;\n  width: 550px;\n  height: 140rem;\n}\n\n.scrollbar {\n  display: flex;\n  justify-content: center;\n  height: 70vh;\n  width: 92vw;\n  overflow: auto;\n}\n\n.cake {\n  overflow: hidden;\n  flex-direction: row-reverse;\n  display: flex;\n  height: 400px;\n  width: 470px;\n  transition: all 0.2s ease;\n}\n\n.cake:hover,\n.about-img img:hover,\n.contact-icons [icon]:hover,\n.order-icons img:hover {\n  transform: scale(1.1, 1.1);\n}\n\n.cake:active,\n.contact-icons [icon]:active,\n.order-icons img:active {\n  transform: scale(1, 1);\n}\n\n.tag {\n  font-size: 10px;\n  margin-top: 35px;\n  height: 45px;\n  min-width: 220px;\n  width: 200px;\n  color: white;\n  border-top: 26px solid rgba(251, 113, 133, 0.9);\n  border-bottom: 26px solid rgba(251, 113, 133, 0.9);\n  border-right: 14px solid transparent;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  transition: 0.2s;\n  font-family: var(--nd-font);\n  position: relative;\n}\n\n.tag p {\n  margin-left: 20px;\n}\n\n.cake:hover .tag {\n  transform: translateX(100%);\n}\n\n.home-info .cake {\n  margin-left: 30px;\n  width: 488px;\n  height: 324px;\n}\n\n.home-info .cake p {\n  margin-left: 30px;\n}\n\n.home-info .cake img {\n  width: 488px;\n  height: 324px;\n}\n\n.about-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 50px;\n  width: 92vw;\n  height: 76vh;\n  padding: 100px;\n  background-color: rgba(250, 250, 249, 0.9);\n  border-radius: 50px;\n  animation: fadeIn 1s;\n}\n\n.about-txt {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 40px;\n  font-family: var(--rd-font);\n}\n\n.about-txt p:nth-child(1) {\n  font-weight: bolder;\n  -webkit-text-stroke: 1px black;\n  font-size: 45px;\n  position: relative;\n}\n\n.about-txt p:nth-child(1)::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  margin-left: -75px;\n  bottom: 50%;\n  height: 2px;\n  width: 45px;\n  background-color: var(--nd-color);\n}\n\n.about-txt p:nth-child(1)::before {\n  content: '';\n  position: absolute;\n  right: 0;\n  margin-right: -75px;\n  bottom: 50%;\n  height: 2px;\n  width: 45px;\n  background-color: var(--nd-color);\n}\n\n.about-txt p:nth-child(2) {\n  font-size: 30px;\n  text-align: center;\n}\n\n.about-img {\n  display: flex;\n  gap: 120px;\n}\n\n.about-img img {\n  border-radius: 30px;\n  height: 176px;\n  transition: all 0.2s ease;\n}\n\n.about-img img:nth-child(3) {\n  width: 250px;\n  height: 176px;\n}\n\n.contact-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 22rem;\n  width: 92vw;\n  height: 76vh;\n  background-color: rgba(250, 250, 249, 0.9);\n  border-radius: 50px;\n  animation: fadeIn 1s;\n  position: relative;\n}\n\n.arrow {\n  border: solid black;\n  border-radius: 2px;\n  border-width: 0 4px 4px 0;\n  display: inline-block;\n  padding: 10px;\n}\n\n.down {\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n}\n\n.contact-icons {\n  display: flex;\n  justify-content: center;\n  gap: 36px;\n}\n\n.contact-icons [icon] {\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.contact-icons [icon='akar-icons:facebook-fill'] {\n  color: #1973ea;\n}\n\na {\n  color: black;\n}\n\n.contact-icons [icon='akar-icons:twitter-fill'] {\n  color: #1d97e8;\n}\n\n.contact-box {\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n\n.contact-header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: var(--rd-font);\n}\n\n.contact-header p {\n  -webkit-text-stroke: 1px black;\n  font-weight: 900;\n  font-size: 45px;\n  position: relative;\n}\n\n.contact-header p::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  margin-left: -75px;\n  bottom: 50%;\n  height: 2px;\n  width: 45px;\n  background-color: var(--nd-color);\n}\n\n.contact-header p::before {\n  content: '';\n  position: absolute;\n  right: 0;\n  margin-right: -75px;\n  bottom: 50%;\n  height: 2px;\n  width: 45px;\n  background-color: var(--nd-color);\n}\n\n.contact-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 45px;\n  font-family: var(--nd-font);\n}\n\n.contact-info p {\n  font-size: 20px;\n}\n\n.contact-info p:first-child {\n  font-weight: 900;\n}\n\n.contact-info p:last-child {\n  font-weight: 900;\n  font-size: 24px;\n}\n\n.order-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 40px;\n}\n\n.order-header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.order-header p {\n  -webkit-text-stroke: 1px black;\n  font-weight: 900;\n  font-size: 45px;\n  position: relative;\n  font-family: var(--rd-font);\n}\n\n.order-header p::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  margin-left: -75px;\n  bottom: 50%;\n  height: 2px;\n  width: 45px;\n  background-color: var(--nd-color);\n}\n\n.order-header p::before {\n  content: '';\n  position: absolute;\n  right: 0;\n  margin-right: -75px;\n  bottom: 50%;\n  height: 2px;\n  width: 45px;\n  background-color: var(--nd-color);\n}\n\n.order-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n}\n\n.order-icons {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-left: 8px;\n}\n\n.order-icons img {\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n.order-icons img:first-child {\n  margin-right: 10px;\n  width: 65px;\n}\n\n.order-icons img:nth-child(2) {\n  width: 86px;\n}\n\n.order-icons img:last-child {\n  width: 86px;\n}\n\n.map {\n  width: 270px;\n  height: 222px;\n}\n\n.contact-line {\n  width: 2px;\n  height: 27rem;\n  border-radius: 2px;\n  background-color: var(--nd-color);\n  border: none;\n  position: absolute;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n",""]);const g=u},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(r[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&r[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},667:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var a={},r=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=e(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=i(m,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}r.push(p)}return r}function i(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,i){var a=o(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<a.length;r++){var c=e(a[r]);t[c].references--}for(var s=o(n,i),d=0;d<a.length;d++){var l=e(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,i&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},229:(n,t,e)=>{n.exports=e.p+"bg.jpeg"},664:(n,t,e)=>{n.exports=e.p+"bitsumis-webfont.woff"},77:(n,t,e)=>{n.exports=e.p+"bitsumis-webfont.woff2"}},t={};function e(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={id:o,exports:{}};return n[o](a,a.exports,e),a.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var o=t.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(379),t=e.n(n),o=e(795),i=e.n(o),a=e(569),r=e.n(a),c=e(565),s=e.n(c),d=e(216),l=e.n(d),p=e(589),u=e.n(p),m=e(150),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=r().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=e.p+"snack1.jpeg";function g(){document.querySelector(".info").appendChild(function(){const n=document.createElement("div");n.classList.add("home-content");const t=document.createElement("div");t.classList.add("header-home");const e=document.createElement("p");e.textContent="ENJOY THE BEST CAKES MADE FOR";const o=document.createElement("iconify-icon");o.setAttribute("icon","fluent-emoji:robot"),o.setAttribute("width","93"),o.setAttribute("height","90");const i=document.createElement("div");i.classList.add("home-info");const a=document.createElement("div");a.classList.add("cake");const r=document.createElement("div");r.classList.add("tag");const c=document.createElement("p");c.textContent="Scraps Muffins $ 4.99";const s=document.createElement("img");s.src=f,s.setAttribute("draggable","false"),s.classList.add("snack1");const d=document.createElement("div");d.classList.add("home-txt");const l=document.createElement("div");l.classList.add("info-cont1");const p=document.createElement("p");p.textContent="Best Quality For The Lowest Price.";const u=document.createElement("hr"),m=document.createElement("div");m.classList.add("info-cont2");const h=document.createElement("p");return h.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate elit eu neque tellus scelerisque odio.",i.appendChild(d),i.appendChild(a),a.appendChild(s),a.appendChild(r),r.appendChild(c),d.appendChild(l),d.appendChild(m),l.appendChild(p),l.appendChild(u),m.appendChild(h),n.appendChild(t),n.appendChild(i),t.appendChild(e),t.appendChild(o),n}())}const x=e.p+"food1.jpeg",b=e.p+"food2.jpeg",v=e.p+"food3.jpeg",y=e.p+"food4.jpeg",w=e.p+"food5.jpeg";function C(n,t){const e=document.createElement("div");e.classList.add("cake");const o=document.createElement("div");return o.classList.add("img-box"),e.appendChild(o),o.appendChild(function(n){const t=document.createElement("img");return t.setAttribute("draggable","false"),t.src=n,t}(n)),e.appendChild(function(n){const t=document.createElement("div");return t.classList.add("tag"),t.appendChild(function(n){const t=document.createElement("p");return t.textContent=n,t}(n)),t}(t)),e}const L=e.p+"about1.jpeg",E=e.p+"about2.jpeg",k=e.p+"about3.jpeg";function B(n){const t=document.createElement("p");return t.textContent=n,t}function S(n){const t=document.createElement("img");return t.src=n,t.setAttribute("draggable","false"),t}const A=e.p+"uber.png",j=e.p+"door.png",I=e.p+"grubhub.png",T=e.p+"map.png";function q(n){const t=document.createElement("p");return t.textContent=n,t}function z(n){const t=document.createElement("img");return t.src=n,t.setAttribute("draggable","false"),t}function M(n){return n.setAttribute("width","62"),n.setAttribute("height","62"),n}function O(){const n=document.querySelector(".title-div p"),t=document.querySelector(".nut-icon"),e=document.getElementById("homeBtn"),o=document.getElementById("menuBtn"),i=document.getElementById("aboutBtn"),a=document.getElementById("contactBtn");function r(n){return n.classList.add("current"),n}function c(n){n.classList.remove("current")}n.addEventListener("click",(()=>{r(e),c(a),c(i),c(o)})),t.addEventListener("click",(()=>{r(e),c(a),c(i),c(o)})),e.addEventListener("click",(()=>{r(e),c(a),c(i),c(o)})),o.addEventListener("click",(()=>{r(o),c(e),c(i),c(a)})),i.addEventListener("click",(()=>{r(i),c(e),c(o),c(a)})),a.addEventListener("click",(()=>{r(a),c(e),c(i),c(o)}))}!function(){const n=document.getElementById("content");n.appendChild(function(){const n=document.createElement("div");n.classList.add("header");const t=document.createElement("div");t.classList.add("title-div");const e=document.createElement("iconify-icon");e.setAttribute("icon","bi:nut-fill"),e.setAttribute("width","48"),e.setAttribute("height","45"),e.classList.add("nut-icon");const o=document.createElement("p");o.textContent="ROBOT'S CAKES";const i=document.createElement("ul");i.classList.add("pages");const a=document.createElement("li");a.textContent="Home",a.setAttribute("id","homeBtn"),a.classList.add("current");const r=document.createElement("li");r.textContent="Menu",r.setAttribute("id","menuBtn");const c=document.createElement("li");c.textContent="About",c.setAttribute("id","aboutBtn");const s=document.createElement("li");s.textContent="Contact",s.setAttribute("id","contactBtn");const d=document.createElement("div");return d.classList.add("current-box"),d.classList.add("start"),i.appendChild(a),i.appendChild(r),i.appendChild(c),i.appendChild(s),i.appendChild(d),t.appendChild(e),t.appendChild(o),n.appendChild(t),n.appendChild(i),n}()),n.appendChild(function(){const n=document.createElement("div");return n.classList.add("info"),n.classList.add("home"),n}()),g(),function(){const n=document.querySelector(".info"),t=document.querySelector(".title-div p"),e=document.querySelector(".nut-icon"),o=document.getElementById("homeBtn"),i=document.getElementById("menuBtn"),a=document.getElementById("aboutBtn"),r=document.getElementById("contactBtn");t.addEventListener("click",(()=>{n.classList.add("home"),n.classList.remove("menu"),n.classList.remove("about"),n.classList.remove("contact")})),e.addEventListener("click",(()=>{n.classList.add("home"),n.classList.remove("menu"),n.classList.remove("about"),n.classList.remove("contact")})),o.addEventListener("click",(()=>{n.classList.add("home"),n.classList.remove("menu"),n.classList.remove("about"),n.classList.remove("contact")})),i.addEventListener("click",(()=>{n.classList.add("menu"),n.classList.remove("home"),n.classList.remove("about"),n.classList.remove("contact")})),a.addEventListener("click",(()=>{n.classList.add("about"),n.classList.remove("home"),n.classList.remove("menu"),n.classList.remove("contact")})),r.addEventListener("click",(()=>{n.classList.add("contact"),n.classList.remove("home"),n.classList.remove("menu"),n.classList.remove("about")}))}(),function(){const n=document.querySelector(".info"),t=document.querySelector(".title-div p"),e=document.querySelector(".nut-icon"),o=document.getElementById("homeBtn"),i=document.getElementById("menuBtn"),a=document.getElementById("aboutBtn"),r=document.getElementById("contactBtn");t.addEventListener("click",(()=>{if(n.classList.contains("home")){if(o.classList.contains("current"))return;O(),n.textContent="",g()}})),e.addEventListener("click",(()=>{if(n.classList.contains("home")){if(o.classList.contains("current"))return;O(),n.textContent="",g()}})),o.addEventListener("click",(t=>{if(n.classList.contains("home")){if(t.target.classList.contains("current"))return;O(),n.textContent="",g()}})),i.addEventListener("click",(t=>{if(n.classList.contains("menu")){if(t.target.classList.contains("current"))return;O(),n.textContent="",document.querySelector(".info").appendChild(function(){const n=document.createElement("div");n.classList.add("menu-content");const t=document.createElement("div");t.classList.add("scrollbar");const e=document.createElement("div");return e.classList.add("img-cont"),e.appendChild(C(x,"Tools & Screws Cake $ 50.99")),e.appendChild(C(b,"Formula 1 Cake Set $ 29.99")),e.appendChild(C(v,"Electric Tools Cake $ 15.50")),e.appendChild(C(y,"Rusty Tools Cake $ 45.05")),e.appendChild(C(w,"All In One Box Cake $ 70.00")),t.appendChild(e),n.appendChild(t),n}())}})),a.addEventListener("click",(t=>{if(n.classList.contains("about")){if(t.target.classList.contains("current"))return;O(),n.textContent="",document.querySelector(".info").appendChild(function(){const n=document.createElement("div");n.classList.add("about-content");const t=document.createElement("div");t.classList.add("about-txt");const e=document.createElement("div");return e.classList.add("about-img"),n.appendChild(t),t.appendChild(B("About Us")),t.appendChild(B("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien tempor aliquam id est. Fringilla tortor tristique tincidunt at interdum tristique. Posuere vulputate amet sit montes, ut id ullamcorper.")),n.appendChild(e),e.appendChild(S(L)),e.appendChild(S(E)),e.appendChild(S(k)),n}())}})),r.addEventListener("click",(t=>{if(n.classList.contains("contact")){if(t.target.classList.contains("current"))return;O(),n.textContent="",document.querySelector(".info").appendChild(function(){const n=document.createElement("div");n.classList.add("contact-content");const t=document.createElement("hr");t.classList.add("contact-line"),n.appendChild(t);const e=document.createElement("div");e.classList.add("contact-box");const o=document.createElement("div");o.classList.add("contact-header"),o.appendChild(q("Contact Us"));const i=document.createElement("i");i.classList.add("arrow"),i.classList.add("down"),o.appendChild(i);const a=document.createElement("div");a.classList.add("contact-info"),a.appendChild(q("Monday - Saturday")),a.appendChild(q("+1-222-333-444")),a.appendChild(q("1:00PM - 10:00PM")),a.appendChild(q("beepboop@gmail.com"));const r=document.createElement("div");r.classList.add("contact-icons");const c=document.createElement("iconify-icon");c.setAttribute("icon","akar-icons:facebook-fill"),M(c);const s=document.createElement("a");s.href="https://github.com/FOXYSAMU",s.target="_blank";const d=document.createElement("iconify-icon");d.setAttribute("icon","akar-icons:github-fill"),M(d);const l=document.createElement("iconify-icon");l.setAttribute("icon","akar-icons:twitter-fill"),M(l),r.appendChild(c),r.appendChild(s),s.appendChild(d),r.appendChild(l);const p=document.createElement("div");p.classList.add("order-box");const u=document.createElement("div");u.classList.add("order-header"),p.appendChild(u),u.appendChild(q("Order Now"));const m=document.createElement("i");m.classList.add("arrow"),m.classList.add("down"),u.appendChild(m);const h=document.createElement("div");h.classList.add("order-info"),p.appendChild(h);const f=document.createElement("div");f.classList.add("order-icons"),h.appendChild(f),f.appendChild(z(A)),f.appendChild(z(j)),f.appendChild(z(I));const g=document.createElement("img");return g.src=T,g.setAttribute("draggable","false"),g.classList.add("map"),h.appendChild(g),n.appendChild(e),e.appendChild(o),e.appendChild(a),e.appendChild(r),n.appendChild(p),n}())}}))}(),O()}()})()})();