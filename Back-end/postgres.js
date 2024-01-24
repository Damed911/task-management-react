const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  password: 'superuser',
  port: 5432,
  host: 'localhost',
  database: 'taskmanager',
})

module.exports = pool
