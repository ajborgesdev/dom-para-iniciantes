// Adicione a classe ativo a todos os itens do menu

const menu = document.querySelectorAll('.menu a');

menu.forEach((i) => {
  i.classList.add('ativo')
});

console.log(menu);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

menu.forEach((i) => {
  i.classList.remove('ativo')
});

menu[0].classList.add('ativo')

// Verifique se as imagens possuem o atributo alt

const imagens = document.querySelectorAll('img');

imagens.forEach((img) => {
  const possuiAtributo = img.hasAttribute('alt');
  console.log(img, possuiAtributo)
});

// Modifique o href do link externo no menu

const linkE = document.querySelector('a[href^="https://"]');

linkE.setAttribute('href', 'https://www.google.com.br')

console.log(linkE);