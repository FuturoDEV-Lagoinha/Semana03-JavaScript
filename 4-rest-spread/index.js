// EXTRA ===>>> CONCATENAR STRINGS
const nome = "João";
const sobrenome = "Silva";

// TRADICIONAL: usa + e aspas
const nomeCompleto = nome + " da " + sobrenome;

// TEMPLATE STRING: usar crase e ${}
const nomeCompletoTemplateString = `${nome} da ${sobrenome}`;


// ============================
// REST =======================
// ============================

// Crie uma função para aceitar um array de valores utilize o operador rest para transformar a função abaixo:

function somarNumeros(numero1, numero2){
  return numero1+numero2;
}
// somarNumeros(1,2)

function somarNumberosComRest(nome, sobrenome, ...listaDeNumeros) {
  const nomeCompleto = `${nome} ${sobrenome}`
  
  let resultadoDaSoma = 0;
  for (numero of listaDeNumeros) {
    resultadoDaSoma += numero;
  }

  return `${nomeCompleto}, o resulto é: ${resultadoDaSoma}`;
}
// somarNumberosComRest("Rosana", "Rezende", 5, 6, 10)
// 'Rosana Rezende, o resulto é: 21'

// somarNumberosComRest(1, 2, 5, 6, 10)
// '1 2, o resulto é: 21'


// ============================
// SPREAD =====================
// ============================

// Crie uma lista de brinquedos, com os seguintes valores: “bola”, “boneca”, “carrinho”.
// Em seguida crie uma nova lista de brinquedos, adicionando o valor “bicicleta” através do operador spread.

const listaDeBrinquedos = ["pipa", "bola"]
const listaDeBrinquedosEspeciais = ["vídeo game", "peão"]

const novaListaDeBrinquedos = ["cubo mágico", ...listaDeBrinquedos]
const novaListaDeBrinquedos2 = [...listaDeBrinquedos, "bicicleta"]

const listaDeBrinquedosCompleta = [...novaListaDeBrinquedos, "bicicleta", ...listaDeBrinquedosEspeciais]


// Crie um objeto “livro” que recebe as propriedades nome e autor, com valores a sua escolha.
// Em seguida, crie um novo objeto “livro completo”, adicionando a propriedade ano e seu valor, através do operador spread.  

const livro = {
  nome: "A garota do trem",
  autor: "Autora Fakeee"
}
console.log({ livro })


const livroCompleto = {
  ...livro,
  valor: 35
}
console.log({ livroCompleto })
