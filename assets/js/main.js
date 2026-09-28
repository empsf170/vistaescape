
document.addEventListener("DOMContentLoaded",()=>{
  const nav=document.querySelectorAll(".nav-link");
  const path=location.pathname.split("/").pop() || "index.html";
  nav.forEach(a=>{
    const href=a.getAttribute("href");
    if(href===path)a.classList.add("active");
  });

  const year=document.querySelectorAll("[data-year]");
  year.forEach(el=>el.textContent=new Date().getFullYear());

  const back=document.querySelector(".back-top");
  window.addEventListener("scroll",()=>{if(back)back.style.display=scrollY>450?"grid":"none"});
  if(back)back.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));

  document.querySelectorAll("form").forEach(form=>{
    form.addEventListener("submit",e=>{
      e.preventDefault();
      const btn=form.querySelector("button[type=submit]");
      if(btn){const old=btn.textContent;btn.textContent="Request Received";setTimeout(()=>btn.textContent=old,2200)}
    });
  });
});
