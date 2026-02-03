## Contact Management - Search Feature

An app that listens to an input and submit to search a database of contact details and render to UI.

- `Import / Export`
  JavaScript Modules are code blocks that can **export** or **import** functions and values. Modules let you break up code into **seperate files**. Modules are a fundamental feature of **modern JavaScript**.
  In this instance the contactsData is imported into index.js so it can be looked through to render the contacts that match the search values.

- `Regex`
  I first attempted to solve this challenge by using `.contains()` method but this didn't work as intended. Instead, in the helper function `findMatchingContacts()` the `contactsArr` is used as the first argument, and `pattern` as the second. The `pattern` represents the `patternSearchInput.value` which is captured when the `submit` button is clicked, using an `addEventListener` on the `patternSearchSubmit` which is found in the `DOM` by `document.getElementById('pattern-search-input')`.
- `filter()`
- `forEach()`
  By using `const regex = new RegExp(pattern, 'i')` and using `regex` with `filter()` on the `contactsArr`, returning all contacts that return true when `regex.test(contact.name)` with a `.forEach()` chained on for good measure in order to render the contact with `renderContact(contact)`

- `Object Destructuring`
  Inside the `renderContact()` function, `contactObj` is destructured, creating the `name`, `email` and `phone` values which are then used as values for the `innerText` for elements created using `document.createElement()`
