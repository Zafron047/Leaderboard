import './style.css';
import setApi from './Modules/setApi.js';
import getApiResponse from './Modules/getApiResponse.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const id = 'Fpg6HrLPFBcjXwpU9z09';

const refreshBtn = document.querySelector('#refresh-btn');
refreshBtn.addEventListener('click', () => {
  getApiResponse(url, id);
});

const submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener('click', () => {
  const nameInput = document.querySelector('#name').value;
  const scoreInput = document.querySelector('#score').value;
  const obj = { user: nameInput, score: scoreInput };

  if (nameInput && !Number.isNaN(Number(scoreInput))) {
    setApi(url, id, obj);
    document.querySelector('#name').value = '';
    document.querySelector('#score').value = '';
  }
});