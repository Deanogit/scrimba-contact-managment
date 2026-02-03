/*
Challenge:
1. Wire up this search pattern app so that inputting 
   a full or partial name brings up the matching     
   contact or contacts.
*/

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

function renderContact(contactObj) {
  const contactCard = document.createElement('aside');
  contactCard.classList.add('contact-card');
  /*
    The CSS for contact-card has been done for you. 
    The name, email and phone details can be placed in
    'p' elements and placed inside contact-card. 
*/
}
