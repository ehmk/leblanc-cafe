import navBar from './nav.js';
import home from './home.js';
import './styles/global.css';

const body = document.body;
let content = document.createElement('div');

body.appendChild(navBar());

content = home();
body.appendChild(content);
