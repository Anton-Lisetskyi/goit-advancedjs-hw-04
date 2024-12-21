import{a as w,S as C,i}from"./assets/vendor-tnUJPedx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const L="47639623-264b1095d84da06504953512f";async function g(t,r=1){const o={key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:15},a="https://pixabay.com/api/";try{const e=await w.get(a,{params:o});if(!e.data.hits||e.data.hits.length===0)throw new Error("No images found for the query.");return e.data}catch(e){throw console.error("Error fetching images:",e.message),e}}let h;function y(t){const r=t.map(({tags:o,webformatURL:a,largeImageURL:e,likes:s,views:l,comments:p,downloads:b})=>`
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
                    <li>${l}</li>
                </ul>
                <ul class="labels">
                    <li>Comments</li>
                    <li>${p}</li>
                </ul>
                <ul class="labels">
                    <li>Downloads</li>
                    <li>${b}</li>
                </ul>
            </div>
        </a>
      </li>`).join("");v(r)}function v(t){document.querySelector("ul.images-div").insertAdjacentHTML("beforeend",t),h?h.refresh():h=new C(".images-div a",{captionsData:"alt",captionDelay:250})}const q=document.querySelector("button[type=submit]"),n=document.querySelector(".js-load-more"),m=document.querySelector(".images-div"),u=document.querySelector(".loaderClass");let c=1,d="",f=0;q.addEventListener("click",S);n.addEventListener("click",$);async function S(t){t.preventDefault();let r=document.querySelector('input[name="search"]');if(d=r.value.trim(),!d){i.show({title:"❌",message:"Please enter a search query!",backgroundColor:"#ef4040",messageColor:"white"});return}m.innerHTML="",u.style.display="flex";try{const o=await g(d);if(o.totalHits===0){i.show({title:"❌",message:"No images found for the query.",backgroundColor:"#ef4040",messageColor:"white"});return}c=1,y(o.hits);const a=m.querySelector(".gallery-card");a&&(f=a.getBoundingClientRect().height),o.totalHits>15?n.classList.remove("is-hidden"):n.classList.add("is-hidden")}catch(o){n.classList.add("is-hidden"),i.show({title:"❌",message:`${o.message}`,backgroundColor:"#ef4040",messageColor:"white"})}finally{u.style.display="none"}r.value=""}async function $(){c+=1,u.style.display="block";try{const t=await g(d,c);t.hits&&t.hits.length>0&&y(t.hits),f>0&&window.scrollBy({top:f*2,behavior:"smooth"}),c*15>=t.totalHits&&(n.classList.add("is-hidden"),i.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#CCCCCC",messageColor:"white"}))}catch(t){i.show({title:"❌",message:`${t.message}`,backgroundColor:"#ef4040",messageColor:"white"})}finally{u.style.display="none"}}
//# sourceMappingURL=index.js.map
