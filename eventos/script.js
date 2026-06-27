/*

ADDEVENTLISTENER:

const img = document.querySelector('img');

 elemento.addEventListener(event, callback, options)
img.addEventListener('click', function() {
  console.log('Clicou');
})


CALLBACK:

const img = document.querySelector('img');
function callback() {
  console.log('Clicou');
}

img.addEventListener('click', callback); // 🚀
img.addEventListener('click', callback()); // undefined
img.addEventListener('click', function() {
  console.log('Clicou');
})
img.addEventListener('click', () => {
  console.log('Clicou');
})


EVENT:

const img = document.querySelector('img');

function callback(event) {
  console.log(event);
}

img.addEventListener('click', callback);


PROPRIEDADES DO EVENT:

const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener('click', executarCallback);


EVENT.PREVENTDEFAULT:

const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickNoLink);


THIS:

const img = document.querySelector('img');

function callback(event) {
  console.log(this); // retorna a imagem
  console.log(this.getAttribute('src'));
}

img.addEventListener('click', callback);


DIFERENTES EVENTOS:

const h1 = document.querySelector('h1');

function callback(event) {
  console.log(event.type, event);
}

h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback);
window.addEventListener('scroll', callback);
window.addEventListener('resize', callback);
window.addEventListener('keydown', callback);


KEYBOARD:

function handleKeyboard(event) {
  if(event.key === 'a')
    document.body.classList.toggle('azul');
  else if(event.key === 'v')
    document.body.classList.toggle('vermelho');
}

window.addEventListener('keydown', handleKeyboard);


FOREACH E EVENTOS:

const imgs = document.querySelectorAll('img');

function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc);
});

*/

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksI = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefault();
  linksI.forEach((link) => {
    link.classList.remove('ativo');
  });
  event.currentTarget.classList.add('ativo');
}

linksI.forEach((link) => {
  link.addEventListener('click', handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

elementos = document.querySelectorAll('body *');

function handleElemento(event) {
  console.log(event.currentTarget);
}

elementos.forEach((elemento) => {
  elemento.addEventListener('click', handleElemento);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

/* event.currentTarget.remove() */

// Se o usuário clicar na tecla (t), aumente todo o texto do site.


function handleClickT(event) {
  if (event.key === 't') {
  document.documentElement.classList.toggle('textoMaior')
  }
}

window.addEventListener('keydown', handleClickT)