import { Request } from 'express';

export default interface BaseRepositoryInterface<T> {
  getAll(): Promise<T[] | undefined>;
  getItemById(id: number, res: Response): Promise<boolean | T | string>;
  createItem(req: Request): Promise<boolean | undefined>;
  updateItem(id: number, eq: Request): Promise<boolean | undefined | string>;
  deleteItem(id: number): Promise<boolean | undefined | string>;
}
