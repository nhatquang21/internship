import { Request, Response } from 'express';
import RoleRepository from '../repositories/role.repository';

export class RoleController {
  rr: RoleRepository;

  constructor() {
    this.rr = new RoleRepository();
  }

  getAllRoles = async (req: Request, res: Response) => {
    try {
      let listOfRoles = await this.rr.getAll();
      if (listOfRoles) {
        res.status(200).send(listOfRoles);
      }
    } catch (e) {
      throw e;
    }
  };
  getRoleByID = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    let result = await this.rr.getItemById(id);

    try {
      if (result) {
        res.status(200).send(result);
      } else if (!result) {
        res.status(202).send(`Role doesn't exist`);
      }
    } catch (e) {
      return false;
    }
  };
  createRole = async (req: Request, res: Response) => {
    let result = await this.rr.createItem(req, res);
  };
  updateRole = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    let result = await this.rr.updateItem(id, req, res);
  };
  deleteRole = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    let result = await this.rr.deleteItem(id, req, res);
  };
}
