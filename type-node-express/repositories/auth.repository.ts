import pool from '../config/db';
import User from '../models/auth.model';
import BaseRepositoryInterface from './interface/base.repository.interface';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import moment from 'moment';
import { generateToken } from '../utilities';
export default class AuthRepository implements BaseRepositoryInterface<User> {
  saltRounds = 10;
  getUser = async (username: string) => {
    let result = await pool.query(`Select * from users where user_name = $1`, [
      username,
    ]);
    if (result.rows[0]) {
      return result.rows[0];
    } else {
      return false;
    }
  };
  async getAll() {
    try {
      let result = await pool.query(`SELECT * FROM Users`);
      if (result) {
        let list: User[] = result.rows;
        return list;
      }
    } catch (e) {
      throw e;
    }
  }
  getItemById = async (id: number) => {
    try {
      const result = await pool.query(
        `SELECT * FROM Users WHERE user_id = $1`,
        [id]
      );

      let length = Object.keys(result.rows).length;
      if (result && length > 0) {
        let user: User = result.rows;
        return user;
      } else {
        return false;
      }
    } catch (e) {
      return 'Invalid paramenter';
    }
  };
  createItem = async (req: Request, res: Response) => {
    try {
      const { username, pwd } = req.body;
      if (await this.getUser(username)) {
        res.status(401).send('User does exist');
      } else {
        let createDate: string = moment().toISOString();

        let salt = await bcrypt.genSalt(this.saltRounds);
        if (salt) {
          let hash: any = await bcrypt.hash(pwd, salt);
          let newUser: User = {
            user_id: 0,
            user_name: username,
            user_pwd: hash,
            created_on: createDate,
            updated_on: '',
            role_id: 2,
          };

          const { user_name, user_pwd, created_on, role_id } = newUser;
          try {
            const result = await pool.query(
              `INSERT INTO Users (user_name, password,created_on, role_id) VALUES ($1, $2, $3, $4) RETURNING *`,
              [user_name, user_pwd, created_on, role_id]
            );
            if (result.rows[0]) {
              return res.send(201).send('Create user successful');
            } else {
              return res
                .send(401)
                .send('There is something wrong when creating a new account');
            }
          } catch (e) {
            return false;
          }
        }
      }
    } catch (e) {
      return false;
    }
  };
  updateItem = async (id: number, req: Request) => {
    try {
      const check = await pool.query(`SELECT * FROM Users WHERE user_id = $1`, [
        id,
      ]);
      let updatedDate: string = moment().toISOString();
      let length = Object.keys(check.rows).length;
      if (check && length > 0) {
        const { pwd } = req.body;
        let salt = await bcrypt.genSalt(this.saltRounds);
        if (salt) {
          let hash: any = await bcrypt.hash(pwd, salt);
          let user: User = {
            user_id: 0,
            user_name: '',
            user_pwd: hash,
            created_on: '',
            updated_on: updatedDate,
            role_id: 3,
          };
          try {
            const result = await pool.query(
              'UPDATE Users SET password = $1, updated_on= $2 WHERE user_id = $3',
              [user.user_pwd, user.updated_on, id]
            );

            if (result) {
              return true;
            } else {
              return false;
            }
          } catch (e) {
            throw e;
          }
        }
      } else {
        return false;
      }
    } catch (e) {
      throw e;
    }
  };
  deleteItem = async (id: number) => {
    try {
      const check = await pool.query(`SELECT * FROM Users WHERE user_id = $1`, [
        id,
      ]);

      let length = Object.keys(check.rows).length;
      if (check && length > 0) {
        try {
          const result = await pool.query(
            'DELETE FROM Users WHERE user_id = $1',
            [id]
          );

          if (result) {
            return true;
          } else {
            return false;
          }
        } catch (e) {
          throw e;
        }
      } else {
        return false;
      }
    } catch (e) {
      throw e;
    }
  };
  login = async (req: Request, res: Response) => {
    const { username, pwd } = req.body;
    if (!username || !pwd) {
      return res.status(400).send(`Can't find username or password in request`);
    }
    let user = await this.getUser(username);
    let checkPwd = await bcrypt.compare(pwd, user.password);

    if (!user) {
      return res.status(401).send('Username does not exist');
    }
    if (!checkPwd) {
      return res.status(401).send('Password does not match');
    }

    const accessToken = await generateToken(
      user,
      process.env.ACCESS_TOKEN_SECRET,
      process.env.ACCESS_TOKEN_LIFE
    );
    if (!accessToken) {
      return res
        .status(401)
        .send('Đăng nhập không thành công, vui lòng thử lại.');
    }
    console.log(accessToken);
    return res.json({
      msg: 'Đăng nhập thành công.',
      accessToken: accessToken,
      user,
    });
  };
  findUsername = async (req: Request, res: Response) => {
    let { username } = req.query;
    if (!username) {
      res.status(404).send('Cannot find the query params');
    }
    if (typeof username != 'string') {
      res.status(404).send('Type of the query is not string');
    }
    username += '%';

    try {
      const getAccount = await pool.query(
        `Select * from users where user_name ILIKE $1`,
        [username]
      );

      if (getAccount.rows.length > 0) {
        let list: User = getAccount.rows;
        return res.status(200).send(list);
      } else {
        return res.status(400).send(`Cannot find the username`);
      }
    } catch (e: any) {
      return res.status(404).send(e.details);
    }
  };
}
