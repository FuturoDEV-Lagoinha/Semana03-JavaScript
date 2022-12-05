///////////////////////////////////////////////////////////
// MÉTODOS DE ARRAY
///////////////////////////////////////////////////////////

// ------- Exercício 1: REDUCE -----------
// Crie uma função que recebe um array de strings e retorne a maior string do array.


// console.log(maiorStringDoArray2(estados))

// ------- Exercício 2: REVERSE -----------
// Crie uma função que recebe um array e devolve seus valores de forma invertida (de trás pra frente)



// ------- Exercício 3: FILTER -----------
// Crie uma função que recebe um array de números e outra função como parâmetro. Ela deve filtrar números

// Crie também 2 funções de filtro, para números pares e ímpares, e use-as como parâmetro da função acima.




///////////////////////////////////////////////////////////
// exemplos de funções

// ======== MAP ========
// Forma simples
const resultadoDoMap = [10,20,30].map(function(numero) {
  return numero + 100
})
// console.log(resultadoDoMap) // [110, 120, 130]

// Forma com callback mais explícita
const somaCom100 = function(numero) {
  return numero + 100
}
const resultadoDoMap2 = [10,20,30].map(somaCom100)
// console.log(resultadoDoMap2) // [110, 120, 130]


// ======== FILTER ========
// Forma simples
const resultadoDoFilter = [10, 20, 30].filter(function (numero) {
  return numero > 15
})
// console.log(resultadoDoFilter) // [20, 30]

// Forma com callback mais explícita
const filtraMaiorQue15 = function (numero) {
  return numero > 15
}
const resultadoDoFilter2 = [10, 20, 30].filter(filtraMaiorQue15)
// console.log(resultadoDoFilter2) // [20, 30]


