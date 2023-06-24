import dom from './Dom.js';

const render = (param) => {
  const listBox = document.querySelector('#list-box');
  listBox.textContent = '';
  param.forEach((Obj) => {
    dom(Obj.user, Obj.score);
  });
};

export default render;