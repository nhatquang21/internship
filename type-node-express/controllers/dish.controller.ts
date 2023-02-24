import { DishRepository } from '../repositories/dish.repository';

import express, { Request, Response } from 'express';
import Dish from '../models/dish.model';
export class DishController {
  dr: DishRepository;

  constructor() {
    this.dr = new DishRepository();
  }
  getTopThreeDishesAllTime = async (req: Request, res: Response) => {
    try {
      let dishes = await this.dr.getTopThreeDishHotpot();
      if (dishes) {
        res.status(200).send(dishes);
      }
    } catch (e) {
      throw e;
    }
  };
  getBestSellingFoodToday = async (req: Request, res: Response) => {
    try {
      let dish = await this.dr.getTheBestSellingFoodToday();
      if (dish) {
        res.status(200).send(dish);
      }
    } catch (e) {
      throw e;
    }
  };
  getAllDishes = async (req: Request, res: Response) => {
    try {
      let listOfDishes = await this.dr.getAll();
      if (listOfDishes) {
        res.status(200).send(listOfDishes);
      }
    } catch (e) {
      throw e;
    }
  };
  getDishById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    let result = await this.dr.getItemById(id);
    try {
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(202).send(`Item doesn't exist`);
      }
    } catch (e) {
      throw e;
    }
  };
  createDish = async (req: Request, res: Response) => {
    try {
      let result = await this.dr.createItem(req);

      result
        ? res.status(200).send('Add dish successful')
        : res.status(202).send(`Add dish unsuccessful`);
    } catch (e) {
      res.status(400).send('Add dish failed because of the params');
    }
  };
  updateDish = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      let result = await this.dr.updateItem(id, req);

      result
        ? res.status(200).send('Update dish successful')
        : res.status(202).send(`Update dish unsuccessful`);
    } catch (e) {
      res.status(400).send('Failed to update dish because of the param');
    }
  };
  deleteDish = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      let result = await this.dr.deleteItem(id);

      result
        ? res.status(200).send('Delete dish successful')
        : res.status(202).send(`Delete dish unsuccessful`);
    } catch (e) {
      res.status(400).send(`Failed to delete dish because of the paramenter`);
    }
  };
}
