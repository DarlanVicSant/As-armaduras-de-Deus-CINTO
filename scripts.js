// ================= LOADING =================
window.addEventListener("load", ()=>{
  const loader = document.createElement("div");
  loader.id = "loader";
  loader.innerHTML = "<h1>Carregando Universo...</h1>";

  document.body.appendChild(loader);

  setTimeout(()=>{
    loader.style.opacity = "0";
    setTimeout(()=> loader.remove(), 800);
  },1200);
});

// ================= TROCA DE PÁGINA =================
function mudarPagina(p){
  document.body.style.opacity = 0;

  setTimeout(()=>{
    window.location.href = p;
  },300);
}

// ================= FORM =================
function enviar(e){
  e.preventDefault();
  alert("Mensagem enviada 🚀");
}

// ================= ANIMAÇÃO SEGURA =================
function animar(){
  document.querySelectorAll("section, .card, img").forEach(el=>{
    let top = el.getBoundingClientRect().top;

    if(top < window.innerHeight - 50){
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    } else {
      // 👇 NÃO DEIXA SUMIR
      el.style.opacity = "1";
    }
  });
}

// scroll ativa animação
window.addEventListener("scroll", animar);

// ================= INICIAR (CORRIGIDO) =================
window.addEventListener("DOMContentLoaded", ()=>{
  
  document.body.style.opacity = "1";

  document.querySelectorAll("section, .card, img").forEach(el=>{
    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    el.style.transition = "0.8s";
  });

  // 👇 FORÇA APARECER (ESSENCIAL)
  setTimeout(animar, 200);
});

// ================= CURSOR =================
let cursor = document.createElement("div");

cursor.style.width = "15px";
cursor.style.height = "15px";
cursor.style.border = "2px solid #00eaff";
cursor.style.borderRadius = "50%";
cursor.style.position = "fixed";
cursor.style.pointerEvents = "none";
cursor.style.transition = "0.1s";

document.body.appendChild(cursor);

document.addEventListener("mousemove", e=>{
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// ================= ESTRELAS =================
for(let i=0;i<100;i++){
  let star = document.createElement("div");

  star.style.position = "fixed";
  star.style.width = "2px";
  star.style.height = "2px";
  star.style.background = "white";
  star.style.top = Math.random()*100 + "vh";
  star.style.left = Math.random()*100 + "vw";
  star.style.opacity = Math.random();

  document.body.appendChild(star);

  setInterval(()=>{
    star.style.opacity = Math.random();
  },1000);
}

// ================= PARTÍCULAS =================
for(let i=0;i<25;i++){
  let p = document.createElement("div");

  p.style.position = "fixed";
  p.style.width = "5px";
  p.style.height = "5px";
  p.style.background = "#00eaff";
  p.style.borderRadius = "50%";
  p.style.left = Math.random()*100 + "vw";
  p.style.top = Math.random()*100 + "vh";
  p.style.opacity = 0.5;

  document.body.appendChild(p);

  setInterval(()=>{
    p.style.top = Math.random()*100 + "vh";
    p.style.left = Math.random()*100 + "vw";
  },3000);
}

// ================= PARALLAX =================
document.addEventListener("mousemove", e=>{
  let x = (e.clientX / window.innerWidth) * 20;
  let y = (e.clientY / window.innerHeight) * 20;

  let hero = document.querySelector(".hero");
  if(hero){
    hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
  }
});
