import './styles/nav.css';

export default function navBar() {
  const nav = document.createElement('div');
  nav.classList.add('nav-bar');
  appendButtons(nav, buttons);
  return nav;
}

const buttons = [homeButton(), menuButton(), contactButton()];

function homeButton() {
  const btn = document.createElement('button');
  btn.textContent = 'Home';
  return btn;
}

function menuButton() {
  const btn = document.createElement('button');
  btn.textContent = 'Menu';
  return btn;
}

function contactButton() {
  const btn = document.createElement('button');
  btn.textContent = 'Contact';
  return btn;
}

function appendButtons(div, buttons) {
  for (let i = 0; i < buttons.length; i++) {
    div.appendChild(buttons[i]);
  }
}
