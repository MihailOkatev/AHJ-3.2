import { taskManager } from './app';
import { taskDisplay } from './taskDisplay';
import {field} from './listenersAdd';

export function filtration() {
  const filtrated = taskManager.tasks.filter((item) => item.pinned === true).concat(taskManager.tasks.filter((item) => item.pinned === false).filter((item) => item.name.toLowerCase().indexOf(field.value.toLowerCase(), 0) === 0));
  taskDisplay(filtrated);
}
