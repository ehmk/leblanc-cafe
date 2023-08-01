import './styles/contact.css';

function createContactInfo(textContent, href) {
  const div = document.createElement('div');
  const link = document.createElement('a');
  div.classList.add('contact-info');
  link.textContent = textContent;
  link.href = href;
  div.appendChild(link);
  return div;
}

export default function contact() {
  const div = document.createElement('div');
  div.id = 'contact-module';
  div.appendChild(createContactInfo('> Phone: 111-222-4444', '#'));
  div.appendChild(createContactInfo('> Twitter: @Leblanc_Tokyo', '#'));
  div.appendChild(createContactInfo('> Instagram: @Leblanc_Tokyo', '#'));
  div.appendChild(createContactInfo('> Facebook: @Leblanc_Tokyo', '#'));
  return div;
}
