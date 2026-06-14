console.log("Script carregado com sucesso");


const botoes = document.querySelectorAll(".botao-jogo");
const resultado = document.querySelector("#resultado-jogo");

const opcoes = ["pedra", "papel", "tesoura"];

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const escolhaJogador = botao.dataset.escolha;

    const escolhaComputador =
      opcoes[Math.floor(Math.random() * opcoes.length)];

    let mensagem = "";

    if (escolhaJogador === escolhaComputador) {
      mensagem = "Empate!";
    } else if (
      (escolhaJogador === "pedra" && escolhaComputador === "tesoura") ||
      (escolhaJogador === "papel" && escolhaComputador === "pedra") ||
      (escolhaJogador === "tesoura" && escolhaComputador === "papel")
    ) {
      mensagem = "Você venceu!";
    } else {
      mensagem = "Você perdeu!";
    }

    resultado.textContent =
      `Você escolheu ${escolhaJogador}. O computador escolheu ${escolhaComputador}. ${mensagem}`;
  });
});