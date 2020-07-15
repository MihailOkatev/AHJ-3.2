// eslint-disable-next-line import/no-cycle
import { taskManager } from './app';

export function tasksRender(task) {
  const taskElem = document.createElement('div');
  taskElem.classList.add('task');
  taskElem.setAttribute('task-id', String(taskManager.tasks.length));
  taskElem.innerHTML = `<div class="task_name">${task.name}</div>
<div class="task__buttons">
<label class="checkbox__group">
<input type="checkbox" class="visability-hidden">
<span class="button__text pin__btn"></span>
</label>
<span class="del-button"></span>`;
  return taskElem;
}
