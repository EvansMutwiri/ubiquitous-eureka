import _ from 'lodash';
import './style.css';
import Icon from './image.jpg';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // add class called hello
    element.classList.add('hello');

    // add icon to div
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());
