export default class TaskManager {
  constructor() {
    this.tasks = [];
    document.querySelector('#container').insertAdjacentHTML('beforeend', '<div id="tasks_list"></div>');
    document.querySelector('#tasks_list').insertAdjacentHTML('afterbegin', '<div class="task__list-section" id="tasks_list__pinned"></div>');
    document.querySelector('#tasks_list').insertAdjacentHTML('beforeend', '<div class="task__list-section" id="tasks_list__standart"></div>');
  }
}
export const taskManager = new TaskManager();

// eslint-disable-next-line no-shadow
export function taskManagerRender(taskManager) {
  document.querySelectorAll('.task__list-section').forEach((item) => {
    item.innerHTML = '';
  });
  taskManager.tasks.forEach((item, index) => {
    const taskElem = `<div class="task" task-id='${index}'>
<div class="task_name">${item.name}</div>
<div class="task__buttons">
<label class="checkbox__group">
<input type="checkbox" class="visability-hidden">
<span class="button__text pin__btn"></span>
</label>
<span class="del-button"></span>
</div>
</div>`;
    if (item.pinned) {
      document.querySelector('#tasks_list__pinned').insertAdjacentHTML('beforeend', taskElem);
      document.querySelector(`div[task-id="${index}"] .visability-hidden`).setAttribute('checked', 'checked');
    } else {
      document.querySelector('#tasks_list__standart').insertAdjacentHTML('beforeend', taskElem);
    }
  });
}

export function listenersAdd() {
  const pinbtn = document.querySelectorAll('.pin__btn');
  pinbtn.forEach((item) => item.addEventListener('click', (evt) => {
    pinButtonAction(Number(evt.target.closest('.task').getAttribute('task-id')));
  }));
}

export function pinButtonAction(taskid) {
  if (taskManager.tasks[taskid].pinned === false) {
    taskManager.tasks[taskid].pinned = true;
  } else {
    taskManager.tasks[taskid].pinned = false;
  }
  taskManagerRender(taskManager);
  listenersAdd();
}
