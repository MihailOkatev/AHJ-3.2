// eslint-disable-next-line import/prefer-default-export
export class ErrorRepository {
  constructor() {
    this.storage = new Map();
    this.storage.set(404, 'Вы пытаетесь создать пустую задачу');
    this.storage.set(400, 'такой задача уже есть');
  }

  tranlsate(code) {
    if (this.storage.has(code)) {
      return this.storage.get(code);
    }
    return 'Unknown error';
  }
}
