import { taskManager } from './TaskManager';
import Task from './Task';
import { dataCheck } from './dataCheck';
import { pinButtonAction } from './pinButtonAction';
import { filtration } from './filtration';
import { err } from './ErrorRepository';

// eslint-disable-next-line import/prefer-default-export
export class Widget {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return `<form class="tasks__control">
    <input type="text" class="tasks__input" id="task__input" placeholder="Введите название новой задачи">
    <button class="tasks__add" id="tasks__add">Добавить</button>
  </form>
 <div class="list">
      <h2>Важные задачи</h2>
      <div class="task__list-section" id="tasks_list__pinned">
            <p>no pinned tasks</p>
       </div>
      <h2>Обычные задачи</h2>
      <div class="task__list-section" id="tasks_list__standart">
       <p>no standart tasks</p>
    </div>
    </div>
<div class="error__message hide">
  <div class="error__text">
    <button type="button" class="OK_button">ОК</button>
    </div>    
`;
  }

  static get taskList() {
    return document.querySelector('.list');
  }

  listenersInit() {
    const okbtn = document.querySelector('.OK_button');
    okbtn.addEventListener('click', () => {
      this.constructor.field.value = '';
      document.querySelector('.error__message').classList.add('hide');
      const errorParagraph = document.querySelector('.error__text p');
      document.querySelector('.error__text').removeChild(errorParagraph);
    });
    this.constructor.taskList.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('pin__btn')) {
        this.taskDisplay(pinButtonAction(evt.target.closest('.task')
          .getAttribute('task-id')).tasks);
      }
      if (evt.target.classList.contains('del-button')) {
        taskManager.taskDelete(evt.target.closest('.task')
          .getAttribute('task-id'));
      }
    });

    this.constructor.field.addEventListener('input', () => {
      this.taskDisplay(filtration());
    });
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    const addButton = document.querySelector('.tasks__add');
    addButton.addEventListener('click', (evt) => {
      this.onSubmit(evt);
    });
  }

  static get field() {
    return document.querySelector('.tasks__input');
  }

  onSubmit(evt) {
    evt.preventDefault();
    if (this.constructor.field.value === '') {
      document.querySelector('.error__message')
        .classList
        .remove('hide');
      document.querySelector('.error__text')
        .insertAdjacentHTML('afterbegin', `<p>${err.tranlsate(404)}</p>`);
      // eslint-disable-next-line max-len
    } else if (taskManager.tasks.filter((item) => item.name.toLowerCase() === this.constructor.field.value).length > 0) {
      document.querySelector('.error__message')
        .classList
        .remove('hide');
      document.querySelector('.error__text')
        .insertAdjacentHTML('afterbegin', `<p>${err.tranlsate(400)}</p>`);
      // eslint-disable-next-line max-len
    } else if (taskManager.tasks.filter((item) => item.name.toLowerCase() === this.constructor.field.value).length > 0) {
      document.querySelector('.error__message').classList.remove('hide');
      document.querySelector('.error__text').insertAdjacentHTML('afterbegin', `<p>${err.tranlsate(400)}</p>`);
    } else {
      taskManager.tasks.push(new Task(this.constructor.field.value));
      this.constructor.field.value = '';
      this.taskDisplay(taskManager.tasks);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  taskDisplay(tasks) {
    const pinnedTasks = document.createDocumentFragment();
    const standartTasks = document.createDocumentFragment();
    tasks.forEach((item) => {
      if (item.pinned) {
        pinnedTasks.append(item.HTMLComponent);
      } else {
        standartTasks.append(item.HTMLComponent);
      }
    });
    document.querySelector('#tasks_list__pinned').innerHTML = '';
    document.querySelector('#tasks_list__standart').innerHTML = '';
    document.querySelector('#tasks_list__pinned')
      .append(pinnedTasks);
    document.querySelector('#tasks_list__standart')
      .append(standartTasks);
    dataCheck();
  }
}
