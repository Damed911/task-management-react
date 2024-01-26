import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import EditTask from './EditTask'

const ListTask = () => {
  const [task, setTask] = useState([])

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

  const getTask = async () => {
    try {
      const response = await fetch('http://localhost:3000')
      const jsonData = await response.json()

      setTask(jsonData)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getTask()
  }, [])

  return (
    <>
      {task.length > 0 &&
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
                key={item.task_id}
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
                {/* <button
                  onClick={(item) => <EditTask item={item} />}
                  style={{ color: 'white', backgroundColor: 'blue' }}
                >
                  Edit
                </button> */}
                <>
                  <EditTask item={item} />
                </>
                <button
                  onClick={() => handleDeleteData(item.task_id)}
                  style={{ color: 'white', backgroundColor: 'red' }}
                >
                  Finish
                </button>
              </div>
            </div>
          )
        })}
    </>
  )
}

export default ListTask
