import{i as h,S as p}from"./assets/vendor-8d97032d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const m="42651969-17d73580612059adec8ce0b1d",y="https://pixabay.com/api/";function g(o){return fetch(`${y}?key=${m}&q=${o}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()}).then(s=>s.hits)}const L="/goit-js-hw-12/assets/error-5bd6dd9a.svg";function n(){h.show({message:"Sorry, there are no images matching your search query. Please, try again!",maxWidth:"340px",iconUrl:L,backgroundColor:"#ef4040",theme:"dark",color:"#fafafb",timeout:3e3,position:"topRight"})}function w(o,s){o.innerHTML=s.map(({webformatURL:c,largeImageURL:r,tags:e,likes:t,views:i,comments:d,downloads:f})=>`<li class="li-im">
            <a href="${r}">
                <img class="image" src="${c}" alt="${e}">
            </a>
            <ul class="info">
                <li class="descr">
                    <h2 class="descr-h">Likes</h2>
                    <p class="descr-p">${t}</p>
                </li>
                <li class="descr">
                    <h2 class="descr-h">Views</h2>
                    <p class="descr-p">${i}</p>
                </li>
                <li class="descr">
                    <h2 class="descr-h">Comments</h2>
                    <p class="descr-p">${d}</p>
                </li>
                <li class="descr">
                    <h2 class="descr-h">Downloads</h2>
                    <p class="descr-p">${f}</p>
                </li>
            </ul>
        </li>`).join("")}const b=document.querySelector("form"),l=document.querySelector(".list"),u=document.querySelector(".loader");function $(){u.style.display="block"}function a(){u.style.display="none"}b.addEventListener("submit",function(o){o.preventDefault(),$(),l.innerHTML="";const c=document.querySelector("#value").value.trim();if(!c){n(),a();return}g(c).then(r=>{if(r.length===0)throw new Error("No images found");w(l,r),new p(".list li a",{captionDelay:300,captions:!0,captionsData:"alt",captionClass:"color-style"}).refresh()}).catch(()=>{n()}).finally(()=>{a()})});
//# sourceMappingURL=commonHelpers.js.map
