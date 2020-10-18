(()=>{"use strict";var t={28:(t,e,n)=>{n.d(e,{Z:()=>a});var i=n(645),o=n.n(i)()(!1);o.push([t.id,'\n.active {\n  display: block;\n}\n\n.inactive,\n#todolist-form {\n  display: none;\n}\n\n.all-tasks {\n  width: 50%;\n}\n\n#container {\n  width: 30%;\n  margin: auto;\n  position: relative;\n  min-height: 100vh;\n  padding-bottom: 3rem;\n}\n\n.active-list {\n  font-weight: bold;\n  border-bottom: 2px solid orangered;\n}\n\n.btns {\n  display: flex;\n  justify-content: space-between;\n}\n\n.btns button {\n  margin: 20px;\n}\n\n#content {\n  margin-top: 32px;\n  margin-bottom: 32px;\n}\n\n.todo {\n  width: 100%;\n  border: 0;\n  padding: 20px;\n  font-weight: 500;\n  font-size: 18px;\n  text-align: left;\n}\n\n.card-body,\n.todo {\n  position: relative;\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.16), 0 4px 4px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.todo:hover {\n  background: #ccc;\n  color: white;\n}\n\n.card-body:hover {\n  box-shadow: 1px 14px 28px rgba(0, 0, 0, 0.25), 1px 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.card-body div {\n  padding: 10px 10px;\n}\n\n.card-body button {\n  width: 50%;\n  padding: 10px 0;\n  border: 1px solid black;\n}\n\n.card-body button:hover {\n  background: blue;\n  font-weight: bold;\n}\n\n.edit {\n  margin-top: 16px;\n}\n\n#Submit:hover,\n.update:hover,\n.cancel:hover {\n  background-color: blue;\n  color: white;\n}\n\n#Title,\n#Description,\ninput[name="projectTitle"] {\n  width: 100%;\n  padding: 14px 12px;\n  font-size: 18px;\n  margin-top: 16px;\n  border: 1px solid black;\n}\n\n.fa {\n  margin-right: 14px;\n}\n\n.fa.fa-caret-down {\n  float: right;\n}\n\n.card-body.projects {\n  padding: 3% 5%;\n  margin-bottom: 5%;\n  border-bottom: 2px solid black;\n}\n\n.todoLi {\n  font-weight: 400;\n  font-size: 18px;\n  margin-top: 2%;\n}\n\n.todoLi li {\n  margin-bottom: 2%;\n}\n\n.titleProject {\n  font-size: 27px;\n  width: 100%;\n  background: whitesmoke;\n  text-align: center;\n  font-weight: bold;\n  padding: 10px;\n  margin-bottom: 2%;\n  color: #9b9292;\n}\n',""]);const a=o},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,i,o,a=t[1]||"",d=t[3];if(!d)return a;if(e&&"function"==typeof btoa){var r=(n=d,i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(o," */")),c=d.sources.map((function(t){return"/*# sourceURL=".concat(d.sourceRoot||"").concat(t," */")}));return[a].concat(c).concat([r]).join("\n")}return[a].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(i)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(o[d]=!0)}for(var r=0;r<t.length;r++){var c=[].concat(t[r]);i&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},379:(t,e,n)=>{var i,o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function d(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function r(t,e){for(var n={},i=[],o=0;o<t.length;o++){var r=t[o],c=e.base?r[0]+e.base:r[0],s=n[c]||0,l="".concat(c," ").concat(s);n[c]=s+1;var u=d(l),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:l,updater:b(p,e),references:1}),i.push(l)}return i}function c(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var a=n.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var d=o(t.insert||"head");if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(e)}return e}var s,l=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function u(t,e,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var a=document.createTextNode(o),d=t.childNodes;d[e]&&t.removeChild(d[e]),d.length?t.insertBefore(a,d[e]):t.appendChild(a)}}function p(t,e,n){var i=n.css,o=n.media,a=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var m=null,f=0;function b(t,e){var n,i,o;if(e.singleton){var a=f++;n=m||(m=c(e)),i=u.bind(null,n,a,!1),o=u.bind(null,n,a,!0)}else n=c(e),i=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=r(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<n.length;i++){var o=d(n[i]);a[o].references--}for(var c=r(t,e),s=0;s<n.length;s++){var l=d(n[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=c}}}}},e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={id:i,exports:{}};return t[i](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{const t=document.querySelector("[data-lists]"),e=document.querySelector(".delProject"),i="projects";let o=JSON.parse(localStorage.getItem(i))||[];const a=document.getElementById("project-form"),d=()=>{localStorage.setItem(i,JSON.stringify(o)),localStorage.setItem(c,s),h()};t.addEventListener("click",(t=>{"li"===t.target.tagName.toLowerCase()&&(s=t.target.dataset.projectId,d())})),e.addEventListener("click",(()=>{o=o.filter((t=>t.id!==s)),s=null,d()}));const r=document.getElementById("todolist-form");document.getElementById("list-submit").addEventListener("click",(t=>{const e=document.getElementById("title").value,n=document.getElementById("description").value,i=document.getElementById("date").value,a=document.querySelector("input[name='priority']:checked").value;o.find((t=>t.id===s)).tasks.push(((t,e,n,i)=>({id:Date.now().toString(),title:t,description:e,dueDate:n,prior:i}))(e,n,i,a)),r.reset(),r.style.display="none",t.preventDefault(),d()})),document.querySelector(".newtodo").addEventListener("click",(()=>{"none"===document.getElementById("todolist-form").style.display&&(document.getElementById("todolist-form").style.display="block")})),a&&a.addEventListener("submit",(t=>{const e=document.getElementById("project-name").value;return null==e||""===e||(o.push((t=>({id:Date.now().toString(),name:t,tasks:[]}))(e)),d(),t.preventDefault()),!1}));const c="selectedProjectId";let s=localStorage.getItem(c);const l=document.getElementById("content"),u=document.getElementById("container"),p=document.querySelector("[data-lists]"),m=document.querySelector("[data-list-display-container]"),f=document.querySelector("[data-list-title]"),b=document.querySelector("[data-tasks]"),v=t=>{for(;t.firstChild;)t.removeChild(t.firstChild)},h=()=>{v(p),o.forEach((t=>{const e=document.createElement("li");e.dataset.projectId=t.id,e.classList.add("list-name"),e.innerText=t.name,t.id===s&&e.classList.add("active-list"),p.appendChild(e)}));const t=o.find((t=>t.id===s));null==s?m.style.display="none":(m.style.display="",f.innerText=t.name,v(b),(t=>{t.tasks.forEach(((e,n)=>{const i=document.createElement("ul");i.setAttribute("class","todolist-list");const o=document.createElement("button");o.innerText=e.title,i.appendChild(o),b.appendChild(i);const{description:a,dueDate:r,prior:c}=e,s=["Description","DueDate","Priority"],p=[a,r,c],m=document.createElement("i");m.classList.add("fa"),m.classList.add("fa-caret-down"),o.appendChild(m),o.setAttribute("class","todo");const f=document.querySelector("[data-tasks]");f.appendChild(o);const v=document.createElement("div");v.setAttribute("id",e.title+"Wrapper"),v.classList.add("inactive");const h=document.createElement("div");h.classList.add("card-body");const g=["fa-info-circle","fa-sticky-note","fa-calendar-check-o"];for(let t=0;t<3;t+=1){const e=document.createElement("div"),n=document.createElement("h1"),i=document.createElement("i");i.style.float="left",i.classList.add("fa"),i.classList.add(g[t]),i.setAttribute("aria-hidden","true"),n.textContent=""+s[t],n.style.padding="20px",n.style.background="#f7f7f7",n.appendChild(i);const o=document.createElement("p");o.style.padding="20px",o.textContent=""+p[t],e.appendChild(n),e.appendChild(o),h.appendChild(e)}const y=document.createElement("button");y.innerHTML="Edit",y.setAttribute("type","button"),y.setAttribute("class","editBtn"),h.appendChild(y);const E=document.createElement("div");E.style.background="#f7f7f7",E.style.borderTop="5px solid black",E.setAttribute("id",e.title+"Edit"),E.classList.add("inactive"),E.classList.add("card-body"),E.classList.add("edit");const x=document.createElement("p");x.innerHTML=`Editing ${e.title}... `,x.style.textAlign="center",x.style.margin="14px 0px",E.appendChild(x);const L=document.createElement("form");L.setAttribute("id",e.title+"EditForm");const C=["Title","Description","Priority"];for(let t=0;t<C.length;t+=1){const e=document.createElement("label"),n=document.createElement("h1");n.innerHTML=C[t],n.style.background="rgb(247, 247, 247)",n.style.padding="20px",n.style.paddingLeft="14px";const i=document.createElement("i");i.style.paddingTop="20px",i.style.paddingBottom="20px",i.style.paddingLeft="20px",i.style.marginRight="14px",i.style.float="left",i.classList.add("fa"),i.classList.add(g[t]),i.setAttribute("aria-hidden","true"),e.appendChild(i),e.appendChild(n);const o=document.createElement("input");if(o.setAttribute("type","text"),o.setAttribute("name",C[t]),o.setAttribute("id",C[t]),null==t||""===t)return!1;e.appendChild(o),L.appendChild(e),L.appendChild(document.createElement("br")),L.appendChild(document.createElement("br"))}const k=document.createElement("button");k.setAttribute("type","submit"),k.innerHTML="Update",k.setAttribute("class","update"),L.appendChild(k);const w=document.createElement("button");w.setAttribute("type","button"),w.innerHTML="Cancel",w.setAttribute("class","cancel"),L.appendChild(w);const S=L.elements;S[0].value=e.title,S[1].value=e.description,S[2].checked=e.prior,E.appendChild(L),v.appendChild(h),v.appendChild(E),f.appendChild(v),l.appendChild(f),l.appendChild(document.createElement("br")),u.appendChild(l),o.addEventListener("click",(()=>{const t=document.getElementById(e.title+"Wrapper"),n=document.getElementById(e.title+"Edit"),i=t.getAttribute("class"),o=n.getAttribute("class");"active"===i?(t.classList.remove("active"),t.classList.add("inactive")):(t.classList.remove("inactive"),t.classList.add("active")),"active"===o&&(n.classList.remove("active"),n.classList.add("inactive"))})),y.addEventListener("click",(()=>{const t=document.getElementById(e.title+"Edit");t.getAttribute("class").split(" ").includes("active")?(t.classList.remove("active"),t.classList.add("inactive")):(t.classList.remove("inactive"),t.classList.add("active"))})),w.addEventListener("click",(()=>{const t=document.getElementById(e.title+"Edit");t.classList.remove("active"),t.classList.add("inactive")})),k.addEventListener("click",(t=>{t.preventDefault();const n=L.elements;e.title=n[0].value,e.description=n[1].value,d()}));const I=document.createElement("button");I.setAttribute("type","button"),I.setAttribute("class","deleteBtn"),I.innerHTML="Delete",h.appendChild(I),I.addEventListener("click",(e=>{e.preventDefault(),t.tasks.splice(n,1),d()}))}))})(t))},g=document.getElementById("todolist-form");document.querySelector(".newtodo").addEventListener("click",(()=>{(g.style.display="none")&&(g.style.display="block")}));var y=n(379),E=n.n(y),x=n(28);E()(x.Z,{insert:"head",singleton:!1}),x.Z.locals,h()})()})();