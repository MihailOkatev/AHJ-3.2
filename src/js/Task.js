import { taskManager } from './TaskManager';

export default class Task {
  constructor(name) {
    this.name = name;
    this.pinned = false;
    this.HTMLComponent = this.tasksRender();
  }

  tasksRender() {
    const taskElem = document.createElement('div');
    taskElem.classList.add('task');
    taskElem.setAttribute('task-id', String(taskManager.tasks.length));
    taskElem.innerHTML = `<div class="task_name">${this.name}</div>
<div class="task__buttons">
<label class="checkbox__group">
<input type="checkbox" class="visability-hidden">
<span class="button__text pin__btn"></span>
</label>
<span class="del-button"></span>`;
    return taskElem;
  }
}
