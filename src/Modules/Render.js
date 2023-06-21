import { array } from '..';
import Dom from './Dom';

const render = () => {
  array.forEach((Obj) => {
    Dom(Obj.Name, Obj.Score);
  });
};

export default render;