/* const imgs = document.querySelectorAll('img');

imgs.forEach(function (item) {
  console.log(item);
});

const imgs = document.querySelectorAll('img');

imgs.forEach(function (valorAtual, index, array) {
  console.log(valorAtual); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (item) {
  console.log(item);
});

const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
  console.log(item);
});

const imgs = document.querySelectorAll('img');

/ parâmetro único não precisa de parênteses
imgs.forEach((item) => {
  console.log(item);
});

/ multiplos parâmetros precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});

/ sem parâmetro precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
  console.log(i++);
}); */

// Mostre no console cada parágrado do site

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos)

paragrafos.forEach((item) => {
  console.log(item);
});

// Mostre o texto dos parágrafos no console

const textoParagrafos = document.querySelectorAll('p');

paragrafos.forEach((item) => {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
