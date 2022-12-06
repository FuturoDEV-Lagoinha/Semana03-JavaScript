///////////////////////////////////////////////////////////
// Explicando retorno de Função
///////////////////////////////////////////////////////////

// Se uma função for sem retorno (console.log) não é possível atribuir o valor a uma variável pois o o resultado será undefined
// Mas com o retorno é possível atribuir o valor a uma variável e reaproveitar o resultado da função

// Exemplo: calcular o valor em reais correspondente a um valor em dólar
function calcularValorEmReais(valorEmDolar, cotacao = 5){
  return valorEmDolar * cotacao
}

// E uma segunda função que recebe uma lista de valores e calcula o total
function calcularCaixa(lista){
  let total = 0
  for(dinheiroDaPessoa of lista){
    total += dinheiroDaPessoa
  }
  return total
}

// No primeiro dia 2 clientes trocam seus dólares por reais
const katia = calcularValorEmReais(500, 7)
const gilberto = calcularValorEmReais(700, 5)
// Podemos colocar eles em uma lista e usar a função calcularCaixa para calcular o total
console.log(calcularCaixa([katia, gilberto])) // 10500

// O mesmo pode ser feito nos outros dias, aproveitando as funções já criadas
const idi = calcularValorEmReais(20, 6)
const roberto = calcularValorEmReais(10000, 8)
const felipe = calcularValorEmReais(500, 7)
console.log(calcularCaixa([idi, roberto, felipe])) // 80020


///////////////////////////////////////////////////////////
// DESAFIO
///////////////////////////////////////////////////////////

function somaDeDoisNumeros(numero1, numero2) {
  console.log(numero1 + numero2);
}
somaDeDoisNumeros(1, 2); // 3
somaDeDoisNumeros(3, 4); // 7

///////////////////////////////////////////////////////////
// 1 - Crie uma função não nomeada que recebe um número e
// devolva uma string dizendo se é par ou ímpar.
///////////////////////////////////////////////////////////

// exemplo A - apenas um retorno
const informarParImpar = function (num1) {
  let resultado;

  if (num1 % 2 == 0) {
    resultado = "Par";
  } else if (num1 % 2 == 1) {
    resultado = "Ímpar";
  } else {
    resultado = "inválido";
  }

  return resultado;
};
// console.log(informarParImpar(5)); // Par


// exemplo B - vários retornos, dentro de cada condicional
const informarParOuImpar2 = function (num1) {
  if (num1 % 2 == 0) {
    return "Par";
  } else if (num1 % 2 != 0) {
    return "Ímpar";
  } else {
    return "inválido";
  }
};
// console.log(informarParOuImpar2()) // inválido
// console.log(informarParOuImpar2(2)) // Par
// console.log(informarParOuImpar2(3)) // Ímpar


///////////////////////////////////////////////////////////
// EXERCÍCIO 2 - Crie uma função nomeada que recebe um array de elementos, 
// imprima cada um dos elementos e em seguida retorne a 
// quantidade de elementos no array (seu tamanho).
///////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////
// EXTRA - Função com mais de um retorno
///////////////////////////////////////////////////////////

// // ==== Retorna um array ====
function calcularComArray(num1, num2) {
  const soma = num1 + num2
  const subtracao = num1 - num2
  const divisao = num1 / num2
  const multiplicacao = num1 * num2

  return [soma, subtracao, divisao, multiplicacao]
}

const lista = ["a", "b"]
lista[0] // "a"
lista[1] // "b"

calcularComArray(2,3)


// console.log(calcularComArray(1, 2)[0]) // 3
// console.log(calcularComArray(1, 2)[1]) // -1
// console.log(calcularComArray(1, 2)[2]) // 0.5
// console.log(calcularComArray(1, 2)[3]) // 2


// // ==== Retorna um objeto ====
function calcularComObjeto(num1, num2) {
  const soma = num1 + num2;
  const subtracao = num1 - num2;
  const divisao = num1 / num2;
  const multiplicacao = num1 * num2;

  return {
    soma,
    subtracao,
    divisao,
    multiplicacao,
  };
}

// console.log(calcularComObjeto(1, 2).soma) // 3
// console.log(calcularComObjeto(1, 2).subtracao) // -1
// console.log(calcularComObjeto(1, 2).divisao) // 0.5
// console.log(calcularComObjeto(1, 2).multiplicacao) // 2
