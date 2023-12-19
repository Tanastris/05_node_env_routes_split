'use strict';
console.log('front.js file was loaded');

const url = 'http://localhost:3000/api/books'
// surinkti inputus ir issiusti i back end api

const els = {
  form: document.getElementById('addBookForm');
}
els.form.addEventListener('submit', (e) => {
  e.preventDefault()

})
