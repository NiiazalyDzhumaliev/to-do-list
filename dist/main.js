(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()(!1);o.push([e.id,"/* * {\n\tpadding: 0;\n\tmargin: 0;\n\tbox-sizing: border-box;\n} */\n",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,r,o,i=e[1]||"",a=e[3];if(!a)return i;if(t&&"function"==typeof btoa){var c=(n=a,r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(o," */")),s=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[i].concat(s).concat([c]).join("\n")}return[i].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],s=t.base?c[0]+t.base:c[0],l=n[s]||0,d="".concat(s," ").concat(l);n[s]=l+1;var u=a(d),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:d,updater:v(f,t),references:1}),r.push(d)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function v(e,t){var n,r,o;if(t.singleton){var i=m++;n=p||(p=s(t)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else n=s(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var s=c(e,t),l=0;l<n.length;l++){var d=a(n[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=s}}}}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(28);t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o="projects";let i=localStorage.getItem("task.selectProjectId");const a=JSON.parse(localStorage.getItem(o))||[],c=document.querySelector(".project"),s=document.getElementById("project-form");function l(){localStorage.setItem(o,JSON.stringify(a)),(()=>{const e=document.createElement("ul"),t=document.createElement("li");a.forEach((e=>{t.innerHTML=e.name,t.dataset.projectId=e.id,t.classList.add("project-name"),e.id===i&&t.classList.add("active-list")})),e.appendChild(t),c.appendChild(e)})()}c.addEventListener("click",(e=>{"li"===e.target.tagName.toLowerCase()&&(i=e.target.dataset.projectId,l())}));const d=[],u=document.getElementById("todolist-form");document.getElementById("list-submit").addEventListener("click",(e=>{const t=document.getElementById("title").value,n=document.getElementById("description").value,r=document.getElementById("date").value,o=document.querySelector("input[name='priority']:checked").value;d.push(((e,t,n,r)=>({title:e,description:t,dueDate:n,prior:r}))(t,n,r,o)),u.reset(),e.preventDefault(),function(){const e=document.querySelector(".todolist"),t=document.createElement("ul");t.setAttribute("class","todolist-list"),e.appendChild(t),t.innerHTML+=`<li>${d[d.length-1].title}</li>`,t.innerHTML+=`<li>${d[d.length-1].description}</li>`,t.innerHTML+=`<li>${d[d.length-1].dueDate}</li>`,t.innerHTML+=`<li>${d[d.length-1].prior}</li>`}()})),document.getElementById("project-btn").addEventListener("click",(e=>{const t=document.getElementById("project-name").value;if(null==t||""===t)return!1;a.push((e=>({id:Date.now().toString(),name:e,tasks:[]}))(t)),l(),s.reset(),e.preventDefault()}))})()})();