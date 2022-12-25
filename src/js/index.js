const modal = document.querySelector(".modal");
const btnAbrirModal = document.querySelector(".botao-trailer");
const btnfecharModal = document.querySelector(".fechar-modal");
const loader = document.querySelector(".carregando");

function abrirModal() {
    modal.classList.toggle("aberto");
}

btnAbrirModal.addEventListener("click", abrirModal);
btnfecharModal.addEventListener("click", abrirModal);

setTimeout(()=>{
    loader.remove()
},5000)