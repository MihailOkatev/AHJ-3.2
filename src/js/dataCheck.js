// eslint-disable-next-line import/no-cycle
import { taskManager } from './app';

// eslint-disable-next-line import/prefer-default-export
export function dataCheck() {
  console.log(document.querySelector('#tasks_list__pinned div'));
  if (document.querySelector('#tasks_list__pinned div') === null) {
    document.querySelector('#tasks_list__pinned').insertAdjacentText('afterbegin', 'No Pinned tasks');
    if (document.querySelector('#tasks_list__standart div') === null && taskManager.tasks.length > 0) {
      document.querySelector('#tasks_list__standart').insertAdjacentText('afterbegin', 'No filtrated tasks');
    }
  }
}
