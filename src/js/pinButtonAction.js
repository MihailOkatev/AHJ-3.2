import { taskManager } from './TaskManager';

// eslint-disable-next-line import/prefer-default-export
export function pinButtonAction(taskid) {
  const id = Number(taskid);
  if (taskManager.tasks[id].pinned === false) {
    taskManager.tasks[id].pinned = true;
  } else {
    taskManager.tasks[id].pinned = false;
  }
  return taskManager;
}
