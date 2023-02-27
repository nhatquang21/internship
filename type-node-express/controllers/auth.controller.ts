import AuthRepository from '../repositories/auth.repository';
import express, { Request, Response } from 'express';

export class AuthController {
  ur: AuthRepository;

  constructor() {
    this.ur = new AuthRepository();
  }

  getAllUsers = async (req: Request, res: Response) => {
    try {
      let listOfUsers = await this.ur.getAll();
      if (listOfUsers) {
        res.status(200).send(listOfUsers);
      }
    } catch (e) {
      throw e;
    }
  };

  getUserByID = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    let result = await this.ur.getItemById(id);
    try {
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(202).send(`User doesn't exist`);
      }
    } catch (e) {
      throw e;
    }
  };
  createUser = async (req: Request, res: Response) => {
    let result = await this.ur.createItem(req, res);
    if (!result) res.status(400).send('Invalid data ');
  };
  updatePwd = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      let result = await this.ur.updateItem(id, req);
      result
        ? res.status(200).send('Update user successful')
        : res.status(202).send(`Update user unsuccessful`);
    } catch (e) {
      res.status(400).send('Failed to update user because of the param');
    }
  };
  loginAccount = async (req: Request, res: Response) => {
    let result = await this.ur.login(req, res);
  };
  deleteUser = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      let result = await this.ur.deleteItem(id);

      result
        ? res.status(200).send('Delete user successful')
        : res.status(202).send(`Delete user unsuccessful`);
    } catch (e) {
      res.status(400).send(`Failed to delete user because of the paramenter`);
    }
  };
  findUsername = async (req: Request, res: Response) => {
    try {
      let result = await this.ur.findUsername(req);
      console.log(result);
      result
        ? res.status(200).send(result)
        : res.status(202).send(`get user unsuccessful`);
    } catch (e) {
      res.status(400).send(`Failed to get user because of the paramenter`);
    }
  };
}
