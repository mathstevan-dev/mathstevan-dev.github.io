console.log("Script carregado com sucesso");


//Constantes para selecionar os elementos do DOM e armazenar os textos a serem digitados
const titulo = document.querySelector(".titulo-principal");
const tituloSecundario = document.querySelector(".titulo-secundario");
const texto1 = document.querySelector(".texto-1");
const texto2 = document.querySelector(".texto-2");
const texto3 = document.querySelector(".texto-3");
const texto = "Desenvolvedor Front-End";
const textoSecundario = "Matheus Stevan";
const textop1 = "Focado em criar interfaces modernas,";
const textop2 = "responsivas e com identidade visual forte.";
const textop3 = "Trabalhando com Diversas tecnologias.";


// Variáveis para controlar os índices de digitação

let indice = 0;
let indiceSecundario = 0;
let indiceTextop1 = 0;
let indiceTextop2 = 0;
let indiceTextop3 = 0;

// Limpar o conteúdo dos elementos para iniciar a digitação

titulo.textContent = "";
tituloSecundario.textContent = "";
texto1.textContent = "";
texto2.textContent = "";
texto3.textContent = "";


// Função para digitar o texto principal
function digitar() {

    if (indice < texto.length) {

        titulo.textContent += texto[indice];

        indice++;

        setTimeout(digitar, 100);

    }

}

digitar();

// Função para digitar o texto secundário
function digitar1() {

    if (indiceSecundario < textoSecundario.length) {

        tituloSecundario.textContent += textoSecundario[indiceSecundario];

        indiceSecundario++;

        setTimeout(digitar1, 170);

    }

}

digitar1();

// Função para digitar os textos primários
function digitar2() {

    if (indiceTextop1 < textop1.length) {  

        texto1.textContent += textop1[indiceTextop1];

        indiceTextop1++;

        setTimeout(digitar2, 60);
        
    }
 
  }

digitar2();

function digitar3() {

    if (indiceTextop2 < textop2.length) {

        texto2.textContent += textop2[indiceTextop2];

        indiceTextop2++;

        setTimeout(digitar3, 50);
    }

}
digitar3();

function digitar4() {

    if (indiceTextop3 < textop3.length) {

        texto3.textContent += textop3[indiceTextop3];

        indiceTextop3++;

        setTimeout(digitar4, 60);
    }
}
digitar4();


const elementos = document.querySelectorAll(".revelar, .revelar-card");

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("ativo");
        }
    });
});

elementos.forEach(function(elemento) {
    observer.observe(elemento);
});



function mostrarAlerta() {
 Onclick=""
            alert('Obrigado por clicar! Em breve, mais informações sobre mim e meus projetos estarão disponíveis. Fique atento às atualizações do meu portfólio!');
}