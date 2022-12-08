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

// Construa uma função que receba o valor de um número através de um input e adicione o resultado em uma div. 
// O resultado deverá ser uma string com o intervalo de números entre 0 e o número inserido, separados por vírgula.
// Exemplo: se o usuário inserir o número 5, o resultado deverá ser "0, 1, 2, 3, 4, 5".

let resultWhile = document.getElementById("while-result");

// ================= WHILE =================

function whileLoop() {
  let number = document.getElementById("while").value;
  let contador = 0;

  while (contador < number) {
    resultWhile.innerHTML += contador; // não é o número
    contador = contador + 1
  }
}

// ================= DO WHILE =================

function doWhileLoop() {
  let number = document.getElementById("while").value;
  let contador = 0;
  do {
    resultWhile.innerHTML += contador + " ";
    contador++;
  } while (contador < number);
}

// EXTRA: função para limpar o campo de texto
function clearWhile() {
  resultWhile.innerHTML = "";
}


// ================= FOR =================

// Construa uma função que recebe nomes de frutas separadas por vírgula (exemplo: "maçã, banana, laranja") através de um input.
// A função deve retornar uma lista com as frutas inseridas, separadas pelo caractere "+" (exemplo: "maçã + banana + laranja").


