import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormControl, TextField, Typography, IconButton } from '@mui/material'
import Add from '@mui/icons-material/Add'
import Close from '@mui/icons-material/Close'

function App() {
  const [open, setOpen] = useState(false)
  const [close, setClose] = useState(false)
  const [addTask, setAddTask] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

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
            <>
              <div
                style={{
                  display: 'flex',
                  height: '74.408px',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '8px',
                  flex: '1 0 0',
                }}
              >
                <FormControl style={{ width: '500px', gap: '8px' }}>
                  <label
                    htmlFor="NIP Baru"
                    style={{ color: 'black', textAlign: 'left' }}
                  >
                    Judul
                  </label>
                  <TextField
                    type="text"
                    variant="outlined"
                    name="Judul"
                    placeholder="Judul"
                    defaultValue=""
                    inputProps={{
                      style: {
                        backgroundColor: '#F7F7F7',
                        color: 'black',
                        height: '12px',
                      },
                    }}
                  />
                </FormControl>
              </div>
              <div
                style={{
                  display: 'flex',
                  height: '74.408px',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '8px',
                  flex: '1 0 0',
                }}
              >
                <FormControl style={{ width: '500px', gap: '8px' }}>
                  <label
                    htmlFor="NIP Baru"
                    style={{ color: 'black', textAlign: 'left' }}
                  >
                    Deskripsi
                  </label>
                  <TextField
                    type="paragraph"
                    variant="outlined"
                    name="Deskripsi"
                    placeholder="Deskripsi"
                    defaultValue=""
                    inputProps={{
                      style: {
                        backgroundColor: '#F7F7F7',
                        color: 'black',
                        height: '12px',
                      },
                    }}
                  />
                </FormControl>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  )
}

export default App
