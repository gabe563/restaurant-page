import getHome from './home';
import getMenu from './menu';
import getAbout from './about';
import getContact from './contact';

// Create header content
function header() {
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('title-div');

  const nutIcon = document.createElement('iconify-icon');
  nutIcon.setAttribute('icon', 'bi:nut-fill');
  nutIcon.setAttribute('width', '48');
  nutIcon.setAttribute('height', '45');
  nutIcon.classList.add('nut-icon');

  const title = document.createElement('p');
  title.textContent = `ROBOT\'S CAKES`;

  const pages = document.createElement('ul');
  pages.classList.add('pages');

  const home = document.createElement('li');
  home.textContent = 'Home';
  home.setAttribute('id', 'homeBtn');
  home.classList.add('current');

  const menu = document.createElement('li');
  menu.textContent = 'Menu';
  menu.setAttribute('id', 'menuBtn');

  const about = document.createElement('li');
  about.textContent = 'About';
  about.setAttribute('id', 'aboutBtn');

  const contact = document.createElement('li');
  contact.textContent = 'Contact';
  contact.setAttribute('id', 'contactBtn');

  const currBox = document.createElement('div');
  currBox.classList.add('current-box');
  currBox.classList.add('start');

  pages.appendChild(home);
  pages.appendChild(menu);
  pages.appendChild(about);
  pages.appendChild(contact);

  pages.appendChild(currBox);

  titleDiv.appendChild(nutIcon);
  titleDiv.appendChild(title);

  headerDiv.appendChild(titleDiv);
  headerDiv.appendChild(pages);

  return headerDiv;
}

// Create info div
function mainContent() {
  const infoCont = document.createElement('div');
  infoCont.classList.add('info');
  infoCont.classList.add('home');

  return infoCont;
}

// Add current class to btns on click
function changeBetweenPages() {
  const headerTxt = document.querySelector('.title-div p');
  const nutIcon = document.querySelector('.nut-icon');

  const HomeBtn = document.getElementById('homeBtn');
  const MenuBtn = document.getElementById('menuBtn');
  const AboutBtn = document.getElementById('aboutBtn');
  const ContactBtn = document.getElementById('contactBtn');

  headerTxt.addEventListener('click', () => {
    addCurrent(HomeBtn);
    removeCurrent(ContactBtn);
    removeCurrent(AboutBtn);
    removeCurrent(MenuBtn);
  });

  nutIcon.addEventListener('click', () => {
    addCurrent(HomeBtn);
    removeCurrent(ContactBtn);
    removeCurrent(AboutBtn);
    removeCurrent(MenuBtn);
  });

  HomeBtn.addEventListener('click', () => {
    addCurrent(HomeBtn);
    removeCurrent(ContactBtn);
    removeCurrent(AboutBtn);
    removeCurrent(MenuBtn);
  });

  MenuBtn.addEventListener('click', () => {
    addCurrent(MenuBtn);
    removeCurrent(HomeBtn);
    removeCurrent(AboutBtn);
    removeCurrent(ContactBtn);
  });

  AboutBtn.addEventListener('click', () => {
    addCurrent(AboutBtn);
    removeCurrent(HomeBtn);
    removeCurrent(MenuBtn);
    removeCurrent(ContactBtn);
  });

  ContactBtn.addEventListener('click', () => {
    addCurrent(ContactBtn);
    removeCurrent(HomeBtn);
    removeCurrent(AboutBtn);
    removeCurrent(MenuBtn);
  });

  function addCurrent(el) {
    el.classList.add('current');
    return el;
  }

  function removeCurrent(el) {
    el.classList.remove('current');
  }
}

// Add info div a class
function addInfoClass() {
  const infoCont = document.querySelector('.info');

  const headerTxt = document.querySelector('.title-div p');
  const nutIcon = document.querySelector('.nut-icon');

  const HomeBtn = document.getElementById('homeBtn');
  const MenuBtn = document.getElementById('menuBtn');
  const AboutBtn = document.getElementById('aboutBtn');
  const ContactBtn = document.getElementById('contactBtn');

  headerTxt.addEventListener('click', () => {
    infoCont.classList.add('home');
    infoCont.classList.remove('menu');
    infoCont.classList.remove('about');
    infoCont.classList.remove('contact');
  });

  nutIcon.addEventListener('click', () => {
    infoCont.classList.add('home');
    infoCont.classList.remove('menu');
    infoCont.classList.remove('about');
    infoCont.classList.remove('contact');
  });

  HomeBtn.addEventListener('click', () => {
    infoCont.classList.add('home');
    infoCont.classList.remove('menu');
    infoCont.classList.remove('about');
    infoCont.classList.remove('contact');
  });

  MenuBtn.addEventListener('click', () => {
    infoCont.classList.add('menu');
    infoCont.classList.remove('home');
    infoCont.classList.remove('about');
    infoCont.classList.remove('contact');
  });

  AboutBtn.addEventListener('click', () => {
    infoCont.classList.add('about');
    infoCont.classList.remove('home');
    infoCont.classList.remove('menu');
    infoCont.classList.remove('contact');
  });

  ContactBtn.addEventListener('click', () => {
    infoCont.classList.add('contact');
    infoCont.classList.remove('home');
    infoCont.classList.remove('menu');
    infoCont.classList.remove('about');
  });
}

// Change content on click
function changeContent() {
  const infoCont = document.querySelector('.info');

  const headerTxt = document.querySelector('.title-div p');
  const nutIcon = document.querySelector('.nut-icon');

  const HomeBtn = document.getElementById('homeBtn');
  const MenuBtn = document.getElementById('menuBtn');
  const AboutBtn = document.getElementById('aboutBtn');
  const ContactBtn = document.getElementById('contactBtn');

  headerTxt.addEventListener('click', () => {
    if (infoCont.classList.contains('home')) {
      if (HomeBtn.classList.contains('current')) return;
      changeBetweenPages();
      infoCont.textContent = '';
      getHome();
    }
  });

  nutIcon.addEventListener('click', () => {
    if (infoCont.classList.contains('home')) {
      if (HomeBtn.classList.contains('current')) return;
      changeBetweenPages();
      infoCont.textContent = '';
      getHome();
    }
  });

  HomeBtn.addEventListener('click', e => {
    if (infoCont.classList.contains('home')) {
      if (e.target.classList.contains('current')) return;
      changeBetweenPages();
      infoCont.textContent = '';
      getHome();
    }
  });

  MenuBtn.addEventListener('click', e => {
    if (infoCont.classList.contains('menu')) {
      if (e.target.classList.contains('current')) return;
      changeBetweenPages();
      infoCont.textContent = '';
      getMenu();
    }
  });
}

// Load all the content
export default function loadUp() {
  const contentDiv = document.getElementById('content');

  contentDiv.appendChild(header());
  contentDiv.appendChild(mainContent());
  getHome();
  addInfoClass();
  changeContent();
  changeBetweenPages();
}
