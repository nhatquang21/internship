import Order from '../models/order.model';
import pool from '../config/db';
import { Request } from 'express';
import BaseRepositoryInterface from './interface/base.repository.interface';
import { getDateToday } from '../utilities';
import moment from 'moment';
import { start } from 'repl';

export default class DishRepository implements BaseRepositoryInterface<Order> {
  getAll = async () => {
    try {
      let result = await pool.query(`SELECT * FROM Orders`);
      if (result) {
        let list: Order[] = result.rows;
        return list;
      }
    } catch (e) {
      throw e;
    }
  };
  getItemById = async (id: number) => {
    try {
      const result = await pool.query(
        `SELECT * FROM Orders WHERE order_id = $1`,
        [id]
      );

      let length = Object.keys(result.rows).length;
      if (result && length > 0) {
        let order: Order = result.rows;
        return order;
      } else {
        return false;
      }
    } catch (e) {
      return 'Invalid Paramenter';
    }
  };
  createItem = async (req: Request) => {
    try {
      let createDate: string = moment().toISOString();
      const { totalBill, customerId, employeeId, dishList } = req.body;

      if (
        dishList &&
        totalBill &&
        customerId &&
        employeeId &&
        typeof totalBill == 'number' &&
        typeof customerId == 'number' &&
        typeof employeeId == 'number' &&
        typeof dishList == 'object'
      ) {
        let check: boolean = true;
        let itemTotalBill: number = 0;
        for (let item of dishList) {
          itemTotalBill += item.dish_totalprice;
          if (
            item.dish_id &&
            item.dish_quantity &&
            item.dish_totalprice &&
            typeof item.dish_id == 'number' &&
            typeof item.dish_totalprice == 'number' &&
            typeof item.dish_quantity == 'number'
          ) {
            if (!check) {
              check = false;
            } else {
              check = true;
            }
          } else {
            check = false;
          }
        }
        itemTotalBill == totalBill ? (check = true) : (check = false);
        console.log(createDate);
        if (check) {
          let newOrder: Order = {
            order_id: 0,
            total_bill: totalBill,
            created_on: createDate,
            customer_id: customerId,
            employee_id: employeeId,
          };
          const { total_bill, created_on, customer_id, employee_id } = newOrder;
          const result = await pool.query(
            `INSERT INTO Orders (total_bill, created_on, customer_id, employee_id) VALUES ($1, $2, $3, $4) RETURNING *`,
            [total_bill, created_on, customer_id, employee_id]
          );
          console.log(result);
          const data = result?.rows[0];
          if (result.rows) {
            let newOrder: Order = result.rows[0];

            let newOrderID = newOrder.order_id;

            if (dishList) {
              for (let item of dishList) {
                const { dish_id, dish_totalprice, dish_quantity } = item;
                const result = await pool.query(
                  `INSERT INTO Order_Dishes (dish_id, order_id, dish_quantity, dish_totalprice) VALUES ($1, $2, $3, $4) RETURNING *`,
                  [dish_id, newOrderID, dish_quantity, dish_totalprice]
                );
              }
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
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
        `SELECT * FROM ORDERS WHERE order_id = $1`,
        [id]
      );

      if (check.rows[0]) {
        try {
          let createDate: string = moment().toISOString();
          const { totalBill, customerId, employeeId, dishList } = req.body;

          if (
            dishList &&
            totalBill &&
            customerId &&
            employeeId &&
            typeof totalBill == 'number' &&
            typeof customerId == 'number' &&
            typeof employeeId == 'number' &&
            typeof dishList == 'object'
          ) {
            let check: boolean = true;
            let itemTotalBill: number = 0;
            for (let item of dishList) {
              itemTotalBill += item.dish_totalprice;
              if (
                item.dish_id &&
                item.dish_quantity &&
                item.dish_totalprice &&
                typeof item.dish_id == 'number' &&
                typeof item.dish_totalprice == 'number' &&
                typeof item.dish_quantity == 'number'
              ) {
                if (!check) {
                  check = false;
                } else {
                  check = true;
                }
              } else {
                check = false;
              }
            }
            itemTotalBill == totalBill ? (check = true) : (check = false);
            if (check) {
              let newOrder: Order = {
                order_id: 0,
                total_bill: totalBill,
                created_on: createDate,
                customer_id: customerId,
                employee_id: employeeId,
              };
              const { total_bill, created_on, customer_id, employee_id } =
                newOrder;
              const result = await pool.query(
                `UPDATE orders SET total_bill = $1, created_on = $2, customer_id = $3, employee_id = $4 WHERE order_id = $5`,
                [total_bill, created_on, customer_id, employee_id, id]
              );

              if (result) {
                if (dishList) {
                  const deleteOrderDishes = await pool.query(
                    `Delete from Order_Dishes where order_id = $1`,
                    [id]
                  );
                  for (let item of dishList) {
                    const { dish_id, dish_totalprice, dish_quantity } = item;
                    const result = await pool.query(
                      `INSERT INTO Order_Dishes (dish_id, order_id, dish_quantity, dish_totalprice) VALUES ($1, $2, $3, $4) RETURNING *`,
                      [dish_id, id, dish_quantity, dish_totalprice]
                    );
                  }
                  return true;
                } else {
                  return false;
                }
              } else {
                return false;
              }
            } else {
              return false;
            }
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
        `SELECT * FROM Orders WHERE order_id = $1`,
        [id]
      );

      if (check.rows[0]) {
        try {
          const deleteMappingTable = await pool.query(
            'DELETE FROM order_dishes WHERE order_id = $1',
            [id]
          );
          const result = await pool.query(
            'DELETE FROM orders WHERE order_id = $1',
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
  calculateProfitOneDay = async (req: Request) => {
    const startDate = (req.query.date as string) + '0:00:00';
    const endDate = (req.query.date as string) + ' 23:59:59';
    if (startDate && endDate) {
      console.log(startDate);
      try {
        const result = await pool.query(
          `SELECT sum(total_bill), $1 as date
      FROM Orders
      where orders.created_on >= $2 and orders.created_on <= $3
      
      `,
          [req.query.date, startDate, endDate]
        );
        if (result.rows) return result.rows;
        else return false;
      } catch (e) {
        throw e;
      }
    } else {
      return false;
    }
  };

  getTheMostValuableOrder = async () => {
    let today: string = getDateToday();
    let startOfDay = today + ' 00:00:00';
    let endOfDay = today + ' 23:59:59';
    console.log(startOfDay);
    try {
      const result = await pool.query(
        `SELECT O.order_id, O.total_bill, sum(dish_quantity)
      FROM Orders O join order_dishes M ON O.order_id = M.order_id
      where O.created_on >= $1 and O.created_On <= $2
      group by O.order_id
      order by  O.total_bill desc
      limit 1;     `,
        [startOfDay, endOfDay]
      );
      const order: Order = result.rows[0];
      if (order) {
        return order;
      } else {
        return false;
      }
      return result;
    } catch (e) {
      throw e;
    }
  };
  getProfitBetweenDates = async (req: Request) => {
    const { startDate, endDate } = req.query;
    if (startDate && endDate) {
      if (
        moment(startDate as string).isValid() &&
        moment(endDate as string).isValid()
      ) {
        try {
          const result = await pool.query(
            `SELECT to_char(orders.created_on, 'YYYY-MM-DD') as Date, sum(orders.total_bill) as profit
            from orders
            where orders.created_on >= $1 and orders.created_on <= $2
            group by orders.created_on;
                `,
            [startDate, endDate]
          );

          const orders = result.rows;

          if (orders) {
            return orders;
          } else {
            return false;
          }
        } catch (e) {
          throw e;
        }
      } else {
        return false;
      }
    } else {
      return 'Query param "startDate" and "endDate" are needed or invalid';
    }
  };
}
