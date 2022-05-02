import _ from 'lodash';
import './style/index.scss';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

const myfunc = () => {
  const item = document.createElement('div');
  item.innerHTML = "<p>Test de la réécriture d'ES6 en ES5</p>";
  document.body.appendChild(item);
}

myfunc();