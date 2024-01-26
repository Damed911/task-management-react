import React, { Fragment, useEffect, useState } from 'react'
import { FormControl, Input, Modal, Box, Typography } from '@mui/material'

const EditTask = ({ item }) => {
  const [open, setOpen] = useState(false)
  const [judul, setJudul] = useState(item.judul)
  const [description, setDescription] = useState(item.description)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  const editData = async () => {
    try {
      const body = { judul, description }
      const response = await fetch(
        `http://localhost:3000/todos/edit/${item.task_id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      )
      window.location = '/'
    } catch (err) {
      console.error(err.message)
    }

    setJudul('')
    setDescription('')
  }

  return (
    <Fragment>
      <button
        onClick={() => {
          setOpen(!open)
        }}
        style={{ color: 'white', backgroundColor: 'blue' }}
      >
        Edit
      </button>
      {open ? (
        <Modal open={open}>
          <Box sx={style}>
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
                  placeholder="judul"
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
                    }
                  }}
                >
                  Edit
                </button>
                <button
                  style={{ color: 'white', backgroundColor: 'red' }}
                  onClick={() => {
                    setOpen(!open)
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Box>
        </Modal>
      ) : null}
    </Fragment>
  )
}

export default EditTask
