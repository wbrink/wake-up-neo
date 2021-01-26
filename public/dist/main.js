(()=>{const e=document.querySelector("#matrixStylesheet"),t=document.querySelector("#clearChoice"),o=localStorage.getItem("pill"),n=document.querySelector(".slider"),r=document.querySelector(".button"),l=document.querySelector(".hero"),a=document.querySelector("nav"),s=document.querySelector("body"),c=document.querySelector(".heroMessage");let u=document.querySelectorAll(".heroGrid"),d=document.querySelector("#hamburger"),i=document.querySelector(".nav-list"),m="closed";if(document.body.scrollTop=0,document.documentElement.scrollTop=0,window.innerWidth<1025){let e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)}var y=anime.timeline({autoplay:!1});let h;function p(e){const t=[];for(let o=0;o<e;o++){for(;;){const e=Math.random();if(e<=.8||e>=.2){t.push(e);break}}const e=Math.random();t.push(e)}return t}function g(e){return new Promise(((t,o)=>{setTimeout((()=>t()),e)}))}function b(){document.body.scrollTop=0,document.documentElement.scrollTop=0,c.style.opacity=0,n.style.backgroundColor="rgb(241, 33, 61)",r.style.transform="translateX(75px) translateY(-50%)",e.setAttribute("href","./public/matrix.css"),h="red",s.style.overflow="auto",y.play()}function f(){document.body.scrollTop=0,document.documentElement.scrollTop=0,console.log("blue Pill"),y.restart(),y.pause(),c.style.color="rgb(0,0,0)",c.style.opacity=1,console.log("paused"),n.style.backgroundColor="rgb(0, 222, 252)",r.style.transform="translateX(0px) translateY(-50%)",e.setAttribute("href","#"),h="blue",s.style.overflow="auto",u.forEach((e=>{e.style.opacity=0}))}y.add({targets:".heroGrid",opacity:[0,1],delay:anime.stagger(100),easing:"easeInQuad"}).add({targets:c,opacity:[0,1],color:["rgb(255, 255, 255)","rgb(0,0,0)"],easing:"easeInQuad"},"-=900"),window.matchMedia("(max-width: 1024px)").addEventListener("change",(e=>{if(e.matches){console.log("changed to mobile"),i.style.transform="translateX(-100%)";let e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)}})),window.matchMedia("(min-width: 1025px)").addEventListener("change",(e=>{e.matches&&(i.style.transform="translateX(0%)",m="closed")})),window.addEventListener("resize",(e=>{let t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${t}px`)})),d.addEventListener("click",(e=>{"closed"===m?(i.style.transform="translateX(0%)",m="open"):(i.style.transform="translateX(-100%)",m="closed")})),"red"===o?b():"blue"===o?f():(h="blue",u.forEach((e=>{e.style.opacity=0}))),t.addEventListener("click",(e=>{console.log("button clicked"),localStorage.removeItem("pill"),location.reload()})),n.addEventListener("click",(e=>{"blue"===h?b():"red"==h&&f()})),anime.timeline({easing:"easeOutQuad",duration:750,delay:200}).add({targets:[a],opacity:[0,1],translateX:[-100,0]}).add({targets:l,opacity:[0,1],translateY:[75,0]},"-=500").add({targets:document.querySelector(".heroMessage"),opacity:[0,1],color:"rgb(0,0,0)",translateX:[0,"-50%"],translateY:["-50%","-50%"],duration:1e3,easing:"easeOutQuint"},"-=500"),console.log("done"),function(){const t=["Wake up, Neo...","The matrix has you...","You take the blue pill, the story ends and you wake up in your bed and believe whatever you want to believe... You take the red pill you stay in wonderland and I show you how deep the rabbit hole goes\n\n"],r=(document.querySelector(".matrixContainer"),document.querySelector(".body")),l=document.querySelector(".text"),a=(document.querySelector(".blinkingCursor"),document.querySelector(".userInputMatrix")),c=document.querySelector(".matrixInput"),u=document.querySelector(".instructions");if("red"===o)return e.setAttribute("href","./public/matrix.css"),void document.querySelector(".matrixContainer").remove();if("blue"===o)return;c.addEventListener("keydown",(e=>{if(c.textContent.length<=11){if(console.log(c.textContent.length),"Enter"!==e.key)return!0;{e.preventDefault();const o="blue"===(t=(t=c.textContent.trim()).toLowerCase())?"blue":"red"===t&&"red";c.textContent="",o?"red"===o?(document.querySelector(".matrixContainer").remove(),r.classList.remove("collapse"),b(),localStorage.setItem("pill","red"),s.style.overflow="auto"):"blue"===o&&(document.querySelector(".matrixContainer").remove(),n.style.display="block",r.classList.remove("collapse"),f(),localStorage.setItem("pill","blue"),s.style.overflow="auto"):u.textContent="Error: CommandNotFoundException (Enter 'Blue/'Red')"}}else{if("Backspace"===e.key)return!0;e.preventDefault()}var t}));let d=7e3;g(d).then((e=>{document.body.scrollTop=0,document.documentElement.scrollTop=0,r.classList.add("collapse"),s.style.overflow="hidden",console.log("outer settimeout")})),g(d+=3e3).then((()=>{let e=p(t[0].length);num=0;for(let o=0;o<t[0].length;o++)setTimeout((()=>{l.textContent+=t[0][o]}),num+=500*e[o])})).then((e=>{console.log(e)})),g(d+=7e3).then((()=>{l.textContent="";let e=p(t[1].length);num=0;for(let o=0;o<t[1].length;o++)setTimeout((()=>{l.textContent+=t[1][o]}),num+=400*e[o])})),g(d+=7e3).then((()=>{l.textContent="";let e=p(t[2].length);num=0;for(let o=0;o<t[2].length;o++)setTimeout((()=>{l.textContent+=t[2][o]}),num+=200*e[o])})),g(d+=24e3).then((()=>{a.style.display="flex",u.style.display="block",c.focus()}))}()})();