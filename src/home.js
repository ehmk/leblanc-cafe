import './styles/home.css';
import leblanc from './images/leblanc-1.jpg';

function generatePicture(path, HTMLclass) {
  const picture = new Image();
  picture.src = path;
  picture.classList.add(HTMLclass);
  return picture;
}

function generateDescription(textContent) {
  const description = document.createElement('p');
  description.textContent = textContent;
  description.classList.add('description');
  return description;
}

export default function home() {
  const element = document.createElement('div');
  element.classList.add('home');
  element.appendChild(generatePicture(leblanc, 'leblanc'));
  element.appendChild(
    generateDescription(
      `Based in Setagaya (世田谷区) in Tokyo, Leblanc is a café in Yongen-Jaya (四軒茶屋) owned by Sojiro Sakura, famous for its signature coffee and curry. The curry and coffee's recipes were invented by Sojiro himself, and the current curry recipe was also improved by Wakaba.`
    )
  );
  return element;
}
