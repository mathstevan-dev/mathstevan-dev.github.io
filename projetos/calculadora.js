console.log("hello world")

const tela = document.getElementById("tela"); // pegar a tela
const botoes = document.querySelectorAll("button"); // pegar os botoes

let expressao = ""; 

const operadores = ["+", "-", "*", "/"];

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        const valor = botao.textContent;

        switch (valor) {

            case "=":
                calcular();
                break;

            case "C":
            case "CE":
                expressao = "";
                atualizarTela();
                break;

            case "⌫":
                expressao = expressao.slice(0, -1);
                atualizarTela();
                break;

            case "×":
                adicionarOperador("*");
                break;

            case "÷":
                adicionarOperador("/");
                break;

            case "+":
            case "-":
                adicionarOperador(valor);
                break;

            case "%":
                porcentagem();
                break;

            case "√":
                raiz();
                break;

            case "x²":
                quadrado();
                break;

            case "1/x":
                inverso();
                break;

            case "+/-":
                trocarSinal();
                break;

            case ".":
                adicionarPonto();
                break;

            default:
                expressao += valor;
                atualizarTela();

        }

    });

});
 

function atualizarTela() {

    tela.value = expressao || "0";

}

function adicionarOperador(op) {

    if (expressao === "") {

        if (op === "-") {
            expressao = "-";
        }

        atualizarTela();
        return;

    }

    const ultimo = expressao.slice(-1);

    if (operadores.includes(ultimo)) {

        expressao = expressao.slice(0, -1) + op;

    } else {

        expressao += op;

    }

    atualizarTela();

}

function adicionarPonto() {

    const partes = expressao.split(/[\+\-\*\/]/);
    const ultimoNumero = partes[partes.length - 1];

    if (!ultimoNumero.includes(".")) {

        if (ultimoNumero === "") {
            expressao += "0.";
        } else {
            expressao += ".";
        }

    }

    atualizarTela();

}

function calcular() {

    if (expressao === "") return;

    try {

        expressao = eval(expressao).toString();
        atualizarTela();

    } catch {

        tela.value = "Erro";
        expressao = "";

    }

}

function porcentagem() {

    if (expressao === "") return;

    expressao = (Number(expressao) / 100).toString();
    atualizarTela();

}

function raiz() {

    if (expressao === "") return;

    expressao = Math.sqrt(Number(expressao)).toString();
    atualizarTela();

}

function quadrado() {

    if (expressao === "") return;

    expressao = Math.pow(Number(expressao), 2).toString();
    atualizarTela();

}

function inverso() {

    if (expressao === "") return;

    if (Number(expressao) === 0) {

        tela.value = "Erro";
        expressao = "";
        return;

    }

    expressao = (1 / Number(expressao)).toString();
    atualizarTela();

}

function trocarSinal() {

    if (expressao === "") return;

    expressao = (-Number(expressao)).toString();
    atualizarTela();

}