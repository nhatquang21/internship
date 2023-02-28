import { Request, Response } from 'express';

export default interface BaseRepositoryInterface<T> {
  getAll(): Promise<T[] | undefined>;
  getItemById(id: number, res: Response): Promise<boolean | T | string>;
  createItem(req: Request, res: Response): Promise<boolean | any>;
  updateItem(
    id: number,
    req: Request,
    res: Response
  ): Promise<boolean | undefined | string | any>;
  deleteItem(id: number): Promise<boolean | undefined | string>;
}
