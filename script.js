const translations={};
document.querySelectorAll("[data-ka][data-en]").forEach(el=>{
  translations[el.dataset.ka]={ka:el.dataset.ka,en:el.dataset.en};
});
const buttons=document.querySelectorAll(".lang");
function setLang(lang){
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-ka][data-en]").forEach(el=>{
    el.textContent=el.dataset[lang];
  });
  buttons.forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));
  localStorage.setItem("l2fury-lang",lang);
}
buttons.forEach(b=>b.addEventListener("click",()=>setLang(b.dataset.lang)));
setLang(localStorage.getItem("l2fury-lang")||"ka");
