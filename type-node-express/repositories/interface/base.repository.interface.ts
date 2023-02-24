import { Request } from 'express';

export default interface BaseRepositoryInterface<T> {
  getAll(): Promise<T[] | undefined>;
  getItemById(id: number): Promise<boolean | T>;
  createItem(req: Request): Promise<boolean | undefined>;
  updateItem(req: Request): Promise<boolean | undefined>;
  deleteItem(id: number): Promise<boolean | undefined>;
}
