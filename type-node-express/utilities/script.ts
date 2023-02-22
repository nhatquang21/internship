import { table } from 'console';
import pool from '../config/db';
import Dish from '../models/DishModel';

// async function getAllItem(tableName: string, model: string) {
//   let modelTable: Dish =  Dish(model);
//   try {
//     let result = await pool.query(`SELECT * FROM ${tableName}`);
//     if (result) {
//       let list: typeof t[] = result.rows;
//       return list;
//     }
//   } catch (e) {
//     throw e;
//   }
// }

const getItemByID = async (tableName: string, req: any, res: any) => {
  const id = parseInt(req.params.id);
  try {
    const result = await pool.query(
      `SELECT * FROM ${tableName} WHERE dish_id = $1`,
      [id]
    );

    let length = Object.keys(result.rows).length;
    if (result && length > 0) {
      res.status(200).json(result.rows);
      return 0;
    } else {
      res
        .status(200)
        .json(`Item with ID = ${id} from ${tableName} doesn't exist`);
      return -1;
    }
  } catch (e) {
    console.log('er==>', e);
  }
};

const createItem = (tableName: string, req: any, res: any) => {
  const { name, price } = req.body;

  pool.query(
    `INSERT INTO ${tableName} (dish_name, dish_price) VALUES ($1, $2) RETURNING *`,
    [name, price],
    (error: boolean, results: any) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`Dishes added successful`);
    }
  );
};

const updateItem = async (tableName: string, req: any, res: any) => {
  const id = parseInt(req.params.id);
  try {
    const check = await pool.query(
      `SELECT * FROM ${tableName} WHERE dish_id = $1`,
      [id]
    );

    let length = Object.keys(check.rows).length;
    if (check && length > 0) {
      const { name, price } = req.body;
      try {
        const result = await pool.query(
          'UPDATE dishes SET dish_name = $1, dish_price = $2 WHERE dish_id = $3',
          [name, price, id]
        );
        if (result) {
          res.status(200).send(`Dishes modified with ID: ${id}`);
        }
      } catch (e) {
        res.status(200).send(`${tableName} modiefied failed`);
      }
    } else {
      res
        .status(200)
        .json(`Item with ID = ${id} from ${tableName} doesn't exist`);
      return -1;
    }
  } catch (e) {
    console.log('er==>', e);
  }
};

const deleteItem = async (tableName: string, req: any, res: any) => {
  const id = parseInt(req.params.id);
  try {
    const check = await pool.query(
      `SELECT * FROM ${tableName} WHERE dish_id = $1`,
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
          res.status(200).send(`${tableName} deleted with ID: ${id}`);
        }
      } catch (e) {
        res.status(200).send(`${tableName} deleted item failed`);
      }
    } else {
      res
        .status(200)
        .json(`Item with ID = ${id} from ${tableName} doesn't exist`);
      return -1;
    }
  } catch (e) {
    console.log('er==>', e);
  }
};

const queries = {
  // getAllItem,
  getItemByID,
  createItem,
  updateItem,
  deleteItem,
};
export default queries;
