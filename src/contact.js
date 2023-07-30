import './styles/contact.css';

export default function contact() {
  const contact = document.createElement('div');
  contact.id = 'contact-module';
  contact.textContent = 'Contact!';
  return contact;
}
