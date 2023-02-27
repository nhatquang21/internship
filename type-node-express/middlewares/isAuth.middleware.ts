import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utilities';
export default async function isAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const accessToken = bearer[1];
    console.log(accessToken);
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
