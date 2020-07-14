import { tasksRender } from './taskRender';
import { listenersAdd } from './listenersAdd';

export default class Task {
  constructor(name) {
    this.name = name;
    this.pinned = false;
    this.HTMLComponent = tasksRender(this);
  }
}
