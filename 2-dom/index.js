//////////////////////////////////////////////////////////////////
// DOM
//////////////////////////////////////////////////////////////////

// ==== Acessar elementos existentes ====

// Pelo ID
const conteudoPrincipal = document.getElementById("conteudo-principal");

// Pela Classe
const subtitulo = document.getElementsByClassName("subtitulo")[0];

// Pela tag
const lista = document.getElementsByTagName('ul')[0];

// Pelo seletor CSS
const paragrafo1 = document.querySelector(".paragrafo-1"); // classe .
const botao = document.querySelector("#btn-1"); // id #


// ======== Alterar elemento ========

// Exemplos:
// alterar texto
subtitulo.innerHTML = 'Porque aprender a utilizar o DOM?!'

// alterar cor de fundo
subtitulo.style.backgroundColor = '#f00'

// alterar o tamanho da fonte
paragrafo1.style.fontSize = '15px'


// ======== Criar elemento ========

// Criar uma div
const divQueCriamosAqui = document.createElement('div')

// ====== Inserir elemento em outro ======

// Inserir um parágrafo dentro da div principal (conteudoPrincipal)... vai ficar lá no final
divQueCriamosAqui.innerHTML = '<p>Este é um parágrafo</p>'
  // como usamos =, se colocarmos outro conteúdo dentro da div, o que já estava lá será substituído
  // divQueCriamosAqui.innerHTML = '<p>Este é um novo parágrafo</p>'

// OBS: coloquei uma cor só pra vermos
divQueCriamosAqui.style.background = 'blue'
  
// Inserir na página (adicionar na div principal)
conteudoPrincipal.appendChild(divQueCriamosAqui)

// adicionar um novo elemento na lista => usamos += para adicionar e não substituir
lista.innerHTML += '<li>Criar elementos</li>'


// ======== Remover elemento ========
// conteudoPrincipal.removeChild(divQueCriamosAqui);
// lista.removeChild(lista.children[0]);


//////////////////////////////////////////////////////////////////
// Events
//////////////////////////////////////////////////////////////////

// ====== onclick ======
const input = document.getElementById("meu-input");
function imprimeInput() {
  console.log(input.value);
}

const resposta = document.getElementById("resposta-clique-aqui");
function insereParagrafo() {
  resposta.innerHTML += "<p id='sou-paragrafo'> Sou um parágrafo</p>";
}

function removeParagrafo() {
  const paragrafo = document.getElementById("sou-paragrafo")
  resposta.removeChild(paragrafo);
}

// ====== onmouseout ======
const divPai = document.getElementById("div-pai");
const divQueQueroRemoverEVoltar = document.getElementById("resposta-botao-remover-voltar");
function removerDiv(){
  divPai.removeChild(divQueQueroRemoverEVoltar);
  botao.style.backgroundColor = 'red'
}

// ====== onmouseover ======
function voltaDiv(){
  divPai.appendChild(divQueQueroRemoverEVoltar);
  botao.style.backgroundColor = 'green'
}

// ====== addEventListener ======
const botao3 = document.getElementById("terceiro-botao");
const conteudo = document.getElementById("conteudo")

botao3.addEventListener("click", function() {
  conteudo.innerHTML = "Conteudo aqui"
})
