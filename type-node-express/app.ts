import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
const app = express();
require('expressjs-api-explorer')(app, express);
import dbQ from './queries';

const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const settings = {
  format: 'html',
};
app.get('/dishes', dbQ.getDishes);
app.get('/dishes/:id', dbQ.getDishesByID);
app.post('/dishes/', dbQ.createDish);
app.put('/dishes/:id', dbQ.updateDish);
app.delete('/dishes/:id', dbQ.deleteDish);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
