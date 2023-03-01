import { Request, Response, NextFunction } from 'express';
import pool from '../config/db';
import { verifyToken, parseJwt } from '../utilities';

export async function isAuth(req: Request, res: Response, next: NextFunction) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const accessToken = bearer[1];
    const verfified = await verifyToken(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET
    );
    if (!verfified) {
      return res
        .status(401)
        .send('You do not have permission to access this feature');
    } else {
      return next();
    }
  } else {
    return res.status(401).send('Cannot find the access token');
  }
}

export function authRole(role: string[] | string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(' ');
      const accessToken = bearer[1];
      let user = await parseJwt(accessToken);
      let role_id = user.payload['role_id'];

      if (role_id) {
        let result = await pool.query(
          `Select * from users U inner join roles R on U.role_id = R.role_id where R.role_id = $1`,
          [role_id]
        );
        let roleQuery = result.rows[0].role_name;
        if (role.includes(roleQuery)) {
          next();
        } else {
          res.status(401);
          return res.send('Not allowed');
        }
      } else {
        res.status(401);
        return res.send('Not allowed');
      }
    }
  };
}
module.exports = {
  isAuth,
  authRole,
};
