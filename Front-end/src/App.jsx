import React, { useEffect, useState } from 'react'
import './App.css'
import { FormControl, Typography, IconButton, Input } from '@mui/material'
import Add from '@mui/icons-material/Add'
import Close from '@mui/icons-material/Close'

function App() {
  const [idData, setIdData] = useState('')
  const [task, setTask] = useState([])
  const [judul, setJudul] = useState('')
  const [description, setDescription] = useState('')
  const [addTask, setAddTask] = useState(false)
  const [editTask, setEditTask] = useState(false)
  const [showList, setShowList] = useState(true)
  const [showAdd, setShowAdd] = useState(true)

  const handleAddData = async () => {
    // setTask([...task, { judul: judul, description: description }])
    try {
      const body = { judul, description }
      const response = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      console.log(response)
    } catch (err) {
      console.error(err.message)
    }
    setJudul('')
    setDescription('')
    setAddTask(!addTask)
  }

  const getTask = async () => {
    try {
      const response = await fetch('http://localhost:3000')
      const jsonData = await response.json()

      setTask(jsonData)
    } catch (err) {
      console.error(err.message)
    }
  }

  const handleDeleteData = async (id) => {
    // const newArray = [...task]
    // newArray.splice(index, 1)
    // setTask(newArray)

    try {
      const response = await fetch(`http://localhost:3000/todos/delete/${id}`, {
        method: 'DELETE',
      })
    } catch (err) {
      console.error(err.message)
    }

    setTask(task.filter((tasks) => tasks.task_id !== id))
    alert('Task Delete Successfully')
  }

  const editData = async () => {
    // setTask(
    //   task.map((item, index) => {
    //     if (index === idData) {
    //       return { ...item, judul: judul, description: description }
    //     }
    //     return item
    //   })
    // )
    const body = { judul, description }
    const response = await fetch(`http://localhost:3000/todos/edit/${idData}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    setShowAdd(!showAdd)
    setShowList(!showList)
    setEditTask(!editTask)
    setJudul('')
    setDescription('')
    setIdData(null)
  }

  const handleEditData = (id) => {
    setShowAdd(!showAdd)
    setShowList(!showList)
    setEditTask(!editTask)
    setIdData(id)

    console.log(idData)

    let editedTask = task.find((elem) => {
      return elem.task_id === id
    })

    console.log(editedTask)
    setDescription(editedTask.description)
    setJudul(editedTask.judul)
  }

  useEffect(() => {
    getTask()
  }, [])

  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '994px',
          padding: '24px',
          alignItems: 'flex-start',
          alignContent: 'flex-start',
          gap: '15px',
          flexWrap: 'wrap',
          borderRadius: '15px',
          background: '#FFF',
          boxShadow: '4px 4px 12px 0px rgba(166, 166, 166, 0.12)',
        }}
      >
        <div
          style={{
            width: '946px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '8px',
            flex: '1 0 0',
          }}
        >
          {showAdd ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignSelf: 'stretch',
              }}
            >
              <Typography
                style={{
                  color: '#272833',
                  fontFamily: 'Inter',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: '125%' /* 25px */,
                }}
              >
                List Task
              </Typography>
              <IconButton onClick={() => setAddTask(!addTask)}>
                {addTask ? <Close /> : <Add />}
              </IconButton>
            </div>
          ) : null}
          {addTask ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 'var(--units-padding-p-16, 16px)',
                alignAelf: 'stretch',
              }}
            >
              <FormControl style={{ width: '400px', gap: '8px' }}>
                <label
                  htmlFor="Judul"
                  style={{ color: 'black', textAlign: 'left' }}
                >
                  Judul
                </label>
                <Input
                  type="text"
                  variant="outlined"
                  name="judul"
                  placeholder="Judul"
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                />
                <label
                  htmlFor="description"
                  style={{ color: 'black', textAlign: 'left' }}
                >
                  description
                </label>
                <Input
                  type="paragraph"
                  multiline
                  variant="outlined"
                  name="description"
                  placeholder="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormControl>
              <button
                style={{ color: 'white', backgroundColor: 'blue' }}
                onClick={() => {
                  if (judul !== '' || description !== '') {
                    handleAddData()
                  }
                }}
              >
                Add
              </button>
            </div>
          ) : null}
          {editTask ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 'var(--units-padding-p-16, 16px)',
                alignAelf: 'stretch',
              }}
            >
              <FormControl style={{ width: '400px', gap: '8px' }}>
                <label
                  htmlFor="Judul"
                  style={{ color: 'black', textAlign: 'left' }}
                >
                  Judul
                </label>
                <Input
                  type="text"
                  variant="outlined"
                  name="judul"
                  placeholder="judul"
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                />
                <label
                  htmlFor="description"
                  style={{ color: 'black', textAlign: 'left' }}
                >
                  description
                </label>
                <Input
                  type="text"
                  multiline
                  variant="outlined"
                  name="description"
                  placeholder="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormControl>
              <div
                style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}
              >
                <button
                  style={{ color: 'white', backgroundColor: 'blue' }}
                  onClick={() => {
                    if (judul !== '' || description !== '') {
                      editData()
                    } else if (judul === '' || description === '')
                      alert('Data perlu diisi')
                  }}
                >
                  Edit
                </button>
                <button
                  style={{ color: 'white', backgroundColor: 'red' }}
                  onClick={() => {
                    setShowAdd(!showAdd)
                    setShowList(!showList)
                    setEditTask(!editTask)
                    setJudul('')
                    setDescription('')
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : null}
          {showList &&
            task.length > 0 &&
            task.map((item) => {
              return (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: 'var(--units-padding-p-16, 16px)',
                    alignSelf: 'stretch',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      width: '540.5px',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      gap: '8px',
                    }}
                  >
                    <Typography
                      style={{
                        color: '#272833',
                        fontFamily: 'Inter',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '125%' /* 25px */,
                      }}
                    >
                      {item.judul}
                    </Typography>
                    <Typography
                      style={{
                        color: '#272833',
                        fontFamily: 'Inter',
                        fontSize: '17px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '125%' /* 25px */,
                        overflowWrap: 'wrap',
                      }}
                    >
                      {item.description}
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '5px',
                    }}
                  >
                    <button
                      onClick={() => {
                        handleEditData(item.task_id)
                      }}
                      style={{ color: 'white', backgroundColor: 'orange' }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteData(item.task_id)}
                      style={{ color: 'white', backgroundColor: 'red' }}
                    >
                      Done
                    </button>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default App
