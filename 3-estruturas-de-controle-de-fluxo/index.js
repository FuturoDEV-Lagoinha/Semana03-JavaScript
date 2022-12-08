// =============
// CONDICIONAIS
// =============

const result = document.querySelector("#result");

function ifElse() {
  const age = document.querySelector("#age").value;

  if (age < 18) {
    result.innerHTML = "IF: Menor de idade";
  } else if (age >= 18 && age <= 60) {
    result.innerHTML = "ELSE IF: Adulto";
  } else {
    result.innerHTML = "ELSE: Idoso";
  }
}


function switchCase() {
  const age = document.querySelector("#age").value;

  switch (true) {
    case age < 18:
      result.innerHTML = "CASE age < 18: Menor de idade";
      break;
    case age >= 18 && age <= 60:
      result.innerHTML = "CASE age >= 18 && age <= 60: Adulto";
      break;
    default:
      result.innerHTML = "DEFAULT: Idoso";
  }
}


// =================
// REPETIÇÕES
// =================

// Construa 2 funções.

// Cada uma recebe o valor de um número através de um input e adiciona o resultado em uma div. O resultado deverá ser uma string com o intervalo de números entre 0 e o número inserido, separados por vírgula.
// (exemplo: se o usuário inserir o número 5, o resultado deverá ser "0, 1, 2, 3, 4, 5")

// Uma função deve usar “while” e outra “do while”
// O resultado sempre será igual?

let resultWhile = document.getElementById("while-result");

// ================= WHILE =================

function whileLoop() {
  let number = document.getElementById("while").value;
  let contador = 0;

  // number = 3

  while (contador < number) {
    resultWhile.innerHTML += contador + ", ";
    contador++;
  }

  // "0, 1, 2"
}

// ================= DO WHILE =================

function doWhileLoop() {
  let number = document.getElementById("while").value;
  let contador = 0;

  // number = 3
  do {
    resultWhile.innerHTML += contador + ", ";
    contador++;
  } while (contador < number);

  // "0, 1, 2, 3"

}

// EXTRA: função para limpar o campo de texto
function clearWhile() {
  resultWhile.innerHTML = "";
}


// ================= FOR =================

// Construa uma função que recebe nomes de frutas separadas por vírgula (exemplo: "maçã, banana, laranja") através de um input.
// A função deve retornar uma lista com as frutas inseridas, separadas pelo caractere "+" (exemplo: "maçã + banana + laranja").

// Exemplo de split
// "maçã, pera, uva".split(", ") // ["maçã", "pera", "uva"]
// "a - b - c".split(" - ") // ["a", "b", "c"]

let result2 = document.getElementById("for-result");

function forLoop() {
  const fruits = document.getElementById("for").value.split(", ");
  const tamanhoDoArray = fruits.length; // fruits.length é o tamanho do array de frutas // 3
  for (contador = 0; contador < tamanhoDoArray; contador++) {
    result2.innerHTML += contador + ": " + fruits[contador] + " + ";
  }

  // maça + pera + uva +
}

function forOfLoop() {
  let fruits = document.getElementById("for").value.split(", ");

  for (fruit of fruits) {
    result2.innerHTML += fruit + " + ";
  }
}

function forEachLoop() {
  let fruits = document.getElementById("for").value.split(", ");

  fruits.forEach((fruit, contador) => {
    return result2.innerHTML += contador + ": "+ fruit + " + ";
  });
}

// EXTRA: função para limpar o campo de texto
function clearFor() {
  result2.innerHTML = "";
}
