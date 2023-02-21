const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'jason',
  host: 'localhost',
  database: 'HotpotManagement',
  password: '',
  port: 5432,
});

export default pool;
