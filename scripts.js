// ===============================
// CONFIG GLOBAL
// ===============================
const CONFIG = {
  particles: 40,
  cursorSize: 20,
  clickSize: 15
};

// ===============================
// INIT
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  initCursor();
  initClickEffect();
  initScrollReveal();
  initHeader();
  initParticles();
  initParallax();
});

// ===============================
// CURSOR PERSONALIZADO
// ===============================
function initCursor(){
  const cursor = document.createElement("div");

  cursor.style.width = CONFIG.cursorSize + "px";
  cursor.style.height = CONFIG.cursorSize + "px";
  cursor.style.border = "2px solid gold";
  cursor.style.borderRadius = "50%";
  cursor.style.position = "fixed";
  cursor.style.pointerEvents = "none";
  cursor.style.transform = "translate(-50%, -50%)";
  cursor.style.transition = "0.08s linear";
  cursor.style.zIndex = "9999";

  document.body.appendChild(cursor);

  document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
}

// ===============================
// EFEITO DE CLIQUE
// ===============================
function initClickEffect(){
  document.addEventListener("click", e => {
    const circle = document.createElement("div");

    circle.style.position = "fixed";
    circle.style.left = e.clientX + "px";
    circle.style.top = e.clientY + "px";
    circle.style.width = CONFIG.clickSize + "px";
    circle.style.height = CONFIG.clickSize + "px";
    circle.style.background = "gold";
    circle.style.borderRadius = "50%";
    circle.style.pointerEvents = "none";
    circle.style.transform = "translate(-50%, -50%)";
    circle.style.animation = "clickAnim 0.5s ease-out";

    document.body.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 500);
  });
}

// ===============================
// SCROLL REVEAL
// ===============================
function initScrollReveal(){
  const elements = document.querySelectorAll(".hidden");

  function reveal(){
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;

      if(top < windowHeight - 60){
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", reveal);
  reveal();
}

// ===============================
// HEADER DINÂMICO
// ===============================
function initHeader(){
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// ===============================
// PARTÍCULAS OTIMIZADAS
// ===============================
function initParticles(){
  const container = document.createElement("div");
  container.classList.add("particles");

  document.body.appendChild(container);

  for(let i = 0; i < CONFIG.particles; i++){
    const particle = document.createElement("span");

    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDuration = (5 + Math.random() * 10) + "s";
    particle.style.opacity = Math.random();

    container.appendChild(particle);
  }
}

// ===============================
// PARALLAX SUAVE (FUNDO)
// ===============================
function initParallax(){
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const bg = document.body;

    // movimento suave
    bg.style.backgroundPositionY = scroll * 0.3 + "px";

    lastScroll = scroll;
  });
}

// ===============================
// PERFORMANCE (THROTTLE)
// ===============================
function throttle(fn, wait){
  let time = Date.now();

  return function(){
    if((time + wait - Date.now()) < 0){
      fn();
      time = Date.now();
    }
  }
}

// ===============================
// EXTRA: HOVER INTERATIVO
// ===============================
document.querySelectorAll("a, button").forEach(el => {
  el.addEventListener("mouseenter", () => {
    el.style.transform = "scale(1.1)";
  });

  el.addEventListener("mouseleave", () => {
    el.style.transform = "scale(1)";
  });
});

// ===============================
// DEBUG SAFE
// ===============================
window.addEventListener("error", (e)=>{
  console.warn("Erro capturado:", e.message);
});
