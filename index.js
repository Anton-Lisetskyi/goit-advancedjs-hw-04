import{a as b,S as C,i as l}from"./assets/vendor-tnUJPedx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const L="47639623-264b1095d84da06504953512f";async function m(t,r=1){const o={key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:15},a="https://pixabay.com/api/";try{const e=await b.get(a,{params:o});if(!e.data||!e.data.hits||e.data.hits.length===0)throw new Error("No images found for the query.");return e.data}catch(e){throw console.error("Error fetching images:",e.message),e}}let h;function y(t){const r=t.map(({tags:o,webformatURL:a,largeImageURL:e,likes:s,views:i,comments:p,downloads:w})=>`
      <li class="gallery-card">
        <a class="gallery-link" href="${e}">
            <img class="gallery-img" src="${a}" alt="${o}" />
            <div class="values-container">
                <ul class="labels">
                    <li>Likes</li>
                    <li>${s}</li>
                </ul>
                <ul class="labels">
                    <li>Views</li>
                    <li>${i}</li>
                </ul>
                <ul class="labels">
                    <li>Comments</li>
                    <li>${p}</li>
                </ul>
                <ul class="labels">
                    <li>Downloads</li>
                    <li>${w}</li>
                </ul>
            </div>
        </a>
      </li>`).join("");v(r)}function v(t){document.querySelector("ul.images-div").insertAdjacentHTML("beforeend",t),h?h.refresh():h=new C(".images-div a",{captionsData:"alt",captionDelay:250})}const S=document.querySelector("button[type=submit]"),n=document.querySelector(".js-load-more"),f=document.querySelector(".images-div"),u=document.querySelector(".loaderClass");let c=1,d="",g=0;S.addEventListener("click",q);n.addEventListener("click",$);async function q(t){t.preventDefault();let r=document.querySelector('input[name="search"]');if(d=r.value.trim(),!d){l.show({title:"❌",message:"Please enter a search query!",backgroundColor:"#ef4040",messageColor:"white"});return}f.innerHTML="",u.style.display="flex";try{const o=await m(d);if(o.totalHits===0){l.show({title:"❌",message:"No images found for the query.",backgroundColor:"#ef4040",messageColor:"white"}),n.classList.add("is-hidden");return}c=1,y(o.hits);const a=f.querySelector(".gallery-card");a&&(g=a.getBoundingClientRect().height),o.totalHits>15?n.classList.remove("is-hidden"):n.classList.add("is-hidden")}catch(o){l.show({title:"❌",message:`Something went wrong: ${o.message}`,backgroundColor:"#ef4040",messageColor:"white"})}finally{u.style.display="none"}r.value=""}async function $(){c+=1,u.style.display="block";try{const t=await m(d,c);t.hits&&t.hits.length>0&&y(t.hits),g>0&&window.scrollBy({top:g*2,behavior:"smooth"}),c*15>=t.totalHits&&(n.classList.add("is-hidden"),l.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#CCCCCC",messageColor:"white"}))}catch(t){l.show({title:"❌",message:`Something went wrong: ${t.message}`,backgroundColor:"#ef4040",messageColor:"white"})}finally{u.style.display="none"}}
//# sourceMappingURL=index.js.map
