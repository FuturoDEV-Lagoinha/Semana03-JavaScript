/////////////////////////////////////////////////////////////
//  Crie um site(arquivo HTML) que, ao ser renderizado, 
// adicione (arquivo JS) 5 textos quaisquer, um ao lado outro,
//  com a cor azul(arquivo css).
/////////////////////////////////////////////////////////////

const divTextos = document.getElementById("textos")

const span1 = document.createElement("span")
span1.innerText = "texto 1"
span1.className = "texto-estilizacao"
divTextos.appendChild(span1)

const span2 = document.createElement("span")
span2.innerText = "texto 2"
span2.className = "texto-estilizacao"
divTextos.appendChild(span2)

const span3 = document.createElement("span")
span3.innerText = "texto 3"
span3.className = "texto-estilizacao"
divTextos.appendChild(span3)

const span4 = document.createElement("span")
span4.innerText = "texto 4"
divTextos.appendChild(span4)

const span5 = document.createElement("span")
span5.innerText = "texto 5"
span5.className = "texto-estilizacao"
divTextos.appendChild(span5)


/////////////////////////////////////////////////////////////
// Agora substitua as repetições por uma função.
/////////////////////////////////////////////////////////////

function adicionaTextos(listaDeTextos) {
  const divTextos2 = document.getElementById("textos2")
  
  for (texto of listaDeTextos) {
    const span = document.createElement("span")
    span.className = "texto-estilizacao"
    span.innerText = texto
    divTextos2.appendChild(span)
  }
}

const textos = ["texto 1", "texto 2", "texto 3", "texto 4", "texto 5"]
adicionaTextos(textos)
