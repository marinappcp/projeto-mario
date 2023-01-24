/* 
1- QUANDO O USUÁRIO CLICAR NO BOTÃO "VEJA O TRAILER", ABRIR MODAL COM O VÍDEO DO TRAILER.
- passo 1: pegar elemento botão 
- passo 2: identificar clique
- passo 3: pegar elemento modal
- passo 4: abrr modal na tela

2- QUANDO O USUÁRIO CLICAR NO X, FECHA O MODAL.
- passo 1: pegar elemento botão
- passo 2: identificar clique
- passo 3:  fechar modal
*/

console.log('mostrar o document', document);

console.log(document.querySelector('.botao-trailer'));

const botaoTrailer = document.querySelector('.botao-trailer');
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkVideo = video.src;

/*MÉTODO 1: 
botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");
    video.setAttribute("src", linkVideo);
});

const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", ""); // não tocar música depois de fechar trailer
});
*/

// MÉTODO 2: 
function alternarModal() {
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkVideo);
});

const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", ""); // não tocar música depois de fechar trailer
});





