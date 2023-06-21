import { array } from '..';
import Dom from './Dom';

const render = () => {
  const listBox = document.querySelector('#list-box');
  listBox.textContent = '';
  array.forEach((Obj) => {
    Dom(Obj.Name, Obj.Score);
  });
};

export default render;