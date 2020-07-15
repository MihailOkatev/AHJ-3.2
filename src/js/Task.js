// eslint-disable-next-line import/no-cycle
import { tasksRender } from './taskRender';

export default class Task {
  constructor(name) {
    this.name = name;
    this.pinned = false;
    this.HTMLComponent = tasksRender(this);
  }
}
