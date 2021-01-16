import _ from 'lodash';
import template from './template.hbs';
import fetchCountries from './fetch-countries.js';
import notifications from './pnotify.js';
import './styles.css';

const refs = {
  text: document.getElementById('country-search'),
  list: document.querySelector('.country-list'),
};

refs.text.addEventListener('input', _.debounce(onInputName, 500));

function onInputName(event) {
  const inputName = event.target.value.toLowerCase();
  console.log(inputName);
  clearList();
  if (!inputName) {
    return;
  }
  fetchCountries(inputName).then(createListMarkup).then(attachToList);
}

function createListMarkup(listItems) {
  if (listItems.length === 1) {
    return template(listItems[0]);
  }

  if (listItems.length > 10) {
    notifications.onOverflow();
  }

  return listItems.map(item => `<li>${item.name}</li>`).join('');
}

function attachToList(listMarkup) {
  refs.list.innerHTML = listMarkup;
}

function clearList() {
  refs.list.innerHTML = '';
}

// const baseUrl = 'https://restcountries.eu/rest/v2/name/';
// const searchQuery = 'Spain';
// fetch(baseUrl + searchQuery)
//   .then(response => response.json())
//   .then(json => console.log(json));

// fetchCountries('Ukraine');
