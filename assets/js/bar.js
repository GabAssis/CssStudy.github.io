const hamburguer = document.querySelector(".hamb");
const nav = document.querySelector(".nav");

hamburguer.addEventListener("click",() => nav.classList.toggle('active'));