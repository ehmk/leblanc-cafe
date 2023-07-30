import './styles/menu.css';

export default function menu() {
  const menu = document.createElement('div');
  menu.id = 'menu-module';
  menu.textContent = 'Menu!';
  return menu;
}
