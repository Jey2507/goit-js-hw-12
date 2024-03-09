import{a as q,i as u,S as x}from"./assets/vendor-77136e93.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const k="42651969-17d73580612059adec8ce0b1d",E="https://pixabay.com/api/";async function m(o,e,r){return await(await q.get(`${E}?key=${k}&q=${o}&page=${e}&per_page=${r}`)).data}const f="/goit-js-hw-12/assets/error-5bd6dd9a.svg";function y(){u.show({message:"Sorry, there are no images matching your search query. Please, try again!",maxWidth:"340px",iconUrl:f,backgroundColor:"#ef4040",theme:"dark",color:"#fafafb",timeout:3e3,position:"topRight"})}function C(){u.show({message:"We're sorry, but you've reached the end of search results.",maxWidth:"340px",iconUrl:f,backgroundColor:"#ef4040",theme:"dark",color:"#fafafb",timeout:3e3,position:"topRight"})}function O(){u.show({message:"Sorry, you have an empty string",maxWidth:"340px",iconUrl:f,backgroundColor:"#ef4040",theme:"dark",color:"#fafafb",timeout:3e3,position:"topRight"})}function g(o,e){const r=e.map(({webformatURL:i,largeImageURL:t,tags:s,likes:c,views:$,comments:P,downloads:S})=>`<li class="li-im">
            <a href="${t}">
                <img class="image" src="${i}" alt="${s}">
            </a>
            <ul class="info">
                <li class="descr">
                    <h2 class="descr-h">Likes</h2>
                    <p class="descr-p">${c}</p>
                </li>
                <li class="descr">
                    <h2 class="descr-h">Views</h2>
                    <p class="descr-p">${$}</p>
                </li>
                <li class="descr">
                    <h2 class="descr-h">Comments</h2>
                    <p class="descr-p">${P}</p>
                </li>
                <li class="descr">
                    <h2 class="descr-h">Downloads</h2>
                    <p class="descr-p">${S}</p>
                </li>
            </ul>
        </li>`).join("");o.insertAdjacentHTML("beforeend",r)}const p=document.querySelector("form"),l=document.querySelector(".list"),b=document.querySelector(".loader"),a=document.querySelector(".load-more"),R=document.querySelector("#value");let n,w;const h=15,L=new x(".list li a",{captionDelay:300,captions:!0,captionsData:"alt",captionClass:"color-style"});function v(){b.style.display="block"}function d(){b.style.display="none"}function D(){let e=document.querySelector(".list li").getBoundingClientRect();window.scrollBy({top:2.25*e.height,behavior:"smooth"})}function H(){C(),a.style.display="none"}function M(o){h*n>=o?H():D()}p.addEventListener("submit",function(o){o.preventDefault(),v(),l.innerHTML="",a.style.display="none";const e=R.value.trim();if(!e){O(),d();return}n=1,m(e,n,h).then(r=>{if(r.hits.length===0)throw new Error("No images found");g(l,r.hits),L.refresh(),r.totalHits>15&&(a.style.display="block")}).catch(()=>{y()}).finally(()=>{d()}),w=e,p.reset()});a.addEventListener("click",o=>{o.preventDefault(),v(),n++,m(w,n,h).then(e=>{g(l,e.hits),L.refresh();const r=e.totalHits;M(r)}).catch(()=>{y()}).finally(()=>{d()})});
//# sourceMappingURL=commonHelpers.js.map
