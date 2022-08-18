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
  title.textContent = `ROBOT\'S SNACKS`;

  const pages = document.createElement('ul');
  pages.classList.add('pages');

  const home = document.createElement('li');
  home.textContent = 'Home';

  const menu = document.createElement('li');
  menu.textContent = 'Menu';

  const about = document.createElement('li');
  about.textContent = 'About';

  const contact = document.createElement('li');
  contact.textContent = 'Contact';

  const currBox = document.createElement('div');
  currBox.classList.add('current-box');

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

export default header;
