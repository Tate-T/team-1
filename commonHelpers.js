(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const B of i.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&n(B)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();const a=[{id:1,name:"Високосний калькулятор",category:"numerical"},{id:2,name:"Вгадай число",category:"numerical"},{id:3,name:"Камінь-Ножиці-Папір",category:"game"},{id:4,name:"Калькулятор",category:"numerical"},{id:5,name:"Калькулятор часу",category:"numerical"},{id:6,name:"Google динозаврик",category:"game"},{id:7,name:"Футбол",category:"game"},{id:8,name:"Найбільше число",category:"numerical"},{id:9,name:"Наша команда",category:"acquaintance"},{id:10,name:"Вчений",category:"acquaintance"}];let L=0;document.querySelector("#numerical").addEventListener("click",()=>{L==0?(a.forEach(e=>{document.querySelector(`#section-${e.id}`).style.display="none"}),a.forEach(e=>{e.category==="numerical"&&(document.querySelector(`#section-${e.id}`).style.display="block")}),L=1):L==1&&(a.forEach(e=>{document.querySelector(`#section-${e.id}`).style.display="block"}),L=0)});let C=0;document.querySelector("#game").addEventListener("click",()=>{C==0?(a.forEach(e=>{document.querySelector(`#section-${e.id}`).style.display="none"}),a.forEach(e=>{e.category==="game"&&(document.querySelector(`#section-${e.id}`).style.display="block")}),C=1):C==1&&(a.forEach(e=>{document.querySelector(`#section-${e.id}`).style.display="block"}),C=0)});let $=0;document.querySelector("#acquaintance").addEventListener("click",()=>{$==0?(a.forEach(e=>{document.querySelector(`#section-${e.id}`).style.display="none"}),a.forEach(e=>{e.category==="acquaintance"&&(document.querySelector(`#section-${e.id}`).style.display="block")}),$=1):$==1&&(a.forEach(e=>{document.querySelector(`#section-${e.id}`).style.display="block"}),$=0)});const N=document.querySelector(".header");console.log(N);const K=N.querySelector(".header__button");console.log(K);const k=N.querySelector(".header__acardions");console.log(k);let M=0;K.addEventListener("click",()=>{M===0?(k.classList.add("header__true"),k.style.transform="scale(1)",M=1):M===1&&(k.classList.remove("header__true"),k.style.transform="scale(0)",M=0)});let w=0;const Z=document.querySelectorAll(".container");console.log(Z);const ee=N.querySelector(".header__lable");ee.addEventListener("change",()=>{w===0?(document.querySelector(".header__circle").style.transform="translate(100%)",document.querySelectorAll(".container").forEach(e=>{e.style.backgroundColor="#212121"}),document.querySelectorAll("h2").forEach(e=>{e.style.color="white"}),document.querySelectorAll("a").forEach(e=>{e.style.color="white"}),document.querySelectorAll("p").forEach(e=>{e.style.color="white"}),document.querySelectorAll("h1").forEach(e=>{e.style.color="white"}),document.querySelectorAll("h3").forEach(e=>{e.style.color="white"}),document.querySelector(".scientist").querySelectorAll("p ,h3").forEach(e=>{e.style.color="black"}),document.querySelector(".dinosour__minitext").style.color="black",document.querySelector(".header").style.backgroundColor="#212121",document.querySelector(".footer").style.backgroundColor="#212121",document.querySelector(".dinosour__box").style.backgroundColor="#FFF",w=1):w===1&&(document.querySelectorAll(".container").forEach(e=>{e.style.backgroundColor="#FFF"}),document.querySelectorAll("h2").forEach(e=>{e.style.color="black"}),document.querySelectorAll("a").forEach(e=>{e.style.color="black"}),document.querySelectorAll("p").forEach(e=>{e.style.color="black"}),document.querySelectorAll("h1").forEach(e=>{e.style.color="black"}),document.querySelectorAll("h3").forEach(e=>{e.style.color="black"}),document.querySelector(".header").style.backgroundColor="#FFF",document.querySelector(".footer").style.backgroundColor="#FFF",document.querySelector(".header__circle").style.transform="translate(0px)",document.querySelector(".rps__comp").style.color="white",w=0)});const F=document.querySelector(".year__input"),u=document.querySelector(".year__result"),te=document.querySelector(".year__form");te.addEventListener("submit",e=>(isNaN(F.value)?(u.style.color="grey",u.innerHTML="Це не число!",u.style.visibility="visible"):F.value%4===0?(u.style.visibility="visible",u.style.color="#039900",u.innerHTML="Ви народилися у високосний рік!"):(u.style.color="#900",u.innerHTML="Ви народилися не у високосний рік!",u.style.visibility="visible"),e.preventDefault(),console.log(F.value)));const T=document.querySelector(".quess__inpu");console.log(T);document.querySelector(".quess__button").addEventListener("click",e=>{e.preventDefault();const o=Math.round(Math.random()*(10-0)+0);console.log(o),console.log(Number(T.value)),console.log(Number(T.value)==o),Number(T.value)==o?(document.querySelector(".quess__answer").style.display="flex",document.querySelector(".quess__answer").style.color="#039900",document.querySelector(".quess__answer").innerHTML='Вітаю, ви вгадали число!<span class="quess__span"> </span>',document.querySelector(".quess__span").textContent=` ${o}`):(document.querySelector(".quess__answer").style.display="flex",document.querySelector(".quess__answer").style.color="#900",document.querySelector(".quess__answer").innerHTML='Ви програли, комп’ютер загадав <span class="quess__span"> </span>',document.querySelector(".quess__span").textContent=` ${o}`)});document.querySelector(".squad__button").addEventListener("click",e=>{e.preventDefault();let o=-1;for(let t=0;t<Number(document.querySelector(".squad__inpu").value);t++)t*t==Number(document.querySelector(".squad__inpu").value)&&(o=t);o!==-1?(document.querySelector(".squad__answer").style.display="flex",document.querySelector(".squad__answer").style.color="#039900",document.querySelector(".squad__answer").innerHTML='Квадрат цього числа  <span class="squad__span"> </span>',document.querySelector(".squad__span").textContent=` ${o}`):o==-1&&(document.querySelector(".squad__answer").style.display="flex",document.querySelector(".squad__answer").style.color="#900",document.querySelector(".squad__answer").innerHTML="В цього числа немає цілого квадрата")});const P=document.querySelectorAll(".rps__button:nth-child(1)"),oe=P[0],re=P[1],ne=P[2],r=document.querySelector(".rps__result"),y=document.querySelector(".rps__comp");let _=document.querySelector(".Comp-value"),v=document.querySelector(".Your-value");oe.addEventListener("click",()=>{const e=Math.round(Math.random()*2+1);return e===1?(r.style.visibility="visible",r.style.color="gray",r.innerHTML="Нічия!",y.textContent="Варіант комп’ютера: камінь"):e===2?(r.style.visibility="visible",r.style.color="#039900",r.innerHTML="Ви виграли раунд!",v.textContent=+v.textContent+1,y.textContent="Варіант комп’ютера: ножниці"):e===3&&(r.style.visibility="visible",r.style.color="#900",r.innerHTML="Комп’ютер виграв раунд!",_.textContent=+_.textContent+1,y.textContent="Варіант комп’ютера: папір"),r});re.addEventListener("click",()=>{const e=Math.round(Math.random()*2+1);return e===2?(r.style.visibility="visible",r.style.color="gray",r.innerHTML="Нічия!",y.textContent="Варіант комп’ютера: ножниці"):e===3?(r.style.visibility="visible",r.style.color="#039900",r.innerHTML="Ви виграли раунд!",v.textContent=+v.textContent+1,y.textContent="Варіант комп’ютера: папір"):e===1&&(r.style.visibility="visible",r.style.color="#900",r.innerHTML="Комп’ютер виграв раунд!",_.textContent=+_.textContent+1,y.textContent="Варіант комп’ютера: камінь"),r});ne.addEventListener("click",()=>{const e=Math.round(Math.random()*2+1);return e===3?(r.style.visibility="visible",r.style.color="gray",r.innerHTML="Нічия!",y.textContent="Варіант комп’ютера: папір"):e===1?(r.style.visibility="visible",r.style.color="#039900",r.innerHTML="Ви виграли раунд!",v.textContent=+v.textContent+1,y.textContent="Варіант комп’ютера: камінь"):e===2&&(r.style.visibility="visible",r.style.color="#900",r.innerHTML="Комп’ютер виграв раунд!",_.textContent=+_.textContent+1,y.textContent="Варіант комп’ютера: ножниці"),r});let g,f;document.querySelector("#dor").addEventListener("click",e=>{const o=Number(document.querySelector("#firste").value),t=Number(document.querySelector("#seconde").value);e.preventDefault(),f=="+"?g=o+t:f=="-"?g=o-t:f=="*"?g=o*t:f=="/"&&(g=o/t),document.querySelector(".calc__answer").textContent=g});document.querySelector("#plu").addEventListener("click",e=>{e.preventDefault(),f="+"});document.querySelector("#mno").addEventListener("click",e=>{e.preventDefault(),f="*"});document.querySelector("#min").addEventListener("click",e=>{e.preventDefault(),f="-"});document.querySelector("#dil").addEventListener("click",e=>{e.preventDefault(),f="/"});const le=document.querySelector(".time-calc__form"),b=document.querySelector(".time-calc__input");let ce=document.querySelector(".time-calc__days"),se=document.querySelector(".time-calc__hours"),ie=document.querySelector(".time-calc__minutes");le.addEventListener("submit",e=>{if(isNaN(b.value)||b.value<0)return e.preventDefault(),b.value="";e.preventDefault();let o=Math.floor(b.value/1440),t=Math.floor(b.value%1440/60),n=Math.floor(b.value%60);ce.textContent=o,se.textContent=t,ie.textContent=n});let p=0,x=0,E=0;const q=document.querySelector("#dino"),R=document.querySelector("#cucktus");q.getBoundingClientRect();R.getBoundingClientRect();document.querySelector(".dinosour__box").addEventListener("click",()=>{p===0?(Y(),q.querySelector("use").setAttribute("href","./img/symbol-defs.svg#icon-male"),p=1):p===1&&(p=2)});document.addEventListener("keydown",()=>{de()});function de(){q.querySelector("use").setAttribute("href","./img/symbol-defs.svg#icon-child"),q.style.animation="ease-out 1s dino",setTimeout(()=>{q.querySelector("use").setAttribute("href","./img/symbol-defs.svg#icon-male"),q.style.animation="none"},1e3)}function Y(){let e=q.getBoundingClientRect(),o=R.getBoundingClientRect();if(p===2){p=0;return}e.right>o.left&&e.left<o.right&&e.bottom>o.top&&e.top<o.bottom&&(E=-40,x=0,document.querySelector(".dinosour__minitext").textContent=x,q.querySelector("use").setAttribute("href","./img/symbol-defs.svg#icon-user"),p=2),Math.abs(e.left-o.left)<1.5&&(x++,document.querySelector(".dinosour__minitext").textContent=x),E>700&&(E=-40),requestAnimationFrame(ae),E+=3,console.log(x),R.style.right=`${E}px`,setTimeout(()=>Y(),10)}var W=0,ue=document.querySelector(".dinosour__box");function ae(){W--,ue.style.backgroundPosition=W+"px 90%"}let A=!1,X=null;const d=document.querySelector(".football__stadium"),m=document.querySelector(".football__ball"),ye=document.querySelector(".football__text"),G=document.querySelector("#start"),D=document.querySelector("#stop"),j=document.querySelector(".football__overlay");let I=0;D.disabled=!0;function me(){A||(X=setInterval(qe,1100),A=!0,G.disabled=!0,D.disabled=!1,j.style.display="none")}function fe(){A&&(clearInterval(X),A=!1,G.disabled=!1,D.disabled=!0,j.style.display="block")}G.addEventListener("click",me);D.addEventListener("click",fe);d.addEventListener("click",e=>{let o=d.getBoundingClientRect(),t={top:e.clientY-o.top-d.clientTop-m.clientHeight/2,left:e.clientX-o.left-d.clientLeft-m.clientWidth/2};t.top<0&&(t.top=0),t.left<0&&(t.left=0),t.left+m.clientWidth>d.clientWidth&&(t.left=d.clientWidth-m.clientWidth),t.top+m.clientHeight>d.clientHeight&&(t.top=d.clientHeight-m.clientHeight),m.style.transform=`translate(${t.left}px, ${t.top}px) rotate(${t.left}deg)`,U()});const z=document.querySelector("#one"),J=document.querySelector("#two"),Q=document.querySelector("#three");function O(e,o,t){let n=Math.round(Math.random()*(e-t)),l=Math.round(Math.random()*(o-t));return{x:n,y:l}}function qe(){let e=d.clientWidth,o=d.clientHeight,t=50,n=O(e,o,t),l=O(e,o,t),i=O(e,o,t);z.style.transform=`translate(${n.x}px, ${n.y}px)`,J.style.transform=`translate(${l.x}px, ${l.y}px)`,Q.style.transform=`translate(${i.x}px, ${i.y}px)`,U()}function U(){let e=m.getBoundingClientRect(),o=[z,J,Q].map(t=>t.getBoundingClientRect());for(let t of o)e.left<t.right&&e.right>t.left&&e.top<t.bottom&&e.bottom>t.top&&(I++,ye.innerHTML=`Очків: <span class="football__score">${I}</span>`)}function pe(){let e=Math.max(Number(document.querySelector("#threeone").value),Number(document.querySelector("#threetwo").value),Number(document.querySelector("#threethree").value));e!==""&&(document.querySelector(".three__span").textContent=e)}document.querySelectorAll("#threeone, #threetwo, #threethree").forEach(e=>{e.addEventListener("change",pe)});const be=document.querySelector("#left"),Se=document.querySelector("#right"),V=document.querySelector(".team__list"),H=document.querySelector("#first"),S=document.querySelector("#second");Se.addEventListener("click",()=>{V.style.transform="translate(-160px, 0px)",H.style.width="18px",H.style.fill="#D9D9D9",S.style.width="30px",S.style.fill="#797979",S.style.x="26px"});be.addEventListener("click",()=>{V.style.transform="translate(0px, 0px)",S.style.width="18",S.style.x="36px",S.style.fill="#D9D9D9",H.style.width="30",H.style.fill="#797979"});const c=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}];let s;document.querySelector("#btn-born-19century").addEventListener("click",()=>{c.forEach(e=>{if(s=e.id,document.querySelector(`#scientist-${s}`).style.border="none",e.born>1800&&e.born<1900){const o=e.id;document.querySelector(`#scientist-${o}`).style.border="2px, red, solid"}})});document.querySelector("#btn-einstein-birth").addEventListener("click",()=>{c.forEach(e=>{s=e.id,document.querySelector(`#scientist-${s}`).style.border="none"}),document.querySelector("#scientist-1").style.border="2px, red, solid"});document.querySelector("#btn-sort-alphabetically").addEventListener("click",()=>{let e=0,o=[];c.forEach(t=>{s=t.id,document.querySelector(`#scientist-${s}`).style.border="2px, red, solid",o.push(t.name)}),o.sort((t,n)=>t.localeCompare(n)),console.log(o),o.forEach(t=>{for(let n=0;n<c.length;n++)if(t==c[n].name){const l=c[n].id;document.querySelector(`#scientist-${l}`).style.order=e,e++}}),e=0});document.querySelector("#btn-surname-c").addEventListener("click",()=>{c.forEach(e=>{if(s=e.id,document.querySelector(`#scientist-${s}`).style.border="none",e.surname[0]=="C"){const o=e.id;document.querySelector(`#scientist-${o}`).style.border="2px, red, solid"}})});document.querySelector("#btn-sort-lifespan").addEventListener("click",()=>{let e=0,o=[];c.forEach(t=>{s=t.id,document.querySelector(`#scientist-${s}`).style.border="2px, red, solid",o.push(t.dead-t.born)}),o.sort((t,n)=>t-n),console.log(o),o.forEach(t=>{for(let n=0;n<c.length;n++)if(t==c[n].dead-c[n].born){const l=c[n].id;document.querySelector(`#scientist-${l}`).style.order=e,e++}}),e=0});document.querySelector("#btn-delete-a").addEventListener("click",()=>{c.forEach(e=>{if(s=e.id,document.querySelector(`#scientist-${s}`).style.border="none",e.name[0]=="A"){const o=e.id;document.querySelector(`#scientist-${o}`).textContent=""}})});document.querySelector("#btn-latest-born").addEventListener("click",()=>{let e=0;c.forEach(o=>{s=o.id,document.querySelector(`#scientist-${s}`).style.border="none",e<o.born&&(e=o.born)}),c.forEach(o=>{if(e==o.born){const t=o.id;document.querySelector(`#scientist-${t}`).style.border="2px, red, solid"}})});document.querySelector("#btn-longest-shortest-lived").addEventListener("click",()=>{let e=0,o=0;c.forEach(t=>{s=t.id,document.querySelector(`#scientist-${s}`).style.border="none",o<t.dead-t.born&&(o=t.dead-t.born)}),e=o,c.forEach(t=>{e>t.dead-t.born&&(e=t.dead-t.born)}),c.forEach(t=>{if(o==t.dead-t.born){const n=t.id;document.querySelector(`#scientist-${n}`).style.border="2px, red, solid"}if(e==t.dead-t.born){const n=t.id;document.querySelector(`#scientist-${n}`).style.border="2px, red, solid"}})});document.querySelector("#btn-same-initials").addEventListener("click",()=>{c.forEach(e=>{if(s=e.id,document.querySelector(`#scientist-${s}`).style.border="none",e.surname[0]==e.name[0]){const o=e.id;document.querySelector(`#scientist-${o}`).style.border="2px, red, solid"}})});const he=document.querySelector(".header__minitext");he.addEventListener("click",()=>{document.querySelector(".backdrope").style.display="flex",document.body.style.overflow="hidden",document.querySelector(".modale__text").style.display="flex",document.querySelector(".modale__minitext").style.display="flex",document.querySelector(".modale__button").style.display="flex",document.querySelector(".modale__input").style.display="flex",document.querySelector(".modale__thank").style.display="none"});const _e=document.querySelector(".modale__cancel");_e.addEventListener("click",()=>{document.querySelector(".backdrope").style.display="none",document.body.style.overflow="scroll"});const ve=document.querySelector(".modale__button");ve.addEventListener("click",()=>{document.querySelector(".modale__input").value!==""?(document.querySelector(".modale__text").style.display="none",document.querySelector(".modale__minitext").style.display="none",document.querySelector(".modale__button").style.display="none",document.querySelector(".modale__input").style.display="none",document.querySelector(".modale__thank").style.display="flex",document.querySelector(".header__minitext").textContent=`Вітаємо, ${document.querySelector(".modale__input").value}!`):document.querySelector(".modale__input").style.border="red solid 2px"});const h=document.querySelector(".backdrop"),ge=document.querySelector(".thank__button"),xe=document.querySelector(".footer__button");ge.addEventListener("click",()=>{h.style.opacity="0",h.style.visibility="hidden",h.style.pointerEvents="none"});xe.addEventListener("click",()=>{h.style.opacity="1",h.style.visibility="visible",h.style.pointerEvents="initial"});
//# sourceMappingURL=commonHelpers.js.map
