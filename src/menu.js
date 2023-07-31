import './styles/menu.css';

function createMenuItem(name, description, price) {
  const menuItem = {};
  menuItem.name = name;
  menuItem.description = description;
  menuItem.price = price;
  return menuItem;
}

function createMenuItemDiv(obj) {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const description = document.createElement('p');
  const price = document.createElement('p');
  title.textContent = obj.name;
  description.textContent = obj.description;
  price.textContent = obj.price;
  div.appendChild(title);
  div.appendChild(description);
  div.appendChild(price);
  return div;
}

function populateMenuArray() {
  // A method to populate the menu for the purposes of this project
  for (let i = 0; i < 10; i++) {
    menuItems.push(
      createMenuItem(
        'Lorem Ipsum',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        '¥1000'
      )
    );
  }
}

function appendItemsToMenuDiv(menuArray, menuModule) {
  for (let i = 0; i < menuArray.length; i++) {
    const menuItem = createMenuItemDiv(menuItems[i]);
    menuItem.classList.add('menu-item');
    menuModule.appendChild(menuItem);
  }
}

let menuItems = [];

export default function menu() {
  const menu = document.createElement('div');
  menu.id = 'menu-module';
  populateMenuArray();
  console.log(menuItems);
  appendItemsToMenuDiv(menuItems, menu);
  return menu;
}
