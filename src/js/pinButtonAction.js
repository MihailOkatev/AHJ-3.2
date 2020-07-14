import {taskManager} from './app';
import { taskDisplay } from './taskDisplay';

export function pinButtonAction(taskid) {
  console.log('s');
  console.log(taskManager);
  const id = Number(taskid);
  if (taskManager.tasks[id].pinned === false) {
    taskManager.tasks[id].pinned = true;
  } else {
    taskManager.tasks[id].pinned = false;
  }
  taskDisplay(taskManager.tasks);
}
