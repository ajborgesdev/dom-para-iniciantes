/* const animaisId = document.getElementById('animais');

console.log(animaisId);

const gridSec = document.getElementsByClassName('grid-section');

console.log(gridSec);

const primeiraLi = document.querySelector('li');

console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');

console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');

console.log(linkInterno)

const animaisImg = document.querySelectorAll('.animais img');

console.log(animaisImg)

const gridSectionHTML = document.getElementsByClassName('grid-section');

const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section')

console.log(gridSectionNode);
*/
// Retorne no console todas as imagens do site

const todasImg = document.querySelectorAll('img');

console.log(todasImg);

// Retorne no console apenas as imagens que começarem com a palavra imagem

const imgI = document.querySelectorAll('img[src^="img/imagem"]');

console.log(imgI)

// Selecione todos os links internos (onde o href começa com #)

const linksInt = document.querySelectorAll('[href^="#"]')

console.log(linksInt)

// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector('.animais-descricao h2')

console.log(primeiroH2)

// Selecione o último p do site

const paragrafos = document.querySelectorAll('p')

console.log = (paragrafos[--paragrafos.length]);