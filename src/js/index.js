const botaoTreiller = document.querySelector(".botao-treiller");

//atribuindo const para remover o som do video
const video = document.getElementById("video");

//fechar modal ao clicar no x
const botaoFecharModal = document.querySelector(".fechar-modal");

//pegando o elemento da modal com js
const modal = document.querySelector(".modal");

//criando uma variaavel para adicionar a url do video para quando for abrir novamente
const linkDoVideo = video.src;

//funcao para alternar o modal
function alternarModal() {
  //abrir a modal na tela
  modal.classList.toggle("aberto");
}

//indentificando o click no botao
botaoTreiller.addEventListener("click", () => {
  alternarModal();
  //incluir link do video
  video.setAttribute("src", linkDoVideo);
});

//identificar quando o usuario clicar no botao X
botaoFecharModal.addEventListener("click", () => {
  //fechar modal
  alternarModal();
  //removendo o link do src do video para remover o som ao fechar o video
  video.setAttribute("src", "");
});
