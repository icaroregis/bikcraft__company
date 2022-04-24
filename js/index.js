const links = document.querySelectorAll('.header__menu a');
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

function ativarLinks(link) {
  const url = window.location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add('active');
  }
}

links.forEach(ativarLinks);
