// eslint-disable-next-line import/no-cycle
import { pinButtonAction } from './pinButtonAction';
// eslint-disable-next-line import/no-cycle
import { filtration } from './filtration';
// eslint-disable-next-line import/no-cycle
import { taskDelete } from './taskDelete';

export const field = document.querySelector('#task__input');

export function listenersAdd() {
  const taskList = document.querySelector('#tasks_list');
  const okbtn = document.querySelector('.OK_button');
  okbtn.addEventListener('click', () => {
    field.value = '';
    document.querySelector('.error__message').classList.add('hide');
    const errorParagraph = document.querySelector('.error__text p');
    document.querySelector('.error__text').removeChild(errorParagraph);
  });
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

  field.addEventListener('input', () => {
    filtration();
  });
}
