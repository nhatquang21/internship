export class Dish {
  dish_id: number;
  dish_name: string;
  dish_price: number;

  constructor(dish_id: number, dish_name: string, dish_price: number) {
    this.dish_id = dish_id;
    this.dish_name = dish_name;
    this.dish_price = dish_price;
  }
}
