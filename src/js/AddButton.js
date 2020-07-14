import { taskManager } from './app';
import Task from './Task';
import { taskDisplay } from './taskDisplay';
import { field } from './listenersAdd';

export class AddButton {
  constructor() {
    this.HTML = document.querySelector('.tasks__add')
      .addEventListener('click', evt => {
        evt.preventDefault();
        taskManager.tasks.push(new Task(field.value));
        field.value = '';
        taskDisplay(taskManager.tasks);
      });
  }
}
