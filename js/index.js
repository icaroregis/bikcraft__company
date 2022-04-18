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
