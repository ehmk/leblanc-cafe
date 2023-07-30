import './styles/home.css';
import leblanc from './images/leblanc-1.jpg';

function generatePicture(path, HTMLclass) {
  const picture = new Image();
  picture.src = path;
  picture.classList.add(HTMLclass);
  return picture;
}

function description(textContent) {
  const description = document.createElement('div');
  const descriptionText = document.createElement('p');
  description.classList.add('description');
  descriptionText.textContent = textContent;
  description.appendChild(descriptionText);
  return description;
}

function hours() {
  const hours = document.createElement('div');
  hours.classList.add('hours');
  const title = document.createElement('h2');
  title.textContent = 'Hours';
  const hoursList = document.createElement('ul');
  appendHours(hoursList);
  hours.appendChild(title);
  hours.appendChild(hoursList);
  return hours;
}

function appendHours(list) {
  const keys = Object.keys(hoursMap);
  keys.forEach((key, index) => {
    const li = document.createElement('li');
    li.textContent = `${key}: ${hoursMap[key]}`;
    list.appendChild(li);
  });
}

const hoursMap = {
  Sunday: '9AM - 10PM',
  Monday: '9AM - 10PM',
  Tuesday: '9AM - 10PM',
  Wednesday: '9AM - 10PM',
  Thursday: '9AM - 10PM',
  Friday: '9AM - 10PM',
  Saturday: '9AM - 10PM',
};

export default function home() {
  const element = document.createElement('div');
  element.classList.add('home');
  element.appendChild(generatePicture(leblanc, 'leblanc'));
  element.appendChild(
    description(
      `Based in Setagaya (世田谷区) in Tokyo, Leblanc is a café in Yongen-Jaya (四軒茶屋) owned by Sojiro Sakura, famous for its signature coffee and curry. The curry and coffee's recipes were invented by Sojiro himself, and the current curry recipe was also improved by Wakaba.`
    )
  );
  element.appendChild(hours());
  return element;
}
