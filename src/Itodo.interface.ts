import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export default interface ITodo extends InMemoryDBEntity {
  id: string;
  value: string;
  isComplated?: boolean;
}
