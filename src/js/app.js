import { Widget } from './Widget';

const widget = new Widget(document.querySelector('#container'));
widget.bindToDOM();
widget.listenersInit();
