// eslint-disable-next-line import/no-cycle
import { dataCheck } from './dataCheck';

// eslint-disable-next-line import/prefer-default-export
export function taskDisplay(tasks) {
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
  document.querySelector('#tasks_list__pinned').append(pinnedTasks);
  document.querySelector('#tasks_list__standart').append(standartTasks);
  dataCheck();
}
