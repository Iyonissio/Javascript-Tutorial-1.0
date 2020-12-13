// Criar elemento

var elemento = document.createElement('h3');

elemento.classList = 'testando-classe'; 

var texto = document.createTextNode('Inserir este texto');

elemento.appendChild(texto);

console.log(elemento);

var titulo = document.querySelector('#titulo');

console.log(titulo);

var pai = titulo.parentNode;

pai.replaceChilde(elemento,titulo);