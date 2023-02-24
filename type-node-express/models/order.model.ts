export default class Dish {
  order_id: number;
  total_bill: number;
  created_on: string;
  employee_id: number;
  customer_id: number;

  constructor(
    order_id: number,
    total_bill: number,
    created_on: string,
    employee_id: number,
    customer_id: number
  ) {
    this.order_id = order_id;
    this.total_bill = total_bill;
    this.created_on = created_on;
    this.employee_id = employee_id;
    this.customer_id = customer_id;
  }
}
