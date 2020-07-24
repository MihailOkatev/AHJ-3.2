export class TaskManager {
  constructor() {
    this.tasks = [];
  }

  taskDelete(taskid) {
    this.tasks.splice(taskid, 1);
    this.taskDisplay(this.tasks);
  }
}

export const taskManager = new TaskManager();
