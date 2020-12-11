
var novoparagrafo = document.createElement('p');

var texto = document.createTextNode("Minhaterra e linda de morrer");

novoparagrafo.appendChild(texto);

var body = document.querySelector('body');

body.appendChild(novoparagrafo);


var container = document.getElementById('container');

var texto = document.createElement('Span');

texto.appendChild(document.createTextNode('Ola pita'));

container.appendChild(texto);