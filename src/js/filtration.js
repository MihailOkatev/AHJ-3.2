// eslint-disable-next-line import/no-cycle
import { taskManager } from './app';
// eslint-disable-next-line import/no-cycle
import { taskDisplay } from './taskDisplay';
// eslint-disable-next-line import/no-cycle
import { field } from './listenersAdd';

// eslint-disable-next-line import/prefer-default-export
export function filtration() {
  // eslint-disable-next-line max-len
  const filtrated = taskManager.tasks.filter((item) => item.pinned === true).concat(taskManager.tasks.filter((item) => item.pinned === false).filter((item) => item.name.toLowerCase().indexOf(field.value.toLowerCase(), 0) === 0));
  taskDisplay(filtrated);
}
