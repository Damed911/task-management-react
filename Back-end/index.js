const express = require('express')
const app = express()
const port = 3000
const pool = require('./postgres')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Access-Control-Allow-Headers'
  )
  next()
})

//module list

// get all todos
app.get('/', async (req, res) => {
  try {
    const getTodo = await pool.query('SELECT * FROM todo')
    res.json(getTodo.rows)
  } catch (err) {
    console.error(err.message)
  }
})

// create a todo
app.post('/todos', async (req, res) => {
  try {
    const { judul, description } = req.body
    const createTodo = await pool.query(
      'INSERT INTO todo (judul, description) values($1, $2) RETURNING *',
      [judul, description]
    )
    res.json(createTodo.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})

// update a todo
app.put('/todos/edit/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { judul, description } = req.body
    const updateTodo = await pool.query(
      'UPDATE todo SET judul = $1, description = $2 WHERE task_id=$3',
      [judul, description, id]
    )
    res.json('Task Updated')
  } catch (err) {
    console.error(err.message)
  }
})

// delete a todo
app.delete('/todos/delete/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleteTodo = await pool.query('DELETE FROM todo WHERE task_id=$1', [
      id,
    ])
    res.json('Task Deleted')
  } catch (err) {
    console.error(err.message)
  }
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
