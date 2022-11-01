import React from 'react'
import Sidebar from './Sidebar'
import Receipts from './Receipts'
import { styled } from '@stitches/react'

function AdminView() {
  const Container = styled('div', {
    display: 'flex',
  })

  return (
    <div>
      <Sidebar />
      <Receipts />
    </div>
  )
}

export default AdminView
