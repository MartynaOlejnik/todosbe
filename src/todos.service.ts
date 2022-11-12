import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import ITodo from './Itodo.interface';

@Injectable()
export class TodosService {
  constructor(private inMemoService: InMemoryDBService<ITodo>) {}
  create(todo: ITodo): ITodo {
    todo.id = uuid().toString();
    return this.inMemoService.create(todo);
  }
  getAll(): Array<ITodo> {
    return this.inMemoService.getAll();
  }
  getById(id: string): ITodo {
    return this.inMemoService.get(id);
  }
  deleteById(id: string): void {
    this.inMemoService.delete(id);
  }
  editById(todo: ITodo): ITodo {
    this.inMemoService.update(todo);
    return this.inMemoService.get(todo.id);
  }
}
