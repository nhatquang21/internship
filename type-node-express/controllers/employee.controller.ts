import { EmployeeRepository } from './../repositories/employee.repository';
import { Request, Response } from 'express';

export class EmployeeController {
  er: EmployeeRepository;

  constructor() {
    this.er = new EmployeeRepository();
  }

  getAllEmployees = async (req: Request, res: Response) => {
    try {
      let listOfEmps = await this.er.getAll();
      if (listOfEmps) {
        res.status(200).send(listOfEmps);
      }
    } catch (e) {
      throw e;
    }
  };
  getEmployeeByID = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    let result = await this.er.getItemById(id);

    try {
      if (result) {
        res.status(200).send(result);
      } else if (!result) {
        res.status(202).send(`Employee doesn't exist`);
      }
    } catch (e) {
      return false;
    }
  };
  createEmployee = async (req: Request, res: Response) => {
    try {
      let result = await this.er.createItem(req);

      result
        ? res.status(200).send('Add employee successful')
        : res.status(202).send(`Add employee unsuccessful`);
    } catch (e) {
      res.status(400).send('Add employee failed because of the params');
    }
  };
  updateEmployee = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      let result = await this.er.updateItem(id, req);

      if (result) {
        res.status(200).send('Update employee successful');
      } else {
        res.status(202).send(`Update employee unsuccessful`);
      }
    } catch (e) {
      res.status(400).send('Failed to update employee because of the param');
    }
  };
  deleteEmployee = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      let result = await this.er.deleteItem(id);
      if (result) {
        res.status(200).send('Delete employee successful');
      } else {
        res.status(202).send(`Delete employee unsuccessful`);
      }
    } catch (e) {
      res.status(400).send('Delete employee unsuccessful because of the param');
    }
  };
}
