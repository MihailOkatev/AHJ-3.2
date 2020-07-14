import { TaskManager } from './TaskManager';
import { listenersAdd } from './listenersAdd';
import { AddButton } from './AddButton';

export const taskManager = new TaskManager();
const addButton = new AddButton();
listenersAdd();
