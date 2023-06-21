import './style.css';
import updateArray from './Modules/updateArray.js';
import render from './Modules/Render.js';

const array = JSON.parse(localStorage.getItem('Data')) || [];

const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', () => {
  if (nameInput.value && scoreInput.value) {
    updateArray(array, nameInput, scoreInput);
    render(array);
  }
});

render(array);
