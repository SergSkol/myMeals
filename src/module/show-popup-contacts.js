const showPopupContacts = () => {
  const mainSection = document.querySelector('header');
  const cont = document.createElement('div');
  cont.className = 'cont-popup';

  const closeIcon = document.createElement('a');
  closeIcon.className = 'cont-popup-close-icon fa fa-times';
  cont.appendChild(closeIcon);

  closeIcon.addEventListener('click', () => {
    cont.remove();
  });

  const p1 = document.createElement('h2');
  p1.textContent = 'Contacts:';
  cont.appendChild(p1);

  const div = document.createElement('div');
  div.className = 'cont-popup-div';
  cont.appendChild(div);

  const div1 = document.createElement('div');
  div.appendChild(div1);

  const p2 = document.createElement('p');
  p2.className = 'cont-popup-p';
  p2.innerHTML = ` 
  👤 Odai Alazzeh <br>
      GitHub: @odaialazzeh <br>
      Twitter: @odaialazzeh4 <br>
      <a href="https://www.linkedin.com/in/odai-alazzeh-01546024a/">LinkedIn</a>`;
  div1.appendChild(p2);

  const div2 = document.createElement('div');
  div.appendChild(div2);

  const p3 = document.createElement('p');
  p3.className = 'cont-popup-p';
  p3.innerHTML = ` 
  👤 Sergiy Shkolnik <br>
  GitHub: @SergSkol <br>
  Twitter: @sps676 <br>
  <a href="https://www.linkedin.com/in/sergiy-shkolnik-7801a53/">LinkedIn</a>`;
  div2.appendChild(p3);

  mainSection.appendChild(cont);
};

export default showPopupContacts;
