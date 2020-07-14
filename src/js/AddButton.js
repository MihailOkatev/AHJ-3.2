import { taskManager } from './app';
import Task from './Task';
import { taskDisplay } from './taskDisplay';
import { field } from './listenersAdd';
import { ErrorRepository } from './ErrorRepository';

export const err = new ErrorRepository();

export class AddButton {
  constructor() {
    this.HTML = document.querySelector('.tasks__add')
      .addEventListener('click', (evt) => {
        evt.preventDefault();
        if (field.value === '') {
          document.querySelector('.error__message').classList.remove('hide');
          document.querySelector('.error__text').insertAdjacentHTML('afterbegin', `<p>${err.tranlsate(404)}</p>`);
          // eslint-disable-next-line max-len
        } else if (taskManager.tasks.filter((item) => item.name.toLowerCase() === field.value).length > 0) {
          document.querySelector('.error__message').classList.remove('hide');
          document.querySelector('.error__text').insertAdjacentHTML('afterbegin', `<p>${err.tranlsate(400)}</p>`);
        } else {
          taskManager.tasks.push(new Task(field.value));
          field.value = '';
          taskDisplay(taskManager.tasks);
        }
      });
  }
}
