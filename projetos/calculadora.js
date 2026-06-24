console.log("hello world")

const tela = document.getElementById('tela');
let valorAtual = '';
let valorAnterior = '';
let operacao = null;

function adicionarNumero(numero){
  if (tela.value ==='0') {
    valorAtual = numero;
  } else {
    valorAtual += numero;
  }
    atualizarTela(valorAtual)
}