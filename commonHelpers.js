import{a as q,i as f,S as x}from"./assets/vendor-77136e93.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const E="42651969-17d73580612059adec8ce0b1d",P="https://pixabay.com/api/";async function p(r,o,s){return await(await q.get(`${P}?key=${E}&q=${r}&page=${o}&per_page=${s}`)).data}const h="/goit-js-hw-12/assets/error-5bd6dd9a.svg";function m(){f.show({message:"Sorry, there are no images matching your search query. Please, try again!",maxWidth:"340px",iconUrl:h,backgroundColor:"#ef4040",theme:"dark",color:"#fafafb",timeout:3e3,position:"topRight"})}function k(){f.show({message:"We're sorry, but you've reached the end of search results.",maxWidth:"340px",iconUrl:h,backgroundColor:"#ef4040",theme:"dark",color:"#fafafb",timeout:3e3,position:"topRight"})}function C(){f.show({message:"Sorry, you have an empty string",maxWidth:"340px",iconUrl:h,backgroundColor:"#ef4040",theme:"dark",color:"#fafafb",timeout:3e3,position:"topRight"})}function y(r,o){const s=o.map(({webformatURL:i,largeImageURL:e,tags:t,likes:c,views:v,comments:$,downloads:S})=>`<li class="li-im">
            <a href="${e}">
                <img class="image" src="${i}" alt="${t}">
            </a>
            <ul class="info">
                <li class="descr">
                    <h2 class="descr-h">Likes</h2>
                    <p class="descr-p">${c}</p>
                </li>
                <li class="descr">
                    <h2 class="descr-h">Views</h2>
                    <p class="descr-p">${v}</p>
                </li>
                <li class="descr">
                    <h2 class="descr-h">Comments</h2>
                    <p class="descr-p">${$}</p>
                </li>
                <li class="descr">
                    <h2 class="descr-h">Downloads</h2>
                    <p class="descr-p">${S}</p>
                </li>
            </ul>
        </li>`).join("");r.insertAdjacentHTML("beforeend",s)}const M=document.querySelector("form"),l=document.querySelector(".list"),g=document.querySelector(".loader"),a=document.querySelector(".load-more"),O=document.querySelector("#value");let n,b;const d=15;function w(){g.style.display="block"}function u(){g.style.display="none"}function L(){new x(".list li a",{captionDelay:300,captions:!0,captionsData:"alt",captionClass:"color-style"}).refresh()}M.addEventListener("submit",function(r){r.preventDefault(),w(),l.innerHTML="",a.style.display="none";const o=O.value.trim();if(!o){C(),u();return}n=1,p(o,n,d).then(s=>{if(s.hits.length===0)throw new Error("No images found");y(l,s.hits),L(),a.style.display="block"}).catch(()=>{m()}).finally(()=>{u()}),b=o});a.addEventListener("click",r=>{r.preventDefault(),w(),n++,p(b,n,d).then(o=>{const s=o.totalHits,i=Math.floor(s/d);if(n>i)k(),a.style.display="none";else{y(l,o.hits),L();let t=document.querySelector(".list li").getBoundingClientRect();window.scrollBy({top:2.25*t.height,behavior:"smooth"})}}).catch(()=>{m()}).finally(()=>{u()})});
//# sourceMappingURL=commonHelpers.js.map
