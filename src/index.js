import navBar from './nav.js';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';
import './styles/css-reset.css';
import './styles/global.css';

const initializePage = (() => {
  const body = document.body;
  let content = document.createElement('div');
  content.id = 'content';
  content.appendChild(home());
  body.appendChild(navBar());
  body.appendChild(content);
})();

export function switchContentModule(button) {
  if (button.id === 'home') {
    content.textContent = '';
    content.appendChild(home());
  } else if (button.id === 'menu') {
    content.textContent = '';
    content.appendChild(menu());
  } else if (button.id === 'contact') {
    content.textContent = '';
    content.appendChild(contact());
  }
}
