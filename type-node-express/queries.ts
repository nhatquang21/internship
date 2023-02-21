import express, { Request, Response } from 'express';
import queries from './utilities/script';

const {
  getAllFromTable: getAll,
  getItemByID,
  createItem,
  updateItem,
  deleteItem,
} = queries;

const getDishes = (req: Request, res: Response) => {
  getAll('Dishes', req, res);
};

const getDishesByID = (req: Request, res: Response) => {
  getItemByID('Dishes', req, res);
};

const createDish = (req: Request, res: Response) => {
  createItem('Dishes', req, res);
};

const updateDish = (req: Request, res: Response) => {
  updateItem('Dishes', req, res);
};

const deleteDish = (req: Request, res: Response) => {
  deleteItem('Dishes', req, res);
};

const dishQueries = {
  getDishes,
  getDishesByID,
  createDish,
  updateDish,
  deleteDish,
};
export default dishQueries;
