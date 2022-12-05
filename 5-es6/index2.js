
///////////////////////////////////////////////////////////
// ARROW FUNCTIONS
///////////////////////////////////////////////////////////

// Simplificar funções anônimas
const multiplicar = function(a, b) {
  return a * b
}
const multiplicar2 = (a, b) => a * b


// Sintaxe
const dividir = (a, b) => a / b
[10,20].map(numero => dividir(numero, 2)) // [5,10]


[10,20].map((numero) => numero / 2) // [5,10]


// if ternário
const verificaMaiorQue4 = numero => numero > 4 ? "sim" : "não"

// console.log(verificaMaiorQue4(2)) // não
// console.log(verificaMaiorQue4(5)) // sim



// ------- Exercício 1 -----------
// Crie uma arrow function que recebe um array de números e calcula a média deles



// ------- Exercício 2 -----------
// Crie uma arrow function que recebe um array de números e retorne um array contendo apenas números positivos


// ------- Exercício 3 -----------
// Utilize o if ternário para construir uma função que recebe o número do dias e retorna se pertence a primeira ou a segunda quinzena


// ------- Exercício 4 -----------
// Crie uma array function que receba um array e localize o número de maior valores


// ------- Exercício 5 -----------
// Crie uma arrow function que receba 2 arrays e retorne um array contendo os dois


// ------- Exercício 6 -----------
// Crie uma array functions que ordene um array de números


// ------- Exercício 7 -----------
// Crie uma arrow function que receba um número, calcule sua raiz quadrada 
// e em seguida retorne a parte inteira desse resultado
// OBS: Procure alertar o usuário caso o número inserido seja negativo, 
// pois na matemática não existe raiz quadrada de número negativo


// ------- Exercício 8 -----------
// Crie uma arrow function que receba uma string e devolva um objeto com as informações: 
// - quantos caracteres a string possui
// - qual seu primeiro caracter 
// - e qual seu último caracter


// Crie uma arrow function que receba uma frase, tire:
// -seus espaços, 
// - suas vírulas 
// - e acentos em qualquer letra 

// e devolva um objeto com as informações: 
// - frase já tratada
// - quantos caracteres a string possui
// - qual seu segundo caracter 
// - e qual seu penúltimo caracter


// ------- Exercício 9 -----------
// O dono de um restaurante bem excêntrico pede que você crie um algoritimo para ajudar o segurança que permite a entrada de clientes. 
// O programa recebe uma lista com informações de cada cliente (nome, idade e altura) e verifique qual deles pode entrar no restaurante.
// - Se a idade for maior que 25 anos e a altura for menor ou igual a 1.70m, então pode entrar.
// O programa dee retornar uma frase no seguinte formado: "Podem entrar Fulano, Beltrano, Sicrano."


// ------- Exercício 10 -----------
// Escreva duas arrow functions que juntas possam imprimir tabuada de 0 a 10

// DICAS
// A primeira deve imprimir a tabuada de um número
// A segunda deve receber um numero e uma função, e realizar repetições de 1 até o número informado
// Use a primeira função como callback da segunda

