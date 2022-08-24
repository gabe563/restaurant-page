import uber from './assets/uber.png';
import doordash from './assets/door.png';
import grubhub from './assets/grubhub.png';
import map from './assets/map.png';

function contactContent() {
  const contactCont = document.createElement('div');
  contactCont.classList.add('contact-content');

  const contactLine = document.createElement('hr');
  contactLine.classList.add('contact-line');

  contactCont.appendChild(contactLine);

  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact-box');

  const contactHeader = document.createElement('div');
  contactHeader.classList.add('contact-header');

  contactHeader.appendChild(createParagraph('Contact Us'));

  const arrow = document.createElement('i');
  arrow.classList.add('arrow');
  arrow.classList.add('down');

  contactHeader.appendChild(arrow);

  const contactInfo = document.createElement('div');
  contactInfo.classList.add('contact-info');

  contactInfo.appendChild(createParagraph('Monday - Saturday'));
  contactInfo.appendChild(createParagraph('+1-222-333-444'));
  contactInfo.appendChild(createParagraph('1:00PM - 10:00PM'));
  contactInfo.appendChild(createParagraph('beepboop@gmail.com'));

  const iconsDiv = document.createElement('div');
  iconsDiv.classList.add('contact-icons');

  const facebookIcon = document.createElement('iconify-icon');
  facebookIcon.setAttribute('icon', 'akar-icons:facebook-fill');
  setWidthHeight(facebookIcon);

  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/FOXYSAMU';
  githubLink.target = '_blank';

  const githubIcon = document.createElement('iconify-icon');
  githubIcon.setAttribute('icon', 'akar-icons:github-fill');
  setWidthHeight(githubIcon);

  const twitterIcon = document.createElement('iconify-icon');
  twitterIcon.setAttribute('icon', 'akar-icons:twitter-fill');
  setWidthHeight(twitterIcon);

  iconsDiv.appendChild(facebookIcon);

  iconsDiv.appendChild(githubLink);
  githubLink.appendChild(githubIcon);

  iconsDiv.appendChild(twitterIcon);

  const orderDiv = document.createElement('div');
  orderDiv.classList.add('order-box');

  const orderHeader = document.createElement('div');
  orderHeader.classList.add('order-header');

  orderDiv.appendChild(orderHeader);

  orderHeader.appendChild(createParagraph('Order Now'));

  const arrow2 = document.createElement('i');
  arrow2.classList.add('arrow');
  arrow2.classList.add('down');

  orderHeader.appendChild(arrow2);

  const orderInfo = document.createElement('div');
  orderInfo.classList.add('order-info');

  orderDiv.appendChild(orderInfo);

  const orderIcons = document.createElement('div');
  orderIcons.classList.add('order-icons');

  orderInfo.appendChild(orderIcons);

  orderIcons.appendChild(createImg(uber));
  orderIcons.appendChild(createImg(doordash));
  orderIcons.appendChild(createImg(grubhub));

  const mapImg = document.createElement('img');
  mapImg.src = map;
  mapImg.setAttribute('draggable', 'false');
  mapImg.classList.add('map');

  orderInfo.appendChild(mapImg);

  contactCont.appendChild(contactDiv);
  contactDiv.appendChild(contactHeader);
  contactDiv.appendChild(contactInfo);
  contactDiv.appendChild(iconsDiv);

  contactCont.appendChild(orderDiv);

  return contactCont;
}

function createParagraph(txt) {
  const p = document.createElement('p');
  p.textContent = txt;

  return p;
}

function createImg(imgName) {
  const img = document.createElement('img');
  img.src = imgName;
  img.setAttribute('draggable', 'false');

  return img;
}

function setWidthHeight(el) {
  el.setAttribute('width', '62');
  el.setAttribute('height', '62');

  return el;
}

export default function getContact() {
  const infoCont = document.querySelector('.info');
  infoCont.appendChild(contactContent());
}
