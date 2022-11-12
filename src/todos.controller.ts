import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import ITodo from './Itodo.interface';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() todo: ITodo): ITodo {
    return this.todosService.create(todo);
  }

  @Put()
  update(@Body() todo: ITodo): ITodo {
    return this.todosService.editById(todo);
  }

  @Get()
  getAll(): Array<ITodo> {
    return this.todosService.getAll();
  }
  @Get('/:id')
  getById(@Param() params): ITodo {
    return this.todosService.getById(params.id);
  }

  @Delete('/:id')
  deleteTodo(@Param() params): void {
    this.todosService.deleteById(params.id);
  }
}
