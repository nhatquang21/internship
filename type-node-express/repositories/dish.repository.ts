import Dish from '../models/dish.model';
import pool from '../config/db';
import { Request } from 'express';
import BaseRepositoryInterface from './interface/base.repository.interface';
import { getDateToday } from '../utilities';

export class DishRepository implements BaseRepositoryInterface<Dish> {
  async getAll() {
    try {
      let result = await pool.query(`SELECT * FROM Dishes`);
      if (result) {
        let list: Dish[] = result.rows;
        return list;
      }
    } catch (e) {
      throw e;
    }
  }
  getItemById = async (id: number) => {
    try {
      const result = await pool.query(
        `SELECT * FROM Dishes WHERE dish_id = $1`,
        [id]
      );

      let length = Object.keys(result.rows).length;
      if (result && length > 0) {
        let dish: Dish = result.rows;
        return dish;
      } else {
        return false;
      }
    } catch (e) {
      return 'Invalid paramenter';
    }
  };
  createItem = async (req: Request) => {
    try {
      const { name, price } = req.body;
      let newDish: Dish = {
        dish_id: 0,
        dish_name: name,
        dish_price: price,
      };
      const result = await pool.query(
        `INSERT INTO Dishes (dish_name, dish_price) VALUES ($1, $2) RETURNING *`,
        [newDish.dish_name, newDish.dish_price]
      );

      if (result.rows[0]) {
        let dish: Dish = result.rows[0];
        return true;
      } else {
        return false;
      }
    } catch (e) {
      throw e;
    }
  };
  updateItem = async (id: number, req: Request) => {
    try {
      const check = await pool.query(
        `SELECT * FROM Dishes WHERE dish_id = $1`,
        [id]
      );

      let length = Object.keys(check.rows).length;
      if (check && length > 0) {
        const { name, price } = req.body;
        let dish: Dish = {
          dish_id: id,
          dish_name: name,
          dish_price: price,
        };

        const { dish_id: dID, dish_name: dName, dish_price: dPrice } = dish;
        try {
          const result = await pool.query(
            'UPDATE dishes SET dish_name = $1, dish_price = $2 WHERE dish_id = $3',
            [dName, dPrice, dID]
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
  deleteItem = async (id: number) => {
    try {
      const check = await pool.query(
        `SELECT * FROM Dishes WHERE dish_id = $1`,
        [id]
      );

      let length = Object.keys(check.rows).length;
      if (check && length > 0) {
        try {
          const result = await pool.query(
            'DELETE FROM dishes WHERE dish_id = $1',
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
  getTheBestSellingFoodToday = async () => {
    let today: string = getDateToday();
    let startOfDay = today + ' 00:00:00';
    let endOfDay = today + ' 23:59:59';
    try {
      let result = await pool.query(
        ` SELECT D.dish_id, D.dish_name, D.dish_price, sum(M.dish_quantity) as total_dishquantity
        FROM Dishes D INNER JOIN order_dishes M 
        ON D.dish_id = M.dish_id
        INNER JOIN Orders O ON M.order_id = O.order_id
        where O.created_on >= $1 and O.created_on <= $2
        GROUP BY D.dish_id
        ORDER BY total_dishquantity desc
        limit 1;`,
        [startOfDay, endOfDay]
      );
      let length = Object.keys(result.rows).length;
      if (result && length > 0) {
        let dish: Dish = result.rows;

        return dish;
      } else {
        return result.rows;
      }
    } catch (e) {
      throw e;
    }
  };
  getTopThreeDishHotpot = async () => {
    try {
      let result = await pool.query(` 
        SELECT D.dish_id, D.dish_name, D.dish_price, sum(M.dish_quantity) as total_dishquantity
           FROM Dishes D INNER JOIN order_dishes M 
           ON D.dish_id = M.dish_id
           INNER JOIN Orders O ON M.order_id = O.order_id
           GROUP BY D.dish_id
           ORDER BY total_dishquantity desc
           limit 3;`);
      let length = Object.keys(result.rows).length;

      if (result && length > 0) {
        let dishList: Dish[] = result.rows;

        return dishList;
      }
    } catch (e) {
      throw e;
    }
  };
}
