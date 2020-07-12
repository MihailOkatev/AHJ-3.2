import {
  listenersAdd, pinButtonAction, taskManagerRender, taskManager,
} from './TaskManager';
import Task from './Task';
import { ErrorRepository } from './ErrorRepository';

const errs = new ErrorRepository();
const addButton = document.querySelector('.tasks__add');
const field = document.querySelector('.tasks__input');
const okbtn = document.querySelector('.OK_button');
const errorMessage = document.querySelector('.error__message');

addButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (field.value === '') {
    errorMessage.classList.remove('hide');
    document.querySelector('.error__text').insertAdjacentHTML('afterbegin', `<div>${errs.tranlsate(404)}</div>`);
  } else if (taskManager.tasks.filter((item) => item.name === field.value).length !== 0) {
    errorMessage.classList.remove('hide');
    document.querySelector('.error__text').insertAdjacentHTML('afterbegin', `<div>${errs.tranlsate(400)}</div>`);
  } else {
    taskManager.tasks.push(new Task(field.value));
    field.value = '';
    taskManagerRender(taskManager);
    listenersAdd();
  }
});

okbtn.addEventListener('click', () => {
  errorMessage.classList.add('hide');
});
