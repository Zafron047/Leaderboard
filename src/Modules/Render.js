import Dom from './Dom.js';

const render = (param) => {
  const listBox = document.querySelector('#list-box');
  listBox.textContent = '';
  param.forEach((Obj) => {
    Dom(Obj.Name, Obj.Score);
  });
};

export default render;