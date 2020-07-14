export class TaskManager {
  constructor() {
    this.tasks = [];
    document.querySelector('#container').insertAdjacentHTML('beforeend', '<div id="tasks_list"></div>');
    document.querySelector('#tasks_list').insertAdjacentHTML('afterbegin', '<h2>Важные задачи</h2><div class="task__list-section" id="tasks_list__pinned"></div>');
    document.querySelector('#tasks_list').insertAdjacentHTML('beforeend', '<h2>Обычные задачи</h2><div class="task__list-section" id="tasks_list__standart"></div>');
  }
}
