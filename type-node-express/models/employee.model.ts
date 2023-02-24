export default class Employee {
  employee_id: number;
  employee_name: string;
  employee_status: boolean;

  constructor(
    employeeID: number,
    employeeName: string,
    employeeStatus: boolean
  ) {
    this.employee_id = employeeID;
    this.employee_name = employeeName;
    this.employee_status = employeeStatus;
  }
}
