import pool from '../config/db';
import { Request, Response } from 'express';
import BaseRepositoryInterface from './interface/base.repository.interface';
import { getDateToday } from '../utilities';
import moment from 'moment';

import Role from '../models/role.model';

export default class RoleRepository implements BaseRepositoryInterface<Role> {
  getAll = async () => {
    try {
      let result = await pool.query(`SELECT * FROM Roles`);
      if (result) {
        let list: Role[] = result.rows;
        return list;
      }
    } catch (e) {
      throw e;
    }
  };
  getItemById = async (id: number) => {
    try {
      const result = await pool.query(
        `SELECT * FROM Roles WHERE Role_id = $1`,
        [id]
      );

      let length = Object.keys(result.rows).length;
      if (result && length > 0) {
        let Role: Role = result.rows;
        return Role;
      } else {
        return false;
      }
    } catch (e) {
      return 'Invalid Paramenter';
    }
  };
  createItem = async (req: Request, res: Response) => {
    let { roleName } = req.body;

    if (!roleName) res.status(400).send('Cannot find role name ');
    roleName = roleName.toLowerCase();

    try {
      const result = await pool.query(
        `Insert into Roles (role_name) values ($1)`,
        [roleName]
      );
      return res.status(200).send('Add new role successful');
    } catch (e: any) {
      return res.status(400).send(e.detail);
    }
  };
  updateItem = async (id: number, req: Request, res: Response) => {
    if (!id) {
      res.status(400).send('Cannot find params id');
    }

    try {
      const check = await pool.query(`SELECT * FROM Roles WHERE Role_id = $1`, [
        id,
      ]);
      if (!check.rows[0]) {
        res.status(403).send('Cannot find role');
      } else {
        try {
          const { roleName } = req.body;
          if (!roleName) {
            res.status(400).send('Cannot find params');
          }
          const result = await pool.query(
            'Update Roles set role_name = $1 where role_id = $2',
            [roleName, id]
          );

          if (result) {
            return res.status(200).send('Update role successful');
          } else {
            return res.status(400).send('Update role unsuccessful');
          }
        } catch (e: any) {
          return res.status(400).send(e.details);
        }
      }
    } catch (e) {
      throw e;
    }
  };
  deleteItem = async (id: number, req: Request, res: Response) => {
    if (!id) {
      res.status(400).send('Cannot find params id');
    }

    try {
      const check = await pool.query(`SELECT * FROM Roles WHERE Role_id = $1`, [
        id,
      ]);
      if (!check.rows[0]) {
        res.status(403).send('Cannot find role');
      } else {
        try {
          const result = await pool.query(
            'DELETE FROM Roles WHERE Role_id = $1',
            [id]
          );

          if (result) {
            return res.status(200).send('Delete role successful');
          } else {
            return res.status(400).send('Delete role unsuccessful');
          }
        } catch (e: any) {
          return res.status(400).send(e.details);
        }
      }
    } catch (e) {
      throw e;
    }
  };
}
