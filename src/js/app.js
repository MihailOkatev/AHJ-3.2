import { TaskManager } from './TaskManager';
// eslint-disable-next-line import/no-cycle
import { listenersAdd } from './listenersAdd';
// eslint-disable-next-line import/no-cycle
import { AddButton } from './AddButton';

// eslint-disable-next-line import/prefer-default-export
export const taskManager = new TaskManager();
// eslint-disable-next-line no-unused-vars
const addButton = new AddButton();
listenersAdd();
