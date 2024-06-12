const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");


btnAvancar.addEventListener("click", function() {

  if(cartaoAtual === cartoes.length - 1) let cartaoAtual = 0;
  
  esconderCartaoSelecionado()
  
  cartaoAtual++;
  mostrarCartoes();
  
})

btnVoltar.addEventListener("click", function() {

  if(cartaoAtual === 0) let cartaoAtual = 8;
  
  esconderCartaoSelecionado()
  
  cartaoAtual--;
  mostrarCartao();
  
})

function mostrarCartao() {
  cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado () {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado")
}
