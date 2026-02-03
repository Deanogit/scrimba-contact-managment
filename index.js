/*
Challenge:
1. Wire up this search pattern app so that inputting 
   a full or partial name brings up the matching     
   contact or contacts.
*/

// import / export
// regex
// filter()
// forEach()
// object destructuring

import { contactsArr } from './contactsData.js';

const patternSearchInput = document.getElementById('pattern-search-input');
const patternSearchSubmit = document.getElementById('pattern-search-submit');
const contactDisplay = document.getElementById('contact-display');

// listen to pattern-search-input
// listen to pattern-search-submit
// on pattern-search-submit event
// // e.preventDefault()
// // take pattern-search-input.value
// // loop through contactsArr.name
// // // if contactsArr.name.contains(patter-search-value) {
// // // render contactsArr[i] in contact-display}

// eventListener
patternSearchSubmit.addEventListener('click', () => {
  // helper function
  findMatchingContacts(contactsArr, patternSearchInput.value);
  // console.log(patternSearchInput.value);
  // loop through contactsArr to find matches
  // for (let i = 0; i < contactsArr.length; i++) {
  //  if (contactsArr[i].name.includes(patternSearchInput.value)) {
  //    renderContact(contactsArr[i]);
  //  }
  // }

  // contactDisplay.innerHTML += patternSearchInput.value;
});

function findMatchingContacts(contactsArr, pattern) {
  contactDisplay.innerHTML = '';
  const regex = new RegExp(pattern, 'i');
  contactsArr
    .filter(function (contact) {
      return regex.test(contact.name);
    })
    .forEach(function (contact) {
      renderContact(contact);
    });
}

function renderContact(contactObj) {
  //console.log(contactObj);
  const { name, email, phone } = contactObj;
  const contactCard = document.createElement('aside');
  contactCard.classList.add('contact-card');

  const nameElem = document.createElement('p');
  const emailElem = document.createElement('p');
  const phoneElem = document.createElement('p');

  nameElem.innerText = name;
  emailElem.innerText = email;
  phoneElem.innerText = phone;

  contactCard.appendChild(nameElem);
  contactCard.appendChild(emailElem);
  contactCard.appendChild(phoneElem);
  contactDisplay.appendChild(contactCard);
  // contactCard.innerHTML = `<p>${contactObj.name}</p><p>${contactObj.email}</p><p>${contactObj.phone}</p>`;
  // contactDisplay.appendChild(contactCard);
  /*
    The CSS for contact-card has been done for you. 
    The name, email and phone details can be placed in
    'p' elements and placed inside contact-card. 
*/
}
