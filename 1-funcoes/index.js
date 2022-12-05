///////////////////////////////////////////////////////////
// Explicando retorno de Função
///////////////////////////////////////////////////////////

// // se for sem retorno (console.log) não é possível atribuir o valor a uma variável pois o o resultado será undefined
// // como há retorno, podemos reaproveitar o resultado da função informarParOuImparNumaFrase
// function informarParOuImpar(num1){
//   // converter uma string para um número
//   var numeroProtegido = Number(num1)
//   if(numeroProtegido % 2 == 0){
//       return'Par'
//   } else if(numeroProtegido %2 != 0){
//     return'Ímpar'
//   } else{ 
//     return "inválido"
//   }
// }

// const resultado = informarParOuImpar(1)

// function informarParOuImparNumaFrase(num) {
//   // return "O número ", num, " é ", resultado
  
//   // ou usar template string 
//   retun `O número ${num} é ${resultado}`
// }
// console.log(informarParOuImparNumaFrase(2))


///////////////////////////////////////////////////////////
// EXERCÍCIO 1 - Crie uma função não nomeada que recebe um número e 
// devolva uma string dizendo se é par ou ímpar.
///////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////
// EXERCÍCIO 2 - Crie uma função nomeada que recebe um array de elementos, 
// imprima cada um dos elementos e em seguida retorne a 
// quantidade de elementos no array (seu tamanho).
///////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////
// EXTRA - Função com mais de um retorno
///////////////////////////////////////////////////////////

// // ==== Retorna um objeto ====
// function calcular(a, b) {
//   const soma = a + b
//   const subtracao = a - b
//   const divisao = a / b
//   const multiplicacao = a * b

//   return {
//     soma,
//     subtracao,
//     divisao,
//     multiplicacao
//   }
// }

// console.log(calcular(1, 2).soma) // 3
// console.log(calcular(1, 2).subtracao) // -1
// console.log(calcular(1, 2).divisao) // 0.5
// console.log(calcular(1, 2).multiplicacao) // 2

// // ==== Retorna um array ====
// function calcular2(a, b) {
//   const soma = a + b
//   const subtracao = a - b
//   const divisao = a / b
//   const multiplicacao = a * b

//   return [soma, subtracao, divisao, multiplicacao]
// }

// console.log(calcular2(1, 2)[0]) // 3
// console.log(calcular2(1, 2)[1]) // -1
// console.log(calcular2(1, 2)[2]) // 0.5
// console.log(calcular2(1, 2)[3]) // 2
