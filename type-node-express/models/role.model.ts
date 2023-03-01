export default class Role {
  role_id: number;
  role_name: string;

  constructor(roleID, roleName) {
    this.role_id = roleID;
    this.role_name = roleName;
  }
}
