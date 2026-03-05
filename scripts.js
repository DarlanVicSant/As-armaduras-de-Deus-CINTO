// mensagem de reflexão

function mensagem(){
alert("A verdade de Deus nos fortalece e nos mantém firmes na batalha espiritual.");
}


// animação ao rolar a página

const cards = document.querySelectorAll(".card");

function revelar(){

cards.forEach(card =>{

const topo = card.getBoundingClientRect().top;
const alturaTela = window.innerHeight;

if(topo < alturaTela - 100){
card.style.opacity = "1";
card.style.transform = "translateY(0)";
}

});

}

window.addEventListener("scroll", revelar);


// efeito de destaque no menu

const links = document.querySelectorAll(".menu a");

links.forEach(link =>{

link.addEventListener("mouseenter",()=>{
link.style.color="#ffd369";
});

link.addEventListener("mouseleave",()=>{
link.style.color="#e8d7a3";
});

});