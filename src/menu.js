import cake1 from './assets/food1.jpeg';
import cake2 from './assets/food2.jpeg';
import cake3 from './assets/food3.jpeg';
import cake4 from './assets/food4.jpeg';
import cake5 from './assets/food5.jpeg';

function menuContent() {
  const menuCont = document.createElement('div');
  menuCont.classList.add('menu-content');

  const scrollBar = document.createElement('div');
  scrollBar.classList.add('scrollbar');

  const imagesCont = document.createElement('div');
  imagesCont.classList.add('img-cont');

  imagesCont.appendChild(createDivCake(cake1, 'Tools & Screws Cake $ 50.99'));
  imagesCont.appendChild(createDivCake(cake2, 'Formula 1 Cake Set $ 29.99'));
  imagesCont.appendChild(createDivCake(cake3, 'Electric Tools Cake $ 15.50'));
  imagesCont.appendChild(createDivCake(cake4, 'Rusty Tools Cake $ 45.05'));
  imagesCont.appendChild(createDivCake(cake5, 'All In One Box Cake $ 70.00'));

  scrollBar.appendChild(imagesCont);

  menuCont.appendChild(scrollBar);

  return menuCont;
}

function createDivCake(cake, txt) {
  const div = document.createElement('div');
  div.classList.add('cake');

  const div2 = document.createElement('div');
  div2.classList.add('img-box');

  div.appendChild(div2);

  div2.appendChild(createCake(cake));

  div.appendChild(createTag(txt));

  return div;
}

function createCake(cake) {
  const img = document.createElement('img');
  img.setAttribute('draggable', 'false');
  img.src = cake;

  return img;
}

function createTag(txt) {
  const div = document.createElement('div');
  div.classList.add('tag');

  div.appendChild(createParagraph(txt));

  return div;
}

function createParagraph(txt) {
  const p = document.createElement('p');
  p.textContent = txt;

  return p;
}

export default function getMenu() {
  const infoCont = document.querySelector('.info');
  infoCont.appendChild(menuContent());
}
