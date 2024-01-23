const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'task_management',
  password: 'superuser',
  port: 5432,
})

const GetTask = async () => {
  try {
    return await new Promise((resolve, reject) => {
      pool.query('SELECT * FROM task', (error, results) => {
        if (error) {
          reject(error)
        }
        if (results & results.rows) {
          resolve(results.rows)
        } else {
          reject(new Error('Task not founded'))
        }
      })
    })
  } catch (err) {
    console.error(err)
    throw new Error('Internal server error')
  }
}

export default { GetTask }
