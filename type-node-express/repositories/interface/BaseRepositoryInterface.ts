import { Request } from 'express';
export default interface BaseRepositoryInterface {
  getAll(): Promise<any>;
  getItemById(id: number): Promise<any>;
  createItem(req: Request): Promise<any>;
  updateItem(req: Request): Promise<any>;
  deleteItem(id: number): Promise<any>;
}
