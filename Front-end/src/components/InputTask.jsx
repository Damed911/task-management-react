import React, { useState } from 'react'
import { FormControl, Typography, IconButton, Input } from '@mui/material'
import Add from '@mui/icons-material/Add'
import Close from '@mui/icons-material/Close'

const InputTask = () => {
  const [judul, setJudul] = useState('')
  const [description, setDescription] = useState('')
  const [addTask, setAddTask] = useState(false)

  const handleAddData = async () => {
    // setTask([...task, { judul: judul, description: description }])
    try {
      const body = { judul, description }
      const response = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      window.location = '/'
    } catch (err) {
      console.error(err.message)
    }
    setJudul('')
    setDescription('')
    setAddTask(!addTask)
  }

  return (
    <>
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
          <FormControl style={{ width: '400px' }}>
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
          </FormControl>
          <FormControl style={{ width: '400px' }}>
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
    </>
  )
}

export default InputTask
