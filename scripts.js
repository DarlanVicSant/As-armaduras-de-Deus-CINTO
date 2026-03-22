"use strict";

/* =========================
   UTILIDADES
========================= */
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/* =========================
   MENU MOBILE
========================= */
const menuToggle = $(".menu-toggle");
const navLinks = $(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

/* =========================
   SCROLL SUAVE
========================= */
$$("a[href^='#']").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = $(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

/* =========================
   HEADER SCROLL EFFECT
========================= */
const header = $(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
  }
});

/* =========================
   ANIMAÇÃO AO SCROLL
========================= */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

$$(".animate").forEach(el => observer.observe(el));

/* =========================
   DARK MODE
========================= */
const toggleTheme = $("#theme-toggle");

if (toggleTheme) {
  toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });

  // carregar tema salvo
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
}

/* =========================
   LOADING SCREEN
========================= */
window.addEventListener("load", () => {
  const loader = $("#loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => loader.remove(), 500);
  }
});
