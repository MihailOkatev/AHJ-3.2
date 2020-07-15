// eslint-disable-next-line import/no-cycle
import { taskManager } from './app';
// eslint-disable-next-line import/no-cycle
import { taskDisplay } from './taskDisplay';

// eslint-disable-next-line import/prefer-default-export
export function pinButtonAction(taskid) {
  const id = Number(taskid);
  if (taskManager.tasks[id].pinned === false) {
    taskManager.tasks[id].pinned = true;
  } else {
    taskManager.tasks[id].pinned = false;
  }
  taskDisplay(taskManager.tasks);
}
