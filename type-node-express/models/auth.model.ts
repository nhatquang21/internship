export default class User {
  user_id: number;
  user_name: string;
  user_pwd: string;
  created_on: string;
  updated_on: string;
  role_id: number;
  constructor(userID, userName, userPwd, createdOn, updatedOn, roleID) {
    this.user_id = userID;
    this.user_name = userName;
    this.user_pwd = userPwd;
    this.created_on = createdOn;
    this.updated_on = updatedOn;
    this.role_id = roleID;
  }
}
