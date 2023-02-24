import pool from '../config/db';
import Employee from '../models/employee.model';
import BaseRepositoryInterface from './interface/base.repository.interface';
import { Request } from 'express';

export class EmployeeRepository implements BaseRepositoryInterface<Employee> {
  async getAll() {
    try {
      let result = await pool.query(`SELECT * FROM Employees`);
      if (result.rows[0]) {
        let list: Employee[] = result.rows;
        return list;
      } else {
        return [];
      }
    } catch (e) {
      throw e;
    }
  }
  getItemById = async (id: number) => {
    try {
      const result = await pool.query(
        `SELECT * FROM Employees WHERE employee_id = $1`,
        [id]
      );

      let length = Object.keys(result.rows).length;
      if (result && length > 0) {
        let employee: Employee = result.rows;
        return employee;
      } else {
        return false;
      }
    } catch (e) {
      return 'Invalid paramenter';
    }
  };
  createItem = async (req: Request) => {
    try {
      const { status, name } = req.body;
      let newEmployee: Employee = {
        employee_name: name,
        employee_id: 0,
        employee_status: status,
      };
      const result = await pool.query(
        `INSERT INTO Employees (employee_name, employee_status) VALUES ($1, $2) RETURNING *`,
        [newEmployee.employee_name, newEmployee.employee_status]
      );

      if (result.rows[0]) {
        let emp: Employee = result.rows[0];
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
        `SELECT * FROM Employees WHERE employee_id = $1`,
        [id]
      );

      if (check.rows[0]) {
        const { status, name } = req.body;
        let emp: Employee = {
          employee_id: id,
          employee_name: name,
          employee_status: status,
        };
        const { employee_id, employee_name, employee_status } = emp;

        try {
          const result = await pool.query(
            'Update employees set employee_name = $1, employee_status = $2 where employee_id = $3',
            [employee_name, employee_status, employee_id]
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
        `SELECT * FROM Employees WHERE employee_id = $1`,
        [id]
      );

      let length = Object.keys(check.rows).length;
      if (check && length > 0) {
        try {
          const result = await pool.query(
            'DELETE FROM Employees WHERE employee_id = $1',
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
}
