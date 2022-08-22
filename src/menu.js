import cake1 from './assets/food1.jpeg';
import cake2 from './assets/food2.jpeg';
import cake3 from './assets/food3.jpeg';
import cake4 from './assets/food4.jpeg';
import cake5 from './assets/food5.jpeg';

function menuContent() {
  const menuCont = document.createElement('div');
  menuCont.classList.add('menu-content');

  const imagesCont = document.createElement('div');
  imagesCont.classList.add('img-cont');

  const food1 = document.createElement('img');
  food1.src = cake1;

  const food2 = document.createElement('img');
  food2.src = cake2;

  const food3 = document.createElement('img');
  food3.src = cake3;

  const food4 = document.createElement('img');
  food4.src = cake4;

  const food5 = document.createElement('img');
  food5.src = cake5;

  imagesCont.appendChild(food1);
  imagesCont.appendChild(food2);
  imagesCont.appendChild(food3);
  imagesCont.appendChild(food4);
  imagesCont.appendChild(food5);

  menuCont.appendChild(imagesCont);

  return menuCont;
}

export default function getMenu() {
  const infoCont = document.querySelector('.info');
  infoCont.appendChild(menuContent());
}
