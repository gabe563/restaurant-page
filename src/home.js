import snack1 from './assets/snack1.jpeg';

function homeContent() {
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('home-content');

  const headerHomeContent = document.createElement('div');
  headerHomeContent.classList.add('header-home');

  const homeHeaderTxt = document.createElement('p');
  homeHeaderTxt.textContent = 'ENJOY THE BEST CAKES MADE FOR';

  const homeHeaderIcon = document.createElement('iconify-icon');
  homeHeaderIcon.setAttribute('icon', 'fluent-emoji:robot');
  homeHeaderIcon.setAttribute('width', '93');
  homeHeaderIcon.setAttribute('height', '90');

  const homeInfoContainer = document.createElement('div');
  homeInfoContainer.classList.add('home-info');

  const homeInfoImage = document.createElement('img');
  homeInfoImage.src = snack1;
  homeInfoImage.setAttribute('draggable', 'false');
  homeInfoImage.classList.add('snack1');

  const homeInfoTxtCont = document.createElement('div');
  homeInfoTxtCont.classList.add('home-txt');

  const InfoTxtCont = document.createElement('div');
  InfoTxtCont.classList.add('info-cont1');

  const homeInfoTxt1 = document.createElement('p');
  homeInfoTxt1.textContent = 'best quality for the lowest price';

  const homeInfoLine = document.createElement('hr');

  const InfoTxtCont2 = document.createElement('div');
  InfoTxtCont2.classList.add('info-cont2');

  const homeInfoTxt2 = document.createElement('p');
  homeInfoTxt2.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate elit eu neque tellus scelerisque odio.';

  homeInfoContainer.appendChild(homeInfoTxtCont);
  homeInfoContainer.appendChild(homeInfoImage);

  homeInfoTxtCont.appendChild(InfoTxtCont);
  homeInfoTxtCont.appendChild(InfoTxtCont2);

  InfoTxtCont.appendChild(homeInfoTxt1);
  InfoTxtCont.appendChild(homeInfoLine);

  InfoTxtCont2.appendChild(homeInfoTxt2);

  contentDiv.appendChild(headerHomeContent);
  contentDiv.appendChild(homeInfoContainer);

  headerHomeContent.appendChild(homeHeaderTxt);

  headerHomeContent.appendChild(homeHeaderIcon);

  return contentDiv;
}

export default function getHome() {
  const infoCont = document.querySelector('.info');
  infoCont.appendChild(homeContent());
}
