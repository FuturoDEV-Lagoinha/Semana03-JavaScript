//////////////////////////////////////////////////////////////////
// DOM
//////////////////////////////////////////////////////////////////

// =======================================
// ==== Acessar elementos existentes ====
// =======================================

// Pelo ID
const conteudoPrincipal = document.getElementById("conteudo-principal");

// Pela Classe
const subtitulo = document.getElementsByClassName("subtitulo")[0];

// Pela tag
const lista = document.getElementsByTagName('ul')[0];

// Pelo seletor CSS
const paragrafo1 = document.querySelector(".paragrafo-1"); // classe .
const botao = document.querySelector("#btn-1"); // id #

// =======================================
// ======== Alterar elemento ========
// =======================================

// Exemplos:
// alterar texto - Exemplo da vida real: alterar nome do usuário nos sites
subtitulo.innerHTML = 'Porque aprender a utilizar o DOM?!'
  // OBS: quando usamos o sinal de =, o que já estava lá será substituído

// alterar cor de fundo
subtitulo.style.backgroundColor = '#f00'

// // alterar o tamanho da fonte
paragrafo1.style.fontSize = '5px'

// =======================================
// // ======== Criar elemento ========
// =======================================

// Criar uma div
const divQueCriamosAqui = document.createElement('div')


// =========================================
// // ====== Inserir elemento em outro =====
// =========================================

// // Primeiro colocamos um texto dentro da div (no nosso caso coloca um parágrafo com texto)
divQueCriamosAqui.innerHTML = '<p>Este é um parágrafo do Vinicius</p>'
    // // OBS: também coloquei uma cor só pra vermos
    divQueCriamosAqui.style.background = 'blue'
    divQueCriamosAqui.style.color = 'white'


// ==> Aí então vamos INSERIR na página
// dizemos o lugar que queremos inserir - no caso, a div com id vinicius (seria o pai)
const vinicius = document.querySelector("#vinicius"); 
// em seguida dizemos o que queremos inserir - no caso, a div que criamos (seria o filho)
vinicius.appendChild(divQueCriamosAqui) // <== demos um filho pro Vinícius


// Podemos também adicionar um novo elemento na lista => usamos += para adicionar e não substituir
lista.innerHTML += '<li>Criar elementos</li>'


// =======================================
// ======== Remover elemento ========
// =======================================

// vinicius.removeChild(divQueCriamosAqui);
lista.removeChild(lista.children[1]);


// =======================================
// RESUMÃO
// acessar ==> querySelector, getElementById, getElementsByClassName, getElementsByTagName
// alterar ==> innerHTML, style
// criar ==> createElement
// inserir ==> appendChild (FILHO DO VINÍCIUS :D)
// remover ==> removeChild
// =======================================



//////////////////////////////////////////////////////////////////
// Events
//////////////////////////////////////////////////////////////////

// =======================
// ====== onclick ======
// =======================
const input = document.getElementById("meu-input");
function imprimirInput() {
  // lembrar que para pegar o valor do input, usamos o .value
  console.log(input.value);
}

const divResposta = document.getElementById("resposta-clique-aqui");
function inserirParagrafo() {
  divResposta.innerHTML = "<p id='sou-paragrafo'> Sou um parágrafo</p>";
}

function removerParagrafo() {
  const paragrafo = document.getElementById("sou-paragrafo")
  divResposta.removeChild(paragrafo);
}
// =======================
// ====== onmouseout =====
// =======================
const divPai = document.querySelector("#div-pai");
const divQueQueroRemoverEVoltar = document.getElementById("resposta-botao-remover-voltar");

function removerDiv() {
  divPai.removeChild(divQueQueroRemoverEVoltar);
  botao.style.backgroundColor = 'red'
}

// =======================
// ====== onmouseover ====
// =======================
function voltarDiv() {
  divPai.appendChild(divQueQueroRemoverEVoltar);
  botao.style.backgroundColor = 'gray'
}

// ==============================
// ====== addEventListener ======
// ==============================
const botao3 = document.getElementById("terceiro-botao");
const conteudo = document.getElementById("conteudo")

botao3.addEventListener("click", function() {
  conteudo.innerHTML = "Conteudo aqui"
})
