//menu hamburguer
let active = true;

const container__menu__hamburguer = document.querySelector(
  '.container__menu__hamburguer',
);
const menu__hamburguer = document.querySelector('.menu__hamburguer');

menu__hamburguer.addEventListener('click', () => {
  document.body.style.overflow = active ? 'hidden' : 'initial';
  container__menu__hamburguer.classList.toggle('active', active);
  active = !active;
});

//ativar links do site
const links = document.querySelectorAll('.header__menu a');

function ativarLinks(link) {
  const url = window.location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add('active');
  }
}

links.forEach(ativarLinks);

//ativar itens de orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  elemento ? (elemento.checked = true) : '';
}

parametros.forEach(ativarProduto);

//perguntas frequentes
const perguntas = document.querySelectorAll('.perguntas button');

function eventosPerguntas(pergunta) {
  pergunta.addEventListener('click', (event) => {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    resposta.classList.toggle('active');
    const ativa = resposta.classList.contains('ativa');
    pergunta.setAttribute('aria-expanded', ativa);
  });
}

perguntas.forEach(eventosPerguntas);

//galeria de bicicletas
const galeria = document.querySelectorAll('.bicicleta__imagem img');
const galeriaContainer = document.querySelector('.bicicleta__imagem');

function eventosGaleria(img) {
  img.addEventListener('click', (event) => {
    const img = event.currentTarget;
    const media = window.matchMedia('(min-width: 1000px)').matches;
    media ? galeriaContainer.prepend(img) : '';
  });
}

galeria.forEach(eventosGaleria);
