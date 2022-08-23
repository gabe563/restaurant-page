import about1 from './assets/about1.jpeg';
import about2 from './assets/about2.jpeg';
import about3 from './assets/about3.jpeg';

function aboutContent() {
  const aboutCont = document.createElement('div');
  aboutCont.classList.add('about-content');

  const aboutTxtDiv = document.createElement('div');
  aboutTxtDiv.classList.add('about-txt');

  const aboutImgDiv = document.createElement('div');
  aboutImgDiv.classList.add('about-img');

  aboutCont.appendChild(aboutTxtDiv);

  aboutTxtDiv.appendChild(createParagraph('ABOUT US'));
  aboutTxtDiv.appendChild(
    createParagraph(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien tempor aliquam id est. Fringilla tortor tristique tincidunt at interdum tristique. Posuere vulputate amet sit montes, ut id ullamcorper.'
    )
  );

  aboutCont.appendChild(aboutImgDiv);

  aboutImgDiv.appendChild(createAboutImg(about1));
  aboutImgDiv.appendChild(createAboutImg(about2));
  aboutImgDiv.appendChild(createAboutImg(about3));

  return aboutCont;
}

function createParagraph(txt) {
  const p = document.createElement('p');
  p.textContent = txt;

  return p;
}

function createAboutImg(imgName) {
  const img = document.createElement('img');
  img.src = imgName;

  return img;
}

export default function getAbout() {
  const infoCont = document.querySelector('.info');
  infoCont.appendChild(aboutContent());
}
