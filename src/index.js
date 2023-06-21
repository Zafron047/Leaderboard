import './style.css';
import updateArray from './Modules/updateArray';
import render from './Modules/Render';

const array = JSON.parse(localStorage.getItem('Data')) || [];

const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', () => {
  if (nameInput.value && scoreInput.value) {
    updateArray(nameInput, scoreInput);
    render();
  }
});

render();

export { array };
