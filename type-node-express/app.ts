require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const port = 3000;

const dishRoutes = require('./routes/dish.routes');
const orderRoutes = require('./routes/order.routes');
const employeeRoutes = require('./routes/employee.routes');
const authRoutes = require('./routes/auth.routes');
const roleRoutes = require('./routes/role.routes');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

require('expressjs-api-explorer')(app, express);
app.use('/api', dishRoutes);
app.use('/api', orderRoutes);
app.use('/api', employeeRoutes);
app.use('/api', authRoutes);
app.use('/api', roleRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
