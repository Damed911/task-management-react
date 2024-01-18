import React, { useEffect, useState } from 'react'
import './App.css'
import {
  FormControl,
  Typography,
  IconButton,
  Input,
  TextField,
} from '@mui/material'
import Add from '@mui/icons-material/Add'
import Close from '@mui/icons-material/Close'

function App() {
  const [task, setTask] = useState([{}])
  const [judul, setJudul] = useState('')
  const [deskripsi, setDeskripsi] = useState('')
  const [addTask, setAddTask] = useState(false)
  const [editTask, setEditTask] = useState(false)

  const handleAddData = () => {
    setTask([...task, { judul: judul, deskripsi: deskripsi }])
    setJudul('')
    setDeskripsi('')
    setAddTask(!addTask)
  }
  const handleDeleteData = (index) => {
    const newArray = [...task]
    newArray.splice(index, 1)
    setTask(newArray)
    console.log('Data')
    console.log(task)
  }
  const handleEditData = (index) => {}
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
                  htmlFor="Deskripsi"
                  style={{ color: 'black', textAlign: 'left' }}
                >
                  Deskripsi
                </label>
                <Input
                  type="text"
                  multiline
                  variant="outlined"
                  name="deskripsi"
                  placeholder="Deskripsi"
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                />
              </FormControl>
              <button
                style={{ color: 'white', backgroundColor: 'blue' }}
                onClick={() => {
                  handleAddData()
                }}
              >
                Add
              </button>
            </div>
          ) : null}
          {task.map((item, index) => (
            <>
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
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: '125%' /* 25px */,
                      overflowWrap: 'wrap',
                    }}
                  >
                    {item.deskripsi}
                  </Typography>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: '5px',
                  }}
                >
                  <button onClick={() => handleEditData(index)}>Edit</button>
                  <button onClick={() => handleDeleteData(index)}>Done</button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
