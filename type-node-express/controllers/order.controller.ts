import OrderRepository from '../repositories/order.repository';
import { Request, Response } from 'express';

export class OrderController {
  or: OrderRepository;

  constructor() {
    this.or = new OrderRepository();
  }

  getAllOrders = async (req: Request, res: Response) => {
    try {
      let listOfOrders = await this.or.getAll();
      if (listOfOrders) {
        res.status(200).send(listOfOrders);
      }
    } catch (e) {
      throw e;
    }
  };
  getOrderByID = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    let result = await this.or.getItemById(id);
    try {
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(202).send(`Order doesn't exist`);
      }
    } catch (e) {
      throw e;
    }
  };
  createOrder = async (req: Request, res: Response) => {
    let result = await this.or.createItem(req, res);
  };
  updateOrder = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    let result = await this.or.updateItem(id, req, res);
  };

  deleteOrder = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      let result = await this.or.deleteItem(id);

      result
        ? res.status(200).send('Delete order successful')
        : res.status(202).send(`Delete order unsuccessful`);
    } catch (e) {
      res
        .status(400)
        .send('Delete order failed because of the params or invalid values');
    }
  };

  getTheMostValuableOrderToday = async (req: Request, res: Response) => {
    try {
      let result = await this.or.getTheMostValuableOrder();

      result
        ? res.status(200).send(result)
        : res.status(202).send(`Get order unsuccessful`);
    } catch (e) {
      throw e;
    }
  };
  getProfitBetweenDate = async (req: Request, res: Response) => {
    try {
      let result = await this.or.getProfitBetweenDates(req);
      if (
        result == 'Query param "startDate" and "endDate" are needed or invalid'
      ) {
        res.status(200).send(result);
      } else if (typeof result == 'object') {
        res.status(200).send(result);
      } else {
        res.status(202).send(`Get profit unsuccessful`);
      }
    } catch (e) {
      res
        .status(400)
        .send('Query param "startDate" and "endDate" are needed or invalid');
    }
  };
  getProfitOneSpecificDate = async (req: Request, res: Response) => {
    try {
      let result = await this.or.calculateProfitOneDay(req);

      result
        ? res.status(200).send(result)
        : res.status(202).send(`Get profit unsuccessful`);
    } catch (e) {
      res.status(400).send('Query param "Date" is needed');
    }
  };
}
