import { pinButtonAction } from './pinButtonAction';
import { filtration } from './filtration';
import { taskDelete } from './taskDelete';

export const field = document.querySelector('#task__input');

export function listenersAdd() {
  const taskList = document.querySelector('#tasks_list');
  taskList.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('pin__btn')) {
      pinButtonAction(evt.target.closest('.task')
        .getAttribute('task-id'));
    }
    if (evt.target.classList.contains('del-button')) {
      taskDelete(evt.target.closest('.task')
        .getAttribute('task-id'));
    }
  });

  field.addEventListener('input', (evt) => {
    filtration();
  });
}
