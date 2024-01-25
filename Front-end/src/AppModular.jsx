import React, { useState } from 'react'
import './App.css'
import InputTask from './components/InputTask'
import ListTask from './components/ListTask'

const card = {
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
}

const container = {
  width: '946px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  flex: '1 0 0',
}

function AppModular() {
  return (
    <div style={card}>
      <div style={container}>
        <InputTask />
        <ListTask />
      </div>
    </div>
  )
}

export default AppModular
