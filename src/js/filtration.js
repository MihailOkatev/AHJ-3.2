import { taskManager } from './TaskManager';

// eslint-disable-next-line import/prefer-default-export
export function filtration() {
  const field = document.querySelector('.tasks__input');
  // eslint-disable-next-line max-len
  const filtrated = taskManager.tasks.filter((item) => item.pinned === true).concat(taskManager.tasks.filter((item) => item.pinned === false).filter((item) => item.name.toLowerCase().indexOf(field.value.toLowerCase(), 0) === 0));
  return filtrated;
}
