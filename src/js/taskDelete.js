// eslint-disable-next-line import/no-cycle
import { taskManager } from './app';
import { taskDisplay } from './taskDisplay';

// eslint-disable-next-line import/prefer-default-export
export function taskDelete(taskid) {
  taskManager.tasks.splice(taskid, 1);
  taskDisplay(taskManager.tasks);
}
